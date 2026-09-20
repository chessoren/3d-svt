import type { Fiche } from '../../types';

export const ficheEpitheliumsGlandulaires: Fiche = {
  id: 'histo-epitheliums-glandulaires',
  ue: 'histo',
  titre: 'Les épithéliums glandulaires',
  sousTitre: 'Glandes exocrines et endocrines, modes de sécrétion et classification morphologique',
  chapitre: 'Les tissus fondamentaux',
  ordre: 3,
  duree: 23,
  difficulte: 2,
  motsCles: [
    'glande exocrine',
    'glande endocrine',
    'mérocrine',
    'apocrine',
    'holocrine',
    'acinus',
    'canal excréteur',
    'sécrétion',
  ],
  objectifs: [
    "Définir un épithélium glandulaire et distinguer glande exocrine et glande endocrine.",
    "Décrire les trois modes de sécrétion : mérocrine, apocrine et holocrine.",
    "Classer les glandes exocrines selon la morphologie de leur portion sécrétrice et de leurs canaux excréteurs.",
    "Décrire l’organisation d’un acinus séreux et d’un acinus muqueux.",
    "Citer des exemples représentatifs de glandes exocrines et endocrines.",
  ],
  sections: [
    {
      id: 'generalites',
      titre: 'Généralités et origine des glandes',
      blocs: [
        {
          type: 'definition',
          terme: 'Épithélium glandulaire',
          definition:
            "Épithélium spécialisé dans la fonction de sécrétion, c’est-à-dire l’élaboration et la libération d’un produit élaboré par la cellule, à destination du milieu extérieur, d’une cavité ou du milieu intérieur.",
        },
        {
          type: 'paragraphe',
          texte:
            "Les glandes dérivent embryologiquement d’un épithélium de revêtement, par prolifération et invagination dans le tissu conjonctif sous-jacent. Selon que le contact avec l’épithélium d’origine (et donc un canal excréteur) est conservé ou perdu, on distingue les glandes exocrines et les glandes endocrines.",
        },
        {
          type: 'comparaison',
          titre: 'Glande exocrine versus glande endocrine',
          gauche: {
            titre: 'Glande exocrine',
            points: [
              'Conserve un canal excréteur relié à la surface épithéliale d’origine',
              'Déverse son produit de sécrétion dans une cavité ou à la surface cutanée',
              'Exemples : glandes sudoripares, glandes salivaires, pancréas exocrine',
            ],
          },
          droite: {
            titre: 'Glande endocrine',
            points: [
              'Perd tout canal excréteur au cours du développement',
              'Déverse son produit directement dans le sang, via le tissu conjonctif richement vascularisé',
              'Exemples : thyroïde, surrénale, pancréas endocrine',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Glandes amphicrines',
          texte:
            "Certaines glandes possèdent une double fonction, exocrine et endocrine, au sein du même organe : c’est le cas du pancréas, dont les acini exocrines sécrètent le suc pancréatique tandis que les îlots de Langerhans assurent la fonction endocrine, ou du foie, dont les hépatocytes ont une fonction exocrine (bile) et une fonction endocrine (sécrétion de protéines plasmatiques dans le sang).",
        },
      ],
    },
    {
      id: 'modes-secretion',
      titre: 'Modes de sécrétion',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le mode de sécrétion décrit la manière dont le produit élaboré par la cellule est libéré hors de celle-ci. Trois modalités principales sont décrites, selon le devenir de la membrane et du cytoplasme apical de la cellule sécrétrice.",
        },
        {
          type: 'tableau',
          titre: 'Les trois modes de sécrétion',
          colonnes: ['Mode', 'Mécanisme', 'Conséquence pour la cellule', 'Exemple'],
          lignes: [
            [
              'Mérocrine (ou eccrine)',
              'Exocytose de vésicules de sécrétion par fusion avec la membrane apicale',
              'La cellule reste intacte, aucune perte de substance cytoplasmique',
              'Glandes salivaires, pancréas exocrine, glandes sudoripares eccrines',
            ],
            [
              'Apocrine',
              'Le produit de sécrétion s’accumule au pôle apical puis est libéré avec une fine bordure de cytoplasme entourée de membrane',
              'Perte d’une petite quantité de cytoplasme apical, cellule non détruite',
              'Glande mammaire (sécrétion lactée), glandes sudoripares apocrines axillaires',
            ],
            [
              'Holocrine',
              'La cellule entière, chargée de son produit de sécrétion, se désintègre et constitue elle-même la sécrétion',
              'Destruction complète de la cellule, qui doit être remplacée',
              'Glande sébacée',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le mode mérocrine est le plus fréquent',
          texte:
            "La grande majorité des glandes exocrines de l’organisme sécrètent selon le mode mérocrine. Les modes apocrine et holocrine sont des exceptions à retenir précisément par leurs exemples : glande mammaire pour l’apocrine, glande sébacée pour l’holocrine.",
        },
      ],
    },
    {
      id: 'classification-morphologique',
      titre: 'Classification morphologique des glandes exocrines',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les glandes exocrines sont classées selon deux critères indépendants : la forme de la portion sécrétrice, et la ramification du système de canaux excréteurs.",
        },
        {
          type: 'tableau',
          titre: 'Classification selon la forme de la portion sécrétrice',
          colonnes: ['Type', 'Description', 'Exemple'],
          lignes: [
            ['Tubuleuse', 'Portion sécrétrice en forme de tube, droit ou contourné', 'Glandes de Lieberkühn (intestin)'],
            ['Acineuse (ou alvéolaire)', 'Portion sécrétrice arrondie, en cul-de-sac, à lumière étroite', 'Glandes salivaires séreuses'],
            ['Tubulo-acineuse', 'Association d’une portion tubuleuse et d’une portion acineuse', 'Glandes salivaires mixtes (sous-maxillaire)'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Classification selon la ramification',
          colonnes: ['Type', 'Description', 'Exemple'],
          lignes: [
            ['Simple', 'Un seul canal excréteur non ramifié', 'Glandes sudoripares eccrines'],
            ['Composée (ramifiée)', 'Canal excréteur se divisant en plusieurs branches avant d’atteindre les portions sécrétrices', 'Glandes salivaires, pancréas exocrine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Combiner les deux critères',
          texte:
            "Une glande se décrit toujours en associant les deux classifications : par exemple, le pancréas exocrine est une glande acineuse composée, tandis que les glandes de Lieberkühn sont des glandes tubuleuses simples.",
        },
      ],
    },
    {
      id: 'acinus-canaux',
      titre: 'L’acinus glandulaire et les canaux excréteurs',
      blocs: [
        {
          type: 'definition',
          terme: 'Acinus',
          definition:
            "Unité sécrétrice de base d’une glande acineuse, formée d’un groupe de cellules sécrétrices disposées en cul-de-sac autour d’une lumière centrale étroite, reliée à un canal excréteur.",
        },
        {
          type: 'comparaison',
          titre: 'Acinus séreux versus acinus muqueux',
          gauche: {
            titre: 'Acinus séreux',
            points: [
              'Cellules à cytoplasme basophile, riche en grains de sécrétion protéique',
              'Noyau rond, plutôt central',
              'Sécrétion fluide, riche en enzymes (exemple : amylase salivaire)',
              'Exemple : glande parotide',
            ],
          },
          droite: {
            titre: 'Acinus muqueux',
            points: [
              'Cytoplasme clair, spumeux, riche en mucines glycoprotéiques',
              'Noyau aplati, refoulé à la base de la cellule',
              'Sécrétion visqueuse, lubrifiante',
              'Exemple : glandes sous-linguales',
            ],
          },
        },
        {
          type: 'paragraphe',
          texte:
            "Le canal excréteur conduit le produit de sécrétion depuis la portion sécrétrice jusqu’à la surface épithéliale. Il peut, selon les glandes, modifier la composition de la sécrétion primaire par réabsorption ou sécrétion d’électrolytes, comme c’est le cas dans les canaux striés des glandes salivaires ou dans les canaux des glandes sudoripares.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Mucoviscidose et sécrétion glandulaire',
          texte:
            "La mucoviscidose est due à une anomalie du gène CFTR, codant un canal chlore impliqué dans la régulation de la composition des sécrétions exocrines. Il en résulte des sécrétions anormalement visqueuses dans de nombreuses glandes exocrines, notamment respiratoires, pancréatiques et sudorales.",
        },
      ],
    },
    {
      id: 'glandes-endocrines',
      titre: 'Organisation des glandes endocrines',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les glandes endocrines n’ont pas de canal excréteur : leur produit de sécrétion, une hormone, diffuse directement dans le tissu conjonctif richement vascularisé qui les entoure, puis gagne la circulation sanguine générale pour agir à distance sur des organes cibles.",
        },
        {
          type: 'tableau',
          titre: 'Organisation architecturale des glandes endocrines',
          colonnes: ['Architecture', 'Description', 'Exemple'],
          lignes: [
            ['Cordonale', 'Cellules disposées en cordons ou travées, séparées par des capillaires sanguins', 'Corticosurrénale, parenchyme hépatique'],
            ['Folliculaire', 'Cellules disposées en sphère creuse entourant une substance colloïde de stockage', 'Thyroïde'],
            ['Cellules isolées ou en amas', 'Cellules endocrines dispersées, sans architecture organisée distincte', 'Îlots de Langerhans du pancréas'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Particularité de l’architecture folliculaire thyroïdienne',
          texte:
            "La thyroïde est la seule glande endocrine humaine à stocker son produit de sécrétion hors des cellules, dans la lumière du follicule, sous forme de colloïde riche en thyroglobuline, avant sa réabsorption et sa transformation en hormones thyroïdiennes actives.",
        },
      ],
    },
  ],
  pointsCles: [
    "Une glande exocrine conserve un canal excréteur ; une glande endocrine le perd et sécrète directement dans le sang.",
    "Trois modes de sécrétion existent : mérocrine (exocytose, majoritaire), apocrine (perte d’un peu de cytoplasme, exemple : glande mammaire) et holocrine (destruction cellulaire complète, exemple : glande sébacée).",
    "Les glandes exocrines se classent selon la forme de la portion sécrétrice (tubuleuse, acineuse, tubulo-acineuse) et la ramification du canal excréteur (simple ou composée).",
    "L’acinus séreux a un cytoplasme basophile et un noyau rond central ; l’acinus muqueux a un cytoplasme clair et un noyau basal aplati.",
    "Certaines glandes, comme le pancréas et le foie, sont amphicrines, à la fois exocrines et endocrines.",
    "Les glandes endocrines s’organisent en cordons, en follicules (thyroïde) ou en amas cellulaires isolés (îlots de Langerhans).",
    "Le canal excréteur peut modifier la composition ionique de la sécrétion primaire, comme dans les glandes sudoripares.",
  ],
  erreursFrequentes: [
    "Confondre mode apocrine et mode holocrine : l’apocrine ne détruit pas la cellule, l’holocrine la détruit entièrement.",
    "Croire que la majorité des glandes sécrètent selon le mode holocrine, alors que le mode mérocrine est très largement majoritaire.",
    "Oublier que le pancréas et le foie sont des organes amphicrines, à double fonction exocrine et endocrine.",
    "Confondre la classification par forme de la portion sécrétrice et celle par ramification du canal excréteur, qui sont deux critères distincts et complémentaires.",
    "Penser que toutes les glandes endocrines stockent leur hormone en dehors des cellules comme le fait la thyroïde : c’est une exception, la plupart stockent leurs hormones dans des vésicules intracellulaires.",
  ],
  mnemotechniques: [
    {
      moyen: 'MAH : Mérocrine, Apocrine, Holocrine, par fréquence décroissante',
      explication:
        'Retenir l’ordre approximatif de fréquence des trois modes de sécrétion, du plus courant (mérocrine) au plus rare et destructeur (holocrine).',
    },
    {
      moyen: 'Sébum et Sacrifice : la glande Sébacée est Holocrine',
      explication:
        'La glande sébacée, exemple classique du mode holocrine, sacrifie entièrement ses cellules pour produire le sébum.',
    },
    {
      moyen: 'Séreux Sombre au centre, Muqueux clair en Marge',
      explication:
        'L’acinus séreux a un cytoplasme sombre (basophile) et un noyau central ; l’acinus muqueux a un cytoplasme clair et un noyau refoulé en périphérie.',
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
      id: 'histo-epitheliums-glandulaires-fc-01',
      recto: 'Quelle est la différence fondamentale entre glande exocrine et glande endocrine ?',
      verso: 'La glande exocrine conserve un canal excréteur vers une surface ou une cavité ; la glande endocrine le perd et sécrète directement dans le sang.',
      type: 'definition',
      tags: ['exocrine', 'endocrine'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-02',
      recto: 'Décrire le mode de sécrétion mérocrine.',
      verso: 'Exocytose de vésicules de sécrétion par fusion avec la membrane apicale, sans destruction ni perte cytoplasmique pour la cellule.',
      type: 'mecanisme',
      tags: ['sécrétion'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-03',
      recto: 'Citer un exemple classique de sécrétion apocrine.',
      verso: 'La glande mammaire, lors de la sécrétion lactée.',
      type: 'classification',
      tags: ['sécrétion', 'apocrine'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-04',
      recto: 'Citer l’exemple classique de sécrétion holocrine.',
      verso: 'La glande sébacée, dont les cellules se désintègrent entièrement pour constituer le sébum.',
      type: 'classification',
      tags: ['sécrétion', 'holocrine'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-05',
      recto: 'Quels sont les deux critères de classification morphologique des glandes exocrines ?',
      verso: 'La forme de la portion sécrétrice (tubuleuse, acineuse, tubulo-acineuse) et la ramification du canal excréteur (simple ou composée).',
      type: 'classification',
      tags: ['classification'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-06',
      recto: 'Décrire les caractéristiques cytologiques de l’acinus séreux.',
      verso: 'Cytoplasme basophile riche en grains de sécrétion protéique, noyau rond central. Exemple : glande parotide.',
      type: 'classification',
      tags: ['acinus'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-07',
      recto: 'Décrire les caractéristiques cytologiques de l’acinus muqueux.',
      verso: 'Cytoplasme clair et spumeux, riche en mucines, noyau aplati refoulé à la base de la cellule.',
      type: 'classification',
      tags: ['acinus'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-08',
      recto: 'Qu’est-ce qu’une glande amphicrine ? Donner deux exemples.',
      verso: 'Une glande ayant à la fois une fonction exocrine et une fonction endocrine, comme le pancréas ou le foie.',
      type: 'definition',
      tags: ['amphicrine'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-09',
      recto: 'Quelle est l’architecture caractéristique de la thyroïde ?',
      verso: 'Une architecture folliculaire, avec des cellules formant une sphère creuse entourant un colloïde de stockage.',
      type: 'classification',
      tags: ['thyroïde', 'endocrine'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-10',
      recto: 'Comment sont organisées les cellules endocrines du pancréas ?',
      verso: 'En amas cellulaires isolés appelés îlots de Langerhans, dispersés au sein du tissu exocrine.',
      type: 'classification',
      tags: ['pancréas endocrine'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-11',
      recto: 'Quel gène est en cause dans la mucoviscidose et quel est son rôle ?',
      verso: 'Le gène CFTR, codant un canal chlore régulant la composition des sécrétions exocrines.',
      type: 'clinique',
      tags: ['mucoviscidose'],
    },
    {
      id: 'histo-epitheliums-glandulaires-fc-12',
      recto: 'Le pancréas exocrine est-il une glande simple ou composée, tubuleuse ou acineuse ?',
      verso: 'C’est une glande acineuse composée : la portion sécrétrice est acineuse et le canal excréteur est ramifié.',
      type: 'classification',
      tags: ['pancréas exocrine'],
    },
  ],
  qcm: [
    {
      id: 'histo-epitheliums-glandulaires-qcm-01',
      enonce: 'Concernant la distinction entre glandes exocrines et endocrines, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une glande exocrine possède un canal excréteur.',
          vraie: true,
          justification: 'Exact, c’est la caractéristique définissant la glande exocrine.',
        },
        {
          lettre: 'B',
          texte: 'Une glande endocrine déverse son produit directement dans une cavité digestive.',
          vraie: false,
          justification: 'Faux : elle le déverse dans le sang, via le tissu conjonctif vascularisé, et non dans une cavité.',
        },
        {
          lettre: 'C',
          texte: 'Le pancréas est un organe amphicrine.',
          vraie: true,
          justification: 'Exact : il possède une fonction exocrine (acini, suc pancréatique) et une fonction endocrine (îlots de Langerhans).',
        },
        {
          lettre: 'D',
          texte: 'Les glandes endocrines dérivent toujours du mésoderme.',
          vraie: false,
          justification: 'Faux : elles dérivent d’un épithélium de revêtement, quelle que soit sa couche embryonnaire d’origine.',
        },
        {
          lettre: 'E',
          texte: 'Le foie possède à la fois une fonction exocrine et une fonction endocrine.',
          vraie: true,
          justification: 'Exact : sécrétion biliaire exocrine et sécrétion de protéines plasmatiques endocrine.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir pancréas et foie comme organes amphicrines de référence.',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-glandulaires-qcm-02',
      enonce: 'Concernant les modes de sécrétion glandulaire, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le mode mérocrine repose sur une exocytose de vésicules de sécrétion.',
          vraie: true,
          justification: 'Exact, sans destruction ni perte de substance cellulaire.',
        },
        {
          lettre: 'B',
          texte: 'Le mode holocrine entraîne la destruction complète de la cellule sécrétrice.',
          vraie: true,
          justification: 'Exact, la cellule elle-même constitue le produit de sécrétion, comme dans la glande sébacée.',
        },
        {
          lettre: 'C',
          texte: 'Le mode apocrine est illustré par la sécrétion lactée de la glande mammaire.',
          vraie: true,
          justification: 'Exact, avec perte d’une fine bordure de cytoplasme apical.',
        },
        {
          lettre: 'D',
          texte: 'Le mode mérocrine est minoritaire parmi les glandes exocrines humaines.',
          vraie: false,
          justification: 'Faux : c’est au contraire le mode de sécrétion le plus fréquent.',
        },
        {
          lettre: 'E',
          texte: 'Dans le mode apocrine, la cellule doit être intégralement renouvelée après chaque sécrétion.',
          vraie: false,
          justification: 'Faux : seule une petite quantité de cytoplasme apical est perdue, la cellule n’est pas détruite.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Le mode mérocrine domine largement en fréquence sur l’apocrine et l’holocrine.',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-glandulaires-qcm-03',
      enonce: 'Concernant la classification morphologique des glandes exocrines, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une glande tubuleuse a une portion sécrétrice en forme de tube.',
          vraie: true,
          justification: 'Exact, par exemple les glandes de Lieberkühn.',
        },
        {
          lettre: 'B',
          texte: 'Une glande simple possède un canal excréteur ramifié.',
          vraie: false,
          justification: 'Faux : une glande simple possède un seul canal excréteur, non ramifié ; c’est la glande composée qui est ramifiée.',
        },
        {
          lettre: 'C',
          texte: 'Les glandes salivaires sous-maxillaires sont des glandes tubulo-acineuses.',
          vraie: true,
          justification: 'Exact, elles associent une portion tubuleuse et une portion acineuse.',
        },
        {
          lettre: 'D',
          texte: 'La forme de la portion sécrétrice et la ramification du canal sont un seul et même critère.',
          vraie: false,
          justification: 'Faux : ce sont deux critères indépendants, à associer pour décrire précisément une glande.',
        },
        {
          lettre: 'E',
          texte: 'Une glande acineuse a une portion sécrétrice arrondie à lumière étroite.',
          vraie: true,
          justification: 'Exact, c’est la définition morphologique de l’acinus.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Toujours distinguer forme de la portion sécrétrice et degré de ramification.',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-glandulaires-qcm-04',
      enonce: 'Concernant l’acinus séreux et l’acinus muqueux, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’acinus séreux a un cytoplasme basophile.',
          vraie: true,
          justification: 'Exact, en raison de sa richesse en grains de sécrétion protéique.',
        },
        {
          lettre: 'B',
          texte: 'L’acinus muqueux a un noyau rond et central.',
          vraie: false,
          justification: 'Faux : son noyau est aplati et refoulé à la base de la cellule, contrairement à l’acinus séreux.',
        },
        {
          lettre: 'C',
          texte: 'La parotide est un exemple de glande à sécrétion essentiellement séreuse.',
          vraie: true,
          justification: 'Exact, elle produit une salive fluide riche en amylase.',
        },
        {
          lettre: 'D',
          texte: 'La sécrétion muqueuse est plus fluide que la sécrétion séreuse.',
          vraie: false,
          justification: 'Faux : la sécrétion muqueuse est au contraire visqueuse et lubrifiante, la séreuse est plus fluide.',
        },
        {
          lettre: 'E',
          texte: 'Les glandes sous-linguales sont majoritairement à sécrétion muqueuse.',
          vraie: true,
          justification: 'Exact, contrairement à la parotide qui est séreuse.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir le contraste cytologique séreux (sombre, central) versus muqueux (clair, basal).',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-glandulaires-qcm-05',
      enonce: 'Concernant l’organisation des glandes endocrines, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La thyroïde a une organisation folliculaire avec un stockage extracellulaire du colloïde.',
          vraie: true,
          justification: 'Exact, c’est une particularité unique parmi les glandes endocrines humaines.',
        },
        {
          lettre: 'B',
          texte: 'La corticosurrénale présente une organisation cordonale.',
          vraie: true,
          justification: 'Exact, ses cellules sont disposées en cordons séparés par des capillaires.',
        },
        {
          lettre: 'C',
          texte: 'Les îlots de Langerhans forment un follicule à colloïde central.',
          vraie: false,
          justification: 'Faux : ils forment des amas cellulaires isolés, sans architecture folliculaire ni stockage colloïde.',
        },
        {
          lettre: 'D',
          texte: 'Les glandes endocrines sont richement vascularisées.',
          vraie: true,
          justification: 'Exact, ce qui est indispensable au passage direct de l’hormone dans le sang.',
        },
        {
          lettre: 'E',
          texte: 'Toutes les glandes endocrines stockent leur hormone hors des cellules, comme la thyroïde.',
          vraie: false,
          justification: 'Faux : la thyroïde est une exception ; la plupart des glandes endocrines stockent leur hormone dans des vésicules intracellulaires.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. La thyroïde reste l’exception à retenir pour le stockage extracellulaire.',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-glandulaires-qcm-06',
      enonce: 'Concernant les canaux excréteurs et une application clinique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le canal excréteur peut modifier la composition ionique de la sécrétion primaire.',
          vraie: true,
          justification: 'Exact, comme dans les canaux striés des glandes salivaires ou les glandes sudoripares.',
        },
        {
          lettre: 'B',
          texte: 'La mucoviscidose est liée à une anomalie du gène CFTR, codant un canal chlore.',
          vraie: true,
          justification: 'Exact, entraînant des sécrétions exocrines anormalement visqueuses.',
        },
        {
          lettre: 'C',
          texte: 'La mucoviscidose n’affecte que les glandes endocrines.',
          vraie: false,
          justification: 'Faux : elle affecte les glandes exocrines, notamment respiratoires, pancréatiques et sudorales.',
        },
        {
          lettre: 'D',
          texte: 'Une glande endocrine possède, comme une glande exocrine, un canal excréteur.',
          vraie: false,
          justification: 'Faux : la glande endocrine est précisément définie par l’absence de canal excréteur.',
        },
        {
          lettre: 'E',
          texte: 'La composition de la sécrétion glandulaire peut être modifiée après sa production initiale.',
          vraie: true,
          justification: 'Exact, notamment par réabsorption ou sécrétion d’électrolytes lors du passage dans le canal excréteur.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. La mucoviscidose illustre bien l’importance fonctionnelle du canal excréteur.',
      difficulte: 2,
    },
  ],
};
