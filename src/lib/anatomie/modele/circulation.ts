import type { PieceAnatomique, Point3 } from '../types';
import { R, X, Z } from '../reperes';

/** Systèmes vasculaire, nerveux périphérique et lymphatique. */

const ARTERE = '#c0392b';
const ARTERE_PULM = '#8e6fb0';
const VEINE = '#31629c';
const VEINE_PULM = '#b05a5a';
const NERF = '#d9b13c';
const LYMPHE = '#5aa88f';

function vaisseau(
  id: string,
  nom: string,
  systeme: 'vasculaire' | 'nerveux' | 'lymphatique',
  region: PieceAnatomique['region'],
  couleur: string,
  points: Point3[],
  rayon: number,
  description: string,
  reperes: string[],
  options: Partial<PieceAnatomique> = {},
): PieceAnatomique {
  return {
    id,
    nom,
    systeme,
    region,
    couleur,
    description,
    reperes,
    geometrie: { forme: 'tube', points, rayon, rayonFin: options.detail ? rayon * 0.7 : undefined },
    ...options,
  };
}

/* -------------------------------------------------------------------------- */
/*  Artères                                                                    */
/* -------------------------------------------------------------------------- */

const arteres: PieceAnatomique[] = [
  vaisseau(
    'vx-aorte',
    'Aorte',
    'vasculaire',
    'thorax',
    ARTERE,
    [
      [-0.022, R.angleSternal - 0.035, 0.042],
      [-0.016, R.angleSternal + 0.012, 0.026],
      [0.0, R.fourchetteSternale - 0.012, 0.004],
      [-0.012, R.angleSternal - 0.005, -0.028],
      [-0.012, R.xiphoide, -0.038],
      [-0.008, R.l1 + 0.02, -0.036],
      [-0.006, R.l5 + 0.012, -0.03],
    ],
    0.0125,
    'Plus gros tronc artériel de l’organisme, né du ventricule gauche. On lui décrit une portion ascendante, une crosse, une aorte thoracique descendante puis une aorte abdominale.',
    [
      'La crosse donne le tronc brachiocéphalique, la carotide commune gauche et la subclavière gauche.',
      'Elle traverse le diaphragme par le hiatus aortique en regard de T12.',
      'Elle se divise en artères iliaques communes en regard de L4.',
    ],
    { ficheLiee: 'physio-circulation' },
  ),
  vaisseau(
    'vx-carotide-commune',
    'Artère carotide commune',
    'vasculaire',
    'cou',
    ARTERE,
    [
      [0.016, R.fourchetteSternale + 0.004, 0.008],
      [0.026, R.fourchetteSternale + 0.05, 0.016],
      [0.034, R.menton - 0.006, 0.018],
    ],
    0.0055,
    'Artère principale de la tête et du cou. Elle monte dans le paquet vasculonerveux du cou et se divise en carotide interne et carotide externe.',
    [
      'La bifurcation se situe approximativement au niveau du bord supérieur du cartilage thyroïde.',
      'Le sinus carotidien contient des barorécepteurs, le glomus des chémorécepteurs.',
      'Le pouls carotidien se prend en dedans du sternocléidomastoïdien.',
    ],
    { miroir: true, ficheLiee: 'anat-cou' },
  ),
  vaisseau(
    'vx-carotide-interne',
    'Artère carotide interne',
    'vasculaire',
    'tete',
    ARTERE,
    [
      [0.034, R.menton - 0.004, 0.018],
      [0.04, R.menton + 0.05, 0.01],
      [0.026, R.baseCrane + 0.02, 0.01],
    ],
    0.0038,
    'Branche de terminaison de la carotide commune destinée à l’encéphale et à l’œil. Elle ne donne aucune branche cervicale.',
    [
      'Elle participe au cercle artériel du cerveau avec les artères vertébrales.',
      'Sa sténose athéromateuse est une cause majeure d’accident vasculaire cérébral.',
    ],
    { miroir: true, detail: true, ficheLiee: 'anat-cou' },
  ),
  vaisseau(
    'vx-subclaviere',
    'Artère subclavière',
    'vasculaire',
    'thorax',
    ARTERE,
    [
      [0.012, R.fourchetteSternale + 0.008, 0.004],
      [0.08, R.acromion - 0.012, 0.012],
      [X.epaule - 0.004, R.epauleCentre + 0.01, -0.004],
    ],
    0.005,
    'Artère du membre supérieur à son origine, elle passe entre les muscles scalènes puis sous la clavicule et devient artère axillaire au bord latéral de la première côte.',
    [
      'Elle donne l’artère vertébrale, destinée à l’encéphale.',
      'Le défilé costoclaviculaire peut être le siège d’un syndrome de compression.',
    ],
    { miroir: true, ficheLiee: 'anat-epaule-bras' },
  ),
  vaisseau(
    'vx-brachiale',
    'Artère brachiale',
    'vasculaire',
    'membre-superieur',
    ARTERE,
    [
      [X.epaule - 0.002, R.epauleCentre, -0.002],
      [X.brasHaut + 0.012, R.coude + 0.09, 0.008],
      [X.coude - 0.008, R.coude + 0.012, 0.018],
    ],
    0.0042,
    'Prolongement de l’artère axillaire au bras, elle chemine dans le sillon bicipital médial et se divise au pli du coude en artères radiale et ulnaire.',
    [
      'C’est l’artère où se mesure la pression artérielle au brassard.',
      'Elle est accompagnée du nerf médian.',
    ],
    { miroir: true, ficheLiee: 'anat-epaule-bras' },
  ),
  vaisseau(
    'vx-radiale',
    'Artère radiale',
    'vasculaire',
    'membre-superieur',
    ARTERE,
    [
      [X.coude - 0.006, R.coude + 0.008, 0.018],
      [X.poignet + 0.004, R.poignet + 0.05, 0.022],
      [X.poignet + 0.01, R.poignet + 0.004, 0.02],
    ],
    0.003,
    'Branche latérale de division de l’artère brachiale. Elle devient superficielle au poignet, où son pouls est aisément perçu.',
    [
      'Le test d’Allen vérifie la suppléance ulnaire avant une ponction radiale.',
      'Elle participe aux arcades palmaires avec l’artère ulnaire.',
    ],
    { miroir: true, detail: true, ficheLiee: 'anat-avant-bras-main' },
  ),
  vaisseau(
    'vx-ulnaire',
    'Artère ulnaire',
    'vasculaire',
    'membre-superieur',
    ARTERE,
    [
      [X.coude - 0.012, R.coude + 0.006, 0.014],
      [X.poignet - 0.018, R.poignet + 0.05, 0.012],
      [X.poignet - 0.014, R.poignet + 0.002, 0.012],
    ],
    0.003,
    'Branche médiale de division de l’artère brachiale, elle chemine dans la loge antérieure de l’avant-bras avec le nerf ulnaire.',
    ['Elle contribue majoritairement à l’arcade palmaire superficielle.'],
    { miroir: true, detail: true, ficheLiee: 'anat-avant-bras-main' },
  ),
  vaisseau(
    'vx-tronc-coeliaque',
    'Tronc cœliaque',
    'vasculaire',
    'abdomen',
    ARTERE,
    [
      [-0.008, R.l1 + 0.042, -0.034],
      [-0.006, R.l1 + 0.04, -0.018],
      [-0.03, R.l1 + 0.038, -0.008],
    ],
    0.0045,
    'Première branche viscérale de l’aorte abdominale. Il se divise en artère gastrique gauche, artère splénique et artère hépatique commune.',
    ['Il vascularise l’intestin antérieur : estomac, foie, rate, duodénum proximal et pancréas.'],
    { ficheLiee: 'anat-abdomen' },
  ),
  vaisseau(
    'vx-mesenterique-superieure',
    'Artère mésentérique supérieure',
    'vasculaire',
    'abdomen',
    ARTERE,
    [
      [-0.006, R.l1 + 0.026, -0.032],
      [0.0, R.l1 - 0.005, -0.004],
      [0.01, R.l5 + 0.03, 0.014],
    ],
    0.0045,
    'Deuxième branche viscérale de l’aorte abdominale ; elle vascularise l’intestin moyen, du duodénum distal aux deux tiers droits du côlon transverse.',
    ['Son occlusion provoque un infarctus mésentérique, urgence vitale.'],
    { ficheLiee: 'anat-abdomen' },
  ),
  vaisseau(
    'vx-renale',
    'Artère rénale',
    'vasculaire',
    'abdomen',
    ARTERE,
    [
      [-0.004, R.l1 + 0.006, -0.032],
      [0.028, R.l1 + 0.002, -0.046],
      [0.042, R.l1, -0.052],
    ],
    0.0042,
    'Branche latérale de l’aorte abdominale, elle aborde le rein par le hile et se divise en artères segmentaires.',
    [
      'Elle assure un débit très élevé pour un organe de cette taille.',
      'Sa sténose active le système rénine-angiotensine et cause une hypertension.',
    ],
    { miroir: true, ficheLiee: 'physio-filtration-glomerulaire' },
  ),
  vaisseau(
    'vx-iliaque-commune',
    'Artère iliaque commune',
    'vasculaire',
    'pelvis',
    ARTERE,
    [
      [-0.004, R.l5 + 0.01, -0.03],
      [0.028, R.sacrumHaut, -0.02],
      [0.044, R.sacrumBas + 0.012, -0.008],
    ],
    0.0075,
    'Branche de bifurcation terminale de l’aorte abdominale. Elle se divise à son tour en artères iliaques interne et externe.',
    ['L’artère iliaque interne vascularise le pelvis, l’externe devient artère fémorale.'],
    { miroir: true, ficheLiee: 'anat-pelvis-perinee' },
  ),
  vaisseau(
    'vx-femorale',
    'Artère fémorale',
    'vasculaire',
    'membre-inferieur',
    ARTERE,
    [
      [0.046, R.sacrumBas, 0.002],
      [X.hanche - 0.002, R.hanche - 0.01, 0.028],
      [X.genou + 0.004, R.genou + 0.09, 0.008],
      [X.genou + 0.002, R.genou + 0.02, -0.022],
    ],
    0.0058,
    'Principale artère du membre inférieur, elle fait suite à l’iliaque externe sous le ligament inguinal et traverse le triangle fémoral puis le canal des adducteurs.',
    [
      'Son pouls se palpe au milieu du pli inguinal : c’est la voie d’abord des cathétérismes artériels.',
      'Elle devient artère poplitée en franchissant l’anneau du grand adducteur.',
    ],
    { miroir: true, ficheLiee: 'anat-hanche-cuisse' },
  ),
  vaisseau(
    'vx-tibiale-posterieure',
    'Artère tibiale postérieure',
    'vasculaire',
    'membre-inferieur',
    ARTERE,
    [
      [X.genou + 0.002, R.genou - 0.02, -0.024],
      [X.cheville + 0.004, R.cheville + 0.1, -0.02],
      [X.cheville - 0.008, R.cheville + 0.004, -0.008],
    ],
    0.0032,
    'Branche de division de l’artère poplitée, elle descend dans la loge postérieure profonde et contourne la malléole médiale.',
    [
      'Son pouls se recherche en arrière de la malléole médiale dans l’examen artériel des membres inférieurs.',
    ],
    { miroir: true, detail: true, ficheLiee: 'anat-jambe-pied' },
  ),
  vaisseau(
    'vx-artere-pulmonaire',
    'Tronc pulmonaire et artères pulmonaires',
    'vasculaire',
    'thorax',
    ARTERE_PULM,
    [
      [-0.026, R.angleSternal - 0.03, 0.05],
      [-0.016, R.angleSternal - 0.004, 0.032],
      [0.034, R.angleSternal - 0.02, 0.012],
    ],
    0.009,
    'Né du ventricule droit, le tronc pulmonaire se divise en artères pulmonaires droite et gauche. Ce sont les seules artères transportant du sang pauvre en oxygène.',
    [
      'L’embolie pulmonaire correspond à leur obstruction par un thrombus, le plus souvent d’origine veineuse profonde.',
      'La pression dans la circulation pulmonaire est très inférieure à celle de la circulation systémique.',
    ],
    { miroir: true, ficheLiee: 'physio-circulation' },
  ),
  vaisseau(
    'vx-coronaires',
    'Artères coronaires',
    'vasculaire',
    'thorax',
    ARTERE,
    [
      [-0.03, R.angleSternal - 0.026, 0.066],
      [-0.048, R.angleSternal - 0.045, 0.05],
      [-0.038, R.angleSternal - 0.07, 0.04],
    ],
    0.0026,
    'Premières branches de l’aorte, nées juste au-dessus des valves aortiques. Elles vascularisent le myocarde, essentiellement pendant la diastole.',
    [
      'Leur occlusion provoque l’infarctus du myocarde.',
      'La coronaire gauche donne l’interventriculaire antérieure et la circonflexe.',
    ],
    { miroir: true, ficheLiee: 'physio-physiologie-cardiaque' },
  ),
];

/* -------------------------------------------------------------------------- */
/*  Veines                                                                     */
/* -------------------------------------------------------------------------- */

const veines: PieceAnatomique[] = [
  vaisseau(
    'vx-veine-cave-superieure',
    'Veine cave supérieure',
    'vasculaire',
    'thorax',
    VEINE,
    [
      [0.026, R.fourchetteSternale + 0.005, 0.03],
      [0.022, R.angleSternal + 0.012, 0.038],
      [0.012, R.angleSternal - 0.018, 0.046],
    ],
    0.009,
    'Tronc veineux né de la réunion des deux veines brachiocéphaliques. Elle draine la tête, le cou, les membres supérieurs et la paroi thoracique vers l’oreillette droite.',
    [
      'Son obstruction donne un syndrome cave supérieur avec œdème en pèlerine.',
      'Elle est dépourvue de valvules.',
    ],
    { ficheLiee: 'physio-circulation' },
  ),
  vaisseau(
    'vx-veine-cave-inferieure',
    'Veine cave inférieure',
    'vasculaire',
    'abdomen',
    VEINE,
    [
      [0.014, R.angleSternal - 0.035, 0.044],
      [0.02, R.xiphoide - 0.01, 0.006],
      [0.02, R.l1, -0.024],
      [0.018, R.l5, -0.026],
      [0.03, R.sacrumHaut - 0.02, -0.018],
    ],
    0.0105,
    'Plus grosse veine de l’organisme, née de la réunion des veines iliaques communes. Elle draine tout le territoire sous-diaphragmatique vers l’oreillette droite.',
    [
      'Elle traverse le diaphragme en regard de T8.',
      'Elle est située à droite du rachis et de l’aorte.',
    ],
    { ficheLiee: 'physio-circulation' },
  ),
  vaisseau(
    'vx-jugulaire-interne',
    'Veine jugulaire interne',
    'vasculaire',
    'cou',
    VEINE,
    [
      [0.03, R.baseCrane - 0.01, 0.012],
      [0.032, R.fourchetteSternale + 0.05, 0.022],
      [0.024, R.fourchetteSternale + 0.006, 0.026],
    ],
    0.0055,
    'Principale veine de drainage de l’encéphale, elle descend dans le paquet vasculonerveux du cou, latéralement à la carotide commune.',
    [
      'La turgescence jugulaire témoigne d’une élévation de la pression veineuse centrale.',
      'C’est une voie d’abord privilégiée pour les cathéters veineux centraux.',
    ],
    { miroir: true, ficheLiee: 'anat-cou' },
  ),
  vaisseau(
    'vx-veine-porte',
    'Veine porte hépatique',
    'vasculaire',
    'abdomen',
    '#4a6fa5',
    [
      [-0.02, R.l1 + 0.01, -0.012],
      [0.01, R.l1 + 0.03, 0.004],
      [0.034, R.xiphoide - 0.058, 0.016],
    ],
    0.0075,
    'Veine née de la confluence des veines mésentérique supérieure et splénique. Elle amène au foie le sang riche en nutriments du tube digestif.',
    [
      'Elle constitue un système porte : elle relie deux réseaux capillaires.',
      'L’hypertension portale ouvre des anastomoses porto-caves, notamment œsophagiennes.',
    ],
    { ficheLiee: 'physio-physiologie-digestive' },
  ),
  vaisseau(
    'vx-veine-pulmonaire',
    'Veines pulmonaires',
    'vasculaire',
    'thorax',
    VEINE_PULM,
    [
      [0.055, R.angleSternal - 0.04, 0.008],
      [0.02, R.angleSternal - 0.038, 0.03],
      [-0.006, R.angleSternal - 0.036, 0.04],
    ],
    0.006,
    'Quatre veines ramenant à l’oreillette gauche le sang oxygéné par les poumons. Ce sont les seules veines transportant du sang riche en oxygène.',
    ['Elles ne possèdent pas de valvules et s’abouchent directement dans l’oreillette gauche.'],
    { miroir: true, ficheLiee: 'physio-circulation' },
  ),
  vaisseau(
    'vx-femorale-veine',
    'Veine fémorale',
    'vasculaire',
    'membre-inferieur',
    VEINE,
    [
      [0.038, R.sacrumBas + 0.004, 0.004],
      [X.hanche - 0.012, R.hanche - 0.012, 0.03],
      [X.genou - 0.004, R.genou + 0.09, 0.006],
      [X.genou - 0.004, R.genou + 0.016, -0.026],
    ],
    0.0062,
    'Veine profonde principale du membre inférieur, satellite de l’artère fémorale dans le triangle fémoral.',
    [
      'Elle est un siège classique de thrombose veineuse profonde.',
      'Dans le triangle fémoral, elle est située médialement par rapport à l’artère.',
    ],
    { miroir: true, ficheLiee: 'anat-hanche-cuisse' },
  ),
  vaisseau(
    'vx-grande-saphene',
    'Grande veine saphène',
    'vasculaire',
    'membre-inferieur',
    '#5b8ac4',
    [
      [X.hanche - 0.014, R.hanche - 0.02, 0.034],
      [X.genou - 0.026, R.genou + 0.04, 0.016],
      [X.cheville - 0.016, R.cheville + 0.08, 0.012],
      [X.cheville - 0.012, R.cheville + 0.006, 0.014],
    ],
    0.0035,
    'Plus longue veine du corps, superficielle, montant du bord médial du pied jusqu’à la crosse saphéno-fémorale, au pli inguinal.',
    [
      'Son incontinence valvulaire est à l’origine des varices des membres inférieurs.',
      'Elle est utilisée comme greffon dans les pontages coronariens.',
    ],
    { miroir: true, detail: true, ficheLiee: 'anat-jambe-pied' },
  ),
];

/* -------------------------------------------------------------------------- */
/*  Nerfs                                                                      */
/* -------------------------------------------------------------------------- */

const nerfs: PieceAnatomique[] = [
  vaisseau(
    'nf-phrenique',
    'Nerf phrénique',
    'nerveux',
    'thorax',
    NERF,
    [
      [0.03, R.c7 + 0.03, 0.006],
      [0.028, R.fourchetteSternale, 0.018],
      [0.03, R.angleSternal - 0.03, 0.03],
      [0.05, R.xiphoide - 0.012, 0.02],
    ],
    0.0026,
    'Nerf moteur du diaphragme, né des racines C3, C4 et C5. Il descend dans le cou puis le médiastin à la face latérale du péricarde.',
    [
      'Sa lésion entraîne une paralysie de l’hémidiaphragme correspondant.',
      'La formule mnémotechnique C3, C4, C5 maintient le diaphragme en vie.',
    ],
    { miroir: true, ficheLiee: 'anat-thorax' },
  ),
  vaisseau(
    'nf-vague',
    'Nerf vague',
    'nerveux',
    'thorax',
    NERF,
    [
      [0.022, R.baseCrane - 0.008, 0.004],
      [0.028, R.fourchetteSternale + 0.02, 0.012],
      [0.012, R.angleSternal - 0.02, 0.0],
      [-0.004, R.xiphoide + 0.01, -0.004],
      [-0.01, R.l1 + 0.03, -0.006],
    ],
    0.0026,
    'Dixième nerf crânien, principal nerf parasympathique. Il innerve le cœur, les bronches et la plus grande partie du tube digestif jusqu’à l’angle colique gauche.',
    [
      'Sa stimulation ralentit le cœur et augmente la motricité digestive.',
      'Le nerf laryngé récurrent en est une branche, à trajet ascendant.',
    ],
    { miroir: true, ficheLiee: 'physio-neurophysiologie' },
  ),
  vaisseau(
    'nf-plexus-brachial',
    'Plexus brachial',
    'nerveux',
    'membre-superieur',
    NERF,
    [
      [0.02, R.c7 + 0.02, -0.022],
      [0.058, R.c7 - 0.006, 0.0],
      [0.1, R.acromion - 0.02, 0.008],
      [X.epaule - 0.004, R.epauleCentre - 0.004, 0.0],
    ],
    0.0042,
    'Réseau nerveux issu des racines C5 à T1, destiné au membre supérieur. Il s’organise en troncs, divisions, faisceaux puis nerfs terminaux.',
    [
      'Ses cinq nerfs terminaux sont le musculocutané, l’axillaire, le radial, le médian et l’ulnaire.',
      'Il traverse le défilé interscalénique puis passe sous la clavicule.',
    ],
    { miroir: true, ficheLiee: 'anat-epaule-bras' },
  ),
  vaisseau(
    'nf-median',
    'Nerf médian',
    'nerveux',
    'membre-superieur',
    NERF,
    [
      [X.epaule - 0.006, R.epauleCentre - 0.012, 0.004],
      [X.brasHaut + 0.008, R.coude + 0.08, 0.008],
      [X.coude - 0.014, R.coude + 0.005, 0.012],
      [X.poignet - 0.004, R.poignet + 0.03, 0.016],
      [X.main - 0.004, R.poignet - 0.026, 0.016],
    ],
    0.0026,
    'Nerf mixte du membre supérieur, il traverse le canal carpien pour innerver la plupart des fléchisseurs et la peau des trois premiers doigts et demi.',
    [
      'Sa compression dans le canal carpien est le syndrome canalaire le plus fréquent.',
      'Sa lésion haute donne la main du prédicateur.',
    ],
    { miroir: true, ficheLiee: 'anat-avant-bras-main' },
  ),
  vaisseau(
    'nf-ulnaire',
    'Nerf ulnaire',
    'nerveux',
    'membre-superieur',
    NERF,
    [
      [X.epaule - 0.008, R.epauleCentre - 0.016, -0.004],
      [X.brasHaut + 0.004, R.coude + 0.07, -0.004],
      [X.coude - 0.016, R.coude + 0.008, -0.012],
      [X.poignet - 0.022, R.poignet + 0.03, 0.004],
      [X.main - 0.018, R.poignet - 0.028, 0.008],
    ],
    0.0024,
    'Nerf mixte issu du faisceau médial du plexus brachial. Il contourne l’épicondyle médial de l’humérus dans un tunnel ostéofibreux superficiel.',
    [
      'Sa compression au coude donne des paresthésies des quatrième et cinquième doigts.',
      'Sa lésion provoque une griffe ulnaire.',
    ],
    { miroir: true, detail: true, ficheLiee: 'anat-avant-bras-main' },
  ),
  vaisseau(
    'nf-radial',
    'Nerf radial',
    'nerveux',
    'membre-superieur',
    NERF,
    [
      [X.epaule - 0.002, R.epauleCentre - 0.02, -0.01],
      [X.brasHaut + 0.014, R.coude + 0.065, -0.014],
      [X.coude + 0.012, R.coude + 0.012, 0.004],
      [X.poignet + 0.008, R.poignet + 0.04, -0.008],
    ],
    0.0026,
    'Nerf du faisceau postérieur du plexus brachial. Il chemine dans la gouttière radiale de l’humérus et innerve tous les extenseurs du membre supérieur.',
    [
      'Sa lésion provoque une main tombante, par paralysie des extenseurs du poignet.',
      'Il est exposé lors des fractures de la diaphyse humérale.',
    ],
    { miroir: true, detail: true, ficheLiee: 'anat-epaule-bras' },
  ),
  vaisseau(
    'nf-sciatique',
    'Nerf sciatique',
    'nerveux',
    'membre-inferieur',
    NERF,
    [
      [0.03, R.sacrumBas + 0.02, -0.052],
      [X.hanche + 0.018, R.hanche - 0.042, -0.05],
      [X.genou + 0.004, R.genou + 0.11, -0.036],
      [X.genou + 0.004, R.genou + 0.026, -0.03],
    ],
    0.0052,
    'Plus volumineux nerf de l’organisme, issu du plexus sacré. Il sort du bassin par la grande ouverture ischiatique et se divise au-dessus du creux poplité.',
    [
      'Ses deux branches terminales sont le nerf tibial et le nerf fibulaire commun.',
      'La sciatique par hernie discale touche le plus souvent les racines L5 ou S1.',
      'L’injection intramusculaire doit éviter le quadrant inféro-médial de la fesse.',
    ],
    { miroir: true, ficheLiee: 'anat-hanche-cuisse' },
  ),
  vaisseau(
    'nf-femoral',
    'Nerf fémoral',
    'nerveux',
    'membre-inferieur',
    NERF,
    [
      [0.03, R.l5, -0.02],
      [X.hanche + 0.006, R.hanche + 0.008, 0.016],
      [X.hanche + 0.006, R.hanche - 0.05, 0.03],
    ],
    0.0036,
    'Principal nerf du plexus lombaire, issu des racines L2 à L4. Il innerve le quadriceps et la peau de la face antérieure de la cuisse.',
    ['Le réflexe rotulien explore essentiellement la racine L4, par son intermédiaire.'],
    { miroir: true, detail: true, ficheLiee: 'anat-hanche-cuisse' },
  ),
  vaisseau(
    'nf-fibulaire-commun',
    'Nerf fibulaire commun',
    'nerveux',
    'membre-inferieur',
    NERF,
    [
      [X.genou + 0.006, R.genou + 0.03, -0.028],
      [X.genou + 0.03, R.genou - 0.026, -0.006],
      [X.cheville + 0.022, R.cheville + 0.07, 0.008],
    ],
    0.0028,
    'Branche de division latérale du nerf sciatique. Il contourne le col de la fibula, où il est très superficiel, puis se divise en nerfs fibulaires superficiel et profond.',
    [
      'Sa compression au col de la fibula provoque un steppage par paralysie des releveurs du pied.',
      'C’est le nerf le plus vulnérable du membre inférieur.',
    ],
    { miroir: true, detail: true, ficheLiee: 'anat-jambe-pied' },
  ),
  vaisseau(
    'nf-intercostal',
    'Nerfs intercostaux',
    'nerveux',
    'thorax',
    NERF,
    [
      [0.018, R.t1 - 0.09, -0.052],
      [0.09, R.t1 - 0.115, 0.002],
      [0.05, R.t1 - 0.14, 0.062],
    ],
    0.0022,
    'Branches antérieures des nerfs spinaux thoraciques. Ils cheminent dans la gouttière costale avec l’artère et la veine intercostales.',
    [
      'Ordre du paquet de haut en bas : veine, artère, nerf.',
      'Ils assurent l’innervation segmentaire de la paroi thoracique et abdominale.',
    ],
    { miroir: true, detail: true, ficheLiee: 'anat-thorax' },
  ),
];

/* -------------------------------------------------------------------------- */
/*  Système lymphatique                                                        */
/* -------------------------------------------------------------------------- */

function ganglion(
  id: string,
  nom: string,
  region: PieceAnatomique['region'],
  centre: Point3,
  description: string,
  reperes: string[],
  ficheLiee: string,
): PieceAnatomique {
  return {
    id,
    nom,
    systeme: 'lymphatique',
    region,
    couleur: LYMPHE,
    miroir: true,
    description,
    reperes,
    ficheLiee,
    geometrie: {
      forme: 'groupe',
      elements: [
        { forme: 'ellipsoide', centre, rayons: [0.008, 0.011, 0.008] },
        { forme: 'ellipsoide', centre: [centre[0] + 0.016, centre[1] - 0.018, centre[2] + 0.006], rayons: [0.007, 0.009, 0.007] },
        { forme: 'ellipsoide', centre: [centre[0] - 0.012, centre[1] - 0.026, centre[2] - 0.004], rayons: [0.006, 0.008, 0.006] },
      ],
    },
  };
}

const lymphatique: PieceAnatomique[] = [
  vaisseau(
    'ly-canal-thoracique',
    'Conduit thoracique',
    'lymphatique',
    'thorax',
    LYMPHE,
    [
      [0.004, R.l1 + 0.03, -0.042],
      [0.0, R.xiphoide, -0.046],
      [-0.006, R.angleSternal, -0.036],
      [-0.02, R.fourchetteSternale + 0.012, -0.006],
    ],
    0.0032,
    'Plus grand vaisseau lymphatique du corps. Né de la citerne du chyle, il draine les trois quarts de la lymphe et se jette dans l’angle veineux jugulo-subclavier gauche.',
    [
      'Il transporte aussi les chylomicrons issus de l’absorption intestinale des lipides.',
      'Le quart supérieur droit du corps est drainé par le conduit lymphatique droit.',
    ],
    { ficheLiee: 'ue5-organisation-systeme-immunitaire' },
  ),
  ganglion(
    'ly-ganglions-cervicaux',
    'Ganglions lymphatiques cervicaux',
    'cou',
    [0.042, R.fourchetteSternale + 0.06, 0.014],
    'Chaînes ganglionnaires du cou, principalement jugulaires, qui drainent la tête, la face et les voies aérodigestives supérieures.',
    [
      'Leur palpation est systématique devant une infection ORL ou une suspicion de cancer.',
      'Une adénopathie sus-claviculaire gauche doit faire rechercher un cancer digestif.',
    ],
    'ue5-organisation-systeme-immunitaire',
  ),
  ganglion(
    'ly-ganglions-axillaires',
    'Ganglions lymphatiques axillaires',
    'thorax',
    [X.thorax + 0.026, R.acromion - 0.06, 0.006],
    'Groupe ganglionnaire du creux axillaire, qui draine le membre supérieur, la paroi thoracique et la plus grande partie du sein.',
    [
      'Leur exploration est essentielle dans le bilan d’extension du cancer du sein.',
      'La technique du ganglion sentinelle limite le curage axillaire.',
    ],
    'ue5-organisation-systeme-immunitaire',
  ),
  ganglion(
    'ly-ganglions-inguinaux',
    'Ganglions lymphatiques inguinaux',
    'pelvis',
    [0.05, R.pubis + 0.002, 0.038],
    'Ganglions superficiels et profonds du pli de l’aine, qui drainent le membre inférieur, le périnée et la paroi abdominale sous-ombilicale.',
    ['De petits ganglions inguinaux palpables sont fréquents et souvent sans valeur pathologique.'],
    'ue5-organisation-systeme-immunitaire',
  ),
  {
    id: 'ly-thymus',
    nom: 'Thymus',
    nomLatin: 'Thymus',
    systeme: 'lymphatique',
    region: 'thorax',
    couleur: '#7fbfa4',
    description:
      'Organe lymphoïde primaire du médiastin antérieur, siège de la maturation des lymphocytes T. Volumineux chez l’enfant, il involue après la puberté.',
    reperes: [
      'C’est le lieu des sélections thymiques positive et négative.',
      'Il est remplacé progressivement par du tissu adipeux chez l’adulte.',
    ],
    ficheLiee: 'ue5-lymphocytes-t',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0, R.fourchetteSternale - 0.03, 0.058],
      rayons: [0.026, 0.03, 0.014],
    },
  },
  {
    id: 'ly-amygdales',
    nom: 'Amygdales palatines',
    nomLatin: 'Tonsillae palatinae',
    systeme: 'lymphatique',
    region: 'tete',
    couleur: '#7fbfa4',
    miroir: true,
    detail: true,
    description:
      'Formations lymphoïdes de l’oropharynx appartenant à l’anneau lymphoïde de Waldeyer, première ligne de défense des voies aérodigestives.',
    reperes: ['Leur inflammation réalise l’angine, très fréquente chez l’enfant et l’adulte jeune.'],
    ficheLiee: 'ue5-organisation-systeme-immunitaire',
    geometrie: {
      forme: 'ellipsoide',
      centre: [0.016, R.menton + 0.012, 0.01],
      rayons: [0.008, 0.011, 0.007],
    },
  },
];

/* -------------------------------------------------------------------------- */
/*  Enveloppe cutanée                                                          */
/* -------------------------------------------------------------------------- */

export const PEAU: PieceAnatomique[] = [
  {
    id: 'peau-enveloppe',
    nom: 'Enveloppe cutanée',
    nomLatin: 'Integumentum commune',
    systeme: 'peau',
    region: 'thorax',
    couleur: '#e8c4ae',
    opacite: 0.22,
    description:
      'La peau est le plus grand organe du corps : environ deux mètres carrés chez l’adulte. Elle comprend l’épiderme, le derme et l’hypoderme, et assure protection, thermorégulation, sensibilité et synthèse de la vitamine D.',
    reperes: [
      'L’épiderme est un épithélium stratifié pavimenteux kératinisé, sans vaisseaux.',
      'Le derme contient les vaisseaux, les nerfs et les annexes cutanées.',
      'La barrière cutanée est un élément majeur de l’immunité innée.',
    ],
    ficheLiee: 'histo-epitheliums-revetement',
    geometrie: {
      forme: 'groupe',
      elements: [
        // Tête et cou
        { forme: 'ellipsoide', centre: [0, R.vertex - 0.098, -0.008], rayons: [0.083, 0.102, 0.094], segments: 30 },
        { forme: 'capsule', debut: [0, R.c7 - 0.01, -0.012], fin: [0, R.menton + 0.005, -0.008], rayon: 0.056 },
        // Tronc
        {
          forme: 'revolution',
          profil: [
            [0.088, 0.16],
            [0.152, 0.11],
            [0.156, 0.03],
            [0.138, -0.04],
            [0.118, -0.12],
            [0.126, -0.2],
            [0.148, -0.26],
            [0.142, -0.3],
          ],
          centre: [0, R.angleSternal + 0.06, 0],
          segments: 34,
        },
        // Bras
        { forme: 'capsule', debut: [X.epaule, R.epauleCentre + 0.01, 0], fin: [X.coude, R.coude, 0], rayon: 0.046 },
        { forme: 'capsule', debut: [-X.epaule, R.epauleCentre + 0.01, 0], fin: [-X.coude, R.coude, 0], rayon: 0.046 },
        { forme: 'capsule', debut: [X.coude, R.coude, 0], fin: [X.poignet, R.poignet, 0.004], rayon: 0.036 },
        { forme: 'capsule', debut: [-X.coude, R.coude, 0], fin: [-X.poignet, R.poignet, 0.004], rayon: 0.036 },
        { forme: 'ellipsoide', centre: [X.main, R.poignet - 0.06, 0.01], rayons: [0.042, 0.062, 0.02] },
        { forme: 'ellipsoide', centre: [-X.main, R.poignet - 0.06, 0.01], rayons: [0.042, 0.062, 0.02] },
        // Cuisses et jambes
        { forme: 'capsule', debut: [X.hanche + 0.01, R.hanche, 0.006], fin: [X.genou, R.genou, 0.002], rayon: 0.072 },
        { forme: 'capsule', debut: [-X.hanche - 0.01, R.hanche, 0.006], fin: [-X.genou, R.genou, 0.002], rayon: 0.072 },
        { forme: 'capsule', debut: [X.genou, R.genou, 0.002], fin: [X.cheville, R.cheville + 0.01, 0], rayon: 0.052 },
        { forme: 'capsule', debut: [-X.genou, R.genou, 0.002], fin: [-X.cheville, R.cheville + 0.01, 0], rayon: 0.052 },
        { forme: 'boite', centre: [X.pied, 0.032, 0.03], dimensions: [0.088, 0.064, 0.24], arrondi: 0.7 },
        { forme: 'boite', centre: [-X.pied, 0.032, 0.03], dimensions: [0.088, 0.064, 0.24], arrondi: 0.7 },
      ],
    },
  },
];

export const VAISSEAUX: PieceAnatomique[] = [...arteres, ...veines];
export const NERFS: PieceAnatomique[] = nerfs;
export const LYMPHATIQUE: PieceAnatomique[] = lymphatique;
