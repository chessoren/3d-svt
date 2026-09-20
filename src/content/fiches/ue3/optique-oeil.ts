import type { Fiche } from '../../types';

export const ficheOptiqueOeil: Fiche = {
  id: 'ue3-optique-oeil',
  ue: 'ue3',
  titre: 'Optique géométrique et œil',
  sousTitre:
    "Réfraction, lentilles, vergence, dioptre, œil réduit, accommodation, amétropies et leur correction",
  chapitre: 'Ondes et rayonnements',
  ordre: 8,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'réfraction',
    'lentille',
    'vergence',
    'dioptre',
    'œil réduit',
    'accommodation',
    'myopie',
    'presbytie',
  ],
  objectifs: [
    "Appliquer les lois de Snell-Descartes pour décrire la réfraction de la lumière.",
    "Calculer la vergence d’une lentille ou d’un dioptre et l’utiliser dans la relation de conjugaison.",
    "Décrire le modèle de l’œil réduit et le mécanisme de l’accommodation.",
    "Distinguer les principales amétropies : myopie, hypermétropie, astigmatisme et presbytie.",
    "Justifier le principe de la correction optique de chaque amétropie.",
  ],
  sections: [
    {
      id: 'refraction',
      titre: 'Réfraction de la lumière',
      blocs: [
        {
          type: 'definition',
          terme: 'Réfraction',
          definition:
            "Changement de direction d’un rayon lumineux lorsqu’il traverse la surface de séparation (dioptre) entre deux milieux transparents d’indices de réfraction différents.",
        },
        {
          type: 'formule',
          expression: 'n1 x sin(i1) = n2 x sin(i2)',
          legende:
            "Loi de Snell-Descartes pour la réfraction : n1 et n2 sont les indices de réfraction des deux milieux, i1 et i2 les angles d’incidence et de réfraction, mesurés par rapport à la normale au dioptre.",
          unites: 'n1 et n2 sans unité, i1 et i2 en degré ou radian',
        },
        {
          type: 'liste',
          items: [
            "L’indice de réfraction n d’un milieu est toujours supérieur ou égal à 1 ; plus il est élevé, plus la lumière y est ralentie et plus le milieu est dit réfringent.",
            "Lorsque la lumière passe d’un milieu moins réfringent vers un milieu plus réfringent (n2 > n1), le rayon réfracté se rapproche de la normale.",
            "Au-delà d’un certain angle d’incidence, lorsque la lumière passe d’un milieu plus réfringent vers un milieu moins réfringent, il se produit une réflexion totale : aucun rayon n’est plus transmis.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Indices de réfraction des milieux oculaires',
          texte:
            "Cornée : environ 1,376. Humeur aqueuse : environ 1,336. Cristallin : environ 1,40 à 1,42 (variable selon son état d’accommodation). Humeur vitrée : environ 1,336. La cornée assure à elle seule la majeure partie du pouvoir réfractif de l’œil, en raison du grand écart d’indice avec l’air.",
        },
      ],
    },
    {
      id: 'lentilles-vergence',
      titre: 'Lentilles minces et vergence',
      blocs: [
        {
          type: 'definition',
          terme: 'Vergence (V)',
          definition:
            "Grandeur qui caractérise le pouvoir convergent (ou divergent) d’une lentille ou d’un dioptre, définie comme l’inverse de la distance focale image.",
        },
        {
          type: 'formule',
          expression: 'V = 1 / f\'',
          legende: "Vergence V d’une lentille, inverse de sa distance focale image f'.",
          unites: 'V en dioptrie (delta ou D), f\' en mètre (m)',
        },
        {
          type: 'formule',
          expression: '1/OA\' - 1/OA = V',
          legende:
            "Relation de conjugaison de Descartes pour une lentille mince : OA est la distance algébrique de l’objet au centre optique O, OA' celle de l’image au centre optique, et V la vergence de la lentille.",
          unites: 'OA et OA\' en mètre (m), V en dioptrie',
        },
        {
          type: 'liste',
          items: [
            "Une lentille convergente a une vergence positive : elle rapproche les rayons lumineux de l’axe optique.",
            "Une lentille divergente a une vergence négative : elle écarte les rayons lumineux de l’axe optique.",
            "Pour plusieurs lentilles minces accolées, la vergence totale du système est égale à la somme algébrique des vergences de chaque lentille : V totale = V1 + V2 + …",
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Pourquoi utiliser la dioptrie plutôt que la distance focale ?',
          texte:
            "L’usage de la vergence, additive pour des lentilles accolées, simplifie grandement le calcul de systèmes optiques composés (comme l’œil ou une paire de lunettes associée au système oculaire), alors que les distances focales ne s’additionnent pas directement.",
        },
      ],
    },
    {
      id: 'oeil-reduit',
      titre: "Le modèle de l’œil réduit",
      blocs: [
        {
          type: 'definition',
          terme: 'Œil réduit (ou œil schématique simplifié)',
          definition:
            "Modèle optique simplifié de l’œil, qui remplace l’ensemble des milieux réfringents (cornée, humeur aqueuse, cristallin, humeur vitrée) par un dioptre sphérique unique, centré sur un axe optique, séparant l’air d’un milieu unique d’indice moyen assimilé à celui de l’humeur vitrée.",
        },
        {
          type: 'paragraphe',
          texte:
            "Dans ce modèle, l’image d’un objet situé à l’infini se forme, pour un œil emmétrope (normal) au repos, exactement sur la rétine, qui joue le rôle d’écran. La vergence totale de l’œil réduit au repos est d’environ 60 dioptries.",
        },
        {
          type: 'tableau',
          titre: 'Répartition approximative de la vergence oculaire',
          colonnes: ['Structure', 'Vergence approximative', 'Part dans la vergence totale'],
          lignes: [
            ['Dioptre cornéen', 'environ 43 dioptries', 'Majoritaire, environ deux tiers'],
            ['Cristallin (au repos)', 'environ 17 à 20 dioptries', 'Variable selon l’accommodation'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Pourquoi la cornée contribue-t-elle le plus à la vergence oculaire ?',
          texte:
            "La vergence d’un dioptre dépend de l’écart d’indice de réfraction entre les deux milieux qu’il sépare. L’écart d’indice entre l’air (n = 1) et la cornée (n environ 1,376) est plus grand que celui entre l’humeur aqueuse et le cristallin, ce qui explique la contribution prépondérante de la cornée à la vergence oculaire totale.",
        },
      ],
    },
    {
      id: 'accommodation',
      titre: 'L’accommodation',
      blocs: [
        {
          type: 'definition',
          terme: 'Accommodation',
          definition:
            "Mécanisme actif par lequel l’œil augmente la vergence de son cristallin, grâce à la contraction du muscle ciliaire qui relâche la tension exercée sur le cristallin par les fibres zonulaires, permettant de faire converger sur la rétine l’image d’un objet rapproché.",
        },
        {
          type: 'definition',
          terme: 'Punctum remotum (PR)',
          definition:
            "Point le plus éloigné vu net par un œil sans aucune accommodation. Il est situé à l’infini pour un œil emmétrope.",
        },
        {
          type: 'definition',
          terme: 'Punctum proximum (PP)',
          definition:
            "Point le plus rapproché vu net par un œil en accommodation maximale. Sa distance à l’œil augmente progressivement avec l’âge.",
        },
        {
          type: 'formule',
          expression: 'Amplitude d’accommodation = V(PP) - V(PR)',
          legende:
            "L’amplitude d’accommodation, exprimée en dioptries, est la différence entre la vergence nécessaire pour voir net au punctum proximum et celle nécessaire pour voir net au punctum remotum.",
          unites: 'amplitude en dioptries (D)',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Diminution de l’amplitude d’accommodation avec l’âge',
          texte:
            "L’amplitude d’accommodation diminue progressivement avec l’âge en raison de la perte d’élasticité du cristallin, passant d’environ 12 à 14 dioptries chez l’enfant à moins de 2 dioptries après 60 ans : c’est le mécanisme de la presbytie.",
        },
      ],
    },
    {
      id: 'ametropies',
      titre: 'Les amétropies',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une amétropie est un défaut optique de l’œil, sphérique ou non, qui empêche la formation d’une image nette sur la rétine pour un œil au repos regardant un objet à l’infini.",
        },
        {
          type: 'tableau',
          titre: 'Les principales amétropies sphériques et cylindriques',
          colonnes: ['Amétropie', 'Mécanisme', 'Position de l’image d’un objet à l’infini (œil au repos)', 'Correction'],
          lignes: [
            ['Myopie', 'Œil trop convergent ou trop long (axe antéro-postérieur augmenté)', 'En avant de la rétine', 'Lentille divergente (vergence négative)'],
            ['Hypermétropie', 'Œil pas assez convergent ou trop court', 'En arrière de la rétine (virtuellement)', 'Lentille convergente (vergence positive)'],
            ['Astigmatisme', 'Dioptre cornéen non parfaitement sphérique (courbure variable selon les méridiens)', 'Point n’a pas d’image ponctuelle unique', 'Lentille cylindrique ou torique'],
            ['Presbytie', 'Perte d’élasticité du cristallin liée à l’âge, diminution de l’amplitude d’accommodation', 'Vision de près altérée (vision de loin non affectée en l’absence d’autre amétropie)', 'Lentille convergente pour la vision de près (verres progressifs ou addition)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Myope et hypermétrope : bien mémoriser le sens de correction',
          texte:
            "Le myope voit flou de loin car l’image se forme en avant de la rétine : il faut diverger les rayons avant leur entrée dans l’œil, donc une lentille divergente (vergence négative). L’hypermétrope, à l’inverse, nécessite un supplément de convergence, donc une lentille convergente (vergence positive).",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'La presbytie n’est pas une amétropie au sens strict',
          texte:
            "Contrairement à la myopie, l’hypermétropie et l’astigmatisme, qui sont des défauts optiques de l’œil au repos, la presbytie résulte d’une perte physiologique et progressive de la capacité d’accommodation liée au vieillissement du cristallin. Elle peut s’associer à n’importe quelle autre amétropie, ou survenir chez un sujet jusque-là emmétrope.",
        },
      ],
    },
  ],
  pointsCles: [
    "La réfraction obéit à la loi de Snell-Descartes : n1 x sin(i1) = n2 x sin(i2).",
    "La vergence, inverse de la distance focale image, s’exprime en dioptries et s’additionne pour des lentilles accolées.",
    "L’œil réduit modélise l’œil par un dioptre sphérique unique, de vergence totale d’environ 60 dioptries au repos.",
    "La cornée assure la majeure partie de la vergence oculaire, le cristallin assurant la part variable liée à l’accommodation.",
    "L’accommodation, par contraction du muscle ciliaire, augmente la vergence du cristallin pour la vision de près.",
    "La myopie se corrige par une lentille divergente, l’hypermétropie par une lentille convergente.",
    "La presbytie, liée à la perte d’élasticité du cristallin avec l’âge, altère la vision de près et se corrige par un supplément de convergence.",
  ],
  erreursFrequentes: [
    "Inverser le sens de correction de la myopie et de l’hypermétropie.",
    "Croire que la presbytie est une amétropie sphérique classique alors qu’elle résulte d’une perte de la capacité d’accommodation liée à l’âge.",
    "Oublier que les vergences s’additionnent algébriquement pour des lentilles accolées, mais pas les distances focales.",
    "Confondre punctum remotum (vision de loin sans accommodation) et punctum proximum (vision de près en accommodation maximale).",
    "Penser que l’astigmatisme se corrige par une lentille sphérique classique, alors qu’il nécessite une lentille cylindrique ou torique.",
    "Oublier que la cornée, et non le cristallin, assure la majeure partie de la vergence totale de l’œil.",
  ],
  mnemotechniques: [
    {
      moyen: '« Myope = Minus, concave, divergente »',
      explication:
        "Le myope corrige son défaut avec un verre de vergence négative (minus), de forme concave, divergente.",
    },
    {
      moyen: '« Hypermétrope = a besoin d’un Plus »',
      explication:
        "L’hypermétrope corrige son défaut avec un verre de vergence positive (plus), convergente.",
    },
    {
      moyen: '« PP proche, PR loin »',
      explication:
        "Le punctum proximum (PP) est le point le plus proche vu net, le punctum remotum (PR) le point le plus éloigné vu net sans accommodation.",
    },
  ],
  sources: [
    'Physique et biophysique, collection PASS/LAS, éditions Ellipses',
    'Biophysique générale, UE3, collection Med-Line',
    'Précis d’ophtalmologie, collection Med-Line',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue3-optique-oeil-fc-01',
      recto: 'Écrire la loi de Snell-Descartes pour la réfraction.',
      verso: 'n1 x sin(i1) = n2 x sin(i2).',
      type: 'formule',
      tags: ['réfraction'],
    },
    {
      id: 'ue3-optique-oeil-fc-02',
      recto: 'Définir la vergence d’une lentille et son unité.',
      verso: 'V = 1/f\', inverse de la distance focale image ; elle s’exprime en dioptrie.',
      type: 'formule',
      tags: ['vergence'],
    },
    {
      id: 'ue3-optique-oeil-fc-03',
      recto: 'Comment calcule-t-on la vergence totale de plusieurs lentilles minces accolées ?',
      verso: 'En additionnant algébriquement leurs vergences : V totale = V1 + V2 + …',
      type: 'formule',
      tags: ['vergence'],
    },
    {
      id: 'ue3-optique-oeil-fc-04',
      recto: 'Quelle est la vergence totale approximative de l’œil réduit au repos ?',
      verso: 'Environ 60 dioptries.',
      type: 'chiffre',
      tags: ['œil réduit'],
    },
    {
      id: 'ue3-optique-oeil-fc-05',
      recto: 'Quelle structure oculaire contribue le plus à la vergence totale de l’œil ?',
      verso: 'La cornée, avec environ 43 dioptries, en raison du grand écart d’indice de réfraction avec l’air.',
      type: 'chiffre',
      tags: ['œil réduit'],
    },
    {
      id: 'ue3-optique-oeil-fc-06',
      recto: 'Qu’est-ce que l’accommodation ?',
      verso: 'Mécanisme actif d’augmentation de la vergence du cristallin, par contraction du muscle ciliaire, pour voir net un objet rapproché.',
      type: 'definition',
      tags: ['accommodation'],
    },
    {
      id: 'ue3-optique-oeil-fc-07',
      recto: 'Définir le punctum remotum et le punctum proximum.',
      verso: 'Punctum remotum : point le plus éloigné vu net sans accommodation. Punctum proximum : point le plus rapproché vu net en accommodation maximale.',
      type: 'definition',
      tags: ['accommodation'],
    },
    {
      id: 'ue3-optique-oeil-fc-08',
      recto: 'Où se forme l’image d’un objet à l’infini chez un myope, œil au repos ?',
      verso: 'En avant de la rétine.',
      type: 'clinique',
      tags: ['myopie'],
    },
    {
      id: 'ue3-optique-oeil-fc-09',
      recto: 'Quel type de lentille corrige la myopie ?',
      verso: 'Une lentille divergente, de vergence négative.',
      type: 'clinique',
      tags: ['myopie'],
    },
    {
      id: 'ue3-optique-oeil-fc-10',
      recto: 'Quel type de lentille corrige l’hypermétropie ?',
      verso: 'Une lentille convergente, de vergence positive.',
      type: 'clinique',
      tags: ['hypermétropie'],
    },
    {
      id: 'ue3-optique-oeil-fc-11',
      recto: 'Quel est le mécanisme de la presbytie ?',
      verso: 'La perte d’élasticité du cristallin liée à l’âge, qui diminue progressivement l’amplitude d’accommodation et altère la vision de près.',
      type: 'clinique',
      tags: ['presbytie'],
    },
    {
      id: 'ue3-optique-oeil-fc-12',
      recto: 'Quel type de lentille corrige l’astigmatisme ?',
      verso: 'Une lentille cylindrique ou torique, adaptée au défaut de courbure non sphérique du dioptre cornéen.',
      type: 'clinique',
      tags: ['astigmatisme'],
    },
  ],
  qcm: [
    {
      id: 'ue3-optique-oeil-qcm-01',
      enonce: 'Concernant la réfraction de la lumière, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La loi de Snell-Descartes relie les angles d’incidence et de réfraction aux indices des deux milieux.',
          vraie: true,
          justification: 'Exact : n1 x sin(i1) = n2 x sin(i2).',
        },
        {
          lettre: 'B',
          texte: 'Un milieu d’indice de réfraction élevé est dit peu réfringent.',
          vraie: false,
          justification: "C’est l’inverse : plus l’indice est élevé, plus le milieu est réfringent (la lumière y est plus ralentie).",
        },
        {
          lettre: 'C',
          texte: 'Le passage d’un milieu moins réfringent vers un milieu plus réfringent rapproche le rayon réfracté de la normale.',
          vraie: true,
          justification: "Exact, conséquence directe de la loi de Snell-Descartes.",
        },
        {
          lettre: 'D',
          texte: 'La réflexion totale peut se produire lorsque la lumière passe d’un milieu plus réfringent vers un milieu moins réfringent.',
          vraie: true,
          justification: "Exact, au-delà d’un angle d’incidence limite.",
        },
        {
          lettre: 'E',
          texte: 'L’indice de réfraction d’un milieu peut être inférieur à 1.',
          vraie: false,
          justification: "L’indice de réfraction d’un milieu transparent usuel est toujours supérieur ou égal à 1 (celui du vide).",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-optique-oeil-qcm-02',
      enonce: 'Concernant la vergence et les lentilles minces, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une lentille convergente a une vergence positive.',
          vraie: true,
          justification: 'Exact, par convention.',
        },
        {
          lettre: 'B',
          texte: 'La vergence s’exprime en mètre.',
          vraie: false,
          justification: "Elle s’exprime en dioptrie, inverse d’une distance focale exprimée en mètre.",
        },
        {
          lettre: 'C',
          texte: 'Pour deux lentilles minces accolées, la vergence totale est la somme des vergences de chaque lentille.',
          vraie: true,
          justification: 'Exact : V totale = V1 + V2.',
        },
        {
          lettre: 'D',
          texte: 'Une lentille divergente a une distance focale image négative.',
          vraie: true,
          justification: "Exact, sa vergence étant négative, sa distance focale image l’est également.",
        },
        {
          lettre: 'E',
          texte: 'La distance focale d’une lentille de vergence 2 dioptries est de 2 mètres.',
          vraie: false,
          justification: 'La distance focale est l’inverse de la vergence : 1/2 = 0,5 mètre, et non 2 mètres.',
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-optique-oeil-qcm-03',
      enonce: 'Concernant le modèle de l’œil réduit, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’œil réduit modélise l’œil par un dioptre sphérique unique.',
          vraie: true,
          justification: 'Exact, c’est la simplification centrale de ce modèle.',
        },
        {
          lettre: 'B',
          texte: 'La vergence totale de l’œil réduit au repos est d’environ 60 dioptries.',
          vraie: true,
          justification: 'Exact, valeur usuelle admise.',
        },
        {
          lettre: 'C',
          texte: 'Le cristallin contribue davantage à la vergence oculaire totale que la cornée.',
          vraie: false,
          justification: "C’est l’inverse : la cornée contribue davantage (environ 43 dioptries) que le cristallin au repos (environ 17 à 20 dioptries).",
        },
        {
          lettre: 'D',
          texte: 'Chez un œil emmétrope au repos, l’image d’un objet à l’infini se forme sur la rétine.',
          vraie: true,
          justification: 'Exact, c’est la définition même de l’emmétropie.',
        },
        {
          lettre: 'E',
          texte: 'La vergence de la cornée est plus élevée car l’écart d’indice avec l’air est plus important qu’entre les autres milieux oculaires.',
          vraie: true,
          justification: "Exact, la vergence d’un dioptre dépend de l’écart d’indice entre les deux milieux qu’il sépare.",
        },
      ],
      correction: 'Réponses exactes : A, B, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-optique-oeil-qcm-04',
      enonce: 'Concernant l’accommodation, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’accommodation augmente la vergence du cristallin.',
          vraie: true,
          justification: 'Exact, par contraction du muscle ciliaire.',
        },
        {
          lettre: 'B',
          texte: 'Le punctum proximum est le point le plus éloigné vu net sans accommodation.',
          vraie: false,
          justification: "C’est la définition du punctum remotum ; le punctum proximum est le point le plus rapproché vu net en accommodation maximale.",
        },
        {
          lettre: 'C',
          texte: 'L’amplitude d’accommodation diminue avec l’âge.',
          vraie: true,
          justification: 'Exact, en raison de la perte d’élasticité progressive du cristallin.',
        },
        {
          lettre: 'D',
          texte: 'Pour un œil emmétrope, le punctum remotum est situé à l’infini.',
          vraie: true,
          justification: "Exact, c’est une caractéristique de l’emmétropie.",
        },
        {
          lettre: 'E',
          texte: 'L’amplitude d’accommodation reste stable tout au long de la vie.',
          vraie: false,
          justification: "Elle diminue progressivement avec l’âge, c’est le mécanisme de la presbytie.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue3-optique-oeil-qcm-05',
      enonce: 'Concernant la myopie et l’hypermétropie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Chez le myope, l’image d’un objet à l’infini se forme en avant de la rétine.',
          vraie: true,
          justification: "Exact, l’œil myope est trop convergent ou trop long.",
        },
        {
          lettre: 'B',
          texte: 'La myopie se corrige par une lentille convergente.',
          vraie: false,
          justification: "Elle se corrige par une lentille divergente, de vergence négative, pour compenser l’excès de convergence.",
        },
        {
          lettre: 'C',
          texte: 'L’hypermétropie se corrige par une lentille convergente.',
          vraie: true,
          justification: "Exact, pour compenser le manque de convergence de l’œil hypermétrope.",
        },
        {
          lettre: 'D',
          texte: 'L’hypermétrope a généralement un œil trop long.',
          vraie: false,
          justification: "C’est le contraire : l’hypermétropie est souvent liée à un œil trop court ou pas assez convergent ; c’est la myopie axile qui est liée à un œil trop long.",
        },
        {
          lettre: 'E',
          texte: 'L’astigmatisme se corrige par une lentille cylindrique ou torique.',
          vraie: true,
          justification: "Exact, en raison du défaut de courbure non sphérique du dioptre cornéen.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue3-optique-oeil-qcm-06',
      enonce: 'Concernant la presbytie, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La presbytie est due à une perte d’élasticité du cristallin liée à l’âge.',
          vraie: true,
          justification: 'Exact, c’est le mécanisme physiopathologique principal.',
        },
        {
          lettre: 'B',
          texte: 'La presbytie est une amétropie sphérique au même titre que la myopie.',
          vraie: false,
          justification: "Non, la presbytie résulte d’une perte de la capacité d’accommodation, et non d’un défaut optique de l’œil au repos.",
        },
        {
          lettre: 'C',
          texte: 'La presbytie altère principalement la vision de près.',
          vraie: true,
          justification: "Exact, en raison de la diminution de l’amplitude d’accommodation.",
        },
        {
          lettre: 'D',
          texte: 'La presbytie ne peut jamais s’associer à une autre amétropie comme la myopie.',
          vraie: false,
          justification: "Elle peut au contraire s’associer à n’importe quelle autre amétropie, y compris chez un sujet myope ou hypermétrope.",
        },
        {
          lettre: 'E',
          texte: 'La correction de la presbytie repose sur un supplément de vergence positive pour la vision de près.',
          vraie: true,
          justification: "Exact, c’est le principe des verres à addition ou des verres progressifs.",
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
  ],
};
