import type { Fiche } from '../../types';

export const ficheMembranePlasmique: Fiche = {
  id: 'biocell-membrane-plasmique',
  ue: 'biocell',
  titre: 'La membrane plasmique',
  sousTitre: 'Modèle de la mosaïque fluide, bicouche lipidique, protéines membranaires, glycocalyx et asymétrie',
  chapitre: 'La cellule et ses membranes',
  ordre: 2,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'membrane plasmique',
    'mosaïque fluide',
    'bicouche lipidique',
    'protéine intrinsèque',
    'protéine extrinsèque',
    'glycocalyx',
    'radeau lipidique',
    'asymétrie membranaire',
    'fluidité membranaire',
  ],
  objectifs: [
    'Décrire le modèle de la mosaïque fluide et ses composants principaux.',
    'Distinguer les grandes familles de lipides membranaires et leur organisation en bicouche.',
    'Différencier protéines intrinsèques (transmembranaires) et protéines extrinsèques (périphériques).',
    'Expliquer l’origine et le rôle du glycocalyx.',
    'Décrire l’asymétrie de la membrane plasmique et les facteurs qui influencent sa fluidité.',
    'Définir la notion de radeau lipidique et son intérêt fonctionnel.',
  ],
  sections: [
    {
      id: 'modele-mosaique-fluide',
      titre: 'Le modèle de la mosaïque fluide',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Proposé en 1972 par Singer et Nicolson, le modèle de la mosaïque fluide décrit la membrane plasmique comme une bicouche lipidique continue, dans laquelle des protéines sont insérées ou associées, capables de diffuser latéralement. La membrane est ainsi représentée comme une structure dynamique et non comme un assemblage figé.",
        },
        {
          type: 'liste',
          items: [
            "La bicouche lipidique forme la matrice continue de la membrane, imperméable par défaut aux molécules polaires et aux ions.",
            "Les protéines, mosaïque insérée dans cette bicouche, assurent la majorité des fonctions spécifiques de la membrane : transport, reconnaissance, adhérence, signalisation.",
            "Le caractère fluide provient de la mobilité latérale des lipides et de nombreuses protéines dans le plan de la membrane.",
          ],
        },
        {
          type: 'definition',
          terme: 'Membrane plasmique',
          definition:
            "Structure limitant la cellule, formée d’une bicouche de phospholipides associée à du cholestérol, des protéines et des glucides. Son épaisseur est de l’ordre de 7 à 10 nanomètres.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une frontière sélective',
          texte:
            "La membrane plasmique n’est pas une simple barrière : elle sépare le milieu intracellulaire du milieu extracellulaire tout en assurant des échanges régulés, une reconnaissance intercellulaire et une transmission de signaux, grâce à la diversité de ses protéines associées.",
        },
      ],
    },
    {
      id: 'bicouche-lipidique',
      titre: 'La bicouche lipidique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les lipides membranaires sont amphipathiques : ils possèdent une tête polaire hydrophile et une ou deux queues apolaires hydrophobes. En milieu aqueux, cette double affinité les conduit spontanément à s’organiser en bicouche, les têtes polaires orientées vers l’eau et les queues apolaires masquées à l’intérieur.",
        },
        {
          type: 'tableau',
          titre: 'Principaux lipides de la membrane plasmique',
          colonnes: ['Famille', 'Exemples', 'Particularité'],
          lignes: [
            ['Glycérophospholipides', 'Phosphatidylcholine, phosphatidyléthanolamine, phosphatidylsérine', 'Squelette glycérol, deux chaînes d’acides gras, tête phosphatée'],
            ['Sphingolipides', 'Sphingomyéline, glycosphingolipides', 'Squelette sphingosine ; abondants dans les radeaux lipidiques'],
            ['Stérols', 'Cholestérol', 'Module la fluidité membranaire ; s’intercale entre les phospholipides'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Épaisseur et proportions',
          texte:
            "L’épaisseur de la bicouche lipidique est de l’ordre de 5 nanomètres ; celle de la membrane entière, protéines comprises, atteint 7 à 10 nanomètres. Le cholestérol peut représenter jusqu’à environ la moitié des molécules lipidiques de la membrane plasmique des cellules animales.",
        },
        {
          type: 'paragraphe',
          texte:
            "Les glycosphingolipides et les glycolipides en général portent des chaînes glucidiques exposées exclusivement sur le feuillet externe, ce qui participe à l’asymétrie de composition entre les deux feuillets de la bicouche.",
        },
      ],
    },
    {
      id: 'proteines-membranaires',
      titre: 'Les protéines membranaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les protéines membranaires se répartissent en deux grandes catégories selon leur mode d’association à la bicouche lipidique : les protéines intrinsèques, ou transmembranaires, et les protéines extrinsèques, ou périphériques.",
        },
        {
          type: 'comparaison',
          titre: 'Protéines intrinsèques et extrinsèques',
          gauche: {
            titre: 'Protéines intrinsèques (transmembranaires)',
            points: [
              'Traversent partiellement ou totalement la bicouche lipidique',
              'Possèdent des segments hydrophobes, souvent en hélice alpha, insérés dans la membrane',
              'Extraction nécessitant la rupture de la membrane par un détergent',
              'Exemples : canaux ioniques, transporteurs, récepteurs',
            ],
          },
          droite: {
            titre: 'Protéines extrinsèques (périphériques)',
            points: [
              'Associées à la surface de la membrane, sans insertion dans la bicouche',
              'Liées par des interactions électrostatiques ou à une protéine intrinsèque',
              'Détachables par des traitements doux (variation de pH ou de force ionique)',
              'Exemples : protéines du cytosquelette sous-membranaire, certaines enzymes de surface',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas oublier les protéines ancrées par un lipide',
          texte:
            "Certaines protéines membranaires ne traversent pas la bicouche mais y sont ancrées par une modification lipidique covalente, par exemple un ancrage glycosylphosphatidylinositol (GPI) sur le feuillet externe. Elles ne sont ni de véritables protéines transmembranaires, ni de simples protéines périphériques attachées par des liaisons non covalentes.",
        },
        {
          type: 'paragraphe',
          texte:
            "La mobilité des protéines dans le plan de la membrane peut être mise en évidence expérimentalement par la technique de fusion cellulaire de Frye et Edidin, qui a montré la redistribution rapide de protéines marquées à la surface d’une cellule hybride homme-souris.",
        },
      ],
    },
    {
      id: 'glycocalyx',
      titre: 'Le glycocalyx',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le glycocalyx désigne l’ensemble des chaînes glucidiques présentes à la surface externe de la membrane plasmique, portées par des glycoprotéines et des glycolipides. Il forme un revêtement cellulaire impliqué dans la reconnaissance, la protection et l’adhérence.",
        },
        {
          type: 'definition',
          terme: 'Glycocalyx',
          definition:
            "Manteau de glucides exposé à la surface externe de la membrane plasmique, résultant de la glycosylation des protéines et des lipides membranaires lors de leur passage dans le réticulum endoplasmique et l’appareil de Golgi.",
        },
        {
          type: 'liste',
          items: [
            'Il intervient dans la reconnaissance intercellulaire, notamment lors de l’adhérence entre cellules et lors des interactions avec les cellules du système immunitaire.',
            "Les groupes sanguins du système ABO sont déterminés par la nature des sucres terminaux portés par des glycolipides et des glycoprotéines du glycocalyx érythrocytaire.",
            "Il protège la surface cellulaire des agressions mécaniques et enzymatiques du milieu extracellulaire.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le glycocalyx et les groupes sanguins',
          texte:
            "Le système ABO repose sur la présence, à la surface des hématies, d’antigènes glucidiques du glycocalyx. Le fait que ces antigènes soient des sucres, et non des protéines, explique en partie leur grande stabilité et leur rôle en transfusion sanguine.",
        },
      ],
    },
    {
      id: 'radeaux-lipidiques',
      titre: 'Les radeaux lipidiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les radeaux lipidiques (lipid rafts) sont des microdomaines de la membrane plasmique, enrichis en cholestérol et en sphingolipides, plus ordonnés et plus épais que le reste de la bicouche. Ils regroupent préférentiellement certaines protéines membranaires.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Intérêt fonctionnel des radeaux lipidiques',
          texte:
            "En concentrant certains récepteurs et certaines protéines de signalisation, les radeaux lipidiques favoriseraient l’efficacité et la spécificité de certaines voies de signalisation, ainsi que certains évènements d’endocytose.",
        },
        {
          type: 'paragraphe',
          texte:
            "La forte teneur en cholestérol et en sphingolipides à longues chaînes saturées confère aux radeaux lipidiques un état plus compact et moins fluide que le reste de la membrane, ce qui module localement les propriétés de diffusion des protéines qui y sont associées.",
        },
      ],
    },
    {
      id: 'asymetrie-fluidite',
      titre: 'Asymétrie et fluidité membranaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La membrane plasmique n’est pas symétrique : la composition en lipides et en protéines diffère entre le feuillet externe et le feuillet interne de la bicouche, une propriété appelée asymétrie membranaire.",
        },
        {
          type: 'tableau',
          titre: 'Asymétrie de répartition des principaux phospholipides',
          colonnes: ['Feuillet', 'Phospholipides principaux'],
          lignes: [
            ['Feuillet externe', 'Phosphatidylcholine, sphingomyéline, glycolipides'],
            ['Feuillet interne', 'Phosphatidylsérine, phosphatidyléthanolamine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La phosphatidylsérine, un marqueur à connaître',
          texte:
            "La phosphatidylsérine, normalement confinée au feuillet interne, est exposée à la surface externe de la membrane lors de l’apoptose. Cette externalisation constitue un signal reconnu par les phagocytes pour l’élimination des cellules apoptotiques.",
        },
        {
          type: 'liste',
          items: [
            "La fluidité membranaire dépend de la nature des acides gras : plus les chaînes sont courtes et insaturées, plus la membrane est fluide.",
            "Le cholestérol a un effet modulateur bidirectionnel : il rigidifie la membrane à température élevée en limitant les mouvements des chaînes lipidiques, et la fluidifie à basse température en empêchant un empilement trop compact des phospholipides.",
            "La température de transition de phase correspond au passage d’un état gel, ordonné, à un état fluide, désordonné, de la bicouche lipidique.",
          ],
        },
      ],
    },
  ],
  pointsCles: [
    "Le modèle de la mosaïque fluide, proposé par Singer et Nicolson en 1972, décrit une bicouche lipidique dans laquelle diffusent des protéines mobiles.",
    "Les lipides membranaires sont amphipathiques : tête polaire hydrophile, queue apolaire hydrophobe.",
    "Les protéines intrinsèques traversent la bicouche ; les protéines extrinsèques sont associées à sa surface sans y pénétrer.",
    "Le glycocalyx, formé de glucides portés par des glycoprotéines et des glycolipides, est exposé exclusivement sur le feuillet externe.",
    "Les radeaux lipidiques sont des microdomaines riches en cholestérol et en sphingolipides, plus ordonnés que le reste de la membrane.",
    "La membrane est asymétrique : la phosphatidylsérine est normalement confinée au feuillet interne.",
    "La fluidité membranaire augmente avec des acides gras courts et insaturés, et est modulée par le cholestérol selon la température.",
  ],
  erreursFrequentes: [
    "Décrire la membrane plasmique comme une structure figée : le modèle de la mosaïque fluide insiste au contraire sur la mobilité latérale des constituants.",
    "Confondre protéines intrinsèques et extrinsèques : seules les intrinsèques nécessitent un détergent pour être extraites de la membrane.",
    "Oublier les protéines ancrées par un lipide (ancrage GPI), qui ne sont ni transmembranaires ni simplement périphériques par liaison non covalente.",
    "Situer le glycocalyx sur le feuillet interne de la membrane : il est exclusivement exposé sur le feuillet externe.",
    "Penser que le cholestérol fluidifie toujours la membrane : son effet est bidirectionnel selon la température.",
    "Oublier que l’externalisation de la phosphatidylsérine est un signal reconnu lors de l’apoptose, et non un phénomène physiologique constant.",
  ],
  mnemotechniques: [
    {
      moyen: '« IN pour dedans »',
      explication:
        'Intrinsèque = protéine INsérée dans la membrane (transmembranaire) ; extrinsèque = protéine EXTérieure, simplement associée à la surface.',
    },
    {
      moyen: 'Glycocalyx = « manteau de sucre à l’extérieur »',
      explication:
        'Le glycocalyx est fait de glucides et se trouve toujours sur le feuillet externe de la membrane, jamais sur le feuillet interne.',
    },
    {
      moyen: 'Apoptose : la « Serine Sort » (PS externalisée)',
      explication:
        'Pour retenir que la phosphatidylsérine (PS), normalement interne, sort vers le feuillet externe lors de l’apoptose et signale la cellule aux phagocytes.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Pollard, Earnshaw, Lippincott-Schwartz, Biologie cellulaire, 3e édition',
    'Lodish, Biologie moléculaire de la cellule',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'biocell-membrane-plasmique-fc-01',
      recto: 'Qui a proposé le modèle de la mosaïque fluide, et en quelle année ?',
      verso: 'Singer et Nicolson, en 1972.',
      type: 'definition',
      tags: ['mosaïque fluide', 'histoire'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-02',
      recto: 'Que signifie « amphipathique » pour un lipide membranaire ?',
      verso: 'Le lipide possède une tête polaire hydrophile et une ou des queues apolaires hydrophobes.',
      type: 'definition',
      tags: ['lipides', 'bicouche'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-03',
      recto: 'Quelle est l’épaisseur approximative de la membrane plasmique ?',
      verso: 'De l’ordre de 7 à 10 nanomètres.',
      type: 'chiffre',
      tags: ['épaisseur', 'membrane'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-04',
      recto: 'Comment distingue-t-on une protéine intrinsèque d’une protéine extrinsèque ?',
      verso: 'L’intrinsèque traverse la bicouche et nécessite un détergent pour être extraite ; l’extrinsèque est associée à la surface et se détache par des méthodes douces.',
      type: 'classification',
      tags: ['protéines membranaires'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-05',
      recto: 'Qu’est-ce qu’un ancrage GPI ?',
      verso: 'Une modification lipidique covalente (glycosylphosphatidylinositol) qui fixe une protéine au feuillet externe de la membrane sans qu’elle la traverse.',
      type: 'definition',
      tags: ['ancrage lipidique', 'GPI'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-06',
      recto: 'Sur quel feuillet de la membrane le glycocalyx est-il exposé ?',
      verso: 'Exclusivement sur le feuillet externe.',
      type: 'definition',
      tags: ['glycocalyx'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-07',
      recto: 'Quels antigènes de surface déterminent le système de groupes sanguins ABO ?',
      verso: 'Des antigènes glucidiques du glycocalyx, portés par des glycoprotéines et des glycolipides des hématies.',
      type: 'clinique',
      tags: ['groupes sanguins', 'glycocalyx'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-08',
      recto: 'Que sont les radeaux lipidiques ?',
      verso: 'Des microdomaines membranaires enrichis en cholestérol et en sphingolipides, plus ordonnés que le reste de la bicouche.',
      type: 'definition',
      tags: ['radeaux lipidiques'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-09',
      recto: 'Quel phospholipide est normalement confiné au feuillet interne et s’externalise lors de l’apoptose ?',
      verso: 'La phosphatidylsérine.',
      type: 'mecanisme',
      tags: ['asymétrie', 'apoptose'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-10',
      recto: 'Quel est l’effet du cholestérol sur la fluidité membranaire à haute température ?',
      verso: 'Il rigidifie la membrane en limitant les mouvements des chaînes d’acides gras.',
      type: 'mecanisme',
      tags: ['cholestérol', 'fluidité'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-11',
      recto: 'Quel type d’acides gras augmente la fluidité de la membrane ?',
      verso: 'Des acides gras courts et insaturés, dont les doubles liaisons introduisent des coudes limitant l’empilement compact.',
      type: 'mecanisme',
      tags: ['fluidité', 'acides gras'],
    },
    {
      id: 'biocell-membrane-plasmique-fc-12',
      recto: 'Quelle expérience historique a démontré la mobilité latérale des protéines membranaires ?',
      verso: 'L’expérience de fusion cellulaire de Frye et Edidin, entre une cellule humaine et une cellule de souris.',
      type: 'mecanisme',
      tags: ['mobilité', 'expérience historique'],
    },
  ],
  qcm: [
    {
      id: 'biocell-membrane-plasmique-qcm-01',
      enonce: 'Concernant le modèle de la mosaïque fluide, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il a été proposé par Singer et Nicolson en 1972.', vraie: true, justification: 'C’est la référence historique classique de ce modèle.' },
        { lettre: 'B', texte: 'Il décrit une membrane figée, sans mobilité des constituants.', vraie: false, justification: 'Il décrit au contraire une structure fluide, dans laquelle lipides et protéines diffusent latéralement.' },
        { lettre: 'C', texte: 'Les protéines y sont représentées comme une mosaïque insérée dans la bicouche lipidique.', vraie: true, justification: 'C’est le sens même du terme « mosaïque » dans le nom du modèle.' },
        { lettre: 'D', texte: 'La bicouche lipidique forme la matrice continue de la membrane.', vraie: true, justification: 'Les lipides constituent le support continu dans lequel s’insèrent les protéines.' },
        { lettre: 'E', texte: 'Toutes les protéines membranaires diffusent librement dans le plan de la membrane.', vraie: false, justification: 'Certaines protéines sont ancrées au cytosquelette sous-membranaire ou confinées dans des domaines, ce qui limite leur diffusion.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir que la fluidité du modèle n’exclut pas des restrictions locales de mobilité.',
      difficulte: 2,
    },
    {
      id: 'biocell-membrane-plasmique-qcm-02',
      enonce: 'Concernant les lipides membranaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les phospholipides sont des molécules amphipathiques.', vraie: true, justification: 'Ils possèdent une tête phosphatée polaire et des chaînes d’acides gras apolaires.' },
        { lettre: 'B', texte: 'Le cholestérol s’intercale entre les phospholipides de la bicouche.', vraie: true, justification: 'Sa structure rigide plane s’insère entre les chaînes d’acides gras.' },
        { lettre: 'C', texte: 'Les glycolipides sont répartis symétriquement sur les deux feuillets de la membrane.', vraie: false, justification: 'Ils sont exposés exclusivement sur le feuillet externe.' },
        { lettre: 'D', texte: 'La sphingomyéline appartient à la famille des sphingolipides.', vraie: true, justification: 'Elle possède un squelette de sphingosine, caractéristique de cette famille.' },
        { lettre: 'E', texte: 'Un lipide membranaire est totalement hydrophobe.', vraie: false, justification: 'Il est amphipathique, avec une partie hydrophile (tête polaire) et une partie hydrophobe (queues d’acides gras).' },
      ],
      correction: 'Réponses exactes : A, B et D. La répartition asymétrique des glycolipides est un point classique de QCM.',
      difficulte: 2,
    },
    {
      id: 'biocell-membrane-plasmique-qcm-03',
      enonce: 'Concernant les protéines membranaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les protéines intrinsèques nécessitent un détergent pour être extraites de la membrane.', vraie: true, justification: 'Leur insertion dans la bicouche impose une rupture des interactions lipidiques par un détergent.' },
        { lettre: 'B', texte: 'Les protéines extrinsèques traversent toujours entièrement la bicouche lipidique.', vraie: false, justification: 'Ce sont au contraire les protéines intrinsèques qui traversent la bicouche ; les extrinsèques restent à sa surface.' },
        { lettre: 'C', texte: 'Une protéine à ancrage GPI est fixée au feuillet externe sans traverser la membrane.', vraie: true, justification: 'L’ancrage GPI est une modification lipidique fixant la protéine au feuillet externe sans domaine transmembranaire.' },
        { lettre: 'D', texte: 'Les segments transmembranaires des protéines intrinsèques sont le plus souvent en hélice alpha hydrophobe.', vraie: true, justification: 'C’est la conformation la plus fréquente des segments traversant la bicouche lipidique.' },
        { lettre: 'E', texte: 'Une protéine extrinsèque peut être détachée par une simple variation de pH ou de force ionique.', vraie: true, justification: 'Ses interactions, non covalentes, sont sensibles à ces changements de conditions physico-chimiques.' },
      ],
      correction: 'Réponses exactes : A, C, D et E. Bien distinguer les trois modes d’association des protéines à la membrane.',
      difficulte: 2,
    },
    {
      id: 'biocell-membrane-plasmique-qcm-04',
      enonce: 'Concernant le glycocalyx, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est formé de chaînes glucidiques portées par des glycoprotéines et des glycolipides.', vraie: true, justification: 'C’est la définition même du glycocalyx.' },
        { lettre: 'B', texte: 'Il est exposé sur le feuillet interne de la membrane.', vraie: false, justification: 'Il est exposé exclusivement sur le feuillet externe, au contact du milieu extracellulaire.' },
        { lettre: 'C', texte: 'Il participe à la reconnaissance intercellulaire.', vraie: true, justification: 'Les motifs glucidiques du glycocalyx sont reconnus par des lectines et d’autres récepteurs cellulaires.' },
        { lettre: 'D', texte: 'Les antigènes du système ABO en font partie.', vraie: true, justification: 'Ce sont des déterminants glucidiques exposés à la surface des hématies.' },
        { lettre: 'E', texte: 'Il est totalement absent des cellules épithéliales.', vraie: false, justification: 'Le glycocalyx est une caractéristique générale de la surface cellulaire, présente notamment sur les épithéliums.' },
      ],
      correction: 'Réponses exactes : A, C et D. Le glycocalyx est toujours externe, jamais interne.',
      difficulte: 1,
    },
    {
      id: 'biocell-membrane-plasmique-qcm-05',
      enonce: 'Concernant les radeaux lipidiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ils sont enrichis en cholestérol et en sphingolipides.', vraie: true, justification: 'C’est la composition caractéristique des radeaux lipidiques.' },
        { lettre: 'B', texte: 'Ils sont plus fluides que le reste de la membrane.', vraie: false, justification: 'Ils sont au contraire plus ordonnés et plus compacts que le reste de la bicouche.' },
        { lettre: 'C', texte: 'Ils peuvent concentrer certaines protéines de signalisation.', vraie: true, justification: 'Cette organisation favoriserait l’efficacité de certaines voies de signalisation.' },
        { lettre: 'D', texte: 'Ils sont dépourvus de protéines.', vraie: false, justification: 'Ils regroupent au contraire préférentiellement certaines protéines membranaires.' },
        { lettre: 'E', texte: 'Ils seraient impliqués dans certains évènements d’endocytose.', vraie: true, justification: 'Plusieurs voies d’endocytose dépendantes des radeaux lipidiques ont été décrites.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir la composition (cholestérol, sphingolipides) et le caractère plus ordonné des radeaux.',
      difficulte: 2,
    },
    {
      id: 'biocell-membrane-plasmique-qcm-06',
      enonce: 'Concernant l’asymétrie et la fluidité membranaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phosphatidylsérine est normalement localisée sur le feuillet interne de la membrane.', vraie: true, justification: 'C’est sa répartition physiologique habituelle chez une cellule vivante non apoptotique.' },
        { lettre: 'B', texte: 'L’externalisation de la phosphatidylsérine est un signal reconnu lors de l’apoptose.', vraie: true, justification: 'Elle est reconnue par les phagocytes pour l’élimination des cellules apoptotiques.' },
        { lettre: 'C', texte: 'Des acides gras insaturés augmentent la fluidité de la membrane.', vraie: true, justification: 'Leurs doubles liaisons introduisent des coudes qui gênent l’empilement compact des chaînes lipidiques.' },
        { lettre: 'D', texte: 'Le cholestérol fluidifie toujours la membrane, quelle que soit la température.', vraie: false, justification: 'Son effet est bidirectionnel : il rigidifie à haute température et fluidifie à basse température.' },
        { lettre: 'E', texte: 'La sphingomyéline est préférentiellement localisée sur le feuillet externe.', vraie: true, justification: 'C’est l’un des lipides caractéristiques du feuillet externe, avec la phosphatidylcholine.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Le cholestérol est le seul point piège classique de cette question.',
      difficulte: 2,
    },
  ],
};
