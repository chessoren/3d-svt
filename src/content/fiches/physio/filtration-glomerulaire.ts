import type { Fiche } from '../../types';

export const ficheFiltrationGlomerulaire: Fiche = {
  id: 'physio-filtration-glomerulaire',
  ue: 'physio',
  titre: 'Physiologie rénale : filtration glomérulaire',
  sousTitre: 'Néphron, barrière de filtration et débit de filtration glomérulaire',
  chapitre: 'Rénal et milieu intérieur',
  ordre: 7,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'néphron',
    'glomérule',
    'barrière de filtration',
    'débit de filtration glomérulaire',
    'clairance',
    'autorégulation rénale',
    'rétrocontrôle tubuloglomérulaire',
    'pression de filtration',
  ],
  objectifs: [
    'Décrire l’organisation générale du néphron et du glomérule rénal.',
    'Décrire les trois couches de la barrière de filtration glomérulaire.',
    'Expliquer les forces de Starling qui déterminent la pression nette de filtration.',
    'Définir le débit de filtration glomérulaire et la notion de clairance.',
    'Expliquer les mécanismes de l’autorégulation rénale et du rétrocontrôle tubuloglomérulaire.',
  ],
  sections: [
    {
      id: 'nephron',
      titre: 'Organisation du néphron',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le néphron est l’unité fonctionnelle du rein, au nombre d’environ un million par rein chez l’adulte. Chaque néphron comprend un corpuscule rénal (glomérule et capsule de Bowman), où se produit la filtration, et un système tubulaire, où s’effectuent réabsorption et sécrétion.",
        },
        {
          type: 'tableau',
          titre: 'Composants du néphron',
          colonnes: ['Segment', 'Fonction principale'],
          lignes: [
            ['Corpuscule rénal (glomérule + capsule de Bowman)', 'Filtration du plasma, formation de l’urine primitive'],
            ['Tube contourné proximal', 'Réabsorption majoritaire de l’eau, du sodium, du glucose, des acides aminés et des bicarbonates'],
            ['Anse de Henle', 'Multiplication à contre-courant, gradient de concentration médullaire'],
            ['Tube contourné distal', 'Ajustements fins, sécrétion de potassium et d’ions H+'],
            ['Tube collecteur', 'Ajustement final de la concentration urinaire sous contrôle hormonal'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Le glomérule est un réseau de capillaires alimenté par une artériole afférente et drainé par une artériole efférente, ce qui constitue une particularité anatomique majeure : contrairement à la plupart des lits capillaires de l’organisme, le capillaire glomérulaire est encadré par deux artérioles, ce qui permet une régulation fine et indépendante des pressions en amont et en aval.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Deux capillarisations rénales successives',
          texte:
            "Le sang rénal traverse successivement deux réseaux capillaires en série : le capillaire glomérulaire (filtration), puis le réseau capillaire péritubulaire (réabsorption et sécrétion), séparés par l’artériole efférente. Cette organisation en double capillarisation est propre au rein.",
        },
      ],
    },
    {
      id: 'barriere-filtration',
      titre: 'Barrière de filtration glomérulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La barrière de filtration glomérulaire sépare le sang capillaire de l’espace urinaire de la capsule de Bowman. Elle laisse passer l’eau et les petits solutés tout en retenant les grosses molécules et les cellules sanguines.",
        },
        {
          type: 'tableau',
          titre: 'Les trois couches de la barrière de filtration',
          colonnes: ['Couche', 'Structure', 'Propriété de sélectivité'],
          lignes: [
            ['Endothélium fenêtré du capillaire glomérulaire', 'Cellules endothéliales percées de larges pores (fenestrations)', 'Retient les éléments figurés du sang, laisse passer l’eau et les solutés'],
            ['Membrane basale glomérulaire', 'Réseau de collagène de type IV et de protéoglycanes chargés négativement', 'Sélectivité de taille et sélectivité de charge (repousse les anions comme l’albumine)'],
            ['Podocytes et diaphragme de fente', 'Cellules épithéliales aux pédicelles enchevêtrés formant des fentes de filtration', 'Dernier filtre, sélectivité de taille très fine'],
          ],
        },
        {
          type: 'definition',
          terme: 'Sélectivité de charge',
          definition:
            "Propriété de la membrane basale glomérulaire, riche en protéoglycanes chargés négativement, qui repousse électrostatiquement les molécules anioniques comme l’albumine (elle-même chargée négativement), limitant ainsi sa filtration bien plus que ne le voudrait sa seule taille.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Protéinurie glomérulaire',
          texte:
            "Une altération de la barrière de filtration, en particulier une perte de la sélectivité de charge (par exemple dans le syndrome néphrotique à lésions glomérulaires minimes) ou une atteinte structurelle des podocytes, entraîne le passage anormal de protéines plasmatiques, notamment d’albumine, dans l’urine.",
        },
      ],
    },
    {
      id: 'pression-filtration',
      titre: 'Forces déterminant la filtration glomérulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La filtration glomérulaire est un processus purement passif, gouverné par l’équilibre des forces de Starling appliquées au capillaire glomérulaire, comme pour tout lit capillaire, mais avec des pressions hydrostatiques bien plus élevées qu’ailleurs.",
        },
        {
          type: 'formule',
          expression: 'Pression nette de filtration = Pcg − Pcb − πcg',
          legende:
            "Pcg : pression hydrostatique capillaire glomérulaire (favorise la filtration) ; Pcb : pression hydrostatique dans la capsule de Bowman (s’oppose à la filtration) ; πcg : pression oncotique capillaire glomérulaire (s’oppose à la filtration). La pression oncotique de l’espace de Bowman est normalement négligeable car le filtrat est quasiment dépourvu de protéines.",
        },
        {
          type: 'tableau',
          titre: 'Valeurs usuelles des pressions glomérulaires',
          colonnes: ['Pression', 'Valeur approximative', 'Effet sur la filtration'],
          lignes: [
            ['Pression hydrostatique capillaire glomérulaire (Pcg)', 'environ 60 mmHg', 'Favorise la filtration'],
            ['Pression hydrostatique de la capsule de Bowman (Pcb)', 'environ 15 mmHg', 'S’oppose à la filtration'],
            ['Pression oncotique capillaire glomérulaire (πcg)', 'environ 29 mmHg', 'S’oppose à la filtration'],
            ['Pression nette de filtration', 'environ 16 mmHg', 'Résultante favorable à la filtration'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La pression oncotique glomérulaire augmente le long du capillaire',
          texte:
            "Contrairement aux capillaires systémiques, où la pression oncotique reste globalement stable, elle augmente progressivement le long du capillaire glomérulaire à mesure que l’eau est filtrée et que les protéines plasmatiques se concentrent dans le sang restant, ce qui réduit la filtration nette vers l’extrémité efférente du capillaire.",
        },
      ],
    },
    {
      id: 'dfg-clairance',
      titre: 'Débit de filtration glomérulaire et clairance',
      blocs: [
        {
          type: 'definition',
          terme: 'Débit de filtration glomérulaire (DFG)',
          definition:
            "Volume de plasma filtré par l’ensemble des glomérules par unité de temps. Sa valeur normale chez l’adulte jeune est d’environ 120 à 130 mL/min, soit environ 180 L par jour, alors que le volume urinaire final n’est que d’environ 1 à 2 L par jour, du fait de la réabsorption tubulaire massive.",
        },
        {
          type: 'definition',
          terme: 'Clairance rénale d’une substance',
          definition:
            "Volume virtuel de plasma totalement épuré de cette substance par le rein par unité de temps. Elle se calcule par la formule : clairance = (concentration urinaire × débit urinaire) / concentration plasmatique.",
        },
        {
          type: 'formule',
          expression: 'Clairance = (U × V) / P',
          legende:
            'U : concentration urinaire de la substance ; V : débit urinaire (volume/temps) ; P : concentration plasmatique de la substance.',
          unites: 'mL/min',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La créatinine comme marqueur usuel du DFG',
          texte:
            "L’inuline est le marqueur de référence théorique du DFG car elle est librement filtrée, ni réabsorbée ni sécrétée par le tubule, mais son usage reste expérimental. En pratique clinique, la créatinine endogène est utilisée comme marqueur approché du DFG : elle est librement filtrée mais fait l’objet d’une légère sécrétion tubulaire, ce qui tend à surestimer légèrement le DFG réel.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordres de grandeur à retenir',
          texte:
            "DFG normal : environ 120 à 130 mL/min. Débit plasmatique rénal : environ 600 à 700 mL/min. Fraction de filtration (DFG/débit plasmatique rénal) : environ 20 %. Volume urinaire quotidien usuel : environ 1 à 2 L/jour.",
        },
      ],
    },
    {
      id: 'autoregulation',
      titre: 'Autorégulation rénale et rétrocontrôle tubuloglomérulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le rein maintient un débit de filtration glomérulaire remarquablement stable malgré des variations importantes de pression artérielle systémique, grâce à des mécanismes d’autorégulation intrinsèques, indépendants de l’innervation.",
        },
        {
          type: 'tableau',
          titre: 'Mécanismes d’autorégulation du DFG',
          colonnes: ['Mécanisme', 'Principe'],
          lignes: [
            ['Réponse myogénique de l’artériole afférente', 'Une augmentation de la pression artérielle étire la paroi de l’artériole afférente, ce qui déclenche sa vasoconstriction réflexe, limitant la transmission de la pression au glomérule'],
            ['Rétrocontrôle tubuloglomérulaire', 'La macula densa détecte la concentration en chlorure de sodium dans le tube distal et ajuste en retour le tonus de l’artériole afférente'],
          ],
        },
        {
          type: 'etapes',
          titre: 'Déroulement du rétrocontrôle tubuloglomérulaire',
          etapes: [
            {
              titre: 'Détection par la macula densa',
              detail:
                "Une augmentation du DFG accroît le débit tubulaire et donc la concentration de NaCl présentée à la macula densa, au niveau de la portion initiale du tube distal, à proximité du glomérule d’origine.",
            },
            {
              titre: 'Signal paracrine',
              detail:
                "La macula densa libère des médiateurs paracrines (notamment de l’adénosine) qui agissent localement sur l’artériole afférente de ce même néphron.",
            },
            {
              titre: 'Vasoconstriction de l’artériole afférente',
              detail:
                "Ces médiateurs provoquent une vasoconstriction de l’artériole afférente, ce qui réduit la pression hydrostatique capillaire glomérulaire et ramène le DFG vers sa valeur normale.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'L’appareil juxtaglomérulaire',
          texte:
            "La macula densa, les cellules granulaires (sécrétrices de rénine) de l’artériole afférente et les cellules mésangiales extraglomérulaires forment ensemble l’appareil juxtaglomérulaire, structure anatomique support à la fois du rétrocontrôle tubuloglomérulaire et de la sécrétion de rénine.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Limites de l’autorégulation',
          texte:
            "L’autorégulation rénale maintient un DFG stable pour des pressions artérielles moyennes comprises approximativement entre 80 et 180 mmHg. En dehors de cette plage, notamment en cas d’hypotension sévère, le DFG chute proportionnellement à la baisse de pression artérielle.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le néphron comprend un corpuscule rénal, siège de la filtration, et un système tubulaire, siège de la réabsorption et de la sécrétion.",
    "Le glomérule est encadré par une artériole afférente et une artériole efférente, permettant une régulation fine des pressions capillaires.",
    "La barrière de filtration comprend l’endothélium fenêtré, la membrane basale glomérulaire et les podocytes avec leur diaphragme de fente.",
    "La sélectivité de charge de la membrane basale limite la filtration des protéines anioniques comme l’albumine.",
    "Le DFG normal est d’environ 120 à 130 mL/min, résultant de l’équilibre des forces de Starling au niveau du capillaire glomérulaire.",
    "La clairance rénale se calcule par (concentration urinaire × débit urinaire) / concentration plasmatique.",
    "L’autorégulation rénale repose sur la réponse myogénique de l’artériole afférente et le rétrocontrôle tubuloglomérulaire médié par la macula densa.",
    "L’appareil juxtaglomérulaire associe macula densa, cellules granulaires et cellules mésangiales extraglomérulaires.",
  ],
  erreursFrequentes: [
    "Oublier la particularité du glomérule, encadré par deux artérioles (afférente et efférente), contrairement aux autres lits capillaires de l’organisme.",
    "Croire que la pression oncotique glomérulaire reste constante le long du capillaire : elle augmente progressivement du fait de la filtration d’eau.",
    "Confondre DFG (environ 120-130 mL/min) et débit urinaire final (environ 1 à 2 L/jour, soit moins de 1 mL/min) : la quasi-totalité du filtrat est réabsorbée.",
    "Penser que l’inuline est utilisée en routine clinique : c’est la créatinine qui est utilisée en pratique, l’inuline restant le marqueur de référence expérimental.",
    "Croire que le rétrocontrôle tubuloglomérulaire agit sur l’artériole efférente : il agit sur l’artériole afférente du même néphron.",
    "Oublier les limites de l’autorégulation rénale : elle ne fonctionne que dans une plage de pression artérielle moyenne définie, environ 80 à 180 mmHg.",
  ],
  mnemotechniques: [
    {
      moyen: '« Deux artérioles pour un glomérule »',
      explication:
        'Le glomérule, unique parmi les lits capillaires, est encadré par une artériole afférente en amont et une artériole efférente en aval.',
    },
    {
      moyen: '« Endothélium, membrane, podocyte »',
      explication:
        'Les trois couches de la barrière de filtration glomérulaire, de l’intérieur du capillaire vers l’espace urinaire.',
    },
    {
      moyen: '« Macula densa surveille, artériole afférente répond »',
      explication:
        'Le rétrocontrôle tubuloglomérulaire : la macula densa détecte le NaCl distal et ajuste le tonus de l’artériole afférente du même néphron.',
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
      id: 'physio-filtration-glomerulaire-fc-01',
      recto: 'Combien de néphrons compte chaque rein chez l’adulte, approximativement ?',
      verso: 'Environ un million par rein.',
      type: 'chiffre',
      tags: ['néphron'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-02',
      recto: 'Quelle particularité anatomique distingue le glomérule des autres lits capillaires ?',
      verso: 'Il est encadré par une artériole afférente et une artériole efférente, ce qui permet une régulation indépendante des pressions en amont et en aval.',
      type: 'definition',
      tags: ['glomérule'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-03',
      recto: 'Citer les trois couches de la barrière de filtration glomérulaire.',
      verso: 'L’endothélium fenêtré, la membrane basale glomérulaire, et les podocytes avec leur diaphragme de fente.',
      type: 'classification',
      tags: ['barrière de filtration'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-04',
      recto: 'Qu’est-ce que la sélectivité de charge de la membrane basale glomérulaire ?',
      verso: 'Sa richesse en protéoglycanes chargés négativement repousse électrostatiquement les molécules anioniques comme l’albumine.',
      type: 'mecanisme',
      tags: ['sélectivité de charge'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-05',
      recto: 'Donner la formule de la pression nette de filtration glomérulaire.',
      verso: 'Pression nette de filtration = pression hydrostatique capillaire glomérulaire − pression hydrostatique de la capsule de Bowman − pression oncotique capillaire glomérulaire.',
      type: 'formule',
      tags: ['pression de filtration'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-06',
      recto: 'Quelle est la valeur normale usuelle du débit de filtration glomérulaire ?',
      verso: 'Environ 120 à 130 mL/min.',
      type: 'chiffre',
      tags: ['DFG'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-07',
      recto: 'Donner la formule de la clairance rénale d’une substance.',
      verso: 'Clairance = (concentration urinaire × débit urinaire) / concentration plasmatique.',
      type: 'formule',
      tags: ['clairance'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-08',
      recto: 'Quel marqueur est le référent théorique du DFG, et lequel est utilisé en pratique clinique ?',
      verso: 'L’inuline est le marqueur de référence théorique ; la créatinine endogène est utilisée en pratique clinique.',
      type: 'classification',
      tags: ['clairance', 'créatinine'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-09',
      recto: 'Quel mécanisme myogénique participe à l’autorégulation rénale ?',
      verso: 'Une augmentation de pression artérielle étire l’artériole afférente, déclenchant sa vasoconstriction réflexe.',
      type: 'mecanisme',
      tags: ['autorégulation'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-10',
      recto: 'Quelle structure détecte la concentration de NaCl dans le rétrocontrôle tubuloglomérulaire ?',
      verso: 'La macula densa, au niveau de la portion initiale du tube contourné distal.',
      type: 'definition',
      tags: ['macula densa'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-11',
      recto: 'Sur quelle artériole agit le rétrocontrôle tubuloglomérulaire ?',
      verso: 'Sur l’artériole afférente du même néphron.',
      type: 'mecanisme',
      tags: ['rétrocontrôle tubuloglomérulaire'],
    },
    {
      id: 'physio-filtration-glomerulaire-fc-12',
      recto: 'Quelles structures composent l’appareil juxtaglomérulaire ?',
      verso: 'La macula densa, les cellules granulaires sécrétrices de rénine de l’artériole afférente, et les cellules mésangiales extraglomérulaires.',
      type: 'classification',
      tags: ['appareil juxtaglomérulaire'],
    },
  ],
  qcm: [
    {
      id: 'physio-filtration-glomerulaire-qcm-01',
      enonce: "Concernant l’organisation du néphron, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le corpuscule rénal comprend le glomérule et la capsule de Bowman.',
          vraie: true,
          justification: 'Exact : c’est le site de la filtration glomérulaire.',
        },
        {
          lettre: 'B',
          texte: 'Le glomérule n’est alimenté que par une seule artériole.',
          vraie: false,
          justification: "Faux : il est encadré par une artériole afférente et une artériole efférente.",
        },
        {
          lettre: 'C',
          texte: 'Le sang rénal traverse successivement deux réseaux capillaires en série.',
          vraie: true,
          justification: 'Exact : le capillaire glomérulaire, puis le réseau capillaire péritubulaire.',
        },
        {
          lettre: 'D',
          texte: 'La réabsorption tubulaire se produit dans le glomérule.',
          vraie: false,
          justification: "Faux : la réabsorption se produit dans le système tubulaire, en aval du glomérule.",
        },
        {
          lettre: 'E',
          texte: 'Le tube contourné proximal réabsorbe la majorité de l’eau et du sodium filtrés.',
          vraie: true,
          justification: 'Exact : il assure la réabsorption la plus massive du néphron.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. La double capillarisation rénale est une spécificité anatomique majeure du rein.',
      difficulte: 1,
    },
    {
      id: 'physio-filtration-glomerulaire-qcm-02',
      enonce: "Concernant la barrière de filtration glomérulaire, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: "L’endothélium capillaire glomérulaire est fenêtré.",
          vraie: true,
          justification: 'Exact, ce qui permet le passage de l’eau et des solutés tout en retenant les cellules sanguines.',
        },
        {
          lettre: 'B',
          texte: 'La membrane basale glomérulaire est dépourvue de charge électrique.',
          vraie: false,
          justification: 'Faux : elle est riche en protéoglycanes chargés négativement, à l’origine de la sélectivité de charge.',
        },
        {
          lettre: 'C',
          texte: 'Les podocytes forment des pédicelles enchevêtrés délimitant des fentes de filtration.',
          vraie: true,
          justification: 'Exact : c’est le dernier filtre avant l’espace urinaire.',
        },
        {
          lettre: 'D',
          texte: 'L’albumine est normalement largement filtrée en raison de sa petite taille.',
          vraie: false,
          justification: "Faux : sa filtration est très limitée, à la fois par sa taille relative et surtout par sa charge négative, repoussée par la membrane basale.",
        },
        {
          lettre: 'E',
          texte: 'Une perte de sélectivité de charge peut favoriser une protéinurie.',
          vraie: true,
          justification: 'Exact, comme dans le syndrome néphrotique à lésions glomérulaires minimes.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. La sélectivité de charge est essentielle pour limiter la filtration de l’albumine.',
      difficulte: 2,
    },
    {
      id: 'physio-filtration-glomerulaire-qcm-03',
      enonce: "Concernant les forces de Starling au niveau du glomérule, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La pression hydrostatique capillaire glomérulaire favorise la filtration.',
          vraie: true,
          justification: 'Exact, c’est la force motrice principale de la filtration glomérulaire.',
        },
        {
          lettre: 'B',
          texte: 'La pression oncotique capillaire glomérulaire favorise la filtration.',
          vraie: false,
          justification: "Faux : elle s’oppose à la filtration, en retenant l’eau dans le capillaire.",
        },
        {
          lettre: 'C',
          texte: 'La pression oncotique capillaire glomérulaire reste constante le long du capillaire.',
          vraie: false,
          justification: "Faux : elle augmente progressivement à mesure que l’eau est filtrée et que les protéines se concentrent.",
        },
        {
          lettre: 'D',
          texte: 'La pression hydrostatique de la capsule de Bowman s’oppose à la filtration.',
          vraie: true,
          justification: 'Exact, elle constitue une force contraire à la filtration.',
        },
        {
          lettre: 'E',
          texte: 'La pression nette de filtration résultante est habituellement favorable à la filtration.',
          vraie: true,
          justification: 'Exact, environ 16 mmHg en moyenne, favorable à la formation continue d’urine primitive.',
        },
      ],
      correction: 'Réponses exactes : A, D et E. La pression hydrostatique capillaire l’emporte sur les forces qui s’y opposent.',
      difficulte: 2,
    },
    {
      id: 'physio-filtration-glomerulaire-qcm-04',
      enonce: "Concernant le débit de filtration glomérulaire et la clairance, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le DFG normal est d’environ 120 à 130 mL/min.',
          vraie: true,
          justification: 'Exact : cette valeur, qui correspond à un volume filtré d’environ 180 L par jour, sert de référence pour évaluer la fonction rénale.',
        },
        {
          lettre: 'B',
          texte: 'Le volume urinaire final quotidien est proche du volume filtré quotidien.',
          vraie: false,
          justification: 'Faux : le volume filtré atteint environ 180 L/jour, très supérieur au volume urinaire final d’environ 1 à 2 L/jour, du fait de la réabsorption tubulaire massive.',
        },
        {
          lettre: 'C',
          texte: 'La clairance se calcule par le produit de la concentration urinaire et du débit urinaire, divisé par la concentration plasmatique.',
          vraie: true,
          justification: 'Exact : c’est la formule standard de la clairance rénale.',
        },
        {
          lettre: 'D',
          texte: 'La créatinine est totalement inerte sur le plan tubulaire, sans aucune sécrétion.',
          vraie: false,
          justification: 'Faux : elle fait l’objet d’une légère sécrétion tubulaire, ce qui tend à surestimer légèrement le DFG réel.',
        },
        {
          lettre: 'E',
          texte: 'L’inuline est le marqueur de référence théorique du DFG.',
          vraie: true,
          justification: 'Exact, car elle est librement filtrée, ni réabsorbée ni sécrétée.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le DFG est bien supérieur au débit urinaire final en raison de la réabsorption tubulaire.',
      difficulte: 2,
    },
    {
      id: 'physio-filtration-glomerulaire-qcm-05',
      enonce: "Concernant l’autorégulation rénale, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La réponse myogénique de l’artériole afférente entraîne sa vasoconstriction en cas d’élévation de pression artérielle.',
          vraie: true,
          justification: 'Exact, ce qui limite la transmission de la pression au glomérule.',
        },
        {
          lettre: 'B',
          texte: 'L’autorégulation rénale nécessite une innervation sympathique intacte.',
          vraie: false,
          justification: "Faux : c’est un mécanisme intrinsèque, indépendant de l’innervation, comme le montre sa persistance sur un rein dénervé.",
        },
        {
          lettre: 'C',
          texte: 'L’autorégulation maintient un DFG stable quelle que soit la valeur de la pression artérielle.',
          vraie: false,
          justification: "Faux : elle n’est efficace que dans une plage définie, approximativement entre 80 et 180 mmHg de pression artérielle moyenne.",
        },
        {
          lettre: 'D',
          texte: 'Le rétrocontrôle tubuloglomérulaire est médié par la macula densa.',
          vraie: true,
          justification: 'Exact : elle détecte la concentration de NaCl distale et ajuste le tonus de l’artériole afférente.',
        },
        {
          lettre: 'E',
          texte: "Une hypotension sévère, en dehors de la plage d’autorégulation, entraîne une baisse du DFG.",
          vraie: true,
          justification: 'Exact : en dessous de la plage d’autorégulation, le DFG chute proportionnellement à la pression artérielle.',
        },
      ],
      correction: 'Réponses exactes : A, D et E. L’autorégulation rénale est intrinsèque mais limitée à une plage de pression définie.',
      difficulte: 2,
    },
    {
      id: 'physio-filtration-glomerulaire-qcm-06',
      enonce: "Concernant l’appareil juxtaglomérulaire et le rétrocontrôle tubuloglomérulaire, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La macula densa fait partie du tube contourné proximal.',
          vraie: false,
          justification: 'Faux : elle se situe au niveau de la portion initiale du tube contourné distal.',
        },
        {
          lettre: 'B',
          texte: 'Une augmentation du DFG accroît la concentration de NaCl détectée par la macula densa.',
          vraie: true,
          justification: 'Exact : un débit tubulaire plus élevé laisse moins de temps à la réabsorption proximale, augmentant la charge de NaCl distale.',
        },
        {
          lettre: 'C',
          texte: 'Les cellules granulaires de l’artériole afférente sécrètent de la rénine.',
          vraie: true,
          justification: 'Exact, elles font partie de l’appareil juxtaglomérulaire.',
        },
        {
          lettre: 'D',
          texte: 'Le rétrocontrôle tubuloglomérulaire provoque une vasodilatation de l’artériole afférente en réponse à une augmentation du DFG.',
          vraie: false,
          justification: "Faux : il provoque une vasoconstriction de l’artériole afférente, ce qui ramène le DFG vers sa valeur normale.",
        },
        {
          lettre: 'E',
          texte: 'L’adénosine est un médiateur paracrine impliqué dans le rétrocontrôle tubuloglomérulaire.',
          vraie: true,
          justification: 'Exact, elle est libérée par la macula densa et agit localement sur l’artériole afférente.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Le rétrocontrôle tubuloglomérulaire est un mécanisme de rétrocontrôle négatif local, néphron par néphron.',
      difficulte: 2,
    },
  ],
};
