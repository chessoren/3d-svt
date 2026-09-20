import type { Metadata } from 'next';
import { FICHES, slugDeFiche } from '@/content';
import { NOMBRE_DE_PIECES, SYSTEMES, compterParSysteme } from '@/lib/anatomie/modele';
import { ChargeurVisionneuse } from '@/components/anatomie/ChargeurVisionneuse';
import { EnTetePage } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Anatomie 3D',
  description:
    'Modèle tridimensionnel du corps humain entièrement manipulable : squelette, muscles, organes, vaisseaux, nerfs et système lymphatique, avec plans de coupe et fiches associées.',
};

const RACCOURCIS = [
  { touche: 'Clic gauche', action: 'Faire tourner le modèle' },
  { touche: 'Clic droit', action: 'Déplacer la vue' },
  { touche: 'Molette', action: 'Zoomer et dézoomer' },
  { touche: 'Clic sur une pièce', action: 'Ouvrir sa description' },
  { touche: 'I', action: 'Isoler la structure sélectionnée' },
  { touche: 'R', action: 'Réinitialiser la vue' },
  { touche: 'Échap', action: 'Fermer le panneau' },
];

export default function PageAnatomie3D() {
  const urlsFiches = Object.fromEntries(
    FICHES.map((fiche) => [fiche.id, `/fiches/${fiche.ue}/${slugDeFiche(fiche)}`]),
  );
  const compteurs = compterParSysteme();

  return (
    <div>
      <EnTetePage
        surTitre="Exploration"
        titre="Anatomie 3D"
        description={`${NOMBRE_DE_PIECES} structures anatomiques nommées, réparties en sept systèmes. Faites tourner le modèle, isolez une pièce, tranchez le corps selon les trois plans de référence, et ouvrez la fiche correspondante.`}
      />

      <ChargeurVisionneuse urlsFiches={urlsFiches} />

      <section className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="carte p-5">
          <h2 className="text-[15px] font-semibold tracking-tight">Les systèmes disponibles</h2>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {SYSTEMES.map((systeme) => (
              <div key={systeme.id} className="carte-plate flex gap-3 p-3.5">
                <span
                  className="mt-0.5 h-3 w-3 shrink-0 rounded-full"
                  style={{ background: systeme.couleur }}
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[13.5px] font-semibold">{systeme.nom}</span>
                    <span className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
                      {compteurs[systeme.id]} pièces
                    </span>
                  </div>
                  <p className="mt-1 text-[12.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                    {systeme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carte p-5">
          <h2 className="text-[15px] font-semibold tracking-tight">Commandes</h2>
          <dl className="mt-3 flex flex-col gap-2">
            {RACCOURCIS.map((raccourci) => (
              <div key={raccourci.touche} className="flex items-center justify-between gap-3">
                <dt>
                  <span
                    className="rounded-lg px-2 py-1 font-mono text-[11px]"
                    style={{ background: 'var(--surface-3)', color: 'var(--texte-2)' }}
                  >
                    {raccourci.touche}
                  </span>
                </dt>
                <dd className="text-right text-[12.5px]" style={{ color: 'var(--texte-2)' }}>
                  {raccourci.action}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 rounded-2xl p-4" style={{ background: 'var(--accent-doux)' }}>
            <div className="text-[13px] font-semibold">Un modèle construit, pas téléchargé</div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
              Chaque structure est générée par calcul à partir de repères anatomiques mesurés sur un
              sujet de référence de 1,75 m. Il s’agit d’un modèle pédagogique schématique, destiné à
              situer et à réviser les structures, et non d’une reconstruction issue d’imagerie médicale.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
