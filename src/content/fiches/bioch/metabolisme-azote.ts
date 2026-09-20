import type { Fiche } from '../../types';

export const ficheMetabolismeAzote: Fiche = {
  id: 'bioch-metabolisme-azote',
  ue: 'bioch',
  titre: 'Métabolisme azoté et cycle de l’urée',
  sousTitre: 'Transamination, désamination oxydative, transport de l’ammoniaque et uréogenèse',
  chapitre: 'Métabolisme',
  ordre: 13,
  duree: 29,
  difficulte: 3,
  motsCles: [
    'transamination',
    'désamination oxydative',
    'ammoniaque',
    'cycle de l’urée',
    'acide aminé glucoformateur',
    'acide aminé cétoformateur',
  ],
  objectifs: [
    'Décrire le mécanisme de la transamination et le rôle du pyridoxal phosphate.',
    'Décrire la désamination oxydative catalysée par la glutamate déshydrogénase.',
    'Expliquer les deux voies de transport de l’ammoniaque vers le foie (glutamine, alanine).',
    'Décrire les étapes du cycle de l’urée et son bilan.',
    'Situer les points de connexion entre le cycle de l’urée et le cycle de Krebs.',
    'Distinguer acides aminés glucoformateurs et cétoformateurs.',
  ],
  sections: [
    {
      id: 'transamination',
      titre: 'La transamination',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La transamination est le transfert réversible d’un groupement amine d’un acide aminé vers un alpha-cétoacide accepteur, sans libération d’ammoniaque libre, catalysé par des enzymes appelées aminotransférases ou transaminases.",
        },
        {
          type: 'definition',
          terme: 'Transamination',
          definition:
            "Réaction transférant le groupement amine d’un acide aminé donneur vers un alpha-cétoacide accepteur (le plus souvent l’alpha-cétoglutarate), formant un nouvel acide aminé et un nouvel alpha-cétoacide, sans production nette d’ammoniaque.",
        },
        {
          type: 'tableau',
          titre: 'Deux transaminases d’intérêt clinique majeur',
          colonnes: ['Enzyme', 'Réaction catalysée', 'Intérêt biologique'],
          lignes: [
            ['ALAT (alanine aminotransférase)', 'Alanine + alpha-cétoglutarate ⇌ pyruvate + glutamate', 'Marqueur relativement spécifique de la cytolyse hépatique'],
            ['ASAT (aspartate aminotransférase)', 'Aspartate + alpha-cétoglutarate ⇌ oxaloacétate + glutamate', 'Marqueur de cytolyse hépatique, également présent dans le muscle et le myocarde'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le pyridoxal phosphate, cofacteur obligatoire',
          texte:
            "Toutes les réactions de transamination nécessitent le pyridoxal phosphate, forme active de la vitamine B6, comme cofacteur, lié de façon covalente au site actif de l’enzyme et formant transitoirement une base de Schiff avec le substrat.",
        },
      ],
    },
    {
      id: 'desamination-oxydative',
      titre: 'La désamination oxydative',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La désamination oxydative libère l’ammoniaque sous forme libre, contrairement à la transamination. La réaction de référence est catalysée par la glutamate déshydrogénase, enzyme mitochondriale hépatique qui constitue le carrefour central de l’élimination de l’azote aminé.",
        },
        {
          type: 'formule',
          expression: 'Glutamate + NAD(P)+ + H2O ⇌ alpha-cétoglutarate + NH3 + NAD(P)H',
          legende: 'Réaction de la glutamate déshydrogénase, réversible, capable d’utiliser le NAD+ ou le NADP+ comme accepteur d’électrons.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une stratégie en deux temps',
          texte:
            "L’association fonctionnelle de la transamination, qui collecte les groupements amine de nombreux acides aminés sur l’alpha-cétoglutarate pour former du glutamate, puis de la désamination oxydative du glutamate par la glutamate déshydrogénase, constitue la voie centrale de canalisation de l’azote aminé vers sa forme libre, l’ammoniaque.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'L’ammoniaque est toxique',
          texte:
            "L’ammoniaque libre est neurotoxique, notamment par son interférence avec le métabolisme énergétique cérébral. Sa concentration plasmatique doit donc être maintenue très basse, ce qui justifie l’existence de systèmes de transport spécifiques vers le foie et d’une voie efficace d’élimination, le cycle de l’urée.",
        },
      ],
    },
    {
      id: 'transport-ammoniaque',
      titre: 'Le transport de l’ammoniaque vers le foie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’ammoniaque produite dans les tissus périphériques, notamment le muscle, ne circule pas librement dans le sang du fait de sa toxicité : elle est transportée vers le foie sous deux formes non toxiques, la glutamine et l’alanine.",
        },
        {
          type: 'comparaison',
          titre: 'Les deux voies de transport de l’azote vers le foie',
          gauche: {
            titre: 'Voie de la glutamine',
            points: [
              'L’ammoniaque est fixée sur le glutamate par la glutamine synthétase, formant la glutamine',
              'Utilisée par de nombreux tissus, notamment le cerveau et le muscle au repos',
              'La glutamine, non toxique, est reconvertie en glutamate et ammoniaque dans le foie par la glutaminase',
            ],
          },
          droite: {
            titre: 'Cycle glucose-alanine',
            points: [
              'Dans le muscle en activité, le groupement amine est transféré sur le pyruvate par transamination, formant l’alanine',
              'L’alanine gagne le foie par voie sanguine',
              'Le foie régénère le pyruvate par transamination inverse, utilisable en néoglucogenèse, et le glutamate ainsi formé libère l’ammoniaque par désamination oxydative',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Cycle glucose-alanine et jeûne musculaire',
          texte:
            "Le cycle glucose-alanine permet au muscle de se débarrasser de son azote aminé tout en fournissant au foie un substrat glucoformateur (l’alanine, reconvertie en pyruvate) pour la néoglucogenèse, couplant ainsi élimination azotée et maintien de la glycémie lors d’un exercice prolongé ou d’un jeûne.",
        },
      ],
    },
    {
      id: 'cycle-uree',
      titre: 'Le cycle de l’urée',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cycle de l’urée (ou cycle de Krebs-Henseleit) est la voie hépatique de détoxification de l’ammoniaque, qui le transforme en urée, composé neutre, très soluble, non toxique, éliminé par voie rénale.",
        },
        {
          type: 'etapes',
          titre: 'Les cinq réactions du cycle de l’urée',
          etapes: [
            { titre: '1. Formation du carbamoylphosphate', detail: 'L’ammoniaque, le CO2 et deux ATP forment le carbamoylphosphate, sous l’action de la carbamoylphosphate synthétase I mitochondriale, étape régulatrice et irréversible du cycle.' },
            { titre: '2. Formation de la citrulline', detail: 'Le carbamoylphosphate se condense avec l’ornithine, catalysé par l’ornithine transcarbamylase, formant la citrulline, qui est exportée vers le cytosol.' },
            { titre: '3. Formation de l’argininosuccinate', detail: 'La citrulline se condense avec l’aspartate (apportant le second atome d’azote de l’urée), sous l’action de l’argininosuccinate synthétase, avec consommation d’ATP.' },
            { titre: '4. Clivage en arginine et fumarate', detail: 'L’argininosuccinate lyase clive l’argininosuccinate en arginine et fumarate, ce dernier rejoignant le cycle de Krebs.' },
            { titre: '5. Formation de l’urée', detail: 'L’arginase clive l’arginine en urée et en ornithine, qui retourne dans la mitochondrie pour amorcer un nouveau tour de cycle.' },
          ],
        },
        {
          type: 'formule',
          expression: 'NH3 + CO2 + Aspartate + 3 ATP → Urée + Fumarate + 2 ADP + AMP + 2 Pi + PPi',
          legende: 'Bilan global du cycle de l’urée : les deux atomes d’azote de l’urée proviennent de l’ammoniaque et de l’aspartate.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un cycle en partie mitochondrial, en partie cytosolique',
          texte:
            "Les deux premières réactions (formation du carbamoylphosphate et de la citrulline) se déroulent dans la mitochondrie hépatique ; les trois dernières se déroulent dans le cytosol. La citrulline et l’ornithine doivent donc traverser la membrane mitochondriale à chaque tour de cycle.",
        },
      ],
    },
    {
      id: 'connexion-cycle-krebs',
      titre: 'Connexion avec le cycle de Krebs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cycle de l’urée n’est pas une voie isolée : il est étroitement connecté au cycle de Krebs par le fumarate produit lors du clivage de l’argininosuccinate, ce qui constitue ce que l’on appelle parfois le « bicycle » de Krebs.",
        },
        {
          type: 'liste',
          items: [
            'Le fumarate issu du cycle de l’urée est converti en malate puis en oxaloacétate dans la mitochondrie.',
            'L’oxaloacétate peut être transaminé en aspartate, qui réintègre le cycle de l’urée à l’étape de formation de l’argininosuccinate, bouclant ainsi la connexion entre les deux cycles.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Coût énergétique du cycle',
          texte:
            "La synthèse d’une molécule d’urée consomme l’équivalent de quatre liaisons phosphate riches en énergie (deux ATP hydrolysés en ADP et Pi, un ATP hydrolysé en AMP et pyrophosphate, ce dernier lui-même hydrolysé), ce qui souligne le coût métabolique non négligeable de la détoxification azotée.",
        },
      ],
    },
    {
      id: 'devenir-squelette-carbone',
      titre: 'Devenir du squelette carboné : acides aminés glucoformateurs et cétoformateurs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Après élimination du groupement amine, le squelette carboné des acides aminés rejoint des voies métaboliques centrales sous forme d’intermédiaires du cycle de Krebs ou de précurseurs directs, ce qui permet de les classer selon leur devenir métabolique possible.",
        },
        {
          type: 'tableau',
          titre: 'Classification des acides aminés selon leur squelette carboné',
          colonnes: ['Catégorie', 'Définition', 'Exemples'],
          lignes: [
            ['Glucoformateurs', 'Squelette carboné dégradé en pyruvate ou en intermédiaire du cycle de Krebs, utilisable en néoglucogenèse', 'Alanine, glutamate, aspartate, glycine'],
            ['Cétoformateurs purs', 'Squelette carboné dégradé exclusivement en acétyl-CoA ou en acétoacétyl-CoA, non utilisable en néoglucogenèse nette', 'Leucine, lysine'],
            ['Mixtes', 'Squelette carboné dégradé en partie en intermédiaire glucoformateur, en partie en acétyl-CoA', 'Phénylalanine, tyrosine, tryptophane, isoleucine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Seuls deux acides aminés sont exclusivement cétoformateurs',
          texte:
            "La leucine et la lysine sont les deux seuls acides aminés protéinogènes exclusivement cétoformateurs chez l’Homme : leur squelette carboné ne peut jamais servir à la néoglucogenèse nette, à la différence de tous les autres acides aminés, glucoformateurs ou mixtes.",
        },
      ],
    },
  ],
  pointsCles: [
    'La transamination transfère un groupement amine sans libérer d’ammoniaque, grâce au pyridoxal phosphate (vitamine B6).',
    'La glutamate déshydrogénase catalyse la désamination oxydative du glutamate, libérant l’ammoniaque libre.',
    'L’ammoniaque est transportée vers le foie sous forme de glutamine ou d’alanine (cycle glucose-alanine), formes non toxiques.',
    'Le cycle de l’urée comporte cinq réactions, réparties entre mitochondrie (deux premières) et cytosol (trois dernières).',
    'Les deux atomes d’azote de l’urée proviennent de l’ammoniaque et de l’aspartate ; le fumarate produit rejoint le cycle de Krebs.',
    'La synthèse d’une molécule d’urée consomme l’équivalent de quatre liaisons phosphate riches en énergie.',
    'Seules la leucine et la lysine sont des acides aminés exclusivement cétoformateurs.',
  ],
  erreursFrequentes: [
    'Confondre transamination (pas de libération d’ammoniaque) et désamination oxydative (libération d’ammoniaque libre).',
    'Oublier que le pyridoxal phosphate, dérivé de la vitamine B6, est indispensable à toute réaction de transamination.',
    'Croire que l’ammoniaque circule librement dans le sang : elle est transportée sous forme non toxique, glutamine ou alanine.',
    'Situer l’intégralité du cycle de l’urée dans la mitochondrie : seules les deux premières réactions y ont lieu, les trois suivantes sont cytosoliques.',
    'Considérer tous les acides aminés comme glucoformateurs : la leucine et la lysine sont exclusivement cétoformateurs.',
  ],
  mnemotechniques: [
    {
      moyen: '« OCCAA » pour le cycle de l’urée',
      explication:
        'Ornithine, Carbamoylphosphate, Citrulline, Argininosuccinate, Arginine : l’enchaînement des intermédiaires du cycle de l’urée, avant retour à l’Ornithine.',
    },
    {
      moyen: '« Seuls Leu et Lys ne redeviennent jamais sucre »',
      explication:
        'Leucine et lysine sont les deux seuls acides aminés exclusivement cétoformateurs, incapables de contribuer à la néoglucogenèse.',
    },
    {
      moyen: '« B6 ouvre la porte de l’amine »',
      explication:
        'Le pyridoxal phosphate, dérivé de la vitamine B6, est le cofacteur obligatoire de toutes les réactions de transamination.',
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
      id: 'bioch-metabolisme-azote-fc-01',
      recto: 'Qu’est-ce que la transamination ?',
      verso: 'Le transfert réversible d’un groupement amine d’un acide aminé vers un alpha-cétoacide, sans libération d’ammoniaque.',
      type: 'definition',
      tags: ['transamination'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-02',
      recto: 'Quel cofacteur est indispensable à toute réaction de transamination ?',
      verso: 'Le pyridoxal phosphate, forme active de la vitamine B6.',
      type: 'chiffre',
      tags: ['transamination', 'vitamine B6'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-03',
      recto: 'Quelle enzyme catalyse la désamination oxydative du glutamate ?',
      verso: 'La glutamate déshydrogénase.',
      type: 'mecanisme',
      tags: ['désamination oxydative'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-04',
      recto: 'Sous quelles formes l’ammoniaque est-elle transportée des tissus périphériques vers le foie ?',
      verso: 'Sous forme de glutamine ou d’alanine (cycle glucose-alanine).',
      type: 'mecanisme',
      tags: ['transport de l’ammoniaque'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-05',
      recto: 'Quel est l’intérêt du cycle glucose-alanine pour le muscle en activité ?',
      verso: 'Il élimine l’azote aminé sous forme d’alanine tout en fournissant au foie un précurseur glucoformateur pour la néoglucogenèse.',
      type: 'clinique',
      tags: ['cycle glucose-alanine'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-06',
      recto: 'Quelle enzyme catalyse la première étape, irréversible, du cycle de l’urée ?',
      verso: 'La carbamoylphosphate synthétase I, formant le carbamoylphosphate.',
      type: 'mecanisme',
      tags: ['cycle de l’urée'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-07',
      recto: 'D’où proviennent les deux atomes d’azote de l’urée ?',
      verso: 'De l’ammoniaque (via le carbamoylphosphate) et de l’aspartate.',
      type: 'chiffre',
      tags: ['cycle de l’urée'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-08',
      recto: 'Quelle enzyme clive l’arginine en urée et en ornithine ?',
      verso: 'L’arginase.',
      type: 'mecanisme',
      tags: ['cycle de l’urée'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-09',
      recto: 'Quel composé relie le cycle de l’urée au cycle de Krebs ?',
      verso: 'Le fumarate, produit lors du clivage de l’argininosuccinate.',
      type: 'mecanisme',
      tags: ['cycle de l’urée', 'cycle de Krebs'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-10',
      recto: 'Combien de liaisons phosphate riches en énergie coûte la synthèse d’une molécule d’urée ?',
      verso: 'L’équivalent de quatre liaisons phosphate riches en énergie.',
      type: 'chiffre',
      tags: ['cycle de l’urée', 'bilan énergétique'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-11',
      recto: 'Citer les deux seuls acides aminés exclusivement cétoformateurs.',
      verso: 'La leucine et la lysine.',
      type: 'classification',
      tags: ['acides aminés cétoformateurs'],
    },
    {
      id: 'bioch-metabolisme-azote-fc-12',
      recto: 'Quelles enzymes ALAT et ASAT sont-elles utilisées à dépister sur le plan clinique ?',
      verso: 'La cytolyse hépatique, l’ASAT étant également présente dans le muscle et le myocarde.',
      type: 'clinique',
      tags: ['transaminases'],
    },
  ],
  qcm: [
    {
      id: 'bioch-metabolisme-azote-qcm-01',
      enonce: 'Concernant la transamination, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle libère de l’ammoniaque libre.', vraie: false, justification: 'C’est la désamination oxydative, et non la transamination, qui libère l’ammoniaque libre.' },
        { lettre: 'B', texte: 'Elle nécessite le pyridoxal phosphate.', vraie: true, justification: 'C’est le cofacteur obligatoire de toutes les aminotransférases.' },
        { lettre: 'C', texte: 'L’ALAT transfère le groupement amine de l’alanine vers l’alpha-cétoglutarate.', vraie: true, justification: 'C’est la réaction caractéristique de l’alanine aminotransférase, formant pyruvate et glutamate.' },
        { lettre: 'D', texte: 'Elle est catalysée par la glutamate déshydrogénase.', vraie: false, justification: 'La glutamate déshydrogénase catalyse la désamination oxydative, non la transamination.' },
        { lettre: 'E', texte: 'Elle est réversible.', vraie: true, justification: 'Les réactions de transamination sont thermodynamiquement réversibles.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-azote-qcm-02',
      enonce: 'Concernant la désamination oxydative et le transport de l’ammoniaque, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La glutamate déshydrogénase peut utiliser le NAD+ ou le NADP+.', vraie: true, justification: 'C’est une particularité de cette enzyme mitochondriale hépatique.' },
        { lettre: 'B', texte: 'L’ammoniaque circule librement et abondamment dans le plasma.', vraie: false, justification: 'Sa toxicité impose un transport sous forme non toxique, glutamine ou alanine.' },
        { lettre: 'C', texte: 'La glutamine synthétase fixe l’ammoniaque sur le glutamate.', vraie: true, justification: 'C’est le mécanisme de formation de la glutamine, forme de transport non toxique de l’azote.' },
        { lettre: 'D', texte: 'Le cycle glucose-alanine implique une transamination avec le pyruvate.', vraie: true, justification: 'Le groupement amine est transféré sur le pyruvate musculaire pour former l’alanine.' },
        { lettre: 'E', texte: 'L’ammoniaque n’a aucune toxicité, notamment pour le système nerveux central.', vraie: false, justification: 'L’ammoniaque est au contraire neurotoxique, ce qui justifie les mécanismes stricts de son transport et de son élimination.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-azote-qcm-03',
      enonce: 'Concernant le cycle de l’urée, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La carbamoylphosphate synthétase I catalyse la première étape, irréversible.', vraie: true, justification: 'C’est l’étape régulatrice majeure du cycle.' },
        { lettre: 'B', texte: 'Toutes les réactions du cycle se déroulent dans le cytosol.', vraie: false, justification: 'Les deux premières réactions sont mitochondriales, les trois suivantes cytosoliques.' },
        { lettre: 'C', texte: 'L’arginase libère l’urée à partir de l’arginine.', vraie: true, justification: 'C’est la dernière étape du cycle, régénérant également l’ornithine.' },
        { lettre: 'D', texte: 'L’aspartate apporte l’un des deux atomes d’azote de l’urée.', vraie: true, justification: 'Il se condense avec la citrulline pour former l’argininosuccinate.' },
        { lettre: 'E', texte: 'La citrulline est le produit final du cycle.', vraie: false, justification: 'La citrulline est un intermédiaire ; le produit final du cycle est l’urée.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-azote-qcm-04',
      enonce: 'Concernant la connexion entre cycle de l’urée et cycle de Krebs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le fumarate produit dans le cycle de l’urée peut rejoindre le cycle de Krebs.', vraie: true, justification: 'C’est le produit du clivage de l’argininosuccinate par l’argininosuccinate lyase.' },
        { lettre: 'B', texte: 'L’oxaloacétate peut être transaminé en aspartate, réintégrant le cycle de l’urée.', vraie: true, justification: 'C’est le mécanisme qui boucle la connexion entre les deux cycles.' },
        { lettre: 'C', texte: 'Cette connexion est parfois appelée le « bicycle » de Krebs.', vraie: true, justification: 'C’est le terme consacré pour désigner cette interconnexion métabolique.' },
        { lettre: 'D', texte: 'Le cycle de l’urée et le cycle de Krebs sont totalement indépendants l’un de l’autre.', vraie: false, justification: 'Ils sont au contraire interconnectés par le fumarate et l’aspartate.' },
        { lettre: 'E', texte: 'La synthèse d’une urée est énergétiquement gratuite.', vraie: false, justification: 'Elle consomme l’équivalent de quatre liaisons phosphate riches en énergie.' },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 3,
    },
    {
      id: 'bioch-metabolisme-azote-qcm-05',
      enonce: 'Concernant la classification des acides aminés selon leur squelette carboné, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La leucine est un acide aminé glucoformateur.', vraie: false, justification: 'La leucine est exclusivement cétoformatrice.' },
        { lettre: 'B', texte: 'L’alanine est un acide aminé glucoformateur.', vraie: true, justification: 'Son squelette carboné rejoint le pyruvate, précurseur de la néoglucogenèse.' },
        { lettre: 'C', texte: 'La lysine est exclusivement cétoformatrice.', vraie: true, justification: 'C’est, avec la leucine, l’un des deux seuls acides aminés exclusivement cétoformateurs.' },
        { lettre: 'D', texte: 'La phénylalanine est un acide aminé mixte.', vraie: true, justification: 'Son squelette carboné se dégrade à la fois en intermédiaire glucoformateur et en acétyl-CoA.' },
        { lettre: 'E', texte: 'Tous les acides aminés sont glucoformateurs.', vraie: false, justification: 'La leucine et la lysine font exception, étant exclusivement cétoformateurs.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-azote-qcm-06',
      enonce: 'Concernant les transaminases ALAT et ASAT, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ALAT catalyse une réaction entre l’alanine et l’alpha-cétoglutarate.', vraie: true, justification: 'C’est la réaction caractéristique de cette transaminase.' },
        { lettre: 'B', texte: 'L’ASAT produit du glutamate et de l’oxaloacétate.', vraie: true, justification: 'Elle transamine l’aspartate avec l’alpha-cétoglutarate, formant ces deux produits.' },
        { lettre: 'C', texte: 'Ces deux enzymes sont utilisées comme marqueurs de cytolyse hépatique.', vraie: true, justification: 'Leur élévation plasmatique traduit une souffrance ou une destruction des hépatocytes.' },
        { lettre: 'D', texte: 'L’ASAT est strictement spécifique du foie.', vraie: false, justification: 'Elle est également présente dans le muscle squelettique et le myocarde, moins spécifique que l’ALAT.' },
        { lettre: 'E', texte: 'Ces enzymes ne nécessitent aucun cofacteur.', vraie: false, justification: 'Comme toutes les transaminases, elles nécessitent le pyridoxal phosphate.' },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 2,
    },
  ],
};
