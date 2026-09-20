import type { Fiche } from '../../types';

export const ficheTestsDiagnostiques: Fiche = {
  id: 'ue4-tests-diagnostiques',
  ue: 'ue4',
  titre: 'Évaluation des tests diagnostiques',
  sousTitre: 'Sensibilité, spécificité, valeurs prédictives, rapports de vraisemblance, courbe ROC et reproductibilité',
  chapitre: 'Applications médicales',
  ordre: 11,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'sensibilité',
    'spécificité',
    'valeur prédictive positive',
    'valeur prédictive négative',
    'rapport de vraisemblance',
    'courbe ROC',
    'coefficient kappa',
  ],
  objectifs: [
    'Calculer et interpréter la sensibilité et la spécificité d’un test diagnostique.',
    'Calculer et interpréter les valeurs prédictives positive et négative.',
    'Comprendre l’influence de la prévalence sur les valeurs prédictives.',
    'Calculer et interpréter les rapports de vraisemblance positif et négatif.',
    'Comprendre le principe de la courbe ROC et évaluer la reproductibilité d’un test par le coefficient kappa.',
  ],
  sections: [
    {
      id: 'tableau-2x2-diagnostic',
      titre: 'Le tableau 2x2 du test diagnostique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’évaluation d’un test diagnostique repose sur la comparaison de son résultat à un examen de référence (gold standard), permettant de classer chaque sujet dans l’une des quatre cases d’un tableau de contingence 2x2.',
        },
        {
          type: 'tableau',
          titre: 'Tableau 2x2 de référence',
          colonnes: ['', 'Malade (référence +)', 'Non malade (référence -)', 'Total'],
          lignes: [
            ['Test positif', 'Vrais positifs (VP)', 'Faux positifs (FP)', 'VP + FP'],
            ['Test négatif', 'Faux négatifs (FN)', 'Vrais négatifs (VN)', 'FN + VN'],
            ['Total', 'VP + FN (malades)', 'FP + VN (non malades)', 'n (effectif total)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Deux axes de lecture du tableau',
          texte:
            'La sensibilité et la spécificité se lisent en colonnes, à partir du statut réel des sujets (déterminé par l’examen de référence) : elles sont des propriétés intrinsèques du test. Les valeurs prédictives se lisent en lignes, à partir du résultat du test : elles dépendent en plus de la prévalence de la maladie dans la population testée.',
        },
        {
          type: 'etapes',
          titre: 'Méthode d’évaluation d’un test diagnostique face à un examen de référence',
          etapes: [
            {
              titre: 'Construire le tableau 2x2',
              detail: 'Classer chaque sujet selon le résultat du test étudié et son statut réel déterminé par l’examen de référence, pour remplir les quatre cases VP, FP, FN, VN.',
            },
            {
              titre: 'Calculer sensibilité et spécificité',
              detail: 'Se = VP / (VP + FN) en colonne des malades ; Sp = VN / (VN + FP) en colonne des non-malades.',
            },
            {
              titre: 'Calculer les valeurs prédictives',
              detail: 'VPP = VP / (VP + FP) et VPN = VN / (VN + FN), en lignes du résultat du test, en gardant à l’esprit leur dépendance à la prévalence de l’échantillon étudié.',
            },
            {
              titre: 'Compléter par les rapports de vraisemblance si besoin',
              detail: 'Calculer RV+ et RV- pour disposer d’indicateurs synthétiques indépendants de la prévalence, utilisables dans une population différente de celle de l’étude.',
            },
          ],
        },
      ],
    },
    {
      id: 'sensibilite-specificite',
      titre: 'Sensibilité et spécificité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La sensibilité et la spécificité mesurent la capacité intrinsèque d’un test à détecter correctement les malades et les non-malades, indépendamment de la prévalence de la maladie dans la population étudiée.',
        },
        {
          type: 'formule',
          expression: 'Se = VP / (VP + FN) = P(test+ | malade)',
          legende: 'Sensibilité : proportion de malades correctement dépistés par un test positif parmi tous les malades.',
        },
        {
          type: 'formule',
          expression: 'Sp = VN / (VN + FP) = P(test- | non malade)',
          legende: 'Spécificité : proportion de non-malades correctement écartés par un test négatif parmi tous les non-malades.',
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Se souvenir du sens de lecture',
          texte:
            'La sensibilité et la spécificité se calculent en conditionnant par le statut réel (colonne du tableau) : « sachant que le sujet est malade » pour la sensibilité, « sachant que le sujet n’est pas malade » pour la spécificité. Elles ne dépendent donc pas de la prévalence de la maladie dans la population testée.',
        },
      ],
    },
    {
      id: 'valeurs-predictives',
      titre: 'Valeurs prédictives et influence de la prévalence',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les valeurs prédictives répondent à la question inverse de la sensibilité et de la spécificité : sachant le résultat du test, quelle est la probabilité que le statut réel du sujet corresponde à ce résultat ?',
        },
        {
          type: 'formule',
          expression: 'VPP = VP / (VP + FP) = P(malade | test+)',
          legende: 'Valeur prédictive positive : probabilité d’être réellement malade sachant que le test est positif.',
        },
        {
          type: 'formule',
          expression: 'VPN = VN / (VN + FN) = P(non malade | test-)',
          legende: 'Valeur prédictive négative : probabilité de ne réellement pas être malade sachant que le test est négatif.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La prévalence modifie les valeurs prédictives, pas la sensibilité ni la spécificité',
          texte:
            'Contrairement à la sensibilité et à la spécificité, les valeurs prédictives dépendent fortement de la prévalence de la maladie dans la population testée : à sensibilité et spécificité constantes, la VPP diminue et la VPN augmente lorsque la prévalence diminue. C’est pourquoi un test très performant peut avoir une VPP médiocre lorsqu’il est appliqué en dépistage dans une population à faible prévalence.',
        },
        {
          type: 'tableau',
          titre: 'Effet de la prévalence sur la VPP, à Se = 90 % et Sp = 95 % fixées',
          colonnes: ['Prévalence', 'Effet attendu sur la VPP'],
          lignes: [
            ['Élevée (population de patients symptomatiques)', 'VPP élevée'],
            ['Faible (dépistage en population générale)', 'VPP nettement plus basse, à sensibilité et spécificité identiques'],
          ],
        },
      ],
    },
    {
      id: 'rapports-vraisemblance',
      titre: 'Rapports de vraisemblance',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les rapports de vraisemblance combinent sensibilité et spécificité en un seul indicateur, moins dépendant de la prévalence que les valeurs prédictives, et permettant de réviser directement la probabilité de maladie à partir du résultat du test.',
        },
        {
          type: 'formule',
          expression: 'RV+ = Se / (1 - Sp)',
          legende: 'Rapport de vraisemblance positif : de combien le résultat positif du test multiplie la probabilité de maladie. Plus RV+ est élevé (au-delà de 10), plus un test positif est informatif.',
        },
        {
          type: 'formule',
          expression: 'RV- = (1 - Se) / Sp',
          legende: 'Rapport de vraisemblance négatif : plus RV- est proche de 0 (en dessous de 0,1), plus un test négatif est informatif pour écarter la maladie.',
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Intérêt pratique des rapports de vraisemblance',
          texte:
            'Les rapports de vraisemblance permettent d’utiliser la formule de Bayes pour passer directement d’une probabilité de maladie avant le test (prévalence, ou probabilité clinique pré-test) à une probabilité après le test, indépendamment de la population précise dans laquelle le test a été validé, contrairement aux valeurs prédictives qui sont, elles, spécifiques à une prévalence donnée.',
        },
      ],
    },
    {
      id: 'roc-reproductibilite',
      titre: 'Courbe ROC et reproductibilité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Lorsqu’un test diagnostique repose sur une variable quantitative continue (un dosage biologique, par exemple), le choix du seuil de positivité conditionne à la fois la sensibilité et la spécificité obtenues.',
        },
        {
          type: 'definition',
          terme: 'Courbe ROC (Receiver Operating Characteristic)',
          definition:
            'Courbe représentant, pour chaque seuil de positivité possible, la sensibilité (en ordonnée) en fonction de 1 - spécificité (en abscisse). Elle permet de visualiser le compromis entre sensibilité et spécificité selon le seuil choisi, et de comparer la performance globale de plusieurs tests.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Aire sous la courbe ROC (AUC)',
          texte:
            'L’aire sous la courbe ROC (AUC) résume la capacité discriminante globale du test, indépendamment du choix d’un seuil particulier. Une AUC de 0,5 correspond à un test non discriminant (équivalent au hasard, représenté par la diagonale du graphique) ; une AUC de 1 correspond à un test parfaitement discriminant.',
        },
        {
          type: 'definition',
          terme: 'Reproductibilité et coefficient kappa',
          definition:
            'La reproductibilité évalue la concordance entre deux mesures répétées du même test (par deux observateurs différents, ou par le même observateur à deux moments différents). Pour une variable qualitative, elle se mesure par le coefficient kappa de Cohen, qui corrige le pourcentage brut d’accord observé de la part d’accord attendue par le seul effet du hasard.',
        },
        {
          type: 'formule',
          expression: 'κ = (Po - Pe) / (1 - Pe)',
          legende:
            'Coefficient kappa de Cohen, où Po est la proportion d’accord observée entre les deux mesures, et Pe la proportion d’accord attendue par le seul effet du hasard, compte tenu des distributions marginales de chaque mesure.',
        },
      ],
    },
  ],
  pointsCles: [
    'La sensibilité (VP/malades) et la spécificité (VN/non-malades) sont des propriétés intrinsèques du test, indépendantes de la prévalence.',
    'Les valeurs prédictives (VPP, VPN) répondent à la question inverse et dépendent fortement de la prévalence de la maladie dans la population testée.',
    'À Se et Sp constantes, la VPP diminue et la VPN augmente lorsque la prévalence diminue.',
    'RV+ = Se / (1-Sp) et RV- = (1-Se) / Sp permettent de réviser une probabilité de maladie sans dépendre d’une prévalence particulière.',
    'La courbe ROC (sensibilité en fonction de 1-spécificité) résume la performance d’un test à seuil variable ; l’AUC en résume la capacité discriminante globale.',
    'Le coefficient kappa mesure la reproductibilité d’un test qualitatif en corrigeant l’accord observé de l’accord attendu par le hasard.',
    'Sensibilité et spécificité se lisent en colonnes du tableau 2x2 (statut réel) ; valeurs prédictives se lisent en lignes (résultat du test).',
  ],
  erreursFrequentes: [
    'Croire que la sensibilité ou la spécificité varient avec la prévalence de la maladie : ce sont, à l’inverse, les valeurs prédictives qui en dépendent.',
    'Confondre VPP (P(malade|test+)) et sensibilité (P(test+|malade)) : ce sont deux probabilités conditionnelles inverses l’une de l’autre.',
    'Oublier qu’un test très sensible et très spécifique peut avoir une VPP décevante dans une population à faible prévalence, comme le dépistage en population générale.',
    'Interpréter une AUC proche de 0,5 comme le signe d’un bon test, alors qu’elle traduit une absence de capacité discriminante.',
    'Utiliser un pourcentage brut d’accord entre deux observateurs sans corriger l’effet du hasard, ce qui surestime la reproductibilité réelle.',
    'Penser que le rapport de vraisemblance dépend de la prévalence, alors qu’il ne dépend que de la sensibilité et de la spécificité du test.',
  ],
  mnemotechniques: [
    {
      moyen: 'SpPIn et SeNOut',
      explication: 'Un test très SPécifique, s’il est Positif, permet d’INclure (confirmer) le diagnostic (SpPIn) ; un test très SEnsible, s’il est Négatif, permet d’exclure (Out) le diagnostic (SeNOut).',
    },
    {
      moyen: 'Colonnes pour Se/Sp, lignes pour VPP/VPN',
      explication: 'La sensibilité et la spécificité se calculent à partir des colonnes du tableau (statut réel) ; les valeurs prédictives se calculent à partir des lignes (résultat du test).',
    },
    {
      moyen: 'Kappa corrige le hasard',
      explication: 'Le coefficient kappa n’est rien d’autre qu’un pourcentage d’accord « nettoyé » de la part attribuable au simple hasard.',
    },
  ],
  sources: [
    'Ancelle T., Statistique - Épidémiologie, Maloine',
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
    'Schwartz D., Méthodes statistiques à l’usage des médecins et des biologistes, Flammarion Médecine-Sciences',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-tests-diagnostiques-fc-01',
      recto: 'Donner la formule de la sensibilité.',
      verso: 'Se = VP / (VP + FN) = P(test+ | malade).',
      type: 'formule',
      tags: ['sensibilité'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-02',
      recto: 'Donner la formule de la spécificité.',
      verso: 'Sp = VN / (VN + FP) = P(test- | non malade).',
      type: 'formule',
      tags: ['spécificité'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-03',
      recto: 'Donner la formule de la valeur prédictive positive.',
      verso: 'VPP = VP / (VP + FP) = P(malade | test+).',
      type: 'formule',
      tags: ['VPP'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-04',
      recto: 'Donner la formule de la valeur prédictive négative.',
      verso: 'VPN = VN / (VN + FN) = P(non malade | test-).',
      type: 'formule',
      tags: ['VPN'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-05',
      recto: 'La sensibilité dépend-elle de la prévalence de la maladie ?',
      verso: 'Non, c’est une propriété intrinsèque du test, indépendante de la prévalence.',
      type: 'mecanisme',
      tags: ['prévalence'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-06',
      recto: 'Comment évolue la VPP quand la prévalence diminue, à Se et Sp constantes ?',
      verso: 'Elle diminue.',
      type: 'mecanisme',
      tags: ['VPP', 'prévalence'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-07',
      recto: 'Donner la formule du rapport de vraisemblance positif.',
      verso: 'RV+ = Se / (1 - Sp).',
      type: 'formule',
      tags: ['rapport de vraisemblance'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-08',
      recto: 'Donner la formule du rapport de vraisemblance négatif.',
      verso: 'RV- = (1 - Se) / Sp.',
      type: 'formule',
      tags: ['rapport de vraisemblance'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-09',
      recto: 'Que représente la courbe ROC ?',
      verso: 'La sensibilité en fonction de (1 - spécificité) pour chaque seuil de positivité possible d’un test continu.',
      type: 'definition',
      tags: ['courbe ROC'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-10',
      recto: 'Que signifie une AUC de 0,5 ?',
      verso: 'Que le test n’a aucune capacité discriminante, équivalente au hasard.',
      type: 'chiffre',
      tags: ['AUC'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-11',
      recto: 'Donner la formule du coefficient kappa de Cohen.',
      verso: 'κ = (Po - Pe) / (1 - Pe), où Po est l’accord observé et Pe l’accord attendu par hasard.',
      type: 'formule',
      tags: ['kappa'],
    },
    {
      id: 'ue4-tests-diagnostiques-fc-12',
      recto: 'Que mesure le coefficient kappa ?',
      verso: 'La reproductibilité (concordance) d’un test qualitatif entre deux mesures, en corrigeant l’accord observé de la part due au hasard.',
      type: 'definition',
      tags: ['reproductibilité'],
    },
  ],
  qcm: [
    {
      id: 'ue4-tests-diagnostiques-qcm-01',
      enonce: 'Concernant la sensibilité et la spécificité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La sensibilité se calcule chez les sujets réellement malades.',
          vraie: true,
          justification: 'Se = VP / (VP + FN), calculée dans la colonne des malades du tableau 2x2.',
        },
        {
          lettre: 'B',
          texte: 'La spécificité se calcule chez les sujets réellement non malades.',
          vraie: true,
          justification: 'Sp = VN / (VN + FP), calculée dans la colonne des non-malades.',
        },
        {
          lettre: 'C',
          texte: 'La sensibilité et la spécificité varient avec la prévalence de la maladie.',
          vraie: false,
          justification: 'Ce sont des caractéristiques intrinsèques du test, indépendantes de la prévalence de la maladie dans la population testée.',
        },
        {
          lettre: 'D',
          texte: 'Un test parfait aurait une sensibilité et une spécificité égales à 100 %.',
          vraie: true,
          justification: 'Il ne produirait alors ni faux négatif ni faux positif.',
        },
        {
          lettre: 'E',
          texte: 'La sensibilité est égale à P(malade | test+).',
          vraie: false,
          justification: 'C’est la définition de la VPP, pas de la sensibilité, qui est P(test+ | malade).',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien distinguer le sens du conditionnement entre sensibilité et VPP.',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-diagnostiques-qcm-02',
      enonce: 'Concernant les valeurs prédictives, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La VPP dépend de la prévalence de la maladie dans la population testée.',
          vraie: true,
          justification: 'C’est une propriété fondamentale des valeurs prédictives, contrairement à la sensibilité et à la spécificité.',
        },
        {
          lettre: 'B',
          texte: 'À sensibilité et spécificité identiques, un test appliqué en dépistage de masse (faible prévalence) a en général une VPP plus faible qu’appliqué chez des patients symptomatiques (prévalence élevée).',
          vraie: true,
          justification: 'C’est la conséquence directe de la dépendance de la VPP à la prévalence.',
        },
        {
          lettre: 'C',
          texte: 'La VPN est la probabilité d’être malade sachant que le test est négatif.',
          vraie: false,
          justification: 'C’est l’inverse : la VPN est la probabilité de NE PAS être malade sachant que le test est négatif.',
        },
        {
          lettre: 'D',
          texte: 'VPP + VPN = 1 systématiquement.',
          vraie: false,
          justification: 'VPP et VPN ne sont pas des probabilités complémentaires ; elles ne se calculent pas sur la même population (test positif contre test négatif) et leur somme n’a aucune raison de valoir 1.',
        },
        {
          lettre: 'E',
          texte: 'La VPP est calculée en conditionnant par le résultat positif du test.',
          vraie: true,
          justification: 'VPP = P(malade | test+), donc en conditionnant bien par le résultat du test.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. L’influence de la prévalence sur la VPP est l’un des points les plus testés en UE4.',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-diagnostiques-qcm-03',
      enonce: 'Concernant les rapports de vraisemblance, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'RV+ = Se / (1 - Sp).',
          vraie: true,
          justification: 'C’est la formule exacte du rapport de vraisemblance positif.',
        },
        {
          lettre: 'B',
          texte: 'RV- = (1 - Se) / Sp.',
          vraie: true,
          justification: 'C’est la formule exacte du rapport de vraisemblance négatif.',
        },
        {
          lettre: 'C',
          texte: 'Un RV+ élevé (au-delà de 10) rend un test positif très informatif pour confirmer la maladie.',
          vraie: true,
          justification: 'Plus RV+ est grand, plus un résultat positif augmente fortement la probabilité de maladie.',
        },
        {
          lettre: 'D',
          texte: 'Un RV- proche de 0 (en dessous de 0,1) rend un test négatif très informatif pour écarter la maladie.',
          vraie: true,
          justification: 'Plus RV- est proche de 0, plus un résultat négatif diminue fortement la probabilité de maladie.',
        },
        {
          lettre: 'E',
          texte: 'Les rapports de vraisemblance dépendent de la prévalence de la maladie, comme les valeurs prédictives.',
          vraie: false,
          justification: 'Ils ne dépendent que de la sensibilité et de la spécificité du test, pas de la prévalence, ce qui constitue leur principal intérêt sur les valeurs prédictives.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et D. L’indépendance des rapports de vraisemblance vis-à-vis de la prévalence est leur atout majeur.',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-diagnostiques-qcm-04',
      enonce: 'Concernant la courbe ROC, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle représente la sensibilité en fonction de (1 - spécificité) pour différents seuils de positivité.',
          vraie: true,
          justification: 'C’est exactement la définition de la courbe ROC.',
        },
        {
          lettre: 'B',
          texte: 'Une AUC de 1 correspond à un test parfaitement discriminant.',
          vraie: true,
          justification: 'Un test parfait atteint 100 % de sensibilité pour 0 % de faux positifs, ce qui correspond à une AUC de 1.',
        },
        {
          lettre: 'C',
          texte: 'Une AUC de 0,5 correspond à un test parfaitement discriminant.',
          vraie: false,
          justification: 'Une AUC de 0,5 correspond au contraire à un test non discriminant, équivalent à un tirage au hasard.',
        },
        {
          lettre: 'D',
          texte: 'La courbe ROC permet de choisir un seuil de positivité en tenant compte du compromis entre sensibilité et spécificité.',
          vraie: true,
          justification: 'C’est l’un de ses principaux usages pratiques, chaque point de la courbe correspondant à un seuil différent.',
        },
        {
          lettre: 'E',
          texte: 'La courbe ROC ne s’utilise que pour des tests fournissant un résultat qualitatif binaire.',
          vraie: false,
          justification: 'Elle est au contraire particulièrement utile pour des tests quantitatifs continus, dont le seuil de positivité doit être choisi.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir l’interprétation opposée des valeurs d’AUC proches de 0,5 et de 1.',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-diagnostiques-qcm-05',
      enonce: 'Concernant la reproductibilité et le coefficient kappa, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le coefficient kappa corrige le pourcentage brut d’accord de la part attribuable au hasard.',
          vraie: true,
          justification: 'C’est exactement l’objet de la formule κ = (Po - Pe) / (1 - Pe).',
        },
        {
          lettre: 'B',
          texte: 'Un pourcentage brut d’accord élevé garantit à lui seul une bonne reproductibilité corrigée du hasard.',
          vraie: false,
          justification: 'Un pourcentage brut élevé peut en partie résulter du hasard, notamment si une modalité est très fréquente ; le kappa corrige ce biais.',
        },
        {
          lettre: 'C',
          texte: 'La reproductibilité évalue la concordance entre deux mesures répétées du même test.',
          vraie: true,
          justification: 'C’est la définition même de la reproductibilité, par exemple entre deux observateurs différents.',
        },
        {
          lettre: 'D',
          texte: 'Le kappa peut être utilisé pour évaluer l’accord entre deux radiologues interprétant les mêmes clichés.',
          vraie: true,
          justification: 'C’est une application classique du coefficient kappa en évaluation de la reproductibilité inter-observateur.',
        },
        {
          lettre: 'E',
          texte: 'Le kappa mesure la validité d’un test par rapport à un examen de référence, au même titre que la sensibilité.',
          vraie: false,
          justification: 'Le kappa mesure la reproductibilité (concordance entre deux mesures du même test), pas la validité par rapport à une référence externe.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Bien distinguer reproductibilité (kappa) et validité diagnostique (sensibilité, spécificité).',
      difficulte: 2,
    },
    {
      id: 'ue4-tests-diagnostiques-qcm-06',
      enonce: 'Un test de dépistage a une sensibilité de 95 % et une spécificité de 90 %. Il est appliqué à une population où la prévalence de la maladie est de 1 %. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La sensibilité et la spécificité du test restent respectivement 95 % et 90 % dans cette population.',
          vraie: true,
          justification: 'Ces deux paramètres sont des propriétés intrinsèques du test, indépendantes de la prévalence.',
        },
        {
          lettre: 'B',
          texte: 'La VPP dans cette population sera probablement faible, malgré les bonnes performances intrinsèques du test.',
          vraie: true,
          justification: 'Avec une prévalence aussi faible (1 %), même un bon test génère un nombre de faux positifs souvent supérieur au nombre de vrais positifs, ce qui abaisse fortement la VPP.',
        },
        {
          lettre: 'C',
          texte: 'Le rapport de vraisemblance positif de ce test est indépendant de cette prévalence de 1 %.',
          vraie: true,
          justification: 'RV+ = Se / (1-Sp) ne dépend que de Se et Sp, pas de la prévalence de la population testée.',
        },
        {
          lettre: 'D',
          texte: 'La VPN sera probablement très élevée dans cette population à faible prévalence.',
          vraie: true,
          justification: 'Quand la prévalence est faible, la grande majorité des sujets testés négatifs sont effectivement non malades, ce qui élève la VPN.',
        },
        {
          lettre: 'E',
          texte: 'Cette situation illustre pourquoi un test de dépistage en population générale doit être interprété avec prudence malgré de bonnes sensibilité et spécificité.',
          vraie: true,
          justification: 'C’est exactement la limite pratique des tests de dépistage en population à faible prévalence, qui explique le recours fréquent à un test de confirmation.',
        },
      ],
      correction: 'Réponses exactes : A, B, C, D et E. Cet exemple synthétise l’ensemble des notions de la fiche : Se/Sp fixes, VPP/VPN dépendantes de la prévalence, RV indépendant de la prévalence.',
      difficulte: 3,
    },
  ],
};
