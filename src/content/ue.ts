import type { UE, UEId } from './types';

/**
 * Les quatorze matières couvertes par MediCapsule.
 * Les identifiants sont figés : ils servent de préfixe à tous les slugs de fiches,
 * de schémas, de flashcards et de QCM.
 */
export const UES: UE[] = [
  {
    id: 'ue2',
    code: 'CHM',
    titre: 'Chimie générale et organique',
    sousTitre: 'Atomistique, liaisons, thermodynamique, fonctions organiques',
    description:
      "Les bases physico-chimiques indispensables : structure de l'atome, liaisons chimiques, équilibres acido-basiques, oxydoréduction, stéréochimie et grandes fonctions organiques du vivant.",
    couleur: '#4f6df5',
    couleurClaire: '#e8edff',
    icone: 'atome',
  },
  {
    id: 'bioch',
    code: 'BCH',
    titre: 'Biochimie',
    sousTitre: 'Biomolécules, enzymologie et métabolisme',
    description:
      'Acides aminés, protéines, glucides, lipides, enzymes et voies métaboliques centrales : glycolyse, cycle de Krebs, chaîne respiratoire, bêta-oxydation, néoglucogenèse.',
    couleur: '#e0632f',
    couleurClaire: '#ffeee6',
    icone: 'molecule',
  },
  {
    id: 'ue1',
    code: 'BMG',
    titre: 'Biologie moléculaire et génétique',
    sousTitre: 'ADN, expression des gènes, génétique humaine',
    description:
      "Structure et réplication de l'ADN, transcription, maturation des ARN, traduction, régulation de l'expression, mutations, réparation et transmission des caractères.",
    couleur: '#7c4df5',
    couleurClaire: '#f0eaff',
    icone: 'helice',
  },
  {
    id: 'biocell',
    code: 'BCL',
    titre: 'Biologie cellulaire',
    sousTitre: 'Organites, trafic, cycle cellulaire, signalisation',
    description:
      'Membrane plasmique, cytosquelette, système endomembranaire, mitochondrie, noyau, cycle cellulaire, mitose, méiose, apoptose et communication intercellulaire.',
    couleur: '#1fa97f',
    couleurClaire: '#e2f7f0',
    icone: 'cellule',
  },
  {
    id: 'histo',
    code: 'HIS',
    titre: 'Histologie',
    sousTitre: 'Les quatre tissus fondamentaux et les organes',
    description:
      'Épithéliums de revêtement et glandulaires, tissus conjonctifs, tissu osseux et cartilagineux, sang, tissus musculaires, tissu nerveux et histologie des grands appareils.',
    couleur: '#c2417d',
    couleurClaire: '#fdeaf3',
    icone: 'microscope',
  },
  {
    id: 'embryo',
    code: 'EMB',
    titre: 'Embryologie et reproduction',
    sousTitre: "De la gamétogenèse à l'organogenèse",
    description:
      'Gamétogenèse, fécondation, segmentation, implantation, gastrulation, neurulation, délimitation, annexes embryonnaires et mise en place des grands appareils.',
    couleur: '#d98324',
    couleurClaire: '#fff2e0',
    icone: 'embryon',
  },
  {
    id: 'anat',
    code: 'ANA',
    titre: 'Anatomie',
    sousTitre: 'Organisation générale et anatomie topographique',
    description:
      'Plans et axes de référence, ostéologie, arthrologie, myologie, puis étude région par région : rachis, thorax, abdomen, pelvis, membres, tête et cou.',
    couleur: '#2f80c4',
    couleurClaire: '#e4f1fb',
    icone: 'squelette',
  },
  {
    id: 'physio',
    code: 'PHY',
    titre: 'Physiologie',
    sousTitre: 'Fonctionnement intégré des grands appareils',
    description:
      "Physiologie cardiovasculaire, respiratoire, rénale, digestive, endocrinienne et neuromusculaire, ainsi que la régulation du milieu intérieur et l'équilibre acido-basique.",
    couleur: '#d1495b',
    couleurClaire: '#fde8eb',
    icone: 'coeur',
  },
  {
    id: 'ue3',
    code: 'BPH',
    titre: 'Biophysique',
    sousTitre: 'Solutions, transports, ondes et imagerie',
    description:
      "États de la matière, solutions et osmolarité, phénomènes de transport, potentiels membranaires, rayonnements, radioactivité, imagerie médicale et optique de l'œil.",
    couleur: '#0f9bb5',
    couleurClaire: '#e0f6fa',
    icone: 'onde',
  },
  {
    id: 'ue4',
    code: 'BST',
    titre: 'Biostatistiques',
    sousTitre: 'Probabilités, estimation, tests et lecture critique',
    description:
      "Probabilités, variables aléatoires, lois usuelles, estimation et intervalles de confiance, tests d'hypothèse, comparaison de moyennes et de proportions, corrélation et régression.",
    couleur: '#6b7b8c',
    couleurClaire: '#eef1f4',
    icone: 'courbe',
  },
  {
    id: 'ue5',
    code: 'IMM',
    titre: 'Immunologie et agents infectieux',
    sousTitre: "Défenses de l'organisme, bactéries, virus, parasites",
    description:
      'Immunité innée et adaptative, complément, anticorps, lymphocytes T et B, hypersensibilités, vaccination, puis structure et pouvoir pathogène des agents infectieux.',
    couleur: '#2f9e44',
    couleurClaire: '#e7f7ea',
    icone: 'bouclier',
  },
  {
    id: 'ue6',
    code: 'PHA',
    titre: 'Pharmacologie',
    sousTitre: 'Pharmacocinétique, pharmacodynamie, médicament',
    description:
      "Absorption, distribution, métabolisme et élimination des médicaments, relations dose-effet, récepteurs, interactions, effets indésirables et développement du médicament.",
    couleur: '#8d5cf6',
    couleurClaire: '#f2ebff',
    icone: 'gelule',
  },
  {
    id: 'ue7',
    code: 'SHS',
    titre: 'Sciences humaines et sociales',
    sousTitre: 'Histoire, éthique, droit et psychologie de la santé',
    description:
      'Histoire de la médecine, philosophie du soin, éthique médicale et bioéthique, droit de la santé, relation de soin, psychologie et sociologie appliquées à la santé.',
    couleur: '#b07d3a',
    couleurClaire: '#fbf1e2',
    icone: 'livre',
  },
  {
    id: 'sante-publique',
    code: 'SPU',
    titre: 'Santé publique et épidémiologie',
    sousTitre: 'Indicateurs, études, prévention, organisation du système',
    description:
      "Indicateurs de santé, types d'études épidémiologiques, mesures d'association, dépistage, prévention, organisation et financement du système de santé français.",
    couleur: '#127a6e',
    couleurClaire: '#e0f5f2',
    icone: 'population',
  },
];

export const UE_PAR_ID: Record<UEId, UE> = Object.fromEntries(
  UES.map((ue) => [ue.id, ue]),
) as Record<UEId, UE>;

export function getUE(id: UEId): UE {
  return UE_PAR_ID[id];
}
