import type { Fiche } from '../../types';

export const ficheCou: Fiche = {
  id: 'anat-cou',
  ue: 'anat',
  titre: 'Le cou',
  sousTitre: 'Régions et triangles cervicaux, sternocléidomastoïdien, fascias, axe viscéral, glande thyroïde, plexus cervical',
  chapitre: 'Tête et cou',
  ordre: 14,
  duree: 24,
  difficulte: 3,
  motsCles: [
    'triangle cervical',
    'muscle sternocléidomastoïdien',
    'fascia cervical',
    'axe viscéral du cou',
    'paquet vasculonerveux du cou',
    'glande thyroïde',
    'plexus cervical',
  ],
  objectifs: [
    "Décrire l’organisation générale du cou en régions et triangles.",
    "Décrire le muscle sternocléidomastoïdien et son rôle de repère de surface.",
    "Décrire les fascias cervicaux et les loges qu’ils délimitent.",
    "Décrire les éléments de l’axe viscéral et du paquet vasculonerveux du cou.",
    "Décrire la glande thyroïde et l’organisation générale du plexus cervical.",
  ],
  sections: [
    {
      id: 'regions-triangles',
      titre: 'Régions et triangles du cou',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cou est classiquement subdivisé en deux grandes régions latérales, droite et gauche, séparées par une région médiane, elles-mêmes découpées en triangles délimités par le muscle sternocléidomastoïdien et d’autres repères de surface, ce qui facilite la localisation des structures profondes.",
        },
        {
          type: 'tableau',
          titre: 'Les deux grands triangles cervicaux',
          colonnes: ['Triangle', 'Limites principales', 'Contenu principal'],
          lignes: [
            [
              'Triangle cervical antérieur',
              'Ligne médiane, bord inférieur de la mandibule, bord antérieur du sternocléidomastoïdien',
              'Axe viscéral (larynx, trachée, pharynx, œsophage), glande thyroïde, éléments du paquet vasculonerveux',
            ],
            [
              'Triangle cervical postérieur',
              'Bord postérieur du sternocléidomastoïdien, bord antérieur du trapèze, tiers moyen de la clavicule',
              'Nerf accessoire (XI), racines du plexus cervical, portion du plexus brachial, artère subclavière (partie distale)',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Subdivisions plus fines',
          texte:
            "Chaque grand triangle se subdivise à son tour en triangles plus petits : le triangle antérieur comprend notamment les triangles submandibulaire, carotidien et musculaire ; le triangle postérieur comprend le triangle occipital et le triangle supraclaviculaire (ou omoclaviculaire).",
        },
      ],
    },
    {
      id: 'sternocleidomastoidien',
      titre: 'Le muscle sternocléidomastoïdien',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le muscle sternocléidomastoïdien est le repère de surface majeur du cou, dont le relief oblique sépare classiquement les triangles cervicaux antérieur et postérieur et guide la palpation de nombreuses structures vasculonerveuses sous-jacentes.",
        },
        {
          type: 'tableau',
          titre: 'Le muscle sternocléidomastoïdien',
          colonnes: ['Muscle', 'Origine', 'Terminaison', 'Innervation', 'Action'],
          lignes: [
            [
              'Sternocléidomastoïdien',
              'Chef sternal : manubrium sternal ; chef claviculaire : tiers médial de la clavicule',
              'Processus mastoïde et ligne nucale supérieure de l’occipital',
              'Nerf accessoire (XI), avec une contribution proprioceptive du plexus cervical',
              'Contraction unilatérale : inclinaison homolatérale et rotation controlatérale de la tête ; contraction bilatérale : flexion de la tête, élévation accessoire du thorax en inspiration forcée',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Torticolis congénital',
          texte:
            "Une rétraction fibreuse congénitale du muscle sternocléidomastoïdien peut entraîner un torticolis musculaire congénital du nourrisson, avec inclinaison de la tête du côté atteint et rotation du visage du côté opposé, nécessitant une prise en charge kinésithérapique précoce.",
        },
      ],
    },
    {
      id: 'fascias-cervicaux',
      titre: 'Les fascias cervicaux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cou est organisé en plusieurs loges concentriques délimitées par des feuillets fasciaux, dont la connaissance est essentielle à la compréhension de la diffusion des infections cervicales profondes.",
        },
        {
          type: 'tableau',
          titre: 'Principaux feuillets du fascia cervical',
          colonnes: ['Feuillet', 'Situation', 'Contenu délimité'],
          lignes: [
            ['Lame superficielle (fascia d’enveloppe)', 'La plus externe, entoure tout le cou', 'Muscles sternocléidomastoïdien et trapèze, glandes salivaires'],
            ['Lame prétrachéale', 'Antérieure, entoure l’axe viscéral', 'Larynx, trachée, glande thyroïde, œsophage cervical'],
            ['Lame prévertébrale', 'Postérieure, en avant du rachis cervical', 'Muscles prévertébraux, chaîne sympathique cervicale'],
            ['Gaine carotidienne', 'Autour du paquet vasculonerveux', 'Artère carotide commune, veine jugulaire interne, nerf vague'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Diffusion des infections cervicales profondes',
          texte:
            "Les espaces virtuels entre ces différents feuillets fasciaux constituent des plans de moindre résistance le long desquels une infection cervicale profonde (par exemple une angine compliquée) peut diffuser vers le médiastin, expliquant la gravité potentielle de certaines cellulites cervicales.",
        },
      ],
    },
    {
      id: 'axe-viscere-paquet',
      titre: 'L’axe viscéral et le paquet vasculonerveux du cou',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’axe viscéral du cou regroupe, sur la ligne médiane, les organes respiratoires et digestifs cervicaux, tandis que le paquet vasculonerveux, disposé de part et d’autre dans sa gaine propre, assure la vascularisation céphalique et l’innervation autonome.",
        },
        {
          type: 'liste',
          items: [
            "L’axe viscéral comprend, d’avant en arrière au même niveau, le larynx et la trachée en avant, le pharynx et l’œsophage en arrière, avec la glande thyroïde appliquée contre les faces latérales du larynx et de la trachée.",
            "Le paquet vasculonerveux du cou, contenu dans la gaine carotidienne, associe l’artère carotide commune en dedans, la veine jugulaire interne en dehors, et le nerf vague (X) en arrière, entre les deux.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Disposition du paquet vasculonerveux',
          texte:
            "La disposition classique du paquet vasculonerveux du cou, artère en dedans, veine en dehors, nerf en arrière, est un grand classique de l’anatomie topographique cervicale, fréquemment testée en coupe transversale de niveau thyroïdien.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Bifurcation carotidienne',
          texte:
            "L’artère carotide commune se divise, classiquement au bord supérieur du cartilage thyroïde, en artère carotide externe, destinée à la face et au cou, et artère carotide interne, destinée à l’encéphale et dépourvue de toute branche collatérale cervicale.",
        },
      ],
    },
    {
      id: 'thyroide',
      titre: 'La glande thyroïde',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La glande thyroïde est une glande endocrine impaire, appliquée contre la partie antéro-latérale du larynx et de la trachée, formée de deux lobes latéraux réunis par un isthme médian.",
        },
        {
          type: 'liste',
          items: [
            "Chaque lobe latéral s’étend classiquement du cartilage thyroïde jusqu’au cinquième ou sixième anneau trachéal.",
            "L’isthme thyroïdien croise la face antérieure des deuxième et troisième anneaux trachéaux.",
            "La glande est richement vascularisée par les artères thyroïdiennes supérieures (issues de la carotide externe) et inférieures (issues du tronc thyrocervical, branche de l’artère subclavière).",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Rapport avec le nerf laryngé récurrent',
          texte:
            "Le nerf laryngé récurrent chemine dans l’angle trachéo-œsophagien, au contact étroit de la face postérieure de la glande thyroïde, ce qui en fait une structure à risque majeur lors de toute chirurgie thyroïdienne : sa lésion peropératoire entraîne une paralysie de la corde vocale homolatérale.",
        },
      ],
    },
    {
      id: 'plexus-cervical',
      titre: 'Le plexus cervical',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le plexus cervical est formé par l’union des rameaux ventraux des quatre premiers nerfs cervicaux (C1 à C4), situé profondément en regard des processus transverses cervicaux, en arrière du muscle sternocléidomastoïdien.",
        },
        {
          type: 'tableau',
          titre: 'Principales branches du plexus cervical',
          colonnes: ['Branche', 'Origine', 'Territoire'],
          lignes: [
            ['Nerf phrénique', 'C3-C5 (contribution principale du plexus cervical, complétée par C5 issu du plexus brachial)', 'Innervation motrice exclusive du diaphragme'],
            ['Nerfs cutanés cervicaux superficiels (petit occipital, grand auriculaire, transverse du cou, supraclaviculaires)', 'C2-C4', 'Sensibilité cutanée du cou, de la région rétro-auriculaire et de la partie supérieure du thorax'],
            ['Anse cervicale', 'C1-C3', 'Muscles infrahyoïdiens (sous-hyoïdiens)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir l’origine du nerf phrénique',
          texte:
            "« C3, C4, C5 gardent le diaphragme en vie » : cette phrase mnémotechnique classique résume l’origine radiculaire du nerf phrénique, essentiellement issue du plexus cervical (C3-C4), avec une contribution de C5 provenant du plexus brachial.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le muscle sternocléidomastoïdien sépare les triangles cervicaux antérieur et postérieur et sert de repère de surface majeur.",
    "Le fascia cervical s’organise en plusieurs lames (superficielle, prétrachéale, prévertébrale) et en gaine carotidienne.",
    "Le paquet vasculonerveux du cou associe, dans la gaine carotidienne, l’artère carotide commune en dedans, la veine jugulaire interne en dehors, et le nerf vague en arrière.",
    "La glande thyroïde comprend deux lobes latéraux réunis par un isthme, appliquée contre le larynx et la trachée.",
    "Le nerf laryngé récurrent, au contact de la face postérieure de la thyroïde, est exposé lors de la chirurgie thyroïdienne.",
    "Le plexus cervical (C1-C4) donne notamment le nerf phrénique, moteur exclusif du diaphragme.",
    "L’artère carotide commune se divise au bord supérieur du cartilage thyroïde en carotide externe et carotide interne.",
  ],
  erreursFrequentes: [
    "Inverser la position de l’artère carotide commune et de la veine jugulaire interne dans la gaine carotidienne : l’artère est médiale, la veine est latérale.",
    "Croire que le nerf phrénique naît uniquement du plexus brachial, en oubliant sa contribution principale du plexus cervical (C3-C4).",
    "Confondre lame prétrachéale, qui entoure l’axe viscéral, et lame prévertébrale, qui recouvre les muscles prévertébraux.",
    "Oublier le risque de lésion du nerf laryngé récurrent lors de la chirurgie thyroïdienne, en raison de son trajet immédiatement postérieur à la glande.",
    "Situer l’artère carotide interne comme destinée à la face et au cou, alors que c’est le territoire de la carotide externe ; la carotide interne est destinée à l’encéphale.",
  ],
  mnemotechniques: [
    {
      moyen: '« C3, C4, C5 gardent le diaphragme en vie »',
      explication:
        'Résume l’origine radiculaire du nerf phrénique : contribution principale de C3-C4 (plexus cervical), complétée par C5 (plexus brachial).',
    },
    {
      moyen: 'Artère dedans, veine dehors, nerf derrière',
      explication:
        'Dans la gaine carotidienne : l’artère carotide commune est médiale, la veine jugulaire interne est latérale, le nerf vague est postérieur, entre les deux.',
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
      id: 'anat-cou-fc-01',
      recto: 'Quel muscle sépare les triangles cervicaux antérieur et postérieur ?',
      verso: 'Le muscle sternocléidomastoïdien.',
      type: 'definition',
      tags: ['triangles cervicaux'],
    },
    {
      id: 'anat-cou-fc-02',
      recto: 'Quel nerf innerve le muscle sternocléidomastoïdien ?',
      verso: 'Le nerf accessoire (XI), avec une contribution proprioceptive du plexus cervical.',
      type: 'mecanisme',
      tags: ['sternocléidomastoïdien'],
    },
    {
      id: 'anat-cou-fc-03',
      recto: 'Que contient la gaine carotidienne ?',
      verso: 'L’artère carotide commune, la veine jugulaire interne et le nerf vague (X).',
      type: 'definition',
      tags: ['paquet vasculonerveux'],
    },
    {
      id: 'anat-cou-fc-04',
      recto: 'Décrire la disposition du paquet vasculonerveux du cou dans la gaine carotidienne.',
      verso: 'Artère carotide commune en dedans, veine jugulaire interne en dehors, nerf vague en arrière, entre les deux.',
      type: 'definition',
      tags: ['paquet vasculonerveux'],
    },
    {
      id: 'anat-cou-fc-05',
      recto: 'Où se situe classiquement la bifurcation de l’artère carotide commune ?',
      verso: 'Au bord supérieur du cartilage thyroïde.',
      type: 'definition',
      tags: ['carotide'],
    },
    {
      id: 'anat-cou-fc-06',
      recto: 'Comment est organisée la glande thyroïde ?',
      verso: 'Deux lobes latéraux réunis par un isthme médian, appliqués contre le larynx et la trachée.',
      type: 'definition',
      tags: ['thyroïde'],
    },
    {
      id: 'anat-cou-fc-07',
      recto: 'Quel nerf est exposé lors de la chirurgie thyroïdienne, au contact de la face postérieure de la glande ?',
      verso: 'Le nerf laryngé récurrent, dont la lésion entraîne une paralysie de la corde vocale homolatérale.',
      type: 'clinique',
      tags: ['thyroïde', 'nerf laryngé récurrent'],
    },
    {
      id: 'anat-cou-fc-08',
      recto: 'Quelles racines forment le plexus cervical ?',
      verso: 'Les rameaux ventraux de C1 à C4.',
      type: 'definition',
      tags: ['plexus cervical'],
    },
    {
      id: 'anat-cou-fc-09',
      recto: 'Quelle est l’origine radiculaire du nerf phrénique ?',
      verso: 'Principalement C3-C4 (plexus cervical), avec une contribution de C5 (plexus brachial).',
      type: 'chiffre',
      tags: ['nerf phrénique'],
    },
    {
      id: 'anat-cou-fc-10',
      recto: 'Quels muscles sont innervés par l’anse cervicale ?',
      verso: 'Les muscles infrahyoïdiens (sous-hyoïdiens).',
      type: 'mecanisme',
      tags: ['plexus cervical'],
    },
    {
      id: 'anat-cou-fc-11',
      recto: 'Quel feuillet fascial entoure directement l’axe viscéral du cou ?',
      verso: 'La lame prétrachéale.',
      type: 'definition',
      tags: ['fascias cervicaux'],
    },
    {
      id: 'anat-cou-fc-12',
      recto: 'Pourquoi la connaissance des fascias cervicaux est-elle importante en pathologie infectieuse ?',
      verso: 'Parce que les espaces virtuels entre les feuillets fasciaux constituent des plans de diffusion pour les infections cervicales profondes, pouvant atteindre le médiastin.',
      type: 'clinique',
      tags: ['fascias cervicaux'],
    },
  ],
  qcm: [
    {
      id: 'anat-cou-qcm-01',
      enonce: 'Concernant les triangles cervicaux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le triangle cervical antérieur contient l’axe viscéral du cou.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le triangle cervical postérieur est limité par le bord postérieur du sternocléidomastoïdien.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Le triangle carotidien appartient au grand triangle postérieur.', vraie: false, justification: 'Faux : le triangle carotidien est une subdivision du triangle cervical antérieur.' },
        { lettre: 'D', texte: 'Le nerf accessoire (XI) traverse le triangle cervical postérieur.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Le triangle supraclaviculaire appartient au grand triangle antérieur.', vraie: false, justification: 'Faux : il appartient au grand triangle postérieur.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-cou-qcm-02',
      enonce: 'Concernant le muscle sternocléidomastoïdien, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il naît du manubrium sternal et de la clavicule.', vraie: true, justification: 'Exact, par ses chefs sternal et claviculaire.' },
        { lettre: 'B', texte: 'Il se termine sur le processus mastoïde.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Sa contraction unilatérale produit une inclinaison controlatérale de la tête.', vraie: false, justification: 'Faux : la contraction unilatérale produit une inclinaison homolatérale et une rotation controlatérale.' },
        { lettre: 'D', texte: 'Il est innervé par le nerf phrénique.', vraie: false, justification: 'Faux : il est innervé par le nerf accessoire (XI).' },
        { lettre: 'E', texte: 'Sa contraction bilatérale participe à la flexion de la tête.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'anat-cou-qcm-03',
      enonce: 'Concernant les fascias cervicaux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La lame prétrachéale entoure l’axe viscéral du cou.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'La lame prévertébrale recouvre les muscles prévertébraux et la chaîne sympathique cervicale.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'La gaine carotidienne est indépendante des autres feuillets fasciaux.', vraie: false, justification: 'Faux : elle est en continuité avec les autres feuillets, ce qui participe aux voies de diffusion infectieuse.' },
        { lettre: 'D', texte: 'La lame superficielle entoure le muscle trapèze.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Les espaces entre feuillets fasciaux ne jouent aucun rôle dans la diffusion des infections cervicales.', vraie: false, justification: 'Faux : ils constituent au contraire des plans de moindre résistance favorisant la diffusion infectieuse vers le médiastin.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-cou-qcm-04',
      enonce: 'Concernant le paquet vasculonerveux du cou, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’artère carotide commune est la structure la plus médiale de la gaine carotidienne.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'La veine jugulaire interne est la structure la plus médiale.', vraie: false, justification: 'Faux : elle est la structure la plus latérale ; l’artère est médiale.' },
        { lettre: 'C', texte: 'Le nerf vague se situe en arrière, entre l’artère et la veine.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'L’artère carotide interne se divise en artère carotide commune et externe.', vraie: false, justification: 'Faux : c’est l’artère carotide commune qui se divise en carotide interne et externe.' },
        { lettre: 'E', texte: 'L’artère carotide interne n’a pas de branche collatérale cervicale.', vraie: true, justification: 'Exact, contrairement à la carotide externe.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-cou-qcm-05',
      enonce: 'Concernant la glande thyroïde, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle comprend deux lobes réunis par un isthme.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Les artères thyroïdiennes supérieures naissent de l’artère carotide externe.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Les artères thyroïdiennes inférieures naissent directement de l’aorte thoracique.', vraie: false, justification: 'Faux : elles naissent du tronc thyrocervical, branche de l’artère subclavière.' },
        { lettre: 'D', texte: 'Le nerf laryngé récurrent est à distance de la thyroïde et n’est jamais exposé lors de sa chirurgie.', vraie: false, justification: 'Faux : il chemine au contact étroit de la face postérieure de la thyroïde, exposé à une lésion peropératoire.' },
        { lettre: 'E', texte: 'L’isthme thyroïdien croise la face antérieure des deuxième et troisième anneaux trachéaux.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'anat-cou-qcm-06',
      enonce: 'Concernant le plexus cervical, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est formé des rameaux ventraux de C1 à C4.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le nerf phrénique en est la branche la plus importante sur le plan fonctionnel.', vraie: true, justification: 'Exact, en tant qu’innervation motrice exclusive du diaphragme.' },
        { lettre: 'C', texte: 'L’anse cervicale innerve les muscles suprahyoïdiens.', vraie: false, justification: 'Faux : l’anse cervicale innerve les muscles infrahyoïdiens (sous-hyoïdiens).' },
        { lettre: 'D', texte: 'Le plexus cervical se situe en arrière du muscle sternocléidomastoïdien.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Les nerfs cutanés cervicaux superficiels assurent la sensibilité cutanée du cou.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, B, D et E.',
      difficulte: 2,
    },
  ],
};
