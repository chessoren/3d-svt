import type { Fiche } from '../../types';

export const ficheMeiose: Fiche = {
  id: 'biocell-meiose',
  ue: 'biocell',
  titre: 'La méiose et la recombinaison',
  sousTitre: 'Divisions réductionnelle et équationnelle, prophase I, crossing-over, brassages et anomalies de disjonction',
  chapitre: 'Dynamique cellulaire',
  ordre: 11,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'méiose',
    'division réductionnelle',
    'division équationnelle',
    'prophase I',
    'crossing-over',
    'brassage génétique',
    'chiasma',
    'non-disjonction',
  ],
  objectifs: [
    'Différencier division réductionnelle et division équationnelle de la méiose.',
    'Décrire les sous-étapes de la prophase I et la formation des chiasmas.',
    'Expliquer les mécanismes de brassage génétique intrachromosomique et interchromosomique.',
    'Comparer méiose et mitose sur le plan du déroulement et du résultat génétique.',
    'Expliquer le mécanisme et les conséquences d’une anomalie de disjonction chromosomique.',
  ],
  sections: [
    {
      id: 'organisation-generale-meiose',
      titre: 'Organisation générale de la méiose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La méiose est le processus de division cellulaire qui permet, à partir d’une cellule germinale diploïde, la formation de cellules haploïdes, les gamètes, dont le nombre de chromosomes est réduit de moitié par rapport à la cellule d’origine.",
        },
        {
          type: 'liste',
          items: [
            "La méiose comprend deux divisions successives, précédées d’une seule phase de réplication de l’ADN : la méiose I (division réductionnelle) et la méiose II (division équationnelle).",
            "Chaque division se subdivise classiquement en prophase, métaphase, anaphase et télophase, comme la mitose, mais avec des particularités propres à la méiose I.",
            "Au terme des deux divisions, une cellule germinale diploïde produit quatre cellules haploïdes.",
          ],
        },
        {
          type: 'definition',
          terme: 'Division réductionnelle',
          definition:
            "Première division de la méiose, au cours de laquelle les chromosomes homologues (paternel et maternel) sont séparés, réduisant de moitié le nombre de chromosomes tout en conservant, à ce stade, deux chromatides par chromosome.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une seule réplication pour deux divisions',
          texte:
            "L’ADN n’est répliqué qu’une seule fois, avant la méiose I. La méiose II ne s’accompagne d’aucune nouvelle réplication : elle sépare les chromatides sœurs déjà présentes, comme le ferait une mitose classique.",
        },
      ],
    },
    {
      id: 'prophase-i',
      titre: 'La prophase I, étape centrale de la méiose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La prophase I est la phase la plus longue et la plus complexe de la méiose, au cours de laquelle les chromosomes homologues s’apparient et échangent du matériel génétique. Elle se subdivise classiquement en cinq sous-stades.",
        },
        {
          type: 'etapes',
          titre: 'Les sous-stades de la prophase I',
          etapes: [
            {
              titre: 'Leptotène',
              detail: "Début de la condensation des chromosomes, déjà constitués de deux chromatides sœurs à l’issue de la réplication préméiotique.",
            },
            {
              titre: 'Zygotène',
              detail: "Appariement progressif des chromosomes homologues, ou synapsis, formant des bivalents (ou tétrades), sous l’action du complexe synaptonémal.",
            },
            {
              titre: 'Pachytène',
              detail: "Appariement complet des homologues ; c’est à ce stade que se produisent les échanges de segments d’ADN entre chromatides homologues non sœurs, les crossing-over.",
            },
            {
              titre: 'Diplotène',
              detail: "Début de la séparation des chromosomes homologues, qui restent maintenus associés au niveau des points de crossing-over, visibles sous forme de chiasmas.",
            },
            {
              titre: 'Diacinèse',
              detail: "Condensation maximale des chromosomes, dissolution de l’enveloppe nucléaire, mise en place du fuseau méiotique.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Chiasma',
          definition:
            "Point de contact visible entre chromatides homologues non sœurs, correspondant physiquement à la localisation d’un crossing-over, qui maintient les chromosomes homologues associés jusqu’à l’anaphase I.",
        },
      ],
    },
    {
      id: 'brassages-genetiques',
      titre: 'Les mécanismes de brassage génétique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La méiose génère une diversité génétique considérable des gamètes produits, grâce à deux mécanismes complémentaires de brassage : le brassage intrachromosomique, lié au crossing-over, et le brassage interchromosomique, lié à la répartition aléatoire des chromosomes homologues.",
        },
        {
          type: 'comparaison',
          titre: 'Les deux types de brassage génétique',
          gauche: {
            titre: 'Brassage intrachromosomique',
            points: [
              'Résulte des crossing-over en prophase I',
              'Échange de segments entre chromatides homologues non sœurs',
              'Crée de nouvelles combinaisons alléliques sur un même chromosome',
            ],
          },
          droite: {
            titre: 'Brassage interchromosomique',
            points: [
              'Résulte de la répartition aléatoire des paires de chromosomes homologues en anaphase I',
              'Indépendance de ségrégation entre les différentes paires de chromosomes',
              'Nombre de combinaisons possibles égal à 2 puissance n, n étant le nombre de paires de chromosomes',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Diversité combinatoire théorique',
          texte:
            "Chez l’espèce humaine, avec 23 paires de chromosomes, le seul brassage interchromosomique permet théoriquement 2 puissance 23 combinaisons différentes de chromosomes d’origine paternelle ou maternelle dans les gamètes, sans même tenir compte du brassage intrachromosomique qui démultiplie encore cette diversité.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre les deux mécanismes',
          texte:
            "Le brassage intrachromosomique modifie la composition allélique le long d’un même chromosome ; le brassage interchromosomique ne modifie pas la composition de chaque chromosome mais redistribue aléatoirement l’origine parentale des chromosomes entiers entre les gamètes.",
        },
      ],
    },
    {
      id: 'meiose-i-ii',
      titre: 'Déroulement des méioses I et II',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Après la prophase I, la méiose I se poursuit par une métaphase I, où les bivalents s’alignent sur la plaque équatoriale, puis une anaphase I, où les chromosomes homologues (et non les chromatides sœurs) se séparent et migrent vers les pôles opposés.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison anaphase I et anaphase II',
          colonnes: ['Étape', 'Ce qui se sépare', 'Conséquence'],
          lignes: [
            ['Anaphase I', 'Chromosomes homologues (chacun à deux chromatides)', 'Réduction du nombre de chromosomes (division réductionnelle)'],
            ['Anaphase II', 'Chromatides sœurs', 'Séparation finale en chromosomes à une seule chromatide (division équationnelle)'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "La méiose II se déroule selon un schéma très proche de celui d’une mitose classique, sans réplication préalable de l’ADN : les deux cellules issues de la méiose I entrent chacune en métaphase II, puis anaphase II, avec séparation des chromatides sœurs, aboutissant à quatre cellules haploïdes à une chromatide par chromosome.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Piège classique sur l’anaphase I',
          texte:
            "En anaphase I, ce sont les chromosomes homologues entiers qui se séparent, chacun conservant ses deux chromatides sœurs unies par leur centromère. Ce n’est qu’en anaphase II que les chromatides sœurs se séparent, comme lors d’une mitose.",
        },
      ],
    },
    {
      id: 'comparaison-mitose-meiose',
      titre: 'Comparaison entre mitose et méiose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Mitose et méiose partagent une organisation générale en phases comparables, mais diffèrent fondamentalement par leur finalité génétique et le nombre de cellules produites.",
        },
        {
          type: 'tableau',
          titre: 'Mitose et méiose',
          colonnes: ['Caractéristique', 'Mitose', 'Méiose'],
          lignes: [
            ['Nombre de divisions', 'Une seule', 'Deux successives (I et II)'],
            ['Nombre de cellules filles', 'Deux', 'Quatre'],
            ['Appariement des homologues', 'Absent', 'Présent en prophase I'],
            ['Crossing-over', 'Absent', 'Présent en prophase I'],
            ['Ploïdie des cellules filles', 'Identique à la cellule mère (diploïde à diploïde)', 'Réduite de moitié (diploïde à haploïde)'],
            ['Identité génétique des cellules filles', 'Identiques entre elles (sauf mutation)', 'Génétiquement différentes les unes des autres'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une finalité différente',
          texte:
            "La mitose assure le renouvellement cellulaire et la croissance tissulaire en produisant des cellules génétiquement identiques ; la méiose assure la formation des gamètes, en produisant une diversité génétique indispensable au brassage génétique de la reproduction sexuée.",
        },
      ],
    },
    {
      id: 'anomalies-disjonction',
      titre: 'Anomalies de disjonction chromosomique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La non-disjonction méiotique correspond à un défaut de séparation de chromosomes homologues en anaphase I, ou de chromatides sœurs en anaphase II, aboutissant à des gamètes porteurs d’un chromosome en trop ou en moins.",
        },
        {
          type: 'definition',
          terme: 'Non-disjonction',
          definition:
            "Échec de la séparation normale de deux chromosomes homologues ou de deux chromatides sœurs lors de l’anaphase, conduisant à la formation de gamètes déséquilibrés, porteurs d’un chromosome surnuméraire ou manquant.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Trisomie 21',
          texte:
            "La trisomie 21, ou syndrome de Down, résulte le plus souvent d’une non-disjonction méiotique du chromosome 21, essentiellement lors de la méiose I maternelle, aboutissant à un gamète porteur de deux copies du chromosome 21 au lieu d’une seule.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Un risque qui augmente avec l’âge maternel',
          texte:
            "Le risque de non-disjonction méiotique, en particulier pour le chromosome 21, augmente significativement avec l’âge maternel, ce qui justifie la proposition d’un dépistage prénatal renforcé au-delà d’un certain âge maternel.",
        },
      ],
    },
  ],
  pointsCles: [
    "La méiose comprend deux divisions successives (réductionnelle puis équationnelle) précédées d’une seule réplication de l’ADN.",
    "La prophase I se subdivise en leptotène, zygotène, pachytène, diplotène et diacinèse.",
    "Les crossing-over ont lieu au pachytène et sont matérialisés par les chiasmas visibles au diplotène.",
    "Le brassage intrachromosomique résulte des crossing-over ; le brassage interchromosomique résulte de la répartition aléatoire des paires de chromosomes homologues.",
    "En anaphase I, les chromosomes homologues se séparent ; en anaphase II, ce sont les chromatides sœurs, comme en mitose.",
    "Contrairement à la mitose, la méiose produit quatre cellules haploïdes génétiquement différentes à partir d’une cellule diploïde.",
    "Une non-disjonction méiotique peut être à l’origine d’aneuploïdies, comme la trisomie 21.",
  ],
  erreursFrequentes: [
    "Croire qu’il y a une réplication de l’ADN entre la méiose I et la méiose II : la réplication n’a lieu qu’une seule fois, avant la méiose I.",
    "Confondre ce qui se sépare en anaphase I (chromosomes homologues) et en anaphase II (chromatides sœurs).",
    "Situer les crossing-over en métaphase I : ils ont lieu en prophase I, au stade pachytène.",
    "Confondre brassage intrachromosomique et interchromosomique.",
    "Oublier que la méiose produit quatre cellules haploïdes génétiquement différentes, alors que la mitose en produit deux, identiques.",
    "Penser que la non-disjonction ne peut survenir qu’en méiose I : elle peut également survenir en méiose II.",
  ],
  mnemotechniques: [
    {
      moyen: '« Le Zèbre Passe Discrètement » pour la prophase I',
      explication: 'Leptotène, Zygotène, Pachytène, Diplotène, Diacinèse : ordre chronologique des sous-stades de la prophase I.',
    },
    {
      moyen: '« I sépare les Individus (homologues), II sépare en Identiques (chromatides) »',
      explication: 'L’anaphase I sépare les chromosomes homologues (différents), l’anaphase II sépare les chromatides sœurs (identiques).',
    },
    {
      moyen: '« 2 puissance n pour l’interchromosomique »',
      explication: 'Le nombre de combinaisons possibles par brassage interchromosomique seul est de 2 puissance n, n étant le nombre de paires de chromosomes.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Pollard, Earnshaw, Lippincott-Schwartz, Biologie cellulaire, 3e édition',
    'Griffiths, Introduction à l’analyse génétique',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'biocell-meiose-fc-01',
      recto: 'Combien de divisions comprend la méiose, et combien de réplications de l’ADN les précèdent ?',
      verso: 'Deux divisions successives (méiose I et méiose II), précédées d’une seule réplication de l’ADN.',
      type: 'chiffre',
      tags: ['méiose'],
    },
    {
      id: 'biocell-meiose-fc-02',
      recto: 'Quels sont les cinq sous-stades de la prophase I ?',
      verso: 'Leptotène, zygotène, pachytène, diplotène et diacinèse.',
      type: 'classification',
      tags: ['prophase I'],
    },
    {
      id: 'biocell-meiose-fc-03',
      recto: 'À quel stade de la prophase I ont lieu les crossing-over ?',
      verso: 'Au pachytène.',
      type: 'chiffre',
      tags: ['crossing-over', 'pachytène'],
    },
    {
      id: 'biocell-meiose-fc-04',
      recto: 'Qu’est-ce qu’un chiasma ?',
      verso: 'Le point de contact visible entre chromatides homologues non sœurs, correspondant à la localisation d’un crossing-over.',
      type: 'definition',
      tags: ['chiasma'],
    },
    {
      id: 'biocell-meiose-fc-05',
      recto: 'Que se sépare-t-il en anaphase I ?',
      verso: 'Les chromosomes homologues, chacun conservant ses deux chromatides sœurs.',
      type: 'mecanisme',
      tags: ['anaphase I'],
    },
    {
      id: 'biocell-meiose-fc-06',
      recto: 'Que se sépare-t-il en anaphase II ?',
      verso: 'Les chromatides sœurs, comme lors d’une mitose.',
      type: 'mecanisme',
      tags: ['anaphase II'],
    },
    {
      id: 'biocell-meiose-fc-07',
      recto: 'Quelle est la différence entre brassage intrachromosomique et interchromosomique ?',
      verso: 'L’intrachromosomique résulte des crossing-over ; l’interchromosomique résulte de la répartition aléatoire des paires de chromosomes homologues.',
      type: 'classification',
      tags: ['brassage génétique'],
    },
    {
      id: 'biocell-meiose-fc-08',
      recto: 'Combien de cellules sont produites à l’issue d’une méiose complète, et sont-elles identiques entre elles ?',
      verso: 'Quatre cellules haploïdes, génétiquement différentes les unes des autres.',
      type: 'chiffre',
      tags: ['méiose'],
    },
    {
      id: 'biocell-meiose-fc-09',
      recto: 'Citer une différence majeure entre mitose et méiose concernant les chromosomes homologues.',
      verso: 'Les chromosomes homologues s’apparient et échangent du matériel génétique en méiose (prophase I), ce qui n’a pas lieu en mitose.',
      type: 'classification',
      tags: ['mitose', 'méiose'],
    },
    {
      id: 'biocell-meiose-fc-10',
      recto: 'Qu’est-ce qu’une non-disjonction méiotique ?',
      verso: 'Un défaut de séparation de chromosomes homologues ou de chromatides sœurs en anaphase, aboutissant à des gamètes déséquilibrés.',
      type: 'definition',
      tags: ['non-disjonction'],
    },
    {
      id: 'biocell-meiose-fc-11',
      recto: 'À quelle division méiotique la non-disjonction du chromosome 21 est-elle le plus souvent associée dans la trisomie 21 ?',
      verso: 'À la méiose I maternelle.',
      type: 'clinique',
      tags: ['trisomie 21'],
    },
    {
      id: 'biocell-meiose-fc-12',
      recto: 'Comment évolue le risque de non-disjonction méiotique avec l’âge maternel ?',
      verso: 'Il augmente significativement avec l’âge maternel.',
      type: 'chiffre',
      tags: ['âge maternel', 'trisomie 21'],
    },
  ],
  qcm: [
    {
      id: 'biocell-meiose-qcm-01',
      enonce: 'Concernant l’organisation générale de la méiose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La méiose comprend deux réplications de l’ADN, une avant chaque division.', vraie: false, justification: 'Il n’y a qu’une seule réplication de l’ADN, avant la méiose I.' },
        { lettre: 'B', texte: 'La méiose I est une division réductionnelle.', vraie: true, justification: 'Elle réduit de moitié le nombre de chromosomes en séparant les homologues.' },
        { lettre: 'C', texte: 'La méiose II est une division équationnelle.', vraie: true, justification: 'Elle sépare les chromatides sœurs, sans réduire davantage le nombre de chromosomes.' },
        { lettre: 'D', texte: 'La méiose produit deux cellules filles.', vraie: false, justification: 'Elle produit quatre cellules filles haploïdes.' },
        { lettre: 'E', texte: 'Les cellules produites par la méiose sont haploïdes.', vraie: true, justification: 'C’est la finalité de la méiose : réduire de moitié le nombre de chromosomes.' },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir qu’une seule réplication précède les deux divisions méiotiques.',
      difficulte: 2,
    },
    {
      id: 'biocell-meiose-qcm-02',
      enonce: 'Concernant la prophase I, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’appariement des chromosomes homologues débute au leptotène.', vraie: false, justification: 'L’appariement (synapsis) débute au zygotène, non au leptotène.' },
        { lettre: 'B', texte: 'Les crossing-over ont lieu au pachytène.', vraie: true, justification: 'C’est le stade où les chromosomes homologues, complètement appariés, échangent du matériel génétique.' },
        { lettre: 'C', texte: 'Les chiasmas sont visibles au diplotène.', vraie: true, justification: 'Ils marquent les points de crossing-over qui maintiennent les homologues associés.' },
        { lettre: 'D', texte: 'La diacinèse précède le leptotène.', vraie: false, justification: 'La diacinèse est le dernier stade de la prophase I, après leptotène, zygotène, pachytène et diplotène.' },
        { lettre: 'E', texte: 'Le complexe synaptonémal intervient dans l’appariement des homologues.', vraie: true, justification: 'C’est la structure protéique qui stabilise l’appariement des chromosomes homologues.' },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir l’ordre correct : leptotène, zygotène, pachytène, diplotène, diacinèse.',
      difficulte: 3,
    },
    {
      id: 'biocell-meiose-qcm-03',
      enonce: 'Concernant les brassages génétiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le brassage intrachromosomique résulte des crossing-over.', vraie: true, justification: 'C’est la définition même de ce type de brassage.' },
        { lettre: 'B', texte: 'Le brassage interchromosomique modifie la composition allélique le long d’un chromosome.', vraie: false, justification: 'C’est le brassage intrachromosomique qui modifie la composition allélique ; l’interchromosomique redistribue des chromosomes entiers.' },
        { lettre: 'C', texte: 'Le brassage interchromosomique résulte de la répartition aléatoire des paires de chromosomes homologues en anaphase I.', vraie: true, justification: 'C’est le mécanisme à l’origine de ce type de brassage.' },
        { lettre: 'D', texte: 'Pour 23 paires de chromosomes, le brassage interchromosomique seul permet 2 puissance 23 combinaisons.', vraie: true, justification: 'C’est le calcul combinatoire classique pour l’espèce humaine.' },
        { lettre: 'E', texte: 'Les deux types de brassage ont exactement le même mécanisme moléculaire.', vraie: false, justification: 'Ce sont deux mécanismes distincts : échange physique de segments d’ADN pour l’un, répartition aléatoire de chromosomes entiers pour l’autre.' },
      ],
      correction: 'Réponses exactes : A, C et D. Bien distinguer les deux mécanismes de brassage.',
      difficulte: 2,
    },
    {
      id: 'biocell-meiose-qcm-04',
      enonce: 'Concernant les anaphases I et II, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'En anaphase I, ce sont les chromatides sœurs qui se séparent.', vraie: false, justification: 'En anaphase I, ce sont les chromosomes homologues qui se séparent, les chromatides sœurs restant unies.' },
        { lettre: 'B', texte: 'En anaphase II, ce sont les chromatides sœurs qui se séparent.', vraie: true, justification: 'C’est l’évènement caractéristique de l’anaphase II, comparable à une anaphase de mitose.' },
        { lettre: 'C', texte: 'La méiose II comporte une nouvelle réplication de l’ADN avant l’anaphase II.', vraie: false, justification: 'Aucune réplication n’a lieu entre la méiose I et la méiose II.' },
        { lettre: 'D', texte: 'Après l’anaphase I, chaque cellule contient encore des chromosomes à deux chromatides.', vraie: true, justification: 'C’est le cas jusqu’à la séparation des chromatides sœurs en anaphase II.' },
        { lettre: 'E', texte: 'La méiose II se déroule selon un schéma proche de celui d’une mitose.', vraie: true, justification: 'Elle sépare des chromatides sœurs sans réplication préalable, comme une mitose classique.' },
      ],
      correction: 'Réponses exactes : B, D et E. Bien distinguer ce qui se sépare en anaphase I (homologues) et en anaphase II (chromatides).',
      difficulte: 2,
    },
    {
      id: 'biocell-meiose-qcm-05',
      enonce: 'Concernant la comparaison entre mitose et méiose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La mitose comporte un appariement des chromosomes homologues.', vraie: false, justification: 'Cet appariement n’a lieu qu’en méiose, lors de la prophase I.' },
        { lettre: 'B', texte: 'La mitose produit deux cellules filles génétiquement identiques.', vraie: true, justification: 'C’est la caractéristique et la finalité de la mitose, en dehors de mutations éventuelles.' },
        { lettre: 'C', texte: 'La méiose produit des cellules filles de ploïdie identique à la cellule mère.', vraie: false, justification: 'La méiose produit des cellules haploïdes à partir d’une cellule diploïde : la ploïdie est réduite de moitié.' },
        { lettre: 'D', texte: 'Les crossing-over sont spécifiques de la méiose.', vraie: true, justification: 'Ils ont lieu en prophase I de la méiose et n’existent pas en mitose classique.' },
        { lettre: 'E', texte: 'La méiose et la mitose produisent le même nombre de cellules filles.', vraie: false, justification: 'La mitose produit deux cellules filles, la méiose en produit quatre.' },
      ],
      correction: 'Réponses exactes : B et D. Bien connaître les différences de ploïdie et de nombre de cellules filles.',
      difficulte: 2,
    },
    {
      id: 'biocell-meiose-qcm-06',
      enonce: 'Concernant les anomalies de disjonction, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une non-disjonction ne peut survenir qu’en méiose I.', vraie: false, justification: 'Elle peut survenir en méiose I comme en méiose II.' },
        { lettre: 'B', texte: 'La trisomie 21 résulte le plus souvent d’une non-disjonction du chromosome 21.', vraie: true, justification: 'C’est le mécanisme le plus fréquent à l’origine de la trisomie 21.' },
        { lettre: 'C', texte: 'La non-disjonction à l’origine de la trisomie 21 est le plus souvent d’origine paternelle.', vraie: false, justification: 'Elle est le plus souvent d’origine maternelle, en méiose I maternelle.' },
        { lettre: 'D', texte: 'Le risque de non-disjonction méiotique augmente avec l’âge maternel.', vraie: true, justification: 'C’est une observation épidémiologique bien établie, justifiant un dépistage renforcé au-delà d’un certain âge.' },
        { lettre: 'E', texte: 'Une non-disjonction aboutit à des gamètes porteurs d’un nombre normal de chromosomes.', vraie: false, justification: 'Elle aboutit au contraire à des gamètes déséquilibrés, porteurs d’un chromosome en trop ou en moins.' },
      ],
      correction: 'Réponses exactes : B et D. Retenir l’origine préférentiellement maternelle de la non-disjonction du chromosome 21.',
      difficulte: 2,
    },
  ],
};
