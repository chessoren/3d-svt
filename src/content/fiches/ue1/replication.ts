import type { Fiche } from '../../types';

export const ficheReplication: Fiche = {
  id: 'ue1-replication',
  ue: 'ue1',
  titre: 'La réplication de l’ADN',
  sousTitre: 'Mode semi-conservatif, origines, fourche de réplication, ADN polymérases, fragments d’Okazaki, fidélité',
  chapitre: 'Structure et expression du génome',
  ordre: 3,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'réplication semi-conservative',
    'origine de réplication',
    'fourche de réplication',
    'ADN polymérase',
    'brin direct',
    'brin retardé',
    'fragment d’Okazaki',
    'fidélité',
  ],
  objectifs: [
    'Expliquer le caractère semi-conservatif de la réplication et l’expérience de Meselson et Stahl.',
    'Décrire l’organisation des origines de réplication et de la fourche de réplication.',
    'Distinguer le rôle des principales ADN polymérases eucaryotes et procaryotes.',
    'Expliquer la synthèse asymétrique du brin direct et du brin retardé, et le rôle des fragments d’Okazaki.',
    'Décrire les mécanismes assurant la fidélité de la réplication.',
    'Situer le problème de fin de réplication des chromosomes linéaires.',
  ],
  sections: [
    {
      id: 'semi-conservative',
      titre: 'Une réplication semi-conservative',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La réplication de l’ADN est semi-conservative : chaque molécule fille est constituée d’un brin parental conservé intact et d’un brin néosynthétisé, complémentaire du premier. Ce mode de réplication a été démontré expérimentalement par Matthew Meselson et Franklin Stahl en 1958, chez la bactérie Escherichia coli.',
        },
        {
          type: 'etapes',
          titre: 'Principe de l’expérience de Meselson et Stahl',
          etapes: [
            {
              titre: 'Marquage isotopique',
              detail: 'Des bactéries sont cultivées plusieurs générations dans un milieu contenant de l’azote lourd (15N), qui s’incorpore dans leur ADN.',
            },
            {
              titre: 'Transfert en milieu léger',
              detail: 'Les bactéries sont ensuite transférées dans un milieu contenant de l’azote léger habituel (14N).',
            },
            {
              titre: 'Centrifugation en gradient de densité',
              detail: 'L’ADN extrait après une puis deux générations est séparé par centrifugation en gradient de chlorure de césium selon sa densité.',
            },
            {
              titre: 'Interprétation',
              detail: 'Après une génération, l’ADN présente une densité intermédiaire, exclusivement hybride ; après deux générations, on observe un mélange d’ADN hybride et d’ADN léger, ce qui exclut les modèles conservatif et dispersif au profit du modèle semi-conservatif.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les trois modèles théoriques envisagés',
          texte:
            'Avant cette expérience, trois hypothèses étaient discutées : le modèle conservatif, où la double hélice parentale resterait intacte et une copie entièrement nouvelle serait produite ; le modèle semi-conservatif, confirmé par l’expérience ; et le modèle dispersif, où les deux brins des molécules filles seraient un mélange de segments anciens et nouveaux.',
        },
      ],
    },
    {
      id: 'origines-replication',
      titre: 'Les origines de réplication',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La réplication débute au niveau de séquences spécifiques appelées origines de réplication, reconnues par des protéines initiatrices qui recrutent ensuite la machinerie de réplication.',
        },
        {
          type: 'comparaison',
          titre: 'Origines chez les procaryotes et les eucaryotes',
          gauche: {
            titre: 'Procaryotes',
            points: [
              'Une origine unique par chromosome bactérien, appelée oriC chez Escherichia coli',
              'Réplication bidirectionnelle à partir de cette origine unique',
              'Chromosome circulaire répliqué en une seule unité de réplication',
            ],
          },
          droite: {
            titre: 'Eucaryotes',
            points: [
              'Multiples origines réparties le long de chaque chromosome linéaire',
              'Reconnaissance des origines par le complexe de reconnaissance de l’origine (ORC)',
              'Nécessité de nombreuses origines pour répliquer un génome volumineux dans le temps imparti du cycle cellulaire',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Réplicon et bidirectionnalité',
          texte:
            'À partir de chaque origine activée, deux fourches de réplication progressent en sens opposé, formant une structure en « œil de réplication ». L’unité d’ADN répliquée à partir d’une même origine est appelée réplicon.',
        },
      ],
    },
    {
      id: 'fourche-replication',
      titre: 'La fourche de réplication',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Au niveau de la fourche de réplication, plusieurs protéines coopèrent pour ouvrir la double hélice, la stabiliser sous forme simple brin et amorcer la synthèse de nouveaux brins.',
        },
        {
          type: 'tableau',
          titre: 'Acteurs principaux de la fourche de réplication',
          colonnes: ['Protéine', 'Fonction'],
          lignes: [
            ['Hélicase', 'Déroule la double hélice en rompant les liaisons hydrogène entre les deux brins'],
            ['Topoisomérase', 'Relâche les tensions de surenroulement générées en amont de la fourche'],
            ['Protéines de liaison à l’ADN simple brin', 'Stabilisent les brins séparés et empêchent leur réappariement prématuré'],
            ['Primase', 'Synthétise une courte amorce d’ARN nécessaire à l’initiation de la synthèse d’ADN'],
            ['ADN polymérase', 'Élonge le nouveau brin à partir de l’amorce, dans le sens 5′ vers 3′'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Pourquoi une amorce est-elle nécessaire ?',
          texte:
            'Les ADN polymérases sont incapables d’initier la synthèse d’un brin ex nihilo : elles ne peuvent qu’allonger une extrémité 3′-OH déjà existante. C’est pourquoi une courte amorce d’ARN, synthétisée par la primase, est indispensable au démarrage de chaque segment d’ADN néosynthétisé.',
        },
      ],
    },
    {
      id: 'adn-polymerases',
      titre: 'Les ADN polymérases',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Plusieurs ADN polymérases interviennent dans la réplication, avec des rôles complémentaires et spécifiques selon les organismes.',
        },
        {
          type: 'tableau',
          titre: 'ADN polymérases eucaryotes et procaryotes',
          colonnes: ['Organisme', 'Enzyme', 'Rôle principal'],
          lignes: [
            ['Eucaryotes', 'ADN polymérase alpha', 'Associée à la primase, initie la synthèse par une courte amorce mixte ARN-ADN'],
            ['Eucaryotes', 'ADN polymérase delta', 'Assure principalement l’élongation du brin retardé, activité correctrice 3′ vers 5′'],
            ['Eucaryotes', 'ADN polymérase epsilon', 'Assure principalement l’élongation du brin direct, activité correctrice 3′ vers 5′'],
            ['Procaryotes', 'ADN polymérase III', 'Enzyme principale de l’élongation des deux brins chez Escherichia coli'],
            ['Procaryotes', 'ADN polymérase I', 'Excise les amorces d’ARN et comble les brèches par son activité exonucléasique 5′ vers 3′'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Activités enzymatiques à connaître',
          texte:
            'Toute ADN polymérase possède une activité polymérase 5′ vers 3′. De nombreuses ADN polymérases possèdent en plus une activité exonucléasique de relecture, dans le sens 3′ vers 5′, qui assure la correction des erreurs d’incorporation. L’ADN polymérase I bactérienne possède, en outre, une activité exonucléasique 5′ vers 3′, indispensable à l’excision des amorces d’ARN.',
        },
      ],
    },
    {
      id: 'brin-direct-retarde',
      titre: 'Brin direct, brin retardé et fragments d’Okazaki',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Comme les deux brins parentaux sont antiparallèles et que la synthèse progresse toujours dans le sens 5′ vers 3′, la réplication d’une fourche unique est nécessairement asymétrique entre les deux brins néosynthétisés.',
        },
        {
          type: 'liste',
          items: [
            'Le brin direct, ou brin précoce, est synthétisé de façon continue, dans le même sens que la progression de la fourche.',
            'Le brin retardé est synthétisé de façon discontinue, sous forme de courts fragments appelés fragments d’Okazaki, dans le sens opposé à la progression de la fourche.',
            'Chaque fragment d’Okazaki est amorcé par une courte séquence d’ARN, puis élongé par une ADN polymérase.',
            'Les amorces d’ARN sont ensuite excisées, les brèches comblées par une ADN polymérase, et les fragments joints entre eux par l’ADN ligase, qui forme la liaison phosphodiester manquante.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Taille des fragments d’Okazaki',
          texte:
            'Les fragments d’Okazaki mesurent environ mille à deux mille nucléotides chez les procaryotes, mais seulement une centaine à quelques centaines de nucléotides chez les eucaryotes, en raison de la présence des nucléosomes qui limitent la longueur de chaque unité de synthèse.',
        },
        {
          type: 'definition',
          terme: 'ADN ligase',
          definition:
            'Enzyme qui catalyse la formation de la liaison phosphodiester entre l’extrémité 3′-OH d’un fragment d’ADN et l’extrémité 5′-phosphate du fragment suivant, scellant ainsi les discontinuités du brin retardé.',
        },
      ],
    },
    {
      id: 'fidelite-terminaison',
      titre: 'Fidélité de la réplication et fin de réplication',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La réplication de l’ADN doit être extrêmement fidèle pour préserver l’intégrité de l’information génétique au fil des divisions cellulaires. Plusieurs mécanismes successifs réduisent le taux d’erreur final à un niveau très bas.',
        },
        {
          type: 'liste',
          items: [
            'La sélectivité de l’appariement des bases par l’ADN polymérase constitue un premier niveau de fidélité.',
            'L’activité exonucléasique de relecture, dans le sens 3′ vers 5′, permet d’exciser un nucléotide mal apparié immédiatement après son incorporation.',
            'Le système de réparation des mésappariements post-réplicatifs corrige les erreurs échappées à la relecture, en distinguant le brin néosynthétisé du brin matrice.',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le problème de fin de réplication',
          texte:
            'Sur un chromosome linéaire, l’ADN polymérase ne peut pas combler la brèche laissée par l’excision de l’amorce d’ARN terminale du brin retardé, faute d’extrémité 3′-OH en amont pour l’élonger. Chaque cycle de réplication entraîne donc un raccourcissement de l’extrémité chromosomique, compensé dans certaines cellules par la télomérase.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordre de grandeur du taux d’erreur',
          texte:
            'Avant relecture, le taux d’erreur d’incorporation d’une ADN polymérase est de l’ordre d’une erreur pour cent mille nucléotides. L’activité de relecture et la réparation des mésappariements abaissent ce taux à environ une erreur pour un milliard de nucléotides incorporés.',
        },
      ],
    },
  ],
  pointsCles: [
    'La réplication est semi-conservative : chaque molécule fille associe un brin parental et un brin néosynthétisé, comme l’a démontré l’expérience de Meselson et Stahl.',
    'Les eucaryotes utilisent de multiples origines de réplication, contre une origine unique chez les bactéries.',
    'À la fourche, hélicase, topoisomérase, protéines de liaison à l’ADN simple brin et primase préparent le terrain pour les ADN polymérases.',
    'Le brin direct est synthétisé en continu, le brin retardé sous forme de fragments d’Okazaki reliés par l’ADN ligase.',
    'La fidélité de la réplication repose sur la sélectivité d’appariement, la relecture exonucléasique 3′ vers 5′ et la réparation des mésappariements.',
    'Le problème de fin de réplication explique le raccourcissement des télomères, compensé par la télomérase dans certaines lignées cellulaires.',
  ],
  erreursFrequentes: [
    'Confondre le modèle semi-conservatif avec le modèle conservatif : dans le modèle semi-conservatif, chaque molécule fille comporte un brin ancien et un brin nouveau.',
    'Croire que la synthèse d’ADN peut débuter sans amorce : toute ADN polymérase nécessite une extrémité 3′-OH préexistante.',
    'Penser que le brin retardé est synthétisé dans le sens 3′ vers 5′ : chaque fragment d’Okazaki est bien synthétisé 5′ vers 3′, mais dans le sens global opposé à la progression de la fourche.',
    'Oublier le rôle de l’ADN ligase, qui ne synthétise pas d’ADN mais scelle les discontinuités entre fragments.',
    'Confondre l’activité exonucléasique de relecture 3′ vers 5′, commune à de nombreuses polymérases, et l’activité exonucléasique 5′ vers 3′ propre à l’ADN polymérase I bactérienne.',
  ],
  mnemotechniques: [
    {
      moyen: 'Semi-conservative : « moitié ancien, moitié neuf »',
      explication: 'Chaque molécule fille garde un brin parental intact et gagne un brin tout neuf : c’est le sens même du mot semi-conservatif.',
    },
    {
      moyen: 'Direct-continu, retardé-discontinu',
      explication: 'Le brin direct est synthétisé de façon continue ; le brin retardé, à l’inverse, est discontinu, fragmenté en fragments d’Okazaki.',
    },
    {
      moyen: 'Trois filtres pour la fidélité',
      explication: 'Sélectivité d’appariement, relecture exonucléasique, réparation des mésappariements : trois niveaux successifs abaissent le taux d’erreur final.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Lehninger, Principes de biochimie, 8e édition',
    'Watson, Biologie moléculaire du gène, 7e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-replication-fc-01',
      recto: 'Qu’est-ce que le caractère semi-conservatif de la réplication ?',
      verso: 'Chaque molécule fille d’ADN est constituée d’un brin parental conservé et d’un brin néosynthétisé complémentaire.',
      type: 'definition',
      tags: ['réplication'],
    },
    {
      id: 'ue1-replication-fc-02',
      recto: 'Quels chercheurs ont démontré le caractère semi-conservatif de la réplication, et par quelle technique ?',
      verso: 'Meselson et Stahl, en 1958, par marquage isotopique à l’azote et centrifugation en gradient de densité de chlorure de césium.',
      type: 'definition',
      tags: ['Meselson-Stahl'],
    },
    {
      id: 'ue1-replication-fc-03',
      recto: 'Combien d’origines de réplication utilise une bactérie comme Escherichia coli ?',
      verso: 'Une seule, appelée oriC.',
      type: 'chiffre',
      tags: ['origine de réplication'],
    },
    {
      id: 'ue1-replication-fc-04',
      recto: 'Quel est le rôle de l’hélicase à la fourche de réplication ?',
      verso: 'Elle déroule la double hélice en rompant les liaisons hydrogène entre les deux brins parentaux.',
      type: 'mecanisme',
      tags: ['fourche de réplication'],
    },
    {
      id: 'ue1-replication-fc-05',
      recto: 'Pourquoi une amorce d’ARN est-elle nécessaire pour initier la synthèse d’ADN ?',
      verso: 'Parce que les ADN polymérases ne peuvent qu’allonger une extrémité 3′-OH déjà existante, sans pouvoir initier une synthèse ex nihilo.',
      type: 'mecanisme',
      tags: ['primase'],
    },
    {
      id: 'ue1-replication-fc-06',
      recto: 'Quelles ADN polymérases eucaryotes assurent principalement l’élongation du brin direct et du brin retardé ?',
      verso: 'L’ADN polymérase epsilon pour le brin direct, l’ADN polymérase delta pour le brin retardé.',
      type: 'classification',
      tags: ['ADN polymérase'],
    },
    {
      id: 'ue1-replication-fc-07',
      recto: 'Quelle activité enzymatique de l’ADN polymérase I bactérienne permet l’excision des amorces d’ARN ?',
      verso: 'Son activité exonucléasique 5′ vers 3′.',
      type: 'mecanisme',
      tags: ['ADN polymérase'],
    },
    {
      id: 'ue1-replication-fc-08',
      recto: 'Qu’est-ce qu’un fragment d’Okazaki ?',
      verso: 'Un court fragment d’ADN néosynthétisé de façon discontinue sur le brin retardé, amorcé par une séquence d’ARN.',
      type: 'definition',
      tags: ['fragment d’Okazaki'],
    },
    {
      id: 'ue1-replication-fc-09',
      recto: 'Quelle enzyme relie entre eux les fragments d’Okazaki ?',
      verso: 'L’ADN ligase, qui forme la liaison phosphodiester manquante entre deux fragments adjacents.',
      type: 'mecanisme',
      tags: ['ADN ligase'],
    },
    {
      id: 'ue1-replication-fc-10',
      recto: 'Quels sont les trois mécanismes qui assurent la fidélité de la réplication ?',
      verso: 'La sélectivité d’appariement des bases, la relecture exonucléasique 3′ vers 5′, et la réparation des mésappariements post-réplicatifs.',
      type: 'mecanisme',
      tags: ['fidélité'],
    },
    {
      id: 'ue1-replication-fc-11',
      recto: 'Pourquoi le problème de fin de réplication concerne-t-il spécifiquement le brin retardé ?',
      verso: 'Parce que la brèche laissée par l’excision de l’amorce d’ARN terminale ne peut pas être comblée, faute d’extrémité 3′-OH en amont sur lequel une polymérase pourrait s’appuyer.',
      type: 'mecanisme',
      tags: ['télomère', 'fin de réplication'],
    },
    {
      id: 'ue1-replication-fc-12',
      recto: 'Quel ordre de grandeur retenir pour le taux d’erreur final de la réplication, après relecture et réparation ?',
      verso: 'Environ une erreur pour un milliard de nucléotides incorporés.',
      type: 'chiffre',
      tags: ['fidélité'],
    },
  ],
  qcm: [
    {
      id: 'ue1-replication-qcm-01',
      enonce: 'Concernant le caractère semi-conservatif de la réplication, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Chaque molécule fille comporte un brin ancien et un brin nouveau.',
          vraie: true,
          justification: 'Exact : c’est la définition même du modèle semi-conservatif.',
        },
        {
          lettre: 'B',
          texte: 'Ce modèle a été démontré par l’expérience de Meselson et Stahl.',
          vraie: true,
          justification: 'Exact, chez la bactérie Escherichia coli, par marquage isotopique.',
        },
        {
          lettre: 'C',
          texte: 'Le modèle conservatif prévoit qu’une des deux molécules filles est entièrement composée de brins anciens.',
          vraie: true,
          justification: 'Exact : c’est bien la prédiction du modèle conservatif, écarté par l’expérience.',
        },
        {
          lettre: 'D',
          texte: 'L’expérience de Meselson et Stahl utilisait un marquage à l’azote lourd 15N.',
          vraie: true,
          justification: 'Ce marquage isotopique de l’ADN, distinguable par centrifugation en gradient de densité, a permis de suivre le devenir des brins anciens et nouveaux au fil des générations de réplication.',
        },
        {
          lettre: 'E',
          texte: 'Le modèle dispersif a été confirmé par cette expérience.',
          vraie: false,
          justification: 'Faux : c’est le modèle semi-conservatif qui a été confirmé, à l’exclusion des modèles conservatif et dispersif.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et D. Bien connaître les trois modèles théoriques et le protocole de l’expérience historique.',
      difficulte: 2,
    },
    {
      id: 'ue1-replication-qcm-02',
      enonce: 'Concernant les origines de réplication, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le génome bactérien possède une seule origine de réplication.',
          vraie: true,
          justification: 'Exact, appelée oriC chez Escherichia coli.',
        },
        {
          lettre: 'B',
          texte: 'Le génome eucaryote utilise de multiples origines de réplication.',
          vraie: true,
          justification: 'Exact, nécessaires pour répliquer un génome volumineux dans le temps du cycle cellulaire.',
        },
        {
          lettre: 'C',
          texte: 'Une fourche de réplication unique se forme à chaque origine activée.',
          vraie: false,
          justification: 'Faux : deux fourches progressent en sens opposé à partir de chaque origine activée.',
        },
        {
          lettre: 'D',
          texte: 'Le complexe de reconnaissance de l’origine (ORC) intervient chez les eucaryotes.',
          vraie: true,
          justification: 'Ce complexe protéique se fixe sur chaque origine de réplication eucaryote et recrute les autres facteurs nécessaires à l’assemblage du complexe de pré-réplication.',
        },
        {
          lettre: 'E',
          texte: 'L’unité d’ADN répliquée à partir d’une même origine est appelée réplicon.',
          vraie: true,
          justification: 'Le réplicon désigne le segment d’ADN pris en charge par les deux fourches divergentes issues d’une même origine de réplication.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir la bidirectionnalité de chaque origine activée.',
      difficulte: 2,
    },
    {
      id: 'ue1-replication-qcm-03',
      enonce: 'Concernant les ADN polymérases, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Toutes les ADN polymérases synthétisent l’ADN dans le sens 5′ vers 3′.',
          vraie: true,
          justification: 'Exact : c’est une propriété commune à toutes les ADN polymérases connues.',
        },
        {
          lettre: 'B',
          texte: 'L’ADN polymérase III est l’enzyme principale de l’élongation chez Escherichia coli.',
          vraie: true,
          justification: 'Grâce à sa forte processivité et sa vitesse de synthèse élevée, cette enzyme assure l’essentiel de l’élongation du brin d’ADN chez cette bactérie.',
        },
        {
          lettre: 'C',
          texte: 'L’ADN polymérase I bactérienne excise les amorces d’ARN.',
          vraie: true,
          justification: 'Exact, grâce à son activité exonucléasique 5′ vers 3′.',
        },
        {
          lettre: 'D',
          texte: 'Chez les eucaryotes, l’ADN polymérase alpha est associée à la primase pour initier la synthèse.',
          vraie: true,
          justification: 'Ce complexe synthétise d’abord une courte amorce d’ARN puis y ajoute quelques nucléotides d’ADN, avant que des polymérases plus processives ne prennent le relais de l’élongation.',
        },
        {
          lettre: 'E',
          texte: 'Toutes les ADN polymérases peuvent initier la synthèse d’un brin sans amorce.',
          vraie: false,
          justification: 'Faux : aucune ADN polymérase connue ne peut initier une synthèse sans amorce préexistante.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et D. Retenir la nécessité universelle d’une amorce.',
      difficulte: 2,
    },
    {
      id: 'ue1-replication-qcm-04',
      enonce: 'Concernant le brin direct, le brin retardé et les fragments d’Okazaki, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le brin direct est synthétisé de façon continue.',
          vraie: true,
          justification: 'Son orientation permet à l’ADN polymérase de progresser sans interruption dans le même sens que la fourche de réplication, sans nécessiter de nouvelles amorces.',
        },
        {
          lettre: 'B',
          texte: 'Les fragments d’Okazaki sont plus longs chez les eucaryotes que chez les procaryotes.',
          vraie: false,
          justification: 'Faux : ils sont plus courts chez les eucaryotes, en raison de la présence des nucléosomes.',
        },
        {
          lettre: 'C',
          texte: 'Chaque fragment d’Okazaki est amorcé par une courte séquence d’ARN.',
          vraie: true,
          justification: 'Comme toute ADN polymérase, celle du brin retardé nécessite une amorce pour débuter la synthèse ; une primase en produit donc une nouvelle courte amorce d’ARN à chaque fragment.',
        },
        {
          lettre: 'D',
          texte: 'L’ADN ligase synthétise de nouveaux nucléotides pour combler les brèches entre fragments.',
          vraie: false,
          justification: 'Faux : l’ADN ligase forme seulement la liaison phosphodiester entre deux fragments déjà complets ; le comblement des brèches est assuré par une ADN polymérase.',
        },
        {
          lettre: 'E',
          texte: 'Le brin retardé progresse globalement dans le sens opposé à celui de la fourche.',
          vraie: true,
          justification: 'Exact : chaque fragment est synthétisé 5′ vers 3′, mais la synthèse globale s’éloigne de la fourche.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer le rôle de l’ADN ligase de celui des ADN polymérases.',
      difficulte: 2,
    },
    {
      id: 'ue1-replication-qcm-05',
      enonce: 'Concernant la fidélité de la réplication, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La relecture exonucléasique se fait dans le sens 3′ vers 5′.',
          vraie: true,
          justification: 'Exact : elle retire le dernier nucléotide mal incorporé, en amont de la direction de synthèse.',
        },
        {
          lettre: 'B',
          texte: 'Le taux d’erreur avant tout mécanisme correcteur est déjà de l’ordre d’une erreur pour un milliard de nucléotides.',
          vraie: false,
          justification: 'Faux : ce taux très bas n’est atteint qu’après relecture et réparation des mésappariements ; avant correction, il est bien plus élevé.',
        },
        {
          lettre: 'C',
          texte: 'Le système de réparation des mésappariements agit après la réplication.',
          vraie: true,
          justification: 'Exact, il corrige les erreurs échappées à la relecture immédiate.',
        },
        {
          lettre: 'D',
          texte: 'La sélectivité d’appariement des bases contribue à la fidélité de la réplication.',
          vraie: true,
          justification: 'Exact, c’est le premier niveau de fidélité.',
        },
        {
          lettre: 'E',
          texte: 'Toutes les ADN polymérases possèdent une activité de relecture 3′ vers 5′.',
          vraie: false,
          justification: 'Faux : certaines ADN polymérases, notamment de réparation à faible fidélité, en sont dépourvues.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Trois niveaux successifs concourent à la fidélité globale de la réplication.',
      difficulte: 2,
    },
    {
      id: 'ue1-replication-qcm-06',
      enonce: 'Concernant le problème de fin de réplication, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il concerne l’incapacité à combler la brèche laissée par l’amorce d’ARN terminale du brin retardé.',
          vraie: true,
          justification: 'Une fois cette dernière amorce d’ARN retirée à l’extrémité du chromosome, aucune amorce en amont ne permet à une ADN polymérase de combler la brèche, ce qui raccourcit progressivement le chromosome à chaque division.',
        },
        {
          lettre: 'B',
          texte: 'Il entraîne un raccourcissement progressif des extrémités chromosomiques à chaque division.',
          vraie: true,
          justification: 'Exact, en l’absence de compensation.',
        },
        {
          lettre: 'C',
          texte: 'La télomérase peut compenser ce raccourcissement dans certaines cellules.',
          vraie: true,
          justification: 'Exact, notamment dans les cellules germinales et souches.',
        },
        {
          lettre: 'D',
          texte: 'Ce problème concerne également les chromosomes circulaires des bactéries.',
          vraie: false,
          justification: 'Faux : un chromosome circulaire n’a pas d’extrémité libre, donc ce problème ne se pose pas.',
        },
        {
          lettre: 'E',
          texte: 'Ce problème résulte du sens unique de synthèse des ADN polymérases, 5′ vers 3′.',
          vraie: true,
          justification: 'Exact : c’est l’impossibilité d’élonger vers l’extrémité 5′ du brin retardé qui est en cause.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Ce problème est propre aux chromosomes linéaires des eucaryotes.',
      difficulte: 2,
    },
  ],
};
