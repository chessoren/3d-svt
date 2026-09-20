import type { Fiche } from '../../types';

export const ficheGlucides: Fiche = {
  id: 'bioch-glucides',
  ue: 'bioch',
  titre: 'Les glucides',
  sousTitre: 'Oses, cyclisation, liaison osidique, disaccharides et polysaccharides',
  chapitre: 'Biochimie structurale',
  ordre: 3,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'ose',
    'aldose',
    'cétose',
    'anomérie',
    'liaison osidique',
    'disaccharide',
    'amidon',
    'glycogène',
    'cellulose',
    'glycosaminoglycane',
  ],
  objectifs: [
    'Classer les oses selon le nombre de carbones et la nature de leur fonction carbonylée.',
    'Expliquer la cyclisation des oses et la notion d’anomérie.',
    'Décrire la formation et la nomenclature de la liaison osidique.',
    'Caractériser les principaux disaccharides d’intérêt biologique.',
    'Comparer l’organisation et le rôle de l’amidon, du glycogène et de la cellulose.',
    'Décrire les glycosaminoglycanes et leur rôle dans la matrice extracellulaire.',
  ],
  sections: [
    {
      id: 'oses-classification',
      titre: 'Les oses : structure et classification',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les oses, ou monosaccharides, sont des polyalcools portant une fonction carbonylée (aldéhyde ou cétone) et dont la formule brute générale s’écrit (CH2O)n. Ce sont les unités de base de tous les glucides, qu’ils soient simples ou complexes.",
        },
        {
          type: 'tableau',
          titre: 'Classification des oses',
          colonnes: ['Critère', 'Catégories', 'Exemples'],
          lignes: [
            ['Nature de la fonction carbonylée', 'Aldose (fonction aldéhyde) ou cétose (fonction cétone)', 'Glucose (aldose) ; fructose (cétose)'],
            ['Nombre d’atomes de carbone', 'Triose, tétrose, pentose, hexose', 'Glycéraldéhyde (triose) ; ribose (pentose) ; glucose (hexose)'],
            ['Configuration du carbone de référence', 'Série D ou série L, selon la position du OH du dernier carbone asymétrique', 'Le D-glucose est le représentant physiologique majoritaire'],
          ],
        },
        {
          type: 'definition',
          terme: 'Carbone anomérique',
          definition:
            "Carbone porteur de la fonction carbonylée dans la forme linéaire de l’ose ; il devient un nouveau centre asymétrique lors de la cyclisation, à l’origine de l’anomérie.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Série D et non configuration D',
          texte:
            "Comme pour les acides aminés, appartenir à la série D ne préjuge pas du sens de rotation du pouvoir rotatoire. Le D-glucose est physiologiquement le stéréoisomère de référence, mais son appartenance à la série D résulte uniquement de la configuration du carbone asymétrique le plus éloigné de la fonction carbonylée, comparée à celle du D-glycéraldéhyde.",
        },
        {
          type: 'liste',
          items: [
            'Les oses les plus importants en biologie humaine sont des hexoses : glucose, fructose, galactose, mannose.',
            'Le ribose et le désoxyribose, des pentoses, entrent dans la composition des nucléotides et des acides nucléiques.',
          ],
        },
      ],
    },
    {
      id: 'cyclisation-anomerie',
      titre: 'Cyclisation et anomérie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En solution aqueuse, les oses possédant cinq atomes de carbone ou plus existent très majoritairement sous forme cyclique, résultant d’une réaction intramoléculaire entre la fonction carbonylée et une fonction alcool de la même molécule, avec formation d’un hémiacétal (pour un aldose) ou d’un hémicétal (pour un cétose).",
        },
        {
          type: 'etapes',
          titre: 'Cyclisation du D-glucose',
          etapes: [
            {
              titre: 'Attaque nucléophile',
              detail:
                "Le groupement hydroxyle porté par le carbone 5 attaque le carbone 1 (fonction aldéhyde), formant une liaison oxygène intramoléculaire.",
            },
            {
              titre: 'Formation d’un cycle à six atomes',
              detail:
                "Le cycle obtenu, comportant cinq atomes de carbone et un atome d’oxygène, est appelé cycle pyranique ; on parle de glucopyranose.",
            },
            {
              titre: 'Apparition de l’anomérie',
              detail:
                "Le carbone 1, devenu anomérique, porte désormais un nouvel hydroxyle qui peut se placer de deux façons différentes dans l’espace : on obtient deux anomères, alpha et bêta.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Anomères alpha et bêta',
          definition:
            "Deux formes cycliques d’un même ose qui ne diffèrent que par la configuration du carbone anomérique. Dans la série D, l’anomère alpha a l’hydroxyle anomérique du même côté que le groupement de référence dans la représentation de Haworth ; l’anomère bêta l’a du côté opposé.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Mutarotation',
          texte:
            "En solution, les formes alpha et bêta d’un ose s’interconvertissent spontanément via la forme linéaire ouverte, jusqu’à un équilibre caractéristique de chaque ose. Ce phénomène, observable par la variation du pouvoir rotatoire au cours du temps, se nomme la mutarotation.",
        },
        {
          type: 'liste',
          items: [
            'Le fructose se cyclise préférentiellement en un cycle à cinq atomes (furanose), bien qu’une forme pyranique existe également.',
            'La représentation de Haworth figure le cycle dans un plan, avec les substituants dirigés vers le haut ou vers le bas.',
          ],
        },
      ],
    },
    {
      id: 'liaison-osidique-disaccharides',
      titre: 'Liaison osidique et disaccharides',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La liaison osidique (ou glycosidique) unit deux oses par condensation entre l’hydroxyle anomérique de l’un et un hydroxyle quelconque de l’autre, avec libération d’une molécule d’eau. Cette liaison, de type acétal, bloque la mutarotation du carbone engagé et définit la structure des oligosaccharides et des polysaccharides.",
        },
        {
          type: 'definition',
          terme: 'Liaison osidique',
          definition:
            "Liaison covalente de type acétal formée entre le carbone anomérique d’un ose et un groupement hydroxyle d’un second ose, avec élimination d’eau. Sa nomenclature précise la configuration anomérique et les carbones engagés, par exemple liaison alpha(1→4).",
        },
        {
          type: 'tableau',
          titre: 'Principaux disaccharides d’intérêt biologique',
          colonnes: ['Disaccharide', 'Composition', 'Liaison', 'Particularité'],
          lignes: [
            ['Maltose', 'Glucose + glucose', 'Alpha(1→4)', 'Produit de la digestion de l’amidon'],
            ['Lactose', 'Galactose + glucose', 'Bêta(1→4)', 'Sucre du lait, hydrolysé par la lactase'],
            ['Saccharose', 'Glucose + fructose', 'Alpha(1→2) bêta', 'Sucre non réducteur : les deux carbones anomériques sont engagés dans la liaison'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Sucre réducteur ou non réducteur',
          texte:
            "Un ose ou un diholoside est dit réducteur lorsqu’il possède au moins un carbone anomérique libre, capable de s’oxyder (réaction de type liqueur de Fehling). Le maltose et le lactose sont réducteurs ; le saccharose ne l’est pas, car ses deux carbones anomériques sont tous deux engagés dans la liaison osidique.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Intolérance au lactose',
          texte:
            "Le déficit en lactase, enzyme de la bordure en brosse intestinale qui hydrolyse le lactose en glucose et galactose, entraîne une intolérance au lactose : le lactose non digéré atteint le côlon, où sa fermentation bactérienne provoque ballonnements et diarrhée osmotique.",
        },
      ],
    },
    {
      id: 'polysaccharides-de-reserve',
      titre: 'Polysaccharides de réserve : amidon et glycogène',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’amidon et le glycogène sont des homopolysaccharides de réserve énergétique, tous deux constitués exclusivement de résidus de glucose, mais rencontrés respectivement dans le règne végétal et chez les animaux.",
        },
        {
          type: 'tableau',
          titre: 'Amidon et glycogène',
          colonnes: ['Caractéristique', 'Amidon', 'Glycogène'],
          lignes: [
            ['Origine', 'Réserve énergétique végétale', 'Réserve énergétique animale (foie, muscle)'],
            ['Composants', 'Amylose (linéaire) et amylopectine (ramifiée)', 'Structure ramifiée uniquement'],
            ['Liaisons', 'Alpha(1→4) dans les chaînes linéaires ; alpha(1→6) aux ramifications de l’amylopectine', 'Alpha(1→4) dans les chaînes ; alpha(1→6) aux ramifications'],
            ['Degré de ramification', 'Modéré (une ramification tous les 24 à 30 résidus environ pour l’amylopectine)', 'Élevé (une ramification tous les 8 à 12 résidus environ)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Pourquoi tant de ramifications ?',
          texte:
            "La forte ramification du glycogène multiplie le nombre d’extrémités non réductrices, points d’attaque des enzymes de mobilisation (glycogène phosphorylase). Elle permet une libération rapide de glucose en cas de besoin énergétique urgent, notamment dans le muscle en activité.",
        },
        {
          type: 'paragraphe',
          texte:
            "La cellulose, autre homopolymère de glucose, s’en distingue radicalement par la nature de sa liaison : des liaisons bêta(1→4) exclusivement, qui confèrent à la molécule une conformation étendue et rectiligne, très différente de l’hélice compacte de l’amylose.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Une seule différence, deux destins opposés',
          texte:
            "Amidon et cellulose sont tous deux des polymères de glucose ; seule la configuration de la liaison osidique diffère (alpha contre bêta en 1→4). L’espèce humaine possède les enzymes digestives (amylases) capables d’hydrolyser les liaisons alpha, mais pas les liaisons bêta de la cellulose, dépourvues de cellulase chez l’Homme : la cellulose constitue donc une fibre alimentaire non digestible.",
        },
      ],
    },
    {
      id: 'glycosaminoglycanes',
      titre: 'Les glycosaminoglycanes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les glycosaminoglycanes (GAG) sont de longs hétéropolysaccharides linéaires, formés par la répétition d’une unité disaccharidique comportant un ose aminé. Fortement chargés négativement, ils retiennent une grande quantité d’eau et confèrent à la matrice extracellulaire ses propriétés de résistance à la compression.",
        },
        {
          type: 'tableau',
          titre: 'Principaux glycosaminoglycanes',
          colonnes: ['Glycosaminoglycane', 'Composition disaccharidique', 'Localisation / rôle'],
          lignes: [
            ['Acide hyaluronique', 'Acide glucuronique et N-acétylglucosamine', 'Liquide synovial, humeur vitrée, matrice extracellulaire ; non sulfaté, non lié à une protéine cœur'],
            ['Chondroïtine sulfate', 'Acide glucuronique et N-acétylgalactosamine sulfatée', 'Cartilage, tendons'],
            ['Héparine', 'Glucosamine et acide iduronique sulfatés', 'Stockée dans les granules des mastocytes ; employée en thérapeutique comme anticoagulant'],
            ['Kératane sulfate', 'Galactose et N-acétylglucosamine sulfatée', 'Cornée, cartilage'],
          ],
        },
        {
          type: 'definition',
          terme: 'Protéoglycane',
          definition:
            "Molécule formée d’une protéine cœur sur laquelle sont fixés de façon covalente un ou plusieurs glycosaminoglycanes, à l’exception de l’acide hyaluronique qui reste libre en solution.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Héparine et anticoagulation',
          texte:
            "L’héparine, utilisée en thérapeutique comme anticoagulant, potentialise l’action de l’antithrombine III, qui inhibe la thrombine et le facteur Xa de la coagulation.",
        },
      ],
    },
  ],
  pointsCles: [
    'Un ose est un polyalcool à fonction aldéhyde (aldose) ou cétone (cétose), de formule générale (CH2O)n.',
    'La cyclisation d’un ose crée un nouveau centre asymétrique, le carbone anomérique, à l’origine des formes alpha et bêta.',
    'La mutarotation est l’interconversion spontanée des anomères alpha et bêta via la forme linéaire.',
    'La liaison osidique unit deux oses par condensation entre le carbone anomérique de l’un et un hydroxyle de l’autre.',
    'Le saccharose est un sucre non réducteur, car ses deux carbones anomériques sont engagés dans la liaison.',
    'Amidon et glycogène sont des polymères de glucose en alpha(1→4) et alpha(1→6) ; la cellulose est un polymère de glucose en bêta(1→4), non digestible chez l’Homme.',
    'Les glycosaminoglycanes sont des hétéropolysaccharides sulfatés (sauf l’acide hyaluronique) qui structurent la matrice extracellulaire.',
  ],
  erreursFrequentes: [
    'Confondre série D et pouvoir rotatoire dextrogyre : les deux notions sont indépendantes.',
    'Oublier que le fructose est un cétose et non un aldose, bien qu’il soit un hexose comme le glucose.',
    'Croire que le glycogène et l’amidon partagent le même degré de ramification : le glycogène est nettement plus ramifié.',
    'Penser que l’amidon et la cellulose ne diffèrent que par leur origine : ils diffèrent surtout par la configuration anomérique de leur liaison osidique (alpha contre bêta).',
    'Considérer l’acide hyaluronique comme un protéoglycane : il n’est pas fixé de façon covalente à une protéine cœur.',
  ],
  mnemotechniques: [
    {
      moyen: 'GALFRUC pour retenir les hexoses majeurs',
      explication:
        'GALactose, FRUctose, glucose (« C » pour carbone/hexose) : les trois hexoses les plus importants en physiologie humaine.',
    },
    {
      moyen: '« LacBê, MalAl » pour les liaisons des diholosides',
      explication:
        'Lactose = liaison Bêta(1→4) ; Maltose = liaison Alpha(1→4). Le saccharose se distingue par une liaison alpha-bêta engageant les deux carbones anomériques.',
    },
    {
      moyen: 'Alpha construit, bêta résiste',
      explication:
        'Les liaisons alpha(1→4) donnent des molécules compactes et digestibles (amidon, glycogène) ; les liaisons bêta(1→4) donnent des fibres rigides et non digestibles (cellulose).',
    },
  ],
  sources: [
    'Lehninger, Principes de biochimie, 8e édition',
    'Harper, Biochimie médicale, 32e édition',
    'Berg, Tymoczko, Gatto, Stryer, Biochimie, 9e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'bioch-glucides-fc-01',
      recto: 'Quelle est la différence structurale entre un aldose et un cétose ?',
      verso: 'L’aldose porte une fonction aldéhyde, le cétose une fonction cétone.',
      type: 'definition',
      tags: ['oses'],
    },
    {
      id: 'bioch-glucides-fc-02',
      recto: 'Qu’est-ce que le carbone anomérique ?',
      verso: 'Le carbone porteur de la fonction carbonylée dans la forme linéaire, qui devient un nouveau centre asymétrique lors de la cyclisation.',
      type: 'definition',
      tags: ['anomérie'],
    },
    {
      id: 'bioch-glucides-fc-03',
      recto: 'Qu’est-ce que la mutarotation ?',
      verso: 'L’interconversion spontanée des anomères alpha et bêta d’un ose en solution, via la forme linéaire ouverte.',
      type: 'mecanisme',
      tags: ['anomérie'],
    },
    {
      id: 'bioch-glucides-fc-04',
      recto: 'Quelle liaison relie les deux glucoses du maltose ?',
      verso: 'Une liaison alpha(1→4).',
      type: 'formule',
      tags: ['disaccharides', 'maltose'],
    },
    {
      id: 'bioch-glucides-fc-05',
      recto: 'Pourquoi le saccharose est-il un sucre non réducteur ?',
      verso: 'Parce que ses deux carbones anomériques, celui du glucose et celui du fructose, sont engagés dans la liaison osidique.',
      type: 'mecanisme',
      tags: ['saccharose'],
    },
    {
      id: 'bioch-glucides-fc-06',
      recto: 'Quelle enzyme hydrolyse le lactose et où agit-elle ?',
      verso: 'La lactase, au niveau de la bordure en brosse de l’intestin grêle.',
      type: 'mecanisme',
      tags: ['lactose', 'digestion'],
    },
    {
      id: 'bioch-glucides-fc-07',
      recto: 'Quelles liaisons structurent l’amylopectine de l’amidon ?',
      verso: 'Des liaisons alpha(1→4) dans les chaînes et alpha(1→6) aux points de ramification.',
      type: 'formule',
      tags: ['amidon'],
    },
    {
      id: 'bioch-glucides-fc-08',
      recto: 'Pourquoi le glycogène est-il plus ramifié que l’amidon ?',
      verso: 'Pour multiplier les extrémités non réductrices, ce qui permet une mobilisation rapide du glucose en cas de besoin énergétique.',
      type: 'mecanisme',
      tags: ['glycogène'],
    },
    {
      id: 'bioch-glucides-fc-09',
      recto: 'Quelle est la nature de la liaison osidique de la cellulose ?',
      verso: 'Une liaison bêta(1→4), non hydrolysable par les enzymes digestives humaines.',
      type: 'formule',
      tags: ['cellulose'],
    },
    {
      id: 'bioch-glucides-fc-10',
      recto: 'Citer un glycosaminoglycane non sulfaté et non lié à une protéine cœur.',
      verso: 'L’acide hyaluronique.',
      type: 'classification',
      tags: ['glycosaminoglycanes'],
    },
    {
      id: 'bioch-glucides-fc-11',
      recto: 'Quel glycosaminoglycane possède une activité anticoagulante physiologique ?',
      verso: 'L’héparine, qui potentialise l’action de l’antithrombine III.',
      type: 'clinique',
      tags: ['héparine'],
    },
    {
      id: 'bioch-glucides-fc-12',
      recto: 'Quels pentoses entrent dans la composition des nucléotides ?',
      verso: 'Le ribose (ARN) et le désoxyribose (ADN).',
      type: 'classification',
      tags: ['pentoses'],
    },
  ],
  qcm: [
    {
      id: 'bioch-glucides-qcm-01',
      enonce: 'Concernant les oses, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le glucose est un aldohexose.', vraie: true, justification: 'Il porte une fonction aldéhyde et compte six atomes de carbone.' },
        { lettre: 'B', texte: 'Le fructose est un aldose.', vraie: false, justification: 'Le fructose porte une fonction cétone : c’est un cétose.' },
        { lettre: 'C', texte: 'Le ribose est un pentose.', vraie: true, justification: 'Il compte cinq atomes de carbone.' },
        { lettre: 'D', texte: 'Appartenir à la série D implique un pouvoir rotatoire dextrogyre.', vraie: false, justification: 'La série D ou L est indépendante du sens réel de rotation de la lumière polarisée.' },
        { lettre: 'E', texte: 'Les oses ont pour formule brute générale (CH2O)n.', vraie: true, justification: 'C’est la formule générale caractéristique des monosaccharides.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'bioch-glucides-qcm-02',
      enonce: 'Concernant la cyclisation et l’anomérie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La cyclisation d’un aldose forme un hémiacétal.', vraie: true, justification: 'C’est la réaction entre la fonction aldéhyde et un hydroxyle intramoléculaire.' },
        { lettre: 'B', texte: 'Les anomères alpha et bêta diffèrent par la configuration du carbone anomérique.', vraie: true, justification: 'C’est la définition même de l’anomérie.' },
        { lettre: 'C', texte: 'La mutarotation nécessite une enzyme spécifique.', vraie: false, justification: 'C’est un phénomène spontané, passant par la forme linéaire ouverte en solution.' },
        { lettre: 'D', texte: 'Le glucopyranose est un cycle à six atomes, dont cinq carbones et un oxygène.', vraie: true, justification: 'C’est la structure du cycle pyranique du glucose cyclisé.' },
        { lettre: 'E', texte: 'Un ose engagé dans une liaison osidique par son carbone anomérique peut encore subir une mutarotation.', vraie: false, justification: 'La liaison osidique bloque la configuration du carbone anomérique engagé, empêchant la mutarotation.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-glucides-qcm-03',
      enonce: 'Concernant les disaccharides, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le lactose est formé de galactose et de glucose liés en bêta(1→4).', vraie: true, justification: 'C’est la composition exacte du sucre du lait.' },
        { lettre: 'B', texte: 'Le maltose est un produit de la digestion de l’amidon.', vraie: true, justification: 'Il résulte de l’hydrolyse partielle des liaisons alpha(1→4) de l’amidon.' },
        { lettre: 'C', texte: 'Le saccharose est un sucre réducteur.', vraie: false, justification: 'Ses deux carbones anomériques sont engagés dans la liaison osidique, il est donc non réducteur.' },
        { lettre: 'D', texte: 'Un déficit en lactase entraîne une intolérance au lactose.', vraie: true, justification: 'Le lactose non digéré est fermenté par la flore colique, causant des troubles digestifs.' },
        { lettre: 'E', texte: 'Le maltose est composé de glucose et de fructose.', vraie: false, justification: 'Le maltose est composé de deux résidus de glucose ; c’est le saccharose qui associe glucose et fructose.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-glucides-qcm-04',
      enonce: 'Concernant l’amidon, le glycogène et la cellulose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ce sont tous trois des homopolymères de glucose.', vraie: true, justification: 'Les trois molécules ne comportent que des résidus de glucose.' },
        { lettre: 'B', texte: 'La cellulose comporte des liaisons alpha(1→4).', vraie: false, justification: 'La cellulose est formée exclusivement de liaisons bêta(1→4).' },
        { lettre: 'C', texte: 'Le glycogène est plus ramifié que l’amylopectine de l’amidon.', vraie: true, justification: 'Ses ramifications sont plus rapprochées, ce qui accélère sa mobilisation.' },
        { lettre: 'D', texte: 'Les ramifications de l’amidon et du glycogène sont des liaisons alpha(1→6).', vraie: true, justification: 'C’est la liaison caractéristique des points de branchement de ces deux polysaccharides.' },
        { lettre: 'E', texte: 'La cellulose est digestible par les enzymes humaines.', vraie: false, justification: 'L’espèce humaine ne possède pas de cellulase capable d’hydrolyser les liaisons bêta(1→4).' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-glucides-qcm-05',
      enonce: 'Concernant les glycosaminoglycanes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ce sont des hétéropolysaccharides répétant une unité disaccharidique.', vraie: true, justification: 'C’est la définition structurale des glycosaminoglycanes.' },
        { lettre: 'B', texte: 'L’acide hyaluronique est systématiquement fixé à une protéine cœur.', vraie: false, justification: 'L’acide hyaluronique reste libre en solution, contrairement aux autres glycosaminoglycanes des protéoglycanes.' },
        { lettre: 'C', texte: 'L’héparine potentialise l’action de l’antithrombine III.', vraie: true, justification: 'C’est le mécanisme de son action anticoagulante physiologique et thérapeutique.' },
        { lettre: 'D', texte: 'Les glycosaminoglycanes sont globalement chargés positivement.', vraie: false, justification: 'Ils sont fortement chargés négativement, du fait de leurs groupements carboxyle et sulfate.' },
        { lettre: 'E', texte: 'La chondroïtine sulfate est un constituant du cartilage.', vraie: true, justification: 'Elle participe, avec le collagène, à la résistance mécanique du cartilage.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-glucides-qcm-06',
      enonce: 'Concernant la liaison osidique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle se forme avec libération d’une molécule d’eau.', vraie: true, justification: 'C’est une réaction de condensation, comme la liaison peptidique.' },
        { lettre: 'B', texte: 'Elle implique obligatoirement le carbone anomérique d’au moins un des deux oses.', vraie: true, justification: 'Par définition, la liaison osidique engage le carbone anomérique de l’ose donneur.' },
        { lettre: 'C', texte: 'Sa nomenclature précise la configuration anomérique et les numéros des carbones engagés.', vraie: true, justification: 'Par exemple, alpha(1→4) précise l’anomérie et les positions reliées.' },
        { lettre: 'D', texte: 'Elle est de même nature chimique que la liaison peptidique.', vraie: false, justification: 'La liaison osidique est un acétal, tandis que la liaison peptidique est une liaison amide.' },
        { lettre: 'E', texte: 'Elle peut engager les deux carbones anomériques des deux oses simultanément.', vraie: true, justification: 'C’est le cas du saccharose, ce qui explique son caractère non réducteur.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
  ],
};
