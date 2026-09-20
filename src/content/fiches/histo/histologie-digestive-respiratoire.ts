import type { Fiche } from '../../types';

export const ficheHistologieDigestiveRespiratoire: Fiche = {
  id: 'histo-histologie-digestive-respiratoire',
  ue: 'histo',
  titre: 'Histologie des appareils digestif et respiratoire',
  sousTitre: 'Les quatre tuniques du tube digestif, glandes annexes, voies aériennes et alvéole pulmonaire',
  chapitre: 'Histologie des appareils',
  ordre: 10,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'muqueuse digestive',
    'villosité intestinale',
    'crypte de Lieberkühn',
    'hépatocyte',
    'îlot de Langerhans',
    'épithélium respiratoire',
    'alvéole pulmonaire',
    'pneumocyte',
  ],
  objectifs: [
    "Décrire l’organisation générale en quatre tuniques du tube digestif.",
    "Décrire les particularités histologiques de l’œsophage, de l’estomac, de l’intestin grêle et du côlon.",
    "Décrire l’organisation histologique du foie et du pancréas exocrine et endocrine.",
    "Décrire l’épithélium des voies aériennes et sa spécialisation le long de l’arbre respiratoire.",
    "Décrire la structure de l’alvéole pulmonaire et la barrière air-sang.",
  ],
  sections: [
    {
      id: 'organisation-generale-tube-digestif',
      titre: 'Organisation générale du tube digestif',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "De l’œsophage au canal anal, le tube digestif présente une organisation commune en quatre tuniques concentriques, dont la structure fine varie selon le segment considéré et la fonction locale.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre tuniques du tube digestif',
          colonnes: ['Tunique', 'Composition', 'Particularité'],
          lignes: [
            ['Muqueuse', 'Épithélium de revêtement, chorion conjonctif, musculaire muqueuse', 'Varie fortement selon le segment (fonction de protection, sécrétion ou absorption)'],
            ['Sous-muqueuse', 'Tissu conjonctif dense, vaisseaux, plexus nerveux sous-muqueux (de Meissner)', 'Peut contenir des glandes (exemple : glandes de Brunner du duodénum)'],
            ['Musculeuse', 'Couche circulaire interne et couche longitudinale externe de muscle lisse, plexus nerveux myentérique (d’Auerbach)', 'Assure le péristaltisme'],
            ['Séreuse ou adventice', 'Tissu conjonctif recouvert de mésothélium (séreuse) ou non (adventice)', 'Séreuse pour les segments intrapéritonéaux, adventice pour les segments rétropéritonéaux'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Deux plexus nerveux intrinsèques',
          texte:
            "Le système nerveux entérique comporte deux plexus principaux : le plexus sous-muqueux de Meissner, qui régule surtout les sécrétions, et le plexus myentérique d’Auerbach, situé entre les deux couches musculaires, qui régule surtout la motricité.",
        },
      ],
    },
    {
      id: 'segments-specifiques',
      titre: 'Spécificités segmentaires du tube digestif',
      blocs: [
        {
          type: 'tableau',
          titre: 'Épithélium de revêtement selon le segment',
          colonnes: ['Segment', 'Type d’épithélium', 'Particularité fonctionnelle'],
          lignes: [
            ['Œsophage', 'Pavimenteux stratifié non kératinisé', 'Protection mécanique lors du transit du bol alimentaire'],
            ['Estomac', 'Prismatique simple, glandes gastriques tubuleuses', 'Sécrétion d’acide chlorhydrique (cellules bordantes) et de pepsinogène (cellules principales)'],
            ['Intestin grêle', 'Prismatique simple à bordure en brosse, villosités et cryptes de Lieberkühn', 'Digestion terminale et absorption des nutriments'],
            ['Côlon', 'Prismatique simple, cryptes de Lieberkühn sans villosités, nombreuses cellules caliciformes', 'Absorption d’eau et d’électrolytes, formation des selles'],
          ],
        },
        {
          type: 'definition',
          terme: 'Villosité intestinale',
          definition:
            "Expansion digitiforme de la muqueuse de l’intestin grêle, tapissée d’entérocytes à bordure en brosse et de cellules caliciformes, qui augmente considérablement la surface d’absorption.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Villosités et cryptes : ne pas confondre',
          texte:
            "Les villosités sont des expansions de la muqueuse propres à l’intestin grêle, absentes du côlon. Les cryptes de Lieberkühn, en revanche, sont présentes tout au long de l’intestin grêle et du côlon ; elles contiennent les cellules souches assurant le renouvellement épithélial.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La cellule caliciforme',
          texte:
            "La cellule caliciforme, dispersée parmi les entérocytes, sécrète du mucus selon un mode mérocrine, protégeant la muqueuse ; elle est particulièrement abondante dans le côlon, où sa proportion augmente par rapport à l’intestin grêle.",
        },
      ],
    },
    {
      id: 'foie-pancreas',
      titre: 'Le foie et le pancréas',
      blocs: [
        {
          type: 'definition',
          terme: 'Lobule hépatique classique',
          definition:
            "Unité structurale du foie, de forme hexagonale, organisée autour d’une veine centrolobulaire, avec des travées d’hépatocytes disposées en rayons convergeant vers cette veine, et des espaces portes à chaque angle du lobule.",
        },
        {
          type: 'tableau',
          titre: 'Éléments de l’espace porte',
          colonnes: ['Élément', 'Fonction'],
          lignes: [
            ['Branche de l’artère hépatique', 'Apport sanguin oxygéné au parenchyme hépatique'],
            ['Branche de la veine porte', 'Apport sanguin riche en nutriments issus de l’absorption digestive'],
            ['Canal biliaire interlobulaire', 'Collecte de la bile sécrétée par les hépatocytes'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "L’hépatocyte est une cellule amphicrine : sa fonction exocrine correspond à la sécrétion biliaire, déversée dans les canalicules biliaires entre hépatocytes voisins, tandis que sa fonction endocrine correspond à la sécrétion de nombreuses protéines plasmatiques directement dans le sang sinusoïde.",
        },
        {
          type: 'comparaison',
          titre: 'Pancréas exocrine versus pancréas endocrine',
          gauche: {
            titre: 'Pancréas exocrine',
            points: [
              'Organisation en acini séreux, glande acineuse composée',
              'Sécrétion d’enzymes digestives dans le suc pancréatique',
              'Représente la grande majorité du volume pancréatique',
            ],
          },
          droite: {
            titre: 'Pancréas endocrine',
            points: [
              'Organisation en îlots de Langerhans, amas cellulaires dispersés',
              'Sécrétion d’insuline (cellules bêta) et de glucagon (cellules alpha) dans le sang',
              'Représente une faible proportion du volume pancréatique',
            ],
          },
        },
      ],
    },
    {
      id: 'voies-aeriennes',
      titre: 'Les voies aériennes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’épithélium respiratoire se modifie progressivement le long de l’arbre aérien, depuis la trachée jusqu’aux bronchioles terminales, en même temps que le calibre des voies diminue et que le tissu cartilagineux et glandulaire régresse.",
        },
        {
          type: 'tableau',
          titre: 'Évolution de l’épithélium respiratoire',
          colonnes: ['Segment', 'Type d’épithélium', 'Particularité'],
          lignes: [
            ['Trachée, bronches principales', 'Pseudostratifié cilié à cellules caliciformes', 'Anneaux ou plaques de cartilage hyalin dans la paroi, glandes séromuqueuses sous-muqueuses'],
            ['Bronches de petit calibre', 'Prismatique simple cilié', 'Diminution progressive du cartilage et des glandes'],
            ['Bronchioles', 'Cubique cilié', 'Absence de cartilage, présence de cellules de Clara (club cells)'],
            ['Bronchioles terminales et respiratoires', 'Cubique bas, peu ou pas cilié', 'Transition vers les canaux et sacs alvéolaires'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Une règle de décroissance progressive',
          texte:
            "En descendant l’arbre respiratoire, retenir la décroissance progressive et parallèle de quatre éléments : la hauteur des cellules épithéliales, la présence de cils, la quantité de cartilage et le nombre de glandes séromuqueuses.",
        },
      ],
    },
    {
      id: 'alveole-pulmonaire',
      titre: 'L’alvéole pulmonaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Alvéole pulmonaire',
          definition:
            "Structure sacciforme terminale de l’arbre respiratoire, site des échanges gazeux entre l’air alvéolaire et le sang capillaire, tapissée par un épithélium alvéolaire très fin composé de deux types de pneumocytes.",
        },
        {
          type: 'tableau',
          titre: 'Les cellules de l’épithélium alvéolaire',
          colonnes: ['Cellule', 'Proportion de la surface alvéolaire', 'Fonction'],
          lignes: [
            ['Pneumocyte de type I', 'Majoritaire (environ 95 %)', 'Cellule pavimenteuse très fine, site principal des échanges gazeux'],
            ['Pneumocyte de type II', 'Minoritaire en surface, mais plus nombreux numériquement', 'Cellule cubique sécrétant le surfactant pulmonaire, capable de se différencier en pneumocyte de type I'],
          ],
        },
        {
          type: 'definition',
          terme: 'Barrière air-sang',
          definition:
            "Interface très fine séparant l’air alvéolaire du sang capillaire, formée par la superposition du pneumocyte de type I, de la lame basale commune fusionnée, et de la cellule endothéliale du capillaire pulmonaire, permettant une diffusion rapide de l’oxygène et du dioxyde de carbone.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le surfactant et la maladie des membranes hyalines',
          texte:
            "Le surfactant, sécrété par les pneumocytes de type II, réduit la tension superficielle alvéolaire et empêche le collapsus des alvéoles en fin d’expiration. Son déficit, fréquent chez le grand prématuré dont les pneumocytes de type II sont encore immatures, est responsable de la maladie des membranes hyalines.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Macrophage alvéolaire',
          texte:
            "Le macrophage alvéolaire, cellule libre présente dans la lumière alvéolaire, assure la phagocytose des particules inhalées et des micro-organismes, jouant un rôle essentiel de défense de première ligne du poumon profond.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le tube digestif comporte quatre tuniques : muqueuse, sous-muqueuse, musculeuse et séreuse ou adventice.",
    "L’estomac a un épithélium prismatique simple avec des glandes gastriques ; l’intestin grêle présente villosités et cryptes de Lieberkühn ; le côlon n’a que des cryptes, sans villosités.",
    "Le lobule hépatique classique est organisé autour d’une veine centrolobulaire, avec des espaces portes à sa périphérie (artère hépatique, veine porte, canal biliaire).",
    "Le pancréas est amphicrine : acini séreux exocrines majoritaires, îlots de Langerhans endocrines minoritaires (insuline, glucagon).",
    "L’épithélium respiratoire passe progressivement de pseudostratifié cilié (trachée) à cubique peu cilié (bronchioles terminales), avec régression du cartilage et des glandes.",
    "L’alvéole pulmonaire est tapissée par les pneumocytes de type I (échanges gazeux) et de type II (sécrétion du surfactant).",
    "La barrière air-sang associe pneumocyte de type I, lame basale fusionnée et cellule endothéliale capillaire.",
  ],
  erreursFrequentes: [
    "Confondre villosités (intestin grêle uniquement) et cryptes de Lieberkühn (présentes dans l’intestin grêle et le côlon).",
    "Croire que le pneumocyte de type I est le plus nombreux numériquement : c’est le pneumocyte de type II qui est le plus nombreux, bien que le type I couvre la plus grande surface.",
    "Oublier que l’hépatocyte est amphicrine, avec une fonction exocrine (bile) et une fonction endocrine (protéines plasmatiques).",
    "Penser que le plexus de Meissner régule la motricité digestive : c’est le plexus myentérique d’Auerbach qui joue ce rôle, le plexus de Meissner régulant plutôt les sécrétions.",
    "Croire que le cartilage persiste jusque dans les bronchioles : il disparaît progressivement et est absent des bronchioles.",
    "Confondre veine centrolobulaire (centre du lobule hépatique classique) et espace porte (périphérie du lobule, contenant artère, veine et canal biliaire).",
  ],
  mnemotechniques: [
    {
      moyen: 'MSMS pour les quatre tuniques digestives : Muqueuse, Sous-muqueuse, Musculeuse, Séreuse',
      explication:
        'De la lumière vers l’extérieur, l’ordre des quatre tuniques du tube digestif à retenir systématiquement.',
    },
    {
      moyen: 'Type I étale, Type II sécrète',
      explication:
        'Le pneumocyte de type I est une cellule aplatie dédiée aux échanges gazeux ; le pneumocyte de type II est cubique et sécrète le surfactant.',
    },
    {
      moyen: 'Trois lettres à l’espace porte : AVB (Artère, Veine, Biliaire)',
      explication:
        'L’espace porte du foie contient une branche de l’artère hépatique, une branche de la veine porte et un canal biliaire.',
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
      id: 'histo-histologie-digestive-respiratoire-fc-01',
      recto: 'Quelles sont les quatre tuniques du tube digestif ?',
      verso: 'Muqueuse, sous-muqueuse, musculeuse et séreuse (ou adventice).',
      type: 'classification',
      tags: ['tube digestif'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-02',
      recto: 'Quel plexus nerveux régule principalement la motricité digestive ?',
      verso: 'Le plexus myentérique d’Auerbach, situé entre les deux couches musculaires.',
      type: 'mecanisme',
      tags: ['système nerveux entérique'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-03',
      recto: 'Quelle est la différence entre villosités et cryptes de Lieberkühn ?',
      verso: 'Les villosités sont propres à l’intestin grêle ; les cryptes de Lieberkühn sont présentes dans l’intestin grêle et le côlon.',
      type: 'definition',
      tags: ['intestin'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-04',
      recto: 'Autour de quoi s’organise le lobule hépatique classique ?',
      verso: 'Autour d’une veine centrolobulaire, avec des espaces portes à sa périphérie.',
      type: 'definition',
      tags: ['foie'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-05',
      recto: 'Quels sont les trois éléments d’un espace porte hépatique ?',
      verso: 'Une branche de l’artère hépatique, une branche de la veine porte et un canal biliaire interlobulaire.',
      type: 'classification',
      tags: ['foie'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-06',
      recto: 'Pourquoi l’hépatocyte est-il dit amphicrine ?',
      verso: 'Parce qu’il assure une fonction exocrine (sécrétion biliaire) et une fonction endocrine (protéines plasmatiques dans le sang).',
      type: 'mecanisme',
      tags: ['foie'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-07',
      recto: 'Quelles cellules du pancréas endocrine sécrètent l’insuline et le glucagon ?',
      verso: 'Les cellules bêta sécrètent l’insuline, les cellules alpha sécrètent le glucagon, au sein des îlots de Langerhans.',
      type: 'mecanisme',
      tags: ['pancréas'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-08',
      recto: 'Comment évolue l’épithélium respiratoire de la trachée aux bronchioles terminales ?',
      verso: 'De pseudostratifié cilié à cubique peu ou pas cilié, avec disparition progressive du cartilage et des glandes.',
      type: 'mecanisme',
      tags: ['épithélium respiratoire'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-09',
      recto: 'Quel pneumocyte assure la majorité de la surface d’échange gazeux alvéolaire ?',
      verso: 'Le pneumocyte de type I, cellule pavimenteuse très fine.',
      type: 'chiffre',
      tags: ['alvéole'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-10',
      recto: 'Quel pneumocyte sécrète le surfactant pulmonaire ?',
      verso: 'Le pneumocyte de type II.',
      type: 'mecanisme',
      tags: ['alvéole', 'surfactant'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-11',
      recto: 'Quels sont les trois éléments constituant la barrière air-sang ?',
      verso: 'Le pneumocyte de type I, la lame basale fusionnée, et la cellule endothéliale du capillaire pulmonaire.',
      type: 'classification',
      tags: ['barrière air-sang'],
    },
    {
      id: 'histo-histologie-digestive-respiratoire-fc-12',
      recto: 'Quelle maladie néonatale résulte d’un déficit en surfactant ?',
      verso: 'La maladie des membranes hyalines, fréquente chez le grand prématuré.',
      type: 'clinique',
      tags: ['surfactant', 'clinique'],
    },
  ],
  qcm: [
    {
      id: 'histo-histologie-digestive-respiratoire-qcm-01',
      enonce: 'Concernant l’organisation générale du tube digestif, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La muqueuse est la tunique la plus interne.',
          vraie: true,
          justification: 'Exact, elle borde directement la lumière digestive.',
        },
        {
          lettre: 'B',
          texte: 'La musculeuse comporte typiquement deux couches de muscle lisse.',
          vraie: true,
          justification: 'Exact, une couche circulaire interne et une couche longitudinale externe.',
        },
        {
          lettre: 'C',
          texte: 'Le plexus de Meissner se situe entre les deux couches musculaires.',
          vraie: false,
          justification: 'Faux : c’est le plexus myentérique d’Auerbach qui se situe entre les deux couches musculaires ; le plexus de Meissner est sous-muqueux.',
        },
        {
          lettre: 'D',
          texte: 'La séreuse est retrouvée dans les segments intrapéritonéaux.',
          vraie: true,
          justification: 'Exact, les segments rétropéritonéaux étant plutôt bordés par une adventice.',
        },
        {
          lettre: 'E',
          texte: 'La sous-muqueuse ne peut jamais contenir de glandes.',
          vraie: false,
          justification: 'Faux : les glandes de Brunner du duodénum sont un exemple classique de glandes sous-muqueuses.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien localiser chaque plexus nerveux et chaque type de tunique externe.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-digestive-respiratoire-qcm-02',
      enonce: 'Concernant les spécificités segmentaires du tube digestif, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’œsophage est tapissé par un épithélium pavimenteux stratifié non kératinisé.',
          vraie: true,
          justification: 'Exact, adapté à la protection mécanique lors du transit alimentaire.',
        },
        {
          lettre: 'B',
          texte: 'L’estomac présente des villosités intestinales typiques.',
          vraie: false,
          justification: 'Faux : les villosités sont propres à l’intestin grêle, non à l’estomac, qui présente des glandes gastriques tubuleuses.',
        },
        {
          lettre: 'C',
          texte: 'Le côlon présente des cryptes de Lieberkühn sans villosités.',
          vraie: true,
          justification: 'Exact, à la différence de l’intestin grêle qui possède les deux structures.',
        },
        {
          lettre: 'D',
          texte: 'Les cellules caliciformes sont particulièrement abondantes dans le côlon.',
          vraie: true,
          justification: 'Exact, en lien avec la protection de la muqueuse par le mucus.',
        },
        {
          lettre: 'E',
          texte: 'Les cryptes de Lieberkühn contiennent les cellules souches assurant le renouvellement épithélial intestinal.',
          vraie: true,
          justification: 'Exact, elles se situent au fond des cryptes.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. Retenir l’absence de villosités dans le côlon comme point clé.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-digestive-respiratoire-qcm-03',
      enonce: 'Concernant le foie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le lobule hépatique classique est organisé autour d’une veine centrolobulaire.',
          vraie: true,
          justification: 'Exact, avec des travées d’hépatocytes disposées en rayons convergents.',
        },
        {
          lettre: 'B',
          texte: 'L’espace porte contient une branche de l’artère hépatique et une branche de la veine porte.',
          vraie: true,
          justification: 'Exact, ainsi qu’un canal biliaire interlobulaire.',
        },
        {
          lettre: 'C',
          texte: 'L’hépatocyte n’a qu’une fonction exocrine.',
          vraie: false,
          justification: 'Faux : l’hépatocyte est amphicrine, avec une fonction exocrine (bile) et endocrine (protéines plasmatiques).',
        },
        {
          lettre: 'D',
          texte: 'La bile est sécrétée dans des canalicules biliaires entre hépatocytes voisins.',
          vraie: true,
          justification: 'Exact, avant de rejoindre les canaux biliaires interlobulaires.',
        },
        {
          lettre: 'E',
          texte: 'Le canal biliaire interlobulaire se situe au centre du lobule hépatique classique.',
          vraie: false,
          justification: 'Faux : il se situe dans l’espace porte, à la périphérie du lobule, non en son centre.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. La double fonction amphicrine de l’hépatocyte est essentielle à retenir.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-digestive-respiratoire-qcm-04',
      enonce: 'Concernant le pancréas, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le pancréas exocrine est organisé en acini séreux.',
          vraie: true,
          justification: 'Exact, une glande acineuse composée classique.',
        },
        {
          lettre: 'B',
          texte: 'Les îlots de Langerhans représentent la majeure partie du volume pancréatique.',
          vraie: false,
          justification: 'Faux : c’est le tissu exocrine qui représente la majeure partie du volume pancréatique.',
        },
        {
          lettre: 'C',
          texte: 'Les cellules bêta des îlots de Langerhans sécrètent l’insuline.',
          vraie: true,
          justification: 'Exact : les cellules bêta, les plus nombreuses et situées au centre de l’îlot, sécrètent l’insuline en réponse à l’hyperglycémie.',
        },
        {
          lettre: 'D',
          texte: 'Les cellules alpha des îlots de Langerhans sécrètent le glucagon.',
          vraie: true,
          justification: 'Exact : les cellules alpha, situées en périphérie de l’îlot, sécrètent le glucagon, hormone hyperglycémiante antagoniste de l’insuline.',
        },
        {
          lettre: 'E',
          texte: 'Le pancréas exocrine sécrète des hormones directement dans le sang.',
          vraie: false,
          justification: 'Faux : le pancréas exocrine sécrète des enzymes digestives dans le suc pancréatique, via un système de canaux excréteurs.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le pancréas illustre bien la coexistence de tissus exocrine et endocrine.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-digestive-respiratoire-qcm-05',
      enonce: 'Concernant les voies aériennes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La trachée est tapissée par un épithélium pseudostratifié cilié à cellules caliciformes.',
          vraie: true,
          justification: 'Exact : cet épithélium respiratoire associe cellules ciliées, cellules caliciformes mucosécrétantes et cellules basales, toutes ancrées sur la membrane basale malgré des noyaux à hauteurs différentes.',
        },
        {
          lettre: 'B',
          texte: 'Le cartilage persiste dans la paroi des bronchioles.',
          vraie: false,
          justification: 'Faux : le cartilage disparaît progressivement et est absent des bronchioles.',
        },
        {
          lettre: 'C',
          texte: 'Les glandes séromuqueuses régressent progressivement en descendant l’arbre respiratoire.',
          vraie: true,
          justification: 'Exact, en parallèle de la diminution du cartilage.',
        },
        {
          lettre: 'D',
          texte: 'L’épithélium des bronchioles est prismatique stratifié.',
          vraie: false,
          justification: 'Faux : l’épithélium des bronchioles est cubique, simple, cilié ou peu cilié selon le segment.',
        },
        {
          lettre: 'E',
          texte: 'La hauteur des cellules épithéliales diminue progressivement le long de l’arbre respiratoire.',
          vraie: true,
          justification: 'Exact, en parallèle de la diminution du calibre des voies aériennes.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir la décroissance parallèle de plusieurs paramètres histologiques.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-digestive-respiratoire-qcm-06',
      enonce: 'Concernant l’alvéole pulmonaire, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le pneumocyte de type I est une cellule cubique sécrétrice.',
          vraie: false,
          justification: 'Faux : c’est le pneumocyte de type II qui est cubique et sécrétoire ; le type I est pavimenteux et très fin.',
        },
        {
          lettre: 'B',
          texte: 'Le pneumocyte de type II sécrète le surfactant pulmonaire.',
          vraie: true,
          justification: 'Exact : cette cellule cubique, moins nombreuse mais plus volumineuse que le pneumocyte de type I, synthétise et sécrète le surfactant qui abaisse la tension superficielle alvéolaire.',
        },
        {
          lettre: 'C',
          texte: 'La barrière air-sang comporte une lame basale fusionnée entre pneumocyte et cellule endothéliale.',
          vraie: true,
          justification: 'Exact, ce qui optimise la diffusion des gaz respiratoires.',
        },
        {
          lettre: 'D',
          texte: 'Le macrophage alvéolaire assure la phagocytose des particules inhalées.',
          vraie: true,
          justification: 'Exact, c’est un acteur clé de la défense pulmonaire de première ligne.',
        },
        {
          lettre: 'E',
          texte: 'Un déficit en surfactant est sans conséquence chez le prématuré.',
          vraie: false,
          justification: 'Faux : il est responsable de la maladie des membranes hyalines chez le grand prématuré.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. Retenir la complémentarité fonctionnelle des deux types de pneumocytes.',
      difficulte: 2,
    },
  ],
};
