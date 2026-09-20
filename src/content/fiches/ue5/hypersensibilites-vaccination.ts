import type { Fiche } from '../../types';

export const ficheHypersensibilitesVaccination: Fiche = {
  id: 'ue5-hypersensibilites-vaccination',
  ue: 'ue5',
  titre: 'Hypersensibilités, auto-immunité et vaccination',
  sousTitre:
    'Classification de Gell et Coombs, allergie, tolérance et sa rupture, principes de la vaccination, sérothérapie',
  chapitre: 'Immunopathologie',
  ordre: 9,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'hypersensibilité',
    'Gell et Coombs',
    'allergie',
    'auto-immunité',
    'tolérance immunitaire',
    'vaccination',
    'vaccin vivant atténué',
    'vaccin inactivé',
    'sérothérapie',
  ],
  objectifs: [
    'Décrire les quatre types d’hypersensibilité de la classification de Gell et Coombs.',
    'Expliquer le mécanisme cellulaire et moléculaire de l’hypersensibilité immédiate (type I).',
    'Distinguer les mécanismes de tolérance centrale et périphérique et les situations de leur rupture.',
    'Comparer les grands types de vaccins et leurs principes immunologiques respectifs.',
    'Distinguer vaccination et sérothérapie.',
  ],
  sections: [
    {
      id: 'classification-gell-coombs',
      titre: 'Classification de Gell et Coombs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La classification de Gell et Coombs distingue quatre types d’hypersensibilité selon le mécanisme immunologique en cause : les trois premiers types sont médiés par des anticorps, le quatrième par les lymphocytes T.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre types d’hypersensibilité',
          colonnes: ['Type', 'Mécanisme', 'Délai', 'Exemple'],
          lignes: [
            ['Type I', 'IgE fixées sur mastocytes et basophiles, dégranulation après réexposition', 'Immédiat (minutes)', 'Anaphylaxie, rhinite allergique, asthme allergique'],
            ['Type II', 'Anticorps (IgG, IgM) dirigés contre un antigène de surface cellulaire', 'Heures', 'Anémie hémolytique auto-immune, incompatibilité transfusionnelle ABO'],
            ['Type III', 'Dépôt tissulaire de complexes immuns circulants antigène-anticorps', 'Heures à jours', 'Maladie sérique, certaines glomérulonéphrites'],
            ['Type IV', 'Lymphocytes T sensibilisés (cellulaire, retardée)', 'Vingt-quatre à soixante-douze heures', 'Eczéma de contact, réaction tuberculinique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Retenir la logique de classification',
          texte:
            "Les types I, II et III sont tous humoraux, médiés par des anticorps, mais diffèrent par la cible : IgE libre fixée aux cellules (type I), antigène de surface cellulaire (type II), complexes immuns circulants déposés dans les tissus (type III). Le type IV est le seul purement cellulaire, sans anticorps.",
        },
      ],
    },
    {
      id: 'hypersensibilite-immediate',
      titre: 'Hypersensibilité immédiate (type I) et allergie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’hypersensibilité de type I, ou allergie immédiate, résulte d’une polarisation Th2 excessive lors du premier contact avec un allergène, aboutissant à une production d’IgE spécifiques.",
        },
        {
          type: 'etapes',
          titre: 'Phases de la réaction allergique de type I',
          etapes: [
            {
              titre: 'Phase de sensibilisation',
              detail:
                "Lors du premier contact avec l’allergène, la polarisation Th2 induit la production d’IgE spécifiques par les plasmocytes ; ces IgE se fixent sur les récepteurs de haute affinité (FcεRI) des mastocytes et des basophiles, sans symptôme clinique à ce stade.",
            },
            {
              titre: 'Phase de déclenchement',
              detail:
                "Lors d’une réexposition, l’allergène établit un pontage entre plusieurs IgE fixées à la surface d’un même mastocyte, déclenchant sa dégranulation immédiate et la libération d’histamine, de leucotriènes et de prostaglandines.",
            },
            {
              titre: 'Phase tardive',
              detail:
                "Quelques heures après la phase immédiate, une infiltration cellulaire, notamment par les polynucléaires éosinophiles, entretient l’inflammation locale.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Choc anaphylactique',
          texte:
            "Le choc anaphylactique est la forme la plus grave et systémique de l’hypersensibilité de type I, avec vasodilatation généralisée, hypotension sévère, bronchospasme et œdème laryngé, engageant le pronostic vital. Le traitement d’urgence repose sur l’injection intramusculaire d’adrénaline.",
        },
      ],
    },
    {
      id: 'tolerance-auto-immunite',
      titre: 'Tolérance immunitaire et rupture de tolérance',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La tolérance immunitaire désigne l’ensemble des mécanismes empêchant le système immunitaire de réagir contre les constituants du soi. Elle repose sur des mécanismes centraux, thymiques et médullaires, et périphériques.",
        },
        {
          type: 'tableau',
          titre: 'Mécanismes de tolérance immunitaire',
          colonnes: ['Niveau', 'Mécanismes principaux'],
          lignes: [
            ['Tolérance centrale', 'Sélection négative thymique des lymphocytes T ; édition du récepteur ou apoptose des lymphocytes B autoréactifs dans la moelle osseuse'],
            [
              'Tolérance périphérique',
              'Anergie par absence de costimulation, suppression active par les lymphocytes T régulateurs, ignorance immunitaire, délétion périphérique par apoptose',
            ],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "L’auto-immunité résulte de la rupture de ces mécanismes de tolérance, aboutissant à une réponse immunitaire dirigée contre des antigènes du soi. Plusieurs facteurs peuvent y contribuer : prédisposition génétique (notamment certains allèles HLA), facteurs environnementaux, et mimétisme moléculaire entre un agent infectieux et un antigène du soi.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Mimétisme moléculaire',
          texte:
            "Le mimétisme moléculaire désigne la similitude structurale entre un épitope microbien et un épitope du soi. Une réponse immunitaire dirigée initialement contre le pathogène peut alors, par réaction croisée, s’attaquer aux tissus de l’hôte porteurs de l’épitope similaire.",
        },
      ],
    },
    {
      id: 'principes-vaccination',
      titre: 'Principes de la vaccination',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La vaccination consiste à induire une immunité protectrice active et durable en exposant l’organisme à un antigène modifié, non pathogène, mais suffisamment immunogène pour générer une réponse mémoire.",
        },
        {
          type: 'tableau',
          titre: 'Principaux types de vaccins',
          colonnes: ['Type', 'Principe', 'Exemple'],
          lignes: [
            ['Vaccin vivant atténué', 'Micro-organisme vivant dont la virulence est réduite par atténuation', 'Rougeole-oreillons-rubéole, fièvre jaune'],
            ['Vaccin inactivé (inerte)', 'Micro-organisme entier tué', 'Vaccin antigrippal inactivé, vaccin antipoliomyélitique injectable'],
            ['Vaccin sous-unitaire', 'Fraction antigénique purifiée du pathogène', 'Vaccin contre l’hépatite B (antigène de surface recombinant)'],
            ['Vaccin conjugué', 'Polysaccharide capsulaire couplé à une protéine porteuse', 'Vaccin antipneumococcique conjugué, vaccin anti-Haemophilus influenzae b'],
            ['Anatoxine', 'Toxine bactérienne inactivée conservant son pouvoir immunogène', 'Vaccin antitétanique, vaccin antidiphtérique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Vaccins vivants atténués et immunodépression',
          texte:
            "Les vaccins vivants atténués sont formellement contre-indiqués chez les patients sévèrement immunodéprimés, en raison du risque de maladie vaccinale disséminée par le pathogène atténué, insuffisamment contrôlé en l’absence de réponse immunitaire compétente.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Pourquoi le vaccin conjugué',
          texte:
            "Un antigène polysaccharidique pur active le lymphocyte B de façon thymo-indépendante, sans mémoire durable, et fonctionne mal chez le nourrisson dont l’immunité B est immature. Le coupler à une protéine porteuse permet le recrutement d’un lymphocyte T CD4 spécifique de la protéine, rendant la réponse thymodépendante, avec mémoire immunitaire et efficacité dès le plus jeune âge.",
        },
      ],
    },
    {
      id: 'serotherapie',
      titre: 'Sérothérapie et immunité passive',
      blocs: [
        {
          type: 'definition',
          terme: 'Sérothérapie',
          definition:
            "Administration d’anticorps préformés (immunoglobulines spécifiques ou sérum antitoxique) pour obtenir une protection immédiate mais transitoire, sans sollicitation du système immunitaire du receveur. Elle constitue une immunité passive, par opposition à la vaccination, qui constitue une immunité active.",
        },
        {
          type: 'comparaison',
          titre: 'Vaccination versus sérothérapie',
          gauche: {
            titre: 'Vaccination (immunité active)',
            points: [
              'Induit une réponse immunitaire propre au receveur',
              'Délai d’efficacité de plusieurs jours à semaines',
              'Protection durable, avec mémoire immunitaire',
              'Nécessite un système immunitaire fonctionnel',
            ],
          },
          droite: {
            titre: 'Sérothérapie (immunité passive)',
            points: [
              'Apport direct d’anticorps préformés',
              'Protection immédiate',
              'Protection transitoire, sans mémoire immunitaire',
              'Utilisable même chez l’immunodéprimé',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple : prophylaxie post-exposition tétanique',
          texte:
            "Après une plaie à risque chez un sujet mal vacciné contre le tétanos, l’association d’une sérothérapie (immunoglobulines antitétaniques, protection immédiate) et d’une vaccination (anatoxine tétanique, protection durable) illustre la complémentarité de l’immunité passive et de l’immunité active.",
        },
      ],
    },
  ],
  pointsCles: [
    'La classification de Gell et Coombs distingue quatre types d’hypersensibilité : I (IgE immédiate), II (anticorps anti-cellule), III (complexes immuns), IV (cellulaire retardée).',
    'L’hypersensibilité de type I associe une phase de sensibilisation (production d’IgE) et une phase de déclenchement (dégranulation mastocytaire).',
    'Le choc anaphylactique est traité en urgence par l’adrénaline intramusculaire.',
    'La tolérance centrale (sélection négative, édition du récepteur) et la tolérance périphérique (anergie, Treg) préviennent l’auto-immunité.',
    'Les vaccins vivants atténués sont contre-indiqués chez les patients sévèrement immunodéprimés.',
    'Les vaccins conjugués couplent un polysaccharide à une protéine porteuse pour rendre la réponse thymodépendante et mémoire.',
    'La sérothérapie apporte une immunité passive immédiate et transitoire, à l’inverse de la vaccination, qui induit une immunité active durable.',
  ],
  erreursFrequentes: [
    'Croire que tous les types d’hypersensibilité de Gell et Coombs sont médiés par des anticorps : le type IV est purement cellulaire.',
    'Confondre type II (anticorps dirigés contre un antigène de surface cellulaire) et type III (dépôt de complexes immuns circulants).',
    'Oublier que la phase de sensibilisation de l’hypersensibilité de type I est cliniquement asymptomatique.',
    'Penser que la vaccination protège immédiatement : le délai d’installation de l’immunité active est de plusieurs jours à semaines, contrairement à la sérothérapie.',
    'Administrer un vaccin vivant atténué chez un patient sévèrement immunodéprimé sans tenir compte de la contre-indication formelle.',
    'Confondre sérothérapie (apport passif d’anticorps) et vaccination (induction active d’une réponse immunitaire propre).',
  ],
  mnemotechniques: [
    {
      moyen: '« ACID » pour les quatre types de Gell et Coombs',
      explication:
        'Anaphylactique (type I), Cytotoxique (type II), Immuns complexes (type III), Delayed/retardée (type IV) : un moyen classique pour ordonner les quatre types.',
    },
    {
      moyen: 'Sensibilisation silencieuse, déclenchement bruyant',
      explication:
        'Le premier contact allergénique (sensibilisation) ne donne aucun symptôme ; seul le second contact (déclenchement) provoque la réaction clinique.',
    },
    {
      moyen: 'Vaccin prépare, sérum répare',
      explication:
        'La vaccination prépare une immunité durable à l’avance ; la sérothérapie répare une exposition déjà survenue, par un apport immédiat d’anticorps.',
    },
  ],
  sources: [
    'Abbas, Lichtman, Pillai, Les bases de l’immunologie fondamentale et clinique',
    'Janeway, Immunobiologie',
    'Roitt, Immunologie',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue5-hypersensibilites-vaccination-fc-01',
      recto: 'Quel type d’hypersensibilité de Gell et Coombs est médié par les IgE ?',
      verso: 'Le type I (hypersensibilité immédiate).',
      type: 'classification',
      tags: ['Gell et Coombs'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-02',
      recto: 'Quel type d’hypersensibilité est purement cellulaire, sans anticorps ?',
      verso: 'Le type IV (hypersensibilité retardée).',
      type: 'classification',
      tags: ['Gell et Coombs'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-03',
      recto: 'Donner un exemple d’hypersensibilité de type II.',
      verso: 'L’anémie hémolytique auto-immune ou l’incompatibilité transfusionnelle ABO.',
      type: 'clinique',
      tags: ['Gell et Coombs'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-04',
      recto: 'Sur quels récepteurs les IgE se fixent-elles au cours de la phase de sensibilisation ?',
      verso: 'Les récepteurs de haute affinité FcεRI des mastocytes et des basophiles.',
      type: 'mecanisme',
      tags: ['hypersensibilité type I'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-05',
      recto: 'Quel traitement d’urgence est administré en cas de choc anaphylactique ?',
      verso: 'L’adrénaline en injection intramusculaire.',
      type: 'clinique',
      tags: ['anaphylaxie'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-06',
      recto: 'Citer deux mécanismes de tolérance périphérique.',
      verso: 'L’anergie par absence de costimulation et la suppression active par les lymphocytes T régulateurs.',
      type: 'mecanisme',
      tags: ['tolérance'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-07',
      recto: 'Qu’est-ce que le mimétisme moléculaire ?',
      verso: 'La similitude structurale entre un épitope microbien et un épitope du soi, pouvant induire une réaction croisée auto-immune.',
      type: 'mecanisme',
      tags: ['auto-immunité'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-08',
      recto: 'Citer un exemple de vaccin vivant atténué.',
      verso: 'Le vaccin rougeole-oreillons-rubéole, ou le vaccin contre la fièvre jaune.',
      type: 'classification',
      tags: ['vaccination'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-09',
      recto: 'Pourquoi les vaccins vivants atténués sont-ils contre-indiqués chez l’immunodéprimé sévère ?',
      verso: 'En raison du risque de maladie vaccinale disséminée, faute de contrôle immunitaire suffisant du pathogène atténué.',
      type: 'clinique',
      tags: ['vaccination'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-10',
      recto: 'Pourquoi conjugue-t-on un vaccin polysaccharidique à une protéine porteuse ?',
      verso: 'Pour rendre la réponse thymodépendante, avec recrutement d’un lymphocyte T CD4 et mémoire immunitaire, efficace dès le jeune âge.',
      type: 'mecanisme',
      tags: ['vaccin conjugué'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-11',
      recto: 'Qu’apporte la sérothérapie, à la différence de la vaccination ?',
      verso: 'Une immunité passive, par apport direct d’anticorps préformés, immédiate mais transitoire, sans mémoire immunitaire.',
      type: 'definition',
      tags: ['sérothérapie'],
    },
    {
      id: 'ue5-hypersensibilites-vaccination-fc-12',
      recto: 'Citer un exemple d’anatoxine vaccinale.',
      verso: 'Le vaccin antitétanique (toxine tétanique inactivée conservant son pouvoir immunogène).',
      type: 'classification',
      tags: ['vaccination'],
    },
  ],
  qcm: [
    {
      id: 'ue5-hypersensibilites-vaccination-qcm-01',
      enonce: 'Concernant la classification de Gell et Coombs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le type I est médié par les IgE.', vraie: true, justification: 'Exact : c’est l’hypersensibilité immédiate.' },
        { lettre: 'B', texte: 'Le type III correspond à un anticorps dirigé contre un antigène de surface cellulaire.', vraie: false, justification: 'C’est le type II ; le type III correspond au dépôt de complexes immuns circulants.' },
        { lettre: 'C', texte: 'Le type IV est médié par les lymphocytes T, sans anticorps.', vraie: true, justification: 'Exact : c’est l’hypersensibilité retardée, cellulaire.' },
        { lettre: 'D', texte: 'La réaction tuberculinique est un exemple de type IV.', vraie: true, justification: 'Exact, c’est un modèle classique d’hypersensibilité retardée.' },
        { lettre: 'E', texte: 'Le type II est toujours immédiat, en quelques minutes.', vraie: false, justification: 'Le type II se manifeste en général en quelques heures, plus lentement que le type I.' },
      ],
      correction: 'Réponses exactes : A, C et D. Bien distinguer les quatre types par leur mécanisme et leur délai.',
      difficulte: 2,
    },
    {
      id: 'ue5-hypersensibilites-vaccination-qcm-02',
      enonce: 'Concernant l’hypersensibilité de type I, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phase de sensibilisation est cliniquement symptomatique.', vraie: false, justification: 'La phase de sensibilisation est asymptomatique ; seule la réexposition déclenche les symptômes.' },
        { lettre: 'B', texte: 'Les IgE se fixent sur des récepteurs de haute affinité des mastocytes.', vraie: true, justification: 'Exact : le récepteur FcεRI.' },
        { lettre: 'C', texte: 'Le pontage de plusieurs IgE par l’allergène déclenche la dégranulation mastocytaire.', vraie: true, justification: 'Exact : c’est le mécanisme de la phase de déclenchement.' },
        { lettre: 'D', texte: 'Le choc anaphylactique se traite en première intention par les corticoïdes intraveineux.', vraie: false, justification: 'Le traitement de première intention du choc anaphylactique est l’adrénaline intramusculaire.' },
        { lettre: 'E', texte: 'Une phase tardive avec infiltration éosinophile peut suivre la phase immédiate.', vraie: true, justification: 'Exact, quelques heures après la réaction immédiate.' },
      ],
      correction: 'Réponses exactes : B, C et E. L’adrénaline reste le traitement de référence du choc anaphylactique.',
      difficulte: 2,
    },
    {
      id: 'ue5-hypersensibilites-vaccination-qcm-03',
      enonce: 'Concernant la tolérance immunitaire et l’auto-immunité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La sélection négative thymique est un mécanisme de tolérance centrale.', vraie: true, justification: 'Exact : elle élimine les lymphocytes T fortement autoréactifs.' },
        { lettre: 'B', texte: 'L’anergie par absence de costimulation est un mécanisme de tolérance périphérique.', vraie: true, justification: 'Exact : elle limite l’activation des lymphocytes autoréactifs échappés à la sélection centrale.' },
        { lettre: 'C', texte: 'Le mimétisme moléculaire peut favoriser une réaction auto-immune croisée.', vraie: true, justification: 'Exact, en raison de la similitude entre épitope microbien et épitope du soi.' },
        { lettre: 'D', texte: 'Les lymphocytes T régulateurs favorisent la rupture de tolérance.', vraie: false, justification: 'Les Treg protègent au contraire de la rupture de tolérance, par suppression active.' },
        { lettre: 'E', texte: 'Certains allèles HLA sont associés à une prédisposition à l’auto-immunité.', vraie: true, justification: 'Exact : le polymorphisme HLA module le risque de certaines maladies auto-immunes.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. La tolérance centrale et périphérique agissent en complémentarité.',
      difficulte: 2,
    },
    {
      id: 'ue5-hypersensibilites-vaccination-qcm-04',
      enonce: 'Concernant les types de vaccins, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le vaccin rougeole-oreillons-rubéole est un vaccin vivant atténué.', vraie: true, justification: 'Exact, comme le vaccin contre la fièvre jaune.' },
        { lettre: 'B', texte: 'Le vaccin contre l’hépatite B est un vaccin sous-unitaire.', vraie: true, justification: 'Exact : il repose sur l’antigène de surface recombinant.' },
        { lettre: 'C', texte: 'Une anatoxine est un micro-organisme entier vivant atténué.', vraie: false, justification: 'Une anatoxine est une toxine bactérienne inactivée, pas un micro-organisme vivant.' },
        { lettre: 'D', texte: 'Les vaccins vivants atténués sont contre-indiqués chez l’immunodéprimé sévère.', vraie: true, justification: 'Exact, en raison du risque de maladie vaccinale disséminée.' },
        { lettre: 'E', texte: 'Le vaccin antipneumococcique conjugué couple un polysaccharide à une protéine porteuse.', vraie: true, justification: 'Exact, afin de rendre la réponse thymodépendante.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Connaître un exemple représentatif pour chaque type de vaccin.',
      difficulte: 2,
    },
    {
      id: 'ue5-hypersensibilites-vaccination-qcm-05',
      enonce: 'Concernant les vaccins conjugués, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ils couplent un antigène polysaccharidique à une protéine porteuse.', vraie: true, justification: 'Exact : c’est le principe même de la conjugaison vaccinale.' },
        { lettre: 'B', texte: 'Ils transforment une réponse thymo-indépendante en réponse thymodépendante.', vraie: true, justification: 'Exact, en permettant le recrutement d’un lymphocyte T CD4 spécifique de la protéine porteuse.' },
        { lettre: 'C', texte: 'Ils sont moins efficaces que les polysaccharides purs chez le nourrisson.', vraie: false, justification: 'Ils sont au contraire plus efficaces chez le nourrisson, dont l’immunité B est immature pour la réponse thymo-indépendante.' },
        { lettre: 'D', texte: 'Ils permettent une mémoire immunitaire durable.', vraie: true, justification: 'Exact, grâce à la réponse thymodépendante et au passage par le centre germinatif.' },
        { lettre: 'E', texte: 'Le vaccin anti-Haemophilus influenzae de type b est un exemple de vaccin conjugué.', vraie: true, justification: 'Exact, tout comme le vaccin antipneumococcique conjugué.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Les vaccins conjugués exploitent la coopération T-B pour améliorer l’immunogénicité.',
      difficulte: 2,
    },
    {
      id: 'ue5-hypersensibilites-vaccination-qcm-06',
      enonce: 'Concernant la vaccination et la sérothérapie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La vaccination induit une immunité active.', vraie: true, justification: 'Exact : elle fait intervenir la réponse immunitaire propre du receveur.' },
        { lettre: 'B', texte: 'La sérothérapie induit une immunité passive.', vraie: true, justification: 'Exact : elle repose sur l’apport direct d’anticorps préformés.' },
        { lettre: 'C', texte: 'La sérothérapie offre une protection durable avec mémoire immunitaire.', vraie: false, justification: 'La sérothérapie offre une protection immédiate mais transitoire, sans mémoire immunitaire.' },
        { lettre: 'D', texte: 'La vaccination est efficace immédiatement après l’injection.', vraie: false, justification: 'La vaccination nécessite un délai de plusieurs jours à semaines pour induire une protection efficace.' },
        { lettre: 'E', texte: 'L’association sérothérapie-vaccination peut être utilisée en prophylaxie post-exposition tétanique.', vraie: true, justification: 'Exact : elle associe protection immédiate (sérothérapie) et durable (vaccination).' },
      ],
      correction: 'Réponses exactes : A, B et E. La complémentarité immunité passive/active est illustrée par la prophylaxie tétanique.',
      difficulte: 2,
    },
  ],
};
