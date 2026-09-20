import type { Fiche } from '../../types';

export const ficheHemoglobine: Fiche = {
  id: 'bioch-hemoglobine',
  ue: 'bioch',
  titre: 'Hémoglobine et myoglobine',
  sousTitre: 'Structure, courbe de dissociation de l’oxygène, effet Bohr et allostérie',
  chapitre: 'Biochimie structurale',
  ordre: 6,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'hémoglobine',
    'myoglobine',
    'hème',
    'courbe de dissociation',
    'effet Bohr',
    '2,3-BPG',
    'allostérie',
    'coopérativité',
    'hémoglobinopathie',
  ],
  objectifs: [
    'Décrire la structure de l’hème et son mode de fixation du dioxygène.',
    'Comparer les structures de la myoglobine et de l’hémoglobine.',
    'Interpréter la courbe de dissociation de l’oxyhémoglobine et sa coopérativité.',
    'Expliquer l’effet Bohr et le rôle du 2,3-bisphosphoglycérate.',
    'Décrire la transition allostérique entre états T et R de l’hémoglobine.',
    'Citer les principales hémoglobinopathies et leur mécanisme moléculaire.',
  ],
  sections: [
    {
      id: 'heme-et-globines',
      titre: 'L’hème et les globines',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’hème est un groupement prosthétique formé d’un noyau tétrapyrrolique, la protoporphyrine IX, chélatant en son centre un atome de fer à l’état ferreux (Fe2+). Ce fer établit quatre liaisons de coordination avec les azotes des noyaux pyrroliques, une cinquième avec un résidu histidine de la globine (histidine proximale), et peut établir une sixième liaison réversible avec une molécule de dioxygène.",
        },
        {
          type: 'definition',
          terme: 'Globine',
          definition:
            "Chaîne polypeptidique associée à un hème, dont le repliement est presque exclusivement constitué d’hélices alpha ; elle forme une poche hydrophobe qui protège le fer de l’oxydation irréversible en fer ferrique (Fe3+).",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Oxygénation, et non oxydation',
          texte:
            "La fixation réversible du dioxygène sur le fer ferreux de l’hème est une oxygénation, sans changement de l’état d’oxydation du fer. Si le fer est oxydé en fer ferrique (Fe3+), l’hémoglobine devient de la méthémoglobine, incapable de fixer l’oxygène de façon réversible.",
        },
        {
          type: 'liste',
          items: [
            'La myoglobine est une protéine monomérique, présente dans le muscle, qui stocke l’oxygène et le libère lors de l’effort.',
            'L’hémoglobine adulte (HbA) est un tétramère alpha2 bêta2, présent dans les globules rouges, dédié au transport sanguin du dioxygène.',
          ],
        },
      ],
    },
    {
      id: 'courbe-dissociation',
      titre: 'La courbe de dissociation de l’oxygène',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La courbe de dissociation représente le pourcentage de saturation en oxygène de la protéine en fonction de la pression partielle en dioxygène (pO2). Myoglobine et hémoglobine présentent des courbes de forme très différente, reflet de leur organisation structurale et de leur fonction physiologique respective.",
        },
        {
          type: 'comparaison',
          titre: 'Myoglobine et hémoglobine',
          gauche: {
            titre: 'Myoglobine',
            points: [
              'Courbe hyperbolique',
              'Affinité constante pour l’oxygène, indépendante de la saturation déjà atteinte',
              'Forte affinité, adaptée à un stockage tissulaire de l’oxygène',
              'Absence de coopérativité : une seule sous-unité, un seul site de fixation',
            ],
          },
          droite: {
            titre: 'Hémoglobine',
            points: [
              'Courbe sigmoïde',
              'Affinité croissante à mesure que les sous-unités se lient à l’oxygène',
              'Affinité modulable, adaptée au transport et à la libération tissulaire',
              'Coopérativité positive entre les quatre sous-unités',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Pourquoi une courbe sigmoïde ?',
          texte:
            "La forme sigmoïde traduit la coopérativité positive : la fixation d’une première molécule de dioxygène sur une sous-unité facilite la fixation des molécules suivantes sur les autres sous-unités du tétramère, en stabilisant l’état relâché de plus haute affinité.",
        },
        {
          type: 'formule',
          expression: 'P50',
          legende:
            "Pression partielle en dioxygène pour laquelle l’hémoglobine est saturée à 50 %. Elle mesure l’affinité globale de l’hémoglobine pour l’oxygène : plus le P50 est élevé, plus l’affinité est faible.",
        },
      ],
    },
    {
      id: 'effet-bohr-2-3-bpg',
      titre: 'L’effet Bohr et le 2,3-bisphosphoglycérate',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’affinité de l’hémoglobine pour l’oxygène n’est pas fixe : elle est modulée par plusieurs effecteurs allostériques, dont le pH, la pression partielle en dioxyde de carbone et la concentration en 2,3-bisphosphoglycérate (2,3-BPG).",
        },
        {
          type: 'definition',
          terme: 'Effet Bohr',
          definition:
            "Diminution de l’affinité de l’hémoglobine pour l’oxygène lorsque le pH diminue (ou que la pCO2 augmente), et inversement. Il déplace la courbe de dissociation vers la droite en milieu acide.",
        },
        {
          type: 'tableau',
          titre: 'Mécanisme de l’effet Bohr',
          colonnes: ['Site', 'Événement', 'Conséquence'],
          lignes: [
            ['Tissus périphériques actifs', 'Production de CO2 et de protons par le métabolisme cellulaire', 'Baisse locale du pH, libération accrue d’O2 par l’hémoglobine'],
            ['Poumons', 'Élimination du CO2 par la ventilation, élévation du pH', 'Augmentation de l’affinité de l’hémoglobine pour l’O2, facilitant sa fixation'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Le 2,3-BPG, synthétisé par les globules rouges à partir d’un intermédiaire de la glycolyse, se fixe dans la cavité centrale du tétramère désoxygéné, entre les deux chaînes bêta, en formant des liaisons ioniques avec des résidus chargés positivement. Cette fixation stabilise l’état T (tendu, de faible affinité) et abaisse ainsi l’affinité globale de l’hémoglobine pour l’oxygène.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Adaptation à l’altitude',
          texte:
            "La concentration érythrocytaire en 2,3-BPG augmente en situation d’hypoxie chronique, notamment en altitude, ce qui facilite la libération tissulaire d’oxygène malgré une pression partielle atmosphérique plus faible.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le sens du déplacement',
          texte:
            "Une baisse du pH, une hausse de la pCO2, une hausse de la température ou une hausse du 2,3-BPG déplacent tous la courbe de dissociation vers la droite : ils diminuent l’affinité de l’hémoglobine et favorisent la libération tissulaire d’oxygène, là où le besoin métabolique est le plus grand.",
        },
      ],
    },
    {
      id: 'allosterie-etats-t-r',
      titre: 'Allostérie : états T et R',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’hémoglobine existe en deux conformations quaternaires principales : l’état T (tendu), de faible affinité pour l’oxygène, stabilisé notamment par des ponts salins entre sous-unités et par le 2,3-BPG ; et l’état R (relâché), de forte affinité, adopté progressivement au fur et à mesure de la fixation de l’oxygène.",
        },
        {
          type: 'definition',
          terme: 'Protéine allostérique',
          definition:
            "Protéine dont l’activité (ici, l’affinité pour un ligand) est modulée par la fixation d’un effecteur sur un site distinct du site actif, entraînant un changement de conformation transmis à l’ensemble de la molécule.",
        },
        {
          type: 'liste',
          items: [
            'Le passage de l’état T à l’état R s’accompagne d’une réorganisation des interactions entre sous-unités alpha et bêta.',
            'Le monoxyde de carbone (CO) se fixe sur le même site que l’oxygène, avec une affinité très supérieure, ce qui explique la toxicité de l’intoxication oxycarbonée.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Une affinité bien supérieure',
          texte:
            "L’affinité de l’hémoglobine pour le monoxyde de carbone est environ 200 fois supérieure à celle pour le dioxygène, ce qui permet au CO de déplacer l’oxygène fixé même à de faibles concentrations atmosphériques.",
        },
      ],
    },
    {
      id: 'hemoglobinopathies',
      titre: 'Hémoglobinopathies',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les hémoglobinopathies regroupent les affections héréditaires touchant la structure (hémoglobinoses) ou la quantité (thalassémies) des chaînes de globine.",
        },
        {
          type: 'tableau',
          titre: 'Principales hémoglobinopathies',
          colonnes: ['Pathologie', 'Mécanisme', 'Conséquence'],
          lignes: [
            ['Drépanocytose (HbS)', 'Substitution Glu6Val sur la chaîne bêta', 'Polymérisation de l’hémoglobine désoxygénée, falciformation des hématies'],
            ['Bêta-thalassémie', 'Réduction ou absence de synthèse des chaînes bêta', 'Excès relatif de chaînes alpha, anémie hémolytique'],
            ['Alpha-thalassémie', 'Réduction ou absence de synthèse des chaînes alpha', 'Excès relatif de chaînes bêta ou gamma, anémie de sévérité variable'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Drépanocytose et polymérisation',
          texte:
            "Dans la drépanocytose, la valine hydrophobe introduite en position 6 de la chaîne bêta s’insère dans une poche hydrophobe complémentaire d’une molécule d’hémoglobine désoxygénée voisine, initiant la polymérisation de l’HbS en fibres rigides qui déforment l’hématie en faucille, notamment en situation d’hypoxie.",
        },
      ],
    },
  ],
  pointsCles: [
    'L’hème chélate un fer ferreux (Fe2+) qui fixe l’oxygène de façon réversible, sans changer d’état d’oxydation.',
    'La myoglobine, monomérique, a une courbe de dissociation hyperbolique ; l’hémoglobine, tétramérique, a une courbe sigmoïde.',
    'La forme sigmoïde de la courbe de l’hémoglobine traduit sa coopérativité positive entre sous-unités.',
    'L’effet Bohr diminue l’affinité de l’hémoglobine pour l’oxygène quand le pH baisse, favorisant la libération d’oxygène dans les tissus actifs.',
    'Le 2,3-BPG se fixe dans la cavité centrale du tétramère désoxygéné et stabilise l’état T de faible affinité.',
    'L’hémoglobine oscille entre un état T (tendu, faible affinité) et un état R (relâché, forte affinité).',
    'La drépanocytose résulte de la substitution Glu6Val sur la chaîne bêta, entraînant la polymérisation de l’HbS désoxygénée.',
  ],
  erreursFrequentes: [
    'Confondre oxygénation (fixation réversible d’O2 sur le fer ferreux) et oxydation (passage en fer ferrique, formant la méthémoglobine).',
    'Attribuer une courbe sigmoïde à la myoglobine : sa courbe est hyperbolique, faute de coopérativité entre sous-unités.',
    'Inverser le sens du déplacement de la courbe lors de l’effet Bohr : une baisse du pH déplace la courbe vers la droite (affinité diminuée), pas vers la gauche.',
    'Oublier que le 2,3-BPG se fixe préférentiellement sur la forme désoxygénée (état T), et non sur la forme oxygénée.',
    'Confondre thalassémie (défaut quantitatif de synthèse d’une chaîne) et hémoglobinose (anomalie qualitative de structure, comme l’HbS).',
  ],
  mnemotechniques: [
    {
      moyen: '« Bohr vers la droite quand ça tourne mal »',
      explication:
        'En cas d’acidose ou d’hypercapnie tissulaire (« ça tourne mal » sur le plan métabolique), la courbe se déplace vers la droite : l’hémoglobine relâche plus facilement son oxygène.',
    },
    {
      moyen: '« T comme Tendu, Triste affinité »',
      explication:
        'L’état T (tendu) de l’hémoglobine est celui de plus faible affinité pour l’oxygène, stabilisé par le 2,3-BPG et les ponts salins.',
    },
    {
      moyen: '« Glu-6-Val, la valine s’invite »',
      explication:
        'Retenir la mutation de la drépanocytose : remplacement de l’acide glutamique en position 6 par une valine sur la chaîne bêta.',
    },
  ],
  sources: [
    'Lehninger, Principes de biochimie, 8e édition',
    'Harper, Biochimie médicale, 32e édition',
    'Berg, Tymoczko, Gatto, Stryer, Biochimie, 9e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'bioch-hemoglobine-fc-01',
      recto: 'Quel est l’état d’oxydation du fer de l’hème qui fixe l’oxygène de façon réversible ?',
      verso: 'Le fer ferreux, Fe2+.',
      type: 'chiffre',
      tags: ['hème'],
    },
    {
      id: 'bioch-hemoglobine-fc-02',
      recto: 'Qu’est-ce que la méthémoglobine ?',
      verso: 'Une hémoglobine dont le fer est oxydé en fer ferrique (Fe3+), incapable de fixer l’oxygène de façon réversible.',
      type: 'definition',
      tags: ['hème', 'méthémoglobine'],
    },
    {
      id: 'bioch-hemoglobine-fc-03',
      recto: 'Quelle est la forme de la courbe de dissociation de la myoglobine ?',
      verso: 'Hyperbolique, car il n’y a pas de coopérativité entre sous-unités (protéine monomérique).',
      type: 'definition',
      tags: ['myoglobine'],
    },
    {
      id: 'bioch-hemoglobine-fc-04',
      recto: 'Pourquoi la courbe de dissociation de l’hémoglobine est-elle sigmoïde ?',
      verso: 'En raison de la coopérativité positive entre les quatre sous-unités du tétramère.',
      type: 'mecanisme',
      tags: ['hémoglobine', 'coopérativité'],
    },
    {
      id: 'bioch-hemoglobine-fc-05',
      recto: 'Définir l’effet Bohr.',
      verso: 'La diminution de l’affinité de l’hémoglobine pour l’oxygène quand le pH baisse (ou que la pCO2 augmente).',
      type: 'definition',
      tags: ['effet Bohr'],
    },
    {
      id: 'bioch-hemoglobine-fc-06',
      recto: 'Où se fixe le 2,3-BPG sur le tétramère d’hémoglobine ?',
      verso: 'Dans la cavité centrale, entre les deux chaînes bêta de la forme désoxygénée (état T).',
      type: 'mecanisme',
      tags: ['2,3-BPG'],
    },
    {
      id: 'bioch-hemoglobine-fc-07',
      recto: 'Quel effet a une augmentation du 2,3-BPG sur l’affinité de l’hémoglobine ?',
      verso: 'Elle la diminue, en stabilisant l’état T de faible affinité, et facilite ainsi la libération tissulaire d’oxygène.',
      type: 'mecanisme',
      tags: ['2,3-BPG'],
    },
    {
      id: 'bioch-hemoglobine-fc-08',
      recto: 'Que signifie P50 ?',
      verso: 'La pression partielle en dioxygène pour laquelle l’hémoglobine est saturée à 50 %, indicateur de son affinité globale.',
      type: 'definition',
      tags: ['courbe de dissociation'],
    },
    {
      id: 'bioch-hemoglobine-fc-09',
      recto: 'Quelle est la mutation moléculaire responsable de la drépanocytose ?',
      verso: 'La substitution de l’acide glutamique par une valine en position 6 de la chaîne bêta de l’hémoglobine.',
      type: 'clinique',
      tags: ['drépanocytose'],
    },
    {
      id: 'bioch-hemoglobine-fc-10',
      recto: 'Quelle est la différence entre une thalassémie et une hémoglobinose comme la drépanocytose ?',
      verso: 'La thalassémie est un défaut quantitatif de synthèse d’une chaîne de globine ; la drépanocytose est une anomalie qualitative de structure.',
      type: 'classification',
      tags: ['hémoglobinopathies'],
    },
    {
      id: 'bioch-hemoglobine-fc-11',
      recto: 'Pourquoi le monoxyde de carbone est-il toxique pour le transport de l’oxygène ?',
      verso: 'Il se fixe sur le même site que l’oxygène avec une affinité environ 200 fois supérieure, déplaçant l’oxygène fixé.',
      type: 'clinique',
      tags: ['monoxyde de carbone'],
    },
    {
      id: 'bioch-hemoglobine-fc-12',
      recto: 'Quels facteurs déplacent la courbe de dissociation de l’hémoglobine vers la droite ?',
      verso: 'Une baisse du pH, une hausse de la pCO2, une hausse de la température et une hausse du 2,3-BPG.',
      type: 'mecanisme',
      tags: ['effet Bohr'],
    },
  ],
  qcm: [
    {
      id: 'bioch-hemoglobine-qcm-01',
      enonce: 'Concernant l’hème et les globines, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le fer de l’hème est à l’état ferreux dans l’hémoglobine fonctionnelle.', vraie: true, justification: 'Seul le fer ferreux (Fe2+) fixe réversiblement le dioxygène.' },
        { lettre: 'B', texte: 'La fixation du dioxygène sur l’hème est une oxydation du fer.', vraie: false, justification: 'C’est une oxygénation, sans changement de l’état d’oxydation du fer.' },
        { lettre: 'C', texte: 'La globine est presque exclusivement composée d’hélices alpha.', vraie: true, justification: 'C’est une caractéristique structurale classique des globines.' },
        { lettre: 'D', texte: 'L’histidine proximale forme une liaison de coordination avec le fer de l’hème.', vraie: true, justification: 'Elle occupe la cinquième position de coordination du fer.' },
        { lettre: 'E', texte: 'La méthémoglobine fixe l’oxygène avec la même efficacité que l’hémoglobine normale.', vraie: false, justification: 'Le fer ferrique de la méthémoglobine est incapable de fixer l’oxygène de façon réversible.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-hemoglobine-qcm-02',
      enonce: 'Concernant la courbe de dissociation de l’oxygène, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La courbe de la myoglobine est sigmoïde.', vraie: false, justification: 'La courbe de la myoglobine est hyperbolique, faute de coopérativité.' },
        { lettre: 'B', texte: 'La courbe de l’hémoglobine est sigmoïde.', vraie: true, justification: 'Elle traduit la coopérativité positive entre les quatre sous-unités.' },
        { lettre: 'C', texte: 'Le P50 mesure la saturation à 50 % pour une pression donnée en dioxygène.', vraie: true, justification: 'C’est la définition du P50, indicateur d’affinité.' },
        { lettre: 'D', texte: 'Plus le P50 est élevé, plus l’affinité pour l’oxygène est forte.', vraie: false, justification: 'C’est l’inverse : un P50 élevé traduit une affinité plus faible.' },
        { lettre: 'E', texte: 'La coopérativité positive facilite la fixation des molécules d’oxygène successives.', vraie: true, justification: 'La fixation d’une première molécule stabilise l’état de forte affinité pour les suivantes.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-hemoglobine-qcm-03',
      enonce: 'Concernant l’effet Bohr, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une baisse du pH déplace la courbe de dissociation vers la droite.', vraie: true, justification: 'C’est la définition de l’effet Bohr : l’acidose diminue l’affinité de l’hémoglobine.' },
        { lettre: 'B', texte: 'Une augmentation de la pCO2 augmente l’affinité de l’hémoglobine pour l’oxygène.', vraie: false, justification: 'Elle la diminue, par le même mécanisme que la baisse de pH qu’elle induit.' },
        { lettre: 'C', texte: 'Au niveau pulmonaire, le pH plus élevé favorise la fixation d’oxygène.', vraie: true, justification: 'L’augmentation du pH augmente l’affinité de l’hémoglobine pour l’oxygène.' },
        { lettre: 'D', texte: 'Dans un tissu actif, la production de CO2 et de protons facilite la libération d’oxygène.', vraie: true, justification: 'C’est le mécanisme physiologique de l’effet Bohr, adapté aux besoins tissulaires.' },
        { lettre: 'E', texte: 'L’effet Bohr est indépendant du pH.', vraie: false, justification: 'L’effet Bohr est précisément défini par la dépendance au pH de l’affinité de l’hémoglobine.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-hemoglobine-qcm-04',
      enonce: 'Concernant le 2,3-BPG et l’allostérie de l’hémoglobine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le 2,3-BPG se fixe préférentiellement sur la forme oxygénée de l’hémoglobine.', vraie: false, justification: 'Il se fixe préférentiellement sur la forme désoxygénée (état T).' },
        { lettre: 'B', texte: 'L’état T de l’hémoglobine a une plus faible affinité pour l’oxygène que l’état R.', vraie: true, justification: 'C’est la définition des états tendu (T) et relâché (R).' },
        { lettre: 'C', texte: 'L’altitude chronique augmente la concentration érythrocytaire en 2,3-BPG.', vraie: true, justification: 'C’est un mécanisme d’adaptation physiologique à l’hypoxie chronique.' },
        { lettre: 'D', texte: 'Une protéine allostérique fixe son effecteur sur son site actif.', vraie: false, justification: 'L’effecteur allostérique se fixe sur un site distinct du site actif.' },
        { lettre: 'E', texte: 'Le monoxyde de carbone a une affinité supérieure à celle de l’oxygène pour le site de fixation de l’hème.', vraie: true, justification: 'Son affinité est environ 200 fois supérieure à celle de l’oxygène.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 3,
    },
    {
      id: 'bioch-hemoglobine-qcm-05',
      enonce: 'Concernant les hémoglobinopathies, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La drépanocytose est due à une substitution d’acide aminé sur la chaîne alpha.', vraie: false, justification: 'La substitution Glu6Val touche la chaîne bêta, non la chaîne alpha.' },
        { lettre: 'B', texte: 'L’HbS polymérise préférentiellement à l’état désoxygéné.', vraie: true, justification: 'La polymérisation en fibres rigides survient surtout en situation d’hypoxie, sur l’hémoglobine désoxygénée.' },
        { lettre: 'C', texte: 'Une bêta-thalassémie correspond à un défaut de synthèse des chaînes bêta.', vraie: true, justification: 'C’est la définition de cette hémoglobinopathie quantitative.' },
        { lettre: 'D', texte: 'Les thalassémies sont des anomalies qualitatives de structure de la globine.', vraie: false, justification: 'Les thalassémies sont des anomalies quantitatives de synthèse ; les anomalies qualitatives sont les hémoglobinoses comme l’HbS.' },
        { lettre: 'E', texte: 'Une alpha-thalassémie sévère entraîne un excès relatif de chaînes non alpha.', vraie: true, justification: 'Le déficit en chaînes alpha laisse un excès relatif de chaînes bêta ou gamma, qui peuvent former des tétramères anormaux.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-hemoglobine-qcm-06',
      enonce: 'Concernant la comparaison myoglobine / hémoglobine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La myoglobine est une protéine tétramérique.', vraie: false, justification: 'La myoglobine est monomérique ; c’est l’hémoglobine qui est tétramérique.' },
        { lettre: 'B', texte: 'La myoglobine assure principalement le stockage tissulaire de l’oxygène.', vraie: true, justification: 'Sa forte affinité constante en fait un réservoir d’oxygène musculaire.' },
        { lettre: 'C', texte: 'L’hémoglobine adulte HbA comporte deux chaînes alpha et deux chaînes bêta.', vraie: true, justification: 'C’est la composition classique du tétramère alpha2 bêta2.' },
        { lettre: 'D', texte: 'La myoglobine présente une coopérativité positive comme l’hémoglobine.', vraie: false, justification: 'La coopérativité nécessite plusieurs sous-unités ; la myoglobine, monomérique, n’en présente pas.' },
        { lettre: 'E', texte: 'L’hémoglobine transporte le dioxygène dans le sang.', vraie: true, justification: 'C’est sa fonction physiologique principale, contenue dans les globules rouges.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
  ],
};
