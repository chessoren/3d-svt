import type { Fiche } from '../../types';

export const ficheThorax: Fiche = {
  id: 'anat-thorax',
  ue: 'anat',
  titre: 'Le thorax',
  sousTitre: 'Cage thoracique, muscles respiratoires, diaphragme, médiastin et plèvres',
  chapitre: 'Tronc',
  ordre: 6,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'cage thoracique',
    'côte',
    'sternum',
    'diaphragme',
    'médiastin',
    'plèvre',
    'muscles intercostaux',
    'articulation costovertébrale',
  ],
  objectifs: [
    "Décrire la constitution de la cage thoracique et ses articulations.",
    "Différencier les côtes vraies, fausses et flottantes.",
    "Décrire les muscles de la respiration et le rôle central du diaphragme.",
    "Situer les étages du médiastin et leur contenu principal.",
    "Décrire l’organisation de la plèvre et son intérêt clinique.",
  ],
  sections: [
    {
      id: 'cage-thoracique',
      titre: 'La cage thoracique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La cage thoracique est un ensemble ostéocartilagineux qui protège les organes thoraciques tout en participant activement à la mécanique ventilatoire par ses variations de volume. Elle est formée en arrière par les douze vertèbres thoraciques, latéralement par les douze paires de côtes, et en avant par le sternum et les cartilages costaux.",
        },
        {
          type: 'tableau',
          titre: 'Classification des côtes',
          colonnes: ['Type', 'Numéros', 'Rapport avec le sternum'],
          lignes: [
            ['Côtes vraies (ou sternales)', '1 à 7', 'Cartilage costal s’articulant directement avec le sternum'],
            ['Côtes fausses (ou asternales)', '8 à 10', 'Cartilage costal rejoignant le cartilage de la côte sus-jacente, sans contact direct avec le sternum'],
            ['Côtes flottantes', '11 et 12', 'Extrémité antérieure libre, sans cartilage costal atteignant le sternum'],
          ],
        },
        {
          type: 'liste',
          items: [
            "Une côte typique comprend une tête, un col, un tubercule et un corps, prolongé en avant par un cartilage costal.",
            "La tête costale s’articule avec les fovéas costales des corps de deux vertèbres thoraciques adjacentes ; le tubercule costal s’articule avec la fovéa costale de l’apophyse transverse de la vertèbre correspondante.",
            "Le sternum comprend trois parties : le manubrium, le corps et le processus xiphoïde, réunis par des synchondroses qui s’ossifient partiellement avec l’âge.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'L’angle sternal, repère de surface essentiel',
          texte:
            "L’angle sternal (angle de Louis), entre le manubrium et le corps du sternum, correspond au niveau du cartilage de la deuxième côte et sert de repère de surface pour compter les espaces intercostaux. Il marque aussi approximativement le niveau de la bifurcation trachéale et du passage de l’arc aortique.",
        },
      ],
    },
    {
      id: 'muscles-respiration',
      titre: 'Les muscles de la respiration',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La ventilation résulte de la variation cyclique du volume de la cage thoracique, produite par un ensemble de muscles dont l’implication varie selon que la respiration est calme ou forcée.",
        },
        {
          type: 'tableau',
          titre: 'Muscles de la respiration',
          colonnes: ['Muscle', 'Origine', 'Terminaison', 'Innervation', 'Action'],
          lignes: [
            [
              'Diaphragme',
              'Processus xiphoïde, faces internes des six derniers cartilages costaux, piliers vertébraux (L1-L3)',
              'Centre phrénique (tendineux)',
              'Nerf phrénique (C3-C5)',
              'Muscle inspiratoire principal : sa contraction abaisse les coupoles et augmente le volume thoracique',
            ],
            [
              'Intercostaux externes',
              'Bord inférieur de chaque côte',
              'Bord supérieur de la côte sous-jacente',
              'Nerfs intercostaux',
              'Élèvent les côtes, inspirateurs accessoires',
            ],
            [
              'Intercostaux internes',
              'Bord supérieur de chaque côte',
              'Bord inférieur de la côte sus-jacente',
              'Nerfs intercostaux',
              'Abaissent les côtes, expirateurs accessoires en expiration forcée',
            ],
            [
              'Scalènes',
              'Apophyses transverses des vertèbres cervicales',
              '1re et 2e côtes',
              'Rameaux du plexus cervical et du plexus brachial',
              'Inspirateurs accessoires, élèvent les côtes supérieures',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Respiration calme et respiration forcée',
          texte:
            "Au repos, l’inspiration est assurée presque exclusivement par le diaphragme, et l’expiration est passive, liée au retour élastique du poumon et de la cage thoracique. Lors d’un effort, les muscles inspirateurs et expirateurs accessoires (scalènes, sternocléidomastoïdien, muscles abdominaux) sont recrutés pour augmenter le débit ventilatoire.",
        },
      ],
    },
    {
      id: 'diaphragme',
      titre: 'Le diaphragme en détail',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le diaphragme est un muscle digastrique aplati, en forme de dôme, qui sépare complètement la cavité thoracique de la cavité abdominale et constitue le principal moteur de la ventilation.",
        },
        {
          type: 'liste',
          items: [
            "Il présente trois orifices principaux livrant passage aux structures qui traversent la barrière thoracoabdominale.",
            "L’orifice de la veine cave inférieure se situe dans le centre tendineux, au niveau vertébral T8.",
            "Le hiatus œsophagien livre passage à l’œsophage et aux nerfs vagues, au niveau vertébral T10.",
            "Le hiatus aortique, le plus postérieur, livre passage à l’aorte, au conduit thoracique et à la veine azygos, au niveau vertébral T12.",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir l’ordre des orifices : 8-10-12',
          texte:
            "Retenir la suite croissante « 8, 10, 12 » associée à chaque structure, de haut en bas : veine cave inférieure à T8, œsophage à T10, aorte à T12. L’écart de deux niveaux vertébraux entre chaque orifice facilite la mémorisation.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Paralysie diaphragmatique',
          texte:
            "Le nerf phrénique, unique innervation motrice du diaphragme, naît des racines C3 à C5. Sa lésion, par exemple lors d’une chirurgie cervicale ou thoracique, entraîne une paralysie de l’hémicoupole correspondante, avec ascension paradoxale de la coupole lors de l’inspiration, visible en radioscopie.",
        },
      ],
    },
    {
      id: 'mediastin',
      titre: 'Le médiastin et ses étages',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le médiastin est l’espace médian de la cavité thoracique, compris entre les deux plèvres, en avant du rachis thoracique, en arrière du sternum, entre le défilé cervicothoracique en haut et le diaphragme en bas.",
        },
        {
          type: 'tableau',
          titre: 'Étages classiques du médiastin',
          colonnes: ['Étage', 'Limites', 'Contenu principal'],
          lignes: [
            ['Médiastin supérieur', 'Au-dessus du plan passant par l’angle sternal', 'Crosse de l’aorte, trachée, œsophage, thymus, gros vaisseaux'],
            ['Médiastin antérieur', 'Entre le sternum et le péricarde', 'Reliquats thymiques, tissu conjonctivo-graisseux'],
            ['Médiastin moyen', 'Autour du péricarde', 'Cœur, péricarde, racines des gros vaisseaux, bifurcation trachéale'],
            ['Médiastin postérieur', 'En avant du rachis, en arrière du péricarde', 'Œsophage, aorte thoracique descendante, conduit thoracique, veine azygos'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Contenu à bien distinguer',
          texte:
            "L’œsophage traverse le médiastin postérieur avant de franchir le diaphragme par le hiatus œsophagien. Le conduit thoracique, principale voie de drainage lymphatique du corps, chemine également dans le médiastin postérieur, entre l’aorte et la veine azygos, avant de se jeter dans le confluent veineux jugulo-subclavier gauche.",
        },
      ],
    },
    {
      id: 'plevres',
      titre: 'Les plèvres',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Chaque poumon est entouré d’une séreuse propre, la plèvre, organisée en deux feuillets continus l’un avec l’autre au niveau du hile pulmonaire.",
        },
        {
          type: 'definition',
          terme: 'Plèvre',
          definition:
            "Membrane séreuse formée d’un feuillet viscéral, appliqué à la surface du poumon, et d’un feuillet pariétal, appliqué contre la paroi thoracique, le médiastin et le diaphragme. Entre les deux, la cavité pleurale, virtuelle, contient un film de liquide pleural qui permet le glissement du poumon lors des mouvements respiratoires.",
        },
        {
          type: 'liste',
          items: [
            "Le feuillet pariétal se subdivise en plèvre costale, plèvre médiastinale et plèvre diaphragmatique selon la structure contre laquelle il s’applique.",
            "Les culs-de-sac (ou récessus) pleuraux, notamment le récessus costodiaphragmatique, sont des zones où les deux feuillets pariétaux se rapprochent sans que le poumon ne les occupe complètement en respiration calme.",
            "Chaque cavité pleurale est indépendante : un épanchement d’un côté n’affecte pas directement la plèvre controlatérale.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Pneumothorax et épanchement pleural',
          texte:
            "L’introduction d’air (pneumothorax) ou de liquide (épanchement pleural) dans la cavité pleurale rompt le régime de pression négative qui maintient le poumon collabé contre la paroi thoracique, entraînant un collapsus pulmonaire partiel ou complet du côté atteint. Le récessus costodiaphragmatique, point déclive de la cavité pleurale, est le site de ponction habituel d’un épanchement liquidien.",
        },
      ],
    },
  ],
  pointsCles: [
    "La cage thoracique associe douze vertèbres thoraciques, douze paires de côtes et le sternum en trois parties.",
    "On distingue côtes vraies (1-7), fausses (8-10) et flottantes (11-12) selon leur rapport avec le sternum.",
    "Le diaphragme, innervé par le nerf phrénique (C3-C5), est le muscle inspiratoire principal.",
    "Les trois orifices diaphragmatiques se situent respectivement à T8 (veine cave inférieure), T10 (œsophage) et T12 (aorte).",
    "Le médiastin se subdivise classiquement en étages supérieur, antérieur, moyen et postérieur.",
    "Chaque plèvre comprend un feuillet viscéral et un feuillet pariétal, séparés par une cavité virtuelle contenant du liquide pleural.",
    "Le récessus costodiaphragmatique est le point déclive de la cavité pleurale, site habituel de ponction d’un épanchement.",
  ],
  erreursFrequentes: [
    "Confondre côtes fausses et côtes flottantes : les fausses rejoignent le cartilage sus-jacent, les flottantes n’ont aucun rattachement cartilagineux antérieur.",
    "Oublier que l’expiration calme est un phénomène passif, sans contraction musculaire active dominante.",
    "Inverser l’ordre vertébral des orifices diaphragmatiques (veine cave à T8, œsophage à T10, aorte à T12).",
    "Situer le cœur dans le médiastin postérieur, alors qu’il occupe le médiastin moyen.",
    "Croire que les deux cavités pleurales communiquent entre elles : elles sont en réalité strictement indépendantes.",
  ],
  mnemotechniques: [
    {
      moyen: '8-10-12 pour les orifices du diaphragme',
      explication:
        'De haut en bas : T8 veine cave inférieure, T10 œsophage (et nerfs vagues), T12 aorte (et conduit thoracique).',
    },
    {
      moyen: '7 vraies, 3 fausses, 2 flottantes',
      explication:
        'Sur douze côtes : les sept premières sont vraies (sternales), les trois suivantes fausses (asternales), les deux dernières flottantes.',
    },
  ],
  sources: [
    'Kamina, Anatomie clinique, tome 2, Thorax, abdomen',
    'Drake, Vogl, Mitchell, Gray’s Anatomie pour les étudiants',
    'Netter, Atlas d’anatomie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'anat-thorax-fc-01',
      recto: 'Combien de paires de côtes compte la cage thoracique et comment se subdivisent-elles ?',
      verso: 'Douze paires : 7 côtes vraies, 3 côtes fausses, 2 côtes flottantes.',
      type: 'classification',
      tags: ['côtes'],
    },
    {
      id: 'anat-thorax-fc-02',
      recto: 'Que marque l’angle sternal comme repère de surface ?',
      verso: 'Le niveau du cartilage de la deuxième côte, utile pour compter les espaces intercostaux ; il marque aussi approximativement la bifurcation trachéale.',
      type: 'clinique',
      tags: ['repères'],
    },
    {
      id: 'anat-thorax-fc-03',
      recto: 'Quel est le muscle inspiratoire principal et quelle est son innervation ?',
      verso: 'Le diaphragme, innervé par le nerf phrénique, issu des racines C3 à C5.',
      type: 'mecanisme',
      tags: ['diaphragme'],
    },
    {
      id: 'anat-thorax-fc-04',
      recto: 'À quel niveau vertébral se situe le hiatus œsophagien ?',
      verso: 'T10.',
      type: 'chiffre',
      tags: ['diaphragme'],
    },
    {
      id: 'anat-thorax-fc-05',
      recto: 'Quelles structures traversent le hiatus aortique, à T12 ?',
      verso: 'L’aorte thoracique descendante, le conduit thoracique et la veine azygos.',
      type: 'definition',
      tags: ['diaphragme'],
    },
    {
      id: 'anat-thorax-fc-06',
      recto: 'Quels muscles élèvent les côtes lors de l’inspiration forcée ?',
      verso: 'Les intercostaux externes et les scalènes, muscles inspirateurs accessoires.',
      type: 'mecanisme',
      tags: ['muscles respiratoires'],
    },
    {
      id: 'anat-thorax-fc-07',
      recto: 'Dans quel étage du médiastin se situe le cœur ?',
      verso: 'Le médiastin moyen.',
      type: 'definition',
      tags: ['médiastin'],
    },
    {
      id: 'anat-thorax-fc-08',
      recto: 'Que contient le médiastin postérieur ?',
      verso: 'L’œsophage, l’aorte thoracique descendante, le conduit thoracique et la veine azygos.',
      type: 'definition',
      tags: ['médiastin'],
    },
    {
      id: 'anat-thorax-fc-09',
      recto: 'Quels sont les deux feuillets de la plèvre ?',
      verso: 'Le feuillet viscéral, appliqué au poumon, et le feuillet pariétal, appliqué à la paroi, au médiastin et au diaphragme.',
      type: 'definition',
      tags: ['plèvre'],
    },
    {
      id: 'anat-thorax-fc-10',
      recto: 'Quel est le site habituel de ponction d’un épanchement pleural liquidien ?',
      verso: 'Le récessus costodiaphragmatique, point déclive de la cavité pleurale.',
      type: 'clinique',
      tags: ['plèvre', 'ponction'],
    },
    {
      id: 'anat-thorax-fc-11',
      recto: 'Quelles sont les trois parties du sternum ?',
      verso: 'Le manubrium, le corps et le processus xiphoïde.',
      type: 'definition',
      tags: ['sternum'],
    },
    {
      id: 'anat-thorax-fc-12',
      recto: 'Qu’est-ce qu’un pneumothorax ?',
      verso: 'L’introduction d’air dans la cavité pleurale, qui rompt le régime de pression négative et entraîne un collapsus pulmonaire partiel ou complet.',
      type: 'clinique',
      tags: ['pneumothorax'],
    },
  ],
  qcm: [
    {
      id: 'anat-thorax-qcm-01',
      enonce: 'Concernant la cage thoracique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les côtes 1 à 7 sont des côtes vraies.', vraie: true, justification: 'Exact, leur cartilage costal s’articule directement avec le sternum.' },
        { lettre: 'B', texte: 'Les côtes 11 et 12 sont des côtes fausses.', vraie: false, justification: 'Faux : ce sont des côtes flottantes, sans rattachement cartilagineux antérieur au sternum.' },
        { lettre: 'C', texte: 'L’angle sternal correspond au niveau du cartilage de la deuxième côte.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'La tête costale s’articule avec l’apophyse transverse de la vertèbre correspondante.', vraie: false, justification: 'Faux : c’est le tubercule costal qui s’articule avec l’apophyse transverse ; la tête costale s’articule avec les corps vertébraux.' },
        { lettre: 'E', texte: 'Le sternum comprend trois parties réunies par des synchondroses.', vraie: true, justification: 'Exact : manubrium, corps, processus xiphoïde.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'anat-thorax-qcm-02',
      enonce: 'Concernant les muscles de la respiration, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le diaphragme est innervé par les nerfs intercostaux.', vraie: false, justification: 'Faux : le diaphragme est innervé par le nerf phrénique, issu de C3 à C5.' },
        { lettre: 'B', texte: 'Les intercostaux externes élèvent les côtes.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'L’expiration calme est un phénomène actif nécessitant la contraction des intercostaux internes.', vraie: false, justification: 'Faux : l’expiration calme est passive, liée au retour élastique du poumon et de la cage thoracique.' },
        { lettre: 'D', texte: 'Les scalènes peuvent agir comme inspirateurs accessoires.', vraie: true, justification: 'Exact, en élevant les deux premières côtes.' },
        { lettre: 'E', texte: 'Le diaphragme est un muscle digastrique en forme de dôme.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-thorax-qcm-03',
      enonce: 'Concernant les orifices du diaphragme, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’orifice de la veine cave inférieure se situe à T8.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le hiatus œsophagien livre passage aux nerfs vagues.', vraie: true, justification: 'Exact, en plus de l’œsophage lui-même.' },
        { lettre: 'C', texte: 'Le hiatus aortique se situe à T10.', vraie: false, justification: 'Faux : le hiatus aortique se situe à T12, le hiatus œsophagien à T10.' },
        { lettre: 'D', texte: 'Le conduit thoracique traverse le hiatus aortique.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Le hiatus œsophagien est l’orifice le plus postérieur des trois.', vraie: false, justification: 'Faux : c’est le hiatus aortique qui est le plus postérieur, situé contre le rachis.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-thorax-qcm-04',
      enonce: 'Concernant le médiastin, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le cœur se situe dans le médiastin moyen.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'L’œsophage traverse le médiastin postérieur.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Le thymus se situe dans le médiastin postérieur chez l’adulte.', vraie: false, justification: 'Faux : les reliquats thymiques se situent dans le médiastin antérieur.' },
        { lettre: 'D', texte: 'Le médiastin est compris entre les deux plèvres.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'La crosse de l’aorte se situe dans le médiastin supérieur.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, B, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-thorax-qcm-05',
      enonce: 'Concernant la plèvre, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le feuillet viscéral est appliqué contre la paroi thoracique.', vraie: false, justification: 'Faux : c’est le feuillet pariétal qui est appliqué contre la paroi ; le feuillet viscéral est appliqué au poumon.' },
        { lettre: 'B', texte: 'La cavité pleurale contient un film de liquide pleural.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Les deux cavités pleurales communiquent librement entre elles.', vraie: false, justification: 'Faux : chaque cavité pleurale est strictement indépendante.' },
        { lettre: 'D', texte: 'Le récessus costodiaphragmatique est un point déclive de la cavité pleurale.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Le feuillet pariétal se subdivise en plèvre costale, médiastinale et diaphragmatique.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-thorax-qcm-06',
      enonce: 'Concernant les côtes et leurs articulations, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une côte typique comprend une tête, un col, un tubercule et un corps.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Les côtes fausses (8 à 10) rejoignent le cartilage de la côte sus-jacente.', vraie: true, justification: 'Exact, sans contact direct avec le sternum.' },
        { lettre: 'C', texte: 'Les côtes flottantes possèdent un cartilage costal atteignant le sternum.', vraie: false, justification: 'Faux : leur extrémité antérieure est libre, sans cartilage atteignant le sternum.' },
        { lettre: 'D', texte: 'La tête costale s’articule avec les corps vertébraux de deux vertèbres adjacentes.', vraie: true, justification: 'Exact, via les fovéas costales.' },
        { lettre: 'E', texte: 'Toutes les côtes possèdent un tubercule costal fonctionnel articulé avec une vertèbre.', vraie: false, justification: 'Faux : les onzième et douzième côtes n’ont pas de tubercule articulé avec l’apophyse transverse, contrairement aux côtes supérieures.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
