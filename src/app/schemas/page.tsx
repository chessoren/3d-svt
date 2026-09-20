import type { Metadata } from 'next';
import Link from 'next/link';
import { SCHEMAS, UES, UE_PAR_ID } from '@/content';
import type { UEId } from '@/content/types';
import { EnTetePage } from '@/components/ui/Primitives';
import { BoutonExportSchemas } from '@/components/export/BoutonsExport';

export const metadata: Metadata = {
  title: 'Schémas',
  description:
    'Planches vectorielles légendées couvrant la biochimie, la biologie cellulaire, l’anatomie, la physiologie et les autres matières de première année.',
};

export default async function PageSchemas({
  searchParams,
}: {
  searchParams: Promise<{ matiere?: string }>;
}) {
  const { matiere } = await searchParams;
  const filtre = matiere && UE_PAR_ID[matiere as UEId] ? (matiere as UEId) : null;
  const planches = filtre ? SCHEMAS.filter((s) => s.ue === filtre) : SCHEMAS;
  const matieresPresentes = UES.filter((ue) => SCHEMAS.some((s) => s.ue === ue.id));

  return (
    <div>
      <EnTetePage
        surTitre="Planches"
        titre="Schémas détaillés"
        description={`${SCHEMAS.length} planches vectorielles entièrement légendées. Zoomez sans perte de netteté, affichez en plein écran, exportez en SVG ou en PDF.`}
        actions={
          <BoutonExportSchemas
            schemas={planches}
            titre={filtre ? UE_PAR_ID[filtre].titre : 'Toutes les planches'}
            couleur={filtre ? UE_PAR_ID[filtre].couleur : undefined}
          />
        }
      />

      <div className="sans-impression mb-5 flex flex-wrap gap-1.5">
        <Link
          href="/schemas"
          className="capsule"
          style={{
            background: !filtre ? 'var(--surface)' : 'transparent',
            color: !filtre ? 'var(--texte)' : 'var(--texte-3)',
            boxShadow: !filtre ? 'var(--ombre-carte)' : 'none',
            border: `1px solid ${!filtre ? 'var(--bordure)' : 'transparent'}`,
          }}
        >
          Toutes ({SCHEMAS.length})
        </Link>
        {matieresPresentes.map((ue) => {
          const actif = filtre === ue.id;
          const nombre = SCHEMAS.filter((s) => s.ue === ue.id).length;
          return (
            <Link
              key={ue.id}
              href={`/schemas?matiere=${ue.id}`}
              className="capsule"
              style={{
                background: actif ? ue.couleurClaire : 'transparent',
                color: actif ? ue.couleur : 'var(--texte-3)',
                border: `1px solid ${actif ? 'transparent' : 'transparent'}`,
                boxShadow: actif ? 'var(--ombre-carte)' : 'none',
              }}
            >
              {ue.titre} ({nombre})
            </Link>
          );
        })}
      </div>

      {planches.length === 0 ? (
        <div className="carte px-6 py-14 text-center">
          <div className="text-base font-semibold">Aucune planche pour cette matière</div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {planches.map((schema) => {
            const ue = UE_PAR_ID[schema.ue];
            return (
              <Link
                key={schema.id}
                href={`/schemas/${schema.id}`}
                className="carte group flex flex-col overflow-hidden transition-transform hover:-translate-y-0.5"
              >
                <div
                  className="flex items-center justify-center overflow-hidden"
                  style={{ background: '#ffffff', height: 178 }}
                >
                  <svg
                    viewBox={schema.viewBox}
                    role="img"
                    aria-label={schema.titre}
                    style={{ width: '100%', height: '100%' }}
                    dangerouslySetInnerHTML={{ __html: schema.svg }}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="capsule px-2 py-0.5 text-[10.5px] font-semibold"
                      style={{ background: ue.couleurClaire, color: ue.couleur }}
                    >
                      {ue.code}
                    </span>
                    <span className="truncate text-[11px]" style={{ color: 'var(--texte-3)' }}>
                      {schema.categorie}
                    </span>
                  </div>
                  <div className="text-[14.5px] leading-snug font-semibold tracking-tight">{schema.titre}</div>
                  <p className="line-clamp-3 text-[12.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                    {schema.description}
                  </p>
                  <span className="mt-auto text-[11px]" style={{ color: 'var(--texte-3)' }}>
                    {schema.legendes.length} entrées de légende
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
