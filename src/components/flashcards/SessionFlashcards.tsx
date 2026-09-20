'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { FlashcardAvecContexte } from '@/content';
import { INTERVALLES_JOURS, cartesAReviser, statistiquesCartes, useProgression } from '@/lib/progression';
import { BoutonExportFlashcards } from '@/components/export/BoutonsExport';
import { AnneauProgression } from '@/components/ui/Primitives';
import { IconeCheck, IconeCroix, IconeFleche, IconeRotation } from '@/components/ui/Icones';

type Mode = 'dues' | 'toutes' | 'difficiles';

export function SessionFlashcards({
  cartes,
  titre,
  couleur,
}: {
  cartes: FlashcardAvecContexte[];
  titre: string;
  couleur: string;
}) {
  const parametres = useSearchParams();
  const ficheFiltre = parametres.get('fiche');

  const { progression, pret, noterCarte } = useProgression();
  const [mode, setMode] = useState<Mode>('dues');
  const [index, setIndex] = useState(0);
  const [retournee, setRetournee] = useState(false);
  const [session, setSession] = useState<{ vues: number; reussies: number }>({ vues: 0, reussies: 0 });
  const [melange, setMelange] = useState(0);

  const cartesDuPerimetre = useMemo(
    () => (ficheFiltre ? cartes.filter((c) => c.ficheId === ficheFiltre) : cartes),
    [cartes, ficheFiltre],
  );

  const file = useMemo(() => {
    if (!pret) return [];
    let selection = cartesDuPerimetre;
    if (mode === 'dues') {
      const dues = new Set(cartesAReviser(progression, cartesDuPerimetre.map((c) => c.id)));
      selection = cartesDuPerimetre.filter((c) => dues.has(c.id));
    } else if (mode === 'difficiles') {
      selection = cartesDuPerimetre.filter((c) => {
        const etat = progression.cartes[c.id];
        return etat !== undefined && etat.boite <= 1 && etat.vues > 0;
      });
    }
    // Mélange déterministe, renouvelé à chaque clic sur « Mélanger ».
    const melangees = [...selection];
    let graine = melange * 9301 + 49297;
    for (let i = melangees.length - 1; i > 0; i -= 1) {
      graine = (graine * 9301 + 49297) % 233280;
      const j = Math.floor((graine / 233280) * (i + 1));
      [melangees[i], melangees[j]] = [melangees[j], melangees[i]];
    }
    return melangees;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartesDuPerimetre, mode, pret, melange, progression.cartes]);

  const carte = file[index];
  const stats = useMemo(
    () => statistiquesCartes(progression, cartesDuPerimetre.map((c) => c.id)),
    [progression, cartesDuPerimetre],
  );

  const repondre = useCallback(
    (reussie: boolean) => {
      if (!carte) return;
      noterCarte(carte.id, reussie);
      setSession((s) => ({ vues: s.vues + 1, reussies: s.reussies + (reussie ? 1 : 0) }));
      setRetournee(false);
      setIndex((i) => i + 1);
    },
    [carte, noterCarte],
  );

  useEffect(() => {
    const surTouche = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        setRetournee((r) => !r);
      }
      if (retournee && (e.key === '1' || e.key === 'ArrowLeft')) repondre(false);
      if (retournee && (e.key === '2' || e.key === 'ArrowRight')) repondre(true);
    };
    window.addEventListener('keydown', surTouche);
    return () => window.removeEventListener('keydown', surTouche);
  }, [retournee, repondre]);

  useEffect(() => {
    setIndex(0);
    setRetournee(false);
  }, [mode, ficheFiltre]);

  const termine = pret && file.length > 0 && index >= file.length;
  const vide = pret && file.length === 0;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_296px]">
      <div className="flex flex-col gap-3">
        {/* Sélecteur de mode */}
        <div className="flex flex-wrap items-center gap-1.5">
          {(
            [
              { id: 'dues' as Mode, libelle: `À réviser (${stats.dues})` },
              { id: 'toutes' as Mode, libelle: `Toutes (${cartesDuPerimetre.length})` },
              { id: 'difficiles' as Mode, libelle: 'Cartes difficiles' },
            ] satisfies { id: Mode; libelle: string }[]
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setMode(option.id)}
              className="capsule"
              style={{
                background: mode === option.id ? 'var(--surface)' : 'transparent',
                color: mode === option.id ? 'var(--texte)' : 'var(--texte-3)',
                boxShadow: mode === option.id ? 'var(--ombre-carte)' : 'none',
                border: `1px solid ${mode === option.id ? 'var(--bordure)' : 'transparent'}`,
              }}
            >
              {option.libelle}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setMelange((m) => m + 1);
              setIndex(0);
              setRetournee(false);
            }}
            className="capsule capsule-neutre ml-auto"
          >
            <IconeRotation width={14} height={14} />
            Mélanger
          </button>
        </div>

        {/* Carte */}
        {!pret ? (
          <div className="carte flex h-[420px] items-center justify-center">
            <span className="pulsation text-[13px]" style={{ color: 'var(--texte-3)' }}>
              Chargement de votre progression…
            </span>
          </div>
        ) : vide ? (
          <div className="carte flex h-[420px] flex-col items-center justify-center gap-3 px-8 text-center">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: 'var(--succes-doux)', color: 'var(--succes)' }}
            >
              <IconeCheck width={26} height={26} />
            </span>
            <div className="text-[17px] font-semibold">
              {mode === 'dues' ? 'Rien à réviser pour le moment' : 'Aucune carte dans ce mode'}
            </div>
            <p className="max-w-sm text-[13.5px]" style={{ color: 'var(--texte-2)' }}>
              {mode === 'dues'
                ? 'Toutes vos cartes de cette matière sont à jour. Revenez plus tard, ou passez en mode « Toutes » pour réviser sans attendre.'
                : 'Répondez d’abord à quelques cartes pour alimenter ce mode.'}
            </p>
            {mode !== 'toutes' && (
              <button type="button" onClick={() => setMode('toutes')} className="bouton bouton-secondaire text-[13px]">
                Réviser toutes les cartes
              </button>
            )}
          </div>
        ) : termine ? (
          <div className="carte flex h-[420px] flex-col items-center justify-center gap-4 px-8 text-center">
            <AnneauProgression
              valeur={session.vues > 0 ? (session.reussies / session.vues) * 100 : 0}
              taille={124}
              sousLibelle="de réussite"
              couleur={couleur}
            />
            <div>
              <div className="text-[18px] font-semibold">Session terminée</div>
              <p className="mt-1 text-[13.5px]" style={{ color: 'var(--texte-2)' }}>
                {session.reussies} carte{session.reussies > 1 ? 's' : ''} sue{session.reussies > 1 ? 's' : ''} sur{' '}
                {session.vues}. Les cartes manquées reviendront dès la prochaine session.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setIndex(0);
                  setSession({ vues: 0, reussies: 0 });
                  setMelange((m) => m + 1);
                }}
                className="bouton bouton-primaire text-[13px]"
              >
                Nouvelle session
              </button>
              <Link href="/flashcards" className="bouton bouton-secondaire text-[13px]">
                Changer de matière
              </Link>
            </div>
          </div>
        ) : (
          carte && (
            <>
              <div className="scene-carte" style={{ height: 420 }}>
                <div
                  className={`carte-3d h-full w-full ${retournee ? 'retournee' : ''}`}
                  onClick={() => setRetournee((r) => !r)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setRetournee((r) => !r);
                  }}
                  aria-label="Retourner la carte"
                >
                  <FaceCarte
                    etiquette="Question"
                    texte={carte.recto}
                    contexte={carte.ficheTitre}
                    couleur={couleur}
                  />
                  <FaceCarte
                    verso
                    etiquette="Réponse"
                    texte={carte.verso}
                    contexte={carte.ficheTitre}
                    couleur={couleur}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-[12px] tabular-nums" style={{ color: 'var(--texte-3)' }}>
                  Carte {index + 1} sur {file.length}
                </span>
                {!retournee ? (
                  <button type="button" onClick={() => setRetournee(true)} className="bouton bouton-primaire text-[13px]">
                    Afficher la réponse
                    <IconeFleche width={15} height={15} />
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => repondre(false)}
                      className="bouton text-[13px]"
                      style={{ background: 'var(--alerte-doux)', color: 'var(--alerte)' }}
                    >
                      <IconeCroix width={15} height={15} />
                      À revoir
                    </button>
                    <button
                      type="button"
                      onClick={() => repondre(true)}
                      className="bouton text-[13px]"
                      style={{ background: 'var(--succes-doux)', color: 'var(--succes)' }}
                    >
                      <IconeCheck width={15} height={15} />
                      Je savais
                    </button>
                  </div>
                )}
              </div>

              <p className="text-center text-[11px]" style={{ color: 'var(--texte-3)' }}>
                Raccourcis : Espace pour retourner, 1 pour « à revoir », 2 pour « je savais ».
              </p>
            </>
          )
        )}
      </div>

      {/* Colonne latérale */}
      <aside className="flex flex-col gap-3">
        <div className="carte p-5">
          <h2 className="text-[14px] font-semibold tracking-tight">{titre}</h2>
          <p className="mt-1 text-[12px]" style={{ color: 'var(--texte-3)' }}>
            {cartesDuPerimetre.length} cartes dans ce paquet
          </p>

          <div className="mt-4 flex flex-col gap-2.5">
            <LigneStat libelle="Nouvelles" valeur={pret ? stats.nouvelles : 0} couleur="var(--texte-3)" total={cartesDuPerimetre.length} />
            <LigneStat libelle="En cours" valeur={pret ? stats.enCours : 0} couleur="var(--attention)" total={cartesDuPerimetre.length} />
            <LigneStat libelle="Acquises" valeur={pret ? stats.acquises : 0} couleur="var(--succes)" total={cartesDuPerimetre.length} />
          </div>
        </div>

        <div className="carte p-5">
          <div className="text-[13px] font-semibold">Comment fonctionne la répétition</div>
          <p className="mt-1.5 text-[12.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
            Chaque carte avance d’une boîte quand vous la savez, et retombe en première boîte sinon.
            L’intervalle avant sa réapparition suit la progression suivante, en jours :
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {INTERVALLES_JOURS.map((jours, i) => (
              <span key={i} className="capsule capsule-neutre px-2.5 py-1 text-[11px]">
                Boîte {i} · {jours === 0 ? 'même jour' : `${jours} j`}
              </span>
            ))}
          </div>
        </div>

        <BoutonExportFlashcards
          cartes={cartesDuPerimetre}
          titre={titre}
          couleur={couleur}
          libelle="Imprimer le paquet"
        />
      </aside>
    </div>
  );
}

function LigneStat({
  libelle,
  valeur,
  couleur,
  total,
}: {
  libelle: string;
  valeur: number;
  couleur: string;
  total: number;
}) {
  const pourcentage = total > 0 ? (valeur / total) * 100 : 0;
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between text-[12px]">
        <span style={{ color: 'var(--texte-2)' }}>{libelle}</span>
        <span className="font-semibold tabular-nums">{valeur}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full" style={{ background: 'var(--surface-3)' }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${pourcentage}%`, background: couleur }} />
      </div>
    </div>
  );
}

function FaceCarte({
  etiquette,
  texte,
  contexte,
  couleur,
  verso = false,
}: {
  etiquette: string;
  texte: string;
  contexte: string;
  couleur: string;
  verso?: boolean;
}) {
  return (
    <div className={`face-carte carte cursor-pointer p-8 ${verso ? 'face-verso' : ''}`}>
      <div className="flex items-center justify-between">
        <span
          className="capsule px-2.5 py-1 text-[10.5px] font-semibold tracking-wide uppercase"
          style={{ background: `color-mix(in srgb, ${couleur} 14%, transparent)`, color: couleur }}
        >
          {etiquette}
        </span>
        <span className="truncate text-[11px]" style={{ color: 'var(--texte-3)', maxWidth: '55%' }}>
          {contexte}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center px-2 text-center">
        <p
          className={verso ? 'text-[16px] leading-relaxed' : 'text-[19px] leading-snug font-semibold tracking-tight'}
          style={{ color: verso ? 'var(--texte-2)' : 'var(--texte)' }}
        >
          {texte}
        </p>
      </div>
      <div className="text-center text-[11px]" style={{ color: 'var(--texte-3)' }}>
        Cliquez sur la carte pour la retourner
      </div>
    </div>
  );
}
