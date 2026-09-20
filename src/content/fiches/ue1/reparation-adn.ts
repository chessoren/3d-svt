import type { Fiche } from '../../types';

export const ficheReparationAdn: Fiche = {
  id: 'ue1-reparation-adn',
  ue: 'ue1',
  titre: 'Réparation de l’ADN',
  sousTitre: 'Types de lésions, excision de base, excision de nucléotide, mésappariements, cassures double brin, xeroderma pigmentosum',
  chapitre: 'Structure et expression du génome',
  ordre: 4,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'lésion de l’ADN',
    'excision de base',
    'excision de nucléotide',
    'mésappariement',
    'cassure double brin',
    'recombinaison homologue',
    'xeroderma pigmentosum',
  ],
  objectifs: [
    'Classer les principaux types de lésions spontanées et induites de l’ADN.',
    'Décrire les étapes de la réparation par excision de base.',
    'Décrire les étapes de la réparation par excision de nucléotide.',
    'Expliquer le principe de la réparation des mésappariements post-réplicatifs.',
    'Distinguer les deux grandes voies de réparation des cassures double brin.',
    'Relier plusieurs maladies héréditaires à un déficit d’un système de réparation de l’ADN.',
  ],
  sections: [
    {
      id: 'types-lesions',
      titre: 'Types de lésions de l’ADN',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’ADN subit en permanence des dommages, d’origine spontanée ou provoqués par des agents exogènes. Ces lésions, si elles ne sont pas corrigées, compromettent la réplication et la transcription, et sont à l’origine de mutations.',
        },
        {
          type: 'tableau',
          titre: 'Principaux types de lésions et leur origine',
          colonnes: ['Origine', 'Exemple de lésion', 'Mécanisme'],
          lignes: [
            ['Spontanée', 'Dépurination', 'Hydrolyse de la liaison N-osidique entre une base purique et le désoxyribose'],
            ['Spontanée', 'Désamination de la cytosine en uracile', 'Hydrolyse spontanée de la fonction amine de la cytosine'],
            ['Spontanée', 'Oxydation, par exemple 8-oxoguanine', 'Attaque par les espèces réactives de l’oxygène issues du métabolisme cellulaire'],
            ['Rayonnement ultraviolet', 'Dimères de pyrimidines adjacentes', 'Formation d’un pont covalent entre deux pyrimidines voisines sur le même brin'],
            ['Rayonnement ionisant', 'Cassures simple brin et double brin', 'Rupture directe du squelette phosphodiester'],
            ['Agents chimiques', 'Adduits alkylés ou pontages', 'Fixation covalente d’un groupement chimique réactif sur une base'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Uracile dans l’ADN',
          texte:
            'Un uracile apparu par désamination spontanée de la cytosine est une base normalement absente de l’ADN : sa présence est donc facilement reconnue comme une anomalie par les systèmes de réparation, ce qui explique pourquoi l’ADN utilise la thymine plutôt que l’uracile.',
        },
      ],
    },
    {
      id: 'ber',
      titre: 'Réparation par excision de base',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La réparation par excision de base, ou BER, corrige les lésions ponctuelles qui n’entraînent qu’une faible déformation de la double hélice, comme les bases désaminées, oxydées ou alkylées.',
        },
        {
          type: 'etapes',
          titre: 'Étapes de la réparation par excision de base',
          etapes: [
            {
              titre: 'Reconnaissance et excision de la base',
              detail: 'Une ADN glycosylase, spécifique du type de lésion, reconnaît la base anormale et rompt la liaison N-osidique, générant un site abasique, dit site AP.',
            },
            {
              titre: 'Incision du squelette',
              detail: 'Une endonucléase AP coupe le squelette phosphodiester de part et d’autre du site abasique.',
            },
            {
              titre: 'Comblement de la brèche',
              detail: 'Une ADN polymérase élimine les résidus restants et insère le ou les nucléotides corrects, en utilisant le brin complémentaire intact comme matrice.',
            },
            {
              titre: 'Ligation',
              detail: 'L’ADN ligase scelle la dernière liaison phosphodiester et restaure la continuité du brin.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Spécificité des glycosylases',
          texte:
            'Il existe plusieurs ADN glycosylases, chacune reconnaissant un type précis de base endommagée : l’uracile-ADN glycosylase élimine l’uracile issu de la désamination de la cytosine, tandis que d’autres glycosylases reconnaissent des bases oxydées comme la 8-oxoguanine.',
        },
      ],
    },
    {
      id: 'ner',
      titre: 'Réparation par excision de nucléotide',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La réparation par excision de nucléotide, ou NER, corrige les lésions volumineuses qui déforment significativement la double hélice, comme les dimères de pyrimidines induits par les ultraviolets ou les adduits chimiques encombrants.',
        },
        {
          type: 'etapes',
          titre: 'Étapes de la réparation par excision de nucléotide',
          etapes: [
            {
              titre: 'Reconnaissance de la distorsion',
              detail: 'Un complexe protéique détecte la déformation locale de la double hélice provoquée par la lésion.',
            },
            {
              titre: 'Double incision',
              detail: 'Des endonucléases coupent le brin lésé de part et d’autre de la lésion, encadrant un segment d’une vingtaine à une trentaine de nucléotides.',
            },
            {
              titre: 'Excision et resynthèse',
              detail: 'Le segment lésé est excisé, puis une ADN polymérase comble la brèche en utilisant le brin complémentaire intact comme matrice.',
            },
            {
              titre: 'Ligation',
              detail: 'L’ADN ligase referme la dernière discontinuité.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Deux sous-voies de la NER',
          texte:
            'La réparation par excision de nucléotide comporte deux sous-voies : la réparation globale du génome, qui surveille l’ensemble de l’ADN, et la réparation couplée à la transcription, plus rapide et efficace, qui répare en priorité le brin transcrit des gènes activement exprimés lorsque l’ARN polymérase est bloquée par la lésion.',
        },
      ],
    },
    {
      id: 'mmr',
      titre: 'Réparation des mésappariements',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La réparation des mésappariements, ou MMR, corrige les erreurs d’appariement de bases et les petites boucles d’insertion ou de délétion qui ont échappé à l’activité de relecture des ADN polymérases lors de la réplication.',
        },
        {
          type: 'liste',
          items: [
            'Un premier complexe protéique reconnaît le mésappariement au niveau du double brin d’ADN.',
            'Un second complexe est recruté et permet de distinguer le brin néosynthétisé, porteur de l’erreur, du brin matrice.',
            'Le segment contenant l’erreur est excisé sur le brin néosynthétisé, puis resynthétisé par une ADN polymérase à l’aide du brin matrice.',
            'L’ADN ligase referme la brèche.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Syndrome de Lynch',
          texte:
            'Le syndrome de Lynch, ou cancer colorectal héréditaire sans polypose, est lié à des mutations constitutionnelles de gènes du système de réparation des mésappariements. Les cellules porteuses accumulent des erreurs de réplication, en particulier au niveau des séquences microsatellites, ce qui prédispose à des cancers colorectaux et à d’autres cancers, survenant souvent à un âge plus jeune que dans la population générale.',
        },
      ],
    },
    {
      id: 'cassures-double-brin',
      titre: 'Réparation des cassures double brin',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les cassures double brin sont parmi les lésions les plus dangereuses pour la cellule, car elles peuvent conduire à une perte d’information génétique ou à des réarrangements chromosomiques. Deux grandes voies permettent leur réparation.',
        },
        {
          type: 'comparaison',
          titre: 'Les deux voies de réparation des cassures double brin',
          gauche: {
            titre: 'Jonction d’extrémités non homologues',
            points: [
              'Rapproche et rabote directement les deux extrémités cassées, sans matrice homologue',
              'Active tout au long du cycle cellulaire',
              'Mécanisme rapide mais source d’erreurs, avec possibles pertes ou insertions de quelques nucléotides',
            ],
          },
          droite: {
            titre: 'Recombinaison homologue',
            points: [
              'Utilise la chromatide sœur intacte comme matrice de réparation',
              'Nécessite la présence d’une chromatide sœur, donc active en phase S et G2 du cycle cellulaire',
              'Mécanisme fidèle, restituant la séquence originale',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'BRCA1 et BRCA2',
          texte:
            'Les protéines BRCA1 et BRCA2 interviennent dans la voie de recombinaison homologue. Une mutation constitutionnelle de l’un de ces gènes prédispose fortement au cancer du sein et au cancer de l’ovaire, en raison de l’accumulation de cassures double brin mal réparées et de l’instabilité génomique qui en résulte.',
        },
      ],
    },
    {
      id: 'maladies-reparation',
      titre: 'Maladies héréditaires de la réparation de l’ADN',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Plusieurs maladies génétiques rares résultent d’un déficit héréditaire d’un système de réparation de l’ADN, et se caractérisent par une sensibilité accrue à certains agents génotoxiques et une prédisposition aux cancers.',
        },
        {
          type: 'tableau',
          titre: 'Principales maladies liées à un déficit de réparation',
          colonnes: ['Maladie', 'Système de réparation déficient', 'Manifestations principales'],
          lignes: [
            ['Xeroderma pigmentosum', 'Excision de nucléotide (NER)', 'Photosensibilité cutanée extrême, cancers cutanés multiples et précoces sur les zones exposées au soleil'],
            ['Syndrome de Lynch', 'Réparation des mésappariements (MMR)', 'Prédisposition au cancer colorectal et à d’autres cancers, instabilité des microsatellites'],
            ['Prédisposition BRCA1 ou BRCA2', 'Recombinaison homologue', 'Prédisposition au cancer du sein et de l’ovaire'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Xeroderma pigmentosum : le lien de causalité',
          texte:
            'Dans le xeroderma pigmentosum, l’incapacité à réparer les dimères de pyrimidines induits par les ultraviolets, par déficit de la NER, aboutit à l’accumulation de mutations dans les cellules cutanées exposées au soleil, expliquant le risque très élevé de cancers cutanés dès le plus jeune âge en l’absence de protection solaire stricte.',
        },
      ],
    },
  ],
  pointsCles: [
    'Les lésions de l’ADN peuvent être spontanées, comme la dépurination et la désamination, ou induites par les ultraviolets, les rayonnements ionisants et les agents chimiques.',
    'La réparation par excision de base corrige les lésions ponctuelles peu déformantes, via une ADN glycosylase et un site abasique.',
    'La réparation par excision de nucléotide corrige les lésions volumineuses, comme les dimères de pyrimidines, par excision d’un segment autour de la lésion.',
    'La réparation des mésappariements corrige les erreurs de réplication échappées à la relecture, en distinguant le brin néosynthétisé du brin matrice.',
    'Les cassures double brin sont réparées par jonction d’extrémités non homologues, rapide mais source d’erreurs, ou par recombinaison homologue, fidèle mais limitée aux phases S et G2.',
    'Le xeroderma pigmentosum résulte d’un déficit de la NER, le syndrome de Lynch d’un déficit de la MMR, et la prédisposition BRCA d’un déficit de la recombinaison homologue.',
  ],
  erreursFrequentes: [
    'Confondre excision de base (BER) et excision de nucléotide (NER) : la première corrige de petites lésions par une glycosylase, la seconde de grandes lésions par excision d’un segment plus large.',
    'Croire que la recombinaison homologue est active à tout moment du cycle cellulaire : elle nécessite une chromatide sœur, donc les phases S et G2 uniquement.',
    'Penser que la jonction d’extrémités non homologues est un mécanisme fidèle : elle est au contraire source d’erreurs, bien que rapide.',
    'Associer le xeroderma pigmentosum à un déficit de la réparation des mésappariements plutôt qu’à un déficit de la NER.',
    'Oublier que l’uracile-ADN glycosylase élimine spécifiquement l’uracile apparu par désamination de la cytosine, et non l’uracile normal d’un ARN.',
  ],
  mnemotechniques: [
    {
      moyen: 'BER pour petit, NER pour grand',
      explication: 'La réparation par excision de Base corrige de petites lésions ponctuelles ; la réparation par excision de Nucléotide corrige de grandes lésions volumineuses qui déforment l’hélice.',
    },
    {
      moyen: 'Homologue, comme la sœur qui aide',
      explication: 'La recombinaison homologue utilise la chromatide sœur comme modèle fidèle, alors que la jonction non homologue répare sans modèle, plus vite mais moins bien.',
    },
    {
      moyen: 'BRCA comme « brèche cassée à réparer »',
      explication: 'BRCA1 et BRCA2 interviennent dans la réparation fidèle des cassures double brin par recombinaison homologue ; leur perte de fonction expose à l’instabilité génomique.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Nussbaum, Thompson et Thompson, Génétique médicale, édition française',
    'Watson, Biologie moléculaire du gène, 7e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-reparation-adn-fc-01',
      recto: 'Qu’est-ce qu’un site abasique ou site AP ?',
      verso: 'Une position de l’ADN où la base a été retirée, la liaison N-osidique étant rompue, sans perte du squelette sucre-phosphate.',
      type: 'definition',
      tags: ['BER'],
    },
    {
      id: 'ue1-reparation-adn-fc-02',
      recto: 'Quelle enzyme initie la réparation par excision de base ?',
      verso: 'Une ADN glycosylase, spécifique du type de base endommagée.',
      type: 'mecanisme',
      tags: ['BER'],
    },
    {
      id: 'ue1-reparation-adn-fc-03',
      recto: 'Quel type de lésion est typiquement corrigé par la réparation par excision de nucléotide ?',
      verso: 'Les lésions volumineuses et déformantes, comme les dimères de pyrimidines induits par les ultraviolets.',
      type: 'classification',
      tags: ['NER'],
    },
    {
      id: 'ue1-reparation-adn-fc-04',
      recto: 'Quelles sont les deux sous-voies de la réparation par excision de nucléotide ?',
      verso: 'La réparation globale du génome et la réparation couplée à la transcription.',
      type: 'classification',
      tags: ['NER'],
    },
    {
      id: 'ue1-reparation-adn-fc-05',
      recto: 'Que corrige la réparation des mésappariements ?',
      verso: 'Les erreurs d’appariement de bases et les petites boucles d’insertion ou de délétion échappées à la relecture lors de la réplication.',
      type: 'definition',
      tags: ['MMR'],
    },
    {
      id: 'ue1-reparation-adn-fc-06',
      recto: 'Comment le système de réparation des mésappariements distingue-t-il le brin fautif du brin matrice ?',
      verso: 'Il reconnaît des indices structuraux propres au brin néosynthétisé, ce qui lui permet de cibler l’excision sur ce brin.',
      type: 'mecanisme',
      tags: ['MMR'],
    },
    {
      id: 'ue1-reparation-adn-fc-07',
      recto: 'Quelles sont les deux voies principales de réparation des cassures double brin ?',
      verso: 'La jonction d’extrémités non homologues et la recombinaison homologue.',
      type: 'classification',
      tags: ['cassure double brin'],
    },
    {
      id: 'ue1-reparation-adn-fc-08',
      recto: 'Pourquoi la recombinaison homologue est-elle limitée aux phases S et G2 du cycle cellulaire ?',
      verso: 'Parce qu’elle nécessite la présence d’une chromatide sœur intacte comme matrice, disponible seulement après la réplication.',
      type: 'mecanisme',
      tags: ['recombinaison homologue'],
    },
    {
      id: 'ue1-reparation-adn-fc-09',
      recto: 'Quel système de réparation est déficient dans le xeroderma pigmentosum ?',
      verso: 'La réparation par excision de nucléotide (NER).',
      type: 'clinique',
      tags: ['xeroderma pigmentosum'],
    },
    {
      id: 'ue1-reparation-adn-fc-10',
      recto: 'Quel système de réparation est déficient dans le syndrome de Lynch ?',
      verso: 'La réparation des mésappariements (MMR).',
      type: 'clinique',
      tags: ['syndrome de Lynch'],
    },
    {
      id: 'ue1-reparation-adn-fc-11',
      recto: 'À quelle voie de réparation les protéines BRCA1 et BRCA2 sont-elles liées ?',
      verso: 'À la recombinaison homologue, voie de réparation fidèle des cassures double brin.',
      type: 'clinique',
      tags: ['BRCA'],
    },
    {
      id: 'ue1-reparation-adn-fc-12',
      recto: 'Pourquoi l’ADN utilise-t-il la thymine plutôt que l’uracile ?',
      verso: 'Parce qu’un uracile apparu par désamination spontanée de la cytosine doit rester reconnaissable comme une anomalie ; utiliser la thymine, absente de l’ARN normal, permet à l’uracile-ADN glycosylase de repérer sans ambiguïté un uracile aberrant.',
      type: 'mecanisme',
      tags: ['désamination'],
    },
  ],
  qcm: [
    {
      id: 'ue1-reparation-adn-qcm-01',
      enonce: 'Concernant les lésions de l’ADN, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La dépurination est une lésion spontanée.',
          vraie: true,
          justification: 'Exact : elle résulte de l’hydrolyse spontanée de la liaison N-osidique d’une base purique.',
        },
        {
          lettre: 'B',
          texte: 'Les dimères de pyrimidines sont induits par les rayonnements ultraviolets.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'La désamination de la cytosine produit une thymine.',
          vraie: false,
          justification: 'Faux : la désamination de la cytosine produit de l’uracile, une base normalement absente de l’ADN.',
        },
        {
          lettre: 'D',
          texte: 'Les rayonnements ionisants peuvent provoquer des cassures double brin.',
          vraie: true,
          justification: 'Exact, en rompant directement le squelette phosphodiester des deux brins.',
        },
        {
          lettre: 'E',
          texte: 'Toutes les lésions de l’ADN sont d’origine exogène.',
          vraie: false,
          justification: 'Faux : de nombreuses lésions, comme la dépurination ou l’oxydation, sont spontanées, sans agent exogène.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien distinguer désamination (donne l’uracile) et lésions induites par les ultraviolets ou les rayonnements ionisants.',
      difficulte: 2,
    },
    {
      id: 'ue1-reparation-adn-qcm-02',
      enonce: 'Concernant la réparation par excision de base, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle débute par l’action d’une ADN glycosylase.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Elle corrige préférentiellement les grandes lésions déformant fortement l’hélice.',
          vraie: false,
          justification: 'Faux : ces lésions volumineuses relèvent plutôt de la réparation par excision de nucléotide.',
        },
        {
          lettre: 'C',
          texte: 'Elle génère un site abasique intermédiaire.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Une endonucléase AP intervient après l’action de la glycosylase.',
          vraie: true,
          justification: 'Exact, pour inciser le squelette de part et d’autre du site abasique.',
        },
        {
          lettre: 'E',
          texte: 'L’ADN ligase referme la dernière discontinuité du brin.',
          vraie: true,
          justification: 'Exact, c’est l’étape finale commune à la plupart des voies de réparation.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. La cible privilégiée de la BER est une petite lésion ponctuelle, non une lésion volumineuse.',
      difficulte: 2,
    },
    {
      id: 'ue1-reparation-adn-qcm-03',
      enonce: 'Concernant la réparation par excision de nucléotide, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est particulièrement sollicitée pour réparer les dimères de pyrimidines.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Elle excise un unique nucléotide autour de la lésion.',
          vraie: false,
          justification: 'Faux : elle excise un segment plus large, d’une vingtaine à une trentaine de nucléotides.',
        },
        {
          lettre: 'C',
          texte: 'Elle comporte une sous-voie couplée à la transcription.',
          vraie: true,
          justification: 'Exact, qui répare en priorité le brin transcrit des gènes actifs.',
        },
        {
          lettre: 'D',
          texte: 'Son déficit héréditaire est en cause dans le xeroderma pigmentosum.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Elle utilise le brin complémentaire intact comme matrice de resynthèse.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. Retenir la taille du segment excisé, plus large qu’en excision de base.',
      difficulte: 2,
    },
    {
      id: 'ue1-reparation-adn-qcm-04',
      enonce: 'Concernant la réparation des mésappariements, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle intervient avant la réplication.',
          vraie: false,
          justification: 'Faux : elle intervient après la réplication, sur l’ADN néosynthétisé.',
        },
        {
          lettre: 'B',
          texte: 'Elle corrige des erreurs échappées à la relecture exonucléasique.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'Son déficit héréditaire est associé au syndrome de Lynch.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Elle cible l’excision sur le brin matrice ancien.',
          vraie: false,
          justification: 'Faux : elle cible le brin néosynthétisé, porteur de l’erreur.',
        },
        {
          lettre: 'E',
          texte: 'Son déficit est associé à une instabilité des séquences microsatellites.',
          vraie: true,
          justification: 'Exact, ce marqueur est utilisé pour orienter le diagnostic du syndrome de Lynch.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. La MMR agit après la réplication et cible spécifiquement le brin nouvellement synthétisé.',
      difficulte: 2,
    },
    {
      id: 'ue1-reparation-adn-qcm-05',
      enonce: 'Concernant la réparation des cassures double brin, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La jonction d’extrémités non homologues est active tout au long du cycle cellulaire.',
          vraie: true,
          justification: 'Exact, contrairement à la recombinaison homologue.',
        },
        {
          lettre: 'B',
          texte: 'La recombinaison homologue est un mécanisme fidèle.',
          vraie: true,
          justification: 'Exact, elle restitue la séquence originale grâce à la chromatide sœur.',
        },
        {
          lettre: 'C',
          texte: 'La jonction d’extrémités non homologues est plus fidèle que la recombinaison homologue.',
          vraie: false,
          justification: 'Faux : c’est l’inverse, la jonction non homologue est source d’erreurs.',
        },
        {
          lettre: 'D',
          texte: 'La recombinaison homologue nécessite une chromatide sœur.',
          vraie: true,
          justification: 'Exact, ce qui la restreint aux phases S et G2.',
        },
        {
          lettre: 'E',
          texte: 'BRCA1 et BRCA2 sont impliqués dans la jonction d’extrémités non homologues.',
          vraie: false,
          justification: 'Faux : ils sont impliqués dans la voie de recombinaison homologue.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Bien associer BRCA1 et BRCA2 à la recombinaison homologue, et non à la jonction non homologue.',
      difficulte: 2,
    },
    {
      id: 'ue1-reparation-adn-qcm-06',
      enonce: 'Concernant les maladies héréditaires liées à un déficit de réparation de l’ADN, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le xeroderma pigmentosum se caractérise par une photosensibilité cutanée extrême.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Le xeroderma pigmentosum résulte d’un déficit de la réparation par excision de base.',
          vraie: false,
          justification: 'Faux : il résulte d’un déficit de la réparation par excision de nucléotide.',
        },
        {
          lettre: 'C',
          texte: 'Le syndrome de Lynch prédispose au cancer colorectal.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'Une mutation constitutionnelle de BRCA1 ou BRCA2 prédispose au cancer du sein et de l’ovaire.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Ces maladies héréditaires ne s’accompagnent d’aucune prédisposition tumorale.',
          vraie: false,
          justification: 'Faux : elles s’accompagnent au contraire d’une prédisposition marquée à certains cancers, en raison de l’accumulation de mutations non corrigées.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir précisément le système de réparation déficient pour chaque maladie.',
      difficulte: 2,
    },
  ],
};
