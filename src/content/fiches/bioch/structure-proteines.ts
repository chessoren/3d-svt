import type { Fiche } from '../../types';

export const ficheStructureProteines: Fiche = {
  id: 'bioch-structure-proteines',
  ue: 'bioch',
  titre: 'Structure des protéines',
  sousTitre: 'Structures primaire, secondaire, tertiaire et quaternaire ; repliement et dénaturation',
  chapitre: 'Biochimie structurale',
  ordre: 2,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'structure primaire',
    'hélice alpha',
    'feuillet bêta',
    'structure tertiaire',
    'structure quaternaire',
    'repliement',
    'chaperons moléculaires',
    'dénaturation',
    'collagène',
    'hémoglobine',
  ],
  objectifs: [
    'Définir les quatre niveaux d’organisation structurale d’une protéine.',
    'Décrire la géométrie de l’hélice alpha et du feuillet bêta et leurs liaisons stabilisatrices.',
    'Citer les interactions responsables de la structure tertiaire.',
    'Expliquer le rôle des chaperons moléculaires dans le repliement des protéines.',
    'Définir la dénaturation et ses agents, et distinguer réversibilité et irréversibilité.',
    'Illustrer ces notions par les exemples de l’hémoglobine et du collagène.',
  ],
  sections: [
    {
      id: 'structure-primaire',
      titre: 'Structure primaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La structure primaire est la séquence des acides aminés d’une protéine, reliés entre eux par des liaisons peptidiques, depuis l’extrémité N-terminale jusqu’à l’extrémité C-terminale. Elle est entièrement déterminée par la séquence du gène qui code la protéine et constitue le niveau d’organisation le plus fondamental : c’est elle qui, in fine, dicte tous les niveaux de structure supérieurs.",
        },
        {
          type: 'definition',
          terme: 'Structure primaire',
          definition:
            "Ordre linéaire d’enchaînement des résidus d’acides aminés dans une chaîne polypeptidique, sans considération de la conformation tridimensionnelle adoptée par la molécule.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Une mutation ponctuelle peut suffire',
          texte:
            "La drépanocytose résulte du remplacement d’un seul résidu de la chaîne bêta de l’hémoglobine : l’acide glutamique en position 6 est remplacé par une valine. Ce changement, apolaire à la surface de la molécule, favorise la polymérisation de l’hémoglobine désoxygénée et la falciformation des globules rouges.",
        },
        {
          type: 'liste',
          items: [
            'La séquence peut être déterminée par dégradation d’Edman ou, plus couramment aujourd’hui, déduite de la séquence nucléotidique du gène.',
            "Deux protéines homologues d’espèces différentes présentent souvent une conservation forte des résidus indispensables à la fonction ou à la structure.",
          ],
        },
      ],
    },
    {
      id: 'structure-secondaire',
      titre: 'Structure secondaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La structure secondaire correspond aux repliements locaux et réguliers du squelette peptidique, stabilisés par des liaisons hydrogène entre le groupement C=O d’un résidu et le groupement N-H d’un autre résidu de la même chaîne. Les deux structures secondaires régulières les plus fréquentes sont l’hélice alpha et le feuillet bêta.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison hélice alpha / feuillet bêta',
          colonnes: ['Caractéristique', 'Hélice alpha', 'Feuillet bêta'],
          lignes: [
            ['Géométrie', 'Enroulement droit sur lui-même', 'Chaînes étendues juxtaposées, plissées'],
            ['Liaisons hydrogène', 'Intracaténaires, entre résidu n et résidu n + 4', 'Intercaténaires, entre brins voisins'],
            ['Pas de l’hélice / répétition', '0,54 nm par tour, 3,6 résidus par tour', 'Distance inter-résidus d’environ 0,35 nm'],
            ['Orientation des chaînes latérales', 'Dirigées vers l’extérieur de l’hélice', 'Alternées de part et d’autre du plan du feuillet'],
            ['Variante particulière', 'Hélice de collagène (structure distincte, plus étirée)', 'Feuillet parallèle ou antiparallèle selon le sens des brins'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Résidus favorables ou défavorables à l’hélice alpha',
          texte:
            "La proline, dont l’azote est engagé dans un cycle, ne peut pas fournir de liaison hydrogène donneuse et introduit un coude rigide : elle est dite « briseuse d’hélice ». La glycine, très flexible, déstabilise également l’hélice régulière. À l’inverse, l’alanine, le glutamate et la leucine sont des résidus fréquemment retrouvés dans les hélices alpha.",
        },
        {
          type: 'liste',
          items: [
            "Les coudes bêta (beta-turns) permettent à la chaîne de changer brusquement de direction, souvent en surface des protéines globulaires ; ils comportent fréquemment une glycine ou une proline.",
            "Les boucles (loops) sont des segments non réguliers, souvent riches en résidus polaires, qui relient les éléments de structure secondaire régulière.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ne pas confondre',
          texte:
            "Dans l’hélice alpha, les liaisons hydrogène sont intracaténaires (au sein d’un même brin) ; dans le feuillet bêta, elles sont intercaténaires (entre brins différents ou entre segments distants d’un même brin replié sur lui-même).",
        },
      ],
    },
    {
      id: 'structure-tertiaire',
      titre: 'Structure tertiaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La structure tertiaire est l’arrangement tridimensionnel complet d’une chaîne polypeptidique unique, résultant du repliement des éléments de structure secondaire les uns par rapport aux autres. Elle est stabilisée par des interactions faisant intervenir les chaînes latérales, situées parfois très loin les unes des autres dans la séquence primaire.",
        },
        {
          type: 'tableau',
          titre: 'Interactions stabilisant la structure tertiaire',
          colonnes: ['Type d’interaction', 'Nature', 'Exemple de résidus impliqués'],
          lignes: [
            ['Interactions hydrophobes', 'Regroupement des chaînes latérales apolaires au cœur de la protéine, à l’abri de l’eau', 'Valine, leucine, isoleucine, phénylalanine'],
            ['Liaisons hydrogène', 'Entre chaînes latérales polaires ou avec le squelette', 'Sérine, thréonine, asparagine, glutamine'],
            ['Liaisons ioniques (ponts salins)', 'Attraction électrostatique entre groupements chargés opposés', 'Aspartate/glutamate avec lysine/arginine'],
            ['Ponts disulfure', 'Liaison covalente entre deux thiols de cystéine', 'Cystéine (forme la cystine)'],
            ['Forces de van der Waals', 'Interactions faibles de courte portée', 'Toute chaîne latérale à proximité immédiate'],
          ],
        },
        {
          type: 'definition',
          terme: 'Domaine protéique',
          definition:
            "Région compacte et repliée de façon autonome au sein d’une chaîne polypeptidique, souvent associée à une fonction propre. Une protéine peut comporter un seul domaine ou plusieurs domaines reliés par des segments plus flexibles.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le pont disulfure n’est pas une structure secondaire',
          texte:
            "Le pont disulfure est une liaison covalente, beaucoup plus forte que les liaisons non covalentes de la structure tertiaire ; il est classé parmi les éléments stabilisateurs de la structure tertiaire, et non parmi les liaisons hydrogène de la structure secondaire.",
        },
      ],
    },
    {
      id: 'structure-quaternaire',
      titre: 'Structure quaternaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La structure quaternaire concerne les protéines constituées de plusieurs chaînes polypeptidiques, appelées sous-unités ou protomères, associées entre elles par des interactions non covalentes (et parfois par des ponts disulfure intercaténaires). Toutes les protéines n’ont pas de structure quaternaire : celle-ci ne concerne que les protéines oligomériques.",
        },
        {
          type: 'definition',
          terme: 'Protéine oligomérique',
          definition:
            "Protéine formée de l’association de plusieurs chaînes polypeptidiques identiques (homo-oligomère) ou différentes (hétéro-oligomère), maintenues par des liaisons non covalentes.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple de référence : l’hémoglobine',
          texte:
            "L’hémoglobine adulte (HbA) est un tétramère formé de deux chaînes alpha et de deux chaînes bêta (alpha2 bêta2). L’association des quatre sous-unités permet une coopérativité fonctionnelle absente d’une chaîne isolée : la fixation d’une molécule de dioxygène sur une sous-unité facilite la fixation des suivantes sur les autres sous-unités.",
        },
        {
          type: 'liste',
          items: [
            "L’état d’association quaternaire peut évoluer de façon réversible en fonction de ligands (cas de l’hémoglobine, qui passe d’un état tendu T à un état relâché R).",
            "Certaines protéines quaternaires sont des complexes de très grande taille, comme les protéasomes ou les capsides virales.",
          ],
        },
      ],
    },
    {
      id: 'repliement-chaperons-denaturation',
      titre: 'Repliement, chaperons moléculaires et dénaturation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Selon l’hypothèse thermodynamique formulée à partir des travaux de Christian Anfinsen sur la ribonucléase pancréatique, l’information nécessaire au repliement d’une protéine est intégralement contenue dans sa structure primaire : la conformation native correspond, dans les conditions physiologiques, au minimum global d’énergie libre accessible à la chaîne polypeptidique.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'L’expérience d’Anfinsen',
          texte:
            "La ribonucléase A dénaturée et réduite par l’urée et le bêta-mercaptoéthanol retrouve spontanément son activité enzymatique complète après élimination de ces agents, avec reformation correcte des quatre ponts disulfure natifs. Cette expérience a valu à Anfinsen le prix Nobel de chimie et fonde le concept selon lequel la séquence détermine la structure.",
        },
        {
          type: 'paragraphe',
          texte:
            "In vivo, le repliement n’est pas toujours spontané ni instantané : des protéines auxiliaires, les chaperons moléculaires, assistent le repliement correct des protéines nouvellement synthétisées et empêchent leur agrégation en masquant transitoirement les surfaces hydrophobes exposées.",
        },
        {
          type: 'tableau',
          titre: 'Principales familles de chaperons',
          colonnes: ['Famille', 'Localisation / exemple', 'Mode d’action'],
          lignes: [
            ['Hsp70', 'Cytosol, réticulum endoplasmique (BiP)', 'Se lie aux segments hydrophobes exposés des chaînes naissantes, de façon ATP-dépendante'],
            ['Chaperonines (Hsp60)', 'GroEL/GroES chez les bactéries, cytosol chez les eucaryotes', 'Enferment la protéine mal repliée dans une cavité isolée pour permettre un repliement correct'],
            ['Protéine disulfure isomérase', 'Réticulum endoplasmique', 'Catalyse le réarrangement correct des ponts disulfure'],
          ],
        },
        {
          type: 'definition',
          terme: 'Dénaturation',
          definition:
            "Perte de la structure secondaire, tertiaire et quaternaire d’une protéine, avec disparition de sa fonction biologique, sans rupture des liaisons peptidiques de la structure primaire.",
        },
        {
          type: 'tableau',
          titre: 'Principaux agents dénaturants',
          colonnes: ['Agent', 'Mécanisme principal'],
          lignes: [
            ['Chaleur', 'Agitation thermique rompant les liaisons faibles (hydrogène, hydrophobes)'],
            ['pH extrêmes', 'Modification de l’état d’ionisation des chaînes latérales, rupture des ponts salins'],
            ['Urée, chlorure de guanidinium', 'Compétition avec les liaisons hydrogène et déstabilisation des interactions hydrophobes'],
            ['Bêta-mercaptoéthanol, dithiothréitol (DTT)', 'Réduction des ponts disulfure'],
            ['Détergents (SDS)', 'Rupture des interactions hydrophobes internes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Réversible ou irréversible ?',
          texte:
            "La dénaturation est parfois réversible (renaturation) lorsque l’agent dénaturant est éliminé progressivement, comme dans l’expérience d’Anfinsen. Elle est en revanche irréversible lorsqu’elle s’accompagne d’une agrégation, comme la coagulation du blanc d’œuf sous l’effet de la chaleur.",
        },
      ],
    },
    {
      id: 'exemples-hemoglobine-collagene',
      titre: 'Deux exemples de référence',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’hémoglobine et le collagène illustrent deux organisations structurales très différentes, l’une globulaire et allostérique, l’autre fibreuse et architecturale.",
        },
        {
          type: 'comparaison',
          titre: 'Hémoglobine et collagène',
          gauche: {
            titre: 'Hémoglobine',
            points: [
              'Protéine globulaire, quatre sous-unités (alpha2 bêta2)',
              'Chaque sous-unité comporte un groupement hème avec un fer ferreux',
              'Riche en hélices alpha, quasiment dépourvue de feuillets bêta',
              'Fonction de transport de l’oxygène, régulée de façon allostérique',
            ],
          },
          droite: {
            titre: 'Collagène',
            points: [
              'Protéine fibreuse, triple hélice de trois chaînes alpha',
              'Séquence répétitive Gly-X-Y, avec proline et hydroxyproline fréquentes en X et Y',
              'La glycine, résidu le plus petit, occupe obligatoirement une position sur trois, tournée vers l’intérieur de la triple hélice',
              'Fonction structurale, principal constituant protéique de la matrice extracellulaire',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Vitamine C et synthèse du collagène',
          texte:
            "L’hydroxylation de résidus proline et lysine du collagène, catalysée par la prolyl-hydroxylase et la lysyl-hydroxylase, nécessite l’acide ascorbique (vitamine C) comme cofacteur. Sa carence entraîne le scorbut, avec fragilité vasculaire et cutanée par défaut de maturation du collagène.",
        },
      ],
    },
  ],
  pointsCles: [
    'La structure primaire est la séquence des acides aminés ; elle détermine tous les niveaux supérieurs de structure.',
    'L’hélice alpha est stabilisée par des liaisons hydrogène intracaténaires entre résidus n et n + 4 ; le feuillet bêta par des liaisons hydrogène intercaténaires.',
    'La structure tertiaire résulte d’interactions hydrophobes, hydrogène, ioniques, de van der Waals et de ponts disulfure.',
    'La structure quaternaire ne concerne que les protéines oligomériques, formées de plusieurs sous-unités.',
    'L’hypothèse thermodynamique d’Anfinsen postule que la séquence primaire détermine intégralement la conformation native.',
    'Les chaperons moléculaires assistent le repliement sans en porter l’information, contrairement à ce que l’on pourrait croire.',
    'La dénaturation abolit la fonction biologique sans rompre les liaisons peptidiques ; elle peut être réversible ou non.',
  ],
  erreursFrequentes: [
    'Confondre structure secondaire et structure tertiaire : la première ne concerne que le squelette peptidique, la seconde implique les chaînes latérales.',
    'Croire que toutes les protéines possèdent une structure quaternaire : seules les protéines oligomériques en ont une.',
    'Penser que les chaperons moléculaires déterminent la conformation finale de la protéine : ils facilitent seulement le repliement, l’information reste portée par la séquence.',
    'Oublier que la dénaturation ne touche jamais la structure primaire, dont les liaisons peptidiques covalentes ne sont pas rompues.',
    'Situer les liaisons hydrogène du feuillet bêta entre résidus consécutifs d’un même brin, alors qu’elles unissent des brins différents ou des segments distants.',
  ],
  mnemotechniques: [
    {
      moyen: '« n et n plus 4 » pour l’hélice',
      explication:
        'Dans l’hélice alpha, le C=O du résidu n forme une liaison hydrogène avec le N-H du résidu n + 4, ce qui donne 3,6 résidus par tour.',
    },
    {
      moyen: 'Gly-X-Y, la règle du collagène',
      explication:
        'Dans le collagène, une glycine sur trois résidus est indispensable : sa petite taille seule permet l’enroulement serré de la triple hélice.',
    },
    {
      moyen: 'PHI pour la structure tertiaire',
      explication:
        'Ponts disulfure, Hydrophobes, Ioniques (et hydrogène) : les grandes familles d’interactions qui stabilisent le repliement tertiaire.',
    },
  ],
  sources: [
    'Lehninger, Principes de biochimie, 8e édition',
    'Harper, Biochimie médicale, 32e édition',
    'Berg, Tymoczko, Gatto, Stryer, Biochimie, 9e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'bioch-structure-proteines-fc-01',
      recto: 'Qu’est-ce que la structure primaire d’une protéine ?',
      verso: 'La séquence linéaire des acides aminés reliés par des liaisons peptidiques, de l’extrémité N-terminale à l’extrémité C-terminale.',
      type: 'definition',
      tags: ['structure primaire'],
    },
    {
      id: 'bioch-structure-proteines-fc-02',
      recto: 'Entre quels atomes se forme la liaison hydrogène de l’hélice alpha ?',
      verso: 'Entre le C=O du résidu n et le N-H du résidu n + 4, ce qui stabilise un tour de 3,6 résidus.',
      type: 'mecanisme',
      tags: ['hélice alpha'],
    },
    {
      id: 'bioch-structure-proteines-fc-03',
      recto: 'Pourquoi la proline est-elle dite « briseuse d’hélice » ?',
      verso: 'Son azote est engagé dans un cycle rigide et ne peut pas fournir de liaison hydrogène donneuse, ce qui interrompt la régularité de l’hélice alpha.',
      type: 'mecanisme',
      tags: ['hélice alpha', 'proline'],
    },
    {
      id: 'bioch-structure-proteines-fc-04',
      recto: 'Quelles sont les liaisons stabilisant le feuillet bêta ?',
      verso: 'Des liaisons hydrogène intercaténaires, entre brins voisins parallèles ou antiparallèles.',
      type: 'mecanisme',
      tags: ['feuillet bêta'],
    },
    {
      id: 'bioch-structure-proteines-fc-05',
      recto: 'Citer les principales interactions stabilisant la structure tertiaire.',
      verso: 'Interactions hydrophobes, liaisons hydrogène, liaisons ioniques (ponts salins), ponts disulfure et forces de van der Waals.',
      type: 'classification',
      tags: ['structure tertiaire'],
    },
    {
      id: 'bioch-structure-proteines-fc-06',
      recto: 'Quelle est la composition en sous-unités de l’hémoglobine adulte HbA ?',
      verso: 'Deux chaînes alpha et deux chaînes bêta, soit un tétramère alpha2 bêta2.',
      type: 'chiffre',
      tags: ['hémoglobine', 'structure quaternaire'],
    },
    {
      id: 'bioch-structure-proteines-fc-07',
      recto: 'Que démontre l’expérience d’Anfinsen sur la ribonucléase A ?',
      verso: 'Que la structure primaire contient à elle seule l’information nécessaire au repliement correct de la protéine native.',
      type: 'mecanisme',
      tags: ['repliement', 'Anfinsen'],
    },
    {
      id: 'bioch-structure-proteines-fc-08',
      recto: 'Quel est le rôle des chaperons moléculaires de la famille Hsp70 ?',
      verso: 'Se lier, de façon ATP-dépendante, aux segments hydrophobes exposés des chaînes naissantes pour empêcher leur agrégation.',
      type: 'mecanisme',
      tags: ['chaperons'],
    },
    {
      id: 'bioch-structure-proteines-fc-09',
      recto: 'Définir la dénaturation d’une protéine.',
      verso: 'La perte des structures secondaire, tertiaire et quaternaire et de la fonction biologique, sans rupture des liaisons peptidiques.',
      type: 'definition',
      tags: ['dénaturation'],
    },
    {
      id: 'bioch-structure-proteines-fc-10',
      recto: 'Quelle est la séquence répétitive caractéristique du collagène ?',
      verso: 'Gly-X-Y, où X et Y sont fréquemment une proline et une hydroxyproline.',
      type: 'formule',
      tags: ['collagène'],
    },
    {
      id: 'bioch-structure-proteines-fc-11',
      recto: 'Quel cofacteur est indispensable à l’hydroxylation de la proline et de la lysine du collagène ?',
      verso: 'La vitamine C (acide ascorbique), cofacteur de la prolyl-hydroxylase et de la lysyl-hydroxylase.',
      type: 'clinique',
      tags: ['collagène', 'vitamine C'],
    },
    {
      id: 'bioch-structure-proteines-fc-12',
      recto: 'Quelle mutation ponctuelle est responsable de la drépanocytose ?',
      verso: 'Le remplacement de l’acide glutamique en position 6 de la chaîne bêta de l’hémoglobine par une valine.',
      type: 'clinique',
      tags: ['hémoglobine', 'drépanocytose'],
    },
  ],
  qcm: [
    {
      id: 'bioch-structure-proteines-qcm-01',
      enonce: 'Concernant la structure primaire des protéines, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle correspond à la séquence des acides aminés.', vraie: true, justification: 'C’est la définition même de la structure primaire.' },
        { lettre: 'B', texte: 'Elle dépend de la conformation tridimensionnelle adoptée par la protéine.', vraie: false, justification: 'C’est l’inverse : la structure primaire détermine la conformation, elle n’en dépend pas.' },
        { lettre: 'C', texte: 'Elle est directement déterminée par la séquence du gène correspondant.', vraie: true, justification: 'La séquence nucléotidique est traduite en séquence d’acides aminés selon le code génétique.' },
        { lettre: 'D', texte: 'Une mutation ponctuelle ne peut jamais avoir de conséquence fonctionnelle.', vraie: false, justification: 'La drépanocytose montre qu’une seule substitution d’acide aminé peut avoir des conséquences majeures.' },
        { lettre: 'E', texte: 'Les liaisons peptidiques qui la composent sont covalentes.', vraie: true, justification: 'La liaison peptidique est une liaison amide covalente.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'bioch-structure-proteines-qcm-02',
      enonce: 'Concernant l’hélice alpha et le feuillet bêta, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’hélice alpha comporte environ 3,6 résidus par tour.', vraie: true, justification: 'C’est la valeur de référence de l’hélice alpha droite.' },
        { lettre: 'B', texte: 'Les liaisons hydrogène du feuillet bêta sont intracaténaires.', vraie: false, justification: 'Elles sont intercaténaires, entre brins différents ou segments distants.' },
        { lettre: 'C', texte: 'Un feuillet bêta peut être parallèle ou antiparallèle.', vraie: true, justification: 'Le sens relatif des brins définit ces deux variantes.' },
        { lettre: 'D', texte: 'La glycine stabilise particulièrement l’hélice alpha.', vraie: false, justification: 'Sa grande flexibilité tend au contraire à déstabiliser l’hélice régulière.' },
        { lettre: 'E', texte: 'Les chaînes latérales de l’hélice alpha sont dirigées vers l’extérieur.', vraie: true, justification: 'Le cœur de l’hélice est occupé par le squelette peptidique, les chaînes latérales pointent vers l’extérieur.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-structure-proteines-qcm-03',
      enonce: 'Concernant la structure tertiaire et quaternaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les ponts disulfure participent à la stabilisation de la structure tertiaire.', vraie: true, justification: 'Ils constituent une liaison covalente stabilisatrice au sein d’une même chaîne ou entre chaînes.' },
        { lettre: 'B', texte: 'Toute protéine possède une structure quaternaire.', vraie: false, justification: 'Seules les protéines formées de plusieurs sous-unités en possèdent une.' },
        { lettre: 'C', texte: 'Les interactions hydrophobes tendent à regrouper les résidus apolaires au cœur de la protéine.', vraie: true, justification: 'C’est le principal moteur de l’effondrement hydrophobe lors du repliement.' },
        { lettre: 'D', texte: 'L’hémoglobine est un exemple de protéine sans structure quaternaire.', vraie: false, justification: 'L’hémoglobine est au contraire l’exemple classique de tétramère, donc de structure quaternaire.' },
        { lettre: 'E', texte: 'Les ponts salins résultent d’une attraction électrostatique entre chaînes latérales chargées de signe opposé.', vraie: true, justification: 'C’est la définition d’une liaison ionique entre, par exemple, un résidu acide et un résidu basique.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-structure-proteines-qcm-04',
      enonce: 'Concernant le repliement des protéines et les chaperons moléculaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’hypothèse thermodynamique d’Anfinsen postule que la conformation native correspond au minimum global d’énergie libre.', vraie: true, justification: 'C’est la conclusion de ses travaux sur la ribonucléase A.' },
        { lettre: 'B', texte: 'Les chaperons apportent l’information structurale nécessaire au repliement.', vraie: false, justification: 'Ils ne font qu’assister le repliement ; l’information reste portée par la séquence primaire.' },
        { lettre: 'C', texte: 'GroEL/GroES est un exemple de chaperonine bactérienne.', vraie: true, justification: 'C’est le système chaperon de type Hsp60 le mieux caractérisé chez Escherichia coli.' },
        { lettre: 'D', texte: 'Les protéines Hsp70 agissent de façon ATP-dépendante.', vraie: true, justification: 'L’hydrolyse de l’ATP module l’affinité de Hsp70 pour les segments hydrophobes exposés.' },
        { lettre: 'E', texte: 'Le repliement d’une protéine est toujours spontané et instantané in vivo.', vraie: false, justification: 'De nombreuses protéines nécessitent l’assistance des chaperons pour se replier correctement et éviter l’agrégation.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-structure-proteines-qcm-05',
      enonce: 'Concernant la dénaturation des protéines, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle s’accompagne toujours d’une rupture des liaisons peptidiques.', vraie: false, justification: 'La structure primaire n’est pas affectée par la dénaturation.' },
        { lettre: 'B', texte: 'L’urée peut agir comme agent dénaturant.', vraie: true, justification: 'Elle déstabilise les liaisons hydrogène et les interactions hydrophobes.' },
        { lettre: 'C', texte: 'Le bêta-mercaptoéthanol réduit les ponts disulfure.', vraie: true, justification: 'C’est un agent réducteur classique utilisé pour rompre ces liaisons covalentes.' },
        { lettre: 'D', texte: 'La dénaturation est toujours réversible.', vraie: false, justification: 'Elle peut être irréversible, notamment en cas d’agrégation, comme lors de la cuisson d’un œuf.' },
        { lettre: 'E', texte: 'Une variation extrême de pH peut dénaturer une protéine.', vraie: true, justification: 'Elle modifie l’état d’ionisation des chaînes latérales et rompt les ponts salins.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-structure-proteines-qcm-06',
      enonce: 'Concernant le collagène et l’hémoglobine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le collagène est organisé en triple hélice de trois chaînes alpha.', vraie: true, justification: 'C’est la caractéristique structurale majeure de cette protéine fibreuse.' },
        { lettre: 'B', texte: 'La séquence du collagène comporte une glycine environ un résidu sur trois.', vraie: true, justification: 'La répétition Gly-X-Y impose une glycine à chaque troisième position, seule compatible avec l’encombrement au centre de la triple hélice.' },
        { lettre: 'C', texte: 'La vitamine C est nécessaire à l’hydroxylation de la proline dans le collagène.', vraie: true, justification: 'Elle est cofacteur de la prolyl-hydroxylase ; sa carence cause le scorbut.' },
        { lettre: 'D', texte: 'L’hémoglobine est une protéine fibreuse.', vraie: false, justification: 'L’hémoglobine est une protéine globulaire, riche en hélices alpha.' },
        { lettre: 'E', texte: 'Chaque sous-unité de l’hémoglobine porte un groupement hème contenant un atome de fer ferreux.', vraie: true, justification: 'Le fer ferreux (Fe2+) de l’hème fixe réversiblement le dioxygène.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
  ],
};
