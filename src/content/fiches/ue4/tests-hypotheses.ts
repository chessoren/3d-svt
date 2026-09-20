import type { Fiche } from '../../types';

export const ficheTestsHypotheses: Fiche = {
  id: 'ue4-tests-hypotheses',
  ue: 'ue4',
  titre: 'Principe des tests d’hypothèse',
  sousTitre: 'Hypothèses nulle et alternative, risques alpha et bêta, puissance, degré de signification, tests uni et bilatéraux',
  chapitre: 'Estimation et tests',
  ordre: 8,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'hypothèse nulle',
    'hypothèse alternative',
    'risque alpha',
    'risque bêta',
    'puissance',
    'degré de signification',
    'test bilatéral',
  ],
  objectifs: [
    'Formuler l’hypothèse nulle H0 et l’hypothèse alternative H1 d’un test statistique.',
    'Définir les risques de première et de deuxième espèce (alpha et bêta) et la puissance d’un test.',
    'Comprendre et interpréter correctement le degré de signification p.',
    'Distinguer un test unilatéral d’un test bilatéral et choisir le bon selon la question posée.',
    'Interpréter correctement un résultat non significatif.',
  ],
  sections: [
    {
      id: 'hypotheses',
      titre: 'Hypothèse nulle et hypothèse alternative',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Un test d’hypothèse est une procédure statistique permettant de trancher, à partir des données d’un échantillon, entre deux hypothèses concurrentes concernant un ou plusieurs paramètres de la population.',
        },
        {
          type: 'definition',
          terme: 'Hypothèse nulle (H0)',
          definition:
            'Hypothèse d’absence d’effet, d’absence de différence ou d’absence d’association, que le test cherche à mettre en défaut. C’est l’hypothèse de référence, considérée comme vraie tant que les données ne fournissent pas de preuve suffisante du contraire.',
        },
        {
          type: 'definition',
          terme: 'Hypothèse alternative (H1)',
          definition:
            'Hypothèse complémentaire de H0, qui affirme l’existence d’un effet, d’une différence ou d’une association. C’est elle que le chercheur cherche le plus souvent à mettre en évidence.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'La logique du raisonnement par l’absurde',
          texte:
            'Un test d’hypothèse suppose H0 vraie, puis évalue si les données observées sont compatibles avec cette hypothèse. Si les données seraient trop improbables sous H0, on rejette H0 au profit de H1. Ce raisonnement ne permet jamais de « prouver » H0 : on peut seulement la rejeter, ou ne pas parvenir à la rejeter.',
        },
      ],
    },
    {
      id: 'risques-puissance',
      titre: 'Risques alpha et bêta, puissance',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Toute décision statistique fondée sur un échantillon expose à deux types d’erreurs possibles, dont les probabilités sont formalisées par les risques alpha et bêta.',
        },
        {
          type: 'tableau',
          titre: 'Les deux types d’erreurs possibles',
          colonnes: ['Décision du test', 'H0 vraie en réalité', 'H0 fausse en réalité'],
          lignes: [
            ['Rejet de H0', 'Erreur de première espèce (risque alpha)', 'Décision correcte'],
            ['Non-rejet de H0', 'Décision correcte', 'Erreur de deuxième espèce (risque bêta)'],
          ],
        },
        {
          type: 'definition',
          terme: 'Risque alpha (α)',
          definition:
            'Probabilité de rejeter à tort l’hypothèse nulle alors qu’elle est vraie (faux positif). Il est fixé par le chercheur avant l’étude, classiquement à 5 %.',
        },
        {
          type: 'definition',
          terme: 'Risque bêta (β) et puissance',
          definition:
            'Le risque bêta est la probabilité de ne pas rejeter à tort l’hypothèse nulle alors qu’elle est fausse (faux négatif). La puissance du test, égale à 1 - β, est la probabilité de détecter correctement un effet réel lorsqu’il existe.',
        },
        {
          type: 'formule',
          expression: 'Puissance = 1 - β',
          legende: 'La puissance d’un test croît lorsque le risque bêta diminue ; elle augmente notamment avec la taille de l’échantillon et l’ampleur réelle de l’effet recherché.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Alpha et bêta ne se compensent pas librement',
          texte:
            'À taille d’échantillon fixée, diminuer le risque alpha (rendre le critère de rejet plus strict) augmente mécaniquement le risque bêta, et inversement. La seule façon d’améliorer simultanément les deux risques est d’augmenter la taille de l’échantillon.',
        },
      ],
    },
    {
      id: 'degre-signification',
      titre: 'Le degré de signification p',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le résultat d’un test statistique est le plus souvent résumé par une valeur p (p-value), qui synthétise à quel point les données observées sont compatibles avec l’hypothèse nulle.',
        },
        {
          type: 'definition',
          terme: 'Degré de signification p',
          definition:
            'Probabilité, calculée en supposant H0 vraie, d’observer une valeur de la statistique de test au moins aussi extrême que celle effectivement observée dans l’échantillon.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ce que p n’est pas',
          texte:
            'La valeur p n’est ni la probabilité que H0 soit vraie, ni la probabilité que le résultat observé soit dû au hasard, ni la probabilité de se tromper en rejetant H0. C’est une probabilité conditionnelle calculée en supposant H0 vraie : P(données au moins aussi extrêmes | H0 vraie), et non P(H0 vraie | données).',
        },
        {
          type: 'formule',
          expression: 'Rejet de H0 si p < α',
          legende: 'Règle de décision usuelle : le seuil de signification α, fixé à l’avance (classiquement 5 %), sert de seuil de comparaison au degré de signification p calculé sur les données.',
        },
      ],
    },
    {
      id: 'tests-uni-bilateraux',
      titre: 'Tests unilatéraux et bilatéraux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La formulation de l’hypothèse alternative détermine si le test doit être bilatéral ou unilatéral, ce qui modifie la zone de rejet et, pour une même statistique observée, la valeur de p obtenue.',
        },
        {
          type: 'tableau',
          titre: 'Test bilatéral et test unilatéral',
          colonnes: ['Type de test', 'Hypothèse alternative', 'Zone de rejet'],
          lignes: [
            ['Bilatéral', 'H1 : paramètre différent de la valeur de référence (dans un sens ou dans l’autre)', 'Répartie aux deux extrémités de la distribution'],
            ['Unilatéral', 'H1 : paramètre supérieur (ou inférieur) à la valeur de référence', 'Concentrée dans un seul sens de la distribution'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le test bilatéral, choix par défaut',
          texte:
            'En l’absence de justification a priori solide sur le sens attendu de l’effet, le test bilatéral est le choix par défaut et le plus prudent en recherche médicale. Le choix d’un test unilatéral doit être décidé avant l’analyse des données, jamais après avoir observé le sens de l’effet dans l’échantillon, sous peine de biais.',
        },
      ],
    },
    {
      id: 'interpretation',
      titre: 'Interpréter un résultat de test',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Bien interpréter un test statistique suppose de distinguer clairement signification statistique et pertinence clinique, et de ne jamais surinterpréter un résultat non significatif.',
        },
        {
          type: 'etapes',
          titre: 'Démarche générale d’un test d’hypothèse',
          etapes: [
            {
              titre: 'Formuler H0 et H1',
              detail: 'Préciser les deux hypothèses concurrentes et choisir un test bilatéral ou unilatéral avant de voir les données.',
            },
            {
              titre: 'Fixer le risque alpha',
              detail: 'Choisir le seuil de signification, classiquement 5 %, avant l’analyse.',
            },
            {
              titre: 'Calculer la statistique de test et le degré de signification p',
              detail: 'Utiliser la formule adaptée au test choisi (z, t, khi-deux…) à partir des données de l’échantillon.',
            },
            {
              titre: 'Comparer p à α et conclure',
              detail: 'Rejeter H0 si p < α, ne pas rejeter H0 sinon ; interpréter le résultat en tenant compte de la pertinence clinique de l’effet observé.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Un résultat non significatif ne prouve pas l’absence d’effet',
          texte:
            'Ne pas rejeter H0 (résultat non significatif, p ≥ α) ne démontre pas que H0 est vraie : cela signifie seulement que les données disponibles ne permettent pas de la rejeter, ce qui peut aussi traduire un manque de puissance (échantillon trop petit) plutôt qu’une réelle absence d’effet. L’absence de preuve d’un effet n’est pas la preuve de l’absence d’effet.',
        },
      ],
    },
  ],
  pointsCles: [
    'H0 est l’hypothèse d’absence d’effet ; H1 est l’hypothèse d’existence d’un effet, que le test cherche à mettre en évidence.',
    'Le risque alpha est la probabilité de rejeter à tort H0 vraie (faux positif) ; il est fixé avant l’étude, classiquement à 5 %.',
    'Le risque bêta est la probabilité de ne pas rejeter à tort H0 fausse (faux négatif) ; la puissance du test est 1 - β.',
    'Le degré de signification p est la probabilité, sous H0, d’observer une statistique au moins aussi extrême que celle observée ; ce n’est pas la probabilité que H0 soit vraie.',
    'On rejette H0 si p < α ; ne pas rejeter H0 ne prouve jamais que H0 est vraie.',
    'Le choix entre test unilatéral et bilatéral doit être fait avant l’analyse des données, en fonction de la question posée ; le test bilatéral est le choix par défaut.',
    'Un résultat non significatif peut traduire un manque de puissance (échantillon trop petit) plutôt qu’une réelle absence d’effet.',
  ],
  erreursFrequentes: [
    'Interpréter la valeur p comme la probabilité que H0 soit vraie, alors que c’est une probabilité calculée en supposant H0 vraie.',
    'Affirmer qu’un résultat non significatif prouve l’absence d’effet, alors qu’il signifie seulement une absence de preuve suffisante.',
    'Choisir un test unilatéral après avoir observé le sens de l’effet dans les données, ce qui invalide l’interprétation du risque alpha.',
    'Confondre signification statistique (p < α) et pertinence clinique (ampleur réelle et utile de l’effet observé).',
    'Croire qu’il est possible de diminuer simultanément alpha et bêta sans augmenter la taille de l’échantillon.',
    'Interpréter un résultat significatif comme une preuve absolue, en oubliant qu’un risque alpha de 5 % implique qu’un résultat significatif sur vingt peut être un faux positif.',
  ],
  mnemotechniques: [
    {
      moyen: 'Alpha comme accusation, bêta comme innocence manquée',
      explication: 'Le risque alpha correspond à accuser à tort (rejeter H0 vraie) ; le risque bêta correspond à ne pas détecter une culpabilité réelle (ne pas rejeter H0 fausse).',
    },
    {
      moyen: '« p petit, hypothèse nulle qui vacille »',
      explication: 'Plus p est petit, moins les données observées sont compatibles avec H0, et plus l’argument en faveur du rejet de H0 est fort.',
    },
    {
      moyen: 'Absence de preuve n’est pas preuve d’absence',
      explication: 'Un test non significatif ne permet jamais de conclure à l’absence d’effet ; il indique seulement que l’effet, s’il existe, n’a pas pu être mis en évidence avec les données disponibles.',
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
      id: 'ue4-tests-hypotheses-fc-01',
      recto: 'Que représente l’hypothèse nulle H0 ?',
      verso: 'L’hypothèse d’absence d’effet, de différence ou d’association, considérée comme vraie tant qu’elle n’est pas suffisamment mise en défaut par les données.',
      type: 'definition',
      tags: ['H0'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-02',
      recto: 'Que représente le risque alpha ?',
      verso: 'La probabilité de rejeter à tort H0 alors qu’elle est vraie (faux positif), fixée avant l’étude, classiquement à 5 %.',
      type: 'definition',
      tags: ['risque alpha'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-03',
      recto: 'Que représente le risque bêta ?',
      verso: 'La probabilité de ne pas rejeter à tort H0 alors qu’elle est fausse (faux négatif).',
      type: 'definition',
      tags: ['risque bêta'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-04',
      recto: 'Comment se calcule la puissance d’un test ?',
      verso: 'Puissance = 1 - β : probabilité de détecter correctement un effet réel.',
      type: 'formule',
      tags: ['puissance'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-05',
      recto: 'Que représente exactement le degré de signification p ?',
      verso: 'La probabilité, sous H0, d’observer une statistique de test au moins aussi extrême que celle réellement observée.',
      type: 'definition',
      tags: ['degré de signification'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-06',
      recto: 'p est-il la probabilité que H0 soit vraie ?',
      verso: 'Non : p est calculé en supposant H0 vraie, ce n’est pas la probabilité que H0 le soit réellement.',
      type: 'mecanisme',
      tags: ['pièges'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-07',
      recto: 'Quelle est la règle de décision usuelle d’un test d’hypothèse ?',
      verso: 'On rejette H0 si p < α, sinon on ne rejette pas H0.',
      type: 'formule',
      tags: ['décision'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-08',
      recto: 'Un résultat non significatif prouve-t-il que H0 est vraie ?',
      verso: 'Non, il signifie seulement que les données ne permettent pas de rejeter H0 ; cela peut traduire un manque de puissance.',
      type: 'mecanisme',
      tags: ['interprétation'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-09',
      recto: 'Quelle est la différence entre un test bilatéral et un test unilatéral ?',
      verso: 'Le bilatéral teste une différence dans les deux sens possibles ; l’unilatéral teste une différence dans un seul sens prédéfini.',
      type: 'classification',
      tags: ['bilatéral', 'unilatéral'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-10',
      recto: 'Quand doit être décidé le choix entre test unilatéral et bilatéral ?',
      verso: 'Avant l’analyse des données, jamais après avoir observé le sens de l’effet.',
      type: 'mecanisme',
      tags: ['méthodologie'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-11',
      recto: 'Comment évolue le risque bêta quand on diminue le risque alpha, à taille d’échantillon fixée ?',
      verso: 'Il augmente : alpha et bêta évoluent en sens opposé à effectif constant.',
      type: 'mecanisme',
      tags: ['alpha', 'bêta'],
    },
    {
      id: 'ue4-tests-hypotheses-fc-12',
      recto: 'Quel facteur permet d’améliorer simultanément alpha et bêta ?',
      verso: 'Augmenter la taille de l’échantillon.',
      type: 'mecanisme',
      tags: ['puissance'],
    },
  ],
  qcm: [
    {
      id: 'ue4-tests-hypotheses-qcm-01',
      enonce: 'Concernant l’hypothèse nulle et l’hypothèse alternative, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'H0 est généralement l’hypothèse d’absence d’effet ou de différence.',
          vraie: true,
          justification: 'C’est l’hypothèse de référence, que le test cherche à mettre en défaut.',
        },
        {
          lettre: 'B',
          texte: 'Un test statistique peut démontrer que H0 est vraie.',
          vraie: false,
          justification: 'Un test ne permet que de rejeter ou de ne pas rejeter H0, jamais de prouver formellement qu’elle est vraie.',
        },
        {
          lettre: 'C',
          texte: 'H1 est en général l’hypothèse que le chercheur cherche à mettre en évidence.',
          vraie: true,
          justification: 'C’est le plus souvent l’objectif de l’étude : démontrer l’existence d’un effet ou d’une différence.',
        },
        {
          lettre: 'D',
          texte: 'H0 et H1 sont toujours interchangeables sans conséquence sur l’interprétation du test.',
          vraie: false,
          justification: 'Le rôle de H0 (hypothèse testée sous laquelle p est calculé) et de H1 n’est pas symétrique dans l’interprétation.',
        },
        {
          lettre: 'E',
          texte: 'Le raisonnement du test d’hypothèse s’apparente à un raisonnement par l’absurde appliqué à H0.',
          vraie: true,
          justification: 'On suppose H0 vraie et on évalue si les données sont compatibles avec cette hypothèse, avant éventuellement de la rejeter.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir qu’un test ne prouve jamais H0, il ne fait que la rejeter ou non.',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-hypotheses-qcm-02',
      enonce: 'Concernant les risques alpha et bêta, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le risque alpha correspond à un faux positif : rejeter H0 alors qu’elle est vraie.',
          vraie: true,
          justification: 'C’est la définition même du risque de première espèce.',
        },
        {
          lettre: 'B',
          texte: 'Le risque bêta correspond à un faux négatif : ne pas rejeter H0 alors qu’elle est fausse.',
          vraie: true,
          justification: 'C’est la définition même du risque de deuxième espèce.',
        },
        {
          lettre: 'C',
          texte: 'La puissance d’un test est égale à 1 - α.',
          vraie: false,
          justification: 'La puissance est égale à 1 - β, et non 1 - α.',
        },
        {
          lettre: 'D',
          texte: 'Augmenter la taille de l’échantillon peut permettre de diminuer à la fois alpha et bêta.',
          vraie: true,
          justification: 'C’est le seul levier qui améliore simultanément les deux risques, sans compromis entre eux.',
        },
        {
          lettre: 'E',
          texte: 'À taille d’échantillon fixée, diminuer alpha diminue automatiquement bêta.',
          vraie: false,
          justification: 'À effectif constant, rendre le seuil de rejet plus strict (alpha plus petit) augmente au contraire le risque bêta.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien connaître le tableau croisé décision du test / vérité sur H0.',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-hypotheses-qcm-03',
      enonce: 'Concernant le degré de signification p, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'p est la probabilité que H0 soit vraie compte tenu des données.',
          vraie: false,
          justification: 'p est calculé en supposant H0 vraie ; ce n’est pas la probabilité que H0 le soit réellement compte tenu des données.',
        },
        {
          lettre: 'B',
          texte: 'p est la probabilité, sous H0, d’observer une statistique au moins aussi extrême que celle réellement observée.',
          vraie: true,
          justification: 'C’est exactement la définition du degré de signification.',
        },
        {
          lettre: 'C',
          texte: 'Un p très petit rend les données très peu compatibles avec H0.',
          vraie: true,
          justification: 'C’est le principe même de la règle de décision : plus p est petit, plus H0 est mise en défaut par les données.',
        },
        {
          lettre: 'D',
          texte: 'p = 0,03 signifie qu’il y a 3 % de chances que l’effet observé soit dû au hasard.',
          vraie: false,
          justification: 'C’est une reformulation incorrecte fréquente : p est une probabilité conditionnelle sous H0, pas la probabilité que l’effet soit dû au hasard.',
        },
        {
          lettre: 'E',
          texte: 'On rejette H0 lorsque p est inférieur au seuil alpha fixé à l’avance.',
          vraie: true,
          justification: 'C’est la règle de décision usuelle des tests d’hypothèse.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. La mauvaise interprétation de p est l’une des erreurs les plus fréquentes en biostatistique.',
      difficulte: 3,
    },
    {
      id: 'ue4-tests-hypotheses-qcm-04',
      enonce: 'Concernant les tests unilatéraux et bilatéraux, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un test bilatéral teste une différence dans les deux sens possibles.',
          vraie: true,
          justification: 'H1 s’écrit alors « paramètre différent de la valeur de référence », sans préciser de sens.',
        },
        {
          lettre: 'B',
          texte: 'Un test unilatéral est justifié par le simple constat, après analyse des données, que l’effet va dans un sens particulier.',
          vraie: false,
          justification: 'Le choix unilatéral doit être justifié avant l’analyse des données, jamais après avoir observé le sens de l’effet.',
        },
        {
          lettre: 'C',
          texte: 'Le test bilatéral est le choix par défaut en l’absence de justification a priori solide sur le sens attendu de l’effet.',
          vraie: true,
          justification: 'C’est le choix le plus prudent, largement recommandé en recherche médicale.',
        },
        {
          lettre: 'D',
          texte: 'Pour une même statistique observée, un test unilatéral donne généralement une valeur de p plus petite qu’un test bilatéral dans le sens testé.',
          vraie: true,
          justification: 'La zone de rejet unilatérale est concentrée d’un seul côté, ce qui donne un p environ moitié moindre dans le sens testé, comparé au test bilatéral.',
        },
        {
          lettre: 'E',
          texte: 'La zone de rejet d’un test bilatéral est répartie aux deux extrémités de la distribution de la statistique de test.',
          vraie: true,
          justification: 'C’est la conséquence directe d’une hypothèse alternative « différent de », sans direction privilégiée.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. Le choix du type de test doit toujours être fixé avant de voir les résultats.',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-hypotheses-qcm-05',
      enonce: 'Concernant l’interprétation d’un résultat de test statistique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un résultat significatif (p < α) démontre à coup sûr l’existence d’un effet réel.',
          vraie: false,
          justification: 'Un résultat significatif reste soumis au risque alpha : il existe toujours une probabilité résiduelle qu’il s’agisse d’un faux positif.',
        },
        {
          lettre: 'B',
          texte: 'Un résultat non significatif peut être dû à un manque de puissance de l’étude.',
          vraie: true,
          justification: 'Un échantillon trop petit peut empêcher de détecter un effet réel, même modéré à important.',
        },
        {
          lettre: 'C',
          texte: 'Signification statistique et pertinence clinique sont toujours équivalentes.',
          vraie: false,
          justification: 'Un très grand échantillon peut rendre statistiquement significative une différence cliniquement négligeable, et inversement.',
        },
        {
          lettre: 'D',
          texte: 'Sur vingt tests indépendants menés alors que H0 est vraie dans chaque cas, on s’attend en moyenne à observer environ un résultat significatif au seuil de 5 %, uniquement par hasard.',
          vraie: true,
          justification: 'C’est la conséquence directe de la définition du risque alpha fixé à 5 %, soit 1/20.',
        },
        {
          lettre: 'E',
          texte: 'Il est toujours préférable de conclure à une absence d’effet lorsque le test n’est pas significatif.',
          vraie: false,
          justification: 'La conclusion correcte est « on ne peut pas conclure à un effet avec ces données », et non « il n’y a pas d’effet ».',
        },
      ],
      correction: 'Réponses exactes : B et D. La distinction entre signification statistique et certitude, ou entre non-signification et absence d’effet, est essentielle.',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-hypotheses-qcm-06',
      enonce: 'Un essai clinique compare un nouveau traitement à un placebo et obtient p = 0,08 pour le critère principal. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Au seuil habituel de 5 %, ce résultat n’est pas statistiquement significatif.',
          vraie: true,
          justification: 'p = 0,08 est supérieur au seuil α = 0,05 usuellement retenu, donc H0 n’est pas rejetée à ce seuil.',
        },
        {
          lettre: 'B',
          texte: 'Ce résultat prouve que le traitement n’a aucun effet.',
          vraie: false,
          justification: 'Un résultat non significatif ne prouve jamais l’absence d’effet ; il peut refléter un manque de puissance de l’essai.',
        },
        {
          lettre: 'C',
          texte: 'Si l’essai avait inclus davantage de patients, avec un effet réel de même ampleur, la valeur de p aurait pu devenir significative.',
          vraie: true,
          justification: 'Augmenter la taille de l’échantillon augmente la puissance du test, ce qui rend plus probable la détection d’un effet réel existant.',
        },
        {
          lettre: 'D',
          texte: 'Ce résultat signifie qu’il y a 8 % de chances que le traitement soit inefficace.',
          vraie: false,
          justification: 'C’est une confusion classique : p n’est pas la probabilité que H0 (absence d’effet) soit vraie compte tenu des données.',
        },
        {
          lettre: 'E',
          texte: 'Il serait pertinent d’examiner la puissance de l’étude et la taille de l’effet observé avant de conclure.',
          vraie: true,
          justification: 'Ces éléments permettent de distinguer une réelle absence d’effet d’un simple manque de puissance de l’étude.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Un p proche du seuil, sans être significatif, appelle toujours une analyse de la puissance de l’étude.',
      difficulte: 3,
    },
  ],
};
