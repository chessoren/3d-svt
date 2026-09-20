/**
 * Schema de donnees de MediCapsule.
 * Tout le contenu pedagogique est du TypeScript type : les erreurs de structure
 * sont donc detectees a la compilation, et le script scripts/verify-content.mjs
 * verifie en plus l'unicite des identifiants, les liens et l'orthotypographie.
 */

export type UEId =
  | 'ue1'
  | 'ue2'
  | 'ue3'
  | 'ue4'
  | 'ue5'
  | 'ue6'
  | 'ue7'
  | 'physio'
  | 'anat'
  | 'histo'
  | 'embryo'
  | 'bioch'
  | 'biocell'
  | 'sante-publique';

export interface UE {
  id: UEId;
  code: string;
  titre: string;
  sousTitre: string;
  description: string;
  couleur: string;
  couleurClaire: string;
  icone: string;
}

/** Niveau de difficulte percu : 1 = accessible, 2 = intermediaire, 3 = exigeant. */
export type Difficulte = 1 | 2 | 3;

export type VarianteEncadre =
  | 'info'
  | 'attention'
  | 'astuce'
  | 'clinique'
  | 'examen'
  | 'chiffres';

export interface Proposition {
  lettre: 'A' | 'B' | 'C' | 'D' | 'E';
  texte: string;
  vraie: boolean;
  /** Justification proposition par proposition : indispensable en QCM de PASS. */
  justification: string;
}

export interface QCM {
  id: string;
  enonce: string;
  propositions: Proposition[];
  /** Synthese de la correction, affichee apres validation. */
  correction: string;
  difficulte: Difficulte;
}

export type TypeFlashcard =
  | 'definition'
  | 'mecanisme'
  | 'chiffre'
  | 'clinique'
  | 'classification'
  | 'formule';

export interface Flashcard {
  id: string;
  recto: string;
  verso: string;
  type: TypeFlashcard;
  tags: string[];
}

export interface EtapeBloc {
  titre: string;
  detail: string;
}

export interface ColonneComparaison {
  titre: string;
  points: string[];
}

export type Bloc =
  | { type: 'paragraphe'; texte: string }
  | { type: 'liste'; ordonnee?: boolean; items: string[] }
  | { type: 'definition'; terme: string; definition: string }
  | { type: 'tableau'; titre?: string; colonnes: string[]; lignes: string[][] }
  | { type: 'encadre'; variante: VarianteEncadre; titre: string; texte: string }
  | { type: 'formule'; expression: string; legende?: string; unites?: string }
  | { type: 'etapes'; titre?: string; etapes: EtapeBloc[] }
  | { type: 'schema'; schemaId: string; legende?: string }
  | {
      type: 'comparaison';
      titre?: string;
      gauche: ColonneComparaison;
      droite: ColonneComparaison;
    };

export interface Section {
  id: string;
  titre: string;
  blocs: Bloc[];
}

export interface Mnemotechnique {
  moyen: string;
  explication: string;
}

export interface Fiche {
  /** Slug unique, prefixe par l'UE. Exemple : 'ue1-acides-amines'. */
  id: string;
  ue: UEId;
  titre: string;
  sousTitre: string;
  chapitre: string;
  ordre: number;
  /** Duree de lecture estimee, en minutes. */
  duree: number;
  difficulte: Difficulte;
  motsCles: string[];
  objectifs: string[];
  sections: Section[];
  pointsCles: string[];
  erreursFrequentes: string[];
  mnemotechniques: Mnemotechnique[];
  /** Ouvrages de reference consultes pour rediger la fiche. */
  sources: string[];
  schemasLies: string[];
  flashcards: Flashcard[];
  qcm: QCM[];
}

export interface LegendeSchema {
  /** Numero ou lettre reportee sur le dessin. */
  ref: string;
  texte: string;
}

export interface Schema {
  id: string;
  ue: UEId;
  titre: string;
  description: string;
  categorie: string;
  /** viewBox du SVG, par exemple '0 0 800 600'. */
  viewBox: string;
  /** Contenu interne du SVG (sans la balise <svg> englobante). */
  svg: string;
  legendes: LegendeSchema[];
  ficheLiee?: string;
  motsCles: string[];
}

/** Structure anatomique affichee dans le module 3D. */
export interface StructureAnatomique {
  id: string;
  nom: string;
  nomLatin?: string;
  systeme: SystemeAnatomique;
  region: RegionAnatomique;
  description: string;
  /** Points de repere / interet clinique, affiches dans le panneau lateral. */
  reperes: string[];
  ficheLiee?: string;
}

export type SystemeAnatomique =
  | 'squelette'
  | 'muscles'
  | 'organes'
  | 'vasculaire'
  | 'nerveux'
  | 'lymphatique'
  | 'peau';

export type RegionAnatomique =
  | 'tete'
  | 'cou'
  | 'thorax'
  | 'abdomen'
  | 'pelvis'
  | 'membre-superieur'
  | 'membre-inferieur'
  | 'rachis';
