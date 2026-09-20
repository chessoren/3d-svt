import type { Fiche } from '../../types';

export const ficheFonctionTubulaire: Fiche = {
  id: 'physio-fonction-tubulaire',
  ue: 'physio',
  titre: 'Physiologie rénale : fonction tubulaire et concentration des urines',
  sousTitre: 'Réabsorption, multiplication à contre-courant et régulation hormonale',
  chapitre: 'Rénal et milieu intérieur',
  ordre: 8,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'réabsorption tubulaire proximale',
    'anse de Henle',
    'multiplication à contre-courant',
    'tube collecteur',
    'hormone antidiurétique',
    'aldostérone',
    'système rénine-angiotensine-aldostérone',
    'concentration urinaire',
  ],
  objectifs: [
    'Décrire les mécanismes de réabsorption du tube contourné proximal.',
    'Expliquer le principe de la multiplication à contre-courant dans l’anse de Henle.',
    'Décrire le rôle du tube collecteur dans l’ajustement final de la composition urinaire.',
    'Expliquer les actions de l’hormone antidiurétique et de l’aldostérone.',
    'Décrire les étapes du système rénine-angiotensine-aldostérone.',
  ],
  sections: [
    {
      id: 'reabsorption-proximale',
      titre: 'Réabsorption au tube contourné proximal',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le tube contourné proximal réabsorbe la majeure partie du filtrat glomérulaire, de façon relativement peu sélective mais massive, avant que les segments distaux n’effectuent des ajustements fins et régulés.",
        },
        {
          type: 'tableau',
          titre: 'Réabsorption proximale par substance',
          colonnes: ['Substance', 'Proportion réabsorbée au tube proximal', 'Mécanisme principal'],
          lignes: [
            ['Sodium et eau', 'environ 65 à 67 %', 'Réabsorption iso-osmotique, couplée au transport actif de sodium'],
            ['Glucose', 'environ 100 % en situation normale', 'Cotransport avec le sodium (SGLT), transport à capacité maximale (Tm)'],
            ['Acides aminés', 'environ 100 % en situation normale', 'Cotransport avec le sodium, systèmes spécifiques selon la classe d’acide aminé'],
            ['Bicarbonate', 'environ 80 à 90 %', 'Réabsorption indirecte via l’anhydrase carbonique et l’échangeur Na+/H+'],
          ],
        },
        {
          type: 'definition',
          terme: 'Transport à capacité maximale (Tm)',
          definition:
            "Certains solutés, comme le glucose, sont réabsorbés par des transporteurs saturables. Au-delà d’une charge filtrée dépassant la capacité maximale de ces transporteurs, l’excès n’est plus réabsorbé et apparaît dans l’urine finale : c’est le principe du seuil rénal du glucose.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Glycosurie',
          texte:
            "Le seuil rénal de réabsorption du glucose est atteint pour une glycémie d’environ 1,8 g/L (environ 10 mmol/L). Au-delà, le glucose apparaît dans l’urine : c’est la glycosurie, classiquement observée dans le diabète sucré mal équilibré.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Réabsorption iso-osmotique',
          texte:
            "Le tube contourné proximal réabsorbe l’eau et les solutés dans des proportions telles que l’osmolarité du fluide tubulaire reste égale à celle du plasma tout au long de ce segment : c’est la réabsorption iso-osmotique, ou obligatoire.",
        },
      ],
    },
    {
      id: 'anse-henle',
      titre: 'Anse de Henle et multiplication à contre-courant',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’anse de Henle comprend une branche descendante fine et une branche ascendante (fine puis large), aux perméabilités très différentes, qui permettent d’établir un gradient osmotique croissant depuis la jonction corticomédullaire jusqu’au sommet de la papille rénale.",
        },
        {
          type: 'tableau',
          titre: 'Perméabilités des segments de l’anse de Henle',
          colonnes: ['Segment', 'Perméabilité à l’eau', 'Perméabilité au NaCl', 'Rôle'],
          lignes: [
            ['Branche descendante fine', 'Élevée', 'Faible', 'L’eau sort, le fluide tubulaire se concentre progressivement'],
            ['Branche ascendante fine et large', 'Imperméable à l’eau', 'Réabsorption active de NaCl (cotransporteur Na-K-2Cl dans la portion large)', 'Le fluide tubulaire se dilue, le NaCl s’accumule dans l’interstitium médullaire'],
          ],
        },
        {
          type: 'definition',
          terme: 'Multiplication à contre-courant',
          definition:
            "Mécanisme par lequel deux segments tubulaires parallèles, où le fluide circule en sens opposé (descendant puis ascendant), amplifient un faible gradient transversal en un gradient longitudinal considérable, croissant du cortex vers la papille rénale. Il repose sur le transport actif de NaCl hors de la branche ascendante, imperméable à l’eau.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Gradient osmotique médullaire',
          texte:
            "L’osmolarité interstitielle passe d’environ 300 mOsm/L à la jonction corticomédullaire à environ 1 200 à 1 400 mOsm/L au sommet de la papille chez l’humain, ce qui constitue la base du pouvoir de concentration maximal des urines.",
        },
        {
          type: 'paragraphe',
          texte:
            "L’urée, réabsorbée en partie au niveau du tube collecteur médullaire interne, participe également à ce gradient osmotique médullaire, phénomène appelé recyclage de l’urée, qui renforce l’efficacité du système de concentration.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Le système multiplicateur à contre-courant en une phrase',
          texte:
            "La branche descendante laisse sortir l’eau passivement, la branche ascendante pompe activement le NaCl sans laisser sortir l’eau : ce couplage crée et entretient le gradient osmotique cortico-papillaire qui permettra ensuite au tube collecteur de concentrer l’urine.",
        },
      ],
    },
    {
      id: 'tube-collecteur-adh',
      titre: 'Tube collecteur et hormone antidiurétique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le tube collecteur traverse la médullaire rénale, dont l’osmolarité croît progressivement, et constitue le site d’ajustement final de la concentration urinaire, sous le contrôle principal de l’hormone antidiurétique (ADH, ou vasopressine).",
        },
        {
          type: 'definition',
          terme: 'Hormone antidiurétique (ADH, vasopressine)',
          definition:
            "Hormone peptidique synthétisée par les neurones magnocellulaires des noyaux supraoptique et paraventriculaire de l’hypothalamus, libérée par la posthypophyse. Elle augmente la perméabilité à l’eau du tube collecteur en insérant des canaux aquaporine-2 dans la membrane apicale des cellules principales, ce qui permet à l’eau de suivre passivement le gradient osmotique médullaire et d’être réabsorbée.",
        },
        {
          type: 'tableau',
          titre: 'Stimuli de la sécrétion d’ADH',
          colonnes: ['Stimulus', 'Détecteur', 'Sensibilité'],
          lignes: [
            ['Augmentation de l’osmolarité plasmatique', 'Osmorécepteurs hypothalamiques', 'Très sensible, dès une variation de 1 %'],
            ['Diminution du volume ou de la pression artérielle', 'Barorécepteurs et volorécepteurs', 'Moins sensible, nécessite une variation plus importante (environ 10 % ou plus)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Sans ADH, l’urine reste diluée',
          texte:
            "En l’absence d’ADH, le tube collecteur reste imperméable à l’eau : le fluide tubulaire dilué issu de la branche ascendante de l’anse de Henle est excrété tel quel, produisant une urine abondante et diluée (diabète insipide en cas de déficit en ADH ou de résistance rénale à l’ADH).",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Diabète insipide',
          texte:
            "Le diabète insipide central résulte d’un déficit de sécrétion d’ADH ; le diabète insipide néphrogénique résulte d’une résistance rénale à l’action de l’ADH. Dans les deux cas, le tube collecteur reste imperméable à l’eau, entraînant une polyurie majeure avec urines très diluées.",
        },
      ],
    },
    {
      id: 'aldosterone-sraa',
      titre: 'Aldostérone et système rénine-angiotensine-aldostérone',
      blocs: [
        {
          type: 'definition',
          terme: 'Aldostérone',
          definition:
            "Hormone stéroïdienne minéralocorticoïde sécrétée par la zone glomérulée du cortex surrénalien. Elle stimule la réabsorption de sodium (et donc d’eau, secondairement) et la sécrétion de potassium et d’ions H+ au niveau du tube contourné distal et du tube collecteur, en augmentant notamment l’expression des canaux sodiques épithéliaux (ENaC) et de la pompe Na+/K+-ATPase basolatérale.",
        },
        {
          type: 'etapes',
          titre: 'Cascade du système rénine-angiotensine-aldostérone',
          etapes: [
            {
              titre: 'Sécrétion de rénine',
              detail:
                "Les cellules granulaires de l’artériole afférente sécrètent de la rénine en réponse à une baisse de pression de perfusion rénale, une diminution du NaCl détecté par la macula densa, ou une stimulation sympathique.",
            },
            {
              titre: 'Formation de l’angiotensine I',
              detail:
                "La rénine clive l’angiotensinogène, produit par le foie, en angiotensine I, peptide encore biologiquement peu actif.",
            },
            {
              titre: 'Formation de l’angiotensine II',
              detail:
                "L’enzyme de conversion de l’angiotensine, principalement présente au niveau de l’endothélium pulmonaire, transforme l’angiotensine I en angiotensine II, puissant vasoconstricteur.",
            },
            {
              titre: 'Effets de l’angiotensine II',
              detail:
                "Vasoconstriction artériolaire directe, stimulation de la sécrétion d’aldostérone par la corticosurrénale, stimulation de la soif et de la sécrétion d’ADH, et augmentation de la réabsorption proximale de sodium.",
            },
            {
              titre: 'Action de l’aldostérone',
              detail:
                "L’aldostérone augmente la réabsorption distale de sodium et d’eau, et la sécrétion de potassium, ce qui contribue à restaurer la volémie et la pression artérielle.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Distinguer les cibles de l’ADH et de l’aldostérone',
          texte:
            "L’ADH agit principalement sur la perméabilité à l’eau du tube collecteur, sans influence directe majeure sur le transport de sodium. L’aldostérone agit principalement sur la réabsorption active de sodium (et la sécrétion de potassium) du tube distal et collecteur, l’eau suivant ensuite passivement. Ces deux hormones agissent donc sur les mêmes segments mais par des mécanismes distincts et complémentaires.",
        },
      ],
    },
    {
      id: 'peptides-natriuretiques',
      titre: 'Peptides natriurétiques et régulation intégrée',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En miroir du système rénine-angiotensine-aldostérone, les peptides natriurétiques constituent un système contre-régulateur qui favorise l’excrétion de sodium en réponse à une surcharge volémique.",
        },
        {
          type: 'tableau',
          titre: 'Peptides natriurétiques principaux',
          colonnes: ['Peptide', 'Origine', 'Stimulus de sécrétion', 'Effets principaux'],
          lignes: [
            ['Peptide natriurétique auriculaire (ANP)', 'Cardiomyocytes atriaux', 'Distension des oreillettes par surcharge volémique', 'Natriurèse, diurèse, vasodilatation, inhibition de la rénine et de l’aldostérone'],
            ['Peptide natriurétique de type B (BNP)', 'Cardiomyocytes ventriculaires', 'Distension ventriculaire, surcharge de pression ou de volume', 'Effets similaires à l’ANP, utilisé comme marqueur biologique d’insuffisance cardiaque'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une régulation en boucle opposée',
          texte:
            "Le système rénine-angiotensine-aldostérone retient le sodium et l’eau en cas d’hypovolémie ; les peptides natriurétiques favorisent leur excrétion en cas d’hypervolémie. Ces deux systèmes antagonistes assurent conjointement l’homéostasie de la volémie et de la pression artérielle.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le tube contourné proximal réabsorbe environ deux tiers du sodium et de l’eau filtrés, de façon iso-osmotique et peu sélective.",
    "Le glucose et les acides aminés sont normalement réabsorbés à environ 100 % au tube proximal, par des transporteurs saturables à capacité maximale.",
    "La multiplication à contre-courant dans l’anse de Henle établit un gradient osmotique médullaire croissant, de 300 à environ 1 200-1 400 mOsm/L.",
    "La branche ascendante de l’anse de Henle est imperméable à l’eau et réabsorbe activement le NaCl via le cotransporteur Na-K-2Cl.",
    "L’ADH augmente la perméabilité à l’eau du tube collecteur via l’insertion d’aquaporines-2, permettant la concentration finale des urines.",
    "L’aldostérone stimule la réabsorption de sodium et la sécrétion de potassium au tube distal et collecteur.",
    "Le système rénine-angiotensine-aldostérone est activé par la baisse de pression rénale, la baisse du NaCl distal et la stimulation sympathique.",
    "Les peptides natriurétiques (ANP, BNP) s’opposent fonctionnellement au système rénine-angiotensine-aldostérone.",
  ],
  erreursFrequentes: [
    "Croire que la réabsorption proximale est finement régulée : elle est massive et relativement peu sélective, les ajustements fins se faisant en aval.",
    "Confondre les perméabilités des branches de l’anse de Henle : la branche descendante est perméable à l’eau, la branche ascendante y est imperméable.",
    "Penser que l’ADH agit principalement sur le transport de sodium : elle agit sur la perméabilité à l’eau, via les aquaporines-2 ; c’est l’aldostérone qui cible le sodium.",
    "Oublier que l’angiotensine I doit être convertie en angiotensine II, principalement au niveau pulmonaire, pour devenir pleinement active.",
    "Croire que l’aldostérone provient de la médullosurrénale : elle est sécrétée par la zone glomérulée du cortex surrénalien.",
    "Confondre ANP et BNP avec le système rénine-angiotensine-aldostérone : les peptides natriurétiques ont un effet opposé, natriurétique et hypotenseur.",
  ],
  mnemotechniques: [
    {
      moyen: '« Descendante laisse sortir l’eau, ascendante pompe le sel »',
      explication:
        'Résumé des perméabilités opposées des deux branches de l’anse de Henle, base de la multiplication à contre-courant.',
    },
    {
      moyen: '« ADH = Aquaporine pour l’eau, aldostérone = sel »',
      explication:
        'L’ADH cible la perméabilité à l’eau du tube collecteur via les aquaporines ; l’aldostérone cible le transport actif de sodium.',
    },
    {
      moyen: '« RAA retient, natriurétiques rejettent »',
      explication:
        'Le système rénine-angiotensine-aldostérone retient sodium et eau ; les peptides natriurétiques favorisent leur excrétion : deux systèmes antagonistes.',
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
      id: 'physio-fonction-tubulaire-fc-01',
      recto: 'Quelle proportion du sodium filtré est réabsorbée au tube contourné proximal ?',
      verso: 'Environ 65 à 67 %.',
      type: 'chiffre',
      tags: ['réabsorption proximale'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-02',
      recto: 'Qu’est-ce que le transport à capacité maximale (Tm) appliqué au glucose ?',
      verso: 'Au-delà d’une charge filtrée dépassant la capacité des transporteurs SGLT, l’excès de glucose n’est plus réabsorbé et apparaît dans l’urine.',
      type: 'mecanisme',
      tags: ['glucose', 'Tm'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-03',
      recto: 'Quelle branche de l’anse de Henle est perméable à l’eau ?',
      verso: 'La branche descendante fine ; la branche ascendante est imperméable à l’eau.',
      type: 'definition',
      tags: ['anse de Henle'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-04',
      recto: 'Quel transporteur assure la réabsorption active de NaCl dans la branche ascendante large de l’anse de Henle ?',
      verso: 'Le cotransporteur Na-K-2Cl.',
      type: 'definition',
      tags: ['anse de Henle', 'transporteur'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-05',
      recto: 'Quelle est l’osmolarité approximative au sommet de la papille rénale ?',
      verso: 'Environ 1 200 à 1 400 mOsm/L.',
      type: 'chiffre',
      tags: ['gradient médullaire'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-06',
      recto: 'Comment l’ADH augmente-t-elle la perméabilité à l’eau du tube collecteur ?',
      verso: 'En insérant des canaux aquaporine-2 dans la membrane apicale des cellules principales du tube collecteur.',
      type: 'mecanisme',
      tags: ['ADH', 'aquaporine'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-07',
      recto: 'Où est sécrétée l’aldostérone ?',
      verso: 'Par la zone glomérulée du cortex surrénalien.',
      type: 'definition',
      tags: ['aldostérone'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-08',
      recto: 'Quels sont les deux principaux effets tubulaires de l’aldostérone ?',
      verso: 'Augmentation de la réabsorption de sodium et augmentation de la sécrétion de potassium (et d’ions H+).',
      type: 'mecanisme',
      tags: ['aldostérone'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-09',
      recto: 'Où l’angiotensine I est-elle principalement convertie en angiotensine II ?',
      verso: 'Au niveau de l’endothélium pulmonaire, par l’enzyme de conversion de l’angiotensine.',
      type: 'mecanisme',
      tags: ['SRAA'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-10',
      recto: 'Citer trois stimuli de la sécrétion de rénine.',
      verso: 'Baisse de pression de perfusion rénale, baisse du NaCl détecté par la macula densa, stimulation sympathique.',
      type: 'mecanisme',
      tags: ['rénine'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-11',
      recto: 'Que se passe-t-il dans le tube collecteur en l’absence d’ADH ?',
      verso: 'Il reste imperméable à l’eau, produisant une urine abondante et diluée.',
      type: 'clinique',
      tags: ['ADH', 'diabète insipide'],
    },
    {
      id: 'physio-fonction-tubulaire-fc-12',
      recto: 'Quel est l’effet principal du peptide natriurétique auriculaire (ANP) ?',
      verso: 'Il favorise la natriurèse et la diurèse, provoque une vasodilatation, et inhibe la sécrétion de rénine et d’aldostérone.',
      type: 'mecanisme',
      tags: ['ANP', 'peptides natriurétiques'],
    },
  ],
  qcm: [
    {
      id: 'physio-fonction-tubulaire-qcm-01',
      enonce: "Concernant la réabsorption proximale, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le tube contourné proximal réabsorbe environ les deux tiers du sodium filtré.',
          vraie: true,
          justification: 'Exact, environ 65 à 67 %.',
        },
        {
          lettre: 'B',
          texte: 'Le glucose est normalement réabsorbé à environ 100 % en situation physiologique.',
          vraie: true,
          justification: 'Exact, tant que la charge filtrée ne dépasse pas la capacité maximale des transporteurs SGLT.',
        },
        {
          lettre: 'C',
          texte: 'La réabsorption proximale est finement régulée hormone par hormone.',
          vraie: false,
          justification: 'Faux : elle est massive et relativement peu régulée ; les ajustements hormonaux fins se produisent surtout en aval.',
        },
        {
          lettre: 'D',
          texte: 'Une glycémie supérieure au seuil rénal du glucose peut entraîner une glycosurie.',
          vraie: true,
          justification: 'Exact, lorsque la charge filtrée dépasse la capacité de réabsorption des transporteurs SGLT.',
        },
        {
          lettre: 'E',
          texte: "L’osmolarité du fluide tubulaire augmente fortement le long du tube contourné proximal.",
          vraie: false,
          justification: "Faux : elle reste proche de celle du plasma, la réabsorption y étant iso-osmotique.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. La réabsorption proximale est massive, iso-osmotique et peu sélective.',
      difficulte: 2,
    },
    {
      id: 'physio-fonction-tubulaire-qcm-02',
      enonce: "Concernant l’anse de Henle et la multiplication à contre-courant, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La branche descendante fine est perméable à l’eau.',
          vraie: true,
          justification: 'Exact, ce qui permet la sortie d’eau et la concentration progressive du fluide tubulaire.',
        },
        {
          lettre: 'B',
          texte: 'La branche ascendante large réabsorbe activement le NaCl tout en restant imperméable à l’eau.',
          vraie: true,
          justification: 'Exact, via le cotransporteur Na-K-2Cl.',
        },
        {
          lettre: 'C',
          texte: 'Le gradient osmotique médullaire décroît du cortex vers la papille rénale.',
          vraie: false,
          justification: 'Faux : il croît du cortex vers la papille, jusqu’à environ 1 200-1 400 mOsm/L.',
        },
        {
          lettre: 'D',
          texte: "L’urée participe au gradient osmotique médullaire par un phénomène de recyclage.",
          vraie: true,
          justification: 'Exact, ce qui renforce l’efficacité du système de concentration urinaire.',
        },
        {
          lettre: 'E',
          texte: 'Le fluide qui quitte la branche ascendante de l’anse de Henle est concentré par rapport au plasma.',
          vraie: false,
          justification: "Faux : il est dilué, la branche ascendante ayant retiré du NaCl sans laisser sortir d’eau.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. La multiplication à contre-courant repose sur des perméabilités opposées des deux branches.',
      difficulte: 3,
    },
    {
      id: 'physio-fonction-tubulaire-qcm-03',
      enonce: "Concernant l’hormone antidiurétique, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: "L’ADH est synthétisée par l’hypothalamus et libérée par la posthypophyse.",
          vraie: true,
          justification: 'Exact : synthèse dans les noyaux supraoptique et paraventriculaire, libération par la neurohypophyse.',
        },
        {
          lettre: 'B',
          texte: 'L’ADH augmente la perméabilité à l’eau du tube collecteur via les aquaporines-2.',
          vraie: true,
          justification: 'Exact : l’ADH se fixe sur les récepteurs V2 des cellules principales et provoque l’insertion d’aquaporines-2 dans la membrane apicale, ce qui augmente la réabsorption d’eau.',
        },
        {
          lettre: 'C',
          texte: 'Les osmorécepteurs hypothalamiques sont plus sensibles que les barorécepteurs pour déclencher la sécrétion d’ADH.',
          vraie: true,
          justification: 'Exact : une variation de 1 % de l’osmolarité suffit, contre environ 10 % pour un stimulus volémique.',
        },
        {
          lettre: 'D',
          texte: 'En l’absence d’ADH, l’urine finale est concentrée.',
          vraie: false,
          justification: 'Faux : elle reste diluée, le tube collecteur restant imperméable à l’eau sans ADH.',
        },
        {
          lettre: 'E',
          texte: 'Le diabète insipide néphrogénique résulte d’une résistance rénale à l’ADH.',
          vraie: true,
          justification: 'Exact, à la différence du diabète insipide central qui résulte d’un déficit de sécrétion.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. L’ADH module la perméabilité à l’eau, non le transport actif de sodium.',
      difficulte: 2,
    },
    {
      id: 'physio-fonction-tubulaire-qcm-04',
      enonce: "Concernant l’aldostérone, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est sécrétée par la médullosurrénale.',
          vraie: false,
          justification: 'Faux : elle est sécrétée par la zone glomérulée du cortex surrénalien.',
        },
        {
          lettre: 'B',
          texte: 'Elle stimule la réabsorption de sodium au tube distal et collecteur.',
          vraie: true,
          justification: 'Exact, notamment via l’augmentation de l’expression des canaux ENaC.',
        },
        {
          lettre: 'C',
          texte: 'Elle stimule la sécrétion de potassium.',
          vraie: true,
          justification: 'Exact : c’est une conséquence de l’augmentation de la réabsorption sodée couplée à la sécrétion potassique.',
        },
        {
          lettre: 'D',
          texte: 'Elle agit principalement en modifiant la perméabilité à l’eau du tube collecteur.',
          vraie: false,
          justification: "Faux : c’est le rôle principal de l’ADH ; l’aldostérone agit avant tout sur le transport actif de sodium.",
        },
        {
          lettre: 'E',
          texte: 'Sa sécrétion est stimulée par l’angiotensine II.',
          vraie: true,
          justification: 'Exact : c’est l’un des effets majeurs de l’angiotensine II sur la corticosurrénale.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. L’aldostérone cible le transport de sodium et de potassium, non la perméabilité à l’eau.',
      difficulte: 2,
    },
    {
      id: 'physio-fonction-tubulaire-qcm-05',
      enonce: "Concernant le système rénine-angiotensine-aldostérone, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La rénine est sécrétée par les cellules granulaires de l’artériole afférente.',
          vraie: true,
          justification: 'Exact, en réponse notamment à une baisse de pression de perfusion rénale.',
        },
        {
          lettre: 'B',
          texte: 'L’angiotensinogène est produit par le rein.',
          vraie: false,
          justification: 'Faux : il est produit par le foie ; le rein produit la rénine qui le clive.',
        },
        {
          lettre: 'C',
          texte: 'L’angiotensine II est un puissant vasoconstricteur.',
          vraie: true,
          justification: 'Exact, c’est l’un des vasoconstricteurs les plus puissants de l’organisme.',
        },
        {
          lettre: 'D',
          texte: 'L’angiotensine II stimule la sensation de soif.',
          vraie: true,
          justification: 'Exact, en agissant sur des centres hypothalamiques.',
        },
        {
          lettre: 'E',
          texte: 'La conversion de l’angiotensine I en angiotensine II se fait principalement dans le rein.',
          vraie: false,
          justification: "Faux : elle se fait principalement au niveau de l’endothélium pulmonaire, via l’enzyme de conversion.",
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le SRAA relie la perfusion rénale à la régulation de la volémie et de la pression artérielle.',
      difficulte: 2,
    },
    {
      id: 'physio-fonction-tubulaire-qcm-06',
      enonce: "Concernant les peptides natriurétiques, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ANP est sécrété par les cardiomyocytes atriaux en réponse à leur distension.',
          vraie: true,
          justification: 'Exact, en cas de surcharge volémique.',
        },
        {
          lettre: 'B',
          texte: 'Le BNP est utilisé en clinique comme marqueur biologique d’insuffisance cardiaque.',
          vraie: true,
          justification: 'Exact, sa sécrétion augmente en cas de distension ventriculaire.',
        },
        {
          lettre: 'C',
          texte: 'L’ANP stimule la sécrétion de rénine.',
          vraie: false,
          justification: 'Faux : l’ANP inhibe au contraire la sécrétion de rénine et d’aldostérone.',
        },
        {
          lettre: 'D',
          texte: 'L’ANP favorise la natriurèse.',
          vraie: true,
          justification: 'Exact, c’est l’un de ses effets principaux, opposé à celui de l’aldostérone.',
        },
        {
          lettre: 'E',
          texte: 'Les peptides natriurétiques et le système rénine-angiotensine-aldostérone agissent dans le même sens sur la volémie.',
          vraie: false,
          justification: "Faux : ils agissent en sens opposé, l’un favorisant la rétention, l’autre l’excrétion de sodium et d’eau.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. Les peptides natriurétiques contre-régulent le système rénine-angiotensine-aldostérone.',
      difficulte: 2,
    },
  ],
};
