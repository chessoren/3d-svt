import type { Fiche } from '../../types';

export const ficheBioelectricite: Fiche = {
  id: 'ue3-bioelectricite',
  ue: 'ue3',
  titre: 'Bioélectricité et potentiels de membrane',
  sousTitre:
    "Équation de Nernst, équation de Goldman, potentiel de repos, potentiel d’action, conduction et électrocardiogramme",
  chapitre: 'Transports et bioélectricité',
  ordre: 5,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'équation de Nernst',
    'équation de Goldman',
    'potentiel de repos',
    'potentiel d’action',
    'canal ionique',
    'conduction saltatoire',
    'électrocardiogramme',
    'dépolarisation',
  ],
  objectifs: [
    "Calculer un potentiel d’équilibre ionique à l’aide de l’équation de Nernst.",
    "Expliquer la formation du potentiel de repos à l’aide de l’équation de Goldman-Hodgkin-Katz.",
    "Décrire les phases du potentiel d’action et les mouvements ioniques associés.",
    "Comparer conduction continue et conduction saltatoire le long d’un axone.",
    "Relier les notions de bioélectricité cellulaire à la genèse de l’électrocardiogramme.",
  ],
  sections: [
    {
      id: 'potentiel-membrane',
      titre: 'Origine du potentiel de membrane',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Toute cellule vivante présente une différence de potentiel électrique entre le milieu intracellulaire et le milieu extracellulaire, appelée potentiel de membrane. Elle résulte de l’inégale répartition des ions de part et d’autre de la membrane plasmique et de la perméabilité sélective de celle-ci à ces ions, maintenue notamment par la pompe Na+/K+-ATPase.",
        },
        {
          type: 'tableau',
          titre: 'Répartition ionique de part et d’autre de la membrane (neurone, valeurs approximatives)',
          colonnes: ['Ion', 'Concentration intracellulaire', 'Concentration extracellulaire'],
          lignes: [
            ['Potassium (K+)', 'environ 140 mmol/L', 'environ 4 mmol/L'],
            ['Sodium (Na+)', 'environ 10-15 mmol/L', 'environ 145 mmol/L'],
            ['Chlore (Cl-)', 'environ 5-10 mmol/L', 'environ 110 mmol/L'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Rôle de la pompe Na+/K+-ATPase',
          texte:
            "Cette pompe transporte activement, contre leur gradient de concentration, trois ions Na+ vers l’extérieur pour deux ions K+ vers l’intérieur de la cellule, à chaque cycle, au prix de l’hydrolyse d’une molécule d’ATP. Elle maintient les gradients de concentration à l’origine des potentiels d’équilibre ioniques, et sa stœchiométrie asymétrique contribue directement à la négativité du potentiel de repos.",
        },
      ],
    },
    {
      id: 'equation-nernst',
      titre: "L’équation de Nernst",
      blocs: [
        {
          type: 'definition',
          terme: 'Potentiel d’équilibre ionique',
          definition:
            "Valeur du potentiel de membrane pour laquelle le flux net d’un ion donné, à travers la membrane, est nul : le flux de diffusion selon le gradient de concentration est exactement compensé par le flux électrique de sens opposé.",
        },
        {
          type: 'formule',
          expression: 'E ion = (R x T) / (z x F) x ln ( [ion]extra / [ion]intra )',
          legende:
            "Équation de Nernst : E ion est le potentiel d’équilibre de l’ion considéré, R la constante des gaz parfaits, T la température absolue, z la valence (charge algébrique) de l’ion et F la constante de Faraday.",
          unites: 'E ion en volt (V), R = 8,314 J / (mol·K), T en kelvin, F = 96 500 C/mol',
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Forme simplifiée à 37 °C avec le logarithme décimal',
          texte:
            "À la température corporelle (37 °C, soit 310 K), pour un ion monovalent, le terme (R x T / F) x ln(10) vaut environ 61,5 mV. L’équation de Nernst s’écrit alors couramment E ion = 61,5/z x log10 ( [ion]extra / [ion]intra ), en millivolts.",
        },
        {
          type: 'tableau',
          titre: 'Potentiels d’équilibre approximatifs (neurone, 37 °C)',
          colonnes: ['Ion', 'Potentiel d’équilibre approximatif'],
          lignes: [
            ['Potassium (K+)', 'environ -90 mV'],
            ['Sodium (Na+)', 'environ +60 mV'],
            ['Chlore (Cl-)', 'environ -70 mV'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas oublier la valence dans l’équation de Nernst',
          texte:
            "Pour un ion divalent comme le calcium (Ca2+), il faut diviser par z = 2 dans l’équation de Nernst, ce qui réduit de moitié l’amplitude du potentiel d’équilibre par rapport à un ion monovalent de même rapport de concentrations.",
        },
      ],
    },
    {
      id: 'equation-goldman',
      titre: "L’équation de Goldman-Hodgkin-Katz et le potentiel de repos",
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le potentiel de membrane observé au repos n’est égal au potentiel d’équilibre d’aucun ion pris isolément, car la membrane est simultanément perméable à plusieurs ions. L’équation de Goldman-Hodgkin-Katz pondère la contribution de chaque ion par sa perméabilité relative.",
        },
        {
          type: 'formule',
          expression:
            'Vm = (R x T / F) x ln ( (P K x [K+]e + P Na x [Na+]e + P Cl x [Cl-]i) / (P K x [K+]i + P Na x [Na+]i + P Cl x [Cl-]e) )',
          legende:
            "Équation de Goldman-Hodgkin-Katz pour les trois ions K+, Na+ et Cl- : Vm est le potentiel de membrane, P K, P Na et P Cl les perméabilités relatives de la membrane à chaque ion. Les concentrations extracellulaires des cations et intracellulaire de l’anion figurent au numérateur (noté indices e et i pour extracellulaire et intracellulaire).",
          unites: 'Vm en volt (V), perméabilités P en m/s (leur rapport relatif suffit dans l’équation), concentrations en mol/L',
        },
        {
          type: 'liste',
          items: [
            "Au repos, la membrane neuronale est beaucoup plus perméable au potassium qu’au sodium : le potentiel de repos (environ -70 mV) est donc proche du potentiel d’équilibre du potassium, sans lui être strictement égal.",
            "Si la perméabilité au sodium devient prépondérante, par exemple lors de l’ouverture des canaux sodiques voltage-dépendants, le potentiel de membrane se rapproche du potentiel d’équilibre du sodium.",
            "Contrairement à l’équation de Nernst, valable pour un seul ion à l’équilibre, l’équation de Goldman s’applique à une membrane perméable à plusieurs ions simultanément, en régime stationnaire (et non nécessairement à l’équilibre pour chaque ion pris séparément).",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Potentiel de repos usuel',
          texte:
            "Le potentiel de repos de la membrane d’un neurone se situe classiquement entre -70 et -90 mV, celui d’une cellule musculaire cardiaque autour de -80 à -90 mV.",
        },
      ],
    },
    {
      id: 'potentiel-action',
      titre: "Le potentiel d’action",
      blocs: [
        {
          type: 'definition',
          terme: 'Potentiel d’action',
          definition:
            "Variation brève, rapide et stéréotypée du potentiel de membrane, déclenchée lorsque celui-ci atteint un seuil de dépolarisation, et qui se propage le long de la membrane excitable sans atténuation d’amplitude.",
        },
        {
          type: 'etapes',
          titre: 'Les phases du potentiel d’action neuronal',
          etapes: [
            {
              titre: 'Dépolarisation',
              detail:
                "Ouverture des canaux sodiques voltage-dépendants une fois le seuil atteint : entrée massive de Na+ selon son gradient électrochimique, le potentiel de membrane se rapproche du potentiel d’équilibre du sodium.",
            },
            {
              titre: 'Repolarisation',
              detail:
                "Inactivation des canaux sodiques et ouverture retardée des canaux potassiques voltage-dépendants : sortie de K+ qui ramène le potentiel de membrane vers des valeurs négatives.",
            },
            {
              titre: 'Hyperpolarisation post-potentiel',
              detail:
                "La fermeture retardée des canaux potassiques fait transitoirement dépasser le potentiel de repos vers des valeurs plus négatives, avant retour à l’état basal.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Loi du tout ou rien',
          texte:
            "Une fois le seuil de dépolarisation atteint, le potentiel d’action se déclenche avec une amplitude et une forme fixes, indépendantes de l’intensité du stimulus déclencheur : c’est la loi du tout ou rien. L’information sur l’intensité du stimulus est codée par la fréquence des potentiels d’action, non par leur amplitude.",
        },
        {
          type: 'definition',
          terme: 'Période réfractaire',
          definition:
            "Intervalle de temps suivant un potentiel d’action pendant lequel la membrane est incapable (période réfractaire absolue, canaux sodiques inactivés) ou plus difficilement capable (période réfractaire relative) de déclencher un nouveau potentiel d’action. Elle garantit la propagation unidirectionnelle du potentiel d’action et limite la fréquence maximale de décharge.",
        },
      ],
    },
    {
      id: 'conduction',
      titre: 'Propagation du potentiel d’action',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Conduction continue et conduction saltatoire',
          gauche: {
            titre: 'Conduction continue (fibre amyélinique)',
            points: [
              'Propagation de proche en proche le long de toute la membrane axonale',
              'Vitesse de conduction relativement lente',
              'Consommation énergétique élevée (pompe Na+/K+-ATPase sollicitée sur toute la longueur)',
            ],
          },
          droite: {
            titre: 'Conduction saltatoire (fibre myélinisée)',
            points: [
              'Le potentiel d’action « saute » d’un nœud de Ranvier au suivant',
              'Vitesse de conduction nettement plus rapide',
              'Consommation énergétique moindre, canaux sodiques concentrés aux nœuds de Ranvier',
            ],
          },
        },
        {
          type: 'paragraphe',
          texte:
            "La gaine de myéline, produite par les oligodendrocytes dans le système nerveux central et les cellules de Schwann dans le système nerveux périphérique, isole électriquement l’axone entre deux nœuds de Ranvier. Le courant électrique généré à un nœud se propage passivement, avec peu de perte, jusqu’au nœud suivant où il régénère un nouveau potentiel d’action.",
        },
        {
          type: 'liste',
          items: [
            "La vitesse de conduction augmente avec le diamètre de l’axone, qui réduit la résistance interne au passage du courant.",
            "La vitesse de conduction augmente également avec la myélinisation, en réduisant les fuites de courant à travers la membrane internodale.",
            "La démyélinisation, comme dans la sclérose en plaques, ralentit voire bloque la conduction saltatoire.",
          ],
        },
      ],
    },
    {
      id: 'electrocardiogramme',
      titre: 'Application : l’électrocardiogramme',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’électrocardiogramme (ECG) enregistre, à la surface du corps, la résultante des activités électriques de l’ensemble des cellules myocardiques, dont la dépolarisation et la repolarisation successives génèrent un champ électrique détectable à distance grâce à des électrodes cutanées.",
        },
        {
          type: 'tableau',
          titre: 'Correspondance entre événements électriques cardiaques et tracé ECG',
          colonnes: ['Onde ou segment ECG', 'Phénomène électrique cardiaque correspondant'],
          lignes: [
            ['Onde P', 'Dépolarisation des oreillettes'],
            ['Complexe QRS', 'Dépolarisation des ventricules (masque la repolarisation auriculaire)'],
            ['Onde T', 'Repolarisation des ventricules'],
            ['Segment ST', 'Phase de plateau du potentiel d’action ventriculaire (dépolarisation complète)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Spécificité du potentiel d’action cardiaque',
          texte:
            "Contrairement au potentiel d’action neuronal, le potentiel d’action des cellules myocardiques ventriculaires présente un plateau prolongé, dû à un courant entrant de calcium par des canaux calciques voltage-dépendants qui s’oppose transitoirement à la repolarisation. Ce plateau explique la durée bien plus longue du potentiel d’action cardiaque (environ 200 à 300 ms) comparée au potentiel d’action neuronal (environ 1 à 2 ms).",
        },
      ],
    },
  ],
  pointsCles: [
    "Le potentiel de membrane résulte de l’inégale répartition des ions et de la perméabilité sélective de la membrane, entretenue par la pompe Na+/K+-ATPase.",
    "L’équation de Nernst donne le potentiel d’équilibre d’un ion unique : E ion = (R x T)/(z x F) x ln([ion]extra/[ion]intra).",
    "L’équation de Goldman-Hodgkin-Katz pondère plusieurs ions par leur perméabilité relative pour donner le potentiel de membrane réel.",
    "Le potentiel de repos neuronal, environ -70 mV, est dominé par la perméabilité au potassium.",
    "Le potentiel d’action suit la loi du tout ou rien et comprend dépolarisation, repolarisation et éventuelle hyperpolarisation.",
    "La conduction saltatoire, le long des fibres myélinisées, est plus rapide et moins coûteuse en énergie que la conduction continue.",
    "L’électrocardiogramme traduit à la surface du corps la somme des dépolarisations et repolarisations myocardiques (onde P, complexe QRS, onde T).",
  ],
  erreursFrequentes: [
    "Oublier la valence z de l’ion dans l’équation de Nernst, en particulier pour les ions divalents comme le calcium.",
    "Confondre potentiel d’équilibre d’un ion (Nernst, un seul ion) et potentiel de membrane réel (Goldman, plusieurs ions pondérés).",
    "Croire que le potentiel de repos est strictement égal au potentiel d’équilibre du potassium, alors qu’il en est seulement proche du fait de la perméabilité résiduelle au sodium.",
    "Penser que l’amplitude du potentiel d’action varie avec l’intensité du stimulus : c’est la fréquence de décharge qui code l’intensité, pas l’amplitude (loi du tout ou rien).",
    "Inverser les rôles du sodium et du potassium dans les phases de dépolarisation et de repolarisation.",
    "Oublier le plateau calcique caractéristique du potentiel d’action cardiaque, qui le distingue nettement du potentiel d’action neuronal.",
  ],
  mnemotechniques: [
    {
      moyen: '« Nernst : un ion, un équilibre »',
      explication:
        "Rappelle que l’équation de Nernst calcule le potentiel d’équilibre d’un seul ion, contrairement à l’équation de Goldman qui pondère plusieurs ions.",
    },
    {
      moyen: '« Na entre, K sort »',
      explication:
        "Résume les mouvements ioniques du potentiel d’action : le sodium entre lors de la dépolarisation, le potassium sort lors de la repolarisation.",
    },
    {
      moyen: 'PQRST : « Petit oreillette, Grand ventricule, repos »',
      explication:
        "L’onde P correspond à la petite dépolarisation auriculaire, le complexe QRS à la grande dépolarisation ventriculaire, l’onde T à la repolarisation ventriculaire.",
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
      id: 'ue3-bioelectricite-fc-01',
      recto: 'Écrire l’équation de Nernst.',
      verso: 'E ion = (R x T) / (z x F) x ln ( [ion]extra / [ion]intra ).',
      type: 'formule',
      tags: ['Nernst'],
    },
    {
      id: 'ue3-bioelectricite-fc-02',
      recto: 'Que représente le potentiel d’équilibre d’un ion ?',
      verso: 'La valeur du potentiel de membrane pour laquelle le flux net de cet ion à travers la membrane est nul.',
      type: 'definition',
      tags: ['potentiel d’équilibre'],
    },
    {
      id: 'ue3-bioelectricite-fc-03',
      recto: 'Quelle est la valeur approximative du potentiel d’équilibre du potassium dans un neurone ?',
      verso: 'Environ -90 mV.',
      type: 'chiffre',
      tags: ['Nernst', 'potassium'],
    },
    {
      id: 'ue3-bioelectricite-fc-04',
      recto: 'À quoi sert l’équation de Goldman-Hodgkin-Katz ?',
      verso: 'À calculer le potentiel de membrane réel lorsque la membrane est perméable simultanément à plusieurs ions, en pondérant chacun par sa perméabilité relative.',
      type: 'definition',
      tags: ['Goldman'],
    },
    {
      id: 'ue3-bioelectricite-fc-05',
      recto: 'Pourquoi le potentiel de repos est-il proche du potentiel d’équilibre du potassium ?',
      verso: 'Parce qu’au repos, la membrane neuronale est beaucoup plus perméable au potassium qu’aux autres ions.',
      type: 'mecanisme',
      tags: ['potentiel de repos'],
    },
    {
      id: 'ue3-bioelectricite-fc-06',
      recto: 'Quel mouvement ionique déclenche la dépolarisation du potentiel d’action ?',
      verso: 'Une entrée massive de sodium (Na+) par les canaux sodiques voltage-dépendants qui s’ouvrent.',
      type: 'mecanisme',
      tags: ['potentiel d’action'],
    },
    {
      id: 'ue3-bioelectricite-fc-07',
      recto: 'Que signifie la loi du tout ou rien pour le potentiel d’action ?',
      verso: 'Une fois le seuil atteint, le potentiel d’action a une amplitude fixe, indépendante de l’intensité du stimulus ; c’est la fréquence des potentiels d’action qui code l’intensité.',
      type: 'definition',
      tags: ['potentiel d’action'],
    },
    {
      id: 'ue3-bioelectricite-fc-08',
      recto: 'Qu’est-ce que la conduction saltatoire ?',
      verso: 'Propagation du potentiel d’action qui « saute » d’un nœud de Ranvier au suivant le long d’une fibre myélinisée, plus rapide et moins coûteuse en énergie que la conduction continue.',
      type: 'definition',
      tags: ['conduction saltatoire'],
    },
    {
      id: 'ue3-bioelectricite-fc-09',
      recto: 'Quels facteurs augmentent la vitesse de conduction d’un axone ?',
      verso: 'Un diamètre axonal plus grand et la présence d’une gaine de myéline (conduction saltatoire).',
      type: 'mecanisme',
      tags: ['conduction nerveuse'],
    },
    {
      id: 'ue3-bioelectricite-fc-10',
      recto: 'Que représente le complexe QRS sur l’électrocardiogramme ?',
      verso: 'La dépolarisation des ventricules.',
      type: 'definition',
      tags: ['électrocardiogramme'],
    },
    {
      id: 'ue3-bioelectricite-fc-11',
      recto: 'Que représente l’onde T sur l’électrocardiogramme ?',
      verso: 'La repolarisation des ventricules.',
      type: 'definition',
      tags: ['électrocardiogramme'],
    },
    {
      id: 'ue3-bioelectricite-fc-12',
      recto: 'Qu’est-ce qui distingue le potentiel d’action cardiaque du potentiel d’action neuronal ?',
      verso: 'Un plateau prolongé (environ 200 à 300 ms) lié à un courant entrant de calcium, absent du potentiel d’action neuronal beaucoup plus bref (1 à 2 ms).',
      type: 'clinique',
      tags: ['potentiel d’action cardiaque'],
    },
  ],
  qcm: [
    {
      id: 'ue3-bioelectricite-qcm-01',
      enonce: 'Concernant l’origine du potentiel de membrane, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le potassium est plus concentré à l’intérieur qu’à l’extérieur de la cellule.',
          vraie: true,
          justification: 'Exact, environ 140 mmol/L en intracellulaire contre 4 mmol/L en extracellulaire.',
        },
        {
          lettre: 'B',
          texte: 'Le sodium est plus concentré à l’intérieur qu’à l’extérieur de la cellule.',
          vraie: false,
          justification: 'C’est l’inverse : le sodium est nettement plus concentré en extracellulaire (environ 145 mmol/L) qu’en intracellulaire.',
        },
        {
          lettre: 'C',
          texte: 'La pompe Na+/K+-ATPase transporte trois Na+ vers l’extérieur pour deux K+ vers l’intérieur, à chaque cycle.',
          vraie: true,
          justification: 'Exact, cette stœchiométrie asymétrique contribue à la négativité du potentiel de repos.',
        },
        {
          lettre: 'D',
          texte: 'La pompe Na+/K+-ATPase fonctionne sans consommation d’ATP.',
          vraie: false,
          justification: "Elle hydrolyse directement l’ATP : c’est un transport actif primaire.",
        },
        {
          lettre: 'E',
          texte: 'Les gradients ioniques transmembranaires sont indispensables à l’existence d’un potentiel de membrane.',
          vraie: true,
          justification: "Exact, sans gradients de concentration, aucun potentiel électrique ne pourrait s’établir à travers une membrane perméable.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-bioelectricite-qcm-02',
      enonce: 'Concernant l’équation de Nernst, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle permet de calculer le potentiel de membrane réel d’une cellule perméable à plusieurs ions.',
          vraie: false,
          justification: "C’est le rôle de l’équation de Goldman ; Nernst calcule le potentiel d’équilibre d’un seul ion.",
        },
        {
          lettre: 'B',
          texte: 'Elle fait intervenir la valence de l’ion considéré.',
          vraie: true,
          justification: 'Exact : E ion = (R x T)/(z x F) x ln(…), z étant la valence.',
        },
        {
          lettre: 'C',
          texte: 'Pour un ion divalent, l’amplitude du potentiel d’équilibre calculé est réduite de moitié par rapport à un ion monovalent de même rapport de concentrations.',
          vraie: true,
          justification: 'Exact, en raison de la division par z = 2 dans la formule.',
        },
        {
          lettre: 'D',
          texte: 'Elle nécessite d’utiliser la température en degrés Celsius.',
          vraie: false,
          justification: 'Comme toute loi faisant intervenir R, la température doit être exprimée en kelvin.',
        },
        {
          lettre: 'E',
          texte: 'Le potentiel d’équilibre du sodium est positif dans un neurone au repos.',
          vraie: true,
          justification: 'Exact, environ +60 mV, en raison de sa concentration extracellulaire nettement plus élevée.',
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-bioelectricite-qcm-03',
      enonce: 'Concernant le potentiel de repos et l’équation de Goldman-Hodgkin-Katz, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le potentiel de repos est strictement égal au potentiel d’équilibre du potassium.',
          vraie: false,
          justification: "Il en est proche, mais pas strictement égal, du fait de la perméabilité résiduelle non nulle au sodium.",
        },
        {
          lettre: 'B',
          texte: 'La membrane au repos est plus perméable au potassium qu’au sodium.',
          vraie: true,
          justification: "Exact, ce qui explique que le potentiel de repos soit proche du potentiel d’équilibre du potassium.",
        },
        {
          lettre: 'C',
          texte: 'L’équation de Goldman pondère chaque ion par sa perméabilité relative.',
          vraie: true,
          justification: 'Exact, c’est le principe fondamental de cette équation.',
        },
        {
          lettre: 'D',
          texte: 'Le potentiel de repos neuronal usuel se situe autour de +40 mV.',
          vraie: false,
          justification: 'Il se situe classiquement entre -70 et -90 mV, une valeur négative.',
        },
        {
          lettre: 'E',
          texte: 'Une augmentation de la perméabilité au sodium rapproche le potentiel de membrane du potentiel d’équilibre du sodium.',
          vraie: true,
          justification: "Exact, c’est ce qui se produit lors de la dépolarisation du potentiel d’action.",
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-bioelectricite-qcm-04',
      enonce: 'Concernant le potentiel d’action, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La dépolarisation est due à une entrée de sodium.',
          vraie: true,
          justification: "Exact, par ouverture des canaux sodiques voltage-dépendants.",
        },
        {
          lettre: 'B',
          texte: 'La repolarisation est due à une entrée de potassium.',
          vraie: false,
          justification: "La repolarisation est due à une sortie de potassium, qui ramène le potentiel de membrane vers des valeurs négatives.",
        },
        {
          lettre: 'C',
          texte: 'L’amplitude du potentiel d’action dépend de l’intensité du stimulus déclencheur.',
          vraie: false,
          justification: "Faux, c’est la loi du tout ou rien : l’amplitude est fixe une fois le seuil atteint.",
        },
        {
          lettre: 'D',
          texte: 'La période réfractaire absolue empêche le déclenchement d’un nouveau potentiel d’action.',
          vraie: true,
          justification: "Exact, en raison de l’inactivation des canaux sodiques voltage-dépendants pendant cette période.",
        },
        {
          lettre: 'E',
          texte: 'La période réfractaire contribue à la propagation unidirectionnelle du potentiel d’action.',
          vraie: true,
          justification: "Exact, elle empêche la réactivation de la zone de membrane qui vient de se dépolariser.",
        },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-bioelectricite-qcm-05',
      enonce: 'Concernant la conduction du potentiel d’action, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La conduction saltatoire concerne les fibres myélinisées.',
          vraie: true,
          justification: 'Exact, le potentiel d’action « saute » d’un nœud de Ranvier au suivant.',
        },
        {
          lettre: 'B',
          texte: 'La conduction saltatoire est plus lente que la conduction continue.',
          vraie: false,
          justification: 'Elle est au contraire plus rapide, car le courant se propage passivement et rapidement entre les nœuds de Ranvier.',
        },
        {
          lettre: 'C',
          texte: 'Un diamètre axonal plus grand augmente la vitesse de conduction.',
          vraie: true,
          justification: "Exact, en réduisant la résistance interne au passage du courant.",
        },
        {
          lettre: 'D',
          texte: 'La démyélinisation ralentit la conduction saltatoire.',
          vraie: true,
          justification: "Exact, comme dans la sclérose en plaques, où la perte de myéline compromet l’isolation électrique internodale.",
        },
        {
          lettre: 'E',
          texte: 'La conduction continue consomme moins d’énergie que la conduction saltatoire.',
          vraie: false,
          justification: 'C’est l’inverse : la conduction continue est plus coûteuse en énergie car la pompe Na+/K+-ATPase est sollicitée sur toute la longueur de la fibre.',
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-bioelectricite-qcm-06',
      enonce: 'Concernant l’électrocardiogramme, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’onde P correspond à la dépolarisation des oreillettes.',
          vraie: true,
          justification: 'Exact : l’onde P de l’ECG traduit la dépolarisation des oreillettes, qui précède leur contraction.',
        },
        {
          lettre: 'B',
          texte: 'Le complexe QRS correspond à la repolarisation des ventricules.',
          vraie: false,
          justification: "Le complexe QRS correspond à la dépolarisation des ventricules ; l’onde T correspond à leur repolarisation.",
        },
        {
          lettre: 'C',
          texte: 'Le potentiel d’action cardiaque ventriculaire présente un plateau lié à un courant calcique entrant.',
          vraie: true,
          justification: "Exact, ce plateau explique la durée prolongée (200 à 300 ms) du potentiel d’action cardiaque.",
        },
        {
          lettre: 'D',
          texte: 'La durée du potentiel d’action cardiaque est comparable à celle du potentiel d’action neuronal.',
          vraie: false,
          justification: "Elle est bien plus longue (200 à 300 ms contre 1 à 2 ms), en raison du plateau calcique.",
        },
        {
          lettre: 'E',
          texte: 'L’ECG enregistre la résultante électrique de l’activité de l’ensemble des cellules myocardiques.',
          vraie: true,
          justification: "Exact, c’est le principe même de cet enregistrement de surface.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
