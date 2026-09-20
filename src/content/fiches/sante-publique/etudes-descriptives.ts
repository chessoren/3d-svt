import type { Fiche } from '../../types';

export const ficheEtudesDescriptives: Fiche = {
  id: 'sante-publique-etudes-descriptives',
  ue: 'sante-publique',
  titre: 'Études épidémiologiques descriptives',
  sousTitre: "Enquêtes transversales, séries de cas, surveillance et description temps-lieu-personne",
  chapitre: 'Méthodes épidémiologiques',
  ordre: 3,
  duree: 22,
  difficulte: 2,
  motsCles: [
    'épidémiologie descriptive',
    'enquête transversale',
    'série de cas',
    'surveillance épidémiologique',
    'échantillonnage',
    'temps, lieu, personne',
  ],
  objectifs: [
    "Définir l’épidémiologie descriptive et ses objectifs.",
    "Décrire le principe d’une enquête transversale et d’une série de cas.",
    "Décrire les principes de la surveillance épidémiologique.",
    "Connaître les principales méthodes d’échantillonnage.",
    "Décrire un phénomène de santé selon les caractéristiques de temps, de lieu et de personne.",
    "Connaître les atouts et les limites des études descriptives.",
  ],
  sections: [
    {
      id: 'objectifs-epidemiologie-descriptive',
      titre: "Objectifs de l’épidémiologie descriptive",
      blocs: [
        {
          type: 'definition',
          terme: 'Épidémiologie descriptive',
          definition:
            "Branche de l’épidémiologie qui décrit la fréquence et la répartition des problèmes de santé dans une population, selon des caractéristiques de temps, de lieu et de personne, sans chercher à démontrer un lien de causalité.",
        },
        {
          type: 'liste',
          items: [
            "Elle permet de mesurer la fréquence d’un phénomène de santé (prévalence, incidence).",
            "Elle permet de décrire sa répartition dans la population et de repérer des groupes à risque.",
            "Elle permet de formuler des hypothèses étiologiques, qui seront ensuite testées par des études analytiques.",
            "Elle est indispensable à la planification et à l’évaluation des politiques de santé.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Descriptive ou analytique ?',
          texte:
            "L’épidémiologie descriptive répond à la question « combien, où, quand, qui ? ». L’épidémiologie analytique répond à la question « pourquoi ? », en recherchant des associations entre exposition et maladie. Les études descriptives génèrent des hypothèses ; les études analytiques les testent.",
        },
      ],
    },
    {
      id: 'enquetes-transversales',
      titre: 'Les enquêtes transversales',
      blocs: [
        {
          type: 'definition',
          terme: 'Enquête transversale (ou étude de prévalence)',
          definition:
            "Étude descriptive dans laquelle l’exposition et l’état de santé des sujets sont mesurés simultanément, à un instant donné, dans un échantillon de la population étudiée. Elle fournit une mesure de prévalence.",
        },
        {
          type: 'liste',
          items: [
            "Elle est rapide et peu coûteuse à mettre en œuvre par rapport à un suivi longitudinal.",
            "Elle permet d’estimer la fréquence d’un ou plusieurs états de santé dans une population à un moment donné.",
            "Elle ne permet pas d’établir une chronologie entre exposition et maladie, ce qui limite son interprétation causale.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le biais de prévalence (ou biais de survie sélective)',
          texte:
            "Une enquête transversale capte préférentiellement les cas prévalents, c’est-à-dire les sujets survivants au moment de l’enquête. Les formes les plus graves, à évolution rapide vers le décès ou la guérison, peuvent être sous-représentées : c’est le biais de Neyman, ou biais de prévalence-incidence.",
        },
        {
          type: 'tableau',
          titre: "Atouts et limites de l’enquête transversale",
          colonnes: ['Atouts', 'Limites'],
          lignes: [
            ['Rapide et peu coûteuse', "Ne permet pas d’établir une relation temporelle exposition-maladie"],
            ["Utile pour planifier des ressources de soins", "Sensible au biais de prévalence-incidence (biais de Neyman)"],
            ["Permet des mesures répétées dans le temps (enquêtes transversales répétées)", "Ne convient pas aux maladies rares ou de très courte durée"],
          ],
        },
      ],
    },
    {
      id: 'series-cas-surveillance',
      titre: 'Séries de cas et surveillance épidémiologique',
      blocs: [
        {
          type: 'definition',
          terme: 'Série de cas',
          definition:
            "Description détaillée d’un groupe de patients présentant une même pathologie ou une même exposition, sans groupe de comparaison. Elle permet de décrire les caractéristiques cliniques d’une maladie, en particulier lorsqu’elle est rare ou nouvellement identifiée.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Utilité historique des séries de cas',
          texte:
            "De nombreuses hypothèses étiologiques majeures sont nées de l’observation de séries de cas, comme l’identification initiale du sida à partir de cas groupés inhabituels de pneumocystose et de sarcome de Kaposi. L’absence de groupe témoin empêche toutefois toute démonstration causale à partir d’une série de cas seule.",
        },
        {
          type: 'definition',
          terme: 'Surveillance épidémiologique',
          definition:
            "Recueil continu et systématique de données de santé, leur analyse et leur interprétation, en vue d’une diffusion permettant d’orienter des actions de santé publique. Elle repose notamment sur les maladies à déclaration obligatoire et sur des réseaux de surveillance sentinelle.",
        },
        {
          type: 'liste',
          items: [
            "La surveillance passive repose sur la déclaration spontanée des cas par les professionnels de santé (exemple : déclaration obligatoire).",
            "La surveillance active consiste à rechercher activement les cas, par exemple en interrogeant systématiquement les laboratoires ou les services hospitalaires.",
            "Un réseau sentinelle repose sur un échantillon de professionnels ou de structures volontaires, suivis en continu pour estimer la tendance d’un phénomène dans la population générale.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Objectifs de la surveillance',
          texte:
            "La surveillance vise à détecter précocement une épidémie ou un phénomène inhabituel (alerte sanitaire), à suivre les tendances dans le temps, à orienter les priorités de santé publique et à évaluer l’impact d’une intervention.",
        },
      ],
    },
    {
      id: 'echantillonnage',
      titre: "Méthodes d’échantillonnage",
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Étudier une population entière est rarement possible : on constitue donc un échantillon, dont la représentativité conditionne la validité externe des résultats, c’est-à-dire la possibilité de les extrapoler à la population source.",
        },
        {
          type: 'tableau',
          titre: "Principales méthodes d’échantillonnage probabiliste",
          colonnes: ['Méthode', 'Principe'],
          lignes: [
            ['Tirage au sort simple (aléatoire simple)', 'Chaque individu de la population a la même probabilité connue et non nulle d’être tiré au sort'],
            ['Tirage systématique', "Sélection d’un individu tous les n individus à partir d’une liste ordonnée, après un point de départ aléatoire"],
            ['Échantillonnage stratifié', "Division de la population en strates homogènes (âge, sexe, région) puis tirage au sort au sein de chaque strate"],
            ['Échantillonnage en grappes (ou par clusters)', "Tirage au sort d’unités groupées (par exemple des cabinets médicaux ou des écoles), puis inclusion de tous les individus qui les composent"],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: "Échantillon de convenance : à distinguer d’un échantillon probabiliste",
          texte:
            "Un échantillon de convenance (ou non probabiliste) est constitué de sujets facilement accessibles, sans tirage au sort. Il est plus simple à obtenir mais expose à un biais de sélection majeur, car la probabilité d’inclusion de chaque sujet n’est ni connue ni égale.",
        },
      ],
    },
    {
      id: 'temps-lieu-personne',
      titre: 'Description selon le temps, le lieu et la personne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’épidémiologie descriptive caractérise classiquement un phénomène de santé selon trois axes complémentaires : le temps, le lieu et la personne. Cette triade oriente la recherche d’hypothèses étiologiques.",
        },
        {
          type: 'tableau',
          titre: 'La triade temps-lieu-personne',
          colonnes: ['Axe', 'Exemples de caractéristiques étudiées'],
          lignes: [
            ['Temps', "Évolution séculaire, variations saisonnières, épidémies ponctuelles, tendance à long terme"],
            ['Lieu', "Répartition géographique, comparaisons entre pays, régions, milieu urbain ou rural"],
            ['Personne', "Âge, sexe, catégorie socio-professionnelle, origine ethnique, exposition professionnelle"],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple : une courbe épidémique',
          texte:
            "En cas de toxi-infection alimentaire collective, la courbe épidémique (nombre de cas selon la date de début des symptômes) permet de distinguer une source commune ponctuelle (pic unique) d’une transmission de personne à personne (succession de vagues), orientant ainsi l’enquête étiologique.",
        },
      ],
    },
    {
      id: 'atouts-limites',
      titre: 'Atouts et limites globales des études descriptives',
      blocs: [
        {
          type: 'comparaison',
          titre: 'Bilan des études descriptives',
          gauche: {
            titre: 'Atouts',
            points: [
              'Génération rapide d’hypothèses étiologiques',
              'Souvent peu coûteuses et rapides à mener',
              'Indispensables à la planification sanitaire',
              'Base de la surveillance épidémiologique continue',
            ],
          },
          droite: {
            titre: 'Limites',
            points: [
              "Ne permettent pas de démontrer une relation causale",
              "Absence fréquente de groupe de comparaison (séries de cas)",
              "Risque de biais de sélection selon la méthode d’échantillonnage",
              "Difficulté à établir une chronologie exposition-maladie (enquêtes transversales)",
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'À retenir pour les QCM',
          texte:
            "Aucune étude descriptive, quelle que soit sa taille, ne permet à elle seule de conclure à un lien de causalité. Elle formule des hypothèses, que seules des études analytiques comparatives (cohorte, cas-témoins) permettent de tester rigoureusement.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’épidémiologie descriptive décrit la fréquence et la répartition d’un phénomène de santé sans chercher à démontrer une causalité.",
    "L’enquête transversale mesure simultanément exposition et état de santé à un instant donné, fournissant une prévalence.",
    "Le biais de Neyman (biais de prévalence-incidence) menace la validité des enquêtes transversales en sous-représentant les formes graves à évolution rapide.",
    "Une série de cas décrit un groupe de patients sans groupe de comparaison : elle génère des hypothèses mais ne peut les tester.",
    "La surveillance épidémiologique peut être passive (déclaration spontanée) ou active (recherche systématique des cas).",
    "La représentativité d’un échantillon conditionne la validité externe des résultats d’une étude.",
    "La triade temps-lieu-personne structure la description d’un phénomène de santé.",
    "Aucune étude descriptive ne permet, à elle seule, de conclure à une relation de causalité.",
  ],
  erreursFrequentes: [
    "Confondre étude descriptive et étude analytique, alors que seule la seconde permet de tester une hypothèse d’association.",
    "Croire qu’une enquête transversale permet d’établir la chronologie entre exposition et maladie.",
    "Considérer qu’une série de cas, même nombreuse, permet de conclure à une relation causale en l’absence de groupe témoin.",
    "Confondre échantillon probabiliste et échantillon de convenance, ce dernier exposant à un biais de sélection important.",
    "Négliger le biais de prévalence-incidence (biais de Neyman) lors de l’interprétation d’une enquête transversale portant sur une maladie grave.",
    "Assimiler surveillance passive et surveillance active, qui reposent sur des dynamiques de recueil très différentes.",
  ],
  mnemotechniques: [
    {
      moyen: 'Descriptive = Combien, Où, Quand, Qui',
      explication: "L’épidémiologie descriptive répond aux questions de fréquence et de répartition, pas à la question du pourquoi.",
    },
    {
      moyen: 'Transversale = photo unique',
      explication: "Dans une enquête transversale, exposition et maladie sont photographiées au même instant, sans suivi dans le temps.",
    },
    {
      moyen: 'TLP : Temps, Lieu, Personne',
      explication: "Les trois axes classiques de description d’un phénomène de santé en épidémiologie descriptive.",
    },
  ],
  sources: [
    'Bouyer, Hémon, Cordier et al., Épidémiologie : principes et méthodes quantitatives, Lavoisier',
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    'Santé publique France, principes de la surveillance épidémiologique',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-etudes-descriptives-fc-01',
      recto: "Que décrit l’épidémiologie descriptive ?",
      verso: "La fréquence et la répartition d’un phénomène de santé selon le temps, le lieu et la personne, sans chercher à démontrer une causalité.",
      type: 'definition',
      tags: ['épidémiologie descriptive'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-02',
      recto: "Qu’est-ce qu’une enquête transversale ?",
      verso: "Une étude où l’exposition et l’état de santé sont mesurés simultanément, à un instant donné, fournissant une mesure de prévalence.",
      type: 'definition',
      tags: ['enquête transversale'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-03',
      recto: "Qu’est-ce que le biais de Neyman ?",
      verso: "Le biais de prévalence-incidence : les formes graves à évolution rapide sont sous-représentées dans une enquête transversale, qui ne capte que les survivants.",
      type: 'mecanisme',
      tags: ['biais', 'enquête transversale'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-04',
      recto: "Qu’est-ce qu’une série de cas ?",
      verso: "La description détaillée d’un groupe de patients sans groupe de comparaison.",
      type: 'definition',
      tags: ['série de cas'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-05',
      recto: "Pourquoi une série de cas ne permet-elle pas de conclure à une causalité ?",
      verso: "Faute de groupe témoin, on ne peut pas comparer la fréquence de l’exposition entre malades et non-malades.",
      type: 'mecanisme',
      tags: ['série de cas', 'causalité'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-06',
      recto: 'Différencier surveillance passive et surveillance active.',
      verso: "La surveillance passive repose sur la déclaration spontanée des cas ; la surveillance active consiste à rechercher activement les cas.",
      type: 'classification',
      tags: ['surveillance'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-07',
      recto: "Qu’est-ce qu’un réseau sentinelle ?",
      verso: "Un échantillon de professionnels ou de structures volontaires, suivis en continu pour estimer la tendance d’un phénomène dans la population générale.",
      type: 'definition',
      tags: ['surveillance'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-08',
      recto: "Citer une méthode d’échantillonnage probabiliste où la population est divisée en groupes homogènes avant tirage au sort.",
      verso: "L’échantillonnage stratifié.",
      type: 'classification',
      tags: ['échantillonnage'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-09',
      recto: "Qu’est-ce qu’un échantillon de convenance ?",
      verso: "Un échantillon constitué de sujets facilement accessibles, sans tirage au sort, exposant à un biais de sélection.",
      type: 'definition',
      tags: ['échantillonnage', 'biais'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-10',
      recto: "Que permet une courbe épidémique dans une toxi-infection alimentaire collective ?",
      verso: "De distinguer une source commune ponctuelle (pic unique) d’une transmission de personne à personne (succession de vagues).",
      type: 'clinique',
      tags: ['temps-lieu-personne'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-11',
      recto: "Citer les trois axes classiques de description d’un phénomène de santé.",
      verso: 'Le temps, le lieu et la personne.',
      type: 'classification',
      tags: ['temps-lieu-personne'],
    },
    {
      id: 'sante-publique-etudes-descriptives-fc-12',
      recto: "Qu’est-ce que la validité externe d’une étude ?",
      verso: "La possibilité d’extrapoler les résultats obtenus dans l’échantillon à la population source, ce qui suppose sa représentativité.",
      type: 'definition',
      tags: ['échantillonnage', 'validité'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-etudes-descriptives-qcm-01',
      enonce: "Concernant l’épidémiologie descriptive, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: 'Elle permet de démontrer une relation de causalité.', vraie: false, justification: "Faux : seule l’épidémiologie analytique permet de tester une hypothèse d’association." },
        { lettre: 'B', texte: "Elle décrit la fréquence d’un phénomène de santé dans une population.", vraie: true, justification: "Exact, c’est l’un de ses objectifs principaux." },
        { lettre: 'C', texte: "Elle permet de générer des hypothèses étiologiques.", vraie: true, justification: "Exact, ces hypothèses seront ensuite testées par des études analytiques." },
        { lettre: 'D', texte: 'Elle répond principalement à la question « pourquoi ? ».', vraie: false, justification: "Faux : elle répond aux questions « combien, où, quand, qui ? »." },
        { lettre: 'E', texte: 'Elle est utile à la planification des politiques de santé.', vraie: true, justification: "Exact, la description des besoins oriente la planification sanitaire." },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 1,
    },
    {
      id: 'sante-publique-etudes-descriptives-qcm-02',
      enonce: "Concernant l’enquête transversale, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Elle mesure l’exposition et l’état de santé à des moments différents.", vraie: false, justification: "Faux : elle les mesure simultanément, à un instant donné." },
        { lettre: 'B', texte: 'Elle fournit une mesure de prévalence.', vraie: true, justification: "Exact, c’est son résultat principal." },
        { lettre: 'C', texte: "Elle permet d’établir sans ambiguïté la chronologie entre exposition et maladie.", vraie: false, justification: "Faux : c’est justement l’une de ses limites majeures." },
        { lettre: 'D', texte: 'Elle est exposée au biais de Neyman.', vraie: true, justification: "Exact, les formes graves à évolution rapide peuvent y être sous-représentées." },
        { lettre: 'E', texte: 'Elle est en général plus rapide et moins coûteuse qu’une étude de cohorte.', vraie: true, justification: 'Exact, elle ne nécessite pas de suivi longitudinal.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-etudes-descriptives-qcm-03',
      enonce: 'Concernant les séries de cas, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elles comportent un groupe témoin.', vraie: false, justification: "Faux : c’est précisément leur absence de groupe de comparaison qui les caractérise." },
        { lettre: 'B', texte: "Elles peuvent être à l’origine de l’identification d’une nouvelle maladie.", vraie: true, justification: "Exact, comme dans l’exemple historique de l’identification du sida." },
        { lettre: 'C', texte: 'Elles permettent de calculer un risque relatif.', vraie: false, justification: "Faux : le calcul d’un risque relatif nécessite un groupe non exposé de comparaison." },
        { lettre: 'D', texte: "Elles sont particulièrement utiles pour décrire une maladie rare.", vraie: true, justification: "Exact, elles permettent une description clinique fine de cas peu fréquents." },
        { lettre: 'E', texte: "Elles suffisent à elles seules à démontrer une relation causale.", vraie: false, justification: "Faux : elles ne font que générer des hypothèses, à tester ensuite." },
      ],
      correction: 'Réponses exactes : B et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-etudes-descriptives-qcm-04',
      enonce: 'Concernant la surveillance épidémiologique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle repose sur un recueil continu et systématique de données.', vraie: true, justification: "Exact, c’est sa caractéristique fondamentale." },
        { lettre: 'B', texte: 'La surveillance passive repose sur la recherche active des cas par les autorités sanitaires.', vraie: false, justification: "Faux : c’est la surveillance active qui repose sur une recherche systématique ; la passive repose sur la déclaration spontanée." },
        { lettre: 'C', texte: "Un réseau sentinelle repose sur des professionnels volontaires suivis en continu.", vraie: true, justification: "Exact, c’est le principe des réseaux sentinelles." },
        { lettre: 'D', texte: "La surveillance permet de détecter précocement une épidémie.", vraie: true, justification: "Exact, c’est l’un de ses objectifs majeurs, dit d’alerte sanitaire." },
        { lettre: 'E', texte: 'Elle exclut par principe les maladies à déclaration obligatoire.', vraie: false, justification: "Faux : les maladies à déclaration obligatoire constituent au contraire un pilier de la surveillance passive." },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-etudes-descriptives-qcm-05',
      enonce: "Concernant les méthodes d’échantillonnage, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Dans un tirage au sort simple, chaque individu a la même probabilité connue d’être sélectionné.", vraie: true, justification: 'Exact, c’est la définition du tirage au sort aléatoire simple.' },
        { lettre: 'B', texte: "L’échantillonnage en grappes sélectionne des unités groupées, puis inclut tous les individus qui les composent.", vraie: true, justification: "Exact, par exemple le tirage au sort de cabinets médicaux entiers." },
        { lettre: 'C', texte: 'Un échantillon de convenance garantit une représentativité optimale.', vraie: false, justification: "Faux : il expose au contraire à un biais de sélection important, faute de tirage au sort." },
        { lettre: 'D', texte: "L’échantillonnage stratifié divise la population en groupes homogènes avant tirage au sort.", vraie: true, justification: 'Exact, les strates sont définies selon des caractéristiques comme l’âge ou le sexe.' },
        { lettre: 'E', texte: "La représentativité de l’échantillon n’influence pas la validité externe des résultats.", vraie: false, justification: "Faux : elle en est au contraire la condition principale." },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-etudes-descriptives-qcm-06',
      enonce: 'Concernant la description temps-lieu-personne, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "L’axe « temps » peut inclure des variations saisonnières.", vraie: true, justification: "Exact, comme les épidémies hivernales de grippe par exemple." },
        { lettre: 'B', texte: "L’axe « lieu » ne concerne que les comparaisons internationales.", vraie: false, justification: "Faux : il inclut aussi les comparaisons régionales, urbain/rural, etc." },
        { lettre: 'C', texte: "L’axe « personne » peut inclure l’âge, le sexe et la catégorie socio-professionnelle.", vraie: true, justification: "Exact, ce sont des caractéristiques individuelles classiques de cet axe." },
        { lettre: 'D', texte: "Une courbe épidémique à pic unique évoque plutôt une transmission de personne à personne.", vraie: false, justification: "Faux : un pic unique évoque plutôt une source commune ponctuelle ; la transmission interhumaine donne plutôt une succession de vagues." },
        { lettre: 'E', texte: "La triade temps-lieu-personne aide à formuler des hypothèses étiologiques.", vraie: true, justification: "Exact, c’est l’un des principaux intérêts de cette description." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
