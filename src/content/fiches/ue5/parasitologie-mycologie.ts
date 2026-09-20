import type { Fiche } from '../../types';

export const ficheParasitologieMycologie: Fiche = {
  id: 'ue5-parasitologie-mycologie',
  ue: 'ue5',
  titre: 'Parasitologie et mycologie',
  sousTitre:
    'Protozoaires, helminthes, cycles parasitaires, principaux parasites d’intérêt médical, champignons et mycoses',
  chapitre: 'Agents infectieux',
  ordre: 12,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'protozoaire',
    'helminthe',
    'cycle parasitaire',
    'hôte définitif',
    'hôte intermédiaire',
    'paludisme',
    'toxoplasmose',
    'levure',
    'champignon filamenteux',
    'mycose',
  ],
  objectifs: [
    'Distinguer protozoaires et helminthes selon leur organisation générale.',
    'Définir les notions d’hôte définitif, d’hôte intermédiaire et de vecteur en parasitologie.',
    'Citer les principaux protozoaires et helminthes d’intérêt médical et leur mode de transmission.',
    'Distinguer champignons levuriformes et filamenteux.',
    'Distinguer mycoses superficielles et mycoses profondes.',
  ],
  sections: [
    {
      id: 'generalites-parasites',
      titre: 'Généralités sur les parasites',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un parasite est un organisme vivant aux dépens d’un autre organisme, appelé hôte, dont il tire ses ressources, au moins temporairement. En parasitologie médicale, on distingue classiquement deux grands groupes : les protozoaires, organismes unicellulaires eucaryotes, et les helminthes, organismes pluricellulaires (vers).",
        },
        {
          type: 'tableau',
          titre: 'Protozoaires versus helminthes',
          colonnes: ['Caractéristique', 'Protozoaires', 'Helminthes'],
          lignes: [
            ['Organisation', 'Unicellulaire', 'Pluricellulaire'],
            ['Multiplication chez l’hôte', 'Possible (multiplication intracellulaire ou extracellulaire)', 'Généralement absente ; la charge parasitaire dépend du nombre d’infestations'],
            ['Exemples', 'Plasmodium, Toxoplasma gondii, Entamoeba histolytica', 'Ascaris, ténia, schistosome'],
          ],
        },
        {
          type: 'definition',
          terme: 'Hôte définitif',
          definition:
            "Organisme chez lequel le parasite atteint sa maturité sexuelle et se reproduit sous forme sexuée. Chez le paludisme, l’hôte définitif est le moustique anophèle femelle ; chez le ténia, l’hôte définitif est l’être humain.",
        },
        {
          type: 'definition',
          terme: 'Hôte intermédiaire',
          definition:
            "Organisme chez lequel le parasite effectue une multiplication asexuée ou une partie de son développement larvaire, sans reproduction sexuée. Chez le paludisme, l’être humain est l’hôte intermédiaire.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Vecteur, hôte ou simple transporteur',
          texte:
            "Un vecteur est un organisme (le plus souvent un arthropode) qui transmet activement le parasite d’un hôte à un autre, avec ou sans multiplication du parasite en son sein. L’anophèle est à la fois vecteur et hôte définitif du paludisme, ce qui illustre qu’un même organisme peut cumuler plusieurs rôles selon le cycle considéré.",
        },
      ],
    },
    {
      id: 'protozoaires',
      titre: 'Principaux protozoaires d’intérêt médical',
      blocs: [
        {
          type: 'tableau',
          titre: 'Principaux protozoaires pathogènes pour l’être humain',
          colonnes: ['Parasite', 'Pathologie', 'Mode de transmission principal'],
          lignes: [
            ['Plasmodium falciparum et autres espèces', 'Paludisme', 'Piqûre de moustique anophèle femelle infecté'],
            ['Toxoplasma gondii', 'Toxoplasmose', 'Ingestion de viande peu cuite ou de kystes environnementaux (contact avec des chats)'],
            ['Entamoeba histolytica', 'Amibiase', 'Voie féco-orale, ingestion de kystes'],
            ['Trichomonas vaginalis', 'Trichomonase urogénitale', 'Transmission sexuelle'],
            ['Leishmania', 'Leishmaniose (cutanée ou viscérale)', 'Piqûre de phlébotome'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Toxoplasmose et grossesse',
          texte:
            "La primo-infection toxoplasmique pendant la grossesse expose à un risque de toxoplasmose congénitale, potentiellement grave pour le fœtus (atteinte neurologique et oculaire). La sérologie toxoplasmique fait partie du bilan prénatal systématique chez la femme enceinte non immunisée en France.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Cycle du paludisme en bref',
          texte:
            "Après la piqûre infestante, les sporozoïtes rejoignent le foie (phase hépatique asymptomatique), puis les mérozoïtes libérés envahissent les hématies (phase érythrocytaire responsable des symptômes cliniques : fièvre, anémie). Certaines formes évoluent en gamétocytes, repris par un nouveau moustique lors d’une piqûre ultérieure, assurant la transmission sexuée chez l’anophèle.",
        },
      ],
    },
    {
      id: 'helminthes',
      titre: 'Principaux helminthes d’intérêt médical',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les helminthes pathogènes pour l’être humain se répartissent en trois grands groupes : les nématodes (vers ronds), les cestodes (vers plats segmentés) et les trématodes (vers plats non segmentés).",
        },
        {
          type: 'tableau',
          titre: 'Principaux helminthes pathogènes',
          colonnes: ['Groupe', 'Exemple', 'Mode de transmission'],
          lignes: [
            ['Nématode', 'Ascaris lumbricoides', 'Ingestion d’œufs présents dans le sol ou sur des aliments souillés'],
            ['Nématode', 'Enterobius vermicularis (oxyure)', 'Transmission directe interhumaine par voie féco-orale (auto-infestation fréquente)'],
            ['Cestode', 'Taenia saginata', 'Ingestion de viande bovine crue ou insuffisamment cuite contenant des larves'],
            ['Trématode', 'Schistosoma (bilharzie)', 'Pénétration transcutanée des larves lors d’un contact avec de l’eau douce contaminée'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le schistosome nécessite un mollusque hôte intermédiaire',
          texte:
            "Le cycle du schistosome fait intervenir un mollusque d’eau douce comme hôte intermédiaire, dans lequel se déroule la multiplication asexuée larvaire, avant libération des formes infestantes (cercaires) capables de pénétrer activement la peau humaine intacte.",
        },
      ],
    },
    {
      id: 'champignons',
      titre: 'Champignons d’intérêt médical',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les champignons pathogènes pour l’être humain se répartissent en deux grandes formes morphologiques : les levures, unicellulaires, et les champignons filamenteux, formés d’un réseau de filaments appelé mycélium.",
        },
        {
          type: 'comparaison',
          titre: 'Levures versus champignons filamenteux',
          gauche: {
            titre: 'Levures',
            points: [
              'Forme unicellulaire, arrondie ou ovalaire',
              'Multiplication par bourgeonnement',
              'Exemple : Candida albicans',
              'Exemple : Cryptococcus neoformans',
            ],
          },
          droite: {
            titre: 'Champignons filamenteux',
            points: [
              'Forme pluricellulaire, réseau de mycélium',
              'Croissance par élongation des filaments (hyphes)',
              'Exemple : dermatophytes (Trichophyton, Microsporum)',
              'Exemple : Aspergillus',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Dimorphisme fongique',
          texte:
            "Certains champignons, dits dimorphiques, changent de forme selon la température : filamenteux dans l’environnement à température ambiante, ils deviennent levuriformes dans l’organisme humain à trente-sept degrés Celsius. Cette caractéristique est retrouvée chez certains agents de mycoses profondes d’importation.",
        },
      ],
    },
    {
      id: 'mycoses',
      titre: 'Mycoses superficielles et profondes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les infections fongiques (mycoses) sont classiquement distinguées selon la profondeur tissulaire atteinte et le contexte immunitaire dans lequel elles surviennent.",
        },
        {
          type: 'tableau',
          titre: 'Exemples de mycoses selon leur atteinte',
          colonnes: ['Type', 'Localisation', 'Exemple'],
          lignes: [
            ['Mycose superficielle', 'Peau, phanères (ongles, cheveux), muqueuses', 'Dermatophytose (teigne), candidose cutanéo-muqueuse, pityriasis versicolor'],
            ['Mycose profonde (invasive)', 'Organes internes, sang', 'Aspergillose invasive, candidose systémique, cryptococcose neuroméningée'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Mycoses profondes et immunodépression',
          texte:
            "Les mycoses profondes surviennent le plus souvent sur un terrain d’immunodépression sévère (neutropénie prolongée, infection par le VIH à un stade avancé, traitement immunosuppresseur), à la différence des mycoses superficielles, beaucoup plus fréquentes et pouvant toucher des sujets immunocompétents.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Candida, un genre à la frontière',
          texte:
            "Candida albicans illustre bien la distinction clinique : commensal habituel des muqueuses digestives et vaginales, il peut causer une simple candidose cutanéo-muqueuse chez le sujet sain, mais aussi une candidose systémique invasive potentiellement grave chez le patient immunodéprimé ou porteur d’un dispositif intravasculaire.",
        },
      ],
    },
  ],
  pointsCles: [
    'Les protozoaires sont unicellulaires, les helminthes sont pluricellulaires ; les helminthes se répartissent en nématodes, cestodes et trématodes.',
    'L’hôte définitif héberge la reproduction sexuée du parasite ; l’hôte intermédiaire héberge sa multiplication asexuée ou son développement larvaire.',
    'L’anophèle est à la fois vecteur et hôte définitif du paludisme ; l’être humain en est l’hôte intermédiaire.',
    'La toxoplasmose expose à un risque de transmission congénitale grave, d’où le dépistage sérologique systématique chez la femme enceinte non immunisée.',
    'Le schistosome nécessite un mollusque d’eau douce comme hôte intermédiaire avant de pénétrer activement la peau humaine.',
    'Les levures (bourgeonnement) et les champignons filamenteux (mycélium) sont les deux grandes formes morphologiques fongiques.',
    'Les mycoses profondes surviennent surtout sur un terrain d’immunodépression, contrairement aux mycoses superficielles.',
  ],
  erreursFrequentes: [
    'Confondre hôte définitif (reproduction sexuée) et hôte intermédiaire (multiplication asexuée ou développement larvaire).',
    'Croire que l’être humain est l’hôte définitif du paludisme : c’est l’hôte intermédiaire, l’anophèle étant l’hôte définitif.',
    'Penser que tous les protozoaires se multiplient chez l’hôte de la même façon que les helminthes, incapables de multiplication chez l’être humain.',
    'Oublier que le schistosome pénètre activement par voie transcutanée, sans nécessiter d’ingestion.',
    'Confondre mycose superficielle (peau, phanères, souvent chez le sujet sain) et mycose profonde (organes internes, terrain immunodéprimé).',
    'Ignorer le caractère commensal habituel de Candida albicans, qui ne devient pathogène invasif que dans certaines circonstances.',
  ],
  mnemotechniques: [
    {
      moyen: '« Définitif fait l’amour, intermédiaire fait des petits sans mariage »',
      explication:
        'L’hôte définitif héberge la reproduction sexuée (fait l’amour), l’hôte intermédiaire héberge seulement la multiplication asexuée (fait des petits sans reproduction sexuée).',
    },
    {
      moyen: 'NCT pour les trois groupes d’helminthes',
      explication:
        'Nématodes (vers ronds), Cestodes (vers plats segmentés), Trématodes (vers plats non segmentés) : les trois grandes familles de vers pathogènes.',
    },
    {
      moyen: 'Levure bourgeonne, filament s’allonge',
      explication:
        'Moyen simple pour associer chaque forme fongique à son mode de croissance caractéristique.',
    },
  ],
  sources: [
    'Ripert, Épidémiologie et biologie des maladies parasitaires et fongiques',
    'Chabasse, Parasitoses et mycoses des régions tempérées et tropicales',
    'Prescott, Microbiologie',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue5-parasitologie-mycologie-fc-01',
      recto: 'Quelle est la différence fondamentale d’organisation entre protozoaire et helminthe ?',
      verso: 'Le protozoaire est unicellulaire, l’helminthe est pluricellulaire.',
      type: 'definition',
      tags: ['protozoaires', 'helminthes'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-02',
      recto: 'Définir l’hôte définitif.',
      verso: 'L’organisme chez lequel le parasite atteint sa maturité sexuelle et se reproduit sous forme sexuée.',
      type: 'definition',
      tags: ['cycle parasitaire'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-03',
      recto: 'Quel est l’hôte définitif du paludisme ? Quel est l’hôte intermédiaire ?',
      verso: 'L’anophèle femelle est l’hôte définitif ; l’être humain est l’hôte intermédiaire.',
      type: 'chiffre',
      tags: ['paludisme'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-04',
      recto: 'Par quelle voie se transmet principalement la toxoplasmose ?',
      verso: 'Par ingestion de viande peu cuite ou de kystes environnementaux, notamment au contact des chats.',
      type: 'clinique',
      tags: ['toxoplasmose'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-05',
      recto: 'Pourquoi la sérologie toxoplasmique est-elle systématique chez la femme enceinte non immunisée ?',
      verso: 'En raison du risque de toxoplasmose congénitale, pouvant entraîner une atteinte neurologique et oculaire du fœtus.',
      type: 'clinique',
      tags: ['toxoplasmose', 'grossesse'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-06',
      recto: 'Citer les trois groupes d’helminthes pathogènes pour l’être humain.',
      verso: 'Les nématodes, les cestodes et les trématodes.',
      type: 'classification',
      tags: ['helminthes'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-07',
      recto: 'Comment se fait la transmission du schistosome (bilharzie) ?',
      verso: 'Par pénétration transcutanée active des cercaires lors d’un contact avec de l’eau douce contaminée.',
      type: 'mecanisme',
      tags: ['schistosomiase'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-08',
      recto: 'Quel est l’hôte intermédiaire du schistosome ?',
      verso: 'Un mollusque d’eau douce, siège de la multiplication asexuée larvaire.',
      type: 'definition',
      tags: ['schistosomiase'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-09',
      recto: 'Comment se multiplient les levures ?',
      verso: 'Par bourgeonnement.',
      type: 'mecanisme',
      tags: ['champignons'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-10',
      recto: 'Qu’est-ce qu’un champignon dimorphique ?',
      verso: 'Un champignon capable de changer de forme selon la température : filamenteux dans l’environnement, levuriforme dans l’organisme à 37°C.',
      type: 'definition',
      tags: ['champignons'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-11',
      recto: 'Citer un exemple de mycose superficielle et un exemple de mycose profonde.',
      verso: 'La dermatophytose (teigne) pour une mycose superficielle ; l’aspergillose invasive pour une mycose profonde.',
      type: 'classification',
      tags: ['mycoses'],
    },
    {
      id: 'ue5-parasitologie-mycologie-fc-12',
      recto: 'Sur quel terrain surviennent principalement les mycoses profondes ?',
      verso: 'Sur un terrain d’immunodépression sévère (neutropénie prolongée, VIH avancé, traitement immunosuppresseur).',
      type: 'clinique',
      tags: ['mycoses'],
    },
  ],
  qcm: [
    {
      id: 'ue5-parasitologie-mycologie-qcm-01',
      enonce: 'Concernant les protozoaires et helminthes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les protozoaires sont des organismes unicellulaires.', vraie: true, justification: 'Exact, comme Plasmodium ou Toxoplasma gondii.' },
        { lettre: 'B', texte: 'Les helminthes se multiplient couramment de façon massive chez l’être humain.', vraie: false, justification: 'Les helminthes ne se multiplient généralement pas chez l’hôte humain ; la charge parasitaire dépend du nombre d’infestations.' },
        { lettre: 'C', texte: 'Le ténia est un exemple de cestode.', vraie: true, justification: 'Exact : c’est un ver plat segmenté.' },
        { lettre: 'D', texte: 'L’ascaris est un exemple de trématode.', vraie: false, justification: 'L’ascaris est un nématode (ver rond), pas un trématode.' },
        { lettre: 'E', texte: 'Entamoeba histolytica est un protozoaire responsable de l’amibiase.', vraie: true, justification: 'Exact, transmis par voie féco-orale.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer les trois groupes d’helminthes et le caractère unicellulaire des protozoaires.',
      difficulte: 2,
    },
    {
      id: 'ue5-parasitologie-mycologie-qcm-02',
      enonce: 'Concernant les notions d’hôte définitif et d’hôte intermédiaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’hôte définitif héberge la reproduction sexuée du parasite.', vraie: true, justification: 'Exact : c’est la définition de l’hôte définitif.' },
        { lettre: 'B', texte: 'L’être humain est l’hôte définitif du paludisme.', vraie: false, justification: 'L’être humain est l’hôte intermédiaire ; l’anophèle est l’hôte définitif.' },
        { lettre: 'C', texte: 'L’hôte intermédiaire héberge la multiplication asexuée ou le développement larvaire.', vraie: true, justification: 'Exact : c’est la définition de l’hôte intermédiaire.' },
        { lettre: 'D', texte: 'L’anophèle femelle est à la fois vecteur et hôte définitif du paludisme.', vraie: true, justification: 'Exact : elle transmet le parasite tout en hébergeant la reproduction sexuée.' },
        { lettre: 'E', texte: 'Un même organisme ne peut jamais être à la fois vecteur et hôte définitif.', vraie: false, justification: 'C’est le cas de l’anophèle dans le cycle du paludisme, qui cumule les deux rôles.' },
      ],
      correction: 'Réponses exactes : A, C et D. Le cycle du paludisme illustre bien ces notions fondamentales.',
      difficulte: 2,
    },
    {
      id: 'ue5-parasitologie-mycologie-qcm-03',
      enonce: 'Concernant la toxoplasmose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est due à un protozoaire, Toxoplasma gondii.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'La transmission peut se faire par ingestion de viande peu cuite.', vraie: true, justification: 'Exact, tout comme le contact avec des kystes environnementaux via les chats.' },
        { lettre: 'C', texte: 'La primo-infection pendant la grossesse est sans risque pour le fœtus.', vraie: false, justification: 'Elle expose au contraire à un risque de toxoplasmose congénitale, potentiellement grave.' },
        { lettre: 'D', texte: 'Le dépistage sérologique est systématique chez la femme enceinte non immunisée en France.', vraie: true, justification: 'Exact, dans le cadre du suivi prénatal.' },
        { lettre: 'E', texte: 'La toxoplasmose est due à un helminthe.', vraie: false, justification: 'La toxoplasmose est due à un protozoaire, pas à un helminthe.' },
      ],
      correction: 'Réponses exactes : A, B et D. La toxoplasmose congénitale est un enjeu majeur de santé publique.',
      difficulte: 1,
    },
    {
      id: 'ue5-parasitologie-mycologie-qcm-04',
      enonce: 'Concernant les helminthes et leurs cycles, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le schistosome pénètre l’organisme humain par voie transcutanée.', vraie: true, justification: 'Exact, via les cercaires libérées par le mollusque hôte intermédiaire.' },
        { lettre: 'B', texte: 'Le schistosome nécessite un mollusque d’eau douce comme hôte intermédiaire.', vraie: true, justification: 'Exact : c’est là que se déroule la multiplication asexuée larvaire.' },
        { lettre: 'C', texte: 'Taenia saginata se transmet par ingestion de viande bovine crue ou insuffisamment cuite.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'L’oxyurose se transmet exclusivement par piqûre d’insecte.', vraie: false, justification: 'L’oxyurose se transmet par voie féco-orale directe interhumaine, pas par piqûre d’insecte.' },
        { lettre: 'E', texte: 'Ascaris lumbricoides se transmet par ingestion d’œufs présents dans le sol ou sur des aliments souillés.', vraie: true, justification: 'Exact, c’est une contamination oro-fécale environnementale.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Chaque helminthe a un mode de transmission caractéristique à mémoriser.',
      difficulte: 2,
    },
    {
      id: 'ue5-parasitologie-mycologie-qcm-05',
      enonce: 'Concernant les champignons d’intérêt médical, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les levures se multiplient par bourgeonnement.', vraie: true, justification: 'Exact, comme Candida albicans.' },
        { lettre: 'B', texte: 'Les dermatophytes sont des levures.', vraie: false, justification: 'Les dermatophytes sont des champignons filamenteux, pas des levures.' },
        { lettre: 'C', texte: 'Un champignon dimorphique change de forme selon la température.', vraie: true, justification: 'Exact : filamenteux dans l’environnement, levuriforme à 37°C dans l’organisme.' },
        { lettre: 'D', texte: 'Aspergillus est un exemple de champignon filamenteux.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Cryptococcus neoformans est un champignon filamenteux.', vraie: false, justification: 'Cryptococcus neoformans est une levure, pas un champignon filamenteux.' },
      ],
      correction: 'Réponses exactes : A, C et D. Bien distinguer levures et champignons filamenteux à partir d’exemples précis.',
      difficulte: 2,
    },
    {
      id: 'ue5-parasitologie-mycologie-qcm-06',
      enonce: 'Concernant les mycoses superficielles et profondes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La dermatophytose est un exemple de mycose superficielle.', vraie: true, justification: 'Exact, elle touche la peau et les phanères.' },
        { lettre: 'B', texte: 'L’aspergillose invasive est un exemple de mycose superficielle.', vraie: false, justification: 'L’aspergillose invasive est une mycose profonde, touchant les organes internes.' },
        { lettre: 'C', texte: 'Les mycoses profondes surviennent principalement sur un terrain d’immunodépression.', vraie: true, justification: 'Exact, notamment en cas de neutropénie prolongée ou de traitement immunosuppresseur.' },
        { lettre: 'D', texte: 'Candida albicans est toujours strictement pathogène, jamais commensal.', vraie: false, justification: 'Candida albicans est un commensal habituel des muqueuses, qui ne devient pathogène que dans certaines circonstances.' },
        { lettre: 'E', texte: 'Les mycoses superficielles peuvent survenir chez des sujets immunocompétents.', vraie: true, justification: 'Exact, à la différence des mycoses profondes, plus rares en l’absence d’immunodépression.' },
      ],
      correction: 'Réponses exactes : A, C et E. Le terrain immunitaire du patient oriente fortement le type de mycose rencontré.',
      difficulte: 2,
    },
  ],
};
