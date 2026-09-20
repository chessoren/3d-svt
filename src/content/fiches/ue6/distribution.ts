import type { Fiche } from '../../types';

export const ficheDistribution: Fiche = {
  id: 'ue6-distribution',
  ue: 'ue6',
  titre: 'Distribution',
  sousTitre: 'Volume de distribution, fixation aux protéines plasmatiques, barrières biologiques et conséquences cliniques',
  chapitre: 'Pharmacocinétique',
  ordre: 4,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'distribution',
    'volume de distribution',
    'fixation protéique',
    'albumine',
    'barrière hémato-encéphalique',
    'barrière placentaire',
    'fraction libre',
    'redistribution',
  ],
  objectifs: [
    'Définir la distribution et le volume de distribution apparent.',
    'Expliquer le rôle de la fixation aux protéines plasmatiques.',
    'Décrire les barrières hémato-encéphalique et placentaire.',
    'Citer les principaux facteurs de variation de la distribution.',
    'Analyser les conséquences cliniques d’une modification de la fixation protéique.',
  ],
  sections: [
    {
      id: 'definition-distribution',
      titre: 'Définition et principe de la distribution',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La distribution est l’étape pharmacocinétique au cours de laquelle un médicament, une fois passé dans la circulation sanguine, se répartit dans les différents compartiments de l’organisme : le compartiment plasmatique, le compartiment interstitiel et le compartiment intracellulaire, selon ses propriétés physico-chimiques.",
        },
        {
          type: 'liste',
          items: [
            'La distribution dépend de la liposolubilité du médicament, de son degré d’ionisation au pH physiologique, de sa fixation aux protéines plasmatiques et tissulaires, et de la perfusion des différents organes.',
            'Les organes richement vascularisés, comme le cœur, le foie, les reins et le cerveau, sont atteints plus rapidement que les organes peu perfusés, comme le tissu adipeux ou l’os.',
            'La distribution est un processus dynamique, qui peut évoluer au cours du temps par un phénomène de redistribution entre compartiments.',
          ],
        },
        {
          type: 'definition',
          terme: 'Redistribution',
          definition:
            "Phénomène par lequel un médicament, initialement concentré dans un tissu richement vascularisé après administration, se redistribue secondairement vers des tissus moins perfusés mais à forte affinité, comme le tissu adipeux, ce qui peut expliquer la fin rapide de l’effet clinique de certains agents malgré une élimination lente.",
        },
      ],
    },
    {
      id: 'volume-distribution',
      titre: 'Volume de distribution apparent',
      blocs: [
        {
          type: 'definition',
          terme: 'Volume de distribution apparent (Vd)',
          definition:
            "Volume théorique dans lequel devrait être uniformément dilué un médicament pour que sa concentration soit égale à la concentration plasmatique mesurée. C’est un paramètre pharmacocinétique de proportionnalité, sans réalité anatomique stricte, qui peut dépasser très largement le volume corporel réel.",
        },
        {
          type: 'formule',
          expression: 'Vd = Dose administrée / Concentration plasmatique',
          legende:
            "Formule de calcul du volume de distribution apparent, applicable après administration intraveineuse d’une dose connue, en négligeant l’élimination survenue avant la mesure.",
        },
        {
          type: 'tableau',
          titre: 'Interprétation du volume de distribution',
          colonnes: ['Valeur de Vd', 'Interprétation', 'Exemple de comportement'],
          lignes: [
            ['Faible (proche du volume plasmatique, environ 3 à 5 L)', 'Médicament peu diffusible, confiné au secteur vasculaire', 'Molécule fortement liée aux protéines plasmatiques ou de grande taille'],
            ['Intermédiaire (environ 15 à 40 L)', 'Distribution dans les liquides extracellulaires ou dans l’eau corporelle totale', 'Molécule hydrosoluble de petite taille'],
            ['Élevé (supérieur au volume corporel total, plusieurs centaines de litres)', 'Distribution tissulaire importante, forte fixation tissulaire', 'Molécule très liposoluble, accumulée dans les tissus'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Comment lire un Vd élevé',
          texte:
            "Un volume de distribution très supérieur au volume corporel total ne signifie pas que le médicament occupe physiquement un espace immense, mais qu’il est massivement séquestré dans les tissus, laissant une concentration plasmatique très basse par rapport à la dose administrée.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordres de grandeur physiologiques',
          texte:
            "Chez l’adulte de 70 kg, le volume plasmatique est d’environ 3 litres, le volume sanguin total d’environ 5 litres, le volume extracellulaire d’environ 14 litres, et l’eau corporelle totale d’environ 42 litres. Ces valeurs servent de repères pour interpréter un volume de distribution.",
        },
      ],
    },
    {
      id: 'fixation-proteique',
      titre: 'Fixation aux protéines plasmatiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "De nombreux médicaments circulent dans le plasma partiellement liés à des protéines plasmatiques, principalement l’albumine pour les médicaments acides et l’alpha-1-glycoprotéine acide pour les médicaments basiques. Cette liaison est en général réversible et saturable.",
        },
        {
          type: 'definition',
          terme: 'Fraction libre',
          definition:
            "Fraction du médicament présente dans le plasma sous forme non liée aux protéines plasmatiques. Seule cette fraction libre est pharmacologiquement active, capable de diffuser à travers les membranes biologiques, d’atteindre son site d’action, d’être métabolisée et d’être éliminée.",
        },
        {
          type: 'tableau',
          titre: 'Principales protéines de liaison plasmatique',
          colonnes: ['Protéine', 'Type de médicaments liés', 'Particularité'],
          lignes: [
            ['Albumine', 'Médicaments acides principalement', 'Protéine la plus abondante, capacité de liaison élevée mais saturable'],
            ['Alpha-1-glycoprotéine acide', 'Médicaments basiques principalement', 'Protéine de l’inflammation, dont la concentration augmente en situation inflammatoire'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Compétition de liaison',
          texte:
            "Deux médicaments fortement liés aux protéines plasmatiques peuvent entrer en compétition pour les mêmes sites de fixation : l’administration du second peut déplacer le premier de sa liaison protéique, augmentant transitoirement sa fraction libre et donc son activité pharmacologique, avant qu’un nouvel équilibre ne s’établisse.",
        },
        {
          type: 'liste',
          items: [
            'L’hypoalbuminémie, observée en cas de dénutrition, d’insuffisance hépatique ou de syndrome néphrotique, augmente la fraction libre des médicaments fortement liés à l’albumine.',
            'Une insuffisance rénale chronique peut modifier la fixation protéique par accumulation de toxines urémiques compétant avec le médicament sur les sites de liaison de l’albumine.',
            'La grossesse s’accompagne d’une diminution physiologique de l’albuminémie, pouvant augmenter la fraction libre de certains médicaments.',
          ],
        },
      ],
    },
    {
      id: 'barrieres',
      titre: 'Barrières hémato-encéphalique et placentaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Barrière hémato-encéphalique',
          definition:
            "Ensemble de structures, notamment les jonctions serrées entre cellules endothéliales des capillaires cérébraux, qui limitent le passage de nombreuses substances, dont les médicaments, entre le sang et le système nerveux central.",
        },
        {
          type: 'liste',
          items: [
            'Seuls les médicaments suffisamment liposolubles, de faible poids moléculaire et non substrats de systèmes d’efflux actif comme la glycoprotéine P, traversent efficacement la barrière hémato-encéphalique.',
            'Certaines pathologies, comme les méningites ou certains processus inflammatoires, augmentent la perméabilité de la barrière hémato-encéphalique, permettant le passage de médicaments habituellement peu diffusibles.',
            'La barrière hémato-encéphalique est incomplète chez le nouveau-né, ce qui expose à une plus grande vulnérabilité aux toxiques centraux à cet âge.',
          ],
        },
        {
          type: 'definition',
          terme: 'Barrière placentaire',
          definition:
            "Ensemble de structures séparant la circulation maternelle et la circulation fœtale, qui limite mais n’empêche pas totalement le passage transplacentaire de nombreux médicaments, principalement par diffusion passive selon les mêmes déterminants que les autres membranes biologiques.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La barrière placentaire n’est pas imperméable',
          texte:
            "Contrairement à une idée reçue, la barrière placentaire ne protège pas totalement le fœtus des médicaments pris par la mère. La plupart des médicaments liposolubles de faible poids moléculaire la traversent, ce qui justifie une vigilance particulière lors de toute prescription chez la femme enceinte.",
        },
        {
          type: 'tableau',
          titre: 'Facteurs favorisant le passage transplacentaire',
          colonnes: ['Facteur', 'Effet sur le passage'],
          lignes: [
            ['Liposolubilité élevée', 'Favorise le passage'],
            ['Faible poids moléculaire', 'Favorise le passage'],
            ['Faible fixation aux protéines plasmatiques maternelles', 'Favorise le passage de la fraction libre'],
            ['Terme avancé de la grossesse', 'Surface d’échange placentaire accrue, passage facilité'],
          ],
        },
      ],
    },
    {
      id: 'facteurs-variation',
      titre: 'Facteurs de variation de la distribution',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Plusieurs facteurs physiologiques et pathologiques peuvent modifier la distribution d’un médicament chez un patient donné, avec des conséquences potentielles sur l’efficacité et la tolérance du traitement.",
        },
        {
          type: 'tableau',
          titre: 'Facteurs de variation de la distribution',
          colonnes: ['Facteur', 'Conséquence sur la distribution'],
          lignes: [
            ['Âge (nouveau-né, sujet âgé)', 'Modification de la composition corporelle en eau et en masse grasse'],
            ['Obésité', 'Augmentation du volume de distribution des médicaments liposolubles'],
            ['Dénutrition, insuffisance hépatique', 'Hypoalbuminémie, augmentation de la fraction libre'],
            ['Insuffisance cardiaque', 'Réduction de la perfusion tissulaire, distribution ralentie'],
            ['Grossesse', 'Augmentation du volume plasmatique, diminution de l’albuminémie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Sujet âgé et distribution',
          texte:
            "Le vieillissement s’accompagne typiquement d’une diminution de la masse maigre et d’une augmentation relative de la masse grasse, ce qui augmente le volume de distribution des médicaments liposolubles et peut prolonger leur durée d’action, tandis que le volume de distribution des médicaments hydrosolubles tend à diminuer.",
        },
      ],
    },
    {
      id: 'consequences-cliniques',
      titre: 'Conséquences cliniques de la fixation protéique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La fixation aux protéines plasmatiques a des implications cliniques importantes, en particulier pour les médicaments fortement liés, c’est-à-dire dont la fraction libre habituelle est faible, généralement inférieure à quinze à vingt pour cent.",
        },
        {
          type: 'liste',
          items: [
            'Pour un médicament fortement lié aux protéines plasmatiques, une faible variation de la fraction liée peut entraîner une variation proportionnellement importante de la fraction libre active.',
            'Le dosage plasmatique total (libre plus lié) d’un médicament fortement lié peut être trompeur en cas d’hypoalbuminémie, car il sous-estime l’activité pharmacologique réelle liée à la fraction libre.',
            'Les interactions par déplacement de la fixation protéique sont surtout cliniquement significatives pour les médicaments à marge thérapeutique étroite et à volume de distribution faible.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Piège classique en pharmacologie',
          texte:
            "Un déplacement de la fixation protéique augmente transitoirement la fraction libre, donc l’effet pharmacologique et le risque d’effet indésirable, mais cette fraction libre supplémentaire est aussi plus rapidement métabolisée et éliminée, ce qui tend à limiter la durée de la conséquence clinique dans de nombreux cas, sauf pour les médicaments à faible volume de distribution.",
        },
      ],
    },
  ],
  pointsCles: [
    "La distribution dépend de la liposolubilité, de l’ionisation, de la fixation protéique et de la perfusion tissulaire.",
    "Le volume de distribution apparent est un paramètre de proportionnalité, sans réalité anatomique stricte.",
    "Seule la fraction libre d’un médicament est pharmacologiquement active.",
    "L’albumine lie principalement les médicaments acides, l’alpha-1-glycoprotéine acide les médicaments basiques.",
    "La barrière placentaire ne protège pas totalement le fœtus des médicaments maternels.",
    "L’hypoalbuminémie augmente la fraction libre des médicaments fortement liés à l’albumine.",
    "Les interactions par déplacement protéique sont surtout significatives pour les médicaments à faible volume de distribution et marge thérapeutique étroite.",
  ],
  erreursFrequentes: [
    "Croire qu’un volume de distribution élevé signifie que le médicament occupe un espace anatomique réel équivalent.",
    "Penser que la barrière placentaire empêche totalement le passage des médicaments vers le fœtus.",
    "Oublier que seule la fraction libre d’un médicament est active et éliminée.",
    "Considérer le dosage plasmatique total comme toujours représentatif de l’activité pharmacologique réelle.",
    "Négliger l’importance clinique du volume de distribution dans l’évaluation d’une interaction par déplacement protéique.",
  ],
  mnemotechniques: [
    {
      moyen: 'AA-BA : Acide-Albumine, Base-Alpha-1',
      explication:
        'Les médicaments Acides se lient à l’Albumine, les médicaments Basiques à l’Alpha-1-glycoprotéine acide.',
    },
    {
      moyen: 'Vd élevé = Vasé dans les tissus',
      explication:
        'Un volume de distribution élevé traduit une forte séquestration tissulaire du médicament, et non un espace physique réellement occupé.',
    },
    {
      moyen: 'Libre = Lucide et actif',
      explication:
        'Seule la fraction libre d’un médicament est pharmacologiquement active, capable de diffuser et d’agir.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-distribution-fc-01',
      recto: 'Définir le volume de distribution apparent.',
      verso: 'Volume théorique dans lequel devrait être dilué un médicament pour égaler sa concentration plasmatique mesurée, sans réalité anatomique stricte.',
      type: 'definition',
      tags: ['volume de distribution'],
    },
    {
      id: 'ue6-distribution-fc-02',
      recto: 'Quelle formule permet de calculer le volume de distribution ?',
      verso: 'Vd = Dose administrée / Concentration plasmatique.',
      type: 'formule',
      tags: ['volume de distribution'],
    },
    {
      id: 'ue6-distribution-fc-03',
      recto: 'Qu’est-ce que la fraction libre d’un médicament ?',
      verso: 'La fraction non liée aux protéines plasmatiques, seule pharmacologiquement active.',
      type: 'definition',
      tags: ['fixation protéique'],
    },
    {
      id: 'ue6-distribution-fc-04',
      recto: 'Quelle protéine plasmatique lie principalement les médicaments acides ?',
      verso: 'L’albumine.',
      type: 'classification',
      tags: ['fixation protéique'],
    },
    {
      id: 'ue6-distribution-fc-05',
      recto: 'Quelle protéine plasmatique lie principalement les médicaments basiques ?',
      verso: 'L’alpha-1-glycoprotéine acide.',
      type: 'classification',
      tags: ['fixation protéique'],
    },
    {
      id: 'ue6-distribution-fc-06',
      recto: 'Quelle est la conséquence d’une hypoalbuminémie sur un médicament fortement lié à l’albumine ?',
      verso: 'Une augmentation de sa fraction libre, donc de son activité pharmacologique.',
      type: 'clinique',
      tags: ['hypoalbuminémie'],
    },
    {
      id: 'ue6-distribution-fc-07',
      recto: 'La barrière placentaire protège-t-elle totalement le fœtus des médicaments maternels ?',
      verso: 'Non, la plupart des médicaments liposolubles de faible poids moléculaire la traversent.',
      type: 'clinique',
      tags: ['barrière placentaire'],
    },
    {
      id: 'ue6-distribution-fc-08',
      recto: 'Quels médicaments traversent efficacement la barrière hémato-encéphalique ?',
      verso: 'Les médicaments liposolubles, de faible poids moléculaire et non substrats de systèmes d’efflux comme la glycoprotéine P.',
      type: 'mecanisme',
      tags: ['barrière hémato-encéphalique'],
    },
    {
      id: 'ue6-distribution-fc-09',
      recto: 'Qu’est-ce que la redistribution ?',
      verso: 'Le passage secondaire d’un médicament d’un tissu richement perfusé vers un tissu moins perfusé mais à forte affinité, comme le tissu adipeux.',
      type: 'mecanisme',
      tags: ['redistribution'],
    },
    {
      id: 'ue6-distribution-fc-10',
      recto: 'Comment évolue le volume de distribution des médicaments liposolubles chez le sujet âgé ?',
      verso: 'Il augmente, en raison de l’augmentation relative de la masse grasse avec l’âge.',
      type: 'clinique',
      tags: ['sujet âgé'],
    },
    {
      id: 'ue6-distribution-fc-11',
      recto: 'Pour quels médicaments une interaction par déplacement protéique est-elle surtout significative ?',
      verso: 'Les médicaments à marge thérapeutique étroite et à faible volume de distribution.',
      type: 'clinique',
      tags: ['interaction', 'fixation protéique'],
    },
    {
      id: 'ue6-distribution-fc-12',
      recto: 'Quel est le volume plasmatique approximatif chez l’adulte de 70 kg ?',
      verso: 'Environ 3 litres.',
      type: 'chiffre',
      tags: ['volumes physiologiques'],
    },
  ],
  qcm: [
    {
      id: 'ue6-distribution-qcm-01',
      enonce: 'Concernant le volume de distribution apparent, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il correspond toujours à un volume anatomique réel de l’organisme.', vraie: false, justification: 'C’est un paramètre théorique de proportionnalité, qui peut dépasser très largement le volume corporel réel.' },
        { lettre: 'B', texte: 'Un Vd élevé traduit une forte séquestration tissulaire du médicament.', vraie: true, justification: 'Le médicament est alors peu présent dans le plasma par rapport à la dose administrée, car majoritairement fixé dans les tissus.' },
        { lettre: 'C', texte: 'Un médicament fortement lié aux protéines plasmatiques a en général un Vd faible.', vraie: true, justification: 'Il reste largement confiné au secteur vasculaire, ce qui limite son volume de distribution apparent.' },
        { lettre: 'D', texte: 'Le Vd se calcule uniquement à partir de la clairance du médicament.', vraie: false, justification: 'Il se calcule à partir de la dose administrée et de la concentration plasmatique obtenue.' },
        { lettre: 'E', texte: 'Le Vd peut être supérieur au volume corporel total.', vraie: true, justification: 'C’est le cas des médicaments très liposolubles, massivement fixés dans les tissus.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-distribution-qcm-02',
      enonce: 'Concernant la fixation aux protéines plasmatiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Seule la fraction libre d’un médicament est pharmacologiquement active.', vraie: true, justification: 'La fraction liée ne peut pas diffuser à travers les membranes ni atteindre son site d’action.' },
        { lettre: 'B', texte: 'L’albumine lie principalement les médicaments basiques.', vraie: false, justification: 'L’albumine lie principalement les médicaments acides ; les médicaments basiques se lient surtout à l’alpha-1-glycoprotéine acide.' },
        { lettre: 'C', texte: 'La liaison aux protéines plasmatiques est en général réversible.', vraie: true, justification: 'C’est une liaison non covalente, saturable et réversible.' },
        { lettre: 'D', texte: 'Une hypoalbuminémie diminue la fraction libre des médicaments liés à l’albumine.', vraie: false, justification: 'Elle augmente au contraire la fraction libre, en réduisant le nombre de sites de fixation disponibles.' },
        { lettre: 'E', texte: 'Deux médicaments peuvent entrer en compétition pour les mêmes sites de fixation protéique.', vraie: true, justification: 'C’est le principe des interactions par déplacement de la fixation protéique.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-distribution-qcm-03',
      enonce: 'Concernant les barrières hémato-encéphalique et placentaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La barrière hémato-encéphalique repose notamment sur des jonctions serrées entre cellules endothéliales.', vraie: true, justification: 'Ces jonctions limitent le passage paracellulaire de nombreuses substances.' },
        { lettre: 'B', texte: 'La barrière hémato-encéphalique est totalement imperméable à tous les médicaments.', vraie: false, justification: 'Les médicaments liposolubles de faible poids moléculaire peuvent la traverser efficacement.' },
        { lettre: 'C', texte: 'Certaines inflammations méningées peuvent augmenter la perméabilité de la barrière hémato-encéphalique.', vraie: true, justification: 'C’est le cas des méningites, qui facilitent le passage de médicaments habituellement peu diffusibles.' },
        { lettre: 'D', texte: 'La barrière placentaire empêche totalement le passage des médicaments vers le fœtus.', vraie: false, justification: 'La plupart des médicaments liposolubles de faible poids moléculaire traversent le placenta.' },
        { lettre: 'E', texte: 'La barrière hémato-encéphalique est incomplète chez le nouveau-né.', vraie: true, justification: 'Ce qui explique une plus grande vulnérabilité aux toxiques centraux à cet âge.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-distribution-qcm-04',
      enonce: 'Concernant les facteurs de variation de la distribution, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’obésité augmente le volume de distribution des médicaments liposolubles.', vraie: true, justification: 'L’augmentation de la masse grasse offre un réservoir de fixation accru pour ces médicaments.' },
        { lettre: 'B', texte: 'La grossesse s’accompagne d’une augmentation de l’albuminémie.', vraie: false, justification: 'La grossesse s’accompagne au contraire d’une diminution physiologique de l’albuminémie.' },
        { lettre: 'C', texte: 'Le vieillissement diminue en général le volume de distribution des médicaments hydrosolubles.', vraie: true, justification: 'La diminution de la masse maigre et de l’eau corporelle totale réduit ce volume de distribution.' },
        { lettre: 'D', texte: 'L’insuffisance cardiaque peut ralentir la distribution tissulaire.', vraie: true, justification: 'La réduction de la perfusion tissulaire ralentit l’accès du médicament aux tissus.' },
        { lettre: 'E', texte: 'La dénutrition n’a aucun effet sur la fixation protéique des médicaments.', vraie: false, justification: 'La dénutrition peut entraîner une hypoalbuminémie, augmentant la fraction libre des médicaments liés à l’albumine.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-distribution-qcm-05',
      enonce: 'Concernant les conséquences cliniques de la fixation protéique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Pour un médicament fortement lié, une faible variation de la fraction liée modifie fortement la fraction libre.', vraie: true, justification: 'C’est une conséquence mathématique directe lorsque la fraction liée initiale est très élevée.' },
        { lettre: 'B', texte: 'Le dosage plasmatique total est toujours représentatif de l’activité pharmacologique réelle.', vraie: false, justification: 'En cas d’hypoalbuminémie, ce dosage peut sous-estimer l’activité réelle liée à la fraction libre augmentée.' },
        { lettre: 'C', texte: 'Les interactions par déplacement protéique sont surtout significatives pour les médicaments à faible volume de distribution.', vraie: true, justification: 'Un faible Vd concentre l’effet du déplacement dans le secteur plasmatique, amplifiant la conséquence clinique.' },
        { lettre: 'D', texte: 'Un déplacement de la fixation protéique augmente transitoirement la fraction libre active.', vraie: true, justification: 'C’est le mécanisme initial de ce type d’interaction, avant un nouvel équilibre.' },
        { lettre: 'E', texte: 'La fraction libre supplémentaire issue d’un déplacement protéique n’est jamais éliminée plus vite.', vraie: false, justification: 'Elle est au contraire plus rapidement métabolisée et éliminée, ce qui tend à limiter la durée de la conséquence clinique.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 3,
    },
    {
      id: 'ue6-distribution-qcm-06',
      enonce: 'Concernant la distribution en général, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les organes richement vascularisés sont atteints plus rapidement par un médicament.', vraie: true, justification: 'La perfusion tissulaire conditionne la vitesse d’accès du médicament à un organe donné.' },
        { lettre: 'B', texte: 'La redistribution peut expliquer la fin rapide de l’effet clinique de certains agents malgré une élimination lente.', vraie: true, justification: 'Le médicament se redistribue secondairement vers des tissus moins perfusés, réduisant sa concentration au site d’action initial.' },
        { lettre: 'C', texte: 'La distribution ne dépend que de la perfusion tissulaire, jamais de la liposolubilité.', vraie: false, justification: 'La liposolubilité, l’ionisation et la fixation protéique sont également des déterminants majeurs de la distribution.' },
        { lettre: 'D', texte: 'Le tissu adipeux est un exemple de tissu peu perfusé.', vraie: true, justification: 'Il est atteint plus lentement que les organes richement vascularisés comme le foie ou le cerveau.' },
        { lettre: 'E', texte: 'La distribution est un processus figé, identique à tout moment après l’administration.', vraie: false, justification: 'C’est au contraire un processus dynamique, pouvant évoluer par redistribution entre compartiments.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
