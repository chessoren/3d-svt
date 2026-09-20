import type { Fiche } from '../../types';

export const fichePelvisPerinee: Fiche = {
  id: 'anat-pelvis-perinee',
  ue: 'anat',
  titre: 'Pelvis et périnée',
  sousTitre: 'Bassin osseux, détroits, diaphragme pelvien, périnée et organes pelviens',
  chapitre: 'Tronc',
  ordre: 8,
  duree: 24,
  difficulte: 3,
  motsCles: [
    'os coxal',
    'détroit supérieur',
    'diaphragme pelvien',
    'muscle releveur de l’anus',
    'périnée',
    'centre tendineux du périnée',
    'organes pelviens',
  ],
  objectifs: [
    "Décrire les trois pièces osseuses de l’os coxal et les repères du bassin.",
    "Différencier détroit supérieur et détroit inférieur du bassin.",
    "Décrire les muscles du diaphragme pelvien et leur rôle de soutènement.",
    "Décrire l’organisation du périnée superficiel et profond.",
    "Situer les principaux organes pelviens et leurs différences selon le sexe.",
  ],
  sections: [
    {
      id: 'bassin-osseux',
      titre: 'Le bassin osseux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le bassin osseux (ou pelvis osseux) est formé par les deux os coxaux, réunis en avant par la symphyse pubienne et en arrière au sacrum par les articulations sacro-iliaques. Chaque os coxal résulte de la fusion de trois pièces osseuses primitives autour de l’acétabulum.",
        },
        {
          type: 'tableau',
          titre: 'Les trois pièces de l’os coxal',
          colonnes: ['Pièce', 'Position', 'Repère principal'],
          lignes: [
            ['Ilium', 'Supérieure', 'Crête iliaque, épines iliaques antéro- et postéro-supérieures'],
            ['Ischium', 'Postéro-inférieure', 'Tubérosité ischiatique (ischion), épine ischiatique'],
            ['Pubis', 'Antéro-inférieure', 'Corps du pubis, branches supérieure et inférieure'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'L’acétabulum, carrefour des trois pièces',
          texte:
            "L’acétabulum, cavité articulaire qui reçoit la tête fémorale, se forme à la jonction des trois pièces osseuses de l’os coxal, réunies chez l’enfant par un cartilage en Y qui s’ossifie complètement à la puberté.",
        },
        {
          type: 'liste',
          items: [
            "Le bassin est classiquement subdivisé en grand bassin, au-dessus du détroit supérieur, et petit bassin, en dessous, qui contient les organes pelviens.",
            "Le sacrum s’articule avec les deux os coxaux par les articulations sacro-iliaques, des amphiarthroses peu mobiles renforcées par de puissants ligaments.",
          ],
        },
      ],
    },
    {
      id: 'detroits',
      titre: 'Les détroits du bassin',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Deux repères circulaires, les détroits supérieur et inférieur, délimitent le petit bassin et revêtent une importance obstétricale majeure en définissant le trajet du mobile fœtal lors de l’accouchement.",
        },
        {
          type: 'definition',
          terme: 'Détroit supérieur',
          definition:
            "Ligne circulaire osseuse qui sépare le grand bassin du petit bassin, passant par le promontoire sacré en arrière, la ligne arquée de l’ilium et la crête pectinéale du pubis latéralement, et le bord supérieur de la symphyse pubienne en avant.",
        },
        {
          type: 'definition',
          terme: 'Détroit inférieur',
          definition:
            "Orifice inférieur du petit bassin, délimité par le bord inférieur de la symphyse pubienne en avant, les branches ischiopubiennes et les tubérosités ischiatiques latéralement, et le coccyx en arrière.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Dimorphisme sexuel du bassin',
          texte:
            "Le bassin féminin présente, en comparaison du bassin masculin, un détroit supérieur plus ovalaire et plus large, un arc pubien plus ouvert (angle sous-pubien supérieur à 90 degrés), des ailes iliaques plus évasées et un diamètre bi-ischiatique plus grand, autant de caractères adaptés au passage du mobile fœtal.",
        },
      ],
    },
    {
      id: 'diaphragme-pelvien',
      titre: 'Le diaphragme pelvien',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le diaphragme pelvien est une lame musculo-aponévrotique concave vers le haut, tendue en hamac d’un os coxal à l’autre, qui ferme le petit bassin en bas et soutient l’ensemble des organes pelviens contre la pression intra-abdominale.",
        },
        {
          type: 'tableau',
          titre: 'Muscles du diaphragme pelvien',
          colonnes: ['Muscle', 'Origine', 'Terminaison', 'Innervation', 'Action'],
          lignes: [
            [
              'Releveur de l’anus (faisceaux pubo-viscéraux et ilio-coccygien)',
              'Face postérieure du pubis, arc tendineux du muscle releveur de l’anus (épaississement du fascia obturateur), épine ischiatique',
              'Corps périnéal, paroi du canal anal, ligament ano-coccygien, coccyx',
              'Nerf du muscle releveur de l’anus, branches du plexus sacral',
              'Soutient les organes pelviens, participe à la continence anale et urinaire',
            ],
            [
              'Ischiococcygien (ou coccygien)',
              'Épine ischiatique',
              'Bord latéral du sacrum et du coccyx',
              'Branches du plexus sacral (S4-S5)',
              'Complète en arrière le diaphragme pelvien, soutient le coccyx',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Prolapsus pelvien',
          texte:
            "L’affaiblissement du diaphragme pelvien, favorisé par les accouchements par voie basse, l’âge et l’hyperpression abdominale chronique, expose au prolapsus des organes pelviens (vessie, utérus, rectum), qui descendent à travers la fente uro-génitale normalement occupée par le hiatus des releveurs.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Le hiatus urogénital',
          texte:
            "En avant, les faisceaux pubo-viscéraux du muscle releveur de l’anus laissent un espace médian incomplet, le hiatus urogénital, livrant passage à l’urètre et, chez la femme, au vagin.",
        },
      ],
    },
    {
      id: 'perinee',
      titre: 'Le périnée',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le périnée est l’ensemble des parties molles qui ferment le détroit inférieur du bassin, en dessous du diaphragme pelvien. Il se subdivise classiquement en deux régions triangulaires par une ligne transversale passant par les tubérosités ischiatiques.",
        },
        {
          type: 'tableau',
          titre: 'Les deux régions du périnée',
          colonnes: ['Région', 'Limites', 'Contenu principal'],
          lignes: [
            ['Périnée antérieur (uro-génital)', 'Entre la symphyse pubienne et la ligne bi-ischiatique', 'Orifices urétral et génital, muscles superficiels du périnée, corps caverneux et spongieux'],
            ['Périnée postérieur (anal)', 'Entre la ligne bi-ischiatique et le coccyx', 'Canal anal, muscle sphincter externe de l’anus, fosses ischio-anales'],
          ],
        },
        {
          type: 'definition',
          terme: 'Centre tendineux du périnée (corps périnéal)',
          definition:
            "Nœud fibromusculaire médian situé entre l’orifice anal et l’orifice vaginal ou le bulbe du pénis, où convergent et s’ancrent plusieurs muscles périnéaux (sphincter externe de l’anus, muscles transverses superficiels du périnée, muscle bulbospongieux). C’est un point clé de la statique périnéale, souvent lésé lors d’une déchirure obstétricale.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Distinguer plans superficiel et profond du périnée antérieur',
          texte:
            "Le périnée antérieur comporte un plan superficiel, sous-cutané, contenant les muscles érecteurs (ischiocaverneux, bulbospongieux) et les muscles transverses superficiels, et un plan profond, ou espace périnéal profond, contenant le muscle transverse profond du périnée et le sphincter externe de l’urètre.",
        },
      ],
    },
    {
      id: 'organes-pelviens',
      titre: 'Les organes pelviens',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le petit bassin contient les organes terminaux des appareils urinaire, digestif et génital, disposés d’avant en arrière selon un ordre commun aux deux sexes, avec des différences notables au niveau de l’étage moyen.",
        },
        {
          type: 'tableau',
          titre: 'Organisation antéro-postérieure des organes pelviens',
          colonnes: ['Étage', 'Chez l’homme', 'Chez la femme'],
          lignes: [
            ['Antérieur', 'Vessie, urètre', 'Vessie, urètre'],
            ['Moyen', 'Vésicules séminales, prostate', 'Utérus, vagin'],
            ['Postérieur', 'Rectum', 'Rectum'],
          ],
        },
        {
          type: 'liste',
          items: [
            "Le péritoine pelvien se réfléchit entre ces organes, formant des culs-de-sac dont le plus déclive, chez la femme, est le cul-de-sac recto-utérin (cul-de-sac de Douglas), site fréquent d’accumulation d’un épanchement liquidien intrapéritonéal.",
            "Chez l’homme, l’équivalent est le cul-de-sac recto-vésical, entre la face postérieure de la vessie et le rectum.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le cul-de-sac de Douglas en pratique',
          texte:
            "Le cul-de-sac recto-utérin, point le plus déclive de la cavité péritonéale en position debout ou assise, est accessible à la palpation lors du toucher vaginal ou rectal, et à la ponction lors d’une suspicion d’épanchement intrapéritonéal (hémopéritoine, épanchement purulent).",
        },
      ],
    },
  ],
  pointsCles: [
    "L’os coxal résulte de la fusion de l’ilium, de l’ischium et du pubis autour de l’acétabulum.",
    "Le détroit supérieur sépare le grand bassin du petit bassin ; le détroit inférieur ferme le petit bassin en bas.",
    "Le bassin féminin présente un détroit supérieur plus large et un arc pubien plus ouvert que le bassin masculin.",
    "Le diaphragme pelvien, formé par le muscle releveur de l’anus et le muscle ischiococcygien, soutient les organes pelviens.",
    "Le périnée se divise en région antérieure uro-génitale et région postérieure anale, séparées par la ligne bi-ischiatique.",
    "Le centre tendineux du périnée est le point de convergence de plusieurs muscles périnéaux, souvent lésé lors d’une déchirure obstétricale.",
    "Le cul-de-sac recto-utérin (Douglas) chez la femme et le cul-de-sac recto-vésical chez l’homme sont les points les plus déclives du péritoine pelvien.",
  ],
  erreursFrequentes: [
    "Confondre grand bassin et petit bassin : c’est le petit bassin, sous le détroit supérieur, qui contient les organes pelviens.",
    "Oublier que l’acétabulum se forme à la jonction des trois pièces de l’os coxal, et non sur une seule d’entre elles.",
    "Croire que le muscle releveur de l’anus ferme complètement le plancher pelvien, en négligeant l’existence du hiatus urogénital.",
    "Confondre cul-de-sac recto-utérin (le plus déclive, en arrière de l’utérus) et cul-de-sac vésico-utérin (en avant de l’utérus, moins déclive).",
    "Situer la prostate dans le périnée alors qu’elle appartient à l’étage moyen du pelvis, au-dessus du diaphragme pelvien.",
  ],
  mnemotechniques: [
    {
      moyen: 'Ilium, Ischium, Pubis : I-I-P, de haut en bas',
      explication:
        'L’ilium est la pièce la plus haute, l’ischium la pièce postéro-inférieure, le pubis la pièce antéro-inférieure : leur position suit approximativement l’ordre du nom le long du pourtour de l’acétabulum.',
    },
    {
      moyen: 'Douglas est le point le plus bas',
      explication:
        'Le cul-de-sac recto-utérin est le point le plus déclive de la cavité péritonéale chez la femme en position debout : c’est donc le site privilégié d’accumulation et de ponction d’un épanchement.',
    },
  ],
  sources: [
    'Kamina, Anatomie clinique, tome 4, Organes urinaires et génitaux, pelvis, coupes du tronc',
    'Drake, Vogl, Mitchell, Gray’s Anatomie pour les étudiants',
    'Netter, Atlas d’anatomie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'anat-pelvis-perinee-fc-01',
      recto: 'Quelles sont les trois pièces osseuses formant l’os coxal ?',
      verso: 'L’ilium, l’ischium et le pubis, réunis au niveau de l’acétabulum.',
      type: 'classification',
      tags: ['os coxal'],
    },
    {
      id: 'anat-pelvis-perinee-fc-02',
      recto: 'Que sépare le détroit supérieur du bassin ?',
      verso: 'Le grand bassin, au-dessus, du petit bassin, en dessous.',
      type: 'definition',
      tags: ['détroits'],
    },
    {
      id: 'anat-pelvis-perinee-fc-03',
      recto: 'Citer deux différences du bassin féminin par rapport au bassin masculin.',
      verso: 'Un détroit supérieur plus large et plus ovalaire, et un arc pubien plus ouvert (angle sous-pubien supérieur à 90 degrés).',
      type: 'chiffre',
      tags: ['dimorphisme sexuel'],
    },
    {
      id: 'anat-pelvis-perinee-fc-04',
      recto: 'Quels muscles forment le diaphragme pelvien ?',
      verso: 'Le muscle releveur de l’anus et le muscle ischiococcygien.',
      type: 'definition',
      tags: ['diaphragme pelvien'],
    },
    {
      id: 'anat-pelvis-perinee-fc-05',
      recto: 'Qu’est-ce que le hiatus urogénital ?',
      verso: 'L’espace médian antérieur laissé incomplet par les faisceaux pubo-viscéraux du releveur de l’anus, livrant passage à l’urètre et, chez la femme, au vagin.',
      type: 'definition',
      tags: ['diaphragme pelvien'],
    },
    {
      id: 'anat-pelvis-perinee-fc-06',
      recto: 'Quelle ligne sépare le périnée antérieur du périnée postérieur ?',
      verso: 'La ligne transversale passant par les deux tubérosités ischiatiques (ligne bi-ischiatique).',
      type: 'definition',
      tags: ['périnée'],
    },
    {
      id: 'anat-pelvis-perinee-fc-07',
      recto: 'Qu’est-ce que le centre tendineux du périnée (corps périnéal) ?',
      verso: 'Un nœud fibromusculaire médian entre l’anus et le vagin ou le bulbe du pénis, où convergent plusieurs muscles périnéaux, souvent lésé lors d’une déchirure obstétricale.',
      type: 'clinique',
      tags: ['centre tendineux'],
    },
    {
      id: 'anat-pelvis-perinee-fc-08',
      recto: 'Quel organe occupe l’étage moyen du pelvis chez l’homme ?',
      verso: 'Les vésicules séminales et la prostate.',
      type: 'definition',
      tags: ['organes pelviens'],
    },
    {
      id: 'anat-pelvis-perinee-fc-09',
      recto: 'Quel organe occupe l’étage moyen du pelvis chez la femme ?',
      verso: 'L’utérus et le vagin.',
      type: 'definition',
      tags: ['organes pelviens'],
    },
    {
      id: 'anat-pelvis-perinee-fc-10',
      recto: 'Quel est le point le plus déclive de la cavité péritonéale chez la femme ?',
      verso: 'Le cul-de-sac recto-utérin (cul-de-sac de Douglas).',
      type: 'clinique',
      tags: ['péritoine pelvien'],
    },
    {
      id: 'anat-pelvis-perinee-fc-11',
      recto: 'Quel est l’équivalent masculin du cul-de-sac de Douglas ?',
      verso: 'Le cul-de-sac recto-vésical, entre la face postérieure de la vessie et le rectum.',
      type: 'definition',
      tags: ['péritoine pelvien'],
    },
    {
      id: 'anat-pelvis-perinee-fc-12',
      recto: 'Quel élément anatomique délimite l’acétabulum chez l’enfant, avant sa fusion complète ?',
      verso: 'Un cartilage en Y, qui s’ossifie complètement à la puberté.',
      type: 'definition',
      tags: ['os coxal', 'croissance'],
    },
  ],
  qcm: [
    {
      id: 'anat-pelvis-perinee-qcm-01',
      enonce: 'Concernant l’os coxal, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ilium constitue la partie supérieure de l’os coxal.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'L’ischium porte la tubérosité ischiatique.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Le pubis est la pièce la plus postérieure de l’os coxal.', vraie: false, justification: 'Faux : le pubis est antéro-inférieur ; c’est l’ischium qui est postéro-inférieur.' },
        { lettre: 'D', texte: 'L’acétabulum se forme à la jonction des trois pièces de l’os coxal.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'La symphyse pubienne réunit les deux ilium.', vraie: false, justification: 'Faux : la symphyse pubienne réunit les deux pubis, non les deux ilium.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-pelvis-perinee-qcm-02',
      enonce: 'Concernant les détroits du bassin, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le détroit supérieur passe par le promontoire sacré.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le détroit inférieur est délimité en arrière par le coccyx.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Le grand bassin se situe en dessous du détroit supérieur.', vraie: false, justification: 'Faux : le grand bassin se situe au-dessus du détroit supérieur ; le petit bassin est en dessous.' },
        { lettre: 'D', texte: 'Le bassin féminin présente un arc pubien plus fermé que le bassin masculin.', vraie: false, justification: 'Faux : l’arc pubien féminin est au contraire plus ouvert, adapté au passage fœtal.' },
        { lettre: 'E', texte: 'Les tubérosités ischiatiques participent à la délimitation du détroit inférieur.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'anat-pelvis-perinee-qcm-03',
      enonce: 'Concernant le diaphragme pelvien, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est formé notamment par le muscle releveur de l’anus.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Il ferme complètement le petit bassin, sans aucun orifice.', vraie: false, justification: 'Faux : il présente le hiatus urogénital, laissant passer l’urètre et, chez la femme, le vagin.' },
        { lettre: 'C', texte: 'Le muscle ischiococcygien complète en arrière le diaphragme pelvien.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Son affaiblissement peut favoriser un prolapsus des organes pelviens.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Il est innervé exclusivement par le nerf phrénique.', vraie: false, justification: 'Faux : il est innervé par le nerf du muscle releveur de l’anus et des branches du plexus sacral ; le nerf phrénique innerve le diaphragme thoracique.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-pelvis-perinee-qcm-04',
      enonce: 'Concernant le périnée, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La ligne bi-ischiatique sépare le périnée antérieur du périnée postérieur.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le canal anal appartient au périnée antérieur.', vraie: false, justification: 'Faux : le canal anal appartient au périnée postérieur.' },
        { lettre: 'C', texte: 'Le centre tendineux du périnée est un point de convergence musculaire.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le muscle transverse profond du périnée appartient au plan superficiel du périnée antérieur.', vraie: false, justification: 'Faux : il appartient au plan profond (espace périnéal profond).' },
        { lettre: 'E', texte: 'Le muscle bulbospongieux s’insère notamment sur le centre tendineux du périnée.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-pelvis-perinee-qcm-05',
      enonce: 'Concernant les organes pelviens, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Chez l’homme, la prostate occupe l’étage moyen du pelvis.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Chez la femme, le rectum occupe l’étage antérieur du pelvis.', vraie: false, justification: 'Faux : le rectum occupe l’étage postérieur, chez la femme comme chez l’homme.' },
        { lettre: 'C', texte: 'Le cul-de-sac recto-utérin est le point le plus déclive de la cavité péritonéale chez la femme.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le cul-de-sac recto-vésical est l’équivalent masculin du cul-de-sac de Douglas.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'La vessie occupe l’étage postérieur du pelvis.', vraie: false, justification: 'Faux : la vessie occupe l’étage antérieur du pelvis.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-pelvis-perinee-qcm-06',
      enonce: 'Concernant le dimorphisme sexuel du bassin, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le bassin féminin a un diamètre bi-ischiatique plus grand que le bassin masculin.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le bassin masculin présente des ailes iliaques plus évasées que le bassin féminin.', vraie: false, justification: 'Faux : c’est l’inverse, les ailes iliaques sont plus évasées chez la femme.' },
        { lettre: 'C', texte: 'L’angle sous-pubien est en moyenne plus ouvert chez la femme.', vraie: true, justification: 'Exact, supérieur à 90 degrés.' },
        { lettre: 'D', texte: 'Le détroit supérieur féminin est en moyenne plus ovalaire et plus large que le masculin.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Ces différences n’ont aucune signification fonctionnelle.', vraie: false, justification: 'Faux : elles sont adaptées au passage du mobile fœtal lors de l’accouchement.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
