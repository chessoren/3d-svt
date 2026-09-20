import type { Fiche } from '../../types';

export const ficheEthiquePrincipes: Fiche = {
  id: 'ue7-ethique-principes',
  ue: 'ue7',
  titre: 'Éthique médicale : les grands principes',
  sousTitre:
    'Autonomie, bienfaisance, non-malfaisance, justice : le socle de la réflexion éthique en médecine',
  chapitre: 'Éthique et droit',
  ordre: 3,
  duree: 23,
  difficulte: 2,
  motsCles: [
    'autonomie',
    'bienfaisance',
    'non-malfaisance',
    'justice',
    'dignité',
    'déontologie',
    'délibération éthique',
    'principisme',
  ],
  objectifs: [
    'Définir les quatre principes de l’éthique biomédicale de Beauchamp et Childress.',
    'Distinguer morale, éthique et déontologie.',
    'Expliquer la notion de dignité de la personne humaine en médecine.',
    'Identifier les tensions possibles entre les principes éthiques dans des situations cliniques concrètes.',
    'Décrire la démarche de délibération éthique en situation d’incertitude.',
  ],
  sections: [
    {
      id: 'quatre-principes',
      titre: 'Les quatre principes de l’éthique biomédicale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’approche dite principiste, formalisée par les philosophes américains Tom Beauchamp et James Childress, propose quatre principes de référence pour guider la réflexion et la décision en éthique médicale. Ces principes n’ont pas de hiérarchie fixe : ils doivent être mis en balance selon chaque situation clinique.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre principes de Beauchamp et Childress',
          colonnes: ['Principe', 'Définition', 'Exemple clinique'],
          lignes: [
            [
              'Autonomie',
              "Respect de la capacité du patient à décider par lui-même, pour lui-même, sur la base d’une information adaptée",
              'Recueil du consentement avant un acte diagnostique ou thérapeutique',
            ],
            [
              'Bienfaisance',
              "Obligation d’agir activement dans l’intérêt du patient et pour son bien",
              'Proposer le traitement le plus adapté à l’état du patient',
            ],
            [
              'Non-malfaisance',
              "Obligation de ne pas nuire, de ne pas exposer le patient à un risque disproportionné",
              'Peser le rapport bénéfice-risque avant un acte invasif',
            ],
            [
              'Justice',
              "Équité dans l’accès aux soins et répartition équitable des ressources de santé",
              'Critères transparents d’attribution d’une ressource rare comme un greffon',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Des principes parfois en tension',
          texte:
            "Ces quatre principes peuvent entrer en conflit : par exemple, respecter l’autonomie d’un patient qui refuse un traitement peut sembler contrarier le principe de bienfaisance. La démarche éthique consiste précisément à arbitrer ces tensions au cas par cas, sans règle automatique.",
        },
      ],
    },
    {
      id: 'autonomie',
      titre: 'Le principe d’autonomie',
      blocs: [
        {
          type: 'definition',
          terme: 'Autonomie',
          definition:
            "Capacité d’une personne à se donner à elle-même ses propres règles de conduite et à décider librement pour elle-même, sur la base d’une information claire, loyale et adaptée à sa situation.",
        },
        {
          type: 'liste',
          items: [
            "Le respect de l’autonomie fonde juridiquement et éthiquement l’exigence du consentement libre et éclairé avant tout acte médical.",
            "L’autonomie suppose des conditions : une information compréhensible, l’absence de contrainte, et une capacité de discernement suffisante.",
            "Le respect de l’autonomie n’exclut pas l’accompagnement : informer et expliquer n’est pas influencer indûment la décision du patient.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Limites du principe d’autonomie',
          texte:
            "L’autonomie peut être réduite ou absente dans certaines situations (patient mineur, majeur protégé, trouble de la conscience, urgence vitale). Le droit prévoit alors des mécanismes spécifiques de représentation ou de décision, sans pour autant abandonner l’objectif de respecter au mieux la volonté de la personne.",
        },
      ],
    },
    {
      id: 'bienfaisance-non-malfaisance',
      titre: 'Bienfaisance et non-malfaisance',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Deux principes complémentaires mais distincts',
          gauche: {
            titre: 'Bienfaisance',
            points: [
              "Obligation positive : agir activement pour le bien du patient.",
              'Fonde le devoir de soigner, de soulager, de prévenir.',
              'Peut entrer en tension avec l’autonomie si le patient refuse le bien proposé.',
            ],
          },
          droite: {
            titre: 'Non-malfaisance',
            points: [
              "Obligation négative : s’abstenir de nuire.",
              "Correspond au principe hippocratique du primum non nocere.",
              "Impose d’évaluer le rapport entre bénéfice attendu et risque encouru avant tout acte.",
            ],
          },
        },
        {
          type: 'paragraphe',
          texte:
            "En pratique, presque tout acte médical comporte un risque, même minime : la bienfaisance et la non-malfaisance s’articulent donc à travers l’évaluation systématique du rapport bénéfice-risque, individualisée pour chaque patient.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Distinguer les deux dans une question de concours',
          texte:
            "Bienfaisance : « faire le bien ». Non-malfaisance : « éviter le mal ». Un traitement peut respecter la non-malfaisance (peu de risque) sans pour autant réaliser pleinement la bienfaisance (efficacité limitée), et inversement.",
        },
      ],
    },
    {
      id: 'justice-dignite',
      titre: 'Justice et dignité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le principe de justice impose une répartition équitable des soins et des ressources de santé, sans discrimination fondée sur des critères non pertinents (origine, sexe, situation sociale, handicap). Il se heurte en pratique à la rareté de certaines ressources, ce qui impose des critères d’allocation explicites et transparents.",
        },
        {
          type: 'definition',
          terme: 'Dignité de la personne humaine',
          definition:
            "Valeur reconnue à toute personne humaine indépendamment de son état de santé, de son autonomie ou de son utilité sociale, qui interdit de la traiter comme un simple moyen ou objet. En droit français, la dignité de la personne humaine est un principe fondamental, y compris pour les personnes dans l’incapacité de manifester une volonté.",
        },
        {
          type: 'liste',
          items: [
            "La dignité fonde par exemple l’interdiction de pratiques dégradantes envers le corps humain, y compris après la mort.",
            "Elle justifie le respect dû au patient inconscient, dément ou en fin de vie, qui ne dispose plus de son autonomie mais conserve pleinement sa dignité.",
            "Elle est parfois invoquée dans des débats opposés : certains y voient un fondement au refus de l’acharnement thérapeutique, d’autres un argument contre certaines formes d’aide active à mourir.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le droit évolue',
          texte:
            "Les grands principes éthiques présentés ici (autonomie, bienfaisance, non-malfaisance, justice, dignité) sont stables dans leur formulation générale, mais leur traduction juridique précise évolue avec la loi et la jurisprudence. Il convient toujours de se référer au cours de la faculté et aux textes en vigueur pour toute application pratique ou juridique précise.",
        },
      ],
    },
    {
      id: 'morale-ethique-deontologie',
      titre: 'Morale, éthique et déontologie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Ces trois termes sont souvent confondus mais recouvrent des réalités distinctes, utiles à différencier en médecine.",
        },
        {
          type: 'tableau',
          titre: 'Distinguer morale, éthique et déontologie',
          colonnes: ['Notion', 'Définition', 'Caractéristique'],
          lignes: [
            [
              'Morale',
              "Ensemble de valeurs et de règles de conduite considérées comme bonnes, souvent d’origine culturelle ou religieuse",
              'Souvent perçue comme relativement fixe et normative',
            ],
            [
              'Éthique',
              "Réflexion critique et argumentée sur ce qu’il convient de faire face à une situation singulière, notamment en cas d’incertitude ou de conflit de valeurs",
              'Démarche de questionnement, non de simple application de règles',
            ],
            [
              'Déontologie',
              "Ensemble des devoirs professionnels formalisés, souvent codifiés (code de déontologie médicale)",
              'Caractère plus contraignant et sanctionnable sur le plan disciplinaire',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une hiérarchie utile à retenir',
          texte:
            "On peut retenir schématiquement que la déontologie encadre la pratique professionnelle par des règles écrites, tandis que l’éthique intervient précisément là où ces règles ne suffisent pas à trancher une situation singulière et complexe.",
        },
      ],
    },
    {
      id: 'deliberation-ethique',
      titre: 'La délibération éthique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Face à une situation clinique complexe où les principes entrent en tension, la démarche éthique privilégiée n’est pas l’application mécanique d’une règle mais une délibération collective, structurée et argumentée.",
        },
        {
          type: 'etapes',
          titre: 'Grandes étapes d’une délibération éthique',
          etapes: [
            {
              titre: 'Identifier la situation et les faits',
              detail: "Rassembler les éléments médicaux, le contexte du patient et de son entourage, les incertitudes.",
            },
            {
              titre: 'Repérer les valeurs et principes en tension',
              detail: "Expliciter les principes potentiellement concurrents : autonomie, bienfaisance, non-malfaisance, justice.",
            },
            {
              titre: 'Envisager les options possibles',
              detail: "Lister les décisions envisageables et leurs conséquences prévisibles pour le patient et son entourage.",
            },
            {
              titre: 'Délibérer collectivement',
              detail: "Confronter les points de vue de l’équipe soignante, éventuellement du patient, de la personne de confiance ou d’une instance dédiée (comité d’éthique).",
            },
            {
              titre: 'Décider, tracer et réévaluer',
              detail: "Prendre une décision proportionnée, la motiver dans le dossier médical, et rester prêt à la réévaluer si la situation évolue.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Un exemple type',
          texte:
            "Chez un patient âgé polypathologique dont le pronostic est incertain, la question d’un traitement invasif fait typiquement entrer en tension bienfaisance (traiter pour prolonger la vie), non-malfaisance (éviter une souffrance disproportionnée) et autonomie (respecter la volonté exprimée du patient ou de ses directives anticipées).",
        },
      ],
    },
  ],
  pointsCles: [
    "Les quatre principes de l’éthique biomédicale (Beauchamp et Childress) sont l’autonomie, la bienfaisance, la non-malfaisance et la justice.",
    "Aucun de ces principes n’est hiérarchiquement supérieur aux autres : ils doivent être mis en balance selon la situation.",
    "L’autonomie fonde l’exigence de consentement libre et éclairé, mais peut être réduite chez le mineur, le majeur protégé ou en situation d’urgence vitale.",
    "La bienfaisance est une obligation positive (agir pour le bien), la non-malfaisance une obligation négative (ne pas nuire).",
    "La dignité de la personne humaine est due à toute personne indépendamment de son autonomie ou de son état de santé.",
    "La morale, l’éthique et la déontologie sont des notions distinctes : valeurs générales, réflexion critique face à une situation singulière, et devoirs professionnels codifiés.",
    "La délibération éthique est une démarche collective et argumentée, non l’application mécanique d’une règle unique.",
  ],
  erreursFrequentes: [
    "Croire qu’un principe éthique (par exemple l’autonomie) prime automatiquement sur les autres : leur hiérarchisation dépend du contexte clinique.",
    "Confondre bienfaisance et non-malfaisance, qui correspondent respectivement à une obligation positive et à une obligation négative.",
    "Réduire l’éthique à la simple application d’un règlement : c’est précisément le rôle de la déontologie, distincte de la démarche éthique.",
    "Penser que la dignité n’est due qu’aux personnes capables d’exprimer leur volonté : elle est due à toute personne humaine, y compris inconsciente.",
    "Considérer la délibération éthique comme une démarche individuelle et instantanée, alors qu’elle est en principe collective et argumentée.",
  ],
  mnemotechniques: [
    {
      moyen: 'ABNJ',
      explication:
        'Autonomie, Bienfaisance, Non-malfaisance, Justice : les quatre principes de Beauchamp et Childress, dans l’ordre le plus fréquemment cité.',
    },
    {
      moyen: 'Faire le bien, éviter le mal',
      explication:
        'Formule simple pour distinguer bienfaisance (faire le bien activement) et non-malfaisance (éviter le mal, primum non nocere).',
    },
  ],
  sources: [
    'Beauchamp T., Childress J., Les principes de l’éthique biomédicale',
    'Hirsch E., Traité de bioéthique',
    'Code de déontologie médicale (à actualiser selon le cours de la faculté)',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-ethique-principes-fc-01',
      recto: 'Citer les quatre principes de l’éthique biomédicale de Beauchamp et Childress.',
      verso: 'Autonomie, bienfaisance, non-malfaisance et justice.',
      type: 'classification',
      tags: ['principisme'],
    },
    {
      id: 'ue7-ethique-principes-fc-02',
      recto: 'Ces quatre principes sont-ils hiérarchisés entre eux ?',
      verso: "Non : ils n’ont pas de hiérarchie fixe et doivent être mis en balance selon chaque situation clinique.",
      type: 'definition',
      tags: ['principisme'],
    },
    {
      id: 'ue7-ethique-principes-fc-03',
      recto: 'Définir le principe d’autonomie.',
      verso: "La capacité d’une personne à décider librement pour elle-même, sur la base d’une information claire et adaptée.",
      type: 'definition',
      tags: ['autonomie'],
    },
    {
      id: 'ue7-ethique-principes-fc-04',
      recto: 'Différence entre bienfaisance et non-malfaisance ?',
      verso: "La bienfaisance est une obligation positive (agir pour le bien) ; la non-malfaisance est une obligation négative (ne pas nuire).",
      type: 'definition',
      tags: ['bienfaisance', 'non-malfaisance'],
    },
    {
      id: 'ue7-ethique-principes-fc-05',
      recto: 'Quelle formule latine résume le principe de non-malfaisance ?',
      verso: 'Primum non nocere, « d’abord ne pas nuire ».',
      type: 'definition',
      tags: ['non-malfaisance'],
    },
    {
      id: 'ue7-ethique-principes-fc-06',
      recto: 'Que garantit le principe de justice en médecine ?',
      verso: "Une répartition équitable des soins et des ressources de santé, sans discrimination fondée sur des critères non pertinents.",
      type: 'definition',
      tags: ['justice'],
    },
    {
      id: 'ue7-ethique-principes-fc-07',
      recto: 'La dignité de la personne humaine dépend-elle de son autonomie ?',
      verso: "Non : la dignité est due à toute personne indépendamment de son autonomie, de son état de santé ou de son utilité sociale.",
      type: 'definition',
      tags: ['dignité'],
    },
    {
      id: 'ue7-ethique-principes-fc-08',
      recto: 'Distinguer morale et éthique.',
      verso: "La morale est un ensemble de valeurs considérées comme bonnes, souvent fixes ; l’éthique est une réflexion critique face à une situation singulière.",
      type: 'definition',
      tags: ['morale', 'éthique'],
    },
    {
      id: 'ue7-ethique-principes-fc-09',
      recto: 'Qu’est-ce que la déontologie médicale ?',
      verso: "L’ensemble des devoirs professionnels codifiés, dont le manquement peut être sanctionné sur le plan disciplinaire.",
      type: 'definition',
      tags: ['déontologie'],
    },
    {
      id: 'ue7-ethique-principes-fc-10',
      recto: 'Citer deux situations où l’autonomie du patient est réduite sur le plan éthique et juridique.',
      verso: 'Le patient mineur et le majeur protégé, ainsi que les situations d’urgence vitale ou de trouble de la conscience.',
      type: 'clinique',
      tags: ['autonomie', 'limites'],
    },
    {
      id: 'ue7-ethique-principes-fc-11',
      recto: 'Quelle démarche privilégier face à un conflit entre principes éthiques ?',
      verso: "La délibération éthique collective, argumentée et proportionnée, plutôt que l’application mécanique d’une règle unique.",
      type: 'mecanisme',
      tags: ['délibération éthique'],
    },
    {
      id: 'ue7-ethique-principes-fc-12',
      recto: 'Citer les grandes étapes d’une délibération éthique.',
      verso: "Identifier les faits, repérer les valeurs en tension, envisager les options, délibérer collectivement, décider puis réévaluer.",
      type: 'mecanisme',
      tags: ['délibération éthique'],
    },
  ],
  qcm: [
    {
      id: 'ue7-ethique-principes-qcm-01',
      enonce: 'Concernant les quatre principes de l’éthique biomédicale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Ils ont été formalisés par Beauchamp et Childress.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'L’autonomie prime toujours sur les autres principes.',
          vraie: false,
          justification: "Faux : aucun principe n’a de primauté systématique, ils sont mis en balance selon le contexte.",
        },
        {
          lettre: 'C',
          texte: 'La justice concerne notamment la répartition équitable des ressources de santé.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'La bienfaisance et la non-malfaisance sont rigoureusement identiques.',
          vraie: false,
          justification: "Faux : la bienfaisance est une obligation positive, la non-malfaisance une obligation négative.",
        },
        {
          lettre: 'E',
          texte: 'Ces quatre principes peuvent entrer en tension dans une même situation clinique.',
          vraie: true,
          justification: 'Exact, c’est même la situation la plus fréquente en pratique.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue7-ethique-principes-qcm-02',
      enonce: 'Concernant le principe d’autonomie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il fonde l’exigence du consentement libre et éclairé.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Il suppose une information claire et adaptée au patient.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Il est identique quel que soit l’état de conscience du patient.',
          vraie: false,
          justification: "Faux : il peut être réduit ou absent en cas de trouble de la conscience, ce qui impose des mécanismes spécifiques de décision.",
        },
        {
          lettre: 'D',
          texte: 'Informer un patient revient nécessairement à influencer indûment sa décision.',
          vraie: false,
          justification: "Faux : une information loyale et adaptée respecte l’autonomie, elle ne la contredit pas.",
        },
        {
          lettre: 'E',
          texte: 'Il peut être limité chez le mineur ou le majeur protégé.',
          vraie: true,
          justification: 'Exact, avec des mécanismes de représentation ou d’assistance prévus par le droit.',
        },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-ethique-principes-qcm-03',
      enonce: 'Concernant bienfaisance et non-malfaisance, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La non-malfaisance correspond au principe hippocratique primum non nocere.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'La bienfaisance est une obligation négative.',
          vraie: false,
          justification: "Faux : la bienfaisance est une obligation positive, agir pour le bien du patient.",
        },
        {
          lettre: 'C',
          texte: 'L’évaluation du rapport bénéfice-risque articule ces deux principes.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Un acte médical sans aucun risque est la seule situation conforme à la non-malfaisance.',
          vraie: false,
          justification: "Faux : presque tout acte comporte un risque ; la non-malfaisance impose une évaluation proportionnée, non un risque nul.",
        },
        {
          lettre: 'E',
          texte: 'Ces deux principes peuvent être en tension avec l’autonomie du patient.',
          vraie: true,
          justification: 'Exact, par exemple en cas de refus de soins par un patient autonome.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-ethique-principes-qcm-04',
      enonce: 'Concernant justice et dignité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le principe de justice interdit toute discrimination fondée sur des critères non pertinents dans l’accès aux soins.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'La dignité de la personne humaine dépend de son utilité sociale.',
          vraie: false,
          justification: "Faux : la dignité est due à toute personne, indépendamment de son utilité sociale.",
        },
        {
          lettre: 'C',
          texte: 'La dignité peut être invoquée pour le respect dû à un patient en fin de vie.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'La rareté de certaines ressources de santé impose des critères d’allocation transparents.',
          vraie: true,
          justification: 'Exact, au nom du principe de justice.',
        },
        {
          lettre: 'E',
          texte: 'La dignité disparaît dès lors que le patient perd son autonomie.',
          vraie: false,
          justification: "Faux : la dignité est indépendante de l’autonomie, elle demeure même chez un patient inconscient.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-ethique-principes-qcm-05',
      enonce: 'Concernant morale, éthique et déontologie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La déontologie est un ensemble de devoirs professionnels codifiés.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'L’éthique se résume à l’application stricte d’un règlement.',
          vraie: false,
          justification: "Faux : l’éthique est une réflexion critique face à une situation singulière, distincte de la simple application de règles.",
        },
        {
          lettre: 'C',
          texte: 'La morale désigne des valeurs et règles de conduite souvent d’origine culturelle ou religieuse.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Le manquement à la déontologie peut faire l’objet d’une sanction disciplinaire.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Ces trois notions sont strictement synonymes.',
          vraie: false,
          justification: 'Faux : elles recouvrent des réalités distinctes, même si elles sont liées.',
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-ethique-principes-qcm-06',
      enonce: 'Concernant la délibération éthique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle privilégie une démarche collective et argumentée.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Elle vise à appliquer mécaniquement une règle unique et universelle.',
          vraie: false,
          justification: "Faux : elle vise au contraire à arbitrer une situation singulière où les principes sont en tension.",
        },
        {
          lettre: 'C',
          texte: 'Elle peut mobiliser un comité d’éthique.',
          vraie: true,
          justification: 'Exact, notamment pour les situations les plus complexes.',
        },
        {
          lettre: 'D',
          texte: 'La décision issue de la délibération n’a jamais besoin d’être réévaluée.',
          vraie: false,
          justification: "Faux : elle doit pouvoir être réévaluée si la situation clinique évolue.",
        },
        {
          lettre: 'E',
          texte: 'Elle peut prendre en compte les directives anticipées ou l’avis de la personne de confiance.',
          vraie: true,
          justification: 'Exact, lorsque le patient ne peut pas exprimer directement sa volonté.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
