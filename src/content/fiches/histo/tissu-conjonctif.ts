import type { Fiche } from '../../types';

export const ficheTissuConjonctif: Fiche = {
  id: 'histo-tissu-conjonctif',
  ue: 'histo',
  titre: 'Le tissu conjonctif',
  sousTitre: 'Cellules fixes et migratrices, fibres, substance fondamentale et variétés tissulaires',
  chapitre: 'Les tissus fondamentaux',
  ordre: 4,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'fibroblaste',
    'macrophage',
    'collagène',
    'fibres élastiques',
    'substance fondamentale',
    'matrice extracellulaire',
    'tissu conjonctif lâche',
    'tissu conjonctif dense',
  ],
  objectifs: [
    "Définir le tissu conjonctif et décrire ses trois composants fondamentaux.",
    "Distinguer les cellules fixes (résidentes) et les cellules migratrices (mobiles) du tissu conjonctif.",
    "Décrire la structure et les propriétés des fibres de collagène, élastiques et réticulaires.",
    "Caractériser la composition et le rôle de la substance fondamentale.",
    "Classer les principales variétés de tissus conjonctifs et leur localisation.",
  ],
  sections: [
    {
      id: 'generalites',
      titre: 'Généralités et composants fondamentaux',
      blocs: [
        {
          type: 'definition',
          terme: 'Tissu conjonctif',
          definition:
            "Tissu de soutien et de remplissage, d’origine mésenchymateuse, caractérisé par une faible densité cellulaire et une abondante matrice extracellulaire. Il assure des fonctions de soutien mécanique, de nutrition des épithéliums avasculaires, de défense immunitaire et de réparation tissulaire.",
        },
        {
          type: 'liste',
          items: [
            "Le tissu conjonctif comporte trois composants : des cellules, des fibres et une substance fondamentale.",
            "Les fibres et la substance fondamentale constituent ensemble la matrice extracellulaire.",
            "Contrairement à l’épithélium, le tissu conjonctif est richement vascularisé et innervé.",
            "Il dérive du mésenchyme embryonnaire, lui-même issu du mésoderme.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un continuum de tissus',
          texte:
            "Le terme de tissu conjonctif recouvre un ensemble très hétérogène de tissus, du tissu conjonctif lâche richement cellulaire au tissu conjonctif dense pauvre en cellules, en passant par le tissu adipeux, le cartilage et l’os, qui partagent une origine mésenchymateuse commune.",
        },
      ],
    },
    {
      id: 'cellules-fixes',
      titre: 'Les cellules fixes (résidentes)',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cellules fixes résident de façon permanente dans le tissu conjonctif et assurent principalement la synthèse et l’entretien de la matrice extracellulaire.",
        },
        {
          type: 'tableau',
          titre: 'Principales cellules fixes du tissu conjonctif',
          colonnes: ['Cellule', 'Fonction principale', 'Aspect caractéristique'],
          lignes: [
            ['Fibroblaste', 'Synthèse des fibres (collagène, élastine) et de la substance fondamentale', 'Cellule fusiforme, noyau ovale allongé, cytoplasme peu visible en HES'],
            ['Fibrocyte', 'Forme quiescente du fibroblaste, activité de synthèse réduite', 'Noyau plus condensé, cytoplasme rare'],
            ['Adipocyte', 'Stockage lipidique, fonction endocrine (adipokines)', 'Grande cellule, noyau périphérique refoulé'],
            ['Cellule mésenchymateuse indifférenciée (péricyte)', 'Précurseur capable de se différencier en plusieurs lignées conjonctives', 'Cellule périvasculaire, peu différenciée'],
            ['Mastocyte', 'Libération de médiateurs de l’inflammation (histamine, héparine)', 'Cytoplasme rempli de granulations métachromatiques'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Fibroblaste actif et fibrocyte quiescent',
          texte:
            "Le fibroblaste et le fibrocyte désignent le même type cellulaire à des états d’activité différents : le fibroblaste, métaboliquement actif, synthétise activement la matrice, tandis que le fibrocyte, quiescent, l’entretient a minima. Ils ne constituent pas deux lignées distinctes.",
        },
      ],
    },
    {
      id: 'cellules-migratrices',
      titre: 'Les cellules migratrices (mobiles)',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cellules migratrices proviennent de la circulation sanguine et transitent temporairement dans le tissu conjonctif, principalement dans le cadre de la défense immunitaire et de l’inflammation.",
        },
        {
          type: 'tableau',
          titre: 'Principales cellules migratrices du tissu conjonctif',
          colonnes: ['Cellule', 'Origine', 'Fonction principale'],
          lignes: [
            ['Macrophage', 'Monocyte sanguin ayant migré et différencié dans le tissu', 'Phagocytose, présentation antigénique, sécrétion de cytokines'],
            ['Lymphocyte', 'Circulation sanguine et lymphatique', 'Immunité spécifique cellulaire et humorale'],
            ['Plasmocyte', 'Différenciation terminale du lymphocyte B', 'Sécrétion d’anticorps (immunoglobulines)'],
            ['Polynucléaire (neutrophile, éosinophile)', 'Moelle osseuse, via la circulation sanguine', 'Réponse inflammatoire aiguë, défense antiparasitaire (éosinophile)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Inflammation et recrutement cellulaire',
          texte:
            "Lors d’une inflammation aiguë, les polynucléaires neutrophiles sont les premières cellules migratrices recrutées dans le tissu conjonctif, suivis par les monocytes qui se différencient localement en macrophages pour assurer la phase de détersion et de réparation.",
        },
      ],
    },
    {
      id: 'fibres',
      titre: 'Les fibres du tissu conjonctif',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Trois types de fibres protéiques composent la matrice extracellulaire, synthétisées par les fibroblastes : les fibres de collagène, les fibres réticulaires et les fibres élastiques. Elles diffèrent par leur composition, leur organisation et leurs propriétés mécaniques.",
        },
        {
          type: 'tableau',
          titre: 'Les trois types de fibres conjonctives',
          colonnes: ['Fibre', 'Protéine constitutive', 'Propriété mécanique', 'Coloration caractéristique'],
          lignes: [
            ['Fibres de collagène', 'Collagène, essentiellement de type I', 'Grande résistance à la traction, peu extensible', 'Éosinophiles (roses en HES), jaunes au safran'],
            ['Fibres réticulaires', 'Collagène de type III', 'Réseau fin de soutien, souple', 'Non visibles en HES, révélées par imprégnation argentique (fibres argyrophiles)'],
            ['Fibres élastiques', 'Élastine associée à des microfibrilles de fibrilline', 'Grande extensibilité, retour à la forme initiale', 'Non visibles en HES, révélées par l’orcéine ou la résorcine-fuchsine'],
          ],
        },
        {
          type: 'definition',
          terme: 'Collagène',
          definition:
            "Famille de protéines fibreuses les plus abondantes de l’organisme, organisées en triple hélice. Plusieurs types existent selon les tissus : le type I domine dans le derme, l’os et les tendons ; le type II est caractéristique du cartilage hyalin ; le type III forme les fibres réticulaires ; le type IV constitue la lame basale.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les fibres réticulaires forment une charpente fine',
          texte:
            "Les fibres réticulaires, faites de collagène de type III, forment un réseau de soutien délicat autour des cellules et des petits vaisseaux, particulièrement développé dans les organes hématopoïétiques et lymphoïdes comme la moelle osseuse, la rate et les ganglions lymphatiques.",
        },
      ],
    },
    {
      id: 'substance-fondamentale',
      titre: 'La substance fondamentale',
      blocs: [
        {
          type: 'definition',
          terme: 'Substance fondamentale',
          definition:
            "Matériau amorphe, hydraté et visqueux, qui comble les espaces entre les cellules et les fibres du tissu conjonctif. Elle est composée de glycosaminoglycanes, de protéoglycanes et de glycoprotéines de structure.",
        },
        {
          type: 'tableau',
          titre: 'Principaux constituants de la substance fondamentale',
          colonnes: ['Constituant', 'Exemple', 'Rôle'],
          lignes: [
            ['Glycosaminoglycane (GAG)', 'Acide hyaluronique, chondroïtine sulfate', 'Rétention d’eau, viscosité, résistance à la compression'],
            ['Protéoglycane', 'Association d’un GAG à une protéine axiale', 'Organisation structurale de la matrice, filtre moléculaire'],
            ['Glycoprotéine de structure', 'Fibronectine, laminine', 'Adhérence cellulaire, ancrage des cellules à la matrice'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Rôle physiologique de l’acide hyaluronique',
          texte:
            "L’acide hyaluronique, glycosaminoglycane non sulfaté de très haut poids moléculaire, retient une grande quantité d’eau et confère au tissu conjonctif ses propriétés de résistance à la compression, notamment dans le cartilage et le liquide synovial.",
        },
      ],
    },
    {
      id: 'variétés-tissulaires',
      titre: 'Variétés de tissus conjonctifs',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Selon la proportion respective de cellules, de fibres et de substance fondamentale, on distingue classiquement plusieurs variétés de tissu conjonctif proprement dit.",
        },
        {
          type: 'tableau',
          titre: 'Principales variétés de tissu conjonctif',
          colonnes: ['Variété', 'Caractéristique', 'Localisation'],
          lignes: [
            ['Tissu conjonctif lâche', 'Riche en cellules et en substance fondamentale, fibres peu denses, orientation aléatoire', 'Chorion des muqueuses, hypoderme, autour des vaisseaux'],
            ['Tissu conjonctif dense non orienté', 'Fibres de collagène abondantes, disposées sans orientation préférentielle', 'Derme profond'],
            ['Tissu conjonctif dense orienté', 'Fibres de collagène parallèles, orientées selon les lignes de force', 'Tendons, ligaments'],
            ['Tissu conjonctif réticulé', 'Réseau de fibres réticulaires soutenant les cellules hématopoïétiques ou lymphoïdes', 'Moelle osseuse, ganglions lymphatiques, rate'],
            ['Tissu conjonctif muqueux', 'Substance fondamentale abondante et peu de fibres, très hydraté', 'Gelée de Wharton du cordon ombilical'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Le tissu conjonctif dense orienté des tendons',
          texte:
            "Dans un tendon, les fibroblastes, appelés ténocytes, sont alignés en files parallèles entre des faisceaux de fibres de collagène de type I strictement parallèles à l’axe de traction, ce qui confère au tendon sa grande résistance mécanique unidirectionnelle.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le tissu conjonctif associe trois composants : des cellules, des fibres et une substance fondamentale, ces deux derniers formant la matrice extracellulaire.",
    "Les cellules fixes (fibroblaste, adipocyte, mastocyte) résident en permanence ; les cellules migratrices (macrophage, lymphocyte, polynucléaire) proviennent du sang.",
    "Trois types de fibres existent : collagène (résistance, éosinophile), réticulaire (collagène III, argyrophile) et élastique (extensibilité, orcéine).",
    "La substance fondamentale, riche en glycosaminoglycanes et protéoglycanes, retient l’eau et résiste à la compression.",
    "Le tissu conjonctif dense orienté (tendon) a des fibres parallèles ; le tissu conjonctif dense non orienté (derme profond) a des fibres sans orientation préférentielle.",
    "Le tissu conjonctif réticulé, à base de collagène III, soutient les organes hématopoïétiques et lymphoïdes.",
    "Le fibroblaste et le fibrocyte sont un même type cellulaire à deux états d’activité différents.",
  ],
  erreursFrequentes: [
    "Confondre fibres réticulaires (collagène III, argyrophiles) et fibres de collagène classiques (collagène I, éosinophiles).",
    "Croire que les macrophages sont des cellules fixes résidentes de naissance : ils dérivent de monocytes sanguins ayant migré dans le tissu.",
    "Considérer fibroblaste et fibrocyte comme deux lignées cellulaires distinctes, alors qu’il s’agit de deux états d’activité du même type cellulaire.",
    "Oublier que les fibres élastiques et réticulaires ne sont pas visibles en coloration HES standard et nécessitent des colorations spéciales.",
    "Confondre glycosaminoglycane et protéoglycane : le protéoglycane est l’association d’un ou plusieurs glycosaminoglycanes à une protéine axiale.",
    "Penser que le tissu conjonctif est avasculaire comme l’épithélium : il est au contraire richement vascularisé et innervé.",
  ],
  mnemotechniques: [
    {
      moyen: 'FAM pour les cellules Fixes : Fibroblaste, Adipocyte, Mastocyte',
      explication:
        'Trois cellules résidentes permanentes du tissu conjonctif, à ne pas confondre avec les cellules migratrices d’origine sanguine.',
    },
    {
      moyen: 'Collagène Colle, Élastine Étire',
      explication:
        'Les fibres de collagène assurent la résistance à la traction (peu extensibles), les fibres élastiques permettent l’étirement et le retour à la forme initiale.',
    },
    {
      moyen: 'Trois R : Réticulaire, collagène de type III, Rate et moelle',
      explication:
        'Les fibres réticulaires, faites de collagène III, forment la charpente des organes hématopoïétiques et lymphoïdes comme la rate et la moelle osseuse.',
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
      id: 'histo-tissu-conjonctif-fc-01',
      recto: 'Quels sont les trois composants fondamentaux du tissu conjonctif ?',
      verso: 'Les cellules, les fibres et la substance fondamentale ; ces deux derniers forment la matrice extracellulaire.',
      type: 'definition',
      tags: ['généralités'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-02',
      recto: 'Quelle est la différence entre fibroblaste et fibrocyte ?',
      verso: 'Ce sont deux états d’activité du même type cellulaire : le fibroblaste est actif dans la synthèse matricielle, le fibrocyte est quiescent.',
      type: 'definition',
      tags: ['cellules fixes'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-03',
      recto: 'D’où proviennent les macrophages du tissu conjonctif ?',
      verso: 'De monocytes sanguins ayant migré dans le tissu et s’étant différenciés localement.',
      type: 'mecanisme',
      tags: ['cellules migratrices'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-04',
      recto: 'Quelle cellule sécrète l’histamine et l’héparine dans le tissu conjonctif ?',
      verso: 'Le mastocyte, reconnaissable à ses granulations métachromatiques.',
      type: 'definition',
      tags: ['mastocyte'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-05',
      recto: 'Quel type de collagène compose les fibres réticulaires ?',
      verso: 'Le collagène de type III.',
      type: 'chiffre',
      tags: ['fibres', 'collagène'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-06',
      recto: 'Comment sont révélées les fibres élastiques, non visibles en HES ?',
      verso: 'Par des colorations spéciales comme l’orcéine ou la résorcine-fuchsine.',
      type: 'mecanisme',
      tags: ['fibres élastiques', 'coloration'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-07',
      recto: 'Quel type de collagène est caractéristique du cartilage hyalin ?',
      verso: 'Le collagène de type II.',
      type: 'chiffre',
      tags: ['collagène'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-08',
      recto: 'Que forme l’association d’un glycosaminoglycane et d’une protéine axiale ?',
      verso: 'Un protéoglycane.',
      type: 'definition',
      tags: ['substance fondamentale'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-09',
      recto: 'Quel glycosaminoglycane est particulièrement responsable de la rétention d’eau dans la matrice ?',
      verso: 'L’acide hyaluronique, glycosaminoglycane non sulfaté de très haut poids moléculaire.',
      type: 'chiffre',
      tags: ['substance fondamentale'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-10',
      recto: 'Quelle est l’organisation des fibres de collagène dans un tendon ?',
      verso: 'Des fibres parallèles, orientées selon l’axe de traction, caractéristique du tissu conjonctif dense orienté.',
      type: 'classification',
      tags: ['tissu conjonctif dense'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-11',
      recto: 'Où trouve-t-on typiquement le tissu conjonctif réticulé ?',
      verso: 'Dans les organes hématopoïétiques et lymphoïdes : moelle osseuse, rate, ganglions lymphatiques.',
      type: 'classification',
      tags: ['tissu réticulé'],
    },
    {
      id: 'histo-tissu-conjonctif-fc-12',
      recto: 'Quelle cellule est la première recrutée lors d’une inflammation aiguë ?',
      verso: 'Le polynucléaire neutrophile.',
      type: 'clinique',
      tags: ['inflammation'],
    },
  ],
  qcm: [
    {
      id: 'histo-tissu-conjonctif-qcm-01',
      enonce: 'Concernant les caractéristiques générales du tissu conjonctif, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il est constitué de cellules, de fibres et d’une substance fondamentale.',
          vraie: true,
          justification: 'Exact, ce sont ses trois composants fondamentaux.',
        },
        {
          lettre: 'B',
          texte: 'Il est avasculaire, comme les épithéliums.',
          vraie: false,
          justification: 'Faux : le tissu conjonctif est richement vascularisé, contrairement aux épithéliums.',
        },
        {
          lettre: 'C',
          texte: 'Il dérive du mésenchyme embryonnaire.',
          vraie: true,
          justification: 'Exact, lui-même issu du mésoderme.',
        },
        {
          lettre: 'D',
          texte: 'Les fibres et la substance fondamentale constituent la matrice extracellulaire.',
          vraie: true,
          justification: 'Exact, la matrice extracellulaire regroupe ces deux composants non cellulaires.',
        },
        {
          lettre: 'E',
          texte: 'Il assure exclusivement une fonction de soutien mécanique.',
          vraie: false,
          justification: 'Faux : il assure aussi la nutrition des épithéliums, la défense immunitaire et la réparation tissulaire.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le tissu conjonctif a des fonctions multiples, bien au-delà du simple soutien.',
      difficulte: 1,
    },
    {
      id: 'histo-tissu-conjonctif-qcm-02',
      enonce: 'Concernant les cellules fixes et migratrices du tissu conjonctif, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le fibroblaste et le fibrocyte représentent deux lignées cellulaires distinctes.',
          vraie: false,
          justification: 'Faux : ce sont deux états d’activité d’un même type cellulaire.',
        },
        {
          lettre: 'B',
          texte: 'Le macrophage dérive d’un monocyte sanguin.',
          vraie: true,
          justification: 'Exact, après migration tissulaire et différenciation.',
        },
        {
          lettre: 'C',
          texte: 'Le plasmocyte est une cellule fixe résidente du tissu conjonctif.',
          vraie: false,
          justification: 'Faux : c’est une cellule migratrice, issue de la différenciation terminale du lymphocyte B.',
        },
        {
          lettre: 'D',
          texte: 'Le mastocyte contient des granulations métachromatiques.',
          vraie: true,
          justification: 'Exact, ce qui permet de le repérer sur une coupe colorée.',
        },
        {
          lettre: 'E',
          texte: 'L’adipocyte est une cellule fixe du tissu conjonctif.',
          vraie: true,
          justification: 'Exact, résidente et spécialisée dans le stockage lipidique.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Bien distinguer les cellules résidentes (fixes) des cellules d’origine sanguine (migratrices).',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-conjonctif-qcm-03',
      enonce: 'Concernant les fibres du tissu conjonctif, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les fibres de collagène sont majoritairement de type I dans le derme.',
          vraie: true,
          justification: 'Exact, le collagène de type I est le plus abondant dans le derme, l’os et les tendons.',
        },
        {
          lettre: 'B',
          texte: 'Les fibres réticulaires sont bien visibles en coloration HES standard.',
          vraie: false,
          justification: 'Faux : elles nécessitent une imprégnation argentique pour être révélées (fibres argyrophiles).',
        },
        {
          lettre: 'C',
          texte: 'Les fibres élastiques sont composées d’élastine et de microfibrilles de fibrilline.',
          vraie: true,
          justification: 'Exact, cette association leur confère leurs propriétés d’extensibilité.',
        },
        {
          lettre: 'D',
          texte: 'Le collagène de type IV est caractéristique de la lame basale.',
          vraie: true,
          justification: 'Exact, il diffère du collagène fibrillaire de type I, II ou III.',
        },
        {
          lettre: 'E',
          texte: 'Les fibres de collagène sont peu résistantes à la traction.',
          vraie: false,
          justification: 'Faux : elles sont au contraire très résistantes à la traction, bien que peu extensibles.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir la spécificité de chaque type de collagène selon le tissu.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-conjonctif-qcm-04',
      enonce: 'Concernant la substance fondamentale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est composée de glycosaminoglycanes, de protéoglycanes et de glycoprotéines de structure.',
          vraie: true,
          justification: 'Exact, ce sont ses trois grandes familles de constituants.',
        },
        {
          lettre: 'B',
          texte: 'L’acide hyaluronique est un exemple de glycoprotéine de structure.',
          vraie: false,
          justification: 'Faux : c’est un glycosaminoglycane, non un exemple de glycoprotéine de structure comme la fibronectine.',
        },
        {
          lettre: 'C',
          texte: 'Un protéoglycane associe un ou plusieurs glycosaminoglycanes à une protéine axiale.',
          vraie: true,
          justification: 'Exact, c’est la définition structurale du protéoglycane.',
        },
        {
          lettre: 'D',
          texte: 'La fibronectine participe à l’adhérence des cellules à la matrice.',
          vraie: true,
          justification: 'Exact, c’est une glycoprotéine de structure impliquée dans l’ancrage cellulaire.',
        },
        {
          lettre: 'E',
          texte: 'La substance fondamentale est un matériau essentiellement fibreux.',
          vraie: false,
          justification: 'Faux : elle est amorphe et hydratée, à distinguer des fibres qui sont un autre composant de la matrice.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. L’acide hyaluronique reste le glycosaminoglycane de référence pour la rétention d’eau.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-conjonctif-qcm-05',
      enonce: 'Concernant les variétés de tissu conjonctif, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le tissu conjonctif dense orienté présente des fibres de collagène parallèles.',
          vraie: true,
          justification: 'Exact, comme dans les tendons et les ligaments.',
        },
        {
          lettre: 'B',
          texte: 'Le tissu conjonctif lâche est pauvre en cellules et en substance fondamentale.',
          vraie: false,
          justification: 'Faux : il est au contraire riche en cellules et en substance fondamentale, avec des fibres peu denses.',
        },
        {
          lettre: 'C',
          texte: 'Le tissu conjonctif réticulé soutient les organes hématopoïétiques et lymphoïdes.',
          vraie: true,
          justification: 'Exact, comme la moelle osseuse, la rate et les ganglions lymphatiques.',
        },
        {
          lettre: 'D',
          texte: 'Le derme profond est un exemple de tissu conjonctif dense non orienté.',
          vraie: true,
          justification: 'Exact, ses fibres de collagène y sont abondantes mais sans orientation préférentielle.',
        },
        {
          lettre: 'E',
          texte: 'La gelée de Wharton du cordon ombilical est un exemple de tissu conjonctif dense orienté.',
          vraie: false,
          justification: 'Faux : c’est un exemple de tissu conjonctif muqueux, très hydraté et pauvre en fibres.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Chaque variété de tissu conjonctif correspond à une organisation adaptée à sa fonction.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-conjonctif-qcm-06',
      enonce: 'Concernant l’inflammation et le recrutement cellulaire dans le tissu conjonctif, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le polynucléaire neutrophile est la première cellule recrutée lors d’une inflammation aiguë.',
          vraie: true,
          justification: 'Exact, c’est la cellule de la phase précoce de la réponse inflammatoire.',
        },
        {
          lettre: 'B',
          texte: 'Les monocytes se différencient localement en macrophages dans le tissu enflammé.',
          vraie: true,
          justification: 'Exact, cette différenciation participe à la phase de détersion et de réparation.',
        },
        {
          lettre: 'C',
          texte: 'Le polynucléaire éosinophile joue un rôle dans la défense antiparasitaire.',
          vraie: true,
          justification: 'Exact, c’est l’une de ses fonctions caractéristiques.',
        },
        {
          lettre: 'D',
          texte: 'Les plasmocytes sont les premières cellules recrutées lors d’une inflammation aiguë.',
          vraie: false,
          justification: 'Faux : ce sont les polynucléaires neutrophiles qui interviennent en premier, les plasmocytes relèvent de l’immunité humorale plus tardive.',
        },
        {
          lettre: 'E',
          texte: 'Les lymphocytes ne participent jamais au tissu conjonctif.',
          vraie: false,
          justification: 'Faux : les lymphocytes sont des cellules migratrices qui peuvent transiter dans le tissu conjonctif, notamment lors de réponses immunitaires.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Retenir la chronologie du recrutement cellulaire lors de l’inflammation.',
      difficulte: 2,
    },
  ],
};
