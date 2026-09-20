import type { Fiche } from '../../types';

export const fichePharmacodynamie: Fiche = {
  id: 'ue6-pharmacodynamie',
  ue: 'ue6',
  titre: 'Pharmacodynamie et cibles moléculaires',
  sousTitre: 'Récepteurs, canaux, enzymes, transporteurs, affinité, efficacité, agonistes et antagonistes',
  chapitre: 'Pharmacodynamie',
  ordre: 7,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'récepteur',
    'canal ionique',
    'enzyme cible',
    'transporteur',
    'affinité',
    'efficacité',
    'agoniste',
    'antagoniste',
    'agoniste partiel',
  ],
  objectifs: [
    'Citer les quatre grandes familles de cibles moléculaires des médicaments.',
    'Distinguer récepteurs membranaires et récepteurs nucléaires.',
    'Différencier affinité et efficacité.',
    'Distinguer agoniste, antagoniste compétitif et antagoniste non compétitif.',
    'Caractériser l’agoniste partiel et l’agoniste inverse.',
  ],
  sections: [
    {
      id: 'cibles-moleculaires',
      titre: 'Les quatre grandes familles de cibles moléculaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La pharmacodynamie étudie les mécanismes d’action des médicaments sur l’organisme, en particulier leur interaction avec des cibles moléculaires spécifiques. La grande majorité des médicaments agissent en se liant à l’une de quatre grandes familles de cibles protéiques.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre familles de cibles moléculaires',
          colonnes: ['Famille', 'Principe d’action', 'Exemple'],
          lignes: [
            ['Récepteurs', 'Protéines spécialisées transduisant un signal après liaison d’un ligand', 'Récepteurs bêta-adrénergiques, récepteurs aux opioïdes'],
            ['Canaux ioniques', 'Protéines formant un pore régulant le passage d’ions à travers la membrane', 'Canaux sodiques voltage-dépendants, canaux calciques'],
            ['Enzymes', 'Protéines catalysant une réaction biochimique, pouvant être inhibées ou activées', 'Enzyme de conversion de l’angiotensine, cyclo-oxygénases'],
            ['Transporteurs', 'Protéines assurant le transport transmembranaire de molécules endogènes', 'Transporteur de la recapture de la sérotonine, pompe à protons gastrique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Sélectivité relative des cibles',
          texte:
            "La plupart des médicaments présentent une sélectivité relative, et non absolue, pour leur cible principale : à forte concentration, ils peuvent interagir avec des cibles secondaires, ce qui explique en partie l’apparition d’effets indésirables dose-dépendants.",
        },
      ],
    },
    {
      id: 'recepteurs',
      titre: 'Récepteurs membranaires et nucléaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les récepteurs se répartissent en deux grandes catégories selon leur localisation cellulaire : les récepteurs membranaires, situés à la surface de la cellule, et les récepteurs nucléaires ou intracellulaires, situés dans le cytoplasme ou le noyau.",
        },
        {
          type: 'tableau',
          titre: 'Les grandes classes de récepteurs membranaires',
          colonnes: ['Classe', 'Mécanisme de transduction', 'Délai d’action typique'],
          lignes: [
            ['Récepteurs couplés aux protéines G', 'Activation d’une protéine G, modulant un second messager intracellulaire', 'Secondes à minutes'],
            ['Récepteurs canaux ionotropes', 'Ouverture directe d’un canal ionique intégré au récepteur', 'Millisecondes'],
            ['Récepteurs à activité enzymatique intrinsèque', 'Activation d’une activité catalytique propre, souvent tyrosine kinase', 'Minutes à heures'],
          ],
        },
        {
          type: 'definition',
          terme: 'Récepteur nucléaire',
          definition:
            "Récepteur intracellulaire, cytoplasmique ou nucléaire, activé par un ligand liposoluble capable de traverser la membrane plasmique, qui module directement la transcription de gènes cibles après translocation dans le noyau et fixation à l’ADN.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Délai d’action et type de récepteur',
          texte:
            "Les récepteurs nucléaires, en modulant l’expression génique, ont un délai d’action beaucoup plus long, de l’ordre de l’heure à plusieurs jours, que les récepteurs membranaires, dont l’effet peut être quasi immédiat, notamment pour les récepteurs canaux.",
        },
      ],
    },
    {
      id: 'canaux-enzymes-transporteurs',
      titre: 'Canaux ioniques, enzymes et transporteurs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au-delà des récepteurs, les canaux ioniques, les enzymes et les transporteurs constituent des cibles thérapeutiques majeures, exploitées par de nombreuses classes pharmacologiques d’usage courant.",
        },
        {
          type: 'liste',
          items: [
            'Les canaux sodiques voltage-dépendants sont la cible des anesthésiques locaux, qui bloquent la propagation du potentiel d’action.',
            'Les enzymes peuvent être inhibées de façon réversible ou irréversible par un médicament, modifiant la production ou la dégradation d’un substrat endogène.',
            'Les transporteurs assurent le déplacement actif ou facilité de substances endogènes à travers les membranes, et peuvent être bloqués pour moduler leur concentration locale.',
          ],
        },
        {
          type: 'tableau',
          titre: 'Exemples de médicaments ciblant chaque famille',
          colonnes: ['Cible', 'Médicament exemple (DCI)', 'Effet'],
          lignes: [
            ['Canal calcique voltage-dépendant', 'Amlodipine', 'Vasodilatation par blocage de l’entrée du calcium dans le muscle lisse vasculaire'],
            ['Enzyme de conversion de l’angiotensine', 'Énalapril', 'Réduction de la formation d’angiotensine II, effet antihypertenseur'],
            ['Transporteur de la recapture de la sérotonine', 'Sertraline', 'Augmentation de la disponibilité synaptique de sérotonine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Inhibition réversible et irréversible',
          texte:
            "Une inhibition enzymatique réversible cesse à l’élimination du médicament, tandis qu’une inhibition irréversible, par liaison covalente, nécessite la synthèse de nouvelles molécules d’enzyme pour que l’activité soit restaurée, ce qui peut prolonger l’effet bien au-delà de la présence du médicament dans l’organisme.",
        },
      ],
    },
    {
      id: 'affinite-efficacite',
      titre: 'Affinité et efficacité',
      blocs: [
        {
          type: 'definition',
          terme: 'Affinité',
          definition:
            "Capacité d’une molécule à se lier à son récepteur, indépendamment de la conséquence fonctionnelle de cette liaison. Elle est classiquement quantifiée par la constante de dissociation, notée Kd : plus le Kd est faible, plus l’affinité est élevée.",
        },
        {
          type: 'definition',
          terme: 'Efficacité (activité intrinsèque)',
          definition:
            "Capacité d’une molécule, une fois liée à son récepteur, à déclencher une réponse biologique. Elle distingue les agonistes, capables d’activer le récepteur, des antagonistes, dépourvus de cette capacité malgré leur liaison au récepteur.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Ne pas confondre affinité et efficacité',
          texte:
            "Une molécule peut avoir une forte affinité pour un récepteur sans posséder d’efficacité, c’est le cas d’un antagoniste pur. Inversement, l’affinité ne préjuge pas de l’intensité de l’effet biologique obtenu, qui dépend de l’efficacité propre de la molécule.",
        },
        {
          type: 'formule',
          expression: 'Occupation du récepteur = [Ligand] / ([Ligand] + Kd)',
          legende:
            "Relation entre la concentration de ligand, l’occupation du récepteur et la constante de dissociation Kd. À une concentration égale au Kd, 50 % des récepteurs sont occupés.",
        },
      ],
    },
    {
      id: 'agonistes-antagonistes',
      titre: 'Agonistes et antagonistes',
      blocs: [
        {
          type: 'definition',
          terme: 'Agoniste',
          definition:
            "Molécule dotée à la fois d’une affinité et d’une efficacité pour son récepteur : elle se lie au récepteur et déclenche la réponse biologique maximale que ce récepteur peut produire, on parle d’agoniste plein ou total.",
        },
        {
          type: 'definition',
          terme: 'Antagoniste compétitif',
          definition:
            "Molécule dotée d’une affinité pour le récepteur mais dépourvue d’efficacité, qui entre en compétition réversible avec l’agoniste pour le même site de liaison. Son effet peut être surmonté par une augmentation de la concentration d’agoniste, ce qui déplace la courbe dose-réponse de l’agoniste vers la droite sans en modifier l’effet maximal.",
        },
        {
          type: 'definition',
          terme: 'Antagoniste non compétitif',
          definition:
            "Molécule qui réduit ou abolit l’effet de l’agoniste par un mécanisme non surmontable par l’augmentation de la concentration d’agoniste, soit en se liant à un site différent du site actif (antagonisme allostérique), soit par une liaison irréversible au site actif lui-même.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison antagonisme compétitif et non compétitif',
          colonnes: ['Caractéristique', 'Antagonisme compétitif', 'Antagonisme non compétitif'],
          lignes: [
            ['Effet sur l’effet maximal (Emax) de l’agoniste', 'Inchangé, si la concentration d’agoniste est suffisamment augmentée', 'Diminué, ne peut être restauré par l’augmentation de la concentration d’agoniste'],
            ['Effet sur la concentration efficace 50 (CE50)', 'Augmentée (courbe dose-réponse déplacée vers la droite)', 'Peut être augmentée ou inchangée selon le mécanisme'],
            ['Réversibilité', 'Réversible par nature', 'Peut être réversible (allostérique) ou irréversible (liaison covalente)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Lecture de la courbe dose-réponse',
          texte:
            "Sur une courbe dose-réponse, un antagoniste compétitif déplace la courbe de l’agoniste parallèlement vers la droite, sans changer l’effet maximal atteint à forte concentration. Un antagoniste non compétitif abaisse l’effet maximal atteignable par l’agoniste, quelle que soit la concentration testée.",
        },
      ],
    },
    {
      id: 'agonistes-partiels-inverses',
      titre: 'Agonistes partiels et agonistes inverses',
      blocs: [
        {
          type: 'definition',
          terme: 'Agoniste partiel',
          definition:
            "Molécule dotée d’une affinité pour le récepteur et d’une efficacité intermédiaire, incapable de produire l’effet biologique maximal même en occupant la totalité des récepteurs disponibles, contrairement à un agoniste plein.",
        },
        {
          type: 'definition',
          terme: 'Agoniste inverse',
          definition:
            "Molécule se liant à un récepteur possédant une activité constitutive spontanée en l’absence de ligand, et qui réduit cette activité de base en dessous du niveau observé sans ligand, produisant ainsi un effet opposé à celui d’un agoniste classique.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Agoniste partiel en présence d’un agoniste plein',
          texte:
            "En présence d’un agoniste plein à forte concentration, un agoniste partiel peut se comporter comme un antagoniste relatif : en occupant une partie des récepteurs sans les activer au maximum, il diminue l’effet global par rapport à celui obtenu avec l’agoniste plein seul.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des différents ligands selon leur efficacité',
          colonnes: ['Type de ligand', 'Effet sur le récepteur'],
          lignes: [
            ['Agoniste plein', 'Active le récepteur au maximum de sa capacité'],
            ['Agoniste partiel', 'Active partiellement le récepteur, effet sous-maximal'],
            ['Antagoniste neutre', 'Occupe le récepteur sans modifier son activité de base'],
            ['Agoniste inverse', 'Réduit l’activité constitutive du récepteur en dessous de son niveau de base'],
          ],
        },
      ],
    },
  ],
  pointsCles: [
    "Les médicaments agissent principalement sur quatre familles de cibles : récepteurs, canaux ioniques, enzymes et transporteurs.",
    "Les récepteurs membranaires ont un délai d’action rapide, les récepteurs nucléaires un délai plus long lié à la modulation de la transcription.",
    "L’affinité mesure la capacité de liaison au récepteur, l’efficacité mesure la capacité à déclencher une réponse biologique.",
    "Un agoniste possède affinité et efficacité, un antagoniste possède l’affinité sans l’efficacité.",
    "L’antagonisme compétitif est surmontable par l’augmentation de la concentration d’agoniste, l’antagonisme non compétitif ne l’est pas.",
    "Un agoniste partiel ne peut jamais produire l’effet maximal, même en saturant tous les récepteurs.",
    "Un agoniste inverse réduit l’activité constitutive d’un récepteur en dessous de son niveau basal.",
  ],
  erreursFrequentes: [
    "Confondre affinité et efficacité, en croyant qu’une forte affinité implique nécessairement un effet biologique important.",
    "Croire qu’un antagoniste non compétitif peut toujours être surmonté par une augmentation de la dose d’agoniste.",
    "Penser qu’un agoniste partiel peut produire l’effet maximal à forte concentration, comme un agoniste plein.",
    "Oublier qu’un agoniste partiel peut réduire l’effet d’un agoniste plein lorsqu’ils sont administrés ensemble.",
    "Assimiler à tort tous les récepteurs à des récepteurs membranaires, en oubliant les récepteurs nucléaires.",
    "Confondre inhibition enzymatique réversible et irréversible dans l’analyse de la durée d’un effet pharmacologique.",
  ],
  mnemotechniques: [
    {
      moyen: 'RCET : Récepteurs, Canaux, Enzymes, Transporteurs',
      explication:
        'Les initiales des quatre grandes familles de cibles moléculaires des médicaments.',
    },
    {
      moyen: 'Affinité = Attirance, Efficacité = Effet',
      explication:
        'L’affinité décrit seulement l’attraction pour le récepteur, l’efficacité décrit la capacité à produire un effet biologique une fois lié.',
    },
    {
      moyen: 'Compétitif = Concentration peut Compenser',
      explication:
        'Un antagonisme compétitif peut être surmonté en augmentant la concentration d’agoniste, contrairement à l’antagonisme non compétitif.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-pharmacodynamie-fc-01',
      recto: 'Quelles sont les quatre grandes familles de cibles moléculaires des médicaments ?',
      verso: 'Les récepteurs, les canaux ioniques, les enzymes et les transporteurs.',
      type: 'classification',
      tags: ['cibles moléculaires'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-02',
      recto: 'Quel type de récepteur a un délai d’action très court, de l’ordre de la milliseconde ?',
      verso: 'Le récepteur canal ionotrope.',
      type: 'classification',
      tags: ['récepteurs'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-03',
      recto: 'Pourquoi les récepteurs nucléaires ont-ils un délai d’action long ?',
      verso: 'Parce qu’ils modulent directement la transcription de gènes cibles, un processus qui prend du temps.',
      type: 'mecanisme',
      tags: ['récepteurs nucléaires'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-04',
      recto: 'Définir l’affinité d’un médicament pour son récepteur.',
      verso: 'La capacité de la molécule à se lier au récepteur, indépendamment de l’effet biologique produit.',
      type: 'definition',
      tags: ['affinité'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-05',
      recto: 'Définir l’efficacité (activité intrinsèque) d’un médicament.',
      verso: 'La capacité, une fois lié au récepteur, à déclencher une réponse biologique.',
      type: 'definition',
      tags: ['efficacité'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-06',
      recto: 'Qu’est-ce qu’un antagoniste compétitif ?',
      verso: 'Une molécule ayant une affinité mais pas d’efficacité, en compétition réversible avec l’agoniste pour le même site, surmontable par l’augmentation de la concentration d’agoniste.',
      type: 'definition',
      tags: ['antagoniste compétitif'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-07',
      recto: 'Un antagonisme non compétitif peut-il être surmonté par l’augmentation de la dose d’agoniste ?',
      verso: 'Non, il diminue l’effet maximal de l’agoniste de façon non surmontable par une augmentation de dose.',
      type: 'mecanisme',
      tags: ['antagoniste non compétitif'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-08',
      recto: 'Qu’est-ce qu’un agoniste partiel ?',
      verso: 'Une molécule dotée d’une efficacité intermédiaire, incapable de produire l’effet maximal même en saturant les récepteurs.',
      type: 'definition',
      tags: ['agoniste partiel'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-09',
      recto: 'Qu’est-ce qu’un agoniste inverse ?',
      verso: 'Une molécule qui réduit l’activité constitutive d’un récepteur en dessous de son niveau basal en l’absence de ligand.',
      type: 'definition',
      tags: ['agoniste inverse'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-10',
      recto: 'Que se passe-t-il sur la courbe dose-réponse en cas d’antagonisme compétitif ?',
      verso: 'La courbe de l’agoniste est déplacée parallèlement vers la droite, sans changement de l’effet maximal.',
      type: 'mecanisme',
      tags: ['courbe dose-réponse'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-11',
      recto: 'Citer une enzyme cible d’un médicament antihypertenseur.',
      verso: 'L’enzyme de conversion de l’angiotensine, ciblée par les inhibiteurs comme l’énalapril.',
      type: 'clinique',
      tags: ['enzymes'],
    },
    {
      id: 'ue6-pharmacodynamie-fc-12',
      recto: 'Que signifie le Kd d’un récepteur ?',
      verso: 'La constante de dissociation : plus elle est faible, plus l’affinité du ligand pour le récepteur est élevée.',
      type: 'formule',
      tags: ['affinité'],
    },
  ],
  qcm: [
    {
      id: 'ue6-pharmacodynamie-qcm-01',
      enonce: 'Concernant les cibles moléculaires des médicaments, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les récepteurs, canaux ioniques, enzymes et transporteurs sont les quatre grandes familles de cibles.', vraie: true, justification: 'Ce sont effectivement les quatre grandes catégories de cibles moléculaires des médicaments.' },
        { lettre: 'B', texte: 'Tous les médicaments présentent une sélectivité absolue pour leur cible principale.', vraie: false, justification: 'La sélectivité est généralement relative, avec des interactions possibles sur des cibles secondaires à forte concentration.' },
        { lettre: 'C', texte: 'Les canaux sodiques voltage-dépendants sont la cible des anesthésiques locaux.', vraie: true, justification: 'Ces anesthésiques bloquent la propagation du potentiel d’action en agissant sur ces canaux.' },
        { lettre: 'D', texte: 'Un transporteur ne peut jamais être une cible pharmacologique.', vraie: false, justification: 'Les transporteurs, comme celui de la recapture de la sérotonine, sont au contraire des cibles thérapeutiques majeures.' },
        { lettre: 'E', texte: 'Les enzymes peuvent être inhibées de façon réversible ou irréversible par un médicament.', vraie: true, justification: 'Les deux types d’inhibition existent, avec des conséquences différentes sur la durée de l’effet.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue6-pharmacodynamie-qcm-02',
      enonce: 'Concernant les récepteurs membranaires et nucléaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les récepteurs couplés aux protéines G sont des récepteurs membranaires.', vraie: true, justification: 'Ils sont insérés dans la membrane plasmique et transduisent le signal via une protéine G.' },
        { lettre: 'B', texte: 'Les récepteurs canaux ionotropes ont un délai d’action de l’ordre de plusieurs heures.', vraie: false, justification: 'Leur délai d’action est très court, de l’ordre de la milliseconde, en raison de l’ouverture directe du canal.' },
        { lettre: 'C', texte: 'Les récepteurs nucléaires modulent directement la transcription de gènes cibles.', vraie: true, justification: 'C’est leur mécanisme d’action caractéristique, expliquant leur délai d’action prolongé.' },
        { lettre: 'D', texte: 'Un ligand de récepteur nucléaire doit être suffisamment liposoluble pour traverser la membrane plasmique.', vraie: true, justification: 'Le récepteur étant intracellulaire, le ligand doit pouvoir pénétrer dans la cellule.' },
        { lettre: 'E', texte: 'Les récepteurs à activité enzymatique intrinsèque agissent en quelques millisecondes.', vraie: false, justification: 'Leur délai d’action est plutôt de l’ordre de la minute à l’heure, plus lent que les récepteurs canaux.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-pharmacodynamie-qcm-03',
      enonce: 'Concernant l’affinité et l’efficacité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un antagoniste pur possède une affinité mais pas d’efficacité.', vraie: true, justification: 'Il se lie au récepteur (affinité) sans déclencher de réponse biologique (absence d’efficacité).' },
        { lettre: 'B', texte: 'Une forte affinité implique nécessairement une forte efficacité.', vraie: false, justification: 'Les deux notions sont indépendantes : un antagoniste peut avoir une forte affinité sans aucune efficacité.' },
        { lettre: 'C', texte: 'Le Kd est une mesure de l’affinité d’un ligand pour son récepteur.', vraie: true, justification: 'Plus le Kd est faible, plus l’affinité est élevée.' },
        { lettre: 'D', texte: 'À une concentration de ligand égale au Kd, tous les récepteurs sont occupés.', vraie: false, justification: 'À cette concentration, 50 % des récepteurs sont occupés, pas la totalité.' },
        { lettre: 'E', texte: 'L’efficacité distingue les agonistes des antagonistes.', vraie: true, justification: 'Seuls les agonistes possèdent une efficacité leur permettant d’activer le récepteur.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-pharmacodynamie-qcm-04',
      enonce: 'Concernant l’antagonisme compétitif et non compétitif, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’antagonisme compétitif déplace la courbe dose-réponse de l’agoniste vers la droite.', vraie: true, justification: 'Une concentration plus élevée d’agoniste est nécessaire pour obtenir le même effet.' },
        { lettre: 'B', texte: 'L’antagonisme compétitif diminue l’effet maximal atteignable par l’agoniste.', vraie: false, justification: 'L’effet maximal reste inchangé si la concentration d’agoniste est suffisamment augmentée.' },
        { lettre: 'C', texte: 'L’antagonisme non compétitif peut résulter d’une liaison irréversible au récepteur.', vraie: true, justification: 'C’est l’un des mécanismes possibles d’antagonisme non compétitif.' },
        { lettre: 'D', texte: 'L’antagonisme non compétitif est toujours surmontable par l’augmentation de la concentration d’agoniste.', vraie: false, justification: 'C’est justement la caractéristique inverse : il n’est pas surmontable par une simple augmentation de dose.' },
        { lettre: 'E', texte: 'Un antagoniste allostérique se lie à un site différent du site actif.', vraie: true, justification: 'C’est le principe de l’antagonisme non compétitif de type allostérique.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-pharmacodynamie-qcm-05',
      enonce: 'Concernant les agonistes partiels et les agonistes inverses, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un agoniste partiel peut produire l’effet maximal en saturant tous les récepteurs.', vraie: false, justification: 'Par définition, un agoniste partiel a une efficacité sous-maximale, même en occupant tous les récepteurs.' },
        { lettre: 'B', texte: 'Un agoniste inverse réduit l’activité constitutive d’un récepteur en dessous de son niveau basal.', vraie: true, justification: 'C’est la caractéristique qui le distingue d’un simple antagoniste neutre.' },
        { lettre: 'C', texte: 'Un agoniste partiel peut diminuer l’effet d’un agoniste plein administré simultanément.', vraie: true, justification: 'En occupant une partie des récepteurs sans les activer au maximum, il réduit l’effet global.' },
        { lettre: 'D', texte: 'Un antagoniste neutre modifie l’activité constitutive de base du récepteur.', vraie: false, justification: 'Un antagoniste neutre occupe le récepteur sans modifier son activité constitutive de base.' },
        { lettre: 'E', texte: 'Un agoniste inverse nécessite un récepteur possédant une activité constitutive spontanée.', vraie: true, justification: 'Sans activité constitutive de base, il n’y aurait rien à réduire en dessous du niveau basal.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 3,
    },
    {
      id: 'ue6-pharmacodynamie-qcm-06',
      enonce: 'Concernant les canaux ioniques, enzymes et transporteurs comme cibles, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’amlodipine agit en bloquant un canal calcique voltage-dépendant.', vraie: true, justification: 'C’est le mécanisme d’action de cette classe d’antihypertenseurs.' },
        { lettre: 'B', texte: 'Une inhibition enzymatique irréversible cesse dès l’élimination du médicament.', vraie: false, justification: 'Elle persiste jusqu’à la synthèse de nouvelles molécules d’enzyme, indépendamment de la présence résiduelle du médicament.' },
        { lettre: 'C', texte: 'La sertraline agit en inhibant un transporteur de recapture de la sérotonine.', vraie: true, justification: 'Elle augmente ainsi la disponibilité synaptique de la sérotonine.' },
        { lettre: 'D', texte: 'Une inhibition enzymatique réversible cesse à l’élimination du médicament.', vraie: true, justification: 'L’activité enzymatique est restaurée dès que le médicament n’occupe plus l’enzyme.' },
        { lettre: 'E', texte: 'Les transporteurs ne peuvent transporter que des médicaments, jamais des substances endogènes.', vraie: false, justification: 'Les transporteurs assurent physiologiquement le transport de substances endogènes, que les médicaments peuvent bloquer.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
