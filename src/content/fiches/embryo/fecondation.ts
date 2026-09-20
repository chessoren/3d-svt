import type { Fiche } from '../../types';

export const ficheFecondation: Fiche = {
  id: 'embryo-fecondation',
  ue: 'embryo',
  titre: 'La fécondation',
  sousTitre: 'De la capacitation à l’amphimixie',
  chapitre: 'Reproduction et fécondation',
  ordre: 4,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'capacitation',
    'réaction acrosomique',
    'zone pellucide',
    'blocage de la polyspermie',
    'amphimixie',
    'pronucléus',
    'ampoule tubaire',
    'détermination du sexe génétique',
  ],
  objectifs: [
    "Situer le lieu et le délai habituels de la fécondation dans l’espèce humaine.",
    "Décrire la capacitation et la réaction acrosomique du spermatozoïde.",
    "Expliquer les mécanismes de reconnaissance gamétique et de fusion des membranes.",
    "Décrire le blocage de la polyspermie et l’achèvement de la méiose ovocytaire.",
    "Expliquer l’amphimixie et la détermination du sexe génétique du zygote.",
  ],
  sections: [
    {
      id: 'lieu-et-conditions',
      titre: 'Lieu et conditions de la fécondation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La fécondation est la fusion d’un spermatozoïde et d’un ovocyte II, aboutissant à la formation d’un zygote diploïde. Chez l’être humain, elle a lieu habituellement dans l’ampoule tubaire, portion élargie de la trompe utérine, dans les heures qui suivent l’ovulation.",
        },
        {
          type: 'tableau',
          titre: 'Fenêtre de fécondabilité des gamètes',
          colonnes: ['Gamète', 'Durée de survie et de fécondabilité utile'],
          lignes: [
            ['Ovocyte II', 'Environ 12 à 24 heures après l’ovulation'],
            ['Spermatozoïde dans les voies génitales féminines', 'Plusieurs jours, avec un maximum de fécondance classiquement estimé à 3 à 5 jours'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un trajet sélectif',
          texte:
            "Sur les centaines de millions de spermatozoïdes déposés lors d’un rapport, seuls quelques milliers atteignent l’ampoule tubaire, après avoir franchi le col utérin, la cavité utérine puis la jonction utéro-tubaire, qui exercent une sélection successive.",
        },
      ],
    },
    {
      id: 'capacitation-traversee',
      titre: 'Capacitation et traversée des enveloppes ovocytaires',
      blocs: [
        {
          type: 'definition',
          terme: 'Capacitation',
          definition:
            "Ensemble des modifications physiologiques que subit le spermatozoïde dans les voies génitales féminines, qui le rendent apte à féconder : déstabilisation de la membrane plasmique de la tête, modification de sa composition lipidique, hyperactivation du battement flagellaire. La capacitation dure de l’ordre de plusieurs heures et ne peut avoir lieu qu’in vivo ou dans des conditions de culture qui la miment in vitro.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la rencontre gamétique',
          etapes: [
            {
              titre: 'Traversée de la corona radiata',
              detail:
                "Le spermatozoïde capacité traverse les cellules de la corona radiata entourant l’ovocyte, aidé par son hyperactivité flagellaire et par des enzymes.",
            },
            {
              titre: 'Reconnaissance de la zone pellucide',
              detail:
                "Une glycoprotéine de la zone pellucide, la ZP3, est reconnue par un récepteur spécifique de la membrane du spermatozoïde : cette reconnaissance est un déterminant majeur de la spécificité d’espèce de la fécondation.",
            },
            {
              titre: 'Réaction acrosomique',
              detail:
                "La liaison à la zone pellucide déclenche l’exocytose du contenu de l’acrosome, qui libère des enzymes hydrolytiques et expose des protéines de fusion permettant la traversée de la zone pellucide.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre capacitation et réaction acrosomique',
          texte:
            "La capacitation est un préalable indispensable qui rend le spermatozoïde apte à réagir ; la réaction acrosomique est l’événement déclenché par le contact avec la zone pellucide qui permet concrètement sa traversée. Un spermatozoïde non capacité ne peut pas déclencher de réaction acrosomique efficace.",
        },
      ],
    },
    {
      id: 'fusion-blocage-polyspermie',
      titre: 'Fusion gamétique et blocage de la polyspermie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Après avoir traversé la zone pellucide, le spermatozoïde atteint l’espace périvitellin puis fusionne avec la membrane plasmique de l’ovocyte, au niveau de sa région post-acrosomique équatoriale. Cette fusion active l’ovocyte et déclenche une cascade de mécanismes qui empêchent la pénétration d’un second spermatozoïde : c’est le blocage de la polyspermie.",
        },
        {
          type: 'etapes',
          titre: 'Les deux temps du blocage de la polyspermie',
          etapes: [
            {
              titre: 'Blocage rapide, électrique',
              detail:
                'Dépolarisation transitoire de la membrane plasmique ovocytaire dans les toutes premières secondes suivant la fusion, empêchant momentanément la fusion d’autres spermatozoïdes.',
            },
            {
              titre: 'Blocage lent, la réaction corticale',
              detail:
                "Exocytose des granules corticaux sous-membranaires, dont le contenu enzymatique modifie les glycoprotéines de la zone pellucide (réaction de zone), la rendant imperméable et non reconnaissable par d’autres spermatozoïdes.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Conséquence d’un échec du blocage',
          texte:
            "Une polyspermie, c’est-à-dire la pénétration de plusieurs spermatozoïdes, aboutit à un zygote polyploïde, non viable et rapidement éliminé. Le blocage de la polyspermie est donc un mécanisme essentiel à la formation d’un zygote diploïde normal.",
        },
      ],
    },
    {
      id: 'achevement-meiose-amphimixie',
      titre: 'Achèvement de la méiose et amphimixie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’activation ovocytaire par le spermatozoïde lève le second blocage méiotique : l’ovocyte II, jusque-là bloqué en métaphase II, achève sa deuxième division de méiose, expulsant le second globule polaire et devenant un ovotide, dont le noyau haploïde se réorganise en pronucléus féminin.",
        },
        {
          type: 'paragraphe',
          texte:
            "Parallèlement, le noyau du spermatozoïde se décondense dans le cytoplasme ovocytaire, ses protamines étant remplacées par des histones d’origine maternelle, pour former le pronucléus mâle. Les deux pronucléus, chacun haploïde, migrent l’un vers l’autre au centre de l’ovocyte fécondé.",
        },
        {
          type: 'definition',
          terme: 'Amphimixie',
          definition:
            "Rapprochement, puis dissolution des enveloppes des deux pronucléus mâle et femelle, et mélange de leurs chromosomes sur le fuseau de la première division mitotique, rétablissant la diploïdie et constituant le génome unique du zygote.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Visualisation des pronucléus',
          texte:
            "En fécondation in vitro, la présence de deux pronucléus environ 16 à 18 heures après l’insémination est le critère morphologique classiquement utilisé pour confirmer une fécondation normale, avant que l’amphimixie ne les fasse disparaître au profit du fuseau mitotique.",
        },
      ],
    },
    {
      id: 'consequences-fecondation',
      titre: 'Conséquences de la fécondation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La fécondation restaure la diploïdie (2n chromosomes), détermine le sexe génétique du futur individu, engendre une nouvelle combinaison génétique par le brassage inter-chromosomique et intra-chromosomique de la méiose, et déclenche la première division de segmentation du zygote.",
        },
        {
          type: 'tableau',
          titre: 'Détermination du sexe génétique',
          colonnes: ['Spermatozoïde fécondant', 'Constitution chromosomique du zygote', 'Sexe génétique'],
          lignes: [
            ['Porteur d’un chromosome X', '46, XX', 'Féminin'],
            ['Porteur d’un chromosome Y', '46, XY', 'Masculin'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'L’ovocyte est toujours porteur d’un X',
          texte:
            "L’ovocyte II, issu d’une méiose, est toujours haploïde porteur d’un chromosome X. C’est donc le spermatozoïde fécondant, porteur d’un X ou d’un Y, qui détermine le sexe génétique du zygote.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repères temporels',
          texte:
            "Capacitation : de l’ordre de plusieurs heures. Fécondation : dans les 24 heures suivant l’ovulation, dans l’ampoule tubaire. Visualisation des deux pronucléus : environ 16 à 18 heures après la fécondation. Première division de segmentation : dans les 24 à 30 heures suivant la fécondation.",
        },
      ],
    },
  ],
  pointsCles: [
    "La fécondation a lieu dans l’ampoule tubaire, habituellement dans les 24 heures suivant l’ovulation.",
    "La capacitation, dans les voies génitales féminines, rend le spermatozoïde apte à réagir à la zone pellucide.",
    "La liaison à la glycoprotéine ZP3 déclenche la réaction acrosomique, qui permet la traversée de la zone pellucide.",
    "Le blocage de la polyspermie comporte un temps électrique rapide puis une réaction corticale qui modifie la zone pellucide.",
    "La fusion gamétique lève le second blocage méiotique : l’ovocyte II achève sa méiose et expulse le second globule polaire.",
    "L’amphimixie est la fusion des deux pronucléus haploïdes, qui rétablit la diploïdie du zygote.",
    "Le sexe génétique dépend du type de spermatozoïde fécondant, l’ovocyte étant toujours porteur d’un chromosome X.",
  ],
  erreursFrequentes: [
    "Confondre capacitation et réaction acrosomique : la capacitation est un préalable, la réaction acrosomique est déclenchée par le contact avec la zone pellucide.",
    "Croire que le blocage de la polyspermie ne comporte qu’un seul mécanisme, alors qu’il associe un temps électrique rapide et une réaction corticale plus lente.",
    "Penser que l’ovocyte est fécondé encore bloqué en prophase I : il est déjà en métaphase II depuis l’ovulation.",
    "Oublier que c’est la fécondation, et non l’ovulation, qui lève le second blocage méiotique.",
    "Attribuer la détermination du sexe génétique à l’ovocyte, qui est toujours porteur d’un chromosome X.",
    "Confondre le lieu de la fécondation (ampoule tubaire) avec le lieu de la nidation (cavité utérine).",
  ],
  mnemotechniques: [
    {
      moyen: 'Capacitation avant, acrosome après',
      explication:
        'La capacitation précède et conditionne la réaction acrosomique, qui a lieu au contact de la zone pellucide.',
    },
    {
      moyen: 'X toujours, Y parfois',
      explication:
        'L’ovocyte apporte toujours un X ; c’est le spermatozoïde, porteur d’un X ou d’un Y, qui détermine le sexe génétique.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-fecondation-fc-01',
      recto: 'Où a lieu habituellement la fécondation chez l’être humain ?',
      verso: 'Dans l’ampoule tubaire, portion élargie de la trompe utérine.',
      type: 'definition',
      tags: ['lieu de fécondation'],
    },
    {
      id: 'embryo-fecondation-fc-02',
      recto: 'Qu’est-ce que la capacitation ?',
      verso: 'L’ensemble des modifications du spermatozoïde dans les voies génitales féminines qui le rendent apte à féconder.',
      type: 'definition',
      tags: ['capacitation'],
    },
    {
      id: 'embryo-fecondation-fc-03',
      recto: 'Quelle glycoprotéine de la zone pellucide est reconnue par le spermatozoïde ?',
      verso: 'La ZP3.',
      type: 'mecanisme',
      tags: ['zone pellucide', 'ZP3'],
    },
    {
      id: 'embryo-fecondation-fc-04',
      recto: 'Qu’est-ce que la réaction acrosomique ?',
      verso: 'L’exocytose du contenu de l’acrosome, déclenchée par la liaison à la zone pellucide, qui permet sa traversée.',
      type: 'mecanisme',
      tags: ['réaction acrosomique'],
    },
    {
      id: 'embryo-fecondation-fc-05',
      recto: 'Quels sont les deux temps du blocage de la polyspermie ?',
      verso: 'Un blocage rapide électrique (dépolarisation membranaire), puis un blocage lent par réaction corticale (réaction de zone).',
      type: 'mecanisme',
      tags: ['polyspermie'],
    },
    {
      id: 'embryo-fecondation-fc-06',
      recto: 'Que devient l’ovocyte II après la fusion avec le spermatozoïde ?',
      verso: 'Il achève sa méiose II, expulse le second globule polaire et forme le pronucléus féminin.',
      type: 'mecanisme',
      tags: ['méiose'],
    },
    {
      id: 'embryo-fecondation-fc-07',
      recto: 'Que devient le noyau du spermatozoïde dans le cytoplasme ovocytaire ?',
      verso: 'Il se décondense et forme le pronucléus mâle.',
      type: 'mecanisme',
      tags: ['pronucléus'],
    },
    {
      id: 'embryo-fecondation-fc-08',
      recto: 'Définir l’amphimixie.',
      verso: 'La fusion des deux pronucléus haploïdes, mâle et femelle, qui rétablit la diploïdie du zygote.',
      type: 'definition',
      tags: ['amphimixie'],
    },
    {
      id: 'embryo-fecondation-fc-09',
      recto: 'Qui détermine le sexe génétique du zygote ?',
      verso: 'Le spermatozoïde fécondant, porteur d’un chromosome X ou Y ; l’ovocyte est toujours porteur d’un X.',
      type: 'mecanisme',
      tags: ['détermination du sexe'],
    },
    {
      id: 'embryo-fecondation-fc-10',
      recto: 'Combien de temps l’ovocyte II reste-t-il fécondable après l’ovulation ?',
      verso: 'Environ 12 à 24 heures.',
      type: 'chiffre',
      tags: ['fécondabilité'],
    },
    {
      id: 'embryo-fecondation-fc-11',
      recto: 'Quel critère morphologique confirme une fécondation en fécondation in vitro ?',
      verso: 'La visualisation de deux pronucléus, environ 16 à 18 heures après l’insémination.',
      type: 'clinique',
      tags: ['FIV', 'pronucléus'],
    },
    {
      id: 'embryo-fecondation-fc-12',
      recto: 'Que provoque une polyspermie ?',
      verso: 'Un zygote polyploïde, non viable, rapidement éliminé.',
      type: 'clinique',
      tags: ['polyspermie'],
    },
  ],
  qcm: [
    {
      id: 'embryo-fecondation-qcm-01',
      enonce: 'Concernant le lieu et les conditions de la fécondation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La fécondation a lieu habituellement dans l’ampoule tubaire.', vraie: true, justification: 'Exact, c’est le site habituel de la fécondation.' },
        { lettre: 'B', texte: 'L’ovocyte II reste fécondable plusieurs jours après l’ovulation.', vraie: false, justification: 'Sa fenêtre de fécondabilité est courte, de l’ordre de 12 à 24 heures.' },
        { lettre: 'C', texte: 'Les spermatozoïdes peuvent rester fécondants plusieurs jours dans les voies génitales féminines.', vraie: true, justification: 'Exact, classiquement 3 à 5 jours.' },
        { lettre: 'D', texte: 'Tous les spermatozoïdes éjaculés atteignent l’ampoule tubaire.', vraie: false, justification: 'Seule une infime fraction parvient jusqu’à l’ampoule, après sélection successive au col, à l’utérus et à la jonction utéro-tubaire.' },
        { lettre: 'E', texte: 'La fécondation a lieu dans la cavité utérine.', vraie: false, justification: 'Elle a lieu dans la trompe utérine, non dans la cavité utérine.' },
      ],
      correction: 'Réponses exactes : A et C. Retenir l’asymétrie de durée de vie entre ovocyte et spermatozoïdes.',
      difficulte: 1,
    },
    {
      id: 'embryo-fecondation-qcm-02',
      enonce: 'Concernant la capacitation et la réaction acrosomique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La capacitation a lieu dans les voies génitales féminines.', vraie: true, justification: 'Exact, elle nécessite le contact avec les sécrétions des voies génitales féminines.' },
        { lettre: 'B', texte: 'La réaction acrosomique précède la capacitation.', vraie: false, justification: 'C’est l’inverse : la capacitation est un préalable indispensable à la réaction acrosomique.' },
        { lettre: 'C', texte: 'La réaction acrosomique est déclenchée par la liaison à la ZP3.', vraie: true, justification: 'Exact, cette reconnaissance moléculaire déclenche l’exocytose acrosomique.' },
        { lettre: 'D', texte: 'La réaction acrosomique libère le contenu enzymatique de l’acrosome.', vraie: true, justification: 'Exact, ces enzymes participent à la traversée de la zone pellucide.' },
        { lettre: 'E', texte: 'Un spermatozoïde non capacité peut féconder normalement.', vraie: false, justification: 'La capacitation est indispensable à une réaction acrosomique efficace et donc à la fécondation.' },
      ],
      correction: 'Réponses exactes : A, C et D. La capacitation conditionne la réaction acrosomique.',
      difficulte: 2,
    },
    {
      id: 'embryo-fecondation-qcm-03',
      enonce: 'Concernant le blocage de la polyspermie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il comporte un temps électrique rapide.', vraie: true, justification: 'Exact, une dépolarisation membranaire transitoire dans les premières secondes.' },
        { lettre: 'B', texte: 'La réaction corticale modifie les propriétés de la zone pellucide.', vraie: true, justification: 'Exact, c’est la réaction de zone, qui la rend non reconnaissable par d’autres spermatozoïdes.' },
        { lettre: 'C', texte: 'Un échec du blocage de la polyspermie est sans conséquence pour le zygote.', vraie: false, justification: 'Il conduit à un zygote polyploïde, non viable.' },
        { lettre: 'D', texte: 'Les granules corticaux sont libérés par exocytose.', vraie: true, justification: 'Exact, c’est le mécanisme de la réaction corticale.' },
        { lettre: 'E', texte: 'Le blocage électrique est plus tardif que la réaction corticale.', vraie: false, justification: 'C’est l’inverse : le blocage électrique est immédiat, la réaction corticale est plus lente.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir la chronologie : blocage électrique rapide puis réaction corticale.',
      difficulte: 2,
    },
    {
      id: 'embryo-fecondation-qcm-04',
      enonce: 'Concernant l’achèvement de la méiose et l’amphimixie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La fusion gamétique lève le second blocage méiotique de l’ovocyte.', vraie: true, justification: 'Exact, l’ovocyte II bloqué en métaphase II achève alors sa méiose.' },
        { lettre: 'B', texte: 'L’achèvement de la méiose II s’accompagne de l’expulsion d’un second globule polaire.', vraie: true, justification: 'Exact, comme lors de toute deuxième division méiotique inégale.' },
        { lettre: 'C', texte: 'Le pronucléus mâle se forme par décondensation du noyau spermatique.', vraie: true, justification: 'Exact, avec remplacement des protamines par des histones d’origine maternelle.' },
        { lettre: 'D', texte: 'L’amphimixie précède la fusion des membranes gamétiques.', vraie: false, justification: 'L’amphimixie est postérieure à la fusion des membranes : elle correspond à la fusion des pronucléus, formés après cette fusion.' },
        { lettre: 'E', texte: 'L’amphimixie rétablit la diploïdie du zygote.', vraie: true, justification: 'Exact, par fusion des deux jeux haploïdes de chromosomes.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Bien situer l’amphimixie après la fusion membranaire et l’achèvement de la méiose.',
      difficulte: 2,
    },
    {
      id: 'embryo-fecondation-qcm-05',
      enonce: 'Concernant la détermination du sexe génétique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ovocyte II peut être porteur d’un chromosome X ou d’un chromosome Y.', vraie: false, justification: 'L’ovocyte II est toujours porteur d’un chromosome X.' },
        { lettre: 'B', texte: 'Un zygote 46, XY résulte de la fécondation par un spermatozoïde porteur d’un Y.', vraie: true, justification: 'Exact, c’est le spermatozoïde qui détermine le sexe génétique.' },
        { lettre: 'C', texte: 'Le sexe génétique est déterminé au moment de l’amphimixie.', vraie: true, justification: 'Exact, c’est lors de la constitution du génome zygotique diploïde que le sexe chromosomique est fixé.' },
        { lettre: 'D', texte: 'La probabilité théorique d’obtenir un zygote XY est identique à celle d’obtenir un zygote XX.', vraie: true, justification: 'Exact, en théorie, la moitié des spermatozoïdes portent un X et l’autre moitié un Y.' },
        { lettre: 'E', texte: 'Le sexe génétique peut être modifié après la fécondation par des facteurs hormonaux.', vraie: false, justification: 'Le sexe génétique, chromosomique, est fixé à la fécondation ; seule la différenciation phénotypique peut être influencée en aval.' },
      ],
      correction: 'Réponses exactes : B, C et D. Bien distinguer le sexe génétique, fixé à la fécondation, du sexe phénotypique.',
      difficulte: 2,
    },
    {
      id: 'embryo-fecondation-qcm-06',
      enonce: 'Concernant les conséquences générales de la fécondation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle restaure la diploïdie du futur individu.', vraie: true, justification: 'Exact, par fusion des deux pronucléus haploïdes.' },
        { lettre: 'B', texte: 'Elle déclenche la première division de segmentation.', vraie: true, justification: 'Exact, le zygote entame ses divisions mitotiques peu après la fécondation.' },
        { lettre: 'C', texte: 'Elle a lieu après l’implantation dans l’endomètre.', vraie: false, justification: 'La fécondation précède largement l’implantation, qui survient environ une semaine plus tard.' },
        { lettre: 'D', texte: 'Elle contribue au brassage génétique de l’espèce.', vraie: true, justification: 'Exact, en combinant deux génomes issus de méioses indépendantes.' },
        { lettre: 'E', texte: 'Elle se produit systématiquement dans la cavité utérine.', vraie: false, justification: 'Elle se produit dans l’ampoule tubaire, non dans la cavité utérine.' },
      ],
      correction: 'Réponses exactes : A, B et D. La fécondation précède largement l’implantation dans le temps et dans l’espace.',
      difficulte: 1,
    },
  ],
};
