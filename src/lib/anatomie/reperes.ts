import type { Point3 } from './types';

/**
 * Repères communs à tous les systèmes du modèle 3D.
 *
 * Convention : unités en mètres, sujet de 1,75 m en position anatomique de
 * référence. L'axe Y est vertical (0 au sol), l'axe Z pointe vers l'avant
 * (ventral), l'axe X vers la gauche du sujet pour les valeurs positives.
 * Chaque pièce paire est décrite une seule fois du côté positif puis dupliquée
 * en miroir, ce qui garantit une symétrie parfaite.
 */

export const TAILLE = 1.75;

export const R = {
  vertex: 1.75,
  glabelle: 1.675,
  menton: 1.548,
  baseCrane: 1.585,
  c1: 1.535,
  c7: 1.425,
  t1: 1.412,
  t12: 1.135,
  l1: 1.122,
  l5: 0.982,
  sacrumHaut: 0.972,
  sacrumBas: 0.868,
  coccyx: 0.842,
  fourchetteSternale: 1.432,
  angleSternal: 1.352,
  xiphoide: 1.222,
  acromion: 1.442,
  epauleCentre: 1.402,
  coude: 1.098,
  poignet: 0.852,
  boutDoigts: 0.652,
  cretIliaque: 1.048,
  hanche: 0.918,
  pubis: 0.928,
  genou: 0.498,
  cheville: 0.078,
  sol: 0.0,
} as const;

/** Demi-écartements latéraux usuels. */
export const X = {
  acromion: 0.196,
  epaule: 0.172,
  brasHaut: 0.162,
  coude: 0.208,
  poignet: 0.232,
  main: 0.238,
  thorax: 0.148,
  taille: 0.112,
  cretIliaque: 0.138,
  hanche: 0.092,
  genou: 0.082,
  cheville: 0.072,
  pied: 0.078,
  cou: 0.056,
  tete: 0.076,
} as const;

/** Profondeurs antéropostérieures usuelles (Z). */
export const Z = {
  sternum: 0.082,
  dos: -0.092,
  rachisCervical: -0.042,
  rachisThoracique: -0.068,
  rachisLombaire: -0.032,
  ventre: 0.098,
  nuque: -0.062,
  visage: 0.092,
} as const;

/**
 * Courbe du rachis : renvoie la position du centre du corps vertébral pour une
 * hauteur donnée, en reproduisant lordose cervicale, cyphose thoracique et
 * lordose lombaire.
 */
export function positionRachis(y: number): Point3 {
  let z: number;
  if (y >= R.c7) {
    // Segment cervical : lordose, concavité postérieure.
    const t = (y - R.c7) / (R.c1 - R.c7);
    z = -0.052 + 0.024 * Math.sin(t * Math.PI);
  } else if (y >= R.t12) {
    // Segment thoracique : cyphose, corps vertébraux reculés.
    const t = (y - R.t12) / (R.t1 - R.t12);
    z = -0.05 - 0.032 * Math.sin(t * Math.PI);
  } else if (y >= R.l5) {
    // Segment lombaire : lordose marquée.
    const t = (y - R.l5) / (R.l1 - R.l5);
    z = -0.05 + 0.038 * Math.sin(t * Math.PI);
  } else {
    // Sacrum : bascule vers l'arrière.
    const t = (R.sacrumHaut - y) / Math.max(1e-6, R.sacrumHaut - R.coccyx);
    z = -0.046 - 0.05 * t;
  }
  return [0, y, z];
}

/** Interpolation linéaire entre deux points. */
export function entre(a: Point3, b: Point3, t: number): Point3 {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

export function decaler(p: Point3, dx: number, dy: number, dz: number): Point3 {
  return [p[0] + dx, p[1] + dy, p[2] + dz];
}
