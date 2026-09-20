import type { Fiche } from '../../types';

export const ficheTraficVesiculaire: Fiche = {
  id: 'biocell-trafic-vesiculaire',
  ue: 'biocell',
  titre: 'Trafic vésiculaire, lysosomes et peroxysomes',
  sousTitre: 'Clathrine, COPI, COPII, SNARE, protéines Rab, endocytose, phagocytose et autophagie',
  chapitre: 'Compartiments et trafic',
  ordre: 8,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'clathrine',
    'COPI',
    'COPII',
    'SNARE',
    'protéine Rab',
    'endocytose',
    'phagocytose',
    'lysosome',
    'autophagie',
  ],
  objectifs: [
    'Décrire le rôle des principaux manteaux protéiques (clathrine, COPI, COPII) dans le bourgeonnement vésiculaire.',
    'Expliquer le principe de la fusion membranaire par les protéines SNARE et le rôle des protéines Rab.',
    'Différencier les principales voies d’endocytose, dont la phagocytose et l’endocytose médiée par récepteur.',
    'Décrire la formation et la fonction des lysosomes, ainsi que le rôle du récepteur au mannose-6-phosphate.',
    'Expliquer le principe de l’autophagie et le rôle des peroxysomes.',
  ],
  sections: [
    {
      id: 'manteaux-vesiculaires',
      titre: 'Les manteaux protéiques vésiculaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le trafic intracellulaire entre compartiments membranaires repose sur la formation de vésicules de transport, dont le bourgeonnement est initié par le recrutement local de protéines de manteau qui déforment la membrane et sélectionnent les cargaisons à transporter.",
        },
        {
          type: 'tableau',
          titre: 'Les trois principaux manteaux vésiculaires',
          colonnes: ['Manteau', 'Origine', 'Destination'],
          lignes: [
            ['Clathrine', 'Membrane plasmique, réseau trans-golgien', 'Endosomes (endocytose) ou lysosomes'],
            ['COPII', 'Réticulum endoplasmique', 'Appareil de Golgi (transport antérograde)'],
            ['COPI', 'Appareil de Golgi', 'Réticulum endoplasmique (transport rétrograde) et entre citernes golgiennes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le sens des manteaux COP',
          texte:
            "COPII fait sortir du réticulum vers le Golgi (comme deux lettres, deux pas en avant) ; COPI ramène du Golgi vers le réticulum (transport rétrograde, de récupération des protéines résidentes du réticulum égarées).",
        },
      ],
    },
    {
      id: 'clathrine',
      titre: 'La clathrine et le bourgeonnement vésiculaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La clathrine est une protéine qui s’assemble en un réseau de triskèles formant une cage polyédrique à la face cytosolique de la membrane, déformant progressivement celle-ci jusqu’au bourgeonnement complet d’une vésicule.",
        },
        {
          type: 'etapes',
          titre: 'Formation d’une vésicule à clathrine',
          etapes: [
            {
              titre: 'Recrutement des protéines adaptatrices',
              detail: "Des protéines adaptatrices (adaptines) reconnaissent des signaux de tri portés par les protéines transmembranaires cargo et recrutent la clathrine.",
            },
            {
              titre: 'Polymérisation de la clathrine',
              detail: "La clathrine s’assemble en cage, ce qui courbe progressivement la membrane vers l’intérieur du cytosol.",
            },
            {
              titre: 'Fission de la vésicule',
              detail: "Une protéine GTPase, la dynamine, s’enroule autour du col de la vésicule naissante et, par hydrolyse du GTP, provoque sa fission complète.",
            },
            {
              titre: 'Décapage de la vésicule',
              detail: "Une fois libre dans le cytosol, la vésicule perd son manteau de clathrine, ce qui la rend apte à fusionner avec sa membrane cible.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Dynamine',
          definition:
            "GTPase qui s’enroule en spirale autour du col d’une vésicule en formation et catalyse sa fission de la membrane donneuse, grâce à l’énergie libérée par l’hydrolyse du GTP.",
        },
      ],
    },
    {
      id: 'snare-rab',
      titre: 'Protéines SNARE et protéines Rab',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’adressage et la fusion spécifiques d’une vésicule avec sa membrane cible reposent sur deux familles de protéines complémentaires : les protéines Rab, qui interviennent dans la reconnaissance et l’arrimage initial, et les protéines SNARE, qui assurent la fusion membranaire proprement dite.",
        },
        {
          type: 'liste',
          items: [
            "Chaque compartiment membranaire porte une protéine Rab spécifique, une petite GTPase qui recrute des protéines effectrices assurant l’arrimage (« tethering ») de la vésicule avant la fusion.",
            "Les protéines v-SNARE, portées par la vésicule, s’apparient avec les protéines t-SNARE de la membrane cible, formant un complexe très stable en hélice enroulée qui rapproche les deux membranes jusqu’à leur fusion.",
            "La spécificité de l’appariement SNARE contribue à garantir qu’une vésicule fusionne uniquement avec le compartiment approprié.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une reconnaissance à double niveau',
          texte:
            "Les protéines Rab assurent une première reconnaissance, générale, du bon compartiment ; les protéines SNARE assurent ensuite une reconnaissance plus fine et catalysent la fusion elle-même. Ces deux niveaux de contrôle limitent le risque de fusion avec un mauvais compartiment.",
        },
      ],
    },
    {
      id: 'endocytose',
      titre: 'Les voies d’endocytose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’endocytose regroupe l’ensemble des mécanismes par lesquels la cellule internalise des macromolécules, des particules ou du liquide extracellulaire, par invagination puis fission d’une portion de la membrane plasmique.",
        },
        {
          type: 'tableau',
          titre: 'Principales voies d’endocytose',
          colonnes: ['Voie', 'Principe', 'Exemple'],
          lignes: [
            ['Phagocytose', 'Internalisation de grosses particules (bactéries, débris) par extension de la membrane autour de la cible', 'Macrophages, polynucléaires neutrophiles'],
            ['Pinocytose', 'Internalisation non spécifique de liquide extracellulaire et de petites molécules dissoutes', 'La plupart des cellules eucaryotes'],
            ['Endocytose médiée par récepteur', 'Internalisation spécifique après fixation d’un ligand sur un récepteur membranaire, via des puits à clathrine', 'Internalisation du récepteur aux LDL, du fer lié à la transferrine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Hypercholestérolémie familiale',
          texte:
            "Certaines formes d’hypercholestérolémie familiale résultent de mutations du récepteur aux LDL empêchant son internalisation par endocytose médiée par la clathrine, ce qui provoque une accumulation de cholestérol circulant et un risque cardiovasculaire précoce.",
        },
        {
          type: 'paragraphe',
          texte:
            "Après internalisation, les vésicules fusionnent en général avec des endosomes précoces, compartiments de tri où le devenir du contenu internalisé est déterminé : recyclage vers la membrane plasmique, ou acheminement vers des endosomes tardifs puis vers les lysosomes.",
        },
      ],
    },
    {
      id: 'lysosomes',
      titre: 'Les lysosomes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les lysosomes sont des organites délimités par une membrane unique, riches en enzymes hydrolytiques actives à pH acide, responsables de la dégradation de macromolécules issues de l’endocytose, de la phagocytose ou de l’autophagie.",
        },
        {
          type: 'definition',
          terme: 'Hydrolase acide',
          definition:
            "Enzyme lysosomale dont l’activité optimale se situe à un pH voisin de 5, maintenu dans la lumière du lysosome par des pompes à protons de type V-ATPase.",
        },
        {
          type: 'liste',
          items: [
            "Les enzymes lysosomales sont synthétisées dans le réticulum endoplasmique rugueux, marquées par du mannose-6-phosphate dans le Golgi, puis adressées aux lysosomes via un récepteur spécifique du réseau trans-golgien.",
            "Le pH acide de la lumière lysosomale protège le reste de la cellule en cas de fuite accidentelle d’enzymes, celles-ci étant beaucoup moins actives au pH neutre du cytosol.",
            "Les lysosomes dégradent aussi bien du matériel extracellulaire internalisé (hétérophagie) que des constituants propres à la cellule (autophagie).",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Maladies lysosomales de surcharge',
          texte:
            "Les maladies lysosomales de surcharge résultent du déficit héréditaire d’une enzyme lysosomale, entraînant l’accumulation intracellulaire progressive de son substrat non dégradé. La maladie de Gaucher (déficit en glucocérébrosidase) et la maladie de Tay-Sachs (déficit en hexosaminidase A) en sont des exemples classiques.",
        },
      ],
    },
    {
      id: 'autophagie-peroxysomes',
      titre: 'Autophagie et peroxysomes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’autophagie est le processus par lequel la cellule dégrade ses propres constituants, organites endommagés ou macromolécules, en les acheminant vers le lysosome. La macroautophagie en est la forme la plus étudiée.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la macroautophagie',
          etapes: [
            {
              titre: 'Formation de l’autophagosome',
              detail: "Une membrane d’isolement s’étend progressivement pour séquestrer une portion de cytoplasme ou un organite endommagé, formant une vésicule à double membrane, l’autophagosome.",
            },
            {
              titre: 'Fusion avec le lysosome',
              detail: "L’autophagosome fusionne avec un lysosome pour former un autolysosome.",
            },
            {
              titre: 'Dégradation du contenu',
              detail: "Les hydrolases acides du lysosome dégradent le contenu séquestré, dont les produits (acides aminés, lipides) peuvent être recyclés par la cellule.",
            },
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Les peroxysomes sont des organites distincts des lysosomes, délimités par une seule membrane, dépourvus d’ADN propre, dont les protéines sont importées après leur synthèse complète dans le cytosol. Ils contiennent des enzymes oxydatives, notamment la catalase, qui dégrade le peroxyde d’hydrogène produit par d’autres réactions d’oxydation, ainsi que des enzymes impliquées dans la bêta-oxydation des acides gras à très longue chaîne.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre lysosome et peroxysome',
          texte:
            "Le lysosome dégrade des macromolécules variées à pH acide grâce à des hydrolases ; le peroxysome réalise des réactions d’oxydation, notamment la dégradation du peroxyde d’hydrogène par la catalase, et l’oxydation des acides gras à très longue chaîne. Leurs enzymes, leur biogenèse et leurs fonctions sont distinctes.",
        },
      ],
    },
  ],
  pointsCles: [
    "La clathrine forme un manteau vésiculaire à la membrane plasmique et au réseau trans-golgien, avec l’aide des adaptines et de la dynamine pour la fission.",
    "COPII assure le transport antérograde du réticulum vers le Golgi ; COPI assure le transport rétrograde du Golgi vers le réticulum.",
    "Les protéines Rab assurent une première reconnaissance du compartiment cible ; les protéines SNARE catalysent ensuite la fusion membranaire.",
    "Les principales voies d’endocytose sont la phagocytose, la pinocytose et l’endocytose médiée par récepteur.",
    "Les lysosomes contiennent des hydrolases acides actives à pH voisin de 5, adressées grâce au marqueur mannose-6-phosphate.",
    "L’autophagie dégrade les constituants propres de la cellule via la formation d’un autophagosome puis d’un autolysosome.",
    "Les peroxysomes, distincts des lysosomes, réalisent des réactions d’oxydation, notamment via la catalase.",
  ],
  erreursFrequentes: [
    "Inverser les sens de transport de COPI et COPII : COPII va du réticulum vers le Golgi, COPI du Golgi vers le réticulum.",
    "Confondre le rôle des protéines Rab et des protéines SNARE : les Rab interviennent en amont, dans la reconnaissance, les SNARE catalysent la fusion elle-même.",
    "Croire que la dynamine intervient dans la fusion vésiculaire : elle intervient dans la fission, au moment du détachement de la vésicule.",
    "Confondre phagocytose et pinocytose : la phagocytose concerne de grosses particules, la pinocytose du liquide et de petites molécules dissoutes.",
    "Penser que les lysosomes et les peroxysomes partagent les mêmes enzymes : leurs contenus enzymatiques et leurs fonctions sont distincts.",
    "Oublier que les protéines des peroxysomes sont importées après avoir été entièrement synthétisées dans le cytosol, sans passer par le réticulum endoplasmique.",
  ],
  mnemotechniques: [
    {
      moyen: '« COPII sort du RE, COPI y revient »',
      explication: 'COPII bourgeonne au réticulum endoplasmique pour aller vers le Golgi ; COPI bourgeonne au Golgi pour revenir vers le réticulum.',
    },
    {
      moyen: '« Rab reconnaît, SNARE fusionne »',
      explication: 'Les protéines Rab assurent la reconnaissance initiale du compartiment ; les protéines SNARE réalisent ensuite la fusion membranaire.',
    },
    {
      moyen: '« Catalase = peroxysome, hydrolase = lysosome »',
      explication: 'La catalase, enzyme antioxydante, est caractéristique du peroxysome ; les hydrolases acides sont caractéristiques du lysosome.',
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
      id: 'biocell-trafic-vesiculaire-fc-01',
      recto: 'Quel manteau vésiculaire assure le transport antérograde du réticulum vers le Golgi ?',
      verso: 'COPII.',
      type: 'classification',
      tags: ['COPII'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-02',
      recto: 'Quel manteau vésiculaire assure le transport rétrograde du Golgi vers le réticulum ?',
      verso: 'COPI.',
      type: 'classification',
      tags: ['COPI'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-03',
      recto: 'Quelle protéine GTPase catalyse la fission d’une vésicule à clathrine ?',
      verso: 'La dynamine, qui s’enroule autour du col de la vésicule naissante.',
      type: 'mecanisme',
      tags: ['clathrine', 'dynamine'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-04',
      recto: 'Quel est le rôle des protéines Rab dans le trafic vésiculaire ?',
      verso: 'Assurer la reconnaissance initiale et l’arrimage d’une vésicule au bon compartiment cible.',
      type: 'mecanisme',
      tags: ['Rab'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-05',
      recto: 'Quel est le rôle des protéines SNARE ?',
      verso: 'Catalyser la fusion entre la membrane de la vésicule et celle du compartiment cible.',
      type: 'mecanisme',
      tags: ['SNARE'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-06',
      recto: 'Quelle est la différence entre phagocytose et pinocytose ?',
      verso: 'La phagocytose internalise de grosses particules ; la pinocytose internalise du liquide extracellulaire et de petites molécules dissoutes.',
      type: 'classification',
      tags: ['phagocytose', 'pinocytose'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-07',
      recto: 'Quel récepteur permet aux enzymes lysosomales d’être adressées aux lysosomes ?',
      verso: 'Le récepteur au mannose-6-phosphate.',
      type: 'mecanisme',
      tags: ['lysosome', 'mannose-6-phosphate'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-08',
      recto: 'Quel est le pH optimal des hydrolases lysosomales ?',
      verso: 'Un pH voisin de 5, acide.',
      type: 'chiffre',
      tags: ['lysosome', 'pH'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-09',
      recto: 'Quelle maladie lysosomale résulte d’un déficit en glucocérébrosidase ?',
      verso: 'La maladie de Gaucher.',
      type: 'clinique',
      tags: ['maladie de Gaucher'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-10',
      recto: 'Comment se nomme la vésicule à double membrane formée lors de la macroautophagie ?',
      verso: 'L’autophagosome.',
      type: 'definition',
      tags: ['autophagie'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-11',
      recto: 'Quelle enzyme caractéristique du peroxysome dégrade le peroxyde d’hydrogène ?',
      verso: 'La catalase.',
      type: 'mecanisme',
      tags: ['peroxysome', 'catalase'],
    },
    {
      id: 'biocell-trafic-vesiculaire-fc-12',
      recto: 'Comment les protéines peroxysomales sont-elles importées dans le peroxysome ?',
      verso: 'Après avoir été entièrement synthétisées dans le cytosol, contrairement aux protéines du réticulum importées de façon cotraductionnelle.',
      type: 'mecanisme',
      tags: ['peroxysome', 'import protéique'],
    },
  ],
  qcm: [
    {
      id: 'biocell-trafic-vesiculaire-qcm-01',
      enonce: 'Concernant les manteaux vésiculaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La clathrine intervient dans l’endocytose à partir de la membrane plasmique.', vraie: true, justification: 'C’est l’une de ses localisations caractéristiques, avec le réseau trans-golgien.' },
        { lettre: 'B', texte: 'COPII assure le transport du Golgi vers le réticulum.', vraie: false, justification: 'C’est COPI qui assure ce transport rétrograde ; COPII fait le trajet inverse, du réticulum vers le Golgi.' },
        { lettre: 'C', texte: 'COPI assure le transport rétrograde du Golgi vers le réticulum.', vraie: true, justification: 'C’est le sens de transport caractéristique du manteau COPI.' },
        { lettre: 'D', texte: 'La dynamine est nécessaire à la fission des vésicules à clathrine.', vraie: true, justification: 'Cette GTPase s’enroule autour du col de la vésicule et catalyse sa fission.' },
        { lettre: 'E', texte: 'Les adaptines recrutent la clathrine en reconnaissant des signaux de tri sur les protéines cargo.', vraie: true, justification: 'C’est leur rôle dans la formation du manteau de clathrine.' },
      ],
      correction: 'Réponses exactes : A, C, D et E. Bien retenir le sens opposé de COPI et COPII.',
      difficulte: 2,
    },
    {
      id: 'biocell-trafic-vesiculaire-qcm-02',
      enonce: 'Concernant les protéines Rab et SNARE, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les protéines Rab sont des petites GTPases.', vraie: true, justification: 'C’est leur nature moléculaire, appartenant à la superfamille des petites GTPases Ras.' },
        { lettre: 'B', texte: 'Les protéines SNARE assurent la reconnaissance initiale du compartiment cible.', vraie: false, justification: 'Cette reconnaissance initiale revient aux protéines Rab ; les SNARE catalysent la fusion elle-même.' },
        { lettre: 'C', texte: 'Une v-SNARE portée par la vésicule s’apparie avec une t-SNARE de la membrane cible.', vraie: true, justification: 'C’est le mécanisme d’appariement qui précède et catalyse la fusion membranaire.' },
        { lettre: 'D', texte: 'La spécificité de l’appariement SNARE contribue à la fidélité du trafic vésiculaire.', vraie: true, justification: 'Elle limite le risque de fusion d’une vésicule avec un mauvais compartiment.' },
        { lettre: 'E', texte: 'Chaque compartiment membranaire est associé à une protéine Rab spécifique.', vraie: true, justification: 'C’est ce qui confère son identité fonctionnelle à chaque compartiment du trafic vésiculaire.' },
      ],
      correction: 'Réponses exactes : A, C, D et E. Retenir que la reconnaissance initiale revient aux Rab, la fusion aux SNARE.',
      difficulte: 2,
    },
    {
      id: 'biocell-trafic-vesiculaire-qcm-03',
      enonce: 'Concernant les voies d’endocytose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phagocytose est réservée à l’internalisation de grosses particules.', vraie: true, justification: 'C’est sa caractéristique par rapport à la pinocytose, qui concerne du liquide et de petites molécules.' },
        { lettre: 'B', texte: 'L’endocytose médiée par récepteur est un processus non spécifique.', vraie: false, justification: 'Elle est au contraire spécifique, dépendant de la fixation d’un ligand sur son récepteur membranaire.' },
        { lettre: 'C', texte: 'Le récepteur aux LDL est internalisé par endocytose médiée par la clathrine.', vraie: true, justification: 'C’est l’exemple classique de cette voie d’internalisation spécifique.' },
        { lettre: 'D', texte: 'Certaines formes d’hypercholestérolémie familiale résultent d’un défaut d’internalisation du récepteur aux LDL.', vraie: true, justification: 'Des mutations empêchant cette internalisation entraînent une accumulation de LDL circulant.' },
        { lettre: 'E', texte: 'Le matériel internalisé par endocytose est directement acheminé aux lysosomes, sans étape intermédiaire.', vraie: false, justification: 'Il transite d’abord par des endosomes précoces, compartiments de tri, avant un éventuel acheminement vers les lysosomes.' },
      ],
      correction: 'Réponses exactes : A, C et D. Le trafic endocytaire passe systématiquement par les endosomes précoces.',
      difficulte: 2,
    },
    {
      id: 'biocell-trafic-vesiculaire-qcm-04',
      enonce: 'Concernant les lysosomes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les hydrolases lysosomales sont optimalement actives à pH acide.', vraie: true, justification: 'Leur pH optimal est voisin de 5, maintenu par des pompes à protons.' },
        { lettre: 'B', texte: 'Le marqueur mannose-6-phosphate est ajouté aux enzymes lysosomales dans l’appareil de Golgi.', vraie: true, justification: 'C’est dans le Golgi que ce marqueur de tri est apposé sur les enzymes destinées aux lysosomes.' },
        { lettre: 'C', texte: 'Les lysosomes ne dégradent que du matériel provenant de l’extérieur de la cellule.', vraie: false, justification: 'Ils dégradent aussi bien du matériel extracellulaire internalisé que des constituants propres à la cellule, via l’autophagie.' },
        { lettre: 'D', texte: 'La maladie de Tay-Sachs résulte d’un déficit en hexosaminidase A.', vraie: true, justification: 'C’est une maladie lysosomale de surcharge classique, due à ce déficit enzymatique.' },
        { lettre: 'E', texte: 'Les lysosomes possèdent leur propre ADN.', vraie: false, justification: 'Contrairement aux mitochondries, les lysosomes ne possèdent pas d’ADN propre.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir que les lysosomes assurent à la fois hétérophagie et autophagie.',
      difficulte: 2,
    },
    {
      id: 'biocell-trafic-vesiculaire-qcm-05',
      enonce: 'Concernant l’autophagie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’autophagosome est une vésicule à double membrane.', vraie: true, justification: 'Cette double membrane le distingue d’une vésicule d’endocytose classique.' },
        { lettre: 'B', texte: 'L’autophagosome fusionne avec un lysosome pour former un autolysosome.', vraie: true, justification: 'C’est l’étape qui permet la dégradation du matériel séquestré par les hydrolases acides.' },
        { lettre: 'C', texte: 'L’autophagie ne concerne que du matériel provenant de l’extérieur de la cellule.', vraie: false, justification: 'L’autophagie dégrade les propres constituants de la cellule, organites endommagés ou macromolécules.' },
        { lettre: 'D', texte: 'Les produits de la dégradation autophagique peuvent être recyclés par la cellule.', vraie: true, justification: 'Les acides aminés et les lipides issus de la dégradation peuvent être réutilisés dans le métabolisme cellulaire.' },
        { lettre: 'E', texte: 'L’autophagie est un processus exclusivement pathologique.', vraie: false, justification: 'C’est un processus physiologique de renouvellement cellulaire, qui peut être accentué dans certaines situations de stress ou de maladie.' },
      ],
      correction: 'Réponses exactes : A, B et D. L’autophagie est un mécanisme physiologique normal de renouvellement cellulaire.',
      difficulte: 2,
    },
    {
      id: 'biocell-trafic-vesiculaire-qcm-06',
      enonce: 'Concernant les peroxysomes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les peroxysomes sont délimités par une membrane unique.', vraie: true, justification: 'Contrairement aux mitochondries, ils ne possèdent qu’une seule membrane.' },
        { lettre: 'B', texte: 'Les peroxysomes contiennent de la catalase.', vraie: true, justification: 'Cette enzyme dégrade le peroxyde d’hydrogène produit par d’autres réactions oxydatives peroxysomales.' },
        { lettre: 'C', texte: 'Les peroxysomes possèdent un ADN propre, comme les mitochondries.', vraie: false, justification: 'Contrairement aux mitochondries, les peroxysomes ne possèdent pas d’ADN propre.' },
        { lettre: 'D', texte: 'Les peroxysomes participent à la bêta-oxydation des acides gras à très longue chaîne.', vraie: true, justification: 'C’est l’une de leurs fonctions métaboliques caractéristiques, complémentaire de celle des mitochondries.' },
        { lettre: 'E', texte: 'Les protéines peroxysomales sont importées de façon cotraductionnelle, comme celles du réticulum.', vraie: false, justification: 'Elles sont importées après avoir été entièrement synthétisées dans le cytosol, de façon post-traductionnelle.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir l’absence d’ADN propre et l’import post-traductionnel des protéines peroxysomales.',
      difficulte: 2,
    },
  ],
};
