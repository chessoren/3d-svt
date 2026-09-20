import type { Fiche } from '../../types';

export const ficheSociologieSante: Fiche = {
  id: 'ue7-sociologie-sante',
  ue: 'ue7',
  titre: 'Sociologie de la santé',
  sousTitre:
    'Inégalités sociales de santé, déterminants sociaux, parcours de soins et rapport au corps',
  chapitre: 'Sciences humaines appliquées',
  ordre: 9,
  duree: 23,
  difficulte: 2,
  motsCles: [
    'inégalités sociales de santé',
    'déterminants sociaux',
    'parcours de soins',
    'professionnalisation médicale',
    'rôle de malade',
    'médicalisation',
    'rapport au corps',
  ],
  objectifs: [
    'Définir les inégalités sociales de santé et leurs principaux déterminants.',
    'Décrire la notion de gradient social de santé.',
    'Expliquer la notion de parcours de soins et les obstacles à l’accès aux soins.',
    'Définir le concept sociologique de rôle de malade et ses implications.',
    'Comprendre les notions de médicalisation et de rapport social au corps.',
  ],
  sections: [
    {
      id: 'inegalites-sociales-sante',
      titre: 'Les inégalités sociales de santé',
      blocs: [
        {
          type: 'definition',
          terme: 'Inégalités sociales de santé',
          definition:
            "Différences systématiques, évitables et injustes d’état de santé, de morbidité ou de mortalité entre groupes sociaux, liées à leur position dans la hiérarchie sociale (revenu, niveau d’études, catégorie socioprofessionnelle).",
        },
        {
          type: 'paragraphe',
          texte:
            "Ces inégalités ne se limitent pas à une opposition binaire entre riches et pauvres : elles suivent un gradient social continu, chaque échelon de la hiérarchie sociale présentant un état de santé en moyenne meilleur que l’échelon immédiatement inférieur, y compris parmi les catégories favorisées.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Le gradient social de santé',
          texte:
            "Le concept de gradient social de santé signifie qu’il n’existe pas de seuil net séparant les « pauvres en mauvaise santé » et les « riches en bonne santé » : la santé s’améliore progressivement à chaque niveau supplémentaire de position sociale, ce qui distingue les inégalités sociales de santé de la seule pauvreté.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre inégalités sociales et inégalités géographiques de santé',
          texte:
            "Les inégalités sociales de santé (liées à la position sociale) et les inégalités territoriales de santé (liées au lieu de résidence, par exemple à la densité de l’offre de soins) sont des notions distinctes, bien qu’elles se recoupent souvent en pratique.",
        },
      ],
    },
    {
      id: 'determinants-sociaux',
      titre: 'Les déterminants sociaux de la santé',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les déterminants sociaux de la santé désignent l’ensemble des facteurs non strictement médicaux qui influencent l’état de santé d’un individu ou d’une population, en complément des déterminants biologiques et comportementaux individuels.",
        },
        {
          type: 'tableau',
          titre: 'Principales catégories de déterminants sociaux de la santé',
          colonnes: ['Catégorie', 'Exemples'],
          lignes: [
            ['Conditions socio-économiques', 'Revenu, niveau d’études, catégorie socioprofessionnelle'],
            ['Conditions de vie et de travail', 'Logement, exposition professionnelle, pénibilité, chômage'],
            ['Environnement et territoire', 'Qualité de l’air, accès aux espaces verts, densité de l’offre de soins'],
            ['Réseaux sociaux et soutien', 'Isolement social, soutien familial et communautaire'],
            ['Comportements de santé', 'Alimentation, activité physique, consommation de tabac ou d’alcool, eux-mêmes socialement déterminés'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Des comportements socialement déterminés',
          texte:
            "Les comportements de santé (tabagisme, alimentation, activité physique) ne relèvent pas seulement d’un choix individuel isolé : ils sont eux-mêmes fortement influencés par le contexte social, économique et culturel dans lequel évolue la personne.",
        },
      ],
    },
    {
      id: 'parcours-de-soins',
      titre: 'Le parcours de soins',
      blocs: [
        {
          type: 'definition',
          terme: 'Parcours de soins',
          definition:
            "Ensemble des étapes successives par lesquelles passe un patient dans le système de santé, depuis le premier recours jusqu’à la prise en charge spécialisée, en passant par la coordination entre les différents professionnels et structures impliqués.",
        },
        {
          type: 'liste',
          items: [
            "L’accès à un parcours de soins fluide dépend de facteurs individuels (ressources financières, connaissances, mobilité) et de facteurs liés à l’offre de soins (densité médicale, délais de rendez-vous).",
            "Le renoncement aux soins, pour des raisons financières, géographiques ou liées à l’organisation du système, est un indicateur important des inégalités d’accès aux soins.",
            "Les personnes en situation de précarité cumulent souvent plusieurs obstacles simultanés à l’accès aux soins, ce qui aggrave les inégalités de santé déjà présentes.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Principaux obstacles au parcours de soins',
          colonnes: ['Type d’obstacle', 'Exemples'],
          lignes: [
            ['Financier', 'Coût des soins, reste à charge, absence de couverture complémentaire'],
            ['Géographique', 'Éloignement des structures de soins, faible densité médicale locale'],
            ['Organisationnel', 'Délais de rendez-vous, horaires incompatibles avec une activité professionnelle'],
            ['Informationnel', 'Méconnaissance des droits ou du fonctionnement du système de santé'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le renoncement aux soins, un signal à repérer',
          texte:
            "Un patient qui retarde ou évite une consultation, un examen ou un traitement pour des raisons financières ou organisationnelles présente un risque accru de complications évitables : ce phénomène doit être activement recherché en consultation, notamment chez les patients en situation de précarité.",
        },
      ],
    },
    {
      id: 'professionnalisation-role-malade',
      titre: 'Professionnalisation médicale et rôle de malade',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La sociologie de la santé s’est également intéressée à la construction historique et sociale de la profession médicale, ainsi qu’aux attentes sociales qui pèsent sur la personne malade.",
        },
        {
          type: 'definition',
          terme: 'Rôle de malade (sick role)',
          definition:
            "Concept développé par le sociologue Talcott Parsons, désignant l’ensemble des droits et des devoirs socialement attribués à la personne malade : elle est déchargée de certaines de ses obligations sociales habituelles, mais en contrepartie doit chercher à guérir et coopérer avec le système de soins.",
        },
        {
          type: 'liste',
          items: [
            "Selon ce modèle, la maladie est considérée comme socialement indésirable, ce qui justifie que le malade soit provisoirement dispensé de certains rôles sociaux habituels (travail, obligations familiales).",
            "En contrepartie, le malade est attendu comme devant reconnaître sa maladie comme un état à corriger et coopérer activement avec les professionnels de santé.",
            "Ce modèle a été critiqué pour son caractère parfois trop normatif, notamment lorsqu’il est appliqué à la maladie chronique, où la « sortie » attendue du rôle de malade n’est pas toujours possible.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Limites du modèle de Parsons',
          texte:
            "Le concept de rôle de malade, pensé initialement pour la maladie aiguë, s’applique plus difficilement à la maladie chronique, où le patient doit au contraire réorganiser durablement sa vie sociale autour de la maladie plutôt que d’en sortir rapidement.",
        },
      ],
    },
    {
      id: 'medicalisation',
      titre: 'La médicalisation de la société',
      blocs: [
        {
          type: 'definition',
          terme: 'Médicalisation',
          definition:
            "Processus par lequel des phénomènes de la vie courante, auparavant considérés comme normaux ou relevant d’autres registres (social, moral, éducatif), deviennent progressivement définis et pris en charge comme des problèmes médicaux.",
        },
        {
          type: 'liste',
          items: [
            "La médicalisation peut concerner des étapes de la vie (naissance, vieillissement) ou des comportements auparavant considérés hors du champ médical.",
            "Elle présente des bénéfices potentiels (meilleure prise en charge de souffrances auparavant ignorées) et des risques (surdiagnostic, dépendance accrue à l’expertise médicale, réduction de la diversité des expériences humaines à une catégorie pathologique).",
            "Le débat sur la médicalisation invite à une réflexion critique sur les limites du champ légitime d’intervention de la médecine.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un concept à manier avec nuance',
          texte:
            "La médicalisation n’est ni bonne ni mauvaise en soi : elle peut permettre une prise en charge légitime de souffrances longtemps négligées, mais aussi conduire à un excès de diagnostic et de traitement de situations relevant davantage de la vie ordinaire.",
        },
      ],
    },
    {
      id: 'rapport-au-corps',
      titre: 'Le rapport social au corps',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le corps n’est pas seulement un objet biologique : il est aussi un objet social et culturel, dont la perception, les normes et les usages varient selon les époques, les cultures et les groupes sociaux.",
        },
        {
          type: 'liste',
          items: [
            "Les normes corporelles (esthétiques, de santé, de performance) sont socialement construites et évoluent dans le temps.",
            "Le rapport au corps diffère selon le milieu social : certaines catégories socioprofessionnelles valorisent davantage l’apparence, d’autres la fonctionnalité ou l’endurance physique liée au travail.",
            "La médecine, en intervenant sur le corps, s’inscrit toujours dans un contexte social et culturel qui influence les attentes du patient et les représentations qu’il se fait du soin.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Une vigilance utile en pratique',
          texte:
            "Prendre en compte le rapport singulier de chaque patient à son corps, influencé par son histoire sociale et culturelle, permet d’adapter la communication médicale et d’éviter des malentendus dans la relation de soin, en particulier autour des questions d’image corporelle ou de traitement modifiant l’apparence.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les inégalités sociales de santé sont des différences systématiques et évitables d’état de santé liées à la position sociale, suivant un gradient continu.",
    "Les déterminants sociaux de la santé regroupent les conditions socio-économiques, de vie, de travail, d’environnement et de soutien social.",
    "Le parcours de soins peut être fragilisé par des obstacles financiers, géographiques ou organisationnels, à l’origine du renoncement aux soins.",
    "Le rôle de malade selon Parsons associe des droits (dispense d’obligations sociales) et des devoirs (chercher à guérir, coopérer avec les soignants).",
    "La médicalisation désigne l’extension du champ de la médecine à des phénomènes auparavant non médicaux, avec des bénéfices et des risques.",
    "Le corps est un objet à la fois biologique et social, dont la perception varie selon les cultures et les groupes sociaux.",
    "Les inégalités sociales de santé et les inégalités territoriales de santé sont des notions distinctes, bien que souvent liées.",
  ],
  erreursFrequentes: [
    "Réduire les inégalités sociales de santé à une opposition binaire riches/pauvres, en oubliant la notion de gradient social continu.",
    "Confondre inégalités sociales de santé et inégalités territoriales de santé.",
    "Considérer les comportements de santé comme de simples choix individuels indépendants du contexte social.",
    "Appliquer sans nuance le modèle du rôle de malade de Parsons à la maladie chronique, pour laquelle il est mal adapté.",
    "Juger la médicalisation comme uniformément positive ou négative, sans tenir compte de ses bénéfices et de ses risques respectifs.",
  ],
  mnemotechniques: [
    {
      moyen: 'CVTRS',
      explication:
        'Conditions socio-économiques, conditions de Vie et de Travail, environnement/territoire, Réseaux Sociaux, comportements de santé : cinq catégories de déterminants sociaux de la santé.',
    },
    {
      moyen: 'Le gradient, pas la barrière',
      explication:
        'Pour retenir la notion de gradient social de santé : la santé s’améliore progressivement à chaque niveau social supplémentaire, il n’y a pas de seuil unique séparant deux groupes.',
    },
  ],
  sources: [
    'Baszanger I., Bungener M., Sociologie de la santé et de la médecine',
    'Parsons T., The Social System',
    'Haut Conseil de la santé publique, rapports sur les inégalités sociales de santé',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-sociologie-sante-fc-01',
      recto: 'Définir les inégalités sociales de santé.',
      verso: "Des différences systématiques, évitables et injustes d’état de santé entre groupes sociaux, liées à leur position dans la hiérarchie sociale.",
      type: 'definition',
      tags: ['inégalités sociales de santé'],
    },
    {
      id: 'ue7-sociologie-sante-fc-02',
      recto: 'Qu’est-ce que le gradient social de santé ?',
      verso: "Le fait que la santé s’améliore progressivement à chaque niveau supplémentaire de position sociale, sans seuil net entre deux groupes.",
      type: 'definition',
      tags: ['gradient social'],
    },
    {
      id: 'ue7-sociologie-sante-fc-03',
      recto: 'Citer trois catégories de déterminants sociaux de la santé.',
      verso: 'Les conditions socio-économiques, les conditions de vie et de travail, et l’environnement/territoire (liste non exhaustive).',
      type: 'classification',
      tags: ['déterminants sociaux'],
    },
    {
      id: 'ue7-sociologie-sante-fc-04',
      recto: 'Les comportements de santé relèvent-ils uniquement d’un choix individuel ?',
      verso: "Non, ils sont fortement influencés par le contexte social, économique et culturel de la personne.",
      type: 'definition',
      tags: ['comportements de santé'],
    },
    {
      id: 'ue7-sociologie-sante-fc-05',
      recto: 'Définir le parcours de soins.',
      verso: "L’ensemble des étapes successives par lesquelles passe un patient dans le système de santé, du premier recours à la prise en charge spécialisée.",
      type: 'definition',
      tags: ['parcours de soins'],
    },
    {
      id: 'ue7-sociologie-sante-fc-06',
      recto: 'Qu’est-ce que le renoncement aux soins ?',
      verso: "Le fait de retarder ou d’éviter une consultation, un examen ou un traitement, souvent pour des raisons financières ou organisationnelles.",
      type: 'definition',
      tags: ['renoncement aux soins'],
    },
    {
      id: 'ue7-sociologie-sante-fc-07',
      recto: 'Qui a développé le concept de rôle de malade ?',
      verso: 'Le sociologue Talcott Parsons.',
      type: 'definition',
      tags: ['rôle de malade', 'Parsons'],
    },
    {
      id: 'ue7-sociologie-sante-fc-08',
      recto: 'Que suppose le rôle de malade selon Parsons ?',
      verso: "Une dispense de certaines obligations sociales habituelles, en contrepartie de l’obligation de chercher à guérir et de coopérer avec les soignants.",
      type: 'definition',
      tags: ['rôle de malade'],
    },
    {
      id: 'ue7-sociologie-sante-fc-09',
      recto: 'Pourquoi le modèle du rôle de malade est-il critiqué pour la maladie chronique ?',
      verso: "Parce que la « sortie » attendue du rôle de malade n’est pas toujours possible dans la maladie chronique.",
      type: 'clinique',
      tags: ['rôle de malade', 'maladie chronique'],
    },
    {
      id: 'ue7-sociologie-sante-fc-10',
      recto: 'Définir la médicalisation.',
      verso: "Le processus par lequel des phénomènes de la vie courante deviennent progressivement définis et pris en charge comme des problèmes médicaux.",
      type: 'definition',
      tags: ['médicalisation'],
    },
    {
      id: 'ue7-sociologie-sante-fc-11',
      recto: 'Citer un risque associé à la médicalisation.',
      verso: 'Le surdiagnostic, ou la réduction de la diversité des expériences humaines à une catégorie pathologique.',
      type: 'mecanisme',
      tags: ['médicalisation'],
    },
    {
      id: 'ue7-sociologie-sante-fc-12',
      recto: 'Le rapport au corps est-il uniquement biologique ?',
      verso: "Non, il est aussi social et culturel, ses normes et ses usages variant selon les époques, les cultures et les groupes sociaux.",
      type: 'definition',
      tags: ['rapport au corps'],
    },
  ],
  qcm: [
    {
      id: 'ue7-sociologie-sante-qcm-01',
      enonce: 'Concernant les inégalités sociales de santé, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elles se limitent à une opposition entre les personnes riches et les personnes pauvres.',
          vraie: false,
          justification: "Faux : elles suivent un gradient social continu, à chaque niveau de la hiérarchie sociale.",
        },
        {
          lettre: 'B',
          texte: 'Elles sont considérées comme systématiques et évitables.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Elles sont identiques aux inégalités territoriales de santé.',
          vraie: false,
          justification: "Faux : ce sont des notions distinctes, même si elles se recoupent souvent.",
        },
        {
          lettre: 'D',
          texte: 'Elles sont liées à la position sociale, notamment le revenu et le niveau d’études.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Le gradient social de santé signifie qu’il existe un seuil net entre deux groupes.',
          vraie: false,
          justification: "Faux : c’est au contraire une amélioration progressive et continue selon le niveau social.",
        },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 1,
    },
    {
      id: 'ue7-sociologie-sante-qcm-02',
      enonce: 'Concernant les déterminants sociaux de la santé, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Ils incluent les conditions de logement et de travail.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Ils incluent uniquement des facteurs biologiques individuels.',
          vraie: false,
          justification: "Faux : ils regroupent des facteurs non strictement médicaux, sociaux et environnementaux.",
        },
        {
          lettre: 'C',
          texte: 'Le soutien social et le réseau familial en font partie.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Les comportements de santé sont totalement indépendants du contexte social.',
          vraie: false,
          justification: "Faux : ils sont eux-mêmes socialement déterminés.",
        },
        {
          lettre: 'E',
          texte: 'La densité de l’offre de soins peut être considérée comme un déterminant social ou territorial de la santé.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-sociologie-sante-qcm-03',
      enonce: 'Concernant le parcours de soins et le renoncement aux soins, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le parcours de soins désigne l’ensemble des étapes du patient dans le système de santé.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Le renoncement aux soins ne concerne que des raisons financières.',
          vraie: false,
          justification: "Faux : il peut aussi être lié à des raisons géographiques ou organisationnelles.",
        },
        {
          lettre: 'C',
          texte: 'Les personnes en situation de précarité cumulent souvent plusieurs obstacles à l’accès aux soins.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Le renoncement aux soins doit être activement recherché en consultation.',
          vraie: true,
          justification: 'Exact, en particulier chez les patients en situation de précarité.',
        },
        {
          lettre: 'E',
          texte: 'La densité médicale n’a aucune influence sur le parcours de soins.',
          vraie: false,
          justification: "Faux : elle fait partie des facteurs liés à l’offre de soins qui influencent le parcours de soins.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-sociologie-sante-qcm-04',
      enonce: 'Concernant le rôle de malade selon Parsons, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il dispense la personne malade de certaines obligations sociales habituelles.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Il n’impose aucun devoir en contrepartie au malade.',
          vraie: false,
          justification: "Faux : il impose au malade de chercher à guérir et de coopérer avec les soignants.",
        },
        {
          lettre: 'C',
          texte: 'Il s’applique sans difficulté particulière à la maladie chronique.',
          vraie: false,
          justification: "Faux : il a été critiqué pour son inadaptation partielle à la maladie chronique.",
        },
        {
          lettre: 'D',
          texte: 'Il a été développé par le sociologue Talcott Parsons.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Il considère la maladie comme socialement indésirable.',
          vraie: true,
          justification: 'Exact, ce qui justifie la dispense provisoire de certains rôles sociaux.',
        },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-sociologie-sante-qcm-05',
      enonce: 'Concernant la médicalisation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle désigne l’extension du champ de définition médicale à des phénomènes auparavant non médicaux.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Elle ne présente aucun bénéfice possible.',
          vraie: false,
          justification: "Faux : elle peut permettre une meilleure prise en charge de souffrances auparavant négligées.",
        },
        {
          lettre: 'C',
          texte: 'Elle peut comporter un risque de surdiagnostic.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Elle peut concerner des étapes normales de la vie comme le vieillissement.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Elle est uniformément jugée positive par la sociologie de la santé.',
          vraie: false,
          justification: "Faux : elle fait l’objet d’un débat critique, avec bénéfices et risques identifiés.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-sociologie-sante-qcm-06',
      enonce: 'Concernant le rapport social au corps, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le corps est uniquement un objet biologique.',
          vraie: false,
          justification: "Faux : il est aussi un objet social et culturel.",
        },
        {
          lettre: 'B',
          texte: 'Les normes corporelles évoluent selon les époques et les cultures.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Le rapport au corps peut varier selon le milieu social.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Prendre en compte le rapport au corps du patient est inutile en pratique clinique.',
          vraie: false,
          justification: "Faux : cela permet d’adapter la communication médicale et d’éviter des malentendus.",
        },
        {
          lettre: 'E',
          texte: 'La médecine, en intervenant sur le corps, s’inscrit dans un contexte social et culturel.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
  ],
};
