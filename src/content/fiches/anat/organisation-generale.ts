import type { Fiche } from '../../types';

export const ficheOrganisationGenerale: Fiche = {
  id: 'anat-organisation-generale',
  ue: 'anat',
  titre: 'Organisation générale du corps humain',
  sousTitre: 'Position anatomique de référence, plans, axes, termes de position et de mouvement',
  chapitre: 'Anatomie générale',
  ordre: 1,
  duree: 20,
  difficulte: 1,
  motsCles: [
    'position anatomique',
    'plan sagittal',
    'plan frontal',
    'plan transversal',
    'proximal',
    'distal',
    'flexion',
    'abduction',
    'cavités du corps',
  ],
  objectifs: [
    "Décrire la position anatomique de référence et justifier son usage systématique.",
    "Définir les trois plans de l’espace et les axes de mouvement qui leur sont associés.",
    "Utiliser correctement les termes de position et de direction en anatomie descriptive.",
    "Nommer les principaux mouvements articulaires et les différencier selon le plan dans lequel ils s’effectuent.",
    "Situer les grandes régions et cavités du corps humain et leurs membranes séreuses.",
  ],
  sections: [
    {
      id: 'position-reference',
      titre: 'La position anatomique de référence',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’anatomie descriptive décrit toujours le corps humain dans une posture conventionnelle, la position anatomique de référence, qui sert de point zéro pour tous les termes de position et de mouvement. Sans cette convention, des expressions comme « en avant » ou « en dedans » n’auraient aucun sens univoque.",
        },
        {
          type: 'definition',
          terme: 'Position anatomique de référence',
          definition:
            "Sujet debout, regard porté à l’horizon, membres inférieurs joints, pieds parallèles, membres supérieurs pendant le long du corps, paumes des mains tournées vers l’avant (avant-bras en supination).",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Position anatomique et position clinique de repos ne se confondent pas',
          texte:
            "La position anatomique de référence, paumes vers l’avant, est une convention de description, pas la posture spontanée du sujet debout, dont les paumes regardent plutôt les cuisses. C’est uniquement dans la position de référence que les termes « médial », « latéral », « antérieur » et « postérieur » gardent une signification fixe pour l’avant-bras et la main.",
        },
        {
          type: 'liste',
          items: [
            "Cette convention permet de décrire un rapport anatomique indépendamment de la posture réelle du patient sur la table d’examen.",
            "Elle est indispensable pour définir sans ambiguïté la pronation et la supination de l’avant-bras.",
            "Elle sert de référence commune à l’imagerie médicale, où les coupes sont orientées selon les mêmes plans.",
          ],
        },
      ],
    },
    {
      id: 'plans-espace',
      titre: 'Les plans de l’espace',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Trois plans perpendiculaires entre eux découpent conventionnellement le corps humain. Ils servent de base à la description des coupes anatomiques et des examens d’imagerie en coupes (tomodensitométrie, imagerie par résonance magnétique).",
        },
        {
          type: 'tableau',
          titre: 'Les trois plans de référence',
          colonnes: ['Plan', 'Orientation', 'Particularité', 'Exemple d’usage'],
          lignes: [
            [
              'Plan sagittal',
              'Vertical, orienté d’avant en arrière',
              'Le plan sagittal médian divise le corps en deux moitiés symétriques, droite et gauche',
              'Coupe sagittale d’imagerie rachidienne',
            ],
            [
              'Plan frontal (ou coronal)',
              'Vertical, orienté de droite à gauche',
              'Sépare une partie antérieure et une partie postérieure',
              'Coupe frontale d’imagerie cérébrale',
            ],
            [
              'Plan transversal (ou axial, ou horizontal)',
              'Horizontal, perpendiculaire à l’axe longitudinal du corps',
              'Sépare une partie supérieure et une partie inférieure',
              'Coupe axiale de tomodensitométrie abdominale',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Plan sagittal médian et plans parasagittaux',
          texte:
            "Seul le plan qui passe exactement par la ligne médiane du corps mérite le nom de plan sagittal médian : il donne deux hémicorps symétriques. Tout autre plan sagittal, décalé à droite ou à gauche, est dit parasagittal et donne deux parties de tailles inégales.",
        },
        {
          type: 'liste',
          items: [
            "Un plan sagittal quelconque est parallèle au plan sagittal médian.",
            "Un plan frontal est perpendiculaire au plan sagittal médian et au plan transversal.",
            "L’intersection des trois plans, au centre du corps, définit un point origine utile pour situer un axe.",
          ],
        },
      ],
    },
    {
      id: 'axes-mouvement',
      titre: 'Les axes du corps',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "À chaque couple de plans correspond un axe, perpendiculaire aux deux plans qui le contiennent. Les mouvements articulaires s’effectuent dans un plan donné, autour de l’axe qui lui est perpendiculaire.",
        },
        {
          type: 'tableau',
          titre: 'Correspondance entre axes et plans de mouvement',
          colonnes: ['Axe', 'Orientation', 'Plan de mouvement associé', 'Mouvements types'],
          lignes: [
            [
              'Axe transversal (ou frontal)',
              'De droite à gauche',
              'Plan sagittal',
              'Flexion, extension',
            ],
            [
              'Axe sagittal (ou antéropostérieur)',
              'D’avant en arrière',
              'Plan frontal',
              'Abduction, adduction',
            ],
            [
              'Axe longitudinal (ou vertical)',
              'De haut en bas',
              'Plan transversal',
              'Rotation médiale, rotation latérale',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir l’association axe-mouvement',
          texte:
            "Un mouvement se déroule toujours dans le plan qui contient sa trajectoire, autour de l’axe perpendiculaire à ce plan. La flexion-extension se voit de profil, donc dans le plan sagittal, autour de l’axe transversal ; l’abduction-adduction se voit de face, donc dans le plan frontal, autour de l’axe sagittal.",
        },
      ],
    },
    {
      id: 'termes-position',
      titre: 'Les termes de position',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les termes de position décrivent la localisation relative d’une structure par rapport à une autre, toujours en référence à la position anatomique. Ils sont utilisés systématiquement à la place de repères ambigus comme « en haut » ou « à côté ».",
        },
        {
          type: 'tableau',
          titre: 'Principaux couples de termes de position',
          colonnes: ['Terme', 'Signification', 'Terme opposé'],
          lignes: [
            ['Supérieur (ou crânial)', 'Plus proche de la tête', 'Inférieur (ou caudal)'],
            ['Antérieur (ou ventral)', 'Plus proche de la face avant du corps', 'Postérieur (ou dorsal)'],
            ['Médial', 'Plus proche du plan sagittal médian', 'Latéral'],
            ['Proximal', 'Plus proche de la racine du membre ou du tronc', 'Distal'],
            ['Superficiel', 'Plus proche de la surface du corps', 'Profond'],
            ['Interne', 'Plus proche du centre d’une cavité ou d’un organe', 'Externe'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Proximal et distal ne s’appliquent qu’aux membres',
          texte:
            "Les termes proximal et distal décrivent une position le long de l’axe d’un membre par rapport à sa racine, et n’ont pas de sens pour le tronc ou la tête. Pour le tronc, on utilise supérieur, inférieur, antérieur, postérieur, médial et latéral.",
        },
        {
          type: 'liste',
          items: [
            "La main est distale par rapport au coude, qui est lui-même distal par rapport à l’épaule.",
            "Le cœur est médiastinal, donc médian par rapport aux deux poumons.",
            "La rate est un organe superficiel de l’hypochondre gauche, palpable seulement lorsqu’elle est augmentée de volume.",
          ],
        },
      ],
    },
    {
      id: 'termes-mouvement',
      titre: 'Les termes de mouvement',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les mouvements articulaires sont décrits par des couples de termes opposés, chacun rattaché à un plan de l’espace. Certaines articulations, comme l’épaule ou la hanche, autorisent l’ensemble de ces mouvements ; d’autres n’en autorisent qu’une partie selon leur type.",
        },
        {
          type: 'tableau',
          titre: 'Principaux mouvements articulaires',
          colonnes: ['Mouvement', 'Définition', 'Plan'],
          lignes: [
            ['Flexion', 'Rapprochement des deux segments articulaires, diminution de l’angle articulaire', 'Sagittal'],
            ['Extension', 'Éloignement des deux segments, augmentation de l’angle articulaire', 'Sagittal'],
            ['Abduction', 'Éloignement du membre par rapport au plan sagittal médian', 'Frontal'],
            ['Adduction', 'Rapprochement du membre du plan sagittal médian', 'Frontal'],
            ['Rotation médiale', 'Rotation du segment autour de son axe longitudinal, face antérieure vers le plan médian', 'Transversal'],
            ['Rotation latérale', 'Rotation du segment autour de son axe longitudinal, face antérieure à l’opposé du plan médian', 'Transversal'],
            ['Circumduction', 'Combinaison successive de flexion, abduction, extension et adduction, décrivant un cône', 'Combinaison des trois plans'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Mouvements propres à certains segments',
          texte:
            "La pronation et la supination sont des mouvements de rotation propres à l’avant-bras, qui orientent la paume respectivement vers l’arrière ou vers l’avant. À la cheville, on distingue la flexion dorsale (rapprochement du dos du pied de la jambe) et la flexion plantaire ; l’inversion et l’éversion combinent des mouvements dans plusieurs plans au niveau du pied.",
        },
      ],
    },
    {
      id: 'regions-cavites',
      titre: 'Régions et cavités du corps',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le corps humain est classiquement subdivisé en grandes régions, elles-mêmes contenant des cavités closes tapissées de membranes séreuses qui facilitent le glissement des organes qu’elles contiennent.",
        },
        {
          type: 'liste',
          items: [
            "La tête et le cou.",
            "Le tronc, subdivisé en thorax, abdomen, pelvis et rachis.",
            "Les membres supérieurs, rattachés au tronc par la ceinture scapulaire.",
            "Les membres inférieurs, rattachés au tronc par la ceinture pelvienne.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Grandes cavités et membranes séreuses associées',
          colonnes: ['Cavité', 'Membrane séreuse', 'Contenu principal'],
          lignes: [
            ['Cavité thoracique', 'Plèvre (pariétale et viscérale)', 'Poumons ; médiastin entre les deux plèvres'],
            ['Cavité péricardique', 'Péricarde séreux (pariétal et viscéral)', 'Cœur et racine des gros vaisseaux'],
            ['Cavité abdominopelvienne', 'Péritoine (pariétal et viscéral)', 'Organes digestifs, foie, rate, organes pelviens'],
            ['Cavité crânienne', 'Méninges (dure-mère, arachnoïde, pie-mère)', 'Encéphale'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Une organisation en feuillets répétée',
          texte:
            "Chaque grande cavité séreuse répond au même plan général : un feuillet pariétal, appliqué contre la paroi, un feuillet viscéral, appliqué contre l’organe, et un espace virtuel entre les deux, contenant un film liquidien qui autorise le glissement sans friction lors des mouvements respiratoires, cardiaques ou digestifs.",
        },
      ],
    },
  ],
  pointsCles: [
    "La position anatomique de référence est debout, paumes tournées vers l’avant : elle seule fixe le sens des termes de position.",
    "Les trois plans de l’espace sont le sagittal, le frontal et le transversal, chacun perpendiculaire aux deux autres.",
    "Chaque plan de mouvement est associé à un axe qui lui est perpendiculaire : sagittal et axe transversal, frontal et axe sagittal, transversal et axe longitudinal.",
    "Proximal et distal ne s’appliquent qu’aux membres, jamais au tronc.",
    "Flexion et extension se déroulent dans le plan sagittal ; abduction et adduction dans le plan frontal ; les rotations dans le plan transversal.",
    "Pronation et supination sont des mouvements propres à l’avant-bras.",
    "Chaque grande cavité séreuse comporte un feuillet pariétal, un feuillet viscéral et un espace virtuel de glissement.",
  ],
  erreursFrequentes: [
    "Décrire la position anatomique de référence avec les paumes tournées vers le corps : elles doivent être tournées vers l’avant.",
    "Employer proximal et distal pour situer une structure du tronc ou de la tête.",
    "Confondre plan frontal et plan transversal en imagerie, source d’erreur fréquente en lecture de coupes.",
    "Croire que l’abduction se déroule dans le plan sagittal alors qu’elle se déroule dans le plan frontal.",
    "Oublier que la rotation médiale et la rotation latérale se définissent par le sens de déplacement de la face antérieure du segment, non par un repère osseux fixe.",
  ],
  mnemotechniques: [
    {
      moyen: 'SA-FRO-TRA',
      explication:
        'Sagittal (avant-arrière), Frontal (droite-gauche), Transversal (haut-bas) : trois plans, trois directions perpendiculaires entre elles.',
    },
    {
      moyen: 'Flexion se voit de profil',
      explication:
        'On observe la flexion-extension en regardant le sujet de côté (plan sagittal) ; on observe l’abduction-adduction en le regardant de face (plan frontal).',
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
      id: 'anat-organisation-generale-fc-01',
      recto: 'Décrire la position anatomique de référence.',
      verso: 'Sujet debout, regard à l’horizon, membres inférieurs joints, membres supérieurs pendants, paumes tournées vers l’avant.',
      type: 'definition',
      tags: ['position de référence'],
    },
    {
      id: 'anat-organisation-generale-fc-02',
      recto: 'Quel plan divise le corps en une moitié droite et une moitié gauche symétriques ?',
      verso: 'Le plan sagittal médian.',
      type: 'definition',
      tags: ['plans'],
    },
    {
      id: 'anat-organisation-generale-fc-03',
      recto: 'Quel plan sépare une partie antérieure et une partie postérieure du corps ?',
      verso: 'Le plan frontal, aussi appelé plan coronal.',
      type: 'definition',
      tags: ['plans'],
    },
    {
      id: 'anat-organisation-generale-fc-04',
      recto: 'Autour de quel axe s’effectuent la flexion et l’extension ?',
      verso: 'Autour de l’axe transversal (ou frontal), dans le plan sagittal.',
      type: 'mecanisme',
      tags: ['axes', 'mouvements'],
    },
    {
      id: 'anat-organisation-generale-fc-05',
      recto: 'Autour de quel axe s’effectuent l’abduction et l’adduction ?',
      verso: 'Autour de l’axe sagittal, dans le plan frontal.',
      type: 'mecanisme',
      tags: ['axes', 'mouvements'],
    },
    {
      id: 'anat-organisation-generale-fc-06',
      recto: 'Définir proximal et distal.',
      verso: 'Proximal : plus proche de la racine du membre. Distal : plus éloigné de la racine du membre. Ces termes ne concernent que les membres.',
      type: 'definition',
      tags: ['termes de position'],
    },
    {
      id: 'anat-organisation-generale-fc-07',
      recto: 'Quels mouvements sont propres à l’avant-bras ?',
      verso: 'La pronation (paume vers l’arrière) et la supination (paume vers l’avant).',
      type: 'definition',
      tags: ['mouvements'],
    },
    {
      id: 'anat-organisation-generale-fc-08',
      recto: 'Qu’est-ce que la circumduction ?',
      verso: 'La combinaison successive de flexion, abduction, extension et adduction, qui décrit un cône dans l’espace.',
      type: 'mecanisme',
      tags: ['mouvements'],
    },
    {
      id: 'anat-organisation-generale-fc-09',
      recto: 'Quelle membrane séreuse tapisse la cavité thoracique autour des poumons ?',
      verso: 'La plèvre, avec un feuillet pariétal et un feuillet viscéral.',
      type: 'definition',
      tags: ['cavités', 'séreuses'],
    },
    {
      id: 'anat-organisation-generale-fc-10',
      recto: 'Que contient l’espace entre le feuillet pariétal et le feuillet viscéral d’une séreuse ?',
      verso: 'Un espace virtuel contenant un film liquidien qui permet le glissement sans friction entre les deux feuillets.',
      type: 'mecanisme',
      tags: ['séreuses'],
    },
    {
      id: 'anat-organisation-generale-fc-11',
      recto: 'Quels mouvements de la cheville s’opposent en flexion sagittale ?',
      verso: 'La flexion dorsale, qui rapproche le dos du pied de la jambe, et la flexion plantaire, qui les éloigne.',
      type: 'definition',
      tags: ['cheville', 'mouvements'],
    },
    {
      id: 'anat-organisation-generale-fc-12',
      recto: 'Quelle est la différence entre un plan sagittal quelconque et le plan sagittal médian ?',
      verso: 'Le plan sagittal médian passe exactement par la ligne médiane et donne deux hémicorps symétriques ; tout autre plan sagittal (parasagittal) est décalé et donne deux parties de tailles inégales.',
      type: 'definition',
      tags: ['plans'],
    },
  ],
  qcm: [
    {
      id: 'anat-organisation-generale-qcm-01',
      enonce: 'Concernant la position anatomique de référence, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les membres supérieurs pendent le long du corps.', vraie: true, justification: 'Exact, c’est l’un des éléments constitutifs de la position de référence.' },
        { lettre: 'B', texte: 'Les paumes des mains sont tournées vers le corps.', vraie: false, justification: 'Faux : les paumes sont tournées vers l’avant, avant-bras en supination.' },
        { lettre: 'C', texte: 'Le sujet est debout, regard porté à l’horizon.', vraie: true, justification: 'Exact, c’est la posture conventionnelle de référence.' },
        { lettre: 'D', texte: 'Cette position correspond à la posture spontanée de repos.', vraie: false, justification: 'Faux : la posture spontanée place plutôt les paumes contre les cuisses.' },
        { lettre: 'E', texte: 'Elle sert de référence commune à la description anatomique et à l’imagerie.', vraie: true, justification: 'Exact, les coupes d’imagerie sont orientées selon les mêmes plans que la position de référence.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir surtout l’orientation des paumes vers l’avant, souvent mal mémorisée.',
      difficulte: 1,
    },
    {
      id: 'anat-organisation-generale-qcm-02',
      enonce: 'Concernant les plans de l’espace, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le plan sagittal est un plan horizontal.', vraie: false, justification: 'Faux : le plan sagittal est vertical, orienté d’avant en arrière.' },
        { lettre: 'B', texte: 'Le plan frontal est aussi appelé plan coronal.', vraie: true, justification: 'Exact, les deux termes sont synonymes.' },
        { lettre: 'C', texte: 'Le plan transversal sépare une partie supérieure et une partie inférieure.', vraie: true, justification: 'Exact, c’est un plan horizontal perpendiculaire à l’axe longitudinal du corps.' },
        { lettre: 'D', texte: 'Un plan parasagittal donne deux hémicorps parfaitement symétriques.', vraie: false, justification: 'Faux : seul le plan sagittal médian donne une symétrie parfaite.' },
        { lettre: 'E', texte: 'Les trois plans de référence sont perpendiculaires deux à deux.', vraie: true, justification: 'Exact, c’est la définition même des trois plans orthogonaux de l’espace anatomique.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'anat-organisation-generale-qcm-03',
      enonce: 'Concernant les axes et les mouvements associés, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La flexion-extension se déroule autour de l’axe transversal.', vraie: true, justification: 'Exact, dans le plan sagittal.' },
        { lettre: 'B', texte: 'L’abduction-adduction se déroule dans le plan sagittal.', vraie: false, justification: 'Faux : elle se déroule dans le plan frontal, autour de l’axe sagittal.' },
        { lettre: 'C', texte: 'La rotation médiale se déroule autour de l’axe longitudinal.', vraie: true, justification: 'Exact, dans le plan transversal.' },
        { lettre: 'D', texte: 'L’axe sagittal est orienté de haut en bas.', vraie: false, justification: 'Faux : c’est l’axe longitudinal qui est vertical ; l’axe sagittal est orienté d’avant en arrière.' },
        { lettre: 'E', texte: 'Chaque axe de mouvement est perpendiculaire au plan dans lequel se déroule le mouvement.', vraie: true, justification: 'Exact, c’est la règle générale reliant plans et axes.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-organisation-generale-qcm-04',
      enonce: 'Concernant les termes de position, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le terme distal peut s’appliquer au rachis.', vraie: false, justification: 'Faux : proximal et distal ne concernent que les membres.' },
        { lettre: 'B', texte: 'Médial signifie plus proche du plan sagittal médian.', vraie: true, justification: 'Exact, c’est la définition du terme.' },
        { lettre: 'C', texte: 'Superficiel s’oppose à profond.', vraie: true, justification: 'Exact, ce couple décrit la distance par rapport à la surface du corps.' },
        { lettre: 'D', texte: 'Le coude est distal par rapport au poignet.', vraie: false, justification: 'Faux : c’est l’inverse, le coude est plus proximal (plus proche de la racine du membre) que le poignet.' },
        { lettre: 'E', texte: 'Crânial est synonyme de supérieur.', vraie: true, justification: 'Exact, les deux termes sont interchangeables.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'anat-organisation-generale-qcm-05',
      enonce: 'Concernant les mouvements articulaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La pronation oriente la paume de la main vers l’arrière.', vraie: true, justification: 'Exact, c’est la définition de la pronation de l’avant-bras.' },
        { lettre: 'B', texte: 'La flexion dorsale de cheville rapproche le dos du pied de la jambe.', vraie: true, justification: 'Ce mouvement, réalisé par les muscles de la loge antérieure de la jambe, diminue l’angle entre le dos du pied et la face antérieure de la jambe.' },
        { lettre: 'C', texte: 'La circumduction est un mouvement pur, réalisé dans un seul plan.', vraie: false, justification: 'Faux : elle combine successivement des mouvements dans plusieurs plans, décrivant un cône.' },
        { lettre: 'D', texte: 'L’adduction rapproche le membre du plan sagittal médian.', vraie: true, justification: 'Exact, c’est le mouvement opposé à l’abduction.' },
        { lettre: 'E', texte: 'La rotation latérale oriente la face antérieure du segment vers le plan médian.', vraie: false, justification: 'Faux : c’est la rotation médiale qui oriente la face antérieure vers le plan médian ; la rotation latérale l’en éloigne.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-organisation-generale-qcm-06',
      enonce: 'Concernant les cavités du corps et leurs membranes séreuses, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La plèvre tapisse la cavité thoracique.', vraie: true, justification: 'Exact, avec un feuillet pariétal et un feuillet viscéral.' },
        { lettre: 'B', texte: 'Le péritoine tapisse la cavité crânienne.', vraie: false, justification: 'Faux : la cavité crânienne est tapissée par les méninges ; le péritoine tapisse la cavité abdominopelvienne.' },
        { lettre: 'C', texte: 'Chaque séreuse comporte un feuillet pariétal et un feuillet viscéral.', vraie: true, justification: 'Exact, c’est l’organisation commune à toutes les séreuses.' },
        { lettre: 'D', texte: 'L’espace entre les deux feuillets d’une séreuse est habituellement comblé par du tissu conjonctif dense.', vraie: false, justification: 'Faux : il s’agit d’un espace virtuel contenant un film liquidien, non de tissu conjonctif dense.' },
        { lettre: 'E', texte: 'Le péricarde séreux entoure le cœur et la racine des gros vaisseaux.', vraie: true, justification: 'Comme toute séreuse, il comporte un feuillet viscéral appliqué au cœur et un feuillet pariétal, permettant le glissement lors des battements cardiaques.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
  ],
};
