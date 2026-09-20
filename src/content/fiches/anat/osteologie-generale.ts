import type { Fiche } from '../../types';

export const ficheOsteologieGenerale: Fiche = {
  id: 'anat-osteologie-generale',
  ue: 'anat',
  titre: 'Ostéologie générale',
  sousTitre: 'Classification des os, structure macroscopique et microscopique, vascularisation, croissance',
  chapitre: 'Anatomie générale',
  ordre: 2,
  duree: 22,
  difficulte: 2,
  motsCles: [
    'os long',
    'périoste',
    'os compact',
    'os spongieux',
    'ostéone',
    'cartilage de conjugaison',
    'ossification',
    'diaphyse',
    'épiphyse',
  ],
  objectifs: [
    "Classer les os selon leur forme et donner un exemple pour chaque classe.",
    "Décrire l’organisation macroscopique d’un os long.",
    "Différencier l’os compact et l’os spongieux à l’échelle microscopique.",
    "Expliquer les mécanismes de la croissance osseuse en longueur et en épaisseur.",
    "Décrire les principes de la vascularisation osseuse.",
  ],
  sections: [
    {
      id: 'classification-os',
      titre: 'Classification des os',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le squelette humain adulte compte environ deux cent six os, classés selon leur forme générale. Cette classification morphologique reflète en grande partie la fonction mécanique de chaque os.",
        },
        {
          type: 'tableau',
          titre: 'Classification morphologique des os',
          colonnes: ['Type', 'Caractéristique', 'Exemples'],
          lignes: [
            ['Os longs', 'Une dimension nettement supérieure aux deux autres, avec une diaphyse et deux épiphyses', 'Fémur, humérus, phalanges'],
            ['Os courts', 'Les trois dimensions sont sensiblement égales', 'Os du carpe, os du tarse'],
            ['Os plats', 'Deux dimensions prédominantes, épaisseur réduite', 'Scapula, os du crâne, sternum'],
            ['Os irréguliers', 'Forme complexe ne rentrant dans aucune autre catégorie', 'Vertèbres, os coxal'],
            ['Os pneumatiques', 'Creusés de cavités aériennes tapissées de muqueuse', 'Os frontal, os maxillaire, os ethmoïde'],
            ['Os sésamoïdes', 'Petits os inclus dans l’épaisseur d’un tendon', 'Patella, sésamoïdes des métatarsiens'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La patella est le plus grand os sésamoïde',
          texte:
            "La patella, incluse dans le tendon du muscle quadriceps fémoral, est le plus volumineux os sésamoïde du corps humain. Elle augmente le bras de levier du quadriceps lors de l’extension du genou.",
        },
      ],
    },
    {
      id: 'structure-macroscopique',
      titre: 'Structure macroscopique d’un os long',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un os long typique comprend une partie moyenne, la diaphyse, et deux extrémités, les épiphyses. Chez le sujet en croissance, une zone cartilagineuse, la métaphyse, sépare chaque épiphyse de la diaphyse.",
        },
        {
          type: 'definition',
          terme: 'Diaphyse',
          definition:
            "Portion cylindrique et allongée de l’os long, formée d’un tube d’os compact entourant une cavité centrale, le canal médullaire, qui contient la moelle osseuse.",
        },
        {
          type: 'definition',
          terme: 'Épiphyse',
          definition:
            "Extrémité renflée de l’os long, formée principalement d’os spongieux entouré d’une fine corticale d’os compact, et recouverte de cartilage articulaire au niveau des surfaces articulaires.",
        },
        {
          type: 'liste',
          items: [
            "Le périoste est une membrane fibreuse qui entoure la diaphyse, sauf au niveau des surfaces articulaires recouvertes de cartilage.",
            "L’endoste tapisse la face interne de l’os compact, au contact de la cavité médullaire.",
            "La moelle osseuse rouge, hématopoïétique, est progressivement remplacée par de la moelle jaune, graisseuse, dans la diaphyse au cours de la croissance.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Rôle du périoste dans la consolidation des fractures',
          texte:
            "Le périoste contient une couche profonde riche en cellules ostéoprogénitrices, capables de se différencier en ostéoblastes. Il joue un rôle majeur dans la formation du cal osseux périphérique lors de la consolidation d’une fracture, ce qui explique l’importance de le préserver lors d’un geste chirurgical.",
        },
      ],
    },
    {
      id: 'structure-microscopique',
      titre: 'Structure microscopique du tissu osseux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "À l’échelle microscopique, le tissu osseux se présente sous deux architectures distinctes, l’os compact et l’os spongieux, toutes deux constituées de la même matrice minéralisée mais organisées différemment.",
        },
        {
          type: 'tableau',
          titre: 'Os compact et os spongieux',
          colonnes: ['Caractéristique', 'Os compact', 'Os spongieux'],
          lignes: [
            ['Aspect', 'Dense, homogène à l’œil nu', 'Réseau de travées séparées par des espaces médullaires'],
            ['Unité structurale', 'Ostéone (ou système de Havers)', 'Travées osseuses non organisées en ostéones'],
            ['Localisation', 'Diaphyse des os longs, corticale externe des autres os', 'Épiphyses des os longs, intérieur des os courts et plats'],
            ['Vascularisation', 'Canaux de Havers et canaux de Volkmann', 'Espaces intertrabéculaires richement vascularisés'],
          ],
        },
        {
          type: 'definition',
          terme: 'Ostéone',
          definition:
            "Unité structurale de l’os compact, formée de lamelles osseuses concentriques disposées autour d’un canal central, le canal de Havers, qui contient des vaisseaux sanguins et des fibres nerveuses. Les canaux de Volkmann relient les canaux de Havers entre eux et à la surface de l’os.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Les cellules du tissu osseux',
          texte:
            "Trois types cellulaires assurent le remodelage osseux permanent : les ostéoblastes, qui synthétisent la matrice osseuse et se transforment en ostéocytes une fois emmurés dans la matrice minéralisée ; les ostéocytes, cellules matures logées dans des logettes appelées ostéoplastes, qui entretiennent la matrice ; et les ostéoclastes, cellules géantes multinucléées d’origine hématopoïétique, responsables de la résorption osseuse.",
        },
      ],
    },
    {
      id: 'croissance-osseuse',
      titre: 'Croissance et ossification',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’os se forme selon deux modes d’ossification, qui aboutissent au même tissu osseux mature mais diffèrent par la présence ou non d’une étape cartilagineuse intermédiaire.",
        },
        {
          type: 'tableau',
          titre: 'Les deux modes d’ossification',
          colonnes: ['Mode', 'Principe', 'Os concernés'],
          lignes: [
            ['Ossification endochondrale', 'Un modèle cartilagineux est progressivement remplacé par du tissu osseux', 'Os longs, os courts, la plupart des os de la base du crâne'],
            ['Ossification intramembraneuse (ou de membrane)', 'Le tissu osseux se forme directement au sein d’un tissu conjonctif mésenchymateux, sans étape cartilagineuse', 'Os plats de la voûte crânienne, clavicule'],
          ],
        },
        {
          type: 'definition',
          terme: 'Cartilage de croissance (ou cartilage de conjugaison)',
          definition:
            "Disque cartilagineux situé entre la métaphyse et l’épiphyse d’un os long en croissance, dont la prolifération et l’ossification progressive permettent l’allongement de l’os. Sa disparition, remplacée par une ligne d’ossification, marque la fin de la croissance en longueur.",
        },
        {
          type: 'liste',
          items: [
            "La croissance en longueur résulte de la prolifération du cartilage de croissance, suivie de son ossification endochondrale du côté métaphysaire.",
            "La croissance en épaisseur (ou croissance appositionnelle) résulte de l’activité des ostéoblastes de la couche profonde du périoste, qui déposent du tissu osseux nouveau en surface.",
            "Le remodelage osseux se poursuit toute la vie, associant résorption ostéoclastique et formation ostéoblastique, ce qui permet à l’os de s’adapter aux contraintes mécaniques.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Point de repère',
          texte:
            "La fermeture des cartilages de croissance survient globalement entre seize et vingt ans selon les os et le sexe, plus précocement chez la fille que chez le garçon, marquant la fin de la croissance staturale.",
        },
      ],
    },
    {
      id: 'vascularisation',
      titre: 'Vascularisation de l’os',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un os long reçoit plusieurs sources vasculaires complémentaires, dont l’artère nourricière principale est la plus constante et la plus étudiée.",
        },
        {
          type: 'liste',
          items: [
            "L’artère nourricière principale pénètre la diaphyse par le foramen nourricier et se divise en une branche ascendante et une branche descendante dans le canal médullaire.",
            "Des artères métaphysaires et épiphysaires, issues du réseau péri-articulaire, vascularisent les extrémités de l’os.",
            "Un réseau périosté, issu des vaisseaux du périoste, vascularise la partie superficielle de l’os compact par les canaux de Volkmann.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Vascularisation et risque de nécrose',
          texte:
            "Certaines régions épiphysaires ne reçoivent leur vascularisation que par un pédicule unique et peu suppléé, ce qui les expose à un risque de nécrose avasculaire en cas de fracture ou de luxation déplacée à ce niveau. C’est le cas classique de la tête fémorale, vascularisée notamment par les artères circonflexes fémorales.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les os se classent en os longs, courts, plats, irréguliers, pneumatiques et sésamoïdes selon leur forme.",
    "Un os long comprend une diaphyse d’os compact et deux épiphyses d’os spongieux entouré d’une corticale.",
    "Le périoste entoure l’os sauf sur les surfaces articulaires, et contient les cellules ostéoprogénitrices responsables du cal périosté.",
    "L’ostéone est l’unité structurale de l’os compact, organisée autour du canal de Havers.",
    "Deux modes d’ossification existent : endochondrale, avec étape cartilagineuse, et intramembraneuse, directe.",
    "Le cartilage de croissance assure l’allongement de l’os ; sa fermeture marque la fin de la croissance staturale.",
    "Le remodelage osseux se poursuit toute la vie, associant ostéoclastes et ostéoblastes.",
  ],
  erreursFrequentes: [
    "Confondre périoste, qui entoure l’os, et endoste, qui tapisse la cavité médullaire.",
    "Croire que l’os spongieux est organisé en ostéones : seul l’os compact possède cette organisation lamellaire concentrique.",
    "Penser que la croissance en épaisseur passe par le cartilage de croissance, alors qu’elle relève de l’activité périostée.",
    "Oublier que la voûte du crâne et la clavicule s’ossifient selon un mode intramembraneux, sans modèle cartilagineux préalable.",
    "Confondre ostéoblaste, cellule qui forme l’os, et ostéoclaste, cellule qui le résorbe.",
  ],
  mnemotechniques: [
    {
      moyen: 'Ostéoblaste bâtit, ostéoclaste casse',
      explication:
        'Le B d’ostéoblaste rappelle « bâtir » (formation osseuse), le C d’ostéoclaste rappelle « casser » (résorption osseuse).',
    },
    {
      moyen: 'Havers au centre, Volkmann relie',
      explication:
        'Le canal de Havers occupe le centre de chaque ostéone ; les canaux de Volkmann le relient transversalement aux canaux voisins et à la surface de l’os.',
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
      id: 'anat-osteologie-generale-fc-01',
      recto: 'Citer les six classes morphologiques d’os.',
      verso: 'Os longs, courts, plats, irréguliers, pneumatiques et sésamoïdes.',
      type: 'classification',
      tags: ['classification'],
    },
    {
      id: 'anat-osteologie-generale-fc-02',
      recto: 'Quel est le plus volumineux os sésamoïde du corps ?',
      verso: 'La patella, incluse dans le tendon du muscle quadriceps fémoral.',
      type: 'definition',
      tags: ['os sésamoïde'],
    },
    {
      id: 'anat-osteologie-generale-fc-03',
      recto: 'Quelles sont les trois parties d’un os long ?',
      verso: 'La diaphyse au milieu, et deux épiphyses aux extrémités, séparées chez le sujet en croissance par les métaphyses.',
      type: 'definition',
      tags: ['os long'],
    },
    {
      id: 'anat-osteologie-generale-fc-04',
      recto: 'Où se situe le périoste et quel rôle joue-t-il dans la fracture ?',
      verso: 'Il entoure la diaphyse (sauf sur les surfaces articulaires) et contient des cellules ostéoprogénitrices essentielles à la formation du cal périosté.',
      type: 'clinique',
      tags: ['périoste', 'fracture'],
    },
    {
      id: 'anat-osteologie-generale-fc-05',
      recto: 'Qu’est-ce qu’une ostéone ?',
      verso: 'L’unité structurale de l’os compact, formée de lamelles osseuses concentriques autour d’un canal de Havers.',
      type: 'definition',
      tags: ['os compact', 'ostéone'],
    },
    {
      id: 'anat-osteologie-generale-fc-06',
      recto: 'Quel canal relie les canaux de Havers entre eux ?',
      verso: 'Le canal de Volkmann.',
      type: 'definition',
      tags: ['vascularisation osseuse'],
    },
    {
      id: 'anat-osteologie-generale-fc-07',
      recto: 'Quelle cellule assure la résorption osseuse ?',
      verso: 'L’ostéoclaste, cellule géante multinucléée d’origine hématopoïétique.',
      type: 'definition',
      tags: ['cellules osseuses'],
    },
    {
      id: 'anat-osteologie-generale-fc-08',
      recto: 'Différencier ossification endochondrale et intramembraneuse.',
      verso: 'Endochondrale : remplacement d’un modèle cartilagineux préexistant. Intramembraneuse : formation directe d’os dans un tissu mésenchymateux, sans étape cartilagineuse.',
      type: 'mecanisme',
      tags: ['ossification'],
    },
    {
      id: 'anat-osteologie-generale-fc-09',
      recto: 'Quel élément assure l’allongement d’un os long en croissance ?',
      verso: 'Le cartilage de croissance (cartilage de conjugaison), situé entre métaphyse et épiphyse.',
      type: 'mecanisme',
      tags: ['croissance'],
    },
    {
      id: 'anat-osteologie-generale-fc-10',
      recto: 'Comment se fait la croissance osseuse en épaisseur ?',
      verso: 'Par apposition périostée : les ostéoblastes de la couche profonde du périoste déposent du tissu osseux nouveau en surface.',
      type: 'mecanisme',
      tags: ['croissance'],
    },
    {
      id: 'anat-osteologie-generale-fc-11',
      recto: 'Citer deux os qui s’ossifient selon un mode intramembraneux.',
      verso: 'Les os plats de la voûte crânienne et la clavicule.',
      type: 'classification',
      tags: ['ossification'],
    },
    {
      id: 'anat-osteologie-generale-fc-12',
      recto: 'Pourquoi la tête fémorale est-elle exposée à un risque de nécrose avasculaire en cas de fracture ?',
      verso: 'Parce que sa vascularisation dépend en grande partie d’un pédicule peu suppléé, notamment les artères circonflexes fémorales.',
      type: 'clinique',
      tags: ['vascularisation', 'nécrose'],
    },
  ],
  qcm: [
    {
      id: 'anat-osteologie-generale-qcm-01',
      enonce: 'Concernant la classification des os, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les os du carpe sont des os courts.', vraie: true, justification: 'Exact, leurs trois dimensions sont sensiblement égales.' },
        { lettre: 'B', texte: 'La scapula est un os long.', vraie: false, justification: 'Faux : la scapula est un os plat, avec deux dimensions prédominantes et une faible épaisseur.' },
        { lettre: 'C', texte: 'Les vertèbres sont classées parmi les os irréguliers.', vraie: true, justification: 'Exact, leur forme complexe ne correspond à aucune autre catégorie.' },
        { lettre: 'D', texte: 'L’os frontal est un os pneumatique.', vraie: true, justification: 'Exact, il est creusé du sinus frontal, une cavité aérienne tapissée de muqueuse.' },
        { lettre: 'E', texte: 'La patella est un os plat.', vraie: false, justification: 'Faux : la patella est un os sésamoïde, inclus dans le tendon du quadriceps.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 1,
    },
    {
      id: 'anat-osteologie-generale-qcm-02',
      enonce: 'Concernant la structure macroscopique d’un os long, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La diaphyse est principalement formée d’os spongieux.', vraie: false, justification: 'Faux : la diaphyse est un tube d’os compact entourant le canal médullaire.' },
        { lettre: 'B', texte: 'L’épiphyse est formée d’os spongieux entouré d’une fine corticale compacte.', vraie: true, justification: 'Cette architecture, plus légère que celle de la diaphyse, répond mieux aux contraintes multidirectionnelles subies au niveau des articulations.' },
        { lettre: 'C', texte: 'Le périoste recouvre l’intégralité de l’os, y compris les surfaces articulaires.', vraie: false, justification: 'Faux : les surfaces articulaires sont recouvertes de cartilage articulaire, non de périoste.' },
        { lettre: 'D', texte: 'L’endoste tapisse la face interne de l’os compact au contact de la cavité médullaire.', vraie: true, justification: 'Cette fine membrane cellulaire, symétrique du périoste sur la face interne, participe elle aussi au remodelage osseux.' },
        { lettre: 'E', texte: 'La moelle osseuse jaune remplace progressivement la moelle rouge dans la diaphyse au cours de la croissance.', vraie: true, justification: 'Exact, la moelle jaune, graisseuse, prédomine chez l’adulte dans la diaphyse.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-osteologie-generale-qcm-03',
      enonce: 'Concernant la structure microscopique du tissu osseux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ostéone est l’unité structurale de l’os spongieux.', vraie: false, justification: 'Faux : l’ostéone est l’unité structurale de l’os compact.' },
        { lettre: 'B', texte: 'Le canal de Havers contient des vaisseaux sanguins.', vraie: true, justification: 'Exact, ainsi que des fibres nerveuses.' },
        { lettre: 'C', texte: 'L’ostéocyte est logé dans une logette appelée ostéoplaste.', vraie: true, justification: 'Emmuré dans la matrice minéralisée qu’il a lui-même contribué à former en tant qu’ostéoblaste, il communique avec ses voisins par de fins canalicules.' },
        { lettre: 'D', texte: 'L’ostéoblaste devient un ostéocyte une fois emmuré dans la matrice minéralisée.', vraie: true, justification: 'Exact, c’est le devenir normal de l’ostéoblaste actif.' },
        { lettre: 'E', texte: 'L’os spongieux se trouve principalement dans la diaphyse.', vraie: false, justification: 'Faux : l’os spongieux se trouve dans les épiphyses des os longs et à l’intérieur des os courts et plats.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-osteologie-generale-qcm-04',
      enonce: 'Concernant l’ossification, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ossification endochondrale passe par un modèle cartilagineux.', vraie: true, justification: 'Ce modèle cartilagineux initial est progressivement remplacé par du tissu osseux, un mécanisme propre aux os longs et courts.' },
        { lettre: 'B', texte: 'Les os de la voûte crânienne s’ossifient selon un mode endochondral.', vraie: false, justification: 'Faux : ils s’ossifient selon un mode intramembraneux, sans étape cartilagineuse.' },
        { lettre: 'C', texte: 'Le cartilage de croissance se situe entre la métaphyse et l’épiphyse.', vraie: true, justification: 'Cette localisation lui permet de proliférer puis de s’ossifier du côté métaphysaire, allongeant progressivement l’os.' },
        { lettre: 'D', texte: 'La fermeture des cartilages de croissance marque la fin de la croissance en longueur.', vraie: true, justification: 'Une fois le cartilage remplacé par une ligne d’ossification, l’os ne peut plus s’allonger, même si le remodelage osseux se poursuit ensuite toute la vie.' },
        { lettre: 'E', texte: 'La clavicule est un os long classique s’ossifiant uniquement par voie endochondrale.', vraie: false, justification: 'Faux : la clavicule présente une ossification en partie intramembraneuse, particularité notable parmi les os longs.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-osteologie-generale-qcm-05',
      enonce: 'Concernant les cellules du tissu osseux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ostéoblaste synthétise la matrice osseuse.', vraie: true, justification: 'Il produit la trame collagénique qui se minéralise ensuite, avant de se transformer en ostéocyte une fois emmuré dans la matrice qu’il a formée.' },
        { lettre: 'B', texte: 'L’ostéoclaste est d’origine hématopoïétique.', vraie: true, justification: 'Exact, il dérive de la lignée monocytaire-macrophagique.' },
        { lettre: 'C', texte: 'L’ostéocyte est la cellule la plus active dans la résorption osseuse.', vraie: false, justification: 'Faux : c’est l’ostéoclaste qui résorbe l’os ; l’ostéocyte entretient la matrice déjà formée.' },
        { lettre: 'D', texte: 'Le remodelage osseux cesse à la fin de la croissance.', vraie: false, justification: 'Faux : le remodelage osseux se poursuit toute la vie.' },
        { lettre: 'E', texte: 'Les cellules ostéoprogénitrices du périoste peuvent se différencier en ostéoblastes.', vraie: true, justification: 'Exact, c’est le mécanisme à l’origine du cal périosté après fracture.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'anat-osteologie-generale-qcm-06',
      enonce: 'Concernant la vascularisation osseuse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’artère nourricière principale pénètre l’os par le foramen nourricier.', vraie: true, justification: 'Cet orifice diaphysaire constant livre passage à l’artère qui assure l’essentiel de la vascularisation du canal médullaire.' },
        { lettre: 'B', texte: 'Elle se divise en une branche ascendante et une branche descendante dans le canal médullaire.', vraie: true, justification: 'Cette double branche permet à l’artère nourricière de vasculariser la totalité de la diaphyse, de part et d’autre de son point de pénétration.' },
        { lettre: 'C', texte: 'Le réseau périosté vascularise la partie superficielle de l’os compact via les canaux de Volkmann.', vraie: true, justification: 'Ces canaux transversaux relient les vaisseaux du périoste aux canaux de Havers, apportant le sang à la corticale externe.' },
        { lettre: 'D', texte: 'Toutes les épiphyses bénéficient d’une vascularisation richement suppléée, sans risque de nécrose.', vraie: false, justification: 'Faux : certaines épiphyses, comme la tête fémorale, dépendent d’un pédicule peu suppléé et sont exposées à un risque de nécrose avasculaire.' },
        { lettre: 'E', texte: 'Les artères métaphysaires participent à la vascularisation des extrémités de l’os.', vraie: true, justification: 'Issues du réseau péri-articulaire, elles complètent l’artère nourricière principale pour irriguer les régions métaphysaires et épiphysaires.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
  ],
};
