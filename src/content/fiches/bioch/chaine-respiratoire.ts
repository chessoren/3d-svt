import type { Fiche } from '../../types';

export const ficheChaineRespiratoire: Fiche = {
  id: 'bioch-chaine-respiratoire',
  ue: 'bioch',
  titre: 'Chaîne respiratoire et phosphorylation oxydative',
  sousTitre: 'Complexes I à IV, théorie chimiosmotique, ATP synthase et découplants',
  chapitre: 'Métabolisme',
  ordre: 11,
  duree: 29,
  difficulte: 3,
  motsCles: [
    'chaîne respiratoire',
    'complexe I',
    'complexe IV',
    'ubiquinone',
    'cytochrome c',
    'chimiosmose',
    'ATP synthase',
    'découplant',
  ],
  objectifs: [
    'Décrire l’organisation générale de la chaîne respiratoire mitochondriale.',
    'Situer les complexes I à IV et leurs transporteurs mobiles (ubiquinone, cytochrome c).',
    'Expliquer la théorie chimiosmotique de Mitchell.',
    'Décrire le fonctionnement de l’ATP synthase.',
    'Expliquer le mécanisme d’action d’un découplant.',
    'Établir un bilan approximatif de la production d’ATP par molécule de glucose.',
  ],
  sections: [
    {
      id: 'organisation-generale',
      titre: 'Organisation générale de la chaîne respiratoire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La chaîne respiratoire mitochondriale est une succession de complexes protéiques enchâssés dans la membrane mitochondriale interne, qui transfèrent des électrons depuis les coenzymes réduits (NADH, FADH2) jusqu’à l’oxygène, accepteur final, tout en pompant des protons de la matrice vers l’espace intermembranaire.",
        },
        {
          type: 'definition',
          terme: 'Phosphorylation oxydative',
          definition:
            "Processus couplant le transfert d’électrons le long de la chaîne respiratoire à la synthèse d’ATP par l’ATP synthase, grâce au gradient électrochimique de protons créé à travers la membrane mitochondriale interne.",
        },
        {
          type: 'tableau',
          titre: 'Les quatre complexes de la chaîne respiratoire',
          colonnes: ['Complexe', 'Nom', 'Donneur d’électrons', 'Protons pompés'],
          lignes: [
            ['Complexe I', 'NADH-ubiquinone oxydoréductase', 'NADH', 'Oui'],
            ['Complexe II', 'Succinate-ubiquinone oxydoréductase', 'FADH2 (succinate déshydrogénase)', 'Non'],
            ['Complexe III', 'Ubiquinol-cytochrome c oxydoréductase', 'Ubiquinol (ubiquinone réduite)', 'Oui'],
            ['Complexe IV', 'Cytochrome c oxydase', 'Cytochrome c réduit', 'Oui'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le complexe II ne pompe pas de protons',
          texte:
            "Contrairement aux complexes I, III et IV, le complexe II (identique à la succinate déshydrogénase du cycle de Krebs) ne pompe aucun proton à travers la membrane mitochondriale interne : il se contente de transférer les électrons du FADH2 vers l’ubiquinone. C’est pourquoi l’oxydation du FADH2 produit moins d’ATP que celle du NADH.",
        },
      ],
    },
    {
      id: 'transporteurs-mobiles',
      titre: 'Les transporteurs mobiles d’électrons',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Deux transporteurs mobiles assurent la continuité du flux d’électrons entre les complexes fixes de la chaîne respiratoire : l’ubiquinone (ou coenzyme Q), liposoluble et mobile dans la membrane, et le cytochrome c, hydrosoluble et mobile dans l’espace intermembranaire.",
        },
        {
          type: 'etapes',
          titre: 'Le trajet des électrons',
          etapes: [
            { titre: 'Entrée par le complexe I ou II', detail: 'Le NADH cède ses électrons au complexe I ; le FADH2 (via la succinate déshydrogénase, complexe II) les cède directement à l’ubiquinone.' },
            { titre: 'Passage par l’ubiquinone', detail: 'L’ubiquinone, réduite en ubiquinol, transporte les électrons des complexes I et II vers le complexe III.' },
            { titre: 'Passage par le complexe III et le cytochrome c', detail: 'Le complexe III transfère les électrons de l’ubiquinol au cytochrome c, qui les achemine ensuite jusqu’au complexe IV.' },
            { titre: 'Réduction finale de l’oxygène', detail: 'Le complexe IV transfère les électrons du cytochrome c à l’oxygène moléculaire, formant de l’eau.' },
          ],
        },
        {
          type: 'formule',
          expression: '4 e- + 4 H+ + O2 → 2 H2O',
          legende: 'Réaction terminale catalysée par le complexe IV (cytochrome c oxydase), consommant l’oxygène respiré.',
        },
      ],
    },
    {
      id: 'theorie-chimiosmotique',
      titre: 'La théorie chimiosmotique de Mitchell',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Formulée par Peter Mitchell, la théorie chimiosmotique postule que l’énergie libérée par le transfert d’électrons le long de la chaîne respiratoire est stockée sous forme d’un gradient électrochimique de protons de part et d’autre de la membrane mitochondriale interne, avant d’être utilisée pour la synthèse d’ATP.",
        },
        {
          type: 'definition',
          terme: 'Force protonmotrice',
          definition:
            "Gradient électrochimique résultant de l’accumulation de protons dans l’espace intermembranaire, combinant un gradient de concentration (chimique) et un gradient de charge électrique (potentiel de membrane), utilisé comme source d’énergie pour la synthèse d’ATP.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un couplage indirect, non un transfert direct de groupement',
          texte:
            "Contrairement à la phosphorylation au niveau du substrat, la phosphorylation oxydative ne transfère pas directement un groupement phosphate riche en énergie sur l’ADP : l’énergie du transfert d’électrons est d’abord stockée sous forme de gradient de protons, puis utilisée par l’ATP synthase. C’est ce couplage indirect que décrit la théorie chimiosmotique.",
        },
        {
          type: 'liste',
          items: [
            'Le pompage de protons par les complexes I, III et IV crée un pH plus bas et une charge positive plus élevée dans l’espace intermembranaire que dans la matrice.',
            'Ce gradient constitue une forme de stockage d’énergie potentielle, immédiatement disponible pour l’ATP synthase.',
          ],
        },
      ],
    },
    {
      id: 'atp-synthase',
      titre: 'L’ATP synthase',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’ATP synthase (ou complexe V) est une enzyme membranaire qui catalyse la synthèse d’ATP à partir d’ADP et de phosphate inorganique, en utilisant l’énergie libérée par le reflux des protons de l’espace intermembranaire vers la matrice, selon leur gradient électrochimique.",
        },
        {
          type: 'tableau',
          titre: 'Les deux sous-unités fonctionnelles de l’ATP synthase',
          colonnes: ['Sous-unité', 'Localisation', 'Fonction'],
          lignes: [
            ['F0', 'Enchâssée dans la membrane mitochondriale interne', 'Canal à protons, moteur rotatif entraîné par le flux de protons'],
            ['F1', 'Saillant dans la matrice mitochondriale', 'Portion catalytique, synthétisant l’ATP grâce à la rotation transmise par F0'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un moteur moléculaire rotatif',
          texte:
            "Le passage des protons à travers la sous-unité F0 entraîne la rotation d’un axe central transmis à la sous-unité F1, ce qui modifie successivement la conformation de ses trois sites catalytiques et permet la synthèse cyclique d’ATP : un mécanisme rotatif décrit par Paul Boyer et confirmé structuralement par John Walker.",
        },
      ],
    },
    {
      id: 'decouplants',
      titre: 'Les découplants de la phosphorylation oxydative',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un découplant est une molécule qui dissocie le transfert d’électrons de la synthèse d’ATP, en permettant aux protons de retraverser la membrane mitochondriale interne sans passer par l’ATP synthase, dissipant ainsi le gradient de protons sous forme de chaleur.",
        },
        {
          type: 'definition',
          terme: 'Découplant (uncoupler)',
          definition:
            "Substance liposoluble capable de transporter des protons à travers la membrane mitochondriale interne en dehors de l’ATP synthase, court-circuitant le gradient électrochimique et empêchant la synthèse d’ATP, tout en laissant se poursuivre le transfert d’électrons.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'La thermogenine, un découplant physiologique',
          texte:
            "La thermogenine (UCP1, uncoupling protein 1), présente dans la membrane mitochondriale interne du tissu adipeux brun, découple physiologiquement la chaîne respiratoire pour produire de la chaleur plutôt que de l’ATP : c’est le mécanisme de la thermogenèse sans frisson, particulièrement développée chez le nouveau-né.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Distinguer découplant et inhibiteur',
          texte:
            "Un découplant (comme le 2,4-dinitrophénol) laisse le transfert d’électrons se poursuivre, voire s’accélérer, mais empêche la synthèse d’ATP. Un inhibiteur de la chaîne respiratoire (comme le cyanure, qui bloque le complexe IV) bloque au contraire directement le transfert d’électrons lui-même, arrêtant à la fois la consommation d’oxygène et la synthèse d’ATP.",
        },
      ],
    },
    {
      id: 'bilan-atp',
      titre: 'Bilan de la production d’ATP',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le rendement en ATP de l’oxydation complète du glucose s’estime en attribuant un nombre approximatif de protons pompés, puis d’ATP synthétisés, par molécule de NADH ou de FADH2 oxydée par la chaîne respiratoire.",
        },
        {
          type: 'tableau',
          titre: 'Équivalences énergétiques usuelles',
          colonnes: ['Coenzyme réduit', 'ATP produits par la chaîne respiratoire (estimation usuelle)'],
          lignes: [
            ['NADH mitochondrial', 'Environ 2,5 ATP'],
            ['FADH2', 'Environ 1,5 ATP'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Un bilan approximatif, non un chiffre absolu',
          texte:
            "Les valeurs de 2,5 ATP par NADH et 1,5 ATP par FADH2 sont des estimations moyennes couramment utilisées en enseignement, qui remplacent les anciens chiffres entiers (3 et 2) une fois pris en compte le coût réel du transport des protons et de l’ADP/ATP à travers la membrane mitochondriale. Le rendement exact varie selon le tissu et la navette utilisée pour le NADH cytosolique.",
        },
      ],
    },
  ],
  pointsCles: [
    'La chaîne respiratoire comporte quatre complexes (I à IV) enchâssés dans la membrane mitochondriale interne.',
    'L’ubiquinone et le cytochrome c sont les deux transporteurs mobiles d’électrons entre les complexes fixes.',
    'Le complexe II ne pompe pas de protons, contrairement aux complexes I, III et IV.',
    'La théorie chimiosmotique de Mitchell explique le couplage indirect entre transfert d’électrons et synthèse d’ATP via un gradient de protons.',
    'L’ATP synthase utilise le reflux des protons (sous-unité F0) pour entraîner la synthèse rotative d’ATP (sous-unité F1).',
    'Un découplant dissipe le gradient de protons sans synthèse d’ATP ; la thermogenine en est un exemple physiologique.',
    'L’oxydation d’un NADH produit environ 2,5 ATP, celle d’un FADH2 environ 1,5 ATP.',
  ],
  erreursFrequentes: [
    'Croire que tous les complexes de la chaîne respiratoire pompent des protons : le complexe II en est dépourvu.',
    'Confondre phosphorylation oxydative et phosphorylation au niveau du substrat : la première repose sur un gradient de protons, la seconde sur un transfert direct de groupement phosphate.',
    'Confondre découplant et inhibiteur de la chaîne respiratoire : le découplant laisse le transfert d’électrons se poursuivre, l’inhibiteur le bloque.',
    'Oublier que le complexe IV est celui qui réduit l’oxygène en eau, dernière étape du transfert d’électrons.',
    'Penser que le rendement de 2,5 ATP par NADH et 1,5 ATP par FADH2 est une valeur fixe et universelle : ce sont des estimations moyennes.',
  ],
  mnemotechniques: [
    {
      moyen: '« I, III, IV pompent ; II se repose »',
      explication:
        'Les complexes I, III et IV pompent des protons vers l’espace intermembranaire ; le complexe II, simple relais du FADH2 vers l’ubiquinone, n’en pompe aucun.',
    },
    {
      moyen: '« F0 tourne, F1 fabrique »',
      explication:
        'La sous-unité F0 de l’ATP synthase, traversée par les protons, tourne comme un moteur ; la sous-unité F1 utilise cette rotation pour synthétiser l’ATP.',
    },
    {
      moyen: '« Le découplant laisse courir les électrons, mais vole l’ATP »',
      explication:
        'Un découplant n’arrête pas le transfert d’électrons (contrairement à un inhibiteur) : il empêche seulement que l’énergie du gradient de protons serve à fabriquer de l’ATP.',
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
      id: 'bioch-chaine-respiratoire-fc-01',
      recto: 'Où sont enchâssés les complexes de la chaîne respiratoire ?',
      verso: 'Dans la membrane mitochondriale interne.',
      type: 'definition',
      tags: ['chaîne respiratoire'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-02',
      recto: 'Quel complexe reçoit les électrons du NADH ?',
      verso: 'Le complexe I (NADH-ubiquinone oxydoréductase).',
      type: 'mecanisme',
      tags: ['complexe I'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-03',
      recto: 'Quel complexe de la chaîne respiratoire ne pompe aucun proton ?',
      verso: 'Le complexe II (succinate-ubiquinone oxydoréductase).',
      type: 'chiffre',
      tags: ['complexe II'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-04',
      recto: 'Quels sont les deux transporteurs mobiles d’électrons de la chaîne respiratoire ?',
      verso: 'L’ubiquinone (coenzyme Q) et le cytochrome c.',
      type: 'classification',
      tags: ['transporteurs'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-05',
      recto: 'Quel complexe réduit l’oxygène en eau ?',
      verso: 'Le complexe IV (cytochrome c oxydase).',
      type: 'mecanisme',
      tags: ['complexe IV'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-06',
      recto: 'Que postule la théorie chimiosmotique de Mitchell ?',
      verso: 'Que l’énergie du transfert d’électrons est stockée sous forme d’un gradient électrochimique de protons, utilisé ensuite pour synthétiser l’ATP.',
      type: 'definition',
      tags: ['chimiosmose'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-07',
      recto: 'Quelles sont les deux sous-unités fonctionnelles de l’ATP synthase ?',
      verso: 'F0 (canal à protons, rotatif) et F1 (portion catalytique, synthèse d’ATP).',
      type: 'classification',
      tags: ['ATP synthase'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-08',
      recto: 'Qu’est-ce qu’un découplant de la phosphorylation oxydative ?',
      verso: 'Une molécule qui dissipe le gradient de protons sans passer par l’ATP synthase, empêchant la synthèse d’ATP sans bloquer le transfert d’électrons.',
      type: 'definition',
      tags: ['découplant'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-09',
      recto: 'Quel est le découplant physiologique du tissu adipeux brun ?',
      verso: 'La thermogenine (UCP1), responsable de la thermogenèse sans frisson.',
      type: 'clinique',
      tags: ['thermogenine'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-10',
      recto: 'Quelle est la différence entre un découplant et un inhibiteur de la chaîne respiratoire ?',
      verso: 'Le découplant laisse le transfert d’électrons se poursuivre ; l’inhibiteur (comme le cyanure) le bloque directement.',
      type: 'mecanisme',
      tags: ['découplant', 'inhibiteur'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-11',
      recto: 'Combien d’ATP produit approximativement l’oxydation d’un NADH mitochondrial ?',
      verso: 'Environ 2,5 ATP.',
      type: 'chiffre',
      tags: ['bilan énergétique'],
    },
    {
      id: 'bioch-chaine-respiratoire-fc-12',
      recto: 'Combien d’ATP produit approximativement l’oxydation d’un FADH2 ?',
      verso: 'Environ 1,5 ATP.',
      type: 'chiffre',
      tags: ['bilan énergétique'],
    },
  ],
  qcm: [
    {
      id: 'bioch-chaine-respiratoire-qcm-01',
      enonce: 'Concernant l’organisation de la chaîne respiratoire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les complexes de la chaîne respiratoire sont situés dans la membrane mitochondriale externe.', vraie: false, justification: 'Ils sont situés dans la membrane mitochondriale interne.' },
        { lettre: 'B', texte: 'Le complexe I reçoit les électrons du NADH.', vraie: true, justification: 'C’est la NADH-ubiquinone oxydoréductase.' },
        { lettre: 'C', texte: 'Le complexe II est identique à la succinate déshydrogénase du cycle de Krebs.', vraie: true, justification: 'C’est la seule enzyme commune aux deux voies métaboliques.' },
        { lettre: 'D', texte: 'Le complexe III transfère les électrons directement à l’oxygène.', vraie: false, justification: 'C’est le complexe IV qui réduit l’oxygène ; le complexe III les transfère au cytochrome c.' },
        { lettre: 'E', texte: 'Le complexe IV est la cytochrome c oxydase.', vraie: true, justification: 'C’est la dernière étape du transfert d’électrons, réduisant l’oxygène en eau.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-chaine-respiratoire-qcm-02',
      enonce: 'Concernant les transporteurs mobiles d’électrons, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ubiquinone est hydrosoluble.', vraie: false, justification: 'L’ubiquinone est liposoluble, mobile dans la membrane mitochondriale interne.' },
        { lettre: 'B', texte: 'Le cytochrome c est mobile dans l’espace intermembranaire.', vraie: true, justification: 'C’est une protéine hydrosoluble qui navette entre les complexes III et IV.' },
        { lettre: 'C', texte: 'L’ubiquinone reçoit des électrons à la fois des complexes I et II.', vraie: true, justification: 'Elle constitue un point de convergence commun aux deux voies d’entrée des électrons.' },
        { lettre: 'D', texte: 'Le cytochrome c transfère les électrons au complexe III.', vraie: false, justification: 'Le cytochrome c reçoit les électrons du complexe III et les transfère au complexe IV.' },
        { lettre: 'E', texte: 'L’ubiquinol est la forme réduite de l’ubiquinone.', vraie: true, justification: 'C’est la forme qui transporte effectivement les électrons vers le complexe III.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-chaine-respiratoire-qcm-03',
      enonce: 'Concernant la théorie chimiosmotique de Mitchell, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle postule un couplage direct entre le transfert d’électrons et la phosphorylation de l’ADP.', vraie: false, justification: 'Le couplage est indirect, médié par un gradient électrochimique de protons.' },
        { lettre: 'B', texte: 'Le gradient de protons est plus concentré dans l’espace intermembranaire que dans la matrice.', vraie: true, justification: 'C’est la conséquence du pompage de protons par les complexes I, III et IV.' },
        { lettre: 'C', texte: 'La force protonmotrice combine un gradient chimique et un gradient électrique.', vraie: true, justification: 'C’est la définition de la force protonmotrice.' },
        { lettre: 'D', texte: 'Cette théorie a été formulée par Peter Mitchell.', vraie: true, justification: 'C’est le fondateur de la théorie chimiosmotique, récompensé par un prix Nobel.' },
        { lettre: 'E', texte: 'Le gradient de protons n’a aucun rôle dans la synthèse d’ATP.', vraie: false, justification: 'Il est au contraire la source d’énergie directement utilisée par l’ATP synthase.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-chaine-respiratoire-qcm-04',
      enonce: 'Concernant l’ATP synthase, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La sous-unité F0 est un canal à protons.', vraie: true, justification: 'Elle permet le reflux des protons à travers la membrane mitochondriale interne.' },
        { lettre: 'B', texte: 'La sous-unité F1 est enchâssée dans la membrane.', vraie: false, justification: 'La sous-unité F1 fait saillie dans la matrice mitochondriale ; F0 est la portion membranaire.' },
        { lettre: 'C', texte: 'La rotation de F0 entraîne un changement de conformation des sites catalytiques de F1.', vraie: true, justification: 'C’est le mécanisme du moteur rotatif décrit par Boyer et Walker.' },
        { lettre: 'D', texte: 'L’ATP synthase est aussi appelée complexe V.', vraie: true, justification: 'C’est sa dénomination usuelle au sein de la chaîne des complexes mitochondriaux.' },
        { lettre: 'E', texte: 'L’ATP synthase hydrolyse systématiquement l’ATP.', vraie: false, justification: 'Dans son fonctionnement physiologique normal, elle synthétise l’ATP ; l’hydrolyse ne survient que dans des conditions particulières.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-chaine-respiratoire-qcm-05',
      enonce: 'Concernant les découplants, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un découplant bloque le transfert d’électrons.', vraie: false, justification: 'Il laisse au contraire le transfert d’électrons se poursuivre, voire s’accélérer.' },
        { lettre: 'B', texte: 'La thermogenine est un découplant physiologique du tissu adipeux brun.', vraie: true, justification: 'Elle dissipe le gradient de protons sous forme de chaleur, sans synthèse d’ATP.' },
        { lettre: 'C', texte: 'Un découplant favorise la production de chaleur.', vraie: true, justification: 'L’énergie du gradient de protons, non utilisée pour l’ATP, se dissipe sous forme thermique.' },
        { lettre: 'D', texte: 'Le cyanure est un exemple de découplant.', vraie: false, justification: 'Le cyanure est un inhibiteur du complexe IV, non un découplant.' },
        { lettre: 'E', texte: 'Un découplant fait retraverser les protons sans passer par l’ATP synthase.', vraie: true, justification: 'C’est le mécanisme d’action défini d’un découplant.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-chaine-respiratoire-qcm-06',
      enonce: 'Concernant le bilan énergétique de la phosphorylation oxydative, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un NADH mitochondrial produit environ 2,5 ATP.', vraie: true, justification: 'C’est l’estimation usuelle couramment retenue.' },
        { lettre: 'B', texte: 'Un FADH2 produit davantage d’ATP qu’un NADH.', vraie: false, justification: 'C’est l’inverse : le FADH2 produit environ 1,5 ATP, moins que le NADH.' },
        { lettre: 'C', texte: 'La différence de rendement entre NADH et FADH2 s’explique par l’absence de pompage de protons au niveau du complexe II.', vraie: true, justification: 'Le FADH2 entre dans la chaîne au niveau de l’ubiquinone, en aval du complexe I, ce qui réduit le nombre de protons pompés.' },
        { lettre: 'D', texte: 'Ces valeurs sont des chiffres absolus et invariables.', vraie: false, justification: 'Ce sont des estimations moyennes, qui peuvent varier selon le tissu et la navette utilisée.' },
        { lettre: 'E', texte: 'La phosphorylation oxydative est la principale source d’ATP lors du métabolisme aérobie du glucose.', vraie: true, justification: 'Elle produit la majeure partie de l’ATP total, bien plus que la glycolyse ou le cycle de Krebs seuls.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
