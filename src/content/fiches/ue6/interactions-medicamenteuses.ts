import type { Fiche } from '../../types';

export const ficheInteractionsMedicamenteuses: Fiche = {
  id: 'ue6-interactions-medicamenteuses',
  ue: 'ue6',
  titre: 'Interactions médicamenteuses',
  sousTitre: 'Interactions pharmacocinétiques et pharmacodynamiques, synergie, antagonisme, populations à risque',
  chapitre: 'Bon usage et développement',
  ordre: 9,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'interaction médicamenteuse',
    'interaction pharmacocinétique',
    'interaction pharmacodynamique',
    'synergie',
    'antagonisme',
    'induction enzymatique',
    'inhibition enzymatique',
    'population à risque',
  ],
  objectifs: [
    'Distinguer interaction pharmacocinétique et interaction pharmacodynamique.',
    'Décrire les principaux mécanismes d’interaction à chaque étape pharmacocinétique.',
    'Différencier synergie additive, synergie de potentialisation et antagonisme.',
    'Citer des exemples classiques de mécanismes d’interaction.',
    'Identifier les populations les plus à risque d’interactions médicamenteuses cliniquement significatives.',
  ],
  sections: [
    {
      id: 'generalites',
      titre: 'Généralités sur les interactions médicamenteuses',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une interaction médicamenteuse est la modification de l’effet d’un médicament par l’administration concomitante d’un autre médicament, d’un aliment, d’une plante ou d’une substance quelconque. Elle peut se traduire par une augmentation ou une diminution de l’efficacité ou de la toxicité du médicament concerné.",
        },
        {
          type: 'liste',
          items: [
            'Les interactions médicamenteuses se classent en deux grandes catégories : les interactions pharmacocinétiques, qui modifient la quantité de médicament disponible au site d’action, et les interactions pharmacodynamiques, qui modifient l’effet du médicament sans changer sa concentration.',
            'Une même association médicamenteuse peut combiner plusieurs mécanismes d’interaction simultanément.',
            'Toutes les interactions ne sont pas cliniquement significatives : leur importance dépend de l’ampleur de la modification et de la marge thérapeutique des médicaments concernés.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Interaction n’est pas toujours synonyme de danger',
          texte:
            "Certaines interactions sont volontairement recherchées en thérapeutique, par exemple pour potentialiser un effet ou réduire une toxicité, comme l’association d’un diurétique épargneur de potassium à un diurétique hypokaliémiant pour limiter le risque d’hypokaliémie.",
        },
      ],
    },
    {
      id: 'interactions-pharmacocinetiques',
      titre: 'Interactions pharmacocinétiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les interactions pharmacocinétiques modifient l’absorption, la distribution, le métabolisme ou l’élimination d’un médicament, aboutissant à une variation de sa concentration plasmatique et donc de son effet.",
        },
        {
          type: 'tableau',
          titre: 'Mécanismes d’interaction pharmacocinétique selon l’étape concernée',
          colonnes: ['Étape', 'Mécanisme', 'Exemple'],
          lignes: [
            ['Absorption', 'Chélation digestive, modification du pH gastrique, modification de la motilité digestive', 'Le calcium des produits laitiers réduit l’absorption de certains antibiotiques'],
            ['Distribution', 'Déplacement de la fixation aux protéines plasmatiques', 'Compétition entre deux médicaments fortement liés à l’albumine'],
            ['Métabolisme', 'Induction ou inhibition enzymatique, notamment des cytochromes P450', 'La rifampicine induit le CYP3A4 et diminue l’efficacité de nombreux substrats'],
            ['Élimination', 'Modification du pH urinaire, compétition pour la sécrétion tubulaire active', 'L’alcalinisation des urines augmente l’élimination des acides faibles'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Interaction par induction ou inhibition enzymatique',
          texte:
            "L’induction enzymatique diminue en général la concentration plasmatique du substrat, avec un risque d’inefficacité thérapeutique, et s’installe progressivement. L’inhibition enzymatique augmente en général la concentration plasmatique du substrat, avec un risque de surdosage, et s’installe rapidement.",
        },
      ],
    },
    {
      id: 'interactions-pharmacodynamiques',
      titre: 'Interactions pharmacodynamiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les interactions pharmacodynamiques modifient l’effet d’un médicament sans changer sa concentration plasmatique, par un mécanisme d’action convergent ou opposé au niveau du système biologique ciblé.",
        },
        {
          type: 'tableau',
          titre: 'Types d’interactions pharmacodynamiques',
          colonnes: ['Type', 'Mécanisme', 'Exemple'],
          lignes: [
            ['Synergie additive', 'Deux médicaments agissant par des mécanismes différents sur le même effet, dont les effets s’additionnent', 'Association de deux antihypertenseurs de classes différentes'],
            ['Synergie de potentialisation', 'L’effet de l’association dépasse la simple somme des effets individuels', 'Association d’un anesthésique et d’un opioïde en anesthésie générale'],
            ['Antagonisme pharmacodynamique', 'Deux médicaments ayant des effets opposés sur le même système, l’un réduisant l’effet de l’autre', 'Administration de naloxone pour antagoniser une intoxication aux opioïdes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Risque cumulatif d’effets indésirables',
          texte:
            "Une interaction pharmacodynamique par synergie peut également concerner les effets indésirables, et non uniquement l’effet thérapeutique recherché : l’association de plusieurs médicaments sédatifs, par exemple, majore le risque de dépression respiratoire par addition de leurs effets dépresseurs du système nerveux central.",
        },
      ],
    },
    {
      id: 'synergie-antagonisme',
      titre: 'Synergie et antagonisme : notions générales',
      blocs: [
        {
          type: 'definition',
          terme: 'Synergie',
          definition:
            "Situation où l’association de deux médicaments produit un effet global supérieur ou égal à la somme de leurs effets pris isolément, qu’elle soit additive (somme simple des effets) ou de potentialisation (effet supérieur à la simple somme).",
        },
        {
          type: 'definition',
          terme: 'Antagonisme pharmacologique',
          definition:
            "Situation où l’association de deux substances aboutit à un effet global inférieur à celui attendu de chacune prise isolément, l’une des substances réduisant ou annulant l’effet de l’autre, par un mécanisme pharmacocinétique ou pharmacodynamique.",
        },
        {
          type: 'liste',
          items: [
            'L’antagonisme peut être recherché à visée thérapeutique, comme l’usage d’antidotes en toxicologie.',
            'L’antagonisme peut aussi être délétère, lorsqu’un médicament réduit involontairement l’efficacité d’un traitement en cours, par exemple un anti-inflammatoire non stéroïdien réduisant l’effet antihypertenseur de certains médicaments.',
            'La distinction entre synergie additive et synergie de potentialisation repose sur la comparaison entre l’effet observé et la somme mathématique des effets attendus.',
          ],
        },
      ],
    },
    {
      id: 'exemples-mecanismes',
      titre: 'Exemples de mécanismes d’interaction',
      blocs: [
        {
          type: 'tableau',
          titre: 'Exemples classiques d’interactions à mécanisme identifié',
          colonnes: ['Association', 'Mécanisme', 'Conséquence'],
          lignes: [
            ['Jus de pamplemousse et certains inhibiteurs calciques', 'Inhibition du CYP3A4 intestinal', 'Augmentation de la biodisponibilité et du risque de surdosage'],
            ['Anticoagulants oraux et anti-inflammatoires non stéroïdiens', 'Synergie pharmacodynamique sur le risque hémorragique digestif', 'Majoration du risque de saignement'],
            ['Millepertuis et de nombreux médicaments', 'Induction enzymatique large spectre, notamment du CYP3A4', 'Diminution de l’efficacité des médicaments concernés'],
            ['Diurétiques hypokaliémiants et digoxine', 'Interaction pharmacodynamique favorisée par l’hypokaliémie', 'Majoration du risque de toxicité cardiaque de la digoxine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le millepertuis, un inducteur d’origine végétale',
          texte:
            "Le millepertuis, plante médicinale disponible sans ordonnance, est un inducteur enzymatique puissant à large spectre, notamment du CYP3A4. Son association avec de nombreux médicaments, y compris certains traitements à marge thérapeutique étroite, peut entraîner une perte d’efficacité cliniquement significative.",
        },
      ],
    },
    {
      id: 'populations-risque',
      titre: 'Populations à risque d’interactions',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Certaines populations sont particulièrement exposées au risque d’interactions médicamenteuses cliniquement significatives, en raison de la polymédication, de la fragilité physiologique ou de particularités pharmacocinétiques et pharmacodynamiques propres.",
        },
        {
          type: 'tableau',
          titre: 'Populations particulièrement à risque',
          colonnes: ['Population', 'Facteur de risque principal'],
          lignes: [
            ['Sujet âgé', 'Polymédication fréquente, réduction des fonctions rénale et hépatique, sensibilité accrue aux effets du système nerveux central'],
            ['Insuffisant rénal ou hépatique', 'Modification de la clairance des médicaments et de leurs interactants'],
            ['Patient sous médicament à marge thérapeutique étroite', 'Sensibilité accrue à toute variation de concentration plasmatique'],
            ['Femme enceinte', 'Modifications physiologiques de la pharmacocinétique, vigilance accrue pour le fœtus'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Polymédication et risque d’interaction',
          texte:
            "Le risque d’interaction médicamenteuse augmente de façon non linéaire avec le nombre de médicaments prescrits simultanément, ce qui justifie une réévaluation régulière des ordonnances chez les patients polymédiqués, en particulier chez le sujet âgé.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les interactions médicamenteuses se classent en interactions pharmacocinétiques et pharmacodynamiques.",
    "Les interactions pharmacocinétiques modifient la concentration du médicament, à chacune des quatre étapes de la pharmacocinétique.",
    "Les interactions pharmacodynamiques modifient l’effet sans changer la concentration plasmatique.",
    "La synergie peut être additive ou de potentialisation, selon l’ampleur de l’effet global observé.",
    "L’antagonisme pharmacologique peut être thérapeutique, comme un antidote, ou délétère, en réduisant l’efficacité d’un traitement.",
    "Le millepertuis et le jus de pamplemousse sont des exemples fréquents d’interactions d’origine non médicamenteuse.",
    "Le sujet âgé polymédiqué est une population particulièrement exposée au risque d’interactions cliniquement significatives.",
  ],
  erreursFrequentes: [
    "Confondre interaction pharmacocinétique et interaction pharmacodynamique.",
    "Croire que toute interaction médicamenteuse est nécessairement dangereuse, en oubliant les associations volontairement recherchées.",
    "Penser que l’induction enzymatique augmente toujours la concentration du substrat, alors qu’elle la diminue.",
    "Oublier que le millepertuis, bien que d’origine végétale, est un inducteur enzymatique puissant.",
    "Négliger le risque d’interaction lié à l’hypokaliémie induite par certains diurétiques sur la toxicité de la digoxine.",
  ],
  mnemotechniques: [
    {
      moyen: 'PK-PD : quantité versus effet',
      explication:
        'Une interaction pharmacocinétique (PK) change la quantité de médicament disponible, une interaction pharmacodynamique (PD) change l’effet sans changer la quantité.',
    },
    {
      moyen: 'Millepertuis = Mille effets induits',
      explication:
        'Le millepertuis est un inducteur enzymatique à large spectre, capable de diminuer l’efficacité de nombreux médicaments associés.',
    },
    {
      moyen: 'Synergie = Somme ou plus',
      explication:
        'La synergie additive correspond à la somme des effets, la synergie de potentialisation dépasse cette somme.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-interactions-medicamenteuses-fc-01',
      recto: 'Quelles sont les deux grandes catégories d’interactions médicamenteuses ?',
      verso: 'Les interactions pharmacocinétiques et les interactions pharmacodynamiques.',
      type: 'classification',
      tags: ['interactions'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-02',
      recto: 'Qu’est-ce qu’une interaction pharmacocinétique ?',
      verso: 'Une modification de l’absorption, de la distribution, du métabolisme ou de l’élimination d’un médicament par un autre facteur.',
      type: 'definition',
      tags: ['interaction pharmacocinétique'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-03',
      recto: 'Qu’est-ce qu’une interaction pharmacodynamique ?',
      verso: 'Une modification de l’effet d’un médicament sans changement de sa concentration plasmatique.',
      type: 'definition',
      tags: ['interaction pharmacodynamique'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-04',
      recto: 'Quel est l’effet attendu d’une induction enzymatique sur la concentration d’un substrat ?',
      verso: 'Une diminution de la concentration plasmatique du substrat, avec risque d’inefficacité.',
      type: 'mecanisme',
      tags: ['induction enzymatique'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-05',
      recto: 'Quel est l’effet attendu d’une inhibition enzymatique sur la concentration d’un substrat ?',
      verso: 'Une augmentation de la concentration plasmatique du substrat, avec risque de surdosage.',
      type: 'mecanisme',
      tags: ['inhibition enzymatique'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-06',
      recto: 'Qu’est-ce que la synergie de potentialisation ?',
      verso: 'Une situation où l’effet global de l’association dépasse la simple somme des effets individuels.',
      type: 'definition',
      tags: ['synergie'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-07',
      recto: 'Donner un exemple d’antagonisme pharmacologique thérapeutique.',
      verso: 'L’administration de naloxone pour antagoniser une intoxication aux opioïdes.',
      type: 'clinique',
      tags: ['antagonisme'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-08',
      recto: 'Quel inducteur enzymatique d’origine végétale est disponible sans ordonnance ?',
      verso: 'Le millepertuis.',
      type: 'clinique',
      tags: ['induction enzymatique'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-09',
      recto: 'Pourquoi l’hypokaliémie majore-t-elle le risque de toxicité de la digoxine ?',
      verso: 'Par une interaction pharmacodynamique favorisée par le déficit en potassium au niveau cardiaque.',
      type: 'mecanisme',
      tags: ['digoxine', 'hypokaliémie'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-10',
      recto: 'Citer une population particulièrement à risque d’interactions médicamenteuses.',
      verso: 'Le sujet âgé polymédiqué, en raison de la réduction des fonctions rénale et hépatique.',
      type: 'clinique',
      tags: ['population à risque'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-11',
      recto: 'Quel est le mécanisme de l’interaction entre jus de pamplemousse et certains inhibiteurs calciques ?',
      verso: 'L’inhibition du CYP3A4 intestinal, augmentant la biodisponibilité du médicament.',
      type: 'mecanisme',
      tags: ['inhibition enzymatique'],
    },
    {
      id: 'ue6-interactions-medicamenteuses-fc-12',
      recto: 'Quel risque majore l’association d’un anticoagulant oral et d’un anti-inflammatoire non stéroïdien ?',
      verso: 'Le risque hémorragique digestif, par synergie pharmacodynamique.',
      type: 'clinique',
      tags: ['synergie', 'anticoagulants'],
    },
  ],
  qcm: [
    {
      id: 'ue6-interactions-medicamenteuses-qcm-01',
      enonce: 'Concernant les interactions médicamenteuses en général, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une interaction médicamenteuse est toujours délétère pour le patient.', vraie: false, justification: 'Certaines interactions sont volontairement recherchées à visée thérapeutique.' },
        { lettre: 'B', texte: 'Une interaction peut impliquer un aliment ou une plante, et pas seulement un autre médicament.', vraie: true, justification: 'Le jus de pamplemousse ou le millepertuis en sont des exemples classiques.' },
        { lettre: 'C', texte: 'Toutes les interactions médicamenteuses sont cliniquement significatives.', vraie: false, justification: 'Leur importance dépend de l’ampleur de la modification et de la marge thérapeutique des médicaments concernés.' },
        { lettre: 'D', texte: 'Une association peut combiner plusieurs mécanismes d’interaction simultanément.', vraie: true, justification: 'Des interactions pharmacocinétiques et pharmacodynamiques peuvent coexister pour une même association.' },
        { lettre: 'E', texte: 'Les interactions médicamenteuses ne concernent que les médicaments de prescription.', vraie: false, justification: 'Des substances sans ordonnance, comme certaines plantes ou aliments, peuvent également interagir avec un médicament.' },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 1,
    },
    {
      id: 'ue6-interactions-medicamenteuses-qcm-02',
      enonce: 'Concernant les interactions pharmacocinétiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elles peuvent survenir à l’étape d’absorption, de distribution, de métabolisme ou d’élimination.', vraie: true, justification: 'Chacune de ces quatre étapes peut être le siège d’un mécanisme d’interaction.' },
        { lettre: 'B', texte: 'L’induction enzymatique s’installe en général plus rapidement que l’inhibition enzymatique.', vraie: false, justification: 'C’est l’inverse : l’inhibition est en général rapide, l’induction s’installe progressivement.' },
        { lettre: 'C', texte: 'La rifampicine peut réduire l’efficacité de médicaments métabolisés par le CYP3A4.', vraie: true, justification: 'Elle induit ce cytochrome, accélérant le métabolisme de ses substrats.' },
        { lettre: 'D', texte: 'L’alcalinisation des urines peut augmenter l’élimination des acides faibles.', vraie: true, justification: 'Elle maintient l’acide faible sous forme ionisée non réabsorbable, favorisant son élimination.' },
        { lettre: 'E', texte: 'Une interaction pharmacocinétique ne peut jamais impliquer la fixation aux protéines plasmatiques.', vraie: false, justification: 'Le déplacement de la fixation protéique est au contraire un mécanisme d’interaction pharmacocinétique reconnu.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-interactions-medicamenteuses-qcm-03',
      enonce: 'Concernant les interactions pharmacodynamiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elles modifient l’effet du médicament sans changer sa concentration plasmatique.', vraie: true, justification: 'C’est la caractéristique qui les distingue des interactions pharmacocinétiques.' },
        { lettre: 'B', texte: 'L’association de plusieurs sédatifs peut majorer le risque de dépression respiratoire par synergie.', vraie: true, justification: 'Les effets dépresseurs du système nerveux central s’additionnent ou se potentialisent.' },
        { lettre: 'C', texte: 'La naloxone illustre un antagonisme pharmacodynamique.', vraie: true, justification: 'Elle antagonise les effets des opioïdes au niveau des récepteurs concernés.' },
        { lettre: 'D', texte: 'La synergie additive correspond à un effet global supérieur à la somme des effets individuels.', vraie: false, justification: 'La synergie additive correspond à la somme des effets ; c’est la synergie de potentialisation qui dépasse cette somme.' },
        { lettre: 'E', texte: 'Une interaction pharmacodynamique peut concerner les effets indésirables, pas seulement l’effet thérapeutique.', vraie: true, justification: 'Les effets indésirables peuvent eux aussi être majorés par une synergie pharmacodynamique.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-interactions-medicamenteuses-qcm-04',
      enonce: 'Concernant des exemples classiques d’interactions, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le millepertuis est un inhibiteur enzymatique large spectre.', vraie: false, justification: 'Le millepertuis est au contraire un inducteur enzymatique puissant, notamment du CYP3A4.' },
        { lettre: 'B', texte: 'L’association d’un anticoagulant oral et d’un anti-inflammatoire non stéroïdien majore le risque hémorragique digestif.', vraie: true, justification: 'C’est un exemple classique de synergie pharmacodynamique délétère.' },
        { lettre: 'C', texte: 'Le jus de pamplemousse inhibe le CYP3A4 intestinal.', vraie: true, justification: 'Cette inhibition augmente la biodisponibilité orale de nombreux substrats.' },
        { lettre: 'D', texte: 'L’hypokaliémie induite par certains diurétiques peut majorer la toxicité cardiaque de la digoxine.', vraie: true, justification: 'C’est un exemple classique d’interaction pharmacodynamique favorisée par un déséquilibre électrolytique.' },
        { lettre: 'E', texte: 'Le millepertuis n’interagit avec aucun médicament de prescription.', vraie: false, justification: 'Il peut au contraire interagir avec de nombreux médicaments, y compris certains à marge thérapeutique étroite.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-interactions-medicamenteuses-qcm-05',
      enonce: 'Concernant les populations à risque d’interactions médicamenteuses, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le sujet âgé polymédiqué est une population particulièrement à risque.', vraie: true, justification: 'La polymédication et la réduction des fonctions d’organe augmentent le risque d’interactions cliniquement significatives.' },
        { lettre: 'B', texte: 'L’insuffisance rénale ou hépatique peut modifier la clairance des médicaments interagissant entre eux.', vraie: true, justification: 'Ces insuffisances d’organe modifient l’élimination des médicaments, majorant certains risques d’interaction.' },
        { lettre: 'C', texte: 'Les médicaments à marge thérapeutique étroite sont moins sensibles aux interactions.', vraie: false, justification: 'Ils sont au contraire particulièrement sensibles à toute variation de concentration plasmatique.' },
        { lettre: 'D', texte: 'Le risque d’interaction augmente avec le nombre de médicaments prescrits simultanément.', vraie: true, justification: 'La polymédication est un facteur de risque reconnu d’interactions médicamenteuses.' },
        { lettre: 'E', texte: 'La grossesse ne modifie jamais le risque d’interaction médicamenteuse.', vraie: false, justification: 'Les modifications physiologiques de la grossesse peuvent modifier la pharmacocinétique et justifier une vigilance accrue.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-interactions-medicamenteuses-qcm-06',
      enonce: 'Concernant la synergie et l’antagonisme, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’antagonisme pharmacologique peut résulter d’un mécanisme pharmacocinétique ou pharmacodynamique.', vraie: true, justification: 'Les deux types de mécanismes peuvent aboutir à une réduction de l’effet attendu.' },
        { lettre: 'B', texte: 'L’antagonisme est toujours recherché à visée thérapeutique.', vraie: false, justification: 'Il peut aussi être délétère, en réduisant involontairement l’efficacité d’un traitement en cours.' },
        { lettre: 'C', texte: 'Un anti-inflammatoire non stéroïdien peut réduire l’effet antihypertenseur de certains médicaments.', vraie: true, justification: 'C’est un exemple classique d’antagonisme pharmacodynamique délétère.' },
        { lettre: 'D', texte: 'La synergie additive et la synergie de potentialisation se distinguent par l’ampleur de l’effet global observé.', vraie: true, justification: 'La potentialisation dépasse la simple somme des effets individuels, contrairement à l’additivité.' },
        { lettre: 'E', texte: 'Deux médicaments antagonistes ont toujours un effet nul lorsqu’ils sont associés.', vraie: false, justification: 'L’antagonisme réduit l’effet attendu, mais ne l’annule pas nécessairement totalement selon les doses en jeu.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
