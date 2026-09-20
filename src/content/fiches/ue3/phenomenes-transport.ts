import type { Fiche } from '../../types';

export const ficheProcessusTransport: Fiche = {
  id: 'ue3-phenomenes-transport',
  ue: 'ue3',
  titre: 'Phénomènes de transport',
  sousTitre:
    "Diffusion, lois de Fick, perméabilité membranaire, convection, filtration, dialyse et équilibre de Gibbs-Donnan",
  chapitre: 'Transports et bioélectricité',
  ordre: 4,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'diffusion',
    'lois de Fick',
    'perméabilité',
    'convection',
    'filtration',
    'dialyse',
    'Gibbs-Donnan',
    'gradient de concentration',
  ],
  objectifs: [
    "Distinguer les modes de transport passif (diffusion, filtration) et actif à travers une membrane biologique.",
    "Appliquer la première loi de Fick pour quantifier un flux de diffusion.",
    "Décrire les facteurs qui modifient la perméabilité membranaire à une substance.",
    "Différencier diffusion et convection, et expliquer le principe de la filtration glomérulaire.",
    "Décrire le principe de la dialyse et l’équilibre de Gibbs-Donnan.",
  ],
  sections: [
    {
      id: 'generalites-transport',
      titre: 'Généralités sur les transports transmembranaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les échanges de matière entre compartiments biologiques séparés par une membrane empruntent des mécanismes variés, classés selon qu’ils consomment ou non de l’énergie métabolique et selon le moteur physique du mouvement.",
        },
        {
          type: 'tableau',
          titre: 'Classification des principaux modes de transport',
          colonnes: ['Mode de transport', 'Moteur', 'Consommation d’énergie (ATP)'],
          lignes: [
            ['Diffusion simple', 'Gradient de concentration (ou électrochimique)', 'Non'],
            ['Diffusion facilitée', 'Gradient de concentration, via un transporteur', 'Non'],
            ['Convection (entraînement par le solvant)', 'Gradient de pression hydrostatique', 'Non (indirect)'],
            ['Transport actif primaire', 'Hydrolyse directe de l’ATP', 'Oui'],
            ['Transport actif secondaire', 'Gradient électrochimique d’un autre soluté (cotransport)', 'Indirecte'],
          ],
        },
        {
          type: 'definition',
          terme: 'Transport passif',
          definition:
            "Mouvement de matière qui s’effectue spontanément dans le sens du gradient (de concentration, de pression ou électrochimique), sans apport d’énergie métabolique directe.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Gradient électrochimique',
          texte:
            "Pour une espèce chargée, le mouvement passif dépend à la fois du gradient de concentration et du gradient de potentiel électrique : on parle de gradient électrochimique, dont la somme algébrique détermine le sens spontané du déplacement de l’ion.",
        },
      ],
    },
    {
      id: 'lois-fick',
      titre: 'Les lois de Fick et la diffusion',
      blocs: [
        {
          type: 'definition',
          terme: 'Diffusion',
          definition:
            "Mouvement spontané et aléatoire de particules (agitation thermique) qui tend à uniformiser une concentration dans un milieu, du compartiment le plus concentré vers le compartiment le moins concentré.",
        },
        {
          type: 'formule',
          expression: 'J = -D x (dC/dx)',
          legende:
            "Première loi de Fick : le flux de diffusion J est proportionnel au coefficient de diffusion D et au gradient de concentration dC/dx. Le signe négatif traduit le fait que le flux se dirige des concentrations élevées vers les concentrations faibles, à l’opposé du sens du gradient.",
          unites: 'J en mol/(m²·s), D en m²/s, dC/dx en mol/m⁴ (variation de concentration par unité de distance)',
        },
        {
          type: 'formule',
          expression: 'J = P x S x (C1 - C2)',
          legende:
            "Forme appliquée à une membrane d’épaisseur donnée : le flux net J à travers une surface S est proportionnel au coefficient de perméabilité P de la membrane pour la substance considérée et à la différence de concentration entre les deux compartiments (C1 - C2).",
          unites: 'J en mol/s, P en m/s, S en m², C1 et C2 en mol/m³',
        },
        {
          type: 'liste',
          items: [
            "Le coefficient de diffusion D augmente avec la température et diminue quand la taille de la particule ou la viscosité du milieu augmente (relation d’Einstein-Stokes).",
            "Le flux de diffusion est d’autant plus important que la surface d’échange S est grande et que l’épaisseur de la membrane est faible.",
            "La diffusion est un phénomène lent sur de grandes distances : le temps nécessaire pour parcourir une distance donnée croît avec le carré de cette distance, ce qui limite la diffusion aux échanges de proximité (espace interstitiel, membrane cellulaire).",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Diffusion simple et diffusion facilitée',
          texte:
            "La diffusion simple traverse directement la bicouche lipidique (petites molécules apolaires, gaz respiratoires) ou d’éventuels canaux protéiques. La diffusion facilitée nécessite un transporteur protéique spécifique, saturable au-delà d’une certaine concentration : contrairement à la diffusion simple, le flux atteint un plateau (Vmax) lorsque tous les transporteurs sont occupés.",
        },
      ],
    },
    {
      id: 'permeabilite',
      titre: 'Perméabilité membranaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Perméabilité membranaire (P)',
          definition:
            "Coefficient qui traduit l’aptitude d’une membrane à laisser diffuser une substance donnée, intégrant à la fois le coefficient de diffusion de la substance dans la membrane, son coefficient de partage lipide/eau et l’épaisseur de la membrane.",
        },
        {
          type: 'liste',
          items: [
            "Une molécule liposoluble (apolaire) traverse plus facilement la bicouche lipidique qu’une molécule hydrosoluble de même taille.",
            "Une petite molécule non chargée diffuse plus facilement qu’une grosse molécule ou qu’un ion de même taille, car les ions doivent en plus franchir la barrière énergétique liée à leur charge.",
            "La présence de canaux ou de transporteurs protéiques spécifiques augmente considérablement la perméabilité apparente de la membrane à certaines substances, notamment les ions et l’eau (via les aquaporines).",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Loi de Fick et perméabilité, un piège de vocabulaire',
          texte:
            "Le coefficient de perméabilité P dans J = P x S x (C1 - C2) n’est pas identique au coefficient de diffusion D de la première loi de Fick : P intègre en plus l’épaisseur de la membrane et le coefficient de partage de la substance entre la membrane et le milieu aqueux environnant.",
        },
      ],
    },
    {
      id: 'convection-filtration',
      titre: 'Convection et filtration',
      blocs: [
        {
          type: 'definition',
          terme: 'Convection',
          definition:
            "Entraînement de solutés par le mouvement d’ensemble du solvant sous l’effet d’un gradient de pression hydrostatique, par opposition à la diffusion qui résulte de l’agitation thermique aléatoire des particules.",
        },
        {
          type: 'paragraphe',
          texte:
            "La filtration est un cas particulier de convection à travers une membrane semi-perméable poreuse : le solvant et les solutés de taille inférieure à la taille des pores traversent la membrane sous l’effet d’un gradient de pression, tandis que les molécules plus volumineuses sont retenues.",
        },
        {
          type: 'formule',
          expression: 'Q f = K f x (DeltaP - DeltaPi)',
          legende:
            "Débit de filtration Q f à travers une membrane : K f est le coefficient de filtration (perméabilité hydraulique x surface), DeltaP la différence de pression hydrostatique entre les deux compartiments et DeltaPi la différence de pression oncotique (osmotique) qui s’y oppose.",
          unites: 'Q f en mL/min ou m³/s, K f en mL/(min·mmHg), pressions en mmHg',
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Application : la filtration glomérulaire',
          texte:
            "Au niveau du glomérule rénal, la pression hydrostatique du sang capillaire pousse l’eau et les petits solutés à travers la membrane de filtration, tandis que la pression oncotique du plasma, liée aux protéines qui ne franchissent pas la membrane, s’y oppose. Le débit de filtration glomérulaire résulte de l’équilibre entre ces forces de Starling.",
        },
      ],
    },
    {
      id: 'dialyse-donnan',
      titre: 'Dialyse et équilibre de Gibbs-Donnan',
      blocs: [
        {
          type: 'definition',
          terme: 'Dialyse',
          definition:
            "Technique de séparation qui utilise une membrane semi-perméable perméable aux petites molécules (eau, ions, urée, créatinine) mais imperméable aux grosses molécules (protéines) : les petits solutés diffusent selon leur gradient de concentration vers le dialysat, tandis que les protéines restent dans le compartiment sanguin.",
        },
        {
          type: 'liste',
          items: [
            "En hémodialyse, le sang du patient et un liquide de dialyse (dialysat) circulent de part et d’autre d’une membrane semi-perméable, généralement à contre-courant pour maximiser le gradient de concentration et donc l’efficacité de l’épuration.",
            "Les toxines urémiques (urée, créatinine, potassium en excès) diffusent du sang vers le dialysat, dont la composition est ajustée pour ce faire.",
            "La convection (ultrafiltration) est associée à la diffusion pour retirer l’excès d’eau du patient, sous l’effet d’un gradient de pression transmembranaire imposé par le circuit.",
          ],
        },
        {
          type: 'definition',
          terme: 'Équilibre de Gibbs-Donnan',
          definition:
            "État d’équilibre atteint lorsque deux compartiments sont séparés par une membrane perméable aux petits ions mais imperméable à des macromolécules chargées (par exemple les protéines plasmatiques). La présence de ces macromolécules non diffusibles impose une répartition inégale des petits ions diffusibles de part et d’autre de la membrane, afin de respecter simultanément l’électroneutralité de chaque compartiment.",
        },
        {
          type: 'formule',
          expression: '[Na+]1 x [Cl-]1 = [Na+]2 x [Cl-]2',
          legende:
            "À l’équilibre de Gibbs-Donnan, le produit des concentrations des ions diffusibles de charges opposées est égal de part et d’autre de la membrane (ici illustré pour le couple Na+ / Cl- entre les compartiments 1 et 2).",
          unites: 'concentrations en mmol/L',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Conséquence physiologique',
          texte:
            "Du fait de l’équilibre de Gibbs-Donnan, le compartiment contenant les protéines plasmatiques (chargées négativement) présente une concentration en cations diffusibles légèrement supérieure et une concentration en anions diffusibles légèrement inférieure à celle du compartiment interstitiel dépourvu de protéines. Cette asymétrie contribue, avec la pression oncotique, aux échanges capillaires.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le transport passif (diffusion, convection) ne consomme pas directement d’énergie métabolique, contrairement au transport actif.",
    "La première loi de Fick, J = -D x (dC/dx), relie le flux de diffusion au gradient de concentration.",
    "La perméabilité membranaire dépend de la liposolubilité, de la taille et de la charge de la substance, ainsi que de la présence de transporteurs spécifiques.",
    "La convection est l’entraînement de solutés par le mouvement d’ensemble du solvant sous gradient de pression, à la différence de la diffusion.",
    "La filtration glomérulaire résulte de l’équilibre entre pression hydrostatique et pression oncotique, selon les forces de Starling.",
    "La dialyse associe diffusion (épuration des petites molécules) et convection (ultrafiltration de l’eau).",
    "L’équilibre de Gibbs-Donnan impose une répartition inégale des ions diffusibles de part et d’autre d’une membrane en présence de macromolécules chargées non diffusibles.",
  ],
  erreursFrequentes: [
    "Confondre diffusion et convection : la diffusion est due à l’agitation thermique aléatoire, la convection à un mouvement d’ensemble du solvant sous gradient de pression.",
    "Oublier le signe négatif de la première loi de Fick, qui traduit le sens du flux des zones concentrées vers les zones diluées.",
    "Croire que la diffusion facilitée ne nécessite pas d’énergie parce qu’elle utilise un transporteur : elle reste un transport passif, sans consommation directe d’ATP, à la différence du transport actif.",
    "Confondre le coefficient de diffusion D (propriété de la substance dans un milieu) et le coefficient de perméabilité P (propriété de l’ensemble membrane-substance).",
    "Penser que la filtration glomérulaire ne dépend que de la pression hydrostatique, en oubliant l’opposition de la pression oncotique.",
    "Oublier que l’équilibre de Gibbs-Donnan résulte de la présence de macromolécules chargées non diffusibles, et non d’un défaut de perméabilité aux petits ions eux-mêmes.",
  ],
  mnemotechniques: [
    {
      moyen: '« La diffusion va du plein au vide »',
      explication:
        "Rappelle le sens du flux de diffusion : des concentrations élevées vers les concentrations faibles, conformément au signe négatif de la loi de Fick.",
    },
    {
      moyen: '« Convection = le solvant pousse les solutés »',
      explication:
        "Différencie la convection, entraînement passif par le mouvement d’ensemble du solvant, de la diffusion, mouvement aléatoire individuel des particules.",
    },
    {
      moyen: '« Donnan : les protéines déséquilibrent la balance »',
      explication:
        "La présence de protéines chargées non diffusibles d’un côté de la membrane impose une répartition inégale des petits ions diffusibles de part et d’autre.",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Guyton et Hall, Précis de physiologie médicale',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-phenomenes-transport-fc-01',
      recto: 'Écrire la première loi de Fick.',
      verso: 'J = -D x (dC/dx), où D est le coefficient de diffusion et dC/dx le gradient de concentration.',
      type: 'formule',
      tags: ['diffusion'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-02',
      recto: 'Quelle est la différence entre diffusion simple et diffusion facilitée ?',
      verso: 'La diffusion simple traverse directement la membrane ; la diffusion facilitée passe par un transporteur spécifique, saturable (plateau de flux à forte concentration).',
      type: 'definition',
      tags: ['diffusion facilitée'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-03',
      recto: 'Qu’est-ce que la convection en biophysique des échanges ?',
      verso: 'Entraînement de solutés par le mouvement d’ensemble du solvant, sous l’effet d’un gradient de pression hydrostatique.',
      type: 'definition',
      tags: ['convection'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-04',
      recto: 'Quels facteurs augmentent la perméabilité d’une membrane à une substance ?',
      verso: 'Liposolubilité élevée, petite taille, absence de charge, présence de canaux ou transporteurs spécifiques (comme les aquaporines pour l’eau).',
      type: 'mecanisme',
      tags: ['perméabilité'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-05',
      recto: 'Écrire la formule du débit de filtration à travers une membrane.',
      verso: 'Q f = K f x (DeltaP - DeltaPi), où K f est le coefficient de filtration, DeltaP la différence de pression hydrostatique et DeltaPi la différence de pression oncotique.',
      type: 'formule',
      tags: ['filtration'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-06',
      recto: 'Quelles forces déterminent le débit de filtration glomérulaire ?',
      verso: 'La pression hydrostatique capillaire (favorise la filtration) et la pression oncotique du plasma (s’y oppose) : les forces de Starling.',
      type: 'mecanisme',
      tags: ['filtration glomérulaire'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-07',
      recto: 'À quels solutés une membrane de dialyse est-elle perméable ?',
      verso: 'Aux petites molécules (eau, ions, urée, créatinine), mais imperméable aux grosses molécules comme les protéines.',
      type: 'definition',
      tags: ['dialyse'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-08',
      recto: 'Pourquoi le sang et le dialysat circulent-ils à contre-courant en hémodialyse ?',
      verso: 'Pour maximiser le gradient de concentration entre les deux compartiments tout au long de la membrane, et donc maximiser l’efficacité de l’épuration par diffusion.',
      type: 'mecanisme',
      tags: ['hémodialyse'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-09',
      recto: 'Définir l’équilibre de Gibbs-Donnan.',
      verso: 'État d’équilibre où la présence de macromolécules chargées non diffusibles impose une répartition inégale des ions diffusibles de part et d’autre d’une membrane, tout en respectant l’électroneutralité de chaque compartiment.',
      type: 'definition',
      tags: ['Gibbs-Donnan'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-10',
      recto: 'Écrire la relation d’équilibre de Gibbs-Donnan pour le couple Na+ / Cl-.',
      verso: '[Na+]1 x [Cl-]1 = [Na+]2 x [Cl-]2, le produit des concentrations ioniques étant égal de part et d’autre de la membrane.',
      type: 'formule',
      tags: ['Gibbs-Donnan'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-11',
      recto: 'Quelle est la différence entre le coefficient de diffusion D et le coefficient de perméabilité P ?',
      verso: 'D est une propriété de la substance dans un milieu donné ; P intègre en plus l’épaisseur de la membrane et le coefficient de partage de la substance entre la membrane et le milieu aqueux.',
      type: 'definition',
      tags: ['perméabilité'],
    },
    {
      id: 'ue3-phenomenes-transport-fc-12',
      recto: 'La diffusion facilitée consomme-t-elle de l’ATP ?',
      verso: 'Non : c’est un transport passif qui suit le gradient de concentration, même s’il utilise un transporteur protéique spécifique saturable.',
      type: 'mecanisme',
      tags: ['diffusion facilitée'],
    },
  ],
  qcm: [
    {
      id: 'ue3-phenomenes-transport-qcm-01',
      enonce: 'Concernant les modes de transport transmembranaire, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La diffusion simple ne nécessite pas de transporteur protéique.',
          vraie: true,
          justification: 'Exact : elle traverse directement la bicouche lipidique ou d’éventuels canaux non spécifiques.',
        },
        {
          lettre: 'B',
          texte: 'Le transport actif primaire utilise directement l’hydrolyse de l’ATP.',
          vraie: true,
          justification: 'Exact, comme la pompe Na+/K+-ATPase.',
        },
        {
          lettre: 'C',
          texte: 'La diffusion facilitée consomme directement de l’ATP.',
          vraie: false,
          justification: "Faux : c’est un transport passif, qui suit le gradient de concentration sans apport direct d’énergie.",
        },
        {
          lettre: 'D',
          texte: 'Le transport actif secondaire utilise le gradient électrochimique établi par un transport actif primaire.',
          vraie: true,
          justification: "Exact, c’est le principe du cotransport, par exemple le symport Na+/glucose.",
        },
        {
          lettre: 'E',
          texte: 'La convection est un exemple de transport actif.',
          vraie: false,
          justification: "La convection est un transport passif, entraîné par un gradient de pression hydrostatique, sans consommation directe d’énergie métabolique.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-phenomenes-transport-qcm-02',
      enonce: 'Concernant la première loi de Fick, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le flux de diffusion est proportionnel au gradient de concentration.',
          vraie: true,
          justification: 'Exact : J = -D x (dC/dx).',
        },
        {
          lettre: 'B',
          texte: 'Le flux se dirige des zones les moins concentrées vers les zones les plus concentrées.',
          vraie: false,
          justification: "C’est l’inverse : la diffusion tend à uniformiser la concentration, du compartiment concentré vers le compartiment dilué.",
        },
        {
          lettre: 'C',
          texte: 'Le coefficient de diffusion D augmente lorsque la viscosité du milieu augmente.',
          vraie: false,
          justification: "D diminue lorsque la viscosité augmente, selon la relation d’Einstein-Stokes.",
        },
        {
          lettre: 'D',
          texte: 'Le temps de diffusion sur une distance donnée croît avec le carré de cette distance.',
          vraie: true,
          justification: "Exact : c’est pourquoi la diffusion n’est efficace que sur de courtes distances.",
        },
        {
          lettre: 'E',
          texte: 'Une surface d’échange plus grande augmente le flux de diffusion.',
          vraie: true,
          justification: "Exact : J = P x S x (C1 - C2), le flux est proportionnel à la surface S.",
        },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-phenomenes-transport-qcm-03',
      enonce: 'Concernant la perméabilité membranaire, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une molécule liposoluble traverse plus facilement une membrane biologique qu’une molécule hydrosoluble de taille comparable.',
          vraie: true,
          justification: "Exact, en raison de la nature lipidique de la bicouche membranaire.",
        },
        {
          lettre: 'B',
          texte: 'Un ion diffuse en général plus facilement qu’une molécule non chargée de taille comparable.',
          vraie: false,
          justification: "Un ion diffuse en général moins facilement, sa charge devant franchir une barrière énergétique supplémentaire au sein de la bicouche lipidique.",
        },
        {
          lettre: 'C',
          texte: 'Les aquaporines augmentent la perméabilité membranaire à l’eau.',
          vraie: true,
          justification: 'Exact, ce sont des canaux protéiques spécifiques du transport de l’eau.',
        },
        {
          lettre: 'D',
          texte: 'Le coefficient de perméabilité P est strictement identique au coefficient de diffusion D.',
          vraie: false,
          justification: "Faux : P intègre en plus l’épaisseur de la membrane et le coefficient de partage de la substance.",
        },
        {
          lettre: 'E',
          texte: 'La présence de transporteurs spécifiques peut augmenter fortement la perméabilité apparente d’une membrane.',
          vraie: true,
          justification: "Exact, c’est le principe de la diffusion facilitée.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-phenomenes-transport-qcm-04',
      enonce: 'Concernant la convection et la filtration, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La convection résulte d’un gradient de pression hydrostatique.',
          vraie: true,
          justification: "Exact, c’est le moteur du mouvement d’ensemble du solvant.",
        },
        {
          lettre: 'B',
          texte: 'La filtration glomérulaire n’est déterminée que par la pression hydrostatique capillaire.',
          vraie: false,
          justification: "Elle résulte de l’équilibre entre la pression hydrostatique, qui favorise la filtration, et la pression oncotique, qui s’y oppose.",
        },
        {
          lettre: 'C',
          texte: 'La pression oncotique est liée à la présence de protéines plasmatiques.',
          vraie: true,
          justification: "Exact, les protéines ne traversant pas la membrane de filtration, elles génèrent une pression osmotique qui s’oppose à la filtration.",
        },
        {
          lettre: 'D',
          texte: 'Dans la filtration, seules les molécules de taille inférieure aux pores de la membrane traversent librement.',
          vraie: true,
          justification: "Exact, la membrane filtrante agit comme un tamis moléculaire.",
        },
        {
          lettre: 'E',
          texte: 'Le débit de filtration diminue lorsque la différence de pression hydrostatique augmente.',
          vraie: false,
          justification: "Il augmente au contraire, puisque Q f = K f x (DeltaP - DeltaPi) est une relation croissante avec DeltaP.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-phenomenes-transport-qcm-05',
      enonce: 'Concernant la dialyse, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La membrane de dialyse est perméable aux protéines plasmatiques.',
          vraie: false,
          justification: "Elle est au contraire imperméable aux grosses molécules comme les protéines, tout en étant perméable aux petits solutés.",
        },
        {
          lettre: 'B',
          texte: 'L’épuration des toxines urémiques repose principalement sur la diffusion.',
          vraie: true,
          justification: "Exact : les petites molécules comme l’urée diffusent selon leur gradient de concentration vers le dialysat.",
        },
        {
          lettre: 'C',
          texte: 'L’ultrafiltration en dialyse permet de retirer l’excès d’eau du patient par convection.',
          vraie: true,
          justification: "Exact, un gradient de pression transmembranaire est imposé pour entraîner l’eau en excès.",
        },
        {
          lettre: 'D',
          texte: 'La circulation à contre-courant du sang et du dialysat diminue l’efficacité de l’épuration.',
          vraie: false,
          justification: "Elle l’augmente au contraire, en maximisant le gradient de concentration le long de la membrane.",
        },
        {
          lettre: 'E',
          texte: 'La composition du dialysat est ajustée pour favoriser la diffusion des toxines du sang vers le dialysat.',
          vraie: true,
          justification: "Exact, le dialysat est pauvre en urée, créatinine et potassium en excès afin de créer un gradient favorable à leur élimination.",
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-phenomenes-transport-qcm-06',
      enonce: 'Concernant l’équilibre de Gibbs-Donnan, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il résulte de la présence de macromolécules chargées incapables de traverser la membrane.',
          vraie: true,
          justification: "Exact, c’est le facteur déclenchant de cet équilibre particulier.",
        },
        {
          lettre: 'B',
          texte: 'Il impose une répartition égale des ions diffusibles de part et d’autre de la membrane.',
          vraie: false,
          justification: "Il impose au contraire une répartition inégale des ions diffusibles, pour respecter l’électroneutralité de chaque compartiment.",
        },
        {
          lettre: 'C',
          texte: 'Le produit des concentrations des ions diffusibles de charges opposées est égal de part et d’autre de la membrane à l’équilibre.',
          vraie: true,
          justification: 'Exact : [Na+]1 x [Cl-]1 = [Na+]2 x [Cl-]2.',
        },
        {
          lettre: 'D',
          texte: 'Cet équilibre contribue à la différence de concentration ionique entre le plasma et le liquide interstitiel.',
          vraie: true,
          justification: "Exact, la présence des protéines plasmatiques non diffusibles modifie légèrement la répartition des petits ions diffusibles.",
        },
        {
          lettre: 'E',
          texte: 'L’équilibre de Gibbs-Donnan s’applique uniquement aux gaz.',
          vraie: false,
          justification: "Il s’applique aux solutions ioniques séparées par une membrane semi-perméable en présence de macromolécules chargées non diffusibles.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 3,
    },
  ],
};
