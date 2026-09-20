import type { Fiche } from '../../types';

export const ficheTissuAdipeuxCartilage: Fiche = {
  id: 'histo-tissu-adipeux-cartilage',
  ue: 'histo',
  titre: 'Tissu adipeux et tissu cartilagineux',
  sousTitre: 'Adipocytes blancs et bruns, chondrocytes, matrice cartilagineuse et variétés de cartilage',
  chapitre: 'Les tissus fondamentaux',
  ordre: 5,
  duree: 23,
  difficulte: 2,
  motsCles: [
    'adipocyte blanc',
    'adipocyte brun',
    'chondrocyte',
    'chondroblaste',
    'cartilage hyalin',
    'cartilage élastique',
    'cartilage fibreux',
    'périchondre',
  ],
  objectifs: [
    "Décrire la morphologie et le rôle métabolique des adipocytes blancs et bruns.",
    "Différencier tissu adipeux blanc et tissu adipeux brun sur le plan structural et fonctionnel.",
    "Décrire l’organisation cellulaire et matricielle du cartilage.",
    "Distinguer les trois variétés de cartilage : hyalin, élastique et fibreux.",
    "Expliquer le mode de nutrition du cartilage, tissu avasculaire.",
  ],
  sections: [
    {
      id: 'tissu-adipeux-blanc',
      titre: 'Le tissu adipeux blanc',
      blocs: [
        {
          type: 'definition',
          terme: 'Adipocyte blanc (uniloculaire)',
          definition:
            "Cellule spécialisée dans le stockage des triglycérides sous forme d’une volumineuse vacuole lipidique unique, qui refoule le noyau et le cytoplasme en périphérie, donnant un aspect en bague à chaton sur une coupe histologique classique.",
        },
        {
          type: 'liste',
          items: [
            "Le tissu adipeux blanc constitue la principale réserve énergétique de l’organisme, sous forme de triglycérides.",
            "Les adipocytes sont organisés en lobules séparés par de fines cloisons de tissu conjonctif, richement vascularisées.",
            "Sur une coupe HES standard, la graisse est dissoute par les solvants de la technique, laissant une vacuole optiquement vide entourée d’un fin liseré cytoplasmique.",
            "Le tissu adipeux blanc a également une fonction endocrine, par la sécrétion d’adipokines telles que la leptine.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Répartition du tissu adipeux blanc',
          texte:
            "Le tissu adipeux blanc se répartit en tissu adipeux sous-cutané (hypoderme) et tissu adipeux viscéral, périorganique, dont l’excès est particulièrement associé au risque cardiométabolique.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Leptine et régulation de la satiété',
          texte:
            "La leptine, sécrétée par les adipocytes blancs proportionnellement à la masse grasse, agit sur l’hypothalamus pour réguler la prise alimentaire et la dépense énergétique, signalant l’état des réserves énergétiques de l’organisme.",
        },
      ],
    },
    {
      id: 'tissu-adipeux-brun',
      titre: 'Le tissu adipeux brun',
      blocs: [
        {
          type: 'definition',
          terme: 'Adipocyte brun (multiloculaire)',
          definition:
            "Cellule contenant de multiples petites vacuoles lipidiques dispersées dans le cytoplasme (aspect multiloculaire), riche en mitochondries volumineuses, dont la couleur brune est due à leur forte teneur en cytochromes.",
        },
        {
          type: 'comparaison',
          titre: 'Tissu adipeux blanc versus tissu adipeux brun',
          gauche: {
            titre: 'Tissu adipeux blanc',
            points: [
              'Adipocyte uniloculaire, une seule grosse vacuole',
              'Fonction : réserve énergétique et endocrine',
              'Peu de mitochondries',
              'Abondant chez l’adulte',
            ],
          },
          droite: {
            titre: 'Tissu adipeux brun',
            points: [
              'Adipocyte multiloculaire, petites vacuoles multiples',
              'Fonction : thermogenèse par production de chaleur',
              'Très riche en mitochondries, exprimant la protéine découplante UCP1',
              'Abondant chez le nouveau-né, résiduel chez l’adulte',
            ],
          },
        },
        {
          type: 'paragraphe',
          texte:
            "La thermogenèse du tissu adipeux brun repose sur la protéine découplante UCP1 (thermogénine), localisée dans la membrane interne des mitochondries, qui dissipe le gradient de protons sous forme de chaleur plutôt que de le coupler à la synthèse d’ATP.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le tissu adipeux brun chez le nouveau-né',
          texte:
            "Le nouveau-né, incapable de frissonner efficacement, dépend fortement du tissu adipeux brun, localisé notamment en région interscapulaire, périrénale et cervicale, pour assurer sa thermorégulation.",
        },
      ],
    },
    {
      id: 'cartilage-generalites',
      titre: 'Généralités sur le tissu cartilagineux',
      blocs: [
        {
          type: 'definition',
          terme: 'Cartilage',
          definition:
            "Tissu conjonctif spécialisé, ferme mais élastique, dépourvu de vaisseaux, de nerfs et de vaisseaux lymphatiques, constitué de cellules (chondrocytes) englobées dans une abondante matrice extracellulaire qu’elles synthétisent.",
        },
        {
          type: 'tableau',
          titre: 'Cellules du tissu cartilagineux',
          colonnes: ['Cellule', 'Localisation', 'Fonction'],
          lignes: [
            ['Chondroblaste', 'Périphérie du cartilage, en périchondre', 'Cellule jeune, active dans la synthèse de matrice, à l’origine des chondrocytes'],
            ['Chondrocyte', 'Logé dans une logette appelée chondroplaste, au sein de la matrice', 'Cellule mature, entretient la matrice cartilagineuse'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Les chondrocytes peuvent se regrouper par deux, trois ou quatre au sein d’une même logette, formant des groupes isogéniques issus de la division d’un même chondrocyte progéniteur, témoins de la croissance dite interstitielle du cartilage.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un tissu avasculaire particulier',
          texte:
            "L’absence de vascularisation propre au cartilage explique sa nutrition exclusivement par diffusion, ce qui limite sa capacité de réparation et explique la lenteur de la cicatrisation cartilagineuse après une lésion.",
        },
      ],
    },
    {
      id: 'matrice-cartilagineuse',
      titre: 'La matrice cartilagineuse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La matrice cartilagineuse associe des fibres de collagène de type II, organisées en un fin réseau, et une substance fondamentale très riche en protéoglycanes, notamment l’agrécane associé à l’acide hyaluronique, qui retient une grande quantité d’eau et confère au cartilage sa résistance à la compression.",
        },
        {
          type: 'definition',
          terme: 'Chondroplaste',
          definition:
            "Logette creusée dans la matrice cartilagineuse calcifiée ou dense, dans laquelle réside un ou plusieurs chondrocytes.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Territoire péricellulaire basophile',
          texte:
            "Autour de chaque chondroplaste, la matrice est particulièrement riche en glycosaminoglycanes, donc plus basophile qu’à distance : ce halo, visible en HES, est appelé territoire chondrocytaire ou chondrine.",
        },
      ],
    },
    {
      id: 'varietes-cartilage',
      titre: 'Les trois variétés de cartilage',
      blocs: [
        {
          type: 'tableau',
          titre: 'Les trois types de cartilage',
          colonnes: ['Type', 'Fibres dominantes', 'Aspect', 'Localisation typique'],
          lignes: [
            [
              'Cartilage hyalin',
              'Collagène de type II, fines fibrilles non visibles en HES',
              'Matrice homogène, translucide, aspect vitreux',
              'Cartilages costaux, cartilage nasal, surfaces articulaires, ébauche du squelette fœtal',
            ],
            [
              'Cartilage élastique',
              'Collagène de type II associé à un réseau dense de fibres élastiques',
              'Matrice flexible, colorée par l’orcéine',
              'Pavillon de l’oreille, épiglotte',
            ],
            [
              'Cartilage fibreux (fibrocartilage)',
              'Épais faisceaux de collagène de type I, peu de substance fondamentale',
              'Aspect fibreux dense, chondrocytes alignés entre les faisceaux',
              'Disques intervertébraux, symphyse pubienne, ménisques',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le fibrocartilage, un intermédiaire',
          texte:
            "Le fibrocartilage est le seul type de cartilage dépourvu de périchondre individualisé : il se raccorde progressivement au tissu conjonctif dense voisin, dont il partage le collagène de type I, à la différence du cartilage hyalin et du cartilage élastique qui contiennent du collagène de type II.",
        },
      ],
    },
    {
      id: 'perichondre-nutrition',
      titre: 'Le périchondre et la nutrition du cartilage',
      blocs: [
        {
          type: 'definition',
          terme: 'Périchondre',
          definition:
            "Enveloppe conjonctive dense entourant le cartilage hyalin et le cartilage élastique, organisée en deux couches : une couche externe fibreuse, riche en fibroblastes, et une couche interne chondrogène, riche en chondroblastes.",
        },
        {
          type: 'etapes',
          titre: 'Les deux modes de croissance du cartilage',
          etapes: [
            {
              titre: 'Croissance appositionnelle',
              detail:
                "Les chondroblastes de la couche interne du périchondre se différencient en chondrocytes et déposent de nouvelles couches de matrice en périphérie du cartilage, augmentant son diamètre.",
            },
            {
              titre: 'Croissance interstitielle',
              detail:
                "Les chondrocytes déjà présents au sein de la matrice se divisent, formant des groupes isogéniques, et sécrètent de la matrice autour d’eux, augmentant le volume du cartilage de l’intérieur.",
            },
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Le cartilage étant dépourvu de vaisseaux propres, sa nutrition dépend entièrement de la diffusion des nutriments et de l’oxygène depuis les capillaires du périchondre ou, pour le cartilage articulaire dépourvu de périchondre, depuis le liquide synovial.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le cartilage articulaire n’a pas de périchondre',
          texte:
            "À la surface des articulations synoviales, le cartilage hyalin articulaire est directement en contact avec la cavité articulaire et ne possède pas de périchondre : sa nutrition dépend exclusivement de la diffusion à partir du liquide synovial.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’adipocyte blanc est uniloculaire, dédié au stockage énergétique et à la fonction endocrine (leptine).",
    "L’adipocyte brun est multiloculaire, très riche en mitochondries exprimant UCP1, dédié à la thermogenèse.",
    "Le cartilage est un tissu conjonctif avasculaire, formé de chondrocytes logés dans des chondroplastes au sein d’une matrice riche en collagène et en protéoglycanes.",
    "Trois variétés de cartilage existent : hyalin (collagène II, translucide), élastique (collagène II et fibres élastiques) et fibreux (collagène I, sans périchondre).",
    "Le périchondre, absent dans le fibrocartilage et dans le cartilage articulaire, comporte une couche fibreuse externe et une couche chondrogène interne.",
    "La croissance du cartilage est appositionnelle (à partir du périchondre) ou interstitielle (division des chondrocytes en place).",
    "La nutrition du cartilage se fait exclusivement par diffusion, depuis le périchondre ou le liquide synovial selon la localisation.",
  ],
  erreursFrequentes: [
    "Confondre adipocyte uniloculaire (blanc, réserve énergétique) et multiloculaire (brun, thermogenèse).",
    "Croire que tous les cartilages possèdent un périchondre : le fibrocartilage et le cartilage articulaire en sont dépourvus.",
    "Confondre le collagène de type II (cartilage hyalin et élastique) et le collagène de type I (fibrocartilage).",
    "Penser que le cartilage est vascularisé comme l’os : il est au contraire strictement avasculaire.",
    "Oublier que la croissance interstitielle repose sur la division des chondrocytes déjà présents, tandis que la croissance appositionnelle part du périchondre.",
  ],
  mnemotechniques: [
    {
      moyen: 'Blanc = Bague à chaton, Brun = Bourré de mitochondries',
      explication:
        'L’adipocyte blanc uniloculaire a un aspect en bague à chaton ; l’adipocyte brun multiloculaire est riche en mitochondries pour la thermogenèse.',
    },
    {
      moyen: 'HEF pour les trois cartilages : Hyalin, Élastique, Fibreux',
      explication:
        'Trois variétés à toujours associer à leur type de collagène et à leur localisation typique (costal, oreille, disque intervertébral).',
    },
    {
      moyen: 'Pas de Périchondre pour le Fibrocartilage',
      explication:
        'Moyen simple pour retenir l’exception du fibrocartilage, seul type de cartilage sans périchondre individualisé.',
    },
  ],
  sources: [
    'Wheater, Histologie fonctionnelle',
    'Junqueira, Histologie',
    'Poirier, Histologie moléculaire',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'histo-tissu-adipeux-cartilage-fc-01',
      recto: 'Quel est l’aspect caractéristique de l’adipocyte blanc en HES ?',
      verso: 'Une grosse vacuole lipidique unique (uniloculaire), refoulant noyau et cytoplasme en périphérie, en aspect de bague à chaton.',
      type: 'definition',
      tags: ['adipocyte blanc'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-02',
      recto: 'Quelle hormone est sécrétée par les adipocytes blancs et quel est son rôle ?',
      verso: 'La leptine, qui régule la satiété et la dépense énergétique en agissant sur l’hypothalamus.',
      type: 'mecanisme',
      tags: ['adipocyte blanc', 'leptine'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-03',
      recto: 'Qu’est-ce que la protéine UCP1 et où agit-elle ?',
      verso: 'La thermogénine, protéine découplante de la membrane interne des mitochondries des adipocytes bruns, qui produit de la chaleur.',
      type: 'mecanisme',
      tags: ['adipocyte brun', 'thermogenèse'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-04',
      recto: 'Pourquoi le nouveau-né dépend-il particulièrement du tissu adipeux brun ?',
      verso: 'Parce qu’il ne peut pas frissonner efficacement ; le tissu adipeux brun assure sa thermorégulation par thermogenèse.',
      type: 'clinique',
      tags: ['adipocyte brun'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-05',
      recto: 'Comment se nomme la logette contenant un chondrocyte ?',
      verso: 'Le chondroplaste.',
      type: 'definition',
      tags: ['cartilage'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-06',
      recto: 'Quel type de collagène compose la matrice du cartilage hyalin et du cartilage élastique ?',
      verso: 'Le collagène de type II.',
      type: 'chiffre',
      tags: ['cartilage', 'collagène'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-07',
      recto: 'Quel type de collagène compose le fibrocartilage ?',
      verso: 'Le collagène de type I, comme dans le tissu conjonctif dense voisin.',
      type: 'chiffre',
      tags: ['fibrocartilage', 'collagène'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-08',
      recto: 'Quelles sont les deux couches du périchondre ?',
      verso: 'Une couche externe fibreuse, riche en fibroblastes, et une couche interne chondrogène, riche en chondroblastes.',
      type: 'classification',
      tags: ['périchondre'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-09',
      recto: 'Quels sont les deux types de cartilage dépourvus de périchondre ?',
      verso: 'Le fibrocartilage et le cartilage articulaire.',
      type: 'classification',
      tags: ['périchondre'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-10',
      recto: 'Quelle est la différence entre croissance appositionnelle et croissance interstitielle du cartilage ?',
      verso: 'L’appositionnelle part du périchondre (nouvelles couches en périphérie) ; l’interstitielle résulte de la division des chondrocytes déjà présents dans la matrice.',
      type: 'mecanisme',
      tags: ['croissance cartilagineuse'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-11',
      recto: 'Comment le cartilage articulaire est-il nourri, en l’absence de périchondre ?',
      verso: 'Par diffusion depuis le liquide synovial.',
      type: 'mecanisme',
      tags: ['nutrition du cartilage'],
    },
    {
      id: 'histo-tissu-adipeux-cartilage-fc-12',
      recto: 'Citer deux localisations typiques du cartilage élastique.',
      verso: 'Le pavillon de l’oreille et l’épiglotte.',
      type: 'classification',
      tags: ['cartilage élastique'],
    },
  ],
  qcm: [
    {
      id: 'histo-tissu-adipeux-cartilage-qcm-01',
      enonce: 'Concernant le tissu adipeux blanc, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’adipocyte blanc est multiloculaire.',
          vraie: false,
          justification: 'Faux : l’adipocyte blanc est uniloculaire, avec une seule grosse vacuole lipidique.',
        },
        {
          lettre: 'B',
          texte: 'Il sécrète la leptine, impliquée dans la régulation de la satiété.',
          vraie: true,
          justification: 'Exact, c’est l’une de ses fonctions endocrines majeures.',
        },
        {
          lettre: 'C',
          texte: 'Il constitue la principale réserve énergétique de l’organisme.',
          vraie: true,
          justification: 'Exact, sous forme de triglycérides.',
        },
        {
          lettre: 'D',
          texte: 'Sur une coupe HES standard, la vacuole lipidique apparaît colorée en rose intense.',
          vraie: false,
          justification: 'Faux : la graisse est dissoute par les solvants de la technique, laissant une vacuole optiquement vide.',
        },
        {
          lettre: 'E',
          texte: 'Le tissu adipeux blanc peut être sous-cutané ou viscéral.',
          vraie: true,
          justification: 'Exact, ces deux localisations ont des implications métaboliques différentes.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir l’aspect optiquement vide de la vacuole après technique classique.',
      difficulte: 1,
    },
    {
      id: 'histo-tissu-adipeux-cartilage-qcm-02',
      enonce: 'Concernant le tissu adipeux brun, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’adipocyte brun est riche en mitochondries.',
          vraie: true,
          justification: 'Exact, ce qui lui confère sa couleur brune caractéristique.',
        },
        {
          lettre: 'B',
          texte: 'Sa fonction principale est le stockage énergétique de long terme.',
          vraie: false,
          justification: 'Faux : sa fonction principale est la thermogenèse, non le stockage énergétique.',
        },
        {
          lettre: 'C',
          texte: 'La protéine UCP1 découple la chaîne respiratoire de la synthèse d’ATP.',
          vraie: true,
          justification: 'Exact, l’énergie est alors dissipée sous forme de chaleur.',
        },
        {
          lettre: 'D',
          texte: 'Il est particulièrement abondant chez le nouveau-né.',
          vraie: true,
          justification: 'Exact, notamment en région interscapulaire, périrénale et cervicale.',
        },
        {
          lettre: 'E',
          texte: 'L’adipocyte brun est uniloculaire.',
          vraie: false,
          justification: 'Faux : il est multiloculaire, avec de multiples petites vacuoles lipidiques.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le tissu adipeux brun est spécialisé dans la thermogenèse, non le stockage.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-adipeux-cartilage-qcm-03',
      enonce: 'Concernant l’organisation générale du tissu cartilagineux, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le cartilage est un tissu vascularisé.',
          vraie: false,
          justification: 'Faux : le cartilage est strictement avasculaire.',
        },
        {
          lettre: 'B',
          texte: 'Le chondrocyte réside dans une logette appelée chondroplaste.',
          vraie: true,
          justification: 'Exact, au sein de la matrice cartilagineuse.',
        },
        {
          lettre: 'C',
          texte: 'Les groupes isogéniques résultent de la division d’un même chondrocyte progéniteur.',
          vraie: true,
          justification: 'Exact, témoins de la croissance interstitielle.',
        },
        {
          lettre: 'D',
          texte: 'Le chondroblaste est la forme mature et quiescente du chondrocyte.',
          vraie: false,
          justification: 'Faux : le chondroblaste est la cellule jeune, active, à l’origine du chondrocyte mature.',
        },
        {
          lettre: 'E',
          texte: 'La matrice péricellulaire autour du chondroplaste est plus basophile qu’à distance.',
          vraie: true,
          justification: 'Exact, ce territoire riche en glycosaminoglycanes est appelé chondrine.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Le caractère avasculaire du cartilage est une notion clé à retenir.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-adipeux-cartilage-qcm-04',
      enonce: 'Concernant les variétés de cartilage, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le cartilage hyalin est riche en collagène de type II.',
          vraie: true,
          justification: 'Exact, avec un aspect homogène et translucide.',
        },
        {
          lettre: 'B',
          texte: 'Le cartilage élastique est retrouvé notamment dans le pavillon de l’oreille.',
          vraie: true,
          justification: 'Exact, ainsi que dans l’épiglotte.',
        },
        {
          lettre: 'C',
          texte: 'Le fibrocartilage est riche en collagène de type I.',
          vraie: true,
          justification: 'Exact, comme le tissu conjonctif dense auquel il se raccorde.',
        },
        {
          lettre: 'D',
          texte: 'Les disques intervertébraux sont constitués de cartilage hyalin.',
          vraie: false,
          justification: 'Faux : ils sont constitués de fibrocartilage, riche en collagène de type I.',
        },
        {
          lettre: 'E',
          texte: 'Le cartilage nasal est un exemple de cartilage hyalin.',
          vraie: true,
          justification: 'Exact, comme les cartilages costaux et les surfaces articulaires.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Associer chaque type de cartilage à sa localisation caractéristique.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-adipeux-cartilage-qcm-05',
      enonce: 'Concernant le périchondre et la nutrition du cartilage, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le périchondre comporte une couche externe fibreuse et une couche interne chondrogène.',
          vraie: true,
          justification: 'Exact, c’est son organisation classique en deux couches.',
        },
        {
          lettre: 'B',
          texte: 'Le fibrocartilage possède un périchondre bien individualisé.',
          vraie: false,
          justification: 'Faux : le fibrocartilage est dépourvu de périchondre individualisé.',
        },
        {
          lettre: 'C',
          texte: 'Le cartilage articulaire est nourri par diffusion depuis le liquide synovial.',
          vraie: true,
          justification: 'Exact, en l’absence de périchondre et de vaisseaux propres à ce niveau.',
        },
        {
          lettre: 'D',
          texte: 'La croissance appositionnelle résulte de la division des chondrocytes déjà présents dans la matrice.',
          vraie: false,
          justification: 'Faux : c’est la définition de la croissance interstitielle ; l’appositionnelle part du périchondre.',
        },
        {
          lettre: 'E',
          texte: 'La nutrition du cartilage repose exclusivement sur la diffusion, en l’absence de vaisseaux propres.',
          vraie: true,
          justification: 'Exact, ce qui explique la faible capacité de réparation du cartilage.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir que fibrocartilage et cartilage articulaire sont dépourvus de périchondre.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-adipeux-cartilage-qcm-06',
      enonce: 'Concernant la matrice cartilagineuse, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle contient une substance fondamentale riche en protéoglycanes.',
          vraie: true,
          justification: 'Exact, notamment l’agrécane associé à l’acide hyaluronique.',
        },
        {
          lettre: 'B',
          texte: 'Elle est dépourvue de toute fibre de collagène.',
          vraie: false,
          justification: 'Faux : elle contient du collagène, de type II dans le cartilage hyalin et élastique, de type I dans le fibrocartilage.',
        },
        {
          lettre: 'C',
          texte: 'Sa richesse en glycosaminoglycanes explique sa résistance à la compression.',
          vraie: true,
          justification: 'Exact, par rétention d’eau importante.',
        },
        {
          lettre: 'D',
          texte: 'Le territoire péricellulaire autour du chondroplaste est appelé chondrine.',
          vraie: true,
          justification: 'Exact, il est plus basophile que la matrice à distance.',
        },
        {
          lettre: 'E',
          texte: 'La matrice cartilagineuse est directement vascularisée par de fins capillaires.',
          vraie: false,
          justification: 'Faux : le cartilage et sa matrice sont strictement avasculaires.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. La richesse en protéoglycanes explique les propriétés mécaniques du cartilage.',
      difficulte: 2,
    },
  ],
};
