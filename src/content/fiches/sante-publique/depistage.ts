import type { Fiche } from '../../types';

export const ficheDepistage: Fiche = {
  id: 'sante-publique-depistage',
  ue: 'sante-publique',
  titre: 'Le dépistage',
  sousTitre: "Critères de Wilson et Jungner, performances d’un test, biais d’avance au diagnostic et de sur-diagnostic",
  chapitre: 'Prévention et système de santé',
  ordre: 7,
  duree: 24,
  difficulte: 3,
  motsCles: [
    'dépistage organisé',
    'dépistage individuel',
    'critères de Wilson et Jungner',
    'sensibilité',
    'spécificité',
    'valeur prédictive',
    'biais d’avance au diagnostic',
    'sur-diagnostic',
  ],
  objectifs: [
    "Distinguer dépistage organisé et dépistage individuel.",
    "Connaître les critères de Wilson et Jungner qui justifient la mise en place d’un dépistage.",
    "Calculer et interpréter la sensibilité, la spécificité, les valeurs prédictives et le rapport de vraisemblance d’un test.",
    "Différencier biais d’avance au diagnostic et biais de sur-diagnostic.",
    "Connaître les principes d’évaluation d’un programme de dépistage.",
  ],
  sections: [
    {
      id: 'organise-individuel',
      titre: 'Dépistage organisé et dépistage individuel',
      blocs: [
        {
          type: 'definition',
          terme: 'Dépistage',
          definition:
            "Démarche visant à identifier, à l’aide d’un test, une maladie ou un facteur de risque chez des personnes asymptomatiques, apparemment en bonne santé, afin de proposer une prise en charge précoce.",
        },
        {
          type: 'comparaison',
          titre: 'Deux modalités de dépistage',
          gauche: {
            titre: 'Dépistage organisé',
            points: [
              'Proposé de façon systématique à toute une population cible définie',
              'Encadré par un cahier des charges et un programme national ou régional',
              "Assorti d’un contrôle de qualité et d’une évaluation collective",
              'Objectif de santé publique, à l’échelle populationnelle',
            ],
          },
          droite: {
            titre: 'Dépistage individuel (opportuniste)',
            points: [
              "Réalisé à l’initiative du praticien ou du patient, au cas par cas",
              'Non standardisé par un cahier des charges national',
              'Moins évalué collectivement en termes de couverture et d’impact',
              'Réponse à une situation individuelle particulière',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: "Diagnostic précoce et dépistage : une nuance",
          texte:
            "Le dépistage s’adresse par définition à des personnes asymptomatiques. Dès qu’un symptôme motive la recherche d’une maladie, on parle de diagnostic précoce et non plus de dépistage au sens strict.",
        },
      ],
    },
    {
      id: 'criteres-wilson-jungner',
      titre: 'Les critères de Wilson et Jungner',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Publiés par l’Organisation mondiale de la santé en 1968, les critères de Wilson et Jungner constituent le cadre de référence historique pour juger de la pertinence de mettre en place un programme de dépistage à l’échelle d’une population.",
        },
        {
          type: 'tableau',
          titre: "Principaux critères de Wilson et Jungner",
          colonnes: ['Domaine', 'Critère'],
          lignes: [
            ['La maladie', "Constitue un problème de santé important, avec une histoire naturelle bien connue, incluant une phase de latence détectable"],
            ['Le test', "Est valide, fiable, acceptable pour la population et d’un coût raisonnable"],
            ['Le traitement', "Un traitement efficace de la maladie dépistée précocement doit exister et être accessible"],
            ['Le programme', "Le dépistage et la prise en charge qui en découle doivent constituer un processus continu, et non un examen isolé"],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le critère souvent oublié : l’existence d’un traitement efficace',
          texte:
            "Dépister une maladie pour laquelle il n’existe aucun traitement efficace, ou aucune prise en charge susceptible de modifier son évolution, n’apporte généralement pas de bénéfice au patient et peut même être délétère, en générant de l’anxiété sans bénéfice thérapeutique en retour.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: "Phase de latence détectable",
          texte:
            "Le dépistage n’a de sens que pour les maladies comportant une phase de latence ou une phase pré-symptomatique suffisamment longue pour permettre une détection utile, avant que les symptômes n’apparaissent spontanément.",
        },
      ],
    },
    {
      id: 'performances-test',
      titre: "Performances d’un test de dépistage",
      blocs: [
        {
          type: 'tableau',
          titre: 'Tableau de contingence test/maladie',
          colonnes: ['', 'Malades', 'Non-malades'],
          lignes: [
            ['Test positif', 'Vrais positifs (VP)', 'Faux positifs (FP)'],
            ['Test négatif', 'Faux négatifs (FN)', 'Vrais négatifs (VN)'],
          ],
        },
        {
          type: 'definition',
          terme: 'Sensibilité',
          definition:
            "Probabilité que le test soit positif chez un sujet réellement malade. Se calcule par VP / (VP + FN). Un test très sensible ne manque que peu de malades (peu de faux négatifs).",
        },
        {
          type: 'definition',
          terme: 'Spécificité',
          definition:
            "Probabilité que le test soit négatif chez un sujet réellement non malade. Se calcule par VN / (VN + FP). Un test très spécifique ne classe à tort que peu de non-malades comme positifs (peu de faux positifs).",
        },
        {
          type: 'definition',
          terme: 'Valeur prédictive positive (VPP)',
          definition:
            "Probabilité qu’un sujet soit réellement malade sachant que son test est positif. Se calcule par VP / (VP + FP). Elle dépend fortement de la prévalence de la maladie dans la population testée.",
        },
        {
          type: 'definition',
          terme: 'Valeur prédictive négative (VPN)',
          definition:
            "Probabilité qu’un sujet soit réellement non malade sachant que son test est négatif. Se calcule par VN / (VN + FN). Elle aussi dépend de la prévalence de la maladie.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Sensibilité et spécificité sont intrinsèques ; les valeurs prédictives dépendent de la prévalence',
          texte:
            "La sensibilité et la spécificité sont des caractéristiques intrinsèques du test, indépendantes de la prévalence de la maladie dans la population testée. Les valeurs prédictives, elles, varient fortement avec la prévalence : plus la maladie est rare, plus la VPP diminue, même pour un test performant.",
        },
        {
          type: 'formule',
          expression: 'Rapport de vraisemblance positif (RVP) = Sensibilité / (1 − Spécificité)',
          legende: "Indicateur combinant sensibilité et spécificité, utile pour évaluer combien un test positif augmente la probabilité de maladie, indépendamment de la prévalence.",
        },
      ],
    },
    {
      id: 'biais-avance-surdiagnostic',
      titre: "Biais d’avance au diagnostic et sur-diagnostic",
      blocs: [
        {
          type: 'definition',
          terme: "Biais d’avance au diagnostic (lead time bias)",
          definition:
            "Biais résultant du fait que le dépistage avance artificiellement la date du diagnostic, sans nécessairement retarder la date du décès. La survie apparente depuis le diagnostic augmente donc mécaniquement, même en l’absence de tout bénéfice réel du dépistage sur l’histoire naturelle de la maladie.",
        },
        {
          type: 'definition',
          terme: 'Sur-diagnostic',
          definition:
            "Diagnostic, grâce au dépistage, d’une maladie qui n’aurait jamais entraîné de symptôme ni de décès du vivant du patient, en l’absence de dépistage. Le sur-diagnostic entraîne un sur-traitement, avec ses risques propres, sans bénéfice réel pour le patient.",
        },
        {
          type: 'tableau',
          titre: 'Différencier les deux biais',
          colonnes: ['Biais', 'Mécanisme', 'Conséquence sur les statistiques de survie'],
          lignes: [
            ["Avance au diagnostic", "Le diagnostic est posé plus tôt, la date du décès ne change pas", "Allongement artificiel de la survie apparente depuis le diagnostic"],
            ["Sur-diagnostic", "Détection de lésions qui n’auraient jamais évolué cliniquement", "Amélioration artificielle des statistiques de survie et de guérison par inclusion de cas qui n’auraient jamais été symptomatiques"],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le bon critère de jugement : la mortalité, pas la survie',
          texte:
            "En raison du biais d’avance au diagnostic et du sur-diagnostic, la survie après diagnostic n’est pas un critère fiable pour juger de l’efficacité d’un programme de dépistage. Le critère de jugement le plus robuste est la mortalité par la maladie dans la population dépistée comparée à une population non dépistée, idéalement évaluée par un essai contrôlé randomisé.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: "Un autre biais à connaître : le biais de sélection des volontaires",
          texte:
            "Les personnes qui participent spontanément à un dépistage ont souvent un profil de santé, d’hygiène de vie ou socio-économique différent de la population générale, ce qui peut fausser la comparaison de la mortalité entre participants et non-participants si l’on ne s’appuie pas sur un essai randomisé.",
        },
      ],
    },
    {
      id: 'evaluation-programme',
      titre: "Évaluation d’un programme de dépistage",
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’évaluation d’un programme de dépistage organisé porte à la fois sur son fonctionnement (indicateurs de processus) et sur son impact réel en santé publique (indicateurs de résultat).",
        },
        {
          type: 'tableau',
          titre: "Indicateurs d’évaluation d’un programme de dépistage",
          colonnes: ['Type d’indicateur', 'Exemples'],
          lignes: [
            ['Indicateurs de processus', "Taux de participation, taux de couverture de la population cible, délai entre test positif et confirmation diagnostique"],
            ['Indicateurs de résultat intermédiaire', "Taux de détection, valeur prédictive positive en situation réelle"],
            ['Indicateurs de résultat final', "Réduction de la mortalité spécifique par la maladie dans la population dépistée"],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordre de grandeur à retenir',
          texte:
            "L’efficacité d’un programme de dépistage organisé, comme celui du cancer du sein ou du cancer colorectal en France, se mesure sur le long terme et nécessite un taux de participation suffisant de la population cible pour produire un impact mesurable sur la mortalité à l’échelle populationnelle.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le dépistage s’adresse par définition à des personnes asymptomatiques ; en présence de symptômes, on parle de diagnostic précoce.",
    "Le dépistage organisé répond à un cahier des charges national, contrairement au dépistage individuel opportuniste.",
    "Les critères de Wilson et Jungner exigent notamment un problème de santé important, un test valide, et un traitement efficace disponible.",
    "La sensibilité et la spécificité sont des caractéristiques intrinsèques du test, indépendantes de la prévalence de la maladie.",
    "Les valeurs prédictives positive et négative dépendent, elles, fortement de la prévalence de la maladie dans la population testée.",
    "Le biais d’avance au diagnostic allonge artificiellement la survie apparente sans retarder le décès.",
    "Le sur-diagnostic détecte des lésions qui n’auraient jamais évolué cliniquement, entraînant un sur-traitement inutile.",
    "La mortalité, et non la survie après diagnostic, est le critère de jugement de référence pour évaluer un programme de dépistage.",
  ],
  erreursFrequentes: [
    "Confondre dépistage et diagnostic précoce, alors que le premier s’adresse par définition à des sujets asymptomatiques.",
    "Oublier le critère de l’existence d’un traitement efficace parmi les critères de Wilson et Jungner.",
    "Croire que la sensibilité et la spécificité varient avec la prévalence de la maladie, alors que ce sont les valeurs prédictives qui en dépendent.",
    "Confondre biais d’avance au diagnostic et sur-diagnostic, deux mécanismes distincts bien que tous deux liés au dépistage.",
    "Utiliser la survie après diagnostic comme critère d’efficacité d’un dépistage, alors qu’elle est biaisée par l’avance au diagnostic et le sur-diagnostic.",
    "Négliger le biais de sélection des volontaires lors de l’interprétation de la mortalité observée chez les participants à un dépistage.",
  ],
  mnemotechniques: [
    {
      moyen: 'SpPin, SeNout',
      explication: "Un test très SPécifique, s’il est Positif, confirme (« rule IN ») ; un test très SEnsible, s’il est Négatif, élimine (« rule OUT ») la maladie.",
    },
    {
      moyen: 'Wilson et Jungner : Maladie, Test, Traitement',
      explication: "Les trois piliers des critères : la maladie doit être grave et bien connue, le test valide et acceptable, le traitement efficace et accessible.",
    },
    {
      moyen: 'Avance = même décès, diagnostic plus tôt',
      explication: "Le biais d’avance au diagnostic ne change pas la date du décès, seulement celle du diagnostic, ce qui gonfle artificiellement la survie apparente.",
    },
  ],
  sources: [
    "Wilson JMG, Jungner G, Principles and Practice of Screening for Disease, Organisation mondiale de la santé, 1968",
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    'Haute Autorité de santé, méthodologie d’évaluation des programmes de dépistage',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-depistage-fc-01',
      recto: 'Le dépistage s’adresse-t-il à des sujets symptomatiques ou asymptomatiques ?',
      verso: 'À des sujets asymptomatiques, apparemment en bonne santé.',
      type: 'definition',
      tags: ['dépistage'],
    },
    {
      id: 'sante-publique-depistage-fc-02',
      recto: 'Différencier dépistage organisé et dépistage individuel.',
      verso: "Le dépistage organisé répond à un cahier des charges national et concerne une population cible définie ; le dépistage individuel est réalisé au cas par cas, à l’initiative du praticien ou du patient.",
      type: 'classification',
      tags: ['dépistage organisé'],
    },
    {
      id: 'sante-publique-depistage-fc-03',
      recto: "Citer les trois grands domaines couverts par les critères de Wilson et Jungner.",
      verso: 'La maladie (gravité, histoire naturelle connue), le test (valide, acceptable), le traitement (efficace, accessible).',
      type: 'classification',
      tags: ['Wilson et Jungner'],
    },
    {
      id: 'sante-publique-depistage-fc-04',
      recto: 'Définir la sensibilité d’un test.',
      verso: "La probabilité que le test soit positif chez un sujet réellement malade : VP / (VP + FN).",
      type: 'formule',
      tags: ['sensibilité'],
    },
    {
      id: 'sante-publique-depistage-fc-05',
      recto: 'Définir la spécificité d’un test.',
      verso: "La probabilité que le test soit négatif chez un sujet réellement non malade : VN / (VN + FP).",
      type: 'formule',
      tags: ['spécificité'],
    },
    {
      id: 'sante-publique-depistage-fc-06',
      recto: "La sensibilité dépend-elle de la prévalence de la maladie ?",
      verso: "Non : la sensibilité et la spécificité sont des caractéristiques intrinsèques du test, indépendantes de la prévalence.",
      type: 'mecanisme',
      tags: ['sensibilité', 'prévalence'],
    },
    {
      id: 'sante-publique-depistage-fc-07',
      recto: 'Définir la valeur prédictive positive.',
      verso: "La probabilité qu’un sujet soit réellement malade sachant que son test est positif : VP / (VP + FP). Elle dépend de la prévalence.",
      type: 'formule',
      tags: ['valeur prédictive'],
    },
    {
      id: 'sante-publique-depistage-fc-08',
      recto: "Qu’est-ce que le biais d’avance au diagnostic ?",
      verso: "Un allongement artificiel de la survie apparente depuis le diagnostic, dû au fait que le diagnostic est posé plus tôt, sans que la date du décès ne change.",
      type: 'mecanisme',
      tags: ['biais d’avance au diagnostic'],
    },
    {
      id: 'sante-publique-depistage-fc-09',
      recto: "Qu’est-ce que le sur-diagnostic ?",
      verso: "Le diagnostic, grâce au dépistage, d’une maladie qui n’aurait jamais entraîné de symptôme ni de décès en l’absence de dépistage.",
      type: 'definition',
      tags: ['sur-diagnostic'],
    },
    {
      id: 'sante-publique-depistage-fc-10',
      recto: "Quel est le meilleur critère de jugement pour évaluer l’efficacité d’un dépistage ?",
      verso: "La mortalité spécifique par la maladie, et non la survie après diagnostic, biaisée par l’avance au diagnostic et le sur-diagnostic.",
      type: 'mecanisme',
      tags: ['évaluation du dépistage'],
    },
    {
      id: 'sante-publique-depistage-fc-11',
      recto: "Citer un exemple d’indicateur de processus d’un programme de dépistage.",
      verso: "Le taux de participation ou le taux de couverture de la population cible.",
      type: 'classification',
      tags: ['évaluation du dépistage'],
    },
    {
      id: 'sante-publique-depistage-fc-12',
      recto: "Pourquoi les volontaires d’un dépistage peuvent-ils biaiser la comparaison de mortalité avec les non-participants ?",
      verso: "Parce qu’ils diffèrent souvent, en matière de santé ou de comportement, de la population générale : c’est le biais de sélection des volontaires.",
      type: 'mecanisme',
      tags: ['biais de sélection'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-depistage-qcm-01',
      enonce: 'Concernant le dépistage, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il concerne des sujets présentant déjà des symptômes évocateurs.', vraie: false, justification: "Faux : par définition, il s’adresse à des sujets asymptomatiques." },
        { lettre: 'B', texte: 'Le dépistage organisé répond à un cahier des charges national.', vraie: true, justification: 'Exact, c’est l’une de ses caractéristiques principales.' },
        { lettre: 'C', texte: 'Le dépistage individuel est systématiquement proposé à toute une population cible.', vraie: false, justification: "Faux : c’est le dépistage organisé qui vise une population cible entière ; l’individuel est opportuniste." },
        { lettre: 'D', texte: 'Un dépistage organisé fait l’objet d’une évaluation collective de sa couverture et de son impact.', vraie: true, justification: 'Exact, c’est l’un des atouts du dépistage organisé par rapport à l’individuel.' },
        { lettre: 'E', texte: "Le diagnostic précoce et le dépistage désignent exactement la même démarche.", vraie: false, justification: "Faux : le diagnostic précoce s’adresse à des sujets déjà symptomatiques." },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 1,
    },
    {
      id: 'sante-publique-depistage-qcm-02',
      enonce: 'Concernant les critères de Wilson et Jungner, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "Ils exigent l’existence d’un traitement efficace de la maladie dépistée.", vraie: true, justification: "Exact, c’est un critère essentiel, souvent oublié." },
        { lettre: 'B', texte: 'Ils ont été publiés par la Haute Autorité de santé française.', vraie: false, justification: "Faux : ils ont été publiés par l’Organisation mondiale de la santé en 1968." },
        { lettre: 'C', texte: "Ils exigent que la maladie comporte une phase de latence détectable.", vraie: true, justification: "Exact, sans cette phase, le dépistage n’a pas d’utilité pratique." },
        { lettre: 'D', texte: "Ils considèrent le coût du test comme un critère indifférent.", vraie: false, justification: "Faux : le test doit être d’un coût raisonnable pour justifier sa mise en œuvre." },
        { lettre: 'E', texte: "Ils exigent que le dépistage s’inscrive dans un processus continu et non un examen isolé.", vraie: true, justification: 'Exact, c’est l’un des critères relatifs au programme lui-même.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-depistage-qcm-03',
      enonce: "Concernant les performances d’un test de dépistage, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: 'La sensibilité mesure la probabilité que le test soit positif chez un malade.', vraie: true, justification: "Exact, c’est sa définition." },
        { lettre: 'B', texte: 'La spécificité varie fortement selon la prévalence de la maladie.', vraie: false, justification: "Faux : c’est une caractéristique intrinsèque du test, indépendante de la prévalence." },
        { lettre: 'C', texte: "La valeur prédictive positive diminue lorsque la prévalence de la maladie diminue, à sensibilité et spécificité identiques.", vraie: true, justification: "Exact, c’est une propriété classique des valeurs prédictives." },
        { lettre: 'D', texte: 'La valeur prédictive négative correspond à VN / (VN + FP).', vraie: false, justification: "Faux : la VPN correspond à VN / (VN + FN). VN / (VN + FP) est la spécificité." },
        { lettre: 'E', texte: 'Un test très sensible génère peu de faux négatifs.', vraie: true, justification: 'Exact, c’est la conséquence directe d’une sensibilité élevée.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 3,
    },
    {
      id: 'sante-publique-depistage-qcm-04',
      enonce: "Concernant le biais d’avance au diagnostic, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Il retarde la date réelle du décès du patient.", vraie: false, justification: "Faux : il avance seulement la date du diagnostic, sans changer la date du décès." },
        { lettre: 'B', texte: "Il allonge artificiellement la survie apparente calculée depuis le diagnostic.", vraie: true, justification: "Exact, c’est le mécanisme central de ce biais." },
        { lettre: 'C', texte: "Il rend la survie après diagnostic peu fiable comme critère d’évaluation du dépistage.", vraie: true, justification: 'Exact, c’est pourquoi on lui préfère la mortalité comme critère de jugement.' },
        { lettre: 'D', texte: "Il est identique au sur-diagnostic.", vraie: false, justification: "Faux : ce sont deux biais distincts, même s’ils concernent tous deux le dépistage." },
        { lettre: 'E', texte: "Il peut donner l’illusion d’un bénéfice du dépistage sur la survie, même en son absence réelle.", vraie: true, justification: "Exact, c’est précisément le piège qu’il faut éviter en évaluation." },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 3,
    },
    {
      id: 'sante-publique-depistage-qcm-05',
      enonce: 'Concernant le sur-diagnostic, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "Il correspond au diagnostic d’une maladie qui n’aurait jamais évolué cliniquement.", vraie: true, justification: "Exact, c’est sa définition." },
        { lettre: 'B', texte: 'Il entraîne un risque de sur-traitement.', vraie: true, justification: "Exact, les patients sur-diagnostiqués sont exposés inutilement aux risques d’un traitement." },
        { lettre: 'C', texte: "Il améliore artificiellement les statistiques de survie et de guérison.", vraie: true, justification: "Exact, en incluant des cas qui n’auraient jamais été symptomatiques parmi les cas « guéris »." },
        { lettre: 'D', texte: 'Il ne concerne que les dépistages individuels, jamais les dépistages organisés.', vraie: false, justification: "Faux : il peut concerner tout type de dépistage, organisé ou individuel." },
        { lettre: 'E', texte: 'Il est sans conséquence pour le patient.', vraie: false, justification: "Faux : il expose au contraire à un sur-traitement et à ses risques propres, sans bénéfice réel." },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-depistage-qcm-06',
      enonce: "Concernant l’évaluation d’un programme de dépistage, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: 'Le taux de participation est un indicateur de processus.', vraie: true, justification: "Exact, il renseigne sur le fonctionnement du programme." },
        { lettre: 'B', texte: 'La réduction de la mortalité spécifique est un indicateur de résultat final.', vraie: true, justification: "Exact, c’est le critère de jugement le plus robuste." },
        { lettre: 'C', texte: 'La survie après diagnostic est le meilleur indicateur pour évaluer un programme de dépistage.', vraie: false, justification: "Faux : elle est biaisée par l’avance au diagnostic et le sur-diagnostic, contrairement à la mortalité." },
        { lettre: 'D', texte: "Les participants volontaires à un dépistage constituent un échantillon parfaitement représentatif de la population générale.", vraie: false, justification: "Faux : ils diffèrent souvent de la population générale, exposant à un biais de sélection." },
        { lettre: 'E', texte: "L’essai contrôlé randomisé est le schéma d’étude idéal pour évaluer l’impact d’un dépistage sur la mortalité.", vraie: true, justification: "Exact, il permet de contrôler le biais de sélection des volontaires par la randomisation." },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 3,
    },
  ],
};
