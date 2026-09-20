import type { Fiche } from '../../types';

export const ficheEtatsMatiere: Fiche = {
  id: 'ue3-etats-matiere',
  ue: 'ue3',
  titre: 'États de la matière et gaz',
  sousTitre:
    "Gaz parfaits, loi de Dalton, loi de Henry, changements d’état, tension superficielle et surfactant alvéolaire",
  chapitre: 'États de la matière et solutions',
  ordre: 1,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'gaz parfait',
    'loi de Dalton',
    'loi de Henry',
    'pression partielle',
    'tension superficielle',
    'loi de Laplace',
    'surfactant',
    'changement d’état',
  ],
  objectifs: [
    "Appliquer l’équation d’état des gaz parfaits et les lois qui en dérivent.",
    "Calculer une pression partielle et relier la loi de Dalton à la composition de l’air.",
    "Utiliser la loi de Henry pour quantifier la dissolution d’un gaz dans un liquide.",
    "Décrire les changements d’état d’un corps pur et le diagramme de phase associé.",
    "Expliquer la tension superficielle, la loi de Laplace et le rôle du surfactant alvéolaire.",
  ],
  sections: [
    {
      id: 'gaz-parfaits',
      titre: 'Le modèle du gaz parfait',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un gaz parfait est un modèle théorique dans lequel les molécules sont assimilées à des points matériels sans volume propre, sans interaction entre elles en dehors des chocs élastiques. Ce modèle décrit convenablement les gaz réels à pression modérée et température suffisamment élevée, conditions généralement réunies pour les gaz respiratoires.",
        },
        {
          type: 'formule',
          expression: 'P x V = n x R x T',
          legende:
            "Équation d’état des gaz parfaits : P est la pression, V le volume occupé par le gaz, n la quantité de matière, R la constante des gaz parfaits et T la température absolue.",
          unites: 'P en pascal (Pa), V en m³, n en mol, R = 8,314 J / (mol·K), T en kelvin (K)',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Toujours travailler en température absolue',
          texte:
            "Dans toute loi des gaz, la température doit être exprimée en kelvin, jamais en degrés Celsius. La conversion est T (K) = T (°C) + 273,15. Oublier cette conversion est l’erreur la plus fréquente dans les exercices utilisant la loi des gaz parfaits.",
        },
        {
          type: 'liste',
          items: [
            "Loi de Boyle-Mariotte : à température constante, P x V = constante (transformation isotherme).",
            "Loi de Charles : à volume constant, P / T = constante (transformation isochore).",
            "Loi de Gay-Lussac : à pression constante, V / T = constante (transformation isobare).",
            "Ces trois lois particulières sont des cas dérivés de l’équation générale P x V = n x R x T.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Conditions normales de température et de pression',
          texte:
            "Dans les conditions normales de température et de pression (0 °C, soit 273,15 K, et 1 atmosphère, soit 101 325 Pa), une mole de gaz parfait occupe un volume molaire de 22,4 litres.",
        },
      ],
    },
    {
      id: 'dalton-melanges',
      titre: 'Mélanges gazeux et loi de Dalton',
      blocs: [
        {
          type: 'definition',
          terme: 'Pression partielle',
          definition:
            "Dans un mélange de gaz, la pression partielle d’un constituant est la pression qu’il exercerait s’il occupait seul tout le volume disponible, à la même température.",
        },
        {
          type: 'formule',
          expression: 'P totale = somme des P i',
          legende:
            "Loi de Dalton : la pression totale d’un mélange gazeux est égale à la somme des pressions partielles de chacun de ses constituants.",
          unites: 'pressions en pascal (Pa) ou en millimètres de mercure (mmHg)',
        },
        {
          type: 'formule',
          expression: 'P i = P totale x f i',
          legende:
            "La pression partielle d’un gaz i est égale au produit de la pression totale par sa fraction molaire (ou fraction volumique) f i dans le mélange.",
          unites: 'P i et P totale en mmHg ou en pascal, f i sans unité (fraction comprise entre 0 et 1)',
        },
        {
          type: 'tableau',
          titre: 'Composition approximative de l’air inspiré au niveau de la mer',
          colonnes: ['Gaz', 'Fraction molaire', 'Pression partielle (mmHg)'],
          lignes: [
            ['Diazote (N2)', 'environ 78 %', 'environ 593'],
            ['Dioxygène (O2)', 'environ 21 %', 'environ 160'],
            ['Vapeur d’eau et autres gaz', 'environ 1 %', 'variable'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Pression atmosphérique de référence',
          texte:
            "La pression atmosphérique standard au niveau de la mer vaut 760 mmHg, soit 101 325 Pa, soit encore 1 atmosphère. C’est la valeur à utiliser par défaut si l’énoncé ne précise pas d’altitude particulière.",
        },
      ],
    },
    {
      id: 'henry-solubilite',
      titre: 'Dissolution des gaz : la loi de Henry',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Lorsqu’un gaz est mis en contact avec un liquide, une partie de ses molécules se dissout jusqu’à l’établissement d’un équilibre entre la phase gazeuse et la phase liquide. La loi de Henry relie, à l’équilibre et à température donnée, la concentration du gaz dissous à sa pression partielle dans la phase gazeuse.",
        },
        {
          type: 'formule',
          expression: 'C = alpha x P',
          legende:
            "Loi de Henry : la concentration C du gaz dissous est proportionnelle à la pression partielle P de ce gaz au contact du liquide. Le coefficient de solubilité alpha (coefficient de Henry) dépend du gaz, du solvant et de la température.",
          unites: 'C en mmol/L, P en mmHg ou en kPa, alpha en mmol/(L·mmHg) ou en mmol/(L·kPa)',
        },
        {
          type: 'liste',
          items: [
            "Le coefficient de solubilité alpha diminue quand la température augmente : un liquide chauffé dissout moins de gaz.",
            "À pression partielle égale, le dioxyde de carbone est environ vingt fois plus soluble dans le plasma que le dioxygène, ce qui explique la faible proportion de CO2 dissous sous forme physique par rapport à ses formes transportées (bicarbonate, carbamate).",
            "La loi de Henry ne s’applique qu’à la fraction de gaz physiquement dissoute, et non aux formes liées (par exemple l’oxygène fixé à l’hémoglobine).",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Application : accident de décompression',
          texte:
            "Chez le plongeur, l’augmentation de la pression ambiante en profondeur augmente, selon la loi de Henry, la quantité de diazote dissous dans les tissus. Une remontée trop rapide fait chuter brutalement la pression ambiante : le diazote dissous forme des bulles intravasculaires et tissulaires, à l’origine de l’accident de décompression.",
        },
      ],
    },
    {
      id: 'changements-etat',
      titre: 'Changements d’état d’un corps pur',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un corps pur peut exister sous trois états physiques principaux : solide, liquide et gazeux. Le passage d’un état à l’autre, à composition chimique inchangée, constitue un changement d’état physique, régi par la température et la pression.",
        },
        {
          type: 'tableau',
          titre: 'Les six changements d’état',
          colonnes: ['État initial', 'État final', 'Nom du changement'],
          lignes: [
            ['Solide', 'Liquide', 'Fusion'],
            ['Liquide', 'Solide', 'Solidification'],
            ['Liquide', 'Gaz', 'Vaporisation'],
            ['Gaz', 'Liquide', 'Liquéfaction (condensation liquide)'],
            ['Solide', 'Gaz', 'Sublimation'],
            ['Gaz', 'Solide', 'Condensation solide'],
          ],
        },
        {
          type: 'definition',
          terme: 'Point triple',
          definition:
            "Couple unique de température et de pression pour lequel les trois états physique, liquide et gazeux d’un corps pur coexistent simultanément en équilibre.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Vaporisation et évaporation',
          texte:
            "L’ébullition est une vaporisation qui se produit dans toute la masse du liquide lorsque sa pression de vapeur saturante égale la pression ambiante. L’évaporation est un phénomène de surface, possible à toute température, qui explique le refroidissement de la peau par la sueur.",
        },
      ],
    },
    {
      id: 'tension-superficielle',
      titre: 'Tension superficielle et loi de Laplace',
      blocs: [
        {
          type: 'definition',
          terme: 'Tension superficielle',
          definition:
            "Force par unité de longueur qui s’exerce tangentiellement à la surface d’un liquide, tendant à minimiser son aire. Elle résulte du déséquilibre des forces de cohésion intermoléculaires subi par les molécules de surface, non compensées du côté de la phase gazeuse.",
        },
        {
          type: 'formule',
          expression: 'gamma = F / L',
          legende:
            "Définition de la tension superficielle gamma comme force F exercée le long d’une longueur L de surface.",
          unites: 'gamma en newton par mètre (N/m), F en newton (N), L en mètre (m)',
        },
        {
          type: 'formule',
          expression: 'DeltaP = 2 x gamma / r',
          legende:
            "Loi de Laplace appliquée à une goutte ou une bulle sphérique à une seule interface liquide-gaz (par exemple une alvéole assimilée à une demi-sphère à interface unique) : la surpression DeltaP à l’intérieur de la sphère, par rapport à l’extérieur, est proportionnelle à la tension superficielle gamma et inversement proportionnelle au rayon r de courbure.",
          unites: 'DeltaP en pascal (Pa), gamma en N/m, r en mètre (m)',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une ou deux interfaces ?',
          texte:
            "Pour une bulle de savon, qui possède deux interfaces liquide-gaz (film mince avec air de part et d’autre), la loi de Laplace s’écrit DeltaP = 4 x gamma / r. Pour une alvéole pulmonaire ou une goutte, qui ne comportent qu’une seule interface liquide-gaz, on utilise DeltaP = 2 x gamma / r. Cette distinction est un piège classique.",
        },
        {
          type: 'paragraphe',
          texte:
            "Conséquence directe de la loi de Laplace : à tension superficielle égale, la surpression est d’autant plus grande que le rayon est petit. Deux alvéoles de rayons différents reliées par une même voie aérienne seraient donc instables : la plus petite, où la surpression est la plus élevée, se viderait dans la plus grande.",
        },
      ],
    },
    {
      id: 'surfactant-alveolaire',
      titre: 'Le surfactant alvéolaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le surfactant pulmonaire est un complexe lipoprotéique, riche en phospholipides (notamment la dipalmitoylphosphatidylcholine), sécrété par les pneumocytes de type II et tapissant la surface interne des alvéoles. Il s’intercale entre le film liquide alvéolaire et l’air, à l’interface où s’exerce la tension superficielle.",
        },
        {
          type: 'liste',
          items: [
            "Le surfactant abaisse la tension superficielle gamma du liquide alvéolaire, ce qui réduit la surpression DeltaP à rayon donné, d’après la loi de Laplace.",
            "Sa concentration à la surface augmente quand le rayon alvéolaire diminue (fin d’expiration), ce qui abaisse davantage gamma : cet effet stabilise les petites alvéoles et limite le risque de collapsus.",
            "À l’inverse, quand le rayon augmente (inspiration), le surfactant se dilue et gamma remonte, ce qui limite la distension excessive des grandes alvéoles.",
            "Ce mécanisme égalise les pressions entre alvéoles de tailles différentes et empêche le collapsus des petites alvéoles au profit des grandes.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Maladie des membranes hyalines',
          texte:
            "Chez le nouveau-né prématuré, l’immaturité des pneumocytes de type II entraîne un déficit en surfactant. La tension superficielle élevée qui en résulte favorise le collapsus alvéolaire (atélectasie) et un travail respiratoire majeur : c’est la maladie des membranes hyalines, dont la prise en charge repose notamment sur l’administration exogène de surfactant.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le sens des variations',
          texte:
            "Sans surfactant : petite alvéole = surpression élevée = tendance au collapsus. Avec surfactant : petite alvéole = tension superficielle abaissée = pression stabilisée. Le surfactant agit comme un régulateur qui s’oppose à l’instabilité prédite par la loi de Laplace seule.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’équation d’état des gaz parfaits P x V = n x R x T impose systématiquement l’usage de la température absolue en kelvin.",
    "La loi de Dalton énonce que la pression totale d’un mélange gazeux est la somme des pressions partielles de ses constituants.",
    "La pression partielle d’un gaz est le produit de la pression totale par sa fraction molaire.",
    "La loi de Henry, C = alpha x P, régit la dissolution d’un gaz dans un liquide à l’équilibre.",
    "Un corps pur connaît six changements d’état possibles entre les phases solide, liquide et gazeuse.",
    "La tension superficielle résulte du déséquilibre des forces de cohésion à l’interface liquide-gaz.",
    "La loi de Laplace DeltaP = 2 x gamma / r relie la surpression à la tension superficielle et au rayon de courbure pour une interface unique.",
    "Le surfactant alvéolaire abaisse la tension superficielle et stabilise les alvéoles de tailles différentes.",
  ],
  erreursFrequentes: [
    "Utiliser la température en degrés Celsius dans la loi des gaz parfaits au lieu de la convertir en kelvin.",
    "Confondre la loi de Laplace à une interface (DeltaP = 2 x gamma / r) et à deux interfaces (DeltaP = 4 x gamma / r).",
    "Croire que la loi de Henry s’applique à la totalité d’un gaz transporté, y compris ses formes liées (par exemple l’oxygène fixé à l’hémoglobine).",
    "Penser que le surfactant augmente la tension superficielle ; il l’abaisse, ce qui stabilise les petites alvéoles.",
    "Confondre évaporation, phénomène de surface possible à toute température, et ébullition, qui concerne toute la masse du liquide à une température précise.",
    "Oublier que le coefficient de solubilité de Henry diminue quand la température augmente.",
  ],
  mnemotechniques: [
    {
      moyen: 'PV = nRT : « Pour Voyager, il Nous faut du Régime et du Temps »',
      explication:
        "Association mnémotechnique simple pour retenir l’ordre des lettres de l’équation des gaz parfaits : P, V, n, R, T.",
    },
    {
      moyen: 'Laplace : « Deux sur R, comme une seule peau »',
      explication:
        "Pour une structure à une seule interface (une seule « peau », comme une alvéole ou une goutte), DeltaP = 2 x gamma / r ; pour une bulle à deux interfaces, il faut doubler le coefficient, soit 4 x gamma / r.",
    },
    {
      moyen: 'Henry : « Chaud dissout moins »',
      explication:
        "Plus la température augmente, plus le coefficient de solubilité alpha diminue, donc moins de gaz reste dissous : c’est pourquoi une boisson gazeuse chaude perd plus vite son gaz.",
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
      id: 'ue3-etats-matiere-fc-01',
      recto: "Écrire l’équation d’état des gaz parfaits.",
      verso: 'P x V = n x R x T, avec T obligatoirement exprimée en kelvin.',
      type: 'formule',
      tags: ['gaz parfaits'],
    },
    {
      id: 'ue3-etats-matiere-fc-02',
      recto: 'Que dit la loi de Dalton sur un mélange de gaz ?',
      verso: 'La pression totale du mélange est égale à la somme des pressions partielles de chaque constituant.',
      type: 'definition',
      tags: ['loi de Dalton'],
    },
    {
      id: 'ue3-etats-matiere-fc-03',
      recto: 'Comment calculer la pression partielle d’un gaz dans un mélange ?',
      verso: 'P i = P totale x f i, où f i est la fraction molaire (ou volumique) du gaz i.',
      type: 'formule',
      tags: ['pression partielle'],
    },
    {
      id: 'ue3-etats-matiere-fc-04',
      recto: 'Énoncer la loi de Henry.',
      verso: 'C = alpha x P : la concentration d’un gaz dissous est proportionnelle à sa pression partielle, alpha étant le coefficient de solubilité.',
      type: 'formule',
      tags: ['loi de Henry'],
    },
    {
      id: 'ue3-etats-matiere-fc-05',
      recto: 'Citer les six changements d’état d’un corps pur.',
      verso: 'Fusion, solidification, vaporisation, liquéfaction, sublimation, condensation solide.',
      type: 'classification',
      tags: ['changements d’état'],
    },
    {
      id: 'ue3-etats-matiere-fc-06',
      recto: 'Définir le point triple d’un corps pur.',
      verso: 'Couple unique de température et de pression où les trois états (solide, liquide, gazeux) coexistent en équilibre.',
      type: 'definition',
      tags: ['diagramme de phase'],
    },
    {
      id: 'ue3-etats-matiere-fc-07',
      recto: 'Écrire la loi de Laplace pour une interface liquide-gaz unique.',
      verso: 'DeltaP = 2 x gamma / r, où gamma est la tension superficielle et r le rayon de courbure.',
      type: 'formule',
      tags: ['loi de Laplace'],
    },
    {
      id: 'ue3-etats-matiere-fc-08',
      recto: 'Quelle est la formule de Laplace pour une bulle à deux interfaces ?',
      verso: 'DeltaP = 4 x gamma / r.',
      type: 'formule',
      tags: ['loi de Laplace'],
    },
    {
      id: 'ue3-etats-matiere-fc-09',
      recto: 'Quel type cellulaire sécrète le surfactant pulmonaire ?',
      verso: 'Les pneumocytes de type II.',
      type: 'definition',
      tags: ['surfactant'],
    },
    {
      id: 'ue3-etats-matiere-fc-10',
      recto: 'Pourquoi le surfactant stabilise-t-il les petites alvéoles ?',
      verso: 'Quand le rayon alvéolaire diminue, le surfactant se concentre à la surface et abaisse davantage la tension superficielle, réduisant la surpression prédite par la loi de Laplace.',
      type: 'mecanisme',
      tags: ['surfactant', 'physiopathologie'],
    },
    {
      id: 'ue3-etats-matiere-fc-11',
      recto: 'Quelle pathologie néonatale résulte d’un déficit en surfactant ?',
      verso: 'La maladie des membranes hyalines, liée à l’immaturité des pneumocytes de type II chez le prématuré.',
      type: 'clinique',
      tags: ['surfactant', 'néonatologie'],
    },
    {
      id: 'ue3-etats-matiere-fc-12',
      recto: 'Donner la valeur de la pression atmosphérique standard au niveau de la mer.',
      verso: '760 mmHg, soit 101 325 Pa, soit 1 atmosphère.',
      type: 'chiffre',
      tags: ['pression atmosphérique'],
    },
  ],
  qcm: [
    {
      id: 'ue3-etats-matiere-qcm-01',
      enonce: "Concernant l’équation d’état des gaz parfaits P x V = n x R x T, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La température T doit être exprimée en kelvin.',
          vraie: true,
          justification: "Exact : la loi des gaz parfaits n’est valide qu’avec une température thermodynamique absolue.",
        },
        {
          lettre: 'B',
          texte: 'R est une constante qui dépend de la nature du gaz considéré.',
          vraie: false,
          justification: "Faux : R est la constante universelle des gaz parfaits, identique pour tous les gaz supposés parfaits.",
        },
        {
          lettre: 'C',
          texte: 'À température et pression constantes, le volume est proportionnel à la quantité de matière.',
          vraie: true,
          justification: 'Exact : V = n x R x T / P, donc V est proportionnel à n si T et P sont fixées.',
        },
        {
          lettre: 'D',
          texte: 'La loi de Boyle-Mariotte décrit une transformation à pression constante.',
          vraie: false,
          justification: 'La loi de Boyle-Mariotte décrit une transformation isotherme, à température constante (P x V = constante).',
        },
        {
          lettre: 'E',
          texte: 'Une mole de gaz parfait occupe 22,4 litres dans les conditions normales de température et de pression.',
          vraie: true,
          justification: 'Exact : c’est le volume molaire normal, à 0 °C et 1 atmosphère.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer les transformations isotherme, isochore et isobare.',
      difficulte: 2,
    },
    {
      id: 'ue3-etats-matiere-qcm-02',
      enonce: 'Concernant la loi de Dalton et les pressions partielles, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La pression partielle d’un gaz est la pression qu’il exercerait seul dans le même volume à la même température.',
          vraie: true,
          justification: "C’est la définition même de la pression partielle.",
        },
        {
          lettre: 'B',
          texte: 'La somme des pressions partielles est supérieure à la pression totale du mélange.',
          vraie: false,
          justification: 'La somme des pressions partielles est exactement égale à la pression totale, selon la loi de Dalton.',
        },
        {
          lettre: 'C',
          texte: 'La pression partielle du dioxygène dans l’air inspiré est d’environ 160 mmHg au niveau de la mer.',
          vraie: true,
          justification: 'Exact : environ 21 % de 760 mmHg, soit environ 160 mmHg.',
        },
        {
          lettre: 'D',
          texte: 'La fraction molaire d’un gaz dans un mélange peut être supérieure à 1.',
          vraie: false,
          justification: "Une fraction molaire est toujours comprise entre 0 et 1, la somme des fractions de tous les constituants valant 1.",
        },
        {
          lettre: 'E',
          texte: 'La pression partielle d’un gaz augmente si sa fraction molaire augmente à pression totale constante.',
          vraie: true,
          justification: 'Exact : P i = P totale x f i, une relation de proportionnalité directe.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-etats-matiere-qcm-03',
      enonce: 'Concernant la loi de Henry et la dissolution des gaz, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La concentration d’un gaz dissous est proportionnelle à sa pression partielle à l’équilibre.',
          vraie: true,
          justification: 'C’est l’énoncé même de la loi de Henry : C = alpha x P.',
        },
        {
          lettre: 'B',
          texte: 'Le coefficient de solubilité alpha augmente lorsque la température augmente.',
          vraie: false,
          justification: 'Il diminue quand la température augmente : un liquide chaud dissout moins de gaz.',
        },
        {
          lettre: 'C',
          texte: 'Le dioxyde de carbone est plus soluble dans le plasma que le dioxygène.',
          vraie: true,
          justification: "Exact : à pression partielle égale, le CO2 est environ vingt fois plus soluble que l’O2.",
        },
        {
          lettre: 'D',
          texte: 'La loi de Henry s’applique à l’oxygène fixé sur l’hémoglobine.',
          vraie: false,
          justification: "Elle ne concerne que la fraction de gaz physiquement dissoute, pas les formes liées comme l’oxyhémoglobine.",
        },
        {
          lettre: 'E',
          texte: 'Une remontée trop rapide après une plongée expose à un dégagement de bulles de diazote.',
          vraie: true,
          justification: 'Exact : la chute brutale de pression fait chuter la solubilité du diazote dissous, qui démoule sous forme de bulles.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-etats-matiere-qcm-04',
      enonce: "Concernant les changements d’état d’un corps pur, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La fusion est le passage de l’état liquide à l’état solide.',
          vraie: false,
          justification: "C’est l’inverse : la fusion est le passage du solide au liquide ; la solidification est le passage inverse.",
        },
        {
          lettre: 'B',
          texte: 'La sublimation est le passage direct de l’état solide à l’état gazeux.',
          vraie: true,
          justification: 'Exact, sans passage par l’état liquide.',
        },
        {
          lettre: 'C',
          texte: 'Au point triple, seuls deux états physiques coexistent.',
          vraie: false,
          justification: 'Au point triple, les trois états (solide, liquide, gazeux) coexistent simultanément.',
        },
        {
          lettre: 'D',
          texte: 'L’évaporation ne peut se produire qu’à la température d’ébullition.',
          vraie: false,
          justification: "L’évaporation est un phénomène de surface possible à toute température ; l’ébullition, elle, requiert une température précise pour une pression donnée.",
        },
        {
          lettre: 'E',
          texte: 'La condensation liquide est le passage de l’état gazeux à l’état liquide.',
          vraie: true,
          justification: 'Exact, aussi appelée liquéfaction.',
        },
      ],
      correction: 'Réponses exactes : B et E.',
      difficulte: 1,
    },
    {
      id: 'ue3-etats-matiere-qcm-05',
      enonce: 'Concernant la tension superficielle et la loi de Laplace, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La tension superficielle s’exprime en newton par mètre.',
          vraie: true,
          justification: 'Exact : gamma = F / L, soit une force par unité de longueur, en N/m.',
        },
        {
          lettre: 'B',
          texte: 'Pour une alvéole à une seule interface, DeltaP = 4 x gamma / r.',
          vraie: false,
          justification: 'Cette formule concerne une structure à deux interfaces (bulle de savon). Pour une interface unique, DeltaP = 2 x gamma / r.',
        },
        {
          lettre: 'C',
          texte: 'À tension superficielle égale, la surpression est plus élevée dans une petite alvéole que dans une grande.',
          vraie: true,
          justification: 'Exact : DeltaP est inversement proportionnel au rayon r.',
        },
        {
          lettre: 'D',
          texte: 'La tension superficielle résulte des forces de cohésion intermoléculaires non compensées à la surface du liquide.',
          vraie: true,
          justification: "Exact : les molécules de surface subissent des forces de cohésion déséquilibrées, orientées vers l’intérieur du liquide.",
        },
        {
          lettre: 'E',
          texte: 'Sans surfactant, deux alvéoles de rayons différents et reliées entre elles seraient stables.',
          vraie: false,
          justification: 'Sans surfactant, la plus petite alvéole, où la surpression est plus élevée, se viderait dans la plus grande : le système est instable.',
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 3,
    },
    {
      id: 'ue3-etats-matiere-qcm-06',
      enonce: 'Concernant le surfactant alvéolaire, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il est sécrété par les pneumocytes de type I.',
          vraie: false,
          justification: 'Il est sécrété par les pneumocytes de type II ; les pneumocytes de type I assurent les échanges gazeux.',
        },
        {
          lettre: 'B',
          texte: 'Il abaisse la tension superficielle du liquide alvéolaire.',
          vraie: true,
          justification: "Exact : c’est son rôle principal, ce qui réduit la surpression prédite par la loi de Laplace.",
        },
        {
          lettre: 'C',
          texte: 'Son effet est plus marqué quand le rayon alvéolaire diminue.',
          vraie: true,
          justification: 'Exact : sa concentration de surface augmente quand l’alvéole se rétracte, abaissant davantage la tension superficielle.',
        },
        {
          lettre: 'D',
          texte: 'Un déficit en surfactant favorise le collapsus des petites alvéoles.',
          vraie: true,
          justification: "Exact : sans son effet stabilisateur, la surpression élevée dans les petites alvéoles entraîne leur vidange vers les grandes.",
        },
        {
          lettre: 'E',
          texte: 'La maladie des membranes hyalines touche préférentiellement le nouveau-né à terme.',
          vraie: false,
          justification: "Elle touche préférentiellement le prématuré, chez qui les pneumocytes de type II sont immatures.",
        },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
  ],
};
