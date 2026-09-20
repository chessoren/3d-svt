import type { Fiche } from '../../types';

export const ficheMaturationArn: Fiche = {
  id: 'ue1-maturation-arn',
  ue: 'ue1',
  titre: 'Maturation des ARN',
  sousTitre: 'Coiffe, polyadénylation, épissage, spliceosome, épissage alternatif, export nucléaire, stabilité des ARNm',
  chapitre: 'Structure et expression du génome',
  ordre: 6,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'coiffe',
    'polyadénylation',
    'épissage',
    'spliceosome',
    'épissage alternatif',
    'export nucléaire',
    'stabilité de l’ARNm',
  ],
  objectifs: [
    'Décrire la formation et le rôle de la coiffe en 5′ de l’ARN messager.',
    'Décrire le mécanisme de polyadénylation et le rôle de la queue poly(A).',
    'Expliquer le mécanisme d’épissage et la composition du spliceosome.',
    'Comprendre le principe et l’intérêt de l’épissage alternatif.',
    'Décrire les conditions de l’export nucléaire de l’ARN messager mature.',
    'Identifier les principaux déterminants de la stabilité des ARN messagers.',
  ],
  sections: [
    {
      id: 'coiffe',
      titre: 'La coiffe',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La coiffe est une modification ajoutée à l’extrémité 5′ du pré-ARN messager, de façon co-transcriptionnelle, dès que les premiers nucléotides ont été synthétisés par l’ARN polymérase II.',
        },
        {
          type: 'etapes',
          titre: 'Formation de la coiffe',
          etapes: [
            {
              titre: 'Hydrolyse du phosphate terminal',
              detail: 'Le triphosphate en 5′ de l’ARN naissant perd un phosphate, devenant un diphosphate.',
            },
            {
              titre: 'Addition d’une guanosine',
              detail: 'Une guanosine monophosphate est ajoutée par une liaison 5′-5′ triphosphate inhabituelle, orientée tête-bêche par rapport au reste de l’ARN.',
            },
            {
              titre: 'Méthylation',
              detail: 'Cette guanine terminale est méthylée sur l’azote en position 7, formant la 7-méthylguanosine caractéristique de la coiffe.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Rôles de la coiffe',
          texte:
            'La coiffe protège l’extrémité 5′ de l’ARN messager contre la dégradation par les exonucléases, favorise l’épissage du premier intron, participe à l’export nucléaire, et permet le recrutement des facteurs d’initiation de la traduction, en particulier le facteur eIF4E.',
        },
      ],
    },
    {
      id: 'polyadenylation',
      titre: 'La polyadénylation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La polyadénylation est la maturation de l’extrémité 3′ du pré-ARN messager, indépendante de la matrice d’ADN, réalisée après clivage de l’ARN naissant.',
        },
        {
          type: 'liste',
          items: [
            'Un signal de polyadénylation, séquence riche en adénine et uracile, est reconnu sur le pré-ARN messager.',
            'L’ARN est clivé en aval de ce signal par un complexe endonucléasique.',
            'La poly(A) polymérase ajoute ensuite une série de résidus adénylate à l’extrémité 3′ nouvellement créée, sans utiliser de matrice.',
          ],
        },
        {
          type: 'definition',
          terme: 'Queue poly(A)',
          definition:
            'Séquence d’environ deux cents résidus adénylate ajoutée à l’extrémité 3′ de la plupart des ARN messagers eucaryotes. Elle est liée par des protéines spécifiques qui protègent l’ARN de la dégradation et favorisent son export et sa traduction.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Terminaison et polyadénylation liées',
          texte:
            'Chez les eucaryotes, le clivage au site de polyadénylation est intimement couplé à la terminaison de la transcription par l’ARN polymérase II : la reconnaissance du signal déclenche à la fois le clivage de l’ARN et la dissociation ultérieure de la polymérase de la matrice d’ADN.',
        },
      ],
    },
    {
      id: 'epissage-spliceosome',
      titre: 'L’épissage et le spliceosome',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’épissage est le processus par lequel les introns, séquences non codantes internes aux gènes eucaryotes, sont excisés du pré-ARN messager, tandis que les exons, séquences codantes, sont assemblés bout à bout.',
        },
        {
          type: 'liste',
          items: [
            'La quasi-totalité des introns commence par les nucléotides GU à leur extrémité 5′ et se termine par les nucléotides AG à leur extrémité 3′ : c’est la règle GT-AG.',
            'Un point de branchement, situé à l’intérieur de l’intron et centré sur une adénine, est essentiel à la réaction d’épissage.',
            'La réaction se déroule en deux étapes de transestérification successives, formant transitoirement une structure en lasso, ou lariat, avant la libération de l’intron circularisé.',
          ],
        },
        {
          type: 'definition',
          terme: 'Spliceosome',
          definition:
            'Complexe ribonucléoprotéique dynamique, formé de plusieurs petites ribonucléoprotéines nucléaires, notées U1, U2, U4, U5 et U6, associées à de nombreuses protéines. Il reconnaît les jonctions exon-intron et catalyse les deux réactions de transestérification de l’épissage.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Rôle des petites ribonucléoprotéines nucléaires',
          texte:
            'U1 reconnaît le site d’épissage en 5′ de l’intron, U2 se fixe au point de branchement, tandis que U4, U5 et U6 rejoignent ensuite le complexe pour permettre le réarrangement conformationnel nécessaire à la catalyse.',
        },
      ],
    },
    {
      id: 'epissage-alternatif',
      titre: 'L’épissage alternatif',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’épissage alternatif permet, à partir d’un même gène, de produire plusieurs ARN messagers matures différents, selon les exons retenus ou exclus, augmentant considérablement la diversité des protéines produites par le génome.',
        },
        {
          type: 'liste',
          items: [
            'Un exon peut être inclus ou exclu selon le type cellulaire, le stade de développement ou les conditions physiologiques.',
            'Ce mécanisme concerne la grande majorité des gènes humains comportant plusieurs exons.',
            'Il est régulé par des protéines qui favorisent ou répriment la reconnaissance de certains sites d’épissage par le spliceosome.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Mutations affectant l’épissage',
          texte:
            'Une mutation touchant un site d’épissage, en particulier les dinucléotides GU ou AG conservés, peut entraîner la rétention d’un intron ou l’exclusion anormale d’un exon, et être à l’origine d’une maladie génétique par production d’une protéine non fonctionnelle ou tronquée.',
        },
      ],
    },
    {
      id: 'export-nucleaire',
      titre: 'Export nucléaire de l’ARN messager',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Seuls les ARN messagers correctement maturés sont exportés du noyau vers le cytoplasme, à travers les complexes du pore nucléaire, où ils pourront être traduits par les ribosomes.',
        },
        {
          type: 'liste',
          items: [
            'La coiffe, la queue poly(A) et l’absence d’intron non excisé constituent des marques de maturation correcte, reconnues par la machinerie d’export.',
            'Un complexe protéique se dépose au niveau de chaque jonction exon-exon lors de l’épissage, marquant la position des anciens introns.',
            'Ce marquage participe au contrôle de qualité de l’ARN messager et intervient également, dans le cytoplasme, dans la détection des codons stop prématurés.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un contrôle de qualité avant l’export',
          texte:
            'Un pré-ARN messager mal maturé, encore porteur d’un intron ou dépourvu de coiffe ou de queue poly(A), est en règle générale retenu dans le noyau puis dégradé, ce qui évite la traduction de messagers aberrants dans le cytoplasme.',
        },
      ],
    },
    {
      id: 'stabilite-arnm',
      titre: 'Stabilité des ARN messagers',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La durée de vie d’un ARN messager dans le cytoplasme est très variable d’un transcrit à l’autre et constitue un niveau supplémentaire de régulation de l’expression génique.',
        },
        {
          type: 'tableau',
          titre: 'Principaux déterminants de la stabilité d’un ARN messager',
          colonnes: ['Élément', 'Effet sur la stabilité'],
          lignes: [
            ['Coiffe en 5′', 'Protège contre la dégradation par les exonucléases 5′ vers 3′'],
            ['Queue poly(A)', 'Protège l’extrémité 3′ et ralentit la dégradation ; sa longueur diminue progressivement avec le temps'],
            ['Séquences riches en adénine et uracile dans la région 3′ non traduite', 'Favorisent en général une dégradation plus rapide du messager'],
            ['Fixation de microARN', 'Peut réprimer la traduction et favoriser la dégradation du messager ciblé'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Dégradation par voie non-sens (NMD)',
          texte:
            'Si un codon stop prématuré se trouve en amont d’une jonction exon-exon marquée par le complexe déposé lors de l’épissage, l’ARN messager est reconnu comme anormal et dégradé par la voie de surveillance dite non-sens (nonsense-mediated decay), qui évite la production d’une protéine tronquée potentiellement délétère.',
        },
      ],
    },
  ],
  pointsCles: [
    'La coiffe, une 7-méthylguanosine liée par une liaison 5′-5′, protège l’ARN messager et facilite l’épissage, l’export et l’initiation de la traduction.',
    'La polyadénylation ajoute, sans matrice, une queue poly(A) après clivage de l’ARN en aval d’un signal spécifique.',
    'L’épissage excise les introns, encadrés par les dinucléotides GU en 5′ et AG en 3′, grâce au spliceosome, formé des petites ribonucléoprotéines U1, U2, U4, U5 et U6.',
    'L’épissage alternatif permet de produire plusieurs protéines à partir d’un même gène et concerne la majorité des gènes humains multi-exoniques.',
    'Seuls les ARN messagers correctement coiffés, polyadénylés et épissés sont exportés vers le cytoplasme.',
    'La stabilité d’un ARN messager dépend de sa coiffe, de sa queue poly(A), d’éléments de sa région 3′ non traduite et des microARN qui le ciblent.',
  ],
  erreursFrequentes: [
    'Croire que la coiffe est ajoutée après la fin de la transcription : elle est en réalité ajoutée de façon co-transcriptionnelle, très précocement.',
    'Inverser les dinucléotides limites de l’intron : GU en 5′ et AG en 3′, jamais l’inverse.',
    'Penser que la queue poly(A) est codée par une matrice d’ADN : elle est synthétisée sans matrice par la poly(A) polymérase.',
    'Oublier que l’épissage alternatif est la règle, et non l’exception, pour la grande majorité des gènes humains à plusieurs exons.',
    'Confondre le complexe de jonction exon-exon, déposé lors de l’épissage, avec le spliceosome lui-même, qui s’en dissocie une fois la réaction achevée.',
  ],
  mnemotechniques: [
    {
      moyen: 'GU-AG, comme les deux lettres qui encadrent',
      explication: 'Tout intron classique commence par GU et se termine par AG : ces deux dinucléotides encadrent la séquence à exciser.',
    },
    {
      moyen: 'Coiffe protège la tête, poly(A) protège la queue',
      explication: 'La coiffe en 5′ et la queue poly(A) en 3′ protègent chacune une extrémité de l’ARN messager contre la dégradation par les exonucléases.',
    },
    {
      moyen: 'Cinq lettres pour le spliceosome : U1, U2, U4, U5, U6',
      explication: 'Retenir la numérotation non continue des petites ribonucléoprotéines nucléaires du spliceosome, U3 n’en faisant pas partie.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Lehninger, Principes de biochimie, 8e édition',
    'Watson, Biologie moléculaire du gène, 7e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-maturation-arn-fc-01',
      recto: 'Quelle est la nature chimique de la coiffe de l’ARN messager ?',
      verso: 'Une 7-méthylguanosine, liée à l’extrémité 5′ de l’ARN par une liaison 5′-5′ triphosphate.',
      type: 'definition',
      tags: ['coiffe'],
    },
    {
      id: 'ue1-maturation-arn-fc-02',
      recto: 'Citer deux rôles de la coiffe.',
      verso: 'La protection contre les exonucléases et le recrutement des facteurs d’initiation de la traduction, comme eIF4E.',
      type: 'mecanisme',
      tags: ['coiffe'],
    },
    {
      id: 'ue1-maturation-arn-fc-03',
      recto: 'Quelle enzyme ajoute la queue poly(A), et sur quel principe ?',
      verso: 'La poly(A) polymérase, qui ajoute des résidus adénylate sans utiliser de matrice.',
      type: 'mecanisme',
      tags: ['polyadénylation'],
    },
    {
      id: 'ue1-maturation-arn-fc-04',
      recto: 'Quels dinucléotides encadrent typiquement un intron ?',
      verso: 'GU à l’extrémité 5′ et AG à l’extrémité 3′.',
      type: 'chiffre',
      tags: ['épissage'],
    },
    {
      id: 'ue1-maturation-arn-fc-05',
      recto: 'Quelle structure intermédiaire se forme pendant l’épissage ?',
      verso: 'Une structure en lasso, ou lariat, formée par la liaison de l’extrémité 5′ de l’intron au point de branchement.',
      type: 'mecanisme',
      tags: ['épissage'],
    },
    {
      id: 'ue1-maturation-arn-fc-06',
      recto: 'Quelles petites ribonucléoprotéines nucléaires composent le spliceosome ?',
      verso: 'U1, U2, U4, U5 et U6.',
      type: 'classification',
      tags: ['spliceosome'],
    },
    {
      id: 'ue1-maturation-arn-fc-07',
      recto: 'Quel est l’intérêt biologique de l’épissage alternatif ?',
      verso: 'Il permet de produire plusieurs protéines différentes à partir d’un même gène, en incluant ou en excluant certains exons.',
      type: 'mecanisme',
      tags: ['épissage alternatif'],
    },
    {
      id: 'ue1-maturation-arn-fc-08',
      recto: 'Quelles marques de maturation sont nécessaires à l’export nucléaire de l’ARN messager ?',
      verso: 'La coiffe, la queue poly(A) et l’absence d’intron non excisé.',
      type: 'mecanisme',
      tags: ['export nucléaire'],
    },
    {
      id: 'ue1-maturation-arn-fc-09',
      recto: 'Que dépose le spliceosome au niveau de chaque jonction exon-exon ?',
      verso: 'Un complexe protéique de jonction exon-exon, qui participe au contrôle de qualité de l’ARN messager.',
      type: 'mecanisme',
      tags: ['jonction exon-exon'],
    },
    {
      id: 'ue1-maturation-arn-fc-10',
      recto: 'Qu’est-ce que la dégradation par voie non-sens, ou NMD ?',
      verso: 'Un mécanisme de surveillance qui dégrade un ARN messager porteur d’un codon stop prématuré situé en amont d’une jonction exon-exon marquée.',
      type: 'mecanisme',
      tags: ['NMD'],
    },
    {
      id: 'ue1-maturation-arn-fc-11',
      recto: 'Comment évolue la longueur de la queue poly(A) au cours de la vie du messager dans le cytoplasme ?',
      verso: 'Elle diminue progressivement, ce qui favorise finalement la dégradation du messager.',
      type: 'mecanisme',
      tags: ['stabilité ARNm'],
    },
    {
      id: 'ue1-maturation-arn-fc-12',
      recto: 'Quel effet une mutation d’un site d’épissage peut-elle avoir ?',
      verso: 'La rétention anormale d’un intron ou l’exclusion anormale d’un exon, pouvant produire une protéine non fonctionnelle et être à l’origine d’une maladie génétique.',
      type: 'clinique',
      tags: ['mutation', 'épissage'],
    },
  ],
  qcm: [
    {
      id: 'ue1-maturation-arn-qcm-01',
      enonce: 'Concernant la coiffe de l’ARN messager, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est ajoutée à l’extrémité 3′ de l’ARN.',
          vraie: false,
          justification: 'Faux : la coiffe est ajoutée à l’extrémité 5′.',
        },
        {
          lettre: 'B',
          texte: 'Elle correspond à une guanine méthylée en position 7.',
          vraie: true,
          justification: 'Exact : c’est une 7-méthylguanosine.',
        },
        {
          lettre: 'C',
          texte: 'Elle est ajoutée de façon co-transcriptionnelle.',
          vraie: true,
          justification: 'Exact, très précocement après le début de la transcription.',
        },
        {
          lettre: 'D',
          texte: 'Elle protège l’ARN messager de la dégradation par les exonucléases.',
          vraie: true,
          justification: 'Sa structure particulière en 5′ masque l’extrémité du transcrit, la rendant résistante à l’action des exonucléases 5′-3′ qui dégraderaient sinon l’ARN messager.',
        },
        {
          lettre: 'E',
          texte: 'Elle est reliée au reste de l’ARN par une liaison phosphodiester classique 3′-5′.',
          vraie: false,
          justification: 'Faux : la liaison est de type 5′-5′ triphosphate, une liaison inhabituelle.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. Retenir la liaison particulière 5′-5′ de la coiffe.',
      difficulte: 2,
    },
    {
      id: 'ue1-maturation-arn-qcm-02',
      enonce: 'Concernant la polyadénylation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La queue poly(A) est synthétisée à partir d’une matrice d’ADN.',
          vraie: false,
          justification: 'Faux : elle est synthétisée sans matrice par la poly(A) polymérase.',
        },
        {
          lettre: 'B',
          texte: 'Elle intervient après clivage de l’ARN au niveau d’un signal spécifique.',
          vraie: true,
          justification: 'Un complexe protéique reconnaît un signal de polyadénylation, clive le transcrit à cet endroit, puis la poly(A) polymérase ajoute la queue poly(A) sur l’extrémité 3′ libérée.',
        },
        {
          lettre: 'C',
          texte: 'La queue poly(A) favorise l’export et la traduction de l’ARN messager.',
          vraie: true,
          justification: 'Reconnue par des protéines de liaison spécifiques, la queue poly(A) facilite le passage du transcrit à travers le pore nucléaire et stimule le recrutement des ribosomes sur le messager.',
        },
        {
          lettre: 'D',
          texte: 'La polyadénylation concerne l’extrémité 5′ de l’ARN messager.',
          vraie: false,
          justification: 'Faux : elle concerne l’extrémité 3′.',
        },
        {
          lettre: 'E',
          texte: 'Elle est couplée à la terminaison de la transcription par l’ARN polymérase II.',
          vraie: true,
          justification: 'Le clivage au signal de polyadénylation déclenche également l’arrêt de la transcription, les deux processus étant physiquement couplés au niveau du complexe d’élongation.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Ne pas confondre coiffe en 5′ et polyadénylation en 3′.',
      difficulte: 2,
    },
    {
      id: 'ue1-maturation-arn-qcm-03',
      enonce: 'Concernant l’épissage et le spliceosome, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les introns commencent par AG et se terminent par GU.',
          vraie: false,
          justification: 'Faux : c’est l’inverse, GU en 5′ et AG en 3′.',
        },
        {
          lettre: 'B',
          texte: 'Le spliceosome comprend les petites ribonucléoprotéines U1, U2, U4, U5 et U6.',
          vraie: true,
          justification: 'Ces cinq petites ribonucléoprotéines nucléaires (snRNP) s’assemblent successivement sur le transcrit pour former le spliceosome, la machinerie catalytique de l’épissage.',
        },
        {
          lettre: 'C',
          texte: 'La réaction d’épissage forme un intermédiaire en lasso, ou lariat.',
          vraie: true,
          justification: 'La première transestérification relie le 5′ de l’intron à l’adénine du point de branchement par une liaison inhabituelle 2′-5′, formant une boucle caractéristique en forme de lasso.',
        },
        {
          lettre: 'D',
          texte: 'Le point de branchement est centré sur une adénine.',
          vraie: true,
          justification: 'C’est le groupement hydroxyle en 2′ de cette adénine, située près de l’extrémité 3′ de l’intron, qui attaque le site d’épissage 5′ pour amorcer la réaction.',
        },
        {
          lettre: 'E',
          texte: 'L’épissage aboutit à l’élimination des exons et à la conservation des introns.',
          vraie: false,
          justification: 'Faux : c’est l’inverse, les introns sont excisés et les exons sont assemblés.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. Retenir la règle GT-AG et la nature du point de branchement.',
      difficulte: 2,
    },
    {
      id: 'ue1-maturation-arn-qcm-04',
      enonce: 'Concernant l’épissage alternatif, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il permet de produire plusieurs isoformes protéiques à partir d’un même gène.',
          vraie: true,
          justification: 'En combinant différemment les exons inclus ou exclus, l’épissage alternatif génère plusieurs ARN messagers matures distincts, donc plusieurs protéines, à partir d’un seul gène.',
        },
        {
          lettre: 'B',
          texte: 'Il ne concerne qu’une minorité de gènes humains.',
          vraie: false,
          justification: 'Faux : il concerne la grande majorité des gènes humains comportant plusieurs exons.',
        },
        {
          lettre: 'C',
          texte: 'Il peut varier selon le type cellulaire.',
          vraie: true,
          justification: 'La disponibilité et l’activité des protéines régulatrices de l’épissage diffèrent d’un tissu à l’autre, ce qui conduit à des profils d’épissage alternatif spécifiques de chaque type cellulaire.',
        },
        {
          lettre: 'D',
          texte: 'Une mutation d’un site d’épissage peut avoir des conséquences pathologiques.',
          vraie: true,
          justification: 'Exact, par rétention d’intron ou exclusion anormale d’exon.',
        },
        {
          lettre: 'E',
          texte: 'L’épissage alternatif est indépendant de toute régulation par des protéines cellulaires.',
          vraie: false,
          justification: 'Faux : il est au contraire régulé par des protéines qui favorisent ou répriment certains sites d’épissage.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. L’épissage alternatif est la règle, pas l’exception, chez l’être humain.',
      difficulte: 2,
    },
    {
      id: 'ue1-maturation-arn-qcm-05',
      enonce: 'Concernant l’export nucléaire de l’ARN messager, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il s’effectue à travers les complexes du pore nucléaire.',
          vraie: true,
          justification: 'Ces complexes protéiques insérés dans l’enveloppe nucléaire constituent l’unique voie de passage entre le noyau et le cytoplasme pour l’ARN messager mature.',
        },
        {
          lettre: 'B',
          texte: 'Un ARN messager encore porteur d’un intron est exporté sans difficulté.',
          vraie: false,
          justification: 'Faux : il est en règle générale retenu dans le noyau puis dégradé.',
        },
        {
          lettre: 'C',
          texte: 'La coiffe et la queue poly(A) participent à la reconnaissance d’un ARN messager mature.',
          vraie: true,
          justification: 'Leur présence conjointe, liée par des protéines spécifiques, signale à la machinerie cellulaire qu’un transcrit a été correctement maturé et peut être exporté puis traduit.',
        },
        {
          lettre: 'D',
          texte: 'Le complexe de jonction exon-exon est déposé pendant l’épissage.',
          vraie: true,
          justification: 'Le spliceosome dépose ce complexe protéique en amont de chaque jonction entre deux exons nouvellement liés, marque qui participe ensuite au contrôle qualité du messager.',
        },
        {
          lettre: 'E',
          texte: 'L’export nucléaire précède toujours l’achèvement de l’épissage.',
          vraie: false,
          justification: 'Faux : l’épissage est en règle générale achevé avant l’export du messager mature.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. L’export nucléaire est conditionné par une maturation correcte de l’ARN messager.',
      difficulte: 2,
    },
    {
      id: 'ue1-maturation-arn-qcm-06',
      enonce: 'Concernant la stabilité des ARN messagers, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La coiffe protège l’extrémité 5′ contre les exonucléases.',
          vraie: true,
          justification: 'Sa structure particulière de 7-méthylguanosine reliée par une liaison 5′-5′ inhabituelle empêche la reconnaissance de l’extrémité par les exonucléases 5′-3′.',
        },
        {
          lettre: 'B',
          texte: 'La queue poly(A) raccourcit progressivement au cours de la vie de l’ARN messager.',
          vraie: true,
          justification: 'Exact, ce raccourcissement favorise finalement sa dégradation.',
        },
        {
          lettre: 'C',
          texte: 'Les microARN peuvent réprimer la traduction et favoriser la dégradation d’un ARN messager ciblé.',
          vraie: true,
          justification: 'En s’appariant à une séquence complémentaire de la région 3′ non traduite, un microARN associé au complexe RISC bloque l’initiation de la traduction et favorise le raccourcissement puis la dégradation du transcrit ciblé.',
        },
        {
          lettre: 'D',
          texte: 'Un codon stop prématuré, en amont d’une jonction exon-exon marquée, entraîne la dégradation de l’ARN messager par la voie non-sens.',
          vraie: true,
          justification: 'Exact, c’est le mécanisme de surveillance NMD.',
        },
        {
          lettre: 'E',
          texte: 'Tous les ARN messagers ont exactement la même durée de vie dans le cytoplasme.',
          vraie: false,
          justification: 'Faux : la durée de vie des ARN messagers est très variable d’un transcrit à l’autre.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et D. La stabilité de l’ARN messager est un niveau de régulation à part entière de l’expression génique.',
      difficulte: 2,
    },
  ],
};
