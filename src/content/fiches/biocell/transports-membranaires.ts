import type { Fiche } from '../../types';

export const ficheTransportsMembranaires: Fiche = {
  id: 'biocell-transports-membranaires',
  ue: 'biocell',
  titre: 'Les transports membranaires',
  sousTitre: 'Diffusion simple et facilitée, canaux, transporteurs, pompes ATPasiques et osmose',
  chapitre: 'La cellule et ses membranes',
  ordre: 3,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'diffusion simple',
    'diffusion facilitée',
    'canal ionique',
    'transporteur',
    'pompe Na+/K+-ATPase',
    'symport',
    'antiport',
    'osmose',
    'transport actif',
  ],
  objectifs: [
    'Distinguer transport passif et transport actif selon le sens du gradient électrochimique.',
    'Différencier diffusion simple et diffusion facilitée par canal ou par transporteur.',
    'Décrire le fonctionnement de la pompe sodium-potassium comme modèle de transport actif primaire.',
    'Différencier symport, antiport et uniport, et le principe du transport actif secondaire.',
    'Expliquer le phénomène d’osmose et ses conséquences sur une cellule selon la tonicité du milieu.',
  ],
  sections: [
    {
      id: 'principes-generaux',
      titre: 'Principes généraux des transports membranaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La bicouche lipidique est peu perméable aux molécules polaires, aux ions et aux grosses molécules. Le franchissement de la membrane plasmique par ces substances nécessite des protéines de transport spécifiques, dont l’activité définit deux grandes catégories : le transport passif et le transport actif.",
        },
        {
          type: 'definition',
          terme: 'Gradient électrochimique',
          definition:
            "Somme du gradient de concentration d’une substance et, pour une espèce chargée, du gradient de potentiel électrique de part et d’autre de la membrane. Il détermine le sens spontané de déplacement de la substance.",
        },
        {
          type: 'comparaison',
          titre: 'Transport passif et transport actif',
          gauche: {
            titre: 'Transport passif',
            points: [
              'Se fait dans le sens du gradient électrochimique',
              'Ne consomme pas directement d’énergie métabolique',
              'Comprend la diffusion simple et la diffusion facilitée',
            ],
          },
          droite: {
            titre: 'Transport actif',
            points: [
              'Se fait contre le gradient électrochimique',
              'Nécessite un apport d’énergie (hydrolyse d’ATP ou gradient couplé)',
              'Comprend le transport actif primaire et le transport actif secondaire',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Petites molécules apolaires : diffusion directe',
          texte:
            "Les molécules de petite taille et non polaires (dioxygène, dioxyde de carbone) ainsi que certaines petites molécules non chargées (eau, éthanol) peuvent traverser directement la bicouche lipidique par diffusion simple, sans intervention d’une protéine de transport.",
        },
      ],
    },
    {
      id: 'diffusion-facilitee',
      titre: 'La diffusion facilitée : canaux et transporteurs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La diffusion facilitée permet le passage, dans le sens du gradient, de molécules qui ne peuvent pas traverser directement la bicouche lipidique. Elle fait intervenir deux grandes familles de protéines intrinsèques : les canaux et les transporteurs.",
        },
        {
          type: 'tableau',
          titre: 'Canaux et transporteurs',
          colonnes: ['Caractéristique', 'Canal', 'Transporteur (perméase)'],
          lignes: [
            ['Mécanisme', 'Pore aqueux traversant la membrane', 'Changement de conformation exposant alternativement un site de liaison de part et d’autre de la membrane'],
            ['Vitesse de transport', 'Très rapide (jusqu’à des millions d’ions par seconde)', 'Plus lente, limitée par le changement conformationnel'],
            ['Spécificité', 'Sélectivité souvent large pour une catégorie d’ions', 'Grande spécificité pour un substrat donné'],
            ['Exemples', 'Canal potassique, canal sodique voltage-dépendant', 'GLUT (transporteur de glucose)'],
          ],
        },
        {
          type: 'liste',
          items: [
            'Un canal peut être toujours ouvert (canal de fuite), ou régulé : canal voltage-dépendant (sensible au potentiel de membrane), canal ligand-dépendant (activé par la fixation d’un messager) ou canal mécanosensible.',
            "Les aquaporines sont des canaux spécifiques de l’eau, qui accélèrent considérablement sa diffusion à travers la membrane sans consommer d’énergie.",
            "Le transporteur GLUT1 assure la diffusion facilitée du glucose dans la plupart des cellules, selon son gradient de concentration.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Point clé à retenir',
          texte:
            "La diffusion facilitée reste un transport passif : elle se fait toujours dans le sens du gradient électrochimique et ne consomme pas d’énergie métabolique, même si elle nécessite une protéine de transport spécifique.",
        },
      ],
    },
    {
      id: 'transport-actif-primaire',
      titre: 'Le transport actif primaire : la pompe sodium-potassium',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le transport actif primaire utilise directement l’énergie libérée par l’hydrolyse de l’ATP pour déplacer une substance contre son gradient électrochimique. La pompe sodium-potassium (Na+/K+-ATPase) en est l’exemple de référence dans les cellules animales.",
        },
        {
          type: 'etapes',
          titre: 'Cycle de la pompe Na+/K+-ATPase',
          etapes: [
            {
              titre: 'Fixation du sodium intracellulaire',
              detail: 'Trois ions Na+ se fixent sur la pompe côté cytosolique, ce qui stimule l’hydrolyse d’une molécule d’ATP.',
            },
            {
              titre: 'Phosphorylation et changement de conformation',
              detail: 'L’hydrolyse de l’ATP phosphoryle la pompe, ce qui provoque un changement de conformation exposant les sites de fixation du sodium vers le milieu extracellulaire.',
            },
            {
              titre: 'Libération du sodium et fixation du potassium',
              detail: 'Les trois ions Na+ sont libérés dans le milieu extracellulaire ; deux ions K+ se fixent alors sur la pompe.',
            },
            {
              titre: 'Déphosphorylation et retour à la conformation initiale',
              detail: 'La déphosphorylation de la pompe entraîne un nouveau changement de conformation, libérant les deux ions K+ dans le cytosol.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Stœchiométrie à retenir',
          texte:
            "Pour chaque molécule d’ATP hydrolysée, la pompe Na+/K+-ATPase exporte trois ions Na+ hors de la cellule et importe deux ions K+. Ce fonctionnement électrogénique contribue au potentiel de membrane négatif et maintient un gradient de sodium indispensable au transport actif secondaire.",
        },
        {
          type: 'paragraphe',
          texte:
            "D’autres pompes ATPasiques existent, comme la pompe à calcium (Ca2+-ATPase) du réticulum sarcoplasmique et plasmique, qui maintient une concentration cytosolique de calcium très basse par rapport au milieu extracellulaire et au réticulum.",
        },
      ],
    },
    {
      id: 'transport-actif-secondaire',
      titre: 'Le transport actif secondaire : symport et antiport',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le transport actif secondaire n’utilise pas directement l’ATP : il exploite l’énergie potentielle stockée dans un gradient électrochimique préalablement établi par un transport actif primaire, le plus souvent le gradient de sodium créé par la pompe Na+/K+-ATPase.",
        },
        {
          type: 'tableau',
          titre: 'Modes de couplage du transport actif secondaire',
          colonnes: ['Type', 'Principe', 'Exemple'],
          lignes: [
            ['Uniport', 'Transport d’une seule substance, sans couplage direct', 'GLUT1 (diffusion facilitée, à distinguer du transport actif)'],
            ['Symport (cotransport)', 'Deux substances transportées dans le même sens', 'Cotransporteur sodium-glucose (SGLT), au niveau intestinal et rénal'],
            ['Antiport (contre-transport)', 'Deux substances transportées en sens opposés', 'Échangeur sodium-calcium (NCX), échangeur sodium-proton (NHE)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre transporteur passif et actif secondaire',
          texte:
            "Un symport ou un antiport n’est un transport actif que si l’une des deux substances est déplacée contre son propre gradient, grâce à l’énergie fournie par le déplacement de l’autre substance dans le sens de son gradient. Un cotransport où les deux substances suivent leur propre gradient relèverait, en toute rigueur, de la diffusion facilitée couplée.",
        },
        {
          type: 'definition',
          terme: 'Transport actif secondaire',
          definition:
            "Transport contre un gradient électrochimique, rendu possible par le couplage à un autre soluté qui se déplace dans le sens de son propre gradient, lui-même entretenu par un transport actif primaire consommateur d’ATP.",
        },
      ],
    },
    {
      id: 'osmose',
      titre: 'L’osmose et la tonicité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’osmose est le déplacement passif de l’eau à travers une membrane semi-perméable, du compartiment le moins concentré en solutés (hypotonique) vers le compartiment le plus concentré (hypertonique), afin de tendre vers l’équilibre des concentrations.",
        },
        {
          type: 'definition',
          terme: 'Pression osmotique',
          definition:
            "Pression qu’il faudrait exercer pour empêcher tout mouvement net d’eau à travers une membrane semi-perméable séparant deux solutions de concentrations différentes en solutés.",
        },
        {
          type: 'tableau',
          titre: 'Effet de la tonicité du milieu sur une cellule',
          colonnes: ['Milieu', 'Mouvement de l’eau', 'Conséquence sur la cellule'],
          lignes: [
            ['Isotonique', 'Aucun mouvement net d’eau', 'Volume cellulaire stable'],
            ['Hypotonique', 'Entrée d’eau dans la cellule', 'Gonflement, risque de lyse (hémolyse pour une hématie)'],
            ['Hypertonique', 'Sortie d’eau hors de la cellule', 'Rétraction cellulaire (crénelure pour une hématie, plasmolyse pour une cellule végétale)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Sérum physiologique et osmolarité',
          texte:
            "Le sérum physiologique (chlorure de sodium à 9 grammes par litre) est isotonique par rapport au plasma sanguin, ce qui permet sa perfusion sans provoquer de mouvement d’eau anormal à travers la membrane des hématies.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le transport passif suit le gradient électrochimique et ne consomme pas d’énergie ; le transport actif va à l’encontre de ce gradient et consomme de l’énergie.",
    "La diffusion facilitée nécessite une protéine spécifique (canal ou transporteur) mais reste un transport passif.",
    "Les canaux forment un pore aqueux à passage très rapide ; les transporteurs changent de conformation et sont plus lents mais très spécifiques.",
    "La pompe Na+/K+-ATPase exporte trois Na+ et importe deux K+ pour chaque ATP hydrolysé : c’est un transport actif primaire électrogénique.",
    "Le transport actif secondaire couple le déplacement d’une substance contre son gradient à celui d’une autre substance dans le sens du sien, le plus souvent le sodium.",
    "Symport et antiport se distinguent par le sens relatif de déplacement des deux substances transportées.",
    "L’osmose déplace l’eau du milieu hypotonique vers le milieu hypertonique, à travers une membrane semi-perméable.",
  ],
  erreursFrequentes: [
    "Considérer la diffusion facilitée comme un transport actif : elle reste passive malgré l’intervention d’une protéine spécifique.",
    "Inverser la stœchiométrie de la pompe Na+/K+-ATPase : c’est trois Na+ exportés pour deux K+ importés, et non l’inverse.",
    "Confondre symport et antiport : dans le symport, les deux substances vont dans le même sens ; dans l’antiport, en sens opposés.",
    "Oublier que le transport actif secondaire dépend, en amont, d’un gradient entretenu par un transport actif primaire consommateur d’ATP.",
    "Confondre milieu hypotonique et milieu hypertonique : l’eau entre dans la cellule en milieu hypotonique, et en sort en milieu hypertonique.",
    "Croire que tous les ions traversent librement la bicouche lipidique : leur charge les empêche de la franchir sans protéine de transport.",
  ],
  mnemotechniques: [
    {
      moyen: '« 3 Sort, 2 Rentre » pour la pompe Na+/K+',
      explication: 'Trois ions sodium (Na+) sortent de la cellule, deux ions potassium (K+) y entrent, pour chaque ATP hydrolysé.',
    },
    {
      moyen: '« SYM = même sens »',
      explication: 'Dans un symport, les deux substances transportées se déplacent dans le même sens à travers la membrane.',
    },
    {
      moyen: 'HypOtonique = eau rentre, cellule grOnfle',
      explication: 'En milieu hypotonique, l’eau entre dans la cellule par osmose, qui gonfle ; en milieu hypertonique, elle se rétracte.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Pollard, Earnshaw, Lippincott-Schwartz, Biologie cellulaire, 3e édition',
    'Lodish, Biologie moléculaire de la cellule',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'biocell-transports-membranaires-fc-01',
      recto: 'Quelle est la différence essentielle entre transport passif et transport actif ?',
      verso: 'Le transport passif suit le gradient électrochimique et ne consomme pas d’énergie ; le transport actif va contre ce gradient et consomme de l’énergie.',
      type: 'definition',
      tags: ['transport passif', 'transport actif'],
    },
    {
      id: 'biocell-transports-membranaires-fc-02',
      recto: 'La diffusion facilitée est-elle un transport passif ou actif ?',
      verso: 'Un transport passif : elle suit le gradient électrochimique, même si elle nécessite une protéine spécifique (canal ou transporteur).',
      type: 'definition',
      tags: ['diffusion facilitée'],
    },
    {
      id: 'biocell-transports-membranaires-fc-03',
      recto: 'Quelle est la différence de mécanisme entre un canal et un transporteur ?',
      verso: 'Le canal forme un pore aqueux à passage rapide ; le transporteur change de conformation pour exposer alternativement son site de liaison de part et d’autre de la membrane, de façon plus lente.',
      type: 'mecanisme',
      tags: ['canal', 'transporteur'],
    },
    {
      id: 'biocell-transports-membranaires-fc-04',
      recto: 'Que sont les aquaporines ?',
      verso: 'Des canaux membranaires spécifiques qui accélèrent la diffusion de l’eau à travers la membrane, sans consommer d’énergie.',
      type: 'definition',
      tags: ['aquaporines', 'eau'],
    },
    {
      id: 'biocell-transports-membranaires-fc-05',
      recto: 'Quelle est la stœchiométrie de la pompe Na+/K+-ATPase ?',
      verso: 'Trois ions Na+ exportés et deux ions K+ importés pour chaque molécule d’ATP hydrolysée.',
      type: 'chiffre',
      tags: ['pompe Na/K', 'ATPase'],
    },
    {
      id: 'biocell-transports-membranaires-fc-06',
      recto: 'Pourquoi dit-on que la pompe Na+/K+-ATPase est électrogénique ?',
      verso: 'Parce qu’elle déplace plus de charges positives vers l’extérieur (3 Na+) qu’elle n’en importe (2 K+), ce qui contribue à la négativité du potentiel de membrane.',
      type: 'mecanisme',
      tags: ['pompe Na/K', 'potentiel de membrane'],
    },
    {
      id: 'biocell-transports-membranaires-fc-07',
      recto: 'Que désigne un symport ?',
      verso: 'Un transport couplé de deux substances qui se déplacent dans le même sens à travers la membrane.',
      type: 'definition',
      tags: ['symport'],
    },
    {
      id: 'biocell-transports-membranaires-fc-08',
      recto: 'Que désigne un antiport ?',
      verso: 'Un transport couplé de deux substances qui se déplacent en sens opposés à travers la membrane.',
      type: 'definition',
      tags: ['antiport'],
    },
    {
      id: 'biocell-transports-membranaires-fc-09',
      recto: 'Citer un exemple de symport et un exemple d’antiport.',
      verso: 'Symport : cotransporteur sodium-glucose (SGLT). Antiport : échangeur sodium-calcium (NCX) ou échangeur sodium-proton (NHE).',
      type: 'clinique',
      tags: ['symport', 'antiport'],
    },
    {
      id: 'biocell-transports-membranaires-fc-10',
      recto: 'Sur quel gradient repose le plus souvent le transport actif secondaire ?',
      verso: 'Sur le gradient de sodium, entretenu par la pompe Na+/K+-ATPase (transport actif primaire).',
      type: 'mecanisme',
      tags: ['transport actif secondaire'],
    },
    {
      id: 'biocell-transports-membranaires-fc-11',
      recto: 'Que se passe-t-il pour une hématie placée en milieu hypotonique ?',
      verso: 'L’eau entre dans la cellule par osmose, ce qui provoque un gonflement pouvant aboutir à une hémolyse.',
      type: 'clinique',
      tags: ['osmose', 'hématie'],
    },
    {
      id: 'biocell-transports-membranaires-fc-12',
      recto: 'Définir la pression osmotique.',
      verso: 'La pression qu’il faudrait exercer pour empêcher tout mouvement net d’eau à travers une membrane semi-perméable séparant deux solutions de concentrations différentes.',
      type: 'definition',
      tags: ['osmose', 'pression osmotique'],
    },
  ],
  qcm: [
    {
      id: 'biocell-transports-membranaires-qcm-01',
      enonce: 'Concernant les transports membranaires en général, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le transport passif se fait dans le sens du gradient électrochimique.', vraie: true, justification: 'C’est la définition même du transport passif.' },
        { lettre: 'B', texte: 'Le transport actif ne consomme jamais d’énergie.', vraie: false, justification: 'Le transport actif consomme de l’énergie, directement (ATP) ou indirectement (gradient couplé).' },
        { lettre: 'C', texte: 'Le dioxygène peut diffuser directement à travers la bicouche lipidique.', vraie: true, justification: 'Petite molécule apolaire, il traverse librement la membrane sans protéine de transport.' },
        { lettre: 'D', texte: 'Le gradient électrochimique d’un ion dépend uniquement de sa concentration.', vraie: false, justification: 'Il dépend aussi du potentiel électrique de part et d’autre de la membrane, car l’ion est chargé.' },
        { lettre: 'E', texte: 'La diffusion facilitée est un exemple de transport passif.', vraie: true, justification: 'Elle suit le gradient électrochimique malgré l’intervention d’une protéine spécifique.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer transport passif (avec ou sans protéine) et transport actif (consommateur d’énergie).',
      difficulte: 1,
    },
    {
      id: 'biocell-transports-membranaires-qcm-02',
      enonce: 'Concernant les canaux et les transporteurs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un canal ionique forme un pore aqueux traversant la membrane.', vraie: true, justification: 'C’est le mécanisme structural caractéristique des canaux.' },
        { lettre: 'B', texte: 'Un transporteur fonctionne par changement de conformation.', vraie: true, justification: 'Il expose alternativement son site de liaison de part et d’autre de la membrane.' },
        { lettre: 'C', texte: 'Le débit de transport à travers un canal est en général plus faible qu’à travers un transporteur.', vraie: false, justification: 'C’est l’inverse : un canal laisse passer beaucoup plus de molécules par seconde qu’un transporteur.' },
        { lettre: 'D', texte: 'Les aquaporines sont des canaux spécifiques de l’eau.', vraie: true, justification: 'Elles accélèrent la diffusion de l’eau à travers la membrane.' },
        { lettre: 'E', texte: 'GLUT1 assure le transport actif du glucose contre son gradient.', vraie: false, justification: 'GLUT1 assure une diffusion facilitée du glucose, donc un transport passif dans le sens du gradient.' },
      ],
      correction: 'Réponses exactes : A, B et D. GLUT1 est un piège classique : il s’agit de diffusion facilitée, non de transport actif.',
      difficulte: 2,
    },
    {
      id: 'biocell-transports-membranaires-qcm-03',
      enonce: 'Concernant la pompe Na+/K+-ATPase, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle exporte trois ions Na+ pour chaque ATP hydrolysé.', vraie: true, justification: 'C’est la stœchiométrie caractéristique de cette pompe.' },
        { lettre: 'B', texte: 'Elle importe trois ions K+ pour chaque ATP hydrolysé.', vraie: false, justification: 'Elle importe deux ions K+, et non trois.' },
        { lettre: 'C', texte: 'C’est un exemple de transport actif primaire.', vraie: true, justification: 'Elle utilise directement l’énergie de l’hydrolyse de l’ATP.' },
        { lettre: 'D', texte: 'Elle contribue à maintenir le gradient de sodium exploité par le transport actif secondaire.', vraie: true, justification: 'Le gradient de Na+ qu’elle entretient est la force motrice de nombreux symports et antiports.' },
        { lettre: 'E', texte: 'Elle est électriquement neutre.', vraie: false, justification: 'Elle est électrogénique, car elle exporte plus de charges positives qu’elle n’en importe.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir la stœchiométrie 3 Na+ exportés pour 2 K+ importés.',
      difficulte: 2,
    },
    {
      id: 'biocell-transports-membranaires-qcm-04',
      enonce: 'Concernant le transport actif secondaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il utilise directement l’hydrolyse de l’ATP.', vraie: false, justification: 'C’est le transport actif primaire qui utilise directement l’ATP ; le secondaire exploite un gradient déjà établi.' },
        { lettre: 'B', texte: 'Dans un symport, les deux substances se déplacent dans le même sens.', vraie: true, justification: 'C’est la définition du symport.' },
        { lettre: 'C', texte: 'Dans un antiport, les deux substances se déplacent dans le même sens.', vraie: false, justification: 'Dans un antiport, les deux substances se déplacent en sens opposés.' },
        { lettre: 'D', texte: 'Le cotransporteur sodium-glucose (SGLT) est un exemple de symport.', vraie: true, justification: 'Le sodium et le glucose sont transportés dans le même sens, le glucose étant déplacé contre son gradient.' },
        { lettre: 'E', texte: 'L’échangeur sodium-calcium (NCX) est un exemple d’antiport.', vraie: true, justification: 'Le sodium entre dans la cellule pendant que le calcium en sort, dans des sens opposés.' },
      ],
      correction: 'Réponses exactes : B, D et E. Le transport actif secondaire ne consomme pas directement d’ATP, mais dépend d’un gradient entretenu par un transport actif primaire.',
      difficulte: 2,
    },
    {
      id: 'biocell-transports-membranaires-qcm-05',
      enonce: 'Concernant l’osmose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’eau se déplace du milieu hypertonique vers le milieu hypotonique.', vraie: false, justification: 'C’est l’inverse : l’eau se déplace du milieu hypotonique vers le milieu hypertonique.' },
        { lettre: 'B', texte: 'Une hématie placée en milieu hypotonique gonfle et peut se lyser.', vraie: true, justification: 'L’eau entre dans la cellule par osmose, ce qui augmente son volume.' },
        { lettre: 'C', texte: 'Une cellule placée en milieu isotonique ne subit aucun mouvement net d’eau.', vraie: true, justification: 'Les concentrations en solutés sont égales de part et d’autre de la membrane.' },
        { lettre: 'D', texte: 'Le sérum physiologique est hypertonique par rapport au plasma.', vraie: false, justification: 'Le sérum physiologique est isotonique par rapport au plasma sanguin.' },
        { lettre: 'E', texte: 'Une cellule placée en milieu hypertonique se rétracte.', vraie: true, justification: 'L’eau sort de la cellule par osmose, ce qui diminue son volume.' },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir le sens du mouvement de l’eau : du compartiment le moins concentré vers le plus concentré en solutés.',
      difficulte: 1,
    },
    {
      id: 'biocell-transports-membranaires-qcm-06',
      enonce: 'Concernant les différents modes de transport membranaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La diffusion simple ne nécessite aucune protéine de transport.', vraie: true, justification: 'Elle concerne des molécules capables de traverser directement la bicouche lipidique.' },
        { lettre: 'B', texte: 'Un canal voltage-dépendant s’ouvre en réponse à une variation du potentiel de membrane.', vraie: true, justification: 'C’est le mécanisme de régulation caractéristique de ces canaux, par exemple les canaux sodiques voltage-dépendants.' },
        { lettre: 'C', texte: 'La pompe à calcium (Ca2+-ATPase) est un exemple de transport actif secondaire.', vraie: false, justification: 'Elle hydrolyse directement l’ATP : c’est un transport actif primaire.' },
        { lettre: 'D', texte: 'Un canal ligand-dépendant s’ouvre après fixation d’un messager chimique.', vraie: true, justification: 'C’est le principe des canaux activés par un neurotransmetteur, par exemple.' },
        { lettre: 'E', texte: 'Le transport actif secondaire peut faire intervenir un symport ou un antiport.', vraie: true, justification: 'Ces deux modes de couplage peuvent tous deux servir de support au transport actif secondaire.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. La pompe Ca2+-ATPase est un piège classique de transport actif primaire, et non secondaire.',
      difficulte: 2,
    },
  ],
};
