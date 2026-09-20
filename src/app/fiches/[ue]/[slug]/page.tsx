import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FICHES,
  ficheParSlug,
  getUE,
  schemasDeFiche,
  slugDeFiche,
  voisinesDeFiche,
} from '@/content';
import { RenduBloc } from '@/components/fiche/RenduBloc';
import { MarqueurLecture, SommaireFiche } from '@/components/fiche/OutilsFiche';
import { BoutonsExportFiche } from '@/components/export/BoutonsExport';
import { VueSchema } from '@/components/schemas/VueSchema';
import { BarreDifficulte } from '@/components/ui/Primitives';
import {
  IconeAlerte,
  IconeAmpoule,
  IconeCartes,
  IconeCible,
  IconeFleche,
  IconeFlecheGauche,
  IconeHorloge,
  IconeLivre,
  IconeQCM,
} from '@/components/ui/Icones';

export function generateStaticParams() {
  return FICHES.map((fiche) => ({ ue: fiche.ue, slug: slugDeFiche(fiche) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ue: string; slug: string }>;
}): Promise<Metadata> {
  const { ue, slug } = await params;
  const fiche = ficheParSlug(ue, slug);
  if (!fiche) return { title: 'Fiche introuvable' };
  return {
    title: fiche.titre,
    description: fiche.sousTitre,
    keywords: fiche.motsCles,
  };
}

export default async function PageFiche({
  params,
}: {
  params: Promise<{ ue: string; slug: string }>;
}) {
  const { ue: ueId, slug } = await params;
  const fiche = ficheParSlug(ueId, slug);
  if (!fiche) notFound();

  const ue = getUE(fiche.ue);
  const schemas = schemasDeFiche(fiche);
  const { precedente, suivante } = voisinesDeFiche(fiche);

  return (
    <article className="pt-5 lg:pt-0">
      {/* Fil d'Ariane */}
      <nav className="sans-impression mb-4 flex flex-wrap items-center gap-1.5 text-[12px]" style={{ color: 'var(--texte-3)' }}>
        <Link href="/fiches" className="hover:underline">
          Fiches
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={`/fiches/${ue.id}`} className="hover:underline" style={{ color: ue.couleur }}>
          {ue.titre}
        </Link>
        <span aria-hidden="true">/</span>
        <span>{fiche.chapitre}</span>
      </nav>

      <header className="carte overflow-hidden">
        <div className="h-1.5" style={{ background: ue.couleur }} />
        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="capsule px-2.5 py-1 text-[11px] font-semibold"
              style={{ background: ue.couleurClaire, color: ue.couleur }}
            >
              {ue.code} · {fiche.chapitre}
            </span>
            <span className="capsule capsule-neutre px-2.5 py-1 text-[11px]">
              <IconeHorloge width={13} height={13} />
              {fiche.duree} min
            </span>
            <BarreDifficulte niveau={fiche.difficulte} />
          </div>

          <h1 className="mt-3.5 text-[27px] leading-[1.15] font-semibold tracking-tight sm:text-[34px]">
            {fiche.titre}
          </h1>
          <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
            {fiche.sousTitre}
          </p>

          <div className="sans-impression mt-5 flex flex-wrap items-center gap-2">
            <BoutonsExportFiche ficheId={fiche.id} />
            <MarqueurLecture ficheId={fiche.id} />
          </div>

          {fiche.motsCles.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5 border-t pt-4">
              {fiche.motsCles.map((mot) => (
                <span key={mot} className="capsule capsule-neutre px-2.5 py-1 text-[11px]">
                  {mot}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_236px]">
        <div className="min-w-0">
          {/* Objectifs */}
          {fiche.objectifs.length > 0 && (
            <section className="carte mb-5 p-6">
              <div className="mb-3 flex items-center gap-2">
                <IconeCible width={17} height={17} style={{ color: ue.couleur }} />
                <h2 className="text-[15px] font-semibold tracking-tight">Objectifs de la fiche</h2>
              </div>
              <ul className="flex flex-col gap-2">
                {fiche.objectifs.map((objectif, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
                      style={{ background: ue.couleurClaire, color: ue.couleur }}
                    >
                      {i + 1}
                    </span>
                    {objectif}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Corps de la fiche */}
          {fiche.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="carte mb-5 scroll-mt-24 p-6 sm:p-7">
              <div className="mb-4 flex items-baseline gap-3">
                <span
                  className="text-[13px] font-semibold tabular-nums"
                  style={{ color: ue.couleur }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-[19px] leading-snug font-semibold tracking-tight">{section.titre}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {section.blocs.map((bloc, i) => (
                  <RenduBloc key={i} bloc={bloc} />
                ))}
              </div>
            </section>
          ))}

          {/* Schémas rattachés */}
          {schemas.length > 0 && (
            <section className="carte mb-5 p-6 sm:p-7">
              <h2 className="mb-4 text-[19px] font-semibold tracking-tight">Schémas de la fiche</h2>
              <div className="flex flex-col gap-7">
                {schemas.map((schema) => (
                  <div key={schema.id}>
                    <div className="mb-2">
                      <Link href={`/schemas/${schema.id}`} className="text-[15px] font-semibold tracking-tight hover:underline">
                        {schema.titre}
                      </Link>
                      <p className="mt-0.5 text-[13px]" style={{ color: 'var(--texte-2)' }}>
                        {schema.description}
                      </p>
                    </div>
                    <VueSchema schema={schema} compact />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Points clés */}
          <section className="carte mb-5 p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-2">
              <IconeAmpoule width={18} height={18} style={{ color: ue.couleur }} />
              <h2 className="text-[19px] font-semibold tracking-tight">À retenir absolument</h2>
            </div>
            <ul className="flex flex-col gap-2.5">
              {fiche.pointsCles.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-2xl px-4 py-3 text-[14.5px] leading-relaxed"
                  style={{ background: ue.couleurClaire, color: 'var(--texte)' }}
                >
                  <span className="font-semibold tabular-nums" style={{ color: ue.couleur }}>
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Erreurs fréquentes */}
          {fiche.erreursFrequentes.length > 0 && (
            <section className="carte mb-5 p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-2">
                <IconeAlerte width={18} height={18} style={{ color: 'var(--alerte)' }} />
                <h2 className="text-[19px] font-semibold tracking-tight">Erreurs fréquentes</h2>
              </div>
              <ul className="flex flex-col gap-2">
                {fiche.erreursFrequentes.map((erreur, i) => (
                  <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: 'var(--alerte)' }}
                      aria-hidden="true"
                    />
                    {erreur}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Moyens mnémotechniques */}
          {fiche.mnemotechniques.length > 0 && (
            <section className="carte mb-5 p-6 sm:p-7">
              <h2 className="mb-4 text-[19px] font-semibold tracking-tight">Moyens mnémotechniques</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {fiche.mnemotechniques.map((mnemo, i) => (
                  <div key={i} className="carte-plate p-4">
                    <div className="text-[14.5px] leading-snug font-semibold" style={{ color: 'var(--violet)' }}>
                      « {mnemo.moyen} »
                    </div>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                      {mnemo.explication}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Renvois vers l'entraînement */}
          <section className="sans-impression mb-5 grid gap-3 sm:grid-cols-2">
            <Link href={`/flashcards/${ue.id}?fiche=${fiche.id}`} className="carte flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ background: 'var(--violet-doux)', color: 'var(--violet)' }}
              >
                <IconeCartes width={21} height={21} />
              </span>
              <div>
                <div className="text-[14.5px] font-semibold tracking-tight">
                  {fiche.flashcards.length} flashcards
                </div>
                <div className="text-[12.5px]" style={{ color: 'var(--texte-2)' }}>
                  Réviser cette fiche en répétition espacée
                </div>
              </div>
            </Link>
            <Link href={`/qcm/${ue.id}?fiche=${fiche.id}`} className="carte flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ background: 'var(--succes-doux)', color: 'var(--succes)' }}
              >
                <IconeQCM width={21} height={21} />
              </span>
              <div>
                <div className="text-[14.5px] font-semibold tracking-tight">{fiche.qcm.length} QCM corrigés</div>
                <div className="text-[12.5px]" style={{ color: 'var(--texte-2)' }}>
                  Chaque proposition est justifiée
                </div>
              </div>
            </Link>
          </section>

          {/* Sources */}
          {fiche.sources.length > 0 && (
            <section className="carte mb-5 p-6">
              <div className="mb-2.5 flex items-center gap-2">
                <IconeLivre width={16} height={16} style={{ color: 'var(--texte-3)' }} />
                <h2 className="text-[13px] font-semibold tracking-tight">Ouvrages de référence consultés</h2>
              </div>
              <ul className="flex flex-col gap-1">
                {fiche.sources.map((source, i) => (
                  <li key={i} className="text-[12.5px]" style={{ color: 'var(--texte-2)' }}>
                    {source}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Navigation entre fiches */}
          <nav className="sans-impression grid gap-3 sm:grid-cols-2">
            {precedente ? (
              <Link
                href={`/fiches/${ue.id}/${slugDeFiche(precedente)}`}
                className="carte flex items-center gap-3 p-4 transition-transform hover:-translate-y-0.5"
              >
                <IconeFlecheGauche width={17} height={17} style={{ color: 'var(--texte-3)' }} />
                <div className="min-w-0">
                  <div className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
                    Fiche précédente
                  </div>
                  <div className="truncate text-[13.5px] font-semibold">{precedente.titre}</div>
                </div>
              </Link>
            ) : (
              <span />
            )}
            {suivante && (
              <Link
                href={`/fiches/${ue.id}/${slugDeFiche(suivante)}`}
                className="carte flex items-center justify-end gap-3 p-4 text-right transition-transform hover:-translate-y-0.5"
              >
                <div className="min-w-0">
                  <div className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
                    Fiche suivante
                  </div>
                  <div className="truncate text-[13.5px] font-semibold">{suivante.titre}</div>
                </div>
                <IconeFleche width={17} height={17} style={{ color: 'var(--texte-3)' }} />
              </Link>
            )}
          </nav>
        </div>

        {/* Sommaire latéral */}
        <aside className="sans-impression hidden lg:block">
          <div className="sticky top-8">
            <div className="carte p-4">
              <SommaireFiche sections={fiche.sections.map((s) => ({ id: s.id, titre: s.titre }))} />
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
