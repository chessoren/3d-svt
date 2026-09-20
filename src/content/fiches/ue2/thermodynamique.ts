import type { Fiche } from '../../types';

export const ficheThermodynamique: Fiche = {
  id: 'ue2-thermodynamique',
  ue: 'ue2',
  titre: 'Thermodynamique chimique',
  sousTitre: 'Enthalpie, entropie, enthalpie libre et spontanéité des réactions dans le vivant',
  chapitre: 'Chimie générale',
  ordre: 3,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'enthalpie',
    'entropie',
    'enthalpie libre',
    'loi de Hess',
    'spontanéité',
    'couplage énergétique',
    'ATP',
    'premier et second principe',
  ],
  objectifs: [
    'Définir les fonctions d’état enthalpie, entropie et enthalpie libre.',
    'Énoncer le premier et le second principe de la thermodynamique.',
    'Appliquer la loi de Hess au calcul d’une enthalpie de réaction.',
    'Prévoir le sens spontané d’une réaction à partir du signe de la variation d’enthalpie libre.',
    'Expliquer le principe du couplage énergétique par l’ATP dans le métabolisme.',
  ],
  sections: [
    {
      id: 'systeme-fonctions-etat',
      titre: 'Système thermodynamique et fonctions d’état',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La thermodynamique chimique étudie les échanges d’énergie, sous forme de chaleur et de travail, accompagnant les transformations physiques et chimiques. Un système est dit fermé lorsqu’il peut échanger de l’énergie mais pas de matière avec le milieu extérieur, ouvert lorsqu’il échange les deux, et isolé lorsqu’il n’échange ni l’une ni l’autre.",
        },
        {
          type: 'definition',
          terme: 'Fonction d’état',
          definition:
            "Grandeur dont la variation entre un état initial et un état final ne dépend que de ces deux états, et non du chemin suivi. L’enthalpie, l’entropie et l’enthalpie libre sont des fonctions d’état, ce qui permet de calculer leur variation sans connaître le détail du mécanisme réactionnel.",
        },
        {
          type: 'tableau',
          titre: 'Grandeurs thermodynamiques fondamentales',
          colonnes: ['Grandeur', 'Symbole', 'Signification physique'],
          lignes: [
            ['Énergie interne', 'U', 'Énergie totale contenue dans le système'],
            ['Enthalpie', 'H', 'Chaleur échangée à pression constante'],
            ['Entropie', 'S', 'Mesure du désordre, ou du nombre de configurations microscopiques accessibles'],
            ['Enthalpie libre (énergie de Gibbs)', 'G', 'Grandeur qui prédit le sens spontané d’une transformation à température et pression constantes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Convention de signe',
          texte:
            "Toute grandeur d’échange (chaleur Q, travail W, variation d’enthalpie ΔH) est comptée positivement lorsqu’elle est reçue par le système, et négativement lorsqu’elle est cédée par le système au milieu extérieur.",
        },
      ],
    },
    {
      id: 'premier-second-principe',
      titre: 'Premier et second principes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le premier principe énonce la conservation de l’énergie : l’énergie interne d’un système isolé est constante. Pour un système fermé, la variation d’énergie interne est égale à la somme algébrique de la chaleur et du travail échangés avec le milieu extérieur.",
        },
        {
          type: 'formule',
          expression: 'ΔU = Q + W',
          legende:
            "Premier principe de la thermodynamique appliqué à un système fermé : la variation d’énergie interne est la somme de la chaleur Q et du travail W échangés.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le second principe introduit l’entropie et affirme que, dans un système isolé, l’entropie ne peut qu’augmenter ou rester constante au cours d’une transformation spontanée : elle traduit l’irréversibilité des phénomènes naturels et l’évolution vers un désordre croissant.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'L’entropie de l’univers, pas seulement du système',
          texte:
            "Le second principe concerne l’entropie de l’univers, c’est-à-dire la somme de l’entropie du système et de celle du milieu extérieur. L’entropie d’un système ouvert ou fermé peut localement diminuer (par exemple lors du repliement d’une protéine), à condition que l’entropie du milieu extérieur augmente davantage.",
        },
        {
          type: 'definition',
          terme: 'Réaction exothermique et endothermique',
          definition:
            "Une réaction exothermique libère de la chaleur vers le milieu extérieur (ΔH négatif) ; une réaction endothermique en absorbe (ΔH positif). Ce critère seul ne permet cependant pas de conclure sur le caractère spontané ou non de la réaction.",
        },
      ],
    },
    {
      id: 'loi-de-hess',
      titre: 'Loi de Hess et enthalpies de réaction',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’enthalpie étant une fonction d’état, sa variation lors d’une réaction chimique ne dépend que de l’état initial (réactifs) et de l’état final (produits), et non du chemin réactionnel emprunté. C’est le fondement de la loi de Hess.",
        },
        {
          type: 'definition',
          terme: 'Loi de Hess',
          definition:
            "L’enthalpie d’une réaction globale est égale à la somme algébrique des enthalpies des réactions intermédiaires dont la somme, en tenant compte des coefficients stœchiométriques, redonne la réaction globale. Elle permet de calculer une enthalpie de réaction inaccessible expérimentalement à partir d’un cycle de réactions connues.",
        },
        {
          type: 'etapes',
          titre: 'Calculer une enthalpie de réaction par les enthalpies standard de formation',
          etapes: [
            {
              titre: 'Écrire l’équation bilan équilibrée',
              detail: 'Vérifier que tous les coefficients stœchiométriques sont corrects avant tout calcul.',
            },
            {
              titre: 'Sommer les enthalpies de formation des produits',
              detail: 'Pondérer chaque enthalpie standard de formation par son coefficient stœchiométrique dans l’équation.',
            },
            {
              titre: 'Soustraire la somme des enthalpies de formation des réactifs',
              detail:
                'ΔrH° = Σ (coefficients × ΔfH° des produits) − Σ (coefficients × ΔfH° des réactifs). Les corps simples pris dans leur état standard de référence ont une enthalpie de formation nulle.',
            },
          ],
        },
        {
          type: 'formule',
          expression: 'ΔrH° = Σ ΔfH°(produits) − Σ ΔfH°(réactifs)',
          legende: 'Calcul de l’enthalpie standard de réaction à partir des enthalpies standard de formation.',
          unites: 'kJ/mol',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Point clé pour les cycles thermodynamiques',
          texte:
            "Dans un cycle de Hess, la somme des variations d’enthalpie le long d’un chemin détourné, ramenant au point de départ, est nulle. Cette propriété permet de retrouver une enthalpie inconnue par simple différence entre les chemins direct et indirect.",
        },
      ],
    },
    {
      id: 'enthalpie-libre-spontaneite',
      titre: 'Enthalpie libre et spontanéité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’enthalpie libre de Gibbs combine enthalpie et entropie pour donner un critère unique de spontanéité d’une transformation à température et pression constantes, conditions les plus fréquentes en biologie.",
        },
        {
          type: 'formule',
          expression: 'ΔG = ΔH − T·ΔS',
          legende:
            'Relation de Gibbs-Helmholtz. T est la température absolue, exprimée en kelvins.',
        },
        {
          type: 'tableau',
          titre: 'Signe de ΔG et spontanéité',
          colonnes: ['Signe de ΔG', 'Qualificatif', 'Sens de la réaction'],
          lignes: [
            ['ΔG < 0', 'Exergonique', 'Réaction spontanée dans le sens direct'],
            ['ΔG = 0', 'À l’équilibre', 'Aucune évolution nette : système à l’équilibre'],
            ['ΔG > 0', 'Endergonique', 'Réaction non spontanée dans le sens direct ; elle nécessite un apport d’énergie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Spontané ne signifie pas rapide',
          texte:
            "Le signe de ΔG renseigne uniquement sur la faisabilité thermodynamique d’une réaction, jamais sur sa vitesse. Une réaction peut être thermodynamiquement très favorable (ΔG très négatif) mais cinétiquement extrêmement lente en l’absence de catalyseur : c’est le cas de l’oxydation du glucose en l’absence d’enzymes.",
        },
        {
          type: 'definition',
          terme: 'Enthalpie libre standard de réaction ΔrG°',
          definition:
            "Variation d’enthalpie libre mesurée lorsque réactifs et produits sont dans leurs conditions standard (concentration 1 mol/L, pression 1 bar). Elle est reliée à la constante d’équilibre K de la réaction par ΔrG° = −RT·lnK.",
        },
      ],
    },
    {
      id: 'couplage-energetique',
      titre: 'Couplage énergétique dans le vivant',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "De nombreuses réactions du métabolisme sont endergoniques (biosynthèses, transports actifs, contraction musculaire) et ne peuvent se dérouler spontanément. La cellule les rend possibles en les couplant à une réaction fortement exergonique, le plus souvent l’hydrolyse de l’ATP en ADP et phosphate inorganique.",
        },
        {
          type: 'definition',
          terme: 'Couplage énergétique',
          definition:
            "Association de deux réactions, l’une exergonique et l’autre endergonique, partageant un intermédiaire commun, de telle sorte que la variation d’enthalpie libre globale du couple soit négative et que l’ensemble devienne spontané.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Hydrolyse de l’ATP',
          texte:
            "L’hydrolyse de l’ATP en ADP et phosphate inorganique est fortement exergonique dans les conditions intracellulaires, avec une enthalpie libre standard apparente de l’ordre de −30 kJ/mol. Cette valeur, bien que citée comme repère, varie selon les concentrations réelles de réactifs et de produits dans la cellule.",
        },
        {
          type: 'liste',
          items: [
            'L’ATP joue le rôle d’intermédiaire énergétique universel entre les réactions cataboliques, exergoniques, et les réactions anaboliques, endergoniques.',
            'Le couplage peut se faire par transfert direct d’un groupement phosphate (phosphorylation) sur un intermédiaire de la voie endergonique.',
            'La respiration cellulaire régénère en permanence l’ATP consommé, assurant l’homéostasie énergétique de la cellule.',
          ],
        },
      ],
    },
  ],
  pointsCles: [
    'L’enthalpie, l’entropie et l’enthalpie libre sont des fonctions d’état : leur variation ne dépend que des états initial et final.',
    'Le premier principe traduit la conservation de l’énergie : ΔU = Q + W.',
    'Le second principe impose que l’entropie de l’univers augmente au cours de toute transformation spontanée.',
    'La loi de Hess permet de calculer une enthalpie de réaction par sommation d’enthalpies intermédiaires connues.',
    'Le signe de ΔG (relation ΔG = ΔH − T·ΔS) détermine le caractère spontané d’une réaction à température et pression constantes.',
    'Une réaction spontanée sur le plan thermodynamique peut être extrêmement lente : spontanéité et vitesse sont deux notions indépendantes.',
    'Le couplage énergétique via l’ATP permet à la cellule de réaliser des réactions endergoniques indispensables au métabolisme.',
  ],
  erreursFrequentes: [
    'Confondre le signe de ΔH (aspect thermique) et le signe de ΔG (aspect spontanéité) : une réaction exothermique n’est pas automatiquement spontanée.',
    'Oublier le terme entropique T·ΔS et juger la spontanéité d’une réaction uniquement sur le signe de ΔH.',
    'Appliquer le second principe à l’entropie du seul système, sans considérer celle du milieu extérieur.',
    'Croire qu’une réaction thermodynamiquement favorable est nécessairement rapide.',
    'Inverser le sens de soustraction dans la loi de Hess (produits moins réactifs, et non l’inverse).',
  ],
  mnemotechniques: [
    {
      moyen: '« Gibbs Habite Sous Tension »',
      explication:
        'Rappelle la relation ΔG = ΔH − T·ΔS : Gibbs, Habite (H), Sous (moins), Tension (T fois S).',
    },
    {
      moyen: '« PEP » pour le signe de ΔG',
      explication:
        'Positif = Endergonique = Pas spontané ; négatif = Exergonique = spontané. Retenir que le signe négatif est toujours celui de la réaction favorable.',
    },
    {
      moyen: 'Hess comme un GPS',
      explication:
        'Peu importe le chemin choisi entre deux points (réactifs et produits), la variation d’enthalpie totale est la même : seule compte la destination finale.',
    },
  ],
  sources: [
    'Atkins, Chimie physique',
    'Lehninger, Principes de biochimie',
    'Chimie générale, collection PASS/LAS, ouvrage de référence UE2',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-thermodynamique-fc-01', recto: 'Qu’est-ce qu’une fonction d’état ?', verso: 'Une grandeur dont la variation ne dépend que des états initial et final du système, pas du chemin suivi.', type: 'definition', tags: ['fonction d’état'] },
    { id: 'ue2-thermodynamique-fc-02', recto: 'Énoncer le premier principe de la thermodynamique pour un système fermé.', verso: 'ΔU = Q + W : la variation d’énergie interne est la somme de la chaleur et du travail échangés.', type: 'formule', tags: ['premier principe'] },
    { id: 'ue2-thermodynamique-fc-03', recto: 'Que dit le second principe de la thermodynamique ?', verso: 'L’entropie de l’univers ne peut qu’augmenter ou rester constante au cours d’une transformation spontanée.', type: 'definition', tags: ['second principe'] },
    { id: 'ue2-thermodynamique-fc-04', recto: 'Énoncer la loi de Hess.', verso: 'L’enthalpie d’une réaction ne dépend que des états initial et final, et peut donc être calculée par sommation d’enthalpies de réactions intermédiaires.', type: 'definition', tags: ['loi de Hess'] },
    { id: 'ue2-thermodynamique-fc-05', recto: 'Donner la relation de Gibbs-Helmholtz.', verso: 'ΔG = ΔH − T·ΔS.', type: 'formule', tags: ['enthalpie libre'] },
    { id: 'ue2-thermodynamique-fc-06', recto: 'Quel est le signe de ΔG pour une réaction spontanée ?', verso: 'Négatif : la réaction est dite exergonique.', type: 'mecanisme', tags: ['spontanéité'] },
    { id: 'ue2-thermodynamique-fc-07', recto: 'Une réaction thermodynamiquement spontanée est-elle nécessairement rapide ?', verso: 'Non : la spontanéité (thermodynamique) et la vitesse (cinétique) sont deux notions indépendantes.', type: 'mecanisme', tags: ['spontanéité', 'cinétique'] },
    { id: 'ue2-thermodynamique-fc-08', recto: 'Comment est reliée l’enthalpie libre standard ΔrG° à la constante d’équilibre K ?', verso: 'ΔrG° = −RT·lnK.', type: 'formule', tags: ['équilibre'] },
    { id: 'ue2-thermodynamique-fc-09', recto: 'Qu’est-ce qu’un couplage énergétique ?', verso: 'L’association d’une réaction exergonique et d’une réaction endergonique, partageant un intermédiaire commun, rendant l’ensemble spontané.', type: 'mecanisme', tags: ['couplage énergétique'] },
    { id: 'ue2-thermodynamique-fc-10', recto: 'Quelle molécule sert d’intermédiaire énergétique universel dans le métabolisme ?', verso: 'L’ATP (adénosine triphosphate).', type: 'definition', tags: ['ATP'] },
    { id: 'ue2-thermodynamique-fc-11', recto: 'Une réaction exothermique est-elle toujours spontanée ?', verso: 'Non : il faut aussi tenir compte du terme entropique T·ΔS dans le calcul de ΔG.', type: 'mecanisme', tags: ['exothermie'] },
    { id: 'ue2-thermodynamique-fc-12', recto: 'Quelle est l’enthalpie de formation d’un corps simple pris dans son état standard de référence ?', verso: 'Elle est nulle par convention.', type: 'chiffre', tags: ['enthalpie de formation'] },
  ],
  qcm: [
    {
      id: 'ue2-thermodynamique-qcm-01',
      enonce: 'Concernant les fonctions d’état et le premier principe, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’enthalpie est une fonction d’état.', vraie: true, justification: 'Exact : sa variation ne dépend que des états initial et final.' },
        { lettre: 'B', texte: 'La chaleur Q est une fonction d’état.', vraie: false, justification: 'Faux : Q et W dépendent du chemin suivi, contrairement à U, H, S et G.' },
        { lettre: 'C', texte: 'Le premier principe traduit la conservation de l’énergie.', vraie: true, justification: 'Exact : l’énergie interne d’un système isolé reste constante.' },
        { lettre: 'D', texte: 'Un système isolé peut échanger de la matière avec l’extérieur.', vraie: false, justification: 'Faux : un système isolé n’échange ni matière ni énergie.' },
        { lettre: 'E', texte: 'Un système fermé peut échanger de l’énergie mais pas de matière.', vraie: true, justification: 'Exact, par opposition au système ouvert qui échange les deux.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer fonctions d’état (U, H, S, G) et grandeurs d’échange (Q, W).',
      difficulte: 2,
    },
    {
      id: 'ue2-thermodynamique-qcm-02',
      enonce: 'Concernant le second principe et l’entropie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’entropie d’un système isolé peut diminuer spontanément.', vraie: false, justification: 'Faux : elle ne peut qu’augmenter ou rester constante dans un système isolé.' },
        { lettre: 'B', texte: 'L’entropie du système seul, hors extérieur, peut diminuer lors d’une transformation spontanée.', vraie: true, justification: 'Exact, à condition que l’entropie du milieu extérieur augmente davantage, comme lors du repliement d’une protéine.' },
        { lettre: 'C', texte: 'L’entropie mesure le degré de désordre du système.', vraie: true, justification: 'Exact, ou de façon plus rigoureuse, le nombre de configurations microscopiques accessibles.' },
        { lettre: 'D', texte: 'Le second principe s’applique uniquement à l’entropie du système chimique étudié.', vraie: false, justification: 'Faux : il concerne l’entropie de l’univers, système plus milieu extérieur.' },
        { lettre: 'E', texte: 'Le second principe traduit l’irréversibilité des phénomènes naturels.', vraie: true, justification: 'Exact : selon le second principe, l’entropie de l’univers augmente au cours de toute transformation réelle, ce qui traduit son caractère irréversible.' },
      ],
      correction: 'Réponses exactes : B, C et E. Le point B est un piège classique bien illustré par le repliement protéique.',
      difficulte: 3,
    },
    {
      id: 'ue2-thermodynamique-qcm-03',
      enonce: 'Concernant la loi de Hess, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle repose sur le caractère de fonction d’état de l’enthalpie.', vraie: true, justification: 'Exact : c’est la base même de la loi de Hess.' },
        { lettre: 'B', texte: 'Elle permet de calculer une enthalpie de réaction non mesurable directement.', vraie: true, justification: 'Exact, par sommation d’enthalpies de réactions intermédiaires connues.' },
        { lettre: 'C', texte: 'L’enthalpie standard de formation d’un corps simple de référence vaut toujours 1 kJ/mol.', vraie: false, justification: 'Faux : elle est nulle par convention, et non égale à 1 kJ/mol.' },
        { lettre: 'D', texte: 'Le calcul de ΔrH° soustrait la somme des enthalpies de formation des produits à celle des réactifs.', vraie: false, justification: 'Faux : c’est l’inverse, ΔrH° = Σ ΔfH°(produits) − Σ ΔfH°(réactifs).' },
        { lettre: 'E', texte: 'Dans un cycle thermodynamique fermé, la somme des variations d’enthalpie est nulle.', vraie: true, justification: 'Exact : c’est une conséquence directe du caractère de fonction d’état.' },
      ],
      correction: 'Réponses exactes : A, B et E. Bien mémoriser le sens correct de la soustraction produits moins réactifs.',
      difficulte: 2,
    },
    {
      id: 'ue2-thermodynamique-qcm-04',
      enonce: 'Concernant l’enthalpie libre et la spontanéité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une réaction exergonique a un ΔG négatif.', vraie: true, justification: 'Exact, par définition.' },
        { lettre: 'B', texte: 'À l’équilibre, ΔG est différent de zéro.', vraie: false, justification: 'Faux : à l’équilibre, ΔG est nul.' },
        { lettre: 'C', texte: 'Une réaction endergonique peut devenir favorable si elle est couplée à une réaction fortement exergonique.', vraie: true, justification: 'Exact : c’est le principe du couplage énergétique.' },
        { lettre: 'D', texte: 'Le signe de ΔG renseigne sur la vitesse de la réaction.', vraie: false, justification: 'Faux : ΔG renseigne uniquement sur la faisabilité thermodynamique, pas sur la cinétique.' },
        { lettre: 'E', texte: 'ΔrG° est relié à la constante d’équilibre K par une relation logarithmique.', vraie: true, justification: 'Exact : ΔrG° = −RT·lnK.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir l’indépendance entre spontanéité thermodynamique et vitesse de réaction.',
      difficulte: 2,
    },
    {
      id: 'ue2-thermodynamique-qcm-05',
      enonce: 'Concernant le couplage énergétique et l’ATP, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’hydrolyse de l’ATP en ADP et phosphate inorganique est exergonique.', vraie: true, justification: 'Exact : elle libère de l’énergie utilisable par la cellule.' },
        { lettre: 'B', texte: 'Le couplage énergétique associe une réaction exergonique et une réaction endergonique.', vraie: true, justification: 'Exact, via un intermédiaire commun.' },
        { lettre: 'C', texte: 'L’ATP est uniquement consommé, jamais régénéré, au cours du métabolisme.', vraie: false, justification: 'Faux : l’ATP est en permanence régénéré, notamment par la respiration cellulaire.' },
        { lettre: 'D', texte: 'Les réactions de biosynthèse sont généralement endergoniques.', vraie: true, justification: 'Exact : elles nécessitent un apport d’énergie, souvent fourni par l’hydrolyse de l’ATP.' },
        { lettre: 'E', texte: 'Le couplage énergétique rend le ΔG global de l’ensemble des deux réactions positif.', vraie: false, justification: 'Faux : le couplage vise au contraire à rendre le ΔG global négatif, donc l’ensemble spontané.' },
      ],
      correction: 'Réponses exactes : A, B et D. Le couplage énergétique rend possible des réactions par ailleurs non spontanées.',
      difficulte: 2,
    },
    {
      id: 'ue2-thermodynamique-qcm-06',
      enonce: 'Concernant les définitions générales de la thermodynamique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une réaction endothermique a un ΔH positif.', vraie: true, justification: 'Exact : elle absorbe de la chaleur depuis le milieu extérieur.' },
        { lettre: 'B', texte: 'Un système ouvert échange de la matière et de l’énergie avec l’extérieur.', vraie: true, justification: 'Exact, à la différence du système fermé qui n’échange que de l’énergie.' },
        { lettre: 'C', texte: 'L’enthalpie représente la chaleur échangée à volume constant.', vraie: false, justification: 'Faux : elle représente la chaleur échangée à pression constante, condition la plus fréquente en biologie.' },
        { lettre: 'D', texte: 'La convention de signe compte positivement une énergie reçue par le système.', vraie: true, justification: 'Exact : c’est la convention thermodynamique standard.' },
        { lettre: 'E', texte: 'Une transformation exothermique cède de la chaleur au milieu extérieur.', vraie: true, justification: 'Exact, ce qui correspond à un ΔH négatif.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir que l’enthalpie est définie à pression constante, non à volume constant.',
      difficulte: 2,
    },
  ],
};
