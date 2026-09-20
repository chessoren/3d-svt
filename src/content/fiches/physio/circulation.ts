import type { Fiche } from '../../types';

export const ficheCirculation: Fiche = {
  id: 'physio-circulation',
  ue: 'physio',
  titre: 'Circulation et pression artérielle',
  sousTitre: 'Hémodynamique, régulation tensionnelle et microcirculation',
  chapitre: 'Cardiovasculaire',
  ordre: 4,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'pression artérielle',
    'résistances vasculaires',
    'baroréflexe',
    'microcirculation',
    'loi de Starling',
    'retour veineux',
    'hémodynamique',
    'pression artérielle moyenne',
  ],
  objectifs: [
    'Décrire les déterminants de la pression artérielle et l’équation hémodynamique fondamentale.',
    'Expliquer le mécanisme du baroréflexe dans la régulation à court terme de la pression artérielle.',
    'Décrire les échanges capillaires selon la loi de Starling.',
    'Expliquer les mécanismes du retour veineux.',
    'Distinguer régulation à court terme et à moyen-long terme de la pression artérielle.',
  ],
  sections: [
    {
      id: 'hemodynamique',
      titre: 'Bases de l’hémodynamique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La circulation sanguine obéit aux mêmes principes physiques que tout écoulement de fluide dans un circuit : le débit dépend d’un gradient de pression moteur et d’une résistance qui s’y oppose. Le système cardiovasculaire est un circuit fermé, en boucle, où le ventricule gauche propulse le sang à travers la grande circulation et le ventricule droit à travers la petite circulation.",
        },
        {
          type: 'formule',
          expression: 'Débit = ΔPression / Résistance',
          legende:
            "Loi hémodynamique fondamentale, analogue à la loi d’Ohm en électricité. Le débit sanguin dans un segment vasculaire est proportionnel à la différence de pression entre ses deux extrémités et inversement proportionnel à la résistance qu’il oppose à l’écoulement.",
        },
        {
          type: 'formule',
          expression: 'Résistance ∝ (longueur × viscosité) / rayon^4',
          legende:
            "Loi de Poiseuille : la résistance vasculaire est extrêmement sensible au rayon du vaisseau, à la puissance quatrième. Une faible variation de calibre artériolaire modifie donc considérablement la résistance et le débit local.",
        },
        {
          type: 'definition',
          terme: 'Pression artérielle moyenne (PAM)',
          definition:
            "Pression motrice moyenne de perfusion des organes au cours du cycle cardiaque. Elle est plus proche de la pression diastolique que de la pression systolique, car la diastole occupe une plus grande fraction du cycle cardiaque au repos.",
        },
        {
          type: 'formule',
          expression: 'PAM ≈ PA diastolique + 1/3 × (PA systolique − PA diastolique)',
          legende:
            'Formule d’estimation usuelle de la pression artérielle moyenne à partir des pressions systolique et diastolique mesurées.',
          unites: 'mmHg',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Valeurs usuelles de pression artérielle',
          texte:
            "Pression artérielle systolique normale : environ 120 mmHg. Pression artérielle diastolique normale : environ 80 mmHg. Pression artérielle moyenne : environ 93 mmHg. Pression différentielle (pression pulsée) : différence entre systolique et diastolique, environ 40 mmHg au repos.",
        },
      ],
    },
    {
      id: 'determinants-pa',
      titre: 'Déterminants de la pression artérielle',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La pression artérielle moyenne systémique dépend directement du débit cardiaque et des résistances vasculaires périphériques totales, selon la même relation hémodynamique fondamentale appliquée à l’ensemble de la circulation systémique.",
        },
        {
          type: 'formule',
          expression: 'PAM = Débit cardiaque × Résistances vasculaires périphériques totales',
          legende:
            "Cette relation explique que toute variation durable de la pression artérielle résulte d’une modification du débit cardiaque, des résistances périphériques, ou des deux.",
        },
        {
          type: 'tableau',
          titre: 'Principaux facteurs modulant la pression artérielle',
          colonnes: ['Facteur', 'Effet sur la pression artérielle', 'Mécanisme'],
          lignes: [
            ['Fréquence cardiaque et volume d’éjection systolique', 'Augmentation si ↑', 'Modifient le débit cardiaque'],
            ['Tonus vasomoteur artériolaire', 'Augmentation si vasoconstriction', 'Modifie les résistances périphériques'],
            ['Volémie', 'Augmentation si ↑', 'Modifie le retour veineux et donc la précharge'],
            ['Viscosité sanguine', 'Augmentation si ↑', 'Modifie la résistance à l’écoulement'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir l’équation maîtresse',
          texte:
            "PAM = débit cardiaque × résistances périphériques totales. Toute question sur une variation de pression artérielle se ramène à identifier lequel de ces deux facteurs, ou des deux, a été modifié.",
        },
      ],
    },
    {
      id: 'baroreflexe',
      titre: 'Régulation à court terme : le baroréflexe',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le baroréflexe est le mécanisme nerveux à réponse rapide (quelques secondes) qui stabilise la pression artérielle face aux variations posturales et hémodynamiques du quotidien, en modulant en permanence l’activité du système nerveux autonome.",
        },
        {
          type: 'etapes',
          titre: 'Déroulement du baroréflexe',
          etapes: [
            {
              titre: 'Détection',
              detail:
                "Les barorécepteurs, mécanorécepteurs sensibles à l’étirement, situés dans la paroi du sinus carotidien et de la crosse aortique, détectent en continu la pression artérielle.",
            },
            {
              titre: 'Intégration bulbaire',
              detail:
                "Les afférences empruntent respectivement les nerfs glossopharyngien (IX) et vague (X) jusqu’au centre cardiovasculaire du bulbe rachidien (noyau du tractus solitaire).",
            },
            {
              titre: 'Réponse effectrice en cas de baisse de pression',
              detail:
                "Diminution du tonus parasympathique et augmentation du tonus sympathique : accélération de la fréquence cardiaque, augmentation de la contractilité, vasoconstriction artériolaire et veineuse.",
            },
            {
              titre: 'Réponse effectrice en cas de hausse de pression',
              detail:
                "Augmentation du tonus parasympathique et diminution du tonus sympathique : ralentissement de la fréquence cardiaque et vasodilatation, ce qui ramène la pression vers sa valeur de consigne.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Hypotension orthostatique',
          texte:
            "Lors du passage rapide de la position couchée à debout, une partie du volume sanguin se déplace vers les membres inférieurs sous l’effet de la gravité. Un baroréflexe efficace corrige rapidement la chute tensionnelle transitoire ; un baroréflexe altéré, comme chez le sujet âgé ou sous certains traitements, expose à une hypotension orthostatique symptomatique.",
        },
      ],
    },
    {
      id: 'regulation-long-terme',
      titre: 'Régulation à moyen et long terme',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "À la différence du baroréflexe, rapide mais qui s’adapte (se réinitialise) en quelques jours à une nouvelle valeur de pression, la régulation à moyen et long terme repose sur le contrôle du volume liquidien extracellulaire, principalement par le rein.",
        },
        {
          type: 'tableau',
          titre: 'Mécanismes de régulation à moyen et long terme',
          colonnes: ['Mécanisme', 'Délai d’action', 'Principe'],
          lignes: [
            ['Système rénine-angiotensine-aldostérone', 'Minutes à heures', 'Vasoconstriction et rétention hydrosodée via l’angiotensine II et l’aldostérone'],
            ['Système nerveux sympathique rénal', 'Minutes', 'Module la sécrétion de rénine et la réabsorption tubulaire de sodium'],
            ['Natriurèse de pression (mécanisme rein-liquides corporels)', 'Heures à jours', 'Une pression artérielle élevée augmente l’excrétion rénale de sodium et d’eau, ce qui réduit la volémie et la pression'],
            ['Hormone antidiurétique (vasopressine)', 'Minutes à heures', 'Réabsorption d’eau au niveau du tube collecteur, effet vasoconstricteur à forte concentration'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Le mécanisme rein-liquides corporels comme régulateur dominant',
          texte:
            "Contrairement au baroréflexe, ce mécanisme ne se réinitialise pas et reste actif indéfiniment : il est considéré comme le déterminant le plus puissant de la pression artérielle à long terme, en couplant directement l’excrétion sodée à la pression de perfusion rénale.",
        },
      ],
    },
    {
      id: 'microcirculation',
      titre: 'Microcirculation et loi de Starling',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les échanges de liquide entre le plasma capillaire et l’interstitium résultent de l’équilibre entre pressions hydrostatiques et pressions oncotiques de part et d’autre de la paroi capillaire, décrit par la loi de Starling.",
        },
        {
          type: 'formule',
          expression: 'Flux net = K × [ (Pc − Pi) − σ × (πc − πi) ]',
          legende:
            "Pc et Pi : pressions hydrostatiques capillaire et interstitielle ; πc et πi : pressions oncotiques capillaire et interstitielle ; K : coefficient de filtration ; σ : coefficient de réflexion des protéines. Un flux net positif correspond à une filtration hors du capillaire, un flux négatif à une réabsorption.",
        },
        {
          type: 'tableau',
          titre: 'Filtration et réabsorption le long du capillaire',
          colonnes: ['Segment', 'Pression hydrostatique capillaire', 'Balance nette', 'Sens du mouvement d’eau'],
          lignes: [
            ['Pôle artériolaire', 'Plus élevée', 'Pression hydrostatique dominante', 'Filtration vers l’interstitium'],
            ['Pôle veinulaire', 'Plus basse', 'Pression oncotique relativement dominante', 'Réabsorption vers le capillaire'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le retour lymphatique complète le bilan',
          texte:
            "La filtration nette le long du capillaire dépasse légèrement la réabsorption : l’excédent de liquide filtré est drainé par le système lymphatique, qui le ramène à la circulation veineuse. Une insuffisance de ce drainage, ou une augmentation de la pression hydrostatique capillaire ou une baisse de la pression oncotique plasmatique, favorise la formation d’œdèmes.",
        },
      ],
    },
    {
      id: 'retour-veineux',
      titre: 'Retour veineux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le retour veineux désigne le débit de sang qui revient au cœur droit par les veines caves. Il doit, à l’état stable, être égal au débit cardiaque, puisque le système circulatoire est un circuit fermé.",
        },
        {
          type: 'liste',
          items: [
            "La pompe musculaire des membres inférieurs favorise le retour veineux : la contraction des muscles squelettiques comprime les veines profondes et chasse le sang vers le cœur, les valvules veineuses empêchant le reflux.",
            "La pompe thoraco-abdominale (respiratoire) facilite le retour veineux : l’inspiration abaisse la pression intrathoracique et augmente la pression intra-abdominale, créant un gradient de pression favorable au retour du sang vers l’oreillette droite.",
            "La veinoconstriction, sous contrôle sympathique, réduit la capacité du système veineux et augmente le retour veineux en mobilisant le sang du réservoir veineux splanchnique et cutané.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Interdépendance retour veineux et débit cardiaque',
          texte:
            "Le retour veineux détermine directement la précharge ventriculaire droite et donc, via la loi de Frank-Starling, le volume d’éjection systolique. Toute augmentation isolée et durable du retour veineux tend ainsi à augmenter le débit cardiaque, à contractilité constante.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le débit sanguin est proportionnel au gradient de pression et inversement proportionnel à la résistance (loi hémodynamique fondamentale).",
    "La résistance vasculaire dépend du rayon du vaisseau à la puissance quatrième, ce qui rend le calibre artériolaire déterminant.",
    "PAM = débit cardiaque × résistances vasculaires périphériques totales.",
    "Le baroréflexe, rapide et médié par le système nerveux autonome, stabilise la pression artérielle en quelques secondes mais se réinitialise en quelques jours.",
    "Le mécanisme rein-liquides corporels (natriurèse de pression) est le déterminant dominant de la pression artérielle à long terme.",
    "La loi de Starling explique les échanges d’eau capillaire par l’équilibre des pressions hydrostatiques et oncotiques.",
    "Le retour veineux est favorisé par la pompe musculaire, la pompe respiratoire et la veinoconstriction sympathique.",
    "À l’état stable, le retour veineux est égal au débit cardiaque.",
  ],
  erreursFrequentes: [
    "Croire que la pression artérielle moyenne est la simple moyenne arithmétique des pressions systolique et diastolique : elle est plus proche de la diastolique car la diastole dure plus longtemps.",
    "Oublier la sensibilité extrême de la résistance vasculaire au rayon (puissance quatrième) dans la loi de Poiseuille.",
    "Penser que le baroréflexe est un mécanisme de régulation à long terme : il s’adapte (se réinitialise) en quelques jours et ne peut donc pas fixer durablement la pression artérielle.",
    "Confondre filtration et réabsorption capillaires : la filtration prédomine au pôle artériolaire, la réabsorption tend à dominer au pôle veinulaire.",
    "Oublier le rôle du système lymphatique dans le drainage de l’excédent de liquide filtré non réabsorbé par les capillaires.",
    "Croire que le retour veineux et le débit cardiaque peuvent durablement diverger : dans un circuit fermé, ils s’équilibrent à l’état stable.",
  ],
  mnemotechniques: [
    {
      moyen: '« PAM = DC × RPT »',
      explication:
        'Pression artérielle moyenne égale débit cardiaque multiplié par résistances périphériques totales : l’équation maîtresse de l’hémodynamique systémique.',
    },
    {
      moyen: '« Baro = rapide mais oublie »',
      explication:
        'Le baroréflexe agit vite (secondes) mais se réinitialise (s’adapte) en quelques jours : il ne règle pas la pression à long terme.',
    },
    {
      moyen: '« Artériolaire filtre, veinulaire récupère »',
      explication:
        'Au pôle artériolaire du capillaire, la filtration domine ; au pôle veinulaire, la réabsorption tend à dominer.',
    },
  ],
  sources: [
    'Guyton et Hall, Précis de physiologie médicale',
    'Silverthorn, Physiologie humaine, une approche intégrée',
    'Sherwood, Physiologie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'physio-circulation-fc-01',
      recto: 'Donner la relation hémodynamique fondamentale reliant débit, pression et résistance.',
      verso: 'Débit = différence de pression / résistance, analogue à la loi d’Ohm.',
      type: 'formule',
      tags: ['hémodynamique'],
    },
    {
      id: 'physio-circulation-fc-02',
      recto: 'De quel facteur géométrique la résistance vasculaire dépend-elle le plus fortement ?',
      verso: 'Du rayon du vaisseau, à la puissance quatrième (loi de Poiseuille).',
      type: 'formule',
      tags: ['résistance', 'Poiseuille'],
    },
    {
      id: 'physio-circulation-fc-03',
      recto: 'Donner la formule d’estimation de la pression artérielle moyenne.',
      verso: 'PAM ≈ PA diastolique + 1/3 × (PA systolique − PA diastolique).',
      type: 'formule',
      tags: ['pression artérielle moyenne'],
    },
    {
      id: 'physio-circulation-fc-04',
      recto: 'Donner l’équation reliant PAM, débit cardiaque et résistances périphériques.',
      verso: 'PAM = débit cardiaque × résistances vasculaires périphériques totales.',
      type: 'formule',
      tags: ['PAM'],
    },
    {
      id: 'physio-circulation-fc-05',
      recto: 'Où se situent les barorécepteurs du baroréflexe ?',
      verso: 'Dans la paroi du sinus carotidien et de la crosse aortique.',
      type: 'definition',
      tags: ['baroréflexe'],
    },
    {
      id: 'physio-circulation-fc-06',
      recto: 'Quelle est la réponse du baroréflexe à une baisse de pression artérielle ?',
      verso: 'Diminution du tonus parasympathique et augmentation du tonus sympathique : accélération cardiaque, augmentation de contractilité et vasoconstriction.',
      type: 'mecanisme',
      tags: ['baroréflexe'],
    },
    {
      id: 'physio-circulation-fc-07',
      recto: 'Quel mécanisme est considéré comme le déterminant dominant de la pression artérielle à long terme ?',
      verso: 'Le mécanisme rein-liquides corporels (natriurèse de pression), qui couple excrétion sodée et pression de perfusion rénale.',
      type: 'mecanisme',
      tags: ['régulation long terme'],
    },
    {
      id: 'physio-circulation-fc-08',
      recto: 'Donner la formule de la loi de Starling pour les échanges capillaires.',
      verso: 'Flux net = K × [ (Pc − Pi) − σ × (πc − πi) ], où Pc/Pi sont les pressions hydrostatiques et πc/πi les pressions oncotiques.',
      type: 'formule',
      tags: ['loi de Starling'],
    },
    {
      id: 'physio-circulation-fc-09',
      recto: 'Où la filtration capillaire prédomine-t-elle, et où la réabsorption tend-elle à dominer ?',
      verso: 'Filtration au pôle artériolaire (pression hydrostatique élevée) ; réabsorption relative au pôle veinulaire.',
      type: 'mecanisme',
      tags: ['microcirculation'],
    },
    {
      id: 'physio-circulation-fc-10',
      recto: 'Quel système draine l’excédent de liquide filtré non réabsorbé par les capillaires ?',
      verso: 'Le système lymphatique.',
      type: 'definition',
      tags: ['lymphatique'],
    },
    {
      id: 'physio-circulation-fc-11',
      recto: 'Citer deux mécanismes qui favorisent le retour veineux.',
      verso: 'La pompe musculaire des membres inférieurs et la pompe thoraco-abdominale (respiratoire).',
      type: 'mecanisme',
      tags: ['retour veineux'],
    },
    {
      id: 'physio-circulation-fc-12',
      recto: 'Quelle est la relation entre retour veineux et débit cardiaque à l’état stable ?',
      verso: 'Ils sont égaux, le système circulatoire étant un circuit fermé.',
      type: 'definition',
      tags: ['retour veineux', 'débit cardiaque'],
    },
  ],
  qcm: [
    {
      id: 'physio-circulation-qcm-01',
      enonce: "Concernant l’hémodynamique générale, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le débit sanguin est proportionnel à la résistance vasculaire.',
          vraie: false,
          justification: 'Faux : le débit est inversement proportionnel à la résistance, à gradient de pression constant.',
        },
        {
          lettre: 'B',
          texte: 'La résistance vasculaire dépend du rayon du vaisseau à la puissance quatrième.',
          vraie: true,
          justification: 'Exact selon la loi de Poiseuille, ce qui rend le calibre artériolaire particulièrement déterminant.',
        },
        {
          lettre: 'C',
          texte: 'La pression artérielle moyenne est la moyenne arithmétique simple des pressions systolique et diastolique.',
          vraie: false,
          justification: "Faux : elle est plus proche de la diastolique, la formule usuelle étant PAM ≈ diastolique + 1/3 × pression différentielle.",
        },
        {
          lettre: 'D',
          texte: 'La pression différentielle est la différence entre pression systolique et pression diastolique.',
          vraie: true,
          justification: 'Exact, elle vaut environ 40 mmHg au repos chez un adulte sain.',
        },
        {
          lettre: 'E',
          texte: 'Une augmentation de la viscosité sanguine diminue la résistance vasculaire.',
          vraie: false,
          justification: 'Faux : une augmentation de la viscosité augmente la résistance à l’écoulement.',
        },
      ],
      correction: 'Réponses exactes : B et D. Retenir la sensibilité au rayon (puissance 4) et la définition de la pression différentielle.',
      difficulte: 2,
    },
    {
      id: 'physio-circulation-qcm-02',
      enonce: "Concernant les déterminants de la pression artérielle, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La PAM est le produit du débit cardiaque par les résistances vasculaires périphériques totales.',
          vraie: true,
          justification: 'Exact : c’est l’équation maîtresse de l’hémodynamique systémique.',
        },
        {
          lettre: 'B',
          texte: 'Une augmentation de la volémie tend à augmenter la pression artérielle.',
          vraie: true,
          justification: 'Exact : elle augmente le retour veineux, donc la précharge et le débit cardiaque.',
        },
        {
          lettre: 'C',
          texte: 'Une vasoconstriction artériolaire diminue les résistances périphériques.',
          vraie: false,
          justification: 'Faux : la vasoconstriction augmente les résistances périphériques, donc tend à augmenter la pression artérielle.',
        },
        {
          lettre: 'D',
          texte: 'La fréquence cardiaque et le volume d’éjection systolique déterminent conjointement le débit cardiaque.',
          vraie: true,
          justification: 'Exact : débit cardiaque = fréquence cardiaque × volume d’éjection systolique.',
        },
        {
          lettre: 'E',
          texte: 'Les résistances vasculaires périphériques n’influencent pas la pression artérielle moyenne.',
          vraie: false,
          justification: 'Faux : elles sont l’un des deux déterminants directs de la PAM, avec le débit cardiaque.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Toute variation de PA se ramène à une variation de débit cardiaque et/ou de résistances périphériques.',
      difficulte: 2,
    },
    {
      id: 'physio-circulation-qcm-03',
      enonce: "Concernant le baroréflexe, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Les barorécepteurs sont des chimiorécepteurs.',
          vraie: false,
          justification: 'Faux : ce sont des mécanorécepteurs sensibles à l’étirement de la paroi vasculaire.',
        },
        {
          lettre: 'B',
          texte: 'Les afférences barosensibles empruntent notamment le nerf vague.',
          vraie: true,
          justification: 'Exact, avec le nerf glossopharyngien pour les afférences du sinus carotidien.',
        },
        {
          lettre: 'C',
          texte: 'Une hausse de pression artérielle augmente le tonus parasympathique.',
          vraie: true,
          justification: 'Exact : cela ralentit la fréquence cardiaque et favorise le retour vers la pression de consigne.',
        },
        {
          lettre: 'D',
          texte: 'Le baroréflexe agit en plusieurs jours.',
          vraie: false,
          justification: 'Faux : il agit en quelques secondes ; c’est sa réponse à long terme qui se réinitialise en quelques jours.',
        },
        {
          lettre: 'E',
          texte: 'Le centre intégrateur du baroréflexe est situé dans le bulbe rachidien.',
          vraie: true,
          justification: 'Exact, au niveau du noyau du tractus solitaire.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Le baroréflexe est un mécanisme rapide, nerveux, à médiation bulbaire.',
      difficulte: 2,
    },
    {
      id: 'physio-circulation-qcm-04',
      enonce: "Concernant la régulation à long terme de la pression artérielle, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le système rénine-angiotensine-aldostérone favorise la rétention hydrosodée.',
          vraie: true,
          justification: 'Exact, via l’action de l’aldostérone sur le tube collecteur rénal.',
        },
        {
          lettre: 'B',
          texte: 'La natriurèse de pression diminue l’excrétion de sodium lorsque la pression artérielle augmente.',
          vraie: false,
          justification: 'Faux : c’est l’inverse, une pression artérielle élevée augmente l’excrétion rénale de sodium et d’eau.',
        },
        {
          lettre: 'C',
          texte: 'La vasopressine (hormone antidiurétique) favorise la réabsorption d’eau.',
          vraie: true,
          justification: 'Exact, au niveau du tube collecteur rénal.',
        },
        {
          lettre: 'D',
          texte: 'Le mécanisme rein-liquides corporels se réinitialise en quelques jours comme le baroréflexe.',
          vraie: false,
          justification: "Faux : c’est justement l’absence de réinitialisation qui en fait le déterminant dominant à long terme.",
        },
        {
          lettre: 'E',
          texte: "L’angiotensine II est vasoconstrictrice.",
          vraie: true,
          justification: "Exact, c’est l’un des vasoconstricteurs les plus puissants de l’organisme.",
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le système rénine-angiotensine-aldostérone et la vasopressine agissent de concert sur volémie et tonus vasculaire.',
      difficulte: 2,
    },
    {
      id: 'physio-circulation-qcm-05',
      enonce: "Concernant les échanges capillaires selon la loi de Starling, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La pression hydrostatique capillaire favorise la filtration hors du vaisseau.',
          vraie: true,
          justification: 'Exact : elle pousse le liquide du capillaire vers l’interstitium.',
        },
        {
          lettre: 'B',
          texte: 'La pression oncotique plasmatique favorise la filtration hors du vaisseau.',
          vraie: false,
          justification: "Faux : la pression oncotique plasmatique, portée par les protéines, favorise au contraire la réabsorption d’eau vers le capillaire.",
        },
        {
          lettre: 'C',
          texte: 'La filtration prédomine au pôle artériolaire du capillaire.',
          vraie: true,
          justification: 'Exact, la pression hydrostatique y étant plus élevée qu’au pôle veinulaire.',
        },
        {
          lettre: 'D',
          texte: 'L’excédent de liquide filtré est intégralement réabsorbé par les capillaires veinulaires.',
          vraie: false,
          justification: "Faux : une partie de l’excédent est drainée par le système lymphatique.",
        },
        {
          lettre: 'E',
          texte: 'Une baisse de la protidémie peut favoriser la formation d’œdèmes.',
          vraie: true,
          justification: 'Exact : elle diminue la pression oncotique plasmatique et donc la réabsorption capillaire.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. La loi de Starling oppose pressions hydrostatiques et oncotiques de part et d’autre de la paroi capillaire.',
      difficulte: 2,
    },
    {
      id: 'physio-circulation-qcm-06',
      enonce: "Concernant le retour veineux, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La pompe musculaire des membres inférieurs favorise le retour veineux.',
          vraie: true,
          justification: 'Exact : la contraction musculaire comprime les veines profondes et chasse le sang vers le cœur grâce aux valvules veineuses.',
        },
        {
          lettre: 'B',
          texte: "L’inspiration diminue la pression intrathoracique.",
          vraie: true,
          justification: 'Exact, ce qui crée un gradient de pression favorable au retour veineux vers l’oreillette droite.',
        },
        {
          lettre: 'C',
          texte: 'La veinoconstriction sympathique diminue le retour veineux.',
          vraie: false,
          justification: 'Faux : elle réduit la capacité du réservoir veineux et mobilise du sang vers le cœur, augmentant ainsi le retour veineux.',
        },
        {
          lettre: 'D',
          texte: 'À l’état stable, le retour veineux est égal au débit cardiaque.',
          vraie: true,
          justification: 'Exact, car le système circulatoire forme un circuit fermé.',
        },
        {
          lettre: 'E',
          texte: 'Le retour veineux n’a aucune influence sur le volume d’éjection systolique.',
          vraie: false,
          justification: "Faux : il détermine la précharge ventriculaire droite et influence donc, via la loi de Frank-Starling, le volume d’éjection systolique.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. Pompe musculaire, pompe respiratoire et veinoconstriction favorisent tous le retour veineux.',
      difficulte: 2,
    },
  ],
};
