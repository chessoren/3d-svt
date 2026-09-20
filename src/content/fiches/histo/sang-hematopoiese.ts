import type { Fiche } from '../../types';

export const ficheSangHematopoiese: Fiche = {
  id: 'histo-sang-hematopoiese',
  ue: 'histo',
  titre: "Le sang et l’hématopoïèse",
  sousTitre: 'Plasma, éléments figurés, hémogramme, moelle osseuse et différenciation des lignées sanguines',
  chapitre: 'Les tissus fondamentaux',
  ordre: 7,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'plasma',
    'hématie',
    'leucocyte',
    'plaquette',
    'hémogramme',
    'moelle osseuse',
    'cellule souche hématopoïétique',
    'érythropoïétine',
  ],
  objectifs: [
    "Décrire la composition du sang et distinguer plasma et sérum.",
    "Décrire la morphologie et la fonction des différents éléments figurés du sang.",
    "Citer les principales valeurs usuelles de l’hémogramme.",
    "Décrire l’organisation de la moelle osseuse hématopoïétique.",
    "Expliquer les grandes lignes de la différenciation des lignées myéloïde et lymphoïde.",
  ],
  sections: [
    {
      id: 'composition-sang',
      titre: 'Composition générale du sang',
      blocs: [
        {
          type: 'definition',
          terme: 'Sang',
          definition:
            "Tissu conjonctif liquide, circulant dans le système cardiovasculaire, composé d’une phase liquide, le plasma, et d’éléments figurés en suspension : hématies, leucocytes et plaquettes.",
        },
        {
          type: 'comparaison',
          titre: 'Plasma versus sérum',
          gauche: {
            titre: 'Plasma',
            points: [
              'Phase liquide du sang total non coagulé, obtenue après centrifugation en présence d’un anticoagulant',
              'Contient le fibrinogène et les autres facteurs de la coagulation',
              'Représente environ 55 % du volume sanguin total',
            ],
          },
          droite: {
            titre: 'Sérum',
            points: [
              'Phase liquide obtenue après coagulation spontanée du sang, puis centrifugation',
              'Dépourvu de fibrinogène, consommé lors de la coagulation',
              'Contient les mêmes protéines que le plasma, à l’exception des facteurs de coagulation consommés',
            ],
          },
        },
        {
          type: 'liste',
          items: [
            "Le plasma est composé à environ 90 % d’eau, et contient des protéines (albumine, globulines, fibrinogène), des électrolytes, des nutriments et des déchets métaboliques.",
            "L’albumine est la protéine plasmatique la plus abondante, assurant notamment le maintien de la pression oncotique.",
            "L’hématocrite désigne le pourcentage du volume sanguin total occupé par les hématies.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Hématocrite usuel',
          texte:
            "L’hématocrite normal se situe approximativement entre 40 et 52 % chez l’homme adulte et entre 36 et 48 % chez la femme adulte, reflétant la proportion volumique occupée par les hématies dans le sang total.",
        },
      ],
    },
    {
      id: 'elements-figures',
      titre: 'Les éléments figurés du sang',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les éléments figurés comprennent les hématies (globules rouges), les leucocytes (globules blancs) et les plaquettes (thrombocytes), chacun assurant une fonction spécifique.",
        },
        {
          type: 'tableau',
          titre: 'Les hématies (érythrocytes)',
          colonnes: ['Caractéristique', 'Description'],
          lignes: [
            ['Morphologie', 'Cellule anucléée, en disque biconcave, riche en hémoglobine'],
            ['Durée de vie', 'Environ 120 jours dans la circulation'],
            ['Fonction', 'Transport de l’oxygène des poumons vers les tissus, et participation au transport du dioxyde de carbone'],
            ['Devenir', 'Élimination par les macrophages de la rate et du foie en fin de vie (hémolyse physiologique)'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Les leucocytes (globules blancs)',
          colonnes: ['Type', 'Proportion approximative', 'Fonction principale'],
          lignes: [
            ['Polynucléaire neutrophile', 'Majoritaire parmi les leucocytes circulants', 'Phagocytose, défense antibactérienne, première ligne de l’inflammation aiguë'],
            ['Lymphocyte', 'Deuxième population en fréquence', 'Immunité spécifique cellulaire (lymphocyte T) et humorale (lymphocyte B)'],
            ['Monocyte', 'Population minoritaire', 'Précurseur circulant des macrophages tissulaires'],
            ['Polynucléaire éosinophile', 'Population minoritaire', 'Défense antiparasitaire, réactions allergiques'],
            ['Polynucléaire basophile', 'Population la plus rare', 'Libération d’histamine et d’héparine, réactions allergiques'],
          ],
        },
        {
          type: 'definition',
          terme: 'Plaquette (thrombocyte)',
          definition:
            "Fragment cytoplasmique anucléé, dépourvu de noyau, issu de la fragmentation du mégacaryocyte médullaire, impliqué dans l’hémostase primaire par formation du clou plaquettaire.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre plaquette et hématie',
          texte:
            "Les plaquettes et les hématies sont toutes deux anucléées, mais les plaquettes sont de simples fragments cytoplasmiques issus du mégacaryocyte, nettement plus petits que les hématies, qui sont des cellules à part entière ayant expulsé leur noyau au cours de leur maturation.",
        },
      ],
    },
    {
      id: 'hemogramme',
      titre: "Valeurs usuelles de l’hémogramme",
      blocs: [
        {
          type: 'tableau',
          titre: 'Valeurs usuelles indicatives chez l’adulte',
          colonnes: ['Paramètre', 'Valeur usuelle approximative'],
          lignes: [
            ['Hémoglobine (homme)', 'Environ 13 à 17 g/dL'],
            ['Hémoglobine (femme)', 'Environ 12 à 15 g/dL'],
            ['Leucocytes totaux', 'Environ 4 000 à 10 000 par microlitre'],
            ['Plaquettes', 'Environ 150 000 à 400 000 par microlitre'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Interpréter un hémogramme',
          texte:
            "L’hémogramme, ou numération formule sanguine, analyse quantitativement et qualitativement les trois lignées sanguines. Une anomalie isolée d’une lignée (anémie, leucopénie ou thrombopénie) oriente vers des causes très différentes de l’atteinte simultanée des trois lignées, appelée pancytopénie, qui évoque davantage une atteinte médullaire globale.",
        },
      ],
    },
    {
      id: 'moelle-osseuse',
      titre: 'La moelle osseuse hématopoïétique',
      blocs: [
        {
          type: 'definition',
          terme: 'Hématopoïèse',
          definition:
            "Ensemble des processus de production, de différenciation et de maturation des cellules sanguines, à partir de cellules souches hématopoïétiques, se déroulant essentiellement dans la moelle osseuse chez l’adulte.",
        },
        {
          type: 'liste',
          items: [
            "La moelle osseuse rouge, hématopoïétiquement active, est soutenue par un réseau de fibres réticulaires (collagène de type III) et de cellules stromales.",
            "Chez l’adulte, la moelle rouge se limite progressivement aux os plats (sternum, os iliaques, vertèbres, côtes) et aux épiphyses de certains os longs.",
            "La moelle jaune, riche en adipocytes, remplace progressivement la moelle rouge dans la diaphyse des os longs au cours de la croissance.",
            "La cellule souche hématopoïétique est pluripotente, capable d’autorenouvellement et de différenciation vers l’ensemble des lignées sanguines.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Hématopoïèse fœtale',
          texte:
            "Avant la naissance, l’hématopoïèse se déroule successivement dans le sac vitellin, puis dans le foie et la rate (hématopoïèse hépatosplénique fœtale), avant de se localiser définitivement dans la moelle osseuse à l’approche du terme.",
        },
      ],
    },
    {
      id: 'differenciation-lignees',
      titre: 'Différenciation des lignées sanguines',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La cellule souche hématopoïétique se différencie en deux grandes voies progénitrices, myéloïde et lymphoïde, chacune donnant naissance à plusieurs lignées matures sous l’effet de facteurs de croissance spécifiques.",
        },
        {
          type: 'tableau',
          titre: 'Voies de différenciation hématopoïétique',
          colonnes: ['Progéniteur', 'Lignées matures dérivées'],
          lignes: [
            ['Progéniteur myéloïde commun', 'Hématies, polynucléaires (neutrophiles, éosinophiles, basophiles), monocytes, plaquettes'],
            ['Progéniteur lymphoïde commun', 'Lymphocytes T, lymphocytes B, cellules natural killer'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Principaux facteurs de croissance hématopoïétiques',
          colonnes: ['Facteur de croissance', 'Lignée stimulée'],
          lignes: [
            ['Érythropoïétine (EPO)', 'Lignée érythrocytaire (hématies), sécrétée principalement par le rein'],
            ['Thrombopoïétine (TPO)', 'Lignée mégacaryocytaire (plaquettes), sécrétée principalement par le foie'],
            ['G-CSF (facteur de croissance des granulocytes)', 'Lignée granulocytaire, en particulier les polynucléaires neutrophiles'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Érythropoïétine et insuffisance rénale',
          texte:
            "L’érythropoïétine étant sécrétée principalement par le rein en réponse à l’hypoxie tissulaire, l’insuffisance rénale chronique s’accompagne fréquemment d’une anémie par déficit de production d’érythropoïétine, justifiant parfois un traitement substitutif.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le sang associe une phase liquide, le plasma, et des éléments figurés : hématies, leucocytes et plaquettes.",
    "Le sérum diffère du plasma par l’absence de fibrinogène, consommé lors de la coagulation.",
    "L’hématie est anucléée, en disque biconcave, avec une durée de vie d’environ 120 jours.",
    "Le polynucléaire neutrophile est le leucocyte le plus abondant ; le polynucléaire basophile le plus rare.",
    "L’hématopoïèse a lieu dans la moelle osseuse rouge chez l’adulte, à partir de cellules souches hématopoïétiques pluripotentes.",
    "Deux progéniteurs principaux : myéloïde (hématies, granulocytes, monocytes, plaquettes) et lymphoïde (lymphocytes, cellules NK).",
    "L’érythropoïétine, sécrétée par le rein, stimule spécifiquement la lignée érythrocytaire.",
  ],
  erreursFrequentes: [
    "Confondre plasma et sérum : le sérum est dépourvu de fibrinogène, consommé lors de la coagulation.",
    "Croire que les plaquettes sont des cellules à part entière : ce sont de simples fragments cytoplasmiques anucléés issus du mégacaryocyte.",
    "Penser que le polynucléaire basophile est le leucocyte le plus abondant, alors qu’il est au contraire le plus rare ; c’est le neutrophile qui domine.",
    "Oublier que l’hématopoïèse fœtale se déroule successivement dans le sac vitellin, le foie et la rate, avant de se fixer dans la moelle osseuse.",
    "Confondre érythropoïétine (stimule les hématies, origine rénale) et thrombopoïétine (stimule les plaquettes, origine hépatique).",
  ],
  mnemotechniques: [
    {
      moyen: 'Neutrophiles Nombreux, Basophiles rares',
      explication:
        'Ordre de fréquence décroissant des leucocytes : neutrophiles, lymphocytes, monocytes, éosinophiles, basophiles (les basophiles étant les plus rares).',
    },
    {
      moyen: 'EPO pour les Érythrocytes, sécrétée par les reins',
      explication:
        'L’érythropoïétine, principalement rénale, stimule spécifiquement la production d’hématies.',
    },
    {
      moyen: 'Sérum Sans fibrinogène',
      explication:
        'Le sérum est obtenu après coagulation, donc sans le fibrinogène consommé pendant ce processus, contrairement au plasma.',
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
      id: 'histo-sang-hematopoiese-fc-01',
      recto: 'Quelle est la différence entre plasma et sérum ?',
      verso: 'Le plasma est obtenu par centrifugation avec anticoagulant et contient le fibrinogène ; le sérum est obtenu après coagulation spontanée et en est dépourvu.',
      type: 'definition',
      tags: ['plasma', 'sérum'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-02',
      recto: 'Quelle est la durée de vie moyenne d’une hématie ?',
      verso: 'Environ 120 jours.',
      type: 'chiffre',
      tags: ['hématie'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-03',
      recto: 'Quel est le leucocyte le plus abondant dans le sang circulant ?',
      verso: 'Le polynucléaire neutrophile.',
      type: 'chiffre',
      tags: ['leucocytes'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-04',
      recto: 'Quel est le leucocyte le plus rare dans le sang circulant ?',
      verso: 'Le polynucléaire basophile.',
      type: 'chiffre',
      tags: ['leucocytes'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-05',
      recto: 'D’où proviennent les plaquettes sanguines ?',
      verso: 'De la fragmentation du cytoplasme du mégacaryocyte médullaire.',
      type: 'mecanisme',
      tags: ['plaquettes'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-06',
      recto: 'Où se déroule principalement l’hématopoïèse chez l’adulte ?',
      verso: 'Dans la moelle osseuse rouge, notamment des os plats et des vertèbres.',
      type: 'definition',
      tags: ['hématopoïèse'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-07',
      recto: 'Quels sont les deux grands progéniteurs issus de la cellule souche hématopoïétique ?',
      verso: 'Le progéniteur myéloïde commun et le progéniteur lymphoïde commun.',
      type: 'classification',
      tags: ['différenciation'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-08',
      recto: 'Quel facteur de croissance stimule spécifiquement la lignée érythrocytaire ?',
      verso: 'L’érythropoïétine (EPO), sécrétée principalement par le rein.',
      type: 'mecanisme',
      tags: ['facteurs de croissance'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-09',
      recto: 'Quel facteur de croissance stimule la lignée mégacaryocytaire ?',
      verso: 'La thrombopoïétine (TPO), sécrétée principalement par le foie.',
      type: 'mecanisme',
      tags: ['facteurs de croissance'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-10',
      recto: 'Dans quels organes se déroule l’hématopoïèse fœtale avant la localisation médullaire définitive ?',
      verso: 'Successivement dans le sac vitellin, puis le foie et la rate.',
      type: 'chiffre',
      tags: ['hématopoïèse fœtale'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-11',
      recto: 'Que signifie une pancytopénie ?',
      verso: 'Une atteinte simultanée des trois lignées sanguines (hématies, leucocytes, plaquettes), évoquant une atteinte médullaire globale.',
      type: 'clinique',
      tags: ['hémogramme'],
    },
    {
      id: 'histo-sang-hematopoiese-fc-12',
      recto: 'Pourquoi l’insuffisance rénale chronique peut-elle s’accompagner d’une anémie ?',
      verso: 'En raison du déficit de production d’érythropoïétine par le rein malade.',
      type: 'clinique',
      tags: ['érythropoïétine'],
    },
  ],
  qcm: [
    {
      id: 'histo-sang-hematopoiese-qcm-01',
      enonce: 'Concernant la composition du sang, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le plasma contient le fibrinogène.',
          vraie: true,
          justification: 'Exact, contrairement au sérum où il est consommé lors de la coagulation.',
        },
        {
          lettre: 'B',
          texte: 'Le sérum est obtenu par centrifugation d’un sang additionné d’un anticoagulant.',
          vraie: false,
          justification: 'Faux : c’est la définition du plasma ; le sérum est obtenu après coagulation spontanée.',
        },
        {
          lettre: 'C',
          texte: 'L’albumine est la protéine la plus abondante du plasma.',
          vraie: true,
          justification: 'Exact, elle assure notamment le maintien de la pression oncotique.',
        },
        {
          lettre: 'D',
          texte: 'L’hématocrite mesure la proportion volumique de leucocytes dans le sang.',
          vraie: false,
          justification: 'Faux : l’hématocrite mesure la proportion volumique occupée par les hématies, non par les leucocytes.',
        },
        {
          lettre: 'E',
          texte: 'Le plasma est composé majoritairement d’eau.',
          vraie: true,
          justification: 'Exact, environ 90 % de sa composition.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer plasma (avec fibrinogène) et sérum (sans fibrinogène).',
      difficulte: 1,
    },
    {
      id: 'histo-sang-hematopoiese-qcm-02',
      enonce: 'Concernant les hématies, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’hématie est une cellule nucléée à l’état mature.',
          vraie: false,
          justification: 'Faux : l’hématie mature est anucléée, ayant expulsé son noyau au cours de sa maturation.',
        },
        {
          lettre: 'B',
          texte: 'Sa forme caractéristique est un disque biconcave.',
          vraie: true,
          justification: 'Exact, cette forme optimise les échanges gazeux et la déformabilité.',
        },
        {
          lettre: 'C',
          texte: 'Sa durée de vie moyenne est d’environ 120 jours.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Les hématies sénescentes sont éliminées principalement par la rate et le foie.',
          vraie: true,
          justification: 'Exact, par les macrophages de ces organes.',
        },
        {
          lettre: 'E',
          texte: 'L’hématie assure exclusivement le transport de l’oxygène, sans rôle dans celui du dioxyde de carbone.',
          vraie: false,
          justification: 'Faux : elle participe aussi au transport du dioxyde de carbone.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. L’anucléation est une caractéristique clé de l’hématie mature.',
      difficulte: 1,
    },
    {
      id: 'histo-sang-hematopoiese-qcm-03',
      enonce: 'Concernant les leucocytes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le polynucléaire neutrophile est le leucocyte le plus fréquent dans le sang.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Le polynucléaire basophile est le leucocyte le plus abondant.',
          vraie: false,
          justification: 'Faux : c’est au contraire le plus rare des leucocytes circulants.',
        },
        {
          lettre: 'C',
          texte: 'Le monocyte est le précurseur circulant du macrophage tissulaire.',
          vraie: true,
          justification: 'Exact, il se différencie en macrophage après migration tissulaire.',
        },
        {
          lettre: 'D',
          texte: 'Le polynucléaire éosinophile joue un rôle dans la défense antiparasitaire.',
          vraie: true,
          justification: 'Exact, ainsi que dans les réactions allergiques.',
        },
        {
          lettre: 'E',
          texte: 'Le lymphocyte assure exclusivement l’immunité cellulaire, jamais l’immunité humorale.',
          vraie: false,
          justification: 'Faux : le lymphocyte T assure l’immunité cellulaire, le lymphocyte B l’immunité humorale via la production d’anticorps.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir l’ordre de fréquence des leucocytes et leurs fonctions respectives.',
      difficulte: 2,
    },
    {
      id: 'histo-sang-hematopoiese-qcm-04',
      enonce: 'Concernant les plaquettes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les plaquettes sont des cellules nucléées à part entière.',
          vraie: false,
          justification: 'Faux : ce sont de simples fragments cytoplasmiques anucléés.',
        },
        {
          lettre: 'B',
          texte: 'Les plaquettes proviennent de la fragmentation du mégacaryocyte médullaire.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Les plaquettes participent à l’hémostase primaire par formation du clou plaquettaire.',
          vraie: true,
          justification: 'Exact, c’est leur fonction principale.',
        },
        {
          lettre: 'D',
          texte: 'Les valeurs usuelles de plaquettes se situent approximativement entre 150 000 et 400 000 par microlitre.',
          vraie: true,
          justification: 'Exact, ce sont les valeurs usuelles indicatives de l’hémogramme.',
        },
        {
          lettre: 'E',
          texte: 'La thrombopoïétine, qui stimule leur production, est sécrétée principalement par la rate.',
          vraie: false,
          justification: 'Faux : la thrombopoïétine est sécrétée principalement par le foie.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. Les plaquettes ne sont pas des cellules mais des fragments cytoplasmiques anucléés.',
      difficulte: 2,
    },
    {
      id: 'histo-sang-hematopoiese-qcm-05',
      enonce: 'Concernant la moelle osseuse hématopoïétique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La moelle osseuse rouge est le siège principal de l’hématopoïèse chez l’adulte.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'La moelle jaune est particulièrement riche en adipocytes.',
          vraie: true,
          justification: 'Exact, elle remplace progressivement la moelle rouge dans la diaphyse des os longs.',
        },
        {
          lettre: 'C',
          texte: 'La cellule souche hématopoïétique est unipotente, ne pouvant donner qu’une seule lignée.',
          vraie: false,
          justification: 'Faux : elle est pluripotente, capable de se différencier vers l’ensemble des lignées sanguines.',
        },
        {
          lettre: 'D',
          texte: 'Avant la naissance, l’hématopoïèse se déroule notamment dans le foie et la rate.',
          vraie: true,
          justification: 'Exact, lors de la phase hépatosplénique fœtale, avant la localisation médullaire définitive.',
        },
        {
          lettre: 'E',
          texte: 'La moelle rouge est soutenue par un réseau de fibres réticulaires.',
          vraie: true,
          justification: 'Exact, ces fibres de collagène de type III forment la charpente du tissu hématopoïétique.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir la pluripotence de la cellule souche hématopoïétique.',
      difficulte: 2,
    },
    {
      id: 'histo-sang-hematopoiese-qcm-06',
      enonce: 'Concernant les facteurs de croissance hématopoïétiques, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’érythropoïétine stimule spécifiquement la lignée érythrocytaire.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'L’érythropoïétine est sécrétée principalement par le rein.',
          vraie: true,
          justification: 'Exact, en réponse à l’hypoxie tissulaire.',
        },
        {
          lettre: 'C',
          texte: 'La thrombopoïétine stimule la lignée granulocytaire.',
          vraie: false,
          justification: 'Faux : elle stimule la lignée mégacaryocytaire, productrice des plaquettes.',
        },
        {
          lettre: 'D',
          texte: 'Une insuffisance rénale chronique peut entraîner une anémie par déficit en érythropoïétine.',
          vraie: true,
          justification: 'Exact, c’est un mécanisme classique d’anémie dans cette pathologie.',
        },
        {
          lettre: 'E',
          texte: 'Le G-CSF stimule principalement la lignée granulocytaire.',
          vraie: true,
          justification: 'Exact, en particulier les polynucléaires neutrophiles.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Chaque facteur de croissance a une lignée cible privilégiée.',
      difficulte: 2,
    },
  ],
};
