import type { Fiche } from '../../types';

export const ficheFinDeVie: Fiche = {
  id: 'ue7-fin-de-vie',
  ue: 'ue7',
  titre: 'Fin de vie et soins palliatifs',
  sousTitre:
    'Obstination déraisonnable, limitation et arrêt des traitements, sédation profonde et continue, directives anticipées',
  chapitre: 'Sciences humaines appliquées',
  ordre: 10,
  duree: 25,
  difficulte: 3,
  motsCles: [
    'soins palliatifs',
    'obstination déraisonnable',
    'limitation et arrêt des traitements',
    'sédation profonde et continue',
    'directives anticipées',
    'deuil',
    'euthanasie',
    'suicide assisté',
  ],
  objectifs: [
    'Définir les soins palliatifs et leurs objectifs.',
    'Expliquer la notion d’obstination déraisonnable et son cadre général.',
    'Décrire le principe de limitation et d’arrêt des traitements.',
    'Définir la sédation profonde et continue jusqu’au décès et la distinguer de l’euthanasie.',
    'Comprendre le rôle des directives anticipées et les grandes étapes du processus de deuil.',
  ],
  sections: [
    {
      id: 'soins-palliatifs',
      titre: 'Les soins palliatifs',
      blocs: [
        {
          type: 'definition',
          terme: 'Soins palliatifs',
          definition:
            "Soins actifs et globaux délivrés à une personne atteinte d’une maladie grave, évolutive ou terminale, visant à soulager la douleur et les autres symptômes, à préserver la dignité de la personne et à soutenir son entourage, sans chercher ni à hâter ni à retarder la survenue de la mort.",
        },
        {
          type: 'liste',
          items: [
            "Les soins palliatifs prennent en compte les dimensions physique, psychologique, sociale et spirituelle de la personne malade.",
            "Ils ne sont pas réservés aux tout derniers instants de la vie : ils peuvent être proposés précocement, en association avec des traitements curatifs, dès que la situation le justifie.",
            "L’accès aux soins palliatifs est un droit reconnu pour toute personne dont l’état le requiert.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Les quatre dimensions de la prise en charge palliative',
          colonnes: ['Dimension', 'Exemple d’intervention'],
          lignes: [
            ['Physique', 'Traitement de la douleur et des autres symptômes inconfortables'],
            ['Psychologique', 'Soutien face à l’angoisse, accompagnement des mécanismes de défense'],
            ['Sociale', 'Aide aux démarches, soutien de l’entourage et des aidants'],
            ['Spirituelle', 'Écoute des questionnements existentiels, respect des convictions du patient'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le droit évolue',
          texte:
            "Les principes présentés dans cette fiche (soins palliatifs, obstination déraisonnable, limitation et arrêt des traitements, sédation profonde et continue, directives anticipées) sont globalement stables dans leur formulation générale, notamment depuis les lois dites Leonetti (2005) et Claeys-Leonetti (2016), mais leurs modalités précises d’application évoluent avec la loi et la jurisprudence. Se référer impérativement au cours de la faculté et aux textes en vigueur pour toute application pratique ou juridique précise.",
        },
      ],
    },
    {
      id: 'obstination-deraisonnable',
      titre: 'L’obstination déraisonnable',
      blocs: [
        {
          type: 'definition',
          terme: 'Obstination déraisonnable',
          definition:
            "Poursuite de traitements ou d’actes médicaux inutiles, disproportionnés par rapport au bénéfice attendu, ou n’ayant d’autre effet que le seul maintien artificiel de la vie, sans espoir raisonnable d’amélioration pour le patient.",
        },
        {
          type: 'liste',
          items: [
            "Le refus de l’obstination déraisonnable est un principe éthique fondamental, distinct de l’euthanasie : il s’agit de ne pas prolonger artificiellement une situation sans espoir raisonnable, non de provoquer activement la mort.",
            "L’évaluation du caractère déraisonnable d’un traitement repose sur une appréciation médicale collégiale, tenant compte de l’état du patient, du pronostic et, autant que possible, de sa volonté.",
            "Ce principe s’applique aussi bien à la mise en œuvre qu’à la poursuite d’un traitement : un traitement initialement justifié peut devenir déraisonnable si la situation évolue défavorablement.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Point souvent interrogé',
          texte:
            "Ne pas confondre refus de l’obstination déraisonnable (arrêter ou ne pas entreprendre un traitement disproportionné) et euthanasie (provoquer activement la mort) : la finalité et le geste médical sont fondamentalement différents.",
        },
      ],
    },
    {
      id: 'limitation-arret-traitements',
      titre: 'La limitation et l’arrêt des traitements',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Face à une situation d’obstination déraisonnable, une décision de limitation (ne pas débuter un traitement) ou d’arrêt (interrompre un traitement déjà en cours) peut être prise, dans le cadre d’une démarche collégiale, en tenant compte de la volonté du patient lorsqu’elle peut être connue.",
        },
        {
          type: 'etapes',
          titre: 'Grands principes d’une décision de limitation ou d’arrêt des traitements',
          etapes: [
            {
              titre: 'Évaluation médicale collégiale',
              detail: "La décision n’est jamais prise par un seul médecin isolé : elle s’appuie sur une concertation avec l’équipe soignante et, si besoin, un avis extérieur.",
            },
            {
              titre: 'Recherche de la volonté du patient',
              detail: "Par les directives anticipées si elles existent, ou à défaut par le témoignage de la personne de confiance ou des proches.",
            },
            {
              titre: 'Information et traçabilité',
              detail: "La décision et sa motivation sont expliquées à l’entourage autant que possible et tracées dans le dossier médical.",
            },
            {
              titre: 'Poursuite de l’accompagnement',
              detail: "L’arrêt d’un traitement curatif ne signifie jamais l’arrêt des soins : l’accompagnement, le confort et le soulagement du patient sont poursuivis, voire renforcés.",
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Distinguer limitation et arrêt des traitements',
          colonnes: ['Notion', 'Définition'],
          lignes: [
            ['Limitation', 'Décision de ne pas débuter ou de ne pas intensifier un traitement jugé disproportionné'],
            ['Arrêt', 'Décision d’interrompre un traitement déjà en cours, jugé devenu disproportionné'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Distinguer traitement et soin',
          texte:
            "Arrêter un traitement (par exemple une ventilation mécanique jugée disproportionnée) ne signifie jamais arrêter les soins : l’hydratation de confort, l’hygiène, l’antalgie et l’accompagnement psychologique du patient et de ses proches sont toujours poursuivis.",
        },
      ],
    },
    {
      id: 'sedation-profonde-continue',
      titre: 'La sédation profonde et continue jusqu’au décès',
      blocs: [
        {
          type: 'definition',
          terme: 'Sédation profonde et continue jusqu’au décès',
          definition:
            "Pratique consistant à altérer profondément la conscience d’un patient, de façon maintenue jusqu’au décès, associée à une analgésie, dans des situations précises de souffrance réfractaire chez un patient dont le pronostic vital est engagé à court terme.",
        },
        {
          type: 'comparaison',
          titre: 'Sédation profonde et continue et euthanasie : deux démarches distinctes',
          gauche: {
            titre: 'Sédation profonde et continue jusqu’au décès',
            points: [
              'Intention : soulager une souffrance réfractaire jugée insupportable, non provoquer la mort.',
              'Le décès survient du fait de l’évolution naturelle de la maladie, non du geste sédatif lui-même.',
              'Encadrée par une procédure collégiale stricte et réservée à des situations précisément définies.',
            ],
          },
          droite: {
            titre: 'Euthanasie',
            points: [
              'Intention : provoquer directement et délibérément la mort du patient à sa demande.',
              'Le décès est la conséquence directe et recherchée du geste posé.',
              'Non autorisée en France au titre du droit commun applicable aux soins palliatifs présenté dans cette fiche.',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une distinction essentielle et fréquemment interrogée',
          texte:
            "La différence fondamentale entre sédation profonde et continue et euthanasie tient à l’intention poursuivie et au mécanisme du décès : soulager une souffrance en laissant la maladie suivre son cours, ou provoquer directement la mort. Cette distinction est un point clé, régulièrement testé en évaluation.",
        },
      ],
    },
    {
      id: 'directives-anticipees',
      titre: 'Les directives anticipées',
      blocs: [
        {
          type: 'definition',
          terme: 'Directives anticipées',
          definition:
            "Document écrit par lequel une personne majeure exprime à l’avance ses souhaits concernant sa fin de vie, notamment sur la poursuite, la limitation ou l’arrêt de traitements, pour le cas où elle ne serait plus en mesure d’exprimer sa volonté.",
        },
        {
          type: 'liste',
          items: [
            "Toute personne majeure peut rédiger des directives anticipées, qu’elle soit ou non atteinte d’une maladie grave au moment de leur rédaction.",
            "Elles peuvent être modifiées ou révoquées à tout moment par leur auteur.",
            "Lorsqu’elles existent et sont accessibles, elles s’imposent en principe au médecin pour toute décision de traitement, sauf situation d’urgence vitale ou lorsqu’elles apparaissent manifestement inappropriées à la situation médicale, ce qui nécessite alors une décision collégiale.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un outil pour respecter l’autonomie du patient',
          texte:
            "Les directives anticipées permettent de prolonger l’expression de l’autonomie du patient au-delà du moment où il ne peut plus s’exprimer directement. Elles priment en principe sur l’avis de la personne de confiance ou des proches, qui ne sont consultés en l’absence de directives anticipées connues.",
        },
      ],
    },
    {
      id: 'deuil-accompagnement',
      titre: 'Le deuil et l’accompagnement de l’entourage',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le deuil désigne le processus psychique d’adaptation à la perte d’un proche. Il concerne l’entourage du patient décédé, mais l’accompagnement de la fin de vie inclut également un travail d’anticipation, parfois appelé deuil anticipé, chez les proches d’un patient en fin de vie.",
        },
        {
          type: 'etapes',
          titre: 'Grandes phases classiquement décrites du travail de deuil',
          etapes: [
            {
              titre: 'Sidération et déni',
              detail: "Choc initial face à la perte, difficulté à en admettre la réalité.",
            },
            {
              titre: 'Colère, culpabilité',
              detail: "Expression de sentiments souvent intenses et parfois contradictoires envers le défunt, les soignants ou soi-même.",
            },
            {
              titre: 'Tristesse, retrait',
              detail: "Phase de douleur morale marquée, avec un possible repli sur soi.",
            },
            {
              titre: 'Réorganisation, acceptation',
              detail: "Réinvestissement progressif de la vie quotidienne et des relations, sans oubli du défunt.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Distinguer deuil normal et deuil pathologique',
          texte:
            "Le deuil normal évolue progressivement, même si son intensité et sa durée varient considérablement selon les personnes. Un deuil peut être considéré comme compliqué ou pathologique lorsqu’il reste bloqué de façon prolongée à une phase précoce, avec un retentissement majeur et durable sur le fonctionnement de la personne, justifiant alors un accompagnement spécialisé.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les soins palliatifs visent à soulager la souffrance et à préserver la dignité, sans chercher à hâter ni à retarder la mort.",
    "L’obstination déraisonnable désigne la poursuite de traitements disproportionnés ou n’ayant d’autre effet que le maintien artificiel de la vie.",
    "La décision de limitation ou d’arrêt des traitements est collégiale et tient compte de la volonté du patient ; elle ne signifie jamais l’arrêt des soins de confort.",
    "La sédation profonde et continue jusqu’au décès vise à soulager une souffrance réfractaire, sans chercher à provoquer la mort, à la différence de l’euthanasie.",
    "Les directives anticipées permettent d’exprimer à l’avance ses souhaits de fin de vie et s’imposent en principe au médecin, sauf exceptions strictement encadrées.",
    "Le deuil est un processus psychique d’adaptation à la perte, dont les phases sont variables et non strictement linéaires.",
    "Les lois Leonetti (2005) et Claeys-Leonetti (2016) sont des repères historiques majeurs, à compléter par le cours de la faculté pour toute application précise.",
  ],
  erreursFrequentes: [
    "Confondre refus de l’obstination déraisonnable et euthanasie : la finalité (ne pas prolonger artificiellement contre soulager en provoquant la mort) est fondamentalement différente.",
    "Confondre sédation profonde et continue jusqu’au décès et euthanasie : l’intention et le mécanisme du décès distinguent ces deux démarches.",
    "Croire que l’arrêt d’un traitement signifie l’arrêt de tout soin : l’accompagnement et le confort du patient sont toujours poursuivis.",
    "Penser que les directives anticipées n’ont aucune portée contraignante : elles s’imposent en principe au médecin, sauf exceptions encadrées.",
    "Considérer que le deuil suit un schéma strictement linéaire et identique chez toutes les personnes.",
  ],
  mnemotechniques: [
    {
      moyen: 'Soulager, pas provoquer',
      explication:
        'Pour distinguer sédation profonde et continue (soulager une souffrance réfractaire) et euthanasie (provoquer délibérément la mort).',
    },
    {
      moyen: 'SCTR',
      explication:
        'Sidération, Colère, Tristesse, Réorganisation : repère simplifié des grandes phases du travail de deuil, non strictement linéaires.',
    },
  ],
  sources: [
    'Loi n°2005-370 du 22 avril 2005 relative aux droits des malades et à la fin de vie (loi Leonetti)',
    'Loi n°2016-87 du 2 février 2016 créant de nouveaux droits en faveur des malades et des personnes en fin de vie (loi Claeys-Leonetti)',
    'Société française d’accompagnement et de soins palliatifs, recommandations de bonnes pratiques',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-fin-de-vie-fc-01',
      recto: 'Définir les soins palliatifs.',
      verso: "Des soins actifs et globaux visant à soulager la douleur et les symptômes, préserver la dignité et soutenir l’entourage, sans hâter ni retarder la mort.",
      type: 'definition',
      tags: ['soins palliatifs'],
    },
    {
      id: 'ue7-fin-de-vie-fc-02',
      recto: 'Les soins palliatifs sont-ils réservés aux tout derniers instants de la vie ?',
      verso: 'Non, ils peuvent être proposés précocement, y compris en association avec des traitements curatifs.',
      type: 'definition',
      tags: ['soins palliatifs'],
    },
    {
      id: 'ue7-fin-de-vie-fc-03',
      recto: 'Définir l’obstination déraisonnable.',
      verso: "La poursuite de traitements disproportionnés par rapport au bénéfice attendu, ou n’ayant d’autre effet que le maintien artificiel de la vie.",
      type: 'definition',
      tags: ['obstination déraisonnable'],
    },
    {
      id: 'ue7-fin-de-vie-fc-04',
      recto: 'Une décision de limitation ou d’arrêt des traitements est-elle prise par un médecin seul ?',
      verso: 'Non, elle repose sur une démarche collégiale, tenant compte de la volonté du patient.',
      type: 'mecanisme',
      tags: ['limitation et arrêt des traitements'],
    },
    {
      id: 'ue7-fin-de-vie-fc-05',
      recto: 'Arrêter un traitement signifie-t-il arrêter tous les soins ?',
      verso: 'Non, l’accompagnement, le confort et le soulagement du patient sont toujours poursuivis, voire renforcés.',
      type: 'clinique',
      tags: ['limitation et arrêt des traitements'],
    },
    {
      id: 'ue7-fin-de-vie-fc-06',
      recto: 'Définir la sédation profonde et continue jusqu’au décès.',
      verso: "Une pratique altérant profondément et durablement la conscience, associée à une analgésie, pour soulager une souffrance réfractaire chez un patient dont le pronostic vital est engagé à court terme.",
      type: 'definition',
      tags: ['sédation profonde et continue'],
    },
    {
      id: 'ue7-fin-de-vie-fc-07',
      recto: 'Quelle est la principale différence entre sédation profonde et continue et euthanasie ?',
      verso: "L’intention et le mécanisme du décès : la sédation vise à soulager en laissant la maladie évoluer, l’euthanasie vise à provoquer directement la mort.",
      type: 'definition',
      tags: ['sédation', 'euthanasie'],
    },
    {
      id: 'ue7-fin-de-vie-fc-08',
      recto: 'Qu’est-ce que les directives anticipées ?',
      verso: "Un document écrit par lequel une personne majeure exprime à l’avance ses souhaits de fin de vie, pour le cas où elle ne pourrait plus s’exprimer.",
      type: 'definition',
      tags: ['directives anticipées'],
    },
    {
      id: 'ue7-fin-de-vie-fc-09',
      recto: 'Les directives anticipées s’imposent-elles toujours au médecin ?',
      verso: 'En principe oui, sauf situation d’urgence vitale ou caractère manifestement inapproprié, nécessitant alors une décision collégiale.',
      type: 'definition',
      tags: ['directives anticipées'],
    },
    {
      id: 'ue7-fin-de-vie-fc-10',
      recto: 'Quel rôle jouent les proches en l’absence de directives anticipées connues ?',
      verso: 'La personne de confiance, ou à défaut les proches, sont consultés pour témoigner de la volonté présumée du patient.',
      type: 'clinique',
      tags: ['directives anticipées', 'personne de confiance'],
    },
    {
      id: 'ue7-fin-de-vie-fc-11',
      recto: 'Citer deux lois françaises majeures relatives à la fin de vie.',
      verso: 'La loi Leonetti de 2005 et la loi Claeys-Leonetti de 2016.',
      type: 'chiffre',
      tags: ['loi Leonetti', 'loi Claeys-Leonetti'],
    },
    {
      id: 'ue7-fin-de-vie-fc-12',
      recto: 'Le processus de deuil suit-il un schéma strictement linéaire ?',
      verso: 'Non, il comporte des phases repères (sidération, colère, tristesse, réorganisation) mais leur enchaînement varie selon les personnes.',
      type: 'clinique',
      tags: ['deuil'],
    },
  ],
  qcm: [
    {
      id: 'ue7-fin-de-vie-qcm-01',
      enonce: 'Concernant les soins palliatifs, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Ils visent à soulager la douleur et les autres symptômes.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Ils cherchent à hâter la survenue de la mort chez les patients en fin de vie.',
          vraie: false,
          justification: "Faux : ils ne cherchent ni à hâter ni à retarder la mort.",
        },
        {
          lettre: 'C',
          texte: 'Ils peuvent être associés à des traitements curatifs.',
          vraie: true,
          justification: 'Exact, notamment lorsqu’ils sont proposés précocement.',
        },
        {
          lettre: 'D',
          texte: 'Ils prennent en compte uniquement la dimension physique de la personne malade.',
          vraie: false,
          justification: "Faux : ils prennent en compte les dimensions physique, psychologique, sociale et spirituelle.",
        },
        {
          lettre: 'E',
          texte: 'L’accès aux soins palliatifs est un droit reconnu pour toute personne dont l’état le requiert.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue7-fin-de-vie-qcm-02',
      enonce: 'Concernant l’obstination déraisonnable, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle désigne la poursuite de traitements disproportionnés par rapport au bénéfice attendu.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Refuser l’obstination déraisonnable équivaut à pratiquer une euthanasie.',
          vraie: false,
          justification: "Faux : la finalité est fondamentalement différente, il ne s’agit pas de provoquer la mort.",
        },
        {
          lettre: 'C',
          texte: 'Un traitement initialement justifié peut devenir déraisonnable si la situation évolue.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'L’évaluation du caractère déraisonnable repose sur une décision individuelle isolée.',
          vraie: false,
          justification: "Faux : elle repose sur une appréciation médicale collégiale.",
        },
        {
          lettre: 'E',
          texte: 'Elle peut concerner la mise en œuvre comme la poursuite d’un traitement.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-fin-de-vie-qcm-03',
      enonce: 'Concernant la limitation et l’arrêt des traitements, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La décision est prise de façon collégiale.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Elle tient compte de la volonté du patient lorsqu’elle peut être connue.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Elle entraîne systématiquement l’arrêt de tous les soins, y compris de confort.',
          vraie: false,
          justification: "Faux : les soins de confort et l’accompagnement sont toujours poursuivis.",
        },
        {
          lettre: 'D',
          texte: 'La décision doit être tracée dans le dossier médical.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'La limitation désigne l’interruption d’un traitement déjà en cours.',
          vraie: false,
          justification: "Faux : la limitation désigne le fait de ne pas débuter un traitement ; l’arrêt désigne l’interruption d’un traitement en cours.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-fin-de-vie-qcm-04',
      enonce: 'Concernant la sédation profonde et continue jusqu’au décès, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle vise à soulager une souffrance réfractaire.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Elle a pour intention de provoquer directement la mort du patient.',
          vraie: false,
          justification: "Faux : c’est précisément ce qui la distingue de l’euthanasie.",
        },
        {
          lettre: 'C',
          texte: 'Elle est associée à une analgésie.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Elle est réservée à des situations précisément définies, encadrées par une procédure collégiale.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Le décès résulte directement du geste sédatif lui-même.',
          vraie: false,
          justification: "Faux : le décès résulte de l’évolution naturelle de la maladie, non du geste sédatif.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 3,
    },
    {
      id: 'ue7-fin-de-vie-qcm-05',
      enonce: 'Concernant les directives anticipées, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elles peuvent être rédigées par toute personne majeure.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Elles ne peuvent jamais être modifiées une fois rédigées.',
          vraie: false,
          justification: "Faux : elles peuvent être modifiées ou révoquées à tout moment.",
        },
        {
          lettre: 'C',
          texte: 'Elles s’imposent en principe au médecin lorsqu’elles sont accessibles.',
          vraie: true,
          justification: 'Exact, sauf exceptions strictement encadrées.',
        },
        {
          lettre: 'D',
          texte: 'Elles priment en principe sur l’avis de la personne de confiance lorsqu’elles existent.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Elles ne peuvent être rédigées que par une personne déjà atteinte d’une maladie grave.',
          vraie: false,
          justification: "Faux : toute personne majeure peut les rédiger, malade ou non au moment de la rédaction.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-fin-de-vie-qcm-06',
      enonce: 'Concernant le deuil, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il désigne le processus psychique d’adaptation à la perte d’un proche.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Ses phases se succèdent toujours de façon strictement identique chez tous les endeuillés.',
          vraie: false,
          justification: "Faux : leur enchaînement et leur durée varient considérablement selon les personnes.",
        },
        {
          lettre: 'C',
          texte: 'Un deuil peut être considéré comme pathologique s’il reste bloqué de façon prolongée à une phase précoce.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'L’accompagnement de la fin de vie peut inclure un travail d’anticipation appelé deuil anticipé.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'La colère ne fait jamais partie des réactions normales de deuil.',
          vraie: false,
          justification: "Faux : la colère et la culpabilité font partie des phases classiquement décrites du deuil.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
