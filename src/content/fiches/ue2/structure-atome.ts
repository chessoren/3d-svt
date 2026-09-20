import type { Fiche } from '../../types';

export const ficheStructureAtome: Fiche = {
  id: 'ue2-structure-atome',
  ue: 'ue2',
  titre: 'Structure de l’atome et classification périodique',
  sousTitre: 'Nombres quantiques, configuration électronique et périodicité des propriétés',
  chapitre: 'Chimie générale',
  ordre: 1,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'nombres quantiques',
    'configuration électronique',
    'règle de Klechkowski',
    'règle de Hund',
    'principe de Pauli',
    'classification périodique',
    'électronégativité',
    'énergie d’ionisation',
  ],
  objectifs: [
    'Décrire les constituants de l’atome et la notation isotopique.',
    'Définir les quatre nombres quantiques et les orbitales atomiques qu’ils décrivent.',
    'Établir une configuration électronique en appliquant les règles de Klechkowski, de Pauli et de Hund.',
    'Situer un élément dans la classification périodique à partir de sa configuration électronique.',
    'Décrire les tendances périodiques du rayon atomique, de l’énergie d’ionisation et de l’électronégativité.',
  ],
  sections: [
    {
      id: 'constituants-atome',
      titre: 'Constituants de l’atome',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’atome est constitué d’un noyau central, contenant protons et neutrons, autour duquel se répartissent les électrons. Le noyau concentre la quasi-totalité de la masse de l’atome dans un volume environ cent mille fois plus petit que le volume atomique total.",
        },
        {
          type: 'tableau',
          titre: 'Les particules constitutives de l’atome',
          colonnes: ['Particule', 'Charge', 'Masse approximative', 'Localisation'],
          lignes: [
            ['Proton', '+e (positive)', '1 unité de masse atomique', 'Noyau'],
            ['Neutron', 'Nulle', '1 unité de masse atomique', 'Noyau'],
            ['Électron', '-e (négative)', 'Environ 1/1840 de celle du proton', 'Nuage électronique'],
          ],
        },
        {
          type: 'definition',
          terme: 'Numéro atomique Z et nombre de masse A',
          definition:
            "Le numéro atomique Z est le nombre de protons du noyau ; il définit l’élément chimique et, pour un atome neutre, il est aussi égal au nombre d’électrons. Le nombre de masse A est le nombre total de nucléons, c’est-à-dire la somme des protons et des neutrons : A = Z + N.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Notation isotopique',
          texte:
            "Un noyau est représenté par la notation A/Z X, où X est le symbole chimique, A le nombre de masse placé en haut à gauche et Z le numéro atomique placé en bas à gauche. Deux isotopes d’un même élément ont le même Z mais un A différent : ils possèdent donc le même nombre de protons et un nombre de neutrons différent.",
        },
        {
          type: 'paragraphe',
          texte:
            "Un atome neutre possède autant d’électrons que de protons. La perte ou le gain d’un ou plusieurs électrons donne un ion : un cation (charge positive) résulte d’une perte d’électrons, un anion (charge négative) d’un gain d’électrons. Le nombre de protons, donc l’identité de l’élément, n’est pas modifié par l’ionisation.",
        },
      ],
    },
    {
      id: 'nombres-quantiques',
      titre: 'Les quatre nombres quantiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’état d’un électron dans un atome est décrit par quatre nombres quantiques, issus de la résolution de l’équation de Schrödinger pour l’atome d’hydrogène. Les trois premiers définissent une orbitale atomique, région de l’espace où la probabilité de présence de l’électron est maximale ; le quatrième décrit le spin de l’électron.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre nombres quantiques',
          colonnes: ['Nombre quantique', 'Symbole', 'Valeurs possibles', 'Signification'],
          lignes: [
            ['Principal', 'n', 'Entiers positifs : 1, 2, 3…', 'Niveau d’énergie principal, taille de l’orbitale'],
            ['Secondaire (azimutal)', 'l', 'Entiers de 0 à n − 1', 'Forme de l’orbitale : sous-couche s, p, d, f'],
            ['Magnétique', 'm', 'Entiers de −l à +l', 'Orientation spatiale de l’orbitale'],
            ['Spin', 's (ou ms)', '+1/2 ou −1/2', 'Sens du moment cinétique propre de l’électron'],
          ],
        },
        {
          type: 'liste',
          items: [
            'l = 0 : sous-couche s (une seule orbitale, sphérique).',
            'l = 1 : sous-couche p (trois orbitales, en forme de lobes orientés selon les axes x, y, z).',
            'l = 2 : sous-couche d (cinq orbitales).',
            'l = 3 : sous-couche f (sept orbitales).',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre orbitale et case quantique',
          texte:
            "Une orbitale atomique correspond à un triplet (n, l, m) donné ; elle peut accueillir au maximum deux électrons, de spins opposés. Une sous-couche regroupe toutes les orbitales de même n et l : elle contient (2l + 1) orbitales, soit au maximum 2(2l + 1) électrons.",
        },
        {
          type: 'definition',
          terme: 'Case quantique',
          definition:
            "Représentation graphique d’une orbitale atomique par une case, dans laquelle on figure les électrons par des flèches verticales dont le sens traduit le spin.",
        },
      ],
    },
    {
      id: 'regles-remplissage',
      titre: 'Règles de remplissage électronique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La configuration électronique d’un atome décrit la répartition de ses électrons dans les différentes sous-couches, à l’état fondamental. Elle obéit à trois règles fondamentales.",
        },
        {
          type: 'etapes',
          titre: 'Construire une configuration électronique',
          etapes: [
            {
              titre: 'Règle de Klechkowski (ou règle de l’Aufbau)',
              detail:
                "Les sous-couches se remplissent par ordre croissant de la somme (n + l) ; à somme égale, la sous-couche de plus petit n est remplie en premier. L’ordre obtenu est : 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s…",
            },
            {
              titre: 'Principe d’exclusion de Pauli',
              detail:
                "Deux électrons d’un même atome ne peuvent avoir leurs quatre nombres quantiques identiques. Conséquence directe : une orbitale ne peut contenir que deux électrons au maximum, et ceux-ci doivent avoir des spins opposés (appariés).",
            },
            {
              titre: 'Règle de Hund',
              detail:
                "Pour des orbitales de même énergie (une sous-couche donnée), les électrons occupent d’abord le maximum d’orbitales différentes, avec des spins parallèles, avant de s’apparier. Cette disposition minimise les répulsions électroniques et l’énergie totale.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Exceptions classiques à la règle de Klechkowski',
          texte:
            "Le chrome (Z = 24) a pour configuration [Ar] 3d5 4s1 et non [Ar] 3d4 4s2 ; le cuivre (Z = 29) a pour configuration [Ar] 3d10 4s1 et non [Ar] 3d9 4s2. Ces irrégularités s’expliquent par la stabilité particulière des sous-couches d à demi-remplies ou totalement remplies.",
        },
        {
          type: 'tableau',
          titre: 'Nombre maximal d’électrons par sous-couche',
          colonnes: ['Sous-couche', 'Nombre d’orbitales', 'Nombre maximal d’électrons'],
          lignes: [
            ['s', '1', '2'],
            ['p', '3', '6'],
            ['d', '5', '10'],
            ['f', '7', '14'],
          ],
        },
      ],
    },
    {
      id: 'classification-periodique',
      titre: 'Organisation de la classification périodique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le tableau périodique classe les éléments par numéro atomique Z croissant, en lignes (périodes) et en colonnes (familles ou groupes). Deux éléments d’une même colonne ont la même configuration électronique de valence et donc des propriétés chimiques voisines.",
        },
        {
          type: 'definition',
          terme: 'Électrons de valence',
          definition:
            "Électrons de la couche externe (et, pour les éléments de transition, de la sous-couche d en cours de remplissage), impliqués dans les liaisons chimiques. Ce sont eux qui déterminent l’essentiel des propriétés chimiques d’un élément.",
        },
        {
          type: 'liste',
          items: [
            'Le numéro de la période correspond à la valeur de n de la couche externe en cours de remplissage.',
            'Le bloc s regroupe les colonnes 1 et 2 (alcalins et alcalino-terreux).',
            'Le bloc p regroupe les colonnes 13 à 18 (dont halogènes et gaz rares).',
            'Le bloc d regroupe les éléments de transition, colonnes 3 à 12.',
            'Le bloc f regroupe lanthanides et actinides, placés à part sous le tableau principal.',
          ],
        },
        {
          type: 'tableau',
          titre: 'Principales familles chimiques',
          colonnes: ['Famille', 'Colonne', 'Configuration de valence', 'Exemples'],
          lignes: [
            ['Alcalins', '1', 'ns1', 'Lithium, sodium, potassium'],
            ['Alcalino-terreux', '2', 'ns2', 'Magnésium, calcium'],
            ['Halogènes', '17', 'ns2 np5', 'Fluor, chlore, brome, iode'],
            ['Gaz nobles (rares)', '18', 'ns2 np6', 'Hélium, néon, argon'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retrouver rapidement la colonne',
          texte:
            "Pour les blocs s et p, le nombre total d’électrons de valence (ns + np) indique directement le numéro de colonne selon la numérotation à dix-huit colonnes : deux électrons de valence en bloc s donnent la colonne 2, cinq électrons de valence en bloc p (ns2 np5) donnent la colonne 17.",
        },
      ],
    },
    {
      id: 'periodicite-proprietes',
      titre: 'Périodicité des propriétés atomiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Plusieurs propriétés physico-chimiques varient de façon régulière et prévisible dans le tableau périodique, en fonction de deux effets opposés : l’augmentation de la charge nucléaire effective au sein d’une période, et l’éloignement des électrons de valence du noyau en descendant dans une colonne.",
        },
        {
          type: 'tableau',
          titre: 'Tendances périodiques principales',
          colonnes: ['Propriété', 'Dans une période (de gauche à droite)', 'Dans une colonne (de haut en bas)'],
          lignes: [
            ['Rayon atomique', 'Diminue', 'Augmente'],
            ['Énergie de première ionisation', 'Augmente globalement', 'Diminue'],
            ['Électronégativité', 'Augmente', 'Diminue'],
          ],
        },
        {
          type: 'definition',
          terme: 'Électronégativité',
          definition:
            "Aptitude d’un atome engagé dans une liaison chimique à attirer vers lui le doublet d’électrons de liaison. Elle est généralement estimée sur l’échelle de Pauling, sans dimension.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Éléments les plus électronégatifs',
          texte:
            "Le fluor est l’élément le plus électronégatif du tableau périodique, suivi de l’oxygène puis de l’azote et du chlore. À l’inverse, les alcalins, en particulier le césium et le francium, sont parmi les éléments les moins électronégatifs.",
        },
        {
          type: 'definition',
          terme: 'Énergie de première ionisation',
          definition:
            "Énergie minimale à fournir pour arracher l’électron le plus faiblement lié d’un atome à l’état gazeux et fondamental, formant un cation monovalent. Elle est toujours positive : l’ionisation est un processus qui coûte de l’énergie.",
        },
      ],
    },
  ],
  pointsCles: [
    'Le numéro atomique Z fixe le nombre de protons et identifie l’élément ; le nombre de masse A est la somme des protons et des neutrons.',
    'Les quatre nombres quantiques n, l, m et s décrivent complètement l’état d’un électron dans l’atome.',
    'La règle de Klechkowski donne l’ordre de remplissage des sous-couches selon (n + l) croissant.',
    'Le principe de Pauli interdit à deux électrons d’un même atome d’avoir les quatre mêmes nombres quantiques.',
    'La règle de Hund impose la disposition la plus étalée possible des électrons dans des orbitales de même énergie avant tout appariement.',
    'Deux éléments d’une même colonne partagent la même configuration électronique de valence.',
    'Le rayon atomique diminue le long d’une période et augmente le long d’une colonne.',
    'L’électronégativité augmente le long d’une période et diminue le long d’une colonne ; le fluor est l’élément le plus électronégatif.',
  ],
  erreursFrequentes: [
    'Confondre nombre de masse A et numéro atomique Z lors de l’écriture d’une notation isotopique.',
    'Oublier les exceptions du chrome et du cuivre en appliquant mécaniquement la règle de Klechkowski.',
    'Croire que la règle de Hund impose l’appariement immédiat des électrons dans une sous-couche, alors qu’elle impose l’inverse.',
    'Penser que le rayon atomique augmente systématiquement avec Z, sans distinguer l’évolution au sein d’une période de celle au sein d’une colonne.',
    'Assimiler énergie d’ionisation et électronégativité, deux grandeurs corrélées mais distinctes.',
  ],
  mnemotechniques: [
    {
      moyen: 'Diagonales de Klechkowski',
      explication:
        'Tracer les sous-couches en colonnes (1s, 2s 2p, 3s 3p 3d…) et suivre les diagonales du haut vers le bas donne directement l’ordre de remplissage.',
    },
    {
      moyen: '« SPDF, deux, six, dix, quatorze »',
      explication:
        'Rappelle la capacité maximale croissante des sous-couches s, p, d et f, utile pour vérifier la cohérence d’une configuration électronique.',
    },
    {
      moyen: 'Hund avant Pauli',
      explication:
        'Dans une sous-couche, on remplit d’abord une orbitale par électron (Hund, spins parallèles) avant d’apparier (Pauli n’intervenant qu’au second passage).',
    },
  ],
  sources: [
    'Atkins, Chimie physique',
    'Chimie générale, collection PASS/LAS, ouvrage de référence UE2',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-structure-atome-fc-01', recto: 'Que représente le numéro atomique Z ?', verso: 'Le nombre de protons du noyau ; il définit l’élément chimique et, pour un atome neutre, égale aussi le nombre d’électrons.', type: 'definition', tags: ['atome', 'Z'] },
    { id: 'ue2-structure-atome-fc-02', recto: 'Comment calcule-t-on le nombre de neutrons d’un noyau ?', verso: 'N = A − Z, différence entre le nombre de masse et le numéro atomique.', type: 'formule', tags: ['isotopes'] },
    { id: 'ue2-structure-atome-fc-03', recto: 'Que décrit le nombre quantique secondaire l ?', verso: 'La forme de l’orbitale, c’est-à-dire la sous-couche (s, p, d ou f). Il varie de 0 à n − 1.', type: 'definition', tags: ['nombres quantiques'] },
    { id: 'ue2-structure-atome-fc-04', recto: 'Combien d’électrons au maximum une orbitale peut-elle contenir ?', verso: 'Deux électrons, de spins opposés, en application du principe de Pauli.', type: 'chiffre', tags: ['Pauli'] },
    { id: 'ue2-structure-atome-fc-05', recto: 'Énoncer la règle de Hund.', verso: 'Dans des orbitales de même énergie, les électrons occupent d’abord le maximum d’orbitales différentes avec des spins parallèles avant de s’apparier.', type: 'mecanisme', tags: ['Hund'] },
    { id: 'ue2-structure-atome-fc-06', recto: 'Donner l’ordre de remplissage selon la règle de Klechkowski jusqu’à 4s.', verso: '1s, 2s, 2p, 3s, 3p, 4s.', type: 'mecanisme', tags: ['Klechkowski'] },
    { id: 'ue2-structure-atome-fc-07', recto: 'Quelle est la configuration électronique de valence du chrome, exception à Klechkowski ?', verso: '[Ar] 3d5 4s1, au lieu de [Ar] 3d4 4s2, en raison de la stabilité de la sous-couche d à demi-remplie.', type: 'classification', tags: ['exceptions'] },
    { id: 'ue2-structure-atome-fc-08', recto: 'Comment évolue le rayon atomique le long d’une période ?', verso: 'Il diminue, car la charge nucléaire effective augmente et attire davantage les électrons de valence.', type: 'mecanisme', tags: ['périodicité'] },
    { id: 'ue2-structure-atome-fc-09', recto: 'Comment évolue l’électronégativité le long d’une colonne ?', verso: 'Elle diminue, car les électrons de valence s’éloignent du noyau.', type: 'mecanisme', tags: ['électronégativité'] },
    { id: 'ue2-structure-atome-fc-10', recto: 'Quel est l’élément le plus électronégatif du tableau périodique ?', verso: 'Le fluor.', type: 'chiffre', tags: ['électronégativité'] },
    { id: 'ue2-structure-atome-fc-11', recto: 'Que regroupe le bloc d de la classification périodique ?', verso: 'Les éléments de transition, dont la sous-couche d est en cours de remplissage.', type: 'classification', tags: ['classification périodique'] },
    { id: 'ue2-structure-atome-fc-12', recto: 'Définir l’énergie de première ionisation.', verso: 'Énergie minimale nécessaire pour arracher l’électron le plus faiblement lié d’un atome gazeux à l’état fondamental.', type: 'definition', tags: ['ionisation'] },
  ],
  qcm: [
    {
      id: 'ue2-structure-atome-qcm-01',
      enonce: 'Concernant les constituants de l’atome, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le proton et le neutron ont une masse voisine.', vraie: true, justification: 'Exact : leurs masses sont très proches, de l’ordre de l’unité de masse atomique.' },
        { lettre: 'B', texte: 'L’électron est environ deux mille fois plus léger que le proton.', vraie: true, justification: 'Exact, de façon approximative : le rapport est proche de 1840.' },
        { lettre: 'C', texte: 'Deux isotopes d’un même élément ont un nombre de neutrons identique.', vraie: false, justification: 'Faux : ils ont le même Z mais un A différent, donc un nombre de neutrons différent.' },
        { lettre: 'D', texte: 'Un cation résulte d’une perte d’électrons.', vraie: true, justification: 'Exact : la perte d’électrons laisse un excès de charge positive.' },
        { lettre: 'E', texte: 'L’ionisation modifie le numéro atomique de l’élément.', vraie: false, justification: 'Faux : l’ionisation ne touche que les électrons, jamais le nombre de protons.' },
      ],
      correction: 'Réponses exactes : A, B et D. Les isotopes se distinguent par leur nombre de neutrons, non par leur numéro atomique.',
      difficulte: 1,
    },
    {
      id: 'ue2-structure-atome-qcm-02',
      enonce: 'Concernant les nombres quantiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le nombre quantique principal n peut prendre la valeur 0.', vraie: false, justification: 'Faux : n est un entier strictement positif (1, 2, 3…).' },
        { lettre: 'B', texte: 'Pour n = 3, l peut prendre les valeurs 0, 1 et 2.', vraie: true, justification: 'Exact : l varie de 0 à n − 1, soit ici 0, 1 et 2.' },
        { lettre: 'C', texte: 'La sous-couche 3d contient cinq orbitales.', vraie: true, justification: 'Exact : pour l = 2, il existe (2l + 1) = 5 valeurs de m, donc cinq orbitales.' },
        { lettre: 'D', texte: 'Le spin d’un électron peut prendre trois valeurs.', vraie: false, justification: 'Faux : le spin ne prend que deux valeurs, +1/2 et −1/2.' },
        { lettre: 'E', texte: 'Une sous-couche p peut contenir au maximum six électrons.', vraie: true, justification: 'Exact : trois orbitales p, chacune pouvant contenir deux électrons.' },
      ],
      correction: 'Réponses exactes : B, C et E. Revoir la relation entre l et le nombre d’orbitales (2l + 1).',
      difficulte: 2,
    },
    {
      id: 'ue2-structure-atome-qcm-03',
      enonce: 'Concernant les règles de remplissage électronique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La sous-couche 4s se remplit avant la sous-couche 3d.', vraie: true, justification: 'Exact selon la règle de Klechkowski, car (4 + 0) est inférieur à (3 + 2).' },
        { lettre: 'B', texte: 'Le principe de Pauli autorise deux électrons de même spin dans une orbitale.', vraie: false, justification: 'Faux : les deux électrons d’une même orbitale doivent avoir des spins opposés.' },
        { lettre: 'C', texte: 'La configuration électronique du cuivre est une exception classique à la règle de Klechkowski.', vraie: true, justification: 'Exact : elle est [Ar] 3d10 4s1 et non [Ar] 3d9 4s2.' },
        { lettre: 'D', texte: 'La règle de Hund concerne le remplissage d’orbitales d’énergies différentes.', vraie: false, justification: 'Faux : elle concerne des orbitales de même énergie, au sein d’une même sous-couche.' },
        { lettre: 'E', texte: 'Une sous-couche totalement ou à demi remplie présente une stabilité particulière.', vraie: true, justification: 'Exact : cette stabilité explique les exceptions comme le chrome et le cuivre.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer le rôle de chacune des trois règles de remplissage.',
      difficulte: 2,
    },
    {
      id: 'ue2-structure-atome-qcm-04',
      enonce: 'Concernant l’organisation de la classification périodique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les éléments d’une même colonne ont la même configuration électronique de valence.', vraie: true, justification: 'Exact, ce qui explique leurs propriétés chimiques voisines.' },
        { lettre: 'B', texte: 'Le numéro de la période correspond à la valeur de n de la couche externe.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Les gaz nobles appartiennent au bloc d.', vraie: false, justification: 'Faux : ils appartiennent au bloc p, à l’exception de l’hélium qui appartient au bloc s.' },
        { lettre: 'D', texte: 'Les alcalins ont pour configuration de valence ns2.', vraie: false, justification: 'Faux : leur configuration de valence est ns1.' },
        { lettre: 'E', texte: 'Les lanthanides et les actinides appartiennent au bloc f.', vraie: true, justification: 'Exact : ce sont les éléments dont la sous-couche 4f ou 5f est en cours de remplissage.' },
      ],
      correction: 'Réponses exactes : A, B et E. Attention à ne pas confondre les configurations de valence des alcalins et des alcalino-terreux.',
      difficulte: 2,
    },
    {
      id: 'ue2-structure-atome-qcm-05',
      enonce: 'Concernant la périodicité des propriétés atomiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le rayon atomique augmente le long d’une période, de gauche à droite.', vraie: false, justification: 'Faux : il diminue, la charge nucléaire effective croissante contractant le nuage électronique.' },
        { lettre: 'B', texte: 'L’énergie de première ionisation diminue le long d’une colonne, de haut en bas.', vraie: true, justification: 'Exact : les électrons de valence, plus éloignés du noyau, sont plus faciles à arracher.' },
        { lettre: 'C', texte: 'Le fluor est l’élément le plus électronégatif du tableau périodique.', vraie: true, justification: 'Exact, devant l’oxygène.' },
        { lettre: 'D', texte: 'L’électronégativité est une grandeur qui possède une unité, le pauling.', vraie: false, justification: 'Faux : l’échelle de Pauling est une échelle relative, sans dimension.' },
        { lettre: 'E', texte: 'Les alcalins comptent parmi les éléments les moins électronégatifs.', vraie: true, justification: 'Exact, en particulier le césium et le francium.' },
      ],
      correction: 'Réponses exactes : B, C et E. L’électronégativité est sans dimension, contrairement à l’énergie d’ionisation.',
      difficulte: 2,
    },
    {
      id: 'ue2-structure-atome-qcm-06',
      enonce: 'Concernant la notation isotopique et les électrons de valence, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Dans la notation A/Z X, A est placé en bas à gauche du symbole.', vraie: false, justification: 'Faux : A est placé en haut à gauche, Z en bas à gauche.' },
        { lettre: 'B', texte: 'Les électrons de valence sont ceux de la couche externe.', vraie: true, justification: 'Exact, et éventuellement de la sous-couche d en cours de remplissage pour les éléments de transition.' },
        { lettre: 'C', texte: 'Les électrons de valence déterminent l’essentiel des propriétés chimiques d’un élément.', vraie: true, justification: 'Exact : ce sont eux qui participent aux liaisons chimiques.' },
        { lettre: 'D', texte: 'Deux isotopes d’un même élément ont des propriétés chimiques très différentes.', vraie: false, justification: 'Faux : leurs propriétés chimiques sont quasiment identiques, seule leur masse diffère.' },
        { lettre: 'E', texte: 'Le nombre de masse A est toujours inférieur au numéro atomique Z.', vraie: false, justification: 'Faux : A est la somme de Z et du nombre de neutrons, il est donc toujours supérieur ou égal à Z.' },
      ],
      correction: 'Réponses exactes : B et C. Bien relire la notation isotopique standard A en haut, Z en bas.',
      difficulte: 1,
    },
  ],
};
