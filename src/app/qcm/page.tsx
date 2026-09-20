import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPTEURS_PAR_UE, QCMS, STATISTIQUES, UES } from '@/content';
import { EnTetePage } from '@/components/ui/Primitives';
import { IconeFleche, IconeQCM } from '@/components/ui/Icones';

export const metadata: Metadata = {
  title: 'QCM corrigés',
  description:
    'Questions à choix multiples de première année de médecine, chaque proposition étant justifiée individuellement.',
};

export default function PageQCM() {
  return (
    <div>
      <EnTetePage
        surTitre="Entraînement"
        titre="QCM corrigés"
        description={`${STATISTIQUES.qcm} questions et ${STATISTIQUES.propositions} propositions, toutes justifiées une par une. Choisissez le mode entraînement pour une correction immédiate, ou le mode examen pour vous placer dans les conditions du concours.`}
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {UES.map((ue) => {
          const compteurs = COMPTEURS_PAR_UE[ue.id];
          if (compteurs.qcm === 0) return null;
          return (
            <Link
              key={ue.id}
              href={`/qcm/${ue.id}`}
              className="carte group flex flex-col gap-3 p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{ background: ue.couleurClaire, color: ue.couleur }}
                >
                  <IconeQCM width={20} height={20} />
                </span>
                <span className="text-[19px] font-semibold tabular-nums tracking-tight">{compteurs.qcm}</span>
              </div>
              <div>
                <div className="text-[15px] leading-snug font-semibold tracking-tight">{ue.titre}</div>
                <div className="mt-1 text-[12.5px]" style={{ color: 'var(--texte-2)' }}>
                  {compteurs.qcm * 5} propositions justifiées
                </div>
              </div>
              <span
                className="mt-auto inline-flex items-center gap-1.5 text-[12.5px] font-medium"
                style={{ color: ue.couleur }}
              >
                S’entraîner
                <IconeFleche width={14} height={14} />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="carte mt-5 flex flex-wrap items-center justify-between gap-4 p-5">
        <div>
          <div className="text-[15px] font-semibold tracking-tight">Concours blanc</div>
          <p className="mt-1 text-[13px]" style={{ color: 'var(--texte-2)' }}>
            Une série tirée au hasard dans les {QCMS.length} questions de toutes les matières.
          </p>
        </div>
        <Link href="/qcm/tout" className="bouton bouton-primaire">
          Lancer une série mixte
          <IconeFleche width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}
