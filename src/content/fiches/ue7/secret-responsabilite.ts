import type { Fiche } from '../../types';

export const ficheSecretResponsabilite: Fiche = {
  id: 'ue7-secret-responsabilite',
  ue: 'ue7',
  titre: 'Secret professionnel et responsabilité médicale',
  sousTitre:
    'Fondements et dérogations du secret médical, et grands principes des responsabilités civile, pénale et disciplinaire',
  chapitre: 'Éthique et droit',
  ordre: 5,
  duree: 24,
  difficulte: 3,
  motsCles: [
    'secret professionnel',
    'secret médical',
    'dérogations légales',
    'responsabilité civile',
    'responsabilité pénale',
    'responsabilité disciplinaire',
    'aléa thérapeutique',
    'indemnisation',
  ],
  objectifs: [
    'Définir le fondement et la portée du secret professionnel médical.',
    'Citer les principales situations de dérogation légale au secret professionnel.',
    'Distinguer les responsabilités civile, pénale et disciplinaire du médecin.',
    'Expliquer la notion d’aléa thérapeutique et le principe de son indemnisation.',
    'Comprendre les grandes conditions de mise en jeu de la responsabilité médicale.',
  ],
  sections: [
    {
      id: 'fondements-secret',
      titre: 'Fondements du secret professionnel',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le secret professionnel médical est un pilier historique de la relation de soin, déjà évoqué dans le serment d’Hippocrate. Il vise à protéger la vie privée du patient et à instaurer la confiance nécessaire à une prise en charge sincère : un patient qui craindrait la divulgation d’informations intimes serait tenté de dissimuler des éléments pourtant utiles au diagnostic.",
        },
        {
          type: 'definition',
          terme: 'Secret professionnel médical',
          definition:
            "Obligation, pour tout professionnel de santé, de ne pas divulguer les informations concernant un patient dont il a eu connaissance dans l’exercice de sa profession, qu’il s’agisse d’informations médicales ou d’informations plus générales apprises à l’occasion des soins.",
        },
        {
          type: 'liste',
          items: [
            "Le secret professionnel s’impose à tout professionnel de santé, pas uniquement au médecin.",
            "Il couvre non seulement le diagnostic mais tout ce que le professionnel a pu voir, entendre ou comprendre à l’occasion de l’exercice de sa profession.",
            "Il perdure après le décès du patient, sauf exceptions permettant aux ayants droit d’accéder à certaines informations dans des cas définis.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le droit évolue',
          texte:
            "Les contours précis du secret professionnel et de ses dérogations relèvent de textes et d’une jurisprudence évolutifs. Les principes présentés ici doivent être complétés par le cours de la faculté pour toute application pratique ou juridique précise.",
        },
      ],
    },
    {
      id: 'derogations-secret',
      titre: 'Les dérogations au secret professionnel',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le secret professionnel n’est pas absolu : le droit prévoit des situations dans lesquelles la révélation d’une information est autorisée, voire obligatoire, afin de protéger d’autres intérêts légitimes (santé publique, protection de personnes vulnérables, bon fonctionnement de la justice).",
        },
        {
          type: 'tableau',
          titre: 'Grandes catégories de dérogations',
          colonnes: ['Type de dérogation', 'Exemple de situation', 'Caractère'],
          lignes: [
            [
              'Dérogations liées à la protection de personnes vulnérables',
              'Signalement de sévices ou privations constatés chez un mineur ou une personne vulnérable',
              'Souvent une faculté, parfois une obligation selon les circonstances',
            ],
            [
              'Dérogations de santé publique',
              'Déclaration obligatoire de certaines maladies contagieuses aux autorités sanitaires',
              'Obligation légale',
            ],
            [
              'Dérogations liées à la justice',
              'Certificats médicaux, réquisitions judiciaires, expertise médico-légale',
              'Encadrées strictement, limitées à l’objet de la mission',
            ],
            [
              'Partage d’informations entre professionnels',
              'Échange d’informations entre professionnels participant à la prise en charge d’un même patient',
              "Autorisé dans la limite de ce qui est nécessaire à la continuité des soins",
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Un principe directeur',
          texte:
            "Chaque dérogation au secret professionnel doit rester strictement limitée à ce qui est nécessaire à la finalité poursuivie (protection d’un tiers vulnérable, santé publique, continuité des soins) : la révélation ne doit jamais dépasser ce que la situation justifie.",
        },
      ],
    },
    {
      id: 'responsabilite-generalites',
      titre: 'Généralités sur la responsabilité médicale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La responsabilité médicale peut être engagée sur trois plans distincts, qui peuvent se cumuler pour un même fait : la responsabilité civile (réparation d’un dommage), la responsabilité pénale (sanction d’une infraction) et la responsabilité disciplinaire (sanction professionnelle au regard des règles de la profession).",
        },
        {
          type: 'tableau',
          titre: 'Les trois types de responsabilité médicale',
          colonnes: ['Type', 'Objectif', 'Juridiction ou instance', 'Sanction type'],
          lignes: [
            [
              'Responsabilité civile',
              'Réparer le préjudice subi par le patient',
              'Juridictions civiles (ou administratives à l’hôpital public)',
              'Indemnisation financière',
            ],
            [
              'Responsabilité pénale',
              'Sanctionner une infraction prévue par la loi pénale',
              'Juridictions pénales',
              'Amende, peine d’emprisonnement selon la gravité',
            ],
            [
              'Responsabilité disciplinaire',
              'Sanctionner un manquement aux règles de la profession',
              'Instance ordinale (conseil de l’ordre)',
              'Avertissement, blâme, interdiction temporaire ou définitive d’exercer',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Point clé à retenir',
          texte:
            "Un même fait fautif peut donner lieu simultanément aux trois types de responsabilité : par exemple, une faute grave peut entraîner une condamnation pénale, une indemnisation civile du patient, et une sanction disciplinaire, chacune répondant à une logique et à une finalité propres.",
        },
      ],
    },
    {
      id: 'conditions-responsabilite',
      titre: 'Les conditions de la responsabilité pour faute',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En matière civile, la mise en jeu de la responsabilité pour faute du médecin suppose classiquement la réunion de trois éléments : une faute, un dommage subi par le patient, et un lien de causalité direct entre cette faute et ce dommage.",
        },
        {
          type: 'etapes',
          titre: 'Les trois conditions cumulatives',
          etapes: [
            {
              titre: 'Une faute',
              detail: "Un manquement aux règles de l’art, aux données acquises de la science, ou à une obligation d’information ou de moyens.",
            },
            {
              titre: 'Un dommage',
              detail: "Un préjudice réel et certain subi par le patient, qu’il soit corporel, moral ou matériel.",
            },
            {
              titre: 'Un lien de causalité',
              detail: "Une relation directe et certaine entre la faute constatée et le dommage subi par le patient.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Obligation de moyens',
          definition:
            "Le médecin est en principe tenu à une obligation de moyens et non de résultat : il doit mettre en œuvre les moyens diagnostiques et thérapeutiques conformes aux données acquises de la science, sans garantir un résultat de guérison.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une exception : certaines obligations de résultat',
          texte:
            "Certaines obligations pèsent plus strictement sur le professionnel de santé, notamment en matière de sécurité de certains produits ou dispositifs utilisés, ou d’information du patient. Les contours précis de ces exceptions relèvent du droit positif et doivent être étudiés selon le cours de la faculté.",
        },
      ],
    },
    {
      id: 'alea-therapeutique',
      titre: 'L’aléa thérapeutique et son indemnisation',
      blocs: [
        {
          type: 'definition',
          terme: 'Aléa thérapeutique',
          definition:
            "Accident médical survenant en dehors de toute faute du professionnel de santé, correspondant à la réalisation d’un risque inhérent à l’acte médical, non anticipable dans ses conséquences pour ce patient précis.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le principe d’une indemnisation possible en l’absence de faute, au titre de la solidarité nationale, permet de ne pas laisser sans réparation un patient victime d’un accident médical grave, alors même qu’aucune faute ne peut être reprochée au professionnel de santé.",
        },
        {
          type: 'liste',
          items: [
            "L’indemnisation au titre de l’aléa thérapeutique se distingue de l’indemnisation pour faute, qui suppose un manquement identifié du professionnel.",
            "Des dispositifs existent pour faciliter le règlement amiable des accidents médicaux, notamment via des commissions dédiées, en complément de la voie contentieuse classique.",
            "Ce principe traduit une évolution de la conception de la responsabilité médicale, qui ne repose plus uniquement sur la démonstration d’une faute.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'À retenir sans excès de précision',
          texte:
            "Il n’est pas nécessaire de mémoriser des seuils réglementaires précis de gravité pour ce dispositif : retenir le principe général qu’un dommage grave, lié à un aléa thérapeutique sans faute, peut être indemnisé au titre de la solidarité nationale, selon des modalités à étudier dans le cours de la faculté.",
        },
      ],
    },
    {
      id: 'articulation-pratique',
      titre: 'Articulation pratique des responsabilités',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En pratique, un même événement indésirable grave peut donner lieu à des démarches parallèles : une plainte ordinale, une procédure pénale si une infraction est suspectée, et une demande d’indemnisation civile ou devant une commission de règlement amiable.",
        },
        {
          type: 'liste',
          items: [
            "La déclaration et l’analyse des événements indésirables graves participent à une démarche de sécurité des soins, indépendamment des suites judiciaires éventuelles.",
            "Le secret professionnel ne fait pas obstacle à la transmission des informations strictement nécessaires dans le cadre d’une procédure judiciaire régulièrement engagée.",
            "La traçabilité rigoureuse dans le dossier médical (information délivrée, décisions prises, raisonnement clinique) constitue un élément de preuve essentiel en cas de mise en cause de la responsabilité.",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la logique d’ensemble',
          texte:
            "Trois questions distinctes en cas d’événement indésirable : y a-t-il un préjudice à réparer (responsabilité civile) ? Y a-t-il une infraction à sanctionner (responsabilité pénale) ? Y a-t-il un manquement aux règles professionnelles (responsabilité disciplinaire) ? Une réponse positive à une question n’implique pas automatiquement une réponse positive aux deux autres.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le secret professionnel médical protège la vie privée du patient et fonde la confiance nécessaire à la relation de soin.",
    "Il s’impose à tout professionnel de santé et couvre l’ensemble des informations apprises dans l’exercice de la profession.",
    "Des dérogations légales existent, notamment pour la protection de personnes vulnérables, la santé publique et la justice, mais elles restent strictement limitées à leur finalité.",
    "La responsabilité médicale peut être civile, pénale et disciplinaire, ces trois voies pouvant se cumuler pour un même fait.",
    "La responsabilité pour faute suppose classiquement une faute, un dommage et un lien de causalité entre les deux.",
    "Le médecin est en principe tenu à une obligation de moyens, non de résultat.",
    "L’aléa thérapeutique correspond à un accident médical sans faute, pouvant ouvrir droit à une indemnisation au titre de la solidarité nationale.",
  ],
  erreursFrequentes: [
    "Croire que le secret professionnel est absolu et ne souffre aucune exception : des dérogations légales existent, strictement encadrées.",
    "Confondre les trois types de responsabilité (civile, pénale, disciplinaire), qui répondent à des logiques et des finalités différentes.",
    "Penser qu’une obligation de moyens équivaut à une absence totale d’obligation : le médecin doit mettre en œuvre les moyens conformes aux données acquises de la science.",
    "Confondre faute médicale et aléa thérapeutique : l’aléa thérapeutique survient précisément en l’absence de toute faute.",
    "Croire que le secret professionnel s’éteint totalement au décès du patient, alors que des exceptions permettent un accès encadré des ayants droit à certaines informations.",
  ],
  mnemotechniques: [
    {
      moyen: 'FDL',
      explication:
        'Faute, Dommage, Lien de causalité : les trois conditions cumulatives de la responsabilité civile pour faute.',
    },
    {
      moyen: 'CPD',
      explication:
        'Civile, Pénale, Disciplinaire : les trois types de responsabilité médicale, qui peuvent se cumuler pour un même fait.',
    },
  ],
  sources: [
    'Code de la santé publique (principes généraux, à actualiser selon le cours de la faculté)',
    'Code de déontologie médicale',
    'Hirsch E., Traité de bioéthique',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-secret-responsabilite-fc-01',
      recto: 'Que protège le secret professionnel médical ?',
      verso: "La vie privée du patient et la confiance nécessaire à une prise en charge sincère.",
      type: 'definition',
      tags: ['secret professionnel'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-02',
      recto: 'Le secret professionnel s’applique-t-il uniquement au médecin ?',
      verso: 'Non, il s’impose à tout professionnel de santé.',
      type: 'definition',
      tags: ['secret professionnel'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-03',
      recto: 'Citer un exemple de dérogation légale au secret professionnel.',
      verso: 'La déclaration obligatoire de certaines maladies contagieuses aux autorités sanitaires.',
      type: 'clinique',
      tags: ['dérogations'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-04',
      recto: 'Une dérogation au secret professionnel autorise-t-elle une divulgation illimitée ?',
      verso: 'Non, elle doit rester strictement limitée à ce qui est nécessaire à la finalité poursuivie.',
      type: 'definition',
      tags: ['dérogations'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-05',
      recto: 'Citer les trois types de responsabilité médicale.',
      verso: 'La responsabilité civile, la responsabilité pénale et la responsabilité disciplinaire.',
      type: 'classification',
      tags: ['responsabilité'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-06',
      recto: 'Quel est l’objectif de la responsabilité civile ?',
      verso: 'Réparer le préjudice subi par le patient, généralement par une indemnisation financière.',
      type: 'definition',
      tags: ['responsabilité civile'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-07',
      recto: 'Quelle instance sanctionne la responsabilité disciplinaire du médecin ?',
      verso: 'L’instance ordinale, c’est-à-dire le conseil de l’ordre.',
      type: 'definition',
      tags: ['responsabilité disciplinaire'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-08',
      recto: 'Citer les trois conditions cumulatives de la responsabilité civile pour faute.',
      verso: 'Une faute, un dommage, et un lien de causalité direct entre la faute et le dommage.',
      type: 'mecanisme',
      tags: ['responsabilité', 'faute'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-09',
      recto: 'Le médecin est-il tenu à une obligation de moyens ou de résultat ?',
      verso: 'En principe à une obligation de moyens : mettre en œuvre les moyens conformes aux données acquises de la science, sans garantir la guérison.',
      type: 'definition',
      tags: ['obligation de moyens'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-10',
      recto: 'Définir l’aléa thérapeutique.',
      verso: "Un accident médical survenant sans faute du professionnel, correspondant à la réalisation d’un risque inhérent à l’acte médical.",
      type: 'definition',
      tags: ['aléa thérapeutique'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-11',
      recto: 'Comment un aléa thérapeutique grave peut-il être indemnisé ?',
      verso: 'Au titre de la solidarité nationale, en l’absence de toute faute du professionnel de santé.',
      type: 'mecanisme',
      tags: ['aléa thérapeutique', 'indemnisation'],
    },
    {
      id: 'ue7-secret-responsabilite-fc-12',
      recto: 'Un même fait fautif peut-il engager plusieurs types de responsabilité ?',
      verso: 'Oui, les responsabilités civile, pénale et disciplinaire peuvent se cumuler pour un même fait.',
      type: 'mecanisme',
      tags: ['responsabilité'],
    },
  ],
  qcm: [
    {
      id: 'ue7-secret-responsabilite-qcm-01',
      enonce: 'Concernant le secret professionnel médical, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il vise à protéger la vie privée du patient.',
          vraie: true,
          justification: 'Exact : le secret professionnel préserve l’intimité du patient et évite la divulgation d’informations personnelles apprises lors des soins.',
        },
        {
          lettre: 'B',
          texte: 'Il ne concerne que les informations diagnostiques.',
          vraie: false,
          justification: "Faux : il couvre tout ce que le professionnel a pu voir, entendre ou comprendre à l’occasion de l’exercice de sa profession.",
        },
        {
          lettre: 'C',
          texte: 'Il s’impose uniquement aux médecins et non aux autres professionnels de santé.',
          vraie: false,
          justification: "Faux : il s’impose à tout professionnel de santé.",
        },
        {
          lettre: 'D',
          texte: 'Il est absolu et ne souffre aucune exception.',
          vraie: false,
          justification: "Faux : des dérogations légales existent, strictement encadrées.",
        },
        {
          lettre: 'E',
          texte: 'Il contribue à instaurer la confiance nécessaire à la relation de soin.',
          vraie: true,
          justification: 'Exact : un patient assuré de la confidentialité est moins tenté de dissimuler des éléments pourtant utiles au diagnostic.',
        },
      ],
      correction: 'Réponses exactes : A et E.',
      difficulte: 1,
    },
    {
      id: 'ue7-secret-responsabilite-qcm-02',
      enonce: 'Concernant les dérogations au secret professionnel, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Certaines maladies contagieuses font l’objet d’une déclaration obligatoire aux autorités sanitaires.',
          vraie: true,
          justification: 'Exact, au nom de la protection de la santé publique.',
        },
        {
          lettre: 'B',
          texte: 'Le partage d’informations entre professionnels participant à la même prise en charge est toujours interdit.',
          vraie: false,
          justification: "Faux : il est autorisé dans la limite de ce qui est nécessaire à la continuité des soins.",
        },
        {
          lettre: 'C',
          texte: 'Une dérogation autorise en principe une divulgation illimitée d’informations.',
          vraie: false,
          justification: "Faux : elle doit rester strictement limitée à ce qui est nécessaire à sa finalité.",
        },
        {
          lettre: 'D',
          texte: 'La protection de personnes vulnérables peut justifier une dérogation au secret.',
          vraie: true,
          justification: 'Exact, par exemple en cas de sévices constatés.',
        },
        {
          lettre: 'E',
          texte: 'Une réquisition judiciaire régulière peut justifier la transmission d’informations strictement nécessaires.',
          vraie: true,
          justification: 'Exact : les dérogations liées à la justice sont encadrées strictement et limitées à l’objet de la mission judiciaire.',
        },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-secret-responsabilite-qcm-03',
      enonce: 'Concernant les types de responsabilité médicale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La responsabilité civile vise à réparer le préjudice subi par le patient.',
          vraie: true,
          justification: 'Exact : c’est l’objectif propre de la responsabilité civile, qui se traduit généralement par une indemnisation financière.',
        },
        {
          lettre: 'B',
          texte: 'La responsabilité pénale sanctionne un manquement aux règles de la profession devant l’ordre.',
          vraie: false,
          justification: "Faux : c’est la responsabilité disciplinaire qui répond à cette définition ; la responsabilité pénale sanctionne une infraction devant les juridictions pénales.",
        },
        {
          lettre: 'C',
          texte: 'Ces trois types de responsabilité peuvent se cumuler pour un même fait.',
          vraie: true,
          justification: 'Exact : une même faute grave peut entraîner à la fois une condamnation pénale, une indemnisation civile et une sanction disciplinaire.',
        },
        {
          lettre: 'D',
          texte: 'La responsabilité disciplinaire relève des juridictions civiles.',
          vraie: false,
          justification: "Faux : elle relève de l’instance ordinale, non des juridictions civiles.",
        },
        {
          lettre: 'E',
          texte: 'Une sanction disciplinaire peut aller jusqu’à l’interdiction d’exercer.',
          vraie: true,
          justification: 'Exact, dans les cas les plus graves.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-secret-responsabilite-qcm-04',
      enonce: 'Concernant les conditions de la responsabilité civile pour faute, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle suppose une faute, un dommage et un lien de causalité.',
          vraie: true,
          justification: 'Exact, ce sont les trois conditions cumulatives classiques.',
        },
        {
          lettre: 'B',
          texte: 'Le médecin est en principe tenu à une obligation de résultat quant à la guérison du patient.',
          vraie: false,
          justification: "Faux : il est en principe tenu à une obligation de moyens, non de résultat.",
        },
        {
          lettre: 'C',
          texte: 'L’absence de lien de causalité entre une faute et un dommage empêche la mise en jeu de la responsabilité pour faute.',
          vraie: true,
          justification: 'Exact : les trois conditions (faute, dommage, lien de causalité) sont cumulatives, l’absence de l’une d’elles suffit à écarter la responsabilité pour faute.',
        },
        {
          lettre: 'D',
          texte: 'Un dommage sans faute identifiée ne peut jamais faire l’objet d’une indemnisation.',
          vraie: false,
          justification: "Faux : l’aléa thérapeutique peut ouvrir droit à une indemnisation au titre de la solidarité nationale, sans faute.",
        },
        {
          lettre: 'E',
          texte: 'La faute peut résulter d’un manquement à une obligation d’information.',
          vraie: true,
          justification: 'Exact : un manquement aux règles de l’art, aux données acquises de la science ou à une obligation d’information constitue une faute.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-secret-responsabilite-qcm-05',
      enonce: 'Concernant l’aléa thérapeutique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il correspond à un accident médical survenant en l’absence de faute.',
          vraie: true,
          justification: 'Exact : c’est ce qui distingue l’aléa thérapeutique de la faute médicale, il correspond à la réalisation d’un risque inhérent à l’acte, non fautif.',
        },
        {
          lettre: 'B',
          texte: 'Il est toujours dû à une négligence du professionnel de santé.',
          vraie: false,
          justification: "Faux : c’est précisément l’absence de faute qui le caractérise.",
        },
        {
          lettre: 'C',
          texte: 'Il peut ouvrir droit à une indemnisation au titre de la solidarité nationale.',
          vraie: true,
          justification: 'Exact : ce principe évite de laisser sans réparation un patient victime d’un accident médical grave alors qu’aucune faute ne peut être reprochée au professionnel.',
        },
        {
          lettre: 'D',
          texte: 'Il se confond juridiquement avec la faute médicale.',
          vraie: false,
          justification: "Faux : il s’en distingue précisément par l’absence de faute.",
        },
        {
          lettre: 'E',
          texte: 'Des dispositifs de règlement amiable peuvent faciliter son indemnisation.',
          vraie: true,
          justification: 'Exact, en complément de la voie contentieuse classique.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-secret-responsabilite-qcm-06',
      enonce: 'Concernant l’articulation pratique des responsabilités, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un même événement indésirable grave peut donner lieu à des démarches parallèles sur plusieurs plans.',
          vraie: true,
          justification: 'Exact : plainte ordinale, procédure pénale et demande d’indemnisation civile peuvent coexister.',
        },
        {
          lettre: 'B',
          texte: 'La traçabilité dans le dossier médical n’a aucune valeur en cas de mise en cause de la responsabilité.',
          vraie: false,
          justification: "Faux : elle constitue au contraire un élément de preuve essentiel.",
        },
        {
          lettre: 'C',
          texte: 'Le secret professionnel fait obstacle à toute transmission d’information dans le cadre d’une procédure judiciaire régulière.',
          vraie: false,
          justification: "Faux : il ne fait pas obstacle à la transmission des informations strictement nécessaires dans ce cadre.",
        },
        {
          lettre: 'D',
          texte: 'Une réponse positive à la question de la responsabilité civile implique automatiquement une réponse positive en matière pénale.',
          vraie: false,
          justification: "Faux : ces trois questions sont distinctes et ne se déduisent pas nécessairement l’une de l’autre.",
        },
        {
          lettre: 'E',
          texte: 'La déclaration des événements indésirables graves participe à une démarche de sécurité des soins.',
          vraie: true,
          justification: 'Exact, indépendamment des suites judiciaires éventuelles.',
        },
      ],
      correction: 'Réponses exactes : A et E.',
      difficulte: 2,
    },
  ],
};
