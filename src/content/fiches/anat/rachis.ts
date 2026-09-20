import type { Fiche } from '../../types';

export const ficheRachis: Fiche = {
  id: 'anat-rachis',
  ue: 'anat',
  titre: 'Le rachis',
  sousTitre: 'Courbures, vertèbre type, particularités régionales, disque intervertébral et mouvements',
  chapitre: 'Tronc',
  ordre: 5,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'vertèbre',
    'courbure rachidienne',
    'disque intervertébral',
    'atlas',
    'axis',
    'sacrum',
    'ligament longitudinal',
    'foramen intervertébral',
  ],
  objectifs: [
    "Décrire les courbures physiologiques du rachis et leur rôle biomécanique.",
    "Décrire les éléments constitutifs d’une vertèbre type.",
    "Reconnaître les particularités des vertèbres cervicales, thoraciques et lombaires.",
    "Décrire la structure du disque intervertébral et des principaux ligaments rachidiens.",
    "Décrire les mouvements permis par le rachis selon ses différents étages.",
  ],
  sections: [
    {
      id: 'courbures',
      titre: 'Les courbures rachidiennes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Vu de profil, le rachis adulte présente une succession de courbures dans le plan sagittal, qui lui confèrent une résistance mécanique bien supérieure à celle d’une colonne rectiligne face aux contraintes axiales.",
        },
        {
          type: 'tableau',
          titre: 'Les courbures physiologiques du rachis',
          colonnes: ['Courbure', 'Étage', 'Orientation', 'Caractère'],
          lignes: [
            ['Lordose cervicale', 'Rachis cervical', 'Concavité postérieure', 'Secondaire, acquise avec le maintien de la tête'],
            ['Cyphose thoracique', 'Rachis thoracique', 'Concavité antérieure', 'Primaire, présente dès la vie fœtale'],
            ['Lordose lombaire', 'Rachis lombaire', 'Concavité postérieure', 'Secondaire, acquise avec l’acquisition de la station debout'],
            ['Cyphose sacrococcygienne', 'Sacrum et coccyx', 'Concavité antérieure', 'Primaire, fixe (vertèbres soudées)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Acquisition des courbures secondaires',
          texte:
            "La lordose cervicale s’installe avec le redressement de la tête, vers trois mois. La lordose lombaire s’installe avec l’acquisition de la marche, autour de la première année. Les courbures primaires, cyphotiques, correspondent à la courbure globale unique du rachis fœtal.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Rôle biomécanique des courbures',
          texte:
            "L’alternance de courbures augmente la résistance du rachis à la compression axiale selon une relation approximativement quadratique avec le nombre de courbures, tout en amortissant les chocs transmis à l’encéphale lors de la marche ou de la course.",
        },
      ],
    },
    {
      id: 'vertebre-type',
      titre: 'La vertèbre type',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En dehors de particularités régionales, toute vertèbre mobile partage un plan d’organisation commun, associant un corps vertébral antérieur et un arc vertébral postérieur qui délimitent ensemble le foramen vertébral.",
        },
        {
          type: 'liste',
          items: [
            "Le corps vertébral, cylindrique, supporte l’essentiel de la charge axiale et s’articule avec les corps vertébraux adjacents par l’intermédiaire des disques intervertébraux.",
            "L’arc vertébral (ou arc neural) est formé de deux pédicules, qui rejoignent le corps vertébral, et de deux lames, qui se rejoignent en arrière au niveau de l’apophyse épineuse.",
            "Le foramen vertébral, délimité par le corps en avant et l’arc vertébral en arrière, livre passage à la moelle spinale ; l’empilement des foramens vertébraux successifs constitue le canal vertébral.",
            "Chaque vertèbre porte sept apophyses (ou processus) : une épineuse, deux transverses, deux articulaires supérieures et deux articulaires inférieures.",
          ],
        },
        {
          type: 'definition',
          terme: 'Foramen intervertébral',
          definition:
            "Orifice latéral délimité par les pédicules de deux vertèbres adjacentes, l’incisure inférieure de l’une et l’incisure supérieure de l’autre, par lequel émerge le nerf spinal correspondant.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Articulations zygapophysaires',
          texte:
            "Les apophyses articulaires supérieures et inférieures de vertèbres adjacentes s’articulent entre elles par de véritables diarthroses planes, les articulations zygapophysaires (ou articulations interapophysaires postérieures), qui guident et limitent les mouvements segmentaires du rachis en complément du disque intervertébral.",
        },
      ],
    },
    {
      id: 'particularites-regionales',
      titre: 'Particularités régionales',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Si toutes les vertèbres partagent le plan d’organisation général, chaque région du rachis présente des particularités morphologiques adaptées à sa fonction et à sa mobilité propre.",
        },
        {
          type: 'tableau',
          titre: 'Particularités des vertèbres selon la région',
          colonnes: ['Région', 'Nombre', 'Particularité principale'],
          lignes: [
            ['Cervicale', '7 vertèbres (C1 à C7)', 'Foramen transversaire sur chaque apophyse transverse, livrant passage à l’artère vertébrale de C6 à C1'],
            ['Thoracique', '12 vertèbres (T1 à T12)', 'Fovéas costales sur le corps et l’apophyse transverse, pour l’articulation avec les côtes'],
            ['Lombaire', '5 vertèbres (L1 à L5)', 'Corps vertébral volumineux, apophyses transverses appelées apophyses costiformes'],
            ['Sacrée', '5 vertèbres soudées formant le sacrum', 'Os unique, triangulaire, articulé avec les deux os coxaux'],
            ['Coccygienne', '3 à 5 vertèbres rudimentaires soudées formant le coccyx', 'Vestige du squelette caudal, sans foramen vertébral fonctionnel'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'L’atlas et l’axis, deux vertèbres cervicales atypiques',
          texte:
            "L’atlas (C1) est dépourvu de corps vertébral et de disque intervertébral sous-jacent : il forme un anneau osseux articulé avec les condyles occipitaux. L’axis (C2) porte sur sa face supérieure une saillie osseuse verticale, le processus odontoïde (ou dent de l’axis), autour duquel pivote l’atlas, portant avec lui le crâne, lors des mouvements de rotation de la tête.",
        },
      ],
    },
    {
      id: 'disque-ligaments',
      titre: 'Le disque intervertébral et les ligaments rachidiens',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Entre deux corps vertébraux adjacents s’interpose le disque intervertébral, structure fibrocartilagineuse qui assure à la fois la cohésion, l’amortissement et une mobilité segmentaire limitée.",
        },
        {
          type: 'definition',
          terme: 'Disque intervertébral',
          definition:
            "Structure fibrocartilagineuse composée d’un noyau central gélatineux, le nucléus pulposus, riche en eau, et d’un anneau fibreux périphérique, l’annulus fibrosus, formé de lamelles concentriques de fibres de collagène orientées obliquement en alternance.",
        },
        {
          type: 'tableau',
          titre: 'Principaux ligaments du rachis',
          colonnes: ['Ligament', 'Trajet', 'Fonction'],
          lignes: [
            ['Ligament longitudinal antérieur', 'Face antérieure des corps vertébraux, de l’atlas au sacrum', 'Limite l’extension, solidarise les corps vertébraux'],
            ['Ligament longitudinal postérieur', 'Face postérieure des corps vertébraux, à l’intérieur du canal vertébral', 'Limite la flexion, renforce la paroi antérieure du canal vertébral'],
            ['Ligaments jaunes', 'Entre les lames de deux vertèbres adjacentes', 'Riches en fibres élastiques, limitent la flexion et participent au retour en position neutre'],
            ['Ligaments interépineux et supra-épineux', 'Entre puis au sommet des apophyses épineuses', 'Limitent la flexion excessive'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Hernie discale',
          texte:
            "Une fissure de l’annulus fibrosus peut permettre la migration du nucléus pulposus au-delà des limites normales du disque : c’est la hernie discale, le plus souvent postérolatérale, qui peut comprimer une racine nerveuse dans le foramen intervertébral ou le récessus latéral, réalisant un tableau de radiculalgie.",
        },
      ],
    },
    {
      id: 'mouvements-rachis',
      titre: 'Mouvements du rachis',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le mouvement entre deux vertèbres adjacentes est de faible amplitude, mais la sommation de ces mouvements segmentaires sur l’ensemble du rachis mobile donne une amplitude globale importante, variable selon l’étage considéré.",
        },
        {
          type: 'tableau',
          titre: 'Mobilité comparée selon les étages',
          colonnes: ['Étage', 'Flexion-extension', 'Inclinaison latérale', 'Rotation axiale'],
          lignes: [
            ['Cervical', 'Grande amplitude', 'Grande amplitude', 'Grande amplitude, maximale entre atlas et axis'],
            ['Thoracique', 'Amplitude limitée', 'Amplitude limitée', 'Amplitude modérée'],
            ['Lombaire', 'Grande amplitude', 'Amplitude modérée', 'Amplitude très limitée'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Pourquoi le rachis thoracique est-il moins mobile ?',
          texte:
            "La mobilité réduite du rachis thoracique s’explique par l’orientation particulière des apophyses articulaires zygapophysaires, par l’obliquité et le chevauchement des apophyses épineuses, et surtout par la solidarisation des vertèbres thoraciques avec la cage thoracique par l’intermédiaire des côtes.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Rotation cervicale haute',
          texte:
            "Environ la moitié de la rotation axiale totale du rachis cervical s’effectue au niveau de l’articulation atlanto-axoïdienne, entre l’atlas et l’axis, autour du processus odontoïde : c’est la principale articulation trochoïde du rachis.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le rachis présente quatre courbures sagittales alternées : lordose cervicale, cyphose thoracique, lordose lombaire, cyphose sacrococcygienne.",
    "Une vertèbre type comprend un corps vertébral antérieur et un arc vertébral postérieur délimitant le foramen vertébral.",
    "L’atlas est dépourvu de corps vertébral ; l’axis porte le processus odontoïde autour duquel pivote l’atlas.",
    "Les vertèbres cervicales ont un foramen transversaire, les vertèbres thoraciques des fovéas costales, les vertèbres lombaires un corps volumineux.",
    "Le disque intervertébral associe un nucléus pulposus central et un annulus fibrosus périphérique lamellaire.",
    "Le ligament longitudinal antérieur limite l’extension, le ligament longitudinal postérieur limite la flexion.",
    "Le rachis cervical et lombaire sont les plus mobiles en flexion-extension ; le rachis thoracique est le moins mobile en raison de la cage thoracique.",
  ],
  erreursFrequentes: [
    "Confondre lordose et cyphose : la lordose est à concavité postérieure, la cyphose à concavité antérieure.",
    "Oublier que l’atlas n’a pas de corps vertébral propre et ne s’articule donc pas avec un disque intervertébral sous-jacent au niveau C1-C2.",
    "Attribuer le foramen transversaire aux vertèbres thoraciques, alors qu’il est une particularité exclusivement cervicale.",
    "Croire que le nucléus pulposus est la partie périphérique du disque, alors qu’il constitue le noyau central gélatineux.",
    "Penser que la rotation axiale est maximale au rachis lombaire, alors qu’elle y est au contraire très limitée.",
  ],
  mnemotechniques: [
    {
      moyen: 'Lordose = creux, comme dans le bas du dos',
      explication:
        'La lordose (cervicale, lombaire) est une courbure à concavité postérieure : elle « creuse » le dos vu de profil, contrairement à la cyphose, à convexité postérieure.',
    },
    {
      moyen: '7-12-5 : Cervical, Thoracique, Lombaire',
      explication:
        'Sept vertèbres cervicales, douze thoraciques, cinq lombaires : la suite numérique décroissante aide à mémoriser le compte de chaque étage.',
    },
  ],
  sources: [
    'Kamina, Anatomie clinique, tome 3, Tête, cou, dos',
    'Drake, Vogl, Mitchell, Gray’s Anatomie pour les étudiants',
    'Netter, Atlas d’anatomie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'anat-rachis-fc-01',
      recto: 'Citer les quatre courbures physiologiques du rachis, de haut en bas.',
      verso: 'Lordose cervicale, cyphose thoracique, lordose lombaire, cyphose sacrococcygienne.',
      type: 'classification',
      tags: ['courbures'],
    },
    {
      id: 'anat-rachis-fc-02',
      recto: 'Quelles courbures sont primaires, présentes dès la vie fœtale ?',
      verso: 'La cyphose thoracique et la cyphose sacrococcygienne.',
      type: 'chiffre',
      tags: ['courbures'],
    },
    {
      id: 'anat-rachis-fc-03',
      recto: 'Quels sont les deux grands ensembles constitutifs d’une vertèbre type ?',
      verso: 'Le corps vertébral, antérieur, et l’arc vertébral, postérieur, qui délimitent ensemble le foramen vertébral.',
      type: 'definition',
      tags: ['vertèbre type'],
    },
    {
      id: 'anat-rachis-fc-04',
      recto: 'Quelle particularité anatomique porte chaque vertèbre cervicale ?',
      verso: 'Un foramen transversaire sur l’apophyse transverse, livrant passage à l’artère vertébrale de C6 à C1.',
      type: 'definition',
      tags: ['cervicales'],
    },
    {
      id: 'anat-rachis-fc-05',
      recto: 'Qu’est-ce que le processus odontoïde et quelle vertèbre le porte ?',
      verso: 'Une saillie osseuse verticale portée par l’axis (C2), autour de laquelle pivote l’atlas lors de la rotation de la tête.',
      type: 'definition',
      tags: ['axis', 'atlas'],
    },
    {
      id: 'anat-rachis-fc-06',
      recto: 'Comment se nomment les apophyses transverses des vertèbres lombaires ?',
      verso: 'Les apophyses costiformes.',
      type: 'definition',
      tags: ['lombaires'],
    },
    {
      id: 'anat-rachis-fc-07',
      recto: 'Quelles structures s’articulent par les articulations zygapophysaires ?',
      verso: 'Les apophyses articulaires supérieures et inférieures de deux vertèbres adjacentes.',
      type: 'definition',
      tags: ['articulations rachidiennes'],
    },
    {
      id: 'anat-rachis-fc-08',
      recto: 'Décrire les deux composantes du disque intervertébral.',
      verso: 'Le nucléus pulposus, noyau central gélatineux riche en eau, et l’annulus fibrosus, anneau fibreux périphérique de lamelles concentriques.',
      type: 'definition',
      tags: ['disque intervertébral'],
    },
    {
      id: 'anat-rachis-fc-09',
      recto: 'Quel ligament limite l’extension du rachis ?',
      verso: 'Le ligament longitudinal antérieur.',
      type: 'mecanisme',
      tags: ['ligaments'],
    },
    {
      id: 'anat-rachis-fc-10',
      recto: 'Quel ligament limite la flexion du rachis, situé dans le canal vertébral ?',
      verso: 'Le ligament longitudinal postérieur.',
      type: 'mecanisme',
      tags: ['ligaments'],
    },
    {
      id: 'anat-rachis-fc-11',
      recto: 'Pourquoi le rachis thoracique est-il peu mobile ?',
      verso: 'En raison de l’orientation des articulations zygapophysaires, du chevauchement des apophyses épineuses, et de sa solidarisation avec la cage thoracique par les côtes.',
      type: 'mecanisme',
      tags: ['mobilité'],
    },
    {
      id: 'anat-rachis-fc-12',
      recto: 'Qu’est-ce qu’une hernie discale et où siège-t-elle le plus souvent ?',
      verso: 'Migration du nucléus pulposus à travers une fissure de l’annulus fibrosus, le plus souvent en position postérolatérale, pouvant comprimer une racine nerveuse.',
      type: 'clinique',
      tags: ['hernie discale'],
    },
  ],
  qcm: [
    {
      id: 'anat-rachis-qcm-01',
      enonce: 'Concernant les courbures rachidiennes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La lordose cervicale est à concavité postérieure.', vraie: true, justification: 'Exact, comme toute lordose.' },
        { lettre: 'B', texte: 'La cyphose thoracique est une courbure secondaire, acquise après la naissance.', vraie: false, justification: 'Faux : c’est une courbure primaire, présente dès la vie fœtale.' },
        { lettre: 'C', texte: 'La lordose lombaire s’installe avec l’acquisition de la marche.', vraie: true, justification: 'Cette courbure secondaire apparaît lorsque l’enfant adopte la station debout, autour de la première année, en réponse aux nouvelles contraintes de charge axiale.' },
        { lettre: 'D', texte: 'Le sacrum présente une cyphose fixe, les vertèbres sacrées étant soudées.', vraie: true, justification: 'La fusion complète des cinq vertèbres sacrées rend cette courbure primaire définitivement rigide, contrairement aux courbures mobiles cervicale et lombaire.' },
        { lettre: 'E', texte: 'Les courbures rachidiennes réduisent la résistance du rachis aux contraintes de compression axiale.', vraie: false, justification: 'Faux : elles augmentent au contraire cette résistance par rapport à une colonne rectiligne.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 1,
    },
    {
      id: 'anat-rachis-qcm-02',
      enonce: 'Concernant la vertèbre type, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le corps vertébral est la partie postérieure de la vertèbre.', vraie: false, justification: 'Faux : le corps vertébral est antérieur, l’arc vertébral est postérieur.' },
        { lettre: 'B', texte: 'Le foramen vertébral est délimité par le corps en avant et l’arc vertébral en arrière.', vraie: true, justification: 'L’empilement de ces foramens successifs, un par vertèbre, forme le canal vertébral qui loge la moelle spinale.' },
        { lettre: 'C', texte: 'Chaque vertèbre porte sept apophyses.', vraie: true, justification: 'Exact : une épineuse, deux transverses, deux articulaires supérieures, deux articulaires inférieures.' },
        { lettre: 'D', texte: 'Le foramen intervertébral livre passage au nerf spinal.', vraie: true, justification: 'Formé par les incisures des pédicules de deux vertèbres adjacentes, cet orifice latéral est le site de sortie du nerf spinal correspondant, exposé à une compression en cas de hernie discale.' },
        { lettre: 'E', texte: 'Les lames rejoignent le corps vertébral directement, sans l’intermédiaire des pédicules.', vraie: false, justification: 'Faux : ce sont les pédicules qui relient le corps vertébral à l’arc vertébral ; les lames rejoignent les pédicules et se réunissent en arrière au niveau de l’épineuse.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-rachis-qcm-03',
      enonce: 'Concernant les particularités régionales, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’atlas possède un corps vertébral volumineux.', vraie: false, justification: 'Faux : l’atlas est dépourvu de corps vertébral, il forme un anneau osseux.' },
        { lettre: 'B', texte: 'L’axis porte le processus odontoïde.', vraie: true, justification: 'Cette saillie verticale, unique au rachis, sert de pivot autour duquel tourne l’atlas, permettant l’essentiel de la rotation de la tête.' },
        { lettre: 'C', texte: 'Les vertèbres thoraciques présentent des fovéas costales pour l’articulation avec les côtes.', vraie: true, justification: 'Ces petites surfaces articulaires, portées par le corps et l’apophyse transverse, permettent l’articulation costo-vertébrale et costo-transversaire propre à cet étage.' },
        { lettre: 'D', texte: 'Le sacrum est formé de cinq vertèbres soudées.', vraie: true, justification: 'Cette fusion donne naissance à un os unique et triangulaire, qui s’articule avec les deux os coxaux par les articulations sacro-iliaques.' },
        { lettre: 'E', texte: 'Le rachis lombaire compte sept vertèbres.', vraie: false, justification: 'Faux : le rachis lombaire compte cinq vertèbres, le rachis cervical en compte sept.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 1,
    },
    {
      id: 'anat-rachis-qcm-04',
      enonce: 'Concernant le disque intervertébral, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le nucléus pulposus est la partie centrale et gélatineuse du disque.', vraie: true, justification: 'Sa richesse en eau lui confère des propriétés hydrauliques d’amortisseur, essentielles pour répartir les charges axiales entre les corps vertébraux.' },
        { lettre: 'B', texte: 'L’annulus fibrosus est formé de lamelles concentriques de fibres de collagène.', vraie: true, justification: 'Ces lamelles, orientées obliquement en alternance d’une couche à l’autre, contiennent le nucléus pulposus et résistent aux contraintes de cisaillement.' },
        { lettre: 'C', texte: 'Une hernie discale se produit le plus souvent en position antérieure.', vraie: false, justification: 'Faux : la hernie discale est le plus souvent postérolatérale.' },
        { lettre: 'D', texte: 'Le disque intervertébral s’interpose entre deux corps vertébraux adjacents.', vraie: true, justification: 'Cette position lui permet d’assurer à la fois la cohésion entre les vertèbres, l’amortissement des chocs et une mobilité segmentaire limitée.' },
        { lettre: 'E', texte: 'Le nucléus pulposus est pauvre en eau.', vraie: false, justification: 'Faux : il est au contraire riche en eau, ce qui lui confère ses propriétés d’amortisseur.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-rachis-qcm-05',
      enonce: 'Concernant les ligaments du rachis, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le ligament longitudinal antérieur limite l’extension.', vraie: true, justification: 'Tendu sur la face antérieure des corps vertébraux de l’atlas au sacrum, il se tend lors de l’extension et en freine l’amplitude.' },
        { lettre: 'B', texte: 'Le ligament longitudinal postérieur se situe à l’intérieur du canal vertébral.', vraie: true, justification: 'Plaqué sur la face postérieure des corps vertébraux, à l’intérieur du canal, il renforce la paroi antérieure du canal vertébral et limite la flexion.' },
        { lettre: 'C', texte: 'Les ligaments jaunes relient les apophyses épineuses entre elles.', vraie: false, justification: 'Faux : ce sont les ligaments interépineux qui relient les apophyses épineuses ; les ligaments jaunes relient les lames.' },
        { lettre: 'D', texte: 'Les ligaments jaunes sont riches en fibres élastiques.', vraie: true, justification: 'Exact, ce qui leur donne leur couleur et leur élasticité caractéristiques.' },
        { lettre: 'E', texte: 'Le ligament longitudinal postérieur limite l’extension.', vraie: false, justification: 'Faux : c’est le ligament longitudinal postérieur qui limite la flexion, et le ligament longitudinal antérieur qui limite l’extension.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-rachis-qcm-06',
      enonce: 'Concernant la mobilité du rachis, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le rachis thoracique est le plus mobile en rotation axiale.', vraie: false, justification: 'Faux : c’est le rachis cervical qui offre la plus grande amplitude de rotation axiale.' },
        { lettre: 'B', texte: 'La rotation atlanto-axoïdienne représente une part importante de la rotation cervicale totale.', vraie: true, justification: 'Exact, environ la moitié de la rotation cervicale totale.' },
        { lettre: 'C', texte: 'Le rachis lombaire autorise une grande amplitude de rotation axiale.', vraie: false, justification: 'Faux : la rotation axiale y est au contraire très limitée.' },
        { lettre: 'D', texte: 'Le rachis lombaire autorise une grande amplitude de flexion-extension.', vraie: true, justification: 'Le volume important des corps vertébraux lombaires et l’orientation de leurs articulations zygapophysaires favorisent ce mouvement, contrairement à la rotation, très limitée à cet étage.' },
        { lettre: 'E', texte: 'La cage thoracique limite la mobilité du rachis thoracique.', vraie: true, justification: 'Exact, par la solidarisation des vertèbres thoraciques aux côtes.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
  ],
};
