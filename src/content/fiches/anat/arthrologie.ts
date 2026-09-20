import type { Fiche } from '../../types';

export const ficheArthrologie: Fiche = {
  id: 'anat-arthrologie',
  ue: 'anat',
  titre: 'Arthrologie générale',
  sousTitre: 'Synarthroses, amphiarthroses, diarthroses et classification des articulations synoviales',
  chapitre: 'Anatomie générale',
  ordre: 3,
  duree: 20,
  difficulte: 2,
  motsCles: [
    'articulation synoviale',
    'synarthrose',
    'amphiarthrose',
    'diarthrose',
    'cartilage articulaire',
    'capsule articulaire',
    'ligament',
    'degrés de liberté',
  ],
  objectifs: [
    "Classer les articulations selon leur degré de mobilité.",
    "Décrire les éléments constitutifs d’une articulation synoviale.",
    "Classer les diarthroses selon la forme de leurs surfaces articulaires et leurs degrés de liberté.",
    "Expliquer les facteurs qui assurent la stabilité d’une articulation.",
    "Différencier les principaux mouvements permis par chaque type de diarthrose.",
  ],
  sections: [
    {
      id: 'classification-generale',
      titre: 'Classification générale des articulations',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une articulation est la zone de jonction entre deux ou plusieurs pièces squelettiques. Les articulations se classent traditionnellement en trois grandes catégories selon leur degré de mobilité, corrélé au type de tissu qui unit les surfaces osseuses.",
        },
        {
          type: 'tableau',
          titre: 'Les trois grandes catégories d’articulations',
          colonnes: ['Catégorie', 'Tissu d’union', 'Mobilité', 'Exemples'],
          lignes: [
            ['Synarthrose', 'Tissu fibreux ou cartilagineux continu, sans cavité', 'Absente ou quasi nulle', 'Sutures crâniennes, syndesmose tibiofibulaire'],
            ['Amphiarthrose', 'Fibrocartilage ou cartilage hyalin, sans cavité synoviale vraie', 'Faible', 'Symphyse pubienne, disque intervertébral'],
            ['Diarthrose (articulation synoviale)', 'Cavité articulaire tapissée de synoviale, cartilage articulaire', 'Importante', 'Épaule, genou, hanche'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre classification anatomique et classification fonctionnelle',
          texte:
            "Cette classification en synarthrose, amphiarthrose et diarthrose repose sur le degré de mobilité et le type de tissu d’union. Une classification histologique parallèle distingue les articulations fibreuses, cartilagineuses et synoviales, qui recoupe largement la précédente sans lui être strictement identique : la syndesmose, par exemple, est une articulation fibreuse classée parmi les synarthroses malgré une mobilité parfois discrète.",
        },
      ],
    },
    {
      id: 'diarthrose-elements',
      titre: 'Les éléments constitutifs d’une diarthrose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une articulation synoviale, ou diarthrose, associe des éléments constants qui permettent un mouvement de grande amplitude tout en limitant les contraintes sur le cartilage.",
        },
        {
          type: 'liste',
          items: [
            "Le cartilage articulaire, hyalin, recouvre les surfaces osseuses en contact et amortit les contraintes mécaniques tout en réduisant les frottements.",
            "La cavité articulaire est un espace virtuel clos, contenant le liquide synovial.",
            "La membrane synoviale tapisse la face interne de la capsule, sauf sur le cartilage articulaire, et sécrète le liquide synovial.",
            "La capsule articulaire, fibreuse, entoure et ferme la cavité articulaire, en s’insérant à distance variable des surfaces articulaires.",
            "Les ligaments, capsulaires ou extracapsulaires, renforcent la capsule et limitent certains mouvements.",
          ],
        },
        {
          type: 'definition',
          terme: 'Liquide synovial',
          definition:
            "Liquide visqueux, riche en acide hyaluronique, sécrété par la membrane synoviale. Il lubrifie l’articulation, réduit les frottements entre les surfaces cartilagineuses et participe à la nutrition du cartilage, dépourvu de vascularisation propre.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Éléments inconstants',
          texte:
            "Certaines diarthroses possèdent des éléments intra-articulaires complémentaires : ménisques fibrocartilagineux (genou), labrum fibrocartilagineux périphérique (épaule, hanche), ou bourses séreuses annexes qui facilitent le glissement des structures péri-articulaires.",
        },
      ],
    },
    {
      id: 'classification-diarthroses',
      titre: 'Classification des diarthroses selon les degrés de liberté',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les diarthroses se classent selon la forme de leurs surfaces articulaires, qui détermine le nombre de degrés de liberté, c’est-à-dire le nombre d’axes de mouvement indépendants qu’elles autorisent.",
        },
        {
          type: 'tableau',
          titre: 'Classification des diarthroses',
          colonnes: ['Type', 'Forme des surfaces', 'Degrés de liberté', 'Exemple'],
          lignes: [
            ['Articulation plane (arthrodie)', 'Surfaces planes ou peu incurvées', 'Glissement pur, mobilité limitée', 'Articulations intercarpiennes'],
            ['Articulation trochléenne (ginglyme)', 'Surface en forme de poulie', 'Un degré de liberté : flexion-extension', 'Articulation huméro-ulnaire du coude'],
            ['Articulation trochoïde (pivot)', 'Surface cylindrique tournant autour d’un axe longitudinal', 'Un degré de liberté : rotation', 'Articulation radio-ulnaire proximale'],
            ['Articulation condylienne (ellipsoïde)', 'Surface ovoïde convexe dans une surface concave', 'Deux degrés de liberté : flexion-extension, abduction-adduction', 'Articulation radiocarpienne'],
            ['Articulation en selle (à emboîtement réciproque)', 'Deux surfaces concaves-convexes complémentaires', 'Deux degrés de liberté', 'Articulation trapézométacarpienne du pouce'],
            ['Articulation sphéroïde (énarthrose)', 'Surface sphérique dans une cavité concave', 'Trois degrés de liberté', 'Articulation scapulohumérale, articulation coxofémorale'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Repérer une énarthrose',
          texte:
            "Une énarthrose (« tête » sphérique dans une cavité concave) autorise l’ensemble des mouvements dans les trois plans de l’espace, y compris la circumduction : c’est le prototype de l’articulation la plus mobile, au prix d’une stabilité passive plus faible que les autres diarthroses.",
        },
      ],
    },
    {
      id: 'stabilite',
      titre: 'Facteurs de stabilité articulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La stabilité d’une diarthrose résulte de l’équilibre entre plusieurs facteurs, dont l’importance relative varie considérablement d’une articulation à l’autre.",
        },
        {
          type: 'liste',
          items: [
            "La congruence des surfaces articulaires : plus les deux surfaces épousent leur forme, plus la stabilité osseuse passive est grande.",
            "Les ligaments, qui limitent passivement l’amplitude des mouvements dans certaines directions.",
            "La capsule articulaire et sa tension.",
            "Les muscles péri-articulaires, dont le tonus et la contraction assurent une stabilité active, particulièrement importante lorsque la congruence osseuse est faible.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le compromis mobilité-stabilité',
          texte:
            "L’articulation scapulohumérale illustre ce compromis : sa cavité glénoïdale, peu profonde, offre une faible congruence osseuse, ce qui explique sa grande mobilité mais aussi sa fréquence de luxation. À l’inverse, l’articulation coxofémorale, dont l’acétabulum est profond et congruent avec la tête fémorale, est nettement plus stable mais moins mobile.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas négliger la stabilisation musculaire active',
          texte:
            "Pour l’épaule, la stabilité dépend en grande partie des muscles de la coiffe des rotateurs, qui plaquent activement la tête humérale contre la cavité glénoïdale. Une lésion de la coiffe peut donc entraîner une instabilité fonctionnelle même en l’absence de lésion ligamentaire ou osseuse.",
        },
      ],
    },
    {
      id: 'mouvements-permis',
      titre: 'Mouvements permis selon le type d’articulation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le nombre de degrés de liberté d’une diarthrose conditionne directement l’étendue des mouvements qu’elle autorise, du mouvement de glissement pur des arthrodies à la mobilité complète des énarthroses.",
        },
        {
          type: 'tableau',
          titre: 'Correspondance type d’articulation et mouvements',
          colonnes: ['Type', 'Mouvements possibles'],
          lignes: [
            ['Trochléenne', 'Flexion, extension uniquement'],
            ['Trochoïde', 'Rotation médiale, rotation latérale (par exemple pronation-supination pour la radio-ulnaire proximale)'],
            ['Condylienne', 'Flexion, extension, abduction, adduction, circumduction limitée ; rotation axiale absente ou très limitée'],
            ['Sphéroïde', 'Flexion, extension, abduction, adduction, rotation médiale, rotation latérale, circumduction'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Amplitude articulaire, un repère utile',
          texte:
            "L’articulation coxofémorale, bien que sphéroïde comme l’épaule, présente des amplitudes de mouvement globalement inférieures à celles de l’épaule, en raison de sa plus grande congruence osseuse et de la présence du labrum acétabulaire, qui augmente encore la surface de contact.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les articulations se classent en synarthroses, amphiarthroses et diarthroses selon leur degré de mobilité.",
    "Une diarthrose comprend cartilage articulaire, cavité articulaire, membrane synoviale, capsule et ligaments.",
    "Le liquide synovial lubrifie l’articulation et nourrit le cartilage, dépourvu de vascularisation propre.",
    "La forme des surfaces articulaires détermine le nombre de degrés de liberté : plane, trochléenne, trochoïde, condylienne, en selle ou sphéroïde.",
    "Une énarthrose (épaule, hanche) possède trois degrés de liberté et autorise tous les mouvements, y compris la circumduction.",
    "La stabilité articulaire résulte de la congruence osseuse, des ligaments, de la capsule et de la stabilisation musculaire active.",
    "L’épaule illustre le compromis mobilité-stabilité : grande mobilité, faible congruence osseuse, stabilité surtout musculaire.",
  ],
  erreursFrequentes: [
    "Confondre synarthrose et amphiarthrose : la synarthrose est immobile ou quasi immobile, l’amphiarthrose autorise une mobilité faible mais réelle.",
    "Oublier que le cartilage articulaire n’est pas vascularisé et dépend du liquide synovial pour sa nutrition.",
    "Attribuer trois degrés de liberté à une articulation condylienne, qui n’en possède que deux.",
    "Croire que la stabilité d’une diarthrose ne dépend que des ligaments, en négligeant le rôle essentiel des muscles péri-articulaires.",
    "Confondre articulation trochléenne (un axe, flexion-extension) et articulation trochoïde (un axe, rotation) : le nombre de degrés de liberté est identique mais le mouvement autorisé diffère.",
  ],
  mnemotechniques: [
    {
      moyen: 'SAD : Syn-Amphi-Dia, du moins mobile au plus mobile',
      explication:
        'Synarthrose (immobile), amphiarthrose (peu mobile), diarthrose (très mobile) : la mobilité croît dans cet ordre alphabétique.',
    },
    {
      moyen: 'Énarthrose = liberté totale',
      explication:
        'Trois degrés de liberté, comme les trois plans de l’espace : flexion-extension, abduction-adduction, rotation médiale-latérale, plus la circumduction qui les combine.',
    },
  ],
  sources: [
    'Kamina, Anatomie clinique, tome 1, Anatomie générale, membres',
    'Drake, Vogl, Mitchell, Gray’s Anatomie pour les étudiants',
    'Netter, Atlas d’anatomie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'anat-arthrologie-fc-01',
      recto: 'Citer les trois grandes catégories d’articulations selon leur mobilité.',
      verso: 'Synarthrose (immobile), amphiarthrose (peu mobile), diarthrose (très mobile).',
      type: 'classification',
      tags: ['classification'],
    },
    {
      id: 'anat-arthrologie-fc-02',
      recto: 'Citer un exemple de synarthrose.',
      verso: 'Les sutures crâniennes, ou la syndesmose tibiofibulaire.',
      type: 'definition',
      tags: ['synarthrose'],
    },
    {
      id: 'anat-arthrologie-fc-03',
      recto: 'Citer les principaux éléments constitutifs d’une diarthrose.',
      verso: 'Cartilage articulaire, cavité articulaire, membrane synoviale, capsule articulaire, ligaments.',
      type: 'definition',
      tags: ['diarthrose'],
    },
    {
      id: 'anat-arthrologie-fc-04',
      recto: 'Quel rôle joue le liquide synovial ?',
      verso: 'Il lubrifie l’articulation, réduit les frottements et participe à la nutrition du cartilage articulaire, avasculaire.',
      type: 'mecanisme',
      tags: ['liquide synovial'],
    },
    {
      id: 'anat-arthrologie-fc-05',
      recto: 'Combien de degrés de liberté possède une articulation trochléenne ? Donner un exemple.',
      verso: 'Un seul degré de liberté (flexion-extension), par exemple l’articulation huméro-ulnaire du coude.',
      type: 'classification',
      tags: ['trochléenne'],
    },
    {
      id: 'anat-arthrologie-fc-06',
      recto: 'Combien de degrés de liberté possède une énarthrose ? Donner deux exemples.',
      verso: 'Trois degrés de liberté ; articulations scapulohumérale et coxofémorale.',
      type: 'classification',
      tags: ['énarthrose'],
    },
    {
      id: 'anat-arthrologie-fc-07',
      recto: 'Quel mouvement permet une articulation trochoïde ? Donner un exemple.',
      verso: 'Un mouvement de rotation autour d’un axe longitudinal, comme l’articulation radio-ulnaire proximale (pronation-supination).',
      type: 'classification',
      tags: ['trochoïde'],
    },
    {
      id: 'anat-arthrologie-fc-08',
      recto: 'Quels sont les facteurs de stabilité d’une diarthrose ?',
      verso: 'La congruence des surfaces articulaires, les ligaments, la capsule articulaire et les muscles péri-articulaires.',
      type: 'mecanisme',
      tags: ['stabilité'],
    },
    {
      id: 'anat-arthrologie-fc-09',
      recto: 'Pourquoi l’articulation scapulohumérale est-elle facilement luxable ?',
      verso: 'Parce que la cavité glénoïdale est peu profonde et offre une faible congruence osseuse avec la tête humérale.',
      type: 'clinique',
      tags: ['épaule', 'luxation'],
    },
    {
      id: 'anat-arthrologie-fc-10',
      recto: 'Quels muscles stabilisent activement l’articulation scapulohumérale ?',
      verso: 'Les muscles de la coiffe des rotateurs, qui plaquent la tête humérale contre la cavité glénoïdale.',
      type: 'mecanisme',
      tags: ['épaule', 'coiffe des rotateurs'],
    },
    {
      id: 'anat-arthrologie-fc-11',
      recto: 'Quel élément fibrocartilagineux augmente la congruence de l’articulation coxofémorale ?',
      verso: 'Le labrum acétabulaire, qui augmente la surface de contact avec la tête fémorale.',
      type: 'definition',
      tags: ['hanche', 'labrum'],
    },
    {
      id: 'anat-arthrologie-fc-12',
      recto: 'Combien de degrés de liberté possède une articulation condylienne ? Donner un exemple.',
      verso: 'Deux degrés de liberté (flexion-extension, abduction-adduction), comme l’articulation radiocarpienne.',
      type: 'classification',
      tags: ['condylienne'],
    },
  ],
  qcm: [
    {
      id: 'anat-arthrologie-qcm-01',
      enonce: 'Concernant la classification générale des articulations, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La synarthrose est très mobile.', vraie: false, justification: 'Faux : la synarthrose est immobile ou quasi immobile, unie par un tissu fibreux ou cartilagineux continu.' },
        { lettre: 'B', texte: 'La symphyse pubienne est une amphiarthrose.', vraie: true, justification: 'Exact, elle est unie par du fibrocartilage et autorise une mobilité faible.' },
        { lettre: 'C', texte: 'La diarthrose possède une cavité articulaire tapissée de synoviale.', vraie: true, justification: 'Exact, c’est un élément constitutif essentiel de l’articulation synoviale.' },
        { lettre: 'D', texte: 'Les sutures crâniennes sont des diarthroses.', vraie: false, justification: 'Faux : ce sont des synarthroses, sans cavité articulaire.' },
        { lettre: 'E', texte: 'Le disque intervertébral appartient aux amphiarthroses.', vraie: true, justification: 'Exact, il assure une mobilité limitée entre deux vertèbres adjacentes.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'anat-arthrologie-qcm-02',
      enonce: 'Concernant les éléments constitutifs d’une diarthrose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le cartilage articulaire est un cartilage hyalin.', vraie: true, justification: 'Le cartilage hyalin, lisse et résistant, recouvre les surfaces osseuses en contact et amortit les contraintes tout en réduisant les frottements.' },
        { lettre: 'B', texte: 'La membrane synoviale recouvre également le cartilage articulaire.', vraie: false, justification: 'Faux : la membrane synoviale tapisse la face interne de la capsule mais s’arrête au bord du cartilage articulaire.' },
        { lettre: 'C', texte: 'Le liquide synovial est sécrété par la capsule fibreuse.', vraie: false, justification: 'Faux : il est sécrété par la membrane synoviale, et non par la capsule fibreuse elle-même.' },
        { lettre: 'D', texte: 'Les ménisques sont des éléments fibrocartilagineux présents dans certaines diarthroses, comme le genou.', vraie: true, justification: 'Ce sont des éléments intra-articulaires inconstants, qui améliorent la congruence des surfaces et amortissent les contraintes dans certaines diarthroses, notamment le genou.' },
        { lettre: 'E', texte: 'Le cartilage articulaire est richement vascularisé.', vraie: false, justification: 'Faux : le cartilage articulaire est avasculaire, nourri par le liquide synovial.' },
      ],
      correction: 'Réponses exactes : A et D.',
      difficulte: 2,
    },
    {
      id: 'anat-arthrologie-qcm-03',
      enonce: 'Concernant les degrés de liberté des diarthroses, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une articulation trochléenne possède un seul degré de liberté.', vraie: true, justification: 'Exact, elle ne permet que la flexion-extension.' },
        { lettre: 'B', texte: 'Une articulation condylienne possède trois degrés de liberté.', vraie: false, justification: 'Faux : elle en possède deux, flexion-extension et abduction-adduction.' },
        { lettre: 'C', texte: 'Une énarthrose autorise la circumduction.', vraie: true, justification: 'Exact, ses trois degrés de liberté permettent tous les mouvements combinés.' },
        { lettre: 'D', texte: 'L’articulation radio-ulnaire proximale est une articulation trochoïde.', vraie: true, justification: 'Exact, elle autorise la rotation autour d’un axe longitudinal.' },
        { lettre: 'E', texte: 'Une arthrodie autorise des mouvements de grande amplitude dans les trois plans.', vraie: false, justification: 'Faux : une arthrodie autorise seulement un glissement de faible amplitude, ses surfaces étant planes.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-arthrologie-qcm-04',
      enonce: 'Concernant la stabilité articulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La congruence des surfaces articulaires participe à la stabilité passive.', vraie: true, justification: 'Plus les deux surfaces articulaires épousent leur forme, plus l’emboîtement osseux limite à lui seul les déplacements, sans intervention musculaire.' },
        { lettre: 'B', texte: 'Les muscles péri-articulaires n’ont aucun rôle dans la stabilité d’une articulation.', vraie: false, justification: 'Faux : ils assurent une stabilité active, essentielle notamment à l’épaule.' },
        { lettre: 'C', texte: 'L’articulation coxofémorale est plus stable que l’articulation scapulohumérale en raison d’une meilleure congruence osseuse.', vraie: true, justification: 'Exact, l’acétabulum est plus profond que la cavité glénoïdale.' },
        { lettre: 'D', texte: 'La coiffe des rotateurs stabilise activement la tête humérale contre la cavité glénoïdale.', vraie: true, justification: 'Ses muscles se contractent en permanence pour plaquer la tête humérale contre la glène, compensant la faible congruence osseuse de cette articulation.' },
        { lettre: 'E', texte: 'Plus une articulation est mobile, plus elle est nécessairement stable.', vraie: false, justification: 'Faux : mobilité et stabilité sont globalement antagonistes, comme l’illustre le compromis observé à l’épaule.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-arthrologie-qcm-05',
      enonce: 'Concernant les exemples d’articulations, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’articulation trapézométacarpienne du pouce est une articulation en selle.', vraie: true, justification: 'Ses deux surfaces concaves-convexes complémentaires s’emboîtent réciproquement, offrant deux degrés de liberté et une grande mobilité pour l’opposition du pouce.' },
        { lettre: 'B', texte: 'L’articulation radiocarpienne est une énarthrose.', vraie: false, justification: 'Faux : c’est une articulation condylienne, à deux degrés de liberté.' },
        { lettre: 'C', texte: 'Les articulations intercarpiennes sont des arthrodies.', vraie: true, justification: 'Exact, leurs surfaces sont planes et le mouvement se limite à un glissement.' },
        { lettre: 'D', texte: 'L’articulation coxofémorale est une énarthrose.', vraie: true, justification: 'Exact, tête fémorale sphérique dans l’acétabulum concave.' },
        { lettre: 'E', texte: 'L’articulation huméro-ulnaire est une articulation en selle.', vraie: false, justification: 'Faux : c’est une articulation trochléenne, en forme de poulie.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-arthrologie-qcm-06',
      enonce: 'Concernant les amphiarthroses et synarthroses, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La syndesmose tibiofibulaire est unie par du tissu fibreux.', vraie: true, justification: 'Exact, c’est une synarthrose fibreuse.' },
        { lettre: 'B', texte: 'Le disque intervertébral appartient au tissu fibrocartilagineux.', vraie: true, justification: 'Exact, son anneau fibreux est un fibrocartilage entourant le noyau pulpeux.' },
        { lettre: 'C', texte: 'Une synarthrose possède toujours une cavité articulaire tapissée de synoviale.', vraie: false, justification: 'Faux : c’est justement l’absence de cavité qui caractérise la synarthrose.' },
        { lettre: 'D', texte: 'La symphyse pubienne autorise une mobilité qui augmente physiologiquement lors de la grossesse.', vraie: true, justification: 'Exact, sous l’effet d’une relaxation ligamentaire hormonale facilitant l’accouchement.' },
        { lettre: 'E', texte: 'Les amphiarthroses sont toujours plus mobiles que les diarthroses.', vraie: false, justification: 'Faux : c’est l’inverse, les diarthroses offrent la plus grande mobilité.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
