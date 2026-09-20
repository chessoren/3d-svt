import type { Fiche } from '../../types';

export const ficheSpermatogenese: Fiche = {
  id: 'embryo-spermatogenese',
  ue: 'embryo',
  titre: 'La spermatogenèse',
  sousTitre: 'Du tube séminifère au spermatozoïde mature',
  chapitre: 'Reproduction et fécondation',
  ordre: 2,
  duree: 25,
  difficulte: 2,
  motsCles: [
    'tube séminifère',
    'cellule de Sertoli',
    'cellule de Leydig',
    'spermatocyte',
    'spermiogenèse',
    'acrosome',
    'flagelle',
    'spermogramme',
  ],
  objectifs: [
    "Décrire l’organisation histologique du tube séminifère et le rôle des cellules de Sertoli et de Leydig.",
    "Détailler les étapes cellulaires de la spermatogenèse, de la spermatogonie au spermatozoïde.",
    "Expliquer les transformations morphologiques de la spermiogenèse.",
    "Connaître la durée totale de la spermatogenèse et son intérêt clinique.",
    "Décrire la structure du spermatozoïde mature et les grands paramètres du spermogramme.",
  ],
  sections: [
    {
      id: 'organisation-tube-seminifere',
      titre: 'Organisation du tube séminifère',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le testicule est constitué de lobules contenant chacun un à quatre tubes séminifères, longs tubes pelotonnés au sein desquels se déroule la spermatogenèse. L’épithélium séminifère associe deux populations cellulaires : les cellules germinales, à différents stades de maturation, et les cellules de Sertoli, cellules somatiques de soutien.",
        },
        {
          type: 'definition',
          terme: 'Cellule de Sertoli',
          definition:
            "Cellule somatique haute, reposant sur la membrane basale du tube séminifère et s’étendant jusqu’à la lumière. Des jonctions serrées entre cellules de Sertoli adjacentes constituent la barrière hémato-testiculaire, qui isole les cellules germinales les plus avancées (compartiment adluminal) du milieu interne (compartiment basal).",
        },
        {
          type: 'liste',
          items: [
            'Les cellules de Sertoli nourrissent et soutiennent les cellules germinales tout au long de leur maturation.',
            "Elles sécrètent l’ABP (androgen binding protein), qui concentre la testostérone dans la lumière du tube séminifère.",
            "Elles sécrètent l’inhibine B, qui freine spécifiquement la sécrétion hypophysaire de FSH.",
            "Elles phagocytent les corps résiduels issus de la spermiogenèse.",
            "Elles portent les récepteurs à la FSH : c’est par leur intermédiaire que la FSH stimule la spermatogenèse.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Cellule de Leydig',
          texte:
            "Située dans le tissu interstitiel, entre les tubes séminifères, la cellule de Leydig sécrète la testostérone sous le contrôle de la LH. Cette testostérone agit à la fois localement, sur l’épithélium séminifère via l’ABP sertolienne, et à distance, sur l’ensemble de l’organisme.",
        },
      ],
    },
    {
      id: 'etapes-cellulaires',
      titre: 'Les étapes cellulaires de la spermatogenèse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La spermatogenèse comprend trois phases successives : une phase de multiplication (mitoses des spermatogonies), une phase de méiose (spermatocytes) et une phase de différenciation morphologique sans division, la spermiogenèse (spermatides puis spermatozoïdes).",
        },
        {
          type: 'etapes',
          titre: 'De la spermatogonie au spermatozoïde',
          etapes: [
            {
              titre: 'Spermatogonies',
              detail:
                "Cellules souches diploïdes situées contre la membrane basale. Les spermatogonies de type A assurent le renouvellement du stock de cellules souches ; les spermatogonies de type B s’engagent dans la différenciation et se divisent en spermatocytes I.",
            },
            {
              titre: 'Spermatocytes I',
              detail:
                "Cellules diploïdes qui entament la première division de méiose, longue (prophase I prolongée), et donnent chacune deux spermatocytes II haploïdes.",
            },
            {
              titre: 'Spermatocytes II',
              detail:
                'Cellules haploïdes à ADN dupliqué, qui réalisent rapidement la deuxième division de méiose et donnent chacune deux spermatides.',
            },
            {
              titre: 'Spermatides',
              detail:
                'Cellules haploïdes, rondes, qui ne se divisent plus et se différencient morphologiquement en spermatozoïdes au cours de la spermiogenèse.',
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Ploïdie et compartiment tissulaire',
          colonnes: ['Cellule', 'Ploïdie', 'Compartiment du tube séminifère'],
          lignes: [
            ['Spermatogonie', 'Diploïde (2n, ADN 2c)', 'Compartiment basal'],
            ['Spermatocyte I', 'Diploïde (2n, ADN 4c après réplication)', 'Franchit la barrière hémato-testiculaire'],
            ['Spermatocyte II', 'Haploïde (n, ADN 2c)', 'Compartiment adluminal'],
            ['Spermatide', 'Haploïde (n, ADN 1c)', 'Compartiment adluminal, proche de la lumière'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Franchissement de la barrière hémato-testiculaire',
          texte:
            "Les spermatogonies et les spermatocytes I au tout début de leur différenciation sont situés dans le compartiment basal, à l’abri de tout contact avec le système immunitaire. Le franchissement des jonctions serrées inter-Sertoli a lieu au stade spermatocyte I, ce qui permet la poursuite de la méiose dans le compartiment adluminal, protégé des cellules immunitaires susceptibles de reconnaître ces cellules haploïdes comme étrangères.",
        },
      ],
    },
    {
      id: 'spermiogenese',
      titre: 'La spermiogenèse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La spermiogenèse est la différenciation morphologique de la spermatide, ronde, en spermatozoïde, cellule allongée et mobile, sans qu’il y ait de nouvelle division cellulaire.",
        },
        {
          type: 'liste',
          items: [
            "Formation de l’acrosome à partir de l’appareil de Golgi : vésicule coiffant le pôle antérieur du noyau, contenant des enzymes hydrolytiques utiles à la traversée des enveloppes ovocytaires.",
            'Condensation extrême de la chromatine nucléaire, avec remplacement partiel des histones par des protamines.',
            'Migration des mitochondries, qui s’organisent en hélice autour de la pièce intermédiaire du flagelle.',
            'Mise en place du flagelle à partir du centriole distal, selon une architecture axonémique en neuf doublets périphériques de microtubules entourant une paire centrale.',
            "Élimination de l’essentiel du cytoplasme sous forme de corps résiduels, phagocytés par les cellules de Sertoli.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Spermiogenèse et méiose',
          texte:
            "Ne pas confondre spermiogenèse et méiose : la spermiogenèse succède à la méiose et ne comporte aucune division cellulaire ni aucun brassage génétique. C’est une différenciation morphologique pure.",
        },
      ],
    },
    {
      id: 'duree-et-structure',
      titre: 'Durée du cycle et structure du spermatozoïde mature',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La durée totale de la spermatogenèse, de la spermatogonie de type B au spermatozoïde libéré dans la lumière du tube séminifère (spermiation), est d’environ 74 jours chez l’homme. À ce délai s’ajoute un transit épididymaire de l’ordre de deux semaines, nécessaire à l’acquisition de la mobilité et à une maturation complémentaire des spermatozoïdes.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Chiffre à retenir',
          texte:
            "Durée totale de la spermatogenèse : environ 74 jours. Ce délai explique pourquoi l’effet d’une agression testiculaire (fièvre, toxique, chimiothérapie) sur la qualité du sperme n’est objectivable sur un spermogramme que plusieurs semaines à plusieurs mois plus tard.",
        },
        {
          type: 'tableau',
          titre: 'Structure du spermatozoïde mature',
          colonnes: ['Région', 'Contenu', 'Fonction'],
          lignes: [
            ['Tête', 'Noyau très condensé, coiffé de l’acrosome', 'Apport du matériel génétique paternel et des enzymes de pénétration'],
            ['Pièce intermédiaire', 'Mitochondries disposées en hélice autour de l’axonème', 'Production d’ATP pour la mobilité flagellaire'],
            ['Flagelle (pièce principale et terminale)', 'Axonème en organisation 9 + 2', 'Mobilité par battements du flagelle'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Le spermogramme évalue plusieurs paramètres du sperme éjaculé : volume, concentration et numération totale des spermatozoïdes, mobilité (totale et progressive), vitalité et pourcentage de formes typiques. Ces paramètres sont comparés à des valeurs de référence établies par l’Organisation mondiale de la santé.",
        },
      ],
    },
    {
      id: 'regulation-clinique',
      titre: 'Régulation hormonale et corrélations cliniques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La spermatogenèse est sous double contrôle hormonal : la FSH agit sur les cellules de Sertoli et soutient la progression des étapes germinales, tandis que la LH agit sur les cellules de Leydig et assure, via la testostérone intratesticulaire concentrée par l’ABP, un environnement hormonal indispensable à la méiose et à la spermiogenèse.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Azoospermie et exploration',
          texte:
            "Une azoospermie (absence de spermatozoïdes dans l’éjaculat) peut être d’origine sécrétoire, par atteinte du tube séminifère lui-même, ou excrétoire, par obstacle sur les voies génitales en amont d’une spermatogenèse conservée. Le dosage de la FSH, élevé en cas d’atteinte sécrétoire sévère par perte du rétrocontrôle de l’inhibine B, oriente vers l’une ou l’autre origine.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir l’ordre des étapes',
          texte:
            "Spermatogonie (mitoses) puis spermatocyte I (méiose I) puis spermatocyte II (méiose II, brève) puis spermatide (spermiogenèse) puis spermatozoïde. Seule la spermatogonie est diploïde et mitotique ; à partir du spermatocyte I, la cellule est engagée dans la méiose.",
        },
      ],
    },
  ],
  pointsCles: [
    "La spermatogenèse se déroule dans le tube séminifère, au sein de l’épithélium formé par les cellules germinales et les cellules de Sertoli.",
    "Les cellules de Sertoli forment la barrière hémato-testiculaire, sécrètent l’ABP et l’inhibine B, et répondent à la FSH.",
    "Les cellules de Leydig, interstitielles, sécrètent la testostérone sous contrôle de la LH.",
    "La spermatogenèse comprend trois phases : multiplication (spermatogonies), méiose (spermatocytes I et II), spermiogenèse (spermatides).",
    "La spermiogenèse est une différenciation morphologique sans division : acrosome, condensation nucléaire, mise en place du flagelle, élimination du cytoplasme.",
    "La durée totale de la spermatogenèse est d’environ 74 jours, suivie d’un transit épididymaire d’environ deux semaines.",
    "Le spermatozoïde mature comporte une tête, une pièce intermédiaire riche en mitochondries et un flagelle d’organisation axonémique 9 + 2.",
  ],
  erreursFrequentes: [
    "Confondre spermiogenèse et spermatogenèse : la spermiogenèse est la seule dernière étape, sans division cellulaire.",
    "Penser que la FSH agit directement sur les cellules germinales : elle agit sur les cellules de Sertoli, qui relaient son effet.",
    "Oublier que le spermatocyte II est une cellule haploïde, déjà issue de la première division méiotique.",
    "Situer la sécrétion de testostérone dans le tube séminifère : elle a lieu dans le tissu interstitiel, par les cellules de Leydig.",
    "Négliger le délai de 74 jours pour interpréter l’effet différé d’une agression testiculaire sur le spermogramme.",
  ],
  mnemotechniques: [
    {
      moyen: 'Sertoli soutient, Leydig sécrète la testostérone',
      explication:
        'Moyen simple de retenir la fonction de soutien et de barrière de la cellule de Sertoli, distincte de la fonction stéroïdogène de la cellule de Leydig.',
    },
    {
      moyen: '74 jours, comme un trimestre et demi',
      explication:
        'Associer la durée totale de la spermatogenèse à un ordre de grandeur d’environ deux mois et demi facilite sa mémorisation.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-spermatogenese-fc-01',
      recto: 'Où se déroule la spermatogenèse ?',
      verso: 'Dans l’épithélium séminifère des tubes séminifères du testicule.',
      type: 'definition',
      tags: ['tube séminifère'],
    },
    {
      id: 'embryo-spermatogenese-fc-02',
      recto: 'Quel est le rôle de la barrière hémato-testiculaire ?',
      verso: 'Isoler les cellules germinales haploïdes, potentiellement immunogènes, du système immunitaire.',
      type: 'mecanisme',
      tags: ['Sertoli', 'barrière hémato-testiculaire'],
    },
    {
      id: 'embryo-spermatogenese-fc-03',
      recto: 'Quelle cellule sécrète l’ABP et l’inhibine B ?',
      verso: 'La cellule de Sertoli.',
      type: 'definition',
      tags: ['Sertoli'],
    },
    {
      id: 'embryo-spermatogenese-fc-04',
      recto: 'Quelle cellule sécrète la testostérone et sous le contrôle de quelle hormone ?',
      verso: 'La cellule de Leydig, sous le contrôle de la LH.',
      type: 'mecanisme',
      tags: ['Leydig', 'testostérone'],
    },
    {
      id: 'embryo-spermatogenese-fc-05',
      recto: 'Quelle cellule est la première cellule haploïde de la lignée germinale mâle ?',
      verso: 'Le spermatocyte II, issu de la première division de méiose.',
      type: 'definition',
      tags: ['méiose', 'ploïdie'],
    },
    {
      id: 'embryo-spermatogenese-fc-06',
      recto: 'Que produisent les deux divisions successives d’un spermatocyte I ?',
      verso: 'Quatre spermatides haploïdes (deux spermatocytes II, puis quatre spermatides).',
      type: 'mecanisme',
      tags: ['méiose'],
    },
    {
      id: 'embryo-spermatogenese-fc-07',
      recto: 'Citer trois transformations de la spermiogenèse.',
      verso: 'Formation de l’acrosome, condensation du noyau, mise en place du flagelle (ou élimination du cytoplasme).',
      type: 'mecanisme',
      tags: ['spermiogenèse'],
    },
    {
      id: 'embryo-spermatogenese-fc-08',
      recto: 'À partir de quel organite se forme l’acrosome ?',
      verso: 'L’appareil de Golgi de la spermatide.',
      type: 'mecanisme',
      tags: ['acrosome'],
    },
    {
      id: 'embryo-spermatogenese-fc-09',
      recto: 'Quelle est la durée totale de la spermatogenèse chez l’homme ?',
      verso: 'Environ 74 jours.',
      type: 'chiffre',
      tags: ['durée'],
    },
    {
      id: 'embryo-spermatogenese-fc-10',
      recto: 'Comment sont organisées les mitochondries dans le spermatozoïde mature ?',
      verso: 'En hélice autour de l’axonème, dans la pièce intermédiaire du flagelle.',
      type: 'definition',
      tags: ['spermatozoïde'],
    },
    {
      id: 'embryo-spermatogenese-fc-11',
      recto: 'Que devient le cytoplasme excédentaire de la spermatide ?',
      verso: 'Il est éliminé sous forme de corps résiduels, phagocytés par les cellules de Sertoli.',
      type: 'mecanisme',
      tags: ['spermiogenèse'],
    },
    {
      id: 'embryo-spermatogenese-fc-12',
      recto: 'Citer trois paramètres évalués par un spermogramme.',
      verso: 'Concentration, mobilité et vitalité des spermatozoïdes (ou volume, numération totale, formes typiques).',
      type: 'clinique',
      tags: ['spermogramme'],
    },
  ],
  qcm: [
    {
      id: 'embryo-spermatogenese-qcm-01',
      enonce: 'Concernant la cellule de Sertoli, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle sécrète la testostérone.', vraie: false, justification: 'C’est la cellule de Leydig qui sécrète la testostérone.' },
        { lettre: 'B', texte: 'Elle forme la barrière hémato-testiculaire.', vraie: true, justification: 'Exact, par des jonctions serrées entre cellules de Sertoli adjacentes.' },
        { lettre: 'C', texte: 'Elle porte les récepteurs à la FSH.', vraie: true, justification: 'Exact, la FSH agit sur la spermatogenèse par son intermédiaire.' },
        { lettre: 'D', texte: 'Elle est une cellule germinale.', vraie: false, justification: 'C’est une cellule somatique de soutien, non une cellule germinale.' },
        { lettre: 'E', texte: 'Elle phagocyte les corps résiduels de la spermiogenèse.', vraie: true, justification: 'Exact, l’un de ses rôles au cours de la spermiogenèse.' },
      ],
      correction: 'Réponses exactes : B, C et E. La cellule de Sertoli est une cellule de soutien, non stéroïdogène pour la testostérone.',
      difficulte: 2,
    },
    {
      id: 'embryo-spermatogenese-qcm-02',
      enonce: 'Concernant les étapes cellulaires de la spermatogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La spermatogonie est une cellule haploïde.', vraie: false, justification: 'La spermatogonie est diploïde ; l’haploïdie apparaît après la première division de méiose.' },
        { lettre: 'B', texte: 'Le spermatocyte I réalise la première division de méiose.', vraie: true, justification: 'Exact, il donne deux spermatocytes II haploïdes.' },
        { lettre: 'C', texte: 'Le spermatocyte II réalise une deuxième division de méiose rapide.', vraie: true, justification: 'Exact, contrairement à la longue prophase I du spermatocyte I.' },
        { lettre: 'D', texte: 'La spermatide se divise encore une fois avant de devenir spermatozoïde.', vraie: false, justification: 'La spermatide ne se divise plus ; elle se différencie morphologiquement sans division.' },
        { lettre: 'E', texte: 'Le franchissement de la barrière hémato-testiculaire a lieu au stade spermatocyte I.', vraie: true, justification: 'Exact, ce qui permet la poursuite de la méiose dans le compartiment adluminal.' },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir la diploïdie de la spermatogonie et l’absence de division de la spermatide.',
      difficulte: 2,
    },
    {
      id: 'embryo-spermatogenese-qcm-03',
      enonce: 'Concernant la spermiogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle comporte une division cellulaire supplémentaire.', vraie: false, justification: 'La spermiogenèse est une différenciation morphologique sans aucune division cellulaire.' },
        { lettre: 'B', texte: 'L’acrosome dérive de l’appareil de Golgi.', vraie: true, justification: 'Exact, par accumulation de vésicules golgiennes au pôle antérieur du noyau.' },
        { lettre: 'C', texte: 'Le flagelle se met en place à partir du centriole.', vraie: true, justification: 'Exact, le centriole distal organise l’axonème flagellaire.' },
        { lettre: 'D', texte: 'La chromatine nucléaire se décondense progressivement.', vraie: false, justification: 'Au contraire, la chromatine se condense fortement, avec remplacement partiel des histones par des protamines.' },
        { lettre: 'E', texte: 'La majeure partie du cytoplasme est éliminée sous forme de corps résiduels.', vraie: true, justification: 'Exact, ces corps résiduels sont phagocytés par les cellules de Sertoli.' },
      ],
      correction: 'Réponses exactes : B, C et E. La spermiogenèse est une maturation morphologique, non une division.',
      difficulte: 2,
    },
    {
      id: 'embryo-spermatogenese-qcm-04',
      enonce: 'Concernant la durée et la structure du spermatozoïde mature, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La spermatogenèse dure environ 74 jours.', vraie: true, justification: 'Exact, c’est la durée classiquement retenue chez l’homme.' },
        { lettre: 'B', texte: 'Un transit épididymaire complète la maturation après la spermiation.', vraie: true, justification: 'Exact, d’une durée de l’ordre de deux semaines.' },
        { lettre: 'C', texte: 'Les mitochondries sont réparties dans le noyau de la tête.', vraie: false, justification: 'Les mitochondries sont regroupées dans la pièce intermédiaire du flagelle, non dans la tête.' },
        { lettre: 'D', texte: 'L’axonème flagellaire est organisé en neuf doublets périphériques entourant une paire centrale.', vraie: true, justification: 'Exact, c’est l’organisation classique 9 + 2 des cils et flagelles.' },
        { lettre: 'E', texte: 'L’acrosome se situe dans la pièce intermédiaire.', vraie: false, justification: 'L’acrosome coiffe le pôle antérieur du noyau, dans la tête, et non la pièce intermédiaire.' },
      ],
      correction: 'Réponses exactes : A, B et D. Bien localiser les organites : acrosome et noyau dans la tête, mitochondries dans la pièce intermédiaire.',
      difficulte: 2,
    },
    {
      id: 'embryo-spermatogenese-qcm-05',
      enonce: 'Concernant la régulation hormonale de la spermatogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La LH agit directement sur la cellule de Sertoli.', vraie: false, justification: 'La LH agit sur la cellule de Leydig ; la FSH agit sur la cellule de Sertoli.' },
        { lettre: 'B', texte: 'L’ABP concentre la testostérone dans la lumière du tube séminifère.', vraie: true, justification: 'Exact, elle est sécrétée par la cellule de Sertoli.' },
        { lettre: 'C', texte: 'Une concentration élevée de testostérone intratesticulaire est nécessaire à la spermatogenèse.', vraie: true, justification: 'Exact, la testostérone intratesticulaire est bien plus élevée que la testostérone circulante et indispensable à la méiose.' },
        { lettre: 'D', texte: 'L’inhibine B stimule la sécrétion hypophysaire de FSH.', vraie: false, justification: 'L’inhibine B freine, et non stimule, la sécrétion de FSH.' },
        { lettre: 'E', texte: 'La FSH agit directement sur les spermatogonies sans intermédiaire cellulaire.', vraie: false, justification: 'La FSH agit sur la cellule de Sertoli, qui relaie son effet sur les cellules germinales.' },
      ],
      correction: 'Réponses exactes : B et C. Retenir le rôle intermédiaire de la cellule de Sertoli dans l’action de la FSH.',
      difficulte: 2,
    },
    {
      id: 'embryo-spermatogenese-qcm-06',
      enonce: 'Concernant le spermogramme et ses applications cliniques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le spermogramme évalue la mobilité des spermatozoïdes.', vraie: true, justification: 'Exact, mobilité totale et mobilité progressive sont deux paramètres classiques.' },
        { lettre: 'B', texte: 'Une azoospermie désigne une mobilité nulle des spermatozoïdes.', vraie: false, justification: 'L’azoospermie désigne une absence totale de spermatozoïdes dans l’éjaculat, non un défaut de mobilité.' },
        { lettre: 'C', texte: 'Les valeurs de référence du spermogramme sont établies par l’Organisation mondiale de la santé.', vraie: true, justification: 'Exact, l’OMS publie régulièrement des valeurs de référence actualisées.' },
        { lettre: 'D', texte: 'Un effet toxique testiculaire aigu se traduit immédiatement sur le spermogramme du jour même.', vraie: false, justification: 'Compte tenu du délai de maturation d’environ 74 jours, l’effet n’est visible que plusieurs semaines plus tard.' },
        { lettre: 'E', texte: 'Le spermogramme peut évaluer le pourcentage de formes typiques.', vraie: true, justification: 'Exact, c’est le paramètre de morphologie spermatique.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir le délai physiologique entre agression testiculaire et modification du spermogramme.',
      difficulte: 2,
    },
  ],
};
