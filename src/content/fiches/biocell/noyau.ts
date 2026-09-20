import type { Fiche } from '../../types';

export const ficheNoyau: Fiche = {
  id: 'biocell-noyau',
  ue: 'biocell',
  titre: 'Le noyau',
  sousTitre: 'Enveloppe nucléaire, pores nucléaires, transport nucléocytoplasmique, lamina, nucléole et organisation de la chromatine',
  chapitre: 'Compartiments et trafic',
  ordre: 6,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'enveloppe nucléaire',
    'pore nucléaire',
    'importine',
    'exportine',
    'lamina nucléaire',
    'nucléole',
    'euchromatine',
    'hétérochromatine',
  ],
  objectifs: [
    'Décrire la structure de l’enveloppe nucléaire et du complexe du pore nucléaire.',
    'Expliquer le principe du transport nucléocytoplasmique actif des protéines et de l’ARN.',
    'Décrire la composition et le rôle de la lamina nucléaire.',
    'Expliquer la structure et la fonction du nucléole.',
    'Différencier euchromatine et hétérochromatine, et décrire les niveaux d’organisation de la chromatine.',
  ],
  sections: [
    {
      id: 'enveloppe-nucleaire',
      titre: 'L’enveloppe nucléaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le noyau est l’organite qui contient le matériel génétique de la cellule eucaryote. Il est délimité par l’enveloppe nucléaire, une double membrane continue avec le réticulum endoplasmique, qui sépare le nucléoplasme du cytoplasme.",
        },
        {
          type: 'tableau',
          titre: 'Les deux membranes de l’enveloppe nucléaire',
          colonnes: ['Membrane', 'Caractéristique'],
          lignes: [
            ['Membrane nucléaire externe', 'En continuité directe avec le réticulum endoplasmique ; peut porter des ribosomes'],
            ['Membrane nucléaire interne', 'Tapissée sur sa face nucléoplasmique par la lamina nucléaire'],
          ],
        },
        {
          type: 'definition',
          terme: 'Espace périnucléaire',
          definition:
            "Espace compris entre les membranes nucléaires externe et interne, en continuité avec la lumière du réticulum endoplasmique.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une frontière traversée par des pores',
          texte:
            "L’enveloppe nucléaire est percée de nombreux pores nucléaires, structures qui permettent les échanges régulés entre nucléoplasme et cytoplasme et constituent les seuls points de continuité entre les deux membranes de l’enveloppe.",
        },
      ],
    },
    {
      id: 'complexe-pore-nucleaire',
      titre: 'Le complexe du pore nucléaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le complexe du pore nucléaire est un assemblage protéique de grande taille, formé de plusieurs dizaines de protéines différentes, appelées nucléoporines, organisées avec une symétrie d’ordre huit autour d’un canal central.",
        },
        {
          type: 'liste',
          items: [
            "Les petites molécules et les ions diffusent librement à travers le pore nucléaire par diffusion passive.",
            "Les macromolécules de grande taille, comme la plupart des protéines nucléaires et les ARN, nécessitent un transport actif, sélectif et énergie-dépendant.",
            "Des filaments protéiques fibrillaires s’étendent du côté cytoplasmique et du côté nucléoplasmique du pore ; ces derniers forment une structure en panier caractéristique.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Nombre de pores nucléaires',
          texte:
            "Le nombre de pores nucléaires par noyau varie fortement selon le type et l’activité de la cellule, pouvant atteindre plusieurs milliers dans les cellules très actives sur le plan transcriptionnel.",
        },
      ],
    },
    {
      id: 'transport-nucleocytoplasmique',
      titre: 'Le transport nucléocytoplasmique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’importation et l’exportation des macromolécules à travers le pore nucléaire reposent sur la reconnaissance de séquences signal spécifiques par des récepteurs solubles de la famille des importines et des exportines, et sur un gradient du GTPase Ran qui confère une directionnalité au transport.",
        },
        {
          type: 'etapes',
          titre: 'Principe de l’importation nucléaire d’une protéine',
          etapes: [
            {
              titre: 'Reconnaissance du signal de localisation nucléaire',
              detail: "Une importine reconnaît, dans le cytoplasme, une séquence signal de localisation nucléaire (NLS) portée par la protéine à importer.",
            },
            {
              titre: 'Translocation à travers le pore',
              detail: "Le complexe importine-cargo traverse le pore nucléaire par interactions successives avec les nucléoporines.",
            },
            {
              titre: 'Dissociation dans le nucléoplasme',
              detail: "Dans le nucléoplasme, la fixation de Ran-GTP sur l’importine provoque la libération de la protéine transportée.",
            },
            {
              titre: 'Recyclage de l’importine',
              detail: "Le complexe importine-Ran-GTP retourne dans le cytoplasme, où l’hydrolyse du GTP par Ran libère l’importine, prête pour un nouveau cycle.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un gradient de Ran-GTP qui donne le sens du transport',
          texte:
            "La concentration de Ran-GTP est élevée dans le nucléoplasme et faible dans le cytoplasme, où Ran est majoritairement sous forme Ran-GDP. Ce gradient asymétrique, entretenu par des régulateurs spécifiques de Ran, confère sa directionnalité au transport nucléocytoplasmique : il favorise la dissociation des complexes d’importation dans le noyau et la formation des complexes d’exportation dans le noyau.",
        },
        {
          type: 'definition',
          terme: 'Séquence de localisation nucléaire (NLS)',
          definition:
            "Courte séquence d’acides aminés, riche en résidus basiques (lysine, arginine), portée par les protéines destinées au noyau et reconnue par les importines.",
        },
      ],
    },
    {
      id: 'lamina-nucleaire',
      titre: 'La lamina nucléaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La lamina nucléaire est un réseau fibreux dense de filaments intermédiaires, situé à la face interne de la membrane nucléaire interne, formé principalement de protéines appelées lamines.",
        },
        {
          type: 'liste',
          items: [
            "Elle confère une résistance mécanique à l’enveloppe nucléaire et participe à sa forme et à son intégrité structurale.",
            "Elle sert de point d’ancrage à certaines régions de la chromatine, en particulier de l’hétérochromatine, souvent localisée en périphérie du noyau.",
            "Lors de la mitose, la phosphorylation des lamines par des kinases spécifiques entraîne leur dépolymérisation et la fragmentation transitoire de l’enveloppe nucléaire.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Laminopathies',
          texte:
            "Certaines mutations du gène codant la lamine A/C sont responsables de maladies appelées laminopathies, dont le spectre clinique inclut des dystrophies musculaires et des syndromes de vieillissement prématuré, illustrant le rôle structural essentiel de la lamina nucléaire.",
        },
      ],
    },
    {
      id: 'nucleole',
      titre: 'Le nucléole',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le nucléole est une structure intranucléaire dépourvue de membrane propre, visible en microscopie optique, qui correspond au site principal de transcription des gènes d’ARN ribosomique et d’assemblage initial des sous-unités ribosomiques.",
        },
        {
          type: 'definition',
          terme: 'Organisateur nucléolaire',
          definition:
            "Région chromosomique contenant les gènes répétés codant l’ARN ribosomique, autour de laquelle s’organise le nucléole.",
        },
        {
          type: 'liste',
          items: [
            "L’ARN polymérase I transcrit dans le nucléole les gènes d’ARN ribosomique, à l’exception de l’ARN ribosomique 5S transcrit par l’ARN polymérase III.",
            "Les protéines ribosomiques, synthétisées dans le cytoplasme, sont importées dans le nucléole pour s’assembler avec les ARN ribosomiques.",
            "Les sous-unités ribosomiques préassemblées sont exportées vers le cytoplasme à travers les pores nucléaires, où s’achève leur maturation.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le nucléole disparaît en mitose',
          texte:
            "Le nucléole se désorganise en début de mitose, lorsque la transcription cesse, et se reforme en télophase autour des organisateurs nucléolaires des chromosomes filles.",
        },
      ],
    },
    {
      id: 'organisation-chromatine',
      titre: 'L’organisation de la chromatine',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La chromatine est l’association de l’ADN et de protéines, principalement des histones, qui permet de compacter les très longues molécules d’ADN dans le volume restreint du noyau tout en régulant l’accessibilité des gènes.",
        },
        {
          type: 'tableau',
          titre: 'Euchromatine et hétérochromatine',
          colonnes: ['Caractéristique', 'Euchromatine', 'Hétérochromatine'],
          lignes: [
            ['Degré de compaction', 'Peu condensée', 'Fortement condensée'],
            ['Activité transcriptionnelle', 'Généralement active', 'Généralement silencieuse'],
            ['Localisation habituelle dans le noyau', 'Plutôt centrale', 'Plutôt périphérique, près de la lamina'],
            ['Affinité pour les colorants basiques', 'Faible (pâle en microscopie)', 'Forte (dense en microscopie)'],
          ],
        },
        {
          type: 'etapes',
          titre: 'Niveaux successifs de compaction de la chromatine',
          etapes: [
            {
              titre: 'Nucléosome',
              detail: "Unité de base : environ 146 paires de bases d’ADN enroulées autour d’un octamère d’histones (deux copies de chacune des histones H2A, H2B, H3 et H4).",
            },
            {
              titre: 'Fibre de chromatine de 30 nanomètres',
              detail: "Les nucléosomes s’enroulent en une fibre plus compacte, stabilisée notamment par l’histone de liaison H1.",
            },
            {
              titre: 'Boucles et domaines chromosomiques',
              detail: "La fibre de chromatine s’organise en boucles ancrées sur une charpente protéique, formant des domaines de plus en plus compacts.",
            },
            {
              titre: 'Chromosome métaphasique',
              detail: "Au maximum de condensation, visible en métaphase de mitose, correspondant au niveau de compaction le plus élevé de la chromatine.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Deux types d’hétérochromatine',
          texte:
            "On distingue l’hétérochromatine constitutive, définitivement condensée et transcriptionnellement inactive dans toutes les cellules (comme l’ADN péricentromérique), de l’hétérochromatine facultative, dont la condensation est réversible et varie selon le type cellulaire ou le stade de développement (comme le corpuscule de Barr, correspondant à l’un des deux chromosomes X inactivés chez la femme).",
        },
      ],
    },
  ],
  pointsCles: [
    "L’enveloppe nucléaire est une double membrane en continuité avec le réticulum endoplasmique, percée de pores nucléaires.",
    "Le complexe du pore nucléaire, formé de nucléoporines, laisse diffuser librement les petites molécules mais impose un transport actif aux macromolécules.",
    "Le transport nucléocytoplasmique actif dépend des importines, des exportines et du gradient de Ran-GTP entre noyau et cytoplasme.",
    "La lamina nucléaire, réseau de lamines, soutient mécaniquement l’enveloppe nucléaire et ancre l’hétérochromatine périphérique.",
    "Le nucléole est le site de transcription des gènes d’ARN ribosomique et d’assemblage initial des sous-unités ribosomiques.",
    "L’euchromatine, peu condensée, est en général transcriptionnellement active ; l’hétérochromatine, très condensée, est en général silencieuse.",
    "Le nucléosome, unité de base de la chromatine, associe environ 146 paires de bases d’ADN à un octamère d’histones.",
  ],
  erreursFrequentes: [
    "Croire que l’enveloppe nucléaire est une membrane unique : elle est formée de deux membranes séparées par l’espace périnucléaire.",
    "Penser que toutes les molécules traversent le pore nucléaire par diffusion libre : seules les petites molécules le font, les macromolécules nécessitant un transport actif.",
    "Inverser le rôle des importines et des exportines dans le transport nucléocytoplasmique.",
    "Oublier le rôle directionnel du gradient de Ran-GTP entre noyau (concentration élevée) et cytoplasme (concentration faible).",
    "Confondre lamina nucléaire (filaments intermédiaires de lamines) et lame basale (matrice extracellulaire), deux structures homonymes mais totalement différentes.",
    "Considérer l’hétérochromatine facultative comme définitivement silencieuse : sa condensation est réversible, contrairement à l’hétérochromatine constitutive.",
  ],
  mnemotechniques: [
    {
      moyen: '« IMPortine IMPorte »',
      explication: 'L’importine transporte les protéines du cytoplasme vers le noyau (importation), reconnaissant la séquence NLS.',
    },
    {
      moyen: '« Ran-GTP au noyau, comme un aimant qui attire »',
      explication: 'La forte concentration de Ran-GTP dans le noyau dissocie les complexes d’importation, donnant sa direction au transport.',
    },
    {
      moyen: '« Hétéro = à l’écart »',
      explication: 'L’hétérochromatine, condensée et silencieuse, est en général localisée à la périphérie du noyau, à l’écart, près de la lamina.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Pollard, Earnshaw, Lippincott-Schwartz, Biologie cellulaire, 3e édition',
    'Lodish, Biologie moléculaire de la cellule',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'biocell-noyau-fc-01',
      recto: 'Avec quel organite l’enveloppe nucléaire est-elle en continuité ?',
      verso: 'Le réticulum endoplasmique, via sa membrane nucléaire externe.',
      type: 'definition',
      tags: ['enveloppe nucléaire'],
    },
    {
      id: 'biocell-noyau-fc-02',
      recto: 'Comment appelle-t-on les protéines qui composent le complexe du pore nucléaire ?',
      verso: 'Les nucléoporines.',
      type: 'definition',
      tags: ['pore nucléaire'],
    },
    {
      id: 'biocell-noyau-fc-03',
      recto: 'Que reconnaît une importine sur une protéine destinée au noyau ?',
      verso: 'Une séquence de localisation nucléaire (NLS), riche en résidus basiques.',
      type: 'mecanisme',
      tags: ['importine', 'NLS'],
    },
    {
      id: 'biocell-noyau-fc-04',
      recto: 'Où la concentration de Ran-GTP est-elle la plus élevée ?',
      verso: 'Dans le nucléoplasme, ce qui donne sa direction au transport nucléocytoplasmique.',
      type: 'mecanisme',
      tags: ['Ran-GTP'],
    },
    {
      id: 'biocell-noyau-fc-05',
      recto: 'De quoi est composée la lamina nucléaire ?',
      verso: 'D’un réseau de filaments intermédiaires appelés lamines, à la face interne de la membrane nucléaire interne.',
      type: 'definition',
      tags: ['lamina nucléaire'],
    },
    {
      id: 'biocell-noyau-fc-06',
      recto: 'Que provoque la phosphorylation des lamines en début de mitose ?',
      verso: 'Leur dépolymérisation, entraînant la fragmentation transitoire de l’enveloppe nucléaire.',
      type: 'mecanisme',
      tags: ['lamines', 'mitose'],
    },
    {
      id: 'biocell-noyau-fc-07',
      recto: 'Quelle ARN polymérase transcrit la majorité des gènes d’ARN ribosomique dans le nucléole ?',
      verso: 'L’ARN polymérase I.',
      type: 'mecanisme',
      tags: ['nucléole', 'transcription'],
    },
    {
      id: 'biocell-noyau-fc-08',
      recto: 'Que devient le nucléole au cours de la mitose ?',
      verso: 'Il se désorganise en début de mitose et se reforme en télophase autour des organisateurs nucléolaires.',
      type: 'mecanisme',
      tags: ['nucléole', 'mitose'],
    },
    {
      id: 'biocell-noyau-fc-09',
      recto: 'Combien de paires de bases d’ADN s’enroulent autour d’un nucléosome ?',
      verso: 'Environ 146 paires de bases, autour d’un octamère d’histones.',
      type: 'chiffre',
      tags: ['nucléosome', 'chromatine'],
    },
    {
      id: 'biocell-noyau-fc-10',
      recto: 'Quelle est la différence entre euchromatine et hétérochromatine ?',
      verso: 'L’euchromatine est peu condensée et en général active ; l’hétérochromatine est fortement condensée et en général silencieuse.',
      type: 'classification',
      tags: ['euchromatine', 'hétérochromatine'],
    },
    {
      id: 'biocell-noyau-fc-11',
      recto: 'Qu’est-ce que le corpuscule de Barr ?',
      verso: 'La forme condensée d’hétérochromatine facultative correspondant à l’un des deux chromosomes X inactivés chez la femme.',
      type: 'clinique',
      tags: ['corpuscule de Barr', 'hétérochromatine'],
    },
    {
      id: 'biocell-noyau-fc-12',
      recto: 'Quelles histones composent l’octamère du nucléosome ?',
      verso: 'Deux copies chacune des histones H2A, H2B, H3 et H4.',
      type: 'formule',
      tags: ['nucléosome', 'histones'],
    },
  ],
  qcm: [
    {
      id: 'biocell-noyau-qcm-01',
      enonce: 'Concernant l’enveloppe nucléaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est formée d’une membrane unique.', vraie: false, justification: 'Elle est formée de deux membranes, externe et interne, séparées par l’espace périnucléaire.' },
        { lettre: 'B', texte: 'Sa membrane externe est en continuité avec le réticulum endoplasmique.', vraie: true, justification: 'Elle peut d’ailleurs porter des ribosomes, comme le réticulum endoplasmique rugueux.' },
        { lettre: 'C', texte: 'L’espace périnucléaire communique avec la lumière du réticulum endoplasmique.', vraie: true, justification: 'C’est une conséquence directe de la continuité entre les deux membranes.' },
        { lettre: 'D', texte: 'La lamina nucléaire tapisse la membrane nucléaire externe.', vraie: false, justification: 'La lamina nucléaire tapisse la face interne de la membrane nucléaire interne.' },
        { lettre: 'E', texte: 'Les pores nucléaires sont les seuls points de continuité entre les deux membranes de l’enveloppe.', vraie: true, justification: 'C’est au niveau du pore que les membranes externe et interne se rejoignent.' },
      ],
      correction: 'Réponses exactes : B, C et E. Bien localiser la lamina sur la membrane interne, et non externe.',
      difficulte: 2,
    },
    {
      id: 'biocell-noyau-qcm-02',
      enonce: 'Concernant le complexe du pore nucléaire et le transport nucléocytoplasmique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Toutes les protéines traversent le pore nucléaire par simple diffusion.', vraie: false, justification: 'Seules les petites molécules diffusent librement ; les macromolécules nécessitent un transport actif.' },
        { lettre: 'B', texte: 'Les importines reconnaissent une séquence de localisation nucléaire.', vraie: true, justification: 'C’est le mécanisme de reconnaissance qui initie l’importation nucléaire.' },
        { lettre: 'C', texte: 'La concentration de Ran-GTP est plus élevée dans le cytoplasme que dans le noyau.', vraie: false, justification: 'C’est l’inverse : la concentration de Ran-GTP est plus élevée dans le nucléoplasme.' },
        { lettre: 'D', texte: 'Le gradient de Ran-GTP confère sa directionnalité au transport nucléocytoplasmique.', vraie: true, justification: 'Il détermine où se forment et se dissocient les complexes de transport.' },
        { lettre: 'E', texte: 'Le complexe du pore nucléaire est constitué de nucléoporines.', vraie: true, justification: 'Ce sont les protéines qui composent l’ensemble du complexe du pore.' },
      ],
      correction: 'Réponses exactes : B, D et E. Retenir que le gradient de Ran-GTP est élevé dans le noyau, faible dans le cytoplasme.',
      difficulte: 2,
    },
    {
      id: 'biocell-noyau-qcm-03',
      enonce: 'Concernant la lamina nucléaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est composée de filaments intermédiaires appelés lamines.', vraie: true, justification: 'Les lamines sont une famille spécifique de filaments intermédiaires nucléaires.' },
        { lettre: 'B', texte: 'Elle est identique à la lame basale de la matrice extracellulaire.', vraie: false, justification: 'Ce sont deux structures distinctes portant un nom proche mais de nature et de localisation différentes.' },
        { lettre: 'C', texte: 'Elle peut servir de point d’ancrage à l’hétérochromatine périphérique.', vraie: true, justification: 'De nombreuses régions d’hétérochromatine sont associées à la lamina nucléaire.' },
        { lettre: 'D', texte: 'Des mutations du gène de la lamine A/C peuvent être responsables de laminopathies.', vraie: true, justification: 'Ces mutations sont associées notamment à des dystrophies musculaires et des syndromes de vieillissement prématuré.' },
        { lettre: 'E', texte: 'Elle se renforce en début de mitose.', vraie: false, justification: 'Elle se dépolymérise en début de mitose, sous l’effet de la phosphorylation des lamines.' },
      ],
      correction: 'Réponses exactes : A, C et D. Ne pas confondre lamina nucléaire et lame basale.',
      difficulte: 2,
    },
    {
      id: 'biocell-noyau-qcm-04',
      enonce: 'Concernant le nucléole, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est entouré d’une membrane propre.', vraie: false, justification: 'Le nucléole est une structure intranucléaire dépourvue de membrane propre.' },
        { lettre: 'B', texte: 'Il est le principal site de transcription des gènes d’ARN ribosomique.', vraie: true, justification: 'C’est sa fonction caractéristique, autour des organisateurs nucléolaires.' },
        { lettre: 'C', texte: 'Les sous-unités ribosomiques y sont complètement matures avant leur export.', vraie: false, justification: 'Leur maturation s’achève dans le cytoplasme après export à travers les pores nucléaires.' },
        { lettre: 'D', texte: 'L’ARN polymérase I y transcrit la majorité des ARN ribosomiques.', vraie: true, justification: 'Seul l’ARN ribosomique 5S est transcrit par l’ARN polymérase III, ailleurs dans le noyau.' },
        { lettre: 'E', texte: 'Il se reforme en télophase de mitose.', vraie: true, justification: 'Il se réorganise autour des organisateurs nucléolaires des chromosomes filles.' },
      ],
      correction: 'Réponses exactes : B, D et E. Retenir que la maturation ribosomique s’achève dans le cytoplasme, non dans le nucléole.',
      difficulte: 2,
    },
    {
      id: 'biocell-noyau-qcm-05',
      enonce: 'Concernant l’organisation de la chromatine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le nucléosome associe l’ADN à un octamère d’histones.', vraie: true, justification: 'C’est l’unité de base de la compaction de la chromatine.' },
        { lettre: 'B', texte: 'L’histone H1 participe à la formation de la fibre de chromatine de 30 nanomètres.', vraie: true, justification: 'Cette histone de liaison stabilise l’enroulement des nucléosomes entre eux.' },
        { lettre: 'C', texte: 'L’euchromatine est en général plus condensée que l’hétérochromatine.', vraie: false, justification: 'C’est l’inverse : l’euchromatine est peu condensée, l’hétérochromatine fortement condensée.' },
        { lettre: 'D', texte: 'Le chromosome métaphasique correspond au niveau de compaction maximal de la chromatine.', vraie: true, justification: 'C’est le niveau d’organisation le plus condensé, observé lors de la mitose.' },
        { lettre: 'E', texte: 'L’hétérochromatine facultative est définitivement inactive dans toutes les cellules.', vraie: false, justification: 'Sa condensation est réversible et varie selon le type cellulaire, contrairement à l’hétérochromatine constitutive.' },
      ],
      correction: 'Réponses exactes : A, B et D. Bien distinguer hétérochromatine constitutive (toujours inactive) et facultative (réversible).',
      difficulte: 2,
    },
    {
      id: 'biocell-noyau-qcm-06',
      enonce: 'Concernant le transport nucléocytoplasmique et les échanges à travers l’enveloppe nucléaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les petites molécules diffusent librement à travers le pore nucléaire.', vraie: true, justification: 'Seules les macromolécules nécessitent un transport actif, sélectif.' },
        { lettre: 'B', texte: 'Les exportines transportent des macromolécules du noyau vers le cytoplasme.', vraie: true, justification: 'C’est le rôle symétrique des exportines par rapport aux importines.' },
        { lettre: 'C', texte: 'Le transport à travers le pore nucléaire est indépendant de l’énergie cellulaire.', vraie: false, justification: 'Il dépend du cycle de Ran-GTP/Ran-GDP, donc indirectement de l’hydrolyse du GTP, et consomme de l’énergie.' },
        { lettre: 'D', texte: 'Une séquence de localisation nucléaire est riche en résidus basiques comme la lysine et l’arginine.', vraie: true, justification: 'C’est une caractéristique constante des séquences NLS classiques.' },
        { lettre: 'E', texte: 'Le nombre de pores nucléaires est strictement identique dans toutes les cellules eucaryotes.', vraie: false, justification: 'Il varie fortement selon le type cellulaire et son activité transcriptionnelle.' },
      ],
      correction: 'Réponses exactes : A, B et D. Le transport nucléocytoplasmique actif consomme de l’énergie via le cycle de Ran.',
      difficulte: 2,
    },
  ],
};
