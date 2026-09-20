import type { Fiche } from '../../types';

export const ficheMutations: Fiche = {
  id: 'ue1-mutations',
  ue: 'ue1',
  titre: 'Mutations et polymorphismes',
  sousTitre: 'Mutations ponctuelles, faux-sens, non-sens, décalage du cadre de lecture, mutations chromosomiques, agents mutagènes',
  chapitre: 'Génétique',
  ordre: 10,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'mutation ponctuelle',
    'transition',
    'transversion',
    'faux-sens',
    'non-sens',
    'décalage du cadre de lecture',
    'aneuploïdie',
    'translocation',
  ],
  objectifs: [
    'Définir une mutation ponctuelle et distinguer transition et transversion.',
    'Distinguer mutations silencieuses, faux-sens et non-sens.',
    'Expliquer les conséquences d’une mutation par décalage du cadre de lecture.',
    'Classer les principales mutations chromosomiques de nombre.',
    'Classer les principales mutations chromosomiques de structure.',
    'Citer des agents mutagènes physiques, chimiques et biologiques et leurs conséquences.',
  ],
  sections: [
    {
      id: 'mutations-ponctuelles',
      titre: 'Mutations ponctuelles : transitions et transversions',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une mutation ponctuelle est le remplacement d’une seule paire de bases par une autre au sein de la séquence d’ADN. Selon la nature des bases échangées, on distingue deux grandes catégories de substitutions.',
        },
        {
          type: 'definition',
          terme: 'Transition',
          definition:
            'Substitution d’une base purique par une autre base purique, ou d’une base pyrimidique par une autre base pyrimidique, par exemple le remplacement d’une adénine par une guanine, ou d’une cytosine par une thymine.',
        },
        {
          type: 'definition',
          terme: 'Transversion',
          definition:
            'Substitution d’une base purique par une base pyrimidique, ou inversement, par exemple le remplacement d’une adénine par une cytosine.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Fréquence relative',
          texte:
            'Les transitions sont observées en pratique plus fréquemment que les transversions, bien que les transversions soient statistiquement deux fois plus nombreuses parmi les substitutions possibles, en raison des mécanismes chimiques à l’origine de ces erreurs, comme la désamination.',
        },
      ],
    },
    {
      id: 'consequences-proteine',
      titre: 'Conséquences d’une substitution sur la protéine',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Lorsqu’une mutation ponctuelle touche une région codante, ses conséquences sur la protéine dépendent de son effet sur le codon concerné.',
        },
        {
          type: 'tableau',
          titre: 'Types de mutations selon leur conséquence sur le codon',
          colonnes: ['Type', 'Effet sur le codon', 'Conséquence sur la protéine'],
          lignes: [
            ['Mutation silencieuse', 'Le nouveau codon code pour le même acide aminé', 'Aucun changement de la séquence protéique, grâce à la dégénérescence du code'],
            ['Mutation faux-sens', 'Le nouveau codon code pour un acide aminé différent', 'Substitution d’un acide aminé par un autre, de conséquence variable selon sa nature'],
            ['Mutation non-sens', 'Le nouveau codon devient un codon stop', 'Arrêt prématuré de la traduction, protéine tronquée'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Toutes les mutations faux-sens ne sont pas équivalentes',
          texte:
            'Une mutation faux-sens peut être sans conséquence fonctionnelle notable si le nouvel acide aminé a des propriétés physico-chimiques proches de l’acide aminé initial, ou au contraire gravement délétère si elle touche un site catalytique ou modifie fortement le repliement de la protéine.',
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Une mutation ponctuelle peut aussi toucher les régions non codantes',
          texte:
            'Une substitution touchant un promoteur, un site d’épissage ou une région régulatrice non traduite peut modifier le niveau d’expression du gène ou sa maturation, sans changer directement la séquence protéique.',
        },
      ],
    },
    {
      id: 'decalage-cadre-lecture',
      titre: 'Mutations par décalage du cadre de lecture',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une insertion ou une délétion d’un nombre de nucléotides non multiple de trois modifie le cadre de lecture de tous les codons situés en aval du point de mutation.',
        },
        {
          type: 'liste',
          items: [
            'Une insertion ou une délétion d’un ou deux nucléotides décale le cadre de lecture en aval.',
            'Une insertion ou une délétion de trois nucléotides, ou d’un multiple de trois, préserve le cadre de lecture, en ajoutant ou en retirant un ou plusieurs acides aminés entiers.',
            'Le décalage du cadre de lecture aboutit le plus souvent à une séquence protéique totalement différente en aval de la mutation, et fréquemment à l’apparition prématurée d’un codon stop.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Conséquence fonctionnelle habituelle',
          texte:
            'Les mutations par décalage du cadre de lecture sont en général plus délétères que les substitutions ponctuelles, car elles affectent la totalité de la séquence protéique en aval du point de mutation, aboutissant le plus souvent à une protéine non fonctionnelle.',
        },
      ],
    },
    {
      id: 'mutations-chromosomiques-nombre',
      titre: 'Mutations chromosomiques de nombre',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les anomalies chromosomiques de nombre modifient le nombre total de chromosomes d’une cellule, par rapport au nombre normal de quarante-six.',
        },
        {
          type: 'tableau',
          titre: 'Principales anomalies de nombre',
          colonnes: ['Anomalie', 'Définition', 'Exemple'],
          lignes: [
            ['Trisomie', 'Présence de trois exemplaires d’un chromosome au lieu de deux', 'Trisomie 21, la plus fréquente des trisomies viables'],
            ['Monosomie', 'Présence d’un seul exemplaire d’un chromosome au lieu de deux', 'Monosomie X, syndrome de Turner'],
            ['Polyploïdie', 'Présence d’un ou plusieurs jeux chromosomiques haploïdes complets supplémentaires', 'Triploïdie, généralement létale précocement chez l’être humain'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Mécanisme principal',
          texte:
            'La plupart des aneuploïdies résultent d’une non-disjonction chromosomique, c’est-à-dire d’une séparation anormale des chromosomes homologues ou des chromatides sœurs lors de la méiose ou de la mitose.',
        },
      ],
    },
    {
      id: 'mutations-chromosomiques-structure',
      titre: 'Mutations chromosomiques de structure',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les anomalies chromosomiques de structure modifient l’organisation d’un ou plusieurs chromosomes, sans nécessairement changer le nombre total de chromosomes.',
        },
        {
          type: 'tableau',
          titre: 'Principales anomalies de structure',
          colonnes: ['Anomalie', 'Définition'],
          lignes: [
            ['Délétion', 'Perte d’un segment chromosomique'],
            ['Duplication', 'Présence en double d’un segment chromosomique'],
            ['Inversion', 'Retournement à cent quatre-vingts degrés d’un segment chromosomique au sein du même chromosome'],
            ['Translocation', 'Échange de segments entre deux chromosomes non homologues, réciproque ou impliquant des chromosomes acrocentriques'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Anomalie équilibrée ou déséquilibrée',
          texte:
            'Une translocation ou une inversion peuvent être équilibrées, sans perte ni gain de matériel génétique, et donc sans conséquence clinique chez le porteur, tout en exposant sa descendance à un risque accru d’anomalie déséquilibrée. Une délétion ou une duplication sont, par définition, toujours déséquilibrées.',
        },
      ],
    },
    {
      id: 'agents-mutagenes',
      titre: 'Agents mutagènes et conséquences',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Les agents mutagènes augmentent la fréquence des mutations en endommageant directement l’ADN ou en perturbant sa réplication.',
        },
        {
          type: 'tableau',
          titre: 'Classification des agents mutagènes',
          colonnes: ['Catégorie', 'Exemples', 'Mécanisme'],
          lignes: [
            ['Agents physiques', 'Rayonnements ultraviolets, rayonnements ionisants', 'Formation de dimères de pyrimidines, cassures de l’ADN'],
            ['Agents chimiques', 'Agents alkylants, agents intercalants', 'Modification covalente des bases, insertion entre les paires de bases perturbant la réplication'],
            ['Agents biologiques', 'Éléments transposables, certains virus', 'Insertion dans le génome pouvant interrompre un gène ou modifier son expression'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Mutation germinale et mutation somatique',
          texte:
            'Une mutation survenant dans une cellule germinale peut être transmise à la descendance et se retrouver dans toutes les cellules de l’individu issu de cette cellule. Une mutation somatique, survenant dans une cellule non germinale, n’est pas transmissible à la descendance, mais peut contribuer, si elle touche un gène impliqué dans le contrôle du cycle cellulaire, au développement d’un cancer.',
        },
      ],
    },
  ],
  pointsCles: [
    'Une transition échange deux bases de même catégorie, purique ou pyrimidique ; une transversion échange une purine et une pyrimidine.',
    'Une mutation silencieuse ne change pas l’acide aminé, une mutation faux-sens le change, une mutation non-sens crée un codon stop prématuré.',
    'Une insertion ou une délétion non multiple de trois décale le cadre de lecture en aval du point de mutation.',
    'Les anomalies de nombre, comme les trisomies et les monosomies, résultent le plus souvent d’une non-disjonction chromosomique.',
    'Les anomalies de structure comprennent délétion, duplication, inversion et translocation, équilibrées ou déséquilibrées.',
    'Les agents mutagènes peuvent être physiques, chimiques ou biologiques ; seules les mutations germinales sont transmissibles à la descendance.',
  ],
  erreursFrequentes: [
    'Confondre transition et transversion : la transition échange des bases de même catégorie, la transversion des bases de catégories différentes.',
    'Croire qu’une mutation faux-sens est toujours délétère : ses conséquences dépendent de la similitude entre l’acide aminé initial et le nouvel acide aminé, et de sa position dans la protéine.',
    'Penser qu’une insertion de trois nucléotides décale le cadre de lecture : elle ajoute un codon entier sans décaler la lecture en aval.',
    'Confondre translocation équilibrée, sans perte de matériel génétique, et translocation déséquilibrée, avec perte ou gain de matériel.',
    'Oublier qu’une mutation somatique n’est pas transmissible à la descendance, contrairement à une mutation germinale.',
  ],
  mnemotechniques: [
    {
      moyen: 'Transition : même famille',
      explication: 'La transition reste dans la même famille de bases, purine vers purine ou pyrimidine vers pyrimidine ; la transversion change de famille.',
    },
    {
      moyen: 'Non-sens, stop net',
      explication: 'La mutation non-sens crée un codon stop, arrêtant net la traduction et tronquant la protéine.',
    },
    {
      moyen: 'Multiple de trois, cadre préservé',
      explication: 'Seule une insertion ou une délétion multiple de trois nucléotides préserve le cadre de lecture en aval de la mutation.',
    },
  ],
  sources: [
    'Nussbaum, Thompson et Thompson, Génétique médicale, édition française',
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Lehninger, Principes de biochimie, 8e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-mutations-fc-01',
      recto: 'Qu’est-ce qu’une transition ?',
      verso: 'La substitution d’une base par une autre de la même catégorie, purine vers purine ou pyrimidine vers pyrimidine.',
      type: 'definition',
      tags: ['transition'],
    },
    {
      id: 'ue1-mutations-fc-02',
      recto: 'Qu’est-ce qu’une transversion ?',
      verso: 'La substitution d’une base purique par une base pyrimidique, ou inversement.',
      type: 'definition',
      tags: ['transversion'],
    },
    {
      id: 'ue1-mutations-fc-03',
      recto: 'Qu’est-ce qu’une mutation silencieuse ?',
      verso: 'Une mutation ponctuelle dont le nouveau codon code pour le même acide aminé, sans changement de la protéine, grâce à la dégénérescence du code génétique.',
      type: 'definition',
      tags: ['mutation silencieuse'],
    },
    {
      id: 'ue1-mutations-fc-04',
      recto: 'Qu’est-ce qu’une mutation faux-sens ?',
      verso: 'Une mutation ponctuelle qui change l’acide aminé codé par le codon touché.',
      type: 'definition',
      tags: ['faux-sens'],
    },
    {
      id: 'ue1-mutations-fc-05',
      recto: 'Qu’est-ce qu’une mutation non-sens ?',
      verso: 'Une mutation ponctuelle qui transforme un codon sens en codon stop, entraînant l’arrêt prématuré de la traduction.',
      type: 'definition',
      tags: ['non-sens'],
    },
    {
      id: 'ue1-mutations-fc-06',
      recto: 'Quel type d’insertion ou de délétion décale le cadre de lecture ?',
      verso: 'Une insertion ou une délétion d’un nombre de nucléotides non multiple de trois.',
      type: 'mecanisme',
      tags: ['cadre de lecture'],
    },
    {
      id: 'ue1-mutations-fc-07',
      recto: 'Qu’est-ce qu’une trisomie ?',
      verso: 'La présence de trois exemplaires d’un chromosome donné au lieu de deux.',
      type: 'definition',
      tags: ['trisomie'],
    },
    {
      id: 'ue1-mutations-fc-08',
      recto: 'Quel mécanisme est le plus souvent à l’origine d’une aneuploïdie ?',
      verso: 'La non-disjonction chromosomique lors de la méiose ou de la mitose.',
      type: 'mecanisme',
      tags: ['aneuploïdie'],
    },
    {
      id: 'ue1-mutations-fc-09',
      recto: 'Définir une translocation.',
      verso: 'Un échange de segments chromosomiques entre deux chromosomes non homologues.',
      type: 'definition',
      tags: ['translocation'],
    },
    {
      id: 'ue1-mutations-fc-10',
      recto: 'Quelle différence entre translocation équilibrée et déséquilibrée ?',
      verso: 'La translocation équilibrée ne s’accompagne d’aucune perte ni gain de matériel génétique ; la déséquilibrée en comporte.',
      type: 'classification',
      tags: ['translocation'],
    },
    {
      id: 'ue1-mutations-fc-11',
      recto: 'Citer un exemple d’agent mutagène physique et son mécanisme d’action.',
      verso: 'Le rayonnement ultraviolet, qui induit la formation de dimères de pyrimidines.',
      type: 'mecanisme',
      tags: ['agent mutagène'],
    },
    {
      id: 'ue1-mutations-fc-12',
      recto: 'Quelle différence entre mutation germinale et mutation somatique ?',
      verso: 'La mutation germinale est transmissible à la descendance, la mutation somatique ne l’est pas mais peut contribuer au développement d’un cancer.',
      type: 'classification',
      tags: ['mutation germinale', 'mutation somatique'],
    },
  ],
  qcm: [
    {
      id: 'ue1-mutations-qcm-01',
      enonce: 'Concernant les transitions et les transversions, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le remplacement d’une adénine par une guanine est une transition.',
          vraie: true,
          justification: 'Exact : ce sont deux bases puriques.',
        },
        {
          lettre: 'B',
          texte: 'Le remplacement d’une cytosine par une adénine est une transition.',
          vraie: false,
          justification: 'Faux : la cytosine est pyrimidique et l’adénine est purique, il s’agit donc d’une transversion.',
        },
        {
          lettre: 'C',
          texte: 'Les transversions échangent une purine et une pyrimidine.',
          vraie: true,
          justification: 'Par définition, une transversion remplace une base purique par une base pyrimidique ou inversement, contrairement à la transition qui échange deux bases de même catégorie chimique.',
        },
        {
          lettre: 'D',
          texte: 'Il existe statistiquement deux fois plus de transversions possibles que de transitions possibles.',
          vraie: true,
          justification: 'Exact, en raison du nombre de combinaisons possibles entre catégories différentes de bases.',
        },
        {
          lettre: 'E',
          texte: 'Les transitions et les transversions concernent exclusivement les régions codantes de l’ADN.',
          vraie: false,
          justification: 'Faux : elles peuvent survenir dans n’importe quelle région du génome, codante ou non.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Bien retenir la définition précise fondée sur la catégorie chimique des bases échangées.',
      difficulte: 2,
    },
    {
      id: 'ue1-mutations-qcm-02',
      enonce: 'Concernant les conséquences d’une substitution sur la protéine, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une mutation silencieuse modifie l’acide aminé codé.',
          vraie: false,
          justification: 'Faux : par définition, une mutation silencieuse ne modifie pas l’acide aminé codé.',
        },
        {
          lettre: 'B',
          texte: 'Une mutation faux-sens peut avoir des conséquences très variables selon l’acide aminé substitué.',
          vraie: true,
          justification: 'Selon que l’acide aminé substitué conserve des propriétés physico-chimiques proches ou très différentes de l’original, la conséquence peut aller d’un effet neutre à une altération majeure de la fonction protéique.',
        },
        {
          lettre: 'C',
          texte: 'Une mutation non-sens entraîne la production d’une protéine tronquée.',
          vraie: true,
          justification: 'Exact, par arrêt prématuré de la traduction.',
        },
        {
          lettre: 'D',
          texte: 'La dégénérescence du code génétique explique l’existence des mutations silencieuses.',
          vraie: true,
          justification: 'Plusieurs codons synonymes pouvant coder le même acide aminé, une substitution qui transforme un codon en un autre codon synonyme ne modifie pas la protéine produite.',
        },
        {
          lettre: 'E',
          texte: 'Une mutation ponctuelle ne peut jamais toucher une région régulatrice non codante.',
          vraie: false,
          justification: 'Faux : une mutation ponctuelle peut toucher un promoteur ou une région régulatrice, modifiant le niveau d’expression du gène.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. Bien distinguer les trois catégories, silencieuse, faux-sens et non-sens.',
      difficulte: 2,
    },
    {
      id: 'ue1-mutations-qcm-03',
      enonce: 'Concernant les mutations par décalage du cadre de lecture, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une insertion de trois nucléotides décale le cadre de lecture.',
          vraie: false,
          justification: 'Faux : une insertion multiple de trois préserve le cadre de lecture.',
        },
        {
          lettre: 'B',
          texte: 'Une délétion d’un seul nucléotide décale le cadre de lecture.',
          vraie: true,
          justification: 'La perte d’un nucléotide, non multiple de trois, décale le découpage en triplets de tout le message situé en aval, modifiant la totalité de la séquence protéique qui en résulte.',
        },
        {
          lettre: 'C',
          texte: 'Ces mutations sont en général plus délétères qu’une simple substitution ponctuelle.',
          vraie: true,
          justification: 'Exact, car elles affectent toute la séquence protéique en aval.',
        },
        {
          lettre: 'D',
          texte: 'Elles aboutissent fréquemment à l’apparition prématurée d’un codon stop.',
          vraie: true,
          justification: 'Le décalage du cadre de lecture génère une nouvelle succession de triplets aléatoires, parmi lesquels un codon stop apparaît fréquemment bien avant la fin normale du message.',
        },
        {
          lettre: 'E',
          texte: 'Elles ne concernent que les insertions, jamais les délétions.',
          vraie: false,
          justification: 'Faux : elles concernent aussi bien les insertions que les délétions non multiples de trois.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. Le critère déterminant est le caractère multiple ou non de trois du nombre de nucléotides concernés.',
      difficulte: 2,
    },
    {
      id: 'ue1-mutations-qcm-04',
      enonce: 'Concernant les mutations chromosomiques de nombre, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La trisomie 21 est la trisomie autosomique viable la plus fréquente.',
          vraie: true,
          justification: 'La petite taille du chromosome 21 limite le déséquilibre génique qu’entraîne sa copie surnuméraire, ce qui en fait la trisomie autosomique compatible avec la vie la plus fréquente à la naissance.',
        },
        {
          lettre: 'B',
          texte: 'La monosomie X est associée au syndrome de Turner.',
          vraie: true,
          justification: 'L’absence d’un chromosome X, donnant un caryotype 45,X, définit le syndrome de Turner, associé notamment à une petite taille et une dysgénésie gonadique.',
        },
        {
          lettre: 'C',
          texte: 'La non-disjonction chromosomique est le principal mécanisme des aneuploïdies.',
          vraie: true,
          justification: 'La non-séparation correcte des chromosomes homologues ou des chromatides sœurs lors de la méiose ou de la mitose produit des gamètes ou des cellules avec un chromosome en trop ou en moins, à l’origine des aneuploïdies.',
        },
        {
          lettre: 'D',
          texte: 'La polyploïdie correspond à la perte d’un seul chromosome.',
          vraie: false,
          justification: 'Faux : la polyploïdie correspond à la présence d’un ou plusieurs jeux chromosomiques haploïdes complets supplémentaires.',
        },
        {
          lettre: 'E',
          texte: 'Une aneuploïdie ne peut résulter que d’une anomalie survenue pendant la méiose.',
          vraie: false,
          justification: 'Faux : une non-disjonction peut également survenir lors d’une mitose, notamment après la fécondation.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Bien distinguer aneuploïdie et polyploïdie.',
      difficulte: 2,
    },
    {
      id: 'ue1-mutations-qcm-05',
      enonce: 'Concernant les mutations chromosomiques de structure, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une délétion correspond à la perte d’un segment chromosomique.',
          vraie: true,
          justification: 'C’est la définition même de la délétion chromosomique, toujours déséquilibrée puisqu’un segment entier de matériel génétique est manquant.',
        },
        {
          lettre: 'B',
          texte: 'Une inversion correspond à un échange entre deux chromosomes différents.',
          vraie: false,
          justification: 'Faux : une inversion se produit au sein du même chromosome ; c’est la translocation qui échange du matériel entre deux chromosomes.',
        },
        {
          lettre: 'C',
          texte: 'Une translocation équilibrée peut être sans conséquence clinique chez son porteur.',
          vraie: true,
          justification: 'Exact, bien qu’elle expose sa descendance à un risque accru d’anomalie déséquilibrée.',
        },
        {
          lettre: 'D',
          texte: 'Une duplication est toujours équilibrée.',
          vraie: false,
          justification: 'Faux : une duplication est par définition toujours déséquilibrée, puisqu’un segment est en excès.',
        },
        {
          lettre: 'E',
          texte: 'Une inversion peut être équilibrée.',
          vraie: true,
          justification: 'Exact, si aucun matériel génétique n’est perdu ni gagné.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir que délétion et duplication sont toujours déséquilibrées, contrairement à l’inversion et à la translocation.',
      difficulte: 2,
    },
    {
      id: 'ue1-mutations-qcm-06',
      enonce: 'Concernant les agents mutagènes et leurs conséquences, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les rayonnements ultraviolets induisent des dimères de pyrimidines.',
          vraie: true,
          justification: 'Les UV créent une liaison covalente aberrante entre deux pyrimidines adjacentes, le plus souvent deux thymines, formant un dimère qui déforme la double hélice et bloque la réplication ou la transcription.',
        },
        {
          lettre: 'B',
          texte: 'Les agents alkylants modifient de façon covalente les bases de l’ADN.',
          vraie: true,
          justification: 'Ces agents ajoutent de façon covalente un groupement alkyle sur une base de l’ADN, ce qui perturbe son appariement normal et favorise l’incorporation d’une base incorrecte lors de la réplication.',
        },
        {
          lettre: 'C',
          texte: 'Une mutation somatique est transmissible à la descendance.',
          vraie: false,
          justification: 'Faux : seule une mutation germinale est transmissible à la descendance.',
        },
        {
          lettre: 'D',
          texte: 'Une mutation somatique peut contribuer au développement d’un cancer.',
          vraie: true,
          justification: 'Exact, notamment si elle touche un gène du contrôle du cycle cellulaire.',
        },
        {
          lettre: 'E',
          texte: 'Les éléments transposables sont des agents mutagènes biologiques.',
          vraie: true,
          justification: 'Exact, en s’insérant dans le génome, ils peuvent interrompre un gène.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Bien distinguer la transmissibilité des mutations germinales de celle, absente, des mutations somatiques.',
      difficulte: 2,
    },
  ],
};
