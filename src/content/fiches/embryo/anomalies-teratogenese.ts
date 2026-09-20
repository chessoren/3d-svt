import type { Fiche } from '../../types';

export const ficheAnomaliesTeratogenese: Fiche = {
  id: 'embryo-anomalies-teratogenese',
  ue: 'embryo',
  titre: 'Anomalies du développement et tératogenèse',
  sousTitre: 'Périodes de sensibilité, agents tératogènes et diagnostic prénatal',
  chapitre: 'Annexes et anomalies',
  ordre: 11,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'tératogenèse',
    'période critique',
    'agent tératogène',
    'malformation congénitale',
    'trisomie 21',
    'diagnostic prénatal',
    'échographie',
    'clarté nucale',
  ],
  objectifs: [
    "Distinguer les périodes de sensibilité du développement et leurs conséquences respectives en cas d’agression.",
    "Citer les principaux agents tératogènes et les malformations qui leur sont classiquement associées.",
    "Décrire les principales malformations congénitales fréquentes.",
    "Citer les principales anomalies chromosomiques et leur mécanisme de survenue.",
    "Décrire les grands principes du diagnostic prénatal.",
  ],
  sections: [
    {
      id: 'periodes-sensibilite',
      titre: 'Les périodes de sensibilité du développement',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La sensibilité de l’embryon puis du fœtus aux agressions extérieures varie considérablement selon la période du développement considérée. On distingue classiquement trois grandes périodes, dont les conséquences d’une agression diffèrent profondément.",
        },
        {
          type: 'tableau',
          titre: 'Les trois périodes de sensibilité',
          colonnes: ['Période', 'Délai (développement post-fécondation)', 'Conséquence typique d’une agression'],
          lignes: [
            ['Période préembryonnaire', 'Semaines 1 et 2', 'Loi du tout ou rien : mort de l’embryon, ou réparation complète par les cellules encore pluripotentes, sans séquelle'],
            ['Période embryonnaire', 'Semaines 3 à 8', 'Risque maximal de malformations morphologiques majeures (organogenèse)'],
            ['Période fœtale', 'De la 9e semaine à la naissance', 'Risque de troubles fonctionnels et de retard de croissance, plutôt que de malformations majeures, sauf pour les organes à maturation tardive'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La loi du tout ou rien',
          texte:
            "Durant les deux premières semaines, les cellules embryonnaires conservent une large pluripotence : une agression détruit soit un nombre de cellules trop important, entraînant la mort de l’embryon, soit un nombre limité de cellules, qui sont alors remplacées sans laisser de malformation. C’est ce qu’on appelle la loi du tout ou rien.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le système nerveux central, exception notable',
          texte:
            "Certains organes, en particulier le système nerveux central et les organes génitaux, poursuivent leur maturation fonctionnelle bien après la période embryonnaire : des agressions tardives, pendant la période fœtale, peuvent donc encore y provoquer des anomalies structurales ou fonctionnelles significatives.",
        },
      ],
    },
    {
      id: 'agents-teratogenes',
      titre: 'Les principaux agents tératogènes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un agent tératogène est un facteur environnemental (médicamenteux, infectieux, physique ou toxique) susceptible de provoquer, chez un embryon ou un fœtus exposé, une anomalie du développement structural ou fonctionnel.",
        },
        {
          type: 'tableau',
          titre: 'Exemples classiques d’agents tératogènes',
          colonnes: ['Catégorie', 'Agent', 'Anomalie classiquement associée'],
          lignes: [
            ['Médicament', 'Acide valproïque', 'Anomalies de fermeture du tube neural, troubles neurodéveloppementaux'],
            ['Médicament', 'Rétinoïdes (isotrétinoïne)', 'Malformations craniofaciales, cardiaques et du système nerveux central'],
            ['Infection', 'Rubéole', 'Surdité, cataracte, cardiopathie congénitale (triade de Gregg)'],
            ['Infection', 'Cytomégalovirus', 'Atteinte neurosensorielle, microcéphalie'],
            ['Toxique', 'Alcool', 'Syndrome d’alcoolisation fœtale (retard de croissance, dysmorphie faciale, atteinte neurodéveloppementale)'],
            ['Carence', 'Acide folique', 'Anomalies de fermeture du tube neural en cas de carence maternelle'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Diabète maternel mal équilibré',
          texte:
            "Un diabète maternel mal équilibré en période périconceptionnelle et au premier trimestre est associé à un risque accru de malformations, notamment cardiaques, en raison d’un effet délétère de l’hyperglycémie sur l’organogenèse précoce.",
        },
      ],
    },
    {
      id: 'malformations-frequentes',
      titre: 'Malformations congénitales fréquentes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Certaines malformations congénitales, d’origine multifactorielle le plus souvent, sont particulièrement fréquentes et classiquement présentées en lien avec les étapes de développement étudiées dans les fiches précédentes.",
        },
        {
          type: 'liste',
          items: [
            "La fente labio-palatine résulte d’un défaut de fusion des bourgeons faciaux au cours de la période embryonnaire.",
            "Le spina bifida et l’anencéphalie résultent respectivement d’un défaut de fermeture du neuropore postérieur et du neuropore antérieur.",
            "Les cardiopathies congénitales regroupent un ensemble hétérogène de malformations de l’organogenèse cardiaque précoce.",
            "L’omphalocèle et le laparoschisis sont des défauts de la paroi abdominale antérieure, avec extériorisation des viscères abdominaux.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une origine le plus souvent multifactorielle',
          texte:
            "La majorité de ces malformations résultent de l’interaction entre une susceptibilité génétique et des facteurs environnementaux, plutôt que d’une cause unique isolée, ce qui explique la difficulté de leur prévention systématique en dehors des mesures générales comme la supplémentation en acide folique.",
        },
      ],
    },
    {
      id: 'anomalies-chromosomiques',
      titre: 'Les anomalies chromosomiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les anomalies chromosomiques résultent le plus souvent d’accidents de la méiose, en particulier de non-disjonctions, aboutissant à des gamètes porteurs d’un nombre anormal de chromosomes.",
        },
        {
          type: 'tableau',
          titre: 'Principales trisomies et monosomie',
          colonnes: ['Anomalie', 'Syndrome', 'Particularité'],
          lignes: [
            ['Trisomie 21', 'Syndrome de Down', 'Anomalie chromosomique la plus fréquente à la naissance ; risque augmentant avec l’âge maternel'],
            ['Trisomie 18', 'Syndrome d’Edwards', 'Malformations multiples sévères, pronostic très défavorable'],
            ['Trisomie 13', 'Syndrome de Patau', 'Malformations cranio-faciales et cérébrales sévères'],
            ['Monosomie X (45, X0)', 'Syndrome de Turner', 'Atteint uniquement le sexe féminin ; petite taille, dysgénésie gonadique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Âge maternel et trisomie 21',
          texte:
            "Le risque de trisomie 21 augmente nettement avec l’âge maternel, en lien avec l’augmentation du risque de non-disjonction méiotique lors de la reprise tardive de la méiose de l’ovocyte, bloqué depuis la vie fœtale de la mère.",
        },
      ],
    },
    {
      id: 'diagnostic-prenatal',
      titre: 'Le diagnostic prénatal',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le diagnostic prénatal regroupe l’ensemble des méthodes permettant de dépister ou de diagnostiquer une anomalie du développement avant la naissance, associant des méthodes de dépistage non invasives et des méthodes diagnostiques invasives.",
        },
        {
          type: 'tableau',
          titre: 'Principales méthodes de diagnostic prénatal',
          colonnes: ['Méthode', 'Type', 'Principe'],
          lignes: [
            ['Échographie (dont mesure de la clarté nucale)', 'Non invasive', 'Datation, dépistage morphologique et dépistage combiné du premier trimestre'],
            ['Dépistage prénatal non invasif (DPNI)', 'Non invasive', 'Analyse de l’ADN fœtal libre circulant dans le sang maternel'],
            ['Amniocentèse', 'Invasive', 'Prélèvement de liquide amniotique pour analyse cytogénétique fœtale'],
            ['Choriocentèse (biopsie de trophoblaste)', 'Invasive', 'Prélèvement de villosités choriales pour analyse cytogénétique fœtale, réalisable plus précocement'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Dépistage combiné du premier trimestre',
          texte:
            "Le dépistage combiné du premier trimestre associe la mesure échographique de la clarté nucale, réalisée entre environ 11 et 13 semaines et 6 jours d’aménorrhée, à des marqueurs sériques maternels, pour estimer le risque individuel de trisomie 21. Un résultat à risque élevé conduit à proposer un examen diagnostique invasif ou un DPNI.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Non invasif avant invasif',
          texte:
            "Retenir la logique générale du diagnostic prénatal : les méthodes non invasives (échographie, marqueurs sériques, DPNI) sont proposées en dépistage de première intention, et orientent, en cas de risque élevé, vers une méthode invasive à visée diagnostique de certitude.",
        },
      ],
    },
  ],
  pointsCles: [
    "La période préembryonnaire (semaines 1-2) obéit à la loi du tout ou rien : mort de l’embryon ou réparation complète.",
    "La période embryonnaire (semaines 3 à 8) est la période critique de l’organogenèse, la plus à risque de malformations majeures.",
    "La période fœtale expose surtout à des troubles fonctionnels et à un retard de croissance, sauf pour les organes à maturation tardive comme le système nerveux central.",
    "Les principaux agents tératogènes incluent certains médicaments, des infections, des toxiques et des carences vitaminiques.",
    "La trisomie 21 est l’anomalie chromosomique la plus fréquente à la naissance, avec un risque croissant avec l’âge maternel.",
    "Le diagnostic prénatal associe des méthodes non invasives de dépistage (échographie, DPNI) et des méthodes invasives de diagnostic (amniocentèse, choriocentèse).",
  ],
  erreursFrequentes: [
    "Croire que toute agression durant la période préembryonnaire laisse nécessairement une malformation : la loi du tout ou rien prévoit aussi une réparation complète.",
    "Situer le risque maximal de malformation pendant la période fœtale, alors qu’il est maximal durant la période embryonnaire (semaines 3 à 8).",
    "Oublier que le système nerveux central reste vulnérable au-delà de la période embryonnaire, du fait de sa maturation prolongée.",
    "Confondre les syndromes associés aux trisomies 21, 18 et 13 : Down, Edwards et Patau respectivement.",
    "Penser que le DPNI est un examen diagnostique de certitude : c’est un dépistage non invasif, qui ne remplace pas un examen invasif en cas de risque élevé.",
  ],
  mnemotechniques: [
    {
      moyen: '« D pour Down et Vingt-et-un »',
      explication:
        'La trisomie 21 correspond au syndrome de Down : associer visuellement le chiffre 21 et le nom du syndrome facilite la mémorisation.',
    },
    {
      moyen: '« Non invasif avant invasif »',
      explication:
        'Rappel de la hiérarchie du diagnostic prénatal : dépistage non invasif d’abord, examen invasif seulement en cas de risque élevé.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-anomalies-teratogenese-fc-01',
      recto: 'Que désigne la loi du tout ou rien durant la période préembryonnaire ?',
      verso: 'Une agression entraîne soit la mort de l’embryon, soit une réparation complète sans séquelle, grâce à la pluripotence cellulaire.',
      type: 'definition',
      tags: ['loi du tout ou rien'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-02',
      recto: 'Quelle est la période la plus à risque de malformations morphologiques majeures ?',
      verso: 'La période embryonnaire, de la 3e à la 8e semaine de développement.',
      type: 'chiffre',
      tags: ['période critique'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-03',
      recto: 'Quelle anomalie est classiquement associée à l’acide valproïque ?',
      verso: 'Les anomalies de fermeture du tube neural.',
      type: 'clinique',
      tags: ['tératogène', 'acide valproïque'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-04',
      recto: 'Quelle triade clinique est associée à l’embryofœtopathie rubéolique ?',
      verso: 'Surdité, cataracte, cardiopathie congénitale (triade de Gregg).',
      type: 'clinique',
      tags: ['rubéole'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-05',
      recto: 'Quel syndrome est associé au syndrome d’alcoolisation fœtale ?',
      verso: 'Retard de croissance, dysmorphie faciale et atteinte neurodéveloppementale.',
      type: 'clinique',
      tags: ['alcool'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-06',
      recto: 'Quel syndrome correspond à la trisomie 21 ?',
      verso: 'Le syndrome de Down.',
      type: 'classification',
      tags: ['trisomie 21'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-07',
      recto: 'Quel syndrome correspond à la trisomie 18 ?',
      verso: 'Le syndrome d’Edwards.',
      type: 'classification',
      tags: ['trisomie 18'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-08',
      recto: 'Quel syndrome correspond à la monosomie X (45, X0) ?',
      verso: 'Le syndrome de Turner.',
      type: 'classification',
      tags: ['syndrome de Turner'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-09',
      recto: 'Quel facteur augmente le risque de trisomie 21 ?',
      verso: 'L’âge maternel avancé.',
      type: 'chiffre',
      tags: ['trisomie 21', 'âge maternel'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-10',
      recto: 'Que mesure la clarté nucale et à quel terme ?',
      verso: 'Une mesure échographique du premier trimestre (environ 11 à 13 semaines et 6 jours d’aménorrhée), utilisée dans le dépistage combiné de la trisomie 21.',
      type: 'clinique',
      tags: ['clarté nucale'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-11',
      recto: 'Sur quoi repose le DPNI ?',
      verso: 'L’analyse de l’ADN fœtal libre circulant dans le sang maternel.',
      type: 'clinique',
      tags: ['DPNI'],
    },
    {
      id: 'embryo-anomalies-teratogenese-fc-12',
      recto: 'Citer deux méthodes invasives de diagnostic prénatal.',
      verso: 'L’amniocentèse et la choriocentèse (biopsie de trophoblaste).',
      type: 'classification',
      tags: ['diagnostic prénatal invasif'],
    },
  ],
  qcm: [
    {
      id: 'embryo-anomalies-teratogenese-qcm-01',
      enonce: 'Concernant les périodes de sensibilité du développement, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La période préembryonnaire correspond aux semaines 1 et 2 de développement.', vraie: true, justification: 'Exact, période où s’applique la loi du tout ou rien.' },
        { lettre: 'B', texte: 'La période embryonnaire est la période la plus à risque de malformations morphologiques majeures.', vraie: true, justification: 'Exact, elle correspond à l’organogenèse (semaines 3 à 8).' },
        { lettre: 'C', texte: 'La période fœtale s’étend de la 9e semaine à la naissance.', vraie: true, justification: 'Exact, c’est la définition classique.' },
        { lettre: 'D', texte: 'Une agression durant la période fœtale ne peut avoir aucune conséquence sur le développement.', vraie: false, justification: 'Elle peut entraîner des troubles fonctionnels ou un retard de croissance, notamment pour les organes à maturation tardive.' },
        { lettre: 'E', texte: 'Le système nerveux central n’est plus sensible après la 8e semaine.', vraie: false, justification: 'Le système nerveux central poursuit sa maturation bien au-delà et reste vulnérable pendant la période fœtale.' },
      ],
      correction: 'Réponses exactes : A, B et C. Le système nerveux central reste une exception notable de sensibilité prolongée.',
      difficulte: 2,
    },
    {
      id: 'embryo-anomalies-teratogenese-qcm-02',
      enonce: 'Concernant les agents tératogènes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’acide valproïque est associé aux anomalies de fermeture du tube neural.', vraie: true, justification: 'Exact, c’est un tératogène classique du système nerveux central.' },
        { lettre: 'B', texte: 'La rubéole congénitale peut provoquer une cardiopathie et une surdité.', vraie: true, justification: 'Exact, dans le cadre de la triade de Gregg.' },
        { lettre: 'C', texte: 'L’alcool n’a aucun effet tératogène démontré.', vraie: false, justification: 'L’alcool est un tératogène bien démontré, responsable du syndrome d’alcoolisation fœtale.' },
        { lettre: 'D', texte: 'Une carence en acide folique augmente le risque d’anomalies de fermeture du tube neural.', vraie: true, justification: 'Exact, d’où l’intérêt de la supplémentation préventive.' },
        { lettre: 'E', texte: 'Un diabète maternel mal équilibré n’a pas d’influence sur le risque malformatif.', vraie: false, justification: 'Un diabète mal équilibré en début de grossesse augmente le risque de malformations, notamment cardiaques.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir les associations classiques agent-malformation, utiles en QCM.',
      difficulte: 2,
    },
    {
      id: 'embryo-anomalies-teratogenese-qcm-03',
      enonce: 'Concernant les malformations congénitales fréquentes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La fente labio-palatine résulte d’un défaut de fusion des bourgeons faciaux.', vraie: true, justification: 'Exact, au cours de la période embryonnaire.' },
        { lettre: 'B', texte: 'Le spina bifida résulte d’un défaut de fermeture du neuropore antérieur.', vraie: false, justification: 'Le spina bifida résulte d’un défaut de fermeture du neuropore postérieur.' },
        { lettre: 'C', texte: 'L’omphalocèle est un défaut de la paroi abdominale antérieure.', vraie: true, justification: 'Exact, avec extériorisation de viscères abdominaux.' },
        { lettre: 'D', texte: 'Les cardiopathies congénitales ont toujours une cause génétique unique identifiée.', vraie: false, justification: 'Elles sont le plus souvent d’origine multifactorielle, sans cause unique identifiée dans la majorité des cas.' },
        { lettre: 'E', texte: 'Ces malformations résultent le plus souvent d’une interaction entre susceptibilité génétique et facteurs environnementaux.', vraie: true, justification: 'Exact, c’est le modèle étiologique le plus souvent retenu.' },
      ],
      correction: 'Réponses exactes : A, C et E. La majorité des malformations fréquentes sont multifactorielles.',
      difficulte: 2,
    },
    {
      id: 'embryo-anomalies-teratogenese-qcm-04',
      enonce: 'Concernant les anomalies chromosomiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La trisomie 21 correspond au syndrome de Down.', vraie: true, justification: 'Exact, c’est l’anomalie chromosomique la plus fréquente à la naissance.' },
        { lettre: 'B', texte: 'La trisomie 18 correspond au syndrome de Patau.', vraie: false, justification: 'La trisomie 18 correspond au syndrome d’Edwards ; la trisomie 13 correspond au syndrome de Patau.' },
        { lettre: 'C', texte: 'Le syndrome de Turner correspond à une monosomie du chromosome X.', vraie: true, justification: 'Exact, caryotype 45, X0.' },
        { lettre: 'D', texte: 'Le risque de trisomie 21 diminue avec l’âge maternel.', vraie: false, justification: 'Ce risque augmente au contraire avec l’âge maternel.' },
        { lettre: 'E', texte: 'Les trisomies résultent le plus souvent d’une non-disjonction méiotique.', vraie: true, justification: 'Exact, c’est le mécanisme principal de leur survenue.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien associer chaque trisomie à son syndrome propre.',
      difficulte: 2,
    },
    {
      id: 'embryo-anomalies-teratogenese-qcm-05',
      enonce: 'Concernant le diagnostic prénatal, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’amniocentèse est une méthode non invasive.', vraie: false, justification: 'L’amniocentèse est une méthode invasive, comportant un prélèvement de liquide amniotique.' },
        { lettre: 'B', texte: 'Le DPNI repose sur l’analyse de l’ADN fœtal libre circulant.', vraie: true, justification: 'Exact, présent dans le sang maternel.' },
        { lettre: 'C', texte: 'La clarté nucale est mesurée par échographie au premier trimestre.', vraie: true, justification: 'Exact, entre environ 11 et 13 semaines et 6 jours d’aménorrhée.' },
        { lettre: 'D', texte: 'La choriocentèse permet une analyse cytogénétique fœtale.', vraie: true, justification: 'Exact, par biopsie de villosités choriales.' },
        { lettre: 'E', texte: 'Le DPNI remplace systématiquement tout examen invasif en cas de risque élevé.', vraie: false, justification: 'Le DPNI est un test de dépistage ; un résultat à risque élevé conduit à proposer un examen diagnostique invasif de confirmation.' },
      ],
      correction: 'Réponses exactes : B, C et D. Le DPNI reste un dépistage, non un diagnostic de certitude.',
      difficulte: 2,
    },
    {
      id: 'embryo-anomalies-teratogenese-qcm-06',
      enonce: 'Concernant la logique générale de la tératogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un même agent tératogène peut avoir des effets différents selon la période d’exposition.', vraie: true, justification: 'Exact, la nature de l’effet dépend étroitement du stade de développement au moment de l’exposition.' },
        { lettre: 'B', texte: 'La période embryonnaire précoce (semaines 1-2) est celle des malformations morphologiques les plus sévères.', vraie: false, justification: 'C’est la période embryonnaire au sens strict (semaines 3-8) qui expose au risque maximal de malformations morphologiques.' },
        { lettre: 'C', texte: 'Les organes à maturation tardive restent vulnérables plus longtemps.', vraie: true, justification: 'Exact, comme le système nerveux central ou les organes génitaux.' },
        { lettre: 'D', texte: 'Le diagnostic prénatal a pour seul objectif de dépister la trisomie 21.', vraie: false, justification: 'Le diagnostic prénatal vise le dépistage et le diagnostic d’un ensemble large d’anomalies, pas seulement la trisomie 21.' },
        { lettre: 'E', texte: 'La prévention de la tératogenèse repose en partie sur des mesures générales comme la supplémentation en acide folique.', vraie: true, justification: 'Exact, c’est une mesure de prévention primaire bien établie.' },
      ],
      correction: 'Réponses exactes : A, C et E. La sensibilité tératogène dépend à la fois de l’agent et de la période d’exposition.',
      difficulte: 3,
    },
  ],
};
