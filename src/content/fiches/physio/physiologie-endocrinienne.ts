import type { Fiche } from '../../types';

export const fichePhysiologieEndocrinienne: Fiche = {
  id: 'physio-physiologie-endocrinienne',
  ue: 'physio',
  titre: 'Physiologie endocrinienne',
  sousTitre: 'Axes hypothalamo-hypophysaires, glycémie et régulation phosphocalcique',
  chapitre: 'Digestif et endocrinien',
  ordre: 11,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'axe hypothalamo-hypophysaire',
    'thyroïde',
    'surrénales',
    'insuline',
    'glucagon',
    'glycémie',
    'régulation phosphocalcique',
    'parathormone',
  ],
  objectifs: [
    'Décrire l’organisation générale d’un axe hypothalamo-hypophysaire et son rétrocontrôle.',
    'Expliquer la synthèse et les actions des hormones thyroïdiennes.',
    'Décrire l’organisation fonctionnelle des surrénales et les actions du cortisol.',
    'Expliquer la régulation de la glycémie par l’insuline et le glucagon.',
    'Décrire les acteurs hormonaux de la régulation phosphocalcique.',
  ],
  sections: [
    {
      id: 'axe-hypothalamo-hypophysaire',
      titre: 'Organisation d’un axe hypothalamo-hypophysaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’hypothalamus coordonne la fonction endocrinienne périphérique via l’hypophyse, glande maîtresse elle-même sous contrôle hypothalamique. On distingue l’antéhypophyse, glande endocrine vraie sous contrôle d’hormones hypothalamiques de libération acheminées par un système porte vasculaire, et la posthypophyse, simple site de libération d’hormones synthétisées dans l’hypothalamus.",
        },
        {
          type: 'tableau',
          titre: 'Principaux axes hypothalamo-antéhypophysaires',
          colonnes: ['Hormone hypothalamique', 'Hormone antéhypophysaire', 'Glande ou tissu cible', 'Hormone périphérique finale'],
          lignes: [
            ['TRH (thyréolibérine)', 'TSH (thyréostimuline)', 'Thyroïde', 'T3 et T4'],
            ['CRH (corticolibérine)', 'ACTH (corticotrophine)', 'Corticosurrénale (zone fasciculée)', 'Cortisol'],
            ['GnRH (gonadolibérine)', 'FSH et LH (gonadotrophines)', 'Gonades', 'Œstrogènes, progestérone, testostérone'],
            ['GHRH (somatolibérine)', 'GH (hormone de croissance)', 'Foie et tissus périphériques', 'IGF-1'],
          ],
        },
        {
          type: 'definition',
          terme: 'Rétrocontrôle négatif long',
          definition:
            "Mécanisme par lequel l’hormone périphérique finale d’un axe (par exemple le cortisol) inhibe en retour la sécrétion de l’hormone hypothalamique et de l’hormone antéhypophysaire correspondantes, limitant ainsi sa propre production lorsque sa concentration devient suffisante.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Posthypophyse : un simple lieu de stockage et de libération',
          texte:
            "L’ocytocine et l’hormone antidiurétique (ADH) sont en réalité synthétisées par les corps cellulaires de neurones hypothalamiques (noyaux supraoptique et paraventriculaire), puis transportées le long de leurs axones jusqu’à la posthypophyse, où elles sont stockées et libérées dans la circulation générale.",
        },
      ],
    },
    {
      id: 'thyroide',
      titre: 'Physiologie thyroïdienne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La thyroïde synthétise les hormones thyroïdiennes à partir de l’iode et de la thyroglobuline, sous le contrôle de la TSH hypophysaire, dans le cadre de l’axe thyréotrope.",
        },
        {
          type: 'etapes',
          titre: 'Synthèse des hormones thyroïdiennes',
          etapes: [
            {
              titre: 'Captation de l’iode',
              detail:
                "L’iodure plasmatique est capté activement par le symport sodium-iodure (NIS) de la cellule folliculaire thyroïdienne, contre son gradient de concentration.",
            },
            {
              titre: 'Organification',
              detail:
                "L’iodure est oxydé et fixé sur les résidus tyrosine de la thyroglobuline par la thyroperoxydase, formant des mono- et di-iodotyrosines.",
            },
            {
              titre: 'Couplage',
              detail:
                "Le couplage de deux di-iodotyrosines forme la T4 (thyroxine) ; le couplage d’une mono- et d’une di-iodotyrosine forme la T3 (triiodothyronine).",
            },
            {
              titre: 'Libération',
              detail:
                "La thyroglobuline iodée est internalisée et hydrolysée, libérant T3 et T4 dans la circulation sanguine, majoritairement sous forme de T4.",
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'T3 et T4 : comparaison',
          colonnes: ['Caractéristique', 'T4 (thyroxine)', 'T3 (triiodothyronine)'],
          lignes: [
            ['Proportion sécrétée par la thyroïde', 'Majoritaire (environ 90 %)', 'Minoritaire (environ 10 %)'],
            ['Affinité pour le récepteur nucléaire', 'Plus faible', 'Bien plus élevée (hormone active)'],
            ['Origine principale de la T3 circulante', '—', 'Conversion périphérique de T4 en T3 par les déiodinases tissulaires'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La T4 est un précurseur circulant',
          texte:
            "Bien que sécrétée en plus grande quantité, la T4 possède une activité biologique bien plus faible que la T3. La majorité de l’action des hormones thyroïdiennes provient de la T3, obtenue par conversion périphérique de la T4 grâce aux déiodinases, notamment hépatiques et rénales. Cette conversion périphérique confère un degré supplémentaire de régulation tissulaire fine.",
        },
        {
          type: 'paragraphe',
          texte:
            "Les hormones thyroïdiennes augmentent le métabolisme basal, la thermogenèse, la consommation d’oxygène tissulaire, et sont indispensables à la croissance et à la maturation du système nerveux central, en particulier durant la vie fœtale et les premières années de vie.",
        },
      ],
    },
    {
      id: 'surrenales',
      titre: 'Physiologie surrénalienne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La glande surrénale comprend deux structures fonctionnellement distinctes : le cortex, d’origine mésodermique, sécrétant des hormones stéroïdiennes, et la médullosurrénale, d’origine neuro-ectodermique, sécrétant des catécholamines.",
        },
        {
          type: 'tableau',
          titre: 'Les trois zones du cortex surrénalien',
          colonnes: ['Zone', 'Hormone principale', 'Régulation dominante', 'Fonction'],
          lignes: [
            ['Zone glomérulée (externe)', 'Aldostérone', 'Système rénine-angiotensine, kaliémie', 'Réabsorption de sodium, sécrétion de potassium'],
            ['Zone fasciculée (moyenne)', 'Cortisol', 'ACTH hypophysaire', 'Métabolisme glucidique, protéique, lipidique, réponse au stress'],
            ['Zone réticulée (interne)', 'Androgènes surrénaliens (DHEA)', 'ACTH hypophysaire', 'Contribution mineure aux androgènes circulants'],
          ],
        },
        {
          type: 'definition',
          terme: 'Cortisol',
          definition:
            "Glucocorticoïde majeur, sécrété selon un rythme circadien avec un pic matinal, sous le contrôle de l’ACTH. Il augmente la glycémie en stimulant la néoglucogenèse hépatique et en s’opposant à l’action périphérique de l’insuline, mobilise les acides aminés musculaires et les acides gras, et exerce un effet anti-inflammatoire et immunosuppresseur à dose pharmacologique.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Rythme circadien du cortisol',
          texte:
            "La cortisolémie est maximale en fin de nuit et au réveil (pic matinal, vers 6-8 heures) et minimale en fin de soirée, avec un nadir vers minuit, reflétant le rythme circadien de la sécrétion d’ACTH.",
        },
      ],
    },
    {
      id: 'glycemie',
      titre: 'Régulation de la glycémie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La glycémie est maintenue dans une fourchette étroite grâce à l’action antagoniste de deux hormones pancréatiques principales, sécrétées par les îlots de Langerhans.",
        },
        {
          type: 'tableau',
          titre: 'Insuline et glucagon',
          colonnes: ['Hormone', 'Cellule sécrétrice', 'Stimulus de sécrétion', 'Effet sur la glycémie', 'Mécanismes principaux'],
          lignes: [
            ['Insuline', 'Cellules β des îlots de Langerhans', 'Hyperglycémie', 'Hypoglycémiante', 'Captation musculaire et adipeuse du glucose via GLUT4, glycogénogenèse hépatique, lipogenèse'],
            ['Glucagon', 'Cellules α des îlots de Langerhans', 'Hypoglycémie', 'Hyperglycémiante', 'Glycogénolyse et néoglucogenèse hépatiques'],
          ],
        },
        {
          type: 'formule',
          expression: 'Glycémie normale à jeun ≈ 0,70 à 1,10 g/L (soit environ 3,9 à 6,1 mmol/L)',
          legende: 'Valeur de référence usuelle chez l’adulte sain, mesurée après un jeûne d’au moins 8 heures.',
          unites: 'g/L',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'L’insuline est la seule hormone hypoglycémiante',
          texte:
            "L’insuline est la seule hormone de l’organisme à abaisser la glycémie. De nombreuses hormones ont au contraire un effet hyperglycémiant : glucagon, cortisol, adrénaline et hormone de croissance. Ce déséquilibre reflète l’importance vitale de prévenir l’hypoglycémie, potentiellement délétère pour le système nerveux central, glucodépendant.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Diabète de type 1 et de type 2',
          texte:
            "Le diabète de type 1 résulte d’une destruction auto-immune des cellules β pancréatiques, entraînant une carence absolue en insuline. Le diabète de type 2 associe une insulinorésistance périphérique et un déficit relatif, progressif, de la sécrétion d’insuline.",
        },
      ],
    },
    {
      id: 'regulation-phosphocalcique',
      titre: 'Régulation phosphocalcique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La calcémie est maintenue stable grâce à l’action coordonnée de trois hormones principales, agissant sur trois organes effecteurs : l’os, le rein et l’intestin.",
        },
        {
          type: 'tableau',
          titre: 'Hormones de la régulation phosphocalcique',
          colonnes: ['Hormone', 'Origine', 'Stimulus', 'Effet sur la calcémie', 'Mécanismes principaux'],
          lignes: [
            ['Parathormone (PTH)', 'Glandes parathyroïdes', 'Hypocalcémie', 'Hypercalcémiant', 'Résorption osseuse, réabsorption rénale du calcium, activation de la vitamine D, excrétion rénale du phosphate'],
            ['Calcitriol (vitamine D active)', 'Foie puis rein (activation de la vitamine D)', 'PTH, hypophosphatémie', 'Hypercalcémiant', 'Augmente l’absorption intestinale de calcium et de phosphate'],
            ['Calcitonine', 'Cellules C (parafolliculaires) de la thyroïde', 'Hypercalcémie', 'Hypocalcémiant (effet modeste chez l’humain)', 'Inhibe la résorption osseuse ostéoclastique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Calcémie normale',
          texte:
            "La calcémie totale normale est comprise entre 2,20 et 2,60 mmol/L (soit environ 88 à 104 mg/L). La fraction ionisée, biologiquement active, représente environ 50 % du calcium total.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'PTH et vitamine D agissent en synergie',
          texte:
            "La PTH stimule l’activation rénale de la vitamine D en calcitriol, qui à son tour augmente l’absorption intestinale de calcium. Ces deux hormones travaillent donc de concert pour élever la calcémie, contrairement à la calcitonine, dont l’effet physiologique reste modeste chez l’humain comparé aux autres espèces.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’antéhypophyse est une glande endocrine vraie sous contrôle hypothalamique ; la posthypophyse ne fait que libérer des hormones synthétisées dans l’hypothalamus.",
    "Chaque axe hypothalamo-hypophysaire périphérique est régulé par un rétrocontrôle négatif long exercé par l’hormone périphérique finale.",
    "La T4, majoritaire, est le précurseur circulant ; la T3, plus active, résulte surtout de la conversion périphérique de la T4.",
    "Le cortex surrénalien comprend trois zones : glomérulée (aldostérone), fasciculée (cortisol) et réticulée (androgènes).",
    "Le cortisol est hyperglycémiant, catabolique et anti-inflammatoire, sécrété selon un rythme circadien avec un pic matinal.",
    "L’insuline est la seule hormone hypoglycémiante ; glucagon, cortisol, adrénaline et hormone de croissance sont hyperglycémiants.",
    "La parathormone et le calcitriol sont hypercalcémiants et agissent en synergie ; la calcitonine a un effet hypocalcémiant modeste chez l’humain.",
    "La calcémie normale se situe entre 2,20 et 2,60 mmol/L.",
  ],
  erreursFrequentes: [
    "Croire que la posthypophyse synthétise l’ADH et l’ocytocine : ces hormones sont synthétisées dans l’hypothalamus et seulement libérées par la posthypophyse.",
    "Penser que la T3 est la forme majoritairement sécrétée par la thyroïde : c’est la T4 qui domine en quantité, la T3 provenant surtout de sa conversion périphérique.",
    "Confondre les trois zones du cortex surrénalien et leurs hormones respectives : glomérulée-aldostérone, fasciculée-cortisol, réticulée-androgènes.",
    "Oublier que le cortisol est hyperglycémiant, et non hypoglycémiant comme l’insuline.",
    "Croire que plusieurs hormones abaissent la glycémie : seule l’insuline a cet effet, toutes les autres hormones citées étant hyperglycémiantes.",
    "Penser que la calcitonine joue un rôle physiologique majeur chez l’humain : son effet reste modeste comparé à celui de la PTH et du calcitriol.",
  ],
  mnemotechniques: [
    {
      moyen: '« GFR : Glomérulée-sodium, Fasciculée-sucre, Réticulée-sexe »',
      explication:
        'Zone glomérulée sécrète l’aldostérone (sodium), zone fasciculée le cortisol (sucre/métabolisme), zone réticulée les androgènes (fonction sexuelle).',
    },
    {
      moyen: '« Seule l’insuline fait baisser »',
      explication:
        'Rappel que l’insuline est la seule hormone hypoglycémiante, à l’inverse de toutes les hormones de contre-régulation (glucagon, cortisol, adrénaline, GH).',
    },
    {
      moyen: '« PTH et vitamine D montent ensemble »',
      explication:
        'La parathormone stimule l’activation de la vitamine D, et les deux hormones élèvent conjointement la calcémie.',
    },
  ],
  sources: [
    'Guyton et Hall, Précis de physiologie médicale',
    'Silverthorn, Physiologie humaine, une approche intégrée',
    'Sherwood, Physiologie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'physio-physiologie-endocrinienne-fc-01',
      recto: 'Quelle différence fondamentale distingue antéhypophyse et posthypophyse ?',
      verso: 'L’antéhypophyse est une glande endocrine vraie sous contrôle hypothalamique ; la posthypophyse ne fait que libérer des hormones synthétisées par des neurones hypothalamiques.',
      type: 'definition',
      tags: ['hypophyse'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-02',
      recto: 'Quelle hormone hypophysaire contrôle la sécrétion thyroïdienne ?',
      verso: 'La TSH (thyréostimuline), elle-même sous contrôle de la TRH hypothalamique.',
      type: 'definition',
      tags: ['axe thyréotrope'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-03',
      recto: 'Quelle hormone thyroïdienne est la plus active biologiquement, T3 ou T4 ?',
      verso: 'La T3, malgré une sécrétion thyroïdienne moindre ; elle provient surtout de la conversion périphérique de la T4.',
      type: 'definition',
      tags: ['T3', 'T4'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-04',
      recto: 'Quelle zone du cortex surrénalien sécrète le cortisol ?',
      verso: 'La zone fasciculée, sous contrôle de l’ACTH.',
      type: 'definition',
      tags: ['surrénales', 'cortisol'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-05',
      recto: 'Quel est le profil circadien de la cortisolémie ?',
      verso: 'Pic matinal (vers 6-8 heures), nadir en fin de soirée (vers minuit).',
      type: 'chiffre',
      tags: ['cortisol', 'rythme circadien'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-06',
      recto: 'Quelle cellule pancréatique sécrète l’insuline ?',
      verso: 'Les cellules β des îlots de Langerhans.',
      type: 'definition',
      tags: ['insuline'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-07',
      recto: 'Quelle est la seule hormone hypoglycémiante de l’organisme ?',
      verso: 'L’insuline.',
      type: 'definition',
      tags: ['glycémie'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-08',
      recto: 'Citer trois hormones hyperglycémiantes.',
      verso: 'Le glucagon, le cortisol et l’adrénaline (l’hormone de croissance en est une quatrième).',
      type: 'classification',
      tags: ['hormones hyperglycémiantes'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-09',
      recto: 'Quelle est la valeur normale usuelle de la glycémie à jeun ?',
      verso: 'Environ 0,70 à 1,10 g/L (3,9 à 6,1 mmol/L).',
      type: 'chiffre',
      tags: ['glycémie'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-10',
      recto: 'Quel stimulus déclenche la sécrétion de parathormone ?',
      verso: 'L’hypocalcémie.',
      type: 'mecanisme',
      tags: ['parathormone'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-11',
      recto: 'Quels sont les trois effets principaux de la parathormone ?',
      verso: 'Résorption osseuse, réabsorption rénale du calcium, et activation de la vitamine D (avec excrétion rénale accrue du phosphate).',
      type: 'mecanisme',
      tags: ['parathormone'],
    },
    {
      id: 'physio-physiologie-endocrinienne-fc-12',
      recto: 'Quelle est la valeur normale de la calcémie totale ?',
      verso: 'Environ 2,20 à 2,60 mmol/L.',
      type: 'chiffre',
      tags: ['calcémie'],
    },
  ],
  qcm: [
    {
      id: 'physio-physiologie-endocrinienne-qcm-01',
      enonce: "Concernant les axes hypothalamo-hypophysaires, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'L’antéhypophyse synthétise elle-même ses hormones.',
          vraie: true,
          justification: 'Exact, c’est une glande endocrine vraie, sous contrôle des hormones hypothalamiques de libération.',
        },
        {
          lettre: 'B',
          texte: 'La posthypophyse synthétise l’ADH et l’ocytocine.',
          vraie: false,
          justification: "Faux : ces hormones sont synthétisées par des neurones hypothalamiques et seulement libérées par la posthypophyse.",
        },
        {
          lettre: 'C',
          texte: 'L’hormone périphérique finale d’un axe exerce classiquement un rétrocontrôle négatif sur l’hypothalamus et l’hypophyse.',
          vraie: true,
          justification: 'Exact : c’est le principe du rétrocontrôle négatif long.',
        },
        {
          lettre: 'D',
          texte: 'La TSH stimule la sécrétion de cortisol.',
          vraie: false,
          justification: "Faux : la TSH stimule la thyroïde ; c’est l’ACTH qui stimule la sécrétion de cortisol.",
        },
        {
          lettre: 'E',
          texte: 'La CRH stimule la sécrétion d’ACTH.',
          vraie: true,
          justification: 'Exact : c’est l’hormone hypothalamique de l’axe corticotrope.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer chaque axe et ses hormones hypothalamiques, hypophysaires et périphériques.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-endocrinienne-qcm-02',
      enonce: "Concernant la physiologie thyroïdienne, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La T4 est sécrétée en plus grande quantité que la T3 par la thyroïde.',
          vraie: true,
          justification: 'Exact, environ 90 % contre 10 %.',
        },
        {
          lettre: 'B',
          texte: 'La T3 a une affinité plus élevée pour le récepteur nucléaire que la T4.',
          vraie: true,
          justification: 'Exact : la T3 est la forme biologiquement la plus active.',
        },
        {
          lettre: 'C',
          texte: 'La thyroperoxydase catalyse l’organification de l’iode sur la thyroglobuline.',
          vraie: true,
          justification: 'Exact : cette enzyme catalyse l’oxydation de l’iodure puis sa fixation sur les résidus tyrosine de la thyroglobuline, étape indispensable à la synthèse des hormones thyroïdiennes.',
        },
        {
          lettre: 'D',
          texte: 'La majorité de la T3 circulante provient directement de la sécrétion thyroïdienne.',
          vraie: false,
          justification: "Faux : la majorité de la T3 circulante résulte de la conversion périphérique de la T4 par les déiodinases.",
        },
        {
          lettre: 'E',
          texte: 'Les hormones thyroïdiennes sont indispensables à la maturation du système nerveux central fœtal.',
          vraie: true,
          justification: 'Exact, une carence sévère durant la grossesse pouvant entraîner un retard neurodéveloppemental irréversible.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. La T3, plus active, provient surtout de la conversion périphérique de la T4.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-endocrinienne-qcm-03',
      enonce: "Concernant les surrénales, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La zone glomérulée sécrète le cortisol.',
          vraie: false,
          justification: 'Faux : la zone glomérulée sécrète l’aldostérone ; le cortisol est sécrété par la zone fasciculée.',
        },
        {
          lettre: 'B',
          texte: 'La médullosurrénale est d’origine neuro-ectodermique.',
          vraie: true,
          justification: 'Exact, à la différence du cortex, d’origine mésodermique.',
        },
        {
          lettre: 'C',
          texte: 'Le cortisol est hypoglycémiant.',
          vraie: false,
          justification: 'Faux : le cortisol est hyperglycémiant, en stimulant la néoglucogenèse hépatique.',
        },
        {
          lettre: 'D',
          texte: 'La sécrétion de cortisol est maximale le matin.',
          vraie: true,
          justification: 'Exact, en lien avec le rythme circadien de l’ACTH.',
        },
        {
          lettre: 'E',
          texte: 'La zone fasciculée est sous contrôle principal de l’ACTH.',
          vraie: true,
          justification: 'Exact : l’ACTH hypophysaire stimule la stéroïdogenèse de la zone fasciculée et conditionne la sécrétion de cortisol, à la différence de la zone glomérulée régulée surtout par le système rénine-angiotensine.',
        },
      ],
      correction: 'Réponses exactes : B, D et E. Le cortex surrénalien comprend trois zones aux hormones et régulations distinctes.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-endocrinienne-qcm-04',
      enonce: "Concernant la régulation de la glycémie, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'L’insuline est sécrétée par les cellules α des îlots de Langerhans.',
          vraie: false,
          justification: 'Faux : l’insuline est sécrétée par les cellules β ; le glucagon par les cellules α.',
        },
        {
          lettre: 'B',
          texte: 'Le glucagon stimule la glycogénolyse hépatique.',
          vraie: true,
          justification: 'Exact, ce qui contribue à son effet hyperglycémiant.',
        },
        {
          lettre: 'C',
          texte: 'L’insuline favorise la captation musculaire du glucose via le transporteur GLUT4.',
          vraie: true,
          justification: 'Exact : la fixation de l’insuline sur son récepteur provoque la translocation des transporteurs GLUT4 vers la membrane des cellules musculaires et adipeuses, augmentant l’entrée du glucose.',
        },
        {
          lettre: 'D',
          texte: 'L’adrénaline est hypoglycémiante.',
          vraie: false,
          justification: 'Faux : l’adrénaline est hyperglycémiante, comme le glucagon, le cortisol et l’hormone de croissance.',
        },
        {
          lettre: 'E',
          texte: 'Le diabète de type 1 résulte d’une destruction auto-immune des cellules β pancréatiques.',
          vraie: true,
          justification: 'Exact, entraînant une carence absolue en insuline.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Insuline (hypoglycémiante) et glucagon (hyperglycémiant) agissent en miroir.',
      difficulte: 1,
    },
    {
      id: 'physio-physiologie-endocrinienne-qcm-05',
      enonce: "Concernant la régulation phosphocalcique, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La parathormone est sécrétée en réponse à une hypocalcémie.',
          vraie: true,
          justification: 'Exact : la baisse de la calcémie est détectée par les récepteurs sensibles au calcium des glandes parathyroïdes, ce qui stimule la sécrétion de PTH.',
        },
        {
          lettre: 'B',
          texte: 'La parathormone est hypocalcémiante.',
          vraie: false,
          justification: 'Faux : elle est hypercalcémiante, par résorption osseuse, réabsorption rénale du calcium et activation de la vitamine D.',
        },
        {
          lettre: 'C',
          texte: 'Le calcitriol augmente l’absorption intestinale de calcium.',
          vraie: true,
          justification: 'Exact, c’est l’une de ses actions principales.',
        },
        {
          lettre: 'D',
          texte: 'La calcitonine est sécrétée par les cellules parafolliculaires (cellules C) de la thyroïde.',
          vraie: true,
          justification: 'Exact : ces cellules, distinctes des thyréocytes folliculaires, sécrètent la calcitonine en réponse à une hypercalcémie.',
        },
        {
          lettre: 'E',
          texte: 'La calcitonine joue un rôle physiologique majeur et dominant chez l’humain.',
          vraie: false,
          justification: "Faux : son effet physiologique reste modeste chez l’humain, comparé à celui de la PTH et du calcitriol.",
        },
      ],
      correction: 'Réponses exactes : A, C et D. PTH et calcitriol dominent la régulation hypercalcémiante ; la calcitonine a un rôle modeste chez l’humain.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-endocrinienne-qcm-06',
      enonce: "Concernant les interactions hormonales de la régulation phosphocalcique et glycémique, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La PTH stimule l’activation rénale de la vitamine D.',
          vraie: true,
          justification: 'Exact, ce qui augmente ensuite l’absorption intestinale de calcium via le calcitriol.',
        },
        {
          lettre: 'B',
          texte: 'La calcémie totale normale se situe entre 2,20 et 2,60 mmol/L.',
          vraie: true,
          justification: 'Exact : cette valeur de référence correspond à la calcémie totale, qui inclut le calcium lié aux protéines, le calcium ionisé étant la fraction biologiquement active.',
        },
        {
          lettre: 'C',
          texte: 'Le glucagon et l’insuline ont le même effet sur la glycémie.',
          vraie: false,
          justification: "Faux : ils ont des effets opposés, le glucagon étant hyperglycémiant et l’insuline hypoglycémiante.",
        },
        {
          lettre: 'D',
          texte: 'Le cortisol s’oppose à l’action périphérique de l’insuline.',
          vraie: true,
          justification: 'Exact, ce qui contribue à son effet hyperglycémiant, notamment en situation de stress.',
        },
        {
          lettre: 'E',
          texte: 'Le calcitriol est synthétisé uniquement par le foie.',
          vraie: false,
          justification: "Faux : sa synthèse active nécessite une double étape hépatique puis rénale.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. Les régulations hormonales de la glycémie et de la calcémie reposent sur des systèmes antagonistes coordonnés.',
      difficulte: 2,
    },
  ],
};
