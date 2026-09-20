import type { Fiche } from '../../types';

export const ficheEpauleBras: Fiche = {
  id: 'anat-epaule-bras',
  ue: 'anat',
  titre: 'Membre supérieur : ceinture scapulaire et bras',
  sousTitre: 'Clavicule, scapula, humérus, articulation scapulohumérale, coiffe des rotateurs, plexus brachial',
  chapitre: 'Membres',
  ordre: 9,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'clavicule',
    'scapula',
    'humérus',
    'articulation scapulohumérale',
    'coiffe des rotateurs',
    'plexus brachial',
    'muscle deltoïde',
    'muscle biceps brachial',
  ],
  objectifs: [
    "Décrire les os de la ceinture scapulaire et leurs principaux repères.",
    "Décrire les articulations sternoclaviculaire, acromioclaviculaire et scapulohumérale.",
    "Identifier les muscles de la coiffe des rotateurs et leur action.",
    "Décrire les muscles du bras et leurs actions principales.",
    "Décrire l’organisation générale du plexus brachial.",
  ],
  sections: [
    {
      id: 'os-ceinture-scapulaire',
      titre: 'Les os de la ceinture scapulaire et l’humérus',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La ceinture scapulaire relie le membre supérieur au tronc par l’intermédiaire de deux os, la clavicule et la scapula, qui n’ont de contact osseux direct avec le squelette axial qu’au niveau du sternum, par l’articulation sternoclaviculaire.",
        },
        {
          type: 'tableau',
          titre: 'Principaux repères osseux',
          colonnes: ['Os', 'Description', 'Repères principaux'],
          lignes: [
            ['Clavicule', 'Os long en forme de S italique, sous-cutané sur toute sa longueur', 'Extrémité sternale (médiale), extrémité acromiale (latérale)'],
            ['Scapula', 'Os plat triangulaire appliqué contre la face postérieure du thorax', 'Épine, acromion, processus coracoïde, cavité glénoïdale, fosses supra- et infra-épineuse'],
            ['Humérus', 'Os long du bras', 'Tête humérale, tubercules majeur et mineur, sillon intertuberculaire, col chirurgical'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Col anatomique et col chirurgical de l’humérus',
          texte:
            "Le col anatomique sépare la tête humérale du reste de l’os, juste sous le cartilage articulaire. Le col chirurgical, plus distal, au niveau des tubercules, est le siège le plus fréquent des fractures de l’extrémité supérieure de l’humérus, du fait de sa fragilité relative et de la transition brutale entre os spongieux épiphysaire et os compact diaphysaire.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Fracture de la clavicule',
          texte:
            "La clavicule, sous-cutanée et directement soumise aux contraintes transmises depuis le membre supérieur, est l’un des os les plus fréquemment fracturés du squelette, classiquement dans son tiers moyen, lors d’une chute sur le moignon de l’épaule ou sur la main.",
        },
      ],
    },
    {
      id: 'articulations-ceinture',
      titre: 'Les articulations de la ceinture scapulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Trois articulations synoviales et une articulation dite « physiologique » (scapulothoracique, sans surfaces cartilagineuses en regard) coopèrent pour donner à l’épaule sa très grande amplitude de mouvement globale.",
        },
        {
          type: 'tableau',
          titre: 'Les articulations de l’épaule',
          colonnes: ['Articulation', 'Type', 'Particularité'],
          lignes: [
            ['Sternoclaviculaire', 'Synoviale en selle, avec disque articulaire intra-articulaire', 'Seul point de contact osseux direct entre le membre supérieur et le squelette axial'],
            ['Acromioclaviculaire', 'Synoviale plane', 'Renforcée par les ligaments acromioclaviculaire et coracoclaviculaire'],
            ['Scapulohumérale', 'Synoviale sphéroïde (énarthrose)', 'Cavité glénoïdale peu profonde, approfondie par le labrum glénoïdal ; grande mobilité, stabilité surtout musculaire'],
            ['Scapulothoracique', 'Non synoviale, glissement entre la scapula et le gril costal', 'Mobilité assurée par les muscles fixateurs de la scapula (trapèze, dentelé antérieur, rhomboïdes)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Rythme scapulohumeral',
          texte:
            "Lors de l’élévation complète du bras, le mouvement résulte d’une combinaison coordonnée entre la rotation de la scapula sur le thorax et le mouvement propre de l’articulation scapulohumérale, généralement décrite selon un rapport proche de deux degrés de mouvement scapulohuméral pour un degré de rotation scapulaire.",
        },
      ],
    },
    {
      id: 'coiffe-rotateurs',
      titre: 'La coiffe des rotateurs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La coiffe des rotateurs regroupe quatre muscles dont les tendons s’unissent en un manchon fibreux autour de la tête humérale, assurant la stabilisation active de l’articulation scapulohumérale et participant aux mouvements de rotation.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre muscles de la coiffe des rotateurs',
          colonnes: ['Muscle', 'Origine', 'Terminaison', 'Innervation', 'Action'],
          lignes: [
            [
              'Supra-épineux',
              'Fosse supra-épineuse de la scapula',
              'Tubercule majeur de l’humérus (facette supérieure)',
              'Nerf suprascapulaire',
              'Initie et assiste l’abduction du bras, stabilise la tête humérale',
            ],
            [
              'Infra-épineux',
              'Fosse infra-épineuse de la scapula',
              'Tubercule majeur de l’humérus (facette moyenne)',
              'Nerf suprascapulaire',
              'Rotation latérale du bras',
            ],
            [
              'Petit rond',
              'Bord latéral de la scapula',
              'Tubercule majeur de l’humérus (facette inférieure)',
              'Nerf axillaire',
              'Rotation latérale du bras',
            ],
            [
              'Subscapulaire',
              'Fosse subscapulaire (face antérieure de la scapula)',
              'Tubercule mineur de l’humérus',
              'Nerfs subscapulaires',
              'Rotation médiale du bras',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Rupture de la coiffe des rotateurs',
          texte:
            "Le tendon du muscle supra-épineux est le plus fréquemment atteint en cas de rupture de la coiffe des rotateurs, notamment en raison d’un passage étroit sous l’arche acromiocoracoïdienne, exposé à un conflit sous-acromial répété.",
        },
      ],
    },
    {
      id: 'muscles-bras',
      titre: 'Les muscles du bras',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le bras est divisé par les septums intermusculaires en une loge antérieure, fléchisseur du coude, et une loge postérieure, extenseur du coude.",
        },
        {
          type: 'tableau',
          titre: 'Muscles du bras',
          colonnes: ['Muscle', 'Origine', 'Terminaison', 'Innervation', 'Action'],
          lignes: [
            [
              'Biceps brachial',
              'Chef long : tubercule supra-glénoïdal de la scapula ; chef court : processus coracoïde',
              'Tubérosité radiale, aponévrose bicipitale',
              'Nerf musculocutané',
              'Flexion du coude, supination puissante de l’avant-bras',
            ],
            [
              'Brachial',
              'Face antérieure de la diaphyse humérale',
              'Tubérosité ulnaire, processus coronoïde',
              'Nerf musculocutané',
              'Flexion pure du coude, quelle que soit la position de l’avant-bras',
            ],
            [
              'Coracobrachial',
              'Processus coracoïde de la scapula',
              'Face médiale de la diaphyse humérale',
              'Nerf musculocutané',
              'Flexion et adduction de l’épaule',
            ],
            [
              'Triceps brachial',
              'Chef long : tubercule infra-glénoïdal ; chefs latéral et médial : face postérieure de l’humérus',
              'Olécrâne de l’ulna',
              'Nerf radial',
              'Extension du coude ; le chef long participe à l’extension de l’épaule',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le muscle brachial, fléchisseur pur',
          texte:
            "Contrairement au biceps brachial, dont l’efficacité en flexion dépend de la position de l’avant-bras, le muscle brachial conserve une action de flexion constante quelle que soit la position en pronation ou en supination, ce qui en fait le fléchisseur le plus puissant du coude en valeur absolue sur l’ensemble des amplitudes.",
        },
      ],
    },
    {
      id: 'plexus-brachial',
      titre: 'Organisation générale du plexus brachial',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le plexus brachial est formé par l’union des rameaux ventraux des nerfs spinaux C5 à T1, qui se réorganisent successivement en troncs, divisions, faisceaux puis branches terminales avant d’atteindre le membre supérieur.",
        },
        {
          type: 'etapes',
          titre: 'Organisation successive du plexus brachial',
          etapes: [
            { titre: 'Racines', detail: 'Rameaux ventraux de C5 à T1, émergeant des foramens intervertébraux cervicaux et du premier thoracique.' },
            { titre: 'Troncs', detail: 'Trois troncs se forment dans le défilé interscalénique : supérieur (C5-C6), moyen (C7), inférieur (C8-T1).' },
            { titre: 'Divisions', detail: 'Chaque tronc se divise en une division antérieure et une division postérieure, en arrière de la clavicule.' },
            { titre: 'Faisceaux', detail: 'Les divisions se regroupent en trois faisceaux, nommés selon leur position par rapport à l’artère axillaire : latéral, médial et postérieur.' },
            { titre: 'Branches terminales', detail: 'Chaque faisceau donne naissance aux nerfs terminaux du membre supérieur : musculocutané et une racine du médian (faisceau latéral), ulnaire et une racine du médian (faisceau médial), radial et axillaire (faisceau postérieur).' },
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la succession',
          texte:
            "« Racines, Troncs, Divisions, Faisceaux, Branches », soit R-T-D-F-B, résume l’organisation proximo-distale du plexus brachial, de la moelle spinale jusqu’aux nerfs terminaux du membre supérieur.",
        },
      ],
    },
  ],
  pointsCles: [
    "La clavicule et la scapula forment la ceinture scapulaire, reliée au squelette axial par la seule articulation sternoclaviculaire.",
    "L’articulation scapulohumérale est une énarthrose peu congruente, stabilisée surtout par les muscles de la coiffe des rotateurs.",
    "La coiffe des rotateurs comprend le supra-épineux, l’infra-épineux, le petit rond et le subscapulaire.",
    "Le tendon du supra-épineux est le plus fréquemment lésé en cas de rupture de la coiffe.",
    "Le bras comprend une loge antérieure fléchisseuse (biceps brachial, brachial, coracobrachial) et une loge postérieure extenseuse (triceps brachial).",
    "Le muscle brachial est un fléchisseur pur du coude, indépendant de la position de l’avant-bras.",
    "Le plexus brachial s’organise successivement en racines, troncs, divisions, faisceaux et branches terminales.",
  ],
  erreursFrequentes: [
    "Oublier que le subscapulaire est le seul muscle de la coiffe des rotateurs à réaliser une rotation médiale, les trois autres réalisant une rotation latérale ou une abduction.",
    "Confondre col anatomique et col chirurgical de l’humérus, ce dernier étant le siège habituel des fractures.",
    "Croire que la stabilité de l’épaule dépend surtout de la congruence osseuse, alors qu’elle dépend surtout des muscles de la coiffe.",
    "Inverser l’ordre du plexus brachial en plaçant les divisions après les faisceaux.",
    "Attribuer au biceps brachial une action de flexion du coude indépendante de la position de l’avant-bras, alors que son efficacité varie avec la pronosupination, contrairement au muscle brachial.",
  ],
  mnemotechniques: [
    {
      moyen: 'SITS pour la coiffe des rotateurs',
      explication:
        'Supraspinatus, Infraspinatus, Teres minor, Subscapularis (noms anglais) : supra-épineux, infra-épineux, petit rond, subscapulaire.',
    },
    {
      moyen: 'R-T-D-F-B pour le plexus brachial',
      explication:
        'Racines, Troncs, Divisions, Faisceaux, Branches terminales : l’ordre proximo-distal de réorganisation du plexus.',
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
      id: 'anat-epaule-bras-fc-01',
      recto: 'Quelle est la seule articulation reliant directement le membre supérieur au squelette axial ?',
      verso: 'L’articulation sternoclaviculaire.',
      type: 'definition',
      tags: ['ceinture scapulaire'],
    },
    {
      id: 'anat-epaule-bras-fc-02',
      recto: 'Quel est le siège habituel des fractures de l’extrémité supérieure de l’humérus ?',
      verso: 'Le col chirurgical.',
      type: 'clinique',
      tags: ['humérus', 'fracture'],
    },
    {
      id: 'anat-epaule-bras-fc-03',
      recto: 'Citer les quatre muscles de la coiffe des rotateurs.',
      verso: 'Supra-épineux, infra-épineux, petit rond, subscapulaire.',
      type: 'classification',
      tags: ['coiffe des rotateurs'],
    },
    {
      id: 'anat-epaule-bras-fc-04',
      recto: 'Quel muscle de la coiffe des rotateurs réalise une rotation médiale du bras ?',
      verso: 'Le subscapulaire, seul muscle de la coiffe à réaliser ce mouvement.',
      type: 'mecanisme',
      tags: ['coiffe des rotateurs'],
    },
    {
      id: 'anat-epaule-bras-fc-05',
      recto: 'Quel tendon de la coiffe est le plus fréquemment rompu ?',
      verso: 'Le tendon du muscle supra-épineux, en raison de son passage sous l’arche acromiocoracoïdienne.',
      type: 'clinique',
      tags: ['coiffe des rotateurs'],
    },
    {
      id: 'anat-epaule-bras-fc-06',
      recto: 'Quel muscle du bras est fléchisseur pur du coude, indépendamment de la pronosupination ?',
      verso: 'Le muscle brachial.',
      type: 'mecanisme',
      tags: ['muscles du bras'],
    },
    {
      id: 'anat-epaule-bras-fc-07',
      recto: 'Quelle est la double action du muscle biceps brachial ?',
      verso: 'La flexion du coude et la supination puissante de l’avant-bras.',
      type: 'mecanisme',
      tags: ['biceps brachial'],
    },
    {
      id: 'anat-epaule-bras-fc-08',
      recto: 'Sur quel os se termine le triceps brachial ?',
      verso: 'Sur l’olécrâne de l’ulna.',
      type: 'definition',
      tags: ['triceps brachial'],
    },
    {
      id: 'anat-epaule-bras-fc-09',
      recto: 'Quelles racines nerveuses forment le plexus brachial ?',
      verso: 'Les rameaux ventraux de C5 à T1.',
      type: 'definition',
      tags: ['plexus brachial'],
    },
    {
      id: 'anat-epaule-bras-fc-10',
      recto: 'Citer les cinq étapes d’organisation du plexus brachial.',
      verso: 'Racines, troncs, divisions, faisceaux, branches terminales.',
      type: 'classification',
      tags: ['plexus brachial'],
    },
    {
      id: 'anat-epaule-bras-fc-11',
      recto: 'Comment sont nommés les trois faisceaux du plexus brachial ?',
      verso: 'Latéral, médial et postérieur, selon leur position par rapport à l’artère axillaire.',
      type: 'classification',
      tags: ['plexus brachial'],
    },
    {
      id: 'anat-epaule-bras-fc-12',
      recto: 'Quel os du membre supérieur est le plus fréquemment fracturé, classiquement dans son tiers moyen ?',
      verso: 'La clavicule.',
      type: 'clinique',
      tags: ['clavicule', 'fracture'],
    },
  ],
  qcm: [
    {
      id: 'anat-epaule-bras-qcm-01',
      enonce: 'Concernant les os de la ceinture scapulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La clavicule est sous-cutanée sur toute sa longueur.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'La scapula porte la cavité glénoïdale.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Le col chirurgical de l’humérus sépare la tête humérale du reste de l’os, juste sous le cartilage articulaire.', vraie: false, justification: 'Faux : c’est le col anatomique qui répond à cette description ; le col chirurgical est plus distal, au niveau des tubercules.' },
        { lettre: 'D', texte: 'Le processus coracoïde appartient à la scapula.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'La clavicule n’est fracturée qu’exceptionnellement.', vraie: false, justification: 'Faux : c’est l’un des os les plus fréquemment fracturés du squelette.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-epaule-bras-qcm-02',
      enonce: 'Concernant les articulations de l’épaule, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’articulation scapulohumérale est une énarthrose.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'L’articulation sternoclaviculaire comporte un disque articulaire intra-articulaire.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'L’articulation scapulothoracique est une véritable diarthrose synoviale.', vraie: false, justification: 'Faux : c’est un plan de glissement sans surfaces cartilagineuses en regard, non une diarthrose synoviale vraie.' },
        { lettre: 'D', texte: 'Le labrum glénoïdal augmente la congruence de l’articulation scapulohumérale.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'L’articulation acromioclaviculaire est une énarthrose.', vraie: false, justification: 'Faux : c’est une articulation synoviale plane.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-epaule-bras-qcm-03',
      enonce: 'Concernant la coiffe des rotateurs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le supra-épineux est innervé par le nerf suprascapulaire.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le petit rond réalise une rotation médiale du bras.', vraie: false, justification: 'Faux : le petit rond réalise une rotation latérale, comme l’infra-épineux.' },
        { lettre: 'C', texte: 'Le subscapulaire se termine sur le tubercule mineur de l’humérus.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le petit rond est innervé par le nerf axillaire.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'L’infra-épineux naît de la fosse subscapulaire.', vraie: false, justification: 'Faux : il naît de la fosse infra-épineuse ; la fosse subscapulaire donne naissance au subscapulaire.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-epaule-bras-qcm-04',
      enonce: 'Concernant les muscles du bras, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le biceps brachial possède un chef long et un chef court.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le muscle brachial est innervé par le nerf radial.', vraie: false, justification: 'Faux : il est innervé par le nerf musculocutané.' },
        { lettre: 'C', texte: 'Le triceps brachial se termine sur l’olécrâne de l’ulna.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le chef long du triceps brachial naît du tubercule infra-glénoïdal de la scapula.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Le coracobrachial appartient à la loge postérieure du bras.', vraie: false, justification: 'Faux : il appartient à la loge antérieure, fléchisseuse.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-epaule-bras-qcm-05',
      enonce: 'Concernant le plexus brachial, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est formé par les rameaux ventraux de C5 à T1.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Les faisceaux précèdent les divisions dans l’organisation proximo-distale.', vraie: false, justification: 'Faux : les divisions précèdent les faisceaux.' },
        { lettre: 'C', texte: 'Le faisceau postérieur donne naissance au nerf radial.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le faisceau latéral participe à la formation du nerf médian.', vraie: true, justification: 'Exact, avec une racine issue du faisceau médial.' },
        { lettre: 'E', texte: 'Le nerf musculocutané naît du faisceau médial.', vraie: false, justification: 'Faux : le nerf musculocutané naît du faisceau latéral.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-epaule-bras-qcm-06',
      enonce: 'Concernant la stabilité et la mobilité de l’épaule, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La cavité glénoïdale est profonde et très congruente avec la tête humérale.', vraie: false, justification: 'Faux : elle est peu profonde, ce qui explique la grande mobilité mais la stabilité osseuse limitée de l’épaule.' },
        { lettre: 'B', texte: 'Les muscles de la coiffe des rotateurs jouent un rôle majeur de stabilisation active.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Le rythme scapulohuméral décrit la coordination entre le mouvement de la scapula et celui de l’articulation scapulohumérale lors de l’élévation du bras.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le muscle dentelé antérieur participe à la fixation de la scapula sur le thorax.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'L’épaule est l’articulation la moins luxable du corps humain.', vraie: false, justification: 'Faux : c’est au contraire l’articulation la plus fréquemment luxée, en raison de sa faible congruence osseuse.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
  ],
};
