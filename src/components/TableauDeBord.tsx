'use client';

import Link from 'next/link';
import { useProgression, statistiquesCartes } from '@/lib/progression';
import { AnneauProgression } from './ui/Primitives';
import { IconeCartes, IconeCible, IconeFiche, IconeFleche, IconeQCM } from './ui/Icones';

export function TableauDeBord({
  totalFiches,
  idsCartes,
  totalQcm,
}: {
  totalFiches: number;
  idsCartes: string[];
  totalQcm: number;
}) {
  const { progression, pret, reinitialiser } = useProgression();

  const lues = Object.keys(progression.fichesLues).length;
  const cartes = statistiquesCartes(progression, idsCartes);
  const sessionsQcm = Object.values(progression.qcm);
  const totalPoints = sessionsQcm.reduce((s, r) => s + r.score, 0);
  const totalQuestions = sessionsQcm.reduce((s, r) => s + r.total, 0);
  const reussite = totalQuestions > 0 ? Math.round((totalPoints / totalQuestions) * 100) : 0;

  const pourcentageGlobal = Math.round(
    ((totalFiches > 0 ? lues / totalFiches : 0) * 0.5 +
      (idsCartes.length > 0 ? cartes.acquises / idsCartes.length : 0) * 0.5) *
      100,
  );

  return (
    <div className="carte flex flex-col gap-5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[17px] font-semibold tracking-tight">Ma progression</h2>
          <p className="mt-1 text-[12px]" style={{ color: 'var(--texte-3)' }}>
            Enregistrée sur cet appareil uniquement
          </p>
        </div>
        <AnneauProgression
          valeur={pret ? pourcentageGlobal : 0}
          taille={104}
          epaisseur={9}
          sousLibelle="global"
        />
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <TuileProgression
          icone={<IconeFiche width={16} height={16} />}
          valeur={pret ? `${lues}/${totalFiches}` : '—'}
          libelle="Fiches lues"
          couleur="var(--info)"
        />
        <TuileProgression
          icone={<IconeCartes width={16} height={16} />}
          valeur={pret ? `${cartes.acquises}/${idsCartes.length}` : '—'}
          libelle="Cartes acquises"
          couleur="var(--violet)"
        />
        <TuileProgression
          icone={<IconeQCM width={16} height={16} />}
          valeur={pret && totalQuestions > 0 ? `${reussite} %` : '—'}
          libelle="Réussite QCM"
          couleur="var(--succes)"
        />
      </div>

      <div
        className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3"
        style={{ background: 'var(--accent-doux)' }}
      >
        <div className="flex items-center gap-2.5">
          <IconeCible width={18} height={18} style={{ color: 'var(--accent)' }} />
          <div className="text-[13px] leading-tight">
            <div className="font-semibold">
              {pret ? `${cartes.dues} carte${cartes.dues > 1 ? 's' : ''} à réviser` : 'Chargement…'}
            </div>
            <div className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
              {totalQcm} QCM disponibles au total
            </div>
          </div>
        </div>
        <Link href="/flashcards" className="bouton bouton-primaire px-4 py-2 text-[13px]">
          Réviser
          <IconeFleche width={15} height={15} />
        </Link>
      </div>

      {pret && (lues > 0 || cartes.acquises > 0 || sessionsQcm.length > 0) && (
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Effacer toute la progression enregistrée sur cet appareil ?')) reinitialiser();
          }}
          className="self-start text-[11px] underline-offset-2 hover:underline"
          style={{ color: 'var(--texte-3)' }}
        >
          Réinitialiser ma progression
        </button>
      )}
    </div>
  );
}

function TuileProgression({
  icone,
  valeur,
  libelle,
  couleur,
}: {
  icone: React.ReactNode;
  valeur: string;
  libelle: string;
  couleur: string;
}) {
  return (
    <div className="carte-plate flex flex-col gap-1.5 p-3">
      <span style={{ color: couleur }}>{icone}</span>
      <span className="text-[15px] font-semibold tracking-tight">{valeur}</span>
      <span className="text-[10.5px] leading-tight" style={{ color: 'var(--texte-3)' }}>
        {libelle}
      </span>
    </div>
  );
}
