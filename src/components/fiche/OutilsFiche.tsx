'use client';

import { useEffect, useState } from 'react';
import { useProgression } from '@/lib/progression';
import { IconeCheck, IconeEtoile } from '@/components/ui/Icones';

export function MarqueurLecture({ ficheId }: { ficheId: string }) {
  const { progression, pret, marquerFicheLue, oublierFiche, basculerFavori } = useProgression();
  const lue = Boolean(progression.fichesLues[ficheId]);
  const favorite = progression.favoris.includes(ficheId);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={!pret}
        onClick={() => (lue ? oublierFiche(ficheId) : marquerFicheLue(ficheId))}
        className="bouton text-[13px]"
        style={{
          background: lue ? 'var(--succes-doux)' : 'var(--surface)',
          color: lue ? 'var(--succes)' : 'var(--texte)',
          borderColor: 'var(--bordure)',
          boxShadow: 'var(--ombre-carte)',
        }}
      >
        <IconeCheck width={15} height={15} />
        {lue ? 'Fiche lue' : 'Marquer comme lue'}
      </button>
      <button
        type="button"
        disabled={!pret}
        onClick={() => basculerFavori(ficheId)}
        className="bouton bouton-secondaire px-3 text-[13px]"
        aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        title={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        style={favorite ? { color: 'var(--attention)' } : undefined}
      >
        <IconeEtoile width={15} height={15} fill={favorite ? 'currentColor' : 'none'} />
      </button>
    </div>
  );
}

/** Sommaire latéral qui suit la lecture. */
export function SommaireFiche({
  sections,
}: {
  sections: { id: string; titre: string }[];
}) {
  const [actif, setActif] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const observateur = new IntersectionObserver(
      (entrees) => {
        const visibles = entrees
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibles[0]) setActif(visibles[0].target.id);
      },
      { rootMargin: '-96px 0px -65% 0px', threshold: 0 },
    );
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observateur.observe(element);
    }
    return () => observateur.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Sommaire de la fiche" className="flex flex-col gap-0.5">
      <div className="mb-2 text-[10.5px] font-semibold tracking-[0.1em] uppercase" style={{ color: 'var(--texte-3)' }}>
        Sommaire
      </div>
      {sections.map((section, index) => {
        const estActif = actif === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex gap-2.5 rounded-lg px-2.5 py-1.5 text-[12.5px] leading-snug transition-colors"
            style={{
              background: estActif ? 'var(--surface-3)' : 'transparent',
              color: estActif ? 'var(--texte)' : 'var(--texte-2)',
              fontWeight: estActif ? 600 : 400,
            }}
          >
            <span className="tabular-nums" style={{ color: 'var(--texte-3)' }}>
              {index + 1}
            </span>
            {section.titre}
          </a>
        );
      })}
    </nav>
  );
}
