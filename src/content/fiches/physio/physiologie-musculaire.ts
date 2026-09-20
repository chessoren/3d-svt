import type { Fiche } from '../../types';

export const fichePhysiologieMusculaire: Fiche = {
  id: 'physio-physiologie-musculaire',
  ue: 'physio',
  titre: 'Physiologie musculaire',
  sousTitre: 'Jonction neuromusculaire, glissement des filaments et types de fibres',
  chapitre: 'Neuromusculaire',
  ordre: 12,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'jonction neuromusculaire',
    'couplage excitation-contraction',
    'glissement des filaments',
    'fibres musculaires',
    'secousse musculaire',
    'tétanos',
    'sarcomère',
    'métabolisme musculaire',
  ],
  objectifs: [
    'Décrire la transmission synaptique au niveau de la jonction neuromusculaire.',
    'Expliquer le couplage excitation-contraction dans la fibre musculaire squelettique.',
    'Décrire le mécanisme de glissement des filaments d’actine et de myosine.',
    'Distinguer les principaux types de fibres musculaires squelettiques.',
    'Expliquer les notions de secousse musculaire, de sommation et de tétanos.',
  ],
  sections: [
    {
      id: 'jonction-neuromusculaire',
      titre: 'La jonction neuromusculaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Jonction neuromusculaire',
          definition:
            "Synapse chimique spécialisée entre la terminaison axonale d’un motoneurone alpha et la membrane de la fibre musculaire squelettique (plaque motrice), assurant la transmission fidèle et unidirectionnelle de l’ordre moteur du nerf vers le muscle.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la transmission neuromusculaire',
          etapes: [
            {
              titre: 'Arrivée du potentiel d’action moteur',
              detail:
                "La dépolarisation atteint la terminaison axonale et ouvre des canaux calciques voltage-dépendants.",
            },
            {
              titre: 'Libération d’acétylcholine',
              detail:
                "L’entrée de calcium déclenche la fusion des vésicules synaptiques avec la membrane présynaptique et la libération d’acétylcholine dans la fente synaptique.",
            },
            {
              titre: 'Fixation sur les récepteurs nicotiniques',
              detail:
                "L’acétylcholine se fixe sur les récepteurs nicotiniques ionotropes de la plaque motrice, ouvrant des canaux cationiques non sélectifs perméables au Na+ et au K+.",
            },
            {
              titre: 'Potentiel de plaque motrice',
              detail:
                "L’entrée nette de charges positives dépolarise localement la membrane musculaire (potentiel de plaque motrice), d’amplitude largement suffisante pour dépasser le seuil et déclencher un potentiel d’action musculaire.",
            },
            {
              titre: 'Dégradation de l’acétylcholine',
              detail:
                "L’acétylcholinestérase, présente dans la fente synaptique, hydrolyse rapidement l’acétylcholine, ce qui limite la durée du signal et permet une transmission répétée fidèle.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Une transmission à sécurité élevée',
          texte:
            "Contrairement à de nombreuses synapses centrales, la transmission neuromusculaire possède une importante marge de sécurité : le potentiel de plaque motrice dépasse très largement le seuil de déclenchement d’un potentiel d’action musculaire, ce qui garantit qu’un potentiel d’action moteur unique produit toujours, en situation physiologique, une contraction de la fibre musculaire correspondante.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Myasthénie et jonction neuromusculaire',
          texte:
            "La myasthénie auto-immune est due à des anticorps dirigés contre les récepteurs nicotiniques de la plaque motrice, réduisant la marge de sécurité de la transmission neuromusculaire et provoquant une faiblesse musculaire fluctuante, aggravée par l’effort répété.",
        },
      ],
    },
    {
      id: 'couplage-excitation-contraction',
      titre: 'Couplage excitation-contraction dans le muscle squelettique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le couplage excitation-contraction désigne l’ensemble des événements qui relient la dépolarisation de la membrane musculaire à la contraction effective des myofilaments, via une élévation transitoire du calcium cytosolique.",
        },
        {
          type: 'etapes',
          titre: 'Étapes du couplage dans le muscle squelettique',
          etapes: [
            {
              titre: 'Propagation via les tubules transverses',
              detail:
                "Le potentiel d’action musculaire se propage le long du sarcolemme puis pénètre en profondeur via les tubules transverses (tubules T), au contact étroit du réticulum sarcoplasmique.",
            },
            {
              titre: 'Couplage mécanique DHPR-RyR1',
              detail:
                "La dépolarisation du tubule T modifie la conformation du récepteur des dihydropyridines (DHPR), senseur de voltage, qui est mécaniquement couplé au récepteur à la ryanodine (RyR1) du réticulum sarcoplasmique, sans nécessiter d’entrée de calcium extracellulaire.",
            },
            {
              titre: 'Libération de calcium',
              detail:
                "L’ouverture du récepteur RyR1 libère massivement le calcium stocké dans le réticulum sarcoplasmique vers le cytosol.",
            },
            {
              titre: 'Activation des myofilaments',
              detail:
                "Le calcium se fixe sur la troponine C, ce qui déplace la tropomyosine et démasque les sites de liaison de la myosine sur l’actine, permettant le cycle des ponts transversaux.",
            },
            {
              titre: 'Relaxation',
              detail:
                "La pompe SERCA recapture activement le calcium vers le réticulum sarcoplasmique, ce qui restaure l’inhibition tropomyosinique et permet la relaxation musculaire.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Muscle squelettique versus muscle cardiaque',
          texte:
            "À la différence du cardiomyocyte, le couplage excitation-contraction du muscle squelettique ne nécessite pas d’entrée de calcium extracellulaire : le couplage DHPR-RyR1 est purement mécanique. C’est pourquoi le muscle squelettique peut continuer à se contracter transitoirement en l’absence de calcium extracellulaire, contrairement au muscle cardiaque.",
        },
      ],
    },
    {
      id: 'glissement-filaments',
      titre: 'Théorie du glissement des filaments',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La contraction musculaire résulte du glissement relatif des filaments fins d’actine sur les filaments épais de myosine au sein du sarcomère, sans que la longueur propre des filaments ne change.",
        },
        {
          type: 'tableau',
          titre: 'Bandes et zones du sarcomère',
          colonnes: ['Structure', 'Composition', 'Comportement à la contraction'],
          lignes: [
            ['Bande A', 'Filaments épais de myosine (et chevauchement avec l’actine)', 'Longueur constante'],
            ['Bande I', 'Filaments fins d’actine seuls', 'Se raccourcit à la contraction'],
            ['Zone H', 'Filaments épais seuls, sans chevauchement d’actine', 'Se raccourcit à la contraction'],
            ['Ligne Z', 'Ancrage des filaments d’actine', 'Les lignes Z se rapprochent, le sarcomère raccourcit'],
          ],
        },
        {
          type: 'etapes',
          titre: 'Cycle des ponts transversaux actine-myosine',
          etapes: [
            {
              titre: 'Fixation',
              detail:
                "La tête de myosine, chargée en ADP et phosphate inorganique, se fixe sur le site actif démasqué de l’actine, formant un pont transversal.",
            },
            {
              titre: 'Le coup de rame (power stroke)',
              detail:
                "La libération du phosphate inorganique provoque un changement de conformation de la tête de myosine, qui tire le filament d’actine vers le centre du sarcomère ; l’ADP est ensuite libéré.",
            },
            {
              titre: 'Détachement',
              detail:
                "La fixation d’une nouvelle molécule d’ATP sur la tête de myosine provoque son détachement de l’actine.",
            },
            {
              titre: 'Réarmement',
              detail:
                "L’hydrolyse de l’ATP en ADP et phosphate inorganique par l’activité ATPasique de la myosine réarme la tête en position haute, prête pour un nouveau cycle.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Rigidité cadavérique',
          texte:
            "En l’absence d’ATP disponible (mort cellulaire), la tête de myosine reste fixée sur l’actine sans pouvoir s’en détacher : c’est le mécanisme de la rigidité cadavérique (rigor mortis). Cela illustre que c’est la fixation de l’ATP, et non son hydrolyse, qui est nécessaire au détachement du pont transversal.",
        },
      ],
    },
    {
      id: 'types-fibres',
      titre: 'Types de fibres musculaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les fibres musculaires squelettiques se distinguent par leur vitesse de contraction, leur métabolisme prédominant et leur résistance à la fatigue, ce qui détermine leur aptitude fonctionnelle.",
        },
        {
          type: 'tableau',
          titre: 'Classification des fibres musculaires squelettiques',
          colonnes: ['Type', 'Vitesse de contraction', 'Métabolisme principal', 'Résistance à la fatigue', 'Exemple d’usage'],
          lignes: [
            ['Type I (lentes, oxydatives)', 'Lente', 'Oxydatif aérobie (nombreuses mitochondries, riches en myoglobine)', 'Élevée', 'Maintien postural, endurance'],
            ['Type IIa (rapides, oxydo-glycolytiques)', 'Rapide', 'Mixte, oxydatif et glycolytique', 'Intermédiaire', 'Efforts prolongés d’intensité modérée à élevée'],
            ['Type IIx (rapides, glycolytiques)', 'Très rapide', 'Glycolytique anaérobie', 'Faible', 'Efforts brefs et intenses, sprint'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Densité en myoglobine et couleur musculaire',
          texte:
            "Les fibres de type I, riches en myoglobine et en mitochondries, apparaissent rouges (muscle « rouge »). Les fibres de type IIx, pauvres en myoglobine, apparaissent plus pâles (muscle « blanc »). La composition en types de fibres d’un muscle donné est génétiquement déterminée mais peut être modulée par l’entraînement.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Unité motrice et principe de taille',
          texte:
            "Une unité motrice regroupe un motoneurone alpha et l’ensemble des fibres musculaires qu’il innerve, toutes du même type. Le principe de taille (loi de Henneman) veut que les unités motrices les plus petites, composées de fibres de type I, soient recrutées en premier lors d’un effort croissant, les unités de plus grande taille (fibres IIx) n’étant recrutées que pour les efforts les plus intenses.",
        },
      ],
    },
    {
      id: 'secousse-tetanos-metabolisme',
      titre: 'Secousse, tétanos et métabolisme énergétique',
      blocs: [
        {
          type: 'definition',
          terme: 'Secousse musculaire (twitch)',
          definition:
            "Réponse mécanique brève d’une fibre musculaire à un potentiel d’action unique, comprenant une phase de latence, une phase de contraction et une phase de relaxation. Sa durée est bien plus longue que celle du potentiel d’action électrique qui la déclenche.",
        },
        {
          type: 'paragraphe',
          texte:
            "Lorsque plusieurs potentiels d’action successifs surviennent avant la fin de relaxation de la secousse précédente, leurs effets mécaniques s’additionnent : c’est la sommation temporelle, qui aboutit, pour une fréquence de stimulation suffisante, à une contraction soutenue appelée tétanos.",
        },
        {
          type: 'comparaison',
          titre: 'Tétanos incomplet et tétanos complet (fusionné)',
          gauche: {
            titre: 'Tétanos incomplet',
            points: [
              'Fréquence de stimulation modérée.',
              'Relaxation partielle perceptible entre les secousses.',
              'Force développée oscillante mais globalement soutenue.',
            ],
          },
          droite: {
            titre: 'Tétanos complet (fusionné)',
            points: [
              'Fréquence de stimulation élevée.',
              'Aucune relaxation perceptible entre les stimulations.',
              'Force maximale soutenue, plateau lisse.',
            ],
          },
        },
        {
          type: 'tableau',
          titre: 'Sources énergétiques du muscle selon la durée de l’effort',
          colonnes: ['Source', 'Délai de disponibilité', 'Durée d’autonomie approximative', 'Type d’effort'],
          lignes: [
            ['ATP intramusculaire', 'Immédiat', 'Quelques secondes', 'Tout effort, réserve tampon initiale'],
            ['Phosphocréatine', 'Immédiat', 'Environ 10 à 15 secondes', 'Effort bref et très intense'],
            ['Glycolyse anaérobie', 'Quelques secondes', 'Environ 1 à 2 minutes', 'Effort intense de courte durée'],
            ['Phosphorylation oxydative (glucides puis lipides)', 'Quelques minutes', 'Prolongée, plusieurs heures', 'Effort d’endurance'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Dette d’oxygène',
          texte:
            "Lors d’un effort intense dépassant les capacités du métabolisme aérobie, le muscle recourt à la glycolyse anaérobie, produisant du lactate. Après l’effort, une consommation d’oxygène supérieure à la valeur de repos persiste transitoirement pour reconstituer les réserves énergétiques et métaboliser le lactate accumulé : c’est la dette d’oxygène post-exercice.",
        },
      ],
    },
  ],
  pointsCles: [
    "La jonction neuromusculaire libère de l’acétylcholine, qui active des récepteurs nicotiniques ionotropes sur la plaque motrice.",
    "La transmission neuromusculaire possède une marge de sécurité élevée : un potentiel d’action moteur déclenche toujours un potentiel d’action musculaire en situation physiologique.",
    "Le couplage excitation-contraction du muscle squelettique repose sur un couplage mécanique direct DHPR-RyR1, sans besoin de calcium extracellulaire.",
    "Le calcium se fixe sur la troponine C, ce qui démasque les sites de liaison de la myosine sur l’actine.",
    "Le cycle des ponts transversaux nécessite l’ATP à la fois pour le détachement de la myosine et pour son réarmement.",
    "Les fibres de type I sont lentes et oxydatives, les fibres de type IIx sont rapides et glycolytiques, avec les fibres IIa en position intermédiaire.",
    "Le principe de taille (loi de Henneman) impose le recrutement progressif des unités motrices, des plus petites (type I) aux plus grandes (type IIx).",
    "La sommation temporelle de secousses répétées aboutit au tétanos, incomplet ou complet selon la fréquence de stimulation.",
  ],
  erreursFrequentes: [
    "Croire que la fixation de l’ATP sur la myosine sert à la contraction : elle sert au détachement du pont transversal ; c’est l’hydrolyse de l’ATP qui réarme la tête de myosine.",
    "Penser que le couplage excitation-contraction du muscle squelettique nécessite une entrée de calcium extracellulaire, comme dans le muscle cardiaque : il repose sur un couplage mécanique direct.",
    "Confondre bande A (constante) et bande I ou zone H (qui se raccourcissent) lors de la contraction.",
    "Croire que les unités motrices de grande taille sont recrutées en premier : le principe de taille impose le recrutement des plus petites unités (type I) en premier.",
    "Oublier que la durée de la secousse mécanique est bien plus longue que celle du potentiel d’action électrique qui la déclenche.",
    "Penser que la phosphocréatine peut soutenir un effort de plusieurs minutes : son autonomie est limitée à environ 10 à 15 secondes.",
  ],
  mnemotechniques: [
    {
      moyen: '« ATP colle pas, ATP décolle »',
      explication:
        'La fixation de l’ATP (et non son hydrolyse) provoque le détachement de la tête de myosine de l’actine ; son absence explique la rigidité cadavérique.',
    },
    {
      moyen: '« Petit d’abord » (principe de taille)',
      explication:
        'Les unités motrices les plus petites, composées de fibres de type I, sont toujours recrutées avant les plus grandes, composées de fibres de type IIx.',
    },
    {
      moyen: '« PCr : 10 secondes chrono »',
      explication:
        'La phosphocréatine assure une autonomie énergétique très brève, environ 10 à 15 secondes, pour les efforts explosifs.',
    },
  ],
  sources: [
    'Guyton et Hall, Précis de physiologie médicale',
    'Silverthorn, Physiologie humaine, une approche intégrée',
    'Sherwood, Physiologie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'physio-physiologie-musculaire-fc-01',
      recto: 'Quel neurotransmetteur est libéré à la jonction neuromusculaire ?',
      verso: 'L’acétylcholine.',
      type: 'definition',
      tags: ['jonction neuromusculaire'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-02',
      recto: 'Quel type de récepteur l’acétylcholine active-t-elle sur la plaque motrice ?',
      verso: 'Les récepteurs nicotiniques ionotropes, perméables au Na+ et au K+.',
      type: 'mecanisme',
      tags: ['récepteur nicotinique'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-03',
      recto: 'Quelle enzyme dégrade l’acétylcholine dans la fente synaptique ?',
      verso: 'L’acétylcholinestérase.',
      type: 'definition',
      tags: ['acétylcholinestérase'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-04',
      recto: 'Le couplage excitation-contraction du muscle squelettique nécessite-t-il du calcium extracellulaire ?',
      verso: 'Non : le couplage mécanique direct entre le DHPR (tubule T) et le RyR1 (réticulum sarcoplasmique) ne nécessite pas d’entrée de calcium extracellulaire.',
      type: 'mecanisme',
      tags: ['couplage excitation-contraction'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-05',
      recto: 'Sur quelle protéine le calcium se fixe-t-il pour déclencher la contraction ?',
      verso: 'La troponine C.',
      type: 'definition',
      tags: ['troponine'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-06',
      recto: 'Quelle bande du sarcomère garde une longueur constante lors de la contraction ?',
      verso: 'La bande A, correspondant aux filaments épais de myosine.',
      type: 'definition',
      tags: ['sarcomère'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-07',
      recto: 'Quel rôle joue la fixation de l’ATP sur la tête de myosine ?',
      verso: 'Elle provoque le détachement de la tête de myosine du filament d’actine.',
      type: 'mecanisme',
      tags: ['cycle des ponts transversaux'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-08',
      recto: 'Quel type de fibre musculaire est le plus résistant à la fatigue ?',
      verso: 'Les fibres de type I, lentes et oxydatives.',
      type: 'classification',
      tags: ['types de fibres'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-09',
      recto: 'Qu’énonce le principe de taille (loi de Henneman) ?',
      verso: 'Les unités motrices les plus petites (fibres de type I) sont recrutées en premier lors d’un effort croissant, avant les unités de plus grande taille.',
      type: 'definition',
      tags: ['unité motrice', 'principe de taille'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-10',
      recto: 'Qu’est-ce que le tétanos musculaire complet ?',
      verso: 'Une contraction soutenue, sans relaxation perceptible, résultant de la sommation de potentiels d’action à fréquence élevée.',
      type: 'definition',
      tags: ['tétanos'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-11',
      recto: 'Quelle est l’autonomie énergétique approximative de la phosphocréatine ?',
      verso: 'Environ 10 à 15 secondes.',
      type: 'chiffre',
      tags: ['phosphocréatine'],
    },
    {
      id: 'physio-physiologie-musculaire-fc-12',
      recto: 'Qu’est-ce que la dette d’oxygène post-exercice ?',
      verso: 'Une consommation d’oxygène supérieure à la valeur de repos, persistant après un effort intense, pour reconstituer les réserves énergétiques et métaboliser le lactate accumulé.',
      type: 'definition',
      tags: ['dette d’oxygène'],
    },
  ],
  qcm: [
    {
      id: 'physio-physiologie-musculaire-qcm-01',
      enonce: "Concernant la jonction neuromusculaire, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'L’acétylcholine est libérée par exocytose vésiculaire dépendante du calcium.',
          vraie: true,
          justification: 'Exact : l’entrée de calcium dans la terminaison axonale déclenche la fusion vésiculaire.',
        },
        {
          lettre: 'B',
          texte: 'Les récepteurs de la plaque motrice sont des récepteurs muscariniques métabotropes.',
          vraie: false,
          justification: 'Faux : ce sont des récepteurs nicotiniques ionotropes.',
        },
        {
          lettre: 'C',
          texte: 'Le potentiel de plaque motrice dépasse largement le seuil de déclenchement d’un potentiel d’action musculaire.',
          vraie: true,
          justification: 'Exact, ce qui constitue la marge de sécurité de la transmission neuromusculaire.',
        },
        {
          lettre: 'D',
          texte: 'L’acétylcholinestérase prolonge l’action de l’acétylcholine dans la fente synaptique.',
          vraie: false,
          justification: 'Faux : elle hydrolyse rapidement l’acétylcholine, limitant au contraire la durée de son action.',
        },
        {
          lettre: 'E',
          texte: 'La myasthénie auto-immune cible les récepteurs nicotiniques de la plaque motrice.',
          vraie: true,
          justification: 'Exact, ce qui réduit la marge de sécurité de la transmission et provoque une faiblesse musculaire fluctuante.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. La transmission neuromusculaire est fiable grâce à sa large marge de sécurité.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-musculaire-qcm-02',
      enonce: "Concernant le couplage excitation-contraction du muscle squelettique, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Il nécessite une entrée massive de calcium extracellulaire.',
          vraie: false,
          justification: "Faux : le couplage DHPR-RyR1 est purement mécanique et ne nécessite pas de calcium extracellulaire.",
        },
        {
          lettre: 'B',
          texte: 'Le récepteur DHPR agit comme senseur de voltage dans le tubule T.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Le récepteur RyR1 libère le calcium stocké dans le réticulum sarcoplasmique.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Le calcium libéré se fixe sur la tropomyosine pour activer la contraction.',
          vraie: false,
          justification: "Faux : le calcium se fixe sur la troponine C, ce qui déplace ensuite la tropomyosine.",
        },
        {
          lettre: 'E',
          texte: 'La pompe SERCA recapture le calcium cytosolique lors de la relaxation.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Le couplage mécanique DHPR-RyR1 distingue le muscle squelettique du muscle cardiaque.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-musculaire-qcm-03',
      enonce: "Concernant le glissement des filaments et le cycle des ponts transversaux, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La longueur des filaments d’actine et de myosine change pendant la contraction.',
          vraie: false,
          justification: "Faux : la longueur propre des filaments reste constante, seul leur chevauchement relatif change.",
        },
        {
          lettre: 'B',
          texte: 'La bande I se raccourcit pendant la contraction.',
          vraie: true,
          justification: 'Exact, car elle correspond aux filaments d’actine seuls, dont le chevauchement avec la myosine augmente.',
        },
        {
          lettre: 'C',
          texte: 'La fixation de l’ATP sur la myosine provoque le détachement du pont transversal.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'L’hydrolyse de l’ATP réarme la tête de myosine en position haute.',
          vraie: true,
          justification: 'Exact, préparant un nouveau cycle de pont transversal.',
        },
        {
          lettre: 'E',
          texte: 'La rigidité cadavérique résulte d’un excès d’ATP disponible.',
          vraie: false,
          justification: "Faux : elle résulte au contraire d’une absence d’ATP, empêchant le détachement de la myosine de l’actine.",
        },
      ],
      correction: 'Réponses exactes : B, C et D. L’ATP est nécessaire au détachement et au réarmement, non à la formation initiale du pont.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-musculaire-qcm-04',
      enonce: "Concernant les types de fibres musculaires, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Les fibres de type I sont les plus résistantes à la fatigue.',
          vraie: true,
          justification: 'Exact, grâce à leur métabolisme oxydatif prédominant.',
        },
        {
          lettre: 'B',
          texte: 'Les fibres de type IIx sont principalement oxydatives.',
          vraie: false,
          justification: 'Faux : elles sont principalement glycolytiques anaérobies.',
        },
        {
          lettre: 'C',
          texte: 'Les fibres de type I sont riches en mitochondries et en myoglobine.',
          vraie: true,
          justification: 'Exact, ce qui leur confère leur couleur rouge caractéristique.',
        },
        {
          lettre: 'D',
          texte: 'Les fibres de type IIa ont un métabolisme purement glycolytique.',
          vraie: false,
          justification: "Faux : elles ont un métabolisme mixte, à la fois oxydatif et glycolytique.",
        },
        {
          lettre: 'E',
          texte: 'Une unité motrice regroupe des fibres musculaires de types différents.',
          vraie: false,
          justification: "Faux : toutes les fibres d’une même unité motrice sont du même type.",
        },
      ],
      correction: 'Réponses exactes : A et C. Chaque type de fibre a un profil métabolique et fonctionnel distinct.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-musculaire-qcm-05',
      enonce: "Concernant le principe de taille et le recrutement des unités motrices, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Les unités motrices de petite taille sont recrutées en premier.',
          vraie: true,
          justification: 'Exact, conformément au principe de taille (loi de Henneman).',
        },
        {
          lettre: 'B',
          texte: 'Les unités motrices de type I sont recrutées en dernier lors d’un effort croissant.',
          vraie: false,
          justification: "Faux : elles sont au contraire recrutées en premier, étant les plus petites.",
        },
        {
          lettre: 'C',
          texte: 'Les unités motrices de type IIx ne sont recrutées que pour les efforts les plus intenses.',
          vraie: true,
          justification: 'Exact, en fin de gradation du recrutement.',
        },
        {
          lettre: 'D',
          texte: 'Le principe de taille permet un contrôle fin et progressif de la force musculaire développée.',
          vraie: true,
          justification: 'Exact : le recrutement progressif, des petites vers les grandes unités, autorise une gradation fine de la force.',
        },
        {
          lettre: 'E',
          texte: 'Le principe de taille ne s’applique qu’aux muscles lisses.',
          vraie: false,
          justification: "Faux : il s’applique aux muscles squelettiques et à leurs unités motrices, composées de fibres striées.",
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le principe de taille assure un recrutement progressif et une gradation fine de la force.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-musculaire-qcm-06',
      enonce: "Concernant la secousse, le tétanos et le métabolisme énergétique musculaire, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La durée de la secousse mécanique est plus courte que celle du potentiel d’action électrique qui la déclenche.',
          vraie: false,
          justification: "Faux : c’est l’inverse, la secousse mécanique dure bien plus longtemps que le potentiel d’action électrique.",
        },
        {
          lettre: 'B',
          texte: 'Le tétanos complet résulte d’une fréquence de stimulation suffisamment élevée pour empêcher toute relaxation perceptible.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'La phosphocréatine assure une autonomie énergétique de plusieurs minutes.',
          vraie: false,
          justification: "Faux : son autonomie est limitée à environ 10 à 15 secondes.",
        },
        {
          lettre: 'D',
          texte: 'La glycolyse anaérobie permet de soutenir un effort intense de courte durée, avant que le métabolisme aérobie ne prenne le relais.',
          vraie: true,
          justification: 'Exact, avec production de lactate.',
        },
        {
          lettre: 'E',
          texte: 'La dette d’oxygène post-exercice traduit une consommation d’oxygène inférieure à la valeur de repos après l’effort.',
          vraie: false,
          justification: "Faux : elle traduit au contraire une consommation d’oxygène supérieure à la valeur de repos, pour reconstituer les réserves énergétiques.",
        },
      ],
      correction: 'Réponses exactes : B et D. Le métabolisme musculaire s’adapte à la durée et à l’intensité de l’effort par des filières successives.',
      difficulte: 2,
    },
  ],
};
