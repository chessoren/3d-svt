import type { DefinitionSysteme, PieceAnatomique, SystemeAnatomique } from '../types';
import { SQUELETTE } from './squelette';
import { MUSCLES } from './muscles';
import { ORGANES } from './organes';
import { VAISSEAUX, NERFS, LYMPHATIQUE, PEAU } from './circulation';

export const SYSTEMES: DefinitionSysteme[] = [
  {
    id: 'squelette',
    nom: 'Squelette',
    description:
      'Os, cartilages et articulations : la charpente du corps, qui protège les organes et sert de levier aux muscles.',
    couleur: '#e8e0cf',
    rugosite: 0.62,
    metallique: 0.02,
    opacite: 1,
    actifParDefaut: true,
  },
  {
    id: 'muscles',
    nom: 'Muscles',
    description:
      'Muscles striés squelettiques et leurs tendons, moteurs du mouvement volontaire et de la posture.',
    couleur: '#b5434a',
    rugosite: 0.78,
    metallique: 0,
    opacite: 1,
    actifParDefaut: true,
  },
  {
    id: 'organes',
    nom: 'Organes',
    description:
      'Viscères des cavités crânienne, thoracique, abdominale et pelvienne, et organes des sens.',
    couleur: '#c98a6a',
    rugosite: 0.55,
    metallique: 0,
    opacite: 1,
    actifParDefaut: true,
  },
  {
    id: 'vasculaire',
    nom: 'Vaisseaux',
    description:
      'Artères en rouge et veines en bleu : la double circulation systémique et pulmonaire.',
    couleur: '#c0392b',
    rugosite: 0.42,
    metallique: 0.04,
    opacite: 1,
    actifParDefaut: false,
  },
  {
    id: 'nerveux',
    nom: 'Nerfs',
    description:
      'Nerfs crâniens et spinaux, plexus et principaux troncs nerveux du système nerveux périphérique.',
    couleur: '#d9b13c',
    rugosite: 0.5,
    metallique: 0,
    opacite: 1,
    actifParDefaut: false,
  },
  {
    id: 'lymphatique',
    nom: 'Lymphatique',
    description:
      'Conduit thoracique, relais ganglionnaires et organes lymphoïdes, voie de circulation de la lymphe.',
    couleur: '#5aa88f',
    rugosite: 0.5,
    metallique: 0,
    opacite: 1,
    actifParDefaut: false,
  },
  {
    id: 'peau',
    nom: 'Peau',
    description:
      'Enveloppe cutanée affichée en transparence, pour situer les structures profondes sous la silhouette.',
    couleur: '#e8c4ae',
    rugosite: 0.85,
    metallique: 0,
    opacite: 0.22,
    actifParDefaut: false,
  },
];

export const SYSTEME_PAR_ID: Record<SystemeAnatomique, DefinitionSysteme> = Object.fromEntries(
  SYSTEMES.map((s) => [s.id, s]),
) as Record<SystemeAnatomique, DefinitionSysteme>;

/** Le modèle complet, toutes pièces confondues. */
export const MODELE: PieceAnatomique[] = [
  ...SQUELETTE,
  ...MUSCLES,
  ...ORGANES,
  ...VAISSEAUX,
  ...NERFS,
  ...LYMPHATIQUE,
  ...PEAU,
];

export const REGIONS: { id: string; nom: string }[] = [
  { id: 'tete', nom: 'Tête' },
  { id: 'cou', nom: 'Cou' },
  { id: 'thorax', nom: 'Thorax' },
  { id: 'abdomen', nom: 'Abdomen' },
  { id: 'pelvis', nom: 'Pelvis' },
  { id: 'rachis', nom: 'Rachis' },
  { id: 'membre-superieur', nom: 'Membre supérieur' },
  { id: 'membre-inferieur', nom: 'Membre inférieur' },
];

export function compterParSysteme(): Record<SystemeAnatomique, number> {
  const compteurs = Object.fromEntries(SYSTEMES.map((s) => [s.id, 0])) as Record<SystemeAnatomique, number>;
  for (const piece of MODELE) {
    compteurs[piece.systeme] += piece.miroir ? 2 : 1;
  }
  return compteurs;
}

export const NOMBRE_DE_PIECES = MODELE.reduce((total, p) => total + (p.miroir ? 2 : 1), 0);

export { SQUELETTE, MUSCLES, ORGANES, VAISSEAUX, NERFS, LYMPHATIQUE, PEAU };
