import type { Fiche } from '../../types';

export const ficheAbdomen: Fiche = {
  id: 'anat-abdomen',
  ue: 'anat',
  titre: 'L’abdomen',
  sousTitre: 'Paroi abdominale, gaine des droits, canal inguinal, péritoine et organes intra- et rétropéritonéaux',
  chapitre: 'Tronc',
  ordre: 7,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'paroi abdominale antérolatérale',
    'muscle grand droit de l’abdomen',
    'gaine des droits',
    'canal inguinal',
    'péritoine',
    'quadrants abdominaux',
    'organe rétropéritonéal',
  ],
  objectifs: [
    "Décrire les couches musculaires de la paroi abdominale antérolatérale.",
    "Décrire l’organisation de la gaine des droits et sa variation le long de la ligne arquée.",
    "Décrire le trajet et le contenu du canal inguinal.",
    "Différencier organes intrapéritonéaux et organes rétropéritonéaux.",
    "Situer les organes abdominaux selon les régions et quadrants de la paroi.",
  ],
  sections: [
    {
      id: 'paroi-anterolaterale',
      titre: 'La paroi abdominale antérolatérale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La paroi abdominale antérolatérale est constituée de plusieurs couches musculo-aponévrotiques superposées, qui contiennent la cavité abdominale, participent à la posture et interviennent dans les efforts de poussée abdominale (toux, défécation, accouchement).",
        },
        {
          type: 'tableau',
          titre: 'Muscles larges de la paroi abdominale antérolatérale',
          colonnes: ['Muscle', 'Origine', 'Terminaison', 'Innervation', 'Action'],
          lignes: [
            [
              'Oblique externe de l’abdomen',
              'Face externe des huit dernières côtes',
              'Crête iliaque, ligne blanche, aponévrose participant au ligament inguinal',
              'Nerfs intercostaux inférieurs, nerf subcostal',
              'Fléchit et incline le tronc, rotation controlatérale, contient les viscères',
            ],
            [
              'Oblique interne de l’abdomen',
              'Crête iliaque, fascia thoracolombaire, ligament inguinal',
              'Bord inférieur des trois dernières côtes, ligne blanche',
              'Nerfs intercostaux inférieurs, nerf ilio-hypogastrique, nerf ilio-inguinal',
              'Fléchit et incline le tronc, rotation homolatérale',
            ],
            [
              'Transverse de l’abdomen',
              'Face interne des six derniers cartilages costaux, fascia thoracolombaire, crête iliaque, ligament inguinal',
              'Ligne blanche',
              'Nerfs intercostaux inférieurs, nerf ilio-hypogastrique, nerf ilio-inguinal',
              'Comprime les viscères abdominaux, soutient la paroi',
            ],
            [
              'Grand droit de l’abdomen',
              'Symphyse pubienne, crête pubienne',
              'Cartilages des 5e à 7e côtes, processus xiphoïde',
              'Nerfs intercostaux inférieurs',
              'Fléchit le tronc, comprime les viscères abdominaux',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Intersections tendineuses',
          texte:
            "Le muscle grand droit de l’abdomen est traversé par plusieurs intersections tendineuses transversales, qui le segmentent en plusieurs corps musculaires charnus et sont à l’origine de l’aspect en tablettes visible chez le sujet musclé.",
        },
      ],
    },
    {
      id: 'gaine-droits',
      titre: 'La gaine des droits',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les aponévroses des trois muscles larges de la paroi abdominale s’organisent autour du muscle grand droit de l’abdomen pour former la gaine des droits, dont l’architecture change au-dessous d’un repère anatomique précis, la ligne arquée.",
        },
        {
          type: 'definition',
          terme: 'Ligne arquée (ou arc de Douglas)',
          definition:
            "Repère situé environ à mi-distance entre l’ombilic et la symphyse pubienne, en dessous duquel les trois aponévroses des muscles larges passent en totalité en avant du muscle grand droit de l’abdomen, laissant celui-ci en contact direct avec le fascia transversalis en arrière.",
        },
        {
          type: 'tableau',
          titre: 'Organisation de la gaine des droits',
          colonnes: ['Niveau', 'Feuillet antérieur', 'Feuillet postérieur'],
          lignes: [
            [
              'Au-dessus de la ligne arquée',
              'Aponévrose de l’oblique externe et feuillet antérieur de l’aponévrose de l’oblique interne',
              'Feuillet postérieur de l’aponévrose de l’oblique interne et aponévrose du transverse',
            ],
            [
              'Au-dessous de la ligne arquée',
              'Les trois aponévroses réunies (oblique externe, oblique interne, transverse)',
              'Fascia transversalis seul, au contact direct du péritoine',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Intérêt clinique de la ligne arquée',
          texte:
            "En dessous de la ligne arquée, l’absence de feuillet postérieur aponévrotique rend la paroi postérieure de la gaine des droits plus fragile, ce qui explique la localisation préférentielle de certaines hernies de la ligne blanche sous-ombilicale et guide le choix des voies d’abord chirurgicales sus- ou sous-ombilicales.",
        },
      ],
    },
    {
      id: 'canal-inguinal',
      titre: 'Le canal inguinal',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le canal inguinal est un trajet oblique creusé dans l’épaisseur de la paroi abdominale antérolatérale, au-dessus de la moitié médiale du ligament inguinal, qui livre passage au cordon spermatique chez l’homme et au ligament rond de l’utérus chez la femme.",
        },
        {
          type: 'liste',
          items: [
            "L’orifice inguinal profond se situe dans le fascia transversalis, latéralement aux vaisseaux épigastriques inférieurs.",
            "L’orifice inguinal superficiel se situe dans l’aponévrose du muscle oblique externe, au-dessus et médialement au tubercule pubien.",
            "Le trajet oblique en bas et en dedans du canal inguinal, entre les deux orifices, constitue un point de faiblesse potentiel de la paroi abdominale.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Parois du canal inguinal',
          colonnes: ['Paroi', 'Structure principale'],
          lignes: [
            ['Antérieure', 'Aponévrose de l’oblique externe, renforcée latéralement par l’oblique interne'],
            ['Postérieure', 'Fascia transversalis, renforcé médialement par le tendon conjoint'],
            ['Supérieure (toit)', 'Fibres arciformes des muscles oblique interne et transverse'],
            ['Inférieure (plancher)', 'Ligament inguinal'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Hernie inguinale directe et indirecte',
          texte:
            "Une hernie inguinale est dite indirecte (ou oblique externe) lorsqu’elle emprunte le trajet normal du canal inguinal, latéralement aux vaisseaux épigastriques inférieurs, souvent liée à la persistance du processus vaginal. Elle est dite directe lorsqu’elle traverse la paroi postérieure du canal médialement à ces mêmes vaisseaux, à travers une zone de faiblesse acquise du fascia transversalis.",
        },
      ],
    },
    {
      id: 'regions-quadrants',
      titre: 'Régions et quadrants abdominaux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Pour localiser un organe ou une douleur, l’abdomen est subdivisé selon deux systèmes complémentaires : un découpage simple en quatre quadrants, utile en clinique d’urgence, et un découpage plus précis en neuf régions.",
        },
        {
          type: 'tableau',
          titre: 'Les neuf régions abdominales',
          colonnes: ['Étage', 'Régions'],
          lignes: [
            ['Supérieur', 'Hypochondre droit, épigastre, hypochondre gauche'],
            ['Moyen', 'Flanc droit, région ombilicale, flanc gauche'],
            ['Inférieur', 'Fosse iliaque droite, région hypogastrique (pubienne), fosse iliaque gauche'],
          ],
        },
        {
          type: 'liste',
          items: [
            "Le découpage en quatre quadrants (supérieur droit, supérieur gauche, inférieur droit, inférieur gauche) utilise l’ombilic comme point de croisement de deux lignes, une verticale médiane et une horizontale transombilicale.",
            "La fosse iliaque droite contient classiquement l’appendice vermiforme, d’où l’intérêt sémiologique majeur de cette région en cas de douleur abdominale aiguë.",
            "L’épigastre correspond à la projection habituelle de la douleur d’origine gastrique, pancréatique ou parfois cardiaque (douleur référée).",
          ],
        },
      ],
    },
    {
      id: 'peritoine-organes',
      titre: 'Le péritoine et la classification des organes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le péritoine est la séreuse de la cavité abdominopelvienne, organisée comme toute séreuse en un feuillet pariétal et un feuillet viscéral. La relation d’un organe avec le péritoine détermine sa classification en organe intrapéritonéal ou rétropéritonéal.",
        },
        {
          type: 'definition',
          terme: 'Organe intrapéritonéal',
          definition:
            "Organe entièrement ou presque entièrement entouré par le péritoine viscéral et relié à la paroi postérieure par un méso, lame péritonéale double contenant ses vaisseaux et ses nerfs. L’estomac, le jéjunum, l’iléon, le côlon transverse et la rate en sont des exemples.",
        },
        {
          type: 'definition',
          terme: 'Organe rétropéritonéal (ou extrapéritonéal)',
          definition:
            "Organe appliqué contre la paroi postérieure de l’abdomen, en arrière du péritoine pariétal, dont seule la face antérieure est recouverte de péritoine. Les reins, le pancréas (sauf sa queue), le duodénum (sauf son premier segment) et l’aorte abdominale en sont des exemples classiques.",
        },
        {
          type: 'tableau',
          titre: 'Quelques exemples classés',
          colonnes: ['Statut', 'Organes'],
          lignes: [
            ['Intrapéritonéal', 'Estomac, rate, foie (en grande partie), jéjunum, iléon, côlon transverse, côlon sigmoïde'],
            ['Rétropéritonéal (primaire ou secondaire)', 'Reins, glandes surrénales, pancréas (corps et queue exceptés), duodénum (2e à 4e portions), côlon ascendant, côlon descendant, aorte abdominale, veine cave inférieure'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir les organes rétropéritonéaux',
          texte:
            "Une liste mnémotechnique classique regroupe les organes rétropéritonéaux secondaires, ayant perdu leur méso au cours du développement, sous l’acronyme SAD PUCKER en anglais (surrénales, aorte, duodénum, pancréas, urètres, côlon ascendant et descendant, reins, vaisseaux rénaux, œsophage). Il suffit de retenir que ce sont les organes plaqués contre la paroi postérieure, non suspendus par un méso mobile.",
        },
      ],
    },
  ],
  pointsCles: [
    "La paroi abdominale antérolatérale comprend trois muscles larges (oblique externe, oblique interne, transverse) et le muscle grand droit de l’abdomen.",
    "La gaine des droits change d’organisation au niveau de la ligne arquée : au-dessous, les trois aponévroses passent en avant du grand droit.",
    "Le canal inguinal relie l’orifice inguinal profond, latéral aux vaisseaux épigastriques inférieurs, à l’orifice inguinal superficiel.",
    "Une hernie inguinale indirecte emprunte le trajet du canal inguinal ; une hernie directe le traverse médialement aux vaisseaux épigastriques inférieurs.",
    "L’abdomen se subdivise en neuf régions ou en quatre quadrants centrés sur l’ombilic.",
    "Un organe intrapéritonéal est suspendu par un méso ; un organe rétropéritonéal est plaqué contre la paroi postérieure, sans méso mobile.",
    "L’appendice vermiforme se projette classiquement en fosse iliaque droite.",
  ],
  erreursFrequentes: [
    "Confondre hernie inguinale directe et indirecte quant à leur position par rapport aux vaisseaux épigastriques inférieurs.",
    "Croire que la gaine des droits garde la même organisation sur toute sa hauteur, en oubliant la ligne arquée.",
    "Classer le pancréas comme un organe entièrement intrapéritonéal, alors que seule sa queue l’est.",
    "Oublier que le premier segment du duodénum est intrapéritonéal, contrairement aux trois segments suivants.",
    "Confondre orifice inguinal profond, situé dans le fascia transversalis, et orifice inguinal superficiel, situé dans l’aponévrose de l’oblique externe.",
  ],
  mnemotechniques: [
    {
      moyen: 'Les trois muscles larges dans l’ordre, de superficiel à profond',
      explication:
        'Oblique externe, oblique interne, transverse : leur direction de fibres change à chaque plan, ce qui renforce la paroi comme les couches d’un contreplaqué.',
    },
    {
      moyen: 'Indirecte = loin, directe = près',
      explication:
        'La hernie indirecte naît latéralement (loin) des vaisseaux épigastriques inférieurs et emprunte le trajet inguinal complet ; la hernie directe naît médialement (près) de ces mêmes vaisseaux, par un trajet plus court.',
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
      id: 'anat-abdomen-fc-01',
      recto: 'Citer les trois muscles larges de la paroi abdominale antérolatérale, de superficiel à profond.',
      verso: 'Oblique externe de l’abdomen, oblique interne de l’abdomen, transverse de l’abdomen.',
      type: 'classification',
      tags: ['paroi abdominale'],
    },
    {
      id: 'anat-abdomen-fc-02',
      recto: 'Que sont les intersections tendineuses du muscle grand droit de l’abdomen ?',
      verso: 'Des bandes tendineuses transversales qui segmentent le muscle en plusieurs corps charnus, donnant l’aspect en tablettes.',
      type: 'definition',
      tags: ['grand droit'],
    },
    {
      id: 'anat-abdomen-fc-03',
      recto: 'Qu’est-ce que la ligne arquée ?',
      verso: 'Un repère situé à mi-distance entre l’ombilic et la symphyse pubienne, en dessous duquel les trois aponévroses des muscles larges passent en avant du muscle grand droit de l’abdomen.',
      type: 'definition',
      tags: ['gaine des droits'],
    },
    {
      id: 'anat-abdomen-fc-04',
      recto: 'Que trouve-t-on en arrière du muscle grand droit de l’abdomen, en dessous de la ligne arquée ?',
      verso: 'Uniquement le fascia transversalis, au contact direct du péritoine.',
      type: 'definition',
      tags: ['gaine des droits'],
    },
    {
      id: 'anat-abdomen-fc-05',
      recto: 'Où se situe l’orifice inguinal profond ?',
      verso: 'Dans le fascia transversalis, latéralement aux vaisseaux épigastriques inférieurs.',
      type: 'definition',
      tags: ['canal inguinal'],
    },
    {
      id: 'anat-abdomen-fc-06',
      recto: 'Où se situe l’orifice inguinal superficiel ?',
      verso: 'Dans l’aponévrose du muscle oblique externe, au-dessus et médialement au tubercule pubien.',
      type: 'definition',
      tags: ['canal inguinal'],
    },
    {
      id: 'anat-abdomen-fc-07',
      recto: 'Différencier hernie inguinale indirecte et directe.',
      verso: 'Indirecte : emprunte le trajet du canal inguinal, latéralement aux vaisseaux épigastriques inférieurs. Directe : traverse la paroi postérieure du canal, médialement à ces vaisseaux.',
      type: 'clinique',
      tags: ['hernie inguinale'],
    },
    {
      id: 'anat-abdomen-fc-08',
      recto: 'Quelle région abdominale contient classiquement l’appendice vermiforme ?',
      verso: 'La fosse iliaque droite.',
      type: 'definition',
      tags: ['régions abdominales'],
    },
    {
      id: 'anat-abdomen-fc-09',
      recto: 'Définir un organe intrapéritonéal.',
      verso: 'Un organe entouré de péritoine viscéral et relié à la paroi postérieure par un méso, comme l’estomac ou le jéjunum.',
      type: 'definition',
      tags: ['péritoine'],
    },
    {
      id: 'anat-abdomen-fc-10',
      recto: 'Définir un organe rétropéritonéal.',
      verso: 'Un organe plaqué contre la paroi postérieure, dont seule la face antérieure est recouverte de péritoine, comme les reins ou le pancréas (hors queue).',
      type: 'definition',
      tags: ['péritoine'],
    },
    {
      id: 'anat-abdomen-fc-11',
      recto: 'Quel segment du duodénum est intrapéritonéal ?',
      verso: 'Le premier segment (bulbe duodénal) ; les segments suivants sont rétropéritonéaux.',
      type: 'classification',
      tags: ['duodénum'],
    },
    {
      id: 'anat-abdomen-fc-12',
      recto: 'Quelle partie du pancréas est intrapéritonéale ?',
      verso: 'La queue du pancréas ; le reste de la glande est rétropéritonéal.',
      type: 'classification',
      tags: ['pancréas'],
    },
  ],
  qcm: [
    {
      id: 'anat-abdomen-qcm-01',
      enonce: 'Concernant la paroi abdominale antérolatérale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’oblique externe est le muscle le plus superficiel des muscles larges.', vraie: true, justification: 'C’est en effet le plus externe des trois muscles larges, situé immédiatement sous le tissu sous-cutané, avant l’oblique interne puis le transverse.' },
        { lettre: 'B', texte: 'Le muscle grand droit de l’abdomen s’insère sur les cartilages costaux inférieurs.', vraie: true, justification: 'Exact, il se termine sur les cartilages des 5e à 7e côtes et le processus xiphoïde.' },
        { lettre: 'C', texte: 'Le muscle transverse de l’abdomen est le plus superficiel des trois muscles larges.', vraie: false, justification: 'Faux : c’est le muscle le plus profond des trois.' },
        { lettre: 'D', texte: 'Les intersections tendineuses segmentent le muscle oblique externe.', vraie: false, justification: 'Faux : elles segmentent le muscle grand droit de l’abdomen, non l’oblique externe.' },
        { lettre: 'E', texte: 'Les muscles larges participent aux efforts de poussée abdominale.', vraie: true, justification: 'Exact, par leur action de compression des viscères.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'anat-abdomen-qcm-02',
      enonce: 'Concernant la gaine des droits, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Au-dessus de la ligne arquée, les trois aponévroses passent toutes en avant du grand droit.', vraie: false, justification: 'Faux : au-dessus de la ligne arquée, l’aponévrose de l’oblique interne se dédouble en un feuillet antérieur et un feuillet postérieur.' },
        { lettre: 'B', texte: 'En dessous de la ligne arquée, le grand droit est au contact direct du fascia transversalis en arrière.', vraie: true, justification: 'En dessous de la ligne arquée, les trois aponévroses des muscles larges passent en totalité en avant du grand droit, ne laissant que le fascia transversalis à son contact postérieur.' },
        { lettre: 'C', texte: 'La ligne arquée se situe environ à mi-distance entre l’ombilic et la symphyse pubienne.', vraie: true, justification: 'Il s’agit de la définition topographique classique de ce repère, qui marque le changement d’organisation de la gaine des droits.' },
        { lettre: 'D', texte: 'La fragilité relative de la paroi sous la ligne arquée s’explique par l’absence de feuillet postérieur aponévrotique.', vraie: true, justification: 'En dessous de la ligne arquée, seul le fascia transversalis, plus mince que les aponévroses musculaires, sépare le grand droit du péritoine, ce qui fragilise la paroi postérieure de la gaine.' },
        { lettre: 'E', texte: 'La gaine des droits est formée uniquement par l’aponévrose du grand droit lui-même.', vraie: false, justification: 'Faux : elle est formée par les aponévroses des trois muscles larges qui s’organisent autour du grand droit.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-abdomen-qcm-03',
      enonce: 'Concernant le canal inguinal, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’orifice inguinal profond se situe dans le fascia transversalis.', vraie: true, justification: 'L’orifice inguinal profond correspond à un orifice creusé dans le fascia transversalis, situé latéralement aux vaisseaux épigastriques inférieurs.' },
        { lettre: 'B', texte: 'Le plancher du canal inguinal est formé par le ligament inguinal.', vraie: true, justification: 'Le ligament inguinal, tendu de l’épine iliaque antéro-supérieure au tubercule pubien, constitue la paroi inférieure (plancher) du canal inguinal.' },
        { lettre: 'C', texte: 'Chez la femme, le canal inguinal livre passage au ligament rond de l’utérus.', vraie: true, justification: 'Chez la femme, le ligament rond de l’utérus emprunte le canal inguinal pour rejoindre la grande lèvre, équivalent féminin du cordon spermatique.' },
        { lettre: 'D', texte: 'Une hernie inguinale directe passe latéralement aux vaisseaux épigastriques inférieurs.', vraie: false, justification: 'Faux : c’est la hernie indirecte qui passe latéralement à ces vaisseaux ; la directe passe médialement.' },
        { lettre: 'E', texte: 'Le toit du canal inguinal est formé par des fibres arciformes de l’oblique interne et du transverse.', vraie: true, justification: 'Les fibres arciformes les plus basses de l’oblique interne et du transverse s’arquent au-dessus du cordon pour former la paroi supérieure (toit) du canal.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-abdomen-qcm-04',
      enonce: 'Concernant les régions et quadrants abdominaux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’abdomen se subdivise classiquement en neuf régions.', vraie: true, justification: 'Ce découpage précis résulte du croisement de deux lignes horizontales et de deux lignes verticales médio-claviculaires, plus fin que le simple découpage en quadrants.' },
        { lettre: 'B', texte: 'L’épigastre appartient à l’étage inférieur de l’abdomen.', vraie: false, justification: 'Faux : l’épigastre appartient à l’étage supérieur.' },
        { lettre: 'C', texte: 'Le découpage en quatre quadrants utilise l’ombilic comme point de croisement.', vraie: true, justification: 'Une ligne verticale médiane et une ligne horizontale transombilicale se croisent à l’ombilic pour délimiter les quatre quadrants, un découpage simple utile en urgence.' },
        { lettre: 'D', texte: 'La fosse iliaque droite contient classiquement l’appendice vermiforme.', vraie: true, justification: 'L’appendice vermiforme naît du bas-fond cæcal, situé en fosse iliaque droite, d’où l’intérêt sémiologique de cette région en cas de douleur abdominale aiguë.' },
        { lettre: 'E', texte: 'La région hypogastrique se situe dans l’étage supérieur de l’abdomen.', vraie: false, justification: 'Faux : la région hypogastrique (pubienne) se situe dans l’étage inférieur.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 1,
    },
    {
      id: 'anat-abdomen-qcm-05',
      enonce: 'Concernant la classification péritonéale des organes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le jéjunum est un organe intrapéritonéal.', vraie: true, justification: 'Exact, il est suspendu par un méso, le mésentère.' },
        { lettre: 'B', texte: 'Les reins sont des organes intrapéritonéaux.', vraie: false, justification: 'Faux : les reins sont rétropéritonéaux.' },
        { lettre: 'C', texte: 'La queue du pancréas est intrapéritonéale.', vraie: true, justification: 'Exact, contrairement au reste de la glande.' },
        { lettre: 'D', texte: 'Le côlon transverse est rétropéritonéal.', vraie: false, justification: 'Faux : le côlon transverse est intrapéritonéal, suspendu par le mésocôlon transverse.' },
        { lettre: 'E', texte: 'L’aorte abdominale est un organe rétropéritonéal.', vraie: true, justification: 'L’aorte abdominale chemine plaquée contre le rachis lombaire, en arrière du péritoine pariétal, ce qui en fait un organe rétropéritonéal primaire.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-abdomen-qcm-06',
      enonce: 'Concernant le péritoine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le péritoine comprend un feuillet pariétal et un feuillet viscéral.', vraie: true, justification: 'Exact, comme toute séreuse.' },
        { lettre: 'B', texte: 'Un méso est une lame péritonéale double contenant les vaisseaux et nerfs d’un organe.', vraie: true, justification: 'C’est la définition même du méso : un repli péritonéal formé de deux feuillets accolés, reliant un organe intrapéritonéal à la paroi postérieure et livrant passage à ses éléments vasculo-nerveux.' },
        { lettre: 'C', texte: 'Le premier segment du duodénum est rétropéritonéal.', vraie: false, justification: 'Faux : le premier segment (bulbe duodénal) est intrapéritonéal ; les segments suivants sont rétropéritonéaux.' },
        { lettre: 'D', texte: 'Le côlon ascendant est un organe rétropéritonéal secondaire.', vraie: true, justification: 'Exact, il a perdu son méso au cours du développement et s’est accolé à la paroi postérieure.' },
        { lettre: 'E', texte: 'La rate est un organe rétropéritonéal.', vraie: false, justification: 'Faux : la rate est un organe intrapéritonéal.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
