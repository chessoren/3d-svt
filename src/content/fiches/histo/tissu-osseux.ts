import type { Fiche } from '../../types';

export const ficheTissuOsseux: Fiche = {
  id: 'histo-tissu-osseux',
  ue: 'histo',
  titre: 'Le tissu osseux',
  sousTitre: 'Cellules osseuses, matrice, organisation compacte et spongieuse, ossification et remodelage',
  chapitre: 'Les tissus fondamentaux',
  ordre: 6,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'ostéoblaste',
    'ostéocyte',
    'ostéoclaste',
    'ostéone',
    'ossification endochondrale',
    'ossification membranaire',
    'remodelage osseux',
    'hormone parathyroïdienne',
  ],
  objectifs: [
    "Décrire les trois types cellulaires du tissu osseux et leurs fonctions respectives.",
    "Décrire la composition de la matrice osseuse.",
    "Différencier os compact et os spongieux, et décrire l’organisation de l’ostéone.",
    "Distinguer ossification endochondrale et ossification membranaire.",
    "Expliquer les grands principes du remodelage osseux et de la régulation phosphocalcique.",
  ],
  sections: [
    {
      id: 'cellules-osseuses',
      titre: 'Les cellules du tissu osseux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le tissu osseux est un tissu conjonctif spécialisé, minéralisé, dont le renouvellement permanent repose sur l’équilibre entre trois types cellulaires aux fonctions opposées ou complémentaires.",
        },
        {
          type: 'tableau',
          titre: 'Les trois types cellulaires osseux',
          colonnes: ['Cellule', 'Origine', 'Localisation', 'Fonction'],
          lignes: [
            [
              'Ostéoblaste',
              'Cellule mésenchymateuse',
              'Surface osseuse, en couche continue',
              'Synthèse de la matrice organique (ostéoïde) et initiation de sa minéralisation',
            ],
            [
              'Ostéocyte',
              'Ostéoblaste emprisonné dans sa propre matrice',
              'Logette osseuse appelée ostéoplaste',
              'Entretien de la matrice, mécanotransduction, régulation de la minéralisation',
            ],
            [
              'Ostéoclaste',
              'Fusion de précurseurs hématopoïétiques de la lignée monocytaire',
              'Surface osseuse, dans une logette de résorption (lacune de Howship)',
              'Résorption de la matrice osseuse par sécrétion d’enzymes et d’acide',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une origine embryologique différente pour l’ostéoclaste',
          texte:
            "Contrairement à l’ostéoblaste et à l’ostéocyte, qui dérivent tous deux du mésenchyme, l’ostéoclaste est une cellule multinucléée dérivée de la lignée hématopoïétique monocytaire, apparentée aux macrophages.",
        },
        {
          type: 'definition',
          terme: 'Ostéoplaste (ou lacune ostéocytaire)',
          definition:
            "Logette creusée dans la matrice osseuse minéralisée, occupée par le corps cellulaire d’un ostéocyte, relié aux ostéocytes voisins par de fins canalicules permettant les échanges métaboliques.",
        },
      ],
    },
    {
      id: 'matrice-osseuse',
      titre: 'La matrice osseuse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La matrice osseuse associe une phase organique et une phase minérale, dont l’association confère à l’os sa résistance mécanique unique : rigidité et une certaine élasticité.",
        },
        {
          type: 'tableau',
          titre: 'Composition de la matrice osseuse',
          colonnes: ['Phase', 'Constituant principal', 'Rôle'],
          lignes: [
            ['Phase organique (ostéoïde)', 'Collagène de type I (environ 90 % des protéines), protéines non collagéniques (ostéocalcine)', 'Trame de soutien, élasticité'],
            ['Phase minérale', 'Cristaux d’hydroxyapatite, phosphate de calcium', 'Rigidité, dureté, réserve de calcium et de phosphate de l’organisme'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'L’ostéoïde précède la minéralisation',
          texte:
            "L’ostéoblaste sécrète d’abord une matrice organique non minéralisée, l’ostéoïde, qui se minéralise secondairement par dépôt de cristaux d’hydroxyapatite. Un défaut de minéralisation, comme dans l’ostéomalacie chez l’adulte ou le rachitisme chez l’enfant, se traduit par un excès d’ostéoïde non minéralisé.",
        },
      ],
    },
    {
      id: 'os-compact-spongieux',
      titre: 'Os compact et os spongieux',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Os compact versus os spongieux',
          gauche: {
            titre: 'Os compact (cortical)',
            points: [
              'Tissu dense, sans espace visible à l’œil nu',
              'Organisé en unités cylindriques appelées ostéones (systèmes de Havers)',
              'Localisation : diaphyse des os longs, périphérie des os',
              'Représente la majeure partie de la masse osseuse',
            ],
          },
          droite: {
            titre: 'Os spongieux (trabéculaire)',
            points: [
              'Réseau de travées osseuses anastomosées, délimitant des espaces médullaires',
              'Pas d’organisation en ostéones typiques',
              'Localisation : épiphyses des os longs, os courts, os plats',
              'Renouvellement métabolique plus rapide que l’os compact',
            ],
          },
        },
        {
          type: 'definition',
          terme: 'Ostéone (système de Havers)',
          definition:
            "Unité structurale et fonctionnelle de l’os compact, formée de lamelles osseuses concentriques disposées autour d’un canal central, le canal de Havers, qui contient des vaisseaux sanguins et des nerfs.",
        },
        {
          type: 'tableau',
          titre: 'Éléments constitutifs de l’ostéone',
          colonnes: ['Élément', 'Description'],
          lignes: [
            ['Canal de Havers', 'Canal central, contenant vaisseaux et nerfs'],
            ['Lamelles concentriques', 'Couches successives de matrice minéralisée entourant le canal de Havers'],
            ['Canaux de Volkmann', 'Canaux transversaux reliant les canaux de Havers entre eux et à la surface de l’os'],
            ['Ligne cémentante', 'Limite externe de l’ostéone, marquant la frontière avec l’ostéone voisin'],
          ],
        },
      ],
    },
    {
      id: 'ossification',
      titre: 'Les deux modes d’ossification',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La formation du squelette osseux au cours du développement suit deux processus distincts, selon qu’une ébauche cartilagineuse préexiste ou non.",
        },
        {
          type: 'comparaison',
          titre: 'Ossification endochondrale versus membranaire',
          gauche: {
            titre: 'Ossification endochondrale',
            points: [
              'À partir d’une ébauche de cartilage hyalin, progressivement détruite et remplacée par de l’os',
              'Concerne les os longs, les os courts et la base du crâne',
              'Se poursuit après la naissance au niveau du cartilage de croissance (physe)',
            ],
          },
          droite: {
            titre: 'Ossification membranaire (intramembraneuse)',
            points: [
              'Directement à partir du mésenchyme, sans étape cartilagineuse intermédiaire',
              'Concerne les os plats de la voûte du crâne et une partie de la clavicule',
              'Différenciation directe des cellules mésenchymateuses en ostéoblastes',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le cartilage de croissance',
          texte:
            "Le cartilage de croissance, ou physe, situé entre l’épiphyse et la métaphyse des os longs, assure la croissance en longueur de l’os par un processus continu d’ossification endochondrale jusqu’à la fin de la puberté, où il se soude (soudure épiphysaire).",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Fracture du cartilage de croissance',
          texte:
            "Une fracture touchant le cartilage de croissance chez l’enfant peut compromettre la croissance osseuse ultérieure du segment concerné, justifiant une prise en charge spécifique de ce type de lésion.",
        },
      ],
    },
    {
      id: 'remodelage',
      titre: 'Le remodelage osseux',
      blocs: [
        {
          type: 'definition',
          terme: 'Remodelage osseux',
          definition:
            "Processus physiologique permanent associant résorption osseuse par les ostéoclastes et formation osseuse par les ostéoblastes, permettant le renouvellement du tissu osseux, l’adaptation aux contraintes mécaniques et la réparation des microlésions.",
        },
        {
          type: 'etapes',
          titre: 'Le cycle de remodelage osseux',
          etapes: [
            {
              titre: 'Activation',
              detail:
                "Recrutement local de précurseurs ostéoclastiques à la surface osseuse, sous l’effet de signaux locaux ou hormonaux.",
            },
            {
              titre: 'Résorption',
              detail:
                "Les ostéoclastes creusent une lacune de Howship en dissolvant la phase minérale et en dégradant la matrice organique.",
            },
            {
              titre: 'Inversion',
              detail:
                "Disparition des ostéoclastes et arrivée de cellules préparant la surface pour la reconstruction osseuse.",
            },
            {
              titre: 'Formation',
              detail:
                "Les ostéoblastes comblent progressivement la lacune de résorption en déposant une nouvelle matrice ostéoïde, qui se minéralise ensuite.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Vitesse du remodelage osseux',
          texte:
            "Le squelette adulte se renouvelle intégralement sur plusieurs années grâce au remodelage osseux permanent, l’os spongieux se renouvelant nettement plus rapidement que l’os compact en raison de sa plus grande surface d’échange.",
        },
      ],
    },
    {
      id: 'regulation-phosphocalcique',
      titre: 'Régulation phosphocalcique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le tissu osseux constitue le principal réservoir de calcium et de phosphate de l’organisme. Le remodelage osseux est finement régulé par des hormones qui ajustent la calcémie et la phosphatémie.",
        },
        {
          type: 'tableau',
          titre: 'Principales hormones régulant le remodelage osseux',
          colonnes: ['Hormone', 'Origine', 'Effet principal sur l’os'],
          lignes: [
            ['Parathormone (PTH)', 'Glandes parathyroïdes', 'Stimule la résorption osseuse (indirectement via les ostéoblastes qui activent les ostéoclastes), augmentant la calcémie'],
            ['Calcitonine', 'Cellules C (parafolliculaires) de la thyroïde', 'Inhibe la résorption osseuse ostéoclastique, abaissant la calcémie'],
            ['Calcitriol (vitamine D active)', 'Synthèse cutanée puis activation rénale', 'Favorise l’absorption intestinale de calcium et la minéralisation osseuse'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La PTH agit indirectement sur l’ostéoclaste',
          texte:
            "L’ostéoclaste ne possède pas de récepteur à la parathormone : celle-ci agit d’abord sur l’ostéoblaste, qui exprime alors des signaux (dont le système RANK-ligand) stimulant la différenciation et l’activité des ostéoclastes.",
        },
      ],
    },
  ],
  pointsCles: [
    "Trois cellules osseuses : ostéoblaste (formation), ostéocyte (entretien, dans un ostéoplaste) et ostéoclaste (résorption, origine hématopoïétique).",
    "La matrice osseuse associe une phase organique (collagène I) et une phase minérale (hydroxyapatite), qui confèrent respectivement élasticité et rigidité.",
    "L’os compact est organisé en ostéones (systèmes de Havers) ; l’os spongieux forme un réseau de travées sans organisation en ostéones typique.",
    "L’ossification endochondrale part d’une ébauche cartilagineuse (os longs) ; l’ossification membranaire est directe à partir du mésenchyme (voûte du crâne).",
    "Le remodelage osseux alterne résorption ostéoclastique et formation ostéoblastique, selon un cycle continu.",
    "La parathormone augmente la calcémie en stimulant indirectement la résorption osseuse ; la calcitonine l’abaisse en inhibant les ostéoclastes.",
    "L’ostéoclaste ne possède pas de récepteur direct à la PTH : celle-ci agit via l’ostéoblaste.",
  ],
  erreursFrequentes: [
    "Croire que l’ostéoclaste dérive, comme l’ostéoblaste et l’ostéocyte, du mésenchyme : il dérive en réalité de la lignée hématopoïétique monocytaire.",
    "Confondre canal de Havers (central, longitudinal) et canaux de Volkmann (transversaux, reliant les canaux de Havers entre eux).",
    "Penser que l’ossification membranaire passe par une étape cartilagineuse : elle se fait directement à partir du mésenchyme.",
    "Croire que la PTH agit directement sur l’ostéoclaste : son action passe par l’ostéoblaste.",
    "Confondre calcitonine (abaisse la calcémie, thyroïde) et calcitriol (augmente l’absorption intestinale de calcium, forme active de la vitamine D).",
    "Oublier que l’ostéoïde est la matrice organique non minéralisée précédant la minéralisation définitive.",
  ],
  mnemotechniques: [
    {
      moyen: 'Blaste bâtit, Clase casse',
      explication:
        'L’ostéoblaste bâtit la matrice osseuse, l’ostéoclaste la détruit (résorption) : deux fonctions opposées et complémentaires.',
    },
    {
      moyen: 'PTH monte, Calcitonine calme',
      explication:
        'La parathormone augmente la calcémie en stimulant la résorption osseuse, la calcitonine l’abaisse en freinant les ostéoclastes.',
    },
    {
      moyen: 'Membranaire = pas de Modèle cartilagineux',
      explication:
        'L’ossification membranaire se fait sans passer par une ébauche cartilagineuse, à la différence de l’ossification endochondrale.',
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
      id: 'histo-tissu-osseux-fc-01',
      recto: 'Quelle cellule osseuse dérive de la lignée hématopoïétique monocytaire ?',
      verso: 'L’ostéoclaste, à la différence de l’ostéoblaste et de l’ostéocyte, d’origine mésenchymateuse.',
      type: 'definition',
      tags: ['cellules osseuses'],
    },
    {
      id: 'histo-tissu-osseux-fc-02',
      recto: 'Comment se nomme la logette occupée par un ostéocyte ?',
      verso: 'L’ostéoplaste, ou lacune ostéocytaire.',
      type: 'definition',
      tags: ['ostéocyte'],
    },
    {
      id: 'histo-tissu-osseux-fc-03',
      recto: 'Quelles sont les deux phases de la matrice osseuse ?',
      verso: 'Une phase organique (ostéoïde, collagène de type I) et une phase minérale (hydroxyapatite).',
      type: 'classification',
      tags: ['matrice osseuse'],
    },
    {
      id: 'histo-tissu-osseux-fc-04',
      recto: 'Quelle est l’unité structurale de l’os compact ?',
      verso: 'L’ostéone, ou système de Havers, formée de lamelles concentriques autour d’un canal de Havers.',
      type: 'definition',
      tags: ['os compact'],
    },
    {
      id: 'histo-tissu-osseux-fc-05',
      recto: 'Quel est le rôle des canaux de Volkmann ?',
      verso: 'Relier les canaux de Havers entre eux et à la surface de l’os, assurant la continuité vasculaire.',
      type: 'mecanisme',
      tags: ['os compact'],
    },
    {
      id: 'histo-tissu-osseux-fc-06',
      recto: 'Quelle est la différence entre ossification endochondrale et membranaire ?',
      verso: 'L’endochondrale part d’une ébauche cartilagineuse (os longs) ; la membranaire se fait directement à partir du mésenchyme (voûte du crâne).',
      type: 'mecanisme',
      tags: ['ossification'],
    },
    {
      id: 'histo-tissu-osseux-fc-07',
      recto: 'Où se situe le cartilage de croissance et quel est son rôle ?',
      verso: 'Entre épiphyse et métaphyse des os longs ; il assure la croissance en longueur par ossification endochondrale jusqu’à la puberté.',
      type: 'mecanisme',
      tags: ['cartilage de croissance'],
    },
    {
      id: 'histo-tissu-osseux-fc-08',
      recto: 'Comment se nomme la lacune de résorption creusée par l’ostéoclaste ?',
      verso: 'La lacune de Howship.',
      type: 'definition',
      tags: ['remodelage'],
    },
    {
      id: 'histo-tissu-osseux-fc-09',
      recto: 'Quelles sont les quatre étapes du cycle de remodelage osseux ?',
      verso: 'Activation, résorption, inversion, formation.',
      type: 'classification',
      tags: ['remodelage'],
    },
    {
      id: 'histo-tissu-osseux-fc-10',
      recto: 'Quel est l’effet de la parathormone sur la calcémie ?',
      verso: 'Elle l’augmente, en stimulant indirectement la résorption osseuse via l’ostéoblaste.',
      type: 'mecanisme',
      tags: ['régulation phosphocalcique'],
    },
    {
      id: 'histo-tissu-osseux-fc-11',
      recto: 'Quel est l’effet de la calcitonine sur la résorption osseuse ?',
      verso: 'Elle l’inhibe, en freinant l’activité des ostéoclastes, abaissant ainsi la calcémie.',
      type: 'mecanisme',
      tags: ['régulation phosphocalcique'],
    },
    {
      id: 'histo-tissu-osseux-fc-12',
      recto: 'Pourquoi l’ostéoclaste ne répond-il pas directement à la parathormone ?',
      verso: 'Parce qu’il ne possède pas de récepteur à la PTH ; celle-ci agit d’abord sur l’ostéoblaste, qui active ensuite l’ostéoclaste.',
      type: 'mecanisme',
      tags: ['régulation phosphocalcique'],
    },
  ],
  qcm: [
    {
      id: 'histo-tissu-osseux-qcm-01',
      enonce: 'Concernant les cellules du tissu osseux, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ostéoblaste synthétise la matrice organique de l’os.',
          vraie: true,
          justification: 'Exact, il sécrète l’ostéoïde, qui se minéralise secondairement.',
        },
        {
          lettre: 'B',
          texte: 'L’ostéocyte est un ostéoblaste emprisonné dans sa propre matrice.',
          vraie: true,
          justification: 'Exact, il se loge alors dans un ostéoplaste.',
        },
        {
          lettre: 'C',
          texte: 'L’ostéoclaste dérive du mésenchyme, comme l’ostéoblaste.',
          vraie: false,
          justification: 'Faux : l’ostéoclaste dérive de la lignée hématopoïétique monocytaire.',
        },
        {
          lettre: 'D',
          texte: 'L’ostéoclaste est une cellule multinucléée.',
          vraie: true,
          justification: 'Exact, résultant de la fusion de plusieurs précurseurs monocytaires.',
        },
        {
          lettre: 'E',
          texte: 'L’ostéocyte communique avec ses voisins par de fins canalicules.',
          vraie: true,
          justification: 'Exact, ce réseau canaliculaire permet les échanges métaboliques.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir la double origine cellulaire : mésenchymateuse pour ostéoblaste/ostéocyte, hématopoïétique pour ostéoclaste.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-osseux-qcm-02',
      enonce: 'Concernant la matrice osseuse, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le collagène de type I représente la majeure partie de la phase organique.',
          vraie: true,
          justification: 'Exact, environ 90 % des protéines de la matrice organique osseuse.',
        },
        {
          lettre: 'B',
          texte: 'L’hydroxyapatite confère à l’os sa rigidité.',
          vraie: true,
          justification: 'Exact, elle constitue la phase minérale de la matrice.',
        },
        {
          lettre: 'C',
          texte: 'L’ostéoïde désigne la matrice osseuse déjà minéralisée.',
          vraie: false,
          justification: 'Faux : l’ostéoïde désigne la matrice organique non encore minéralisée.',
        },
        {
          lettre: 'D',
          texte: 'Un défaut de minéralisation de l’ostéoïde caractérise l’ostéomalacie chez l’adulte.',
          vraie: true,
          justification: 'Exact, avec un équivalent pédiatrique appelé rachitisme.',
        },
        {
          lettre: 'E',
          texte: 'La phase minérale de l’os n’a aucun rôle dans l’homéostasie du calcium.',
          vraie: false,
          justification: 'Faux : l’os est au contraire le principal réservoir de calcium et de phosphate de l’organisme.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien distinguer phase organique (élasticité) et phase minérale (rigidité).',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-osseux-qcm-03',
      enonce: 'Concernant l’os compact et l’os spongieux, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’os compact est organisé en ostéones, ou systèmes de Havers.',
          vraie: true,
          justification: 'Exact, unité structurale et fonctionnelle de l’os compact.',
        },
        {
          lettre: 'B',
          texte: 'L’os spongieux forme la diaphyse des os longs.',
          vraie: false,
          justification: 'Faux : la diaphyse est constituée d’os compact ; l’os spongieux se trouve dans les épiphyses.',
        },
        {
          lettre: 'C',
          texte: 'Le canal de Havers contient des vaisseaux sanguins et des nerfs.',
          vraie: true,
          justification: 'Exact, il occupe le centre de chaque ostéone.',
        },
        {
          lettre: 'D',
          texte: 'L’os spongieux se renouvelle habituellement plus rapidement que l’os compact.',
          vraie: true,
          justification: 'Exact, en raison de sa plus grande surface d’échange.',
        },
        {
          lettre: 'E',
          texte: 'Les canaux de Volkmann sont orientés parallèlement à l’axe des ostéones.',
          vraie: false,
          justification: 'Faux : les canaux de Volkmann sont transversaux, reliant les canaux de Havers entre eux.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. L’ostéone reste l’unité de référence de l’os compact.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-osseux-qcm-04',
      enonce: 'Concernant les modes d’ossification, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ossification endochondrale part d’une ébauche de cartilage hyalin.',
          vraie: true,
          justification: 'Exact, progressivement détruite et remplacée par de l’os.',
        },
        {
          lettre: 'B',
          texte: 'Les os plats de la voûte du crâne se forment par ossification endochondrale.',
          vraie: false,
          justification: 'Faux : ils se forment par ossification membranaire, directement à partir du mésenchyme.',
        },
        {
          lettre: 'C',
          texte: 'Le cartilage de croissance permet la croissance en longueur des os longs.',
          vraie: true,
          justification: 'Exact, par un processus continu d’ossification endochondrale jusqu’à la puberté.',
        },
        {
          lettre: 'D',
          texte: 'L’ossification membranaire concerne les os longs.',
          vraie: false,
          justification: 'Faux : les os longs relèvent de l’ossification endochondrale.',
        },
        {
          lettre: 'E',
          texte: 'La soudure épiphysaire marque l’arrêt de la croissance en longueur.',
          vraie: true,
          justification: 'Exact, elle correspond à la disparition du cartilage de croissance.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Associer os longs à l’endochondrale et voûte du crâne à la membranaire.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-osseux-qcm-05',
      enonce: 'Concernant le remodelage osseux, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le remodelage osseux associe résorption ostéoclastique et formation ostéoblastique.',
          vraie: true,
          justification: 'Exact, c’est le principe fondamental du remodelage.',
        },
        {
          lettre: 'B',
          texte: 'La phase de résorption précède habituellement la phase de formation dans le cycle de remodelage.',
          vraie: true,
          justification: 'Exact : activation, résorption, inversion, puis formation.',
        },
        {
          lettre: 'C',
          texte: 'Le remodelage osseux cesse totalement après la fin de la croissance.',
          vraie: false,
          justification: 'Faux : le remodelage osseux se poursuit tout au long de la vie adulte.',
        },
        {
          lettre: 'D',
          texte: 'La lacune de Howship est creusée par les ostéoblastes.',
          vraie: false,
          justification: 'Faux : elle est creusée par les ostéoclastes, lors de la phase de résorption.',
        },
        {
          lettre: 'E',
          texte: 'Le remodelage permet l’adaptation de l’os aux contraintes mécaniques.',
          vraie: true,
          justification: 'Exact, en plus du renouvellement tissulaire et de la réparation des microlésions.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. Le remodelage est un processus physiologique continu, pas limité à la croissance.',
      difficulte: 2,
    },
    {
      id: 'histo-tissu-osseux-qcm-06',
      enonce: 'Concernant la régulation phosphocalcique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La parathormone est sécrétée par les glandes parathyroïdes.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'La parathormone agit directement sur l’ostéoclaste, qui possède un récepteur spécifique.',
          vraie: false,
          justification: 'Faux : l’ostéoclaste n’a pas de récepteur à la PTH ; l’action passe par l’ostéoblaste.',
        },
        {
          lettre: 'C',
          texte: 'La calcitonine est sécrétée par les cellules parafolliculaires (cellules C) de la thyroïde.',
          vraie: true,
          justification: 'Exact, distinctes des cellules folliculaires productrices des hormones thyroïdiennes.',
        },
        {
          lettre: 'D',
          texte: 'Le calcitriol favorise l’absorption intestinale de calcium.',
          vraie: true,
          justification: 'Exact, c’est la forme active de la vitamine D.',
        },
        {
          lettre: 'E',
          texte: 'La calcitonine augmente la calcémie en stimulant la résorption osseuse.',
          vraie: false,
          justification: 'Faux : la calcitonine abaisse la calcémie en inhibant l’activité des ostéoclastes.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir que PTH et calcitonine ont des effets opposés sur la calcémie.',
      difficulte: 2,
    },
  ],
};
