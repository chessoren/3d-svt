import type { Fiche } from '../../types';

export const ficheEquilibresIoniques: Fiche = {
  id: 'ue3-equilibres-ioniques',
  ue: 'ue3',
  titre: 'Équilibres ioniques et pH en biophysique',
  sousTitre:
    "Électrolytes forts et faibles, activité ionique, force ionique, tampons du sang et trou anionique",
  chapitre: 'États de la matière et solutions',
  ordre: 3,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'électrolyte fort',
    'électrolyte faible',
    'activité ionique',
    'force ionique',
    'pouvoir tampon',
    'tampon bicarbonate',
    'équation de Henderson-Hasselbalch',
    'trou anionique',
  ],
  objectifs: [
    "Distinguer électrolytes forts et faibles selon leur degré de dissociation en solution aqueuse.",
    "Différencier concentration et activité ionique, et calculer une force ionique.",
    "Utiliser l’équation de Henderson-Hasselbalch pour analyser un système tampon.",
    "Décrire le fonctionnement du tampon bicarbonate et son rôle dans l’équilibre acido-basique sanguin.",
    "Calculer et interpréter un trou anionique.",
  ],
  sections: [
    {
      id: 'electrolytes',
      titre: 'Électrolytes forts et électrolytes faibles',
      blocs: [
        {
          type: 'definition',
          terme: 'Électrolyte',
          definition:
            "Substance qui, dissoute dans l’eau, se dissocie totalement ou partiellement en ions et rend la solution conductrice du courant électrique.",
        },
        {
          type: 'liste',
          items: [
            "Un électrolyte fort se dissocie totalement (ou quasi totalement) en solution aqueuse : c’est le cas du chlorure de sodium (NaCl), du chlorure de potassium (KCl) ou de l’acide chlorhydrique (HCl).",
            "Un électrolyte faible ne se dissocie que partiellement, selon un équilibre chimique caractérisé par sa constante de dissociation (Ka pour un acide faible, Kb pour une base faible) : c’est le cas de l’acide acétique, de l’acide carbonique ou de l’ammoniac.",
            "Le degré de dissociation d’un électrolyte faible dépend de sa concentration et du pH du milieu, contrairement à celui d’un électrolyte fort, pratiquement constant et proche de 1.",
          ],
        },
        {
          type: 'formule',
          expression: 'pH = pKa + log ( [A-] / [AH] )',
          legende:
            "Équation de Henderson-Hasselbalch appliquée à un couple acide faible / base conjuguée AH / A-. Elle relie le pH d’une solution tampon au pKa du couple et au rapport des concentrations des deux formes.",
          unites: 'pH sans unité, pKa sans unité, concentrations en mol/L (le rapport est sans unité)',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'pH = pKa n’est pas un hasard',
          texte:
            "Lorsque le pH d’une solution est égal au pKa d’un couple acide-base, les concentrations de la forme acide et de la forme basique conjuguée sont égales : le logarithme du rapport vaut alors zéro. C’est à ce pH que le pouvoir tampon d’un couple est maximal.",
        },
      ],
    },
    {
      id: 'activite-force-ionique',
      titre: 'Activité ionique et force ionique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En solution suffisamment diluée, la concentration d’un ion reflète correctement son comportement chimique. Dans une solution plus concentrée, comme le plasma, les interactions électrostatiques entre ions de charges opposées réduisent leur « efficacité » chimique réelle : on introduit alors la notion d’activité.",
        },
        {
          type: 'definition',
          terme: 'Activité ionique',
          definition:
            "Concentration effective d’un ion telle qu’elle intervient réellement dans les équilibres chimiques et les phénomènes électriques, toujours inférieure ou égale à sa concentration réelle en solution non idéale.",
        },
        {
          type: 'formule',
          expression: 'a = gamma x C',
          legende:
            "L’activité a d’un ion est le produit de sa concentration C par un coefficient d’activité gamma, compris entre 0 et 1, qui traduit l’écart au comportement idéal.",
          unites: 'a et C en mol/L, gamma sans unité',
        },
        {
          type: 'definition',
          terme: 'Force ionique',
          definition:
            "Grandeur qui quantifie l’intensité globale des interactions électrostatiques dans une solution d’électrolytes, en tenant compte de la concentration et de la charge de chaque ion présent.",
        },
        {
          type: 'formule',
          expression: 'I = 1/2 x somme ( C i x z i au carré )',
          legende:
            "Force ionique I d’une solution : somme, pour chaque ion i, du produit de sa concentration C i par le carré de sa charge z i, le tout multiplié par un demi. Plus la force ionique est élevée, plus le coefficient d’activité gamma s’éloigne de 1.",
          unites: 'I en mol/L, C i en mol/L, z i sans unité (charge algébrique de l’ion)',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Effet de la charge sur la force ionique',
          texte:
            "La force ionique dépend du carré de la charge : un ion bivalent comme le calcium (Ca2+) contribue quatre fois plus à la force ionique qu’un ion monovalent de même concentration, comme le sodium (Na+).",
        },
      ],
    },
    {
      id: 'systemes-tampons',
      titre: 'Systèmes tampons et pouvoir tampon',
      blocs: [
        {
          type: 'definition',
          terme: 'Solution tampon',
          definition:
            "Solution qui s’oppose aux variations de pH lors de l’ajout modéré d’un acide ou d’une base, grâce à la présence simultanée d’un acide faible et de sa base conjuguée (ou d’une base faible et de son acide conjugué).",
        },
        {
          type: 'liste',
          items: [
            "Le pouvoir tampon d’un couple est maximal lorsque le pH du milieu est proche du pKa du couple, dans un intervalle généralement admis de pKa plus ou moins une unité de pH.",
            "Plus les concentrations de l’acide et de la base conjuguée sont élevées, plus le pouvoir tampon global de la solution est important.",
            "Un système tampon ne peut pas empêcher indéfiniment une variation de pH : sa capacité est limitée par la quantité disponible de chacune de ses deux formes.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Principaux systèmes tampons de l’organisme',
          colonnes: ['Système tampon', 'Couple acide / base', 'Localisation principale'],
          lignes: [
            ['Bicarbonate', 'H2CO3 / HCO3-', 'Plasma, milieu extracellulaire'],
            ['Phosphate', 'H2PO4- / HPO4 2-', 'Intracellulaire, urines'],
            ['Protéines plasmatiques', 'Groupements ionisables des protéines', 'Plasma'],
            ['Hémoglobine', 'Groupements imidazole des résidus histidine', 'Érythrocytes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Pourquoi le tampon bicarbonate est-il si efficace malgré un pKa éloigné du pH sanguin ?',
          texte:
            "Le pKa du couple H2CO3 / HCO3- vaut environ 6,1, pourtant éloigné du pH sanguin de 7,4. Son efficacité tient à ce qu’il s’agit d’un système ouvert : le CO2 produit peut être éliminé par la ventilation pulmonaire, et le bicarbonate peut être régénéré ou excrété par le rein, ce qui démultiplie sa capacité tampon effective.",
        },
      ],
    },
    {
      id: 'tampon-bicarbonate',
      titre: 'Le tampon bicarbonate et l’équilibre acido-basique sanguin',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le système tampon bicarbonate repose sur l’équilibre entre le dioxyde de carbone dissous, l’acide carbonique et l’ion bicarbonate. C’est le tampon extracellulaire majeur, dont l’étude fonde l’interprétation des gaz du sang.",
        },
        {
          type: 'formule',
          expression: 'pH = 6,1 + log ( [HCO3-] / (0,03 x PaCO2) )',
          legende:
            "Équation de Henderson-Hasselbalch appliquée au couple bicarbonate. PaCO2 est la pression partielle artérielle en dioxyde de carbone ; 0,03 mmol/(L·mmHg) est le coefficient de solubilité du CO2 dans le plasma (loi de Henry), qui permet de convertir la PaCO2 en concentration de CO2 dissous.",
          unites: 'pH sans unité, [HCO3-] en mmol/L, PaCO2 en mmHg',
        },
        {
          type: 'liste',
          items: [
            "Le rein régule la réabsorption et la régénération des bicarbonates : c’est la composante métabolique de l’équilibre acido-basique.",
            "Le poumon régule l’élimination du CO2 par la ventilation alvéolaire : c’est la composante respiratoire de l’équilibre acido-basique.",
            "Ces deux organes agissent de façon complémentaire pour maintenir le rapport [HCO3-] / PaCO2, et donc le pH sanguin, dans des limites étroites.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Valeurs physiologiques de référence',
          texte:
            "pH artériel : 7,38 à 7,42. Bicarbonatémie : 22 à 26 mmol/L. PaCO2 : 36 à 44 mmHg. Ces trois valeurs sont liées par l’équation de Henderson-Hasselbalch et doivent être interprétées ensemble.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Lecture rapide d’un trouble acido-basique',
          texte:
            "Une acidose s’accompagne d’un pH abaissé ; une élévation isolée de la PaCO2 oriente vers une origine respiratoire, une baisse isolée des bicarbonates vers une origine métabolique. L’organisme met en place une compensation (respiratoire pour un trouble métabolique, rénale pour un trouble respiratoire) qui tend à ramener le pH vers la normale sans jamais totalement le corriger seule.",
        },
      ],
    },
    {
      id: 'trou-anionique',
      titre: 'Le trou anionique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le plasma est électriquement neutre : la somme des charges positives (cations) est égale à la somme des charges négatives (anions). Certains ions, notamment les protéines chargées négativement, les phosphates, les sulfates et certains acides organiques, ne sont pas mesurés en routine : leur différence non mesurée constitue le trou anionique.",
        },
        {
          type: 'formule',
          expression: 'Trou anionique = [Na+] - ( [Cl-] + [HCO3-] )',
          legende:
            "Formule usuelle du trou anionique plasmatique, calculée à partir des ions les plus abondants et dosés en routine.",
          unites: 'concentrations en mmol/L, résultat en mmol/L',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Valeur physiologique',
          texte:
            "Le trou anionique normal est habituellement compris entre 8 et 16 mmol/L, principalement constitué par les charges négatives portées par l’albumine plasmatique.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Intérêt diagnostique',
          texte:
            "Un trou anionique augmenté oriente vers l’accumulation d’un acide organique non mesuré (acidocétose, acidose lactique, intoxication à l’éthylène glycol ou au méthanol, insuffisance rénale). Un trou anionique normal, au cours d’une acidose métabolique, oriente vers une perte digestive ou rénale de bicarbonates compensée par une rétention de chlore (acidose hyperchlorémique).",
        },
      ],
    },
  ],
  pointsCles: [
    "Un électrolyte fort se dissocie totalement en solution, un électrolyte faible seulement partiellement selon sa constante de dissociation.",
    "L’activité ionique, produit de la concentration par le coefficient d’activité gamma, diffère de la concentration en solution non idéale.",
    "La force ionique dépend de la concentration et du carré de la charge de chaque ion présent.",
    "L’équation de Henderson-Hasselbalch relie le pH d’un tampon au pKa du couple et au rapport base conjuguée sur acide.",
    "Le pouvoir tampon d’un couple est maximal quand le pH est proche de son pKa.",
    "Le tampon bicarbonate associe une composante respiratoire (élimination du CO2) et une composante rénale (régénération du bicarbonate).",
    "Le trou anionique se calcule par [Na+] moins la somme [Cl-] plus [HCO3-] et reflète les anions non mesurés du plasma.",
  ],
  erreursFrequentes: [
    "Confondre concentration et activité ionique : elles ne sont identiques qu’en solution infiniment diluée, où gamma tend vers 1.",
    "Oublier le carré de la charge dans le calcul de la force ionique, qui n’est pas une simple somme des concentrations.",
    "Croire que le tampon bicarbonate est efficace uniquement parce que son pKa est proche de 7,4, alors qu’il l’est surtout car c’est un système ouvert régulé par le poumon et le rein.",
    "Inverser le numérateur et le dénominateur dans l’équation de Henderson-Hasselbalch (c’est la base conjuguée au numérateur, l’acide au dénominateur).",
    "Interpréter un trouble acido-basique à partir du seul pH, sans regarder conjointement la PaCO2 et les bicarbonates.",
    "Oublier que le trou anionique normal n’est pas nul, car il reflète principalement les charges négatives de l’albumine plasmatique.",
  ],
  mnemotechniques: [
    {
      moyen: '« Henderson-Hasselbalch : la Base est en Haut »',
      explication:
        "Rappelle que la base conjuguée se place au numérateur du logarithme et l’acide au dénominateur dans pH = pKa + log ( [base] / [acide] ).",
    },
    {
      moyen: '« Fort = tout, Faible = un peu »',
      explication:
        "Un électrolyte fort se dissocie totalement (tout), un électrolyte faible seulement partiellement (un peu), selon son équilibre de dissociation.",
    },
    {
      moyen: '« Poumon souffle le CO2, rein garde le bicar »',
      explication:
        "Résume la double régulation du tampon bicarbonate : le poumon élimine le CO2 (composante respiratoire), le rein régénère et réabsorbe le bicarbonate (composante métabolique).",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Guyton et Hall, Précis de physiologie médicale',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-equilibres-ioniques-fc-01',
      recto: 'Quelle est la différence entre un électrolyte fort et un électrolyte faible ?',
      verso: 'L’électrolyte fort se dissocie totalement en solution ; l’électrolyte faible ne se dissocie que partiellement, selon un équilibre caractérisé par son Ka ou son Kb.',
      type: 'definition',
      tags: ['électrolytes'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-02',
      recto: 'Comment relie-t-on activité et concentration d’un ion ?',
      verso: 'a = gamma x C, avec gamma le coefficient d’activité, compris entre 0 et 1.',
      type: 'formule',
      tags: ['activité ionique'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-03',
      recto: 'Écrire la formule de la force ionique d’une solution.',
      verso: 'I = 1/2 x somme ( C i x z i au carré ), sommée sur tous les ions présents.',
      type: 'formule',
      tags: ['force ionique'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-04',
      recto: 'Écrire l’équation de Henderson-Hasselbalch générale.',
      verso: 'pH = pKa + log ( [A-] / [AH] ).',
      type: 'formule',
      tags: ['tampon'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-05',
      recto: 'À quel pH le pouvoir tampon d’un couple acide-base est-il maximal ?',
      verso: 'Lorsque le pH est égal au pKa du couple : les deux formes sont alors à concentrations égales.',
      type: 'mecanisme',
      tags: ['pouvoir tampon'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-06',
      recto: 'Écrire l’équation de Henderson-Hasselbalch appliquée au tampon bicarbonate.',
      verso: 'pH = 6,1 + log ( [HCO3-] / (0,03 x PaCO2) ).',
      type: 'formule',
      tags: ['tampon bicarbonate'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-07',
      recto: 'Pourquoi le tampon bicarbonate est-il particulièrement efficace in vivo ?',
      verso: 'C’est un système ouvert : le CO2 est éliminé par la ventilation pulmonaire et le bicarbonate est régénéré ou excrété par le rein.',
      type: 'mecanisme',
      tags: ['tampon bicarbonate', 'régulation'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-08',
      recto: 'Donner les valeurs physiologiques normales du pH, des bicarbonates et de la PaCO2 artériels.',
      verso: 'pH : 7,38-7,42 ; HCO3- : 22-26 mmol/L ; PaCO2 : 36-44 mmHg.',
      type: 'chiffre',
      tags: ['gaz du sang'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-09',
      recto: 'Écrire la formule du trou anionique plasmatique.',
      verso: 'Trou anionique = [Na+] - ( [Cl-] + [HCO3-] ).',
      type: 'formule',
      tags: ['trou anionique'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-10',
      recto: 'Quelle est la valeur normale du trou anionique et sa principale origine ?',
      verso: 'Entre 8 et 16 mmol/L, principalement lié aux charges négatives de l’albumine plasmatique.',
      type: 'chiffre',
      tags: ['trou anionique'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-11',
      recto: 'Qu’évoque un trou anionique augmenté au cours d’une acidose métabolique ?',
      verso: 'L’accumulation d’un acide organique non mesuré : acidocétose, acidose lactique, intoxication (éthylène glycol, méthanol) ou insuffisance rénale.',
      type: 'clinique',
      tags: ['trou anionique', 'acidose'],
    },
    {
      id: 'ue3-equilibres-ioniques-fc-12',
      recto: 'Pourquoi un ion bivalent contribue-t-il davantage à la force ionique qu’un ion monovalent de même concentration ?',
      verso: 'Car la force ionique dépend du carré de la charge de l’ion : un ion bivalent (z = 2) contribue quatre fois plus qu’un ion monovalent (z = 1).',
      type: 'mecanisme',
      tags: ['force ionique'],
    },
  ],
  qcm: [
    {
      id: 'ue3-equilibres-ioniques-qcm-01',
      enonce: 'Concernant les électrolytes forts et faibles, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le chlorure de sodium est un électrolyte fort.',
          vraie: true,
          justification: 'Exact : il se dissocie quasi totalement en Na+ et Cl- en solution aqueuse.',
        },
        {
          lettre: 'B',
          texte: 'L’acide carbonique est un électrolyte fort.',
          vraie: false,
          justification: "C’est un acide faible, dont la dissociation est partielle et régie par son Ka.",
        },
        {
          lettre: 'C',
          texte: 'Le degré de dissociation d’un électrolyte faible dépend du pH du milieu.',
          vraie: true,
          justification: "Exact : le rapport entre forme acide et forme basique conjuguée dépend du pH, selon l’équation de Henderson-Hasselbalch.",
        },
        {
          lettre: 'D',
          texte: 'Un électrolyte fort a un degré de dissociation pratiquement constant et proche de 1.',
          vraie: true,
          justification: 'Exact, contrairement à un électrolyte faible dont la dissociation est partielle et variable.',
        },
        {
          lettre: 'E',
          texte: 'Tous les électrolytes rendent une solution aqueuse conductrice du courant électrique.',
          vraie: true,
          justification: "Exact, c’est la définition même d’un électrolyte : sa dissociation en ions permet la conduction électrique.",
        },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-equilibres-ioniques-qcm-02',
      enonce: 'Concernant l’activité et la force ionique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’activité d’un ion est toujours supérieure à sa concentration réelle.',
          vraie: false,
          justification: 'Le coefficient d’activité gamma étant compris entre 0 et 1 en solution non idéale, l’activité est inférieure ou égale à la concentration.',
        },
        {
          lettre: 'B',
          texte: 'La force ionique tient compte du carré de la charge de chaque ion.',
          vraie: true,
          justification: 'Exact : I = 1/2 x somme (C i x z i au carré).',
        },
        {
          lettre: 'C',
          texte: 'Un ion bivalent contribue autant à la force ionique qu’un ion monovalent de même concentration.',
          vraie: false,
          justification: 'Il contribue quatre fois plus, car sa charge est élevée au carré (2 au carré = 4).',
        },
        {
          lettre: 'D',
          texte: 'Plus la force ionique est élevée, plus le coefficient d’activité s’éloigne de 1.',
          vraie: true,
          justification: "Exact : les interactions électrostatiques augmentent avec la force ionique, réduisant l’efficacité chimique apparente des ions.",
        },
        {
          lettre: 'E',
          texte: 'En solution infiniment diluée, activité et concentration sont pratiquement identiques.',
          vraie: true,
          justification: 'Exact : le coefficient d’activité gamma tend alors vers 1.',
        },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 3,
    },
    {
      id: 'ue3-equilibres-ioniques-qcm-03',
      enonce: 'Concernant l’équation de Henderson-Hasselbalch et les systèmes tampons, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'pH = pKa + log ( [base conjuguée] / [acide] ).',
          vraie: true,
          justification: 'Exact : c’est l’expression générale de l’équation de Henderson-Hasselbalch.',
        },
        {
          lettre: 'B',
          texte: 'Le pouvoir tampon est maximal lorsque le pH est très éloigné du pKa.',
          vraie: false,
          justification: 'Il est maximal lorsque le pH est proche du pKa, où les deux formes sont en proportions comparables.',
        },
        {
          lettre: 'C',
          texte: 'À pH égal au pKa, les concentrations de l’acide et de la base conjuguée sont égales.',
          vraie: true,
          justification: 'Exact : le rapport vaut alors 1 et son logarithme vaut 0.',
        },
        {
          lettre: 'D',
          texte: 'Un système tampon peut s’opposer indéfiniment à toute variation de pH, quelle que soit la quantité d’acide ou de base ajoutée.',
          vraie: false,
          justification: 'Sa capacité est limitée par la quantité disponible de chacune des deux formes du couple.',
        },
        {
          lettre: 'E',
          texte: 'L’hémoglobine participe au pouvoir tampon du sang grâce aux résidus histidine.',
          vraie: true,
          justification: 'Exact : les groupements imidazole des résidus histidine de l’hémoglobine ont un pKa proche du pH physiologique.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-equilibres-ioniques-qcm-04',
      enonce: 'Concernant le tampon bicarbonate, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le pKa du couple H2CO3 / HCO3- vaut environ 6,1.',
          vraie: true,
          justification: 'Exact, c’est la valeur utilisée dans l’équation de Henderson-Hasselbalch appliquée au bicarbonate.',
        },
        {
          lettre: 'B',
          texte: 'Le poumon régule la composante métabolique de l’équilibre acido-basique.',
          vraie: false,
          justification: 'Le poumon régule la composante respiratoire, via l’élimination du CO2 ; le rein régule la composante métabolique.',
        },
        {
          lettre: 'C',
          texte: 'Une augmentation isolée de la PaCO2 oriente vers un trouble d’origine respiratoire.',
          vraie: true,
          justification: 'Exact : la PaCO2 reflète la composante respiratoire de l’équilibre acido-basique.',
        },
        {
          lettre: 'D',
          texte: 'Le coefficient 0,03 utilisé dans l’équation appliquée au bicarbonate correspond au coefficient de solubilité du CO2 dans le plasma.',
          vraie: true,
          justification: 'Exact, il convertit la PaCO2 (en mmHg) en concentration de CO2 dissous, selon la loi de Henry.',
        },
        {
          lettre: 'E',
          texte: 'Le tampon bicarbonate est un système fermé, sans échange avec l’extérieur.',
          vraie: false,
          justification: "C’est au contraire un système ouvert, dont l’efficacité tient à l’élimination pulmonaire du CO2 et à la régulation rénale du bicarbonate.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-equilibres-ioniques-qcm-05',
      enonce: 'Concernant le trou anionique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le trou anionique se calcule usuellement par [Na+] moins la somme [Cl-] et [HCO3-].',
          vraie: true,
          justification: 'Exact, c’est la formule de référence utilisant les ions dosés en routine.',
        },
        {
          lettre: 'B',
          texte: 'Sa valeur normale est habituellement de 0 mmol/L.',
          vraie: false,
          justification: 'Sa valeur normale est comprise entre 8 et 16 mmol/L, en raison notamment des charges négatives de l’albumine.',
        },
        {
          lettre: 'C',
          texte: 'Un trou anionique augmenté peut orienter vers une acidocétose.',
          vraie: true,
          justification: "Exact : l’accumulation de corps cétoniques, acides organiques non mesurés, augmente le trou anionique.",
        },
        {
          lettre: 'D',
          texte: 'Une acidose métabolique à trou anionique normal peut s’expliquer par une perte digestive de bicarbonates compensée par une rétention de chlore.',
          vraie: true,
          justification: 'Exact : c’est le mécanisme classique d’une acidose hyperchlorémique, par exemple lors d’une diarrhée importante.',
        },
        {
          lettre: 'E',
          texte: 'Le trou anionique reflète essentiellement des cations non mesurés du plasma.',
          vraie: false,
          justification: 'Il reflète principalement des anions non mesurés, en premier lieu les charges négatives portées par l’albumine.',
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-equilibres-ioniques-qcm-06',
      enonce: 'Concernant l’interprétation d’un trouble acido-basique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une PaCO2 basse associée à un pH élevé oriente vers une alcalose respiratoire.',
          vraie: true,
          justification: "Exact : une hyperventilation abaisse la PaCO2 et élève le pH, signant une alcalose d’origine respiratoire.",
        },
        {
          lettre: 'B',
          texte: 'Une compensation ramène systématiquement et totalement le pH à sa valeur normale.',
          vraie: false,
          justification: 'La compensation, respiratoire ou rénale, atténue la variation du pH mais ne le normalise que rarement complètement.',
        },
        {
          lettre: 'C',
          texte: 'Une bicarbonatémie basse isolée oriente vers une origine métabolique du trouble.',
          vraie: true,
          justification: 'Exact : les bicarbonates reflètent la composante métabolique de l’équilibre acido-basique.',
        },
        {
          lettre: 'D',
          texte: 'La compensation rénale d’un trouble respiratoire est plus rapide que la compensation respiratoire d’un trouble métabolique.',
          vraie: false,
          justification: 'C’est l’inverse : la compensation respiratoire est rapide (minutes à heures), la compensation rénale est lente (plusieurs jours).',
        },
        {
          lettre: 'E',
          texte: 'Il faut toujours interpréter conjointement le pH, la PaCO2 et les bicarbonates pour identifier un trouble acido-basique.',
          vraie: true,
          justification: "Exact : ces trois paramètres sont liés par l’équation de Henderson-Hasselbalch et s’interprètent ensemble.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
