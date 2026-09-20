import type { Fiche } from '../../types';

export const ficheIrmEchographieScintigraphie: Fiche = {
  id: 'ue3-irm-echographie-scintigraphie',
  ue: 'ue3',
  titre: 'IRM, échographie et médecine nucléaire',
  sousTitre:
    "Résonance magnétique nucléaire, temps T1 et T2, séquences, principe de l’échographie, modes, Doppler, radiopharmaceutiques, scintigraphie et TEP",
  chapitre: 'Imagerie médicale',
  ordre: 12,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'résonance magnétique nucléaire',
    'temps de relaxation T1',
    'temps de relaxation T2',
    'échographie',
    'mode Doppler',
    'radiopharmaceutique',
    'scintigraphie',
    'tomographie par émission de positons',
  ],
  objectifs: [
    "Décrire le principe physique de la résonance magnétique nucléaire appliqué à l’IRM.",
    "Distinguer les pondérations T1 et T2 d’une séquence d’IRM.",
    "Rappeler le principe physique de l’échographie et ses principaux modes d’utilisation.",
    "Décrire le principe d’un radiopharmaceutique et son utilisation en scintigraphie.",
    "Expliquer le principe physique de la tomographie par émission de positons.",
  ],
  sections: [
    {
      id: 'principe-rmn',
      titre: 'Principe physique de la résonance magnétique nucléaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’imagerie par résonance magnétique (IRM) exploite les propriétés magnétiques des noyaux d’hydrogène (protons), très abondants dans l’eau et les graisses des tissus biologiques. Chaque proton possède un moment magnétique intrinsèque (spin) qui, placé dans un champ magnétique statique intense, s’aligne préférentiellement selon ce champ.",
        },
        {
          type: 'formule',
          expression: 'f = gamma x B0',
          legende:
            "Fréquence de résonance de Larmor f : gamma est le rapport gyromagnétique du noyau considéré (caractéristique de chaque espèce nucléaire), B0 l’intensité du champ magnétique statique de l’appareil.",
          unites: 'f en Hz (ou MHz), gamma en Hz/T (spécifique du proton d’hydrogène), B0 en tesla (T)',
        },
        {
          type: 'etapes',
          titre: 'Principe simplifié de l’acquisition du signal',
          etapes: [
            {
              titre: 'Aimantation longitudinale',
              detail: "Dans le champ magnétique statique B0, les protons s’alignent globalement et créent une aimantation macroscopique longitudinale.",
            },
            {
              titre: 'Excitation par onde de radiofréquence',
              detail:
                "Une onde de radiofréquence, émise précisément à la fréquence de résonance de Larmor, bascule l’aimantation hors de son axe longitudinal (impulsion d’excitation).",
            },
            {
              titre: 'Relaxation et détection du signal',
              detail:
                "Après l’arrêt de l’impulsion, l’aimantation retourne progressivement à son état d’équilibre (relaxation), en émettant un signal de radiofréquence détecté par une antenne réceptrice.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Intensité des champs magnétiques utilisés',
          texte:
            "Les appareils d’IRM cliniques utilisent des champs magnétiques statiques typiquement compris entre 1,5 et 3 tesla, très supérieurs au champ magnétique terrestre (environ 0,00005 tesla).",
        },
      ],
    },
    {
      id: 'temps-relaxation',
      titre: 'Temps de relaxation T1 et T2',
      blocs: [
        {
          type: 'definition',
          terme: 'Temps de relaxation T1 (relaxation longitudinale)',
          definition:
            "Temps caractéristique du retour progressif de l’aimantation longitudinale vers sa valeur d’équilibre, après l’impulsion d’excitation. Il traduit les échanges d’énergie entre les protons excités et leur environnement moléculaire (relaxation spin-réseau).",
        },
        {
          type: 'definition',
          terme: 'Temps de relaxation T2 (relaxation transversale)',
          definition:
            "Temps caractéristique de la décroissance de l’aimantation transversale, liée à la perte progressive de cohérence de phase entre les spins voisins (relaxation spin-spin), plus rapide que la relaxation T1.",
        },
        {
          type: 'tableau',
          titre: 'Aspect de quelques tissus selon la pondération de séquence',
          colonnes: ['Tissu ou liquide', 'Aspect en pondération T1', 'Aspect en pondération T2'],
          lignes: [
            ['Eau libre (LCR, kyste simple)', 'Hyposignal (sombre)', 'Hypersignal (clair)'],
            ['Graisse', 'Hypersignal (clair)', 'Signal intermédiaire à modérément clair'],
            ['Substance blanche cérébrale', 'Signal plus clair que la substance grise', 'Signal plus sombre que la substance grise'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir simplement T1 et T2',
          texte:
            "Un repère mnémotechnique fréquemment utilisé : en pondération T1, l’eau apparaît sombre (« T1 = eau noire ») ; en pondération T2, l’eau apparaît claire (« T2 = eau blanche »). C’est ce contraste qui permet, par exemple, de repérer un œdème (riche en eau), en hypersignal T2.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le temps de répétition et le temps d’écho pilotent la pondération',
          texte:
            "La pondération d’une séquence d’IRM est déterminée par le choix de deux paramètres d’acquisition : le temps de répétition (TR), délai entre deux impulsions d’excitation successives, et le temps d’écho (TE), délai entre l’impulsion d’excitation et le recueil du signal. Un TR court et un TE court donnent une pondération T1 ; un TR long et un TE long donnent une pondération T2.",
        },
      ],
    },
    {
      id: 'echographie',
      titre: 'Principe et modes de l’échographie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’échographie utilise la réflexion des ondes ultrasonores aux interfaces entre tissus d’impédances acoustiques différentes pour reconstruire une image en temps réel, sans exposition à des rayonnements ionisants (voir la fiche sur les ondes et l’acoustique pour les bases physiques).",
        },
        {
          type: 'tableau',
          titre: 'Principaux modes échographiques',
          colonnes: ['Mode', 'Principe', 'Usage principal'],
          lignes: [
            ['Mode A (amplitude)', 'Représentation de l’amplitude du signal réfléchi en fonction de la profondeur, sur une seule ligne', 'Peu utilisé en pratique courante actuelle (historique, ophtalmologie)'],
            ['Mode B (brightness)', 'Codage de l’amplitude du signal réfléchi en niveau de gris, sur une image en deux dimensions', 'Échographie morphologique standard'],
            ['Mode TM (temps-mouvement)', 'Représentation de l’évolution dans le temps d’une ligne de tir', 'Étude des mouvements rapides, notamment cardiaques (échocardiographie)'],
            ['Mode Doppler', 'Analyse du décalage de fréquence lié au mouvement des structures (globules rouges)', 'Étude des flux sanguins (vasculaire, cardiaque, obstétrical)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Doppler couleur et Doppler pulsé',
          texte:
            "Le Doppler couleur superpose sur l’image en mode B un codage couleur du sens et de la vitesse moyenne du flux (par exemple rouge pour un flux se rapprochant de la sonde, bleu pour un flux s’en éloignant, par convention). Le Doppler pulsé permet une analyse quantitative précise de la vitesse du flux en un point donné, sous la forme d’une courbe vitesse-temps.",
        },
      ],
    },
    {
      id: 'radiopharmaceutiques',
      titre: 'Radiopharmaceutiques et scintigraphie',
      blocs: [
        {
          type: 'definition',
          terme: 'Radiopharmaceutique',
          definition:
            "Médicament associant un vecteur biologique, choisi pour son affinité pour un organe ou une fonction physiologique donnée, et un radionucléide émetteur de rayonnement détectable, qui sert de traceur pour l’imagerie fonctionnelle sans en modifier le comportement biologique.",
        },
        {
          type: 'paragraphe',
          texte:
            "Contrairement à l’imagerie morphologique (radiographie, scanner, IRM, échographie), qui renseigne sur l’anatomie et la structure des tissus, la scintigraphie est une imagerie fonctionnelle : elle renseigne sur le métabolisme ou la fonction d’un organe, en cartographiant la répartition d’un radiopharmaceutique injecté au patient.",
        },
        {
          type: 'liste',
          items: [
            "Le radionucléide le plus utilisé en scintigraphie conventionnelle est le technétium 99m, émetteur gamma pur, de période courte (environ 6 heures), ce qui limite l’irradiation du patient tout en laissant le temps de réaliser l’examen.",
            "Une gamma-caméra détecte les photons gamma émis par le radiopharmaceutique et reconstruit une image de sa répartition dans l’organisme (scintigraphie planaire) ou en coupes (tomoscintigraphie, ou SPECT pour Single Photon Emission Computed Tomography).",
            "Le choix du vecteur biologique du radiopharmaceutique détermine l’organe ou la fonction étudiée : par exemple les diphosphonates marqués pour la scintigraphie osseuse, ou l’iode radioactif pour l’étude de la fonction thyroïdienne.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Technétium 99m',
          texte:
            "La période physique du technétium 99m est d’environ 6 heures. Sa désintégration produit un rayonnement gamma d’énergie d’environ 140 keV, bien adapté à la détection par une gamma-caméra clinique.",
        },
      ],
    },
    {
      id: 'tep',
      titre: 'La tomographie par émission de positons (TEP)',
      blocs: [
        {
          type: 'definition',
          terme: 'Tomographie par émission de positons (TEP)',
          definition:
            "Technique d’imagerie fonctionnelle qui exploite la détection en coïncidence des deux photons gamma de 511 keV produits par l’annihilation d’un positon, émis lors de la désintégration bêta plus d’un radionucléide injecté au patient.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le radiopharmaceutique le plus utilisé en TEP est le fluorodésoxyglucose marqué au fluor 18 (18F-FDG), un analogue du glucose dont la captation cellulaire reflète l’activité métabolique glucidique des tissus, particulièrement élevée dans de nombreuses tumeurs malignes.",
        },
        {
          type: 'liste',
          items: [
            "Les deux photons gamma de 511 keV issus de l’annihilation du positon sont émis simultanément dans des directions opposées à 180 degrés : leur détection en coïncidence, par une couronne de détecteurs entourant le patient, permet de localiser précisément le lieu d’émission sur la ligne joignant les deux détecteurs ayant capté le signal.",
            "Le fluor 18 a une période physique courte, d’environ 110 minutes, ce qui impose une production à proximité du site d’utilisation (cyclotron) et une organisation logistique adaptée.",
            "L’examen TEP est fréquemment couplé à un scanner (TEP-scanner) réalisé dans le même temps, associant l’information fonctionnelle de la TEP à l’information anatomique précise du scanner.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Principales indications de la TEP au 18F-FDG',
          texte:
            "La TEP au 18F-FDG est largement utilisée en oncologie pour le bilan d’extension de nombreux cancers, la recherche de récidive et l’évaluation de la réponse thérapeutique, en s’appuyant sur l’hypermétabolisme glucidique caractéristique de nombreuses cellules tumorales.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’IRM exploite la résonance des protons d’hydrogène placés dans un champ magnétique statique intense, à la fréquence de Larmor f = gamma x B0.",
    "Le temps T1 correspond à la relaxation longitudinale, le temps T2 à la relaxation transversale, plus rapide que T1.",
    "Le choix du temps de répétition (TR) et du temps d’écho (TE) détermine la pondération T1 ou T2 d’une séquence d’IRM.",
    "L’échographie repose sur la réflexion des ultrasons aux interfaces d’impédance acoustique différente ; ses principaux modes sont A, B, TM et Doppler.",
    "Un radiopharmaceutique associe un vecteur biologique et un radionucléide émetteur, utilisé en imagerie fonctionnelle (scintigraphie).",
    "Le technétium 99m, émetteur gamma pur de période courte, est le radionucléide le plus utilisé en scintigraphie conventionnelle.",
    "La TEP détecte en coïncidence les deux photons de 511 keV issus de l’annihilation d’un positon, le plus souvent avec le 18F-FDG en oncologie.",
  ],
  erreursFrequentes: [
    "Croire que l’IRM utilise des rayonnements ionisants : elle repose sur un champ magnétique et des ondes de radiofréquence, non ionisants.",
    "Inverser les aspects de l’eau en pondération T1 (sombre) et T2 (claire).",
    "Confondre temps de répétition (TR, délai entre deux impulsions) et temps d’écho (TE, délai avant le recueil du signal).",
    "Penser que le mode Doppler est un mode d’imagerie morphologique classique, alors qu’il analyse spécifiquement le mouvement (flux sanguin).",
    "Confondre imagerie morphologique (anatomie) et imagerie fonctionnelle (métabolisme), la scintigraphie et la TEP appartenant à cette seconde catégorie.",
    "Oublier que la détection en coïncidence en TEP repose sur l’émission simultanée de deux photons à 180 degrés l’un de l’autre, issus de l’annihilation du positon, et non d’une émission gamma directe unique.",
  ],
  mnemotechniques: [
    {
      moyen: '« T1 = eau noire, T2 = eau blanche »',
      explication:
        "Moyen mnémotechnique classique pour retenir l’aspect de l’eau en IRM : sombre (hyposignal) en pondération T1, claire (hypersignal) en pondération T2.",
    },
    {
      moyen: '« TEP : deux photons, coïncidence, 511 »',
      explication:
        "Résume le principe physique de la TEP : détection simultanée (coïncidence) de deux photons de 511 keV émis à 180 degrés lors de l’annihilation du positon.",
    },
    {
      moyen: '« Scinti = fonction, scanner/IRM = structure »',
      explication:
        "Distingue l’imagerie fonctionnelle (scintigraphie, TEP), qui renseigne sur le métabolisme, de l’imagerie morphologique (scanner, IRM, échographie), qui renseigne sur l’anatomie.",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Imagerie médicale, collection Med-Line',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-01',
      recto: 'Quel noyau atomique est principalement exploité en IRM clinique ?',
      verso: 'Le noyau d’hydrogène (proton), très abondant dans l’eau et les graisses des tissus biologiques.',
      type: 'definition',
      tags: ['IRM'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-02',
      recto: 'Écrire la formule de la fréquence de résonance de Larmor.',
      verso: 'f = gamma x B0, gamma étant le rapport gyromagnétique du noyau et B0 le champ magnétique statique.',
      type: 'formule',
      tags: ['IRM', 'résonance'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-03',
      recto: 'Différencier le temps de relaxation T1 et le temps de relaxation T2.',
      verso: 'T1 est le temps de la relaxation longitudinale (retour de l’aimantation vers l’équilibre) ; T2 est le temps de la relaxation transversale (perte de cohérence de phase entre spins), plus rapide.',
      type: 'definition',
      tags: ['IRM', 'T1', 'T2'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-04',
      recto: 'Quel est l’aspect de l’eau libre en pondération T1 et en pondération T2 ?',
      verso: 'Hyposignal (sombre) en T1, hypersignal (clair) en T2.',
      type: 'clinique',
      tags: ['IRM'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-05',
      recto: 'Quels paramètres d’acquisition déterminent la pondération d’une séquence d’IRM ?',
      verso: 'Le temps de répétition (TR) et le temps d’écho (TE) : TR et TE courts donnent une pondération T1, TR et TE longs donnent une pondération T2.',
      type: 'mecanisme',
      tags: ['IRM'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-06',
      recto: 'Quel mode échographique est utilisé pour l’étude des mouvements cardiaques rapides ?',
      verso: 'Le mode TM (temps-mouvement).',
      type: 'clinique',
      tags: ['échographie'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-07',
      recto: 'Qu’étudie le mode Doppler en échographie ?',
      verso: 'Les flux sanguins, grâce au décalage de fréquence lié au mouvement des globules rouges.',
      type: 'definition',
      tags: ['Doppler'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-08',
      recto: 'Qu’est-ce qu’un radiopharmaceutique ?',
      verso: 'Un médicament associant un vecteur biologique et un radionucléide émetteur de rayonnement, utilisé comme traceur en imagerie fonctionnelle.',
      type: 'definition',
      tags: ['radiopharmaceutique'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-09',
      recto: 'Quel est le radionucléide le plus utilisé en scintigraphie conventionnelle et quelle est sa période ?',
      verso: 'Le technétium 99m, émetteur gamma pur, de période courte d’environ 6 heures.',
      type: 'chiffre',
      tags: ['scintigraphie'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-10',
      recto: 'Quel principe physique fonde la détection en TEP ?',
      verso: 'La détection en coïncidence des deux photons gamma de 511 keV, émis à 180 degrés l’un de l’autre lors de l’annihilation d’un positon.',
      type: 'mecanisme',
      tags: ['TEP'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-11',
      recto: 'Quel radiopharmaceutique est le plus utilisé en TEP oncologique ?',
      verso: 'Le fluorodésoxyglucose marqué au fluor 18 (18F-FDG), analogue du glucose reflétant l’activité métabolique glucidique des tissus.',
      type: 'clinique',
      tags: ['TEP', '18F-FDG'],
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-fc-12',
      recto: 'Pourquoi couple-t-on souvent la TEP à un scanner (TEP-scanner) ?',
      verso: 'Pour associer l’information fonctionnelle de la TEP à l’information anatomique précise du scanner, réalisés dans le même temps d’examen.',
      type: 'clinique',
      tags: ['TEP-scanner'],
    },
  ],
  qcm: [
    {
      id: 'ue3-irm-echographie-scintigraphie-qcm-01',
      enonce: 'Concernant le principe physique de l’IRM, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’IRM utilise des rayonnements ionisants.',
          vraie: false,
          justification: "Faux, elle repose sur un champ magnétique statique et des ondes de radiofréquence, non ionisants.",
        },
        {
          lettre: 'B',
          texte: 'La fréquence de résonance de Larmor est proportionnelle à l’intensité du champ magnétique statique.',
          vraie: true,
          justification: 'Exact : f = gamma x B0.',
        },
        {
          lettre: 'C',
          texte: 'Les champs magnétiques cliniques usuels sont de l’ordre de 1,5 à 3 tesla.',
          vraie: true,
          justification: 'Exact, très supérieurs au champ magnétique terrestre.',
        },
        {
          lettre: 'D',
          texte: 'L’impulsion de radiofréquence doit être émise à la fréquence de résonance du noyau étudié pour l’exciter.',
          vraie: true,
          justification: "Exact, c’est le principe même de la résonance magnétique nucléaire.",
        },
        {
          lettre: 'E',
          texte: 'Le noyau principalement exploité en IRM clinique est le carbone.',
          vraie: false,
          justification: "C’est le noyau d’hydrogène (proton) qui est principalement exploité, en raison de son abondance dans les tissus biologiques.",
        },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-qcm-02',
      enonce: 'Concernant les temps de relaxation T1 et T2, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'T1 correspond à la relaxation longitudinale.',
          vraie: true,
          justification: 'Exact, retour de l’aimantation vers l’axe du champ statique.',
        },
        {
          lettre: 'B',
          texte: 'T2 correspond à la relaxation longitudinale.',
          vraie: false,
          justification: "T2 correspond à la relaxation transversale, liée à la perte de cohérence de phase des spins.",
        },
        {
          lettre: 'C',
          texte: 'L’eau apparaît en hypersignal (claire) sur une séquence pondérée en T2.',
          vraie: true,
          justification: 'Exact, c’est un repère classique d’interprétation des séquences IRM.',
        },
        {
          lettre: 'D',
          texte: 'Un TR court et un TE court donnent une pondération T2.',
          vraie: false,
          justification: "Ils donnent au contraire une pondération T1 ; la pondération T2 nécessite un TR long et un TE long.",
        },
        {
          lettre: 'E',
          texte: 'La relaxation T2 est généralement plus rapide que la relaxation T1.',
          vraie: true,
          justification: "Exact, la perte de cohérence de phase transversale est plus rapide que le retour à l’équilibre longitudinal.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 3,
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-qcm-03',
      enonce: 'Concernant l’échographie et ses modes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le mode B fournit une image en deux dimensions codée en niveaux de gris.',
          vraie: true,
          justification: "Exact, c’est le mode d’échographie morphologique standard.",
        },
        {
          lettre: 'B',
          texte: 'Le mode TM est adapté à l’étude des mouvements rapides, comme les valves cardiaques.',
          vraie: true,
          justification: 'Exact, il représente l’évolution temporelle d’une ligne de tir donnée.',
        },
        {
          lettre: 'C',
          texte: 'Le mode Doppler ne permet pas d’étudier le sens du flux sanguin.',
          vraie: false,
          justification: "Il permet au contraire de déterminer à la fois le sens et la vitesse du flux, notamment en Doppler couleur.",
        },
        {
          lettre: 'D',
          texte: 'L’échographie repose sur la réflexion des ultrasons aux interfaces d’impédance acoustique différente.',
          vraie: true,
          justification: 'Exact, c’est le principe physique fondamental de cette technique.',
        },
        {
          lettre: 'E',
          texte: 'L’échographie expose le patient à des rayonnements ionisants.',
          vraie: false,
          justification: "Faux, l’échographie utilise des ultrasons, qui ne sont pas des rayonnements ionisants.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-qcm-04',
      enonce: 'Concernant les radiopharmaceutiques et la scintigraphie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un radiopharmaceutique associe un vecteur biologique et un radionucléide.',
          vraie: true,
          justification: "Exact, c’est la définition même du radiopharmaceutique.",
        },
        {
          lettre: 'B',
          texte: 'La scintigraphie est une technique d’imagerie exclusivement morphologique.',
          vraie: false,
          justification: "C’est au contraire une imagerie fonctionnelle, qui renseigne sur le métabolisme ou la fonction d’un organe.",
        },
        {
          lettre: 'C',
          texte: 'Le technétium 99m a une période physique d’environ 6 heures.',
          vraie: true,
          justification: 'Exact, cette période courte limite l’irradiation du patient.',
        },
        {
          lettre: 'D',
          texte: 'Une gamma-caméra détecte les photons gamma émis par le radiopharmaceutique.',
          vraie: true,
          justification: 'Exact, c’est le dispositif de détection utilisé en scintigraphie.',
        },
        {
          lettre: 'E',
          texte: 'Le choix du vecteur biologique du radiopharmaceutique n’a aucune influence sur l’organe étudié.',
          vraie: false,
          justification: "Il en a au contraire une influence déterminante : c’est le vecteur qui cible l’organe ou la fonction étudiée.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-qcm-05',
      enonce: 'Concernant la tomographie par émission de positons (TEP), quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La TEP repose sur la détection en coïncidence de deux photons de 511 keV.',
          vraie: true,
          justification: "Exact, issus de l’annihilation du positon avec un électron du milieu.",
        },
        {
          lettre: 'B',
          texte: 'Les deux photons détectés en TEP sont émis dans la même direction.',
          vraie: false,
          justification: "Ils sont émis dans des directions opposées, à 180 degrés l’un de l’autre.",
        },
        {
          lettre: 'C',
          texte: 'Le 18F-FDG est un analogue du glucose utilisé comme traceur en TEP oncologique.',
          vraie: true,
          justification: "Exact, sa captation reflète l’activité métabolique glucidique des tissus, notamment tumoraux.",
        },
        {
          lettre: 'D',
          texte: 'Le fluor 18 a une période physique de plusieurs jours.',
          vraie: false,
          justification: "Sa période est bien plus courte, d’environ 110 minutes.",
        },
        {
          lettre: 'E',
          texte: 'Le TEP-scanner associe l’information fonctionnelle de la TEP à l’information anatomique du scanner.',
          vraie: true,
          justification: "Exact, c’est l’intérêt principal de cet examen couplé.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-irm-echographie-scintigraphie-qcm-06',
      enonce: 'Concernant les différences entre les techniques d’imagerie médicale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’IRM et l’échographie n’utilisent pas de rayonnements ionisants.',
          vraie: true,
          justification: "Exact, l’IRM utilise un champ magnétique et des ondes de radiofréquence, l’échographie des ultrasons.",
        },
        {
          lettre: 'B',
          texte: 'La scintigraphie et la TEP sont des techniques d’imagerie fonctionnelle.',
          vraie: true,
          justification: "Exact, elles renseignent toutes deux sur le métabolisme ou la fonction d’un organe, contrairement au scanner ou à l’IRM standard.",
        },
        {
          lettre: 'C',
          texte: 'Le scanner et la radiographie utilisent des rayonnements ionisants (rayons X).',
          vraie: true,
          justification: 'Exact, ce sont des techniques d’imagerie par rayons X.',
        },
        {
          lettre: 'D',
          texte: 'L’échographie et l’IRM reposent sur le même principe physique.',
          vraie: false,
          justification: "Non, l’échographie repose sur la propagation et la réflexion d’ultrasons, l’IRM sur la résonance magnétique nucléaire des protons.",
        },
        {
          lettre: 'E',
          texte: 'La TEP nécessite l’injection d’un radiopharmaceutique émetteur de positons.',
          vraie: true,
          justification: "Exact, comme le 18F-FDG, marqué au fluor 18.",
        },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
  ],
};
