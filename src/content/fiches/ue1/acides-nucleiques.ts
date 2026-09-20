import type { Fiche } from '../../types';

export const ficheAcidesNucleiques: Fiche = {
  id: 'ue1-acides-nucleiques',
  ue: 'ue1',
  titre: 'Structure des acides nucléiques',
  sousTitre: 'Nucléotides, liaison phosphodiester, double hélice de Watson et Crick, formes A/B/Z, dénaturation',
  chapitre: 'Structure et expression du génome',
  ordre: 1,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'nucléotide',
    'liaison phosphodiester',
    'double hélice',
    'Watson et Crick',
    'appariement',
    'forme B',
    'dénaturation',
    'température de fusion',
  ],
  objectifs: [
    'Décrire la structure d’un nucléotide et distinguer nucléoside et nucléotide.',
    'Expliquer la formation et l’orientation de la liaison phosphodiester.',
    'Décrire le modèle de la double hélice de Watson et Crick et les règles d’appariement des bases.',
    'Comparer les formes A, B et Z de l’ADN.',
    'Expliquer le phénomène de dénaturation et définir la température de fusion (Tm).',
    'Distinguer les caractéristiques structurales de l’ADN et de l’ARN.',
  ],
  sections: [
    {
      id: 'nucleotides',
      titre: 'Structure des nucléotides',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Un nucléotide est constitué de trois éléments liés de façon covalente : une base azotée, un ose à cinq carbones (pentose) et un ou plusieurs groupements phosphate. L’association d’une base azotée et d’un pentose, sans phosphate, constitue un nucléoside.',
        },
        {
          type: 'liste',
          items: [
            'Les bases puriques, adénine (A) et guanine (G), possèdent un double cycle accolé (noyau purique).',
            'Les bases pyrimidiques, cytosine (C), thymine (T) et uracile (U), possèdent un cycle unique (noyau pyrimidique).',
            'La thymine est propre à l’ADN, l’uracile est propre à l’ARN ; l’adénine, la guanine et la cytosine sont communes aux deux acides nucléiques.',
            'La base est fixée sur le carbone 1′ du pentose par une liaison N-osidique : sur l’azote N9 pour les purines, sur l’azote N1 pour les pyrimidines.',
          ],
        },
        {
          type: 'definition',
          terme: 'Numérotation du pentose',
          definition:
            'Les carbones du pentose sont numérotés de 1′ à 5′, pour les distinguer des numéros des atomes de la base. Le désoxyribose de l’ADN ne porte pas de fonction hydroxyle en 2′, contrairement au ribose de l’ARN.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Nucléoside ou nucléotide ?',
          texte:
            'Ne pas confondre les deux termes : un nucléoside n’a pas de phosphate, par exemple l’adénosine ; un nucléotide en possède un à trois, par exemple l’adénosine monophosphate (AMP) ou l’adénosine triphosphate (ATP). Le nom du nucléoside change selon la base, alors que le suffixe -monophosphate, -diphosphate ou -triphosphate qualifie le nucléotide.',
        },
        {
          type: 'tableau',
          titre: 'Nomenclature des bases, nucléosides et nucléotides (série ribose)',
          colonnes: ['Base', 'Type', 'Nucléoside', 'Nucléotide monophosphate'],
          lignes: [
            ['Adénine', 'Purique', 'Adénosine', 'Adénosine monophosphate (AMP)'],
            ['Guanine', 'Purique', 'Guanosine', 'Guanosine monophosphate (GMP)'],
            ['Cytosine', 'Pyrimidique', 'Cytidine', 'Cytidine monophosphate (CMP)'],
            ['Uracile', 'Pyrimidique', 'Uridine', 'Uridine monophosphate (UMP)'],
          ],
        },
      ],
    },
    {
      id: 'liaison-phosphodiester',
      titre: 'La liaison phosphodiester et la polarité du brin',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les nucléotides successifs d’un brin d’acide nucléique sont unis par une liaison phosphodiester : le groupement phosphate porté par le carbone 5′ d’un nucléotide forme une liaison ester avec le groupement hydroxyle porté par le carbone 3′ du nucléotide précédent. Cette réaction de condensation libère une molécule d’eau.',
        },
        {
          type: 'liste',
          items: [
            'Le squelette du brin, formé de l’alternance sucre-phosphate, est ainsi orienté : une extrémité porte un phosphate libre en 5′, l’autre un hydroxyle libre en 3′.',
            'Par convention, un brin s’écrit et se lit toujours de l’extrémité 5′ vers l’extrémité 3′.',
            'Les bases azotées sont des ramifications latérales du squelette sucre-phosphate, sans intervenir dans la liaison entre nucléotides successifs.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Sens de synthèse',
          texte:
            'Toutes les polymérases connues, ADN comme ARN polymérases, n’ajoutent des nucléotides qu’à l’extrémité 3′-OH libre d’un brin en cours d’élongation : la synthèse progresse donc toujours dans le sens 5′ vers 3′.',
        },
        {
          type: 'formule',
          expression: '5′-phosphate + 3′-OH -> liaison phosphodiester + H2O',
          legende: 'Formation de la liaison phosphodiester entre deux nucléotides successifs, avec élimination d’eau.',
        },
      ],
    },
    {
      id: 'double-helice',
      titre: 'La double hélice de Watson et Crick',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'En 1953, James Watson et Francis Crick proposent, en s’appuyant notamment sur les clichés de diffraction aux rayons X de Rosalind Franklin, un modèle en double hélice pour l’ADN : deux brins antiparallèles s’enroulent autour d’un axe commun, maintenus associés par des liaisons hydrogène entre bases complémentaires.',
        },
        {
          type: 'liste',
          items: [
            'Les deux brins sont antiparallèles : l’un est orienté 5′ vers 3′, l’autre 3′ vers 5′ dans le même sens de lecture spatial.',
            'L’adénine s’apparie avec la thymine par deux liaisons hydrogène.',
            'La guanine s’apparie avec la cytosine par trois liaisons hydrogène.',
            'Les squelettes sucre-phosphate, chargés négativement, sont situés à l’extérieur de l’hélice ; les bases, empilées, occupent l’intérieur.',
            'L’enroulement délimite un grand sillon et un petit sillon, sites privilégiés de fixation des protéines régulatrices.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Règles de Chargaff',
          texte:
            'Avant même le modèle de Watson et Crick, Erwin Chargaff avait montré que, dans l’ADN, la quantité d’adénine est égale à celle de thymine, et la quantité de guanine égale à celle de cytosine. Ces égalités découlent directement de la complémentarité des appariements.',
        },
        {
          type: 'tableau',
          titre: 'Caractéristiques géométriques de la forme B',
          colonnes: ['Paramètre', 'Valeur approximative'],
          lignes: [
            ['Diamètre de l’hélice', 'Environ 2 nanomètres'],
            ['Pas de l’hélice, pour un tour complet', 'Environ 3,4 nanomètres'],
            ['Nombre de paires de bases par tour', 'Environ dix'],
            ['Sens de l’enroulement', 'Hélice droite'],
          ],
        },
      ],
    },
    {
      id: 'formes-adn',
      titre: 'Les formes A, B et Z de l’ADN',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’ADN double brin ne présente pas une conformation unique et figée : selon le degré d’hydratation, la séquence et l’environnement ionique, il peut adopter plusieurs formes hélicoïdales.',
        },
        {
          type: 'comparaison',
          titre: 'Comparaison des trois formes principales',
          gauche: {
            titre: 'Forme B',
            points: [
              'Forme la plus fréquente dans les conditions physiologiques intracellulaires',
              'Hélice droite',
              'Environ dix paires de bases par tour',
              'Correspond au modèle original de Watson et Crick',
            ],
          },
          droite: {
            titre: 'Forme A et forme Z',
            points: [
              'Forme A : hélice droite, plus courte et plus large, favorisée en milieu déshydraté et dans les hybrides ADN-ARN',
              'Forme Z : hélice gauche, squelette en zigzag, favorisée par des séquences alternées purine-pyrimidine, par exemple des répétitions GC',
              'La forme Z pourrait intervenir dans certains mécanismes de régulation de la transcription',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre conformation et structure primaire',
          texte:
            'Les formes A, B et Z décrivent la conformation tridimensionnelle de la double hélice, pas la séquence des bases. Une même séquence peut, selon les conditions expérimentales ou locales, adopter transitoirement l’une ou l’autre de ces formes.',
        },
      ],
    },
    {
      id: 'denaturation',
      titre: 'Dénaturation et température de fusion',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La dénaturation de l’ADN correspond à la séparation des deux brins de la double hélice, par rupture des liaisons hydrogène entre bases appariées. Elle peut être obtenue par élévation de la température, par un pH extrême ou par des agents chimiques comme l’urée ou le formamide. Les liaisons covalentes du squelette ne sont pas affectées.',
        },
        {
          type: 'definition',
          terme: 'Température de fusion (Tm)',
          definition:
            'Température à laquelle la moitié des molécules d’ADN double brin d’un échantillon sont dénaturées, c’est-à-dire séparées en simple brin. Le Tm augmente avec la proportion de paires G-C et avec la force ionique du milieu.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Effet hyperchrome',
          texte:
            'La dénaturation s’accompagne d’une augmentation de l’absorbance à 260 nanomètres : c’est l’effet hyperchrome, dû au désempilement des bases qui masquaient partiellement leurs cycles aromatiques à l’état apparié. Ce phénomène permet de suivre la dénaturation par spectrophotométrie et d’estimer expérimentalement le Tm.',
        },
        {
          type: 'paragraphe',
          texte:
            'Le refroidissement lent d’un ADN dénaturé permet la renaturation, ou hybridation, par réappariement des brins complémentaires. Ce principe est à la base de nombreuses techniques de biologie moléculaire, notamment l’hybridation de sondes marquées et la réaction de polymérisation en chaîne.',
        },
      ],
    },
    {
      id: 'adn-vs-arn',
      titre: 'Différences entre ADN et ARN',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’ADN et l’ARN diffèrent par la nature de leur pentose, par une base azotée et, le plus souvent, par leur structure spatiale et leur fonction cellulaire.',
        },
        {
          type: 'tableau',
          titre: 'ADN et ARN : principales différences',
          colonnes: ['Caractéristique', 'ADN', 'ARN'],
          lignes: [
            ['Pentose', 'Désoxyribose, sans hydroxyle en 2′', 'Ribose, avec hydroxyle en 2′'],
            ['Base pyrimidique spécifique', 'Thymine', 'Uracile'],
            ['Structure habituelle', 'Double brin, hélice stable', 'Simple brin, souvent replié localement'],
            ['Stabilité chimique', 'Plus stable', 'Plus sensible à l’hydrolyse alcaline'],
            ['Localisation principale', 'Noyau et mitochondries', 'Noyau, cytoplasme, mitochondries'],
            ['Rôle principal', 'Support de l’information génétique', 'Expression du génome : messager, ribosomique, de transfert, régulateur'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Pourquoi l’ADN est-il plus stable que l’ARN ?',
          texte:
            'L’absence de fonction hydroxyle en 2′ du désoxyribose supprime un site d’attaque nucléophile interne qui, dans l’ARN, favorise l’hydrolyse de la liaison phosphodiester en milieu alcalin. Cette stabilité chimique accrue explique en partie pourquoi l’ADN, et non l’ARN, constitue le support de l’information génétique à long terme.',
        },
      ],
    },
  ],
  pointsCles: [
    'Un nucléotide associe une base azotée, un pentose et un à trois groupements phosphate ; le nucléoside en est dépourvu de phosphate.',
    'La liaison phosphodiester unit le 5′-phosphate d’un nucléotide au 3′-OH du précédent : le brin est orienté de 5′ vers 3′.',
    'Dans la double hélice, les deux brins sont antiparallèles et complémentaires : deux liaisons hydrogène pour A-T, trois pour G-C.',
    'La forme B est la conformation physiologique ; la forme A est plus courte et plus large, la forme Z est une hélice gauche.',
    'La dénaturation rompt les liaisons hydrogène sans toucher au squelette covalent ; elle est suivie par effet hyperchrome à 260 nanomètres.',
    'Le Tm augmente avec la richesse en paires G-C et avec la force ionique du milieu.',
    'L’ARN se distingue de l’ADN par le ribose, l’uracile à la place de la thymine, et une structure le plus souvent simple brin.',
  ],
  erreursFrequentes: [
    'Confondre nucléoside et nucléotide : seul le second porte un ou plusieurs groupements phosphate.',
    'Inverser le sens de la liaison phosphodiester ou croire que la synthèse progresse de 3′ vers 5′ : elle se fait toujours de 5′ vers 3′.',
    'Oublier le caractère antiparallèle des deux brins de la double hélice.',
    'Attribuer trois liaisons hydrogène à l’appariement A-T au lieu de deux, ou deux à G-C au lieu de trois.',
    'Penser que la dénaturation rompt des liaisons covalentes : elle ne rompt que les liaisons hydrogène et les interactions d’empilement.',
    'Croire que la forme Z est la conformation majoritaire de l’ADN cellulaire, alors que c’est la forme B qui domine dans les conditions physiologiques.',
  ],
  mnemotechniques: [
    {
      moyen: 'A-T deux, G-C trois',
      explication: 'Nombre de liaisons hydrogène : adénine-thymine forment deux liaisons, guanine-cytosine en forment trois. Plus de liaisons, plus de stabilité, donc un Tm plus élevé pour les séquences riches en G-C.',
    },
    {
      moyen: 'Cinq vers trois, comme on avance',
      explication: 'Rappelle que la synthèse d’un acide nucléique progresse toujours de l’extrémité 5′ vers l’extrémité 3′.',
    },
    {
      moyen: 'L’ARN a un oxygène en plus',
      explication: 'Le ribose de l’ARN possède un hydroxyle supplémentaire en 2′ par rapport au désoxyribose de l’ADN, d’où son nom et sa moindre stabilité chimique.',
    },
  ],
  sources: [
    'Lehninger, Principes de biochimie, 8e édition',
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Harper, Biochimie médicale, 32e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-acides-nucleiques-fc-01',
      recto: 'Que distingue un nucléoside d’un nucléotide ?',
      verso: 'Le nucléoside associe une base azotée et un pentose, sans phosphate ; le nucléotide porte en plus un à trois groupements phosphate.',
      type: 'definition',
      tags: ['nucléotide'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-02',
      recto: 'Sur quel carbone du pentose la base azotée est-elle fixée ?',
      verso: 'Sur le carbone 1′ du pentose, par une liaison N-osidique, sur N9 pour les purines et N1 pour les pyrimidines.',
      type: 'mecanisme',
      tags: ['nucléotide'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-03',
      recto: 'Entre quels carbones se forme la liaison phosphodiester ?',
      verso: 'Entre le 5′-phosphate d’un nucléotide et le 3′-OH du nucléotide précédent, avec libération d’eau.',
      type: 'mecanisme',
      tags: ['phosphodiester'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-04',
      recto: 'Combien de liaisons hydrogène unissent A à T, et G à C ?',
      verso: 'Deux liaisons hydrogène pour A-T, trois liaisons hydrogène pour G-C.',
      type: 'chiffre',
      tags: ['appariement'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-05',
      recto: 'Que signifie le caractère antiparallèle des deux brins de la double hélice ?',
      verso: 'Les deux brins sont orientés en sens opposé : l’un va de 5′ vers 3′, l’autre de 3′ vers 5′, dans le même sens spatial de l’hélice.',
      type: 'definition',
      tags: ['double hélice'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-06',
      recto: 'Quelle est la forme hélicoïdale physiologique majoritaire de l’ADN ?',
      verso: 'La forme B, hélice droite d’environ dix paires de bases par tour.',
      type: 'classification',
      tags: ['formes ADN'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-07',
      recto: 'Quelle particularité structurale caractérise la forme Z de l’ADN ?',
      verso: 'C’est une hélice gauche, à squelette en zigzag, favorisée par des séquences alternées purine-pyrimidine.',
      type: 'classification',
      tags: ['formes ADN'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-08',
      recto: 'Que rompt la dénaturation de l’ADN ?',
      verso: 'Les liaisons hydrogène entre bases appariées et les interactions d’empilement, sans toucher aux liaisons covalentes du squelette.',
      type: 'mecanisme',
      tags: ['dénaturation'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-09',
      recto: 'Définir le Tm.',
      verso: 'La température à laquelle la moitié des molécules d’ADN double brin d’un échantillon sont dénaturées.',
      type: 'definition',
      tags: ['Tm'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-10',
      recto: 'Quel effet spectral accompagne la dénaturation de l’ADN ?',
      verso: 'L’effet hyperchrome : augmentation de l’absorbance à 260 nanomètres, liée au désempilement des bases.',
      type: 'chiffre',
      tags: ['dénaturation'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-11',
      recto: 'Pourquoi une séquence riche en G-C a-t-elle un Tm plus élevé ?',
      verso: 'Parce que chaque paire G-C forme trois liaisons hydrogène contre deux pour une paire A-T, ce qui stabilise davantage la double hélice.',
      type: 'mecanisme',
      tags: ['Tm'],
    },
    {
      id: 'ue1-acides-nucleiques-fc-12',
      recto: 'Citer deux différences structurales majeures entre ADN et ARN.',
      verso: 'Le pentose, désoxyribose sans hydroxyle en 2′ pour l’ADN et ribose pour l’ARN, et la base pyrimidique spécifique, thymine pour l’ADN et uracile pour l’ARN.',
      type: 'classification',
      tags: ['ADN', 'ARN'],
    },
  ],
  qcm: [
    {
      id: 'ue1-acides-nucleiques-qcm-01',
      enonce: 'Concernant la structure des nucléotides, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un nucléoside comporte une base azotée, un pentose et un phosphate.',
          vraie: false,
          justification: 'Un nucléoside ne comporte pas de phosphate ; c’est l’association d’une base azotée et d’un pentose seulement.',
        },
        {
          lettre: 'B',
          texte: 'L’adénine et la guanine sont des bases puriques à double cycle.',
          vraie: true,
          justification: 'Exact : les purines possèdent un noyau à deux cycles accolés.',
        },
        {
          lettre: 'C',
          texte: 'La thymine est présente à la fois dans l’ADN et dans l’ARN.',
          vraie: false,
          justification: 'La thymine est spécifique de l’ADN ; l’ARN contient de l’uracile à la place.',
        },
        {
          lettre: 'D',
          texte: 'La base est fixée sur le pentose par une liaison N-osidique.',
          vraie: true,
          justification: 'Exact : la liaison unit un azote de la base au carbone 1′ du pentose.',
        },
        {
          lettre: 'E',
          texte: 'Le désoxyribose porte un hydroxyle libre en position 2′.',
          vraie: false,
          justification: 'Faux : c’est justement l’absence d’hydroxyle en 2′ qui définit le désoxyribose ; le ribose, lui, en porte un.',
        },
      ],
      correction: 'Réponses exactes : B et D. Bien distinguer nucléoside et nucléotide, et retenir la spécificité thymine pour l’ADN, uracile pour l’ARN.',
      difficulte: 1,
    },
    {
      id: 'ue1-acides-nucleiques-qcm-02',
      enonce: 'Concernant la liaison phosphodiester, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle unit le 3′-OH d’un nucléotide au 5′-phosphate du nucléotide suivant.',
          vraie: true,
          justification: 'Exact : c’est la définition même de la liaison phosphodiester dans un brin d’acide nucléique.',
        },
        {
          lettre: 'B',
          texte: 'Sa formation libère une molécule d’eau.',
          vraie: true,
          justification: 'Exact : il s’agit d’une réaction de condensation.',
        },
        {
          lettre: 'C',
          texte: 'Elle confère au brin une polarité, avec une extrémité 5′ et une extrémité 3′.',
          vraie: true,
          justification: 'Exact : le squelette sucre-phosphate est orienté de façon non symétrique.',
        },
        {
          lettre: 'D',
          texte: 'Les polymérases synthétisent les acides nucléiques dans le sens 3′ vers 5′.',
          vraie: false,
          justification: 'Faux : toutes les polymérases connues élongent un brin dans le sens 5′ vers 3′.',
        },
        {
          lettre: 'E',
          texte: 'Elle relie directement deux bases azotées entre elles.',
          vraie: false,
          justification: 'Faux : elle relie le squelette sucre-phosphate ; les bases sont des ramifications latérales.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Retenir la polarité 5′/3′ et le sens unique de synthèse.',
      difficulte: 2,
    },
    {
      id: 'ue1-acides-nucleiques-qcm-03',
      enonce: 'Concernant la double hélice de Watson et Crick, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les deux brins sont parallèles.',
          vraie: false,
          justification: 'Faux : les deux brins sont antiparallèles.',
        },
        {
          lettre: 'B',
          texte: 'L’adénine s’apparie avec la thymine.',
          vraie: true,
          justification: 'Exact, par deux liaisons hydrogène.',
        },
        {
          lettre: 'C',
          texte: 'Les squelettes sucre-phosphate sont situés à l’intérieur de l’hélice.',
          vraie: false,
          justification: 'Faux : ils sont à l’extérieur ; les bases empilées sont à l’intérieur.',
        },
        {
          lettre: 'D',
          texte: 'La quantité d’adénine est égale à la quantité de thymine.',
          vraie: true,
          justification: 'Exact : conséquence directe de la complémentarité des appariements, règle de Chargaff.',
        },
        {
          lettre: 'E',
          texte: 'L’hélice délimite un grand sillon et un petit sillon.',
          vraie: true,
          justification: 'Exact : ces deux sillons sont des sites privilégiés de fixation des protéines régulatrices.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Le caractère antiparallèle et la localisation externe du squelette sont deux points classiques de piège.',
      difficulte: 2,
    },
    {
      id: 'ue1-acides-nucleiques-qcm-04',
      enonce: 'Concernant les formes A, B et Z de l’ADN, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La forme B est la conformation majoritaire dans les conditions physiologiques.',
          vraie: true,
          justification: 'Exact : c’est la forme décrite initialement par Watson et Crick, dominante in vivo.',
        },
        {
          lettre: 'B',
          texte: 'La forme A est une hélice gauche.',
          vraie: false,
          justification: 'Faux : la forme A est une hélice droite, comme la forme B ; seule la forme Z est une hélice gauche.',
        },
        {
          lettre: 'C',
          texte: 'La forme Z est favorisée par des séquences alternées purine-pyrimidine.',
          vraie: true,
          justification: 'Exact, par exemple des répétitions de type GC.',
        },
        {
          lettre: 'D',
          texte: 'Les formes A, B et Z correspondent à des séquences de bases différentes.',
          vraie: false,
          justification: 'Faux : ce sont des conformations tridimensionnelles ; une même séquence peut, selon les conditions, adopter l’une ou l’autre.',
        },
        {
          lettre: 'E',
          texte: 'La forme A est favorisée en milieu déshydraté.',
          vraie: true,
          justification: 'Exact : la déshydratation favorise la transition de la forme B vers la forme A.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Ne pas confondre conformation hélicoïdale et séquence primaire.',
      difficulte: 2,
    },
    {
      id: 'ue1-acides-nucleiques-qcm-05',
      enonce: 'Concernant la dénaturation de l’ADN et la température de fusion, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La dénaturation rompt des liaisons covalentes du squelette phosphodiester.',
          vraie: false,
          justification: 'Faux : seules les liaisons hydrogène entre bases et les interactions d’empilement sont rompues.',
        },
        {
          lettre: 'B',
          texte: 'Le Tm augmente avec la proportion de paires G-C.',
          vraie: true,
          justification: 'Exact : les paires G-C, à trois liaisons hydrogène, stabilisent davantage la double hélice.',
        },
        {
          lettre: 'C',
          texte: 'La dénaturation s’accompagne d’une diminution de l’absorbance à 260 nanomètres.',
          vraie: false,
          justification: 'Faux : elle s’accompagne au contraire d’une augmentation, l’effet hyperchrome.',
        },
        {
          lettre: 'D',
          texte: 'Un refroidissement lent peut permettre la renaturation des brins complémentaires.',
          vraie: true,
          justification: 'Exact : c’est le principe de l’hybridation.',
        },
        {
          lettre: 'E',
          texte: 'La force ionique du milieu n’influence pas le Tm.',
          vraie: false,
          justification: 'Faux : une force ionique plus élevée stabilise la double hélice et augmente le Tm.',
        },
      ],
      correction: 'Réponses exactes : B et D. Retenir l’effet hyperchrome et les deux facteurs qui augmentent le Tm, la richesse en G-C et la force ionique.',
      difficulte: 2,
    },
    {
      id: 'ue1-acides-nucleiques-qcm-06',
      enonce: 'Concernant les différences entre ADN et ARN, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ARN contient du ribose, l’ADN du désoxyribose.',
          vraie: true,
          justification: 'Exact : c’est la différence de pentose qui donne leurs noms respectifs aux deux acides nucléiques.',
        },
        {
          lettre: 'B',
          texte: 'L’ADN est chimiquement plus stable que l’ARN.',
          vraie: true,
          justification: 'Exact : l’absence d’hydroxyle en 2′ rend l’ADN moins sensible à l’hydrolyse.',
        },
        {
          lettre: 'C',
          texte: 'L’ARN est toujours strictement double brin.',
          vraie: false,
          justification: 'Faux : l’ARN est le plus souvent simple brin, avec des repliements locaux en double brin.',
        },
        {
          lettre: 'D',
          texte: 'L’uracile remplace la thymine dans l’ARN.',
          vraie: true,
          justification: 'L’uracile, base non méthylée, prend la place de la thymine et s’apparie de la même façon avec l’adénine par deux liaisons hydrogène.',
        },
        {
          lettre: 'E',
          texte: 'L’ADN et l’ARN sont exclusivement localisés dans le noyau.',
          vraie: false,
          justification: 'Faux : l’un et l’autre existent aussi dans les mitochondries, et l’ARN est également présent dans le cytoplasme.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien connaître les localisations extranucléaires de l’ADN mitochondrial et de l’ARN cytoplasmique.',
      difficulte: 1,
    },
  ],
};
