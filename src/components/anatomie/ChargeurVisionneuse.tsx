'use client';

import dynamic from 'next/dynamic';
import { IconeCorps } from '@/components/ui/Icones';

/**
 * La visionneuse utilise WebGL : elle est chargée uniquement côté navigateur,
 * après le rendu initial de la page, pour ne pas alourdir le premier affichage.
 */
const Visionneuse3D = dynamic(
  () => import('./Visionneuse3D').then((m) => m.Visionneuse3D),
  {
    ssr: false,
    loading: () => (
      <div className="carte flex h-[76vh] min-h-[560px] flex-col items-center justify-center gap-4">
        <span
          className="pulsation flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: 'var(--accent-doux)', color: 'var(--accent)' }}
        >
          <IconeCorps width={26} height={26} />
        </span>
        <div className="text-center">
          <div className="text-[15px] font-semibold">Construction du modèle anatomique…</div>
          <p className="mt-1 text-[13px]" style={{ color: 'var(--texte-2)' }}>
            Toutes les structures sont générées dans votre navigateur, sans téléchargement.
          </p>
        </div>
      </div>
    ),
  },
);

export function ChargeurVisionneuse({ urlsFiches }: { urlsFiches: Record<string, string> }) {
  return <Visionneuse3D urlsFiches={urlsFiches} />;
}
