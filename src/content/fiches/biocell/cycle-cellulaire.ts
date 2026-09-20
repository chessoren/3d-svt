import type { Fiche } from '../../types';

export const ficheCycleCellulaire: Fiche = {
  id: 'biocell-cycle-cellulaire',
  ue: 'biocell',
  titre: 'Le cycle cellulaire et la mitose',
  sousTitre: 'Phases G1, S, G2, M, cyclines et CDK, points de contrôle, étapes de la mitose, cytodièse et p53',
  chapitre: 'Dynamique cellulaire',
  ordre: 10,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'cycle cellulaire',
    'cycline',
    'CDK',
    'point de contrôle',
    'mitose',
    'cytodièse',
    'p53',
    'cancérogenèse',
  ],
  objectifs: [
    'Décrire les phases successives du cycle cellulaire et leurs caractéristiques.',
    'Expliquer le principe de régulation du cycle par les complexes cyclines-CDK.',
    'Décrire les principaux points de contrôle du cycle cellulaire et leur rôle.',
    'Décrire les étapes successives de la mitose et le mécanisme de la cytodièse.',
    'Expliquer le rôle de la protéine p53 dans la surveillance du cycle et son implication en cancérogenèse.',
  ],
  sections: [
    {
      id: 'phases-cycle',
      titre: 'Les phases du cycle cellulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cycle cellulaire est la succession ordonnée d’évènements qui conduit une cellule à dupliquer son contenu puis à se diviser en deux cellules filles. Il se décompose en interphase, phase de croissance et de préparation, et phase M, phase de division proprement dite.",
        },
        {
          type: 'tableau',
          titre: 'Les phases du cycle cellulaire',
          colonnes: ['Phase', 'Nom', 'Évènement principal'],
          lignes: [
            ['G1', 'Gap 1 (intervalle 1)', 'Croissance cellulaire, synthèse d’ARN et de protéines, préparation à la réplication'],
            ['S', 'Synthèse', 'Réplication complète de l’ADN'],
            ['G2', 'Gap 2 (intervalle 2)', 'Croissance cellulaire, vérification de la fidélité de la réplication, préparation à la mitose'],
            ['M', 'Mitose', 'Division du noyau (mitose) puis du cytoplasme (cytodièse)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'La phase G0',
          texte:
            "Certaines cellules quittent le cycle de division active pour entrer dans un état de quiescence appelé phase G0, réversible pour de nombreux types cellulaires, ou définitif pour des cellules hautement différenciées comme les neurones matures.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Durées relatives des phases',
          texte:
            "Dans une cellule humaine en culture à division rapide, l’interphase occupe la majeure partie du cycle (souvent plus de 90 % de la durée totale), la phase M ne représentant qu’une fraction relativement brève du cycle complet.",
        },
      ],
    },
    {
      id: 'cyclines-cdk',
      titre: 'Les cyclines et les CDK',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La progression à travers le cycle cellulaire est régulée par des kinases dépendantes des cyclines (CDK), des enzymes actives uniquement lorsqu’elles sont associées à une protéine régulatrice, la cycline, dont la concentration varie de façon périodique au cours du cycle.",
        },
        {
          type: 'definition',
          terme: 'Complexe cycline-CDK',
          definition:
            "Association d’une CDK (activité enzymatique constante) et d’une cycline (concentration variable au cours du cycle), dont la formation active la CDK et lui confère sa spécificité de substrat, permettant la phosphorylation de protéines cibles qui font progresser le cycle.",
        },
        {
          type: 'tableau',
          titre: 'Principaux complexes cycline-CDK et leur rôle',
          colonnes: ['Complexe', 'Transition régulée'],
          lignes: [
            ['Cycline D - CDK4/6', 'Progression en phase G1, sous l’influence de facteurs de croissance'],
            ['Cycline E - CDK2', 'Transition G1/S'],
            ['Cycline A - CDK2', 'Progression en phase S'],
            ['Cycline B - CDK1', 'Transition G2/M (entrée en mitose)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La dégradation des cyclines, un mécanisme irréversible',
          texte:
            "La chute de l’activité d’un complexe cycline-CDK résulte en général de la dégradation de la cycline par le protéasome, via son ubiquitination par un complexe spécifique (comme le complexe promoteur de l’anaphase, APC/C). Cette dégradation, irréversible, assure le caractère unidirectionnel de la progression du cycle.",
        },
      ],
    },
    {
      id: 'points-controle',
      titre: 'Les points de contrôle du cycle cellulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les points de contrôle (checkpoints) sont des mécanismes de surveillance qui vérifient, à des étapes clés du cycle, que les conditions sont réunies pour poursuivre, retardant ou arrêtant le cycle en cas d’anomalie détectée.",
        },
        {
          type: 'tableau',
          titre: 'Les principaux points de contrôle',
          colonnes: ['Point de contrôle', 'Localisation', 'Ce qui est vérifié'],
          lignes: [
            ['Point de restriction / G1', 'Fin de G1', 'Conditions favorables à la division, intégrité de l’ADN'],
            ['Point de contrôle G2/M', 'Fin de G2', 'Réplication complète et fidèle de l’ADN avant l’entrée en mitose'],
            ['Point de contrôle du fuseau mitotique', 'Métaphase', 'Attachement correct de tous les chromosomes au fuseau mitotique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le point de contrôle du fuseau, garant de la ségrégation',
          texte:
            "Le point de contrôle du fuseau mitotique bloque la transition métaphase-anaphase tant que tous les kinétochores ne sont pas correctement attachés aux microtubules du fuseau, ce qui prévient une ségrégation inégale des chromosomes et l’apparition d’une aneuploïdie.",
        },
      ],
    },
    {
      id: 'etapes-mitose',
      titre: 'Les étapes de la mitose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La mitose assure la répartition égale du matériel génétique répliqué entre deux cellules filles génétiquement identiques. Elle se décompose classiquement en quatre à cinq phases successives.",
        },
        {
          type: 'etapes',
          titre: 'Les phases de la mitose',
          etapes: [
            {
              titre: 'Prophase',
              detail: "Condensation progressive de la chromatine en chromosomes individualisés, chacun formé de deux chromatides sœurs ; début de la formation du fuseau mitotique à partir des centrosomes dédoublés.",
            },
            {
              titre: 'Prométaphase',
              detail: "Fragmentation de l’enveloppe nucléaire ; les microtubules du fuseau s’attachent aux kinétochores des chromosomes.",
            },
            {
              titre: 'Métaphase',
              detail: "Alignement des chromosomes sur la plaque équatoriale, à mi-distance des deux pôles du fuseau mitotique.",
            },
            {
              titre: 'Anaphase',
              detail: "Séparation synchrone des chromatides sœurs, qui migrent vers les pôles opposés, sous l’action du raccourcissement des microtubules kinétochoriens et de l’écartement des pôles.",
            },
            {
              titre: 'Télophase',
              detail: "Décondensation de la chromatine, reformation de l’enveloppe nucléaire autour de chaque lot de chromosomes et réapparition du nucléole.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'La cytodièse',
          texte:
            "La cytodièse, ou cytocinèse, divise le cytoplasme en deux cellules filles, en général initiée dès l’anaphase et achevée après la télophase. Elle repose sur la contraction d’un anneau d’actine et de myosine II, qui forme un sillon de division progressivement resserré jusqu’à la séparation complète des deux cellules.",
        },
      ],
    },
    {
      id: 'p53-cancerogenese',
      titre: 'La protéine p53 et la cancérogenèse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La protéine p53 est un facteur de transcription central dans la surveillance de l’intégrité du génome, activé en réponse à des dommages de l’ADN ou à d’autres stress cellulaires, et fréquemment décrite comme le « gardien du génome ».",
        },
        {
          type: 'liste',
          items: [
            "En cas de dommage de l’ADN, p53 est stabilisée et active la transcription de gènes impliqués dans l’arrêt du cycle cellulaire, notamment un inhibiteur de complexes cycline-CDK, laissant le temps à la cellule de réparer l’ADN endommagé.",
            "Si les dommages sont trop importants pour être réparés, p53 peut orienter la cellule vers l’apoptose, une mort cellulaire programmée qui élimine la cellule potentiellement dangereuse.",
            "Le gène TP53, qui code p53, est un gène suppresseur de tumeur : sa perte de fonction, par mutation ou délétion, est l’une des altérations les plus fréquemment retrouvées dans les cancers humains.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Syndrome de Li-Fraumeni',
          texte:
            "Le syndrome de Li-Fraumeni est une prédisposition héréditaire aux cancers, transmise sur un mode autosomique dominant, due à une mutation germinale constitutionnelle du gène TP53. Les personnes atteintes développent un risque très élevé de cancers multiples et précoces, touchant des organes variés.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'p53 n’agit pas seule',
          texte:
            "L’activation de p53 fait intervenir en amont des protéines de détection des dommages de l’ADN, comme les kinases ATM et ATR, qui phosphorylent et stabilisent p53 en réponse à des cassures de l’ADN ou à un stress réplicatif.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le cycle cellulaire comprend l’interphase (G1, S, G2) et la phase M (mitose et cytodièse).",
    "La progression du cycle est régulée par des complexes cyclines-CDK, dont la formation et la dégradation périodiques déterminent l’activité kinase.",
    "Les principaux points de contrôle sont situés en fin de G1, en fin de G2 et lors de la métaphase (point de contrôle du fuseau).",
    "La mitose se décompose en prophase, prométaphase, métaphase, anaphase et télophase.",
    "La cytodièse repose sur la contraction d’un anneau contractile d’actine et de myosine II.",
    "La protéine p53, gardienne du génome, arrête le cycle cellulaire ou déclenche l’apoptose en réponse à des dommages de l’ADN.",
    "Le gène TP53 est un gène suppresseur de tumeur fréquemment altéré dans les cancers humains.",
  ],
  erreursFrequentes: [
    "Croire que la réplication de l’ADN a lieu en phase G2 : elle se déroule en phase S, la phase G2 étant une phase de vérification et de préparation.",
    "Penser que la concentration des CDK varie au cours du cycle : c’est la concentration des cyclines qui varie, l’activité enzymatique de la CDK dépendant de cette association.",
    "Oublier le rôle du point de contrôle du fuseau mitotique, qui empêche l’anaphase tant que tous les kinétochores ne sont pas correctement attachés.",
    "Confondre mitose et cytodièse : la mitose divise le noyau, la cytodièse divise le cytoplasme.",
    "Considérer p53 comme un oncogène : c’est au contraire un gène suppresseur de tumeur, dont la perte de fonction favorise la cancérogenèse.",
    "Oublier que la dégradation des cyclines par le protéasome est un mécanisme irréversible garantissant le sens unique de la progression du cycle.",
  ],
  mnemotechniques: [
    {
      moyen: '« G1, S, G2, M : Grandir, Synthétiser, Grandir encore, se Multiplier »',
      explication: 'Pour retenir l’ordre et le sens général des quatre phases du cycle cellulaire.',
    },
    {
      moyen: '« PPMAT » pour les phases de la mitose',
      explication: 'Prophase, Prométaphase, Métaphase, Anaphase, Télophase : l’ordre chronologique des cinq phases de la mitose.',
    },
    {
      moyen: '« p53, gardien du génome »',
      explication: 'Cette expression classique rappelle le rôle de surveillance de l’intégrité de l’ADN assuré par p53, en amont de l’arrêt du cycle ou de l’apoptose.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Pollard, Earnshaw, Lippincott-Schwartz, Biologie cellulaire, 3e édition',
    'Lodish, Biologie moléculaire de la cellule',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'biocell-cycle-cellulaire-fc-01',
      recto: 'Quelles sont les quatre phases du cycle cellulaire ?',
      verso: 'G1, S, G2 et M.',
      type: 'classification',
      tags: ['cycle cellulaire'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-02',
      recto: 'En quelle phase du cycle a lieu la réplication de l’ADN ?',
      verso: 'En phase S (synthèse).',
      type: 'chiffre',
      tags: ['phase S'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-03',
      recto: 'Qu’est-ce que la phase G0 ?',
      verso: 'Un état de quiescence, hors du cycle de division active, réversible ou définitif selon le type cellulaire.',
      type: 'definition',
      tags: ['phase G0'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-04',
      recto: 'Qu’est-ce qui varie au cours du cycle dans un complexe cycline-CDK : la CDK ou la cycline ?',
      verso: 'La concentration de la cycline varie périodiquement ; l’activité de la CDK dépend de cette association.',
      type: 'mecanisme',
      tags: ['cycline', 'CDK'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-05',
      recto: 'Quel complexe cycline-CDK régule la transition G2/M ?',
      verso: 'Le complexe cycline B - CDK1.',
      type: 'mecanisme',
      tags: ['cycline B', 'CDK1'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-06',
      recto: 'Que vérifie le point de contrôle du fuseau mitotique ?',
      verso: 'Que tous les chromosomes sont correctement attachés au fuseau mitotique par leur kinétochore avant l’entrée en anaphase.',
      type: 'mecanisme',
      tags: ['point de contrôle', 'fuseau mitotique'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-07',
      recto: 'Que se passe-t-il en anaphase de la mitose ?',
      verso: 'La séparation synchrone des chromatides sœurs, qui migrent vers les pôles opposés du fuseau.',
      type: 'mecanisme',
      tags: ['anaphase'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-08',
      recto: 'Sur quoi repose la cytodièse ?',
      verso: 'La contraction d’un anneau d’actine et de myosine II, formant un sillon de division.',
      type: 'mecanisme',
      tags: ['cytodièse'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-09',
      recto: 'Quel surnom est souvent donné à la protéine p53 ?',
      verso: 'Le gardien du génome.',
      type: 'definition',
      tags: ['p53'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-10',
      recto: 'Quelles sont les deux issues possibles de l’activation de p53 après un dommage de l’ADN ?',
      verso: 'L’arrêt du cycle cellulaire pour permettre la réparation, ou l’apoptose si les dommages sont trop importants.',
      type: 'mecanisme',
      tags: ['p53'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-11',
      recto: 'Quel type de gène est TP53 ?',
      verso: 'Un gène suppresseur de tumeur.',
      type: 'classification',
      tags: ['TP53', 'cancérogenèse'],
    },
    {
      id: 'biocell-cycle-cellulaire-fc-12',
      recto: 'Quel syndrome héréditaire résulte d’une mutation germinale du gène TP53 ?',
      verso: 'Le syndrome de Li-Fraumeni.',
      type: 'clinique',
      tags: ['Li-Fraumeni'],
    },
  ],
  qcm: [
    {
      id: 'biocell-cycle-cellulaire-qcm-01',
      enonce: 'Concernant les phases du cycle cellulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phase S correspond à la réplication de l’ADN.', vraie: true, justification: 'C’est la définition même de la phase S (synthèse).' },
        { lettre: 'B', texte: 'La phase G2 précède directement la phase S.', vraie: false, justification: 'C’est l’inverse : la phase G2 suit la phase S et précède la phase M.' },
        { lettre: 'C', texte: 'La phase G0 est un état de quiescence hors du cycle actif.', vraie: true, justification: 'Les cellules en G0 ne progressent pas activement dans le cycle de division.' },
        { lettre: 'D', texte: 'La phase M correspond uniquement à la mitose, sans division du cytoplasme.', vraie: false, justification: 'La phase M inclut la mitose (division du noyau) et la cytodièse (division du cytoplasme).' },
        { lettre: 'E', texte: 'L’interphase regroupe les phases G1, S et G2.', vraie: true, justification: 'C’est la définition de l’interphase, par opposition à la phase M.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir l’ordre correct : G1, S, G2, puis M.',
      difficulte: 1,
    },
    {
      id: 'biocell-cycle-cellulaire-qcm-02',
      enonce: 'Concernant les cyclines et les CDK, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La concentration des CDK varie de façon périodique au cours du cycle.', vraie: false, justification: 'C’est la concentration des cyclines qui varie ; les CDK sont présentes de façon relativement constante.' },
        { lettre: 'B', texte: 'Le complexe cycline B - CDK1 régule la transition G2/M.', vraie: true, justification: 'C’est le complexe qui déclenche l’entrée en mitose.' },
        { lettre: 'C', texte: 'La dégradation des cyclines par le protéasome est un mécanisme réversible.', vraie: false, justification: 'C’est un mécanisme irréversible, ce qui garantit le sens unique de la progression du cycle.' },
        { lettre: 'D', texte: 'Une CDK seule, sans cycline associée, est en général inactive.', vraie: true, justification: 'C’est l’association à la cycline qui active la CDK et lui confère sa spécificité.' },
        { lettre: 'E', texte: 'Le complexe cycline E - CDK2 intervient dans la transition G1/S.', vraie: true, justification: 'C’est le complexe caractéristique de cette transition du cycle.' },
      ],
      correction: 'Réponses exactes : B, D et E. La cycline, non la CDK, varie en concentration au cours du cycle.',
      difficulte: 2,
    },
    {
      id: 'biocell-cycle-cellulaire-qcm-03',
      enonce: 'Concernant les points de contrôle du cycle cellulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le point de contrôle G2/M vérifie la fidélité de la réplication de l’ADN avant l’entrée en mitose.', vraie: true, justification: 'Il retarde l’entrée en mitose en cas de réplication incomplète ou d’ADN endommagé.' },
        { lettre: 'B', texte: 'Le point de contrôle du fuseau agit en anaphase.', vraie: false, justification: 'Il agit en métaphase, avant l’entrée en anaphase, et bloque cette transition tant que les kinétochores ne sont pas correctement attachés.' },
        { lettre: 'C', texte: 'Un défaut d’attachement des kinétochores peut être détecté par le point de contrôle du fuseau.', vraie: true, justification: 'C’est précisément la fonction de surveillance de ce point de contrôle.' },
        { lettre: 'D', texte: 'Les points de contrôle empêchent toute progression du cycle en cas d’anomalie détectée.', vraie: true, justification: 'Ils retardent ou arrêtent le cycle jusqu’à correction de l’anomalie.' },
        { lettre: 'E', texte: 'Le point de contrôle du fuseau prévient l’aneuploïdie.', vraie: true, justification: 'En bloquant l’anaphase en cas de mauvais attachement, il prévient une ségrégation inégale des chromosomes.' },
      ],
      correction: 'Réponses exactes : A, C, D et E. Le point de contrôle du fuseau agit avant l’anaphase, en métaphase.',
      difficulte: 2,
    },
    {
      id: 'biocell-cycle-cellulaire-qcm-04',
      enonce: 'Concernant les étapes de la mitose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La condensation de la chromatine a lieu en prophase.', vraie: true, justification: 'C’est le premier évènement caractéristique de l’entrée en mitose.' },
        { lettre: 'B', texte: 'L’enveloppe nucléaire se fragmente en métaphase.', vraie: false, justification: 'Elle se fragmente dès la prométaphase, avant l’alignement métaphasique des chromosomes.' },
        { lettre: 'C', texte: 'Les chromosomes s’alignent sur la plaque équatoriale en métaphase.', vraie: true, justification: 'C’est la caractéristique définissant la métaphase.' },
        { lettre: 'D', texte: 'La séparation des chromatides sœurs a lieu en anaphase.', vraie: true, justification: 'C’est l’évènement central de l’anaphase.' },
        { lettre: 'E', texte: 'Le nucléole réapparaît en prophase.', vraie: false, justification: 'Le nucléole disparaît en prophase et réapparaît en télophase, autour des organisateurs nucléolaires.' },
      ],
      correction: 'Réponses exactes : A, C et D. Bien retenir la chronologie précise des évènements de chaque phase.',
      difficulte: 2,
    },
    {
      id: 'biocell-cycle-cellulaire-qcm-05',
      enonce: 'Concernant la cytodièse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle divise le noyau cellulaire.', vraie: false, justification: 'C’est la mitose qui divise le noyau ; la cytodièse divise le cytoplasme.' },
        { lettre: 'B', texte: 'Elle repose sur un anneau contractile d’actine et de myosine.', vraie: true, justification: 'La contraction de cet anneau forme le sillon de division jusqu’à la séparation complète.' },
        { lettre: 'C', texte: 'Elle débute en général dès l’anaphase.', vraie: true, justification: 'Le sillon de division s’initie souvent avant la fin complète de la mitose.' },
        { lettre: 'D', texte: 'Elle fait intervenir la myosine II.', vraie: true, justification: 'La myosine II génère la force contractile de l’anneau lors de la cytodièse.' },
        { lettre: 'E', texte: 'Elle précède toujours la mitose dans le déroulement du cycle.', vraie: false, justification: 'C’est l’inverse : la cytodièse suit (ou accompagne la fin de) la mitose.' },
      ],
      correction: 'Réponses exactes : B, C et D. La cytodièse divise le cytoplasme, non le noyau.',
      difficulte: 2,
    },
    {
      id: 'biocell-cycle-cellulaire-qcm-06',
      enonce: 'Concernant la protéine p53 et la cancérogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'p53 est un gène suppresseur de tumeur.', vraie: true, justification: 'Sa perte de fonction favorise la survenue de cancers, caractéristique des gènes suppresseurs de tumeur.' },
        { lettre: 'B', texte: 'p53 peut déclencher l’apoptose en cas de dommages sévères de l’ADN.', vraie: true, justification: 'C’est l’une des deux issues possibles de son activation, avec l’arrêt du cycle.' },
        { lettre: 'C', texte: 'Le syndrome de Li-Fraumeni résulte d’une mutation somatique acquise de TP53.', vraie: false, justification: 'Il résulte d’une mutation germinale, constitutionnelle, transmise sur un mode autosomique dominant.' },
        { lettre: 'D', texte: 'Les kinases ATM et ATR interviennent en amont de l’activation de p53.', vraie: true, justification: 'Elles détectent les dommages de l’ADN et phosphorylent p53 pour la stabiliser.' },
        { lettre: 'E', texte: 'Des mutations de TP53 sont retrouvées dans une proportion importante de cancers humains.', vraie: true, justification: 'TP53 est l’un des gènes les plus fréquemment altérés dans les cancers humains.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Le syndrome de Li-Fraumeni est dû à une mutation germinale, et non somatique.',
      difficulte: 2,
    },
  ],
};
