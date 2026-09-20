import Link from 'next/link';
import { COMPTEURS_PAR_UE, FLASHCARDS, STATISTIQUES, UES } from '@/content';
import { TableauDeBord } from '@/components/TableauDeBord';
import { Statistique } from '@/components/ui/Primitives';
import {
  IconeCartes,
  IconeCorps,
  IconeFiche,
  IconeFleche,
  IconeHorloge,
  IconeQCM,
  IconeSchema,
  IconeTelechargement,
} from '@/components/ui/Icones';

const ACCES_RAPIDE = [
  {
    href: '/fiches',
    titre: 'Fiches de cours',
    texte: 'Le cours structuré, chapitre par chapitre, avec tableaux, encadrés et points clés.',
    Icone: IconeFiche,
    couleur: '#2f80c4',
  },
  {
    href: '/flashcards',
    titre: 'Flashcards',
    texte: 'Répétition espacée intégrée : chaque carte revient au bon moment.',
    Icone: IconeCartes,
    couleur: '#7c4df5',
  },
  {
    href: '/schemas',
    titre: 'Schémas détaillés',
    texte: 'Planches vectorielles légendées, zoomables et exportables.',
    Icone: IconeSchema,
    couleur: '#e0632f',
  },
  {
    href: '/qcm',
    titre: 'QCM corrigés',
    texte: 'Chaque proposition justifiée, comme au concours.',
    Icone: IconeQCM,
    couleur: '#12a065',
  },
];

export default function PageAccueil() {
  const idsCartes = FLASHCARDS.map((c) => c.id);
  const heures = Math.round(STATISTIQUES.minutes / 60);

  return (
    <div className="pt-5 lg:pt-0">
      {/* Bandeau d'introduction */}
      <section
        className="carte relative overflow-hidden p-7 sm:p-9"
        style={{
          background:
            'linear-gradient(120deg, color-mix(in srgb, var(--accent) 10%, var(--surface)), var(--surface) 55%)',
        }}
      >
        <div className="relative z-10 max-w-2xl">
          <span className="capsule capsule-neutre mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--succes)' }}
              aria-hidden="true"
            />
            Contenu relu, sans génération automatique
          </span>
          <h1 className="text-[30px] leading-[1.12] font-semibold tracking-tight sm:text-[42px]">
            Toute la première année de médecine,
            <br className="hidden sm:block" /> en capsules de révision.
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
            Fiches complètes, flashcards à répétition espacée, schémas vectoriels légendés, QCM
            entièrement corrigés et un modèle 3D manipulable du corps humain. Tout est téléchargeable
            en PDF et fonctionne hors ligne.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link href="/fiches" className="bouton bouton-primaire">
              Commencer à réviser
              <IconeFleche width={17} height={17} />
            </Link>
            <Link href="/anatomie-3d" className="bouton bouton-sombre">
              <IconeCorps width={17} height={17} />
              Explorer le corps en 3D
            </Link>
            <Link href="/telechargements" className="bouton bouton-secondaire">
              <IconeTelechargement width={17} height={17} />
              Tout télécharger en PDF
            </Link>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Statistique
          valeur={STATISTIQUES.fiches}
          libelle="Fiches de cours"
          icone={<IconeFiche width={19} height={19} />}
          accent="#2f80c4"
        />
        <Statistique
          valeur={STATISTIQUES.flashcards}
          libelle="Flashcards"
          icone={<IconeCartes width={19} height={19} />}
          accent="#7c4df5"
        />
        <Statistique
          valeur={STATISTIQUES.qcm}
          libelle="QCM corrigés"
          icone={<IconeQCM width={19} height={19} />}
          accent="#12a065"
        />
        <Statistique
          valeur={STATISTIQUES.schemas}
          libelle="Schémas légendés"
          icone={<IconeSchema width={19} height={19} />}
          accent="#e0632f"
        />
        <Statistique
          valeur={heures}
          unite="h"
          libelle="De lecture"
          icone={<IconeHorloge width={19} height={19} />}
          accent="#b07d3a"
        />
      </section>

      {/* Progression + accès rapide */}
      <section className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
        <TableauDeBord
          totalFiches={STATISTIQUES.fiches}
          idsCartes={idsCartes}
          totalQcm={STATISTIQUES.qcm}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {ACCES_RAPIDE.map(({ href, titre, texte, Icone, couleur }) => (
            <Link
              key={href}
              href={href}
              className="carte group flex flex-col gap-3 p-5 transition-transform hover:-translate-y-0.5"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ background: `color-mix(in srgb, ${couleur} 13%, transparent)`, color: couleur }}
              >
                <Icone width={21} height={21} />
              </span>
              <div>
                <div className="flex items-center gap-1.5 text-[15px] font-semibold tracking-tight">
                  {titre}
                  <IconeFleche
                    width={15}
                    height={15}
                    className="opacity-0 transition-opacity group-hover:opacity-60"
                  />
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                  {texte}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Matières */}
      <section className="mt-9">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-[21px] font-semibold tracking-tight">Les {UES.length} matières</h2>
            <p className="mt-1 text-[13px]" style={{ color: 'var(--texte-2)' }}>
              Le programme de PASS et de LAS, découpé en chapitres puis en fiches.
            </p>
          </div>
          <Link href="/fiches" className="bouton bouton-secondaire px-4 py-2 text-[13px]">
            Voir le sommaire
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {UES.map((ue) => {
            const compteurs = COMPTEURS_PAR_UE[ue.id];
            return (
              <Link
                key={ue.id}
                href={`/fiches/${ue.id}`}
                className="carte group flex flex-col gap-3 p-5 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="flex h-10 items-center justify-center rounded-2xl px-3 text-[12px] font-semibold tracking-wide"
                    style={{ background: ue.couleurClaire, color: ue.couleur }}
                  >
                    {ue.code}
                  </span>
                  <span className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
                    {compteurs.fiches} fiche{compteurs.fiches > 1 ? 's' : ''}
                  </span>
                </div>
                <div>
                  <div className="text-[15.5px] leading-snug font-semibold tracking-tight">{ue.titre}</div>
                  <div className="mt-1 text-[12px]" style={{ color: 'var(--texte-3)' }}>
                    {ue.sousTitre}
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                  {ue.description}
                </p>
                <div
                  className="mt-auto flex flex-wrap items-center gap-1.5 border-t pt-3 text-[11px]"
                  style={{ color: 'var(--texte-3)' }}
                >
                  <span className="capsule capsule-neutre px-2.5 py-1 text-[11px]">
                    {compteurs.flashcards} cartes
                  </span>
                  <span className="capsule capsule-neutre px-2.5 py-1 text-[11px]">{compteurs.qcm} QCM</span>
                  {compteurs.schemas > 0 && (
                    <span className="capsule capsule-neutre px-2.5 py-1 text-[11px]">
                      {compteurs.schemas} schémas
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Engagements */}
      <section className="mt-9 grid gap-3 sm:grid-cols-3">
        {[
          {
            titre: 'Vérifié, pas généré à la volée',
            texte:
              'Chaque fiche a été relue et croisée avec les ouvrages de référence cités en bas de page. Aucun texte n’est produit par un modèle au moment où vous consultez le site.',
          },
          {
            titre: 'Tout fonctionne hors ligne',
            texte:
              'Pas de compte, pas de serveur, pas d’appel réseau pendant la révision. Votre progression reste dans votre navigateur.',
          },
          {
            titre: 'Exportable intégralement',
            texte:
              'Fiches, paquets de flashcards, schémas et QCM se téléchargent en PDF, à l’unité, par matière ou en une seule fois.',
          },
        ].map((item) => (
          <div key={item.titre} className="carte p-5">
            <div className="text-[14.5px] font-semibold tracking-tight">{item.titre}</div>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
              {item.texte}
            </p>
          </div>
        ))}
      </section>

      <p className="mt-8 text-center text-[11.5px] leading-relaxed" style={{ color: 'var(--texte-3)' }}>
        MediCapsule est un outil de révision destiné aux étudiants. Il ne remplace ni le cours de votre
        faculté, ni un avis médical.
      </p>
    </div>
  );
}
