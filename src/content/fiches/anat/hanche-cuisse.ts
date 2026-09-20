import type { Fiche } from '../../types';

export const ficheHancheCuisse: Fiche = {
  id: 'anat-hanche-cuisse',
  ue: 'anat',
  titre: 'Membre inférieur : hanche et cuisse',
  sousTitre: 'Os coxal, fémur, articulation coxofémorale, loges de la cuisse, triangle fémoral, nerfs fémoral et sciatique',
  chapitre: 'Membres',
  ordre: 11,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'os coxal',
    'fémur',
    'articulation coxofémorale',
    'triangle fémoral',
    'nerf fémoral',
    'nerf sciatique',
    'muscle quadriceps fémoral',
    'muscles ischiojambiers',
  ],
  objectifs: [
    "Décrire les principaux repères osseux du fémur.",
    "Décrire l’articulation coxofémorale et les facteurs de sa stabilité.",
    "Différencier les trois loges musculaires de la cuisse selon leur action et leur innervation.",
    "Décrire les limites et le contenu du triangle fémoral.",
    "Décrire les trajets et territoires des nerfs fémoral et sciatique.",
  ],
  sections: [
    {
      id: 'femur',
      titre: 'Le fémur',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le fémur est l’os long le plus volumineux du squelette humain, unissant la hanche au genou. Son extrémité proximale présente une angulation caractéristique qui optimise la transmission des contraintes du bassin vers le genou.",
        },
        {
          type: 'liste',
          items: [
            "La tête fémorale, sphérique, s’oriente en haut, en dedans et légèrement en avant, et s’articule avec l’acétabulum de l’os coxal.",
            "Le col fémoral relie la tête au massif trochantérien, formant avec la diaphyse un angle cervicodiaphysaire d’environ 125 degrés chez l’adulte.",
            "Le grand trochanter et le petit trochanter sont les deux saillies osseuses qui donnent insertion à de nombreux muscles pelvitrochantériens et fessiers.",
            "L’extrémité distale présente les condyles fémoraux médial et latéral, séparés en arrière par la fosse intercondylaire, qui s’articulent avec le tibia et la patella.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Fracture du col du fémur',
          texte:
            "La fracture du col fémoral est particulièrement fréquente chez le sujet âgé ostéoporotique. Elle expose à un risque élevé de nécrose avasculaire de la tête fémorale, dont la vascularisation dépend en grande partie des artères circonflexes fémorales, cheminant le long du col et facilement lésées par le déplacement du foyer de fracture.",
        },
      ],
    },
    {
      id: 'articulation-coxofemorale',
      titre: 'L’articulation coxofémorale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’articulation coxofémorale est une énarthrose qui associe la tête fémorale à l’acétabulum de l’os coxal, remarquable par sa grande congruence osseuse et sa stabilité, supérieures à celles de l’articulation scapulohumérale.",
        },
        {
          type: 'liste',
          items: [
            "Le labrum acétabulaire, fibrocartilagineux, prolonge le rebord de l’acétabulum et augmente sa profondeur et sa surface de contact avec la tête fémorale.",
            "La capsule articulaire, épaisse et résistante, est renforcée par trois ligaments principaux : ligament iliofémoral (le plus puissant, en avant), ligament pubofémoral et ligament ischiofémoral.",
            "Le ligament de la tête fémorale, intra-articulaire, relie la tête fémorale au fond de l’acétabulum et véhicule une petite artère accessoire, inconstante et de calibre variable selon les individus.",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Comparer hanche et épaule',
          texte:
            "La hanche et l’épaule sont toutes deux des énarthroses à trois degrés de liberté, mais la hanche privilégie la stabilité (acétabulum profond, ligaments puissants) au détriment d’une mobilité légèrement moindre, tandis que l’épaule privilégie la mobilité au détriment de la stabilité osseuse passive.",
        },
      ],
    },
    {
      id: 'loges-cuisse',
      titre: 'Les loges musculaires de la cuisse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La cuisse est divisée par des septums intermusculaires en trois loges, chacune caractérisée par une fonction, une innervation et une origine embryologique communes.",
        },
        {
          type: 'tableau',
          titre: 'Muscles principaux de la loge antérieure',
          colonnes: ['Muscle', 'Origine', 'Terminaison', 'Innervation', 'Action'],
          lignes: [
            [
              'Quadriceps fémoral (droit fémoral, vaste latéral, vaste médial, vaste intermédiaire)',
              'Droit fémoral : épine iliaque antéro-inférieure ; vastes : diaphyse fémorale',
              'Tubérosité tibiale, par l’intermédiaire du tendon patellaire',
              'Nerf fémoral',
              'Extension du genou ; le droit fémoral participe aussi à la flexion de hanche',
            ],
            [
              'Sartorius',
              'Épine iliaque antéro-supérieure',
              'Face médiale du tibia (patte-d’oie)',
              'Nerf fémoral',
              'Flexion, abduction, rotation latérale de hanche ; flexion du genou',
            ],
            [
              'Iliopsoas (psoas majeur et iliaque)',
              'Psoas : corps et processus transverses des vertèbres lombaires ; iliaque : fosse iliaque',
              'Petit trochanter du fémur',
              'Nerf fémoral (iliaque) et rameaux directs du plexus lombaire (psoas)',
              'Principal fléchisseur de la hanche',
            ],
          ],
        },
        {
          type: 'tableau',
          titre: 'Muscles principaux des loges médiale et postérieure',
          colonnes: ['Muscle', 'Loge', 'Action', 'Innervation'],
          lignes: [
            ['Long adducteur, court adducteur, grand adducteur, gracile, pectiné', 'Médiale', 'Adduction de hanche', 'Nerf obturateur (grand adducteur : double innervation, obturateur et tibial pour son faisceau ischiocondylien)'],
            ['Biceps fémoral', 'Postérieure', 'Extension de hanche, flexion du genou, rotation latérale de jambe fléchie', 'Nerf tibial (chef long) et nerf fibulaire commun (chef court)'],
            ['Semi-tendineux', 'Postérieure', 'Extension de hanche, flexion du genou, rotation médiale de jambe fléchie', 'Nerf tibial'],
            ['Semi-membraneux', 'Postérieure', 'Extension de hanche, flexion du genou, rotation médiale de jambe fléchie', 'Nerf tibial'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Les ischiojambiers, muscles biarticulaires',
          texte:
            "Le biceps fémoral, le semi-tendineux et le semi-membraneux, regroupés sous le nom d’ischiojambiers, naissent tous de la tubérosité ischiatique (à l’exception du chef court du biceps fémoral) et franchissent à la fois la hanche et le genou, ce qui explique leur rôle combiné d’extenseurs de hanche et de fléchisseurs de genou.",
        },
      ],
    },
    {
      id: 'triangle-femoral',
      titre: 'Le triangle fémoral',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le triangle fémoral (ou triangle de Scarpa) est une région anatomique de la face antérieure et proximale de la cuisse, importante en raison des structures vasculonerveuses qu’elle contient, accessibles à la palpation et à l’abord chirurgical.",
        },
        {
          type: 'tableau',
          titre: 'Limites du triangle fémoral',
          colonnes: ['Limite', 'Structure'],
          lignes: [
            ['Supérieure (base)', 'Ligament inguinal'],
            ['Latérale', 'Bord médial du muscle sartorius'],
            ['Médiale', 'Bord médial du muscle long adducteur'],
            ['Plancher', 'Muscles iliopsoas et pectiné'],
          ],
        },
        {
          type: 'definition',
          terme: 'Contenu du triangle fémoral',
          definition:
            "De latéral en médial, le triangle fémoral contient le nerf fémoral, l’artère fémorale et la veine fémorale, disposition classiquement résumée par l’ordre NAV (nerf, artère, veine) d’avant en arrière et de latéral en médial au niveau de l’arcade inguinale.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Abord vasculaire fémoral',
          texte:
            "La position superficielle et prévisible de l’artère fémorale dans le triangle fémoral, immédiatement médiale au nerf fémoral et latérale à la veine fémorale, en fait un site de ponction artérielle privilégié pour le cathétérisme cardiaque ou vasculaire.",
        },
      ],
    },
    {
      id: 'nerfs-membre-inferieur',
      titre: 'Les nerfs fémoral et sciatique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les nerfs fémoral et sciatique, issus respectivement du plexus lombaire et du plexus sacral, assurent l’essentiel de l’innervation motrice et sensitive de la hanche, de la cuisse et, pour le sciatique, de la jambe et du pied.",
        },
        {
          type: 'tableau',
          titre: 'Nerfs fémoral et sciatique',
          colonnes: ['Nerf', 'Origine', 'Territoire moteur principal', 'Territoire sensitif principal'],
          lignes: [
            ['Nerf fémoral', 'Plexus lombaire (L2-L4)', 'Quadriceps fémoral, sartorius, pectiné', 'Face antérieure de la cuisse, face médiale de la jambe via le nerf saphène'],
            ['Nerf sciatique', 'Plexus sacral (L4-S3)', 'Ischiojambiers, puis, après sa division, l’ensemble des muscles de la jambe et du pied', 'Face postérieure de la cuisse, puis territoires tibial et fibulaire de la jambe et du pied'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Division du nerf sciatique',
          texte:
            "Le nerf sciatique, le plus volumineux nerf du corps humain, descend dans la loge postérieure de la cuisse puis se divise classiquement à la partie supérieure de la fosse poplitée en deux branches terminales, le nerf tibial et le nerf fibulaire commun, qui poursuivent respectivement leur trajet dans les loges postérieure et latérale de la jambe.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Sciatalgie',
          texte:
            "Une compression du nerf sciatique ou de ses racines, le plus souvent par une hernie discale lombaire (L4-L5 ou L5-S1), entraîne une douleur irradiant de la région fessière vers la face postérieure de la cuisse puis la jambe, appelée sciatalgie, dont le trajet précis oriente vers le niveau radiculaire atteint.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’angle cervicodiaphysaire du fémur, entre le col et la diaphyse, vaut environ 125 degrés chez l’adulte.",
    "L’articulation coxofémorale est une énarthrose très congruente, renforcée par les ligaments iliofémoral, pubofémoral et ischiofémoral.",
    "La cuisse comprend trois loges : antérieure (extension du genou, nerf fémoral), médiale (adduction, nerf obturateur), postérieure (ischiojambiers, nerf tibial et fibulaire commun).",
    "Le triangle fémoral contient, de latéral en médial, le nerf fémoral, l’artère fémorale et la veine fémorale (ordre NAV).",
    "Le nerf fémoral innerve le quadriceps fémoral ; sa lésion abolit l’extension active du genou.",
    "Le nerf sciatique se divise en nerf tibial et nerf fibulaire commun à la partie supérieure de la fosse poplitée.",
    "La fracture du col fémoral expose à la nécrose avasculaire de la tête fémorale chez le sujet âgé.",
  ],
  erreursFrequentes: [
    "Inverser l’ordre des structures du triangle fémoral : c’est le nerf qui est le plus latéral, la veine la plus médiale (NAV, nerf-artère-veine).",
    "Croire que tous les ischiojambiers naissent de la tubérosité ischiatique : le chef court du biceps fémoral naît en réalité de la diaphyse fémorale.",
    "Attribuer l’adduction de hanche au nerf fémoral, alors qu’elle relève du nerf obturateur.",
    "Oublier que le droit fémoral, chef du quadriceps, est biarticulaire et participe aussi à la flexion de hanche.",
    "Confondre le site de division du nerf sciatique, à la fosse poplitée, avec un site plus proximal.",
  ],
  mnemotechniques: [
    {
      moyen: 'NAV pour le triangle fémoral',
      explication:
        'De latéral en médial sous l’arcade inguinale : Nerf, Artère, Veine fémoraux.',
    },
    {
      moyen: 'Trois muscles, trois S, pour les ischiojambiers',
      explication:
        'Semi-tendineux et Semi-membraneux se ressemblent par le nom et l’action (rotation médiale), tandis que le biceps fémoral, seul, réalise la rotation latérale de la jambe fléchie.',
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
      id: 'anat-hanche-cuisse-fc-01',
      recto: 'Quel est l’angle cervicodiaphysaire moyen du fémur chez l’adulte ?',
      verso: 'Environ 125 degrés.',
      type: 'chiffre',
      tags: ['fémur'],
    },
    {
      id: 'anat-hanche-cuisse-fc-02',
      recto: 'Quel ligament de la hanche est le plus puissant ?',
      verso: 'Le ligament iliofémoral, situé en avant de l’articulation.',
      type: 'definition',
      tags: ['coxofémorale'],
    },
    {
      id: 'anat-hanche-cuisse-fc-03',
      recto: 'Quel élément fibrocartilagineux augmente la profondeur de l’acétabulum ?',
      verso: 'Le labrum acétabulaire.',
      type: 'definition',
      tags: ['coxofémorale'],
    },
    {
      id: 'anat-hanche-cuisse-fc-04',
      recto: 'Quel nerf innerve le quadriceps fémoral ?',
      verso: 'Le nerf fémoral.',
      type: 'mecanisme',
      tags: ['nerf fémoral'],
    },
    {
      id: 'anat-hanche-cuisse-fc-05',
      recto: 'Quel nerf innerve les muscles adducteurs de la loge médiale de la cuisse ?',
      verso: 'Le nerf obturateur.',
      type: 'mecanisme',
      tags: ['loge médiale'],
    },
    {
      id: 'anat-hanche-cuisse-fc-06',
      recto: 'Citer les trois muscles ischiojambiers.',
      verso: 'Le biceps fémoral, le semi-tendineux et le semi-membraneux.',
      type: 'classification',
      tags: ['ischiojambiers'],
    },
    {
      id: 'anat-hanche-cuisse-fc-07',
      recto: 'Quelle est l’action commune des ischiojambiers ?',
      verso: 'Extension de la hanche et flexion du genou, car ce sont des muscles biarticulaires.',
      type: 'mecanisme',
      tags: ['ischiojambiers'],
    },
    {
      id: 'anat-hanche-cuisse-fc-08',
      recto: 'Quelles sont les limites du triangle fémoral ?',
      verso: 'Le ligament inguinal en haut, le bord médial du sartorius latéralement, le bord médial du long adducteur médialement.',
      type: 'definition',
      tags: ['triangle fémoral'],
    },
    {
      id: 'anat-hanche-cuisse-fc-09',
      recto: 'Dans quel ordre, de latéral en médial, se disposent les structures du triangle fémoral ?',
      verso: 'Nerf fémoral, artère fémorale, veine fémorale (ordre NAV).',
      type: 'definition',
      tags: ['triangle fémoral'],
    },
    {
      id: 'anat-hanche-cuisse-fc-10',
      recto: 'En quelles deux branches se divise le nerf sciatique et où ?',
      verso: 'En nerf tibial et nerf fibulaire commun, à la partie supérieure de la fosse poplitée.',
      type: 'mecanisme',
      tags: ['nerf sciatique'],
    },
    {
      id: 'anat-hanche-cuisse-fc-11',
      recto: 'Pourquoi la fracture du col fémoral expose-t-elle à la nécrose de la tête fémorale ?',
      verso: 'Parce que la vascularisation de la tête dépend en grande partie des artères circonflexes fémorales, qui cheminent le long du col et sont facilement lésées lors du déplacement de la fracture.',
      type: 'clinique',
      tags: ['col fémoral'],
    },
    {
      id: 'anat-hanche-cuisse-fc-12',
      recto: 'Quelle racine radiculaire lombaire est le plus souvent en cause dans une hernie discale responsable de sciatalgie ?',
      verso: 'L4-L5 ou L5-S1.',
      type: 'clinique',
      tags: ['sciatalgie'],
    },
  ],
  qcm: [
    {
      id: 'anat-hanche-cuisse-qcm-01',
      enonce: 'Concernant le fémur, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La tête fémorale s’oriente en haut, en dedans et en avant.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'L’angle cervicodiaphysaire moyen est d’environ 90 degrés.', vraie: false, justification: 'Faux : il est d’environ 125 degrés chez l’adulte.' },
        { lettre: 'C', texte: 'Le grand trochanter donne insertion à plusieurs muscles fessiers.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Les condyles fémoraux sont séparés en avant par la fosse intercondylaire.', vraie: false, justification: 'Faux : la fosse intercondylaire est postérieure, non antérieure.' },
        { lettre: 'E', texte: 'Le fémur est le plus volumineux os long du corps humain.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-hanche-cuisse-qcm-02',
      enonce: 'Concernant l’articulation coxofémorale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'C’est une énarthrose.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le labrum acétabulaire est un ligament intra-articulaire.', vraie: false, justification: 'Faux : le labrum est un bourrelet fibrocartilagineux qui prolonge le rebord de l’acétabulum ; le ligament de la tête fémorale, distinct, est intra-articulaire.' },
        { lettre: 'C', texte: 'Le ligament iliofémoral est le plus puissant des ligaments de la hanche.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Cette articulation est moins stable que l’articulation scapulohumérale.', vraie: false, justification: 'Faux : elle est au contraire plus stable, grâce à une meilleure congruence osseuse.' },
        { lettre: 'E', texte: 'Le ligament de la tête fémorale peut véhiculer une petite artère accessoire.', vraie: true, justification: 'Exact, de calibre variable selon les individus.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-hanche-cuisse-qcm-03',
      enonce: 'Concernant les loges musculaires de la cuisse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le quadriceps fémoral appartient à la loge antérieure.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le nerf obturateur innerve le quadriceps fémoral.', vraie: false, justification: 'Faux : le quadriceps est innervé par le nerf fémoral.' },
        { lettre: 'C', texte: 'Le sartorius participe à la flexion et à l’abduction de hanche.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Les muscles de la loge médiale sont principalement des adducteurs de hanche.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Le biceps fémoral appartient à la loge médiale de la cuisse.', vraie: false, justification: 'Faux : il appartient à la loge postérieure.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-hanche-cuisse-qcm-04',
      enonce: 'Concernant le triangle fémoral, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Sa limite supérieure est le ligament inguinal.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le nerf fémoral est la structure la plus médiale.', vraie: false, justification: 'Faux : c’est la structure la plus latérale des trois ; la veine fémorale est la plus médiale.' },
        { lettre: 'C', texte: 'L’artère fémorale se situe entre le nerf fémoral et la veine fémorale.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le plancher est formé par les muscles iliopsoas et pectiné.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Sa limite médiale est le bord médial du muscle sartorius.', vraie: false, justification: 'Faux : le bord médial du sartorius est la limite latérale ; la limite médiale est le bord médial du long adducteur.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-hanche-cuisse-qcm-05',
      enonce: 'Concernant le nerf sciatique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est issu du plexus lombaire.', vraie: false, justification: 'Faux : il est issu du plexus sacral (racines L4 à S3).' },
        { lettre: 'B', texte: 'C’est le nerf le plus volumineux du corps humain.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Il se divise en nerf tibial et nerf fibulaire commun.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Sa division a lieu classiquement dans le triangle fémoral.', vraie: false, justification: 'Faux : sa division a lieu classiquement à la partie supérieure de la fosse poplitée.' },
        { lettre: 'E', texte: 'Il innerve les muscles ischiojambiers de la loge postérieure de la cuisse.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-hanche-cuisse-qcm-06',
      enonce: 'Concernant le nerf fémoral et son territoire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il naît du plexus lombaire.', vraie: true, justification: 'Exact, des racines L2 à L4.' },
        { lettre: 'B', texte: 'Il innerve le sartorius.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Sa branche sensitive terminale, le nerf saphène, innerve la face médiale de la jambe.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Il innerve les muscles adducteurs de la loge médiale.', vraie: false, justification: 'Faux : ce sont les muscles adducteurs qui sont innervés par le nerf obturateur.' },
        { lettre: 'E', texte: 'Sa lésion abolit l’extension active du genou.', vraie: true, justification: 'Exact, par paralysie du quadriceps fémoral.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
  ],
};
