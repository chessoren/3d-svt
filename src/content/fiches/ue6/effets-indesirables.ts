import type { Fiche } from '../../types';

export const ficheEffetsIndesirables: Fiche = {
  id: 'ue6-effets-indesirables',
  ue: 'ue6',
  titre: 'Effets indésirables et pharmacovigilance',
  sousTitre: 'Classification des effets indésirables, iatrogénie, imputabilité, déclaration, rapport bénéfice-risque',
  chapitre: 'Bon usage et développement',
  ordre: 10,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'effet indésirable',
    'effet de type A',
    'effet de type B',
    'iatrogénie',
    'pharmacovigilance',
    'imputabilité',
    'déclaration',
    'bénéfice-risque',
  ],
  objectifs: [
    'Définir un effet indésirable médicamenteux.',
    'Distinguer les effets indésirables de type A et de type B.',
    'Définir la notion d’iatrogénie médicamenteuse.',
    'Décrire le principe et les critères de l’imputabilité.',
    'Expliquer le circuit de déclaration en pharmacovigilance.',
    'Situer la notion de rapport bénéfice-risque dans la décision thérapeutique.',
  ],
  sections: [
    {
      id: 'definition-classification',
      titre: 'Définition et classification des effets indésirables',
      blocs: [
        {
          type: 'definition',
          terme: 'Effet indésirable médicamenteux',
          definition:
            "Réaction nocive et non recherchée à un médicament, survenant à des doses normalement utilisées chez l’homme pour la prophylaxie, le diagnostic ou le traitement d’une maladie, ou lors de la modification d’une fonction physiologique, ou résultant d’un mésusage, d’un usage détourné, d’une erreur médicamenteuse ou d’un surdosage.",
        },
        {
          type: 'paragraphe',
          texte:
            "La classification la plus utilisée en pharmacologie distingue les effets indésirables de type A, prévisibles et liés au mécanisme d’action pharmacologique, des effets indésirables de type B, imprévisibles et indépendants de l’action pharmacologique principale.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des effets indésirables de type A et de type B',
          colonnes: ['Caractéristique', 'Type A (augmented)', 'Type B (bizarre)'],
          lignes: [
            ['Prévisibilité', 'Prévisible à partir du mécanisme d’action', 'Imprévisible, souvent indépendant du mécanisme d’action principal'],
            ['Relation avec la dose', 'Dose-dépendant', 'Généralement indépendant de la dose'],
            ['Fréquence', 'Fréquent', 'Rare'],
            ['Gravité habituelle', 'Généralement modérée, réversible à l’arrêt ou à la réduction de dose', 'Peut être sévère, parfois imprévisible dans son intensité'],
            ['Exemple', 'Hypoglycémie sous insuline, bradycardie sous bêta-bloquant', 'Réaction allergique, agranulocytose médicamenteuse'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Autres types décrits',
          texte:
            "Au-delà des types A et B, la littérature décrit parfois des effets de type C (chroniques, liés à un usage prolongé), de type D (différés, survenant à distance de l’exposition, comme un effet tératogène ou cancérogène) et de type E (liés au sevrage, à l’arrêt du traitement). Les types A et B restent les deux catégories les plus fréquemment exigées en PASS.",
        },
      ],
    },
    {
      id: 'iatrogenie',
      titre: 'Iatrogénie médicamenteuse',
      blocs: [
        {
          type: 'definition',
          terme: 'Iatrogénie médicamenteuse',
          definition:
            "Ensemble des conséquences néfastes pour la santé, résultant de l’intervention médicale ou d’un médicament, qu’elles soient liées à l’état du malade, à une erreur, à un aléa thérapeutique ou à un effet indésirable inhérent au traitement lui-même.",
        },
        {
          type: 'liste',
          items: [
            'L’iatrogénie médicamenteuse est une cause fréquente d’hospitalisation, en particulier chez le sujet âgé polymédiqué.',
            'Une partie importante de l’iatrogénie médicamenteuse est considérée comme évitable, notamment lorsqu’elle résulte d’une prescription inadaptée, d’une interaction médicamenteuse connue ou d’un défaut de surveillance.',
            'La prévention de l’iatrogénie repose sur la réévaluation régulière des ordonnances, la limitation des prescriptions inutiles et la vigilance accrue chez les populations fragiles.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Enjeu de santé publique',
          texte:
            "L’iatrogénie médicamenteuse représente un enjeu majeur de santé publique, en raison de sa fréquence, de son coût pour le système de soins et de la part évitable qu’elle comporte, ce qui justifie les politiques de bon usage du médicament et de pharmacovigilance.",
        },
      ],
    },
    {
      id: 'imputabilite',
      titre: 'Imputabilité',
      blocs: [
        {
          type: 'definition',
          terme: 'Imputabilité',
          definition:
            "Démarche méthodologique visant à évaluer la probabilité qu’un événement clinique observé chez un patient soit effectivement lié à la prise d’un médicament donné, en tenant compte de critères chronologiques et sémiologiques.",
        },
        {
          type: 'tableau',
          titre: 'Critères classiques de l’imputabilité',
          colonnes: ['Type de critère', 'Exemples de critères pris en compte'],
          lignes: [
            ['Critères chronologiques', 'Délai entre l’introduction du médicament et la survenue de l’événement, évolution à l’arrêt du médicament, réapparition en cas de réadministration'],
            ['Critères sémiologiques', 'Compatibilité du tableau clinique avec les effets déjà connus du médicament, présence de facteurs favorisants, existence d’une autre cause possible'],
          ],
        },
        {
          type: 'liste',
          items: [
            'L’effet de la réintroduction accidentelle ou volontaire du médicament suspecté, lorsqu’elle est disponible, renforce fortement la présomption d’imputabilité en cas de réapparition du même événement.',
            'L’existence d’une explication alternative plausible, non médicamenteuse, diminue au contraire le niveau d’imputabilité retenu.',
            'L’imputabilité est évaluée au cas par cas pour chaque déclaration, et peut évoluer avec l’accumulation de données pour un même médicament.',
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir l’essentiel',
          texte:
            "L’imputabilité combine toujours une dimension temporelle (le moment de survenue par rapport à la prise du médicament) et une dimension clinique (la cohérence du tableau observé avec les propriétés connues ou plausibles du médicament).",
        },
      ],
    },
    {
      id: 'pharmacovigilance-declaration',
      titre: 'Pharmacovigilance et déclaration',
      blocs: [
        {
          type: 'definition',
          terme: 'Pharmacovigilance',
          definition:
            "Ensemble des activités de surveillance, de recueil, d’enregistrement et d’évaluation des informations relatives aux effets indésirables des médicaments, dans le but de prévenir la survenue d’effets indésirables évitables et de mieux caractériser le profil de sécurité d’un médicament après sa commercialisation.",
        },
        {
          type: 'liste',
          items: [
            'La pharmacovigilance repose en grande partie sur la déclaration spontanée des effets indésirables par les professionnels de santé et, en France, également par les patients eux-mêmes.',
            'Tout professionnel de santé ayant constaté un effet indésirable susceptible d’être dû à un médicament est tenu de le déclarer au centre régional de pharmacovigilance.',
            'La déclaration doit être particulièrement encouragée pour les effets indésirables graves, inattendus ou concernant un médicament récemment commercialisé.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Effet indésirable grave',
          texte:
            "Un effet indésirable est qualifié de grave lorsqu’il entraîne le décès, met en jeu le pronostic vital, provoque une invalidité ou une incapacité durable, nécessite ou prolonge une hospitalisation, ou se manifeste par une anomalie ou une malformation congénitale.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Rôle du système de pharmacovigilance après la commercialisation',
          texte:
            "Les essais cliniques réalisés avant l’autorisation de mise sur le marché ne peuvent détecter que les effets indésirables les plus fréquents, en raison du nombre limité de sujets inclus. La pharmacovigilance post-commercialisation permet de détecter des effets indésirables rares, qui n’apparaissent qu’à l’échelle d’une utilisation beaucoup plus large en population générale.",
        },
      ],
    },
    {
      id: 'benefice-risque',
      titre: 'Notion de risque et de rapport bénéfice-risque',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La décision de prescrire ou de maintenir un médicament repose sur l’évaluation de son rapport bénéfice-risque, c’est-à-dire la comparaison entre les bénéfices attendus du traitement et les risques d’effets indésirables encourus, dans une situation clinique donnée.",
        },
        {
          type: 'liste',
          items: [
            'Le rapport bénéfice-risque n’est pas figé : il peut évoluer avec l’acquisition de nouvelles données de pharmacovigilance, l’apparition de nouvelles alternatives thérapeutiques, ou l’évolution de l’état clinique du patient.',
            'Un rapport bénéfice-risque jugé défavorable peut conduire à une restriction d’indication, à un renforcement de la surveillance, voire au retrait du marché d’un médicament.',
            'L’évaluation du rapport bénéfice-risque doit toujours être individualisée, en tenant compte des caractéristiques propres du patient et de la gravité de la pathologie traitée.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Décisions réglementaires possibles',
          texte:
            "Face à un signal de pharmacovigilance, les autorités sanitaires peuvent décider de modifier le résumé des caractéristiques du produit, de restreindre les indications, d’ajouter une contre-indication ou une mise en garde, de suspendre l’autorisation de mise sur le marché, voire de retirer définitivement le médicament du marché.",
        },
      ],
    },
  ],
  pointsCles: [
    "Un effet indésirable médicamenteux peut survenir à dose normale ou résulter d’un mésusage ou d’un surdosage.",
    "Les effets de type A sont prévisibles et dose-dépendants, les effets de type B sont imprévisibles et rares.",
    "L’iatrogénie médicamenteuse est une cause fréquente et en partie évitable d’hospitalisation.",
    "L’imputabilité combine des critères chronologiques et sémiologiques pour évaluer le lien entre un événement et un médicament.",
    "La pharmacovigilance repose largement sur la déclaration spontanée par les professionnels de santé et les patients.",
    "La pharmacovigilance post-commercialisation permet de détecter des effets indésirables rares non identifiés lors des essais cliniques.",
    "Le rapport bénéfice-risque guide la décision thérapeutique et peut évoluer avec les données disponibles.",
  ],
  erreursFrequentes: [
    "Croire que les effets indésirables de type A sont rares, alors qu’ils sont au contraire fréquents et dose-dépendants.",
    "Penser qu’un effet indésirable de type B est toujours dose-dépendant, alors qu’il en est généralement indépendant.",
    "Oublier que la déclaration en pharmacovigilance est une obligation pour les professionnels de santé en cas d’effet indésirable suspecté.",
    "Croire que les essais cliniques précommercialisation permettent de détecter tous les effets indésirables possibles.",
    "Considérer le rapport bénéfice-risque comme une donnée fixe, indépendante de l’évolution des connaissances.",
  ],
  mnemotechniques: [
    {
      moyen: 'A comme Attendu, Augmenté, Amplifié par la dose',
      explication:
        'Les effets de type A sont prévisibles, liés au mécanisme d’action, et augmentent avec la dose.',
    },
    {
      moyen: 'B comme Bizarre',
      explication:
        'Les effets de type B sont imprévisibles, indépendants de la dose, et souvent non liés au mécanisme d’action principal.',
    },
    {
      moyen: 'Imputabilité = Temps + Tableau clinique',
      explication:
        'L’évaluation de l’imputabilité combine toujours la chronologie de survenue et la compatibilité du tableau clinique avec le médicament suspecté.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-effets-indesirables-fc-01',
      recto: 'Définir un effet indésirable médicamenteux.',
      verso: 'Une réaction nocive et non recherchée à un médicament, survenant à dose normale ou résultant d’un mésusage, d’une erreur ou d’un surdosage.',
      type: 'definition',
      tags: ['effet indésirable'],
    },
    {
      id: 'ue6-effets-indesirables-fc-02',
      recto: 'Qu’est-ce qu’un effet indésirable de type A ?',
      verso: 'Un effet prévisible, dose-dépendant, lié au mécanisme d’action pharmacologique du médicament.',
      type: 'classification',
      tags: ['type A'],
    },
    {
      id: 'ue6-effets-indesirables-fc-03',
      recto: 'Qu’est-ce qu’un effet indésirable de type B ?',
      verso: 'Un effet imprévisible, rare, généralement indépendant de la dose et du mécanisme d’action principal.',
      type: 'classification',
      tags: ['type B'],
    },
    {
      id: 'ue6-effets-indesirables-fc-04',
      recto: 'Donner un exemple d’effet indésirable de type A.',
      verso: 'L’hypoglycémie sous insuline, ou la bradycardie sous bêta-bloquant.',
      type: 'clinique',
      tags: ['type A'],
    },
    {
      id: 'ue6-effets-indesirables-fc-05',
      recto: 'Donner un exemple d’effet indésirable de type B.',
      verso: 'Une réaction allergique, ou une agranulocytose médicamenteuse.',
      type: 'clinique',
      tags: ['type B'],
    },
    {
      id: 'ue6-effets-indesirables-fc-06',
      recto: 'Qu’est-ce que l’iatrogénie médicamenteuse ?',
      verso: 'L’ensemble des conséquences néfastes pour la santé résultant d’un médicament ou d’une intervention médicale.',
      type: 'definition',
      tags: ['iatrogénie'],
    },
    {
      id: 'ue6-effets-indesirables-fc-07',
      recto: 'Quels sont les deux grands types de critères de l’imputabilité ?',
      verso: 'Les critères chronologiques et les critères sémiologiques.',
      type: 'classification',
      tags: ['imputabilité'],
    },
    {
      id: 'ue6-effets-indesirables-fc-08',
      recto: 'Qu’est-ce que la pharmacovigilance ?',
      verso: 'L’ensemble des activités de surveillance et d’évaluation des effets indésirables des médicaments après leur commercialisation.',
      type: 'definition',
      tags: ['pharmacovigilance'],
    },
    {
      id: 'ue6-effets-indesirables-fc-09',
      recto: 'Qui peut déclarer un effet indésirable en France ?',
      verso: 'Les professionnels de santé, tenus de le faire en cas de suspicion, et également les patients eux-mêmes.',
      type: 'clinique',
      tags: ['déclaration'],
    },
    {
      id: 'ue6-effets-indesirables-fc-10',
      recto: 'Pourquoi la pharmacovigilance post-commercialisation est-elle indispensable ?',
      verso: 'Parce que les essais cliniques précommercialisation ne peuvent détecter que les effets fréquents, pas les effets rares.',
      type: 'mecanisme',
      tags: ['pharmacovigilance'],
    },
    {
      id: 'ue6-effets-indesirables-fc-11',
      recto: 'Que compare le rapport bénéfice-risque ?',
      verso: 'Les bénéfices attendus d’un traitement et les risques d’effets indésirables encourus, dans une situation clinique donnée.',
      type: 'definition',
      tags: ['bénéfice-risque'],
    },
    {
      id: 'ue6-effets-indesirables-fc-12',
      recto: 'Citer une conséquence possible d’un rapport bénéfice-risque jugé défavorable.',
      verso: 'Une restriction d’indication, un renforcement de la surveillance ou un retrait du marché.',
      type: 'clinique',
      tags: ['bénéfice-risque'],
    },
  ],
  qcm: [
    {
      id: 'ue6-effets-indesirables-qcm-01',
      enonce: 'Concernant la définition d’un effet indésirable médicamenteux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il peut survenir à dose normalement utilisée.', vraie: true, justification: 'C’est le cas le plus fréquent, notamment pour les effets de type A.' },
        { lettre: 'B', texte: 'Il ne peut jamais résulter d’un surdosage.', vraie: false, justification: 'Un surdosage peut au contraire être à l’origine d’un effet indésirable médicamenteux.' },
        { lettre: 'C', texte: 'Il peut résulter d’un mésusage du médicament.', vraie: true, justification: 'Le mésusage fait partie des situations pouvant entraîner un effet indésirable.' },
        { lettre: 'D', texte: 'Il est toujours recherché par le prescripteur.', vraie: false, justification: 'Par définition, un effet indésirable est non recherché, à l’inverse de l’effet thérapeutique visé.' },
        { lettre: 'E', texte: 'Une erreur médicamenteuse peut être à l’origine d’un effet indésirable.', vraie: true, justification: 'C’est l’une des situations pouvant entraîner un effet indésirable médicamenteux.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue6-effets-indesirables-qcm-02',
      enonce: 'Concernant les effets indésirables de type A et de type B, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les effets de type A sont en général dose-dépendants.', vraie: true, justification: 'Ils sont liés au mécanisme d’action pharmacologique, dont l’intensité dépend de la dose.' },
        { lettre: 'B', texte: 'Les effets de type B sont généralement prévisibles à partir du mécanisme d’action.', vraie: false, justification: 'Les effets de type B sont au contraire imprévisibles et souvent indépendants du mécanisme d’action principal.' },
        { lettre: 'C', texte: 'Les effets de type A sont plus fréquents que les effets de type B.', vraie: true, justification: 'C’est une caractéristique distinctive classique entre les deux types.' },
        { lettre: 'D', texte: 'Une réaction allergique est un exemple typique d’effet de type A.', vraie: false, justification: 'Une réaction allergique est un exemple typique d’effet de type B, imprévisible et indépendant de la dose.' },
        { lettre: 'E', texte: 'Les effets de type B peuvent être sévères et de survenue imprévisible.', vraie: true, justification: 'C’est une caractéristique importante de ce type d’effet indésirable.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-effets-indesirables-qcm-03',
      enonce: 'Concernant l’iatrogénie médicamenteuse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est une cause fréquente d’hospitalisation, en particulier chez le sujet âgé.', vraie: true, justification: 'La polymédication et la fragilité physiologique du sujet âgé expliquent cette fréquence accrue.' },
        { lettre: 'B', texte: 'Elle est toujours totalement inévitable.', vraie: false, justification: 'Une part importante de l’iatrogénie médicamenteuse est au contraire considérée comme évitable.' },
        { lettre: 'C', texte: 'Elle peut résulter d’une interaction médicamenteuse connue non prise en compte.', vraie: true, justification: 'C’est l’une des causes classiques d’iatrogénie évitable.' },
        { lettre: 'D', texte: 'Elle représente un enjeu de santé publique.', vraie: true, justification: 'Sa fréquence et son coût pour le système de soins en font un enjeu majeur.' },
        { lettre: 'E', texte: 'Elle ne concerne que les erreurs de prescription, jamais les effets indésirables inhérents au traitement.', vraie: false, justification: 'Elle englobe aussi les effets indésirables inhérents au traitement, pas seulement les erreurs.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-effets-indesirables-qcm-04',
      enonce: 'Concernant l’imputabilité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle repose sur des critères chronologiques et sémiologiques.', vraie: true, justification: 'Ce sont les deux grandes catégories de critères pris en compte dans l’évaluation de l’imputabilité.' },
        { lettre: 'B', texte: 'Le délai entre l’introduction du médicament et l’événement est un critère chronologique.', vraie: true, justification: 'La chronologie de survenue fait partie des critères classiques d’imputabilité.' },
        { lettre: 'C', texte: 'L’existence d’une cause alternative plausible renforce l’imputabilité au médicament.', vraie: false, justification: 'Une explication alternative plausible diminue au contraire le niveau d’imputabilité retenu.' },
        { lettre: 'D', texte: 'La réapparition de l’événement lors d’une réadministration renforce la présomption d’imputabilité.', vraie: true, justification: 'C’est un argument chronologique fort en faveur du lien de causalité.' },
        { lettre: 'E', texte: 'L’imputabilité est fixée définitivement dès la première déclaration.', vraie: false, justification: 'Elle peut évoluer avec l’accumulation de nouvelles données concernant le médicament.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-effets-indesirables-qcm-05',
      enonce: 'Concernant la pharmacovigilance et la déclaration, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les professionnels de santé sont tenus de déclarer un effet indésirable suspecté au centre régional de pharmacovigilance.', vraie: true, justification: 'C’est une obligation réglementaire en France.' },
        { lettre: 'B', texte: 'Seuls les médecins peuvent déclarer un effet indésirable en France.', vraie: false, justification: 'Les patients peuvent également déclarer directement un effet indésirable, en plus des professionnels de santé.' },
        { lettre: 'C', texte: 'Un effet indésirable grave peut mettre en jeu le pronostic vital.', vraie: true, justification: 'C’est l’un des critères de gravité retenus dans la définition réglementaire.' },
        { lettre: 'D', texte: 'Les essais cliniques précommercialisation permettent de détecter tous les effets indésirables rares.', vraie: false, justification: 'Leur taille limitée ne permet de détecter que les effets les plus fréquents, pas les effets rares.' },
        { lettre: 'E', texte: 'La pharmacovigilance post-commercialisation complète les données des essais cliniques.', vraie: true, justification: 'Elle permet de détecter des effets indésirables rares, non identifiés lors du développement clinique.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-effets-indesirables-qcm-06',
      enonce: 'Concernant le rapport bénéfice-risque, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il compare les bénéfices attendus et les risques encourus d’un traitement.', vraie: true, justification: 'C’est la définition même du rapport bénéfice-risque.' },
        { lettre: 'B', texte: 'Il est fixé une fois pour toutes lors de l’autorisation de mise sur le marché.', vraie: false, justification: 'Il peut évoluer avec de nouvelles données de pharmacovigilance ou de nouvelles alternatives thérapeutiques.' },
        { lettre: 'C', texte: 'Un rapport bénéfice-risque défavorable peut conduire au retrait du marché d’un médicament.', vraie: true, justification: 'C’est l’une des conséquences réglementaires possibles en cas de signal de pharmacovigilance préoccupant.' },
        { lettre: 'D', texte: 'Son évaluation doit être individualisée pour chaque patient.', vraie: true, justification: 'Les caractéristiques du patient et la gravité de la pathologie traitée influencent cette évaluation.' },
        { lettre: 'E', texte: 'Il ne concerne que les médicaments nouvellement commercialisés.', vraie: false, justification: 'Il concerne tous les médicaments, tout au long de leur cycle de vie, y compris les plus anciens.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
