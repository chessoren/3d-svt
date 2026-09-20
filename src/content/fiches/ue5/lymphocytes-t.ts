import type { Fiche } from '../../types';

export const ficheLymphocytesT: Fiche = {
  id: 'ue5-lymphocytes-t',
  ue: 'ue5',
  titre: 'Les lymphocytes T',
  sousTitre:
    'Récepteur T, sélections thymiques, sous-populations CD4 et CD8, polarisation Th1/Th2/Th17/Treg, activation et cytotoxicité',
  chapitre: 'Immunité adaptative',
  ordre: 7,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'lymphocyte T',
    'récepteur T',
    'TCR',
    'thymus',
    'sélection positive',
    'sélection négative',
    'CD4',
    'CD8',
    'Th1',
    'Th2',
    'Th17',
    'Treg',
    'costimulation',
  ],
  objectifs: [
    'Décrire la structure du récepteur T (TCR) et son association au complexe CD3.',
    'Expliquer les mécanismes de sélection positive et négative au cours de la maturation thymique.',
    'Distinguer les sous-populations CD4 et CD8 et leurs fonctions respectives.',
    'Décrire les principales sous-populations de lymphocytes T CD4 auxiliaires et leur polarisation cytokinique.',
    'Expliquer les signaux nécessaires à l’activation complète d’un lymphocyte T naïf.',
    'Décrire le mécanisme de la cytotoxicité du lymphocyte T CD8.',
  ],
  sections: [
    {
      id: 'recepteur-t',
      titre: 'Le récepteur T (TCR)',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le récepteur T (T Cell Receptor, TCR) est une glycoprotéine membranaire hétérodimérique, exprimée à la surface de chaque lymphocyte T, qui lui confère sa spécificité antigénique. Il reconnaît un peptide présenté par une molécule du CMH, jamais un antigène libre.",
        },
        {
          type: 'liste',
          items: [
            "La majorité des lymphocytes T (environ 95 %) expriment un TCR alpha-bêta ; une minorité exprime un TCR gamma-delta, aux propriétés proches de l’immunité innée.",
            "Comme les immunoglobulines, les chaînes du TCR sont générées par recombinaison somatique VDJ (chaîne bêta) ou VJ (chaîne alpha), catalysée par RAG1 et RAG2, ce qui explique l’immense diversité du répertoire T.",
            "Le TCR est associé de façon non covalente au complexe CD3 (chaînes gamma, delta, epsilon et zêta), qui ne participe pas à la reconnaissance antigénique mais assure la transduction du signal intracellulaire après engagement du TCR.",
          ],
        },
        {
          type: 'definition',
          terme: 'Corécepteurs CD4 et CD8',
          definition:
            "Molécules membranaires qui stabilisent l’interaction entre le TCR et le complexe CMH-peptide, en se liant respectivement aux domaines constants du CMH de classe II (CD4) et de classe I (CD8), et participent à la transduction du signal d’activation.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'TCR sans mémoire clonale d’affinité',
          texte:
            "Contrairement au récepteur B, le TCR ne subit pas d’hypermutation somatique après activation : sa spécificité et son affinité restent fixes tout au long de la vie du clone T, seule sa quantité d’expression et son état de différenciation évoluant.",
        },
      ],
    },
    {
      id: 'selection-thymique',
      titre: 'Maturation et sélections thymiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les précurseurs lymphoïdes T, issus de la moelle osseuse, migrent vers le thymus où ils subissent un processus de maturation en plusieurs étapes, aboutissant à un répertoire T à la fois fonctionnel et tolérant vis-à-vis du soi.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la maturation thymique',
          etapes: [
            {
              titre: 'Stade double négatif',
              detail:
                "Le thymocyte immature, situé dans le cortex thymique, n’exprime ni CD4 ni CD8 ; il réarrange ses gènes du TCR.",
            },
            {
              titre: 'Stade double positif',
              detail:
                "Après réarrangement productif, le thymocyte exprime transitoirement à la fois CD4 et CD8, ainsi qu’un TCR fonctionnel complet.",
            },
            {
              titre: 'Sélection positive',
              detail:
                "Dans le cortex, les thymocytes double positifs dont le TCR reconnaît avec une affinité modérée les molécules du CMH du soi exprimées par les cellules épithéliales corticales survivent ; les autres meurent par apoptose (mort par négligence).",
            },
            {
              titre: 'Sélection négative',
              detail:
                "Dans la médullaire thymique, les thymocytes dont le TCR reconnaît avec une trop forte affinité un peptide du soi présenté par les cellules dendritiques et les cellules épithéliales médullaires sont éliminés par apoptose, ce qui établit la tolérance centrale.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir l’ordre cortex puis médullaire',
          texte:
            "La sélection positive a lieu dans le cortex thymique et teste la capacité à reconnaître le CMH du soi (« sauver ceux qui sont utiles »). La sélection négative a lieu dans la médullaire et élimine les clones trop autoréactifs (« éliminer ceux qui sont dangereux »).",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Gène AIRE et tolérance centrale',
          texte:
            "Le facteur de transcription AIRE (autoimmune regulator), exprimé par les cellules épithéliales médullaires thymiques, permet l’expression ectopique d’antigènes normalement restreints à des tissus périphériques, élargissant ainsi le spectre de la sélection négative. Sa mutation est responsable du syndrome polyendocrinien auto-immun de type 1.",
        },
      ],
    },
    {
      id: 'sous-populations',
      titre: 'Sous-populations CD4 et CD8',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au terme de la sélection thymique, les thymocytes double positifs se différencient en lymphocytes T simple positifs, exprimant soit CD4, soit CD8, selon la classe de CMH qui a permis leur sélection positive.",
        },
        {
          type: 'tableau',
          titre: 'Lymphocytes T CD4 versus CD8',
          colonnes: ['Sous-population', 'Restriction CMH', 'Fonction principale'],
          lignes: [
            ['Lymphocyte T CD4 (auxiliaire, helper)', 'Classe II', 'Coordination de la réponse immunitaire par sécrétion de cytokines, aide aux lymphocytes B et aux CD8'],
            ['Lymphocyte T CD8 (cytotoxique)', 'Classe I', 'Lyse directe des cellules infectées ou tumorales'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Lymphocyte T régulateur',
          texte:
            "Une population particulière de lymphocytes T CD4, les lymphocytes T régulateurs (Treg), caractérisée par l’expression du facteur de transcription FoxP3 et du marqueur CD25, exerce une fonction de suppression active de la réponse immunitaire et contribue à la tolérance périphérique.",
        },
      ],
    },
    {
      id: 'polarisation-th',
      titre: 'Polarisation des lymphocytes T CD4 auxiliaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Selon le contexte cytokinique présent au moment de son activation, le lymphocyte T CD4 naïf se différencie en différentes sous-populations effectrices, caractérisées par un facteur de transcription maître et un profil cytokinique propres.",
        },
        {
          type: 'tableau',
          titre: 'Sous-populations de lymphocytes T CD4 auxiliaires',
          colonnes: ['Sous-population', 'Facteur de transcription', 'Cytokines produites', 'Fonction'],
          lignes: [
            ['Th1', 'T-bet', 'Interféron gamma', 'Activation des macrophages, défense contre les pathogènes intracellulaires'],
            ['Th2', 'GATA3', 'IL-4, IL-5, IL-13', 'Aide aux lymphocytes B, défense antiparasitaire, allergie'],
            ['Th17', 'RORgammaT', 'IL-17', 'Recrutement des polynucléaires neutrophiles, défense antifongique et antibactérienne extracellulaire'],
            ['Treg', 'FoxP3', 'IL-10, TGF-bêta', 'Suppression et régulation de la réponse immunitaire, tolérance périphérique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Polarisation dépendante des cytokines de l’environnement',
          texte:
            "La polarisation Th1 est induite par l’IL-12 (produite par les cellules dendritiques) et l’interféron gamma. La polarisation Th2 est induite par l’IL-4. La polarisation Th17 est induite notamment par le TGF-bêta associé à l’IL-6. La différenciation Treg est favorisée par le TGF-bêta seul, en l’absence de signal inflammatoire.",
        },
      ],
    },
    {
      id: 'activation-costimulation',
      titre: 'Activation du lymphocyte T naïf',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’activation complète d’un lymphocyte T naïf nécessite l’intégration de plusieurs signaux délivrés par la cellule présentatrice d’antigène, le plus souvent une cellule dendritique mature dans un organe lymphoïde secondaire.",
        },
        {
          type: 'etapes',
          titre: 'Signaux nécessaires à l’activation lymphocytaire T',
          etapes: [
            {
              titre: 'Signal 1 : reconnaissance spécifique',
              detail:
                "Engagement du TCR par le complexe CMH-peptide, stabilisé par le corécepteur CD4 ou CD8.",
            },
            {
              titre: 'Signal 2 : costimulation',
              detail:
                "Interaction entre CD28, exprimé de façon constitutive à la surface du lymphocyte T, et les molécules CD80/CD86, exprimées uniquement par les cellules présentatrices d’antigène activées. En l’absence de ce second signal, le lymphocyte T entre en anergie plutôt que de s’activer.",
            },
            {
              titre: 'Signal 3 : polarisation cytokinique',
              detail:
                "Les cytokines produites par la cellule présentatrice d’antigène et l’environnement local orientent la différenciation du lymphocyte T CD4 activé vers l’une des sous-populations effectrices (Th1, Th2, Th17, Treg).",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'CTLA-4, régulateur négatif de la costimulation',
          texte:
            "CTLA-4, exprimé après activation du lymphocyte T, entre en compétition avec CD28 pour la liaison à CD80/CD86, avec une affinité supérieure, délivrant un signal inhibiteur qui limite l’amplitude et la durée de la réponse T. Il constitue une cible thérapeutique majeure en immuno-oncologie.",
        },
      ],
    },
    {
      id: 'cytotoxicite',
      titre: 'Cytotoxicité du lymphocyte T CD8',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le lymphocyte T CD8, activé et différencié en lymphocyte T cytotoxique effecteur, est capable de tuer spécifiquement les cellules présentant, via leur CMH de classe I, le peptide antigénique pour lequel il est spécifique.",
        },
        {
          type: 'liste',
          items: [
            "La voie principale de cytotoxicité repose sur l’exocytose de granules cytotoxiques contenant la perforine, qui perméabilise la membrane de la cellule cible, et les granzymes, protéases qui déclenchent l’apoptose de la cellule cible une fois internalisées.",
            "Une voie accessoire fait intervenir l’interaction entre Fas (CD95), exprimé par la cellule cible, et son ligand FasL, exprimé par le lymphocyte T cytotoxique, déclenchant également l’apoptose de la cible.",
            "Contrairement à la cellule NK, le lymphocyte T CD8 cytotoxique nécessite une reconnaissance spécifique préalable du peptide par son TCR, restreinte au CMH de classe I.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Mémoire des lymphocytes T CD8',
          texte:
            "Après élimination de l’antigène, la majorité des lymphocytes T effecteurs meurt par apoptose (contraction clonale), tandis qu’une petite fraction persiste sous forme de lymphocytes T mémoires, capables d’une réponse plus rapide et plus intense lors d’une réexposition ultérieure au même antigène.",
        },
      ],
    },
  ],
  pointsCles: [
    'Le TCR reconnaît un peptide uniquement présenté par le CMH, jamais un antigène libre, et fonctionne associé au complexe CD3.',
    'La sélection positive (cortex) sauve les clones reconnaissant le CMH du soi ; la sélection négative (médullaire) élimine les clones trop autoréactifs.',
    'Le lymphocyte T CD4 est restreint au CMH de classe II, le CD8 au CMH de classe I.',
    'Les principales sous-populations Th sont Th1 (T-bet, interféron gamma), Th2 (GATA3, IL-4), Th17 (RORgammaT, IL-17) et Treg (FoxP3, IL-10/TGF-bêta).',
    'L’activation T naïve nécessite trois signaux : reconnaissance spécifique (TCR-CMH), costimulation (CD28-CD80/86), polarisation cytokinique.',
    'En l’absence de costimulation, le lymphocyte T entre en anergie plutôt qu’en activation.',
    'Le lymphocyte T CD8 cytotoxique tue via perforine-granzymes ou via la voie Fas-FasL.',
  ],
  erreursFrequentes: [
    'Croire que le TCR peut reconnaître un antigène libre en solution comme un anticorps : il exige toujours une présentation par le CMH.',
    'Inverser sélection positive et sélection négative : la positive sauve, la négative élimine.',
    'Confondre la localisation des deux sélections : positive dans le cortex, négative dans la médullaire thymique.',
    'Oublier que l’absence de signal de costimulation entraîne une anergie et non une activation complète.',
    'Associer l’interféron gamma à la sous-population Th2 au lieu de Th1.',
    'Confondre les mécanismes de cytotoxicité du CD8 (nécessite reconnaissance TCR-CMH I) et de la cellule NK (agit par soi manquant, sans TCR).',
  ],
  mnemotechniques: [
    {
      moyen: 'Cortex positive, médullaire négative, ordre alphabétique',
      explication:
        'C (cortex) vient avant M (médullaire) dans l’alphabet, comme « positive » vient avant « négative » dans la chronologie de la sélection thymique.',
    },
    {
      moyen: '1 Th1, gamma interféron ; 2 Th2, IL-4',
      explication:
        'Th1 associé à l’interféron gamma (macrophages) ; Th2 associé à l’IL-4 (allergie, anticorps) : une association numérique simple à retenir.',
    },
    {
      moyen: 'Pas de CD28, pas de réveil : anergie',
      explication:
        'Sans le signal 2 de costimulation (CD28-CD80/86), le lymphocyte T reste « endormi », en anergie, malgré la reconnaissance de l’antigène.',
    },
  ],
  sources: [
    'Abbas, Lichtman, Pillai, Les bases de l’immunologie fondamentale et clinique',
    'Janeway, Immunobiologie',
    'Roitt, Immunologie',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue5-lymphocytes-t-fc-01',
      recto: 'Quel complexe membranaire assure la transduction du signal après engagement du TCR ?',
      verso: 'Le complexe CD3.',
      type: 'mecanisme',
      tags: ['TCR'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-02',
      recto: 'Quelle proportion de lymphocytes T exprime un TCR alpha-bêta ?',
      verso: 'Environ 95 % ; une minorité exprime un TCR gamma-delta.',
      type: 'chiffre',
      tags: ['TCR'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-03',
      recto: 'Où a lieu la sélection positive des thymocytes ?',
      verso: 'Dans le cortex thymique.',
      type: 'definition',
      tags: ['sélection thymique'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-04',
      recto: 'Où a lieu la sélection négative des thymocytes ?',
      verso: 'Dans la médullaire thymique.',
      type: 'definition',
      tags: ['sélection thymique'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-05',
      recto: 'Quel gène permet l’expression ectopique d’antigènes tissulaires périphériques dans le thymus ?',
      verso: 'Le gène AIRE, exprimé par les cellules épithéliales médullaires.',
      type: 'clinique',
      tags: ['tolérance centrale'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-06',
      recto: 'Quel facteur de transcription définit la sous-population Th1 ?',
      verso: 'T-bet.',
      type: 'classification',
      tags: ['Th1'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-07',
      recto: 'Quelle cytokine caractérise la réponse Th17 ?',
      verso: 'L’IL-17.',
      type: 'classification',
      tags: ['Th17'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-08',
      recto: 'Quel facteur de transcription et quel marqueur caractérisent les lymphocytes T régulateurs ?',
      verso: 'FoxP3 comme facteur de transcription, CD25 comme marqueur.',
      type: 'classification',
      tags: ['Treg'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-09',
      recto: 'Quelles molécules interagissent pour délivrer le signal 2 de costimulation ?',
      verso: 'CD28 (lymphocyte T) et CD80/CD86 (cellule présentatrice d’antigène).',
      type: 'mecanisme',
      tags: ['costimulation'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-10',
      recto: 'Que se passe-t-il en l’absence de signal de costimulation lors de la reconnaissance antigénique ?',
      verso: 'Le lymphocyte T entre en anergie plutôt que de s’activer.',
      type: 'mecanisme',
      tags: ['anergie'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-11',
      recto: 'Quelles sont les deux molécules cytotoxiques libérées par exocytose des granules du lymphocyte T CD8 ?',
      verso: 'La perforine et les granzymes.',
      type: 'mecanisme',
      tags: ['cytotoxicité'],
    },
    {
      id: 'ue5-lymphocytes-t-fc-12',
      recto: 'Quelle molécule entre en compétition avec CD28 pour freiner l’activation T ?',
      verso: 'CTLA-4, avec une affinité supérieure pour CD80/CD86.',
      type: 'mecanisme',
      tags: ['régulation'],
    },
  ],
  qcm: [
    {
      id: 'ue5-lymphocytes-t-qcm-01',
      enonce: 'Concernant le récepteur T, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le TCR peut reconnaître un antigène libre en solution.', vraie: false, justification: 'Le TCR ne reconnaît qu’un peptide présenté par le CMH, jamais un antigène libre.' },
        { lettre: 'B', texte: 'Le complexe CD3 assure la transduction du signal après engagement du TCR.', vraie: true, justification: 'Exact : le CD3 ne participe pas à la reconnaissance mais transmet le signal intracellulaire.' },
        { lettre: 'C', texte: 'La majorité des lymphocytes T expriment un TCR gamma-delta.', vraie: false, justification: 'La majorité (environ 95 %) exprime un TCR alpha-bêta.' },
        { lettre: 'D', texte: 'Les chaînes du TCR sont générées par recombinaison VDJ ou VJ.', vraie: true, justification: 'Exact, comme pour les immunoglobulines, via RAG1 et RAG2.' },
        { lettre: 'E', texte: 'Le TCR subit une hypermutation somatique après activation, comme le BCR.', vraie: false, justification: 'Contrairement au BCR, le TCR ne subit pas d’hypermutation somatique.' },
      ],
      correction: 'Réponses exactes : B et D. Le TCR partage avec le BCR la génération VDJ, mais pas l’hypermutation.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-t-qcm-02',
      enonce: 'Concernant la maturation thymique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La sélection positive a lieu dans la médullaire thymique.', vraie: false, justification: 'La sélection positive a lieu dans le cortex thymique.' },
        { lettre: 'B', texte: 'La sélection négative élimine les clones fortement autoréactifs.', vraie: true, justification: 'Exact : c’est le mécanisme de la tolérance centrale.' },
        { lettre: 'C', texte: 'Le stade double positif précède le stade double négatif.', vraie: false, justification: 'C’est l’inverse : le stade double négatif précède le stade double positif.' },
        { lettre: 'D', texte: 'Le gène AIRE favorise l’expression ectopique d’antigènes périphériques dans la médullaire thymique.', vraie: true, justification: 'Exact, ce qui élargit le spectre de la sélection négative.' },
        { lettre: 'E', texte: 'Les thymocytes non sélectionnés positivement meurent par apoptose.', vraie: true, justification: 'Exact : c’est la mort par négligence.' },
      ],
      correction: 'Réponses exactes : B, D et E. Retenir la chronologie double négatif puis double positif puis sélections positive et négative.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-t-qcm-03',
      enonce: 'Concernant les sous-populations Th, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Th1 produit principalement de l’interféron gamma.', vraie: true, justification: 'Exact, sous le contrôle du facteur de transcription T-bet.' },
        { lettre: 'B', texte: 'Th2 est associé au facteur de transcription RORgammaT.', vraie: false, justification: 'RORgammaT caractérise Th17 ; Th2 est associé à GATA3.' },
        { lettre: 'C', texte: 'Th17 favorise le recrutement des polynucléaires neutrophiles.', vraie: true, justification: 'Exact, via la production d’IL-17.' },
        { lettre: 'D', texte: 'Les lymphocytes Treg expriment FoxP3.', vraie: true, justification: 'Exact, c’est leur marqueur transcriptionnel définitoire.' },
        { lettre: 'E', texte: 'Th2 est essentiellement impliqué dans la défense antivirale intracellulaire.', vraie: false, justification: 'C’est Th1 qui est impliqué dans la défense contre les pathogènes intracellulaires ; Th2 est plutôt antiparasitaire et allergique.' },
      ],
      correction: 'Réponses exactes : A, C et D. Chaque sous-population Th a un facteur de transcription et un profil cytokinique propres.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-t-qcm-04',
      enonce: 'Concernant l’activation du lymphocyte T naïf, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le signal 1 correspond à l’engagement du TCR par le complexe CMH-peptide.', vraie: true, justification: 'Exact : c’est le signal de reconnaissance spécifique.' },
        { lettre: 'B', texte: 'Le signal 2 fait intervenir l’interaction CD28-CD80/86.', vraie: true, justification: 'Exact : c’est le signal de costimulation.' },
        { lettre: 'C', texte: 'L’absence de signal 2 entraîne une activation optimale du lymphocyte T.', vraie: false, justification: 'L’absence de signal 2 entraîne au contraire une anergie du lymphocyte T.' },
        { lettre: 'D', texte: 'CTLA-4 a une affinité inférieure à CD28 pour CD80/86.', vraie: false, justification: 'CTLA-4 a au contraire une affinité supérieure à CD28, ce qui lui permet d’inhiber la costimulation.' },
        { lettre: 'E', texte: 'Le signal 3, cytokinique, oriente la polarisation du lymphocyte T CD4 activé.', vraie: true, justification: 'Exact : il détermine la différenciation vers Th1, Th2, Th17 ou Treg.' },
      ],
      correction: 'Réponses exactes : A, B et E. Le modèle des trois signaux est central pour comprendre l’activation T.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-t-qcm-05',
      enonce: 'Concernant la restriction et les fonctions des CD4 et CD8, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le lymphocyte T CD4 est restreint au CMH de classe II.', vraie: true, justification: 'Exact : c’est la restriction du corécepteur CD4.' },
        { lettre: 'B', texte: 'Le lymphocyte T CD8 est restreint au CMH de classe II.', vraie: false, justification: 'Le CD8 est restreint au CMH de classe I, pas de classe II.' },
        { lettre: 'C', texte: 'Le lymphocyte T CD8 exerce une fonction cytotoxique directe.', vraie: true, justification: 'Exact : il lyse les cellules cibles présentant l’antigène restreint par le CMH I.' },
        { lettre: 'D', texte: 'Le lymphocyte T CD4 coordonne la réponse immunitaire par sécrétion de cytokines.', vraie: true, justification: 'Exact : c’est le rôle du lymphocyte T auxiliaire (helper).' },
        { lettre: 'E', texte: 'Les Treg favorisent l’amplification de la réponse immunitaire.', vraie: false, justification: 'Les Treg exercent au contraire une fonction de suppression et de régulation de la réponse immunitaire.' },
      ],
      correction: 'Réponses exactes : A, C et D. La restriction CD4-classe II et CD8-classe I est une notion fondamentale.',
      difficulte: 1,
    },
    {
      id: 'ue5-lymphocytes-t-qcm-06',
      enonce: 'Concernant la cytotoxicité du lymphocyte T CD8, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La perforine perméabilise la membrane de la cellule cible.', vraie: true, justification: 'Exact : elle facilite l’entrée des granzymes dans la cellule cible.' },
        { lettre: 'B', texte: 'Les granzymes déclenchent l’apoptose de la cellule cible.', vraie: true, justification: 'Exact : ce sont des protéases pro-apoptotiques.' },
        { lettre: 'C', texte: 'La voie Fas-FasL est une voie accessoire de cytotoxicité.', vraie: true, justification: 'Exact, en complément de la voie perforine-granzymes.' },
        { lettre: 'D', texte: 'Le lymphocyte T CD8 cytotoxique agit sans reconnaissance spécifique préalable, comme la cellule NK.', vraie: false, justification: 'Il nécessite au contraire une reconnaissance spécifique du peptide par son TCR, restreinte au CMH de classe I.' },
        { lettre: 'E', texte: 'La majorité des lymphocytes T effecteurs meurt par apoptose après élimination de l’antigène.', vraie: true, justification: 'Exact : c’est la phase de contraction clonale, précédant la persistance d’une population mémoire.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Retenir la différence essentielle entre CD8 (spécifique, restreint) et NK (non spécifique).',
      difficulte: 2,
    },
  ],
};
