import type { Fiche } from '../../types';

export const ficheInteractionsRayonnementMatiere: Fiche = {
  id: 'ue3-interactions-rayonnement-matiere',
  ue: 'ue3',
  titre: 'Interactions rayonnement-matière',
  sousTitre:
    "Effet photoélectrique, effet Compton, atténuation, coefficient d’atténuation linéique, couche de demi-atténuation et effets biologiques",
  chapitre: 'Imagerie médicale',
  ordre: 10,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'effet photoélectrique',
    'effet Compton',
    'atténuation',
    'coefficient d’atténuation linéique',
    'couche de demi-atténuation',
    'contraste radiologique',
    'effets déterministes',
    'effets stochastiques',
  ],
  objectifs: [
    "Décrire les mécanismes de l’effet photoélectrique et de l’effet Compton.",
    "Distinguer les facteurs qui favorisent l’un ou l’autre de ces deux effets.",
    "Appliquer la loi d’atténuation exponentielle et définir la couche de demi-atténuation.",
    "Relier les interactions rayonnement-matière à la formation du contraste en imagerie par rayons X.",
    "Distinguer effets déterministes et effets stochastiques des rayonnements ionisants sur la matière vivante.",
  ],
  sections: [
    {
      id: 'effet-photoelectrique',
      titre: 'L’effet photoélectrique',
      blocs: [
        {
          type: 'definition',
          terme: 'Effet photoélectrique',
          definition:
            "Interaction au cours de laquelle un photon incident cède la totalité de son énergie à un électron fortement lié d’une couche interne de l’atome (souvent la couche K), qui est éjecté (électron photoélectrique) ; le photon incident disparaît entièrement lors de cette interaction.",
        },
        {
          type: 'formule',
          expression: 'Ec = h x f - El',
          legende:
            "Énergie cinétique Ec de l’électron éjecté : différence entre l’énergie h x f du photon incident et l’énergie de liaison El de l’électron sur sa couche atomique. L’effet photoélectrique ne peut se produire que si l’énergie du photon est au moins égale à l’énergie de liaison de l’électron concerné.",
          unites: 'Ec, h x f et El en joule (J) ou en électronvolt (eV)',
        },
        {
          type: 'liste',
          items: [
            "La probabilité d’effet photoélectrique augmente fortement avec le numéro atomique Z du matériau traversé (variation approximativement proportionnelle à Z au cube ou à la puissance quatre selon les modèles).",
            "La probabilité d’effet photoélectrique diminue rapidement quand l’énergie du photon incident augmente.",
            "La lacune électronique créée sur la couche interne est comblée par un électron d’une couche plus périphérique, avec émission d’un rayonnement de fluorescence caractéristique de l’élément.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'L’effet photoélectrique est prédominant aux basses énergies et dans les tissus denses',
          texte:
            "C’est l’effet photoélectrique qui est principalement responsable du contraste en radiographie conventionnelle aux énergies utilisées en imagerie diagnostique, car sa forte dépendance au numéro atomique Z permet de distinguer nettement l’os (Z élevé, riche en calcium) des tissus mous (Z plus faible).",
        },
      ],
    },
    {
      id: 'effet-compton',
      titre: "L’effet Compton",
      blocs: [
        {
          type: 'definition',
          terme: 'Effet Compton (diffusion Compton)',
          definition:
            "Interaction au cours de laquelle un photon incident cède une partie seulement de son énergie à un électron peu lié (considéré comme libre) d’une couche périphérique de l’atome, qui est éjecté ; le photon incident est dévié de sa trajectoire initiale avec une énergie diminuée (photon diffusé).",
        },
        {
          type: 'liste',
          items: [
            "Contrairement à l’effet photoélectrique, l’effet Compton produit un photon diffusé qui poursuit sa trajectoire dans une direction différente, ce qui dégrade la qualité de l’image en imagerie par rayons X (rayonnement diffusé, perte de contraste).",
            "La probabilité d’effet Compton dépend peu du numéro atomique Z du matériau et diminue plus lentement que l’effet photoélectrique lorsque l’énergie du photon augmente.",
            "L’effet Compton devient l’interaction prédominante aux énergies élevées, typiquement utilisées en radiothérapie, et dans les tissus mous aux énergies diagnostiques intermédiaires.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un piège fréquent : contraste et rayonnement diffusé',
          texte:
            "Le rayonnement diffusé Compton n’apporte pas d’information utile sur l’anatomie traversée : il dégrade le contraste et augmente l’exposition du patient et du personnel. C’est pourquoi des grilles anti-diffusantes sont utilisées en radiographie pour limiter la quantité de rayonnement Compton atteignant le détecteur.",
        },
      ],
    },
    {
      id: 'attenuation',
      titre: 'Loi d’atténuation des rayonnements',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Lorsqu’un faisceau de photons traverse un matériau, son intensité diminue progressivement du fait des interactions (effet photoélectrique, effet Compton, et à très haute énergie création de paires) qui soustraient des photons au faisceau initial (atténuation).",
        },
        {
          type: 'formule',
          expression: 'I = I0 x exp(-mu x x)',
          legende:
            "Loi d’atténuation exponentielle : I est l’intensité du faisceau après traversée d’une épaisseur x de matériau, I0 l’intensité initiale, mu le coefficient d’atténuation linéique du matériau pour l’énergie considérée.",
          unites: 'I et I0 en unités d’intensité (par exemple W/m²), mu en m⁻¹ ou cm⁻¹, x en m ou cm',
        },
        {
          type: 'definition',
          terme: 'Couche de demi-atténuation (CDA)',
          definition:
            "Épaisseur de matériau nécessaire pour réduire de moitié l’intensité d’un faisceau de rayonnement, à énergie donnée.",
        },
        {
          type: 'formule',
          expression: 'CDA = ln(2) / mu',
          legende:
            "Relation entre la couche de demi-atténuation et le coefficient d’atténuation linéique mu, obtenue en posant I/I0 = 1/2 dans la loi d’atténuation exponentielle.",
          unites: 'CDA en m ou cm, mu en m⁻¹ ou cm⁻¹',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Analogie avec la décroissance radioactive',
          texte:
            "La forme mathématique de la loi d’atténuation (I = I0 x exp(-mu x x)) est directement analogue à celle de la loi de décroissance radioactive (N = N0 x exp(-lambda x t)) : le coefficient d’atténuation linéique mu y joue un rôle mathématique identique à celui de la constante radioactive lambda, et la couche de demi-atténuation celui de la période radioactive.",
        },
        {
          type: 'liste',
          items: [
            "Le coefficient d’atténuation linéique mu dépend de la nature du matériau (numéro atomique, masse volumique) et de l’énergie du rayonnement incident.",
            "Plus le matériau est dense et de numéro atomique élevé, plus mu est grand et plus la couche de demi-atténuation est petite.",
            "Pour un même matériau, mu diminue globalement quand l’énergie des photons augmente : un faisceau de haute énergie est plus pénétrant.",
          ],
        },
      ],
    },
    {
      id: 'contraste-radiologique',
      titre: 'Formation du contraste radiologique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le contraste d’une image radiologique résulte des différences d’atténuation entre les différents tissus traversés par le faisceau de rayons X, qui se traduisent par des différences d’intensité transmise, donc de noircissement (ou de niveau de gris) sur l’image finale.",
        },
        {
          type: 'tableau',
          titre: 'Atténuation relative des principaux tissus en radiographie standard',
          colonnes: ['Tissu ou structure', 'Atténuation relative', 'Aspect radiographique'],
          lignes: [
            ['Os', 'Forte (numéro atomique effectif élevé, calcium)', 'Blanc (opacité)'],
            ['Tissus mous (muscle, organes pleins)', 'Intermédiaire', 'Gris'],
            ['Graisse', 'Faible à intermédiaire', 'Gris plus sombre que les tissus mous'],
            ['Air', 'Très faible', 'Noir (clarté)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Produits de contraste iodés et barytés',
          texte:
            "Pour améliorer la visibilité de structures peu contrastées naturellement (vaisseaux, tube digestif), on administre des produits de contraste contenant des éléments de numéro atomique élevé (iode, Z = 53 ; baryum, Z = 56), qui augmentent fortement l’atténuation locale par effet photoélectrique et apparaissent donc blancs sur l’image.",
        },
      ],
    },
    {
      id: 'effets-biologiques',
      titre: 'Effets biologiques des rayonnements ionisants',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les rayonnements ionisants déposent de l’énergie dans la matière vivante, provoquant des lésions moléculaires, en particulier de l’ADN, directement ou indirectement via la radiolyse de l’eau et la production de radicaux libres.",
        },
        {
          type: 'comparaison',
          titre: 'Effets déterministes et effets stochastiques',
          gauche: {
            titre: 'Effets déterministes',
            points: [
              'Existence d’un seuil de dose en dessous duquel l’effet ne survient pas',
              'Gravité proportionnelle à la dose reçue au-delà du seuil',
              'Exemples : érythème cutané, épilation, syndrome d’irradiation aiguë',
            ],
          },
          droite: {
            titre: 'Effets stochastiques',
            points: [
              'Pas de seuil de dose identifié (relation supposée linéaire sans seuil)',
              'Probabilité de survenue proportionnelle à la dose, mais gravité indépendante de la dose',
              'Exemples : cancer radio-induit, effets héréditaires',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Pourquoi cette distinction est fondamentale en radioprotection',
          texte:
            "Pour les effets déterministes, la radioprotection vise à rester strictement en dessous du seuil de dose connu. Pour les effets stochastiques, dont on considère qu’il n’existe pas de seuil, la radioprotection vise à minimiser autant que possible la dose reçue (principe ALARA), puisque tout niveau d’exposition, même faible, est considéré comme porteur d’un risque non nul.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’effet photoélectrique consiste en l’absorption totale d’un photon par un électron lié, avec forte dépendance au numéro atomique Z du matériau.",
    "L’effet Compton consiste en une diffusion partielle d’énergie sur un électron peu lié, avec production d’un photon diffusé qui dégrade le contraste.",
    "La loi d’atténuation exponentielle, I = I0 x exp(-mu x x), et la couche de demi-atténuation, CDA = ln(2)/mu, décrivent la traversée d’un matériau par un faisceau de photons.",
    "Le contraste radiologique résulte des différences d’atténuation entre tissus, l’os apparaissant blanc et l’air noir sur une radiographie standard.",
    "Les produits de contraste iodés ou barytés exploitent leur numéro atomique élevé pour augmenter localement l’atténuation par effet photoélectrique.",
    "Les effets déterministes des rayonnements ionisants ont un seuil de dose et une gravité proportionnelle à la dose ; les effets stochastiques n’ont pas de seuil identifié et leur probabilité, non leur gravité, augmente avec la dose.",
  ],
  erreursFrequentes: [
    "Confondre effet photoélectrique (absorption totale, forte dépendance en Z) et effet Compton (diffusion partielle, faible dépendance en Z).",
    "Croire que le rayonnement diffusé Compton contribue positivement à la qualité de l’image radiologique, alors qu’il la dégrade.",
    "Oublier que le coefficient d’atténuation linéique mu dépend à la fois du matériau et de l’énergie du rayonnement, et n’est donc pas une constante universelle.",
    "Confondre la couche de demi-atténuation, propre à un couple matériau-énergie donné, avec la période radioactive, propre à un radionucléide.",
    "Penser que les effets stochastiques ont un seuil de dose en dessous duquel le risque est nul : le modèle retenu en radioprotection est celui d’une relation linéaire sans seuil.",
    "Croire que la gravité d’un effet stochastique dépend de la dose reçue : seule sa probabilité de survenue en dépend, pas sa gravité.",
  ],
  mnemotechniques: [
    {
      moyen: '« Photoélectrique = photon Prisonnier »',
      explication:
        "Rappelle que lors de l’effet photoélectrique, le photon incident disparaît entièrement, « prisonnier » de l’interaction, contrairement à l’effet Compton où le photon est seulement dévié.",
    },
    {
      moyen: '« Compton = photon Continue, dévié »',
      explication:
        "Le photon Compton continue sa route après l’interaction, avec une énergie diminuée et une trajectoire déviée, contrairement au photon photoélectrique qui disparaît.",
    },
    {
      moyen: '« Déterministe = Dose-Dépendant avec seuil »',
      explication:
        "Les effets déterministes ont un seuil et leur gravité dépend de la dose ; à l’inverse, les effets stochastiques n’ont pas de seuil identifié.",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Radioprotection, collection Med-Line',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-01',
      recto: 'Que devient le photon incident lors d’un effet photoélectrique ?',
      verso: 'Il disparaît entièrement, ayant cédé toute son énergie à un électron lié qui est éjecté.',
      type: 'mecanisme',
      tags: ['effet photoélectrique'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-02',
      recto: 'De quel facteur du matériau dépend fortement la probabilité d’effet photoélectrique ?',
      verso: 'Le numéro atomique Z du matériau ; la probabilité augmente fortement avec Z.',
      type: 'mecanisme',
      tags: ['effet photoélectrique'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-03',
      recto: 'Que devient le photon incident lors d’un effet Compton ?',
      verso: 'Il est dévié de sa trajectoire initiale et poursuit son parcours avec une énergie diminuée (photon diffusé).',
      type: 'mecanisme',
      tags: ['effet Compton'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-04',
      recto: 'Pourquoi le rayonnement diffusé Compton dégrade-t-il la qualité de l’image radiologique ?',
      verso: 'Il atteint le détecteur sans avoir suivi une trajectoire rectiligne, apportant un signal parasite qui réduit le contraste.',
      type: 'mecanisme',
      tags: ['effet Compton', 'contraste'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-05',
      recto: 'Écrire la loi d’atténuation exponentielle d’un faisceau de photons.',
      verso: 'I = I0 x exp(-mu x x), mu étant le coefficient d’atténuation linéique.',
      type: 'formule',
      tags: ['atténuation'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-06',
      recto: 'Définir la couche de demi-atténuation et sa formule.',
      verso: 'Épaisseur nécessaire pour réduire de moitié l’intensité d’un faisceau : CDA = ln(2) / mu.',
      type: 'formule',
      tags: ['couche de demi-atténuation'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-07',
      recto: 'Pourquoi l’os apparaît-il blanc sur une radiographie standard ?',
      verso: 'Parce que son numéro atomique effectif élevé (calcium) et sa densité favorisent une forte atténuation par effet photoélectrique, réduisant fortement le rayonnement transmis.',
      type: 'mecanisme',
      tags: ['contraste radiologique'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-08',
      recto: 'Pourquoi utilise-t-on l’iode comme produit de contraste ?',
      verso: 'Son numéro atomique élevé (Z = 53) augmente fortement l’atténuation locale par effet photoélectrique, rendant les structures opacifiées visibles en blanc.',
      type: 'clinique',
      tags: ['produits de contraste'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-09',
      recto: 'Quelle est la différence essentielle entre effets déterministes et effets stochastiques ?',
      verso: 'Les effets déterministes ont un seuil de dose et une gravité dose-dépendante ; les effets stochastiques n’ont pas de seuil identifié et seule leur probabilité (pas leur gravité) dépend de la dose.',
      type: 'definition',
      tags: ['effets biologiques'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-10',
      recto: 'Citer un exemple d’effet déterministe des rayonnements ionisants.',
      verso: 'L’érythème cutané, l’épilation ou le syndrome d’irradiation aiguë.',
      type: 'clinique',
      tags: ['effets déterministes'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-11',
      recto: 'Citer un exemple d’effet stochastique des rayonnements ionisants.',
      verso: 'Le cancer radio-induit ou les effets héréditaires.',
      type: 'clinique',
      tags: ['effets stochastiques'],
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-fc-12',
      recto: 'À quoi servent les grilles anti-diffusantes en radiographie ?',
      verso: 'À limiter la quantité de rayonnement diffusé (Compton) atteignant le détecteur, améliorant ainsi le contraste de l’image.',
      type: 'mecanisme',
      tags: ['grille anti-diffusante'],
    },
  ],
  qcm: [
    {
      id: 'ue3-interactions-rayonnement-matiere-qcm-01',
      enonce: 'Concernant l’effet photoélectrique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le photon incident disparaît entièrement lors de l’interaction.',
          vraie: true,
          justification: 'Exact, il cède toute son énergie à l’électron éjecté.',
        },
        {
          lettre: 'B',
          texte: 'L’effet photoélectrique concerne préférentiellement les électrons peu liés des couches périphériques.',
          vraie: false,
          justification: "Il concerne au contraire préférentiellement les électrons fortement liés des couches internes, souvent la couche K.",
        },
        {
          lettre: 'C',
          texte: 'La probabilité d’effet photoélectrique augmente fortement avec le numéro atomique du matériau.',
          vraie: true,
          justification: "Exact, cette dépendance forte en Z explique son rôle central dans le contraste radiologique.",
        },
        {
          lettre: 'D',
          texte: 'L’effet photoélectrique peut se produire même si l’énergie du photon est inférieure à l’énergie de liaison de l’électron.',
          vraie: false,
          justification: "Non, l’énergie du photon doit être au moins égale à l’énergie de liaison de l’électron pour que l’interaction se produise.",
        },
        {
          lettre: 'E',
          texte: 'La lacune électronique créée peut s’accompagner d’une émission de rayonnement de fluorescence.',
          vraie: true,
          justification: "Exact, lorsqu’un électron périphérique comble la lacune de la couche interne.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-qcm-02',
      enonce: 'Concernant l’effet Compton, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le photon incident cède une partie seulement de son énergie.',
          vraie: true,
          justification: 'Exact, contrairement à l’effet photoélectrique où toute l’énergie est cédée.',
        },
        {
          lettre: 'B',
          texte: 'Le photon diffusé disparaît après l’interaction.',
          vraie: false,
          justification: "Faux, il poursuit sa trajectoire, déviée, avec une énergie réduite.",
        },
        {
          lettre: 'C',
          texte: 'L’effet Compton dépend fortement du numéro atomique du matériau, de façon comparable à l’effet photoélectrique.',
          vraie: false,
          justification: "L’effet Compton dépend peu du numéro atomique, à la différence de l’effet photoélectrique.",
        },
        {
          lettre: 'D',
          texte: 'Le rayonnement diffusé Compton contribue à dégrader le contraste de l’image radiologique.',
          vraie: true,
          justification: "Exact, il apporte un signal parasite qui réduit le contraste.",
        },
        {
          lettre: 'E',
          texte: 'L’effet Compton devient prédominant aux énergies élevées utilisées en radiothérapie.',
          vraie: true,
          justification: "Exact, à ces énergies, l’effet photoélectrique devient négligeable.",
        },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-qcm-03',
      enonce: 'Concernant la loi d’atténuation et la couche de demi-atténuation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La loi d’atténuation d’un faisceau de photons est de forme exponentielle décroissante.',
          vraie: true,
          justification: 'Exact : I = I0 x exp(-mu x x).',
        },
        {
          lettre: 'B',
          texte: 'Le coefficient d’atténuation linéique mu est indépendant de l’énergie du rayonnement.',
          vraie: false,
          justification: "Faux, mu dépend à la fois du matériau et de l’énergie du photon incident.",
        },
        {
          lettre: 'C',
          texte: 'La couche de demi-atténuation est l’épaisseur nécessaire pour réduire l’intensité du faisceau de moitié.',
          vraie: true,
          justification: 'Exact, par définition.',
        },
        {
          lettre: 'D',
          texte: 'Plus le matériau est dense et de numéro atomique élevé, plus la couche de demi-atténuation est grande.',
          vraie: false,
          justification: "C’est l’inverse : un matériau plus dense et de numéro atomique plus élevé atténue davantage, donc sa couche de demi-atténuation est plus petite.",
        },
        {
          lettre: 'E',
          texte: 'La formule de la couche de demi-atténuation est mathématiquement analogue à celle de la période radioactive.',
          vraie: true,
          justification: "Exact, les deux lois ont la même forme exponentielle, CDA = ln(2)/mu étant l’analogue de T = ln(2)/lambda.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-qcm-04',
      enonce: 'Concernant le contraste radiologique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’air apparaît blanc sur une radiographie standard.',
          vraie: false,
          justification: "L’air, peu atténuant, apparaît noir (clarté) sur une radiographie standard, l’os apparaissant blanc.",
        },
        {
          lettre: 'B',
          texte: 'L’os apparaît blanc sur une radiographie standard.',
          vraie: true,
          justification: "Exact, en raison de sa forte atténuation liée à sa densité et à son numéro atomique effectif élevé.",
        },
        {
          lettre: 'C',
          texte: 'Les produits de contraste iodés exploitent un numéro atomique élevé pour augmenter l’atténuation locale.',
          vraie: true,
          justification: "Exact, l’iode a un numéro atomique de 53, ce qui favorise fortement l’effet photoélectrique.",
        },
        {
          lettre: 'D',
          texte: 'Le contraste radiologique résulte uniquement des différences d’épaisseur des tissus traversés.',
          vraie: false,
          justification: "Il résulte des différences d’atténuation, qui dépendent à la fois de l’épaisseur, de la densité et du numéro atomique effectif des tissus.",
        },
        {
          lettre: 'E',
          texte: 'Les tissus mous ont une atténuation intermédiaire entre celle de l’os et celle de l’air.',
          vraie: true,
          justification: 'Exact, ce qui explique leur aspect radiologique gris intermédiaire.',
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-qcm-05',
      enonce: 'Concernant les effets biologiques des rayonnements ionisants, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les effets déterministes présentent un seuil de dose.',
          vraie: true,
          justification: 'Exact, c’est leur caractéristique principale.',
        },
        {
          lettre: 'B',
          texte: 'La gravité d’un effet stochastique augmente avec la dose reçue.',
          vraie: false,
          justification: "Faux, c’est la probabilité de survenue qui augmente avec la dose, pas la gravité de l’effet.",
        },
        {
          lettre: 'C',
          texte: 'Le cancer radio-induit est un exemple d’effet stochastique.',
          vraie: true,
          justification: 'Exact, sans seuil de dose identifié.',
        },
        {
          lettre: 'D',
          texte: 'L’érythème cutané radio-induit est un exemple d’effet stochastique.',
          vraie: false,
          justification: "C’est un exemple d’effet déterministe, avec un seuil de dose et une gravité dose-dépendante.",
        },
        {
          lettre: 'E',
          texte: 'Le modèle linéaire sans seuil est utilisé pour estimer le risque d’effets stochastiques.',
          vraie: true,
          justification: "Exact, ce modèle sous-tend le principe d’optimisation ALARA en radioprotection.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-interactions-rayonnement-matiere-qcm-06',
      enonce: 'Concernant la comparaison entre effet photoélectrique et effet Compton, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’effet photoélectrique prédomine plutôt aux basses énergies de photons.',
          vraie: true,
          justification: "Exact, sa probabilité diminue rapidement quand l’énergie augmente.",
        },
        {
          lettre: 'B',
          texte: 'L’effet Compton dépend fortement du numéro atomique du matériau, contrairement à l’effet photoélectrique.',
          vraie: false,
          justification: "C’est l’inverse : l’effet photoélectrique dépend fortement de Z, l’effet Compton en dépend peu.",
        },
        {
          lettre: 'C',
          texte: 'Le rayonnement diffusé Compton peut augmenter l’exposition du personnel médical présent dans la salle d’examen.',
          vraie: true,
          justification: "Exact, ce rayonnement diffusé constitue une source d’exposition externe secondaire.",
        },
        {
          lettre: 'D',
          texte: 'L’effet photoélectrique conserve la trajectoire du photon incident, uniquement atténuée en énergie.',
          vraie: false,
          justification: "Faux, le photon incident disparaît totalement lors de l’effet photoélectrique ; c’est l’effet Compton qui dévie un photon d’énergie réduite.",
        },
        {
          lettre: 'E',
          texte: 'Ces deux effets contribuent tous deux à l’atténuation globale d’un faisceau de rayons X traversant un patient.',
          vraie: true,
          justification: "Exact, ils sont les deux principales interactions responsables de l’atténuation aux énergies diagnostiques.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 3,
    },
  ],
};
