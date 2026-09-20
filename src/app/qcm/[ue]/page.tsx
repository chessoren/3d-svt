import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { QCMS, UES, UE_PAR_ID, qcmDeUE } from '@/content';
import type { UEId } from '@/content/types';
import { SessionQCM } from '@/components/qcm/SessionQCM';
import { EnTetePage } from '@/components/ui/Primitives';

export function generateStaticParams() {
  return [...UES.map((ue) => ({ ue: ue.id })), { ue: 'tout' }];
}

export async function generateMetadata({ params }: { params: Promise<{ ue: string }> }): Promise<Metadata> {
  const { ue: id } = await params;
  if (id === 'tout') return { title: 'QCM — toutes matières' };
  const ue = UE_PAR_ID[id as UEId];
  return { title: ue ? `QCM — ${ue.titre}` : 'Matière introuvable' };
}

export default async function PageSessionQCM({ params }: { params: Promise<{ ue: string }> }) {
  const { ue: id } = await params;

  const tout = id === 'tout';
  const ue = tout ? null : UE_PAR_ID[id as UEId];
  if (!tout && !ue) notFound();

  const questions = tout ? QCMS : qcmDeUE(ue!.id);
  const titre = tout ? 'Série mixte' : ue!.titre;
  const couleur = tout ? '#12a065' : ue!.couleur;

  return (
    <div>
      <EnTetePage
        surTitre="Série de QCM"
        titre={titre}
        description={`${questions.length} questions disponibles. Une ou plusieurs propositions peuvent être exactes : chaque item se juge indépendamment.`}
      />
      <Suspense
        fallback={
          <div className="carte flex h-[360px] items-center justify-center">
            <span className="pulsation text-[13px]" style={{ color: 'var(--texte-3)' }}>
              Préparation de la série…
            </span>
          </div>
        }
      >
        <SessionQCM questions={questions} titre={titre} couleur={couleur} cleProgression={`qcm-${id}`} />
      </Suspense>
    </div>
  );
}
