'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { UES, UE_PAR_ID } from '@/content/ue';
import type { UEId } from '@/content/types';
import { IconeCartes, IconeFiche, IconeQCM, IconeRecherche, IconeSchema } from '@/components/ui/Icones';

type TypeEntree = 'fiche' | 'schema' | 'flashcard' | 'qcm';

interface Entree {
  type: TypeEntree;
  id: string;
  ue: UEId;
  titre: string;
  sousTitre: string;
  chapitre: string;
  url: string;
  texte: string;
}

const LIBELLES: Record<TypeEntree, { nom: string; Icone: typeof IconeFiche; couleur: string }> = {
  fiche: { nom: 'Fiches', Icone: IconeFiche, couleur: '#2f80c4' },
  schema: { nom: 'Schémas', Icone: IconeSchema, couleur: '#e0632f' },
  flashcard: { nom: 'Flashcards', Icone: IconeCartes, couleur: '#7c4df5' },
  qcm: { nom: 'QCM', Icone: IconeQCM, couleur: '#12a065' },
};

function normaliser(texte: string) {
  return texte
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

/** Extrait un court passage autour de la première occurrence du terme. */
function extrait(texte: string, termes: string[]): string | null {
  const normalise = normaliser(texte);
  let position = -1;
  for (const terme of termes) {
    const trouve = normalise.indexOf(terme);
    if (trouve !== -1 && (position === -1 || trouve < position)) position = trouve;
  }
  if (position === -1) return null;
  const debut = Math.max(0, position - 70);
  const fin = Math.min(texte.length, position + 150);
  return (debut > 0 ? '… ' : '') + texte.slice(debut, fin).trim() + (fin < texte.length ? ' …' : '');
}

export function Recherche() {
  const parametres = useSearchParams();
  const [requete, setRequete] = useState(parametres.get('q') ?? '');
  const [entrees, setEntrees] = useState<Entree[] | null>(null);
  const [erreur, setErreur] = useState(false);
  const [typesActifs, setTypesActifs] = useState<Set<TypeEntree>>(
    () => new Set<TypeEntree>(['fiche', 'schema', 'flashcard', 'qcm']),
  );
  const [ueActive, setUeActive] = useState<UEId | 'tout'>('tout');

  useEffect(() => {
    let annule = false;
    fetch('/api/contenu/recherche')
      .then((r) => {
        if (!r.ok) throw new Error('indisponible');
        return r.json();
      })
      .then((donnees: { entrees: Entree[] }) => {
        if (!annule) setEntrees(donnees.entrees);
      })
      .catch(() => {
        if (!annule) setErreur(true);
      });
    return () => {
      annule = true;
    };
  }, []);

  const resultats = useMemo(() => {
    if (!entrees) return [];
    const termes = normaliser(requete.trim())
      .split(/\s+/)
      .filter((t) => t.length >= 2);
    if (termes.length === 0) return [];

    const notes: { entree: Entree; score: number }[] = [];
    for (const entree of entrees) {
      if (!typesActifs.has(entree.type)) continue;
      if (ueActive !== 'tout' && entree.ue !== ueActive) continue;

      const titre = normaliser(entree.titre);
      const corps = normaliser(entree.texte);
      let score = 0;
      let tousPresents = true;
      for (const terme of termes) {
        const dansTitre = titre.includes(terme);
        const dansCorps = corps.includes(terme);
        if (!dansTitre && !dansCorps) {
          tousPresents = false;
          break;
        }
        if (dansTitre) score += titre.startsWith(terme) ? 12 : 8;
        if (dansCorps) score += 2;
      }
      if (!tousPresents) continue;
      if (entree.type === 'fiche') score += 3;
      notes.push({ entree, score });
    }

    return notes.sort((a, b) => b.score - a.score).slice(0, 60);
  }, [entrees, requete, typesActifs, ueActive]);

  const termes = normaliser(requete.trim())
    .split(/\s+/)
    .filter((t) => t.length >= 2);

  const comptesParType = useMemo(() => {
    const compteur: Record<TypeEntree, number> = { fiche: 0, schema: 0, flashcard: 0, qcm: 0 };
    for (const { entree } of resultats) compteur[entree.type] += 1;
    return compteur;
  }, [resultats]);

  return (
    <div>
      <div className="carte flex items-center gap-3 px-5 py-3.5">
        <IconeRecherche width={19} height={19} style={{ color: 'var(--texte-3)' }} />
        <input
          value={requete}
          onChange={(e) => setRequete(e.target.value)}
          placeholder="Rechercher une notion, un mot clé, une enzyme, un muscle…"
          className="w-full bg-transparent text-[15px] outline-none"
          style={{ color: 'var(--texte)' }}
          autoFocus
          aria-label="Rechercher dans tout le contenu"
        />
        {entrees && (
          <span className="hidden shrink-0 text-[11.5px] tabular-nums sm:block" style={{ color: 'var(--texte-3)' }}>
            {entrees.length} éléments indexés
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {(Object.keys(LIBELLES) as TypeEntree[]).map((type) => {
          const actif = typesActifs.has(type);
          const { nom, Icone, couleur } = LIBELLES[type];
          return (
            <button
              key={type}
              type="button"
              onClick={() =>
                setTypesActifs((actuels) => {
                  const suivant = new Set(actuels);
                  if (suivant.has(type)) suivant.delete(type);
                  else suivant.add(type);
                  return suivant.size === 0 ? new Set<TypeEntree>([type]) : suivant;
                })
              }
              className="capsule"
              style={{
                background: actif ? 'var(--surface)' : 'transparent',
                color: actif ? couleur : 'var(--texte-3)',
                boxShadow: actif ? 'var(--ombre-carte)' : 'none',
                border: `1px solid ${actif ? 'var(--bordure)' : 'transparent'}`,
              }}
              aria-pressed={actif}
            >
              <Icone width={14} height={14} />
              {nom}
              {requete && actif && ` (${comptesParType[type]})`}
            </button>
          );
        })}
        <select
          value={ueActive}
          onChange={(e) => setUeActive(e.target.value as UEId | 'tout')}
          className="capsule capsule-neutre ml-auto px-3 py-1.5 text-[12px]"
          aria-label="Filtrer par matière"
        >
          <option value="tout">Toutes les matières</option>
          {UES.map((ue) => (
            <option key={ue.id} value={ue.id}>
              {ue.titre}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        {erreur ? (
          <div className="carte px-6 py-12 text-center">
            <div className="text-base font-semibold">Index de recherche indisponible</div>
            <p className="mx-auto mt-2 max-w-md text-sm" style={{ color: 'var(--texte-2)' }}>
              Vous pouvez néanmoins parcourir le contenu par matière depuis le sommaire des fiches.
            </p>
            <Link href="/fiches" className="bouton bouton-secondaire mt-4 text-[13px]">
              Ouvrir le sommaire
            </Link>
          </div>
        ) : !entrees ? (
          <div className="carte px-6 py-12 text-center">
            <span className="pulsation text-[13px]" style={{ color: 'var(--texte-3)' }}>
              Chargement de l’index…
            </span>
          </div>
        ) : termes.length === 0 ? (
          <div className="carte px-6 py-12 text-center">
            <div className="text-base font-semibold">Que cherchez-vous ?</div>
            <p className="mx-auto mt-2 max-w-lg text-sm" style={{ color: 'var(--texte-2)' }}>
              La recherche porte sur le texte intégral des fiches, les légendes des schémas, les
              flashcards et les justifications des QCM. Essayez par exemple :
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {['glycolyse', 'potentiel d’action', 'plexus brachial', 'loi normale', 'apoptose', 'néphron'].map(
                (exemple) => (
                  <button
                    key={exemple}
                    type="button"
                    onClick={() => setRequete(exemple)}
                    className="capsule capsule-neutre"
                  >
                    {exemple}
                  </button>
                ),
              )}
            </div>
          </div>
        ) : resultats.length === 0 ? (
          <div className="carte px-6 py-12 text-center">
            <div className="text-base font-semibold">Aucun résultat</div>
            <p className="mx-auto mt-2 max-w-md text-sm" style={{ color: 'var(--texte-2)' }}>
              Vérifiez l’orthographe, essayez un terme plus court, ou élargissez les filtres.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            <div className="text-[12.5px]" style={{ color: 'var(--texte-3)' }}>
              {resultats.length} résultat{resultats.length > 1 ? 's' : ''}
            </div>
            {resultats.map(({ entree }) => {
              const ue = UE_PAR_ID[entree.ue];
              const { Icone, couleur } = LIBELLES[entree.type];
              const passage = extrait(entree.texte, termes);
              return (
                <Link
                  key={`${entree.type}-${entree.id}`}
                  href={entree.url}
                  className="carte flex gap-4 p-4 transition-transform hover:-translate-y-0.5"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `color-mix(in srgb, ${couleur} 13%, transparent)`, color: couleur }}
                  >
                    <Icone width={17} height={17} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="capsule px-2 py-0.5 text-[10.5px] font-semibold"
                        style={{ background: ue?.couleurClaire, color: ue?.couleur }}
                      >
                        {ue?.code}
                      </span>
                      <span className="truncate text-[11px]" style={{ color: 'var(--texte-3)' }}>
                        {entree.chapitre}
                      </span>
                    </div>
                    <div className="mt-1 text-[14.5px] leading-snug font-semibold tracking-tight">
                      {entree.titre}
                    </div>
                    <p className="mt-1 line-clamp-2 text-[12.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                      {passage ?? entree.sousTitre}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
