import type { Fiche } from '../../types';

export const ficheSolutionsConcentrations: Fiche = {
  id: 'ue2-solutions-concentrations',
  ue: 'ue2',
  titre: 'Solutions et expressions des concentrations',
  sousTitre: 'Molarité, molalité, fraction molaire, osmolarité, dilution et produit de solubilité',
  chapitre: 'Chimie générale',
  ordre: 7,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'molarité',
    'molalité',
    'fraction molaire',
    'osmolarité',
    'dilution',
    'solubilité',
    'produit de solubilité',
    'pression osmotique',
  ],
  objectifs: [
    'Distinguer les différentes façons d’exprimer la concentration d’une solution.',
    'Convertir une concentration d’une unité à une autre.',
    'Calculer une dilution à l’aide de la relation C1V1 = C2V2.',
    'Définir l’osmolarité et son intérêt en physiologie.',
    'Utiliser le produit de solubilité pour prévoir la précipitation d’un composé peu soluble.',
  ],
  sections: [
    {
      id: 'expressions-concentration',
      titre: 'Les différentes expressions de la concentration',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une solution est un mélange homogène formé d’un solvant, en général majoritaire, et d’un ou plusieurs solutés. La concentration d’un soluté peut être exprimée de plusieurs façons, chacune adaptée à un usage particulier.",
        },
        {
          type: 'tableau',
          titre: 'Principales expressions de la concentration',
          colonnes: ['Grandeur', 'Définition', 'Unité usuelle'],
          lignes: [
            ['Concentration molaire (molarité)', 'Quantité de matière de soluté par litre de solution', 'mol/L'],
            ['Concentration massique', 'Masse de soluté par litre de solution', 'g/L'],
            ['Molalité', 'Quantité de matière de soluté par kilogramme de solvant', 'mol/kg'],
            ['Fraction molaire', 'Rapport de la quantité de matière d’un constituant à la quantité de matière totale', 'sans unité'],
          ],
        },
        {
          type: 'formule',
          expression: 'C = n / V',
          legende: 'Concentration molaire : n est la quantité de matière de soluté (mol), V le volume de solution (L).',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Molarité et molalité : ne pas confondre',
          texte:
            "La molarité rapporte la quantité de soluté au volume total de la solution, qui peut varier avec la température. La molalité la rapporte à la masse du solvant seul, indépendante de la température : c’est pourquoi la molalité est préférée dans certains calculs physico-chimiques rigoureux, notamment ceux impliquant les propriétés colligatives.",
        },
        {
          type: 'definition',
          terme: 'Fraction molaire',
          definition:
            "Rapport, pour un constituant i d’un mélange, de sa quantité de matière ni à la quantité de matière totale de tous les constituants : xi = ni / Σnj. La somme des fractions molaires de tous les constituants d’un mélange vaut toujours 1.",
        },
      ],
    },
    {
      id: 'dilution',
      titre: 'La dilution',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Diluer une solution consiste à ajouter du solvant pour diminuer la concentration d’un soluté, sans en modifier la quantité de matière totale présente dans la solution.",
        },
        {
          type: 'formule',
          expression: 'C1 · V1 = C2 · V2',
          legende:
            "Relation de dilution. C1 et V1 sont la concentration et le volume de la solution mère avant dilution ; C2 et V2 ceux de la solution fille après dilution.",
        },
        {
          type: 'etapes',
          titre: 'Réaliser une dilution au facteur F',
          etapes: [
            { titre: 'Définir le facteur de dilution', detail: 'F = C1 / C2 = V2 / V1 : la concentration est divisée par F, le volume final multiplié par F par rapport au volume prélevé.' },
            { titre: 'Prélever le volume V1 de solution mère', detail: 'Calculer V1 = V2 / F à partir du volume final souhaité V2.' },
            { titre: 'Compléter avec le solvant', detail: 'Ajouter du solvant jusqu’au volume final V2, en homogénéisant le mélange.' },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Dilutions en cascade',
          texte:
            "Lors de dilutions successives, les facteurs de dilution se multiplient : une première dilution au dixième suivie d’une seconde dilution au dixième donne un facteur de dilution global de 1/100, et non 1/20.",
        },
      ],
    },
    {
      id: 'osmolarite',
      titre: 'Osmolarité et pression osmotique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’osmolarité prend en compte le nombre total de particules osmotiquement actives en solution, ce qui la distingue de la simple concentration molaire lorsque le soluté se dissocie en solution.",
        },
        {
          type: 'formule',
          expression: 'Osmolarité = C × i',
          legende:
            "C est la concentration molaire du soluté et i le nombre de particules issues de la dissociation d’une molécule (facteur de van’t Hoff). Pour le glucose, non dissocié, i = 1 ; pour NaCl, totalement dissocié en Na+ et Cl−, i = 2.",
        },
        {
          type: 'tableau',
          titre: 'Exemples de calcul d’osmolarité',
          colonnes: ['Soluté', 'Dissociation', 'Facteur i', 'Osmolarité pour C = 1 mmol/L'],
          lignes: [
            ['Glucose', 'Non dissocié', '1', '1 mOsm/L'],
            ['NaCl', 'Na+ + Cl−', '2', '2 mOsm/L'],
            ['CaCl2', 'Ca2+ + 2 Cl−', '3', '3 mOsm/L'],
          ],
        },
        {
          type: 'definition',
          terme: 'Pression osmotique',
          definition:
            "Pression qu’il faudrait exercer sur une solution pour empêcher l’entrée nette de solvant à travers une membrane semi-perméable qui la sépare d’une solution moins concentrée. Elle est directement proportionnelle à l’osmolarité de la solution.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Osmolarité plasmatique',
          texte:
            "L’osmolarité plasmatique physiologique est proche de 285 à 295 mOsm/L, principalement déterminée par le sodium, le glucose et l’urée. Le maintien de cette valeur dans un intervalle étroit est essentiel à l’équilibre hydrique des cellules de l’organisme.",
        },
      ],
    },
    {
      id: 'solutions-isotoniques',
      titre: 'Solutions isotoniques, hypotoniques et hypertoniques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La comparaison de l’osmolarité d’une solution à celle du milieu intracellulaire détermine le comportement d’une cellule placée dans cette solution, par le jeu des mouvements d’eau à travers la membrane plasmique, perméable à l’eau mais non aux solutés.",
        },
        {
          type: 'tableau',
          titre: 'Comportement cellulaire selon la tonicité du milieu',
          colonnes: ['Type de solution', 'Comparaison d’osmolarité', 'Effet sur la cellule'],
          lignes: [
            ['Isotonique', 'Égale à celle du milieu intracellulaire', 'Aucune variation nette de volume'],
            ['Hypotonique', 'Inférieure à celle du milieu intracellulaire', 'Entrée d’eau dans la cellule, gonflement voire lyse'],
            ['Hypertonique', 'Supérieure à celle du milieu intracellulaire', 'Sortie d’eau de la cellule, rétraction (crénelage)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Exemple de soluté isotonique usuel',
          texte:
            "Une solution de chlorure de sodium à 9 g/L (dite « sérum physiologique ») est approximativement isotonique au plasma humain.",
        },
      ],
    },
    {
      id: 'solubilite',
      titre: 'Solubilité et produit de solubilité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La solubilité d’un composé ionique peu soluble est limitée par un équilibre entre le solide et ses ions dissous en solution. Cet équilibre est caractérisé par une constante appelée produit de solubilité.",
        },
        {
          type: 'formule',
          expression: 'AB(s) ⇌ A+(aq) + B−(aq), Ks = [A+]·[B−]',
          legende:
            "Ks (ou pKs = −log Ks) est le produit de solubilité, constant à température donnée pour un composé donné.",
        },
        {
          type: 'liste',
          items: [
            'Si le produit ionique [A+]·[B−] mesuré est inférieur à Ks, la solution est non saturée : le solide, s’il existe, continue à se dissoudre.',
            'Si le produit ionique est égal à Ks, la solution est saturée : équilibre entre dissolution et précipitation.',
            'Si le produit ionique dépasse Ks, un précipité se forme jusqu’à ce que le produit ionique retombe à la valeur de Ks.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Application biomédicale',
          texte:
            "Le produit de solubilité permet de comprendre la formation de certains calculs, comme les calculs rénaux d’oxalate de calcium, qui précipitent lorsque le produit des concentrations en ions calcium et oxalate dépasse le Ks de l’oxalate de calcium dans les urines.",
        },
      ],
    },
  ],
  pointsCles: [
    'La molarité rapporte la quantité de soluté au volume de solution ; la molalité la rapporte à la masse de solvant.',
    'La somme des fractions molaires de tous les constituants d’un mélange vaut toujours 1.',
    'La relation de dilution C1·V1 = C2·V2 conserve la quantité de matière de soluté.',
    'L’osmolarité tient compte du nombre de particules issues de la dissociation d’un soluté, via le facteur i.',
    'La pression osmotique est directement proportionnelle à l’osmolarité de la solution.',
    'Une cellule placée en milieu hypotonique gonfle, en milieu hypertonique se rétracte.',
    'Le produit de solubilité Ks détermine la limite de solubilité d’un composé ionique peu soluble.',
  ],
  erreursFrequentes: [
    'Confondre molarité (par litre de solution) et molalité (par kilogramme de solvant).',
    'Oublier le facteur de dissociation i lors du calcul de l’osmolarité d’un électrolyte.',
    'Multiplier au lieu de composer les facteurs de dilution lors de dilutions successives.',
    'Inverser le sens des mouvements d’eau : l’eau se déplace toujours vers le compartiment le plus concentré (hypertonique), et non l’inverse.',
    'Croire que le produit de solubilité dépend de la quantité de solide en excès présente dans la solution, alors qu’il ne dépend que de la température.',
  ],
  mnemotechniques: [
    {
      moyen: '« Molarité = Litre, Molalité = Kilo »',
      explication:
        'La rime aide à retenir que la molarité est rapportée au volume (litre) de solution, la molalité à la masse (kilogramme) de solvant.',
    },
    {
      moyen: '« Hyper fait maigrir la cellule »',
      explication:
        'Un milieu hypertonique fait sortir l’eau de la cellule, qui se rétracte (« maigrit ») ; un milieu hypotonique la fait gonfler.',
    },
  ],
  sources: [
    'Atkins, Chimie physique',
    'Chimie générale, collection PASS/LAS, ouvrage de référence UE2',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-solutions-concentrations-fc-01', recto: 'Donner la formule de la concentration molaire.', verso: 'C = n / V, avec n en mol et V en L.', type: 'formule', tags: ['molarité'] },
    { id: 'ue2-solutions-concentrations-fc-02', recto: 'Quelle est la différence entre molarité et molalité ?', verso: 'La molarité rapporte la quantité de soluté au volume de solution ; la molalité la rapporte à la masse du solvant.', type: 'definition', tags: ['molalité'] },
    { id: 'ue2-solutions-concentrations-fc-03', recto: 'Que vaut la somme des fractions molaires d’un mélange ?', verso: '1, toujours.', type: 'chiffre', tags: ['fraction molaire'] },
    { id: 'ue2-solutions-concentrations-fc-04', recto: 'Donner la relation de dilution.', verso: 'C1 · V1 = C2 · V2.', type: 'formule', tags: ['dilution'] },
    { id: 'ue2-solutions-concentrations-fc-05', recto: 'Comment calcule-t-on l’osmolarité d’un soluté ?', verso: 'Osmolarité = C × i, où i est le nombre de particules issues de la dissociation d’une molécule de soluté.', type: 'formule', tags: ['osmolarité'] },
    { id: 'ue2-solutions-concentrations-fc-06', recto: 'Quel est le facteur i du chlorure de sodium NaCl ?', verso: '2, car NaCl se dissocie totalement en Na+ et Cl−.', type: 'chiffre', tags: ['osmolarité'] },
    { id: 'ue2-solutions-concentrations-fc-07', recto: 'Que devient une cellule placée en milieu hypotonique ?', verso: 'Elle gonfle, car l’eau entre dans la cellule (voire elle peut se lyser).', type: 'mecanisme', tags: ['tonicité'] },
    { id: 'ue2-solutions-concentrations-fc-08', recto: 'Quelle est l’osmolarité plasmatique physiologique usuelle ?', verso: 'Environ 285 à 295 mOsm/L.', type: 'chiffre', tags: ['osmolarité plasmatique'] },
    { id: 'ue2-solutions-concentrations-fc-09', recto: 'Définir le produit de solubilité Ks.', verso: 'Constante de l’équilibre entre un solide ionique peu soluble et ses ions dissous : pour AB, Ks = [A+]·[B−].', type: 'definition', tags: ['solubilité'] },
    { id: 'ue2-solutions-concentrations-fc-10', recto: 'Que se passe-t-il si le produit ionique dépasse le Ks ?', verso: 'Un précipité se forme jusqu’à ce que le produit ionique redescende à la valeur de Ks.', type: 'mecanisme', tags: ['solubilité'] },
    { id: 'ue2-solutions-concentrations-fc-11', recto: 'La pression osmotique est-elle proportionnelle à l’osmolarité ?', verso: 'Oui, elle lui est directement proportionnelle.', type: 'mecanisme', tags: ['pression osmotique'] },
    { id: 'ue2-solutions-concentrations-fc-12', recto: 'Pourquoi la molalité est-elle indépendante de la température, contrairement à la molarité ?', verso: 'Parce qu’elle est rapportée à une masse de solvant, invariable avec la température, alors que le volume d’une solution varie légèrement avec elle.', type: 'mecanisme', tags: ['molalité'] },
  ],
  qcm: [
    {
      id: 'ue2-solutions-concentrations-qcm-01',
      enonce: 'Concernant les expressions de la concentration, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La molarité s’exprime en mol/L.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'La molalité est rapportée au volume total de la solution.', vraie: false, justification: 'Faux : elle est rapportée à la masse du solvant, non au volume de la solution.' },
        { lettre: 'C', texte: 'La fraction molaire est sans unité.', vraie: true, justification: 'Exact : c’est un rapport de deux quantités de matière.' },
        { lettre: 'D', texte: 'La concentration massique s’exprime généralement en g/L.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'La somme des fractions molaires des constituants d’un mélange peut dépasser 1.', vraie: false, justification: 'Faux : cette somme vaut toujours exactement 1.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir que la fraction molaire est une grandeur sans dimension dont la somme vaut 1.',
      difficulte: 1,
    },
    {
      id: 'ue2-solutions-concentrations-qcm-02',
      enonce: 'Concernant la dilution, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La dilution modifie la quantité de matière totale de soluté.', vraie: false, justification: 'Faux : la dilution ajoute du solvant mais conserve la quantité de matière de soluté.' },
        { lettre: 'B', texte: 'La relation C1·V1 = C2·V2 est valable lors d’une dilution.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Deux dilutions successives au dixième donnent un facteur de dilution global de 1/20.', vraie: false, justification: 'Faux : les facteurs se multiplient, donnant un facteur global de 1/100.' },
        { lettre: 'D', texte: 'Diluer une solution en diminue la concentration.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Le facteur de dilution F est égal à V2/V1.', vraie: true, justification: 'Exact, V2 étant le volume final et V1 le volume prélevé de solution mère.' },
      ],
      correction: 'Réponses exactes : B, D et E. Bien composer les facteurs lors de dilutions en cascade.',
      difficulte: 2,
    },
    {
      id: 'ue2-solutions-concentrations-qcm-03',
      enonce: 'Concernant l’osmolarité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’osmolarité du glucose à 1 mmol/L est de 1 mOsm/L.', vraie: true, justification: 'Exact : le glucose ne se dissocie pas, son facteur i vaut 1.' },
        { lettre: 'B', texte: 'L’osmolarité de CaCl2 à 1 mmol/L est de 2 mOsm/L.', vraie: false, justification: 'Faux : CaCl2 se dissocie en trois particules (Ca2+ + 2 Cl−), son facteur i vaut 3, soit 3 mOsm/L.' },
        { lettre: 'C', texte: 'L’osmolarité plasmatique physiologique est proche de 285 à 295 mOsm/L.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'La pression osmotique est inversement proportionnelle à l’osmolarité.', vraie: false, justification: 'Faux : elle lui est directement proportionnelle.' },
        { lettre: 'E', texte: 'L’osmolarité tient compte de la dissociation ionique d’un soluté.', vraie: true, justification: 'Exact, via le facteur de van’t Hoff i.' },
      ],
      correction: 'Réponses exactes : A, C et E. Attention au calcul du facteur i pour les solutés à plusieurs ions, comme CaCl2.',
      difficulte: 2,
    },
    {
      id: 'ue2-solutions-concentrations-qcm-04',
      enonce: 'Concernant les solutions isotoniques, hypotoniques et hypertoniques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une cellule placée en milieu hypertonique gonfle.', vraie: false, justification: 'Faux : elle se rétracte, l’eau sortant de la cellule vers le milieu plus concentré.' },
        { lettre: 'B', texte: 'Une cellule placée en milieu isotonique ne change pas de volume.', vraie: true, justification: 'Exact, l’osmolarité étant équilibrée de part et d’autre de la membrane.' },
        { lettre: 'C', texte: 'Le sérum physiologique à 9 g/L de NaCl est approximativement isotonique au plasma.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'L’eau se déplace toujours du compartiment le plus concentré vers le compartiment le moins concentré.', vraie: false, justification: 'Faux : l’eau se déplace vers le compartiment le plus concentré (hypertonique), et non l’inverse.' },
        { lettre: 'E', texte: 'Un milieu hypotonique peut provoquer la lyse d’une cellule.', vraie: true, justification: 'Exact, en cas d’entrée d’eau massive dans la cellule.' },
      ],
      correction: 'Réponses exactes : B, C et E. Bien retenir le sens du mouvement de l’eau, toujours vers le compartiment le plus concentré.',
      difficulte: 2,
    },
    {
      id: 'ue2-solutions-concentrations-qcm-05',
      enonce: 'Concernant le produit de solubilité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ks est une constante qui dépend de la température.', vraie: true, justification: 'Exact, comme toute constante d’équilibre.' },
        { lettre: 'B', texte: 'Si le produit ionique est inférieur à Ks, la solution est sursaturée.', vraie: false, justification: 'Faux : elle est non saturée dans ce cas ; la sursaturation correspond à un produit ionique supérieur à Ks.' },
        { lettre: 'C', texte: 'Un précipité se forme lorsque le produit ionique dépasse Ks.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le Ks dépend de la quantité de solide en excès présente dans la solution.', vraie: false, justification: 'Faux : le Ks ne dépend que de la température, pas de la quantité de solide en excès.' },
        { lettre: 'E', texte: 'Le produit de solubilité peut expliquer la formation de calculs rénaux d’oxalate de calcium.', vraie: true, justification: 'Exact, lorsque le produit des concentrations en calcium et en oxalate dépasse le Ks correspondant.' },
      ],
      correction: 'Réponses exactes : A, C et E. Le Ks est une constante indépendante de la quantité de solide présente.',
      difficulte: 2,
    },
    {
      id: 'ue2-solutions-concentrations-qcm-06',
      enonce: 'Concernant les calculs de concentration, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La molalité est utile pour certains calculs indépendants de la température.', vraie: true, justification: 'Exact, car elle est rapportée à une masse de solvant invariable.' },
        { lettre: 'B', texte: 'La molarité varie légèrement avec la température, car le volume de la solution en dépend.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Une solution où le soluté représente une fraction molaire de 0,2 contient forcément 20 % en masse de ce soluté.', vraie: false, justification: 'Faux : la fraction molaire est un rapport de quantités de matière, pas de masses, ces deux grandeurs ne coïncidant que si les masses molaires des constituants sont égales.' },
        { lettre: 'D', texte: 'La concentration massique s’obtient en multipliant la concentration molaire par la masse molaire du soluté.', vraie: true, justification: 'Exact : concentration massique = C (mol/L) × M (g/mol).' },
        { lettre: 'E', texte: 'Un volume final V2 obtenu par dilution est toujours inférieur au volume prélevé V1.', vraie: false, justification: 'Faux : V2 est le volume final après ajout de solvant, il est donc supérieur au volume prélevé V1.' },
      ],
      correction: 'Réponses exactes : A, B et D. Bien distinguer fraction molaire (quantités de matière) et fraction massique.',
      difficulte: 2,
    },
  ],
};
