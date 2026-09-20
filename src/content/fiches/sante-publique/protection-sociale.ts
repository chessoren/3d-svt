import type { Fiche } from '../../types';

export const ficheProtectionSociale: Fiche = {
  id: 'sante-publique-protection-sociale',
  ue: 'sante-publique',
  titre: 'Protection sociale et économie de la santé',
  sousTitre: "Assurance maladie, solidarité, ticket modérateur, affections de longue durée, efficience",
  chapitre: 'Prévention et système de santé',
  ordre: 10,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'assurance maladie obligatoire',
    'assurance maladie complémentaire',
    'principe de solidarité',
    'ticket modérateur',
    'affection de longue durée',
    'efficience',
    'évaluation médico-économique',
  ],
  objectifs: [
    "Distinguer assurance maladie obligatoire et assurance maladie complémentaire.",
    "Expliquer le principe de solidarité qui fonde la protection sociale française.",
    "Définir le ticket modérateur et son rôle dans le financement des soins.",
    "Définir le dispositif des affections de longue durée (ALD) et ses objectifs.",
    "Définir la notion d’efficience et le principe d’une évaluation médico-économique.",
  ],
  sections: [
    {
      id: 'assurance-maladie',
      titre: 'Assurance maladie obligatoire et complémentaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Assurance maladie obligatoire (AMO)',
          definition:
            "Régime de protection sociale auquel toute personne résidant ou travaillant en France est affiliée de façon obligatoire, financé principalement par des cotisations sociales et des impôts affectés, et qui rembourse une partie des dépenses de santé.",
        },
        {
          type: 'definition',
          terme: 'Assurance maladie complémentaire (AMC)',
          definition:
            "Couverture facultative, souscrite auprès d’une mutuelle, d’une institution de prévoyance ou d’une société d’assurance, qui prend en charge tout ou partie de la part des dépenses de santé non remboursée par l’assurance maladie obligatoire.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison AMO et AMC',
          colonnes: ['Caractéristique', 'Assurance maladie obligatoire', 'Assurance maladie complémentaire'],
          lignes: [
            ['Affiliation', 'Obligatoire pour tous les résidents', 'Facultative, sauf dispositifs spécifiques (complémentaire santé collective en entreprise)'],
            ['Financement', 'Cotisations sociales, contribution sociale généralisée, impôts affectés', 'Cotisations individuelles ou collectives versées à l’organisme complémentaire'],
            ['Logique', 'Solidarité nationale, indépendante du risque individuel', 'Peut intégrer une part de mutualisation, avec une tarification parfois liée au profil de l’assuré'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'La couverture santé solidaire',
          texte:
            "Des dispositifs spécifiques permettent l’accès à une couverture complémentaire pour les personnes aux ressources modestes, afin de limiter le renoncement aux soins lié au reste à charge.",
        },
      ],
    },
    {
      id: 'principe-solidarite',
      titre: 'Le principe de solidarité',
      blocs: [
        {
          type: 'definition',
          terme: 'Principe de solidarité',
          definition:
            "Principe fondateur de la sécurité sociale française selon lequel chacun contribue au financement de la protection sociale selon ses capacités contributives (notamment ses revenus), et reçoit des prestations selon ses besoins de santé, indépendamment du montant de sa contribution individuelle.",
        },
        {
          type: 'liste',
          items: [
            "Ce principe se distingue d’une logique purement assurantielle individuelle, où la cotisation serait proportionnée au risque personnel de chaque assuré.",
            "Il repose sur une mutualisation à l’échelle de la population entière, entre bien-portants et malades, entre jeunes et âgés, entre hauts et bas revenus.",
            "Il fonde historiquement la création de la sécurité sociale française, dans l’immédiat après-guerre.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Solidarité ne signifie pas gratuité totale des soins',
          texte:
            "Le principe de solidarité n’implique pas une prise en charge intégrale et systématique de toutes les dépenses de santé : des dispositifs comme le ticket modérateur ou les franchises organisent une participation résiduelle de l’assuré, tout en préservant l’accès aux soins par des mécanismes de protection renforcée pour certaines situations.",
        },
      ],
    },
    {
      id: 'ticket-moderateur',
      titre: 'Le ticket modérateur',
      blocs: [
        {
          type: 'definition',
          terme: 'Ticket modérateur',
          definition:
            "Part des dépenses de santé qui reste à la charge de l’assuré après remboursement par l’assurance maladie obligatoire, calculée en pourcentage du tarif de convention. Il peut être pris en charge, en tout ou partie, par une assurance maladie complémentaire.",
        },
        {
          type: 'formule',
          expression: 'Reste à charge = Tarif de convention − Remboursement de l’assurance maladie obligatoire',
          legende: "Le ticket modérateur constitue l’essentiel de ce reste à charge, avant intervention éventuelle d’une assurance complémentaire.",
        },
        {
          type: 'liste',
          items: [
            "Le taux du ticket modérateur varie selon la nature de l’acte, du soin ou du médicament concerné.",
            "Certaines situations permettent une exonération totale ou partielle du ticket modérateur, notamment dans le cadre d’une affection de longue durée.",
            "Le ticket modérateur a notamment pour objectif de responsabiliser l’assuré et de limiter le recours abusif aux soins, sans pour autant remettre en cause l’accès aux soins nécessaires.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre ticket modérateur et dépassement d’honoraires',
          texte:
            "Le ticket modérateur est calculé sur la base du tarif de convention fixé conventionnellement. Le dépassement d’honoraires est la part facturée par le professionnel de santé au-delà de ce tarif de convention : il n’est en général pas pris en charge par l’assurance maladie obligatoire et n’est que partiellement couvert par certains contrats complémentaires.",
        },
      ],
    },
    {
      id: 'affections-longue-duree',
      titre: 'Les affections de longue durée',
      blocs: [
        {
          type: 'definition',
          terme: 'Affection de longue durée (ALD)',
          definition:
            "Dispositif permettant, pour certaines pathologies chroniques et sévères nécessitant un traitement prolongé et coûteux, une prise en charge à 100 % par l’assurance maladie obligatoire des soins en lien direct avec cette affection, sur la base des tarifs de convention.",
        },
        {
          type: 'liste',
          items: [
            "La liste des affections de longue durée exonérantes (ALD 30) est fixée réglementairement et regroupe des pathologies chroniques sévères comme le diabète ou certains cancers.",
            "Une ALD peut également être reconnue hors liste, pour une pathologie grave nécessitant un traitement prolongé et particulièrement coûteux, après avis du service médical.",
            "La prise en charge à 100 % concerne exclusivement les soins en lien avec l’affection reconnue, et non l’ensemble des dépenses de santé de l’assuré.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Piège fréquent : ALD ne veut pas dire gratuité totale',
          texte:
            "La reconnaissance d’une affection de longue durée exonère du ticket modérateur pour les soins liés à cette affection, mais ne dispense pas nécessairement des dépassements d’honoraires ni de la participation forfaitaire sur certains actes, et ne concerne pas les soins sans lien avec l’ALD.",
        },
      ],
    },
    {
      id: 'efficience-evaluation',
      titre: 'Efficience et évaluation médico-économique',
      blocs: [
        {
          type: 'definition',
          terme: 'Efficience',
          definition:
            "Rapport entre les résultats obtenus (bénéfices en santé) et les ressources mobilisées pour les obtenir (coûts). Une intervention est efficiente lorsqu’elle permet d’obtenir le meilleur résultat de santé possible pour un niveau de ressources donné, ou le même résultat pour un coût moindre.",
        },
        {
          type: 'paragraphe',
          texte:
            "L’efficience se distingue de l’efficacité, qui mesure uniquement le résultat obtenu par une intervention dans des conditions idéales ou réelles, sans intégrer la dimension des coûts mobilisés pour l’obtenir.",
        },
        {
          type: 'tableau',
          titre: "Principaux types d’évaluation médico-économique",
          colonnes: ['Type d’évaluation', 'Principe'],
          lignes: [
            ['Analyse coût-efficacité', "Compare le coût d’une intervention à un résultat clinique exprimé en unité naturelle (par exemple, coût par année de vie gagnée)"],
            ['Analyse coût-utilité', "Compare le coût d’une intervention à un résultat exprimé en années de vie ajustées sur la qualité de vie (QALY)"],
            ['Analyse coût-bénéfice', "Compare le coût d’une intervention à un bénéfice exprimé lui-même en unité monétaire"],
            ['Analyse coût-conséquence', "Présente séparément les coûts et l’ensemble des conséquences cliniques, sans les agréger en un seul indicateur"],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Pourquoi évaluer médico-économiquement une intervention ?',
          texte:
            "Dans un contexte de ressources limitées, l’évaluation médico-économique éclaire les décisions de remboursement ou de priorisation des politiques de santé, en objectivant le rapport entre le bénéfice apporté aux patients et le coût supporté par la collectivité.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Efficacité et efficience ne se confondent pas',
          texte:
            "Une intervention peut être très efficace, en apportant un bénéfice clinique important, sans être efficiente, si son coût est disproportionné par rapport au bénéfice obtenu comparé à une alternative moins coûteuse.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’assurance maladie obligatoire est financée par la solidarité nationale et indépendante du risque individuel de l’assuré.",
    "L’assurance maladie complémentaire prend en charge tout ou partie du reste à charge après intervention de l’assurance maladie obligatoire.",
    "Le principe de solidarité organise une contribution selon les capacités et des prestations selon les besoins.",
    "Le ticket modérateur est la part des dépenses de santé restant à la charge de l’assuré après remboursement de l’assurance maladie obligatoire, calculée sur le tarif de convention.",
    "Le dépassement d’honoraires, distinct du ticket modérateur, correspond à la part facturée au-delà du tarif de convention.",
    "Le dispositif des affections de longue durée permet une prise en charge à 100 % des soins liés à certaines pathologies chroniques sévères.",
    "L’efficience rapporte le bénéfice de santé obtenu aux ressources mobilisées, à distinguer de la simple efficacité clinique.",
    "L’analyse coût-utilité rapporte le coût d’une intervention à un résultat exprimé en années de vie ajustées sur la qualité de vie (QALY).",
  ],
  erreursFrequentes: [
    "Confondre assurance maladie obligatoire et assurance maladie complémentaire, qui obéissent à des logiques de financement différentes.",
    "Croire que le principe de solidarité implique la gratuité totale et systématique de tous les soins.",
    "Confondre ticket modérateur et dépassement d’honoraires, qui ne relèvent pas du même mécanisme.",
    "Penser que le statut d’affection de longue durée exonère de toute dépense de santé, y compris pour des soins sans lien avec l’affection concernée.",
    "Confondre efficacité (résultat obtenu) et efficience (rapport entre résultat et coût mobilisé).",
    "Confondre analyse coût-efficacité et analyse coût-utilité, qui n’utilisent pas le même type d’indicateur de résultat.",
  ],
  mnemotechniques: [
    {
      moyen: 'Solidarité : Cotiser selon ses Moyens, Recevoir selon ses Besoins',
      explication: "Le principe fondateur de la sécurité sociale française : la contribution dépend des capacités, la prestation dépend des besoins.",
    },
    {
      moyen: 'Ticket modérateur = reste à charge conventionnel',
      explication: "Il se calcule toujours par rapport au tarif de convention, à distinguer du dépassement d’honoraires qui s’y ajoute.",
    },
    {
      moyen: 'QALY = Qualité + Longévité',
      explication: "Le QALY (année de vie ajustée sur la qualité de vie) combine la durée de vie gagnée et sa qualité, utilisé dans l’analyse coût-utilité.",
    },
  ],
  sources: [
    'Code de la sécurité sociale, dispositions relatives à l’assurance maladie',
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    'Haute Autorité de santé, guide méthodologique pour l’évaluation économique',
    "Direction de la recherche, des études, de l’évaluation et des statistiques (DREES), rapports sur la protection sociale",
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-protection-sociale-fc-01',
      recto: "Qu’est-ce que l’assurance maladie obligatoire ?",
      verso: "Le régime de protection sociale auquel toute personne résidant ou travaillant en France est affiliée obligatoirement.",
      type: 'definition',
      tags: ['assurance maladie obligatoire'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-02',
      recto: "Qu’est-ce que l’assurance maladie complémentaire ?",
      verso: "Une couverture facultative prenant en charge tout ou partie du reste à charge après remboursement de l’assurance maladie obligatoire.",
      type: 'definition',
      tags: ['assurance maladie complémentaire'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-03',
      recto: 'Résumer le principe de solidarité en une phrase.',
      verso: "Chacun contribue selon ses capacités, et reçoit des prestations selon ses besoins de santé.",
      type: 'definition',
      tags: ['solidarité'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-04',
      recto: 'Définir le ticket modérateur.',
      verso: "La part des dépenses de santé restant à la charge de l’assuré après remboursement de l’assurance maladie obligatoire, calculée sur le tarif de convention.",
      type: 'definition',
      tags: ['ticket modérateur'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-05',
      recto: 'Différencier ticket modérateur et dépassement d’honoraires.',
      verso: "Le ticket modérateur se calcule sur le tarif de convention ; le dépassement d’honoraires est la part facturée au-delà de ce tarif.",
      type: 'classification',
      tags: ['ticket modérateur'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-06',
      recto: "Qu’est-ce qu’une affection de longue durée (ALD) ?",
      verso: "Un dispositif permettant une prise en charge à 100 % des soins liés à certaines pathologies chroniques sévères, sur la base des tarifs de convention.",
      type: 'definition',
      tags: ['ALD'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-07',
      recto: "La prise en charge à 100 % d’une ALD concerne-t-elle toutes les dépenses de santé de l’assuré ?",
      verso: "Non : elle concerne uniquement les soins en lien direct avec l’affection reconnue.",
      type: 'mecanisme',
      tags: ['ALD'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-08',
      recto: "Différencier efficacité et efficience.",
      verso: "L’efficacité mesure le résultat obtenu par une intervention ; l’efficience rapporte ce résultat aux ressources mobilisées pour l’obtenir.",
      type: 'definition',
      tags: ['efficience'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-09',
      recto: 'Que mesure une analyse coût-utilité ?',
      verso: "Le coût d’une intervention rapporté à un résultat exprimé en années de vie ajustées sur la qualité de vie (QALY).",
      type: 'definition',
      tags: ['évaluation médico-économique'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-10',
      recto: 'Que mesure une analyse coût-efficacité ?',
      verso: "Le coût d’une intervention rapporté à un résultat clinique exprimé en unité naturelle, par exemple le coût par année de vie gagnée.",
      type: 'definition',
      tags: ['évaluation médico-économique'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-11',
      recto: 'Pourquoi réalise-t-on des évaluations médico-économiques en santé ?',
      verso: "Pour éclairer les décisions de remboursement et de priorisation des politiques de santé, dans un contexte de ressources limitées.",
      type: 'mecanisme',
      tags: ['évaluation médico-économique'],
    },
    {
      id: 'sante-publique-protection-sociale-fc-12',
      recto: "Une intervention efficace est-elle toujours efficiente ?",
      verso: "Non : elle peut apporter un bénéfice clinique important sans être efficiente si son coût est disproportionné par rapport à ce bénéfice.",
      type: 'mecanisme',
      tags: ['efficience'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-protection-sociale-qcm-01',
      enonce: "Concernant l’assurance maladie obligatoire et complémentaire, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "L’affiliation à l’assurance maladie obligatoire est obligatoire pour toute personne résidant en France.", vraie: true, justification: "Exact, c’est le principe même de ce régime." },
        { lettre: 'B', texte: "L’assurance maladie complémentaire est financée uniquement par des cotisations sociales générales.", vraie: false, justification: "Faux : elle est financée par des cotisations spécifiques versées à l’organisme complémentaire choisi." },
        { lettre: 'C', texte: "L’assurance maladie obligatoire repose sur une logique de solidarité indépendante du risque individuel.", vraie: true, justification: "Exact, c’est ce qui la distingue d’une assurance purement individuelle." },
        { lettre: 'D', texte: "Toute personne dispose obligatoirement d’une assurance maladie complémentaire en France.", vraie: false, justification: "Faux : elle est en principe facultative, même si des dispositifs facilitent son accès." },
        { lettre: 'E', texte: "L’assurance maladie complémentaire peut prendre en charge le ticket modérateur.", vraie: true, justification: "Exact, c’est l’une de ses fonctions principales." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'sante-publique-protection-sociale-qcm-02',
      enonce: 'Concernant le principe de solidarité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il implique que la cotisation dépend des capacités contributives de chacun.', vraie: true, justification: "Exact, c’est l’un des deux piliers du principe de solidarité." },
        { lettre: 'B', texte: 'Il implique que les prestations dépendent des besoins de santé, indépendamment du montant cotisé.', vraie: true, justification: "Exact, c’est le second pilier de ce principe." },
        { lettre: 'C', texte: 'Il correspond à une logique purement assurantielle individuelle.', vraie: false, justification: "Faux : c’est précisément l’inverse d’une logique assurantielle individuelle proportionnée au risque personnel." },
        { lettre: 'D', texte: 'Il implique la gratuité totale et systématique de tous les soins.', vraie: false, justification: "Faux : des dispositifs comme le ticket modérateur organisent une participation résiduelle de l’assuré." },
        { lettre: 'E', texte: 'Il repose sur une mutualisation entre bien-portants et malades.', vraie: true, justification: "Exact, c’est le fondement même de la mutualisation du risque en santé." },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-protection-sociale-qcm-03',
      enonce: 'Concernant le ticket modérateur, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il se calcule sur la base du tarif de convention.', vraie: true, justification: 'Exact, c’est la base de son calcul.' },
        { lettre: 'B', texte: 'Il est identique au dépassement d’honoraires.', vraie: false, justification: "Faux : ce sont deux notions distinctes, le dépassement s’ajoutant au-delà du tarif de convention." },
        { lettre: 'C', texte: 'Son taux est identique quel que soit l’acte ou le soin concerné.', vraie: false, justification: "Faux : il varie selon la nature de l’acte, du soin ou du médicament." },
        { lettre: 'D', texte: 'Il peut être exonéré dans le cadre d’une affection de longue durée.', vraie: true, justification: "Exact, c’est l’un des effets du dispositif ALD pour les soins concernés." },
        { lettre: 'E', texte: 'Il peut être pris en charge par une assurance maladie complémentaire.', vraie: true, justification: "Exact, c’est l’une des fonctions principales de la complémentaire santé." },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-protection-sociale-qcm-04',
      enonce: 'Concernant les affections de longue durée, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elles permettent une prise en charge à 100 % de tous les soins de l’assuré, y compris sans lien avec l’affection.', vraie: false, justification: "Faux : la prise en charge à 100 % ne concerne que les soins en lien direct avec l’affection reconnue." },
        { lettre: 'B', texte: 'Une liste réglementaire fixe les principales affections de longue durée exonérantes.', vraie: true, justification: "Exact, c’est la liste dite des ALD 30." },
        { lettre: 'C', texte: 'Une ALD hors liste peut être reconnue après avis du service médical.', vraie: true, justification: "Exact, pour des pathologies graves nécessitant un traitement prolongé et coûteux." },
        { lettre: 'D', texte: 'Le statut ALD dispense systématiquement des dépassements d’honoraires.', vraie: false, justification: "Faux : l’exonération porte sur le ticket modérateur, pas nécessairement sur les dépassements d’honoraires." },
        { lettre: 'E', texte: 'Le diabète peut faire partie des affections de longue durée exonérantes.', vraie: true, justification: 'Exact, il figure classiquement parmi les pathologies concernées.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-protection-sociale-qcm-05',
      enonce: "Concernant l’efficience et l’évaluation médico-économique, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: 'L’efficience mesure uniquement le résultat clinique obtenu, sans tenir compte du coût.', vraie: false, justification: "Faux : c’est la définition de l’efficacité, pas de l’efficience, qui intègre le rapport au coût." },
        { lettre: 'B', texte: 'Une analyse coût-utilité utilise le QALY comme indicateur de résultat.', vraie: true, justification: "Exact, c’est la caractéristique de ce type d’analyse." },
        { lettre: 'C', texte: 'Une analyse coût-bénéfice exprime le bénéfice en unité monétaire.', vraie: true, justification: "Exact, c’est ce qui la distingue des analyses coût-efficacité et coût-utilité." },
        { lettre: 'D', texte: "L’évaluation médico-économique n’a aucune utilité pour les décisions de remboursement.", vraie: false, justification: "Faux : elle éclaire au contraire ces décisions, dans un contexte de ressources limitées." },
        { lettre: 'E', texte: 'Une intervention efficace est nécessairement efficiente.', vraie: false, justification: "Faux : elle peut être efficace sans être efficiente si son coût est disproportionné par rapport au bénéfice apporté." },
      ],
      correction: 'Réponses exactes : B et C.',
      difficulte: 3,
    },
    {
      id: 'sante-publique-protection-sociale-qcm-06',
      enonce: "Concernant l’économie de la santé en général, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: 'L’analyse coût-conséquence agrège systématiquement les coûts et les conséquences en un seul indicateur.', vraie: false, justification: "Faux : elle présente au contraire séparément les coûts et l’ensemble des conséquences cliniques." },
        { lettre: 'B', texte: 'Le reste à charge peut être réduit par l’intervention d’une assurance maladie complémentaire.', vraie: true, justification: 'Exact, c’est l’une de ses fonctions principales.' },
        { lettre: 'C', texte: 'La sécurité sociale française repose historiquement sur une logique de solidarité mise en place dans l’immédiat après-guerre.', vraie: true, justification: 'Exact, c’est le contexte de sa création.' },
        { lettre: 'D', texte: "L’évaluation médico-économique ne concerne que les médicaments, jamais les actes ou dispositifs médicaux.", vraie: false, justification: "Faux : elle peut porter sur toute intervention de santé, médicament, acte ou dispositif médical." },
        { lettre: 'E', texte: "Le principe de solidarité fonde une mutualisation du risque entre l’ensemble des assurés.", vraie: true, justification: "Exact, c’est le principe fondamental de ce système." },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
  ],
};
