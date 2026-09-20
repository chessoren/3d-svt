import type { Fiche } from '../../types';

export const ficheLoisDiscretes: Fiche = {
  id: 'ue4-lois-discretes',
  ue: 'ue4',
  titre: 'Lois discrètes usuelles',
  sousTitre: 'Loi de Bernoulli, loi binomiale, loi de Poisson, conditions d’emploi et approximations',
  chapitre: 'Descriptive et probabilités',
  ordre: 4,
  duree: 24,
  difficulte: 2,
  motsCles: ['loi de Bernoulli', 'loi binomiale', 'loi de Poisson', 'épreuve de Bernoulli', 'approximation'],
  objectifs: [
    'Reconnaître une épreuve de Bernoulli et énoncer les paramètres de la loi de Bernoulli.',
    'Reconnaître les conditions d’application de la loi binomiale et calculer une probabilité binomiale.',
    'Reconnaître les conditions d’application de la loi de Poisson et l’utiliser pour des événements rares.',
    'Calculer l’espérance et la variance de ces trois lois.',
    'Connaître les conditions usuelles d’approximation entre ces lois.',
  ],
  sections: [
    {
      id: 'loi-bernoulli',
      titre: 'La loi de Bernoulli',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une épreuve de Bernoulli est une expérience aléatoire à deux issues possibles, généralement qualifiées de « succès » et « échec ». La loi de Bernoulli décrit la variable aléatoire associée à une seule répétition de cette épreuve.',
        },
        {
          type: 'definition',
          terme: 'Loi de Bernoulli B(p)',
          definition:
            'Loi d’une variable aléatoire X ne prenant que les valeurs 0 (échec) et 1 (succès), avec P(X = 1) = p et P(X = 0) = 1 - p, où p est la probabilité de succès de l’épreuve.',
        },
        {
          type: 'formule',
          expression: 'E(X) = p ; V(X) = p x (1 - p)',
          legende: 'Espérance et variance d’une variable de Bernoulli de paramètre p.',
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Un succès binaire codé 0/1',
          texte:
            'Le codage 0/1 d’une variable de Bernoulli permet un calcul immédiat de l’espérance, qui n’est autre que la proportion de succès p. C’est ce mécanisme qui relie directement la loi de Bernoulli à la notion de proportion observée sur un échantillon.',
        },
      ],
    },
    {
      id: 'loi-binomiale',
      titre: 'La loi binomiale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La loi binomiale décrit le nombre total de succès obtenus en répétant n fois, de façon indépendante, la même épreuve de Bernoulli de paramètre p.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Conditions d’application de la loi binomiale',
          texte:
            'Trois conditions doivent être réunies : un nombre fixe n d’épreuves ; des épreuves indépendantes les unes des autres ; une probabilité de succès p constante d’une épreuve à l’autre. Ces conditions sont souvent résumées par l’acronyme des épreuves répétées, indépendantes et identiques.',
        },
        {
          type: 'formule',
          expression: 'P(X = k) = C(n,k) x p^k x (1 - p)^(n - k)',
          legende: 'Loi binomiale B(n,p) : probabilité d’obtenir exactement k succès sur n épreuves indépendantes de probabilité de succès p, pour k allant de 0 à n.',
        },
        {
          type: 'formule',
          expression: 'E(X) = n x p ; V(X) = n x p x (1 - p)',
          legende: 'Espérance et variance d’une loi binomiale B(n,p).',
        },
        {
          type: 'tableau',
          titre: 'Exemple : dépistage sur 5 sujets, prévalence 20 %',
          colonnes: ['Nombre de succès k', 'C(5,k)', 'P(X = k)'],
          lignes: [
            ['0', '1', '0,3277'],
            ['1', '5', '0,4096'],
            ['2', '10', '0,2048'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Vérifier l’indépendance des épreuves',
          texte:
            'Un piège classique consiste à appliquer la loi binomiale à un tirage sans remise dans une population de petite taille : les épreuves ne sont alors plus indépendantes, la probabilité de succès change à chaque tirage. Dans ce cas, c’est la loi hypergéométrique qui s’applique, sauf lorsque la population est suffisamment grande devant l’échantillon pour que l’effet du tirage sans remise soit négligeable.',
        },
      ],
    },
    {
      id: 'loi-poisson',
      titre: 'La loi de Poisson',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La loi de Poisson modélise le nombre d’événements rares survenant de façon indépendante dans un intervalle de temps, d’espace ou de matière donné, à taux moyen constant.',
        },
        {
          type: 'definition',
          terme: 'Conditions d’application de la loi de Poisson',
          definition:
            'Des événements rares, indépendants les uns des autres, survenant à un taux moyen constant λ dans l’unité considérée, sans limite supérieure théorique au nombre d’événements observables.',
        },
        {
          type: 'formule',
          expression: 'P(X = k) = e^(-λ) x λ^k / k!',
          legende: 'Loi de Poisson de paramètre λ (lambda) : probabilité d’observer exactement k événements, pour k entier naturel, e étant la base du logarithme népérien.',
        },
        {
          type: 'formule',
          expression: 'E(X) = λ ; V(X) = λ',
          legende: 'Particularité remarquable de la loi de Poisson : l’espérance et la variance sont égales, toutes deux égales au paramètre λ.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Exemple d’application',
          texte:
            'Le nombre annuel de cas d’une maladie rare dans une région, ou le nombre de mutations spontanées observées dans un génome sur une génération, sont des situations classiquement modélisées par une loi de Poisson, le taux moyen λ étant estimé à partir de données de surveillance.',
        },
      ],
    },
    {
      id: 'approximations',
      titre: 'Approximations entre lois discrètes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le calcul exact d’une probabilité binomiale devient rapidement lourd lorsque n est grand. Sous certaines conditions, la loi binomiale peut être approchée par une loi plus simple à manier.',
        },
        {
          type: 'etapes',
          titre: 'Choisir la bonne approximation d’une loi binomiale B(n,p)',
          etapes: [
            {
              titre: 'Vérifier n et p',
              detail: 'Repérer si n est grand (usuellement n ≥ 30) et si p est petit (usuellement p ≤ 0,1), avec un produit np modéré.',
            },
            {
              titre: 'Approximation par la loi de Poisson',
              detail: 'Si n est grand et p petit, approcher B(n,p) par une loi de Poisson de paramètre λ = n x p.',
            },
            {
              titre: 'Approximation par la loi normale',
              detail: 'Si n est grand et p ni trop petit ni trop grand (conditions np ≥ 5 et n(1 - p) ≥ 5 usuellement retenues), approcher B(n,p) par une loi normale de moyenne np et de variance np(1 - p).',
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Récapitulatif des approximations',
          colonnes: ['Loi de départ', 'Conditions usuelles', 'Loi d’approximation', 'Paramètres'],
          lignes: [
            ['Binomiale B(n,p)', 'n grand, p petit, np modéré', 'Poisson', 'λ = n x p'],
            ['Binomiale B(n,p)', 'n grand, np ≥ 5 et n(1 - p) ≥ 5', 'Normale', 'moyenne = np, variance = np(1 - p)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une approximation reste une approximation',
          texte:
            'Ces approximations facilitent le calcul mais ne remplacent pas un calcul exact lorsque celui-ci est possible : elles perdent en précision lorsque les conditions numériques ne sont que partiellement remplies. Dans un exercice, il faut systématiquement vérifier les conditions numériques avant de choisir une approximation.',
        },
      ],
    },
  ],
  pointsCles: [
    'La loi de Bernoulli décrit une seule épreuve à deux issues ; E(X) = p et V(X) = p(1 - p).',
    'La loi binomiale B(n,p) décrit le nombre de succès sur n épreuves indépendantes et identiques de probabilité p.',
    'P(X = k) = C(n,k) x p^k x (1 - p)^(n-k), avec E(X) = np et V(X) = np(1 - p).',
    'La loi de Poisson décrit des événements rares et indépendants survenant à taux moyen constant λ ; sa particularité est E(X) = V(X) = λ.',
    'P(X = k) = e^(-λ) x λ^k / k! pour la loi de Poisson.',
    'La loi binomiale s’approche par une loi de Poisson quand n est grand et p petit (λ = np), et par une loi normale quand np ≥ 5 et n(1 - p) ≥ 5.',
    'Un tirage sans remise dans une petite population rompt l’indépendance requise par la loi binomiale.',
  ],
  erreursFrequentes: [
    'Appliquer la loi binomiale à un tirage sans remise dans une population de petite taille, où l’indépendance des épreuves n’est pas respectée.',
    'Oublier que la loi de Poisson est la seule loi usuelle où l’espérance et la variance sont strictement égales.',
    'Confondre le paramètre λ de la loi de Poisson avec le paramètre p de la loi binomiale : λ n’est pas une probabilité et peut dépasser 1.',
    'Utiliser l’approximation de Poisson quand p n’est pas petit, ce qui rend l’approximation peu fiable.',
    'Oublier de vérifier les deux conditions np ≥ 5 et n(1 - p) ≥ 5 avant d’approcher une binomiale par une loi normale.',
    'Confondre le nombre de combinaisons C(n,k) avec un simple produit, et se tromper dans le calcul exact de P(X = k).',
  ],
  mnemotechniques: [
    {
      moyen: 'Bernoulli, une seule fois ; binomiale, n fois',
      explication: 'La loi de Bernoulli correspond à une unique épreuve ; répéter n fois cette épreuve, de façon indépendante et identique, donne la loi binomiale.',
    },
    {
      moyen: 'Poisson : rare, égal, égal',
      explication: 'La loi de Poisson modélise des événements rares (Poisson), et sa signature est l’égalité entre l’espérance et la variance, toutes deux égales à λ.',
    },
    {
      moyen: '« Grand n, petit p » donne Poisson',
      explication: 'Quand n est grand et p petit avec np modéré, la binomiale se rapproche d’une loi de Poisson de paramètre λ = np.',
    },
  ],
  sources: [
    'Saporta G., Probabilités, analyse des données et statistique, Technip',
    'Schwartz D., Méthodes statistiques à l’usage des médecins et des biologistes, Flammarion Médecine-Sciences',
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-lois-discretes-fc-01',
      recto: 'Que décrit une épreuve de Bernoulli ?',
      verso: 'Une expérience aléatoire à deux issues possibles : succès (probabilité p) ou échec (probabilité 1 - p).',
      type: 'definition',
      tags: ['Bernoulli'],
    },
    {
      id: 'ue4-lois-discretes-fc-02',
      recto: 'Donner E(X) et V(X) pour une loi de Bernoulli de paramètre p.',
      verso: 'E(X) = p ; V(X) = p x (1 - p).',
      type: 'formule',
      tags: ['Bernoulli'],
    },
    {
      id: 'ue4-lois-discretes-fc-03',
      recto: 'Citer les trois conditions d’application de la loi binomiale.',
      verso: 'Un nombre fixe n d’épreuves, indépendantes les unes des autres, avec une probabilité de succès p constante.',
      type: 'classification',
      tags: ['binomiale', 'conditions'],
    },
    {
      id: 'ue4-lois-discretes-fc-04',
      recto: 'Donner la formule de la loi binomiale B(n,p).',
      verso: 'P(X = k) = C(n,k) x p^k x (1 - p)^(n - k).',
      type: 'formule',
      tags: ['binomiale'],
    },
    {
      id: 'ue4-lois-discretes-fc-05',
      recto: 'Donner E(X) et V(X) pour une loi binomiale B(n,p).',
      verso: 'E(X) = n x p ; V(X) = n x p x (1 - p).',
      type: 'formule',
      tags: ['binomiale'],
    },
    {
      id: 'ue4-lois-discretes-fc-06',
      recto: 'Quelles situations modélise typiquement une loi de Poisson ?',
      verso: 'Des événements rares, indépendants, survenant à un taux moyen constant λ (exemple : nombre annuel de cas d’une maladie rare).',
      type: 'clinique',
      tags: ['Poisson'],
    },
    {
      id: 'ue4-lois-discretes-fc-07',
      recto: 'Donner la formule de la loi de Poisson.',
      verso: 'P(X = k) = e^(-λ) x λ^k / k!.',
      type: 'formule',
      tags: ['Poisson'],
    },
    {
      id: 'ue4-lois-discretes-fc-08',
      recto: 'Quelle est la particularité de la loi de Poisson concernant E(X) et V(X) ?',
      verso: 'E(X) = V(X) = λ : c’est la seule loi usuelle où l’espérance et la variance sont égales.',
      type: 'chiffre',
      tags: ['Poisson'],
    },
    {
      id: 'ue4-lois-discretes-fc-09',
      recto: 'Sous quelles conditions approche-t-on une loi binomiale par une loi de Poisson ?',
      verso: 'Quand n est grand et p petit, avec λ = n x p comme paramètre de la loi de Poisson approchante.',
      type: 'mecanisme',
      tags: ['approximation'],
    },
    {
      id: 'ue4-lois-discretes-fc-10',
      recto: 'Sous quelles conditions approche-t-on une loi binomiale par une loi normale ?',
      verso: 'Quand np ≥ 5 et n(1 - p) ≥ 5 ; la loi normale approchante a pour moyenne np et pour variance np(1 - p).',
      type: 'mecanisme',
      tags: ['approximation'],
    },
    {
      id: 'ue4-lois-discretes-fc-11',
      recto: 'Pourquoi un tirage sans remise dans une petite population ne suit-il pas une loi binomiale exacte ?',
      verso: 'Parce que la probabilité de succès change à chaque tirage : l’indépendance des épreuves n’est plus respectée.',
      type: 'mecanisme',
      tags: ['binomiale', 'pièges'],
    },
    {
      id: 'ue4-lois-discretes-fc-12',
      recto: 'Le paramètre λ de la loi de Poisson est-il une probabilité ?',
      verso: 'Non, λ est un taux moyen d’événements : il peut être supérieur à 1, contrairement à une probabilité.',
      type: 'definition',
      tags: ['Poisson'],
    },
  ],
  qcm: [
    {
      id: 'ue4-lois-discretes-qcm-01',
      enonce: 'Concernant la loi de Bernoulli, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle décrit le résultat d’une seule épreuve à deux issues.',
          vraie: true,
          justification: 'C’est la définition même d’une variable de Bernoulli.',
        },
        {
          lettre: 'B',
          texte: 'Sa variance est toujours égale à p.',
          vraie: false,
          justification: 'Sa variance vaut p x (1 - p), et non p seul.',
        },
        {
          lettre: 'C',
          texte: 'La variance d’une loi de Bernoulli est maximale pour p = 0,5.',
          vraie: true,
          justification: 'La fonction p(1 - p) est maximale en p = 0,5, où elle vaut 0,25.',
        },
        {
          lettre: 'D',
          texte: 'Son espérance est égale à la probabilité de succès p.',
          vraie: true,
          justification: 'Avec le codage 0/1, E(X) = 1 x p + 0 x (1 - p) = p.',
        },
        {
          lettre: 'E',
          texte: 'Elle peut prendre trois valeurs distinctes.',
          vraie: false,
          justification: 'Une variable de Bernoulli ne prend que deux valeurs, 0 et 1.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir que la variance est maximale à p = 0,5, un point souvent testé.',
      difficulte: 1,
    },
    {
      id: 'ue4-lois-discretes-qcm-02',
      enonce: 'Concernant les conditions d’application de la loi binomiale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le nombre d’épreuves n doit être fixé à l’avance.',
          vraie: true,
          justification: 'C’est l’une des trois conditions essentielles de la loi binomiale.',
        },
        {
          lettre: 'B',
          texte: 'La probabilité de succès peut varier d’une épreuve à l’autre.',
          vraie: false,
          justification: 'La probabilité de succès p doit au contraire rester constante à chaque épreuve.',
        },
        {
          lettre: 'C',
          texte: 'Les épreuves doivent être indépendantes les unes des autres.',
          vraie: true,
          justification: 'C’est une condition indispensable au calcul de P(X = k) par la formule binomiale.',
        },
        {
          lettre: 'D',
          texte: 'Un tirage avec remise dans une population respecte ces conditions.',
          vraie: true,
          justification: 'Avec remise, la composition de la population reste inchangée, donc p reste constant et les tirages sont indépendants.',
        },
        {
          lettre: 'E',
          texte: 'Un tirage sans remise dans une population de très grande taille par rapport à l’échantillon peut être assimilé, en pratique, à un tirage avec remise.',
          vraie: true,
          justification: 'Lorsque la population est très grande devant l’échantillon, retirer quelques individus modifie très peu la proportion p, ce qui justifie l’approximation binomiale.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. La constance de p et l’indépendance des épreuves sont les deux conditions les plus souvent testées.',
      difficulte: 2,
    },
    {
      id: 'ue4-lois-discretes-qcm-03',
      enonce: 'On étudie une loi binomiale B(n = 10, p = 0,3). Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'E(X) = 3.',
          vraie: true,
          justification: 'E(X) = n x p = 10 x 0,3 = 3.',
        },
        {
          lettre: 'B',
          texte: 'V(X) = 2,1.',
          vraie: true,
          justification: 'V(X) = n x p x (1 - p) = 10 x 0,3 x 0,7 = 2,1.',
        },
        {
          lettre: 'C',
          texte: 'P(X = 0) = C(10,0) x 0,3^0 x 0,7^10.',
          vraie: true,
          justification: 'C’est l’application directe de la formule de la loi binomiale pour k = 0.',
        },
        {
          lettre: 'D',
          texte: 'X peut prendre des valeurs négatives.',
          vraie: false,
          justification: 'X compte un nombre de succès, nécessairement entier et compris entre 0 et n = 10.',
        },
        {
          lettre: 'E',
          texte: 'La somme des P(X = k) pour k allant de 0 à 10 vaut 1.',
          vraie: true,
          justification: 'C’est la condition de normalisation de toute loi de probabilité discrète, ici sur les valeurs possibles 0 à n.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Vérifier systématiquement E(X) = np et V(X) = np(1-p) sur un exemple numérique.',
      difficulte: 2,
    },
    {
      id: 'ue4-lois-discretes-qcm-04',
      enonce: 'Concernant la loi de Poisson, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est adaptée à la modélisation d’événements rares et indépendants.',
          vraie: true,
          justification: 'C’est le domaine d’application classique de cette loi.',
        },
        {
          lettre: 'B',
          texte: 'Son espérance et sa variance sont toutes deux égales à λ.',
          vraie: true,
          justification: 'C’est une propriété caractéristique de la loi de Poisson.',
        },
        {
          lettre: 'C',
          texte: 'Le paramètre λ doit être compris entre 0 et 1.',
          vraie: false,
          justification: 'λ est un nombre moyen d’événements, il peut être supérieur à 1 ; ce n’est pas une probabilité.',
        },
        {
          lettre: 'D',
          texte: 'La variable X suivant une loi de Poisson peut prendre n’importe quelle valeur entière positive ou nulle, sans borne supérieure fixe.',
          vraie: true,
          justification: 'Contrairement à la loi binomiale bornée par n, la loi de Poisson n’a pas de borne supérieure théorique.',
        },
        {
          lettre: 'E',
          texte: 'P(X = 0) = e^(-λ).',
          vraie: true,
          justification: 'En appliquant la formule avec k = 0 : P(X=0) = e^(-λ) x λ^0 / 0! = e^(-λ), car λ^0 = 1 et 0! = 1.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. La formule pour k=0 est un grand classique de calcul en QCM.',
      difficulte: 2,
    },
    {
      id: 'ue4-lois-discretes-qcm-05',
      enonce: 'Concernant les approximations de la loi binomiale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une binomiale à n grand et p petit peut être approchée par une loi de Poisson de paramètre λ = np.',
          vraie: true,
          justification: 'C’est la condition classique d’approximation de la binomiale par la loi de Poisson.',
        },
        {
          lettre: 'B',
          texte: 'L’approximation normale d’une binomiale nécessite np ≥ 5 et n(1 - p) ≥ 5.',
          vraie: true,
          justification: 'Ce sont les conditions usuellement retenues pour que la loi normale approche correctement la binomiale.',
        },
        {
          lettre: 'C',
          texte: 'Ces approximations donnent des résultats parfaitement exacts, identiques au calcul binomial direct.',
          vraie: false,
          justification: 'Ce sont des approximations : elles simplifient le calcul mais introduisent un écart, d’autant plus faible que les conditions numériques sont bien remplies.',
        },
        {
          lettre: 'D',
          texte: 'Une même loi binomiale peut, selon ses paramètres, être approchée soit par une loi de Poisson, soit par une loi normale.',
          vraie: true,
          justification: 'Le choix dépend des valeurs de n et p : n grand et p petit oriente vers Poisson, n grand et p modéré oriente vers la loi normale.',
        },
        {
          lettre: 'E',
          texte: 'L’approximation par la loi de Poisson est justifiée quand p est proche de 0,5.',
          vraie: false,
          justification: 'Elle est justifiée au contraire quand p est petit (événement rare) ; pour p proche de 0,5, c’est l’approximation normale qui convient si n est suffisamment grand.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Toujours vérifier les conditions numériques avant de choisir une approximation.',
      difficulte: 3,
    },
    {
      id: 'ue4-lois-discretes-qcm-06',
      enonce: 'Concernant le choix entre loi de Bernoulli, loi binomiale et loi de Poisson pour modéliser une situation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le résultat d’un seul test diagnostique (positif ou négatif) suit une loi de Bernoulli.',
          vraie: true,
          justification: 'Deux issues possibles pour une seule épreuve : c’est exactement le cadre de la loi de Bernoulli.',
        },
        {
          lettre: 'B',
          texte: 'Le nombre de tests positifs parmi 50 tests indépendants de même probabilité de positivité suit une loi binomiale.',
          vraie: true,
          justification: 'Les trois conditions de la loi binomiale sont réunies : n fixe, épreuves indépendantes, probabilité constante.',
        },
        {
          lettre: 'C',
          texte: 'Le nombre de cas d’une maladie très rare observés chaque année dans un pays est plus naturellement modélisé par une loi de Poisson que par une loi binomiale.',
          vraie: true,
          justification: 'Il s’agit d’événements rares dont le nombre total d’essais sous-jacent n’est pas clairement défini : la loi de Poisson, paramétrée par un taux moyen, est l’outil adapté.',
        },
        {
          lettre: 'D',
          texte: 'La loi binomiale et la loi de Poisson sont rigoureusement identiques dans tous les cas.',
          vraie: false,
          justification: 'Ce sont deux lois distinctes ; la loi de Poisson n’est qu’une approximation de la binomiale sous certaines conditions particulières.',
        },
        {
          lettre: 'E',
          texte: 'Une variable suivant une loi de Bernoulli ne peut pas être la somme d’autres variables de Bernoulli.',
          vraie: true,
          justification: 'Par construction, une variable de Bernoulli ne prend que les valeurs 0 ou 1 ; une somme de plusieurs variables de Bernoulli indépendantes suit en revanche une loi binomiale, pas une loi de Bernoulli.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Savoir reconnaître la loi adaptée à un énoncé est une compétence clé de l’UE4.',
      difficulte: 2,
    },
  ],
};
