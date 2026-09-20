import type { Fiche } from '../../types';

export const ficheMyologieGenerale: Fiche = {
  id: 'anat-myologie-generale',
  ue: 'anat',
  titre: 'Myologie générale',
  sousTitre: 'Structure du muscle strié squelettique, types de contraction, fascias, tendons et innervation motrice',
  chapitre: 'Anatomie générale',
  ordre: 4,
  duree: 22,
  difficulte: 2,
  motsCles: [
    'muscle strié squelettique',
    'fascia',
    'tendon',
    'agoniste',
    'antagoniste',
    'bourse séreuse',
    'plaque motrice',
    'unité motrice',
    'contraction concentrique',
  ],
  objectifs: [
    "Décrire l’organisation macroscopique et microscopique d’un muscle strié squelettique.",
    "Différencier les principaux types de contraction musculaire.",
    "Expliquer les notions d’agoniste, d’antagoniste et de synergiste.",
    "Décrire le rôle des fascias, des tendons et des bourses séreuses.",
    "Décrire l’organisation de l’innervation motrice, de l’unité motrice à la plaque motrice.",
  ],
  sections: [
    {
      id: 'structure-macroscopique',
      titre: 'Structure macroscopique d’un muscle',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un muscle strié squelettique typique comprend un corps musculaire charnu, le ventre, prolongé à chaque extrémité par un tendon qui l’ancre au squelette. Le muscle exerce sa traction entre son insertion d’origine et son insertion terminale.",
        },
        {
          type: 'liste',
          items: [
            "L’insertion proximale (ou origine) est classiquement la moins mobile lors de la contraction, et l’insertion distale (ou terminaison) la plus mobile, bien que cette distinction s’inverse dans certains mouvements en chaîne cinétique fermée.",
            "Un muscle peut avoir plusieurs chefs d’origine, comme le muscle biceps brachial (chef long et chef court) ou le muscle quadriceps fémoral (quatre chefs).",
            "L’architecture des fibres varie selon les muscles : disposition parallèle (muscles fusiformes), pennée, bipennée ou circulaire, ce qui influence la force et l’amplitude de raccourcissement.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Principaux types architecturaux',
          colonnes: ['Architecture', 'Description', 'Conséquence fonctionnelle'],
          lignes: [
            ['Fusiforme', 'Fibres parallèles au grand axe du muscle', 'Grande amplitude de raccourcissement, force modérée'],
            ['Pennée', 'Fibres obliques par rapport au tendon central, sur un seul côté', 'Force accrue par l’augmentation de la surface de section physiologique'],
            ['Bipennée', 'Fibres obliques disposées de part et d’autre d’un tendon central', 'Force importante, amplitude réduite'],
            ['Circulaire (orbiculaire)', 'Fibres disposées en anneau autour d’un orifice', 'Fonction de sphincter'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Muscle mono-articulaire et polyarticulaire',
          texte:
            "Un muscle mono-articulaire ne franchit qu’une seule articulation, comme le muscle brachial. Un muscle polyarticulaire franchit plusieurs articulations, comme le muscle droit fémoral, qui franchit la hanche et le genou : son action dépend alors de la position simultanée de ces deux articulations.",
        },
      ],
    },
    {
      id: 'structure-microscopique',
      titre: 'Organisation microscopique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le muscle strié squelettique est entouré et compartimenté par des enveloppes conjonctives successives, qui se prolongent à chaque extrémité dans le tendon.",
        },
        {
          type: 'tableau',
          titre: 'Enveloppes conjonctives du muscle',
          colonnes: ['Enveloppe', 'Niveau', 'Contenu'],
          lignes: [
            ['Épimysium', 'Autour du muscle entier', 'Ensemble des faisceaux musculaires'],
            ['Périmysium', 'Autour de chaque faisceau', 'Groupe de fibres musculaires'],
            ['Endomysium', 'Autour de chaque fibre musculaire', 'Une seule fibre musculaire (cellule multinucléée)'],
          ],
        },
        {
          type: 'definition',
          terme: 'Sarcomère',
          definition:
            "Unité contractile élémentaire de la fibre musculaire striée, délimitée par deux stries Z successives, et formée de myofilaments d’actine et de myosine dont le glissement relatif est à l’origine de la contraction.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Continuité entre enveloppes conjonctives et tendon',
          texte:
            "Les enveloppes conjonctives du muscle (épimysium, périmysium, endomysium) se prolongent et fusionnent aux extrémités du muscle pour former le tendon : la force développée par les sarcomères est ainsi transmise mécaniquement au squelette par un continuum de tissu conjonctif.",
        },
      ],
    },
    {
      id: 'types-contraction',
      titre: 'Types de contraction musculaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La contraction musculaire peut s’accompagner ou non d’une variation de longueur du muscle, selon la relation entre la force développée et la charge à mobiliser.",
        },
        {
          type: 'tableau',
          titre: 'Types de contraction',
          colonnes: ['Type', 'Variation de longueur', 'Exemple'],
          lignes: [
            ['Contraction isométrique', 'Aucune : la longueur du muscle reste constante', 'Maintenir une position contre une résistance fixe'],
            ['Contraction concentrique', 'Raccourcissement du muscle', 'Fléchir le coude en soulevant une charge'],
            ['Contraction excentrique', 'Allongement du muscle sous tension', 'Freiner la descente d’une charge en extension progressive du coude'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Isotonique, un terme à manier avec prudence',
          texte:
            "Le terme de contraction isotonique désigne une contraction à tension constante, ce qui en pratique physiologique correspond rarement à la réalité d’un mouvement. Les termes concentrique et excentrique, définis par la variation de longueur du muscle, sont préférés en anatomie fonctionnelle et en sémiologie clinique.",
        },
      ],
    },
    {
      id: 'agoniste-antagoniste',
      titre: 'Agonistes, antagonistes et synergistes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un mouvement résulte rarement de l’action d’un seul muscle : plusieurs groupes musculaires interagissent selon des rôles complémentaires, définis par rapport à un mouvement donné et non de façon absolue.",
        },
        {
          type: 'definition',
          terme: 'Muscle agoniste',
          definition:
            "Muscle dont la contraction produit directement le mouvement considéré. Le muscle brachial est agoniste de la flexion du coude.",
        },
        {
          type: 'definition',
          terme: 'Muscle antagoniste',
          definition:
            "Muscle dont l’action s’oppose à celle de l’agoniste pour le mouvement considéré, et qui doit se relâcher pour permettre ce mouvement. Le muscle triceps brachial est antagoniste de la flexion du coude.",
        },
        {
          type: 'liste',
          items: [
            "Un muscle synergiste facilite l’action de l’agoniste, soit en stabilisant une articulation voisine, soit en neutralisant une action secondaire indésirable de l’agoniste.",
            "Un même muscle peut être agoniste pour un mouvement donné et antagoniste pour le mouvement inverse : ces qualificatifs ne sont jamais des propriétés fixes du muscle.",
            "Un muscle fixateur stabilise un segment osseux pour permettre à un autre muscle de développer son action à distance.",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la logique agoniste-antagoniste',
          texte:
            "Pour un mouvement donné, identifiez d’abord l’action recherchée (par exemple la flexion), puis cherchez le muscle qui la produit (agoniste) et celui, situé sur la face opposée de l’articulation, qui produit le mouvement inverse (antagoniste, ici l’extension).",
        },
      ],
    },
    {
      id: 'fascias-tendons-bourses',
      titre: 'Fascias, tendons et bourses séreuses',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Autour des muscles, plusieurs structures conjonctives accessoires facilitent le glissement, guident les tendons et transmettent les forces mécaniques.",
        },
        {
          type: 'definition',
          terme: 'Fascia',
          definition:
            "Enveloppe conjonctive fibreuse qui entoure un muscle ou un groupe de muscles, sépare les différentes loges musculaires d’un membre et transmet une partie des contraintes mécaniques.",
        },
        {
          type: 'definition',
          terme: 'Bourse séreuse',
          definition:
            "Petite cavité close, tapissée d’une membrane synoviale et contenant du liquide séreux, interposée entre deux structures mobiles l’une par rapport à l’autre (tendon et os, peau et saillie osseuse) pour réduire les frottements.",
        },
        {
          type: 'liste',
          items: [
            "Une gaine synoviale tendineuse entoure certains tendons longs, notamment aux poignets et aux chevilles, où ils changent de direction sous des rétinaculums fibreux.",
            "Un rétinaculum est un épaississement fibreux transversal qui maintient les tendons plaqués contre le plan osseux, empêchant leur ressaut lors du mouvement.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Bursite et ténosynovite',
          texte:
            "L’inflammation d’une bourse séreuse (bursite) ou d’une gaine synoviale tendineuse (ténosynovite) est une cause fréquente de douleur péri-articulaire, souvent favorisée par des microtraumatismes répétés ou une pathologie inflammatoire systémique.",
        },
      ],
    },
    {
      id: 'innervation-motrice',
      titre: 'Innervation motrice',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Chaque fibre musculaire squelettique est innervée par un motoneurone alpha, dont le corps cellulaire est situé dans la corne antérieure de la moelle spinale ou dans un noyau moteur du tronc cérébral.",
        },
        {
          type: 'definition',
          terme: 'Unité motrice',
          definition:
            "Ensemble formé par un motoneurone alpha et l’ensemble des fibres musculaires qu’il innerve. Le nombre de fibres par unité motrice varie considérablement : faible dans les muscles de précision (muscles oculomoteurs), élevé dans les muscles de force (muscles du tronc).",
        },
        {
          type: 'definition',
          terme: 'Plaque motrice',
          definition:
            "Synapse neuromusculaire entre la terminaison axonale du motoneurone et la fibre musculaire, où l’acétylcholine libérée déclenche la dépolarisation de la membrane musculaire et, in fine, la contraction.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Recrutement des unités motrices',
          texte:
            "Pour une contraction de faible intensité, les unités motrices les plus petites, composées de fibres lentes de type I, sont recrutées en premier. À mesure que l’effort augmente, des unités motrices plus grandes, composées de fibres rapides de type II, sont progressivement recrutées : c’est le principe de taille (loi de Henneman).",
        },
      ],
    },
  ],
  pointsCles: [
    "Un muscle comprend un ventre charnu et des tendons d’insertion proximale et distale, dont les enveloppes conjonctives se prolongent l’une dans l’autre.",
    "Le sarcomère, entre deux stries Z, est l’unité contractile élémentaire de la fibre musculaire striée.",
    "On distingue contraction isométrique, concentrique et excentrique selon la variation de longueur du muscle.",
    "Agoniste, antagoniste et synergiste sont des rôles relatifs à un mouvement donné, jamais des propriétés fixes d’un muscle.",
    "Les fascias séparent les loges musculaires, les bourses séreuses et les gaines synoviales réduisent les frottements tendineux.",
    "L’unité motrice associe un motoneurone alpha et l’ensemble des fibres musculaires qu’il innerve.",
    "Le recrutement des unités motrices suit le principe de taille : les petites unités lentes d’abord, les grandes unités rapides ensuite.",
  ],
  erreursFrequentes: [
    "Considérer qu’un muscle donné est toujours agoniste ou toujours antagoniste, indépendamment du mouvement étudié.",
    "Confondre contraction isométrique, sans changement de longueur, et contraction isotonique, à tension constante.",
    "Croire que l’allongement musculaire sous tension (contraction excentrique) correspond à un relâchement passif.",
    "Confondre épimysium, périmysium et endomysium quant à leur niveau d’organisation respectif.",
    "Oublier qu’un muscle polyarticulaire a une action qui dépend de la position simultanée de toutes les articulations qu’il franchit.",
  ],
  mnemotechniques: [
    {
      moyen: 'EPI-PERI-ENDO, du plus large au plus fin',
      explication:
        'Épimysium entoure le muscle entier, périmysium chaque faisceau, endomysium chaque fibre : l’ordre alphabétique suit l’ordre du plus englobant au plus fin.',
    },
    {
      moyen: 'Excentrique = étirement sous tension',
      explication:
        'Excentrique rappelle « ex- », vers l’extérieur : le muscle s’allonge tout en résistant à la charge, comme lors d’une descente contrôlée.',
    },
  ],
  sources: [
    'Kamina, Anatomie clinique, tome 1, Anatomie générale, membres',
    'Drake, Vogl, Mitchell, Gray’s Anatomie pour les étudiants',
    'Netter, Atlas d’anatomie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'anat-myologie-generale-fc-01',
      recto: 'Quelles sont les trois enveloppes conjonctives d’un muscle, de la plus large à la plus fine ?',
      verso: 'Épimysium (muscle entier), périmysium (faisceau), endomysium (fibre musculaire).',
      type: 'classification',
      tags: ['structure microscopique'],
    },
    {
      id: 'anat-myologie-generale-fc-02',
      recto: 'Qu’est-ce qu’un sarcomère ?',
      verso: 'L’unité contractile élémentaire de la fibre musculaire striée, délimitée par deux stries Z.',
      type: 'definition',
      tags: ['sarcomère'],
    },
    {
      id: 'anat-myologie-generale-fc-03',
      recto: 'Différencier contraction concentrique et excentrique.',
      verso: 'Concentrique : le muscle se raccourcit. Excentrique : le muscle s’allonge tout en restant sous tension.',
      type: 'mecanisme',
      tags: ['contraction'],
    },
    {
      id: 'anat-myologie-generale-fc-04',
      recto: 'Qu’est-ce qu’une contraction isométrique ?',
      verso: 'Une contraction sans variation de la longueur du muscle, comme le maintien d’une position contre une résistance fixe.',
      type: 'mecanisme',
      tags: ['contraction'],
    },
    {
      id: 'anat-myologie-generale-fc-05',
      recto: 'Définir muscle agoniste et muscle antagoniste.',
      verso: 'Agoniste : produit directement le mouvement considéré. Antagoniste : s’oppose à ce mouvement et doit se relâcher pour le permettre.',
      type: 'definition',
      tags: ['agoniste', 'antagoniste'],
    },
    {
      id: 'anat-myologie-generale-fc-06',
      recto: 'Quel est le rôle d’un muscle fixateur ?',
      verso: 'Stabiliser un segment osseux pour permettre à un autre muscle de développer son action à distance.',
      type: 'mecanisme',
      tags: ['synergie'],
    },
    {
      id: 'anat-myologie-generale-fc-07',
      recto: 'Quel est le rôle d’une bourse séreuse ?',
      verso: 'Réduire les frottements entre deux structures mobiles l’une par rapport à l’autre, comme un tendon et une saillie osseuse.',
      type: 'mecanisme',
      tags: ['bourse séreuse'],
    },
    {
      id: 'anat-myologie-generale-fc-08',
      recto: 'Quel est le rôle d’un rétinaculum ?',
      verso: 'Maintenir les tendons plaqués contre le plan osseux et empêcher leur ressaut lors du mouvement.',
      type: 'mecanisme',
      tags: ['rétinaculum'],
    },
    {
      id: 'anat-myologie-generale-fc-09',
      recto: 'Qu’est-ce qu’une unité motrice ?',
      verso: 'Un motoneurone alpha et l’ensemble des fibres musculaires qu’il innerve.',
      type: 'definition',
      tags: ['unité motrice'],
    },
    {
      id: 'anat-myologie-generale-fc-10',
      recto: 'Où se situe la plaque motrice et quel neurotransmetteur y est libéré ?',
      verso: 'À la synapse neuromusculaire entre le motoneurone et la fibre musculaire ; le neurotransmetteur libéré est l’acétylcholine.',
      type: 'mecanisme',
      tags: ['plaque motrice'],
    },
    {
      id: 'anat-myologie-generale-fc-11',
      recto: 'Énoncer le principe de taille (loi de Henneman).',
      verso: 'Les petites unités motrices, composées de fibres lentes de type I, sont recrutées en premier ; les grandes unités, composées de fibres rapides de type II, le sont ensuite à mesure que l’effort augmente.',
      type: 'mecanisme',
      tags: ['recrutement moteur'],
    },
    {
      id: 'anat-myologie-generale-fc-12',
      recto: 'Citer un exemple de muscle polyarticulaire et expliquer la conséquence de ce statut.',
      verso: 'Le muscle droit fémoral, qui franchit la hanche et le genou : son action dépend de la position simultanée des deux articulations.',
      type: 'clinique',
      tags: ['muscle polyarticulaire'],
    },
  ],
  qcm: [
    {
      id: 'anat-myologie-generale-qcm-01',
      enonce: 'Concernant la structure macroscopique du muscle, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le muscle biceps brachial possède deux chefs d’origine.', vraie: true, justification: 'Exact, un chef long et un chef court.' },
        { lettre: 'B', texte: 'Un muscle pennée présente des fibres parallèles au grand axe du tendon.', vraie: false, justification: 'Faux : les fibres pennées sont obliques par rapport au tendon central, ce qui distingue cette architecture de l’architecture fusiforme.' },
        { lettre: 'C', texte: 'Un muscle mono-articulaire franchit une seule articulation.', vraie: true, justification: 'Exact, par exemple le muscle brachial.' },
        { lettre: 'D', texte: 'L’architecture bipennée maximise l’amplitude de raccourcissement au détriment de la force.', vraie: false, justification: 'Faux : c’est l’inverse, l’architecture bipennée augmente la force au détriment de l’amplitude de raccourcissement.' },
        { lettre: 'E', texte: 'Un muscle orbiculaire a une fonction de sphincter.', vraie: true, justification: 'Exact, ses fibres circulaires entourent un orifice.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-myologie-generale-qcm-02',
      enonce: 'Concernant l’organisation microscopique du muscle, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’endomysium entoure chaque fibre musculaire.', vraie: true, justification: 'C’est l’enveloppe la plus fine, au contact direct de chaque cellule musculaire individuelle, à distinguer du périmysium qui entoure un faisceau entier.' },
        { lettre: 'B', texte: 'Le périmysium entoure le muscle dans son ensemble.', vraie: false, justification: 'Faux : c’est l’épimysium qui entoure le muscle entier ; le périmysium entoure chaque faisceau.' },
        { lettre: 'C', texte: 'Le sarcomère est délimité par deux stries Z.', vraie: true, justification: 'Ces deux stries marquent les limites de l’unité contractile élémentaire, où glissent les myofilaments d’actine et de myosine.' },
        { lettre: 'D', texte: 'Les enveloppes conjonctives se prolongent dans le tendon.', vraie: true, justification: 'Exact, formant un continuum mécanique jusqu’à l’os.' },
        { lettre: 'E', texte: 'La contraction résulte du glissement des myofilaments d’actine et de myosine.', vraie: true, justification: 'Exact, c’est le mécanisme du glissement des filaments.' },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-myologie-generale-qcm-03',
      enonce: 'Concernant les types de contraction musculaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La contraction concentrique s’accompagne d’un raccourcissement du muscle.', vraie: true, justification: 'La force développée dépasse la charge à mobiliser, ce qui permet au muscle de se raccourcir tout en se contractant, comme lors de la flexion du coude en soulevant une charge.' },
        { lettre: 'B', texte: 'La contraction isométrique s’accompagne d’un allongement du muscle.', vraie: false, justification: 'Faux : la longueur du muscle reste constante lors d’une contraction isométrique.' },
        { lettre: 'C', texte: 'La contraction excentrique correspond à un allongement du muscle sous tension.', vraie: true, justification: 'La charge à mobiliser dépasse la force développée, ce qui force le muscle à s’allonger progressivement tout en résistant activement.' },
        { lettre: 'D', texte: 'Freiner la descente d’une charge sollicite le muscle en contraction excentrique.', vraie: true, justification: 'Le muscle reste actif et sous tension tout en s’allongeant pour contrôler le mouvement, ce qui définit précisément la contraction excentrique.' },
        { lettre: 'E', texte: 'La contraction isométrique implique toujours un mouvement articulaire visible.', vraie: false, justification: 'Faux : par définition, il n’y a pas de variation de longueur du muscle, donc pas de mouvement articulaire lié à ce muscle.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 1,
    },
    {
      id: 'anat-myologie-generale-qcm-04',
      enonce: 'Concernant les notions d’agoniste, d’antagoniste et de synergiste, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un muscle est toujours agoniste, quel que soit le mouvement considéré.', vraie: false, justification: 'Faux : ces qualificatifs sont relatifs à un mouvement précis, un muscle agoniste pour un mouvement peut être antagoniste pour le mouvement inverse.' },
        { lettre: 'B', texte: 'Le muscle antagoniste doit se relâcher pour permettre le mouvement de l’agoniste.', vraie: true, justification: 'Si l’antagoniste restait contracté, il s’opposerait mécaniquement au mouvement produit par l’agoniste et le freinerait.' },
        { lettre: 'C', texte: 'Un muscle synergiste peut stabiliser une articulation voisine pour faciliter l’action de l’agoniste.', vraie: true, justification: 'En fixant une articulation intermédiaire, il permet à l’agoniste de concentrer son action sur le mouvement recherché sans dissiper sa force.' },
        { lettre: 'D', texte: 'Le triceps brachial est antagoniste de la flexion du coude.', vraie: true, justification: 'Exact, il produit l’extension, mouvement opposé.' },
        { lettre: 'E', texte: 'Un muscle fixateur produit directement le mouvement principal étudié.', vraie: false, justification: 'Faux : le muscle fixateur stabilise un segment pour permettre à un autre muscle d’agir, il n’est pas lui-même à l’origine du mouvement principal.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-myologie-generale-qcm-05',
      enonce: 'Concernant les fascias, tendons et bourses séreuses, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un fascia sépare les différentes loges musculaires d’un membre.', vraie: true, justification: 'Ces cloisons conjonctives compartimentent le membre en loges fonctionnelles distinctes, ce qui explique aussi la gravité du syndrome des loges en cas d’hyperpression.' },
        { lettre: 'B', texte: 'Une bourse séreuse est tapissée d’une membrane synoviale.', vraie: true, justification: 'Cette membrane sécrète le liquide séreux qui réduit les frottements entre les deux structures mobiles qu’elle sépare.' },
        { lettre: 'C', texte: 'Une gaine synoviale tendineuse entoure certains tendons longs, notamment au poignet et à la cheville.', vraie: true, justification: 'Elle facilite le glissement du tendon lorsqu’il change de direction sous un rétinaculum fibreux, aux zones de forte contrainte mécanique.' },
        { lettre: 'D', texte: 'Un rétinaculum est une structure musculaire contractile.', vraie: false, justification: 'Faux : c’est un épaississement fibreux, non contractile, qui maintient les tendons plaqués contre l’os.' },
        { lettre: 'E', texte: 'La ténosynovite correspond à l’inflammation d’une gaine synoviale tendineuse.', vraie: true, justification: 'Elle se distingue de la bursite, qui touche une bourse séreuse, bien que les deux soient souvent favorisées par des microtraumatismes répétés.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-myologie-generale-qcm-06',
      enonce: 'Concernant l’innervation motrice, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une unité motrice associe un motoneurone alpha et les fibres musculaires qu’il innerve.', vraie: true, justification: 'Toutes les fibres innervées par ce même motoneurone se contractent simultanément, formant l’unité fonctionnelle de base du contrôle moteur.' },
        { lettre: 'B', texte: 'Les muscles de précision, comme les muscles oculomoteurs, ont de grandes unités motrices.', vraie: false, justification: 'Faux : ils ont de petites unités motrices, avec peu de fibres par motoneurone, ce qui permet un contrôle fin.' },
        { lettre: 'C', texte: 'La plaque motrice libère de l’acétylcholine.', vraie: true, justification: 'Ce neurotransmetteur, libéré par la terminaison axonale, se fixe sur des récepteurs de la fibre musculaire et déclenche sa dépolarisation.' },
        { lettre: 'D', texte: 'Les unités motrices lentes de type I sont recrutées en premier lors d’une contraction de faible intensité.', vraie: true, justification: 'Exact, selon le principe de taille (loi de Henneman).' },
        { lettre: 'E', texte: 'Le corps cellulaire du motoneurone alpha est situé dans la corne postérieure de la moelle spinale.', vraie: false, justification: 'Faux : il est situé dans la corne antérieure (ventrale) de la moelle spinale.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
