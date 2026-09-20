import type { Fiche } from '../../types';

export const ficheOrganisationGenome: Fiche = {
  id: 'ue1-organisation-genome',
  ue: 'ue1',
  titre: 'Organisation du génome humain et chromatine',
  sousTitre: 'Nucléosome, histones, euchromatine et hétérochromatine, chromosome métaphasique, caryotype, télomères',
  chapitre: 'Structure et expression du génome',
  ordre: 2,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'génome',
    'chromatine',
    'nucléosome',
    'histone',
    'euchromatine',
    'hétérochromatine',
    'caryotype',
    'télomère',
    'centromère',
  ],
  objectifs: [
    'Donner les ordres de grandeur du génome humain et de son contenu en gènes.',
    'Décrire la structure du nucléosome et le rôle des histones.',
    'Distinguer euchromatine et hétérochromatine, constitutive et facultative.',
    'Décrire l’organisation du chromosome métaphasique et les critères de classification.',
    'Définir le caryotype et sa nomenclature de base.',
    'Décrire les principales séquences répétées du génome, les télomères et le centromère.',
  ],
  sections: [
    {
      id: 'genome-ordres-grandeur',
      titre: 'Le génome humain : ordres de grandeur',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le génome humain haploïde comprend environ trois milliards de paires de bases, réparties sur vingt-quatre molécules d’ADN distinctes : vingt-deux autosomes et deux chromosomes sexuels, X et Y. Une cellule somatique diploïde contient quarante-six chromosomes.',
        },
        {
          type: 'liste',
          items: [
            'La très grande majorité du génome ne code pas pour des protéines : la fraction codante ne représente qu’une faible proportion de l’ADN total.',
            'Le nombre de gènes codant pour des protéines est estimé à environ vingt mille chez l’être humain, un chiffre bien plus faible qu’attendu avant le séquençage complet du génome.',
            'Le génome mitochondrial est distinct du génome nucléaire : il s’agit d’une molécule d’ADN circulaire, présente en plusieurs copies par mitochondrie, de transmission exclusivement maternelle.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repères numériques',
          texte:
            'Génome nucléaire haploïde : environ trois milliards de paires de bases. Nombre de chromosomes : quarante-six chez l’être humain, en vingt-trois paires. Nombre de gènes codant pour des protéines : de l’ordre de vingt mille.',
        },
        {
          type: 'definition',
          terme: 'Chromatine',
          definition:
            'Complexe formé par l’association de l’ADN avec des protéines, principalement les histones, au sein du noyau interphasique. C’est sous cette forme condensée que l’ADN est stocké, protégé et rendu accessible de façon régulée à la machinerie de transcription et de réplication.',
        },
      ],
    },
    {
      id: 'nucleosome',
      titre: 'Le nucléosome et les histones',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le premier niveau de compaction de la chromatine est le nucléosome, unité structurale répétitive constituée d’un cœur protéique autour duquel s’enroule l’ADN.',
        },
        {
          type: 'liste',
          items: [
            'Le cœur du nucléosome est un octamère formé de deux exemplaires de chacune des quatre histones dites de cœur : H2A, H2B, H3 et H4.',
            'Environ cent quarante-six paires de bases d’ADN s’enroulent autour de cet octamère, sur près de deux tours.',
            'Les nucléosomes successifs sont séparés par un segment d’ADN de liaison, ce qui donne, observé en microscopie électronique, l’aspect d’un « collier de perles ».',
            'L’histone de liaison H1 se fixe à l’ADN entre les nucléosomes et favorise le repliement de ce collier en une fibre plus compacte.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Charge des histones',
          texte:
            'Les histones sont des protéines riches en résidus basiques, lysine et arginine, chargées positivement au pH cellulaire. Cette charge positive leur permet d’interagir fortement avec le squelette phosphate, chargé négativement, de la double hélice d’ADN.',
        },
        {
          type: 'tableau',
          titre: 'Les histones et leur rôle',
          colonnes: ['Histone', 'Localisation', 'Rôle principal'],
          lignes: [
            ['H2A, H2B, H3, H4', 'Cœur du nucléosome, deux exemplaires de chacune', 'Formation de l’octamère autour duquel s’enroule l’ADN'],
            ['H1', 'Ancrée à l’ADN de liaison, entre les nucléosomes', 'Stabilisation et compaction de la fibre de chromatine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Modifications post-traductionnelles des histones',
          texte:
            'Les extrémités N-terminales des histones, qui dépassent du nucléosome, subissent de nombreuses modifications réversibles : acétylation, méthylation, phosphorylation, ubiquitination. Ces marques modifient l’affinité entre histones et ADN et constituent un code épigénétique qui régule l’accessibilité de la chromatine.',
        },
      ],
    },
    {
      id: 'euchromatine-heterochromatine',
      titre: 'Euchromatine et hétérochromatine',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Dans le noyau interphasique, la chromatine n’est pas uniformément condensée : on distingue deux grands états, visibles en microscopie optique après coloration.',
        },
        {
          type: 'comparaison',
          titre: 'Euchromatine et hétérochromatine',
          gauche: {
            titre: 'Euchromatine',
            points: [
              'Chromatine décondensée, peu colorée',
              'Régions riches en gènes transcrits activement',
              'Accessible à la machinerie de transcription',
            ],
          },
          droite: {
            titre: 'Hétérochromatine',
            points: [
              'Chromatine condensée, fortement colorée',
              'Transcriptionnellement peu active ou inactive',
              'Constitutive si permanente, par exemple aux centromères et aux télomères ; facultative si réversible et dépendante du type cellulaire',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le corpuscule de Barr',
          texte:
            'Chez la femme, l’un des deux chromosomes X est inactivé de façon aléatoire dans chaque cellule au début du développement embryonnaire et devient de l’hétérochromatine facultative, visible au microscope sous la forme d’une masse condensée accolée à la membrane nucléaire : le corpuscule de Barr. Ce mécanisme assure la compensation de dose entre les deux sexes.',
        },
      ],
    },
    {
      id: 'chromosome-metaphasique',
      titre: 'Le chromosome métaphasique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Au maximum de sa condensation, en métaphase de mitose, le chromosome est visible en microscopie optique sous la forme de deux chromatides sœurs, identiques, réunies au niveau du centromère.',
        },
        {
          type: 'liste',
          items: [
            'Chaque chromatide comporte un bras court, noté p, et un bras long, noté q, séparés par le centromère.',
            'Selon la position du centromère, un chromosome est dit métacentrique (centromère médian), submétacentrique (centromère décalé) ou acrocentrique (centromère proche d’une extrémité).',
            'Les chromosomes acrocentriques humains portent de petites masses de chromatine reliées au bras court par une constriction secondaire, les satellites, qui contiennent les gènes des ARN ribosomiques.',
          ],
        },
        {
          type: 'definition',
          terme: 'Kinétochore',
          definition:
            'Complexe protéique assemblé au niveau du centromère, sur lequel s’attachent les microtubules du fuseau mitotique. Il assure la ségrégation correcte des chromatides sœurs vers les deux cellules filles lors de la division cellulaire.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Chromosome et chromatide',
          texte:
            'Après la réplication de l’ADN, en phase S, chaque chromosome est constitué de deux chromatides sœurs identiques. Le nombre de chromosomes ne double pas à ce moment : c’est seulement à l’anaphase, lors de la séparation des chromatides sœurs, que chacune devient un chromosome indépendant à une seule chromatide.',
        },
      ],
    },
    {
      id: 'caryotype',
      titre: 'Le caryotype',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le caryotype est la représentation ordonnée de l’ensemble des chromosomes d’une cellule, obtenue à partir de cellules bloquées en métaphase, classés par taille décroissante et par position du centromère.',
        },
        {
          type: 'etapes',
          titre: 'Principe de la technique',
          etapes: [
            {
              titre: 'Culture et blocage',
              detail: 'Les cellules, le plus souvent des lymphocytes sanguins stimulés, sont mises en culture puis bloquées en métaphase par un poison du fuseau.',
            },
            {
              titre: 'Étalement',
              detail: 'Après choc hypotonique et fixation, les chromosomes sont étalés sur lame.',
            },
            {
              titre: 'Marquage en bandes',
              detail: 'Une coloration, le plus souvent au Giemsa (bandes G), révèle une alternance de bandes claires et sombres propre à chaque paire de chromosomes.',
            },
            {
              titre: 'Classement',
              detail: 'Les vingt-trois paires sont classées par taille décroissante et regroupées en groupes désignés par des lettres, selon la nomenclature internationale.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Nomenclature du caryotype normal',
          texte:
            'Le caryotype normal s’écrit 46,XX chez la femme et 46,XY chez l’homme : le nombre total de chromosomes, suivi de la formule des chromosomes sexuels.',
        },
        {
          type: 'tableau',
          titre: 'Principales indications du caryotype',
          colonnes: ['Contexte', 'Exemple'],
          lignes: [
            ['Diagnostic prénatal', 'Recherche d’une anomalie chromosomique de nombre ou de structure'],
            ['Bilan de retard de développement', 'Recherche d’une microdélétion ou d’une trisomie'],
            ['Bilan d’infertilité ou de fausses couches à répétition', 'Recherche d’une translocation équilibrée parentale'],
            ['Hémopathies malignes', 'Recherche d’anomalies chromosomiques acquises, comme le chromosome Philadelphie'],
          ],
        },
      ],
    },
    {
      id: 'sequences-repetees-telomeres',
      titre: 'Séquences répétées, télomères et centromère',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une part importante du génome humain est constituée de séquences répétées, dont la fonction n’est pas toujours codante mais dont certaines jouent un rôle structural essentiel.',
        },
        {
          type: 'tableau',
          titre: 'Principaux types de séquences répétées',
          colonnes: ['Type', 'Caractéristique', 'Exemple ou localisation'],
          lignes: [
            ['ADN satellite', 'Séquences très répétées, en tandem, au centromère', 'Satellite alpha du centromère humain'],
            ['Minisatellites', 'Motifs de quelques dizaines de paires de bases, répétés en nombre variable', 'Utilisés en identification génétique'],
            ['Microsatellites', 'Motifs très courts, un à quelques nucléotides, répétés en tandem', 'Marqueurs polymorphes utilisés en génétique médico-légale'],
            ['Éléments dispersés de type Alu', 'Courtes séquences répétées, très nombreuses, dispersées dans le génome', 'Environ trois cent paires de bases, plus d’un million de copies'],
          ],
        },
        {
          type: 'definition',
          terme: 'Télomère',
          definition:
            'Extrémité spécialisée de chaque chromosome, formée d’une séquence répétée en tandem qui protège l’ADN chromosomique contre la dégradation et contre la fusion avec d’autres chromosomes. À chaque cycle de réplication, l’extrémité du télomère raccourcit légèrement en raison de l’impossibilité de répliquer complètement l’extrémité 5′ du brin retardé.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Télomérase',
          texte:
            'La télomérase est une ribonucléoprotéine à activité rétrotranscriptase qui allonge les télomères en utilisant sa propre matrice d’ARN interne. Son activité est élevée dans les cellules germinales et les cellules souches, faible ou absente dans la plupart des cellules somatiques différenciées, et réactivée dans de nombreux cancers, ce qui contribue à l’immortalisation des cellules tumorales.',
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Centromère et non-disjonction',
          texte:
            'Un défaut d’assemblage du kinétochore au centromère, ou un défaut d’attachement des microtubules, peut entraîner une non-disjonction chromosomique lors de la méiose ou de la mitose, à l’origine d’aneuploïdies telles que la trisomie 21.',
        },
      ],
    },
  ],
  pointsCles: [
    'Le génome nucléaire haploïde humain comprend environ trois milliards de paires de bases et environ vingt mille gènes codant pour des protéines.',
    'Le nucléosome associe environ cent quarante-six paires de bases d’ADN à un octamère de deux copies de chacune des histones H2A, H2B, H3 et H4.',
    'L’histone H1 se fixe à l’ADN de liaison et favorise la compaction en fibre de chromatine.',
    'L’euchromatine est décondensée et transcriptionnellement active ; l’hétérochromatine est condensée, constitutive comme au centromère ou facultative comme le corpuscule de Barr.',
    'Le chromosome métaphasique comporte deux chromatides sœurs unies au centromère, avec un bras court p et un bras long q.',
    'Le caryotype normal s’écrit 46,XX ou 46,XY ; il repose sur un marquage en bandes après blocage cellulaire en métaphase.',
    'Le télomère protège les extrémités chromosomiques et raccourcit à chaque division en l’absence de télomérase.',
  ],
  erreursFrequentes: [
    'Confondre chromosome et chromatide : après la réplication, un chromosome comporte deux chromatides sœurs, et non deux chromosomes.',
    'Croire que l’octamère d’histones comprend l’histone H1 : H1 est une histone de liaison, externe au cœur du nucléosome.',
    'Assimiler hétérochromatine et ADN non fonctionnel : l’hétérochromatine facultative peut redevenir active selon le contexte cellulaire.',
    'Oublier que le nombre de chromosomes du caryotype humain normal est quarante-six, soit vingt-trois paires, et non vingt-trois.',
    'Penser que la télomérase est active dans toutes les cellules somatiques : elle est réprimée dans la plupart d’entre elles après la différenciation.',
  ],
  mnemotechniques: [
    {
      moyen: 'Les quatre histones de cœur : « 2A, 2B, 3, 4 »',
      explication: 'H2A, H2B, H3 et H4 forment, à deux exemplaires chacune, l’octamère central du nucléosome ; H1, la neuvième, reste à l’extérieur, sur l’ADN de liaison.',
    },
    {
      moyen: 'p petit, q qui suit',
      explication: 'Le bras court d’un chromosome se note p, comme « petit » ; le bras long se note q, la lettre qui suit p dans l’alphabet.',
    },
    {
      moyen: 'Barr comme « barré »',
      explication: 'Le corpuscule de Barr correspond au chromosome X inactivé, « barré » sur le plan transcriptionnel, visible en périphérie du noyau.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Lehninger, Principes de biochimie, 8e édition',
    'Nussbaum, Thompson et Thompson, Génétique médicale, édition française',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-organisation-genome-fc-01',
      recto: 'Quel est le nombre approximatif de paires de bases du génome nucléaire haploïde humain ?',
      verso: 'Environ trois milliards de paires de bases.',
      type: 'chiffre',
      tags: ['génome'],
    },
    {
      id: 'ue1-organisation-genome-fc-02',
      recto: 'Combien d’histones de cœur composent l’octamère du nucléosome, et lesquelles ?',
      verso: 'Huit, soit deux exemplaires de chacune des quatre histones H2A, H2B, H3 et H4.',
      type: 'chiffre',
      tags: ['nucléosome'],
    },
    {
      id: 'ue1-organisation-genome-fc-03',
      recto: 'Quel est le rôle de l’histone H1 ?',
      verso: 'Elle se fixe à l’ADN de liaison entre les nucléosomes et favorise la compaction de la fibre de chromatine.',
      type: 'mecanisme',
      tags: ['nucléosome', 'histone'],
    },
    {
      id: 'ue1-organisation-genome-fc-04',
      recto: 'Combien de paires de bases d’ADN s’enroulent autour d’un cœur de nucléosome ?',
      verso: 'Environ cent quarante-six paires de bases, sur près de deux tours.',
      type: 'chiffre',
      tags: ['nucléosome'],
    },
    {
      id: 'ue1-organisation-genome-fc-05',
      recto: 'Qu’est-ce qui distingue l’hétérochromatine constitutive de l’hétérochromatine facultative ?',
      verso: 'La constitutive est condensée de façon permanente, comme au centromère ; la facultative est réversible et dépend du type cellulaire, comme le corpuscule de Barr.',
      type: 'classification',
      tags: ['hétérochromatine'],
    },
    {
      id: 'ue1-organisation-genome-fc-06',
      recto: 'Que représente le corpuscule de Barr ?',
      verso: 'Le chromosome X inactivé, condensé en hétérochromatine facultative, chez la femme.',
      type: 'clinique',
      tags: ['inactivation X'],
    },
    {
      id: 'ue1-organisation-genome-fc-07',
      recto: 'Comment nomme-t-on les bras court et long d’un chromosome ?',
      verso: 'Le bras court est noté p, le bras long est noté q.',
      type: 'definition',
      tags: ['chromosome'],
    },
    {
      id: 'ue1-organisation-genome-fc-08',
      recto: 'Quel est le rôle du kinétochore ?',
      verso: 'C’est le complexe protéique du centromère sur lequel s’attachent les microtubules du fuseau mitotique, assurant la ségrégation des chromatides.',
      type: 'mecanisme',
      tags: ['centromère'],
    },
    {
      id: 'ue1-organisation-genome-fc-09',
      recto: 'Comment s’écrit le caryotype normal d’une femme et d’un homme ?',
      verso: '46,XX chez la femme et 46,XY chez l’homme.',
      type: 'definition',
      tags: ['caryotype'],
    },
    {
      id: 'ue1-organisation-genome-fc-10',
      recto: 'Quelle coloration est le plus souvent utilisée pour établir un caryotype ?',
      verso: 'La coloration au Giemsa, qui révèle des bandes G alternant zones claires et sombres.',
      type: 'definition',
      tags: ['caryotype'],
    },
    {
      id: 'ue1-organisation-genome-fc-11',
      recto: 'Pourquoi les télomères raccourcissent-ils à chaque division cellulaire ?',
      verso: 'Parce que la machinerie de réplication ne peut pas répliquer complètement l’extrémité 5′ du brin retardé, ce qui entraîne une perte progressive de séquence télomérique.',
      type: 'mecanisme',
      tags: ['télomère'],
    },
    {
      id: 'ue1-organisation-genome-fc-12',
      recto: 'Dans quels types cellulaires la télomérase est-elle typiquement active ?',
      verso: 'Les cellules germinales, les cellules souches, et de façon réactivée dans de nombreux cancers.',
      type: 'clinique',
      tags: ['télomérase'],
    },
  ],
  qcm: [
    {
      id: 'ue1-organisation-genome-qcm-01',
      enonce: 'Concernant le génome humain, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le génome haploïde comprend environ trois milliards de paires de bases.',
          vraie: true,
          justification: 'Exact : c’est l’ordre de grandeur classiquement retenu.',
        },
        {
          lettre: 'B',
          texte: 'Le nombre de gènes codant pour des protéines est de l’ordre de deux cent mille.',
          vraie: false,
          justification: 'Faux : il est de l’ordre de vingt mille, un chiffre bien plus faible qu’estimé avant le séquençage complet.',
        },
        {
          lettre: 'C',
          texte: 'La majorité du génome humain ne code pas pour des protéines.',
          vraie: true,
          justification: 'Exact : la fraction codante ne représente qu’une faible proportion du génome total.',
        },
        {
          lettre: 'D',
          texte: 'Le génome mitochondrial est linéaire.',
          vraie: false,
          justification: 'Faux : le génome mitochondrial humain est une molécule circulaire.',
        },
        {
          lettre: 'E',
          texte: 'Le génome mitochondrial est transmis exclusivement par la mère.',
          vraie: true,
          justification: 'Exact : la transmission mitochondriale est maternelle chez l’être humain.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir la disproportion entre taille du génome et nombre de gènes codants.',
      difficulte: 1,
    },
    {
      id: 'ue1-organisation-genome-qcm-02',
      enonce: 'Concernant le nucléosome, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le cœur du nucléosome est formé d’un octamère d’histones.',
          vraie: true,
          justification: 'Exact : deux copies de chacune des histones H2A, H2B, H3 et H4.',
        },
        {
          lettre: 'B',
          texte: 'L’histone H1 fait partie de l’octamère central.',
          vraie: false,
          justification: 'Faux : H1 est une histone de liaison, externe au cœur du nucléosome.',
        },
        {
          lettre: 'C',
          texte: 'L’ADN s’enroule autour de l’octamère sur près de deux tours.',
          vraie: true,
          justification: 'Exact, sur environ cent quarante-six paires de bases.',
        },
        {
          lettre: 'D',
          texte: 'Les histones sont des protéines majoritairement acides.',
          vraie: false,
          justification: 'Faux : elles sont riches en résidus basiques, lysine et arginine, chargés positivement.',
        },
        {
          lettre: 'E',
          texte: 'Les extrémités N-terminales des histones peuvent être acétylées.',
          vraie: true,
          justification: 'Exact : ces modifications post-traductionnelles régulent l’accessibilité de la chromatine.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer les histones de cœur de l’histone de liaison H1.',
      difficulte: 2,
    },
    {
      id: 'ue1-organisation-genome-qcm-03',
      enonce: 'Concernant l’euchromatine et l’hétérochromatine, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’euchromatine est plus condensée que l’hétérochromatine.',
          vraie: false,
          justification: 'Faux : c’est l’inverse, l’hétérochromatine est la forme condensée.',
        },
        {
          lettre: 'B',
          texte: 'L’hétérochromatine constitutive est présente au niveau du centromère.',
          vraie: true,
          justification: 'Exact : le centromère est une région d’hétérochromatine constitutive.',
        },
        {
          lettre: 'C',
          texte: 'Le corpuscule de Barr correspond à une hétérochromatine facultative.',
          vraie: true,
          justification: 'Exact : il s’agit du chromosome X inactivé, réversible sur le plan évolutif de l’espèce.',
        },
        {
          lettre: 'D',
          texte: 'L’euchromatine est généralement pauvre en gènes transcrits.',
          vraie: false,
          justification: 'Faux : l’euchromatine correspond aux régions riches en gènes activement transcrits.',
        },
        {
          lettre: 'E',
          texte: 'L’hétérochromatine facultative peut redevenir active selon le contexte cellulaire.',
          vraie: true,
          justification: 'Exact : contrairement à l’hétérochromatine constitutive, elle est réversible.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Ne pas inverser les définitions d’euchromatine et d’hétérochromatine.',
      difficulte: 2,
    },
    {
      id: 'ue1-organisation-genome-qcm-04',
      enonce: 'Concernant le chromosome métaphasique et le caryotype, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'En métaphase, un chromosome comporte deux chromatides sœurs.',
          vraie: true,
          justification: 'Exact, après réplication en phase S.',
        },
        {
          lettre: 'B',
          texte: 'Le bras long du chromosome est noté p.',
          vraie: false,
          justification: 'Faux : p désigne le bras court, q désigne le bras long.',
        },
        {
          lettre: 'C',
          texte: 'Le caryotype normal d’un homme s’écrit 46,XY.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Le caryotype comprend quarante-quatre chromosomes chez l’être humain.',
          vraie: false,
          justification: 'Faux : le caryotype humain normal comprend quarante-six chromosomes.',
        },
        {
          lettre: 'E',
          texte: 'La coloration en bandes G utilise le plus souvent le Giemsa.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir la nomenclature p et q ainsi que le nombre total de quarante-six chromosomes.',
      difficulte: 1,
    },
    {
      id: 'ue1-organisation-genome-qcm-05',
      enonce: 'Concernant les séquences répétées du génome, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ADN satellite se localise préférentiellement au niveau du centromère.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Les microsatellites sont des motifs très courts répétés en tandem.',
          vraie: true,
          justification: 'Exact ; ils sont utilisés comme marqueurs polymorphes.',
        },
        {
          lettre: 'C',
          texte: 'Les éléments de type Alu sont des séquences uniques, présentes en une seule copie par génome.',
          vraie: false,
          justification: 'Faux : ce sont au contraire des séquences très nombreuses, dispersées dans tout le génome.',
        },
        {
          lettre: 'D',
          texte: 'Les microsatellites peuvent être utilisés en identification génétique.',
          vraie: true,
          justification: 'Exact, en raison de leur fort polymorphisme de longueur entre individus.',
        },
        {
          lettre: 'E',
          texte: 'Toutes les séquences répétées du génome codent pour des protéines.',
          vraie: false,
          justification: 'Faux : la grande majorité de ces séquences est non codante.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Les séquences répétées ne sont pas synonymes de séquences codantes.',
      difficulte: 2,
    },
    {
      id: 'ue1-organisation-genome-qcm-06',
      enonce: 'Concernant les télomères, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les télomères protègent les extrémités des chromosomes contre la dégradation.',
          vraie: true,
          justification: 'Exact, c’est l’une de leurs fonctions principales.',
        },
        {
          lettre: 'B',
          texte: 'Les télomères s’allongent spontanément à chaque division cellulaire en l’absence de télomérase.',
          vraie: false,
          justification: 'Faux : en l’absence de télomérase, ils raccourcissent progressivement.',
        },
        {
          lettre: 'C',
          texte: 'La télomérase possède une activité rétrotranscriptase.',
          vraie: true,
          justification: 'Exact : elle synthétise de l’ADN à partir de sa propre matrice d’ARN interne.',
        },
        {
          lettre: 'D',
          texte: 'La télomérase est généralement très active dans les cellules somatiques différenciées.',
          vraie: false,
          justification: 'Faux : son activité y est le plus souvent réprimée ; elle est active dans les cellules germinales et souches.',
        },
        {
          lettre: 'E',
          texte: 'La réactivation de la télomérase est observée dans de nombreux cancers.',
          vraie: true,
          justification: 'Exact : elle contribue à l’immortalisation des cellules tumorales.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir le lien entre répression physiologique de la télomérase et vieillissement cellulaire, et sa réactivation tumorale.',
      difficulte: 2,
    },
  ],
};
