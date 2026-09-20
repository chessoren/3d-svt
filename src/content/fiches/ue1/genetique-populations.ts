import type { Fiche } from '../../types';

export const ficheGenetiquePopulations: Fiche = {
  id: 'ue1-genetique-populations',
  ue: 'ue1',
  titre: 'Génétique des populations et techniques',
  sousTitre: 'Loi de Hardy-Weinberg, consanguinité, PCR, électrophorèse, séquençage de Sanger, séquençage haut débit',
  chapitre: 'Génétique',
  ordre: 12,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'Hardy-Weinberg',
    'consanguinité',
    'PCR',
    'électrophorèse',
    'séquençage de Sanger',
    'séquençage haut débit',
    'diagnostic génétique',
  ],
  objectifs: [
    'Énoncer la loi de Hardy-Weinberg et ses conditions d’application.',
    'Utiliser la loi de Hardy-Weinberg pour estimer une fréquence de porteurs sains.',
    'Expliquer les conséquences génétiques de la consanguinité.',
    'Décrire le principe et les étapes de la réaction de polymérisation en chaîne.',
    'Décrire le principe de l’électrophorèse.',
    'Comparer le séquençage de Sanger et le séquençage haut débit, et situer leurs applications diagnostiques.',
  ],
  sections: [
    {
      id: 'hardy-weinberg',
      titre: 'La loi de Hardy-Weinberg',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La loi de Hardy-Weinberg décrit la répartition théorique des génotypes dans une population idéale à l’équilibre, pour un gène présentant deux allèles, et sert de référence pour estimer des fréquences alléliques et génotypiques à partir de données observées.',
        },
        {
          type: 'formule',
          expression: 'p + q = 1 et p^2 + 2pq + q^2 = 1',
          legende: 'p et q désignent les fréquences respectives des deux allèles ; p^2, 2pq et q^2 désignent les fréquences théoriques des trois génotypes possibles.',
        },
        {
          type: 'liste',
          items: [
            'Population de grande taille, panmictique, avec un croisement aléatoire des individus.',
            'Absence de nouvelles mutations affectant le gène considéré.',
            'Absence de migration, c’est-à-dire absence d’échange d’individus avec d’autres populations.',
            'Absence de sélection, c’est-à-dire un avantage ou un désavantage reproductif identique pour tous les génotypes.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Application pratique en médecine',
          texte:
            'Pour une maladie autosomique récessive rare, dont l’incidence correspond à la fréquence des homozygotes q^2, la loi de Hardy-Weinberg permet d’estimer la fréquence des porteurs hétérozygotes sains dans la population, approximativement égale à 2q, ce qui est très utile en conseil génétique.',
        },
      ],
    },
    {
      id: 'consanguinite',
      titre: 'Consanguinité et coefficient de parenté',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La consanguinité désigne l’union entre deux individus apparentés, partageant un ou plusieurs ancêtres communs récents. Elle augmente la probabilité qu’un individu hérite, sur les deux chromosomes homologues d’une même paire, de deux allèles identiques par descendance.',
        },
        {
          type: 'definition',
          terme: 'Coefficient de consanguinité',
          definition:
            'Probabilité qu’un individu issu d’une union consanguine possède, à un locus donné, deux allèles strictement identiques parce qu’hérités d’un même ancêtre commun, par les deux lignées parentales.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Conséquence sur les maladies récessives',
          texte:
            'La consanguinité augmente spécifiquement le risque de maladies autosomiques récessives rares au sein d’une famille, sans modifier le risque de maladies autosomiques dominantes ou liées à l’X, dont la transmission ne dépend pas de l’homozygotie.',
        },
      ],
    },
    {
      id: 'pcr',
      titre: 'La réaction de polymérisation en chaîne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La réaction de polymérisation en chaîne, ou PCR, est une technique d’amplification enzymatique in vitro qui permet de multiplier de façon exponentielle un fragment d’ADN ciblé, à partir d’une quantité initiale infime.',
        },
        {
          type: 'etapes',
          titre: 'Les trois étapes d’un cycle de PCR',
          etapes: [
            {
              titre: 'Dénaturation',
              detail: 'Chauffage de la solution à une température élevée pour séparer les deux brins de l’ADN matrice.',
            },
            {
              titre: 'Hybridation des amorces',
              detail: 'Refroidissement pour permettre la fixation spécifique de deux courtes amorces, complémentaires des extrémités de la région à amplifier.',
            },
            {
              titre: 'Élongation',
              detail: 'Une ADN polymérase thermostable synthétise le nouveau brin à partir de chaque amorce, à une température intermédiaire optimale pour son activité.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Amplification exponentielle',
          texte:
            'Chaque cycle double théoriquement la quantité d’ADN cible : après n cycles, la quantité initiale est multipliée par un facteur voisin de deux puissance n, ce qui permet d’obtenir, après quelques dizaines de cycles, une quantité d’ADN largement suffisante pour une analyse ultérieure.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une enzyme thermostable indispensable',
          texte:
            'L’ADN polymérase utilisée en PCR doit résister aux températures élevées de l’étape de dénaturation, répétées à chaque cycle : c’est pourquoi une enzyme thermostable, isolée à l’origine d’une bactérie vivant dans des sources chaudes, est utilisée.',
        },
      ],
    },
    {
      id: 'electrophorese',
      titre: 'L’électrophorèse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’électrophorèse est une technique de séparation de molécules, comme des fragments d’ADN, sous l’effet d’un champ électrique, selon leur taille et leur charge, au sein d’un support poreux appelé gel.',
        },
        {
          type: 'liste',
          items: [
            'L’ADN, chargé négativement en raison de son squelette phosphate, migre vers l’électrode positive, l’anode, lorsqu’un courant électrique est appliqué au gel.',
            'Les petits fragments migrent plus rapidement et plus loin que les grands fragments, à travers les mailles du gel.',
            'Après migration, une coloration ou un marquage fluorescent révèle la position des fragments, permettant d’estimer leur taille par comparaison avec un marqueur de taille connue.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Applications de l’électrophorèse',
          texte:
            'L’électrophorèse permet de vérifier le résultat d’une amplification par PCR, de séparer des fragments de restriction, ou encore de lire les résultats d’un séquençage de Sanger, avant la généralisation de l’électrophorèse capillaire automatisée.',
        },
      ],
    },
    {
      id: 'sequencage-sanger',
      titre: 'Le séquençage de Sanger',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le séquençage de Sanger, ou méthode de terminaison de chaîne, a longtemps constitué la référence pour déterminer la séquence exacte d’un fragment d’ADN.',
        },
        {
          type: 'liste',
          items: [
            'La réaction associe les quatre désoxyribonucléotides normaux à une faible proportion de didésoxyribonucléotides, dépourvus de fonction hydroxyle en 3′.',
            'L’incorporation aléatoire d’un didésoxyribonucléotide interrompt définitivement l’élongation de la chaîne en cours de synthèse, faute d’extrémité 3′-OH disponible pour poursuivre.',
            'L’ensemble des fragments obtenus, de longueurs variées et se terminant chacun par un didésoxyribonucléotide marqué, est séparé par électrophorèse capillaire, ce qui permet de lire la séquence, nucléotide par nucléotide.',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Pourquoi la synthèse s’arrête-t-elle ?',
          texte:
            'Un didésoxyribonucléotide incorporé dans le brin en cours de synthèse ne porte pas d’hydroxyle en 3′, l’extrémité indispensable à la formation de la liaison phosphodiester suivante : son incorporation bloque donc irrémédiablement toute élongation ultérieure par l’ADN polymérase.',
        },
      ],
    },
    {
      id: 'sequencage-haut-debit-diagnostic',
      titre: 'Le séquençage haut débit et le diagnostic génétique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le séquençage à haut débit, ou séquençage de nouvelle génération, a profondément transformé le diagnostic génétique en permettant le séquençage simultané d’un très grand nombre de fragments d’ADN.',
        },
        {
          type: 'comparaison',
          titre: 'Séquençage de Sanger et séquençage haut débit',
          gauche: {
            titre: 'Séquençage de Sanger',
            points: [
              'Séquençage d’un seul fragment à la fois',
              'Excellente fiabilité, souvent utilisé pour confirmer un variant ponctuel',
              'Adapté à l’analyse ciblée d’un ou quelques gènes',
            ],
          },
          droite: {
            titre: 'Séquençage haut débit',
            points: [
              'Séquençage massivement parallèle de millions de fragments simultanément',
              'Permet le séquençage de panels de gènes, de l’exome ou du génome entier',
              'Coût et délai considérablement réduits par rapport au séquençage fragment par fragment',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Applications diagnostiques',
          texte:
            'Le séquençage haut débit est aujourd’hui largement utilisé pour le diagnostic des maladies génétiques hétérogènes, impliquant potentiellement de nombreux gènes différents, ainsi que pour certains diagnostics oncologiques, en identifiant les mutations somatiques d’une tumeur, tandis que le séquençage de Sanger reste utilisé pour confirmer un variant précis préalablement identifié.',
        },
      ],
    },
  ],
  pointsCles: [
    'La loi de Hardy-Weinberg relie les fréquences alléliques p et q aux fréquences génotypiques p^2, 2pq et q^2 dans une population idéale à l’équilibre.',
    'Cette loi permet d’estimer, pour une maladie autosomique récessive rare, la fréquence des porteurs hétérozygotes sains à partir de son incidence.',
    'La consanguinité augmente spécifiquement le risque de maladies autosomiques récessives, en augmentant la probabilité d’homozygotie.',
    'La PCR amplifie exponentiellement une région ciblée d’ADN par cycles répétés de dénaturation, hybridation et élongation.',
    'L’électrophorèse sépare des fragments d’ADN selon leur taille dans un champ électrique, l’ADN migrant vers l’anode.',
    'Le séquençage de Sanger repose sur l’incorporation aléatoire de didésoxyribonucléotides qui interrompent l’élongation.',
    'Le séquençage haut débit permet une analyse massivement parallèle, désormais central dans le diagnostic des maladies génétiques hétérogènes.',
  ],
  erreursFrequentes: [
    'Oublier les conditions d’application de la loi de Hardy-Weinberg : population de grande taille, panmixie, absence de mutation, de migration et de sélection.',
    'Croire que la consanguinité augmente également le risque de maladies autosomiques dominantes : elle augmente spécifiquement le risque des maladies récessives.',
    'Penser que l’ADN migre vers la cathode en électrophorèse : il migre au contraire vers l’anode, l’électrode positive, en raison de sa charge négative.',
    'Confondre le rôle des amorces et celui de l’ADN polymérase dans la PCR : les amorces définissent la région amplifiée, l’enzyme réalise l’élongation.',
    'Croire que le séquençage haut débit a totalement remplacé le séquençage de Sanger : ce dernier reste utilisé pour confirmer un variant ponctuel précis.',
  ],
  mnemotechniques: [
    {
      moyen: 'p au carré, deux p q, q au carré',
      explication: 'La formule de Hardy-Weinberg s’énonce dans l’ordre des trois génotypes possibles : homozygote pour le premier allèle, hétérozygote, homozygote pour le second allèle.',
    },
    {
      moyen: 'PCR : dénature, hybride, élonge',
      explication: 'Les trois étapes d’un cycle de PCR se retiennent dans l’ordre : dénaturation à haute température, hybridation des amorces à température intermédiaire basse, élongation à température intermédiaire optimale pour l’enzyme.',
    },
    {
      moyen: 'ddNTP, le cul-de-sac de la synthèse',
      explication: 'Le didésoxyribonucléotide, dépourvu d’hydroxyle en 3′, agit comme un cul-de-sac qui arrête définitivement l’élongation de la chaîne d’ADN en cours de séquençage de Sanger.',
    },
  ],
  sources: [
    'Nussbaum, Thompson et Thompson, Génétique médicale, édition française',
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Lehninger, Principes de biochimie, 8e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-genetique-populations-fc-01',
      recto: 'Énoncer la formule de Hardy-Weinberg.',
      verso: 'p + q = 1 et p^2 + 2pq + q^2 = 1, où p et q sont les fréquences des deux allèles d’un gène.',
      type: 'formule',
      tags: ['Hardy-Weinberg'],
    },
    {
      id: 'ue1-genetique-populations-fc-02',
      recto: 'Citer les conditions d’application de la loi de Hardy-Weinberg.',
      verso: 'Population de grande taille, panmixie, absence de mutation, absence de migration, absence de sélection.',
      type: 'classification',
      tags: ['Hardy-Weinberg'],
    },
    {
      id: 'ue1-genetique-populations-fc-03',
      recto: 'Comment estimer la fréquence des porteurs hétérozygotes sains d’une maladie autosomique récessive rare ?',
      verso: 'À partir de l’incidence de la maladie, égale à q^2, on calcule q puis on estime la fréquence des porteurs hétérozygotes, approximativement égale à 2q.',
      type: 'mecanisme',
      tags: ['Hardy-Weinberg'],
    },
    {
      id: 'ue1-genetique-populations-fc-04',
      recto: 'Quel effet la consanguinité a-t-elle sur le risque de maladie autosomique récessive ?',
      verso: 'Elle l’augmente, en augmentant la probabilité que les deux allèles d’un locus soient identiques par descendance.',
      type: 'mecanisme',
      tags: ['consanguinité'],
    },
    {
      id: 'ue1-genetique-populations-fc-05',
      recto: 'Citer les trois étapes d’un cycle de PCR.',
      verso: 'La dénaturation, l’hybridation des amorces et l’élongation.',
      type: 'classification',
      tags: ['PCR'],
    },
    {
      id: 'ue1-genetique-populations-fc-06',
      recto: 'Pourquoi l’ADN polymérase utilisée en PCR doit-elle être thermostable ?',
      verso: 'Parce qu’elle doit résister aux températures élevées répétées à chaque étape de dénaturation, sans perdre son activité catalytique.',
      type: 'mecanisme',
      tags: ['PCR'],
    },
    {
      id: 'ue1-genetique-populations-fc-07',
      recto: 'Vers quelle électrode migre l’ADN en électrophorèse, et pourquoi ?',
      verso: 'Vers l’anode, l’électrode positive, en raison de la charge négative portée par son squelette phosphate.',
      type: 'mecanisme',
      tags: ['électrophorèse'],
    },
    {
      id: 'ue1-genetique-populations-fc-08',
      recto: 'Quels fragments migrent le plus loin en électrophorèse sur gel, les petits ou les grands ?',
      verso: 'Les petits fragments, qui traversent plus facilement les mailles du gel.',
      type: 'mecanisme',
      tags: ['électrophorèse'],
    },
    {
      id: 'ue1-genetique-populations-fc-09',
      recto: 'Sur quel principe repose le séquençage de Sanger ?',
      verso: 'L’incorporation aléatoire de didésoxyribonucléotides, dépourvus d’hydroxyle en 3′, qui interrompent définitivement l’élongation du brin en cours de synthèse.',
      type: 'mecanisme',
      tags: ['séquençage de Sanger'],
    },
    {
      id: 'ue1-genetique-populations-fc-10',
      recto: 'Pourquoi un didésoxyribonucléotide interrompt-il la synthèse d’ADN ?',
      verso: 'Parce qu’il ne porte pas d’hydroxyle en 3′, extrémité indispensable à la formation de la liaison phosphodiester suivante.',
      type: 'mecanisme',
      tags: ['séquençage de Sanger'],
    },
    {
      id: 'ue1-genetique-populations-fc-11',
      recto: 'Quel avantage principal présente le séquençage haut débit par rapport au séquençage de Sanger ?',
      verso: 'Il permet le séquençage massivement parallèle de millions de fragments simultanément, pour un coût et un délai bien plus faibles.',
      type: 'mecanisme',
      tags: ['séquençage haut débit'],
    },
    {
      id: 'ue1-genetique-populations-fc-12',
      recto: 'Dans quel contexte le séquençage de Sanger reste-t-il utilisé aujourd’hui ?',
      verso: 'Pour confirmer un variant ponctuel précis, préalablement identifié, notamment par séquençage haut débit.',
      type: 'clinique',
      tags: ['diagnostic génétique'],
    },
  ],
  qcm: [
    {
      id: 'ue1-genetique-populations-qcm-01',
      enonce: 'Concernant la loi de Hardy-Weinberg, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle s’applique à un gène présentant deux allèles.',
          vraie: true,
          justification: 'Exact, dans sa formulation la plus simple.',
        },
        {
          lettre: 'B',
          texte: 'Elle nécessite une population de grande taille avec croisement aléatoire.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Elle reste valable même en présence d’une sélection favorisant un génotype.',
          vraie: false,
          justification: 'Faux : l’absence de sélection est une condition nécessaire à l’équilibre de Hardy-Weinberg.',
        },
        {
          lettre: 'D',
          texte: 'Elle permet d’estimer la fréquence des porteurs hétérozygotes sains d’une maladie récessive rare.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'La fréquence des homozygotes pour l’allèle q est notée 2pq.',
          vraie: false,
          justification: 'Faux : 2pq désigne la fréquence des hétérozygotes ; q^2 désigne la fréquence des homozygotes pour l’allèle q.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien retenir que 2pq correspond aux hétérozygotes, pas aux homozygotes.',
      difficulte: 2,
    },
    {
      id: 'ue1-genetique-populations-qcm-02',
      enonce: 'Concernant la consanguinité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle augmente la probabilité d’homozygotie à un locus donné.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Elle augmente spécifiquement le risque de maladies autosomiques récessives rares.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Elle augmente de façon égale le risque de toutes les maladies génétiques, quel que soit leur mode de transmission.',
          vraie: false,
          justification: 'Faux : son effet est spécifique aux maladies récessives, dépendantes de l’homozygotie.',
        },
        {
          lettre: 'D',
          texte: 'Le coefficient de consanguinité mesure la probabilité d’hériter de deux allèles identiques par descendance.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'La consanguinité n’a aucun effet sur la fréquence des maladies autosomiques dominantes.',
          vraie: true,
          justification: 'Exact, puisque ces maladies ne dépendent pas de l’état homozygote.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. La consanguinité cible spécifiquement le risque des maladies récessives.',
      difficulte: 2,
    },
    {
      id: 'ue1-genetique-populations-qcm-03',
      enonce: 'Concernant la PCR, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle utilise des amorces complémentaires des extrémités de la région à amplifier.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'La dénaturation s’effectue à basse température.',
          vraie: false,
          justification: 'Faux : la dénaturation nécessite une température élevée pour séparer les deux brins d’ADN.',
        },
        {
          lettre: 'C',
          texte: 'L’enzyme utilisée doit être thermostable.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'La quantité d’ADN cible double théoriquement à chaque cycle.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'La PCR permet d’amplifier n’importe quelle région du génome sans amorce spécifique.',
          vraie: false,
          justification: 'Faux : l’amplification est ciblée grâce à des amorces spécifiques de la région d’intérêt.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir les trois étapes et leurs températures respectives.',
      difficulte: 2,
    },
    {
      id: 'ue1-genetique-populations-qcm-04',
      enonce: 'Concernant l’électrophorèse, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ADN migre vers l’électrode négative, la cathode.',
          vraie: false,
          justification: 'Faux : l’ADN, chargé négativement, migre vers l’électrode positive, l’anode.',
        },
        {
          lettre: 'B',
          texte: 'Les petits fragments migrent plus loin que les grands fragments dans un temps donné.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'L’électrophorèse peut servir à vérifier le résultat d’une PCR.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'La migration dépend uniquement de la couleur du fragment d’ADN.',
          vraie: false,
          justification: 'Faux : elle dépend de la taille et de la charge du fragment, non de sa couleur.',
        },
        {
          lettre: 'E',
          texte: 'Un marqueur de taille connue permet d’estimer la taille des fragments migrés.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Le sens de migration vers l’anode est un point de cours à bien mémoriser.',
      difficulte: 1,
    },
    {
      id: 'ue1-genetique-populations-qcm-05',
      enonce: 'Concernant le séquençage de Sanger, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il repose sur l’utilisation de didésoxyribonucléotides.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Un didésoxyribonucléotide incorporé permet la poursuite normale de l’élongation.',
          vraie: false,
          justification: 'Faux : son incorporation interrompt définitivement l’élongation, faute d’hydroxyle en 3′.',
        },
        {
          lettre: 'C',
          texte: 'Les fragments obtenus sont séparés par électrophorèse capillaire.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Cette méthode permet de séquencer simultanément l’intégralité d’un génome humain en une seule réaction.',
          vraie: false,
          justification: 'Faux : c’est le séquençage haut débit qui permet une analyse massivement parallèle à cette échelle.',
        },
        {
          lettre: 'E',
          texte: 'Le séquençage de Sanger reste utilisé pour confirmer un variant ponctuel précis.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le séquençage de Sanger garde une place de choix pour la confirmation ciblée d’un variant.',
      difficulte: 2,
    },
    {
      id: 'ue1-genetique-populations-qcm-06',
      enonce: 'Concernant le séquençage haut débit et le diagnostic génétique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le séquençage haut débit permet une analyse massivement parallèle de nombreux fragments.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Il est utile pour le diagnostic de maladies génétiquement hétérogènes, impliquant de nombreux gènes possibles.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Il a totalement rendu obsolète le séquençage de Sanger.',
          vraie: false,
          justification: 'Faux : le séquençage de Sanger reste utilisé pour confirmer un variant ponctuel précis.',
        },
        {
          lettre: 'D',
          texte: 'Il peut être utilisé pour identifier des mutations somatiques d’une tumeur.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Son coût et son délai sont en général plus élevés que ceux du séquençage de Sanger pour un génome entier.',
          vraie: false,
          justification: 'Faux : le séquençage haut débit est au contraire nettement plus rapide et moins coûteux pour analyser de grandes quantités d’ADN.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Les deux méthodes restent complémentaires en pratique clinique.',
      difficulte: 2,
    },
  ],
};
