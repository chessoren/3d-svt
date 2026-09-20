import type { Metadata } from 'next';
import { Suspense } from 'react';
import { STATISTIQUES } from '@/content';
import { Recherche } from '@/components/recherche/Recherche';
import { EnTetePage } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Recherche',
  description:
    'Recherche en texte intégral dans les fiches, les schémas, les flashcards et les QCM de première année de médecine.',
};

export default function PageRecherche() {
  const total = STATISTIQUES.fiches + STATISTIQUES.schemas + STATISTIQUES.flashcards + STATISTIQUES.qcm;

  return (
    <div>
      <EnTetePage
        surTitre="Tout le site"
        titre="Recherche"
        description={`${total} éléments consultables : le texte intégral des fiches, les légendes des schémas, les flashcards et les justifications des QCM. La recherche s’exécute entièrement dans votre navigateur.`}
      />
      <Suspense
        fallback={
          <div className="carte px-6 py-12 text-center">
            <span className="pulsation text-[13px]" style={{ color: 'var(--texte-3)' }}>
              Préparation de la recherche…
            </span>
          </div>
        }
      >
        <Recherche />
      </Suspense>
    </div>
  );
}
