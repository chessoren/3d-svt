import type { Fiche } from '../../types';

export const ficheBacteriologieGenerale: Fiche = {
  id: 'ue5-bacteriologie-generale',
  ue: 'ue5',
  titre: 'Bactériologie générale',
  sousTitre:
    'Structure bactérienne, paroi Gram positif et Gram négatif, coloration de Gram, croissance, génétique et virulence',
  chapitre: 'Agents infectieux',
  ordre: 10,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'bactérie',
    'paroi bactérienne',
    'Gram positif',
    'Gram négatif',
    'peptidoglycane',
    'coloration de Gram',
    'plasmide',
    'facteur de virulence',
    'antibiotique',
    'résistance bactérienne',
  ],
  objectifs: [
    'Décrire l’organisation générale d’une cellule bactérienne et ses principaux composants.',
    'Comparer la structure de la paroi des bactéries à Gram positif et à Gram négatif.',
    'Expliquer le principe de la coloration de Gram.',
    'Décrire les phases de la courbe de croissance bactérienne.',
    'Citer les mécanismes de transfert génétique horizontal chez les bactéries.',
    'Citer les principaux facteurs de virulence bactériens et les grands mécanismes de résistance aux antibiotiques.',
  ],
  sections: [
    {
      id: 'structure-generale',
      titre: 'Organisation générale de la cellule bactérienne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La bactérie est un micro-organisme procaryote unicellulaire, dépourvu de noyau individualisé et d’organites membranaires. Son matériel génétique est constitué d’un chromosome circulaire unique, libre dans le cytoplasme, dans une région appelée nucléoïde.",
        },
        {
          type: 'tableau',
          titre: 'Principaux constituants de la cellule bactérienne',
          colonnes: ['Structure', 'Caractéristique'],
          lignes: [
            ['Membrane plasmique', 'Bicouche phospholipidique, siège de la respiration et du transport'],
            ['Paroi bactérienne', 'Contient le peptidoglycane, confère la forme et la résistance à la pression osmotique'],
            ['Capsule', 'Structure externe facultative, souvent polysaccharidique, antiphagocytaire'],
            ['Flagelle', 'Appendice de mobilité, constitué de flagelline'],
            ['Pilus (ou fimbriae)', 'Appendice d’adhérence ; le pilus sexuel permet la conjugaison bactérienne'],
            ['Plasmide', 'ADN circulaire extrachromosomique, réplication autonome, porte souvent des gènes de résistance'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Spore bactérienne',
          texte:
            "Certaines bactéries à Gram positif (genres Bacillus et Clostridium) forment des spores, formes de résistance extrêmement résistantes à la chaleur, à la dessiccation et aux désinfectants usuels, permettant leur survie prolongée dans l’environnement en conditions défavorables.",
        },
      ],
    },
    {
      id: 'paroi-gram',
      titre: 'Paroi bactérienne et coloration de Gram',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le peptidoglycane (ou muréine) est un polymère constitué de chaînes de N-acétylglucosamine et d’acide N-acétylmuramique, reliées par des ponts peptidiques, formant un réseau rigide qui confère sa forme à la bactérie et la protège de la lyse osmotique.",
        },
        {
          type: 'comparaison',
          titre: 'Paroi Gram positif versus Gram négatif',
          gauche: {
            titre: 'Gram positif',
            points: [
              'Épaisse couche de peptidoglycane (plusieurs dizaines de nanomètres)',
              'Présence d’acides teichoïques',
              'Absence de membrane externe',
              'Absence de lipopolysaccharide (LPS)',
            ],
          },
          droite: {
            titre: 'Gram négatif',
            points: [
              'Fine couche de peptidoglycane',
              'Présence d’une membrane externe supplémentaire',
              'Espace périplasmique entre membrane interne et externe',
              'Lipopolysaccharide (LPS) dans le feuillet externe, responsable de l’activité endotoxinique',
            ],
          },
        },
        {
          type: 'etapes',
          titre: 'Principe de la coloration de Gram',
          etapes: [
            {
              titre: 'Coloration au cristal violet',
              detail: "Toutes les bactéries se colorent initialement en violet, le colorant pénétrant la paroi.",
            },
            {
              titre: 'Fixation par le lugol (mordant)',
              detail: "Le lugol forme un complexe insoluble avec le cristal violet, piégé dans le peptidoglycane.",
            },
            {
              titre: 'Décoloration à l’alcool-acétone',
              detail:
                "Chez les Gram positif, l’épais peptidoglycane retient le complexe coloré. Chez les Gram négatif, la fine paroi et la membrane externe lipidique, dissoute par l’alcool, laissent échapper le complexe : la bactérie se décolore.",
            },
            {
              titre: 'Coloration de contraste à la safranine',
              detail: "Les bactéries à Gram négatif, décolorées, se recolorent en rose-rouge avec la safranine ; les bactéries à Gram positif restent violettes.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Retenir la lecture microscopique',
          texte:
            "Au microscope après coloration de Gram : une bactérie à Gram positif apparaît violette (ou pourpre), une bactérie à Gram négatif apparaît rose ou rouge. Cette distinction guide directement le choix probabiliste de l’antibiothérapie en pratique clinique.",
        },
      ],
    },
    {
      id: 'croissance-bacterienne',
      titre: 'Croissance bactérienne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En milieu de culture liquide, la croissance d’une population bactérienne suit une courbe caractéristique en quatre phases successives.",
        },
        {
          type: 'tableau',
          titre: 'Phases de la croissance bactérienne',
          colonnes: ['Phase', 'Caractéristique'],
          lignes: [
            ['Phase de latence', 'Adaptation au milieu, peu ou pas de division cellulaire'],
            ['Phase exponentielle (log)', 'Division cellulaire maximale, temps de génération constant'],
            ['Phase stationnaire', 'Épuisement des nutriments, équilibre entre naissances et morts cellulaires'],
            ['Phase de déclin', 'Mortalité bactérienne supérieure au taux de multiplication'],
          ],
        },
        {
          type: 'definition',
          terme: 'Temps de génération',
          definition:
            "Durée nécessaire pour qu’une population bactérienne double d’effectif en phase exponentielle. Il varie considérablement selon les espèces, de vingt minutes environ pour Escherichia coli en conditions optimales à plusieurs heures pour des bactéries à croissance lente comme Mycobacterium tuberculosis.",
        },
      ],
    },
    {
      id: 'genetique-bacterienne',
      titre: 'Génétique bactérienne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au-delà de la division par scissiparité, les bactéries peuvent acquérir du matériel génétique nouveau par transfert horizontal, mécanisme majeur de diffusion des gènes de virulence et de résistance aux antibiotiques.",
        },
        {
          type: 'tableau',
          titre: 'Mécanismes de transfert génétique horizontal',
          colonnes: ['Mécanisme', 'Principe'],
          lignes: [
            ['Transformation', 'Capture directe d’ADN nu libre dans le milieu extérieur par une bactérie dite compétente'],
            ['Conjugaison', 'Transfert direct d’ADN (souvent un plasmide) d’une bactérie donneuse à une bactérie receveuse via un pilus sexuel'],
            ['Transduction', 'Transfert d’ADN bactérien par l’intermédiaire d’un bactériophage'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La conjugaison, mécanisme majeur de la résistance',
          texte:
            "La conjugaison bactérienne, via les plasmides de résistance (plasmides R), est le principal mécanisme de diffusion rapide et large de la résistance aux antibiotiques entre bactéries, y compris entre espèces différentes.",
        },
      ],
    },
    {
      id: 'virulence',
      titre: 'Facteurs de virulence bactériens',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La virulence bactérienne repose sur l’ensemble des facteurs qui permettent à la bactérie de coloniser un hôte, d’échapper à ses défenses immunitaires et de causer des dommages tissulaires.",
        },
        {
          type: 'tableau',
          titre: 'Principaux facteurs de virulence',
          colonnes: ['Facteur', 'Rôle'],
          lignes: [
            ['Capsule', 'Échappement à la phagocytose'],
            ['Adhésines (pili, protéines de surface)', 'Adhérence aux cellules de l’hôte, étape initiale de la colonisation'],
            ['Exotoxine', 'Protéine sécrétée, toxique, souvent à activité enzymatique spécifique (bactéries à Gram positif et négatif)'],
            ['Endotoxine (LPS)', 'Composant de la paroi des bactéries à Gram négatif, libéré lors de la lyse bactérienne, responsable du choc septique'],
            ['Enzymes d’invasion', 'Facilitent la dissémination tissulaire (hyaluronidase, collagénase)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Exotoxine versus endotoxine',
          texte:
            "L’exotoxine est une protéine sécrétée activement, thermolabile, hautement spécifique et immunogène (base des vaccins anatoxiniques), produite par des bactéries à Gram positif comme à Gram négatif. L’endotoxine (le LPS) est un composant structural de la paroi des bactéries à Gram négatif, thermostable, libéré uniquement lors de la lyse bactérienne, peu spécifique et faiblement immunogène.",
        },
      ],
    },
    {
      id: 'antibiotiques-resistances',
      titre: 'Antibiotiques et résistances',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les antibiotiques agissent sur des cibles bactériennes spécifiques, absentes ou différentes chez l’hôte humain, ce qui leur confère une toxicité sélective.",
        },
        {
          type: 'tableau',
          titre: 'Principales classes d’antibiotiques et leur cible',
          colonnes: ['Classe', 'Cible principale'],
          lignes: [
            ['Bêta-lactamines (pénicillines, céphalosporines)', 'Synthèse de la paroi bactérienne (protéines de liaison à la pénicilline)'],
            ['Glycopeptides (vancomycine)', 'Synthèse du peptidoglycane'],
            ['Aminosides', 'Synthèse protéique, sous-unité ribosomique 30S'],
            ['Macrolides', 'Synthèse protéique, sous-unité ribosomique 50S'],
            ['Fluoroquinolones', 'ADN gyrase et topo-isomérase IV'],
          ],
        },
        {
          type: 'liste',
          items: [
            "La résistance par inactivation enzymatique de l’antibiotique est le mécanisme le plus fréquent pour les bêta-lactamines, via la production de bêta-lactamases.",
            "La résistance par modification de la cible réduit l’affinité de l’antibiotique pour son site d’action (par exemple modification des protéines de liaison à la pénicilline).",
            "La résistance par imperméabilité ou efflux actif diminue la concentration intracellulaire de l’antibiotique disponible pour agir sur sa cible.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Résistance acquise et pression de sélection',
          texte:
            "L’usage répété et parfois inapproprié des antibiotiques exerce une pression de sélection qui favorise l’émergence et la diffusion de souches résistantes, notamment via les plasmides de résistance transférables par conjugaison, justifiant les politiques de bon usage des antibiotiques.",
        },
      ],
    },
  ],
  pointsCles: [
    'La bactérie est un procaryote sans noyau individualisé, avec un chromosome circulant libre dans le nucléoïde.',
    'La paroi Gram positif est épaisse (peptidoglycane, acides teichoïques), sans membrane externe ; la paroi Gram négatif est fine, avec membrane externe et LPS.',
    'La coloration de Gram repose sur la rétention ou non du complexe cristal violet-lugol lors de la décoloration à l’alcool.',
    'La courbe de croissance bactérienne comporte quatre phases : latence, exponentielle, stationnaire, déclin.',
    'Les trois mécanismes de transfert génétique horizontal sont la transformation, la conjugaison et la transduction.',
    'L’exotoxine est une protéine sécrétée et immunogène ; l’endotoxine (LPS) est un composant pariétal des Gram négatif, libéré lors de la lyse.',
    'Les trois grands mécanismes de résistance aux antibiotiques sont l’inactivation enzymatique, la modification de la cible et la diminution de la concentration intracellulaire (imperméabilité, efflux).',
  ],
  erreursFrequentes: [
    'Croire que les bactéries à Gram négatif ont une paroi plus épaisse que les Gram positif : c’est l’inverse.',
    'Confondre le rôle du lugol (fixateur) et celui de l’alcool-acétone (décolorant) dans la coloration de Gram.',
    'Penser que le LPS est présent chez les bactéries à Gram positif : il est spécifique de la membrane externe des Gram négatif.',
    'Confondre exotoxine (protéine sécrétée, très immunogène) et endotoxine (LPS pariétal, faiblement immunogène).',
    'Oublier que la conjugaison nécessite un contact direct via un pilus sexuel, contrairement à la transformation (ADN libre) et à la transduction (bactériophage).',
    'Attribuer systématiquement la résistance aux antibiotiques à une seule mutation chromosomique, en oubliant le rôle majeur des plasmides transférables.',
  ],
  mnemotechniques: [
    {
      moyen: 'Gram positif violet, Gram négatif rose : « P » avant « N », violet avant rose dans le mauve',
      explication:
        'Retenir simplement que les Gram positif restent colorés en violet foncé, les Gram négatif apparaissent roses après coloration de contraste.',
    },
    {
      moyen: '« TCT » pour les trois transferts génétiques',
      explication:
        'Transformation, Conjugaison, Transduction : les trois mécanismes de transfert horizontal du matériel génétique bactérien.',
    },
    {
      moyen: 'Exotoxine sort, endotoxine reste',
      explication:
        'L’exotoxine est sécrétée activement (elle « sort » de la bactérie vivante) ; l’endotoxine « reste » dans la paroi jusqu’à la lyse bactérienne.',
    },
  ],
  sources: [
    'Prescott, Microbiologie',
    'Avril, Bactériologie clinique',
    'Denis, Ploy, Martin, Bingen, Quentin, Bactériologie médicale',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue5-bacteriologie-generale-fc-01',
      recto: 'Où se situe le matériel génétique de la bactérie ?',
      verso: 'Dans le nucléoïde, région cytoplasmique sans membrane, sous forme d’un chromosome circulant unique.',
      type: 'definition',
      tags: ['structure bactérienne'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-02',
      recto: 'Quel polymère confère sa forme et sa rigidité à la paroi bactérienne ?',
      verso: 'Le peptidoglycane (ou muréine).',
      type: 'definition',
      tags: ['paroi bactérienne'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-03',
      recto: 'Quelle structure est spécifique de la membrane externe des bactéries à Gram négatif ?',
      verso: 'Le lipopolysaccharide (LPS).',
      type: 'definition',
      tags: ['Gram négatif'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-04',
      recto: 'Pourquoi les bactéries à Gram négatif se décolorent-elles à l’alcool-acétone ?',
      verso: 'Parce que leur fine paroi et leur membrane externe lipidique, dissoute par l’alcool, laissent échapper le complexe cristal violet-lugol.',
      type: 'mecanisme',
      tags: ['coloration de Gram'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-05',
      recto: 'Citer les quatre phases de la courbe de croissance bactérienne.',
      verso: 'Phase de latence, phase exponentielle, phase stationnaire, phase de déclin.',
      type: 'classification',
      tags: ['croissance bactérienne'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-06',
      recto: 'Qu’est-ce que le temps de génération ?',
      verso: 'La durée nécessaire pour qu’une population bactérienne double d’effectif en phase exponentielle.',
      type: 'definition',
      tags: ['croissance bactérienne'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-07',
      recto: 'Quel mécanisme de transfert génétique implique la capture d’ADN nu libre dans le milieu ?',
      verso: 'La transformation.',
      type: 'mecanisme',
      tags: ['génétique bactérienne'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-08',
      recto: 'Quel mécanisme de transfert génétique nécessite un pilus sexuel ?',
      verso: 'La conjugaison.',
      type: 'mecanisme',
      tags: ['génétique bactérienne'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-09',
      recto: 'Quelle est la différence essentielle entre exotoxine et endotoxine ?',
      verso: 'L’exotoxine est une protéine sécrétée et très immunogène ; l’endotoxine (LPS) est un composant structural de la paroi Gram négatif, libéré lors de la lyse bactérienne.',
      type: 'definition',
      tags: ['virulence'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-10',
      recto: 'Quelle enzyme bactérienne inactive fréquemment les bêta-lactamines ?',
      verso: 'La bêta-lactamase.',
      type: 'mecanisme',
      tags: ['résistance aux antibiotiques'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-11',
      recto: 'Quelle structure bactérienne confère une résistance à la phagocytose ?',
      verso: 'La capsule bactérienne.',
      type: 'mecanisme',
      tags: ['virulence'],
    },
    {
      id: 'ue5-bacteriologie-generale-fc-12',
      recto: 'Quels genres bactériens à Gram positif forment des spores ?',
      verso: 'Les genres Bacillus et Clostridium.',
      type: 'classification',
      tags: ['spore bactérienne'],
    },
  ],
  qcm: [
    {
      id: 'ue5-bacteriologie-generale-qcm-01',
      enonce: 'Concernant la structure bactérienne, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La bactérie possède un noyau individualisé délimité par une membrane nucléaire.', vraie: false, justification: 'La bactérie est un procaryote, sans noyau individualisé : son ADN est libre dans le nucléoïde.' },
        { lettre: 'B', texte: 'Le plasmide est un ADN circulaire extrachromosomique à réplication autonome.', vraie: true, justification: 'Exact, portant souvent des gènes de résistance ou de virulence.' },
        { lettre: 'C', texte: 'Le pilus sexuel permet la conjugaison bactérienne.', vraie: true, justification: 'Exact : c’est la structure par laquelle transite l’ADN transféré.' },
        { lettre: 'D', texte: 'La capsule est une structure obligatoire chez toutes les bactéries.', vraie: false, justification: 'La capsule est une structure facultative, présente chez certaines espèces seulement.' },
        { lettre: 'E', texte: 'La spore bactérienne est une forme végétative de multiplication active.', vraie: false, justification: 'La spore est au contraire une forme de résistance, dormante, non multiplicative.' },
      ],
      correction: 'Réponses exactes : B et C. La bactérie se distingue de la cellule eucaryote par l’absence de noyau individualisé.',
      difficulte: 1,
    },
    {
      id: 'ue5-bacteriologie-generale-qcm-02',
      enonce: 'Concernant la paroi bactérienne, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les bactéries à Gram positif possèdent une membrane externe.', vraie: false, justification: 'La membrane externe est spécifique des bactéries à Gram négatif.' },
        { lettre: 'B', texte: 'Le lipopolysaccharide est présent chez les bactéries à Gram négatif.', vraie: true, justification: 'Exact : il constitue le feuillet externe de leur membrane externe.' },
        { lettre: 'C', texte: 'Les bactéries à Gram positif possèdent une couche de peptidoglycane plus épaisse que les Gram négatif.', vraie: true, justification: 'Exact : c’est ce qui explique la rétention du colorant lors de la coloration de Gram.' },
        { lettre: 'D', texte: 'Les acides teichoïques sont caractéristiques de la paroi Gram négatif.', vraie: false, justification: 'Les acides teichoïques sont caractéristiques de la paroi Gram positif.' },
        { lettre: 'E', texte: 'L’espace périplasmique se situe entre la membrane interne et la membrane externe chez les Gram négatif.', vraie: true, justification: 'Exact, c’est une caractéristique structurale propre aux bactéries à Gram négatif.' },
      ],
      correction: 'Réponses exactes : B, C et E. La différence de paroi conditionne directement le résultat de la coloration de Gram.',
      difficulte: 2,
    },
    {
      id: 'ue5-bacteriologie-generale-qcm-03',
      enonce: 'Concernant la coloration de Gram, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le lugol agit comme mordant, fixant le cristal violet.', vraie: true, justification: 'Exact : il forme un complexe insoluble avec le colorant.' },
        { lettre: 'B', texte: 'Après décoloration à l’alcool, les bactéries à Gram positif apparaissent décolorées.', vraie: false, justification: 'Ce sont les bactéries à Gram négatif qui se décolorent ; les Gram positif retiennent le colorant violet.' },
        { lettre: 'C', texte: 'La safranine recolore les bactéries à Gram négatif en rose.', vraie: true, justification: 'Exact : c’est la coloration de contraste finale.' },
        { lettre: 'D', texte: 'La coloration de Gram permet une orientation rapide du choix de l’antibiothérapie probabiliste.', vraie: true, justification: 'Exact, en pratique clinique courante.' },
        { lettre: 'E', texte: 'Une bactérie à Gram positif apparaît rose au microscope après coloration complète.', vraie: false, justification: 'Une bactérie à Gram positif apparaît violette, pas rose.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir la séquence violet-lugol-alcool-safranine.',
      difficulte: 2,
    },
    {
      id: 'ue5-bacteriologie-generale-qcm-04',
      enonce: 'Concernant la croissance et la génétique bactérienne, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phase exponentielle correspond à la division cellulaire maximale.', vraie: true, justification: 'Exact : le temps de génération y est constant et minimal.' },
        { lettre: 'B', texte: 'La transduction fait intervenir un bactériophage.', vraie: true, justification: 'Exact : le phage transfère de l’ADN bactérien d’une cellule à l’autre.' },
        { lettre: 'C', texte: 'La transformation nécessite un contact direct entre deux bactéries.', vraie: false, justification: 'La transformation repose sur la capture d’ADN nu libre dans le milieu, sans contact direct.' },
        { lettre: 'D', texte: 'La phase de déclin correspond à une mortalité supérieure au taux de multiplication.', vraie: true, justification: 'Exact, du fait de l’épuisement des ressources et de l’accumulation de déchets toxiques.' },
        { lettre: 'E', texte: 'Le temps de génération est identique pour toutes les espèces bactériennes.', vraie: false, justification: 'Il varie fortement selon les espèces, de vingt minutes pour Escherichia coli à plusieurs heures pour Mycobacterium tuberculosis.' },
      ],
      correction: 'Réponses exactes : A, B et D. Les quatre phases de croissance et les trois mécanismes de transfert sont à bien distinguer.',
      difficulte: 2,
    },
    {
      id: 'ue5-bacteriologie-generale-qcm-05',
      enonce: 'Concernant les facteurs de virulence, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’exotoxine est un composant structural de la paroi.', vraie: false, justification: 'L’exotoxine est une protéine sécrétée activement, pas un composant structural.' },
        { lettre: 'B', texte: 'L’endotoxine correspond au lipopolysaccharide des bactéries à Gram négatif.', vraie: true, justification: 'Exact, libéré lors de la lyse bactérienne.' },
        { lettre: 'C', texte: 'L’exotoxine est en général très immunogène, base des vaccins anatoxiniques.', vraie: true, justification: 'Exact : c’est le principe des vaccins antitétanique et antidiphtérique.' },
        { lettre: 'D', texte: 'La capsule facilite la phagocytose bactérienne.', vraie: false, justification: 'La capsule limite au contraire la phagocytose, en masquant les structures reconnues par les phagocytes.' },
        { lettre: 'E', texte: 'Les adhésines interviennent dans l’étape initiale de colonisation de l’hôte.', vraie: true, justification: 'Exact, en permettant l’adhérence aux cellules de l’hôte.' },
      ],
      correction: 'Réponses exactes : B, C et E. Bien distinguer exotoxine (sécrétée, immunogène) et endotoxine (pariétale, libérée à la lyse).',
      difficulte: 2,
    },
    {
      id: 'ue5-bacteriologie-generale-qcm-06',
      enonce: 'Concernant les antibiotiques et les résistances, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les bêta-lactamines agissent sur la synthèse de la paroi bactérienne.', vraie: true, justification: 'Exact, via les protéines de liaison à la pénicilline.' },
        { lettre: 'B', texte: 'Les aminosides ciblent la sous-unité ribosomique 50S.', vraie: false, justification: 'Les aminosides ciblent la sous-unité ribosomique 30S ; la 50S est la cible des macrolides.' },
        { lettre: 'C', texte: 'La production de bêta-lactamases est un mécanisme fréquent de résistance aux bêta-lactamines.', vraie: true, justification: 'Exact : c’est le mécanisme d’inactivation enzymatique le plus classique.' },
        { lettre: 'D', texte: 'Les plasmides de résistance ne peuvent pas se transmettre entre espèces bactériennes différentes.', vraie: false, justification: 'La conjugaison peut transmettre des plasmides de résistance entre espèces bactériennes différentes.' },
        { lettre: 'E', texte: 'La modification de la cible peut réduire l’affinité d’un antibiotique pour son site d’action.', vraie: true, justification: 'Exact, c’est un des trois grands mécanismes de résistance bactérienne.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir les trois mécanismes principaux de résistance : inactivation, modification de cible, imperméabilité/efflux.',
      difficulte: 2,
    },
  ],
};
