import type { Fiche } from '../../types';

export const ficheInflammation: Fiche = {
  id: 'ue5-inflammation',
  ue: 'ue5',
  titre: 'La réaction inflammatoire',
  sousTitre:
    'Signes cardinaux, phases vasculaire et cellulaire, médiateurs, diapédèse, résolution et inflammation chronique',
  chapitre: 'Immunité innée',
  ordre: 3,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'inflammation aiguë',
    'signes cardinaux',
    'vasodilatation',
    'diapédèse',
    'médiateurs de l’inflammation',
    'histamine',
    'prostaglandines',
    'protéines de la phase aiguë',
    'inflammation chronique',
  ],
  objectifs: [
    'Citer les quatre puis cinq signes cardinaux de l’inflammation et leur mécanisme.',
    'Distinguer la phase vasculaire et la phase cellulaire de l’inflammation aiguë.',
    'Décrire les étapes de la diapédèse leucocytaire.',
    'Citer les principaux médiateurs chimiques de l’inflammation et leurs effets.',
    'Expliquer les modalités de résolution de l’inflammation et les caractéristiques de l’inflammation chronique.',
    'Citer les principales protéines de la phase aiguë et leur intérêt en pratique clinique.',
  ],
  sections: [
    {
      id: 'signes-cardinaux',
      titre: 'Signes cardinaux de l’inflammation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La réaction inflammatoire est une réponse stéréotypée de l’organisme à une agression tissulaire (infection, traumatisme, nécrose), visant à éliminer la cause de l’agression et à réparer les tissus lésés. Elle se traduit cliniquement par des signes cardinaux, décrits dès l’Antiquité.",
        },
        {
          type: 'tableau',
          titre: 'Signes cardinaux de l’inflammation aiguë',
          colonnes: ['Signe', 'Terme latin', 'Mécanisme'],
          lignes: [
            ['Rougeur', 'Rubor', 'Vasodilatation et hyperhémie locale'],
            ['Chaleur', 'Calor', 'Augmentation du débit sanguin local'],
            ['Œdème (tuméfaction)', 'Tumor', 'Augmentation de la perméabilité vasculaire, exsudat plasmatique'],
            ['Douleur', 'Dolor', 'Sensibilisation des nocicepteurs par les médiateurs inflammatoires'],
            ['Impotence fonctionnelle', 'Functio laesa', 'Conséquence des quatre signes précédents, cinquième signe ajouté par Virchow'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Deux grands types d’inflammation',
          texte:
            "L’inflammation aiguë est un processus rapide, de courte durée, dominé par les polynucléaires neutrophiles et l’exsudation plasmatique. L’inflammation chronique s’installe sur plusieurs semaines à plusieurs mois, dominée par les macrophages, les lymphocytes et les plasmocytes, avec souvent une composante de réparation tissulaire (fibrose).",
        },
      ],
    },
    {
      id: 'phase-vasculaire',
      titre: 'Phase vasculaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La phase vasculaire est la première étape de l’inflammation aiguë. Elle débute par une brève vasoconstriction réflexe, immédiatement suivie d’une vasodilatation artériolaire, principalement sous l’effet de l’histamine et des prostaglandines.",
        },
        {
          type: 'liste',
          items: [
            'La vasodilatation augmente le débit sanguin local, expliquant la rougeur et la chaleur.',
            "L’augmentation de la perméabilité des veinules post-capillaires, liée à la contraction des cellules endothéliales, permet le passage de protéines plasmatiques (dont le fibrinogène) et de liquide vers le tissu interstitiel : c’est la formation de l’exsudat inflammatoire, responsable de l’œdème.",
            "Le ralentissement du flux sanguin qui en résulte favorise la margination des leucocytes, c’est-à-dire leur déplacement vers la périphérie du courant sanguin, au contact de l’endothélium.",
          ],
        },
        {
          type: 'definition',
          terme: 'Exsudat',
          definition:
            "Liquide riche en protéines (notamment en fibrinogène) qui s’accumule dans le tissu interstitiel lors de l’inflammation, du fait de l’augmentation de la perméabilité vasculaire. Il se distingue du transsudat, pauvre en protéines, observé lors d’une insuffisance cardiaque ou hépatique sans inflammation.",
        },
      ],
    },
    {
      id: 'phase-cellulaire',
      titre: 'Phase cellulaire : la diapédèse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La phase cellulaire correspond au recrutement actif des leucocytes, principalement les polynucléaires neutrophiles dans les premières heures, du sang vers le foyer inflammatoire. Ce recrutement suit une séquence précise, la diapédèse.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la diapédèse leucocytaire',
          etapes: [
            {
              titre: 'Margination et roulement',
              detail:
                "Le leucocyte, ralenti par le flux sanguin réduit, entre en contact avec l’endothélium activé et roule à sa surface grâce à une interaction faible et transitoire entre les sélectines endothéliales (E- et P-sélectine) et leurs ligands glucidiques leucocytaires.",
            },
            {
              titre: 'Adhérence ferme',
              detail:
                "Sous l’effet des chimiokines présentées à la surface endothéliale, les intégrines leucocytaires (comme LFA-1) changent de conformation et se lient fermement aux molécules d’adhérence endothéliales de la superfamille des immunoglobulines (ICAM-1, VCAM-1), stoppant le roulement.",
            },
            {
              titre: 'Diapédèse (transmigration)',
              detail:
                "Le leucocyte s’insinue entre les cellules endothéliales adjacentes et traverse la membrane basale pour gagner le tissu interstitiel, en suivant un gradient croissant de chimiokines.",
            },
            {
              titre: 'Chimiotactisme',
              detail:
                "Une fois dans le tissu, le leucocyte migre le long du gradient de facteurs chimiotactiques (C5a du complément, leucotriène B4, interleukine 8) jusqu’au foyer inflammatoire.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Déficit d’adhérence leucocytaire',
          texte:
            "Le déficit d’adhérence leucocytaire de type 1 (LAD-1) est une maladie héréditaire rare due à un déficit en intégrines CD18. Il se traduit par une incapacité des leucocytes à adhérer fermement à l’endothélium et à migrer vers les foyers infectieux, responsable d’infections bactériennes récidivantes et d’une hyperleucocytose sanguine marquée.",
        },
      ],
    },
    {
      id: 'mediateurs',
      titre: 'Médiateurs chimiques de l’inflammation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "De nombreux médiateurs chimiques, d’origine cellulaire ou plasmatique, orchestrent les différentes étapes de la réaction inflammatoire.",
        },
        {
          type: 'tableau',
          titre: 'Principaux médiateurs de l’inflammation',
          colonnes: ['Médiateur', 'Origine', 'Effet principal'],
          lignes: [
            ['Histamine', 'Mastocytes, basophiles', 'Vasodilatation et augmentation immédiate de la perméabilité vasculaire'],
            ['Prostaglandines', 'Voie de la cyclo-oxygénase (acide arachidonique)', 'Vasodilatation, fièvre, sensibilisation des nocicepteurs (douleur)'],
            ['Leucotriène B4', 'Voie de la lipo-oxygénase', 'Puissant agent chimiotactique pour les polynucléaires neutrophiles'],
            ['Bradykinine', 'Système des kinines plasmatiques', 'Vasodilatation, augmentation de la perméabilité vasculaire, douleur'],
            ['C3a et C5a', 'Système du complément', 'Anaphylatoxines : dégranulation mastocytaire, chimiotactisme (C5a)'],
            ['Interleukine 8 (CXCL8)', 'Macrophages, cellules endothéliales', 'Chimiotactisme des polynucléaires neutrophiles'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Anti-inflammatoires et cyclo-oxygénase',
          texte:
            "Les anti-inflammatoires non stéroïdiens (AINS) inhibent la cyclo-oxygénase (COX), bloquant la synthèse des prostaglandines : ils réduisent ainsi la douleur, la fièvre et la vasodilatation, mais n’agissent pas sur la voie de la lipo-oxygénase, qui reste active et peut expliquer certains effets indésirables respiratoires.",
        },
      ],
    },
    {
      id: 'resolution-chronique',
      titre: 'Résolution de l’inflammation et inflammation chronique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une inflammation aiguë évolue normalement vers la résolution, avec restitution de l’architecture tissulaire normale. Lorsque la cause persiste ou que le processus échoue à s’éteindre, l’inflammation devient chronique.",
        },
        {
          type: 'comparaison',
          titre: 'Inflammation aiguë versus inflammation chronique',
          gauche: {
            titre: 'Inflammation aiguë',
            points: [
              'Durée courte (heures à quelques jours)',
              'Cellule dominante : polynucléaire neutrophile',
              'Exsudation plasmatique marquée',
              'Évolution vers la résolution ou vers la chronicité',
            ],
          },
          droite: {
            titre: 'Inflammation chronique',
            points: [
              'Durée prolongée (semaines à mois, voire années)',
              'Cellules dominantes : macrophages, lymphocytes, plasmocytes',
              'Prolifération vasculaire et fibrose associées',
              'Peut aboutir à la formation de granulomes',
            ],
          },
        },
        {
          type: 'definition',
          terme: 'Granulome',
          definition:
            "Agrégat organisé de macrophages activés (souvent transformés en cellules épithélioïdes et en cellules géantes multinucléées), entouré de lymphocytes, formé en réponse à un agent persistant que l’organisme ne parvient pas à éliminer (mycobactérie de la tuberculose, corps étranger).",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Protéines de la phase aiguë',
          texte:
            "Sous l’effet de l’IL-6 notamment, le foie augmente la synthèse de protéines de la phase aiguë : la protéine C réactive (CRP) et le fibrinogène augmentent en quelques heures, tandis que l’albumine, protéine négative de la phase aiguë, diminue. La CRP est un marqueur biologique usuel de suivi de l’inflammation en pratique clinique.",
        },
      ],
    },
  ],
  pointsCles: [
    'Les cinq signes cardinaux de l’inflammation sont : rougeur, chaleur, œdème, douleur et impotence fonctionnelle.',
    'La phase vasculaire associe vasodilatation et augmentation de la perméabilité, à l’origine de l’exsudat.',
    'La diapédèse suit la séquence margination-roulement, adhérence ferme, transmigration, puis chimiotactisme.',
    'Les sélectines assurent le roulement, les intégrines et les molécules ICAM/VCAM assurent l’adhérence ferme.',
    'L’histamine et les prostaglandines sont les principaux médiateurs de la phase vasculaire précoce.',
    'L’inflammation chronique est dominée par les macrophages et les lymphocytes, avec fibrose et parfois granulomes.',
    'La CRP, protéine de la phase aiguë induite par l’IL-6, est un marqueur biologique usuel de l’inflammation.',
  ],
  erreursFrequentes: [
    'Oublier l’impotence fonctionnelle, cinquième signe cardinal ajouté par Virchow aux quatre signes classiques.',
    'Confondre exsudat (riche en protéines, inflammatoire) et transsudat (pauvre en protéines, non inflammatoire).',
    'Inverser l’ordre des étapes de la diapédèse : le roulement (sélectines) précède toujours l’adhérence ferme (intégrines).',
    'Croire que les AINS bloquent la voie de la lipo-oxygénase : ils n’inhibent que la cyclo-oxygénase.',
    "Considérer que le polynucléaire neutrophile est la cellule dominante de l’inflammation chronique : c’est le macrophage.",
    'Oublier que l’albumine est une protéine négative de la phase aiguë, dont la concentration diminue lors de l’inflammation.',
  ],
  mnemotechniques: [
    {
      moyen: 'Rubor, Calor, Tumor, Dolor, Functio laesa',
      explication:
        'Les cinq signes cardinaux de l’inflammation en latin, dans l’ordre historique de description.',
    },
    {
      moyen: 'Diapédèse : « MRAT »',
      explication:
        'Margination-Roulement, Adhérence ferme, Transmigration (chimiotactisme) : la séquence des quatre étapes du recrutement leucocytaire.',
    },
    {
      moyen: 'Sélectines roulent, intégrines collent',
      explication:
        'Les sélectines assurent l’interaction faible du roulement, les intégrines assurent l’adhérence ferme et stable à l’endothélium.',
    },
  ],
  sources: [
    'Abbas, Lichtman, Pillai, Les bases de l’immunologie fondamentale et clinique',
    'Kumar, Abbas, Aster, Robbins, Pathologie fondamentale de Robbins',
    'Janeway, Immunobiologie',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue5-inflammation-fc-01',
      recto: 'Citer les cinq signes cardinaux de l’inflammation.',
      verso: 'Rougeur, chaleur, œdème, douleur et impotence fonctionnelle.',
      type: 'classification',
      tags: ['signes cardinaux'],
    },
    {
      id: 'ue5-inflammation-fc-02',
      recto: 'Quel signe cardinal a été ajouté par Virchow aux quatre signes classiques ?',
      verso: 'L’impotence fonctionnelle (functio laesa).',
      type: 'chiffre',
      tags: ['signes cardinaux'],
    },
    {
      id: 'ue5-inflammation-fc-03',
      recto: 'Quels sont les deux principaux médiateurs de la vasodilatation précoce ?',
      verso: 'L’histamine et les prostaglandines.',
      type: 'mecanisme',
      tags: ['médiateurs'],
    },
    {
      id: 'ue5-inflammation-fc-04',
      recto: 'Quelle est la différence entre exsudat et transsudat ?',
      verso: 'L’exsudat est riche en protéines (inflammatoire) ; le transsudat est pauvre en protéines (non inflammatoire).',
      type: 'definition',
      tags: ['œdème', 'exsudat'],
    },
    {
      id: 'ue5-inflammation-fc-05',
      recto: 'Quelles molécules d’adhérence assurent le roulement leucocytaire ?',
      verso: 'Les sélectines (E- et P-sélectine endothéliales) et leurs ligands glucidiques leucocytaires.',
      type: 'mecanisme',
      tags: ['diapédèse'],
    },
    {
      id: 'ue5-inflammation-fc-06',
      recto: 'Quelles molécules assurent l’adhérence ferme du leucocyte à l’endothélium ?',
      verso: 'Les intégrines leucocytaires (LFA-1) liées à ICAM-1 et VCAM-1 endothéliales.',
      type: 'mecanisme',
      tags: ['diapédèse'],
    },
    {
      id: 'ue5-inflammation-fc-07',
      recto: 'Citer un puissant agent chimiotactique lipidique pour les neutrophiles.',
      verso: 'Le leucotriène B4, produit par la voie de la lipo-oxygénase.',
      type: 'mecanisme',
      tags: ['médiateurs', 'chimiotactisme'],
    },
    {
      id: 'ue5-inflammation-fc-08',
      recto: 'Sur quelle enzyme agissent les anti-inflammatoires non stéroïdiens ?',
      verso: 'La cyclo-oxygénase (COX), bloquant la synthèse des prostaglandines.',
      type: 'mecanisme',
      tags: ['AINS'],
    },
    {
      id: 'ue5-inflammation-fc-09',
      recto: 'Quelles cellules dominent l’inflammation chronique ?',
      verso: 'Les macrophages, les lymphocytes et les plasmocytes.',
      type: 'classification',
      tags: ['inflammation chronique'],
    },
    {
      id: 'ue5-inflammation-fc-10',
      recto: 'Qu’est-ce qu’un granulome ?',
      verso: 'Un agrégat organisé de macrophages activés, entouré de lymphocytes, formé face à un agent persistant non éliminé.',
      type: 'definition',
      tags: ['granulome'],
    },
    {
      id: 'ue5-inflammation-fc-11',
      recto: 'Quelle protéine de la phase aiguë est utilisée en pratique clinique comme marqueur de l’inflammation ?',
      verso: 'La protéine C réactive (CRP), induite par l’IL-6.',
      type: 'clinique',
      tags: ['protéines de la phase aiguë'],
    },
    {
      id: 'ue5-inflammation-fc-12',
      recto: 'Quelle protéine plasmatique diminue lors de l’inflammation (protéine négative de la phase aiguë) ?',
      verso: 'L’albumine.',
      type: 'chiffre',
      tags: ['protéines de la phase aiguë'],
    },
  ],
  qcm: [
    {
      id: 'ue5-inflammation-qcm-01',
      enonce: 'Concernant les signes cardinaux de l’inflammation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La rougeur résulte de la vasodilatation locale.', vraie: true, justification: 'Exact : l’augmentation du débit sanguin explique l’érythème.' },
        { lettre: 'B', texte: 'L’œdème résulte d’une diminution de la perméabilité vasculaire.', vraie: false, justification: 'L’œdème résulte au contraire d’une augmentation de la perméabilité vasculaire.' },
        { lettre: 'C', texte: 'La douleur est liée à la sensibilisation des nocicepteurs par des médiateurs comme les prostaglandines.', vraie: true, justification: 'Exact : les prostaglandines abaissent le seuil d’excitation des nocicepteurs.' },
        { lettre: 'D', texte: 'L’impotence fonctionnelle fait partie des quatre signes cardinaux décrits initialement.', vraie: false, justification: 'Elle a été ajoutée secondairement par Virchow, en cinquième signe.' },
        { lettre: 'E', texte: 'La chaleur résulte de l’augmentation du débit sanguin local.', vraie: true, justification: 'Exact : la vasodilatation apporte du sang plus chaud provenant du cœur.' },
      ],
      correction: 'Réponses exactes : A, C et E. Rubor, calor et dolor s’expliquent tous par les modifications vasculaires et les médiateurs.',
      difficulte: 1,
    },
    {
      id: 'ue5-inflammation-qcm-02',
      enonce: 'Concernant la phase vasculaire de l’inflammation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle débute par une brève vasoconstriction réflexe.', vraie: true, justification: 'Exact, suivie immédiatement d’une vasodilatation prolongée.' },
        { lettre: 'B', texte: 'L’histamine est un médiateur majeur de la vasodilatation précoce.', vraie: true, justification: 'Exact : elle est libérée par les mastocytes et les basophiles.' },
        { lettre: 'C', texte: 'L’exsudat est pauvre en protéines plasmatiques.', vraie: false, justification: 'L’exsudat est au contraire riche en protéines, notamment en fibrinogène.' },
        { lettre: 'D', texte: 'Le ralentissement du flux sanguin favorise la margination leucocytaire.', vraie: true, justification: 'Exact : les leucocytes se déplacent alors vers la périphérie du courant sanguin.' },
        { lettre: 'E', texte: 'La phase vasculaire suit toujours la phase cellulaire.', vraie: false, justification: 'C’est l’inverse : la phase vasculaire précède et prépare la phase cellulaire.' },
      ],
      correction: 'Réponses exactes : A, B et D. La phase vasculaire prépare le recrutement cellulaire qui suit.',
      difficulte: 2,
    },
    {
      id: 'ue5-inflammation-qcm-03',
      enonce: 'Concernant la diapédèse leucocytaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le roulement précède l’adhérence ferme.', vraie: true, justification: 'Exact : c’est l’ordre chronologique normal de la séquence.' },
        { lettre: 'B', texte: 'Les sélectines assurent l’adhérence ferme et durable.', vraie: false, justification: 'Les sélectines assurent une interaction faible et transitoire (roulement) ; l’adhérence ferme relève des intégrines.' },
        { lettre: 'C', texte: 'Les chimiokines contribuent à l’activation des intégrines leucocytaires.', vraie: true, justification: 'Exact : elles favorisent le changement de conformation des intégrines vers une forme de haute affinité.' },
        { lettre: 'D', texte: 'Le leucocyte franchit la membrane basale endothéliale lors de la transmigration.', vraie: true, justification: 'Exact : c’est une étape indispensable pour atteindre le tissu interstitiel.' },
        { lettre: 'E', texte: 'Le déficit d’adhérence leucocytaire de type 1 est lié à un excès d’intégrines CD18.', vraie: false, justification: 'Il est lié à un déficit, et non à un excès, d’intégrines CD18.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir la séquence roulement puis adhérence ferme puis transmigration.',
      difficulte: 2,
    },
    {
      id: 'ue5-inflammation-qcm-04',
      enonce: 'Concernant les médiateurs chimiques de l’inflammation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La bradykinine provoque une vasodilatation et une douleur.', vraie: true, justification: 'Exact : elle appartient au système des kinines plasmatiques.' },
        { lettre: 'B', texte: 'C5a est une anaphylatoxine issue du système du complément.', vraie: true, justification: 'Exact : C3a et C5a sont les deux principales anaphylatoxines du complément.' },
        { lettre: 'C', texte: 'Le leucotriène B4 provient de la voie de la cyclo-oxygénase.', vraie: false, justification: 'Il provient de la voie de la lipo-oxygénase, non de la cyclo-oxygénase.' },
        { lettre: 'D', texte: 'Les AINS inhibent la synthèse des prostaglandines.', vraie: true, justification: 'Exact : en bloquant la cyclo-oxygénase.' },
        { lettre: 'E', texte: 'L’interleukine 8 (CXCL8) est un puissant chimioattractant des polynucléaires neutrophiles.', vraie: true, justification: 'Exact : c’est une chimiokine majeure du recrutement neutrophilique.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Bien distinguer les origines cyclo-oxygénase et lipo-oxygénase de l’acide arachidonique.',
      difficulte: 2,
    },
    {
      id: 'ue5-inflammation-qcm-05',
      enonce: 'Concernant l’inflammation chronique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est dominée par les polynucléaires neutrophiles.', vraie: false, justification: 'Elle est dominée par les macrophages, les lymphocytes et les plasmocytes.' },
        { lettre: 'B', texte: 'Elle peut s’accompagner de fibrose.', vraie: true, justification: 'Exact : la prolifération conjonctive et vasculaire est fréquente dans l’inflammation chronique.' },
        { lettre: 'C', texte: 'Le granulome est une lésion caractéristique possible de l’inflammation chronique.', vraie: true, justification: 'Exact, notamment face à un agent persistant comme la mycobactérie tuberculeuse.' },
        { lettre: 'D', texte: 'Elle dure généralement moins de vingt-quatre heures.', vraie: false, justification: 'Elle s’installe au contraire sur plusieurs semaines à plusieurs mois, voire des années.' },
        { lettre: 'E', texte: 'Les cellules épithélioïdes dérivent de macrophages activés.', vraie: true, justification: 'Exact : elles constituent, avec les cellules géantes, les composants du granulome.' },
      ],
      correction: 'Réponses exactes : B, C et E. L’inflammation chronique s’oppose à l’inflammation aiguë par sa durée et ses acteurs cellulaires.',
      difficulte: 2,
    },
    {
      id: 'ue5-inflammation-qcm-06',
      enonce: 'Concernant les protéines de la phase aiguë, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La CRP augmente lors d’un syndrome inflammatoire.', vraie: true, justification: 'Exact : c’est un marqueur biologique usuel et sensible de l’inflammation.' },
        { lettre: 'B', texte: 'L’IL-6 est un inducteur majeur de la synthèse hépatique de la CRP.', vraie: true, justification: 'Exact : l’IL-6 stimule les hépatocytes à produire les protéines de la phase aiguë.' },
        { lettre: 'C', texte: 'L’albumine est une protéine positive de la phase aiguë.', vraie: false, justification: 'L’albumine est une protéine négative : sa concentration diminue lors de l’inflammation.' },
        { lettre: 'D', texte: 'Le fibrinogène augmente lors de la réaction inflammatoire.', vraie: true, justification: 'Exact : il contribue notamment à l’accélération de la vitesse de sédimentation.' },
        { lettre: 'E', texte: 'La synthèse des protéines de la phase aiguë a lieu principalement dans la rate.', vraie: false, justification: 'Elle a lieu principalement dans le foie, sous l’effet de l’IL-6.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir le rôle central de l’IL-6 et du foie dans la genèse des protéines de la phase aiguë.',
      difficulte: 2,
    },
  ],
};
