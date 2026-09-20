import type { Fiche } from '../../types';

export const ficheTissusMusculaires: Fiche = {
  id: 'histo-tissus-musculaires',
  ue: 'histo',
  titre: 'Les tissus musculaires',
  sousTitre: 'Muscle strié squelettique, muscle cardiaque et muscle lisse : organisation et comparaison',
  chapitre: 'Les tissus fondamentaux',
  ordre: 8,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'sarcomère',
    'myofibrille',
    'triade',
    'disque intercalaire',
    'muscle strié squelettique',
    'muscle cardiaque',
    'muscle lisse',
    'réticulum sarcoplasmique',
  ],
  objectifs: [
    "Décrire l’organisation générale du muscle strié squelettique, du myofilament au muscle entier.",
    "Décrire la structure du sarcomère et son rôle dans la contraction musculaire.",
    "Décrire la triade et son rôle dans le couplage excitation-contraction.",
    "Décrire les particularités structurales du muscle cardiaque, notamment le disque intercalaire.",
    "Comparer muscle strié squelettique, muscle cardiaque et muscle lisse.",
  ],
  sections: [
    {
      id: 'organisation-muscle-strie',
      titre: 'Organisation du muscle strié squelettique',
      blocs: [
        {
          type: 'definition',
          terme: 'Fibre musculaire striée squelettique',
          definition:
            "Cellule musculaire géante, plurinucléée, résultant de la fusion embryonnaire de nombreux myoblastes, dont les noyaux sont refoulés en périphérie sous le sarcolemme.",
        },
        {
          type: 'etapes',
          titre: 'Organisation hiérarchique du muscle strié squelettique',
          etapes: [
            {
              titre: 'Muscle entier',
              detail: "Entouré d’une enveloppe conjonctive, l’épimysium, et composé de plusieurs faisceaux musculaires.",
            },
            {
              titre: 'Faisceau musculaire',
              detail: "Groupe de fibres musculaires entouré par le périmysium, tissu conjonctif intermédiaire.",
            },
            {
              titre: 'Fibre musculaire',
              detail: "Cellule musculaire individuelle, entourée par l’endomysium, contenant de nombreuses myofibrilles parallèles.",
            },
            {
              titre: 'Myofibrille',
              detail: "Structure cylindrique intracytoplasmique, formée d’une succession de sarcomères alignés bout à bout.",
            },
            {
              titre: 'Sarcomère',
              detail: "Unité contractile élémentaire du muscle strié, délimitée par deux stries Z successives.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Trois enveloppes conjonctives emboîtées',
          texte:
            "Retenir l’organisation emboîtée : épimysium autour du muscle entier, périmysium autour de chaque faisceau, endomysium autour de chaque fibre musculaire individuelle.",
        },
      ],
    },
    {
      id: 'sarcomere',
      titre: 'Le sarcomère',
      blocs: [
        {
          type: 'definition',
          terme: 'Sarcomère',
          definition:
            "Unité contractile de base du muscle strié, comprise entre deux stries Z consécutives, contenant des filaments fins d’actine et des filaments épais de myosine dont le glissement relatif produit la contraction musculaire.",
        },
        {
          type: 'tableau',
          titre: 'Les bandes et lignes du sarcomère',
          colonnes: ['Structure', 'Composition', 'Comportement à la contraction'],
          lignes: [
            ['Bande A (anisotrope)', 'Filaments épais de myosine, avec zone de chevauchement avec l’actine', 'Longueur constante pendant la contraction'],
            ['Bande I (isotrope)', 'Filaments fins d’actine seuls, sans myosine', 'Se raccourcit pendant la contraction'],
            ['Strie Z', 'Protéine d’ancrage (alpha-actinine) des filaments d’actine', 'Délimite les sarcomères entre eux ; les stries Z se rapprochent lors de la contraction'],
            ['Zone H', 'Région centrale de la bande A, dépourvue de filaments d’actine', 'Se raccourcit, voire disparaît lors d’une forte contraction'],
            ['Ligne M', 'Protéines d’ancrage des filaments épais de myosine, au centre du sarcomère', 'Longueur constante'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Théorie du glissement des filaments',
          texte:
            "La contraction musculaire résulte du glissement des filaments fins d’actine le long des filaments épais de myosine, sans raccourcissement des filaments eux-mêmes. Cela explique pourquoi la bande A garde une longueur constante alors que la bande I et la zone H se raccourcissent.",
        },
      ],
    },
    {
      id: 'triade-couplage',
      titre: 'La triade et le couplage excitation-contraction',
      blocs: [
        {
          type: 'definition',
          terme: 'Triade',
          definition:
            "Association structurale entre un tubule transverse (tubule T), invagination du sarcolemme, et deux citernes terminales du réticulum sarcoplasmique qui l’encadrent, assurant la transmission rapide et synchrone du signal électrique dans toute la fibre musculaire.",
        },
        {
          type: 'liste',
          items: [
            "Le tubule T conduit la dépolarisation membranaire en profondeur de la fibre musculaire, jusqu’au voisinage des myofibrilles.",
            "Le réticulum sarcoplasmique, forme spécialisée du réticulum endoplasmique lisse, stocke le calcium nécessaire à la contraction.",
            "La dépolarisation du tubule T déclenche la libération du calcium stocké dans le réticulum sarcoplasmique vers le cytoplasme.",
            "Le calcium libéré se fixe sur la troponine C, levant l’inhibition exercée par la tropomyosine sur le site de liaison de l’actine à la myosine.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Localisation de la triade dans le muscle squelettique humain',
          texte:
            "Chez l’être humain, dans le muscle strié squelettique, la triade se situe typiquement à la jonction entre bande A et bande I, soit deux triades par sarcomère.",
        },
      ],
    },
    {
      id: 'muscle-cardiaque',
      titre: 'Le muscle cardiaque',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le muscle cardiaque, ou myocarde, est un muscle strié dont l’organisation sarcomérique est identique à celle du muscle squelettique, mais qui présente des particularités structurales propres, liées à son fonctionnement automatique et synchronisé.",
        },
        {
          type: 'definition',
          terme: 'Disque intercalaire',
          definition:
            "Jonction spécialisée reliant bout à bout les cardiomyocytes voisins, associant des jonctions d’ancrage mécanique (desmosomes, jonctions adhérentes) et des jonctions communicantes (gap junctions) assurant la propagation rapide de l’influx électrique entre cellules.",
        },
        {
          type: 'tableau',
          titre: 'Particularités du cardiomyocyte',
          colonnes: ['Caractéristique', 'Description'],
          lignes: [
            ['Nombre de noyaux', 'Un ou deux noyaux centraux par cellule, à la différence du muscle squelettique plurinucléé périphérique'],
            ['Disque intercalaire', 'Jonction intercellulaire spécialisée, visible en microscopie photonique comme une ligne dense transversale'],
            ['Mitochondries', 'Très nombreuses, reflétant le métabolisme oxydatif intense et continu du cœur'],
            ['Triade', 'Remplacée par une dyade dans le muscle cardiaque (un tubule T associé à une seule citerne terminale)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre triade et dyade',
          texte:
            "Dans le muscle squelettique, un tubule T est encadré par deux citernes terminales du réticulum sarcoplasmique (triade). Dans le muscle cardiaque, l’association ne comporte qu’une seule citerne terminale pour un tubule T (dyade).",
        },
      ],
    },
    {
      id: 'muscle-lisse',
      titre: 'Le muscle lisse',
      blocs: [
        {
          type: 'definition',
          terme: 'Cellule musculaire lisse',
          definition:
            "Cellule fusiforme mononucléée, dépourvue de striations transversales visibles en microscopie photonique, dont les filaments d’actine et de myosine ne sont pas organisés en sarcomères réguliers.",
        },
        {
          type: 'liste',
          items: [
            "Le muscle lisse est retrouvé dans la paroi des viscères creux (tube digestif, voies urinaires, vaisseaux sanguins, utérus) et dans certains organes comme l’iris.",
            "Sa contraction est involontaire, sous contrôle du système nerveux autonome et de facteurs hormonaux et locaux.",
            "Les filaments d’actine s’ancrent sur des structures denses appelées corps denses, équivalents fonctionnels dispersés des stries Z du muscle strié.",
            "Sa contraction est plus lente et plus prolongée que celle du muscle strié, adaptée aux fonctions de tonus et de péristaltisme.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Régénération du muscle lisse',
          texte:
            "Contrairement au muscle strié squelettique dont la régénération dépend de cellules satellites, le muscle lisse conserve une capacité de division mitotique de ses propres cellules matures, ce qui facilite sa réparation après lésion.",
        },
      ],
    },
    {
      id: 'comparaison',
      titre: 'Comparaison des trois tissus musculaires',
      blocs: [
        {
          type: 'tableau',
          titre: 'Comparaison détaillée des trois types de muscle',
          colonnes: ['Caractéristique', 'Muscle strié squelettique', 'Muscle cardiaque', 'Muscle lisse'],
          lignes: [
            ['Striation', 'Présente', 'Présente', 'Absente'],
            ['Noyau', 'Multiples, périphériques', 'Un ou deux, centraux', 'Un seul, central'],
            ['Contrôle', 'Volontaire', 'Involontaire, automatique', 'Involontaire'],
            ['Jonction intercellulaire', 'Absente (cellules indépendantes)', 'Disque intercalaire', 'Jonctions communicantes (gap junctions)'],
            ['Association tubule T', 'Triade', 'Dyade', 'Absente (pas de système T organisé)'],
          ],
        },
        {
          type: 'comparaison',
          titre: 'Synthèse fonctionnelle',
          gauche: {
            titre: 'Muscles striés (squelettique et cardiaque)',
            points: [
              'Contraction rapide et puissante',
              'Organisation sarcomérique visible',
              'Riches en mitochondries, surtout le cardiaque',
            ],
          },
          droite: {
            titre: 'Muscle lisse',
            points: [
              'Contraction lente et prolongée',
              'Pas de sarcomères, ancrage sur corps denses',
              'Adapté au tonus vasculaire et au péristaltisme digestif',
            ],
          },
        },
      ],
    },
  ],
  pointsCles: [
    "L’organisation emboîtée du muscle strié va de l’épimysium (muscle entier) au sarcomère (unité contractile), en passant par le périmysium et l’endomysium.",
    "Le sarcomère, entre deux stries Z, contient bande A (myosine, longueur constante) et bande I (actine, se raccourcit).",
    "La triade associe un tubule T à deux citernes terminales du réticulum sarcoplasmique dans le muscle squelettique.",
    "Le muscle cardiaque possède des disques intercalaires et une dyade (une seule citerne terminale par tubule T), à la différence du muscle squelettique.",
    "Le muscle lisse est mononucléé, sans striation ni sarcomère organisé, avec des corps denses en lieu de stries Z.",
    "Le contrôle du muscle strié squelettique est volontaire ; celui du muscle cardiaque et du muscle lisse est involontaire.",
    "Le muscle lisse conserve une capacité de division mitotique propre, contrairement au muscle strié squelettique qui dépend des cellules satellites.",
  ],
  erreursFrequentes: [
    "Confondre triade (muscle squelettique, deux citernes) et dyade (muscle cardiaque, une seule citerne).",
    "Croire que la bande A se raccourcit pendant la contraction : c’est en réalité la bande I et la zone H qui se raccourcissent, la bande A restant de longueur constante.",
    "Penser que le muscle lisse possède des sarcomères organisés comme le muscle strié : il utilise des corps denses, sans striation visible.",
    "Oublier que le muscle cardiaque, bien que strié et involontaire, possède des disques intercalaires absents du muscle squelettique.",
    "Confondre endomysium (autour de chaque fibre), périmysium (autour de chaque faisceau) et épimysium (autour du muscle entier).",
    "Croire que toutes les cellules musculaires sont plurinucléées : seule la fibre musculaire striée squelettique l’est ; le cardiomyocyte et la cellule musculaire lisse sont mono- ou binucléés.",
  ],
  mnemotechniques: [
    {
      moyen: 'Épi-Péri-Endo, du plus large au plus fin',
      explication:
        "Épimysium (muscle entier), périmysium (faisceau), endomysium (fibre) : trois enveloppes conjonctives emboîtées, de la plus externe à la plus interne.",
    },
    {
      moyen: 'I comme Isolé, I comme raccourcit',
      explication:
        "La bande I, faite de filaments d’actine isolés (sans myosine), se raccourcit pendant la contraction, contrairement à la bande A qui reste constante.",
    },
    {
      moyen: 'Cardiaque = disCal + Dyade',
      explication:
        "Le muscle cardiaque se distingue par son disque intercalaire et sa dyade, à la différence du muscle squelettique (pas de disque, triade).",
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
      id: 'histo-tissus-musculaires-fc-01',
      recto: 'Quelles sont les trois enveloppes conjonctives du muscle strié squelettique, de la plus externe à la plus interne ?',
      verso: 'Épimysium (muscle entier), périmysium (faisceau), endomysium (fibre musculaire individuelle).',
      type: 'classification',
      tags: ['organisation musculaire'],
    },
    {
      id: 'histo-tissus-musculaires-fc-02',
      recto: 'Qu’est-ce qui délimite un sarcomère ?',
      verso: 'Deux stries Z consécutives.',
      type: 'definition',
      tags: ['sarcomère'],
    },
    {
      id: 'histo-tissus-musculaires-fc-03',
      recto: 'Quelle bande du sarcomère reste de longueur constante pendant la contraction ?',
      verso: 'La bande A, contenant les filaments épais de myosine.',
      type: 'mecanisme',
      tags: ['sarcomère'],
    },
    {
      id: 'histo-tissus-musculaires-fc-04',
      recto: 'Quelle bande du sarcomère se raccourcit pendant la contraction ?',
      verso: 'La bande I, contenant uniquement les filaments fins d’actine.',
      type: 'mecanisme',
      tags: ['sarcomère'],
    },
    {
      id: 'histo-tissus-musculaires-fc-05',
      recto: 'Qu’est-ce qu’une triade ?',
      verso: 'L’association d’un tubule T et de deux citernes terminales du réticulum sarcoplasmique, dans le muscle strié squelettique.',
      type: 'definition',
      tags: ['triade'],
    },
    {
      id: 'histo-tissus-musculaires-fc-06',
      recto: 'Quelle est la différence entre triade et dyade ?',
      verso: 'La triade (muscle squelettique) associe un tubule T à deux citernes ; la dyade (muscle cardiaque) n’en associe qu’une seule.',
      type: 'mecanisme',
      tags: ['triade', 'dyade'],
    },
    {
      id: 'histo-tissus-musculaires-fc-07',
      recto: 'Qu’est-ce qu’un disque intercalaire ?',
      verso: 'Une jonction spécialisée entre cardiomyocytes, associant desmosomes, jonctions adhérentes et jonctions communicantes.',
      type: 'definition',
      tags: ['muscle cardiaque'],
    },
    {
      id: 'histo-tissus-musculaires-fc-08',
      recto: 'Combien de noyaux possède un cardiomyocyte, et où sont-ils situés ?',
      verso: 'Un ou deux noyaux, situés en position centrale.',
      type: 'chiffre',
      tags: ['muscle cardiaque'],
    },
    {
      id: 'histo-tissus-musculaires-fc-09',
      recto: 'Sur quelles structures s’ancrent les filaments d’actine du muscle lisse, en l’absence de stries Z ?',
      verso: 'Sur des corps denses, équivalents fonctionnels dispersés des stries Z.',
      type: 'definition',
      tags: ['muscle lisse'],
    },
    {
      id: 'histo-tissus-musculaires-fc-10',
      recto: 'Le muscle lisse est-il mono- ou plurinucléé ?',
      verso: 'Mononucléé, avec un noyau central unique.',
      type: 'chiffre',
      tags: ['muscle lisse'],
    },
    {
      id: 'histo-tissus-musculaires-fc-11',
      recto: 'Quel type de muscle est sous contrôle volontaire ?',
      verso: 'Le muscle strié squelettique.',
      type: 'classification',
      tags: ['comparaison'],
    },
    {
      id: 'histo-tissus-musculaires-fc-12',
      recto: 'Quel ion déclenche la contraction musculaire en se fixant sur la troponine C ?',
      verso: 'Le calcium (Ca2+), libéré par le réticulum sarcoplasmique.',
      type: 'mecanisme',
      tags: ['couplage excitation-contraction'],
    },
  ],
  qcm: [
    {
      id: 'histo-tissus-musculaires-qcm-01',
      enonce: 'Concernant l’organisation générale du muscle strié squelettique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’épimysium entoure l’ensemble du muscle.',
          vraie: true,
          justification: 'Exact, c’est l’enveloppe conjonctive la plus externe.',
        },
        {
          lettre: 'B',
          texte: 'L’endomysium entoure chaque faisceau musculaire.',
          vraie: false,
          justification: 'Faux : c’est le périmysium qui entoure chaque faisceau ; l’endomysium entoure chaque fibre individuelle.',
        },
        {
          lettre: 'C',
          texte: 'La fibre musculaire striée squelettique est plurinucléée.',
          vraie: true,
          justification: 'Exact, résultant de la fusion embryonnaire de nombreux myoblastes.',
        },
        {
          lettre: 'D',
          texte: 'Les noyaux de la fibre musculaire striée squelettique sont typiquement centraux.',
          vraie: false,
          justification: 'Faux : ils sont refoulés en périphérie, sous le sarcolemme.',
        },
        {
          lettre: 'E',
          texte: 'La myofibrille est formée d’une succession de sarcomères alignés.',
          vraie: true,
          justification: 'Exact, c’est la définition structurale de la myofibrille.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir l’organisation emboîtée du muscle et la position périphérique des noyaux.',
      difficulte: 1,
    },
    {
      id: 'histo-tissus-musculaires-qcm-02',
      enonce: 'Concernant le sarcomère, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le sarcomère est délimité par deux stries Z consécutives.',
          vraie: true,
          justification: 'Exact, c’est la définition de l’unité contractile.',
        },
        {
          lettre: 'B',
          texte: 'La bande A contient uniquement des filaments fins d’actine.',
          vraie: false,
          justification: 'Faux : la bande A contient les filaments épais de myosine, avec une zone de chevauchement avec l’actine.',
        },
        {
          lettre: 'C',
          texte: 'La bande A garde une longueur constante pendant la contraction.',
          vraie: true,
          justification: 'Exact, c’est le glissement des filaments qui produit le raccourcissement, non leur propre raccourcissement.',
        },
        {
          lettre: 'D',
          texte: 'La bande I se raccourcit pendant la contraction musculaire.',
          vraie: true,
          justification: 'Exact, car les filaments d’actine glissent davantage vers le centre du sarcomère.',
        },
        {
          lettre: 'E',
          texte: 'La strie Z est composée essentiellement de filaments de myosine.',
          vraie: false,
          justification: 'Faux : la strie Z est le site d’ancrage des filaments d’actine, via l’alpha-actinine, et non de la myosine.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. La théorie du glissement des filaments explique le comportement différent des bandes A et I.',
      difficulte: 2,
    },
    {
      id: 'histo-tissus-musculaires-qcm-03',
      enonce: 'Concernant la triade et le couplage excitation-contraction, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le tubule T est une invagination du sarcolemme.',
          vraie: true,
          justification: 'Exact, il conduit la dépolarisation en profondeur de la fibre.',
        },
        {
          lettre: 'B',
          texte: 'La triade associe un tubule T à une seule citerne terminale du réticulum sarcoplasmique.',
          vraie: false,
          justification: 'Faux : la triade en associe deux ; une seule citerne caractérise la dyade cardiaque.',
        },
        {
          lettre: 'C',
          texte: 'Le réticulum sarcoplasmique stocke le calcium nécessaire à la contraction.',
          vraie: true,
          justification: 'Exact, c’est une forme spécialisée du réticulum endoplasmique lisse.',
        },
        {
          lettre: 'D',
          texte: 'Le calcium libéré se fixe sur la tropomyosine pour initier la contraction.',
          vraie: false,
          justification: 'Faux : le calcium se fixe sur la troponine C, ce qui lève l’inhibition exercée par la tropomyosine.',
        },
        {
          lettre: 'E',
          texte: 'Chez l’être humain, la triade se situe à la jonction entre bande A et bande I.',
          vraie: true,
          justification: 'Exact, soit deux triades par sarcomère.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer les cibles moléculaires du calcium : troponine C, pas tropomyosine directement.',
      difficulte: 2,
    },
    {
      id: 'histo-tissus-musculaires-qcm-04',
      enonce: 'Concernant le muscle cardiaque, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le cardiomyocyte possède un ou deux noyaux centraux.',
          vraie: true,
          justification: 'Exact, contrairement à la fibre squelettique plurinucléée périphérique.',
        },
        {
          lettre: 'B',
          texte: 'Le disque intercalaire comprend des jonctions communicantes.',
          vraie: true,
          justification: 'Exact, elles assurent la propagation rapide de l’influx électrique entre cellules.',
        },
        {
          lettre: 'C',
          texte: 'Le muscle cardiaque est dépourvu de striation.',
          vraie: false,
          justification: 'Faux : le muscle cardiaque est strié, son organisation sarcomérique étant identique à celle du muscle squelettique.',
        },
        {
          lettre: 'D',
          texte: 'Le cardiomyocyte présente une dyade plutôt qu’une triade.',
          vraie: true,
          justification: 'Exact, une seule citerne terminale est associée à chaque tubule T.',
        },
        {
          lettre: 'E',
          texte: 'Le contrôle de la contraction cardiaque est volontaire.',
          vraie: false,
          justification: 'Faux : la contraction cardiaque est involontaire et automatique.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Le muscle cardiaque est strié mais involontaire, avec des particularités propres.',
      difficulte: 2,
    },
    {
      id: 'histo-tissus-musculaires-qcm-05',
      enonce: 'Concernant le muscle lisse, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La cellule musculaire lisse est plurinucléée.',
          vraie: false,
          justification: 'Faux : elle est mononucléée, avec un noyau central unique.',
        },
        {
          lettre: 'B',
          texte: 'Les filaments d’actine s’ancrent sur des corps denses.',
          vraie: true,
          justification: 'Exact, équivalents fonctionnels dispersés des stries Z du muscle strié.',
        },
        {
          lettre: 'C',
          texte: 'Le muscle lisse présente des striations transversales visibles en microscopie photonique.',
          vraie: false,
          justification: 'Faux : le muscle lisse est dépourvu de striation, d’où son nom.',
        },
        {
          lettre: 'D',
          texte: 'Le muscle lisse conserve une capacité de division mitotique de ses cellules matures.',
          vraie: true,
          justification: 'Exact, contrairement au muscle strié squelettique qui dépend des cellules satellites.',
        },
        {
          lettre: 'E',
          texte: 'Le muscle lisse est retrouvé dans la paroi des viscères creux comme le tube digestif.',
          vraie: true,
          justification: 'Exact, ainsi que dans les vaisseaux sanguins et l’utérus.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Le muscle lisse se distingue nettement du muscle strié par sa cytologie et sa capacité de régénération.',
      difficulte: 2,
    },
    {
      id: 'histo-tissus-musculaires-qcm-06',
      enonce: 'Concernant la comparaison entre les trois types de muscle, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le muscle cardiaque et le muscle squelettique sont tous deux striés.',
          vraie: true,
          justification: 'Exact, à la différence du muscle lisse.',
        },
        {
          lettre: 'B',
          texte: 'Le muscle lisse possède des disques intercalaires.',
          vraie: false,
          justification: 'Faux : les disques intercalaires sont propres au muscle cardiaque.',
        },
        {
          lettre: 'C',
          texte: 'Le muscle squelettique est sous contrôle volontaire, le muscle lisse sous contrôle involontaire.',
          vraie: true,
          justification: 'Exact, c’est une différence fonctionnelle majeure entre ces deux tissus.',
        },
        {
          lettre: 'D',
          texte: 'Le muscle lisse possède une triade organisée comme le muscle squelettique.',
          vraie: false,
          justification: 'Faux : le muscle lisse ne possède pas de système de tubules T organisé en triade.',
        },
        {
          lettre: 'E',
          texte: 'Les jonctions communicantes (gap junctions) participent à la coordination des cellules du muscle lisse.',
          vraie: true,
          justification: 'Exact, elles permettent une contraction synchronisée de nombreuses cellules musculaires lisses voisines.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Les trois types musculaires diffèrent par leur striation, leur contrôle et leurs jonctions.',
      difficulte: 2,
    },
  ],
};
