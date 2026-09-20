import type { Fiche } from '../../types';

export const ficheCycleKrebs: Fiche = {
  id: 'bioch-cycle-krebs',
  ue: 'bioch',
  titre: 'Le cycle de Krebs',
  sousTitre: 'Décarboxylation oxydative du pyruvate, étapes du cycle, bilan et caractère amphibolique',
  chapitre: 'Métabolisme',
  ordre: 10,
  duree: 29,
  difficulte: 2,
  motsCles: [
    'pyruvate déshydrogénase',
    'acétyl-CoA',
    'cycle de Krebs',
    'citrate synthase',
    'succinate déshydrogénase',
    'voie amphibolique',
    'anaplérose',
  ],
  objectifs: [
    'Décrire la réaction de décarboxylation oxydative du pyruvate en acétyl-CoA.',
    'Décrire les huit étapes du cycle de Krebs et leurs enzymes.',
    'Établir le bilan du cycle en ATP, NADH, FADH2 et CO2.',
    'Expliquer le caractère amphibolique du cycle de Krebs.',
    'Définir l’anaplérose et citer une réaction anaplérotique majeure.',
    'Décrire la régulation du complexe pyruvate déshydrogénase et du cycle de Krebs.',
  ],
  sections: [
    {
      id: 'decarboxylation-pyruvate',
      titre: 'La décarboxylation oxydative du pyruvate',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Avant d’entrer dans le cycle de Krebs, le pyruvate issu de la glycolyse doit être transformé en acétyl-coenzyme A, au sein de la matrice mitochondriale, par le complexe multienzymatique de la pyruvate déshydrogénase.",
        },
        {
          type: 'formule',
          expression: 'Pyruvate + CoA-SH + NAD+ → Acétyl-CoA + CO2 + NADH',
          legende: 'Réaction catalysée par le complexe pyruvate déshydrogénase, irréversible et mitochondriale.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un complexe à cinq cofacteurs',
          texte:
            "Le complexe pyruvate déshydrogénase nécessite cinq cofacteurs : la thiamine pyrophosphate (vitamine B1), l’acide lipoïque, le coenzyme A (vitamine B5), le FAD (vitamine B2) et le NAD+ (vitamine B3). Une carence en thiamine peut ainsi limiter le fonctionnement de ce complexe, comme dans le béribéri ou l’encéphalopathie de Gayet-Wernicke.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une réaction irréversible',
          texte:
            "La décarboxylation oxydative du pyruvate est irréversible chez les mammifères : il n’existe pas de voie métabolique permettant de reconvertir l’acétyl-CoA en pyruvate, ce qui explique l’incapacité de l’organisme à effectuer une néoglucogenèse nette à partir des acides gras.",
        },
      ],
    },
    {
      id: 'etapes-cycle',
      titre: 'Les huit étapes du cycle de Krebs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cycle de Krebs (ou cycle de l’acide citrique, ou cycle des acides tricarboxyliques) se déroule dans la matrice mitochondriale et oxyde complètement le groupement acétyle de l’acétyl-CoA en deux molécules de CO2, en régénérant l’oxaloacétate initial à chaque tour.",
        },
        {
          type: 'etapes',
          titre: 'Les huit réactions du cycle',
          etapes: [
            { titre: '1. Condensation', detail: 'Acétyl-CoA + oxaloacétate → citrate, par la citrate synthase ; réaction irréversible, première étape régulatrice du cycle.' },
            { titre: '2. Isomérisation', detail: 'Citrate → isocitrate, par l’aconitase, via un intermédiaire cis-aconitate.' },
            { titre: '3. Décarboxylation oxydative', detail: 'Isocitrate → alpha-cétoglutarate, par l’isocitrate déshydrogénase, avec production de CO2 et de NADH ; deuxième étape régulatrice, irréversible.' },
            { titre: '4. Décarboxylation oxydative', detail: 'Alpha-cétoglutarate → succinyl-CoA, par le complexe alpha-cétoglutarate déshydrogénase, avec production de CO2 et de NADH ; troisième étape régulatrice, irréversible.' },
            { titre: '5. Phosphorylation au niveau du substrat', detail: 'Succinyl-CoA → succinate, par la succinyl-CoA synthétase, avec production directe de GTP (ou d’ATP selon le tissu).' },
            { titre: '6. Oxydation', detail: 'Succinate → fumarate, par la succinate déshydrogénase, avec production de FADH2 ; cette enzyme est également le complexe II de la chaîne respiratoire.' },
            { titre: '7. Hydratation', detail: 'Fumarate → malate, par la fumarase.' },
            { titre: '8. Oxydation', detail: 'Malate → oxaloacétate, par la malate déshydrogénase, avec production de NADH, régénérant l’accepteur initial du cycle.' },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les trois enzymes régulatrices du cycle',
          texte:
            "Citrate synthase, isocitrate déshydrogénase et alpha-cétoglutarate déshydrogénase catalysent les trois réactions irréversibles et régulatrices du cycle de Krebs, toutes inhibées par un excès d’ATP et de NADH, reflet d’une charge énergétique élevée.",
        },
      ],
    },
    {
      id: 'bilan-cycle',
      titre: 'Bilan du cycle de Krebs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le bilan doit être établi pour un tour de cycle, correspondant à l’entrée d’un acétyl-CoA, puis rapporté à une molécule de glucose entière, sachant que la glycolyse en fournit deux (via deux pyruvates, donc deux acétyl-CoA).",
        },
        {
          type: 'tableau',
          titre: 'Bilan d’un tour de cycle de Krebs (par acétyl-CoA)',
          colonnes: ['Produit', 'Quantité par tour', 'Étape productrice'],
          lignes: [
            ['CO2', '2', 'Étapes 3 et 4'],
            ['NADH', '3', 'Étapes 3, 4 et 8'],
            ['FADH2', '1', 'Étape 6'],
            ['GTP (ou ATP)', '1', 'Étape 5'],
          ],
        },
        {
          type: 'formule',
          expression: 'Acétyl-CoA + 3 NAD+ + FAD + GDP + Pi + 2 H2O → 2 CO2 + 3 NADH + FADH2 + GTP + CoA-SH',
          legende: 'Bilan global d’un tour de cycle de Krebs, à multiplier par deux pour une molécule de glucose entière.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Bilan complet pour une molécule de glucose',
          texte:
            "En intégrant la décarboxylation oxydative des deux pyruvates puis les deux tours de cycle qui en résultent, l’oxydation complète d’une molécule de glucose en aval de la glycolyse produit au total 2 acétyl-CoA, 2 CO2 (pyruvate déshydrogénase) puis 4 CO2, 6 NADH et 2 FADH2 (cycle de Krebs), auxquels s’ajoutent 2 NADH de la décarboxylation du pyruvate.",
        },
      ],
    },
    {
      id: 'caractere-amphibolique',
      titre: 'Le caractère amphibolique du cycle de Krebs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cycle de Krebs n’est pas une voie purement catabolique : plusieurs de ses intermédiaires sont également des précurseurs de voies de biosynthèse, ce qui lui confère un caractère amphibolique, à la fois catabolique et anabolique.",
        },
        {
          type: 'definition',
          terme: 'Voie amphibolique',
          definition:
            "Voie métabolique jouant simultanément un rôle catabolique (dégradation productrice d’énergie) et anabolique (fourniture de précurseurs de biosynthèse), par opposition à une voie purement catabolique ou purement anabolique.",
        },
        {
          type: 'tableau',
          titre: 'Exemples de dérivations biosynthétiques à partir d’intermédiaires du cycle',
          colonnes: ['Intermédiaire', 'Voie de biosynthèse'],
          lignes: [
            ['Citrate', 'Synthèse des acides gras (après export dans le cytosol et clivage par l’ATP-citrate lyase)'],
            ['Alpha-cétoglutarate', 'Synthèse du glutamate et des acides aminés apparentés, par transamination'],
            ['Succinyl-CoA', 'Synthèse de l’hème'],
            ['Oxaloacétate', 'Néoglucogenèse et synthèse de l’aspartate'],
          ],
        },
      ],
    },
    {
      id: 'anaplerose',
      titre: 'L’anaplérose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le prélèvement continu d’intermédiaires du cycle de Krebs à des fins de biosynthèse risquerait d’épuiser le pool d’oxaloacétate nécessaire à l’entrée de nouvelles molécules d’acétyl-CoA. Des réactions anaplérotiques compensent ces prélèvements en régénérant les intermédiaires du cycle.",
        },
        {
          type: 'definition',
          terme: 'Réaction anaplérotique',
          definition:
            "Réaction qui reconstitue le pool des intermédiaires du cycle de Krebs, prélevés pour des voies de biosynthèse, afin de maintenir le fonctionnement continu du cycle.",
        },
        {
          type: 'formule',
          expression: 'Pyruvate + CO2 + ATP → oxaloacétate + ADP + Pi',
          legende: 'Réaction catalysée par la pyruvate carboxylase, principale réaction anaplérotique du cycle de Krebs, activée par l’acétyl-CoA.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une enzyme activée par son propre substrat en aval',
          texte:
            "La pyruvate carboxylase est allostériquement activée par l’acétyl-CoA : un excès d’acétyl-CoA, ne pouvant être immédiatement oxydé faute d’oxaloacétate disponible, stimule ainsi sa propre voie d’entrée dans le cycle en régénérant l’accepteur nécessaire.",
        },
      ],
    },
    {
      id: 'regulation-cycle',
      titre: 'Régulation du cycle de Krebs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La régulation du cycle de Krebs, comme celle du complexe pyruvate déshydrogénase en amont, répond essentiellement à la charge énergétique cellulaire, reflétée par les rapports ATP/ADP et NADH/NAD+.",
        },
        {
          type: 'tableau',
          titre: 'Principaux facteurs de régulation',
          colonnes: ['Cible', 'Activateurs', 'Inhibiteurs'],
          lignes: [
            ['Pyruvate déshydrogénase', 'ADP, Ca2+, pyruvate', 'ATP, NADH, acétyl-CoA (inhibition par les produits, et par phosphorylation inactivatrice)'],
            ['Citrate synthase', 'ADP', 'ATP, NADH, citrate, succinyl-CoA'],
            ['Isocitrate déshydrogénase', 'ADP, Ca2+', 'ATP, NADH'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Un principe unificateur',
          texte:
            "Retenir qu’un excès d’ATP et de NADH, traduisant une charge énergétique suffisante, freine systématiquement le complexe pyruvate déshydrogénase et les trois enzymes régulatrices du cycle de Krebs, tandis que l’ADP et le calcium, signaux d’activité cellulaire, les stimulent.",
        },
      ],
    },
  ],
  pointsCles: [
    'Le complexe pyruvate déshydrogénase transforme le pyruvate en acétyl-CoA de façon irréversible, dans la matrice mitochondriale.',
    'Le cycle de Krebs comporte huit réactions, dont trois irréversibles et régulatrices : citrate synthase, isocitrate déshydrogénase, alpha-cétoglutarate déshydrogénase.',
    'Un tour de cycle produit 3 NADH, 1 FADH2, 1 GTP (ou ATP) et libère 2 CO2, pour un acétyl-CoA engagé.',
    'Le cycle de Krebs est amphibolique : plusieurs de ses intermédiaires alimentent des voies de biosynthèse (hème, acides aminés, acides gras, glucose).',
    'L’anaplérose régénère les intermédiaires du cycle prélevés pour la biosynthèse, principalement via la pyruvate carboxylase.',
    'La pyruvate carboxylase, activée par l’acétyl-CoA, transforme le pyruvate en oxaloacétate.',
    'La régulation du cycle répond à la charge énergétique cellulaire : ATP et NADH inhibent, ADP et calcium activent.',
  ],
  erreursFrequentes: [
    'Croire que l’acétyl-CoA peut être reconverti en pyruvate : la décarboxylation oxydative est irréversible chez les mammifères.',
    'Confondre GTP et ATP produits à l’étape 5 : selon le tissu, l’un ou l’autre est formé, mais le bilan énergétique global est équivalent.',
    'Oublier que la succinate déshydrogénase est aussi le complexe II de la chaîne respiratoire, seule enzyme du cycle ancrée dans la membrane mitochondriale interne.',
    'Considérer le cycle de Krebs comme une voie purement catabolique : son caractère amphibolique est essentiel à retenir.',
    'Confondre anaplérose (régénération des intermédiaires du cycle) et cataplérose (leur prélèvement pour la biosynthèse), deux notions complémentaires et opposées.',
  ],
  mnemotechniques: [
    {
      moyen: '« Citron Cassé Aide À Faire Sortir Fort Mal Ou »',
      explication:
        'Citrate, Cis-aconitate (via aconitase), Isocitrate, Alpha-cétoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacétate : l’ordre des huit intermédiaires du cycle de Krebs.',
    },
    {
      moyen: '« Trois décarboxylations, trois CO2, mais un seul FADH2 »',
      explication:
        'Une décarboxylation a lieu avant le cycle (pyruvate déshydrogénase) et deux dans le cycle (isocitrate et alpha-cétoglutarate déshydrogénases) ; seule la succinate déshydrogénase produit du FADH2, une fois par tour.',
    },
    {
      moyen: '« La pyruvate carboxylase répare ce que l’on emprunte »',
      explication:
        'Elle régénère l’oxaloacétate consommé par les voies de biosynthèse dérivées du cycle, assurant la continuité du fonctionnement du cycle de Krebs.',
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
      id: 'bioch-cycle-krebs-fc-01',
      recto: 'Quelle réaction transforme le pyruvate en acétyl-CoA ?',
      verso: 'La décarboxylation oxydative catalysée par le complexe pyruvate déshydrogénase, dans la matrice mitochondriale.',
      type: 'mecanisme',
      tags: ['pyruvate déshydrogénase'],
    },
    {
      id: 'bioch-cycle-krebs-fc-02',
      recto: 'Quels sont les cinq cofacteurs du complexe pyruvate déshydrogénase ?',
      verso: 'Thiamine pyrophosphate (B1), acide lipoïque, coenzyme A (B5), FAD (B2) et NAD+ (B3).',
      type: 'chiffre',
      tags: ['pyruvate déshydrogénase', 'cofacteurs'],
    },
    {
      id: 'bioch-cycle-krebs-fc-03',
      recto: 'Quelle enzyme catalyse la première étape du cycle de Krebs, condensant acétyl-CoA et oxaloacétate ?',
      verso: 'La citrate synthase.',
      type: 'mecanisme',
      tags: ['citrate synthase'],
    },
    {
      id: 'bioch-cycle-krebs-fc-04',
      recto: 'Quelles sont les trois enzymes irréversibles et régulatrices du cycle de Krebs ?',
      verso: 'Citrate synthase, isocitrate déshydrogénase et alpha-cétoglutarate déshydrogénase.',
      type: 'classification',
      tags: ['régulation'],
    },
    {
      id: 'bioch-cycle-krebs-fc-05',
      recto: 'Quel est le bilan en NADH, FADH2 et GTP d’un tour de cycle de Krebs ?',
      verso: '3 NADH, 1 FADH2 et 1 GTP (ou ATP), pour 2 CO2 libérés.',
      type: 'chiffre',
      tags: ['bilan énergétique'],
    },
    {
      id: 'bioch-cycle-krebs-fc-06',
      recto: 'Quelle enzyme du cycle de Krebs appartient aussi à la chaîne respiratoire ?',
      verso: 'La succinate déshydrogénase, qui est le complexe II de la chaîne respiratoire.',
      type: 'mecanisme',
      tags: ['succinate déshydrogénase'],
    },
    {
      id: 'bioch-cycle-krebs-fc-07',
      recto: 'Qu’est-ce qu’une voie amphibolique ?',
      verso: 'Une voie métabolique jouant à la fois un rôle catabolique et un rôle anabolique.',
      type: 'definition',
      tags: ['amphibolique'],
    },
    {
      id: 'bioch-cycle-krebs-fc-08',
      recto: 'Citer un intermédiaire du cycle de Krebs précurseur de la synthèse de l’hème.',
      verso: 'Le succinyl-CoA.',
      type: 'mecanisme',
      tags: ['amphibolique'],
    },
    {
      id: 'bioch-cycle-krebs-fc-09',
      recto: 'Qu’est-ce que l’anaplérose ?',
      verso: 'L’ensemble des réactions qui régénèrent les intermédiaires du cycle de Krebs prélevés pour la biosynthèse.',
      type: 'definition',
      tags: ['anaplérose'],
    },
    {
      id: 'bioch-cycle-krebs-fc-10',
      recto: 'Quelle enzyme catalyse la principale réaction anaplérotique du cycle de Krebs ?',
      verso: 'La pyruvate carboxylase, qui transforme le pyruvate en oxaloacétate.',
      type: 'mecanisme',
      tags: ['pyruvate carboxylase'],
    },
    {
      id: 'bioch-cycle-krebs-fc-11',
      recto: 'Par quel effecteur allostérique la pyruvate carboxylase est-elle activée ?',
      verso: 'L’acétyl-CoA.',
      type: 'mecanisme',
      tags: ['régulation'],
    },
    {
      id: 'bioch-cycle-krebs-fc-12',
      recto: 'Où se déroule le cycle de Krebs dans la cellule ?',
      verso: 'Dans la matrice mitochondriale.',
      type: 'definition',
      tags: ['localisation'],
    },
  ],
  qcm: [
    {
      id: 'bioch-cycle-krebs-qcm-01',
      enonce: 'Concernant la décarboxylation oxydative du pyruvate, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle se déroule dans le cytosol.', vraie: false, justification: 'Elle se déroule dans la matrice mitochondriale.' },
        { lettre: 'B', texte: 'Elle produit du NADH.', vraie: true, justification: 'Un NAD+ est réduit en NADH lors de cette réaction.' },
        { lettre: 'C', texte: 'Elle est réversible.', vraie: false, justification: 'Elle est irréversible chez les mammifères.' },
        { lettre: 'D', texte: 'Elle nécessite la thiamine pyrophosphate comme cofacteur.', vraie: true, justification: 'C’est l’un des cinq cofacteurs du complexe pyruvate déshydrogénase.' },
        { lettre: 'E', texte: 'Elle produit du CO2.', vraie: true, justification: 'C’est une décarboxylation, avec libération d’une molécule de CO2.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-cycle-krebs-qcm-02',
      enonce: 'Concernant les étapes du cycle de Krebs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La citrate synthase catalyse une réaction de condensation.', vraie: true, justification: 'Elle condense acétyl-CoA et oxaloacétate pour former le citrate.' },
        { lettre: 'B', texte: 'L’isocitrate déshydrogénase catalyse une décarboxylation oxydative.', vraie: true, justification: 'Elle transforme l’isocitrate en alpha-cétoglutarate, avec production de CO2 et de NADH.' },
        { lettre: 'C', texte: 'La succinyl-CoA synthétase produit directement de l’ATP ou du GTP.', vraie: true, justification: 'C’est la seule étape de phosphorylation au niveau du substrat du cycle de Krebs.' },
        { lettre: 'D', texte: 'La fumarase catalyse une réaction d’oxydation.', vraie: false, justification: 'La fumarase catalyse une hydratation du fumarate en malate, sans oxydoréduction.' },
        { lettre: 'E', texte: 'La malate déshydrogénase régénère l’oxaloacétate.', vraie: true, justification: 'C’est la dernière étape du cycle, qui referme la boucle.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-cycle-krebs-qcm-03',
      enonce: 'Concernant le bilan du cycle de Krebs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un tour de cycle produit trois molécules de NADH.', vraie: true, justification: 'Aux étapes 3, 4 et 8 du cycle.' },
        { lettre: 'B', texte: 'Un tour de cycle produit deux molécules de FADH2.', vraie: false, justification: 'Un seul FADH2 est produit par tour, à l’étape de la succinate déshydrogénase.' },
        { lettre: 'C', texte: 'Un tour de cycle libère deux molécules de CO2.', vraie: true, justification: 'Aux étapes de l’isocitrate déshydrogénase et de l’alpha-cétoglutarate déshydrogénase.' },
        { lettre: 'D', texte: 'Une molécule de GTP ou d’ATP est produite par tour.', vraie: true, justification: 'C’est le produit de la phosphorylation au niveau du substrat par la succinyl-CoA synthétase.' },
        { lettre: 'E', texte: 'Le bilan d’un tour de cycle est identique à celui de la glycolyse.', vraie: false, justification: 'Les deux voies ont des bilans distincts en ATP, NADH et FADH2, et se déroulent dans des compartiments différents.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-cycle-krebs-qcm-04',
      enonce: 'Concernant le caractère amphibolique du cycle de Krebs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le cycle de Krebs est une voie exclusivement catabolique.', vraie: false, justification: 'Son caractère amphibolique lui confère aussi un rôle anabolique, en fournissant des précurseurs.' },
        { lettre: 'B', texte: 'Le succinyl-CoA est un précurseur de la synthèse de l’hème.', vraie: true, justification: 'C’est l’un des exemples classiques de dérivation biosynthétique du cycle.' },
        { lettre: 'C', texte: 'L’alpha-cétoglutarate peut donner naissance au glutamate par transamination.', vraie: true, justification: 'C’est une voie majeure de synthèse des acides aminés à partir des intermédiaires du cycle.' },
        { lettre: 'D', texte: 'L’oxaloacétate peut être utilisé pour la néoglucogenèse.', vraie: true, justification: 'C’est le point de départ de la néoglucogenèse à partir des intermédiaires du cycle de Krebs.' },
        { lettre: 'E', texte: 'Le citrate n’a aucun rôle en dehors du cycle de Krebs.', vraie: false, justification: 'Exporté dans le cytosol, il est clivé pour fournir de l’acétyl-CoA à la synthèse des acides gras.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-cycle-krebs-qcm-05',
      enonce: 'Concernant l’anaplérose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle désigne le prélèvement d’intermédiaires du cycle pour la biosynthèse.', vraie: false, justification: 'C’est la cataplérose ; l’anaplérose désigne au contraire la régénération de ces intermédiaires.' },
        { lettre: 'B', texte: 'La pyruvate carboxylase est la principale enzyme anaplérotique du cycle de Krebs.', vraie: true, justification: 'Elle transforme le pyruvate en oxaloacétate, réalimentant le cycle.' },
        { lettre: 'C', texte: 'La pyruvate carboxylase est activée par l’acétyl-CoA.', vraie: true, justification: 'C’est un exemple de régulation allostérique croisée entre voies métaboliques.' },
        { lettre: 'D', texte: 'La réaction de la pyruvate carboxylase consomme de l’ATP.', vraie: true, justification: 'La carboxylation du pyruvate est couplée à l’hydrolyse d’un ATP.' },
        { lettre: 'E', texte: 'L’anaplérose n’a aucun lien avec le fonctionnement continu du cycle de Krebs.', vraie: false, justification: 'Elle est au contraire indispensable pour maintenir le pool d’oxaloacétate nécessaire à l’entrée de nouvel acétyl-CoA.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 3,
    },
    {
      id: 'bioch-cycle-krebs-qcm-06',
      enonce: 'Concernant la régulation du complexe pyruvate déshydrogénase et du cycle de Krebs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ATP inhibe la citrate synthase.', vraie: true, justification: 'Une charge énergétique élevée freine l’entrée d’acétyl-CoA dans le cycle.' },
        { lettre: 'B', texte: 'L’ADP active l’isocitrate déshydrogénase.', vraie: true, justification: 'Une charge énergétique faible stimule le cycle pour produire davantage d’équivalents réduits.' },
        { lettre: 'C', texte: 'Le calcium participe à l’activation du complexe pyruvate déshydrogénase.', vraie: true, justification: 'Le calcium, signal d’activité cellulaire notamment musculaire, active ce complexe.' },
        { lettre: 'D', texte: 'Le NADH active les enzymes régulatrices du cycle de Krebs.', vraie: false, justification: 'Le NADH, reflet d’une charge énergétique élevée, inhibe au contraire ces enzymes.' },
        { lettre: 'E', texte: 'L’acétyl-CoA inhibe le complexe pyruvate déshydrogénase.', vraie: true, justification: 'C’est un exemple de rétro-inhibition par le produit de la réaction.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 3,
    },
  ],
};
