import type { Fiche } from '../../types';

export const ficheDeveloppementMedicament: Fiche = {
  id: 'ue6-developpement-medicament',
  ue: 'ue6',
  titre: 'Développement du médicament et essais cliniques',
  sousTitre: 'Phases précliniques, phases I à IV, randomisation, insu, groupe témoin, éthique de la recherche, effet placebo',
  chapitre: 'Bon usage et développement',
  ordre: 11,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'développement du médicament',
    'phase préclinique',
    'essai clinique',
    'randomisation',
    'insu',
    'groupe témoin',
    'éthique de la recherche',
    'effet placebo',
  ],
  objectifs: [
    'Décrire les grandes étapes précliniques du développement d’un médicament.',
    'Différencier les phases I à IV des essais cliniques et leurs objectifs respectifs.',
    'Expliquer l’intérêt de la randomisation et de l’insu dans un essai clinique.',
    'Définir le rôle du groupe témoin et de l’effet placebo.',
    'Citer les principes éthiques encadrant la recherche biomédicale chez l’homme.',
  ],
  sections: [
    {
      id: 'phase-preclinique',
      titre: 'Phase préclinique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La phase préclinique regroupe l’ensemble des études réalisées avant toute administration à l’homme, in vitro sur des systèmes cellulaires ou moléculaires, puis in vivo chez l’animal, afin d’évaluer les propriétés pharmacologiques, pharmacocinétiques et toxicologiques d’une nouvelle molécule.",
        },
        {
          type: 'tableau',
          titre: 'Objectifs principaux des études précliniques',
          colonnes: ['Type d’étude', 'Objectif'],
          lignes: [
            ['Études pharmacologiques', 'Caractériser le mécanisme d’action et l’efficacité potentielle de la molécule'],
            ['Études pharmacocinétiques animales', 'Décrire l’absorption, la distribution, le métabolisme et l’élimination chez l’animal'],
            ['Études de toxicologie aiguë et chronique', 'Déterminer la dose toxique, les organes cibles de toxicité et la marge de sécurité initiale'],
            ['Études de génotoxicité, de cancérogenèse et de reprotoxicité', 'Évaluer les risques mutagènes, cancérogènes et sur la reproduction'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Détermination de la DL50 et de la dose de départ',
          texte:
            "Les études précliniques permettent notamment de déterminer la DL50 chez l’animal et d’estimer une dose initiale jugée suffisamment sûre pour débuter les premières administrations chez l’homme, en phase I.",
        },
      ],
    },
    {
      id: 'phases-cliniques',
      titre: 'Phases cliniques I à IV',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une fois les études précliniques jugées suffisamment rassurantes, le développement clinique se déroule classiquement en quatre phases successives, chacune ayant des objectifs, un effectif et une méthodologie propres.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre phases du développement clinique',
          colonnes: ['Phase', 'Population', 'Objectif principal'],
          lignes: [
            ['Phase I', 'Petit nombre de volontaires sains, en général quelques dizaines', 'Évaluer la tolérance, la sécurité et le profil pharmacocinétique chez l’homme'],
            ['Phase II', 'Petit nombre de patients atteints de la pathologie ciblée', 'Rechercher la dose optimale et obtenir les premières données d’efficacité'],
            ['Phase III', 'Grand nombre de patients, souvent plusieurs centaines à milliers', 'Confirmer l’efficacité et la sécurité à grande échelle, avant la demande d’AMM'],
            ['Phase IV', 'Population large, en conditions réelles d’utilisation après commercialisation', 'Surveiller la sécurité à long terme et détecter les effets indésirables rares'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Phase I et volontaires sains',
          texte:
            "La phase I est en général réalisée chez des volontaires sains, sauf exceptions justifiées, notamment pour certains médicaments dont la toxicité attendue ne permettrait pas une administration chez le sujet sain, comme certains traitements anticancéreux, testés d’emblée chez des patients.",
        },
        {
          type: 'liste',
          items: [
            'La phase III précède la soumission du dossier d’autorisation de mise sur le marché auprès des autorités compétentes.',
            'La phase IV, également appelée pharmacovigilance post-AMM ou études post-commercialisation, se déroule après l’obtention de l’AMM, en conditions réelles d’utilisation.',
            'Un échec à n’importe quelle phase peut interrompre définitivement le développement d’une molécule.',
          ],
        },
      ],
    },
    {
      id: 'randomisation-insu',
      titre: 'Randomisation et insu',
      blocs: [
        {
          type: 'definition',
          terme: 'Randomisation',
          definition:
            "Procédure d’attribution aléatoire des participants d’un essai clinique aux différents groupes de traitement comparés, destinée à répartir de façon équilibrée les facteurs de confusion connus et inconnus entre les groupes, afin de garantir leur comparabilité initiale.",
        },
        {
          type: 'definition',
          terme: 'Insu (aveugle)',
          definition:
            "Procédure méthodologique visant à masquer l’attribution du traitement reçu, à un ou plusieurs des acteurs de l’essai clinique, afin de limiter les biais liés aux attentes conscientes ou inconscientes du participant, de l’investigateur ou de l’évaluateur.",
        },
        {
          type: 'tableau',
          titre: 'Niveaux d’insu',
          colonnes: ['Type', 'Qui ignore le traitement attribué'],
          lignes: [
            ['Essai ouvert', 'Personne : le patient et l’investigateur connaissent le traitement attribué'],
            ['Simple insu', 'Le patient seul ignore le traitement qu’il reçoit'],
            ['Double insu', 'Le patient et l’investigateur ignorent tous deux le traitement attribué'],
            ['Triple insu (ou insu renforcé)', 'Le patient, l’investigateur et l’évaluateur ou le statisticien ignorent le traitement attribué'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Randomisation et insu ne sont pas la même chose',
          texte:
            "La randomisation garantit la comparabilité initiale des groupes en répartissant aléatoirement les participants, tandis que l’insu limite les biais d’évaluation en cours d’essai. Les deux procédures sont complémentaires mais répondent à des objectifs méthodologiques distincts.",
        },
      ],
    },
    {
      id: 'groupe-temoin-placebo',
      titre: 'Groupe témoin et effet placebo',
      blocs: [
        {
          type: 'definition',
          terme: 'Groupe témoin (ou groupe contrôle)',
          definition:
            "Groupe de participants recevant un traitement de référence, un placebo, ou aucun traitement, auquel est comparé le groupe recevant le traitement expérimental, afin d’estimer l’effet propre de ce dernier au-delà de l’évolution naturelle de la maladie et des autres facteurs confondants.",
        },
        {
          type: 'definition',
          terme: 'Effet placebo',
          definition:
            "Effet bénéfique observé après l’administration d’une substance dépourvue d’activité pharmacologique propre, ou d’une intervention factice, attribué à des facteurs psychologiques, contextuels et à l’évolution naturelle de la maladie plutôt qu’à une action pharmacologique réelle.",
        },
        {
          type: 'liste',
          items: [
            'La comparaison à un placebo permet de distinguer l’effet pharmacologique propre d’une molécule de l’effet placebo et de l’évolution spontanée de la pathologie.',
            'L’usage d’un placebo n’est éthiquement acceptable que lorsqu’il n’existe pas de traitement de référence validé, ou lorsque son utilisation n’expose pas le participant à une perte de chance significative.',
            'Lorsqu’un traitement de référence existe et est efficace, l’essai comparatif se fait en général contre ce traitement de référence plutôt que contre placebo.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ampleur de l’effet placebo',
          texte:
            "L’effet placebo peut représenter une part non négligeable de la réponse observée dans de nombreux essais cliniques, en particulier pour des critères de jugement subjectifs comme la douleur, ce qui justifie le recours systématique à un groupe témoin approprié pour évaluer l’efficacité réelle d’un traitement.",
        },
      ],
    },
    {
      id: 'ethique-recherche',
      titre: 'Éthique de la recherche biomédicale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La recherche biomédicale chez l’homme est encadrée par des principes éthiques fondamentaux, visant à protéger les droits, la sécurité et le bien-être des participants, tout en permettant le progrès des connaissances scientifiques.",
        },
        {
          type: 'tableau',
          titre: 'Principes éthiques fondamentaux de la recherche biomédicale',
          colonnes: ['Principe', 'Signification'],
          lignes: [
            ['Consentement libre et éclairé', 'Le participant doit accepter volontairement de participer, après avoir reçu une information claire et complète'],
            ['Évaluation par un comité d’éthique indépendant', 'Le protocole de recherche doit être examiné et approuvé avant sa mise en œuvre'],
            ['Balance bénéfice-risque favorable', 'Les risques encourus par les participants doivent être justifiés par les bénéfices attendus, individuels ou collectifs'],
            ['Protection des populations vulnérables', 'Des garanties supplémentaires encadrent la recherche chez les personnes mineures, les personnes protégées ou en situation d’urgence'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Droit de retrait du consentement',
          texte:
            "Un participant à un essai clinique peut retirer son consentement et quitter l’étude à tout moment, sans avoir à se justifier et sans que cela n’affecte la qualité des soins qui lui seront proposés par la suite.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Encadrement réglementaire en France',
          texte:
            "En France, la recherche biomédicale chez l’homme est encadrée par la loi, avec un examen par un comité de protection des personnes et une autorisation des autorités compétentes avant le démarrage de tout essai clinique.",
        },
      ],
    },
  ],
  pointsCles: [
    "La phase préclinique évalue in vitro et chez l’animal la pharmacologie, la pharmacocinétique et la toxicologie d’une nouvelle molécule.",
    "La phase I évalue la tolérance chez des volontaires sains, la phase II recherche la dose optimale et une première efficacité.",
    "La phase III confirme l’efficacité et la sécurité à grande échelle avant la demande d’AMM, la phase IV surveille l’usage réel après commercialisation.",
    "La randomisation assure la comparabilité initiale des groupes, l’insu limite les biais d’évaluation en cours d’essai.",
    "Le groupe témoin permet d’isoler l’effet propre du traitement expérimental de l’effet placebo et de l’évolution naturelle de la maladie.",
    "L’usage d’un placebo n’est éthiquement acceptable qu’en l’absence de traitement de référence validé ou sans perte de chance significative.",
    "Le consentement libre et éclairé et l’évaluation par un comité d’éthique sont des principes fondamentaux de la recherche biomédicale.",
  ],
  erreursFrequentes: [
    "Confondre randomisation et insu, qui répondent à des objectifs méthodologiques différents.",
    "Croire que la phase I est toujours réalisée chez des patients atteints de la pathologie ciblée, alors qu’elle concerne en général des volontaires sains.",
    "Penser que le placebo peut être utilisé systématiquement, même en présence d’un traitement de référence efficace.",
    "Oublier que la phase IV se déroule après l’obtention de l’AMM, et non avant.",
    "Négliger le droit du participant de retirer son consentement à tout moment sans justification.",
  ],
  mnemotechniques: [
    {
      moyen: 'I-II-III-IV : Innocuité, Individualisation de dose, Intensification, Investigation continue',
      explication:
        'Phase I : innocuité chez le volontaire sain. Phase II : individualisation de la dose optimale. Phase III : intensification à grande échelle. Phase IV : investigation continue après commercialisation.',
    },
    {
      moyen: 'Randomisation = Répartition au hasard au départ',
      explication:
        'La randomisation intervient au moment de l’attribution des groupes, pour garantir leur comparabilité initiale.',
    },
    {
      moyen: 'Insu = Ignorance en cours d’essai',
      explication:
        'L’insu masque l’attribution du traitement pendant le déroulement de l’essai, pour limiter les biais d’évaluation.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-developpement-medicament-fc-01',
      recto: 'Quel est l’objectif principal de la phase préclinique ?',
      verso: 'Évaluer les propriétés pharmacologiques, pharmacocinétiques et toxicologiques d’une molécule avant toute administration à l’homme.',
      type: 'definition',
      tags: ['phase préclinique'],
    },
    {
      id: 'ue6-developpement-medicament-fc-02',
      recto: 'Chez qui la phase I est-elle en général réalisée ?',
      verso: 'Chez un petit nombre de volontaires sains, sauf exceptions justifiées comme certains anticancéreux.',
      type: 'definition',
      tags: ['phase I'],
    },
    {
      id: 'ue6-developpement-medicament-fc-03',
      recto: 'Quel est l’objectif principal de la phase II ?',
      verso: 'Rechercher la dose optimale et obtenir les premières données d’efficacité chez des patients atteints de la pathologie ciblée.',
      type: 'definition',
      tags: ['phase II'],
    },
    {
      id: 'ue6-developpement-medicament-fc-04',
      recto: 'Quel est l’objectif principal de la phase III ?',
      verso: 'Confirmer l’efficacité et la sécurité à grande échelle avant la demande d’autorisation de mise sur le marché.',
      type: 'definition',
      tags: ['phase III'],
    },
    {
      id: 'ue6-developpement-medicament-fc-05',
      recto: 'Quand se déroule la phase IV et quel est son objectif ?',
      verso: 'Après l’obtention de l’AMM, pour surveiller la sécurité à long terme en conditions réelles d’utilisation.',
      type: 'definition',
      tags: ['phase IV'],
    },
    {
      id: 'ue6-developpement-medicament-fc-06',
      recto: 'Qu’est-ce que la randomisation ?',
      verso: 'L’attribution aléatoire des participants aux groupes de traitement, pour garantir leur comparabilité initiale.',
      type: 'definition',
      tags: ['randomisation'],
    },
    {
      id: 'ue6-developpement-medicament-fc-07',
      recto: 'Que signifie double insu ?',
      verso: 'Le patient et l’investigateur ignorent tous deux le traitement attribué.',
      type: 'definition',
      tags: ['insu'],
    },
    {
      id: 'ue6-developpement-medicament-fc-08',
      recto: 'Quel est le rôle du groupe témoin dans un essai clinique ?',
      verso: 'Permettre d’estimer l’effet propre du traitement expérimental, au-delà de l’évolution naturelle de la maladie.',
      type: 'definition',
      tags: ['groupe témoin'],
    },
    {
      id: 'ue6-developpement-medicament-fc-09',
      recto: 'Dans quelle situation l’usage d’un placebo est-il éthiquement acceptable ?',
      verso: 'En l’absence de traitement de référence validé, ou sans perte de chance significative pour le participant.',
      type: 'clinique',
      tags: ['placebo', 'éthique'],
    },
    {
      id: 'ue6-developpement-medicament-fc-10',
      recto: 'Qu’est-ce que le consentement libre et éclairé ?',
      verso: 'L’acceptation volontaire de participer à une recherche, après réception d’une information claire et complète.',
      type: 'definition',
      tags: ['éthique'],
    },
    {
      id: 'ue6-developpement-medicament-fc-11',
      recto: 'Un participant peut-il quitter un essai clinique en cours de route ?',
      verso: 'Oui, il peut retirer son consentement à tout moment, sans justification, sans conséquence sur ses soins ultérieurs.',
      type: 'clinique',
      tags: ['éthique'],
    },
    {
      id: 'ue6-developpement-medicament-fc-12',
      recto: 'Qui doit examiner un protocole de recherche biomédicale avant sa mise en œuvre ?',
      verso: 'Un comité d’éthique indépendant, en France le comité de protection des personnes.',
      type: 'clinique',
      tags: ['éthique', 'réglementation'],
    },
  ],
  qcm: [
    {
      id: 'ue6-developpement-medicament-qcm-01',
      enonce: 'Concernant la phase préclinique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle comprend des études in vitro et des études chez l’animal.', vraie: true, justification: 'Ces deux types d’études précèdent toute administration à l’homme.' },
        { lettre: 'B', texte: 'Elle permet d’estimer la DL50 de la nouvelle molécule.', vraie: true, justification: 'Les études de toxicologie animale permettent de déterminer cette dose létale médiane.' },
        { lettre: 'C', texte: 'Elle est réalisée après la phase I chez l’homme.', vraie: false, justification: 'Elle précède au contraire toute administration à l’homme, y compris la phase I.' },
        { lettre: 'D', texte: 'Elle inclut des études de génotoxicité et de reprotoxicité.', vraie: true, justification: 'Ces études évaluent les risques mutagènes, cancérogènes et sur la reproduction.' },
        { lettre: 'E', texte: 'Elle suffit à elle seule pour obtenir l’autorisation de mise sur le marché.', vraie: false, justification: 'L’AMM nécessite également les résultats des phases cliniques I à III chez l’homme.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 1,
    },
    {
      id: 'ue6-developpement-medicament-qcm-02',
      enonce: 'Concernant les phases cliniques I à IV, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phase I est en général réalisée chez des volontaires sains.', vraie: true, justification: 'C’est le cas général, sauf exceptions justifiées par la toxicité attendue de la molécule.' },
        { lettre: 'B', texte: 'La phase II recherche la dose optimale du médicament.', vraie: true, justification: 'C’est l’un des objectifs principaux de cette phase, en plus des premières données d’efficacité.' },
        { lettre: 'C', texte: 'La phase III précède l’obtention de l’AMM.', vraie: true, justification: 'Elle confirme l’efficacité et la sécurité à grande échelle avant la demande d’autorisation.' },
        { lettre: 'D', texte: 'La phase IV se déroule avant la commercialisation du médicament.', vraie: false, justification: 'La phase IV se déroule au contraire après l’obtention de l’AMM, en conditions réelles d’utilisation.' },
        { lettre: 'E', texte: 'Un échec en phase II peut interrompre le développement d’une molécule.', vraie: true, justification: 'Un échec à n’importe quelle phase peut mettre fin au développement clinique.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-developpement-medicament-qcm-03',
      enonce: 'Concernant la randomisation et l’insu, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La randomisation garantit la comparabilité initiale des groupes.', vraie: true, justification: 'C’est son objectif principal, en répartissant aléatoirement les facteurs de confusion.' },
        { lettre: 'B', texte: 'L’insu et la randomisation désignent la même procédure méthodologique.', vraie: false, justification: 'Ce sont deux procédures distinctes, répondant à des objectifs méthodologiques différents.' },
        { lettre: 'C', texte: 'Le double insu masque l’attribution du traitement au patient et à l’investigateur.', vraie: true, justification: 'C’est la définition même du double insu.' },
        { lettre: 'D', texte: 'Un essai ouvert masque le traitement attribué au patient et à l’investigateur.', vraie: false, justification: 'Dans un essai ouvert, au contraire, personne ne masque le traitement, tous connaissent l’attribution.' },
        { lettre: 'E', texte: 'L’insu vise à limiter les biais liés aux attentes des participants ou des évaluateurs.', vraie: true, justification: 'C’est précisément l’objectif de cette procédure méthodologique.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-developpement-medicament-qcm-04',
      enonce: 'Concernant le groupe témoin et l’effet placebo, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le groupe témoin permet d’isoler l’effet propre du traitement expérimental.', vraie: true, justification: 'La comparaison au groupe témoin permet de distinguer l’effet pharmacologique de l’évolution naturelle de la maladie.' },
        { lettre: 'B', texte: 'L’effet placebo est attribué à une action pharmacologique réelle du produit administré.', vraie: false, justification: 'L’effet placebo est au contraire attribué à des facteurs psychologiques et contextuels, sans action pharmacologique propre.' },
        { lettre: 'C', texte: 'L’usage d’un placebo est toujours acceptable, même en présence d’un traitement de référence efficace.', vraie: false, justification: 'Lorsqu’un traitement de référence efficace existe, l’essai comparatif se fait en général contre ce traitement plutôt que contre placebo.' },
        { lettre: 'D', texte: 'L’effet placebo peut représenter une part importante de la réponse observée, notamment pour des critères subjectifs.', vraie: true, justification: 'C’est le cas notamment pour l’évaluation de la douleur dans de nombreux essais cliniques.' },
        { lettre: 'E', texte: 'Le groupe témoin peut recevoir un traitement de référence plutôt qu’un placebo.', vraie: true, justification: 'C’est le cas lorsqu’un traitement de référence validé et efficace existe déjà.' },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-developpement-medicament-qcm-05',
      enonce: 'Concernant l’éthique de la recherche biomédicale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le consentement libre et éclairé est un principe fondamental de la recherche chez l’homme.', vraie: true, justification: 'Il garantit que le participant accepte volontairement, après une information claire, de participer à l’essai.' },
        { lettre: 'B', texte: 'Un protocole de recherche biomédicale doit être approuvé par un comité d’éthique avant sa mise en œuvre.', vraie: true, justification: 'C’est une exigence réglementaire fondamentale, en France assurée par le comité de protection des personnes.' },
        { lettre: 'C', texte: 'Un participant ne peut pas retirer son consentement une fois l’essai commencé.', vraie: false, justification: 'Il peut au contraire retirer son consentement à tout moment, sans justification.' },
        { lettre: 'D', texte: 'Les populations vulnérables bénéficient de garanties supplémentaires dans la recherche biomédicale.', vraie: true, justification: 'C’est le cas notamment des mineurs et des personnes protégées, ou en situation d’urgence.' },
        { lettre: 'E', texte: 'La balance bénéfice-risque n’a pas à être évaluée pour un essai de phase I chez le volontaire sain.', vraie: false, justification: 'La balance bénéfice-risque doit être évaluée pour toute recherche biomédicale, y compris la phase I.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-developpement-medicament-qcm-06',
      enonce: 'Concernant le développement du médicament dans son ensemble, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le développement clinique comprend quatre phases successives, numérotées de I à IV.', vraie: true, justification: 'C’est l’organisation classique du développement clinique d’un médicament.' },
        { lettre: 'B', texte: 'La phase III implique en général un plus grand nombre de patients que la phase II.', vraie: true, justification: 'La phase III vise à confirmer l’efficacité et la sécurité à grande échelle, sur un effectif plus large.' },
        { lettre: 'C', texte: 'La randomisation et l’insu sont des outils méthodologiques utilisés dès la phase préclinique.', vraie: false, justification: 'Ce sont des outils méthodologiques des essais cliniques chez l’homme, pas de la phase préclinique.' },
        { lettre: 'D', texte: 'Le développement d’un médicament peut s’interrompre à n’importe quelle phase en cas de résultats défavorables.', vraie: true, justification: 'Un échec d’efficacité, de tolérance ou de sécurité à n’importe quelle étape peut mettre fin au développement.' },
        { lettre: 'E', texte: 'La phase IV ne concerne que des données de laboratoire, sans lien avec les patients réels.', vraie: false, justification: 'La phase IV se déroule au contraire en conditions réelles d’utilisation, chez des patients traités après commercialisation.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
