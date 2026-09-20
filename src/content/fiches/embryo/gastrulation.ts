import type { Fiche } from '../../types';

export const ficheGastrulation: Fiche = {
  id: 'embryo-gastrulation',
  ue: 'embryo',
  titre: 'La troisième semaine : gastrulation',
  sousTitre: 'Ligne primitive, chordomésoblaste et mise en place des trois feuillets',
  chapitre: 'Développement embryonnaire',
  ordre: 7,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'ligne primitive',
    'nœud de Hensen',
    'gastrulation',
    'chordomésoblaste',
    'notochorde',
    'ectoderme',
    'mésoderme',
    'endoderme',
  ],
  objectifs: [
    "Définir la gastrulation et situer son importance dans le développement embryonnaire.",
    "Décrire la formation et le rôle de la ligne primitive et du nœud de Hensen.",
    "Expliquer la mise en place des trois feuillets embryonnaires à partir de l’épiblaste.",
    "Décrire la formation du chordomésoblaste et de la notochorde.",
    "Citer les principaux dérivés de chacun des trois feuillets.",
  ],
  sections: [
    {
      id: 'definition-gastrulation',
      titre: 'Définition et enjeu de la gastrulation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La gastrulation est le processus par lequel le disque embryonnaire didermique (épiblaste, hypoblaste) se transforme en disque tridermique, comportant trois feuillets embryonnaires définitifs : l’ectoderme, le mésoderme et l’endoderme. Elle se déroule au cours de la troisième semaine de développement et définit pour la première fois les axes de symétrie de l’embryon : axe céphalo-caudal, axe dorso-ventral, axe droite-gauche.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un tournant du développement',
          texte:
            "La gastrulation marque le passage d’un disque à organisation encore relativement simple à un embryon pourvu des trois feuillets à partir desquels s’organisera, au cours des semaines suivantes, l’ensemble des tissus et organes définitifs.",
        },
      ],
    },
    {
      id: 'ligne-primitive-noeud',
      titre: 'Ligne primitive et nœud de Hensen',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Vers le 15e jour de développement, un épaississement linéaire apparaît sur la face dorsale de l’épiblaste, dans le plan médian, en direction céphalo-caudale : c’est la ligne primitive. Son extrémité céphalique se renfle en un amas cellulaire arrondi, le nœud de Hensen (ou nœud primitif).",
        },
        {
          type: 'definition',
          terme: 'Ligne primitive',
          definition:
            "Structure transitoire de l’épiblaste marquant l’extrémité caudale de l’embryon et le site par lequel les cellules épiblastiques s’invaginent pour former le mésoderme et l’endoderme intra-embryonnaires. Sa seule apparition définit pour la première fois l’axe céphalo-caudal de l’embryon.",
        },
        {
          type: 'tableau',
          titre: 'Ligne primitive et nœud de Hensen',
          colonnes: ['Structure', 'Localisation', 'Fonction'],
          lignes: [
            ['Ligne primitive', 'Face dorsale de l’épiblaste, plan médian', 'Site d’invagination des cellules épiblastiques vers le mésoderme et l’endoderme'],
            ['Nœud de Hensen', 'Extrémité céphalique de la ligne primitive', 'Site d’invagination du chordomésoblaste, à l’origine de la notochorde'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre ligne primitive et notochorde',
          texte:
            "La ligne primitive est le site général d’invagination du mésoderme et de l’endoderme sur toute sa longueur ; le nœud de Hensen, à son extrémité céphalique, est le site spécifique par lequel s’invagine le processus chordal, précurseur de la notochorde.",
        },
      ],
    },
    {
      id: 'formation-trois-feuillets',
      titre: 'Mise en place des trois feuillets',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cellules de l’épiblaste convergent vers la ligne primitive, s’y invaginent (migration en profondeur, par un mouvement d’ingression), puis migrent latéralement entre l’épiblaste et l’hypoblaste ou plus profondément en remplaçant l’hypoblaste.",
        },
        {
          type: 'etapes',
          titre: 'Devenir des cellules invaginées',
          etapes: [
            {
              titre: 'Endoderme définitif',
              detail:
                'Les premières cellules invaginées à travers la ligne primitive s’intercalent dans l’hypoblaste et le remplacent progressivement, constituant l’endoderme intra-embryonnaire définitif.',
            },
            {
              titre: 'Mésoderme intra-embryonnaire',
              detail:
                'Les cellules invaginées ensuite se disposent en une couche intermédiaire, entre épiblaste et endoderme naissant, formant le mésoderme intra-embryonnaire, à l’exception de deux zones où ectoderme et endoderme restent accolés : la membrane pharyngienne en avant et la membrane cloacale en arrière.',
            },
            {
              titre: 'Ectoderme',
              detail:
                'Les cellules épiblastiques qui ne migrent pas à travers la ligne primitive constituent, par défaut, l’ectoderme de surface.',
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Origine et principaux dérivés des trois feuillets',
          colonnes: ['Feuillet', 'Origine', 'Principaux dérivés'],
          lignes: [
            ['Ectoderme', 'Épiblaste resté en surface', 'Système nerveux central et périphérique, épiderme et ses annexes'],
            ['Mésoderme', 'Cellules épiblastiques invaginées, couche intermédiaire', 'Squelette, muscles, système cardiovasculaire, système urogénital'],
            ['Endoderme', 'Cellules épiblastiques invaginées remplaçant l’hypoblaste', 'Épithélium de revêtement des voies digestives et respiratoires, glandes annexes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Toutes les cellules dérivent de l’épiblaste',
          texte:
            "Un piège fréquent consiste à faire dériver un feuillet de l’hypoblaste. En réalité, après la gastrulation, les trois feuillets définitifs (ectoderme, mésoderme, endoderme) dérivent tous de l’épiblaste ; l’hypoblaste ne contribue qu’à des structures extra-embryonnaires transitoires.",
        },
      ],
    },
    {
      id: 'chordomesoblaste-notochorde',
      titre: 'Chordomésoblaste et notochorde',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au niveau du nœud de Hensen, des cellules épiblastiques particulières s’invaginent selon un trajet céphalique médian pour former le chordomésoblaste, qui se creuse transitoirement d’une lumière (processus notochordal ou canal chordal), puis s’aplatit contre l’endoderme (plaque chordale), avant de s’en séparer complètement pour former un cordon cellulaire plein, la notochorde définitive, entre le 17e et le 22e jour environ.",
        },
        {
          type: 'definition',
          terme: 'Notochorde',
          definition:
            "Cordon cellulaire médian, transitoire, d’origine chordomésoblastique, qui définit l’axe longitudinal de l’embryon et induit la différenciation de l’ectoderme sus-jacent en plaque neurale. Elle régresse ensuite, en laissant pour vestige le nucleus pulposus des disques intervertébraux.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Induction neurale',
          texte:
            "L’induction de la plaque neurale par la notochorde est un exemple classique d’induction embryonnaire : la notochorde libère des signaux moléculaires qui déterminent le destin neural de l’ectoderme situé juste au-dessus d’elle, préparant la neurulation étudiée dans la fiche suivante.",
        },
      ],
    },
    {
      id: 'delimitation-membranes',
      titre: 'Membranes et repères de fin de gastrulation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Deux zones du disque embryonnaire échappent à l’invasion mésodermique et restent constituées d’un simple accolement entre ectoderme et endoderme : la membrane pharyngienne (ou bucco-pharyngienne), à l’extrémité céphalique, en avant de la plaque préchordale, et la membrane cloacale, à l’extrémité caudale, en arrière de la ligne primitive.",
        },
        {
          type: 'tableau',
          titre: 'Les deux membranes bilaminaires',
          colonnes: ['Membrane', 'Localisation', 'Devenir'],
          lignes: [
            ['Membrane pharyngienne', 'Extrémité céphalique du disque', 'Se rompt vers la 4e semaine, ouvrant l’intestin antérieur sur la cavité amniotique'],
            ['Membrane cloacale', 'Extrémité caudale du disque', 'Se rompt plus tardivement, participant à la formation des orifices anal et urogénital'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repères chronologiques de la troisième semaine',
          texte:
            "Apparition de la ligne primitive : vers le 15e jour. Formation du processus puis de la plaque chordale : J17 à J19 environ. Notochorde définitive : J20 à J22 environ. Ces repères sont donnés en jours de développement post-fécondation.",
        },
      ],
    },
  ],
  pointsCles: [
    "La gastrulation transforme le disque didermique en disque tridermique, comportant ectoderme, mésoderme et endoderme.",
    "La ligne primitive, apparue vers le 15e jour, définit pour la première fois l’axe céphalo-caudal de l’embryon.",
    "Le nœud de Hensen, à l’extrémité céphalique de la ligne primitive, est le site d’invagination du chordomésoblaste.",
    "Les trois feuillets définitifs dérivent tous de l’épiblaste ; l’hypoblaste est progressivement remplacé par l’endoderme épiblastique.",
    "Le chordomésoblaste forme la notochorde, qui définit l’axe embryonnaire et induit la plaque neurale.",
    "La membrane pharyngienne et la membrane cloacale sont les seules zones où ectoderme et endoderme restent accolés sans mésoderme interposé.",
  ],
  erreursFrequentes: [
    "Faire dériver un des trois feuillets définitifs de l’hypoblaste, alors que tous dérivent de l’épiblaste.",
    "Confondre la ligne primitive, structure d’invagination générale, avec le nœud de Hensen, site spécifique du chordomésoblaste.",
    "Croire que la notochorde persiste telle quelle chez l’adulte : elle régresse et ne laisse comme vestige que le nucleus pulposus des disques intervertébraux.",
    "Situer la membrane pharyngienne et la membrane cloacale comme des zones mésodermiques : ce sont au contraire des zones sans mésoderme interposé.",
    "Placer la gastrulation avant la deuxième semaine : elle appartient exclusivement à la troisième semaine de développement.",
  ],
  mnemotechniques: [
    {
      moyen: 'Nœud de Hensen, nœud de la notochorde',
      explication:
        'Le nœud de Hensen est le point de départ précis du chordomésoblaste, précurseur de la notochorde, à distinguer de la ligne primitive dans son ensemble.',
    },
    {
      moyen: '« Tout vient de l’épi »',
      explication:
        'Moyen simple pour retenir que les trois feuillets définitifs de la gastrulation dérivent tous de l’épiblaste (« épi »), et non de l’hypoblaste.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-gastrulation-fc-01',
      recto: 'Que produit la gastrulation ?',
      verso: 'Le disque embryonnaire tridermique, comportant ectoderme, mésoderme et endoderme.',
      type: 'definition',
      tags: ['gastrulation'],
    },
    {
      id: 'embryo-gastrulation-fc-02',
      recto: 'Vers quel jour apparaît la ligne primitive ?',
      verso: 'Vers le 15e jour de développement.',
      type: 'chiffre',
      tags: ['ligne primitive'],
    },
    {
      id: 'embryo-gastrulation-fc-03',
      recto: 'Quel axe la ligne primitive définit-elle pour la première fois ?',
      verso: 'L’axe céphalo-caudal de l’embryon.',
      type: 'mecanisme',
      tags: ['ligne primitive'],
    },
    {
      id: 'embryo-gastrulation-fc-04',
      recto: 'Où se situe le nœud de Hensen ?',
      verso: 'À l’extrémité céphalique de la ligne primitive.',
      type: 'definition',
      tags: ['nœud de Hensen'],
    },
    {
      id: 'embryo-gastrulation-fc-05',
      recto: 'De quel feuillet dérivent l’ectoderme, le mésoderme et l’endoderme définitifs ?',
      verso: 'Tous dérivent de l’épiblaste.',
      type: 'mecanisme',
      tags: ['épiblaste'],
    },
    {
      id: 'embryo-gastrulation-fc-06',
      recto: 'Comment se forme l’endoderme définitif ?',
      verso: 'Les premières cellules épiblastiques invaginées à travers la ligne primitive remplacent progressivement l’hypoblaste.',
      type: 'mecanisme',
      tags: ['endoderme'],
    },
    {
      id: 'embryo-gastrulation-fc-07',
      recto: 'Qu’est-ce que le chordomésoblaste ?',
      verso: 'Les cellules invaginées au niveau du nœud de Hensen, précurseurs de la notochorde.',
      type: 'definition',
      tags: ['chordomésoblaste'],
    },
    {
      id: 'embryo-gastrulation-fc-08',
      recto: 'Quel est le rôle de la notochorde ?',
      verso: 'Définir l’axe longitudinal de l’embryon et induire la différenciation de l’ectoderme sus-jacent en plaque neurale.',
      type: 'mecanisme',
      tags: ['notochorde'],
    },
    {
      id: 'embryo-gastrulation-fc-09',
      recto: 'Que devient la notochorde chez l’adulte ?',
      verso: 'Elle régresse, laissant pour vestige le nucleus pulposus des disques intervertébraux.',
      type: 'mecanisme',
      tags: ['notochorde'],
    },
    {
      id: 'embryo-gastrulation-fc-10',
      recto: 'Quelles sont les deux zones sans mésoderme interposé entre ectoderme et endoderme ?',
      verso: 'La membrane pharyngienne (céphalique) et la membrane cloacale (caudale).',
      type: 'classification',
      tags: ['membranes'],
    },
    {
      id: 'embryo-gastrulation-fc-11',
      recto: 'Citer un dérivé majeur de l’ectoderme.',
      verso: 'Le système nerveux central (ou l’épiderme et ses annexes).',
      type: 'classification',
      tags: ['dérivés des feuillets'],
    },
    {
      id: 'embryo-gastrulation-fc-12',
      recto: 'Citer un dérivé majeur du mésoderme.',
      verso: 'Le squelette (ou les muscles, ou le système cardiovasculaire).',
      type: 'classification',
      tags: ['dérivés des feuillets'],
    },
  ],
  qcm: [
    {
      id: 'embryo-gastrulation-qcm-01',
      enonce: 'Concernant la ligne primitive, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle apparaît sur la face dorsale de l’épiblaste.', vraie: true, justification: 'Exact, dans le plan médian de l’épiblaste.' },
        { lettre: 'B', texte: 'Elle apparaît vers le 15e jour de développement.', vraie: true, justification: 'Exact, au tout début de la troisième semaine.' },
        { lettre: 'C', texte: 'Elle définit l’axe céphalo-caudal de l’embryon.', vraie: true, justification: 'Exact, c’est l’un des premiers repères de symétrie de l’embryon.' },
        { lettre: 'D', texte: 'Elle est le site d’invagination du chordomésoblaste sur toute sa longueur.', vraie: false, justification: 'Le chordomésoblaste s’invagine spécifiquement au niveau du nœud de Hensen, non sur toute la ligne primitive.' },
        { lettre: 'E', texte: 'Elle persiste toute la vie sous forme de vestige anatomique.', vraie: false, justification: 'La ligne primitive est une structure transitoire qui disparaît normalement au cours du développement.' },
      ],
      correction: 'Réponses exactes : A, B et C. La ligne primitive est transitoire et définit l’axe céphalo-caudal.',
      difficulte: 2,
    },
    {
      id: 'embryo-gastrulation-qcm-02',
      enonce: 'Concernant le nœud de Hensen, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est situé à l’extrémité caudale de la ligne primitive.', vraie: false, justification: 'Il est situé à l’extrémité céphalique de la ligne primitive.' },
        { lettre: 'B', texte: 'Il est le site d’invagination du chordomésoblaste.', vraie: true, justification: 'Exact, c’est le point de départ de la formation de la notochorde.' },
        { lettre: 'C', texte: 'Il donne directement naissance à l’ensemble du mésoderme intra-embryonnaire.', vraie: false, justification: 'L’essentiel du mésoderme intra-embryonnaire s’invagine le long de la ligne primitive, non exclusivement au nœud de Hensen.' },
        { lettre: 'D', texte: 'Il est synonyme de nœud primitif.', vraie: true, justification: 'Exact, les deux termes désignent la même structure.' },
        { lettre: 'E', texte: 'Il apparaît avant la ligne primitive elle-même.', vraie: false, justification: 'Le nœud de Hensen est l’extrémité céphalique de la ligne primitive et apparaît avec elle, non avant elle.' },
      ],
      correction: 'Réponses exactes : B et D. Le nœud de Hensen est spécifiquement lié à l’origine de la notochorde.',
      difficulte: 2,
    },
    {
      id: 'embryo-gastrulation-qcm-03',
      enonce: 'Concernant l’origine des trois feuillets, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ectoderme correspond aux cellules épiblastiques restées en surface.', vraie: true, justification: 'Exact, celles qui ne migrent pas à travers la ligne primitive.' },
        { lettre: 'B', texte: 'Le mésoderme intra-embryonnaire dérive de l’hypoblaste.', vraie: false, justification: 'Le mésoderme intra-embryonnaire dérive de l’épiblaste, comme les deux autres feuillets.' },
        { lettre: 'C', texte: 'L’endoderme définitif remplace progressivement l’hypoblaste.', vraie: true, justification: 'Exact, les premières cellules invaginées s’intercalent dans l’hypoblaste puis le remplacent.' },
        { lettre: 'D', texte: 'L’hypoblaste contribue directement à l’ectoderme définitif.', vraie: false, justification: 'L’hypoblaste ne contribue pas à l’ectoderme, qui dérive uniquement de l’épiblaste resté en surface.' },
        { lettre: 'E', texte: 'Les trois feuillets définitifs sont en place à la fin de la troisième semaine.', vraie: true, justification: 'Exact, la gastrulation, qui les met en place, se déroule au cours de la troisième semaine.' },
      ],
      correction: 'Réponses exactes : A, C et E. Tous les feuillets définitifs dérivent de l’épiblaste, l’hypoblaste étant remplacé par l’endoderme.',
      difficulte: 2,
    },
    {
      id: 'embryo-gastrulation-qcm-04',
      enonce: 'Concernant la notochorde, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle dérive du chordomésoblaste invaginé au nœud de Hensen.', vraie: true, justification: 'Exact, c’est son origine précise.' },
        { lettre: 'B', texte: 'Elle induit la différenciation de l’ectoderme sus-jacent en plaque neurale.', vraie: true, justification: 'Exact, c’est le mécanisme classique d’induction neurale.' },
        { lettre: 'C', texte: 'Elle persiste intégralement chez l’adulte sous sa forme embryonnaire.', vraie: false, justification: 'Elle régresse, ne laissant pour vestige que le nucleus pulposus des disques intervertébraux.' },
        { lettre: 'D', texte: 'Sa formation définitive est achevée vers le 20e à 22e jour de développement.', vraie: true, justification: 'Exact, selon la chronologie classique de sa mise en place.' },
        { lettre: 'E', texte: 'Elle est à l’origine directe des somites.', vraie: false, justification: 'Les somites dérivent du mésoderme paraxial, disposé de part et d’autre de la notochorde, non de la notochorde elle-même.' },
      ],
      correction: 'Réponses exactes : A, B et D. La notochorde est un axe transitoire inducteur, non l’origine directe des somites.',
      difficulte: 3,
    },
    {
      id: 'embryo-gastrulation-qcm-05',
      enonce: 'Concernant les membranes pharyngienne et cloacale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elles comportent un mésoderme interposé entre ectoderme et endoderme.', vraie: false, justification: 'Elles se caractérisent au contraire par l’absence de mésoderme interposé.' },
        { lettre: 'B', texte: 'La membrane pharyngienne est située à l’extrémité céphalique du disque.', vraie: true, justification: 'Exact, en avant de la plaque préchordale.' },
        { lettre: 'C', texte: 'La membrane cloacale est située à l’extrémité caudale du disque.', vraie: true, justification: 'Exact, en arrière de la ligne primitive.' },
        { lettre: 'D', texte: 'Ces deux membranes persistent définitivement, sans jamais se rompre.', vraie: false, justification: 'Elles se rompent au cours du développement, ouvrant respectivement l’intestin antérieur et participant à la formation des orifices caudaux.' },
        { lettre: 'E', texte: 'Elles résultent de l’accolement direct de l’ectoderme et de l’endoderme.', vraie: true, justification: 'Exact, c’est précisément leur définition histologique.' },
      ],
      correction: 'Réponses exactes : B, C et E. Ces deux membranes bilaminaires se rompent normalement au cours du développement.',
      difficulte: 2,
    },
    {
      id: 'embryo-gastrulation-qcm-06',
      enonce: 'Concernant la chronologie et les enjeux généraux de la gastrulation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La gastrulation se déroule au cours de la deuxième semaine.', vraie: false, justification: 'La gastrulation se déroule au cours de la troisième semaine, après la formation du disque didermique lors de la deuxième.' },
        { lettre: 'B', texte: 'La gastrulation transforme un disque didermique en disque tridermique.', vraie: true, justification: 'Exact, c’est sa définition même.' },
        { lettre: 'C', texte: 'Elle établit pour la première fois les axes de symétrie de l’embryon.', vraie: true, justification: 'Exact, notamment via l’apparition de la ligne primitive.' },
        { lettre: 'D', texte: 'Elle précède la formation du disque didermique.', vraie: false, justification: 'Elle lui succède : le disque didermique se forme au cours de la deuxième semaine, avant la gastrulation.' },
        { lettre: 'E', texte: 'Elle prépare la neurulation, étudiée séparément.', vraie: true, justification: 'Exact, l’induction de la plaque neurale par la notochorde ouvre sur la neurulation.' },
      ],
      correction: 'Réponses exactes : B, C et E. La gastrulation succède au disque didermique et prépare la neurulation.',
      difficulte: 2,
    },
  ],
};
