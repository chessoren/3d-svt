import type { Fiche } from '../../types';

export const ficheMitochondrie: Fiche = {
  id: 'biocell-mitochondrie',
  ue: 'biocell',
  titre: 'La mitochondrie',
  sousTitre: 'Structure, ADN mitochondrial, importation des protéines, dynamique, hérédité maternelle et théorie endosymbiotique',
  chapitre: 'Dynamique cellulaire',
  ordre: 9,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'mitochondrie',
    'ADN mitochondrial',
    'membrane interne',
    'crête mitochondriale',
    'importation protéique',
    'fusion-fission',
    'hérédité maternelle',
    'théorie endosymbiotique',
  ],
  objectifs: [
    'Décrire la structure compartimentée de la mitochondrie.',
    'Décrire les caractéristiques de l’ADN mitochondrial et son mode de transmission.',
    'Expliquer le principe de l’importation des protéines nucléaires codées vers la mitochondrie.',
    'Décrire la dynamique de fusion et de fission mitochondriale et son intérêt fonctionnel.',
    'Présenter les arguments de la théorie endosymbiotique et les grands principes des cytopathies mitochondriales.',
  ],
  sections: [
    {
      id: 'structure-mitochondrie',
      titre: 'Structure de la mitochondrie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La mitochondrie est un organite cytoplasmique délimité par deux membranes, siège principal de la production d’ATP par phosphorylation oxydative. Son organisation en compartiments distincts est directement liée à sa fonction bioénergétique.",
        },
        {
          type: 'tableau',
          titre: 'Les compartiments mitochondriaux',
          colonnes: ['Compartiment', 'Caractéristique principale'],
          lignes: [
            ['Membrane externe', 'Perméable aux petites molécules grâce à des protéines porines (canaux VDAC)'],
            ['Espace intermembranaire', 'Concentration protonique élevée lors du fonctionnement de la chaîne respiratoire'],
            ['Membrane interne', 'Très repliée en crêtes, imperméable aux ions, siège de la chaîne respiratoire et de l’ATP synthase'],
            ['Matrice mitochondriale', 'Contient l’ADN mitochondrial, les ribosomes mitochondriaux et les enzymes du cycle de Krebs'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Le rôle des crêtes mitochondriales',
          texte:
            "Les crêtes, replis de la membrane interne, augmentent considérablement la surface disponible pour la chaîne respiratoire et l’ATP synthase, ce qui accroît la capacité de production d’ATP par unité de volume mitochondrial.",
        },
        {
          type: 'definition',
          terme: 'ATP synthase',
          definition:
            "Complexe enzymatique de la membrane interne mitochondriale qui utilise le gradient de protons établi par la chaîne respiratoire pour synthétiser de l’ATP à partir d’ADP et de phosphate inorganique.",
        },
      ],
    },
    {
      id: 'adn-mitochondrial',
      titre: 'L’ADN mitochondrial',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La matrice mitochondriale contient un génome propre, l’ADN mitochondrial, distinct de l’ADN nucléaire, dont l’organisation rappelle celle du génome bactérien : c’est l’un des principaux arguments de la théorie endosymbiotique.",
        },
        {
          type: 'liste',
          items: [
            "L’ADN mitochondrial humain est une molécule circulaire, présente en plusieurs copies par mitochondrie, et chaque cellule contient de nombreuses mitochondries.",
            "Il code un nombre restreint de protéines, essentiellement des sous-unités de la chaîne respiratoire, ainsi que les ARN ribosomiques et les ARN de transfert nécessaires à leur traduction dans la matrice.",
            "La grande majorité des protéines mitochondriales sont en réalité codées par des gènes nucléaires, synthétisées dans le cytosol, puis importées secondairement dans la mitochondrie.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un génome minoritaire mais essentiel',
          texte:
            "Bien que l’ADN mitochondrial ne code qu’une faible proportion des protéines mitochondriales, ces dernières sont des sous-unités indispensables des complexes de la chaîne respiratoire, ce qui explique la gravité potentielle des mutations de l’ADN mitochondrial.",
        },
      ],
    },
    {
      id: 'importation-proteique',
      titre: 'L’importation des protéines mitochondriales',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les protéines mitochondriales codées par le noyau sont synthétisées par des ribosomes libres du cytosol, puis importées dans la mitochondrie grâce à une séquence d’adressage mitochondrial, le plus souvent une présequence N-terminale reconnue par des complexes de translocation spécifiques.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de l’importation mitochondriale',
          etapes: [
            {
              titre: 'Maintien en conformation dépliée',
              detail: "Des chaperonnes cytosoliques maintiennent la protéine à importer dans un état déplié, compatible avec sa translocation.",
            },
            {
              titre: 'Passage par le complexe TOM',
              detail: "La protéine traverse la membrane externe par le complexe TOM (translocase de la membrane externe).",
            },
            {
              titre: 'Passage par le complexe TIM',
              detail: "Elle traverse ensuite la membrane interne par un complexe TIM (translocase de la membrane interne), en utilisant l’énergie du potentiel de membrane.",
            },
            {
              titre: 'Repliement dans la matrice',
              detail: "Dans la matrice, la présequence est clivée par une peptidase spécifique, et des chaperonnes matricielles assistent le repliement final de la protéine.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un processus post-traductionnel',
          texte:
            "À la différence de l’adressage cotraductionnel au réticulum endoplasmique, l’importation des protéines mitochondriales est post-traductionnelle : la protéine est entièrement synthétisée dans le cytosol avant d’être importée.",
        },
      ],
    },
    {
      id: 'dynamique-mitochondriale',
      titre: 'Dynamique de fusion et de fission',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les mitochondries forment un réseau dynamique, en perpétuel remodelage par des évènements de fusion et de fission, contrôlés par des GTPases spécifiques, ce qui contribue au maintien d’une population mitochondriale fonctionnelle.",
        },
        {
          type: 'liste',
          items: [
            "La fusion mitochondriale permet le mélange du contenu matriciel et de l’ADN mitochondrial entre mitochondries voisines, ce qui limite l’accumulation locale de mutations et compense d’éventuels déficits partiels.",
            "La fission mitochondriale permet la multiplication du nombre de mitochondries, leur redistribution lors de la division cellulaire, et l’isolement de portions endommagées en vue de leur élimination.",
            "Les mitochondries fortement endommagées, isolées par fission, peuvent être éliminées par un mécanisme d’autophagie sélective appelé mitophagie.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un équilibre finement régulé',
          texte:
            "L’équilibre entre fusion et fission détermine la morphologie du réseau mitochondrial, allant d’un réseau très fusionné et allongé à des mitochondries fragmentées et individualisées, selon l’état métabolique et le stress subi par la cellule.",
        },
      ],
    },
    {
      id: 'heredite-maternelle',
      titre: 'Hérédité maternelle de l’ADN mitochondrial',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’ADN mitochondrial est transmis selon un mode d’hérédité particulier, dit maternel : à la fécondation, les mitochondries de l’ovocyte peuplent très majoritairement le zygote, tandis que les mitochondries apportées par le spermatozoïde sont éliminées ou très minoritaires.",
        },
        {
          type: 'definition',
          terme: 'Hétéroplasmie',
          definition:
            "Coexistence, au sein d’une même cellule, de plusieurs versions de l’ADN mitochondrial (normal et muté), par opposition à l’homoplasmie, où toutes les copies sont identiques.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Conséquences pour les maladies mitochondriales',
          texte:
            "L’hérédité maternelle explique qu’une mère porteuse d’une mutation de l’ADN mitochondrial transmette cette mutation à l’ensemble de sa descendance, alors qu’un père porteur ne la transmet en principe pas. La sévérité clinique dépend en outre de la proportion de copies mutées (charge mutationnelle) dans les tissus concernés, en raison de l’hétéroplasmie.",
        },
      ],
    },
    {
      id: 'endosymbiose-cytopathies',
      titre: 'Théorie endosymbiotique et cytopathies mitochondriales',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La théorie endosymbiotique propose que la mitochondrie descende d’une bactérie aérobie ancestrale, phagocytée par une cellule eucaryote primitive et devenue, au cours de l’évolution, un organite intégré et dépendant du reste de la cellule.",
        },
        {
          type: 'tableau',
          titre: 'Arguments en faveur de la théorie endosymbiotique',
          colonnes: ['Argument', 'Observation'],
          lignes: [
            ['Double membrane', 'Compatible avec une origine par phagocytose d’une bactérie par une cellule ancestrale'],
            ['ADN mitochondrial circulaire', 'Comparable à celui d’un chromosome bactérien'],
            ['Ribosomes mitochondriaux', 'De taille et de sensibilité aux antibiotiques proches des ribosomes bactériens'],
            ['Division mitochondriale', 'Par fission, comparable à la division bactérienne, indépendante du cycle cellulaire'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Cytopathies mitochondriales',
          texte:
            "Les cytopathies mitochondriales regroupent des maladies dues à des anomalies de l’ADN mitochondrial ou de gènes nucléaires codant des protéines mitochondriales, altérant la phosphorylation oxydative. Elles touchent préférentiellement les tissus les plus consommateurs d’énergie, comme le muscle et le système nerveux central, d’où des tableaux cliniques associant souvent atteinte musculaire et neurologique.",
        },
      ],
    },
  ],
  pointsCles: [
    "La mitochondrie comporte quatre compartiments : membrane externe, espace intermembranaire, membrane interne (crêtes) et matrice.",
    "L’ADN mitochondrial est circulaire, présent en plusieurs copies, et code un nombre restreint de protéines de la chaîne respiratoire.",
    "L’importation des protéines mitochondriales codées par le noyau est post-traductionnelle, via les complexes TOM puis TIM.",
    "La fusion mitochondriale mélange le contenu matriciel entre mitochondries ; la fission permet leur multiplication et l’élimination des portions endommagées.",
    "L’ADN mitochondrial est transmis selon un mode d’hérédité maternelle.",
    "L’hétéroplasmie désigne la coexistence de copies normales et mutées d’ADN mitochondrial dans une même cellule.",
    "La théorie endosymbiotique s’appuie sur la double membrane, l’ADN circulaire et les ribosomes de type bactérien des mitochondries.",
  ],
  erreursFrequentes: [
    "Croire que la majorité des protéines mitochondriales sont codées par l’ADN mitochondrial : c’est l’inverse, la plupart sont codées par le noyau.",
    "Confondre importation mitochondriale (post-traductionnelle) et translocation vers le réticulum endoplasmique (cotraductionnelle).",
    "Penser que la fission mitochondriale mélange le contenu matriciel entre mitochondries : c’est la fusion qui a ce rôle.",
    "Oublier le caractère maternel de la transmission de l’ADN mitochondrial, à la différence de l’ADN nucléaire, transmis par les deux parents.",
    "Confondre hétéroplasmie et homoplasmie : l’hétéroplasmie désigne la coexistence de plusieurs versions d’ADN mitochondrial dans une même cellule.",
    "Oublier que la division mitochondriale se fait par fission, indépendamment directement du cycle cellulaire nucléaire.",
  ],
  mnemotechniques: [
    {
      moyen: '« TOM dehors, TIM dedans »',
      explication: 'Le complexe TOM (membrane externe) est traversé en premier, puis le complexe TIM (membrane interne), lors de l’importation des protéines mitochondriales.',
    },
    {
      moyen: '« Maman transmet ses mitochondries »',
      explication: 'L’ADN mitochondrial suit une hérédité exclusivement maternelle, contrairement à l’ADN nucléaire.',
    },
    {
      moyen: '« Fusion = mélange, Fission = ménage »',
      explication: 'La fusion mélange le contenu de mitochondries voisines ; la fission sépare et permet d’isoler les portions endommagées pour les éliminer.',
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
      id: 'biocell-mitochondrie-fc-01',
      recto: 'Quels sont les quatre compartiments de la mitochondrie ?',
      verso: 'La membrane externe, l’espace intermembranaire, la membrane interne et la matrice.',
      type: 'classification',
      tags: ['mitochondrie', 'structure'],
    },
    {
      id: 'biocell-mitochondrie-fc-02',
      recto: 'Que sont les crêtes mitochondriales ?',
      verso: 'Des replis de la membrane interne qui augmentent la surface disponible pour la chaîne respiratoire et l’ATP synthase.',
      type: 'definition',
      tags: ['crêtes', 'membrane interne'],
    },
    {
      id: 'biocell-mitochondrie-fc-03',
      recto: 'Quelle est la forme de l’ADN mitochondrial humain ?',
      verso: 'Une molécule circulaire, comparable à un chromosome bactérien.',
      type: 'chiffre',
      tags: ['ADN mitochondrial'],
    },
    {
      id: 'biocell-mitochondrie-fc-04',
      recto: 'Où sont synthétisées la majorité des protéines mitochondriales ?',
      verso: 'Dans le cytosol, par des ribosomes libres, à partir de gènes nucléaires, puis elles sont importées dans la mitochondrie.',
      type: 'mecanisme',
      tags: ['importation protéique'],
    },
    {
      id: 'biocell-mitochondrie-fc-05',
      recto: 'Quels complexes assurent la translocation d’une protéine à travers les deux membranes mitochondriales ?',
      verso: 'Le complexe TOM (membrane externe) puis le complexe TIM (membrane interne).',
      type: 'mecanisme',
      tags: ['TOM', 'TIM'],
    },
    {
      id: 'biocell-mitochondrie-fc-06',
      recto: 'L’importation mitochondriale est-elle cotraductionnelle ou post-traductionnelle ?',
      verso: 'Post-traductionnelle : la protéine est entièrement synthétisée avant d’être importée.',
      type: 'mecanisme',
      tags: ['importation protéique'],
    },
    {
      id: 'biocell-mitochondrie-fc-07',
      recto: 'Quel est l’intérêt fonctionnel de la fusion mitochondriale ?',
      verso: 'Mélanger le contenu matriciel et l’ADN mitochondrial entre mitochondries voisines, limitant l’accumulation locale de mutations.',
      type: 'mecanisme',
      tags: ['fusion', 'dynamique mitochondriale'],
    },
    {
      id: 'biocell-mitochondrie-fc-08',
      recto: 'Comment se nomme l’autophagie sélective des mitochondries endommagées ?',
      verso: 'La mitophagie.',
      type: 'definition',
      tags: ['mitophagie'],
    },
    {
      id: 'biocell-mitochondrie-fc-09',
      recto: 'Selon quel mode l’ADN mitochondrial est-il transmis ?',
      verso: 'Selon un mode d’hérédité maternelle exclusive.',
      type: 'chiffre',
      tags: ['hérédité maternelle'],
    },
    {
      id: 'biocell-mitochondrie-fc-10',
      recto: 'Qu’est-ce que l’hétéroplasmie ?',
      verso: 'La coexistence, dans une même cellule, de copies normales et mutées d’ADN mitochondrial.',
      type: 'definition',
      tags: ['hétéroplasmie'],
    },
    {
      id: 'biocell-mitochondrie-fc-11',
      recto: 'Citer deux arguments de la théorie endosymbiotique.',
      verso: 'La double membrane mitochondriale et la présence d’un ADN circulaire et de ribosomes de type bactérien.',
      type: 'classification',
      tags: ['endosymbiose'],
    },
    {
      id: 'biocell-mitochondrie-fc-12',
      recto: 'Quels tissus sont préférentiellement touchés par les cytopathies mitochondriales ?',
      verso: 'Les tissus les plus consommateurs d’énergie, comme le muscle et le système nerveux central.',
      type: 'clinique',
      tags: ['cytopathies mitochondriales'],
    },
  ],
  qcm: [
    {
      id: 'biocell-mitochondrie-qcm-01',
      enonce: 'Concernant la structure de la mitochondrie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La membrane externe est perméable aux petites molécules grâce à des porines.', vraie: true, justification: 'Les canaux VDAC de la membrane externe laissent passer les petites molécules et les ions.' },
        { lettre: 'B', texte: 'La membrane interne est imperméable aux ions.', vraie: true, justification: 'Cette imperméabilité est indispensable au maintien du gradient de protons utilisé par l’ATP synthase.' },
        { lettre: 'C', texte: 'La matrice contient l’ADN mitochondrial.', vraie: true, justification: 'C’est le compartiment où se trouvent l’ADN mitochondrial et les ribosomes mitochondriaux.' },
        { lettre: 'D', texte: 'Les crêtes se trouvent au niveau de la membrane externe.', vraie: false, justification: 'Les crêtes sont des replis de la membrane interne, non de la membrane externe.' },
        { lettre: 'E', texte: 'L’ATP synthase se trouve dans la membrane interne.', vraie: true, justification: 'C’est le site où elle exploite le gradient de protons pour synthétiser l’ATP.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Les crêtes appartiennent à la membrane interne, non externe.',
      difficulte: 1,
    },
    {
      id: 'biocell-mitochondrie-qcm-02',
      enonce: 'Concernant l’ADN mitochondrial, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est linéaire, comme l’ADN nucléaire.', vraie: false, justification: 'L’ADN mitochondrial humain est circulaire, à la différence de l’ADN nucléaire linéaire.' },
        { lettre: 'B', texte: 'Il code la majorité des protéines mitochondriales.', vraie: false, justification: 'Il ne code qu’une faible proportion des protéines mitochondriales, la majorité étant codée par le noyau.' },
        { lettre: 'C', texte: 'Il code notamment des sous-unités de la chaîne respiratoire.', vraie: true, justification: 'C’est l’une des catégories de protéines codées par le génome mitochondrial.' },
        { lettre: 'D', texte: 'Il code les ARN ribosomiques et de transfert nécessaires à sa propre traduction.', vraie: true, justification: 'La traduction mitochondriale utilise ces ARN codés par le génome mitochondrial lui-même.' },
        { lettre: 'E', texte: 'Chaque mitochondrie ne contient qu’une seule copie d’ADN mitochondrial.', vraie: false, justification: 'Chaque mitochondrie contient en général plusieurs copies d’ADN mitochondrial.' },
      ],
      correction: 'Réponses exactes : C et D. L’ADN mitochondrial ne code qu’une minorité des protéines mitochondriales.',
      difficulte: 2,
    },
    {
      id: 'biocell-mitochondrie-qcm-03',
      enonce: 'Concernant l’importation des protéines mitochondriales, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est cotraductionnelle, comme l’adressage au réticulum endoplasmique.', vraie: false, justification: 'Elle est post-traductionnelle : la protéine est entièrement synthétisée avant d’être importée.' },
        { lettre: 'B', texte: 'Le complexe TOM permet la traversée de la membrane externe.', vraie: true, justification: 'C’est la translocase de la membrane externe mitochondriale.' },
        { lettre: 'C', texte: 'Le complexe TIM permet la traversée de la membrane interne.', vraie: true, justification: 'C’est la translocase de la membrane interne mitochondriale.' },
        { lettre: 'D', texte: 'La présequence d’adressage est en général clivée après l’importation.', vraie: true, justification: 'Elle est clivée dans la matrice par une peptidase spécifique.' },
        { lettre: 'E', texte: 'Des chaperonnes cytosoliques maintiennent la protéine repliée avant son importation.', vraie: false, justification: 'Elles la maintiennent au contraire dans un état déplié, compatible avec la translocation à travers les membranes.' },
      ],
      correction: 'Réponses exactes : B, C et D. Les chaperonnes cytosoliques maintiennent la protéine dépliée, non repliée.',
      difficulte: 2,
    },
    {
      id: 'biocell-mitochondrie-qcm-04',
      enonce: 'Concernant la dynamique de fusion et de fission mitochondriale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La fusion mélange le contenu matriciel de mitochondries voisines.', vraie: true, justification: 'C’est son intérêt fonctionnel principal, limitant l’accumulation locale de mutations.' },
        { lettre: 'B', texte: 'La fission permet la multiplication du nombre de mitochondries.', vraie: true, justification: 'Elle permet également leur redistribution lors de la division cellulaire.' },
        { lettre: 'C', texte: 'La mitophagie élimine sélectivement les mitochondries endommagées.', vraie: true, justification: 'C’est une forme d’autophagie sélective ciblant les mitochondries isolées par fission.' },
        { lettre: 'D', texte: 'Ces processus sont contrôlés par des GTPases spécifiques.', vraie: true, justification: 'Des protéines GTPases régulent aussi bien la fusion que la fission mitochondriale.' },
        { lettre: 'E', texte: 'La morphologie du réseau mitochondrial est fixe, indépendante de l’état métabolique de la cellule.', vraie: false, justification: 'Elle varie au contraire selon l’état métabolique et le stress subi par la cellule.' },
      ],
      correction: 'Réponses exactes : A, B, C et D. La morphologie mitochondriale est dynamique et adaptative.',
      difficulte: 2,
    },
    {
      id: 'biocell-mitochondrie-qcm-05',
      enonce: 'Concernant l’hérédité de l’ADN mitochondrial, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ADN mitochondrial est transmis à parts égales par les deux parents.', vraie: false, justification: 'Sa transmission est exclusivement maternelle, contrairement à l’ADN nucléaire.' },
        { lettre: 'B', texte: 'Un père porteur d’une mutation de l’ADN mitochondrial la transmet en principe à sa descendance.', vraie: false, justification: 'En principe, seule la mère transmet l’ADN mitochondrial à sa descendance.' },
        { lettre: 'C', texte: 'L’hétéroplasmie désigne la coexistence de copies normales et mutées d’ADN mitochondrial.', vraie: true, justification: 'C’est la définition de l’hétéroplasmie, par opposition à l’homoplasmie.' },
        { lettre: 'D', texte: 'La sévérité clinique d’une maladie mitochondriale peut dépendre de la charge mutationnelle.', vraie: true, justification: 'Une proportion plus élevée de copies mutées est généralement associée à une atteinte plus sévère.' },
        { lettre: 'E', texte: 'L’ovocyte apporte la majorité des mitochondries du zygote.', vraie: true, justification: 'C’est le fondement biologique de l’hérédité maternelle de l’ADN mitochondrial.' },
      ],
      correction: 'Réponses exactes : C, D et E. Retenir le caractère exclusivement maternel de la transmission mitochondriale.',
      difficulte: 2,
    },
    {
      id: 'biocell-mitochondrie-qcm-06',
      enonce: 'Concernant la théorie endosymbiotique et les cytopathies mitochondriales, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La double membrane mitochondriale est compatible avec une origine par phagocytose ancestrale.', vraie: true, justification: 'C’est l’un des arguments structuraux classiques de la théorie endosymbiotique.' },
        { lettre: 'B', texte: 'Les ribosomes mitochondriaux sont comparables aux ribosomes bactériens.', vraie: true, justification: 'Leur taille et leur sensibilité à certains antibiotiques rappellent celles des ribosomes bactériens.' },
        { lettre: 'C', texte: 'Les mitochondries se divisent selon le même mécanisme que la mitose nucléaire.', vraie: false, justification: 'Elles se divisent par fission, un mécanisme distinct de la mitose du noyau cellulaire.' },
        { lettre: 'D', texte: 'Les cytopathies mitochondriales touchent préférentiellement les tissus à forte demande énergétique.', vraie: true, justification: 'C’est le cas notamment du muscle et du système nerveux central.' },
        { lettre: 'E', texte: 'Les cytopathies mitochondriales ne peuvent résulter que de mutations de l’ADN mitochondrial.', vraie: false, justification: 'Elles peuvent aussi résulter de mutations de gènes nucléaires codant des protéines mitochondriales.' },
      ],
      correction: 'Réponses exactes : A, B et D. Les cytopathies mitochondriales ont une origine génétique double, nucléaire ou mitochondriale.',
      difficulte: 2,
    },
  ],
};
