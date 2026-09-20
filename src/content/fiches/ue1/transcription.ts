import type { Fiche } from '../../types';

export const ficheTranscription: Fiche = {
  id: 'ue1-transcription',
  ue: 'ue1',
  titre: 'La transcription',
  sousTitre: 'ARN polymérases, promoteur, facteurs généraux, initiation, élongation, terminaison',
  chapitre: 'Structure et expression du génome',
  ordre: 5,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'ARN polymérase',
    'promoteur',
    'boîte TATA',
    'facteur de transcription général',
    'initiation',
    'élongation',
    'terminaison',
  ],
  objectifs: [
    'Distinguer les ARN polymérases procaryotes et eucaryotes et leurs produits respectifs.',
    'Décrire l’organisation d’un promoteur eucaryote et procaryote.',
    'Décrire l’assemblage du complexe de préinitiation et le rôle des facteurs généraux de transcription.',
    'Expliquer les étapes de l’élongation de la transcription.',
    'Décrire les mécanismes de terminaison chez les procaryotes et les eucaryotes.',
    'Comparer transcription procaryote et transcription eucaryote.',
  ],
  sections: [
    {
      id: 'arn-polymerases',
      titre: 'Les ARN polymérases',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La transcription est la synthèse d’une molécule d’ARN à partir d’une matrice d’ADN, catalysée par une ARN polymérase. Contrairement aux ADN polymérases, les ARN polymérases n’ont pas besoin d’amorce pour initier la synthèse.',
        },
        {
          type: 'comparaison',
          titre: 'ARN polymérases procaryotes et eucaryotes',
          gauche: {
            titre: 'Procaryotes',
            points: [
              'Une seule ARN polymérase transcrit tous les types d’ARN',
              'L’enzyme cœur s’associe transitoirement à un facteur sigma pour reconnaître le promoteur',
              'Transcription et traduction couplées, en l’absence de noyau',
            ],
          },
          droite: {
            titre: 'Eucaryotes',
            points: [
              'Trois ARN polymérases nucléaires, chacune dédiée à une classe de gènes',
              'ARN polymérase I : ARN ribosomiques 28S, 18S et 5,8S',
              'ARN polymérase II : ARN messagers et la plupart des petits ARN nucléaires',
              'ARN polymérase III : ARN de transfert, ARN ribosomique 5S et quelques autres petits ARN',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Rétenir la polymérase II',
          texte:
            'L’ARN polymérase II, responsable de la synthèse des ARN messagers, est la plus étudiée : c’est elle qui porte le domaine C-terminal (CTD), une région répétée de son unité catalytique dont la phosphorylation régule les différentes étapes du cycle de transcription.',
        },
      ],
    },
    {
      id: 'promoteur',
      titre: 'Le promoteur',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le promoteur est la séquence d’ADN, en amont du site d’initiation de la transcription, qui dirige la fixation de l’ARN polymérase et détermine le point de départ et le sens de la transcription.',
        },
        {
          type: 'tableau',
          titre: 'Éléments de promoteur',
          colonnes: ['Organisme', 'Élément', 'Position approximative', 'Rôle'],
          lignes: [
            ['Procaryotes', 'Boîte -10 (boîte de Pribnow)', 'Environ dix paires de bases en amont du site d’initiation', 'Reconnue par le facteur sigma, favorise l’ouverture de la double hélice'],
            ['Procaryotes', 'Boîte -35', 'Environ trente-cinq paires de bases en amont', 'Reconnue par le facteur sigma, contribue à la fixation initiale de l’ARN polymérase'],
            ['Eucaryotes (promoteur de l’ARN polymérase II)', 'Boîte TATA', 'Environ vingt-cinq à trente paires de bases en amont', 'Site de fixation de la protéine TBP, ancrage du complexe de préinitiation'],
            ['Eucaryotes', 'Élément initiateur et éléments plus en amont', 'Autour du site d’initiation et au-delà', 'Contribuent au positionnement précis du site de départ et au niveau basal de transcription'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Promoteurs sans boîte TATA',
          texte:
            'Tous les promoteurs eucaryotes ne possèdent pas de boîte TATA : de nombreux gènes, notamment des gènes de ménage, sont dépourvus de cette séquence et utilisent d’autres éléments de reconnaissance pour positionner le complexe de préinitiation.',
        },
      ],
    },
    {
      id: 'initiation',
      titre: 'Les facteurs généraux de transcription et l’initiation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Chez les eucaryotes, l’initiation de la transcription par l’ARN polymérase II nécessite l’assemblage préalable d’un complexe de préinitiation, formé par l’ARN polymérase et plusieurs facteurs généraux de transcription, désignés TFII suivis d’une lettre.',
        },
        {
          type: 'etapes',
          titre: 'Assemblage du complexe de préinitiation',
          etapes: [
            {
              titre: 'Reconnaissance du promoteur',
              detail: 'Le facteur TFIID, via sa sous-unité TBP (protéine de liaison à la boîte TATA), se fixe sur le promoteur et amorce l’assemblage du complexe.',
            },
            {
              titre: 'Recrutement des autres facteurs',
              detail: 'TFIIA, TFIIB, TFIIF, TFIIE et TFIIH sont recrutés successivement, ainsi que l’ARN polymérase II elle-même.',
            },
            {
              titre: 'Ouverture de la double hélice',
              detail: 'L’activité hélicase de TFIIH permet de dérouler localement l’ADN autour du site d’initiation, formant le complexe ouvert.',
            },
            {
              titre: 'Synthèse des premiers nucléotides et échappée du promoteur',
              detail: 'L’ARN polymérase synthétise les premiers ribonucléotides puis se libère du complexe de préinitiation pour entrer en phase d’élongation.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'TFIIH, un facteur à deux fonctions',
          texte:
            'TFIIH possède une double activité : une activité hélicase qui participe à l’ouverture de la double hélice, et une activité kinase qui phosphoryle le domaine C-terminal de l’ARN polymérase II, signal nécessaire au passage à l’élongation.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Procaryotes : rôle du facteur sigma',
          texte:
            'Chez les procaryotes, l’initiation est plus simple : le facteur sigma, associé à l’enzyme cœur, permet la reconnaissance spécifique du promoteur. Après l’ouverture de l’ADN et le début de la synthèse, le facteur sigma se dissocie, et l’enzyme cœur poursuit seule l’élongation.',
        },
      ],
    },
    {
      id: 'elongation',
      titre: 'L’élongation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Au cours de l’élongation, l’ARN polymérase progresse le long du brin matrice, dans le sens 3′ vers 5′, et synthétise un ARN complémentaire dans le sens 5′ vers 3′, identique en séquence au brin non matrice, appelé brin codant, à l’exception du remplacement de la thymine par l’uracile.',
        },
        {
          type: 'liste',
          items: [
            'Une courte région d’ADN, appelée bulle de transcription, reste localement déroulée autour du site actif de l’enzyme.',
            'L’ARN néosynthétisé forme transitoirement un hybride ARN-ADN avec le brin matrice, avant de s’en détacher en aval.',
            'La topologie de l’ADN en amont et en aval de l’enzyme est réajustée par des topoisomérases, qui relâchent les contraintes de surenroulement générées par la progression de la polymérase.',
          ],
        },
        {
          type: 'definition',
          terme: 'Brin matrice et brin codant',
          definition:
            'Le brin matrice, ou brin transcrit, sert de modèle à la synthèse de l’ARN, lu dans le sens 3′ vers 5′. Le brin codant, ou brin non transcrit, a une séquence identique à celle de l’ARN produit, à l’exception de l’uracile remplaçant la thymine.',
        },
      ],
    },
    {
      id: 'terminaison',
      titre: 'La terminaison',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La terminaison de la transcription met fin à la synthèse d’ARN et libère l’ARN polymérase de la matrice d’ADN. Ses mécanismes diffèrent entre procaryotes et eucaryotes.',
        },
        {
          type: 'comparaison',
          titre: 'Mécanismes de terminaison',
          gauche: {
            titre: 'Procaryotes',
            points: [
              'Terminaison intrinsèque : une structure en tige-boucle suivie d’une série d’uraciles déstabilise l’hybride ARN-ADN et provoque la dissociation de l’enzyme',
              'Terminaison dépendante d’un facteur protéique qui rattrape l’ARN polymérase et provoque son décrochage',
            ],
          },
          droite: {
            titre: 'Eucaryotes (ARN polymérase II)',
            points: [
              'Terminaison couplée à la reconnaissance d’un signal de polyadénylation sur l’ARN naissant',
              'Clivage de l’ARN au niveau de ce signal, suivi de la dissociation de l’ARN polymérase en aval',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la terminaison intrinsèque',
          texte:
            'La structure en tige-boucle qui se forme sur l’ARN naissant, suivie d’une région riche en uraciles appariés à des adénines dans l’hybride ARN-ADN, est instable car les paires A-U sont les moins stables : cette faiblesse favorise la dissociation spontanée de l’ARN polymérase.',
        },
      ],
    },
    {
      id: 'procaryote-eucaryote',
      titre: 'Différences entre transcription procaryote et eucaryote',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Au-delà du nombre d’ARN polymérases, plusieurs différences distinguent la transcription chez les procaryotes et chez les eucaryotes.',
        },
        {
          type: 'tableau',
          titre: 'Transcription procaryote et eucaryote',
          colonnes: ['Caractéristique', 'Procaryotes', 'Eucaryotes'],
          lignes: [
            ['Nombre d’ARN polymérases', 'Une seule', 'Trois, dédiées à des classes différentes de gènes'],
            ['Compartimentation', 'Absence de noyau, transcription et traduction couplées', 'Transcription nucléaire, traduction cytoplasmique, séparées dans le temps et l’espace'],
            ['Maturation de l’ARN messager', 'Généralement absente ou minime', 'Coiffe, épissage et polyadénylation avant export nucléaire'],
            ['Complexité du promoteur', 'Deux boîtes principales, -10 et -35', 'Combinaison de plusieurs éléments et de nombreux facteurs de transcription'],
            ['Organisation en opéron', 'Fréquente, plusieurs gènes sous un même promoteur', 'Rare, transcription le plus souvent monocistronique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Un chiffre à retenir',
          texte:
            'Les eucaryotes possèdent trois ARN polymérases nucléaires distinctes, contre une seule chez les procaryotes : ce chiffre de trois est un grand classique des questions de cours.',
        },
      ],
    },
  ],
  pointsCles: [
    'Les procaryotes n’ont qu’une seule ARN polymérase ; les eucaryotes en ont trois, I pour les ARN ribosomiques majeurs, II pour les ARN messagers, III pour les ARN de transfert et l’ARN ribosomique 5S.',
    'Le promoteur eucaryote de l’ARN polymérase II comporte souvent une boîte TATA, reconnue par la protéine TBP au sein du facteur TFIID.',
    'L’initiation eucaryote nécessite l’assemblage d’un complexe de préinitiation avec les facteurs généraux TFIIA à TFIIH.',
    'TFIIH possède à la fois une activité hélicase, pour ouvrir l’ADN, et une activité kinase, pour phosphoryler le domaine C-terminal de l’ARN polymérase II.',
    'L’ARN est synthétisé dans le sens 5′ vers 3′, en lisant le brin matrice dans le sens 3′ vers 5′.',
    'La terminaison procaryote peut être intrinsèque, par une structure en tige-boucle, ou dépendante d’un facteur protéique ; la terminaison eucaryote est couplée à la polyadénylation.',
  ],
  erreursFrequentes: [
    'Croire que les eucaryotes n’utilisent qu’une seule ARN polymérase, comme les procaryotes : ils en possèdent trois, chacune dédiée à une classe de gènes.',
    'Confondre le brin matrice, lu par la polymérase, et le brin codant, de séquence identique à celle de l’ARN produit.',
    'Oublier que l’ARN polymérase II synthétise également la plupart des petits ARN nucléaires, et pas uniquement les ARN messagers.',
    'Penser que tous les promoteurs eucaryotes possèdent une boîte TATA : de nombreux gènes en sont dépourvus.',
    'Confondre le rôle hélicase et le rôle kinase de TFIIH, qui sont deux activités bien distinctes du même facteur.',
  ],
  mnemotechniques: [
    {
      moyen: 'I, II, III comme R, M, T',
      explication: 'ARN polymérase I pour les ARN Ribosomiques majeurs, II pour les ARN Messagers, III pour les ARN de Transfert : l’ordre des chiffres romains suit l’ordre alphabétique de leurs initiales R, M, T.',
    },
    {
      moyen: 'TBP se lie à TATA',
      explication: 'La protéine de liaison à la boîte TATA, TBP, au sein du facteur TFIID, est la première à reconnaître le promoteur et amorcer l’assemblage du complexe de préinitiation.',
    },
    {
      moyen: 'Sigma s’en va',
      explication: 'Chez les procaryotes, le facteur sigma sert uniquement à la reconnaissance du promoteur et se dissocie une fois l’élongation engagée.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Lehninger, Principes de biochimie, 8e édition',
    'Watson, Biologie moléculaire du gène, 7e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-transcription-fc-01',
      recto: 'Combien d’ARN polymérases nucléaires possèdent les cellules eucaryotes ?',
      verso: 'Trois : ARN polymérase I, II et III.',
      type: 'chiffre',
      tags: ['ARN polymérase'],
    },
    {
      id: 'ue1-transcription-fc-02',
      recto: 'Quel type d’ARN est synthétisé par l’ARN polymérase II ?',
      verso: 'Les ARN messagers et la plupart des petits ARN nucléaires.',
      type: 'classification',
      tags: ['ARN polymérase II'],
    },
    {
      id: 'ue1-transcription-fc-03',
      recto: 'Quelle protéine reconnaît la boîte TATA du promoteur eucaryote ?',
      verso: 'La protéine TBP, sous-unité du facteur général de transcription TFIID.',
      type: 'mecanisme',
      tags: ['promoteur'],
    },
    {
      id: 'ue1-transcription-fc-04',
      recto: 'Quelles sont les deux activités enzymatiques de TFIIH ?',
      verso: 'Une activité hélicase, qui ouvre la double hélice, et une activité kinase, qui phosphoryle le domaine C-terminal de l’ARN polymérase II.',
      type: 'mecanisme',
      tags: ['TFIIH'],
    },
    {
      id: 'ue1-transcription-fc-05',
      recto: 'Dans quel sens l’ARN polymérase lit-elle le brin matrice ?',
      verso: 'Dans le sens 3′ vers 5′, tout en synthétisant l’ARN dans le sens 5′ vers 3′.',
      type: 'mecanisme',
      tags: ['élongation'],
    },
    {
      id: 'ue1-transcription-fc-06',
      recto: 'Quelle est la différence de séquence entre le brin codant et l’ARN produit ?',
      verso: 'Le brin codant contient de la thymine là où l’ARN produit contient de l’uracile ; sinon leurs séquences sont identiques.',
      type: 'definition',
      tags: ['brin codant'],
    },
    {
      id: 'ue1-transcription-fc-07',
      recto: 'Quel facteur permet au cœur de l’ARN polymérase bactérienne de reconnaître spécifiquement le promoteur ?',
      verso: 'Le facteur sigma.',
      type: 'mecanisme',
      tags: ['procaryote'],
    },
    {
      id: 'ue1-transcription-fc-08',
      recto: 'Que se passe-t-il au facteur sigma une fois l’élongation engagée ?',
      verso: 'Il se dissocie de l’enzyme cœur, qui poursuit seule l’élongation.',
      type: 'mecanisme',
      tags: ['procaryote'],
    },
    {
      id: 'ue1-transcription-fc-09',
      recto: 'Décrire la terminaison intrinsèque bactérienne.',
      verso: 'Une structure en tige-boucle sur l’ARN, suivie d’une série d’uraciles appariés à des adénines, déstabilise l’hybride ARN-ADN et provoque le décrochage de l’enzyme.',
      type: 'mecanisme',
      tags: ['terminaison'],
    },
    {
      id: 'ue1-transcription-fc-10',
      recto: 'À quel signal est couplée la terminaison de la transcription par l’ARN polymérase II ?',
      verso: 'Au signal de polyadénylation reconnu sur l’ARN naissant, qui déclenche son clivage et la dissociation de la polymérase en aval.',
      type: 'mecanisme',
      tags: ['terminaison'],
    },
    {
      id: 'ue1-transcription-fc-11',
      recto: 'Qu’est-ce qu’un opéron ?',
      verso: 'Un groupe de gènes placés sous le contrôle d’un même promoteur, transcrits en un seul ARN messager polycistronique, fréquent chez les procaryotes.',
      type: 'definition',
      tags: ['opéron'],
    },
    {
      id: 'ue1-transcription-fc-12',
      recto: 'Pourquoi la transcription et la traduction sont-elles couplées chez les procaryotes ?',
      verso: 'Parce qu’en l’absence de noyau, l’ARN messager naissant est immédiatement accessible aux ribosomes dans le même compartiment cellulaire.',
      type: 'mecanisme',
      tags: ['procaryote'],
    },
  ],
  qcm: [
    {
      id: 'ue1-transcription-qcm-01',
      enonce: 'Concernant les ARN polymérases, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les eucaryotes possèdent trois ARN polymérases nucléaires.',
          vraie: true,
          justification: 'Exact : ARN polymérase I, II et III.',
        },
        {
          lettre: 'B',
          texte: 'L’ARN polymérase I synthétise les ARN messagers.',
          vraie: false,
          justification: 'Faux : elle synthétise les grands ARN ribosomiques ; les ARN messagers sont synthétisés par l’ARN polymérase II.',
        },
        {
          lettre: 'C',
          texte: 'L’ARN polymérase III synthétise les ARN de transfert.',
          vraie: true,
          justification: 'Exact, ainsi que l’ARN ribosomique 5S.',
        },
        {
          lettre: 'D',
          texte: 'Les ARN polymérases nécessitent une amorce pour initier la synthèse.',
          vraie: false,
          justification: 'Faux : contrairement aux ADN polymérases, les ARN polymérases initient la synthèse sans amorce.',
        },
        {
          lettre: 'E',
          texte: 'Les procaryotes possèdent une seule ARN polymérase pour tous les types d’ARN.',
          vraie: true,
          justification: 'Contrairement aux eucaryotes qui possèdent trois ARN polymérases spécialisées, les procaryotes n’ont qu’une seule enzyme qui transcrit indifféremment les ARN messagers, ribosomiques et de transfert.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien associer chaque ARN polymérase eucaryote à sa classe de gènes.',
      difficulte: 2,
    },
    {
      id: 'ue1-transcription-qcm-02',
      enonce: 'Concernant le promoteur, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La boîte TATA est reconnue par la protéine TBP.',
          vraie: true,
          justification: 'La TATA-binding protein (TBP), sous-unité du facteur TFIID, se lie spécifiquement à la boîte TATA et courbe l’ADN, initiant l’assemblage du complexe de préinitiation.',
        },
        {
          lettre: 'B',
          texte: 'Tous les promoteurs eucaryotes possèdent une boîte TATA.',
          vraie: false,
          justification: 'Faux : de nombreux promoteurs, notamment de gènes de ménage, en sont dépourvus.',
        },
        {
          lettre: 'C',
          texte: 'Les boîtes -10 et -35 sont des éléments du promoteur bactérien.',
          vraie: true,
          justification: 'Ces deux courtes séquences consensus, situées en amont du site d’initiation, sont reconnues par le facteur sigma de l’ARN polymérase bactérienne pour positionner correctement l’enzyme.',
        },
        {
          lettre: 'D',
          texte: 'La boîte -10 est reconnue par le facteur sigma.',
          vraie: true,
          justification: 'Le facteur sigma, associé à l’ARN polymérase bactérienne centrale, reconnaît spécifiquement la boîte -10 et facilite l’ouverture locale de la double hélice à cet endroit.',
        },
        {
          lettre: 'E',
          texte: 'Le promoteur est situé exclusivement en aval du site d’initiation de la transcription.',
          vraie: false,
          justification: 'Faux : le promoteur est situé essentiellement en amont du site d’initiation.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir que la boîte TATA n’est pas universelle chez les eucaryotes.',
      difficulte: 2,
    },
    {
      id: 'ue1-transcription-qcm-03',
      enonce: 'Concernant l’initiation de la transcription chez les eucaryotes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle nécessite l’assemblage d’un complexe de préinitiation.',
          vraie: true,
          justification: 'L’ARN polymérase II eucaryote ne peut se positionner correctement sur le promoteur qu’après l’assemblage successif de plusieurs facteurs généraux de transcription formant ce complexe.',
        },
        {
          lettre: 'B',
          texte: 'TFIID est le premier facteur à se fixer au promoteur.',
          vraie: true,
          justification: 'Exact, via sa sous-unité TBP.',
        },
        {
          lettre: 'C',
          texte: 'TFIIH possède une activité hélicase.',
          vraie: true,
          justification: 'Exact, qui participe à l’ouverture de la double hélice.',
        },
        {
          lettre: 'D',
          texte: 'La phosphorylation du domaine C-terminal de l’ARN polymérase II est réalisée par TFIIA.',
          vraie: false,
          justification: 'Faux : c’est TFIIH, par son activité kinase, qui phosphoryle ce domaine.',
        },
        {
          lettre: 'E',
          texte: 'L’échappée du promoteur marque le passage à l’élongation.',
          vraie: true,
          justification: 'Une fois libérée des facteurs généraux de transcription qui l’ont positionnée sur le promoteur, l’ARN polymérase II quitte cette région et entre dans la phase d’élongation proprement dite.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Ne pas confondre les rôles respectifs de TFIID et TFIIH.',
      difficulte: 2,
    },
    {
      id: 'ue1-transcription-qcm-04',
      enonce: 'Concernant l’élongation de la transcription, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ARN est synthétisé dans le sens 5′ vers 3′.',
          vraie: true,
          justification: 'Comme toute polymérase d’acide nucléique, l’ARN polymérase ajoute chaque nouveau ribonucléotide sur l’extrémité 3′ hydroxyle libre du brin en cours de synthèse.',
        },
        {
          lettre: 'B',
          texte: 'Le brin matrice est lu par l’ARN polymérase dans le sens 5′ vers 3′.',
          vraie: false,
          justification: 'Faux : le brin matrice est lu dans le sens 3′ vers 5′.',
        },
        {
          lettre: 'C',
          texte: 'Un hybride ARN-ADN se forme transitoirement au sein de la bulle de transcription.',
          vraie: true,
          justification: 'Dans la région où l’ADN est momentanément déroulé, le nouvel ARN reste apparié quelques nucléotides à son brin matrice, avant de s’en détacher au fur et à mesure de la progression de l’enzyme.',
        },
        {
          lettre: 'D',
          texte: 'Le brin codant a une séquence identique à celle de l’ARN produit, à l’exception de l’uracile remplaçant la thymine.',
          vraie: true,
          justification: 'Puisque l’ARN polymérase copie le brin matrice par complémentarité, l’ARN produit reproduit exactement la séquence du brin non transcrit, appelé brin codant, à la substitution près de la thymine par l’uracile.',
        },
        {
          lettre: 'E',
          texte: 'Les topoisomérases n’interviennent pas pendant l’élongation de la transcription.',
          vraie: false,
          justification: 'Faux : elles relâchent les contraintes de surenroulement générées par la progression de l’ARN polymérase.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le sens de lecture du brin matrice est un piège classique.',
      difficulte: 2,
    },
    {
      id: 'ue1-transcription-qcm-05',
      enonce: 'Concernant la terminaison de la transcription, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La terminaison intrinsèque bactérienne repose sur une structure en tige-boucle.',
          vraie: true,
          justification: 'Une séquence palindromique riche en G-C nouvellement transcrite se replie sur elle-même en tige-boucle, ce qui déstabilise mécaniquement le complexe de transcription et provoque son décrochage.',
        },
        {
          lettre: 'B',
          texte: 'Chez les eucaryotes, la terminaison de l’ARN polymérase II est couplée à un signal de polyadénylation.',
          vraie: true,
          justification: 'Le clivage du transcrit au niveau du signal de polyadénylation déclenche l’arrêt de la transcription par l’ARN polymérase II, les deux étapes étant physiquement liées.',
        },
        {
          lettre: 'C',
          texte: 'La terminaison intrinsèque bactérienne nécessite obligatoirement un facteur protéique dédié.',
          vraie: false,
          justification: 'Faux : c’est justement la caractéristique de la terminaison intrinsèque de se passer d’un facteur protéique spécifique, contrairement à l’autre voie de terminaison procaryote.',
        },
        {
          lettre: 'D',
          texte: 'Les paires A-U de la région riche en uraciles sont particulièrement stables, ce qui retient l’ARN polymérase.',
          vraie: false,
          justification: 'Faux : les paires A-U sont au contraire peu stables, ce qui favorise le décrochage de l’enzyme.',
        },
        {
          lettre: 'E',
          texte: 'Les mécanismes de terminaison diffèrent entre procaryotes et eucaryotes.',
          vraie: true,
          justification: 'Les bactéries terminent la transcription par une structure en tige-boucle ou par le facteur rho, tandis que les eucaryotes couplent la terminaison de l’ARN polymérase II au clivage du signal de polyadénylation.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. La faible stabilité des paires A-U explique le mécanisme de terminaison intrinsèque.',
      difficulte: 2,
    },
    {
      id: 'ue1-transcription-qcm-06',
      enonce: 'Concernant les différences entre transcription procaryote et eucaryote, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’organisation en opéron est fréquente chez les procaryotes.',
          vraie: true,
          justification: 'Regrouper plusieurs gènes fonctionnellement liés sous un même promoteur permet aux bactéries de les transcrire en un seul ARN messager polycistronique et de coordonner leur expression.',
        },
        {
          lettre: 'B',
          texte: 'La transcription eucaryote est habituellement polycistronique.',
          vraie: false,
          justification: 'Faux : elle est le plus souvent monocistronique, un ARN messager par gène.',
        },
        {
          lettre: 'C',
          texte: 'Chez les eucaryotes, la transcription et la traduction sont séparées dans l’espace cellulaire.',
          vraie: true,
          justification: 'Exact, en raison de l’existence du noyau.',
        },
        {
          lettre: 'D',
          texte: 'L’ARN messager eucaryote subit une maturation avant d’être traduit.',
          vraie: true,
          justification: 'Exact : coiffe, épissage, polyadénylation.',
        },
        {
          lettre: 'E',
          texte: 'Le promoteur bactérien est en règle générale plus complexe que le promoteur eucaryote.',
          vraie: false,
          justification: 'Faux : c’est l’inverse, le promoteur eucaryote combine généralement davantage d’éléments et de facteurs.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. La compartimentation nucléaire est la clé de nombreuses différences entre procaryotes et eucaryotes.',
      difficulte: 2,
    },
  ],
};
