import type { Fiche } from '../../types';

export const ficheMecaniqueFluides: Fiche = {
  id: 'ue3-mecanique-fluides',
  ue: 'ue3',
  titre: 'Mécanique des fluides et hémodynamique',
  sousTitre:
    "Viscosité, régimes laminaire et turbulent, nombre de Reynolds, loi de Poiseuille, équation de Bernoulli, résistances vasculaires et pression artérielle",
  chapitre: 'Transports et bioélectricité',
  ordre: 6,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'viscosité',
    'écoulement laminaire',
    'écoulement turbulent',
    'nombre de Reynolds',
    'loi de Poiseuille',
    'équation de Bernoulli',
    'résistance vasculaire',
    'pression artérielle',
  ],
  objectifs: [
    "Définir la viscosité d’un fluide et distinguer écoulement laminaire et écoulement turbulent.",
    "Calculer un nombre de Reynolds et en interpréter la valeur.",
    "Appliquer la loi de Poiseuille pour analyser un débit dans un vaisseau.",
    "Utiliser l’équation de Bernoulli pour relier pression et vitesse d’écoulement.",
    "Relier résistances vasculaires, débit cardiaque et pression artérielle.",
  ],
  sections: [
    {
      id: 'viscosite',
      titre: 'Viscosité d’un fluide',
      blocs: [
        {
          type: 'definition',
          terme: 'Viscosité (eta)',
          definition:
            "Grandeur qui traduit la résistance interne d’un fluide à l’écoulement, résultant des frottements entre les couches de fluide qui se déplacent à des vitesses différentes les unes par rapport aux autres.",
        },
        {
          type: 'formule',
          expression: 'tau = eta x (dv/dy)',
          legende:
            "Loi de Newton de la viscosité : la contrainte de cisaillement tau entre deux couches de fluide est proportionnelle à la viscosité eta et au gradient de vitesse dv/dy perpendiculaire à l’écoulement.",
          unites: 'tau en pascal (Pa), eta en poiseuille (Pl) ou pascal-seconde (Pa.s), dv/dy en s⁻¹',
        },
        {
          type: 'liste',
          items: [
            "Un fluide newtonien a une viscosité constante, indépendante du gradient de vitesse appliqué : c’est une bonne approximation du plasma.",
            "Le sang total est un fluide non newtonien : sa viscosité apparente diminue quand la vitesse d’écoulement augmente, notamment en raison de la déformabilité et de l’agrégation des hématies.",
            "La viscosité sanguine augmente avec l’hématocrite : une polyglobulie augmente la viscosité et donc la résistance à l’écoulement.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordre de grandeur',
          texte:
            "La viscosité du plasma est d’environ 1,2 à 1,3 fois celle de l’eau ; la viscosité du sang total, du fait de la présence des cellules sanguines, est environ 3 à 4 fois supérieure à celle de l’eau dans les grands vaisseaux.",
        },
      ],
    },
    {
      id: 'regimes-ecoulement',
      titre: 'Régimes d’écoulement et nombre de Reynolds',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Écoulement laminaire et écoulement turbulent',
          gauche: {
            titre: 'Écoulement laminaire',
            points: [
              'Filets de fluide parallèles, sans mélange transversal',
              'Profil de vitesse parabolique, maximal au centre du vaisseau',
              'Silencieux, pas de bruit audible',
            ],
          },
          droite: {
            titre: 'Écoulement turbulent',
            points: [
              'Trajectoires désordonnées, tourbillons',
              'Profil de vitesse plus uniforme mais instable',
              'Génère des vibrations et un bruit audible (souffle)',
            ],
          },
        },
        {
          type: 'formule',
          expression: 'Re = (rho x v x D) / eta',
          legende:
            "Nombre de Reynolds Re : rho est la masse volumique du fluide, v sa vitesse moyenne d’écoulement, D le diamètre du conduit et eta la viscosité du fluide. C’est un nombre sans dimension qui compare les forces d’inertie aux forces de viscosité.",
          unites: 'Re sans unité, rho en kg/m³, v en m/s, D en m, eta en Pa.s',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Valeur seuil de transition',
          texte:
            "En dessous d’un nombre de Reynolds critique, usuellement pris autour de 2000 pour un écoulement dans un conduit cylindrique, l’écoulement reste laminaire. Au-delà, l’écoulement devient instable puis franchement turbulent. Une sténose vasculaire, en augmentant localement la vitesse d’écoulement, favorise le dépassement de ce seuil.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Souffles vasculaires et cardiaques',
          texte:
            "Un souffle cardiaque ou vasculaire auscultatoire traduit un écoulement turbulent, généré par exemple par un rétrécissement valvulaire, une anémie sévère (baisse de viscosité et augmentation compensatrice du débit) ou une sténose artérielle.",
        },
      ],
    },
    {
      id: 'loi-poiseuille',
      titre: 'La loi de Poiseuille',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La loi de Poiseuille décrit le débit d’un fluide newtonien en écoulement laminaire, permanent, dans un conduit cylindrique rigide à section constante.",
        },
        {
          type: 'formule',
          expression: 'Q = (pi x r ^4 x DeltaP) / (8 x eta x L)',
          legende:
            "Débit Q à travers un conduit de rayon r et de longueur L, sous l’effet d’une différence de pression DeltaP entre ses deux extrémités, eta étant la viscosité du fluide.",
          unites: 'Q en m³/s, r et L en m, DeltaP en Pa, eta en Pa.s',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le rayon à la puissance quatre : un piège classique',
          texte:
            "Le débit varie avec la puissance quatre du rayon : diviser le rayon d’un vaisseau par deux, à pression constante, divise le débit par seize. C’est pourquoi de petites variations du calibre vasculaire (vasoconstriction, vasodilatation, sténose athéromateuse) ont un impact considérable sur le débit sanguin local.",
        },
        {
          type: 'formule',
          expression: 'R = (8 x eta x L) / (pi x r ^4)',
          legende:
            "Résistance hydraulique R d’un conduit, déduite de la loi de Poiseuille en écrivant Q = DeltaP / R, par analogie avec la loi d’Ohm.",
          unites: 'R en Pa.s/m³ (ou en unités hémodynamiques usuelles), eta en Pa.s, L et r en m',
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Analogie électrique',
          texte:
            "La loi de Poiseuille est l’équivalent hydraulique de la loi d’Ohm : DeltaP joue le rôle de la tension électrique, Q celui de l’intensité du courant et R celui de la résistance électrique. Cette analogie permet de raisonner sur les associations de résistances vasculaires en série ou en parallèle.",
        },
      ],
    },
    {
      id: 'equation-bernoulli',
      titre: "L’équation de Bernoulli",
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’équation de Bernoulli exprime la conservation de l’énergie mécanique le long d’une ligne de courant, pour un fluide parfait (non visqueux) en écoulement permanent.",
        },
        {
          type: 'formule',
          expression: 'P + 1/2 x rho x v ^2 + rho x g x h = constante',
          legende:
            "Équation de Bernoulli : P est la pression statique, 1/2 x rho x v² le terme d’énergie cinétique par unité de volume (dépendant de la vitesse v), et rho x g x h le terme d’énergie potentielle de pesanteur (h étant l’altitude).",
          unites: 'P en Pa, rho en kg/m³, v en m/s, g = 9,81 m/s², h en m',
        },
        {
          type: 'liste',
          items: [
            "À altitude constante, l’équation de Bernoulli montre qu’une augmentation de la vitesse d’écoulement s’accompagne d’une diminution de la pression statique, et réciproquement.",
            "Ce principe explique l’accélération et la chute de pression observées au niveau d’un rétrécissement (sténose), où la section est plus petite et donc la vitesse plus grande, d’après la conservation du débit (équation de continuité).",
            "La loi de Bernoulli néglige les pertes d’énergie par frottement visqueux, contrairement à la loi de Poiseuille qui les prend en compte : les deux approches sont complémentaires selon la situation étudiée.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Application : sténose valvulaire',
          texte:
            "Au niveau d’une sténose aortique, l’accélération du flux sanguin à travers l’orifice rétréci s’accompagne, selon Bernoulli, d’une chute de pression locale. L’échographie Doppler permet de mesurer la vitesse maximale du flux à travers la sténose et d’en déduire le gradient de pression transvalvulaire par une forme simplifiée de l’équation de Bernoulli.",
        },
      ],
    },
    {
      id: 'resistances-hemodynamique',
      titre: 'Résistances vasculaires et pression artérielle',
      blocs: [
        {
          type: 'definition',
          terme: 'Résistance vasculaire périphérique totale',
          definition:
            "Résistance globale opposée par l’ensemble du système vasculaire systémique à l’écoulement du sang, principalement déterminée par le calibre des artérioles.",
        },
        {
          type: 'formule',
          expression: 'DeltaP = Q x R',
          legende:
            "Relation générale entre débit et résistance, analogue à la loi d’Ohm, appliquée à la circulation systémique : DeltaP est la différence de pression entre l’aorte et l’oreillette droite, Q le débit cardiaque et R la résistance vasculaire périphérique totale.",
          unites: 'DeltaP en mmHg, Q en L/min, R en unités de résistance hémodynamique (mmHg.min/L)',
        },
        {
          type: 'tableau',
          titre: 'Associations de résistances vasculaires',
          colonnes: ['Type d’association', 'Résistance équivalente', 'Exemple physiologique'],
          lignes: [
            ['En série', 'R totale = R1 + R2 + … (somme des résistances)', 'Artère puis artériole puis capillaire d’un même territoire'],
            ['En parallèle', '1 / R totale = 1/R1 + 1/R2 + … (somme des inverses)', 'Les différents territoires artériels systémiques (rein, muscle, peau…)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Pression artérielle et débit cardiaque',
          texte:
            "La pression artérielle moyenne peut s’estimer par PAM = débit cardiaque x résistance vasculaire périphérique totale. Une vasoconstriction artériolaire, en augmentant la résistance, élève la pression artérielle à débit cardiaque constant, conformément à cette relation.",
        },
      ],
    },
  ],
  pointsCles: [
    "La viscosité traduit la résistance interne d’un fluide à l’écoulement ; le sang est un fluide non newtonien dont la viscosité apparente dépend de la vitesse d’écoulement et de l’hématocrite.",
    "Le nombre de Reynolds, Re = (rho x v x D)/eta, permet de prédire le passage d’un écoulement laminaire à un écoulement turbulent.",
    "La loi de Poiseuille, Q = (pi x r⁴ x DeltaP)/(8 x eta x L), montre que le débit varie avec la puissance quatre du rayon.",
    "L’équation de Bernoulli traduit la conservation de l’énergie mécanique : une accélération du flux s’accompagne d’une chute de la pression statique.",
    "La résistance vasculaire est l’analogue hydraulique de la résistance électrique, avec des lois d’association en série et en parallèle.",
    "La pression artérielle résulte du produit du débit cardiaque par la résistance vasculaire périphérique totale.",
    "Un écoulement turbulent génère un souffle audible, contrairement à un écoulement laminaire, silencieux.",
  ],
  erreursFrequentes: [
    "Oublier que le débit de Poiseuille varie avec la puissance quatre du rayon, et sous-estimer l’impact d’une petite variation de calibre vasculaire.",
    "Confondre loi de Poiseuille (fluide visqueux réel, énergie dissipée) et équation de Bernoulli (fluide parfait, énergie conservée).",
    "Croire que la pression augmente quand la vitesse d’écoulement augmente : c’est l’inverse d’après l’équation de Bernoulli, à altitude constante.",
    "Penser que le sang se comporte comme un fluide newtonien à viscosité constante en toutes circonstances.",
    "Additionner les résistances vasculaires en parallèle comme des résistances en série, en oubliant qu’il faut sommer leurs inverses.",
    "Confondre le nombre de Reynolds, sans dimension, avec une grandeur homogène à une vitesse ou une pression.",
  ],
  mnemotechniques: [
    {
      moyen: '« Poiseuille : R comme Rayon, puissance 4 »',
      explication:
        "Rappelle que dans la loi de Poiseuille, c’est le rayon du vaisseau qui a l’effet le plus puissant sur le débit, à la puissance quatre.",
    },
    {
      moyen: '« Bernoulli : vite veut dire moins de pression »',
      explication:
        "Résume le principe central de l’équation de Bernoulli : une augmentation de vitesse s’accompagne d’une diminution de pression statique, à altitude constante.",
    },
    {
      moyen: '« Parallèle : on additionne les inverses »',
      explication:
        "Pour des résistances vasculaires en parallèle, c’est l’inverse de la résistance totale qui est la somme des inverses de chaque résistance, comme pour les résistances électriques.",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Guyton et Hall, Précis de physiologie médicale',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-mecanique-fluides-fc-01',
      recto: 'Définir la viscosité d’un fluide.',
      verso: 'Grandeur qui traduit la résistance interne d’un fluide à l’écoulement, liée aux frottements entre couches de fluide en mouvement relatif.',
      type: 'definition',
      tags: ['viscosité'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-02',
      recto: 'Pourquoi dit-on que le sang est un fluide non newtonien ?',
      verso: 'Parce que sa viscosité apparente n’est pas constante : elle diminue quand la vitesse d’écoulement augmente, notamment du fait de la déformabilité des hématies.',
      type: 'definition',
      tags: ['viscosité sanguine'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-03',
      recto: 'Écrire la formule du nombre de Reynolds.',
      verso: 'Re = (rho x v x D) / eta.',
      type: 'formule',
      tags: ['Reynolds'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-04',
      recto: 'Que traduit un écoulement turbulent à l’auscultation ?',
      verso: 'Un souffle vasculaire ou cardiaque, lié aux vibrations générées par l’écoulement désordonné.',
      type: 'clinique',
      tags: ['souffle', 'turbulence'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-05',
      recto: 'Écrire la loi de Poiseuille.',
      verso: 'Q = (pi x r⁴ x DeltaP) / (8 x eta x L).',
      type: 'formule',
      tags: ['Poiseuille'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-06',
      recto: 'Si le rayon d’un vaisseau est divisé par deux, par combien le débit est-il divisé, à pression constante ?',
      verso: 'Par seize, puisque le débit varie avec la puissance quatre du rayon.',
      type: 'chiffre',
      tags: ['Poiseuille'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-07',
      recto: 'Écrire l’équation de Bernoulli.',
      verso: 'P + 1/2 x rho x v² + rho x g x h = constante, le long d’une ligne de courant.',
      type: 'formule',
      tags: ['Bernoulli'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-08',
      recto: 'Que se passe-t-il pour la pression au niveau d’une sténose où la vitesse du flux augmente ?',
      verso: 'La pression statique diminue localement, conformément à l’équation de Bernoulli, à altitude constante.',
      type: 'mecanisme',
      tags: ['Bernoulli', 'sténose'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-09',
      recto: 'Quelle est la différence fondamentale entre la loi de Poiseuille et l’équation de Bernoulli ?',
      verso: 'La loi de Poiseuille prend en compte la viscosité et la dissipation d’énergie ; l’équation de Bernoulli suppose un fluide parfait, sans perte d’énergie par frottement.',
      type: 'definition',
      tags: ['Bernoulli', 'Poiseuille'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-10',
      recto: 'Comment calcule-t-on la résistance équivalente de plusieurs résistances vasculaires en parallèle ?',
      verso: 'L’inverse de la résistance totale est la somme des inverses de chaque résistance : 1/R totale = 1/R1 + 1/R2 + …',
      type: 'formule',
      tags: ['résistances vasculaires'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-11',
      recto: 'Écrire la relation entre pression artérielle, débit cardiaque et résistance vasculaire périphérique.',
      verso: 'PAM = débit cardiaque x résistance vasculaire périphérique totale, par analogie avec la loi d’Ohm.',
      type: 'formule',
      tags: ['pression artérielle'],
    },
    {
      id: 'ue3-mecanique-fluides-fc-12',
      recto: 'Quel facteur physiologique augmente principalement la résistance vasculaire périphérique totale ?',
      verso: 'La vasoconstriction artériolaire, qui diminue le rayon des artérioles et augmente fortement la résistance (loi de Poiseuille).',
      type: 'mecanisme',
      tags: ['résistance vasculaire'],
    },
  ],
  qcm: [
    {
      id: 'ue3-mecanique-fluides-qcm-01',
      enonce: 'Concernant la viscosité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un fluide newtonien a une viscosité constante quel que soit le gradient de vitesse.',
          vraie: true,
          justification: 'Exact, c’est la définition d’un fluide newtonien.',
        },
        {
          lettre: 'B',
          texte: 'Le sang total se comporte comme un fluide newtonien parfait.',
          vraie: false,
          justification: "Le sang total est un fluide non newtonien : sa viscosité apparente varie avec la vitesse d’écoulement.",
        },
        {
          lettre: 'C',
          texte: 'Une polyglobulie augmente la viscosité sanguine.',
          vraie: true,
          justification: "Exact, la viscosité sanguine augmente avec l’hématocrite.",
        },
        {
          lettre: 'D',
          texte: 'La viscosité du plasma est nettement inférieure à celle de l’eau.',
          vraie: false,
          justification: "Elle est légèrement supérieure à celle de l’eau, d’un facteur d’environ 1,2 à 1,3.",
        },
        {
          lettre: 'E',
          texte: 'Une anémie sévère diminue la viscosité sanguine.',
          vraie: true,
          justification: "Exact, la baisse du nombre d’hématies réduit la viscosité apparente du sang.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-mecanique-fluides-qcm-02',
      enonce: 'Concernant le nombre de Reynolds et les régimes d’écoulement, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le nombre de Reynolds est une grandeur sans dimension.',
          vraie: true,
          justification: 'Exact, il compare les forces d’inertie aux forces de viscosité.',
        },
        {
          lettre: 'B',
          texte: 'Un nombre de Reynolds élevé favorise un écoulement laminaire.',
          vraie: false,
          justification: "Un nombre de Reynolds élevé favorise au contraire l’apparition d’un écoulement turbulent.",
        },
        {
          lettre: 'C',
          texte: 'Une sténose vasculaire, en augmentant localement la vitesse du sang, peut favoriser un écoulement turbulent.',
          vraie: true,
          justification: "Exact, l’augmentation de vitesse augmente le nombre de Reynolds, ce qui peut dépasser le seuil critique.",
        },
        {
          lettre: 'D',
          texte: 'Un écoulement laminaire est silencieux à l’auscultation.',
          vraie: true,
          justification: 'Exact, contrairement à un écoulement turbulent, qui génère un souffle audible.',
        },
        {
          lettre: 'E',
          texte: 'Le nombre de Reynolds diminue si la viscosité du fluide augmente, toutes choses égales par ailleurs.',
          vraie: true,
          justification: 'Exact : Re = (rho x v x D) / eta, il est inversement proportionnel à la viscosité.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-mecanique-fluides-qcm-03',
      enonce: 'Concernant la loi de Poiseuille, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le débit est proportionnel au rayon du vaisseau à la puissance quatre.',
          vraie: true,
          justification: 'Exact : Q = (pi x r⁴ x DeltaP)/(8 x eta x L).',
        },
        {
          lettre: 'B',
          texte: 'Le débit est proportionnel à la longueur du vaisseau.',
          vraie: false,
          justification: "Le débit est inversement proportionnel à la longueur du vaisseau, pas proportionnel.",
        },
        {
          lettre: 'C',
          texte: 'La loi de Poiseuille s’applique à un écoulement laminaire d’un fluide visqueux dans un conduit cylindrique.',
          vraie: true,
          justification: 'Exact, ce sont les conditions d’application de cette loi.',
        },
        {
          lettre: 'D',
          texte: 'La résistance hydraulique d’un conduit est inversement proportionnelle au rayon à la puissance quatre.',
          vraie: true,
          justification: 'Exact : R = (8 x eta x L) / (pi x r⁴).',
        },
        {
          lettre: 'E',
          texte: 'Une augmentation de la viscosité diminue la résistance hydraulique.',
          vraie: false,
          justification: "Une augmentation de la viscosité augmente au contraire la résistance hydraulique, qui lui est proportionnelle.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-mecanique-fluides-qcm-04',
      enonce: 'Concernant l’équation de Bernoulli, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle traduit la conservation de l’énergie mécanique le long d’une ligne de courant.',
          vraie: true,
          justification: 'Exact, pour un fluide parfait en écoulement permanent.',
        },
        {
          lettre: 'B',
          texte: 'Elle prend en compte les pertes d’énergie par frottement visqueux.',
          vraie: false,
          justification: "Elle suppose au contraire un fluide parfait, sans dissipation d’énergie par viscosité.",
        },
        {
          lettre: 'C',
          texte: 'À altitude constante, une augmentation de la vitesse s’accompagne d’une diminution de la pression statique.',
          vraie: true,
          justification: "Exact, c’est la conséquence directe de la conservation de l’énergie mécanique totale.",
        },
        {
          lettre: 'D',
          texte: 'Au niveau d’une sténose, la vitesse du flux sanguin diminue.',
          vraie: false,
          justification: "Elle augmente au contraire, d’après l’équation de continuité, la section étant réduite.",
        },
        {
          lettre: 'E',
          texte: 'L’échographie Doppler peut utiliser l’équation de Bernoulli pour estimer un gradient de pression transvalvulaire.',
          vraie: true,
          justification: "Exact, à partir de la mesure de la vitesse maximale du flux à travers la sténose.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 3,
    },
    {
      id: 'ue3-mecanique-fluides-qcm-05',
      enonce: 'Concernant les résistances vasculaires, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les résistances en série s’additionnent directement.',
          vraie: true,
          justification: 'Exact : R totale = R1 + R2 + …',
        },
        {
          lettre: 'B',
          texte: 'Les résistances en parallèle s’additionnent directement.',
          vraie: false,
          justification: "Non, ce sont leurs inverses qui s’additionnent : 1/R totale = 1/R1 + 1/R2 + …",
        },
        {
          lettre: 'C',
          texte: 'Les artérioles sont le principal site de régulation de la résistance vasculaire périphérique.',
          vraie: true,
          justification: "Exact, leur calibre est finement régulé par le système nerveux autonome et des facteurs locaux.",
        },
        {
          lettre: 'D',
          texte: 'La résistance vasculaire totale des territoires systémiques en parallèle est supérieure à celle du territoire le plus résistant pris isolément.',
          vraie: false,
          justification: "Au contraire, la résistance équivalente d’une association en parallèle est toujours inférieure à la plus petite des résistances individuelles.",
        },
        {
          lettre: 'E',
          texte: 'La pression artérielle moyenne est le produit du débit cardiaque par la résistance vasculaire périphérique totale.',
          vraie: true,
          justification: 'Exact : PAM = débit cardiaque x résistance vasculaire périphérique totale.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-mecanique-fluides-qcm-06',
      enonce: 'Concernant les applications cliniques de la mécanique des fluides, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une sténose artérielle peut générer un souffle par écoulement turbulent.',
          vraie: true,
          justification: "Exact, l’accélération locale du flux augmente le nombre de Reynolds et favorise la turbulence.",
        },
        {
          lettre: 'B',
          texte: 'Une vasodilatation artériolaire augmente la résistance vasculaire périphérique.',
          vraie: false,
          justification: "Une vasodilatation diminue au contraire la résistance vasculaire, en augmentant le rayon des artérioles.",
        },
        {
          lettre: 'C',
          texte: 'Une vasoconstriction artériolaire peut élever la pression artérielle à débit cardiaque constant.',
          vraie: true,
          justification: "Exact, par augmentation de la résistance vasculaire périphérique totale (PAM = débit x résistance).",
        },
        {
          lettre: 'D',
          texte: 'La viscosité sanguine n’a aucune influence sur la résistance vasculaire.',
          vraie: false,
          justification: "La viscosité influence directement la résistance hydraulique, selon la loi de Poiseuille.",
        },
        {
          lettre: 'E',
          texte: 'Une réduction du calibre vasculaire par athérome a un effet disproportionné sur le débit local en raison de la dépendance en puissance quatre du rayon.',
          vraie: true,
          justification: "Exact, c’est une conséquence directe de la loi de Poiseuille.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
