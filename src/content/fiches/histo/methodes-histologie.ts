import type { Fiche } from '../../types';

export const ficheMethodesHistologie: Fiche = {
  id: 'histo-methodes-histologie',
  ue: 'histo',
  titre: "Méthodes d’étude en histologie",
  sousTitre: 'Du prélèvement tissulaire à l’image microscopique : fixation, inclusion, coupe, colorations et artefacts',
  chapitre: 'Méthodes',
  ordre: 1,
  duree: 22,
  difficulte: 1,
  motsCles: [
    'fixation',
    'inclusion en paraffine',
    'coupe',
    'coloration HES',
    'PAS',
    'immunohistochimie',
    'microscopie électronique',
    'artefact',
  ],
  objectifs: [
    "Décrire les étapes successives de préparation d’un prélèvement tissulaire pour l’histologie de routine.",
    "Expliquer le principe de la fixation et citer le fixateur de référence.",
    "Justifier l’intérêt de la coloration hémalun-éosine-safran et de la réaction à l’acide périodique de Schiff.",
    "Distinguer microscopie photonique et microscopie électronique par leurs principes et leurs résolutions.",
    "Reconnaître les principaux artefacts de préparation pour ne pas les confondre avec des lésions tissulaires.",
  ],
  sections: [
    {
      id: 'du-preleuvement-a-la-lame',
      titre: 'Du prélèvement à la lame',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’histologie étudie l’organisation microscopique des tissus. L’obtention d’une image interprétable nécessite une chaîne de préparation rigoureuse, dont chaque étape peut introduire des artefacts si elle est mal maîtrisée. La technique de référence pour l’histologie de routine reste l’inclusion en paraffine après fixation, suivie d’une coupe fine colorée et observée en microscopie photonique.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la technique histologique classique',
          etapes: [
            {
              titre: 'Prélèvement',
              detail:
                "Biopsie ou pièce opératoire prélevée le plus rapidement possible après l’arrêt de la vascularisation, afin de limiter l’autolyse tissulaire par les enzymes lysosomiales.",
            },
            {
              titre: 'Fixation',
              detail:
                "Immersion dans un fixateur qui stabilise les structures et bloque l’autolyse et la putréfaction en formant des liaisons covalentes entre macromolécules.",
            },
            {
              titre: 'Déshydratation',
              detail:
                "Passage dans des bains d’alcool de concentration croissante afin d’éliminer l’eau tissulaire, incompatible avec l’imprégnation par la paraffine.",
            },
            {
              titre: 'Éclaircissement',
              detail:
                "Passage dans un solvant intermédiaire, miscible à la fois avec l’alcool et avec la paraffine, qui rend le tissu translucide.",
            },
            {
              titre: 'Inclusion',
              detail:
                "Imprégnation puis enrobage du tissu dans un bloc de paraffine liquide, qui durcit en refroidissant et permet des coupes fines et régulières.",
            },
            {
              titre: 'Coupe',
              detail:
                "Section du bloc au microtome en tranches de quelques micromètres d’épaisseur, étalées sur une lame de verre.",
            },
            {
              titre: 'Coloration',
              detail:
                "Déparaffinage puis application de colorants qui révèlent le contraste entre les différentes structures cellulaires et tissulaires.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Unité de mesure en microscopie',
          texte:
            "L’épaisseur d’une coupe en paraffine est de l’ordre de 3 à 5 micromètres. Le micromètre (µm), soit 10⁻⁶ mètre, est l’unité de référence en histologie photonique ; le nanomètre (nm), soit 10⁻⁹ mètre, est utilisé en microscopie électronique.",
        },
      ],
    },
    {
      id: 'fixation',
      titre: 'La fixation',
      blocs: [
        {
          type: 'definition',
          terme: 'Fixation',
          definition:
            "Ensemble de procédés physiques ou chimiques qui stabilisent les structures tissulaires en bloquant les phénomènes d’autolyse et de putréfaction, tout en conservant au mieux la morphologie et l’antigénicité des tissus.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le formol tamponné à 10 %, solution aqueuse de formaldéhyde, est le fixateur de référence en histologie de routine. Il agit en créant des ponts covalents entre les groupements amines des protéines, ce qui rigidifie les structures. D’autres fixateurs existent, choisis selon la technique ultérieure : le glutaraldéhyde pour la microscopie électronique, en raison de sa meilleure préservation des ultrastructures, ou des fixateurs sans formol pour préserver certains antigènes ou acides nucléiques.",
        },
        {
          type: 'tableau',
          titre: 'Principaux fixateurs utilisés',
          colonnes: ['Fixateur', 'Usage principal', 'Caractéristique'],
          lignes: [
            ['Formol tamponné 10 %', 'Histologie de routine', 'Pénétration lente, bonne conservation morphologique générale'],
            ['Glutaraldéhyde', 'Microscopie électronique', 'Fixation ultrastructurale fine, pénétration très lente'],
            ['Alcool', 'Cytologie, certains antigènes', 'Fixation par déshydratation et précipitation des protéines'],
            ['Liquide de Bouin', 'Certains prélèvements testiculaires', 'Bonne conservation nucléaire, contient de l’acide picrique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un fixateur ne se choisit pas au hasard',
          texte:
            "Le choix du fixateur conditionne les analyses possibles ensuite : un fixateur inadapté peut masquer un épitope recherché en immunohistochimie ou dégrader l’ADN nécessaire à une analyse de biologie moléculaire. Le délai entre le prélèvement et le début de la fixation doit être le plus court possible pour limiter l’autolyse.",
        },
      ],
    },
    {
      id: 'colorations',
      titre: 'Colorations de routine et colorations spéciales',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les tissus fixés et coupés sont naturellement peu contrastés : la coloration révèle les différentes structures grâce à leur affinité variable pour des colorants acides ou basiques. La coloration de routine en France est l’hémalun-éosine-safran, souvent désignée par le sigle HES.",
        },
        {
          type: 'tableau',
          titre: 'Coloration hémalun-éosine-safran (HES)',
          colonnes: ['Colorant', 'Nature', 'Structures colorées'],
          lignes: [
            ['Hémalun', 'Colorant basique', 'Noyaux cellulaires, riches en acides nucléiques acides, colorés en bleu-violet (structures basophiles)'],
            ['Éosine', 'Colorant acide', 'Cytoplasmes et structures riches en protéines basiques, colorés en rose (structures acidophiles ou éosinophiles)'],
            ['Safran', 'Colorant acide', 'Fibres de collagène, colorées en jaune'],
          ],
        },
        {
          type: 'definition',
          terme: 'Basophilie et acidophilie',
          definition:
            "Une structure est dite basophile lorsqu’elle fixe préférentiellement un colorant basique, en raison de sa richesse en groupements acides (acides nucléiques, réticulum endoplasmique granulaire riche en ARN). Elle est dite acidophile ou éosinophile lorsqu’elle fixe un colorant acide, en raison de sa richesse en groupements basiques, comme les protéines cytoplasmiques.",
        },
        {
          type: 'paragraphe',
          texte:
            "D’autres colorations, dites spéciales, mettent en évidence des constituants précis non révélés par l’HES. La réaction à l’acide périodique de Schiff, dite PAS, colore en rose-magenta les glucides complexes : glycogène, mucosécrétions et membranes basales, riches en glycoprotéines.",
        },
        {
          type: 'tableau',
          titre: 'Principales colorations spéciales',
          colonnes: ['Coloration', 'Cible', 'Exemple d’utilisation'],
          lignes: [
            ['PAS (acide périodique de Schiff)', 'Glucides complexes : glycogène, mucus, membranes basales', 'Étude des membranes basales, recherche de glycogène hépatique'],
            ['Trichrome de Masson', 'Fibres collagènes (vert ou bleu), fibres musculaires (rouge)', 'Étude de la fibrose'],
            ['Orcéine, résorcine-fuchsine', 'Fibres élastiques', 'Étude de la paroi artérielle'],
            ['Bleu alcian', 'Mucopolysaccharides acides', 'Étude des mucosécrétions acides'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le code couleur de l’HES',
          texte:
            "Hémalun = bleu-violet = noyau (basophile). Éosine = rose = cytoplasme (acidophile). Safran = jaune = collagène. Cette trilogie de couleurs suffit à interpréter la grande majorité des lames de routine.",
        },
      ],
    },
    {
      id: 'techniques-complementaires',
      titre: 'Techniques complémentaires : immunohistochimie et biologie moléculaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Immunohistochimie',
          definition:
            "Technique qui utilise un anticorps dirigé contre un antigène tissulaire précis, révélé par un système de détection couplé à une enzyme ou à un fluorochrome, afin de localiser précisément une protéine sur une coupe de tissu.",
        },
        {
          type: 'liste',
          items: [
            "L’immunohistochimie repose sur la spécificité de la liaison antigène-anticorps, appliquée directement sur la coupe tissulaire.",
            "La révélation peut être chromogénique, avec un précipité coloré visible en microscopie photonique classique, ou fluorescente, nécessitant un microscope à fluorescence.",
            "Elle permet d’identifier le type cellulaire, de localiser une protéine ou de préciser l’origine d’une tumeur en pratique anatomopathologique.",
            "L’hybridation in situ applique un principe voisin aux acides nucléiques, à l’aide d’une sonde complémentaire d’une séquence d’ADN ou d’ARN recherchée.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple d’application diagnostique',
          texte:
            "En anatomopathologie, l’immunohistochimie permet par exemple de préciser le statut des récepteurs hormonaux dans un cancer du sein, orientant ainsi le choix thérapeutique. Cette utilisation illustre le lien direct entre méthode histologique et décision clinique.",
        },
      ],
    },
    {
      id: 'microscopies',
      titre: 'Microscopie photonique et microscopie électronique',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Microscopie photonique versus microscopie électronique',
          gauche: {
            titre: 'Microscopie photonique',
            points: [
              'Source lumineuse visible, traversant la coupe (microscope à transmission)',
              'Résolution limitée à environ 0,2 micromètre',
              'Coupes en paraffine de quelques micromètres d’épaisseur',
              'Observation en coloration classique, examen de routine',
            ],
          },
          droite: {
            titre: 'Microscopie électronique',
            points: [
              'Faisceau d’électrons, sous vide',
              'Résolution de l’ordre du nanomètre, très supérieure',
              'Coupes ultrafines en résine, fixation au glutaraldéhyde',
              'Étude des ultrastructures : organites, membranes',
            ],
          },
        },
        {
          type: 'paragraphe',
          texte:
            "La microscopie électronique à transmission permet d’observer l’ultrastructure interne des cellules, comme les organites ou les jonctions cellulaires, grâce à un faisceau d’électrons traversant une coupe ultrafine contrastée par des sels de métaux lourds. La microscopie électronique à balayage explore quant à elle le relief de surface d’un échantillon, en détectant les électrons réfléchis par celui-ci.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordres de grandeur à retenir',
          texte:
            "Résolution de l’œil humain : environ 0,1 à 0,2 millimètre. Résolution de la microscopie photonique : environ 0,2 micromètre. Résolution de la microscopie électronique à transmission : de l’ordre du nanomètre, jusqu’à environ 1 000 fois supérieure à celle de la microscopie photonique.",
        },
      ],
    },
    {
      id: 'artefacts-plan-de-coupe',
      titre: 'Artefacts et plan de coupe',
      blocs: [
        {
          type: 'definition',
          terme: 'Artefact',
          definition:
            "Modification de l’aspect tissulaire introduite par la technique de préparation elle-même, et non par un processus pathologique. Reconnaître un artefact évite une interprétation erronée de la lame.",
        },
        {
          type: 'tableau',
          titre: 'Artefacts fréquents et leur origine',
          colonnes: ['Artefact', 'Origine technique'],
          lignes: [
            ['Rétraction cellulaire, espaces clairs péricellulaires', 'Déshydratation par les bains d’alcool successifs'],
            ['Plis, déchirures de la coupe', 'Difficultés de coupe au microtome ou d’étalement sur la lame'],
            ['Autolyse, structures floues', 'Délai trop long entre le prélèvement et la fixation'],
            ['Bulles, décollement du tissu', 'Défaut d’adhérence de la coupe sur la lame lors du montage'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre artefact et lésion',
          texte:
            "Un espace clair artificiel autour d’une cellule, dû à la rétraction pendant la déshydratation, peut mimer un œdème péricellulaire pathologique. La reconnaissance des artefacts classiques est indispensable pour ne pas surinterpréter une image.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le plan de coupe influence également l’aspect observé : une même structure tubulaire apparaît ronde en coupe transversale, allongée en coupe longitudinale, et de forme intermédiaire en coupe oblique. Cette notion est essentielle pour interpréter correctement l’organisation tridimensionnelle d’un tissu à partir d’une coupe bidimensionnelle.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Raisonner en trois dimensions',
          texte:
            "Devant une structure tubulaire coupée transversalement, imaginer le tissu en volume aide à ne pas confondre une coupe oblique d’un tube unique avec plusieurs structures glandulaires distinctes.",
        },
      ],
    },
  ],
  pointsCles: [
    "La chaîne de préparation histologique classique associe fixation, déshydratation, éclaircissement, inclusion en paraffine, coupe et coloration.",
    "Le formol tamponné à 10 % est le fixateur de référence en histologie de routine ; le glutaraldéhyde est préféré pour la microscopie électronique.",
    "La coloration HES associe hémalun (noyaux, bleu-violet), éosine (cytoplasme, rose) et safran (collagène, jaune).",
    "La réaction PAS révèle les glucides complexes : glycogène, mucosécrétions et membranes basales.",
    "L’immunohistochimie localise un antigène précis grâce à un anticorps spécifique, avec des applications diagnostiques directes.",
    "La microscopie électronique offre une résolution de l’ordre du nanomètre, très supérieure à celle de la microscopie photonique.",
    "Un artefact est une modification liée à la technique, à distinguer d’une lésion tissulaire réelle.",
  ],
  erreursFrequentes: [
    "Confondre basophilie et acidophilie : une structure basophile fixe un colorant basique (hémalun), une structure acidophile fixe un colorant acide (éosine).",
    "Croire que le safran colore les noyaux : il colore le collagène en jaune.",
    "Oublier que la microscopie électronique nécessite un fixateur spécifique, le glutaraldéhyde, différent du formol de routine.",
    "Interpréter un artefact de rétraction comme un signe pathologique d’œdème.",
    "Négliger l’influence du plan de coupe sur la forme apparente d’une structure tubulaire ou glandulaire.",
    "Confondre résolution et grossissement : la résolution est la capacité à distinguer deux points voisins, le grossissement est l’agrandissement de l’image.",
  ],
  mnemotechniques: [
    {
      moyen: 'HES : Hémalun-Éosine-Safran, dans l’ordre alphabétique de la couleur',
      explication:
        'Hémalun bleu-violet pour le noyau, Éosine rose pour le cytoplasme, Safran jaune pour le collagène : trois colorants, trois couleurs, trois cibles.',
    },
    {
      moyen: 'PAS pense aux Polysaccharides Après coloration Spécifique',
      explication:
        'La réaction PAS (acide périodique de Schiff) cible les glucides complexes : glycogène, mucus, membranes basales.',
    },
    {
      moyen: 'Fixer vite pour éviter l’autolyse',
      explication:
        'Plus le délai entre prélèvement et fixation est court, moins l’autolyse enzymatique altère la morphologie tissulaire.',
    },
  ],
  sources: [
    'Wheater, Histologie fonctionnelle',
    'Junqueira, Histologie',
    'Poirier, Histologie moléculaire',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'histo-methodes-histologie-fc-01',
      recto: 'Quelles sont les principales étapes de la technique histologique classique en paraffine ?',
      verso: 'Prélèvement, fixation, déshydratation, éclaircissement, inclusion, coupe, coloration.',
      type: 'classification',
      tags: ['technique', 'paraffine'],
    },
    {
      id: 'histo-methodes-histologie-fc-02',
      recto: 'Quel est le fixateur de référence en histologie de routine ?',
      verso: 'Le formol tamponné à 10 %.',
      type: 'definition',
      tags: ['fixation'],
    },
    {
      id: 'histo-methodes-histologie-fc-03',
      recto: 'Quel fixateur est préféré pour la microscopie électronique ?',
      verso: 'Le glutaraldéhyde, qui préserve mieux les ultrastructures.',
      type: 'definition',
      tags: ['fixation', 'microscopie électronique'],
    },
    {
      id: 'histo-methodes-histologie-fc-04',
      recto: 'Que colore l’hémalun, et pourquoi parle-t-on de basophilie ?',
      verso: 'Il colore les noyaux en bleu-violet ; c’est un colorant basique qui se fixe sur les acides nucléiques, structures basophiles.',
      type: 'mecanisme',
      tags: ['coloration', 'HES'],
    },
    {
      id: 'histo-methodes-histologie-fc-05',
      recto: 'Que colore le safran dans la coloration HES ?',
      verso: 'Les fibres de collagène, en jaune.',
      type: 'definition',
      tags: ['coloration', 'HES'],
    },
    {
      id: 'histo-methodes-histologie-fc-06',
      recto: 'Que révèle la réaction PAS ?',
      verso: 'Les glucides complexes : glycogène, mucosécrétions et membranes basales, colorés en rose-magenta.',
      type: 'mecanisme',
      tags: ['PAS', 'coloration spéciale'],
    },
    {
      id: 'histo-methodes-histologie-fc-07',
      recto: 'Sur quel principe repose l’immunohistochimie ?',
      verso: 'La liaison spécifique entre un anticorps et un antigène tissulaire, révélée par un système de détection couplé.',
      type: 'mecanisme',
      tags: ['immunohistochimie'],
    },
    {
      id: 'histo-methodes-histologie-fc-08',
      recto: 'Quelle est la résolution approximative de la microscopie photonique ?',
      verso: 'Environ 0,2 micromètre.',
      type: 'chiffre',
      tags: ['microscopie photonique'],
    },
    {
      id: 'histo-methodes-histologie-fc-09',
      recto: 'Quelle est la résolution approximative de la microscopie électronique à transmission ?',
      verso: 'De l’ordre du nanomètre.',
      type: 'chiffre',
      tags: ['microscopie électronique'],
    },
    {
      id: 'histo-methodes-histologie-fc-10',
      recto: 'Qu’est-ce qu’un artefact en histologie ?',
      verso: 'Une modification de l’aspect tissulaire liée à la technique de préparation, et non à un processus pathologique.',
      type: 'definition',
      tags: ['artefact'],
    },
    {
      id: 'histo-methodes-histologie-fc-11',
      recto: 'Pourquoi une structure tubulaire peut-elle apparaître ronde ou allongée selon la lame ?',
      verso: 'En raison du plan de coupe : coupe transversale (ronde), longitudinale (allongée) ou oblique (forme intermédiaire).',
      type: 'mecanisme',
      tags: ['plan de coupe'],
    },
    {
      id: 'histo-methodes-histologie-fc-12',
      recto: 'Quelle étape précède directement la coupe au microtome dans la technique en paraffine ?',
      verso: 'L’inclusion, c’est-à-dire l’enrobage du tissu dans un bloc de paraffine durci.',
      type: 'classification',
      tags: ['technique', 'inclusion'],
    },
  ],
  qcm: [
    {
      id: 'histo-methodes-histologie-qcm-01',
      enonce: 'Concernant la fixation en histologie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le formol tamponné à 10 % est le fixateur de référence en histologie de routine.',
          vraie: true,
          justification: 'Exact : c’est le fixateur le plus utilisé pour l’histologie standard en paraffine.',
        },
        {
          lettre: 'B',
          texte: 'La fixation a pour but d’accélérer l’autolyse tissulaire.',
          vraie: false,
          justification: 'Faux : la fixation bloque au contraire l’autolyse et la putréfaction.',
        },
        {
          lettre: 'C',
          texte: 'Le glutaraldéhyde est préféré au formol pour la microscopie électronique.',
          vraie: true,
          justification: 'Exact : il assure une meilleure préservation des ultrastructures cellulaires.',
        },
        {
          lettre: 'D',
          texte: 'Un délai prolongé entre le prélèvement et la fixation améliore la qualité morphologique.',
          vraie: false,
          justification: 'Faux : un délai prolongé favorise au contraire l’autolyse et dégrade la morphologie.',
        },
        {
          lettre: 'E',
          texte: 'La fixation stabilise les structures tissulaires en créant des liaisons entre macromolécules.',
          vraie: true,
          justification: 'Exact : le formaldéhyde forme des ponts covalents entre groupements amines des protéines.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir le couple fixateur/technique : formol pour la routine, glutaraldéhyde pour l’électronique.',
      difficulte: 1,
    },
    {
      id: 'histo-methodes-histologie-qcm-02',
      enonce: 'Concernant la coloration hémalun-éosine-safran (HES), quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’hémalun colore les noyaux en bleu-violet.',
          vraie: true,
          justification: 'Exact : colorant basique, il se fixe sur les acides nucléiques du noyau.',
        },
        {
          lettre: 'B',
          texte: 'L’éosine colore préférentiellement les structures basophiles.',
          vraie: false,
          justification: 'Faux : l’éosine, colorant acide, colore les structures acidophiles comme le cytoplasme.',
        },
        {
          lettre: 'C',
          texte: 'Le safran colore les fibres de collagène en jaune.',
          vraie: true,
          justification: 'Exact : c’est la fonction spécifique du safran dans la trilogie HES.',
        },
        {
          lettre: 'D',
          texte: 'Une structure riche en réticulum endoplasmique granulaire est habituellement acidophile.',
          vraie: false,
          justification: 'Faux : le réticulum endoplasmique granulaire, riche en ARN, est plutôt basophile.',
        },
        {
          lettre: 'E',
          texte: 'La coloration HES est la coloration de routine en anatomopathologie française.',
          vraie: true,
          justification: 'Exact : elle est utilisée pour la très grande majorité des examens histologiques standards.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir le code couleur : hémalun bleu-violet, éosine rose, safran jaune.',
      difficulte: 1,
    },
    {
      id: 'histo-methodes-histologie-qcm-03',
      enonce: 'Concernant la réaction PAS et les colorations spéciales, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La réaction PAS met en évidence les glucides complexes.',
          vraie: true,
          justification: 'Exact : glycogène, mucosécrétions et membranes basales sont révélés en rose-magenta.',
        },
        {
          lettre: 'B',
          texte: 'Le trichrome de Masson est utile pour étudier la fibrose.',
          vraie: true,
          justification: 'Exact : il colore distinctement le collagène et les fibres musculaires.',
        },
        {
          lettre: 'C',
          texte: 'L’orcéine colore spécifiquement les fibres élastiques.',
          vraie: true,
          justification: 'Exact : elle est utilisée notamment pour l’étude de la paroi artérielle.',
        },
        {
          lettre: 'D',
          texte: 'Le bleu alcian est utilisé pour révéler les mucopolysaccharides acides.',
          vraie: true,
          justification: 'Exact : il colore les mucosécrétions acides, distinctes du PAS qui révèle plutôt les glucides neutres et les membranes basales.',
        },
        {
          lettre: 'E',
          texte: 'La réaction PAS remplace systématiquement la coloration HES en routine.',
          vraie: false,
          justification: 'Faux : la PAS est une coloration complémentaire, ciblée, non une coloration de routine générale.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et D. Les colorations spéciales ciblent chacune une structure précise, en complément de l’HES.',
      difficulte: 2,
    },
    {
      id: 'histo-methodes-histologie-qcm-04',
      enonce: 'Concernant l’immunohistochimie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle repose sur la liaison spécifique entre un antigène tissulaire et un anticorps.',
          vraie: true,
          justification: 'Exact : c’est le principe fondamental de la technique.',
        },
        {
          lettre: 'B',
          texte: 'Elle permet de localiser précisément une protéine sur une coupe tissulaire.',
          vraie: true,
          justification: 'Exact : c’est l’intérêt majeur de la technique par rapport à un dosage biochimique global.',
        },
        {
          lettre: 'C',
          texte: 'Sa révélation ne peut être que fluorescente.',
          vraie: false,
          justification: 'Faux : la révélation peut être chromogénique, avec un précipité coloré visible en microscopie photonique classique, ou fluorescente.',
        },
        {
          lettre: 'D',
          texte: 'Elle peut avoir un intérêt diagnostique direct, par exemple pour les récepteurs hormonaux d’une tumeur.',
          vraie: true,
          justification: 'Exact : elle oriente notamment la prise en charge thérapeutique en cancérologie.',
        },
        {
          lettre: 'E',
          texte: 'L’hybridation in situ repose sur le même principe de complémentarité qu’une réaction antigène-anticorps.',
          vraie: false,
          justification: 'Faux : l’hybridation in situ repose sur la complémentarité entre une sonde et une séquence d’acide nucléique, non sur une réaction antigène-anticorps.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. L’immunohistochimie cible des protéines via des anticorps ; l’hybridation in situ cible des acides nucléiques via des sondes.',
      difficulte: 2,
    },
    {
      id: 'histo-methodes-histologie-qcm-05',
      enonce: 'Concernant la microscopie photonique et la microscopie électronique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La microscopie photonique utilise un faisceau d’électrons.',
          vraie: false,
          justification: 'Faux : elle utilise une source de lumière visible ; le faisceau d’électrons caractérise la microscopie électronique.',
        },
        {
          lettre: 'B',
          texte: 'La résolution de la microscopie électronique est de l’ordre du nanomètre.',
          vraie: true,
          justification: 'Exact, très supérieure à la résolution de la microscopie photonique.',
        },
        {
          lettre: 'C',
          texte: 'Les coupes destinées à la microscopie électronique sont incluses en paraffine, comme en routine.',
          vraie: false,
          justification: 'Faux : elles sont incluses en résine, après fixation au glutaraldéhyde, pour permettre des coupes ultrafines.',
        },
        {
          lettre: 'D',
          texte: 'La microscopie électronique à balayage explore le relief de surface d’un échantillon.',
          vraie: true,
          justification: 'Exact, contrairement à la microscopie électronique à transmission qui étudie l’ultrastructure interne.',
        },
        {
          lettre: 'E',
          texte: 'La microscopie photonique reste la technique de choix pour l’examen de routine en anatomopathologie.',
          vraie: true,
          justification: 'Exact : elle est plus rapide, moins coûteuse et suffisante pour la grande majorité des diagnostics courants.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Retenir l’opposition résolution/praticité entre les deux microscopies.',
      difficulte: 2,
    },
    {
      id: 'histo-methodes-histologie-qcm-06',
      enonce: 'Concernant les artefacts et le plan de coupe, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un artefact correspond toujours à une lésion pathologique réelle.',
          vraie: false,
          justification: 'Faux : un artefact est par définition lié à la technique de préparation, non à un processus pathologique.',
        },
        {
          lettre: 'B',
          texte: 'La rétraction cellulaire liée à la déshydratation peut mimer un œdème péricellulaire.',
          vraie: true,
          justification: 'Exact : c’est un piège classique d’interprétation.',
        },
        {
          lettre: 'C',
          texte: 'Une même structure tubulaire peut apparaître ronde ou allongée selon le plan de coupe.',
          vraie: true,
          justification: 'Exact : coupe transversale (ronde), longitudinale (allongée), oblique (forme intermédiaire).',
        },
        {
          lettre: 'D',
          texte: 'Des plis ou des déchirures sur la coupe traduisent nécessairement une nécrose tissulaire.',
          vraie: false,
          justification: 'Faux : ce sont des artefacts techniques liés à la coupe au microtome ou à l’étalement, non une nécrose.',
        },
        {
          lettre: 'E',
          texte: 'Reconnaître les artefacts classiques évite une interprétation diagnostique erronée.',
          vraie: true,
          justification: 'Exact : c’est l’intérêt principal de leur connaissance en pratique.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Toujours distinguer artefact technique et lésion tissulaire authentique.',
      difficulte: 1,
    },
  ],
};
