import type { Fiche } from '../../types';

export const ficheOrganisationSystemeImmunitaire: Fiche = {
  id: 'ue5-organisation-systeme-immunitaire',
  ue: 'ue5',
  titre: 'Organisation du système immunitaire',
  sousTitre:
    'Organes lymphoïdes primaires et secondaires, cellules de l’immunité, circulation lymphocytaire, soi et non-soi',
  chapitre: 'Immunité innée',
  ordre: 1,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'organes lymphoïdes primaires',
    'organes lymphoïdes secondaires',
    'thymus',
    'moelle osseuse',
    'ganglion lymphatique',
    'rate',
    'antigène',
    'épitope',
    'recirculation lymphocytaire',
  ],
  objectifs: [
    'Distinguer les organes lymphoïdes primaires et secondaires et préciser leur rôle respectif.',
    'Décrire les principales populations cellulaires du système immunitaire et leur origine médullaire.',
    'Expliquer le trajet de la recirculation lymphocytaire entre le sang, la lymphe et les organes lymphoïdes.',
    'Définir les notions de soi, de non-soi et de tolérance immunitaire.',
    'Définir un antigène et un épitope, et distinguer immunogénicité et antigénicité.',
  ],
  sections: [
    {
      id: 'organes-lymphoides-primaires',
      titre: 'Organes lymphoïdes primaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les organes lymphoïdes primaires (ou centraux) sont les sites où naissent et se différencient les lymphocytes à partir de progéniteurs hématopoïétiques, indépendamment de toute stimulation antigénique. Chez l’être humain, il s’agit de la moelle osseuse et du thymus.",
        },
        {
          type: 'definition',
          terme: 'Cellule souche hématopoïétique',
          definition:
            "Cellule multipotente de la moelle osseuse, à l’origine de toutes les lignées sanguines, myéloïde et lymphoïde. Les lymphocytes B et les cellules NK achèvent leur maturation dans la moelle osseuse ; les précurseurs des lymphocytes T migrent vers le thymus pour s’y différencier.",
        },
        {
          type: 'tableau',
          titre: 'Organes lymphoïdes primaires',
          colonnes: ['Organe', 'Cellules produites ou maturées', 'Particularité'],
          lignes: [
            [
              'Moelle osseuse',
              'Lymphocytes B, cellules NK, précurseurs T, cellules de l’immunité innée',
              'Site de l’hématopoïèse ; lieu de la sélection négative centrale des lymphocytes B',
            ],
            [
              'Thymus',
              'Lymphocytes T',
              'Organe bilobé rétrosternal, involue progressivement après la puberté',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Involution thymique',
          texte:
            "Le thymus est volumineux chez l’enfant et involue progressivement à partir de la puberté, remplacé par du tissu adipeux. Cette involution physiologique explique la diminution de la production de nouveaux lymphocytes T naïfs avec l’âge, compensée en partie par l’expansion périphérique du répertoire déjà constitué.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre primaire et secondaire',
          texte:
            "Un organe lymphoïde primaire est un site de production et de maturation des lymphocytes, indépendant de l’antigène. Un organe lymphoïde secondaire est un site de rencontre entre le lymphocyte mature et l’antigène, où se déroule la réponse immunitaire adaptative.",
        },
      ],
    },
    {
      id: 'organes-lymphoides-secondaires',
      titre: 'Organes lymphoïdes secondaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les organes lymphoïdes secondaires (ou périphériques) sont les sites où les lymphocytes matures naïfs rencontrent l’antigène et se différencient en cellules effectrices et mémoires. Ils sont stratégiquement disposés pour filtrer les liquides de l’organisme.",
        },
        {
          type: 'tableau',
          titre: 'Principaux organes lymphoïdes secondaires',
          colonnes: ['Organe', 'Liquide filtré', 'Organisation caractéristique'],
          lignes: [
            [
              'Ganglions lymphatiques',
              'Lymphe',
              'Zone corticale (follicules B), paracortex (zone T), médullaire (plasmocytes)',
            ],
            [
              'Rate',
              'Sang',
              'Pulpe blanche lymphoïde (manchon lymphoïde périartériolaire, follicules B) et pulpe rouge (filtration des hématies)',
            ],
            [
              'Tissu lymphoïde associé aux muqueuses (MALT)',
              'Contenu des muqueuses digestive, respiratoire, urogénitale',
              'Plaques de Peyer de l’iléon, amygdales, tissu lymphoïde bronchique',
            ],
          ],
        },
        {
          type: 'liste',
          items: [
            "Le follicule lymphoïde primaire est constitué de lymphocytes B naïfs ; après stimulation antigénique, il devient un follicule secondaire pourvu d’un centre germinatif.",
            "Le paracortex ganglionnaire est la zone T-dépendante, riche en cellules dendritiques présentatrices d’antigène et en veinules à endothélium épais (veinules post-capillaires à haute endothélium).",
            'La rate ne possède pas de vaisseau lymphatique afférent : elle filtre uniquement le sang, ce qui explique son rôle majeur contre les infections bactériennes septicémiques, notamment les bactéries encapsulées.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Asplénie et risque infectieux',
          texte:
            "L’absence de rate, congénitale ou après splénectomie, expose à un risque accru d’infections fulminantes à bactéries encapsulées (pneumocoque, méningocoque, Haemophilus influenzae de type b), du fait de la perte de la filtration sanguine splénique et de la production d’anticorps contre les antigènes polysaccharidiques.",
        },
      ],
    },
    {
      id: 'cellules-immunite',
      titre: 'Les cellules du système immunitaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Toutes les cellules immunitaires dérivent de la cellule souche hématopoïétique médullaire, qui donne naissance à deux grandes lignées : la lignée myéloïde et la lignée lymphoïde.",
        },
        {
          type: 'tableau',
          titre: 'Principales cellules issues du progéniteur myéloïde',
          colonnes: ['Cellule', 'Fonction principale'],
          lignes: [
            ['Polynucléaire neutrophile', 'Phagocytose, première ligne de défense antibactérienne'],
            ['Polynucléaire éosinophile', 'Défense antiparasitaire, réactions allergiques'],
            ['Polynucléaire basophile', 'Libération d’histamine, réactions allergiques'],
            ['Monocyte / macrophage', 'Phagocytose, présentation antigénique, sécrétion de cytokines'],
            ['Cellule dendritique', 'Présentation antigénique, lien entre immunité innée et adaptative'],
            ['Mastocyte', 'Résident tissulaire, dégranulation histaminique'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Principales cellules issues du progéniteur lymphoïde',
          colonnes: ['Cellule', 'Fonction principale'],
          lignes: [
            ['Lymphocyte T', 'Immunité adaptative cellulaire (helper, cytotoxique, régulateur)'],
            ['Lymphocyte B', 'Immunité adaptative humorale, production d’anticorps'],
            ['Cellule NK (natural killer)', 'Cytotoxicité innée contre cellules infectées ou tumorales'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La cellule NK n’est pas un lymphocyte T ou B',
          texte:
            "Bien qu’issue du progéniteur lymphoïde et morphologiquement proche des lymphocytes, la cellule NK appartient à l’immunité innée : elle ne réarrange pas de récepteur antigénique spécifique (pas de TCR ni de BCR) et agit sans restriction par le CMH ni mémoire immunologique classique.",
        },
      ],
    },
    {
      id: 'circulation-lymphocytaire',
      titre: 'Recirculation lymphocytaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les lymphocytes naïfs ne restent pas immobiles : ils recirculent en permanence entre le sang, les organes lymphoïdes secondaires et la lymphe, ce qui maximise leurs chances de rencontrer l’antigène pour lequel ils sont spécifiques.",
        },
        {
          type: 'etapes',
          titre: 'Trajet de la recirculation lymphocytaire',
          etapes: [
            {
              titre: 'Entrée dans le ganglion',
              detail:
                "Le lymphocyte naïf quitte la circulation sanguine et pénètre dans le ganglion lymphatique en traversant les veinules à haut endothélium (high endothelial venules), grâce à des molécules d’adhérence comme la L-sélectine (CD62L).",
            },
            {
              titre: 'Rencontre antigénique',
              detail:
                "Dans le paracortex, le lymphocyte T explore les cellules dendritiques présentatrices d’antigène. En l’absence de reconnaissance spécifique, il quitte le ganglion par la lymphe efférente.",
            },
            {
              titre: 'Retour à la circulation sanguine',
              detail:
                "La lymphe efférente rejoint le canal thoracique (ou la grande veine lymphatique droite), qui se déverse dans la circulation veineuse au niveau du confluent jugulo-sous-clavier, ramenant le lymphocyte dans le sang.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Pourquoi cette recirculation est essentielle',
          texte:
            "La fréquence d’un lymphocyte naïf spécifique d’un antigène donné est très faible (de l’ordre de un sur cent mille à un sur un million). La recirculation permanente à travers de multiples organes lymphoïdes augmente statistiquement la probabilité de rencontre avec l’antigène correspondant présenté par une cellule dendritique.",
        },
      ],
    },
    {
      id: 'soi-non-soi-antigene',
      titre: 'Soi, non-soi, antigène et épitope',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le système immunitaire doit distinguer le soi, c’est-à-dire les constituants propres de l’organisme, du non-soi, constitué par les agents pathogènes et les molécules étrangères. Cette discrimination repose sur des mécanismes de tolérance centrale et périphérique établis durant la maturation lymphocytaire.",
        },
        {
          type: 'definition',
          terme: 'Antigène',
          definition:
            "Toute substance reconnue spécifiquement par un récepteur du système immunitaire adaptatif (anticorps ou récepteur T), qu’elle soit capable ou non d’induire à elle seule une réponse immunitaire.",
        },
        {
          type: 'definition',
          terme: 'Épitope (ou déterminant antigénique)',
          definition:
            "Portion précise de l’antigène effectivement reconnue par le site de fixation d’un anticorps ou d’un récepteur T. Un même antigène porte généralement plusieurs épitopes distincts, pouvant chacun être reconnu par un clone lymphocytaire différent.",
        },
        {
          type: 'liste',
          items: [
            "Un épitope B (reconnu par les anticorps) est le plus souvent conformationnel, dépendant du repliement tridimensionnel de la protéine native.",
            "Un épitope T (reconnu par le récepteur T) est linéaire : il correspond à un court peptide issu de la dégradation de l’antigène, présenté par une molécule du complexe majeur d’histocompatibilité.",
            "L’immunogénicité désigne la capacité d’une molécule à déclencher une réponse immunitaire ; l’antigénicité désigne sa capacité à être reconnue spécifiquement, sans nécessairement déclencher de réponse à elle seule (cas des haptènes).",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Haptène',
          texte:
            "Un haptène est une petite molécule antigénique mais non immunogène par elle-même, en raison de sa taille trop faible. Couplée à une protéine porteuse (carrier), elle devient capable d’induire une réponse immunitaire spécifique, tout en restant reconnue seule par les anticorps déjà formés.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les organes lymphoïdes primaires (moelle osseuse, thymus) produisent et sélectionnent les lymphocytes indépendamment de l’antigène.",
    'Les organes lymphoïdes secondaires (ganglions, rate, MALT) sont les sites de rencontre avec l’antigène et de déclenchement de la réponse adaptative.',
    'Toutes les cellules immunitaires dérivent de la cellule souche hématopoïétique médullaire, via les lignées myéloïde et lymphoïde.',
    'La cellule NK appartient à l’immunité innée malgré son origine lymphoïde : elle ne possède pas de récepteur antigénique réarrangé.',
    'La recirculation lymphocytaire entre sang, ganglions et lymphe passe par les veinules à haut endothélium et le canal thoracique.',
    "L’antigène est reconnu par un récepteur spécifique ; l’épitope est la portion précise reconnue, conformationnel pour les anticorps, linéaire pour le récepteur T.",
    "L’haptène est antigénique mais non immunogène seul : il nécessite un couplage à une protéine porteuse.",
  ],
  erreursFrequentes: [
    'Confondre organe lymphoïde primaire et secondaire : le premier produit les lymphocytes, le second héberge la réponse immunitaire.',
    'Classer la cellule NK parmi les lymphocytes de l’immunité adaptative alors qu’elle appartient à l’immunité innée.',
    'Oublier que la rate ne reçoit pas de lymphe afférente et filtre uniquement le sang.',
    'Croire qu’un épitope B est toujours linéaire : il est le plus souvent conformationnel, contrairement à l’épitope T.',
    "Confondre immunogénicité (capacité à déclencher une réponse) et antigénicité (capacité à être reconnu).",
    'Penser que les lymphocytes T naïfs restent fixés dans un seul ganglion : ils recirculent en permanence.',
  ],
  mnemotechniques: [
    {
      moyen: 'Primaires : « BT » comme Bone et Thymus',
      explication:
        'Moelle osseuse (Bone marrow) pour les lymphocytes B et Thymus pour les lymphocytes T : les deux organes lymphoïdes primaires.',
    },
    {
      moyen: 'Rate = sang, ganglion = lymphe',
      explication:
        'La rate filtre le sang (pas de lymphatique afférent), le ganglion filtre la lymphe : retenir cette association simple pour ne jamais les confondre.',
    },
    {
      moyen: 'Épitope B rond, épitope T plat',
      explication:
        'L’épitope B est conformationnel (reconnaît une forme 3D « ronde »), l’épitope T est un peptide linéaire « plat » présenté par le CMH.',
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
      id: 'ue5-organisation-systeme-immunitaire-fc-01',
      recto: 'Quels sont les deux organes lymphoïdes primaires chez l’être humain ?',
      verso: 'La moelle osseuse (maturation des lymphocytes B) et le thymus (maturation des lymphocytes T).',
      type: 'classification',
      tags: ['organes lymphoïdes'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-02',
      recto: 'Que devient le thymus après la puberté ?',
      verso: 'Il involue progressivement et est remplacé par du tissu adipeux.',
      type: 'chiffre',
      tags: ['thymus'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-03',
      recto: 'Citer trois organes lymphoïdes secondaires.',
      verso: 'Les ganglions lymphatiques, la rate et le tissu lymphoïde associé aux muqueuses (MALT).',
      type: 'classification',
      tags: ['organes lymphoïdes'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-04',
      recto: 'Quel liquide filtre la rate ? Et le ganglion lymphatique ?',
      verso: 'La rate filtre le sang ; le ganglion filtre la lymphe.',
      type: 'definition',
      tags: ['rate', 'ganglion'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-05',
      recto: 'Pourquoi l’asplénie expose-t-elle à un risque infectieux particulier ?',
      verso: 'Par perte de la filtration sanguine et de la réponse anticorps contre les bactéries encapsulées (pneumocoque, méningocoque, Haemophilus influenzae b).',
      type: 'clinique',
      tags: ['rate', 'asplénie'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-06',
      recto: 'La cellule NK possède-t-elle un récepteur antigénique réarrangé comme le TCR ou le BCR ?',
      verso: 'Non : la cellule NK appartient à l’immunité innée et n’exprime pas de récepteur antigénique spécifique réarrangé.',
      type: 'definition',
      tags: ['cellule NK'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-07',
      recto: 'Par quelle structure le lymphocyte naïf entre-t-il dans le ganglion depuis le sang ?',
      verso: 'Les veinules à haut endothélium (high endothelial venules), grâce notamment à la L-sélectine.',
      type: 'mecanisme',
      tags: ['recirculation lymphocytaire'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-08',
      recto: 'Par quel canal la lymphe retourne-t-elle majoritairement à la circulation sanguine ?',
      verso: 'Le canal thoracique, qui se déverse au confluent jugulo-sous-clavier.',
      type: 'mecanisme',
      tags: ['recirculation lymphocytaire'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-09',
      recto: 'Définir un antigène.',
      verso: 'Toute substance reconnue spécifiquement par un récepteur du système immunitaire adaptatif (anticorps ou récepteur T).',
      type: 'definition',
      tags: ['antigène'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-10',
      recto: 'Un épitope B est-il plutôt linéaire ou conformationnel ? Et un épitope T ?',
      verso: 'L’épitope B est le plus souvent conformationnel ; l’épitope T est un peptide linéaire présenté par le CMH.',
      type: 'definition',
      tags: ['épitope'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-11',
      recto: 'Qu’est-ce qu’un haptène ?',
      verso: 'Une petite molécule antigénique mais non immunogène seule, qui devient immunogène une fois couplée à une protéine porteuse.',
      type: 'definition',
      tags: ['haptène'],
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-fc-12',
      recto: 'Quelle est la zone T-dépendante du ganglion lymphatique ?',
      verso: 'Le paracortex, riche en cellules dendritiques et en veinules à haut endothélium.',
      type: 'definition',
      tags: ['ganglion'],
    },
  ],
  qcm: [
    {
      id: 'ue5-organisation-systeme-immunitaire-qcm-01',
      enonce: 'Concernant les organes lymphoïdes primaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La moelle osseuse est un organe lymphoïde primaire.', vraie: true, justification: 'Exact : elle héberge l’hématopoïèse et la maturation des lymphocytes B.' },
        { lettre: 'B', texte: 'Le thymus assure la maturation des lymphocytes B.', vraie: false, justification: 'Le thymus assure la maturation des lymphocytes T, pas des lymphocytes B.' },
        { lettre: 'C', texte: 'Les organes lymphoïdes primaires sont le siège de la rencontre avec l’antigène.', vraie: false, justification: 'Cette fonction est celle des organes lymphoïdes secondaires.' },
        { lettre: 'D', texte: 'Le thymus involue physiologiquement après la puberté.', vraie: true, justification: 'Exact : il est progressivement remplacé par du tissu adipeux.' },
        { lettre: 'E', texte: 'La rate est un organe lymphoïde primaire.', vraie: false, justification: 'La rate est un organe lymphoïde secondaire, filtrant le sang.' },
      ],
      correction: 'Réponses exactes : A et D. Retenir que seuls la moelle osseuse et le thymus sont des organes lymphoïdes primaires.',
      difficulte: 1,
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-qcm-02',
      enonce: 'Concernant la rate et les ganglions lymphatiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La rate possède des vaisseaux lymphatiques afférents.', vraie: false, justification: 'La rate ne reçoit pas de lymphe afférente ; elle filtre uniquement le sang.' },
        { lettre: 'B', texte: 'Le ganglion lymphatique comporte une zone corticale riche en follicules B.', vraie: true, justification: 'Exact : le cortex ganglionnaire est la zone B, avec ses follicules.' },
        { lettre: 'C', texte: 'La pulpe rouge de la rate assure la filtration des hématies sénescentes.', vraie: true, justification: 'Exact : la pulpe rouge élimine les globules rouges vieillis ou anormaux.' },
        { lettre: 'D', texte: 'Le paracortex ganglionnaire est une zone essentiellement B-dépendante.', vraie: false, justification: 'Le paracortex est la zone T-dépendante du ganglion.' },
        { lettre: 'E', texte: 'La splénectomie augmente le risque d’infections à bactéries encapsulées.', vraie: true, justification: 'Exact : perte de la filtration sanguine et de la réponse anticorps antipolysaccharidique.' },
      ],
      correction: 'Réponses exactes : B, C et E. La rate filtre le sang, le ganglion filtre la lymphe.',
      difficulte: 2,
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-qcm-03',
      enonce: 'Concernant les cellules du système immunitaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le polynucléaire neutrophile dérive du progéniteur myéloïde.', vraie: true, justification: 'Exact : comme tous les polynucléaires et les monocytes.' },
        { lettre: 'B', texte: 'La cellule NK appartient à l’immunité adaptative.', vraie: false, justification: 'La cellule NK appartient à l’immunité innée, malgré son origine lymphoïde.' },
        { lettre: 'C', texte: 'Le lymphocyte T dérive du progéniteur lymphoïde.', vraie: true, justification: 'Exact : les lymphocytes T et B et les cellules NK dérivent tous du progéniteur lymphoïde.' },
        { lettre: 'D', texte: 'Le mastocyte est un dérivé du progéniteur lymphoïde.', vraie: false, justification: 'Le mastocyte dérive du progéniteur myéloïde.' },
        { lettre: 'E', texte: 'Toutes les cellules immunitaires dérivent de la cellule souche hématopoïétique.', vraie: true, justification: 'Exact : c’est la cellule à l’origine de l’ensemble des lignées sanguines.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer lignée myéloïde et lignée lymphoïde.',
      difficulte: 2,
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-qcm-04',
      enonce: 'Concernant la recirculation lymphocytaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le lymphocyte naïf entre dans le ganglion via les veinules à haut endothélium.', vraie: true, justification: 'Exact : ce passage implique la L-sélectine notamment.' },
        { lettre: 'B', texte: 'En l’absence de reconnaissance antigénique, le lymphocyte reste bloqué définitivement dans le ganglion.', vraie: false, justification: 'Il quitte le ganglion par la lymphe efférente pour continuer sa recirculation.' },
        { lettre: 'C', texte: 'Le canal thoracique déverse la lymphe dans la circulation veineuse.', vraie: true, justification: 'Exact : au niveau du confluent jugulo-sous-clavier.' },
        { lettre: 'D', texte: 'La recirculation augmente la probabilité de rencontre entre un lymphocyte spécifique et son antigène.', vraie: true, justification: 'Exact : la fréquence d’un clone spécifique est très faible, la recirculation compense ce faible nombre.' },
        { lettre: 'E', texte: 'La recirculation lymphocytaire concerne exclusivement les lymphocytes B.', vraie: false, justification: 'Elle concerne les lymphocytes T et B naïfs.' },
      ],
      correction: 'Réponses exactes : A, C et D. La recirculation est un mécanisme continu, non spécifique de la lignée B.',
      difficulte: 2,
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-qcm-05',
      enonce: 'Concernant l’antigène et l’épitope, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un épitope est la portion précise de l’antigène reconnue par le récepteur spécifique.', vraie: true, justification: 'Exact : c’est la définition même de l’épitope, ou déterminant antigénique.' },
        { lettre: 'B', texte: 'Un épitope reconnu par un anticorps est le plus souvent linéaire.', vraie: false, justification: 'L’épitope B est le plus souvent conformationnel, dépendant du repliement 3D.' },
        { lettre: 'C', texte: 'Un épitope T correspond à un peptide présenté par une molécule du CMH.', vraie: true, justification: 'Exact : le récepteur T reconnaît un peptide linéaire associé au CMH.' },
        { lettre: 'D', texte: 'Un haptène est immunogène à lui seul.', vraie: false, justification: 'Un haptène est antigénique mais non immunogène seul ; il nécessite un couplage à un carrier.' },
        { lettre: 'E', texte: 'Un même antigène peut porter plusieurs épitopes distincts.', vraie: true, justification: 'Exact : chaque épitope peut être reconnu par un clone lymphocytaire différent.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir l’opposition épitope B conformationnel / épitope T linéaire.',
      difficulte: 2,
    },
    {
      id: 'ue5-organisation-systeme-immunitaire-qcm-06',
      enonce: 'Concernant le tissu lymphoïde associé aux muqueuses (MALT), quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les plaques de Peyer sont situées dans l’iléon.', vraie: true, justification: 'Exact : elles constituent le principal tissu lymphoïde organisé de l’intestin grêle distal.' },
        { lettre: 'B', texte: 'Le MALT est un organe lymphoïde primaire.', vraie: false, justification: 'Le MALT est un organe lymphoïde secondaire, comme les ganglions et la rate.' },
        { lettre: 'C', texte: 'Les amygdales font partie du tissu lymphoïde associé aux muqueuses.', vraie: true, justification: 'Exact : elles constituent le tissu lymphoïde de l’anneau de Waldeyer.' },
        { lettre: 'D', texte: 'Le MALT ne contient jamais de follicules lymphoïdes.', vraie: false, justification: 'Le MALT contient des follicules lymphoïdes organisés, notamment dans les plaques de Peyer.' },
        { lettre: 'E', texte: 'Le MALT protège les muqueuses digestive, respiratoire et urogénitale.', vraie: true, justification: 'Exact : c’est un ensemble de tissus lymphoïdes répartis le long des muqueuses exposées à l’environnement.' },
      ],
      correction: 'Réponses exactes : A, C et E. Le MALT est bien un organe lymphoïde secondaire organisé.',
      difficulte: 2,
    },
  ],
};
