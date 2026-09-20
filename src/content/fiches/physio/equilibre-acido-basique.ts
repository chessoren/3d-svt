import type { Fiche } from '../../types';

export const ficheEquilibreAcidoBasique: Fiche = {
  id: 'physio-equilibre-acido-basique',
  ue: 'physio',
  titre: 'Équilibre acido-basique',
  sousTitre: 'Tampons, régulation respiratoire et rénale, troubles acido-basiques',
  chapitre: 'Rénal et milieu intérieur',
  ordre: 9,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'équilibre acido-basique',
    'système tampon',
    'diagramme de Davenport',
    'acidose métabolique',
    'alcalose métabolique',
    'acidose respiratoire',
    'alcalose respiratoire',
    'compensation',
  ],
  objectifs: [
    'Décrire l’origine quotidienne de la production d’acides dans l’organisme.',
    'Expliquer le fonctionnement des principaux systèmes tampons de l’organisme.',
    'Décrire le rôle respiratoire et rénal dans la régulation du pH.',
    'Utiliser le diagramme de Davenport pour caractériser un trouble acido-basique.',
    'Distinguer les quatre grands troubles acido-basiques simples et leur compensation attendue.',
  ],
  sections: [
    {
      id: 'production-acides',
      titre: 'Production quotidienne d’acides',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le métabolisme cellulaire génère en permanence des acides, que l’organisme doit neutraliser et éliminer pour maintenir le pH artériel dans une fourchette étroite compatible avec la vie, classiquement entre 7,38 et 7,42.",
        },
        {
          type: 'tableau',
          titre: 'Sources d’acides de l’organisme',
          colonnes: ['Type d’acide', 'Origine', 'Quantité quotidienne approximative', 'Voie d’élimination'],
          lignes: [
            ['Acide carbonique (volatile)', 'Métabolisme oxydatif cellulaire (CO2)', 'environ 15 000 à 20 000 mmol/jour (en équivalents CO2)', 'Élimination pulmonaire par ventilation'],
            ['Acides fixes (non volatils)', 'Catabolisme des protéines soufrées, des phospholipides, métabolisme incomplet des glucides et lipides', 'environ 50 à 100 mmol/jour', 'Élimination rénale'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Pourquoi distinguer acide volatil et acides fixes ?',
          texte:
            "Le CO2, produit en quantité considérable, est qualifié d’acide volatil car il peut être éliminé rapidement par les poumons sous forme gazeuse. Les acides fixes, produits en quantité bien moindre mais qui ne peuvent pas être éliminés par voie pulmonaire, doivent être excrétés par le rein, plus lentement.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Valeurs artérielles de référence',
          texte:
            "pH artériel normal : 7,38 à 7,42. PaCO2 normale : environ 38 à 42 mmHg. Bicarbonate plasmatique normal : environ 22 à 26 mmol/L.",
        },
      ],
    },
    {
      id: 'systemes-tampons',
      titre: 'Les systèmes tampons',
      blocs: [
        {
          type: 'definition',
          terme: 'Système tampon',
          definition:
            "Couple acide faible/base conjuguée capable de limiter la variation de pH d’une solution lors de l’ajout d’acide ou de base, en captant ou en libérant des protons H+.",
        },
        {
          type: 'tableau',
          titre: 'Principaux systèmes tampons de l’organisme',
          colonnes: ['Système tampon', 'Localisation principale', 'Particularité'],
          lignes: [
            ['Bicarbonate / acide carbonique (HCO3-/H2CO3)', 'Plasma, milieu extracellulaire', 'Système tampon majeur, dit « ouvert » car couplé à l’élimination pulmonaire du CO2'],
            ['Protéines plasmatiques', 'Plasma', 'Pouvoir tampon modéré, lié aux résidus histidine'],
            ['Hémoglobine', 'Globule rouge', 'Tampon intracellulaire majeur du sang, particulièrement efficace grâce à l’effet Haldane'],
            ['Phosphates (HPO4^2-/H2PO4-)', 'Intracellulaire et urinaire', 'pKa proche de 6,8, efficace surtout en intracellulaire et dans le tube urinaire'],
            ['Os (carbonate et phosphate osseux)', 'Squelette', 'Réservoir tampon à long terme, mobilisé lors d’acidoses chroniques sévères'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le système bicarbonate, tampon « ouvert »',
          texte:
            "Le système bicarbonate/acide carbonique est qualifié de tampon ouvert car sa composante acide, le CO2, est en équilibre avec l’air alvéolaire et peut être éliminée en continu par la ventilation. Cette particularité, absente des tampons classiques en système fermé, rend ce système particulièrement puissant et ajustable, la ventilation pouvant en permanence modifier la concentration de l’un des deux membres du couple.",
        },
        {
          type: 'formule',
          expression: 'pH = 6,1 + log ( [HCO3-] / (0,03 × PaCO2) )',
          legende:
            "Équation d’Henderson-Hasselbalch appliquée au système bicarbonate : 6,1 est le pKa apparent du couple, 0,03 le coefficient de solubilité du CO2 dans le plasma (mmol/L/mmHg). Cette équation relie directement le pH aux deux composantes rénale ([HCO3-]) et respiratoire (PaCO2) de l’équilibre acido-basique.",
        },
      ],
    },
    {
      id: 'regulation-respiratoire-renale',
      titre: 'Régulation respiratoire et rénale',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Deux systèmes de régulation complémentaires',
          gauche: {
            titre: 'Régulation respiratoire',
            points: [
              'Ajuste la PaCO2 en modifiant la ventilation alvéolaire.',
              'Réponse rapide, en quelques minutes.',
              'Une hyperventilation abaisse la PaCO2 (effet alcalinisant) ; une hypoventilation l’élève (effet acidifiant).',
              'Ne peut pas corriger complètement un trouble métabolique, seulement le compenser partiellement.',
            ],
          },
          droite: {
            titre: 'Régulation rénale',
            points: [
              'Ajuste l’excrétion d’ions H+ et la réabsorption/régénération de bicarbonate.',
              'Réponse lente, sur plusieurs heures à plusieurs jours.',
              'Peut régénérer du bicarbonate nouveau, contrairement au tamponnement simple.',
              'Constitue la compensation d’un trouble respiratoire chronique.',
            ],
          },
        },
        {
          type: 'paragraphe',
          texte:
            "Le rein élimine les ions H+ produits quotidiennement par les acides fixes grâce à deux mécanismes complémentaires : la réabsorption quasi complète du bicarbonate filtré au tube proximal, et la régénération de bicarbonate nouveau au tube distal et collecteur, couplée à l’excrétion urinaire d’acidité titrable et d’ammonium (NH4+).",
        },
        {
          type: 'definition',
          terme: 'Ammoniogenèse rénale',
          definition:
            "Production rénale d’ammoniac (NH3) à partir de la glutamine, principalement au tube proximal. L’ammoniac capte un proton H+ pour former l’ammonium (NH4+), excrété dans l’urine, ce qui permet l’élimination d’ions H+ sans acidifier excessivement l’urine et régénère simultanément une molécule de bicarbonate reversée dans le sang.",
        },
      ],
    },
    {
      id: 'diagramme-davenport',
      titre: 'Le diagramme de Davenport',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le diagramme de Davenport représente la concentration plasmatique de bicarbonate en fonction du pH, avec des isobares de PaCO2. Il permet de visualiser et de caractériser tout trouble acido-basique simple ainsi que sa compensation.",
        },
        {
          type: 'liste',
          items: [
            "Un point représentant l’état acido-basique d’un patient se déplace le long d’une même isobare de PaCO2 lorsque seul le tamponnement non bicarbonate intervient (réponse immédiate, sans changement de ventilation ni de fonction rénale).",
            "Un déplacement vers une isobare de PaCO2 différente traduit une modification de la ventilation, primaire (trouble respiratoire) ou compensatrice (réponse à un trouble métabolique).",
            "Un trouble simple non compensé se situe sur la droite tampon du sang total ; une compensation le déplace vers la zone de normalité du pH, sans jamais la dépasser complètement (surcompensation rarissime et toujours partielle).",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Lecture rapide du diagramme',
          texte:
            "Sur le diagramme de Davenport, un trouble métabolique déplace le point horizontalement puis la compensation respiratoire le ramène obliquement vers la normale en changeant d’isobare de PaCO2. Un trouble respiratoire déplace le point le long d’une nouvelle isobare de PaCO2, puis la compensation rénale ajuste le bicarbonate pour ramener le pH vers la normale, sans jamais changer la PaCO2 primaire.",
        },
      ],
    },
    {
      id: 'quatre-troubles',
      titre: 'Les quatre troubles acido-basiques simples',
      blocs: [
        {
          type: 'tableau',
          titre: 'Caractérisation des quatre troubles simples',
          colonnes: ['Trouble', 'pH', 'Anomalie primaire', 'Mécanisme de compensation attendu'],
          lignes: [
            ['Acidose métabolique', 'Diminué', 'Diminution du bicarbonate plasmatique', 'Hyperventilation compensatrice, diminution de la PaCO2'],
            ['Alcalose métabolique', 'Augmenté', 'Augmentation du bicarbonate plasmatique', 'Hypoventilation compensatrice, augmentation de la PaCO2'],
            ['Acidose respiratoire', 'Diminué', 'Augmentation de la PaCO2 (hypoventilation)', 'Rétention rénale de bicarbonate, sur plusieurs jours'],
            ['Alcalose respiratoire', 'Augmenté', 'Diminution de la PaCO2 (hyperventilation)', 'Excrétion rénale accrue de bicarbonate, sur plusieurs jours'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemples cliniques classiques',
          texte:
            "Acidose métabolique : acidocétose diabétique, acidose lactique, insuffisance rénale. Alcalose métabolique : vomissements répétés, perte d’ions H+. Acidose respiratoire : hypoventilation par bronchopneumopathie chronique obstructive décompensée, dépression du centre respiratoire. Alcalose respiratoire : hyperventilation par anxiété, altitude, embolie pulmonaire.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La compensation ne normalise jamais complètement le pH',
          texte:
            "Un mécanisme de compensation ramène le pH vers la normale mais ne le normalise en principe jamais totalement dans un trouble simple non traité : un pH parfaitement normal associé à des valeurs anormales de PaCO2 et de bicarbonate doit faire évoquer un trouble mixte (association de deux troubles acido-basiques) plutôt qu’une compensation isolée parfaite.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le pH artériel normal se situe entre 7,38 et 7,42, maintenu malgré une production quotidienne considérable de CO2 et d’acides fixes.",
    "Le CO2 (acide volatil) est éliminé par les poumons ; les acides fixes sont éliminés par le rein.",
    "Le système bicarbonate/acide carbonique est le tampon plasmatique majeur, dit « ouvert » car couplé à la ventilation.",
    "La régulation respiratoire est rapide (minutes) mais ne peut que compenser, jamais corriger seule un trouble métabolique.",
    "La régulation rénale est lente (heures à jours) mais peut régénérer du bicarbonate nouveau, via l’ammoniogenèse notamment.",
    "Le diagramme de Davenport relie bicarbonate, pH et isobares de PaCO2 pour caractériser tout trouble acido-basique simple.",
    "Les quatre troubles simples sont l’acidose et l’alcalose métabolique, et l’acidose et l’alcalose respiratoire, chacun avec sa compensation propre.",
    "Une compensation ne normalise jamais complètement le pH dans un trouble simple non traité.",
  ],
  erreursFrequentes: [
    "Croire que le CO2 et les acides fixes empruntent la même voie d’élimination : le CO2 est éliminé par les poumons, les acides fixes par le rein.",
    "Penser que la compensation respiratoire peut corriger totalement un trouble métabolique : elle ne fait que l’atténuer partiellement, sans jamais normaliser complètement le pH.",
    "Oublier que la compensation rénale d’un trouble respiratoire est lente, sur plusieurs jours, contrairement à la compensation respiratoire d’un trouble métabolique, rapide.",
    "Confondre acidose respiratoire (hypoventilation, PaCO2 augmentée) et acidose métabolique (bicarbonate diminué), qui ont des mécanismes et des compensations opposés.",
    "Croire que l’ammoniogenèse acidifie l’organisme : elle permet au contraire l’élimination d’ions H+ et la régénération de bicarbonate.",
    "Interpréter un pH parfaitement normal avec des valeurs de PaCO2 et de bicarbonate franchement anormales comme une compensation parfaite plutôt que d’évoquer un trouble mixte.",
  ],
  mnemotechniques: [
    {
      moyen: '« Volatil par le poumon, fixe par le rein »',
      explication:
        'Le CO2 (acide volatil) est éliminé par la ventilation pulmonaire ; les acides fixes sont éliminés par le rein.',
    },
    {
      moyen: '« Respiratoire rapide, rénal lent »',
      explication:
        'La compensation respiratoire agit en minutes, la compensation rénale en heures à jours.',
    },
    {
      moyen: '« Même sens = métabolique, sens opposé = respiratoire »',
      explication:
        'Dans un trouble métabolique, pH et bicarbonate varient dans le même sens ; dans un trouble respiratoire, pH et PaCO2 varient en sens opposé.',
    },
  ],
  sources: [
    'Guyton et Hall, Précis de physiologie médicale',
    'Silverthorn, Physiologie humaine, une approche intégrée',
    'Sherwood, Physiologie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'physio-equilibre-acido-basique-fc-01',
      recto: 'Quelle est la fourchette normale du pH artériel ?',
      verso: '7,38 à 7,42.',
      type: 'chiffre',
      tags: ['pH'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-02',
      recto: 'Par quelle voie l’acide volatil (CO2) est-il éliminé ?',
      verso: 'Par la ventilation pulmonaire.',
      type: 'definition',
      tags: ['CO2', 'élimination'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-03',
      recto: 'Par quelle voie les acides fixes sont-ils éliminés ?',
      verso: 'Par le rein.',
      type: 'definition',
      tags: ['acides fixes'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-04',
      recto: 'Pourquoi le système bicarbonate est-il qualifié de tampon « ouvert » ?',
      verso: 'Parce que sa composante acide, le CO2, peut être éliminée en continu par la ventilation, ce qui rend le système particulièrement puissant et ajustable.',
      type: 'mecanisme',
      tags: ['tampon bicarbonate'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-05',
      recto: 'Donner l’équation d’Henderson-Hasselbalch appliquée au système bicarbonate.',
      verso: 'pH = 6,1 + log ( [HCO3-] / (0,03 × PaCO2) ).',
      type: 'formule',
      tags: ['Henderson-Hasselbalch'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-06',
      recto: 'Quel est le tampon intracellulaire majeur du sang ?',
      verso: 'L’hémoglobine, dans le globule rouge.',
      type: 'definition',
      tags: ['tampons'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-07',
      recto: 'Qu’est-ce que l’ammoniogenèse rénale ?',
      verso: 'La production rénale d’ammoniac à partir de la glutamine, permettant l’excrétion urinaire d’ions H+ sous forme d’ammonium et la régénération de bicarbonate nouveau.',
      type: 'mecanisme',
      tags: ['ammoniogenèse'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-08',
      recto: 'Quelle est la vitesse de la compensation respiratoire par rapport à la compensation rénale ?',
      verso: 'La compensation respiratoire est rapide (minutes) ; la compensation rénale est lente (heures à jours).',
      type: 'chiffre',
      tags: ['compensation'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-09',
      recto: 'Quelle est l’anomalie primaire d’une acidose métabolique ?',
      verso: 'Une diminution du bicarbonate plasmatique.',
      type: 'definition',
      tags: ['acidose métabolique'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-10',
      recto: 'Quelle est l’anomalie primaire d’une acidose respiratoire ?',
      verso: 'Une augmentation de la PaCO2 par hypoventilation.',
      type: 'definition',
      tags: ['acidose respiratoire'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-11',
      recto: 'Que représente le diagramme de Davenport ?',
      verso: 'La concentration plasmatique de bicarbonate en fonction du pH, avec des isobares de PaCO2, permettant de caractériser tout trouble acido-basique.',
      type: 'definition',
      tags: ['diagramme de Davenport'],
    },
    {
      id: 'physio-equilibre-acido-basique-fc-12',
      recto: 'Une compensation acido-basique normalise-t-elle complètement le pH dans un trouble simple ?',
      verso: 'Non, elle ramène le pH vers la normale mais ne le normalise en principe jamais totalement.',
      type: 'mecanisme',
      tags: ['compensation'],
    },
  ],
  qcm: [
    {
      id: 'physio-equilibre-acido-basique-qcm-01',
      enonce: "Concernant la production et l’élimination des acides de l’organisme, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le CO2 est qualifié d’acide fixe.',
          vraie: false,
          justification: "Faux : le CO2 est qualifié d’acide volatil, car il peut être éliminé par voie pulmonaire.",
        },
        {
          lettre: 'B',
          texte: 'Les acides fixes sont éliminés par voie rénale.',
          vraie: true,
          justification: 'Exact, le rein étant le seul organe capable de les excréter.',
        },
        {
          lettre: 'C',
          texte: 'La quantité quotidienne de CO2 produite est bien supérieure à celle des acides fixes.',
          vraie: true,
          justification: 'Exact, de l’ordre de plusieurs milliers de mmol/jour contre 50 à 100 mmol/jour pour les acides fixes.',
        },
        {
          lettre: 'D',
          texte: 'Le pH artériel normal se situe entre 7,00 et 7,20.',
          vraie: false,
          justification: 'Faux : le pH artériel normal se situe entre 7,38 et 7,42.',
        },
        {
          lettre: 'E',
          texte: 'La bicarbonatémie plasmatique normale est comprise entre 22 et 26 mmol/L.',
          vraie: true,
          justification: 'Exact, valeur de référence usuelle.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Distinguer clairement acide volatil (CO2, voie pulmonaire) et acides fixes (voie rénale).',
      difficulte: 1,
    },
    {
      id: 'physio-equilibre-acido-basique-qcm-02',
      enonce: "Concernant les systèmes tampons de l’organisme, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le système bicarbonate/acide carbonique est le tampon plasmatique majeur.',
          vraie: true,
          justification: 'Exact : il constitue le principal système tampon extracellulaire, grâce à son couplage à la ventilation qui élimine en continu le CO2 produit.',
        },
        {
          lettre: 'B',
          texte: 'Ce système est qualifié de tampon fermé.',
          vraie: false,
          justification: 'Faux : il est qualifié de tampon ouvert, car couplé à l’élimination pulmonaire continue du CO2.',
        },
        {
          lettre: 'C',
          texte: 'L’hémoglobine est un tampon intracellulaire important dans le globule rouge.',
          vraie: true,
          justification: 'Exact, en lien notamment avec l’effet Haldane.',
        },
        {
          lettre: 'D',
          texte: 'L’os peut servir de réservoir tampon lors d’acidoses chroniques sévères.',
          vraie: true,
          justification: 'Exact, par mobilisation de carbonate et de phosphate osseux.',
        },
        {
          lettre: 'E',
          texte: 'Les phosphates ne jouent aucun rôle tampon dans l’organisme.',
          vraie: false,
          justification: "Faux : ils constituent un système tampon efficace, notamment en intracellulaire et dans le tube urinaire.",
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le système bicarbonate reste le tampon majeur, ouvert grâce à la ventilation.',
      difficulte: 2,
    },
    {
      id: 'physio-equilibre-acido-basique-qcm-03',
      enonce: "Concernant les régulations respiratoire et rénale du pH, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La régulation respiratoire agit en quelques minutes.',
          vraie: true,
          justification: 'Exact, en modifiant la ventilation alvéolaire et donc la PaCO2.',
        },
        {
          lettre: 'B',
          texte: 'La régulation respiratoire peut corriger totalement un trouble métabolique.',
          vraie: false,
          justification: 'Faux : elle ne fait que compenser partiellement, sans jamais corriger totalement.',
        },
        {
          lettre: 'C',
          texte: 'La régulation rénale peut régénérer du bicarbonate nouveau.',
          vraie: true,
          justification: 'Exact, notamment via l’ammoniogenèse.',
        },
        {
          lettre: 'D',
          texte: 'La régulation rénale agit plus rapidement que la régulation respiratoire.',
          vraie: false,
          justification: "Faux : c’est l’inverse, la régulation rénale nécessite plusieurs heures à plusieurs jours.",
        },
        {
          lettre: 'E',
          texte: 'L’ammoniogenèse rénale permet l’excrétion d’ions H+ sous forme d’ammonium.',
          vraie: true,
          justification: 'Exact, ce qui limite l’acidification excessive de l’urine tout en régénérant du bicarbonate.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Rapidité et réversibilité distinguent nettement régulation respiratoire et rénale.',
      difficulte: 2,
    },
    {
      id: 'physio-equilibre-acido-basique-qcm-04',
      enonce: "Concernant le diagramme de Davenport, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Il représente le bicarbonate plasmatique en fonction du pH.',
          vraie: true,
          justification: 'Exact, avec des isobares de PaCO2 superposées.',
        },
        {
          lettre: 'B',
          texte: 'Un déplacement le long d’une même isobare de PaCO2 traduit un changement de ventilation.',
          vraie: false,
          justification: 'Faux : un déplacement sur une même isobare traduit un tamponnement sans changement de PaCO2 ; un changement d’isobare traduit une modification de la ventilation.',
        },
        {
          lettre: 'C',
          texte: 'Une compensation respiratoire d’un trouble métabolique déplace le point vers une nouvelle isobare de PaCO2.',
          vraie: true,
          justification: 'Exact : la ventilation s’ajuste pour ramener le pH vers la normale.',
        },
        {
          lettre: 'D',
          texte: 'Un trouble simple compensé normalise en principe complètement le pH.',
          vraie: false,
          justification: 'Faux : la compensation ramène le pH vers la normale mais ne le normalise en principe jamais totalement.',
        },
        {
          lettre: 'E',
          texte: 'Le diagramme de Davenport permet de distinguer trouble métabolique et trouble respiratoire.',
          vraie: true,
          justification: 'Exact, c’est l’un de ses intérêts principaux.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le diagramme de Davenport articule bicarbonate, pH et PaCO2 pour caractériser un trouble acido-basique.',
      difficulte: 3,
    },
    {
      id: 'physio-equilibre-acido-basique-qcm-05',
      enonce: "Concernant les quatre troubles acido-basiques simples, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Une acidose métabolique se caractérise par une diminution du bicarbonate plasmatique.',
          vraie: true,
          justification: 'Exact, avec un pH diminué et une hyperventilation compensatrice attendue.',
        },
        {
          lettre: 'B',
          texte: 'Une alcalose respiratoire se caractérise par une augmentation de la PaCO2.',
          vraie: false,
          justification: 'Faux : elle se caractérise par une diminution de la PaCO2, du fait d’une hyperventilation.',
        },
        {
          lettre: 'C',
          texte: 'Une acidose respiratoire résulte d’une hypoventilation.',
          vraie: true,
          justification: 'Exact, avec augmentation de la PaCO2 et diminution du pH.',
        },
        {
          lettre: 'D',
          texte: 'Une alcalose métabolique s’accompagne d’une augmentation compensatrice de la PaCO2.',
          vraie: true,
          justification: 'Exact, par hypoventilation compensatrice.',
        },
        {
          lettre: 'E',
          texte: 'Les vomissements répétés sont une cause classique d’acidose métabolique.',
          vraie: false,
          justification: "Faux : les vomissements répétés entraînent une perte d’ions H+ et provoquent classiquement une alcalose métabolique.",
        },
      ],
      correction: 'Réponses exactes : A, C et D. Bien associer chaque trouble à son anomalie primaire et à sa compensation attendue.',
      difficulte: 2,
    },
    {
      id: 'physio-equilibre-acido-basique-qcm-06',
      enonce: "Concernant l’interprétation d’un trouble acido-basique, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Une acidocétose diabétique est une cause classique d’acidose métabolique.',
          vraie: true,
          justification: 'Exact, du fait de l’accumulation de corps cétoniques acides.',
        },
        {
          lettre: 'B',
          texte: 'Une bronchopneumopathie chronique obstructive décompensée peut entraîner une acidose respiratoire.',
          vraie: true,
          justification: 'Exact, par hypoventilation alvéolaire et rétention de CO2.',
        },
        {
          lettre: 'C',
          texte: 'Un pH parfaitement normal exclut par principe tout trouble acido-basique.',
          vraie: false,
          justification: "Faux : un pH normal avec des valeurs très anormales de PaCO2 et de bicarbonate doit faire évoquer un trouble mixte.",
        },
        {
          lettre: 'D',
          texte: 'L’anxiété peut provoquer une hyperventilation et une alcalose respiratoire.',
          vraie: true,
          justification: 'Exact, par baisse de la PaCO2 liée à l’hyperventilation.',
        },
        {
          lettre: 'E',
          texte: 'Une insuffisance rénale peut contribuer à une acidose métabolique.',
          vraie: true,
          justification: 'Exact, du fait d’une excrétion insuffisante des acides fixes et d’une régénération insuffisante de bicarbonate.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Savoir relier des situations cliniques classiques aux quatre troubles acido-basiques simples.',
      difficulte: 2,
    },
  ],
};
