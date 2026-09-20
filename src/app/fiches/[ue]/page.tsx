import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COMPTEURS_PAR_UE, UES, UE_PAR_ID, chapitresDeUE, schemasDeUE, slugDeFiche } from '@/content';
import type { UEId } from '@/content/types';
import { BarreDifficulte, EnTetePage, Statistique } from '@/components/ui/Primitives';
import { BoutonsExportUE } from '@/components/export/BoutonsExport';
import { IconeCartes, IconeFiche, IconeHorloge, IconeQCM, IconeSchema } from '@/components/ui/Icones';

export function generateStaticParams() {
  return UES.map((ue) => ({ ue: ue.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ ue: string }> }): Promise<Metadata> {
  const { ue: id } = await params;
  const ue = UE_PAR_ID[id as UEId];
  if (!ue) return { title: 'Matière introuvable' };
  return { title: ue.titre, description: ue.description };
}

export default async function PageUE({ params }: { params: Promise<{ ue: string }> }) {
  const { ue: id } = await params;
  const ue = UE_PAR_ID[id as UEId];
  if (!ue) notFound();

  const chapitres = chapitresDeUE(ue.id);
  const compteurs = COMPTEURS_PAR_UE[ue.id];
  const schemas = schemasDeUE(ue.id);
  const minutes = chapitres.flatMap((c) => c.fiches).reduce((s, f) => s + f.duree, 0);

  return (
    <div>
      <EnTetePage
        surTitre={`Matière ${ue.code}`}
        titre={ue.titre}
        description={ue.description}
        actions={<BoutonsExportUE ueId={ue.id} />}
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Statistique valeur={compteurs.fiches} libelle="Fiches" icone={<IconeFiche width={18} height={18} />} accent={ue.couleur} />
        <Statistique valeur={compteurs.flashcards} libelle="Flashcards" icone={<IconeCartes width={18} height={18} />} accent={ue.couleur} />
        <Statistique valeur={compteurs.qcm} libelle="QCM" icone={<IconeQCM width={18} height={18} />} accent={ue.couleur} />
        <Statistique valeur={compteurs.schemas} libelle="Schémas" icone={<IconeSchema width={18} height={18} />} accent={ue.couleur} />
        <Statistique valeur={Math.round(minutes / 60)} unite="h" libelle="De lecture" icone={<IconeHorloge width={18} height={18} />} accent={ue.couleur} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link href={`/flashcards/${ue.id}`} className="bouton bouton-secondaire text-[13px]">
          <IconeCartes width={15} height={15} />
          Réviser les flashcards
        </Link>
        <Link href={`/qcm/${ue.id}`} className="bouton bouton-secondaire text-[13px]">
          <IconeQCM width={15} height={15} />
          S’entraîner aux QCM
        </Link>
        {schemas.length > 0 && (
          <Link href={`/schemas?matiere=${ue.id}`} className="bouton bouton-secondaire text-[13px]">
            <IconeSchema width={15} height={15} />
            Voir les {schemas.length} schémas
          </Link>
        )}
      </div>

      {chapitres.length === 0 ? (
        <div className="carte mt-6 px-6 py-14 text-center">
          <div className="text-base font-semibold">Fiches en préparation</div>
          <p className="mx-auto mt-2 max-w-md text-sm" style={{ color: 'var(--texte-2)' }}>
            Les fiches de cette matière ne sont pas encore publiées.
          </p>
        </div>
      ) : (
        <div className="mt-7 flex flex-col gap-7">
          {chapitres.map((chapitre) => (
            <section key={chapitre.titre}>
              <div className="mb-3 flex items-center gap-3">
                <h2 className="text-[17px] font-semibold tracking-tight">{chapitre.titre}</h2>
                <span className="text-[12px]" style={{ color: 'var(--texte-3)' }}>
                  {chapitre.fiches.length} fiche{chapitre.fiches.length > 1 ? 's' : ''}
                </span>
                <span className="h-px flex-1" style={{ background: 'var(--bordure)' }} />
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {chapitre.fiches.map((fiche) => (
                  <Link
                    key={fiche.id}
                    href={`/fiches/${ue.id}/${slugDeFiche(fiche)}`}
                    className="carte group flex flex-col gap-2.5 p-5 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-[12px] font-semibold tabular-nums"
                        style={{ background: ue.couleurClaire, color: ue.couleur }}
                      >
                        {fiche.ordre}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--texte-3)' }}>
                        <IconeHorloge width={13} height={13} />
                        {fiche.duree} min
                      </span>
                    </div>
                    <div>
                      <div className="text-[15px] leading-snug font-semibold tracking-tight">{fiche.titre}</div>
                      <p className="mt-1 text-[12.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                        {fiche.sousTitre}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-2 border-t pt-2.5">
                      <BarreDifficulte niveau={fiche.difficulte} />
                      <span className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
                        {fiche.flashcards.length} cartes · {fiche.qcm.length} QCM
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
