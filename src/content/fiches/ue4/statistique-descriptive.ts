import type { Fiche } from '../../types';

export const ficheStatistiqueDescriptive: Fiche = {
  id: 'ue4-statistique-descriptive',
  ue: 'ue4',
  titre: 'Statistique descriptive',
  sousTitre: 'Types de variables, tableaux, représentations graphiques et paramètres de position et de dispersion',
  chapitre: 'Descriptive et probabilités',
  ordre: 1,
  duree: 22,
  difficulte: 1,
  motsCles: [
    'variable qualitative',
    'variable quantitative',
    'moyenne',
    'médiane',
    'mode',
    'variance',
    'écart-type',
    'quartile',
    'boîte à moustaches',
  ],
  objectifs: [
    'Distinguer les différents types de variables statistiques et choisir la représentation graphique adaptée à chacune.',
    'Construire un tableau d’effectifs, de fréquences et de fréquences cumulées.',
    'Calculer et interpréter les paramètres de position : moyenne, médiane, mode.',
    'Calculer et interpréter les paramètres de dispersion : variance, écart-type, coefficient de variation.',
    'Construire une boîte à moustaches à partir des quartiles et en tirer une lecture rapide de la distribution.',
  ],
  sections: [
    {
      id: 'types-variables',
      titre: 'Types de variables statistiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La statistique descriptive vise à résumer et à représenter un ensemble d’observations recueillies sur une population ou un échantillon. La première étape de toute analyse consiste à identifier la nature de chaque variable étudiée, car le type de variable conditionne les paramètres calculables et les représentations graphiques utilisables.',
        },
        {
          type: 'tableau',
          titre: 'Classification des variables statistiques',
          colonnes: ['Type', 'Définition', 'Exemple'],
          lignes: [
            ['Qualitative nominale', 'Modalités sans ordre naturel', 'Groupe sanguin, sexe, couleur des yeux'],
            ['Qualitative ordinale', 'Modalités ordonnées mais non mesurables', 'Stade tumoral, intensité de la douleur (EVA en classes)'],
            ['Quantitative discrète', 'Valeurs numériques isolées, dénombrables', 'Nombre d’enfants, nombre de globules blancs comptés'],
            ['Quantitative continue', 'Valeurs numériques prenant en théorie toute valeur d’un intervalle', 'Taille, poids, glycémie, pression artérielle'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas se fier à l’apparence numérique',
          texte:
            'Un code numérique n’est pas toujours une variable quantitative : le numéro d’un service hospitalier ou un code de classification est une variable qualitative, même codée par des chiffres. À l’inverse, une variable quantitative discrète peut se présenter sous forme de classes lors de son recueil sans devenir qualitative pour autant.',
        },
        {
          type: 'liste',
          items: [
            'Échelle nominale : seules l’égalité et la différence entre modalités ont un sens (aucun classement possible).',
            'Échelle ordinale : les modalités peuvent être classées, mais les écarts entre elles ne sont pas mesurables.',
            'Échelle d’intervalles : les écarts sont mesurables, mais il n’existe pas de zéro absolu (exemple : température en degré Celsius).',
            'Échelle de rapports : il existe un zéro absolu, permettant de calculer des rapports entre valeurs (exemple : poids, taille, durée).',
          ],
        },
      ],
    },
    {
      id: 'tableaux-graphiques',
      titre: 'Tableaux et représentations graphiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Un tableau statistique associe à chaque modalité ou classe de valeurs son effectif (nombre d’observations), sa fréquence (proportion, souvent exprimée en pourcentage) et, pour les variables quantitatives, l’effectif et la fréquence cumulés jusqu’à cette valeur.',
        },
        {
          type: 'tableau',
          titre: 'Exemple de tableau d’effectifs et de fréquences',
          colonnes: ['Classe de glycémie (g/L)', 'Effectif', 'Fréquence', 'Fréquence cumulée'],
          lignes: [
            ['[0,70 – 0,90[', '20', '20 %', '20 %'],
            ['[0,90 – 1,10[', '50', '50 %', '70 %'],
            ['[1,10 – 1,30[', '25', '25 %', '95 %'],
            ['[1,30 – 1,50[', '5', '5 %', '100 %'],
          ],
        },
        {
          type: 'liste',
          items: [
            'Variable qualitative nominale : diagramme en secteurs (camembert) ou diagramme en tuyaux d’orgue (barres disjointes, modalités dans un ordre arbitraire).',
            'Variable qualitative ordinale : diagramme en barres, avec les modalités impérativement rangées selon leur ordre naturel.',
            'Variable quantitative discrète : diagramme en bâtons, la hauteur de chaque bâton représentant l’effectif ou la fréquence de la valeur.',
            'Variable quantitative continue : histogramme, les rectangles étant jointifs et leur surface (et non leur seule hauteur) proportionnelle à l’effectif de la classe.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Histogramme et diagramme en bâtons : ne pas confondre',
          texte:
            'Dans un histogramme, les rectangles sont jointifs car la variable est continue : il n’y a pas d’espace entre les classes. Dans un diagramme en bâtons, les valeurs sont isolées et les bâtons sont donc disjoints. Une erreur fréquente consiste à tracer un histogramme pour une variable qualitative ordinale, ce qui suggère à tort une continuité qui n’existe pas.',
        },
      ],
    },
    {
      id: 'parametres-position',
      titre: 'Paramètres de position',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les paramètres de position résument par une valeur unique la localisation centrale d’une distribution de valeurs quantitatives. Les trois principaux sont la moyenne, la médiane et le mode.',
        },
        {
          type: 'formule',
          expression: 'm = (1/n) x Σ xi',
          legende:
            'Moyenne arithmétique d’une série de n valeurs x1, x2, …, xn : somme des valeurs divisée par leur nombre.',
        },
        {
          type: 'definition',
          terme: 'Médiane',
          definition:
            'Valeur qui partage la série ordonnée en deux effectifs égaux : au moins la moitié des observations lui sont inférieures ou égales, et au moins la moitié lui sont supérieures ou égales.',
        },
        {
          type: 'etapes',
          titre: 'Méthode de calcul de la médiane sur données brutes',
          etapes: [
            {
              titre: 'Ordonner la série',
              detail: 'Classer les n valeurs par ordre croissant.',
            },
            {
              titre: 'Distinguer n pair ou n impair',
              detail:
                'Si n est impair, la médiane est la valeur de rang (n + 1) / 2. Si n est pair, la médiane est la demi-somme des deux valeurs centrales, de rangs n / 2 et n / 2 + 1.',
            },
            {
              titre: 'Lire ou calculer la valeur',
              detail: 'Retenir la ou les valeurs centrales identifiées et, si nécessaire, en calculer la moyenne.',
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Mode',
          definition:
            'Valeur ou classe de valeurs la plus fréquente d’une distribution. Une distribution peut être unimodale, bimodale ou multimodale ; le mode est le seul paramètre de position calculable pour une variable qualitative.',
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Moyenne, médiane et asymétrie',
          texte:
            'Pour une distribution symétrique, moyenne et médiane coïncident. En cas de distribution asymétrique étalée vers les valeurs élevées (étalement à droite), la moyenne est tirée vers ces valeurs extrêmes et devient supérieure à la médiane. À l’inverse, un étalement vers les valeurs faibles rend la moyenne inférieure à la médiane. La médiane, moins sensible aux valeurs extrêmes, est donc préférable pour décrire une distribution asymétrique.',
        },
      ],
    },
    {
      id: 'parametres-dispersion',
      titre: 'Paramètres de dispersion',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Un paramètre de position seul ne suffit pas à décrire une distribution : deux séries de même moyenne peuvent présenter une dispersion très différente autour de cette valeur centrale. Les paramètres de dispersion mesurent cet étalement des valeurs.',
        },
        {
          type: 'formule',
          expression: 's² = [ 1 / (n - 1) ] x Σ (xi - m)²',
          legende:
            'Variance d’un échantillon de taille n : moyenne des carrés des écarts à la moyenne, divisée par (n - 1) afin d’obtenir un estimateur sans biais de la variance de la population.',
          unites: 'unité de la variable au carré',
        },
        {
          type: 'formule',
          expression: 's = racine(s²)',
          legende: 'Écart-type : racine carrée de la variance. Il s’exprime dans la même unité que la variable étudiée, ce qui le rend directement interprétable.',
        },
        {
          type: 'formule',
          expression: 'CV = s / m',
          legende:
            'Coefficient de variation, souvent exprimé en pourcentage (CV = s / m x 100). Sans unité, il permet de comparer la dispersion relative de deux séries mesurées dans des unités différentes ou d’ordres de grandeur différents. Il n’a de sens que pour une variable dont la moyenne est strictement positive.',
        },
        {
          type: 'tableau',
          titre: 'Variance de la population et variance de l’échantillon',
          colonnes: ['Paramètre', 'Formule', 'Usage'],
          lignes: [
            ['Variance de la population (paramètre)', 'σ² = (1 / N) x Σ (xi - μ)²', 'Calculée quand toute la population est connue (N = taille de la population, μ = moyenne de la population)'],
            ['Variance de l’échantillon (estimateur)', 's² = [1 / (n - 1)] x Σ (xi - m)²', 'Estimateur sans biais de σ² à partir d’un échantillon de taille n'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Pourquoi diviser par (n - 1) ?',
          texte:
            'Diviser par n au lieu de (n - 1) produit un estimateur de la variance systématiquement biaisé par défaut, car la moyenne de l’échantillon est elle-même calculée à partir des données et minimise la somme des carrés des écarts. La division par (n - 1), appelée correction de Bessel, corrige ce biais et rend s² sans biais pour estimer σ². Ce point est un piège classique en QCM.',
        },
      ],
    },
    {
      id: 'quartiles-boite',
      titre: 'Quartiles et boîte à moustaches',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les quartiles complètent la médiane pour décrire la répartition d’une série ordonnée en quatre parts d’effectifs égaux. Ils sont à la base de la boîte à moustaches, représentation graphique synthétique d’une distribution quantitative.',
        },
        {
          type: 'definition',
          terme: 'Quartiles et écart interquartile',
          definition:
            'Le premier quartile Q1 est la valeur en dessous de laquelle se situent 25 % des observations ; le deuxième quartile Q2 correspond à la médiane (50 %) ; le troisième quartile Q3 est la valeur en dessous de laquelle se situent 75 % des observations. L’écart interquartile IQR = Q3 - Q1 contient les 50 % centraux de la distribution et constitue un indicateur de dispersion peu sensible aux valeurs extrêmes.',
        },
        {
          type: 'etapes',
          titre: 'Construction d’une boîte à moustaches',
          etapes: [
            {
              titre: 'Calculer les trois quartiles',
              detail: 'Déterminer Q1, la médiane (Q2) et Q3 à partir de la série ordonnée.',
            },
            {
              titre: 'Tracer la boîte',
              detail: 'Dessiner un rectangle allant de Q1 à Q3, barré d’un trait à la médiane.',
            },
            {
              titre: 'Tracer les moustaches',
              detail:
                'Prolonger la boîte jusqu’à la valeur observée la plus extrême restant à l’intérieur des bornes Q1 - 1,5 x IQR et Q3 + 1,5 x IQR (convention de Tukey).',
            },
            {
              titre: 'Repérer les valeurs atypiques',
              detail: 'Représenter individuellement, sous forme de points, les observations situées au-delà de ces bornes.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Seuil conventionnel des valeurs atypiques',
          texte:
            'Selon la convention de Tukey, la plus utilisée en pratique, une observation est considérée comme une valeur atypique (outlier) si elle est inférieure à Q1 - 1,5 x IQR ou supérieure à Q3 + 1,5 x IQR. Ce seuil est une convention graphique et ne constitue pas un test statistique.',
        },
        {
          type: 'liste',
          items: [
            'La position de la médiane dans la boîte renseigne sur la symétrie de la distribution.',
            'La longueur de la boîte (IQR) renseigne sur la dispersion des 50 % centraux des valeurs.',
            'La longueur des moustaches renseigne sur l’étendue des valeurs non atypiques.',
            'Les points isolés au-delà des moustaches signalent les valeurs atypiques à examiner.',
          ],
        },
      ],
    },
  ],
  pointsCles: [
    'Le type de variable (qualitative nominale ou ordinale, quantitative discrète ou continue) détermine les paramètres calculables et le graphique adapté.',
    'L’histogramme (rectangles jointifs) décrit une variable continue ; le diagramme en bâtons (valeurs isolées) décrit une variable discrète.',
    'La moyenne est sensible aux valeurs extrêmes ; la médiane, fondée sur le rang, y est beaucoup moins sensible.',
    'Le mode est le seul paramètre de position calculable pour une variable qualitative.',
    'La variance d’un échantillon se calcule en divisant par (n - 1) et non par n, pour obtenir un estimateur sans biais.',
    'L’écart-type s’exprime dans l’unité de la variable ; le coefficient de variation est sans unité et permet des comparaisons entre séries hétérogènes.',
    'L’écart interquartile (IQR = Q3 - Q1) et la boîte à moustaches donnent une image rapide de la dispersion et de l’asymétrie d’une distribution.',
  ],
  erreursFrequentes: [
    'Tracer un histogramme pour une variable discrète ou qualitative : seule une variable continue justifie des rectangles jointifs.',
    'Diviser par n au lieu de (n - 1) lors du calcul de la variance d’un échantillon destinée à estimer la variance de la population.',
    'Confondre coefficient de variation et écart-type : le premier est sans unité, le second est exprimé dans l’unité de la variable.',
    'Croire que la moyenne est toujours le meilleur résumé d’une distribution : en cas de forte asymétrie ou de valeurs extrêmes, la médiane est plus robuste.',
    'Oublier qu’un code numérique peut coder une variable qualitative (numéro de service, code postal) et lui appliquer à tort une moyenne.',
    'Considérer les bornes de la boîte à moustaches (1,5 x IQR) comme un test statistique formel, alors qu’il s’agit d’une simple convention graphique.',
  ],
  mnemotechniques: [
    {
      moyen: '« QQOQCP » de la variable : Qualitative ou Quantitative, Ordinale Ou Continue',
      explication:
        'Avant tout calcul, se demander successivement si la variable est qualitative ou quantitative, puis, selon le cas, ordinale ou nominale, discrète ou continue.',
    },
    {
      moyen: 'n - 1, la population manquante',
      explication:
        'Retenir que diviser par (n - 1) « corrige » le fait qu’un degré de liberté a été consommé par le calcul de la moyenne de l’échantillon, elle-même utilisée pour calculer les écarts.',
    },
    {
      moyen: 'Boîte = Q1-Q3, moustaches = 1,5 fois la boîte',
      explication: 'La boîte représente l’écart interquartile ; chaque moustache s’étend au maximum sur une fois et demie la longueur de cette boîte.',
    },
  ],
  sources: [
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
    'Schwartz D., Méthodes statistiques à l’usage des médecins et des biologistes, Flammarion Médecine-Sciences',
    'Saporta G., Probabilités, analyse des données et statistique, Technip',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-statistique-descriptive-fc-01',
      recto: 'Quels sont les quatre types de variables statistiques ?',
      verso: 'Qualitative nominale, qualitative ordinale, quantitative discrète, quantitative continue.',
      type: 'classification',
      tags: ['types de variables'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-02',
      recto: 'Quel graphique convient à une variable quantitative continue ?',
      verso: 'L’histogramme, dont les rectangles sont jointifs et dont la surface (pas seulement la hauteur) est proportionnelle à l’effectif de chaque classe.',
      type: 'definition',
      tags: ['représentation graphique'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-03',
      recto: 'Donner la formule de la moyenne arithmétique.',
      verso: 'm = (1/n) x Σ xi, somme des valeurs divisée par leur nombre.',
      type: 'formule',
      tags: ['moyenne'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-04',
      recto: 'Comment calculer la médiane d’une série de taille n paire ?',
      verso: 'C’est la demi-somme des deux valeurs centrales, de rangs n/2 et n/2 + 1, une fois la série ordonnée.',
      type: 'mecanisme',
      tags: ['médiane'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-05',
      recto: 'Quel est le seul paramètre de position calculable pour une variable qualitative ?',
      verso: 'Le mode : la modalité la plus fréquente.',
      type: 'definition',
      tags: ['mode'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-06',
      recto: 'Par quoi divise-t-on la somme des carrés des écarts pour calculer la variance d’un échantillon ?',
      verso: 'Par (n - 1), et non par n, afin d’obtenir un estimateur sans biais de la variance de la population (correction de Bessel).',
      type: 'chiffre',
      tags: ['variance'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-07',
      recto: 'Comment obtient-on l’écart-type à partir de la variance ?',
      verso: 'L’écart-type est la racine carrée de la variance : s = racine(s²).',
      type: 'formule',
      tags: ['écart-type'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-08',
      recto: 'À quoi sert le coefficient de variation ?',
      verso: 'À comparer la dispersion relative de deux séries d’unités ou d’ordres de grandeur différents ; il vaut CV = s/m, sans unité.',
      type: 'mecanisme',
      tags: ['coefficient de variation'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-09',
      recto: 'Que représente l’écart interquartile IQR ?',
      verso: 'IQR = Q3 - Q1 : l’intervalle contenant les 50 % centraux des observations.',
      type: 'definition',
      tags: ['quartiles'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-10',
      recto: 'Selon la convention de Tukey, à partir de quel seuil une valeur est-elle atypique dans une boîte à moustaches ?',
      verso: 'Au-delà de Q1 - 1,5 x IQR ou de Q3 + 1,5 x IQR.',
      type: 'chiffre',
      tags: ['boîte à moustaches'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-11',
      recto: 'Que traduit une moyenne supérieure à la médiane ?',
      verso: 'Une distribution étalée vers les valeurs élevées (asymétrie à droite), qui tire la moyenne vers le haut.',
      type: 'mecanisme',
      tags: ['asymétrie'],
    },
    {
      id: 'ue4-statistique-descriptive-fc-12',
      recto: 'Un numéro de service hospitalier est-il une variable quantitative ?',
      verso: 'Non : malgré son apparence numérique, c’est une variable qualitative nominale, sur laquelle une moyenne n’a aucun sens.',
      type: 'clinique',
      tags: ['pièges'],
    },
  ],
  qcm: [
    {
      id: 'ue4-statistique-descriptive-qcm-01',
      enonce: 'Concernant les types de variables statistiques, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le stade d’une tumeur (I, II, III, IV) est une variable qualitative ordinale.',
          vraie: true,
          justification: 'Les stades sont des modalités ordonnées entre elles, mais les écarts entre stades ne sont pas mesurables : c’est bien une variable ordinale.',
        },
        {
          lettre: 'B',
          texte: 'Le nombre de globules blancs comptés dans un champ microscopique est une variable quantitative continue.',
          vraie: false,
          justification: 'Un comptage donne des valeurs entières isolées : c’est une variable quantitative discrète.',
        },
        {
          lettre: 'C',
          texte: 'Le groupe sanguin ABO est une variable qualitative nominale.',
          vraie: true,
          justification: 'Les modalités (A, B, AB, O) n’ont pas d’ordre naturel entre elles.',
        },
        {
          lettre: 'D',
          texte: 'La glycémie est une variable quantitative continue.',
          vraie: true,
          justification: 'Elle peut en théorie prendre toute valeur d’un intervalle, seule la précision de la mesure limite le nombre de décimales observées.',
        },
        {
          lettre: 'E',
          texte: 'Un code postal peut légitimement faire l’objet d’un calcul de moyenne.',
          vraie: false,
          justification: 'Malgré son apparence numérique, un code postal est une variable qualitative nominale : la moyenne n’a pas de sens.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Toujours vérifier la nature réelle d’une variable avant de choisir un paramètre ou un graphique.',
      difficulte: 1,
    },
    {
      id: 'ue4-statistique-descriptive-qcm-02',
      enonce: 'Concernant les représentations graphiques, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Dans un histogramme, les rectangles sont jointifs.',
          vraie: true,
          justification: 'La variable étant continue, il n’existe pas d’espace naturel entre les classes.',
        },
        {
          lettre: 'B',
          texte: 'Dans un diagramme en bâtons, la surface de chaque bâton est proportionnelle à l’effectif.',
          vraie: false,
          justification: 'C’est la hauteur, et non la surface, qui est proportionnelle à l’effectif dans un diagramme en bâtons.',
        },
        {
          lettre: 'C',
          texte: 'Un diagramme en secteurs (camembert) convient à une variable qualitative nominale.',
          vraie: true,
          justification: 'Il permet de visualiser la part de chaque modalité dans l’effectif total, sans notion d’ordre.',
        },
        {
          lettre: 'D',
          texte: 'Un diagramme en barres pour une variable ordinale doit respecter l’ordre des modalités.',
          vraie: true,
          justification: 'L’ordre naturel des modalités doit être conservé, sous peine de perdre l’information portée par la variable.',
        },
        {
          lettre: 'E',
          texte: 'Dans un histogramme, la surface de chaque rectangle est proportionnelle à l’effectif de la classe.',
          vraie: true,
          justification: 'C’est essentiel lorsque les classes ont des largeurs inégales : la hauteur seule ne suffit alors pas à représenter l’effectif.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. Bien distinguer histogramme (surface) et diagramme en bâtons (hauteur).',
      difficulte: 2,
    },
    {
      id: 'ue4-statistique-descriptive-qcm-03',
      enonce: 'Concernant la moyenne, la médiane et le mode, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La médiane est toujours égale à la moyenne.',
          vraie: false,
          justification: 'Cette égalité n’est vraie que pour une distribution parfaitement symétrique ; toute asymétrie les sépare.',
        },
        {
          lettre: 'B',
          texte: 'La médiane est moins sensible aux valeurs extrêmes que la moyenne.',
          vraie: true,
          justification: 'La médiane dépend seulement du rang des valeurs centrales, pas de leur valeur exacte.',
        },
        {
          lettre: 'C',
          texte: 'Une distribution peut avoir plusieurs modes.',
          vraie: true,
          justification: 'Une distribution bimodale ou multimodale présente plusieurs valeurs ou classes de fréquence maximale.',
        },
        {
          lettre: 'D',
          texte: 'Le mode n’existe que pour les variables quantitatives.',
          vraie: false,
          justification: 'Le mode se calcule aussi pour une variable qualitative : c’est même le seul paramètre de position qui lui soit applicable.',
        },
        {
          lettre: 'E',
          texte: 'Pour une série de 11 valeurs ordonnées, la médiane est la valeur de rang 6.',
          vraie: true,
          justification: 'Avec n = 11 (impair), la médiane est la valeur de rang (n + 1) / 2 = 6.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir la formule de rang pour n impair et n pair.',
      difficulte: 2,
    },
    {
      id: 'ue4-statistique-descriptive-qcm-04',
      enonce: 'Concernant la variance et l’écart-type d’un échantillon, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La variance d’un échantillon se calcule en divisant par n.',
          vraie: false,
          justification: 'On divise par (n - 1) pour obtenir un estimateur sans biais de la variance de la population.',
        },
        {
          lettre: 'B',
          texte: 'L’écart-type s’exprime dans la même unité que la variable étudiée.',
          vraie: true,
          justification: 'C’est la racine carrée de la variance, ce qui restitue l’unité d’origine.',
        },
        {
          lettre: 'C',
          texte: 'Le coefficient de variation est exprimé dans l’unité de la variable.',
          vraie: false,
          justification: 'Le coefficient de variation (s / m) est un rapport de deux grandeurs de même unité : il est donc sans unité.',
        },
        {
          lettre: 'D',
          texte: 'La variance est toujours positive ou nulle.',
          vraie: true,
          justification: 'C’est une somme de carrés divisée par un nombre positif : elle ne peut jamais être négative.',
        },
        {
          lettre: 'E',
          texte: 'Une variance nulle signifie que toutes les valeurs de la série sont identiques.',
          vraie: true,
          justification: 'Si tous les écarts à la moyenne sont nuls, la série ne comporte qu’une seule valeur.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Le point le plus piégeux reste la division par (n - 1) pour l’échantillon.',
      difficulte: 2,
    },
    {
      id: 'ue4-statistique-descriptive-qcm-05',
      enonce: 'Concernant les quartiles et la boîte à moustaches, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le deuxième quartile correspond à la médiane.',
          vraie: true,
          justification: 'Q2 partage la série en deux effectifs égaux, exactement comme la médiane.',
        },
        {
          lettre: 'B',
          texte: 'L’écart interquartile contient environ 50 % des observations.',
          vraie: true,
          justification: 'Il est délimité par Q1 (25 %) et Q3 (75 %), donc il contient les 50 % centraux.',
        },
        {
          lettre: 'C',
          texte: 'Les moustaches d’une boîte à moustaches représentent toujours les valeurs minimale et maximale de la série.',
          vraie: false,
          justification: 'Elles s’arrêtent à la dernière valeur observée à l’intérieur des bornes de Tukey ; les valeurs au-delà sont représentées à part comme atypiques.',
        },
        {
          lettre: 'D',
          texte: 'Une boîte très asymétrique par rapport à la médiane traduit une distribution non symétrique.',
          vraie: true,
          justification: 'Si la médiane n’est pas centrée entre Q1 et Q3, les deux moitiés centrales de la distribution n’ont pas la même étendue.',
        },
        {
          lettre: 'E',
          texte: 'Le seuil de 1,5 x IQR pour définir une valeur atypique est un test statistique formel.',
          vraie: false,
          justification: 'C’est une convention graphique usuelle (convention de Tukey), pas un test d’hypothèse.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. La boîte à moustaches est un outil descriptif, pas un test.',
      difficulte: 2,
    },
    {
      id: 'ue4-statistique-descriptive-qcm-06',
      enonce: 'Une série de mesures de tension artérielle systolique donne une moyenne de 130 mmHg et une médiane de 122 mmHg. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La distribution est probablement étalée vers les valeurs élevées.',
          vraie: true,
          justification: 'Une moyenne supérieure à la médiane traduit typiquement un étalement (asymétrie) vers les valeurs hautes, souvent dû à quelques mesures très élevées.',
        },
        {
          lettre: 'B',
          texte: 'Dans ce cas, la médiane est un résumé plus robuste que la moyenne face à d’éventuelles valeurs extrêmes.',
          vraie: true,
          justification: 'La médiane n’est pas affectée par la valeur exacte des mesures extrêmes, contrairement à la moyenne.',
        },
        {
          lettre: 'C',
          texte: 'Cela prouve que la distribution est parfaitement symétrique.',
          vraie: false,
          justification: 'C’est l’inverse : l’écart entre moyenne et médiane est justement un signe d’asymétrie.',
        },
        {
          lettre: 'D',
          texte: 'Le coefficient de variation ne peut pas être calculé ici.',
          vraie: false,
          justification: 'La moyenne étant positive (130 mmHg), le coefficient de variation est parfaitement calculable.',
        },
        {
          lettre: 'E',
          texte: 'Cette différence entre moyenne et médiane est incompatible avec une variance élevée.',
          vraie: false,
          justification: 'Rien n’empêche une distribution asymétrique de présenter également une forte dispersion : les deux notions sont indépendantes.',
        },
      ],
      correction: 'Réponses exactes : A et B. Savoir interpréter cliniquement un écart entre moyenne et médiane est une compétence attendue.',
      difficulte: 2,
    },
  ],
};
