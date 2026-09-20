import type { Fiche } from '../../types';

export const ficheAcidesAmines: Fiche = {
  id: 'bioch-acides-amines',
  ue: 'bioch',
  titre: 'Les acides aminés',
  sousTitre: 'Structure, classification, propriétés acido-basiques et liaison peptidique',
  chapitre: 'Biochimie structurale',
  ordre: 1,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'acide aminé',
    'carbone alpha',
    'chaîne latérale',
    'zwitterion',
    'pHi',
    'liaison peptidique',
    'pont disulfure',
    'acides aminés essentiels',
  ],
  objectifs: [
    "Décrire la structure générale d’un acide aminé et la notion de carbone asymétrique.",
    'Classer les vingt acides aminés protéinogènes selon la nature de leur chaîne latérale.',
    'Expliquer le comportement acido-basique et calculer un point isoélectrique.',
    'Caractériser la liaison peptidique et ses conséquences structurales.',
    'Citer les neuf acides aminés indispensables et les principaux dérivés non protéinogènes.',
  ],
  sections: [
    {
      id: 'structure-generale',
      titre: 'Structure générale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un acide aminé est une molécule organique portant simultanément une fonction acide carboxylique (-COOH) et une fonction amine (-NH2). Dans les acides aminés protéinogènes, ces deux fonctions sont portées par le même atome de carbone, appelé carbone alpha (Cα) : on parle d’acides aminés alpha.",
        },
        {
          type: 'liste',
          items: [
            'Le carbone alpha porte quatre substituants : -COOH, -NH2, un atome d’hydrogène et une chaîne latérale notée R.',
            "La chaîne latérale R est le seul élément qui varie d’un acide aminé à l’autre : elle détermine à elle seule les propriétés physico-chimiques de l’acide aminé.",
            "Vingt acides aminés sont directement codés par le code génétique chez l’être humain. La sélénocystéine, parfois présentée comme le vingt-et-unième acide aminé, est incorporée par un mécanisme de recodage du codon UGA.",
          ],
        },
        {
          type: 'definition',
          terme: 'Carbone asymétrique',
          definition:
            "Atome de carbone portant quatre substituants différents. Le carbone alpha est asymétrique pour les dix-neuf acides aminés dont la chaîne latérale n’est pas un hydrogène : seule la glycine (R = H) est achirale.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Série L et non configuration L',
          texte:
            "Tous les acides aminés protéinogènes appartiennent à la série L (référence au D-glycéraldéhyde selon la convention de Fischer). Attention : appartenir à la série L ne préjuge pas du sens de déviation de la lumière polarisée, ni de la nomenclature R/S. La L-cystéine est par exemple de configuration R, alors que les autres acides aminés de la série L sont de configuration S.",
        },
        {
          type: 'paragraphe',
          texte:
            "La thréonine et l’isoleucine possèdent un second carbone asymétrique sur leur chaîne latérale : elles présentent donc quatre stéréoisomères, dont un seul est protéinogène.",
        },
      ],
    },
    {
      id: 'classification',
      titre: 'Classification des vingt acides aminés',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La classification la plus utilisée repose sur la polarité et la charge de la chaîne latérale au pH physiologique (pH = 7,4). Elle permet de prévoir la localisation de l’acide aminé dans une protéine globulaire : les résidus apolaires se retrouvent préférentiellement au cœur hydrophobe, les résidus polaires et chargés en surface, au contact de l’eau.",
        },
        {
          type: 'tableau',
          titre: 'Les vingt acides aminés protéinogènes',
          colonnes: ['Classe', 'Acides aminés', 'Code 3 lettres', 'Code 1 lettre', 'Particularité'],
          lignes: [
            [
              'Apolaires aliphatiques',
              'Glycine, alanine, valine, leucine, isoleucine, proline',
              'Gly, Ala, Val, Leu, Ile, Pro',
              'G, A, V, L, I, P',
              'Proline : amine secondaire cyclique (imino-acide)',
            ],
            [
              'Aromatiques',
              'Phénylalanine, tyrosine, tryptophane',
              'Phe, Tyr, Trp',
              'F, Y, W',
              'Absorbent à 280 nm (Trp surtout, puis Tyr)',
            ],
            [
              'Soufrés',
              'Cystéine, méthionine',
              'Cys, Met',
              'C, M',
              'Cystéine : ponts disulfure ; méthionine : acide aminé initiateur',
            ],
            [
              'Polaires non chargés',
              'Sérine, thréonine, asparagine, glutamine',
              'Ser, Thr, Asn, Gln',
              'S, T, N, Q',
              'Sites de phosphorylation (Ser, Thr) et de N-glycosylation (Asn)',
            ],
            [
              'Acides (chargés -)',
              'Acide aspartique, acide glutamique',
              'Asp, Glu',
              'D, E',
              'Chaîne latérale carboxylique, ionisée à pH 7,4',
            ],
            [
              'Basiques (chargés +)',
              'Lysine, arginine, histidine',
              'Lys, Arg, His',
              'K, R, H',
              'Histidine : seule chaîne latérale tamponnante au pH physiologique',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les pièges classiques de la classification',
          texte:
            "La tyrosine est aromatique mais aussi polaire (fonction phénol). La cystéine est soufrée et faiblement acide (pKa proche de 8,3). L’asparagine et la glutamine sont les amides — donc neutres — de l’aspartate et du glutamate : ne les comptez jamais parmi les acides aminés acides. La proline n’a pas d’amine primaire libre sur son carbone alpha.",
        },
        {
          type: 'schema',
          schemaId: 'bioch-classification-acides-amines',
          legende: 'Répartition des vingt acides aminés selon la polarité de leur chaîne latérale.',
        },
      ],
    },
    {
      id: 'proprietes-acidobasiques',
      titre: 'Propriétés acido-basiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En solution aqueuse, un acide aminé n’existe jamais sous forme neutre non ionisée : la fonction carboxylique, acide, cède son proton à la fonction amine, basique. La molécule porte donc simultanément une charge positive et une charge négative : c’est un zwitterion, ou amphion, globalement neutre.",
        },
        {
          type: 'definition',
          terme: 'Point isoélectrique (pHi ou pI)',
          definition:
            "Valeur de pH pour laquelle la charge nette moyenne de l’acide aminé est nulle. À ce pH, la molécule ne migre pas dans un champ électrique : c’est le principe de l’électrophorèse et de l’isoélectrofocalisation.",
        },
        {
          type: 'etapes',
          titre: 'Méthode de calcul du pHi',
          etapes: [
            {
              titre: 'Écrire les formes successives',
              detail:
                "Classer toutes les fonctions ionisables par pKa croissant et écrire les formes obtenues en déprotonant une fonction à la fois, depuis la forme la plus protonée (pH très acide) jusqu’à la forme la plus déprotonée.",
            },
            {
              titre: 'Repérer la forme de charge nette nulle',
              detail:
                "Attribuer une charge à chaque fonction (-COO- = -1, -NH3+ = +1, chaîne latérale selon sa nature) puis identifier la forme dont la somme des charges vaut zéro.",
            },
            {
              titre: 'Moyenner les deux pKa encadrants',
              detail:
                'Le pHi est la demi-somme des deux pKa situés de part et d’autre de cette forme neutre : pHi = (pKa1 + pKa2) / 2.',
            },
          ],
        },
        {
          type: 'formule',
          expression: 'pH = pKa + log ( [base conjuguée] / [acide] )',
          legende:
            "Relation de Henderson-Hasselbalch : elle donne la proportion des deux formes d’un couple acido-basique à un pH donné. À pH = pKa, les deux formes sont équimolaires.",
        },
        {
          type: 'tableau',
          titre: 'pKa usuels à 25 °C',
          colonnes: ['Fonction ionisable', 'pKa approximatif', 'Conséquence à pH 7,4'],
          lignes: [
            ['α-carboxyle (-COOH)', '2,1 à 2,4', 'Totalement déprotoné (-COO-)'],
            ['α-aminé (-NH3+)', '9,0 à 9,8', 'Totalement protoné (-NH3+)'],
            ['Chaîne latérale Asp', '3,9', 'Chargée négativement'],
            ['Chaîne latérale Glu', '4,3', 'Chargée négativement'],
            ['Chaîne latérale His (imidazole)', '6,0', 'Partiellement protonée : effet tampon'],
            ['Chaîne latérale Cys (thiol)', '8,3', 'Majoritairement protonée'],
            ['Chaîne latérale Tyr (phénol)', '10,1', 'Protonée, non chargée'],
            ['Chaîne latérale Lys', '10,5', 'Chargée positivement'],
            ['Chaîne latérale Arg (guanidinium)', '12,5', 'Chargée positivement'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Lecture rapide du pHi',
          texte:
            "Un acide aminé neutre a un pHi proche de 6 (moyenne de 2,3 et 9,6). Un acide aminé acide a un pHi nettement inférieur à 6 (environ 3 pour Asp et Glu). Un acide aminé basique a un pHi nettement supérieur à 6 (environ 7,6 pour His, 9,7 pour Lys, 10,8 pour Arg). Cette estimation suffit pour éliminer des propositions fausses en QCM.",
        },
      ],
    },
    {
      id: 'liaison-peptidique',
      titre: 'La liaison peptidique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La liaison peptidique est une liaison amide formée entre le groupement carboxyle d’un premier acide aminé et le groupement aminé d’un second, avec élimination d’une molécule d’eau. Il s’agit d’une réaction de condensation, thermodynamiquement défavorable : dans la cellule, elle est catalysée par le ribosome et couplée à l’hydrolyse de liaisons riches en énergie.",
        },
        {
          type: 'liste',
          items: [
            "La liaison C-N possède un caractère partiel de double liaison par mésomérie : sa longueur (0,133 nm) est intermédiaire entre une simple et une double liaison.",
            "Il n’y a donc pas de libre rotation autour de la liaison peptidique : les six atomes du plan peptidique (Cα, C, O, N, H, Cα) sont coplanaires.",
            "La configuration trans est très largement majoritaire, car elle éloigne les deux chaînes latérales ; la proline fait exception et tolère la configuration cis.",
            "La rotation n’est possible qu’autour des liaisons N-Cα (angle phi) et Cα-C (angle psi), ce qui définit les conformations permises représentées sur le diagramme de Ramachandran.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Sens de lecture',
          texte:
            "Un peptide s’écrit et se lit toujours de l’extrémité N-terminale (amine libre, à gauche) vers l’extrémité C-terminale (carboxyle libre, à droite). C’est aussi le sens dans lequel il est synthétisé par le ribosome.",
        },
        {
          type: 'definition',
          terme: 'Pont disulfure',
          definition:
            "Liaison covalente -S-S- formée par oxydation des groupements thiol de deux cystéines. Le dimère obtenu porte le nom de cystine. Ces ponts stabilisent la structure tridimensionnelle des protéines extracellulaires et sécrétées, comme l’insuline ou les immunoglobulines.",
        },
        {
          type: 'schema',
          schemaId: 'bioch-liaison-peptidique',
          legende: 'Formation de la liaison peptidique et géométrie du plan peptidique.',
        },
      ],
    },
    {
      id: 'essentiels-derives',
      titre: 'Acides aminés indispensables et dérivés',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Neuf acides aminés sont dits indispensables (ou essentiels) : l’organisme humain ne dispose pas des voies enzymatiques permettant de les synthétiser, ils doivent donc être apportés par l’alimentation.",
        },
        {
          type: 'liste',
          ordonnee: true,
          items: [
            'Méthionine',
            'Thréonine',
            'Leucine',
            'Isoleucine',
            'Lysine',
            'Valine',
            'Phénylalanine',
            'Tryptophane',
            'Histidine',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Acides aminés conditionnellement indispensables',
          texte:
            "L’arginine, la cystéine, la tyrosine et la glutamine peuvent devenir indispensables dans certaines situations : nouveau-né, prématuré, agression sévère, ou maladie métabolique. La tyrosine est ainsi synthétisée à partir de la phénylalanine ; en cas de phénylcétonurie, cette voie est bloquée et la tyrosine devient indispensable.",
        },
        {
          type: 'tableau',
          titre: 'Principaux dérivés des acides aminés',
          colonnes: ['Précurseur', 'Dérivé', 'Rôle physiologique'],
          lignes: [
            ['Tyrosine', 'Dopamine, noradrénaline, adrénaline', 'Neurotransmetteurs et hormones catécholaminergiques'],
            ['Tyrosine', 'Hormones thyroïdiennes T3 et T4', 'Régulation du métabolisme de base'],
            ['Tyrosine', 'Mélanine', 'Pigmentation cutanée, photoprotection'],
            ['Tryptophane', 'Sérotonine, mélatonine', 'Humeur, rythme veille-sommeil'],
            ['Tryptophane', 'Nicotinamide (vitamine B3)', 'Précurseur du NAD+ et du NADP+'],
            ['Glutamate', 'GABA', 'Principal neurotransmetteur inhibiteur du système nerveux central'],
            ['Histidine', 'Histamine', 'Réaction allergique, sécrétion gastrique acide'],
            ['Arginine', 'Monoxyde d’azote (NO)', 'Vasodilatation, signalisation'],
            ['Glycine', 'Hème, créatine, glutathion', 'Transport de l’oxygène, réserve énergétique musculaire'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Certains acides aminés ne sont jamais incorporés dans les protéines mais jouent un rôle métabolique majeur : l’ornithine et la citrulline sont des intermédiaires du cycle de l’urée, l’homocystéine est un carrefour du métabolisme des groupements monocarbonés, et la bêta-alanine entre dans la composition du coenzyme A.",
        },
      ],
    },
    {
      id: 'methodes-etude',
      titre: "Méthodes d’étude et applications",
      blocs: [
        {
          type: 'tableau',
          titre: 'Réactions et techniques à connaître',
          colonnes: ['Technique', 'Principe', 'Application'],
          lignes: [
            ['Ninhydrine', 'Réaction avec l’amine primaire donnant un composé violet (jaune avec la proline)', 'Révélation et dosage colorimétrique des acides aminés'],
            ['Dégradation d’Edman', 'Retrait séquentiel du résidu N-terminal par l’isothiocyanate de phényle', 'Séquençage de peptides courts, résidu par résidu'],
            ['Absorption à 280 nm', 'Absorption par les noyaux aromatiques du tryptophane et de la tyrosine', 'Dosage rapide d’une solution protéique'],
            ['Électrophorèse', 'Migration selon la charge nette, donc selon le pH du tampon', 'Séparation des acides aminés et des protéines'],
            ['Chromatographie échangeuse d’ions', 'Interaction de la charge nette avec une résine chargée', 'Purification et analyse quantitative'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Phénylcétonurie',
          texte:
            "Maladie héréditaire autosomique récessive due au déficit en phénylalanine hydroxylase, l’enzyme qui convertit la phénylalanine en tyrosine. L’accumulation de phénylalanine et de ses dérivés est toxique pour le système nerveux central en développement. Le dépistage néonatal systématique en France permet la mise en place précoce d’un régime pauvre en phénylalanine, qui prévient le retard mental.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordres de grandeur',
          texte:
            "Masse molaire moyenne d’un résidu dans une protéine : environ 110 g/mol. pH physiologique du plasma : 7,38 à 7,42. Une protéine de 300 résidus pèse donc approximativement 33 kDa.",
        },
      ],
    },
  ],
  pointsCles: [
    "Un acide aminé alpha porte sur le même carbone une fonction amine, une fonction carboxyle, un hydrogène et une chaîne latérale R.",
    'Les vingt acides aminés protéinogènes appartiennent tous à la série L ; seule la glycine est achirale.',
    "La chaîne latérale détermine la classe : apolaire, aromatique, soufrée, polaire neutre, acide ou basique.",
    "En solution, l’acide aminé est un zwitterion ; le pHi est la demi-somme des deux pKa encadrant la forme de charge nette nulle.",
    "La liaison peptidique est plane, de configuration trans, sans libre rotation ; seuls les angles phi et psi sont mobiles.",
    'Neuf acides aminés sont indispensables : méthionine, thréonine, leucine, isoleucine, lysine, valine, phénylalanine, tryptophane, histidine.',
    "L’histidine est la seule chaîne latérale dont le pKa (6,0) la rend tamponnante au pH physiologique.",
  ],
  erreursFrequentes: [
    "Confondre série L et configuration S : la L-cystéine est de configuration R en raison de la priorité du soufre dans les règles de Cahn-Ingold-Prelog.",
    "Classer l’asparagine et la glutamine parmi les acides aminés acides : ce sont leurs amides, donc des acides aminés polaires neutres.",
    "Oublier que la glycine n’est pas chirale et ne possède donc ni énantiomère ni série.",
    "Écrire qu’un acide aminé est neutre à son pHi au sens de non ionisé : il est globalement neutre mais reste un zwitterion doublement ionisé.",
    "Croire que la liaison peptidique permet une libre rotation : c’est justement sa rigidité qui limite les conformations possibles.",
    "Citer l’arginine parmi les neuf acides aminés indispensables : elle n’est qu’indispensable de façon conditionnelle.",
  ],
  mnemotechniques: [
    {
      moyen: 'Ma Très Longue Idée Laisse Voir Plusieurs Théories Humaines',
      explication:
        'Les initiales donnent les neuf acides aminés indispensables : Méthionine, Thréonine, Leucine, Isoleucine, Lysine, Valine, Phénylalanine, Tryptophane, Histidine.',
    },
    {
      moyen: 'Les trois basiques : « LAH »',
      explication:
        'Lysine, Arginine, Histidine. Par ordre de pKa croissant de la chaîne latérale : His (6,0) < Lys (10,5) < Arg (12,5).',
    },
    {
      moyen: 'Les deux acides finissent en -ate',
      explication:
        "Aspartate et glutamate : à pH physiologique, on les nomme sous leur forme ionisée, ce qui rappelle qu’ils sont chargés négativement.",
    },
  ],
  sources: [
    'Lehninger, Principes de biochimie, 8e édition',
    'Harper, Biochimie médicale, 32e édition',
    'Berg, Tymoczko, Gatto, Stryer, Biochimie, 9e édition',
  ],
  schemasLies: ['bioch-classification-acides-amines', 'bioch-liaison-peptidique'],
  flashcards: [
    {
      id: 'bioch-acides-amines-fc-01',
      recto: "Combien d’acides aminés sont codés par le code génétique standard ?",
      verso: 'Vingt. La sélénocystéine, incorporée par recodage du codon UGA, est parfois décrite comme le vingt-et-unième.',
      type: 'chiffre',
      tags: ['acides aminés', 'code génétique'],
    },
    {
      id: 'bioch-acides-amines-fc-02',
      recto: 'Quel est le seul acide aminé protéinogène achiral ?',
      verso: 'La glycine : sa chaîne latérale est un atome d’hydrogène, le carbone alpha porte donc deux substituants identiques.',
      type: 'definition',
      tags: ['stéréochimie'],
    },
    {
      id: 'bioch-acides-amines-fc-03',
      recto: 'Quels acides aminés possèdent deux carbones asymétriques ?',
      verso: 'La thréonine et l’isoleucine : leur chaîne latérale porte un second centre chiral.',
      type: 'definition',
      tags: ['stéréochimie'],
    },
    {
      id: 'bioch-acides-amines-fc-04',
      recto: 'Définir le point isoélectrique (pHi).',
      verso: 'Le pH auquel la charge nette moyenne de la molécule est nulle. Elle ne migre alors pas dans un champ électrique.',
      type: 'definition',
      tags: ['pHi', 'acido-basique'],
    },
    {
      id: 'bioch-acides-amines-fc-05',
      recto: "Quel acide aminé possède une chaîne latérale tamponnante au pH physiologique ?",
      verso: 'L’histidine : le pKa de son noyau imidazole vaut environ 6,0, proche du pH intracellulaire.',
      type: 'mecanisme',
      tags: ['pKa', 'tampon'],
    },
    {
      id: 'bioch-acides-amines-fc-06',
      recto: 'Quels acides aminés absorbent la lumière à 280 nm ?',
      verso: 'Le tryptophane (contribution majoritaire) et la tyrosine ; la phénylalanine absorbe faiblement et plutôt vers 257 nm.',
      type: 'chiffre',
      tags: ['aromatiques', 'dosage'],
    },
    {
      id: 'bioch-acides-amines-fc-07',
      recto: 'Pourquoi n’y a-t-il pas de libre rotation autour de la liaison peptidique ?',
      verso: 'À cause de la mésomérie : la liaison C-N possède un caractère partiel de double liaison, ce qui rend le plan peptidique rigide.',
      type: 'mecanisme',
      tags: ['liaison peptidique'],
    },
    {
      id: 'bioch-acides-amines-fc-08',
      recto: 'Comment se nomme le dimère formé par deux cystéines liées par un pont disulfure ?',
      verso: 'La cystine.',
      type: 'definition',
      tags: ['cystéine', 'pont disulfure'],
    },
    {
      id: 'bioch-acides-amines-fc-09',
      recto: 'Citer les neuf acides aminés indispensables.',
      verso: 'Méthionine, thréonine, leucine, isoleucine, lysine, valine, phénylalanine, tryptophane, histidine.',
      type: 'classification',
      tags: ['nutrition'],
    },
    {
      id: 'bioch-acides-amines-fc-10',
      recto: 'Quel acide aminé est le précurseur des catécholamines ?',
      verso: 'La tyrosine, elle-même issue de l’hydroxylation de la phénylalanine : dopamine puis noradrénaline puis adrénaline.',
      type: 'mecanisme',
      tags: ['dérivés', 'neurotransmetteurs'],
    },
    {
      id: 'bioch-acides-amines-fc-11',
      recto: 'Quelle enzyme est déficitaire dans la phénylcétonurie ?',
      verso: 'La phénylalanine hydroxylase, qui transforme la phénylalanine en tyrosine.',
      type: 'clinique',
      tags: ['phénylcétonurie'],
    },
    {
      id: 'bioch-acides-amines-fc-12',
      recto: 'Donner la relation de Henderson-Hasselbalch.',
      verso: 'pH = pKa + log ( [base conjuguée] / [acide] ). À pH = pKa, les deux formes sont équimolaires.',
      type: 'formule',
      tags: ['acido-basique'],
    },
  ],
  qcm: [
    {
      id: 'bioch-acides-amines-qcm-01',
      enonce: 'Concernant la structure générale des acides aminés protéinogènes, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le carbone alpha porte toujours quatre substituants différents.',
          vraie: false,
          justification: "Faux pour la glycine, dont la chaîne latérale est un hydrogène : le carbone alpha porte alors deux hydrogènes identiques.",
        },
        {
          lettre: 'B',
          texte: 'Tous appartiennent à la série L.',
          vraie: true,
          justification: 'Exact : les acides aminés incorporés dans les protéines humaines sont tous de la série L.',
        },
        {
          lettre: 'C',
          texte: 'Tous sont de configuration absolue S.',
          vraie: false,
          justification: 'La cystéine est de configuration R, le soufre étant prioritaire dans les règles de Cahn-Ingold-Prelog.',
        },
        {
          lettre: 'D',
          texte: 'La chaîne latérale détermine les propriétés physico-chimiques du résidu.',
          vraie: true,
          justification: "Exact : c’est le seul élément variable entre deux acides aminés alpha.",
        },
        {
          lettre: 'E',
          texte: 'La proline possède une fonction amine primaire libre.',
          vraie: false,
          justification: "Faux : son azote est engagé dans un cycle pyrrolidine, c’est une amine secondaire (imino-acide).",
        },
      ],
      correction:
        "Réponses exactes : B et D. Retenir les deux exceptions structurales majeures : la glycine (achirale) et la proline (amine secondaire cyclique).",
      difficulte: 2,
    },
    {
      id: 'bioch-acides-amines-qcm-02',
      enonce: "Concernant les propriétés acido-basiques, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: "À son pHi, un acide aminé neutre n’est porteur d’aucune charge.",
          vraie: false,
          justification: 'Il est globalement neutre mais reste un zwitterion : une charge positive et une charge négative coexistent.',
        },
        {
          lettre: 'B',
          texte: 'Le pHi de la glycine vaut environ 6.',
          vraie: true,
          justification: 'pHi = (2,3 + 9,6) / 2, soit approximativement 6.',
        },
        {
          lettre: 'C',
          texte: "Le pHi de l’acide glutamique est supérieur à 7.",
          vraie: false,
          justification: 'Sa chaîne latérale acide abaisse le pHi aux environs de 3,2.',
        },
        {
          lettre: 'D',
          texte: 'À pH 7,4, la chaîne latérale de la lysine est majoritairement protonée.',
          vraie: true,
          justification: 'Son pKa vaut 10,5 : à un pH bien inférieur au pKa, la forme acide protonée -NH3+ domine.',
        },
        {
          lettre: 'E',
          texte: 'À pH égal au pKa, la forme basique représente 90 % des espèces.',
          vraie: false,
          justification: "À pH = pKa, le rapport vaut 1 : les deux formes sont équimolaires, soit 50 % chacune.",
        },
      ],
      correction: 'Réponses exactes : B et D. Un acide aminé acide a un pHi bas, un acide aminé basique un pHi élevé.',
      difficulte: 2,
    },
    {
      id: 'bioch-acides-amines-qcm-03',
      enonce: 'Concernant la liaison peptidique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Sa formation libère une molécule d’eau.',
          vraie: true,
          justification: "Exact : il s’agit d’une réaction de condensation.",
        },
        {
          lettre: 'B',
          texte: 'Elle autorise une libre rotation autour de la liaison C-N.',
          vraie: false,
          justification: 'Le caractère partiel de double liaison rend le plan peptidique rigide.',
        },
        {
          lettre: 'C',
          texte: 'La configuration cis est la plus fréquente.',
          vraie: false,
          justification: "C’est la configuration trans qui domine largement ; la proline fait exception.",
        },
        {
          lettre: 'D',
          texte: 'Six atomes sont coplanaires dans le plan peptidique.',
          vraie: true,
          justification: 'Les deux carbones alpha, le carbone du carbonyle, son oxygène, l’azote et son hydrogène.',
        },
        {
          lettre: 'E',
          texte: 'Un peptide se lit de l’extrémité C-terminale vers l’extrémité N-terminale.',
          vraie: false,
          justification: 'La lecture se fait de N-terminal vers C-terminal, dans le sens de la synthèse ribosomique.',
        },
      ],
      correction: 'Réponses exactes : A et D. La rigidité du plan peptidique est la base du diagramme de Ramachandran.',
      difficulte: 2,
    },
    {
      id: 'bioch-acides-amines-qcm-04',
      enonce: 'Parmi les acides aminés suivants, lesquels sont indispensables chez l’adulte sain ?',
      propositions: [
        { lettre: 'A', texte: 'Leucine', vraie: true, justification: 'Acide aminé ramifié indispensable.' },
        { lettre: 'B', texte: 'Arginine', vraie: false, justification: 'Elle est seulement conditionnellement indispensable, notamment chez le nouveau-né.' },
        { lettre: 'C', texte: 'Histidine', vraie: true, justification: 'Elle figure bien parmi les neuf acides aminés indispensables.' },
        { lettre: 'D', texte: 'Tyrosine', vraie: false, justification: 'Elle est synthétisée à partir de la phénylalanine, sauf en cas de phénylcétonurie.' },
        { lettre: 'E', texte: 'Tryptophane', vraie: true, justification: 'Indispensable, et précurseur de la sérotonine et du nicotinamide.' },
      ],
      correction: 'Réponses exactes : A, C et E. Distinguer indispensables et conditionnellement indispensables.',
      difficulte: 1,
    },
    {
      id: 'bioch-acides-amines-qcm-05',
      enonce: 'Concernant les dérivés des acides aminés, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le GABA dérive du glutamate.', vraie: true, justification: 'Par décarboxylation du glutamate sous l’action de la glutamate décarboxylase.' },
        { lettre: 'B', texte: 'La sérotonine dérive de la tyrosine.', vraie: false, justification: 'Elle dérive du tryptophane ; la tyrosine donne les catécholamines.' },
        { lettre: 'C', texte: 'L’histamine dérive de l’histidine.', vraie: true, justification: 'Par décarboxylation de l’histidine.' },
        { lettre: 'D', texte: 'Le monoxyde d’azote dérive de l’arginine.', vraie: true, justification: 'La NO synthase produit du NO et de la citrulline à partir de l’arginine.' },
        { lettre: 'E', texte: 'La mélanine dérive de la méthionine.', vraie: false, justification: 'La mélanine dérive de la tyrosine, via la tyrosinase.' },
      ],
      correction: 'Réponses exactes : A, C et D. Les décarboxylations d’acides aminés génèrent de nombreux médiateurs.',
      difficulte: 2,
    },
    {
      id: 'bioch-acides-amines-qcm-06',
      enonce: 'Concernant la classification des acides aminés, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La tyrosine est un acide aminé aromatique polaire.', vraie: true, justification: 'Son noyau phénol lui confère une polarité et la capacité de former des liaisons hydrogène.' },
        { lettre: 'B', texte: 'L’asparagine est un acide aminé acide.', vraie: false, justification: "C’est l’amide de l’aspartate : elle est polaire neutre." },
        { lettre: 'C', texte: 'La méthionine contient un atome de soufre.', vraie: true, justification: 'Elle porte un groupement thioéther.' },
        { lettre: 'D', texte: 'La sérine peut être phosphorylée.', vraie: true, justification: 'Sa fonction alcool primaire est un site de phosphorylation par les kinases, comme la thréonine et la tyrosine.' },
        { lettre: 'E', texte: 'La valine possède une chaîne latérale chargée à pH 7,4.', vraie: false, justification: 'Sa chaîne latérale est un groupement isopropyle apolaire, non ionisable.' },
      ],
      correction: 'Réponses exactes : A, C et D. Les trois acides aminés phosphorylables sont la sérine, la thréonine et la tyrosine.',
      difficulte: 2,
    },
  ],
};
