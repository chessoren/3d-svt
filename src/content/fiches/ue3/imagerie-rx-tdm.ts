import type { Fiche } from '../../types';

export const ficheImagerieRxTdm: Fiche = {
  id: 'ue3-imagerie-rx-tdm',
  ue: 'ue3',
  titre: 'Imagerie par rayons X et tomodensitométrie',
  sousTitre:
    "Production des rayons X, tube radiogène, contraste radiologique, principe du scanner, unités Hounsfield, reconstruction et produits de contraste",
  chapitre: 'Imagerie médicale',
  ordre: 11,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'tube à rayons X',
    'rayonnement de freinage',
    'radiographie',
    'tomodensitométrie',
    'unité Hounsfield',
    'reconstruction tomographique',
    'produit de contraste',
    'coupe axiale',
  ],
  objectifs: [
    "Décrire le principe de production des rayons X dans un tube radiogène.",
    "Expliquer la formation d’une image radiographique conventionnelle.",
    "Décrire le principe d’acquisition et de reconstruction d’une image de tomodensitométrie.",
    "Utiliser l’échelle de Hounsfield pour interpréter la densité d’une structure au scanner.",
    "Connaître les principaux produits de contraste utilisés en imagerie par rayons X et leurs précautions d’emploi.",
  ],
  sections: [
    {
      id: 'production-rayons-x',
      titre: 'Production des rayons X',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les rayons X utilisés en imagerie médicale sont produits dans un tube radiogène, une enceinte sous vide dans laquelle des électrons, accélérés par une haute tension entre une cathode et une anode, viennent percuter une cible métallique (anode, généralement en tungstène).",
        },
        {
          type: 'etapes',
          titre: 'Principe de fonctionnement du tube à rayons X',
          etapes: [
            {
              titre: 'Production des électrons',
              detail: "La cathode, un filament chauffé, produit des électrons par effet thermoïonique.",
            },
            {
              titre: 'Accélération des électrons',
              detail: "Une haute tension appliquée entre cathode et anode (typiquement 40 à 150 kV en imagerie diagnostique) accélère les électrons vers l’anode.",
            },
            {
              titre: 'Interaction avec l’anode',
              detail:
                "Les électrons percutent l’anode et sont brutalement freinés : la majeure partie de leur énergie cinétique est convertie en chaleur, et une faible fraction (de l’ordre de 1 %) est convertie en rayons X.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Rayonnement de freinage (Bremsstrahlung)',
          definition:
            "Rayonnement électromagnétique de spectre continu, produit lorsqu’un électron est dévié et freiné par le champ électrique du noyau d’un atome de la cible, une partie de son énergie cinétique étant convertie en un photon X. C’est le mécanisme principal de production des rayons X en imagerie médicale.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Raies caractéristiques du spectre',
          texte:
            "En plus du spectre continu de freinage, le spectre des rayons X présente des raies d’émission caractéristiques du matériau de l’anode, produites lorsqu’un électron incident éjecte un électron d’une couche interne de l’atome cible, la lacune étant comblée par un électron plus périphérique (mécanisme analogue à la fluorescence décrite pour l’effet photoélectrique).",
        },
      ],
    },
    {
      id: 'radiographie-conventionnelle',
      titre: 'La radiographie conventionnelle',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En radiographie conventionnelle, le faisceau de rayons X traverse le patient puis vient impressionner un détecteur (capteur numérique ou, historiquement, un film argentique), formant une image de projection en deux dimensions de l’ensemble des structures traversées.",
        },
        {
          type: 'liste',
          items: [
            "L’image radiographique est une projection : elle superpose sur un même plan toutes les structures situées sur le trajet du faisceau, ce qui peut masquer certaines lésions par superposition.",
            "Le contraste de l’image résulte des différences d’atténuation entre les tissus traversés (voir la loi d’atténuation exponentielle et les effets photoélectrique et Compton).",
            "Deux incidences orthogonales (par exemple face et profil) sont souvent nécessaires pour localiser une structure dans l’espace, en raison de la nature bidimensionnelle de la projection.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Limite fondamentale de la radiographie standard',
          texte:
            "Parce qu’elle superpose toutes les structures traversées par le faisceau sur une seule image, la radiographie conventionnelle ne permet pas de localiser précisément la profondeur d’une lésion ni de séparer des structures de même densité situées sur le même trajet. C’est cette limite que la tomodensitométrie est venue lever.",
        },
      ],
    },
    {
      id: 'principe-scanner',
      titre: 'Principe de la tomodensitométrie (scanner)',
      blocs: [
        {
          type: 'definition',
          terme: 'Tomodensitométrie (TDM, scanner)',
          definition:
            "Technique d’imagerie par rayons X qui reconstruit, à partir d’un grand nombre de mesures d’atténuation acquises sous des angles différents autour du patient, une image en coupe (tomographie) représentant la répartition spatiale des coefficients d’atténuation des tissus.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le couple tube à rayons X-détecteurs tourne autour du patient, généralement en même temps que la table avance (acquisition hélicoïdale), permettant de couvrir un volume entier en une seule acquisition continue. Chaque position angulaire fournit un profil d’atténuation ; l’ensemble de ces profils est ensuite traité par un algorithme de reconstruction pour obtenir des images en coupe.",
        },
        {
          type: 'liste',
          items: [
            "La reconstruction tomographique s’appuie sur des algorithmes mathématiques (rétroprojection filtrée, ou méthodes itératives plus récentes) qui recalculent, pour chaque point de la coupe (voxel), le coefficient d’atténuation local à partir de l’ensemble des projections acquises.",
            "Contrairement à la radiographie standard, la tomodensitométrie fournit une information de localisation en trois dimensions, sans superposition des structures.",
            "L’acquisition hélicoïdale, en couplant rotation continue du tube et avancement de la table, a considérablement réduit la durée des examens et amélioré la qualité des reconstructions multiplanaires.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Rétroprojection filtrée',
          texte:
            "La rétroprojection simple, qui consiste à redistribuer chaque profil d’atténuation dans la direction dont il provient, produit un flou caractéristique en étoile autour des structures. Un filtrage mathématique (filtre de rehaussement des hautes fréquences) est appliqué avant rétroprojection pour corriger ce flou : c’est le principe de la rétroprojection filtrée, historiquement la méthode de reconstruction de référence en tomodensitométrie.",
        },
      ],
    },
    {
      id: 'unites-hounsfield',
      titre: 'Échelle et unités de Hounsfield',
      blocs: [
        {
          type: 'definition',
          terme: 'Unité Hounsfield (UH)',
          definition:
            "Échelle de densité utilisée en tomodensitométrie, qui exprime le coefficient d’atténuation linéique d’un tissu par rapport à celui de l’eau, prise comme référence.",
        },
        {
          type: 'formule',
          expression: 'UH = 1000 x (mu tissu - mu eau) / mu eau',
          legende:
            "Nombre Hounsfield UH d’un voxel : mu tissu est le coefficient d’atténuation linéique du tissu considéré, mu eau celui de l’eau, pris comme référence.",
          unites: 'UH sans unité (nombre Hounsfield), mu en m⁻¹ ou cm⁻¹',
        },
        {
          type: 'tableau',
          titre: 'Repères de densité en unités Hounsfield',
          colonnes: ['Structure', 'Valeur approximative (UH)'],
          lignes: [
            ['Air', '-1000'],
            ['Graisse', 'environ -100 à -50'],
            ['Eau', '0 (par définition)'],
            ['Tissus mous, organes pleins', 'environ +20 à +70'],
            ['Os compact', 'environ +700 à +3000'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Fenêtrage et contraste de l’image',
          texte:
            "L’échelle Hounsfield comporte plusieurs milliers de valeurs possibles, bien plus que ce que l’œil humain peut distinguer de niveaux de gris. Le fenêtrage consiste à choisir une fenêtre de visualisation (centre et largeur) adaptée au tissu étudié (fenêtre parenchymateuse, fenêtre osseuse, fenêtre pulmonaire) afin d’optimiser le contraste visible pour la structure d’intérêt.",
        },
      ],
    },
    {
      id: 'produits-contraste',
      titre: 'Produits de contraste en imagerie par rayons X',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les produits de contraste utilisés en radiographie et en tomodensitométrie exploitent un numéro atomique élevé pour augmenter localement l’atténuation des rayons X (voir la fiche sur les interactions rayonnement-matière), permettant de mieux visualiser certaines structures (vaisseaux, tube digestif, voies urinaires).",
        },
        {
          type: 'tableau',
          titre: 'Principaux produits de contraste iodés et barytés',
          colonnes: ['Produit', 'Voie d’administration', 'Usage principal'],
          lignes: [
            ['Produits de contraste iodés', 'Intraveineuse', 'Angiographie, TDM injectée (parenchymes, vaisseaux, voies urinaires)'],
            ['Sulfate de baryum', 'Orale ou rectale', 'Opacification du tube digestif (transit, lavement baryté)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Précautions d’emploi des produits de contraste iodés',
          texte:
            "Les produits de contraste iodés exposent à un risque de réaction allergique (des formes bénignes aux réactions anaphylactiques sévères) et de néphropathie induite par les produits de contraste, notamment chez les patients ayant une insuffisance rénale préexistante ou déshydratés. Une évaluation de la fonction rénale et une hydratation adaptée sont recommandées avant une injection chez les patients à risque.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les rayons X médicaux sont produits par rayonnement de freinage lors de la décélération brutale d’électrons accélérés percutant une anode.",
    "La radiographie conventionnelle fournit une image de projection en deux dimensions, avec superposition des structures traversées.",
    "La tomodensitométrie reconstruit des images en coupe à partir de nombreuses mesures d’atténuation acquises sous différents angles.",
    "La rétroprojection filtrée corrige le flou en étoile de la rétroprojection simple par un filtrage mathématique préalable.",
    "L’échelle de Hounsfield exprime la densité d’un tissu par rapport à celle de l’eau (0 UH), l’air valant environ -1000 UH et l’os compact plusieurs centaines à quelques milliers d’UH.",
    "Le fenêtrage permet d’adapter la visualisation des images scanner au tissu étudié, en exploitant une portion limitée de l’échelle Hounsfield.",
    "Les produits de contraste iodés et barytés exploitent un numéro atomique élevé pour augmenter localement l’atténuation des rayons X.",
  ],
  erreursFrequentes: [
    "Croire que la totalité de l’énergie cinétique des électrons est convertie en rayons X dans le tube radiogène, alors que la grande majorité est dissipée en chaleur.",
    "Confondre le rayonnement de freinage (spectre continu) et les raies caractéristiques (spectre de raies) du spectre des rayons X.",
    "Penser que la radiographie conventionnelle fournit une information tridimensionnelle : elle reste une image de projection bidimensionnelle avec superposition.",
    "Oublier que l’échelle Hounsfield est définie par rapport à l’eau (0 UH), et non par rapport à l’air.",
    "Croire que le fenêtrage modifie les valeurs Hounsfield elles-mêmes : il ne modifie que leur représentation visuelle en niveaux de gris.",
    "Négliger le risque de néphropathie induite par les produits de contraste iodés chez un patient insuffisant rénal.",
  ],
  mnemotechniques: [
    {
      moyen: '« Freinage = énergie cinétique en photon X »',
      explication:
        "Rappelle le mécanisme principal de production des rayons X : la décélération brutale d’un électron convertit une partie de son énergie cinétique en un photon X.",
    },
    {
      moyen: '« Hounsfield : Eau = 0, Air = -1000, Os = grand positif »',
      explication:
        "Trois repères simples de l’échelle Hounsfield à retenir en priorité pour situer rapidement n’importe quelle structure.",
    },
    {
      moyen: '« Scanner = coupes, radio = projection »',
      explication:
        "Distingue clairement les deux techniques : la radiographie superpose tout sur un seul plan, le scanner sépare les structures en coupes successives.",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Imagerie médicale, collection Med-Line',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-imagerie-rx-tdm-fc-01',
      recto: 'Quel mécanisme produit la majorité des rayons X dans un tube radiogène ?',
      verso: 'Le rayonnement de freinage (Bremsstrahlung), lié à la décélération brutale des électrons par le champ électrique du noyau des atomes de l’anode.',
      type: 'mecanisme',
      tags: ['production des rayons X'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-02',
      recto: 'Quelle proportion de l’énergie cinétique des électrons est convertie en rayons X dans un tube radiogène ?',
      verso: 'Environ 1 %, le reste étant dissipé sous forme de chaleur.',
      type: 'chiffre',
      tags: ['production des rayons X'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-03',
      recto: 'Pourquoi une radiographie standard nécessite-t-elle souvent deux incidences orthogonales ?',
      verso: 'Parce que c’est une image de projection en deux dimensions qui superpose toutes les structures du trajet du faisceau ; deux incidences permettent de localiser une structure dans l’espace.',
      type: 'mecanisme',
      tags: ['radiographie'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-04',
      recto: 'Que reconstruit la tomodensitométrie à partir des mesures d’atténuation acquises sous différents angles ?',
      verso: 'Des images en coupe représentant la répartition spatiale des coefficients d’atténuation des tissus, sans superposition.',
      type: 'definition',
      tags: ['scanner'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-05',
      recto: 'Quel est le rôle du filtrage dans la rétroprojection filtrée ?',
      verso: 'Corriger le flou en étoile produit par la rétroprojection simple, en rehaussant les hautes fréquences avant la reconstruction.',
      type: 'mecanisme',
      tags: ['reconstruction tomographique'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-06',
      recto: 'Écrire la formule du nombre Hounsfield.',
      verso: 'UH = 1000 x (mu tissu - mu eau) / mu eau.',
      type: 'formule',
      tags: ['unités Hounsfield'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-07',
      recto: 'Quelle est la valeur Hounsfield de l’eau et celle approximative de l’air ?',
      verso: 'L’eau vaut 0 UH par définition ; l’air vaut environ -1000 UH.',
      type: 'chiffre',
      tags: ['unités Hounsfield'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-08',
      recto: 'Quelle est la valeur Hounsfield approximative de l’os compact ?',
      verso: 'Environ +700 à +3000 UH.',
      type: 'chiffre',
      tags: ['unités Hounsfield'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-09',
      recto: 'À quoi sert le fenêtrage d’une image scanner ?',
      verso: 'À adapter la fenêtre de visualisation (centre et largeur) à la gamme de densités du tissu étudié, pour optimiser le contraste visible.',
      type: 'mecanisme',
      tags: ['fenêtrage'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-10',
      recto: 'Quel produit de contraste est utilisé pour opacifier le tube digestif ?',
      verso: 'Le sulfate de baryum, administré par voie orale ou rectale.',
      type: 'clinique',
      tags: ['produits de contraste'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-11',
      recto: 'Quel risque rénal est associé à l’injection de produits de contraste iodés ?',
      verso: 'La néphropathie induite par les produits de contraste, en particulier chez les patients avec insuffisance rénale préexistante ou déshydratés.',
      type: 'clinique',
      tags: ['produits de contraste', 'néphrotoxicité'],
    },
    {
      id: 'ue3-imagerie-rx-tdm-fc-12',
      recto: 'Qu’est-ce que l’acquisition hélicoïdale en tomodensitométrie ?',
      verso: 'Une acquisition où le tube tourne en continu autour du patient pendant que la table avance, permettant de couvrir un volume entier en une seule acquisition continue.',
      type: 'definition',
      tags: ['scanner'],
    },
  ],
  qcm: [
    {
      id: 'ue3-imagerie-rx-tdm-qcm-01',
      enonce: 'Concernant la production des rayons X, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les électrons sont produits par effet thermoïonique au niveau de la cathode.',
          vraie: true,
          justification: 'Exact, le filament chauffé de la cathode libère des électrons par ce mécanisme.',
        },
        {
          lettre: 'B',
          texte: 'La majorité de l’énergie cinétique des électrons est convertie en rayons X.',
          vraie: false,
          justification: "Faux, seule une faible fraction (environ 1 %) est convertie en rayons X, le reste étant dissipé en chaleur.",
        },
        {
          lettre: 'C',
          texte: 'Le rayonnement de freinage produit un spectre continu de rayons X.',
          vraie: true,
          justification: 'Exact, contrairement aux raies caractéristiques, qui forment un spectre de raies discrètes.',
        },
        {
          lettre: 'D',
          texte: 'L’anode du tube radiogène est généralement composée de tungstène.',
          vraie: true,
          justification: "Exact, un métal à numéro atomique élevé et point de fusion élevé, adapté à la production de rayons X.",
        },
        {
          lettre: 'E',
          texte: 'Les raies caractéristiques du spectre des rayons X ne dépendent pas du matériau de l’anode.',
          vraie: false,
          justification: "Elles en dépendent au contraire directement, puisqu’elles correspondent aux énergies de transition électronique propres à cet élément.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-imagerie-rx-tdm-qcm-02',
      enonce: 'Concernant la radiographie conventionnelle, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’image radiographique standard est une image en trois dimensions.',
          vraie: false,
          justification: "Non, c’est une image de projection en deux dimensions, avec superposition des structures du trajet du faisceau.",
        },
        {
          lettre: 'B',
          texte: 'Deux incidences orthogonales permettent de mieux localiser une structure dans l’espace.',
          vraie: true,
          justification: 'Exact, c’est une méthode courante pour compenser la nature bidimensionnelle de la projection.',
        },
        {
          lettre: 'C',
          texte: 'Le contraste de l’image dépend des différences d’atténuation entre les tissus traversés.',
          vraie: true,
          justification: "Exact, lié aux effets photoélectrique et Compton et à la loi d’atténuation exponentielle.",
        },
        {
          lettre: 'D',
          texte: 'La superposition des structures ne pose jamais de problème diagnostique.',
          vraie: false,
          justification: "Elle peut au contraire masquer certaines lésions situées derrière une structure très atténuante, comme l’os.",
        },
        {
          lettre: 'E',
          texte: 'Le détecteur peut être numérique ou, historiquement, un film argentique.',
          vraie: true,
          justification: "Exact, les technologies de détection ont évolué du film argentique vers les capteurs numériques.",
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue3-imagerie-rx-tdm-qcm-03',
      enonce: 'Concernant le principe de la tomodensitométrie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La tomodensitométrie acquiert de multiples profils d’atténuation sous différents angles autour du patient.',
          vraie: true,
          justification: 'Exact, c’est le principe même de l’acquisition tomographique.',
        },
        {
          lettre: 'B',
          texte: 'La tomodensitométrie ne fournit qu’une image de projection, sans possibilité de reconstruction en coupe.',
          vraie: false,
          justification: "C’est au contraire sa spécificité : elle fournit des images en coupe, sans superposition des structures.",
        },
        {
          lettre: 'C',
          texte: 'La rétroprojection simple, sans filtrage, produit une image nette et sans artefact.',
          vraie: false,
          justification: "Elle produit au contraire un flou caractéristique en étoile, corrigé par le filtrage de la rétroprojection filtrée.",
        },
        {
          lettre: 'D',
          texte: 'L’acquisition hélicoïdale associe rotation continue du tube et avancement de la table.',
          vraie: true,
          justification: 'Exact, ce qui permet de couvrir un volume entier en une seule acquisition continue.',
        },
        {
          lettre: 'E',
          texte: 'La tomodensitométrie permet une localisation tridimensionnelle des structures.',
          vraie: true,
          justification: "Exact, à la différence de la radiographie standard, limitée à une projection bidimensionnelle.",
        },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-imagerie-rx-tdm-qcm-04',
      enonce: 'Concernant l’échelle de Hounsfield, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’eau a par définition une valeur de 0 UH.',
          vraie: true,
          justification: 'Exact, l’eau est la référence de l’échelle Hounsfield.',
        },
        {
          lettre: 'B',
          texte: 'L’air a une valeur Hounsfield largement positive.',
          vraie: false,
          justification: "L’air a une valeur fortement négative, environ -1000 UH.",
        },
        {
          lettre: 'C',
          texte: 'L’os compact présente des valeurs Hounsfield très supérieures à celles des tissus mous.',
          vraie: true,
          justification: 'Exact, de l’ordre de plusieurs centaines à quelques milliers d’UH.',
        },
        {
          lettre: 'D',
          texte: 'Le fenêtrage modifie les valeurs Hounsfield mesurées.',
          vraie: false,
          justification: "Non, le fenêtrage modifie uniquement la représentation visuelle en niveaux de gris, pas les valeurs Hounsfield elles-mêmes.",
        },
        {
          lettre: 'E',
          texte: 'La graisse a une valeur Hounsfield négative, mais moins que celle de l’air.',
          vraie: true,
          justification: "Exact, la graisse se situe environ entre -100 et -50 UH, entre l’air et l’eau.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-imagerie-rx-tdm-qcm-05',
      enonce: 'Concernant les produits de contraste utilisés en imagerie par rayons X, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le sulfate de baryum est utilisé pour opacifier le tube digestif.',
          vraie: true,
          justification: 'Exact, par voie orale ou rectale.',
        },
        {
          lettre: 'B',
          texte: 'Les produits de contraste iodés sont administrés par voie intraveineuse pour l’étude des vaisseaux et des parenchymes.',
          vraie: true,
          justification: 'Exact, c’est leur mode d’administration usuel en angiographie et en scanner injecté.',
        },
        {
          lettre: 'C',
          texte: 'Les produits de contraste iodés n’exposent à aucun risque de réaction allergique.',
          vraie: false,
          justification: "Ils exposent au contraire à un risque de réaction allergique, des formes bénignes aux réactions anaphylactiques sévères.",
        },
        {
          lettre: 'D',
          texte: 'L’efficacité des produits de contraste repose sur un numéro atomique élevé.',
          vraie: true,
          justification: "Exact, ce qui augmente localement l’atténuation par effet photoélectrique.",
        },
        {
          lettre: 'E',
          texte: 'L’injection de produits de contraste iodés n’impose aucune précaution particulière chez l’insuffisant rénal.',
          vraie: false,
          justification: "Au contraire, une évaluation de la fonction rénale et une hydratation adaptée sont recommandées avant l’injection chez ces patients, en raison du risque de néphropathie induite.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-imagerie-rx-tdm-qcm-06',
      enonce: 'Concernant les différences entre radiographie standard et tomodensitométrie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La radiographie standard superpose les structures traversées sur une seule image.',
          vraie: true,
          justification: "Exact, c’est une limite intrinsèque de l’imagerie de projection.",
        },
        {
          lettre: 'B',
          texte: 'La tomodensitométrie sépare les structures selon leur profondeur, en coupes successives.',
          vraie: true,
          justification: "Exact, c’est l’apport majeur de la reconstruction tomographique.",
        },
        {
          lettre: 'C',
          texte: 'Les deux techniques utilisent le même type de rayonnement, les rayons X.',
          vraie: true,
          justification: "Exact, la tomodensitométrie est une technique d’imagerie par rayons X, comme la radiographie standard.",
        },
        {
          lettre: 'D',
          texte: 'L’échelle Hounsfield est utilisée en radiographie standard mais pas en tomodensitométrie.',
          vraie: false,
          justification: "C’est l’inverse : l’échelle Hounsfield est spécifique de la tomodensitométrie, qui quantifie l’atténuation en chaque voxel.",
        },
        {
          lettre: 'E',
          texte: 'La tomodensitométrie nécessite un algorithme de reconstruction, contrairement à la radiographie standard.',
          vraie: true,
          justification: "Exact, la radiographie standard forme directement une image de projection, sans étape de reconstruction mathématique.",
        },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
  ],
};
