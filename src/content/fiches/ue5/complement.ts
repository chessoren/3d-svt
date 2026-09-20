import type { Fiche } from '../../types';

export const ficheComplement: Fiche = {
  id: 'ue5-complement',
  ue: 'ue5',
  titre: 'Le système du complément',
  sousTitre:
    'Voies classique, alterne et des lectines, convertases, complexe d’attaque membranaire, fonctions et régulation',
  chapitre: 'Immunité innée',
  ordre: 4,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'complément',
    'voie classique',
    'voie alterne',
    'voie des lectines',
    'C3 convertase',
    'complexe d’attaque membranaire',
    'anaphylatoxines',
    'opsonisation',
    'déficit en complément',
  ],
  objectifs: [
    'Décrire les trois voies d’activation du complément et leur élément déclenchant.',
    'Expliquer la formation et le rôle des C3 et C5 convertases.',
    'Décrire la formation et le mécanisme d’action du complexe d’attaque membranaire.',
    'Citer les principales fonctions biologiques du complément.',
    'Connaître les principaux mécanismes de régulation du complément et les conséquences de leur déficit.',
    'Associer les principaux déficits en complément à leurs conséquences cliniques.',
  ],
  sections: [
    {
      id: 'generalites',
      titre: 'Généralités sur le complément',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le système du complément est un ensemble d’environ trente protéines plasmatiques et membranaires, principalement synthétisées par le foie, circulant sous forme inactive dans le plasma. Son activation, en cascade, participe à la fois à l’immunité innée et à l’immunité adaptative, par opsonisation, lyse cellulaire directe et recrutement de l’inflammation.",
        },
        {
          type: 'liste',
          items: [
            'Le complément peut être activé par trois voies distinctes, qui convergent toutes vers le clivage de la protéine C3, étape centrale de la cascade.',
            "Chaque protéine du complément est le plus souvent clivée en deux fragments, notés « a » (petit fragment, diffusible, souvent pro-inflammatoire) et « b » (grand fragment, qui reste fixé et poursuit la cascade), à l’exception notable de C2 où l’usage historique inverse cette convention.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Les trois voies convergent sur C3',
          texte:
            "Quelle que soit la voie d’activation initiale (classique, alterne ou des lectines), l’objectif commun est de générer une C3 convertase, enzyme qui clive la protéine C3 en C3a et C3b. C’est l’étape charnière de l’ensemble du système du complément.",
        },
      ],
    },
    {
      id: 'trois-voies',
      titre: 'Les trois voies d’activation',
      blocs: [
        {
          type: 'tableau',
          titre: 'Les trois voies d’activation du complément',
          colonnes: ['Voie', 'Élément déclenchant', 'Protéine de reconnaissance', 'C3 convertase formée'],
          lignes: [
            [
              'Voie classique',
              'Complexe antigène-anticorps (IgM ou IgG fixé à l’antigène)',
              'C1q (associé à C1r et C1s)',
              'C4b2a',
            ],
            [
              'Voie des lectines',
              'Résidus mannose exposés à la surface microbienne',
              'Lectine liant le mannose (MBL) associée aux protéases MASP',
              'C4b2a (identique à la voie classique)',
            ],
            [
              'Voie alterne',
              'Hydrolyse spontanée de C3 et surfaces microbiennes non protégées',
              'Facteur B, facteur D, properdine',
              'C3bBb',
            ],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "La voie classique est déclenchée par la fixation de C1q sur au moins deux fragments Fc d’immunoglobulines liées à l’antigène : une seule molécule d’IgM pentamérique suffit, alors qu’il faut au moins deux molécules d’IgG proches l’une de l’autre.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La voie alterne est en activation permanente à bas bruit',
          texte:
            "Contrairement aux voies classique et des lectines, la voie alterne ne nécessite pas de reconnaissance spécifique initiale : elle repose sur l’hydrolyse spontanée et continue de C3 en C3(H2O), générant un niveau basal d’activation. Cette activation n’est amplifiée durablement qu’à la surface de micro-organismes dépourvus des protéines régulatrices présentes sur les cellules de l’hôte.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'IgM, activateur le plus efficace de la voie classique',
          texte:
            "L’IgM pentamérique est l’immunoglobuline la plus efficace pour activer la voie classique du complément, car sa structure pentamérique expose plusieurs sites de fixation pour C1q simultanément dès sa liaison à l’antigène, sans nécessiter le rapprochement fortuit de deux molécules distinctes.",
        },
      ],
    },
    {
      id: 'convertases-c3-c5',
      titre: 'Convertases, C3 et C5',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le clivage de C3 par la C3 convertase (C4b2a pour les voies classique et des lectines, C3bBb pour la voie alterne) libère C3a, une anaphylatoxine, et C3b, qui s’associe à la C3 convertase pour former la C5 convertase.",
        },
        {
          type: 'tableau',
          titre: 'Convertases selon les voies',
          colonnes: ['Voie', 'C3 convertase', 'C5 convertase'],
          lignes: [
            ['Classique et des lectines', 'C4b2a', 'C4b2a3b'],
            ['Alterne', 'C3bBb', 'C3bBb3b'],
          ],
        },
        {
          type: 'liste',
          items: [
            "Le fragment C3b joue un rôle d’opsonine majeure : fixé à la surface d’un pathogène, il est reconnu par les récepteurs du complément (CR1) exprimés à la surface des phagocytes, facilitant grandement leur élimination.",
            "La C5 convertase clive C5 en C5a, puissante anaphylatoxine et facteur chimiotactique, et C5b, qui initie l’assemblage du complexe d’attaque membranaire.",
            "L’amplification de la voie alterne par la boucle d’amplification (dépôt continu de C3b sur les surfaces activatrices) permet de renforcer la réponse initiée par n’importe laquelle des trois voies, ce qui en fait un mécanisme d’amplification commun.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'C3, protéine la plus abondante du complément',
          texte:
            "C3 est la protéine du complément la plus abondante dans le plasma. Son clivage constitue l’étape amplificatrice centrale : une même molécule de C3 convertase peut cliver de nombreuses molécules de C3, générant un dépôt massif de C3b à la surface de la cible.",
        },
      ],
    },
    {
      id: 'complexe-attaque-membranaire',
      titre: 'Le complexe d’attaque membranaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le complexe d’attaque membranaire (CAM), aussi appelé complexe C5b-9, est l’effecteur terminal commun aux trois voies du complément. Il perfore directement la membrane de la cellule cible.",
        },
        {
          type: 'etapes',
          titre: 'Assemblage du complexe d’attaque membranaire',
          etapes: [
            {
              titre: 'Initiation',
              detail: "C5b, généré par la C5 convertase, se fixe à la membrane de la cellule cible et recrute successivement C6 et C7.",
            },
            {
              titre: 'Insertion membranaire',
              detail: "Le complexe C5b67 s’insère dans la bicouche lipidique, puis fixe C8, qui commence à créer un pore transmembranaire.",
            },
            {
              titre: 'Polymérisation de C9',
              detail:
                "De multiples molécules de C9 se polymérisent autour du complexe C5b678 pour former un large pore transmembranaire stable, responsable de la lyse osmotique de la cellule.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Sensibilité particulière du genre Neisseria',
          texte:
            "Les bactéries du genre Neisseria (méningocoque, gonocoque) sont particulièrement sensibles à la lyse par le complexe d’attaque membranaire. Les déficits héréditaires en composants terminaux du complément (C5 à C9) exposent ainsi à des infections invasives récidivantes à Neisseria, notamment des méningites à méningocoque.",
        },
      ],
    },
    {
      id: 'fonctions-regulation',
      titre: 'Fonctions biologiques et régulation',
      blocs: [
        {
          type: 'tableau',
          titre: 'Fonctions biologiques du complément',
          colonnes: ['Fonction', 'Médiateur principal', 'Mécanisme'],
          lignes: [
            ['Opsonisation', 'C3b', 'Facilite la phagocytose via les récepteurs du complément (CR1)'],
            ['Inflammation', 'C3a, C5a (anaphylatoxines)', 'Dégranulation mastocytaire, chimiotactisme des neutrophiles (C5a)'],
            ['Lyse cellulaire', 'Complexe d’attaque membranaire (C5b-9)', 'Perforation directe de la membrane de la cible'],
            [
              'Élimination des complexes immuns',
              'C3b',
              'Solubilisation et transport des complexes immuns vers le foie et la rate via le récepteur CR1 érythrocytaire',
            ],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "L’activation du complément doit être étroitement régulée pour éviter la destruction des cellules de l’hôte. Des protéines régulatrices, solubles et membranaires, contrôlent chaque étape de la cascade.",
        },
        {
          type: 'tableau',
          titre: 'Principales protéines régulatrices',
          colonnes: ['Régulateur', 'Rôle'],
          lignes: [
            ['Facteur H et facteur I', 'Inactivation de C3b en phase fluide et à la surface des cellules de l’hôte'],
            ['DAF (CD55)', 'Accélère la dissociation des C3 et C5 convertases à la surface cellulaire'],
            ['Protectine (CD59)', 'Empêche la polymérisation de C9 et donc la formation du complexe d’attaque membranaire'],
            ['C1 inhibiteur (C1-INH)', 'Inactive C1r et C1s, régulant la voie classique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Déficit en C1 inhibiteur et angio-œdème héréditaire',
          texte:
            "Le déficit héréditaire en C1 inhibiteur (angio-œdème héréditaire) entraîne une activation incontrôlée du système du complément et du système des kinines, provoquant des épisodes récidivants d’œdème sous-cutané et muqueux, potentiellement fatals en cas d’atteinte laryngée.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les trois voies d’activation (classique, des lectines, alterne) convergent toutes vers le clivage de C3, étape centrale de la cascade.",
    "La voie classique est déclenchée par C1q fixé sur des complexes antigène-anticorps ; la voie alterne s’auto-active en permanence à bas bruit.",
    "C3b est l’opsonine majeure du complément et participe à la formation de la C5 convertase.",
    'C5a et C3a sont des anaphylatoxines pro-inflammatoires ; C5a est en outre un puissant agent chimiotactique.',
    'Le complexe d’attaque membranaire (C5b-9) résulte de la polymérisation de C9 et perfore directement la membrane de la cible.',
    'Les bactéries du genre Neisseria sont particulièrement vulnérables au complexe d’attaque membranaire.',
    'Le facteur H, le facteur I, le DAF, la protectine et le C1 inhibiteur régulent la cascade à différents niveaux.',
  ],
  erreursFrequentes: [
    'Croire que la voie alterne nécessite un anticorps pour être activée : elle est indépendante des anticorps.',
    "Confondre C3a et C3b : C3a est l’anaphylatoxine diffusible, C3b est l’opsonine qui reste fixée et poursuit la cascade.",
    'Oublier que la C3 convertase de la voie classique (C4b2a) diffère de celle de la voie alterne (C3bBb).',
    "Penser que le complexe d’attaque membranaire nécessite un anticorps : c’est un effecteur terminal commun aux trois voies.",
    'Associer un déficit en complément uniquement à un risque bactérien à Gram positif, alors que le risque principal des déficits terminaux concerne Neisseria.',
    'Confondre C1 inhibiteur (régule la voie classique et les kinines) et facteur I (inactive C3b).',
  ],
  mnemotechniques: [
    {
      moyen: '« a » part, « b » reste (bind)',
      explication:
        'Le petit fragment « a » diffuse et agit à distance (anaphylatoxine), le grand fragment « b » reste lié (bind) à la surface et poursuit la cascade.',
    },
    {
      moyen: 'Trois voies, un seul C3',
      explication:
        'Classique, des lectines et alterne convergent toutes sur le clivage de C3 : c’est l’étape commune à mémoriser en priorité.',
    },
    {
      moyen: 'C5b-6-7-8-9 : « CAM se construit en escalier »',
      explication:
        'L’assemblage du complexe d’attaque membranaire suit l’ordre numérique croissant des composants, de C5b à la polymérisation de C9.',
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
      id: 'ue5-complement-fc-01',
      recto: 'Quelle protéine centrale est clivée par les trois voies d’activation du complément ?',
      verso: 'C3, dont le clivage génère C3a (anaphylatoxine) et C3b (opsonine).',
      type: 'mecanisme',
      tags: ['complément', 'C3'],
    },
    {
      id: 'ue5-complement-fc-02',
      recto: 'Quel est l’élément déclenchant de la voie classique du complément ?',
      verso: 'La fixation de C1q sur un complexe antigène-anticorps (IgM ou au moins deux IgG proches).',
      type: 'mecanisme',
      tags: ['voie classique'],
    },
    {
      id: 'ue5-complement-fc-03',
      recto: 'Quelle molécule reconnaît les résidus mannose dans la voie des lectines ?',
      verso: 'La lectine liant le mannose (MBL), associée aux protéases MASP.',
      type: 'definition',
      tags: ['voie des lectines'],
    },
    {
      id: 'ue5-complement-fc-04',
      recto: 'Quelle est la C3 convertase de la voie alterne ?',
      verso: 'C3bBb.',
      type: 'formule',
      tags: ['voie alterne', 'convertase'],
    },
    {
      id: 'ue5-complement-fc-05',
      recto: 'Quelle est la C3 convertase commune aux voies classique et des lectines ?',
      verso: 'C4b2a.',
      type: 'formule',
      tags: ['voie classique', 'convertase'],
    },
    {
      id: 'ue5-complement-fc-06',
      recto: 'Quel fragment du complément joue le rôle d’opsonine majeure ?',
      verso: 'C3b, reconnu par les récepteurs du complément (CR1) des phagocytes.',
      type: 'mecanisme',
      tags: ['opsonisation'],
    },
    {
      id: 'ue5-complement-fc-07',
      recto: 'Quelles sont les deux anaphylatoxines principales du complément ?',
      verso: 'C3a et C5a.',
      type: 'classification',
      tags: ['anaphylatoxines'],
    },
    {
      id: 'ue5-complement-fc-08',
      recto: 'Quel composant initie l’assemblage du complexe d’attaque membranaire ?',
      verso: 'C5b, généré par la C5 convertase.',
      type: 'mecanisme',
      tags: ['complexe d’attaque membranaire'],
    },
    {
      id: 'ue5-complement-fc-09',
      recto: 'Quelle molécule se polymérise pour former le pore du complexe d’attaque membranaire ?',
      verso: 'C9, qui se polymérise autour du complexe C5b678.',
      type: 'mecanisme',
      tags: ['complexe d’attaque membranaire'],
    },
    {
      id: 'ue5-complement-fc-10',
      recto: 'Quelles bactéries sont particulièrement sensibles au complexe d’attaque membranaire ?',
      verso: 'Les bactéries du genre Neisseria (méningocoque, gonocoque).',
      type: 'clinique',
      tags: ['déficit en complément'],
    },
    {
      id: 'ue5-complement-fc-11',
      recto: 'Quel régulateur empêche la polymérisation de C9 à la surface des cellules de l’hôte ?',
      verso: 'La protectine (CD59).',
      type: 'mecanisme',
      tags: ['régulation'],
    },
    {
      id: 'ue5-complement-fc-12',
      recto: 'Quel déficit héréditaire est responsable de l’angio-œdème héréditaire ?',
      verso: 'Le déficit en C1 inhibiteur (C1-INH).',
      type: 'clinique',
      tags: ['angio-œdème héréditaire'],
    },
  ],
  qcm: [
    {
      id: 'ue5-complement-qcm-01',
      enonce: 'Concernant les voies d’activation du complément, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La voie classique nécessite la fixation de C1q sur un complexe antigène-anticorps.', vraie: true, justification: 'Exact : c’est l’élément déclenchant caractéristique de la voie classique.' },
        { lettre: 'B', texte: 'La voie alterne nécessite obligatoirement un anticorps pour s’activer.', vraie: false, justification: 'La voie alterne est indépendante des anticorps ; elle repose sur l’hydrolyse spontanée de C3.' },
        { lettre: 'C', texte: 'La voie des lectines utilise la MBL comme protéine de reconnaissance.', vraie: true, justification: 'Exact : la MBL reconnaît les résidus mannose des surfaces microbiennes.' },
        { lettre: 'D', texte: 'Les trois voies convergent vers le clivage de C3.', vraie: true, justification: 'Exact : c’est l’étape commune centrale de la cascade du complément.' },
        { lettre: 'E', texte: 'Une seule molécule d’IgG suffit à activer efficacement la voie classique.', vraie: false, justification: 'Il faut au moins deux molécules d’IgG proches ; une seule IgM pentamérique suffit en revanche.' },
      ],
      correction: 'Réponses exactes : A, C et D. La convergence sur C3 est la notion clé des trois voies.',
      difficulte: 2,
    },
    {
      id: 'ue5-complement-qcm-02',
      enonce: 'Concernant C3 et C5 et leurs convertases, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'C3b est un fragment diffusible à activité anaphylatoxique.', vraie: false, justification: 'C’est C3a qui est l’anaphylatoxine diffusible ; C3b reste fixé et sert d’opsonine.' },
        { lettre: 'B', texte: 'La C5 convertase de la voie alterne est C3bBb3b.', vraie: true, justification: 'Exact : l’adjonction de C3b à la C3 convertase alterne forme la C5 convertase.' },
        { lettre: 'C', texte: 'Le clivage de C5 libère C5a et C5b.', vraie: true, justification: 'Exact : C5a est chimiotactique, C5b initie le complexe d’attaque membranaire.' },
        { lettre: 'D', texte: 'C3 est la protéine du complément la moins abondante dans le plasma.', vraie: false, justification: 'C3 est au contraire la protéine du complément la plus abondante.' },
        { lettre: 'E', texte: 'C5a est un puissant facteur chimiotactique pour les polynucléaires.', vraie: true, justification: 'Exact, en plus de son activité anaphylatoxique.' },
      ],
      correction: 'Réponses exactes : B, C et E. Bien distinguer les fonctions opposées de C3a/C3b et de C5a/C5b.',
      difficulte: 3,
    },
    {
      id: 'ue5-complement-qcm-03',
      enonce: 'Concernant le complexe d’attaque membranaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est constitué de C5b, C6, C7, C8 et de multiples molécules de C9.', vraie: true, justification: 'Exact : c’est la composition classique du complexe C5b-9.' },
        { lettre: 'B', texte: 'Il agit en inhibant la phagocytose.', vraie: false, justification: 'Il n’a aucun rôle dans la phagocytose : il perfore directement la membrane de la cellule cible.' },
        { lettre: 'C', texte: 'Il est spécifique de la voie classique uniquement.', vraie: false, justification: 'C’est un effecteur terminal commun aux trois voies d’activation.' },
        { lettre: 'D', texte: 'La protectine (CD59) limite sa formation à la surface des cellules de l’hôte.', vraie: true, justification: 'Exact : elle empêche la polymérisation de C9.' },
        { lettre: 'E', texte: 'Les bactéries du genre Neisseria y sont particulièrement sensibles.', vraie: true, justification: 'Exact : les déficits terminaux du complément exposent à des infections invasives à Neisseria.' },
      ],
      correction: 'Réponses exactes : A, D et E. Le complexe d’attaque membranaire est un effecteur commun, régulé par CD59.',
      difficulte: 2,
    },
    {
      id: 'ue5-complement-qcm-04',
      enonce: 'Concernant les fonctions biologiques du complément, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'C3b facilite la phagocytose par opsonisation.', vraie: true, justification: 'Exact, via les récepteurs du complément CR1 exprimés par les phagocytes.' },
        { lettre: 'B', texte: 'Le complément participe à l’élimination des complexes immuns circulants.', vraie: true, justification: 'Exact : via C3b et le récepteur CR1 érythrocytaire, qui transporte les complexes vers le foie et la rate.' },
        { lettre: 'C', texte: 'Les anaphylatoxines inhibent la dégranulation mastocytaire.', vraie: false, justification: 'Les anaphylatoxines (C3a, C5a) favorisent au contraire la dégranulation mastocytaire.' },
        { lettre: 'D', texte: 'Le complément joue un rôle uniquement dans l’immunité innée.', vraie: false, justification: 'Il participe aussi à l’immunité adaptative, notamment via la voie classique déclenchée par les anticorps.' },
        { lettre: 'E', texte: 'C5a exerce un effet chimiotactique sur les polynucléaires neutrophiles.', vraie: true, justification: 'Exact : c’est l’un de ses effets pro-inflammatoires majeurs.' },
      ],
      correction: 'Réponses exactes : A, B et E. Le complément relie immunité innée et adaptative par plusieurs mécanismes.',
      difficulte: 2,
    },
    {
      id: 'ue5-complement-qcm-05',
      enonce: 'Concernant la régulation du complément, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le facteur H participe à l’inactivation de C3b.', vraie: true, justification: 'Exact, en coopération avec le facteur I.' },
        { lettre: 'B', texte: 'Le DAF (CD55) accélère la dissociation des C3 et C5 convertases.', vraie: true, justification: 'Exact : c’est son mécanisme d’action principal à la surface cellulaire.' },
        { lettre: 'C', texte: 'Le C1 inhibiteur régule uniquement la voie alterne.', vraie: false, justification: 'Le C1 inhibiteur régule la voie classique, en inactivant C1r et C1s, ainsi que le système des kinines.' },
        { lettre: 'D', texte: 'Un déficit en C1 inhibiteur peut provoquer un angio-œdème héréditaire.', vraie: true, justification: 'Exact : c’est la cause classique de cette pathologie.' },
        { lettre: 'E', texte: 'La protectine catalyse le clivage de C3.', vraie: false, justification: 'La protectine (CD59) empêche la polymérisation de C9, elle ne clive pas C3.' },
      ],
      correction: 'Réponses exactes : A, B et D. Chaque régulateur agit à une étape précise de la cascade.',
      difficulte: 2,
    },
    {
      id: 'ue5-complement-qcm-06',
      enonce: 'Concernant les déficits en complément, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un déficit en composants terminaux (C5 à C9) expose surtout aux infections à Neisseria.', vraie: true, justification: 'Exact : ces bactéries sont particulièrement sensibles à la lyse par le complexe d’attaque membranaire.' },
        { lettre: 'B', texte: 'Le déficit en C1 inhibiteur provoque des épisodes récidivants d’angio-œdème.', vraie: true, justification: 'Exact : c’est l’angio-œdème héréditaire, potentiellement grave en cas d’atteinte laryngée.' },
        { lettre: 'C', texte: 'Un déficit précoce (C1, C4) est associé à un risque accru de maladies auto-immunes comme le lupus.', vraie: true, justification: 'Exact : la voie classique participe à l’élimination des complexes immuns et des débris cellulaires apoptotiques.' },
        { lettre: 'D', texte: 'Les déficits en complément n’ont aucune traduction clinique.', vraie: false, justification: 'Ils exposent au contraire à des infections récidivantes et à des maladies auto-immunes selon le composant atteint.' },
        { lettre: 'E', texte: 'L’angio-œdème héréditaire est sans rapport avec le système du complément.', vraie: false, justification: 'Il est directement lié au déficit en C1 inhibiteur, régulateur de la voie classique du complément.' },
      ],
      correction: 'Réponses exactes : A, B et C. Le type de déficit oriente vers un risque infectieux ou auto-immun spécifique.',
      difficulte: 2,
    },
  ],
};
