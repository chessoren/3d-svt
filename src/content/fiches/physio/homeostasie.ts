import type { Fiche } from '../../types';

export const ficheHomeostasie: Fiche = {
  id: 'physio-homeostasie',
  ue: 'physio',
  titre: 'Homéostasie et milieu intérieur',
  sousTitre: 'Compartiments liquidiens, composition ionique et boucles de régulation',
  chapitre: 'Bases',
  ordre: 1,
  duree: 22,
  difficulte: 1,
  motsCles: [
    'homéostasie',
    'milieu intérieur',
    'compartiments liquidiens',
    'osmolarité',
    'rétrocontrôle négatif',
    'rétrocontrôle positif',
    'consigne',
    'secteur extracellulaire',
  ],
  objectifs: [
    "Définir l’homéostasie et le milieu intérieur selon Claude Bernard et Walter Cannon.",
    'Décrire les compartiments liquidiens de l’organisme et leur volume approximatif.',
    "Comparer la composition ionique du secteur intracellulaire et du secteur extracellulaire.",
    'Expliquer le principe général d’une boucle de régulation à rétrocontrôle négatif.',
    'Distinguer rétrocontrôle négatif et rétrocontrôle positif à l’aide d’exemples physiologiques.',
  ],
  sections: [
    {
      id: 'definitions',
      titre: 'Homéostasie et milieu intérieur',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Claude Bernard a introduit au dix-neuvième siècle la notion de milieu intérieur : l’ensemble des liquides extracellulaires qui baignent les cellules de l’organisme et constituent leur environnement immédiat. Sa célèbre formule, « la fixité du milieu intérieur est la condition d’une vie libre et indépendante », souligne que la stabilité de ce milieu permet aux cellules de fonctionner indépendamment des variations de l’environnement externe.",
        },
        {
          type: 'definition',
          terme: 'Homéostasie',
          definition:
            "Terme introduit par Walter Cannon pour désigner l’ensemble des processus physiologiques actifs qui maintiennent les paramètres du milieu intérieur (température, pH, glycémie, volémie, concentrations ioniques) dans des limites étroites compatibles avec la vie, malgré les variations de l’environnement et de l’activité de l’organisme.",
        },
        {
          type: 'liste',
          items: [
            "L’homéostasie n’est pas un état statique mais un équilibre dynamique, obtenu par l’ajustement permanent de systèmes effecteurs en réponse à des perturbations.",
            'Elle repose sur la coordination de trois grands systèmes de régulation : le système nerveux (rapide), le système endocrinien (plus lent mais durable) et le système immunitaire.',
            "Chaque paramètre régulé possède une valeur de consigne autour de laquelle il oscille, ainsi qu’une marge de tolérance physiologique.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Milieu intérieur et milieu extérieur',
          texte:
            "Le milieu extérieur est l’environnement avec lequel l’organisme échange matière et énergie (air inspiré, aliments, chaleur). Le milieu intérieur est l’interface interne entre ce milieu extérieur, via les épithéliums d’échange, et le milieu intracellulaire, où se déroule le métabolisme cellulaire.",
        },
      ],
    },
    {
      id: 'compartiments',
      titre: 'Compartiments liquidiens de l’organisme',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’eau représente environ 60 % du poids corporel chez l’adulte jeune de sexe masculin, un peu moins chez la femme du fait d’une masse grasse plus importante, moins hydratée que la masse maigre. Cette eau totale se répartit entre deux grands secteurs séparés par la membrane plasmique.",
        },
        {
          type: 'tableau',
          titre: 'Répartition de l’eau corporelle totale (homme adulte, 70 kg)',
          colonnes: ['Compartiment', 'Proportion du poids corporel', 'Volume approximatif', 'Sous-compartiments'],
          lignes: [
            ['Eau corporelle totale', 'environ 60 %', 'environ 42 L', 'Secteur intracellulaire et extracellulaire'],
            ['Secteur intracellulaire', 'environ 40 %', 'environ 28 L', '—'],
            ['Secteur extracellulaire', 'environ 20 %', 'environ 14 L', 'Plasma et interstitiel'],
            ['Plasma', 'environ 5 %', 'environ 3 L', 'Compartiment intravasculaire'],
            ['Liquide interstitiel', 'environ 15 %', 'environ 11 L', 'Baigne directement les cellules'],
          ],
        },
        {
          type: 'liste',
          items: [
            "Le plasma et le liquide interstitiel ont une composition ionique très voisine car ils sont séparés par l’endothélium capillaire, librement perméable à l’eau et aux petits ions.",
            "Le plasma se distingue de l’interstitium par sa richesse en protéines, trop volumineuses pour franchir l’endothélium : ces protéines créent la pression oncotique.",
            "Le volume sanguin total est supérieur au volume plasmatique car il comprend en plus le volume occupé par les éléments figurés du sang (hématocrite).",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la répartition 60-40-20',
          texte:
            "Règle simple : 60 % du poids du corps est de l’eau, dont les deux tiers (soit 40 % du poids corporel) sont intracellulaires et un tiers (soit 20 % du poids corporel) extracellulaires. Le plasma représente environ un quart du secteur extracellulaire.",
        },
      ],
    },
    {
      id: 'composition-ionique',
      titre: 'Composition ionique des compartiments',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La composition ionique du secteur intracellulaire diffère radicalement de celle du secteur extracellulaire, cette différence étant maintenue activement par des pompes membranaires, au premier rang desquelles la pompe Na+/K+-ATPase.",
        },
        {
          type: 'tableau',
          titre: 'Principaux ions et leur répartition',
          colonnes: ['Ion', 'Concentration extracellulaire', 'Concentration intracellulaire', 'Statut'],
          lignes: [
            ['Sodium (Na+)', 'environ 140 mmol/L', 'environ 10-14 mmol/L', 'Principal cation extracellulaire'],
            ['Potassium (K+)', 'environ 4 à 5 mmol/L', 'environ 140 mmol/L', 'Principal cation intracellulaire'],
            ['Calcium ionisé (Ca2+)', 'environ 1,1 à 1,3 mmol/L', 'très faible (de l’ordre de 10^-7 mol/L)', 'Gradient considérable, second messager'],
            ['Chlore (Cl-)', 'environ 100 à 106 mmol/L', 'faible (environ 4 mmol/L dans le muscle)', 'Principal anion extracellulaire'],
            ['Protéines (charges négatives)', 'faibles hors plasma', 'élevées', 'Anions non diffusibles intracellulaires'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Osmolarité plasmatique',
          texte:
            "L’osmolarité plasmatique normale se situe entre 275 et 295 mOsm/L, avec une valeur usuelle proche de 285 mOsm/L. Elle est identique dans tous les compartiments à l’équilibre car l’eau traverse librement les membranes cellulaires jusqu’à égalisation des osmolarités.",
        },
        {
          type: 'formule',
          expression: 'Osmolarité plasmatique calculée ≈ 2 × [Na+] + glycémie (mmol/L) + urée (mmol/L)',
          legende:
            "Formule d’estimation la plus utilisée en pratique. Le sodium, avec son anion associé, domine très largement l’osmolarité extracellulaire, ce qui explique le rôle central du sodium dans la régulation de la volémie.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre osmolarité et concentration ionique',
          texte:
            "Le potassium est plus concentré à l’intérieur de la cellule mais ne domine pas l’osmolarité globale de ce compartiment : celle-ci résulte de la somme de toutes les particules osmotiquement actives, ions et protéines compris, et reste égale de part et d’autre de la membrane à l’état stationnaire.",
        },
      ],
    },
    {
      id: 'boucles-regulation',
      titre: 'Principe général d’une boucle de régulation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Toute boucle de régulation homéostatique repose sur trois éléments fonctionnels organisés en circuit fermé : un capteur qui mesure la valeur du paramètre régulé, un centre intégrateur qui compare cette valeur à la consigne, et un ou plusieurs effecteurs qui modifient le paramètre pour le ramener vers la consigne.",
        },
        {
          type: 'etapes',
          titre: 'Déroulement d’une boucle de rétrocontrôle négatif',
          etapes: [
            {
              titre: 'Détection de l’écart',
              detail:
                "Un capteur spécialisé (récepteur sensoriel, chimiorécepteur, osmorécepteur) mesure en continu la valeur du paramètre et détecte tout écart par rapport à la consigne.",
            },
            {
              titre: 'Intégration',
              detail:
                "L’information est transmise à un centre intégrateur (hypothalamus, tronc cérébral, ou centre endocrinien) qui compare la valeur mesurée à la valeur de consigne et calcule l’amplitude de la réponse nécessaire.",
            },
            {
              titre: 'Réponse effectrice',
              detail:
                "Le centre commande un ou plusieurs effecteurs (muscle, glande, épithélium de transport) dont l’action s’oppose à la perturbation initiale et ramène le paramètre vers sa consigne.",
            },
            {
              titre: 'Extinction du signal',
              detail:
                "Lorsque le paramètre revient à sa valeur de consigne, l’écart détecté par le capteur diminue, ce qui réduit progressivement l’activation des effecteurs : c’est l’essence même du rétrocontrôle négatif, qui s’auto-limite.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Valeur de consigne (set point)',
          definition:
            "Valeur de référence autour de laquelle un paramètre physiologique est maintenu par le système de régulation. Elle peut être fixe (température corporelle centrale, environ 37 °C) ou modulée dans certaines circonstances (élévation de la consigne thermique au cours de la fièvre).",
        },
      ],
    },
    {
      id: 'retrocontroles',
      titre: 'Rétrocontrôle négatif et rétrocontrôle positif',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Comparer les deux types de rétrocontrôle',
          gauche: {
            titre: 'Rétrocontrôle négatif',
            points: [
              'La réponse s’oppose à la perturbation initiale.',
              'Le système tend vers un état stable, la consigne.',
              'Mécanisme très majoritaire en physiologie.',
              'Exemples : thermorégulation, régulation de la glycémie, du pH, de la pression artérielle.',
            ],
          },
          droite: {
            titre: 'Rétrocontrôle positif',
            points: [
              'La réponse amplifie la perturbation initiale.',
              'Le système s’éloigne de l’état initial jusqu’à un événement terminal qui interrompt la boucle.',
              'Mécanisme rare, réservé à des processus qui doivent aboutir rapidement à un terme précis.',
              'Exemples : dépolarisation du potentiel d’action, pic de LH ovulatoire, cascade de la coagulation, contractions utérines de l’accouchement via l’ocytocine.',
            ],
          },
        },
        {
          type: 'paragraphe',
          texte:
            "Le rétrocontrôle positif n’est pas pathologique en soi : il correspond à des processus physiologiques qui doivent se dérouler vite et jusqu’à leur terme, contrairement au rétrocontrôle négatif qui vise le maintien prolongé d’un état stable. Un rétrocontrôle positif non contrôlé par un mécanisme d’arrêt externe conduirait cependant à un emballement délétère du système.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Piège classique en QCM',
          texte:
            "Ne pas confondre le sens de la boucle avec le sens de variation du paramètre. Dans le rétrocontrôle négatif, l’effecteur agit toujours en sens opposé à la perturbation, que celle-ci soit une augmentation ou une diminution du paramètre régulé. Une hypoglycémie déclenche la sécrétion de glucagon, qui augmente la glycémie : c’est bien un rétrocontrôle négatif, même si l’action se traduit par une hausse.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple intégré : la régulation de la pression artérielle',
          texte:
            "Une baisse de pression artérielle est détectée par les barorécepteurs du sinus carotidien et de la crosse aortique. Le centre bulbaire intègre cette information et augmente l’activité sympathique, ce qui accroît la fréquence cardiaque, la contractilité et les résistances vasculaires périphériques : la pression artérielle remonte vers sa consigne, ce qui réduit en retour l’activation des effecteurs. Ce baroréflexe illustre parfaitement une boucle de rétrocontrôle négatif à réponse rapide.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’homéostasie désigne le maintien actif et dynamique des paramètres du milieu intérieur dans des limites physiologiques étroites.",
    "L’eau corporelle totale représente environ 60 % du poids du corps, répartie pour deux tiers en intracellulaire et un tiers en extracellulaire.",
    'Le sodium est le principal cation extracellulaire, le potassium le principal cation intracellulaire ; ce gradient est entretenu par la pompe Na+/K+-ATPase.',
    "L’osmolarité plasmatique normale est comprise entre 275 et 295 mOsm/L et reste identique entre les compartiments à l’équilibre.",
    'Une boucle de régulation comporte un capteur, un centre intégrateur et un effecteur agissant en circuit fermé autour d’une valeur de consigne.',
    "Le rétrocontrôle négatif, très majoritaire, ramène le paramètre vers sa consigne et s’auto-limite.",
    "Le rétrocontrôle positif amplifie la perturbation jusqu’à un terme précis qui interrompt la boucle : potentiel d’action, pic de LH, coagulation, accouchement.",
    "Plasma et liquide interstitiel ont une composition ionique proche mais diffèrent par la concentration en protéines.",
  ],
  erreursFrequentes: [
    "Confondre milieu intérieur et milieu intracellulaire : le milieu intérieur est le liquide extracellulaire, l’interface entre milieu externe et cellules.",
    "Penser que le rétrocontrôle négatif s’oppose toujours à une hausse : il s’oppose à tout écart par rapport à la consigne, qu’il soit une hausse ou une baisse.",
    "Croire que le potassium domine l’osmolarité intracellulaire à lui seul : les protéines et d’autres solutés y contribuent aussi.",
    "Oublier que le volume sanguin total inclut les éléments figurés et n’est donc pas égal au volume plasmatique.",
    "Considérer le rétrocontrôle positif comme systématiquement pathologique, alors qu’il correspond à des processus physiologiques normaux à déroulement rapide.",
    "Mélanger consigne fixe et consigne modulable : la fièvre correspond à une élévation transitoire de la consigne thermique hypothalamique, non à un simple dérèglement.",
  ],
  mnemotechniques: [
    {
      moyen: '« 60-40-20 »',
      explication:
        "L’eau corporelle totale représente 60 % du poids du corps ; le secteur intracellulaire 40 % ; le secteur extracellulaire 20 %.",
    },
    {
      moyen: '« Na dehors, K dedans »',
      explication:
        'Le sodium est le principal cation extracellulaire, le potassium le principal cation intracellulaire : un gradient opposé maintenu par la pompe Na+/K+-ATPase.',
    },
    {
      moyen: '« CIC : Capteur, Intégrateur, Contrôle »',
      explication:
        'Les trois maillons de toute boucle de régulation : capteur, centre intégrateur, effecteur de contrôle.',
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
      id: 'physio-homeostasie-fc-01',
      recto: "Qui a introduit la notion de milieu intérieur ?",
      verso: 'Claude Bernard, au dix-neuvième siècle : la fixité du milieu intérieur est la condition d’une vie libre et indépendante.',
      type: 'definition',
      tags: ['milieu intérieur', 'histoire'],
    },
    {
      id: 'physio-homeostasie-fc-02',
      recto: "Qui a introduit le terme d’homéostasie ?",
      verso: 'Walter Cannon, pour désigner les processus actifs qui maintiennent la stabilité du milieu intérieur.',
      type: 'definition',
      tags: ['homéostasie', 'histoire'],
    },
    {
      id: 'physio-homeostasie-fc-03',
      recto: "Quelle proportion du poids corporel représente l’eau totale chez l’adulte ?",
      verso: 'Environ 60 %, avec une valeur un peu plus basse chez la femme du fait d’une masse grasse plus importante.',
      type: 'chiffre',
      tags: ['compartiments', 'eau corporelle'],
    },
    {
      id: 'physio-homeostasie-fc-04',
      recto: "Comment se répartit l’eau corporelle totale entre secteurs intra et extracellulaire ?",
      verso: 'Environ deux tiers en intracellulaire (40 % du poids corporel) et un tiers en extracellulaire (20 % du poids corporel).',
      type: 'chiffre',
      tags: ['compartiments'],
    },
    {
      id: 'physio-homeostasie-fc-05',
      recto: "Quel est le principal cation du secteur extracellulaire ? Et du secteur intracellulaire ?",
      verso: 'Le sodium (Na+) en extracellulaire, environ 140 mmol/L ; le potassium (K+) en intracellulaire, environ 140 mmol/L.',
      type: 'chiffre',
      tags: ['ions', 'sodium', 'potassium'],
    },
    {
      id: 'physio-homeostasie-fc-06',
      recto: "Quelle est la valeur usuelle de l’osmolarité plasmatique ?",
      verso: 'Entre 275 et 295 mOsm/L, avec une valeur moyenne proche de 285 mOsm/L.',
      type: 'chiffre',
      tags: ['osmolarité'],
    },
    {
      id: 'physio-homeostasie-fc-07',
      recto: "Quels sont les trois éléments constitutifs d’une boucle de régulation ?",
      verso: 'Un capteur, un centre intégrateur, et un effecteur, organisés en circuit fermé autour d’une valeur de consigne.',
      type: 'mecanisme',
      tags: ['régulation', 'boucle'],
    },
    {
      id: 'physio-homeostasie-fc-08',
      recto: "Que signifie un rétrocontrôle négatif ?",
      verso: 'La réponse effectrice s’oppose à la perturbation initiale et ramène le paramètre vers sa valeur de consigne.',
      type: 'definition',
      tags: ['rétrocontrôle'],
    },
    {
      id: 'physio-homeostasie-fc-09',
      recto: "Citer trois exemples physiologiques de rétrocontrôle positif.",
      verso: 'La phase ascendante du potentiel d’action, le pic de LH ovulatoire, et les contractions utérines médiées par l’ocytocine lors de l’accouchement.',
      type: 'classification',
      tags: ['rétrocontrôle positif'],
    },
    {
      id: 'physio-homeostasie-fc-10',
      recto: "Quelle pompe membranaire maintient le gradient Na+/K+ entre les compartiments ?",
      verso: 'La pompe Na+/K+-ATPase, qui expulse trois ions Na+ et fait entrer deux ions K+ par molécule d’ATP hydrolysée.',
      type: 'mecanisme',
      tags: ['pompe', 'Na+/K+-ATPase'],
    },
    {
      id: 'physio-homeostasie-fc-11',
      recto: "Pourquoi le plasma diffère-t-il du liquide interstitiel en composition ?",
      verso: 'Le plasma contient une concentration élevée de protéines, trop volumineuses pour franchir l’endothélium capillaire, à l’origine de la pression oncotique.',
      type: 'mecanisme',
      tags: ['plasma', 'interstitiel'],
    },
    {
      id: 'physio-homeostasie-fc-12',
      recto: "Donner la formule usuelle d’estimation de l’osmolarité plasmatique.",
      verso: 'Osmolarité ≈ 2 × [Na+] + glycémie (mmol/L) + urée (mmol/L).',
      type: 'formule',
      tags: ['osmolarité', 'formule'],
    },
  ],
  qcm: [
    {
      id: 'physio-homeostasie-qcm-01',
      enonce: "Concernant l’homéostasie et le milieu intérieur, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le milieu intérieur correspond au liquide intracellulaire.',
          vraie: false,
          justification: "Faux : le milieu intérieur, selon Claude Bernard, est le liquide extracellulaire qui baigne les cellules.",
        },
        {
          lettre: 'B',
          texte: "L’homéostasie est un état parfaitement statique.",
          vraie: false,
          justification: 'Faux : c’est un équilibre dynamique, résultat d’ajustements permanents des systèmes effecteurs.',
        },
        {
          lettre: 'C',
          texte: 'Walter Cannon a introduit le terme d’homéostasie.',
          vraie: true,
          justification: "Exact : Cannon a formalisé au vingtième siècle les mécanismes actifs de stabilisation décrits par Claude Bernard.",
        },
        {
          lettre: 'D',
          texte: "Chaque paramètre régulé possède une valeur de consigne et une marge de tolérance.",
          vraie: true,
          justification: 'Exact : c’est la base du fonctionnement de toute boucle de régulation homéostatique.',
        },
        {
          lettre: 'E',
          texte: "Le système immunitaire ne participe jamais à l’homéostasie.",
          vraie: false,
          justification: "Faux : le système immunitaire est l’un des trois grands systèmes de régulation, avec le système nerveux et le système endocrinien.",
        },
      ],
      correction: 'Réponses exactes : C et D. L’homéostasie est un équilibre dynamique maintenu par plusieurs systèmes coordonnés.',
      difficulte: 1,
    },
    {
      id: 'physio-homeostasie-qcm-02',
      enonce: "Concernant les compartiments liquidiens de l’organisme, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: "L’eau corporelle totale représente environ 60 % du poids corporel chez l’adulte jeune.",
          vraie: true,
          justification: 'Exact, avec une valeur légèrement inférieure chez la femme en raison d’une masse grasse plus élevée.',
        },
        {
          lettre: 'B',
          texte: 'Le secteur intracellulaire représente environ 20 % du poids corporel.',
          vraie: false,
          justification: 'Faux : le secteur intracellulaire représente environ 40 % du poids corporel, le secteur extracellulaire environ 20 %.',
        },
        {
          lettre: 'C',
          texte: 'Le volume sanguin total est égal au volume plasmatique.',
          vraie: false,
          justification: 'Faux : le volume sanguin comprend en plus les éléments figurés du sang, mesurés par l’hématocrite.',
        },
        {
          lettre: 'D',
          texte: 'Le plasma et le liquide interstitiel ont une composition ionique très voisine.',
          vraie: true,
          justification: "Exact : ils sont séparés par l’endothélium capillaire, librement perméable à l’eau et aux petits ions.",
        },
        {
          lettre: 'E',
          texte: 'Le liquide interstitiel représente une fraction plus importante du poids corporel que le plasma.',
          vraie: true,
          justification: 'Exact : environ 15 % du poids corporel pour l’interstitiel contre environ 5 % pour le plasma.',
        },
      ],
      correction: 'Réponses exactes : A, D et E. Retenir la répartition 60-40-20 et la proportion plasma/interstitiel au sein de l’extracellulaire.',
      difficulte: 2,
    },
    {
      id: 'physio-homeostasie-qcm-03',
      enonce: "Concernant la composition ionique des compartiments, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le sodium est le principal cation intracellulaire.',
          vraie: false,
          justification: 'Faux : le sodium est le principal cation extracellulaire ; le potassium domine en intracellulaire.',
        },
        {
          lettre: 'B',
          texte: 'La concentration extracellulaire de potassium est physiologiquement voisine de 4 à 5 mmol/L.',
          vraie: true,
          justification: 'Exact : cette valeur est étroitement régulée, un écart important ayant des conséquences cardiaques majeures.',
        },
        {
          lettre: 'C',
          texte: 'Le chlore est le principal anion extracellulaire.',
          vraie: true,
          justification: 'Exact : le chlore accompagne le sodium comme principal anion du secteur extracellulaire.',
        },
        {
          lettre: 'D',
          texte: "L’osmolarité intracellulaire est très différente de l’osmolarité extracellulaire à l’équilibre.",
          vraie: false,
          justification: "Faux : l’eau traverse librement la membrane cellulaire, ce qui égalise les osmolarités des deux compartiments à l’état stationnaire.",
        },
        {
          lettre: 'E',
          texte: 'Le calcium ionisé intracellulaire libre est très inférieur au calcium ionisé extracellulaire.',
          vraie: true,
          justification: 'Exact : le gradient de calcium est considérable, ce qui en fait un second messager intracellulaire efficace.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Le sodium et le potassium sont répartis en miroir entre les deux secteurs.',
      difficulte: 2,
    },
    {
      id: 'physio-homeostasie-qcm-04',
      enonce: "Concernant le principe général d’une boucle de régulation, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le capteur compare la valeur mesurée à la valeur de consigne.',
          vraie: false,
          justification: 'Faux : c’est le rôle du centre intégrateur ; le capteur se contente de mesurer le paramètre.',
        },
        {
          lettre: 'B',
          texte: "L’effecteur agit pour ramener le paramètre vers la consigne dans un rétrocontrôle négatif.",
          vraie: true,
          justification: 'Exact : c’est la définition même du rétrocontrôle négatif.',
        },
        {
          lettre: 'C',
          texte: 'La valeur de consigne est toujours strictement fixe et ne peut jamais être modulée.',
          vraie: false,
          justification: 'Faux : la consigne thermique hypothalamique peut par exemple être relevée transitoirement au cours de la fièvre.',
        },
        {
          lettre: 'D',
          texte: 'Une boucle de rétrocontrôle négatif tend à s’auto-limiter.',
          vraie: true,
          justification: "Exact : à mesure que le paramètre se rapproche de la consigne, l’écart détecté diminue et l’activation des effecteurs se réduit.",
        },
        {
          lettre: 'E',
          texte: 'Le centre intégrateur est toujours de nature exclusivement nerveuse.',
          vraie: false,
          justification: 'Faux : il peut aussi être de nature endocrinienne, comme dans les axes hormonaux hypothalamo-hypophysaires.',
        },
      ],
      correction: 'Réponses exactes : B et D. Le triptyque capteur-intégrateur-effecteur structure toute boucle de régulation.',
      difficulte: 2,
    },
    {
      id: 'physio-homeostasie-qcm-05',
      enonce: "Concernant le rétrocontrôle positif, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La réponse effectrice amplifie la perturbation initiale.',
          vraie: true,
          justification: 'Exact : c’est la définition du rétrocontrôle positif, à l’opposé du rétrocontrôle négatif.',
        },
        {
          lettre: 'B',
          texte: 'Il est systématiquement pathologique.',
          vraie: false,
          justification: "Faux : il correspond à des processus physiologiques normaux à déroulement rapide et à terme défini, comme le potentiel d’action.",
        },
        {
          lettre: 'C',
          texte: 'Le pic de LH précédant l’ovulation en est un exemple.',
          vraie: true,
          justification: "Exact : l’élévation des œstrogènes stimule la sécrétion de LH, qui à son tour amplifie encore la réponse jusqu’au pic ovulatoire.",
        },
        {
          lettre: 'D',
          texte: 'Il est le mécanisme le plus fréquent en physiologie humaine.',
          vraie: false,
          justification: 'Faux : le rétrocontrôle négatif est très largement majoritaire ; le rétrocontrôle positif reste réservé à des processus particuliers.',
        },
        {
          lettre: 'E',
          texte: 'Il nécessite un événement terminal pour interrompre la boucle.',
          vraie: true,
          justification: "Exact : sans mécanisme d’arrêt, la boucle positive s’emballerait indéfiniment, ce qui serait délétère.",
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le rétrocontrôle positif reste rare et toujours borné par un événement terminal.',
      difficulte: 2,
    },
    {
      id: 'physio-homeostasie-qcm-06',
      enonce: "Concernant la régulation de la pression artérielle par le baroréflexe, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Les barorécepteurs sont situés notamment au niveau du sinus carotidien.',
          vraie: true,
          justification: 'Exact, ainsi qu’au niveau de la crosse aortique.',
        },
        {
          lettre: 'B',
          texte: 'Une baisse de pression artérielle diminue l’activité sympathique.',
          vraie: false,
          justification: "Faux : une baisse de pression diminue l’étirement des barorécepteurs, ce qui réduit leur inhibition du centre bulbaire et augmente au contraire l’activité sympathique.",
        },
        {
          lettre: 'C',
          texte: 'Le baroréflexe est un exemple de rétrocontrôle négatif.',
          vraie: true,
          justification: "Exact : la réponse effectrice (augmentation de fréquence cardiaque et de résistances) s’oppose à la baisse initiale de pression.",
        },
        {
          lettre: 'D',
          texte: 'Le centre intégrateur du baroréflexe se situe dans le bulbe rachidien.',
          vraie: true,
          justification: 'Exact : le centre cardiovasculaire bulbaire intègre les afférences barosensibles.',
        },
        {
          lettre: 'E',
          texte: 'Ce réflexe est un mécanisme de régulation lente, agissant sur plusieurs jours.',
          vraie: false,
          justification: "Faux : le baroréflexe est un mécanisme nerveux rapide, agissant en quelques secondes, à la différence de régulations hormonales plus lentes comme le système rénine-angiotensine-aldostérone.",
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le baroréflexe illustre une boucle de rétrocontrôle négatif rapide, à médiation nerveuse.',
      difficulte: 2,
    },
  ],
};
