import type { Fiche } from '../../types';

export const ficheOndesAcoustique: Fiche = {
  id: 'ue3-ondes-acoustique',
  ue: 'ue3',
  titre: 'Ondes et acoustique',
  sousTitre:
    "Nature et caractéristiques des ondes, intensité, décibels, impédance acoustique, effet Doppler, physiologie de l’audition et ultrasons",
  chapitre: 'Ondes et rayonnements',
  ordre: 7,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'onde acoustique',
    'fréquence',
    'intensité sonore',
    'décibel',
    'impédance acoustique',
    'effet Doppler',
    'audition',
    'ultrasons',
  ],
  objectifs: [
    "Décrire la nature physique d’une onde sonore et ses grandeurs caractéristiques.",
    "Utiliser l’échelle logarithmique du décibel pour exprimer une intensité sonore.",
    "Définir l’impédance acoustique et son rôle dans la réflexion des ondes à une interface.",
    "Expliquer le principe de l’effet Doppler et son application en médecine.",
    "Relier les propriétés physiques du son aux mécanismes physiologiques de l’audition et à l’usage des ultrasons.",
  ],
  sections: [
    {
      id: 'nature-ondes',
      titre: 'Nature et caractéristiques d’une onde sonore',
      blocs: [
        {
          type: 'definition',
          terme: 'Onde sonore',
          definition:
            "Onde mécanique longitudinale, résultant de la propagation d’une variation locale de pression dans un milieu matériel élastique (gaz, liquide ou solide), sans transport net de matière. Contrairement à une onde électromagnétique, elle ne peut pas se propager dans le vide.",
        },
        {
          type: 'formule',
          expression: 'v = lambda x f',
          legende:
            "Relation entre la célérité v de l’onde, sa longueur d’onde lambda et sa fréquence f.",
          unites: 'v en m/s, lambda en m, f en Hz',
        },
        {
          type: 'tableau',
          titre: 'Célérité du son selon le milieu (ordres de grandeur à température ambiante)',
          colonnes: ['Milieu', 'Célérité approximative'],
          lignes: [
            ['Air', 'environ 340 m/s'],
            ['Eau', 'environ 1 500 m/s'],
            ['Tissus mous (moyenne utilisée en échographie)', 'environ 1 540 m/s'],
            ['Os', 'environ 3 500 à 4 000 m/s'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La célérité ne dépend pas de la fréquence dans un milieu donné',
          texte:
            "Dans un milieu homogène donné, la célérité du son est fixée par les propriétés mécaniques du milieu (masse volumique, compressibilité). Si la fréquence change, c’est la longueur d’onde qui varie en conséquence, pas la célérité.",
        },
      ],
    },
    {
      id: 'intensite-decibels',
      titre: 'Intensité sonore et échelle des décibels',
      blocs: [
        {
          type: 'definition',
          terme: 'Intensité acoustique (I)',
          definition:
            "Puissance sonore transportée par l’onde par unité de surface perpendiculaire à la direction de propagation.",
        },
        {
          type: 'formule',
          expression: 'L = 10 x log10 ( I / I0 )',
          legende:
            "Niveau d’intensité sonore L exprimé en décibels (dB), rapportant l’intensité I à une intensité de référence I0, correspondant au seuil d’audibilité humain standard.",
          unites: 'L en décibel (dB), I et I0 en W/m², I0 = 10^-12 W/m² (valeur de référence conventionnelle à 1000 Hz)',
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Une échelle logarithmique, pas linéaire',
          texte:
            "Une augmentation de 10 dB correspond à une multiplication par 10 de l’intensité acoustique. Une augmentation de 3 dB correspond approximativement à un doublement de l’intensité. C’est pourquoi additionner deux sources sonores identiques de 70 dB chacune donne environ 73 dB, et non 140 dB.",
        },
        {
          type: 'tableau',
          titre: 'Repères usuels de niveaux sonores',
          colonnes: ['Situation', 'Niveau sonore approximatif'],
          lignes: [
            ['Seuil d’audibilité', '0 dB'],
            ['Conversation normale', 'environ 60 dB'],
            ['Trafic routier dense', 'environ 80 à 90 dB'],
            ['Seuil de douleur', 'environ 120 dB'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exposition sonore et risque auditif',
          texte:
            "Une exposition prolongée à des niveaux sonores élevés (typiquement au-delà de 85 dB en milieu professionnel) expose à un risque de traumatisme sonore chronique et de surdité de perception, par lésion des cellules ciliées de l’organe de Corti.",
        },
      ],
    },
    {
      id: 'impedance-acoustique',
      titre: 'Impédance acoustique',
      blocs: [
        {
          type: 'definition',
          terme: 'Impédance acoustique (Z)',
          definition:
            "Grandeur caractéristique d’un milieu qui traduit sa résistance à la propagation d’une onde acoustique, définie comme le produit de la masse volumique du milieu par la célérité du son dans ce milieu.",
        },
        {
          type: 'formule',
          expression: 'Z = rho x v',
          legende: "Impédance acoustique Z d’un milieu, produit de sa masse volumique rho par la célérité v du son.",
          unites: 'Z en rayleigh (kg/(m²·s)), rho en kg/m³, v en m/s',
        },
        {
          type: 'paragraphe',
          texte:
            "Lorsqu’une onde acoustique rencontre une interface entre deux milieux d’impédances différentes, une partie de son énergie est réfléchie et une partie est transmise. Plus la différence d’impédance entre les deux milieux est grande, plus la fraction d’énergie réfléchie est importante.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Application directe à l’échographie',
          texte:
            "Le principe de l’échographie repose sur la détection des ondes ultrasonores réfléchies aux interfaces entre tissus d’impédances acoustiques différentes. Un gel de couplage est utilisé entre la sonde et la peau pour éviter la réflexion quasi totale qui se produirait à une interface sonde-air, l’air ayant une impédance très différente de celle des tissus mous.",
        },
      ],
    },
    {
      id: 'effet-doppler',
      titre: "L’effet Doppler",
      blocs: [
        {
          type: 'definition',
          terme: 'Effet Doppler',
          definition:
            "Décalage de la fréquence perçue d’une onde lorsqu’il existe un mouvement relatif entre la source émettrice et l’observateur (ou le réflecteur), par rapport à la fréquence émise.",
        },
        {
          type: 'formule',
          expression: 'Delta f = 2 x f0 x v x cos(theta) / c',
          legende:
            "Décalage Doppler Delta f mesuré en écho-Doppler médical, où f0 est la fréquence de l’onde émise, v la vitesse de déplacement du réflecteur (par exemple les globules rouges), theta l’angle entre la direction du faisceau ultrasonore et celle de l’écoulement, et c la célérité du son dans le milieu. Le facteur 2 tient compte de l’aller-retour de l’onde (émission puis réflexion).",
          unites: 'Delta f en Hz, f0 en Hz, v en m/s, c en m/s, theta en degré ou radian',
        },
        {
          type: 'liste',
          items: [
            "Lorsque la source (ou le réflecteur) se rapproche de l’observateur, la fréquence perçue est plus élevée que la fréquence émise : décalage Doppler positif.",
            "Lorsque la source s’éloigne, la fréquence perçue est plus basse : décalage Doppler négatif.",
            "Le décalage Doppler est maximal lorsque la direction du mouvement est parallèle à l’axe du faisceau (theta = 0°) et nul lorsqu’elle lui est perpendiculaire (theta = 90°), puisque cos(90°) = 0.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Applications médicales de l’effet Doppler',
          texte:
            "L’échographie Doppler exploite le décalage de fréquence induit par le déplacement des globules rouges dans un vaisseau pour mesurer la vitesse et le sens du flux sanguin : Doppler cardiaque pour l’étude des flux valvulaires, Doppler vasculaire pour la recherche de sténoses ou l’étude de la circulation fœtale.",
        },
      ],
    },
    {
      id: 'audition',
      titre: 'Physiologie de l’audition',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’oreille transforme l’énergie mécanique d’une onde sonore aérienne en signal électrique interprétable par le système nerveux central, en trois étapes anatomiques successives : oreille externe, oreille moyenne, oreille interne.",
        },
        {
          type: 'tableau',
          titre: 'Rôle des trois parties de l’oreille',
          colonnes: ['Partie de l’oreille', 'Structures principales', 'Fonction'],
          lignes: [
            ['Oreille externe', 'Pavillon, conduit auditif externe', 'Captation et acheminement de l’onde sonore vers le tympan'],
            ['Oreille moyenne', 'Tympan, chaîne des osselets (marteau, enclume, étrier)', 'Amplification mécanique et adaptation d’impédance entre l’air et le liquide cochléaire'],
            ['Oreille interne', 'Cochlée, organe de Corti', 'Transduction mécano-électrique et codage fréquentiel du son'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Pourquoi une adaptation d’impédance est-elle nécessaire ?',
          texte:
            "L’impédance acoustique de l’air est très inférieure à celle du liquide cochléaire : sans adaptation, la quasi-totalité de l’énergie sonore serait réfléchie à l’interface air-liquide. La chaîne des osselets de l’oreille moyenne, associée à la différence de surface entre le tympan et la fenêtre ovale, amplifie la pression et limite cette perte par réflexion.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Bande de fréquences audibles',
          texte:
            "L’oreille humaine perçoit les sons dans une bande de fréquences comprise entre environ 20 Hz et 20 000 Hz, avec une sensibilité maximale autour de 1000 à 4000 Hz.",
        },
      ],
    },
    {
      id: 'ultrasons',
      titre: 'Les ultrasons',
      blocs: [
        {
          type: 'definition',
          terme: 'Ultrasons',
          definition:
            "Ondes mécaniques de même nature que le son audible, mais de fréquence supérieure à 20 000 Hz, donc inaudibles pour l’oreille humaine.",
        },
        {
          type: 'liste',
          items: [
            "Les ultrasons utilisés en imagerie diagnostique (échographie) ont des fréquences typiquement comprises entre 2 et 15 MHz selon la profondeur explorée et la résolution recherchée.",
            "Une fréquence plus élevée améliore la résolution spatiale de l’image mais réduit la profondeur de pénétration dans les tissus, car l’atténuation augmente avec la fréquence.",
            "Une fréquence plus basse pénètre plus profondément mais offre une résolution moindre : le choix de la sonde est un compromis entre profondeur d’exploration et finesse de l’image.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Applications thérapeutiques des ultrasons',
          texte:
            "À plus forte puissance, les ultrasons sont utilisés en thérapeutique, notamment les ultrasons focalisés de haute intensité (HIFU) pour la destruction thermique ciblée de certaines tumeurs. La lithotritie extracorporelle, qui fragmente les calculs urinaires, repose quant à elle sur des ondes de choc et non sur des ultrasons au sens strict.",
        },
      ],
    },
  ],
  pointsCles: [
    "Une onde sonore est une onde mécanique longitudinale qui nécessite un milieu matériel de propagation.",
    "La célérité du son dépend du milieu, pas de la fréquence de l’onde ; la relation v = lambda x f relie les trois grandeurs.",
    "Le niveau sonore en décibels est une échelle logarithmique : L = 10 x log10 (I / I0).",
    "L’impédance acoustique Z = rho x v conditionne la réflexion d’une onde à une interface entre deux milieux.",
    "L’effet Doppler traduit le décalage de fréquence lié au mouvement relatif entre source, réflecteur et observateur.",
    "L’oreille moyenne assure une adaptation d’impédance indispensable entre l’air et le liquide cochléaire.",
    "Les ultrasons diagnostiques se situent entre 2 et 15 MHz, avec un compromis entre résolution et profondeur de pénétration.",
  ],
  erreursFrequentes: [
    "Croire qu’une onde sonore peut se propager dans le vide, comme une onde électromagnétique.",
    "Penser que la célérité du son varie avec la fréquence dans un milieu homogène donné : c’est la longueur d’onde qui varie, pas la célérité.",
    "Additionner directement des niveaux sonores en décibels comme de simples nombres, en oubliant la nature logarithmique de l’échelle.",
    "Oublier le facteur 2 dans la formule du décalage Doppler en écho-Doppler médical, lié à l’aller-retour de l’onde.",
    "Croire que le décalage Doppler est maximal quand le faisceau est perpendiculaire à l’écoulement : il est en réalité nul dans ce cas (cos 90° = 0).",
    "Confondre le rôle de l’oreille moyenne (adaptation d’impédance, transmission mécanique) avec celui de l’oreille interne (transduction mécano-électrique).",
  ],
  mnemotechniques: [
    {
      moyen: '« Doppler : ça se rapproche, ça monte »',
      explication:
        "Quand la source ou le réflecteur se rapproche, la fréquence perçue augmente (décalage positif) ; quand elle s’éloigne, la fréquence diminue (décalage négatif).",
    },
    {
      moyen: '« 10 dB = fois 10, 3 dB = fois 2 »',
      explication:
        "Repère rapide de l’échelle logarithmique des décibels : +10 dB multiplie l’intensité par 10, +3 dB la multiplie approximativement par 2.",
    },
    {
      moyen: '« Impédance = densité fois vitesse »',
      explication:
        "Rappel direct de la formule Z = rho x v, pour ne pas confondre l’impédance acoustique avec la seule masse volumique ou la seule célérité.",
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
      id: 'ue3-ondes-acoustique-fc-01',
      recto: 'Une onde sonore peut-elle se propager dans le vide ?',
      verso: 'Non, c’est une onde mécanique qui nécessite un milieu matériel élastique pour se propager.',
      type: 'definition',
      tags: ['onde sonore'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-02',
      recto: 'Écrire la relation entre célérité, longueur d’onde et fréquence.',
      verso: 'v = lambda x f.',
      type: 'formule',
      tags: ['ondes'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-03',
      recto: 'Écrire la formule du niveau d’intensité sonore en décibels.',
      verso: 'L = 10 x log10 ( I / I0 ), I0 étant l’intensité de référence du seuil d’audibilité.',
      type: 'formule',
      tags: ['décibel'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-04',
      recto: 'De combien augmente l’intensité acoustique pour un gain de 10 dB ?',
      verso: 'Elle est multipliée par 10.',
      type: 'chiffre',
      tags: ['décibel'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-05',
      recto: 'Écrire la formule de l’impédance acoustique d’un milieu.',
      verso: 'Z = rho x v, produit de la masse volumique par la célérité du son.',
      type: 'formule',
      tags: ['impédance acoustique'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-06',
      recto: 'Pourquoi utilise-t-on un gel de couplage en échographie ?',
      verso: 'Pour éviter la réflexion quasi totale des ultrasons qui se produirait à l’interface sonde-air, en raison de la grande différence d’impédance acoustique entre l’air et les tissus.',
      type: 'mecanisme',
      tags: ['échographie', 'impédance'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-07',
      recto: 'Qu’est-ce que l’effet Doppler ?',
      verso: 'Le décalage de fréquence perçue d’une onde lorsqu’il existe un mouvement relatif entre la source (ou le réflecteur) et l’observateur.',
      type: 'definition',
      tags: ['effet Doppler'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-08',
      recto: 'Pour quel angle le décalage Doppler est-il nul ?',
      verso: 'Lorsque le faisceau est perpendiculaire à la direction du mouvement (theta = 90°), car cos(90°) = 0.',
      type: 'mecanisme',
      tags: ['effet Doppler'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-09',
      recto: 'Quel est le rôle de la chaîne des osselets de l’oreille moyenne ?',
      verso: 'Amplifier la pression sonore et assurer l’adaptation d’impédance entre l’air et le liquide cochléaire de l’oreille interne.',
      type: 'mecanisme',
      tags: ['audition'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-10',
      recto: 'Quelle est la bande de fréquences audibles par l’oreille humaine ?',
      verso: 'Environ 20 Hz à 20 000 Hz.',
      type: 'chiffre',
      tags: ['audition'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-11',
      recto: 'Quelle est la gamme de fréquences des ultrasons utilisés en échographie diagnostique ?',
      verso: 'Environ 2 à 15 MHz.',
      type: 'chiffre',
      tags: ['ultrasons'],
    },
    {
      id: 'ue3-ondes-acoustique-fc-12',
      recto: 'Quel compromis guide le choix de la fréquence d’une sonde échographique ?',
      verso: 'Une fréquence élevée améliore la résolution spatiale mais réduit la profondeur de pénétration ; une fréquence basse pénètre plus profondément mais avec une résolution moindre.',
      type: 'mecanisme',
      tags: ['ultrasons', 'échographie'],
    },
  ],
  qcm: [
    {
      id: 'ue3-ondes-acoustique-qcm-01',
      enonce: 'Concernant la nature des ondes sonores, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une onde sonore est une onde électromagnétique.',
          vraie: false,
          justification: "Faux : c’est une onde mécanique, qui nécessite un milieu matériel pour se propager, contrairement à une onde électromagnétique.",
        },
        {
          lettre: 'B',
          texte: 'La célérité du son dans l’eau est supérieure à celle dans l’air.',
          vraie: true,
          justification: 'Exact : environ 1500 m/s dans l’eau contre environ 340 m/s dans l’air.',
        },
        {
          lettre: 'C',
          texte: 'La longueur d’onde d’un son varie avec la fréquence, à célérité constante dans un milieu donné.',
          vraie: true,
          justification: 'Exact, d’après v = lambda x f, à v fixée, lambda varie inversement à f.',
        },
        {
          lettre: 'D',
          texte: 'La célérité du son dans l’os est inférieure à celle dans l’air.',
          vraie: false,
          justification: "Elle est très supérieure, environ 3500 à 4000 m/s dans l’os contre environ 340 m/s dans l’air.",
        },
        {
          lettre: 'E',
          texte: 'Une onde sonore est une onde longitudinale.',
          vraie: true,
          justification: "Exact, la vibration des particules du milieu se fait dans la direction de propagation de l’onde.",
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue3-ondes-acoustique-qcm-02',
      enonce: 'Concernant l’échelle des décibels, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le décibel est une échelle logarithmique.',
          vraie: true,
          justification: 'Exact : L = 10 x log10 (I / I0).',
        },
        {
          lettre: 'B',
          texte: 'Un gain de 10 dB correspond à une multiplication de l’intensité acoustique par 10.',
          vraie: true,
          justification: "Exact, c’est une conséquence directe de la définition logarithmique du décibel.",
        },
        {
          lettre: 'C',
          texte: 'Deux sources sonores identiques de 70 dB chacune, combinées, donnent un niveau sonore de 140 dB.',
          vraie: false,
          justification: "Faux : en raison de l’échelle logarithmique, la combinaison donne environ 73 dB, pas une simple addition arithmétique.",
        },
        {
          lettre: 'D',
          texte: 'Le seuil de douleur se situe autour de 120 dB.',
          vraie: true,
          justification: 'Exact, c’est l’ordre de grandeur habituellement retenu.',
        },
        {
          lettre: 'E',
          texte: 'Une exposition prolongée à des niveaux sonores élevés peut léser les cellules ciliées de l’organe de Corti.',
          vraie: true,
          justification: 'Exact, c’est le mécanisme du traumatisme sonore chronique.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-ondes-acoustique-qcm-03',
      enonce: 'Concernant l’impédance acoustique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’impédance acoustique d’un milieu est le produit de sa masse volumique par la célérité du son dans ce milieu.',
          vraie: true,
          justification: 'Exact : Z = rho x v.',
        },
        {
          lettre: 'B',
          texte: 'Plus la différence d’impédance entre deux milieux est grande, plus la réflexion à leur interface est importante.',
          vraie: true,
          justification: "Exact, c’est le principe même de la formation d’une image échographique.",
        },
        {
          lettre: 'C',
          texte: 'L’impédance acoustique de l’air est très proche de celle des tissus mous.',
          vraie: false,
          justification: "Elle en est au contraire très éloignée, ce qui justifie l’usage d’un gel de couplage en échographie.",
        },
        {
          lettre: 'D',
          texte: 'L’échographie exploite la réflexion des ondes ultrasonores aux interfaces tissulaires.',
          vraie: true,
          justification: 'Exact, c’est le principe fondamental de cette technique d’imagerie.',
        },
        {
          lettre: 'E',
          texte: 'Deux milieux d’impédances acoustiques identiques réfléchissent la totalité de l’onde incidente.',
          vraie: false,
          justification: "C’est l’inverse : deux milieux de même impédance ne réfléchissent quasiment rien, l’onde est presque totalement transmise.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-ondes-acoustique-qcm-04',
      enonce: 'Concernant l’effet Doppler, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un réflecteur qui se rapproche de la sonde génère un décalage Doppler positif.',
          vraie: true,
          justification: 'Exact, la fréquence perçue est alors supérieure à la fréquence émise.',
        },
        {
          lettre: 'B',
          texte: 'Le décalage Doppler est indépendant de l’angle entre le faisceau et la direction du mouvement.',
          vraie: false,
          justification: "Il dépend directement du cosinus de cet angle : Delta f = 2 x f0 x v x cos(theta) / c.",
        },
        {
          lettre: 'C',
          texte: 'Le facteur 2 de la formule Doppler médicale tient compte de l’aller-retour de l’onde ultrasonore.',
          vraie: true,
          justification: 'Exact, l’onde est émise puis réfléchie avant d’être captée à nouveau par la sonde.',
        },
        {
          lettre: 'D',
          texte: 'L’effet Doppler permet d’estimer la vitesse du flux sanguin dans un vaisseau.',
          vraie: true,
          justification: 'Exact, c’est le principe de l’échographie Doppler vasculaire et cardiaque.',
        },
        {
          lettre: 'E',
          texte: 'Le décalage Doppler est maximal lorsque le faisceau est perpendiculaire à l’écoulement.',
          vraie: false,
          justification: "Il est au contraire nul dans cette configuration, puisque cos(90°) = 0 ; il est maximal quand le faisceau est parallèle à l’écoulement.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 3,
    },
    {
      id: 'ue3-ondes-acoustique-qcm-05',
      enonce: 'Concernant la physiologie de l’audition, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La cochlée appartient à l’oreille moyenne.',
          vraie: false,
          justification: "La cochlée appartient à l’oreille interne, où se fait la transduction mécano-électrique.",
        },
        {
          lettre: 'B',
          texte: 'La chaîne des osselets assure une adaptation d’impédance entre l’air et le liquide cochléaire.',
          vraie: true,
          justification: "Exact, sans cette adaptation, la majorité de l’énergie sonore serait réfléchie à l’interface air-liquide.",
        },
        {
          lettre: 'C',
          texte: 'L’oreille humaine perçoit des sons entre environ 20 Hz et 20 000 Hz.',
          vraie: true,
          justification: 'Exact, c’est la bande de fréquences audibles usuellement admise.',
        },
        {
          lettre: 'D',
          texte: 'L’organe de Corti se situe dans l’oreille externe.',
          vraie: false,
          justification: "Il se situe dans la cochlée, au sein de l’oreille interne.",
        },
        {
          lettre: 'E',
          texte: 'La sensibilité auditive humaine est maximale autour de 1000 à 4000 Hz.',
          vraie: true,
          justification: "Exact, c’est la plage de fréquences où le seuil d’audibilité est le plus bas.",
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-ondes-acoustique-qcm-06',
      enonce: 'Concernant les ultrasons, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les ultrasons ont une fréquence inférieure à 20 Hz.',
          vraie: false,
          justification: "Les ultrasons ont au contraire une fréquence supérieure à 20 000 Hz (20 kHz), au-delà du seuil audible.",
        },
        {
          lettre: 'B',
          texte: 'Une fréquence plus élevée de sonde échographique améliore la résolution spatiale de l’image.',
          vraie: true,
          justification: "Exact, mais au prix d’une profondeur de pénétration réduite.",
        },
        {
          lettre: 'C',
          texte: 'Une fréquence plus basse de sonde échographique permet une exploration plus profonde des tissus.',
          vraie: true,
          justification: "Exact, l’atténuation des ultrasons dans les tissus augmentant avec la fréquence.",
        },
        {
          lettre: 'D',
          texte: 'Les ultrasons focalisés de haute intensité permettent de détruire certains tissus par effet thermique.',
          vraie: true,
          justification: 'Exact : à haute intensité, l’absorption des ultrasons échauffe localement le tissu, ce qui autorise une destruction thermique ciblée.',
        },
        {
          lettre: 'E',
          texte: 'Les fréquences utilisées en échographie diagnostique sont habituellement inférieures à 100 kHz.',
          vraie: false,
          justification: "Elles se situent typiquement entre 2 et 15 MHz, soit bien au-delà de 100 kHz.",
        },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
  ],
};
