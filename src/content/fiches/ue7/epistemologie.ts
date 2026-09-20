import type { Fiche } from '../../types';

export const ficheEpistemologie: Fiche = {
  id: 'ue7-epistemologie',
  ue: 'ue7',
  titre: 'Épistémologie et philosophie de la médecine',
  sousTitre:
    'Santé, maladie, normal et pathologique : les concepts fondamentaux de la pensée médicale',
  chapitre: 'Histoire et épistémologie',
  ordre: 2,
  duree: 22,
  difficulte: 2,
  motsCles: [
    'santé',
    'maladie',
    'normal',
    'pathologique',
    'modèle biomédical',
    'modèle biopsychosocial',
    'médecine fondée sur les preuves',
    'causalité',
  ],
  objectifs: [
    'Distinguer les principales définitions de la santé et de la maladie.',
    'Expliquer la distinction entre normal et pathologique selon Canguilhem.',
    'Comparer le modèle biomédical et le modèle biopsychosocial de la maladie.',
    'Définir la notion de preuve scientifique en médecine et les niveaux de preuve.',
    'Distinguer corrélation et causalité, et connaître les principaux critères de causalité en épidémiologie.',
  ],
  sections: [
    {
      id: 'definir-sante-maladie',
      titre: 'Définir la santé et la maladie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Définir la santé n’est pas une simple formalité : selon la définition retenue, on médicalise plus ou moins largement l’existence humaine. La définition la plus citée est celle de l’Organisation mondiale de la santé (OMS), proposée en 1946, qui présente la santé non comme la seule absence de maladie mais comme un état de complet bien-être physique, mental et social.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Les limites de la définition de l’OMS',
          texte:
            "Cette définition est régulièrement critiquée : un état de « complet » bien-être est un idéal difficilement atteignable, ce qui risque de transformer presque toute insatisfaction existentielle en problème de santé (risque de médicalisation excessive de la vie sociale).",
        },
        {
          type: 'definition',
          terme: 'Maladie (disease)',
          definition:
            "Processus biologique objectivable, identifié par la médecine à partir de signes, de lésions ou de dysfonctionnements mesurables. C’est la dimension biomédicale de l’expérience du mal-être.",
        },
        {
          type: 'definition',
          terme: 'Vécu de la maladie (illness)',
          definition:
            "Expérience subjective du sujet malade : la façon dont la personne perçoit, interprète et vit son état, indépendamment de sa traduction biologique objective.",
        },
        {
          type: 'liste',
          items: [
            "La distinction anglo-saxonne entre disease (la maladie comme entité biologique), illness (le vécu subjectif du malade) et sickness (le rôle social attribué au malade) est classique en sciences humaines de la santé.",
            "Une même lésion biologique peut être vécue très différemment selon les personnes, ce qui justifie de ne jamais réduire la prise en charge à la seule dimension biologique.",
          ],
        },
      ],
    },
    {
      id: 'normal-pathologique',
      titre: 'Normal et pathologique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Georges Canguilhem, dans Le Normal et le Pathologique (1943), critique l’idée d’une norme biologique purement statistique et objective, indépendante de l’individu. Pour lui, le pathologique n’est pas simplement un écart quantitatif par rapport à une moyenne, mais une incapacité de l’organisme à établir de nouvelles normes face aux exigences du milieu.",
        },
        {
          type: 'comparaison',
          titre: 'Deux conceptions de la norme',
          gauche: {
            titre: 'Conception statistique (normativisme quantitatif)',
            points: [
              'La norme est la moyenne observée dans une population.',
              'Le pathologique est un écart quantitatif par rapport à cette moyenne.',
              'Limite : une variation statistique n’est pas toujours un problème pour l’individu.',
            ],
          },
          droite: {
            titre: 'Conception de Canguilhem (normativité vitale)',
            points: [
              'La santé est la capacité à instituer de nouvelles normes de vie face aux variations du milieu.',
              'Le pathologique est une réduction de cette capacité d’adaptation, une « normativité rétrécie ».',
              'Un état peut être statistiquement rare sans être pathologique, et inversement.',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Point souvent interrogé',
          texte:
            "Retenir que pour Canguilhem, la santé n’est pas un état figé mais une capacité dynamique d’adaptation et de création de nouvelles normes ; la maladie restreint cette capacité sans nécessairement supprimer toute norme.",
        },
      ],
    },
    {
      id: 'modeles-biomedical-biopsychosocial',
      titre: 'Modèle biomédical et modèle biopsychosocial',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le modèle biomédical, dominant depuis le XIXe siècle, explique la maladie par des mécanismes biologiques identifiables (lésion, agent pathogène, dysfonctionnement) et vise leur correction. Il a permis des progrès considérables mais est critiqué pour son insuffisance à rendre compte de la globalité de l’expérience du malade.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le modèle biopsychosocial, proposé par le psychiatre George Engel en 1977, invite à considérer conjointement les dimensions biologique, psychologique et sociale dans la compréhension de la maladie et la prise en charge du patient.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des deux modèles',
          colonnes: ['Dimension', 'Modèle biomédical', 'Modèle biopsychosocial'],
          lignes: [
            ['Cause de la maladie', 'Mécanisme biologique unique', 'Interaction de facteurs biologiques, psychologiques et sociaux'],
            ['Objet de la prise en charge', 'La lésion ou la fonction altérée', 'La personne dans son contexte global'],
            ['Rôle du patient', 'Relativement passif, receveur du soin', 'Acteur, partenaire de la démarche de soin'],
            ['Limite principale', 'Risque de réduction de la personne à sa maladie', 'Risque de dilution du diagnostic biologique précis'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Les deux modèles sont complémentaires',
          texte:
            "En pratique clinique, ces deux modèles ne s’opposent pas mais se complètent : le diagnostic biomédical reste indispensable, mais la compréhension du patient et l’adhésion au traitement dépendent largement des dimensions psychologiques et sociales.",
        },
      ],
    },
    {
      id: 'preuve-scientifique',
      titre: 'La preuve scientifique en médecine',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La médecine fondée sur les preuves (evidence-based medicine) vise à fonder les décisions cliniques sur les meilleures données scientifiques disponibles, articulées avec l’expérience clinique du praticien et les préférences du patient.",
        },
        {
          type: 'etapes',
          titre: 'Hiérarchie simplifiée des niveaux de preuve',
          etapes: [
            {
              titre: 'Niveau le plus élevé',
              detail: "Méta-analyses et revues systématiques d’essais randomisés contrôlés.",
            },
            {
              titre: 'Niveau intermédiaire',
              detail: "Essais randomisés contrôlés isolés, puis études de cohorte.",
            },
            {
              titre: 'Niveau plus faible',
              detail: "Études cas-témoins, études descriptives, séries de cas, avis d’experts.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Essai randomisé contrôlé',
          definition:
            "Étude expérimentale dans laquelle les participants sont répartis au hasard entre un groupe recevant l’intervention étudiée et un groupe témoin, afin de limiter les biais et les facteurs de confusion et d’estimer l’effet propre de l’intervention.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une preuve n’est jamais absolue',
          texte:
            "Aucune étude, même de bon niveau de preuve, n’apporte de certitude définitive : elle apporte une probabilité, toujours susceptible d’être révisée par de nouvelles données. C’est un principe fondamental de la démarche scientifique en médecine.",
        },
      ],
    },
    {
      id: 'causalite',
      titre: 'Causalité et corrélation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une des erreurs de raisonnement les plus fréquentes en médecine consiste à confondre corrélation statistique et lien de causalité. Deux phénomènes peuvent varier ensemble sans que l’un ne cause l’autre, par exemple en raison d’un facteur de confusion commun.",
        },
        {
          type: 'liste',
          items: [
            "Un facteur de confusion est une variable associée à la fois à l’exposition étudiée et à la maladie, capable de créer une association statistique artéfactuelle.",
            "L’existence d’une plausibilité biologique, d’une relation dose-effet, d’une constance de l’association dans plusieurs études et d’une chronologie cohérente (la cause précède l’effet) renforce la probabilité d’un lien causal réel.",
            "L’essai randomisé contrôlé reste l’outil le plus puissant pour approcher la causalité, car la randomisation répartit en principe équitablement les facteurs de confusion connus et inconnus entre les groupes.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Critères renforçant la plausibilité d’un lien causal',
          colonnes: ['Critère', 'Description'],
          lignes: [
            ['Plausibilité biologique', 'Le lien envisagé est cohérent avec les mécanismes physiopathologiques connus'],
            ['Relation dose-effet', 'L’effet observé augmente avec l’intensité ou la durée de l’exposition'],
            ['Constance', 'L’association est retrouvée de façon similaire dans plusieurs études indépendantes'],
            ['Chronologie cohérente', 'L’exposition précède temporellement la survenue de l’effet étudié'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple classique',
          texte:
            "La corrélation observée entre la consommation de café et certaines pathologies cardiovasculaires a longtemps été brouillée par un facteur de confusion majeur : le tabagisme, plus fréquent chez les gros consommateurs de café dans les cohortes historiques.",
        },
      ],
    },
  ],
  pointsCles: [
    "La définition de l’OMS (1946) présente la santé comme un état de complet bien-être physique, mental et social, et non la seule absence de maladie.",
    "La distinction disease / illness / sickness sépare la lésion biologique, le vécu subjectif et le rôle social du malade.",
    "Pour Canguilhem, la santé est une capacité normative à instituer de nouvelles normes de vie, non un simple écart statistique à une moyenne.",
    "Le modèle biomédical explique la maladie par un mécanisme biologique ; le modèle biopsychosocial d’Engel (1977) y ajoute les dimensions psychologique et sociale.",
    "La médecine fondée sur les preuves hiérarchise les niveaux de preuve, du plus élevé (méta-analyses d’essais randomisés) au plus faible (avis d’experts).",
    "Corrélation n’est pas causalité : un facteur de confusion peut créer une association statistique sans lien causal réel.",
    "L’essai randomisé contrôlé est l’outil méthodologique le plus robuste pour approcher un lien de causalité.",
  ],
  erreursFrequentes: [
    "Réduire la santé à la seule absence de maladie, en oubliant la dimension de bien-être global de la définition de l’OMS.",
    "Croire que pour Canguilhem, le pathologique se définit uniquement comme un écart statistique par rapport à la moyenne : c’est au contraire la position qu’il critique.",
    "Opposer de façon rigide modèle biomédical et modèle biopsychosocial, alors qu’ils sont complémentaires en pratique clinique.",
    "Confondre corrélation et causalité, en concluant hâtivement qu’une association statistique implique un lien de cause à effet.",
    "Considérer qu’une preuve scientifique de bon niveau constitue une certitude absolue et définitive.",
  ],
  mnemotechniques: [
    {
      moyen: 'DIS',
      explication:
        'Disease (lésion biologique), Illness (vécu subjectif), Sickness (rôle social) : les trois facettes de la maladie.',
    },
    {
      moyen: 'MERC',
      explication:
        'Pour évoquer un lien causal probable : Mécanisme plausible, Effet dose-dépendant, Reproductibilité des études, Chronologie cohérente (la cause précède l’effet).',
    },
  ],
  sources: [
    'Canguilhem G., Le Normal et le Pathologique, PUF',
    'Engel G., The Need for a New Medical Model: A Challenge for Biomedicine, Science, 1977',
    'Fassin D., Memmi D., Le gouvernement des corps',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-epistemologie-fc-01',
      recto: 'Quelle est la définition de la santé proposée par l’OMS en 1946 ?',
      verso: 'Un état de complet bien-être physique, mental et social, et pas seulement l’absence de maladie ou d’infirmité.',
      type: 'definition',
      tags: ['OMS', 'santé'],
    },
    {
      id: 'ue7-epistemologie-fc-02',
      recto: 'Distinguer disease, illness et sickness.',
      verso: "Disease : la lésion biologique objectivable. Illness : le vécu subjectif du malade. Sickness : le rôle social attribué au malade.",
      type: 'classification',
      tags: ['disease', 'illness', 'sickness'],
    },
    {
      id: 'ue7-epistemologie-fc-03',
      recto: 'Qui a écrit Le Normal et le Pathologique et en quelle année ?',
      verso: 'Georges Canguilhem, en 1943.',
      type: 'chiffre',
      tags: ['Canguilhem'],
    },
    {
      id: 'ue7-epistemologie-fc-04',
      recto: 'Comment Canguilhem définit-il la santé ?',
      verso: "Comme une capacité normative : l’aptitude de l’organisme à instituer de nouvelles normes de vie face aux variations du milieu.",
      type: 'definition',
      tags: ['Canguilhem', 'normativité'],
    },
    {
      id: 'ue7-epistemologie-fc-05',
      recto: 'Qui propose le modèle biopsychosocial et en quelle année ?',
      verso: 'George Engel, en 1977.',
      type: 'chiffre',
      tags: ['Engel', 'biopsychosocial'],
    },
    {
      id: 'ue7-epistemologie-fc-06',
      recto: 'Quelle est la principale limite du modèle biomédical ?',
      verso: "Le risque de réduire la personne malade à sa seule dimension biologique, en négligeant les dimensions psychologique et sociale.",
      type: 'clinique',
      tags: ['modèle biomédical'],
    },
    {
      id: 'ue7-epistemologie-fc-07',
      recto: 'Que désigne la médecine fondée sur les preuves ?',
      verso: "Une démarche qui fonde les décisions cliniques sur les meilleures données scientifiques disponibles, associées à l’expérience clinique et aux préférences du patient.",
      type: 'definition',
      tags: ['evidence-based medicine'],
    },
    {
      id: 'ue7-epistemologie-fc-08',
      recto: 'Quel type d’étude occupe le niveau de preuve le plus élevé ?',
      verso: "Les méta-analyses et revues systématiques d’essais randomisés contrôlés.",
      type: 'classification',
      tags: ['niveau de preuve'],
    },
    {
      id: 'ue7-epistemologie-fc-09',
      recto: 'Qu’est-ce qu’un essai randomisé contrôlé ?',
      verso: "Une étude où les participants sont répartis au hasard entre groupe intervention et groupe témoin, afin de limiter biais et facteurs de confusion.",
      type: 'definition',
      tags: ['essai randomisé'],
    },
    {
      id: 'ue7-epistemologie-fc-10',
      recto: 'Qu’est-ce qu’un facteur de confusion ?',
      verso: "Une variable associée à la fois à l’exposition étudiée et à la maladie, susceptible de créer une association statistique artéfactuelle.",
      type: 'definition',
      tags: ['facteur de confusion'],
    },
    {
      id: 'ue7-epistemologie-fc-11',
      recto: 'Citer trois critères renforçant la plausibilité d’un lien causal.',
      verso: "Plausibilité biologique, relation dose-effet, constance de l’association dans plusieurs études, chronologie cohérente (liste non exhaustive).",
      type: 'mecanisme',
      tags: ['causalité'],
    },
    {
      id: 'ue7-epistemologie-fc-12',
      recto: 'Pourquoi l’essai randomisé contrôlé approche-t-il mieux la causalité qu’une étude observationnelle ?',
      verso: "Parce que la randomisation répartit en principe équitablement les facteurs de confusion connus et inconnus entre les groupes comparés.",
      type: 'mecanisme',
      tags: ['causalité', 'essai randomisé'],
    },
  ],
  qcm: [
    {
      id: 'ue7-epistemologie-qcm-01',
      enonce: 'Concernant la définition de la santé, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’OMS définit la santé comme un état de complet bien-être physique, mental et social.',
          vraie: true,
          justification: 'Exact, définition proposée en 1946.',
        },
        {
          lettre: 'B',
          texte: 'Cette définition se limite à l’absence de maladie diagnostiquée.',
          vraie: false,
          justification: "Faux : elle dépasse explicitement la seule absence de maladie ou d’infirmité.",
        },
        {
          lettre: 'C',
          texte: 'Cette définition est parfois critiquée pour son caractère idéal difficilement atteignable.',
          vraie: true,
          justification: 'Exact : un état de « complet » bien-être est un objectif rarement pleinement réalisé.',
        },
        {
          lettre: 'D',
          texte: 'La distinction disease/illness/sickness est une invention exclusivement française.',
          vraie: false,
          justification: "Faux : c’est une distinction issue de la sociologie et de l’anthropologie médicale anglo-saxonnes.",
        },
        {
          lettre: 'E',
          texte: 'Illness désigne le vécu subjectif de la maladie par le patient.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue7-epistemologie-qcm-02',
      enonce: 'Concernant la pensée de Canguilhem sur le normal et le pathologique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il définit le pathologique comme un simple écart statistique par rapport à une moyenne.',
          vraie: false,
          justification: "Faux : c’est la conception statistique qu’il critique, au profit d’une conception normative de la santé.",
        },
        {
          lettre: 'B',
          texte: 'Il conçoit la santé comme une capacité à instituer de nouvelles normes de vie.',
          vraie: true,
          justification: 'Exact : c’est la notion centrale de normativité vitale.',
        },
        {
          lettre: 'C',
          texte: 'Selon lui, un état statistiquement rare est nécessairement pathologique.',
          vraie: false,
          justification: "Faux : la rareté statistique n’implique pas automatiquement le pathologique dans sa conception.",
        },
        {
          lettre: 'D',
          texte: 'Son ouvrage de référence est Le Normal et le Pathologique.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Il considère le pathologique comme une réduction de la capacité d’adaptation de l’organisme.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-epistemologie-qcm-03',
      enonce: 'Concernant les modèles biomédical et biopsychosocial, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le modèle biopsychosocial a été proposé par George Engel en 1977.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'Le modèle biomédical intègre nativement les dimensions psychologique et sociale.',
          vraie: false,
          justification: "Faux : c’est justement ce que lui reproche le modèle biopsychosocial, qui vient compléter cette lacune.",
        },
        {
          lettre: 'C',
          texte: 'Les deux modèles sont strictement incompatibles en pratique clinique.',
          vraie: false,
          justification: "Faux : ils sont généralement présentés comme complémentaires plutôt qu’opposés.",
        },
        {
          lettre: 'D',
          texte: 'Le modèle biomédical explique la maladie par un mécanisme biologique identifiable.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'Le modèle biopsychosocial considère le patient comme acteur de la démarche de soin.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-epistemologie-qcm-04',
      enonce: 'Concernant la médecine fondée sur les preuves, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les méta-analyses d’essais randomisés occupent le niveau de preuve le plus élevé.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'B',
          texte: 'L’avis d’expert isolé constitue le niveau de preuve le plus solide.',
          vraie: false,
          justification: "Faux : c’est au contraire un niveau de preuve faible dans la hiérarchie classique.",
        },
        {
          lettre: 'C',
          texte: 'Une preuve scientifique, même solide, peut être révisée par de nouvelles données.',
          vraie: true,
          justification: 'Exact : la science médicale reste par principe révisable.',
        },
        {
          lettre: 'D',
          texte: 'Cette démarche ignore l’expérience clinique du praticien.',
          vraie: false,
          justification: "Faux : elle articule au contraire preuves scientifiques, expérience clinique et préférences du patient.",
        },
        {
          lettre: 'E',
          texte: 'Les études de cohorte se situent à un niveau de preuve intermédiaire.',
          vraie: true,
          justification: 'Exact, entre les essais randomisés et les études cas-témoins ou descriptives.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-epistemologie-qcm-05',
      enonce: 'Concernant causalité et corrélation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une corrélation statistique implique toujours un lien de causalité.',
          vraie: false,
          justification: "Faux : c’est précisément l’erreur de raisonnement à éviter en médecine.",
        },
        {
          lettre: 'B',
          texte: 'Un facteur de confusion peut créer une association statistique artéfactuelle.',
          vraie: true,
          justification: 'Exact, par exemple le tabagisme dans la relation historique café-maladies cardiovasculaires.',
        },
        {
          lettre: 'C',
          texte: 'Une relation dose-effet renforce la plausibilité d’un lien causal.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'D',
          texte: 'L’essai randomisé contrôlé est l’outil le plus puissant pour approcher la causalité.',
          vraie: true,
          justification: 'Exact, grâce à la répartition aléatoire des facteurs de confusion.',
        },
        {
          lettre: 'E',
          texte: 'La chronologie des événements n’a aucune importance pour évoquer un lien causal.',
          vraie: false,
          justification: "Faux : la cause doit précéder l’effet, c’est un critère important de plausibilité causale.",
        },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-epistemologie-qcm-06',
      enonce: 'Concernant les concepts vus dans cette fiche, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Sickness désigne la lésion biologique objectivable.',
          vraie: false,
          justification: "Faux : sickness désigne le rôle social attribué au malade, disease désigne la lésion biologique.",
        },
        {
          lettre: 'B',
          texte: 'Le modèle biopsychosocial vise à intégrer les dimensions biologique, psychologique et sociale.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'C',
          texte: 'La médecine fondée sur les preuves considère qu’une seule étude, quel que soit son niveau de preuve, suffit toujours à établir une certitude.',
          vraie: false,
          justification: "Faux : la robustesse d’une conclusion dépend du niveau de preuve et de la convergence de plusieurs études.",
        },
        {
          lettre: 'D',
          texte: 'Canguilhem critique une conception purement statistique de la norme biologique.',
          vraie: true,
          justification: 'Exact.',
        },
        {
          lettre: 'E',
          texte: 'L’OMS a proposé sa définition de la santé en 1946.',
          vraie: true,
          justification: 'Exact.',
        },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 2,
    },
  ],
};
