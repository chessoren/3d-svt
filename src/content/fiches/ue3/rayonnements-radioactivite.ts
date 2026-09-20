import type { Fiche } from '../../types';

export const ficheRayonnementsRadioactivite: Fiche = {
  id: 'ue3-rayonnements-radioactivite',
  ue: 'ue3',
  titre: 'Rayonnements et radioactivité',
  sousTitre:
    "Spectre électromagnétique, rayonnements ionisants et non ionisants, désintégrations alpha, bêta et gamma, loi de décroissance, période, activité et radioprotection",
  chapitre: 'Ondes et rayonnements',
  ordre: 9,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'spectre électromagnétique',
    'rayonnement ionisant',
    'désintégration alpha',
    'désintégration bêta',
    'période radioactive',
    'activité',
    'loi de décroissance',
    'radioprotection',
  ],
  objectifs: [
    "Situer les différents rayonnements sur le spectre électromagnétique et distinguer rayonnements ionisants et non ionisants.",
    "Décrire les trois principaux modes de désintégration radioactive : alpha, bêta et gamma.",
    "Appliquer la loi de décroissance radioactive et relier période, constante radioactive et activité.",
    "Définir les grandeurs dosimétriques utilisées en radioprotection.",
    "Énoncer les principes fondamentaux de la radioprotection.",
  ],
  sections: [
    {
      id: 'spectre-electromagnetique',
      titre: 'Le spectre électromagnétique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le rayonnement électromagnétique regroupe l’ensemble des ondes qui se propagent par oscillation couplée d’un champ électrique et d’un champ magnétique, capables de se propager dans le vide. Selon leur fréquence (ou leur longueur d’onde), on distingue plusieurs domaines aux propriétés très différentes.",
        },
        {
          type: 'formule',
          expression: 'E = h x f',
          legende:
            "Énergie E d’un photon associé à une onde électromagnétique de fréquence f, h étant la constante de Planck.",
          unites: 'E en joule (J) ou en électronvolt (eV), h = 6,626 x 10⁻³⁴ J.s, f en Hz',
        },
        {
          type: 'tableau',
          titre: 'Principaux domaines du spectre électromagnétique',
          colonnes: ['Domaine', 'Longueur d’onde approximative', 'Caractère ionisant'],
          lignes: [
            ['Ondes radio, micro-ondes', 'supérieure au millimètre', 'Non ionisant'],
            ['Infrarouge', 'environ 780 nm à 1 mm', 'Non ionisant'],
            ['Lumière visible', 'environ 400 à 780 nm', 'Non ionisant'],
            ['Ultraviolet', 'environ 10 à 400 nm', 'Peu à moyennement ionisant selon la longueur d’onde (UVC)'],
            ['Rayons X', 'environ 0,01 à 10 nm', 'Ionisant'],
            ['Rayons gamma', 'inférieure à 0,01 nm', 'Fortement ionisant'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ce qui distingue rayons X et rayons gamma',
          texte:
            "Rayons X et rayons gamma sont de même nature physique (rayonnement électromagnétique de haute énergie) et peuvent avoir des énergies qui se recouvrent. Ils se distinguent par leur origine : les rayons X proviennent du cortège électronique de l’atome (transition électronique ou freinage d’électrons), les rayons gamma proviennent du noyau atomique (désexcitation nucléaire).",
        },
      ],
    },
    {
      id: 'ionisant-non-ionisant',
      titre: 'Rayonnements ionisants et non ionisants',
      blocs: [
        {
          type: 'definition',
          terme: 'Rayonnement ionisant',
          definition:
            "Rayonnement dont l’énergie est suffisante pour arracher un électron à un atome ou une molécule de la matière traversée, créant ainsi une paire d’ions. Le seuil d’ionisation de la matière biologique se situe classiquement autour de quelques électronvolts à une dizaine d’électronvolts.",
        },
        {
          type: 'liste',
          items: [
            "Les rayonnements ionisants comprennent les particules chargées (alpha, bêta) et les rayonnements électromagnétiques de haute énergie (rayons X, rayons gamma), ainsi que les neutrons.",
            "Les rayonnements non ionisants (ondes radio, micro-ondes, infrarouge, lumière visible, une partie des ultraviolets) n’ont pas l’énergie suffisante pour ioniser directement la matière, mais peuvent néanmoins produire des effets biologiques (effet thermique, photochimique).",
            "Le caractère ionisant d’un rayonnement conditionne son potentiel de lésion de l’ADN et donc son risque cancérigène à long terme.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Effets biologiques des ultraviolets',
          texte:
            "Les ultraviolets de type C (UVC), les plus énergétiques, sont ionisants mais arrêtés par la couche d’ozone atmosphérique. Les UVA et UVB, moins énergétiques, ne sont pas classiquement considérés comme ionisants au sens strict mais provoquent des lésions photochimiques de l’ADN (dimères de thymine), à l’origine du vieillissement cutané et du risque de cancer cutané.",
        },
      ],
    },
    {
      id: 'modes-desintegration',
      titre: 'Les modes de désintégration radioactive',
      blocs: [
        {
          type: 'definition',
          terme: 'Radioactivité',
          definition:
            "Transformation spontanée d’un noyau atomique instable (radionucléide) en un autre noyau, accompagnée de l’émission d’un rayonnement, jusqu’à obtention d’un noyau stable.",
        },
        {
          type: 'tableau',
          titre: 'Les trois principaux types de désintégration',
          colonnes: ['Type', 'Particule ou rayonnement émis', 'Effet sur le noyau', 'Pouvoir pénétrant'],
          lignes: [
            ['Désintégration alpha', 'Noyau d’hélium (2 protons + 2 neutrons)', 'Numéro atomique Z diminue de 2, nombre de masse A diminue de 4', 'Très faible (arrêté par une feuille de papier)'],
            ['Désintégration bêta moins', 'Électron (et antineutrino)', 'Numéro atomique Z augmente de 1, A inchangé (un neutron se transforme en proton)', 'Faible à modéré (arrêté par quelques millimètres d’aluminium)'],
            ['Désintégration bêta plus', 'Positon (et neutrino)', 'Numéro atomique Z diminue de 1, A inchangé (un proton se transforme en neutron)', 'Faible à modéré'],
            ['Désexcitation gamma', 'Photon de haute énergie', 'Aucun changement de Z ni de A (le noyau passe d’un état excité à un état stable ou moins excité)', 'Élevé (nécessite plusieurs centimètres de plomb ou de béton)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La désexcitation gamma accompagne souvent une désintégration alpha ou bêta',
          texte:
            "Après une désintégration alpha ou bêta, le noyau fils se trouve fréquemment dans un état excité : il se désexcite alors en émettant un ou plusieurs photons gamma, sans changement supplémentaire de sa composition (Z et A restent inchangés lors de cette étape).",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Le positon, antiparticule de l’électron',
          texte:
            "Le positon, émis lors d’une désintégration bêta plus, s’annihile rapidement au contact d’un électron du milieu environnant, produisant deux photons gamma de 511 keV émis à 180 degrés l’un de l’autre : c’est le principe physique exploité par la tomographie par émission de positons (TEP).",
        },
      ],
    },
    {
      id: 'loi-decroissance',
      titre: 'Loi de décroissance radioactive',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La désintégration d’un noyau radioactif est un phénomène aléatoire, indépendant pour chaque noyau, mais dont la probabilité par unité de temps (constante radioactive lambda) est fixe pour un radionucléide donné. À l’échelle d’une population de noyaux, ce caractère aléatoire se traduit par une décroissance exponentielle prévisible du nombre de noyaux non désintégrés.",
        },
        {
          type: 'formule',
          expression: 'N(t) = N0 x exp(-lambda x t)',
          legende:
            "Loi de décroissance radioactive : N(t) est le nombre de noyaux radioactifs restants à l’instant t, N0 le nombre initial, lambda la constante radioactive caractéristique du radionucléide.",
          unites: 'N(t) et N0 sans unité (nombre de noyaux), lambda en s⁻¹, t en s',
        },
        {
          type: 'formule',
          expression: 'T = ln(2) / lambda',
          legende:
            "Période radioactive (ou demi-vie) T : durée au bout de laquelle la moitié des noyaux initialement présents s’est désintégrée. Elle est reliée à la constante radioactive lambda par cette relation.",
          unites: 'T en seconde (s), minute, heure, jour ou année selon le radionucléide ; lambda en s⁻¹',
        },
        {
          type: 'definition',
          terme: 'Activité (A)',
          definition:
            "Nombre de désintégrations radioactives se produisant par unité de temps dans un échantillon. Elle est proportionnelle au nombre de noyaux radioactifs présents : A = lambda x N. L’activité décroît donc selon la même loi exponentielle que le nombre de noyaux, avec la même période T.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Unité d’activité',
          texte:
            "L’activité s’exprime en becquerel (Bq), correspondant à une désintégration par seconde. L’ancienne unité, le curie (Ci), équivaut à 3,7 x 10¹⁰ Bq et reste parfois utilisée en pratique clinique.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Règle pratique des périodes successives',
          texte:
            "Après une période T, il reste 50 % de l’activité initiale ; après deux périodes, 25 % ; après trois périodes, environ 12,5 % ; après dix périodes, moins de 0,1 %. Au-delà de dix périodes, l’activité résiduelle est en pratique considérée comme négligeable.",
        },
      ],
    },
    {
      id: 'dosimetrie',
      titre: 'Grandeurs dosimétriques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La dosimétrie quantifie l’énergie déposée par un rayonnement ionisant dans la matière, ainsi que le risque biologique qui en découle, pour permettre d’évaluer et de limiter l’exposition des personnes.",
        },
        {
          type: 'tableau',
          titre: 'Principales grandeurs dosimétriques',
          colonnes: ['Grandeur', 'Définition', 'Unité'],
          lignes: [
            ['Dose absorbée (D)', 'Énergie déposée par le rayonnement par unité de masse de matière irradiée', 'Gray (Gy), 1 Gy = 1 J/kg'],
            ['Dose équivalente (H)', 'Dose absorbée pondérée par un facteur qui dépend de la nature du rayonnement (facteur de pondération radiologique)', 'Sievert (Sv)'],
            ['Dose efficace (E)', 'Dose équivalente pondérée par un facteur qui dépend de la radiosensibilité de chaque organe ou tissu exposé, sommée sur l’ensemble du corps', 'Sievert (Sv)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Pourquoi pondérer la dose absorbée ?',
          texte:
            "À dose absorbée égale, un rayonnement alpha produit un effet biologique bien plus important qu’un rayonnement gamma, du fait de sa forte densité d’ionisation le long de sa trajectoire (transfert d’énergie linéique élevé). Le facteur de pondération radiologique corrige cette différence pour obtenir une grandeur, la dose équivalente, comparable entre types de rayonnements.",
        },
      ],
    },
    {
      id: 'radioprotection',
      titre: 'Principes de radioprotection',
      blocs: [
        {
          type: 'liste',
          items: [
            "Principe de justification : toute exposition aux rayonnements ionisants doit être justifiée par un bénéfice attendu supérieur au risque encouru.",
            "Principe d’optimisation (ALARA, « As Low As Reasonably Achievable ») : pour toute exposition justifiée, la dose reçue doit être maintenue aussi faible que raisonnablement possible.",
            "Principe de limitation : des valeurs limites réglementaires de dose ne doivent pas être dépassées pour les travailleurs exposés et le public, hors exposition médicale du patient lui-même qui relève du seul principe de justification et d’optimisation.",
          ],
        },
        {
          type: 'etapes',
          titre: 'Les trois moyens pratiques de réduire une exposition externe',
          etapes: [
            {
              titre: 'Réduire le temps d’exposition',
              detail: "La dose reçue est proportionnelle au temps passé à proximité de la source : limiter ce temps réduit proportionnellement la dose.",
            },
            {
              titre: 'Augmenter la distance à la source',
              detail:
                "L’intensité d’un rayonnement émis par une source ponctuelle décroît selon le carré de la distance (loi de l’inverse du carré) : doubler la distance divise l’exposition par quatre.",
            },
            {
              titre: 'Interposer un écran (blindage)',
              detail:
                "Le choix du matériau dépend du type de rayonnement : plomb ou béton pour les rayons X et gamma, matériaux légers (plexiglas) pour les rayonnements bêta afin de limiter la production de rayonnement de freinage.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Cas particulier de la contamination interne',
          texte:
            "En cas d’ingestion, d’inhalation ou de blessure contaminante, un radionucléide émetteur alpha, peu pénétrant à distance, devient particulièrement dangereux car il dépose toute son énergie au contact direct des tissus environnants. C’est pourquoi les émetteurs alpha, peu préoccupants en exposition externe, sont redoutés en contamination interne.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’énergie d’un photon, E = h x f, augmente avec sa fréquence et détermine son caractère ionisant ou non.",
    "Les rayonnements ionisants comprennent les particules alpha et bêta, les rayons X et gamma, et les neutrons.",
    "La désintégration alpha diminue Z de 2 et A de 4 ; la désintégration bêta moins augmente Z de 1 sans changer A.",
    "La loi de décroissance radioactive, N(t) = N0 x exp(-lambda x t), et la période T = ln(2)/lambda décrivent l’évolution temporelle d’un échantillon radioactif.",
    "L’activité, exprimée en becquerel, est proportionnelle au nombre de noyaux radioactifs présents (A = lambda x N).",
    "La dose absorbée (gray) mesure l’énergie déposée ; la dose équivalente et la dose efficace (sievert) pondèrent cette dose selon le rayonnement et le tissu exposé.",
    "La radioprotection repose sur les principes de justification, d’optimisation (ALARA) et de limitation, et sur le triptyque temps-distance-écran.",
  ],
  erreursFrequentes: [
    "Confondre rayons X et rayons gamma : ils diffèrent par leur origine (électronique pour les X, nucléaire pour les gamma), pas nécessairement par leur énergie.",
    "Oublier que la désexcitation gamma ne change ni le numéro atomique ni le nombre de masse du noyau.",
    "Confondre dose absorbée (gray, énergie physique déposée) et dose équivalente ou efficace (sievert, grandeurs pondérées pour le risque biologique).",
    "Croire que doubler la distance à une source divise l’exposition par deux : elle est en réalité divisée par quatre, selon la loi de l’inverse du carré de la distance.",
    "Penser qu’un émetteur alpha est toujours peu dangereux, en oubliant le risque majeur qu’il représente en cas de contamination interne.",
    "Confondre la constante radioactive lambda, propriété physique fixe d’un radionucléide, et l’activité A, qui décroît avec le temps.",
  ],
  mnemotechniques: [
    {
      moyen: '« Alpha : lourd et lent, arrêté par une feuille de papier »',
      explication:
        "Rappelle le très faible pouvoir pénétrant du rayonnement alpha, en raison de sa masse et de sa charge élevées, malgré son fort pouvoir ionisant local.",
    },
    {
      moyen: '« ALARA : Aussi bas que raisonnablement possible »',
      explication:
        "Traduction directe du principe d’optimisation de la radioprotection, qui guide la pratique quotidienne en imagerie médicale.",
    },
    {
      moyen: '« Temps, Distance, Écran : les trois leviers »',
      explication:
        "Les trois moyens pratiques de réduire une exposition externe aux rayonnements ionisants : réduire le temps, augmenter la distance, interposer un écran.",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Radioprotection, collection Med-Line',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-rayonnements-radioactivite-fc-01',
      recto: 'Écrire la relation entre énergie d’un photon et fréquence de l’onde.',
      verso: 'E = h x f, avec h la constante de Planck.',
      type: 'formule',
      tags: ['spectre électromagnétique'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-02',
      recto: 'Qu’est-ce qui distingue les rayons X des rayons gamma ?',
      verso: 'Leur origine : les rayons X proviennent du cortège électronique, les rayons gamma du noyau atomique (désexcitation nucléaire).',
      type: 'definition',
      tags: ['rayons X', 'rayons gamma'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-03',
      recto: 'Comment évoluent Z et A lors d’une désintégration alpha ?',
      verso: 'Z diminue de 2 et A diminue de 4 (émission d’un noyau d’hélium).',
      type: 'chiffre',
      tags: ['désintégration alpha'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-04',
      recto: 'Comment évoluent Z et A lors d’une désintégration bêta moins ?',
      verso: 'Z augmente de 1, A reste inchangé (un neutron se transforme en proton avec émission d’un électron).',
      type: 'chiffre',
      tags: ['désintégration bêta'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-05',
      recto: 'Écrire la loi de décroissance radioactive.',
      verso: 'N(t) = N0 x exp(-lambda x t).',
      type: 'formule',
      tags: ['décroissance radioactive'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-06',
      recto: 'Écrire la relation entre période radioactive et constante radioactive.',
      verso: 'T = ln(2) / lambda.',
      type: 'formule',
      tags: ['période radioactive'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-07',
      recto: 'Définir l’activité d’un échantillon radioactif et donner son unité.',
      verso: 'Nombre de désintégrations par unité de temps, A = lambda x N ; elle s’exprime en becquerel (Bq).',
      type: 'formule',
      tags: ['activité'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-08',
      recto: 'Que reste-t-il de l’activité initiale après trois périodes radioactives ?',
      verso: 'Environ 12,5 % (soit 0,5 au cube).',
      type: 'chiffre',
      tags: ['période radioactive'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-09',
      recto: 'Quelle est l’unité de la dose absorbée et sa définition ?',
      verso: 'Le gray (Gy), 1 Gy = 1 joule d’énergie déposée par kilogramme de matière irradiée.',
      type: 'definition',
      tags: ['dosimétrie'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-10',
      recto: 'Pourquoi utilise-t-on la dose équivalente en plus de la dose absorbée ?',
      verso: 'Pour tenir compte de la différence d’efficacité biologique selon le type de rayonnement (un facteur de pondération radiologique élevé pour les rayonnements alpha, par exemple).',
      type: 'mecanisme',
      tags: ['dosimétrie'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-11',
      recto: 'Citer les trois moyens pratiques de réduire une exposition externe.',
      verso: 'Réduire le temps d’exposition, augmenter la distance à la source, interposer un écran (blindage).',
      type: 'mecanisme',
      tags: ['radioprotection'],
    },
    {
      id: 'ue3-rayonnements-radioactivite-fc-12',
      recto: 'Que devient l’exposition si on double la distance à une source radioactive ponctuelle ?',
      verso: 'Elle est divisée par quatre, selon la loi de l’inverse du carré de la distance.',
      type: 'chiffre',
      tags: ['radioprotection'],
    },
  ],
  qcm: [
    {
      id: 'ue3-rayonnements-radioactivite-qcm-01',
      enonce: 'Concernant le spectre électromagnétique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’énergie d’un photon est proportionnelle à sa fréquence.',
          vraie: true,
          justification: 'Exact : E = h x f.',
        },
        {
          lettre: 'B',
          texte: 'Les ondes radio sont des rayonnements ionisants.',
          vraie: false,
          justification: "Elles sont non ionisantes, leur énergie étant trop faible pour arracher un électron à un atome.",
        },
        {
          lettre: 'C',
          texte: 'Les rayons gamma proviennent du noyau atomique.',
          vraie: true,
          justification: "Exact, ils résultent de la désexcitation d’un noyau après une désintégration.",
        },
        {
          lettre: 'D',
          texte: 'Les rayons X proviennent exclusivement du noyau atomique.',
          vraie: false,
          justification: "Faux, ils proviennent du cortège électronique de l’atome (transitions électroniques ou freinage d’électrons).",
        },
        {
          lettre: 'E',
          texte: 'La lumière visible est un rayonnement non ionisant.',
          vraie: true,
          justification: 'Exact, son énergie est insuffisante pour ioniser la matière.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-rayonnements-radioactivite-qcm-02',
      enonce: 'Concernant les modes de désintégration radioactive, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La désintégration alpha s’accompagne de l’émission d’un noyau d’hélium.',
          vraie: true,
          justification: 'Exact, composé de deux protons et deux neutrons.',
        },
        {
          lettre: 'B',
          texte: 'La désintégration bêta moins diminue le numéro atomique Z.',
          vraie: false,
          justification: "Elle l’augmente de 1, un neutron se transformant en proton avec émission d’un électron.",
        },
        {
          lettre: 'C',
          texte: 'La désexcitation gamma modifie le nombre de masse A du noyau.',
          vraie: false,
          justification: "Elle ne modifie ni Z ni A : seule l’énergie du noyau change, par émission d’un photon.",
        },
        {
          lettre: 'D',
          texte: 'Le rayonnement alpha a un pouvoir pénétrant très faible.',
          vraie: true,
          justification: "Exact, il peut être arrêté par une simple feuille de papier.",
        },
        {
          lettre: 'E',
          texte: 'Le positon émis lors d’une désintégration bêta plus s’annihile au contact d’un électron.',
          vraie: true,
          justification: "Exact, produisant deux photons gamma de 511 keV, principe exploité en TEP.",
        },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-rayonnements-radioactivite-qcm-03',
      enonce: 'Concernant la loi de décroissance radioactive, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le nombre de noyaux restants décroît de façon exponentielle avec le temps.',
          vraie: true,
          justification: 'Exact : N(t) = N0 x exp(-lambda x t).',
        },
        {
          lettre: 'B',
          texte: 'La période radioactive T est reliée à lambda par T = ln(2) / lambda.',
          vraie: true,
          justification: 'Exact, c’est la définition de la demi-vie.',
        },
        {
          lettre: 'C',
          texte: 'Après deux périodes, il reste environ 50 % de l’activité initiale.',
          vraie: false,
          justification: 'Après deux périodes, il reste 25 % (0,5 au carré) ; 50 % correspond à une seule période.',
        },
        {
          lettre: 'D',
          texte: 'L’activité est proportionnelle au nombre de noyaux radioactifs présents.',
          vraie: true,
          justification: 'Exact : A = lambda x N.',
        },
        {
          lettre: 'E',
          texte: 'L’activité s’exprime en gray.',
          vraie: false,
          justification: "L’activité s’exprime en becquerel (Bq) ; le gray est l’unité de dose absorbée.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-rayonnements-radioactivite-qcm-04',
      enonce: 'Concernant les grandeurs dosimétriques, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le gray mesure l’énergie déposée par unité de masse de matière irradiée.',
          vraie: true,
          justification: 'Exact, 1 Gy = 1 J/kg.',
        },
        {
          lettre: 'B',
          texte: 'Le sievert est l’unité de la dose absorbée.',
          vraie: false,
          justification: "Le sievert est l’unité de la dose équivalente et de la dose efficace ; le gray est l’unité de la dose absorbée.",
        },
        {
          lettre: 'C',
          texte: 'La dose équivalente pondère la dose absorbée selon le type de rayonnement.',
          vraie: true,
          justification: 'Exact, par un facteur de pondération radiologique.',
        },
        {
          lettre: 'D',
          texte: 'À dose absorbée égale, un rayonnement alpha a un effet biologique comparable à un rayonnement gamma.',
          vraie: false,
          justification: "Un rayonnement alpha a un effet biologique bien plus important, du fait de sa forte densité d’ionisation locale.",
        },
        {
          lettre: 'E',
          texte: 'La dose efficace tient compte de la radiosensibilité de chaque organe exposé.',
          vraie: true,
          justification: 'Exact, c’est sa spécificité par rapport à la dose équivalente, sommée sur l’ensemble du corps.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-rayonnements-radioactivite-qcm-05',
      enonce: 'Concernant les principes de radioprotection, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le principe ALARA vise à maintenir la dose reçue aussi faible que raisonnablement possible.',
          vraie: true,
          justification: "Exact, c’est le principe d’optimisation.",
        },
        {
          lettre: 'B',
          texte: 'Doubler la distance à une source ponctuelle divise l’exposition par deux.',
          vraie: false,
          justification: "Elle la divise par quatre, selon la loi de l’inverse du carré de la distance.",
        },
        {
          lettre: 'C',
          texte: 'Réduire le temps d’exposition réduit proportionnellement la dose reçue.',
          vraie: true,
          justification: 'Exact, la dose est proportionnelle au temps d’exposition à débit de dose constant.',
        },
        {
          lettre: 'D',
          texte: 'Le principe de limitation de dose s’applique de la même façon au patient et au travailleur exposé.',
          vraie: false,
          justification: "Non, l’exposition médicale du patient relève des principes de justification et d’optimisation, sans limite de dose réglementaire fixe, contrairement au travailleur exposé.",
        },
        {
          lettre: 'E',
          texte: 'Le choix du matériau d’écran dépend du type de rayonnement à arrêter.',
          vraie: true,
          justification: "Exact, plomb ou béton pour les rayons X et gamma, matériaux légers pour les rayonnements bêta.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-rayonnements-radioactivite-qcm-06',
      enonce: 'Concernant le risque lié aux rayonnements ionisants, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un émetteur alpha est particulièrement dangereux en cas de contamination interne.',
          vraie: true,
          justification: "Exact, il dépose toute son énergie au contact direct des tissus, malgré son faible pouvoir pénétrant à distance.",
        },
        {
          lettre: 'B',
          texte: 'Un émetteur alpha est le plus dangereux des trois types de rayonnement en exposition externe.',
          vraie: false,
          justification: "En exposition externe, c’est au contraire le moins dangereux, car il est arrêté par de très faibles épaisseurs de matière, comme la couche cornée de la peau.",
        },
        {
          lettre: 'C',
          texte: 'Les rayonnements gamma nécessitent un écran épais (plomb, béton) pour être efficacement arrêtés.',
          vraie: true,
          justification: 'Exact, en raison de leur fort pouvoir pénétrant.',
        },
        {
          lettre: 'D',
          texte: 'Les ultraviolets UVC sont arrêtés par la couche d’ozone atmosphérique.',
          vraie: true,
          justification: "Exact, ce qui limite normalement leur atteinte de la surface terrestre.",
        },
        {
          lettre: 'E',
          texte: 'Le rayonnement bêta a un pouvoir pénétrant supérieur au rayonnement gamma.',
          vraie: false,
          justification: "C’est l’inverse : le rayonnement gamma, non chargé, a un pouvoir pénétrant bien supérieur à celui du rayonnement bêta, particule chargée.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
