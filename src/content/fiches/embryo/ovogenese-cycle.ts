import type { Fiche } from '../../types';

export const ficheOvogeneseCycle: Fiche = {
  id: 'embryo-ovogenese-cycle',
  ue: 'embryo',
  titre: 'Ovogenèse et cycle menstruel',
  sousTitre: 'Folliculogenèse, blocages méiotiques et corrélations hormonales',
  chapitre: 'Reproduction et fécondation',
  ordre: 3,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'ovogenèse',
    'folliculogenèse',
    'blocage méiotique',
    'cycle ovarien',
    'cycle utérin',
    'pic de LH',
    'ovulation',
    'corps jaune',
  ],
  objectifs: [
    "Décrire les grandes étapes de l’ovogenèse et situer les deux blocages méiotiques.",
    "Décrire les stades de la folliculogenèse, du follicule primordial au follicule mûr.",
    "Distinguer les phases du cycle ovarien et du cycle utérin et les corréler entre elles.",
    "Expliquer le déclenchement de l’ovulation par le pic de LH.",
    "Décrire la formation, la fonction et le devenir du corps jaune.",
  ],
  sections: [
    {
      id: 'ovogenese-generale',
      titre: 'Vue d’ensemble de l’ovogenèse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’ovogenèse débute pendant la vie fœtale : les ovogonies prolifèrent par mitoses jusque vers le sixième ou septième mois de développement, puis entrent en méiose et se bloquent en prophase I, au stade diplotène, sous la forme d’ovocytes I. Ce premier blocage méiotique dure jusqu’à la puberté, voire jusqu’à la ménopause pour les ovocytes les plus tardivement recrutés.",
        },
        {
          type: 'liste',
          items: [
            "Contrairement à la spermatogenèse, l’ovogenèse ne produit pas de nouvelles cellules germinales après la vie fœtale : le stock d’ovocytes I est définitivement constitué avant la naissance.",
            "Chaque cycle, à partir de la puberté, un nombre limité de follicules reprennent leur croissance, mais un seul follicule atteint habituellement la maturité complète et ovule.",
            "Le deuxième blocage méiotique survient en métaphase de la deuxième division de méiose, et n’est levé qu’au moment de la fécondation.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les deux blocages méiotiques',
          texte:
            "Premier blocage : prophase I, stade diplotène, de la vie fœtale à la reprise méiotique déclenchée par le pic de LH. Second blocage : métaphase II, de l’ovulation à la fécondation. En l’absence de fécondation, l’ovocyte bloqué en métaphase II dégénère.",
        },
      ],
    },
    {
      id: 'folliculogenese',
      titre: 'La folliculogenèse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La folliculogenèse est la maturation du follicule ovarien qui entoure et nourrit l’ovocyte. Elle comporte une phase basale, indépendante des gonadotrophines, longue de plusieurs mois, puis une phase terminale, dépendante de la FSH, qui se déroule au cours du cycle menstruel.",
        },
        {
          type: 'etapes',
          titre: 'Stades de maturation folliculaire',
          etapes: [
            {
              titre: 'Follicule primordial',
              detail: "Ovocyte I entouré d’une seule couche de cellules folliculeuses aplaties.",
            },
            {
              titre: 'Follicule primaire',
              detail: "Les cellules folliculeuses deviennent cubiques ; apparition d’une seule couche de cellules de la granulosa.",
            },
            {
              titre: 'Follicule secondaire (préantral)',
              detail:
                'Plusieurs couches de cellules de la granulosa, apparition de la zone pellucide autour de l’ovocyte et d’une thèque interne organisée.',
            },
            {
              titre: 'Follicule tertiaire (antral)',
              detail: 'Apparition d’une cavité liquidienne, l’antrum, au sein de la granulosa.',
            },
            {
              titre: 'Follicule mûr (follicule de De Graaf, ou préovulatoire)',
              detail:
                'Follicule volumineux, antrum développé, ovocyte entouré du cumulus oophorus et de la corona radiata, prêt à ovuler.',
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Théorie des deux cellules, deux gonadotrophines',
          colonnes: ['Cellule', 'Gonadotrophine réceptrice', 'Fonction stéroïdogène'],
          lignes: [
            ['Thèque interne', 'LH', 'Synthèse des androgènes à partir du cholestérol'],
            ['Granulosa', 'FSH', 'Aromatisation des androgènes thécaux en œstrogènes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Sélection du follicule dominant',
          texte:
            "Au début de chaque cycle, une cohorte de follicules antraux reprend sa croissance sous l’effet de l’élévation de la FSH. Un seul follicule, le plus sensible à la FSH, devient dominant vers le milieu de la phase folliculaire ; les autres follicules de la cohorte entrent en atrésie.",
        },
      ],
    },
    {
      id: 'cycle-ovarien-uterin',
      titre: 'Cycle ovarien et cycle utérin',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Dans un cycle de référence de 28 jours, débuté conventionnellement au premier jour des règles, le cycle ovarien comporte une phase folliculaire de durée variable, une ovulation vers le 14e jour, et une phase lutéale de durée fixe, d’environ 14 jours. Le cycle utérin, sous la dépendance des sécrétions ovariennes, comporte une phase menstruelle, une phase proliférative œstrogéno-dépendante et une phase sécrétoire progestéro-dépendante.",
        },
        {
          type: 'tableau',
          titre: 'Corrélation entre cycle ovarien et cycle utérin',
          colonnes: ['Cycle ovarien', 'Cycle utérin (endomètre)', 'Hormone dominante'],
          lignes: [
            ['Phase folliculaire', 'Phase menstruelle puis phase proliférative', 'Œstradiol croissant'],
            ['Ovulation (vers J14)', 'Fin de la phase proliférative', 'Pic de LH'],
            ['Phase lutéale', 'Phase sécrétoire', 'Progestérone et œstradiol issus du corps jaune'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Durée fixe de la phase lutéale',
          texte:
            "C’est la phase folliculaire, et non la phase lutéale, dont la durée est variable d’une femme à l’autre et explique la variabilité de la longueur totale du cycle. La phase lutéale dure classiquement 14 jours, en l’absence de fécondation, du fait de la durée de vie programmée du corps jaune.",
        },
        {
          type: 'formule',
          expression: "Durée du cycle = durée de la phase folliculaire + durée de la phase lutéale (≈ 14 jours)",
          legende:
            "Utile pour estimer la date d’ovulation à partir de la durée habituelle du cycle d’une femme, en comptant 14 jours avant la date présumée des règles suivantes.",
        },
      ],
    },
    {
      id: 'declenchement-ovulation',
      titre: 'Déclenchement de l’ovulation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En fin de phase folliculaire, la croissance du follicule dominant s’accompagne d’une sécrétion croissante d’œstradiol par la granulosa. Lorsque cette concentration élevée est maintenue pendant environ 48 heures, elle inverse le rétrocontrôle hypothalamo-hypophysaire, qui devient positif, et déclenche un pic ample de LH, accompagné d’un pic moindre de FSH.",
        },
        {
          type: 'etapes',
          titre: 'De la décharge de LH à l’ovulation',
          etapes: [
            {
              titre: 'Reprise de la méiose',
              detail:
                'Le pic de LH lève le premier blocage méiotique : l’ovocyte I achève sa première division de méiose et expulse le premier globule polaire, devenant ovocyte II.',
            },
            {
              titre: 'Blocage en métaphase II',
              detail:
                'L’ovocyte II entame aussitôt la deuxième division de méiose, mais se bloque en métaphase II jusqu’à une éventuelle fécondation.',
            },
            {
              titre: 'Rupture folliculaire',
              detail:
                'Sous l’effet de modifications enzymatiques et vasculaires locales, la paroi folliculaire et l’albuginée ovarienne se rompent, libérant l’ovocyte II entouré de sa corona radiata dans la cavité péritonéale, à proximité du pavillon tubaire.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Délai entre pic de LH et ovulation',
          texte:
            "L’ovulation survient environ 36 heures après le début de la décharge ovulante de LH, ce qui correspond approximativement à 10 à 12 heures après son pic. Ce délai est utilisé pour la programmation des techniques d’assistance médicale à la procréation.",
        },
      ],
    },
    {
      id: 'corps-jaune',
      titre: 'Le corps jaune',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Après l’ovulation, les cellules de la granulosa restées dans l’ovaire se lutéinisent, s’enrichissent en inclusions lipidiques et se vascularisent activement, formant avec les cellules de la thèque interne le corps jaune. Cette structure sécrète en abondance de la progestérone, et dans une moindre mesure de l’œstradiol.",
        },
        {
          type: 'definition',
          terme: 'Corps jaune',
          definition:
            "Glande endocrine transitoire de l’ovaire, formée après l’ovulation à partir des cellules folliculaires lutéinisées, dont la sécrétion de progestérone prépare et maintient l’endomètre en phase sécrétoire, propice à une éventuelle nidation.",
        },
        {
          type: 'liste',
          items: [
            "En l’absence de fécondation, le corps jaune régresse spontanément après environ 14 jours, faute de stimulation suffisante par la LH : il devient le corps blanc (corpus albicans), tissu cicatriciel fibreux.",
            "En cas de fécondation, l’hCG sécrétée par le trophoblaste, structurellement proche de la LH, maintient et stimule le corps jaune, qui devient le corps jaune gravidique et continue de sécréter la progestérone nécessaire au maintien de la grossesse jusqu’au relais placentaire.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Insuffisance lutéale',
          texte:
            "Une régression prématurée ou une sécrétion insuffisante du corps jaune peut compromettre la réceptivité endométriale et favoriser des fausses couches précoces, ce qui justifie parfois un soutien lutéal par progestérone lors de certaines procréations médicalement assistées.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le stock d’ovocytes I est constitué avant la naissance, bloqués en prophase I (stade diplotène).",
    "La folliculogenèse va du follicule primordial au follicule mûr, avec une phase basale gonadotrophine-indépendante puis une phase FSH-dépendante.",
    "La théorie des deux cellules, deux gonadotrophines explique la sécrétion d’œstrogènes : LH sur la thèque, FSH sur la granulosa.",
    "Le pic de LH lève le premier blocage méiotique et déclenche l’ovulation environ 36 heures plus tard.",
    "L’ovocyte est libéré bloqué en métaphase II ; ce second blocage n’est levé qu’à la fécondation.",
    "La phase folliculaire est de durée variable, la phase lutéale de durée fixe, environ 14 jours.",
    "Le corps jaune sécrète la progestérone qui soutient la phase sécrétoire de l’endomètre, et régresse en l’absence de grossesse.",
  ],
  erreursFrequentes: [
    "Croire que l’ovogenèse produit de nouveaux ovocytes après la naissance : le stock est fixé avant la naissance.",
    "Confondre les deux blocages méiotiques : le premier (prophase I) est levé par le pic de LH, le second (métaphase II) par la fécondation.",
    "Penser que c’est la phase lutéale qui varie en durée d’un cycle à l’autre, alors qu’elle est fixe : c’est la phase folliculaire qui varie.",
    "Oublier que l’ovulation ne survient pas immédiatement mais environ 36 heures après le début du pic de LH.",
    "Attribuer la sécrétion d’œstrogènes à la seule thèque interne : elle synthétise des androgènes, aromatisés en œstrogènes par la granulosa.",
    "Confondre corps jaune et corps blanc : le corps blanc (corpus albicans) est le résultat de la régression fibreuse du corps jaune.",
  ],
  mnemotechniques: [
    {
      moyen: 'Diplotène dort, métaphase II attend le prince',
      explication:
        'Le premier blocage a lieu en prophase I (stade diplotène), pendant de longues années ; le second blocage, en métaphase II, n’est levé que par la fécondation.',
    },
    {
      moyen: '14 + 14 pour un cycle de 28 jours',
      explication:
        'Phase folliculaire variable culminant vers J14, puis phase lutéale fixe d’environ 14 jours : un repère simple pour estimer la date d’ovulation.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-ovogenese-cycle-fc-01',
      recto: 'À quel stade et à quelle phase méiotique l’ovocyte I est-il bloqué avant la puberté ?',
      verso: 'En prophase I de la méiose, au stade diplotène.',
      type: 'chiffre',
      tags: ['blocage méiotique'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-02',
      recto: 'Quel événement lève le premier blocage méiotique ?',
      verso: 'Le pic de LH en milieu de cycle.',
      type: 'mecanisme',
      tags: ['pic de LH'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-03',
      recto: 'À quel stade méiotique est bloqué l’ovocyte libéré lors de l’ovulation ?',
      verso: 'En métaphase de la deuxième division de méiose (métaphase II).',
      type: 'chiffre',
      tags: ['blocage méiotique'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-04',
      recto: 'Citer dans l’ordre les cinq stades de la folliculogenèse.',
      verso: 'Follicule primordial, primaire, secondaire (préantral), tertiaire (antral), mûr (De Graaf).',
      type: 'classification',
      tags: ['folliculogenèse'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-05',
      recto: 'Résumer la théorie des deux cellules, deux gonadotrophines.',
      verso: 'La LH stimule la thèque interne (androgènes), la FSH stimule la granulosa (aromatisation en œstrogènes).',
      type: 'mecanisme',
      tags: ['théorie deux cellules'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-06',
      recto: 'Quelle est la durée habituelle de la phase lutéale ?',
      verso: 'Environ 14 jours, de durée fixe.',
      type: 'chiffre',
      tags: ['cycle ovarien'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-07',
      recto: 'Combien de temps après le début du pic de LH survient l’ovulation ?',
      verso: 'Environ 36 heures.',
      type: 'chiffre',
      tags: ['ovulation'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-08',
      recto: 'Quelles sont les trois phases du cycle utérin ?',
      verso: 'Phase menstruelle, phase proliférative (œstrogéno-dépendante), phase sécrétoire (progestéro-dépendante).',
      type: 'classification',
      tags: ['cycle utérin'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-09',
      recto: 'Comment se forme le corps jaune ?',
      verso: 'Par lutéinisation des cellules de la granulosa et de la thèque interne après l’ovulation.',
      type: 'mecanisme',
      tags: ['corps jaune'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-10',
      recto: 'Que devient le corps jaune en l’absence de fécondation ?',
      verso: 'Il régresse après environ 14 jours et devient le corps blanc (corpus albicans).',
      type: 'mecanisme',
      tags: ['corps jaune'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-11',
      recto: 'Quelle hormone maintient le corps jaune en cas de fécondation ?',
      verso: 'L’hCG, sécrétée par le trophoblaste.',
      type: 'mecanisme',
      tags: ['corps jaune gravidique', 'hCG'],
    },
    {
      id: 'embryo-ovogenese-cycle-fc-12',
      recto: 'Quelle hormone principale sécrète le corps jaune et quel est son rôle sur l’endomètre ?',
      verso: 'La progestérone, qui maintient l’endomètre en phase sécrétoire, propice à la nidation.',
      type: 'mecanisme',
      tags: ['progestérone'],
    },
  ],
  qcm: [
    {
      id: 'embryo-ovogenese-cycle-qcm-01',
      enonce: 'Concernant l’ovogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le stock d’ovocytes I est constitué avant la naissance.', vraie: true, justification: 'Exact, les ovogonies cessent de proliférer par mitose durant la vie fœtale.' },
        { lettre: 'B', texte: 'L’ovocyte I est bloqué en métaphase de la première division de méiose.', vraie: false, justification: 'Il est bloqué en prophase I, au stade diplotène, non en métaphase I.' },
        { lettre: 'C', texte: 'De nouveaux ovocytes sont produits à chaque cycle après la puberté.', vraie: false, justification: 'Aucune nouvelle cellule germinale n’est produite après la vie fœtale ; les follicules recrutés proviennent du stock déjà constitué.' },
        { lettre: 'D', texte: 'Le deuxième blocage méiotique a lieu en métaphase II.', vraie: true, justification: 'Exact, il persiste de l’ovulation jusqu’à la fécondation.' },
        { lettre: 'E', texte: 'En l’absence de fécondation, l’ovocyte II achève spontanément sa méiose.', vraie: false, justification: 'En l’absence de fécondation, l’ovocyte II reste bloqué en métaphase II puis dégénère.' },
      ],
      correction: 'Réponses exactes : A et D. Retenir la localisation précise des deux blocages méiotiques.',
      difficulte: 2,
    },
    {
      id: 'embryo-ovogenese-cycle-qcm-02',
      enonce: 'Concernant la folliculogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le follicule primordial comporte une seule couche de cellules folliculeuses aplaties.', vraie: true, justification: 'Exact, c’est le stade le plus précoce.' },
        { lettre: 'B', texte: 'La zone pellucide apparaît dès le stade primordial.', vraie: false, justification: 'Elle apparaît plus tardivement, au stade secondaire (préantral).' },
        { lettre: 'C', texte: 'L’antrum est une cavité liquidienne du follicule tertiaire.', vraie: true, justification: 'Exact, il définit le stade antral.' },
        { lettre: 'D', texte: 'La thèque interne sécrète des androgènes sous l’effet de la LH.', vraie: true, justification: 'Exact, ces androgènes sont ensuite aromatisés en œstrogènes par la granulosa.' },
        { lettre: 'E', texte: 'Tous les follicules recrutés au cours d’un cycle parviennent à l’ovulation.', vraie: false, justification: 'Un seul follicule devient dominant et ovule ; les autres entrent en atrésie.' },
      ],
      correction: 'Réponses exactes : A, C et D. La sélection du follicule dominant élimine les autres follicules de la cohorte.',
      difficulte: 2,
    },
    {
      id: 'embryo-ovogenese-cycle-qcm-03',
      enonce: 'Concernant le cycle ovarien et le cycle utérin, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phase folliculaire a une durée fixe d’environ 14 jours.', vraie: false, justification: 'C’est la phase lutéale qui a une durée fixe ; la phase folliculaire est de durée variable.' },
        { lettre: 'B', texte: 'La phase sécrétoire de l’endomètre correspond à la phase lutéale ovarienne.', vraie: true, justification: 'Exact, elle est sous la dépendance de la progestérone du corps jaune.' },
        { lettre: 'C', texte: 'La phase proliférative de l’endomètre est œstrogéno-dépendante.', vraie: true, justification: 'Exact, elle correspond à la croissance folliculaire et à la sécrétion d’œstradiol.' },
        { lettre: 'D', texte: 'Les règles marquent le début du cycle par convention.', vraie: true, justification: 'Exact, le premier jour des règles est le jour 1 conventionnel du cycle.' },
        { lettre: 'E', texte: 'La durée totale du cycle dépend principalement de la variabilité de la phase lutéale.', vraie: false, justification: 'C’est la variabilité de la phase folliculaire qui explique la variabilité de la durée totale du cycle.' },
      ],
      correction: 'Réponses exactes : B, C et D. La phase lutéale fixe permet d’estimer la date d’ovulation à rebours des règles suivantes.',
      difficulte: 2,
    },
    {
      id: 'embryo-ovogenese-cycle-qcm-04',
      enonce: 'Concernant le déclenchement de l’ovulation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le pic de LH résulte d’un rétrocontrôle positif de l’œstradiol.', vraie: true, justification: 'Exact, une concentration élevée et soutenue d’œstradiol inverse le sens du rétrocontrôle.' },
        { lettre: 'B', texte: 'Le rétrocontrôle positif nécessite un pic bref d’œstradiol, de quelques minutes.', vraie: false, justification: 'Il nécessite une élévation soutenue pendant environ 48 heures.' },
        { lettre: 'C', texte: 'L’ovulation survient immédiatement au moment du pic de LH.', vraie: false, justification: 'Elle survient avec un délai d’environ 36 heures après le début de la décharge de LH.' },
        { lettre: 'D', texte: 'Le pic de LH permet la reprise de la méiose de l’ovocyte I.', vraie: true, justification: 'Exact, il lève le premier blocage méiotique.' },
        { lettre: 'E', texte: 'L’ovocyte libéré est entouré de la corona radiata.', vraie: true, justification: 'Exact, ces cellules de la granulosa accompagnent l’ovocyte lors de l’ovulation.' },
      ],
      correction: 'Réponses exactes : A, D et E. Le délai entre pic de LH et ovulation est un point fréquemment testé.',
      difficulte: 2,
    },
    {
      id: 'embryo-ovogenese-cycle-qcm-05',
      enonce: 'Concernant le corps jaune, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il se forme à partir du follicule rompu après l’ovulation.', vraie: true, justification: 'Exact, par lutéinisation de la granulosa et de la thèque interne restées dans l’ovaire.' },
        { lettre: 'B', texte: 'Il sécrète principalement de la progestérone.', vraie: true, justification: 'Exact, avec une sécrétion moindre d’œstradiol.' },
        { lettre: 'C', texte: 'En l’absence de grossesse, il persiste indéfiniment.', vraie: false, justification: 'Il régresse après environ 14 jours en l’absence de fécondation, pour devenir le corps blanc.' },
        { lettre: 'D', texte: 'L’hCG maintient le corps jaune en cas de grossesse.', vraie: true, justification: 'Exact, l’hCG relaie l’action de la LH sur le corps jaune devenu gravidique.' },
        { lettre: 'E', texte: 'Le corps blanc (corpus albicans) est un tissu glandulaire actif.', vraie: false, justification: 'Le corps blanc est un tissu cicatriciel fibreux, non fonctionnel.' },
      ],
      correction: 'Réponses exactes : A, B et D. Bien distinguer le corps jaune fonctionnel du corps blanc, cicatriciel.',
      difficulte: 2,
    },
    {
      id: 'embryo-ovogenese-cycle-qcm-06',
      enonce: 'Concernant les corrélations hormonales du cycle, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’œstradiol est sécrété principalement en phase folliculaire.', vraie: true, justification: 'Exact, sa sécrétion croît avec la maturation du follicule dominant.' },
        { lettre: 'B', texte: 'La progestérone est la principale hormone de la phase lutéale.', vraie: true, justification: 'Exact, elle est sécrétée par le corps jaune.' },
        { lettre: 'C', texte: 'La FSH atteint son maximum en phase lutéale.', vraie: false, justification: 'La FSH s’élève surtout en tout début de phase folliculaire, pour recruter la cohorte de follicules ; elle présente un pic modeste concomitant du pic de LH.' },
        { lettre: 'D', texte: 'L’aromatisation des androgènes thécaux en œstrogènes a lieu dans la granulosa.', vraie: true, justification: 'Exact, c’est le second temps de la théorie des deux cellules, deux gonadotrophines.' },
        { lettre: 'E', texte: 'L’inhibine sécrétée par le corps jaune stimule la FSH en phase lutéale.', vraie: false, justification: 'L’inhibine freine la FSH ; associée à la progestérone, elle contribue au maintien d’une FSH basse en phase lutéale.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir la cinétique de la FSH, plus élevée en début de phase folliculaire.',
      difficulte: 3,
    },
  ],
};
