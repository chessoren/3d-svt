import type { Fiche } from '../../types';

export const ficheEliminationParametres: Fiche = {
  id: 'ue6-elimination-parametres',
  ue: 'ue6',
  titre: 'Élimination et paramètres pharmacocinétiques',
  sousTitre: 'Excrétion rénale et biliaire, cycle entérohépatique, clairance, demi-vie, état d’équilibre, ordres de cinétique',
  chapitre: 'Pharmacocinétique',
  ordre: 6,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'excrétion rénale',
    'excrétion biliaire',
    'cycle entérohépatique',
    'clairance',
    'demi-vie',
    'état d’équilibre',
    'cinétique d’ordre 1',
    'cinétique d’ordre 0',
  ],
  objectifs: [
    'Décrire les mécanismes d’excrétion rénale et biliaire des médicaments.',
    'Expliquer le principe du cycle entérohépatique.',
    'Définir la clairance et la demi-vie d’élimination.',
    'Expliquer la notion d’état d’équilibre et le temps nécessaire pour l’atteindre.',
    'Distinguer cinétique d’ordre 1 et cinétique d’ordre 0.',
    'Appliquer ces notions à l’adaptation posologique.',
  ],
  sections: [
    {
      id: 'excretion-renale',
      titre: 'Excrétion rénale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le rein est la voie d’élimination majeure de la plupart des médicaments et de leurs métabolites hydrosolubles. L’excrétion rénale résulte de trois processus qui se combinent au niveau du néphron : la filtration glomérulaire, la sécrétion tubulaire active et la réabsorption tubulaire passive.",
        },
        {
          type: 'tableau',
          titre: 'Les trois processus rénaux',
          colonnes: ['Processus', 'Localisation', 'Principe'],
          lignes: [
            ['Filtration glomérulaire', 'Glomérule', 'Passage passif de la fraction libre du médicament à travers la membrane glomérulaire, selon le débit de filtration glomérulaire'],
            ['Sécrétion tubulaire active', 'Tubule proximal', 'Transport actif saturable, via des transporteurs spécifiques d’anions ou de cations organiques'],
            ['Réabsorption tubulaire passive', 'Tubule distal principalement', 'Diffusion passive du médicament non ionisé depuis la lumière tubulaire vers le sang, selon le pH urinaire'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'pH urinaire et réabsorption',
          texte:
            "Comme au niveau digestif, seule la forme non ionisée d’un acide ou d’une base faible est réabsorbée par diffusion passive au niveau tubulaire. L’alcalinisation des urines favorise donc l’élimination des acides faibles, en les maintenant sous forme ionisée non réabsorbable, tandis que l’acidification des urines favorise l’élimination des bases faibles selon le même principe.",
        },
        {
          type: 'liste',
          items: [
            'Seule la fraction libre du médicament est filtrée au niveau glomérulaire ; la fraction liée aux protéines plasmatiques n’est pas filtrée.',
            'La sécrétion tubulaire active peut concerner à la fois la fraction libre et, en partie, la fraction liée, car elle dissocie l’équilibre de fixation protéique au fur et à mesure de la sécrétion.',
            'Une insuffisance rénale réduit la clairance des médicaments à élimination rénale prédominante, imposant souvent une adaptation posologique.',
          ],
        },
      ],
    },
    {
      id: 'excretion-biliaire',
      titre: 'Excrétion biliaire et cycle entérohépatique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Certains médicaments ou leurs métabolites, notamment les conjugués glucuronides de grande taille moléculaire, sont sécrétés activement par les hépatocytes dans la bile, puis déversés dans l’intestin grêle où ils peuvent être éliminés dans les selles ou réabsorbés.",
        },
        {
          type: 'definition',
          terme: 'Cycle entérohépatique',
          definition:
            "Phénomène par lequel un médicament ou son métabolite, excrété dans la bile puis déversé dans l’intestin, est réabsorbé au niveau intestinal et regagne la circulation générale via la veine porte, prolongeant ainsi la présence du médicament dans l’organisme.",
        },
        {
          type: 'liste',
          items: [
            'La réabsorption intestinale d’un conjugué glucuronide peut être favorisée par l’hydrolyse de ce conjugué par les bêta-glucuronidases de la flore intestinale, libérant la molécule mère réabsorbable.',
            'Le cycle entérohépatique prolonge la demi-vie apparente du médicament concerné et peut donner un profil de concentration plasmatique présentant plusieurs pics successifs.',
            'Une antibiothérapie modifiant la flore intestinale peut réduire le cycle entérohépatique de certains médicaments, en diminuant l’activité des bêta-glucuronidases bactériennes.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Conséquence clinique du cycle entérohépatique',
          texte:
            "Certains contraceptifs oraux estroprogestatifs subissent un cycle entérohépatique ; une antibiothérapie concomitante altérant la flore intestinale peut réduire ce cycle et diminuer l’efficacité contraceptive, ce qui justifie une vigilance et des mesures contraceptives complémentaires dans certaines situations.",
        },
      ],
    },
    {
      id: 'clairance',
      titre: 'Clairance',
      blocs: [
        {
          type: 'definition',
          terme: 'Clairance',
          definition:
            "Volume théorique de plasma totalement épuré du médicament par unité de temps, par l’ensemble des organes d’élimination. Elle s’exprime en volume par unité de temps, par exemple en millilitres par minute, et reflète l’efficacité globale de l’élimination.",
        },
        {
          type: 'formule',
          expression: 'Clairance totale = Clairance rénale + Clairance hépatique + Clairance des autres voies',
          legende:
            "La clairance totale d’un médicament est la somme des clairances de chaque organe ou voie d’élimination contribuant à son épuration plasmatique.",
        },
        {
          type: 'formule',
          expression: 'Clairance = (Vd × 0,693) / T1/2',
          legende:
            "Relation reliant la clairance, le volume de distribution et la demi-vie d’élimination. Elle montre que la demi-vie dépend à la fois de la clairance et du volume de distribution, et n’est donc pas un paramètre physiologique indépendant.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Clairance et fonction d’organe',
          texte:
            "La clairance d’un médicament à élimination hépatique prédominante peut être diminuée en cas d’insuffisance hépatique, et la clairance d’un médicament à élimination rénale prédominante peut être diminuée en cas d’insuffisance rénale, imposant dans les deux cas une réévaluation de la posologie.",
        },
      ],
    },
    {
      id: 'demi-vie-equilibre',
      titre: 'Demi-vie et état d’équilibre',
      blocs: [
        {
          type: 'definition',
          terme: 'Demi-vie d’élimination (T1/2)',
          definition:
            "Temps nécessaire pour que la concentration plasmatique d’un médicament diminue de moitié, dans le cadre d’une cinétique d’ordre 1. Elle dépend à la fois de la clairance et du volume de distribution du médicament.",
        },
        {
          type: 'definition',
          terme: 'État d’équilibre (steady state)',
          definition:
            "État atteint lors d’une administration répétée à intervalles réguliers, où la quantité de médicament éliminée entre deux prises devient égale à la quantité apportée par chaque prise, stabilisant les concentrations plasmatiques moyennes autour d’un plateau.",
        },
        {
          type: 'tableau',
          titre: 'Temps nécessaire pour atteindre l’état d’équilibre',
          colonnes: ['Nombre de demi-vies écoulées', 'Pourcentage de l’état d’équilibre atteint'],
          lignes: [
            ['1 demi-vie', 'Environ 50 %'],
            ['2 demi-vies', 'Environ 75 %'],
            ['3 demi-vies', 'Environ 87,5 %'],
            ['4 demi-vies', 'Environ 93,75 %'],
            ['5 demi-vies', 'Environ 97 %, considéré en pratique comme l’état d’équilibre'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Règle des cinq demi-vies',
          texte:
            "En pratique, l’état d’équilibre est considéré comme atteint après environ cinq demi-vies d’administration répétée, indépendamment de la dose ou de l’intervalle entre les prises. Une dose de charge peut être utilisée pour atteindre plus rapidement la concentration d’équilibre lorsque cela est cliniquement nécessaire.",
        },
        {
          type: 'liste',
          items: [
            'À l’arrêt d’un traitement, l’élimination complète du médicament suit la même règle : environ cinq demi-vies sont nécessaires pour que la concentration plasmatique devienne négligeable.',
            'La demi-vie détermine également l’intervalle entre les prises pour maintenir des concentrations stables dans la marge thérapeutique.',
            'Une insuffisance rénale ou hépatique, en réduisant la clairance, allonge en général la demi-vie d’élimination.',
          ],
        },
      ],
    },
    {
      id: 'ordres-cinetique',
      titre: 'Ordres de cinétique',
      blocs: [
        {
          type: 'definition',
          terme: 'Cinétique d’ordre 1',
          definition:
            "Cinétique où la vitesse d’élimination est proportionnelle à la concentration plasmatique du médicament : une fraction constante, et non une quantité constante, du médicament est éliminée par unité de temps. C’est le mode d’élimination de la grande majorité des médicaments aux doses thérapeutiques usuelles.",
        },
        {
          type: 'definition',
          terme: 'Cinétique d’ordre 0',
          definition:
            "Cinétique où la vitesse d’élimination est constante, indépendante de la concentration plasmatique, car les systèmes enzymatiques ou de transport responsables de l’élimination sont saturés. Une quantité constante, et non une fraction constante, est éliminée par unité de temps.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des deux ordres de cinétique',
          colonnes: ['Caractéristique', 'Cinétique d’ordre 1', 'Cinétique d’ordre 0'],
          lignes: [
            ['Vitesse d’élimination', 'Proportionnelle à la concentration', 'Constante, indépendante de la concentration'],
            ['Notion de demi-vie constante', 'Oui, la demi-vie est constante quelle que soit la concentration', 'Non, la demi-vie apparente varie avec la concentration'],
            ['Situation typique', 'Doses thérapeutiques usuelles de la plupart des médicaments', 'Surdosage ou saturation des voies métaboliques ou de transport'],
            ['Exemple classique', 'La grande majorité des médicaments', 'Éthanol, phénytoïne à forte dose, certains médicaments à marge thérapeutique étroite en surdosage'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Passage d’un ordre à l’autre',
          texte:
            "Un médicament peut suivre une cinétique d’ordre 1 aux doses thérapeutiques usuelles et basculer vers une cinétique d’ordre 0 en cas de surdosage ou d’augmentation de dose, lorsque les systèmes d’élimination deviennent saturés. Ce phénomène expose à un risque d’accumulation et de toxicité disproportionné par rapport à l’augmentation de la dose administrée.",
        },
      ],
    },
    {
      id: 'adaptation-posologique',
      titre: 'Adaptation posologique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les paramètres pharmacocinétiques d’élimination, notamment la clairance et la demi-vie, sont utilisés en pratique clinique pour adapter la posologie d’un médicament à la situation physiopathologique du patient, en particulier en cas d’insuffisance d’organe.",
        },
        {
          type: 'liste',
          items: [
            'En cas d’insuffisance rénale, la posologie d’un médicament à élimination rénale prédominante peut être réduite en diminuant la dose, en espaçant les prises, ou les deux.',
            'La dose de charge, administrée en début de traitement, permet d’atteindre rapidement une concentration efficace sans attendre l’état d’équilibre, utile pour les médicaments à demi-vie longue.',
            'La dose d’entretien, administrée ensuite à intervalles réguliers, vise à maintenir la concentration plasmatique à l’état d’équilibre dans la marge thérapeutique.',
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Formule de la dose de charge',
          texte:
            "La dose de charge se calcule approximativement par le produit du volume de distribution et de la concentration plasmatique cible : Dose de charge = Vd × Concentration cible. Elle ne dépend pas de la clairance, contrairement à la dose d’entretien qui en dépend directement.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’excrétion rénale résulte de la filtration glomérulaire, de la sécrétion tubulaire active et de la réabsorption tubulaire passive.",
    "Le pH urinaire influence la réabsorption tubulaire des acides et des bases faibles selon la théorie du pH-partition.",
    "Le cycle entérohépatique prolonge la présence d’un médicament dans l’organisme par réabsorption intestinale après excrétion biliaire.",
    "La clairance totale est la somme des clairances de chaque organe d’élimination.",
    "La demi-vie dépend à la fois de la clairance et du volume de distribution.",
    "L’état d’équilibre est atteint en pratique après environ cinq demi-vies d’administration répétée.",
    "La cinétique d’ordre 1 élimine une fraction constante par unité de temps, la cinétique d’ordre 0 élimine une quantité constante.",
  ],
  erreursFrequentes: [
    "Croire que seule la filtration glomérulaire intervient dans l’excrétion rénale, en oubliant la sécrétion et la réabsorption tubulaires.",
    "Penser que le temps pour atteindre l’état d’équilibre dépend de la dose administrée, alors qu’il ne dépend que de la demi-vie.",
    "Confondre demi-vie constante d’une cinétique d’ordre 1 et demi-vie variable d’une cinétique d’ordre 0.",
    "Oublier qu’un médicament peut passer d’une cinétique d’ordre 1 à une cinétique d’ordre 0 en cas de saturation des voies d’élimination.",
    "Croire que la dose de charge dépend de la clairance, alors qu’elle dépend du volume de distribution.",
    "Négliger l’impact du cycle entérohépatique sur l’efficacité de certains traitements, comme la contraception orale.",
  ],
  mnemotechniques: [
    {
      moyen: 'FSR : Filtration, Sécrétion, Réabsorption',
      explication:
        'Les trois processus rénaux impliqués dans l’excrétion d’un médicament, dans l’ordre où ils s’appliquent le long du néphron.',
    },
    {
      moyen: 'Cinq demi-vies pour tout',
      explication:
        'Environ cinq demi-vies sont nécessaires pour atteindre l’état d’équilibre à l’instauration, comme pour éliminer un médicament à l’arrêt du traitement.',
    },
    {
      moyen: 'Ordre 0 = Zéro variation de vitesse',
      explication:
        'Dans la cinétique d’ordre 0, la vitesse d’élimination reste fixe (une quantité constante par unité de temps), contrairement à l’ordre 1 où c’est une fraction constante qui est éliminée.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-elimination-parametres-fc-01',
      recto: 'Quels sont les trois processus de l’excrétion rénale ?',
      verso: 'La filtration glomérulaire, la sécrétion tubulaire active et la réabsorption tubulaire passive.',
      type: 'classification',
      tags: ['excrétion rénale'],
    },
    {
      id: 'ue6-elimination-parametres-fc-02',
      recto: 'Quelle fraction du médicament est filtrée au niveau glomérulaire ?',
      verso: 'Seule la fraction libre, non liée aux protéines plasmatiques.',
      type: 'mecanisme',
      tags: ['filtration glomérulaire'],
    },
    {
      id: 'ue6-elimination-parametres-fc-03',
      recto: 'Comment l’alcalinisation des urines influence-t-elle l’élimination d’un acide faible ?',
      verso: 'Elle favorise son élimination, en maintenant l’acide sous forme ionisée non réabsorbable.',
      type: 'mecanisme',
      tags: ['pH urinaire'],
    },
    {
      id: 'ue6-elimination-parametres-fc-04',
      recto: 'Qu’est-ce que le cycle entérohépatique ?',
      verso: 'La réabsorption intestinale d’un médicament ou de son métabolite excrété dans la bile, qui regagne ainsi la circulation générale.',
      type: 'definition',
      tags: ['cycle entérohépatique'],
    },
    {
      id: 'ue6-elimination-parametres-fc-05',
      recto: 'Comment se calcule la clairance totale d’un médicament ?',
      verso: 'C’est la somme des clairances de chaque organe ou voie d’élimination : Clairance totale = Clairance rénale + Clairance hépatique + autres.',
      type: 'formule',
      tags: ['clairance'],
    },
    {
      id: 'ue6-elimination-parametres-fc-06',
      recto: 'De quels deux paramètres dépend la demi-vie d’élimination ?',
      verso: 'La clairance et le volume de distribution.',
      type: 'formule',
      tags: ['demi-vie'],
    },
    {
      id: 'ue6-elimination-parametres-fc-07',
      recto: 'Après combien de demi-vies l’état d’équilibre est-il considéré atteint en pratique ?',
      verso: 'Environ cinq demi-vies.',
      type: 'chiffre',
      tags: ['état d’équilibre'],
    },
    {
      id: 'ue6-elimination-parametres-fc-08',
      recto: 'Quel pourcentage de l’état d’équilibre est atteint après une demi-vie ?',
      verso: 'Environ 50 %.',
      type: 'chiffre',
      tags: ['état d’équilibre'],
    },
    {
      id: 'ue6-elimination-parametres-fc-09',
      recto: 'Qu’est-ce qui caractérise une cinétique d’ordre 1 ?',
      verso: 'Une fraction constante du médicament est éliminée par unité de temps, la vitesse étant proportionnelle à la concentration.',
      type: 'definition',
      tags: ['cinétique d’ordre 1'],
    },
    {
      id: 'ue6-elimination-parametres-fc-10',
      recto: 'Qu’est-ce qui caractérise une cinétique d’ordre 0 ?',
      verso: 'Une quantité constante du médicament est éliminée par unité de temps, indépendamment de la concentration, par saturation des voies d’élimination.',
      type: 'definition',
      tags: ['cinétique d’ordre 0'],
    },
    {
      id: 'ue6-elimination-parametres-fc-11',
      recto: 'Citer un médicament pouvant suivre une cinétique d’ordre 0 à forte dose.',
      verso: 'La phénytoïne, ou l’éthanol.',
      type: 'clinique',
      tags: ['cinétique d’ordre 0'],
    },
    {
      id: 'ue6-elimination-parametres-fc-12',
      recto: 'Comment se calcule approximativement une dose de charge ?',
      verso: 'Dose de charge = Volume de distribution × Concentration plasmatique cible.',
      type: 'formule',
      tags: ['dose de charge'],
    },
  ],
  qcm: [
    {
      id: 'ue6-elimination-parametres-qcm-01',
      enonce: 'Concernant l’excrétion rénale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Seule la fraction libre du médicament est filtrée au glomérule.', vraie: true, justification: 'La fraction liée aux protéines plasmatiques n’est pas filtrée en raison de sa taille effective.' },
        { lettre: 'B', texte: 'La sécrétion tubulaire active est un mécanisme saturable.', vraie: true, justification: 'Elle repose sur des transporteurs spécifiques en nombre limité, donc saturables à forte concentration.' },
        { lettre: 'C', texte: 'L’alcalinisation des urines favorise la réabsorption des acides faibles.', vraie: false, justification: 'Elle favorise au contraire leur élimination, en les maintenant sous forme ionisée non réabsorbable.' },
        { lettre: 'D', texte: 'Une insuffisance rénale peut réduire la clairance d’un médicament à élimination rénale prédominante.', vraie: true, justification: 'La diminution du débit de filtration glomérulaire et des autres fonctions rénales réduit cette clairance.' },
        { lettre: 'E', texte: 'La réabsorption tubulaire passive concerne uniquement la forme ionisée du médicament.', vraie: false, justification: 'C’est au contraire la forme non ionisée qui est réabsorbée par diffusion passive.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-elimination-parametres-qcm-02',
      enonce: 'Concernant le cycle entérohépatique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il implique une excrétion biliaire suivie d’une réabsorption intestinale.', vraie: true, justification: 'C’est le principe même du cycle entérohépatique.' },
        { lettre: 'B', texte: 'Il raccourcit systématiquement la demi-vie du médicament concerné.', vraie: false, justification: 'Il prolonge au contraire la présence du médicament dans l’organisme, allongeant sa demi-vie apparente.' },
        { lettre: 'C', texte: 'Les bêta-glucuronidases de la flore intestinale peuvent favoriser la réabsorption d’un conjugué glucuronide.', vraie: true, justification: 'Elles hydrolysent le conjugué, libérant la molécule mère réabsorbable.' },
        { lettre: 'D', texte: 'Une antibiothérapie peut réduire le cycle entérohépatique de certains contraceptifs oraux.', vraie: true, justification: 'En altérant la flore intestinale, elle diminue l’activité des bêta-glucuronidases bactériennes.' },
        { lettre: 'E', texte: 'Le cycle entérohépatique ne peut jamais donner plusieurs pics de concentration plasmatique.', vraie: false, justification: 'Il peut au contraire produire un profil avec plusieurs pics successifs de concentration plasmatique.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue6-elimination-parametres-qcm-03',
      enonce: 'Concernant la clairance et la demi-vie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La clairance totale est la somme des clairances de chaque organe d’élimination.', vraie: true, justification: 'C’est la définition de la clairance totale, additionnant les contributions de chaque voie.' },
        { lettre: 'B', texte: 'La demi-vie ne dépend que de la clairance, jamais du volume de distribution.', vraie: false, justification: 'Elle dépend conjointement de la clairance et du volume de distribution.' },
        { lettre: 'C', texte: 'Une insuffisance hépatique peut allonger la demi-vie d’un médicament à élimination hépatique prédominante.', vraie: true, justification: 'La réduction de la clairance hépatique allonge en général la demi-vie du médicament.' },
        { lettre: 'D', texte: 'La clairance s’exprime en unité de concentration.', vraie: false, justification: 'Elle s’exprime en volume par unité de temps, comme le millilitre par minute.' },
        { lettre: 'E', texte: 'Un même médicament peut avoir une clairance rénale et une clairance hépatique simultanément.', vraie: true, justification: 'La clairance totale peut résulter de la contribution de plusieurs voies d’élimination.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-elimination-parametres-qcm-04',
      enonce: 'Concernant l’état d’équilibre, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’état d’équilibre est atteint en pratique après environ cinq demi-vies.', vraie: true, justification: 'C’est la règle classique utilisée en pharmacocinétique clinique.' },
        { lettre: 'B', texte: 'Le temps pour atteindre l’état d’équilibre dépend de la dose administrée.', vraie: false, justification: 'Il ne dépend que de la demi-vie du médicament, pas de la dose ni de l’intervalle entre les prises.' },
        { lettre: 'C', texte: 'Une dose de charge permet d’atteindre plus rapidement la concentration d’équilibre.', vraie: true, justification: 'Elle apporte d’emblée une quantité proche de celle attendue à l’état d’équilibre.' },
        { lettre: 'D', texte: 'Après une demi-vie, environ 87,5 % de l’état d’équilibre est atteint.', vraie: false, justification: 'Après une demi-vie, environ 50 % de l’état d’équilibre est atteint ; 87,5 % correspond à trois demi-vies.' },
        { lettre: 'E', texte: 'L’élimination complète d’un médicament à l’arrêt du traitement suit également la règle des cinq demi-vies.', vraie: true, justification: 'Le même raisonnement exponentiel s’applique à la décroissance de la concentration plasmatique.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-elimination-parametres-qcm-05',
      enonce: 'Concernant les ordres de cinétique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Dans une cinétique d’ordre 1, une quantité constante de médicament est éliminée par unité de temps.', vraie: false, justification: 'C’est une fraction constante, et non une quantité constante, qui est éliminée dans une cinétique d’ordre 1.' },
        { lettre: 'B', texte: 'Dans une cinétique d’ordre 0, la vitesse d’élimination est constante, indépendante de la concentration.', vraie: true, justification: 'C’est la définition même de la cinétique d’ordre 0, liée à la saturation des systèmes d’élimination.' },
        { lettre: 'C', texte: 'Un médicament peut passer d’une cinétique d’ordre 1 à une cinétique d’ordre 0 en cas de surdosage.', vraie: true, justification: 'La saturation des voies d’élimination à forte concentration peut faire basculer la cinétique.' },
        { lettre: 'D', texte: 'La demi-vie est constante dans une cinétique d’ordre 0.', vraie: false, justification: 'Dans une cinétique d’ordre 0, la demi-vie apparente varie avec la concentration, contrairement à l’ordre 1.' },
        { lettre: 'E', texte: 'La grande majorité des médicaments suivent une cinétique d’ordre 1 aux doses thérapeutiques usuelles.', vraie: true, justification: 'C’est le mode d’élimination le plus fréquent en pratique clinique courante.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 3,
    },
    {
      id: 'ue6-elimination-parametres-qcm-06',
      enonce: 'Concernant l’adaptation posologique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'En cas d’insuffisance rénale, la posologie peut être adaptée en réduisant la dose ou en espaçant les prises.', vraie: true, justification: 'Ces deux stratégies permettent de tenir compte de la réduction de la clairance rénale.' },
        { lettre: 'B', texte: 'La dose de charge dépend principalement du volume de distribution et de la concentration cible.', vraie: true, justification: 'Elle se calcule approximativement par Dose de charge = Vd × Concentration cible.' },
        { lettre: 'C', texte: 'La dose d’entretien ne dépend pas de la clairance du médicament.', vraie: false, justification: 'La dose d’entretien dépend directement de la clairance, pour maintenir l’état d’équilibre souhaité.' },
        { lettre: 'D', texte: 'Une dose de charge est particulièrement utile pour les médicaments à demi-vie longue.', vraie: true, justification: 'Elle permet d’éviter d’attendre plusieurs demi-vies pour atteindre une concentration efficace.' },
        { lettre: 'E', texte: 'L’adaptation posologique ne concerne jamais l’insuffisance hépatique.', vraie: false, justification: 'Elle concerne également les médicaments à élimination hépatique prédominante en cas d’insuffisance hépatique.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
