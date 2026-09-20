import type { Fiche, Flashcard, QCM, Schema, UEId } from './types';
import { TOUTES_LES_FICHES } from './fiches/index';
import { TOUS_LES_SCHEMAS } from './schemas/index';
import { UES, UE_PAR_ID, getUE } from './ue';

export type { Fiche, Flashcard, QCM, Schema, UEId };
export { UES, UE_PAR_ID, getUE };

/** Toutes les fiches, triées par matière puis par ordre de progression. */
export const FICHES: Fiche[] = [...TOUTES_LES_FICHES].sort((a, b) => {
  const indexA = UES.findIndex((ue) => ue.id === a.ue);
  const indexB = UES.findIndex((ue) => ue.id === b.ue);
  if (indexA !== indexB) return indexA - indexB;
  return a.ordre - b.ordre;
});

export const SCHEMAS: Schema[] = [...TOUS_LES_SCHEMAS].sort((a, b) => {
  const indexA = UES.findIndex((ue) => ue.id === a.ue);
  const indexB = UES.findIndex((ue) => ue.id === b.ue);
  if (indexA !== indexB) return indexA - indexB;
  return a.titre.localeCompare(b.titre, 'fr');
});

const FICHES_PAR_ID = new Map(FICHES.map((f) => [f.id, f]));
const SCHEMAS_PAR_ID = new Map(SCHEMAS.map((s) => [s.id, s]));

export function getFiche(id: string): Fiche | undefined {
  return FICHES_PAR_ID.get(id);
}

export function getSchema(id: string): Schema | undefined {
  return SCHEMAS_PAR_ID.get(id);
}

export function fichesDeUE(ue: UEId): Fiche[] {
  return FICHES.filter((f) => f.ue === ue);
}

export function schemasDeUE(ue: UEId): Schema[] {
  return SCHEMAS.filter((s) => s.ue === ue);
}

/**
 * Schémas rattachés à une fiche : on additionne les deux sens de la relation,
 * `schemasLies` porté par la fiche et `ficheLiee` porté par le schéma.
 */
export function schemasDeFiche(fiche: Fiche): Schema[] {
  const ids = new Set(fiche.schemasLies);
  for (const schema of SCHEMAS) {
    if (schema.ficheLiee === fiche.id) ids.add(schema.id);
  }
  return [...ids].map((id) => SCHEMAS_PAR_ID.get(id)).filter((s): s is Schema => Boolean(s));
}

/** Chapitres d'une matière, dans l'ordre de première apparition. */
export function chapitresDeUE(ue: UEId): { titre: string; fiches: Fiche[] }[] {
  const groupes: { titre: string; fiches: Fiche[] }[] = [];
  for (const fiche of fichesDeUE(ue)) {
    let groupe = groupes.find((g) => g.titre === fiche.chapitre);
    if (!groupe) {
      groupe = { titre: fiche.chapitre, fiches: [] };
      groupes.push(groupe);
    }
    groupe.fiches.push(fiche);
  }
  return groupes;
}

export interface FlashcardAvecContexte extends Flashcard {
  ficheId: string;
  ficheTitre: string;
  ue: UEId;
}

export const FLASHCARDS: FlashcardAvecContexte[] = FICHES.flatMap((fiche) =>
  fiche.flashcards.map((carte) => ({
    ...carte,
    ficheId: fiche.id,
    ficheTitre: fiche.titre,
    ue: fiche.ue,
  })),
);

export interface QCMAvecContexte extends QCM {
  ficheId: string;
  ficheTitre: string;
  ue: UEId;
}

export const QCMS: QCMAvecContexte[] = FICHES.flatMap((fiche) =>
  fiche.qcm.map((question) => ({
    ...question,
    ficheId: fiche.id,
    ficheTitre: fiche.titre,
    ue: fiche.ue,
  })),
);

export function flashcardsDeUE(ue: UEId): FlashcardAvecContexte[] {
  return FLASHCARDS.filter((c) => c.ue === ue);
}

export function qcmDeUE(ue: UEId): QCMAvecContexte[] {
  return QCMS.filter((q) => q.ue === ue);
}

/** Statistiques affichées sur la page d'accueil. */
export const STATISTIQUES = {
  matieres: UES.length,
  fiches: FICHES.length,
  flashcards: FLASHCARDS.length,
  qcm: QCMS.length,
  schemas: SCHEMAS.length,
  propositions: QCMS.reduce((total, q) => total + q.propositions.length, 0),
  minutes: FICHES.reduce((total, f) => total + f.duree, 0),
};

/** Nombre de fiches par matière, pour les cartes de la page d'accueil. */
export const COMPTEURS_PAR_UE: Record<string, { fiches: number; flashcards: number; qcm: number; schemas: number }> =
  Object.fromEntries(
    UES.map((ue) => [
      ue.id,
      {
        fiches: FICHES.filter((f) => f.ue === ue.id).length,
        flashcards: FLASHCARDS.filter((c) => c.ue === ue.id).length,
        qcm: QCMS.filter((q) => q.ue === ue.id).length,
        schemas: SCHEMAS.filter((s) => s.ue === ue.id).length,
      },
    ]),
  );

/** Portion d'URL d'une fiche à l'intérieur de sa matière. */
export function slugDeFiche(fiche: Fiche): string {
  return fiche.id.startsWith(fiche.ue + '-') ? fiche.id.slice(fiche.ue.length + 1) : fiche.id;
}

export function ficheParSlug(ue: string, slug: string): Fiche | undefined {
  return FICHES.find((f) => f.ue === ue && slugDeFiche(f) === slug);
}

/** Fiche précédente et suivante dans la progression de la matière. */
export function voisinesDeFiche(fiche: Fiche): { precedente?: Fiche; suivante?: Fiche } {
  const liste = fichesDeUE(fiche.ue);
  const index = liste.findIndex((f) => f.id === fiche.id);
  return {
    precedente: index > 0 ? liste[index - 1] : undefined,
    suivante: index >= 0 && index < liste.length - 1 ? liste[index + 1] : undefined,
  };
}
