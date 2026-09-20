import type { Fiche } from '../../types';

export const fichePrevention: Fiche = {
  id: 'sante-publique-prevention',
  ue: 'sante-publique',
  titre: 'Prévention et promotion de la santé',
  sousTitre: "Préventions primaire, secondaire, tertiaire et quaternaire, Charte d’Ottawa, éducation thérapeutique",
  chapitre: 'Prévention et système de santé',
  ordre: 8,
  duree: 23,
  difficulte: 2,
  motsCles: [
    'prévention primaire',
    'prévention secondaire',
    'prévention tertiaire',
    'prévention quaternaire',
    'éducation pour la santé',
    'promotion de la santé',
    'charte d’Ottawa',
    'éducation thérapeutique du patient',
  ],
  objectifs: [
    "Distinguer les préventions primaire, secondaire et tertiaire selon leur moment d’intervention.",
    'Définir la prévention quaternaire et ses enjeux propres.',
    "Différencier éducation pour la santé et promotion de la santé.",
    "Connaître les cinq axes stratégiques de la Charte d’Ottawa.",
    "Définir l’éducation thérapeutique du patient et ses objectifs.",
  ],
  sections: [
    {
      id: 'niveaux-prevention',
      titre: 'Les trois niveaux classiques de prévention',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La classification classique de la prévention, proposée par l’Organisation mondiale de la santé, distingue trois niveaux selon le moment de leur intervention par rapport à l’histoire naturelle de la maladie : avant son apparition, à un stade précoce, ou après son installation.",
        },
        {
          type: 'definition',
          terme: 'Prévention primaire',
          definition:
            "Ensemble des actions visant à diminuer l’incidence d’une maladie dans une population, en réduisant l’exposition aux facteurs de risque ou en renforçant les facteurs protecteurs, avant même l’apparition de la maladie.",
        },
        {
          type: 'definition',
          terme: 'Prévention secondaire',
          definition:
            "Ensemble des actions visant à diminuer la prévalence d’une maladie dans une population, en la détectant à un stade précoce (dépistage) ou en traitant précocement les premiers cas, afin d’en limiter les complications et l’évolution.",
        },
        {
          type: 'definition',
          terme: 'Prévention tertiaire',
          definition:
            "Ensemble des actions visant à diminuer la prévalence des incapacités et des complications chroniques liées à une maladie déjà installée, en favorisant la réadaptation, la réinsertion et la limitation des séquelles.",
        },
        {
          type: 'tableau',
          titre: 'Les trois niveaux classiques de prévention',
          colonnes: ['Niveau', 'Moment d’intervention', 'Exemple'],
          lignes: [
            ['Primaire', "Avant l’apparition de la maladie", 'Vaccination, lutte contre le tabagisme'],
            ['Secondaire', "Au stade précoce, souvent infraclinique", 'Dépistage organisé du cancer du sein'],
            ['Tertiaire', 'Après installation de la maladie, chronique', 'Rééducation après un accident vasculaire cérébral'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Piège classique : dépistage = prévention secondaire',
          texte:
            "Le dépistage relève de la prévention secondaire, et non de la prévention primaire : il n’empêche pas la survenue de la maladie, mais permet de la détecter à un stade précoce pour en limiter les conséquences.",
        },
      ],
    },
    {
      id: 'prevention-quaternaire',
      titre: 'La prévention quaternaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Prévention quaternaire',
          definition:
            "Ensemble des actions visant à identifier un patient ou une population à risque de surmédicalisation, et à le protéger d’interventions médicales invasives ou inutiles, en lui proposant des procédures de soins éthiquement et médicalement acceptables.",
        },
        {
          type: 'paragraphe',
          texte:
            "Ce concept, développé notamment en médecine générale, répond au risque de sur-diagnostic et de sur-traitement lié à une médicalisation excessive, en particulier dans le cadre du dépistage ou de la prescription d’examens complémentaires non indiqués.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Prévention quaternaire et sur-diagnostic',
          texte:
            "La prévention quaternaire est étroitement liée à la notion de sur-diagnostic abordée en dépistage : elle invite à s’interroger systématiquement sur le rapport bénéfice-risque de tout acte médical, diagnostique ou thérapeutique, avant de le proposer à un patient.",
        },
      ],
    },
    {
      id: 'education-promotion',
      titre: 'Éducation pour la santé et promotion de la santé',
      blocs: [
        {
          type: 'definition',
          terme: 'Éducation pour la santé',
          definition:
            "Ensemble des activités visant à améliorer les connaissances, les compétences et les comportements d’un individu ou d’une population en matière de santé, afin de lui permettre de faire des choix éclairés favorables à sa santé.",
        },
        {
          type: 'definition',
          terme: 'Promotion de la santé',
          definition:
            "Selon la Charte d’Ottawa, processus qui confère aux populations les moyens d’assurer un plus grand contrôle sur leur propre santé et d’améliorer celle-ci. Elle dépasse l’éducation individuelle pour agir également sur les déterminants environnementaux, sociaux et politiques de la santé.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: "Ne pas réduire la promotion de la santé à l’éducation individuelle",
          texte:
            "La promotion de la santé ne se limite pas à informer ou éduquer des individus : elle vise également à agir sur l’environnement, les politiques publiques et les conditions de vie, afin de rendre les choix favorables à la santé plus accessibles à tous.",
        },
        {
          type: 'tableau',
          titre: 'Les cinq axes stratégiques de la Charte d’Ottawa (1986)',
          colonnes: ['Axe', 'Contenu'],
          lignes: [
            ["Élaborer une politique publique saine", "Intégrer la préoccupation de santé dans l’ensemble des politiques publiques, pas seulement sanitaires"],
            ["Créer des milieux favorables", "Agir sur l’environnement physique, social et professionnel pour qu’il favorise la santé"],
            ["Renforcer l’action communautaire", "Soutenir la participation active des communautés à la définition de leurs priorités de santé"],
            ["Acquérir des aptitudes individuelles", "Développer les compétences des individus pour faire des choix favorables à leur santé"],
            ["Réorienter les services de santé", "Faire évoluer le système de soins vers une logique de promotion de la santé, au-delà du seul soin curatif"],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Retenir le principe fondateur',
          texte:
            "La Charte d’Ottawa fait de la santé une ressource de la vie quotidienne et affirme que la promotion de la santé exige l’action coordonnée de tous les acteurs concernés, bien au-delà du seul secteur de la santé.",
        },
      ],
    },
    {
      id: 'education-therapeutique',
      titre: 'Éducation thérapeutique du patient',
      blocs: [
        {
          type: 'definition',
          terme: 'Éducation thérapeutique du patient (ETP)',
          definition:
            "Selon l’Organisation mondiale de la santé, ensemble de pratiques visant à aider le patient et son entourage à comprendre la maladie et son traitement, à participer aux soins et à conserver ou améliorer sa qualité de vie, dans le cadre d’une maladie chronique.",
        },
        {
          type: 'liste',
          items: [
            "L’ETP s’adresse en priorité aux patients atteints de maladie chronique, en complément du traitement médical.",
            "Elle repose sur un diagnostic éducatif initial, permettant d’identifier les besoins spécifiques du patient.",
            "Elle vise l’acquisition de compétences d’auto-soins (adapter un traitement, reconnaître les signes d’alerte) et de compétences d’adaptation à la maladie.",
            "Elle s’inscrit dans un programme structuré, évalué et personnalisé, distinct d’une simple information orale ponctuelle.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: "Exemple d’éducation thérapeutique",
          texte:
            "Chez un patient diabétique, un programme d’éducation thérapeutique peut porter sur l’adaptation des doses d’insuline selon la glycémie, la reconnaissance des signes d’hypoglycémie, et l’adaptation de l’alimentation, afin de renforcer son autonomie dans la gestion quotidienne de sa maladie.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'ETP et simple information ne se confondent pas',
          texte:
            "L’éducation thérapeutique du patient ne se réduit pas à une information délivrée de façon ponctuelle par un professionnel de santé : elle repose sur une démarche structurée, personnalisée et évaluée, inscrite dans la durée.",
        },
      ],
    },
  ],
  pointsCles: [
    "La prévention primaire agit avant l’apparition de la maladie, en réduisant l’incidence.",
    "La prévention secondaire agit à un stade précoce, souvent infraclinique, en réduisant la prévalence (le dépistage en relève).",
    "La prévention tertiaire agit après installation de la maladie chronique, en limitant les incapacités et les séquelles.",
    "La prévention quaternaire vise à protéger le patient d’une surmédicalisation et d’interventions inutiles.",
    "L’éducation pour la santé vise les connaissances et comportements individuels ; la promotion de la santé agit aussi sur les déterminants collectifs et environnementaux.",
    "La Charte d’Ottawa (1986) définit cinq axes stratégiques de la promotion de la santé.",
    "L’éducation thérapeutique du patient s’adresse aux maladies chroniques et repose sur un diagnostic éducatif initial.",
    "L’ETP vise des compétences d’auto-soins et d’adaptation, au-delà d’une simple information ponctuelle.",
  ],
  erreursFrequentes: [
    "Classer le dépistage en prévention primaire, alors qu’il relève de la prévention secondaire.",
    "Confondre prévention tertiaire et prévention quaternaire, qui répondent à des logiques différentes.",
    "Réduire la promotion de la santé à une simple action d’éducation individuelle, en oubliant sa dimension environnementale et politique.",
    "Oublier l’un des cinq axes de la Charte d’Ottawa, notamment la réorientation des services de santé.",
    "Considérer l’éducation thérapeutique du patient comme une simple information délivrée ponctuellement, sans démarche structurée.",
    "Confondre éducation pour la santé (niveau individuel) et promotion de la santé (niveau également collectif et structurel).",
  ],
  mnemotechniques: [
    {
      moyen: 'PPS : Primaire = avant, Secondaire = tôt, Tertiaire = après',
      explication: "Les trois niveaux classiques de prévention s’ordonnent selon le moment d’intervention par rapport à l’apparition de la maladie.",
    },
    {
      moyen: "Ottawa : Politique, Milieux, Communauté, Aptitudes, Services",
      explication: "Les cinq axes stratégiques de la Charte d’Ottawa pour la promotion de la santé.",
    },
    {
      moyen: 'Quaternaire = Quatre fois moins de soins inutiles',
      explication: "La prévention quaternaire protège le patient d’actes médicaux invasifs ou inutiles, en luttant contre la surmédicalisation.",
    },
  ],
  sources: [
    "Charte d’Ottawa pour la promotion de la santé, OMS, 1986",
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    "Organisation mondiale de la santé, rapports sur l’éducation thérapeutique du patient",
    "Haute Autorité de santé, recommandations sur l’éducation thérapeutique du patient",
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-prevention-fc-01',
      recto: 'Définir la prévention primaire.',
      verso: "Les actions visant à réduire l’incidence d’une maladie, avant son apparition.",
      type: 'definition',
      tags: ['prévention primaire'],
    },
    {
      id: 'sante-publique-prevention-fc-02',
      recto: 'Définir la prévention secondaire.',
      verso: "Les actions visant à réduire la prévalence d’une maladie, en la détectant ou en la traitant précocement.",
      type: 'definition',
      tags: ['prévention secondaire'],
    },
    {
      id: 'sante-publique-prevention-fc-03',
      recto: 'Définir la prévention tertiaire.',
      verso: "Les actions visant à limiter les incapacités et complications d’une maladie déjà installée, chronique.",
      type: 'definition',
      tags: ['prévention tertiaire'],
    },
    {
      id: 'sante-publique-prevention-fc-04',
      recto: 'À quel niveau de prévention appartient le dépistage ?',
      verso: 'À la prévention secondaire.',
      type: 'classification',
      tags: ['dépistage', 'prévention secondaire'],
    },
    {
      id: 'sante-publique-prevention-fc-05',
      recto: 'Définir la prévention quaternaire.',
      verso: "Les actions visant à protéger un patient d’une surmédicalisation et d’interventions médicales invasives ou inutiles.",
      type: 'definition',
      tags: ['prévention quaternaire'],
    },
    {
      id: 'sante-publique-prevention-fc-06',
      recto: "Différencier éducation pour la santé et promotion de la santé.",
      verso: "L’éducation pour la santé vise les connaissances et comportements individuels ; la promotion de la santé agit aussi sur les déterminants collectifs, environnementaux et politiques.",
      type: 'definition',
      tags: ['promotion de la santé'],
    },
    {
      id: 'sante-publique-prevention-fc-07',
      recto: "Citer les cinq axes stratégiques de la Charte d’Ottawa.",
      verso: "Élaborer une politique publique saine, créer des milieux favorables, renforcer l’action communautaire, acquérir des aptitudes individuelles, réorienter les services de santé.",
      type: 'classification',
      tags: ['Charte d’Ottawa'],
    },
    {
      id: 'sante-publique-prevention-fc-08',
      recto: "En quelle année a été publiée la Charte d’Ottawa ?",
      verso: '1986.',
      type: 'chiffre',
      tags: ['Charte d’Ottawa'],
    },
    {
      id: 'sante-publique-prevention-fc-09',
      recto: "Définir l’éducation thérapeutique du patient.",
      verso: "Un ensemble de pratiques structurées visant à aider le patient et son entourage à comprendre sa maladie chronique et son traitement, et à participer activement aux soins.",
      type: 'definition',
      tags: ['éducation thérapeutique'],
    },
    {
      id: 'sante-publique-prevention-fc-10',
      recto: "Sur quoi repose le démarrage d’un programme d’éducation thérapeutique ?",
      verso: "Sur un diagnostic éducatif initial, permettant d’identifier les besoins spécifiques du patient.",
      type: 'mecanisme',
      tags: ['éducation thérapeutique'],
    },
    {
      id: 'sante-publique-prevention-fc-11',
      recto: "Quelles compétences vise principalement l’éducation thérapeutique ?",
      verso: "Les compétences d’auto-soins et les compétences d’adaptation à la maladie chronique.",
      type: 'classification',
      tags: ['éducation thérapeutique'],
    },
    {
      id: 'sante-publique-prevention-fc-12',
      recto: "L’ETP se réduit-elle à une information orale ponctuelle ?",
      verso: "Non : elle repose sur une démarche structurée, personnalisée et évaluée, inscrite dans la durée.",
      type: 'mecanisme',
      tags: ['éducation thérapeutique'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-prevention-qcm-01',
      enonce: 'Concernant les trois niveaux classiques de prévention, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "La vaccination relève de la prévention primaire.", vraie: true, justification: 'Exact, elle agit avant l’exposition ou la survenue de la maladie.' },
        { lettre: 'B', texte: 'Le dépistage relève de la prévention primaire.', vraie: false, justification: "Faux : il relève de la prévention secondaire." },
        { lettre: 'C', texte: "La rééducation après un accident vasculaire cérébral relève de la prévention tertiaire.", vraie: true, justification: 'Exact, elle vise à limiter les séquelles d’une maladie déjà installée.' },
        { lettre: 'D', texte: "La prévention primaire vise à réduire la prévalence d’une maladie.", vraie: false, justification: "Faux : la prévention primaire vise à réduire l’incidence, pas la prévalence." },
        { lettre: 'E', texte: "La prévention secondaire peut inclure un traitement précoce des premiers cas.", vraie: true, justification: "Exact, en plus du dépistage, elle inclut le traitement précoce pour limiter l’évolution." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-prevention-qcm-02',
      enonce: 'Concernant la prévention quaternaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle vise à protéger le patient d’une surmédicalisation.', vraie: true, justification: "Exact, c’est son objectif principal." },
        { lettre: 'B', texte: "Elle est identique à la prévention tertiaire.", vraie: false, justification: "Faux : ce sont deux notions distinctes ; la tertiaire limite les séquelles d’une maladie installée, la quaternaire évite les soins inutiles." },
        { lettre: 'C', texte: 'Elle est liée à la notion de sur-diagnostic.', vraie: true, justification: 'Exact, elle invite à interroger systématiquement le bénéfice-risque des actes médicaux.' },
        { lettre: 'D', texte: "Elle encourage la multiplication des examens complémentaires.", vraie: false, justification: "Faux : elle vise au contraire à limiter les actes invasifs ou inutiles." },
        { lettre: 'E', texte: "Elle repose sur une évaluation du rapport bénéfice-risque de tout acte médical proposé.", vraie: true, justification: 'Exact, c’est le principe fondamental de cette approche.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-prevention-qcm-03',
      enonce: "Concernant l’éducation pour la santé et la promotion de la santé, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "La promotion de la santé se limite à l’action éducative individuelle.", vraie: false, justification: "Faux : elle agit aussi sur les déterminants environnementaux, sociaux et politiques." },
        { lettre: 'B', texte: "L’éducation pour la santé vise à améliorer les connaissances et compétences individuelles.", vraie: true, justification: 'Exact, c’est sa définition.' },
        { lettre: 'C', texte: "La Charte d’Ottawa définit la promotion de la santé comme un processus donnant aux populations les moyens d’agir sur leur santé.", vraie: true, justification: "Exact, c’est la définition retenue par la Charte d’Ottawa." },
        { lettre: 'D', texte: "La promotion de la santé exclut toute politique publique non sanitaire.", vraie: false, justification: "Faux : l’un de ses axes est justement l’élaboration d’une politique publique saine, intégrant la santé dans toutes les politiques." },
        { lettre: 'E', texte: 'La Charte d’Ottawa a été adoptée en 1986.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-prevention-qcm-04',
      enonce: "Concernant les cinq axes de la Charte d’Ottawa, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Réorienter les services de santé fait partie des cinq axes.", vraie: true, justification: 'Exact, c’est l’un des cinq axes stratégiques.' },
        { lettre: 'B', texte: "Renforcer l’action communautaire fait partie des cinq axes.", vraie: true, justification: 'Exact, ce qui suppose la participation active des communautés.' },
        { lettre: 'C', texte: "Créer des milieux favorables ne concerne que l’environnement physique.", vraie: false, justification: "Faux : cela concerne aussi l’environnement social et professionnel." },
        { lettre: 'D', texte: "Acquérir des aptitudes individuelles fait partie des cinq axes.", vraie: true, justification: 'Exact, c’est l’un des axes centrés sur les compétences individuelles.' },
        { lettre: 'E', texte: "La Charte d’Ottawa ne comporte que trois axes stratégiques.", vraie: false, justification: "Faux : elle en comporte cinq." },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-prevention-qcm-05',
      enonce: "Concernant l’éducation thérapeutique du patient, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Elle s’adresse en priorité aux maladies chroniques.", vraie: true, justification: "Exact, c’est son champ d’application principal." },
        { lettre: 'B', texte: 'Elle débute par un diagnostic éducatif.', vraie: true, justification: 'Exact, cette étape permet d’identifier les besoins spécifiques du patient.' },
        { lettre: 'C', texte: "Elle se limite à une information délivrée en une seule fois.", vraie: false, justification: "Faux : c’est une démarche structurée et inscrite dans la durée." },
        { lettre: 'D', texte: "Elle vise l’acquisition de compétences d’auto-soins.", vraie: true, justification: "Exact, comme l’adaptation d’un traitement ou la reconnaissance de signes d’alerte." },
        { lettre: 'E', texte: "Elle remplace totalement le traitement médical de la maladie chronique.", vraie: false, justification: "Faux : elle est un complément du traitement médical, pas un substitut." },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-prevention-qcm-06',
      enonce: 'Concernant l’ensemble des niveaux de prévention, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "La lutte contre le tabagisme dans la population générale relève de la prévention primaire.", vraie: true, justification: "Exact, elle vise à réduire l’exposition à un facteur de risque avant la maladie." },
        { lettre: 'B', texte: "La prévention tertiaire vise à réduire l’incidence d’une maladie.", vraie: false, justification: "Faux : elle vise à limiter les incapacités d’une maladie déjà installée, pas à réduire son incidence." },
        { lettre: 'C', texte: "La prévention quaternaire est un niveau distinct des trois niveaux classiques.", vraie: true, justification: "Exact, elle a été ajoutée ultérieurement à la classification classique en trois niveaux." },
        { lettre: 'D', texte: "Un seul niveau de prévention peut être mobilisé à la fois pour une même pathologie.", vraie: false, justification: "Faux : plusieurs niveaux de prévention peuvent coexister pour une même pathologie, selon les patients et les moments." },
        { lettre: 'E', texte: "Le dépistage organisé du cancer colorectal est un exemple de prévention secondaire.", vraie: true, justification: 'Exact, comme tout dépistage organisé.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
