import type { Fiche } from '../../types';

export const ficheComparaisonMoyennes: Fiche = {
  id: 'ue4-comparaison-moyennes',
  ue: 'ue4',
  titre: 'Comparaison de moyennes',
  sousTitre: 'Test z, test t de Student sur séries indépendantes et appariées, analyse de variance et tests non paramétriques',
  chapitre: 'Estimation et tests',
  ordre: 9,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'test t de Student',
    'séries indépendantes',
    'séries appariées',
    'analyse de variance',
    'ANOVA',
    'test non paramétrique',
  ],
  objectifs: [
    'Choisir le test adapté à la comparaison de deux moyennes selon la taille des échantillons et leur indépendance.',
    'Appliquer le test t de Student sur séries indépendantes et sur séries appariées.',
    'Connaître les conditions d’application de ces tests, notamment la normalité et l’homogénéité des variances.',
    'Comprendre le principe de l’analyse de variance à un facteur pour comparer plus de deux moyennes.',
    'Savoir quand recourir à un test non paramétrique.',
  ],
  sections: [
    {
      id: 'choix-du-test',
      titre: 'Choisir le test de comparaison de moyennes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Comparer deux moyennes suppose de choisir un test adapté à la taille des échantillons, à l’indépendance ou non des séries comparées, et à la validité des conditions d’application des tests paramétriques.',
        },
        {
          type: 'tableau',
          titre: 'Principaux tests de comparaison de moyennes',
          colonnes: ['Situation', 'Test usuel', 'Statistique'],
          lignes: [
            ['Deux séries indépendantes, grands échantillons', 'Test z', 'z = (m1 - m2) / racine(σ1²/n1 + σ2²/n2)'],
            ['Deux séries indépendantes, petits échantillons', 'Test t de Student pour séries indépendantes', 't à (n1 + n2 - 2) degrés de liberté'],
            ['Deux séries appariées (mêmes sujets)', 'Test t de Student pour séries appariées', 't à (n - 1) degrés de liberté'],
            ['Trois moyennes ou plus', 'Analyse de variance (ANOVA) à un facteur', 'F de Fisher-Snedecor'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Degré de liberté : une notion clé',
          texte:
            'Le degré de liberté (ddl) intervient dans le choix du quantile de la loi de Student ou de Fisher-Snedecor à utiliser. Il diminue à mesure que l’on estime des paramètres à partir des données : chaque moyenne calculée sur l’échantillon « consomme » un degré de liberté.',
        },
      ],
    },
    {
      id: 'series-independantes',
      titre: 'Comparaison de deux séries indépendantes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Deux séries sont dites indépendantes lorsqu’elles portent sur des groupes de sujets distincts et non appariés, par exemple un groupe traité et un groupe témoin composés de patients différents.',
        },
        {
          type: 'formule',
          expression: 't = (m1 - m2) / [ sp x racine(1/n1 + 1/n2) ]',
          legende:
            'Statistique du test t de Student pour deux séries indépendantes, où sp est l’écart-type combiné (pooled) des deux groupes, sous hypothèse d’égalité des variances. Le résultat est comparé à la loi de Student à (n1 + n2 - 2) degrés de liberté.',
        },
        {
          type: 'formule',
          expression: 'sp² = [ (n1 - 1) x s1² + (n2 - 1) x s2² ] / (n1 + n2 - 2)',
          legende: 'Variance combinée (pooled) des deux groupes, moyenne pondérée des variances de chaque groupe par leurs degrés de liberté respectifs.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Conditions d’application du test t sur séries indépendantes',
          texte:
            'Ce test suppose la normalité de la distribution de la variable étudiée dans chaque groupe (ou des effectifs suffisamment grands pour s’appuyer sur le théorème central limite) et l’égalité des variances des deux groupes (homoscédasticité), classiquement vérifiée par un test de Fisher-Snedecor comparant les deux variances. En cas d’hétéroscédasticité marquée, une variante du test t (test de Welch), qui ne suppose pas l’égalité des variances, doit être préférée.',
        },
      ],
    },
    {
      id: 'series-appariees',
      titre: 'Comparaison de deux séries appariées',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Deux séries sont dites appariées lorsque les mêmes sujets sont mesurés à deux moments différents (avant/après traitement) ou lorsque les sujets des deux groupes sont appariés un à un sur des critères pertinents.',
        },
        {
          type: 'definition',
          terme: 'Principe du test t apparié',
          definition:
            'Le test se ramène à un test sur une seule série : celle des différences individuelles d entre les deux mesures de chaque sujet. On teste alors si la moyenne de ces différences est significativement différente de 0.',
        },
        {
          type: 'formule',
          expression: 't = d̄ / (sd / racine(n))',
          legende:
            'Statistique du test t apparié, où d̄ est la moyenne des différences individuelles, sd leur écart-type et n le nombre de paires. Le résultat est comparé à la loi de Student à (n - 1) degrés de liberté.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Appariement : ne pas confondre avec indépendant',
          texte:
            'Utiliser à tort un test pour séries indépendantes sur des données appariées ignore la corrélation entre les deux mesures d’un même sujet et conduit en général à une perte de puissance. Le test apparié exploite au contraire cette corrélation en se concentrant uniquement sur la variabilité des différences individuelles, généralement plus faible que la variabilité totale des deux séries prises séparément.',
        },
      ],
    },
    {
      id: 'anova',
      titre: 'Analyse de variance à un facteur',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Lorsque l’on souhaite comparer les moyennes de trois groupes ou plus, il faut recourir à l’analyse de variance (ANOVA) et non enchaîner plusieurs tests t deux à deux, ce qui gonflerait artificiellement le risque alpha global.',
        },
        {
          type: 'definition',
          terme: 'Principe de l’ANOVA à un facteur',
          definition:
            'L’ANOVA compare la variabilité des moyennes entre les groupes (variance inter-groupes) à la variabilité des observations à l’intérieur de chaque groupe (variance intra-groupe), en calculant leur rapport, la statistique F de Fisher-Snedecor.',
        },
        {
          type: 'formule',
          expression: 'F = variance inter-groupes / variance intra-groupe',
          legende: 'Statistique F de l’ANOVA à un facteur : plus F est grand, plus les moyennes des groupes diffèrent entre elles relativement à la dispersion des observations au sein de chaque groupe.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'L’ANOVA ne dit pas quels groupes diffèrent',
          texte:
            'Un résultat significatif à l’ANOVA (p < α) indique seulement qu’au moins une moyenne diffère des autres, sans préciser lesquelles. Des comparaisons deux à deux ultérieures, avec correction du seuil de signification pour tenir compte des comparaisons multiples (par exemple correction de Bonferroni), sont nécessaires pour identifier précisément les groupes concernés.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Conditions d’application de l’ANOVA',
          texte:
            'L’ANOVA à un facteur suppose la normalité de la distribution dans chaque groupe, l’indépendance des observations et l’homogénéité des variances entre les groupes (homoscédasticité), vérifiable notamment par un test de Bartlett ou de Levene.',
        },
      ],
    },
    {
      id: 'tests-non-parametriques',
      titre: 'Tests non paramétriques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Lorsque les conditions d’application des tests paramétriques (normalité, homogénéité des variances) ne sont pas satisfaites, en particulier sur de petits échantillons, des tests non paramétriques, fondés sur les rangs plutôt que sur les valeurs elles-mêmes, doivent être utilisés.',
        },
        {
          type: 'tableau',
          titre: 'Correspondance entre tests paramétriques et non paramétriques',
          colonnes: ['Test paramétrique', 'Équivalent non paramétrique', 'Situation'],
          lignes: [
            ['Test t pour séries indépendantes', 'Test de Mann-Whitney (Wilcoxon rank-sum)', 'Deux groupes indépendants'],
            ['Test t apparié', 'Test des rangs signés de Wilcoxon', 'Deux séries appariées'],
            ['ANOVA à un facteur', 'Test de Kruskal-Wallis', 'Trois groupes indépendants ou plus'],
          ],
        },
        {
          type: 'etapes',
          titre: 'Méthode de choix entre test paramétrique et non paramétrique',
          etapes: [
            {
              titre: 'Vérifier la normalité',
              detail: 'Examiner la distribution des données (histogramme, test de normalité) dans chaque groupe.',
            },
            {
              titre: 'Vérifier l’effectif',
              detail: 'Pour un grand échantillon, le théorème central limite rend souvent le test paramétrique robuste même en cas de non-normalité modérée.',
            },
            {
              titre: 'Choisir le test',
              detail: 'Si la normalité (ou un grand effectif) et l’homogénéité des variances sont vérifiées, utiliser le test paramétrique correspondant ; sinon, préférer l’équivalent non paramétrique fondé sur les rangs.',
            },
          ],
        },
      ],
    },
  ],
  pointsCles: [
    'Le choix du test dépend de l’indépendance ou de l’appariement des séries, de la taille des échantillons et du nombre de groupes comparés.',
    'Le test t sur séries indépendantes compare deux groupes distincts et suppose normalité et homogénéité des variances.',
    'Le test t apparié se ramène à un test sur la moyenne des différences individuelles, comparée à 0.',
    'L’ANOVA à un facteur compare trois moyennes ou plus en opposant variance inter-groupes et variance intra-groupe (statistique F).',
    'Un résultat significatif à l’ANOVA indique une différence globale, sans préciser quels groupes diffèrent : des comparaisons post-hoc corrigées sont nécessaires.',
    'Les tests non paramétriques (Mann-Whitney, Wilcoxon signé, Kruskal-Wallis) s’appuient sur les rangs et s’utilisent quand les conditions de normalité ou d’homogénéité des variances ne sont pas remplies.',
    'Enchaîner plusieurs tests t deux à deux au lieu d’une ANOVA gonfle artificiellement le risque alpha global de l’analyse.',
  ],
  erreursFrequentes: [
    'Utiliser un test pour séries indépendantes sur des données appariées, ce qui ignore la corrélation entre les mesures répétées et fait perdre de la puissance.',
    'Multiplier les tests t deux à deux pour comparer plus de deux groupes, au lieu d’utiliser une ANOVA, ce qui augmente le risque de faux positif global.',
    'Conclure d’une ANOVA significative que tous les groupes diffèrent entre eux, alors qu’elle indique seulement qu’au moins un groupe diffère des autres.',
    'Oublier de vérifier l’homogénéité des variances avant d’appliquer le test t classique pour séries indépendantes.',
    'Appliquer un test paramétrique sur un petit échantillon dont la distribution s’écarte manifestement de la normalité, sans envisager de test non paramétrique.',
    'Confondre le nombre de degrés de liberté du test apparié (n - 1) et celui du test sur séries indépendantes (n1 + n2 - 2).',
  ],
  mnemotechniques: [
    {
      moyen: 'Apparié : une seule série de différences',
      explication: 'Le test apparié ramène toujours le problème à l’étude d’une seule série, celle des différences individuelles d, comparée à 0.',
    },
    {
      moyen: 'ANOVA : F comme « fraction » inter sur intra',
      explication: 'F = variance inter-groupes / variance intra-groupe : plus les groupes diffèrent entre eux par rapport à leur dispersion interne, plus F est grand.',
    },
    {
      moyen: 'Pas de normalité, pas de paramètres : les rangs prennent le relais',
      explication: 'Quand la normalité fait défaut, les tests non paramétriques (fondés sur le rang des observations, pas sur leur valeur) remplacent les tests t et l’ANOVA.',
    },
  ],
  sources: [
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
    'Schwartz D., Méthodes statistiques à l’usage des médecins et des biologistes, Flammarion Médecine-Sciences',
    'Ancelle T., Statistique - Épidémiologie, Maloine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-comparaison-moyennes-fc-01',
      recto: 'Quel test utiliser pour comparer les moyennes de deux groupes indépendants sur un petit échantillon ?',
      verso: 'Le test t de Student pour séries indépendantes, à (n1 + n2 - 2) degrés de liberté.',
      type: 'mecanisme',
      tags: ['choix du test'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-02',
      recto: 'Quelles sont les conditions d’application du test t pour séries indépendantes ?',
      verso: 'Normalité de la variable dans chaque groupe (ou grands effectifs) et homogénéité des variances entre les deux groupes.',
      type: 'mecanisme',
      tags: ['conditions'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-03',
      recto: 'Sur quoi porte exactement le test t apparié ?',
      verso: 'Sur la moyenne des différences individuelles entre les deux mesures de chaque sujet, comparée à 0.',
      type: 'mecanisme',
      tags: ['séries appariées'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-04',
      recto: 'Donner la formule de la statistique du test t apparié.',
      verso: 't = d̄ / (sd / racine(n)), à (n - 1) degrés de liberté.',
      type: 'formule',
      tags: ['formule'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-05',
      recto: 'Que compare l’analyse de variance (ANOVA) à un facteur ?',
      verso: 'La variance inter-groupes (entre les moyennes des groupes) à la variance intra-groupe (dispersion à l’intérieur de chaque groupe).',
      type: 'definition',
      tags: ['ANOVA'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-06',
      recto: 'Quelle statistique utilise l’ANOVA ?',
      verso: 'La statistique F de Fisher-Snedecor, rapport de la variance inter-groupes sur la variance intra-groupe.',
      type: 'formule',
      tags: ['ANOVA'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-07',
      recto: 'Une ANOVA significative indique-t-elle quels groupes précis diffèrent entre eux ?',
      verso: 'Non, elle indique seulement qu’au moins un groupe diffère des autres ; des comparaisons post-hoc corrigées sont nécessaires pour préciser lesquels.',
      type: 'mecanisme',
      tags: ['ANOVA', 'pièges'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-08',
      recto: 'Pourquoi éviter de multiplier les tests t deux à deux pour comparer plus de deux groupes ?',
      verso: 'Parce que cela gonfle artificiellement le risque alpha global de l’analyse, augmentant le risque de faux positif.',
      type: 'mecanisme',
      tags: ['comparaisons multiples'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-09',
      recto: 'Quel est l’équivalent non paramétrique du test t pour séries indépendantes ?',
      verso: 'Le test de Mann-Whitney (Wilcoxon rank-sum).',
      type: 'classification',
      tags: ['non paramétrique'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-10',
      recto: 'Quel est l’équivalent non paramétrique du test t apparié ?',
      verso: 'Le test des rangs signés de Wilcoxon.',
      type: 'classification',
      tags: ['non paramétrique'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-11',
      recto: 'Quel est l’équivalent non paramétrique de l’ANOVA à un facteur ?',
      verso: 'Le test de Kruskal-Wallis.',
      type: 'classification',
      tags: ['non paramétrique'],
    },
    {
      id: 'ue4-comparaison-moyennes-fc-12',
      recto: 'Sur quoi se fondent les tests non paramétriques plutôt que sur les valeurs elles-mêmes ?',
      verso: 'Sur les rangs des observations, ce qui les rend moins sensibles aux écarts à la normalité et aux valeurs extrêmes.',
      type: 'mecanisme',
      tags: ['non paramétrique'],
    },
  ],
  qcm: [
    {
      id: 'ue4-comparaison-moyennes-qcm-01',
      enonce: 'Concernant le choix du test de comparaison de moyennes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le test t pour séries indépendantes s’applique à deux groupes de sujets distincts.',
          vraie: true,
          justification: 'C’est exactement sa situation d’application : deux échantillons non appariés.',
        },
        {
          lettre: 'B',
          texte: 'Le test t apparié s’applique lorsque les mêmes sujets sont mesurés avant et après une intervention.',
          vraie: true,
          justification: 'C’est le cas typique d’appariement par répétition de la mesure sur les mêmes individus.',
        },
        {
          lettre: 'C',
          texte: 'Pour comparer les moyennes de quatre groupes indépendants, il faut réaliser six tests t deux à deux.',
          vraie: false,
          justification: 'Il faut utiliser une ANOVA à un facteur, sous peine de gonfler artificiellement le risque alpha global en multipliant les tests t.',
        },
        {
          lettre: 'D',
          texte: 'Le choix entre séries indépendantes et séries appariées ne change rien au calcul du test.',
          vraie: false,
          justification: 'Les statistiques de test, les degrés de liberté et les conditions d’application diffèrent nettement entre ces deux situations.',
        },
        {
          lettre: 'E',
          texte: 'Un test non paramétrique peut être préféré si les conditions de normalité ne sont pas vérifiées.',
          vraie: true,
          justification: 'C’est précisément l’indication des tests non paramétriques.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. Bien identifier l’indépendance ou l’appariement des séries avant de choisir un test.',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-moyennes-qcm-02',
      enonce: 'Concernant le test t pour séries indépendantes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il suppose l’égalité des variances des deux groupes comparés.',
          vraie: true,
          justification: 'C’est la condition d’homoscédasticité, nécessaire à la version classique de ce test.',
        },
        {
          lettre: 'B',
          texte: 'Le nombre de degrés de liberté est n1 + n2 - 2.',
          vraie: true,
          justification: 'Deux moyennes sont estimées à partir des données, ce qui retire deux degrés de liberté.',
        },
        {
          lettre: 'C',
          texte: 'En cas d’hétérogénéité marquée des variances, une variante du test (test de Welch) peut être utilisée.',
          vraie: true,
          justification: 'Le test de Welch ne suppose pas l’égalité des variances, contrairement au test t classique.',
        },
        {
          lettre: 'D',
          texte: 'La normalité de la distribution dans chaque groupe n’a aucune importance, quel que soit l’effectif.',
          vraie: false,
          justification: 'Sur un petit échantillon, la normalité est une condition importante ; elle devient moins critique seulement pour de grands effectifs, via le théorème central limite.',
        },
        {
          lettre: 'E',
          texte: 'La variance combinée (pooled) est une moyenne pondérée des variances des deux groupes.',
          vraie: true,
          justification: 'sp² pondère chaque variance par son propre nombre de degrés de liberté (n1 - 1) et (n2 - 1).',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Retenir que la normalité reste importante sur petit échantillon.',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-moyennes-qcm-03',
      enonce: 'Concernant le test t apparié, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il revient à tester si la moyenne des différences individuelles est significativement différente de 0.',
          vraie: true,
          justification: 'C’est exactement le principe du test apparié.',
        },
        {
          lettre: 'B',
          texte: 'Le nombre de degrés de liberté est n - 1, où n est le nombre de paires.',
          vraie: true,
          justification: 'Une seule moyenne (celle des différences) est estimée, d’où un seul degré de liberté retiré.',
        },
        {
          lettre: 'C',
          texte: 'Il est équivalent, en termes de puissance, à un test pour séries indépendantes appliqué aux mêmes données.',
          vraie: false,
          justification: 'Le test apparié exploite la corrélation entre les deux mesures d’un même sujet, ce qui le rend généralement plus puissant qu’un test pour séries indépendantes sur les mêmes données.',
        },
        {
          lettre: 'D',
          texte: 'Il s’applique par exemple à la comparaison d’une pression artérielle mesurée avant et après traitement chez les mêmes patients.',
          vraie: true,
          justification: 'C’est un exemple classique de données appariées, mesurées deux fois sur les mêmes sujets.',
        },
        {
          lettre: 'E',
          texte: 'La statistique du test s’écrit t = d̄ / (sd / racine(n)).',
          vraie: true,
          justification: 'C’est la formule exacte de la statistique t appliquée à la série des différences.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Le test apparié est en général plus puissant que le test sur séries indépendantes appliqué aux mêmes données.',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-moyennes-qcm-04',
      enonce: 'Concernant l’analyse de variance (ANOVA) à un facteur, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle permet de comparer simultanément les moyennes de trois groupes ou plus.',
          vraie: true,
          justification: 'C’est précisément son domaine d’application.',
        },
        {
          lettre: 'B',
          texte: 'La statistique F est le rapport de la variance intra-groupe sur la variance inter-groupes.',
          vraie: false,
          justification: 'C’est l’inverse : F = variance inter-groupes / variance intra-groupe.',
        },
        {
          lettre: 'C',
          texte: 'Un F élevé oriente vers un rejet de l’hypothèse d’égalité des moyennes des groupes.',
          vraie: true,
          justification: 'Un F élevé traduit une variabilité entre les groupes nettement supérieure à la variabilité à l’intérieur de chaque groupe.',
        },
        {
          lettre: 'D',
          texte: 'Un résultat significatif à l’ANOVA précise automatiquement quelle paire de groupes diffère.',
          vraie: false,
          justification: 'Il indique seulement qu’au moins un groupe diffère ; des comparaisons post-hoc corrigées sont nécessaires pour identifier lesquels.',
        },
        {
          lettre: 'E',
          texte: 'L’ANOVA suppose l’homogénéité des variances entre les groupes comparés.',
          vraie: true,
          justification: 'C’est l’une des conditions d’application classiques de l’ANOVA à un facteur.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien retenir le sens exact du rapport F (inter sur intra, jamais l’inverse).',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-moyennes-qcm-05',
      enonce: 'Concernant les tests non paramétriques, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le test de Mann-Whitney est l’équivalent non paramétrique du test t pour séries indépendantes.',
          vraie: true,
          justification: 'C’est la correspondance classique entre ces deux tests.',
        },
        {
          lettre: 'B',
          texte: 'Le test de Wilcoxon signé est l’équivalent non paramétrique du test t apparié.',
          vraie: true,
          justification: 'C’est la correspondance classique pour les séries appariées.',
        },
        {
          lettre: 'C',
          texte: 'Le test de Kruskal-Wallis est l’équivalent non paramétrique de l’ANOVA à un facteur.',
          vraie: true,
          justification: 'C’est la correspondance classique pour la comparaison de trois groupes indépendants ou plus.',
        },
        {
          lettre: 'D',
          texte: 'Les tests non paramétriques utilisent directement les valeurs numériques des observations, comme les tests paramétriques.',
          vraie: false,
          justification: 'Ils reposent sur les rangs des observations, et non sur leurs valeurs numériques exactes.',
        },
        {
          lettre: 'E',
          texte: 'Les tests non paramétriques sont utiles lorsque les conditions de normalité ne sont pas vérifiées, en particulier sur petits échantillons.',
          vraie: true,
          justification: 'C’est précisément leur indication principale.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Bien mémoriser les trois correspondances paramétrique / non paramétrique.',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-moyennes-qcm-06',
      enonce: 'On compare la pression artérielle systolique de 30 patients avant et après la prise d’un antihypertenseur, chez les mêmes sujets. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il s’agit d’une comparaison de séries appariées.',
          vraie: true,
          justification: 'Les mêmes sujets sont mesurés deux fois : avant et après le traitement.',
        },
        {
          lettre: 'B',
          texte: 'Le test t pour séries indépendantes est le plus adapté à cette situation.',
          vraie: false,
          justification: 'Ce test ignorerait la corrélation entre les deux mesures d’un même patient ; le test apparié est mieux adapté.',
        },
        {
          lettre: 'C',
          texte: 'Le nombre de degrés de liberté du test t apparié serait ici 29.',
          vraie: true,
          justification: 'n - 1 = 30 - 1 = 29, n étant le nombre de paires.',
        },
        {
          lettre: 'D',
          texte: 'Si la distribution des différences individuelles s’écarte fortement de la normalité, un test des rangs signés de Wilcoxon peut être envisagé.',
          vraie: true,
          justification: 'C’est l’équivalent non paramétrique du test t apparié, adapté en cas de non-normalité des différences.',
        },
        {
          lettre: 'E',
          texte: 'La statistique de test dépendrait uniquement de la moyenne des pressions avant traitement, sans tenir compte des valeurs après traitement.',
          vraie: false,
          justification: 'La statistique dépend de la moyenne et de l’écart-type des différences individuelles (après - avant) pour chaque patient, donc des deux séries de mesures.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Un schéma avant/après sur les mêmes sujets impose systématiquement un raisonnement en séries appariées.',
      difficulte: 2,
    },
  ],
};
