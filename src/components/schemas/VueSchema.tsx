'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Schema } from '@/content/types';
import { IconeCroix, IconeLoupePlus, IconeRotation, IconeTelechargement } from '@/components/ui/Icones';

/**
 * Affiche une planche vectorielle avec zoom, déplacement et légende numérotée.
 * Le dessin est un SVG statique fourni par le contenu : il reste net à tout
 * niveau de zoom et s'imprime sans perte.
 */
export function VueSchema({
  schema,
  compact = false,
  hauteur,
}: {
  schema: Schema;
  compact?: boolean;
  hauteur?: number;
}) {
  const [echelle, setEchelle] = useState(1);
  const [decalage, setDecalage] = useState({ x: 0, y: 0 });
  const [saisie, setSaisie] = useState<{ x: number; y: number } | null>(null);
  const [pleinEcran, setPleinEcran] = useState(false);
  const conteneur = useRef<HTMLDivElement>(null);

  const reinitialiser = useCallback(() => {
    setEchelle(1);
    setDecalage({ x: 0, y: 0 });
  }, []);

  const zoomer = useCallback((facteur: number) => {
    setEchelle((e) => Math.min(6, Math.max(0.5, Number((e * facteur).toFixed(3)))));
  }, []);

  useEffect(() => {
    if (!pleinEcran) return;
    const surEchap = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPleinEcran(false);
    };
    window.addEventListener('keydown', surEchap);
    return () => window.removeEventListener('keydown', surEchap);
  }, [pleinEcran]);

  const surMolette = useCallback(
    (e: React.WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey && compact) return;
      e.preventDefault();
      zoomer(e.deltaY < 0 ? 1.12 : 1 / 1.12);
    },
    [compact, zoomer],
  );

  function telechargerSvg() {
    const contenu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${schema.viewBox}">${schema.svg}</svg>`;
    const blob = new Blob([contenu], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const lien = document.createElement('a');
    lien.href = url;
    lien.download = `${schema.id}.svg`;
    lien.click();
    URL.revokeObjectURL(url);
  }

  const dessin = (
    <div
      ref={conteneur}
      className="relative flex-1 overflow-hidden rounded-2xl"
      style={{
        background: 'var(--surface-2)',
        minHeight: hauteur ?? (compact ? 300 : 460),
        cursor: saisie ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
      onWheel={surMolette}
      onPointerDown={(e) => {
        (e.target as Element).setPointerCapture?.(e.pointerId);
        setSaisie({ x: e.clientX - decalage.x, y: e.clientY - decalage.y });
      }}
      onPointerMove={(e) => {
        if (!saisie) return;
        setDecalage({ x: e.clientX - saisie.x, y: e.clientY - saisie.y });
      }}
      onPointerUp={() => setSaisie(null)}
      onPointerLeave={() => setSaisie(null)}
      onDoubleClick={() => zoomer(1.5)}
    >
      <div
        className="flex h-full w-full items-center justify-center p-4"
        style={{
          transform: `translate(${decalage.x}px, ${decalage.y}px) scale(${echelle})`,
          transformOrigin: 'center center',
          transition: saisie ? 'none' : 'transform 0.12s ease-out',
        }}
      >
        <svg
          viewBox={schema.viewBox}
          role="img"
          aria-label={schema.titre}
          className="h-full max-h-full w-full"
          style={{ maxHeight: hauteur ?? (compact ? 300 : 460) }}
          dangerouslySetInnerHTML={{ __html: schema.svg }}
        />
      </div>

      <div className="sans-impression absolute right-3 bottom-3 flex items-center gap-1.5">
        <BoutonOutil onClick={() => zoomer(1 / 1.25)} libelle="Dézoomer">
          <span className="text-[15px] leading-none font-semibold">−</span>
        </BoutonOutil>
        <span
          className="capsule capsule-active px-2.5 py-1 text-[11px] tabular-nums"
          style={{ minWidth: 48, justifyContent: 'center' }}
        >
          {Math.round(echelle * 100)} %
        </span>
        <BoutonOutil onClick={() => zoomer(1.25)} libelle="Zoomer">
          <span className="text-[15px] leading-none font-semibold">+</span>
        </BoutonOutil>
        <BoutonOutil onClick={reinitialiser} libelle="Recadrer">
          <IconeRotation width={15} height={15} />
        </BoutonOutil>
        {!pleinEcran && (
          <BoutonOutil onClick={() => setPleinEcran(true)} libelle="Afficher en grand">
            <IconeLoupePlus width={15} height={15} />
          </BoutonOutil>
        )}
      </div>
    </div>
  );

  const contenu = (
    <div className={compact ? 'flex flex-col gap-3' : 'grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]'}>
      {dessin}
      {schema.legendes.length > 0 && (
        <div className={compact ? '' : 'defilement-fin overflow-y-auto'} style={compact ? undefined : { maxHeight: hauteur ?? 460 }}>
          <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: 'var(--texte-3)' }}>
            Légende
          </div>
          <ol className={compact ? 'grid gap-1.5 sm:grid-cols-2' : 'flex flex-col gap-1.5'}>
            {schema.legendes.map((legende) => (
              <li key={legende.ref} className="flex items-start gap-2.5 text-[13px] leading-snug">
                <span
                  className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10.5px] font-semibold"
                  style={{ background: 'var(--accent-doux)', color: 'var(--accent)' }}
                >
                  {legende.ref}
                </span>
                <span style={{ color: 'var(--texte-2)' }}>{legende.texte}</span>
              </li>
            ))}
          </ol>
          {!compact && (
            <button type="button" onClick={telechargerSvg} className="bouton bouton-secondaire mt-4 w-full py-2 text-[13px]">
              <IconeTelechargement width={15} height={15} />
              Télécharger le SVG
            </button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {contenu}
      {pleinEcran && (
        <div
          className="sans-impression fixed inset-0 z-50 flex flex-col p-4 sm:p-8"
          style={{ background: 'color-mix(in srgb, var(--page) 94%, transparent)', backdropFilter: 'blur(10px)' }}
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="truncate text-[16px] font-semibold tracking-tight">{schema.titre}</div>
              <div className="truncate text-[12px]" style={{ color: 'var(--texte-3)' }}>
                {schema.description}
              </div>
            </div>
            <button type="button" onClick={() => setPleinEcran(false)} className="bouton bouton-secondaire px-3 py-2">
              <IconeCroix width={17} height={17} />
              Fermer
            </button>
          </div>
          <div className="carte flex min-h-0 flex-1 flex-col p-3">
            <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
              {dessin}
              <div className="defilement-fin min-h-0 overflow-y-auto pr-1">
                <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: 'var(--texte-3)' }}>
                  Légende
                </div>
                <ol className="flex flex-col gap-1.5">
                  {schema.legendes.map((legende) => (
                    <li key={legende.ref} className="flex items-start gap-2.5 text-[13px] leading-snug">
                      <span
                        className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10.5px] font-semibold"
                        style={{ background: 'var(--accent-doux)', color: 'var(--accent)' }}
                      >
                        {legende.ref}
                      </span>
                      <span style={{ color: 'var(--texte-2)' }}>{legende.texte}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function BoutonOutil({
  children,
  onClick,
  libelle,
}: {
  children: React.ReactNode;
  onClick: () => void;
  libelle: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={libelle}
      aria-label={libelle}
      className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
      style={{ background: 'var(--surface)', color: 'var(--texte-2)', boxShadow: 'var(--ombre-carte)' }}
    >
      {children}
    </button>
  );
}
