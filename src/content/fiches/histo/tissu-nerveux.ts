import type { Fiche } from '../../types';

export const ficheTissuNerveux: Fiche = {
  id: 'histo-tissu-nerveux',
  ue: 'histo',
  titre: 'Le tissu nerveux',
  sousTitre: 'Neurone, synapse, cellules gliales, myélinisation et nerf périphérique',
  chapitre: 'Les tissus fondamentaux',
  ordre: 9,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'neurone',
    'synapse',
    'astrocyte',
    'oligodendrocyte',
    'cellule de Schwann',
    'myéline',
    'nerf périphérique',
    'barrière hémato-encéphalique',
  ],
  objectifs: [
    "Décrire la morphologie générale du neurone et ses principaux types.",
    "Décrire l’organisation structurale et fonctionnelle de la synapse.",
    "Distinguer les différentes cellules gliales du système nerveux central et périphérique.",
    "Expliquer le processus de myélinisation et ses différences entre système nerveux central et périphérique.",
    "Décrire l’organisation d’un nerf périphérique et le rôle de la barrière hémato-encéphalique.",
  ],
  sections: [
    {
      id: 'le-neurone',
      titre: 'Le neurone',
      blocs: [
        {
          type: 'definition',
          terme: 'Neurone',
          definition:
            "Cellule excitable, hautement différenciée et post-mitotique, spécialisée dans la réception, l’intégration et la transmission de l’information nerveuse sous forme de signaux électriques et chimiques.",
        },
        {
          type: 'liste',
          items: [
            "Le corps cellulaire, ou péricaryon, contient le noyau et la majorité des organites, notamment un réticulum endoplasmique granulaire abondant appelé corps de Nissl.",
            "Les dendrites sont de courts prolongements ramifiés, spécialisés dans la réception des signaux entrants.",
            "L’axone est un prolongement unique, parfois très long, conduisant l’influx nerveux du corps cellulaire vers la terminaison synaptique.",
            "Le cône d’émergence axonal (segment initial) est le site d’initiation du potentiel d’action.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Classification morphologique des neurones',
          colonnes: ['Type', 'Description', 'Exemple'],
          lignes: [
            ['Neurone multipolaire', 'Un axone et plusieurs dendrites', 'Motoneurone de la corne antérieure de la moelle épinière'],
            ['Neurone bipolaire', 'Un axone et une seule dendrite, de part et d’autre du corps cellulaire', 'Cellule bipolaire de la rétine'],
            ['Neurone pseudo-unipolaire (en T)', 'Un seul prolongement qui se divise en deux branches', 'Neurone sensitif du ganglion spinal (rachidien)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le neurone est une cellule post-mitotique',
          texte:
            "Le neurone mature, à de rares exceptions près, ne se divise plus après la période de développement du système nerveux, ce qui explique la faible capacité de régénération du système nerveux central après une lésion.",
        },
      ],
    },
    {
      id: 'synapse',
      titre: 'La synapse',
      blocs: [
        {
          type: 'definition',
          terme: 'Synapse',
          definition:
            "Zone de contact spécialisée entre deux neurones, ou entre un neurone et une cellule effectrice, permettant la transmission unidirectionnelle d’un signal.",
        },
        {
          type: 'etapes',
          titre: 'Transmission synaptique chimique',
          etapes: [
            {
              titre: 'Arrivée du potentiel d’action',
              detail: "Dépolarisation de la membrane présynaptique, au niveau du bouton synaptique terminal de l’axone.",
            },
            {
              titre: 'Entrée de calcium',
              detail: "Ouverture de canaux calciques voltage-dépendants, entraînant l’entrée de calcium dans le bouton présynaptique.",
            },
            {
              titre: 'Exocytose du neurotransmetteur',
              detail: "Fusion des vésicules synaptiques avec la membrane présynaptique, libération du neurotransmetteur dans la fente synaptique.",
            },
            {
              titre: 'Fixation sur les récepteurs postsynaptiques',
              detail: "Le neurotransmetteur se fixe sur des récepteurs spécifiques de la membrane postsynaptique, entraînant une réponse excitatrice ou inhibitrice.",
            },
          ],
        },
        {
          type: 'comparaison',
          titre: 'Synapse chimique versus synapse électrique',
          gauche: {
            titre: 'Synapse chimique',
            points: [
              'Transmission via un neurotransmetteur',
              'Fente synaptique large, sans continuité membranaire',
              'Délai synaptique, transmission unidirectionnelle',
            ],
          },
          droite: {
            titre: 'Synapse électrique',
            points: [
              'Transmission directe via des jonctions communicantes (gap junctions)',
              'Continuité cytoplasmique entre les deux cellules',
              'Transmission quasi instantanée, souvent bidirectionnelle',
            ],
          },
        },
      ],
    },
    {
      id: 'cellules-gliales-centrales',
      titre: 'Les cellules gliales du système nerveux central',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cellules gliales, plus nombreuses que les neurones, assurent des fonctions de soutien, de nutrition, de myélinisation et de défense au sein du système nerveux. Elles n’ont pas d’activité électrique de type potentiel d’action.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre cellules gliales du système nerveux central',
          colonnes: ['Cellule', 'Origine', 'Fonction principale'],
          lignes: [
            ['Astrocyte', 'Neuroectoderme', 'Soutien structural, participation à la barrière hémato-encéphalique, régulation du milieu extracellulaire'],
            ['Oligodendrocyte', 'Neuroectoderme', 'Myélinisation des axones du système nerveux central'],
            ['Microglie', 'Lignée hématopoïétique (monocytaire)', 'Immunité innée et phagocytose au sein du système nerveux central'],
            ['Cellule épendymaire', 'Neuroectoderme', 'Revêtement des cavités ventriculaires et du canal central, participation à la production du liquide cérébrospinal'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La microglie, une exception d’origine',
          texte:
            "Contrairement aux trois autres cellules gliales centrales, d’origine neuroectodermique, la microglie dérive de précurseurs hématopoïétiques d’origine myéloïde, apparentés aux macrophages, ce qui en fait la cellule immunitaire résidente du système nerveux central.",
        },
      ],
    },
    {
      id: 'cellules-gliales-peripheriques',
      titre: 'Les cellules gliales du système nerveux périphérique',
      blocs: [
        {
          type: 'tableau',
          titre: 'Les cellules gliales du système nerveux périphérique',
          colonnes: ['Cellule', 'Fonction principale'],
          lignes: [
            ['Cellule de Schwann', 'Myélinisation des axones du système nerveux périphérique'],
            ['Cellule satellite', 'Entoure les corps cellulaires des neurones dans les ganglions périphériques, fonction de soutien et de nutrition'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un rapport différent entre glie et axone',
          texte:
            "Une seule cellule de Schwann myélinise un seul segment d’un seul axone (relation univoque), alors qu’un seul oligodendrocyte peut myéliniser simultanément plusieurs segments appartenant à plusieurs axones différents du système nerveux central.",
        },
      ],
    },
    {
      id: 'myelinisation',
      titre: 'La myélinisation',
      blocs: [
        {
          type: 'definition',
          terme: 'Myéline',
          definition:
            "Gaine lipoprotéique multilamellaire enroulée autour de l’axone, formée par l’enroulement successif de la membrane plasmique d’une cellule gliale, qui accélère considérablement la conduction de l’influx nerveux.",
        },
        {
          type: 'liste',
          items: [
            "La myéline est interrompue à intervalles réguliers par les nœuds de Ranvier, zones dépourvues de myéline où se concentrent les canaux sodiques voltage-dépendants.",
            "La conduction de l’influx nerveux le long d’un axone myélinisé est dite saltatoire : le potentiel d’action saute d’un nœud de Ranvier à l’autre.",
            "Un axone myélinisé conduit l’influx nerveux beaucoup plus rapidement qu’un axone amyélinique de même diamètre.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Démyélinisation et sclérose en plaques',
          texte:
            "La sclérose en plaques est une maladie auto-immune démyélinisante du système nerveux central, affectant la gaine de myéline formée par les oligodendrocytes, ce qui entraîne un ralentissement, voire un blocage, de la conduction nerveuse.",
        },
      ],
    },
    {
      id: 'nerf-peripherique-bhe',
      titre: 'Le nerf périphérique et la barrière hémato-encéphalique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un nerf périphérique est constitué d’un ensemble de fibres nerveuses (axones myélinisés ou amyéliniques) entourées d’enveloppes conjonctives organisées de façon hiérarchique, sur un modèle rappelant celui du muscle strié squelettique.",
        },
        {
          type: 'tableau',
          titre: 'Organisation conjonctive du nerf périphérique',
          colonnes: ['Enveloppe', 'Localisation'],
          lignes: [
            ['Épinèvre', 'Enveloppe conjonctive dense entourant le nerf entier'],
            ['Périnèvre', 'Enveloppe entourant chaque faisceau de fibres nerveuses (fascicule)'],
            ['Endonèvre', 'Tissu conjonctif lâche entourant chaque fibre nerveuse individuelle'],
          ],
        },
        {
          type: 'definition',
          terme: 'Barrière hémato-encéphalique',
          definition:
            "Interface sélective entre le sang et le tissu nerveux central, formée par des jonctions serrées entre les cellules endothéliales des capillaires cérébraux, complétées par les pieds astrocytaires qui entourent ces capillaires, limitant le passage de nombreuses substances vers le parenchyme cérébral.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Rôle protecteur de la barrière hémato-encéphalique',
          texte:
            "La barrière hémato-encéphalique protège le tissu nerveux central des variations de composition du sang et de nombreuses substances potentiellement toxiques, mais elle limite aussi le passage de certains médicaments, ce qui constitue une contrainte pharmacologique importante en neurologie.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le neurone, cellule post-mitotique, se compose d’un corps cellulaire (péricaryon), de dendrites et d’un axone unique.",
    "Trois types morphologiques de neurones : multipolaire, bipolaire et pseudo-unipolaire (ganglion spinal).",
    "La transmission synaptique chimique passe par l’entrée de calcium, l’exocytose du neurotransmetteur et sa fixation sur des récepteurs postsynaptiques.",
    "Quatre cellules gliales centrales : astrocyte, oligodendrocyte, microglie (d’origine hématopoïétique) et cellule épendymaire.",
    "La cellule de Schwann myélinise un seul segment d’un seul axone périphérique ; l’oligodendrocyte myélinise plusieurs segments de plusieurs axones centraux.",
    "Les nœuds de Ranvier permettent la conduction saltatoire, plus rapide, le long des axones myélinisés.",
    "La barrière hémato-encéphalique associe jonctions serrées endothéliales et pieds astrocytaires.",
  ],
  erreursFrequentes: [
    "Croire que toutes les cellules gliales centrales ont une origine neuroectodermique : la microglie dérive de la lignée hématopoïétique.",
    "Confondre le rapport cellule gliale/axone : une cellule de Schwann pour un seul segment d’un seul axone, un oligodendrocyte pour plusieurs segments de plusieurs axones.",
    "Penser que le neurone se divise activement à l’âge adulte pour se régénérer : il est post-mitotique, ce qui limite la régénération du système nerveux central.",
    "Confondre épinèvre (nerf entier), périnèvre (faisceau) et endonèvre (fibre individuelle), par analogie erronée avec le muscle.",
    "Oublier que la synapse électrique, via des jonctions communicantes, est distincte de la synapse chimique, plus fréquente et plus lente.",
    "Croire que le neurone pseudo-unipolaire possède deux prolongements distincts dès l’origine : il ne possède qu’un seul prolongement qui se divise ensuite en deux branches.",
  ],
  mnemotechniques: [
    {
      moyen: 'AOME pour les quatre gliales centrales : Astrocyte, Oligodendrocyte, Microglie, Épendymaire',
      explication:
        'Quatre cellules gliales du système nerveux central, dont seule la microglie a une origine hématopoïétique et non neuroectodermique.',
    },
    {
      moyen: 'Schwann = Seul, un seul axone, un seul segment',
      explication:
        'La cellule de Schwann myélinise un seul segment d’un seul axone, contrairement à l’oligodendrocyte qui en myélinise plusieurs.',
    },
    {
      moyen: 'Épi-Péri-Endo, comme pour le muscle',
      explication:
        'Épinèvre (nerf entier), périnèvre (faisceau), endonèvre (fibre) : organisation conjonctive du nerf périphérique, sur le même principe que le muscle strié.',
    },
  ],
  sources: [
    'Wheater, Histologie fonctionnelle',
    'Junqueira, Histologie',
    'Poirier, Histologie moléculaire',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'histo-tissu-nerveux-fc-01',
      recto: 'Comment se nomme le corps cellulaire du neurone et que contient-il de caractéristique ?',
      verso: 'Le péricaryon, qui contient le corps de Nissl, un réticulum endoplasmique granulaire abondant.',
      type: 'definition',
      tags: ['neurone'],
    },
    {
      id: 'histo-tissu-nerveux-fc-02',
      recto: 'Citer un exemple de neurone pseudo-unipolaire.',
      verso: 'Le neurone sensitif du ganglion spinal (rachidien).',
      type: 'classification',
      tags: ['neurone', 'classification'],
    },
    {
      id: 'histo-tissu-nerveux-fc-03',
      recto: 'Quelles sont les étapes principales de la transmission synaptique chimique ?',
      verso: 'Entrée de calcium présynaptique, exocytose du neurotransmetteur, fixation sur les récepteurs postsynaptiques.',
      type: 'mecanisme',
      tags: ['synapse'],
    },
    {
      id: 'histo-tissu-nerveux-fc-04',
      recto: 'Quelle cellule gliale centrale participe à la barrière hémato-encéphalique ?',
      verso: 'L’astrocyte, par ses pieds astrocytaires entourant les capillaires cérébraux.',
      type: 'mecanisme',
      tags: ['astrocyte', 'BHE'],
    },
    {
      id: 'histo-tissu-nerveux-fc-05',
      recto: 'Quelle cellule myélinise les axones du système nerveux central ?',
      verso: 'L’oligodendrocyte.',
      type: 'definition',
      tags: ['myélinisation'],
    },
    {
      id: 'histo-tissu-nerveux-fc-06',
      recto: 'Quelle cellule myélinise les axones du système nerveux périphérique ?',
      verso: 'La cellule de Schwann.',
      type: 'definition',
      tags: ['myélinisation'],
    },
    {
      id: 'histo-tissu-nerveux-fc-07',
      recto: 'Quelle est l’origine embryologique particulière de la microglie ?',
      verso: 'Elle dérive de la lignée hématopoïétique monocytaire, à la différence des autres cellules gliales centrales.',
      type: 'chiffre',
      tags: ['microglie'],
    },
    {
      id: 'histo-tissu-nerveux-fc-08',
      recto: 'Qu’est-ce qu’un nœud de Ranvier ?',
      verso: 'Une zone dépourvue de myéline, riche en canaux sodiques voltage-dépendants, permettant la conduction saltatoire.',
      type: 'definition',
      tags: ['myélinisation'],
    },
    {
      id: 'histo-tissu-nerveux-fc-09',
      recto: 'Quelles sont les trois enveloppes conjonctives du nerf périphérique ?',
      verso: 'Épinèvre (nerf entier), périnèvre (faisceau), endonèvre (fibre individuelle).',
      type: 'classification',
      tags: ['nerf périphérique'],
    },
    {
      id: 'histo-tissu-nerveux-fc-10',
      recto: 'Comment est formée la barrière hémato-encéphalique ?',
      verso: 'Par des jonctions serrées entre cellules endothéliales des capillaires cérébraux, complétées par les pieds astrocytaires.',
      type: 'definition',
      tags: ['barrière hémato-encéphalique'],
    },
    {
      id: 'histo-tissu-nerveux-fc-11',
      recto: 'Quelle maladie illustre une démyélinisation du système nerveux central ?',
      verso: 'La sclérose en plaques, maladie auto-immune démyélinisante.',
      type: 'clinique',
      tags: ['myélinisation', 'clinique'],
    },
    {
      id: 'histo-tissu-nerveux-fc-12',
      recto: 'Quelle cellule gliale périphérique entoure les corps cellulaires des neurones dans les ganglions ?',
      verso: 'La cellule satellite.',
      type: 'definition',
      tags: ['cellules gliales périphériques'],
    },
  ],
  qcm: [
    {
      id: 'histo-tissu-nerveux-qcm-01',
      enonce: 'Concernant le neurone, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le neurone est une cellule post-mitotique à l’âge adulte.',
          vraie: true,
          justification: 'Exact, ce qui limite la capacité de régénération du système nerveux central.',
        },
        {
          lettre: 'B',
          texte: 'Le corps de Nissl correspond à un appareil de Golgi hypertrophié.',
          vraie: false,
          justification: 'Faux : le corps de Nissl correspond au réticulum endoplasmique granulaire, non à l’appareil de Golgi.',
        },
        {
          lettre: 'C',
          texte: 'Le neurone bipolaire possède un axone et une seule dendrite.',
          vraie: true,
          justification: 'Exact, comme dans la cellule bipolaire de la rétine.',
        },
        {
          lettre: 'D',
          texte: 'Le neurone sensitif du ganglion spinal est un exemple de neurone multipolaire.',
          vraie: false,
          justification: 'Faux : c’est un exemple classique de neurone pseudo-unipolaire.',
        },
        {
          lettre: 'E',
          texte: 'Le cône d’émergence axonal est le site d’initiation du potentiel d’action.',
          vraie: true,
          justification: 'Exact, il correspond au segment initial de l’axone.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien associer chaque type morphologique de neurone à son exemple classique.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-nerveux-qcm-02',
      enonce: 'Concernant la synapse, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La synapse chimique implique la libération d’un neurotransmetteur dans la fente synaptique.',
          vraie: true,
          justification: 'Exact, c’est le mécanisme central de la transmission synaptique chimique.',
        },
        {
          lettre: 'B',
          texte: 'L’entrée de calcium dans le bouton présynaptique déclenche l’exocytose des vésicules synaptiques.',
          vraie: true,
          justification: 'Exact, c’est une étape clé de la libération du neurotransmetteur.',
        },
        {
          lettre: 'C',
          texte: 'La synapse électrique repose sur la diffusion d’un neurotransmetteur.',
          vraie: false,
          justification: 'Faux : la synapse électrique repose sur une continuité cytoplasmique via des jonctions communicantes, sans neurotransmetteur.',
        },
        {
          lettre: 'D',
          texte: 'La transmission par synapse chimique est généralement plus rapide que par synapse électrique.',
          vraie: false,
          justification: 'Faux : c’est l’inverse ; la synapse électrique est quasi instantanée, la chimique comporte un délai synaptique.',
        },
        {
          lettre: 'E',
          texte: 'La synapse chimique est habituellement unidirectionnelle.',
          vraie: true,
          justification: 'Exact, du neurone présynaptique vers l’élément postsynaptique.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. La synapse électrique est plus rapide mais moins fréquente que la synapse chimique.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-nerveux-qcm-03',
      enonce: 'Concernant les cellules gliales du système nerveux central, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’astrocyte participe à la barrière hémato-encéphalique.',
          vraie: true,
          justification: 'Exact, par ses pieds astrocytaires entourant les capillaires cérébraux.',
        },
        {
          lettre: 'B',
          texte: 'L’oligodendrocyte myélinise les axones du système nerveux périphérique.',
          vraie: false,
          justification: 'Faux : l’oligodendrocyte myélinise les axones du système nerveux central ; la cellule de Schwann assure ce rôle en périphérie.',
        },
        {
          lettre: 'C',
          texte: 'La microglie dérive de la lignée hématopoïétique.',
          vraie: true,
          justification: 'Exact, à la différence des trois autres cellules gliales centrales.',
        },
        {
          lettre: 'D',
          texte: 'La cellule épendymaire tapisse les cavités ventriculaires.',
          vraie: true,
          justification: 'Exact, et participe à la production du liquide cérébrospinal.',
        },
        {
          lettre: 'E',
          texte: 'Toutes les cellules gliales centrales ont une activité électrique de type potentiel d’action.',
          vraie: false,
          justification: 'Faux : les cellules gliales n’ont pas d’activité électrique de type potentiel d’action, contrairement aux neurones.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir l’origine hématopoïétique singulière de la microglie.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-nerveux-qcm-04',
      enonce: 'Concernant la myélinisation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une cellule de Schwann myélinise un seul segment d’un seul axone.',
          vraie: true,
          justification: 'Exact, c’est une relation univoque, à la différence de l’oligodendrocyte.',
        },
        {
          lettre: 'B',
          texte: 'Un oligodendrocyte myélinise plusieurs segments appartenant à plusieurs axones.',
          vraie: true,
          justification: 'Exact, c’est une différence majeure avec la cellule de Schwann.',
        },
        {
          lettre: 'C',
          texte: 'La conduction saltatoire se produit le long des axones amyéliniques.',
          vraie: false,
          justification: 'Faux : la conduction saltatoire caractérise les axones myélinisés, grâce aux nœuds de Ranvier.',
        },
        {
          lettre: 'D',
          texte: 'Les nœuds de Ranvier sont riches en canaux sodiques voltage-dépendants.',
          vraie: true,
          justification: 'Exact, ce qui permet la régénération du potentiel d’action à chaque nœud.',
        },
        {
          lettre: 'E',
          texte: 'La sclérose en plaques est une maladie touchant la myéline du système nerveux périphérique.',
          vraie: false,
          justification: 'Faux : la sclérose en plaques touche la myéline du système nerveux central, formée par les oligodendrocytes.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. La sclérose en plaques est une atteinte centrale, pas périphérique.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-nerveux-qcm-05',
      enonce: 'Concernant l’organisation du nerf périphérique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’épinèvre entoure chaque fibre nerveuse individuelle.',
          vraie: false,
          justification: 'Faux : l’épinèvre entoure le nerf entier ; c’est l’endonèvre qui entoure chaque fibre individuelle.',
        },
        {
          lettre: 'B',
          texte: 'Le périnèvre entoure chaque faisceau (fascicule) de fibres nerveuses.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'L’organisation conjonctive du nerf rappelle celle du muscle strié squelettique.',
          vraie: true,
          justification: 'Exact, avec le même principe d’enveloppes emboîtées.',
        },
        {
          lettre: 'D',
          texte: 'Un nerf périphérique ne contient que des fibres myélinisées.',
          vraie: false,
          justification: 'Faux : il peut contenir à la fois des fibres myélinisées et des fibres amyéliniques.',
        },
        {
          lettre: 'E',
          texte: 'L’endonèvre est un tissu conjonctif lâche entourant chaque fibre nerveuse.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir l’analogie structurale avec le muscle strié squelettique.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-nerveux-qcm-06',
      enonce: 'Concernant la barrière hémato-encéphalique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle repose sur des jonctions serrées entre cellules endothéliales des capillaires cérébraux.',
          vraie: true,
          justification: 'Exact, c’est l’élément structural central de la barrière.',
        },
        {
          lettre: 'B',
          texte: 'Les pieds astrocytaires participent à sa constitution.',
          vraie: true,
          justification: 'Exact, en complément des jonctions serrées endothéliales.',
        },
        {
          lettre: 'C',
          texte: 'Elle facilite le passage de tous les médicaments vers le parenchyme cérébral.',
          vraie: false,
          justification: 'Faux : elle limite au contraire le passage de nombreuses substances, y compris certains médicaments.',
        },
        {
          lettre: 'D',
          texte: 'Elle protège le tissu nerveux central des variations de composition du sang.',
          vraie: true,
          justification: 'Exact, c’est l’une de ses fonctions physiologiques majeures.',
        },
        {
          lettre: 'E',
          texte: 'Elle est formée par des jonctions communicantes entre cellules gliales.',
          vraie: false,
          justification: 'Faux : elle repose sur des jonctions serrées endothéliales et des pieds astrocytaires, non sur des jonctions communicantes.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. La barrière hémato-encéphalique protège mais contraint aussi le passage des traitements.',
      difficulte: 2,
    },
  ],
};
