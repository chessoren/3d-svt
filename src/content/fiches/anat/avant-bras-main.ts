import type { Fiche } from '../../types';

export const ficheAvantBrasMain: Fiche = {
  id: 'anat-avant-bras-main',
  ue: 'anat',
  titre: 'Membre supérieur : avant-bras et main',
  sousTitre: 'Radius, ulna, coude, prono-supination, carpe, loges de l’avant-bras, nerfs médian, ulnaire et radial',
  chapitre: 'Membres',
  ordre: 10,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'radius',
    'ulna',
    'articulation du coude',
    'pronation',
    'supination',
    'carpe',
    'nerf médian',
    'nerf ulnaire',
    'nerf radial',
  ],
  objectifs: [
    "Décrire les os de l’avant-bras et leurs principaux repères.",
    "Décrire les trois articulations du complexe du coude et le mécanisme de la prono-supination.",
    "Situer les os du carpe et décrire l’organisation générale du poignet et de la main.",
    "Différencier les loges musculaires de l’avant-bras selon leur action et leur innervation.",
    "Décrire le territoire et les principales atteintes cliniques des nerfs médian, ulnaire et radial.",
  ],
  sections: [
    {
      id: 'os-avant-bras',
      titre: 'Les os de l’avant-bras',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’avant-bras comprend deux os longs parallèles, le radius latéralement et l’ulna médialement (en position anatomique de référence), reliés par une membrane interosseuse qui participe à la transmission des contraintes et à la stabilité du complexe.",
        },
        {
          type: 'tableau',
          titre: 'Repères des deux os de l’avant-bras',
          colonnes: ['Os', 'Extrémité proximale', 'Extrémité distale'],
          lignes: [
            ['Radius', 'Tête radiale, col, tubérosité radiale', 'Processus styloïde radial, surface articulaire pour le carpe'],
            ['Ulna', 'Olécrâne, processus coronoïde, incisure trochléaire, incisure radiale', 'Tête ulnaire, processus styloïde ulnaire'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'La membrane interosseuse antébrachiale',
          texte:
            "Cette membrane fibreuse tendue entre les bords interosseux du radius et de l’ulna transmet une partie des contraintes axiales de la main vers l’humérus et sert de zone d’insertion à plusieurs muscles profonds de l’avant-bras.",
        },
      ],
    },
    {
      id: 'coude-pronosupination',
      titre: 'Le complexe articulaire du coude et la prono-supination',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le coude est en réalité un complexe de trois articulations partageant une cavité synoviale commune, entourées par une capsule unique, ce qui explique que la pathologie synoviale ou l’épanchement articulaire s’étende à l’ensemble du complexe.",
        },
        {
          type: 'tableau',
          titre: 'Les trois articulations du coude',
          colonnes: ['Articulation', 'Surfaces', 'Type', 'Mouvement'],
          lignes: [
            ['Huméro-ulnaire', 'Trochlée humérale, incisure trochléaire de l’ulna', 'Trochléenne (ginglyme)', 'Flexion, extension'],
            ['Huméroradiale', 'Capitulum huméral, fovéa de la tête radiale', 'Sphéroïde, fonctionnellement associée à la trochléenne', 'Flexion, extension, accompagne la prono-supination'],
            ['Radio-ulnaire proximale', 'Circonférence articulaire de la tête radiale, incisure radiale de l’ulna', 'Trochoïde (pivot)', 'Rotation : pronation, supination'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "La pronation et la supination résultent de la rotation du radius autour de l’ulna, qui reste fixe. Ce mouvement combine la rotation de la tête radiale dans l’articulation radio-ulnaire proximale et le déplacement de l’extrémité distale du radius autour de la tête ulnaire, dans l’articulation radio-ulnaire distale.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un seul os tourne autour de l’autre',
          texte:
            "Retenir que c’est le radius qui pivote autour de l’ulna, et non l’inverse : en pronation, le radius croise par-dessus l’ulna, orientant la paume vers l’arrière ; en supination, le radius revient parallèle à l’ulna, orientant la paume vers l’avant.",
        },
      ],
    },
    {
      id: 'carpe-main',
      titre: 'Le carpe, le métacarpe et l’organisation générale de la main',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le squelette de la main comprend trois segments successifs : le carpe, formé de huit petits os courts disposés en deux rangées, le métacarpe, formé de cinq os longs, et les phalanges des doigts.",
        },
        {
          type: 'tableau',
          titre: 'Les huit os du carpe',
          colonnes: ['Rangée', 'Os (de latéral en médial)'],
          lignes: [
            ['Proximale', 'Scaphoïde, lunatum, triquétrum, pisiforme'],
            ['Distale', 'Trapèze, trapézoïde, capitatum, hamatum'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Fracture du scaphoïde',
          texte:
            "Le scaphoïde carpien est l’os du carpe le plus fréquemment fracturé, classiquement après une chute sur la paume de la main en hyperextension du poignet. Sa vascularisation rétrograde, dépendant essentiellement d’une entrée distale, l’expose à un risque élevé de pseudarthrose ou de nécrose avasculaire du fragment proximal.",
        },
        {
          type: 'liste',
          items: [
            "Chaque métacarpien s’articule proximalement avec un os du carpe et distalement avec la phalange proximale du doigt correspondant.",
            "Chaque doigt long comporte trois phalanges (proximale, moyenne, distale) ; le pouce n’en comporte que deux.",
            "L’articulation trapézométacarpienne du pouce, en selle, autorise l’opposition, mouvement caractéristique de la main humaine.",
          ],
        },
      ],
    },
    {
      id: 'loges-avant-bras',
      titre: 'Les loges musculaires de l’avant-bras',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’avant-bras est divisé par la membrane interosseuse et les fascias en une loge antérieure, fléchisseuse et pronatrice, et une loge postérieure, extensrice et supinatrice.",
        },
        {
          type: 'tableau',
          titre: 'Organisation générale des loges de l’avant-bras',
          colonnes: ['Loge', 'Fonction générale', 'Innervation principale', 'Exemples de muscles'],
          lignes: [
            ['Antérieure superficielle', 'Flexion du poignet et des doigts, pronation', 'Nerf médian (sauf le fléchisseur ulnaire du carpe)', 'Rond pronateur, fléchisseur radial du carpe, fléchisseur ulnaire du carpe, fléchisseur superficiel des doigts'],
            ['Antérieure profonde', 'Flexion des doigts, pronation', 'Nerf médian (nerf interosseux antérieur) et nerf ulnaire', 'Fléchisseur profond des doigts, long fléchisseur du pouce, carré pronateur'],
            ['Postérieure superficielle', 'Extension du poignet et des doigts', 'Nerf radial (branche profonde, nerf interosseux postérieur)', 'Extenseur des doigts, extenseur ulnaire du carpe, extenseur radial du carpe'],
            ['Postérieure profonde', 'Extension et abduction du pouce, supination', 'Nerf radial (branche profonde)', 'Supinateur, long abducteur du pouce, court et long extenseurs du pouce'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Une règle simple pour l’innervation de l’avant-bras',
          texte:
            "En première approximation, la loge antérieure (fléchisseurs) est innervée par le nerf médian, la loge postérieure (extenseurs) par le nerf radial. Le nerf ulnaire fait exception en innervant deux muscles de la loge antérieure : le fléchisseur ulnaire du carpe et la moitié médiale du fléchisseur profond des doigts.",
        },
      ],
    },
    {
      id: 'nerfs-terminaux',
      titre: 'Les nerfs médian, ulnaire et radial',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les trois grands nerfs terminaux du plexus brachial destinés à l’avant-bras et à la main ont chacun un trajet, un territoire moteur et un territoire sensitif caractéristiques, dont la connaissance est indispensable à l’examen clinique neurologique du membre supérieur.",
        },
        {
          type: 'tableau',
          titre: 'Territoires et atteintes cliniques classiques',
          colonnes: ['Nerf', 'Territoire moteur principal', 'Atteinte clinique classique'],
          lignes: [
            ['Médian', 'Muscles fléchisseurs de la loge antérieure (sauf exceptions ulnaires), muscles thénariens', 'Syndrome du canal carpien, par compression au poignet sous le rétinaculum des muscles fléchisseurs'],
            ['Ulnaire', 'Fléchisseur ulnaire du carpe, moitié médiale du fléchisseur profond des doigts, muscles intrinsèques de la main (sauf muscles thénariens et deux lombricaux latéraux)', 'Compression au coude dans le tunnel ulnaire (gouttière épitrochléo-olécrânienne), donnant une main en griffe'],
            ['Radial', 'Muscles extenseurs de la loge postérieure du bras et de l’avant-bras', 'Compression au bras (fracture de la diaphyse humérale) donnant une main tombante par paralysie des extenseurs du poignet et des doigts'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le signe de la main de singe',
          texte:
            "Une lésion complète et ancienne du nerf médian entraîne une amyotrophie de l’éminence thénar et une perte de l’opposition du pouce, donnant un aspect classiquement décrit comme la « main de singe », par disparition du relief thénarien et alignement du pouce dans le plan des autres doigts.",
        },
      ],
    },
    {
      id: 'muscles-intrinseques',
      titre: 'Les muscles intrinsèques de la main',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les muscles propres de la main, dits intrinsèques, se répartissent en trois groupes topographiques, distincts des muscles extrinsèques dont le corps charnu se situe dans l’avant-bras.",
        },
        {
          type: 'tableau',
          titre: 'Groupes de muscles intrinsèques de la main',
          colonnes: ['Groupe', 'Muscles principaux', 'Innervation', 'Action'],
          lignes: [
            [
              'Thénarien',
              'Court abducteur du pouce, court fléchisseur du pouce, opposant du pouce',
              'Nerf médian',
              'Mouvements du pouce, dont l’opposition',
            ],
            [
              'Hypothénarien',
              'Abducteur du petit doigt, court fléchisseur du petit doigt, opposant du petit doigt',
              'Nerf ulnaire',
              'Mouvements du petit doigt',
            ],
            [
              'Central (interosseux et lombricaux)',
              'Interosseux palmaires et dorsaux, muscles lombricaux',
              'Nerf ulnaire (interosseux, deux lombricaux médiaux) et nerf médian (deux lombricaux latéraux)',
              'Adduction et abduction des doigts (interosseux), flexion métacarpophalangienne associée à l’extension interphalangienne (lombricaux)',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'DAB et PAD pour les interosseux',
          texte:
            "Les interosseux dorsaux écartent les doigts de l’axe médian du majeur (abducteurs), tandis que les interosseux palmaires les rapprochent de cet axe (adducteurs) : DAB (Dorsal ABducteur) et PAD (Palmar ADducteur) résument ces actions opposées.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’avant-bras comprend le radius, latéral, et l’ulna, médial, reliés par la membrane interosseuse.",
    "Le coude regroupe trois articulations sous une capsule commune : huméro-ulnaire, huméroradiale et radio-ulnaire proximale.",
    "La pronation et la supination résultent de la rotation du radius autour de l’ulna, qui reste fixe.",
    "Le carpe comprend huit os répartis en deux rangées ; le scaphoïde est l’os le plus fréquemment fracturé.",
    "La loge antérieure de l’avant-bras est globalement innervée par le nerf médian, la loge postérieure par le nerf radial.",
    "Le nerf ulnaire innerve la plupart des muscles intrinsèques de la main, sauf les muscles thénariens et deux lombricaux latéraux, innervés par le médian.",
    "La compression du nerf médian au poignet réalise le syndrome du canal carpien ; celle du nerf radial au bras donne une main tombante.",
  ],
  erreursFrequentes: [
    "Croire que c’est l’ulna qui tourne autour du radius lors de la prono-supination, alors que c’est l’inverse.",
    "Oublier que le nerf ulnaire innerve deux muscles de la loge antérieure de l’avant-bras, exception à la règle générale médian-antérieur, radial-postérieur.",
    "Confondre l’atteinte du nerf radial, responsable d’une main tombante, et l’atteinte du nerf ulnaire, responsable d’une main en griffe.",
    "Situer le scaphoïde dans la rangée distale du carpe, alors qu’il appartient à la rangée proximale.",
    "Attribuer l’innervation de tous les muscles intrinsèques de la main au nerf médian, en oubliant le rôle prédominant du nerf ulnaire.",
  ],
  mnemotechniques: [
    {
      moyen: 'SLTP-TTCH pour le carpe',
      explication:
        'Rangée proximale : Scaphoïde, Lunatum, Triquétrum, Pisiforme. Rangée distale : Trapèze, Trapézoïde, Capitatum, Hamatum, de latéral en médial.',
    },
    {
      moyen: 'DAB-PAD pour les interosseux',
      explication:
        'Dorsaux ABducteurs, Palmaires ADducteurs : les interosseux dorsaux écartent les doigts, les palmaires les rapprochent.',
    },
  ],
  sources: [
    'Kamina, Anatomie clinique, tome 1, Anatomie générale, membres',
    'Drake, Vogl, Mitchell, Gray’s Anatomie pour les étudiants',
    'Netter, Atlas d’anatomie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'anat-avant-bras-main-fc-01',
      recto: 'Quel os de l’avant-bras est latéral en position anatomique de référence ?',
      verso: 'Le radius.',
      type: 'definition',
      tags: ['os avant-bras'],
    },
    {
      id: 'anat-avant-bras-main-fc-02',
      recto: 'Citer les trois articulations du complexe du coude.',
      verso: 'Huméro-ulnaire, huméroradiale, radio-ulnaire proximale.',
      type: 'classification',
      tags: ['coude'],
    },
    {
      id: 'anat-avant-bras-main-fc-03',
      recto: 'Quel os tourne autour de l’autre lors de la prono-supination ?',
      verso: 'Le radius tourne autour de l’ulna, qui reste fixe.',
      type: 'mecanisme',
      tags: ['pronosupination'],
    },
    {
      id: 'anat-avant-bras-main-fc-04',
      recto: 'Citer les huit os du carpe, par rangée.',
      verso: 'Proximale : scaphoïde, lunatum, triquétrum, pisiforme. Distale : trapèze, trapézoïde, capitatum, hamatum.',
      type: 'classification',
      tags: ['carpe'],
    },
    {
      id: 'anat-avant-bras-main-fc-05',
      recto: 'Quel est l’os du carpe le plus fréquemment fracturé et pourquoi expose-t-il à la nécrose ?',
      verso: 'Le scaphoïde, en raison d’une vascularisation rétrograde dépendant essentiellement d’une entrée distale.',
      type: 'clinique',
      tags: ['scaphoïde'],
    },
    {
      id: 'anat-avant-bras-main-fc-06',
      recto: 'Quel nerf innerve la majorité des muscles de la loge antérieure de l’avant-bras ?',
      verso: 'Le nerf médian, à l’exception du fléchisseur ulnaire du carpe et d’une partie du fléchisseur profond des doigts, innervés par le nerf ulnaire.',
      type: 'mecanisme',
      tags: ['innervation avant-bras'],
    },
    {
      id: 'anat-avant-bras-main-fc-07',
      recto: 'Quel nerf innerve la loge postérieure de l’avant-bras ?',
      verso: 'Le nerf radial.',
      type: 'mecanisme',
      tags: ['innervation avant-bras'],
    },
    {
      id: 'anat-avant-bras-main-fc-08',
      recto: 'Quelle atteinte nerveuse provoque une main tombante ?',
      verso: 'L’atteinte du nerf radial, par paralysie des extenseurs du poignet et des doigts.',
      type: 'clinique',
      tags: ['nerf radial'],
    },
    {
      id: 'anat-avant-bras-main-fc-09',
      recto: 'Quelle atteinte nerveuse provoque une main en griffe ?',
      verso: 'L’atteinte du nerf ulnaire, notamment lors d’une compression au coude dans le tunnel ulnaire.',
      type: 'clinique',
      tags: ['nerf ulnaire'],
    },
    {
      id: 'anat-avant-bras-main-fc-10',
      recto: 'Quel syndrome résulte de la compression du nerf médian au poignet ?',
      verso: 'Le syndrome du canal carpien.',
      type: 'clinique',
      tags: ['nerf médian'],
    },
    {
      id: 'anat-avant-bras-main-fc-11',
      recto: 'Quel nerf innerve la majorité des muscles intrinsèques de la main ?',
      verso: 'Le nerf ulnaire, sauf les muscles thénariens et deux lombricaux latéraux, innervés par le nerf médian.',
      type: 'mecanisme',
      tags: ['muscles intrinsèques'],
    },
    {
      id: 'anat-avant-bras-main-fc-12',
      recto: 'Quelle articulation permet l’opposition du pouce ?',
      verso: 'L’articulation trapézométacarpienne, articulation en selle.',
      type: 'mecanisme',
      tags: ['pouce'],
    },
  ],
  qcm: [
    {
      id: 'anat-avant-bras-main-qcm-01',
      enonce: 'Concernant les os de l’avant-bras, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ulna est situé latéralement en position anatomique de référence.', vraie: false, justification: 'Faux : l’ulna est médial, le radius est latéral.' },
        { lettre: 'B', texte: 'L’olécrâne appartient à l’extrémité proximale de l’ulna.', vraie: true, justification: 'C’est le relief postérieur de l’extrémité proximale de l’ulna, qui s’engage dans la fosse olécrânienne de l’humérus en extension.' },
        { lettre: 'C', texte: 'La tubérosité radiale se situe à l’extrémité proximale du radius.', vraie: true, justification: 'Exact, c’est l’insertion du tendon du biceps brachial.' },
        { lettre: 'D', texte: 'La membrane interosseuse relie le radius et l’humérus.', vraie: false, justification: 'Faux : elle relie le radius et l’ulna.' },
        { lettre: 'E', texte: 'Le processus styloïde ulnaire se situe à l’extrémité distale de l’ulna.', vraie: true, justification: 'Ce relief osseux palpable prolonge la tête ulnaire du côté médial du poignet, en miroir du processus styloïde radial.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'anat-avant-bras-main-qcm-02',
      enonce: 'Concernant le complexe articulaire du coude, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les trois articulations du coude partagent une capsule commune.', vraie: true, justification: 'Cette capsule et la cavité synoviale uniques expliquent pourquoi un épanchement articulaire ou une infection se propage à l’ensemble du complexe du coude.' },
        { lettre: 'B', texte: 'L’articulation huméro-ulnaire est une articulation en selle.', vraie: false, justification: 'Faux : c’est une articulation trochléenne (ginglyme).' },
        { lettre: 'C', texte: 'L’articulation radio-ulnaire proximale est une articulation trochoïde.', vraie: true, justification: 'Exact, elle permet la rotation du radius.' },
        { lettre: 'D', texte: 'La pronation résulte d’une rotation de l’ulna autour du radius.', vraie: false, justification: 'Faux : c’est le radius qui tourne autour de l’ulna.' },
        { lettre: 'E', texte: 'L’articulation huméroradiale participe fonctionnellement à la prono-supination.', vraie: true, justification: 'Exact, la tête radiale y pivote lors de ce mouvement.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-avant-bras-main-qcm-03',
      enonce: 'Concernant le carpe et la main, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le carpe comprend huit os répartis en deux rangées de quatre.', vraie: true, justification: 'La rangée proximale (scaphoïde, lunatum, triquétrum, pisiforme) et la rangée distale (trapèze, trapézoïde, capitatum, hamatum) comptent chacune quatre os courts.' },
        { lettre: 'B', texte: 'Le scaphoïde appartient à la rangée distale du carpe.', vraie: false, justification: 'Faux : il appartient à la rangée proximale.' },
        { lettre: 'C', texte: 'Le pouce comporte trois phalanges comme les autres doigts.', vraie: false, justification: 'Faux : le pouce ne comporte que deux phalanges, proximale et distale.' },
        { lettre: 'D', texte: 'L’articulation trapézométacarpienne autorise l’opposition du pouce.', vraie: true, justification: 'Sa forme en selle, à deux degrés de liberté combinables, permet au pouce de venir au contact de la pulpe des autres doigts, mouvement propre à la main humaine.' },
        { lettre: 'E', texte: 'Le hamatum appartient à la rangée distale du carpe.', vraie: true, justification: 'Il occupe la position la plus médiale de la rangée distale, reconnaissable à son crochet (hamulus) palpable en regard de l’hypothénar.' },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-avant-bras-main-qcm-04',
      enonce: 'Concernant l’innervation de l’avant-bras, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le nerf médian innerve la majorité des muscles de la loge antérieure.', vraie: true, justification: 'Seuls le fléchisseur ulnaire du carpe et la moitié médiale du fléchisseur profond des doigts échappent à son territoire, au profit du nerf ulnaire.' },
        { lettre: 'B', texte: 'Le nerf ulnaire innerve le fléchisseur ulnaire du carpe.', vraie: true, justification: 'C’est l’exception classique à la règle générale, puisque ce muscle de la loge antérieure n’est pas innervé par le nerf médian mais par le nerf ulnaire.' },
        { lettre: 'C', texte: 'Le nerf radial innerve les muscles de la loge antérieure.', vraie: false, justification: 'Faux : le nerf radial innerve la loge postérieure, extensrice.' },
        { lettre: 'D', texte: 'Le supinateur est innervé par la branche profonde du nerf radial.', vraie: true, justification: 'Il appartient à la loge postérieure profonde, dont l’innervation dépend de la branche profonde du nerf radial (nerf interosseux postérieur).' },
        { lettre: 'E', texte: 'Le rond pronateur est innervé par le nerf ulnaire.', vraie: false, justification: 'Faux : le rond pronateur est innervé par le nerf médian.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-avant-bras-main-qcm-05',
      enonce: 'Concernant les atteintes nerveuses classiques du membre supérieur, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le syndrome du canal carpien résulte d’une compression du nerf médian au poignet.', vraie: true, justification: 'Le nerf médian y est comprimé sous le rétinaculum des muscles fléchisseurs, ce qui provoque des paresthésies dans son territoire sensitif digital.' },
        { lettre: 'B', texte: 'La main tombante résulte d’une atteinte du nerf ulnaire.', vraie: false, justification: 'Faux : la main tombante résulte d’une atteinte du nerf radial.' },
        { lettre: 'C', texte: 'La main en griffe peut résulter d’une compression du nerf ulnaire au coude.', vraie: true, justification: 'Exact, dans le tunnel ulnaire (gouttière épitrochléo-olécrânienne).' },
        { lettre: 'D', texte: 'La main de singe résulte d’une lésion ancienne du nerf médian.', vraie: true, justification: 'Exact, par amyotrophie thénarienne et perte de l’opposition du pouce.' },
        { lettre: 'E', texte: 'Une fracture de la diaphyse humérale peut léser le nerf radial.', vraie: true, justification: 'Exact, en raison de son trajet dans la gouttière radiale de l’humérus.' },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-avant-bras-main-qcm-06',
      enonce: 'Concernant les muscles intrinsèques de la main, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les muscles thénariens sont innervés par le nerf médian.', vraie: true, justification: 'Ils font exception à la règle générale d’innervation ulnaire des muscles intrinsèques de la main, ce qui explique l’amyotrophie thénarienne des atteintes du nerf médian.' },
        { lettre: 'B', texte: 'Les muscles hypothénariens sont innervés par le nerf radial.', vraie: false, justification: 'Faux : ils sont innervés par le nerf ulnaire.' },
        { lettre: 'C', texte: 'Les interosseux dorsaux sont abducteurs des doigts.', vraie: true, justification: 'Ils écartent les doigts de l’axe médian du majeur, selon la règle mnémotechnique DAB (Dorsal ABducteur).' },
        { lettre: 'D', texte: 'Les interosseux palmaires sont adducteurs des doigts.', vraie: true, justification: 'Ils rapprochent les doigts de l’axe médian du majeur, selon la règle mnémotechnique PAD (Palmar ADducteur).' },
        { lettre: 'E', texte: 'Tous les muscles lombricaux sont innervés par le nerf ulnaire.', vraie: false, justification: 'Faux : les deux lombricaux latéraux sont innervés par le nerf médian, les deux médiaux par le nerf ulnaire.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
