import type { Fiche } from '../../types';

export const ficheEchangesGazeux: Fiche = {
  id: 'physio-echanges-gazeux',
  ue: 'physio',
  titre: 'Échanges gazeux et transport des gaz',
  sousTitre: 'Diffusion alvéolocapillaire, rapport ventilation-perfusion et transport de l’oxygène',
  chapitre: 'Respiratoire',
  ordre: 6,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'diffusion alvéolocapillaire',
    'rapport ventilation-perfusion',
    'courbe de dissociation de l’hémoglobine',
    'transport de l’oxygène',
    'transport du dioxyde de carbone',
    'régulation de la ventilation',
    'effet Bohr',
    'hypoxémie',
  ],
  objectifs: [
    'Décrire les déterminants de la diffusion des gaz à travers la membrane alvéolocapillaire.',
    'Expliquer la notion de rapport ventilation-perfusion et ses variations régionales.',
    'Décrire la courbe de dissociation de l’hémoglobine et les facteurs qui la déplacent.',
    'Décrire les trois formes de transport du dioxyde de carbone dans le sang.',
    'Expliquer les mécanismes de régulation nerveuse et chimique de la ventilation.',
  ],
  sections: [
    {
      id: 'diffusion',
      titre: 'Diffusion alvéolocapillaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les échanges gazeux entre l’air alvéolaire et le sang capillaire pulmonaire se font par diffusion simple, passive, à travers la membrane alvéolocapillaire, selon un gradient de pression partielle, en l’absence de tout transport actif.",
        },
        {
          type: 'formule',
          expression: 'Vitesse de diffusion ∝ (Surface × Coefficient de diffusion × ΔPression) / Épaisseur',
          legende:
            "Loi de Fick appliquée à la diffusion gazeuse : la diffusion est favorisée par une grande surface d’échange, un fort gradient de pression partielle et une faible épaisseur de la membrane ; elle est ralentie par une épaisseur importante.",
        },
        {
          type: 'tableau',
          titre: 'Pressions partielles usuelles des gaz respiratoires',
          colonnes: ['Gaz', 'Air alvéolaire', 'Sang veineux mêlé (artère pulmonaire)', 'Sang artériel systémique'],
          lignes: [
            ['Oxygène (PO2)', 'environ 100 mmHg', 'environ 40 mmHg', 'environ 95-100 mmHg'],
            ['Dioxyde de carbone (PCO2)', 'environ 40 mmHg', 'environ 45-46 mmHg', 'environ 40 mmHg'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Le dioxyde de carbone diffuse plus vite que l’oxygène',
          texte:
            "Bien que le gradient de pression partielle du CO2 entre sang veineux et air alvéolaire soit bien plus faible que celui de l’O2, le CO2 diffuse environ vingt fois plus vite à travers les tissus, grâce à sa solubilité bien supérieure dans les liquides biologiques. C’est pourquoi les maladies qui épaississent la membrane alvéolocapillaire altèrent d’abord la diffusion de l’oxygène, plus lente, avant celle du CO2.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Facteurs limitant la diffusion',
          texte:
            "Un épaississement de la membrane alvéolocapillaire (fibrose, œdème pulmonaire) ou une diminution de la surface d’échange (emphysème, pneumonectomie) réduisent la diffusion, en particulier de l’oxygène, et peuvent entraîner une hypoxémie, surtout démasquée à l’effort lorsque le temps de contact sang-alvéole se réduit.",
        },
      ],
    },
    {
      id: 'rapport-va-q',
      titre: 'Rapport ventilation-perfusion',
      blocs: [
        {
          type: 'definition',
          terme: 'Rapport ventilation-perfusion (VA/Q)',
          definition:
            "Rapport entre la ventilation alvéolaire (VA) et le débit sanguin capillaire pulmonaire (Q) reçus par une même unité pulmonaire. Une valeur idéale voisine de 1 signifie que ventilation et perfusion sont adaptées l’une à l’autre.",
        },
        {
          type: 'paragraphe',
          texte:
            "Chez le sujet debout, la pesanteur crée un gradient régional : tant la ventilation que la perfusion augmentent des sommets vers les bases pulmonaires, mais la perfusion augmente davantage, si bien que le rapport VA/Q diminue globalement du sommet vers la base.",
        },
        {
          type: 'tableau',
          titre: 'Variations régionales du rapport VA/Q chez le sujet debout',
          colonnes: ['Région pulmonaire', 'Ventilation', 'Perfusion', 'Rapport VA/Q'],
          lignes: [
            ['Sommets', 'Relativement faible', 'Très faible', 'Élevé (au-dessus de 1)'],
            ['Bases', 'Relativement élevée', 'Très élevée', 'Bas (en dessous de 1)'],
          ],
        },
        {
          type: 'comparaison',
          titre: 'Situations extrêmes du rapport VA/Q',
          gauche: {
            titre: 'Effet espace mort (VA/Q → infini)',
            points: [
              'Alvéole ventilée mais non perfusée.',
              'Aucun échange gazeux possible dans cette unité.',
              'Exemple : embolie pulmonaire obstruant une artériole.',
            ],
          },
          droite: {
            titre: 'Effet shunt (VA/Q → 0)',
            points: [
              'Alvéole perfusée mais non ou peu ventilée.',
              'Le sang qui la traverse reste peu oxygéné, comme un shunt droite-gauche.',
              'Exemple : atélectasie, comblement alvéolaire par une pneumonie.',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Vasoconstriction pulmonaire hypoxique',
          texte:
            "À la différence de la circulation systémique, l’hypoxie alvéolaire locale provoque une vasoconstriction des artérioles pulmonaires adjacentes, et non une vasodilatation. Ce réflexe détourne le sang des zones mal ventilées vers des zones mieux ventilées, ce qui limite l’effet délétère d’un déséquilibre VA/Q sur l’oxygénation globale.",
        },
      ],
    },
    {
      id: 'transport-oxygene',
      titre: 'Transport de l’oxygène et courbe de dissociation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’oxygène est transporté dans le sang sous deux formes : dissous dans le plasma, en très faible quantité, et lié à l’hémoglobine des globules rouges, qui représente la très grande majorité du transport.",
        },
        {
          type: 'tableau',
          titre: 'Formes de transport de l’oxygène',
          colonnes: ['Forme', 'Proportion du transport total', 'Caractéristique'],
          lignes: [
            ['Oxygène dissous', 'environ 1,5 à 2 %', 'Proportionnel à la PaO2 selon la loi de Henry'],
            ['Oxygène lié à l’hémoglobine (oxyhémoglobine)', 'environ 98 %', 'Chaque molécule d’hémoglobine fixe jusqu’à quatre molécules d’O2'],
          ],
        },
        {
          type: 'definition',
          terme: 'Courbe de dissociation de l’hémoglobine',
          definition:
            "Courbe reliant la saturation en oxygène de l’hémoglobine (SaO2) à la pression partielle en oxygène (PO2). Sa forme sigmoïde résulte de la coopérativité entre les quatre sous-unités de l’hémoglobine : la fixation d’une première molécule d’O2 facilite la fixation des suivantes.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Points de repère de la courbe de dissociation',
          texte:
            "P50 (PO2 pour une saturation de 50 %) : environ 26-27 mmHg. Saturation artérielle normale à PaO2 100 mmHg : environ 97-98 %. Saturation veineuse mêlée à PO2 40 mmHg : environ 75 %. Le plateau de la courbe au-delà de 60 mmHg explique qu’une baisse modérée de la PaO2 n’entraîne qu’une faible baisse de la saturation.",
        },
        {
          type: 'tableau',
          titre: 'Facteurs déplaçant la courbe de dissociation vers la droite (affinité diminuée)',
          colonnes: ['Facteur', 'Effet physiologique associé'],
          lignes: [
            ['Augmentation de la PCO2', 'Facilite la libération d’O2 dans les tissus actifs (effet Bohr)'],
            ['Diminution du pH (acidose)', 'Effet Bohr, favorise le relargage d’O2'],
            ['Augmentation de la température', 'Muscle en activité, effort'],
            ['Augmentation du 2,3-DPG érythrocytaire', 'Adaptation à l’hypoxie chronique, altitude'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le sens du déplacement',
          texte:
            "Un déplacement vers la droite diminue l’affinité de l’hémoglobine pour l’oxygène et facilite sa libération aux tissus : c’est ce qui se produit précisément là où l’O2 est le plus nécessaire, dans un muscle actif, acidifié et réchauffé par l’effort. Un déplacement vers la gauche, à l’inverse, augmente l’affinité et facilite la captation pulmonaire.",
        },
      ],
    },
    {
      id: 'transport-co2',
      titre: 'Transport du dioxyde de carbone',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le dioxyde de carbone produit par le métabolisme tissulaire est transporté vers les poumons sous trois formes principales.",
        },
        {
          type: 'tableau',
          titre: 'Les trois formes de transport du CO2',
          colonnes: ['Forme', 'Proportion approximative', 'Mécanisme'],
          lignes: [
            ['Bicarbonate (HCO3-)', 'environ 70 %', 'CO2 + H2O → H2CO3 → H+ + HCO3-, réaction catalysée par l’anhydrase carbonique érythrocytaire'],
            ['Carbaminohémoglobine', 'environ 20 à 23 %', 'Liaison directe du CO2 sur les groupements amine terminaux de la globine'],
            ['CO2 dissous', 'environ 7 à 10 %', 'Proportionnel à la PCO2 selon la loi de Henry'],
          ],
        },
        {
          type: 'definition',
          terme: 'Effet Haldane',
          definition:
            "La désoxyhémoglobine a une plus grande capacité à transporter le CO2 (sous forme de carbaminohémoglobine et en tamponnant les ions H+) que l’oxyhémoglobine. Ainsi, la libération d’O2 aux tissus facilite la captation de CO2, et inversement, l’oxygénation pulmonaire de l’hémoglobine facilite la libération du CO2 transporté.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre effet Bohr et effet Haldane',
          texte:
            "L’effet Bohr décrit l’influence du CO2 et du pH sur l’affinité de l’hémoglobine pour l’O2. L’effet Haldane décrit l’influence de l’oxygénation de l’hémoglobine sur sa capacité à transporter le CO2. Ces deux effets sont complémentaires et optimisent conjointement les échanges gazeux tissulaires et pulmonaires.",
        },
      ],
    },
    {
      id: 'regulation-ventilation',
      titre: 'Régulation de la ventilation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La ventilation est ajustée en permanence aux besoins métaboliques de l’organisme par des centres bulbo-protubérantiels, sous l’influence de récepteurs chimiques centraux et périphériques.",
        },
        {
          type: 'tableau',
          titre: 'Chimiorécepteurs de la régulation ventilatoire',
          colonnes: ['Chimiorécepteurs', 'Localisation', 'Stimulus principal', 'Poids dans la régulation'],
          lignes: [
            ['Centraux', 'Surface ventrale du bulbe rachidien', 'pH du liquide céphalo-rachidien, reflet de la PCO2 artérielle qui diffuse à travers la barrière hémato-encéphalique', 'Dominant, environ 70 à 80 % de la réponse ventilatoire au CO2'],
            ['Périphériques', 'Corpuscules carotidiens et aortiques', 'Baisse de la PaO2 (surtout en dessous de 60 mmHg), et accessoirement PaCO2 et pH artériel', 'Réponse rapide, surtout sensible à l’hypoxémie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le CO2, principal stimulus physiologique de la ventilation',
          texte:
            "En conditions physiologiques normales, c’est la PCO2 artérielle, via le pH du liquide céphalo-rachidien, qui constitue le stimulus le plus puissant et le plus sensible de la commande ventilatoire. La sensibilité à l’hypoxie ne devient prépondérante que lorsque la PaO2 chute significativement, en dessous d’environ 60 mmHg, ou chez les patients insuffisants respiratoires chroniques hypercapniques chez qui la sensibilité centrale au CO2 est réduite.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Valeurs artérielles normales de référence',
          texte:
            "PaO2 artérielle normale : environ 80 à 100 mmHg (variable avec l’âge). PaCO2 artérielle normale : environ 38 à 42 mmHg. pH artériel normal : 7,38 à 7,42.",
        },
      ],
    },
  ],
  pointsCles: [
    "La diffusion alvéolocapillaire suit la loi de Fick : elle est favorisée par une grande surface, un fort gradient de pression et une faible épaisseur membranaire.",
    "Le CO2 diffuse environ vingt fois plus vite que l’O2 à travers les tissus grâce à sa plus grande solubilité.",
    "Le rapport ventilation-perfusion diminue physiologiquement du sommet vers la base du poumon chez le sujet debout.",
    "L’hypoxie alvéolaire provoque une vasoconstriction pulmonaire locale, contrairement à la circulation systémique.",
    "Environ 98 % de l’oxygène est transporté lié à l’hémoglobine ; la courbe de dissociation est sigmoïde du fait de la coopérativité.",
    "L’effet Bohr (CO2, pH, température) déplace la courbe de dissociation vers la droite et facilite la libération tissulaire d’O2.",
    "Le CO2 est transporté à environ 70 % sous forme de bicarbonate, environ 20 à 23 % sous forme de carbaminohémoglobine, et environ 7 à 10 % sous forme dissoute.",
    "La PCO2 artérielle, via le pH du liquide céphalo-rachidien, est le stimulus dominant de la commande ventilatoire physiologique.",
  ],
  erreursFrequentes: [
    "Croire que l’O2 diffuse plus vite que le CO2 à travers la membrane alvéolocapillaire : c’est l’inverse, grâce à la solubilité bien supérieure du CO2.",
    "Confondre effet espace mort (alvéole ventilée non perfusée) et effet shunt (alvéole perfusée non ventilée).",
    "Penser que l’hypoxie provoque une vasodilatation pulmonaire comme en circulation systémique : elle provoque au contraire une vasoconstriction pulmonaire locale.",
    "Oublier que la majorité du CO2 est transportée sous forme de bicarbonate, et non sous forme dissoute ou liée à l’hémoglobine.",
    "Confondre effet Bohr (influence du CO2/pH sur l’affinité de l’hémoglobine pour l’O2) et effet Haldane (influence de l’oxygénation sur le transport du CO2).",
    "Croire que l’hypoxémie est le stimulus ventilatoire physiologique dominant : c’est la PCO2, via le pH du liquide céphalo-rachidien, qui domine en situation normale.",
  ],
  mnemotechniques: [
    {
      moyen: '« CO2 : vingt fois plus vite »',
      explication:
        'Le dioxyde de carbone diffuse environ vingt fois plus vite que l’oxygène à travers la membrane alvéolocapillaire, grâce à sa solubilité supérieure.',
    },
    {
      moyen: '« Bohr baisse l’affinité, Haldane aide au CO2 »',
      explication:
        'Effet Bohr : le CO2 et l’acidose diminuent l’affinité de l’hémoglobine pour l’O2. Effet Haldane : la désoxyhémoglobine transporte mieux le CO2.',
    },
    {
      moyen: '« 70-20-10 pour le CO2 »',
      explication:
        'Répartition approximative du transport du CO2 : environ 70 % bicarbonate, 20 % carbaminohémoglobine, 10 % dissous.',
    },
  ],
  sources: [
    'Guyton et Hall, Précis de physiologie médicale',
    'Silverthorn, Physiologie humaine, une approche intégrée',
    'Sherwood, Physiologie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'physio-echanges-gazeux-fc-01',
      recto: 'Quels sont les facteurs qui favorisent la diffusion alvéolocapillaire selon la loi de Fick ?',
      verso: 'Une grande surface d’échange, un fort gradient de pression partielle et une faible épaisseur de la membrane.',
      type: 'formule',
      tags: ['diffusion'],
    },
    {
      id: 'physio-echanges-gazeux-fc-02',
      recto: 'Le CO2 diffuse-t-il plus vite ou moins vite que l’O2 à travers les tissus ?',
      verso: 'Plus vite, environ vingt fois plus vite, en raison de sa solubilité bien supérieure.',
      type: 'chiffre',
      tags: ['diffusion', 'CO2'],
    },
    {
      id: 'physio-echanges-gazeux-fc-03',
      recto: 'Comment varie le rapport ventilation-perfusion du sommet à la base du poumon chez le sujet debout ?',
      verso: 'Il diminue du sommet vers la base, car la perfusion augmente davantage que la ventilation le long de ce gradient.',
      type: 'mecanisme',
      tags: ['VA/Q'],
    },
    {
      id: 'physio-echanges-gazeux-fc-04',
      recto: 'Que provoque une hypoxie alvéolaire locale sur les artérioles pulmonaires adjacentes ?',
      verso: 'Une vasoconstriction (vasoconstriction pulmonaire hypoxique), à l’inverse de la réponse observée en circulation systémique.',
      type: 'mecanisme',
      tags: ['vasoconstriction hypoxique'],
    },
    {
      id: 'physio-echanges-gazeux-fc-05',
      recto: 'Sous quelle forme la majorité de l’oxygène est-elle transportée dans le sang ?',
      verso: 'Liée à l’hémoglobine (oxyhémoglobine), environ 98 % du transport total.',
      type: 'chiffre',
      tags: ['transport oxygène'],
    },
    {
      id: 'physio-echanges-gazeux-fc-06',
      recto: 'Pourquoi la courbe de dissociation de l’hémoglobine est-elle sigmoïde ?',
      verso: 'En raison de la coopérativité entre les quatre sous-unités de l’hémoglobine : la fixation d’une première molécule d’O2 facilite la fixation des suivantes.',
      type: 'mecanisme',
      tags: ['courbe de dissociation'],
    },
    {
      id: 'physio-echanges-gazeux-fc-07',
      recto: 'Citer trois facteurs qui déplacent la courbe de dissociation de l’hémoglobine vers la droite.',
      verso: 'Augmentation de la PCO2, diminution du pH (acidose), augmentation de la température (effet Bohr).',
      type: 'mecanisme',
      tags: ['effet Bohr'],
    },
    {
      id: 'physio-echanges-gazeux-fc-08',
      recto: 'Sous quelle forme la majorité du CO2 est-elle transportée dans le sang ?',
      verso: 'Sous forme de bicarbonate (HCO3-), environ 70 % du transport total.',
      type: 'chiffre',
      tags: ['transport CO2'],
    },
    {
      id: 'physio-echanges-gazeux-fc-09',
      recto: 'Qu’est-ce que l’effet Haldane ?',
      verso: 'La désoxyhémoglobine transporte mieux le CO2 que l’oxyhémoglobine : la libération d’O2 aux tissus facilite la captation de CO2.',
      type: 'mecanisme',
      tags: ['effet Haldane'],
    },
    {
      id: 'physio-echanges-gazeux-fc-10',
      recto: 'Quelle enzyme catalyse la formation d’acide carbonique à partir du CO2 dans le globule rouge ?',
      verso: 'L’anhydrase carbonique.',
      type: 'definition',
      tags: ['bicarbonate', 'anhydrase carbonique'],
    },
    {
      id: 'physio-echanges-gazeux-fc-11',
      recto: 'Quel est le stimulus dominant de la commande ventilatoire en situation physiologique normale ?',
      verso: 'La PCO2 artérielle, détectée indirectement via le pH du liquide céphalo-rachidien par les chimiorécepteurs centraux bulbaires.',
      type: 'mecanisme',
      tags: ['régulation ventilation'],
    },
    {
      id: 'physio-echanges-gazeux-fc-12',
      recto: 'Où se situent les chimiorécepteurs périphériques sensibles à l’hypoxémie ?',
      verso: 'Dans les corpuscules carotidiens et aortiques.',
      type: 'definition',
      tags: ['chimiorécepteurs périphériques'],
    },
  ],
  qcm: [
    {
      id: 'physio-echanges-gazeux-qcm-01',
      enonce: "Concernant la diffusion alvéolocapillaire, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La diffusion est favorisée par une membrane alvéolocapillaire épaisse.',
          vraie: false,
          justification: 'Faux : une membrane épaisse ralentit la diffusion, conformément à la loi de Fick.',
        },
        {
          lettre: 'B',
          texte: 'Le CO2 diffuse plus rapidement que l’O2 à travers les tissus.',
          vraie: true,
          justification: 'Exact, environ vingt fois plus vite, grâce à sa solubilité supérieure.',
        },
        {
          lettre: 'C',
          texte: 'Un emphysème, qui réduit la surface d’échange, altère la diffusion gazeuse.',
          vraie: true,
          justification: 'Exact : la réduction de la surface d’échange diminue la vitesse de diffusion selon la loi de Fick.',
        },
        {
          lettre: 'D',
          texte: 'La PO2 alvéolaire normale est d’environ 100 mmHg.',
          vraie: true,
          justification: 'Exact : elle résulte de l’équation des gaz alvéolaires, la PO2 de l’air inspiré humidifié (environ 150 mmHg) étant abaissée par la consommation d’O2 et l’accumulation de CO2 alvéolaire.',
        },
        {
          lettre: 'E',
          texte: 'Les maladies qui épaississent la membrane altèrent d’abord la diffusion du CO2 plutôt que celle de l’O2.',
          vraie: false,
          justification: "Faux : c’est l’inverse ; la diffusion de l’O2, plus lente, est altérée en premier.",
        },
      ],
      correction: 'Réponses exactes : B, C et D. La diffusion suit la loi de Fick, et le CO2 diffuse toujours plus vite que l’O2.',
      difficulte: 2,
    },
    {
      id: 'physio-echanges-gazeux-qcm-02',
      enonce: "Concernant le rapport ventilation-perfusion, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le rapport VA/Q est physiologiquement plus élevé aux sommets qu’aux bases pulmonaires chez le sujet debout.',
          vraie: true,
          justification: 'Exact : la perfusion diminue davantage que la ventilation vers les sommets.',
        },
        {
          lettre: 'B',
          texte: 'Un effet espace mort correspond à une alvéole perfusée mais non ventilée.',
          vraie: false,
          justification: "Faux : c’est la définition de l’effet shunt ; l’effet espace mort correspond à une alvéole ventilée mais non perfusée.",
        },
        {
          lettre: 'C',
          texte: 'Une embolie pulmonaire peut créer un effet espace mort.',
          vraie: true,
          justification: 'Exact : l’obstruction artérielle empêche la perfusion d’une zone qui reste ventilée.',
        },
        {
          lettre: 'D',
          texte: 'L’hypoxie alvéolaire locale provoque une vasodilatation des artérioles pulmonaires adjacentes.',
          vraie: false,
          justification: "Faux : elle provoque une vasoconstriction, à l’inverse de la réponse systémique.",
        },
        {
          lettre: 'E',
          texte: 'La vasoconstriction pulmonaire hypoxique redirige le sang vers des zones mieux ventilées.',
          vraie: true,
          justification: 'Exact : c’est l’intérêt fonctionnel de ce réflexe, qui optimise le rapport VA/Q global.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. La vasoconstriction pulmonaire hypoxique est spécifique à la circulation pulmonaire.',
      difficulte: 2,
    },
    {
      id: 'physio-echanges-gazeux-qcm-03',
      enonce: "Concernant le transport de l’oxygène, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Environ 98 % de l’oxygène est transporté dissous dans le plasma.',
          vraie: false,
          justification: 'Faux : environ 98 % est lié à l’hémoglobine ; seule une faible fraction, environ 1,5 à 2 %, est dissoute.',
        },
        {
          lettre: 'B',
          texte: 'La courbe de dissociation de l’hémoglobine a une forme sigmoïde.',
          vraie: true,
          justification: 'Exact, du fait de la coopérativité entre les sous-unités de l’hémoglobine.',
        },
        {
          lettre: 'C',
          texte: 'Une augmentation de la température déplace la courbe de dissociation vers la droite.',
          vraie: true,
          justification: 'Exact, ce qui facilite la libération d’O2 dans un tissu actif et réchauffé.',
        },
        {
          lettre: 'D',
          texte: 'Une diminution du pH déplace la courbe de dissociation vers la gauche.',
          vraie: false,
          justification: 'Faux : une acidose déplace la courbe vers la droite (effet Bohr), diminuant l’affinité de l’hémoglobine pour l’O2.',
        },
        {
          lettre: 'E',
          texte: 'Le plateau de la courbe de dissociation au-delà de 60 mmHg limite l’impact d’une baisse modérée de la PaO2 sur la saturation.',
          vraie: true,
          justification: 'Exact : c’est une propriété protectrice importante de la courbe sigmoïde.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. L’effet Bohr déplace toujours la courbe vers la droite, jamais vers la gauche, en cas d’acidose.',
      difficulte: 2,
    },
    {
      id: 'physio-echanges-gazeux-qcm-04',
      enonce: "Concernant le transport du dioxyde de carbone, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La forme principale de transport du CO2 est le bicarbonate.',
          vraie: true,
          justification: 'Exact, environ 70 % du CO2 total transporté.',
        },
        {
          lettre: 'B',
          texte: 'L’anhydrase carbonique catalyse la formation d’acide carbonique à partir du CO2 et de l’eau.',
          vraie: true,
          justification: 'Exact, principalement dans le globule rouge.',
        },
        {
          lettre: 'C',
          texte: 'La carbaminohémoglobine résulte de la liaison du CO2 sur l’hème.',
          vraie: false,
          justification: "Faux : le CO2 se lie sur les groupements amine terminaux de la globine, non sur l’hème (qui fixe l’O2).",
        },
        {
          lettre: 'D',
          texte: 'La désoxyhémoglobine transporte mieux le CO2 que l’oxyhémoglobine.',
          vraie: true,
          justification: 'Exact : c’est l’effet Haldane.',
        },
        {
          lettre: 'E',
          texte: 'Le CO2 dissous représente la majorité du transport du CO2.',
          vraie: false,
          justification: 'Faux : il ne représente qu’environ 7 à 10 % du transport total.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Le bicarbonate domine largement le transport du CO2, via l’anhydrase carbonique érythrocytaire.',
      difficulte: 2,
    },
    {
      id: 'physio-echanges-gazeux-qcm-05',
      enonce: "Concernant les effets Bohr et Haldane, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'L’effet Bohr décrit l’influence du CO2 et du pH sur l’affinité de l’hémoglobine pour l’O2.',
          vraie: true,
          justification: 'Exact : c’est la définition de l’effet Bohr.',
        },
        {
          lettre: 'B',
          texte: 'L’effet Haldane décrit l’influence de l’oxygénation de l’hémoglobine sur le transport du CO2.',
          vraie: true,
          justification: 'Exact : c’est la définition de l’effet Haldane.',
        },
        {
          lettre: 'C',
          texte: 'Les effets Bohr et Haldane sont contradictoires et s’opposent au niveau tissulaire.',
          vraie: false,
          justification: "Faux : ils sont complémentaires et optimisent ensemble la libération d’O2 et la captation de CO2 au niveau tissulaire.",
        },
        {
          lettre: 'D',
          texte: 'Au niveau pulmonaire, l’oxygénation de l’hémoglobine facilite la libération du CO2 transporté.',
          vraie: true,
          justification: 'Exact : c’est l’effet Haldane appliqué au niveau pulmonaire.',
        },
        {
          lettre: 'E',
          texte: 'L’effet Bohr n’a aucun rôle au niveau tissulaire.',
          vraie: false,
          justification: "Faux : au niveau tissulaire, l’effet Bohr facilite justement la libération d’O2 là où le CO2 et l’acidité sont les plus élevés.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bohr et Haldane agissent en synergie pour optimiser les échanges gazeux tissulaires et pulmonaires.',
      difficulte: 2,
    },
    {
      id: 'physio-echanges-gazeux-qcm-06',
      enonce: "Concernant la régulation de la ventilation, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Les chimiorécepteurs centraux sont situés à la surface ventrale du bulbe rachidien.',
          vraie: true,
          justification: 'Exact : ils sont situés à la surface ventrolatérale du bulbe rachidien, au contact du liquide céphalo-rachidien dont ils détectent les variations de pH.',
        },
        {
          lettre: 'B',
          texte: 'Les chimiorécepteurs centraux sont directement sensibles à la PaO2 artérielle.',
          vraie: false,
          justification: "Faux : ils sont sensibles au pH du liquide céphalo-rachidien, lui-même reflet de la PCO2 artérielle qui diffuse à travers la barrière hémato-encéphalique.",
        },
        {
          lettre: 'C',
          texte: 'Les chimiorécepteurs périphériques sont situés dans les corpuscules carotidiens et aortiques.',
          vraie: true,
          justification: 'Exact : les corpuscules carotidiens, à la bifurcation des carotides communes, et les corpuscules aortiques constituent les principaux chimiorécepteurs périphériques sensibles à l’hypoxémie.',
        },
        {
          lettre: 'D',
          texte: 'La PCO2 artérielle est le stimulus ventilatoire dominant en situation physiologique normale.',
          vraie: true,
          justification: "Exact : la réponse centrale au CO2 représente environ 70 à 80 % de la réponse ventilatoire totale.",
        },
        {
          lettre: 'E',
          texte: 'Les chimiorécepteurs périphériques ne répondent qu’à des baisses très importantes de la PaO2, en dessous d’environ 60 mmHg.',
          vraie: true,
          justification: 'Exact : leur sensibilité à l’hypoxémie devient nettement significative surtout en dessous de ce seuil.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. Le CO2, via le pH du LCR, reste le stimulus ventilatoire physiologique dominant.',
      difficulte: 2,
    },
  ],
};
