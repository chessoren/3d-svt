import type { Fiche } from '../../types';

export const ficheEchantillonnageEstimation: Fiche = {
  id: 'ue4-echantillonnage-estimation',
  ue: 'ue4',
  titre: 'Échantillonnage et estimation ponctuelle',
  sousTitre: 'Population, échantillon, fluctuation d’échantillonnage, estimateurs, biais, convergence et distribution de la moyenne et de la proportion',
  chapitre: 'Estimation et tests',
  ordre: 6,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'population',
    'échantillon',
    'fluctuation d’échantillonnage',
    'estimateur',
    'biais',
    'convergence',
    'erreur standard',
  ],
  objectifs: [
    'Distinguer population et échantillon, paramètre et estimateur.',
    'Comprendre la notion de fluctuation d’échantillonnage.',
    'Définir les qualités attendues d’un estimateur : absence de biais et convergence.',
    'Connaître la distribution d’échantillonnage de la moyenne et de la proportion.',
    'Calculer l’erreur standard de la moyenne et de la proportion.',
  ],
  sections: [
    {
      id: 'population-echantillon',
      titre: 'Population et échantillon',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La population est l’ensemble de tous les individus concernés par une question de recherche ; elle est en pratique le plus souvent inaccessible dans son intégralité. L’échantillon est un sous-ensemble de cette population, sur lequel les mesures sont réellement effectuées, dans le but d’en tirer des conclusions généralisables à la population entière.',
        },
        {
          type: 'tableau',
          titre: 'Paramètre de population et statistique d’échantillon',
          colonnes: ['Niveau', 'Notation usuelle', 'Nature'],
          lignes: [
            ['Population', 'μ (moyenne), σ (écart-type), π ou p (proportion)', 'Valeur fixe, en général inconnue'],
            ['Échantillon', 'm ou x̄ (moyenne), s (écart-type), p̂ (proportion observée)', 'Valeur calculée, variable d’un échantillon à l’autre'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Échantillonnage aléatoire simple',
          texte:
            'L’échantillonnage aléatoire simple consiste à tirer au sort les individus de l’échantillon de telle sorte que chaque individu de la population ait la même probabilité d’être inclus. C’est la condition de base pour que les propriétés statistiques usuelles des estimateurs (absence de biais, calcul de l’erreur standard) soient valables.',
        },
      ],
    },
    {
      id: 'fluctuation-echantillonnage',
      titre: 'Fluctuation d’échantillonnage',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Si l’on tire plusieurs échantillons différents dans la même population, la moyenne ou la proportion calculée sur chaque échantillon varie d’un échantillon à l’autre, alors même que la population reste identique. Cette variabilité est la fluctuation d’échantillonnage.',
        },
        {
          type: 'definition',
          terme: 'Fluctuation d’échantillonnage',
          definition:
            'Variabilité naturelle des statistiques calculées (moyenne, proportion) d’un échantillon à l’autre, due au tirage aléatoire des individus, et qui existe même en l’absence de toute erreur de mesure.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Fluctuation d’échantillonnage et erreur de mesure',
          texte:
            'La fluctuation d’échantillonnage n’est pas une erreur de mesure ni un biais de méthode : elle existe même avec une mesure parfaite, du simple fait qu’un échantillon ne contient jamais tous les individus de la population. Elle diminue lorsque la taille de l’échantillon augmente, mais ne disparaît jamais complètement tant que l’échantillon reste plus petit que la population.',
        },
        {
          type: 'paragraphe',
          texte:
            'L’ensemble des valeurs que peut prendre une statistique (par exemple la moyenne) sur tous les échantillons possibles de même taille constitue sa distribution d’échantillonnage, dont la dispersion est mesurée par l’erreur standard.',
        },
      ],
    },
    {
      id: 'estimateurs',
      titre: 'Estimateurs : biais et convergence',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Un estimateur est une statistique calculée à partir d’un échantillon, destinée à approcher un paramètre inconnu de la population. Deux qualités principales sont attendues d’un bon estimateur : l’absence de biais et la convergence.',
        },
        {
          type: 'definition',
          terme: 'Estimateur sans biais',
          definition:
            'Un estimateur est dit sans biais si son espérance mathématique, calculée sur l’ensemble des échantillons possibles, est égale au paramètre de la population qu’il cherche à estimer.',
        },
        {
          type: 'formule',
          expression: 'E(estimateur) = paramètre de la population',
          legende: 'Condition d’absence de biais d’un estimateur : la moyenne théorique de l’estimateur, sur tous les échantillons possibles, coïncide exactement avec le paramètre visé.',
        },
        {
          type: 'definition',
          terme: 'Estimateur convergent',
          definition:
            'Un estimateur est dit convergent (ou consistant) si sa valeur se rapproche du paramètre de la population lorsque la taille de l’échantillon augmente, sa variance tendant vers 0 quand n tend vers l’infini.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La moyenne d’échantillon, estimateur sans biais de la moyenne de population',
          texte:
            'La moyenne d’échantillon m est un estimateur sans biais et convergent de la moyenne de population μ. La proportion d’échantillon p̂ est de même un estimateur sans biais et convergent de la proportion de population p. En revanche, la variance d’échantillon calculée en divisant par n (et non par n - 1) est un estimateur biaisé de la variance de population, ce qui justifie la correction de Bessel déjà vue en statistique descriptive.',
        },
      ],
    },
    {
      id: 'distribution-moyenne-proportion',
      titre: 'Distribution d’échantillonnage de la moyenne et de la proportion',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le théorème central limite permet de préciser la loi suivie par la moyenne et par la proportion d’échantillon lorsque la taille de l’échantillon est suffisamment grande.',
        },
        {
          type: 'formule',
          expression: 'X̄ suit approximativement une loi N( μ , σ / racine(n) )',
          legende: 'Distribution d’échantillonnage de la moyenne pour un grand échantillon : moyenne égale à la moyenne de population μ, écart-type égal à σ / racine(n), appelé erreur standard de la moyenne.',
        },
        {
          type: 'formule',
          expression: 'p̂ suit approximativement une loi N( p , racine( p(1 - p) / n ) )',
          legende: 'Distribution d’échantillonnage de la proportion pour un grand échantillon, sous les conditions np ≥ 5 et n(1 - p) ≥ 5 : moyenne égale à p, écart-type égal à racine(p(1-p)/n), appelé erreur standard de la proportion.',
        },
        {
          type: 'etapes',
          titre: 'Ce qu’il faut retenir sur l’erreur standard',
          etapes: [
            {
              titre: 'Distinguer écart-type et erreur standard',
              detail: 'L’écart-type σ mesure la dispersion des valeurs individuelles ; l’erreur standard mesure la dispersion de la moyenne (ou de la proportion) d’un échantillon à l’autre.',
            },
            {
              titre: 'Observer l’effet de n',
              detail: 'L’erreur standard décroît quand n augmente, en racine(n) : quadrupler la taille de l’échantillon divise l’erreur standard par 2.',
            },
            {
              titre: 'Estimer l’erreur standard en pratique',
              detail: 'Quand σ ou p sont inconnus (cas le plus fréquent), on les remplace par leurs estimations s et p̂ issues de l’échantillon.',
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Erreur standard de la moyenne et de la proportion',
          colonnes: ['Statistique', 'Formule de l’erreur standard', 'Estimation pratique'],
          lignes: [
            ['Moyenne X̄', 'σ / racine(n)', 's / racine(n)'],
            ['Proportion p̂', 'racine( p(1 - p) / n )', 'racine( p̂(1 - p̂) / n )'],
          ],
        },
      ],
    },
  ],
  pointsCles: [
    'La population est décrite par des paramètres fixes (μ, σ, p) ; l’échantillon fournit des estimations variables d’un tirage à l’autre (m, s, p̂).',
    'La fluctuation d’échantillonnage est la variabilité naturelle d’une statistique d’échantillon, indépendante de toute erreur de mesure.',
    'Un estimateur sans biais a une espérance égale au paramètre visé ; un estimateur convergent se rapproche du paramètre quand n augmente.',
    'La moyenne d’échantillon et la proportion d’échantillon sont des estimateurs sans biais et convergents des paramètres de population correspondants.',
    'La distribution d’échantillonnage de la moyenne est approximativement N(μ, σ/racine(n)) pour un grand échantillon.',
    'La distribution d’échantillonnage de la proportion est approximativement N(p, racine(p(1-p)/n)), sous conditions np ≥ 5 et n(1-p) ≥ 5.',
    'L’erreur standard décroît en racine(n) : il faut multiplier la taille de l’échantillon par 4 pour diviser l’erreur standard par 2.',
  ],
  erreursFrequentes: [
    'Confondre écart-type (dispersion des observations individuelles) et erreur standard (dispersion de la moyenne d’échantillon).',
    'Croire que la fluctuation d’échantillonnage disparaît totalement avec un grand échantillon : elle diminue, mais ne s’annule jamais tant que l’échantillon n’est pas la population entière.',
    'Utiliser la variance d’échantillon divisée par n, et non par n - 1, comme estimateur de la variance de population, ce qui introduit un biais.',
    'Oublier de vérifier les conditions np ≥ 5 et n(1 - p) ≥ 5 avant d’utiliser l’approximation normale de la distribution de la proportion.',
    'Penser qu’un estimateur convergent est nécessairement sans biais, ou inversement : ce sont deux qualités indépendantes d’un estimateur.',
    'Diviser l’erreur standard par n au lieu de racine(n) lors d’un raisonnement sur l’effet de la taille d’échantillon.',
  ],
  mnemotechniques: [
    {
      moyen: 'Population fixe, échantillon qui fluctue',
      explication: 'Les paramètres de population (μ, σ, p) sont des constantes inconnues ; les statistiques d’échantillon (m, s, p̂) varient à chaque nouveau tirage.',
    },
    {
      moyen: 'Racine de n divise l’erreur standard',
      explication: 'L’erreur standard décroît en 1/racine(n) : il faut quadrupler n pour diviser l’erreur standard par 2, pas simplement la multiplier par 4.',
    },
    {
      moyen: 'Sans biais = juste en moyenne, convergent = juste à l’arrivée',
      explication: 'Sans biais signifie que l’estimateur est centré sur le paramètre en moyenne ; convergent signifie qu’il s’en rapproche quand n grandit.',
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
      id: 'ue4-echantillonnage-estimation-fc-01',
      recto: 'Quelle est la différence entre un paramètre de population et une statistique d’échantillon ?',
      verso: 'Le paramètre de population (μ, σ, p) est une valeur fixe et en général inconnue ; la statistique d’échantillon (m, s, p̂) est calculée et varie d’un échantillon à l’autre.',
      type: 'definition',
      tags: ['population', 'échantillon'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-02',
      recto: 'Définir la fluctuation d’échantillonnage.',
      verso: 'Variabilité naturelle d’une statistique calculée d’un échantillon à l’autre, due au tirage aléatoire, existant même sans erreur de mesure.',
      type: 'definition',
      tags: ['fluctuation d’échantillonnage'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-03',
      recto: 'Que signifie « estimateur sans biais » ?',
      verso: 'Son espérance, calculée sur tous les échantillons possibles, est égale au paramètre de population qu’il estime.',
      type: 'definition',
      tags: ['estimateur'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-04',
      recto: 'Que signifie « estimateur convergent » ?',
      verso: 'Il se rapproche du paramètre de population quand la taille de l’échantillon augmente, sa variance tendant vers 0.',
      type: 'definition',
      tags: ['estimateur'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-05',
      recto: 'La moyenne d’échantillon est-elle un estimateur sans biais de la moyenne de population ?',
      verso: 'Oui, E(X̄) = μ : la moyenne d’échantillon est un estimateur sans biais et convergent.',
      type: 'mecanisme',
      tags: ['moyenne'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-06',
      recto: 'Donner la formule de l’erreur standard de la moyenne.',
      verso: 'σ / racine(n), estimée en pratique par s / racine(n).',
      type: 'formule',
      tags: ['erreur standard'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-07',
      recto: 'Donner la formule de l’erreur standard de la proportion.',
      verso: 'racine( p(1 - p) / n ), estimée en pratique par racine( p̂(1 - p̂) / n ).',
      type: 'formule',
      tags: ['erreur standard'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-08',
      recto: 'Quelle est la loi approchée de la moyenne d’un grand échantillon ?',
      verso: 'X̄ suit approximativement N(μ, σ / racine(n)).',
      type: 'formule',
      tags: ['distribution de la moyenne'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-09',
      recto: 'Sous quelles conditions la proportion d’échantillon suit-elle approximativement une loi normale ?',
      verso: 'Sous les conditions np ≥ 5 et n(1 - p) ≥ 5.',
      type: 'mecanisme',
      tags: ['distribution de la proportion'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-10',
      recto: 'Quel est l’effet d’une multiplication par 4 de la taille de l’échantillon sur l’erreur standard ?',
      verso: 'L’erreur standard est divisée par 2, car elle varie en 1 / racine(n).',
      type: 'chiffre',
      tags: ['erreur standard'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-11',
      recto: 'La fluctuation d’échantillonnage peut-elle être totalement supprimée en augmentant la taille de l’échantillon ?',
      verso: 'Non, elle diminue mais ne disparaît complètement que si l’échantillon devient égal à la population entière.',
      type: 'mecanisme',
      tags: ['fluctuation d’échantillonnage'],
    },
    {
      id: 'ue4-echantillonnage-estimation-fc-12',
      recto: 'Pourquoi la variance d’échantillon calculée en divisant par n est-elle un estimateur biaisé de la variance de population ?',
      verso: 'Parce qu’elle sous-estime systématiquement la variance de population ; diviser par (n - 1) corrige ce biais.',
      type: 'mecanisme',
      tags: ['biais', 'variance'],
    },
  ],
  qcm: [
    {
      id: 'ue4-echantillonnage-estimation-qcm-01',
      enonce: 'Concernant population et échantillon, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La moyenne de population μ est une valeur fixe, en général inconnue.',
          vraie: true,
          justification: 'C’est un paramètre théorique de la population, distinct de la moyenne calculée sur un échantillon.',
        },
        {
          lettre: 'B',
          texte: 'La moyenne d’échantillon m est identique quel que soit l’échantillon tiré dans la même population.',
          vraie: false,
          justification: 'C’est précisément le contraire : la moyenne d’échantillon varie d’un échantillon à l’autre, c’est la fluctuation d’échantillonnage.',
        },
        {
          lettre: 'C',
          texte: 'L’échantillonnage aléatoire simple donne à chaque individu de la population la même probabilité d’être inclus dans l’échantillon.',
          vraie: true,
          justification: 'C’est la définition même de l’échantillonnage aléatoire simple.',
        },
        {
          lettre: 'D',
          texte: 'Un échantillon est toujours plus grand que la population dont il est issu.',
          vraie: false,
          justification: 'C’est l’inverse : un échantillon est un sous-ensemble, donc de taille inférieure ou égale à celle de la population.',
        },
        {
          lettre: 'E',
          texte: 'Le but de l’étude d’un échantillon est généralement de tirer des conclusions généralisables à la population.',
          vraie: true,
          justification: 'C’est l’objectif central de la statistique inférentielle.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer la nature fixe du paramètre de population de la nature variable de la statistique d’échantillon.',
      difficulte: 1,
    },
    {
      id: 'ue4-echantillonnage-estimation-qcm-02',
      enonce: 'Concernant la fluctuation d’échantillonnage, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle correspond à une erreur de mesure du chercheur.',
          vraie: false,
          justification: 'Elle existe même avec une mesure parfaite : elle résulte uniquement du tirage aléatoire d’un sous-ensemble de la population.',
        },
        {
          lettre: 'B',
          texte: 'Elle diminue quand la taille de l’échantillon augmente.',
          vraie: true,
          justification: 'Plus l’échantillon est grand, plus il est représentatif, donc moins la statistique calculée fluctue d’un échantillon à l’autre.',
        },
        {
          lettre: 'C',
          texte: 'Elle disparaît totalement dès que l’échantillon dépasse 100 individus.',
          vraie: false,
          justification: 'Aucun seuil fixe ne fait disparaître totalement la fluctuation d’échantillonnage, qui persiste tant que l’échantillon n’est pas la population entière.',
        },
        {
          lettre: 'D',
          texte: 'Elle est à l’origine de la nécessité de calculer un intervalle de confiance autour d’une estimation.',
          vraie: true,
          justification: 'C’est justement parce que la statistique d’échantillon fluctue qu’il faut encadrer sa valeur par un intervalle de confiance.',
        },
        {
          lettre: 'E',
          texte: 'Elle concerne uniquement les variables quantitatives, jamais les proportions.',
          vraie: false,
          justification: 'La proportion d’échantillon fluctue également d’un échantillon à l’autre, exactement comme la moyenne.',
        },
      ],
      correction: 'Réponses exactes : B et D. La fluctuation d’échantillonnage justifie directement l’usage des intervalles de confiance.',
      difficulte: 2,
    },
    {
      id: 'ue4-echantillonnage-estimation-qcm-03',
      enonce: 'Concernant les qualités d’un estimateur, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un estimateur sans biais a une espérance égale au paramètre de population estimé.',
          vraie: true,
          justification: 'C’est la définition même de l’absence de biais.',
        },
        {
          lettre: 'B',
          texte: 'Un estimateur convergent voit sa variance tendre vers 0 quand n augmente.',
          vraie: true,
          justification: 'C’est la définition même de la convergence : la statistique se resserre autour du paramètre visé.',
        },
        {
          lettre: 'C',
          texte: 'Sans biais et convergent sont deux qualités strictement équivalentes.',
          vraie: false,
          justification: 'Ce sont deux propriétés distinctes et indépendantes : un estimateur peut être sans biais mais non convergent, ou inversement.',
        },
        {
          lettre: 'D',
          texte: 'La moyenne d’échantillon est un estimateur sans biais et convergent de la moyenne de population.',
          vraie: true,
          justification: 'C’est une propriété fondamentale utilisée dans toute l’estimation statistique.',
        },
        {
          lettre: 'E',
          texte: 'La variance d’échantillon calculée en divisant par n est un estimateur sans biais de la variance de population.',
          vraie: false,
          justification: 'Cette division sous-estime systématiquement la variance de population ; il faut diviser par (n - 1) pour obtenir un estimateur sans biais.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Le point le plus piégeux reste l’indépendance entre absence de biais et convergence.',
      difficulte: 2,
    },
    {
      id: 'ue4-echantillonnage-estimation-qcm-04',
      enonce: 'Concernant la distribution d’échantillonnage de la moyenne, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Pour un grand échantillon, X̄ suit approximativement une loi N(μ, σ / racine(n)).',
          vraie: true,
          justification: 'C’est la conséquence directe du théorème central limite appliqué à la moyenne d’échantillon.',
        },
        {
          lettre: 'B',
          texte: 'L’erreur standard de la moyenne est identique à l’écart-type de la variable dans la population.',
          vraie: false,
          justification: 'L’erreur standard de la moyenne vaut σ / racine(n), toujours inférieure à σ dès que n > 1.',
        },
        {
          lettre: 'C',
          texte: 'Multiplier la taille de l’échantillon par 4 divise l’erreur standard de la moyenne par 2.',
          vraie: true,
          justification: 'L’erreur standard varie en 1 / racine(n) ; racine(4) = 2, donc l’erreur standard est divisée par 2.',
        },
        {
          lettre: 'D',
          texte: 'La moyenne de la distribution d’échantillonnage de X̄ est égale à μ.',
          vraie: true,
          justification: 'Conséquence de l’absence de biais de la moyenne d’échantillon comme estimateur de μ.',
        },
        {
          lettre: 'E',
          texte: 'Quand σ est inconnu, on ne peut jamais estimer l’erreur standard de la moyenne.',
          vraie: false,
          justification: 'On remplace σ par son estimation s issue de l’échantillon : l’erreur standard est alors estimée par s / racine(n).',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Bien retenir l’effet en racine(n) de la taille d’échantillon sur l’erreur standard.',
      difficulte: 2,
    },
    {
      id: 'ue4-echantillonnage-estimation-qcm-05',
      enonce: 'Concernant la distribution d’échantillonnage de la proportion, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'p̂ suit approximativement une loi N(p, racine(p(1-p)/n)) pour un grand échantillon.',
          vraie: true,
          justification: 'C’est la conséquence du théorème central limite appliqué à une proportion, moyenne de variables de Bernoulli.',
        },
        {
          lettre: 'B',
          texte: 'Cette approximation normale nécessite les conditions np ≥ 5 et n(1 - p) ≥ 5.',
          vraie: true,
          justification: 'Ce sont les conditions usuelles pour que l’approximation normale de la proportion soit fiable.',
        },
        {
          lettre: 'C',
          texte: 'L’erreur standard de la proportion dépend de la valeur de p elle-même.',
          vraie: true,
          justification: 'La formule racine(p(1-p)/n) montre explicitement que l’erreur standard dépend de p, contrairement à une variance constante.',
        },
        {
          lettre: 'D',
          texte: 'L’erreur standard de la proportion est maximale quand p est proche de 0 ou de 1.',
          vraie: false,
          justification: 'C’est l’inverse : la fonction p(1-p) est maximale pour p = 0,5, donc l’erreur standard est maximale à ce point et minimale près de 0 ou 1.',
        },
        {
          lettre: 'E',
          texte: 'p̂ est un estimateur sans biais de p.',
          vraie: true,
          justification: 'E(p̂) = p, car p̂ est la moyenne d’une série de variables de Bernoulli indépendantes de paramètre p.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Retenir que l’erreur standard de la proportion est maximale pour p = 0,5.',
      difficulte: 2,
    },
    {
      id: 'ue4-echantillonnage-estimation-qcm-06',
      enonce: 'Un échantillon de 400 patients donne une moyenne de tension artérielle de 128 mmHg, avec un écart-type estimé s = 20 mmHg. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’erreur standard estimée de la moyenne vaut 1 mmHg.',
          vraie: true,
          justification: 's / racine(n) = 20 / racine(400) = 20 / 20 = 1 mmHg.',
        },
        {
          lettre: 'B',
          texte: 'L’écart-type de la population est nécessairement égal à 20 mmHg.',
          vraie: false,
          justification: '20 mmHg n’est qu’une estimation de l’écart-type de population calculée sur cet échantillon, pas sa valeur exacte et certaine.',
        },
        {
          lettre: 'C',
          texte: 'Si l’on avait interrogé 1 600 patients au lieu de 400, l’erreur standard estimée serait environ divisée par 2.',
          vraie: true,
          justification: 'Multiplier n par 4 (de 400 à 1 600) divise l’erreur standard par racine(4) = 2, toutes choses égales par ailleurs.',
        },
        {
          lettre: 'D',
          texte: '128 mmHg est un estimateur ponctuel sans biais de la moyenne de tension artérielle dans la population dont est issu cet échantillon.',
          vraie: true,
          justification: 'La moyenne d’échantillon est, sous échantillonnage aléatoire simple, un estimateur sans biais de la moyenne de population.',
        },
        {
          lettre: 'E',
          texte: 'L’erreur standard mesure ici la dispersion des tensions artérielles individuelles autour de 128 mmHg.',
          vraie: false,
          justification: 'C’est l’écart-type s qui mesure la dispersion individuelle ; l’erreur standard mesure la dispersion de la moyenne d’échantillon elle-même autour de μ.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Toujours bien distinguer écart-type des observations et erreur standard de la moyenne.',
      difficulte: 2,
    },
  ],
};
