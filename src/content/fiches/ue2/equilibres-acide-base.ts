import type { Fiche } from '../../types';

export const ficheEquilibresAcideBase: Fiche = {
  id: 'ue2-equilibres-acide-base',
  ue: 'ue2',
  titre: 'Équilibres acido-basiques',
  sousTitre: 'Couples acide/base, Ka et pKa, équation de Henderson-Hasselbalch et tampons physiologiques',
  chapitre: 'Chimie générale',
  ordre: 5,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'couple acide/base',
    'Ka',
    'pKa',
    'pH',
    'Henderson-Hasselbalch',
    'solution tampon',
    'tampon bicarbonate',
    'pouvoir tampon',
  ],
  objectifs: [
    'Définir un couple acide/base au sens de Brønsted et écrire les demi-équations correspondantes.',
    'Relier Ka, pKa et force d’un acide ou d’une base.',
    'Calculer un pH à partir de la nature et de la concentration d’une solution acide ou basique.',
    'Utiliser l’équation de Henderson-Hasselbalch pour décrire une solution tampon.',
    'Expliquer le fonctionnement des principaux systèmes tampons physiologiques.',
  ],
  sections: [
    {
      id: 'couples-acide-base',
      titre: 'Couples acide/base et constante d’acidité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Selon la théorie de Brønsted, un acide est une espèce capable de céder un proton H+, et une base une espèce capable d’en capter un. Un acide AH et sa base conjuguée A− forment un couple acide/base noté AH/A−, relié par un équilibre de transfert de proton.",
        },
        {
          type: 'formule',
          expression: 'AH + H2O ⇌ A− + H3O+',
          legende: 'Équilibre de dissociation d’un acide AH dans l’eau, définissant le couple acide/base AH/A−.',
        },
        {
          type: 'definition',
          terme: 'Constante d’acidité Ka',
          definition:
            "Constante de l’équilibre de dissociation d’un acide dans l’eau : Ka = [A−][H3O+] / [AH]. Plus Ka est grand, plus l’acide est fort, c’est-à-dire plus il se dissocie facilement.",
        },
        {
          type: 'formule',
          expression: 'pKa = −log(Ka)',
          legende: 'Le pKa est le cologarithme décimal de Ka. Plus le pKa est petit, plus l’acide est fort.',
        },
        {
          type: 'tableau',
          titre: 'Force relative de quelques couples usuels',
          colonnes: ['Couple acide/base', 'pKa approximatif', 'Remarque'],
          lignes: [
            ['H3O+/H2O', '0 (par convention dans l’eau)', 'Limite de force d’un acide fort dans l’eau'],
            ['CH3COOH/CH3COO−', '4,8', 'Acide faible usuel (acide acétique)'],
            ['H2CO3/HCO3−', '6,1', 'Couple du tampon bicarbonate plasmatique (pKa apparent)'],
            ['H2PO4−/HPO4^2−', '7,2', 'Couple du tampon phosphate'],
            ['NH4+/NH3', '9,2', 'Couple de l’ammonium et de l’ammoniac'],
            ['H2O/OH−', '14 (par convention dans l’eau)', 'Limite de force d’une base forte dans l’eau'],
          ],
        },
      ],
    },
    {
      id: 'ph-solutions',
      titre: 'Le pH des solutions',
      blocs: [
        {
          type: 'definition',
          terme: 'pH',
          definition:
            "Grandeur sans dimension définie par pH = −log[H3O+], où [H3O+] est la concentration en ions oxonium exprimée en mol/L. Le pH mesure l’acidité d’une solution aqueuse : plus il est bas, plus la solution est acide.",
        },
        {
          type: 'formule',
          expression: 'Ke = [H3O+]·[OH−] = 10^-14 à 25 °C',
          legende: 'Produit ionique de l’eau. À 25 °C, une solution neutre a un pH de 7 ([H3O+] = [OH−] = 10^-7 mol/L).',
        },
        {
          type: 'tableau',
          titre: 'Calcul du pH selon le type de solution',
          colonnes: ['Type de solution', 'Approximation usuelle', 'Formule'],
          lignes: [
            ['Acide fort de concentration C', 'Dissociation totale', 'pH = −log(C)'],
            ['Base forte de concentration C', 'Dissociation totale', 'pH = 14 + log(C)'],
            ['Acide faible de concentration C (pKa connu)', 'Réaction limitée, approximation valable si C/Ka est grand', 'pH ≈ 1/2 (pKa − log C)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Acide fort ne signifie pas acide concentré',
          texte:
            "La force d’un acide (caractérisée par son Ka ou son pKa) est une propriété intrinsèque de la molécule, indépendante de sa concentration dans la solution. Un acide fort très dilué peut avoir un pH proche de la neutralité, tandis qu’un acide faible très concentré peut être franchement acide.",
        },
      ],
    },
    {
      id: 'henderson-hasselbalch',
      titre: 'Équation de Henderson-Hasselbalch',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’équation de Henderson-Hasselbalch relie le pH d’une solution contenant un couple acide/base au pKa de ce couple et au rapport des concentrations de la base et de l’acide conjugués. Elle est fondamentale pour l’étude des solutions tampons.",
        },
        {
          type: 'formule',
          expression: 'pH = pKa + log ( [A−] / [AH] )',
          legende: 'Équation de Henderson-Hasselbalch. À pH = pKa, les concentrations d’acide et de base conjuguée sont égales.',
        },
        {
          type: 'liste',
          items: [
            'Si pH < pKa, la forme acide AH est majoritaire.',
            'Si pH = pKa, les deux formes sont à parts égales (rapport 1:1).',
            'Si pH > pKa, la forme basique A− est majoritaire.',
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Règle des unités de pH',
          texte:
            "Chaque écart d’une unité de pH par rapport au pKa multiplie ou divise par 10 le rapport [A−]/[AH]. À pH = pKa + 1, la base conjuguée est dix fois plus abondante que l’acide ; à pH = pKa − 1, c’est l’inverse.",
        },
      ],
    },
    {
      id: 'solutions-tampons',
      titre: 'Les solutions tampons',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une solution tampon est un mélange d’un acide faible et de sa base conjuguée, capable de s’opposer aux variations de pH lors de l’ajout modéré d’un acide fort ou d’une base forte, ou lors d’une dilution.",
        },
        {
          type: 'definition',
          terme: 'Pouvoir tampon',
          definition:
            "Capacité d’une solution tampon à limiter les variations de pH. Il est maximal lorsque le pH de la solution est égal au pKa du couple, c’est-à-dire lorsque les concentrations d’acide et de base conjuguée sont égales.",
        },
        {
          type: 'etapes',
          titre: 'Mécanisme d’action d’un tampon',
          etapes: [
            {
              titre: 'Ajout d’un acide fort',
              detail: 'Les protons apportés sont captés par la base conjuguée A−, qui se transforme en acide AH, limitant la baisse de pH.',
            },
            {
              titre: 'Ajout d’une base forte',
              detail: 'Les ions hydroxyde consomment l’acide AH, qui se transforme en base conjuguée A−, limitant la hausse de pH.',
            },
            {
              titre: 'Limite du système',
              detail: 'Le pouvoir tampon s’épuise lorsque l’une des deux formes du couple est presque totalement consommée : le tampon est alors dit saturé.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Zone d’efficacité d’un tampon',
          texte:
            "Un tampon est considéré comme efficace pour un pH compris dans l’intervalle pKa ± 1 unité de pH. En dehors de cette zone, l’une des deux formes du couple devient trop minoritaire pour amortir efficacement un ajout d’acide ou de base.",
        },
      ],
    },
    {
      id: 'tampons-physiologiques',
      titre: 'Les tampons physiologiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’organisme maintient le pH du sang artériel dans un intervalle étroit, entre 7,38 et 7,42, grâce à plusieurs systèmes tampons complémentaires, agissant à différentes échelles de temps et dans différents compartiments.",
        },
        {
          type: 'tableau',
          titre: 'Principaux systèmes tampons de l’organisme',
          colonnes: ['Système tampon', 'Couple', 'Compartiment principal'],
          lignes: [
            ['Bicarbonate', 'H2CO3/HCO3−', 'Plasma, principal tampon extracellulaire'],
            ['Phosphate', 'H2PO4−/HPO4^2−', 'Intracellulaire et urinaire'],
            ['Protéines plasmatiques et hémoglobine', 'Groupements ionisables des chaînes latérales (notamment histidine)', 'Sang total'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Particularité du système bicarbonate',
          texte:
            "Le système bicarbonate est un tampon ouvert : le CO2 dissous, en équilibre avec H2CO3, peut être éliminé par la ventilation pulmonaire, et l’ion bicarbonate régulé par le rein. Cette double régulation, respiratoire et rénale, lui confère une efficacité supérieure à celle d’un tampon fermé de même pKa, alors même que le pKa apparent du couple (environ 6,1) est éloigné du pH physiologique (7,4).",
        },
        {
          type: 'formule',
          expression: 'pH = 6,1 + log ( [HCO3−] / (0,03 × PaCO2) )',
          legende:
            "Équation de Henderson-Hasselbalch appliquée au système bicarbonate plasmatique. PaCO2 est la pression partielle artérielle en dioxyde de carbone, exprimée en mmHg ; 0,03 est le coefficient de solubilité du CO2 dans le plasma.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Valeurs plasmatiques usuelles',
          texte:
            "À l’état physiologique, la bicarbonatémie est proche de 24 mmol/L et la PaCO2 proche de 40 mmHg, ce qui, appliqué à l’équation de Henderson-Hasselbalch du système bicarbonate, redonne un pH plasmatique proche de 7,4.",
        },
      ],
    },
  ],
  pointsCles: [
    'Un couple acide/base de Brønsted est relié par un transfert de proton ; le pKa caractérise sa force (plus le pKa est petit, plus l’acide est fort).',
    'Le pH mesure l’acidité d’une solution aqueuse : pH = −log[H3O+].',
    'La force d’un acide (pKa) est indépendante de sa concentration dans la solution.',
    'L’équation de Henderson-Hasselbalch, pH = pKa + log([A−]/[AH]), relie pH, pKa et rapport des concentrations.',
    'Une solution tampon amortit les variations de pH ; son pouvoir tampon est maximal quand pH = pKa.',
    'Un tampon est efficace dans l’intervalle pKa ± 1 unité de pH.',
    'Le tampon bicarbonate plasmatique est un système ouvert, régulé à la fois par la ventilation et par le rein.',
    'Le pH plasmatique physiologique est maintenu entre 7,38 et 7,42.',
  ],
  erreursFrequentes: [
    'Confondre force d’un acide (Ka, pKa) et concentration de la solution qui le contient.',
    'Oublier que pKa petit signifie acide fort, et inversement.',
    'Croire que le pouvoir tampon est maximal quand une seule des deux formes du couple est très majoritaire, alors qu’il est maximal quand pH = pKa.',
    'Appliquer l’équation de Henderson-Hasselbalch générale au système bicarbonate sans tenir compte de la solubilité du CO2 (facteur 0,03).',
    'Penser que le tampon bicarbonate est inefficace parce que son pKa apparent (6,1) est éloigné du pH physiologique, en oubliant son caractère de système ouvert.',
    'Confondre pH acide et solution concentrée : un acide fort très dilué peut avoir un pH proche de 7.',
  ],
  mnemotechniques: [
    {
      moyen: '« Petit pKa, grand pouvoir » (acide fort)',
      explication:
        'Un pKa petit correspond à un Ka grand, donc à un acide fort qui se dissocie facilement.',
    },
    {
      moyen: '« HH » pour Henderson-Hasselbalch',
      explication:
        'pH = pKa + log(base/acide) : la Base est toujours au numérateur du logarithme, l’Acide au dénominateur (ordre alphabétique inversé pour le retenir).',
    },
    {
      moyen: '« pKa ± 1 » comme fenêtre du tampon',
      explication:
        'Retenir que la zone tampon efficace est toujours limitée à un intervalle d’une unité de pH de part et d’autre du pKa du couple.',
    },
  ],
  sources: [
    'Atkins, Chimie physique',
    'Chimie générale, collection PASS/LAS, ouvrage de référence UE2',
    'Harper, Biochimie médicale',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-equilibres-acide-base-fc-01', recto: 'Selon Brønsted, comment définit-on un acide ?', verso: 'Une espèce chimique capable de céder un proton H+.', type: 'definition', tags: ['Brønsted'] },
    { id: 'ue2-equilibres-acide-base-fc-02', recto: 'Que représente le pKa d’un couple acide/base ?', verso: 'Le cologarithme décimal de la constante d’acidité Ka ; plus le pKa est petit, plus l’acide est fort.', type: 'definition', tags: ['pKa'] },
    { id: 'ue2-equilibres-acide-base-fc-03', recto: 'Donner la formule du pH.', verso: 'pH = −log[H3O+], la concentration étant exprimée en mol/L.', type: 'formule', tags: ['pH'] },
    { id: 'ue2-equilibres-acide-base-fc-04', recto: 'Quel est le produit ionique de l’eau à 25 °C ?', verso: 'Ke = [H3O+]·[OH−] = 10^-14.', type: 'chiffre', tags: ['pH', 'eau'] },
    { id: 'ue2-equilibres-acide-base-fc-05', recto: 'Donner l’équation de Henderson-Hasselbalch.', verso: 'pH = pKa + log([A−]/[AH]).', type: 'formule', tags: ['Henderson-Hasselbalch'] },
    { id: 'ue2-equilibres-acide-base-fc-06', recto: 'Quand le pouvoir tampon d’une solution est-il maximal ?', verso: 'Quand le pH de la solution est égal au pKa du couple, soit des concentrations égales d’acide et de base conjuguée.', type: 'mecanisme', tags: ['tampon'] },
    { id: 'ue2-equilibres-acide-base-fc-07', recto: 'Quelle est la zone d’efficacité usuelle d’un tampon ?', verso: 'L’intervalle pKa ± 1 unité de pH.', type: 'chiffre', tags: ['tampon'] },
    { id: 'ue2-equilibres-acide-base-fc-08', recto: 'Quel est le principal tampon extracellulaire de l’organisme ?', verso: 'Le système bicarbonate, couple H2CO3/HCO3−.', type: 'classification', tags: ['tampons physiologiques'] },
    { id: 'ue2-equilibres-acide-base-fc-09', recto: 'Pourquoi le tampon bicarbonate reste-t-il efficace malgré un pKa éloigné du pH physiologique ?', verso: 'Parce que c’est un système ouvert : le CO2 est éliminé par la ventilation et le bicarbonate régulé par le rein.', type: 'mecanisme', tags: ['tampon bicarbonate'] },
    { id: 'ue2-equilibres-acide-base-fc-10', recto: 'Quelles sont les valeurs physiologiques usuelles du pH plasmatique artériel ?', verso: 'Entre 7,38 et 7,42.', type: 'chiffre', tags: ['pH plasmatique'] },
    { id: 'ue2-equilibres-acide-base-fc-11', recto: 'La force d’un acide dépend-elle de la concentration de la solution ?', verso: 'Non : la force d’un acide, mesurée par son Ka ou son pKa, est une propriété intrinsèque de la molécule.', type: 'mecanisme', tags: ['acide faible', 'acide fort'] },
    { id: 'ue2-equilibres-acide-base-fc-12', recto: 'Que devient un acide faible AH lors de l’ajout d’une base forte dans une solution tampon ?', verso: 'Il cède un proton et se transforme en sa base conjuguée A−, ce qui limite la hausse de pH.', type: 'mecanisme', tags: ['tampon'] },
  ],
  qcm: [
    {
      id: 'ue2-equilibres-acide-base-qcm-01',
      enonce: 'Concernant les couples acide/base et la constante Ka, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un pKa faible correspond à un acide fort.', vraie: true, justification: 'Exact : un pKa faible signifie un Ka élevé, donc une dissociation facile.' },
        { lettre: 'B', texte: 'La base conjuguée d’un acide fort est une base forte.', vraie: false, justification: 'Faux : la base conjuguée d’un acide fort est en général une base très faible, voire indifférente.' },
        { lettre: 'C', texte: 'Le Ka est la constante de l’équilibre de dissociation d’un acide dans l’eau.', vraie: true, justification: 'Exact, Ka = [A−][H3O+]/[AH].' },
        { lettre: 'D', texte: 'Un couple acide/base est relié par un transfert d’électron.', vraie: false, justification: 'Faux : un couple acide/base au sens de Brønsted est relié par un transfert de proton, non d’électron.' },
        { lettre: 'E', texte: 'Le pKa est indépendant de la concentration de la solution.', vraie: true, justification: 'Exact : c’est une constante d’équilibre, propriété intrinsèque du couple.' },
      ],
      correction: 'Réponses exactes : A, C et E. Le transfert d’électron caractérise l’oxydoréduction, non l’acido-basicité.',
      difficulte: 2,
    },
    {
      id: 'ue2-equilibres-acide-base-qcm-02',
      enonce: 'Concernant le pH, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une solution neutre a un pH de 7 à 25 °C.', vraie: true, justification: 'Exact, correspondant à [H3O+] = [OH−] = 10^-7 mol/L.' },
        { lettre: 'B', texte: 'Plus le pH est bas, plus la solution est basique.', vraie: false, justification: 'Faux : plus le pH est bas, plus la solution est acide.' },
        { lettre: 'C', texte: 'Le pH d’un acide fort dilué peut être proche de la neutralité.', vraie: true, justification: 'Exact : la force d’un acide n’est pas liée à sa concentration.' },
        { lettre: 'D', texte: 'Le produit [H3O+]·[OH−] vaut toujours 10^-7 à 25 °C.', vraie: false, justification: 'Faux : ce produit, le produit ionique de l’eau, vaut 10^-14 à 25 °C.' },
        { lettre: 'E', texte: 'Le pH d’une base forte de concentration C s’écrit pH = 14 + log(C).', vraie: true, justification: 'Exact, en considérant une dissociation totale de la base forte.' },
      ],
      correction: 'Réponses exactes : A, C et E. Attention à ne pas confondre le produit ionique de l’eau avec sa valeur au pH neutre.',
      difficulte: 2,
    },
    {
      id: 'ue2-equilibres-acide-base-qcm-03',
      enonce: 'Concernant l’équation de Henderson-Hasselbalch, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle s’écrit pH = pKa + log([A−]/[AH]).', vraie: true, justification: 'Exact : c’est l’expression de l’équation de Henderson-Hasselbalch, qui relie le pH au pKa du couple et au rapport des concentrations des deux formes.' },
        { lettre: 'B', texte: 'À pH = pKa, la forme acide est très majoritaire.', vraie: false, justification: 'Faux : à pH = pKa, les deux formes sont à parts égales.' },
        { lettre: 'C', texte: 'Si pH > pKa, la forme basique A− est majoritaire.', vraie: true, justification: 'Exact : lorsque pH > pKa, le terme log([A−]/[AH]) est positif, donc [A−] > [AH].' },
        { lettre: 'D', texte: 'Un écart d’une unité de pH par rapport au pKa multiplie par 10 le rapport [A−]/[AH].', vraie: true, justification: 'Exact, en raison de la relation logarithmique.' },
        { lettre: 'E', texte: 'Cette équation s’applique uniquement au couple bicarbonate.', vraie: false, justification: 'Faux : elle s’applique à tout couple acide/base, le tampon bicarbonate n’étant qu’un cas particulier.' },
      ],
      correction: 'Réponses exactes : A, C et D. L’équation de Henderson-Hasselbalch est une relation générale valable pour tout couple acide/base.',
      difficulte: 2,
    },
    {
      id: 'ue2-equilibres-acide-base-qcm-04',
      enonce: 'Concernant les solutions tampons, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une solution tampon est un mélange d’un acide faible et de sa base conjuguée.', vraie: true, justification: 'Exact : c’est la définition même d’une solution tampon.' },
        { lettre: 'B', texte: 'Le pouvoir tampon est maximal en dehors de l’intervalle pKa ± 1.', vraie: false, justification: 'Faux : il est maximal à pH = pKa et l’intervalle pKa ± 1 délimite la zone d’efficacité.' },
        { lettre: 'C', texte: 'L’ajout d’un acide fort à un tampon est en partie neutralisé par la base conjuguée A−.', vraie: true, justification: 'Exact : A− capte le proton apporté et se transforme en AH.' },
        { lettre: 'D', texte: 'Un tampon peut amortir indéfiniment l’ajout d’acide ou de base, quelle que soit la quantité ajoutée.', vraie: false, justification: 'Faux : le pouvoir tampon s’épuise lorsque l’une des deux formes est presque totalement consommée.' },
        { lettre: 'E', texte: 'Une solution tampon limite les variations de pH lors d’une dilution modérée.', vraie: true, justification: 'Exact, c’est l’une des propriétés caractéristiques d’un tampon.' },
      ],
      correction: 'Réponses exactes : A, C et E. Le pouvoir tampon a toujours une limite, liée à l’épuisement de l’une des deux formes.',
      difficulte: 2,
    },
    {
      id: 'ue2-equilibres-acide-base-qcm-05',
      enonce: 'Concernant les tampons physiologiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le système bicarbonate est le principal tampon extracellulaire.', vraie: true, justification: 'Exact : le couple H2CO3/HCO3− assure la majeure partie du pouvoir tampon du plasma et du liquide interstitiel.' },
        { lettre: 'B', texte: 'Le pKa apparent du couple H2CO3/HCO3− est proche de 6,1.', vraie: true, justification: 'Exact : le pKa apparent de ce couple vaut environ 6,1.' },
        { lettre: 'C', texte: 'Le système bicarbonate est un tampon fermé.', vraie: false, justification: 'Faux : c’est un tampon ouvert, le CO2 pouvant être éliminé par la ventilation pulmonaire.' },
        { lettre: 'D', texte: 'Le rein participe à la régulation de la concentration en bicarbonate.', vraie: true, justification: 'Exact, en complément de la régulation respiratoire du CO2.' },
        { lettre: 'E', texte: 'Le pH plasmatique normal se situe entre 6,8 et 7,0.', vraie: false, justification: 'Faux : le pH plasmatique physiologique se situe entre 7,38 et 7,42.' },
      ],
      correction: 'Réponses exactes : A, B et D. Le caractère ouvert du système bicarbonate explique son efficacité malgré un pKa éloigné de 7,4.',
      difficulte: 2,
    },
    {
      id: 'ue2-equilibres-acide-base-qcm-06',
      enonce: 'Concernant les systèmes tampons de l’organisme, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le système phosphate met en jeu le couple H2PO4−/HPO4^2−.', vraie: true, justification: 'Exact, avec un pKa proche de 7,2.' },
        { lettre: 'B', texte: 'L’hémoglobine peut jouer un rôle tampon dans le sang.', vraie: true, justification: 'Exact, notamment via les résidus histidine ionisables de sa chaîne polypeptidique.' },
        { lettre: 'C', texte: 'Le tampon phosphate est le principal tampon du plasma sanguin.', vraie: false, justification: 'Faux : c’est le système bicarbonate qui est le principal tampon plasmatique.' },
        { lettre: 'D', texte: 'La bicarbonatémie physiologique est proche de 24 mmol/L.', vraie: true, justification: 'Exact : la bicarbonatémie plasmatique physiologique est d’environ 24 mmol/L.' },
        { lettre: 'E', texte: 'La PaCO2 physiologique est proche de 40 mmHg.', vraie: true, justification: 'Exact : la pression partielle artérielle en CO2 physiologique est d’environ 40 mmHg.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir les valeurs de référence de la bicarbonatémie et de la PaCO2 physiologiques.',
      difficulte: 2,
    },
  ],
};
