import type { Fiche } from '../../types';

export const fichePhysiologieDigestive: Fiche = {
  id: 'physio-physiologie-digestive',
  ue: 'physio',
  titre: 'Physiologie digestive',
  sousTitre: 'Motricité, sécrétions et digestion des nutriments',
  chapitre: 'Digestif et endocrinien',
  ordre: 10,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'motricité digestive',
    'sécrétion gastrique',
    'sécrétion pancréatique',
    'bile',
    'digestion',
    'absorption',
    'régulation hormonale digestive',
    'système nerveux entérique',
  ],
  objectifs: [
    'Décrire les principales sécrétions digestives et leurs rôles respectifs.',
    'Expliquer les mécanismes de la motricité gastrique et intestinale.',
    'Décrire les grandes étapes de la digestion et de l’absorption des glucides, lipides et protéines.',
    'Expliquer le rôle des hormones digestives principales (gastrine, sécrétine, cholécystokinine).',
    'Décrire l’organisation du système nerveux entérique et son articulation avec le système nerveux autonome.',
  ],
  sections: [
    {
      id: 'secretions',
      titre: 'Les grandes sécrétions digestives',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le tube digestif produit chaque jour plusieurs litres de sécrétions exocrines, dont la fonction commune est de préparer les nutriments à leur absorption, par voie enzymatique, chimique ou mécanique.",
        },
        {
          type: 'tableau',
          titre: 'Principales sécrétions digestives',
          colonnes: ['Sécrétion', 'Origine', 'Composants principaux', 'Rôle'],
          lignes: [
            ['Salive', 'Glandes salivaires (parotide, sous-maxillaire, sublinguale)', 'Eau, mucus, amylase salivaire, lysozyme', 'Lubrification du bol alimentaire, début de digestion de l’amidon'],
            ['Suc gastrique', 'Glandes de la muqueuse gastrique', 'Acide chlorhydrique, pepsinogène, facteur intrinsèque, mucus', 'Digestion protéique initiale, antisepsie, absorption future de la vitamine B12'],
            ['Suc pancréatique exocrine', 'Pancréas exocrine (acini)', 'Bicarbonate, enzymes protéolytiques, amylase, lipase pancréatiques', 'Neutralisation de l’acidité gastrique, digestion des trois grandes classes de nutriments'],
            ['Bile', 'Foie, stockée et concentrée dans la vésicule biliaire', 'Sels biliaires, cholestérol, phospholipides, bilirubine', 'Émulsification et solubilisation des lipides'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Volumes quotidiens usuels',
          texte:
            "Salive : environ 1 à 1,5 L/jour. Suc gastrique : environ 1,5 à 2,5 L/jour. Suc pancréatique : environ 1 à 1,5 L/jour. Bile : environ 0,5 à 1 L/jour.",
        },
      ],
    },
    {
      id: 'secretion-gastrique',
      titre: 'Sécrétion gastrique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La muqueuse gastrique comporte plusieurs types cellulaires spécialisés, dont la coordination assure une sécrétion acide et enzymatique efficace, régulée à la fois par le système nerveux et par des hormones digestives.",
        },
        {
          type: 'tableau',
          titre: 'Cellules de la muqueuse gastrique',
          colonnes: ['Cellule', 'Sécrétion', 'Rôle'],
          lignes: [
            ['Cellule pariétale (bordante)', 'Acide chlorhydrique (HCl), facteur intrinsèque', 'Acidification du contenu gastrique, absorption future de la vitamine B12 dans l’iléon'],
            ['Cellule principale', 'Pepsinogène', 'Précurseur inactif de la pepsine, activé par le pH acide'],
            ['Cellule à mucus', 'Mucus, bicarbonate', 'Protection de la muqueuse contre l’autodigestion acide'],
            ['Cellule G (antre)', 'Gastrine', 'Hormone stimulant la sécrétion acide et la motricité gastrique'],
            ['Cellule entérochromaffine-like (ECL)', 'Histamine', 'Stimule la sécrétion acide de la cellule pariétale par voie paracrine'],
          ],
        },
        {
          type: 'etapes',
          titre: 'Les trois phases de la sécrétion gastrique acide',
          etapes: [
            {
              titre: 'Phase céphalique',
              detail:
                "Déclenchée par la vue, l’odeur ou la pensée de la nourriture, médiée par le nerf vague, elle représente environ 30 % de la sécrétion acide totale d’un repas.",
            },
            {
              titre: 'Phase gastrique',
              detail:
                "Déclenchée par la distension gastrique et la présence de peptides et d’acides aminés dans l’estomac, elle stimule la sécrétion de gastrine et représente la phase la plus importante, environ 60 % de la sécrétion totale.",
            },
            {
              titre: 'Phase intestinale',
              detail:
                "L’arrivée du chyme dans le duodénum module la sécrétion gastrique, d’abord en la stimulant modérément (petite contribution positive initiale), puis en l’inhibant à mesure que le duodénum se distend et que son pH s’acidifie.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Trois voies convergent sur la cellule pariétale',
          texte:
            "La sécrétion acide de la cellule pariétale est stimulée par trois voies convergentes : l’acétylcholine (voie vagale directe), la gastrine (voie endocrine) et l’histamine (voie paracrine, via les récepteurs H2). C’est le principe pharmacologique des inhibiteurs de la pompe à protons et des antihistaminiques H2 utilisés dans les pathologies acido-peptiques.",
        },
      ],
    },
    {
      id: 'secretion-pancreatique-biliaire',
      titre: 'Sécrétions pancréatique et biliaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le pancréas exocrine et le foie déversent leurs sécrétions dans le duodénum, où elles complètent la digestion initiée dans la bouche et l’estomac, sous le contrôle de deux hormones duodénales majeures.",
        },
        {
          type: 'tableau',
          titre: 'Hormones digestives et leurs actions',
          colonnes: ['Hormone', 'Cellule sécrétrice', 'Stimulus', 'Actions principales'],
          lignes: [
            ['Gastrine', 'Cellules G antrales', 'Distension gastrique, peptides, acétylcholine vagale', 'Stimule la sécrétion acide et la motricité gastrique'],
            ['Sécrétine', 'Cellules S duodénales', 'Acidité du chyme duodénal (pH inférieur à 4,5)', 'Stimule la sécrétion pancréatique riche en bicarbonate, inhibe la sécrétion gastrique acide'],
            ['Cholécystokinine (CCK)', 'Cellules I duodénales', 'Présence de lipides et d’acides aminés dans le duodénum', 'Stimule la contraction de la vésicule biliaire et la sécrétion pancréatique enzymatique, relâche le sphincter d’Oddi, ralentit la vidange gastrique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir sécrétine et CCK par leur stimulus',
          texte:
            "Sécrétine : stimulée par l’acide (pense à « sécrétine-acide »), elle fait sécréter du bicarbonate pancréatique pour neutraliser cette acidité. Cholécystokinine : stimulée par les graisses, elle fait se contracter la vésicule biliaire (cholé-cyst-o-kinine, littéralement « qui fait bouger la vésicule biliaire ») pour libérer la bile nécessaire à leur digestion.",
        },
        {
          type: 'definition',
          terme: 'Cycle entérohépatique des sels biliaires',
          definition:
            "Les sels biliaires, après avoir participé à l’émulsification des lipides dans l’intestin grêle, sont réabsorbés activement au niveau de l’iléon terminal, puis retournent au foie par la veine porte pour être resécrétés dans la bile. Ce recyclage permet à un pool relativement restreint de sels biliaires de participer plusieurs fois à la digestion d’un même repas.",
        },
      ],
    },
    {
      id: 'motricite',
      titre: 'Motricité digestive',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La motricité digestive assure le mélange, la progression et l’évacuation du contenu digestif. Elle repose sur l’activité électrique spontanée des cellules interstitielles de Cajal, véritables pacemakers du muscle lisse digestif, modulée par le système nerveux entérique et le système nerveux autonome.",
        },
        {
          type: 'tableau',
          titre: 'Types de motricité selon le segment digestif',
          colonnes: ['Segment', 'Type de motricité', 'Fonction'],
          lignes: [
            ['Estomac (fundus)', 'Relaxation réceptive puis tonus soutenu', 'Réservoir, accommodation du volume ingéré sans grande élévation de pression'],
            ['Estomac (antre)', 'Contractions péristaltiques puissantes', 'Broyage mécanique, mélange avec le suc gastrique, propulsion fractionnée vers le duodénum'],
            ['Intestin grêle', 'Contractions de segmentation, puis péristaltisme', 'Mélange du chyme avec les sécrétions digestives, brassage et progression lente'],
            ['Côlon', 'Haustrations, mouvements de masse', 'Absorption d’eau et d’électrolytes, stockage puis évacuation des selles'],
          ],
        },
        {
          type: 'definition',
          terme: 'Complexe moteur migrant (CMM)',
          definition:
            "Activité motrice cyclique de l’intestin grêle en période de jeûne, se déroulant en trois phases successives (repos, activité irrégulière croissante, puis salve de contractions intenses migrant de l’estomac vers l’iléon). Il assure le nettoyage périodique du tube digestif entre les repas, en évacuant résidus alimentaires non digérés, sécrétions et bactéries.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le sphincter iléocæcal et le réflexe gastrocolique',
          texte:
            "Le sphincter iléocæcal régule le passage du contenu iléal vers le cæcum et empêche le reflux colique vers l’iléon. Le réflexe gastrocolique, déclenché par la distension gastrique lors d’un repas, stimule la motricité colique et peut précipiter l’envie de défécation, un mécanisme physiologique normal.",
        },
      ],
    },
    {
      id: 'digestion-absorption',
      titre: 'Digestion et absorption des nutriments',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La digestion transforme les macronutriments en unités absorbables, principalement au niveau du duodénum et du jéjunum, grâce à l’action combinée des enzymes salivaires, gastriques, pancréatiques et intestinales (bordure en brosse).",
        },
        {
          type: 'tableau',
          titre: 'Digestion des trois grandes classes de nutriments',
          colonnes: ['Nutriment', 'Enzymes principales', 'Produits finaux absorbables', 'Site principal d’absorption'],
          lignes: [
            ['Glucides', 'Amylase salivaire et pancréatique, puis disaccharidases de la bordure en brosse (lactase, saccharase, maltase)', 'Monosaccharides (glucose, galactose, fructose)', 'Jéjunum, par cotransport avec le sodium (SGLT1) ou diffusion facilitée (GLUT5)'],
            ['Protéines', 'Pepsine gastrique, puis trypsine, chymotrypsine, carboxypeptidases pancréatiques, peptidases de la bordure en brosse', 'Acides aminés libres et petits peptides (di- et tripeptides)', 'Jéjunum, par cotransport avec le sodium ou transporteurs peptidiques spécifiques'],
            ['Lipides', 'Lipase linguale et gastrique (mineures), lipase pancréatique (majeure), émulsification par les sels biliaires', 'Acides gras libres, monoglycérides, incorporés dans des micelles', 'Jéjunum, diffusion passive après dissociation des micelles, reformation de triglycérides et incorporation dans les chylomicrons'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Intolérance au lactose',
          texte:
            "Un déficit en lactase de la bordure en brosse intestinale empêche l’hydrolyse du lactose en glucose et galactose. Le lactose non digéré atteint le côlon, où sa fermentation bactérienne produit des gaz et des acides organiques, à l’origine de ballonnements, de douleurs abdominales et de diarrhée osmotique.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Efficacité de l’absorption intestinale',
          texte:
            "Chez le sujet sain, plus de 95 % des lipides, glucides et protéines ingérés sont digérés et absorbés au niveau de l’intestin grêle, essentiellement dans le duodénum et le jéjunum proximal.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les quatre grandes sécrétions digestives sont la salive, le suc gastrique, le suc pancréatique et la bile.",
    "La sécrétion acide gastrique résulte de la convergence de trois voies sur la cellule pariétale : acétylcholine, gastrine et histamine.",
    "La sécrétion gastrique acide se déroule en trois phases : céphalique, gastrique (la plus importante) et intestinale.",
    "La sécrétine, stimulée par l’acidité duodénale, fait sécréter le bicarbonate pancréatique ; la cholécystokinine, stimulée par les lipides, fait contracter la vésicule biliaire.",
    "Les sels biliaires suivent un cycle entérohépatique, réabsorbés à l’iléon terminal et resécrétés par le foie.",
    "Les cellules interstitielles de Cajal sont les pacemakers de l’activité électrique du muscle lisse digestif.",
    "Le complexe moteur migrant assure le nettoyage périodique de l’intestin grêle entre les repas.",
    "Les glucides, protéines et lipides sont digérés en unités absorbables, essentiellement absorbées au niveau du jéjunum.",
  ],
  erreursFrequentes: [
    "Croire que la phase céphalique est la principale phase de sécrétion gastrique acide : c’est la phase gastrique, déclenchée par la distension et les peptides, qui domine (environ 60 %).",
    "Confondre sécrétine (stimulée par l’acide, sécrétion de bicarbonate) et cholécystokinine (stimulée par les lipides, contraction vésiculaire).",
    "Oublier le rôle du facteur intrinsèque, sécrété par la cellule pariétale, indispensable à l’absorption iléale de la vitamine B12.",
    "Penser que le pepsinogène est directement actif : il doit être activé en pepsine par le pH acide du suc gastrique.",
    "Croire que les sels biliaires sont détruits après chaque repas : ils sont réabsorbés à l’iléon et recyclés par le cycle entérohépatique.",
    "Confondre les contractions de segmentation de l’intestin grêle, qui mélangent, avec le péristaltisme, qui propulse le contenu digestif.",
  ],
  mnemotechniques: [
    {
      moyen: '« ACG sur la pariétale »',
      explication:
        'Acétylcholine, gastrine et histamine convergent pour stimuler la sécrétion acide de la cellule pariétale gastrique.',
    },
    {
      moyen: '« Sécrétine = acide, bicarbonate ; CCK = graisse, bile »',
      explication:
        'La sécrétine répond à l’acidité duodénale en stimulant le bicarbonate pancréatique ; la cholécystokinine répond aux lipides en stimulant la vésicule biliaire.',
    },
    {
      moyen: '« CMM nettoie entre les repas »',
      explication:
        'Le complexe moteur migrant évacue résidus, sécrétions et bactéries de l’intestin grêle durant le jeûne inter-digestif.',
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
      id: 'physio-physiologie-digestive-fc-01',
      recto: 'Quelles sont les quatre grandes sécrétions digestives ?',
      verso: 'La salive, le suc gastrique, le suc pancréatique exocrine et la bile.',
      type: 'classification',
      tags: ['sécrétions digestives'],
    },
    {
      id: 'physio-physiologie-digestive-fc-02',
      recto: 'Quelles substances sécrète la cellule pariétale gastrique ?',
      verso: 'L’acide chlorhydrique (HCl) et le facteur intrinsèque.',
      type: 'definition',
      tags: ['cellule pariétale'],
    },
    {
      id: 'physio-physiologie-digestive-fc-03',
      recto: 'À quoi sert le facteur intrinsèque ?',
      verso: 'Il est indispensable à l’absorption de la vitamine B12 au niveau de l’iléon.',
      type: 'mecanisme',
      tags: ['facteur intrinsèque', 'vitamine B12'],
    },
    {
      id: 'physio-physiologie-digestive-fc-04',
      recto: 'Quelle est la phase la plus importante de la sécrétion gastrique acide au cours d’un repas ?',
      verso: 'La phase gastrique, déclenchée par la distension et les peptides intragastriques, environ 60 % de la sécrétion totale.',
      type: 'chiffre',
      tags: ['sécrétion gastrique'],
    },
    {
      id: 'physio-physiologie-digestive-fc-05',
      recto: 'Quel est le stimulus principal de la sécrétine ?',
      verso: 'L’acidité du chyme duodénal (pH inférieur à 4,5).',
      type: 'mecanisme',
      tags: ['sécrétine'],
    },
    {
      id: 'physio-physiologie-digestive-fc-06',
      recto: 'Quelle est l’action principale de la cholécystokinine ?',
      verso: 'Stimuler la contraction de la vésicule biliaire et la sécrétion pancréatique enzymatique, et relâcher le sphincter d’Oddi.',
      type: 'mecanisme',
      tags: ['cholécystokinine'],
    },
    {
      id: 'physio-physiologie-digestive-fc-07',
      recto: 'Qu’est-ce que le cycle entérohépatique des sels biliaires ?',
      verso: 'La réabsorption des sels biliaires à l’iléon terminal, suivie de leur retour au foie par la veine porte pour être resécrétés dans la bile.',
      type: 'mecanisme',
      tags: ['sels biliaires'],
    },
    {
      id: 'physio-physiologie-digestive-fc-08',
      recto: 'Quelles cellules constituent les pacemakers du muscle lisse digestif ?',
      verso: 'Les cellules interstitielles de Cajal.',
      type: 'definition',
      tags: ['motricité digestive'],
    },
    {
      id: 'physio-physiologie-digestive-fc-09',
      recto: 'Qu’est-ce que le complexe moteur migrant ?',
      verso: 'Une activité motrice cyclique de l’intestin grêle en période de jeûne, qui nettoie le tube digestif des résidus, sécrétions et bactéries.',
      type: 'definition',
      tags: ['complexe moteur migrant'],
    },
    {
      id: 'physio-physiologie-digestive-fc-10',
      recto: 'Par quels transporteurs le glucose est-il absorbé au niveau intestinal ?',
      verso: 'Le cotransporteur SGLT1 (couplé au sodium) au pôle apical, puis le transporteur GLUT2 au pôle basolatéral.',
      type: 'mecanisme',
      tags: ['absorption glucides'],
    },
    {
      id: 'physio-physiologie-digestive-fc-11',
      recto: 'Sous quelle forme les lipides sont-ils absorbés par l’entérocyte ?',
      verso: 'Sous forme d’acides gras libres et de monoglycérides, issus de la dissociation des micelles biliaires, puis reformés en triglycérides incorporés dans des chylomicrons.',
      type: 'mecanisme',
      tags: ['absorption lipides'],
    },
    {
      id: 'physio-physiologie-digestive-fc-12',
      recto: 'Quelle est la conséquence d’un déficit en lactase de la bordure en brosse ?',
      verso: 'Le lactose non digéré atteint le côlon, où sa fermentation bactérienne provoque ballonnements, douleurs abdominales et diarrhée osmotique.',
      type: 'clinique',
      tags: ['intolérance au lactose'],
    },
  ],
  qcm: [
    {
      id: 'physio-physiologie-digestive-qcm-01',
      enonce: "Concernant les sécrétions digestives, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le pepsinogène est sécrété par les cellules principales de la muqueuse gastrique.',
          vraie: true,
          justification: 'Exact, et il est activé en pepsine par le pH acide gastrique.',
        },
        {
          lettre: 'B',
          texte: 'Le suc pancréatique est pauvre en bicarbonate.',
          vraie: false,
          justification: "Faux : il est riche en bicarbonate, ce qui permet de neutraliser l’acidité du chyme gastrique arrivant dans le duodénum.",
        },
        {
          lettre: 'C',
          texte: 'La bile est produite par le foie et stockée dans la vésicule biliaire.',
          vraie: true,
          justification: 'Exact, la vésicule biliaire la concentrant également entre les repas.',
        },
        {
          lettre: 'D',
          texte: 'La salive contient de l’amylase salivaire, qui amorce la digestion de l’amidon.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Le volume quotidien de suc gastrique est inférieur à celui de la bile.',
          vraie: false,
          justification: 'Faux : le suc gastrique (environ 1,5 à 2,5 L/jour) est produit en quantité bien supérieure à la bile (environ 0,5 à 1 L/jour).',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Chaque sécrétion digestive a une composition et un rôle spécifiques.',
      difficulte: 1,
    },
    {
      id: 'physio-physiologie-digestive-qcm-02',
      enonce: "Concernant la sécrétion gastrique acide, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La phase céphalique est médiée par le nerf vague.',
          vraie: true,
          justification: 'Exact, déclenchée par la vue, l’odeur ou la pensée de la nourriture.',
        },
        {
          lettre: 'B',
          texte: 'La phase gastrique représente la majorité de la sécrétion acide d’un repas.',
          vraie: true,
          justification: 'Exact, environ 60 % de la sécrétion totale.',
        },
        {
          lettre: 'C',
          texte: 'La gastrine est sécrétée par les cellules pariétales.',
          vraie: false,
          justification: 'Faux : la gastrine est sécrétée par les cellules G de l’antre gastrique.',
        },
        {
          lettre: 'D',
          texte: "L’histamine stimule la sécrétion acide par voie paracrine.",
          vraie: true,
          justification: 'Exact, via les récepteurs H2 de la cellule pariétale.',
        },
        {
          lettre: 'E',
          texte: 'La phase intestinale finit par inhiber la sécrétion gastrique lorsque le duodénum se distend et s’acidifie.',
          vraie: true,
          justification: 'Exact : c’est un mécanisme de rétrocontrôle négatif protégeant le duodénum d’un afflux acide excessif.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. La sécrétion gastrique résulte de trois phases successives et de trois voies convergentes.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-digestive-qcm-03',
      enonce: "Concernant les hormones digestives, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La sécrétine est sécrétée par les cellules S duodénales en réponse à l’acidité du chyme.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'La cholécystokinine inhibe la contraction de la vésicule biliaire.',
          vraie: false,
          justification: 'Faux : elle stimule au contraire la contraction de la vésicule biliaire.',
        },
        {
          lettre: 'C',
          texte: 'La cholécystokinine ralentit la vidange gastrique.',
          vraie: true,
          justification: 'Exact, ce qui laisse le temps à la digestion duodénale des lipides de se dérouler.',
        },
        {
          lettre: 'D',
          texte: 'La gastrine est stimulée par la distension gastrique et les peptides intraluminaux.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'La sécrétine stimule la sécrétion acide gastrique.',
          vraie: false,
          justification: 'Faux : elle inhibe au contraire la sécrétion gastrique acide.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Bien distinguer les stimuli et actions opposées de la sécrétine et de la cholécystokinine.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-digestive-qcm-04',
      enonce: "Concernant la motricité digestive, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Les cellules interstitielles de Cajal génèrent l’activité électrique de base du muscle lisse digestif.',
          vraie: true,
          justification: 'Exact, elles jouent le rôle de pacemaker.',
        },
        {
          lettre: 'B',
          texte: 'Le fundus gastrique assure surtout la relaxation réceptive et l’accommodation du volume ingéré.',
          vraie: true,
          justification: 'Exact, à la différence de l’antre, dévolu au broyage mécanique.',
        },
        {
          lettre: 'C',
          texte: 'Les contractions de segmentation de l’intestin grêle assurent principalement la propulsion rapide du contenu digestif.',
          vraie: false,
          justification: "Faux : les contractions de segmentation assurent surtout le mélange ; c’est le péristaltisme qui assure la propulsion.",
        },
        {
          lettre: 'D',
          texte: 'Le complexe moteur migrant se déroule pendant la digestion d’un repas.',
          vraie: false,
          justification: "Faux : il se déroule en période de jeûne inter-digestif, entre les repas.",
        },
        {
          lettre: 'E',
          texte: 'Le réflexe gastrocolique peut être déclenché par la distension gastrique lors d’un repas.',
          vraie: true,
          justification: 'Exact, ce qui stimule la motricité colique.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. Le complexe moteur migrant est spécifique du jeûne, non de la période postprandiale.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-digestive-qcm-05',
      enonce: "Concernant la digestion et l’absorption des nutriments, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Les monosaccharides sont absorbés essentiellement au niveau du jéjunum.',
          vraie: true,
          justification: 'Exact, après hydrolyse par les disaccharidases de la bordure en brosse.',
        },
        {
          lettre: 'B',
          texte: 'Le glucose est absorbé par un cotransport avec le sodium au pôle apical de l’entérocyte.',
          vraie: true,
          justification: 'Exact, via le transporteur SGLT1.',
        },
        {
          lettre: 'C',
          texte: 'Les protéines ne peuvent être absorbées que sous forme d’acides aminés libres.',
          vraie: false,
          justification: "Faux : de petits peptides (di- et tripeptides) peuvent aussi être absorbés par des transporteurs spécifiques.",
        },
        {
          lettre: 'D',
          texte: 'Les lipides sont absorbés directement sous forme de triglycérides intacts.',
          vraie: false,
          justification: "Faux : ils doivent d’abord être hydrolysés en acides gras libres et monoglycérides avant d’être absorbés, puis reformés en triglycérides dans l’entérocyte.",
        },
        {
          lettre: 'E',
          texte: 'Plus de 95 % des macronutriments ingérés sont normalement digérés et absorbés au niveau de l’intestin grêle.',
          vraie: true,
          justification: 'Exact, chez le sujet sain.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. L’absorption des nutriments nécessite leur hydrolyse préalable en unités simples.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-digestive-qcm-06',
      enonce: "Concernant les sels biliaires et l’intolérance au lactose, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Les sels biliaires sont réabsorbés au niveau du jéjunum proximal.',
          vraie: false,
          justification: "Faux : ils sont réabsorbés principalement au niveau de l’iléon terminal.",
        },
        {
          lettre: 'B',
          texte: 'Le cycle entérohépatique permet de recycler les sels biliaires plusieurs fois au cours d’un même repas.',
          vraie: true,
          justification: 'Exact, ce qui optimise l’utilisation d’un pool relativement restreint de sels biliaires.',
        },
        {
          lettre: 'C',
          texte: 'La lactase est une enzyme pancréatique.',
          vraie: false,
          justification: "Faux : c’est une enzyme de la bordure en brosse intestinale, non une enzyme pancréatique.",
        },
        {
          lettre: 'D',
          texte: 'Un déficit en lactase entraîne une diarrhée de mécanisme osmotique.',
          vraie: true,
          justification: 'Exact : le lactose non digéré retient l’eau dans la lumière intestinale et colique par effet osmotique.',
        },
        {
          lettre: 'E',
          texte: 'La fermentation colique du lactose non digéré produit des gaz.',
          vraie: true,
          justification: 'Exact, à l’origine des ballonnements observés dans l’intolérance au lactose.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Le recyclage entérohépatique et la digestion enzymatique de la bordure en brosse sont deux mécanismes clés.',
      difficulte: 2,
    },
  ],
};
