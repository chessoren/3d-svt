import type { Fiche } from '../../types';

export const ficheDeuxiemeSemaine: Fiche = {
  id: 'embryo-deuxieme-semaine',
  ue: 'embryo',
  titre: 'La deuxième semaine : implantation et disque didermique',
  sousTitre: 'De la différenciation du trophoblaste au disque à deux feuillets',
  chapitre: 'Développement embryonnaire',
  ordre: 6,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'cytotrophoblaste',
    'syncytiotrophoblaste',
    'épiblaste',
    'hypoblaste',
    'cavité amniotique',
    'vésicule vitelline',
    'lacunes trophoblastiques',
    'hCG',
  ],
  objectifs: [
    "Décrire la différenciation du trophoblaste en cytotrophoblaste et syncytiotrophoblaste.",
    "Expliquer la formation du disque embryonnaire didermique, épiblaste et hypoblaste.",
    "Décrire l’apparition de la cavité amniotique et de la vésicule vitelline.",
    "Expliquer la formation des lacunes trophoblastiques et l’ébauche de la circulation utéroplacentaire.",
    "Situer le rôle de l’hCG au cours de la deuxième semaine.",
  ],
  sections: [
    {
      id: 'differenciation-trophoblaste',
      titre: 'Différenciation du trophoblaste',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Dès le début de l’implantation, vers le 7e jour de développement, le trophoblaste se différencie en deux couches distinctes au niveau du pôle embryonnaire : une couche interne, le cytotrophoblaste, et une couche externe, le syncytiotrophoblaste.",
        },
        {
          type: 'comparaison',
          titre: 'Cytotrophoblaste et syncytiotrophoblaste',
          gauche: {
            titre: 'Cytotrophoblaste',
            points: [
              'Couche interne, au contact de l’embryoblaste',
              'Cellules mononucléées, bien individualisées',
              'Cellules mitotiquement actives',
              'Alimente le syncytiotrophoblaste en nouvelles cellules par fusion',
            ],
          },
          droite: {
            titre: 'Syncytiotrophoblaste',
            points: [
              'Couche externe, au contact direct de l’endomètre',
              'Masse plurinucléée sans limites cellulaires individualisées',
              'Envahissant, érode activement l’épithélium et le stroma utérins',
              'Sécrète l’hCG (gonadotrophine chorionique humaine)',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le cytotrophoblaste ne se divise pas indéfiniment sans limite',
          texte:
            "Un piège classique consiste à croire que c’est le syncytiotrophoblaste qui se divise : en réalité, seules les cellules mononucléées du cytotrophoblaste sont mitotiques ; elles fusionnent ensuite pour alimenter la masse plurinucléée non mitotique du syncytiotrophoblaste.",
        },
      ],
    },
    {
      id: 'disque-didermique',
      titre: 'Formation du disque embryonnaire didermique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Parallèlement, l’embryoblaste se différencie en deux feuillets accolés, constituant le disque embryonnaire didermique : l’épiblaste, couche haute de cellules cylindriques, au contact du futur amnios, et l’hypoblaste, couche basse de cellules cuboïdes, au contact de la cavité blastocystique.",
        },
        {
          type: 'tableau',
          titre: 'Les deux feuillets du disque didermique',
          colonnes: ['Feuillet', 'Position', 'Devenir principal ultérieur'],
          lignes: [
            ['Épiblaste', 'Feuillet dorsal, au contact de la cavité amniotique naissante', 'Donnera, après la gastrulation, les trois feuillets définitifs'],
            ['Hypoblaste', 'Feuillet ventral, au contact de la cavité exocoelomique', 'Contribue à la formation de la paroi de la vésicule vitelline'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'L’épiblaste, feuillet pluripotent central',
          texte:
            "C’est l’épiblaste, et non l’hypoblaste, qui est à l’origine de la quasi-totalité des tissus embryonnaires définitifs lors de la gastrulation de la troisième semaine : l’hypoblaste est largement remplacé par de l’endoderme d’origine épiblastique au cours de ce processus.",
        },
      ],
    },
    {
      id: 'cavites-annexielles',
      titre: 'Apparition des cavités annexielles',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La deuxième semaine voit apparaître les premières cavités qui organiseront l’espace autour de l’embryon. Une petite cavité se creuse au sein de l’épiblaste, bordée par des cellules aplaties issues de l’épiblaste, les amnioblastes : c’est l’ébauche de la cavité amniotique, vers le 8e jour de développement.",
        },
        {
          type: 'etapes',
          titre: 'Mise en place des cavités et des vésicules',
          etapes: [
            {
              titre: 'Cavité amniotique',
              detail:
                'Apparaît au sein de l’épiblaste dès le 8e jour, bordée par les amnioblastes ; elle contiendra le liquide amniotique.',
            },
            {
              titre: 'Vésicule vitelline primitive (ou exocoelomique)',
              detail:
                'Se forme par migration de cellules issues de l’hypoblaste, qui tapissent la face interne du cytotrophoblaste vers le 9e jour.',
            },
            {
              titre: 'Vésicule vitelline secondaire (ou définitive)',
              detail:
                'Se constitue vers le 12e jour par un remaniement qui réduit la taille de la vésicule primitive, dont une partie se détache sous forme de kystes exocoelomiques.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Repère utile en imagerie',
          texte:
            "La vésicule vitelline secondaire est une structure repérable en échographie précoce du premier trimestre, dont la visualisation normale, avant celle de l’embryon lui-même, témoigne d’une grossesse intra-utérine évolutive.",
        },
      ],
    },
    {
      id: 'lacunes-circulation',
      titre: 'Lacunes trophoblastiques et ébauche de circulation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Vers le 9e jour de développement, de petites cavités, les lacunes trophoblastiques, apparaissent au sein du syncytiotrophoblaste. En érodant les capillaires et les glandes de l’endomètre maternel, le syncytiotrophoblaste permet à ces lacunes de se remplir de sang maternel et de sécrétions glandulaires, entre le 11e et le 12e jour.",
        },
        {
          type: 'paragraphe',
          texte:
            "Cette circulation lacunaire, encore rudimentaire, constitue l’ébauche de la future circulation utéroplacentaire, qui deviendra pleinement fonctionnelle avec l’organisation des villosités choriales lors de la troisième semaine.",
        },
        {
          type: 'tableau',
          titre: 'Mésoderme extra-embryonnaire et cœlome externe',
          colonnes: ['Événement', 'Délai approximatif', 'Conséquence'],
          lignes: [
            ['Apparition du mésoderme extra-embryonnaire', 'J12-J13', 'Tissu conjonctif lâche entourant amnios et vésicule vitelline'],
            ['Creusement du cœlome extra-embryonnaire (cavité chorionique)', 'J13', 'Sépare le mésoderme somatique (contre le trophoblaste) du mésoderme splanchnique (contre l’amnios et la vésicule vitelline)'],
            ['Persistance d’un pédicule de fixation', 'Fin de la 2e semaine', 'Relie le disque embryonnaire au trophoblaste ; deviendra le cordon ombilical'],
          ],
        },
      ],
    },
    {
      id: 'hcg-et-cloture',
      titre: 'Rôle de l’hCG et clôture de la deuxième semaine',
      blocs: [
        {
          type: 'definition',
          terme: 'hCG (gonadotrophine chorionique humaine)',
          definition:
            "Hormone glycoprotéique sécrétée par le syncytiotrophoblaste dès l’implantation, structurellement apparentée à la LH. Elle maintient le corps jaune, empêchant sa régression, et assure ainsi la poursuite de la sécrétion de progestérone indispensable au maintien de l’endomètre gravide.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Un dosage précoce et sensible',
          texte:
            "L’hCG devient détectable dans le sang maternel dès les tout premiers jours suivant l’implantation, ce qui en fait le marqueur biologique de référence des tests de grossesse, urinaires ou sanguins.",
        },
        {
          type: 'paragraphe',
          texte:
            "À la fin de la deuxième semaine, le disque embryonnaire didermique s’épaissit localement à son extrémité céphalique, où apparaît la plaque préchordale, amas de cellules endodermiques fermement accolées à l’épiblaste : elle annonce la mise en place de la ligne primitive et le début de la gastrulation, au cours de la troisième semaine.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: '« La semaine des deux »',
          texte:
            "La deuxième semaine est parfois résumée par la règle mnémotechnique de la semaine des deux : deux feuillets (épiblaste, hypoblaste), deux couches trophoblastiques (cyto-, syncytiotrophoblaste), deux cavités (amniotique, vitelline) et deux composantes du mésoderme extra-embryonnaire (somatique, splanchnique).",
        },
      ],
    },
  ],
  pointsCles: [
    "Le trophoblaste se différencie en cytotrophoblaste (interne, mitotique) et syncytiotrophoblaste (externe, plurinucléé, envahissant).",
    "L’embryoblaste se différencie en disque didermique : épiblaste (dorsal) et hypoblaste (ventral).",
    "La cavité amniotique apparaît au sein de l’épiblaste dès le 8e jour de développement.",
    "La vésicule vitelline secondaire se constitue vers le 12e jour, après une vésicule primitive transitoire.",
    "Les lacunes trophoblastiques se remplissent de sang maternel entre le 11e et le 12e jour, ébauchant la circulation utéroplacentaire.",
    "Le syncytiotrophoblaste sécrète l’hCG, qui maintient le corps jaune et fonde le diagnostic biologique de grossesse.",
    "Le pédicule de fixation, apparu en fin de deuxième semaine, deviendra le cordon ombilical.",
  ],
  erreursFrequentes: [
    "Croire que le syncytiotrophoblaste se divise activement : ce sont les cellules mononucléées du cytotrophoblaste qui sont mitotiques.",
    "Inverser épiblaste et hypoblaste : l’épiblaste est dorsal, au contact de l’amnios naissant ; l’hypoblaste est ventral, au contact de la vésicule vitelline.",
    "Penser que la vésicule vitelline secondaire est la première à apparaître : elle succède à une vésicule vitelline primitive, transitoire.",
    "Oublier que l’hCG est structurellement apparentée à la LH, ce qui explique son action sur le corps jaune.",
    "Croire que les villosités choriales sont déjà fonctionnelles à la fin de la deuxième semaine : seules des lacunes trophoblastiques rudimentaires existent à ce stade.",
  ],
  mnemotechniques: [
    {
      moyen: 'Cyto = cellules individualisées, Syncytio = syncytium sans limites',
      explication:
        'La racine « cyto » rappelle des cellules bien individualisées et mitotiques, la racine « syncytio » rappelle une masse plurinucléée fusionnée, non mitotique.',
    },
    {
      moyen: '« Épi » en haut, comme épiderme',
      explication:
        'L’épiblaste est le feuillet dorsal, haut, au contact du futur amnios, comme l’épiderme est la couche superficielle de la peau.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-deuxieme-semaine-fc-01',
      recto: 'En quelles deux couches se différencie le trophoblaste ?',
      verso: 'Le cytotrophoblaste (interne, mitotique) et le syncytiotrophoblaste (externe, plurinucléé).',
      type: 'classification',
      tags: ['trophoblaste'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-02',
      recto: 'Quelle couche trophoblastique sécrète l’hCG ?',
      verso: 'Le syncytiotrophoblaste.',
      type: 'mecanisme',
      tags: ['hCG', 'syncytiotrophoblaste'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-03',
      recto: 'Quelles sont les deux couches du disque embryonnaire didermique ?',
      verso: 'L’épiblaste (dorsal) et l’hypoblaste (ventral).',
      type: 'classification',
      tags: ['disque didermique'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-04',
      recto: 'Quel feuillet donnera la quasi-totalité des tissus définitifs lors de la gastrulation ?',
      verso: 'L’épiblaste.',
      type: 'mecanisme',
      tags: ['épiblaste'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-05',
      recto: 'Où apparaît la cavité amniotique et vers quel jour ?',
      verso: 'Au sein de l’épiblaste, vers le 8e jour de développement.',
      type: 'chiffre',
      tags: ['cavité amniotique'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-06',
      recto: 'Quelle est la différence entre vésicule vitelline primitive et secondaire ?',
      verso: 'La vésicule primitive, transitoire, apparaît la première (vers J9) ; la vésicule secondaire, définitive, se constitue vers le 12e jour après remaniement.',
      type: 'definition',
      tags: ['vésicule vitelline'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-07',
      recto: 'Que sont les lacunes trophoblastiques et quand apparaissent-elles ?',
      verso: 'De petites cavités au sein du syncytiotrophoblaste, apparaissant vers le 9e jour, qui se remplissent de sang maternel vers J11-J12.',
      type: 'mecanisme',
      tags: ['lacunes trophoblastiques'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-08',
      recto: 'Quel rôle joue l’hCG sur le corps jaune ?',
      verso: 'Elle le maintient et le stimule, empêchant sa régression, assurant la poursuite de la sécrétion de progestérone.',
      type: 'mecanisme',
      tags: ['hCG', 'corps jaune'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-09',
      recto: 'Que deviendra le pédicule de fixation apparu en fin de deuxième semaine ?',
      verso: 'Le futur cordon ombilical.',
      type: 'mecanisme',
      tags: ['pédicule de fixation'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-10',
      recto: 'Qu’est-ce que la plaque préchordale ?',
      verso: 'Un amas de cellules endodermiques fermement accolées à l’épiblaste, à l’extrémité céphalique du disque, qui annonce la gastrulation.',
      type: 'definition',
      tags: ['plaque préchordale'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-11',
      recto: 'Quand le cœlome extra-embryonnaire se creuse-t-il ?',
      verso: 'Vers le 13e jour de développement, au sein du mésoderme extra-embryonnaire.',
      type: 'chiffre',
      tags: ['cœlome extra-embryonnaire'],
    },
    {
      id: 'embryo-deuxieme-semaine-fc-12',
      recto: 'Pourquoi l’hCG est-elle utilisée pour le diagnostic biologique de grossesse ?',
      verso: 'Parce qu’elle est sécrétée précocement et spécifiquement par le trophoblaste dès l’implantation, et détectable dans le sang et les urines maternels.',
      type: 'clinique',
      tags: ['hCG', 'diagnostic de grossesse'],
    },
  ],
  qcm: [
    {
      id: 'embryo-deuxieme-semaine-qcm-01',
      enonce: 'Concernant la différenciation du trophoblaste, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le cytotrophoblaste est la couche externe du trophoblaste.', vraie: false, justification: 'C’est le syncytiotrophoblaste qui est externe ; le cytotrophoblaste est la couche interne.' },
        { lettre: 'B', texte: 'Le cytotrophoblaste est constitué de cellules mononucléées mitotiques.', vraie: true, justification: 'Exact, ces cellules alimentent le syncytiotrophoblaste par fusion.' },
        { lettre: 'C', texte: 'Le syncytiotrophoblaste est un syncytium plurinucléé.', vraie: true, justification: 'Exact, sans limites cellulaires individualisées.' },
        { lettre: 'D', texte: 'Le syncytiotrophoblaste sécrète l’hCG.', vraie: true, justification: 'Exact, c’est le site principal de sa production.' },
        { lettre: 'E', texte: 'Le syncytiotrophoblaste est mitotiquement actif.', vraie: false, justification: 'C’est le cytotrophoblaste qui est mitotique ; le syncytiotrophoblaste se forme par fusion cellulaire.' },
      ],
      correction: 'Réponses exactes : B, C et D. Retenir que seul le cytotrophoblaste se divise, le syncytiotrophoblaste étant issu de sa fusion.',
      difficulte: 2,
    },
    {
      id: 'embryo-deuxieme-semaine-qcm-02',
      enonce: 'Concernant le disque embryonnaire didermique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’épiblaste est le feuillet ventral du disque.', vraie: false, justification: 'L’épiblaste est le feuillet dorsal ; l’hypoblaste est ventral.' },
        { lettre: 'B', texte: 'L’hypoblaste est au contact de la cavité exocoelomique.', vraie: true, justification: 'Exact, il tapisse ensuite la vésicule vitelline.' },
        { lettre: 'C', texte: 'L’épiblaste est à l’origine des trois feuillets définitifs lors de la gastrulation.', vraie: true, justification: 'Exact, c’est le feuillet pluripotent central de la troisième semaine.' },
        { lettre: 'D', texte: 'Le disque didermique apparaît dès la fécondation.', vraie: false, justification: 'Il apparaît au cours de la deuxième semaine, par différenciation de l’embryoblaste.' },
        { lettre: 'E', texte: 'L’épiblaste borde la cavité amniotique naissante.', vraie: true, justification: 'Exact, les amnioblastes qui bordent cette cavité dérivent de l’épiblaste.' },
      ],
      correction: 'Réponses exactes : B, C et E. L’épiblaste est le feuillet clé, dorsal et pluripotent.',
      difficulte: 2,
    },
    {
      id: 'embryo-deuxieme-semaine-qcm-03',
      enonce: 'Concernant les cavités et vésicules de la deuxième semaine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La cavité amniotique apparaît avant la vésicule vitelline primitive.', vraie: false, justification: 'Elles apparaissent presque simultanément, mais la vésicule vitelline primitive (J9) suit de très près la cavité amniotique (J8) ; en tout état de cause la cavité amniotique n’apparaît pas après la vésicule vitelline secondaire, qui est bien plus tardive.' },
        { lettre: 'B', texte: 'La vésicule vitelline secondaire se forme après remaniement de la vésicule primitive.', vraie: true, justification: 'Exact, vers le 12e jour.' },
        { lettre: 'C', texte: 'Les amnioblastes dérivent de l’hypoblaste.', vraie: false, justification: 'Les amnioblastes dérivent de l’épiblaste, non de l’hypoblaste.' },
        { lettre: 'D', texte: 'La vésicule vitelline participe à la nutrition transitoire de l’embryon.', vraie: true, justification: 'Exact, c’est l’un de ses rôles avant l’établissement de la circulation utéroplacentaire.' },
        { lettre: 'E', texte: 'Le blastocèle et la cavité amniotique désignent la même structure.', vraie: false, justification: 'Ce sont deux cavités distinctes : le blastocèle est antérieur et transitoire, la cavité amniotique apparaît ensuite au sein de l’épiblaste.' },
      ],
      correction: 'Réponses exactes : B et D. Bien distinguer les origines cellulaires respectives des amnioblastes et de la paroi vitelline.',
      difficulte: 3,
    },
    {
      id: 'embryo-deuxieme-semaine-qcm-04',
      enonce: 'Concernant les lacunes trophoblastiques et la circulation utéroplacentaire précoce, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les lacunes trophoblastiques apparaissent au sein du syncytiotrophoblaste.', vraie: true, justification: 'Exact, vers le 9e jour de développement.' },
        { lettre: 'B', texte: 'Elles se remplissent de sang maternel entre le 11e et le 12e jour.', vraie: true, justification: 'Exact, par érosion des capillaires et glandes de l’endomètre.' },
        { lettre: 'C', texte: 'Cette circulation lacunaire correspond déjà à des villosités choriales matures.', vraie: false, justification: 'Il s’agit d’une ébauche rudimentaire ; les villosités choriales s’organisent à partir de la troisième semaine.' },
        { lettre: 'D', texte: 'Le mésoderme extra-embryonnaire apparaît avant les lacunes trophoblastiques.', vraie: false, justification: 'Le mésoderme extra-embryonnaire apparaît plus tardivement, vers J12-J13, après les lacunes trophoblastiques (J9).' },
        { lettre: 'E', texte: 'Le cœlome extra-embryonnaire sépare un mésoderme somatique d’un mésoderme splanchnique.', vraie: true, justification: 'Exact, cette cavité clive le mésoderme extra-embryonnaire en deux feuillets.' },
      ],
      correction: 'Réponses exactes : A, B et E. Retenir la chronologie : lacunes (J9), remplissage sanguin (J11-J12), mésoderme extra-embryonnaire (J12-13), cœlome (J13).',
      difficulte: 3,
    },
    {
      id: 'embryo-deuxieme-semaine-qcm-05',
      enonce: 'Concernant l’hCG, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est sécrétée par le cytotrophoblaste.', vraie: false, justification: 'Elle est sécrétée par le syncytiotrophoblaste.' },
        { lettre: 'B', texte: 'Elle est structurellement apparentée à la LH.', vraie: true, justification: 'Exact, elles partagent la même sous-unité alpha et des sous-unités bêta apparentées.' },
        { lettre: 'C', texte: 'Elle provoque la régression du corps jaune.', vraie: false, justification: 'Elle empêche au contraire la régression du corps jaune, en le maintenant fonctionnel.' },
        { lettre: 'D', texte: 'Elle est le marqueur biologique de référence des tests de grossesse.', vraie: true, justification: 'Exact, en raison de sa sécrétion précoce et spécifique.' },
        { lettre: 'E', texte: 'Sa sécrétion débute seulement après la troisième semaine de développement.', vraie: false, justification: 'Sa sécrétion débute dès l’implantation, au cours de la deuxième semaine.' },
      ],
      correction: 'Réponses exactes : B et D. L’hCG, sécrétée précocement par le syncytiotrophoblaste, maintient le corps jaune.',
      difficulte: 2,
    },
    {
      id: 'embryo-deuxieme-semaine-qcm-06',
      enonce: 'Concernant la fin de la deuxième semaine et la transition vers la gastrulation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La plaque préchordale apparaît à l’extrémité céphalique du disque didermique.', vraie: true, justification: 'Exact, elle annonce le futur pôle céphalique.' },
        { lettre: 'B', texte: 'Le pédicule de fixation relie le disque embryonnaire au trophoblaste.', vraie: true, justification: 'Exact, il deviendra le cordon ombilical.' },
        { lettre: 'C', texte: 'La ligne primitive est déjà bien individualisée à la fin de la deuxième semaine.', vraie: false, justification: 'La ligne primitive apparaît au début de la troisième semaine, non à la fin de la deuxième.' },
        { lettre: 'D', texte: 'La gastrulation débute avant la fin de la deuxième semaine.', vraie: false, justification: 'La gastrulation débute au cours de la troisième semaine, après la fin de la deuxième.' },
        { lettre: 'E', texte: 'La plaque préchordale est constituée de cellules endodermiques accolées à l’épiblaste.', vraie: true, justification: 'Exact, c’est sa définition histologique classique.' },
      ],
      correction: 'Réponses exactes : A, B et E. La deuxième semaine se clôt sans ligne primitive constituée, qui appartient à la troisième semaine.',
      difficulte: 2,
    },
  ],
};
