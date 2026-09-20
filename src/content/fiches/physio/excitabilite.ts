import type { Fiche } from '../../types';

export const ficheExcitabilite: Fiche = {
  id: 'physio-excitabilite',
  ue: 'physio',
  titre: 'Excitabilité cellulaire',
  sousTitre: 'Potentiel de repos, potentiel d’action et conduction nerveuse',
  chapitre: 'Bases',
  ordre: 2,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'potentiel de repos',
    'équation de Nernst',
    'potentiel d’action',
    'canaux voltage-dépendants',
    'période réfractaire',
    'conduction saltatoire',
    'gaine de myéline',
    'excitabilité',
  ],
  objectifs: [
    "Expliquer l’origine du potentiel de repos membranaire à partir des gradients ioniques.",
    'Utiliser l’équation de Nernst pour calculer un potentiel d’équilibre ionique.',
    'Décrire les phases du potentiel d’action et les canaux voltage-dépendants impliqués.',
    'Distinguer période réfractaire absolue et période réfractaire relative.',
    'Expliquer le principe de la conduction saltatoire et son intérêt fonctionnel.',
  ],
  sections: [
    {
      id: 'potentiel-repos',
      titre: 'Potentiel de repos membranaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Toute cellule vivante présente une différence de potentiel électrique entre le milieu intracellulaire et le milieu extracellulaire, appelée potentiel de membrane. Au repos, ce potentiel est stable et négatif à l’intérieur de la cellule : c’est le potentiel de repos membranaire, qui vaut environ -70 mV dans un neurone typique et environ -90 mV dans une cellule musculaire squelettique.",
        },
        {
          type: 'liste',
          items: [
            "Le potentiel de repos résulte de deux facteurs conjoints : les gradients de concentration ioniques entretenus par des transporteurs actifs, et la perméabilité sélective de la membrane, plus élevée pour le potassium que pour le sodium au repos.",
            "La pompe Na+/K+-ATPase maintient le gradient en expulsant trois ions Na+ contre l’entrée de deux ions K+, pour une molécule d’ATP hydrolysée : elle est électrogène mais ne contribue que modestement au potentiel de repos par rapport aux gradients de diffusion passive.",
            "Au repos, la membrane est beaucoup plus perméable au potassium qu’au sodium grâce aux canaux de fuite potassiques, ce qui explique que le potentiel de repos soit proche du potentiel d’équilibre du potassium.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Valeurs usuelles du potentiel de repos',
          texte:
            "Neurone : environ -70 mV. Fibre musculaire squelettique : environ -90 mV. Fibre musculaire cardiaque ventriculaire : environ -90 mV. Ces valeurs restent stables entre deux potentiels d’action et définissent l’état de polarisation de base de la cellule.",
        },
      ],
    },
    {
      id: 'nernst-goldman',
      titre: 'Équations de Nernst et de Goldman',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le potentiel d’équilibre d’un ion est la différence de potentiel transmembranaire pour laquelle le flux net de cet ion, sous l’effet conjoint du gradient chimique et du gradient électrique, est nul. Il se calcule par l’équation de Nernst pour chaque ion pris isolément.",
        },
        {
          type: 'formule',
          expression: 'E(ion) = (RT / zF) × ln ( [ion]extracellulaire / [ion]intracellulaire )',
          legende:
            "R : constante des gaz parfaits ; T : température absolue ; z : valence de l’ion ; F : constante de Faraday. À 37 °C, pour un ion monovalent, le facteur RT/F converti en log décimal donne une valeur pratique voisine de 61 mV.",
          unites: 'mV',
        },
        {
          type: 'tableau',
          titre: 'Potentiels d’équilibre usuels (neurone)',
          colonnes: ['Ion', 'Concentration extracellulaire', 'Concentration intracellulaire', 'Potentiel d’équilibre approximatif'],
          lignes: [
            ['K+', 'environ 4-5 mmol/L', 'environ 140 mmol/L', 'environ -90 mV'],
            ['Na+', 'environ 140 mmol/L', 'environ 10-14 mmol/L', 'environ +60 mV'],
            ['Cl-', 'environ 100-106 mmol/L', 'environ 4-10 mmol/L', 'proche du potentiel de repos'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Nernst ne suffit pas à expliquer le potentiel de repos',
          texte:
            "L’équation de Nernst donne le potentiel d’équilibre d’un seul ion. Le potentiel de repos réel de la membrane, qui dépend de la perméabilité simultanée à plusieurs ions, est mieux approché par l’équation de Goldman-Hodgkin-Katz, qui pondère chaque potentiel d’équilibre ionique par la perméabilité relative de la membrane à cet ion.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le sens des gradients',
          texte:
            "Le potentiel d’équilibre du potassium (environ -90 mV) est proche du potentiel de repos car la membrane est surtout perméable au potassium au repos. Le potentiel d’équilibre du sodium (environ +60 mV) est très éloigné du repos : c’est ce grand gradient électrochimique qui rend l’entrée de sodium si efficace pour dépolariser la membrane lors du potentiel d’action.",
        },
      ],
    },
    {
      id: 'potentiel-action',
      titre: 'Le potentiel d’action',
      blocs: [
        {
          type: 'definition',
          terme: 'Potentiel d’action',
          definition:
            "Variation rapide, transitoire et stéréotypée du potentiel de membrane, déclenchée lorsque celui-ci atteint un seuil de dépolarisation, et qui se propage sans décrément le long de la membrane excitable. Il répond à la loi du tout ou rien : en dessous du seuil, aucun potentiel d’action ne se déclenche ; au-dessus, sa forme et son amplitude sont indépendantes de l’intensité du stimulus.",
        },
        {
          type: 'etapes',
          titre: 'Les phases du potentiel d’action neuronal',
          etapes: [
            {
              titre: 'Dépolarisation seuil',
              detail:
                "Un stimulus dépolarise la membrane jusqu’au potentiel seuil, ce qui ouvre les canaux sodiques voltage-dépendants.",
            },
            {
              titre: 'Phase ascendante (dépolarisation)',
              detail:
                "L’ouverture massive des canaux Na+ voltage-dépendants entraîne une entrée rapide de sodium, qui dépolarise fortement la membrane et la rapproche du potentiel d’équilibre du sodium. C’est un exemple de rétrocontrôle positif localisé.",
            },
            {
              titre: 'Phase de repolarisation',
              detail:
                "Les canaux Na+ s’inactivent spontanément et les canaux K+ voltage-dépendants, plus lents à s’ouvrir, laissent sortir le potassium, ce qui ramène le potentiel vers des valeurs négatives.",
            },
            {
              titre: 'Post-hyperpolarisation',
              detail:
                "La fermeture retardée des canaux K+ voltage-dépendants entraîne un potentiel transitoirement plus négatif que le potentiel de repos, avant le retour à l’état stable.",
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Canaux voltage-dépendants impliqués',
          colonnes: ['Canal', 'Cinétique d’ouverture', 'Cinétique de fermeture', 'Rôle'],
          lignes: [
            ['Na+ voltage-dépendant', 'Rapide, dès le seuil', 'Inactivation rapide et automatique', 'Phase ascendante du potentiel d’action'],
            ['K+ voltage-dépendant', 'Plus lente que le canal Na+', 'Fermeture retardée', 'Repolarisation et post-hyperpolarisation'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les trois états du canal sodique voltage-dépendant',
          texte:
            "Le canal Na+ voltage-dépendant possède trois états fonctionnels : fermé (au repos, activable), ouvert (pendant la dépolarisation) et inactivé (état réfractaire, distinct de l’état fermé, incapable de s’ouvrir même si la membrane est dépolarisée). Le retour à l’état fermé activable ne se produit qu’après repolarisation suffisante de la membrane.",
        },
      ],
    },
    {
      id: 'periodes-refractaires',
      titre: 'Périodes réfractaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Après le déclenchement d’un potentiel d’action, la membrane traverse une période durant laquelle son excitabilité est modifiée : c’est la période réfractaire, directement liée à l’état des canaux Na+ voltage-dépendants.",
        },
        {
          type: 'comparaison',
          titre: 'Période réfractaire absolue et relative',
          gauche: {
            titre: 'Période réfractaire absolue',
            points: [
              'Correspond à la phase où les canaux Na+ sont inactivés.',
              'Aucun nouveau potentiel d’action ne peut être déclenché, quelle que soit l’intensité du stimulus.',
              'Elle limite la fréquence maximale de décharge de la cellule excitable.',
            ],
          },
          droite: {
            titre: 'Période réfractaire relative',
            points: [
              'Suit la période absolue, lorsqu’une partie des canaux Na+ redevient disponible.',
              'Un potentiel d’action peut être déclenché mais nécessite un stimulus plus intense que la normale.',
              'Correspond globalement à la phase de post-hyperpolarisation.',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Conséquence fonctionnelle',
          texte:
            "La période réfractaire absolue garantit le caractère unidirectionnel de la propagation du potentiel d’action : la zone membranaire qui vient de s’exciter ne peut pas être réexcitée immédiatement par le courant local, ce qui empêche la propagation en sens rétrograde.",
        },
      ],
    },
    {
      id: 'conduction',
      titre: 'Conduction de l’influx nerveux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La vitesse de conduction d’un potentiel d’action le long d’un axone dépend de deux facteurs principaux : le diamètre de la fibre et la présence ou l’absence de gaine de myéline.",
        },
        {
          type: 'definition',
          terme: 'Conduction saltatoire',
          definition:
            "Mode de propagation du potentiel d’action le long d’une fibre myélinisée, dans lequel la dépolarisation saute d’un nœud de Ranvier à l’autre, la gaine de myéline agissant comme isolant électrique entre les nœuds. Les canaux Na+ voltage-dépendants sont concentrés au niveau des nœuds de Ranvier.",
        },
        {
          type: 'liste',
          items: [
            "Dans une fibre myélinisée, le courant local dépolarisant se propage passivement et rapidement sous la gaine de myéline jusqu’au nœud de Ranvier suivant, où il régénère activement le potentiel d’action.",
            "La conduction saltatoire augmente considérablement la vitesse de conduction, tout en réduisant la dépense énergétique liée au fonctionnement de la pompe Na+/K+-ATPase, puisque les échanges ioniques ne se produisent qu’au niveau des nœuds.",
            "À diamètre égal, une fibre myélinisée conduit toujours plus vite qu’une fibre amyélinique.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Facteurs influençant la vitesse de conduction',
          colonnes: ['Facteur', 'Effet sur la vitesse', 'Exemple'],
          lignes: [
            ['Diamètre de la fibre', 'Plus le diamètre est grand, plus la résistance longitudinale est faible et plus la conduction est rapide', 'Fibres motrices Aα, très rapides'],
            ['Myélinisation', 'La conduction saltatoire accélère fortement la propagation', 'Fibres Aα, Aβ, Aγ, Aδ myélinisées versus fibres C amyéliniques'],
            ['Température', 'Le refroidissement ralentit la conduction', 'Utilisé en anesthésie locale par le froid'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Démyélinisation et conduction',
          texte:
            "Dans les maladies démyélinisantes comme la sclérose en plaques, la perte de myéline expose une plus grande surface membranaire dépourvue de canaux Na+ voltage-dépendants suffisants. Le courant local s’atténue avant d’atteindre le nœud de Ranvier suivant, ce qui ralentit la conduction, voire la bloque complètement si l’amplitude devient insuffisante pour atteindre le seuil.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le potentiel de repos membranaire est d’environ -70 mV dans un neurone, lié à la forte perméabilité au potassium au repos.",
    "L’équation de Nernst donne le potentiel d’équilibre d’un ion isolé ; l’équation de Goldman pondère plusieurs ions selon leurs perméabilités relatives.",
    "Le potentiel d’équilibre du potassium est proche de -90 mV, celui du sodium proche de +60 mV.",
    "Le potentiel d’action obéit à la loi du tout ou rien et comprend une dépolarisation portée par l’entrée de Na+ puis une repolarisation portée par la sortie de K+.",
    "La période réfractaire absolue correspond à l’inactivation des canaux Na+ voltage-dépendants et empêche tout nouveau potentiel d’action.",
    "La conduction saltatoire, propre aux fibres myélinisées, accélère la propagation en faisant sauter la dépolarisation d’un nœud de Ranvier à l’autre.",
    "La vitesse de conduction augmente avec le diamètre de la fibre et avec la myélinisation.",
  ],
  erreursFrequentes: [
    "Confondre le potentiel de repos et le potentiel d’équilibre du potassium : ils sont proches mais non identiques, le potentiel de repos intégrant une faible perméabilité au sodium.",
    "Croire que la pompe Na+/K+-ATPase est la cause principale du potentiel de repos : son rôle est de maintenir les gradients, la perméabilité sélective au potassium étant le facteur déterminant immédiat.",
    "Penser que l’intensité du stimulus modifie l’amplitude du potentiel d’action : la loi du tout ou rien impose une amplitude stéréotypée, seule la fréquence de décharge varie.",
    "Confondre l’état inactivé et l’état fermé du canal Na+ voltage-dépendant : seul l’état fermé peut s’ouvrir en réponse à une dépolarisation.",
    "Oublier que la période réfractaire relative nécessite un stimulus plus intense, et non qu’elle rend toute excitation impossible.",
    "Croire que la myéline contient des canaux ioniques : elle est au contraire un isolant, les canaux Na+ voltage-dépendants étant concentrés aux nœuds de Ranvier.",
  ],
  mnemotechniques: [
    {
      moyen: '« Repos comme le K+ »',
      explication:
        'Le potentiel de repos est proche du potentiel d’équilibre du potassium car la membrane est surtout perméable au K+ au repos.',
    },
    {
      moyen: '« Na entre, dépolarise ; K sort, repolarise »',
      explication:
        'Retenir le sens des mouvements ioniques lors des deux grandes phases du potentiel d’action.',
    },
    {
      moyen: '« Saltatoire = ça saute de nœud en nœud »',
      explication:
        'La conduction saltatoire fait sauter la dépolarisation d’un nœud de Ranvier au suivant grâce à l’isolation par la myéline.',
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
      id: 'physio-excitabilite-fc-01',
      recto: 'Quelle est la valeur usuelle du potentiel de repos d’un neurone ?',
      verso: 'Environ -70 mV.',
      type: 'chiffre',
      tags: ['potentiel de repos'],
    },
    {
      id: 'physio-excitabilite-fc-02',
      recto: 'Pourquoi le potentiel de repos est-il proche du potentiel d’équilibre du potassium ?',
      verso: 'Parce que la membrane au repos est beaucoup plus perméable au potassium qu’au sodium, via les canaux de fuite potassiques.',
      type: 'mecanisme',
      tags: ['potentiel de repos', 'potassium'],
    },
    {
      id: 'physio-excitabilite-fc-03',
      recto: 'Que calcule l’équation de Nernst ?',
      verso: 'Le potentiel d’équilibre d’un ion donné, c’est-à-dire le potentiel transmembranaire pour lequel le flux net de cet ion est nul.',
      type: 'formule',
      tags: ['Nernst'],
    },
    {
      id: 'physio-excitabilite-fc-04',
      recto: 'Quelle est la valeur approximative du potentiel d’équilibre du sodium ?',
      verso: 'Environ +60 mV.',
      type: 'chiffre',
      tags: ['sodium', 'Nernst'],
    },
    {
      id: 'physio-excitabilite-fc-05',
      recto: 'Que signifie la loi du tout ou rien pour le potentiel d’action ?',
      verso: 'En dessous du seuil, aucun potentiel d’action ne se déclenche ; au-dessus, son amplitude et sa forme sont indépendantes de l’intensité du stimulus.',
      type: 'definition',
      tags: ['potentiel d’action'],
    },
    {
      id: 'physio-excitabilite-fc-06',
      recto: 'Quel ion porte la phase ascendante du potentiel d’action ? Quel ion porte la repolarisation ?',
      verso: 'Le sodium (entrée) pour la phase ascendante ; le potassium (sortie) pour la repolarisation.',
      type: 'mecanisme',
      tags: ['potentiel d’action', 'ions'],
    },
    {
      id: 'physio-excitabilite-fc-07',
      recto: 'Quels sont les trois états fonctionnels du canal Na+ voltage-dépendant ?',
      verso: 'Fermé (activable), ouvert, et inactivé (réfractaire, distinct de l’état fermé).',
      type: 'classification',
      tags: ['canaux voltage-dépendants'],
    },
    {
      id: 'physio-excitabilite-fc-08',
      recto: 'Que caractérise la période réfractaire absolue ?',
      verso: 'L’impossibilité de déclencher un nouveau potentiel d’action, quelle que soit l’intensité du stimulus, du fait de l’inactivation des canaux Na+.',
      type: 'definition',
      tags: ['période réfractaire'],
    },
    {
      id: 'physio-excitabilite-fc-09',
      recto: 'Que caractérise la période réfractaire relative ?',
      verso: 'Un potentiel d’action peut être déclenché, mais uniquement par un stimulus plus intense que la normale.',
      type: 'definition',
      tags: ['période réfractaire'],
    },
    {
      id: 'physio-excitabilite-fc-10',
      recto: 'Qu’est-ce que la conduction saltatoire ?',
      verso: 'La propagation du potentiel d’action d’un nœud de Ranvier à l’autre le long d’une fibre myélinisée, la myéline isolant les segments internodaux.',
      type: 'mecanisme',
      tags: ['conduction saltatoire'],
    },
    {
      id: 'physio-excitabilite-fc-11',
      recto: 'Où sont concentrés les canaux Na+ voltage-dépendants dans une fibre myélinisée ?',
      verso: 'Aux nœuds de Ranvier.',
      type: 'definition',
      tags: ['myéline', 'nœud de Ranvier'],
    },
    {
      id: 'physio-excitabilite-fc-12',
      recto: 'Citer deux facteurs qui augmentent la vitesse de conduction d’une fibre nerveuse.',
      verso: 'Le diamètre de la fibre (plus grand diamètre, moins de résistance longitudinale) et la présence de myéline (conduction saltatoire).',
      type: 'mecanisme',
      tags: ['vitesse de conduction'],
    },
  ],
  qcm: [
    {
      id: 'physio-excitabilite-qcm-01',
      enonce: "Concernant le potentiel de repos membranaire, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Il est d’environ -70 mV dans un neurone typique.',
          vraie: true,
          justification: 'Exact, cette valeur est classiquement retenue pour un neurone au repos.',
        },
        {
          lettre: 'B',
          texte: 'Il résulte uniquement de l’activité de la pompe Na+/K+-ATPase.',
          vraie: false,
          justification: 'Faux : la pompe entretient les gradients, mais le potentiel de repos lui-même résulte surtout de la diffusion passive du potassium à travers les canaux de fuite.',
        },
        {
          lettre: 'C',
          texte: 'La membrane au repos est plus perméable au potassium qu’au sodium.',
          vraie: true,
          justification: 'Exact : c’est cette perméabilité sélective qui rapproche le potentiel de repos du potentiel d’équilibre du potassium.',
        },
        {
          lettre: 'D',
          texte: 'Il est identique dans toutes les cellules excitables de l’organisme.',
          vraie: false,
          justification: 'Faux : il varie selon le type cellulaire, par exemple environ -70 mV dans un neurone contre environ -90 mV dans une fibre musculaire squelettique.',
        },
        {
          lettre: 'E',
          texte: 'La pompe Na+/K+-ATPase est électrogène.',
          vraie: true,
          justification: 'Exact : elle expulse trois charges positives pour deux entrées, ce qui contribue légèrement à l’hyperpolarisation.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le potentiel de repos dépend surtout de la perméabilité sélective au potassium.',
      difficulte: 2,
    },
    {
      id: 'physio-excitabilite-qcm-02',
      enonce: "Concernant l’équation de Nernst, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle donne le potentiel de membrane global d’une cellule perméable à plusieurs ions.',
          vraie: false,
          justification: "Faux : c’est le rôle de l’équation de Goldman-Hodgkin-Katz ; Nernst calcule le potentiel d’équilibre d’un seul ion.",
        },
        {
          lettre: 'B',
          texte: 'Le potentiel d’équilibre du potassium est proche de -90 mV.',
          vraie: true,
          justification: 'Exact, valeur classique retenue pour un neurone.',
        },
        {
          lettre: 'C',
          texte: 'Le potentiel d’équilibre du sodium est proche de -90 mV.',
          vraie: false,
          justification: 'Faux : le potentiel d’équilibre du sodium est proche de +60 mV, très différent de celui du potassium.',
        },
        {
          lettre: 'D',
          texte: 'Elle dépend du rapport des concentrations extracellulaire et intracellulaire de l’ion considéré.',
          vraie: true,
          justification: 'Exact : c’est le logarithme de ce rapport qui détermine le potentiel d’équilibre.',
        },
        {
          lettre: 'E',
          texte: 'Elle est indépendante de la température.',
          vraie: false,
          justification: 'Faux : la température absolue figure explicitement dans l’équation de Nernst.',
        },
      ],
      correction: 'Réponses exactes : B et D. Bien distinguer Nernst (un seul ion) de Goldman (plusieurs ions pondérés par leur perméabilité).',
      difficulte: 2,
    },
    {
      id: 'physio-excitabilite-qcm-03',
      enonce: "Concernant les phases du potentiel d’action, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La phase ascendante est due à une entrée massive de sodium.',
          vraie: true,
          justification: "Exact : l’ouverture des canaux Na+ voltage-dépendants dépolarise fortement la membrane.",
        },
        {
          lettre: 'B',
          texte: 'Les canaux K+ voltage-dépendants s’ouvrent plus vite que les canaux Na+.',
          vraie: false,
          justification: "Faux : c’est l’inverse, les canaux Na+ s’ouvrent plus vite, ce qui explique le décalage entre dépolarisation et repolarisation.",
        },
        {
          lettre: 'C',
          texte: 'La repolarisation résulte d’une sortie de potassium.',
          vraie: true,
          justification: 'Exact : elle est portée par l’ouverture retardée des canaux K+ voltage-dépendants.',
        },
        {
          lettre: 'D',
          texte: 'La post-hyperpolarisation est due à la fermeture retardée des canaux K+.',
          vraie: true,
          justification: 'Exact : le potassium continue de sortir un court instant après le retour au potentiel de repos, hyperpolarisant transitoirement la membrane.',
        },
        {
          lettre: 'E',
          texte: 'Le potentiel d’action nécessite un stimulus proportionnel à son amplitude finale.',
          vraie: false,
          justification: "Faux : la loi du tout ou rien rend l’amplitude indépendante de l’intensité du stimulus, à condition que le seuil soit atteint.",
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir le décalage cinétique entre canaux Na+ (rapides) et K+ (plus lents).',
      difficulte: 2,
    },
    {
      id: 'physio-excitabilite-qcm-04',
      enonce: "Concernant les périodes réfractaires, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La période réfractaire absolue correspond à l’inactivation des canaux Na+ voltage-dépendants.',
          vraie: true,
          justification: 'Exact : tant que les canaux sont inactivés, aucun nouveau potentiel d’action n’est possible.',
        },
        {
          lettre: 'B',
          texte: 'Pendant la période réfractaire relative, aucun potentiel d’action ne peut être déclenché.',
          vraie: false,
          justification: 'Faux : un potentiel d’action reste possible, mais il nécessite un stimulus plus intense que la normale.',
        },
        {
          lettre: 'C',
          texte: 'La période réfractaire absolue limite la fréquence maximale de décharge d’une cellule excitable.',
          vraie: true,
          justification: 'Exact : elle impose un intervalle minimal entre deux potentiels d’action successifs.',
        },
        {
          lettre: 'D',
          texte: 'La période réfractaire garantit le caractère unidirectionnel de la propagation.',
          vraie: true,
          justification: "Exact : elle empêche la réexcitation immédiate de la zone qui vient de se dépolariser, bloquant la propagation rétrograde.",
        },
        {
          lettre: 'E',
          texte: 'La période réfractaire relative précède la période réfractaire absolue.',
          vraie: false,
          justification: 'Faux : c’est l’inverse, la période réfractaire absolue précède la période réfractaire relative.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. La période réfractaire découle directement de la cinétique des canaux Na+ voltage-dépendants.',
      difficulte: 2,
    },
    {
      id: 'physio-excitabilite-qcm-05',
      enonce: "Concernant la conduction saltatoire, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle concerne les fibres myélinisées.',
          vraie: true,
          justification: 'Exact : la conduction saltatoire nécessite l’alternance de segments myélinisés isolants et de nœuds de Ranvier.',
        },
        {
          lettre: 'B',
          texte: 'Les canaux Na+ voltage-dépendants sont répartis uniformément le long de l’axone myélinisé.',
          vraie: false,
          justification: 'Faux : ils sont concentrés au niveau des nœuds de Ranvier, où la membrane est dépourvue de myéline.',
        },
        {
          lettre: 'C',
          texte: 'Elle ralentit la vitesse de conduction par rapport à une fibre amyélinique de même diamètre.',
          vraie: false,
          justification: 'Faux : elle accélère fortement la vitesse de conduction par rapport à une fibre amyélinique de même diamètre.',
        },
        {
          lettre: 'D',
          texte: 'Elle réduit la dépense énergétique liée aux échanges ioniques transmembranaires.',
          vraie: true,
          justification: 'Exact : les échanges ioniques actifs ne se produisent qu’aux nœuds de Ranvier, sur une surface membranaire restreinte.',
        },
        {
          lettre: 'E',
          texte: 'La démyélinisation peut ralentir voire bloquer la conduction nerveuse.',
          vraie: true,
          justification: "Exact : le courant local s’atténue davantage sur une membrane démyélinisée et peut ne plus atteindre le seuil au nœud suivant.",
        },
      ],
      correction: 'Réponses exactes : A, D et E. La myélinisation optimise à la fois la vitesse et l’efficacité énergétique de la conduction.',
      difficulte: 2,
    },
    {
      id: 'physio-excitabilite-qcm-06',
      enonce: "Concernant les facteurs qui modifient la vitesse de conduction nerveuse, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Un plus grand diamètre de fibre augmente la vitesse de conduction.',
          vraie: true,
          justification: 'Exact : un diamètre plus grand diminue la résistance longitudinale interne à la propagation du courant local.',
        },
        {
          lettre: 'B',
          texte: 'Les fibres C amyéliniques conduisent plus vite que les fibres Aα myélinisées.',
          vraie: false,
          justification: 'Faux : c’est l’inverse, les fibres Aα myélinisées et de grand diamètre sont les plus rapides.',
        },
        {
          lettre: 'C',
          texte: 'Le refroidissement d’un nerf ralentit la conduction.',
          vraie: true,
          justification: 'Exact : ce principe est notamment utilisé en anesthésie locale par le froid.',
        },
        {
          lettre: 'D',
          texte: 'La vitesse de conduction est indépendante du diamètre de la fibre.',
          vraie: false,
          justification: 'Faux : le diamètre est l’un des deux déterminants majeurs de la vitesse, avec la myélinisation.',
        },
        {
          lettre: 'E',
          texte: 'À diamètre égal, une fibre myélinisée conduit plus vite qu’une fibre amyélinique.',
          vraie: true,
          justification: 'Exact : la conduction saltatoire confère un avantage de vitesse indépendant du diamètre.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Diamètre et myélinisation sont les deux déterminants majeurs de la vitesse de conduction.',
      difficulte: 1,
    },
  ],
};
