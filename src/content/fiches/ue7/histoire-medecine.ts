import type { Fiche } from '../../types';

export const ficheHistoireMedecine: Fiche = {
  id: 'ue7-histoire-medecine',
  ue: 'ue7',
  titre: 'Histoire de la médecine',
  sousTitre:
    'De la médecine hippocratique à la médecine expérimentale : les grandes ruptures qui ont fondé la médecine moderne',
  chapitre: 'Histoire et épistémologie',
  ordre: 1,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'Hippocrate',
    'Galien',
    'médecine arabo-musulmane',
    'Vésale',
    'méthode anatomoclinique',
    'Pasteur',
    'théorie microbienne',
    'Claude Bernard',
  ],
  objectifs: [
    'Situer les grandes étapes de l’histoire de la médecine occidentale, de l’Antiquité au XIXe siècle.',
    'Expliquer les apports et les limites de la théorie humorale hippocratique et galénique.',
    'Décrire le rôle de la médecine arabo-musulmane dans la transmission et l’enrichissement du savoir médical.',
    'Caractériser la rupture anatomique de la Renaissance et la naissance de la méthode anatomoclinique.',
    'Expliquer comment Pasteur et Claude Bernard ont fondé respectivement la microbiologie et la méthode expérimentale en médecine.',
  ],
  sections: [
    {
      id: 'medecine-hippocratique',
      titre: 'La médecine hippocratique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Hippocrate de Cos, médecin grec du Ve siècle avant Jésus-Christ, est traditionnellement présenté comme le fondateur de la médecine occidentale rationnelle. La médecine hippocratique rompt avec l’explication magique ou divine de la maladie pour lui substituer une observation clinique méthodique et une recherche de causes naturelles, notamment environnementales et climatiques.",
        },
        {
          type: 'definition',
          terme: 'Théorie des humeurs',
          definition:
            "Doctrine selon laquelle le corps est constitué de quatre humeurs (sang, phlegme, bile jaune, bile noire) dont l’équilibre, ou eucrasie, garantit la santé ; leur déséquilibre, ou dyscrasie, provoque la maladie. Cette théorie dominera la médecine occidentale pendant plus de deux mille ans.",
        },
        {
          type: 'liste',
          items: [
            "Le Corpus hippocratique, ensemble de textes attribués à Hippocrate et à son école, insiste sur l’observation attentive du malade, le pronostic et le rôle du terrain individuel.",
            "Le serment d’Hippocrate formule des exigences morales toujours évoquées aujourd’hui : bienfaisance envers le malade, respect de la confidentialité, refus de nuire.",
            "La notion de « nature médecin » (vis medicatrix naturae) valorise les capacités spontanées de guérison de l’organisme, que le médecin doit accompagner plutôt que contrarier.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Primum non nocere',
          texte:
            "Cette formule latine, « d’abord ne pas nuire », résume un principe central hérité de la tradition hippocratique et toujours invoqué en éthique médicale contemporaine sous le nom de principe de non-malfaisance.",
        },
      ],
    },
    {
      id: 'galien-medecine-antique',
      titre: 'Galien et la médecine gréco-romaine',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Galien de Pergame, médecin grec du IIe siècle de notre ère exerçant notamment à Rome, systématise et complète la théorie humorale hippocratique. Il fonde ses descriptions anatomiques et physiologiques sur la dissection d’animaux, en particulier de singes et de porcs, la dissection de cadavres humains étant proscrite dans le monde romain.",
        },
        {
          type: 'liste',
          items: [
            "Galien élabore une physiologie fondée sur trois organes principaux (le foie, le cœur, le cerveau) et sur la théorie des esprits ou pneumas circulant dans le corps.",
            "Son autorité, relayée par les traductions médiévales, restera pratiquement incontestée en Occident jusqu’à la Renaissance.",
            "Une partie de ses descriptions anatomiques, transposées de l’animal à l’homme sans vérification, se révéleront erronées, comme le montrera Vésale au XVIe siècle.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une autorité qui freine aussi le progrès',
          texte:
            "Le prestige de Galien, devenu quasi dogmatique au Moyen Âge, a longtemps freiné la remise en cause de ses erreurs anatomiques : contester Galien pouvait être perçu comme une faute intellectuelle grave, ce qui illustre la difficulté du changement de paradigme scientifique.",
        },
      ],
    },
    {
      id: 'medecine-medievale-arabe',
      titre: 'La médecine médiévale et le monde arabo-musulman',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Entre le VIIIe et le XIIIe siècle, le monde arabo-musulman constitue le principal foyer de conservation, de traduction et d’enrichissement du savoir médical grec, à une époque où l’Occident latin connaît un net recul de l’activité scientifique.",
        },
        {
          type: 'tableau',
          titre: 'Quelques figures majeures de la médecine arabo-musulmane',
          colonnes: ['Auteur', 'Période', 'Apport principal'],
          lignes: [
            [
              'Rhazès (Al-Razi)',
              'IXe-Xe siècle',
              'Description clinique princeps de la distinction entre variole et rougeole ; approche clinique fine au chevet du malade',
            ],
            [
              'Avicenne (Ibn Sina)',
              'Xe-XIe siècle',
              "Auteur du Canon de la médecine, somme encyclopédique qui restera enseignée dans les universités européennes jusqu’au XVIIe siècle",
            ],
            [
              'Averroès (Ibn Rushd)',
              'XIIe siècle',
              'Commentateur d’Aristote et de Galien, contribution à la diffusion du savoir médical et philosophique vers l’Occident latin',
            ],
          ],
        },
        {
          type: 'liste',
          items: [
            "Les hôpitaux (bimaristan) du monde arabo-musulman organisent une prise en charge structurée des malades, avec une spécialisation croissante des services.",
            "Les traductions en arabe puis en latin (notamment via l’École de Tolède) permettent la transmission vers l’Europe des textes hippocratiques et galéniques, souvent enrichis de commentaires originaux.",
            "En Occident médiéval, les premières universités (Salerne, puis Montpellier, Paris, Bologne) organisent progressivement un enseignement médical structuré, largement fondé sur l’autorité des textes anciens.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'À retenir pour le concours',
          texte:
            "Ne pas présenter le Moyen Âge occidental comme une période de vide scientifique absolu : c’est surtout un temps de transmission, de traduction et de commentaire, avant la rupture expérimentale de la Renaissance. Le rôle de passeur du monde arabo-musulman est un point fréquemment interrogé.",
        },
      ],
    },
    {
      id: 'revolution-anatomique',
      titre: 'La révolution anatomique de la Renaissance',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au XVIe siècle, la pratique régulière de la dissection humaine dans les universités italiennes (notamment à Padoue) permet une remise en cause directe des descriptions galéniques, fondées sur l’animal. André Vésale publie en 1543 le De humani corporis fabrica, atlas anatomique fondé sur l’observation directe du corps humain disséqué.",
        },
        {
          type: 'liste',
          items: [
            "Vésale corrige plusieurs erreurs anatomiques de Galien, par exemple concernant la structure du sternum, de la mâchoire ou du septum interventriculaire.",
            "La méthode d’observation directe et de représentation graphique précise inaugurée par Vésale devient le modèle de l’anatomie moderne.",
            "William Harvey décrit en 1628 la circulation sanguine et le rôle de pompe du cœur, rompant avec la théorie galénique d’un mouvement de va-et-vient du sang depuis le foie.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Une rupture de méthode plus que de seul contenu',
          texte:
            "L’apport majeur de Vésale n’est pas seulement de corriger des erreurs ponctuelles : c’est d’ériger l’observation directe et reproductible du corps humain en critère de vérité anatomique, à la place de l’autorité des textes anciens. C’est une rupture épistémologique autant qu’anatomique.",
        },
      ],
    },
    {
      id: 'methode-anatomoclinique',
      titre: 'La méthode anatomoclinique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au tournant des XVIIIe et XIXe siècles, l’école de Paris développe la méthode anatomoclinique : elle consiste à confronter systématiquement les signes observés chez le malade vivant (l’examen clinique) aux lésions retrouvées à l’autopsie après son décès, afin d’établir une corrélation entre symptôme et lésion organique.",
        },
        {
          type: 'tableau',
          titre: 'Figures de la méthode anatomoclinique',
          colonnes: ['Auteur', 'Apport'],
          lignes: [
            [
              'Xavier Bichat',
              'Distinction des tissus (histologie descriptive) comme niveau d’analyse intermédiaire entre l’organe et la lésion',
            ],
            [
              'René Laennec',
              "Invention du stéthoscope au début du XIXe siècle, permettant l’auscultation médiate et l’enrichissement du signe clinique",
            ],
          ],
        },
        {
          type: 'liste',
          items: [
            "Cette méthode déplace le siège de la maladie : elle n’est plus un déséquilibre humoral diffus mais une lésion localisable dans un organe ou un tissu précis.",
            "L’hôpital devient à cette époque un lieu d’observation clinique de masse et d’enseignement, favorisant l’essor de cette démarche.",
            "Elle prépare la voie à l’anatomopathologie moderne et à une conception lésionnelle de la maladie.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un changement de regard sur la maladie',
          texte:
            "Avec la méthode anatomoclinique, la question centrale devient « où est la lésion ? » plutôt que « quel est le déséquilibre humoral ? ». Ce déplacement annonce la médecine anatomopathologique puis cellulaire du XIXe siècle.",
        },
      ],
    },
    {
      id: 'pasteur-theorie-microbienne',
      titre: 'Pasteur et la théorie microbienne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Louis Pasteur établit dans la seconde moitié du XIXe siècle que des micro-organismes sont responsables de la fermentation et de certaines maladies, invalidant la théorie de la génération spontanée. Ces travaux fondent la théorie microbienne des maladies infectieuses (théorie du germe).",
        },
        {
          type: 'liste',
          items: [
            "Pasteur développe des vaccins, notamment contre la rage, et pose les fondements de la vaccination moderne à partir de germes atténués.",
            "Ses travaux justifient scientifiquement les pratiques d’asepsie et d’antisepsie, déjà pressenties empiriquement par des cliniciens comme Ignace Semmelweis à propos de la fièvre puerpérale.",
            "Robert Koch formalise en parallèle des critères rigoureux (les postulats de Koch) permettant d’établir le lien entre un micro-organisme donné et une maladie infectieuse précise.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repère chronologique',
          texte:
            "La seconde moitié du XIXe siècle correspond à l’âge d’or de la bactériologie : identification de nombreux agents infectieux, développement de l’asepsie chirurgicale et des premières vaccinations à visée préventive de masse.",
        },
      ],
    },
    {
      id: 'medecine-experimentale',
      titre: 'La naissance de la médecine expérimentale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Claude Bernard formalise au XIXe siècle les principes de la méthode expérimentale appliquée à la physiologie et à la médecine, exposés notamment dans son Introduction à l’étude de la médecine expérimentale (1865). Il propose une démarche fondée sur l’observation, la formulation d’une hypothèse et sa vérification par l’expérimentation contrôlée.",
        },
        {
          type: 'definition',
          terme: 'Milieu intérieur',
          definition:
            "Concept introduit par Claude Bernard désignant l’environnement liquidien interne de l’organisme, dont la stabilité relative est une condition de la vie libre et autonome de l’être vivant : une intuition précurseur de la notion moderne d’homéostasie.",
        },
        {
          type: 'liste',
          items: [
            "La médecine expérimentale substitue à l’observation purement descriptive une démarche active de vérification par l’expérimentation, y compris animale.",
            "Cette démarche fonde progressivement l’exigence méthodologique qui aboutira, au XXe siècle, à la médecine fondée sur les preuves et à l’essai clinique contrôlé.",
            "Elle s’accompagne d’une réflexion éthique précoce sur les limites de l’expérimentation, notamment chez l’humain.",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Fil conducteur à retenir',
          texte:
            "L’histoire de la médecine peut se lire comme une succession de déplacements du regard : de l’humeur (Hippocrate, Galien) à l’organe (anatomie de la Renaissance), puis au tissu et à la lésion (méthode anatomoclinique), puis au micro-organisme (Pasteur), puis à la preuve expérimentale et statistique (Claude Bernard et la médecine fondée sur les preuves).",
        },
      ],
    },
  ],
  pointsCles: [
    "La médecine hippocratique introduit l’observation clinique rationnelle et la théorie des quatre humeurs.",
    "Galien systématise la théorie humorale à partir de dissections animales ; son autorité dominera jusqu’à la Renaissance.",
    "Le monde arabo-musulman assure la transmission, la traduction et l’enrichissement du savoir médical grec durant le haut Moyen Âge.",
    "Vésale (1543) fonde l’anatomie moderne sur la dissection humaine directe et corrige plusieurs erreurs de Galien.",
    "La méthode anatomoclinique (Bichat, Laennec) déplace le siège de la maladie vers la lésion organique et tissulaire.",
    "Pasteur établit la théorie microbienne des maladies infectieuses et fonde la vaccination moderne.",
    "Claude Bernard formalise la méthode expérimentale en médecine et introduit la notion de milieu intérieur.",
  ],
  erreursFrequentes: [
    "Présenter le Moyen Âge occidental comme une période sans aucune activité médicale : c’est en réalité une période de transmission et de commentaire, notamment via le monde arabo-musulman.",
    "Confondre Hippocrate et Galien : Hippocrate initie la théorie humorale, Galien la systématise plusieurs siècles plus tard à partir de dissections animales.",
    "Attribuer à Vésale la découverte de la circulation sanguine, alors qu’elle revient à William Harvey, près d’un siècle plus tard.",
    "Réduire la méthode anatomoclinique à l’invention du stéthoscope, alors qu’elle désigne surtout la corrélation systématique entre clinique et autopsie.",
    "Confondre théorie microbienne (Pasteur) et méthode expérimentale (Claude Bernard) : la première porte sur l’origine infectieuse des maladies, la seconde sur la démarche scientifique en physiologie.",
  ],
  mnemotechniques: [
    {
      moyen: 'HG-VA-BL-PC',
      explication:
        'Ordre chronologique simplifié : Hippocrate, Galien, Vésale, (William) Harvey, Bichat-Laennec, Pasteur, Claude Bernard.',
    },
    {
      moyen: 'Les trois déplacements du regard',
      explication:
        "Humeur (Antiquité) puis organe (Renaissance) puis lésion tissulaire (méthode anatomoclinique) puis germe (Pasteur) puis preuve expérimentale (Claude Bernard).",
    },
  ],
  sources: [
    'Mazzarello P., Histoire de la médecine, collection Que sais-je ?',
    'Bariéty M., Coury C., Histoire de la médecine',
    'Bernard C., Introduction à l’étude de la médecine expérimentale, 1865',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-histoire-medecine-fc-01',
      recto: 'Quelle doctrine fonde la médecine hippocratique ?',
      verso: "La théorie des quatre humeurs (sang, phlegme, bile jaune, bile noire), dont l’équilibre garantit la santé.",
      type: 'definition',
      tags: ['Hippocrate', 'humeurs'],
    },
    {
      id: 'ue7-histoire-medecine-fc-02',
      recto: 'Sur quoi Galien fonde-t-il ses descriptions anatomiques ?',
      verso: "Sur la dissection d’animaux (singes, porcs), la dissection humaine étant proscrite dans le monde romain, d’où certaines erreurs de transposition à l’homme.",
      type: 'mecanisme',
      tags: ['Galien', 'anatomie'],
    },
    {
      id: 'ue7-histoire-medecine-fc-03',
      recto: 'Quel est l’apport clinique majeur de Rhazès (Al-Razi) ?',
      verso: "La description clinique princeps distinguant la variole de la rougeole.",
      type: 'clinique',
      tags: ['médecine arabe'],
    },
    {
      id: 'ue7-histoire-medecine-fc-04',
      recto: 'Quelle œuvre d’Avicenne domine l’enseignement médical européen jusqu’au XVIIe siècle ?',
      verso: 'Le Canon de la médecine.',
      type: 'definition',
      tags: ['Avicenne'],
    },
    {
      id: 'ue7-histoire-medecine-fc-05',
      recto: 'Quel ouvrage et quelle date marquent la fondation de l’anatomie moderne ?',
      verso: 'Le De humani corporis fabrica d’André Vésale, publié en 1543.',
      type: 'chiffre',
      tags: ['Vésale', 'anatomie'],
    },
    {
      id: 'ue7-histoire-medecine-fc-06',
      recto: 'Qui décrit la circulation sanguine et en quelle année approximativement ?',
      verso: 'William Harvey, en 1628.',
      type: 'chiffre',
      tags: ['Harvey', 'circulation'],
    },
    {
      id: 'ue7-histoire-medecine-fc-07',
      recto: 'En quoi consiste la méthode anatomoclinique ?',
      verso: "À corréler systématiquement les signes cliniques observés chez le malade vivant aux lésions retrouvées à l’autopsie.",
      type: 'definition',
      tags: ['méthode anatomoclinique'],
    },
    {
      id: 'ue7-histoire-medecine-fc-08',
      recto: 'Quel instrument invente Laennec et à quelle époque ?',
      verso: 'Le stéthoscope, au début du XIXe siècle, permettant l’auscultation médiate.',
      type: 'chiffre',
      tags: ['Laennec', 'auscultation'],
    },
    {
      id: 'ue7-histoire-medecine-fc-09',
      recto: 'Que démontre Pasteur en invalidant la génération spontanée ?',
      verso: "Que des micro-organismes sont responsables de la fermentation et de certaines maladies : c’est la théorie microbienne des maladies infectieuses.",
      type: 'mecanisme',
      tags: ['Pasteur', 'microbiologie'],
    },
    {
      id: 'ue7-histoire-medecine-fc-10',
      recto: 'Que désignent les postulats de Koch ?',
      verso: "Des critères rigoureux permettant d’établir le lien de causalité entre un micro-organisme donné et une maladie infectieuse précise.",
      type: 'definition',
      tags: ['Koch'],
    },
    {
      id: 'ue7-histoire-medecine-fc-11',
      recto: 'Quel ouvrage de Claude Bernard fonde la méthode expérimentale en médecine ?',
      verso: 'L’Introduction à l’étude de la médecine expérimentale, publiée en 1865.',
      type: 'chiffre',
      tags: ['Claude Bernard'],
    },
    {
      id: 'ue7-histoire-medecine-fc-12',
      recto: 'Que désigne le « milieu intérieur » chez Claude Bernard ?',
      verso: "L’environnement liquidien interne de l’organisme, dont la stabilité relative conditionne la vie libre et autonome de l’être vivant.",
      type: 'definition',
      tags: ['milieu intérieur', 'homéostasie'],
    },
  ],
  qcm: [
    {
      id: 'ue7-histoire-medecine-qcm-01',
      enonce: 'Concernant la médecine hippocratique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle repose sur la théorie des quatre humeurs.',
          vraie: true,
          justification: 'Exact : sang, phlegme, bile jaune et bile noire, dont l’équilibre définit la santé.',
        },
        {
          lettre: 'B',
          texte: 'Elle explique la maladie par une punition divine.',
          vraie: false,
          justification: "Faux : c’est précisément la rupture qu’opère la médecine hippocratique, en recherchant des causes naturelles.",
        },
        {
          lettre: 'C',
          texte: 'Le serment d’Hippocrate évoque une exigence de confidentialité.',
          vraie: true,
          justification: 'Exact : cette exigence est un ancêtre du secret professionnel médical.',
        },
        {
          lettre: 'D',
          texte: 'Elle valorise l’observation clinique du malade.',
          vraie: true,
          justification: 'Exact : le Corpus hippocratique insiste sur l’observation attentive et le pronostic.',
        },
        {
          lettre: 'E',
          texte: 'Elle est postérieure à la médecine de Galien.',
          vraie: false,
          justification: 'Faux : Hippocrate (Ve siècle avant Jésus-Christ) précède Galien (IIe siècle après Jésus-Christ) de plusieurs siècles.',
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 1,
    },
    {
      id: 'ue7-histoire-medecine-qcm-02',
      enonce: 'Concernant Galien, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il fonde ses descriptions sur la dissection de cadavres humains.',
          vraie: false,
          justification: "Faux : la dissection humaine étant proscrite à Rome, il dissèque des animaux, ce qui explique certaines erreurs.",
        },
        {
          lettre: 'B',
          texte: 'Il systématise la théorie humorale hippocratique.',
          vraie: true,
          justification: 'Exact : il l’enrichit d’une physiologie fondée sur le foie, le cœur et le cerveau.',
        },
        {
          lettre: 'C',
          texte: 'Son autorité a été rapidement remise en cause dès le VIe siècle.',
          vraie: false,
          justification: 'Faux : elle domine la médecine occidentale jusqu’à la Renaissance, soit près de mille cinq cents ans.',
        },
        {
          lettre: 'D',
          texte: 'Toutes ses descriptions anatomiques se sont révélées exactes chez l’homme.',
          vraie: false,
          justification: 'Faux : plusieurs erreurs seront corrigées par Vésale au XVIe siècle.',
        },
        {
          lettre: 'E',
          texte: 'Il exerce notamment à Rome au IIe siècle après Jésus-Christ.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : B et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-histoire-medecine-qcm-03',
      enonce: 'Concernant la médecine arabo-musulmane médiévale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle assure la transmission des textes grecs vers l’Occident latin.',
          vraie: true,
          justification: 'Exact, notamment via les traductions en arabe puis en latin, dont celles de l’École de Tolède.',
        },
        {
          lettre: 'B',
          texte: 'Avicenne est l’auteur du Canon de la médecine.',
          vraie: true,
          justification: 'Exact : ouvrage enseigné en Europe jusqu’au XVIIe siècle.',
        },
        {
          lettre: 'C',
          texte: 'Rhazès décrit la distinction clinique entre variole et rougeole.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Les bimaristans sont des universités de théologie.',
          vraie: false,
          justification: 'Faux : ce sont des hôpitaux organisant une prise en charge structurée des malades.',
        },
        {
          lettre: 'E',
          texte: 'Cette période correspond à un recul global du savoir médical par rapport à l’Antiquité.',
          vraie: false,
          justification: "Faux : c’est au contraire une période de conservation, de traduction et d’enrichissement du savoir médical grec.",
        },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 2,
    },
    {
      id: 'ue7-histoire-medecine-qcm-04',
      enonce: 'Concernant la révolution anatomique de la Renaissance, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Vésale publie le De humani corporis fabrica en 1543.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Vésale fonde ses travaux sur la dissection humaine directe.',
          vraie: true,
          justification: 'Exact, notamment dans le cadre universitaire de Padoue.',
        },
        {
          lettre: 'C',
          texte: 'Vésale confirme intégralement les descriptions de Galien.',
          vraie: false,
          justification: "Faux : il corrige plusieurs erreurs galéniques issues de dissections animales.",
        },
        {
          lettre: 'D',
          texte: 'William Harvey décrit la circulation sanguine avant Vésale.',
          vraie: false,
          justification: 'Faux : Harvey publie ses travaux en 1628, soit près d’un siècle après Vésale.',
        },
        {
          lettre: 'E',
          texte: 'Cette période érige l’observation directe en critère de vérité anatomique.',
          vraie: true,
          justification: 'Exact : c’est la rupture méthodologique majeure de cette période.',
        },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-histoire-medecine-qcm-05',
      enonce: 'Concernant la méthode anatomoclinique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle corrèle les signes cliniques du vivant aux lésions retrouvées à l’autopsie.',
          vraie: true,
          justification: 'Exact : c’est sa définition même.',
        },
        {
          lettre: 'B',
          texte: 'Laennec invente le stéthoscope au début du XIXe siècle.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Elle se développe principalement dans l’école de Paris.',
          vraie: true,
          justification: 'Exact, au tournant des XVIIIe et XIXe siècles.',
        },
        {
          lettre: 'D',
          texte: 'Bichat introduit la notion de tissu comme niveau d’analyse.',
          vraie: true,
          justification: 'Exact : l’histologie descriptive s’intercale entre l’organe et la lésion.',
        },
        {
          lettre: 'E',
          texte: 'Elle repose sur la théorie des quatre humeurs.',
          vraie: false,
          justification: "Faux : elle déplace au contraire le siège de la maladie de l’humeur vers la lésion organique et tissulaire.",
        },
      ],
      correction: 'Réponses exactes : A, B, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-histoire-medecine-qcm-06',
      enonce: 'Concernant Pasteur et Claude Bernard, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Pasteur invalide la théorie de la génération spontanée.',
          vraie: true,
          justification: 'Exact, au profit de la théorie microbienne des maladies infectieuses.',
        },
        {
          lettre: 'B',
          texte: 'Pasteur développe un vaccin contre la rage.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Claude Bernard formalise la méthode expérimentale en physiologie.',
          vraie: true,
          justification: "Exact, notamment dans son ouvrage de 1865.",
        },
        {
          lettre: 'D',
          texte: 'La notion de milieu intérieur est due à Pasteur.',
          vraie: false,
          justification: 'Faux : elle est due à Claude Bernard, pas à Pasteur.',
        },
        {
          lettre: 'E',
          texte: 'Les postulats de Koch permettent d’établir un lien de causalité entre un micro-organisme et une maladie.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
  ],
};
