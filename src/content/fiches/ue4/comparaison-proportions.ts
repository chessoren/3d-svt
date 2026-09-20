import type { Fiche } from '../../types';

export const ficheComparaisonProportions: Fiche = {
  id: 'ue4-comparaison-proportions',
  ue: 'ue4',
  titre: 'Comparaison de proportions et test du khi-deux',
  sousTitre: 'Comparaison de deux proportions, tableau de contingence, khi-deux d’indépendance, test exact de Fisher',
  chapitre: 'Estimation et tests',
  ordre: 10,
  duree: 25,
  difficulte: 3,
  motsCles: [
    'comparaison de proportions',
    'tableau de contingence',
    'khi-deux',
    'test du khi-deux',
    'test exact de Fisher',
  ],
  objectifs: [
    'Comparer deux proportions observées sur des échantillons indépendants à l’aide d’un test z.',
    'Construire un tableau de contingence et calculer les effectifs théoriques sous hypothèse d’indépendance.',
    'Calculer et interpréter la statistique du khi-deux d’indépendance.',
    'Connaître les conditions d’application du test du khi-deux.',
    'Savoir recourir au test exact de Fisher lorsque les conditions du khi-deux ne sont pas remplies.',
  ],
  sections: [
    {
      id: 'comparaison-deux-proportions',
      titre: 'Comparaison de deux proportions indépendantes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Comparer deux proportions observées dans deux groupes indépendants (par exemple, le taux de guérison sous traitement A comparé à celui sous traitement B) répond à la même logique que la comparaison de deux moyennes, en s’appuyant sur l’approximation normale de la distribution d’échantillonnage des proportions.',
        },
        {
          type: 'formule',
          expression: 'z = (p1 - p2) / racine( p x (1 - p) x (1/n1 + 1/n2) )',
          legende:
            'Statistique du test de comparaison de deux proportions indépendantes, où p est la proportion combinée (pooled) des deux groupes sous H0, calculée en supposant l’absence de différence entre les deux groupes.',
        },
        {
          type: 'formule',
          expression: 'p = (n1 x p1 + n2 x p2) / (n1 + n2)',
          legende: 'Proportion combinée (pooled) des deux groupes, calculée en supposant l’hypothèse nulle d’égalité des deux proportions.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Conditions d’application',
          texte:
            'Ce test nécessite des effectifs suffisants dans chaque groupe pour que l’approximation normale soit valable, classiquement n1 x p ≥ 5, n1 x (1 - p) ≥ 5, n2 x p ≥ 5 et n2 x (1 - p) ≥ 5.',
        },
      ],
    },
    {
      id: 'tableau-contingence',
      titre: 'Tableau de contingence et effectifs théoriques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le tableau de contingence croise deux variables qualitatives et présente, pour chaque combinaison de modalités, l’effectif observé. Il constitue la base du test du khi-deux d’indépendance, qui généralise la comparaison de deux proportions à des variables comportant plus de deux modalités.',
        },
        {
          type: 'tableau',
          titre: 'Exemple de tableau de contingence 2x2',
          colonnes: ['', 'Malade', 'Non malade', 'Total'],
          lignes: [
            ['Exposé', 'a', 'b', 'a + b'],
            ['Non exposé', 'c', 'd', 'c + d'],
            ['Total', 'a + c', 'b + d', 'n (total général)'],
          ],
        },
        {
          type: 'formule',
          expression: 'Eij = (total de la ligne i x total de la colonne j) / effectif total n',
          legende:
            'Effectif théorique de la case (i,j), calculé sous l’hypothèse nulle d’indépendance entre les deux variables du tableau.',
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Interprétation des effectifs théoriques',
          texte:
            'Les effectifs théoriques Eij représentent ce que l’on observerait dans chaque case si les deux variables étaient parfaitement indépendantes l’une de l’autre, à effectifs marginaux (totaux de lignes et de colonnes) inchangés. Plus les effectifs observés Oij s’écartent des effectifs théoriques, plus l’association entre les deux variables est marquée.',
        },
      ],
    },
    {
      id: 'khi-deux',
      titre: 'Le test du khi-deux d’indépendance',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le test du khi-deux d’indépendance permet de tester l’hypothèse nulle d’absence d’association entre deux variables qualitatives, à partir de l’écart global entre effectifs observés et effectifs théoriques du tableau de contingence.',
        },
        {
          type: 'formule',
          expression: 'χ² = Σ [ (Oij - Eij)² / Eij ]',
          legende:
            'Statistique du khi-deux d’indépendance : somme, sur toutes les cases du tableau, du carré de l’écart entre effectif observé Oij et effectif théorique Eij, rapporté à l’effectif théorique.',
        },
        {
          type: 'formule',
          expression: 'ddl = (nombre de lignes - 1) x (nombre de colonnes - 1)',
          legende: 'Nombre de degrés de liberté du test du khi-deux, qui détermine le quantile de la loi du khi-deux utilisé pour obtenir le degré de signification p.',
        },
        {
          type: 'etapes',
          titre: 'Méthode d’application du test du khi-deux',
          etapes: [
            {
              titre: 'Construire le tableau de contingence',
              detail: 'Recueillir les effectifs observés Oij pour chaque combinaison de modalités des deux variables.',
            },
            {
              titre: 'Calculer les effectifs théoriques',
              detail: 'Appliquer Eij = (total ligne x total colonne) / n pour chaque case du tableau.',
            },
            {
              titre: 'Vérifier les conditions d’application',
              detail: 'S’assurer que les effectifs théoriques sont suffisamment élevés dans chaque case avant de poursuivre.',
            },
            {
              titre: 'Calculer χ² et conclure',
              detail: 'Sommer les termes (Oij - Eij)²/Eij, comparer la valeur obtenue à la loi du khi-deux au degré de liberté correspondant, et conclure selon le degré de signification p obtenu.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Conditions d’application du test du khi-deux',
          texte:
            'Le test du khi-deux exige des effectifs théoriques suffisants : la condition usuelle est qu’au moins 80 % des cases aient un effectif théorique supérieur ou égal à 5, et qu’aucune case n’ait un effectif théorique inférieur à 1. Pour un tableau 2x2 où cette condition n’est pas respectée, le test exact de Fisher doit être préféré.',
        },
      ],
    },
    {
      id: 'fisher-pieges',
      titre: 'Test exact de Fisher et pièges classiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Lorsque les effectifs théoriques d’un tableau de contingence, en particulier un tableau 2x2, sont trop faibles pour justifier l’approximation du khi-deux, un test exact doit être utilisé.',
        },
        {
          type: 'definition',
          terme: 'Test exact de Fisher',
          definition:
            'Test statistique applicable à un tableau de contingence 2x2, qui calcule directement, sans approximation, la probabilité exacte d’observer un tableau au moins aussi extrême que celui observé, sous l’hypothèse nulle d’indépendance et à marges fixées, à partir de la loi hypergéométrique.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Quand préférer le test de Fisher au khi-deux ?',
          texte:
            'Le test exact de Fisher est particulièrement recommandé pour de petits échantillons ou lorsque certaines cases du tableau de contingence ont un effectif théorique inférieur à 5, situation dans laquelle l’approximation du khi-deux devient peu fiable. Il peut en théorie être utilisé quelle que soit la taille de l’échantillon, mais son calcul devient rapidement lourd pour de grands effectifs, ce qui explique la préférence pratique pour le khi-deux dès que ses conditions d’application sont satisfaites.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'χ² et test z de comparaison de deux proportions',
          texte:
            'Pour un tableau de contingence 2x2, le test du khi-deux d’indépendance et le test z de comparaison de deux proportions sont mathématiquement équivalents : la statistique χ² est alors égale au carré de la statistique z.',
        },
      ],
    },
  ],
  pointsCles: [
    'La comparaison de deux proportions indépendantes utilise un test z fondé sur l’approximation normale, avec une proportion combinée p calculée sous H0.',
    'Le tableau de contingence croise deux variables qualitatives et permet de calculer les effectifs théoriques sous hypothèse d’indépendance.',
    'χ² = Σ (Oij - Eij)² / Eij, avec ddl = (lignes - 1) x (colonnes - 1).',
    'Le test du khi-deux nécessite des effectifs théoriques suffisants (au moins 80 % des cases avec Eij ≥ 5, aucune case avec Eij < 1).',
    'Pour un tableau 2x2 avec effectifs théoriques trop faibles, le test exact de Fisher est préféré au khi-deux.',
    'Pour un tableau 2x2, le khi-deux d’indépendance et le test z de comparaison de deux proportions sont équivalents, avec χ² = z².',
    'Un khi-deux significatif indique une association statistique entre les deux variables, mais ne renseigne ni sur le sens ni sur la force de cette association à lui seul.',
  ],
  erreursFrequentes: [
    'Appliquer le test du khi-deux sans vérifier les effectifs théoriques minimaux, en particulier sur de petits tableaux de contingence.',
    'Confondre effectif observé et effectif théorique dans le calcul de χ², ou inverser les deux dans la formule.',
    'Oublier de calculer le degré de liberté ddl = (lignes - 1) x (colonnes - 1) avant de lire la table du khi-deux.',
    'Ignorer le test exact de Fisher lorsque les conditions d’application du khi-deux ne sont pas remplies sur un tableau 2x2.',
    'Interpréter un khi-deux significatif comme la preuve d’un lien de causalité entre les deux variables, alors qu’il établit seulement une association statistique.',
    'Croire que le test du khi-deux et le test exact de Fisher donnent toujours des résultats strictement identiques, alors qu’ils ne coïncident qu’approximativement, et surtout pour de grands effectifs.',
  ],
  mnemotechniques: [
    {
      moyen: '« Théorique en bas, écart au carré en haut »',
      explication: 'Dans chaque terme de la somme du khi-deux, l’effectif théorique Eij est au dénominateur, et le carré de l’écart (Oij - Eij) est au numérateur.',
    },
    {
      moyen: 'ddl = (lignes - 1) x (colonnes - 1)',
      explication: 'Retenir ce produit simple : un tableau 2x2 a donc toujours 1 degré de liberté, (2-1) x (2-1) = 1.',
    },
    {
      moyen: 'Petits effectifs : Fisher plutôt que khi-deux',
      explication: 'Dès qu’une case du tableau a un effectif théorique trop faible, le réflexe méthodologique est de basculer vers le test exact de Fisher.',
    },
  ],
  sources: [
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
    'Ancelle T., Statistique - Épidémiologie, Maloine',
    'Schwartz D., Méthodes statistiques à l’usage des médecins et des biologistes, Flammarion Médecine-Sciences',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-comparaison-proportions-fc-01',
      recto: 'Donner la formule du test z de comparaison de deux proportions indépendantes.',
      verso: 'z = (p1 - p2) / racine( p(1-p) x (1/n1 + 1/n2) ), avec p la proportion combinée sous H0.',
      type: 'formule',
      tags: ['test z', 'proportions'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-02',
      recto: 'Comment calcule-t-on la proportion combinée (pooled) p sous H0 ?',
      verso: 'p = (n1 x p1 + n2 x p2) / (n1 + n2).',
      type: 'formule',
      tags: ['proportion combinée'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-03',
      recto: 'Comment calcule-t-on l’effectif théorique d’une case d’un tableau de contingence ?',
      verso: 'Eij = (total de la ligne i x total de la colonne j) / effectif total n.',
      type: 'formule',
      tags: ['effectif théorique'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-04',
      recto: 'Donner la formule de la statistique du khi-deux d’indépendance.',
      verso: 'χ² = Σ (Oij - Eij)² / Eij.',
      type: 'formule',
      tags: ['khi-deux'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-05',
      recto: 'Comment calcule-t-on le nombre de degrés de liberté du test du khi-deux ?',
      verso: 'ddl = (nombre de lignes - 1) x (nombre de colonnes - 1).',
      type: 'formule',
      tags: ['degrés de liberté'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-06',
      recto: 'Quel est le nombre de degrés de liberté d’un tableau de contingence 2x2 ?',
      verso: '1, car (2-1) x (2-1) = 1.',
      type: 'chiffre',
      tags: ['degrés de liberté'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-07',
      recto: 'Quelles sont les conditions usuelles d’application du test du khi-deux ?',
      verso: 'Au moins 80 % des cases avec un effectif théorique ≥ 5, et aucune case avec un effectif théorique < 1.',
      type: 'mecanisme',
      tags: ['conditions'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-08',
      recto: 'Quel test utiliser à la place du khi-deux quand les effectifs théoriques d’un tableau 2x2 sont trop faibles ?',
      verso: 'Le test exact de Fisher.',
      type: 'mecanisme',
      tags: ['test exact de Fisher'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-09',
      recto: 'Sur quelle loi de probabilité repose le test exact de Fisher ?',
      verso: 'La loi hypergéométrique, qui donne la probabilité exacte d’un tableau à marges fixées, sous l’hypothèse d’indépendance.',
      type: 'mecanisme',
      tags: ['test exact de Fisher'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-10',
      recto: 'Quelle relation existe entre le khi-deux et le test z pour un tableau 2x2 ?',
      verso: 'Pour un tableau 2x2, χ² = z² : les deux tests sont mathématiquement équivalents.',
      type: 'formule',
      tags: ['khi-deux', 'test z'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-11',
      recto: 'Un khi-deux significatif démontre-t-il une relation de causalité entre les deux variables ?',
      verso: 'Non, il établit seulement une association statistique, pas un lien de causalité.',
      type: 'mecanisme',
      tags: ['pièges', 'causalité'],
    },
    {
      id: 'ue4-comparaison-proportions-fc-12',
      recto: 'Que représentent les effectifs théoriques d’un tableau de contingence ?',
      verso: 'Les effectifs que l’on observerait dans chaque case si les deux variables étaient parfaitement indépendantes, à marges inchangées.',
      type: 'definition',
      tags: ['effectif théorique'],
    },
  ],
  qcm: [
    {
      id: 'ue4-comparaison-proportions-qcm-01',
      enonce: 'Concernant la comparaison de deux proportions indépendantes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La statistique z utilise une proportion combinée (pooled) calculée sous H0.',
          vraie: true,
          justification: 'p = (n1p1 + n2p2)/(n1+n2) est calculée en supposant l’égalité des deux proportions.',
        },
        {
          lettre: 'B',
          texte: 'Ce test nécessite des effectifs suffisants dans chaque groupe pour justifier l’approximation normale.',
          vraie: true,
          justification: 'Les conditions usuelles portent sur n1 x p, n1 x (1-p), n2 x p et n2 x (1-p), tous devant être supérieurs ou égaux à 5.',
        },
        {
          lettre: 'C',
          texte: 'Ce test peut uniquement être utilisé pour comparer plus de deux groupes.',
          vraie: false,
          justification: 'Il est spécifiquement conçu pour comparer exactement deux proportions ; pour plus de deux groupes, on utilise le khi-deux sur un tableau de contingence plus large.',
        },
        {
          lettre: 'D',
          texte: 'Pour un tableau de contingence 2x2, ce test et le test du khi-deux d’indépendance sont mathématiquement équivalents.',
          vraie: true,
          justification: 'χ² = z² dans ce cas particulier, ce qui rend les deux approches équivalentes.',
        },
        {
          lettre: 'E',
          texte: 'La proportion combinée p est toujours égale à la moyenne arithmétique simple de p1 et p2, indépendamment des effectifs n1 et n2.',
          vraie: false,
          justification: 'p est une moyenne pondérée par les effectifs n1 et n2, pas une moyenne arithmétique simple des deux proportions.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir l’équivalence entre test z de proportions et khi-deux sur un tableau 2x2.',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-proportions-qcm-02',
      enonce: 'Concernant le tableau de contingence et les effectifs théoriques, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Eij = (total ligne i x total colonne j) / n.',
          vraie: true,
          justification: 'C’est la formule exacte de l’effectif théorique sous hypothèse d’indépendance.',
        },
        {
          lettre: 'B',
          texte: 'Les effectifs théoriques sont toujours égaux aux effectifs observés.',
          vraie: false,
          justification: 'Ils ne coïncident que si les deux variables sont parfaitement indépendantes dans l’échantillon, ce qui est rarement exactement le cas.',
        },
        {
          lettre: 'C',
          texte: 'Les effectifs théoriques respectent les mêmes totaux marginaux (lignes et colonnes) que les effectifs observés.',
          vraie: true,
          justification: 'C’est une propriété du calcul des effectifs théoriques, construits pour conserver les totaux marginaux.',
        },
        {
          lettre: 'D',
          texte: 'Plus l’écart entre effectifs observés et théoriques est grand, plus la statistique χ² est élevée.',
          vraie: true,
          justification: 'χ² est une somme de termes proportionnels au carré de cet écart, donc croît avec lui.',
        },
        {
          lettre: 'E',
          texte: 'Les effectifs théoriques peuvent être calculés sans connaître les totaux marginaux du tableau.',
          vraie: false,
          justification: 'Le calcul de Eij dépend directement des totaux de ligne et de colonne, donc des marges du tableau.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le calcul des effectifs théoriques est la première étape indispensable du test du khi-deux.',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-proportions-qcm-03',
      enonce: 'Concernant le test du khi-deux d’indépendance, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'χ² = Σ (Oij - Eij)² / Eij.',
          vraie: true,
          justification: 'C’est la formule exacte de la statistique du khi-deux d’indépendance.',
        },
        {
          lettre: 'B',
          texte: 'Le nombre de degrés de liberté dépend du nombre de lignes et de colonnes du tableau.',
          vraie: true,
          justification: 'ddl = (lignes - 1) x (colonnes - 1).',
        },
        {
          lettre: 'C',
          texte: 'Un tableau 3x4 a 12 degrés de liberté.',
          vraie: false,
          justification: 'ddl = (3-1) x (4-1) = 2 x 3 = 6, et non 12.',
        },
        {
          lettre: 'D',
          texte: 'Une condition usuelle exige qu’au moins 80 % des cases aient un effectif théorique supérieur ou égal à 5.',
          vraie: true,
          justification: 'C’est la condition classiquement retenue pour la validité de l’approximation du khi-deux.',
        },
        {
          lettre: 'E',
          texte: 'Le test du khi-deux permet uniquement de tester des tableaux de contingence 2x2.',
          vraie: false,
          justification: 'Il s’applique à des tableaux de contingence de toute taille, avec un nombre quelconque de lignes et de colonnes.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Attention au calcul précis du nombre de degrés de liberté sur un tableau non carré.',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-proportions-qcm-04',
      enonce: 'Concernant le test exact de Fisher, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il s’applique classiquement à un tableau de contingence 2x2.',
          vraie: true,
          justification: 'C’est son cadre d’application le plus classique et le plus enseigné.',
        },
        {
          lettre: 'B',
          texte: 'Il est recommandé lorsque les effectifs théoriques du tableau sont trop faibles pour le khi-deux.',
          vraie: true,
          justification: 'C’est précisément son indication principale, en alternative au khi-deux dans ce cas.',
        },
        {
          lettre: 'C',
          texte: 'Il repose sur la loi hypergéométrique.',
          vraie: true,
          justification: 'C’est la loi qui permet le calcul exact de la probabilité du tableau observé, à marges fixées.',
        },
        {
          lettre: 'D',
          texte: 'Il donne un résultat approximatif, moins précis que le khi-deux pour de petits effectifs.',
          vraie: false,
          justification: 'C’est l’inverse : le test de Fisher calcule une probabilité exacte, sans approximation, contrairement au khi-deux qui repose sur une approximation.',
        },
        {
          lettre: 'E',
          texte: 'Il ne peut jamais être utilisé pour de grands échantillons.',
          vraie: false,
          justification: 'Il peut théoriquement s’appliquer à tout effectif, mais son calcul devient lourd pour de grands échantillons, ce qui explique la préférence pratique pour le khi-deux dans ce cas.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Le test de Fisher est exact, contrairement au khi-deux qui est une approximation.',
      difficulte: 2,
    },
    {
      id: 'ue4-comparaison-proportions-qcm-05',
      enonce: 'Un tableau de contingence 2x2 croise le statut tabagique et la survenue d’un cancer bronchique, avec des effectifs théoriques calculés à 3, 4, 47 et 46. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les conditions d’application usuelles du test du khi-deux ne sont pas respectées.',
          vraie: true,
          justification: 'Deux cases sur quatre ont un effectif théorique inférieur à 5, ce qui dépasse le seuil toléré de 20 % de cases sous 5.',
        },
        {
          lettre: 'B',
          texte: 'Le test exact de Fisher serait plus approprié dans cette situation.',
          vraie: true,
          justification: 'C’est exactement l’indication du test de Fisher : tableau 2x2 avec effectifs théoriques trop faibles pour le khi-deux.',
        },
        {
          lettre: 'C',
          texte: 'Appliquer malgré tout le khi-deux donnerait un résultat parfaitement fiable.',
          vraie: false,
          justification: 'Avec des effectifs théoriques aussi faibles, l’approximation du khi-deux devient peu fiable et peut conduire à des conclusions erronées.',
        },
        {
          lettre: 'D',
          texte: 'Le nombre de degrés de liberté de ce tableau serait de 1.',
          vraie: true,
          justification: 'ddl = (2-1) x (2-1) = 1, quel que soit le respect ou non des conditions d’application.',
        },
        {
          lettre: 'E',
          texte: 'Augmenter la taille de l’échantillon, à proportions similaires, pourrait permettre de satisfaire les conditions d’application du khi-deux.',
          vraie: true,
          justification: 'Augmenter n augmente proportionnellement les effectifs théoriques de chaque case, ce qui peut permettre de dépasser le seuil de 5.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Savoir reconnaître une situation d’effectifs insuffisants et la solution méthodologique adaptée.',
      difficulte: 3,
    },
    {
      id: 'ue4-comparaison-proportions-qcm-06',
      enonce: 'Concernant l’interprétation du test du khi-deux et ses limites, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un khi-deux significatif démontre l’existence d’une association statistique entre les deux variables étudiées.',
          vraie: true,
          justification: 'C’est exactement ce que teste le khi-deux d’indépendance : rejeter H0 signifie rejeter l’hypothèse d’absence d’association.',
        },
        {
          lettre: 'B',
          texte: 'Un khi-deux significatif démontre un lien de causalité entre les deux variables.',
          vraie: false,
          justification: 'Une association statistique n’implique pas nécessairement une causalité ; un facteur de confusion peut expliquer l’association observée.',
        },
        {
          lettre: 'C',
          texte: 'La valeur du khi-deux seule renseigne directement sur la force de l’association entre les deux variables.',
          vraie: false,
          justification: 'χ² dépend fortement de la taille de l’échantillon ; des indicateurs spécifiques (comme le V de Cramer) sont nécessaires pour quantifier la force de l’association indépendamment de l’effectif.',
        },
        {
          lettre: 'D',
          texte: 'Le test du khi-deux ne précise pas le sens de l’association entre les deux variables qualitatives.',
          vraie: true,
          justification: 'Il teste seulement l’existence d’une association, pas son sens ni la modalité qui l’explique le plus.',
        },
        {
          lettre: 'E',
          texte: 'Le test du khi-deux peut être appliqué à des variables quantitatives continues sans les regrouper en classes.',
          vraie: false,
          justification: 'Le test du khi-deux d’indépendance s’applique à des variables qualitatives ou à des variables quantitatives regroupées en classes, pas directement à des variables continues.',
        },
      ],
      correction: 'Réponses exactes : A et D. Association statistique et causalité doivent toujours être distinguées en interprétation.',
      difficulte: 2,
    },
  ],
};
