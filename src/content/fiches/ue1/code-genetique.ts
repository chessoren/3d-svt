import type { Fiche } from '../../types';

export const ficheCodeGenetique: Fiche = {
  id: 'ue1-code-genetique',
  ue: 'ue1',
  titre: 'Le code génétique',
  sousTitre: 'Codons, dégénérescence, universalité, cadre de lecture, ARN de transfert, aminoacyl-ARNt synthétases, wobble',
  chapitre: 'Structure et expression du génome',
  ordre: 7,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'codon',
    'dégénérescence',
    'universalité',
    'cadre de lecture',
    'ARN de transfert',
    'anticodon',
    'aminoacyl-ARNt synthétase',
    'wobble',
  ],
  objectifs: [
    'Définir le codon et expliquer la dégénérescence du code génétique.',
    'Expliquer les notions d’universalité et de non-chevauchement du code génétique.',
    'Définir le cadre de lecture et son importance.',
    'Décrire la structure générale d’un ARN de transfert et le rôle de l’anticodon.',
    'Expliquer le rôle des aminoacyl-ARNt synthétases dans la fidélité de la traduction.',
    'Expliquer le phénomène de wobble et son intérêt biologique.',
  ],
  sections: [
    {
      id: 'codons-degenerescence',
      titre: 'Codons et dégénérescence',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le code génétique établit la correspondance entre les codons, triplets de nucléotides de l’ARN messager, et les acides aminés incorporés dans la protéine en cours de synthèse. Chaque codon est constitué de trois nucléotides consécutifs, ce qui permet, avec quatre bases possibles à chaque position, de générer soixante-quatre combinaisons différentes.',
        },
        {
          type: 'liste',
          items: [
            'Sur les soixante-quatre codons possibles, soixante et un codent effectivement pour un acide aminé : ce sont les codons sens.',
            'Trois codons, UAA, UAG et UGA, ne codent pour aucun acide aminé et signalent l’arrêt de la traduction : ce sont les codons stop, ou codons non-sens.',
            'Le codon AUG code pour la méthionine et sert également de codon d’initiation de la traduction chez la quasi-totalité des ARN messagers.',
          ],
        },
        {
          type: 'definition',
          terme: 'Dégénérescence du code génétique',
          definition:
            'Propriété selon laquelle plusieurs codons différents peuvent coder pour le même acide aminé. Vingt acides aminés sont codés par soixante et un codons sens : la plupart des acides aminés sont donc codés par plusieurs codons, à l’exception notable de la méthionine et du tryptophane, chacun codé par un unique codon.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Une dégénérescence non aléatoire',
          texte:
            'Les codons synonymes d’un même acide aminé diffèrent le plus souvent par leur troisième position, appelée position dégénérée ou position wobble. Cette organisation limite les conséquences des mutations touchant cette troisième base, qui restent fréquemment silencieuses.',
        },
      ],
    },
    {
      id: 'universalite-non-chevauchement',
      titre: 'Universalité et non-chevauchement',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le code génétique présente deux propriétés fondamentales supplémentaires : l’universalité et le non-chevauchement.',
        },
        {
          type: 'liste',
          items: [
            'Le code génétique est quasi universel : la signification de chaque codon est la même chez la très grande majorité des organismes vivants, des bactéries aux mammifères.',
            'Il existe cependant de rares exceptions, notamment dans le génome mitochondrial, où certains codons ont une signification différente de celle du code nucléaire standard.',
            'Le code est non chevauchant : chaque nucléotide de l’ARN messager n’appartient qu’à un seul codon, sans être partagé entre deux triplets successifs.',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre universel et invariable',
          texte:
            'L’universalité quasi générale du code génétique ne signifie pas qu’il est totalement figé : le code mitochondrial humain, par exemple, diffère du code nucléaire standard sur quelques codons, notamment concernant certains codons stop et le codon d’initiation.',
        },
      ],
    },
    {
      id: 'cadre-lecture',
      titre: 'Le cadre de lecture',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le cadre de lecture est la façon dont l’ARN messager est découpé en triplets successifs et non superposés, à partir du codon d’initiation, pour être traduit par le ribosome.',
        },
        {
          type: 'liste',
          items: [
            'Une même séquence nucléotidique peut théoriquement être lue selon trois cadres de lecture différents sur un même brin, selon le nucléotide de départ.',
            'Une fois le codon d’initiation reconnu, la lecture progresse ensuite de triplet en triplet, sans chevauchement ni signe de ponctuation entre les codons.',
            'L’insertion ou la délétion d’un nombre de nucléotides non multiple de trois décale l’ensemble du cadre de lecture en aval du point de mutation, modifiant radicalement la protéine produite.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Mutation par décalage du cadre de lecture',
          texte:
            'Une insertion ou une délétion d’une ou deux paires de bases, dite mutation par décalage du cadre de lecture, modifie tous les codons situés en aval, ce qui aboutit le plus souvent à une protéine tronquée ou totalement différente, par apparition prématurée d’un codon stop dans le nouveau cadre de lecture.',
        },
      ],
    },
    {
      id: 'arn-transfert',
      titre: 'Les ARN de transfert',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’ARN de transfert est la molécule adaptatrice qui établit la correspondance physique entre un codon de l’ARN messager et l’acide aminé correspondant, au cours de la traduction.',
        },
        {
          type: 'liste',
          items: [
            'Chaque ARN de transfert adopte, par repliement intramoléculaire, une structure secondaire en forme de feuille de trèfle, stabilisée par appariements internes.',
            'Une extrémité de la molécule, la boucle anticodon, porte un triplet de nucléotides, l’anticodon, complémentaire et antiparallèle du codon correspondant de l’ARN messager.',
            'L’extrémité 3′ de l’ARN de transfert, terminée par la séquence CCA, porte l’acide aminé fixé de façon covalente par une liaison ester.',
          ],
        },
        {
          type: 'definition',
          terme: 'Aminoacyl-ARNt',
          definition:
            'ARN de transfert sur lequel est fixé, par une liaison covalente à haute énergie, l’acide aminé correspondant à son anticodon. Cette forme chargée est la seule utilisable par le ribosome au cours de l’élongation de la traduction.',
        },
      ],
    },
    {
      id: 'aminoacyl-arnt-synthetases',
      titre: 'Les aminoacyl-ARNt synthétases',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La fixation de l’acide aminé sur son ARN de transfert est catalysée par une famille d’enzymes hautement spécifiques, les aminoacyl-ARNt synthétases.',
        },
        {
          type: 'liste',
          items: [
            'Il existe une aminoacyl-ARNt synthétase distincte pour chacun des vingt acides aminés protéinogènes.',
            'Chaque enzyme reconnaît spécifiquement son acide aminé et l’ensemble des ARN de transfert correspondant à cet acide aminé, quel que soit leur anticodon parmi les synonymes possibles.',
            'La réaction consomme de l’ATP et se déroule en deux étapes : activation de l’acide aminé sous forme d’aminoacyl-adénylate, puis transfert de l’acide aminé activé sur l’extrémité 3′ de l’ARN de transfert.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le second code génétique',
          texte:
            'La spécificité des aminoacyl-ARNt synthétases est parfois qualifiée de second code génétique : une erreur de reconnaissance à ce niveau ferait porter le mauvais acide aminé sur l’ARN de transfert, et le ribosome incorporerait alors cet acide aminé erroné sans pouvoir détecter l’erreur, puisqu’il ne lit que l’anticodon.',
        },
      ],
    },
    {
      id: 'wobble',
      titre: 'La règle du wobble',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le nombre d’ARN de transfert différents présents dans une cellule est inférieur au nombre de soixante et un codons sens : cette économie est rendue possible par une flexibilité d’appariement au niveau de la troisième position du codon, appelée règle du balancement, ou wobble.',
        },
        {
          type: 'liste',
          items: [
            'La première et la deuxième position du codon s’apparient à l’anticodon selon les règles de complémentarité strictes de Watson et Crick.',
            'La troisième position du codon, appariée à la première position de l’anticodon, tolère des appariements non conventionnels.',
            'Un même ARN de transfert peut ainsi reconnaître plusieurs codons synonymes différant uniquement par leur troisième nucléotide.',
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Pourquoi parler de balancement ?',
          texte:
            'Le terme wobble, qui signifie balancement en anglais, évoque le jeu de flexibilité géométrique qui existe au niveau de cette troisième paire de bases, moins contrainte que les deux premières, ce qui autorise un appariement plus tolérant sans compromettre la fidélité globale du décodage.',
        },
      ],
    },
  ],
  pointsCles: [
    'Le code génétique compte soixante-quatre codons : soixante et un codons sens et trois codons stop, UAA, UAG et UGA.',
    'Le code est dégénéré : plusieurs codons peuvent coder pour le même acide aminé, sauf pour la méthionine et le tryptophane.',
    'Le code est quasi universel et non chevauchant : chaque nucléotide appartient à un seul codon.',
    'Le cadre de lecture, fixé par le codon d’initiation, détermine le découpage en triplets successifs de l’ARN messager.',
    'L’ARN de transfert porte un anticodon complémentaire du codon et un acide aminé fixé sur son extrémité 3′ terminée par CCA.',
    'Chacune des vingt aminoacyl-ARNt synthétases assure spécifiquement la fixation d’un acide aminé sur les ARN de transfert correspondants.',
    'La règle du wobble, au niveau de la troisième position du codon, permet à un même ARN de transfert de reconnaître plusieurs codons synonymes.',
  ],
  erreursFrequentes: [
    'Croire que chaque acide aminé n’est codé que par un seul codon : c’est faux pour dix-huit des vingt acides aminés, seules la méthionine et le tryptophane font exception.',
    'Confondre codon stop et codon d’initiation : AUG est le codon d’initiation, alors que UAA, UAG et UGA sont les codons stop.',
    'Penser que le code génétique est parfaitement invariant dans tous les compartiments cellulaires : le code mitochondrial présente quelques différences par rapport au code nucléaire standard.',
    'Oublier que l’anticodon est antiparallèle au codon, et non parallèle.',
    'Confondre le rôle du ribosome, qui ne lit que l’anticodon, avec celui de l’aminoacyl-ARNt synthétase, seule responsable de l’exactitude de la charge en acide aminé.',
  ],
  mnemotechniques: [
    {
      moyen: 'UAA, UAG, UGA : « U Au Are Gone »',
      explication: 'Retenir les trois codons stop du code génétique : UAA, UAG et UGA, qui n’ont pas d’acide aminé associé.',
    },
    {
      moyen: 'AUG ouvre, comme la clé qui commence',
      explication: 'Le codon AUG, codant pour la méthionine, est aussi le codon d’initiation qui ouvre la lecture du cadre de traduction.',
    },
    {
      moyen: 'Vingt clés pour vingt serrures',
      explication: 'Il existe exactement vingt aminoacyl-ARNt synthétases, une pour chacun des vingt acides aminés protéinogènes.',
    },
  ],
  sources: [
    'Lehninger, Principes de biochimie, 8e édition',
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Watson, Biologie moléculaire du gène, 7e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-code-genetique-fc-01',
      recto: 'Combien de codons existe-t-il au total, et combien sont des codons sens ?',
      verso: 'Soixante-quatre codons au total, dont soixante et un codons sens.',
      type: 'chiffre',
      tags: ['codon'],
    },
    {
      id: 'ue1-code-genetique-fc-02',
      recto: 'Citer les trois codons stop.',
      verso: 'UAA, UAG et UGA.',
      type: 'chiffre',
      tags: ['codon stop'],
    },
    {
      id: 'ue1-code-genetique-fc-03',
      recto: 'Quels sont les deux seuls acides aminés codés par un unique codon ?',
      verso: 'La méthionine, codée par AUG, et le tryptophane, codé par UGG.',
      type: 'classification',
      tags: ['dégénérescence'],
    },
    {
      id: 'ue1-code-genetique-fc-04',
      recto: 'Qu’est-ce que la dégénérescence du code génétique ?',
      verso: 'La propriété selon laquelle plusieurs codons différents peuvent coder pour le même acide aminé.',
      type: 'definition',
      tags: ['dégénérescence'],
    },
    {
      id: 'ue1-code-genetique-fc-05',
      recto: 'Qu’est-ce que le non-chevauchement du code génétique ?',
      verso: 'Chaque nucléotide de l’ARN messager n’appartient qu’à un seul codon, sans être partagé entre deux triplets successifs.',
      type: 'definition',
      tags: ['non-chevauchement'],
    },
    {
      id: 'ue1-code-genetique-fc-06',
      recto: 'Qu’est-ce qu’une mutation par décalage du cadre de lecture ?',
      verso: 'Une insertion ou une délétion d’un nombre de nucléotides non multiple de trois, qui modifie tous les codons en aval du point de mutation.',
      type: 'clinique',
      tags: ['cadre de lecture'],
    },
    {
      id: 'ue1-code-genetique-fc-07',
      recto: 'Quelle structure secondaire adopte typiquement un ARN de transfert ?',
      verso: 'Une structure en feuille de trèfle, stabilisée par des appariements internes.',
      type: 'definition',
      tags: ['ARN de transfert'],
    },
    {
      id: 'ue1-code-genetique-fc-08',
      recto: 'Où l’acide aminé est-il fixé sur l’ARN de transfert ?',
      verso: 'À l’extrémité 3′, terminée par la séquence CCA, par une liaison ester covalente.',
      type: 'mecanisme',
      tags: ['ARN de transfert'],
    },
    {
      id: 'ue1-code-genetique-fc-09',
      recto: 'Combien existe-t-il d’aminoacyl-ARNt synthétases différentes ?',
      verso: 'Vingt, une pour chacun des vingt acides aminés protéinogènes.',
      type: 'chiffre',
      tags: ['aminoacyl-ARNt synthétase'],
    },
    {
      id: 'ue1-code-genetique-fc-10',
      recto: 'Que consomme la réaction catalysée par une aminoacyl-ARNt synthétase ?',
      verso: 'De l’ATP, lors de l’étape d’activation de l’acide aminé sous forme d’aminoacyl-adénylate.',
      type: 'mecanisme',
      tags: ['aminoacyl-ARNt synthétase'],
    },
    {
      id: 'ue1-code-genetique-fc-11',
      recto: 'Que désigne la règle du wobble ?',
      verso: 'La flexibilité d’appariement au niveau de la troisième position du codon, qui permet à un même ARN de transfert de reconnaître plusieurs codons synonymes.',
      type: 'definition',
      tags: ['wobble'],
    },
    {
      id: 'ue1-code-genetique-fc-12',
      recto: 'Le code génétique est-il strictement universel entre tous les compartiments cellulaires ?',
      verso: 'Non : il est quasi universel, mais le code mitochondrial présente quelques différences par rapport au code nucléaire standard.',
      type: 'definition',
      tags: ['universalité'],
    },
  ],
  qcm: [
    {
      id: 'ue1-code-genetique-qcm-01',
      enonce: 'Concernant les codons, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il existe soixante-quatre codons possibles.',
          vraie: true,
          justification: 'Exact, quatre bases à la puissance trois positions.',
        },
        {
          lettre: 'B',
          texte: 'Soixante et un codons codent pour un acide aminé.',
          vraie: true,
          justification: 'Sur les soixante-quatre codons, trois sont des codons stop (UAA, UAG, UGA) : les soixante et un restants sont des codons sens.',
        },
        {
          lettre: 'C',
          texte: 'UGA est un codon codant pour le tryptophane dans le code nucléaire standard.',
          vraie: false,
          justification: 'Faux : UGA est un codon stop dans le code nucléaire standard ; c’est UGG qui code pour le tryptophane.',
        },
        {
          lettre: 'D',
          texte: 'AUG code pour la méthionine.',
          vraie: true,
          justification: 'Exact, et sert également de codon d’initiation.',
        },
        {
          lettre: 'E',
          texte: 'Tous les acides aminés sont codés par un nombre égal de codons.',
          vraie: false,
          justification: 'Faux : ce nombre varie, de un codon pour la méthionine et le tryptophane à six codons pour certains acides aminés.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Ne pas confondre UGA, codon stop, avec UGG, codon du tryptophane.',
      difficulte: 2,
    },
    {
      id: 'ue1-code-genetique-qcm-02',
      enonce: 'Concernant l’universalité et le non-chevauchement du code génétique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le code génétique est parfaitement identique dans tous les compartiments d’une cellule eucaryote.',
          vraie: false,
          justification: 'Faux : le code mitochondrial diffère légèrement du code nucléaire standard.',
        },
        {
          lettre: 'B',
          texte: 'Le code est non chevauchant.',
          vraie: true,
          justification: 'Exact : chaque nucléotide appartient à un seul codon.',
        },
        {
          lettre: 'C',
          texte: 'Le code génétique est quasi universel entre les espèces.',
          vraie: true,
          justification: 'La correspondance codon-acide aminé est conservée chez la quasi-totalité des organismes, ce qui témoigne de son origine commune très ancienne.',
        },
        {
          lettre: 'D',
          texte: 'Un même nucléotide peut appartenir simultanément à deux codons différents.',
          vraie: false,
          justification: 'Faux : c’est justement exclu par le non-chevauchement du code.',
        },
        {
          lettre: 'E',
          texte: 'Il existe de rares exceptions à l’universalité du code génétique.',
          vraie: true,
          justification: 'Exact, notamment au niveau du génome mitochondrial.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir que l’universalité est quasi générale, non absolue.',
      difficulte: 2,
    },
    {
      id: 'ue1-code-genetique-qcm-03',
      enonce: 'Concernant le cadre de lecture, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il existe trois cadres de lecture théoriquement possibles sur un même brin.',
          vraie: true,
          justification: 'Exact, selon le nucléotide de départ choisi.',
        },
        {
          lettre: 'B',
          texte: 'Une insertion de trois nucléotides décale nécessairement le cadre de lecture en aval.',
          vraie: false,
          justification: 'Faux : une insertion multiple de trois ajoute ou retire un ou plusieurs codons entiers, sans décaler le cadre de lecture.',
        },
        {
          lettre: 'C',
          texte: 'Une délétion d’un seul nucléotide décale le cadre de lecture en aval.',
          vraie: true,
          justification: 'Exact, puisqu’il ne s’agit pas d’un multiple de trois.',
        },
        {
          lettre: 'D',
          texte: 'Le cadre de lecture est fixé par le codon d’initiation.',
          vraie: true,
          justification: 'C’est le codon AUG reconnu par le ribosome qui définit le premier triplet lu, déterminant ainsi le découpage de toute la suite du messager en codons.',
        },
        {
          lettre: 'E',
          texte: 'Une mutation par décalage du cadre de lecture n’a en général aucune conséquence sur la protéine produite.',
          vraie: false,
          justification: 'Faux : elle modifie le plus souvent radicalement la séquence protéique en aval de la mutation.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Bien distinguer les conséquences d’une mutation multiple de trois de celles d’une mutation non multiple de trois.',
      difficulte: 2,
    },
    {
      id: 'ue1-code-genetique-qcm-04',
      enonce: 'Concernant les ARN de transfert, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’anticodon est porté par la boucle anticodon.',
          vraie: true,
          justification: 'Cette boucle, opposée à l’extrémité accepteuse dans la structure en feuille de trèfle, expose le triplet complémentaire du codon pour l’appariement avec l’ARN messager.',
        },
        {
          lettre: 'B',
          texte: 'L’acide aminé est fixé à l’extrémité 5′ de l’ARN de transfert.',
          vraie: false,
          justification: 'Faux : il est fixé à l’extrémité 3′, terminée par la séquence CCA.',
        },
        {
          lettre: 'C',
          texte: 'L’anticodon s’apparie au codon de façon antiparallèle.',
          vraie: true,
          justification: 'Comme tout appariement de bases complémentaires, le brin de l’anticodon s’oriente en sens inverse du codon, sa première base appariant la troisième base du codon.',
        },
        {
          lettre: 'D',
          texte: 'La structure secondaire de l’ARN de transfert est en forme de feuille de trèfle.',
          vraie: true,
          justification: 'Les appariements intramoléculaires forment quatre bras en tige-boucle disposés autour d’un tronc central, dessinant la silhouette caractéristique d’une feuille de trèfle.',
        },
        {
          lettre: 'E',
          texte: 'Un ARN de transfert peut porter simultanément plusieurs acides aminés différents.',
          vraie: false,
          justification: 'Faux : chaque ARN de transfert ne porte qu’un seul acide aminé à la fois, correspondant à son identité.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir la localisation en 3′ de la fixation de l’acide aminé.',
      difficulte: 2,
    },
    {
      id: 'ue1-code-genetique-qcm-05',
      enonce: 'Concernant les aminoacyl-ARNt synthétases, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il en existe vingt, une pour chaque acide aminé protéinogène.',
          vraie: true,
          justification: 'À chacun des vingt acides aminés standards correspond une aminoacyl-ARNt synthétase spécifique qui reconnaît à la fois cet acide aminé et les ARN de transfert qui lui correspondent.',
        },
        {
          lettre: 'B',
          texte: 'Leur réaction consomme de l’ATP.',
          vraie: true,
          justification: 'Exact, lors de l’activation de l’acide aminé.',
        },
        {
          lettre: 'C',
          texte: 'Le ribosome peut corriger une erreur de charge d’un ARN de transfert par le mauvais acide aminé.',
          vraie: false,
          justification: 'Faux : le ribosome ne lit que l’anticodon et ne peut pas détecter une erreur de charge en acide aminé.',
        },
        {
          lettre: 'D',
          texte: 'Elles sont parfois qualifiées de second code génétique en raison de leur rôle central dans la fidélité de la traduction.',
          vraie: true,
          justification: 'C’est la reconnaissance spécifique entre chaque synthétase, son acide aminé et son ARN de transfert qui établit réellement la correspondance codon-acide aminé, le ribosome ne lisant ensuite que l’anticodon.',
        },
        {
          lettre: 'E',
          texte: 'Une même aminoacyl-ARNt synthétase peut charger indifféremment n’importe quel acide aminé sur un ARN de transfert donné.',
          vraie: false,
          justification: 'Faux : chaque synthétase est spécifique d’un seul acide aminé.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. La fidélité de la traduction repose en grande partie sur ces enzymes, en amont du ribosome.',
      difficulte: 2,
    },
    {
      id: 'ue1-code-genetique-qcm-06',
      enonce: 'Concernant la règle du wobble, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle concerne la première position du codon.',
          vraie: false,
          justification: 'Faux : elle concerne la troisième position du codon.',
        },
        {
          lettre: 'B',
          texte: 'Elle permet à un même ARN de transfert de reconnaître plusieurs codons synonymes.',
          vraie: true,
          justification: 'La tolérance d’appariement en troisième position autorise un même anticodon à s’apparier à plusieurs codons ne différant que par leur dernière base.',
        },
        {
          lettre: 'C',
          texte: 'Elle explique que le nombre d’ARN de transfert nécessaires soit inférieur au nombre de codons sens.',
          vraie: true,
          justification: 'Comme un même ARN de transfert peut décoder plusieurs codons synonymes grâce au wobble, la cellule n’a pas besoin d’un ARN de transfert distinct pour chacun des soixante et un codons sens.',
        },
        {
          lettre: 'D',
          texte: 'Les deux premières positions du codon tolèrent également des appariements non conventionnels.',
          vraie: false,
          justification: 'Faux : ce sont les deux premières positions qui suivent les règles strictes de Watson et Crick, la tolérance concerne la troisième.',
        },
        {
          lettre: 'E',
          texte: 'Le terme wobble évoque une flexibilité géométrique de l’appariement.',
          vraie: true,
          justification: 'Exact, il signifie littéralement balancement.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Bien localiser la tolérance d’appariement à la troisième position du codon.',
      difficulte: 2,
    },
  ],
};
