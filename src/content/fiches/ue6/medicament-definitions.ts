import type { Fiche } from '../../types';

export const ficheMedicamentDefinitions: Fiche = {
  id: 'ue6-medicament-definitions',
  ue: 'ue6',
  titre: 'Le médicament : définitions et formes',
  sousTitre: 'Définition légale, principe actif, dénomination commune internationale et formes galéniques',
  chapitre: 'Le médicament',
  ordre: 1,
  duree: 22,
  difficulte: 1,
  motsCles: [
    'médicament',
    'principe actif',
    'excipient',
    'dénomination commune internationale',
    'spécialité pharmaceutique',
    'générique',
    'forme galénique',
    'autorisation de mise sur le marché',
  ],
  objectifs: [
    'Connaître la définition légale du médicament selon le code de la santé publique.',
    'Distinguer principe actif et excipient dans la composition d’un médicament.',
    'Expliquer le principe de la dénomination commune internationale.',
    'Différencier spécialité de référence et médicament générique.',
    'Citer les principales formes galéniques et leurs voies d’administration associées.',
    'Décrire le rôle de l’autorisation de mise sur le marché.',
  ],
  sections: [
    {
      id: 'definition-legale',
      titre: 'Définition légale du médicament',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le code de la santé publique français définit le médicament comme toute substance ou composition présentée comme possédant des propriétés curatives ou préventives à l’égard des maladies humaines ou animales, ainsi que toute substance pouvant être administrée en vue d’établir un diagnostic médical ou de restaurer, corriger ou modifier des fonctions physiologiques en exerçant une action pharmacologique, immunologique ou métabolique.",
        },
        {
          type: 'liste',
          items: [
            'Cette définition comporte deux critères alternatifs : le critère de présentation (ce que le produit annonce être) et le critère de fonction (ce que le produit fait réellement sur l’organisme).',
            'Un produit répondant à l’un ou l’autre de ces deux critères relève de la réglementation du médicament, même s’il est commercialisé comme complément alimentaire ou cosmétique.',
            'Le statut de médicament conditionne la procédure d’évaluation, de fabrication, de distribution et de surveillance du produit tout au long de sa vie.',
          ],
        },
        {
          type: 'definition',
          terme: 'Critère de présentation',
          definition:
            "Est considéré comme médicament tout produit présenté comme possédant des propriétés préventives ou curatives, indépendamment de son efficacité réelle. Une allégation thérapeutique sur l’étiquetage ou la publicité suffit à faire basculer un produit dans le champ du médicament.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les deux critères ne sont pas cumulatifs',
          texte:
            "Il suffit qu’un seul des deux critères soit rempli pour qu’un produit soit qualifié de médicament par voie légale. Un produit peut donc être un médicament par sa seule présentation, même sans action pharmacologique démontrée, et inversement un produit peut être un médicament par fonction sans revendiquer explicitement une vertu thérapeutique.",
        },
      ],
    },
    {
      id: 'composition',
      titre: 'Principe actif et excipients',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Tout médicament est constitué de deux catégories de composants : le ou les principes actifs, responsables de l’effet pharmacologique recherché, et les excipients, dépourvus d’activité pharmacologique propre mais indispensables à la fabrication, à la stabilité, à la conservation ou à l’administration du produit.",
        },
        {
          type: 'definition',
          terme: 'Principe actif',
          definition:
            "Substance dotée d’une activité pharmacologique, immunologique ou métabolique, à laquelle est attribué l’effet thérapeutique recherché du médicament. Un même médicament peut contenir un ou plusieurs principes actifs, on parle alors d’association fixe.",
        },
        {
          type: 'definition',
          terme: 'Excipient',
          definition:
            "Substance autre que le principe actif, présente dans la formulation du médicament pour lui conférer sa forme, faciliter sa fabrication, sa conservation, son administration ou sa biodisponibilité. Les excipients incluent les liants, les diluants, les conservateurs, les colorants et les édulcorants.",
        },
        {
          type: 'tableau',
          titre: 'Exemples de fonctions des excipients',
          colonnes: ['Fonction', 'Exemple d’excipient', 'Rôle'],
          lignes: [
            ['Diluant', 'Lactose', 'Assure un volume suffisant pour la fabrication du comprimé'],
            ['Liant', 'Povidone', 'Assure la cohésion des particules lors de la compression'],
            ['Conservateur', 'Parabènes', 'Prévient la contamination microbienne'],
            ['Lubrifiant', 'Stéarate de magnésium', 'Facilite le démoulage lors de la compression'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Excipient à effet notoire',
          texte:
            "Certains excipients peuvent provoquer des effets indésirables ou des interactions propres chez des patients sensibles : ils doivent alors être mentionnés explicitement sur la notice et l’emballage. C’est le cas par exemple du lactose chez les patients intolérants ou de certains colorants chez les sujets allergiques.",
        },
      ],
    },
    {
      id: 'denomination',
      titre: 'Dénomination commune internationale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La dénomination commune internationale, ou DCI, est le nom scientifique international attribué à chaque principe actif par l’Organisation mondiale de la santé. Elle permet une identification univoque de la substance, indépendamment des noms commerciaux utilisés par les différents fabricants dans les différents pays.",
        },
        {
          type: 'liste',
          items: [
            'La DCI est composée d’un radical commun qui reflète souvent la classe pharmacologique de la substance, associé à un préfixe ou un suffixe distinctif propre à la molécule.',
            'L’usage de la DCI est recommandé pour la prescription et l’enseignement, car il évite la confusion entre les multiples noms de spécialités contenant le même principe actif.',
            'Un même principe actif désigné par sa DCI peut être commercialisé sous des dizaines de noms de spécialité différents selon les fabricants et les pays.',
          ],
        },
        {
          type: 'tableau',
          titre: 'Exemples de radicaux communs de DCI',
          colonnes: ['Radical', 'Classe pharmacologique évoquée', 'Exemple de DCI'],
          lignes: [
            ['-olol', 'Bêta-bloquant', 'Propranolol'],
            ['-pril', 'Inhibiteur de l’enzyme de conversion', 'Énalapril'],
            ['-sartan', 'Antagoniste des récepteurs de l’angiotensine II', 'Losartan'],
            ['-statine', 'Inhibiteur de l’HMG-CoA réductase', 'Simvastatine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Pourquoi utiliser la DCI',
          texte:
            "L’usage systématique de la DCI en enseignement et en prescription limite les erreurs médicamenteuses liées à la multiplicité des noms commerciaux et facilite la substitution par un générique, puisque la DCI identifie sans ambiguïté le principe actif administré.",
        },
      ],
    },
    {
      id: 'specialite-generique',
      titre: 'Spécialité pharmaceutique et médicament générique',
      blocs: [
        {
          type: 'definition',
          terme: 'Spécialité pharmaceutique',
          definition:
            "Médicament préparé à l’avance, présenté sous un conditionnement particulier et caractérisé par une dénomination spéciale, un dosage et une forme pharmaceutique déterminés. Elle est fabriquée industriellement et fait l’objet d’une autorisation de mise sur le marché.",
        },
        {
          type: 'definition',
          terme: 'Médicament générique',
          definition:
            "Spécialité qui a la même composition qualitative et quantitative en principe actif, la même forme pharmaceutique que la spécialité de référence, et dont la bioéquivalence avec cette dernière a été démontrée par des études appropriées de biodisponibilité.",
        },
        {
          type: 'liste',
          items: [
            'Le générique peut différer de la spécialité de référence par ses excipients, sa couleur, sa forme extérieure ou son nom commercial.',
            'La bioéquivalence est établie lorsque les paramètres pharmacocinétiques du générique restent dans un intervalle de confiance prédéfini autour de ceux de la spécialité de référence.',
            'La commercialisation d’un générique n’est possible qu’après l’expiration du brevet protégeant la spécialité de référence.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Repère réglementaire',
          texte:
            "En France, la substitution d’une spécialité par son générique est autorisée par le pharmacien sauf mention contraire du prescripteur, dans le cadre du répertoire des groupes génériques établi par l’agence nationale de sécurité du médicament et des produits de santé.",
        },
      ],
    },
    {
      id: 'formes-galeniques',
      titre: 'Formes galéniques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La forme galénique désigne l’aspect physique sous lequel le principe actif et les excipients sont associés et présentés en vue de leur administration. Le choix de la forme galénique conditionne la voie d’administration possible, la vitesse et l’intensité de l’effet, ainsi que l’observance du traitement par le patient.",
        },
        {
          type: 'tableau',
          titre: 'Principales formes galéniques',
          colonnes: ['Forme', 'Exemple', 'Voie d’administration principale'],
          lignes: [
            ['Comprimé', 'Comprimé pelliculé, comprimé effervescent', 'Orale'],
            ['Gélule', 'Gélule gastro-résistante', 'Orale'],
            ['Solution injectable', 'Ampoule pour injection intraveineuse', 'Parentérale'],
            ['Suppositoire', 'Suppositoire à libération immédiate', 'Rectale'],
            ['Patch transdermique', 'Dispositif transdermique matriciel', 'Transdermique'],
            ['Collyre', 'Solution ophtalmique', 'Oculaire'],
          ],
        },
        {
          type: 'liste',
          items: [
            'Les formes à libération immédiate délivrent le principe actif rapidement après administration.',
            'Les formes à libération prolongée ou retard étalent la libération du principe actif dans le temps, ce qui réduit le nombre de prises quotidiennes.',
            'Les formes gastro-résistantes protègent le principe actif de l’acidité gastrique ou protègent la muqueuse gastrique du principe actif.',
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Ne jamais écraser une forme à libération modifiée',
          texte:
            "Écraser un comprimé à libération prolongée ou ouvrir une gélule gastro-résistante détruit le mécanisme de libération contrôlée et peut entraîner un relargage brutal du principe actif, exposant à un surdosage ou à une toxicité digestive.",
        },
      ],
    },
    {
      id: 'amm',
      titre: 'Autorisation de mise sur le marché',
      blocs: [
        {
          type: 'definition',
          terme: 'Autorisation de mise sur le marché (AMM)',
          definition:
            "Document délivré par une autorité compétente, nationale ou européenne, qui autorise la commercialisation d’un médicament sur la base d’un dossier démontrant sa qualité pharmaceutique, son efficacité et sa sécurité d’emploi dans les indications revendiquées.",
        },
        {
          type: 'liste',
          items: [
            'L’AMM précise les indications thérapeutiques, la posologie, les contre-indications, les précautions d’emploi et le résumé des caractéristiques du produit.',
            'En France, l’agence nationale de sécurité du médicament et des produits de santé délivre les AMM nationales ; l’Agence européenne des médicaments délivre les AMM valables dans l’ensemble de l’Union européenne selon la procédure centralisée.',
            'Un médicament sans AMM ne peut être commercialisé, sauf dispositifs dérogatoires encadrés comme l’autorisation temporaire d’utilisation.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Prescription hors AMM',
          texte:
            "La prescription en dehors des indications, posologies ou populations validées par l’AMM est possible dans certaines situations cliniques, mais elle engage la responsabilité du prescripteur et doit reposer sur des données scientifiques solides ainsi que sur l’information éclairée du patient.",
        },
      ],
    },
  ],
  pointsCles: [
    "La définition légale du médicament repose sur deux critères alternatifs : la présentation et la fonction.",
    "Le principe actif porte l’effet pharmacologique, les excipients assurent la mise en forme et la stabilité du produit.",
    "La DCI identifie sans ambiguïté un principe actif, indépendamment des noms commerciaux.",
    "Le générique doit démontrer sa bioéquivalence avec la spécialité de référence pour être commercialisé.",
    "La forme galénique conditionne la voie d’administration, la vitesse d’action et l’observance.",
    "Une forme à libération modifiée ne doit jamais être écrasée ou ouverte sans avis pharmaceutique.",
    "L’AMM conditionne la commercialisation légale d’un médicament et fixe ses conditions d’usage.",
  ],
  erreursFrequentes: [
    "Croire que les deux critères de la définition légale du médicament sont cumulatifs : un seul suffit.",
    "Confondre excipient et principe actif dans l’analyse de la composition d’un médicament.",
    "Penser que le générique est chimiquement identique en tout point à la spécialité de référence : seuls le principe actif, le dosage et la forme pharmaceutique sont identiques, les excipients peuvent différer.",
    "Oublier la notion d’excipient à effet notoire, pourtant essentielle en pratique clinique.",
    "Confondre nom de spécialité et DCI lors de la lecture d’une ordonnance ou d’un énoncé.",
    "Croire que toutes les formes galéniques orales peuvent être écrasées sans conséquence.",
  ],
  mnemotechniques: [
    {
      moyen: 'PEF : Présentation, Efficacité, Fonction',
      explication:
        'Rappelle que la qualification légale de médicament repose sur la présentation ou la fonction pharmacologique, évaluées au regard de l’efficacité revendiquée.',
    },
    {
      moyen: 'DCI = Doit être Compris Internationalement',
      explication:
        'La dénomination commune internationale est un langage partagé qui transcende les noms commerciaux nationaux.',
    },
    {
      moyen: 'Générique = Bioéquivalent, pas Identique',
      explication:
        'Rappelle que seuls le principe actif, le dosage et la forme sont identiques ; les excipients peuvent varier.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-medicament-definitions-fc-01',
      recto: 'Quels sont les deux critères alternatifs de la définition légale du médicament ?',
      verso: 'Le critère de présentation et le critère de fonction : un seul des deux suffit à qualifier un produit de médicament.',
      type: 'definition',
      tags: ['définition légale'],
    },
    {
      id: 'ue6-medicament-definitions-fc-02',
      recto: 'Qu’est-ce qu’un excipient ?',
      verso: 'Une substance sans activité pharmacologique propre, nécessaire à la fabrication, la stabilité ou l’administration du médicament.',
      type: 'definition',
      tags: ['composition'],
    },
    {
      id: 'ue6-medicament-definitions-fc-03',
      recto: 'Que signifie DCI ?',
      verso: 'Dénomination commune internationale : nom scientifique international attribué à un principe actif par l’Organisation mondiale de la santé.',
      type: 'definition',
      tags: ['DCI'],
    },
    {
      id: 'ue6-medicament-definitions-fc-04',
      recto: 'Que doit démontrer un médicament générique pour être commercialisé ?',
      verso: 'Sa bioéquivalence avec la spécialité de référence, par des études appropriées de biodisponibilité.',
      type: 'definition',
      tags: ['générique'],
    },
    {
      id: 'ue6-medicament-definitions-fc-05',
      recto: 'Le générique a-t-il exactement les mêmes excipients que la spécialité de référence ?',
      verso: 'Non, seuls le principe actif, le dosage et la forme pharmaceutique doivent être identiques ; les excipients peuvent différer.',
      type: 'definition',
      tags: ['générique'],
    },
    {
      id: 'ue6-medicament-definitions-fc-06',
      recto: 'Qu’est-ce qu’un excipient à effet notoire ?',
      verso: 'Un excipient susceptible de provoquer des effets indésirables ou des interactions chez certains patients, devant être mentionné sur la notice.',
      type: 'clinique',
      tags: ['excipient'],
    },
    {
      id: 'ue6-medicament-definitions-fc-07',
      recto: 'Que délivre l’AMM ?',
      verso: 'L’autorisation de commercialiser un médicament, sur la base d’un dossier de qualité, d’efficacité et de sécurité.',
      type: 'definition',
      tags: ['AMM'],
    },
    {
      id: 'ue6-medicament-definitions-fc-08',
      recto: 'Quel organisme délivre les AMM nationales en France ?',
      verso: 'L’agence nationale de sécurité du médicament et des produits de santé.',
      type: 'definition',
      tags: ['AMM', 'réglementation'],
    },
    {
      id: 'ue6-medicament-definitions-fc-09',
      recto: 'Que risque-t-on à écraser un comprimé à libération prolongée ?',
      verso: 'Un relargage brutal du principe actif, exposant à un surdosage ou à une toxicité digestive.',
      type: 'clinique',
      tags: ['formes galéniques'],
    },
    {
      id: 'ue6-medicament-definitions-fc-10',
      recto: 'Pourquoi préfère-t-on la DCI au nom de spécialité en enseignement ?',
      verso: 'Parce qu’elle identifie sans ambiguïté le principe actif, indépendamment des multiples noms commerciaux.',
      type: 'mecanisme',
      tags: ['DCI'],
    },
    {
      id: 'ue6-medicament-definitions-fc-11',
      recto: 'Donner un exemple de radical de DCI évoquant les bêta-bloquants.',
      verso: 'Le suffixe -olol, comme dans propranolol.',
      type: 'classification',
      tags: ['DCI'],
    },
    {
      id: 'ue6-medicament-definitions-fc-12',
      recto: 'Qu’est-ce qu’une spécialité pharmaceutique ?',
      verso: 'Un médicament préparé à l’avance, sous conditionnement particulier, avec une dénomination, un dosage et une forme déterminés, ayant obtenu une AMM.',
      type: 'definition',
      tags: ['spécialité'],
    },
  ],
  qcm: [
    {
      id: 'ue6-medicament-definitions-qcm-01',
      enonce: 'Concernant la définition légale du médicament, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les critères de présentation et de fonction doivent être remplis simultanément.', vraie: false, justification: 'Les deux critères sont alternatifs : un seul suffit à qualifier un produit de médicament.' },
        { lettre: 'B', texte: 'Un produit annoncé comme ayant une vertu curative sans preuve d’efficacité peut être qualifié de médicament par présentation.', vraie: true, justification: 'Le critère de présentation ne dépend pas de l’efficacité réelle démontrée.' },
        { lettre: 'C', texte: 'Un produit peut être qualifié de médicament par sa fonction sans revendiquer explicitement une vertu thérapeutique.', vraie: true, justification: 'Le critère de fonction porte sur l’action pharmacologique réelle, indépendamment de toute allégation.' },
        { lettre: 'D', texte: 'Cette définition figure dans le code de la santé publique.', vraie: true, justification: 'C’est effectivement dans ce code que la définition légale du médicament est fixée en France.' },
        { lettre: 'E', texte: 'Un cosmétique ne peut jamais relever de la réglementation du médicament.', vraie: false, justification: 'Un produit présenté ou fonctionnant comme un médicament peut relever de cette réglementation même s’il est commercialisé comme cosmétique.' },
      ],
      correction: 'Réponses exactes : B, C et D. Retenir le caractère alternatif, non cumulatif, des deux critères.',
      difficulte: 1,
    },
    {
      id: 'ue6-medicament-definitions-qcm-02',
      enonce: 'Concernant les excipients, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ils portent l’effet pharmacologique recherché.', vraie: false, justification: 'C’est le principe actif qui porte l’effet pharmacologique, pas l’excipient.' },
        { lettre: 'B', texte: 'Ils peuvent influencer la biodisponibilité du principe actif.', vraie: true, justification: 'La formulation, dont les excipients, module l’absorption et la biodisponibilité du principe actif.' },
        { lettre: 'C', texte: 'Certains excipients doivent être mentionnés sur la notice en raison d’un risque propre.', vraie: true, justification: 'Ce sont les excipients à effet notoire, comme le lactose chez les patients intolérants.' },
        { lettre: 'D', texte: 'Le stéarate de magnésium est un exemple de lubrifiant utilisé en fabrication.', vraie: true, justification: 'Il facilite le démoulage du comprimé lors de la compression.' },
        { lettre: 'E', texte: 'Un médicament ne peut contenir qu’un seul excipient.', vraie: false, justification: 'Un médicament contient généralement plusieurs excipients remplissant des fonctions différentes.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 1,
    },
    {
      id: 'ue6-medicament-definitions-qcm-03',
      enonce: 'Concernant la dénomination commune internationale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est attribuée par l’Organisation mondiale de la santé.', vraie: true, justification: 'C’est effectivement cette organisation qui attribue les DCI.' },
        { lettre: 'B', texte: 'Elle désigne le nom commercial du médicament.', vraie: false, justification: 'La DCI désigne le principe actif, pas le nom commercial de la spécialité.' },
        { lettre: 'C', texte: 'Le radical -pril évoque les inhibiteurs de l’enzyme de conversion.', vraie: true, justification: 'C’est un radical commun typique de cette classe, comme dans énalapril.' },
        { lettre: 'D', texte: 'Un même principe actif peut correspondre à plusieurs DCI selon les fabricants.', vraie: false, justification: 'La DCI est unique pour un principe actif donné ; ce sont les noms de spécialité qui varient.' },
        { lettre: 'E', texte: 'L’usage de la DCI facilite la substitution générique.', vraie: true, justification: 'Elle identifie sans ambiguïté le principe actif, facilitant la reconnaissance du groupe générique.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue6-medicament-definitions-qcm-04',
      enonce: 'Concernant le médicament générique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il doit avoir la même composition qualitative et quantitative en principe actif que la référence.', vraie: true, justification: 'C’est une des conditions de définition du générique.' },
        { lettre: 'B', texte: 'Il doit avoir la même forme pharmaceutique que la référence.', vraie: true, justification: 'C’est également une condition de définition du générique.' },
        { lettre: 'C', texte: 'Sa couleur et sa forme extérieure doivent être identiques à celles de la référence.', vraie: false, justification: 'La couleur et l’aspect extérieur peuvent différer, seuls le principe actif, le dosage et la forme pharmaceutique sont contraints.' },
        { lettre: 'D', texte: 'Sa bioéquivalence avec la référence doit être démontrée.', vraie: true, justification: 'La bioéquivalence est établie par des études de biodisponibilité comparée.' },
        { lettre: 'E', texte: 'Il peut être commercialisé avant l’expiration du brevet de la spécialité de référence.', vraie: false, justification: 'La commercialisation du générique n’est possible qu’après expiration du brevet protégeant la référence.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-medicament-definitions-qcm-05',
      enonce: 'Concernant les formes galéniques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La forme galénique conditionne la voie d’administration possible.', vraie: true, justification: 'Chaque forme galénique est conçue pour une ou plusieurs voies d’administration déterminées.' },
        { lettre: 'B', texte: 'Une forme gastro-résistante peut protéger le principe actif de l’acidité gastrique.', vraie: true, justification: 'C’est l’une des fonctions de ce type de forme galénique.' },
        { lettre: 'C', texte: 'Une forme à libération prolongée peut être écrasée sans conséquence pharmacologique.', vraie: false, justification: 'Écraser une telle forme détruit le mécanisme de libération contrôlée et peut provoquer un surdosage.' },
        { lettre: 'D', texte: 'Le patch transdermique est une forme galénique adaptée à la voie orale.', vraie: false, justification: 'Le patch transdermique est adapté à la voie transdermique, pas à la voie orale.' },
        { lettre: 'E', texte: 'Les formes à libération prolongée réduisent le nombre de prises quotidiennes.', vraie: true, justification: 'En étalant la libération du principe actif, elles permettent d’espacer les prises.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 1,
    },
    {
      id: 'ue6-medicament-definitions-qcm-06',
      enonce: 'Concernant l’autorisation de mise sur le marché, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est indispensable à la commercialisation légale d’un médicament, sauf dispositifs dérogatoires encadrés.', vraie: true, justification: 'C’est le principe général, avec des exceptions encadrées comme l’autorisation temporaire d’utilisation.' },
        { lettre: 'B', texte: 'Elle fixe notamment les indications thérapeutiques et les contre-indications.', vraie: true, justification: 'Ces éléments figurent dans le résumé des caractéristiques du produit annexé à l’AMM.' },
        { lettre: 'C', texte: 'Elle est délivrée uniquement au niveau national en France.', vraie: false, justification: 'Certaines AMM sont délivrées au niveau européen par l’Agence européenne des médicaments, via la procédure centralisée.' },
        { lettre: 'D', texte: 'La prescription hors AMM est toujours interdite.', vraie: false, justification: 'Elle est possible dans certaines situations cliniques justifiées, sous la responsabilité du prescripteur.' },
        { lettre: 'E', texte: 'Elle repose sur un dossier démontrant qualité, efficacité et sécurité.', vraie: true, justification: 'Ce sont les trois piliers de l’évaluation menant à l’octroi de l’AMM.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
  ],
};
