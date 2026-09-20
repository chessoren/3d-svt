import Link from 'next/link';
import type { ReactNode } from 'react';

export function EnTetePage({
  surTitre,
  titre,
  description,
  actions,
}: {
  surTitre?: string;
  titre: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between lg:pt-0">
      <div className="min-w-0">
        {surTitre && (
          <div
            className="mb-2 text-[11px] font-semibold tracking-[0.14em] uppercase"
            style={{ color: 'var(--texte-3)' }}
          >
            {surTitre}
          </div>
        )}
        <h1 className="text-[26px] leading-tight font-semibold tracking-tight sm:text-[32px]">{titre}</h1>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--texte-2)' }}>
            {description}
          </p>
        )}
      </div>
      {actions && <div className="sans-impression flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Statistique({
  valeur,
  libelle,
  unite,
  icone,
  accent,
}: {
  valeur: string | number;
  libelle: string;
  unite?: string;
  icone?: ReactNode;
  accent?: string;
}) {
  return (
    <div className="carte flex items-center gap-3.5 p-4">
      {icone && (
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: accent ? `color-mix(in srgb, ${accent} 14%, transparent)` : 'var(--surface-3)',
            color: accent ?? 'var(--texte-2)',
          }}
        >
          {icone}
        </span>
      )}
      <div className="min-w-0">
        <div className="text-[11px] font-medium" style={{ color: 'var(--texte-3)' }}>
          {libelle}
        </div>
        <div className="truncate text-[19px] font-semibold tracking-tight">
          {valeur}
          {unite && (
            <span className="ml-1 text-[12px] font-medium" style={{ color: 'var(--texte-3)' }}>
              {unite}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function AnneauProgression({
  valeur,
  taille = 132,
  epaisseur = 11,
  libelle,
  sousLibelle,
  couleur = 'var(--accent)',
}: {
  valeur: number;
  taille?: number;
  epaisseur?: number;
  libelle?: string;
  sousLibelle?: string;
  couleur?: string;
}) {
  const borne = Math.max(0, Math.min(100, valeur));
  const rayon = (taille - epaisseur) / 2;
  const circonference = 2 * Math.PI * rayon;
  const rempli = (borne / 100) * circonference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: taille, height: taille }}>
      <svg width={taille} height={taille} className="-rotate-90">
        <circle
          cx={taille / 2}
          cy={taille / 2}
          r={rayon}
          fill="none"
          stroke="var(--surface-3)"
          strokeWidth={epaisseur}
        />
        <circle
          cx={taille / 2}
          cy={taille / 2}
          r={rayon}
          fill="none"
          stroke={couleur}
          strokeWidth={epaisseur}
          strokeLinecap="round"
          strokeDasharray={`${rempli} ${circonference - rempli}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[24px] leading-none font-semibold tracking-tight">{libelle ?? `${Math.round(borne)} %`}</span>
        {sousLibelle && (
          <span className="mt-1 text-[11px]" style={{ color: 'var(--texte-3)' }}>
            {sousLibelle}
          </span>
        )}
      </div>
    </div>
  );
}

export function Pastille({
  children,
  couleur,
  fond,
}: {
  children: ReactNode;
  couleur?: string;
  fond?: string;
}) {
  return (
    <span
      className="capsule"
      style={{
        background: fond ?? 'var(--surface-3)',
        color: couleur ?? 'var(--texte-2)',
        padding: '0.28rem 0.7rem',
        fontSize: '0.75rem',
      }}
    >
      {children}
    </span>
  );
}

export function SectionVide({ titre, texte, action }: { titre: string; texte: string; action?: ReactNode }) {
  return (
    <div className="carte flex flex-col items-center gap-3 px-6 py-14 text-center">
      <div className="text-base font-semibold">{titre}</div>
      <p className="max-w-md text-sm" style={{ color: 'var(--texte-2)' }}>
        {texte}
      </p>
      {action}
    </div>
  );
}

export function LienCarte({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`carte block transition-all hover:-translate-y-0.5 ${className}`}
      style={{ boxShadow: 'var(--ombre-carte)' }}
    >
      {children}
    </Link>
  );
}

export function BarreDifficulte({ niveau }: { niveau: 1 | 2 | 3 }) {
  const libelles = { 1: 'Accessible', 2: 'Intermédiaire', 3: 'Exigeant' } as const;
  const couleurs = { 1: 'var(--succes)', 2: 'var(--attention)', 3: 'var(--alerte)' } as const;
  return (
    <span className="inline-flex items-center gap-1.5" title={`Difficulté : ${libelles[niveau]}`}>
      <span className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className="h-1.5 w-3 rounded-full"
            style={{ background: n <= niveau ? couleurs[niveau] : 'var(--surface-3)' }}
          />
        ))}
      </span>
      <span className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
        {libelles[niveau]}
      </span>
    </span>
  );
}
