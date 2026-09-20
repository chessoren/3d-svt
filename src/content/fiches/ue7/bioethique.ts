import type { Fiche } from '../../types';

export const ficheBioethique: Fiche = {
  id: 'ue7-bioethique',
  ue: 'ue7',
  titre: 'Questions de bioéthique',
  sousTitre:
    'Début de vie, assistance médicale à la procréation, don d’organes et recherche : les grands principes de la bioéthique',
  chapitre: 'Éthique et droit',
  ordre: 6,
  duree: 25,
  difficulte: 3,
  motsCles: [
    'bioéthique',
    'assistance médicale à la procréation',
    'diagnostic prénatal',
    'diagnostic préimplantatoire',
    'don d’organes',
    'recherche sur l’embryon',
    'non-marchandisation',
    'anonymat et gratuité du don',
  ],
  objectifs: [
    'Définir la bioéthique et les grands principes qui la structurent.',
    'Distinguer diagnostic prénatal et diagnostic préimplantatoire.',
    'Décrire les principes fondamentaux encadrant l’assistance médicale à la procréation.',
    'Expliquer les principes de consentement, d’anonymat et de gratuité applicables au don d’organes et de tissus.',
    'Comprendre le principe de non-marchandisation du corps humain et ses implications.',
  ],
  sections: [
    {
      id: 'definir-bioethique',
      titre: 'Qu’est-ce que la bioéthique ?',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La bioéthique est la réflexion interdisciplinaire sur les enjeux moraux, sociaux et juridiques soulevés par les progrès des sciences de la vie et de la santé, en particulier lorsque ces progrès touchent au début et à la fin de la vie, à la procréation, à la génétique ou au corps humain.",
        },
        {
          type: 'liste',
          items: [
            "La bioéthique mobilise des disciplines variées : médecine, philosophie, droit, sociologie, théologie.",
            "Elle vise à accompagner les innovations biomédicales de garde-fous éthiques, sans figer définitivement le débat, car les questions évoluent avec les techniques et la société.",
            "En France, ces questions font l’objet de lois spécifiques régulièrement révisées, ainsi que d’avis d’instances consultatives dédiées à la réflexion éthique.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le droit évolue : principes plutôt que détails juridiques',
          texte:
            "Cette fiche présente les grands principes bioéthiques stables (consentement, non-marchandisation, anonymat et gratuité du don, respect de la dignité), sans détailler les articles précis des lois de bioéthique, qui sont révisées périodiquement. Se référer impérativement au cours de la faculté et aux textes en vigueur pour toute application pratique ou juridique précise.",
        },
      ],
    },
    {
      id: 'debut-de-vie',
      titre: 'Questions liées au début de la vie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les progrès de la médecine reproductive et du diagnostic prénatal ont considérablement enrichi les possibilités d’intervention médicale autour de la conception et de la grossesse, tout en soulevant des questions éthiques sur le statut de l’embryon et les limites de l’intervention médicale.",
        },
        {
          type: 'comparaison',
          titre: 'Diagnostic prénatal et diagnostic préimplantatoire',
          gauche: {
            titre: 'Diagnostic prénatal (DPN)',
            points: [
              'Ensemble des pratiques permettant de détecter, chez l’embryon ou le fœtus, une affection d’une particulière gravité, au cours de la grossesse.',
              'Réalisé après le début de la grossesse, par exemple par échographie, dépistage biologique ou examens invasifs.',
              'Concerne une grossesse déjà en cours.',
            ],
          },
          droite: {
            titre: 'Diagnostic préimplantatoire (DPI)',
            points: [
              'Analyse génétique réalisée sur un embryon obtenu par assistance médicale à la procréation, avant son transfert dans l’utérus.',
              'Réservé à des situations médicales bien définies, encadrées strictement par la loi.',
              'Concerne un embryon in vitro, avant toute grossesse.',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre DPN et DPI',
          texte:
            "Le point de bascule à retenir : le DPN intervient au cours d’une grossesse déjà engagée, tandis que le DPI intervient sur un embryon in vitro, avant tout transfert et donc avant toute grossesse.",
        },
      ],
    },
    {
      id: 'amp',
      titre: 'L’assistance médicale à la procréation',
      blocs: [
        {
          type: 'definition',
          terme: 'Assistance médicale à la procréation (AMP)',
          definition:
            "Ensemble des pratiques cliniques et biologiques permettant la conception in vitro, la conservation des gamètes ou des embryons, et le transfert d’embryons ou l’insémination artificielle, afin de répondre à un projet parental.",
        },
        {
          type: 'liste',
          items: [
            "L’AMP est strictement encadrée par la loi, qui en définit les indications, les conditions d’accès et les acteurs autorisés à la pratiquer.",
            "Le recours à un don de gamètes est possible dans certaines situations, dans le respect des principes d’anonymat, de gratuité et de consentement propres au don en France.",
            "Ces règles évoluent avec les révisions périodiques des lois de bioéthique ; les conditions précises d’accès doivent être étudiées à partir du cours de la faculté et des textes en vigueur.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Principales étapes d’un parcours d’AMP',
          colonnes: ['Étape', 'Description'],
          lignes: [
            ['Consultation initiale', 'Évaluation du projet parental et des indications médicales de l’AMP'],
            ['Stimulation ou préparation', 'Préparation biologique du couple ou de la personne, éventuellement recours à un don de gamètes'],
            ['Conception ou transfert', 'Insémination artificielle ou transfert d’embryon obtenu par fécondation in vitro'],
            ['Suivi de grossesse', 'Accompagnement médical classique une fois la grossesse confirmée'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un encadrement fondé sur des principes constants',
          texte:
            "Au-delà des évolutions législatives, certains principes restent constants dans l’encadrement de l’AMP : le respect du consentement des personnes concernées, l’absence de rémunération du don de gamètes, et l’attention portée à l’intérêt de l’enfant à naître.",
        },
      ],
    },
    {
      id: 'don-organes-tissus',
      titre: 'Le don d’organes et de tissus',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le don d’organes et de tissus, qu’il intervienne du vivant du donneur ou après son décès, est encadré par des principes éthiques et juridiques communs, destinés à protéger le donneur et à garantir la confiance dans le système de prélèvement et de greffe.",
        },
        {
          type: 'tableau',
          titre: 'Principes fondamentaux du don d’organes en France',
          colonnes: ['Principe', 'Signification'],
          lignes: [
            [
              'Consentement',
              "Le prélèvement suppose le respect de la volonté de la personne, exprimée de son vivant ou recherchée auprès de ses proches après son décès",
            ],
            [
              'Gratuité',
              "Le don ne peut donner lieu à aucune contrepartie financière pour le donneur, afin d’éviter toute incitation marchande au don",
            ],
            [
              'Anonymat',
              "En principe, le donneur et le receveur ne se connaissent pas, afin de préserver la liberté du don et d’éviter toute pression réciproque",
            ],
            [
              'Sécurité sanitaire',
              "Des règles strictes encadrent la sélection des donneurs et le contrôle des greffons afin de protéger le receveur",
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Don du vivant et don après le décès',
          texte:
            "Le don d’organes du vivant (par exemple d’un rein) obéit à des conditions particulièrement strictes de consentement et d’information, en raison du risque encouru par le donneur lui-même. Le prélèvement après le décès repose sur des principes distincts, articulés autour du respect de la volonté du défunt et de l’information des proches.",
        },
      ],
    },
    {
      id: 'recherche-embryon',
      titre: 'La recherche sur l’embryon',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La recherche sur l’embryon humain et sur les cellules souches embryonnaires soulève des questions éthiques majeures, liées au statut moral accordé à l’embryon et à la mise en balance entre l’espoir de progrès thérapeutiques et le respect dû à la vie humaine en devenir.",
        },
        {
          type: 'liste',
          items: [
            "En France, cette recherche est strictement encadrée par la loi, qui définit les conditions dans lesquelles elle peut être autorisée.",
            "Le consentement des personnes ayant recouru à une assistance médicale à la procréation est une condition essentielle lorsque des embryons surnuméraires sont concernés.",
            "Le débat éthique oppose classiquement les tenants d’une protection absolue de l’embryon dès la conception et ceux qui distinguent des degrés de protection croissants selon le stade de développement.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un sujet particulièrement sensible',
          texte:
            "Les conditions précises d’autorisation de la recherche sur l’embryon évoluent avec les révisions législatives. Il convient de retenir les principes de consentement et d’encadrement strict plutôt que des seuils ou des procédures détaillées, qui doivent être étudiés dans le cours de la faculté.",
        },
      ],
    },
    {
      id: 'non-marchandisation',
      titre: 'Le principe de non-marchandisation du corps humain',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le principe de non-marchandisation du corps humain, de ses éléments et de ses produits, est un pilier de la bioéthique française. Il interdit que le corps humain, ou une partie de celui-ci, fasse l’objet d’un droit patrimonial ou d’une transaction commerciale.",
        },
        {
          type: 'definition',
          terme: 'Non-marchandisation du corps humain',
          definition:
            "Principe selon lequel le corps humain, ses éléments (organes, tissus, gamètes) et ses produits ne peuvent faire l’objet d’un droit patrimonial, ce qui exclut toute rémunération directe en contrepartie d’un don.",
        },
        {
          type: 'liste',
          items: [
            "Ce principe s’articule avec ceux de gratuité et d’anonymat du don, qui en sont des traductions concrètes dans le champ du don d’organes, de tissus ou de gamètes.",
            "Il vise à éviter que la précarité économique ne conduise certaines personnes à consentir à un don sous la pression d’une contrepartie financière.",
            "Il n’exclut pas l’indemnisation de frais réels engagés par le donneur (par exemple des frais de transport ou de perte de revenus liés à l’hospitalisation), qui ne constitue pas une rémunération du don lui-même.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Retenir la logique, pas des chiffres précis',
          texte:
            "Il n’est pas utile de mémoriser des montants réglementaires précis d’indemnisation : retenir la distinction de principe entre l’indemnisation de frais réels (autorisée) et la rémunération du don lui-même (interdite par le principe de non-marchandisation).",
        },
      ],
    },
  ],
  pointsCles: [
    "La bioéthique est une réflexion interdisciplinaire sur les enjeux moraux, sociaux et juridiques des progrès biomédicaux.",
    "Le diagnostic prénatal intervient au cours d’une grossesse en cours, le diagnostic préimplantatoire sur un embryon in vitro avant tout transfert.",
    "L’assistance médicale à la procréation est strictement encadrée par la loi, dans le respect du consentement des personnes concernées.",
    "Le don d’organes et de tissus en France repose sur les principes de consentement, de gratuité, d’anonymat et de sécurité sanitaire.",
    "La recherche sur l’embryon est strictement encadrée et suppose le consentement des personnes concernées.",
    "Le principe de non-marchandisation du corps humain interdit toute rémunération directe en contrepartie d’un don d’éléments ou de produits du corps humain.",
    "L’indemnisation de frais réels du donneur ne constitue pas une rémunération du don et reste compatible avec le principe de non-marchandisation.",
  ],
  erreursFrequentes: [
    "Confondre diagnostic prénatal et diagnostic préimplantatoire : le premier concerne une grossesse en cours, le second un embryon in vitro avant transfert.",
    "Croire que le don d’organes peut donner lieu à une contrepartie financière pour le donneur : c’est précisément ce qu’interdit le principe de non-marchandisation.",
    "Penser que l’anonymat du don signifie l’absence de tout consentement préalable : le consentement reste une condition essentielle, distincte de l’anonymat.",
    "Assimiler l’indemnisation de frais réels à une rémunération du don, alors que ces deux notions sont juridiquement distinctes.",
    "Présenter les règles précises d’accès à l’AMP ou à la recherche sur l’embryon comme définitivement fixées, alors qu’elles évoluent avec les révisions législatives.",
  ],
  mnemotechniques: [
    {
      moyen: 'CGAS',
      explication:
        'Consentement, Gratuité, Anonymat, Sécurité sanitaire : les quatre principes fondamentaux du don d’organes en France.',
    },
    {
      moyen: 'DPN avant naissance, DPI avant transfert',
      explication:
        'Pour ne pas confondre : le diagnostic prénatal se situe pendant la grossesse, le diagnostic préimplantatoire avant même le transfert de l’embryon, donc avant toute grossesse.',
    },
  ],
  sources: [
    'Comité consultatif national d’éthique, avis et rapports publics',
    'Hirsch E., Traité de bioéthique',
    'Code de la santé publique (principes généraux, à actualiser selon le cours de la faculté)',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-bioethique-fc-01',
      recto: 'Définir la bioéthique.',
      verso: "La réflexion interdisciplinaire sur les enjeux moraux, sociaux et juridiques soulevés par les progrès des sciences de la vie et de la santé.",
      type: 'definition',
      tags: ['bioéthique'],
    },
    {
      id: 'ue7-bioethique-fc-02',
      recto: 'Quand intervient le diagnostic prénatal ?',
      verso: 'Au cours d’une grossesse déjà en cours.',
      type: 'definition',
      tags: ['diagnostic prénatal'],
    },
    {
      id: 'ue7-bioethique-fc-03',
      recto: 'Quand intervient le diagnostic préimplantatoire ?',
      verso: 'Sur un embryon obtenu par assistance médicale à la procréation, avant son transfert dans l’utérus, donc avant toute grossesse.',
      type: 'definition',
      tags: ['diagnostic préimplantatoire'],
    },
    {
      id: 'ue7-bioethique-fc-04',
      recto: 'Qu’est-ce que l’assistance médicale à la procréation ?',
      verso: "L’ensemble des pratiques cliniques et biologiques permettant la conception in vitro et le transfert d’embryons ou l’insémination artificielle, pour répondre à un projet parental.",
      type: 'definition',
      tags: ['AMP'],
    },
    {
      id: 'ue7-bioethique-fc-05',
      recto: 'Citer les quatre grands principes du don d’organes en France.',
      verso: 'Le consentement, la gratuité, l’anonymat et la sécurité sanitaire.',
      type: 'classification',
      tags: ['don d’organes'],
    },
    {
      id: 'ue7-bioethique-fc-06',
      recto: 'Pourquoi le don d’organes est-il en principe anonyme ?',
      verso: 'Pour préserver la liberté du don et éviter toute pression réciproque entre donneur et receveur.',
      type: 'mecanisme',
      tags: ['anonymat'],
    },
    {
      id: 'ue7-bioethique-fc-07',
      recto: 'Le don du vivant obéit-il aux mêmes conditions que le don après le décès ?',
      verso: 'Non, le don du vivant est soumis à des conditions particulièrement strictes de consentement et d’information, en raison du risque pour le donneur lui-même.',
      type: 'clinique',
      tags: ['don d’organes'],
    },
    {
      id: 'ue7-bioethique-fc-08',
      recto: 'Que suppose la recherche sur l’embryon humain en France ?',
      verso: 'Un encadrement légal strict et le consentement des personnes concernées, notamment pour les embryons surnuméraires issus d’une AMP.',
      type: 'clinique',
      tags: ['recherche sur l’embryon'],
    },
    {
      id: 'ue7-bioethique-fc-09',
      recto: 'Définir le principe de non-marchandisation du corps humain.',
      verso: "Le principe selon lequel le corps humain et ses éléments ne peuvent faire l’objet d’un droit patrimonial ni d’une rémunération directe en contrepartie d’un don.",
      type: 'definition',
      tags: ['non-marchandisation'],
    },
    {
      id: 'ue7-bioethique-fc-10',
      recto: 'L’indemnisation de frais réels du donneur est-elle compatible avec la non-marchandisation ?',
      verso: 'Oui : elle compense des frais réels (transport, perte de revenus) et ne constitue pas une rémunération du don lui-même.',
      type: 'definition',
      tags: ['non-marchandisation', 'indemnisation'],
    },
    {
      id: 'ue7-bioethique-fc-11',
      recto: 'Pourquoi le principe de gratuité du don est-il important ?',
      verso: 'Il évite que la précarité économique ne conduise certaines personnes à consentir à un don sous la pression d’une contrepartie financière.',
      type: 'mecanisme',
      tags: ['gratuité'],
    },
    {
      id: 'ue7-bioethique-fc-12',
      recto: 'Pourquoi les règles précises de bioéthique doivent-elles être vérifiées auprès du cours de la faculté ?',
      verso: 'Parce que les lois de bioéthique sont révisées périodiquement : les grands principes sont stables, mais leurs modalités précises évoluent.',
      type: 'definition',
      tags: ['droit', 'évolution'],
    },
  ],
  qcm: [
    {
      id: 'ue7-bioethique-qcm-01',
      enonce: 'Concernant la bioéthique en général, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est une réflexion strictement médicale, sans dimension juridique.',
          vraie: false,
          justification: "Faux : elle est interdisciplinaire et mobilise notamment médecine, philosophie et droit.",
        },
        {
          lettre: 'B',
          texte: 'Elle porte notamment sur les enjeux liés au début et à la fin de la vie.',
          vraie: true,
          justification: 'Exact : la procréation, le statut de l’embryon, l’obstination déraisonnable ou les directives anticipées comptent parmi les grands objets de la réflexion bioéthique.',
        },
        {
          lettre: 'C',
          texte: 'Les lois de bioéthique françaises sont révisées périodiquement.',
          vraie: true,
          justification: 'Exact : ces révisions permettent d’adapter le cadre juridique à l’évolution des techniques biomédicales et des positions de la société.',
        },
        {
          lettre: 'D',
          texte: 'Elle est définitivement figée depuis sa création.',
          vraie: false,
          justification: "Faux : elle évolue avec les progrès techniques et les débats de société.",
        },
        {
          lettre: 'E',
          texte: 'Des instances consultatives dédiées participent à la réflexion éthique en France.',
          vraie: true,
          justification: 'Exact : des instances consultatives rendent des avis publics qui éclairent le débat et les révisions législatives sans se substituer au législateur.',
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue7-bioethique-qcm-02',
      enonce: 'Concernant le diagnostic prénatal et le diagnostic préimplantatoire, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le diagnostic prénatal intervient au cours d’une grossesse en cours.',
          vraie: true,
          justification: 'Exact : le DPN vise à détecter une affection grave chez l’embryon ou le fœtus après le début de la grossesse, par exemple par échographie ou dépistage biologique.',
        },
        {
          lettre: 'B',
          texte: 'Le diagnostic préimplantatoire intervient sur un embryon in vitro, avant son transfert.',
          vraie: true,
          justification: 'Exact : le DPI analyse génétiquement un embryon obtenu par AMP avant son transfert dans l’utérus, donc avant toute grossesse.',
        },
        {
          lettre: 'C',
          texte: 'Ces deux termes désignent la même pratique.',
          vraie: false,
          justification: "Faux : ils se distinguent par le moment de leur réalisation et le contexte, grossesse en cours ou embryon in vitro.",
        },
        {
          lettre: 'D',
          texte: 'Le diagnostic préimplantatoire est réservé à des situations médicales bien définies.',
          vraie: true,
          justification: 'Exact, il est strictement encadré par la loi.',
        },
        {
          lettre: 'E',
          texte: 'Le diagnostic prénatal ne peut être réalisé qu’après l’accouchement.',
          vraie: false,
          justification: "Faux : il est réalisé pendant la grossesse, avant la naissance.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-bioethique-qcm-03',
      enonce: 'Concernant l’assistance médicale à la procréation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est strictement encadrée par la loi.',
          vraie: true,
          justification: 'Exact : la loi définit les indications, les conditions d’accès et les acteurs autorisés à pratiquer l’AMP.',
        },
        {
          lettre: 'B',
          texte: 'Le don de gamètes, lorsqu’il est possible, respecte les principes d’anonymat et de gratuité.',
          vraie: true,
          justification: 'Exact : comme tout don d’éléments du corps humain, le don de gamètes obéit aux principes de gratuité et d’anonymat, traductions du principe de non-marchandisation.',
        },
        {
          lettre: 'C',
          texte: 'Le consentement des personnes concernées n’est pas requis.',
          vraie: false,
          justification: "Faux : le consentement est une condition essentielle de l’encadrement de l’AMP.",
        },
        {
          lettre: 'D',
          texte: 'Les règles d’accès à l’AMP peuvent évoluer avec les révisions législatives.',
          vraie: true,
          justification: 'Exact : les conditions d’accès à l’AMP sont périodiquement redéfinies par les révisions des lois de bioéthique.',
        },
        {
          lettre: 'E',
          texte: 'L’intérêt de l’enfant à naître n’entre jamais en considération.',
          vraie: false,
          justification: "Faux : il fait partie des éléments pris en compte dans l’encadrement de l’AMP.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-bioethique-qcm-04',
      enonce: 'Concernant le don d’organes et de tissus, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il repose sur le principe de gratuité.',
          vraie: true,
          justification: 'Exact : la gratuité interdit toute contrepartie financière pour le donneur, afin d’éviter toute incitation marchande au don.',
        },
        {
          lettre: 'B',
          texte: 'Il peut donner lieu à une rémunération du donneur.',
          vraie: false,
          justification: "Faux : la gratuité exclut toute contrepartie financière pour le donneur.",
        },
        {
          lettre: 'C',
          texte: 'Le principe d’anonymat vise à préserver la liberté du don.',
          vraie: true,
          justification: 'Exact : en empêchant donneur et receveur de se connaître, l’anonymat évite toute pression réciproque et préserve la liberté du consentement.',
        },
        {
          lettre: 'D',
          texte: 'Le don du vivant obéit à des conditions moins strictes que le don après le décès.',
          vraie: false,
          justification: "Faux : le don du vivant obéit à des conditions particulièrement strictes en raison du risque pour le donneur.",
        },
        {
          lettre: 'E',
          texte: 'Le consentement de la personne, exprimé de son vivant ou recherché auprès des proches, est un principe fondamental du don.',
          vraie: true,
          justification: 'Exact : le prélèvement suppose le respect de la volonté de la personne, exprimée de son vivant ou recherchée auprès de ses proches après son décès.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-bioethique-qcm-05',
      enonce: 'Concernant la recherche sur l’embryon, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est strictement encadrée par la loi en France.',
          vraie: true,
          justification: 'Exact : la loi définit les conditions dans lesquelles la recherche sur l’embryon peut être autorisée, en raison du statut moral particulier accordé à l’embryon.',
        },
        {
          lettre: 'B',
          texte: 'Le consentement des personnes ayant recouru à une AMP est requis pour la recherche sur des embryons surnuméraires.',
          vraie: true,
          justification: 'Exact : ce consentement est une condition essentielle lorsque des embryons surnuméraires issus d’une AMP sont utilisés à des fins de recherche.',
        },
        {
          lettre: 'C',
          texte: 'Le débat éthique sur le statut de l’embryon fait consensus absolu dans la société.',
          vraie: false,
          justification: "Faux : ce débat oppose classiquement différentes positions sur le degré de protection dû à l’embryon.",
        },
        {
          lettre: 'D',
          texte: 'Elle est totalement libre et sans aucune condition légale.',
          vraie: false,
          justification: "Faux : elle est au contraire strictement encadrée.",
        },
        {
          lettre: 'E',
          texte: 'Les conditions précises de cette recherche peuvent évoluer avec les révisions législatives.',
          vraie: true,
          justification: 'Exact : seuls les grands principes de consentement et d’encadrement strict sont stables, les modalités précises étant redéfinies à chaque révision des lois de bioéthique.',
        },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-bioethique-qcm-06',
      enonce: 'Concernant le principe de non-marchandisation du corps humain, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il interdit toute rémunération directe en contrepartie d’un don d’organe.',
          vraie: true,
          justification: 'Exact : le principe de non-marchandisation exclut que le corps humain ou ses éléments fassent l’objet d’un droit patrimonial ou d’une transaction commerciale.',
        },
        {
          lettre: 'B',
          texte: 'Il interdit également l’indemnisation de frais réels engagés par le donneur.',
          vraie: false,
          justification: "Faux : l’indemnisation de frais réels est distincte de la rémunération du don et reste compatible avec ce principe.",
        },
        {
          lettre: 'C',
          texte: 'Il s’articule avec les principes de gratuité et d’anonymat du don.',
          vraie: true,
          justification: 'Exact : la gratuité et l’anonymat sont des traductions concrètes de la non-marchandisation dans le champ du don d’organes, de tissus ou de gamètes.',
        },
        {
          lettre: 'D',
          texte: 'Il vise notamment à éviter que la précarité économique ne conduise à un don sous contrainte financière.',
          vraie: true,
          justification: 'Exact : sans ce principe, la précarité économique de certaines personnes pourrait les pousser à consentir à un don sous la pression d’une contrepartie financière.',
        },
        {
          lettre: 'E',
          texte: 'Il s’applique uniquement aux organes et jamais aux tissus ou aux gamètes.',
          vraie: false,
          justification: "Faux : il s’applique plus largement aux éléments et produits du corps humain, y compris tissus et gamètes.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
