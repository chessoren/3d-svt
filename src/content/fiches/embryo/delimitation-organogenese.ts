import type { Fiche } from '../../types';

export const ficheDelimitationOrganogenese: Fiche = {
  id: 'embryo-delimitation-organogenese',
  ue: 'embryo',
  titre: 'Délimitation et organogenèse',
  sousTitre: 'Plicatures, somites, arcs pharyngiens et période critique du développement',
  chapitre: 'Développement embryonnaire',
  ordre: 9,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'plicature',
    'délimitation',
    'intestin primitif',
    'somite',
    'sclérotome',
    'myotome',
    'arcs pharyngiens',
    'période critique',
  ],
  objectifs: [
    "Décrire les plicatures céphalo-caudale et latérales et leur conséquence sur la forme de l’embryon.",
    "Expliquer la formation de l’intestin primitif à partir de la vésicule vitelline.",
    "Décrire la formation des somites et leurs trois dérivés.",
    "Citer l’organisation générale des arcs pharyngiens et leurs principaux dérivés.",
    "Situer la période critique de l’organogenèse dans le développement embryonnaire.",
  ],
  sections: [
    {
      id: 'plicatures-delimitation',
      titre: 'Les plicatures et la délimitation de l’embryon',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au cours de la quatrième semaine, le disque embryonnaire plat, encore ouvert sur la vésicule vitelline et la cavité amniotique, se replie sur lui-même selon deux types de plicatures qui lui donnent sa forme cylindrique définitive : c’est la délimitation.",
        },
        {
          type: 'comparaison',
          titre: 'Plicature céphalo-caudale et plicatures latérales',
          gauche: {
            titre: 'Plicature céphalo-caudale',
            points: [
              'Repliement de l’extrémité céphalique et de l’extrémité caudale du disque vers la face ventrale',
              'Rapproche la membrane pharyngienne et la membrane cloacale de la face ventrale de l’embryon',
              'Individualise l’intestin antérieur et l’intestin postérieur',
            ],
          },
          droite: {
            titre: 'Plicatures latérales',
            points: [
              'Repliement des bords latéraux du disque vers la ligne médiane ventrale',
              'Ferme progressivement la paroi ventrale du corps',
              'Individualise l’intestin moyen, encore relié à la vésicule vitelline',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Rôle de la croissance différentielle',
          texte:
            "Ces plicatures résultent principalement de la croissance différentielle rapide de l’embryon, en particulier du tube neural et des somites, par rapport à la croissance plus lente des annexes (amnios, vésicule vitelline), qui contraint le disque à s’enrouler sur lui-même.",
        },
      ],
    },
    {
      id: 'intestin-primitif',
      titre: 'Formation de l’intestin primitif',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’incorporation partielle de la partie dorsale de la vésicule vitelline au sein de l’embryon, sous l’effet des plicatures, forme l’intestin primitif, tube endodermique divisé en trois segments.",
        },
        {
          type: 'tableau',
          titre: 'Segments de l’intestin primitif',
          colonnes: ['Segment', 'Limite', 'Devenir principal ultérieur'],
          lignes: [
            ['Intestin antérieur', 'De la membrane pharyngienne au bourgeon hépatique', 'Pharynx, œsophage, estomac, duodénum proximal, foie, pancréas, voies respiratoires basses'],
            ['Intestin moyen', 'Relié à la vésicule vitelline par le canal vitellin (canal omphalo-mésentérique)', 'Duodénum distal, jéjuno-iléon, côlon droit'],
            ['Intestin postérieur', 'De l’intestin moyen à la membrane cloacale', 'Côlon gauche, rectum, partie supérieure du canal anal'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le canal vitellin, repère anatomique',
          texte:
            "Le canal vitellin (ou canal omphalo-mésentérique), qui relie transitoirement l’intestin moyen à la vésicule vitelline, s’oblitère normalement au cours du développement. Sa persistance partielle explique le diverticule de Meckel, anomalie congénitale fréquente du tube digestif.",
        },
      ],
    },
    {
      id: 'somites',
      titre: 'Les somites et leurs dérivés',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le mésoderme situé de part et d’autre du tube neural, le mésoderme paraxial, se segmente en blocs cellulaires métamériques appariés, les somites, qui apparaissent selon un gradient céphalo-caudal à partir du 20e jour de développement, au rythme approximatif de trois paires par jour, jusqu’à un total d’environ 42 à 44 paires en fin de cinquième semaine.",
        },
        {
          type: 'etapes',
          titre: 'Les trois dérivés de chaque somite',
          etapes: [
            {
              titre: 'Sclérotome',
              detail: 'Partie ventro-médiale du somite, à l’origine des vertèbres et d’une partie des côtes.',
            },
            {
              titre: 'Myotome',
              detail: 'Partie intermédiaire du somite, à l’origine des muscles squelettiques correspondants.',
            },
            {
              titre: 'Dermatome',
              detail: 'Partie dorso-latérale du somite, à l’origine du derme correspondant.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Le comptage des somites, outil de datation',
          texte:
            "Le nombre de paires de somites visibles est utilisé comme critère de datation précis de l’embryon entre le 20e et le 30e jour de développement, période durant laquelle ce nombre progresse régulièrement.",
        },
      ],
    },
    {
      id: 'arcs-pharyngiens',
      titre: 'Les arcs pharyngiens',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Sur les faces latérales de la future région cervico-céphalique apparaissent, à partir de la quatrième semaine, des renflements mésodermiques appariés séparés par des sillons : les arcs pharyngiens (ou branchiaux). Quatre arcs sont bien individualisés chez l’embryon humain ; les arcs plus caudaux sont rudimentaires et rapidement intégrés au relief cervical.",
        },
        {
          type: 'tableau',
          titre: 'Composants et dérivés des arcs pharyngiens principaux',
          colonnes: ['Arc', 'Nerf crânien associé', 'Dérivé squelettique principal'],
          lignes: [
            ['1er arc (mandibulaire)', 'Trijumeau (V)', 'Cartilage de Meckel : donne le marteau et l’enclume ; muscles masticateurs'],
            ['2e arc (hyoïdien)', 'Facial (VII)', 'Cartilage de Reichert : donne l’étrier, l’apophyse styloïde et la petite corne de l’os hyoïde ; muscles de la mimique'],
            ['3e arc', 'Glosso-pharyngien (IX)', 'Grande corne et corps de l’os hyoïde'],
            ['4e et 6e arcs', 'Vague (X)', 'Cartilages du larynx ; muscles du larynx et du pharynx'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Chaque arc, une unité complète',
          texte:
            "Chaque arc pharyngien comporte, de façon constante, un axe cartilagineux ou squelettique, un nerf crânien propre, un ou plusieurs muscles dérivés et un axe artériel : c’est cette organisation en unités répétées qui structure toute la région cervico-faciale.",
        },
      ],
    },
    {
      id: 'periode-critique',
      titre: 'Période critique du développement embryonnaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’ensemble de la période allant de la troisième à la huitième semaine de développement constitue la période embryonnaire proprement dite, durant laquelle se mettent en place les ébauches de tous les grands appareils : période dite critique, ou période de l’organogenèse, la plus sensible aux agressions tératogènes.",
        },
        {
          type: 'liste',
          items: [
            "L’ébauche cardiaque, formée précocement, devient fonctionnelle et bat dès environ le 22e jour de développement.",
            "Les bourgeons des membres apparaissent vers la fin de la quatrième semaine.",
            "L’essentiel de la morphogenèse des grands appareils (digestif, respiratoire, urogénital, nerveux, cardiovasculaire) est engagé avant la fin de la huitième semaine.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Conséquence pratique de la période critique',
          texte:
            "C’est durant cette période, souvent avant que la grossesse ne soit cliniquement reconnue, que le risque de malformation morphologique majeure en cas d’exposition à un agent tératogène est le plus élevé, ce qui justifie la prudence thérapeutique et toxicologique systématique chez toute femme en âge de procréer.",
        },
      ],
    },
  ],
  pointsCles: [
    "La délimitation résulte de deux types de plicatures, céphalo-caudale et latérales, qui donnent à l’embryon sa forme cylindrique.",
    "L’intestin primitif comporte trois segments : antérieur, moyen (relié à la vésicule vitelline par le canal vitellin) et postérieur.",
    "Les somites apparaissent à partir du 20e jour selon un gradient céphalo-caudal, au rythme approximatif de trois paires par jour.",
    "Chaque somite se différencie en sclérotome (squelette axial), myotome (muscles) et dermatome (derme).",
    "Quatre arcs pharyngiens sont bien individualisés, chacun associant un nerf crânien, un cartilage et des muscles propres.",
    "La période critique de l’organogenèse s’étend de la troisième à la huitième semaine de développement.",
    "L’ébauche cardiaque devient fonctionnelle dès environ le 22e jour de développement.",
  ],
  erreursFrequentes: [
    "Confondre plicature céphalo-caudale et plicatures latérales : la première individualise intestins antérieur et postérieur, les secondes ferment la paroi ventrale et individualisent l’intestin moyen.",
    "Oublier le rôle du canal vitellin dans la persistance possible d’un diverticule de Meckel.",
    "Confondre les trois dérivés du somite : sclérotome (squelette), myotome (muscle), dermatome (derme).",
    "Associer un mauvais nerf crânien à un arc pharyngien, en particulier confondre le nerf du premier arc (V) avec celui du deuxième (VII).",
    "Situer la période critique de l’organogenèse après la huitième semaine, alors qu’elle correspond précisément aux semaines 3 à 8.",
  ],
  mnemotechniques: [
    {
      moyen: 'Sclérotome-squelette, Myotome-muscle, Dermatome-derme',
      explication:
        'Chaque dérivé du somite commence par la même syllabe que le tissu qu’il forme : un moyen simple de ne pas les confondre.',
    },
    {
      moyen: 'V, VII, IX, X pour les quatre premiers arcs',
      explication:
        'Les nerfs crâniens associés aux quatre arcs pharyngiens principaux suivent cette séquence : trijumeau, facial, glosso-pharyngien, vague.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-delimitation-organogenese-fc-01',
      recto: 'Quels sont les deux types de plicatures qui délimitent l’embryon ?',
      verso: 'La plicature céphalo-caudale et les plicatures latérales.',
      type: 'classification',
      tags: ['délimitation'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-02',
      recto: 'Quels sont les trois segments de l’intestin primitif ?',
      verso: 'L’intestin antérieur, l’intestin moyen et l’intestin postérieur.',
      type: 'classification',
      tags: ['intestin primitif'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-03',
      recto: 'Quelle structure relie l’intestin moyen à la vésicule vitelline ?',
      verso: 'Le canal vitellin (canal omphalo-mésentérique).',
      type: 'definition',
      tags: ['canal vitellin'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-04',
      recto: 'Quelle anomalie résulte de la persistance du canal vitellin ?',
      verso: 'Le diverticule de Meckel.',
      type: 'clinique',
      tags: ['diverticule de Meckel'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-05',
      recto: 'À partir de quel jour et à quel rythme apparaissent les somites ?',
      verso: 'À partir du 20e jour de développement, au rythme approximatif de trois paires par jour.',
      type: 'chiffre',
      tags: ['somites'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-06',
      recto: 'Quels sont les trois dérivés du somite ?',
      verso: 'Le sclérotome (squelette axial), le myotome (muscles) et le dermatome (derme).',
      type: 'classification',
      tags: ['somites'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-07',
      recto: 'Combien d’arcs pharyngiens sont bien individualisés chez l’embryon humain ?',
      verso: 'Quatre arcs bien individualisés.',
      type: 'chiffre',
      tags: ['arcs pharyngiens'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-08',
      recto: 'Quel nerf crânien est associé au premier arc pharyngien ?',
      verso: 'Le nerf trijumeau (V).',
      type: 'mecanisme',
      tags: ['arcs pharyngiens'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-09',
      recto: 'Quel nerf crânien est associé au deuxième arc pharyngien ?',
      verso: 'Le nerf facial (VII).',
      type: 'mecanisme',
      tags: ['arcs pharyngiens'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-10',
      recto: 'Que donne le cartilage de Meckel ?',
      verso: 'Le marteau et l’enclume de l’oreille moyenne.',
      type: 'mecanisme',
      tags: ['cartilage de Meckel'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-11',
      recto: 'À partir de quel jour l’ébauche cardiaque devient-elle fonctionnelle ?',
      verso: 'Vers le 22e jour de développement.',
      type: 'chiffre',
      tags: ['organogenèse cardiaque'],
    },
    {
      id: 'embryo-delimitation-organogenese-fc-12',
      recto: 'Quelle est la période critique de l’organogenèse ?',
      verso: 'De la troisième à la huitième semaine de développement.',
      type: 'chiffre',
      tags: ['période critique'],
    },
  ],
  qcm: [
    {
      id: 'embryo-delimitation-organogenese-qcm-01',
      enonce: 'Concernant les plicatures et la délimitation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La plicature céphalo-caudale individualise l’intestin antérieur et l’intestin postérieur.', vraie: true, justification: 'Exact, en rapprochant les membranes pharyngienne et cloacale de la face ventrale.' },
        { lettre: 'B', texte: 'Les plicatures latérales ferment la paroi ventrale du corps.', vraie: true, justification: 'Exact, elles rapprochent les bords latéraux du disque vers la ligne médiane.' },
        { lettre: 'C', texte: 'La délimitation transforme un embryon cylindrique en disque plat.', vraie: false, justification: 'C’est l’inverse : la délimitation transforme le disque plat en embryon cylindrique.' },
        { lettre: 'D', texte: 'Ces plicatures résultent notamment de la croissance différentielle du tube neural.', vraie: true, justification: 'Exact, sa croissance rapide contribue au repliement du disque.' },
        { lettre: 'E', texte: 'La délimitation se déroule avant la gastrulation.', vraie: false, justification: 'La délimitation se déroule après la gastrulation, au cours de la quatrième semaine.' },
      ],
      correction: 'Réponses exactes : A, B et D. La délimitation transforme le disque plat en embryon cylindrique après la gastrulation.',
      difficulte: 2,
    },
    {
      id: 'embryo-delimitation-organogenese-qcm-02',
      enonce: 'Concernant l’intestin primitif, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’intestin moyen reste relié à la vésicule vitelline par le canal vitellin.', vraie: true, justification: 'Exact, ce canal s’oblitère normalement au cours du développement.' },
        { lettre: 'B', texte: 'L’intestin antérieur donne notamment l’œsophage et l’estomac.', vraie: true, justification: 'Exact, parmi ses nombreux dérivés.' },
        { lettre: 'C', texte: 'L’intestin postérieur donne le foie et le pancréas.', vraie: false, justification: 'Le foie et le pancréas dérivent de l’intestin antérieur, non de l’intestin postérieur.' },
        { lettre: 'D', texte: 'Le diverticule de Meckel résulte d’une persistance anormale du canal vitellin.', vraie: true, justification: 'Exact, c’est l’anomalie classiquement associée.' },
        { lettre: 'E', texte: 'L’intestin primitif est d’origine mésodermique.', vraie: false, justification: 'L’intestin primitif est un tube endodermique, non mésodermique.' },
      ],
      correction: 'Réponses exactes : A, B et D. L’intestin primitif, d’origine endodermique, se subdivise en trois segments aux devenirs distincts.',
      difficulte: 2,
    },
    {
      id: 'embryo-delimitation-organogenese-qcm-03',
      enonce: 'Concernant les somites, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ils dérivent du mésoderme paraxial.', vraie: true, justification: 'Exact, situé de part et d’autre du tube neural.' },
        { lettre: 'B', texte: 'Ils apparaissent selon un gradient caudo-céphalique.', vraie: false, justification: 'Ils apparaissent selon un gradient céphalo-caudal, de la tête vers la queue.' },
        { lettre: 'C', texte: 'Le sclérotome donne les vertèbres.', vraie: true, justification: 'Exact, c’est la partie ventro-médiale du somite.' },
        { lettre: 'D', texte: 'Le dermatome donne les muscles squelettiques.', vraie: false, justification: 'Le dermatome donne le derme ; ce sont les myotomes qui donnent les muscles squelettiques.' },
        { lettre: 'E', texte: 'Le comptage des somites permet de dater l’embryon entre le 20e et le 30e jour.', vraie: true, justification: 'Exact, c’est un critère de datation classique de cette période.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer les trois dérivés somitiques et leur gradient d’apparition céphalo-caudal.',
      difficulte: 2,
    },
    {
      id: 'embryo-delimitation-organogenese-qcm-04',
      enonce: 'Concernant les arcs pharyngiens, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Chaque arc comporte un nerf crânien propre.', vraie: true, justification: 'Exact, c’est l’une des constantes de l’organisation des arcs.' },
        { lettre: 'B', texte: 'Le nerf du premier arc est le nerf facial.', vraie: false, justification: 'Le nerf du premier arc est le trijumeau (V) ; le facial (VII) est associé au deuxième arc.' },
        { lettre: 'C', texte: 'Le cartilage de Reichert donne notamment l’étrier.', vraie: true, justification: 'Exact, dérivé du deuxième arc pharyngien.' },
        { lettre: 'D', texte: 'Quatre arcs pharyngiens sont bien individualisés chez l’embryon humain.', vraie: true, justification: 'Exact, les arcs plus caudaux sont rudimentaires.' },
        { lettre: 'E', texte: 'Le troisième arc est associé au nerf vague.', vraie: false, justification: 'Le troisième arc est associé au nerf glosso-pharyngien (IX) ; le nerf vague (X) est associé aux quatrième et sixième arcs.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir la correspondance précise entre chaque arc et son nerf crânien.',
      difficulte: 3,
    },
    {
      id: 'embryo-delimitation-organogenese-qcm-05',
      enonce: 'Concernant la période critique de l’organogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle s’étend de la troisième à la huitième semaine de développement.', vraie: true, justification: 'Exact, c’est la définition classique de la période embryonnaire critique.' },
        { lettre: 'B', texte: 'C’est la période la plus sensible aux agents tératogènes.', vraie: true, justification: 'Exact, en raison de la mise en place simultanée de nombreuses ébauches d’organes.' },
        { lettre: 'C', texte: 'Elle débute après la naissance.', vraie: false, justification: 'Elle se situe entièrement avant la naissance, au cours du développement prénatal.' },
        { lettre: 'D', texte: 'L’ébauche cardiaque devient fonctionnelle dès cette période.', vraie: true, justification: 'Exact, dès environ le 22e jour de développement, en plein dans cette fenêtre.' },
        { lettre: 'E', texte: 'Cette période est souvent antérieure à la reconnaissance clinique de la grossesse.', vraie: true, justification: 'Exact, ce qui justifie la prudence thérapeutique chez toute femme en âge de procréer.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. La période critique précède souvent le diagnostic clinique de grossesse.',
      difficulte: 2,
    },
    {
      id: 'embryo-delimitation-organogenese-qcm-06',
      enonce: 'Concernant les grandes étapes générales de la quatrième semaine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les bourgeons des membres apparaissent vers la fin de la quatrième semaine.', vraie: true, justification: 'Exact, c’est la chronologie classiquement retenue.' },
        { lettre: 'B', texte: 'La délimitation précède la gastrulation dans le temps.', vraie: false, justification: 'La délimitation succède à la gastrulation, qui a lieu au cours de la troisième semaine.' },
        { lettre: 'C', texte: 'Les somites commencent à apparaître avant la fin de la troisième semaine.', vraie: true, justification: 'Exact, dès le 20e jour, donc en toute fin de troisième semaine.' },
        { lettre: 'D', texte: 'L’organogenèse des grands appareils est achevée avant la fin de la quatrième semaine.', vraie: false, justification: 'L’essentiel de l’organogenèse s’étend jusqu’à la fin de la huitième semaine, non de la seule quatrième.' },
        { lettre: 'E', texte: 'Le repliement de l’embryon contribue à rapprocher les membranes pharyngienne et cloacale de la face ventrale.', vraie: true, justification: 'Exact, conséquence de la plicature céphalo-caudale.' },
      ],
      correction: 'Réponses exactes : A, C et E. L’organogenèse se poursuit bien au-delà de la seule quatrième semaine.',
      difficulte: 3,
    },
  ],
};
