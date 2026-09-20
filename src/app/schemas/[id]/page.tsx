import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SCHEMAS, UE_PAR_ID, getFiche, getSchema, slugDeFiche } from '@/content';
import { VueSchema } from '@/components/schemas/VueSchema';
import { EnTetePage } from '@/components/ui/Primitives';
import { BoutonExportSchemas, BoutonImprimer } from '@/components/export/BoutonsExport';
import { IconeFleche } from '@/components/ui/Icones';

export function generateStaticParams() {
  return SCHEMAS.map((schema) => ({ id: schema.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const schema = getSchema(id);
  if (!schema) return { title: 'Schéma introuvable' };
  return { title: schema.titre, description: schema.description, keywords: schema.motsCles };
}

export default async function PageSchema({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const schema = getSchema(id);
  if (!schema) notFound();

  const ue = UE_PAR_ID[schema.ue];
  const fiche = schema.ficheLiee ? getFiche(schema.ficheLiee) : undefined;
  const voisins = SCHEMAS.filter((s) => s.ue === schema.ue && s.id !== schema.id).slice(0, 4);

  return (
    <div>
      <nav
        className="sans-impression mt-5 mb-3 flex flex-wrap items-center gap-1.5 text-[12px] lg:mt-0"
        style={{ color: 'var(--texte-3)' }}
      >
        <Link href="/schemas" className="hover:underline">
          Schémas
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={`/schemas?matiere=${ue.id}`} className="hover:underline" style={{ color: ue.couleur }}>
          {ue.titre}
        </Link>
        <span aria-hidden="true">/</span>
        <span>{schema.categorie}</span>
      </nav>

      <EnTetePage
        titre={schema.titre}
        description={schema.description}
        actions={
          <>
            <BoutonExportSchemas schemas={[schema]} titre={schema.titre} couleur={ue.couleur} libelle="PDF de la planche" />
            <BoutonImprimer />
          </>
        }
      />

      <div className="carte p-4 sm:p-5">
        <VueSchema schema={schema} hauteur={560} />
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="carte p-5">
          <h2 className="text-[15px] font-semibold tracking-tight">Mots clés</h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {schema.motsCles.map((mot) => (
              <span key={mot} className="capsule capsule-neutre px-2.5 py-1 text-[11.5px]">
                {mot}
              </span>
            ))}
          </div>

          {voisins.length > 0 && (
            <>
              <h2 className="mt-6 text-[15px] font-semibold tracking-tight">Autres planches de la matière</h2>
              <ul className="mt-2.5 flex flex-col gap-1">
                {voisins.map((voisin) => (
                  <li key={voisin.id}>
                    <Link
                      href={`/schemas/${voisin.id}`}
                      className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-[13px] transition-colors hover:bg-[var(--surface-2)]"
                    >
                      <span style={{ color: 'var(--texte-2)' }}>{voisin.titre}</span>
                      <IconeFleche width={14} height={14} style={{ color: 'var(--texte-3)' }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {fiche && (
          <Link
            href={`/fiches/${fiche.ue}/${slugDeFiche(fiche)}`}
            className="carte flex flex-col gap-2 p-5 transition-transform hover:-translate-y-0.5"
          >
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: 'var(--texte-3)' }}>
              Fiche associée
            </div>
            <div className="text-[15.5px] leading-snug font-semibold tracking-tight">{fiche.titre}</div>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
              {fiche.sousTitre}
            </p>
            <span
              className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-medium"
              style={{ color: ue.couleur }}
            >
              Lire la fiche
              <IconeFleche width={14} height={14} />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
