import type { Fiche } from '../../types';

export const ficheRelationsDoseEffet: Fiche = {
  id: 'ue6-relations-dose-effet',
  ue: 'ue6',
  titre: 'Relations dose-effet',
  sousTitre: 'Courbes graduées et quantales, DE50, DL50, index thérapeutique, tolérance et dépendance',
  chapitre: 'Pharmacodynamie',
  ordre: 8,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'courbe dose-effet',
    'courbe quantale',
    'DE50',
    'DL50',
    'index thérapeutique',
    'marge thérapeutique',
    'tolérance',
    'tachyphylaxie',
    'dépendance',
  ],
  objectifs: [
    'Distinguer courbe dose-effet graduée et courbe dose-effet quantale.',
    'Définir la DE50 et la DL50.',
    'Calculer et interpréter l’index thérapeutique.',
    'Différencier tolérance, tachyphylaxie et dépendance.',
    'Expliquer les enjeux cliniques de la marge thérapeutique étroite.',
  ],
  sections: [
    {
      id: 'courbe-graduee',
      titre: 'Courbe dose-effet graduée',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La courbe dose-effet graduée représente l’intensité d’un effet pharmacologique mesurable de façon continue, comme la baisse de pression artérielle ou le pourcentage d’occupation des récepteurs, en fonction de la dose ou de la concentration du médicament, chez un individu ou un système donné.",
        },
        {
          type: 'liste',
          items: [
            'La courbe dose-effet graduée a typiquement une forme sigmoïde lorsque la dose est représentée sur une échelle logarithmique.',
            'Elle permet de déterminer l’effet maximal (Emax) que le médicament peut produire, quelle que soit la dose administrée.',
            'Elle permet également de déterminer la puissance du médicament, reflétée par la dose nécessaire pour obtenir un effet donné.',
          ],
        },
        {
          type: 'definition',
          terme: 'Puissance',
          definition:
            "Caractéristique d’un médicament reflétant la dose ou la concentration nécessaire pour produire un effet donné : un médicament plus puissant nécessite une dose plus faible pour obtenir le même effet qu’un médicament moins puissant, sans que cela présage de son efficacité maximale.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Puissance et efficacité maximale sont indépendantes',
          texte:
            "Un médicament peut être plus puissant qu’un autre (effet obtenu à dose plus faible) sans être plus efficace (effet maximal atteignable). Un agoniste partiel peut ainsi être puissant, en agissant à faible dose, tout en ayant une efficacité maximale inférieure à celle d’un agoniste plein.",
        },
      ],
    },
    {
      id: 'courbe-quantale',
      titre: 'Courbe dose-effet quantale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La courbe dose-effet quantale représente, dans une population d’individus, le pourcentage de sujets présentant un effet tout ou rien (présent ou absent, comme la disparition d’une douleur ou la survenue d’un décès) en fonction de la dose administrée.",
        },
        {
          type: 'definition',
          terme: 'DE50 (dose efficace médiane)',
          definition:
            "Dose de médicament produisant l’effet thérapeutique recherché chez 50 % des sujets d’une population donnée, déterminée à partir d’une courbe dose-effet quantale.",
        },
        {
          type: 'definition',
          terme: 'DL50 (dose létale médiane)',
          definition:
            "Dose de médicament provoquant le décès de 50 % des sujets d’une population donnée, généralement déterminée expérimentalement chez l’animal lors des études précliniques de toxicité.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre courbe graduée et courbe quantale',
          texte:
            "La courbe graduée décrit l’intensité d’un effet continu chez un individu ou un système donné, tandis que la courbe quantale décrit la proportion d’individus répondant par un effet tout ou rien au sein d’une population. Ce sont deux outils complémentaires mais conceptuellement distincts.",
        },
      ],
    },
    {
      id: 'index-therapeutique',
      titre: 'Index et marge thérapeutiques',
      blocs: [
        {
          type: 'definition',
          terme: 'Index thérapeutique',
          definition:
            "Rapport entre la dose toxique (classiquement la DL50 chez l’animal, ou une dose toxique de référence chez l’homme) et la dose efficace (classiquement la DE50). Plus l’index thérapeutique est élevé, plus la marge de sécurité théorique du médicament est grande.",
        },
        {
          type: 'formule',
          expression: 'Index thérapeutique = DL50 / DE50',
          legende:
            "Formule classique de l’index thérapeutique, calculée à partir des courbes dose-effet quantales de toxicité et d’efficacité.",
        },
        {
          type: 'definition',
          terme: 'Marge thérapeutique (fenêtre thérapeutique)',
          definition:
            "Intervalle de concentrations plasmatiques compris entre la concentration minimale efficace et la concentration minimale toxique, à l’intérieur duquel le traitement est à la fois efficace et globalement bien toléré.",
        },
        {
          type: 'tableau',
          titre: 'Marge thérapeutique étroite : conséquences pratiques',
          colonnes: ['Conséquence', 'Explication'],
          lignes: [
            ['Surveillance biologique rapprochée', 'Un dosage plasmatique régulier permet de vérifier que la concentration reste dans la marge thérapeutique'],
            ['Sensibilité accrue aux interactions médicamenteuses', 'Une faible variation de concentration peut suffire à sortir de la marge thérapeutique'],
            ['Adaptation posologique individualisée', 'La posologie doit souvent être ajustée selon des paramètres cliniques ou biologiques propres au patient'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Exemples classiques de marge thérapeutique étroite',
          texte:
            "Certains médicaments comme le lithium, la digoxine, la warfarine ou certains aminosides sont connus pour leur marge thérapeutique étroite, imposant une surveillance biologique rapprochée et une vigilance particulière lors de toute modification de traitement associé.",
        },
      ],
    },
    {
      id: 'tolerance-tachyphylaxie',
      titre: 'Tolérance et tachyphylaxie',
      blocs: [
        {
          type: 'definition',
          terme: 'Tolérance',
          definition:
            "Diminution progressive de l’effet d’un médicament après administration répétée sur une durée prolongée, imposant une augmentation de la dose pour obtenir le même effet initial. Elle peut être d’origine pharmacocinétique, par exemple par induction enzymatique, ou d’origine pharmacodynamique, par exemple par désensibilisation des récepteurs.",
        },
        {
          type: 'definition',
          terme: 'Tachyphylaxie',
          definition:
            "Forme particulière de tolérance s’installant très rapidement, parfois dès les administrations répétées successives sur un intervalle de temps court, entraînant une diminution rapide de l’effet du médicament.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison tolérance et tachyphylaxie',
          colonnes: ['Caractéristique', 'Tolérance', 'Tachyphylaxie'],
          lignes: [
            ['Délai d’installation', 'Progressif, sur plusieurs jours à semaines', 'Très rapide, parfois en quelques heures ou administrations'],
            ['Mécanisme typique', 'Induction enzymatique, désensibilisation progressive des récepteurs', 'Déplétion rapide d’un médiateur endogène, désensibilisation rapide du récepteur'],
            ['Exemple classique', 'Opioïdes, dérivés nitrés', 'Amines sympathomimétiques indirectes comme l’éphédrine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la différence',
          texte:
            "La tachyphylaxie peut être vue comme une tolérance accélérée : le mécanisme sous-jacent est proche, mais la rapidité d’installation distingue les deux notions, la tachyphylaxie se manifestant sur une échelle de temps beaucoup plus courte que la tolérance classique.",
        },
      ],
    },
    {
      id: 'dependance',
      titre: 'Dépendance',
      blocs: [
        {
          type: 'definition',
          terme: 'Dépendance physique',
          definition:
            "État d’adaptation physiologique de l’organisme à la présence répétée d’un médicament, se manifestant par un syndrome de sevrage à l’arrêt brutal du traitement ou à l’administration d’un antagoniste spécifique.",
        },
        {
          type: 'definition',
          terme: 'Dépendance psychique',
          definition:
            "Besoin compulsif de consommer une substance pour obtenir un effet plaisant ou pour éviter un état de malaise psychique, indépendamment de tout phénomène de sevrage physique objectivable.",
        },
        {
          type: 'liste',
          items: [
            'La dépendance physique et la tolérance coexistent fréquemment mais ne sont pas systématiquement associées à une dépendance psychique.',
            'L’arrêt brutal d’un traitement induisant une dépendance physique importante doit être évité au profit d’une décroissance progressive de la posologie.',
            'Les opioïdes, les benzodiazépines et l’alcool sont des exemples classiques de substances pouvant induire à la fois tolérance et dépendance physique.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Syndrome de sevrage',
          texte:
            "Le syndrome de sevrage regroupe l’ensemble des manifestations cliniques survenant à l’arrêt ou à la réduction brutale d’un traitement ayant induit une dépendance physique. Sa nature et son intensité dépendent de la substance concernée et de la durée d’exposition préalable.",
        },
      ],
    },
    {
      id: 'synthese-securite',
      titre: 'Synthèse : sécurité d’emploi et prise de décision',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’ensemble de ces notions, courbe dose-effet, index thérapeutique, tolérance et dépendance, concourt à l’évaluation du rapport bénéfice-risque d’un médicament, élément central de toute décision thérapeutique et de toute évaluation réglementaire.",
        },
        {
          type: 'tableau',
          titre: 'Synthèse des notions de sécurité d’emploi',
          colonnes: ['Notion', 'Question à laquelle elle répond'],
          lignes: [
            ['Index thérapeutique', 'Quelle est la marge de sécurité théorique entre dose efficace et dose toxique ?'],
            ['Marge thérapeutique', 'Dans quel intervalle de concentrations le traitement est-il efficace et sûr ?'],
            ['Tolérance', 'L’effet du médicament diminue-t-il avec l’usage répété ?'],
            ['Dépendance', 'L’arrêt du médicament provoque-t-il un syndrome de sevrage ou un besoin compulsif ?'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repère réglementaire',
          texte:
            "L’index thérapeutique et la marge thérapeutique sont des éléments pris en compte lors de l’évaluation du dossier d’autorisation de mise sur le marché, notamment pour déterminer la nécessité d’une surveillance biologique particulière en pratique clinique courante.",
        },
      ],
    },
  ],
  pointsCles: [
    "La courbe dose-effet graduée décrit un effet continu, la courbe quantale décrit un effet tout ou rien dans une population.",
    "La DE50 est la dose efficace chez 50 % des sujets, la DL50 la dose létale chez 50 % des sujets.",
    "L’index thérapeutique, DL50 sur DE50, reflète la marge de sécurité théorique d’un médicament.",
    "La marge thérapeutique est l’intervalle de concentrations à la fois efficace et globalement bien toléré.",
    "La tolérance est une diminution progressive de l’effet, la tachyphylaxie une tolérance qui s’installe très rapidement.",
    "La dépendance physique se manifeste par un syndrome de sevrage à l’arrêt du traitement.",
    "Puissance et efficacité maximale sont deux caractéristiques indépendantes d’un médicament.",
  ],
  erreursFrequentes: [
    "Confondre courbe dose-effet graduée et courbe dose-effet quantale.",
    "Croire qu’un médicament plus puissant est nécessairement plus efficace au maximum de son effet.",
    "Penser que la tolérance et la tachyphylaxie s’installent sur le même intervalle de temps.",
    "Assimiler dépendance physique et dépendance psychique, alors qu’elles reposent sur des mécanismes distincts.",
    "Oublier qu’un arrêt brutal chez un patient dépendant physiquement peut déclencher un syndrome de sevrage sévère.",
    "Confondre index thérapeutique et marge thérapeutique, qui répondent à des questions différentes.",
  ],
  mnemotechniques: [
    {
      moyen: 'Graduée = Gradient continu, Quantale = Quantité de sujets',
      explication:
        'La courbe graduée mesure l’intensité continue d’un effet, la courbe quantale mesure la proportion de sujets répondant.',
    },
    {
      moyen: 'IT = Toxique / Thérapeutique',
      explication:
        'L’index thérapeutique se calcule comme le rapport de la dose toxique (DL50) sur la dose efficace (DE50).',
    },
    {
      moyen: 'Tachyphylaxie = Tôt et vite',
      explication:
        'La tachyphylaxie est une tolérance qui s’installe précocement et rapidement, contrairement à la tolérance classique plus progressive.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-relations-dose-effet-fc-01',
      recto: 'Que représente une courbe dose-effet graduée ?',
      verso: 'L’intensité d’un effet continu en fonction de la dose, chez un individu ou un système donné.',
      type: 'definition',
      tags: ['courbe graduée'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-02',
      recto: 'Que représente une courbe dose-effet quantale ?',
      verso: 'Le pourcentage de sujets présentant un effet tout ou rien en fonction de la dose, dans une population.',
      type: 'definition',
      tags: ['courbe quantale'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-03',
      recto: 'Définir la DE50.',
      verso: 'La dose produisant l’effet thérapeutique recherché chez 50 % des sujets d’une population.',
      type: 'definition',
      tags: ['DE50'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-04',
      recto: 'Définir la DL50.',
      verso: 'La dose provoquant le décès de 50 % des sujets d’une population, déterminée en général chez l’animal.',
      type: 'definition',
      tags: ['DL50'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-05',
      recto: 'Comment se calcule l’index thérapeutique ?',
      verso: 'Index thérapeutique = DL50 / DE50.',
      type: 'formule',
      tags: ['index thérapeutique'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-06',
      recto: 'Qu’est-ce que la marge thérapeutique ?',
      verso: 'L’intervalle de concentrations plasmatiques entre la concentration minimale efficace et la concentration minimale toxique.',
      type: 'definition',
      tags: ['marge thérapeutique'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-07',
      recto: 'Citer un médicament connu pour sa marge thérapeutique étroite.',
      verso: 'Le lithium, la digoxine, la warfarine, ou certains aminosides.',
      type: 'clinique',
      tags: ['marge thérapeutique'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-08',
      recto: 'Qu’est-ce que la tolérance pharmacologique ?',
      verso: 'Une diminution progressive de l’effet d’un médicament après administration répétée, nécessitant une augmentation de dose.',
      type: 'definition',
      tags: ['tolérance'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-09',
      recto: 'Qu’est-ce que la tachyphylaxie ?',
      verso: 'Une forme de tolérance s’installant très rapidement, parfois en quelques administrations successives.',
      type: 'definition',
      tags: ['tachyphylaxie'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-10',
      recto: 'Quelle est la conséquence d’un arrêt brutal chez un patient présentant une dépendance physique ?',
      verso: 'La survenue d’un syndrome de sevrage, dont la nature dépend de la substance concernée.',
      type: 'clinique',
      tags: ['dépendance'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-11',
      recto: 'La puissance d’un médicament préjuge-t-elle de son efficacité maximale ?',
      verso: 'Non, puissance et efficacité maximale sont deux caractéristiques indépendantes.',
      type: 'definition',
      tags: ['puissance'],
    },
    {
      id: 'ue6-relations-dose-effet-fc-12',
      recto: 'Différencier dépendance physique et dépendance psychique.',
      verso: 'La dépendance physique se manifeste par un syndrome de sevrage objectivable, la dépendance psychique par un besoin compulsif sans sevrage physique nécessaire.',
      type: 'definition',
      tags: ['dépendance'],
    },
  ],
  qcm: [
    {
      id: 'ue6-relations-dose-effet-qcm-01',
      enonce: 'Concernant les courbes dose-effet, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La courbe graduée décrit un effet mesuré de façon continue.', vraie: true, justification: 'C’est sa caractéristique principale, par opposition à un effet tout ou rien.' },
        { lettre: 'B', texte: 'La courbe quantale décrit le pourcentage de sujets répondant dans une population.', vraie: true, justification: 'Elle s’intéresse à la proportion d’individus présentant un effet donné à chaque dose.' },
        { lettre: 'C', texte: 'La courbe graduée a typiquement une forme sigmoïde sur échelle logarithmique de dose.', vraie: true, justification: 'C’est une caractéristique classique de la relation dose-effet pour de nombreux médicaments.' },
        { lettre: 'D', texte: 'La DE50 se détermine à partir d’une courbe graduée.', vraie: false, justification: 'La DE50 se détermine à partir d’une courbe quantale, portant sur la proportion de sujets répondants.' },
        { lettre: 'E', texte: 'La puissance d’un médicament est indépendante de son efficacité maximale.', vraie: true, justification: 'Ce sont deux caractéristiques distinctes de la relation dose-effet.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-relations-dose-effet-qcm-02',
      enonce: 'Concernant l’index thérapeutique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il se calcule comme le rapport de la DL50 sur la DE50.', vraie: true, justification: 'C’est la formule classique de l’index thérapeutique.' },
        { lettre: 'B', texte: 'Un index thérapeutique élevé traduit une marge de sécurité théorique importante.', vraie: true, justification: 'Plus l’écart entre dose toxique et dose efficace est grand, plus la sécurité théorique est élevée.' },
        { lettre: 'C', texte: 'Un index thérapeutique faible impose en général une surveillance clinique ou biologique accrue.', vraie: true, justification: 'La marge de sécurité réduite justifie une vigilance particulière en pratique clinique.' },
        { lettre: 'D', texte: 'La DL50 est systématiquement déterminée chez l’homme.', vraie: false, justification: 'Elle est généralement déterminée chez l’animal lors des études précliniques de toxicité.' },
        { lettre: 'E', texte: 'L’index thérapeutique et la marge thérapeutique désignent exactement la même chose.', vraie: false, justification: 'Ce sont deux notions liées mais distinctes : l’une est un rapport de doses, l’autre un intervalle de concentrations.' },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 2,
    },
    {
      id: 'ue6-relations-dose-effet-qcm-03',
      enonce: 'Concernant la marge thérapeutique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle correspond à l’intervalle entre concentration minimale efficace et concentration minimale toxique.', vraie: true, justification: 'C’est la définition même de la marge thérapeutique, ou fenêtre thérapeutique.' },
        { lettre: 'B', texte: 'La digoxine est un exemple classique de médicament à marge thérapeutique étroite.', vraie: true, justification: 'Elle nécessite une surveillance biologique rapprochée en raison de cette caractéristique.' },
        { lettre: 'C', texte: 'Une marge thérapeutique étroite rend le médicament plus sensible aux interactions médicamenteuses.', vraie: true, justification: 'Une faible variation de concentration peut suffire à sortir de la marge thérapeutique.' },
        { lettre: 'D', texte: 'Une marge thérapeutique large impose toujours une adaptation posologique individualisée stricte.', vraie: false, justification: 'C’est au contraire la marge thérapeutique étroite qui impose une telle adaptation.' },
        { lettre: 'E', texte: 'La marge thérapeutique est sans lien avec la surveillance biologique en pratique clinique.', vraie: false, justification: 'Elle est au contraire un déterminant majeur de la nécessité d’une surveillance biologique rapprochée.' },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 2,
    },
    {
      id: 'ue6-relations-dose-effet-qcm-04',
      enonce: 'Concernant la tolérance et la tachyphylaxie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La tolérance s’installe en général progressivement, sur plusieurs jours à semaines.', vraie: true, justification: 'C’est le mode d’installation classique de la tolérance pharmacologique.' },
        { lettre: 'B', texte: 'La tachyphylaxie s’installe plus lentement que la tolérance classique.', vraie: false, justification: 'C’est au contraire une tolérance qui s’installe très rapidement, parfois en quelques administrations.' },
        { lettre: 'C', texte: 'La tolérance peut avoir une origine pharmacocinétique, comme l’induction enzymatique.', vraie: true, justification: 'L’accélération du métabolisme réduit la concentration efficace du médicament, contribuant à la tolérance.' },
        { lettre: 'D', texte: 'La tolérance peut avoir une origine pharmacodynamique, comme la désensibilisation des récepteurs.', vraie: true, justification: 'La diminution de la sensibilité du récepteur est un mécanisme classique de tolérance pharmacodynamique.' },
        { lettre: 'E', texte: 'La tachyphylaxie concerne principalement les traitements chroniques de plusieurs années.', vraie: false, justification: 'Elle concerne au contraire des administrations rapprochées sur un intervalle de temps court.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-relations-dose-effet-qcm-05',
      enonce: 'Concernant la dépendance, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La dépendance physique se manifeste par un syndrome de sevrage à l’arrêt du traitement.', vraie: true, justification: 'C’est la caractéristique principale de la dépendance physique.' },
        { lettre: 'B', texte: 'La dépendance psychique nécessite toujours un syndrome de sevrage objectivable.', vraie: false, justification: 'Elle se caractérise par un besoin compulsif, sans qu’un sevrage physique soit nécessairement observable.' },
        { lettre: 'C', texte: 'Les benzodiazépines peuvent induire une dépendance physique.', vraie: true, justification: 'Un usage prolongé de benzodiazépines expose à un risque de dépendance physique.' },
        { lettre: 'D', texte: 'L’arrêt brutal chez un patient dépendant physiquement est toujours recommandé.', vraie: false, justification: 'Une décroissance progressive de la posologie est en général préférée pour limiter le syndrome de sevrage.' },
        { lettre: 'E', texte: 'Tolérance et dépendance physique peuvent coexister chez un même patient.', vraie: true, justification: 'Ces deux phénomènes d’adaptation à l’exposition répétée sont fréquemment associés.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-relations-dose-effet-qcm-06',
      enonce: 'Concernant la synthèse des notions de sécurité d’emploi, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’index thérapeutique répond à la question de la marge de sécurité théorique entre dose efficace et dose toxique.', vraie: true, justification: 'C’est précisément le rôle de ce paramètre pharmacologique.' },
        { lettre: 'B', texte: 'Un agoniste partiel peut être puissant tout en ayant une efficacité maximale inférieure à celle d’un agoniste plein.', vraie: true, justification: 'La puissance et l’efficacité maximale sont deux notions indépendantes.' },
        { lettre: 'C', texte: 'L’index thérapeutique et la marge thérapeutique n’ont aucun lien avec l’évaluation réglementaire d’un médicament.', vraie: false, justification: 'Ces notions sont au contraire prises en compte lors de l’évaluation du dossier d’autorisation de mise sur le marché.' },
        { lettre: 'D', texte: 'La dose efficace médiane est toujours supérieure à la dose létale médiane.', vraie: false, justification: 'C’est l’inverse : la DL50 est en général supérieure à la DE50, sinon l’index thérapeutique serait inférieur à 1.' },
        { lettre: 'E', texte: 'La tolérance et la dépendance sont des éléments pertinents pour évaluer le rapport bénéfice-risque d’un traitement.', vraie: true, justification: 'Ces phénomènes influencent directement la sécurité et l’efficacité à long terme d’un traitement.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
  ],
};
