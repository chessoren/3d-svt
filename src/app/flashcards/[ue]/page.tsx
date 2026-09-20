import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { FLASHCARDS, UES, UE_PAR_ID, flashcardsDeUE } from '@/content';
import type { UEId } from '@/content/types';
import { SessionFlashcards } from '@/components/flashcards/SessionFlashcards';
import { EnTetePage } from '@/components/ui/Primitives';

export function generateStaticParams() {
  return [...UES.map((ue) => ({ ue: ue.id })), { ue: 'tout' }];
}

export async function generateMetadata({ params }: { params: Promise<{ ue: string }> }): Promise<Metadata> {
  const { ue: id } = await params;
  if (id === 'tout') return { title: 'Flashcards — toutes matières' };
  const ue = UE_PAR_ID[id as UEId];
  return { title: ue ? `Flashcards — ${ue.titre}` : 'Matière introuvable' };
}

export default async function PageSessionFlashcards({ params }: { params: Promise<{ ue: string }> }) {
  const { ue: id } = await params;

  const tout = id === 'tout';
  const ue = tout ? null : UE_PAR_ID[id as UEId];
  if (!tout && !ue) notFound();

  const cartes = tout ? FLASHCARDS : flashcardsDeUE(ue!.id);
  const titre = tout ? 'Toutes les matières' : ue!.titre;
  const couleur = tout ? '#7c4df5' : ue!.couleur;

  return (
    <div>
      <EnTetePage
        surTitre="Session de révision"
        titre={titre}
        description={`${cartes.length} cartes. Retournez la carte, jugez honnêtement si vous saviez, et laissez l’algorithme placer la prochaine révision au bon moment.`}
      />
      <Suspense
        fallback={
          <div className="carte flex h-[420px] items-center justify-center">
            <span className="pulsation text-[13px]" style={{ color: 'var(--texte-3)' }}>
              Préparation du paquet…
            </span>
          </div>
        }
      >
        <SessionFlashcards cartes={cartes} titre={titre} couleur={couleur} />
      </Suspense>
    </div>
  );
}
