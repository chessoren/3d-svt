import type { Fiche } from '../../types';

export const ficheMetabolismeMedicaments: Fiche = {
  id: 'ue6-metabolisme-medicaments',
  ue: 'ue6',
  titre: 'Métabolisme des médicaments',
  sousTitre: 'Réactions de phase I et de phase II, cytochromes P450, induction et inhibition enzymatiques, prodrogues, polymorphismes',
  chapitre: 'Pharmacocinétique',
  ordre: 5,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'métabolisme',
    'biotransformation',
    'phase I',
    'phase II',
    'cytochrome P450',
    'induction enzymatique',
    'inhibition enzymatique',
    'prodrogue',
    'polymorphisme génétique',
  ],
  objectifs: [
    'Distinguer les réactions de phase I et de phase II du métabolisme des médicaments.',
    'Décrire le rôle des cytochromes P450 dans le métabolisme des médicaments.',
    'Expliquer les mécanismes d’induction et d’inhibition enzymatiques et leurs conséquences.',
    'Définir la notion de prodrogue et ses implications pharmacocinétiques.',
    'Décrire l’influence du polymorphisme génétique sur le métabolisme médicamenteux.',
  ],
  sections: [
    {
      id: 'principes-generaux',
      titre: 'Principes généraux du métabolisme',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le métabolisme, ou biotransformation, est l’ensemble des réactions chimiques par lesquelles l’organisme transforme un médicament en un ou plusieurs métabolites, généralement plus hydrosolubles que la molécule initiale, afin de faciliter son élimination, principalement rénale.",
        },
        {
          type: 'liste',
          items: [
            'Le foie est le principal organe métabolisant les médicaments, mais d’autres tissus, comme l’intestin, le poumon, le rein ou la peau, possèdent également une activité métabolique.',
            'Le métabolisme peut aboutir à un métabolite inactif, à un métabolite actif conservant ou modifiant l’activité pharmacologique, ou à un métabolite toxique.',
            'Le métabolisme se déroule classiquement en deux phases successives, appelées phase I et phase II, bien qu’un médicament puisse subir uniquement l’une des deux, ou les deux dans un ordre variable.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Objectif général du métabolisme',
          texte:
            "L’objectif biologique du métabolisme est de rendre une molécule généralement liposoluble, donc mal éliminée par le rein, plus hydrosoluble, donc plus facilement filtrée et excrétée dans les urines ou la bile.",
        },
      ],
    },
    {
      id: 'phase-1-2',
      titre: 'Réactions de phase I et de phase II',
      blocs: [
        {
          type: 'definition',
          terme: 'Réactions de phase I',
          definition:
            "Réactions de fonctionnalisation qui introduisent ou démasquent un groupement fonctionnel polaire, comme un groupement hydroxyle, sur la molécule mère, par oxydation, réduction ou hydrolyse. Elles sont principalement catalysées par les cytochromes P450.",
        },
        {
          type: 'definition',
          terme: 'Réactions de phase II',
          definition:
            "Réactions de conjugaison qui associent la molécule ou son métabolite de phase I à un groupement endogène hydrosoluble, comme l’acide glucuronique, un sulfate, du glutathion ou un groupement acétyle, augmentant fortement l’hydrosolubilité du produit final.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des deux phases du métabolisme',
          colonnes: ['Caractéristique', 'Phase I', 'Phase II'],
          lignes: [
            ['Type de réaction', 'Oxydation, réduction, hydrolyse', 'Conjugaison (glucuronoconjugaison, sulfoconjugaison, acétylation, etc.)'],
            ['Enzymes principales', 'Cytochromes P450', 'Transférases (UDP-glucuronyltransférases, sulfotransférases, N-acétyltransférases)'],
            ['Effet sur l’activité', 'Peut activer, inactiver ou ne pas modifier l’activité', 'Inactive généralement la molécule, sauf exceptions'],
            ['Effet sur la polarité', 'Augmentation modérée de la polarité', 'Augmentation importante de la polarité et de l’hydrosolubilité'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Principales réactions de conjugaison de phase II',
          colonnes: ['Réaction', 'Groupement transféré', 'Exemple'],
          lignes: [
            ['Glucuronoconjugaison', 'Acide glucuronique', 'Conjugaison du paracétamol, de la morphine'],
            ['Sulfoconjugaison', 'Groupement sulfate', 'Conjugaison de certains phénols et catécholamines'],
            ['Acétylation', 'Groupement acétyle', 'Conjugaison de l’isoniazide'],
            ['Conjugaison au glutathion', 'Glutathion', 'Détoxification d’un métabolite réactif toxique, comme celui du paracétamol'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La phase I ne précède pas toujours la phase II',
          texte:
            "Une molécule peut subir directement une réaction de phase II sans passer par une phase I préalable, si elle possède déjà un groupement fonctionnel adapté à la conjugaison. La numérotation en phases traduit un ordre logique de réactivité, pas un ordre chronologique obligatoire.",
        },
      ],
    },
    {
      id: 'cytochromes',
      titre: 'Cytochromes P450',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cytochromes P450, ou CYP, constituent une superfamille d’enzymes localisées principalement dans le réticulum endoplasmique des hépatocytes, responsables de la majorité des réactions d’oxydation de phase I. Ils sont classés en familles, sous-familles et isoformes selon leur séquence en acides aminés.",
        },
        {
          type: 'tableau',
          titre: 'Principaux cytochromes P450 impliqués en pharmacologie humaine',
          colonnes: ['Isoforme', 'Proportion approximative du métabolisme hépatique des médicaments', 'Exemple de substrat'],
          lignes: [
            ['CYP3A4', 'La plus importante, environ la moitié des médicaments métabolisés par les CYP', 'Statines, immunosuppresseurs, nombreux antihypertenseurs'],
            ['CYP2D6', 'Notable, avec un polymorphisme génétique marqué', 'Certains antidépresseurs, la codéine'],
            ['CYP2C9', 'Notable', 'Warfarine, certains anti-inflammatoires non stéroïdiens'],
            ['CYP1A2', 'Modérée', 'Caféine, certains antidépresseurs'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repère sur le CYP3A4',
          texte:
            "Le CYP3A4 est impliqué dans le métabolisme d’une fraction très importante des médicaments d’usage courant, ce qui en fait une cible privilégiée des interactions médicamenteuses par induction ou inhibition enzymatique.",
        },
      ],
    },
    {
      id: 'induction-inhibition',
      titre: 'Induction et inhibition enzymatiques',
      blocs: [
        {
          type: 'definition',
          terme: 'Induction enzymatique',
          definition:
            "Augmentation de la quantité ou de l’activité d’une enzyme métabolisante, généralement par stimulation de sa synthèse, en réponse à l’exposition prolongée à un médicament inducteur. Elle accélère le métabolisme des substrats de cette enzyme.",
        },
        {
          type: 'definition',
          terme: 'Inhibition enzymatique',
          definition:
            "Diminution de l’activité d’une enzyme métabolisante, par compétition directe pour le site actif ou par un mécanisme non compétitif, en présence d’un médicament inhibiteur. Elle ralentit le métabolisme des substrats de cette enzyme.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison induction et inhibition enzymatiques',
          colonnes: ['Caractéristique', 'Induction', 'Inhibition'],
          lignes: [
            ['Délai d’installation', 'Progressif, plusieurs jours à semaines, le temps de synthétiser de nouvelles enzymes', 'Rapide, souvent dès les premières prises'],
            ['Effet sur les substrats', 'Diminution de leur concentration plasmatique, risque d’inefficacité', 'Augmentation de leur concentration plasmatique, risque de surdosage'],
            ['Réversibilité à l’arrêt', 'Progressive, le temps que l’excès d’enzyme disparaisse', 'Généralement rapide'],
          ],
        },
        {
          type: 'liste',
          items: [
            'La rifampicine est un inducteur enzymatique puissant et large spectre, notamment du CYP3A4.',
            'Le jus de pamplemousse est un inhibiteur connu du CYP3A4 intestinal, augmentant la biodisponibilité orale de nombreux substrats.',
            'Certains antifongiques azolés sont des inhibiteurs puissants du CYP3A4, exposant à un risque de surdosage des médicaments coadministrés métabolisés par cette voie.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Piège classique : prodrogue et induction ou inhibition',
          texte:
            "Pour une prodrogue nécessitant une activation métabolique, une induction enzymatique peut au contraire augmenter la formation du métabolite actif, et une inhibition enzymatique peut réduire l’efficacité clinique en limitant l’activation, à l’inverse du raisonnement habituel appliqué à un médicament actif d’emblée.",
        },
      ],
    },
    {
      id: 'prodrogues',
      titre: 'Prodrogues',
      blocs: [
        {
          type: 'definition',
          terme: 'Prodrogue',
          definition:
            "Substance administrée sous une forme pharmacologiquement inactive ou peu active, qui doit être transformée par le métabolisme de l’organisme pour libérer le ou les métabolites actifs responsables de l’effet thérapeutique.",
        },
        {
          type: 'liste',
          items: [
            'Le recours à une prodrogue peut viser à améliorer la biodisponibilité orale, la stabilité, la tolérance digestive ou la solubilité de la molécule active.',
            'L’efficacité d’une prodrogue dépend directement de la capacité métabolique de l’organisme à réaliser l’étape d’activation.',
            'La codéine est un exemple classique de prodrogue, activée en morphine par le CYP2D6.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Prodrogue et variabilité de réponse',
          texte:
            "Chez un patient métaboliseur lent pour l’enzyme responsable de l’activation d’une prodrogue, l’effet thérapeutique peut être insuffisant malgré une administration à posologie standard, car la formation du métabolite actif est réduite.",
        },
      ],
    },
    {
      id: 'polymorphismes',
      titre: 'Polymorphismes génétiques du métabolisme',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les gènes codant pour les enzymes métabolisantes, en particulier certains cytochromes P450 et certaines transférases de phase II, présentent des variations génétiques fréquentes dans la population, appelées polymorphismes, qui modifient l’activité enzymatique de façon héréditaire.",
        },
        {
          type: 'tableau',
          titre: 'Classification des métaboliseurs selon le phénotype',
          colonnes: ['Phénotype', 'Activité enzymatique', 'Conséquence pour un médicament actif d’emblée'],
          lignes: [
            ['Métaboliseur lent', 'Activité enzymatique fortement diminuée ou absente', 'Risque de surdosage à posologie standard'],
            ['Métaboliseur intermédiaire', 'Activité enzymatique modérément diminuée', 'Ajustement posologique parfois nécessaire'],
            ['Métaboliseur normal (ou extensif)', 'Activité enzymatique attendue', 'Réponse habituelle à la posologie standard'],
            ['Métaboliseur ultra-rapide', 'Activité enzymatique fortement augmentée', 'Risque d’inefficacité à posologie standard'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'CYP2D6 et polymorphisme',
          texte:
            "Le CYP2D6 est l’un des cytochromes P450 présentant le polymorphisme génétique le mieux caractérisé en pharmacologie humaine, avec une distribution variable des phénotypes de métaboliseurs selon les populations, expliquant une partie importante de la variabilité interindividuelle de réponse à certains médicaments.",
        },
        {
          type: 'liste',
          items: [
            'Pour un médicament actif d’emblée, un métaboliseur ultra-rapide élimine trop vite le médicament, exposant à un risque d’inefficacité.',
            'Pour une prodrogue, un métaboliseur ultra-rapide génère au contraire davantage de métabolite actif, exposant à un risque de surdosage relatif, comme cela a été rapporté avec la codéine chez certains patients ultra-rapides pour le CYP2D6.',
            'Le polymorphisme de la N-acétyltransférase de type 2 distingue classiquement les acétyleurs lents et rapides, avec des conséquences sur le métabolisme de l’isoniazide.',
          ],
        },
      ],
    },
  ],
  pointsCles: [
    "Le métabolisme transforme un médicament en métabolites généralement plus hydrosolubles, pour faciliter son élimination.",
    "Les réactions de phase I sont principalement des oxydations catalysées par les cytochromes P450.",
    "Les réactions de phase II sont des conjugaisons qui augmentent fortement l’hydrosolubilité.",
    "Le CYP3A4 participe au métabolisme d’une très large proportion des médicaments d’usage courant.",
    "L’induction enzymatique s’installe progressivement, l’inhibition enzymatique est en général rapide.",
    "Une prodrogue doit être activée par le métabolisme pour exercer son effet thérapeutique.",
    "Le polymorphisme génétique enzymatique explique une part importante de la variabilité interindividuelle de réponse aux médicaments.",
  ],
  erreursFrequentes: [
    "Croire que la phase I précède toujours obligatoirement la phase II.",
    "Penser que l’induction et l’inhibition enzymatiques ont le même délai d’installation.",
    "Oublier que pour une prodrogue, l’induction augmente l’effet et l’inhibition le diminue, à l’inverse d’un médicament actif d’emblée.",
    "Confondre métaboliseur lent et métaboliseur ultra-rapide dans l’analyse d’un cas clinique.",
    "Croire que le métabolisme se déroule exclusivement dans le foie.",
    "Ignorer que le CYP2D6 est fortement polymorphe, à la différence d’autres cytochromes.",
  ],
  mnemotechniques: [
    {
      moyen: 'Phase I = Introduction, Phase II = Insertion',
      explication:
        'La phase I introduit un groupement fonctionnel (fonctionnalisation), la phase II insère un groupement endogène hydrosoluble (conjugaison).',
    },
    {
      moyen: 'Inducteur = Installation lente, Inhibiteur = Immédiat',
      explication:
        'Les deux mots commencent par la même syllabe mais leur délai d’action diffère fortement : l’induction est progressive, l’inhibition est rapide.',
    },
    {
      moyen: 'Prodrogue = Pro-activation',
      explication:
        'Rappelle que la prodrogue nécessite une activation métabolique pour libérer son effet thérapeutique.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-metabolisme-medicaments-fc-01',
      recto: 'Quel est l’objectif biologique général du métabolisme des médicaments ?',
      verso: 'Rendre la molécule plus hydrosoluble pour faciliter son élimination, principalement rénale.',
      type: 'definition',
      tags: ['métabolisme'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-02',
      recto: 'Quel type de réaction caractérise la phase I du métabolisme ?',
      verso: 'Des réactions de fonctionnalisation : oxydation, réduction ou hydrolyse, principalement catalysées par les cytochromes P450.',
      type: 'definition',
      tags: ['phase I'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-03',
      recto: 'Quel type de réaction caractérise la phase II du métabolisme ?',
      verso: 'Des réactions de conjugaison à un groupement endogène hydrosoluble, comme l’acide glucuronique ou un sulfate.',
      type: 'definition',
      tags: ['phase II'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-04',
      recto: 'Quel cytochrome P450 est impliqué dans le métabolisme d’une très large proportion des médicaments ?',
      verso: 'Le CYP3A4.',
      type: 'chiffre',
      tags: ['cytochrome P450'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-05',
      recto: 'Quel est le délai d’installation typique d’une induction enzymatique ?',
      verso: 'Progressif, sur plusieurs jours à semaines, le temps de synthétiser de nouvelles enzymes.',
      type: 'mecanisme',
      tags: ['induction enzymatique'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-06',
      recto: 'Citer un inducteur enzymatique puissant et large spectre.',
      verso: 'La rifampicine.',
      type: 'clinique',
      tags: ['induction enzymatique'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-07',
      recto: 'Citer un inhibiteur connu du CYP3A4 intestinal d’origine alimentaire.',
      verso: 'Le jus de pamplemousse.',
      type: 'clinique',
      tags: ['inhibition enzymatique'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-08',
      recto: 'Qu’est-ce qu’une prodrogue ?',
      verso: 'Une substance inactive ou peu active administrée telle quelle, transformée par le métabolisme en métabolite actif responsable de l’effet thérapeutique.',
      type: 'definition',
      tags: ['prodrogue'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-09',
      recto: 'Donner un exemple classique de prodrogue activée par le CYP2D6.',
      verso: 'La codéine, activée en morphine.',
      type: 'clinique',
      tags: ['prodrogue', 'CYP2D6'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-10',
      recto: 'Quel risque présente un métaboliseur ultra-rapide pour un médicament actif d’emblée ?',
      verso: 'Un risque d’inefficacité, car le médicament est éliminé trop rapidement.',
      type: 'clinique',
      tags: ['polymorphisme'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-11',
      recto: 'Quel risque présente un métaboliseur ultra-rapide pour une prodrogue ?',
      verso: 'Un risque de surdosage relatif, car davantage de métabolite actif est formé.',
      type: 'clinique',
      tags: ['polymorphisme', 'prodrogue'],
    },
    {
      id: 'ue6-metabolisme-medicaments-fc-12',
      recto: 'Quelle enzyme de phase II est impliquée dans le métabolisme de l’isoniazide, avec un polymorphisme lent/rapide classique ?',
      verso: 'La N-acétyltransférase de type 2.',
      type: 'classification',
      tags: ['polymorphisme', 'phase II'],
    },
  ],
  qcm: [
    {
      id: 'ue6-metabolisme-medicaments-qcm-01',
      enonce: 'Concernant les réactions de phase I et de phase II, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phase I précède obligatoirement la phase II.', vraie: false, justification: 'Une molécule peut subir directement une phase II si elle possède déjà un groupement fonctionnel adapté.' },
        { lettre: 'B', texte: 'Les cytochromes P450 catalysent principalement les réactions de phase I.', vraie: true, justification: 'Ils sont responsables de la majorité des réactions d’oxydation de phase I.' },
        { lettre: 'C', texte: 'La glucuronoconjugaison est une réaction de phase II.', vraie: true, justification: 'Elle consiste à conjuguer la molécule à l’acide glucuronique, augmentant son hydrosolubilité.' },
        { lettre: 'D', texte: 'La phase II diminue toujours l’hydrosolubilité de la molécule.', vraie: false, justification: 'La conjugaison de phase II augmente au contraire fortement l’hydrosolubilité du produit final.' },
        { lettre: 'E', texte: 'La phase I peut donner un métabolite actif.', vraie: true, justification: 'Certaines réactions de phase I peuvent activer une molécule, comme dans le cas des prodrogues.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-metabolisme-medicaments-qcm-02',
      enonce: 'Concernant les cytochromes P450, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ils sont localisés principalement dans le réticulum endoplasmique des hépatocytes.', vraie: true, justification: 'C’est leur localisation subcellulaire principale.' },
        { lettre: 'B', texte: 'Le CYP3A4 métabolise une proportion négligeable des médicaments.', vraie: false, justification: 'Il métabolise au contraire une proportion très importante des médicaments d’usage courant.' },
        { lettre: 'C', texte: 'Le CYP2D6 présente un polymorphisme génétique marqué.', vraie: true, justification: 'C’est l’un des cytochromes les mieux caractérisés sur ce plan.' },
        { lettre: 'D', texte: 'La caféine est un substrat classique du CYP1A2.', vraie: true, justification: 'Le CYP1A2 participe notamment au métabolisme de la caféine.' },
        { lettre: 'E', texte: 'Les cytochromes P450 catalysent exclusivement des réactions de conjugaison.', vraie: false, justification: 'Ils catalysent principalement des réactions d’oxydation de phase I, pas des conjugaisons.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-metabolisme-medicaments-qcm-03',
      enonce: 'Concernant l’induction et l’inhibition enzymatiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’induction enzymatique s’installe en général plus lentement que l’inhibition.', vraie: true, justification: 'L’induction nécessite la synthèse de nouvelles enzymes, ce qui prend plusieurs jours à semaines.' },
        { lettre: 'B', texte: 'L’inhibition enzymatique augmente en général la concentration plasmatique des substrats.', vraie: true, justification: 'En ralentissant leur métabolisation, l’inhibition augmente leur accumulation plasmatique.' },
        { lettre: 'C', texte: 'La rifampicine est un inhibiteur enzymatique classique.', vraie: false, justification: 'La rifampicine est au contraire un inducteur enzymatique puissant et large spectre.' },
        { lettre: 'D', texte: 'Pour une prodrogue, une induction enzymatique peut augmenter la formation du métabolite actif.', vraie: true, justification: 'L’activation métabolique de la prodrogue est accélérée par l’augmentation de l’activité enzymatique.' },
        { lettre: 'E', texte: 'Le jus de pamplemousse est un inducteur du CYP3A4 intestinal.', vraie: false, justification: 'C’est au contraire un inhibiteur connu du CYP3A4 intestinal.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-metabolisme-medicaments-qcm-04',
      enonce: 'Concernant les prodrogues, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une prodrogue est active d’emblée, sans nécessiter de métabolisme.', vraie: false, justification: 'Par définition, une prodrogue doit être métabolisée pour libérer son ou ses métabolites actifs.' },
        { lettre: 'B', texte: 'Le recours à une prodrogue peut améliorer la biodisponibilité orale d’une molécule.', vraie: true, justification: 'C’est l’une des raisons pharmaceutiques justifiant le développement d’une prodrogue.' },
        { lettre: 'C', texte: 'La codéine est un exemple de prodrogue activée en morphine.', vraie: true, justification: 'Cette activation est catalysée par le CYP2D6.' },
        { lettre: 'D', texte: 'Un métaboliseur lent pour l’enzyme d’activation d’une prodrogue peut présenter une efficacité thérapeutique réduite.', vraie: true, justification: 'La formation du métabolite actif est diminuée, limitant l’effet clinique à posologie standard.' },
        { lettre: 'E', texte: 'L’efficacité d’une prodrogue est indépendante de la capacité métabolique du patient.', vraie: false, justification: 'Elle dépend au contraire directement de cette capacité métabolique, notamment de l’activité enzymatique d’activation.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-metabolisme-medicaments-qcm-05',
      enonce: 'Concernant le polymorphisme génétique du métabolisme, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un métaboliseur ultra-rapide expose à un risque d’inefficacité pour un médicament actif d’emblée.', vraie: true, justification: 'Le médicament est éliminé trop rapidement pour maintenir une concentration efficace.' },
        { lettre: 'B', texte: 'Un métaboliseur lent expose à un risque de surdosage pour un médicament actif d’emblée.', vraie: true, justification: 'L’élimination réduite entraîne une accumulation du médicament à posologie standard.' },
        { lettre: 'C', texte: 'Le polymorphisme du CYP2D6 est le même dans toutes les populations humaines.', vraie: false, justification: 'La distribution des phénotypes de métaboliseurs varie selon les populations étudiées.' },
        { lettre: 'D', texte: 'La N-acétyltransférase de type 2 présente un polymorphisme classique acétyleur lent ou rapide.', vraie: true, justification: 'Ce polymorphisme influence notamment le métabolisme de l’isoniazide.' },
        { lettre: 'E', texte: 'Le polymorphisme génétique enzymatique ne concerne jamais les enzymes de phase II.', vraie: false, justification: 'Il concerne également certaines enzymes de phase II, comme la N-acétyltransférase de type 2.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-metabolisme-medicaments-qcm-06',
      enonce: 'Concernant le métabolisme des médicaments en général, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le foie est le principal organe métabolisant les médicaments.', vraie: true, justification: 'C’est le siège principal du métabolisme médicamenteux, bien que d’autres tissus y participent également.' },
        { lettre: 'B', texte: 'Le métabolisme aboutit toujours à un métabolite totalement inactif.', vraie: false, justification: 'Le métabolisme peut aboutir à un métabolite actif, inactif ou toxique selon les cas.' },
        { lettre: 'C', texte: 'L’intestin peut posséder une activité métabolique propre.', vraie: true, justification: 'La paroi intestinale contient notamment des cytochromes P450 participant au métabolisme de premier passage.' },
        { lettre: 'D', texte: 'Le métabolisme vise en général à augmenter l’hydrosolubilité du médicament.', vraie: true, justification: 'C’est l’objectif biologique principal du métabolisme, facilitant l’élimination rénale.' },
        { lettre: 'E', texte: 'Un métabolite ne peut jamais être toxique.', vraie: false, justification: 'Certains métabolites, comme celui de la surdose de paracétamol, sont au contraire toxiques.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
