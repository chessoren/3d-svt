import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPTEURS_PAR_UE, FLASHCARDS, STATISTIQUES, UES } from '@/content';
import { EnTetePage } from '@/components/ui/Primitives';
import { IconeCartes, IconeFleche } from '@/components/ui/Icones';

export const metadata: Metadata = {
  title: 'Flashcards',
  description:
    'Paquets de flashcards à répétition espacée couvrant tout le programme de première année de médecine.',
};

export default function PageFlashcards() {
  return (
    <div>
      <EnTetePage
        surTitre="Mémorisation"
        titre="Flashcards"
        description={`${STATISTIQUES.flashcards} cartes réparties par matière. La répétition espacée ramène chaque carte au moment où vous êtes sur le point de l’oublier : révisez court, mais régulièrement.`}
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {UES.map((ue) => {
          const compteurs = COMPTEURS_PAR_UE[ue.id];
          if (compteurs.flashcards === 0) return null;
          return (
            <Link
              key={ue.id}
              href={`/flashcards/${ue.id}`}
              className="carte group flex flex-col gap-3 p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{ background: ue.couleurClaire, color: ue.couleur }}
                >
                  <IconeCartes width={20} height={20} />
                </span>
                <span className="text-[19px] font-semibold tabular-nums tracking-tight">
                  {compteurs.flashcards}
                </span>
              </div>
              <div>
                <div className="text-[15px] leading-snug font-semibold tracking-tight">{ue.titre}</div>
                <div className="mt-1 text-[12.5px]" style={{ color: 'var(--texte-2)' }}>
                  {compteurs.fiches} fiches couvertes
                </div>
              </div>
              <span
                className="mt-auto inline-flex items-center gap-1.5 text-[12.5px] font-medium"
                style={{ color: ue.couleur }}
              >
                Commencer une session
                <IconeFleche width={14} height={14} />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="carte mt-5 flex flex-wrap items-center justify-between gap-4 p-5">
        <div>
          <div className="text-[15px] font-semibold tracking-tight">Toutes matières confondues</div>
          <p className="mt-1 text-[13px]" style={{ color: 'var(--texte-2)' }}>
            {FLASHCARDS.length} cartes disponibles. Une session mélange les matières pour un entraînement complet.
          </p>
        </div>
        <Link href="/flashcards/tout" className="bouton bouton-primaire">
          Réviser tout le programme
          <IconeFleche width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}
