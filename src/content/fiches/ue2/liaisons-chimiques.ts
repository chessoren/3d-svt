import type { Fiche } from '../../types';

export const ficheLiaisonsChimiques: Fiche = {
  id: 'ue2-liaisons-chimiques',
  ue: 'ue2',
  titre: 'Les liaisons chimiques et la géométrie moléculaire',
  sousTitre: 'Liaison covalente et ionique, méthode VSEPR, hybridation et liaisons faibles',
  chapitre: 'Chimie générale',
  ordre: 2,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'liaison covalente',
    'liaison ionique',
    'méthode VSEPR',
    'hybridation',
    'liaison hydrogène',
    'van der Waals',
    'interaction hydrophobe',
    'électronégativité',
  ],
  objectifs: [
    'Distinguer liaison covalente et liaison ionique selon la différence d’électronégativité.',
    'Prévoir la géométrie d’une molécule simple par la méthode VSEPR.',
    'Relier la géométrie moléculaire aux états d’hybridation des orbitales atomiques.',
    'Caractériser les principales liaisons faibles intermoléculaires impliquées dans le vivant.',
    'Expliquer le rôle des interactions hydrophobes dans l’organisation des macromolécules biologiques.',
  ],
  sections: [
    {
      id: 'liaison-covalente-ionique',
      titre: 'Liaison covalente et liaison ionique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une liaison chimique forte résulte de la mise en commun ou du transfert d’électrons de valence entre deux atomes, afin que chacun tende vers une configuration électronique stable de gaz noble (règle de l’octet). La nature de la liaison dépend principalement de la différence d’électronégativité entre les deux atomes engagés.",
        },
        {
          type: 'definition',
          terme: 'Liaison covalente',
          definition:
            "Liaison résultant de la mise en commun d’un doublet d’électrons entre deux atomes. Elle est qualifiée de non polarisée lorsque les deux atomes ont la même électronégativité, et de polarisée lorsque le doublet est plus attiré par l’atome le plus électronégatif, créant une dissymétrie de charge.",
        },
        {
          type: 'definition',
          terme: 'Liaison ionique',
          definition:
            "Liaison résultant du transfert complet d’un ou plusieurs électrons d’un atome vers un autre, formant deux ions de charges opposées maintenus par attraction électrostatique. Elle apparaît lorsque la différence d’électronégativité entre les deux atomes est importante.",
        },
        {
          type: 'tableau',
          titre: 'Repères sur la nature de la liaison',
          colonnes: ['Différence d’électronégativité (Δχ)', 'Nature de la liaison', 'Exemple'],
          lignes: [
            ['Δχ faible ou nulle', 'Covalente non polarisée', 'H-H, Cl-Cl'],
            ['Δχ modérée', 'Covalente polarisée', 'O-H, C-O'],
            ['Δχ importante', 'Ionique', 'Na-Cl'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Liaison covalente de coordination (dative)',
          texte:
            "Cas particulier de liaison covalente où le doublet d’électrons partagé provient d’un seul des deux atomes, l’autre apportant une case vide. C’est le cas de la formation de l’ion ammonium NH4+ à partir de l’ammoniac NH3 et d’un proton H+.",
        },
      ],
    },
    {
      id: 'vsepr',
      titre: 'Géométrie moléculaire : méthode VSEPR',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La méthode VSEPR (Valence Shell Electron Pair Repulsion, ou méthode de Gillespie) prévoit la géométrie d’une molécule à partir du nombre de doublets, liants et non liants, portés par l’atome central. Ces doublets, tous chargés négativement, se repoussent et s’orientent dans l’espace de façon à minimiser leurs répulsions mutuelles.",
        },
        {
          type: 'formule',
          expression: 'AXnEm',
          legende:
            "Notation de Gillespie : A est l’atome central, X les atomes liés (n doublets liants), E les doublets non liants (m doublets libres). La géométrie dépend du couple (n, m).",
        },
        {
          type: 'tableau',
          titre: 'Principales géométries VSEPR',
          colonnes: ['Formule AXnEm', 'Nombre de doublets', 'Géométrie', 'Exemple'],
          lignes: [
            ['AX2', '2 liants, 0 libre', 'Linéaire (180°)', 'CO2'],
            ['AX3', '3 liants, 0 libre', 'Triangulaire plane (120°)', 'BF3'],
            ['AX4', '4 liants, 0 libre', 'Tétraédrique (109,5°)', 'CH4'],
            ['AX3E1', '3 liants, 1 libre', 'Pyramidale à base triangulaire', 'NH3'],
            ['AX2E2', '2 liants, 2 libres', 'Coudée (angulaire)', 'H2O'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Effet des doublets non liants',
          texte:
            "Un doublet non liant occupe plus d’espace qu’un doublet liant, car il n’est retenu que par un seul noyau. Il referme donc les angles entre les doublets liants voisins : l’angle H-N-H de l’ammoniac (environ 107°) et l’angle H-O-H de l’eau (environ 104,5°) sont ainsi inférieurs à l’angle tétraédrique idéal de 109,5°.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Méthode pour compter les doublets',
          texte:
            "Compter le nombre d’atomes liés à l’atome central (doublets liants), puis calculer le nombre de doublets non liants restant sur l’atome central à partir de son nombre d’électrons de valence, diminué du nombre d’électrons engagés dans les liaisons. Une liaison double ou triple compte pour un seul doublet dans le décompte géométrique VSEPR.",
        },
      ],
    },
    {
      id: 'hybridation',
      titre: 'Hybridation des orbitales atomiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’hybridation est un modèle qui décrit le mélange d’orbitales atomiques pures (s et p) d’un même atome pour former de nouvelles orbitales hybrides, équivalentes entre elles et orientées de façon à rendre compte de la géométrie observée expérimentalement.",
        },
        {
          type: 'tableau',
          titre: 'États d’hybridation du carbone',
          colonnes: ['Hybridation', 'Orbitales combinées', 'Géométrie', 'Exemple'],
          lignes: [
            ['sp3', '1 s + 3 p', 'Tétraédrique, angles de 109,5°', 'Méthane CH4, carbone d’un alcane'],
            ['sp2', '1 s + 2 p', 'Triangulaire plane, angles de 120°', 'Éthylène (carbone de la double liaison C=C)'],
            ['sp', '1 s + 1 p', 'Linéaire, angles de 180°', 'Acétylène (carbone de la triple liaison C≡C)'],
          ],
        },
        {
          type: 'definition',
          terme: 'Liaison sigma (σ) et liaison pi (π)',
          definition:
            "La liaison sigma résulte du recouvrement axial de deux orbitales et autorise la libre rotation. La liaison pi résulte du recouvrement latéral de deux orbitales p non hybridées et bloque la rotation autour de l’axe de liaison. Une liaison double comporte une sigma et une pi ; une liaison triple, une sigma et deux pi.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Rigidité des doubles liaisons',
          texte:
            "L’absence de libre rotation autour d’une liaison pi explique l’existence d’isomères géométriques cis et trans (ou Z et E) autour d’une double liaison carbone-carbone, une notion essentielle en stéréochimie et en biochimie des lipides.",
        },
      ],
    },
    {
      id: 'liaisons-faibles',
      titre: 'Les liaisons faibles (interactions non covalentes)',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "À la différence des liaisons covalentes et ioniques, les liaisons faibles n’impliquent pas de mise en commun ou de transfert d’électrons. Individuellement peu énergétiques, elles sont essentielles au vivant car leur nombre élevé et leur réversibilité permettent le repliement, la reconnaissance et l’assemblage dynamique des macromolécules biologiques.",
        },
        {
          type: 'tableau',
          titre: 'Les principales liaisons faibles',
          colonnes: ['Type', 'Origine', 'Exemple biologique'],
          lignes: [
            ['Liaison hydrogène', 'Attraction entre un hydrogène lié à un atome électronégatif (N, O, F) et un doublet non liant d’un autre atome électronégatif', 'Appariement des bases de l’ADN, structure secondaire des protéines'],
            ['Interaction de van der Waals', 'Attraction entre dipôles instantanés induits par les fluctuations du nuage électronique', 'Empilement des bases de l’ADN, contacts entre chaînes latérales apolaires'],
            ['Interaction électrostatique (ionique faible)', 'Attraction entre groupements chargés de signe opposé en solution', 'Ponts salins entre résidus chargés d’une protéine'],
            ['Interaction hydrophobe', 'Effet entropique lié à l’exclusion de l’eau autour des groupements apolaires', 'Repliement du cœur hydrophobe des protéines globulaires, bicouche lipidique'],
          ],
        },
        {
          type: 'definition',
          terme: 'Liaison hydrogène',
          definition:
            "Interaction directionnelle entre un atome d’hydrogène lié de façon covalente à un atome donneur électronégatif (O, N) et un atome accepteur électronégatif porteur d’un doublet non liant. Plus faible qu’une liaison covalente, mais suffisamment forte et nombreuse pour stabiliser des structures comme la double hélice d’ADN.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Hiérarchie approximative des énergies de liaison',
          texte:
            "Du plus fort au plus faible : liaison covalente, liaison ionique, liaison hydrogène, interaction électrostatique en solution, interaction de van der Waals. Les liaisons faibles sont d’un à deux ordres de grandeur moins énergétiques que les liaisons covalentes.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Pourquoi les liaisons faibles sont indispensables au vivant',
          texte:
            "La réversibilité des liaisons faibles permet des processus dynamiques essentiels : dénaturation puis renaturation d’une protéine, ouverture transitoire de la double hélice d’ADN lors de la réplication, ou encore reconnaissance spécifique entre un récepteur et son ligand.",
        },
      ],
    },
    {
      id: 'interaction-hydrophobe',
      titre: 'Effet hydrophobe et organisation des macromolécules',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’effet hydrophobe n’est pas une liaison au sens strict, mais un phénomène thermodynamique : en présence d’eau, les groupements apolaires tendent à se regrouper entre eux, ce qui minimise la surface de contact entre les groupements apolaires et l’eau et permet à l’eau environnante de retrouver un réseau de liaisons hydrogène plus favorable, donc plus stable sur le plan entropique.",
        },
        {
          type: 'liste',
          items: [
            'Dans une protéine globulaire soluble, les chaînes latérales apolaires se regroupent préférentiellement au centre de la molécule, loin du solvant.',
            'Dans une membrane biologique, les chaînes hydrocarbonées des phospholipides s’associent en un cœur hydrophobe, tandis que les têtes polaires restent au contact de l’eau.',
            'L’effet hydrophobe est un moteur essentiel, mais non exclusif, du repliement spontané des protéines.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un effet surtout entropique',
          texte:
            "Contrairement à une idée reçue, l’effet hydrophobe n’est pas principalement dû à une attraction entre groupements apolaires, mais à un gain d’entropie du système eau + soluté lorsque les surfaces apolaires se regroupent et libèrent des molécules d’eau auparavant contraintes de s’organiser autour d’elles.",
        },
      ],
    },
  ],
  pointsCles: [
    'La nature d’une liaison forte (covalente ou ionique) dépend de la différence d’électronégativité entre les deux atomes engagés.',
    'La méthode VSEPR prévoit la géométrie moléculaire à partir du nombre de doublets liants et non liants portés par l’atome central.',
    'Un doublet non liant occupe plus d’espace qu’un doublet liant et referme les angles de liaison voisins.',
    'L’hybridation sp3, sp2 ou sp du carbone détermine respectivement une géométrie tétraédrique, triangulaire plane ou linéaire.',
    'Une liaison pi bloque la libre rotation, à l’origine des isomères cis/trans autour d’une double liaison.',
    'Les liaisons faibles (hydrogène, van der Waals, électrostatique, hydrophobe) sont individuellement peu énergétiques mais essentielles par leur nombre et leur réversibilité.',
    'L’effet hydrophobe est d’origine principalement entropique et non une attraction directe entre groupements apolaires.',
  ],
  erreursFrequentes: [
    'Oublier de compter les doublets non liants de l’atome central lors de l’application de la méthode VSEPR.',
    'Confondre géométrie moléculaire et disposition des doublets : l’eau est AX2E2 mais sa géométrie moléculaire décrite est coudée, non tétraédrique.',
    'Croire qu’une liaison double correspond à deux doublets liants distincts dans le décompte VSEPR, alors qu’elle compte pour un seul groupe de liaison.',
    'Considérer les liaisons faibles comme négligeables, alors que leur nombre élevé leur confère un rôle stabilisant majeur.',
    'Attribuer l’effet hydrophobe à une attraction directe entre molécules apolaires plutôt qu’à un effet entropique sur l’eau environnante.',
  ],
  mnemotechniques: [
    {
      moyen: '« LTV » pour l’ordre de force',
      explication:
        'Liaison forte, puis Tampon (hydrogène) plus faible, puis Van der Waals : rappelle la hiérarchie décroissante des énergies de liaison, covalente/ionique > hydrogène > van der Waals.',
    },
    {
      moyen: 'CH4, NH3, H2O : même famille de période, angle qui se referme',
      explication:
        'À nombre de doublets total identique (4), l’angle de liaison diminue à mesure que le nombre de doublets non liants augmente : 109,5° (0 doublet libre), 107° (1 doublet libre), 104,5° (2 doublets libres).',
    },
    {
      moyen: 'sp3, sp2, sp : moins de p, plus l’angle s’ouvre',
      explication:
        'sp3 (109,5°), sp2 (120°), sp (180°) : à mesure que le nombre d’orbitales p engagées dans l’hybridation diminue, l’angle de liaison augmente.',
    },
  ],
  sources: [
    'Atkins, Chimie physique',
    'Chimie générale, collection PASS/LAS, ouvrage de référence UE2',
    'Lehninger, Principes de biochimie',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-liaisons-chimiques-fc-01', recto: 'Quel critère distingue liaison covalente et liaison ionique ?', verso: 'La différence d’électronégativité entre les deux atomes engagés : faible pour une covalente, importante pour une ionique.', type: 'definition', tags: ['liaison'] },
    { id: 'ue2-liaisons-chimiques-fc-02', recto: 'Que signifie l’acronyme VSEPR ?', verso: 'Valence Shell Electron Pair Repulsion : méthode qui prévoit la géométrie moléculaire à partir de la répulsion des doublets électroniques de l’atome central.', type: 'definition', tags: ['VSEPR'] },
    { id: 'ue2-liaisons-chimiques-fc-03', recto: 'Quelle est la géométrie d’une molécule de type AX4 ?', verso: 'Tétraédrique, avec des angles de liaison de 109,5°.', type: 'classification', tags: ['VSEPR', 'géométrie'] },
    { id: 'ue2-liaisons-chimiques-fc-04', recto: 'Pourquoi l’angle H-O-H de l’eau (104,5°) est-il inférieur à l’angle tétraédrique ?', verso: 'Les deux doublets non liants de l’oxygène occupent plus d’espace que les doublets liants et referment l’angle entre les deux liaisons O-H.', type: 'mecanisme', tags: ['VSEPR', 'eau'] },
    { id: 'ue2-liaisons-chimiques-fc-05', recto: 'Quelle hybridation du carbone donne une géométrie triangulaire plane ?', verso: 'L’hybridation sp2, avec des angles de liaison de 120°.', type: 'classification', tags: ['hybridation'] },
    { id: 'ue2-liaisons-chimiques-fc-06', recto: 'Quelle liaison (sigma ou pi) autorise la libre rotation ?', verso: 'La liaison sigma, issue d’un recouvrement axial ; la liaison pi, issue d’un recouvrement latéral, bloque la rotation.', type: 'mecanisme', tags: ['liaison sigma', 'liaison pi'] },
    { id: 'ue2-liaisons-chimiques-fc-07', recto: 'Citer les quatre principales liaisons faibles impliquées dans le vivant.', verso: 'Liaison hydrogène, interaction de van der Waals, interaction électrostatique et interaction hydrophobe.', type: 'classification', tags: ['liaisons faibles'] },
    { id: 'ue2-liaisons-chimiques-fc-08', recto: 'Quels atomes sont typiquement impliqués dans une liaison hydrogène ?', verso: 'Un hydrogène lié de façon covalente à un atome électronégatif donneur (O ou N), et un atome électronégatif accepteur porteur d’un doublet non liant.', type: 'definition', tags: ['liaison hydrogène'] },
    { id: 'ue2-liaisons-chimiques-fc-09', recto: 'L’effet hydrophobe est-il principalement enthalpique ou entropique ?', verso: 'Principalement entropique : le regroupement des groupements apolaires libère de l’eau contrainte, augmentant l’entropie du système.', type: 'mecanisme', tags: ['effet hydrophobe'] },
    { id: 'ue2-liaisons-chimiques-fc-10', recto: 'Donner un exemple biologique d’interaction de van der Waals.', verso: 'L’empilement des bases de l’ADN ou les contacts entre chaînes latérales apolaires au cœur d’une protéine.', type: 'clinique', tags: ['van der Waals'] },
    { id: 'ue2-liaisons-chimiques-fc-11', recto: 'Comment se forme l’ion ammonium NH4+ à partir de NH3 ?', verso: 'Par liaison covalente de coordination (dative) : le doublet non liant de l’azote est entièrement partagé avec un proton H+.', type: 'mecanisme', tags: ['liaison dative'] },
    { id: 'ue2-liaisons-chimiques-fc-12', recto: 'Quelle est la géométrie VSEPR d’une molécule AX3E1, comme NH3 ?', verso: 'Pyramidale à base triangulaire.', type: 'classification', tags: ['VSEPR'] },
  ],
  qcm: [
    {
      id: 'ue2-liaisons-chimiques-qcm-01',
      enonce: 'Concernant les liaisons covalente et ionique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une liaison ionique résulte d’un transfert complet d’électrons.', vraie: true, justification: 'Exact : elle forme deux ions de charges opposées liés par attraction électrostatique.' },
        { lettre: 'B', texte: 'Une liaison covalente non polarisée unit deux atomes d’électronégativités très différentes.', vraie: false, justification: 'Faux : une liaison non polarisée unit deux atomes de même électronégativité ou d’électronégativités très proches.' },
        { lettre: 'C', texte: 'Dans une liaison covalente de coordination, le doublet partagé provient des deux atomes à parts égales.', vraie: false, justification: 'Faux : dans une liaison dative, le doublet est apporté entièrement par un seul des deux atomes.' },
        { lettre: 'D', texte: 'La liaison O-H est une liaison covalente polarisée.', vraie: true, justification: 'Exact : l’oxygène, plus électronégatif que l’hydrogène, attire davantage le doublet de liaison.' },
        { lettre: 'E', texte: 'La règle de l’octet vise la configuration électronique du gaz noble le plus proche.', vraie: true, justification: 'Exact : c’est le principe qui sous-tend la formation des liaisons covalentes et ioniques.' },
      ],
      correction: 'Réponses exactes : A, D et E. La liaison dative se distingue par l’origine unilatérale du doublet partagé.',
      difficulte: 2,
    },
    {
      id: 'ue2-liaisons-chimiques-qcm-02',
      enonce: 'Concernant la méthode VSEPR, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une molécule AX2 a une géométrie linéaire.', vraie: true, justification: 'Exact : deux doublets liants et aucun doublet libre s’orientent à 180°.' },
        { lettre: 'B', texte: 'Une molécule AX3E1 a une géométrie triangulaire plane.', vraie: false, justification: 'Faux : la présence d’un doublet non liant donne une géométrie pyramidale, comme NH3.' },
        { lettre: 'C', texte: 'L’eau est de type AX2E2.', vraie: true, justification: 'Exact : deux doublets liants (les deux O-H) et deux doublets non liants sur l’oxygène.' },
        { lettre: 'D', texte: 'Une liaison double compte pour deux doublets liants distincts dans le décompte VSEPR.', vraie: false, justification: 'Faux : une liaison double ou triple compte pour un seul groupe de liaison.' },
        { lettre: 'E', texte: 'Un doublet non liant referme les angles de liaison voisins.', vraie: true, justification: 'Exact : il occupe davantage d’espace qu’un doublet liant.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien retenir que la présence de doublets non liants modifie la géométrie moléculaire.',
      difficulte: 2,
    },
    {
      id: 'ue2-liaisons-chimiques-qcm-03',
      enonce: 'Concernant l’hybridation et les liaisons sigma et pi, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le carbone du méthane est hybridé sp3.', vraie: true, justification: 'Exact, avec une géométrie tétraédrique.' },
        { lettre: 'B', texte: 'Une liaison triple carbone-carbone comprend une liaison sigma et deux liaisons pi.', vraie: true, justification: 'Exact, comme dans l’acétylène.' },
        { lettre: 'C', texte: 'La liaison pi autorise la libre rotation autour de l’axe de liaison.', vraie: false, justification: 'Faux : c’est la liaison sigma qui autorise la libre rotation ; la liaison pi la bloque.' },
        { lettre: 'D', texte: 'L’hybridation sp donne des angles de liaison de 180°.', vraie: true, justification: 'Exact, comme dans l’acétylène.' },
        { lettre: 'E', texte: 'L’absence de libre rotation autour d’une double liaison explique l’existence d’isomères cis et trans.', vraie: true, justification: 'Exact : c’est la conséquence directe de la rigidité imposée par la liaison pi.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir que seule la liaison pi bloque la rotation.',
      difficulte: 2,
    },
    {
      id: 'ue2-liaisons-chimiques-qcm-04',
      enonce: 'Concernant les liaisons faibles, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La liaison hydrogène est plus énergétique qu’une liaison covalente.', vraie: false, justification: 'Faux : la liaison hydrogène est nettement plus faible qu’une liaison covalente.' },
        { lettre: 'B', texte: 'Les interactions de van der Waals participent à l’empilement des bases de l’ADN.', vraie: true, justification: 'Exact, en complément des liaisons hydrogène entre bases appariées.' },
        { lettre: 'C', texte: 'Les liaisons faibles sont, par nature, toutes irréversibles.', vraie: false, justification: 'Faux : leur réversibilité est au contraire essentielle aux processus dynamiques du vivant.' },
        { lettre: 'D', texte: 'Une liaison hydrogène implique un doublet non liant sur l’atome accepteur.', vraie: true, justification: 'Exact : c’est ce doublet qui interagit avec l’hydrogène du groupement donneur.' },
        { lettre: 'E', texte: 'Les ponts salins résultent d’une interaction électrostatique entre groupements chargés.', vraie: true, justification: 'Exact, par exemple entre une chaîne latérale d’acide aspartique et une chaîne latérale de lysine.' },
      ],
      correction: 'Réponses exactes : B, D et E. La réversibilité des liaisons faibles est une propriété fonctionnelle majeure.',
      difficulte: 2,
    },
    {
      id: 'ue2-liaisons-chimiques-qcm-05',
      enonce: 'Concernant l’effet hydrophobe, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’effet hydrophobe est une liaison covalente entre groupements apolaires.', vraie: false, justification: 'Faux : ce n’est pas une liaison au sens chimique, mais un phénomène thermodynamique global.' },
        { lettre: 'B', texte: 'Il contribue au repliement du cœur hydrophobe des protéines globulaires.', vraie: true, justification: 'Exact : les chaînes latérales apolaires se regroupent au centre de la protéine.' },
        { lettre: 'C', texte: 'Il est principalement d’origine entropique.', vraie: true, justification: 'Exact : il résulte du gain d’entropie de l’eau libérée du réseau ordonné autour des groupements apolaires.' },
        { lettre: 'D', texte: 'Il intervient dans l’organisation de la bicouche lipidique membranaire.', vraie: true, justification: 'Exact : les chaînes hydrocarbonées des phospholipides s’associent au centre de la membrane.' },
        { lettre: 'E', texte: 'Il résulte d’une attraction électrostatique directe entre groupements apolaires.', vraie: false, justification: 'Faux : les groupements apolaires ne portent pas de charge susceptible d’attraction électrostatique directe.' },
      ],
      correction: 'Réponses exactes : B, C et D. L’origine entropique de l’effet hydrophobe est un point fréquemment testé.',
      difficulte: 2,
    },
    {
      id: 'ue2-liaisons-chimiques-qcm-06',
      enonce: 'Concernant la géométrie et l’hybridation de molécules usuelles, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le dioxyde de carbone CO2 a une géométrie linéaire.', vraie: true, justification: 'Exact : molécule AX2, sans doublet non liant sur le carbone central.' },
        { lettre: 'B', texte: 'L’angle de liaison H-N-H de l’ammoniac est supérieur à l’angle H-O-H de l’eau.', vraie: true, justification: 'Exact : l’ammoniac n’a qu’un doublet non liant (angle environ 107°) contre deux pour l’eau (environ 104,5°).' },
        { lettre: 'C', texte: 'Le trifluorure de bore BF3 est une molécule de géométrie triangulaire plane.', vraie: true, justification: 'Exact : type AX3, sans doublet non liant sur le bore.' },
        { lettre: 'D', texte: 'Le méthane CH4 a une géométrie plane carrée.', vraie: false, justification: 'Faux : sa géométrie est tétraédrique, avec des angles de 109,5°.' },
        { lettre: 'E', texte: 'L’hybridation du bore dans BF3 est sp3.', vraie: false, justification: 'Faux : elle est sp2, cohérente avec la géométrie triangulaire plane.' },
      ],
      correction: 'Réponses exactes : A, B et C. Toujours vérifier la cohérence entre géométrie observée et hybridation proposée.',
      difficulte: 2,
    },
  ],
};
