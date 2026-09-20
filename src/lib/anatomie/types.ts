import type { RegionAnatomique, SystemeAnatomique } from '@/content/types';

export type { RegionAnatomique, SystemeAnatomique };

export type Point3 = [number, number, number];

/**
 * Description géométrique d'une pièce anatomique. Chaque forme est convertie en
 * maillage par src/lib/anatomie/constructeurs.ts. Aucun fichier externe n'est
 * nécessaire : tout le modèle est généré dans le navigateur.
 */
export type FormeAnatomique =
  /** Os long : diaphyse effilée entre deux épiphyses renflées. */
  | {
      forme: 'osLong';
      debut: Point3;
      fin: Point3;
      rayon: number;
      rayonEpiphyseHaute?: number;
      rayonEpiphyseBasse?: number;
      courbure?: Point3;
    }
  /** Volume ovoïde, utilisé pour la plupart des organes pleins. */
  | {
      forme: 'ellipsoide';
      centre: Point3;
      rayons: Point3;
      rotation?: Point3;
      segments?: number;
    }
  /** Conduit suivant une courbe : vaisseaux, nerfs, trachée, intestin. */
  | {
      forme: 'tube';
      points: Point3[];
      rayon: number;
      rayonFin?: number;
      segments?: number;
    }
  /** Corps de muscle fusiforme, renflé en son milieu. */
  | {
      forme: 'muscle';
      debut: Point3;
      fin: Point3;
      largeur: number;
      epaisseur?: number;
      bombement?: number;
      courbure?: Point3;
    }
  /** Segment à extrémités arrondies : phalanges, petits os, ligaments. */
  | {
      forme: 'capsule';
      debut: Point3;
      fin: Point3;
      rayon: number;
    }
  /** Boîte arrondie : corps vertébraux, sternum, os courts. */
  | {
      forme: 'boite';
      centre: Point3;
      dimensions: Point3;
      rotation?: Point3;
      arrondi?: number;
    }
  /** Solide de révolution défini par un profil (rayon, hauteur). */
  | {
      forme: 'revolution';
      profil: [number, number][];
      centre: Point3;
      rotation?: Point3;
      segments?: number;
    }
  /** Anneau ou arc : côtes, arc vertébral, anneau pelvien. */
  | {
      forme: 'arc';
      centre: Point3;
      rayon: number;
      epaisseur: number;
      angleDepart: number;
      angleCouvert: number;
      rotation?: Point3;
      aplatissement?: Point3;
    }
  /** Membrane ou lame : omoplate, os coxal, diaphragme, aponévroses. */
  | {
      forme: 'lame';
      contour: [number, number][];
      epaisseur: number;
      centre: Point3;
      rotation?: Point3;
      courbure?: number;
    }
  /** Assemblage de plusieurs formes en une seule pièce cliquable. */
  | {
      forme: 'groupe';
      elements: FormeAnatomique[];
    };

export interface PieceAnatomique {
  id: string;
  nom: string;
  nomLatin?: string;
  systeme: SystemeAnatomique;
  region: RegionAnatomique;
  description: string;
  /** Repères cliniques ou points d'examen, affichés dans le panneau latéral. */
  reperes: string[];
  ficheLiee?: string;
  geometrie: FormeAnatomique;
  couleur?: string;
  opacite?: number;
  /** Duplique la pièce en miroir de l'autre côté du plan sagittal médian. */
  miroir?: boolean;
  /** Masqué par défaut : la pièce n'apparaît qu'en affichage détaillé. */
  detail?: boolean;
}

export interface DefinitionSysteme {
  id: SystemeAnatomique;
  nom: string;
  description: string;
  couleur: string;
  /** Rugosité et aspect du matériau, pour distinguer os, muscle et vaisseau. */
  rugosite: number;
  metallique: number;
  /** Opacité par défaut à l'affichage. */
  opacite: number;
  actifParDefaut: boolean;
}
