import type { PieceAnatomique, Point3 } from '../types';
import { R, X, Z, positionRachis } from '../reperes';

/**
 * Système squelettique : environ deux cents pièces, générées à partir des
 * repères anatomiques communs. Les pièces paires sont décrites du côté positif
 * et dupliquées en miroir par le moteur de rendu.
 */

const OS = '#f3ece0';
const OS_SOMBRE = '#e6dcc9';
const CARTILAGE = '#d9e4ec';

/* -------------------------------------------------------------------------- */
/*  Crâne                                                                      */
/* -------------------------------------------------------------------------- */

const crane: PieceAnatomique[] = [
  {
    id: 'os-crane-voute',
    nom: 'Voûte crânienne',
    nomLatin: 'Calvaria',
    systeme: 'squelette',
    region: 'tete',
    couleur: OS,
    description:
      'Coque osseuse formée par les écailles du frontal, des deux pariétaux et de l’occipital, réunis par des sutures. Elle protège l’encéphale et ses enveloppes.',
    reperes: [
      'Sutures coronale, sagittale et lambdoïde, visibles jusqu’à l’âge adulte.',
      'Les fontanelles du nouveau-né correspondent aux jonctions entre sutures.',
      'L’épaisseur varie selon les régions : la région temporale, plus mince, est une zone de fragilité.',
    ],
    ficheLiee: 'anat-tete-osseuse',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'revolution',
          profil: [
            [0.0, 0.098],
            [0.036, 0.094],
            [0.061, 0.082],
            [0.076, 0.058],
            [0.0825, 0.026],
            [0.0835, -0.012],
            [0.079, -0.046],
            [0.0655, -0.07],
            [0.04, -0.082],
            [0.0, -0.085],
          ],
          centre: [0, R.vertex - 0.098, -0.012],
          segments: 34,
        },
      ],
    },
  },
  {
    id: 'os-frontal',
    nom: 'Os frontal',
    nomLatin: 'Os frontale',
    systeme: 'squelette',
    region: 'tete',
    couleur: OS_SOMBRE,
    detail: true,
    description:
      'Os impair et médian formant le front, le toit des orbites et une partie de l’étage antérieur de la base du crâne. Il contient les sinus frontaux.',
    reperes: [
      'Bosses frontales, glabelle et arcades sourcilières sont des repères palpables.',
      'Le sinus frontal se développe après la petite enfance.',
    ],
    ficheLiee: 'anat-tete-osseuse',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0, R.glabelle + 0.022, 0.042],
      rayons: [0.072, 0.048, 0.055],
      rotation: [0.25, 0, 0],
    },
  },
  {
    id: 'os-massif-facial',
    nom: 'Massif facial',
    nomLatin: 'Viscerocranium',
    systeme: 'squelette',
    region: 'tete',
    couleur: OS,
    description:
      'Ensemble des os de la face suspendus sous la base du crâne : maxillaires, os zygomatiques, os nasaux, os lacrymaux, palatins, cornets inférieurs et vomer.',
    reperes: [
      'Les maxillaires portent l’arcade dentaire supérieure et creusent les sinus maxillaires.',
      'L’os zygomatique forme la pommette et participe à l’arcade zygomatique.',
    ],
    ficheLiee: 'anat-tete-osseuse',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'boite',
          centre: [0, R.menton + 0.062, 0.05],
          dimensions: [0.108, 0.078, 0.086],
          arrondi: 0.85,
        },
        {
          forme: 'ellipsoide',
          centre: [0, R.glabelle - 0.03, 0.078],
          rayons: [0.016, 0.026, 0.022],
        },
      ],
    },
  },
  {
    id: 'os-orbite',
    nom: 'Cavité orbitaire',
    nomLatin: 'Orbita',
    systeme: 'squelette',
    region: 'tete',
    couleur: '#cdd6e4',
    opacite: 0.6,
    description:
      'Cavité pyramidale à quatre parois qui loge le globe oculaire, ses muscles, ses vaisseaux et ses nerfs. Sept os participent à sa constitution.',
    reperes: [
      'Le canal optique livre passage au nerf optique et à l’artère ophtalmique.',
      'La fissure orbitaire supérieure transmet les nerfs oculomoteurs.',
      'Le plancher, mince, est le siège des fractures par éclatement.',
    ],
    ficheLiee: 'anat-tete-osseuse',
    miroir: true,
    geometrie: {
      forme: 'revolution',
      profil: [
        [0.0, 0.0],
        [0.012, 0.006],
        [0.021, 0.016],
        [0.026, 0.03],
        [0.0265, 0.036],
        [0.0, 0.036],
      ],
      centre: [0.032, R.glabelle - 0.026, 0.052],
      rotation: [Math.PI / 2, 0, 0],
      segments: 22,
    },
  },
  {
    id: 'os-mandibule',
    nom: 'Mandibule',
    nomLatin: 'Mandibula',
    systeme: 'squelette',
    region: 'tete',
    couleur: OS,
    description:
      'Seul os mobile de la face. Son corps porte l’arcade dentaire inférieure ; ses deux branches montantes se terminent par le processus coronoïde en avant et le condyle en arrière.',
    reperes: [
      'Le condyle s’articule avec l’os temporal dans l’articulation temporomandibulaire.',
      'Le foramen mandibulaire livre passage au nerf alvéolaire inférieur, anesthésié en soins dentaires.',
      'L’angle mandibulaire est un repère palpable du cou.',
    ],
    ficheLiee: 'anat-tete-osseuse',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'arc',
          centre: [0, R.menton + 0.014, 0.026],
          rayon: 0.052,
          epaisseur: 0.0115,
          angleDepart: Math.PI * 0.08,
          angleCouvert: Math.PI * 0.84,
          rotation: [Math.PI / 2, 0, 0],
          aplatissement: [1, 1.12, 1],
        },
        {
          forme: 'capsule',
          debut: [0.049, R.menton + 0.014, -0.014],
          fin: [0.045, R.menton + 0.072, -0.042],
          rayon: 0.0105,
        },
        {
          forme: 'capsule',
          debut: [-0.049, R.menton + 0.014, -0.014],
          fin: [-0.045, R.menton + 0.072, -0.042],
          rayon: 0.0105,
        },
      ],
    },
  },
];

/* -------------------------------------------------------------------------- */
/*  Rachis                                                                     */
/* -------------------------------------------------------------------------- */

function construireVertebre(
  etiquette: string,
  nom: string,
  y: number,
  rayonCorps: number,
  region: 'cou' | 'thorax' | 'rachis',
  description: string,
  reperes: string[],
): PieceAnatomique {
  const centre = positionRachis(y);
  const arriere: Point3 = [0, y, centre[2] - rayonCorps * 1.5];
  return {
    id: `os-vertebre-${etiquette.toLowerCase()}`,
    nom,
    systeme: 'squelette',
    region: region === 'cou' ? 'cou' : 'rachis',
    couleur: OS,
    description,
    reperes,
    ficheLiee: 'anat-rachis',
    geometrie: {
      forme: 'groupe',
      elements: [
        // Corps vertébral
        {
          forme: 'revolution',
          profil: [
            [0.0, 0.013],
            [rayonCorps * 0.94, 0.013],
            [rayonCorps * 0.82, 0.0],
            [rayonCorps * 0.94, -0.013],
            [0.0, -0.013],
          ],
          centre,
          segments: 22,
        },
        // Arc postérieur
        {
          forme: 'arc',
          centre: [0, y, centre[2] - rayonCorps * 0.72],
          rayon: rayonCorps * 0.78,
          epaisseur: rayonCorps * 0.24,
          angleDepart: Math.PI * 1.08,
          angleCouvert: Math.PI * 0.84,
          rotation: [Math.PI / 2, 0, 0],
        },
        // Processus épineux
        {
          forme: 'capsule',
          debut: arriere,
          fin: [0, y - rayonCorps * 0.7, arriere[2] - rayonCorps * 1.15],
          rayon: rayonCorps * 0.2,
        },
        // Processus transverses
        {
          forme: 'capsule',
          debut: [rayonCorps * 0.4, y, centre[2] - rayonCorps * 0.8],
          fin: [rayonCorps * 1.5, y, centre[2] - rayonCorps * 0.95],
          rayon: rayonCorps * 0.17,
        },
        {
          forme: 'capsule',
          debut: [-rayonCorps * 0.4, y, centre[2] - rayonCorps * 0.8],
          fin: [-rayonCorps * 1.5, y, centre[2] - rayonCorps * 0.95],
          rayon: rayonCorps * 0.17,
        },
      ],
    },
  };
}

function construireRachis(): PieceAnatomique[] {
  const pieces: PieceAnatomique[] = [];

  // Sept vertèbres cervicales
  for (let i = 0; i < 7; i += 1) {
    const y = R.c1 - (i * (R.c1 - R.c7)) / 6;
    const nom = i === 0 ? 'Atlas (C1)' : i === 1 ? 'Axis (C2)' : `Vertèbre cervicale C${i + 1}`;
    pieces.push(
      construireVertebre(
        `c${i + 1}`,
        nom,
        y,
        0.0185 + i * 0.0009,
        'cou',
        i === 0
          ? 'Première vertèbre cervicale, dépourvue de corps vertébral. Son anneau supporte le crâne par les articulations atlanto-occipitales, qui autorisent le mouvement d’acquiescement.'
          : i === 1
            ? 'Deuxième vertèbre cervicale, reconnaissable à son processus odontoïde (la dent), autour duquel l’atlas et la tête pivotent lors de la rotation.'
            : 'Vertèbre cervicale typique : corps petit, foramen vertébral large et triangulaire, processus transverses percés du foramen transversaire où chemine l’artère vertébrale.',
        i === 0
          ? ['Ni corps ni processus épineux véritable.', 'Articulation atlanto-occipitale : flexion et extension de la tête.']
          : i === 1
            ? ['La dent de l’axis est maintenue par le ligament transverse de l’atlas.', 'Articulation atlanto-axoïdienne : rotation de la tête.']
            : [
                'Le foramen transversaire est propre aux vertèbres cervicales.',
                'Le processus épineux de C7, très saillant, est le repère de comptage du rachis.',
              ],
      ),
    );
  }

  // Douze vertèbres thoraciques
  for (let i = 0; i < 12; i += 1) {
    const y = R.t1 - (i * (R.t1 - R.t12)) / 11;
    pieces.push(
      construireVertebre(
        `t${i + 1}`,
        `Vertèbre thoracique T${i + 1}`,
        y,
        0.021 + i * 0.0011,
        'thorax',
        'Vertèbre thoracique : corps en forme de cœur, processus épineux long et oblique vers le bas, facettes costales sur le corps et le processus transverse pour l’articulation avec les côtes.',
        [
          'Les facettes costales distinguent les vertèbres thoraciques de toutes les autres.',
          'La cyphose thoracique est une courbure physiologique à concavité antérieure.',
          'Les processus épineux, imbriqués en tuiles, limitent l’extension.',
        ],
      ),
    );
  }

  // Cinq vertèbres lombaires
  for (let i = 0; i < 5; i += 1) {
    const y = R.l1 - (i * (R.l1 - R.l5)) / 4;
    pieces.push(
      construireVertebre(
        `l${i + 1}`,
        `Vertèbre lombaire L${i + 1}`,
        y,
        0.0275 + i * 0.001,
        'rachis',
        'Vertèbre lombaire : corps volumineux adapté à la charge, processus épineux quadrangulaire et horizontal, absence de foramen transversaire et de facette costale.',
        [
          'La ponction lombaire se pratique sous L2, au-dessous de la terminaison de la moelle spinale.',
          'La ligne joignant les crêtes iliaques passe approximativement par L4.',
          'Le disque L5-S1 est le plus sollicité mécaniquement.',
        ],
      ),
    );
  }

  // Sacrum et coccyx
  pieces.push({
    id: 'os-sacrum',
    nom: 'Sacrum',
    nomLatin: 'Os sacrum',
    systeme: 'squelette',
    region: 'pelvis',
    couleur: OS,
    description:
      'Os triangulaire issu de la fusion de cinq vertèbres sacrées. Il forme la paroi postérieure du pelvis et s’articule latéralement avec les os coxaux par les articulations sacro-iliaques.',
    reperes: [
      'Le promontoire sacré, angle saillant entre L5 et S1, limite le détroit supérieur.',
      'Les foramens sacrés livrent passage aux branches des nerfs spinaux sacrés.',
      'Le hiatus sacré permet l’anesthésie caudale.',
    ],
    ficheLiee: 'anat-pelvis-perinee',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'lame',
          contour: [
            [-0.055, 0.052],
            [0.055, 0.052],
            [0.036, -0.005],
            [0.018, -0.052],
            [-0.018, -0.052],
            [-0.036, -0.005],
          ],
          epaisseur: 0.026,
          centre: [0, (R.sacrumHaut + R.sacrumBas) / 2, -0.062],
          rotation: [0.32, 0, 0],
          courbure: 0.012,
        },
      ],
    },
  });

  pieces.push({
    id: 'os-coccyx',
    nom: 'Coccyx',
    nomLatin: 'Os coccygis',
    systeme: 'squelette',
    region: 'pelvis',
    couleur: OS_SOMBRE,
    detail: true,
    description:
      'Petit os terminal formé de trois à cinq vertèbres coccygiennes soudées, vestige du squelette caudal. Il sert d’insertion à des muscles et ligaments du périnée.',
    reperes: ['Point d’insertion du muscle élévateur de l’anus et du ligament sacro-tubéral.'],
    ficheLiee: 'anat-pelvis-perinee',
    geometrie: {
      forme: 'capsule',
      debut: [0, R.sacrumBas, -0.09],
      fin: [0, R.coccyx - 0.012, -0.072],
      rayon: 0.009,
    },
  });

  // Disques intervertébraux, représentés en bloc pour rester lisibles
  for (let i = 0; i < 23; i += 1) {
    const yHaut = i < 6 ? R.c1 - (i * (R.c1 - R.c7)) / 6 : i < 18 ? R.t1 - ((i - 6) * (R.t1 - R.t12)) / 11 : R.l1 - ((i - 18) * (R.l1 - R.l5)) / 4;
    const yBas = i < 6 ? R.c1 - ((i + 1) * (R.c1 - R.c7)) / 6 : i < 18 ? R.t1 - ((i - 5) * (R.t1 - R.t12)) / 11 : R.l1 - ((i - 17) * (R.l1 - R.l5)) / 4;
    const y = (yHaut + yBas) / 2;
    if (!Number.isFinite(y)) continue;
    const centre = positionRachis(y);
    pieces.push({
      id: `os-disque-${i + 1}`,
      nom: 'Disque intervertébral',
      nomLatin: 'Discus intervertebralis',
      systeme: 'squelette',
      region: 'rachis',
      couleur: CARTILAGE,
      detail: true,
      opacite: 0.92,
      description:
        'Fibrocartilage amortisseur intercalé entre deux corps vertébraux : un anneau fibreux périphérique entoure un noyau pulpeux central, riche en eau.',
      reperes: [
        'La hernie discale correspond à l’issue du noyau pulpeux à travers l’anneau fibreux.',
        'Les disques représentent environ un quart de la hauteur du rachis mobile.',
      ],
      ficheLiee: 'anat-rachis',
      geometrie: {
        forme: 'revolution',
        profil: [
          [0.0, 0.006],
          [(i < 6 ? 0.018 : i < 18 ? 0.023 : 0.029) * 0.98, 0.005],
          [i < 6 ? 0.019 : i < 18 ? 0.024 : 0.03, 0.0],
          [(i < 6 ? 0.018 : i < 18 ? 0.023 : 0.029) * 0.98, -0.005],
          [0.0, -0.006],
        ],
        centre,
        segments: 20,
      },
    });
  }

  return pieces;
}

/* -------------------------------------------------------------------------- */
/*  Thorax osseux                                                              */
/* -------------------------------------------------------------------------- */

function construireThoraxOsseux(): PieceAnatomique[] {
  const pieces: PieceAnatomique[] = [];

  pieces.push({
    id: 'os-sternum',
    nom: 'Sternum',
    nomLatin: 'Sternum',
    systeme: 'squelette',
    region: 'thorax',
    couleur: OS,
    description:
      'Os plat médian de la paroi thoracique antérieure, composé du manubrium, du corps et du processus xiphoïde. Il reçoit les clavicules et les sept premiers cartilages costaux.',
    reperes: [
      'L’angle sternal, jonction entre manubrium et corps, se projette en regard du deuxième cartilage costal.',
      'Le processus xiphoïde est le repère du massage cardiaque.',
      'La ponction sternale permet le prélèvement de moelle osseuse.',
    ],
    ficheLiee: 'anat-thorax',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'boite',
          centre: [0, R.fourchetteSternale - 0.028, Z.sternum],
          dimensions: [0.056, 0.056, 0.014],
          arrondi: 0.7,
        },
        {
          forme: 'boite',
          centre: [0, (R.angleSternal + R.xiphoide) / 2, Z.sternum + 0.004],
          dimensions: [0.042, R.angleSternal - R.xiphoide, 0.012],
          arrondi: 0.5,
        },
        {
          forme: 'capsule',
          debut: [0, R.xiphoide, Z.sternum + 0.004],
          fin: [0, R.xiphoide - 0.026, Z.sternum],
          rayon: 0.008,
        },
      ],
    },
  });

  // Douze paires de côtes
  for (let i = 0; i < 12; i += 1) {
    const yVertebre = R.t1 - (i * (R.t1 - R.t12)) / 11;
    const origine = positionRachis(yVertebre);
    const flottante = i >= 10;
    const fausse = i >= 7 && i < 10;
    const descente = 0.03 + i * 0.006;
    const demiLargeur = i < 7 ? 0.09 + i * 0.011 : 0.155 - (i - 7) * 0.014;
    const avancee = flottante ? -0.02 : Z.sternum - 0.012 - (i > 6 ? (i - 6) * 0.012 : 0);

    const points: Point3[] = [
      [0.018, yVertebre, origine[2] - 0.012],
      [demiLargeur * 0.55, yVertebre - descente * 0.25, origine[2] + 0.012],
      [demiLargeur, yVertebre - descente * 0.6, origine[2] + 0.06],
      [demiLargeur * 0.86, yVertebre - descente * 0.92, origine[2] + 0.115],
      ...(flottante
        ? []
        : ([[demiLargeur * 0.42, yVertebre - descente, avancee + 0.045]] as Point3[])),
    ];

    pieces.push({
      id: `os-cote-${i + 1}`,
      nom: `${i + 1}${i === 0 ? 're' : 'e'} côte`,
      nomLatin: 'Costa',
      systeme: 'squelette',
      region: 'thorax',
      couleur: OS,
      miroir: true,
      description: flottante
        ? 'Côte flottante : elle s’articule en arrière avec le rachis mais son extrémité antérieure reste libre dans la paroi abdominale.'
        : fausse
          ? 'Fausse côte : son cartilage costal ne rejoint pas directement le sternum mais s’unit au cartilage de la côte sus-jacente, formant le rebord chondrocostal.'
          : 'Vraie côte : elle rejoint le sternum par un cartilage costal propre. Sa gouttière costale inférieure abrite le paquet vasculonerveux intercostal.',
      reperes: [
        'Le paquet vasculonerveux intercostal chemine au bord inférieur de la côte : la ponction pleurale se fait au bord supérieur de la côte sous-jacente.',
        flottante
          ? 'Les onzième et douzième côtes sont dites flottantes.'
          : 'La tête costale s’articule avec deux corps vertébraux adjacents.',
      ],
      ficheLiee: 'anat-thorax',
      geometrie: { forme: 'tube', points, rayon: 0.0072, rayonFin: 0.0058 },
    });

    if (!flottante) {
      pieces.push({
        id: `os-cartilage-costal-${i + 1}`,
        nom: `Cartilage costal ${i + 1}`,
        systeme: 'squelette',
        region: 'thorax',
        couleur: CARTILAGE,
        miroir: true,
        detail: true,
        opacite: 0.9,
        description:
          'Prolongement de cartilage hyalin qui unit l’extrémité antérieure de la côte au sternum, directement ou par l’intermédiaire du cartilage sus-jacent. Il confère son élasticité à la paroi thoracique.',
        reperes: ['Sa calcification progressive avec l’âge rigidifie la cage thoracique.'],
        ficheLiee: 'anat-thorax',
        geometrie: {
          forme: 'tube',
          points: [
            [demiLargeur * 0.42, yVertebre - descente, avancee + 0.045],
            [demiLargeur * 0.26, yVertebre - descente - 0.008, avancee + 0.03],
            [0.022, i < 7 ? R.fourchetteSternale - 0.012 - i * 0.026 : yVertebre - descente - 0.02, Z.sternum],
          ],
          rayon: 0.0055,
        },
      });
    }
  }

  return pieces;
}

/* -------------------------------------------------------------------------- */
/*  Membre supérieur                                                           */
/* -------------------------------------------------------------------------- */

const membreSuperieur: PieceAnatomique[] = [
  {
    id: 'os-clavicule',
    nom: 'Clavicule',
    nomLatin: 'Clavicula',
    systeme: 'squelette',
    region: 'membre-superieur',
    couleur: OS,
    miroir: true,
    description:
      'Os long en forme de S allongé, tendu du manubrium sternal à l’acromion. Seule attache osseuse entre le membre supérieur et le squelette axial, elle maintient l’épaule à distance du thorax.',
    reperes: [
      'Entièrement sous-cutanée, elle est palpable sur toute sa longueur.',
      'La fracture siège le plus souvent à la jonction du tiers moyen et du tiers latéral.',
      'Elle s’ossifie en premier et se termine en dernier.',
    ],
    ficheLiee: 'anat-epaule-bras',
    geometrie: {
      forme: 'tube',
      points: [
        [0.016, R.fourchetteSternale + 0.006, Z.sternum - 0.004],
        [0.072, R.fourchetteSternale + 0.012, 0.056],
        [0.132, R.acromion - 0.006, 0.026],
        [X.acromion - 0.012, R.acromion, -0.012],
      ],
      rayon: 0.0085,
    },
  },
  {
    id: 'os-scapula',
    nom: 'Scapula',
    nomLatin: 'Scapula',
    systeme: 'squelette',
    region: 'membre-superieur',
    couleur: OS,
    miroir: true,
    description:
      'Os plat triangulaire plaqué sur la face postérieure du gril costal, de la deuxième à la septième côte. Sa face postérieure est divisée par l’épine scapulaire, qui se prolonge par l’acromion.',
    reperes: [
      'La cavité glénoïdale, peu profonde, reçoit la tête humérale : la stabilité dépend surtout des parties molles.',
      'Le processus coracoïde donne insertion au court biceps, au coracobrachial et au petit pectoral.',
      'La scapula n’est reliée au tronc que par des muscles, d’où sa grande mobilité.',
    ],
    ficheLiee: 'anat-epaule-bras',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'lame',
          contour: [
            [-0.052, 0.062],
            [0.052, 0.05],
            [0.038, -0.012],
            [0.004, -0.072],
            [-0.03, -0.012],
          ],
          epaisseur: 0.008,
          centre: [0.108, R.acromion - 0.078, -0.056],
          rotation: [0, -0.42, 0],
          courbure: 0.018,
        },
        {
          forme: 'capsule',
          debut: [0.07, R.acromion - 0.028, -0.072],
          fin: [X.acromion - 0.018, R.acromion - 0.012, -0.034],
          rayon: 0.009,
        },
        {
          forme: 'ellipsoide',
          centre: [X.epaule - 0.004, R.epauleCentre + 0.016, -0.008],
          rayons: [0.014, 0.024, 0.017],
        },
      ],
    },
  },
  {
    id: 'os-humerus',
    nom: 'Humérus',
    nomLatin: 'Humerus',
    systeme: 'squelette',
    region: 'membre-superieur',
    couleur: OS,
    miroir: true,
    description:
      'Os long unique du bras. Sa tête sphérique s’articule avec la glène scapulaire ; son extrémité distale porte la trochlée et le capitulum pour l’articulation du coude.',
    reperes: [
      'Le nerf radial chemine dans la gouttière radiale : il peut être lésé lors d’une fracture diaphysaire.',
      'Le nerf ulnaire est palpable en arrière de l’épicondyle médial.',
      'Le col chirurgical est un site fréquent de fracture chez la personne âgée.',
    ],
    ficheLiee: 'anat-epaule-bras',
    geometrie: {
      forme: 'osLong',
      debut: [X.coude, R.coude, -0.008],
      fin: [X.epaule, R.epauleCentre, -0.004],
      rayon: 0.0125,
      rayonEpiphyseHaute: 0.026,
      rayonEpiphyseBasse: 0.023,
      courbure: [0.008, 0, 0.004],
    },
  },
  {
    id: 'os-radius',
    nom: 'Radius',
    nomLatin: 'Radius',
    systeme: 'squelette',
    region: 'membre-superieur',
    couleur: OS,
    miroir: true,
    description:
      'Os latéral de l’avant-bras, du côté du pouce. Sa tête tourne autour de l’ulna lors de la prono-supination ; son extrémité distale supporte l’essentiel de l’articulation du poignet.',
    reperes: [
      'La fracture de l’extrémité distale du radius est la fracture la plus fréquente du membre supérieur.',
      'Le pouls radial se prend en avant de son extrémité distale.',
      'En supination, radius et ulna sont parallèles ; en pronation, ils se croisent.',
    ],
    ficheLiee: 'anat-avant-bras-main',
    geometrie: {
      forme: 'osLong',
      debut: [X.poignet + 0.008, R.poignet, 0.012],
      fin: [X.coude + 0.012, R.coude - 0.014, 0.004],
      rayon: 0.0082,
      rayonEpiphyseHaute: 0.012,
      rayonEpiphyseBasse: 0.016,
    },
  },
  {
    id: 'os-ulna',
    nom: 'Ulna',
    nomLatin: 'Ulna',
    systeme: 'squelette',
    region: 'membre-superieur',
    couleur: OS,
    miroir: true,
    description:
      'Os médial de l’avant-bras, du côté du petit doigt. Son olécrâne forme la pointe du coude et son extrémité distale, plus fine, ne participe que peu à l’articulation du poignet.',
    reperes: [
      'L’olécrâne est palpable en arrière du coude.',
      'L’incisure trochléaire embrasse la trochlée humérale : c’est le pivot de la flexion-extension.',
    ],
    ficheLiee: 'anat-avant-bras-main',
    geometrie: {
      forme: 'osLong',
      debut: [X.poignet - 0.018, R.poignet - 0.004, -0.004],
      fin: [X.coude - 0.01, R.coude + 0.004, -0.014],
      rayon: 0.0078,
      rayonEpiphyseHaute: 0.018,
      rayonEpiphyseBasse: 0.011,
    },
  },
  {
    id: 'os-carpe',
    nom: 'Os du carpe',
    nomLatin: 'Ossa carpi',
    systeme: 'squelette',
    region: 'membre-superieur',
    couleur: OS_SOMBRE,
    miroir: true,
    description:
      'Huit os courts disposés en deux rangées. Rangée proximale : scaphoïde, lunatum, triquétrum, pisiforme. Rangée distale : trapèze, trapézoïde, capitatum, hamatum.',
    reperes: [
      'Le scaphoïde est le plus souvent fracturé ; sa vascularisation expose au risque de pseudarthrose.',
      'Le canal carpien, limité par le rétinaculum des fléchisseurs, contient le nerf médian et neuf tendons.',
      'La tabatière anatomique répond au scaphoïde.',
    ],
    ficheLiee: 'anat-avant-bras-main',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'boite',
          centre: [X.main - 0.004, R.poignet - 0.018, 0.006],
          dimensions: [0.046, 0.022, 0.026],
          arrondi: 0.9,
        },
        {
          forme: 'boite',
          centre: [X.main - 0.002, R.poignet - 0.038, 0.007],
          dimensions: [0.05, 0.02, 0.026],
          arrondi: 0.9,
        },
      ],
    },
  },
];

function construireMain(): PieceAnatomique[] {
  const pieces: PieceAnatomique[] = [];
  const noms = ['pouce', 'index', 'majeur', 'annulaire', 'auriculaire'];
  const longueursMetacarpe = [0.042, 0.068, 0.066, 0.06, 0.054];
  const longueursDoigt = [0.05, 0.07, 0.078, 0.072, 0.056];

  for (let i = 0; i < 5; i += 1) {
    const ecart = (i - 2) * 0.0155;
    const baseX = X.main + ecart * 0.5;
    const baseY = R.poignet - 0.05;
    const pointeX = X.main + ecart * 1.5 + (i === 0 ? 0.03 : 0);
    const metacarpeBas = baseY - longueursMetacarpe[i];

    pieces.push({
      id: `os-metacarpien-${i + 1}`,
      nom: `${i + 1}${i === 0 ? 'er' : 'e'} métacarpien`,
      systeme: 'squelette',
      region: 'membre-superieur',
      couleur: OS,
      miroir: true,
      detail: i > 0,
      description: `Os long de la paume correspondant au rayon du ${noms[i]}. Sa tête forme la saillie de l’articulation métacarpophalangienne, visible lorsque le poing est fermé.`,
      reperes:
        i === 0
          ? ['L’articulation trapézométacarpienne, en selle, autorise l’opposition du pouce.']
          : ['La fracture du col du cinquième métacarpien est la classique fracture du boxeur.'],
      ficheLiee: 'anat-avant-bras-main',
      geometrie: {
        forme: 'osLong',
        debut: [pointeX * 0.98, metacarpeBas, 0.012 + (i === 0 ? 0.014 : 0)],
        fin: [baseX, baseY, 0.008],
        rayon: 0.0048,
        rayonEpiphyseHaute: 0.0062,
        rayonEpiphyseBasse: 0.0068,
      },
    });

    const nbPhalanges = i === 0 ? 2 : 3;
    let yCourant = metacarpeBas;
    for (let p = 0; p < nbPhalanges; p += 1) {
      const longueur = (longueursDoigt[i] / nbPhalanges) * (p === 0 ? 1.25 : p === 1 ? 1.0 : 0.72);
      const yFin = yCourant - longueur;
      pieces.push({
        id: `os-phalange-${i + 1}-${p + 1}`,
        nom: `Phalange ${p === 0 ? 'proximale' : p === 1 && nbPhalanges === 3 ? 'moyenne' : 'distale'} du ${noms[i]}`,
        systeme: 'squelette',
        region: 'membre-superieur',
        couleur: OS,
        miroir: true,
        detail: true,
        description:
          'Os long court du doigt. Le pouce n’en possède que deux, les autres doigts en comptent trois : proximale, moyenne et distale.',
        reperes: ['Les phalanges distales portent la houppe qui soutient la pulpe et l’ongle.'],
        ficheLiee: 'anat-avant-bras-main',
        geometrie: {
          forme: 'capsule',
          debut: [pointeX + (i === 0 ? 0.008 * (p + 1) : 0), yFin, 0.014 + (i === 0 ? 0.016 : 0)],
          fin: [pointeX + (i === 0 ? 0.008 * p : 0), yCourant, 0.013 + (i === 0 ? 0.014 : 0)],
          rayon: 0.0042 - p * 0.0004,
        },
      });
      yCourant = yFin;
    }
  }

  return pieces;
}

/* -------------------------------------------------------------------------- */
/*  Bassin et membre inférieur                                                 */
/* -------------------------------------------------------------------------- */

const membreInferieur: PieceAnatomique[] = [
  {
    id: 'os-coxal',
    nom: 'Os coxal',
    nomLatin: 'Os coxae',
    systeme: 'squelette',
    region: 'pelvis',
    couleur: OS,
    miroir: true,
    description:
      'Os plat résultant de la fusion de l’ilium, de l’ischium et du pubis au niveau de l’acétabulum. Avec le sacrum et le coccyx, les deux os coxaux constituent le bassin osseux.',
    reperes: [
      'L’épine iliaque antéro-supérieure et la crête iliaque sont des repères palpables essentiels.',
      'L’acétabulum reçoit la tête fémorale dans une articulation très emboîtée.',
      'Le bassin féminin est plus large et son détroit supérieur plus arrondi : c’est le bassin obstétrical.',
    ],
    ficheLiee: 'anat-pelvis-perinee',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'lame',
          contour: [
            [-0.052, 0.058],
            [0.05, 0.05],
            [0.062, -0.006],
            [0.03, -0.052],
            [-0.028, -0.05],
            [-0.06, 0.006],
          ],
          epaisseur: 0.012,
          centre: [X.cretIliaque - 0.018, R.cretIliaque - 0.046, -0.016],
          rotation: [0.1, 0.62, 0.12],
          courbure: 0.022,
        },
        {
          forme: 'ellipsoide',
          centre: [X.hanche + 0.016, R.hanche + 0.004, 0.004],
          rayons: [0.014, 0.026, 0.026],
        },
        {
          forme: 'capsule',
          debut: [X.hanche + 0.006, R.hanche - 0.026, 0.01],
          fin: [0.022, R.pubis - 0.008, 0.052],
          rayon: 0.0105,
        },
        {
          forme: 'capsule',
          debut: [X.hanche + 0.01, R.hanche - 0.03, -0.012],
          fin: [0.03, R.pubis - 0.046, -0.006],
          rayon: 0.0115,
        },
      ],
    },
  },
  {
    id: 'os-symphyse-pubienne',
    nom: 'Symphyse pubienne',
    nomLatin: 'Symphysis pubica',
    systeme: 'squelette',
    region: 'pelvis',
    couleur: CARTILAGE,
    detail: true,
    description:
      'Articulation cartilagineuse médiane unissant les deux pubis par un disque fibrocartilagineux. Sa laxité augmente en fin de grossesse sous l’effet hormonal.',
    reperes: ['Repère antérieur du bassin, palpable au-dessus des organes génitaux externes.'],
    ficheLiee: 'anat-pelvis-perinee',
    geometrie: {
      forme: 'boite',
      centre: [0, R.pubis - 0.012, 0.054],
      dimensions: [0.014, 0.03, 0.022],
      arrondi: 0.8,
    },
  },
  {
    id: 'os-femur',
    nom: 'Fémur',
    nomLatin: 'Femur',
    systeme: 'squelette',
    region: 'membre-inferieur',
    couleur: OS,
    miroir: true,
    description:
      'Os le plus long et le plus solide du corps. Sa tête sphérique s’enfonce dans l’acétabulum, son col oblique supporte des contraintes considérables et ses condyles distaux forment le genou.',
    reperes: [
      'La fracture du col fémoral est une urgence fréquente chez la personne âgée ostéoporotique.',
      'Le grand trochanter est palpable à la face latérale de la hanche.',
      'L’angle cervico-diaphysaire mesure environ cent vingt-cinq degrés chez l’adulte.',
    ],
    ficheLiee: 'anat-hanche-cuisse',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'osLong',
          debut: [X.genou, R.genou + 0.012, 0],
          fin: [X.hanche + 0.042, R.hanche - 0.016, -0.004],
          rayon: 0.0165,
          rayonEpiphyseHaute: 0.022,
          rayonEpiphyseBasse: 0.03,
          courbure: [0.006, 0, 0.008],
        },
        {
          forme: 'capsule',
          debut: [X.hanche + 0.042, R.hanche - 0.014, -0.004],
          fin: [X.hanche + 0.014, R.hanche + 0.016, 0.004],
          rayon: 0.014,
        },
        {
          forme: 'ellipsoide',
          centre: [X.hanche + 0.008, R.hanche + 0.022, 0.005],
          rayons: [0.023, 0.023, 0.023],
        },
      ],
    },
  },
  {
    id: 'os-patella',
    nom: 'Patella',
    nomLatin: 'Patella',
    systeme: 'squelette',
    region: 'membre-inferieur',
    couleur: OS_SOMBRE,
    miroir: true,
    description:
      'Plus grand os sésamoïde du corps, inclus dans le tendon du quadriceps. Elle augmente le bras de levier de l’extension du genou et protège l’articulation en avant.',
    reperes: [
      'Le réflexe rotulien explore la racine L4.',
      'Sa face postérieure, cartilagineuse, glisse dans la trochlée fémorale.',
    ],
    ficheLiee: 'anat-jambe-pied',
    geometrie: {
      forme: 'ellipsoide',
      centre: [X.genou + 0.002, R.genou + 0.024, 0.042],
      rayons: [0.021, 0.024, 0.009],
    },
  },
  {
    id: 'os-tibia',
    nom: 'Tibia',
    nomLatin: 'Tibia',
    systeme: 'squelette',
    region: 'membre-inferieur',
    couleur: OS,
    miroir: true,
    description:
      'Os médial et porteur de la jambe. Son plateau supérieur reçoit les condyles fémoraux ; sa malléole médiale forme le relief interne de la cheville.',
    reperes: [
      'La face antéromédiale est sous-cutanée sur toute sa longueur : c’est la crête tibiale.',
      'La tubérosité tibiale antérieure reçoit le tendon patellaire.',
      'Le tibia supporte la quasi-totalité du poids transmis par le fémur.',
    ],
    ficheLiee: 'anat-jambe-pied',
    geometrie: {
      forme: 'osLong',
      debut: [X.cheville + 0.006, R.cheville + 0.018, 0.004],
      fin: [X.genou - 0.002, R.genou - 0.01, 0.006],
      rayon: 0.0135,
      rayonEpiphyseHaute: 0.027,
      rayonEpiphyseBasse: 0.018,
    },
  },
  {
    id: 'os-fibula',
    nom: 'Fibula',
    nomLatin: 'Fibula',
    systeme: 'squelette',
    region: 'membre-inferieur',
    couleur: OS,
    miroir: true,
    description:
      'Os latéral et grêle de la jambe, non porteur. Il sert surtout d’insertion musculaire ; sa malléole latérale stabilise l’articulation talo-crurale.',
    reperes: [
      'Le nerf fibulaire commun contourne le col de la fibula : il y est exposé aux compressions.',
      'La malléole latérale descend plus bas que la malléole médiale.',
    ],
    ficheLiee: 'anat-jambe-pied',
    geometrie: {
      forme: 'osLong',
      debut: [X.cheville + 0.026, R.cheville + 0.004, -0.002],
      fin: [X.genou + 0.026, R.genou - 0.026, -0.006],
      rayon: 0.0065,
      rayonEpiphyseHaute: 0.011,
      rayonEpiphyseBasse: 0.012,
    },
  },
  {
    id: 'os-calcaneus',
    nom: 'Calcanéus',
    nomLatin: 'Calcaneus',
    systeme: 'squelette',
    region: 'membre-inferieur',
    couleur: OS,
    miroir: true,
    description:
      'Plus volumineux os du tarse, il forme le talon et transmet au sol le poids du corps. Sa grosse tubérosité reçoit le tendon calcanéen.',
    reperes: [
      'Le tendon calcanéen est le plus épais tendon du corps humain.',
      'La fracture du calcanéus survient typiquement lors d’une chute d’un lieu élevé.',
    ],
    ficheLiee: 'anat-jambe-pied',
    geometrie: {
      forme: 'boite',
      centre: [X.pied, 0.028, -0.032],
      dimensions: [0.032, 0.05, 0.062],
      arrondi: 0.85,
    },
  },
  {
    id: 'os-talus',
    nom: 'Talus',
    nomLatin: 'Talus',
    systeme: 'squelette',
    region: 'membre-inferieur',
    couleur: OS_SOMBRE,
    miroir: true,
    description:
      'Os intermédiaire entre la jambe et le pied. Sa trochlée s’encastre dans la mortaise tibiofibulaire ; il ne reçoit aucune insertion musculaire.',
    reperes: [
      'Sa vascularisation précaire expose à la nécrose après fracture.',
      'L’articulation talo-crurale assure la flexion dorsale et plantaire.',
    ],
    ficheLiee: 'anat-jambe-pied',
    geometrie: {
      forme: 'ellipsoide',
      centre: [X.pied - 0.002, 0.056, -0.008],
      rayons: [0.019, 0.017, 0.026],
    },
  },
  {
    id: 'os-tarse-anterieur',
    nom: 'Os du tarse antérieur',
    systeme: 'squelette',
    region: 'membre-inferieur',
    couleur: OS,
    miroir: true,
    detail: true,
    description:
      'Naviculaire, cuboïde et les trois cunéiformes. Ils relient l’arrière-pied aux métatarsiens et participent à la voûte plantaire.',
    reperes: ['La voûte plantaire amortit et restitue l’énergie à chaque pas.'],
    ficheLiee: 'anat-jambe-pied',
    geometrie: {
      forme: 'boite',
      centre: [X.pied, 0.046, 0.03],
      dimensions: [0.05, 0.028, 0.042],
      arrondi: 0.85,
    },
  },
];

function construirePied(): PieceAnatomique[] {
  const pieces: PieceAnatomique[] = [];
  const longueurs = [0.054, 0.058, 0.056, 0.052, 0.048];

  for (let i = 0; i < 5; i += 1) {
    const ecart = (i - 2) * 0.0145;
    const xBase = X.pied + ecart * 0.45;
    const xAvant = X.pied + ecart;
    pieces.push({
      id: `os-metatarsien-${i + 1}`,
      nom: `${i + 1}${i === 0 ? 'er' : 'e'} métatarsien`,
      systeme: 'squelette',
      region: 'membre-inferieur',
      couleur: OS,
      miroir: true,
      detail: i > 0,
      description:
        'Os long de l’avant-pied. Les têtes métatarsiennes constituent l’appui antérieur de la voûte plantaire.',
      reperes:
        i === 0
          ? ['La tête du premier métatarsien supporte une part majeure de l’appui antérieur.']
          : ['La fracture de fatigue du deuxième ou du troisième métatarsien est classique chez le sportif.'],
      ficheLiee: 'anat-jambe-pied',
      geometrie: {
        forme: 'osLong',
        debut: [xAvant, 0.022, 0.05 + longueurs[i]],
        fin: [xBase, 0.042, 0.05],
        rayon: 0.0045,
        rayonEpiphyseHaute: 0.006,
        rayonEpiphyseBasse: 0.0062,
      },
    });

    const nbPhalanges = i === 0 ? 2 : 3;
    let zCourant = 0.05 + longueurs[i];
    for (let p = 0; p < nbPhalanges; p += 1) {
      const longueur = i === 0 ? 0.016 : 0.012 - p * 0.002;
      pieces.push({
        id: `os-phalange-pied-${i + 1}-${p + 1}`,
        nom: `Phalange ${p === 0 ? 'proximale' : p === 1 && nbPhalanges === 3 ? 'moyenne' : 'distale'} du ${i === 0 ? 'gros orteil' : `${i + 1}e orteil`}`,
        systeme: 'squelette',
        region: 'membre-inferieur',
        couleur: OS,
        miroir: true,
        detail: true,
        description:
          'Phalange de l’orteil. Comme à la main, le premier rayon n’en compte que deux, les autres trois.',
        reperes: ['Le gros orteil joue un rôle clé dans la propulsion lors de la marche.'],
        ficheLiee: 'anat-jambe-pied',
        geometrie: {
          forme: 'capsule',
          debut: [xAvant, 0.018, zCourant + longueur],
          fin: [xAvant, 0.02, zCourant],
          rayon: i === 0 ? 0.0055 : 0.0038 - p * 0.0003,
        },
      });
      zCourant += longueur;
    }
  }

  return pieces;
}

/* -------------------------------------------------------------------------- */

export const SQUELETTE: PieceAnatomique[] = [
  ...crane,
  ...construireRachis(),
  ...construireThoraxOsseux(),
  ...membreSuperieur,
  ...construireMain(),
  ...membreInferieur,
  ...construirePied(),
];
