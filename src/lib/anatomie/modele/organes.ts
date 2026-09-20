import type { PieceAnatomique } from '../types';
import { R, X, Z } from '../reperes';

/** Viscères et organes des grandes cavités. */

export const ORGANES: PieceAnatomique[] = [
  /* ------------------------------ Système nerveux central ----------------- */
  {
    id: 'org-cerveau',
    nom: 'Cerveau',
    nomLatin: 'Cerebrum',
    systeme: 'organes',
    region: 'tete',
    couleur: '#d9b8c4',
    description:
      'Partie la plus volumineuse de l’encéphale, formée de deux hémisphères réunis par le corps calleux. Son cortex plissé en gyrus et sillons contient les corps cellulaires neuronaux.',
    reperes: [
      'Quatre lobes par hémisphère : frontal, pariétal, temporal et occipital.',
      'Le sillon central sépare l’aire motrice primaire de l’aire somesthésique primaire.',
      'L’hémisphère gauche est dominant pour le langage chez la grande majorité des personnes.',
    ],
    ficheLiee: 'physio-neurophysiologie',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0, R.vertex - 0.062, -0.012],
      rayons: [0.068, 0.052, 0.078],
      segments: 34,
    },
  },
  {
    id: 'org-cervelet',
    nom: 'Cervelet',
    nomLatin: 'Cerebellum',
    systeme: 'organes',
    region: 'tete',
    couleur: '#c9a3b2',
    description:
      'Situé dans la fosse crânienne postérieure, sous les lobes occipitaux. Il coordonne le mouvement, règle le tonus et participe à l’équilibre.',
    reperes: [
      'Une atteinte cérébelleuse provoque ataxie, dysmétrie et tremblement d’action.',
      'Il est séparé du cerveau par la tente du cervelet.',
    ],
    ficheLiee: 'physio-neurophysiologie',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0, R.baseCrane + 0.016, -0.05],
      rayons: [0.045, 0.024, 0.03],
    },
  },
  {
    id: 'org-tronc-cerebral',
    nom: 'Tronc cérébral',
    nomLatin: 'Truncus encephali',
    systeme: 'organes',
    region: 'tete',
    couleur: '#cfa9b6',
    description:
      'Axe reliant le cerveau à la moelle spinale, formé du mésencéphale, du pont et de la moelle allongée. Il abrite les noyaux des nerfs crâniens et les centres vitaux.',
    reperes: [
      'Les centres respiratoire et cardiovasculaire siègent dans la moelle allongée.',
      'Dix des douze paires de nerfs crâniens en émergent.',
    ],
    ficheLiee: 'physio-neurophysiologie',
    geometrie: {
      forme: 'tube',
      points: [
        [0, R.baseCrane + 0.03, -0.018],
        [0, R.baseCrane, -0.024],
        [0, R.c1 + 0.006, -0.028],
      ],
      rayon: 0.014,
      rayonFin: 0.011,
    },
  },
  {
    id: 'org-moelle-spinale',
    nom: 'Moelle spinale',
    nomLatin: 'Medulla spinalis',
    systeme: 'organes',
    region: 'rachis',
    couleur: '#dcc0cb',
    description:
      'Prolongement du tronc cérébral dans le canal vertébral. Elle assure la conduction des voies ascendantes et descendantes et l’intégration des réflexes médullaires.',
    reperes: [
      'Elle se termine par le cône médullaire en regard de L1 ou L2 chez l’adulte.',
      'Au-dessous, le canal ne contient que la queue de cheval : la ponction lombaire y est sans danger.',
      'Trente et une paires de nerfs spinaux en naissent.',
    ],
    ficheLiee: 'anat-rachis',
    geometrie: {
      forme: 'tube',
      points: [
        [0, R.c1, -0.028],
        [0, R.c7, -0.036],
        [0, R.t1 - 0.12, -0.05],
        [0, R.t12, -0.036],
        [0, R.l1 - 0.03, -0.028],
      ],
      rayon: 0.0085,
      rayonFin: 0.005,
    },
  },
  {
    id: 'org-oeil',
    nom: 'Globe oculaire',
    nomLatin: 'Bulbus oculi',
    systeme: 'organes',
    region: 'tete',
    couleur: '#f3f6fb',
    miroir: true,
    detail: true,
    description:
      'Organe de la vision, sphère d’environ vingt-quatre millimètres de diamètre, formée de trois tuniques : fibreuse, vasculaire et nerveuse.',
    reperes: [
      'La rétine contient les photorécepteurs : cônes de la vision colorée et bâtonnets de la vision nocturne.',
      'La papille optique est la tache aveugle.',
      'Le cristallin assure l’accommodation.',
    ],
    ficheLiee: 'ue3-optique-oeil',
    geometrie: {
      forme: 'groupe',
      elements: [
        { forme: 'ellipsoide', centre: [0.032, R.glabelle - 0.026, 0.05], rayons: [0.0115, 0.0115, 0.0115] },
        { forme: 'ellipsoide', centre: [0.032, R.glabelle - 0.026, 0.059], rayons: [0.0055, 0.0055, 0.004] },
      ],
    },
  },

  /* ------------------------------- Cervical ------------------------------- */
  {
    id: 'org-thyroide',
    nom: 'Glande thyroïde',
    nomLatin: 'Glandula thyroidea',
    systeme: 'organes',
    region: 'cou',
    couleur: '#c98a6a',
    description:
      'Glande endocrine en forme de papillon appliquée sur la trachée sous le cartilage thyroïde. Elle sécrète les hormones thyroïdiennes T3 et T4, et la calcitonine.',
    reperes: [
      'Elle est mobile à la déglutition, ce qui permet de la distinguer des autres masses cervicales.',
      'Les quatre glandes parathyroïdes sont plaquées sur sa face postérieure.',
      'Les nerfs laryngés récurrents cheminent à son contact.',
    ],
    ficheLiee: 'physio-physiologie-endocrinienne',
    geometrie: {
      forme: 'groupe',
      elements: [
        { forme: 'ellipsoide', centre: [0.02, R.fourchetteSternale + 0.042, 0.042], rayons: [0.013, 0.021, 0.011] },
        { forme: 'ellipsoide', centre: [-0.02, R.fourchetteSternale + 0.042, 0.042], rayons: [0.013, 0.021, 0.011] },
        { forme: 'boite', centre: [0, R.fourchetteSternale + 0.034, 0.044], dimensions: [0.022, 0.012, 0.008], arrondi: 0.9 },
      ],
    },
  },
  {
    id: 'org-trachee',
    nom: 'Trachée',
    nomLatin: 'Trachea',
    systeme: 'organes',
    region: 'thorax',
    couleur: '#e3ecf4',
    description:
      'Conduit aérien fibrocartilagineux tendu du larynx à la bifurcation trachéale. Ses anneaux cartilagineux incomplets en arrière maintiennent la lumière ouverte.',
    reperes: [
      'La bifurcation se projette approximativement en regard de l’angle sternal.',
      'La bronche principale droite est plus verticale : les corps étrangers y tombent préférentiellement.',
    ],
    ficheLiee: 'physio-mecanique-ventilatoire',
    geometrie: {
      forme: 'tube',
      points: [
        [0, R.baseCrane - 0.05, 0.036],
        [0, R.fourchetteSternale + 0.02, 0.04],
        [0, R.angleSternal + 0.012, 0.022],
      ],
      rayon: 0.0095,
    },
  },
  {
    id: 'org-bronches',
    nom: 'Bronches principales',
    nomLatin: 'Bronchi principales',
    systeme: 'organes',
    region: 'thorax',
    couleur: '#dbe6f0',
    miroir: true,
    description:
      'Deux conduits nés de la bifurcation trachéale, qui pénètrent dans le poumon par le hile et s’y divisent en bronches lobaires puis segmentaires.',
    reperes: ['L’arbre bronchique se divise une vingtaine de fois avant les alvéoles.'],
    ficheLiee: 'physio-mecanique-ventilatoire',
    geometrie: {
      forme: 'tube',
      points: [
        [0.004, R.angleSternal + 0.012, 0.022],
        [0.032, R.angleSternal - 0.014, 0.014],
        [0.056, R.angleSternal - 0.03, 0.004],
      ],
      rayon: 0.0068,
      rayonFin: 0.005,
    },
  },
  {
    id: 'org-poumon-droit',
    nom: 'Poumon droit',
    nomLatin: 'Pulmo dexter',
    systeme: 'organes',
    region: 'thorax',
    couleur: '#e7b7bd',
    opacite: 0.82,
    description:
      'Organe de l’hématose situé dans la cavité pleurale droite. Il compte trois lobes séparés par les scissures oblique et horizontale.',
    reperes: [
      'Plus volumineux mais plus court que le gauche, car refoulé par le foie.',
      'La surface d’échange alvéolaire est considérable, de l’ordre de cent mètres carrés.',
    ],
    ficheLiee: 'physio-echanges-gazeux',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0.078, R.angleSternal - 0.055, 0.008],
      rayons: [0.056, 0.095, 0.058],
      rotation: [0, 0, -0.1],
    },
  },
  {
    id: 'org-poumon-gauche',
    nom: 'Poumon gauche',
    nomLatin: 'Pulmo sinister',
    systeme: 'organes',
    region: 'thorax',
    couleur: '#e7b7bd',
    opacite: 0.82,
    description:
      'Poumon de la cavité pleurale gauche, divisé en deux lobes seulement. Son bord antérieur présente l’incisure cardiaque et la lingula.',
    reperes: [
      'Plus étroit que le droit à cause de la place occupée par le cœur.',
      'Le hile reçoit la bronche, les artères et les veines pulmonaires.',
    ],
    ficheLiee: 'physio-echanges-gazeux',
    geometrie: {
      forme: 'ellipsoide',
      centre: [-0.08, R.angleSternal - 0.055, 0.006],
      rayons: [0.05, 0.095, 0.055],
      rotation: [0, 0, 0.1],
    },
  },
  {
    id: 'org-coeur',
    nom: 'Cœur',
    nomLatin: 'Cor',
    systeme: 'organes',
    region: 'thorax',
    couleur: '#c0353f',
    description:
      'Pompe musculaire à quatre cavités située dans le médiastin moyen, entre les deux poumons, reposant sur le diaphragme. Son apex pointe en bas, en avant et à gauche.',
    reperes: [
      'Le choc de pointe se palpe normalement au cinquième espace intercostal gauche, sur la ligne médioclaviculaire.',
      'Deux tiers de sa masse sont situés à gauche du plan sagittal médian.',
      'Il est entouré du péricarde, feuillets séreux et sac fibreux.',
    ],
    ficheLiee: 'physio-physiologie-cardiaque',
    geometrie: {
      forme: 'groupe',
      elements: [
        {
          forme: 'ellipsoide',
          centre: [-0.016, R.angleSternal - 0.055, 0.042],
          rayons: [0.045, 0.054, 0.04],
          rotation: [0.16, 0.22, 0.38],
        },
        { forme: 'ellipsoide', centre: [-0.03, R.angleSternal - 0.012, 0.03], rayons: [0.03, 0.024, 0.028] },
      ],
    },
  },
  {
    id: 'org-oesophage',
    nom: 'Œsophage',
    nomLatin: 'Oesophagus',
    systeme: 'organes',
    region: 'thorax',
    couleur: '#dab9a4',
    description:
      'Conduit musculo-membraneux d’environ vingt-cinq centimètres reliant le pharynx à l’estomac, traversant le médiastin postérieur puis le diaphragme.',
    reperes: [
      'Sa musculeuse est striée au tiers supérieur, lisse au tiers inférieur.',
      'Le sphincter inférieur prévient le reflux gastro-œsophagien.',
    ],
    ficheLiee: 'physio-physiologie-digestive',
    geometrie: {
      forme: 'tube',
      points: [
        [0, R.baseCrane - 0.055, 0.018],
        [0, R.fourchetteSternale, 0.008],
        [0, R.angleSternal - 0.05, -0.014],
        [-0.012, R.xiphoide + 0.005, -0.006],
      ],
      rayon: 0.0085,
    },
  },

  /* -------------------------------- Abdomen ------------------------------- */
  {
    id: 'org-foie',
    nom: 'Foie',
    nomLatin: 'Hepar',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#8f4a3c',
    description:
      'Plus volumineuse glande de l’organisme, occupant l’hypochondre droit et une partie de l’épigastre. Il assure des fonctions métaboliques, de détoxification et de sécrétion biliaire.',
    reperes: [
      'Il reçoit une double vascularisation : artère hépatique et veine porte.',
      'Il n’est normalement pas palpable sous le rebord costal.',
      'La vésicule biliaire est appendue à sa face viscérale.',
    ],
    ficheLiee: 'physio-physiologie-digestive',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0.055, R.xiphoide - 0.05, 0.028],
      rayons: [0.092, 0.048, 0.058],
      rotation: [0, 0, -0.16],
    },
  },
  {
    id: 'org-vesicule-biliaire',
    nom: 'Vésicule biliaire',
    nomLatin: 'Vesica biliaris',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#5f8a3f',
    description:
      'Réservoir piriforme appendu à la face viscérale du foie, qui concentre et stocke la bile entre les repas puis la déverse dans le duodénum.',
    reperes: [
      'Le point vésiculaire se projette au croisement du rebord costal droit et du bord latéral du muscle droit.',
      'La lithiase vésiculaire est une pathologie très fréquente.',
    ],
    ficheLiee: 'physio-physiologie-digestive',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0.05, R.xiphoide - 0.082, 0.056],
      rayons: [0.014, 0.022, 0.013],
    },
  },
  {
    id: 'org-estomac',
    nom: 'Estomac',
    nomLatin: 'Gaster',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#cf8f74',
    description:
      'Poche digestive située dans l’hypochondre gauche et l’épigastre, entre l’œsophage et le duodénum. Elle sécrète l’acide chlorhydrique, le pepsinogène et le facteur intrinsèque.',
    reperes: [
      'Ses parties : cardia, fundus, corps, antre et pylore.',
      'Le facteur intrinsèque est indispensable à l’absorption de la vitamine B12 dans l’iléon.',
    ],
    ficheLiee: 'physio-physiologie-digestive',
    geometrie: {
      forme: 'ellipsoide',
      centre: [-0.045, R.xiphoide - 0.062, 0.03],
      rayons: [0.045, 0.05, 0.032],
      rotation: [0, 0, 0.3],
    },
  },
  {
    id: 'org-rate',
    nom: 'Rate',
    nomLatin: 'Splen',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#7b3f52',
    description:
      'Organe lymphoïde secondaire de l’hypochondre gauche, en arrière de l’estomac. Elle filtre le sang, épure les hématies vieillies et participe à la réponse immunitaire.',
    reperes: [
      'Normalement non palpable ; une splénomégalie la rend perceptible sous le rebord costal.',
      'Elle est logée en regard des neuvième à onzième côtes gauches.',
    ],
    ficheLiee: 'ue5-organisation-systeme-immunitaire',
    geometrie: {
      forme: 'ellipsoide',
      centre: [-0.082, R.xiphoide - 0.05, -0.028],
      rayons: [0.024, 0.036, 0.024],
      rotation: [0, 0.3, 0.2],
    },
  },
  {
    id: 'org-pancreas',
    nom: 'Pancréas',
    nomLatin: 'Pancreas',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#d5c08a',
    description:
      'Glande amphicrine rétropéritonéale, étendue du cadre duodénal à la rate. Sa partie exocrine sécrète les enzymes digestives, sa partie endocrine l’insuline et le glucagon.',
    reperes: [
      'Les îlots de Langerhans représentent la fraction endocrine, environ un à deux pour cent de la masse.',
      'Sa tête est encadrée par le duodénum ; sa queue atteint le hile splénique.',
    ],
    ficheLiee: 'physio-physiologie-endocrinienne',
    geometrie: {
      forme: 'tube',
      points: [
        [0.042, R.l1 + 0.005, -0.012],
        [0.005, R.l1 + 0.016, -0.018],
        [-0.055, R.l1 + 0.026, -0.03],
      ],
      rayon: 0.014,
      rayonFin: 0.008,
    },
  },
  {
    id: 'org-duodenum',
    nom: 'Duodénum',
    nomLatin: 'Duodenum',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#dba983',
    description:
      'Premier segment de l’intestin grêle, en forme de cadre autour de la tête du pancréas. Il reçoit la bile et le suc pancréatique par l’ampoule hépatopancréatique.',
    reperes: [
      'Il est fixe et rétropéritonéal, sauf son premier segment.',
      'L’angle duodénojéjunal est le repère de fin du duodénum.',
    ],
    ficheLiee: 'physio-physiologie-digestive',
    geometrie: {
      forme: 'tube',
      points: [
        [0.012, R.l1 + 0.022, 0.012],
        [0.046, R.l1 + 0.012, 0.004],
        [0.048, R.l1 - 0.03, 0],
        [0.012, R.l1 - 0.04, -0.006],
        [0.0, R.l1 - 0.006, -0.014],
      ],
      rayon: 0.012,
    },
  },
  {
    id: 'org-intestin-grele',
    nom: 'Intestin grêle',
    nomLatin: 'Intestinum tenue',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#dda27e',
    description:
      'Jéjunum et iléon, longs d’environ six mètres, disposés en anses mobiles dans la cavité abdominale. C’est le site principal de la digestion et de l’absorption.',
    reperes: [
      'Villosités et microvillosités multiplient la surface d’absorption par plusieurs centaines.',
      'L’iléon terminal absorbe spécifiquement la vitamine B12 et les sels biliaires.',
    ],
    ficheLiee: 'physio-physiologie-digestive',
    geometrie: {
      forme: 'tube',
      points: [
        [0.0, R.l1 - 0.02, 0.01],
        [0.05, R.l5 + 0.04, 0.036],
        [-0.05, R.l5 + 0.02, 0.042],
        [0.045, R.l5 - 0.015, 0.038],
        [-0.045, R.sacrumHaut + 0.008, 0.03],
        [0.03, R.sacrumHaut - 0.01, 0.024],
        [0.0, R.sacrumHaut - 0.012, 0.01],
      ],
      rayon: 0.017,
      segments: 120,
    },
  },
  {
    id: 'org-colon',
    nom: 'Côlon',
    nomLatin: 'Colon',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#c08a5e',
    description:
      'Cadre colique entourant les anses grêles : côlon ascendant, transverse, descendant puis sigmoïde. Il absorbe l’eau et les électrolytes et abrite le microbiote.',
    reperes: [
      'Ses trois bandelettes longitudinales et ses haustrations le distinguent du grêle.',
      'Les côlons ascendant et descendant sont rétropéritonéaux et fixes.',
    ],
    ficheLiee: 'physio-physiologie-digestive',
    geometrie: {
      forme: 'tube',
      points: [
        [0.075, R.sacrumHaut + 0.01, 0.026],
        [0.082, R.l5 + 0.03, 0.022],
        [0.078, R.l1 - 0.015, 0.02],
        [0.0, R.l1 + 0.008, 0.044],
        [-0.078, R.l1 - 0.015, 0.018],
        [-0.082, R.l5 + 0.02, 0.016],
        [-0.06, R.sacrumHaut + 0.005, 0.022],
        [-0.02, R.sacrumBas + 0.03, 0.006],
        [0.0, R.sacrumBas + 0.005, -0.006],
      ],
      rayon: 0.021,
      segments: 110,
    },
  },
  {
    id: 'org-appendice',
    nom: 'Appendice vermiforme',
    nomLatin: 'Appendix vermiformis',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#b87a52',
    detail: true,
    description:
      'Diverticule appendu au cæcum, riche en tissu lymphoïde. Sa position est variable, le plus souvent rétrocæcale ou pelvienne.',
    reperes: [
      'Le point de McBurney se situe au tiers latéral de la ligne joignant l’ombilic à l’épine iliaque antéro-supérieure droite.',
      'L’appendicite est l’urgence chirurgicale abdominale la plus fréquente.',
    ],
    ficheLiee: 'anat-abdomen',
    geometrie: {
      forme: 'capsule',
      debut: [0.07, R.sacrumHaut - 0.004, 0.028],
      fin: [0.052, R.sacrumHaut - 0.04, 0.022],
      rayon: 0.005,
    },
  },
  {
    id: 'org-rein',
    nom: 'Rein',
    nomLatin: 'Ren',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#9c4a52',
    miroir: true,
    description:
      'Organe rétropéritonéal en forme de haricot, situé de part et d’autre du rachis. Il filtre le plasma, régule le volume et la composition du milieu intérieur et sécrète des hormones.',
    reperes: [
      'Chaque rein contient environ un million de néphrons.',
      'Le rein droit est plus bas que le gauche, refoulé par le foie.',
      'Il reçoit environ un cinquième du débit cardiaque.',
    ],
    ficheLiee: 'physio-filtration-glomerulaire',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0.052, R.l1 - 0.005, -0.055],
      rayons: [0.022, 0.05, 0.026],
      rotation: [0, 0.2, 0.06],
    },
  },
  {
    id: 'org-surrenale',
    nom: 'Glande surrénale',
    nomLatin: 'Glandula suprarenalis',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#e0c46a',
    miroir: true,
    detail: true,
    description:
      'Glande endocrine coiffant le pôle supérieur du rein. Son cortex sécrète minéralocorticoïdes, glucocorticoïdes et androgènes ; sa médulla sécrète les catécholamines.',
    reperes: [
      'Le cortisol suit un rythme circadien, maximal en fin de nuit.',
      'L’aldostérone est le principal effecteur du système rénine-angiotensine.',
    ],
    ficheLiee: 'physio-physiologie-endocrinienne',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0.05, R.l1 + 0.05, -0.055],
      rayons: [0.016, 0.009, 0.014],
    },
  },
  {
    id: 'org-uretere',
    nom: 'Uretère',
    nomLatin: 'Ureter',
    systeme: 'organes',
    region: 'abdomen',
    couleur: '#c9a98f',
    miroir: true,
    detail: true,
    description:
      'Conduit musculaire d’environ vingt-cinq centimètres reliant le bassinet à la vessie, animé de contractions péristaltiques.',
    reperes: [
      'Trois rétrécissements physiologiques sont les sièges préférentiels des calculs.',
      'Son trajet est rétropéritonéal, puis pelvien.',
    ],
    ficheLiee: 'physio-fonction-tubulaire',
    geometrie: {
      forme: 'tube',
      points: [
        [0.042, R.l1 - 0.032, -0.05],
        [0.036, R.l5, -0.04],
        [0.03, R.sacrumHaut - 0.02, -0.02],
        [0.018, R.pubis + 0.022, 0.012],
      ],
      rayon: 0.0035,
    },
  },
  {
    id: 'org-vessie',
    nom: 'Vessie',
    nomLatin: 'Vesica urinaria',
    systeme: 'organes',
    region: 'pelvis',
    couleur: '#d3b98f',
    description:
      'Réservoir musculaire pelvien situé en arrière de la symphyse pubienne. Sa paroi, le détrusor, se contracte lors de la miction sous commande parasympathique.',
    reperes: [
      'Le trigone vésical est délimité par les deux orifices urétéraux et l’orifice urétral interne.',
      'Le besoin d’uriner apparaît autour de trois cents millilitres de remplissage.',
    ],
    ficheLiee: 'physio-fonction-tubulaire',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0, R.pubis + 0.012, 0.018],
      rayons: [0.032, 0.028, 0.03],
    },
  },
];
