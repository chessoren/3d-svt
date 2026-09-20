import type { Fiche } from '../../types';

export const ficheEtudesAnalytiques: Fiche = {
  id: 'sante-publique-etudes-analytiques',
  ue: 'sante-publique',
  titre: 'Études épidémiologiques analytiques',
  sousTitre: "Étude de cohorte, étude cas-témoins, choix des témoins et recueil de l’exposition",
  chapitre: 'Méthodes épidémiologiques',
  ordre: 4,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'étude de cohorte',
    'étude cas-témoins',
    'exposition',
    'facteur de risque',
    'sélection des témoins',
    'étude expérimentale',
  ],
  objectifs: [
    "Décrire le principe et le déroulement d’une étude de cohorte.",
    "Décrire le principe et le déroulement d’une étude cas-témoins.",
    "Comparer les deux schémas d’étude analytique.",
    "Connaître les enjeux du choix des témoins dans une étude cas-témoins.",
    "Connaître les modalités de recueil de l’exposition et leurs limites.",
    "Connaître les atouts et les limites de chaque schéma d’étude.",
  ],
  sections: [
    {
      id: 'principes-generaux',
      titre: "Principes généraux de l’épidémiologie analytique",
      blocs: [
        {
          type: 'definition',
          terme: 'Épidémiologie analytique',
          definition:
            "Branche de l’épidémiologie qui recherche et quantifie une association statistique entre une exposition (facteur de risque ou facteur protecteur) et un état de santé, dans le but de tester une hypothèse étiologique formulée notamment à partir des études descriptives.",
        },
        {
          type: 'liste',
          items: [
            "Les études analytiques comportent toujours une comparaison entre au moins deux groupes.",
            "Elles peuvent être observationnelles (cohorte, cas-témoins) : l’investigateur observe une exposition qu’il ne contrôle pas.",
            "Elles peuvent être expérimentales (essai contrôlé randomisé) : l’investigateur attribue lui-même l’exposition, ce qui garantit la meilleure validité pour établir une causalité.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Deux schémas observationnels de référence',
          texte:
            "L’étude de cohorte part de l’exposition pour observer la survenue de la maladie ; l’étude cas-témoins part de la maladie pour rechercher rétrospectivement l’exposition. Ces deux schémas sont complémentaires selon la question posée et les contraintes pratiques.",
        },
      ],
    },
    {
      id: 'etude-cohorte',
      titre: 'Étude de cohorte',
      blocs: [
        {
          type: 'definition',
          terme: 'Étude de cohorte (ou étude de suivi)',
          definition:
            "Étude observationnelle dans laquelle un groupe de sujets indemnes de la maladie étudiée, exposés ou non exposés au facteur étudié, est suivi dans le temps pour comparer l’incidence de la maladie selon le statut d’exposition initial.",
        },
        {
          type: 'etapes',
          titre: "Déroulement d’une étude de cohorte",
          etapes: [
            {
              titre: "Constitution de la cohorte",
              detail: "Sélection de sujets indemnes de la maladie étudiée, classés selon leur statut d’exposition au moment de l’inclusion.",
            },
            {
              titre: 'Suivi longitudinal',
              detail: "Suivi des sujets exposés et non exposés pendant une durée suffisante pour observer la survenue de nouveaux cas de la maladie.",
            },
            {
              titre: "Mesure de l’incidence dans chaque groupe",
              detail: "Calcul de l’incidence de la maladie chez les exposés et chez les non-exposés.",
            },
            {
              titre: 'Comparaison des incidences',
              detail: "Calcul d’une mesure d’association, en général le risque relatif, entre exposition et maladie.",
            },
          ],
        },
        {
          type: 'liste',
          items: [
            "Une cohorte prospective (ou concurrente) débute le suivi au moment de l’inclusion et se poursuit dans le futur.",
            "Une cohorte rétrospective (ou historique) reconstitue l’exposition et le suivi à partir de données déjà existantes, l’événement ayant déjà eu lieu au moment de l’analyse.",
          ],
        },
        {
          type: 'tableau',
          titre: "Atouts et limites de l’étude de cohorte",
          colonnes: ['Atouts', 'Limites'],
          lignes: [
            ["Établit une chronologie claire entre exposition et maladie", "Nécessite souvent un suivi long et coûteux"],
            ["Permet le calcul direct de l’incidence et du risque relatif", "Peu adaptée aux maladies rares (effectifs nécessaires très importants)"],
            ["Permet d’étudier plusieurs maladies pour une même exposition", "Exposée aux perdus de vue au cours du suivi"],
            ["Limite le biais de mémorisation, l’exposition étant recueillie avant la maladie", "Coût et durée souvent élevés"],
          ],
        },
      ],
    },
    {
      id: 'etude-cas-temoins',
      titre: 'Étude cas-témoins',
      blocs: [
        {
          type: 'definition',
          terme: 'Étude cas-témoins',
          definition:
            "Étude observationnelle dans laquelle des sujets atteints de la maladie étudiée (les cas) sont comparés à des sujets indemnes de cette maladie (les témoins), en recherchant rétrospectivement la fréquence de l’exposition antérieure dans chacun des deux groupes.",
        },
        {
          type: 'etapes',
          titre: "Déroulement d’une étude cas-témoins",
          etapes: [
            {
              titre: 'Sélection des cas',
              detail: "Identification de sujets atteints de la maladie étudiée, selon une définition de cas rigoureuse et standardisée.",
            },
            {
              titre: 'Sélection des témoins',
              detail: "Identification de sujets indemnes de la maladie, issus si possible de la même population source que les cas.",
            },
            {
              titre: "Recueil rétrospectif de l’exposition",
              detail: "Recherche, par interrogatoire ou par consultation de dossiers, de l’exposition antérieure au facteur étudié dans les deux groupes.",
            },
            {
              titre: "Calcul de la mesure d’association",
              detail: "Comparaison de la fréquence de l’exposition entre cas et témoins par le calcul d’un odds ratio.",
            },
          ],
        },
        {
          type: 'tableau',
          titre: "Atouts et limites de l’étude cas-témoins",
          colonnes: ['Atouts', 'Limites'],
          lignes: [
            ["Rapide et peu coûteuse à réaliser", "Ne permet pas de calculer directement une incidence"],
            ["Particulièrement adaptée aux maladies rares", "Exposée au biais de mémorisation (recueil rétrospectif de l’exposition)"],
            ["Permet d’étudier plusieurs expositions pour une seule maladie", "Difficulté du choix méthodologique des témoins"],
            ["Ne nécessite pas de suivi longitudinal", "Chronologie exposition-maladie parfois difficile à établir avec certitude"],
          ],
        },
      ],
    },
    {
      id: 'comparaison-schemas',
      titre: 'Comparaison des deux schémas',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Cohorte versus cas-témoins',
          gauche: {
            titre: 'Étude de cohorte',
            points: [
              "Part de l’exposition, va vers la maladie",
              'Adaptée aux expositions rares',
              'Mesure directement incidence et risque relatif',
              'Suivi souvent long et coûteux',
            ],
          },
          droite: {
            titre: 'Étude cas-témoins',
            points: [
              'Part de la maladie, remonte vers l’exposition',
              'Adaptée aux maladies rares',
              'Mesure un odds ratio, estimation du risque relatif',
              'Rapide, peu coûteuse, mais rétrospective',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le critère de choix principal : la fréquence de la maladie',
          texte:
            "Le choix entre les deux schémas dépend avant tout de la fréquence de la maladie étudiée : une maladie rare impose un effectif prohibitif en cohorte pour observer suffisamment de cas, ce qui rend l’étude cas-témoins beaucoup plus efficiente. À l’inverse, une exposition rare est mieux étudiée en cohorte.",
        },
      ],
    },
    {
      id: 'choix-temoins',
      titre: 'Le choix des témoins',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le choix des témoins conditionne fortement la validité d’une étude cas-témoins. Le principe fondamental est que les témoins doivent être issus de la même population source que les cas, c’est-à-dire de la population dont seraient issus les cas s’ils développaient la maladie.",
        },
        {
          type: 'liste',
          items: [
            "Témoins issus de la population générale : représentatifs de la population source, mais parfois difficiles à recruter et à faire participer.",
            "Témoins hospitaliers : plus faciles à recruter, mais risque que leur pathologie soit elle-même liée à l’exposition étudiée, source d’un biais de sélection.",
            "Il est parfois pertinent d’inclure plusieurs groupes de témoins pour vérifier la cohérence des résultats obtenus.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: "Piège classique : témoins hospitaliers biaisés",
          texte:
            "Choisir comme témoins des patients hospitalisés pour une pathologie elle-même associée à l’exposition étudiée fausse la comparaison : la fréquence de l’exposition chez les témoins ne reflète alors plus celle de la population source, ce qui biaise l’estimation de l’odds ratio.",
        },
      ],
    },
    {
      id: 'recueil-exposition',
      titre: "Recueil de l’exposition",
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La qualité du recueil de l’exposition conditionne la validité des résultats d’une étude analytique, en particulier dans les études cas-témoins, où ce recueil est rétrospectif.",
        },
        {
          type: 'tableau',
          titre: "Sources de recueil de l’exposition",
          colonnes: ['Source', 'Avantage', 'Limite principale'],
          lignes: [
            ['Interrogatoire du sujet', 'Recueil détaillé, adapté à des expositions non documentées', "Biais de mémorisation, différentiel entre cas et témoins"],
            ['Dossier médical', 'Objectivité relative des données consignées', "Exhaustivité variable selon la qualité du dossier"],
            ['Biomarqueur biologique', 'Objectivité et reproductibilité élevées', "Ne reflète parfois qu’une exposition récente"],
            ['Registres ou bases de données professionnelles', 'Données souvent prospectives et systématiques', "Disponibilité limitée à certaines expositions"],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Biais de mémorisation (recall bias)',
          texte:
            "Dans une étude cas-témoins, les cas, du fait de leur maladie, ont souvent tendance à mieux se souvenir de leurs expositions passées, ou à les rechercher activement, que les témoins indemnes. Ce biais de mémorisation différentiel peut créer une fausse association ou en exagérer une réelle.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’étude de cohorte part de l’exposition pour observer la survenue de la maladie ; l’étude cas-témoins part de la maladie pour rechercher rétrospectivement l’exposition.",
    "L’étude de cohorte permet le calcul direct de l’incidence et du risque relatif.",
    "L’étude cas-témoins permet le calcul d’un odds ratio et est particulièrement adaptée aux maladies rares.",
    "Le choix entre cohorte et cas-témoins dépend avant tout de la fréquence de la maladie étudiée.",
    "Les témoins doivent être issus de la même population source que les cas.",
    "Le choix de témoins hospitaliers expose à un biais de sélection si leur pathologie est liée à l’exposition étudiée.",
    "Le recueil rétrospectif de l’exposition, propre aux études cas-témoins, expose au biais de mémorisation.",
    "Aucun schéma observationnel n’égale la validité causale d’un essai contrôlé randomisé, où l’exposition est attribuée par l’investigateur.",
  ],
  erreursFrequentes: [
    "Croire qu’une étude cas-témoins permet de calculer directement une incidence : elle ne le permet pas, sauf cas particulier de cas-témoins en population avec échantillonnage connu.",
    "Oublier que le choix du schéma d’étude dépend avant tout de la fréquence de la maladie étudiée.",
    "Choisir des témoins hospitaliers atteints d’une pathologie liée à l’exposition étudiée, source de biais de sélection.",
    "Confondre biais de mémorisation et biais de sélection, qui interviennent à des étapes différentes de l’étude.",
    "Considérer qu’une étude de cohorte est toujours prospective : elle peut être rétrospective (historique).",
    "Croire qu’une étude observationnelle, même bien menée, apporte la même force de preuve causale qu’un essai contrôlé randomisé.",
  ],
  mnemotechniques: [
    {
      moyen: 'Cohorte = Cause vers Conséquence',
      explication: "L’étude de cohorte part de la cause (exposition) pour observer la conséquence (maladie), dans le sens chronologique naturel.",
    },
    {
      moyen: 'Cas-témoins = Constat puis Cause',
      explication: "L’étude cas-témoins part du constat de la maladie et recherche ensuite, en remontant le temps, la cause (exposition).",
    },
    {
      moyen: 'Rare-Rare : Maladie rare → Cas-témoins ; Exposition rare → Cohorte',
      explication: 'Le choix du schéma dépend de ce qui est rare : une maladie rare impose le cas-témoins, une exposition rare impose la cohorte.',
    },
  ],
  sources: [
    'Bouyer, Hémon, Cordier et al., Épidémiologie : principes et méthodes quantitatives, Lavoisier',
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    'Rothman, Greenland, Lash, Modern Epidemiology, Lippincott Williams & Wilkins',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-etudes-analytiques-fc-01',
      recto: "Quel est le point de départ d’une étude de cohorte ?",
      verso: "L’exposition : on classe des sujets indemnes selon leur statut d’exposition, puis on observe la survenue de la maladie.",
      type: 'definition',
      tags: ['cohorte'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-02',
      recto: "Quel est le point de départ d’une étude cas-témoins ?",
      verso: "La maladie : on sélectionne des cas et des témoins, puis on recherche rétrospectivement l’exposition antérieure.",
      type: 'definition',
      tags: ['cas-témoins'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-03',
      recto: "Quelle mesure d’association calcule-t-on directement dans une étude de cohorte ?",
      verso: 'Le risque relatif, à partir des incidences observées chez les exposés et les non-exposés.',
      type: 'formule',
      tags: ['cohorte', 'risque relatif'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-04',
      recto: "Quelle mesure d’association calcule-t-on dans une étude cas-témoins ?",
      verso: "L’odds ratio, qui estime le risque relatif lorsque la maladie est rare.",
      type: 'formule',
      tags: ['cas-témoins', 'odds ratio'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-05',
      recto: 'Quel schéma d’étude choisir pour une maladie rare ?',
      verso: "L’étude cas-témoins, car elle ne nécessite pas d’effectif prohibitif pour observer suffisamment de cas.",
      type: 'mecanisme',
      tags: ['choix du schéma'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-06',
      recto: 'Quel schéma d’étude choisir pour une exposition rare ?',
      verso: "L’étude de cohorte, qui permet de suivre spécifiquement les sujets exposés au facteur rare.",
      type: 'mecanisme',
      tags: ['choix du schéma'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-07',
      recto: "D’où doivent être issus les témoins d’une étude cas-témoins ?",
      verso: "De la même population source que les cas, c’est-à-dire de la population dont sont issus les cas.",
      type: 'mecanisme',
      tags: ['témoins'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-08',
      recto: "Quel est le risque principal des témoins hospitaliers ?",
      verso: "Que leur pathologie hospitalière soit elle-même liée à l’exposition étudiée, ce qui biaise la comparaison.",
      type: 'clinique',
      tags: ['témoins', 'biais de sélection'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-09',
      recto: "Qu’est-ce que le biais de mémorisation ?",
      verso: "Une différence de qualité ou d’exactitude du souvenir de l’exposition entre cas et témoins, les malades se souvenant souvent mieux de leurs expositions passées.",
      type: 'mecanisme',
      tags: ['biais de mémorisation'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-10',
      recto: 'Différencier cohorte prospective et cohorte rétrospective.',
      verso: "La cohorte prospective débute le suivi à l’inclusion et se poursuit dans le futur ; la cohorte rétrospective reconstitue exposition et suivi à partir de données déjà existantes.",
      type: 'classification',
      tags: ['cohorte'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-11',
      recto: "Pourquoi le recueil rétrospectif de l’exposition est-il plus fragile que le recueil prospectif ?",
      verso: "Parce qu’il expose davantage au biais de mémorisation, le souvenir de l’exposition pouvant être altéré par la survenue de la maladie.",
      type: 'mecanisme',
      tags: ['recueil de l’exposition'],
    },
    {
      id: 'sante-publique-etudes-analytiques-fc-12',
      recto: "Quel type d’étude analytique garantit la meilleure validité pour établir une causalité ?",
      verso: "L’essai contrôlé randomisé, étude expérimentale où l’exposition est attribuée par l’investigateur, en général par tirage au sort.",
      type: 'classification',
      tags: ['essai contrôlé randomisé'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-etudes-analytiques-qcm-01',
      enonce: "Concernant l’étude de cohorte, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Elle part de la maladie pour rechercher l’exposition.", vraie: false, justification: "Faux : c’est la définition de l’étude cas-témoins, pas de la cohorte." },
        { lettre: 'B', texte: "Elle permet le calcul direct de l’incidence dans chaque groupe.", vraie: true, justification: "Exact, c’est l’un de ses principaux intérêts." },
        { lettre: 'C', texte: "Elle est toujours prospective.", vraie: false, justification: "Faux : elle peut être rétrospective, ou historique." },
        { lettre: 'D', texte: 'Elle est particulièrement adaptée à l’étude d’une exposition rare.', vraie: true, justification: "Exact, elle permet de recruter spécifiquement des sujets exposés." },
        { lettre: 'E', texte: 'Elle est exposée au risque de perdus de vue au cours du suivi.', vraie: true, justification: "Exact, c’est une limite classique des études longitudinales." },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-etudes-analytiques-qcm-02',
      enonce: "Concernant l’étude cas-témoins, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Elle permet le calcul direct d’un risque relatif.", vraie: false, justification: "Faux : elle permet le calcul d’un odds ratio, qui n’est qu’une estimation du risque relatif." },
        { lettre: 'B', texte: "Elle est particulièrement adaptée à l’étude d’une maladie rare.", vraie: true, justification: "Exact, elle évite le recrutement d’un effectif prohibitif nécessaire en cohorte." },
        { lettre: 'C', texte: "Le recueil de l’exposition y est prospectif.", vraie: false, justification: "Faux : il est rétrospectif, ce qui expose au biais de mémorisation." },
        { lettre: 'D', texte: "Elle permet d’étudier plusieurs expositions pour une même maladie.", vraie: true, justification: 'Exact, c’est un atout classique de ce schéma.' },
        { lettre: 'E', texte: 'Elle nécessite un suivi longitudinal des sujets inclus.', vraie: false, justification: "Faux : elle ne nécessite pas de suivi, contrairement à l’étude de cohorte." },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-etudes-analytiques-qcm-03',
      enonce: 'Concernant le choix entre cohorte et cas-témoins, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "Une maladie rare impose un effectif très important en cohorte pour observer suffisamment de cas.", vraie: true, justification: "Exact, c’est la raison pour laquelle le cas-témoins est alors préféré." },
        { lettre: 'B', texte: "Une exposition rare est mieux étudiée par une étude cas-témoins.", vraie: false, justification: "Faux : c’est l’étude de cohorte qui est alors préférée, car elle permet de recruter spécifiquement les sujets exposés." },
        { lettre: 'C', texte: "Le choix du schéma dépend notamment de la fréquence de la maladie étudiée.", vraie: true, justification: "Exact, c’est le critère principal de choix entre les deux schémas." },
        { lettre: 'D', texte: "L’étude de cohorte est toujours moins coûteuse que l’étude cas-témoins.", vraie: false, justification: "Faux : c’est en général l’inverse, la cohorte étant souvent plus longue et plus coûteuse." },
        { lettre: 'E', texte: "Une étude cas-témoins peut étudier plusieurs expositions simultanément pour une même maladie.", vraie: true, justification: "Exact, c’est un avantage classique de ce schéma d’étude." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-etudes-analytiques-qcm-04',
      enonce: 'Concernant le choix des témoins dans une étude cas-témoins, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les témoins doivent idéalement être issus de la même population source que les cas.', vraie: true, justification: "Exact, c’est le principe fondamental du choix des témoins." },
        { lettre: 'B', texte: "Les témoins hospitaliers sont toujours préférables aux témoins de population générale.", vraie: false, justification: "Faux : ils exposent à un risque de biais de sélection si leur pathologie est liée à l’exposition étudiée." },
        { lettre: 'C', texte: "Le choix de plusieurs groupes de témoins peut permettre de vérifier la cohérence des résultats.", vraie: true, justification: "Exact, c’est une stratégie parfois utilisée pour renforcer la validité de l’étude." },
        { lettre: 'D', texte: "Les témoins doivent obligatoirement présenter la même exposition que les cas.", vraie: false, justification: "Faux : ce serait contraire au principe même de l’étude, qui compare précisément la fréquence de l’exposition entre cas et témoins." },
        { lettre: 'E', texte: "Un mauvais choix des témoins peut introduire un biais de sélection.", vraie: true, justification: "Exact, c’est l’une des principales menaces de validité de ce type d’étude." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 3,
    },
    {
      id: 'sante-publique-etudes-analytiques-qcm-05',
      enonce: "Concernant le recueil de l’exposition, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Le biais de mémorisation touche principalement les études de cohorte prospectives.", vraie: false, justification: "Faux : il touche surtout les études cas-témoins, où l’exposition est recueillie rétrospectivement." },
        { lettre: 'B', texte: "Un biomarqueur biologique offre en général une objectivité supérieure à un interrogatoire déclaratif.", vraie: true, justification: 'Exact, il limite la subjectivité et les erreurs de mémorisation.' },
        { lettre: 'C', texte: "Les cas se souviennent parfois mieux de leur exposition passée que les témoins.", vraie: true, justification: "Exact, c’est le mécanisme même du biais de mémorisation différentiel." },
        { lettre: 'D', texte: "Le dossier médical est une source d’exposition totalement exempte de biais.", vraie: false, justification: "Faux : son exhaustivité et sa qualité peuvent varier, ce qui introduit un biais potentiel." },
        { lettre: 'E', texte: "Recueillir l’exposition avant la survenue de la maladie limite le biais de mémorisation.", vraie: true, justification: "Exact, c’est l’un des atouts majeurs de l’étude de cohorte par rapport à l’étude cas-témoins." },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-etudes-analytiques-qcm-06',
      enonce: "Concernant l’épidémiologie analytique en général, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: 'Toute étude analytique comporte une comparaison entre au moins deux groupes.', vraie: true, justification: "Exact, c’est ce qui la distingue d’une étude purement descriptive comme la série de cas." },
        { lettre: 'B', texte: "Dans une étude observationnelle, l’investigateur attribue lui-même l’exposition aux sujets.", vraie: false, justification: "Faux : c’est le principe de l’étude expérimentale, pas de l’étude observationnelle." },
        { lettre: 'C', texte: "L’essai contrôlé randomisé est une étude expérimentale.", vraie: true, justification: "Exact, l’exposition (le traitement) y est attribuée par tirage au sort de l’investigateur." },
        { lettre: 'D', texte: "Les études descriptives et analytiques répondent exactement à la même question.", vraie: false, justification: "Faux : les descriptives décrivent, les analytiques testent une hypothèse d’association." },
        { lettre: 'E', texte: "L’épidémiologie analytique vise à quantifier une association entre exposition et état de santé.", vraie: true, justification: "Exact, c’est sa définition même." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
