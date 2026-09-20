import type { Fiche } from '../../types';

export const ficheCytosquelette: Fiche = {
  id: 'biocell-cytosquelette',
  ue: 'biocell',
  titre: 'Le cytosquelette',
  sousTitre: 'Microfilaments d’actine, filaments intermédiaires, microtubules, centrosome, moteurs moléculaires, cils et flagelles',
  chapitre: 'Compartiments et trafic',
  ordre: 5,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'actine',
    'filament intermédiaire',
    'microtubule',
    'centrosome',
    'kinésine',
    'dynéine',
    'myosine',
    'cil',
    'flagelle',
  ],
  objectifs: [
    'Comparer la structure et les propriétés des trois familles de filaments du cytosquelette.',
    'Décrire la polymérisation dynamique de l’actine et des microtubules.',
    'Situer le rôle du centrosome dans l’organisation des microtubules.',
    'Expliquer le fonctionnement des moteurs moléculaires associés à l’actine et aux microtubules.',
    'Décrire la structure axonémale des cils et des flagelles et leur mécanisme de battement.',
  ],
  sections: [
    {
      id: 'organisation-generale',
      titre: 'Organisation générale du cytosquelette',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cytosquelette est un réseau dynamique de protéines fibreuses qui occupe le cytoplasme des cellules eucaryotes. Il assure le maintien de la forme cellulaire, la répartition et le déplacement des organites, la division cellulaire et, pour certaines cellules, la motilité.",
        },
        {
          type: 'tableau',
          titre: 'Les trois familles de filaments du cytosquelette',
          colonnes: ['Filament', 'Sous-unité', 'Diamètre approximatif', 'Polarité'],
          lignes: [
            ['Microfilaments d’actine', 'Actine globulaire (G-actine)', '7 nanomètres', 'Polarisés (extrémité + et extrémité -)'],
            ['Filaments intermédiaires', 'Protéines variées selon le type cellulaire (kératines, vimentine, lamines…)', '10 nanomètres', 'Non polarisés'],
            ['Microtubules', 'Dimères de tubuline alpha et bêta', '25 nanomètres', 'Polarisés (extrémité + et extrémité -)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un réseau dynamique, non figé',
          texte:
            "À l’exception des filaments intermédiaires, les microfilaments d’actine et les microtubules sont des polymères dynamiques, capables de s’allonger et de se raccourcir rapidement par addition ou retrait de sous-unités, ce qui permet des réorganisations rapides du cytosquelette.",
        },
      ],
    },
    {
      id: 'microfilaments-actine',
      titre: 'Les microfilaments d’actine',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les microfilaments d’actine résultent de la polymérisation de monomères d’actine globulaire (G-actine) en un filament hélicoïdal appelé actine filamenteuse (F-actine). Chaque monomère porte un site de liaison à l’ATP dont l’hydrolyse module la stabilité du filament.",
        },
        {
          type: 'liste',
          items: [
            "Le filament d’actine est polarisé : l’extrémité barbée, ou extrémité +, croît plus rapidement que l’extrémité pointue, ou extrémité -.",
            "La polymérisation nécessite une phase de nucléation, cinétiquement défavorable, souvent facilitée par des protéines nucléatrices comme le complexe Arp2/3 ou les formines.",
            "Des protéines régulatrices modulent la dynamique de l’actine : la profiline favorise l’addition de monomères, la cofiline favorise la dépolymérisation, et la gelsoline peut sectionner les filaments.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Diamètre et rôle du cortex',
          texte:
            "Le microfilament d’actine mesure environ 7 nanomètres de diamètre. Un réseau dense d’actine, le cortex cellulaire, tapisse la face interne de la membrane plasmique et détermine notamment la forme des microvillosités et des lamellipodes lors de la migration cellulaire.",
        },
        {
          type: 'definition',
          terme: 'Microvillosité',
          definition:
            "Extension digitiforme de la membrane apicale soutenue par un faisceau parallèle de microfilaments d’actine, augmentant la surface d’échange, en particulier au niveau de l’épithélium intestinal (bordure en brosse).",
        },
      ],
    },
    {
      id: 'filaments-intermediaires',
      titre: 'Les filaments intermédiaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les filaments intermédiaires forment un réseau non polarisé, mécaniquement résistant, composé de protéines fibreuses différentes selon le type cellulaire. Contrairement à l’actine et aux microtubules, ils ne fixent ni n’hydrolysent de nucléotide et sont beaucoup moins dynamiques.",
        },
        {
          type: 'tableau',
          titre: 'Principaux types de filaments intermédiaires',
          colonnes: ['Type de protéine', 'Localisation cellulaire'],
          lignes: [
            ['Kératines', 'Cellules épithéliales (kératinocytes notamment)'],
            ['Vimentine', 'Cellules d’origine mésenchymateuse'],
            ['Desmine', 'Cellules musculaires'],
            ['Neurofilaments', 'Neurones (axones notamment)'],
            ['Lamines', 'Face interne de l’enveloppe nucléaire, dans toutes les cellules eucaryotes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Rôle purement mécanique',
          texte:
            "À la différence de l’actine et des microtubules, les filaments intermédiaires n’interviennent pas dans le transport intracellulaire ni dans la division cellulaire : leur rôle est essentiellement mécanique, en conférant une résistance à la tension aux cellules et aux tissus.",
        },
      ],
    },
    {
      id: 'microtubules-centrosome',
      titre: 'Microtubules et centrosome',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les microtubules sont des polymères creux formés de treize protofilaments, chacun constitué d’une succession de dimères de tubuline alpha et bêta. Comme l’actine, ils sont polarisés et présentent une dynamique d’instabilité, avec alternance de phases de croissance et de raccourcissement rapide.",
        },
        {
          type: 'definition',
          terme: 'Centrosome',
          definition:
            "Principal centre organisateur des microtubules de la cellule animale, formé de deux centrioles disposés perpendiculairement et entourés de matériel péricentriolaire. Il ancre l’extrémité - des microtubules, dont l’extrémité + croît vers la périphérie cellulaire.",
        },
        {
          type: 'liste',
          items: [
            "La sous-unité bêta de la tubuline fixe et hydrolyse le GTP, ce qui module la stabilité du microtubule : un microtubule coiffé de tubuline-GTP est stable, tandis que la perte de cette coiffe déclenche une dépolymérisation rapide (catastrophe).",
            "Le centrosome se dédouble avant la mitose, ce qui permet la formation des deux pôles du fuseau mitotique.",
            "Chaque centriole est formé de neuf triplets de microtubules disposés en cercle, une architecture partagée avec le corpuscule basal des cils et des flagelles.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre centriole et centrosome',
          texte:
            "Le centrosome est la structure globale, composée de deux centrioles et de matériel péricentriolaire ; le centriole est l’un des deux cylindres de microtubules qui le composent. Un centrosome contient donc toujours deux centrioles chez une cellule en interphase normale.",
        },
      ],
    },
    {
      id: 'moteurs-moleculaires',
      titre: 'Les moteurs moléculaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les moteurs moléculaires sont des protéines motrices qui convertissent l’énergie de l’hydrolyse de l’ATP en mouvement mécanique le long des filaments du cytosquelette, assurant le transport intracellulaire d’organites et de vésicules.",
        },
        {
          type: 'tableau',
          titre: 'Principaux moteurs moléculaires',
          colonnes: ['Moteur', 'Filament associé', 'Sens de déplacement usuel'],
          lignes: [
            ['Myosines', 'Microfilaments d’actine', 'Vers l’extrémité + (myosine de type V, par exemple)'],
            ['Kinésines', 'Microtubules', 'Le plus souvent vers l’extrémité + (transport antérograde)'],
            ['Dynéines', 'Microtubules', 'Vers l’extrémité - (transport rétrograde)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le sens du transport axonal',
          texte:
            "Dans un axone, l’extrémité + des microtubules est orientée vers les terminaisons synaptiques. Les kinésines assurent donc le transport antérograde (du corps cellulaire vers la synapse), tandis que les dynéines assurent le transport rétrograde (de la synapse vers le corps cellulaire).",
        },
        {
          type: 'paragraphe',
          texte:
            "La myosine II, organisée en filaments bipolaires, permet la contraction du cortex d’actine, notamment lors de la cytodièse (constriction de l’anneau contractile) et de la contraction musculaire, où elle interagit avec l’actine des sarcomères.",
        },
      ],
    },
    {
      id: 'cils-flagelles',
      titre: 'Cils et flagelles',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cils et les flagelles sont des extensions cellulaires mobiles, soutenues par une structure interne de microtubules appelée axonème, dont l’organisation caractéristique en « 9 + 2 » associe neuf doublets périphériques de microtubules à une paire centrale.",
        },
        {
          type: 'liste',
          items: [
            "Chaque doublet périphérique porte des bras de dynéine axonémale, qui génèrent le glissement entre doublets adjacents à l’origine du battement ciliaire, en hydrolysant de l’ATP.",
            "Le corpuscule basal, à la base du cil ou du flagelle, présente une organisation en neuf triplets de microtubules, comparable à celle d’un centriole.",
            "Les cils vibratiles de l’épithélium respiratoire assurent la clairance mucociliaire ; le flagelle du spermatozoïde assure sa propulsion.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Dyskinésie ciliaire primitive',
          texte:
            "La dyskinésie ciliaire primitive est une maladie génétique rare due à des anomalies des protéines de l’axonème, notamment des bras de dynéine. Elle se traduit par une immobilité ou une mobilité anormale des cils, responsable d’infections respiratoires récidivantes et d’infertilité chez l’homme par immobilité des flagelles spermatiques.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Formule 9 + 2 à retenir',
          texte:
            "L’axonème typique des cils et flagelles mobiles comporte neuf doublets périphériques de microtubules entourant une paire centrale, soit la formule « 9 + 2 ». Le cil primaire, immobile et présent à la surface de nombreuses cellules, présente le plus souvent une structure « 9 + 0 », dépourvue de paire centrale et de bras de dynéine.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le cytosquelette comprend trois familles de filaments : microfilaments d’actine, filaments intermédiaires et microtubules.",
    "L’actine et les microtubules sont des polymères dynamiques et polarisés ; les filaments intermédiaires ne le sont pas.",
    "Le centrosome, formé de deux centrioles, organise le réseau de microtubules en ancrant leur extrémité -.",
    "Les kinésines déplacent leur cargaison vers l’extrémité + des microtubules, les dynéines vers l’extrémité -.",
    "Les myosines se déplacent le long des microfilaments d’actine et interviennent dans la contraction et la cytodièse.",
    "L’axonème des cils et flagelles mobiles présente une organisation caractéristique en neuf doublets périphériques et une paire centrale (9 + 2).",
    "Les bras de dynéine axonémale génèrent le glissement entre doublets à l’origine du battement ciliaire.",
  ],
  erreursFrequentes: [
    "Croire que les filaments intermédiaires sont dynamiques et polarisés comme l’actine et les microtubules : ils sont au contraire stables et non polarisés.",
    "Confondre centriole et centrosome : le centrosome contient deux centrioles et du matériel péricentriolaire.",
    "Inverser le sens de déplacement des kinésines et des dynéines le long des microtubules.",
    "Attribuer aux filaments intermédiaires un rôle dans le transport intracellulaire, qui revient à l’actine et aux microtubules associés à leurs moteurs.",
    "Confondre la formule axonémale des cils mobiles (9 + 2) avec celle du cil primaire immobile (9 + 0).",
    "Oublier que le corpuscule basal des cils et flagelles a la même architecture en triplets qu’un centriole.",
  ],
  mnemotechniques: [
    {
      moyen: '« KI part, DYnéine revient »',
      explication: 'Les KInésines transportent vers l’extrémité + (périphérie, antérograde) ; les DYnéines ramènent vers l’extrémité - (centre, rétrograde).',
    },
    {
      moyen: '« 9+2 bouge, 9+0 ne bouge pas »',
      explication: 'Les cils et flagelles mobiles ont une paire centrale de microtubules (9+2) ; le cil primaire, immobile, en est dépourvu (9+0).',
    },
    {
      moyen: '« Actine = 7, Intermédiaire = 10, Microtubule = 25 »',
      explication: 'Ordre croissant des diamètres des trois filaments du cytosquelette, en nanomètres.',
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
      id: 'biocell-cytosquelette-fc-01',
      recto: 'Quelles sont les trois familles de filaments du cytosquelette ?',
      verso: 'Les microfilaments d’actine, les filaments intermédiaires et les microtubules.',
      type: 'classification',
      tags: ['cytosquelette'],
    },
    {
      id: 'biocell-cytosquelette-fc-02',
      recto: 'Quel est le diamètre approximatif d’un microfilament d’actine ?',
      verso: 'Environ 7 nanomètres.',
      type: 'chiffre',
      tags: ['actine'],
    },
    {
      id: 'biocell-cytosquelette-fc-03',
      recto: 'Quelle protéine favorise la dépolymérisation de l’actine ?',
      verso: 'La cofiline.',
      type: 'mecanisme',
      tags: ['actine', 'régulation'],
    },
    {
      id: 'biocell-cytosquelette-fc-04',
      recto: 'Les filaments intermédiaires sont-ils polarisés ?',
      verso: 'Non, contrairement à l’actine et aux microtubules.',
      type: 'definition',
      tags: ['filaments intermédiaires'],
    },
    {
      id: 'biocell-cytosquelette-fc-05',
      recto: 'Quelle protéine des filaments intermédiaires est présente dans les neurones ?',
      verso: 'Les neurofilaments.',
      type: 'classification',
      tags: ['filaments intermédiaires', 'neurone'],
    },
    {
      id: 'biocell-cytosquelette-fc-06',
      recto: 'De combien de protofilaments un microtubule est-il formé ?',
      verso: 'Treize protofilaments, chacun constitué de dimères de tubuline alpha et bêta.',
      type: 'chiffre',
      tags: ['microtubule'],
    },
    {
      id: 'biocell-cytosquelette-fc-07',
      recto: 'Que contient le centrosome ?',
      verso: 'Deux centrioles perpendiculaires entourés de matériel péricentriolaire.',
      type: 'definition',
      tags: ['centrosome'],
    },
    {
      id: 'biocell-cytosquelette-fc-08',
      recto: 'Dans quel sens se déplacent en général les kinésines le long des microtubules ?',
      verso: 'Vers l’extrémité +, ce qui assure le transport antérograde dans l’axone.',
      type: 'mecanisme',
      tags: ['kinésine', 'transport'],
    },
    {
      id: 'biocell-cytosquelette-fc-09',
      recto: 'Quel moteur moléculaire assure le transport rétrograde le long des microtubules ?',
      verso: 'La dynéine, qui se déplace vers l’extrémité -.',
      type: 'mecanisme',
      tags: ['dynéine', 'transport'],
    },
    {
      id: 'biocell-cytosquelette-fc-10',
      recto: 'Quelle est la formule caractéristique de l’axonème d’un cil mobile ?',
      verso: 'Neuf doublets périphériques de microtubules entourant une paire centrale, soit la formule 9 + 2.',
      type: 'formule',
      tags: ['axonème', 'cil'],
    },
    {
      id: 'biocell-cytosquelette-fc-11',
      recto: 'Quelle structure est retrouvée à la base d’un cil ou d’un flagelle, avec la même architecture qu’un centriole ?',
      verso: 'Le corpuscule basal, formé de neuf triplets de microtubules.',
      type: 'definition',
      tags: ['corpuscule basal', 'cil'],
    },
    {
      id: 'biocell-cytosquelette-fc-12',
      recto: 'Quelle maladie génétique résulte d’anomalies des bras de dynéine axonémale ?',
      verso: 'La dyskinésie ciliaire primitive, responsable d’infections respiratoires récidivantes et d’infertilité masculine.',
      type: 'clinique',
      tags: ['dyskinésie ciliaire', 'dynéine'],
    },
  ],
  qcm: [
    {
      id: 'biocell-cytosquelette-qcm-01',
      enonce: 'Concernant les trois familles de filaments du cytosquelette, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les microfilaments d’actine sont les plus fins des trois familles.', vraie: true, justification: 'Avec environ 7 nanomètres de diamètre, ils sont plus fins que les filaments intermédiaires et les microtubules.' },
        { lettre: 'B', texte: 'Les microtubules sont les plus larges des trois familles.', vraie: true, justification: 'Avec environ 25 nanomètres de diamètre, ce sont les plus larges des trois filaments.' },
        { lettre: 'C', texte: 'Les filaments intermédiaires fixent et hydrolysent l’ATP comme l’actine.', vraie: false, justification: 'Les filaments intermédiaires ne fixent ni n’hydrolysent de nucléotide, à la différence de l’actine et des microtubules.' },
        { lettre: 'D', texte: 'Les microtubules sont formés de dimères de tubuline alpha et bêta.', vraie: true, justification: 'C’est la sous-unité de base des protofilaments qui composent le microtubule.' },
        { lettre: 'E', texte: 'Les filaments intermédiaires sont polarisés.', vraie: false, justification: 'Les filaments intermédiaires ne sont pas polarisés, contrairement à l’actine et aux microtubules.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir l’ordre croissant des diamètres et l’absence de polarité des filaments intermédiaires.',
      difficulte: 1,
    },
    {
      id: 'biocell-cytosquelette-qcm-02',
      enonce: 'Concernant les microfilaments d’actine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La G-actine désigne la forme filamenteuse de l’actine.', vraie: false, justification: 'La G-actine désigne la forme globulaire (monomérique) ; la forme filamenteuse est la F-actine.' },
        { lettre: 'B', texte: 'L’extrémité barbée croît plus rapidement que l’extrémité pointue.', vraie: true, justification: 'C’est la définition de l’extrémité + (barbée), qui croît plus vite que l’extrémité - (pointue).' },
        { lettre: 'C', texte: 'Le complexe Arp2/3 est une protéine nucléatrice de l’actine.', vraie: true, justification: 'Il favorise la formation de nouveaux filaments d’actine branchés.' },
        { lettre: 'D', texte: 'La profiline favorise la dépolymérisation de l’actine.', vraie: false, justification: 'La profiline favorise au contraire l’addition de monomères et donc la polymérisation.' },
        { lettre: 'E', texte: 'Les microvillosités sont soutenues par un faisceau de microfilaments d’actine.', vraie: true, justification: 'C’est le cas notamment de la bordure en brosse de l’épithélium intestinal.' },
      ],
      correction: 'Réponses exactes : B, C et E. Bien distinguer les rôles opposés de la profiline (polymérisation) et de la cofiline (dépolymérisation).',
      difficulte: 2,
    },
    {
      id: 'biocell-cytosquelette-qcm-03',
      enonce: 'Concernant le centrosome et les microtubules, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le centrosome contient deux centrioles.', vraie: true, justification: 'C’est la composition normale du centrosome en interphase.' },
        { lettre: 'B', texte: 'Le centrosome ancre l’extrémité + des microtubules.', vraie: false, justification: 'Le centrosome ancre l’extrémité -, l’extrémité + croissant vers la périphérie cellulaire.' },
        { lettre: 'C', texte: 'Un centriole est formé de neuf triplets de microtubules.', vraie: true, justification: 'C’est l’architecture caractéristique du centriole, partagée avec le corpuscule basal.' },
        { lettre: 'D', texte: 'Le centrosome se dédouble avant la mitose.', vraie: true, justification: 'Ce dédoublement permet la formation des deux pôles du fuseau mitotique.' },
        { lettre: 'E', texte: 'La sous-unité alpha de la tubuline est seule responsable de l’hydrolyse du GTP qui régule la dynamique du microtubule.', vraie: false, justification: 'C’est la sous-unité bêta de la tubuline qui fixe et hydrolyse le GTP de façon échangeable, régulant la dynamique du microtubule.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir que le centrosome ancre l’extrémité -, et non l’extrémité + des microtubules.',
      difficulte: 2,
    },
    {
      id: 'biocell-cytosquelette-qcm-04',
      enonce: 'Concernant les moteurs moléculaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les kinésines se déplacent le long des microfilaments d’actine.', vraie: false, justification: 'Les kinésines se déplacent le long des microtubules, non des microfilaments d’actine.' },
        { lettre: 'B', texte: 'Les myosines se déplacent le long des microfilaments d’actine.', vraie: true, justification: 'C’est le filament associé caractéristique de la famille des myosines.' },
        { lettre: 'C', texte: 'Les dynéines assurent le transport rétrograde le long des microtubules.', vraie: true, justification: 'Elles se déplacent vers l’extrémité -, du côté opposé à la périphérie cellulaire dans un axone.' },
        { lettre: 'D', texte: 'Tous les moteurs moléculaires utilisent l’hydrolyse du GTP comme source d’énergie.', vraie: false, justification: 'Les moteurs moléculaires (myosines, kinésines, dynéines) utilisent l’hydrolyse de l’ATP, non du GTP.' },
        { lettre: 'E', texte: 'La myosine II intervient dans la constriction de l’anneau contractile lors de la cytodièse.', vraie: true, justification: 'Elle génère la force contractile nécessaire à la division du cytoplasme en fin de mitose.' },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir que les moteurs moléculaires hydrolysent l’ATP, et non le GTP.',
      difficulte: 2,
    },
    {
      id: 'biocell-cytosquelette-qcm-05',
      enonce: 'Concernant les cils et les flagelles, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’axonème d’un cil mobile présente une formule 9 + 2.', vraie: true, justification: 'Neuf doublets périphériques entourent une paire centrale de microtubules.' },
        { lettre: 'B', texte: 'Le corpuscule basal a la même architecture qu’un centriole.', vraie: true, justification: 'Les deux structures présentent une organisation en neuf triplets de microtubules.' },
        { lettre: 'C', texte: 'Le glissement des doublets périphériques est assuré par des bras de dynéine axonémale.', vraie: true, justification: 'Ils hydrolysent l’ATP pour générer le glissement à l’origine du battement.' },
        { lettre: 'D', texte: 'Le cil primaire présente en général une paire centrale de microtubules.', vraie: false, justification: 'Le cil primaire est le plus souvent de formule 9 + 0, dépourvu de paire centrale.' },
        { lettre: 'E', texte: 'La dyskinésie ciliaire primitive peut se compliquer d’infertilité masculine.', vraie: true, justification: 'L’immobilité des flagelles spermatiques altère la mobilité des spermatozoïdes.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Retenir la différence entre cil mobile (9+2) et cil primaire immobile (9+0).',
      difficulte: 2,
    },
    {
      id: 'biocell-cytosquelette-qcm-06',
      enonce: 'Concernant les filaments intermédiaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les kératines sont caractéristiques des cellules épithéliales.', vraie: true, justification: 'Elles forment le réseau de filaments intermédiaires typique des kératinocytes et des autres cellules épithéliales.' },
        { lettre: 'B', texte: 'Les lamines forment un réseau à la face interne de l’enveloppe nucléaire.', vraie: true, justification: 'Elles constituent la lamina nucléaire, présente dans toutes les cellules eucaryotes.' },
        { lettre: 'C', texte: 'La vimentine est caractéristique des cellules d’origine mésenchymateuse.', vraie: true, justification: 'C’est le filament intermédiaire typique des fibroblastes et d’autres cellules mésenchymateuses.' },
        { lettre: 'D', texte: 'Les filaments intermédiaires interviennent directement dans le transport vésiculaire.', vraie: false, justification: 'Ce rôle revient à l’actine et aux microtubules associés à leurs moteurs moléculaires, non aux filaments intermédiaires.' },
        { lettre: 'E', texte: 'Les neurofilaments sont des filaments intermédiaires présents dans les axones.', vraie: true, justification: 'Ils contribuent au soutien mécanique de l’axone.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Retenir que le rôle des filaments intermédiaires est mécanique, non impliqué dans le transport actif.',
      difficulte: 1,
    },
  ],
};
