import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPTEURS_PAR_UE, STATISTIQUES, UES, chapitresDeUE } from '@/content';
import { EnTetePage } from '@/components/ui/Primitives';
import { IconeFleche } from '@/components/ui/Icones';

export const metadata: Metadata = {
  title: 'Fiches de cours',
  description:
    'Le sommaire complet des fiches de première année de médecine : quatorze matières, découpées en chapitres puis en fiches détaillées.',
};

export default function PageFiches() {
  return (
    <div>
      <EnTetePage
        surTitre="Sommaire"
        titre="Fiches de cours"
        description={`${STATISTIQUES.fiches} fiches réparties sur ${UES.length} matières, découpées en chapitres. Chaque fiche contient le cours structuré, ses points clés, ses pièges, ses flashcards et ses QCM corrigés.`}
      />

      <div className="flex flex-col gap-4">
        {UES.map((ue) => {
          const chapitres = chapitresDeUE(ue.id);
          const compteurs = COMPTEURS_PAR_UE[ue.id];
          return (
            <section key={ue.id} className="carte overflow-hidden">
              <div
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
                style={{ background: ue.couleurClaire }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 items-center rounded-xl px-2.5 text-[11.5px] font-semibold"
                    style={{ background: ue.couleur, color: '#fff' }}
                  >
                    {ue.code}
                  </span>
                  <div>
                    <Link
                      href={`/fiches/${ue.id}`}
                      className="text-[16px] font-semibold tracking-tight hover:underline"
                      style={{ color: ue.couleur }}
                    >
                      {ue.titre}
                    </Link>
                    <div className="text-[12px]" style={{ color: 'var(--texte-2)' }}>
                      {ue.sousTitre}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="capsule px-2.5 py-1 text-[11px]" style={{ background: 'rgba(255,255,255,0.7)', color: ue.couleur }}>
                    {compteurs.fiches} fiches
                  </span>
                  <Link href={`/fiches/${ue.id}`} className="bouton bouton-secondaire px-3.5 py-1.5 text-[12.5px]">
                    Ouvrir
                    <IconeFleche width={14} height={14} />
                  </Link>
                </div>
              </div>

              {chapitres.length === 0 ? (
                <p className="px-5 py-6 text-[13px]" style={{ color: 'var(--texte-3)' }}>
                  Les fiches de cette matière arrivent prochainement.
                </p>
              ) : (
                <div className="grid gap-x-6 gap-y-5 p-5 sm:grid-cols-2 xl:grid-cols-3">
                  {chapitres.map((chapitre) => (
                    <div key={chapitre.titre}>
                      <div
                        className="mb-2 text-[10.5px] font-semibold tracking-[0.1em] uppercase"
                        style={{ color: 'var(--texte-3)' }}
                      >
                        {chapitre.titre}
                      </div>
                      <ul className="flex flex-col gap-0.5">
                        {chapitre.fiches.map((fiche) => (
                          <li key={fiche.id}>
                            <Link
                              href={`/fiches/${ue.id}/${fiche.id.slice(ue.id.length + 1)}`}
                              className="flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-[13.5px] leading-snug transition-colors hover:bg-[var(--surface-2)]"
                            >
                              <span
                                className="text-[11px] tabular-nums"
                                style={{ color: 'var(--texte-3)', minWidth: 16 }}
                              >
                                {fiche.ordre}
                              </span>
                              <span style={{ color: 'var(--texte-2)' }}>{fiche.titre}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
