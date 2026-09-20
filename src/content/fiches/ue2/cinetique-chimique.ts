import type { Fiche } from '../../types';

export const ficheCinetiqueChimique: Fiche = {
  id: 'ue2-cinetique-chimique',
  ue: 'ue2',
  titre: 'Cinétique chimique',
  sousTitre: 'Vitesse de réaction, ordre, énergie d’activation, loi d’Arrhénius et catalyse',
  chapitre: 'Chimie générale',
  ordre: 4,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'vitesse de réaction',
    'ordre de réaction',
    'énergie d’activation',
    'loi d’Arrhénius',
    'catalyse',
    'complexe activé',
    'catalyseur',
    'enzyme',
  ],
  objectifs: [
    'Définir la vitesse d’une réaction chimique et les facteurs qui l’influencent.',
    'Distinguer ordre partiel, ordre global et constante de vitesse d’une réaction.',
    'Décrire le profil énergétique d’une réaction et la notion d’énergie d’activation.',
    'Utiliser la loi d’Arrhénius pour relier constante de vitesse et température.',
    'Expliquer le mode d’action général d’un catalyseur, en particulier enzymatique.',
  ],
  sections: [
    {
      id: 'vitesse-reaction',
      titre: 'Vitesse d’une réaction chimique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La cinétique chimique étudie la vitesse à laquelle une réaction se déroule, c’est-à-dire la rapidité avec laquelle les réactifs disparaissent et les produits apparaissent, indépendamment de la question de savoir si la réaction est thermodynamiquement favorable.",
        },
        {
          type: 'definition',
          terme: 'Vitesse de réaction',
          definition:
            "Variation de la concentration d’un réactif ou d’un produit par unité de temps, rapportée aux coefficients stœchiométriques pour obtenir une vitesse unique indépendante de l’espèce suivie. Elle s’exprime en mol/L/s (ou en unités compatibles).",
        },
        {
          type: 'tableau',
          titre: 'Principaux facteurs influençant la vitesse d’une réaction',
          colonnes: ['Facteur', 'Effet sur la vitesse'],
          lignes: [
            ['Concentration des réactifs', 'Augmente généralement la vitesse quand elle augmente'],
            ['Température', 'Augmente la vitesse quand elle augmente'],
            ['Présence d’un catalyseur', 'Augmente la vitesse sans modifier l’état d’équilibre'],
            ['Surface de contact (réactions hétérogènes)', 'Augmente la vitesse quand la surface de contact augmente'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Vitesse et avancement de la réaction',
          texte:
            "La vitesse d’une réaction n’est en général pas constante au cours du temps : elle est maximale en début de réaction, lorsque les concentrations en réactifs sont les plus élevées, puis diminue progressivement à mesure que les réactifs sont consommés.",
        },
      ],
    },
    {
      id: 'ordre-reaction',
      titre: 'Ordre de réaction et loi de vitesse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La loi de vitesse relie expérimentalement la vitesse d’une réaction aux concentrations des réactifs, à l’aide d’une constante de vitesse k et d’exposants appelés ordres partiels, déterminés expérimentalement et non nécessairement égaux aux coefficients stœchiométriques.",
        },
        {
          type: 'formule',
          expression: 'v = k · [A]^a · [B]^b',
          legende:
            "Loi de vitesse d’une réaction A + B → produits. k est la constante de vitesse, a et b sont les ordres partiels par rapport à A et B, déterminés expérimentalement.",
        },
        {
          type: 'definition',
          terme: 'Ordre global de la réaction',
          definition:
            "Somme des ordres partiels de tous les réactifs intervenant dans la loi de vitesse (a + b dans l’exemple ci-dessus). Il ne doit pas être confondu avec la molécularité, qui décrit le nombre d’entités chimiques réagissant dans un acte élémentaire.",
        },
        {
          type: 'tableau',
          titre: 'Cas particuliers d’ordre de réaction',
          colonnes: ['Ordre', 'Loi de vitesse', 'Caractéristique'],
          lignes: [
            ['0', 'v = k', 'Vitesse indépendante de la concentration du réactif'],
            ['1', 'v = k·[A]', 'Vitesse proportionnelle à la concentration'],
            ['2', 'v = k·[A]^2 ou v = k·[A]·[B]', 'Vitesse proportionnelle au carré d’une concentration ou au produit de deux concentrations'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Comment déterminer un ordre de réaction ?',
          texte:
            "L’ordre d’une réaction ne se déduit jamais de la seule lecture de l’équation bilan : il doit être déterminé expérimentalement, par exemple en suivant l’évolution de la vitesse initiale lorsque la concentration d’un réactif est modifiée, les autres étant maintenues constantes.",
        },
      ],
    },
    {
      id: 'energie-activation',
      titre: 'Profil énergétique et énergie d’activation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Pour qu’une réaction ait lieu, les molécules de réactifs doivent entrer en collision avec une orientation favorable et une énergie suffisante pour franchir une barrière énergétique appelée énergie d’activation, avant d’atteindre l’état des produits.",
        },
        {
          type: 'definition',
          terme: 'Énergie d’activation (Ea)',
          definition:
            "Énergie minimale que doivent posséder les réactifs pour former le complexe activé, état de transition instable et de plus haute énergie situé entre réactifs et produits sur le chemin réactionnel. Plus Ea est élevée, plus la réaction est lente à température donnée.",
        },
        {
          type: 'definition',
          terme: 'Complexe activé (état de transition)',
          definition:
            "État transitoire, de durée de vie extrêmement brève, situé au sommet de la barrière énergétique, dans lequel les liaisons des réactifs sont partiellement rompues et celles des produits partiellement formées. Il ne doit pas être confondu avec un intermédiaire réactionnel, qui correspond à un minimum local d’énergie et possède une durée de vie mesurable.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ea n’a aucun lien direct avec ΔG ou ΔH',
          texte:
            "L’énergie d’activation est une grandeur purement cinétique. Elle est indépendante du caractère exergonique ou endergonique de la réaction : une réaction très favorable thermodynamiquement (ΔG très négatif) peut avoir une énergie d’activation élevée, donc être très lente en l’absence de catalyseur.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Règle empirique de la température',
          texte:
            "En première approximation, et pour de nombreuses réactions biologiques, une augmentation de température de 10 °C multiplie la vitesse de réaction par un facteur voisin de 2 à 3, ce qui explique en partie la nécessité d’une thermorégulation étroite chez l’être humain.",
        },
      ],
    },
    {
      id: 'loi-arrhenius',
      titre: 'La loi d’Arrhénius',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La loi d’Arrhénius décrit quantitativement la dépendance de la constante de vitesse k vis-à-vis de la température absolue T et de l’énergie d’activation Ea.",
        },
        {
          type: 'formule',
          expression: 'k = A · exp(−Ea / RT)',
          legende:
            "A est le facteur de fréquence (ou facteur pré-exponentiel), R la constante des gaz parfaits et T la température absolue en kelvins. Plus Ea est grande, plus k est petit à température donnée.",
        },
        {
          type: 'liste',
          items: [
            'Une augmentation de température T augmente la constante de vitesse k, donc accélère la réaction.',
            'Une augmentation de l’énergie d’activation Ea diminue k, donc ralentit la réaction.',
            'Le facteur A rend compte, entre autres, de la fréquence des collisions et de leur orientation favorable.',
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le sens des variations',
          texte:
            "La loi d’Arrhénius contient un exponentiel négatif en Ea/T : toute augmentation de température rapproche l’exposant de zéro et fait donc croître k ; toute augmentation d’énergie d’activation éloigne l’exposant de zéro et fait donc décroître k.",
        },
      ],
    },
    {
      id: 'catalyse',
      titre: 'Catalyse et catalyse enzymatique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un catalyseur est une substance qui accélère une réaction chimique sans être consommée au cours de celle-ci et sans modifier l’état d’équilibre final de la réaction. Il agit en offrant un chemin réactionnel alternatif, de plus basse énergie d’activation.",
        },
        {
          type: 'definition',
          terme: 'Catalyseur',
          definition:
            "Espèce chimique qui abaisse l’énergie d’activation d’une réaction, augmentant ainsi sa vitesse, sans en modifier la thermodynamique (ΔG et constante d’équilibre inchangés) et sans figurer dans le bilan global de la réaction.",
        },
        {
          type: 'tableau',
          titre: 'Catalyse chimique et catalyse enzymatique',
          colonnes: ['Caractéristique', 'Catalyseur chimique classique', 'Enzyme'],
          lignes: [
            ['Nature', 'Espèce minérale ou organique simple', 'Protéine (le plus souvent)'],
            ['Spécificité', 'Généralement faible', 'Très élevée, souvent pour un substrat unique'],
            ['Sensibilité', 'Peu sensible aux conditions', 'Sensible au pH et à la température (dénaturation)'],
            ['Efficacité', 'Modérée', 'Considérable, accélération pouvant atteindre plusieurs ordres de grandeur'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Les enzymes, catalyseurs biologiques',
          texte:
            "Les enzymes abaissent l’énergie d’activation des réactions du métabolisme en stabilisant l’état de transition au niveau de leur site actif. Sans catalyse enzymatique, la majorité des réactions biochimiques seraient bien trop lentes pour soutenir la vie à la température corporelle.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un catalyseur ne déplace pas l’équilibre',
          texte:
            "Un catalyseur accélère de façon identique la réaction directe et la réaction inverse : il permet d’atteindre plus rapidement l’état d’équilibre, mais ne modifie ni la position de cet équilibre ni la valeur de la constante d’équilibre K.",
        },
      ],
    },
  ],
  pointsCles: [
    'La vitesse de réaction diminue en général au cours du temps, à mesure que les réactifs sont consommés.',
    'L’ordre d’une réaction est déterminé expérimentalement et n’est pas nécessairement égal aux coefficients stœchiométriques.',
    'L’énergie d’activation est la barrière énergétique à franchir pour atteindre le complexe activé, indépendante de la thermodynamique de la réaction.',
    'La loi d’Arrhénius relie k, T et Ea par une fonction exponentielle : k = A·exp(−Ea/RT).',
    'Une augmentation de température accélère une réaction ; une augmentation de l’énergie d’activation la ralentit.',
    'Un catalyseur abaisse l’énergie d’activation sans modifier l’état d’équilibre ni être consommé.',
    'Les enzymes sont des catalyseurs biologiques très spécifiques, sensibles au pH et à la température.',
  ],
  erreursFrequentes: [
    'Déduire l’ordre d’une réaction directement des coefficients stœchiométriques de l’équation bilan.',
    'Confondre complexe activé (état de transition, aucune durée de vie mesurable) et intermédiaire réactionnel (minimum local d’énergie).',
    'Penser qu’une réaction très exergonique est nécessairement rapide, en confondant spontanéité thermodynamique et cinétique.',
    'Croire qu’un catalyseur déplace la position de l’équilibre chimique.',
    'Oublier que le catalyseur accélère à la fois la réaction directe et la réaction inverse.',
  ],
  mnemotechniques: [
    {
      moyen: '« Plus c’est chaud, plus ça va vite »',
      explication:
        'Rappelle simplement le sens de variation de la loi d’Arrhénius : la température et la vitesse de réaction évoluent dans le même sens.',
    },
    {
      moyen: '« Le catalyseur creuse un tunnel, pas une nouvelle destination »',
      explication:
        'Le catalyseur ouvre un chemin réactionnel de plus basse énergie d’activation (le tunnel), mais l’état d’équilibre final (la destination) reste inchangé.',
    },
  ],
  sources: [
    'Atkins, Chimie physique',
    'Chimie générale, collection PASS/LAS, ouvrage de référence UE2',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-cinetique-chimique-fc-01', recto: 'Comment se définit la vitesse d’une réaction chimique ?', verso: 'La variation de concentration d’un réactif ou d’un produit par unité de temps, rapportée aux coefficients stœchiométriques.', type: 'definition', tags: ['vitesse'] },
    { id: 'ue2-cinetique-chimique-fc-02', recto: 'La vitesse d’une réaction est-elle constante au cours du temps ?', verso: 'Non, elle diminue en général car elle dépend des concentrations en réactifs, qui décroissent au fur et à mesure.', type: 'mecanisme', tags: ['vitesse'] },
    { id: 'ue2-cinetique-chimique-fc-03', recto: 'L’ordre d’une réaction se déduit-il des coefficients stœchiométriques ?', verso: 'Non, il doit être déterminé expérimentalement.', type: 'mecanisme', tags: ['ordre de réaction'] },
    { id: 'ue2-cinetique-chimique-fc-04', recto: 'Définir l’énergie d’activation.', verso: 'Énergie minimale que doivent posséder les réactifs pour atteindre le complexe activé et former les produits.', type: 'definition', tags: ['énergie d’activation'] },
    { id: 'ue2-cinetique-chimique-fc-05', recto: 'Qu’est-ce que le complexe activé ?', verso: 'État de transition instable, de plus haute énergie sur le chemin réactionnel, de durée de vie extrêmement brève.', type: 'definition', tags: ['complexe activé'] },
    { id: 'ue2-cinetique-chimique-fc-06', recto: 'Donner la loi d’Arrhénius.', verso: 'k = A · exp(−Ea / RT).', type: 'formule', tags: ['Arrhénius'] },
    { id: 'ue2-cinetique-chimique-fc-07', recto: 'Comment varie la constante de vitesse k lorsque la température augmente ?', verso: 'Elle augmente, la réaction est donc accélérée.', type: 'mecanisme', tags: ['Arrhénius'] },
    { id: 'ue2-cinetique-chimique-fc-08', recto: 'Qu’est-ce qu’un catalyseur ?', verso: 'Une espèce qui accélère une réaction en abaissant son énergie d’activation, sans être consommée ni modifier l’équilibre.', type: 'definition', tags: ['catalyse'] },
    { id: 'ue2-cinetique-chimique-fc-09', recto: 'Un catalyseur modifie-t-il la constante d’équilibre K ?', verso: 'Non, il accélère l’atteinte de l’équilibre mais ne modifie ni sa position ni la valeur de K.', type: 'mecanisme', tags: ['catalyse', 'équilibre'] },
    { id: 'ue2-cinetique-chimique-fc-10', recto: 'Qu’est-ce qui distingue une enzyme d’un catalyseur chimique classique ?', verso: 'Une spécificité de substrat très élevée et une sensibilité marquée au pH et à la température.', type: 'classification', tags: ['enzyme'] },
    { id: 'ue2-cinetique-chimique-fc-11', recto: 'Une réaction très exergonique est-elle nécessairement rapide ?', verso: 'Non : elle peut posséder une énergie d’activation élevée et être très lente en l’absence de catalyseur.', type: 'mecanisme', tags: ['énergie d’activation'] },
    { id: 'ue2-cinetique-chimique-fc-12', recto: 'Citer un facteur, hors température et catalyseur, qui augmente la vitesse d’une réaction.', verso: 'L’augmentation de la concentration des réactifs (ou, pour une réaction hétérogène, l’augmentation de la surface de contact).', type: 'classification', tags: ['vitesse'] },
  ],
  qcm: [
    {
      id: 'ue2-cinetique-chimique-qcm-01',
      enonce: 'Concernant la vitesse de réaction, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La vitesse d’une réaction est en général maximale en tout début de réaction.', vraie: true, justification: 'Exact : les concentrations en réactifs y sont les plus élevées.' },
        { lettre: 'B', texte: 'Une augmentation de température ralentit une réaction chimique.', vraie: false, justification: 'Faux : elle l’accélère, en augmentant la constante de vitesse k.' },
        { lettre: 'C', texte: 'La vitesse de réaction s’exprime en mol/L/s.', vraie: true, justification: 'Exact, ou en une unité équivalente de concentration par unité de temps.' },
        { lettre: 'D', texte: 'Une augmentation de la concentration des réactifs diminue toujours la vitesse.', vraie: false, justification: 'Faux : elle l’augmente généralement, selon l’ordre de la réaction par rapport à ce réactif.' },
        { lettre: 'E', texte: 'La surface de contact peut influencer la vitesse d’une réaction hétérogène.', vraie: true, justification: 'Exact : une plus grande surface de contact favorise les collisions entre réactifs.' },
      ],
      correction: 'Réponses exactes : A, C et E. La température et la concentration agissent toutes deux en accélérant, non en ralentissant, la réaction.',
      difficulte: 1,
    },
    {
      id: 'ue2-cinetique-chimique-qcm-02',
      enonce: 'Concernant l’ordre de réaction, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ordre global est la somme des ordres partiels de chaque réactif.', vraie: true, justification: 'Exact, par définition.' },
        { lettre: 'B', texte: 'L’ordre d’une réaction est toujours égal à son coefficient stœchiométrique.', vraie: false, justification: 'Faux : il doit être déterminé expérimentalement, indépendamment de la stœchiométrie.' },
        { lettre: 'C', texte: 'Une réaction d’ordre 0 a une vitesse indépendante de la concentration du réactif.', vraie: true, justification: 'Exact : v = k, constante.' },
        { lettre: 'D', texte: 'Une réaction d’ordre 1 a une vitesse proportionnelle au carré de la concentration.', vraie: false, justification: 'Faux : elle est proportionnelle à la concentration à la puissance 1, donc directement proportionnelle.' },
        { lettre: 'E', texte: 'L’ordre de réaction et la molécularité désignent la même notion.', vraie: false, justification: 'Faux : la molécularité décrit un acte élémentaire, l’ordre est une grandeur expérimentale globale.' },
      ],
      correction: 'Réponses exactes : A et C. Retenir que seule l’expérience détermine un ordre de réaction.',
      difficulte: 2,
    },
    {
      id: 'ue2-cinetique-chimique-qcm-03',
      enonce: 'Concernant l’énergie d’activation et le complexe activé, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le complexe activé correspond au point de plus haute énergie sur le chemin réactionnel.', vraie: true, justification: 'Exact, entre l’état des réactifs et celui des produits.' },
        { lettre: 'B', texte: 'Le complexe activé a une durée de vie mesurable.', vraie: false, justification: 'Faux : c’est un intermédiaire réactionnel qui possède une durée de vie mesurable, pas le complexe activé.' },
        { lettre: 'C', texte: 'L’énergie d’activation est directement reliée au signe de ΔG de la réaction.', vraie: false, justification: 'Faux : Ea est une grandeur cinétique, indépendante du signe de ΔG.' },
        { lettre: 'D', texte: 'Plus l’énergie d’activation est élevée, plus la réaction est lente à température donnée.', vraie: true, justification: 'Exact, conformément à la loi d’Arrhénius.' },
        { lettre: 'E', texte: 'Un catalyseur augmente l’énergie d’activation.', vraie: false, justification: 'Faux : un catalyseur abaisse l’énergie d’activation.' },
      ],
      correction: 'Réponses exactes : A et D. Ne jamais relier Ea au signe de ΔG.',
      difficulte: 2,
    },
    {
      id: 'ue2-cinetique-chimique-qcm-04',
      enonce: 'Concernant la loi d’Arrhénius, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La loi d’Arrhénius s’écrit k = A · exp(−Ea / RT).', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Une augmentation de la température T augmente la constante de vitesse k.', vraie: true, justification: 'Exact : l’exposant négatif se rapproche de zéro, donc k augmente.' },
        { lettre: 'C', texte: 'Une augmentation de l’énergie d’activation Ea augmente la constante de vitesse k.', vraie: false, justification: 'Faux : elle diminue k, la réaction devient plus lente.' },
        { lettre: 'D', texte: 'Le facteur A est appelé facteur de fréquence.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'R représente la constante d’Avogadro.', vraie: false, justification: 'Faux : R est la constante des gaz parfaits, pas la constante d’Avogadro.' },
      ],
      correction: 'Réponses exactes : A, B et D. Bien identifier chaque terme de la loi d’Arrhénius.',
      difficulte: 2,
    },
    {
      id: 'ue2-cinetique-chimique-qcm-05',
      enonce: 'Concernant la catalyse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un catalyseur est consommé au cours de la réaction.', vraie: false, justification: 'Faux : il est régénéré et n’apparaît pas dans le bilan global de la réaction.' },
        { lettre: 'B', texte: 'Un catalyseur modifie l’état d’équilibre thermodynamique de la réaction.', vraie: false, justification: 'Faux : il accélère l’atteinte de l’équilibre sans en modifier la position.' },
        { lettre: 'C', texte: 'Un catalyseur accélère à la fois la réaction directe et la réaction inverse.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Une enzyme est en général beaucoup plus spécifique qu’un catalyseur chimique classique.', vraie: true, justification: 'Exact, souvent pour un substrat unique ou une famille restreinte de substrats.' },
        { lettre: 'E', texte: 'Une enzyme peut perdre son activité catalytique par dénaturation.', vraie: true, justification: 'Exact, notamment sous l’effet d’un pH ou d’une température inadaptés.' },
      ],
      correction: 'Réponses exactes : C, D et E. Un catalyseur ne déplace jamais l’équilibre, il en accélère seulement l’obtention.',
      difficulte: 2,
    },
    {
      id: 'ue2-cinetique-chimique-qcm-06',
      enonce: 'Concernant la spontanéité et la cinétique des réactions, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une réaction thermodynamiquement favorable est toujours rapide.', vraie: false, justification: 'Faux : elle peut posséder une énergie d’activation élevée et être très lente.' },
        { lettre: 'B', texte: 'L’oxydation directe du glucose en l’absence d’enzyme est cinétiquement très lente malgré un ΔG très négatif.', vraie: true, justification: 'Exact : c’est l’exemple classique illustrant l’indépendance entre thermodynamique et cinétique.' },
        { lettre: 'C', texte: 'Un catalyseur peut rendre spontanée une réaction dont le ΔG est positif.', vraie: false, justification: 'Faux : un catalyseur agit uniquement sur la cinétique, jamais sur le signe de ΔG.' },
        { lettre: 'D', texte: 'La vitesse et la spontanéité d’une réaction sont deux notions indépendantes.', vraie: true, justification: 'Exact : l’une relève de la cinétique, l’autre de la thermodynamique.' },
        { lettre: 'E', texte: 'Les enzymes accélèrent les réactions du métabolisme en stabilisant l’état de transition.', vraie: true, justification: 'Exact, ce qui abaisse l’énergie d’activation.' },
      ],
      correction: 'Réponses exactes : B, D et E. Ce point est l’un des plus testés en cinétique chimique appliquée à la biologie.',
      difficulte: 2,
    },
  ],
};
