import type { Fiche } from '../../types';

export const ficheIntervallesConfiance: Fiche = {
  id: 'ue4-intervalles-confiance',
  ue: 'ue4',
  titre: 'Intervalles de confiance',
  sousTitre: 'Principe, intervalle de confiance d’une moyenne et d’une proportion, conditions d’application, taille d’échantillon',
  chapitre: 'Estimation et tests',
  ordre: 7,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'intervalle de confiance',
    'estimation par intervalle',
    'marge d’erreur',
    'taille d’échantillon',
    'niveau de confiance',
  ],
  objectifs: [
    'Comprendre le principe et l’interprétation correcte d’un intervalle de confiance.',
    'Calculer l’intervalle de confiance d’une moyenne dans un grand échantillon.',
    'Calculer l’intervalle de confiance d’une proportion.',
    'Connaître les conditions d’application de ces intervalles.',
    'Calculer la taille d’échantillon nécessaire pour obtenir une précision donnée.',
  ],
  sections: [
    {
      id: 'principe',
      titre: 'Principe de l’intervalle de confiance',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une estimation ponctuelle (une seule valeur, comme une moyenne d’échantillon) ne donne aucune idée de sa précision. L’intervalle de confiance complète cette estimation en fournissant une fourchette de valeurs plausibles pour le paramètre de population, assortie d’un niveau de confiance.',
        },
        {
          type: 'definition',
          terme: 'Intervalle de confiance',
          definition:
            'Intervalle calculé à partir des données d’un échantillon, construit selon une méthode telle que, si l’on répétait l’échantillonnage un grand nombre de fois, une proportion donnée (le niveau de confiance, souvent 95 %) des intervalles ainsi construits contiendrait effectivement la vraie valeur du paramètre de population.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Interprétation correcte d’un intervalle de confiance à 95 %',
          texte:
            'Un intervalle de confiance à 95 % ne signifie pas qu’il y a 95 % de chances que le paramètre se trouve dans cet intervalle précis : le paramètre de population est une valeur fixe, non aléatoire, qui s’y trouve ou ne s’y trouve pas. L’interprétation correcte porte sur la méthode de construction : si l’on répétait l’expérience un grand nombre de fois, environ 95 % des intervalles ainsi calculés contiendraient la vraie valeur du paramètre.',
        },
        {
          type: 'liste',
          items: [
            'Plus le niveau de confiance choisi est élevé, plus l’intervalle est large, à taille d’échantillon fixée.',
            'Plus la taille de l’échantillon augmente, plus l’intervalle se resserre, à niveau de confiance fixé.',
            'L’intervalle est toujours centré sur l’estimation ponctuelle calculée dans l’échantillon.',
          ],
        },
      ],
    },
    {
      id: 'ic-moyenne',
      titre: 'Intervalle de confiance d’une moyenne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Pour un grand échantillon, la distribution d’échantillonnage de la moyenne étant approximativement normale, l’intervalle de confiance d’une moyenne se construit directement à partir des quantiles de la loi normale centrée réduite.',
        },
        {
          type: 'formule',
          expression: 'IC95% = m ± 1,96 x s / racine(n)',
          legende:
            'Intervalle de confiance à 95 % de la moyenne de population, pour un grand échantillon (m = moyenne observée, s = écart-type estimé, n = taille de l’échantillon).',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Petit échantillon : recours à la loi de Student',
          texte:
            'Lorsque l’échantillon est de petite taille et que la variable étudiée suit une loi normale dans la population, il faut remplacer le coefficient 1,96 (quantile de la loi normale) par le quantile correspondant de la loi de Student à (n - 1) degrés de liberté, systématiquement supérieur à 1,96 pour un échantillon de petite taille. Ce point est développé dans la fiche consacrée à la comparaison de moyennes.',
        },
        {
          type: 'etapes',
          titre: 'Méthode de calcul de l’intervalle de confiance d’une moyenne',
          etapes: [
            {
              titre: 'Calculer la moyenne et l’écart-type de l’échantillon',
              detail: 'Obtenir m et s à partir des données observées.',
            },
            {
              titre: 'Calculer l’erreur standard',
              detail: 'Diviser l’écart-type s par racine(n).',
            },
            {
              titre: 'Choisir le coefficient selon le niveau de confiance',
              detail: '1,96 pour 95 % (ou le quantile de Student adapté pour un petit échantillon).',
            },
            {
              titre: 'Construire l’intervalle',
              detail: 'Ajouter et soustraire à m le produit du coefficient par l’erreur standard.',
            },
          ],
        },
      ],
    },
    {
      id: 'ic-proportion',
      titre: 'Intervalle de confiance d’une proportion',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’intervalle de confiance d’une proportion suit le même principe que celui de la moyenne, en s’appuyant sur l’approximation normale de la distribution d’échantillonnage de la proportion.',
        },
        {
          type: 'formule',
          expression: 'IC95% = p̂ ± 1,96 x racine( p̂(1 - p̂) / n )',
          legende: 'Intervalle de confiance à 95 % de la proportion de population, sous conditions d’application (p̂ = proportion observée dans l’échantillon, n = taille de l’échantillon).',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Conditions d’application',
          texte:
            'L’approximation normale utilisée pour construire cet intervalle n’est valable que si l’échantillon est suffisamment grand : les conditions usuelles sont n x p̂ ≥ 5 et n x (1 - p̂) ≥ 5. En dessous de ces effectifs, une méthode exacte doit être préférée.',
        },
        {
          type: 'tableau',
          titre: 'Exemple : proportion de patients répondeurs à un traitement',
          colonnes: ['Donnée', 'Valeur'],
          lignes: [
            ['Taille de l’échantillon (n)', '200'],
            ['Proportion observée (p̂)', '0,40'],
            ['Erreur standard estimée', 'racine(0,40 x 0,60 / 200) ≈ 0,0346'],
            ['IC95%', '0,40 ± 1,96 x 0,0346, soit environ [0,332 ; 0,468]'],
          ],
        },
      ],
    },
    {
      id: 'taille-echantillon',
      titre: 'Taille d’échantillon et interprétation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Avant de mener une étude, il est possible d’estimer a priori la taille d’échantillon nécessaire pour obtenir une précision donnée sur l’estimation d’une moyenne ou d’une proportion.',
        },
        {
          type: 'formule',
          expression: 'n = ( 1,96² x p(1 - p) ) / i²',
          legende:
            'Taille d’échantillon nécessaire pour estimer une proportion avec une précision (demi-largeur d’intervalle) i, au niveau de confiance 95 % ; p est une valeur attendue de la proportion, ou 0,5 par défaut si elle est inconnue (choix le plus prudent car il maximise n).',
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Pourquoi retenir p = 0,5 en l’absence d’information ?',
          texte:
            'Le produit p(1 - p) est maximal pour p = 0,5. En l’absence de connaissance préalable sur la proportion attendue, retenir p = 0,5 dans le calcul de taille d’échantillon garantit une précision au moins aussi bonne que celle visée, quelle que soit la valeur réelle de p.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Effet de la précision recherchée sur la taille d’échantillon',
          texte:
            'Comme i est au dénominateur au carré, diviser par deux la précision souhaitée (par exemple passer d’une marge de 5 points à une marge de 2,5 points) multiplie par 4 la taille d’échantillon nécessaire. Cette relation quadratique explique le coût élevé d’une très grande précision.',
        },
      ],
    },
  ],
  pointsCles: [
    'Un intervalle de confiance encadre une estimation ponctuelle d’une marge liée au niveau de confiance et à la précision de l’échantillon.',
    'L’interprétation correcte porte sur la méthode : environ 95 % des intervalles construits de cette façon contiendraient la vraie valeur du paramètre en cas de répétition de l’échantillonnage.',
    'IC95% d’une moyenne (grand échantillon) = m ± 1,96 x s / racine(n).',
    'IC95% d’une proportion = p̂ ± 1,96 x racine(p̂(1-p̂)/n), sous conditions np̂ ≥ 5 et n(1-p̂) ≥ 5.',
    'Pour un petit échantillon issu d’une population normale, le coefficient 1,96 est remplacé par le quantile de la loi de Student à (n-1) degrés de liberté.',
    'Plus le niveau de confiance demandé est élevé, plus l’intervalle est large ; plus l’échantillon est grand, plus l’intervalle est étroit.',
    'La taille d’échantillon nécessaire pour une précision donnée varie comme l’inverse du carré de cette précision.',
  ],
  erreursFrequentes: [
    'Affirmer qu’il y a 95 % de chances que le paramètre de population se trouve dans un intervalle de confiance donné, ce qui confond probabilité sur le paramètre (fixe) et probabilité sur la méthode.',
    'Utiliser le coefficient 1,96 pour un petit échantillon issu d’une population normale, sans passer par la loi de Student.',
    'Oublier de vérifier les conditions np̂ ≥ 5 et n(1-p̂) ≥ 5 avant de calculer un intervalle de confiance de proportion par approximation normale.',
    'Croire qu’un intervalle de confiance plus étroit est toujours préférable, sans tenir compte du niveau de confiance associé : un intervalle très étroit avec un niveau de confiance faible n’est pas plus informatif.',
    'Oublier que diviser la précision recherchée par deux multiplie la taille d’échantillon nécessaire par quatre, et non par deux.',
    'Confondre erreur standard (utilisée dans l’intervalle de confiance) et écart-type des observations individuelles.',
  ],
  mnemotechniques: [
    {
      moyen: '« La méthode est fiable à 95 %, pas le résultat »',
      explication: 'Le niveau de confiance qualifie la procédure de construction de l’intervalle sur une infinité d’échantillons hypothétiques, pas la probabilité que le paramètre soit dans l’intervalle obtenu une seule fois.',
    },
    {
      moyen: 'Plus précis = plus cher en effectif',
      explication: 'La taille d’échantillon nécessaire varie en 1/i² : diviser la marge d’erreur par 2 quadruple le nombre de sujets à inclure.',
    },
    {
      moyen: 'p = 0,5, le choix prudent',
      explication: 'Faute de mieux, retenir p = 0,5 dans un calcul de taille d’échantillon pour une proportion, car cela maximise la variance et donc la taille requise.',
    },
  ],
  sources: [
    'Bouyer J., Méthodes statistiques : méthodologie de la recherche en médecine, Estem',
    'Schwartz D., Méthodes statistiques à l’usage des médecins et des biologistes, Flammarion Médecine-Sciences',
    'Ancelle T., Statistique - Épidémiologie, Maloine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue4-intervalles-confiance-fc-01',
      recto: 'Que représente un intervalle de confiance à 95 % ?',
      verso: 'Une fourchette de valeurs plausibles pour le paramètre de population, construite par une méthode telle que, répétée un grand nombre de fois, environ 95 % des intervalles contiendraient la vraie valeur du paramètre.',
      type: 'definition',
      tags: ['intervalle de confiance'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-02',
      recto: 'Peut-on dire qu’il y a 95 % de chances que le paramètre soit dans un intervalle de confiance donné ?',
      verso: 'Non : le paramètre est une valeur fixe ; c’est la méthode de construction qui est fiable à 95 % sur une infinité d’échantillons hypothétiques.',
      type: 'mecanisme',
      tags: ['interprétation'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-03',
      recto: 'Donner la formule de l’IC95% d’une moyenne pour un grand échantillon.',
      verso: 'IC95% = m ± 1,96 x s / racine(n).',
      type: 'formule',
      tags: ['moyenne'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-04',
      recto: 'Donner la formule de l’IC95% d’une proportion.',
      verso: 'IC95% = p̂ ± 1,96 x racine( p̂(1 - p̂) / n ).',
      type: 'formule',
      tags: ['proportion'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-05',
      recto: 'Quelles sont les conditions d’application de l’IC95% d’une proportion par approximation normale ?',
      verso: 'n x p̂ ≥ 5 et n x (1 - p̂) ≥ 5.',
      type: 'mecanisme',
      tags: ['conditions'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-06',
      recto: 'Quel coefficient remplace 1,96 pour un petit échantillon issu d’une population normale ?',
      verso: 'Le quantile de la loi de Student à (n - 1) degrés de liberté, systématiquement supérieur à 1,96.',
      type: 'mecanisme',
      tags: ['petit échantillon', 'Student'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-07',
      recto: 'Comment évolue la largeur d’un intervalle de confiance quand n augmente, à niveau de confiance fixé ?',
      verso: 'Elle diminue, puisque l’erreur standard décroît en 1 / racine(n).',
      type: 'mecanisme',
      tags: ['taille échantillon'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-08',
      recto: 'Comment évolue la largeur d’un intervalle de confiance quand le niveau de confiance augmente, à n fixé ?',
      verso: 'Elle augmente : un niveau de confiance plus élevé exige un intervalle plus large.',
      type: 'mecanisme',
      tags: ['niveau de confiance'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-09',
      recto: 'Donner la formule de la taille d’échantillon nécessaire pour estimer une proportion avec une précision i.',
      verso: 'n = (1,96² x p(1 - p)) / i².',
      type: 'formule',
      tags: ['taille échantillon'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-10',
      recto: 'Pourquoi retient-on souvent p = 0,5 dans le calcul de taille d’échantillon d’une proportion ?',
      verso: 'Parce que p(1-p) est maximal en p = 0,5, ce qui donne l’estimation la plus prudente (la plus grande) de la taille nécessaire.',
      type: 'mecanisme',
      tags: ['taille échantillon'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-11',
      recto: 'Diviser par deux la précision recherchée (marge d’erreur) a quel effet sur la taille d’échantillon nécessaire ?',
      verso: 'Elle est multipliée par 4, car i figure au carré au dénominateur de la formule.',
      type: 'chiffre',
      tags: ['taille échantillon'],
    },
    {
      id: 'ue4-intervalles-confiance-fc-12',
      recto: 'L’intervalle de confiance est-il toujours centré sur l’estimation ponctuelle de l’échantillon ?',
      verso: 'Oui, pour les intervalles usuels de type m ± marge ou p̂ ± marge.',
      type: 'mecanisme',
      tags: ['principe'],
    },
  ],
  qcm: [
    {
      id: 'ue4-intervalles-confiance-qcm-01',
      enonce: 'Concernant le principe de l’intervalle de confiance, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un intervalle de confiance encadre une estimation ponctuelle du paramètre.',
          vraie: true,
          justification: 'C’est exactement son rôle : compléter une estimation ponctuelle par une fourchette de précision.',
        },
        {
          lettre: 'B',
          texte: 'Un niveau de confiance de 95 % signifie qu’il y a 95 % de chances que le paramètre de population soit dans l’intervalle calculé.',
          vraie: false,
          justification: 'Le paramètre est fixe, non aléatoire ; l’interprétation correcte porte sur la fiabilité de la méthode répétée sur de nombreux échantillons.',
        },
        {
          lettre: 'C',
          texte: 'Plus le niveau de confiance demandé augmente, plus l’intervalle s’élargit, à taille d’échantillon fixée.',
          vraie: true,
          justification: 'Exiger une plus grande fiabilité de la méthode impose d’élargir l’intervalle.',
        },
        {
          lettre: 'D',
          texte: 'Un intervalle de confiance est toujours calculé sans tenir compte de la taille de l’échantillon.',
          vraie: false,
          justification: 'Au contraire, la taille de l’échantillon intervient directement dans le calcul de l’erreur standard, donc dans la largeur de l’intervalle.',
        },
        {
          lettre: 'E',
          texte: 'L’intervalle de confiance est centré sur l’estimation ponctuelle calculée dans l’échantillon.',
          vraie: true,
          justification: 'C’est le cas pour les intervalles de type estimation ± marge d’erreur.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. L’interprétation correcte de l’intervalle de confiance est un point systématiquement testé.',
      difficulte: 2,
    },
    {
      id: 'ue4-intervalles-confiance-qcm-02',
      enonce: 'Concernant l’intervalle de confiance d’une moyenne, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Pour un grand échantillon, IC95% = m ± 1,96 x s / racine(n).',
          vraie: true,
          justification: 'C’est la formule usuelle, fondée sur l’approximation normale de la distribution d’échantillonnage de la moyenne.',
        },
        {
          lettre: 'B',
          texte: 'Pour un petit échantillon issu d’une population normale, le coefficient utilisé est toujours 1,96.',
          vraie: false,
          justification: 'Il faut alors utiliser le quantile de la loi de Student à (n-1) degrés de liberté, supérieur à 1,96.',
        },
        {
          lettre: 'C',
          texte: 'L’intervalle utilise l’erreur standard de la moyenne, s / racine(n).',
          vraie: true,
          justification: 'C’est bien cette quantité, et non l’écart-type seul, qui mesure la précision de l’estimation de la moyenne.',
        },
        {
          lettre: 'D',
          texte: 'Doubler la taille de l’échantillon divise systématiquement par deux la largeur de l’intervalle.',
          vraie: false,
          justification: 'La largeur varie en 1/racine(n) : doubler n divise la largeur par racine(2), soit environ 1,41, pas par 2.',
        },
        {
          lettre: 'E',
          texte: 'Plus l’écart-type s de l’échantillon est grand, plus l’intervalle de confiance est large, toutes choses égales par ailleurs.',
          vraie: true,
          justification: 'Une plus grande dispersion des observations individuelles élargit mécaniquement l’erreur standard, donc l’intervalle.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Attention à l’effet exact (en racine de n) de la taille d’échantillon sur la largeur de l’intervalle.',
      difficulte: 2,
    },
    {
      id: 'ue4-intervalles-confiance-qcm-03',
      enonce: 'Concernant l’intervalle de confiance d’une proportion, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'IC95% = p̂ ± 1,96 x racine( p̂(1 - p̂) / n ).',
          vraie: true,
          justification: 'C’est la formule usuelle par approximation normale de la distribution d’échantillonnage de la proportion.',
        },
        {
          lettre: 'B',
          texte: 'Cette formule est valable quel que soit l’effectif de l’échantillon, même très petit.',
          vraie: false,
          justification: 'Elle nécessite np̂ ≥ 5 et n(1 - p̂) ≥ 5 ; en dessous, une méthode exacte doit être utilisée.',
        },
        {
          lettre: 'C',
          texte: 'Pour une même taille d’échantillon, l’intervalle est plus large quand p̂ est proche de 0,5 que quand p̂ est proche de 0 ou de 1.',
          vraie: true,
          justification: 'Le terme p̂(1-p̂) est maximal pour p̂ = 0,5, ce qui maximise l’erreur standard et donc la largeur de l’intervalle.',
        },
        {
          lettre: 'D',
          texte: 'L’intervalle de confiance d’une proportion peut théoriquement déborder en dehors de l’intervalle [0 ; 1] avec cette formule approximative, en particulier pour p̂ proche de 0 ou de 1 et n petit.',
          vraie: true,
          justification: 'C’est une limite connue de l’approximation normale, qui ne tient pas compte des bornes naturelles d’une proportion.',
        },
        {
          lettre: 'E',
          texte: 'p̂ est toujours calculé comme la moyenne de plusieurs proportions issues de sous-groupes.',
          vraie: false,
          justification: 'p̂ est simplement le rapport du nombre d’individus présentant la caractéristique étudiée sur l’effectif total de l’échantillon.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir la limite de l’approximation normale pour les proportions extrêmes.',
      difficulte: 2,
    },
    {
      id: 'ue4-intervalles-confiance-qcm-04',
      enonce: 'Concernant la taille d’échantillon nécessaire pour une précision donnée, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'n = (1,96² x p(1-p)) / i² pour estimer une proportion à 95 % avec une précision i.',
          vraie: true,
          justification: 'C’est la formule usuelle de calcul de taille d’échantillon pour une proportion.',
        },
        {
          lettre: 'B',
          texte: 'Diviser par deux la précision recherchée i divise par deux la taille d’échantillon nécessaire.',
          vraie: false,
          justification: 'La taille d’échantillon varie en 1/i² : diviser i par deux multiplie n par 4.',
        },
        {
          lettre: 'C',
          texte: 'En l’absence de valeur attendue pour p, retenir p = 0,5 donne l’estimation la plus prudente de n.',
          vraie: true,
          justification: 'p(1-p) est maximal pour p = 0,5, ce qui conduit à la plus grande taille d’échantillon nécessaire, donc à la précision garantie même dans le pire des cas.',
        },
        {
          lettre: 'D',
          texte: 'Augmenter le niveau de confiance visé (par exemple de 95 % à 99 %) diminue la taille d’échantillon nécessaire.',
          vraie: false,
          justification: 'Un niveau de confiance plus élevé impose un coefficient plus grand (2,576 au lieu de 1,96), ce qui augmente la taille d’échantillon nécessaire.',
        },
        {
          lettre: 'E',
          texte: 'La taille d’échantillon nécessaire dépend de la précision souhaitée, du niveau de confiance visé et de la proportion attendue.',
          vraie: true,
          justification: 'Ce sont exactement les trois éléments qui entrent dans la formule de calcul de n.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. La relation quadratique entre précision et taille d’échantillon est un piège fréquent.',
      difficulte: 2,
    },
    {
      id: 'ue4-intervalles-confiance-qcm-05',
      enonce: 'Un essai clinique sur 100 patients donne un taux de guérison p̂ = 0,60, avec IC95% = [0,504 ; 0,696]. Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Cet intervalle a été construit en utilisant le coefficient 1,96.',
          vraie: true,
          justification: 'C’est le coefficient standard pour un intervalle de confiance à 95 % fondé sur l’approximation normale.',
        },
        {
          lettre: 'B',
          texte: 'On peut affirmer qu’il y a 95 % de chances que le vrai taux de guérison dans la population soit compris entre 0,504 et 0,696.',
          vraie: false,
          justification: 'C’est une reformulation incorrecte : le taux réel est fixe ; c’est la méthode de construction qui est fiable à 95 % sur des répétitions de l’échantillonnage.',
        },
        {
          lettre: 'C',
          texte: 'Avec un échantillon deux fois plus grand et un p̂ similaire, l’intervalle de confiance serait probablement plus étroit.',
          vraie: true,
          justification: 'Augmenter n réduit l’erreur standard, donc resserre l’intervalle, toutes choses égales par ailleurs.',
        },
        {
          lettre: 'D',
          texte: 'Les conditions d’application de cette formule (np̂ ≥ 5 et n(1-p̂) ≥ 5) sont ici respectées.',
          vraie: true,
          justification: 'np̂ = 100 x 0,60 = 60 et n(1-p̂) = 100 x 0,40 = 40, tous deux largement supérieurs à 5.',
        },
        {
          lettre: 'E',
          texte: 'La largeur totale de cet intervalle est d’environ 0,192.',
          vraie: true,
          justification: '0,696 - 0,504 = 0,192.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. Toujours vérifier les conditions d’application avant d’interpréter un intervalle donné.',
      difficulte: 2,
    },
    {
      id: 'ue4-intervalles-confiance-qcm-06',
      enonce: 'Concernant les facteurs qui influencent la largeur d’un intervalle de confiance, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une augmentation de la taille de l’échantillon resserre l’intervalle, à niveau de confiance fixé.',
          vraie: true,
          justification: 'L’erreur standard diminue avec n, donc l’intervalle se resserre.',
        },
        {
          lettre: 'B',
          texte: 'Une augmentation du niveau de confiance visé élargit l’intervalle, à taille d’échantillon fixée.',
          vraie: true,
          justification: 'Un niveau de confiance plus exigeant impose un coefficient (quantile de la loi normale ou de Student) plus élevé.',
        },
        {
          lettre: 'C',
          texte: 'Une plus grande dispersion des observations dans l’échantillon élargit l’intervalle de confiance d’une moyenne.',
          vraie: true,
          justification: 'Un écart-type s plus élevé augmente directement l’erreur standard s/racine(n).',
        },
        {
          lettre: 'D',
          texte: 'La largeur d’un intervalle de confiance ne dépend jamais du paramètre lui-même estimé.',
          vraie: false,
          justification: 'Pour une proportion, la largeur dépend explicitement de p̂ via le terme p̂(1-p̂), maximal en p̂ = 0,5.',
        },
        {
          lettre: 'E',
          texte: 'Un intervalle de confiance très étroit est toujours préférable, indépendamment du niveau de confiance associé.',
          vraie: false,
          justification: 'Un intervalle étroit obtenu avec un niveau de confiance très faible est peu informatif ; la largeur ne s’interprète jamais indépendamment du niveau de confiance.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Toujours raisonner conjointement sur n, le niveau de confiance et la dispersion des données.',
      difficulte: 2,
    },
  ],
};
