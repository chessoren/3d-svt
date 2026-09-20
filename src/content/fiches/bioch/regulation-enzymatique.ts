import type { Fiche } from '../../types';

export const ficheRegulationEnzymatique: Fiche = {
  id: 'bioch-regulation-enzymatique',
  ue: 'bioch',
  titre: 'Régulation enzymatique',
  sousTitre: 'Inhibitions, allostérie, modifications covalentes, zymogènes et isoenzymes',
  chapitre: 'Enzymologie',
  ordre: 8,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'inhibition compétitive',
    'inhibition non compétitive',
    'inhibition incompétitive',
    'allostérie',
    'coopérativité',
    'modification covalente',
    'zymogène',
    'isoenzyme',
  ],
  objectifs: [
    'Distinguer les inhibitions compétitive, non compétitive et incompétitive sur le plan cinétique.',
    'Interpréter l’effet de chaque type d’inhibition sur le Km et le Vmax apparents.',
    'Décrire les enzymes allostériques et la notion de coopérativité.',
    'Expliquer la régulation enzymatique par modification covalente réversible.',
    'Définir un zymogène et son mode d’activation.',
    'Définir une isoenzyme et son intérêt en biologie médicale.',
  ],
  sections: [
    {
      id: 'inhibition-competitive',
      titre: 'L’inhibition compétitive',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un inhibiteur compétitif est une molécule qui ressemble structurellement au substrat et se fixe de façon réversible sur le site actif de l’enzyme, entrant ainsi en compétition directe avec le substrat pour ce site.",
        },
        {
          type: 'tableau',
          titre: 'Effet de l’inhibition compétitive sur les paramètres cinétiques',
          colonnes: ['Paramètre', 'Effet observé', 'Interprétation'],
          lignes: [
            ['Km apparent', 'Augmenté', 'Il faut plus de substrat pour atteindre la moitié du Vmax, l’inhibiteur devant être supplanté'],
            ['Vmax apparent', 'Inchangé', 'À concentration de substrat suffisamment élevée, le substrat déplace totalement l’inhibiteur'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Comment lever une inhibition compétitive ?',
          texte:
            "L’effet d’un inhibiteur compétitif peut toujours être surmonté par un excès de substrat, car la compétition se joue sur le même site actif. C’est le critère cinétique distinctif de ce type d’inhibition, visible par le retour au Vmax initial à forte concentration de substrat.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple pharmacologique classique',
          texte:
            "Le méthotrexate inhibe la dihydrofolate réductase de façon compétitive vis-à-vis du dihydrofolate, bloquant la régénération du tétrahydrofolate nécessaire à la synthèse des bases nucléiques ; c’est le principe de son usage en chimiothérapie anticancéreuse.",
        },
      ],
    },
    {
      id: 'inhibition-non-competitive-incompetitive',
      titre: 'Inhibitions non compétitive et incompétitive',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Contrairement à l’inhibiteur compétitif, l’inhibiteur non compétitif se fixe sur un site distinct du site actif, aussi bien sur l’enzyme libre que sur le complexe enzyme-substrat, sans entrer en compétition avec le substrat.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des trois types classiques d’inhibition réversible',
          colonnes: ['Type', 'Site de fixation', 'Effet sur Km apparent', 'Effet sur Vmax apparent'],
          lignes: [
            ['Compétitive', 'Site actif, en compétition avec le substrat', 'Augmenté', 'Inchangé'],
            ['Non compétitive (pure)', 'Site distinct, sur E libre et sur ES', 'Inchangé', 'Diminué'],
            ['Incompétitive', 'Site distinct, uniquement sur le complexe ES', 'Diminué', 'Diminué'],
          ],
        },
        {
          type: 'definition',
          terme: 'Inhibiteur incompétitif',
          definition:
            "Inhibiteur qui ne se fixe que sur le complexe enzyme-substrat déjà formé (ESI), et non sur l’enzyme libre. Il diminue à la fois le Km et le Vmax apparents, car il déplace l’équilibre de formation du complexe ES vers ESI tout en réduisant la vitesse de transformation en produit.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un inhibiteur non compétitif ne peut pas être surmonté par le substrat',
          texte:
            "Puisque l’inhibiteur non compétitif ne se fixe pas sur le site actif, augmenter la concentration de substrat ne permet pas de restaurer le Vmax initial : c’est le critère cinétique distinctif qui l’oppose à l’inhibition compétitive.",
        },
      ],
    },
    {
      id: 'allosterie-cooperativite',
      titre: 'Allostérie et coopérativité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les enzymes allostériques sont des enzymes oligomériques dont l’activité est modulée par la fixation d’un effecteur (activateur ou inhibiteur) sur un site distinct du site actif, appelé site allostérique, entraînant un changement de conformation transmis à l’ensemble de la molécule.",
        },
        {
          type: 'definition',
          terme: 'Rétro-inhibition (feedback négatif)',
          definition:
            "Mécanisme de régulation dans lequel le produit final d’une voie métabolique inhibe, souvent de façon allostérique, une enzyme intervenant plus en amont de cette même voie, ajustant ainsi la production à la demande cellulaire.",
        },
        {
          type: 'liste',
          items: [
            'La courbe de vitesse en fonction de la concentration en substrat d’une enzyme allostérique coopérative est sigmoïde, et non hyperbolique comme dans le modèle de Michaelis-Menten.',
            'La phosphofructokinase-1, enzyme clé de la glycolyse, est l’exemple classique d’enzyme allostérique inhibée par l’ATP et le citrate, activée par l’AMP.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre allostérie et inhibition classique',
          texte:
            "Contrairement aux inhibitions compétitive, non compétitive ou incompétitive, décrites par le modèle de Michaelis-Menten pour une enzyme monomérique, la régulation allostérique concerne des enzymes oligomériques et donne des courbes sigmoïdes, reflet d’une coopérativité entre sous-unités.",
        },
      ],
    },
    {
      id: 'modifications-covalentes',
      titre: 'Régulation par modification covalente',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "De nombreuses enzymes voient leur activité modulée par l’addition ou le retrait covalent et réversible d’un groupement chimique, sous l’action d’enzymes régulatrices spécifiques, ce qui permet une réponse rapide à un signal cellulaire.",
        },
        {
          type: 'tableau',
          titre: 'Principales modifications covalentes réversibles',
          colonnes: ['Modification', 'Enzymes en cause', 'Exemple'],
          lignes: [
            ['Phosphorylation / déphosphorylation', 'Protéines kinases / protéines phosphatases', 'Glycogène phosphorylase, activée par phosphorylation'],
            ['Acétylation / désacétylation', 'Acétyltransférases / désacétylases', 'Régulation de protéines histones et non histones'],
            ['Méthylation / déméthylation', 'Méthyltransférases / déméthylases', 'Régulation épigénétique et de certaines enzymes du métabolisme'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un mécanisme rapide et réversible',
          texte:
            "La régulation par modification covalente est généralement plus rapide que la régulation par synthèse ou dégradation de l’enzyme (régulation de la quantité d’enzyme), car elle ne nécessite ni transcription ni traduction, seulement l’action d’enzymes déjà présentes.",
        },
      ],
    },
    {
      id: 'zymogenes',
      titre: 'Les zymogènes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un zymogène (ou proenzyme) est un précurseur inactif d’une enzyme, activé de façon irréversible par clivage protéolytique d’un ou plusieurs segments peptidiques, ce qui libère ou réorganise le site actif fonctionnel.",
        },
        {
          type: 'definition',
          terme: 'Zymogène',
          definition:
            "Forme précurseur inactive d’une enzyme, généralement une protéase, dont l’activation nécessite une coupure protéolytique irréversible, contrairement aux régulations réversibles par modification covalente ou allostérie.",
        },
        {
          type: 'tableau',
          titre: 'Exemples de zymogènes des protéases digestives et de la coagulation',
          colonnes: ['Zymogène', 'Forme active', 'Activateur'],
          lignes: [
            ['Trypsinogène', 'Trypsine', 'Entéropeptidase (bordure en brosse intestinale), puis autocatalyse par la trypsine elle-même'],
            ['Chymotrypsinogène', 'Chymotrypsine', 'Trypsine'],
            ['Pepsinogène', 'Pepsine', 'Milieu acide gastrique, puis autocatalyse'],
            ['Prothrombine (facteur II)', 'Thrombine', 'Complexe prothrombinase (facteur Xa)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Pourquoi sécréter une forme inactive ?',
          texte:
            "La sécrétion des protéases digestives et des facteurs de coagulation sous forme de zymogènes protège les tissus producteurs (pancréas, muqueuse gastrique, plasma) d’une autodigestion ou d’une coagulation intempestive, l’activation n’ayant lieu qu’au site et au moment physiologiquement requis.",
        },
      ],
    },
    {
      id: 'isoenzymes',
      titre: 'Les isoenzymes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les isoenzymes (ou isozymes) sont des formes moléculaires distinctes d’une même activité enzymatique, codées par des gènes différents, exprimées dans des tissus différents ou à des stades de développement différents, mais catalysant la même réaction.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple diagnostique de référence : la créatine kinase',
          texte:
            "La créatine kinase (CK) existe sous plusieurs isoformes tissulaires : CK-MM (muscle squelettique), CK-MB (myocarde) et CK-BB (cerveau). L’élévation spécifique de la CK-MB plasmatique a longtemps constitué un marqueur biologique de l’infarctus du myocarde, aujourd’hui largement supplanté par le dosage des troponines cardiaques.",
        },
        {
          type: 'liste',
          items: [
            'Les isoenzymes de la lactate déshydrogénase (LDH1 à LDH5) diffèrent par la proportion de sous-unités H (cardiaques) et M (musculaires), ce qui module leurs propriétés cinétiques.',
            'Le dosage sélectif d’une isoenzyme permet d’améliorer la spécificité tissulaire d’un diagnostic biologique par rapport au dosage de l’activité enzymatique totale.',
          ],
        },
      ],
    },
  ],
  pointsCles: [
    'L’inhibiteur compétitif se fixe sur le site actif : Km apparent augmenté, Vmax apparent inchangé, effet surmontable par excès de substrat.',
    'L’inhibiteur non compétitif pur se fixe sur un site distinct, sur E et sur ES : Km apparent inchangé, Vmax apparent diminué.',
    'L’inhibiteur incompétitif ne se fixe que sur le complexe ES : Km et Vmax apparents tous deux diminués.',
    'Les enzymes allostériques, oligomériques, donnent des courbes sigmoïdes traduisant une coopérativité entre sous-unités.',
    'La modification covalente réversible (phosphorylation notamment) permet une régulation rapide de l’activité enzymatique.',
    'Un zymogène est activé de façon irréversible par protéolyse, contrairement aux régulations allostériques ou covalentes réversibles.',
    'Les isoenzymes catalysent la même réaction mais diffèrent par leur structure et leur distribution tissulaire, utile en diagnostic biologique.',
  ],
  erreursFrequentes: [
    'Confondre les effets sur Km et Vmax des trois types d’inhibition réversible : bien mémoriser le tableau comparatif.',
    'Croire qu’un excès de substrat peut lever une inhibition non compétitive : ce critère n’est valable que pour l’inhibition compétitive.',
    'Confondre inhibition non compétitive (fixation sur E libre et ES) et inhibition incompétitive (fixation sur ES uniquement).',
    'Penser que l’activation d’un zymogène est réversible : elle est au contraire irréversible, contrairement aux modifications covalentes de type phosphorylation.',
    'Assimiler isoenzymes et isomères : les isoenzymes sont des protéines distinctes codées par des gènes différents, non des formes stéréochimiques d’une même molécule.',
  ],
  mnemotechniques: [
    {
      moyen: '« Compétitif comme Concurrent »',
      explication:
        'L’inhibiteur compétitif est un concurrent direct du substrat sur le même site actif ; un excès de substrat suffit à l’évincer.',
    },
    {
      moyen: '« Incompétitif : seulement sur ES »',
      explication:
        'L’inhibiteur incompétitif ne se fixe QUE sur le complexe déjà formé (ES), jamais sur l’enzyme libre, contrairement au non compétitif.',
    },
    {
      moyen: '« Zymogène, comme un fusible coupé une seule fois »',
      explication:
        'L’activation d’un zymogène par protéolyse est irréversible, à l’image d’un fusible qui, une fois coupé, ne peut être réparé.',
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
      id: 'bioch-regulation-enzymatique-fc-01',
      recto: 'Sur quel site se fixe un inhibiteur compétitif ?',
      verso: 'Sur le site actif de l’enzyme, en compétition directe avec le substrat.',
      type: 'mecanisme',
      tags: ['inhibition compétitive'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-02',
      recto: 'Quel est l’effet d’un inhibiteur compétitif sur le Km et le Vmax apparents ?',
      verso: 'Le Km apparent augmente, le Vmax apparent reste inchangé.',
      type: 'chiffre',
      tags: ['inhibition compétitive'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-03',
      recto: 'Un excès de substrat peut-il lever une inhibition non compétitive ?',
      verso: 'Non, car l’inhibiteur ne se fixe pas sur le site actif ; le Vmax apparent reste diminué quelle que soit la concentration de substrat.',
      type: 'mecanisme',
      tags: ['inhibition non compétitive'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-04',
      recto: 'Quel est l’effet d’un inhibiteur incompétitif sur le Km et le Vmax apparents ?',
      verso: 'Les deux paramètres, Km et Vmax apparents, diminuent.',
      type: 'chiffre',
      tags: ['inhibition incompétitive'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-05',
      recto: 'Qu’est-ce qu’une enzyme allostérique ?',
      verso: 'Une enzyme oligomérique dont l’activité est modulée par un effecteur fixé sur un site distinct du site actif.',
      type: 'definition',
      tags: ['allostérie'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-06',
      recto: 'Quelle est la forme typique de la courbe vitesse-substrat d’une enzyme allostérique coopérative ?',
      verso: 'Une courbe sigmoïde.',
      type: 'definition',
      tags: ['allostérie'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-07',
      recto: 'Qu’est-ce que la rétro-inhibition (feedback négatif) ?',
      verso: 'L’inhibition d’une enzyme en amont d’une voie métabolique par le produit final de cette même voie.',
      type: 'definition',
      tags: ['rétro-inhibition'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-08',
      recto: 'Citer une modification covalente réversible courante de régulation enzymatique.',
      verso: 'La phosphorylation, catalysée par des protéines kinases, et sa réversion par des protéines phosphatases.',
      type: 'mecanisme',
      tags: ['modification covalente'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-09',
      recto: 'Qu’est-ce qu’un zymogène ?',
      verso: 'Un précurseur inactif d’une enzyme, activé de façon irréversible par clivage protéolytique.',
      type: 'definition',
      tags: ['zymogène'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-10',
      recto: 'Quelle enzyme active le trypsinogène en trypsine dans l’intestin ?',
      verso: 'L’entéropeptidase de la bordure en brosse intestinale, puis la trypsine elle-même par autocatalyse.',
      type: 'mecanisme',
      tags: ['zymogène', 'digestion'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-11',
      recto: 'Qu’est-ce qu’une isoenzyme ?',
      verso: 'Une forme moléculaire distincte d’une même activité enzymatique, codée par un gène différent, catalysant la même réaction.',
      type: 'definition',
      tags: ['isoenzymes'],
    },
    {
      id: 'bioch-regulation-enzymatique-fc-12',
      recto: 'Quelle isoenzyme de la créatine kinase est spécifique du myocarde ?',
      verso: 'La CK-MB.',
      type: 'clinique',
      tags: ['isoenzymes', 'créatine kinase'],
    },
  ],
  qcm: [
    {
      id: 'bioch-regulation-enzymatique-qcm-01',
      enonce: 'Concernant l’inhibition compétitive, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’inhibiteur ressemble structurellement au substrat.', vraie: true, justification: 'C’est ce qui lui permet de se fixer sur le site actif à la place du substrat.' },
        { lettre: 'B', texte: 'Le Vmax apparent est diminué.', vraie: false, justification: 'Le Vmax apparent reste inchangé : un excès de substrat permet de l’atteindre malgré l’inhibiteur.' },
        { lettre: 'C', texte: 'Le Km apparent est augmenté.', vraie: true, justification: 'Il faut plus de substrat pour atteindre la moitié du Vmax en présence de l’inhibiteur.' },
        { lettre: 'D', texte: 'L’effet de l’inhibiteur peut être surmonté par un excès de substrat.', vraie: true, justification: 'C’est le critère cinétique distinctif de l’inhibition compétitive.' },
        { lettre: 'E', texte: 'Le méthotrexate est un exemple d’inhibiteur compétitif de la dihydrofolate réductase.', vraie: true, justification: 'Il entre en compétition avec le dihydrofolate pour le site actif de cette enzyme.' },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-regulation-enzymatique-qcm-02',
      enonce: 'Concernant les inhibitions non compétitive et incompétitive, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’inhibiteur non compétitif pur se fixe sur l’enzyme libre et sur le complexe ES.', vraie: true, justification: 'C’est la caractéristique qui distingue l’inhibition non compétitive pure de l’incompétitive.' },
        { lettre: 'B', texte: 'L’inhibiteur incompétitif se fixe uniquement sur le complexe ES.', vraie: true, justification: 'C’est la définition de l’inhibition incompétitive.' },
        { lettre: 'C', texte: 'L’inhibition non compétitive pure diminue le Km apparent.', vraie: false, justification: 'Elle laisse le Km apparent inchangé ; elle diminue seulement le Vmax apparent.' },
        { lettre: 'D', texte: 'L’inhibition incompétitive diminue à la fois le Km et le Vmax apparents.', vraie: true, justification: 'C’est l’effet caractéristique de ce type d’inhibition.' },
        { lettre: 'E', texte: 'Ces deux types d’inhibition peuvent être levés par un excès de substrat.', vraie: false, justification: 'Contrairement à l’inhibition compétitive, un excès de substrat ne restaure pas le Vmax initial.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 3,
    },
    {
      id: 'bioch-regulation-enzymatique-qcm-03',
      enonce: 'Concernant l’allostérie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une enzyme allostérique est nécessairement monomérique.', vraie: false, justification: 'Elle est au contraire oligomérique, avec des interactions entre sous-unités.' },
        { lettre: 'B', texte: 'Le site allostérique est distinct du site actif.', vraie: true, justification: 'C’est la définition d’un effecteur allostérique.' },
        { lettre: 'C', texte: 'La courbe vitesse-substrat d’une enzyme allostérique coopérative est hyperbolique.', vraie: false, justification: 'Elle est sigmoïde, reflet de la coopérativité entre sous-unités.' },
        { lettre: 'D', texte: 'La phosphofructokinase-1 est inhibée par l’ATP.', vraie: true, justification: 'C’est un exemple classique de rétro-inhibition allostérique par un produit énergétique.' },
        { lettre: 'E', texte: 'La rétro-inhibition ajuste la production d’une voie métabolique à la demande cellulaire.', vraie: true, justification: 'C’est le principe même du feedback négatif exercé par le produit final.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-regulation-enzymatique-qcm-04',
      enonce: 'Concernant la régulation par modification covalente, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phosphorylation est catalysée par des protéines kinases.', vraie: true, justification: 'C’est le mécanisme enzymatique de la phosphorylation des protéines.' },
        { lettre: 'B', texte: 'Cette régulation est généralement irréversible.', vraie: false, justification: 'Elle est au contraire réversible, la phosphatase pouvant inverser l’effet de la kinase.' },
        { lettre: 'C', texte: 'Cette régulation est plus rapide qu’une régulation par synthèse de novo de l’enzyme.', vraie: true, justification: 'Elle ne nécessite ni transcription ni traduction, contrairement à la régulation de la quantité d’enzyme.' },
        { lettre: 'D', texte: 'La glycogène phosphorylase est un exemple d’enzyme régulée par phosphorylation.', vraie: true, justification: 'Sa forme phosphorylée est active, ce qui illustre ce mode de régulation.' },
        { lettre: 'E', texte: 'La méthylation ne concerne jamais la régulation enzymatique.', vraie: false, justification: 'La méthylation participe également à la régulation de certaines protéines et voies métaboliques.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-regulation-enzymatique-qcm-05',
      enonce: 'Concernant les zymogènes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un zymogène est la forme active d’une enzyme.', vraie: false, justification: 'C’est au contraire un précurseur inactif, qui doit être activé par protéolyse.' },
        { lettre: 'B', texte: 'L’activation d’un zymogène est réversible.', vraie: false, justification: 'Le clivage protéolytique qui l’active est irréversible.' },
        { lettre: 'C', texte: 'Le pepsinogène est activé en pepsine par le milieu acide gastrique.', vraie: true, justification: 'L’acidité gastrique déclenche l’activation initiale, suivie d’une autocatalyse par la pepsine.' },
        { lettre: 'D', texte: 'La prothrombine est le zymogène de la thrombine.', vraie: true, justification: 'Elle est activée en thrombine par le complexe prothrombinase.' },
        { lettre: 'E', texte: 'La sécrétion sous forme de zymogène protège le tissu producteur d’une activité prématurée.', vraie: true, justification: 'C’est le principal intérêt physiologique de cette forme précurseur inactive.' },
      ],
      correction: 'Réponses exactes : C, D et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-regulation-enzymatique-qcm-06',
      enonce: 'Concernant les isoenzymes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les isoenzymes catalysent la même réaction chimique.', vraie: true, justification: 'C’est la définition même d’une isoenzyme.' },
        { lettre: 'B', texte: 'Elles sont codées par le même gène.', vraie: false, justification: 'Elles sont codées par des gènes différents, ce qui les distingue de simples variants d’épissage identiques.' },
        { lettre: 'C', texte: 'La CK-MB est utilisée comme marqueur biologique en cas de suspicion d’infarctus du myocarde.', vraie: true, justification: 'C’est un marqueur historique de nécrose myocardique, bien qu’aujourd’hui supplanté par les troponines.' },
        { lettre: 'D', texte: 'Les isoenzymes de la LDH diffèrent par leur proportion de sous-unités H et M.', vraie: true, justification: 'C’est le principe de leur classification en cinq isoformes, de LDH1 à LDH5.' },
        { lettre: 'E', texte: 'Le dosage d’une isoenzyme spécifique n’apporte aucun avantage diagnostique par rapport à l’activité enzymatique totale.', vraie: false, justification: 'Il améliore au contraire la spécificité tissulaire du diagnostic biologique.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
