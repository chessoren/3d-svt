import type { Fiche } from '../../types';

export const ficheVariablesAleatoires: Fiche = {
  id: 'ue4-variables-aleatoires',
  ue: 'ue4',
  titre: 'Variables aléatoires',
  sousTitre: 'Variable discrète et continue, fonction de masse, densité, fonction de répartition, espérance et variance',
  chapitre: 'Descriptive et probabilités',
  ordre: 3,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'variable aléatoire',
    'fonction de masse',
    'densité de probabilité',
    'fonction de répartition',
    'espérance',
    'variance',
  ],
  objectifs: [
    'Distinguer variable aléatoire discrète et variable aléatoire continue.',
    'Définir la fonction de masse d’une variable discrète et la densité d’une variable continue.',
    'Construire et interpréter une fonction de répartition.',
    'Calculer l’espérance et la variance d’une variable aléatoire.',
    'Utiliser les propriétés de linéarité de l’espérance et de la variance.',
  ],
  sections: [
    {
      id: 'notion-variable-aleatoire',
      titre: 'Notion de variable aléatoire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une variable aléatoire est une fonction qui associe à chaque résultat possible d’une expérience aléatoire un nombre réel. Elle permet de transposer le calcul des probabilités sur des événements en un calcul sur des valeurs numériques, ce qui autorise le calcul de paramètres comme l’espérance ou la variance.',
        },
        {
          type: 'tableau',
          titre: 'Variable aléatoire discrète et continue',
          colonnes: ['Type', 'Ensemble des valeurs', 'Outil de description', 'Exemple'],
          lignes: [
            ['Discrète', 'Ensemble fini ou dénombrable de valeurs', 'Fonction de masse (loi de probabilité)', 'Nombre de globules blancs anormaux sur 10 lames'],
            ['Continue', 'Intervalle de nombres réels', 'Fonction de densité', 'Glycémie mesurée avec précision'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une probabilité ponctuelle nulle n’est pas un événement impossible',
          texte:
            'Pour une variable aléatoire continue, la probabilité qu’elle prenne exactement une valeur donnée est nulle : P(X = a) = 0 pour tout réel a. Cela ne signifie pas que cette valeur est impossible, mais que la probabilité se répartit sur un continuum de valeurs et ne peut être concentrée en un seul point.',
        },
      ],
    },
    {
      id: 'variable-discrete',
      titre: 'Variable aléatoire discrète',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une variable aléatoire discrète X prend un nombre fini ou dénombrable de valeurs x1, x2, …, chacune avec une probabilité précise.',
        },
        {
          type: 'definition',
          terme: 'Fonction de masse (loi de probabilité)',
          definition:
            'Fonction qui associe à chaque valeur possible xi de X sa probabilité P(X = xi). Elle vérifie deux conditions : chaque probabilité est comprise entre 0 et 1, et la somme de toutes les probabilités vaut 1.',
        },
        {
          type: 'formule',
          expression: 'Σ P(X = xi) = 1',
          legende: 'Condition de normalisation : la somme des probabilités sur toutes les valeurs possibles de X vaut nécessairement 1.',
        },
        {
          type: 'formule',
          expression: 'F(x) = P(X ≤ x) = Σ (pour xi ≤ x) P(X = xi)',
          legende: 'Fonction de répartition d’une variable discrète : elle cumule les probabilités des valeurs inférieures ou égales à x et se présente sous forme d’escalier.',
        },
        {
          type: 'tableau',
          titre: 'Exemple : nombre de faces obtenues en lançant deux pièces équilibrées',
          colonnes: ['Valeur de X', 'P(X = x)', 'F(x) = P(X ≤ x)'],
          lignes: [
            ['0', '0,25', '0,25'],
            ['1', '0,50', '0,75'],
            ['2', '0,25', '1,00'],
          ],
        },
      ],
    },
    {
      id: 'variable-continue',
      titre: 'Variable aléatoire continue',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une variable aléatoire continue prend ses valeurs dans un intervalle de nombres réels. Sa loi de probabilité n’est plus décrite par des probabilités ponctuelles mais par une fonction de densité.',
        },
        {
          type: 'definition',
          terme: 'Fonction de densité de probabilité',
          definition:
            'Fonction f, positive ou nulle en tout point, telle que la probabilité que X appartienne à un intervalle [a, b] est égale à l’aire sous la courbe de f entre a et b. L’aire totale sous la courbe de f, sur l’ensemble des valeurs possibles, vaut 1.',
        },
        {
          type: 'formule',
          expression: 'P(a ≤ X ≤ b) = aire sous la courbe de f entre a et b',
          legende: 'Interprétation géométrique de la densité : la probabilité correspond à une surface, jamais à la hauteur de la courbe.',
        },
        {
          type: 'formule',
          expression: 'F(x) = P(X ≤ x)',
          legende:
            'Fonction de répartition d’une variable continue : elle correspond à l’aire sous la courbe de densité située à gauche de x. F est croissante, continue, tend vers 0 quand x tend vers moins l’infini et vers 1 quand x tend vers plus l’infini.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Densité et probabilité : ne pas confondre',
          texte:
            'La valeur de la densité f(x) en un point n’est pas une probabilité : elle peut même être supérieure à 1. Seule l’aire sous la courbe, calculée sur un intervalle, correspond à une probabilité.',
        },
      ],
    },
    {
      id: 'esperance-variance',
      titre: 'Espérance et variance',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’espérance et la variance sont les deux paramètres fondamentaux d’une variable aléatoire : ils jouent, au niveau théorique, le rôle que jouent la moyenne et la variance au niveau descriptif d’un échantillon.',
        },
        {
          type: 'definition',
          terme: 'Espérance E(X)',
          definition:
            'Valeur moyenne théorique de la variable aléatoire X, pondérée par les probabilités. Pour une variable discrète, E(X) = Σ xi x P(X = xi). Pour une variable continue, elle se calcule par une intégrale du produit de x et de la densité f(x).',
        },
        {
          type: 'formule',
          expression: 'V(X) = E[(X - E(X))²] = E(X²) - [E(X)]²',
          legende: 'Variance d’une variable aléatoire : moyenne théorique du carré de l’écart à l’espérance. La seconde forme, plus simple à calculer, est algébriquement équivalente à la première.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Propriétés de linéarité',
          texte:
            'Pour toute variable aléatoire X et toutes constantes a et b : E(aX + b) = a x E(X) + b, et V(aX + b) = a² x V(X). L’espérance de la somme de deux variables aléatoires est toujours égale à la somme des espérances, E(X + Y) = E(X) + E(Y), que X et Y soient indépendantes ou non.',
        },
        {
          type: 'tableau',
          titre: 'Additivité de la variance : cas des variables indépendantes',
          colonnes: ['Relation', 'Condition', 'Formule'],
          lignes: [
            ['Somme de deux variables indépendantes', 'X et Y indépendantes', 'V(X + Y) = V(X) + V(Y)'],
            ['Différence de deux variables indépendantes', 'X et Y indépendantes', 'V(X - Y) = V(X) + V(Y)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La variance ne se soustrait jamais',
          texte:
            'Même pour la différence X - Y de deux variables indépendantes, la variance s’additionne : V(X - Y) = V(X) + V(Y), et non V(X) - V(Y). La variance mesure une dispersion, toujours positive, qui ne peut que s’accumuler.',
        },
      ],
    },
    {
      id: 'application-calcul',
      titre: 'Méthode de calcul sur un exemple',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le calcul de l’espérance et de la variance d’une variable discrète suit une méthode systématique, particulièrement utile pour vérifier un exercice pas à pas.',
        },
        {
          type: 'etapes',
          titre: 'Calcul de E(X) et V(X) pour une variable discrète',
          etapes: [
            {
              titre: 'Vérifier la loi de probabilité',
              detail: 'S’assurer que la somme des P(X = xi) vaut bien 1 avant tout calcul.',
            },
            {
              titre: 'Calculer E(X)',
              detail: 'Faire la somme des produits xi x P(X = xi) pour toutes les valeurs possibles.',
            },
            {
              titre: 'Calculer E(X²)',
              detail: 'Faire la somme des produits xi² x P(X = xi).',
            },
            {
              titre: 'En déduire V(X)',
              detail: 'Appliquer V(X) = E(X²) - [E(X)]², puis, si besoin, l’écart-type σ(X) = racine(V(X)).',
            },
          ],
        },
        {
          type: 'formule',
          expression: 'σ(X) = racine(V(X))',
          legende: 'Écart-type d’une variable aléatoire : racine carrée de sa variance, exprimée dans la même unité que la variable.',
        },
      ],
    },
  ],
  pointsCles: [
    'Une variable discrète est décrite par une fonction de masse ; une variable continue est décrite par une fonction de densité.',
    'Pour une variable continue, P(X = a) = 0 pour toute valeur a : seule une aire sous la courbe correspond à une probabilité.',
    'La fonction de répartition F(x) = P(X ≤ x) est croissante, tend vers 0 en moins l’infini et vers 1 en plus l’infini.',
    'L’espérance E(X) généralise la moyenne ; la variance V(X) = E(X²) - [E(X)]² généralise la dispersion.',
    'E(aX + b) = a x E(X) + b et V(aX + b) = a² x V(X) : l’espérance et la variance ne réagissent pas de la même façon à une transformation affine.',
    'E(X + Y) = E(X) + E(Y) est toujours vrai, indépendance ou non ; V(X + Y) = V(X) + V(Y) n’est vrai que si X et Y sont indépendantes.',
    'La variance d’une différence de deux variables indépendantes s’additionne : elle ne se soustrait jamais.',
  ],
  erreursFrequentes: [
    'Confondre la densité f(x) avec une probabilité : seule l’aire sous la courbe sur un intervalle est une probabilité.',
    'Oublier que P(X = a) = 0 pour une variable continue et donc que P(X ≤ a) = P(X < a) dans ce cas.',
    'Appliquer V(aX + b) = a x V(X) au lieu de a² x V(X), en oubliant que la variance porte sur des carrés d’écarts.',
    'Soustraire les variances pour calculer V(X - Y) au lieu de les additionner.',
    'Croire que E(X + Y) = E(X) + E(Y) nécessite l’indépendance de X et Y, alors que cette propriété est toujours vraie.',
    'Oublier de vérifier que la somme des probabilités d’une loi discrète vaut 1 avant de calculer l’espérance.',
  ],
  mnemotechniques: [
    {
      moyen: 'Densité = pente d’escalier, pas une marche',
      explication: 'La densité décrit la « forme » de la répartition des probabilités, mais seule une surface sous la courbe (et non une valeur ponctuelle) donne une probabilité.',
    },
    {
      moyen: 'L’espérance additionne toujours, la variance additionne si indépendance',
      explication: 'E(X + Y) = E(X) + E(Y) sans condition ; V(X + Y) = V(X) + V(Y) seulement si X et Y sont indépendantes.',
    },
    {
      moyen: 'a au carré pour la variance',
      explication: 'Dans V(aX + b), la constante multiplicative a doit être élevée au carré, contrairement à l’espérance où elle reste simple.',
    },
  ],
  sources: [
    'Saporta G., Probabilités, analyse des données et statistique, Technip',
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
    'Schwartz D., Méthodes statistiques à l’usage des médecins et des biologistes, Flammarion Médecine-Sciences',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-variables-aleatoires-fc-01',
      recto: 'Quelle est la différence fondamentale entre variable discrète et variable continue ?',
      verso: 'La discrète prend un nombre fini ou dénombrable de valeurs ; la continue prend ses valeurs dans un intervalle de réels.',
      type: 'classification',
      tags: ['définitions'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-02',
      recto: 'Que vaut P(X = a) pour une variable aléatoire continue ?',
      verso: '0, quelle que soit la valeur a considérée.',
      type: 'chiffre',
      tags: ['variable continue'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-03',
      recto: 'Comment calcule-t-on une probabilité à partir d’une densité f ?',
      verso: 'P(a ≤ X ≤ b) est l’aire sous la courbe de f entre a et b.',
      type: 'mecanisme',
      tags: ['densité'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-04',
      recto: 'Définir la fonction de répartition F(x).',
      verso: 'F(x) = P(X ≤ x) : probabilité cumulée jusqu’à x, croissante, allant de 0 à 1.',
      type: 'definition',
      tags: ['fonction de répartition'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-05',
      recto: 'Donner la formule de l’espérance d’une variable discrète.',
      verso: 'E(X) = Σ xi x P(X = xi).',
      type: 'formule',
      tags: ['espérance'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-06',
      recto: 'Donner la formule pratique de la variance.',
      verso: 'V(X) = E(X²) - [E(X)]².',
      type: 'formule',
      tags: ['variance'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-07',
      recto: 'Comment se transforme l’espérance sous une transformation affine aX + b ?',
      verso: 'E(aX + b) = a x E(X) + b.',
      type: 'formule',
      tags: ['linéarité'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-08',
      recto: 'Comment se transforme la variance sous une transformation affine aX + b ?',
      verso: 'V(aX + b) = a² x V(X) : la constante additive b disparaît, la constante multiplicative a est élevée au carré.',
      type: 'formule',
      tags: ['linéarité'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-09',
      recto: 'E(X + Y) = E(X) + E(Y) nécessite-t-il l’indépendance de X et Y ?',
      verso: 'Non, cette propriété est toujours vraie, que X et Y soient indépendantes ou non.',
      type: 'mecanisme',
      tags: ['linéarité'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-10',
      recto: 'À quelle condition V(X + Y) = V(X) + V(Y) ?',
      verso: 'À condition que X et Y soient indépendantes.',
      type: 'mecanisme',
      tags: ['variance', 'indépendance'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-11',
      recto: 'Que vaut V(X - Y) pour X et Y indépendantes ?',
      verso: 'V(X - Y) = V(X) + V(Y) : la variance s’additionne toujours, même pour une différence.',
      type: 'formule',
      tags: ['variance'],
    },
    {
      id: 'ue4-variables-aleatoires-fc-12',
      recto: 'Comment obtient-on l’écart-type σ(X) à partir de V(X) ?',
      verso: 'σ(X) = racine(V(X)).',
      type: 'formule',
      tags: ['écart-type'],
    },
  ],
  qcm: [
    {
      id: 'ue4-variables-aleatoires-qcm-01',
      enonce: 'Concernant les variables aléatoires discrètes et continues, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une variable aléatoire continue peut être décrite par une fonction de masse.',
          vraie: false,
          justification: 'La fonction de masse décrit une variable discrète ; la variable continue est décrite par une densité.',
        },
        {
          lettre: 'B',
          texte: 'La somme des P(X = xi) sur toutes les valeurs possibles d’une variable discrète vaut 1.',
          vraie: true,
          justification: 'C’est la condition de normalisation de toute loi de probabilité discrète.',
        },
        {
          lettre: 'C',
          texte: 'Le nombre de globules blancs anormaux sur une lame est une variable aléatoire continue.',
          vraie: false,
          justification: 'Il s’agit d’un comptage, donc d’une variable aléatoire discrète.',
        },
        {
          lettre: 'D',
          texte: 'La fonction de répartition d’une variable discrète se présente sous forme d’escalier.',
          vraie: true,
          justification: 'Elle progresse par sauts, à chaque valeur possible de la variable.',
        },
        {
          lettre: 'E',
          texte: 'La densité d’une variable continue peut prendre des valeurs supérieures à 1.',
          vraie: true,
          justification: 'Seule l’aire totale sous la courbe doit valoir 1 ; la hauteur locale de la densité n’est pas bornée par 1.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Bien distinguer fonction de masse (discret) et densité (continu).',
      difficulte: 2,
    },
    {
      id: 'ue4-variables-aleatoires-qcm-02',
      enonce: 'Concernant la fonction de densité et la fonction de répartition d’une variable continue, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'P(a ≤ X ≤ b) correspond à l’aire sous la courbe de densité entre a et b.',
          vraie: true,
          justification: 'C’est la définition géométrique de la probabilité pour une variable continue.',
        },
        {
          lettre: 'B',
          texte: 'F(x) est décroissante.',
          vraie: false,
          justification: 'F(x) = P(X ≤ x) est une fonction croissante, car elle cumule des probabilités.',
        },
        {
          lettre: 'C',
          texte: 'F tend vers 1 quand x tend vers plus l’infini.',
          vraie: true,
          justification: 'À l’infini, tout l’ensemble des valeurs possibles est couvert, donc la probabilité cumulée vaut 1.',
        },
        {
          lettre: 'D',
          texte: 'P(X ≤ a) = P(X < a) pour une variable continue.',
          vraie: true,
          justification: 'Puisque P(X = a) = 0, ajouter ou retirer cette valeur ponctuelle ne change pas la probabilité cumulée.',
        },
        {
          lettre: 'E',
          texte: 'La densité f(x) représente directement la probabilité de la valeur x.',
          vraie: false,
          justification: 'f(x) est une densité, pas une probabilité ; seule une intégrale sur un intervalle donne une probabilité.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. La relation P(X ≤ a) = P(X < a) est spécifique aux variables continues.',
      difficulte: 2,
    },
    {
      id: 'ue4-variables-aleatoires-qcm-03',
      enonce: 'Concernant l’espérance mathématique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'E(X) généralise la notion de moyenne arithmétique.',
          vraie: true,
          justification: 'C’est la moyenne théorique pondérée par les probabilités, équivalent au niveau du modèle de la moyenne descriptive.',
        },
        {
          lettre: 'B',
          texte: 'E(3X + 2) = 3 x E(X) + 2.',
          vraie: true,
          justification: 'Application directe de la formule de linéarité de l’espérance E(aX + b) = a x E(X) + b.',
        },
        {
          lettre: 'C',
          texte: 'E(X + Y) = E(X) + E(Y) uniquement si X et Y sont indépendantes.',
          vraie: false,
          justification: 'L’additivité de l’espérance est toujours vraie, indépendance ou non.',
        },
        {
          lettre: 'D',
          texte: 'E(X) peut être négative.',
          vraie: true,
          justification: 'Rien n’impose que E(X) soit positive : elle dépend des valeurs possibles de X, qui peuvent être négatives.',
        },
        {
          lettre: 'E',
          texte: 'E(X²) est toujours égale à [E(X)]².',
          vraie: false,
          justification: 'Ces deux quantités ne coïncident que si V(X) = 0 ; en général E(X²) = V(X) + [E(X)]², donc E(X²) ≥ [E(X)]².',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Attention à la propriété d’additivité de l’espérance, valable sans condition d’indépendance.',
      difficulte: 2,
    },
    {
      id: 'ue4-variables-aleatoires-qcm-04',
      enonce: 'Concernant la variance d’une variable aléatoire, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'V(X) = E(X²) - [E(X)]².',
          vraie: true,
          justification: 'C’est la formule de calcul pratique de la variance, dite formule de König-Huygens.',
        },
        {
          lettre: 'B',
          texte: 'V(2X) = 2 x V(X).',
          vraie: false,
          justification: 'V(aX) = a² x V(X), donc V(2X) = 4 x V(X).',
        },
        {
          lettre: 'C',
          texte: 'V(X + 5) = V(X).',
          vraie: true,
          justification: 'Ajouter une constante translate la variable sans modifier sa dispersion : V(X + b) = V(X).',
        },
        {
          lettre: 'D',
          texte: 'La variance peut être négative.',
          vraie: false,
          justification: 'C’est une espérance de carré, donc toujours positive ou nulle.',
        },
        {
          lettre: 'E',
          texte: 'Pour X et Y indépendantes, V(X - Y) = V(X) - V(Y).',
          vraie: false,
          justification: 'Même pour une différence, les variances de variables indépendantes s’additionnent : V(X - Y) = V(X) + V(Y).',
        },
      ],
      correction: 'Réponses exactes : A et C. Le piège le plus fréquent porte sur le carré du coefficient multiplicatif et sur l’additivité même pour une différence.',
      difficulte: 2,
    },
    {
      id: 'ue4-variables-aleatoires-qcm-05',
      enonce: 'Une variable aléatoire discrète X prend les valeurs 0, 1 et 2 avec P(X=0) = 0,2 ; P(X=1) = 0,5 ; P(X=2) = 0,3. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La loi de probabilité est correctement normalisée.',
          vraie: true,
          justification: '0,2 + 0,5 + 0,3 = 1,0 : la somme des probabilités vaut bien 1.',
        },
        {
          lettre: 'B',
          texte: 'E(X) = 1,1.',
          vraie: true,
          justification: 'E(X) = 0 x 0,2 + 1 x 0,5 + 2 x 0,3 = 0 + 0,5 + 0,6 = 1,1.',
        },
        {
          lettre: 'C',
          texte: 'F(1) = P(X ≤ 1) = 0,5.',
          vraie: false,
          justification: 'F(1) = P(X=0) + P(X=1) = 0,2 + 0,5 = 0,7.',
        },
        {
          lettre: 'D',
          texte: 'E(X²) = 1,7.',
          vraie: true,
          justification: 'E(X²) = 0² x 0,2 + 1² x 0,5 + 2² x 0,3 = 0 + 0,5 + 1,2 = 1,7.',
        },
        {
          lettre: 'E',
          texte: 'V(X) = 1,7.',
          vraie: false,
          justification: 'V(X) = E(X²) - [E(X)]² = 1,7 - 1,1² = 1,7 - 1,21 = 0,49.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien appliquer méthodiquement les formules Σ xi P(xi) puis Σ xi² P(xi).',
      difficulte: 2,
    },
    {
      id: 'ue4-variables-aleatoires-qcm-06',
      enonce: 'Concernant les propriétés générales de l’espérance et de la variance, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’écart-type se calcule comme la racine carrée de la variance.',
          vraie: true,
          justification: 'σ(X) = racine(V(X)), ce qui restitue l’unité d’origine de la variable.',
        },
        {
          lettre: 'B',
          texte: 'Si V(X) = 0, alors X est une constante presque sûrement.',
          vraie: true,
          justification: 'Une variance nulle signifie une absence totale de dispersion autour de l’espérance : X ne prend qu’une seule valeur.',
        },
        {
          lettre: 'C',
          texte: 'Pour toute variable X, V(X) = E(X) - E(X²).',
          vraie: false,
          justification: 'La formule correcte est V(X) = E(X²) - [E(X)]², et non E(X) - E(X²).',
        },
        {
          lettre: 'D',
          texte: 'E(aX + b) ne dépend pas de b si a = 0.',
          vraie: false,
          justification: 'Si a = 0, E(0 x X + b) = b : le résultat dépend alors entièrement de b.',
        },
        {
          lettre: 'E',
          texte: 'La variance mesure la dispersion des valeurs de X autour de son espérance.',
          vraie: true,
          justification: 'C’est sa définition même : la moyenne théorique du carré des écarts à l’espérance.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. Toujours vérifier une formule sur un cas limite simple, comme a = 0 ou V(X) = 0.',
      difficulte: 2,
    },
  ],
};
