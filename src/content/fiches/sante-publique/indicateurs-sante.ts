import type { Fiche } from '../../types';

export const ficheIndicateursSante: Fiche = {
  id: 'sante-publique-indicateurs-sante',
  ue: 'sante-publique',
  titre: 'Indicateurs de santé',
  sousTitre: "Prévalence, incidence, taux de mortalité, espérance de vie et sources de données",
  chapitre: 'Concepts et indicateurs',
  ordre: 2,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'prévalence',
    'incidence',
    'taux standardisé',
    'mortalité',
    'létalité',
    'espérance de vie',
    'années de vie perdues',
    'indicateur composite',
  ],
  objectifs: [
    'Définir et différencier prévalence et incidence.',
    'Distinguer taux brut et taux standardisé et connaître le principe de la standardisation.',
    'Différencier taux de mortalité et taux de létalité.',
    "Connaître les indicateurs synthétiques d’état de santé : espérance de vie, années de vie perdues, indicateurs composites.",
    'Citer les principales sources de données utilisées en santé publique.',
  ],
  sections: [
    {
      id: 'prevalence-incidence',
      titre: 'Prévalence et incidence',
      blocs: [
        {
          type: 'definition',
          terme: 'Prévalence',
          definition:
            "Proportion de sujets atteints d’une maladie (ou porteurs d’un état de santé donné) dans une population à un instant donné (prévalence instantanée) ou sur une période donnée (prévalence de période). Elle rapporte le nombre de cas existants à l’effectif de la population étudiée.",
        },
        {
          type: 'definition',
          terme: 'Incidence',
          definition:
            "Nombre de nouveaux cas d’une maladie survenant dans une population donnée pendant une période déterminée, rapporté à la population à risque (ou au nombre de personnes-années). Elle mesure la vitesse d’apparition de la maladie, c’est-à-dire le risque de la développer.",
        },
        {
          type: 'formule',
          expression: 'Prévalence = Nombre de cas existants / Effectif de la population étudiée, à un instant donné',
          legende: "Indicateur sans dimension temporelle propre : c’est une photographie à un moment donné.",
        },
        {
          type: 'formule',
          expression: 'Incidence cumulée = Nombre de nouveaux cas / Effectif de la population à risque en début de période',
          legende: "Mesure le risque de survenue de la maladie sur une période définie, dans une population indemne au départ.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison prévalence et incidence',
          colonnes: ['Caractéristique', 'Prévalence', 'Incidence'],
          lignes: [
            ['Numérateur', 'Cas existants (anciens et nouveaux)', 'Nouveaux cas uniquement'],
            ['Population au dénominateur', "Population totale (malades ou non)", "Population à risque, indemne en début de période"],
            ['Ce qu’elle mesure', 'État de la maladie à un instant T', "Vitesse d’apparition de la maladie"],
            ['Utilité principale', 'Planification des besoins de soins et de ressources', "Recherche de facteurs de risque, étude étiologique"],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Relation entre prévalence et incidence',
          texte:
            "Pour une maladie chronique et stable dans le temps, on a approximativement : Prévalence ≈ Incidence × durée moyenne de la maladie. Une maladie de courte durée (guérison rapide ou décès rapide) peut donc avoir une forte incidence mais une prévalence faible, et inversement pour une maladie chronique de longue durée.",
        },
      ],
    },
    {
      id: 'taux-standardises',
      titre: 'Taux bruts et taux standardisés',
      blocs: [
        {
          type: 'definition',
          terme: 'Taux brut',
          definition:
            "Rapport entre le nombre d’événements observés (décès, cas) et l’effectif total de la population concernée, sans tenir compte de sa structure (âge, sexe).",
        },
        {
          type: 'paragraphe',
          texte:
            "Le taux brut ne permet pas de comparer valablement deux populations dont la structure par âge diffère, car l’âge est un déterminant majeur de la mortalité et de la morbidité. Une population âgée aura un taux brut de mortalité plus élevé qu’une population jeune, même si le risque de décès à âge égal y est identique.",
        },
        {
          type: 'definition',
          terme: 'Taux standardisé (ou ajusté)',
          definition:
            "Taux théorique obtenu en appliquant les taux spécifiques par âge (ou par une autre variable de confusion) observés dans la population étudiée à une population de référence commune, dite population type. Il permet de comparer deux populations en neutralisant l’effet de leur structure par âge.",
        },
        {
          type: 'etapes',
          titre: 'Méthode de standardisation directe',
          etapes: [
            {
              titre: "Calculer les taux spécifiques par tranche d’âge",
              detail: "Dans chaque population à comparer, calculer le taux d’événement observé dans chaque tranche d’âge.",
            },
            {
              titre: 'Choisir une population de référence',
              detail: "Sélectionner une population type (par exemple une population mondiale ou nationale de référence) dont la structure par âge servira de référence commune.",
            },
            {
              titre: 'Appliquer les taux spécifiques à la population type',
              detail: "Appliquer, pour chaque population étudiée, ses taux spécifiques par âge aux effectifs de la population type, puis sommer pour obtenir le nombre attendu d’événements.",
            },
            {
              titre: 'Calculer le taux standardisé',
              detail: "Diviser le nombre attendu d’événements par l’effectif total de la population type : le résultat est comparable entre les populations étudiées.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Retenir l’essentiel',
          texte:
            "La standardisation neutralise l’effet d’une variable de confusion connue (le plus souvent l’âge) pour permettre une comparaison valide entre deux populations ou entre deux périodes.",
        },
      ],
    },
    {
      id: 'mortalite-letalite',
      titre: 'Mortalité et létalité',
      blocs: [
        {
          type: 'definition',
          terme: 'Taux de mortalité',
          definition:
            "Nombre de décès survenus dans une population pendant une période donnée, rapporté à l’effectif de cette population pendant la même période. Il peut être global (toutes causes) ou spécifique (une cause donnée, une tranche d’âge donnée).",
        },
        {
          type: 'definition',
          terme: 'Taux de létalité',
          definition:
            "Proportion de décès parmi les sujets atteints d’une maladie donnée, sur une période déterminée. Il rapporte le nombre de décès dus à la maladie au nombre de personnes atteintes par cette maladie, et non à la population générale.",
        },
        {
          type: 'tableau',
          titre: 'Différence entre mortalité et létalité',
          colonnes: ['Indicateur', 'Numérateur', 'Dénominateur'],
          lignes: [
            ['Taux de mortalité (spécifique à une cause)', 'Décès dus à la maladie', 'Population totale exposée au risque'],
            ['Taux de létalité', 'Décès dus à la maladie', 'Nombre de malades atteints de cette maladie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Piège fréquent : mortalité versus létalité',
          texte:
            "Une maladie peut avoir une létalité élevée (dangereuse pour qui la contracte) mais une mortalité faible dans la population si son incidence est basse (maladie rare). Inversement, une maladie fréquente mais peu létale peut représenter un poids important en mortalité de population.",
        },
        {
          type: 'formule',
          expression: 'Mortalité proportionnelle = Décès par une cause donnée / Total des décès, toutes causes confondues',
          legende: "Indicateur utile pour hiérarchiser les causes de décès, mais qui dépend du niveau global de mortalité de la population.",
        },
      ],
    },
    {
      id: 'esperance-vie-avp',
      titre: "Espérance de vie et années de vie perdues",
      blocs: [
        {
          type: 'definition',
          terme: 'Espérance de vie à la naissance',
          definition:
            "Durée de vie moyenne qu’aurait un individu né une année donnée s’il était soumis, tout au long de sa vie, aux conditions de mortalité par âge observées cette année-là. C’est un indicateur synthétique construit à partir d’une table de mortalité, et non une prédiction individuelle.",
        },
        {
          type: 'definition',
          terme: 'Espérance de vie en bonne santé (ou sans incapacité)',
          definition:
            "Nombre moyen d’années qu’un individu peut espérer vivre sans incapacité ou limitation d’activité, compte tenu des conditions de mortalité et de morbidité observées. Elle complète l’espérance de vie en y intégrant une dimension qualitative.",
        },
        {
          type: 'definition',
          terme: 'Années de vie perdues (AVP)',
          definition:
            "Nombre d’années de vie qu’un décès prématuré fait perdre par rapport à un âge de référence (par exemple l’espérance de vie attendue). Cet indicateur donne un poids plus important aux décès survenant à un âge jeune qu’à ceux survenant à un âge avancé, contrairement au simple compte des décès.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: "Années de vie ajustées sur l’incapacité (AVAI ou DALY)",
          texte:
            "Les Disability-Adjusted Life Years (DALY), ou années de vie ajustées sur l’incapacité (AVAI), combinent les années de vie perdues par mortalité prématurée et les années vécues avec une incapacité, pondérées par la sévérité de celle-ci. C’est un indicateur composite de charge de morbidité utilisé notamment par l’OMS pour comparer le poids de différentes pathologies.",
        },
        {
          type: 'tableau',
          titre: 'Indicateurs synthétiques d’état de santé',
          colonnes: ['Indicateur', 'Ce qu’il mesure'],
          lignes: [
            ['Espérance de vie à la naissance', 'Durée de vie moyenne théorique compte tenu de la mortalité par âge'],
            ['Espérance de vie en bonne santé', 'Durée de vie théorique sans incapacité'],
            ['Années de vie perdues', 'Impact des décès prématurés, pondéré par l’âge du décès'],
            ['DALY (AVAI)', 'Somme des années perdues par mortalité prématurée et par incapacité'],
          ],
        },
      ],
    },
    {
      id: 'indicateurs-composites-sources',
      titre: 'Indicateurs composites et sources de données',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un indicateur composite (ou synthétique) combine plusieurs dimensions en une seule mesure, afin de rendre compte d’un phénomène complexe et multidimensionnel, au prix d’une perte d’information sur chacune des composantes.",
        },
        {
          type: 'liste',
          items: [
            "L’indice de développement humain (IDH), construit par le Programme des Nations unies pour le développement, combine espérance de vie, niveau d’éducation et revenu national.",
            "Les DALY combinent mortalité prématurée et morbidité liée à l’incapacité.",
            "Ces indicateurs facilitent les comparaisons internationales mais peuvent masquer des disparités internes importantes (inégalités sociales, régionales).",
          ],
        },
        {
          type: 'tableau',
          titre: 'Principales sources de données en santé publique',
          colonnes: ['Source', 'Type de données'],
          lignes: [
            ['Certificats de décès (état civil, CépiDc)', 'Cause médicale de décès, mortalité par cause'],
            ['Systèmes de déclaration obligatoire', 'Maladies à déclaration obligatoire (surveillance des maladies transmissibles)'],
            ['Recensements de population (INSEE)', 'Structure démographique de la population'],
            ['Enquêtes déclaratives en population générale', 'Comportements de santé, prévalence de symptômes ou de maladies déclarées'],
            ['Bases médico-administratives (assurance maladie, PMSI)', 'Recours aux soins, hospitalisations, consommation de soins'],
            ['Registres de morbidité (cancers par exemple)', 'Incidence et caractéristiques précises d’une pathologie dans une zone géographique définie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordre de grandeur à retenir sans chiffre précis',
          texte:
            "Les statistiques de santé publique (taux de mortalité, espérance de vie) évoluent chaque année : il est préférable de retenir les définitions et méthodes de calcul plutôt que des valeurs numériques précises, rapidement obsolètes.",
        },
      ],
    },
  ],
  pointsCles: [
    "La prévalence mesure l’état de la maladie à un instant donné ; l’incidence mesure la vitesse d’apparition de nouveaux cas.",
    "Pour une maladie chronique stable, prévalence est approximativement égale au produit de l’incidence par la durée moyenne de la maladie.",
    "Le taux brut ne tient pas compte de la structure de la population ; le taux standardisé neutralise l’effet d’une variable de confusion comme l’âge.",
    "Le taux de mortalité rapporte les décès à la population totale ; le taux de létalité les rapporte aux seuls malades.",
    "L’espérance de vie à la naissance est un indicateur synthétique construit à partir d’une table de mortalité, non une prédiction individuelle.",
    "Les années de vie perdues donnent davantage de poids aux décès prématurés que le simple compte des décès.",
    "Les DALY (AVAI) combinent mortalité prématurée et morbidité liée à l’incapacité en un seul indicateur composite.",
    "Les sources de données en santé publique sont multiples : état civil, déclarations obligatoires, recensements, enquêtes, bases médico-administratives, registres.",
  ],
  erreursFrequentes: [
    "Confondre prévalence et incidence, notamment en oubliant que la prévalence inclut les cas anciens et nouveaux.",
    "Croire que le taux standardisé est un taux réellement observé : c’est un taux théorique construit pour permettre une comparaison.",
    "Confondre taux de mortalité et taux de létalité, qui n’ont pas le même dénominateur.",
    "Interpréter l’espérance de vie à la naissance comme une prédiction individuelle de durée de vie pour un nouveau-né donné.",
    "Négliger l’existence d’une relation approximative entre prévalence, incidence et durée de la maladie pour les pathologies chroniques stables.",
    "Citer des chiffres précis et datés comme s’ils étaient stables dans le temps, alors que les valeurs numériques évoluent chaque année.",
  ],
  mnemotechniques: [
    {
      moyen: 'Prévalence = Photo, Incidence = Film',
      explication: "La prévalence est une photographie à un instant donné ; l’incidence décrit le déroulement, l’apparition des nouveaux cas au fil du temps.",
    },
    {
      moyen: 'Létalité = Lourdeur pour le Malade',
      explication: 'La létalité rapporte les décès aux seuls malades : elle mesure la gravité de la maladie pour celui qui la contracte.',
    },
    {
      moyen: 'Standardiser = Structure identique',
      explication: 'La standardisation permet de comparer deux populations comme si elles avaient la même structure par âge.',
    },
  ],
  sources: [
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    'Bouyer, Hémon, Cordier et al., Épidémiologie : principes et méthodes quantitatives, Lavoisier',
    "Organisation mondiale de la santé, statistiques sanitaires mondiales",
    "Institut national de la statistique et des études économiques (INSEE), documentation méthodologique",
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-indicateurs-sante-fc-01',
      recto: 'Définir la prévalence.',
      verso: "Proportion de sujets atteints d’une maladie dans une population, à un instant ou sur une période donnée.",
      type: 'definition',
      tags: ['prévalence'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-02',
      recto: "Définir l’incidence.",
      verso: "Nombre de nouveaux cas survenant dans une population à risque pendant une période donnée.",
      type: 'definition',
      tags: ['incidence'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-03',
      recto: 'Donner la relation approximative entre prévalence, incidence et durée de maladie pour une pathologie chronique stable.',
      verso: 'Prévalence ≈ Incidence × durée moyenne de la maladie.',
      type: 'formule',
      tags: ['prévalence', 'incidence'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-04',
      recto: "Pourquoi standardise-t-on un taux de mortalité ?",
      verso: "Pour neutraliser l’effet d’une variable de confusion, le plus souvent l’âge, et permettre une comparaison valide entre populations.",
      type: 'mecanisme',
      tags: ['standardisation'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-05',
      recto: 'Différencier taux de mortalité et taux de létalité.',
      verso: "Le taux de mortalité rapporte les décès à la population totale ; le taux de létalité les rapporte aux seuls sujets atteints de la maladie.",
      type: 'definition',
      tags: ['mortalité', 'létalité'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-06',
      recto: "Qu’est-ce que l’espérance de vie à la naissance ?",
      verso: "La durée de vie moyenne théorique qu’aurait un individu s’il était soumis, toute sa vie, aux conditions de mortalité par âge observées une année donnée.",
      type: 'definition',
      tags: ['espérance de vie'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-07',
      recto: "Que mesurent les années de vie perdues (AVP) ?",
      verso: "L’impact des décès prématurés, en donnant plus de poids aux décès survenant à un âge jeune qu’à ceux survenant à un âge avancé.",
      type: 'definition',
      tags: ['années de vie perdues'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-08',
      recto: 'Que signifie DALY (ou AVAI) ?',
      verso: "Disability-Adjusted Life Years, ou années de vie ajustées sur l’incapacité : indicateur combinant mortalité prématurée et morbidité liée à l’incapacité.",
      type: 'definition',
      tags: ['DALY', 'indicateur composite'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-09',
      recto: 'Citer un exemple d’indicateur composite utilisé pour comparer des pays.',
      verso: "L’indice de développement humain (IDH), qui combine espérance de vie, éducation et revenu national.",
      type: 'classification',
      tags: ['indicateur composite'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-10',
      recto: 'Quelle source fournit les causes médicales de décès en France ?',
      verso: "Les certificats de décès, centralisés notamment par le CépiDc.",
      type: 'definition',
      tags: ['sources de données'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-11',
      recto: "Quelle est la principale limite du taux brut de mortalité pour comparer deux populations ?",
      verso: "Il ne tient pas compte de la structure par âge des populations comparées, un déterminant majeur de la mortalité.",
      type: 'mecanisme',
      tags: ['taux brut'],
    },
    {
      id: 'sante-publique-indicateurs-sante-fc-12',
      recto: "Une maladie rare mais très grave a-t-elle nécessairement une forte mortalité dans la population ?",
      verso: "Non : elle peut avoir une létalité élevée mais une mortalité faible si son incidence est basse dans la population générale.",
      type: 'clinique',
      tags: ['mortalité', 'létalité'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-indicateurs-sante-qcm-01',
      enonce: 'Concernant la prévalence et l’incidence, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La prévalence inclut les cas anciens et les cas nouveaux.', vraie: true, justification: "Exact, elle compte tous les cas existants au moment de la mesure." },
        { lettre: 'B', texte: "L’incidence se calcule sur une population comprenant déjà les malades.", vraie: false, justification: "Faux : l’incidence se calcule sur la population à risque, indemne en début de période." },
        { lettre: 'C', texte: "L’incidence mesure la vitesse d’apparition de nouveaux cas.", vraie: true, justification: 'Exact, elle traduit le risque de développer la maladie sur une période donnée.' },
        { lettre: 'D', texte: 'Pour une maladie chronique stable, la prévalence est indépendante de la durée de la maladie.', vraie: false, justification: "Faux : prévalence est approximativement égale au produit de l’incidence par la durée moyenne de la maladie." },
        { lettre: 'E', texte: "Une maladie guérissant très rapidement peut avoir une incidence élevée et une prévalence faible.", vraie: true, justification: "Exact : la faible durée de la maladie limite le nombre de cas présents à un instant donné." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-indicateurs-sante-qcm-02',
      enonce: 'Concernant la standardisation des taux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "Le taux brut tient compte de la structure par âge de la population.", vraie: false, justification: "Faux : c’est justement l’absence de prise en compte de la structure par âge qui caractérise le taux brut." },
        { lettre: 'B', texte: 'La standardisation permet de comparer deux populations en neutralisant l’effet de leur structure par âge.', vraie: true, justification: "Exact, c’est l’objectif principal de la standardisation." },
        { lettre: 'C', texte: 'Le taux standardisé est un taux réellement observé dans la population.', vraie: false, justification: "Faux : c’est un taux théorique, calculé par application à une population de référence." },
        { lettre: 'D', texte: "La population de référence utilisée pour la standardisation est appelée population type.", vraie: true, justification: 'Exact, c’est la terminologie consacrée.' },
        { lettre: 'E', texte: "La standardisation ne peut porter que sur l’âge et jamais sur une autre variable.", vraie: false, justification: "Faux : elle peut en théorie porter sur toute variable de confusion, même si l’âge est la plus fréquente en pratique." },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-indicateurs-sante-qcm-03',
      enonce: 'Concernant la mortalité et la létalité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le taux de létalité rapporte les décès dus à une maladie au nombre total de la population générale.', vraie: false, justification: "Faux : le dénominateur du taux de létalité est le nombre de malades atteints, non la population générale." },
        { lettre: 'B', texte: 'Le taux de mortalité peut être spécifique à une cause donnée.', vraie: true, justification: 'Exact, on parle alors de taux de mortalité par cause.' },
        { lettre: 'C', texte: 'Une maladie rare et très létale a nécessairement un fort impact sur la mortalité générale.', vraie: false, justification: "Faux : sa faible fréquence peut limiter son impact global sur la mortalité de la population." },
        { lettre: 'D', texte: 'La mortalité proportionnelle rapporte les décès par une cause donnée au total des décès toutes causes.', vraie: true, justification: "Exact, c’est un indicateur utile pour hiérarchiser les causes de décès." },
        { lettre: 'E', texte: "Le taux de létalité mesure la gravité d’une maladie pour ceux qui en sont atteints.", vraie: true, justification: 'Exact, c’est précisément son intérêt principal.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-indicateurs-sante-qcm-04',
      enonce: "Concernant l’espérance de vie et les années de vie perdues, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "L’espérance de vie à la naissance prédit la durée de vie réelle d’un nouveau-né donné.", vraie: false, justification: "Faux : c’est un indicateur théorique et synthétique, pas une prédiction individuelle." },
        { lettre: 'B', texte: "L’espérance de vie à la naissance est calculée à partir d’une table de mortalité.", vraie: true, justification: 'Exact, elle applique les conditions de mortalité par âge observées une année donnée.' },
        { lettre: 'C', texte: "Les années de vie perdues donnent le même poids à tous les décès, quel que soit l’âge de survenue.", vraie: false, justification: "Faux : elles donnent davantage de poids aux décès prématurés, survenus à un âge jeune." },
        { lettre: 'D', texte: "L’espérance de vie en bonne santé intègre une dimension de qualité de vie, contrairement à l’espérance de vie simple.", vraie: true, justification: 'Exact, elle tient compte des années vécues sans incapacité.' },
        { lettre: 'E', texte: 'Les DALY combinent uniquement la mortalité prématurée, sans tenir compte de l’incapacité.', vraie: false, justification: "Faux : les DALY combinent mortalité prématurée et années vécues avec incapacité." },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-indicateurs-sante-qcm-05',
      enonce: 'Concernant les indicateurs composites, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "Un indicateur composite combine plusieurs dimensions en une seule mesure.", vraie: true, justification: 'Exact, c’est sa définition même.' },
        { lettre: 'B', texte: "L’indice de développement humain combine uniquement des données de mortalité.", vraie: false, justification: "Faux : il combine espérance de vie, éducation et revenu." },
        { lettre: 'C', texte: 'Les indicateurs composites peuvent masquer des disparités internes à une population.', vraie: true, justification: 'Exact, c’est une limite fréquemment soulignée de ce type d’indicateur.' },
        { lettre: 'D', texte: 'Les DALY sont un exemple d’indicateur composite de charge de morbidité.', vraie: true, justification: "Exact, ils combinent mortalité prématurée et incapacité." },
        { lettre: 'E', texte: "Un indicateur composite apporte toujours plus d’information que chacune de ses composantes prises séparément.", vraie: false, justification: "Faux : il synthétise l’information au prix d’une perte de détail sur chaque composante." },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-indicateurs-sante-qcm-06',
      enonce: 'Concernant les sources de données en santé publique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les certificats de décès renseignent la cause médicale du décès.', vraie: true, justification: "Exact, c’est leur fonction première en épidémiologie de la mortalité." },
        { lettre: 'B', texte: "Les bases médico-administratives renseignent uniquement sur la démographie de la population.", vraie: false, justification: "Faux : elles renseignent surtout sur le recours aux soins et les hospitalisations." },
        { lettre: 'C', texte: 'Les registres de morbidité couvrent une zone géographique définie.', vraie: true, justification: "Exact, c’est une caractéristique classique des registres, notamment de cancers." },
        { lettre: 'D', texte: 'Les recensements de population sont réalisés par les bases de l’assurance maladie.', vraie: false, justification: "Faux : en France, les recensements relèvent de l’INSEE." },
        { lettre: 'E', texte: 'Les maladies à déclaration obligatoire relèvent d’un système de surveillance sanitaire.', vraie: true, justification: 'Exact, ce dispositif permet la surveillance des maladies transmissibles notamment.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
  ],
};
