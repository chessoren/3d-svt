import type { Fiche } from '../../types';

export const ficheMecaniqueVentilatoire: Fiche = {
  id: 'physio-mecanique-ventilatoire',
  ue: 'physio',
  titre: 'Mécanique ventilatoire',
  sousTitre: 'Muscles respiratoires, pressions, compliance et volumes pulmonaires',
  chapitre: 'Respiratoire',
  ordre: 5,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'muscles respiratoires',
    'pression pleurale',
    'compliance pulmonaire',
    'volumes pulmonaires',
    'espace mort',
    'surfactant',
    'travail respiratoire',
    'résistances des voies aériennes',
  ],
  objectifs: [
    'Décrire le rôle des muscles inspiratoires et expiratoires dans la ventilation.',
    'Expliquer les variations de pression qui génèrent le flux d’air lors du cycle respiratoire.',
    'Définir la compliance pulmonaire et les facteurs qui la déterminent.',
    'Décrire les volumes et capacités pulmonaires mesurés en spirométrie.',
    'Expliquer le rôle du surfactant et la notion d’espace mort.',
  ],
  sections: [
    {
      id: 'muscles-respiratoires',
      titre: 'Muscles de la ventilation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La ventilation pulmonaire résulte de variations cycliques du volume thoracique, produites par l’action des muscles respiratoires. Au repos, l’inspiration est un phénomène actif, l’expiration un phénomène passif.",
        },
        {
          type: 'tableau',
          titre: 'Muscles respiratoires principaux',
          colonnes: ['Muscle', 'Phase', 'Action', 'Contexte d’utilisation'],
          lignes: [
            ['Diaphragme', 'Inspiration', 'S’abaisse et augmente le diamètre vertical du thorax', 'Muscle inspiratoire principal, actif au repos'],
            ['Intercostaux externes', 'Inspiration', 'Élèvent les côtes, augmentent le diamètre transversal', 'Actifs au repos, renforcés à l’effort'],
            ['Scalènes, sterno-cléido-mastoïdiens', 'Inspiration forcée', 'Élèvent la cage thoracique supérieure', 'Muscles accessoires, recrutés à l’effort ou en détresse respiratoire'],
            ['Muscles abdominaux', 'Expiration forcée', 'Compriment le contenu abdominal, repoussent le diaphragme vers le haut', 'Recrutés à l’effort, à la toux, non actifs au repos'],
            ['Intercostaux internes', 'Expiration forcée', 'Abaissent les côtes', 'Recrutés à l’effort'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Expiration passive au repos',
          texte:
            "Au repos, l’expiration ne nécessite pas de contraction musculaire active : elle résulte du retour élastique passif du poumon et de la cage thoracique vers leur position d’équilibre, une fois la contraction inspiratoire relâchée.",
        },
      ],
    },
    {
      id: 'pressions',
      titre: 'Pressions et génération du flux aérien',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le flux d’air entre l’atmosphère et les alvéoles résulte d’un gradient de pression créé par les variations de volume thoracique, conformément à la loi de Boyle-Mariotte : à quantité de gaz constante et température constante, pression et volume varient en sens inverse.",
        },
        {
          type: 'tableau',
          titre: 'Pressions respiratoires principales',
          colonnes: ['Pression', 'Définition', 'Valeur usuelle'],
          lignes: [
            ['Pression alvéolaire (Palv)', 'Pression à l’intérieur des alvéoles', 'Égale à la pression atmosphérique en fin d’inspiration et d’expiration (pas de flux)'],
            ['Pression pleurale (Ppl)', 'Pression dans l’espace pleural, entre plèvre viscérale et pariétale', 'Négative au repos, environ -5 cmH2O en fin d’expiration'],
            ['Pression transpulmonaire (Ptp)', 'Palv − Ppl', 'Toujours positive, maintient les alvéoles ouvertes'],
          ],
        },
        {
          type: 'formule',
          expression: 'Pression transpulmonaire = Pression alvéolaire − Pression pleurale',
          legende:
            "C’est cette pression, toujours positive au repos, qui s’oppose au collapsus du poumon et maintient les alvéoles distendues, contrairement à la tendance naturelle du poumon à se rétracter.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La pression pleurale devient plus négative à l’inspiration',
          texte:
            "L’expansion de la cage thoracique lors de l’inspiration rend la pression pleurale encore plus négative (environ -8 cmH2O), ce qui abaisse la pression alvéolaire en dessous de la pression atmosphérique et crée le gradient qui fait entrer l’air. À l’inverse, en expiration, la pression alvéolaire dépasse la pression atmosphérique, ce qui chasse l’air hors des poumons.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Pneumothorax',
          texte:
            "Si l’espace pleural communique avec l’atmosphère ou avec les alvéoles, la pression pleurale s’égalise avec la pression atmosphérique : la pression transpulmonaire s’annule et le poumon, du fait de son élasticité propre, se rétracte sur lui-même. C’est le mécanisme du pneumothorax.",
        },
      ],
    },
    {
      id: 'compliance',
      titre: 'Compliance pulmonaire et surfactant',
      blocs: [
        {
          type: 'definition',
          terme: 'Compliance pulmonaire',
          definition:
            "Variation de volume pulmonaire obtenue pour une variation donnée de pression transpulmonaire. Elle reflète la distensibilité du poumon : plus la compliance est élevée, plus le poumon se distend facilement pour une même variation de pression.",
        },
        {
          type: 'formule',
          expression: 'Compliance = ΔVolume / ΔPression',
          legende: 'Une compliance basse traduit un poumon rigide (fibrose) ; une compliance élevée traduit un poumon très distensible (emphysème).',
          unites: 'L/cmH2O',
        },
        {
          type: 'paragraphe',
          texte:
            "La compliance pulmonaire dépend de deux composantes : les propriétés élastiques du tissu pulmonaire lui-même (fibres d’élastine et de collagène) et la tension superficielle du film liquidien qui tapisse la surface interne des alvéoles.",
        },
        {
          type: 'definition',
          terme: 'Surfactant',
          definition:
            "Substance tensioactive sécrétée par les pneumocytes de type II, composée majoritairement de phospholipides (dipalmitoylphosphatidylcholine). Il réduit la tension superficielle du film liquidien alvéolaire, en particulier dans les petites alvéoles où la tension superficielle serait sinon la plus élevée selon la loi de Laplace.",
        },
        {
          type: 'formule',
          expression: 'Pression de collapsus alvéolaire = 2 × Tension superficielle / Rayon',
          legende:
            "Loi de Laplace appliquée à l’alvéole : à tension superficielle constante, plus le rayon alvéolaire est petit, plus la pression tendant à faire collaber l’alvéole est élevée. Le surfactant réduit davantage la tension superficielle dans les petites alvéoles, stabilisant ainsi des alvéoles de tailles différentes.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Maladie des membranes hyalines',
          texte:
            "Le surfactant n’est produit en quantité suffisante qu’à partir d’environ 34 à 36 semaines d’aménorrhée. Sa carence chez le prématuré entraîne une augmentation de la tension superficielle alvéolaire, une baisse de la compliance pulmonaire et un collapsus alvéolaire diffus : c’est la maladie des membranes hyalines, ou syndrome de détresse respiratoire néonatale.",
        },
      ],
    },
    {
      id: 'volumes-capacites',
      titre: 'Volumes et capacités pulmonaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les volumes pulmonaires mesurés en spirométrie décrivent les différentes subdivisions du volume d’air mobilisable ou résiduel dans les poumons. Une capacité est la somme de deux volumes ou plus.",
        },
        {
          type: 'tableau',
          titre: 'Volumes et capacités pulmonaires usuels (adulte)',
          colonnes: ['Volume ou capacité', 'Définition', 'Valeur usuelle approximative'],
          lignes: [
            ['Volume courant (VT)', 'Volume mobilisé lors d’un cycle respiratoire de repos', 'environ 500 mL'],
            ['Volume de réserve inspiratoire (VRI)', 'Volume supplémentaire inspirable après une inspiration calme', 'environ 3 000 mL'],
            ['Volume de réserve expiratoire (VRE)', 'Volume supplémentaire expirable après une expiration calme', 'environ 1 100 mL'],
            ['Volume résiduel (VR)', 'Volume restant dans les poumons après une expiration forcée maximale, non mesurable par spirométrie simple', 'environ 1 200 mL'],
            ['Capacité vitale (CV = VRI + VT + VRE)', 'Volume maximal mobilisable entre inspiration et expiration maximales', 'environ 4 600 mL'],
            ['Capacité résiduelle fonctionnelle (CRF = VRE + VR)', 'Volume pulmonaire en fin d’expiration calme', 'environ 2 300 mL'],
            ['Capacité pulmonaire totale (CPT = CV + VR)', 'Volume pulmonaire maximal après inspiration forcée', 'environ 5 800 mL'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le volume résiduel n’est pas mesurable par spirométrie simple',
          texte:
            "La spirométrie ne mesure que les variations de volume mobilisées par le sujet ; elle ne peut donc pas mesurer directement le volume résiduel ni les capacités qui l’incluent (CRF, CPT). Ces volumes nécessitent des méthodes indirectes : dilution à l’hélium, pléthysmographie corporelle, ou technique de rinçage à l’azote.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Fréquence respiratoire et ventilation-minute',
          texte:
            "Fréquence respiratoire de repos : environ 12 à 16 cycles/min. Ventilation-minute = volume courant × fréquence respiratoire, soit environ 6 à 8 L/min au repos (500 mL × 14/min).",
        },
      ],
    },
    {
      id: 'espace-mort-travail',
      titre: 'Espace mort et travail respiratoire',
      blocs: [
        {
          type: 'definition',
          terme: 'Espace mort anatomique',
          definition:
            "Volume des voies aériennes de conduction (nez, pharynx, larynx, trachée, bronches jusqu’aux bronchioles terminales) qui ne participe pas aux échanges gazeux, car dépourvu d’alvéoles. Il représente environ 150 mL chez l’adulte, soit environ 2 mL par kilogramme de poids corporel.",
        },
        {
          type: 'definition',
          terme: 'Espace mort physiologique',
          definition:
            "Somme de l’espace mort anatomique et de l’espace mort alvéolaire (alvéoles ventilées mais non ou mal perfusées, donc inefficaces pour les échanges gazeux). Chez le sujet sain, l’espace mort alvéolaire est négligeable et l’espace mort physiologique est proche de l’espace mort anatomique.",
        },
        {
          type: 'formule',
          expression: 'Ventilation alvéolaire = (Volume courant − Espace mort) × Fréquence respiratoire',
          legende:
            "Seule la ventilation alvéolaire participe effectivement aux échanges gazeux, à la différence de la ventilation-minute totale qui inclut la ventilation de l’espace mort.",
          unites: 'L/min',
        },
        {
          type: 'paragraphe',
          texte:
            "Le travail respiratoire correspond à l’énergie dépensée par les muscles respiratoires pour vaincre les forces qui s’opposent à la ventilation : forces élastiques (compliance du poumon et de la paroi thoracique) et forces résistives (résistance des voies aériennes à l’écoulement de l’air, résistances tissulaires).",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Optimiser le travail respiratoire',
          texte:
            "Une fréquence respiratoire rapide et superficielle augmente le travail résistif (frottements) ; une fréquence lente et profonde augmente le travail élastique (distension). La fréquence respiratoire spontanée se règle naturellement au point qui minimise le travail respiratoire total pour un niveau donné de ventilation alvéolaire.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le diaphragme est le principal muscle inspiratoire ; l’expiration de repos est passive.",
    "La pression transpulmonaire (pression alvéolaire moins pression pleurale) est toujours positive et maintient les alvéoles ouvertes.",
    "La pression pleurale devient plus négative à l’inspiration, ce qui abaisse la pression alvéolaire sous la pression atmosphérique et fait entrer l’air.",
    "La compliance pulmonaire mesure la distensibilité du poumon ; elle dépend de l’élasticité tissulaire et de la tension superficielle alvéolaire.",
    "Le surfactant, produit par les pneumocytes II, réduit la tension superficielle et stabilise les petites alvéoles (loi de Laplace).",
    "Le volume courant vaut environ 500 mL ; la capacité vitale environ 4 600 mL ; le volume résiduel n’est pas mesurable par spirométrie simple.",
    "L’espace mort anatomique, environ 150 mL, correspond aux voies de conduction dépourvues d’alvéoles.",
    "Seule la ventilation alvéolaire, et non la ventilation-minute totale, participe aux échanges gazeux effectifs.",
  ],
  erreursFrequentes: [
    "Croire que l’expiration de repos nécessite une contraction musculaire active : elle résulte du retour élastique passif du système thoraco-pulmonaire.",
    "Penser que la pression pleurale est positive au repos : elle est négative, ce qui permet à la pression transpulmonaire de rester positive et d’éviter le collapsus alvéolaire.",
    "Confondre compliance élevée et poumon rigide : une compliance élevée signifie au contraire un poumon très distensible (emphysème), une compliance basse un poumon rigide (fibrose).",
    "Oublier que le surfactant stabilise préférentiellement les petites alvéoles, qui auraient sinon la tension de collapsus la plus élevée selon la loi de Laplace.",
    "Confondre volume résiduel, mesurable seulement par méthode indirecte, avec les volumes mobilisables directement par spirométrie.",
    "Assimiler ventilation-minute et ventilation alvéolaire : la ventilation-minute inclut la ventilation inefficace de l’espace mort.",
  ],
  mnemotechniques: [
    {
      moyen: '« Ptp toujours positive, poumon toujours ouvert »',
      explication:
        'La pression transpulmonaire (Palv − Ppl) reste positive au repos, ce qui empêche le collapsus alvéolaire.',
    },
    {
      moyen: '« VT + VRI + VRE = CV, plus VR = CPT »',
      explication:
        'Reconstituer les capacités pulmonaires à partir des quatre volumes de base : capacité vitale, puis capacité pulmonaire totale en ajoutant le volume résiduel.',
    },
    {
      moyen: '« Surfactant = anti-Laplace des petites alvéoles »',
      explication:
        'Le surfactant réduit davantage la tension superficielle des petites alvéoles, contrant leur tendance à se collaber selon la loi de Laplace.',
    },
  ],
  sources: [
    'Guyton et Hall, Précis de physiologie médicale',
    'Silverthorn, Physiologie humaine, une approche intégrée',
    'Sherwood, Physiologie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'physio-mecanique-ventilatoire-fc-01',
      recto: 'Quel est le principal muscle inspiratoire ?',
      verso: 'Le diaphragme, actif dès la respiration de repos.',
      type: 'definition',
      tags: ['muscles respiratoires'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-02',
      recto: 'L’expiration de repos est-elle active ou passive ?',
      verso: 'Passive : elle résulte du retour élastique du poumon et de la cage thoracique, sans contraction musculaire active.',
      type: 'mecanisme',
      tags: ['expiration'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-03',
      recto: 'Comment calcule-t-on la pression transpulmonaire ?',
      verso: 'Pression transpulmonaire = pression alvéolaire − pression pleurale.',
      type: 'formule',
      tags: ['pressions'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-04',
      recto: 'Quelle est la valeur usuelle de la pression pleurale en fin d’expiration au repos ?',
      verso: 'Environ -5 cmH2O.',
      type: 'chiffre',
      tags: ['pression pleurale'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-05',
      recto: 'Que mesure la compliance pulmonaire ?',
      verso: 'La variation de volume pulmonaire obtenue pour une variation donnée de pression transpulmonaire, c’est-à-dire la distensibilité du poumon.',
      type: 'definition',
      tags: ['compliance'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-06',
      recto: 'Quelles cellules produisent le surfactant ?',
      verso: 'Les pneumocytes de type II.',
      type: 'definition',
      tags: ['surfactant'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-07',
      recto: 'Quel est le rôle du surfactant selon la loi de Laplace ?',
      verso: 'Il réduit la tension superficielle du film alvéolaire, en particulier dans les petites alvéoles, stabilisant ainsi des alvéoles de tailles différentes.',
      type: 'mecanisme',
      tags: ['surfactant', 'Laplace'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-08',
      recto: 'Quelle est la valeur usuelle du volume courant de repos ?',
      verso: 'Environ 500 mL.',
      type: 'chiffre',
      tags: ['volumes pulmonaires'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-09',
      recto: 'Comment définir la capacité résiduelle fonctionnelle ?',
      verso: 'CRF = volume de réserve expiratoire + volume résiduel : le volume pulmonaire présent en fin d’expiration calme.',
      type: 'formule',
      tags: ['capacités pulmonaires'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-10',
      recto: 'Pourquoi le volume résiduel n’est-il pas mesurable par spirométrie simple ?',
      verso: 'Parce que la spirométrie ne mesure que les volumes mobilisés par le sujet ; le volume résiduel reste dans le poumon même après expiration forcée maximale, et nécessite une méthode indirecte.',
      type: 'mecanisme',
      tags: ['volume résiduel'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-11',
      recto: 'Quelle est la valeur usuelle de l’espace mort anatomique ?',
      verso: 'Environ 150 mL chez l’adulte.',
      type: 'chiffre',
      tags: ['espace mort'],
    },
    {
      id: 'physio-mecanique-ventilatoire-fc-12',
      recto: 'Donner la formule de la ventilation alvéolaire.',
      verso: 'Ventilation alvéolaire = (volume courant − espace mort) × fréquence respiratoire.',
      type: 'formule',
      tags: ['ventilation alvéolaire'],
    },
  ],
  qcm: [
    {
      id: 'physio-mecanique-ventilatoire-qcm-01',
      enonce: "Concernant les muscles respiratoires, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le diaphragme est le principal muscle inspiratoire au repos.',
          vraie: true,
          justification: 'Exact : sa contraction abaisse la coupole diaphragmatique et augmente le volume thoracique, assurant à lui seul environ 75 % de la ventilation de repos.',
        },
        {
          lettre: 'B',
          texte: 'Les muscles abdominaux sont actifs lors de l’expiration de repos.',
          vraie: false,
          justification: "Faux : l’expiration de repos est passive ; les muscles abdominaux ne sont recrutés que lors d’une expiration forcée.",
        },
        {
          lettre: 'C',
          texte: 'Les intercostaux externes participent à l’inspiration.',
          vraie: true,
          justification: 'Exact : ils élèvent les côtes et augmentent le diamètre transversal du thorax.',
        },
        {
          lettre: 'D',
          texte: 'Les scalènes et sterno-cléido-mastoïdiens sont des muscles inspiratoires accessoires.',
          vraie: true,
          justification: "Exact, recrutés lors d’un effort ou d’une détresse respiratoire.",
        },
        {
          lettre: 'E',
          texte: 'L’expiration est toujours un phénomène actif, quel que soit le contexte.',
          vraie: false,
          justification: 'Faux : elle est passive au repos, active uniquement lors d’une expiration forcée.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. L’expiration de repos reste passive, contrairement à l’expiration forcée.',
      difficulte: 1,
    },
    {
      id: 'physio-mecanique-ventilatoire-qcm-02',
      enonce: "Concernant les pressions respiratoires, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La pression pleurale est positive au repos.',
          vraie: false,
          justification: 'Faux : elle est négative, environ -5 cmH2O en fin d’expiration calme.',
        },
        {
          lettre: 'B',
          texte: 'La pression transpulmonaire est toujours positive au repos.',
          vraie: true,
          justification: 'Exact : elle maintient les alvéoles distendues et s’oppose au collapsus pulmonaire.',
        },
        {
          lettre: 'C',
          texte: 'La pression pleurale devient plus négative lors de l’inspiration.',
          vraie: true,
          justification: 'Exact, ce qui abaisse la pression alvéolaire sous la pression atmosphérique et génère le flux entrant.',
        },
        {
          lettre: 'D',
          texte: "Dans un pneumothorax, la pression transpulmonaire s’annule.",
          vraie: true,
          justification: 'Exact, car la pression pleurale s’égalise avec la pression atmosphérique, ce qui entraîne le collapsus du poumon.',
        },
        {
          lettre: 'E',
          texte: "La pression alvéolaire est supérieure à la pression atmosphérique en fin d’inspiration, quand le flux s’arrête.",
          vraie: false,
          justification: "Faux : en l’absence de flux (fin d’inspiration ou d’expiration), la pression alvéolaire est égale à la pression atmosphérique.",
        },
      ],
      correction: 'Réponses exactes : B, C et D. La pression transpulmonaire positive garantit l’ouverture alvéolaire.',
      difficulte: 2,
    },
    {
      id: 'physio-mecanique-ventilatoire-qcm-03',
      enonce: "Concernant la compliance pulmonaire et le surfactant, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Une compliance basse traduit un poumon très distensible.',
          vraie: false,
          justification: 'Faux : une compliance basse traduit au contraire un poumon rigide, comme dans la fibrose pulmonaire.',
        },
        {
          lettre: 'B',
          texte: 'Le surfactant est produit par les pneumocytes de type II.',
          vraie: true,
          justification: 'Exact : les pneumocytes de type II synthétisent et sécrètent le surfactant, un mélange de phospholipides et de protéines qui tapisse la surface alvéolaire.',
        },
        {
          lettre: 'C',
          texte: 'Le surfactant augmente la tension superficielle alvéolaire.',
          vraie: false,
          justification: "Faux : il diminue la tension superficielle, facilitant l’ouverture des alvéoles.",
        },
        {
          lettre: 'D',
          texte: 'Selon la loi de Laplace, à tension superficielle égale, une petite alvéole tend à se collaber plus facilement qu’une grande.',
          vraie: true,
          justification: 'Exact : la pression de collapsus est inversement proportionnelle au rayon alvéolaire.',
        },
        {
          lettre: 'E',
          texte: 'La carence en surfactant chez le prématuré peut entraîner un collapsus alvéolaire diffus.',
          vraie: true,
          justification: 'Exact : c’est le mécanisme de la maladie des membranes hyalines.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Le surfactant abaisse la tension superficielle et stabilise préférentiellement les petites alvéoles.',
      difficulte: 2,
    },
    {
      id: 'physio-mecanique-ventilatoire-qcm-04',
      enonce: "Concernant les volumes et capacités pulmonaires, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le volume courant de repos vaut environ 500 mL.',
          vraie: true,
          justification: 'Exact : c’est le volume d’air mobilisé à chaque cycle lors d’une respiration calme, non forcée.',
        },
        {
          lettre: 'B',
          texte: 'La capacité vitale est la somme du volume de réserve inspiratoire, du volume courant et du volume de réserve expiratoire.',
          vraie: true,
          justification: 'Exact : CV = VRI + VT + VRE.',
        },
        {
          lettre: 'C',
          texte: 'Le volume résiduel peut être mesuré directement par spirométrie simple.',
          vraie: false,
          justification: "Faux : il nécessite une méthode indirecte comme la dilution à l’hélium ou la pléthysmographie.",
        },
        {
          lettre: 'D',
          texte: 'La capacité pulmonaire totale est la somme de la capacité vitale et du volume résiduel.',
          vraie: true,
          justification: 'Exact : CPT = CV + VR.',
        },
        {
          lettre: 'E',
          texte: 'La capacité résiduelle fonctionnelle correspond au volume pulmonaire mesuré en fin d’inspiration forcée.',
          vraie: false,
          justification: "Faux : elle correspond au volume pulmonaire en fin d’expiration calme, pas en fin d’inspiration forcée.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien distinguer les volumes mesurables directement de ceux nécessitant une méthode indirecte.',
      difficulte: 2,
    },
    {
      id: 'physio-mecanique-ventilatoire-qcm-05',
      enonce: "Concernant l’espace mort, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'L’espace mort anatomique correspond aux voies aériennes dépourvues d’alvéoles.',
          vraie: true,
          justification: 'Exact : nez, pharynx, larynx, trachée, bronches jusqu’aux bronchioles terminales.',
        },
        {
          lettre: 'B',
          texte: 'Sa valeur usuelle est d’environ 150 mL chez l’adulte.',
          vraie: true,
          justification: 'Exact, soit environ 2 mL par kilogramme de poids corporel.',
        },
        {
          lettre: 'C',
          texte: 'L’espace mort physiologique est toujours inférieur à l’espace mort anatomique.',
          vraie: false,
          justification: "Faux : l’espace mort physiologique est la somme de l’espace mort anatomique et de l’espace mort alvéolaire, il lui est donc toujours supérieur ou égal.",
        },
        {
          lettre: 'D',
          texte: 'La ventilation alvéolaire est toujours égale à la ventilation-minute.',
          vraie: false,
          justification: "Faux : la ventilation-minute inclut la ventilation de l’espace mort, inefficace pour les échanges gazeux.",
        },
        {
          lettre: 'E',
          texte: 'Chez le sujet sain, l’espace mort alvéolaire est négligeable.',
          vraie: true,
          justification: 'Exact : la quasi-totalité des alvéoles ventilées sont normalement perfusées chez le sujet sain.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. L’espace mort réduit l’efficacité de la ventilation-minute par rapport à la ventilation alvéolaire.',
      difficulte: 2,
    },
    {
      id: 'physio-mecanique-ventilatoire-qcm-06',
      enonce: "Concernant le travail respiratoire, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le travail respiratoire vise à vaincre des forces élastiques et des forces résistives.',
          vraie: true,
          justification: 'Exact : forces élastiques (compliance) et forces résistives (résistance des voies aériennes).',
        },
        {
          lettre: 'B',
          texte: 'Une fréquence respiratoire très rapide et superficielle minimise toujours le travail respiratoire.',
          vraie: false,
          justification: "Faux : une fréquence trop rapide augmente le travail résistif ; la fréquence spontanée optimise le compromis entre travail élastique et résistif.",
        },
        {
          lettre: 'C',
          texte: 'Une fibrose pulmonaire, qui diminue la compliance, augmente le travail élastique.',
          vraie: true,
          justification: 'Exact : un poumon plus rigide nécessite davantage d’énergie pour être distendu.',
        },
        {
          lettre: 'D',
          texte: 'La résistance des voies aériennes n’intervient pas dans le travail respiratoire.',
          vraie: false,
          justification: 'Faux : elle constitue la composante résistive du travail respiratoire.',
        },
        {
          lettre: 'E',
          texte: 'La fréquence respiratoire spontanée tend à minimiser le travail respiratoire total pour une ventilation alvéolaire donnée.',
          vraie: true,
          justification: 'Exact : c’est un principe d’économie énergétique du système ventilatoire.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le travail respiratoire résulte de l’équilibre entre composantes élastique et résistive.',
      difficulte: 2,
    },
  ],
};
