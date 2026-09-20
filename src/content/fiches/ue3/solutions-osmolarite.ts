import type { Fiche } from '../../types';

export const ficheSolutionsOsmolarite: Fiche = {
  id: 'ue3-solutions-osmolarite',
  ue: 'ue3',
  titre: 'Solutions et osmolarité',
  sousTitre:
    "Molarité, osmolarité, osmolalité, pression osmotique, loi de van ’t Hoff, tonicité et comportement des hématies",
  chapitre: 'États de la matière et solutions',
  ordre: 2,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'molarité',
    'osmolarité',
    'osmolalité',
    'pression osmotique',
    'van ’t Hoff',
    'tonicité',
    'hémolyse',
    'coefficient de dissociation',
  ],
  objectifs: [
    "Distinguer molarité, osmolarité et osmolalité et savoir passer de l’une à l’autre.",
    "Calculer une pression osmotique à l’aide de la loi de van ’t Hoff.",
    "Différencier osmolarité et tonicité d’une solution.",
    "Prévoir le comportement d’une hématie plongée dans une solution hypotonique, isotonique ou hypertonique.",
    "Relier ces notions à des situations cliniques courantes de perfusion et de déshydratation.",
  ],
  sections: [
    {
      id: 'molarite-osmolarite',
      titre: 'Molarité et osmolarité',
      blocs: [
        {
          type: 'definition',
          terme: 'Molarité (concentration molaire)',
          definition:
            "Quantité de matière de soluté dissoute par litre de solution. Elle ne tient pas compte du nombre de particules réellement libérées en solution par une molécule donnée.",
        },
        {
          type: 'formule',
          expression: 'C = n / V',
          legende: 'Molarité C d’une solution : n est la quantité de matière de soluté, V le volume de la solution.',
          unites: 'C en mol/L, n en mol, V en L',
        },
        {
          type: 'definition',
          terme: 'Osmolarité',
          definition:
            "Nombre total de particules osmotiquement actives (molécules et ions) dissoutes par litre de solution, indépendamment de leur nature. Elle tient compte de la dissociation éventuelle du soluté.",
        },
        {
          type: 'formule',
          expression: 'Osm = C x n i',
          legende:
            "Osmolarité d’un soluté : C est sa concentration molaire et n i le nombre de particules libérées par molécule dissoute (coefficient de dissociation idéal, ou de van ’t Hoff).",
          unites: 'Osm en osmol/L (ou mOsm/L), C en mol/L, n i sans unité',
        },
        {
          type: 'tableau',
          titre: 'Exemples de coefficient de dissociation',
          colonnes: ['Soluté', 'Dissociation', 'n i théorique'],
          lignes: [
            ['Glucose', 'Ne se dissocie pas', '1'],
            ['Chlorure de sodium (NaCl)', 'Na+ + Cl-', '2'],
            ['Chlorure de calcium (CaCl2)', 'Ca2+ + 2 Cl-', '3'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Dissociation réelle et dissociation théorique',
          texte:
            "En solution réelle, la dissociation n’est jamais totale à 100 % et des interactions ioniques réduisent l’efficacité osmotique : on utilise alors un coefficient osmotique pratique, souvent légèrement inférieur au coefficient théorique n i. Dans les exercices de PASS, sauf indication contraire, on utilise le coefficient théorique.",
        },
      ],
    },
    {
      id: 'osmolalite',
      titre: 'Osmolalité et osmolarité plasmatique',
      blocs: [
        {
          type: 'definition',
          terme: 'Osmolalité',
          definition:
            "Nombre de particules osmotiquement actives par kilogramme de solvant (et non par litre de solution). Elle diffère peu de l’osmolarité pour des solutions diluées comme le plasma, où elle se mesure directement par cryoscopie (abaissement du point de congélation).",
        },
        {
          type: 'formule',
          expression: 'Osmolarité plasmatique = 2 x [Na+] + [glucose] + [urée]',
          legende:
            "Formule d’estimation de l’osmolarité plasmatique à partir des principaux solutés. Le facteur 2 devant la natrémie tient compte de l’anion accompagnateur (essentiellement le chlore et le bicarbonate).",
          unites: '[Na+], [glucose] et [urée] en mmol/L, résultat en mOsm/L',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Valeur physiologique',
          texte:
            "L’osmolarité plasmatique normale se situe entre 280 et 300 mOsm/L, avec une valeur usuelle de référence proche de 285 mOsm/L.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Trou osmotique',
          texte:
            "Le trou osmotique est la différence entre l’osmolalité mesurée (par cryoscopie) et l’osmolalité calculée par la formule usuelle. Un trou osmotique élevé oriente vers la présence de substances osmotiquement actives non prises en compte par la formule, comme l’éthanol, le méthanol ou l’éthylène glycol lors d’une intoxication.",
        },
      ],
    },
    {
      id: 'pression-osmotique',
      titre: 'Pression osmotique et loi de van ’t Hoff',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Lorsque deux solutions de concentrations différentes sont séparées par une membrane semi-perméable, perméable au solvant mais imperméable au soluté, le solvant se déplace spontanément du compartiment le moins concentré vers le compartiment le plus concentré : c’est l’osmose. La pression osmotique est la pression qu’il faudrait exercer sur le compartiment le plus concentré pour annuler ce flux net de solvant.",
        },
        {
          type: 'formule',
          expression: 'Pi = R x T x Osm',
          legende:
            "Loi de van ’t Hoff : la pression osmotique Pi d’une solution est proportionnelle à son osmolarité Osm et à la température absolue T, R étant la constante des gaz parfaits.",
          unites: 'Pi en pascal (Pa), R = 8,314 J / (mol·K), T en kelvin (K), Osm en osmol/m³ (ou mol/L x 10^3 selon les unités choisies)',
        },
        {
          type: 'liste',
          items: [
            "Plus l’osmolarité d’une solution est élevée, plus sa pression osmotique est élevée : elle attire davantage d’eau vers elle à travers une membrane semi-perméable.",
            "La pression osmotique dépend du nombre total de particules dissoutes, pas de leur nature ni de leur masse : c’est une propriété colligative, au même titre que l’abaissement du point de congélation ou l’élévation du point d’ébullition.",
            "Une membrane semi-perméable idéale est totalement imperméable au soluté ; en réalité, certaines membranes biologiques laissent passer partiellement certains solutés, ce que traduit le coefficient de réflexion de Staverman.",
          ],
        },
        {
          type: 'definition',
          terme: 'Coefficient de réflexion (sigma)',
          definition:
            "Coefficient compris entre 0 et 1 qui traduit l’imperméabilité relative d’une membrane à un soluté donné. Sigma vaut 1 pour une membrane totalement imperméable au soluté (efficacité osmotique maximale) et 0 pour une membrane totalement perméable à ce soluté (aucune efficacité osmotique).",
        },
      ],
    },
    {
      id: 'tonicite',
      titre: 'Tonicité et comportement cellulaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Tonicité',
          definition:
            "Capacité d’une solution à provoquer un mouvement d’eau à travers la membrane d’une cellule donnée. Contrairement à l’osmolarité, qui est une grandeur physico-chimique absolue, la tonicité dépend de la perméabilité de la membrane cellulaire considérée aux solutés présents : seuls les solutés non diffusibles à travers cette membrane (osmoles efficaces) déterminent la tonicité.",
        },
        {
          type: 'tableau',
          titre: 'Comportement d’une hématie selon la tonicité du milieu'
            ,
          colonnes: ['Type de solution', 'Mouvement d’eau', 'Conséquence pour l’hématie'],
          lignes: [
            ['Hypotonique', 'Entrée d’eau dans la cellule', 'Turgescence puis hémolyse si l’excès est important'],
            ['Isotonique', 'Aucun mouvement net d’eau', 'Volume cellulaire inchangé'],
            ['Hypertonique', 'Sortie d’eau de la cellule', 'Crénelage (crénation) de l’hématie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Isotonique n’est pas toujours iso-osmotique',
          texte:
            "Une solution d’urée à la même osmolarité que le plasma est iso-osmotique mais n’est pas isotonique pour l’hématie : l’urée diffuse librement à travers la membrane érythrocytaire et n’exerce donc aucune efficacité osmotique durable, ce qui conduit à une entrée d’eau et à une hémolyse, comme en milieu hypotonique.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Solutés de référence isotoniques au plasma',
          texte:
            "Le sérum physiologique (chlorure de sodium à 9 g/L, soit environ 154 mmol/L, donc environ 308 mOsm/L) et le glucosé à 5 % (50 g/L, soit environ 278 mOsm/L) sont considérés comme isotoniques au plasma dans la pratique courante.",
        },
      ],
    },
    {
      id: 'applications-cliniques',
      titre: 'Applications cliniques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La compréhension de l’osmolarité et de la tonicité est indispensable pour raisonner sur les perfusions intraveineuses, les troubles de l’hydratation et certaines techniques d’épuration extra-rénale.",
        },
        {
          type: 'etapes',
          titre: 'Effet d’une perfusion selon sa tonicité',
          etapes: [
            {
              titre: 'Soluté isotonique (sérum physiologique)',
              detail: "Se répartit dans le secteur extracellulaire sans mouvement d’eau transmembranaire notable : utile pour restaurer une volémie efficace.",
            },
            {
              titre: 'Soluté hypotonique (glucosé à 5 % après métabolisation du glucose)',
              detail: "Le glucose est métabolisé, laissant de l’eau libre qui se répartit dans l’ensemble de l’eau corporelle, entraînant une entrée d’eau dans les cellules.",
            },
            {
              titre: 'Soluté hypertonique (chlorure de sodium à 20 %, mannitol)',
              detail: "Attire l’eau hors des cellules vers le secteur extracellulaire : utilisé notamment pour réduire un œdème cérébral.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Œdème cérébral et mannitol',
          texte:
            "Le mannitol est un soluté hypertonique non métabolisé et non diffusible à travers la barrière hémato-encéphalique. Administré par voie intraveineuse, il augmente l’osmolarité plasmatique et attire l’eau hors du tissu cérébral, ce qui réduit la pression intracrânienne.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Piège classique : hyponatrémie',
          texte:
            "Une hyponatrémie ne signifie pas systématiquement une hypo-osmolarité : en cas d’hyperglycémie majeure, le glucose en excès, osmotiquement actif, peut maintenir voire augmenter l’osmolarité plasmatique malgré une natrémie basse, par appel d’eau du secteur intracellulaire vers le secteur extracellulaire (hyponatrémie de dilution).",
        },
      ],
    },
  ],
  pointsCles: [
    "La molarité compte les molécules dissoutes ; l’osmolarité compte toutes les particules osmotiquement actives issues de leur dissociation.",
    "L’osmolalité rapporte le nombre de particules au kilogramme de solvant, l’osmolarité au litre de solution.",
    "La loi de van ’t Hoff, Pi = R x T x Osm, relie pression osmotique et osmolarité.",
    "L’osmolarité plasmatique normale se situe entre 280 et 300 mOsm/L.",
    "La tonicité dépend de la perméabilité membranaire au soluté et non de l’osmolarité seule.",
    "Une hématie gonfle et peut s’hémolyser en milieu hypotonique, se crénelle en milieu hypertonique.",
    "Une solution iso-osmotique n’est pas nécessairement isotonique si le soluté diffuse librement à travers la membrane.",
  ],
  erreursFrequentes: [
    "Confondre osmolarité (par litre de solution) et osmolalité (par kilogramme de solvant), qui ne sont réellement identiques que pour des solutions très diluées.",
    "Oublier de multiplier la concentration molaire par le coefficient de dissociation pour calculer l’osmolarité d’un électrolyte.",
    "Croire qu’une solution iso-osmotique est toujours isotonique, alors que cela dépend de la perméabilité de la membrane au soluté considéré.",
    "Inverser le sens du mouvement de l’eau : l’eau se déplace toujours du compartiment le moins concentré vers le compartiment le plus concentré en particules non diffusibles.",
    "Oublier le facteur 2 devant la natrémie dans la formule d’estimation de l’osmolarité plasmatique, qui tient compte des anions accompagnateurs.",
  ],
  mnemotechniques: [
    {
      moyen: '« Osmolarité = par Litre, Osmolalité = par kiLo »',
      explication:
        "Le L de litre associe l’osmolarité au volume de solution, le second L de kiLogramme associe l’osmolalité à la masse de solvant.",
    },
    {
      moyen: '« L’eau va où c’est concentré »',
      explication:
        "Rappel simple du sens du mouvement osmotique : le solvant se déplace toujours vers le compartiment le plus riche en particules non diffusibles.",
    },
    {
      moyen: 'Crénelée comme une pomme séchée',
      explication:
        "En milieu hypertonique, l’hématie perd de l’eau et se ratatine en formant des crénelures, comme une pomme séchée qui se ride en perdant son eau.",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Guyton et Hall, Précis de physiologie médicale',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-solutions-osmolarite-fc-01',
      recto: 'Définir la molarité d’une solution.',
      verso: 'Quantité de matière de soluté dissoute par litre de solution (C = n / V), sans tenir compte de sa dissociation.',
      type: 'definition',
      tags: ['molarité'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-02',
      recto: 'Comment calculer l’osmolarité d’un soluté à partir de sa molarité ?',
      verso: 'Osm = C x n i, où n i est le nombre de particules libérées par molécule dissoute.',
      type: 'formule',
      tags: ['osmolarité'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-03',
      recto: 'Quelle est la différence entre osmolarité et osmolalité ?',
      verso: 'L’osmolarité rapporte les particules au litre de solution, l’osmolalité au kilogramme de solvant.',
      type: 'definition',
      tags: ['osmolalité'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-04',
      recto: 'Énoncer la loi de van ’t Hoff.',
      verso: 'Pi = R x T x Osm : la pression osmotique est proportionnelle à l’osmolarité et à la température absolue.',
      type: 'formule',
      tags: ['pression osmotique'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-05',
      recto: 'Quelles sont les valeurs usuelles de l’osmolarité plasmatique ?',
      verso: 'Entre 280 et 300 mOsm/L, avec une valeur de référence proche de 285 mOsm/L.',
      type: 'chiffre',
      tags: ['plasma'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-06',
      recto: 'Que devient une hématie placée en solution hypotonique ?',
      verso: 'Elle gonfle par entrée d’eau (turgescence) et peut se rompre par hémolyse si l’excès d’eau est important.',
      type: 'clinique',
      tags: ['hématie', 'tonicité'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-07',
      recto: 'Que devient une hématie placée en solution hypertonique ?',
      verso: 'Elle perd de l’eau et se ratatine : c’est le crénelage (crénation).',
      type: 'clinique',
      tags: ['hématie', 'tonicité'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-08',
      recto: 'Pourquoi une solution d’urée iso-osmotique au plasma n’est-elle pas isotonique pour l’hématie ?',
      verso: 'L’urée diffuse librement à travers la membrane érythrocytaire : elle n’exerce pas d’efficacité osmotique durable, ce qui conduit à une entrée d’eau comparable à un milieu hypotonique.',
      type: 'mecanisme',
      tags: ['tonicité', 'urée'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-09',
      recto: 'Quel est le coefficient de dissociation théorique du chlorure de sodium ?',
      verso: '2 (Na+ et Cl-).',
      type: 'chiffre',
      tags: ['dissociation'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-10',
      recto: 'Que représente le coefficient de réflexion de Staverman (sigma) ?',
      verso: 'Il traduit l’imperméabilité relative d’une membrane à un soluté : sigma = 1 pour une membrane totalement imperméable au soluté, sigma = 0 pour une membrane totalement perméable.',
      type: 'definition',
      tags: ['membrane semi-perméable'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-11',
      recto: 'Pourquoi le mannitol réduit-il la pression intracrânienne ?',
      verso: 'Soluté hypertonique non diffusible à travers la barrière hémato-encéphalique, il augmente l’osmolarité plasmatique et attire l’eau hors du tissu cérébral.',
      type: 'clinique',
      tags: ['mannitol', 'œdème cérébral'],
    },
    {
      id: 'ue3-solutions-osmolarite-fc-12',
      recto: 'Qu’est-ce que le trou osmotique ?',
      verso: 'La différence entre l’osmolalité mesurée par cryoscopie et l’osmolalité calculée par formule usuelle ; un trou élevé oriente vers une substance osmotiquement active non prise en compte, comme l’éthanol ou le méthanol.',
      type: 'definition',
      tags: ['trou osmotique'],
    },
  ],
  qcm: [
    {
      id: 'ue3-solutions-osmolarite-qcm-01',
      enonce: 'Concernant la molarité et l’osmolarité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’osmolarité tient compte de la dissociation du soluté en solution.',
          vraie: true,
          justification: "Exact : Osm = C x n i, avec n i le nombre de particules libérées par la dissociation.",
        },
        {
          lettre: 'B',
          texte: 'Pour le glucose, molarité et osmolarité sont numériquement égales.',
          vraie: true,
          justification: "Exact : le glucose ne se dissocie pas en solution, donc n i = 1.",
        },
        {
          lettre: 'C',
          texte: 'Une solution de NaCl à 100 mmol/L a une osmolarité théorique de 100 mOsm/L.',
          vraie: false,
          justification: 'Le NaCl se dissocie en Na+ et Cl-, soit n i = 2 : l’osmolarité théorique est de 200 mOsm/L.',
        },
        {
          lettre: 'D',
          texte: 'L’osmolarité s’exprime en osmol par litre de solution.',
          vraie: true,
          justification: 'Exact, ou en mOsm/L pour les valeurs physiologiques usuelles.',
        },
        {
          lettre: 'E',
          texte: 'La dissociation d’un électrolyte fort en solution est toujours totale à 100 %, même en pratique.',
          vraie: false,
          justification: "En pratique, la dissociation n’est jamais totale à 100 % : on utilise un coefficient osmotique réel, légèrement inférieur au coefficient théorique.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-solutions-osmolarite-qcm-02',
      enonce: 'Concernant l’osmolalité et l’osmolarité plasmatique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’osmolalité se rapporte au kilogramme de solvant, l’osmolarité au litre de solution.',
          vraie: true,
          justification: 'C’est la distinction fondamentale entre les deux grandeurs.',
        },
        {
          lettre: 'B',
          texte: 'L’osmolarité plasmatique normale est comprise entre 280 et 300 mOsm/L.',
          vraie: true,
          justification: 'Exact, valeur physiologique usuelle du plasma.',
        },
        {
          lettre: 'C',
          texte: 'La formule d’estimation de l’osmolarité plasmatique multiplie la natrémie par 3.',
          vraie: false,
          justification: 'Elle multiplie la natrémie par 2, pour tenir compte des anions accompagnateurs.',
        },
        {
          lettre: 'D',
          texte: 'Un trou osmotique élevé peut orienter vers une intoxication au méthanol.',
          vraie: true,
          justification: 'Exact : le méthanol est osmotiquement actif mais n’entre pas dans la formule usuelle, ce qui élève le trou osmotique.',
        },
        {
          lettre: 'E',
          texte: 'L’osmolalité se mesure par cryoscopie, en évaluant l’abaissement du point de congélation.',
          vraie: true,
          justification: 'Exact : c’est la méthode de référence de mesure de l’osmolalité plasmatique.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-solutions-osmolarite-qcm-03',
      enonce: 'Concernant la pression osmotique et la loi de van ’t Hoff, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La pression osmotique est proportionnelle à l’osmolarité de la solution.',
          vraie: true,
          justification: 'Exact : Pi = R x T x Osm.',
        },
        {
          lettre: 'B',
          texte: 'La pression osmotique dépend de la nature chimique du soluté, indépendamment du nombre de particules.',
          vraie: false,
          justification: "C’est une propriété colligative : elle dépend uniquement du nombre total de particules dissoutes, pas de leur nature.",
        },
        {
          lettre: 'C',
          texte: 'Une membrane semi-perméable idéale est perméable au solvant et imperméable au soluté.',
          vraie: true,
          justification: 'Exact, c’est la définition de la membrane semi-perméable idéale utilisée dans le modèle de van ’t Hoff.',
        },
        {
          lettre: 'D',
          texte: 'Le coefficient de réflexion de Staverman vaut 1 pour une membrane totalement perméable au soluté.',
          vraie: false,
          justification: 'Sigma vaut 1 pour une membrane totalement imperméable au soluté (efficacité osmotique maximale) et 0 pour une membrane totalement perméable.',
        },
        {
          lettre: 'E',
          texte: 'La pression osmotique augmente avec la température absolue.',
          vraie: true,
          justification: 'Exact, d’après Pi = R x T x Osm, à osmolarité constante.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-solutions-osmolarite-qcm-04',
      enonce: 'Concernant la tonicité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La tonicité est une grandeur physico-chimique absolue, indépendante de la membrane considérée.',
          vraie: false,
          justification: "Faux : contrairement à l’osmolarité, la tonicité dépend de la perméabilité de la membrane cellulaire considérée au soluté.",
        },
        {
          lettre: 'B',
          texte: 'Seuls les solutés non diffusibles à travers la membrane déterminent la tonicité.',
          vraie: true,
          justification: 'Exact : ce sont les osmoles efficaces qui définissent la tonicité.',
        },
        {
          lettre: 'C',
          texte: 'Une solution hypotonique fait sortir l’eau de la cellule.',
          vraie: false,
          justification: 'Une solution hypotonique fait entrer l’eau dans la cellule, qui gonfle.',
        },
        {
          lettre: 'D',
          texte: 'Le sérum physiologique (NaCl à 9 g/L) est considéré comme isotonique au plasma.',
          vraie: true,
          justification: 'Exact, son osmolarité (environ 308 mOsm/L) est proche de celle du plasma.',
        },
        {
          lettre: 'E',
          texte: 'Une solution iso-osmotique est nécessairement isotonique.',
          vraie: false,
          justification: 'Non : cela dépend de la perméabilité de la membrane au soluté, comme le montre l’exemple de l’urée.',
        },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-solutions-osmolarite-qcm-05',
      enonce: 'Concernant le comportement des hématies en fonction du milieu, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'En milieu hypertonique, l’hématie se crénelle.',
          vraie: true,
          justification: "Exact : la sortie d’eau réduit son volume et déforme sa membrane, formant des crénelures.",
        },
        {
          lettre: 'B',
          texte: 'En milieu isotonique, le volume de l’hématie reste stable.',
          vraie: true,
          justification: 'Exact : il n’y a pas de mouvement net d’eau transmembranaire.',
        },
        {
          lettre: 'C',
          texte: 'En milieu hypotonique sévère, une hémolyse peut survenir.',
          vraie: true,
          justification: "Exact : l’entrée massive d’eau peut faire éclater la membrane érythrocytaire.",
        },
        {
          lettre: 'D',
          texte: 'Une solution d’urée iso-osmotique au plasma provoque un crénelage de l’hématie.',
          vraie: false,
          justification: 'Au contraire, l’urée diffusant librement, elle se comporte comme un milieu hypotonique et entraîne une turgescence, voire une hémolyse.',
        },
        {
          lettre: 'E',
          texte: 'Le glucosé à 5 % est utilisé dans certaines situations comme un apport net d’eau libre après métabolisation du glucose.',
          vraie: true,
          justification: "Exact : une fois le glucose métabolisé, l’eau se répartit dans l’ensemble de l’eau corporelle.",
        },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-solutions-osmolarite-qcm-06',
      enonce: 'Concernant les applications cliniques de l’osmolarité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le mannitol est utilisé pour réduire une pression intracrânienne élevée.',
          vraie: true,
          justification: "Exact : soluté hypertonique non diffusible à travers la barrière hémato-encéphalique, il attire l’eau hors du tissu cérébral.",
        },
        {
          lettre: 'B',
          texte: 'Une hyperglycémie majeure peut s’accompagner d’une hyponatrémie sans hypo-osmolarité vraie.',
          vraie: true,
          justification: "Exact : le glucose en excès, osmotiquement actif, appelle de l’eau vers le secteur extracellulaire et dilue la natrémie sans nécessairement abaisser l’osmolarité totale.",
        },
        {
          lettre: 'C',
          texte: 'Le chlorure de sodium hypertonique à 20 % fait entrer l’eau dans les cellules.',
          vraie: false,
          justification: 'Au contraire, un soluté hypertonique fait sortir l’eau des cellules vers le secteur extracellulaire.',
        },
        {
          lettre: 'D',
          texte: 'Le sérum physiologique se répartit essentiellement dans le secteur extracellulaire.',
          vraie: true,
          justification: 'Exact : le sodium, principal soluté, reste majoritairement extracellulaire.',
        },
        {
          lettre: 'E',
          texte: 'Une solution isotonique administrée par voie intraveineuse fait toujours gonfler les cellules.',
          vraie: false,
          justification: 'Non : par définition, une solution isotonique ne provoque aucun mouvement net d’eau transmembranaire.',
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
