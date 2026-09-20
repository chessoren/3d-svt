import type { Fiche } from '../../types';

export const ficheProbabilites: Fiche = {
  id: 'ue4-probabilites',
  ue: 'ue4',
  titre: 'Probabilités',
  sousTitre: 'Vocabulaire, axiomes, probabilités conditionnelles, indépendance, théorème des probabilités totales et formule de Bayes',
  chapitre: 'Descriptive et probabilités',
  ordre: 2,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'univers',
    'événement',
    'probabilité conditionnelle',
    'indépendance',
    'probabilités totales',
    'formule de Bayes',
    'dénombrement',
  ],
  objectifs: [
    'Utiliser le vocabulaire des probabilités (univers, événement, événements incompatibles) et les axiomes de base.',
    'Calculer une probabilité conditionnelle et distinguer indépendance et incompatibilité.',
    'Appliquer le théorème des probabilités totales pour calculer la probabilité d’un événement.',
    'Appliquer la formule de Bayes pour inverser une probabilité conditionnelle.',
    'Utiliser les outils de dénombrement (arrangements, combinaisons) dans un calcul de probabilité.',
  ],
  sections: [
    {
      id: 'vocabulaire-axiomes',
      titre: 'Vocabulaire et axiomes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La théorie des probabilités formalise le hasard associé à une expérience aléatoire. L’univers, noté Ω, est l’ensemble de tous les résultats possibles de cette expérience ; un événement est un sous-ensemble de cet univers.',
        },
        {
          type: 'liste',
          items: [
            'Événement certain : Ω lui-même, de probabilité 1.',
            'Événement impossible : l’ensemble vide, de probabilité 0.',
            'Événement contraire de A, noté A barre (ou non-A) : réalisé si et seulement si A ne l’est pas.',
            'Deux événements A et B sont incompatibles (ou disjoints) s’ils ne peuvent pas être réalisés simultanément : A ∩ B = ensemble vide.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Axiomes des probabilités',
          texte:
            'Une probabilité est une fonction qui associe à chaque événement A un nombre P(A) compris entre 0 et 1, telle que P(Ω) = 1, et telle que pour deux événements incompatibles A et B, P(A ∪ B) = P(A) + P(B). Ces axiomes fondent toutes les propriétés usuelles des probabilités.',
        },
        {
          type: 'formule',
          expression: 'P(non-A) = 1 - P(A)',
          legende: 'Probabilité de l’événement contraire : conséquence directe des axiomes, car A et non-A sont incompatibles et leur réunion est l’univers.',
        },
        {
          type: 'formule',
          expression: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
          legende: 'Formule générale d’addition (formule de Poincaré pour deux événements), valable même si A et B ne sont pas incompatibles ; elle évite de compter deux fois l’intersection.',
        },
      ],
    },
    {
      id: 'probabilites-conditionnelles',
      titre: 'Probabilités conditionnelles et indépendance',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La probabilité conditionnelle traduit la mise à jour de la probabilité d’un événement lorsqu’une information sur la réalisation d’un autre événement est connue.',
        },
        {
          type: 'definition',
          terme: 'Probabilité conditionnelle',
          definition:
            'P(A|B), lue « probabilité de A sachant B », est la probabilité que A se réalise sachant que B est déjà réalisé. Elle n’est définie que si P(B) est strictement positif.',
        },
        {
          type: 'formule',
          expression: 'P(A|B) = P(A ∩ B) / P(B)',
          legende: 'Définition de la probabilité conditionnelle, avec P(B) strictement positif.',
        },
        {
          type: 'formule',
          expression: 'P(A ∩ B) = P(A|B) x P(B) = P(B|A) x P(A)',
          legende: 'Formule des probabilités composées, obtenue en réarrangeant la définition de la probabilité conditionnelle.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Indépendance n’est pas incompatibilité',
          texte:
            'Deux événements indépendants et deux événements incompatibles sont des notions totalement différentes, souvent confondues. A et B sont indépendants si la réalisation de l’un ne modifie pas la probabilité de l’autre : P(A|B) = P(A), ce qui équivaut à P(A ∩ B) = P(A) x P(B). Si A et B sont incompatibles et tous deux de probabilité non nulle, ils ne peuvent pas être indépendants : savoir que B est réalisé exclut alors totalement A.',
        },
        {
          type: 'tableau',
          titre: 'Indépendance versus incompatibilité',
          colonnes: ['Notion', 'Condition', 'Conséquence sur P(A ∩ B)'],
          lignes: [
            ['Événements incompatibles', 'A et B ne peuvent jamais survenir ensemble', 'P(A ∩ B) = 0'],
            ['Événements indépendants', 'La réalisation de B ne change pas la probabilité de A', 'P(A ∩ B) = P(A) x P(B)'],
          ],
        },
      ],
    },
    {
      id: 'probabilites-totales-bayes',
      titre: 'Théorème des probabilités totales et formule de Bayes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Lorsque l’univers est partitionné en plusieurs événements A1, A2, …, An (partition exhaustive et deux à deux incompatibles), il est possible d’exprimer la probabilité d’un événement B quelconque en fonction des probabilités conditionnelles à chacun de ces sous-ensembles.',
        },
        {
          type: 'formule',
          expression: 'P(B) = Σ [ P(B|Ai) x P(Ai) ]',
          legende: 'Théorème des probabilités totales : la somme porte sur tous les événements Ai de la partition de l’univers (Ai deux à deux incompatibles, de réunion égale à Ω).',
        },
        {
          type: 'etapes',
          titre: 'Méthode d’application du théorème des probabilités totales',
          etapes: [
            {
              titre: 'Identifier la partition',
              detail: 'Repérer les événements A1, …, An qui partitionnent l’univers (par exemple les différentes classes d’âge, ou malade / non malade).',
            },
            {
              titre: 'Recenser les probabilités connues',
              detail: 'Lister P(Ai) pour chaque sous-ensemble et P(B|Ai), la probabilité de l’événement d’intérêt dans chaque sous-ensemble.',
            },
            {
              titre: 'Sommer les produits',
              detail: 'Calculer P(B) en sommant, pour chaque i, le produit P(B|Ai) x P(Ai).',
            },
          ],
        },
        {
          type: 'formule',
          expression: 'P(Ai|B) = [ P(B|Ai) x P(Ai) ] / Σ [ P(B|Aj) x P(Aj) ]',
          legende:
            'Formule de Bayes : elle permet d’inverser le sens du conditionnement, c’est-à-dire de calculer P(Ai|B) à partir des P(B|Aj) et des P(Aj). Le dénominateur est la probabilité totale de B calculée par le théorème précédent.',
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Application médicale de la formule de Bayes',
          texte:
            'La formule de Bayes est le fondement du calcul de la valeur prédictive positive d’un test diagnostique : connaissant la sensibilité (P(test+|malade)), la spécificité et la prévalence de la maladie (P(malade)), elle permet de calculer P(malade|test+), c’est-à-dire la probabilité d’être réellement malade lorsque le test est positif.',
        },
      ],
    },
    {
      id: 'denombrement',
      titre: 'Éléments de dénombrement',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'De nombreux calculs de probabilités, en particulier dans un modèle équiprobable, reposent sur le dénombrement du nombre de cas favorables et du nombre de cas possibles.',
        },
        {
          type: 'formule',
          expression: 'P(A) = nombre de cas favorables à A / nombre de cas possibles',
          legende: 'Formule de Laplace, valable uniquement dans un univers fini où tous les résultats élémentaires sont équiprobables.',
        },
        {
          type: 'tableau',
          titre: 'Principaux outils de dénombrement',
          colonnes: ['Situation', 'Formule', 'Exemple'],
          lignes: [
            ['Permutations de n objets distincts', 'n!', 'Nombre de classements possibles de 5 patients'],
            ['Arrangements de p objets parmi n (ordre compte, sans répétition)', 'A(n,p) = n! / (n - p)!', 'Tiercé dans l’ordre parmi n chevaux'],
            ['Combinaisons de p objets parmi n (ordre ne compte pas)', 'C(n,p) = n! / [p! x (n - p)!]', 'Choix de p patients parmi n pour un groupe d’étude'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Ordre ou pas ordre ?',
          texte:
            'La première question à se poser face à un problème de dénombrement est de savoir si l’ordre des éléments choisis importe. S’il importe (tiercé, classement), on utilise un arrangement ; s’il n’importe pas (tirage simultané, constitution d’un groupe), on utilise une combinaison.',
        },
      ],
    },
  ],
  pointsCles: [
    'Une probabilité est un nombre entre 0 et 1 ; P(Ω) = 1 et P(A ∪ B) = P(A) + P(B) pour deux événements incompatibles.',
    'P(A ∪ B) = P(A) + P(B) - P(A ∩ B) est la formule générale, valable même si A et B ne sont pas incompatibles.',
    'La probabilité conditionnelle P(A|B) = P(A ∩ B) / P(B) n’est définie que si P(B) > 0.',
    'A et B sont indépendants si et seulement si P(A ∩ B) = P(A) x P(B) ; incompatibilité et indépendance sont deux notions distinctes et généralement exclusives.',
    'Le théorème des probabilités totales décompose P(B) en Σ P(B|Ai) x P(Ai) sur une partition de l’univers.',
    'La formule de Bayes inverse le conditionnement : elle est à la base du calcul de la valeur prédictive d’un test diagnostique.',
    'Combinaisons et arrangements se distinguent par la prise en compte, ou non, de l’ordre des éléments choisis.',
  ],
  erreursFrequentes: [
    'Confondre événements incompatibles et événements indépendants : deux événements incompatibles de probabilité non nulle ne peuvent pas être indépendants.',
    'Additionner directement P(A) et P(B) sans soustraire P(A ∩ B) lorsque les événements ne sont pas incompatibles.',
    'Appliquer la formule de Laplace (cas favorables sur cas possibles) alors que les résultats élémentaires ne sont pas équiprobables.',
    'Utiliser une combinaison alors que l’ordre du tirage importe, ou inversement un arrangement alors que l’ordre est indifférent.',
    'Oublier que la formule de Bayes exige que les événements Ai forment une partition complète de l’univers.',
    'Confondre P(A|B) et P(B|A) : ce sont deux quantités différentes que seule la formule de Bayes permet de relier.',
  ],
  mnemotechniques: [
    {
      moyen: '« Sachant » se lit de droite à gauche',
      explication: 'Dans P(A|B), on lit « probabilité de A sachant B » : B est déjà connu ou réalisé, A est l’événement dont on cherche la probabilité mise à jour.',
    },
    {
      moyen: 'Indépendant : le produit tout seul suffit',
      explication: 'Pour des événements indépendants, l’intersection se calcule comme un simple produit des probabilités, sans passer par le conditionnement.',
    },
    {
      moyen: 'Bayes retourne la formule',
      explication: 'La formule de Bayes n’est qu’un réarrangement de P(A ∩ B) = P(A|B) x P(B) = P(B|A) x P(A) pour isoler l’un ou l’autre conditionnement.',
    },
  ],
  sources: [
    'Saporta G., Probabilités, analyse des données et statistique, Technip',
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
    'Ancelle T., Statistique - Épidémiologie, Maloine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-probabilites-fc-01',
      recto: 'Que vaut P(A ∪ B) lorsque A et B sont incompatibles ?',
      verso: 'P(A ∪ B) = P(A) + P(B), car P(A ∩ B) = 0.',
      type: 'formule',
      tags: ['axiomes'],
    },
    {
      id: 'ue4-probabilites-fc-02',
      recto: 'Donner la formule générale de P(A ∪ B).',
      verso: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B).',
      type: 'formule',
      tags: ['axiomes'],
    },
    {
      id: 'ue4-probabilites-fc-03',
      recto: 'Donner la définition de la probabilité conditionnelle P(A|B).',
      verso: 'P(A|B) = P(A ∩ B) / P(B), défini seulement si P(B) > 0.',
      type: 'formule',
      tags: ['probabilité conditionnelle'],
    },
    {
      id: 'ue4-probabilites-fc-04',
      recto: 'À quelle condition A et B sont-ils indépendants ?',
      verso: 'Si P(A ∩ B) = P(A) x P(B), ce qui équivaut à P(A|B) = P(A).',
      type: 'definition',
      tags: ['indépendance'],
    },
    {
      id: 'ue4-probabilites-fc-05',
      recto: 'Deux événements incompatibles de probabilité non nulle peuvent-ils être indépendants ?',
      verso: 'Non : la réalisation de l’un exclut totalement l’autre, ce qui contredit l’indépendance.',
      type: 'mecanisme',
      tags: ['indépendance', 'incompatibilité'],
    },
    {
      id: 'ue4-probabilites-fc-06',
      recto: 'Énoncer le théorème des probabilités totales.',
      verso: 'P(B) = Σ P(B|Ai) x P(Ai), où les Ai forment une partition de l’univers.',
      type: 'formule',
      tags: ['probabilités totales'],
    },
    {
      id: 'ue4-probabilites-fc-07',
      recto: 'Donner la formule de Bayes.',
      verso: 'P(Ai|B) = [P(B|Ai) x P(Ai)] / Σ [P(B|Aj) x P(Aj)].',
      type: 'formule',
      tags: ['Bayes'],
    },
    {
      id: 'ue4-probabilites-fc-08',
      recto: 'À quoi sert la formule de Bayes en médecine ?',
      verso: 'À calculer la valeur prédictive d’un test diagnostique à partir de sa sensibilité, sa spécificité et la prévalence de la maladie.',
      type: 'clinique',
      tags: ['Bayes', 'diagnostic'],
    },
    {
      id: 'ue4-probabilites-fc-09',
      recto: 'Quelle est la différence entre un arrangement et une combinaison ?',
      verso: 'L’arrangement tient compte de l’ordre des éléments choisis, la combinaison n’en tient pas compte.',
      type: 'classification',
      tags: ['dénombrement'],
    },
    {
      id: 'ue4-probabilites-fc-10',
      recto: 'Donner la formule du nombre de combinaisons de p éléments parmi n.',
      verso: 'C(n,p) = n! / [p! x (n - p)!].',
      type: 'formule',
      tags: ['dénombrement'],
    },
    {
      id: 'ue4-probabilites-fc-11',
      recto: 'Quand peut-on appliquer la formule de Laplace (cas favorables / cas possibles) ?',
      verso: 'Uniquement dans un univers fini où tous les résultats élémentaires sont équiprobables.',
      type: 'mecanisme',
      tags: ['équiprobabilité'],
    },
    {
      id: 'ue4-probabilites-fc-12',
      recto: 'Que vaut P(non-A) en fonction de P(A) ?',
      verso: 'P(non-A) = 1 - P(A).',
      type: 'formule',
      tags: ['axiomes'],
    },
  ],
  qcm: [
    {
      id: 'ue4-probabilites-qcm-01',
      enonce: 'Concernant les axiomes des probabilités, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'P(Ω) = 1.',
          vraie: true,
          justification: 'C’est l’un des axiomes fondateurs : l’univers est l’événement certain.',
        },
        {
          lettre: 'B',
          texte: 'Une probabilité peut être négative si l’événement est rare.',
          vraie: false,
          justification: 'Une probabilité est toujours comprise entre 0 et 1, quelle que soit la rareté de l’événement.',
        },
        {
          lettre: 'C',
          texte: 'Pour deux événements incompatibles, P(A ∪ B) = P(A) + P(B).',
          vraie: true,
          justification: 'C’est l’axiome d’additivité, valable car P(A ∩ B) = 0 dans ce cas.',
        },
        {
          lettre: 'D',
          texte: 'P(non-A) = 1 - P(A) pour tout événement A.',
          vraie: true,
          justification: 'A et non-A forment une partition de l’univers, donc leurs probabilités s’additionnent à 1.',
        },
        {
          lettre: 'E',
          texte: 'P(A ∪ B) est toujours égal à P(A) + P(B), que les événements soient incompatibles ou non.',
          vraie: false,
          justification: 'Si A et B ne sont pas incompatibles, il faut soustraire P(A ∩ B) pour ne pas la compter deux fois.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Bien distinguer la formule d’addition simple (incompatibilité) de la formule générale.',
      difficulte: 1,
    },
    {
      id: 'ue4-probabilites-qcm-02',
      enonce: 'Concernant la probabilité conditionnelle, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'P(A|B) = P(A ∩ B) / P(B).',
          vraie: true,
          justification: 'C’est la définition même de la probabilité conditionnelle.',
        },
        {
          lettre: 'B',
          texte: 'P(A|B) est toujours égal à P(B|A).',
          vraie: false,
          justification: 'Ces deux quantités sont en général différentes ; elles ne sont reliées que par la formule de Bayes.',
        },
        {
          lettre: 'C',
          texte: 'P(A|B) est définie même si P(B) = 0.',
          vraie: false,
          justification: 'La division par P(B) impose P(B) strictement positif pour que P(A|B) soit définie.',
        },
        {
          lettre: 'D',
          texte: 'P(A ∩ B) = P(A|B) x P(B).',
          vraie: true,
          justification: 'C’est la formule des probabilités composées, obtenue en réarrangeant la définition de P(A|B).',
        },
        {
          lettre: 'E',
          texte: 'Si A et B sont indépendants, alors P(A|B) = P(A).',
          vraie: true,
          justification: 'C’est la définition même de l’indépendance : connaître B ne change pas la probabilité de A.',
        },
      ],
      correction: 'Réponses exactes : A, D et E. Le piège classique est de confondre P(A|B) et P(B|A).',
      difficulte: 2,
    },
    {
      id: 'ue4-probabilites-qcm-03',
      enonce: 'Concernant l’indépendance et l’incompatibilité de deux événements A et B, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Si A et B sont incompatibles et tous deux de probabilité strictement positive, ils ne peuvent pas être indépendants.',
          vraie: true,
          justification: 'Réaliser B exclut alors A, donc P(A|B) = 0, différent de P(A) qui est strictement positif.',
        },
        {
          lettre: 'B',
          texte: 'Si A et B sont indépendants, ils sont nécessairement incompatibles.',
          vraie: false,
          justification: 'C’est même l’inverse en général : deux événements indépendants de probabilité non nulle peuvent survenir ensemble.',
        },
        {
          lettre: 'C',
          texte: 'Si P(A ∩ B) = P(A) x P(B), A et B sont indépendants.',
          vraie: true,
          justification: 'C’est exactement la définition mathématique de l’indépendance.',
        },
        {
          lettre: 'D',
          texte: 'L’indépendance de A et B implique que P(A ∩ B) = 0.',
          vraie: false,
          justification: 'C’est une confusion avec l’incompatibilité ; l’indépendance implique P(A ∩ B) = P(A) x P(B), pas zéro.',
        },
        {
          lettre: 'E',
          texte: 'L’incompatibilité et l’indépendance sont deux notions distinctes.',
          vraie: true,
          justification: 'L’incompatibilité porte sur la possibilité de coexistence, l’indépendance sur l’absence d’influence mutuelle.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Ce couple de notions est l’un des pièges les plus fréquents en probabilités.',
      difficulte: 2,
    },
    {
      id: 'ue4-probabilites-qcm-04',
      enonce: 'Concernant le théorème des probabilités totales et la formule de Bayes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le théorème des probabilités totales exige que les événements Ai forment une partition de l’univers.',
          vraie: true,
          justification: 'Les Ai doivent être deux à deux incompatibles et leur réunion doit couvrir tout l’univers.',
        },
        {
          lettre: 'B',
          texte: 'P(B) = Σ P(B|Ai) x P(Ai) est la formule des probabilités totales.',
          vraie: true,
          justification: 'C’est exactement l’énoncé du théorème.',
        },
        {
          lettre: 'C',
          texte: 'La formule de Bayes permet de calculer P(Ai|B) à partir des P(B|Aj) et des P(Aj).',
          vraie: true,
          justification: 'C’est précisément son intérêt : inverser le sens du conditionnement.',
        },
        {
          lettre: 'D',
          texte: 'Le dénominateur de la formule de Bayes correspond à P(B), calculé par le théorème des probabilités totales.',
          vraie: true,
          justification: 'Σ P(B|Aj) x P(Aj) est exactement P(B) selon le théorème des probabilités totales.',
        },
        {
          lettre: 'E',
          texte: 'La formule de Bayes ne s’applique jamais en médecine.',
          vraie: false,
          justification: 'Elle fonde au contraire le calcul de la valeur prédictive d’un test diagnostique à partir de sa sensibilité, sa spécificité et la prévalence.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et D. La formule de Bayes est un outil central en médecine, notamment pour les tests diagnostiques.',
      difficulte: 2,
    },
    {
      id: 'ue4-probabilites-qcm-05',
      enonce: 'Concernant le dénombrement, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une combinaison tient compte de l’ordre des éléments.',
          vraie: false,
          justification: 'C’est l’inverse : la combinaison ignore l’ordre, contrairement à l’arrangement.',
        },
        {
          lettre: 'B',
          texte: 'Le nombre de permutations de n objets distincts est n!.',
          vraie: true,
          justification: 'Chaque permutation correspond à un classement complet des n objets, soit n! possibilités.',
        },
        {
          lettre: 'C',
          texte: 'C(n,p) = n! / [p! x (n - p)!].',
          vraie: true,
          justification: 'C’est la formule exacte du nombre de combinaisons de p éléments parmi n.',
        },
        {
          lettre: 'D',
          texte: 'La formule de Laplace (cas favorables sur cas possibles) s’applique quelle que soit la répartition des probabilités élémentaires.',
          vraie: false,
          justification: 'Elle exige que tous les résultats élémentaires soient équiprobables.',
        },
        {
          lettre: 'E',
          texte: 'Le choix de p patients parmi n pour constituer un groupe d’étude, sans ordre, relève d’une combinaison.',
          vraie: true,
          justification: 'L’ordre de sélection des patients est indifférent : seule la composition du groupe compte.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Le critère décisif est toujours la prise en compte ou non de l’ordre.',
      difficulte: 2,
    },
    {
      id: 'ue4-probabilites-qcm-06',
      enonce: 'Dans une population, 2 % des sujets sont porteurs d’une maladie rare (événement M). Un test a une sensibilité de 90 % et une spécificité de 95 %. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'P(test+|M) désigne la sensibilité du test.',
          vraie: true,
          justification: 'La sensibilité est par définition la probabilité d’un test positif chez un sujet malade.',
        },
        {
          lettre: 'B',
          texte: 'Le calcul de P(M|test+) relève directement de la formule de Bayes.',
          vraie: true,
          justification: 'Il s’agit d’inverser le conditionnement connu (test sachant maladie) pour obtenir maladie sachant test, ce qui est exactement l’objet de la formule de Bayes.',
        },
        {
          lettre: 'C',
          texte: 'P(test+) peut se calculer par le théorème des probabilités totales, en sommant sur les sous-groupes malades et non malades.',
          vraie: true,
          justification: 'M et non-M forment une partition de la population, ce qui permet d’écrire P(test+) = P(test+|M) x P(M) + P(test+|non-M) x P(non-M).',
        },
        {
          lettre: 'D',
          texte: 'P(M|test+) est nécessairement égale à P(test+|M), soit 90 %.',
          vraie: false,
          justification: 'Ce sont deux probabilités conditionnelles distinctes ; leur confusion est l’erreur classique évitée par la formule de Bayes.',
        },
        {
          lettre: 'E',
          texte: 'La faible prévalence de la maladie (2 %) n’a aucune influence sur la valeur de P(M|test+).',
          vraie: false,
          justification: 'Au contraire, la prévalence intervient directement dans la formule de Bayes et abaisse fortement la valeur prédictive positive lorsqu’elle est faible.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. C’est l’application médicale la plus classique de la formule de Bayes et du théorème des probabilités totales.',
      difficulte: 3,
    },
  ],
};
