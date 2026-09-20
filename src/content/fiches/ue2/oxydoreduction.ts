import type { Fiche } from '../../types';

export const ficheOxydoreduction: Fiche = {
  id: 'ue2-oxydoreduction',
  ue: 'ue2',
  titre: 'Oxydoréduction',
  sousTitre: 'Nombre d’oxydation, couples rédox, potentiel standard et équation de Nernst',
  chapitre: 'Chimie générale',
  ordre: 6,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'oxydoréduction',
    'nombre d’oxydation',
    'couple rédox',
    'potentiel standard',
    'équation de Nernst',
    'pile',
    'chaîne respiratoire',
    'NAD+/NADH',
  ],
  objectifs: [
    'Déterminer le nombre d’oxydation d’un élément dans une espèce chimique.',
    'Identifier un couple oxydant/réducteur et équilibrer une demi-équation électronique.',
    'Utiliser le potentiel standard d’oxydoréduction pour prévoir le sens spontané d’une réaction rédox.',
    'Appliquer l’équation de Nernst pour calculer un potentiel en conditions non standard.',
    'Décrire le rôle des couples rédox dans la chaîne respiratoire mitochondriale.',
  ],
  sections: [
    {
      id: 'nombre-oxydation',
      titre: 'Le nombre d’oxydation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une réaction d’oxydoréduction (ou réaction rédox) met en jeu un transfert d’électrons entre deux espèces chimiques. Le nombre d’oxydation (NO ou n.o.) permet de suivre ce transfert en attribuant à chaque atome une charge fictive, celle qu’il aurait si tous les doublets de liaison étaient attribués à l’atome le plus électronégatif.",
        },
        {
          type: 'tableau',
          titre: 'Règles usuelles d’attribution du nombre d’oxydation',
          colonnes: ['Situation', 'Nombre d’oxydation'],
          lignes: [
            ['Élément à l’état simple (non combiné)', '0'],
            ['Ion monoatomique', 'Égal à la charge de l’ion'],
            ['Oxygène (sauf peroxydes et composés avec le fluor)', '-II'],
            ['Hydrogène (sauf hydrures métalliques)', '+I'],
            ['Somme des nombres d’oxydation dans une espèce neutre', '0'],
            ['Somme des nombres d’oxydation dans un ion polyatomique', 'Égale à la charge de l’ion'],
          ],
        },
        {
          type: 'definition',
          terme: 'Oxydation et réduction',
          definition:
            "L’oxydation est une perte d’électrons, qui se traduit par une augmentation du nombre d’oxydation. La réduction est un gain d’électrons, qui se traduit par une diminution du nombre d’oxydation. Ces deux processus sont toujours couplés dans une réaction rédox.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Moyen mnémotechnique classique',
          texte:
            "« OIL RIG » en anglais : Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). En français : l’oxydant gagne des électrons (il est réduit), le réducteur en perd (il est oxydé).",
        },
      ],
    },
    {
      id: 'couples-redox',
      titre: 'Couples oxydant/réducteur et demi-équations',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un couple oxydant/réducteur (Ox/Red) est constitué de deux espèces chimiques reliées par un échange d’électrons, l’oxydant captant des électrons pour se transformer en son réducteur conjugué, et réciproquement.",
        },
        {
          type: 'formule',
          expression: 'Ox + n e− ⇌ Red',
          legende: 'Demi-équation électronique générale d’un couple rédox. n est le nombre d’électrons échangés.',
        },
        {
          type: 'etapes',
          titre: 'Équilibrer une demi-équation rédox en milieu acide',
          etapes: [
            { titre: 'Équilibrer les éléments autres que O et H', detail: 'Ajuster les coefficients stœchiométriques pour tous les atomes hors oxygène et hydrogène.' },
            { titre: 'Équilibrer l’oxygène', detail: 'Ajouter des molécules d’eau du côté déficitaire en oxygène.' },
            { titre: 'Équilibrer l’hydrogène', detail: 'Ajouter des ions H+ du côté déficitaire en hydrogène.' },
            { titre: 'Équilibrer les charges', detail: 'Ajouter le nombre d’électrons nécessaire pour équilibrer la charge électrique totale de part et d’autre de la demi-équation.' },
          ],
        },
        {
          type: 'definition',
          terme: 'Réaction d’oxydoréduction globale',
          definition:
            "Réaction obtenue en combinant deux demi-équations rédox, celle de l’oxydant d’un couple et celle du réducteur d’un autre couple, après avoir multiplié chacune par un facteur approprié afin que le nombre d’électrons échangés soit identique et s’annule dans le bilan final.",
        },
      ],
    },
    {
      id: 'potentiel-standard',
      titre: 'Potentiel standard d’oxydoréduction',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le potentiel standard d’oxydoréduction E° d’un couple mesure son pouvoir oxydant relatif dans les conditions standard, par rapport à l’électrode standard à hydrogène, dont le potentiel est fixé par convention à 0 volt.",
        },
        {
          type: 'tableau',
          titre: 'Lecture du classement des potentiels standard',
          colonnes: ['E° du couple', 'Pouvoir oxydant de la forme oxydée', 'Pouvoir réducteur de la forme réduite'],
          lignes: [
            ['E° élevé', 'Fort', 'Faible'],
            ['E° faible (voire négatif)', 'Faible', 'Fort'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Prévoir le sens spontané d’une réaction rédox',
          texte:
            "Dans une réaction rédox spontanée, l’oxydant du couple de plus haut potentiel standard réagit avec le réducteur du couple de plus bas potentiel standard. Cette règle, dite « règle du gamma » ou du classement électrochimique, permet de prévoir directement le sens d’évolution d’un système rédox.",
        },
        {
          type: 'formule',
          expression: 'ΔrG° = −n·F·E°',
          legende:
            "Relation entre l’enthalpie libre standard de réaction et la force électromotrice standard E° de la pile associée. F est la constante de Faraday, n le nombre d’électrons échangés dans la réaction bilan.",
        },
      ],
    },
    {
      id: 'equation-nernst',
      titre: 'L’équation de Nernst',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’équation de Nernst permet de calculer le potentiel d’un couple rédox dans des conditions différentes des conditions standard, en tenant compte des concentrations réelles des formes oxydée et réduite.",
        },
        {
          type: 'formule',
          expression: 'E = E° + (RT / nF) · ln ( [Ox] / [Red] )',
          legende:
            "Équation de Nernst pour le couple Ox/Red. R est la constante des gaz parfaits, T la température absolue, n le nombre d’électrons échangés, F la constante de Faraday.",
        },
        {
          type: 'liste',
          items: [
            'Plus la concentration en oxydant augmente par rapport au réducteur, plus le potentiel E du couple augmente.',
            'À 25 °C, le terme RT/F peut être converti en un facteur numérique utilisant le logarithme décimal, simplifiant les calculs pratiques.',
            'Lorsque [Ox] = [Red], le potentiel E est égal au potentiel standard E° du couple.',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre potentiel standard et potentiel réel',
          texte:
            "Le potentiel standard E° est une constante caractéristique du couple, mesurée dans des conditions définies par convention (concentrations 1 mol/L). Le potentiel réel E dépend des concentrations effectives du milieu et varie donc au cours de la réaction, à mesure que les concentrations évoluent.",
        },
      ],
    },
    {
      id: 'chaine-respiratoire',
      titre: 'Application : la chaîne respiratoire mitochondriale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La chaîne respiratoire mitochondriale illustre de façon exemplaire l’enchaînement de couples rédox de potentiels standard croissants, permettant un transfert d’électrons progressif depuis les coenzymes réduits issus du catabolisme jusqu’à l’oxygène, accepteur final d’électrons.",
        },
        {
          type: 'tableau',
          titre: 'Couples rédox impliqués dans la chaîne respiratoire',
          colonnes: ['Couple', 'Position', 'Rôle'],
          lignes: [
            ['NAD+/NADH', 'Point d’entrée principal', 'Collecte les électrons issus du catabolisme (glycolyse, cycle de Krebs, bêta-oxydation)'],
            ['FAD/FADH2', 'Point d’entrée secondaire', 'Collecte des électrons à un potentiel légèrement plus élevé que NAD+/NADH'],
            ['Cytochromes (Fe3+/Fe2+)', 'Complexes III et IV', 'Transportent les électrons de proche en proche via le fer de leur groupement hème'],
            ['O2/H2O', 'Accepteur final', 'Couple de potentiel standard le plus élevé de la chaîne, ce qui rend le transfert d’électrons spontané jusqu’à ce point'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Pourquoi l’ordre des couples est indispensable',
          texte:
            "Les transporteurs de la chaîne respiratoire sont organisés selon un potentiel standard croissant : chaque transfert d’électron d’un transporteur au suivant est ainsi spontané (ΔG négatif), l’énergie libérée à chaque étape étant utilisée pour pomper des protons et créer un gradient électrochimique, moteur de la synthèse d’ATP.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repère de potentiel',
          texte:
            "Le couple NAD+/NADH a un potentiel standard très bas, proche de −0,32 volt, tandis que le couple O2/H2O a un potentiel standard élevé, proche de +0,82 volt. Cet écart important explique le caractère très exergonique du transfert global d’électrons dans la chaîne respiratoire.",
        },
      ],
    },
  ],
  pointsCles: [
    'Le nombre d’oxydation attribue une charge fictive à chaque atome et permet de suivre les échanges d’électrons dans une réaction rédox.',
    'L’oxydation est une perte d’électrons (augmentation du nombre d’oxydation), la réduction un gain d’électrons (diminution du nombre d’oxydation).',
    'Un couple Ox/Red est relié par la demi-équation Ox + n e− ⇌ Red.',
    'L’oxydant du couple de plus haut potentiel standard réagit spontanément avec le réducteur du couple de plus bas potentiel standard.',
    'L’équation de Nernst permet de calculer le potentiel réel d’un couple en fonction des concentrations effectives en oxydant et réducteur.',
    'La relation ΔrG° = −n·F·E° relie thermodynamique et électrochimie.',
    'La chaîne respiratoire enchaîne des couples rédox de potentiel standard croissant, jusqu’à l’oxygène, accepteur final.',
  ],
  erreursFrequentes: [
    'Confondre oxydation et réduction : l’oxydation est une perte d’électrons, non un gain.',
    'Oublier que le nombre d’oxydation de l’oxygène est le plus souvent -II, sauf cas particuliers comme les peroxydes.',
    'Inverser la règle du classement électrochimique en faisant réagir l’oxydant le plus faible avec le réducteur le plus fort.',
    'Confondre potentiel standard E° (constante du couple) et potentiel réel E (dépendant des concentrations, via Nernst).',
    'Croire que le transfert d’électrons dans la chaîne respiratoire se fait au hasard, sans lien avec l’ordre croissant des potentiels standard.',
  ],
  mnemotechniques: [
    {
      moyen: '« OIL RIG »',
      explication:
        'Oxidation Is Loss, Reduction Is Gain : l’oxydation est une perte d’électrons, la réduction un gain d’électrons.',
    },
    {
      moyen: '« CAT-AN, OX-RED »',
      explication:
        'À la cathode a lieu la réduction, à l’anode l’oxydation ; l’oxydant est toujours consommé (réduit), le réducteur toujours consommé (oxydé), jamais l’inverse.',
    },
    {
      moyen: 'La chaîne respiratoire comme un escalier descendant',
      explication:
        'Les électrons « descendent » d’un couple de bas potentiel (NAD+/NADH) vers un couple de haut potentiel (O2/H2O), libérant de l’énergie à chaque marche, comme de l’eau qui coule vers le bas.',
    },
  ],
  sources: [
    'Atkins, Chimie physique',
    'Lehninger, Principes de biochimie',
    'Chimie générale, collection PASS/LAS, ouvrage de référence UE2',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-oxydoreduction-fc-01', recto: 'Quel est le nombre d’oxydation d’un élément à l’état simple ?', verso: 'Il est nul, par convention.', type: 'chiffre', tags: ['nombre d’oxydation'] },
    { id: 'ue2-oxydoreduction-fc-02', recto: 'Quel est le nombre d’oxydation habituel de l’oxygène dans ses composés ?', verso: '-II, sauf dans les peroxydes et les composés avec le fluor.', type: 'chiffre', tags: ['nombre d’oxydation'] },
    { id: 'ue2-oxydoreduction-fc-03', recto: 'Définir l’oxydation en termes d’électrons.', verso: 'Une perte d’électrons, correspondant à une augmentation du nombre d’oxydation.', type: 'definition', tags: ['oxydation'] },
    { id: 'ue2-oxydoreduction-fc-04', recto: 'Écrire la demi-équation générale d’un couple Ox/Red.', verso: 'Ox + n e− ⇌ Red.', type: 'formule', tags: ['couple rédox'] },
    { id: 'ue2-oxydoreduction-fc-05', recto: 'Comment prévoir le sens spontané d’une réaction entre deux couples rédox ?', verso: 'L’oxydant du couple de plus haut potentiel standard réagit avec le réducteur du couple de plus bas potentiel standard.', type: 'mecanisme', tags: ['potentiel standard'] },
    { id: 'ue2-oxydoreduction-fc-06', recto: 'Donner l’équation de Nernst pour un couple Ox/Red.', verso: 'E = E° + (RT/nF) · ln([Ox]/[Red]).', type: 'formule', tags: ['Nernst'] },
    { id: 'ue2-oxydoreduction-fc-07', recto: 'Que vaut le potentiel E d’un couple lorsque [Ox] = [Red] ?', verso: 'Il est égal au potentiel standard E° du couple.', type: 'mecanisme', tags: ['Nernst'] },
    { id: 'ue2-oxydoreduction-fc-08', recto: 'Donner la relation entre ΔrG° et E°.', verso: 'ΔrG° = −n·F·E°.', type: 'formule', tags: ['thermodynamique rédox'] },
    { id: 'ue2-oxydoreduction-fc-09', recto: 'Quel est le couple accepteur final d’électrons dans la chaîne respiratoire ?', verso: 'Le couple O2/H2O, de potentiel standard le plus élevé de la chaîne.', type: 'classification', tags: ['chaîne respiratoire'] },
    { id: 'ue2-oxydoreduction-fc-10', recto: 'Quel couple collecte principalement les électrons issus du catabolisme ?', verso: 'Le couple NAD+/NADH.', type: 'classification', tags: ['chaîne respiratoire'] },
    { id: 'ue2-oxydoreduction-fc-11', recto: 'Par quel intermédiaire les cytochromes transportent-ils les électrons ?', verso: 'Par le fer de leur groupement hème, qui alterne entre les états Fe3+ et Fe2+.', type: 'mecanisme', tags: ['cytochromes'] },
    { id: 'ue2-oxydoreduction-fc-12', recto: 'Pourquoi le transfert d’électrons dans la chaîne respiratoire est-il globalement spontané ?', verso: 'Parce que les couples sont ordonnés selon un potentiel standard croissant, jusqu’à l’oxygène, ce qui rend chaque étape énergétiquement favorable.', type: 'mecanisme', tags: ['chaîne respiratoire'] },
  ],
  qcm: [
    {
      id: 'ue2-oxydoreduction-qcm-01',
      enonce: 'Concernant le nombre d’oxydation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le nombre d’oxydation d’un ion monoatomique est égal à sa charge.', vraie: true, justification: 'Exact, par définition.' },
        { lettre: 'B', texte: 'La somme des nombres d’oxydation dans une espèce neutre est toujours nulle.', vraie: true, justification: 'Exact : dans une espèce neutre, les nombres d’oxydation attribués aux différents atomes se compensent exactement.' },
        { lettre: 'C', texte: 'L’hydrogène a systématiquement un nombre d’oxydation de -I.', vraie: false, justification: 'Faux : il vaut le plus souvent +I, sauf dans les hydrures métalliques où il vaut -I.' },
        { lettre: 'D', texte: 'Une oxydation se traduit par une diminution du nombre d’oxydation.', vraie: false, justification: 'Faux : une oxydation se traduit par une augmentation du nombre d’oxydation.' },
        { lettre: 'E', texte: 'Le nombre d’oxydation d’un élément à l’état simple est nul.', vraie: true, justification: 'Exact, comme dans O2 ou Fe métallique.' },
      ],
      correction: 'Réponses exactes : A, B et E. Bien retenir le sens correct de variation du nombre d’oxydation lors d’une oxydation.',
      difficulte: 2,
    },
    {
      id: 'ue2-oxydoreduction-qcm-02',
      enonce: 'Concernant les couples rédox et les demi-équations, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un couple rédox est relié par un transfert de proton.', vraie: false, justification: 'Faux : un couple rédox est relié par un transfert d’électrons, non de proton.' },
        { lettre: 'B', texte: 'La demi-équation Ox + n e− ⇌ Red décrit un couple rédox.', vraie: true, justification: 'Exact : cette demi-équation traduit l’échange de n électrons entre la forme oxydée et la forme réduite d’un même couple.' },
        { lettre: 'C', texte: 'Dans une réaction rédox globale, le nombre total d’électrons échangés doit être identique entre les deux demi-équations combinées.', vraie: true, justification: 'Exact, pour que les électrons s’annulent dans le bilan final.' },
        { lettre: 'D', texte: 'L’oxydant d’un couple se transforme en son réducteur conjugué en perdant des électrons.', vraie: false, justification: 'Faux : l’oxydant se transforme en réducteur en gagnant des électrons.' },
        { lettre: 'E', texte: 'Équilibrer une demi-équation en milieu acide peut nécessiter l’ajout d’ions H+.', vraie: true, justification: 'Exact, pour équilibrer l’hydrogène après avoir équilibré l’oxygène avec des molécules d’eau.' },
      ],
      correction: 'Réponses exactes : B, C et E. Le couple rédox est bien un transfert d’électrons, non de proton (ce dernier caractérise l’acido-basicité).',
      difficulte: 2,
    },
    {
      id: 'ue2-oxydoreduction-qcm-03',
      enonce: 'Concernant le potentiel standard d’oxydoréduction, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’électrode standard à hydrogène a un potentiel fixé par convention à 0 volt.', vraie: true, justification: 'Exact : c’est la référence de l’échelle des potentiels rédox.' },
        { lettre: 'B', texte: 'Un couple de potentiel standard élevé a une forme oxydée fortement oxydante.', vraie: true, justification: 'Exact : plus le potentiel standard E° d’un couple est élevé, plus sa forme oxydée a tendance à capter des électrons, donc à oxyder.' },
        { lettre: 'C', texte: 'La réaction spontanée fait réagir l’oxydant du couple de plus bas potentiel avec le réducteur du couple de plus haut potentiel.', vraie: false, justification: 'Faux : c’est l’inverse, l’oxydant du couple de plus haut potentiel réagit avec le réducteur du couple de plus bas potentiel.' },
        { lettre: 'D', texte: 'La relation ΔrG° = −n·F·E° relie thermodynamique et électrochimie.', vraie: true, justification: 'Exact : cette relation relie l’enthalpie libre standard de réaction ΔrG° au potentiel standard E°, via le nombre d’électrons échangés n et la constante de Faraday F.' },
        { lettre: 'E', texte: 'Un E° négatif signifie que la forme réduite du couple est un réducteur fort.', vraie: true, justification: 'Exact : un E° bas traduit un fort pouvoir réducteur de la forme réduite.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Bien retenir le sens correct de la règle du classement électrochimique.',
      difficulte: 2,
    },
    {
      id: 'ue2-oxydoreduction-qcm-04',
      enonce: 'Concernant l’équation de Nernst, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle permet de calculer le potentiel réel d’un couple hors conditions standard.', vraie: true, justification: 'Exact : l’équation de Nernst donne le potentiel réel E d’un couple en fonction des concentrations effectives de ses formes oxydée et réduite.' },
        { lettre: 'B', texte: 'Quand [Ox] = [Red], le potentiel E est nul.', vraie: false, justification: 'Faux : dans ce cas, le terme logarithmique s’annule et E est égal à E°, non à zéro.' },
        { lettre: 'C', texte: 'Une augmentation de la concentration en oxydant augmente le potentiel E du couple.', vraie: true, justification: 'Exact, conformément au sens du logarithme dans l’équation de Nernst.' },
        { lettre: 'D', texte: 'E° est une grandeur qui varie en fonction des concentrations du milieu.', vraie: false, justification: 'Faux : E° est une constante caractéristique du couple, définie en conditions standard.' },
        { lettre: 'E', texte: 'F représente la constante de Faraday.', vraie: true, justification: 'Exact : F est la constante de Faraday, qui vaut environ 96 500 C/mol.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer potentiel standard (constante) et potentiel réel (variable selon Nernst).',
      difficulte: 3,
    },
    {
      id: 'ue2-oxydoreduction-qcm-05',
      enonce: 'Concernant la chaîne respiratoire mitochondriale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le couple NAD+/NADH a un potentiel standard plus bas que le couple O2/H2O.', vraie: true, justification: 'Exact : environ −0,32 V contre environ +0,82 V.' },
        { lettre: 'B', texte: 'L’oxygène est l’accepteur final d’électrons de la chaîne respiratoire.', vraie: true, justification: 'Exact : le couple O2/H2O, de potentiel standard le plus élevé de la chaîne, accepte les électrons en dernier lieu.' },
        { lettre: 'C', texte: 'Les cytochromes transportent les électrons grâce au fer de leur groupement hème.', vraie: true, justification: 'Exact, par alternance entre Fe3+ et Fe2+.' },
        { lettre: 'D', texte: 'Le transfert d’électrons le long de la chaîne respiratoire est globalement endergonique.', vraie: false, justification: 'Faux : il est globalement exergonique, l’énergie libérée servant à créer un gradient de protons.' },
        { lettre: 'E', texte: 'Les couples de la chaîne respiratoire sont classés par potentiel standard décroissant, du NAD+/NADH vers l’O2/H2O.', vraie: false, justification: 'Faux : ils sont classés par potentiel standard croissant.' },
      ],
      correction: 'Réponses exactes : A, B et C. Le classement par potentiel croissant rend le transfert d’électrons spontané à chaque étape.',
      difficulte: 2,
    },
    {
      id: 'ue2-oxydoreduction-qcm-06',
      enonce: 'Concernant les définitions générales de l’oxydoréduction, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une réaction rédox implique toujours un couple oxydant et un couple réducteur distincts.', vraie: true, justification: 'Exact : un réducteur cède ses électrons à un oxydant d’un autre couple.' },
        { lettre: 'B', texte: 'Le mnémotechnique « OIL RIG » signifie que la réduction est une perte d’électrons.', vraie: false, justification: 'Faux : « Reduction Is Gain » signifie que la réduction est un gain d’électrons.' },
        { lettre: 'C', texte: 'L’oxydant d’un couple gagne des électrons pour former le réducteur conjugué.', vraie: true, justification: 'Exact : en captant des électrons, l’oxydant d’un couple se transforme en son réducteur conjugué.' },
        { lettre: 'D', texte: 'Dans une pile, l’oxydation a lieu à l’anode.', vraie: true, justification: 'Exact, tandis que la réduction a lieu à la cathode.' },
        { lettre: 'E', texte: 'Un même élément ne peut jamais présenter plusieurs nombres d’oxydation différents.', vraie: false, justification: 'Faux : un même élément, comme le fer ou le soufre, peut présenter plusieurs nombres d’oxydation selon le composé considéré.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir la règle « anode oxydation, cathode réduction ».',
      difficulte: 2,
    },
  ],
};
