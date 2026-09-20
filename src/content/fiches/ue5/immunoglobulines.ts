import type { Fiche } from '../../types';

export const ficheImmunoglobulines: Fiche = {
  id: 'ue5-immunoglobulines',
  ue: 'ue5',
  titre: 'Les immunoglobulines',
  sousTitre:
    'Structure, fragments, isotypes IgG, IgA, IgM, IgD et IgE, diversité génétique, hypermutation et fonctions effectrices',
  chapitre: 'Immunité adaptative',
  ordre: 6,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'immunoglobuline',
    'anticorps',
    'fragment Fab',
    'fragment Fc',
    'isotype',
    'recombinaison VDJ',
    'hypermutation somatique',
    'commutation de classe',
    'IgG',
    'IgA',
    'IgM',
    'IgE',
  ],
  objectifs: [
    'Décrire la structure générale d’une immunoglobuline et ses fragments fonctionnels.',
    'Citer les cinq isotypes d’immunoglobulines humaines et leurs propriétés distinctives.',
    'Expliquer le mécanisme de la recombinaison VDJ à l’origine de la diversité du répertoire des anticorps.',
    'Expliquer les mécanismes d’hypermutation somatique et de commutation de classe.',
    'Décrire les principales fonctions effectrices des anticorps.',
  ],
  sections: [
    {
      id: 'structure-generale',
      titre: 'Structure générale d’une immunoglobuline',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une immunoglobuline (ou anticorps) est une glycoprotéine sécrétée par les plasmocytes, ou exprimée à la membrane des lymphocytes B sous forme de récepteur (BCR). Elle est constituée de quatre chaînes polypeptidiques reliées par des ponts disulfure : deux chaînes lourdes identiques et deux chaînes légères identiques, formant une structure en Y.",
        },
        {
          type: 'liste',
          items: [
            "Chaque chaîne comporte une région variable (V), qui diffère d’un anticorps à l’autre et détermine la spécificité antigénique, et une ou plusieurs régions constantes (C), identiques au sein d’un même isotype.",
            "Les deux chaînes légères sont de type kappa ou lambda ; ce choix est indépendant de l’isotype de la chaîne lourde.",
            "Le site de fixation de l’antigène (paratope) est formé par l’association des régions variables d’une chaîne lourde et d’une chaîne légère ; une molécule d’immunoglobuline possède donc deux sites de fixation identiques (à l’exception de l’IgM pentamérique et de l’IgA dimérique, qui en possèdent davantage).",
          ],
        },
        {
          type: 'tableau',
          titre: 'Fragments obtenus par digestion enzymatique',
          colonnes: ['Fragment', 'Enzyme utilisée', 'Fonction'],
          lignes: [
            ['Fab (Fragment antigen binding)', 'Papaïne', 'Fixation de l’antigène (deux fragments Fab par molécule)'],
            ['Fc (Fragment crystallizable)', 'Papaïne', 'Fonctions effectrices : fixation aux récepteurs Fc, activation du complément'],
            ['F(ab’)2', 'Pepsine', 'Deux sites de fixation de l’antigène reliés, sans fragment Fc'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Région charnière',
          texte:
            "La région charnière (hinge), située entre les fragments Fab et Fc, confère à la molécule une flexibilité qui lui permet de se lier simultanément à deux épitopes distants et facilite l’accès du complément au fragment Fc après fixation à l’antigène.",
        },
      ],
    },
    {
      id: 'isotypes',
      titre: 'Les cinq isotypes d’immunoglobulines',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’isotype d’une immunoglobuline est déterminé par la nature de sa chaîne lourde constante : mu (IgM), gamma (IgG), alpha (IgA), delta (IgD) ou epsilon (IgE).",
        },
        {
          type: 'tableau',
          titre: 'Propriétés des cinq isotypes',
          colonnes: ['Isotype', 'Forme', 'Concentration sérique', 'Propriétés principales'],
          lignes: [
            [
              'IgM',
              'Pentamérique (sérique)',
              'Élevée en réponse primaire précoce',
              'Premier anticorps produit ; très efficace activateur de la voie classique du complément',
            ],
            [
              'IgG',
              'Monomérique',
              'Isotype majoritaire du sérum',
              'Seul isotype à traverser le placenta ; opsonisation, neutralisation, activation du complément',
            ],
            [
              'IgA',
              'Monomérique (sérique) ou dimérique (sécrétoire)',
              'Isotype majoritaire des sécrétions muqueuses',
              'Immunité des muqueuses ; forme sécrétoire protégée de la protéolyse par la pièce sécrétoire',
            ],
            [
              'IgD',
              'Monomérique',
              'Très faible',
              'Corécepteur membranaire du lymphocyte B naïf, fonction sérique mal définie',
            ],
            [
              'IgE',
              'Monomérique',
              'Très faible',
              'Réactions d’hypersensibilité immédiate, défense antiparasitaire (helminthes)',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Quatre sous-classes d’IgG',
          texte:
            "Il existe quatre sous-classes d’IgG (IgG1, IgG2, IgG3, IgG4), qui diffèrent par leur capacité à activer le complément et à se lier aux récepteurs Fc. L’IgG1 et l’IgG3 sont les activateurs les plus efficaces de la voie classique du complément.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'IgG, seul isotype transplacentaire',
          texte:
            "Grâce à son affinité pour le récepteur néonatal FcRn, l’IgG est le seul isotype capable de traverser le placenta, assurant une immunité passive transitoire au nouveau-né durant les premiers mois de vie, avant la maturation de son propre système immunitaire.",
        },
      ],
    },
    {
      id: 'diversite-genetique',
      titre: 'Diversité génétique des anticorps : recombinaison VDJ',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le répertoire quasi infini des spécificités antigéniques repose sur un réarrangement somatique des gènes des immunoglobulines, appelé recombinaison VDJ, qui se produit durant la maturation du lymphocyte B dans la moelle osseuse.",
        },
        {
          type: 'etapes',
          titre: 'Principe de la recombinaison VDJ',
          etapes: [
            {
              titre: 'Segments géniques multiples',
              detail:
                "Le locus de la chaîne lourde comporte de nombreux segments géniques V (variable), D (diversity) et J (joining) ; le locus des chaînes légères ne comporte que des segments V et J.",
            },
            {
              titre: 'Recombinaison aléatoire',
              detail:
                "Un segment V, un segment D et un segment J (pour la chaîne lourde) sont choisis au hasard et assemblés par recombinaison somatique, catalysée notamment par les enzymes RAG1 et RAG2.",
            },
            {
              titre: 'Diversité jonctionnelle',
              detail:
                "L’ajout ou la délétion aléatoire de nucléotides aux points de jonction (notamment par la désoxynucléotidyl-transférase terminale, TdT) accroît encore la diversité du répertoire.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Exclusion allélique',
          definition:
            "Mécanisme assurant qu’un seul des deux allèles parentaux de chaque locus (lourd et léger) est effectivement exprimé par un lymphocyte B donné, garantissant qu’une cellule produit des anticorps d’une seule spécificité.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'RAG1/RAG2, spécifiques des lymphocytes',
          texte:
            "Les enzymes RAG1 et RAG2 sont indispensables à la recombinaison VDJ des immunoglobulines mais aussi du récepteur T. Un déficit en RAG entraîne un déficit immunitaire combiné sévère, avec absence de lymphocytes T et B matures fonctionnels.",
        },
      ],
    },
    {
      id: 'hypermutation-commutation',
      titre: 'Hypermutation somatique et commutation de classe',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Après activation antigénique dans le centre germinatif, le lymphocyte B subit deux processus supplémentaires de diversification, dépendants de l’enzyme AID (activation-induced cytidine deaminase).",
        },
        {
          type: 'tableau',
          titre: 'Hypermutation somatique versus commutation de classe',
          colonnes: ['Processus', 'Région du gène affectée', 'Conséquence'],
          lignes: [
            [
              'Hypermutation somatique',
              'Régions variables (V)',
              'Introduction de mutations ponctuelles augmentant ou diminuant l’affinité pour l’antigène ; base de la maturation d’affinité',
            ],
            [
              'Commutation de classe (switch isotypique)',
              'Région constante (C) de la chaîne lourde',
              'Changement d’isotype (par exemple d’IgM vers IgG ou IgA) sans modification de la spécificité antigénique',
            ],
          ],
        },
        {
          type: 'liste',
          items: [
            "La maturation d’affinité résulte de la sélection, dans le centre germinatif, des lymphocytes B dont le récepteur muté présente la plus forte affinité pour l’antigène, via la compétition pour l’aide des lymphocytes T folliculaires auxiliaires.",
            "La commutation de classe conserve la région variable, donc la spécificité antigénique de l’anticorps, tout en changeant ses fonctions effectrices associées à l’isotype.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Syndrome hyper-IgM',
          texte:
            "Le syndrome hyper-IgM, le plus souvent lié à un déficit du ligand de CD40 (CD40L) sur le lymphocyte T, empêche la commutation de classe et l’hypermutation somatique : les lymphocytes B ne produisent alors que des IgM, en quantité normale ou augmentée, avec un déficit des autres isotypes.",
        },
      ],
    },
    {
      id: 'fonctions-effectrices',
      titre: 'Fonctions effectrices des anticorps',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au-delà de la reconnaissance spécifique de l’antigène par le fragment Fab, les anticorps exercent des fonctions effectrices variées, dépendantes de leur fragment Fc.",
        },
        {
          type: 'tableau',
          titre: 'Principales fonctions effectrices des anticorps',
          colonnes: ['Fonction', 'Mécanisme'],
          lignes: [
            ['Neutralisation', 'Blocage direct de la fixation d’un pathogène ou d’une toxine à son récepteur cellulaire'],
            ['Opsonisation', 'Fixation du fragment Fc aux récepteurs Fc des phagocytes, facilitant la phagocytose'],
            ['Activation du complément', 'Fixation de C1q sur le fragment Fc, déclenchant la voie classique'],
            [
              'Cytotoxicité cellulaire dépendante des anticorps (ADCC)',
              'Reconnaissance du fragment Fc par les cellules NK, induisant la lyse de la cellule cible recouverte d’anticorps',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le rôle de chaque fragment',
          texte:
            "Le fragment Fab assure la reconnaissance spécifique de l’antigène ; le fragment Fc assure les fonctions effectrices (complément, récepteurs Fc, transfert placentaire). Une même spécificité antigénique (Fab) peut ainsi être associée à des fonctions effectrices différentes (Fc) selon l’isotype, grâce à la commutation de classe.",
        },
      ],
    },
  ],
  pointsCles: [
    'Une immunoglobuline est formée de deux chaînes lourdes et deux chaînes légères, avec des régions variables (spécificité) et constantes (isotype).',
    'Le fragment Fab fixe l’antigène, le fragment Fc porte les fonctions effectrices.',
    'Les cinq isotypes sont IgM, IgG, IgA, IgD et IgE, définis par la chaîne lourde constante.',
    'Seule l’IgG traverse le placenta ; l’IgA sécrétoire dimérique protège les muqueuses ; l’IgE médie l’hypersensibilité immédiate.',
    'La recombinaison VDJ, catalysée par RAG1/RAG2, génère la diversité primaire du répertoire des anticorps dans la moelle osseuse.',
    'L’hypermutation somatique (affinité) et la commutation de classe (isotype) ont lieu dans le centre germinatif, sous l’action de l’enzyme AID.',
    'Les fonctions effectrices des anticorps incluent neutralisation, opsonisation, activation du complément et ADCC.',
  ],
  erreursFrequentes: [
    'Confondre fragment Fab (fixation de l’antigène) et fragment Fc (fonctions effectrices).',
    'Oublier que l’IgM circulante est pentamérique, ce qui en fait l’activateur le plus efficace de la voie classique du complément.',
    'Croire que toutes les immunoglobulines traversent le placenta : seule l’IgG le fait, via le récepteur FcRn.',
    'Confondre recombinaison VDJ (diversité primaire, moelle osseuse) et hypermutation somatique (maturation d’affinité, centre germinatif).',
    'Penser que la commutation de classe modifie la spécificité antigénique de l’anticorps : elle ne change que l’isotype, la région variable est conservée.',
    'Oublier le rôle central de l’enzyme AID dans l’hypermutation somatique et la commutation de classe.',
  ],
  mnemotechniques: [
    {
      moyen: '« MGADE » : Mu, Gamma, Alpha, Delta, Epsilon',
      explication:
        'Les cinq chaînes lourdes constantes, dans l’ordre IgM, IgG, IgA, IgD, IgE, permettent de retenir les cinq isotypes.',
    },
    {
      moyen: 'Fab attrape, Fc fait faire',
      explication:
        'Le Fab « attrape » l’antigène (fixation), le Fc « fait faire » quelque chose à d’autres cellules (fonctions effectrices).',
    },
    {
      moyen: 'VDJ dans la moelle, hypermutation dans le ganglion',
      explication:
        'La recombinaison VDJ a lieu tôt, dans la moelle osseuse (avant l’antigène) ; l’hypermutation et la commutation ont lieu après stimulation antigénique, dans le centre germinatif du ganglion.',
    },
  ],
  sources: [
    'Abbas, Lichtman, Pillai, Les bases de l’immunologie fondamentale et clinique',
    'Janeway, Immunobiologie',
    'Roitt, Immunologie',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue5-immunoglobulines-fc-01',
      recto: 'Combien de chaînes polypeptidiques composent une immunoglobuline de base ?',
      verso: 'Quatre : deux chaînes lourdes identiques et deux chaînes légères identiques.',
      type: 'chiffre',
      tags: ['structure'],
    },
    {
      id: 'ue5-immunoglobulines-fc-02',
      recto: 'Quel fragment fixe l’antigène ? Quel fragment porte les fonctions effectrices ?',
      verso: 'Le fragment Fab fixe l’antigène ; le fragment Fc porte les fonctions effectrices.',
      type: 'definition',
      tags: ['Fab', 'Fc'],
    },
    {
      id: 'ue5-immunoglobulines-fc-03',
      recto: 'Quel est le seul isotype d’immunoglobuline à traverser le placenta ?',
      verso: 'L’IgG, grâce au récepteur néonatal FcRn.',
      type: 'chiffre',
      tags: ['IgG'],
    },
    {
      id: 'ue5-immunoglobulines-fc-04',
      recto: 'Sous quelle forme circule l’IgM sérique ?',
      verso: 'Sous forme pentamérique.',
      type: 'definition',
      tags: ['IgM'],
    },
    {
      id: 'ue5-immunoglobulines-fc-05',
      recto: 'Quel isotype domine dans les sécrétions muqueuses, et sous quelle forme ?',
      verso: 'L’IgA, sous forme dimérique sécrétoire, protégée par la pièce sécrétoire.',
      type: 'definition',
      tags: ['IgA'],
    },
    {
      id: 'ue5-immunoglobulines-fc-06',
      recto: 'Quel isotype est impliqué dans les réactions d’hypersensibilité immédiate et la défense antiparasitaire ?',
      verso: 'L’IgE.',
      type: 'clinique',
      tags: ['IgE'],
    },
    {
      id: 'ue5-immunoglobulines-fc-07',
      recto: 'Quelles enzymes catalysent la recombinaison VDJ ?',
      verso: 'RAG1 et RAG2.',
      type: 'mecanisme',
      tags: ['VDJ'],
    },
    {
      id: 'ue5-immunoglobulines-fc-08',
      recto: 'Quels segments géniques compose le locus de la chaîne légère, à la différence de la chaîne lourde ?',
      verso: 'Uniquement des segments V et J (pas de segment D, contrairement à la chaîne lourde).',
      type: 'definition',
      tags: ['VDJ'],
    },
    {
      id: 'ue5-immunoglobulines-fc-09',
      recto: 'Quelle enzyme est indispensable à l’hypermutation somatique et à la commutation de classe ?',
      verso: 'AID (activation-induced cytidine deaminase).',
      type: 'mecanisme',
      tags: ['AID'],
    },
    {
      id: 'ue5-immunoglobulines-fc-10',
      recto: 'Que modifie la commutation de classe, et que conserve-t-elle ?',
      verso: 'Elle modifie la région constante (isotype) et conserve la région variable (spécificité antigénique).',
      type: 'mecanisme',
      tags: ['commutation de classe'],
    },
    {
      id: 'ue5-immunoglobulines-fc-11',
      recto: 'Quel déficit est à l’origine du syndrome hyper-IgM le plus fréquent ?',
      verso: 'Le déficit du ligand de CD40 (CD40L) sur le lymphocyte T.',
      type: 'clinique',
      tags: ['déficit immunitaire'],
    },
    {
      id: 'ue5-immunoglobulines-fc-12',
      recto: 'Qu’est-ce que l’ADCC ?',
      verso: 'La cytotoxicité cellulaire dépendante des anticorps : les cellules NK reconnaissent le fragment Fc d’anticorps fixés sur une cellule cible et la lysent.',
      type: 'mecanisme',
      tags: ['fonctions effectrices'],
    },
  ],
  qcm: [
    {
      id: 'ue5-immunoglobulines-qcm-01',
      enonce: 'Concernant la structure des immunoglobulines, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une immunoglobuline de base comporte deux chaînes lourdes et deux chaînes légères.', vraie: true, justification: 'Exact : c’est la structure de base en Y.' },
        { lettre: 'B', texte: 'Le fragment Fab est obtenu par digestion à la pepsine et porte les fonctions effectrices.', vraie: false, justification: 'Le fragment Fab est obtenu par la papaïne et fixe l’antigène ; les fonctions effectrices relèvent du Fc.' },
        { lettre: 'C', texte: 'La région charnière confère une flexibilité à la molécule.', vraie: true, justification: 'Exact : elle permet la fixation simultanée à deux épitopes distants.' },
        { lettre: 'D', texte: 'Les chaînes légères sont de type kappa ou lambda.', vraie: true, justification: 'Exact, indépendamment de l’isotype de la chaîne lourde.' },
        { lettre: 'E', texte: 'Le fragment F(ab’)2 conserve le fragment Fc intact.', vraie: false, justification: 'Le F(ab’)2, obtenu par la pepsine, ne comporte pas de fragment Fc.' },
      ],
      correction: 'Réponses exactes : A, C et D. Bien associer chaque fragment à son enzyme et à sa fonction.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunoglobulines-qcm-02',
      enonce: 'Concernant les isotypes d’immunoglobulines, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’IgG est le seul isotype à traverser la barrière placentaire.', vraie: true, justification: 'Exact, via le récepteur néonatal FcRn.' },
        { lettre: 'B', texte: 'L’IgM sérique est habituellement sous forme monomérique.', vraie: false, justification: 'L’IgM sérique circule sous forme pentamérique.' },
        { lettre: 'C', texte: 'L’IgA sécrétoire est protégée de la protéolyse par la pièce sécrétoire.', vraie: true, justification: 'Exact : cette protection est essentielle à sa fonction dans les sécrétions muqueuses.' },
        { lettre: 'D', texte: 'L’IgE est l’isotype majoritaire du sérum.', vraie: false, justification: 'L’IgG est l’isotype majoritaire du sérum ; l’IgE est présente en très faible concentration.' },
        { lettre: 'E', texte: 'L’IgD est un corécepteur membranaire exprimé sur le lymphocyte B naïf.', vraie: true, justification: 'Exact, en association avec l’IgM membranaire.' },
      ],
      correction: 'Réponses exactes : A, C et E. Chaque isotype a des propriétés fonctionnelles distinctives à retenir.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunoglobulines-qcm-03',
      enonce: 'Concernant la recombinaison VDJ, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle se produit dans le centre germinatif après stimulation antigénique.', vraie: false, justification: 'Elle se produit dans la moelle osseuse, indépendamment de l’antigène, durant la maturation du lymphocyte B.' },
        { lettre: 'B', texte: 'RAG1 et RAG2 sont indispensables à ce réarrangement.', vraie: true, justification: 'Exact : ce sont les enzymes clés de la recombinaison V(D)J.' },
        { lettre: 'C', texte: 'Le locus de la chaîne légère comporte des segments V, D et J.', vraie: false, justification: 'Le locus de la chaîne légère ne comporte que des segments V et J, sans segment D.' },
        { lettre: 'D', texte: 'L’exclusion allélique garantit qu’un lymphocyte B n’exprime qu’une seule spécificité antigénique.', vraie: true, justification: 'Exact : un seul des deux allèles parentaux est exprimé par cellule.' },
        { lettre: 'E', texte: 'Un déficit en RAG entraîne un déficit immunitaire combiné sévère.', vraie: true, justification: 'Exact : l’absence de recombinaison bloque la maturation des lymphocytes T et B.' },
      ],
      correction: 'Réponses exactes : B, D et E. La recombinaison VDJ est un événement précoce, antigéno-indépendant.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunoglobulines-qcm-04',
      enonce: 'Concernant l’hypermutation somatique et la commutation de classe, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les deux processus dépendent de l’enzyme AID.', vraie: true, justification: 'Exact : AID est indispensable aux deux mécanismes.' },
        { lettre: 'B', texte: 'L’hypermutation somatique affecte la région constante de la chaîne lourde.', vraie: false, justification: 'Elle affecte les régions variables, pas la région constante.' },
        { lettre: 'C', texte: 'La commutation de classe modifie l’isotype sans changer la spécificité antigénique.', vraie: true, justification: 'Exact : la région variable, donc la spécificité, est conservée.' },
        { lettre: 'D', texte: 'La maturation d’affinité sélectionne les lymphocytes B de plus forte affinité pour l’antigène.', vraie: true, justification: 'Exact, via la compétition pour l’aide des lymphocytes T folliculaires auxiliaires.' },
        { lettre: 'E', texte: 'Ces deux processus ont lieu dans la moelle osseuse avant toute rencontre antigénique.', vraie: false, justification: 'Ils ont lieu dans le centre germinatif, après stimulation antigénique.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir le rôle central d’AID dans les deux processus post-antigéniques.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunoglobulines-qcm-05',
      enonce: 'Concernant les fonctions effectrices des anticorps, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’opsonisation fait intervenir la reconnaissance du fragment Fc par des récepteurs Fc.', vraie: true, justification: 'Exact : les phagocytes portent des récepteurs Fc facilitant la phagocytose des cibles opsonisées.' },
        { lettre: 'B', texte: 'L’activation de la voie classique du complément implique la fixation de C1q sur le fragment Fab.', vraie: false, justification: 'C1q se fixe sur le fragment Fc, pas sur le fragment Fab.' },
        { lettre: 'C', texte: 'L’ADCC implique la reconnaissance du fragment Fc par les cellules NK.', vraie: true, justification: 'Exact : c’est le mécanisme de la cytotoxicité cellulaire dépendante des anticorps.' },
        { lettre: 'D', texte: 'La neutralisation empêche la fixation d’un pathogène ou d’une toxine à son récepteur.', vraie: true, justification: 'Exact : c’est une fonction directe du fragment Fab.' },
        { lettre: 'E', texte: 'Toutes les fonctions effectrices sont identiques quel que soit l’isotype.', vraie: false, justification: 'Les fonctions effectrices varient selon l’isotype, du fait des différences du fragment Fc.' },
      ],
      correction: 'Réponses exactes : A, C et D. Le fragment Fc conditionne la diversité des fonctions effectrices selon l’isotype.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunoglobulines-qcm-06',
      enonce: 'Concernant les sous-classes d’IgG et les particularités isotypiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il existe quatre sous-classes d’IgG.', vraie: true, justification: 'Exact : IgG1, IgG2, IgG3 et IgG4.' },
        { lettre: 'B', texte: 'L’IgG1 et l’IgG3 sont les sous-classes les plus efficaces pour activer le complément.', vraie: true, justification: 'Exact : elles activent plus efficacement la voie classique que l’IgG2 et l’IgG4.' },
        { lettre: 'C', texte: 'L’IgM est un mauvais activateur de la voie classique du complément.', vraie: false, justification: 'L’IgM pentamérique est au contraire le plus efficace activateur de la voie classique.' },
        { lettre: 'D', texte: 'La forme sécrétoire de l’IgA est retrouvée dans le lait maternel.', vraie: true, justification: 'Exact : l’IgA sécrétoire protège les muqueuses du nouveau-né via l’allaitement.' },
        { lettre: 'E', texte: 'L’IgD est l’isotype majoritaire des réactions allergiques.', vraie: false, justification: 'C’est l’IgE qui est l’isotype impliqué dans les réactions d’hypersensibilité immédiate.' },
      ],
      correction: 'Réponses exactes : A, B et D. Les particularités isotypiques sont un grand classique des QCM d’immunologie.',
      difficulte: 2,
    },
  ],
};
