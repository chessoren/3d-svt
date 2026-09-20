import type { Fiche } from '../../types';

export const ficheRelationSoin: Fiche = {
  id: 'ue7-relation-soin',
  ue: 'ue7',
  titre: 'La relation de soin',
  sousTitre:
    'Modèles paternaliste et délibératif, alliance thérapeutique, annonce d’une mauvaise nouvelle et communication soignant-soigné',
  chapitre: 'Sciences humaines appliquées',
  ordre: 7,
  duree: 23,
  difficulte: 2,
  motsCles: [
    'relation de soin',
    'modèle paternaliste',
    'modèle délibératif',
    'alliance thérapeutique',
    'annonce d’une mauvaise nouvelle',
    'empathie',
    'observance',
    'asymétrie',
  ],
  objectifs: [
    'Distinguer les différents modèles de relation médecin-patient.',
    'Définir la notion d’alliance thérapeutique et ses conditions.',
    'Décrire les grands principes de l’annonce d’une mauvaise nouvelle.',
    'Différencier empathie et sympathie dans la relation de soin.',
    'Expliquer les déterminants de l’observance thérapeutique.',
  ],
  sections: [
    {
      id: 'modeles-relation',
      titre: 'Les modèles de la relation médecin-patient',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La relation entre le soignant et le patient a longtemps été pensée sur un mode paternaliste, avant que l’affirmation des droits des patients ne favorise des modèles plus participatifs, jusqu’au modèle délibératif aujourd’hui souvent présenté comme un idéal de la relation de soin.",
        },
        {
          type: 'comparaison',
          titre: 'Modèle paternaliste et modèle délibératif',
          gauche: {
            titre: 'Modèle paternaliste',
            points: [
              'Le médecin décide dans ce qu’il estime être l’intérêt du patient, au nom de sa compétence technique.',
              'Le patient est en position relativement passive, peu associé à la décision.',
              'Ce modèle privilégie la bienfaisance, parfois au détriment de l’autonomie du patient.',
            ],
          },
          droite: {
            titre: 'Modèle délibératif',
            points: [
              'Le médecin informe, explique et échange avec le patient afin de construire une décision partagée.',
              'Le patient est acteur de la décision, en fonction de ses valeurs et de ses préférences.',
              'Ce modèle cherche à concilier bienfaisance et respect de l’autonomie.',
            ],
          },
        },
        {
          type: 'tableau',
          titre: 'Autres modèles classiquement décrits',
          colonnes: ['Modèle', 'Principe'],
          lignes: [
            [
              'Modèle informatif',
              "Le médecin transmet une information neutre et exhaustive, laissant au patient l’entière responsabilité de la décision",
            ],
            [
              'Modèle interprétatif',
              "Le médecin aide le patient à clarifier ses propres valeurs pour orienter sa décision, sans l’influencer directement",
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un continuum plus qu’une opposition binaire',
          texte:
            "Ces modèles ne s’excluent pas totalement : la pratique clinique réelle emprunte souvent à plusieurs registres selon la situation, l’urgence, ou la capacité du patient à participer à la décision.",
        },
      ],
    },
    {
      id: 'alliance-therapeutique',
      titre: 'L’alliance thérapeutique',
      blocs: [
        {
          type: 'definition',
          terme: 'Alliance thérapeutique',
          definition:
            "Relation de collaboration et de confiance construite entre le soignant et le patient, fondée sur un accord partagé concernant les objectifs du soin et les moyens d’y parvenir.",
        },
        {
          type: 'liste',
          items: [
            "L’alliance thérapeutique repose sur trois dimensions classiquement décrites : l’accord sur les objectifs, l’accord sur les moyens (les tâches à accomplir), et le lien affectif entre le soignant et le patient.",
            "Une alliance thérapeutique solide favorise l’adhésion du patient au projet de soin et améliore les résultats cliniques.",
            "Elle se construit progressivement, notamment par l’écoute, la cohérence du discours médical et le respect des engagements pris envers le patient.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Une alliance à entretenir dans la durée',
          texte:
            "L’alliance thérapeutique n’est jamais définitivement acquise : elle peut être fragilisée par une mauvaise communication, un défaut d’explication des effets indésirables d’un traitement, ou un sentiment de ne pas être écouté par le patient.",
        },
      ],
    },
    {
      id: 'annonce-mauvaise-nouvelle',
      titre: 'L’annonce d’une mauvaise nouvelle',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’annonce d’une mauvaise nouvelle (diagnostic grave, pronostic défavorable, échec thérapeutique) est un moment particulièrement sensible de la relation de soin, qui nécessite préparation, méthode et attention à la réaction du patient.",
        },
        {
          type: 'etapes',
          titre: 'Principes généraux d’une annonce (démarche inspirée du protocole SPIKES)',
          etapes: [
            {
              titre: 'Préparer le cadre',
              detail: "Choisir un lieu calme, prévoir le temps nécessaire, s’assurer de la présence souhaitée par le patient (proche, personne de confiance).",
            },
            {
              titre: 'Évaluer ce que le patient sait et souhaite savoir',
              detail: "S’enquérir de sa compréhension actuelle de la situation avant de délivrer l’information.",
            },
            {
              titre: 'Délivrer l’information progressivement',
              detail: "Utiliser un langage clair, adapté, en évitant à la fois la brutalité et l’euphémisme excessif.",
            },
            {
              titre: 'Accueillir les émotions',
              detail: "Laisser au patient le temps de réagir, reconnaître et accompagner ses émotions sans les minimiser.",
            },
            {
              titre: 'Organiser la suite',
              detail: "Proposer un plan de prise en charge, un temps de reformulation, et la possibilité d’un nouvel échange ultérieur.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Erreurs classiques à éviter',
          texte:
            "Annoncer de façon abrupte sans évaluation préalable de ce que sait le patient, utiliser un vocabulaire trop technique, ou au contraire euphémiser au point de rendre l’information incompréhensible, sont des écueils fréquents et bien documentés dans la littérature sur l’annonce.",
        },
      ],
    },
    {
      id: 'empathie-communication',
      titre: 'Empathie et communication',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Distinguer empathie et sympathie',
          gauche: {
            titre: 'Empathie',
            points: [
              'Capacité à comprendre et à se représenter les émotions et le point de vue du patient, tout en gardant une distance professionnelle.',
              'Permet une écoute attentive sans être submergé par les émotions du patient.',
              'Favorise la qualité de la relation et l’ajustement de la communication.',
            ],
          },
          droite: {
            titre: 'Sympathie',
            points: [
              'Fait de partager ou de ressentir directement les émotions du patient, sans distance.',
              'Peut altérer le jugement clinique ou la capacité à accompagner sereinement le patient.',
              'Se distingue de l’empathie par l’absence de mise à distance professionnelle.',
            ],
          },
        },
        {
          type: 'liste',
          items: [
            "La communication non verbale (posture, regard, ton de la voix) joue un rôle majeur dans la qualité perçue de la relation de soin, parfois autant que le contenu verbal du message.",
            "L’écoute active suppose de reformuler, de questionner et de laisser des silences, plutôt que d’enchaîner rapidement les informations.",
            "Un excès de jargon médical est une cause fréquente d’incompréhension et de perte de confiance du patient.",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la nuance',
          texte:
            "L’empathie n’est pas une faiblesse professionnelle : c’est une compétence clinique qui améliore la qualité du soin, tout en se distinguant de la sympathie par le maintien d’une juste distance.",
        },
      ],
    },
    {
      id: 'asymetrie-relation',
      titre: 'L’asymétrie de la relation de soin',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La relation de soin est structurellement asymétrique : le soignant détient un savoir technique et une position institutionnelle que le patient, en situation de vulnérabilité liée à la maladie, ne possède généralement pas.",
        },
        {
          type: 'liste',
          items: [
            "Cette asymétrie de savoir et de pouvoir peut fragiliser la capacité du patient à exprimer un désaccord ou des questions.",
            "Les modèles délibératif et interprétatif cherchent précisément à réduire cette asymétrie, sans pouvoir totalement la supprimer.",
            "Reconnaître cette asymétrie est une condition pour l’atténuer : par exemple en encourageant explicitement les questions du patient et en validant sa compréhension.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une asymétrie inévitable mais à accompagner',
          texte:
            "L’objectif n’est pas de nier cette asymétrie, structurellement liée à la nature même de la relation de soin, mais d’en avoir conscience pour mieux la compenser par l’information, l’écoute et le respect de l’autonomie du patient.",
        },
      ],
    },
    {
      id: 'observance',
      titre: 'L’observance thérapeutique',
      blocs: [
        {
          type: 'definition',
          terme: 'Observance thérapeutique',
          definition:
            "Degré de concordance entre le comportement du patient (prise de traitement, suivi des recommandations) et les prescriptions ou conseils délivrés par le soignant.",
        },
        {
          type: 'tableau',
          titre: 'Principaux déterminants de l’observance',
          colonnes: ['Catégorie', 'Exemples de facteurs'],
          lignes: [
            ['Liés au patient', 'Représentations de la maladie, croyances de santé, soutien social, état psychologique'],
            ['Liés au traitement', 'Complexité du schéma thérapeutique, effets indésirables, coût perçu'],
            ['Liés à la relation de soin', 'Qualité de la communication, confiance envers le soignant, clarté de l’information'],
            ['Liés au système de santé', 'Accessibilité des soins, continuité du suivi, coordination entre professionnels'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Une mauvaise observance n’est pas un simple manque de discipline',
          texte:
            "Considérer une mauvaise observance comme un problème purement moral (le patient qui « ne fait pas d’efforts ») est une erreur fréquente : elle résulte le plus souvent d’un ensemble de facteurs combinés, souvent modifiables par un travail sur la relation de soin et l’explication du traitement.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le modèle paternaliste privilégie la décision médicale seule ; le modèle délibératif construit une décision partagée avec le patient.",
    "L’alliance thérapeutique repose sur l’accord sur les objectifs, l’accord sur les moyens et le lien affectif entre soignant et patient.",
    "L’annonce d’une mauvaise nouvelle suit des principes méthodiques : préparation, évaluation de ce que sait le patient, information progressive, accueil des émotions, organisation de la suite.",
    "L’empathie suppose de comprendre les émotions du patient tout en gardant une distance professionnelle, à la différence de la sympathie.",
    "La relation de soin est structurellement asymétrique en savoir et en pouvoir, ce qui doit être pris en compte pour l’atténuer.",
    "L’observance thérapeutique dépend de facteurs liés au patient, au traitement, à la relation de soin et au système de santé.",
    "Une mauvaise observance ne doit pas être réduite à un jugement moral sur le patient.",
  ],
  erreursFrequentes: [
    "Opposer de façon rigide et exclusive modèle paternaliste et modèle délibératif, alors que la pratique réelle combine souvent plusieurs registres.",
    "Confondre empathie et sympathie, alors que l’empathie suppose le maintien d’une distance professionnelle.",
    "Considérer l’annonce d’une mauvaise nouvelle comme un simple transfert d’information, sans attention portée aux émotions du patient.",
    "Réduire une mauvaise observance à un défaut de volonté du patient, sans rechercher les facteurs liés au traitement ou à la relation de soin.",
    "Nier l’existence d’une asymétrie dans la relation de soin, alors qu’elle est structurelle et doit être explicitement prise en compte.",
  ],
  mnemotechniques: [
    {
      moyen: 'OMLE',
      explication:
        'Objectifs, Moyens, Lien affectif : les trois dimensions classiques de l’alliance thérapeutique.',
    },
    {
      moyen: 'PEIA',
      explication:
        'Préparer, Évaluer ce que sait le patient, Informer progressivement, Accueillir les émotions : les grandes étapes simplifiées de l’annonce d’une mauvaise nouvelle.',
    },
  ],
  sources: [
    'Baszanger I., Bungener M., Sociologie de la santé et de la médecine',
    'Buckman R., protocole d’annonce en situation de mauvaise nouvelle (protocole SPIKES)',
    'Consoli S. M., Psychologie médicale',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-relation-soin-fc-01',
      recto: 'Décrire le modèle paternaliste de la relation de soin.',
      verso: 'Le médecin décide dans ce qu’il estime être l’intérêt du patient, qui reste en position relativement passive.',
      type: 'definition',
      tags: ['modèle paternaliste'],
    },
    {
      id: 'ue7-relation-soin-fc-02',
      recto: 'Décrire le modèle délibératif de la relation de soin.',
      verso: 'Le médecin informe et échange avec le patient afin de construire ensemble une décision partagée, respectant ses valeurs.',
      type: 'definition',
      tags: ['modèle délibératif'],
    },
    {
      id: 'ue7-relation-soin-fc-03',
      recto: 'Citer les trois dimensions de l’alliance thérapeutique.',
      verso: 'L’accord sur les objectifs, l’accord sur les moyens, et le lien affectif entre soignant et patient.',
      type: 'classification',
      tags: ['alliance thérapeutique'],
    },
    {
      id: 'ue7-relation-soin-fc-04',
      recto: 'Citer les grandes étapes de l’annonce d’une mauvaise nouvelle.',
      verso: 'Préparer le cadre, évaluer ce que sait le patient, informer progressivement, accueillir les émotions, organiser la suite.',
      type: 'mecanisme',
      tags: ['annonce'],
    },
    {
      id: 'ue7-relation-soin-fc-05',
      recto: 'Distinguer empathie et sympathie.',
      verso: 'L’empathie comprend les émotions du patient en gardant une distance professionnelle ; la sympathie les partage sans distance.',
      type: 'definition',
      tags: ['empathie'],
    },
    {
      id: 'ue7-relation-soin-fc-06',
      recto: 'Pourquoi la relation de soin est-elle qualifiée d’asymétrique ?',
      verso: 'Parce que le soignant détient un savoir technique et une position institutionnelle que le patient, vulnérable, ne possède généralement pas.',
      type: 'mecanisme',
      tags: ['asymétrie'],
    },
    {
      id: 'ue7-relation-soin-fc-07',
      recto: 'Définir l’observance thérapeutique.',
      verso: 'Le degré de concordance entre le comportement du patient et les prescriptions ou conseils délivrés par le soignant.',
      type: 'definition',
      tags: ['observance'],
    },
    {
      id: 'ue7-relation-soin-fc-08',
      recto: 'Citer les quatre catégories de déterminants de l’observance.',
      verso: 'Les facteurs liés au patient, au traitement, à la relation de soin et au système de santé.',
      type: 'classification',
      tags: ['observance'],
    },
    {
      id: 'ue7-relation-soin-fc-09',
      recto: 'Une mauvaise observance doit-elle être interprétée comme un manque de volonté du patient ?',
      verso: 'Non, elle résulte le plus souvent d’un ensemble de facteurs combinés, souvent modifiables.',
      type: 'clinique',
      tags: ['observance'],
    },
    {
      id: 'ue7-relation-soin-fc-10',
      recto: 'Que privilégie le modèle informatif de la relation de soin ?',
      verso: 'Une information neutre et exhaustive, laissant au patient l’entière responsabilité de la décision.',
      type: 'definition',
      tags: ['modèle informatif'],
    },
    {
      id: 'ue7-relation-soin-fc-11',
      recto: 'Quel rôle joue la communication non verbale dans la relation de soin ?',
      verso: 'Un rôle majeur : posture, regard et ton de la voix influencent fortement la qualité perçue de la relation, parfois autant que le contenu verbal.',
      type: 'mecanisme',
      tags: ['communication'],
    },
    {
      id: 'ue7-relation-soin-fc-12',
      recto: 'Comment atténuer l’asymétrie de la relation de soin ?',
      verso: 'En encourageant explicitement les questions du patient, en validant sa compréhension et en privilégiant une communication claire et respectueuse de son autonomie.',
      type: 'mecanisme',
      tags: ['asymétrie'],
    },
  ],
  qcm: [
    {
      id: 'ue7-relation-soin-qcm-01',
      enonce: 'Concernant les modèles de la relation médecin-patient, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le modèle paternaliste laisse le patient totalement acteur de la décision.',
          vraie: false,
          justification: "Faux : dans ce modèle, le patient est en position relativement passive.",
        },
        {
          lettre: 'B',
          texte: 'Le modèle délibératif cherche à concilier bienfaisance et respect de l’autonomie.',
          vraie: true,
          justification: 'Exact : le médecin informe et échange avec le patient pour construire une décision partagée qui respecte à la fois son intérêt et ses valeurs.',
        },
        {
          lettre: 'C',
          texte: 'Le modèle informatif privilégie une information neutre et exhaustive.',
          vraie: true,
          justification: 'Exact : dans ce modèle, le médecin transmet une information neutre et exhaustive, laissant au patient l’entière responsabilité de la décision.',
        },
        {
          lettre: 'D',
          texte: 'Ces modèles s’excluent toujours mutuellement en pratique clinique.',
          vraie: false,
          justification: "Faux : la pratique réelle combine souvent plusieurs registres selon la situation.",
        },
        {
          lettre: 'E',
          texte: 'Le modèle interprétatif aide le patient à clarifier ses propres valeurs.',
          vraie: true,
          justification: 'Exact : le médecin aide le patient à clarifier ses propres valeurs pour orienter sa décision, sans l’influencer directement.',
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue7-relation-soin-qcm-02',
      enonce: 'Concernant l’alliance thérapeutique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle repose sur l’accord concernant les objectifs et les moyens du soin.',
          vraie: true,
          justification: 'Exact : ce sont deux des trois dimensions classiques de l’alliance thérapeutique, avec le lien affectif entre soignant et patient.',
        },
        {
          lettre: 'B',
          texte: 'Elle est définitivement acquise dès le premier contact avec le patient.',
          vraie: false,
          justification: "Faux : elle se construit et doit être entretenue dans la durée.",
        },
        {
          lettre: 'C',
          texte: 'Une alliance thérapeutique solide favorise l’adhésion au projet de soin.',
          vraie: true,
          justification: 'Exact : une relation de collaboration et de confiance solide améliore l’adhésion du patient au projet de soin et les résultats cliniques.',
        },
        {
          lettre: 'D',
          texte: 'Elle peut être fragilisée par un défaut d’explication des effets indésirables d’un traitement.',
          vraie: true,
          justification: 'Exact : une mauvaise communication sur ce point peut donner au patient le sentiment de ne pas être écouté, ce qui fragilise l’alliance thérapeutique.',
        },
        {
          lettre: 'E',
          texte: 'Elle ne comporte aucune dimension affective.',
          vraie: false,
          justification: "Faux : le lien affectif entre soignant et patient est l’une de ses trois dimensions classiques.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-relation-soin-qcm-03',
      enonce: 'Concernant l’annonce d’une mauvaise nouvelle, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle doit être précédée d’une évaluation de ce que sait déjà le patient.',
          vraie: true,
          justification: 'Exact : s’enquérir de la compréhension actuelle du patient avant de délivrer l’information est une étape clé du protocole d’annonce.',
        },
        {
          lettre: 'B',
          texte: 'L’usage d’un vocabulaire très technique facilite la compréhension du patient.',
          vraie: false,
          justification: "Faux : c’est au contraire une erreur classique, source d’incompréhension.",
        },
        {
          lettre: 'C',
          texte: 'Accueillir les émotions du patient fait partie de la démarche recommandée.',
          vraie: true,
          justification: 'Exact : laisser au patient le temps de réagir et accompagner ses émotions sans les minimiser est une étape essentielle de l’annonce.',
        },
        {
          lettre: 'D',
          texte: 'Un euphémisme excessif peut rendre l’information incompréhensible.',
          vraie: true,
          justification: 'Exact, c’est un écueil documenté à l’opposé de la brutalité.',
        },
        {
          lettre: 'E',
          texte: 'L’organisation de la suite de la prise en charge n’est pas nécessaire lors de l’annonce.',
          vraie: false,
          justification: "Faux : proposer un plan de suite fait partie des principes recommandés.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-relation-soin-qcm-04',
      enonce: 'Concernant empathie et sympathie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’empathie suppose une distance professionnelle.',
          vraie: true,
          justification: 'Exact : cette distance permet de comprendre les émotions du patient sans en être submergé, à la différence de la sympathie.',
        },
        {
          lettre: 'B',
          texte: 'La sympathie consiste à partager directement les émotions du patient sans distance.',
          vraie: true,
          justification: 'Exact : c’est cette absence de mise à distance qui distingue la sympathie de l’empathie et qui peut altérer le jugement clinique.',
        },
        {
          lettre: 'C',
          texte: 'L’empathie est une faiblesse professionnelle à éviter systématiquement.',
          vraie: false,
          justification: "Faux : c’est au contraire une compétence clinique qui améliore la qualité du soin.",
        },
        {
          lettre: 'D',
          texte: 'La communication non verbale n’a aucune influence sur la qualité perçue de la relation.',
          vraie: false,
          justification: "Faux : elle joue un rôle majeur, parfois autant que le contenu verbal.",
        },
        {
          lettre: 'E',
          texte: 'L’écoute active suppose de reformuler et de laisser des silences.',
          vraie: true,
          justification: 'Exact : reformuler, questionner et laisser des silences favorisent une écoute réelle, plutôt que d’enchaîner rapidement les informations.',
        },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-relation-soin-qcm-05',
      enonce: 'Concernant l’asymétrie de la relation de soin, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est structurellement liée à la nature même de la relation de soin.',
          vraie: true,
          justification: 'Exact : le soignant détient un savoir technique et une position institutionnelle que le patient, en situation de vulnérabilité, ne possède généralement pas.',
        },
        {
          lettre: 'B',
          texte: 'Elle peut être totalement supprimée par une bonne communication.',
          vraie: false,
          justification: "Faux : elle peut être atténuée mais non totalement supprimée.",
        },
        {
          lettre: 'C',
          texte: 'Le modèle délibératif cherche à réduire cette asymétrie.',
          vraie: true,
          justification: 'Exact : en associant le patient à la construction de la décision, ce modèle cherche précisément à réduire l’asymétrie de savoir et de pouvoir.',
        },
        {
          lettre: 'D',
          texte: 'Encourager les questions du patient peut aider à l’atténuer.',
          vraie: true,
          justification: 'Exact : encourager explicitement les questions du patient et valider sa compréhension permet de compenser en partie l’asymétrie de la relation de soin.',
        },
        {
          lettre: 'E',
          texte: 'Cette asymétrie ne concerne que le savoir technique, jamais le pouvoir institutionnel.',
          vraie: false,
          justification: "Faux : elle concerne à la fois le savoir et la position institutionnelle du soignant.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-relation-soin-qcm-06',
      enonce: 'Concernant l’observance thérapeutique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle désigne la concordance entre le comportement du patient et les prescriptions du soignant.',
          vraie: true,
          justification: 'Exact : c’est la définition même de l’observance thérapeutique.',
        },
        {
          lettre: 'B',
          texte: 'Elle ne dépend que de la volonté personnelle du patient.',
          vraie: false,
          justification: "Faux : elle dépend de facteurs liés au patient, au traitement, à la relation de soin et au système de santé.",
        },
        {
          lettre: 'C',
          texte: 'La complexité du schéma thérapeutique peut influencer l’observance.',
          vraie: true,
          justification: 'Exact : la complexité du traitement, ses effets indésirables et son coût perçu sont des déterminants de l’observance liés au traitement lui-même.',
        },
        {
          lettre: 'D',
          texte: 'La qualité de la communication soignant-patient peut influencer l’observance.',
          vraie: true,
          justification: 'Exact : la qualité de la communication, la confiance envers le soignant et la clarté de l’information sont des déterminants majeurs de l’observance.',
        },
        {
          lettre: 'E',
          texte: 'Une mauvaise observance doit systématiquement être interprétée comme un défaut moral du patient.',
          vraie: false,
          justification: "Faux : c’est une simplification erronée fréquente, à éviter.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
