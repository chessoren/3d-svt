import type { Fiche } from '../../types';

export const fichePremiereSemaine: Fiche = {
  id: 'embryo-premiere-semaine',
  ue: 'embryo',
  titre: 'La première semaine : segmentation et migration',
  sousTitre: 'Du zygote au début de l’implantation',
  chapitre: 'Développement embryonnaire',
  ordre: 5,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'segmentation',
    'blastomère',
    'compaction',
    'morula',
    'blastocyste',
    'trophoblaste',
    'embryoblaste',
    'éclosion',
  ],
  objectifs: [
    "Décrire la segmentation du zygote et l’évolution du nombre de blastomères.",
    "Expliquer le phénomène de compaction et son rôle dans la formation de la morula.",
    "Décrire la cavitation et l’organisation du blastocyste.",
    "Expliquer le phénomène d’éclosion et son intérêt pour l’implantation.",
    "Situer chronologiquement la migration tubaire et le début de l’implantation.",
  ],
  sections: [
    {
      id: 'convention-datation',
      titre: 'Convention de datation utilisée',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les repères chronologiques de cette fiche sont donnés en jours de développement, c’est-à-dire décomptés à partir du jour de la fécondation (jour 0 ou jour 1 selon les auteurs ; ici, jour de la fécondation = J0, premier jour post-fécondation = J1). Cette convention diffère des semaines d’aménorrhée (SA) utilisées en pratique obstétricale, qui comptent à partir du premier jour des dernières règles, soit environ deux semaines de plus.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre les deux conventions',
          texte:
            "En embryologie, on raisonne en jours ou semaines de développement post-fécondation. En clinique obstétricale, on raisonne en semaines d’aménorrhée (SA), décalées d’environ 14 jours par rapport au développement réel. Cette fiche utilise exclusivement la convention post-fécondation.",
        },
      ],
    },
    {
      id: 'segmentation',
      titre: 'La segmentation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La segmentation est la succession de divisions mitotiques rapides que subit le zygote au cours de sa migration dans la trompe utérine. Chaque division produit des blastomères de plus en plus petits, sans croissance globale de l’embryon, qui reste contenu dans la zone pellucide.",
        },
        {
          type: 'definition',
          terme: 'Blastomère',
          definition:
            "Chacune des cellules issues de la segmentation du zygote. Les blastomères sont totipotents lors des tout premiers stades, ce qui explique la possibilité exceptionnelle de grossesses gémellaires monozygotes par séparation précoce.",
        },
        {
          type: 'tableau',
          titre: 'Chronologie approximative de la segmentation',
          colonnes: ['Stade', 'Nombre de cellules', 'Délai approximatif après fécondation'],
          lignes: [
            ['Zygote', '1', 'J0'],
            ['Stade 2 blastomères', '2', 'Environ 24 à 30 heures'],
            ['Stade 4 blastomères', '4', 'Environ J2'],
            ['Stade 8 blastomères', '8', 'Environ J3'],
            ['Morula', '16 à 32', 'J3 à J4'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repère à retenir',
          texte:
            "La première division de segmentation survient environ 24 à 30 heures après la fécondation ; le stade morula est atteint vers le 3e ou 4e jour de développement.",
        },
      ],
    },
    {
      id: 'compaction-morula',
      titre: 'Compaction et morula',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au stade 8 à 16 blastomères, un phénomène de compaction survient : les blastomères, jusque-là faiblement liés, s’aplatissent les uns contre les autres, maximisant leurs contacts et formant des jonctions serrées en périphérie et des jonctions communicantes (gap junctions) en profondeur.",
        },
        {
          type: 'liste',
          items: [
            "La compaction fait perdre aux blastomères périphériques leur totipotence apparente : leur devenir commence à diverger de celui des blastomères internes.",
            "Elle aboutit au stade morula, masse compacte de cellules d’allure mûriforme, comprenant classiquement 16 à 32 cellules.",
            "Deux populations cellulaires s’individualisent au sein de la morula : les cellules périphériques, destinées à devenir le trophoblaste, et les cellules internes, destinées à devenir l’embryoblaste (masse cellulaire interne, ou bouton embryonnaire).",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Migration tubaire',
          texte:
            "La segmentation se déroule pendant que l’embryon progresse dans la trompe utérine, sous l’effet des battements ciliaires de l’épithélium tubaire et des contractions de la musculeuse. La morula pénètre dans la cavité utérine vers le 4e jour de développement.",
        },
      ],
    },
    {
      id: 'cavitation-blastocyste',
      titre: 'Cavitation et formation du blastocyste',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Dans la cavité utérine, du liquide s’accumule entre les cellules de la morula, provenant de la sécrétion active des cellules trophoblastiques et de la diffusion à travers la zone pellucide : c’est la cavitation, qui crée le blastocèle.",
        },
        {
          type: 'definition',
          terme: 'Blastocyste',
          definition:
            "Structure formée vers le 5e jour de développement, comprenant une cavité liquidienne (le blastocèle), une couche périphérique de cellules aplaties (le trophoblaste) et un amas cellulaire polarisé, appliqué contre le trophoblaste d’un côté (l’embryoblaste ou bouton embryonnaire).",
        },
        {
          type: 'tableau',
          titre: 'Organisation du blastocyste',
          colonnes: ['Composant', 'Localisation', 'Devenir'],
          lignes: [
            ['Trophoblaste', 'Couche cellulaire périphérique', 'Futures annexes placentaires'],
            ['Embryoblaste (bouton embryonnaire)', 'Amas cellulaire interne, polaire', 'Futur embryon proprement dit'],
            ['Blastocèle', 'Cavité liquidienne centrale', 'Cavité transitoire'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Pôle embryonnaire',
          texte:
            "Le pôle du blastocyste où siège l’embryoblaste est appelé pôle embryonnaire : c’est par ce pôle que débute le contact avec l’épithélium utérin lors de l’implantation, et non par le pôle opposé (pôle abembryonnaire).",
        },
      ],
    },
    {
      id: 'eclosion-implantation',
      titre: 'Éclosion et début de l’implantation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Vers le 5e ou 6e jour de développement, le blastocyste doit se libérer de la zone pellucide qui l’enveloppait depuis la fécondation, pour pouvoir entrer en contact direct avec l’épithélium utérin : c’est l’éclosion, ou hatching.",
        },
        {
          type: 'etapes',
          titre: 'De l’éclosion au premier contact utérin',
          etapes: [
            {
              titre: 'Amincissement puis rupture de la zone pellucide',
              detail:
                'Sous l’effet d’enzymes lytiques et de la pression exercée par la croissance du blastocèle, la zone pellucide se fragilise et se rompt.',
            },
            {
              titre: 'Sortie du blastocyste',
              detail:
                'Le blastocyste, désormais nu, sort de la zone pellucide, qui est abandonnée dans la cavité utérine.',
            },
            {
              titre: 'Apposition puis adhésion',
              detail:
                'Le pôle embryonnaire du trophoblaste entre en contact avec l’épithélium utérin, réceptif durant une fenêtre d’implantation limitée, vers le 6e ou 7e jour de développement.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Fenêtre d’implantation',
          texte:
            "L’endomètre n’est réceptif à l’implantation que durant une période limitée du cycle, la fenêtre d’implantation, qui coïncide avec l’arrivée du blastocyste dans la cavité utérine. Un défaut de synchronisation entre développement embryonnaire et réceptivité endométriale est l’une des causes d’échec d’implantation en assistance médicale à la procréation.",
        },
      ],
    },
  ],
  pointsCles: [
    "La segmentation est une succession de mitoses sans croissance globale, produisant des blastomères de plus en plus petits.",
    "La première division de segmentation survient environ 24 à 30 heures après la fécondation.",
    "La compaction, vers le stade 8 à 16 cellules, individualise les futurs trophoblaste et embryoblaste au sein de la morula.",
    "La morula pénètre dans la cavité utérine vers le 4e jour de développement.",
    "La cavitation forme le blastocèle et donne naissance au blastocyste vers le 5e jour de développement.",
    "L’éclosion (hatching) libère le blastocyste de la zone pellucide avant tout contact avec l’endomètre.",
    "Le premier contact avec l’épithélium utérin, au pôle embryonnaire, débute l’implantation vers le 6e à 7e jour de développement.",
  ],
  erreursFrequentes: [
    "Confondre segmentation et croissance : la segmentation multiplie les cellules sans augmenter la taille globale de l’embryon.",
    "Croire que la morula possède déjà une cavité : la cavité n’apparaît qu’au stade blastocyste, après la cavitation.",
    "Inverser trophoblaste et embryoblaste : le trophoblaste est périphérique et donnera les annexes, l’embryoblaste est interne et donnera l’embryon.",
    "Oublier l’étape d’éclosion, indispensable avant tout contact direct entre le blastocyste et l’épithélium utérin.",
    "Confondre les jours de développement post-fécondation avec les semaines d’aménorrhée utilisées en clinique.",
  ],
  mnemotechniques: [
    {
      moyen: 'Morula comme une mûre',
      explication:
        'Le nom morula vient de sa ressemblance avec une mûre, masse compacte de petites cellules, avant l’apparition de toute cavité.',
    },
    {
      moyen: '« Embryoblaste dedans, trophoblaste dehors »',
      explication:
        'Retenir la disposition du blastocyste : embryoblaste interne (futur embryon), trophoblaste périphérique (futures annexes).',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-premiere-semaine-fc-01',
      recto: 'Quelle convention de datation est utilisée en embryologie descriptive ?',
      verso: 'Les jours ou semaines de développement, décomptés à partir de la fécondation.',
      type: 'definition',
      tags: ['datation'],
    },
    {
      id: 'embryo-premiere-semaine-fc-02',
      recto: 'Qu’est-ce qu’un blastomère ?',
      verso: 'Chacune des cellules issues de la segmentation du zygote.',
      type: 'definition',
      tags: ['blastomère'],
    },
    {
      id: 'embryo-premiere-semaine-fc-03',
      recto: 'Quand survient la première division de segmentation ?',
      verso: 'Environ 24 à 30 heures après la fécondation.',
      type: 'chiffre',
      tags: ['segmentation'],
    },
    {
      id: 'embryo-premiere-semaine-fc-04',
      recto: 'Qu’est-ce que la compaction ?',
      verso: 'L’aplatissement et la maximisation des contacts entre blastomères, avec formation de jonctions serrées et communicantes, vers le stade 8 à 16 cellules.',
      type: 'mecanisme',
      tags: ['compaction'],
    },
    {
      id: 'embryo-premiere-semaine-fc-05',
      recto: 'Vers quel jour la morula pénètre-t-elle dans la cavité utérine ?',
      verso: 'Vers le 4e jour de développement.',
      type: 'chiffre',
      tags: ['morula'],
    },
    {
      id: 'embryo-premiere-semaine-fc-06',
      recto: 'Qu’est-ce que la cavitation ?',
      verso: 'L’accumulation de liquide entre les cellules de la morula, qui crée le blastocèle et forme le blastocyste.',
      type: 'mecanisme',
      tags: ['cavitation'],
    },
    {
      id: 'embryo-premiere-semaine-fc-07',
      recto: 'Quels sont les trois composants du blastocyste ?',
      verso: 'Le trophoblaste, l’embryoblaste (bouton embryonnaire) et le blastocèle.',
      type: 'classification',
      tags: ['blastocyste'],
    },
    {
      id: 'embryo-premiere-semaine-fc-08',
      recto: 'Que deviennent respectivement le trophoblaste et l’embryoblaste ?',
      verso: 'Le trophoblaste donne les futures annexes placentaires, l’embryoblaste donne l’embryon proprement dit.',
      type: 'mecanisme',
      tags: ['trophoblaste', 'embryoblaste'],
    },
    {
      id: 'embryo-premiere-semaine-fc-09',
      recto: 'Qu’est-ce que le pôle embryonnaire du blastocyste ?',
      verso: 'Le pôle où siège l’embryoblaste, par lequel débute le contact avec l’épithélium utérin.',
      type: 'definition',
      tags: ['pôle embryonnaire'],
    },
    {
      id: 'embryo-premiere-semaine-fc-10',
      recto: 'Qu’est-ce que l’éclosion (hatching) ?',
      verso: 'La libération du blastocyste hors de la zone pellucide, préalable indispensable à l’implantation.',
      type: 'mecanisme',
      tags: ['éclosion'],
    },
    {
      id: 'embryo-premiere-semaine-fc-11',
      recto: 'Vers quel jour débute le contact entre blastocyste et épithélium utérin ?',
      verso: 'Vers le 6e à 7e jour de développement.',
      type: 'chiffre',
      tags: ['implantation'],
    },
    {
      id: 'embryo-premiere-semaine-fc-12',
      recto: 'Qu’est-ce que la fenêtre d’implantation ?',
      verso: 'La période limitée du cycle durant laquelle l’endomètre est réceptif à l’implantation du blastocyste.',
      type: 'clinique',
      tags: ['fenêtre d’implantation'],
    },
  ],
  qcm: [
    {
      id: 'embryo-premiere-semaine-qcm-01',
      enonce: 'Concernant la segmentation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La segmentation s’accompagne d’une croissance globale de l’embryon.', vraie: false, justification: 'Au contraire, les blastomères deviennent de plus en plus petits, sans croissance globale.' },
        { lettre: 'B', texte: 'Elle se déroule pendant la migration tubaire de l’embryon.', vraie: true, justification: 'Exact, la segmentation débute dans la trompe utérine.' },
        { lettre: 'C', texte: 'Les tout premiers blastomères sont totipotents.', vraie: true, justification: 'Exact, ce qui explique la possibilité exceptionnelle de jumeaux monozygotes par séparation précoce.' },
        { lettre: 'D', texte: 'L’embryon segmente en dehors de la zone pellucide.', vraie: false, justification: 'L’embryon reste contenu dans la zone pellucide durant toute la segmentation, jusqu’à l’éclosion.' },
        { lettre: 'E', texte: 'Le stade morula est atteint vers le 3e ou 4e jour de développement.', vraie: true, justification: 'Exact, la morula comporte alors 16 à 32 cellules.' },
      ],
      correction: 'Réponses exactes : B, C et E. La segmentation multiplie les cellules sans croissance globale, dans la zone pellucide.',
      difficulte: 1,
    },
    {
      id: 'embryo-premiere-semaine-qcm-02',
      enonce: 'Concernant la compaction et la morula, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La compaction survient vers le stade 8 à 16 cellules.', vraie: true, justification: 'Exact, c’est le moment classiquement décrit.' },
        { lettre: 'B', texte: 'Elle s’accompagne de la formation de jonctions serrées périphériques.', vraie: true, justification: 'Exact, ces jonctions participent à la cohésion et à la future imperméabilité du trophoblaste.' },
        { lettre: 'C', texte: 'La morula possède déjà une cavité liquidienne bien individualisée.', vraie: false, justification: 'La cavité n’apparaît qu’au stade blastocyste, après la cavitation.' },
        { lettre: 'D', texte: 'La compaction individualise les futures lignées trophoblastique et embryoblastique.', vraie: true, justification: 'Exact, cellules périphériques et cellules internes divergent alors.' },
        { lettre: 'E', texte: 'La morula pénètre dans la trompe utérine après avoir quitté l’utérus.', vraie: false, justification: 'C’est l’inverse : la morula, formée dans la trompe, pénètre ensuite dans la cavité utérine.' },
      ],
      correction: 'Réponses exactes : A, B et D. La compaction précède et prépare la cavitation.',
      difficulte: 2,
    },
    {
      id: 'embryo-premiere-semaine-qcm-03',
      enonce: 'Concernant le blastocyste, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il se forme vers le 5e jour de développement.', vraie: true, justification: 'Exact, à la suite de la cavitation de la morula.' },
        { lettre: 'B', texte: 'Le trophoblaste est la couche cellulaire interne du blastocyste.', vraie: false, justification: 'Le trophoblaste est la couche périphérique ; l’embryoblaste est interne.' },
        { lettre: 'C', texte: 'L’embryoblaste donnera l’embryon proprement dit.', vraie: true, justification: 'Exact, c’est le devenir classique de la masse cellulaire interne.' },
        { lettre: 'D', texte: 'Le pôle abembryonnaire est le premier à entrer en contact avec l’endomètre.', vraie: false, justification: 'C’est le pôle embryonnaire, où siège l’embryoblaste, qui entre en premier contact avec l’épithélium utérin.' },
        { lettre: 'E', texte: 'Le blastocèle est une cavité liquidienne centrale du blastocyste.', vraie: true, justification: 'Exact, formée par cavitation.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien localiser trophoblaste (périphérique) et embryoblaste (interne, pôle embryonnaire).',
      difficulte: 2,
    },
    {
      id: 'embryo-premiere-semaine-qcm-04',
      enonce: 'Concernant l’éclosion et le début de l’implantation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’éclosion précède la sortie du blastocyste hors de la zone pellucide.', vraie: false, justification: 'L’éclosion est précisément la sortie du blastocyste hors de la zone pellucide.' },
        { lettre: 'B', texte: 'L’éclosion est indispensable avant tout contact direct avec l’épithélium utérin.', vraie: true, justification: 'Exact, la zone pellucide empêche tout contact tant qu’elle persiste.' },
        { lettre: 'C', texte: 'Le premier contact avec l’endomètre débute vers le 6e à 7e jour de développement.', vraie: true, justification: 'Exact, c’est la chronologie classiquement retenue.' },
        { lettre: 'D', texte: 'La fenêtre d’implantation désigne une période illimitée de réceptivité endométriale.', vraie: false, justification: 'La fenêtre d’implantation est au contraire une période limitée du cycle.' },
        { lettre: 'E', texte: 'La zone pellucide est abandonnée dans la cavité utérine après l’éclosion.', vraie: true, justification: 'Exact, le blastocyste nu poursuit seul son évolution.' },
      ],
      correction: 'Réponses exactes : B, C et E. L’éclosion est un préalable obligatoire, dans une fenêtre temporelle précise.',
      difficulte: 2,
    },
    {
      id: 'embryo-premiere-semaine-qcm-05',
      enonce: 'Concernant la chronologie générale de la première semaine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le stade 2 blastomères est atteint environ 24 à 30 heures après la fécondation.', vraie: true, justification: 'Exact, c’est le délai classique de la première division.' },
        { lettre: 'B', texte: 'Le stade morula précède le stade blastocyste.', vraie: true, justification: 'Exact, la morula se transforme en blastocyste après cavitation.' },
        { lettre: 'C', texte: 'La cavitation a lieu avant la compaction.', vraie: false, justification: 'C’est l’inverse : la compaction, au stade morula, précède la cavitation, qui forme le blastocyste.' },
        { lettre: 'D', texte: 'L’implantation débute au cours de la première semaine.', vraie: true, justification: 'Exact, son tout début se situe vers le 6e à 7e jour de développement.' },
        { lettre: 'E', texte: 'Les semaines d’aménorrhée et les semaines de développement désignent la même chose.', vraie: false, justification: 'Les semaines d’aménorrhée comptent environ deux semaines de plus que les semaines de développement post-fécondation.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir l’ordre : segmentation, compaction, cavitation, éclosion, implantation.',
      difficulte: 2,
    },
    {
      id: 'embryo-premiere-semaine-qcm-06',
      enonce: 'Concernant les devenirs cellulaires de la première semaine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Tous les blastomères conservent une totipotence identique jusqu’au stade blastocyste.', vraie: false, justification: 'La totipotence apparente diminue dès la compaction, où les devenirs des cellules périphériques et internes divergent.' },
        { lettre: 'B', texte: 'Le trophoblaste est à l’origine des futures annexes embryonnaires.', vraie: true, justification: 'Exact, il donnera notamment le cytotrophoblaste et le syncytiotrophoblaste.' },
        { lettre: 'C', texte: 'L’embryoblaste est déjà différencié en trois feuillets à la fin de la première semaine.', vraie: false, justification: 'La différenciation en feuillets n’a lieu qu’à partir de la deuxième et surtout de la troisième semaine.' },
        { lettre: 'D', texte: 'La séparation précoce de blastomères totipotents peut être à l’origine de jumeaux monozygotes.', vraie: true, justification: 'Exact, c’est un mécanisme classiquement décrit de gémellité monozygote précoce.' },
        { lettre: 'E', texte: 'Le blastocèle deviendra la cavité amniotique définitive.', vraie: false, justification: 'Le blastocèle est une cavité transitoire, distincte de la cavité amniotique qui apparaît ultérieurement au sein de l’épiblaste.' },
      ],
      correction: 'Réponses exactes : B et D. Ne pas confondre le blastocèle, transitoire, avec les cavités qui apparaîtront lors de la deuxième semaine.',
      difficulte: 2,
    },
  ],
};
