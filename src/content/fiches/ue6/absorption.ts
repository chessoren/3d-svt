import type { Fiche } from '../../types';

export const ficheAbsorption: Fiche = {
  id: 'ue6-absorption',
  ue: 'ue6',
  titre: 'Absorption et biodisponibilité',
  sousTitre: 'Passage membranaire, pH et pKa, effet de premier passage hépatique, biodisponibilité absolue et relative',
  chapitre: 'Pharmacocinétique',
  ordre: 3,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'absorption',
    'passage membranaire',
    'pH-partition',
    'pKa',
    'premier passage hépatique',
    'biodisponibilité absolue',
    'biodisponibilité relative',
    'aire sous la courbe',
  ],
  objectifs: [
    'Décrire les principaux mécanismes de passage transmembranaire des médicaments.',
    'Expliquer l’influence du pH du milieu et du pKa du médicament sur son absorption.',
    'Définir l’effet de premier passage hépatique et ses conséquences.',
    'Citer les principaux facteurs modifiant l’absorption digestive.',
    'Distinguer biodisponibilité absolue et biodisponibilité relative.',
    'Interpréter une aire sous la courbe de concentration plasmatique.',
  ],
  sections: [
    {
      id: 'passage-membranaire',
      titre: 'Passage membranaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’absorption est le processus par lequel un médicament passe de son site d’administration vers la circulation sanguine. Ce passage nécessite le franchissement d’une ou plusieurs membranes biologiques, constituées d’une bicouche phospholipidique peu perméable aux molécules chargées ou de grande taille.",
        },
        {
          type: 'tableau',
          titre: 'Principaux mécanismes de passage transmembranaire',
          colonnes: ['Mécanisme', 'Principe', 'Caractéristique'],
          lignes: [
            ['Diffusion passive simple', 'Passage direct à travers la bicouche lipidique, selon le gradient de concentration', 'Ne nécessite ni transporteur ni énergie ; dépend de la liposolubilité'],
            ['Diffusion facilitée', 'Passage via une protéine transporteuse, selon le gradient de concentration', 'Saturable, spécifique, sans dépense énergétique directe'],
            ['Transport actif', 'Passage via une protéine transporteuse, contre le gradient de concentration', 'Saturable, spécifique, consomme de l’énergie'],
            ['Filtration', 'Passage à travers des pores membranaires', 'Concerne les très petites molécules hydrosolubles'],
            ['Endocytose', 'Internalisation par invagination de la membrane', 'Concerne les macromolécules comme certaines protéines'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'La diffusion passive : mécanisme dominant',
          texte:
            "La grande majorité des médicaments franchissent les membranes biologiques par diffusion passive simple, mécanisme non saturable et non spécifique, dont la vitesse dépend directement du gradient de concentration et de la liposolubilité de la molécule sous sa forme non ionisée.",
        },
      ],
    },
    {
      id: 'ph-pka',
      titre: 'Influence du pH et du pKa',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "De nombreux médicaments sont des acides ou des bases faibles, qui existent en solution sous deux formes en équilibre : une forme ionisée, hydrosoluble mais peu diffusible à travers les membranes, et une forme non ionisée, liposoluble et capable de traverser la bicouche lipidique par diffusion passive.",
        },
        {
          type: 'formule',
          expression: 'pH = pKa + log ( [forme ionisée] / [forme non ionisée] )',
          legende:
            "Équation de Henderson-Hasselbalch appliquée à un acide faible. Elle permet de calculer la proportion de forme ionisée et non ionisée d’un médicament à un pH donné, connaissant son pKa.",
        },
        {
          type: 'definition',
          terme: 'Théorie du pH-partition',
          definition:
            "Principe selon lequel seule la forme non ionisée d’un acide ou d’une base faible traverse efficacement les membranes biologiques par diffusion passive, la forme ionisée étant piégée du côté où elle prédomine.",
        },
        {
          type: 'tableau',
          titre: 'Proportion de forme non ionisée selon le pH',
          colonnes: ['Type de molécule', 'Milieu acide (pH bas)', 'Milieu basique (pH élevé)'],
          lignes: [
            ['Acide faible', 'Majoritairement non ionisé, bien absorbé', 'Majoritairement ionisé, peu absorbé'],
            ['Base faible', 'Majoritairement ionisée, peu absorbée', 'Majoritairement non ionisée, bien absorbée'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Application classique : estomac et acides faibles',
          texte:
            "Un acide faible comme l’acide acétylsalicylique, de pKa voisin de 3,5, est majoritairement sous forme non ionisée dans l’environnement très acide de l’estomac (pH proche de 1 à 2), ce qui favorise son absorption gastrique par diffusion passive, alors qu’une base faible y serait au contraire fortement ionisée et peu absorbée.",
        },
      ],
    },
    {
      id: 'premier-passage',
      titre: 'Effet de premier passage hépatique',
      blocs: [
        {
          type: 'definition',
          terme: 'Effet de premier passage hépatique',
          definition:
            "Métabolisation d’une fraction du médicament par le foie lors de son premier passage, avant même d’atteindre la circulation générale, pour les médicaments absorbés par le tube digestif dont le sang veineux rejoint la veine porte puis le foie.",
        },
        {
          type: 'liste',
          items: [
            'L’effet de premier passage peut également concerner la paroi intestinale elle-même, qui contient des enzymes métabolisantes comme certains cytochromes P450.',
            'Plus l’effet de premier passage est important, plus la biodisponibilité orale du médicament est réduite par rapport à la dose administrée.',
            'Certains médicaments ont un effet de premier passage si marqué que la voie orale devient inutilisable en pratique, ou nécessite des doses très supérieures à la dose parentérale équivalente.',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Premier passage et prodrogues',
          texte:
            "Pour une prodrogue, c’est-à-dire un médicament inactif administré tel quel et activé par métabolisme, l’effet de premier passage hépatique peut au contraire être nécessaire à l’apparition de l’activité pharmacologique, ce qui inverse la logique habituelle où le premier passage est perçu comme uniquement pénalisant.",
        },
        {
          type: 'tableau',
          titre: 'Conséquences de l’effet de premier passage',
          colonnes: ['Situation', 'Conséquence pratique'],
          lignes: [
            ['Premier passage très important', 'Biodisponibilité orale faible, voie parentérale souvent préférée'],
            ['Premier passage variable entre individus', 'Grande variabilité interindividuelle de la réponse au traitement oral'],
            ['Insuffisance hépatique sévère', 'Diminution du premier passage, risque de surdosage relatif par voie orale'],
          ],
        },
      ],
    },
    {
      id: 'facteurs-absorption',
      titre: 'Facteurs modifiant l’absorption',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "De nombreux facteurs, liés au médicament, au patient ou à l’environnement digestif, modulent la vitesse et l’intensité de l’absorption d’un médicament administré par voie orale.",
        },
        {
          type: 'tableau',
          titre: 'Principaux facteurs modifiant l’absorption orale',
          colonnes: ['Catégorie', 'Exemples de facteurs'],
          lignes: [
            ['Liés au médicament', 'Liposolubilité, taille moléculaire, forme galénique, stabilité en milieu acide'],
            ['Liés au patient', 'pH gastrique, vitesse de vidange gastrique, motilité intestinale, surface d’absorption, débit sanguin splanchnique'],
            ['Liés à l’environnement digestif', 'Présence d’aliments, interactions avec d’autres médicaments, flore intestinale'],
          ],
        },
        {
          type: 'liste',
          items: [
            'Une accélération de la vidange gastrique peut accélérer l’arrivée du médicament dans l’intestin grêle, site principal d’absorption pour la plupart des médicaments oraux.',
            'Une diminution du débit sanguin splanchnique, par exemple en cas d’insuffisance cardiaque sévère, peut ralentir l’absorption en réduisant le gradient de concentration entretenu par le flux sanguin.',
            'Certains aliments ou médicaments peuvent chélater un principe actif et réduire fortement son absorption digestive.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Interaction alimentaire classique',
          texte:
            "Les produits laitiers, riches en calcium, peuvent former des complexes insolubles avec certains antibiotiques et réduire fortement leur absorption digestive : cette interaction justifie les recommandations de décalage entre la prise de ces médicaments et la consommation de produits laitiers.",
        },
      ],
    },
    {
      id: 'biodisponibilite',
      titre: 'Biodisponibilité absolue et relative',
      blocs: [
        {
          type: 'definition',
          terme: 'Biodisponibilité',
          definition:
            "Fraction de la dose administrée d’un médicament qui atteint la circulation générale sous forme inchangée, et vitesse à laquelle ce phénomène se produit. Elle se caractérise classiquement par l’aire sous la courbe de concentration plasmatique en fonction du temps.",
        },
        {
          type: 'definition',
          terme: 'Biodisponibilité absolue',
          definition:
            "Rapport entre l’aire sous la courbe obtenue après administration par une voie donnée et l’aire sous la courbe obtenue après administration intraveineuse de la même dose, cette dernière servant de référence avec une biodisponibilité de 100 %.",
        },
        {
          type: 'formule',
          expression: 'F(absolue) = (ASC voie testée / ASC voie intraveineuse) × (dose IV / dose voie testée)',
          legende:
            "Formule de calcul de la biodisponibilité absolue, exprimée en pourcentage, tenant compte d’une éventuelle différence de dose entre les deux administrations comparées.",
        },
        {
          type: 'definition',
          terme: 'Biodisponibilité relative',
          definition:
            "Rapport entre l’aire sous la courbe obtenue après administration d’une forme ou d’une formulation donnée et l’aire sous la courbe obtenue après administration d’une forme de référence, différente de la voie intraveineuse. Elle est notamment utilisée pour comparer deux formulations orales entre elles.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Biodisponibilité et bioéquivalence',
          texte:
            "La biodisponibilité relative est au cœur de l’évaluation de la bioéquivalence entre un médicament générique et sa spécialité de référence : les intervalles de confiance des paramètres pharmacocinétiques comparés doivent rester dans une fourchette réglementaire prédéfinie.",
        },
      ],
    },
    {
      id: 'asc-parametres',
      titre: 'Aire sous la courbe et paramètres d’absorption',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La courbe de concentration plasmatique en fonction du temps, obtenue après administration extravasculaire, permet de décrire l’absorption d’un médicament à travers plusieurs paramètres clés utilisés en pharmacocinétique clinique.",
        },
        {
          type: 'tableau',
          titre: 'Paramètres décrivant l’absorption',
          colonnes: ['Paramètre', 'Signification'],
          lignes: [
            ['Cmax', 'Concentration plasmatique maximale atteinte'],
            ['Tmax', 'Temps nécessaire pour atteindre la concentration maximale'],
            ['ASC (aire sous la courbe)', 'Reflet de la quantité totale de médicament ayant atteint la circulation générale'],
          ],
        },
        {
          type: 'liste',
          items: [
            'Une absorption rapide se traduit par un Tmax court et un Cmax élevé, pour une même aire sous la courbe.',
            'Une absorption lente se traduit par un Tmax plus tardif et un Cmax plus bas, pour une même aire sous la courbe, comme dans le cas des formes à libération prolongée.',
            'L’aire sous la courbe reflète la quantité de médicament absorbée, indépendamment de la vitesse à laquelle cette absorption s’est produite.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repère pratique',
          texte:
            "Deux formulations peuvent avoir la même aire sous la courbe, donc la même quantité totale absorbée, tout en ayant des profils cinétiques très différents en termes de Cmax et de Tmax, ce qui peut avoir des conséquences cliniques importantes, notamment pour les médicaments à marge thérapeutique étroite.",
        },
      ],
    },
  ],
  pointsCles: [
    "La diffusion passive simple est le mécanisme d’absorption dominant pour la majorité des médicaments.",
    "Seule la forme non ionisée d’un acide ou d’une base faible traverse efficacement les membranes biologiques.",
    "L’effet de premier passage hépatique réduit la biodisponibilité orale d’un médicament métabolisé par le foie.",
    "De nombreux facteurs digestifs et physiologiques modifient la vitesse et l’intensité de l’absorption orale.",
    "La biodisponibilité absolue compare une voie donnée à la voie intraveineuse, référence à 100 %.",
    "La biodisponibilité relative compare deux formulations entre elles, sans référence intraveineuse.",
    "L’aire sous la courbe reflète la quantité totale absorbée, indépendamment de la vitesse d’absorption.",
  ],
  erreursFrequentes: [
    "Croire que la forme ionisée d’un médicament traverse facilement les membranes biologiques.",
    "Confondre biodisponibilité absolue et biodisponibilité relative dans un énoncé de QCM.",
    "Penser que l’effet de premier passage hépatique concerne uniquement le foie et jamais la paroi intestinale.",
    "Oublier qu’une prodrogue nécessite parfois l’effet de premier passage pour être activée.",
    "Assimiler un Tmax court à une quantité absorbée plus importante, alors qu’il ne reflète que la vitesse d’absorption.",
  ],
  mnemotechniques: [
    {
      moyen: 'Non ionisé = Non arrêté',
      explication:
        'La forme non ionisée, liposoluble, n’est pas arrêtée par la membrane lipidique et diffuse librement, contrairement à la forme ionisée.',
    },
    {
      moyen: 'F absolue = Face à l’IV',
      explication:
        'La biodisponibilité absolue compare toujours la voie testée à la voie intraveineuse, prise comme référence à 100 %.',
    },
    {
      moyen: 'ASC = Autant que Soit la Cadence',
      explication:
        'L’aire sous la courbe reflète la quantité totale absorbée, quelle que soit la vitesse (la cadence) à laquelle elle a été absorbée.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-absorption-fc-01',
      recto: 'Quel est le mécanisme de passage transmembranaire dominant pour la majorité des médicaments ?',
      verso: 'La diffusion passive simple, non saturable, dépendante de la liposolubilité de la forme non ionisée.',
      type: 'mecanisme',
      tags: ['passage membranaire'],
    },
    {
      id: 'ue6-absorption-fc-02',
      recto: 'Quelle forme d’un acide ou d’une base faible traverse les membranes biologiques par diffusion passive ?',
      verso: 'La forme non ionisée, liposoluble.',
      type: 'mecanisme',
      tags: ['pH-partition'],
    },
    {
      id: 'ue6-absorption-fc-03',
      recto: 'Donner l’équation de Henderson-Hasselbalch appliquée à un acide faible.',
      verso: 'pH = pKa + log ( [forme ionisée] / [forme non ionisée] ).',
      type: 'formule',
      tags: ['pKa'],
    },
    {
      id: 'ue6-absorption-fc-04',
      recto: 'Pourquoi l’acide acétylsalicylique est-il bien absorbé au niveau gastrique ?',
      verso: 'Son pKa voisin de 3,5 le rend majoritairement non ionisé dans l’environnement très acide de l’estomac, ce qui favorise sa diffusion passive.',
      type: 'mecanisme',
      tags: ['pH-partition', 'estomac'],
    },
    {
      id: 'ue6-absorption-fc-05',
      recto: 'Définir l’effet de premier passage hépatique.',
      verso: 'Métabolisation d’une fraction du médicament par le foie avant qu’il n’atteigne la circulation générale, pour les médicaments absorbés par voie digestive.',
      type: 'definition',
      tags: ['premier passage'],
    },
    {
      id: 'ue6-absorption-fc-06',
      recto: 'L’effet de premier passage peut-il concerner un organe autre que le foie ?',
      verso: 'Oui, la paroi intestinale, qui contient des enzymes métabolisantes comme certains cytochromes P450.',
      type: 'mecanisme',
      tags: ['premier passage'],
    },
    {
      id: 'ue6-absorption-fc-07',
      recto: 'Que se passe-t-il pour une prodrogue lors du premier passage hépatique ?',
      verso: 'Le premier passage peut au contraire être nécessaire pour métaboliser la prodrogue inactive en son métabolite actif.',
      type: 'mecanisme',
      tags: ['prodrogue', 'premier passage'],
    },
    {
      id: 'ue6-absorption-fc-08',
      recto: 'Citer un facteur alimentaire réduisant l’absorption de certains antibiotiques.',
      verso: 'Les produits laitiers, riches en calcium, qui forment des complexes insolubles avec certains antibiotiques.',
      type: 'clinique',
      tags: ['interaction', 'absorption'],
    },
    {
      id: 'ue6-absorption-fc-09',
      recto: 'Comment se calcule la biodisponibilité absolue ?',
      verso: 'Par le rapport de l’aire sous la courbe de la voie testée sur celle de la voie intraveineuse, corrigé des doses respectives.',
      type: 'formule',
      tags: ['biodisponibilité'],
    },
    {
      id: 'ue6-absorption-fc-10',
      recto: 'Que compare la biodisponibilité relative ?',
      verso: 'Deux formulations ou voies d’administration entre elles, sans référence à la voie intraveineuse.',
      type: 'definition',
      tags: ['biodisponibilité relative'],
    },
    {
      id: 'ue6-absorption-fc-11',
      recto: 'Que représente le Tmax sur une courbe de concentration plasmatique ?',
      verso: 'Le temps nécessaire pour atteindre la concentration plasmatique maximale.',
      type: 'definition',
      tags: ['paramètres pharmacocinétiques'],
    },
    {
      id: 'ue6-absorption-fc-12',
      recto: 'Que reflète l’aire sous la courbe de concentration plasmatique ?',
      verso: 'La quantité totale de médicament ayant atteint la circulation générale, indépendamment de la vitesse d’absorption.',
      type: 'definition',
      tags: ['ASC'],
    },
  ],
  qcm: [
    {
      id: 'ue6-absorption-qcm-01',
      enonce: 'Concernant le passage membranaire des médicaments, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La diffusion passive simple nécessite un transporteur spécifique.', vraie: false, justification: 'Elle se fait directement à travers la bicouche lipidique, sans transporteur.' },
        { lettre: 'B', texte: 'Le transport actif peut se faire contre le gradient de concentration.', vraie: true, justification: 'C’est justement ce qui le distingue de la diffusion facilitée, et nécessite un apport d’énergie.' },
        { lettre: 'C', texte: 'La diffusion facilitée est saturable.', vraie: true, justification: 'Elle repose sur un nombre limité de protéines transporteuses, ce qui la rend saturable.' },
        { lettre: 'D', texte: 'La filtration concerne surtout les grosses molécules liposolubles.', vraie: false, justification: 'La filtration concerne surtout les petites molécules hydrosolubles passant par les pores membranaires.' },
        { lettre: 'E', texte: 'L’endocytose permet l’internalisation de macromolécules.', vraie: true, justification: 'Ce mécanisme concerne notamment certaines protéines de grande taille.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-absorption-qcm-02',
      enonce: 'Concernant l’influence du pH et du pKa, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Seule la forme ionisée d’un médicament traverse efficacement les membranes.', vraie: false, justification: 'C’est au contraire la forme non ionisée, liposoluble, qui traverse efficacement les membranes.' },
        { lettre: 'B', texte: 'Un acide faible est mieux absorbé en milieu acide.', vraie: true, justification: 'En milieu acide, un acide faible est majoritairement sous forme non ionisée, favorisant sa diffusion.' },
        { lettre: 'C', texte: 'Une base faible est mieux absorbée en milieu acide.', vraie: false, justification: 'En milieu acide, une base faible est au contraire majoritairement ionisée, ce qui limite son absorption.' },
        { lettre: 'D', texte: 'À pH égal au pKa, les deux formes sont équimolaires.', vraie: true, justification: 'C’est une conséquence directe de l’équation de Henderson-Hasselbalch.' },
        { lettre: 'E', texte: 'Le pKa d’un médicament n’a aucune influence sur son absorption digestive.', vraie: false, justification: 'Le pKa, combiné au pH du milieu, détermine la proportion de forme non ionisée disponible pour l’absorption.' },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-absorption-qcm-03',
      enonce: 'Concernant l’effet de premier passage hépatique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il concerne les médicaments administrés par voie intraveineuse.', vraie: false, justification: 'La voie intraveineuse contourne le système porte et n’est pas soumise au premier passage hépatique.' },
        { lettre: 'B', texte: 'Il peut réduire fortement la biodisponibilité orale d’un médicament.', vraie: true, justification: 'Une fraction importante de la dose peut être métabolisée avant d’atteindre la circulation générale.' },
        { lettre: 'C', texte: 'Il peut impliquer la paroi intestinale en plus du foie.', vraie: true, justification: 'Certaines enzymes intestinales, comme des cytochromes P450, participent également à ce phénomène.' },
        { lettre: 'D', texte: 'Une prodrogue ne peut jamais être activée par le premier passage hépatique.', vraie: false, justification: 'Au contraire, le premier passage peut être l’étape d’activation métabolique d’une prodrogue.' },
        { lettre: 'E', texte: 'Une insuffisance hépatique sévère peut diminuer l’ampleur du premier passage.', vraie: true, justification: 'La réduction de la fonction métabolique hépatique peut diminuer le premier passage et augmenter la biodisponibilité orale.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-absorption-qcm-04',
      enonce: 'Concernant les facteurs modifiant l’absorption digestive, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La vitesse de vidange gastrique peut influencer l’absorption intestinale.', vraie: true, justification: 'Elle conditionne le délai d’arrivée du médicament dans l’intestin grêle, principal site d’absorption.' },
        { lettre: 'B', texte: 'Le débit sanguin splanchnique n’a aucune influence sur l’absorption.', vraie: false, justification: 'Une diminution du débit splanchnique peut ralentir l’absorption en réduisant le gradient de concentration entretenu.' },
        { lettre: 'C', texte: 'Les produits laitiers peuvent réduire l’absorption de certains antibiotiques par chélation.', vraie: true, justification: 'Le calcium peut former des complexes insolubles avec certains antibiotiques.' },
        { lettre: 'D', texte: 'La forme galénique n’influence jamais l’absorption.', vraie: false, justification: 'La forme galénique conditionne la vitesse de dissolution et donc la vitesse d’absorption du principe actif.' },
        { lettre: 'E', texte: 'La flore intestinale peut modifier l’absorption de certains médicaments.', vraie: true, justification: 'Certaines bactéries intestinales peuvent métaboliser ou activer certains médicaments avant leur absorption.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-absorption-qcm-05',
      enonce: 'Concernant la biodisponibilité, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La biodisponibilité absolue compare une voie testée à la voie intraveineuse.', vraie: true, justification: 'La voie intraveineuse sert de référence, avec une biodisponibilité fixée à 100 %.' },
        { lettre: 'B', texte: 'La biodisponibilité relative compare deux formulations orales entre elles.', vraie: true, justification: 'Elle permet notamment de comparer une forme générique à une forme de référence, hors voie intraveineuse.' },
        { lettre: 'C', texte: 'La biodisponibilité se caractérise uniquement par le Tmax.', vraie: false, justification: 'Elle se caractérise principalement par l’aire sous la courbe, qui reflète la quantité totale absorbée.' },
        { lettre: 'D', texte: 'La bioéquivalence entre générique et référence repose sur la comparaison de la biodisponibilité relative.', vraie: true, justification: 'Les paramètres pharmacocinétiques comparés doivent rester dans une fourchette réglementaire prédéfinie.' },
        { lettre: 'E', texte: 'La biodisponibilité intraveineuse peut être inférieure à 100 %.', vraie: false, justification: 'Par convention, la totalité de la dose intraveineuse atteint la circulation générale, la biodisponibilité est donc fixée à 100 %.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-absorption-qcm-06',
      enonce: 'Concernant l’aire sous la courbe et les paramètres d’absorption, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le Cmax représente la concentration plasmatique maximale atteinte.', vraie: true, justification: 'C’est la définition même de ce paramètre.' },
        { lettre: 'B', texte: 'Un Tmax court traduit toujours une quantité absorbée plus importante.', vraie: false, justification: 'Le Tmax reflète la vitesse d’absorption, pas la quantité totale absorbée, qui est donnée par l’aire sous la courbe.' },
        { lettre: 'C', texte: 'Une forme à libération prolongée présente en général un Tmax plus tardif qu’une forme à libération immédiate.', vraie: true, justification: 'La libération étalée dans le temps retarde l’atteinte de la concentration maximale.' },
        { lettre: 'D', texte: 'Deux formulations avec la même aire sous la courbe ont nécessairement le même Cmax.', vraie: false, justification: 'Elles peuvent avoir la même quantité totale absorbée tout en présentant des profils de Cmax et de Tmax différents.' },
        { lettre: 'E', texte: 'L’aire sous la courbe peut être utilisée pour calculer une biodisponibilité.', vraie: true, justification: 'Elle constitue le paramètre central du calcul de la biodisponibilité absolue ou relative.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
