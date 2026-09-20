import type { Fiche } from '../../types';

export const fichePsychologieSante: Fiche = {
  id: 'ue7-psychologie-sante',
  ue: 'ue7',
  titre: 'Psychologie appliquée à la santé',
  sousTitre:
    'Développement, attachement, mécanismes de défense, stress et vécu de la maladie chronique',
  chapitre: 'Sciences humaines appliquées',
  ordre: 8,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'attachement',
    'mécanismes de défense',
    'stress',
    'coping',
    'représentations de la maladie',
    'douleur',
    'maladie chronique',
    'développement psychoaffectif',
  ],
  objectifs: [
    'Décrire les grandes théories de l’attachement et leur pertinence en contexte de soin.',
    'Citer les principaux mécanismes de défense et leur fonction psychique.',
    'Distinguer stress et coping, et connaître les principales stratégies de coping.',
    'Expliquer la notion de représentation de la maladie et son influence sur le comportement du patient.',
    'Décrire la dimension psychique de la douleur et les enjeux psychologiques du vécu de la maladie chronique.',
  ],
  sections: [
    {
      id: 'developpement-attachement',
      titre: 'Développement psychoaffectif et attachement',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La théorie de l’attachement, développée notamment par John Bowlby, décrit le lien affectif privilégié qui se construit entre le jeune enfant et sa figure d’attachement principale, généralement un parent. Ce lien précoce influence durablement la façon dont l’individu appréhendera les relations affectives et les situations de vulnérabilité, y compris à l’âge adulte, par exemple dans la relation de soin.",
        },
        {
          type: 'tableau',
          titre: 'Styles d’attachement classiquement décrits',
          colonnes: ['Style', 'Caractéristique principale'],
          lignes: [
            ['Sécure', "L’enfant explore son environnement avec confiance, sachant pouvoir se réfugier auprès de la figure d’attachement en cas de besoin"],
            ['Insécure-évitant', "L’enfant minimise l’expression de ses besoins affectifs, évite le contact rapproché en cas de détresse"],
            ['Insécure-ambivalent', "L’enfant alterne recherche de proximité et résistance au contact, avec une détresse marquée en cas de séparation"],
            ['Désorganisé', "L’enfant présente des comportements contradictoires ou incohérents face à la figure d’attachement, sans stratégie cohérente"],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Pertinence clinique',
          texte:
            "Le style d’attachement peut influencer la façon dont un patient, y compris adulte, vit la relation de soin : recherche excessive de réassurance, évitement du soignant, ou difficulté à faire confiance peuvent parfois se comprendre à la lumière de ces modèles, sans pour autant réduire le patient à une catégorie figée.",
        },
      ],
    },
    {
      id: 'mecanismes-defense',
      titre: 'Les mécanismes de défense',
      blocs: [
        {
          type: 'definition',
          terme: 'Mécanisme de défense',
          definition:
            "Processus psychique, le plus souvent inconscient, permettant au sujet de se protéger d’une angoisse ou d’une représentation psychiquement intolérable, notamment face à la maladie ou à l’annonce d’un diagnostic grave.",
        },
        {
          type: 'tableau',
          titre: 'Principaux mécanismes de défense rencontrés en contexte de maladie',
          colonnes: ['Mécanisme', 'Description', 'Illustration clinique'],
          lignes: [
            ['Déni', "Refus inconscient de reconnaître une réalité psychiquement insupportable", 'Un patient qui affirme ne pas être malade malgré un diagnostic confirmé'],
            ['Régression', "Retour à des comportements ou modes de fonctionnement plus immatures", 'Un adulte hospitalisé devenant très dépendant de l’équipe soignante pour des gestes simples'],
            ['Projection', "Attribution à autrui de sentiments ou pensées que le sujet ne peut reconnaître en lui-même", 'Un patient anxieux qui accuse le soignant d’être hostile envers lui'],
            ['Rationalisation', "Justification logique a posteriori d’un comportement ou d’une émotion dont la cause réelle reste inconsciente", 'Un patient qui explique son refus de traitement par des arguments techniques plutôt que par sa peur'],
            ['Isolation', "Séparation entre l’idée et l’affect qui devrait normalement l’accompagner", 'Un patient qui parle de son pronostic grave sur un ton neutre et détaché'],
            ['Sublimation', "Transformation d’une pulsion en une activité socialement valorisée", 'Un soignant investissant une activité créative ou associative en lien avec une expérience personnelle de la maladie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre défense et mensonge',
          texte:
            "Un mécanisme de défense est un processus inconscient, non une dissimulation volontaire. Le déni d’un patient face à un diagnostic grave n’est pas un mensonge : c’est une protection psychique, qui doit être respectée et accompagnée avec délicatesse plutôt que confrontée brutalement.",
        },
      ],
    },
    {
      id: 'stress-coping',
      titre: 'Stress et stratégies de coping',
      blocs: [
        {
          type: 'definition',
          terme: 'Stress',
          definition:
            "Réponse de l’organisme face à une situation perçue comme une menace ou un défi dépassant ses ressources disponibles, comportant des dimensions physiologiques, psychologiques et comportementales.",
        },
        {
          type: 'definition',
          terme: 'Coping',
          definition:
            "Ensemble des efforts cognitifs et comportementaux mis en œuvre par un individu pour gérer une situation évaluée comme stressante, qu’il s’agisse de la maîtriser, de la réduire ou simplement de la tolérer.",
        },
        {
          type: 'comparaison',
          titre: 'Deux grandes familles de stratégies de coping',
          gauche: {
            titre: 'Coping centré sur le problème',
            points: [
              'Vise à agir directement sur la source du stress.',
              'Exemple : rechercher activement des informations sur la maladie, organiser son traitement.',
              'Souvent plus adapté lorsque la situation est effectivement modifiable.',
            ],
          },
          droite: {
            titre: 'Coping centré sur l’émotion',
            points: [
              'Vise à réguler la charge émotionnelle générée par le stress.',
              'Exemple : chercher du soutien social, recourir à la distraction ou à l’expression émotionnelle.',
              'Souvent plus adapté lorsque la situation est difficilement modifiable.',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Aucune stratégie n’est bonne ou mauvaise dans l’absolu',
          texte:
            "L’efficacité d’une stratégie de coping dépend du contexte : un coping centré sur l’émotion peut être adapté face à une situation non modifiable (comme un diagnostic irréversible), sans être pour autant un signe de mauvaise adaptation psychologique.",
        },
      ],
    },
    {
      id: 'representations-maladie',
      titre: 'Représentations de la maladie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Chaque patient se construit une représentation personnelle de sa maladie, influencée par ses connaissances, sa culture, son expérience personnelle et familiale, et son état émotionnel. Cette représentation influence fortement son comportement de santé, y compris son adhésion au traitement.",
        },
        {
          type: 'liste',
          items: [
            "Les représentations portent classiquement sur l’identité de la maladie (ses symptômes), sa cause perçue, sa durée attendue, ses conséquences, et le sentiment de contrôle possible sur son évolution.",
            "Une représentation erronée (par exemple minimiser la gravité d’une maladie chronique asymptomatique) peut nuire à l’observance du traitement.",
            "Explorer les représentations du patient, plutôt que de simplement lui transmettre une information médicale standardisée, améliore souvent la qualité de la communication et l’adhésion au soin.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Un exemple fréquent',
          texte:
            "Un patient hypertendu asymptomatique peut avoir des difficultés à percevoir l’utilité d’un traitement au long cours, en l’absence de symptôme ressenti : explorer sa représentation de la maladie permet souvent d’ajuster l’explication donnée et d’améliorer l’observance.",
        },
      ],
    },
    {
      id: 'douleur-dimension-psychique',
      titre: 'La dimension psychique de la douleur',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La douleur n’est jamais purement sensorielle : elle comporte une dimension psychologique, affective et cognitive, qui module fortement son intensité perçue et son retentissement sur la vie du patient.",
        },
        {
          type: 'liste',
          items: [
            "L’anxiété, la dépression et le contexte émotionnel peuvent amplifier la perception douloureuse, indépendamment de l’intensité du stimulus nociceptif.",
            "La signification attribuée à la douleur (par exemple, la crainte qu’elle traduise une aggravation de la maladie) influence son vécu.",
            "La prise en charge de la douleur chronique nécessite donc une approche globale, associant traitement médicamenteux et accompagnement psychologique.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une composante à ne jamais négliger',
          texte:
            "Réduire la prise en charge de la douleur à sa seule dimension biologique méconnaît une part importante de l’expérience du patient et peut conduire à une prise en charge incomplète ou inadaptée.",
        },
      ],
    },
    {
      id: 'maladie-chronique',
      titre: 'Le vécu de la maladie chronique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La maladie chronique confronte le patient à un bouleversement durable de son identité, de son quotidien et de ses projets. Elle impose souvent un travail psychique d’adaptation, parfois comparé à un processus de deuil des capacités ou du mode de vie antérieurs.",
        },
        {
          type: 'etapes',
          titre: 'Étapes classiquement décrites du vécu psychique de la maladie chronique',
          etapes: [
            {
              titre: 'Choc initial et sidération',
              detail: "Réaction immédiate à l’annonce du diagnostic, souvent marquée par l’incrédulité.",
            },
            {
              titre: 'Déni ou minimisation',
              detail: "Mécanisme de protection contre une réalité difficile à intégrer d’emblée.",
            },
            {
              titre: 'Colère, révolte',
              detail: "Expression de l’injustice ressentie face à la maladie.",
            },
            {
              titre: 'Marchandage, négociation',
              detail: "Recherche de conditions ou de compromis pour limiter l’impact perçu de la maladie.",
            },
            {
              titre: 'Tristesse, dépression réactionnelle',
              detail: "Prise de conscience progressive des pertes engendrées par la maladie.",
            },
            {
              titre: 'Acceptation, réorganisation',
              detail: "Intégration progressive de la maladie dans une nouvelle identité et un nouveau projet de vie.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un processus non linéaire',
          texte:
            "Ces étapes, inspirées des travaux sur le deuil, ne se succèdent pas nécessairement de façon linéaire ni universelle : un patient peut osciller entre plusieurs d’entre elles, revenir en arrière, ou ne pas toutes les traverser. Elles constituent un repère, non une norme rigide à appliquer systématiquement.",
        },
      ],
    },
  ],
  pointsCles: [
    "La théorie de l’attachement (Bowlby) décrit le lien affectif précoce entre l’enfant et sa figure d’attachement, avec une influence durable sur les relations ultérieures, y compris de soin.",
    "Les mécanismes de défense sont des processus psychiques inconscients protégeant le sujet d’une angoisse difficilement supportable.",
    "Le stress correspond à une réponse face à une menace dépassant les ressources perçues de l’individu ; le coping désigne les stratégies mises en œuvre pour y faire face.",
    "Le coping peut être centré sur le problème ou centré sur l’émotion, sans qu’une stratégie soit universellement meilleure que l’autre.",
    "Les représentations de la maladie du patient influencent fortement son comportement de santé et son observance thérapeutique.",
    "La douleur comporte toujours une dimension psychique, en plus de sa composante sensorielle.",
    "Le vécu de la maladie chronique peut être décrit par des étapes psychiques proches du travail de deuil, non linéaires ni systématiques.",
  ],
  erreursFrequentes: [
    "Confondre mécanisme de défense (processus inconscient) et mensonge (dissimulation volontaire).",
    "Considérer qu’une stratégie de coping centrée sur l’émotion est toujours moins adaptée qu’une stratégie centrée sur le problème.",
    "Négliger la dimension psychique de la douleur en la réduisant à sa seule composante sensorielle.",
    "Présenter les étapes du vécu de la maladie chronique comme une succession linéaire et obligatoire pour tout patient.",
    "Réduire un patient à un style d’attachement figé, sans tenir compte de la complexité de son fonctionnement psychique.",
  ],
  mnemotechniques: [
    {
      moyen: 'DRPI',
      explication:
        'Déni, Régression, Projection, Isolation : quatre mécanismes de défense fréquemment rencontrés face à la maladie.',
    },
    {
      moyen: 'CCMTA',
      explication:
        'Choc, Colère, Marchandage, Tristesse, Acceptation : repère simplifié des étapes du vécu psychique de la maladie chronique (à considérer comme non linéaires).',
    },
  ],
  sources: [
    'Bowlby J., Attachement et perte',
    'Consoli S. M., Psychologie médicale',
    'Lazarus R., Folkman S., Stress, Appraisal, and Coping',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-psychologie-sante-fc-01',
      recto: 'Qui développe la théorie de l’attachement ?',
      verso: 'John Bowlby.',
      type: 'definition',
      tags: ['attachement'],
    },
    {
      id: 'ue7-psychologie-sante-fc-02',
      recto: 'Citer les quatre styles d’attachement classiquement décrits.',
      verso: 'Sécure, insécure-évitant, insécure-ambivalent et désorganisé.',
      type: 'classification',
      tags: ['attachement'],
    },
    {
      id: 'ue7-psychologie-sante-fc-03',
      recto: 'Définir un mécanisme de défense.',
      verso: "Un processus psychique, le plus souvent inconscient, protégeant le sujet d’une angoisse ou d’une représentation psychiquement intolérable.",
      type: 'definition',
      tags: ['mécanisme de défense'],
    },
    {
      id: 'ue7-psychologie-sante-fc-04',
      recto: 'Donner un exemple clinique de déni.',
      verso: 'Un patient qui affirme ne pas être malade malgré un diagnostic confirmé.',
      type: 'clinique',
      tags: ['déni'],
    },
    {
      id: 'ue7-psychologie-sante-fc-05',
      recto: 'Distinguer stress et coping.',
      verso: "Le stress est la réponse à une situation perçue comme menaçante ; le coping est l’ensemble des efforts mis en œuvre pour y faire face.",
      type: 'definition',
      tags: ['stress', 'coping'],
    },
    {
      id: 'ue7-psychologie-sante-fc-06',
      recto: 'Citer les deux grandes familles de stratégies de coping.',
      verso: "Le coping centré sur le problème et le coping centré sur l’émotion.",
      type: 'classification',
      tags: ['coping'],
    },
    {
      id: 'ue7-psychologie-sante-fc-07',
      recto: 'Qu’est-ce qu’une représentation de la maladie ?',
      verso: "La construction personnelle qu’un patient se fait de sa maladie (identité, cause, durée, conséquences, contrôle), influençant son comportement de santé.",
      type: 'definition',
      tags: ['représentations'],
    },
    {
      id: 'ue7-psychologie-sante-fc-08',
      recto: 'La douleur est-elle purement sensorielle ?',
      verso: "Non, elle comporte toujours une dimension psychologique, affective et cognitive qui module son intensité perçue.",
      type: 'definition',
      tags: ['douleur'],
    },
    {
      id: 'ue7-psychologie-sante-fc-09',
      recto: 'Citer un facteur pouvant amplifier la perception douloureuse.',
      verso: "L’anxiété ou la dépression, indépendamment de l’intensité du stimulus nociceptif.",
      type: 'mecanisme',
      tags: ['douleur'],
    },
    {
      id: 'ue7-psychologie-sante-fc-10',
      recto: 'À quoi le vécu psychique de la maladie chronique est-il souvent comparé ?',
      verso: 'À un processus proche du travail de deuil, avec des étapes non linéaires.',
      type: 'mecanisme',
      tags: ['maladie chronique'],
    },
    {
      id: 'ue7-psychologie-sante-fc-11',
      recto: 'Les étapes du vécu de la maladie chronique sont-elles universelles et linéaires ?',
      verso: 'Non, elles constituent un repère, un patient peut osciller entre plusieurs d’entre elles sans les traverser toutes dans l’ordre.',
      type: 'clinique',
      tags: ['maladie chronique'],
    },
    {
      id: 'ue7-psychologie-sante-fc-12',
      recto: 'Pourquoi explorer les représentations de la maladie d’un patient est-il utile en pratique ?',
      verso: "Cela permet d’ajuster l’information délivrée et d’améliorer l’observance thérapeutique, en tenant compte de la vision propre du patient.",
      type: 'clinique',
      tags: ['représentations', 'observance'],
    },
  ],
  qcm: [
    {
      id: 'ue7-psychologie-sante-qcm-01',
      enonce: 'Concernant la théorie de l’attachement, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle a été développée notamment par John Bowlby.',
          vraie: true,
          justification: 'Exact : c’est ce psychiatre et psychanalyste britannique qui a décrit le lien affectif privilégié entre l’enfant et sa figure d’attachement.',
        },
        {
          lettre: 'B',
          texte: 'Le style sécure se caractérise par une exploration confiante de l’environnement.',
          vraie: true,
          justification: 'Exact : l’enfant sécure explore son environnement en sachant pouvoir se réfugier auprès de sa figure d’attachement en cas de besoin.',
        },
        {
          lettre: 'C',
          texte: 'Le style d’attachement précoce n’a aucune influence sur les relations à l’âge adulte.',
          vraie: false,
          justification: "Faux : il peut influencer durablement les relations ultérieures, y compris la relation de soin.",
        },
        {
          lettre: 'D',
          texte: 'Le style désorganisé se caractérise par des comportements contradictoires face à la figure d’attachement.',
          vraie: true,
          justification: 'Exact : contrairement aux autres styles, il ne présente pas de stratégie cohérente face à la figure d’attachement.',
        },
        {
          lettre: 'E',
          texte: 'Cette théorie interdit toute nuance clinique et impose de classer chaque patient de façon rigide.',
          vraie: false,
          justification: "Faux : ces modèles sont des repères, non des catégories figées à appliquer sans nuance.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-psychologie-sante-qcm-02',
      enonce: 'Concernant les mécanismes de défense, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Ils sont le plus souvent inconscients.',
          vraie: true,
          justification: 'Exact : c’est ce qui distingue le mécanisme de défense d’une dissimulation volontaire comme le mensonge.',
        },
        {
          lettre: 'B',
          texte: 'Le déni équivaut à un mensonge volontaire du patient.',
          vraie: false,
          justification: "Faux : c’est un processus inconscient, différent d’une dissimulation volontaire.",
        },
        {
          lettre: 'C',
          texte: 'La rationalisation consiste à justifier logiquement un comportement dont la cause réelle reste inconsciente.',
          vraie: true,
          justification: 'Exact : c’est la définition même de ce mécanisme, par exemple un patient expliquant son refus de traitement par des arguments techniques plutôt que par sa peur.',
        },
        {
          lettre: 'D',
          texte: 'L’isolation sépare l’idée de l’affect qui devrait l’accompagner.',
          vraie: true,
          justification: 'Exact : un patient peut ainsi évoquer un pronostic grave sur un ton neutre et détaché, sans l’émotion normalement attendue.',
        },
        {
          lettre: 'E',
          texte: 'Ils doivent systématiquement être confrontés directement par le soignant pour être levés.',
          vraie: false,
          justification: "Faux : ils doivent être respectés et accompagnés avec délicatesse, non confrontés brutalement.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-psychologie-sante-qcm-03',
      enonce: 'Concernant stress et coping, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le stress comporte des dimensions physiologiques, psychologiques et comportementales.',
          vraie: true,
          justification: 'Exact : le stress est une réponse globale de l’organisme, qui engage à la fois le corps, le psychisme et le comportement.',
        },
        {
          lettre: 'B',
          texte: 'Le coping centré sur le problème vise à agir directement sur la source du stress.',
          vraie: true,
          justification: 'Exact : c’est par exemple rechercher activement des informations sur la maladie ou organiser son traitement.',
        },
        {
          lettre: 'C',
          texte: 'Le coping centré sur l’émotion est toujours le signe d’une mauvaise adaptation psychologique.',
          vraie: false,
          justification: "Faux : son adaptation dépend du contexte, notamment quand la situation n’est pas modifiable.",
        },
        {
          lettre: 'D',
          texte: 'La recherche de soutien social peut relever d’un coping centré sur l’émotion.',
          vraie: true,
          justification: 'Exact : elle vise à réguler la charge émotionnelle générée par le stress plutôt qu’à agir directement sur sa source.',
        },
        {
          lettre: 'E',
          texte: 'Le coping désigne uniquement les réactions physiologiques automatiques au stress.',
          vraie: false,
          justification: "Faux : il désigne des efforts cognitifs et comportementaux volontaires ou semi-volontaires pour gérer le stress.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-psychologie-sante-qcm-04',
      enonce: 'Concernant les représentations de la maladie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elles influencent le comportement de santé du patient.',
          vraie: true,
          justification: 'Exact : la représentation que le patient se fait de sa maladie oriente fortement son adhésion au traitement et son comportement de santé.',
        },
        {
          lettre: 'B',
          texte: 'Elles sont identiques chez tous les patients atteints de la même maladie.',
          vraie: false,
          justification: "Faux : elles varient selon les connaissances, la culture et l’expérience de chaque patient.",
        },
        {
          lettre: 'C',
          texte: 'Elles portent notamment sur la cause perçue et les conséquences attendues de la maladie.',
          vraie: true,
          justification: 'Exact : les représentations de la maladie portent classiquement sur son identité, sa cause perçue, sa durée, ses conséquences et le sentiment de contrôle possible.',
        },
        {
          lettre: 'D',
          texte: 'Une représentation erronée ne peut jamais influencer l’observance du traitement.',
          vraie: false,
          justification: "Faux : une représentation erronée peut au contraire nuire à l’observance.",
        },
        {
          lettre: 'E',
          texte: 'Les explorer permet souvent d’ajuster l’information donnée au patient.',
          vraie: true,
          justification: 'Exact : explorer les représentations du patient améliore souvent la qualité de la communication et l’adhésion au soin.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-psychologie-sante-qcm-05',
      enonce: 'Concernant la dimension psychique de la douleur, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La douleur est une expérience purement sensorielle.',
          vraie: false,
          justification: "Faux : elle comporte toujours une dimension psychologique, affective et cognitive.",
        },
        {
          lettre: 'B',
          texte: 'L’anxiété peut amplifier la perception douloureuse.',
          vraie: true,
          justification: 'Exact : l’anxiété et le contexte émotionnel peuvent amplifier la perception douloureuse, indépendamment de l’intensité du stimulus nociceptif.',
        },
        {
          lettre: 'C',
          texte: 'La signification attribuée à la douleur influence son vécu.',
          vraie: true,
          justification: 'Exact : la crainte que la douleur traduise une aggravation de la maladie, par exemple, modifie son vécu subjectif.',
        },
        {
          lettre: 'D',
          texte: 'La prise en charge de la douleur chronique peut associer traitement médicamenteux et accompagnement psychologique.',
          vraie: true,
          justification: 'Exact : la dimension psychique de la douleur chronique justifie une approche globale, associant traitement médicamenteux et accompagnement psychologique.',
        },
        {
          lettre: 'E',
          texte: 'La dimension psychique de la douleur peut être ignorée sans conséquence sur la prise en charge.',
          vraie: false,
          justification: "Faux : la négliger peut conduire à une prise en charge incomplète ou inadaptée.",
        },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-psychologie-sante-qcm-06',
      enonce: 'Concernant le vécu de la maladie chronique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il peut être comparé à un processus proche du travail de deuil.',
          vraie: true,
          justification: 'Exact : la maladie chronique impose un travail psychique d’adaptation souvent comparé au deuil des capacités ou du mode de vie antérieurs.',
        },
        {
          lettre: 'B',
          texte: 'Les étapes décrites se succèdent toujours dans le même ordre chez tous les patients.',
          vraie: false,
          justification: "Faux : ce processus n’est pas linéaire ni universel.",
        },
        {
          lettre: 'C',
          texte: 'La colère peut faire partie des réactions psychiques face à la maladie chronique.',
          vraie: true,
          justification: 'Exact : la colère et la révolte expriment classiquement l’injustice ressentie face à la maladie, dans les étapes décrites de son vécu psychique.',
        },
        {
          lettre: 'D',
          texte: 'L’acceptation correspond à une réorganisation progressive de l’identité et du projet de vie.',
          vraie: true,
          justification: 'Exact : cette étape correspond à l’intégration progressive de la maladie dans une nouvelle identité et un nouveau projet de vie.',
        },
        {
          lettre: 'E',
          texte: 'Un patient qui revient à une phase de colère après une phase d’acceptation présente nécessairement un trouble psychiatrique.',
          vraie: false,
          justification: "Faux : ces oscillations sont compatibles avec un processus psychique normal d’adaptation.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
