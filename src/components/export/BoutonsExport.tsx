'use client';

import { useCallback, useState } from 'react';
import type { Fiche, Schema, UE } from '@/content/types';
import type { FlashcardAvecContexte, QCMAvecContexte } from '@/content';
import { IconeImprimer, IconeTelechargement } from '@/components/ui/Icones';

/* -------------------------------------------------------------------------- */
/*  Utilitaires communs                                                        */
/* -------------------------------------------------------------------------- */

type Etat = { enCours: boolean; message: string | null; erreur: string | null };

function useExport() {
  const [etat, setEtat] = useState<Etat>({ enCours: false, message: null, erreur: null });

  const lancer = useCallback(
    async (travail: (avancement: (texte: string) => void) => Promise<void>) => {
      setEtat({ enCours: true, message: 'Préparation…', erreur: null });
      try {
        await travail((texte) => setEtat((e) => ({ ...e, message: texte })));
        setEtat({ enCours: false, message: null, erreur: null });
      } catch (erreur) {
        console.error(erreur);
        setEtat({
          enCours: false,
          message: null,
          erreur: "L’export a échoué. Réessayez, ou utilisez le bouton d’impression.",
        });
      }
    },
    [],
  );

  return { etat, lancer };
}

async function recuperer<T>(url: string): Promise<T> {
  const reponse = await fetch(url);
  if (!reponse.ok) throw new Error(`Chargement impossible : ${url}`);
  return (await reponse.json()) as T;
}

function Message({ etat }: { etat: Etat }) {
  if (etat.erreur) {
    return (
      <span className="text-[11.5px]" style={{ color: 'var(--alerte)' }}>
        {etat.erreur}
      </span>
    );
  }
  if (etat.enCours && etat.message) {
    return (
      <span className="pulsation text-[11.5px]" style={{ color: 'var(--texte-3)' }}>
        {etat.message}
      </span>
    );
  }
  return null;
}

export function BoutonImprimer({ libelle = 'Imprimer' }: { libelle?: string }) {
  return (
    <button type="button" onClick={() => window.print()} className="bouton bouton-secondaire text-[13px]">
      <IconeImprimer width={15} height={15} />
      {libelle}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Export d'une fiche                                                         */
/* -------------------------------------------------------------------------- */

export function BoutonsExportFiche({ ficheId }: { ficheId: string }) {
  const { etat, lancer } = useExport();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={etat.enCours}
        className="bouton bouton-primaire text-[13px]"
        onClick={() =>
          lancer(async (avancement) => {
            avancement('Chargement de la fiche…');
            const donnees = await recuperer<{ fiche: Fiche; ue: UE; schemas: Schema[] }>(
              `/api/contenu/fiche/${ficheId}`,
            );
            avancement('Génération du PDF…');
            const { exporterFiche } = await import('@/lib/pdf/exports');
            await exporterFiche(donnees.fiche, donnees.ue, donnees.schemas);
          })
        }
      >
        <IconeTelechargement width={15} height={15} />
        {etat.enCours ? 'Génération…' : 'Télécharger en PDF'}
      </button>
      <BoutonImprimer />
      <Message etat={etat} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Export d'une matière                                                       */
/* -------------------------------------------------------------------------- */

interface ReponseUE {
  ue: UE;
  fiches: Fiche[];
  schemas: Schema[];
  schemasParFiche: Record<string, string[]>;
}

function construireCarteSchemas(donnees: ReponseUE): Map<string, Schema[]> {
  const parId = new Map(donnees.schemas.map((s) => [s.id, s]));
  return new Map(
    Object.entries(donnees.schemasParFiche).map(([ficheId, ids]) => [
      ficheId,
      ids.map((id) => parId.get(id)).filter((s): s is Schema => Boolean(s)),
    ]),
  );
}

export function BoutonsExportUE({ ueId }: { ueId: string }) {
  const { etat, lancer } = useExport();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={etat.enCours}
        className="bouton bouton-primaire text-[13px]"
        onClick={() =>
          lancer(async (avancement) => {
            avancement('Chargement de la matière…');
            const donnees = await recuperer<ReponseUE>(`/api/contenu/ue/${ueId}`);
            avancement('Génération du PDF…');
            const { exporterUE } = await import('@/lib/pdf/exports');
            await exporterUE(
              donnees.ue,
              donnees.fiches,
              construireCarteSchemas(donnees),
              undefined,
              (fait, total) => avancement(`Fiche ${fait} sur ${total}…`),
            );
          })
        }
      >
        <IconeTelechargement width={15} height={15} />
        {etat.enCours ? 'Génération…' : 'PDF de la matière'}
      </button>
      <Message etat={etat} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Exports globaux (page Téléchargements)                                     */
/* -------------------------------------------------------------------------- */

interface ReponseTout {
  ues: UE[];
  fiches: Fiche[];
  schemas: Schema[];
  schemasParFiche: Record<string, string[]>;
}

export function BoutonExportTout({ libelle = 'Tout télécharger en PDF' }: { libelle?: string }) {
  const { etat, lancer } = useExport();

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        disabled={etat.enCours}
        className="bouton bouton-primaire"
        onClick={() =>
          lancer(async (avancement) => {
            avancement('Chargement du contenu complet…');
            const donnees = await recuperer<ReponseTout>('/api/contenu/tout');
            const parId = new Map(donnees.schemas.map((s) => [s.id, s]));
            const carte = new Map(
              Object.entries(donnees.schemasParFiche).map(([ficheId, ids]) => [
                ficheId,
                ids.map((id) => parId.get(id)).filter((s): s is Schema => Boolean(s)),
              ]),
            );
            const fichesParUE = new Map<string, Fiche[]>();
            for (const fiche of donnees.fiches) {
              const liste = fichesParUE.get(fiche.ue) ?? [];
              liste.push(fiche);
              fichesParUE.set(fiche.ue, liste);
            }
            avancement('Génération du recueil…');
            const { exporterTout } = await import('@/lib/pdf/exports');
            await exporterTout(donnees.ues, fichesParUE, carte, undefined, (fait, total) =>
              avancement(`Fiche ${fait} sur ${total}…`),
            );
          })
        }
      >
        <IconeTelechargement width={17} height={17} />
        {etat.enCours ? 'Génération en cours…' : libelle}
      </button>
      <Message etat={etat} />
    </div>
  );
}

export function BoutonExportFlashcards({
  cartes,
  titre,
  couleur,
  libelle = 'Paquet à imprimer',
  variante = 'secondaire',
}: {
  cartes: FlashcardAvecContexte[];
  titre: string;
  couleur?: string;
  libelle?: string;
  variante?: 'primaire' | 'secondaire';
}) {
  const { etat, lancer } = useExport();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={etat.enCours || cartes.length === 0}
        className={`bouton bouton-${variante} text-[13px]`}
        onClick={() =>
          lancer(async (avancement) => {
            avancement('Mise en page des cartes…');
            const { exporterFlashcards } = await import('@/lib/pdf/exports');
            await exporterFlashcards(cartes, titre, couleur);
          })
        }
      >
        <IconeTelechargement width={15} height={15} />
        {etat.enCours ? 'Génération…' : libelle}
      </button>
      <Message etat={etat} />
    </div>
  );
}

export function BoutonExportQCM({
  questions,
  titre,
  couleur,
  avecCorrections = true,
  libelle = 'PDF des QCM',
}: {
  questions: QCMAvecContexte[];
  titre: string;
  couleur?: string;
  avecCorrections?: boolean;
  libelle?: string;
}) {
  const { etat, lancer } = useExport();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={etat.enCours || questions.length === 0}
        className="bouton bouton-secondaire text-[13px]"
        onClick={() =>
          lancer(async (avancement) => {
            avancement('Génération du PDF…');
            const { exporterQCM } = await import('@/lib/pdf/exports');
            await exporterQCM(questions, titre, couleur, avecCorrections);
          })
        }
      >
        <IconeTelechargement width={15} height={15} />
        {etat.enCours ? 'Génération…' : libelle}
      </button>
      <Message etat={etat} />
    </div>
  );
}

export function BoutonExportSchemas({
  schemas,
  titre,
  couleur,
  libelle = 'PDF des schémas',
}: {
  schemas: Schema[];
  titre: string;
  couleur?: string;
  libelle?: string;
}) {
  const { etat, lancer } = useExport();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={etat.enCours || schemas.length === 0}
        className="bouton bouton-secondaire text-[13px]"
        onClick={() =>
          lancer(async (avancement) => {
            avancement('Rendu des planches…');
            const { exporterSchemas } = await import('@/lib/pdf/exports');
            await exporterSchemas(schemas, titre, couleur);
          })
        }
      >
        <IconeTelechargement width={15} height={15} />
        {etat.enCours ? 'Génération…' : libelle}
      </button>
      <Message etat={etat} />
    </div>
  );
}
