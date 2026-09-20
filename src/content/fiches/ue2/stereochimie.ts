import type { Fiche } from '../../types';

export const ficheStereochimie: Fiche = {
  id: 'ue2-stereochimie',
  ue: 'ue2',
  titre: 'Stéréochimie',
  sousTitre: 'Isomérie de constitution, chiralité, règles CIP, séries D/L et importance pharmacologique',
  chapitre: 'Chimie organique',
  ordre: 8,
  duree: 29,
  difficulte: 3,
  motsCles: [
    'isomérie',
    'chiralité',
    'carbone asymétrique',
    'règles CIP',
    'configuration R/S',
    'série D/L',
    'diastéréoisomères',
    'conformation',
  ],
  objectifs: [
    'Distinguer isomérie de constitution et stéréoisomérie.',
    'Définir la chiralité et reconnaître un carbone asymétrique.',
    'Appliquer les règles de Cahn-Ingold-Prelog pour attribuer une configuration R ou S.',
    'Différencier énantiomères et diastéréoisomères, ainsi que les séries D et L.',
    'Expliquer l’importance de la stéréochimie dans l’activité pharmacologique des médicaments.',
  ],
  sections: [
    {
      id: 'isomerie-constitution',
      titre: 'Isomérie de constitution',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Deux molécules sont isomères lorsqu’elles ont la même formule brute mais diffèrent par l’enchaînement ou la disposition spatiale de leurs atomes. L’isomérie de constitution (ou isomérie plane) concerne les molécules dont les atomes ne sont pas liés dans le même ordre.",
        },
        {
          type: 'tableau',
          titre: 'Types d’isomérie de constitution',
          colonnes: ['Type', 'Différence entre les isomères', 'Exemple'],
          lignes: [
            ['Isomérie de chaîne', 'Squelette carboné différent (linéaire, ramifié, cyclique)', 'Butane et isobutane'],
            ['Isomérie de position', 'Position d’un groupe fonctionnel différente sur le même squelette', 'Propan-1-ol et propan-2-ol'],
            ['Isomérie de fonction', 'Groupe fonctionnel de nature différente', 'Éthanol et diméthyléther'],
          ],
        },
        {
          type: 'definition',
          terme: 'Stéréoisomérie',
          definition:
            "Isomérie entre molécules qui possèdent le même enchaînement d’atomes (même constitution), mais qui diffèrent par la disposition spatiale de ces atomes. On distingue la stéréoisomérie de configuration, qui nécessite de rompre une liaison pour interconvertir les isomères, et la stéréoisomérie de conformation, qui n’exige qu’une rotation autour de liaisons simples.",
        },
      ],
    },
    {
      id: 'chiralite',
      titre: 'Chiralité et carbone asymétrique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une molécule est dite chirale lorsqu’elle n’est pas superposable à son image dans un miroir plan. Cette propriété est le plus souvent due à la présence d’un ou plusieurs carbones asymétriques.",
        },
        {
          type: 'definition',
          terme: 'Carbone asymétrique',
          definition:
            "Atome de carbone tétraédrique portant quatre substituants tous différents les uns des autres. Il constitue le centre stéréogène le plus fréquent en chimie organique et biochimie, noté C* par convention.",
        },
        {
          type: 'definition',
          terme: 'Énantiomères',
          definition:
            "Deux stéréoisomères qui sont images l’un de l’autre dans un miroir plan, sans être superposables. Ils possèdent des propriétés physiques identiques (point de fusion, solubilité) mais dévient la lumière polarisée dans des sens opposés et peuvent avoir des propriétés biologiques très différentes.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Chiralité et nombre de carbones asymétriques',
          texte:
            "Une molécule possédant n carbones asymétriques possède au maximum 2^n stéréoisomères de configuration. Ce maximum n’est cependant pas toujours atteint, notamment en cas de molécule méso, qui possède un plan de symétrie interne malgré la présence de carbones asymétriques et n’est donc pas chirale.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Pouvoir rotatoire',
          texte:
            "Une solution d’énantiomère unique dévie le plan de polarisation de la lumière polarisée d’un angle donné : dextrogyre (+, vers la droite) ou lévogyre (−, vers la gauche). Un mélange en proportions égales des deux énantiomères, appelé mélange racémique, n’a aucun pouvoir rotatoire net.",
        },
      ],
    },
    {
      id: 'regles-cip',
      titre: 'Les règles de Cahn-Ingold-Prelog et la nomenclature R/S',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les règles de Cahn-Ingold-Prelog (CIP) permettent d’attribuer sans ambiguïté une configuration absolue R ou S à un centre stéréogène, en classant les quatre substituants par ordre de priorité décroissante.",
        },
        {
          type: 'etapes',
          titre: 'Attribuer une configuration R ou S',
          etapes: [
            {
              titre: 'Classer les quatre substituants',
              detail: 'Attribuer la priorité selon le numéro atomique de l’atome directement lié au centre stéréogène : plus il est élevé, plus la priorité est grande. En cas d’égalité, comparer les atomes de rang suivant.',
            },
            {
              titre: 'Orienter la molécule',
              detail: 'Placer le substituant de plus basse priorité (souvent noté d) à l’arrière, pointant loin de l’observateur.',
            },
            {
              titre: 'Lire le sens de rotation',
              detail: 'Observer le sens de parcours des trois substituants restants, classés de la plus haute à la plus basse priorité (a vers b vers c). Un sens horaire donne la configuration R (Rectus) ; un sens antihoraire donne la configuration S (Sinister).',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Piège classique : substituant prioritaire vers l’avant',
          texte:
            "Lorsque le substituant de plus basse priorité est orienté vers l’observateur (et non vers l’arrière), le sens de rotation observé doit être inversé pour obtenir la configuration réelle : un sens horaire apparent correspond alors à une configuration S, et non R.",
        },
        {
          type: 'definition',
          terme: 'Configuration absolue',
          definition:
            "Description non ambiguë, par les descripteurs R ou S, de l’arrangement spatial réel des substituants autour d’un centre stéréogène, indépendante de toute mesure physique comme le pouvoir rotatoire.",
        },
      ],
    },
    {
      id: 'series-dl-diastereoisomeres',
      titre: 'Séries D et L, diastéréoisomères',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La nomenclature D/L, plus ancienne que la nomenclature R/S, repose sur une comparaison à une molécule de référence, le glycéraldéhyde, représentée en projection de Fischer.",
        },
        {
          type: 'definition',
          terme: 'Séries D et L',
          definition:
            "Une molécule appartient à la série D si, en projection de Fischer, le groupement de référence (typiquement -OH ou -NH2) porté par le dernier carbone asymétrique est placé à droite, comme dans le D-glycéraldéhyde ; elle appartient à la série L si ce groupement est placé à gauche. L’appartenance à une série D ou L ne préjuge pas du signe du pouvoir rotatoire ni de la configuration R ou S.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des nomenclatures de stéréochimie',
          colonnes: ['Nomenclature', 'Principe', 'Usage privilégié'],
          lignes: [
            ['R/S (CIP)', 'Priorité des substituants autour d’un centre stéréogène', 'Nomenclature systématique universelle'],
            ['D/L (Fischer)', 'Comparaison au glycéraldéhyde de référence', 'Sucres et acides aminés, par tradition historique'],
            ['+/− (dextrogyre/lévogyre)', 'Sens de déviation de la lumière polarisée, mesuré expérimentalement', 'Caractérisation physique d’un énantiomère pur'],
          ],
        },
        {
          type: 'definition',
          terme: 'Diastéréoisomères',
          definition:
            "Stéréoisomères de configuration qui ne sont pas images l’un de l’autre dans un miroir : c’est le cas de deux molécules possédant plusieurs centres stéréogènes dont certains, mais pas tous, ont une configuration inversée. À la différence des énantiomères, les diastéréoisomères ont des propriétés physiques différentes (point de fusion, solubilité).",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Repère rapide',
          texte:
            "Pour une molécule à deux carbones asymétriques, il existe quatre stéréoisomères possibles, formant deux couples d’énantiomères ; chaque stéréoisomère d’un couple est diastéréoisomère de chaque stéréoisomère de l’autre couple.",
        },
      ],
    },
    {
      id: 'conformations-applications',
      titre: 'Conformations et importance pharmacologique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Contrairement à la stéréoisomérie de configuration, la stéréoisomérie de conformation résulte uniquement de rotations autour de liaisons simples, sans rupture de liaison, et interconvertit librement les différentes formes à température ambiante.",
        },
        {
          type: 'definition',
          terme: 'Conformations décalée et éclipsée',
          definition:
            "Pour une liaison C-C simple, la conformation décalée, où les substituants portés par les deux carbones sont le plus éloignés possible les uns des autres, est énergétiquement plus stable que la conformation éclipsée, où ils se superposent, en raison de répulsions stériques et électroniques moindres.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Chiralité et activité des médicaments',
          texte:
            "De nombreux récepteurs et enzymes biologiques sont eux-mêmes chiraux : ils interagissent différemment avec chaque énantiomère d’une molécule active. Un énantiomère peut être thérapeutiquement actif tandis que l’autre est inactif, ou responsable d’effets indésirables distincts, ce qui justifie le développement de médicaments énantiopurs plutôt que sous forme de mélange racémique.",
        },
        {
          type: 'liste',
          items: [
            'La reconnaissance stéréospécifique d’un substrat par une enzyme repose sur la complémentarité tridimensionnelle entre le site actif et le stéréoisomère considéré.',
            'Deux énantiomères peuvent avoir des odeurs ou des goûts différents, en raison de la chiralité des récepteurs olfactifs et gustatifs.',
            'La métabolisation d’un médicament chiral peut différer selon l’énantiomère administré.',
          ],
        },
      ],
    },
  ],
  pointsCles: [
    'L’isomérie de constitution concerne des molécules de même formule brute mais d’enchaînement d’atomes différent.',
    'Un carbone asymétrique porte quatre substituants différents et constitue un centre stéréogène.',
    'Deux énantiomères sont images l’un de l’autre dans un miroir, non superposables, et de propriétés physiques identiques hormis le pouvoir rotatoire.',
    'Les règles CIP classent les substituants par priorité pour attribuer une configuration R ou S.',
    'Les séries D et L se définissent par comparaison au glycéraldéhyde en projection de Fischer, indépendamment de la configuration R/S et du pouvoir rotatoire.',
    'Les diastéréoisomères ne sont pas images en miroir l’un de l’autre et possèdent des propriétés physiques différentes.',
    'La chiralité conditionne souvent l’activité pharmacologique d’un médicament, en raison de la chiralité de ses cibles biologiques.',
  ],
  erreursFrequentes: [
    'Confondre isomérie de constitution (enchaînement différent) et stéréoisomérie (même enchaînement, disposition spatiale différente).',
    'Assimiler série D ou L à un signe dextrogyre ou lévogyre, ou à une configuration R ou S précise : ce sont trois classifications indépendantes.',
    'Oublier d’inverser le sens de lecture des priorités CIP lorsque le substituant de plus basse priorité est orienté vers l’observateur.',
    'Croire que deux énantiomères ont nécessairement la même activité biologique.',
    'Confondre diastéréoisomères et énantiomères : seuls les énantiomères sont images en miroir non superposables.',
  ],
  mnemotechniques: [
    {
      moyen: '« CIP » comme « Classement, Isolement, Priorité »',
      explication:
        'Rappelle la démarche : Classer les substituants par priorité, Isoler le groupe de plus basse priorité à l’arrière, Prononcer R ou S selon le sens de rotation observé.',
    },
    {
      moyen: '« R comme horloge, sens horaire »',
      explication:
        'R (Rectus) correspond au sens horaire des priorités décroissantes ; S (Sinister) au sens antihoraire, lorsque le groupe de plus basse priorité est bien placé à l’arrière.',
    },
    {
      moyen: '« Même miroir, mêmes propriétés physiques »',
      explication:
        'Deux énantiomères ont les mêmes propriétés physiques (hors pouvoir rotatoire) car ils sont l’image miroir exacte l’un de l’autre ; les diastéréoisomères, eux, diffèrent car ils ne sont pas en relation de miroir.',
    },
  ],
  sources: [
    'Chimie organique, collection PASS/LAS, ouvrage de référence UE2',
    'Clayden, Chimie organique',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-stereochimie-fc-01', recto: 'Qu’est-ce qu’un carbone asymétrique ?', verso: 'Un atome de carbone tétraédrique portant quatre substituants tous différents.', type: 'definition', tags: ['carbone asymétrique'] },
    { id: 'ue2-stereochimie-fc-02', recto: 'Définir des énantiomères.', verso: 'Deux stéréoisomères images l’un de l’autre dans un miroir, non superposables.', type: 'definition', tags: ['énantiomères'] },
    { id: 'ue2-stereochimie-fc-03', recto: 'Combien de stéréoisomères possède au maximum une molécule à n carbones asymétriques ?', verso: '2^n stéréoisomères de configuration au maximum.', type: 'formule', tags: ['chiralité'] },
    { id: 'ue2-stereochimie-fc-04', recto: 'Que signifie un mélange racémique ?', verso: 'Un mélange en proportions égales des deux énantiomères d’une molécule chirale, sans pouvoir rotatoire net.', type: 'definition', tags: ['pouvoir rotatoire'] },
    { id: 'ue2-stereochimie-fc-05', recto: 'Selon les règles CIP, comment est classé un substituant lié à un atome de numéro atomique élevé ?', verso: 'Il reçoit une priorité plus élevée.', type: 'mecanisme', tags: ['CIP'] },
    { id: 'ue2-stereochimie-fc-06', recto: 'Comment attribue-t-on la configuration R ?', verso: 'Le substituant de plus basse priorité est placé à l’arrière ; si le sens de parcours des trois autres, par priorité décroissante, est horaire, la configuration est R.', type: 'mecanisme', tags: ['configuration R/S'] },
    { id: 'ue2-stereochimie-fc-07', recto: 'Sur quelle molécule de référence repose la nomenclature D/L ?', verso: 'Le glycéraldéhyde, en projection de Fischer.', type: 'definition', tags: ['série D/L'] },
    { id: 'ue2-stereochimie-fc-08', recto: 'L’appartenance à la série L implique-t-elle une configuration S ?', verso: 'Non : série D/L, configuration R/S et signe du pouvoir rotatoire sont trois classifications indépendantes.', type: 'mecanisme', tags: ['série D/L'] },
    { id: 'ue2-stereochimie-fc-09', recto: 'Que sont des diastéréoisomères ?', verso: 'Des stéréoisomères de configuration qui ne sont pas images l’un de l’autre dans un miroir, de propriétés physiques différentes.', type: 'definition', tags: ['diastéréoisomères'] },
    { id: 'ue2-stereochimie-fc-10', recto: 'Quelle est la conformation la plus stable autour d’une liaison C-C simple ?', verso: 'La conformation décalée, où les substituants sont le plus éloignés possible les uns des autres.', type: 'mecanisme', tags: ['conformation'] },
    { id: 'ue2-stereochimie-fc-11', recto: 'Pourquoi deux énantiomères d’un médicament peuvent-ils avoir des effets différents ?', verso: 'Parce que leurs cibles biologiques (récepteurs, enzymes) sont elles-mêmes chirales et interagissent différemment avec chaque énantiomère.', type: 'clinique', tags: ['pharmacologie'] },
    { id: 'ue2-stereochimie-fc-12', recto: 'Une molécule méso est-elle chirale malgré ses carbones asymétriques ?', verso: 'Non : elle possède un plan de symétrie interne qui la rend superposable à son image en miroir.', type: 'definition', tags: ['molécule méso'] },
  ],
  qcm: [
    {
      id: 'ue2-stereochimie-qcm-01',
      enonce: 'Concernant l’isomérie de constitution, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le butane et l’isobutane sont des isomères de chaîne.', vraie: true, justification: 'Exact : ils diffèrent par la ramification de leur squelette carboné.' },
        { lettre: 'B', texte: 'L’éthanol et le diméthyléther sont des isomères de position.', vraie: false, justification: 'Faux : ce sont des isomères de fonction, l’un étant un alcool et l’autre un éther.' },
        { lettre: 'C', texte: 'Deux isomères de constitution ont le même enchaînement d’atomes.', vraie: false, justification: 'Faux : c’est justement leur enchaînement d’atomes qui diffère.' },
        { lettre: 'D', texte: 'Le propan-1-ol et le propan-2-ol sont des isomères de position.', vraie: true, justification: 'Exact : le groupe hydroxyle occupe une position différente sur le même squelette.' },
        { lettre: 'E', texte: 'Deux isomères de constitution ont toujours la même formule brute.', vraie: true, justification: 'Exact, c’est la définition même de l’isomérie.' },
      ],
      correction: 'Réponses exactes : A, D et E. Bien distinguer les trois sous-types d’isomérie de constitution.',
      difficulte: 2,
    },
    {
      id: 'ue2-stereochimie-qcm-02',
      enonce: 'Concernant la chiralité et les énantiomères, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une molécule chirale est superposable à son image dans un miroir.', vraie: false, justification: 'Faux : c’est justement l’inverse qui définit la chiralité.' },
        { lettre: 'B', texte: 'Deux énantiomères ont le même point de fusion.', vraie: true, justification: 'Exact : leurs propriétés physiques sont identiques, hormis le pouvoir rotatoire.' },
        { lettre: 'C', texte: 'Un mélange racémique dévie fortement la lumière polarisée.', vraie: false, justification: 'Faux : un mélange racémique, à proportions égales des deux énantiomères, n’a aucun pouvoir rotatoire net.' },
        { lettre: 'D', texte: 'Une molécule méso peut posséder des carbones asymétriques sans être chirale.', vraie: true, justification: 'Exact, grâce à son plan de symétrie interne.' },
        { lettre: 'E', texte: 'Deux énantiomères peuvent avoir des activités biologiques différentes.', vraie: true, justification: 'Exact, en raison de la chiralité de leurs cibles biologiques.' },
      ],
      correction: 'Réponses exactes : B, D et E. Le mélange racémique et la molécule méso sont deux pièges classiques.',
      difficulte: 2,
    },
    {
      id: 'ue2-stereochimie-qcm-03',
      enonce: 'Concernant les règles de Cahn-Ingold-Prelog, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La priorité d’un substituant dépend du numéro atomique de l’atome qui lui est directement lié au centre stéréogène.', vraie: true, justification: 'Exact, en première approche.' },
        { lettre: 'B', texte: 'Le substituant de plus haute priorité doit être placé à l’arrière avant de lire le sens de rotation.', vraie: false, justification: 'Faux : c’est le substituant de plus basse priorité qui doit être placé à l’arrière.' },
        { lettre: 'C', texte: 'Un sens horaire des priorités décroissantes correspond à la configuration R.', vraie: true, justification: 'Exact, lorsque le groupe de plus basse priorité est à l’arrière.' },
        { lettre: 'D', texte: 'Si le groupe de plus basse priorité est orienté vers l’observateur, le sens de rotation lu doit être inversé.', vraie: true, justification: 'Exact, c’est un piège classique en QCM.' },
        { lettre: 'E', texte: 'Les règles CIP s’appliquent uniquement aux sucres.', vraie: false, justification: 'Faux : elles s’appliquent de façon universelle à tout centre stéréogène.' },
      ],
      correction: 'Réponses exactes : A, C et D. Toujours vérifier l’orientation du substituant de plus basse priorité avant de conclure.',
      difficulte: 3,
    },
    {
      id: 'ue2-stereochimie-qcm-04',
      enonce: 'Concernant les séries D et L et les diastéréoisomères, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La série D ou L se détermine par comparaison au glycéraldéhyde de référence.', vraie: true, justification: 'Exact : l’appartenance à la série D ou L se définit par comparaison de la configuration du carbone de référence avec celle du D- ou du L-glycéraldéhyde.' },
        { lettre: 'B', texte: 'Appartenir à la série L implique nécessairement une déviation lévogyre de la lumière polarisée.', vraie: false, justification: 'Faux : la série D/L et le signe dextrogyre/lévogyre sont deux classifications indépendantes.' },
        { lettre: 'C', texte: 'Deux diastéréoisomères sont images l’un de l’autre dans un miroir.', vraie: false, justification: 'Faux : c’est la définition des énantiomères, pas des diastéréoisomères.' },
        { lettre: 'D', texte: 'Deux diastéréoisomères peuvent avoir des points de fusion différents.', vraie: true, justification: 'Exact, à la différence des énantiomères.' },
        { lettre: 'E', texte: 'Une molécule à deux carbones asymétriques peut donner au maximum quatre stéréoisomères.', vraie: true, justification: 'Exact, soit 2^2 = 4 stéréoisomères, formant deux couples d’énantiomères.' },
      ],
      correction: 'Réponses exactes : A, D et E. Bien distinguer les trois classifications indépendantes D/L, R/S et pouvoir rotatoire.',
      difficulte: 3,
    },
    {
      id: 'ue2-stereochimie-qcm-05',
      enonce: 'Concernant les conformations, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les conformères s’interconvertissent par simple rotation autour d’une liaison simple.', vraie: true, justification: 'Exact, sans rupture de liaison.' },
        { lettre: 'B', texte: 'La conformation éclipsée est plus stable que la conformation décalée.', vraie: false, justification: 'Faux : c’est l’inverse, la conformation décalée est plus stable.' },
        { lettre: 'C', texte: 'La stéréoisomérie de conformation nécessite de rompre une liaison covalente pour interconvertir les formes.', vraie: false, justification: 'Faux : c’est la stéréoisomérie de configuration qui nécessite la rupture d’une liaison, pas la conformation.' },
        { lettre: 'D', texte: 'Les conformations décalée et éclipsée résultent d’une rotation autour d’une liaison C-C simple.', vraie: true, justification: 'Exact : la libre rotation autour d’une liaison C-C simple engendre les conformations décalée et éclipsée, positions remarquables parmi une infinité de conformères possibles.' },
        { lettre: 'E', texte: 'La conformation la plus stable minimise les répulsions stériques entre substituants.', vraie: true, justification: 'Exact, ce qui explique la stabilité relative de la forme décalée.' },
      ],
      correction: 'Réponses exactes : A, D et E. Bien distinguer stéréoisomérie de configuration et de conformation.',
      difficulte: 2,
    },
    {
      id: 'ue2-stereochimie-qcm-06',
      enonce: 'Concernant l’importance pharmacologique de la stéréochimie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les récepteurs biologiques sont toujours achiraux.', vraie: false, justification: 'Faux : la plupart des récepteurs biologiques sont chiraux, ce qui justifie la sélectivité énantiomérique.' },
        { lettre: 'B', texte: 'Un médicament chiral peut être commercialisé sous forme d’un seul énantiomère actif.', vraie: true, justification: 'Exact, c’est le principe des médicaments énantiopurs.' },
        { lettre: 'C', texte: 'Deux énantiomères d’une même molécule sont toujours métabolisés de façon identique.', vraie: false, justification: 'Faux : leur métabolisation peut différer, du fait de la chiralité des enzymes impliquées.' },
        { lettre: 'D', texte: 'La chiralité peut expliquer que deux énantiomères aient des odeurs différentes.', vraie: true, justification: 'Exact, en raison de la chiralité des récepteurs olfactifs.' },
        { lettre: 'E', texte: 'Un mélange racémique de médicament contient uniquement l’énantiomère actif.', vraie: false, justification: 'Faux : un mélange racémique contient les deux énantiomères en proportions égales.' },
      ],
      correction: 'Réponses exactes : B et D. La chiralité des cibles biologiques explique la différence d’activité entre énantiomères.',
      difficulte: 2,
    },
  ],
};
