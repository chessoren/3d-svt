import type { Fiche } from '../../types';

export const ficheLoiNormale: Fiche = {
  id: 'ue4-loi-normale',
  ue: 'ue4',
  titre: 'La loi normale',
  sousTitre: 'Densité, propriétés, loi normale centrée réduite, lecture des tables et théorème central limite',
  chapitre: 'Descriptive et probabilités',
  ordre: 5,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'loi normale',
    'loi de Gauss',
    'loi normale centrée réduite',
    'table de la loi normale',
    'théorème central limite',
  ],
  objectifs: [
    'Décrire la densité et les propriétés de la loi normale.',
    'Effectuer le changement de variable vers la loi normale centrée réduite.',
    'Utiliser une table de la loi normale centrée réduite pour calculer une probabilité ou un quantile.',
    'Connaître les conditions d’approximation d’une loi binomiale par une loi normale.',
    'Énoncer le théorème central limite et ses conséquences pratiques.',
  ],
  sections: [
    {
      id: 'densite-proprietes',
      titre: 'Densité et propriétés de la loi normale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La loi normale, ou loi de Gauss, est la loi continue la plus utilisée en statistique, car de nombreuses variables biologiques s’en approchent et car elle intervient naturellement dans les grands théorèmes limites.',
        },
        {
          type: 'formule',
          expression: 'f(x) = [ 1 / (σ x racine(2π)) ] x exp[ - (x - m)² / (2σ²) ]',
          legende: 'Densité de la loi normale de moyenne m et d’écart-type σ, notée N(m, σ). La courbe est en forme de cloche, symétrique autour de m.',
        },
        {
          type: 'liste',
          items: [
            'La courbe est symétrique par rapport à la moyenne m : moyenne, médiane et mode sont confondus.',
            'La courbe présente deux points d’inflexion, situés en m - σ et m + σ.',
            'L’aire totale sous la courbe vaut 1, comme pour toute densité de probabilité.',
            'La loi normale est entièrement déterminée par deux paramètres : sa moyenne m et son écart-type σ.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Règle des 68-95-99,7 %',
          texte:
            'Pour une loi normale N(m, σ) : environ 68 % des valeurs sont comprises entre m - σ et m + σ ; environ 95 % des valeurs sont comprises entre m - 1,96σ et m + 1,96σ ; environ 99,7 % des valeurs sont comprises entre m - 3σ et m + 3σ.',
        },
      ],
    },
    {
      id: 'loi-normale-centree-reduite',
      titre: 'La loi normale centrée réduite',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Pour éviter d’avoir une table différente pour chaque couple (m, σ), on ramène systématiquement le calcul à une loi normale unique, de moyenne 0 et d’écart-type 1, appelée loi normale centrée réduite et notée N(0,1).',
        },
        {
          type: 'formule',
          expression: 'Z = (X - m) / σ',
          legende: 'Changement de variable centré réduit : si X suit une loi N(m, σ), alors Z suit une loi N(0,1).',
        },
        {
          type: 'etapes',
          titre: 'Méthode de calcul d’une probabilité avec la loi normale',
          etapes: [
            {
              titre: 'Centrer et réduire',
              detail: 'Transformer la valeur seuil x en sa valeur réduite z = (x - m) / σ.',
            },
            {
              titre: 'Lire la table de la loi N(0,1)',
              detail: 'Utiliser la table pour obtenir Π(z) = P(Z ≤ z), fonction de répartition de la loi normale centrée réduite.',
            },
            {
              titre: 'Revenir à la question posée',
              detail:
                'Adapter le résultat lu selon la question : P(X ≤ x) = Π(z) ; P(X > x) = 1 - Π(z) ; par symétrie, Π(-z) = 1 - Π(z).',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Symétrie de la table',
          texte:
            'La plupart des tables ne donnent que les valeurs de Π(z) pour z positif. Pour z négatif, on utilise la symétrie de la courbe : Π(-z) = 1 - Π(z). Cette astuce évite d’avoir besoin d’une table étendue aux valeurs négatives.',
        },
      ],
    },
    {
      id: 'valeurs-usuelles',
      titre: 'Valeurs usuelles et quantiles',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Certains quantiles de la loi normale centrée réduite reviennent si souvent dans les calculs d’intervalles de confiance et de tests statistiques qu’il est indispensable de les connaître par cœur.',
        },
        {
          type: 'tableau',
          titre: 'Quantiles usuels de la loi normale centrée réduite',
          colonnes: ['Seuil bilatéral', 'Valeur de z (en valeur absolue)', 'Usage typique'],
          lignes: [
            ['90 %', '1,645', 'Intervalle de confiance ou test à 10 %'],
            ['95 %', '1,96', 'Intervalle de confiance ou test à 5 %, le plus utilisé en médecine'],
            ['99 %', '2,576', 'Intervalle de confiance ou test à 1 %'],
          ],
        },
        {
          type: 'formule',
          expression: 'P(-1,96 < Z < 1,96) = 0,95',
          legende: 'Valeur à retenir par cœur : c’est elle qui fonde le coefficient 1,96 des intervalles de confiance à 95 %, l’un des plus utilisés en recherche médicale.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre seuil unilatéral et bilatéral',
          texte:
            'La valeur 1,96 correspond à un seuil bilatéral à 95 % (2,5 % dans chaque queue de la distribution). Pour un seuil unilatéral à 95 % (5 % dans une seule queue), la valeur de z à utiliser est différente (environ 1,645). Bien identifier si le test ou l’intervalle recherché est unilatéral ou bilatéral avant de choisir la valeur de z.',
        },
      ],
    },
    {
      id: 'approximation-binomiale-clt',
      titre: 'Approximation de la binomiale et théorème central limite',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La loi normale doit une grande partie de son importance pratique au théorème central limite, qui explique pourquoi tant de variables biologiques et de statistiques calculées sur de grands échantillons suivent approximativement une loi normale.',
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Théorème central limite (TCL)',
          texte:
            'Lorsque l’on additionne (ou que l’on moyenne) un grand nombre de variables aléatoires indépendantes et de même loi, la distribution de cette somme (ou de cette moyenne) tend vers une loi normale quand le nombre de variables augmente, quelle que soit la loi initiale de chaque variable, sous réserve que celle-ci ait une espérance et une variance finies.',
        },
        {
          type: 'formule',
          expression: 'Si X suit B(n,p) avec np ≥ 5 et n(1 - p) ≥ 5, alors X suit approximativement N(np, racine(np(1 - p)))',
          legende: 'Approximation normale de la loi binomiale, conséquence du théorème central limite appliqué à la somme de n variables de Bernoulli indépendantes.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Portée du théorème central limite',
          texte:
            'Le théorème central limite s’applique à la distribution d’une somme ou d’une moyenne de variables, pas à la distribution d’une variable individuelle : une variable biologique isolée n’a aucune raison théorique de suivre une loi normale, même lorsque la moyenne calculée sur un grand échantillon de cette variable en suit approximativement une.',
        },
      ],
    },
  ],
  pointsCles: [
    'La loi normale N(m, σ) est symétrique autour de sa moyenne m, qui est confondue avec la médiane et le mode.',
    'Le changement de variable Z = (X - m) / σ ramène toute loi normale à la loi normale centrée réduite N(0,1).',
    'Environ 95 % des valeurs d’une loi normale sont comprises entre m - 1,96σ et m + 1,96σ.',
    'La valeur z = 1,96 correspond à un seuil bilatéral à 95 %, la plus utilisée en intervalle de confiance et en test statistique.',
    'Une loi binomiale B(n,p) s’approche par une loi normale quand np ≥ 5 et n(1 - p) ≥ 5.',
    'Le théorème central limite explique que la distribution d’une moyenne ou d’une somme d’un grand nombre de variables indépendantes tend vers une loi normale, quelle que soit la loi initiale.',
    'Le théorème central limite porte sur la distribution d’une moyenne ou d’une somme, pas sur celle d’une observation individuelle.',
  ],
  erreursFrequentes: [
    'Confondre seuil unilatéral et seuil bilatéral, et donc utiliser 1,96 alors que 1,645 était attendu, ou inversement.',
    'Oublier la symétrie de la table de la loi normale centrée réduite pour lire une probabilité correspondant à une valeur de z négative.',
    'Croire qu’une variable biologique individuelle suit nécessairement une loi normale, alors que seul le TCL garantit la normalité approchée d’une moyenne calculée sur un grand échantillon.',
    'Appliquer l’approximation normale d’une loi binomiale sans vérifier les deux conditions np ≥ 5 et n(1 - p) ≥ 5.',
    'Confondre la densité f(x) de la loi normale avec une probabilité directe, alors que seule une aire sous la courbe correspond à une probabilité.',
    'Oublier que moyenne, médiane et mode sont confondus uniquement pour une distribution parfaitement normale (ou symétrique), pas pour toute distribution.',
  ],
  mnemotechniques: [
    {
      moyen: '« 1, 2, 3 sigma » pour 68, 95, 99,7',
      explication: 'Retenir dans l’ordre croissant : un écart-type autour de la moyenne couvre environ 68 % des valeurs, deux écart-types environ 95 %, trois écart-types environ 99,7 %.',
    },
    {
      moyen: '1,96, le chiffre clé du 95 %',
      explication: 'La valeur 1,96 doit devenir un réflexe : elle apparaît dans quasiment tous les intervalles de confiance à 95 % calculés en médecine.',
    },
    {
      moyen: 'TCL : la moyenne s’arrondit, pas l’individu',
      explication: 'Le théorème central limite normalise les moyennes de grands échantillons, jamais les valeurs individuelles isolées.',
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
      id: 'ue4-loi-normale-fc-01',
      recto: 'Par quels deux paramètres la loi normale est-elle entièrement déterminée ?',
      verso: 'Sa moyenne m et son écart-type σ.',
      type: 'definition',
      tags: ['loi normale'],
    },
    {
      id: 'ue4-loi-normale-fc-02',
      recto: 'Que vaut le changement de variable centré réduit ?',
      verso: 'Z = (X - m) / σ, qui transforme une loi N(m, σ) en loi N(0,1).',
      type: 'formule',
      tags: ['centrée réduite'],
    },
    {
      id: 'ue4-loi-normale-fc-03',
      recto: 'Quelle proportion des valeurs d’une loi normale est comprise entre m - σ et m + σ ?',
      verso: 'Environ 68 %.',
      type: 'chiffre',
      tags: ['règle 68-95-99,7'],
    },
    {
      id: 'ue4-loi-normale-fc-04',
      recto: 'Quelle proportion des valeurs d’une loi normale est comprise entre m - 1,96σ et m + 1,96σ ?',
      verso: 'Environ 95 %.',
      type: 'chiffre',
      tags: ['règle 68-95-99,7'],
    },
    {
      id: 'ue4-loi-normale-fc-05',
      recto: 'Quelle valeur de z correspond à un seuil bilatéral à 95 % ?',
      verso: '1,96.',
      type: 'chiffre',
      tags: ['quantiles'],
    },
    {
      id: 'ue4-loi-normale-fc-06',
      recto: 'Quelle valeur de z correspond à un seuil bilatéral à 99 % ?',
      verso: '2,576.',
      type: 'chiffre',
      tags: ['quantiles'],
    },
    {
      id: 'ue4-loi-normale-fc-07',
      recto: 'Comment utiliser la symétrie de la loi normale pour lire Π(-z) sur une table donnant les z positifs ?',
      verso: 'Π(-z) = 1 - Π(z).',
      type: 'mecanisme',
      tags: ['table'],
    },
    {
      id: 'ue4-loi-normale-fc-08',
      recto: 'Sous quelles conditions une loi binomiale B(n,p) est-elle approchée par une loi normale ?',
      verso: 'Quand np ≥ 5 et n(1 - p) ≥ 5 ; la loi normale approchante a pour moyenne np et pour variance np(1 - p).',
      type: 'mecanisme',
      tags: ['approximation'],
    },
    {
      id: 'ue4-loi-normale-fc-09',
      recto: 'Énoncer le théorème central limite.',
      verso: 'La distribution de la moyenne (ou de la somme) d’un grand nombre de variables indépendantes et de même loi tend vers une loi normale, quelle que soit la loi initiale, si l’espérance et la variance sont finies.',
      type: 'definition',
      tags: ['TCL'],
    },
    {
      id: 'ue4-loi-normale-fc-10',
      recto: 'Le TCL garantit-il qu’une observation individuelle suit une loi normale ?',
      verso: 'Non : il porte sur la distribution d’une moyenne ou d’une somme de variables, pas sur une observation individuelle isolée.',
      type: 'mecanisme',
      tags: ['TCL', 'pièges'],
    },
    {
      id: 'ue4-loi-normale-fc-11',
      recto: 'Moyenne, médiane et mode sont-ils confondus dans une loi normale ?',
      verso: 'Oui, en raison de la symétrie parfaite de la courbe en cloche autour de la moyenne.',
      type: 'definition',
      tags: ['propriétés'],
    },
    {
      id: 'ue4-loi-normale-fc-12',
      recto: 'Où se situent les points d’inflexion de la courbe de densité normale ?',
      verso: 'En m - σ et m + σ.',
      type: 'chiffre',
      tags: ['propriétés'],
    },
  ],
  qcm: [
    {
      id: 'ue4-loi-normale-qcm-01',
      enonce: 'Concernant les propriétés générales de la loi normale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La courbe de densité est symétrique par rapport à la moyenne.',
          vraie: true,
          justification: 'C’est une propriété fondamentale de la loi normale.',
        },
        {
          lettre: 'B',
          texte: 'La moyenne, la médiane et le mode sont confondus.',
          vraie: true,
          justification: 'Conséquence directe de la symétrie parfaite de la distribution normale.',
        },
        {
          lettre: 'C',
          texte: 'La loi normale est entièrement déterminée par un seul paramètre.',
          vraie: false,
          justification: 'Elle est déterminée par deux paramètres : la moyenne m et l’écart-type σ.',
        },
        {
          lettre: 'D',
          texte: 'La densité de la loi normale peut prendre des valeurs négatives.',
          vraie: false,
          justification: 'Une densité de probabilité est toujours positive ou nulle, jamais négative.',
        },
        {
          lettre: 'E',
          texte: 'Toute variable biologique suit nécessairement une loi normale.',
          vraie: false,
          justification: 'C’est un abus fréquent ; de nombreuses variables biologiques sont asymétriques et ne suivent pas une loi normale.',
        },
      ],
      correction: 'Réponses exactes : A et B. La loi normale est un modèle, pas une propriété universelle des variables biologiques.',
      difficulte: 1,
    },
    {
      id: 'ue4-loi-normale-qcm-02',
      enonce: 'Concernant le changement de variable centré réduit, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Z = (X - m) / σ suit une loi N(0,1) si X suit une loi N(m, σ).',
          vraie: true,
          justification: 'C’est précisément la définition du changement de variable centré réduit.',
        },
        {
          lettre: 'B',
          texte: 'Ce changement de variable permet d’utiliser une seule table pour toutes les lois normales.',
          vraie: true,
          justification: 'C’est son principal intérêt pratique : ramener tout calcul à la table de N(0,1).',
        },
        {
          lettre: 'C',
          texte: 'Π(-z) = Π(z) pour tout z.',
          vraie: false,
          justification: 'Par symétrie, Π(-z) = 1 - Π(z), et non Π(z).',
        },
        {
          lettre: 'D',
          texte: 'La moyenne de la loi normale centrée réduite est 0.',
          vraie: true,
          justification: 'C’est la définition même de « centrée » : moyenne nulle.',
        },
        {
          lettre: 'E',
          texte: 'L’écart-type de la loi normale centrée réduite est 1.',
          vraie: true,
          justification: 'C’est la définition même de « réduite » : écart-type égal à 1.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Le piège porte sur la relation de symétrie exacte entre Π(z) et Π(-z).',
      difficulte: 2,
    },
    {
      id: 'ue4-loi-normale-qcm-03',
      enonce: 'Concernant les quantiles usuels de la loi normale centrée réduite, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'P(-1,96 < Z < 1,96) est environ égal à 0,95.',
          vraie: true,
          justification: 'C’est la valeur à retenir par cœur pour les intervalles de confiance à 95 %.',
        },
        {
          lettre: 'B',
          texte: 'Le quantile bilatéral à 99 % correspond à z = 2,576.',
          vraie: true,
          justification: 'C’est la valeur usuelle retenue pour un seuil bilatéral à 1 %.',
        },
        {
          lettre: 'C',
          texte: 'Le quantile bilatéral à 90 % correspond à z = 1,645.',
          vraie: true,
          justification: 'C’est la valeur usuelle retenue pour un seuil bilatéral à 10 %.',
        },
        {
          lettre: 'D',
          texte: 'Plus le seuil de confiance bilatéral augmente, plus la valeur de z correspondante diminue.',
          vraie: false,
          justification: 'C’est l’inverse : plus l’intervalle doit couvrir une grande proportion des valeurs, plus il doit être large, donc plus z augmente.',
        },
        {
          lettre: 'E',
          texte: 'La valeur 1,96 correspond systématiquement à un seuil unilatéral, quel que soit le contexte.',
          vraie: false,
          justification: '1,96 correspond à un seuil bilatéral à 95 % ; un seuil unilatéral à 95 % correspond à une valeur de z différente (environ 1,645).',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Bien retenir la relation croissante entre niveau de confiance et valeur de z.',
      difficulte: 2,
    },
    {
      id: 'ue4-loi-normale-qcm-04',
      enonce: 'Concernant l’approximation normale de la loi binomiale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les conditions usuelles sont np ≥ 5 et n(1 - p) ≥ 5.',
          vraie: true,
          justification: 'Ce sont les conditions classiquement retenues pour cette approximation.',
        },
        {
          lettre: 'B',
          texte: 'La loi normale approchante a pour moyenne np.',
          vraie: true,
          justification: 'C’est la moyenne de la loi binomiale d’origine, conservée dans l’approximation.',
        },
        {
          lettre: 'C',
          texte: 'La loi normale approchante a pour variance np(1 - p).',
          vraie: true,
          justification: 'C’est également la variance de la loi binomiale d’origine, conservée dans l’approximation.',
        },
        {
          lettre: 'D',
          texte: 'Cette approximation est justifiée par le théorème central limite.',
          vraie: true,
          justification: 'Une variable binomiale est une somme de n variables de Bernoulli indépendantes, dont la distribution tend vers une loi normale quand n augmente.',
        },
        {
          lettre: 'E',
          texte: 'Cette approximation est valable quel que soit p, dès lors que n est très grand.',
          vraie: false,
          justification: 'Même pour un n très grand, si p est extrêmement petit, np peut rester inférieur à 5 et l’approximation normale reste alors mauvaise ; c’est l’approximation de Poisson qui est alors préférable.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et D. Les deux conditions numériques doivent toujours être vérifiées explicitement.',
      difficulte: 2,
    },
    {
      id: 'ue4-loi-normale-qcm-05',
      enonce: 'Concernant le théorème central limite, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il s’applique à la moyenne d’un grand nombre de variables indépendantes et de même loi.',
          vraie: true,
          justification: 'C’est l’énoncé même du théorème central limite.',
        },
        {
          lettre: 'B',
          texte: 'Il exige que les variables sommées suivent elles-mêmes une loi normale.',
          vraie: false,
          justification: 'C’est justement l’inverse : le TCL s’applique quelle que soit la loi initiale des variables, pourvu que leur espérance et leur variance soient finies.',
        },
        {
          lettre: 'C',
          texte: 'Il justifie que la moyenne d’un échantillon suffisamment grand suit approximativement une loi normale.',
          vraie: true,
          justification: 'C’est la principale conséquence pratique du TCL en statistique inférentielle.',
        },
        {
          lettre: 'D',
          texte: 'Il garantit qu’une seule observation individuelle suit une loi normale.',
          vraie: false,
          justification: 'Le TCL ne dit rien sur une observation individuelle isolée, seulement sur la moyenne ou la somme d’un grand nombre d’observations.',
        },
        {
          lettre: 'E',
          texte: 'Il fonde en partie l’usage très large de la loi normale en statistique inférentielle.',
          vraie: true,
          justification: 'C’est précisément pour cette raison que la loi normale intervient dans la plupart des intervalles de confiance et tests d’hypothèse.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le TCL est l’un des résultats les plus importants à maîtriser en UE4.',
      difficulte: 2,
    },
    {
      id: 'ue4-loi-normale-qcm-06',
      enonce: 'Une variable X suit une loi normale N(100, 15). Quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La valeur réduite associée à x = 130 est z = 2.',
          vraie: true,
          justification: 'z = (130 - 100) / 15 = 30 / 15 = 2.',
        },
        {
          lettre: 'B',
          texte: 'Environ 95 % des valeurs de X sont comprises entre 70,6 et 129,4.',
          vraie: true,
          justification: 'm ± 1,96σ = 100 ± 1,96 x 15 = 100 ± 29,4, soit environ [70,6 ; 129,4].',
        },
        {
          lettre: 'C',
          texte: 'P(X > 100) = 0,5.',
          vraie: true,
          justification: 'Par symétrie autour de la moyenne, la moitié des valeurs sont supérieures à la moyenne.',
        },
        {
          lettre: 'D',
          texte: 'L’écart-type de X est 100.',
          vraie: false,
          justification: 'C’est la moyenne qui vaut 100 ; l’écart-type de X est 15.',
        },
        {
          lettre: 'E',
          texte: 'Environ 68 % des valeurs de X sont comprises entre 85 et 115.',
          vraie: true,
          justification: 'm ± σ = 100 ± 15, soit l’intervalle [85 ; 115], qui contient environ 68 % des valeurs.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Application directe des règles 68-95-99,7 % et du changement de variable centré réduit.',
      difficulte: 2,
    },
  ],
};
