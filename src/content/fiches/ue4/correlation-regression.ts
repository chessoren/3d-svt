import type { Fiche } from '../../types';

export const ficheCorrelationRegression: Fiche = {
  id: 'ue4-correlation-regression',
  ue: 'ue4',
  titre: 'Corrélation et régression',
  sousTitre: 'Nuage de points, coefficient de corrélation de Pearson, régression linéaire simple et pièges d’interprétation',
  chapitre: 'Applications médicales',
  ordre: 12,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'nuage de points',
    'coefficient de corrélation',
    'coefficient de Pearson',
    'régression linéaire',
    'coefficient de détermination',
    'causalité',
  ],
  objectifs: [
    'Représenter et interpréter un nuage de points croisant deux variables quantitatives.',
    'Calculer et interpréter le coefficient de corrélation linéaire de Pearson.',
    'Tester la nullité d’un coefficient de corrélation.',
    'Établir l’équation d’une droite de régression linéaire simple et interpréter ses coefficients.',
    'Distinguer corrélation et causalité, et identifier les principaux pièges d’interprétation.',
  ],
  sections: [
    {
      id: 'nuage-points',
      titre: 'Nuage de points et notion de liaison',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Lorsque deux variables quantitatives sont mesurées sur les mêmes sujets, le nuage de points, qui place chaque sujet selon ses deux valeurs sur un repère, permet une première appréciation visuelle du type de liaison qui les unit.',
        },
        {
          type: 'liste',
          items: [
            'Une liaison linéaire positive se traduit par un nuage de points orienté du bas-gauche vers le haut-droite.',
            'Une liaison linéaire négative se traduit par un nuage de points orienté du haut-gauche vers le bas-droite.',
            'Une absence de liaison linéaire se traduit par un nuage de points sans orientation privilégiée.',
            'Un nuage de points peut révéler une liaison non linéaire (en U, exponentielle…) que le coefficient de corrélation de Pearson, conçu pour les liaisons linéaires, ne détecte pas correctement.',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Toujours regarder le nuage de points avant de calculer',
          texte:
            'Le calcul d’un coefficient de corrélation sans avoir observé le nuage de points expose à des erreurs d’interprétation : une valeur atypique isolée peut à elle seule créer ou masquer une corrélation apparente, et une liaison non linéaire forte peut passer inaperçue avec un coefficient de Pearson proche de 0.',
        },
      ],
    },
    {
      id: 'coefficient-pearson',
      titre: 'Le coefficient de corrélation de Pearson',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le coefficient de corrélation linéaire de Pearson quantifie l’intensité et le sens d’une liaison linéaire entre deux variables quantitatives.',
        },
        {
          type: 'formule',
          expression: 'r = Σ [ (xi - x̄)(yi - ȳ) ] / racine( Σ(xi - x̄)² x Σ(yi - ȳ)² )',
          legende: 'Coefficient de corrélation linéaire de Pearson entre deux variables x et y, mesurées sur les mêmes sujets.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Bornes et interprétation de r',
          texte:
            'Le coefficient r est toujours compris entre -1 et +1. r = +1 correspond à une liaison linéaire positive parfaite, r = -1 à une liaison linéaire négative parfaite, r = 0 à une absence de liaison linéaire. Plus |r| se rapproche de 1, plus les points du nuage sont alignés sur une droite.',
        },
        {
          type: 'formule',
          expression: 't = r x racine(n - 2) / racine(1 - r²)',
          legende: 'Statistique du test de nullité du coefficient de corrélation (H0 : ρ = 0 dans la population), comparée à la loi de Student à (n - 2) degrés de liberté.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Significativité et intensité sont deux notions différentes',
          texte:
            'Un coefficient de corrélation peut être statistiquement significatif (p < 0,05) tout en étant de faible intensité, notamment lorsque l’effectif n est très grand : la significativité indique seulement que r est probablement différent de 0 dans la population, pas que la liaison est forte ou cliniquement pertinente.',
        },
      ],
    },
    {
      id: 'regression-lineaire',
      titre: 'Régression linéaire simple',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Alors que la corrélation traite les deux variables de façon symétrique, la régression linéaire simple modélise une variable, dite expliquée ou dépendante (y), en fonction d’une autre, dite explicative ou indépendante (x).',
        },
        {
          type: 'formule',
          expression: 'y = a + b x',
          legende:
            'Équation de la droite de régression linéaire simple estimée par la méthode des moindres carrés, où b est la pente (coefficient de régression) et a l’ordonnée à l’origine.',
        },
        {
          type: 'formule',
          expression: 'b = Σ [ (xi - x̄)(yi - ȳ) ] / Σ (xi - x̄)²',
          legende: 'Pente de la droite de régression, estimée par la méthode des moindres carrés, qui minimise la somme des carrés des écarts verticaux entre les points observés et la droite.',
        },
        {
          type: 'etapes',
          titre: 'Méthode d’ajustement d’une droite de régression',
          etapes: [
            {
              titre: 'Identifier les variables',
              detail: 'Déterminer quelle variable est explicative (x) et quelle variable est expliquée (y), en fonction de la question posée.',
            },
            {
              titre: 'Calculer la pente b',
              detail: 'Appliquer la formule des moindres carrés à partir des données de l’échantillon.',
            },
            {
              titre: 'Calculer l’ordonnée à l’origine a',
              detail: 'Utiliser a = ȳ - b x x̄, la droite de régression passant toujours par le point moyen (x̄, ȳ).',
            },
            {
              titre: 'Interpréter les coefficients',
              detail: 'b représente la variation moyenne de y pour une augmentation d’une unité de x ; a est la valeur prédite de y quand x = 0, dont l’interprétation clinique n’est pas toujours pertinente.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La régression de y sur x n’est pas celle de x sur y',
          texte:
            'Contrairement au coefficient de corrélation, qui est symétrique en x et y, la droite de régression de y en fonction de x est différente de la droite de régression de x en fonction de y : la méthode des moindres carrés ne minimise pas la même quantité selon la variable choisie comme variable à expliquer.',
        },
      ],
    },
    {
      id: 'coefficient-determination',
      titre: 'Coefficient de détermination',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le coefficient de détermination quantifie la qualité de l’ajustement de la droite de régression aux données observées, c’est-à-dire la part de la variabilité de y expliquée par la relation linéaire avec x.',
        },
        {
          type: 'formule',
          expression: 'R² = r²',
          legende: 'Dans le cas d’une régression linéaire simple, le coefficient de détermination R² est égal au carré du coefficient de corrélation de Pearson r.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Interprétation du R²',
          texte:
            'R², compris entre 0 et 1, représente la proportion de la variance de y expliquée par la variable explicative x dans le modèle de régression linéaire. Un R² de 0,64, par exemple, signifie que 64 % de la variabilité observée de y est statistiquement associée à x dans ce modèle, les 36 % restants relevant d’autres facteurs ou de la variabilité résiduelle.',
        },
        {
          type: 'tableau',
          titre: 'Exemple : lien entre indice de masse corporelle (x) et pression artérielle systolique (y)',
          colonnes: ['Paramètre', 'Valeur', 'Interprétation'],
          lignes: [
            ['r', '0,55', 'Corrélation positive d’intensité modérée'],
            ['R²', '0,30', 'Environ 30 % de la variance de la pression artérielle systolique est associée à l’IMC dans ce modèle'],
          ],
        },
      ],
    },
    {
      id: 'correlation-causalite',
      titre: 'Corrélation, causalité et pièges d’interprétation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’interprétation d’une corrélation, même forte et statistiquement significative, doit toujours être prudente : une association statistique entre deux variables ne démontre en rien qu’il existe un lien de cause à effet entre elles.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Corrélation n’est pas causalité',
          texte:
            'Une corrélation observée entre deux variables x et y peut s’expliquer de plusieurs façons : x cause y, y cause x, une troisième variable (facteur de confusion) cause à la fois x et y, ou la corrélation est purement fortuite, en particulier sur de petits échantillons ou lorsque de nombreuses corrélations sont testées simultanément.',
        },
        {
          type: 'liste',
          items: [
            'Corrélation fallacieuse : association statistique sans aucun lien causal ni logique entre les deux variables, due au hasard ou à une coïncidence temporelle.',
            'Facteur de confusion : variable liée à la fois à x et à y, qui explique tout ou partie de la corrélation observée sans que x et y soient directement liées.',
            'Sensibilité aux valeurs extrêmes : une ou quelques observations atypiques peuvent créer ou masquer artificiellement une corrélation.',
            'Non-linéarité : une liaison réelle mais non linéaire entre x et y peut donner un coefficient de Pearson faible, alors qu’une liaison forte existe bel et bien.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple classique de facteur de confusion',
          texte:
            'Le nombre de noyades observées et les ventes de glaces présentent, sur une année, une corrélation positive marquée. Ce n’est évidemment pas parce que manger des glaces cause des noyades : la température estivale est le facteur de confusion qui augmente à la fois la fréquentation des plans d’eau et la consommation de glaces.',
        },
      ],
    },
  ],
  pointsCles: [
    'Le nuage de points doit toujours précéder le calcul d’un coefficient de corrélation, pour repérer valeurs atypiques et liaisons non linéaires.',
    'Le coefficient de corrélation de Pearson r est compris entre -1 et +1 et mesure l’intensité et le sens d’une liaison linéaire.',
    'La nullité de r se teste par t = r x racine(n-2) / racine(1-r²), comparé à la loi de Student à (n-2) degrés de liberté.',
    'La régression linéaire simple, y = a + bx, distingue variable expliquée (y) et variable explicative (x), contrairement à la corrélation qui les traite symétriquement.',
    'La droite de régression passe toujours par le point moyen (x̄, ȳ) et est estimée par la méthode des moindres carrés.',
    'R² = r² pour une régression linéaire simple ; il représente la proportion de la variance de y expliquée par x.',
    'Une corrélation, même forte et significative, ne démontre jamais à elle seule une causalité : facteur de confusion, corrélation fortuite et sens inverse de la causalité doivent toujours être envisagés.',
  ],
  erreursFrequentes: [
    'Calculer un coefficient de corrélation sans avoir d’abord examiné le nuage de points, ce qui expose à ignorer une valeur atypique ou une liaison non linéaire.',
    'Confondre significativité statistique d’une corrélation (p < 0,05) et force de cette corrélation (valeur de r) : un grand échantillon peut rendre significative une corrélation très faible.',
    'Affirmer qu’une corrélation, même forte, démontre une relation de cause à effet entre les deux variables.',
    'Confondre la droite de régression de y en fonction de x avec celle de x en fonction de y : ce ne sont pas les mêmes droites, sauf cas particulier.',
    'Interpréter l’ordonnée à l’origine a comme une valeur cliniquement significative alors que x = 0 peut être hors du domaine de validité des données observées.',
    'Croire qu’un coefficient de Pearson proche de 0 signifie une absence totale de liaison entre les deux variables, alors qu’il ne détecte que les liaisons linéaires.',
  ],
  mnemotechniques: [
    {
      moyen: 'Glaces et noyades, le classique du facteur de confusion',
      explication: 'La corrélation entre ventes de glaces et noyades, expliquée par la chaleur estivale, illustre de façon mémorable qu’une corrélation forte n’implique jamais une causalité directe.',
    },
    {
      moyen: 'R² = r au carré, la part expliquée',
      explication: 'Le coefficient de détermination n’est que le carré du coefficient de corrélation en régression simple : il traduit la part de variance expliquée, toujours positive.',
    },
    {
      moyen: 'Toujours le nuage avant le nombre',
      explication: 'Ne jamais calculer un coefficient de corrélation ou ajuster une droite de régression sans avoir d’abord regardé le nuage de points correspondant.',
    },
  ],
  sources: [
    'Saporta G., Probabilités, analyse des données et statistique, Technip',
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
    'Schwartz D., Méthodes statistiques à l’usage des médecins et des biologistes, Flammarion Médecine-Sciences',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-correlation-regression-fc-01',
      recto: 'Entre quelles valeurs est toujours compris le coefficient de corrélation de Pearson r ?',
      verso: 'Entre -1 et +1.',
      type: 'chiffre',
      tags: ['coefficient de Pearson'],
    },
    {
      id: 'ue4-correlation-regression-fc-02',
      recto: 'Que mesure le coefficient de corrélation de Pearson ?',
      verso: 'L’intensité et le sens d’une liaison linéaire entre deux variables quantitatives.',
      type: 'definition',
      tags: ['coefficient de Pearson'],
    },
    {
      id: 'ue4-correlation-regression-fc-03',
      recto: 'Donner la statistique du test de nullité du coefficient de corrélation.',
      verso: 't = r x racine(n-2) / racine(1-r²), comparé à la loi de Student à (n-2) degrés de liberté.',
      type: 'formule',
      tags: ['test de nullité'],
    },
    {
      id: 'ue4-correlation-regression-fc-04',
      recto: 'Donner l’équation générale d’une droite de régression linéaire simple.',
      verso: 'y = a + b x, où b est la pente et a l’ordonnée à l’origine.',
      type: 'formule',
      tags: ['régression linéaire'],
    },
    {
      id: 'ue4-correlation-regression-fc-05',
      recto: 'Par quel point passe toujours la droite de régression des moindres carrés ?',
      verso: 'Par le point moyen (x̄, ȳ).',
      type: 'mecanisme',
      tags: ['régression linéaire'],
    },
    {
      id: 'ue4-correlation-regression-fc-06',
      recto: 'Quelle relation existe entre R² et r en régression linéaire simple ?',
      verso: 'R² = r² : le coefficient de détermination est le carré du coefficient de corrélation.',
      type: 'formule',
      tags: ['coefficient de détermination'],
    },
    {
      id: 'ue4-correlation-regression-fc-07',
      recto: 'Que représente le coefficient de détermination R² ?',
      verso: 'La proportion de la variance de y expliquée par la variable explicative x dans le modèle.',
      type: 'definition',
      tags: ['coefficient de détermination'],
    },
    {
      id: 'ue4-correlation-regression-fc-08',
      recto: 'Une corrélation démontre-t-elle une relation de cause à effet ?',
      verso: 'Non, jamais à elle seule : un facteur de confusion ou une corrélation fortuite peuvent l’expliquer.',
      type: 'mecanisme',
      tags: ['causalité'],
    },
    {
      id: 'ue4-correlation-regression-fc-09',
      recto: 'Qu’est-ce qu’un facteur de confusion dans l’interprétation d’une corrélation ?',
      verso: 'Une variable liée à la fois à x et à y qui explique tout ou partie de leur corrélation, sans lien causal direct entre x et y.',
      type: 'definition',
      tags: ['facteur de confusion'],
    },
    {
      id: 'ue4-correlation-regression-fc-10',
      recto: 'Pourquoi faut-il toujours regarder le nuage de points avant de calculer un coefficient de corrélation ?',
      verso: 'Pour repérer les valeurs atypiques et les liaisons non linéaires, que le coefficient de Pearson ne détecte pas correctement.',
      type: 'mecanisme',
      tags: ['nuage de points'],
    },
    {
      id: 'ue4-correlation-regression-fc-11',
      recto: 'Un coefficient de corrélation statistiquement significatif est-il nécessairement fort ?',
      verso: 'Non, un grand échantillon peut rendre significative une corrélation de faible intensité.',
      type: 'mecanisme',
      tags: ['significativité'],
    },
    {
      id: 'ue4-correlation-regression-fc-12',
      recto: 'La droite de régression de y sur x est-elle identique à celle de x sur y ?',
      verso: 'Non, ce sont en général deux droites différentes, car la méthode des moindres carrés minimise des écarts différents selon la variable choisie comme expliquée.',
      type: 'mecanisme',
      tags: ['régression linéaire'],
    },
  ],
  qcm: [
    {
      id: 'ue4-correlation-regression-qcm-01',
      enonce: 'Concernant le nuage de points et le coefficient de corrélation de Pearson, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le nuage de points doit être examiné avant de calculer un coefficient de corrélation.',
          vraie: true,
          justification: 'Il permet de détecter valeurs atypiques et liaisons non linéaires qui fausseraient l’interprétation de r.',
        },
        {
          lettre: 'B',
          texte: 'r est toujours compris entre -1 et +1.',
          vraie: true,
          justification: 'C’est une propriété mathématique du coefficient de corrélation de Pearson.',
        },
        {
          lettre: 'C',
          texte: 'Un coefficient de Pearson proche de 0 signifie nécessairement une absence de toute liaison entre les deux variables.',
          vraie: false,
          justification: 'Il signifie seulement l’absence de liaison linéaire ; une liaison non linéaire forte peut coexister avec un r proche de 0.',
        },
        {
          lettre: 'D',
          texte: 'Une seule valeur atypique peut fortement modifier la valeur du coefficient de corrélation.',
          vraie: true,
          justification: 'Le coefficient de Pearson est sensible aux valeurs extrêmes, qui peuvent créer ou masquer une corrélation apparente.',
        },
        {
          lettre: 'E',
          texte: 'r = -1 signifie une absence totale de liaison entre les deux variables.',
          vraie: false,
          justification: 'r = -1 correspond au contraire à une liaison linéaire négative parfaite, pas à une absence de liaison.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Toujours garder à l’esprit les limites du coefficient de Pearson (linéarité, sensibilité aux valeurs extrêmes).',
      difficulte: 2,
    },
    {
      id: 'ue4-correlation-regression-qcm-02',
      enonce: 'Concernant le test de nullité du coefficient de corrélation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il teste l’hypothèse nulle selon laquelle le coefficient de corrélation dans la population, ρ, est égal à 0.',
          vraie: true,
          justification: 'C’est exactement l’hypothèse nulle testée.',
        },
        {
          lettre: 'B',
          texte: 'La statistique de test suit une loi de Student à (n - 2) degrés de liberté.',
          vraie: true,
          justification: 'C’est le nombre de degrés de liberté usuel de ce test, deux paramètres étant estimés (pente et ordonnée, indirectement liés au calcul de r).',
        },
        {
          lettre: 'C',
          texte: 'Un test de nullité significatif garantit que la corrélation observée est forte.',
          vraie: false,
          justification: 'Il garantit seulement que r est probablement différent de 0 dans la population, sans préjuger de son intensité.',
        },
        {
          lettre: 'D',
          texte: 'Sur un très grand échantillon, une corrélation faible (par exemple r = 0,10) peut devenir statistiquement significative.',
          vraie: true,
          justification: 'La puissance du test augmente avec n, ce qui permet de détecter des corrélations même faibles sur de grands effectifs.',
        },
        {
          lettre: 'E',
          texte: 'Ce test ne peut être appliqué que si le nuage de points suggère une liaison linéaire.',
          vraie: true,
          justification: 'Le coefficient de Pearson et son test de nullité ne sont pertinents que pour évaluer une liaison de type linéaire.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Toujours distinguer significativité statistique et intensité réelle de la corrélation.',
      difficulte: 2,
    },
    {
      id: 'ue4-correlation-regression-qcm-03',
      enonce: 'Concernant la régression linéaire simple, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La droite de régression est estimée par la méthode des moindres carrés.',
          vraie: true,
          justification: 'Cette méthode minimise la somme des carrés des écarts verticaux entre les points observés et la droite.',
        },
        {
          lettre: 'B',
          texte: 'La droite de régression passe toujours par le point moyen (x̄, ȳ).',
          vraie: true,
          justification: 'C’est une propriété mathématique de la droite des moindres carrés.',
        },
        {
          lettre: 'C',
          texte: 'La pente b représente la variation moyenne attendue de y pour une augmentation d’une unité de x.',
          vraie: true,
          justification: 'C’est l’interprétation directe du coefficient de régression b.',
        },
        {
          lettre: 'D',
          texte: 'La droite de régression de y sur x est identique à la droite de régression de x sur y.',
          vraie: false,
          justification: 'Ce sont en général deux droites distinctes, sauf dans le cas particulier où r = ±1.',
        },
        {
          lettre: 'E',
          texte: 'L’ordonnée à l’origine a est toujours interprétable cliniquement, quel que soit le contexte.',
          vraie: false,
          justification: 'Si x = 0 est en dehors du domaine des données observées, l’interprétation clinique de a peut être dénuée de sens.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Retenir la non-symétrie entre régression de y sur x et de x sur y.',
      difficulte: 2,
    },
    {
      id: 'ue4-correlation-regression-qcm-04',
      enonce: 'Concernant le coefficient de détermination R², quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'R² = r² en régression linéaire simple.',
          vraie: true,
          justification: 'C’est une relation directe, propre au cas de la régression linéaire simple à une seule variable explicative.',
        },
        {
          lettre: 'B',
          texte: 'R² est compris entre 0 et 1.',
          vraie: true,
          justification: 'Étant le carré d’un nombre compris entre -1 et 1, R² est nécessairement positif ou nul, et au plus égal à 1.',
        },
        {
          lettre: 'C',
          texte: 'Un R² de 0,81 signifie que 81 % de la variance de y est expliquée par x dans le modèle.',
          vraie: true,
          justification: 'C’est exactement l’interprétation du coefficient de détermination.',
        },
        {
          lettre: 'D',
          texte: 'Un R² élevé garantit à lui seul une relation de causalité entre x et y.',
          vraie: false,
          justification: 'Un R² élevé indique un bon ajustement statistique du modèle, mais ne démontre jamais à lui seul une causalité.',
        },
        {
          lettre: 'E',
          texte: 'R² peut être négatif si le modèle de régression est particulièrement mauvais.',
          vraie: false,
          justification: 'En régression linéaire simple par les moindres carrés, R² = r² est toujours positif ou nul par construction.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Ne jamais confondre bonne qualité d’ajustement statistique (R² élevé) et preuve de causalité.',
      difficulte: 2,
    },
    {
      id: 'ue4-correlation-regression-qcm-05',
      enonce: 'Concernant la distinction entre corrélation et causalité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une corrélation statistiquement significative entre deux variables peut être due à un facteur de confusion.',
          vraie: true,
          justification: 'C’est l’une des explications classiques d’une corrélation observée sans lien causal direct.',
        },
        {
          lettre: 'B',
          texte: 'Une corrélation peut être purement fortuite, en particulier lorsque de nombreux tests sont réalisés simultanément.',
          vraie: true,
          justification: 'Multiplier les comparaisons augmente le risque d’observer une corrélation significative par le seul effet du hasard.',
        },
        {
          lettre: 'C',
          texte: 'Le sens de la causalité, si elle existe, peut être l’inverse de celui supposé initialement.',
          vraie: true,
          justification: 'Une corrélation entre x et y n’indique pas par elle-même si x cause y ou si y cause x.',
        },
        {
          lettre: 'D',
          texte: 'Seule une corrélation avec un coefficient r supérieur à 0,8 peut correspondre à une causalité.',
          vraie: false,
          justification: 'La force de la corrélation n’a aucun rapport direct avec l’existence ou non d’une causalité ; une causalité peut exister avec un r modéré, et une corrélation forte peut n’être due qu’à un facteur de confusion.',
        },
        {
          lettre: 'E',
          texte: 'L’exemple classique des ventes de glaces et des noyades illustre le rôle d’un facteur de confusion (la température).',
          vraie: true,
          justification: 'C’est un exemple pédagogique très utilisé pour illustrer ce piège d’interprétation.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. La distinction corrélation/causalité est l’un des messages centraux de cette fiche.',
      difficulte: 2,
    },
    {
      id: 'ue4-correlation-regression-qcm-06',
      enonce: 'Une étude sur 150 sujets trouve une corrélation entre la consommation de sel (x, en g/jour) et la pression artérielle systolique (y, en mmHg), avec r = 0,40 (p = 0,001) et une droite de régression y = 110 + 2,5 x. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Cette corrélation est statistiquement significative au seuil de 5 %.',
          vraie: true,
          justification: 'p = 0,001 est très inférieur au seuil usuel de 0,05.',
        },
        {
          lettre: 'B',
          texte: 'Le coefficient de détermination R² de ce modèle est de 0,16.',
          vraie: true,
          justification: 'R² = r² = 0,40² = 0,16, soit 16 % de la variance de la pression artérielle expliquée par la consommation de sel dans ce modèle.',
        },
        {
          lettre: 'C',
          texte: 'Selon ce modèle, augmenter la consommation de sel d’un gramme par jour est associé, en moyenne, à une augmentation de 2,5 mmHg de la pression artérielle systolique.',
          vraie: true,
          justification: 'C’est l’interprétation directe de la pente b = 2,5 de la droite de régression.',
        },
        {
          lettre: 'D',
          texte: 'Ce résultat démontre formellement que réduire la consommation de sel fait baisser la pression artérielle.',
          vraie: false,
          justification: 'Une association observationnelle, même significative, ne démontre pas formellement la causalité ; des facteurs de confusion (poids, âge, activité physique) pourraient intervenir.',
        },
        {
          lettre: 'E',
          texte: 'D’après ce modèle, un sujet ne consommant aucun sel (x = 0) aurait une pression artérielle systolique moyenne de 110 mmHg.',
          vraie: true,
          justification: 'C’est l’interprétation directe de l’ordonnée à l’origine a = 110, sous réserve que x = 0 reste dans le domaine de validité raisonnable des données observées.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Le point D rappelle la limite fondamentale : une association observationnelle ne prouve pas la causalité.',
      difficulte: 3,
    },
  ],
};
