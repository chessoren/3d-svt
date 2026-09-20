import type { Fiche } from '../../types';

export const ficheCelluleGeneralites: Fiche = {
  id: 'biocell-cellule-generalites',
  ue: 'biocell',
  titre: 'La cellule : généralités et méthodes d’étude',
  sousTitre: 'Théorie cellulaire, procaryotes et eucaryotes, ordres de grandeur, microscopies et techniques d’étude',
  chapitre: 'La cellule et ses membranes',
  ordre: 1,
  duree: 24,
  difficulte: 1,
  motsCles: [
    'théorie cellulaire',
    'procaryote',
    'eucaryote',
    'microscopie optique',
    'microscopie électronique',
    'fractionnement cellulaire',
    'culture cellulaire',
    'immunomarquage',
  ],
  objectifs: [
    'Énoncer les principes de la théorie cellulaire et situer la cellule dans la classification du vivant.',
    'Comparer l’organisation d’une cellule procaryote et d’une cellule eucaryote.',
    'Situer les principaux objets de la biologie cellulaire sur une échelle de tailles.',
    'Distinguer les principes et les usages de la microscopie optique et de la microscopie électronique.',
    'Décrire le principe du fractionnement cellulaire par centrifugation différentielle.',
    'Expliquer le principe de l’immunomarquage et son intérêt pour l’étude de la cellule.',
  ],
  sections: [
    {
      id: 'theorie-cellulaire',
      titre: 'La théorie cellulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La cellule est l’unité structurale et fonctionnelle de base de tous les organismes vivants. Cette idée, appelée théorie cellulaire, s’est construite au XIXe siècle grâce au perfectionnement du microscope optique.",
        },
        {
          type: 'liste',
          items: [
            'Tout être vivant est constitué d’une ou de plusieurs cellules (organismes unicellulaires ou pluricellulaires).',
            'La cellule est l’unité fonctionnelle minimale capable d’assurer, seule, les fonctions du vivant : métabolisme, croissance, reproduction, réponse à l’environnement.',
            'Toute cellule provient d’une cellule préexistante par division : c’est le principe résumé par la formule latine « omnis cellula e cellula », attribuée à Rudolf Virchow.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Repères historiques',
          texte:
            "Le terme « cellule » a été utilisé pour la première fois par Robert Hooke en 1665, en observant au microscope les alvéoles vides d’un fragment de liège. La théorie cellulaire moderne est formalisée au XIXe siècle par le botaniste Matthias Schleiden et le zoologiste Theodor Schwann, puis complétée par Rudolf Virchow sur l’origine des cellules par division.",
        },
        {
          type: 'paragraphe',
          texte:
            "Sur le plan de la classification du vivant, on distingue classiquement deux grands types d’organisation cellulaire : les procaryotes (bactéries et archées), dépourvus de noyau individualisé, et les eucaryotes, dont la cellule possède un noyau limité par une enveloppe et des organites membranaires.",
        },
      ],
    },
    {
      id: 'procaryotes-eucaryotes',
      titre: 'Cellules procaryotes et cellules eucaryotes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La distinction procaryote/eucaryote repose avant tout sur l’organisation du matériel génétique et sur la présence ou l’absence de compartiments intracellulaires délimités par des membranes.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des cellules procaryotes et eucaryotes',
          colonnes: ['Caractéristique', 'Cellule procaryote', 'Cellule eucaryote'],
          lignes: [
            ['Noyau', 'Absent : ADN condensé dans le nucléoïde, sans enveloppe', 'Présent : ADN entouré d’une enveloppe nucléaire à double membrane'],
            ['ADN', 'Généralement circulaire, unique, sans histones', 'Linéaire, associé à des histones, organisé en chromosomes'],
            ['Organites membranaires', 'Absents (pas de réticulum, de Golgi, de mitochondries)', 'Présents : réticulum endoplasmique, Golgi, mitochondries, etc.'],
            ['Ribosomes', 'Type 70S', 'Type 80S dans le cytosol'],
            ['Taille typique', 'De l’ordre du micromètre', 'De l’ordre de la dizaine de micromètres'],
            ['Exemples', 'Bactéries, archées', 'Animaux, végétaux, champignons, protistes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une exception à connaître',
          texte:
            "Les mitochondries et les chloroplastes des cellules eucaryotes possèdent leur propre ADN circulaire et des ribosomes de type procaryote : c’est l’un des arguments majeurs de la théorie endosymbiotique, qui explique leur origine par l’endosymbiose ancienne d’une bactérie par une cellule eucaryote ancestrale.",
        },
        {
          type: 'definition',
          terme: 'Nucléoïde',
          definition:
            "Région du cytoplasme bactérien où est concentré l’ADN, sans membrane limitante. Il ne s’agit pas d’un noyau au sens strict, faute d’enveloppe nucléaire individualisée.",
        },
      ],
    },
    {
      id: 'ordres-grandeur',
      titre: 'Ordres de grandeur en biologie cellulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Situer les objets biologiques sur une échelle de tailles permet de choisir la méthode d’observation adaptée et d’éviter les confusions fréquentes en QCM entre nanomètre et micromètre.",
        },
        {
          type: 'tableau',
          titre: 'Échelle de tailles en biologie',
          colonnes: ['Objet', 'Taille approximative', 'Unité'],
          lignes: [
            ['Atome', '0,1', 'nanomètre'],
            ['Petite molécule, acide aminé', '1', 'nanomètre'],
            ['Protéine globulaire', '5 à 10', 'nanomètres'],
            ['Ribosome', '20 à 30', 'nanomètres'],
            ['Virus', '20 à 300', 'nanomètres'],
            ['Bactérie', '1 à 5', 'micromètres'],
            ['Cellule eucaryote', '10 à 30 (souvent jusqu’à 100)', 'micromètres'],
            ['Ovocyte humain', 'environ 100 à 120', 'micromètres'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Retenir l’essentiel',
          texte:
            "Le micromètre (µm) est l’unité de référence pour la taille des cellules ; le nanomètre (nm) est celle des macromolécules et des virus. Un micromètre vaut 1000 nanomètres. L’œil humain ne distingue pas, à l’œil nu, des objets plus petits qu’environ 100 micromètres.",
        },
      ],
    },
    {
      id: 'microscopies',
      titre: 'Microscopie optique et microscopie électronique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’observation des cellules nécessite un système optique grossissant, car la plupart des structures cellulaires sont invisibles à l’œil nu. Le pouvoir séparateur, ou résolution, est la distance minimale entre deux points permettant de les distinguer comme distincts : c’est ce paramètre, et non le seul grossissement, qui limite la microscopie.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des principales microscopies',
          colonnes: ['Type', 'Principe', 'Résolution usuelle', 'Exemple d’usage'],
          lignes: [
            ['Microscopie optique (photonique)', 'Faisceau de lumière visible traversant ou réfléchi par l’échantillon', 'De l’ordre de 200 nanomètres', 'Observation de cellules vivantes, coupes histologiques'],
            ['Microscopie à fluorescence', 'Excitation de fluorophores puis détection de la lumière réémise', 'De l’ordre de 200 nanomètres (mieux en confocal)', 'Localisation de protéines marquées, immunofluorescence'],
            ['Microscopie électronique à transmission', 'Faisceau d’électrons traversant une coupe ultrafine sous vide', 'De l’ordre du nanomètre', 'Ultrastructure des organites'],
            ['Microscopie électronique à balayage', 'Faisceau d’électrons balayant la surface d’un échantillon métallisé', 'De l’ordre de quelques nanomètres', 'Relief et surface des structures'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Pourquoi les électrons résolvent mieux que la lumière',
          texte:
            "Le pouvoir de résolution d’un microscope dépend de la longueur d’onde du rayonnement utilisé : plus elle est courte, plus deux points proches peuvent être distingués. La longueur d’onde associée à un faisceau d’électrons accélérés est très inférieure à celle de la lumière visible, ce qui explique le gain de résolution considérable de la microscopie électronique par rapport à la microscopie optique.",
        },
        {
          type: 'liste',
          items: [
            "La préparation pour la microscopie électronique impose une fixation chimique, une déshydratation, une inclusion en résine, des coupes ultrafines et une coloration par des sels de métaux lourds (osmium, uranium, plomb) : l’échantillon est mort et placé sous vide.",
            "La microscopie optique autorise, à l’inverse, l’observation de cellules vivantes, en particulier en contraste de phase ou en contraste interférentiel (Nomarski), techniques qui augmentent le contraste de structures transparentes sans coloration.",
            "La microscopie confocale associe un balayage laser point par point et un diaphragme (pinhole) qui élimine la lumière hors du plan focal, ce qui améliore le contraste et permet des reconstructions en trois dimensions.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Piège classique',
          texte:
            "Ne confondez pas grossissement et résolution : un microscope optique peut être grossi numériquement sans que deux structures très proches deviennent pour autant distinguables. Ce qui limite l’observation des détails fins est la résolution, fixée par la longueur d’onde utilisée.",
        },
      ],
    },
    {
      id: 'fractionnement-cellulaire',
      titre: 'Le fractionnement cellulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le fractionnement cellulaire permet d’isoler les organites d’une cellule pour en étudier la composition biochimique. Il repose sur une lyse douce des cellules (homogénéisation) suivie d’une séparation des constituants selon leur taille et leur densité.",
        },
        {
          type: 'etapes',
          titre: 'Principe de la centrifugation différentielle',
          etapes: [
            {
              titre: 'Homogénéisation',
              detail:
                "Les cellules sont broyées doucement dans un milieu isotonique froid, ce qui rompt la membrane plasmique tout en préservant globalement l’intégrité des organites.",
            },
            {
              titre: 'Centrifugations successives à vitesse croissante',
              detail:
                "L’homogénat est centrifugé à des vitesses croissantes : les composants les plus gros et les plus denses (noyaux, débris cellulaires) sédimentent aux plus faibles vitesses, puis les mitochondries, lysosomes et peroxysomes à des vitesses intermédiaires, puis les microsomes (fragments de réticulum endoplasmique) et enfin les ribosomes libres à très haute vitesse, en ultracentrifugation.",
            },
            {
              titre: 'Purification fine par gradient de densité',
              detail:
                "Un culot peut être repris et déposé sur un gradient de densité, le plus souvent de saccharose : lors de la centrifugation, chaque organite migre jusqu’à la zone où la densité de la solution égale la sienne (centrifugation isopycnique), ce qui affine la séparation.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Ordre de sédimentation à retenir',
          texte:
            "Du plus gros et du plus lourd au plus petit et au plus léger : noyaux et débris cellulaires, puis mitochondries (avec lysosomes et peroxysomes), puis microsomes, puis ribosomes et macromolécules solubles dans le surnageant final.",
        },
        {
          type: 'paragraphe',
          texte:
            "Les fractions obtenues sont ensuite analysées par des dosages enzymatiques spécifiques d’un organite (marqueurs biochimiques), par électrophorèse ou par observation en microscopie électronique, ce qui permet de vérifier la pureté de chaque fraction.",
        },
      ],
    },
    {
      id: 'culture-immunomarquage',
      titre: 'Culture cellulaire et immunomarquage',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La culture cellulaire consiste à maintenir des cellules vivantes en dehors de l’organisme, dans un milieu de culture apportant nutriments, facteurs de croissance et conditions physico-chimiques contrôlées (température, atmosphère enrichie en dioxyde de carbone, pH).",
        },
        {
          type: 'comparaison',
          titre: 'Culture primaire et lignée cellulaire',
          gauche: {
            titre: 'Culture primaire',
            points: [
              'Cellules prélevées directement sur un tissu',
              'Capacité de division limitée dans le temps',
              'Conserve des caractéristiques proches du tissu d’origine',
            ],
          },
          droite: {
            titre: 'Lignée cellulaire établie',
            points: [
              'Cellules capables de se diviser indéfiniment (immortalisées)',
              'Souvent issues d’un processus tumoral ou d’une transformation',
              'Exemple historique : les cellules HeLa, issues d’un cancer du col de l’utérus',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Les cellules HeLa',
          texte:
            "Prélevées en 1951 sur une patiente, Henrietta Lacks, atteinte d’un cancer du col de l’utérus, les cellules HeLa ont été la première lignée cellulaire humaine immortalisée cultivée en laboratoire. Elles sont depuis largement utilisées en recherche biomédicale.",
        },
        {
          type: 'paragraphe',
          texte:
            "L’immunomarquage exploite la spécificité de la reconnaissance antigène-anticorps pour localiser une protéine donnée dans une cellule ou un tissu. Un anticorps primaire reconnaît spécifiquement l’antigène d’intérêt (immunomarquage direct), ou bien un anticorps secondaire couplé à un fluorophore ou à une enzyme reconnaît l’anticorps primaire (immunomarquage indirect, plus sensible car il amplifie le signal).",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Immunofluorescence directe et indirecte',
          texte:
            "En immunofluorescence directe, l’anticorps dirigé contre l’antigène porte lui-même le fluorophore. En immunofluorescence indirecte, un anticorps secondaire fluorescent, dirigé contre l’anticorps primaire, permet d’amplifier le signal en se fixant sur plusieurs sites : la méthode indirecte est plus sensible mais plus longue à mettre en œuvre.",
        },
      ],
    },
  ],
  pointsCles: [
    "La théorie cellulaire pose que la cellule est l’unité de base du vivant et que toute cellule provient d’une cellule préexistante.",
    "Les cellules procaryotes n’ont pas de noyau individualisé ni d’organites membranaires ; les cellules eucaryotes possèdent les deux.",
    "Mitochondries et chloroplastes possèdent un ADN et des ribosomes de type procaryote, arguments de la théorie endosymbiotique.",
    "Le micromètre est l’échelle des cellules, le nanomètre celle des macromolécules et des virus.",
    "La résolution d’un microscope, et non son seul grossissement, limite la capacité à distinguer deux points proches.",
    "La microscopie électronique impose la fixation et le vide, donc l’observation de cellules mortes ; la microscopie optique permet l’observation du vivant.",
    "Le fractionnement cellulaire sépare les organites par centrifugation différentielle croissante, puis affine la séparation par gradient de densité.",
    "L’immunomarquage indirect amplifie le signal en utilisant un anticorps secondaire dirigé contre l’anticorps primaire.",
  ],
  erreursFrequentes: [
    "Confondre grossissement et résolution : un fort grossissement n’améliore pas la capacité à distinguer deux points très rapprochés.",
    "Croire que toutes les bactéries sont dépourvues de tout ADN organisé : elles possèdent un nucléoïde, simplement dépourvu d’enveloppe.",
    "Attribuer aux mitochondries des ribosomes de type 80S : ils sont de type procaryote, argument clé de la théorie endosymbiotique.",
    "Penser que la microscopie électronique permet d’observer des cellules vivantes : la préparation sous vide impose des cellules fixées et mortes.",
    "Inverser l’ordre de sédimentation en centrifugation différentielle : les noyaux sédimentent aux plus faibles vitesses, les ribosomes aux plus fortes.",
    "Confondre immunomarquage direct et indirect : seul l’indirect utilise un anticorps secondaire pour amplifier le signal.",
  ],
  mnemotechniques: [
    {
      moyen: 'Du plus gros au plus léger : « Noyaux Mangent Mille Riz »',
      explication:
        'Ordre de sédimentation croissant en centrifugation différentielle : Noyaux, Mitochondries (avec lysosomes/peroxysomes), Microsomes, Ribosomes.',
    },
    {
      moyen: '« PROcaryote = PAS de noyau »',
      explication:
        'Le préfixe pro- (avant) rappelle l’absence de noyau individualisé, à la différence du préfixe eu- (vrai) de eucaryote, qui possède un vrai noyau.',
    },
    {
      moyen: 'Nanomètre pour les molécules, micromètre pour les cellules',
      explication:
        'Retenir que le préfixe « nano » (10⁻⁹) s’applique aux macromolécules et virus, et « micro » (10⁻⁶) aux cellules, soit un facteur 1000 entre les deux échelles.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Pollard, Earnshaw, Lippincott-Schwartz, Biologie cellulaire, 3e édition',
    'Maillet, Biologie cellulaire',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'biocell-cellule-generalites-fc-01',
      recto: 'Qui a formulé le principe « omnis cellula e cellula » ?',
      verso: 'Rudolf Virchow, au XIXe siècle : toute cellule provient d’une cellule préexistante par division.',
      type: 'definition',
      tags: ['théorie cellulaire', 'histoire'],
    },
    {
      id: 'biocell-cellule-generalites-fc-02',
      recto: 'Quelle est la principale différence structurale entre procaryote et eucaryote ?',
      verso: 'L’eucaryote possède un noyau individualisé par une enveloppe et des organites membranaires ; le procaryote en est dépourvu.',
      type: 'definition',
      tags: ['procaryote', 'eucaryote'],
    },
    {
      id: 'biocell-cellule-generalites-fc-03',
      recto: 'Quel argument structural soutient la théorie endosymbiotique des mitochondries ?',
      verso: 'Les mitochondries possèdent leur propre ADN circulaire et des ribosomes de type procaryote (70S), comme une bactérie.',
      type: 'mecanisme',
      tags: ['mitochondrie', 'endosymbiose'],
    },
    {
      id: 'biocell-cellule-generalites-fc-04',
      recto: 'Quelle est la taille approximative d’une cellule eucaryote typique ?',
      verso: 'De l’ordre de 10 à 30 micromètres, pouvant atteindre une centaine de micromètres pour certaines cellules.',
      type: 'chiffre',
      tags: ['ordres de grandeur'],
    },
    {
      id: 'biocell-cellule-generalites-fc-05',
      recto: 'Quelle est la résolution usuelle d’un microscope optique ?',
      verso: 'De l’ordre de 200 nanomètres, limitée par la longueur d’onde de la lumière visible.',
      type: 'chiffre',
      tags: ['microscopie optique', 'résolution'],
    },
    {
      id: 'biocell-cellule-generalites-fc-06',
      recto: 'Pourquoi la microscopie électronique a-t-elle une meilleure résolution que la microscopie optique ?',
      verso: 'La longueur d’onde associée aux électrons accélérés est bien plus courte que celle de la lumière visible.',
      type: 'mecanisme',
      tags: ['microscopie électronique'],
    },
    {
      id: 'biocell-cellule-generalites-fc-07',
      recto: 'Quelle est la première étape du fractionnement cellulaire ?',
      verso: 'L’homogénéisation : broyage doux des cellules dans un milieu isotonique froid pour rompre la membrane plasmique.',
      type: 'mecanisme',
      tags: ['fractionnement cellulaire'],
    },
    {
      id: 'biocell-cellule-generalites-fc-08',
      recto: 'Quel type de centrifugation permet une séparation fine des organites selon leur densité ?',
      verso: 'La centrifugation isopycnique sur gradient de densité, le plus souvent de saccharose.',
      type: 'definition',
      tags: ['centrifugation', 'gradient de densité'],
    },
    {
      id: 'biocell-cellule-generalites-fc-09',
      recto: 'Que sont les cellules HeLa ?',
      verso: 'La première lignée cellulaire humaine immortalisée, prélevée en 1951 sur Henrietta Lacks, atteinte d’un cancer du col de l’utérus.',
      type: 'clinique',
      tags: ['culture cellulaire', 'lignée cellulaire'],
    },
    {
      id: 'biocell-cellule-generalites-fc-10',
      recto: 'Quelle est la différence entre immunofluorescence directe et indirecte ?',
      verso: 'En direct, l’anticorps primaire porte lui-même le fluorophore ; en indirect, un anticorps secondaire fluorescent reconnaît l’anticorps primaire, ce qui amplifie le signal.',
      type: 'mecanisme',
      tags: ['immunomarquage'],
    },
    {
      id: 'biocell-cellule-generalites-fc-11',
      recto: 'Que désigne le nucléoïde bactérien ?',
      verso: 'La région du cytoplasme où est concentré l’ADN bactérien, sans membrane limitante propre.',
      type: 'definition',
      tags: ['procaryote', 'nucléoïde'],
    },
    {
      id: 'biocell-cellule-generalites-fc-12',
      recto: 'Quel paramètre limite réellement la capacité d’un microscope à distinguer deux points proches ?',
      verso: 'La résolution (pouvoir séparateur), et non le grossissement seul.',
      type: 'definition',
      tags: ['microscopie', 'résolution'],
    },
  ],
  qcm: [
    {
      id: 'biocell-cellule-generalites-qcm-01',
      enonce: 'Concernant la théorie cellulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La cellule est considérée comme l’unité structurale et fonctionnelle du vivant.', vraie: true, justification: 'C’est le premier principe de la théorie cellulaire.' },
        { lettre: 'B', texte: 'Le terme « cellule » a été introduit par Rudolf Virchow.', vraie: false, justification: 'Il a été introduit par Robert Hooke en 1665, en observant du liège au microscope.' },
        { lettre: 'C', texte: 'Toute cellule provient d’une cellule préexistante par division.', vraie: true, justification: 'C’est le principe « omnis cellula e cellula » formulé par Virchow.' },
        { lettre: 'D', texte: 'Tous les organismes vivants sont pluricellulaires.', vraie: false, justification: 'De nombreux organismes vivants, comme les bactéries, sont unicellulaires.' },
        { lettre: 'E', texte: 'Schleiden et Schwann ont contribué à formaliser la théorie cellulaire au XIXe siècle.', vraie: true, justification: 'Schleiden pour les végétaux et Schwann pour les animaux ont posé les bases de la théorie cellulaire moderne.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir les trois principes de la théorie cellulaire et les figures historiques associées.',
      difficulte: 1,
    },
    {
      id: 'biocell-cellule-generalites-qcm-02',
      enonce: 'Concernant les cellules procaryotes et eucaryotes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les procaryotes possèdent un noyau limité par une enveloppe.', vraie: false, justification: 'Les procaryotes sont dépourvus de noyau individualisé ; leur ADN est dans le nucléoïde.' },
        { lettre: 'B', texte: 'Les ribosomes cytosoliques des eucaryotes sont de type 80S.', vraie: true, justification: 'C’est une caractéristique constante des ribosomes cytosoliques eucaryotes.' },
        { lettre: 'C', texte: 'Les bactéries possèdent des mitochondries.', vraie: false, justification: 'Les mitochondries sont des organites propres aux cellules eucaryotes.' },
        { lettre: 'D', texte: 'L’ADN bactérien est le plus souvent circulaire.', vraie: true, justification: 'Le chromosome bactérien est typiquement circulaire, contrairement aux chromosomes eucaryotes linéaires.' },
        { lettre: 'E', texte: 'Les archées sont des organismes eucaryotes.', vraie: false, justification: 'Les archées constituent, avec les bactéries, l’un des deux grands groupes d’organismes procaryotes.' },
      ],
      correction: 'Réponses exactes : B et D. Bien distinguer les trois domaines du vivant : bactéries, archées et eucaryotes.',
      difficulte: 1,
    },
    {
      id: 'biocell-cellule-generalites-qcm-03',
      enonce: 'Concernant les ordres de grandeur en biologie cellulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une bactérie mesure typiquement entre 1 et 5 micromètres.', vraie: true, justification: 'C’est l’ordre de grandeur habituel des bactéries.' },
        { lettre: 'B', texte: 'Un ribosome mesure environ 20 à 30 nanomètres.', vraie: true, justification: 'C’est l’ordre de grandeur usuel du ribosome, intermédiaire entre une protéine et un virus.' },
        { lettre: 'C', texte: 'Un virus est en général plus grand qu’une bactérie.', vraie: false, justification: 'Un virus (quelques dizaines à quelques centaines de nanomètres) est en général bien plus petit qu’une bactérie (quelques micromètres).' },
        { lettre: 'D', texte: 'Un micromètre équivaut à 1000 nanomètres.', vraie: true, justification: 'La relation entre les deux unités est : 1 µm = 1000 nm.' },
        { lettre: 'E', texte: 'Une cellule eucaryote est en général plus petite qu’une bactérie.', vraie: false, justification: 'Une cellule eucaryote est en général nettement plus grande qu’une bactérie.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir l’ordre croissant : macromolécule < virus < bactérie < cellule eucaryote.',
      difficulte: 1,
    },
    {
      id: 'biocell-cellule-generalites-qcm-04',
      enonce: 'Concernant les techniques de microscopie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La résolution d’un microscope optique est de l’ordre de 200 nanomètres.', vraie: true, justification: 'C’est l’ordre de grandeur classiquement retenu, lié à la longueur d’onde de la lumière visible.' },
        { lettre: 'B', texte: 'La microscopie électronique permet d’observer des cellules vivantes.', vraie: false, justification: 'La préparation sous vide et la fixation chimique imposent des cellules mortes.' },
        { lettre: 'C', texte: 'La microscopie électronique à balayage renseigne surtout sur le relief de surface d’un échantillon.', vraie: true, justification: 'Le faisceau d’électrons balaie la surface métallisée de l’échantillon et donne une image en relief.' },
        { lettre: 'D', texte: 'Le contraste de phase permet d’observer des structures transparentes sans coloration.', vraie: true, justification: 'Cette technique optique augmente le contraste des structures peu absorbantes, comme des cellules vivantes non colorées.' },
        { lettre: 'E', texte: 'Le grossissement seul détermine la capacité à distinguer deux points rapprochés.', vraie: false, justification: 'C’est la résolution, et non le seul grossissement, qui détermine cette capacité.' },
      ],
      correction: 'Réponses exactes : A, C et D. Bien distinguer résolution et grossissement, et connaître les usages respectifs des microscopies optique et électronique.',
      difficulte: 2,
    },
    {
      id: 'biocell-cellule-generalites-qcm-05',
      enonce: 'Concernant le fractionnement cellulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La première étape est l’homogénéisation des cellules.', vraie: true, justification: 'Elle rompt la membrane plasmique tout en préservant globalement les organites.' },
        { lettre: 'B', texte: 'Les noyaux sédimentent aux vitesses de centrifugation les plus faibles.', vraie: true, justification: 'Ce sont les composants les plus gros et les plus denses, ils sédimentent donc en premier.' },
        { lettre: 'C', texte: 'Les ribosomes sédimentent avant les mitochondries.', vraie: false, justification: 'Les ribosomes, très petits, ne sédimentent qu’à très haute vitesse, après les mitochondries.' },
        { lettre: 'D', texte: 'La centrifugation isopycnique sépare les composants selon leur seule taille.', vraie: false, justification: 'Elle les sépare selon leur densité : chaque composant migre jusqu’à la zone de densité égale à la sienne.' },
        { lettre: 'E', texte: 'Le saccharose est couramment utilisé pour établir un gradient de densité.', vraie: true, justification: 'Le gradient de saccharose est le support classique de la centrifugation isopycnique en biologie cellulaire.' },
      ],
      correction: 'Réponses exactes : A, B et E. Retenir l’ordre croissant de sédimentation et le rôle du gradient de densité.',
      difficulte: 2,
    },
    {
      id: 'biocell-cellule-generalites-qcm-06',
      enonce: 'Concernant la culture cellulaire et l’immunomarquage, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une culture primaire a une capacité de division illimitée.', vraie: false, justification: 'C’est au contraire la caractéristique d’une lignée cellulaire immortalisée ; une culture primaire a une capacité de division limitée.' },
        { lettre: 'B', texte: 'Les cellules HeLa constituent une lignée cellulaire immortalisée.', vraie: true, justification: 'Elles se divisent indéfiniment en culture depuis leur prélèvement en 1951.' },
        { lettre: 'C', texte: 'L’immunomarquage repose sur la reconnaissance spécifique entre un antigène et un anticorps.', vraie: true, justification: 'C’est le principe fondamental de toutes les techniques d’immunomarquage.' },
        { lettre: 'D', texte: 'L’immunofluorescence indirecte est en général moins sensible que la directe.', vraie: false, justification: 'C’est l’inverse : l’anticorps secondaire amplifie le signal en se fixant sur plusieurs épitopes de l’anticorps primaire.' },
        { lettre: 'E', texte: 'La culture cellulaire nécessite un milieu apportant nutriments et facteurs de croissance.', vraie: true, justification: 'Le milieu de culture doit reconstituer les conditions nécessaires à la survie et à la prolifération des cellules.' },
      ],
      correction: 'Réponses exactes : B, C et E. Bien distinguer culture primaire et lignée établie, et retenir que l’immunomarquage indirect amplifie le signal.',
      difficulte: 2,
    },
  ],
};
