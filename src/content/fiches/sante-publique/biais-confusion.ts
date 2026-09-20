import type { Fiche } from '../../types';

export const ficheBiaisConfusion: Fiche = {
  id: 'sante-publique-biais-confusion',
  ue: 'sante-publique',
  titre: 'Biais et facteurs de confusion',
  sousTitre: "Biais de sélection, de classement, de mémorisation, facteurs de confusion et méthodes de contrôle",
  chapitre: 'Méthodes épidémiologiques',
  ordre: 6,
  duree: 24,
  difficulte: 3,
  motsCles: [
    'biais de sélection',
    'biais de classement',
    'biais de mémorisation',
    'facteur de confusion',
    'modification d’effet',
    'appariement',
    'stratification',
    'ajustement',
  ],
  objectifs: [
    'Définir un biais et distinguer ses trois grandes catégories.',
    'Reconnaître un biais de sélection et un biais de classement à partir d’exemples.',
    'Définir un facteur de confusion et ses trois conditions.',
    'Distinguer facteur de confusion et modification d’effet.',
    'Connaître les méthodes de contrôle des facteurs de confusion : appariement, stratification, ajustement.',
  ],
  sections: [
    {
      id: 'generalites-biais',
      titre: 'Généralités sur les biais',
      blocs: [
        {
          type: 'definition',
          terme: 'Biais',
          definition:
            "Erreur systématique, non liée au hasard, entraînant une estimation faussée d’une mesure d’association (risque relatif, odds ratio) entre exposition et maladie. Un biais ne peut pas être corrigé a posteriori par une augmentation de la taille de l’échantillon, contrairement à l’imprécision liée au hasard.",
        },
        {
          type: 'liste',
          items: [
            "Le biais de sélection survient lors du choix des sujets inclus dans l’étude.",
            "Le biais de classement (ou d’information) survient lors du recueil des données d’exposition ou de maladie.",
            "Le facteur de confusion n’est pas à proprement parler un biais méthodologique évitable par le recueil, mais un phénomène lié à la structure des données, contrôlable par le plan d’étude ou l’analyse statistique.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Biais et hasard : deux sources d’erreur différentes',
          texte:
            "L’imprécision liée au hasard (erreur aléatoire) diminue lorsque la taille de l’échantillon augmente et se traduit par un intervalle de confiance large. Le biais est une erreur systématique qui persiste, voire s’aggrave, quelle que soit la taille de l’échantillon : seule une meilleure méthodologie permet de le limiter.",
        },
      ],
    },
    {
      id: 'biais-selection',
      titre: 'Le biais de sélection',
      blocs: [
        {
          type: 'definition',
          terme: 'Biais de sélection',
          definition:
            "Biais résultant d’une différence entre les caractéristiques des sujets inclus dans l’étude et celles de la population source, cette différence étant elle-même liée à la fois à l’exposition et à la maladie étudiées.",
        },
        {
          type: 'tableau',
          titre: 'Exemples classiques de biais de sélection',
          colonnes: ['Situation', 'Mécanisme du biais'],
          lignes: [
            ['Recrutement de témoins hospitaliers atteints d’une pathologie liée à l’exposition', "La fréquence de l’exposition chez les témoins ne reflète plus celle de la population source"],
            ['Biais des volontaires (autosélection)', "Les sujets qui acceptent de participer à une étude diffèrent souvent, en matière de santé ou de comportement, de ceux qui refusent"],
            ['Biais de Neyman (prévalence-incidence)', "Sous-représentation des formes graves à évolution rapide dans une enquête transversale"],
            ['Perdus de vue différentiels dans une cohorte', "Le fait de sortir de l’étude est lié à la fois à l’exposition et à l’état de santé"],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le biais de sélection se joue au moment de l’inclusion',
          texte:
            "Le biais de sélection intervient toujours au stade du recrutement ou du suivi des sujets, jamais au moment du recueil des données une fois les sujets inclus : c’est ce qui le distingue conceptuellement du biais de classement.",
        },
      ],
    },
    {
      id: 'biais-classement',
      titre: 'Le biais de classement',
      blocs: [
        {
          type: 'definition',
          terme: 'Biais de classement (ou biais d’information)',
          definition:
            "Biais résultant d’une erreur systématique dans la mesure ou le classement de l’exposition ou de la maladie chez les sujets inclus dans l’étude.",
        },
        {
          type: 'liste',
          items: [
            "Le biais de classement différentiel affecte différemment les groupes comparés (exposés/non-exposés, ou cas/témoins) : il peut créer ou masquer une association réelle.",
            "Le biais de classement non différentiel affecte de façon identique tous les groupes comparés : il tend classiquement à rapprocher la mesure d’association de la valeur 1, donc à sous-estimer l’association réelle.",
          ],
        },
        {
          type: 'definition',
          terme: 'Biais de mémorisation (recall bias)',
          definition:
            "Forme particulière de biais de classement différentiel, propre aux études rétrospectives (notamment cas-témoins), dans laquelle les sujets malades se souviennent différemment (souvent mieux, ou de façon plus recherchée) de leur exposition passée que les sujets indemnes.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Piège classique : direction du biais non différentiel',
          texte:
            "Un biais de classement non différentiel, contrairement à une intuition fréquente, ne crée généralement pas une fausse association : il a tendance à diluer une association réelle vers la valeur 1, donc à sous-estimer, et non à surestimer, l’effet réel de l’exposition.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple de biais de classement',
          texte:
            "Utiliser un questionnaire alimentaire imprécis pour évaluer la consommation de sel dans une étude sur l’hypertension artérielle peut entraîner un classement erroné des sujets. Si cette erreur de mesure est identique chez les hypertendus et les normotendus, il s’agit d’un biais non différentiel.",
        },
      ],
    },
    {
      id: 'facteur-confusion',
      titre: 'Le facteur de confusion',
      blocs: [
        {
          type: 'definition',
          terme: 'Facteur de confusion',
          definition:
            "Facteur qui fausse l’estimation de l’association entre une exposition et une maladie, en étant associé à la fois à l’exposition étudiée et à la maladie étudiée, sans être un intermédiaire sur la voie causale reliant l’exposition à la maladie.",
        },
        {
          type: 'etapes',
          titre: 'Les trois conditions d’un facteur de confusion',
          etapes: [
            {
              titre: "Association avec l’exposition",
              detail: "Le facteur de confusion doit être statistiquement associé à l’exposition étudiée, dans la population source.",
            },
            {
              titre: 'Association avec la maladie',
              detail: "Le facteur de confusion doit être un facteur de risque (ou protecteur) indépendant de la maladie étudiée, chez les sujets non exposés.",
            },
            {
              titre: "Absence de position intermédiaire sur la voie causale",
              detail: "Le facteur de confusion ne doit pas être une conséquence de l’exposition situé sur le chemin causal menant à la maladie, sous peine de masquer artificiellement une partie de l’effet réel de l’exposition.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple classique : l’âge comme facteur de confusion',
          texte:
            "Dans l’étude d’une association entre consommation d’alcool et cancer de l’œsophage, le tabagisme est un facteur de confusion classique : il est associé à la consommation d’alcool (les gros buveurs fument souvent davantage) et constitue lui-même un facteur de risque indépendant du cancer de l’œsophage, sans être une conséquence de l’alcool.",
        },
        {
          type: 'tableau',
          titre: 'Facteur de confusion versus intermédiaire causal',
          colonnes: ['Situation', 'Facteur de confusion ?'],
          lignes: [
            ["Le facteur est associé à l’exposition et à la maladie, sans être sur la voie causale", "Oui : c’est un facteur de confusion à contrôler"],
            ["Le facteur est une conséquence directe de l’exposition, elle-même à l’origine de la maladie", "Non : c’est un intermédiaire causal, qu’il ne faut surtout pas ajuster"],
          ],
        },
      ],
    },
    {
      id: 'modification-effet',
      titre: "La modification d’effet",
      blocs: [
        {
          type: 'definition',
          terme: "Modification d’effet (ou interaction)",
          definition:
            "Situation dans laquelle la force de l’association entre exposition et maladie diffère selon le niveau d’un troisième facteur, appelé facteur modifiant l’effet. Contrairement au facteur de confusion, ce phénomène n’est pas une erreur à corriger mais un résultat à décrire et à interpréter.",
        },
        {
          type: 'comparaison',
          titre: 'Facteur de confusion versus modification d’effet',
          gauche: {
            titre: 'Facteur de confusion',
            points: [
              'Fausse l’estimation globale de l’association',
              'Doit être contrôlé (ajustement, stratification, appariement)',
              'Associé à la fois à l’exposition et à la maladie',
            ],
          },
          droite: {
            titre: "Modification d’effet",
            points: [
              "L’association varie réellement selon un troisième facteur",
              "Doit être décrite, non corrigée",
              "S’analyse en présentant les résultats stratifiés par ce facteur",
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre confusion et interaction',
          texte:
            "Un facteur de confusion masque ou exagère artificiellement une association unique et réelle. Un facteur modifiant l’effet révèle que l’association elle-même diffère selon les sous-groupes : il n’y a alors pas une seule mesure d’association à rechercher, mais plusieurs, une par sous-groupe.",
        },
      ],
    },
    {
      id: 'methodes-controle',
      titre: 'Méthodes de contrôle des facteurs de confusion',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le contrôle d’un facteur de confusion peut intervenir dès la conception de l’étude ou lors de l’analyse statistique des données recueillies.",
        },
        {
          type: 'tableau',
          titre: 'Méthodes de contrôle de la confusion',
          colonnes: ['Méthode', 'Principe', 'Moment d’intervention'],
          lignes: [
            ['Randomisation', "Répartition aléatoire de l’exposition (traitement), équilibrant en moyenne les facteurs de confusion connus et inconnus entre les groupes", 'Conception (essai contrôlé randomisé uniquement)'],
            ['Restriction', "Limitation de l’étude à un seul niveau du facteur de confusion (par exemple n’inclure que des non-fumeurs)", 'Conception'],
            ['Appariement', "Association de chaque sujet exposé (ou cas) à un ou plusieurs sujets non exposés (ou témoins) de même niveau pour le facteur de confusion", 'Conception'],
            ['Stratification', "Analyse séparée des données au sein de strates homogènes pour le facteur de confusion, puis combinaison des résultats", 'Analyse'],
            ['Ajustement (analyse multivariée)', "Modélisation statistique intégrant simultanément l’exposition et le ou les facteurs de confusion", 'Analyse'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La randomisation, méthode de référence',
          texte:
            "Seule la randomisation permet, en théorie, de contrôler à la fois les facteurs de confusion connus et les facteurs de confusion inconnus, en les répartissant en moyenne de façon équilibrée entre les groupes comparés. C’est un avantage majeur, propre aux essais contrôlés randomisés, qu’aucune méthode de contrôle a posteriori ne peut totalement reproduire.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: "Limites de l’appariement",
          texte:
            "L’appariement sur un facteur empêche définitivement d’étudier ce facteur comme facteur de risque indépendant dans la même étude, et peut, en cas d’appariement excessif (sur un facteur trop lié à l’exposition), diluer artificiellement l’association étudiée : c’est le phénomène de sur-appariement.",
        },
      ],
    },
  ],
  pointsCles: [
    "Un biais est une erreur systématique, non corrigible par une augmentation de la taille de l’échantillon, contrairement à l’imprécision liée au hasard.",
    "Le biais de sélection survient lors du recrutement des sujets ; le biais de classement survient lors du recueil de l’exposition ou de la maladie.",
    "Le biais de mémorisation est une forme de biais de classement différentiel propre aux études rétrospectives.",
    "Un biais de classement non différentiel tend à diluer l’association vers la valeur 1, donc à la sous-estimer.",
    "Un facteur de confusion est associé à l’exposition et à la maladie, sans être un intermédiaire sur la voie causale.",
    "La modification d’effet (interaction) doit être décrite, alors que le facteur de confusion doit être contrôlé.",
    "L’appariement, la stratification et l’ajustement sont les principales méthodes de contrôle d’un facteur de confusion connu.",
    "Seule la randomisation permet de contrôler, en moyenne, les facteurs de confusion connus et inconnus.",
  ],
  erreursFrequentes: [
    "Confondre biais de sélection et biais de classement, qui interviennent à des étapes différentes de l’étude.",
    "Croire qu’un biais de classement non différentiel crée systématiquement une fausse association, alors qu’il tend le plus souvent à la sous-estimer.",
    "Ajuster une analyse sur un facteur qui est en réalité un intermédiaire causal, ce qui masque artificiellement une partie de l’effet réel de l’exposition.",
    "Confondre facteur de confusion et modification d’effet, qui appellent des traitements statistiques opposés.",
    "Croire qu’une augmentation de la taille de l’échantillon corrige un biais, alors qu’elle ne réduit que l’imprécision liée au hasard.",
    "Oublier qu’un appariement excessif peut diluer l’association étudiée par un phénomène de sur-appariement.",
  ],
  mnemotechniques: [
    {
      moyen: 'Sélection = Sujets ; Classement = Collecte',
      explication: "Le biais de sélection touche le choix des sujets inclus ; le biais de classement touche la collecte des données une fois les sujets inclus.",
    },
    {
      moyen: "Confusion : les 3 conditions ACI",
      explication: "Associé à l’exposition, associé à la maladie, et non Intermédiaire sur la voie causale.",
    },
    {
      moyen: "ASA : Appariement, Stratification, Ajustement",
      explication: "Les trois grandes méthodes de contrôle d’un facteur de confusion connu.",
    },
  ],
  sources: [
    'Bouyer, Hémon, Cordier et al., Épidémiologie : principes et méthodes quantitatives, Lavoisier',
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    'Rothman, Greenland, Lash, Modern Epidemiology, Lippincott Williams & Wilkins',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-biais-confusion-fc-01',
      recto: "Qu’est-ce qu’un biais, en épidémiologie ?",
      verso: "Une erreur systématique, non liée au hasard, qui fausse l’estimation d’une mesure d’association.",
      type: 'definition',
      tags: ['biais'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-02',
      recto: "Un biais peut-il être corrigé en augmentant la taille de l’échantillon ?",
      verso: "Non : seule l’imprécision liée au hasard diminue avec la taille de l’échantillon, pas le biais.",
      type: 'mecanisme',
      tags: ['biais'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-03',
      recto: 'Quand survient un biais de sélection ?',
      verso: "Lors du choix ou du recrutement des sujets inclus dans l’étude.",
      type: 'definition',
      tags: ['biais de sélection'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-04',
      recto: 'Quand survient un biais de classement ?',
      verso: "Lors du recueil des données d’exposition ou de maladie, une fois les sujets inclus.",
      type: 'definition',
      tags: ['biais de classement'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-05',
      recto: "Qu’est-ce que le biais de mémorisation ?",
      verso: "Une forme de biais de classement différentiel, propre aux études rétrospectives, où les malades se souviennent différemment de leur exposition passée.",
      type: 'definition',
      tags: ['biais de mémorisation'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-06',
      recto: "Quel est l’effet le plus fréquent d’un biais de classement non différentiel ?",
      verso: "Il dilue l’association vers la valeur 1, donc il la sous-estime, plutôt qu’il ne crée une fausse association.",
      type: 'mecanisme',
      tags: ['biais de classement'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-07',
      recto: 'Citer les trois conditions d’un facteur de confusion.',
      verso: "Être associé à l’exposition, être associé à la maladie, ne pas être un intermédiaire sur la voie causale.",
      type: 'definition',
      tags: ['facteur de confusion'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-08',
      recto: "Que se passe-t-il si on ajuste sur un intermédiaire causal par erreur ?",
      verso: "On masque artificiellement une partie de l’effet réel de l’exposition sur la maladie.",
      type: 'mecanisme',
      tags: ['facteur de confusion'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-09',
      recto: "Différencier facteur de confusion et modification d’effet.",
      verso: "Le facteur de confusion fausse une estimation unique et doit être contrôlé ; la modification d’effet traduit une variation réelle de l’association selon un troisième facteur, et doit être décrite.",
      type: 'definition',
      tags: ['modification d’effet'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-10',
      recto: 'Citer les trois principales méthodes de contrôle d’un facteur de confusion.',
      verso: "L’appariement, la stratification et l’ajustement (analyse multivariée).",
      type: 'classification',
      tags: ['contrôle de la confusion'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-11',
      recto: "Pourquoi la randomisation est-elle supérieure aux autres méthodes de contrôle de la confusion ?",
      verso: "Parce qu’elle équilibre en moyenne à la fois les facteurs de confusion connus et inconnus entre les groupes comparés.",
      type: 'mecanisme',
      tags: ['randomisation'],
    },
    {
      id: 'sante-publique-biais-confusion-fc-12',
      recto: "Qu’est-ce que le sur-appariement ?",
      verso: "Un appariement excessif sur un facteur trop lié à l’exposition, qui dilue artificiellement l’association étudiée.",
      type: 'mecanisme',
      tags: ['appariement'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-biais-confusion-qcm-01',
      enonce: 'Concernant les biais en épidémiologie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un biais est une erreur aléatoire liée au hasard.', vraie: false, justification: "Faux : un biais est une erreur systématique, à distinguer de l’erreur aléatoire liée au hasard." },
        { lettre: 'B', texte: "Augmenter la taille de l’échantillon corrige un biais de sélection.", vraie: false, justification: "Faux : l’augmentation de la taille de l’échantillon réduit uniquement l’imprécision liée au hasard." },
        { lettre: 'C', texte: 'Le biais de sélection intervient lors du recrutement des sujets.', vraie: true, justification: "Exact, c’est sa définition." },
        { lettre: 'D', texte: 'Le biais de classement intervient lors du recueil des données.', vraie: true, justification: 'Exact, il concerne la mesure de l’exposition ou de la maladie.' },
        { lettre: 'E', texte: "Le facteur de confusion est une forme de biais de classement.", vraie: false, justification: "Faux : c’est une catégorie distincte, liée à la structure des données et non à une erreur de recueil ou de sélection." },
      ],
      correction: 'Réponses exactes : C et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-biais-confusion-qcm-02',
      enonce: 'Concernant le biais de sélection, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il peut résulter du choix de témoins hospitaliers dont la pathologie est liée à l’exposition étudiée.', vraie: true, justification: "Exact, c’est un exemple classique de biais de sélection." },
        { lettre: 'B', texte: 'Le biais des volontaires illustre une possible différence entre participants et non-participants.', vraie: true, justification: 'Exact, les volontaires diffèrent souvent des non-participants en matière de santé ou de comportement.' },
        { lettre: 'C', texte: "Le biais de Neyman survient typiquement dans une étude de cohorte prospective bien menée.", vraie: false, justification: "Faux : il survient typiquement dans une enquête transversale, en lien avec les cas prévalents." },
        { lettre: 'D', texte: 'Des perdus de vue différentiels entre groupes exposés et non exposés peuvent introduire un biais de sélection.', vraie: true, justification: 'Exact, si la perte de suivi est liée à la fois à l’exposition et à l’état de santé.' },
        { lettre: 'E', texte: "Le biais de sélection peut être corrigé lors de l’analyse statistique des données déjà recueillies.", vraie: false, justification: "Faux : il est en général difficile, voire impossible, à corriger a posteriori, contrairement au facteur de confusion." },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-biais-confusion-qcm-03',
      enonce: 'Concernant le biais de classement, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le biais de mémorisation est une forme de biais de classement.', vraie: true, justification: "Exact, c’est un biais de classement différentiel propre aux études rétrospectives." },
        { lettre: 'B', texte: 'Un biais de classement non différentiel tend en général à exagérer l’association réelle.', vraie: false, justification: "Faux : il tend au contraire à la diluer vers la valeur 1, donc à la sous-estimer." },
        { lettre: 'C', texte: "Un biais de classement différentiel peut créer ou masquer une association.", vraie: true, justification: "Exact, contrairement au biais non différentiel, sa direction n’est pas prévisible a priori." },
        { lettre: 'D', texte: "Le biais de mémorisation touche également les études de cohorte prospectives avec recueil de l’exposition avant la maladie.", vraie: false, justification: "Faux : il touche surtout les études rétrospectives, où l’exposition est recueillie après la survenue de la maladie." },
        { lettre: 'E', texte: "Une erreur de mesure identique chez les cas et les témoins correspond à un biais non différentiel.", vraie: true, justification: "Exact, c’est la définition même du caractère non différentiel." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-biais-confusion-qcm-04',
      enonce: 'Concernant le facteur de confusion, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il doit être associé à la fois à l’exposition et à la maladie étudiées.', vraie: true, justification: "Exact, ce sont deux des trois conditions requises." },
        { lettre: 'B', texte: 'Il peut être un intermédiaire sur la voie causale entre l’exposition et la maladie.', vraie: false, justification: "Faux : s’il est un intermédiaire causal, il ne s’agit pas d’un facteur de confusion mais d’une variable qu’il ne faut pas ajuster." },
        { lettre: 'C', texte: 'Le tabagisme peut être un facteur de confusion dans l’étude de la relation entre alcool et cancer de l’œsophage.', vraie: true, justification: "Exact, c’est l’exemple classique cité dans la littérature épidémiologique." },
        { lettre: 'D', texte: "L’ajustement statistique est une méthode possible de contrôle d’un facteur de confusion.", vraie: true, justification: "Exact, au même titre que l’appariement et la stratification." },
        { lettre: 'E', texte: "Un facteur de confusion doit systématiquement être décrit en sous-groupes plutôt que contrôlé.", vraie: false, justification: "Faux : c’est la modification d’effet qui doit être décrite, le facteur de confusion doit lui être contrôlé." },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 3,
    },
    {
      id: 'sante-publique-biais-confusion-qcm-05',
      enonce: "Concernant la modification d’effet, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Elle correspond à une variation réelle de l’association selon un troisième facteur.", vraie: true, justification: 'Exact, c’est sa définition.' },
        { lettre: 'B', texte: 'Elle doit être contrôlée de la même façon qu’un facteur de confusion.', vraie: false, justification: "Faux : elle doit être décrite, et non corrigée comme un facteur de confusion." },
        { lettre: 'C', texte: "Elle s’analyse en présentant des résultats stratifiés selon le facteur modifiant l’effet.", vraie: true, justification: "Exact, c’est la façon appropriée de rendre compte d’une interaction." },
        { lettre: 'D', texte: 'Elle constitue une erreur méthodologique à éviter.', vraie: false, justification: "Faux : c’est un résultat biologique ou épidémiologique réel, pas une erreur." },
        { lettre: 'E', texte: 'Elle est synonyme d’interaction statistique.', vraie: true, justification: "Exact, les deux termes désignent le même phénomène." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-biais-confusion-qcm-06',
      enonce: 'Concernant les méthodes de contrôle de la confusion, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La randomisation contrôle uniquement les facteurs de confusion connus.', vraie: false, justification: "Faux : elle équilibre en moyenne aussi bien les facteurs de confusion connus que ceux non identifiés." },
        { lettre: 'B', texte: "L’appariement empêche d’étudier le facteur apparié comme facteur de risque indépendant dans la même étude.", vraie: true, justification: 'Exact, c’est une limite classique de cette méthode.' },
        { lettre: 'C', texte: "La stratification consiste à analyser séparément des strates homogènes pour le facteur de confusion.", vraie: true, justification: 'Exact, c’est sa définition même.' },
        { lettre: 'D', texte: "L’ajustement statistique intervient au stade de la conception de l’étude, avant tout recueil de données.", vraie: false, justification: "Faux : l’ajustement est une méthode d’analyse, appliquée après le recueil des données." },
        { lettre: 'E', texte: 'Un appariement excessif peut diluer l’association étudiée par sur-appariement.', vraie: true, justification: "Exact, c’est une limite importante à connaître de l’appariement." },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 3,
    },
  ],
};
