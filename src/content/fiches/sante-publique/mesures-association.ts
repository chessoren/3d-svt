import type { Fiche } from '../../types';

export const ficheMesuresAssociation: Fiche = {
  id: 'sante-publique-mesures-association',
  ue: 'sante-publique',
  titre: "Mesures d’association et causalité",
  sousTitre: "Risque relatif, odds ratio, risque attribuable et critères de causalité de Bradford Hill",
  chapitre: 'Méthodes épidémiologiques',
  ordre: 5,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'risque relatif',
    'odds ratio',
    'risque attribuable',
    'fraction attribuable',
    'nombre de sujets à traiter',
    'critères de Bradford Hill',
  ],
  objectifs: [
    'Calculer et interpréter un risque relatif.',
    "Calculer et interpréter un odds ratio et connaître ses conditions d’approximation du risque relatif.",
    "Différencier risque attribuable et fraction attribuable, chez les exposés et dans la population.",
    'Définir et interpréter le nombre de sujets à traiter (NST).',
    'Connaître les critères de causalité de Bradford Hill et leurs limites.',
  ],
  sections: [
    {
      id: 'risque-relatif',
      titre: 'Le risque relatif',
      blocs: [
        {
          type: 'definition',
          terme: 'Risque relatif (RR)',
          definition:
            "Rapport entre l’incidence de la maladie chez les sujets exposés au facteur étudié et l’incidence de la maladie chez les sujets non exposés. Il mesure la force de l’association entre exposition et maladie, calculable directement dans une étude de cohorte.",
        },
        {
          type: 'formule',
          expression: 'RR = Incidence chez les exposés / Incidence chez les non-exposés',
          legende: "Un RR strictement supérieur à 1 traduit une exposition délétère (facteur de risque) ; un RR strictement inférieur à 1 traduit une exposition protectrice.",
        },
        {
          type: 'tableau',
          titre: 'Interprétation du risque relatif',
          colonnes: ['Valeur du RR', 'Interprétation'],
          lignes: [
            ['RR = 1', "Absence d’association entre exposition et maladie"],
            ['RR > 1', "Exposition associée à un risque accru de maladie (facteur de risque)"],
            ['RR < 1', "Exposition associée à un risque diminué de maladie (facteur protecteur)"],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: "L’intervalle de confiance est indispensable",
          texte:
            "Un RR ne doit jamais être interprété sans son intervalle de confiance. Si l’intervalle de confiance à 95 % du RR inclut la valeur 1, l’association observée n’est pas statistiquement significative au seuil retenu.",
        },
      ],
    },
    {
      id: 'odds-ratio',
      titre: "L’odds ratio",
      blocs: [
        {
          type: 'definition',
          terme: 'Odds (ou cote)',
          definition:
            "Rapport entre la probabilité qu’un événement survienne et la probabilité qu’il ne survienne pas. Dans une étude cas-témoins, on calcule l’odds d’exposition chez les cas et chez les témoins.",
        },
        {
          type: 'definition',
          terme: 'Odds ratio (OR)',
          definition:
            "Rapport entre l’odds d’exposition chez les cas et l’odds d’exposition chez les témoins. C’est la mesure d’association calculable dans une étude cas-témoins, où l’incidence n’est pas directement mesurable.",
        },
        {
          type: 'formule',
          expression: 'OR = (a × d) / (b × c)',
          legende: "Avec a = cas exposés, b = témoins exposés, c = cas non exposés, d = témoins non exposés, dans un tableau de contingence 2x2.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: "L’odds ratio approxime le risque relatif si la maladie est rare",
          texte:
            "Lorsque la fréquence de la maladie étudiée est faible dans la population (maladie rare, classiquement moins de quelques pour cent), l’odds ratio calculé dans une étude cas-témoins constitue une bonne approximation du risque relatif qui aurait été obtenu par une étude de cohorte. Cette approximation se dégrade lorsque la maladie devient fréquente.",
        },
        {
          type: 'tableau',
          titre: 'Tableau de contingence classique',
          colonnes: ['', 'Malades (cas)', 'Non-malades (témoins)'],
          lignes: [
            ['Exposés', 'a', 'b'],
            ['Non exposés', 'c', 'd'],
          ],
        },
      ],
    },
    {
      id: 'risque-attribuable',
      titre: 'Risque attribuable et fraction attribuable',
      blocs: [
        {
          type: 'definition',
          terme: 'Risque attribuable (RA)',
          definition:
            "Différence entre l’incidence de la maladie chez les exposés et l’incidence chez les non-exposés. Il mesure l’excès absolu de risque directement imputable à l’exposition chez les sujets exposés.",
        },
        {
          type: 'formule',
          expression: 'RA = Incidence chez les exposés − Incidence chez les non-exposés',
          legende: "Exprimé dans la même unité que l’incidence ; il mesure un excès de cas, à la différence du RR qui mesure un rapport.",
        },
        {
          type: 'definition',
          terme: 'Fraction attribuable chez les exposés (FAe)',
          definition:
            "Proportion des cas survenus chez les sujets exposés qui sont attribuables à l’exposition, c’est-à-dire qui ne seraient pas survenus en l’absence de cette exposition.",
        },
        {
          type: 'formule',
          expression: 'FAe = (RR − 1) / RR = RA / Incidence chez les exposés',
          legende: "Exprimée en proportion ou en pourcentage des cas chez les exposés.",
        },
        {
          type: 'definition',
          terme: 'Fraction attribuable dans la population (FAp)',
          definition:
            "Proportion des cas survenus dans la population générale (exposés et non exposés confondus) qui sont attribuables à l’exposition. Elle dépend à la fois de la force de l’association (RR) et de la fréquence de l’exposition dans la population.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre mesures relatives et mesures absolues',
          texte:
            "Le RR et l’OR sont des mesures relatives : elles quantifient la force de l’association mais ne renseignent pas sur l’impact en santé publique. Le RA et les fractions attribuables sont des mesures absolues ou de population : elles renseignent sur le nombre de cas ou la proportion de cas évitables si l’exposition disparaissait.",
        },
      ],
    },
    {
      id: 'nst',
      titre: 'Le nombre de sujets à traiter',
      blocs: [
        {
          type: 'definition',
          terme: 'Nombre de sujets à traiter (NST)',
          definition:
            "Nombre de patients qu’il faut traiter par une intervention donnée, pendant une durée donnée, pour éviter la survenue d’un événement défavorable supplémentaire par rapport à l’absence de traitement (ou au traitement de référence).",
        },
        {
          type: 'formule',
          expression: 'NST = 1 / Réduction absolue du risque',
          legende: "La réduction absolue du risque (RAR) est la différence entre l’incidence de l’événement dans le groupe non traité et l’incidence dans le groupe traité.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Interprétation pratique du NST',
          texte:
            "Plus le NST est faible, plus l’intervention est efficace en pratique clinique : un NST proche de 1 signifie qu’il suffit de traiter très peu de patients pour éviter un événement, tandis qu’un NST très élevé traduit un bénéfice absolu modeste, même si le risque relatif associé est important.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: "L’importance de distinguer effet relatif et effet absolu",
          texte:
            "Une réduction relative du risque de 50 % peut correspondre à des situations cliniques très différentes selon le risque de base : elle peut traduire une baisse d’incidence de 20 pour 1 000 à 10 pour 1 000 (NST élevé) ou de 2 pour 10 000 à 1 pour 10 000 (NST considérablement plus élevé). Le NST doit donc toujours être interprété en tenant compte du risque de base.",
        },
      ],
    },
    {
      id: 'causalite',
      titre: 'Les critères de causalité de Bradford Hill',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une association statistique, même forte et significative, ne suffit pas à établir un lien de causalité. Sir Austin Bradford Hill a proposé en 1965 un ensemble de critères, à considérer globalement et non isolément, pour orienter le jugement sur la nature causale d’une association observée.",
        },
        {
          type: 'tableau',
          titre: 'Principaux critères de Bradford Hill',
          colonnes: ['Critère', 'Signification'],
          lignes: [
            ['Force de l’association', "Plus le RR ou l’OR est élevé (loin de 1), plus l’hypothèse causale est renforcée"],
            ['Relation dose-effet', "Le risque de maladie augmente avec l’intensité ou la durée de l’exposition"],
            ['Chronologie (temporalité)', "L’exposition doit précéder la survenue de la maladie : critère indispensable, non suffisant"],
            ['Cohérence externe', "L’association est retrouvée dans plusieurs études, populations et méthodes différentes"],
            ['Plausibilité biologique', "L’association est compatible avec les connaissances biologiques et physiopathologiques actuelles"],
            ['Réversibilité (preuve expérimentale)', "La suppression de l’exposition s’accompagne d’une diminution du risque de maladie"],
            ['Spécificité', "Une exposition donnée est associée à une maladie donnée, sans expliquer d’autres pathologies (critère le moins robuste)"],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le seul critère strictement indispensable : la temporalité',
          texte:
            "Parmi tous les critères de Bradford Hill, seule la chronologie (l’exposition doit précéder la maladie) est une condition nécessaire à la causalité. Tous les autres critères renforcent la plausibilité d’un lien causal sans être ni nécessaires ni suffisants pris isolément.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: "Association n’est pas causalité",
          texte:
            "Une association statistique peut résulter du hasard, d’un biais méthodologique, d’un facteur de confusion ou d’une causalité inverse (la maladie précédant en réalité l’exposition apparente). Les critères de Bradford Hill aident à écarter ces explications alternatives avant de conclure à une relation causale.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le risque relatif compare deux incidences par un rapport ; un RR supérieur à 1 traduit un facteur de risque, inférieur à 1 un facteur protecteur.",
    "L’odds ratio est la mesure d’association calculable dans une étude cas-témoins ; il approxime le risque relatif lorsque la maladie est rare.",
    "Le risque attribuable est une mesure absolue, exprimée comme une différence d’incidence, et non comme un rapport.",
    "La fraction attribuable chez les exposés mesure la proportion de cas, parmi les exposés, imputable à l’exposition.",
    "La fraction attribuable dans la population dépend à la fois de la force de l’association et de la fréquence de l’exposition.",
    "Le nombre de sujets à traiter est l’inverse de la réduction absolue du risque et doit toujours être interprété en tenant compte du risque de base.",
    "Les critères de Bradford Hill orientent le jugement causal mais ne le démontrent jamais isolément, sauf la temporalité qui est une condition nécessaire.",
    "Un intervalle de confiance incluant la valeur 1 signifie une absence de significativité statistique de l’association.",
  ],
  erreursFrequentes: [
    "Confondre risque relatif (mesure relative, un rapport) et risque attribuable (mesure absolue, une différence).",
    "Croire que l’odds ratio est toujours une bonne approximation du risque relatif, y compris pour une maladie fréquente.",
    "Interpréter un RR ou un OR sans tenir compte de son intervalle de confiance.",
    "Considérer qu’un NST faible traduit toujours un effet relatif fort, alors qu’il dépend aussi du risque de base dans la population.",
    "Croire que la vérification de tous les critères de Bradford Hill est nécessaire pour conclure à une causalité.",
    "Affirmer qu’une association statistique significative démontre à elle seule une relation de causalité.",
  ],
  mnemotechniques: [
    {
      moyen: 'RR = Rapport, RA = différence Absolue',
      explication: "Le risque relatif est un Rapport (division), le risque attribuable une différence (soustraction), donc une mesure Absolue.",
    },
    {
      moyen: 'OR ≈ RR si maladie Rare',
      explication: "L’odds ratio n’approxime bien le risque relatif que lorsque la fréquence de la maladie étudiée est faible.",
    },
    {
      moyen: 'Bradford Hill : seule la Temporalité est obligatoire',
      explication: "Parmi tous les critères de Bradford Hill, seule la chronologie exposition-maladie est une condition nécessaire à la causalité.",
    },
  ],
  sources: [
    'Bouyer, Hémon, Cordier et al., Épidémiologie : principes et méthodes quantitatives, Lavoisier',
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    "Hill AB, The Environment and Disease: Association or Causation?, Proceedings of the Royal Society of Medicine, 1965",
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-mesures-association-fc-01',
      recto: 'Définir le risque relatif.',
      verso: "Le rapport entre l’incidence de la maladie chez les exposés et l’incidence chez les non-exposés.",
      type: 'definition',
      tags: ['risque relatif'],
    },
    {
      id: 'sante-publique-mesures-association-fc-02',
      recto: 'Que signifie un risque relatif égal à 1 ?',
      verso: "L’absence d’association entre l’exposition étudiée et la maladie.",
      type: 'definition',
      tags: ['risque relatif'],
    },
    {
      id: 'sante-publique-mesures-association-fc-03',
      recto: "Dans quel type d’étude calcule-t-on directement un odds ratio ?",
      verso: "Dans une étude cas-témoins, où l’incidence n’est pas directement mesurable.",
      type: 'definition',
      tags: ['odds ratio'],
    },
    {
      id: 'sante-publique-mesures-association-fc-04',
      recto: 'Sous quelle condition l’odds ratio approxime-t-il bien le risque relatif ?',
      verso: "Lorsque la maladie étudiée est rare dans la population.",
      type: 'mecanisme',
      tags: ['odds ratio', 'risque relatif'],
    },
    {
      id: 'sante-publique-mesures-association-fc-05',
      recto: 'Définir le risque attribuable.',
      verso: "La différence entre l’incidence chez les exposés et l’incidence chez les non-exposés : un excès absolu de risque.",
      type: 'definition',
      tags: ['risque attribuable'],
    },
    {
      id: 'sante-publique-mesures-association-fc-06',
      recto: 'Que mesure la fraction attribuable chez les exposés ?',
      verso: "La proportion de cas, parmi les sujets exposés, qui sont attribuables à l’exposition étudiée.",
      type: 'definition',
      tags: ['fraction attribuable'],
    },
    {
      id: 'sante-publique-mesures-association-fc-07',
      recto: 'De quoi dépend la fraction attribuable dans la population ?',
      verso: "De la force de l’association (RR) et de la fréquence de l’exposition dans la population.",
      type: 'mecanisme',
      tags: ['fraction attribuable'],
    },
    {
      id: 'sante-publique-mesures-association-fc-08',
      recto: 'Comment calcule-t-on le nombre de sujets à traiter (NST) ?',
      verso: "NST = 1 / réduction absolue du risque, cette dernière étant la différence d’incidence entre groupe non traité et groupe traité.",
      type: 'formule',
      tags: ['NST'],
    },
    {
      id: 'sante-publique-mesures-association-fc-09',
      recto: 'Un NST faible traduit-il toujours un effet relatif important ?',
      verso: "Non : il dépend aussi du risque de base dans la population, pas seulement de l’effet relatif du traitement.",
      type: 'mecanisme',
      tags: ['NST'],
    },
    {
      id: 'sante-publique-mesures-association-fc-10',
      recto: 'Quel est le seul critère de Bradford Hill strictement indispensable à la causalité ?',
      verso: "La chronologie (temporalité) : l’exposition doit précéder la survenue de la maladie.",
      type: 'definition',
      tags: ['Bradford Hill', 'causalité'],
    },
    {
      id: 'sante-publique-mesures-association-fc-11',
      recto: "Qu’est-ce que la relation dose-effet dans les critères de Bradford Hill ?",
      verso: "Le fait que le risque de maladie augmente avec l’intensité ou la durée de l’exposition, ce qui renforce l’hypothèse causale.",
      type: 'definition',
      tags: ['Bradford Hill'],
    },
    {
      id: 'sante-publique-mesures-association-fc-12',
      recto: 'Une association statistique significative démontre-t-elle une causalité ?',
      verso: "Non : elle peut résulter du hasard, d’un biais, d’un facteur de confusion ou d’une causalité inverse.",
      type: 'mecanisme',
      tags: ['causalité'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-mesures-association-qcm-01',
      enonce: 'Concernant le risque relatif, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un RR de 3 signifie que le risque de maladie est multiplié par 3 chez les exposés par rapport aux non-exposés.', vraie: true, justification: "Exact, c’est l’interprétation directe du rapport des incidences." },
        { lettre: 'B', texte: 'Un RR de 0,5 traduit un facteur de risque.', vraie: false, justification: "Faux : un RR inférieur à 1 traduit au contraire un facteur protecteur." },
        { lettre: 'C', texte: 'Le RR se calcule directement dans une étude de cohorte.', vraie: true, justification: "Exact, car les incidences y sont directement mesurables dans chaque groupe." },
        { lettre: 'D', texte: 'Un RR peut être interprété sans tenir compte de son intervalle de confiance.', vraie: false, justification: "Faux : l’intervalle de confiance est indispensable pour juger de la significativité de l’association." },
        { lettre: 'E', texte: 'Un RR de 1 traduit une absence d’association statistique entre exposition et maladie.', vraie: true, justification: 'Exact, les deux incidences comparées sont alors égales.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-mesures-association-qcm-02',
      enonce: "Concernant l’odds ratio, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Il se calcule directement dans une étude de cohorte.", vraie: false, justification: "Faux : il se calcule dans une étude cas-témoins ; en cohorte, on calcule directement un RR." },
        { lettre: 'B', texte: "Il est une bonne approximation du RR lorsque la maladie est fréquente dans la population.", vraie: false, justification: "Faux : c’est l’inverse, l’approximation n’est valable que pour une maladie rare." },
        { lettre: 'C', texte: "Il se calcule à partir d’un tableau de contingence 2x2.", vraie: true, justification: "Exact, à partir des effectifs de cas et de témoins exposés et non exposés." },
        { lettre: 'D', texte: 'Il compare l’odds d’exposition chez les cas à l’odds d’exposition chez les témoins.', vraie: true, justification: "Exact, c’est sa définition." },
        { lettre: 'E', texte: 'Un OR supérieur à 1 traduit une association positive entre exposition et maladie.', vraie: true, justification: 'Exact, comme pour le RR, un OR supérieur à 1 traduit un facteur de risque.' },
      ],
      correction: 'Réponses exactes : C, D et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-mesures-association-qcm-03',
      enonce: 'Concernant le risque attribuable et les fractions attribuables, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le risque attribuable est une différence entre deux incidences.', vraie: true, justification: "Exact, contrairement au RR qui est un rapport." },
        { lettre: 'B', texte: 'La fraction attribuable chez les exposés se calcule uniquement chez les non-exposés.', vraie: false, justification: "Faux : elle s’applique aux cas survenus chez les sujets exposés." },
        { lettre: 'C', texte: 'La fraction attribuable dans la population dépend de la fréquence de l’exposition dans la population.', vraie: true, justification: "Exact, c’est une différence majeure avec la fraction attribuable chez les exposés." },
        { lettre: 'D', texte: 'Le risque attribuable et le risque relatif mesurent exactement la même chose.', vraie: false, justification: "Faux : le RR est une mesure relative, le RA une mesure absolue de l’excès de risque." },
        { lettre: 'E', texte: "Les fractions attribuables sont utiles pour estimer l’impact en santé publique d’une suppression de l’exposition.", vraie: true, justification: "Exact, c’est justement leur intérêt en santé publique." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 3,
    },
    {
      id: 'sante-publique-mesures-association-qcm-04',
      enonce: 'Concernant le nombre de sujets à traiter (NST), quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il est égal à l’inverse de la réduction absolue du risque.', vraie: true, justification: "Exact, c’est sa formule de calcul." },
        { lettre: 'B', texte: 'Un NST faible traduit un bénéfice clinique absolu important.', vraie: true, justification: "Exact, moins il faut traiter de patients pour éviter un événement, plus le bénéfice absolu est élevé." },
        { lettre: 'C', texte: 'Le NST est indépendant du risque de base dans la population.', vraie: false, justification: "Faux : à réduction relative égale, le NST varie fortement selon le risque de base." },
        { lettre: 'D', texte: 'Un NST peut être calculé sans connaître l’incidence de l’événement dans les deux groupes comparés.', vraie: false, justification: "Faux : il nécessite de connaître la réduction absolue du risque, donc les deux incidences." },
        { lettre: 'E', texte: 'Le NST est un indicateur d’effet absolu, complémentaire du risque relatif.', vraie: true, justification: "Exact, il complète utilement l’interprétation d’un effet relatif." },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-mesures-association-qcm-05',
      enonce: 'Concernant les critères de Bradford Hill, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La chronologie est une condition nécessaire à la causalité.', vraie: true, justification: "Exact, l’exposition doit précéder la maladie pour pouvoir en être la cause." },
        { lettre: 'B', texte: 'La vérification de tous les critères est nécessaire pour conclure à une causalité.', vraie: false, justification: "Faux : les critères s’apprécient globalement, aucun n’étant à lui seul suffisant, hormis la temporalité qui est nécessaire." },
        { lettre: 'C', texte: 'La force de l’association renforce l’hypothèse causale.', vraie: true, justification: "Exact, plus le RR ou l’OR s’éloigne de 1, plus l’hypothèse causale est plausible." },
        { lettre: 'D', texte: 'La relation dose-effet est un argument en faveur de la causalité.', vraie: true, justification: "Exact, une augmentation du risque avec l’intensité de l’exposition renforce la plausibilité causale." },
        { lettre: 'E', texte: 'La spécificité est le critère le plus robuste de tous.', vraie: false, justification: "Faux : c’est au contraire l’un des critères les moins robustes, une exposition pouvant causer plusieurs maladies différentes." },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 3,
    },
    {
      id: 'sante-publique-mesures-association-qcm-06',
      enonce: 'Concernant la notion de causalité en épidémiologie, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une association statistique significative démontre systématiquement une causalité.', vraie: false, justification: "Faux : elle peut résulter du hasard, d’un biais, d’un facteur de confusion ou d’une causalité inverse." },
        { lettre: 'B', texte: 'Un facteur de confusion peut créer une association statistique fallacieuse.', vraie: true, justification: "Exact, c’est l’une des explications alternatives à écarter avant de conclure à une causalité." },
        { lettre: 'C', texte: 'La causalité inverse signifie que la maladie précède en réalité l’exposition apparente.', vraie: true, justification: 'Exact, c’est une explication alternative classique à une association observée.' },
        { lettre: 'D', texte: 'Les critères de Bradford Hill remplacent totalement le jugement scientifique.', vraie: false, justification: "Faux : ils orientent le jugement, sans se substituer à une analyse critique globale." },
        { lettre: 'E', texte: 'Le hasard peut expliquer une association observée dans une étude, en particulier avec de petits effectifs.', vraie: true, justification: "Exact, c’est pourquoi l’intervalle de confiance et la significativité statistique sont examinés." },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
  ],
};
