import type { Fiche } from '../../types';

export const ficheNeurulation: Fiche = {
  id: 'embryo-neurulation',
  ue: 'embryo',
  titre: 'Neurulation et mise en place du système nerveux',
  sousTitre: 'Plaque neurale, tube neural, crêtes neurales et anomalies de fermeture',
  chapitre: 'Développement embryonnaire',
  ordre: 8,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'plaque neurale',
    'gouttière neurale',
    'tube neural',
    'crêtes neurales',
    'neuropore',
    'spina bifida',
    'anencéphalie',
    'acide folique',
  ],
  objectifs: [
    "Décrire l’induction et la formation de la plaque neurale.",
    "Expliquer la transformation de la plaque neurale en gouttière puis en tube neural.",
    "Décrire l’origine et les principaux dérivés des crêtes neurales.",
    "Situer chronologiquement la fermeture des neuropores antérieur et postérieur.",
    "Connaître les principales anomalies de fermeture du tube neural et leur prévention.",
  ],
  sections: [
    {
      id: 'induction-plaque-neurale',
      titre: 'Induction et formation de la plaque neurale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Sous l’effet de signaux inducteurs émis par la notochorde sous-jacente et par le mésoderme axial, l’ectoderme situé dans l’axe médian dorsal de l’embryon s’épaissit vers le 18e jour de développement et se transforme en plaque neurale, précurseur de l’ensemble du système nerveux central.",
        },
        {
          type: 'definition',
          terme: 'Neurulation',
          definition:
            "Ensemble des processus qui transforment la plaque neurale, épithélium plan, en tube neural, structure cylindrique creuse, précurseur de l’encéphale et de la moelle spinale.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Induction neurale primaire',
          texte:
            "Ce mécanisme, par lequel un tissu (la notochorde et le mésoderme axial) détermine le destin d’un tissu voisin (l’ectoderme sus-jacent), est l’exemple le plus classiquement cité d’induction embryonnaire en embryologie humaine.",
        },
      ],
    },
    {
      id: 'formation-tube-neural',
      titre: 'De la plaque au tube neural',
      blocs: [
        {
          type: 'etapes',
          titre: 'Étapes de la neurulation',
          etapes: [
            {
              titre: 'Plaque neurale',
              detail: 'Épaississement ectodermique médian, en forme de raquette, plus large en avant qu’en arrière, vers J18.',
            },
            {
              titre: 'Gouttière neurale',
              detail:
                'La plaque s’invagine selon une dépression médiane longitudinale, bordée de deux bourrelets neuraux, vers J19-J21.',
            },
            {
              titre: 'Tube neural',
              detail:
                'Les bourrelets neuraux se rapprochent puis fusionnent dans le plan médian dorsal, transformant la gouttière en tube neural, d’abord au niveau du futur rhombencéphale, puis en direction céphalique et caudale.',
            },
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "La fermeture du tube neural ne se fait pas de façon strictement continue d’une extrémité à l’autre : elle débute au niveau cervical vers le 22e jour, puis progresse simultanément vers l’extrémité céphalique et vers l’extrémité caudale, laissant transitoirement ouverts, aux deux pôles, les neuropores antérieur (rostral) et postérieur (caudal).",
        },
        {
          type: 'tableau',
          titre: 'Fermeture des neuropores',
          colonnes: ['Neuropore', 'Extrémité concernée', 'Fermeture (jour de développement approximatif)'],
          lignes: [
            ['Neuropore antérieur (rostral)', 'Extrémité céphalique du tube neural', 'Vers le 25e jour'],
            ['Neuropore postérieur (caudal)', 'Extrémité caudale du tube neural', 'Vers le 27e-28e jour'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le neuropore antérieur se ferme avant le postérieur',
          texte:
            "Retenir que le neuropore antérieur se ferme légèrement avant le neuropore postérieur, avec un décalage de deux à trois jours. Cette asymétrie explique la plus grande fréquence relative des anomalies du neuropore postérieur.",
        },
      ],
    },
    {
      id: 'cretes-neurales',
      titre: 'Les crêtes neurales',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au moment de la fermeture du tube neural, des cellules situées à la jonction entre la plaque neurale et l’ectoderme de surface se détachent de l’épithélium et acquièrent des capacités migratoires importantes : ce sont les cellules des crêtes neurales, dont les dérivés sont extrêmement variés.",
        },
        {
          type: 'tableau',
          titre: 'Principaux dérivés des crêtes neurales',
          colonnes: ['Territoire', 'Dérivés'],
          lignes: [
            ['Système nerveux périphérique', 'Ganglions sensitifs rachidiens et crâniens, ganglions du système nerveux autonome, cellules de Schwann'],
            ['Médullosurrénale', 'Cellules chromaffines sécrétant les catécholamines'],
            ['Peau', 'Mélanocytes'],
            ['Méninges', 'Pie-mère et arachnoïde (méninges molles)'],
            ['Squelette céphalique', 'Cartilages et os de la face et d’une partie du crâne, odontoblastes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Une origine souvent oubliée',
          texte:
            "Les crêtes neurales sont à l’origine d’un ensemble de dérivés très hétérogènes, souvent regroupés sous le terme de « quatrième feuillet » embryonnaire par certains auteurs. Retenir en particulier qu’elles participent largement au squelette de la face, contrairement au squelette du crâne d’origine mésodermique.",
        },
      ],
    },
    {
      id: 'anomalies-fermeture',
      titre: 'Anomalies de fermeture du tube neural',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un défaut de fermeture du tube neural, à l’un ou l’autre de ses pôles, entraîne des malformations congénitales graves, regroupées sous le terme d’anomalies de fermeture du tube neural (AFTN), parmi les malformations congénitales les plus fréquentes du système nerveux central.",
        },
        {
          type: 'comparaison',
          titre: 'Anomalies selon le neuropore concerné',
          gauche: {
            titre: 'Défaut du neuropore postérieur',
            points: [
              'Spina bifida, de sévérité variable',
              'Défaut de fermeture au niveau du rachis, le plus souvent lombo-sacré',
              'Peut s’accompagner d’une protrusion des méninges ou de la moelle (myéloméningocèle)',
            ],
          },
          droite: {
            titre: 'Défaut du neuropore antérieur',
            points: [
              'Anencéphalie',
              'Absence de développement de la voûte crânienne et d’une grande partie de l’encéphale',
              'Malformation incompatible avec la vie prolongée',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Prévention par l’acide folique',
          texte:
            "La supplémentation périconceptionnelle en acide folique (vitamine B9), débutée avant la conception et poursuivie durant le premier trimestre, réduit significativement le risque d’anomalies de fermeture du tube neural. C’est la raison pour laquelle elle est recommandée chez toute femme en âge de procréer et en projet de grossesse.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Fenêtre critique',
          texte:
            "La fermeture complète du tube neural, achevée vers le 27e-28e jour de développement, se situe très précocement, souvent avant que la grossesse ne soit connue : cela justifie une supplémentation en acide folique anticipée, dès le désir de grossesse, plutôt qu’après confirmation du diagnostic.",
        },
      ],
    },
  ],
  pointsCles: [
    "La neurulation transforme la plaque neurale, induite par la notochorde, en tube neural.",
    "La plaque neurale apparaît vers le 18e jour, la gouttière neurale se forme vers J19-J21.",
    "La fermeture du tube neural débute au niveau cervical et progresse vers les deux extrémités.",
    "Le neuropore antérieur se ferme vers le 25e jour, le neuropore postérieur vers le 27e-28e jour.",
    "Les crêtes neurales, issues de la jonction plaque neurale-ectoderme, donnent des dérivés très variés : ganglions, médullosurrénale, mélanocytes, méninges molles, squelette facial.",
    "Un défaut du neuropore postérieur cause un spina bifida ; un défaut du neuropore antérieur cause une anencéphalie.",
    "L’acide folique périconceptionnel réduit le risque d’anomalies de fermeture du tube neural.",
  ],
  erreursFrequentes: [
    "Croire que la fermeture du tube neural progresse d’une seule extrémité à l’autre : elle débute au niveau cervical et progresse dans les deux directions.",
    "Inverser les malformations associées à chaque neuropore : spina bifida pour le neuropore postérieur, anencéphalie pour le neuropore antérieur.",
    "Oublier que les crêtes neurales contribuent au squelette de la face, souvent attribué à tort exclusivement au mésoderme.",
    "Penser que la supplémentation en acide folique est utile seulement après le diagnostic de grossesse : la fermeture du tube neural est déjà achevée à ce moment-là dans la majorité des cas.",
    "Confondre plaque neurale et crêtes neurales : la plaque neurale forme le tube neural lui-même, les crêtes neurales en sont des dérivés migrateurs distincts.",
  ],
  mnemotechniques: [
    {
      moyen: '« Antérieur avant, postérieur après »',
      explication:
        'Le neuropore antérieur se ferme avant (vers J25) le neuropore postérieur (vers J27-28) : l’ordre alphabétique aide à retenir la chronologie.',
    },
    {
      moyen: 'Crêtes neurales, cellules migratrices multitâches',
      explication:
        'Retenir que les crêtes neurales sont des cellules migratrices donnant des dérivés très divers : nerveux, endocrinien, pigmentaire, méningé et squelettique facial.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-neurulation-fc-01',
      recto: 'Quelle structure induit la formation de la plaque neurale ?',
      verso: 'La notochorde (et le mésoderme axial sous-jacent).',
      type: 'mecanisme',
      tags: ['induction neurale'],
    },
    {
      id: 'embryo-neurulation-fc-02',
      recto: 'Vers quel jour apparaît la plaque neurale ?',
      verso: 'Vers le 18e jour de développement.',
      type: 'chiffre',
      tags: ['plaque neurale'],
    },
    {
      id: 'embryo-neurulation-fc-03',
      recto: 'Décrire les étapes de la neurulation.',
      verso: 'Plaque neurale, puis gouttière neurale (bordée de bourrelets neuraux), puis tube neural par fusion dorsale des bourrelets.',
      type: 'mecanisme',
      tags: ['neurulation'],
    },
    {
      id: 'embryo-neurulation-fc-04',
      recto: 'Où débute la fermeture du tube neural ?',
      verso: 'Au niveau cervical, vers le 22e jour, puis elle progresse vers les deux extrémités.',
      type: 'mecanisme',
      tags: ['fermeture du tube neural'],
    },
    {
      id: 'embryo-neurulation-fc-05',
      recto: 'Quand se ferme le neuropore antérieur ?',
      verso: 'Vers le 25e jour de développement.',
      type: 'chiffre',
      tags: ['neuropore antérieur'],
    },
    {
      id: 'embryo-neurulation-fc-06',
      recto: 'Quand se ferme le neuropore postérieur ?',
      verso: 'Vers le 27e-28e jour de développement.',
      type: 'chiffre',
      tags: ['neuropore postérieur'],
    },
    {
      id: 'embryo-neurulation-fc-07',
      recto: 'D’où proviennent les cellules des crêtes neurales ?',
      verso: 'De la jonction entre la plaque neurale et l’ectoderme de surface.',
      type: 'definition',
      tags: ['crêtes neurales'],
    },
    {
      id: 'embryo-neurulation-fc-08',
      recto: 'Citer deux dérivés des crêtes neurales.',
      verso: 'Les ganglions sensitifs rachidiens et les mélanocytes (ou la médullosurrénale, ou les méninges molles).',
      type: 'classification',
      tags: ['crêtes neurales'],
    },
    {
      id: 'embryo-neurulation-fc-09',
      recto: 'Quelle malformation résulte d’un défaut de fermeture du neuropore postérieur ?',
      verso: 'Le spina bifida.',
      type: 'clinique',
      tags: ['spina bifida'],
    },
    {
      id: 'embryo-neurulation-fc-10',
      recto: 'Quelle malformation résulte d’un défaut de fermeture du neuropore antérieur ?',
      verso: 'L’anencéphalie.',
      type: 'clinique',
      tags: ['anencéphalie'],
    },
    {
      id: 'embryo-neurulation-fc-11',
      recto: 'Quelle vitamine réduit le risque d’anomalies de fermeture du tube neural ?',
      verso: 'L’acide folique (vitamine B9), en supplémentation périconceptionnelle.',
      type: 'clinique',
      tags: ['acide folique'],
    },
    {
      id: 'embryo-neurulation-fc-12',
      recto: 'Pourquoi recommande-t-on l’acide folique avant même la confirmation d’une grossesse ?',
      verso: 'Parce que la fermeture du tube neural est achevée dès le 27e-28e jour de développement, souvent avant le diagnostic de grossesse.',
      type: 'clinique',
      tags: ['prévention'],
    },
  ],
  qcm: [
    {
      id: 'embryo-neurulation-qcm-01',
      enonce: 'Concernant l’induction et la formation de la plaque neurale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La plaque neurale est d’origine mésodermique.', vraie: false, justification: 'La plaque neurale est d’origine ectodermique, induite par le mésoderme axial et la notochorde.' },
        { lettre: 'B', texte: 'La notochorde induit la différenciation de l’ectoderme sus-jacent.', vraie: true, justification: 'Exact, c’est le mécanisme d’induction neurale primaire.' },
        { lettre: 'C', texte: 'La plaque neurale apparaît avant la notochorde.', vraie: false, justification: 'La notochorde, qui induit la plaque neurale, se forme avant ou en même temps qu’elle, non après.' },
        { lettre: 'D', texte: 'La plaque neurale est le précurseur de l’ensemble du système nerveux central.', vraie: true, justification: 'Exact, elle donnera l’encéphale et la moelle spinale via le tube neural.' },
        { lettre: 'E', texte: 'La plaque neurale apparaît vers le 18e jour de développement.', vraie: true, justification: 'Exact, c’est la chronologie classiquement retenue.' },
      ],
      correction: 'Réponses exactes : B, D et E. La plaque neurale, d’origine ectodermique, est induite par la notochorde.',
      difficulte: 2,
    },
    {
      id: 'embryo-neurulation-qcm-02',
      enonce: 'Concernant la formation du tube neural, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La gouttière neurale précède le tube neural.', vraie: true, justification: 'Exact, c’est l’étape intermédiaire entre plaque et tube neural.' },
        { lettre: 'B', texte: 'La fermeture du tube neural progresse uniformément d’une seule extrémité à l’autre.', vraie: false, justification: 'Elle débute au niveau cervical et progresse simultanément vers les deux extrémités.' },
        { lettre: 'C', texte: 'Le neuropore antérieur se ferme avant le neuropore postérieur.', vraie: true, justification: 'Exact, vers J25 contre J27-28.' },
        { lettre: 'D', texte: 'Les bourrelets neuraux fusionnent ventralement.', vraie: false, justification: 'Ils fusionnent dorsalement, dans le plan médian.' },
        { lettre: 'E', texte: 'La fermeture du tube neural débute vers le 22e jour de développement.', vraie: true, justification: 'Exact, au niveau cervical, avant de progresser vers les deux pôles.' },
      ],
      correction: 'Réponses exactes : A, C et E. La fermeture progresse depuis un site cervical vers les deux extrémités.',
      difficulte: 2,
    },
    {
      id: 'embryo-neurulation-qcm-03',
      enonce: 'Concernant les crêtes neurales, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elles dérivent de la jonction entre plaque neurale et ectoderme de surface.', vraie: true, justification: 'Exact, c’est leur site d’origine.' },
        { lettre: 'B', texte: 'Elles donnent naissance aux ganglions sensitifs rachidiens.', vraie: true, justification: 'Exact, comme à de nombreux autres dérivés du système nerveux périphérique.' },
        { lettre: 'C', texte: 'Elles sont à l’origine de la médullosurrénale.', vraie: true, justification: 'Exact, les cellules chromaffines dérivent des crêtes neurales.' },
        { lettre: 'D', texte: 'Elles ne migrent pas au cours du développement.', vraie: false, justification: 'Les cellules des crêtes neurales sont au contraire caractérisées par une migration importante.' },
        { lettre: 'E', texte: 'Elles participent à la formation du squelette de la face.', vraie: true, justification: 'Exact, une partie du squelette céphalique dérive des crêtes neurales.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Les crêtes neurales sont des cellules migratrices aux dérivés très divers.',
      difficulte: 2,
    },
    {
      id: 'embryo-neurulation-qcm-04',
      enonce: 'Concernant les anomalies de fermeture du tube neural, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le spina bifida résulte d’un défaut du neuropore antérieur.', vraie: false, justification: 'Le spina bifida résulte d’un défaut du neuropore postérieur.' },
        { lettre: 'B', texte: 'L’anencéphalie résulte d’un défaut du neuropore antérieur.', vraie: true, justification: 'Exact, avec absence de développement de la voûte crânienne et d’une grande partie de l’encéphale.' },
        { lettre: 'C', texte: 'Ces anomalies figurent parmi les malformations congénitales les plus fréquentes du système nerveux central.', vraie: true, justification: 'Exact, elles constituent un groupe important de malformations du système nerveux central.' },
        { lettre: 'D', texte: 'Le spina bifida se localise le plus souvent au niveau lombo-sacré.', vraie: true, justification: 'Exact, c’est la localisation la plus fréquente.' },
        { lettre: 'E', texte: 'Ces anomalies surviennent après la fin de la période embryonnaire.', vraie: false, justification: 'Elles surviennent très précocement, avant la fin du premier mois de développement, pendant la neurulation.' },
      ],
      correction: 'Réponses exactes : B, C et D. Bien associer chaque neuropore à sa malformation caractéristique.',
      difficulte: 2,
    },
    {
      id: 'embryo-neurulation-qcm-05',
      enonce: 'Concernant la prévention des anomalies de fermeture du tube neural, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’acide folique réduit le risque de ces anomalies.', vraie: true, justification: 'Exact, c’est une mesure de prévention bien établie.' },
        { lettre: 'B', texte: 'La supplémentation doit idéalement débuter avant la conception.', vraie: true, justification: 'Exact, compte tenu de la fermeture précoce du tube neural.' },
        { lettre: 'C', texte: 'La supplémentation est utile même débutée après le diagnostic de grossesse à 8 semaines d’aménorrhée.', vraie: false, justification: 'À ce stade, la fermeture du tube neural est déjà achevée depuis plusieurs semaines ; la prévention est donc optimale avant la conception.' },
        { lettre: 'D', texte: 'L’acide folique appartient au groupe des vitamines B.', vraie: true, justification: 'Exact, c’est la vitamine B9.' },
        { lettre: 'E', texte: 'Cette supplémentation est recommandée uniquement en cas d’antécédent familial de malformation.', vraie: false, justification: 'Elle est recommandée plus largement chez toute femme en âge de procréer et en projet de grossesse.' },
      ],
      correction: 'Réponses exactes : A, B et D. La précocité de la fermeture du tube neural impose une supplémentation périconceptionnelle.',
      difficulte: 2,
    },
    {
      id: 'embryo-neurulation-qcm-06',
      enonce: 'Concernant la chronologie générale de la neurulation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La plaque neurale précède la gouttière neurale.', vraie: true, justification: 'Exact, c’est l’ordre chronologique de la neurulation.' },
        { lettre: 'B', texte: 'Le tube neural est complètement fermé avant l’apparition de la plaque neurale.', vraie: false, justification: 'C’est l’inverse : la plaque neurale précède largement la fermeture complète du tube neural.' },
        { lettre: 'C', texte: 'La fermeture complète du tube neural est achevée avant la fin du premier mois de développement.', vraie: true, justification: 'Exact, vers le 27e-28e jour, donc avant la fin du premier mois.' },
        { lettre: 'D', texte: 'Les crêtes neurales se détachent après la fermeture complète du tube neural sur toute sa longueur.', vraie: false, justification: 'Les crêtes neurales se détachent progressivement au fur et à mesure de la fermeture, non après son achèvement complet.' },
        { lettre: 'E', texte: 'La neurulation est achevée avant le début de l’organogenèse des autres appareils.', vraie: false, justification: 'La neurulation se déroule en parallèle des premières étapes de l’organogenèse générale, notamment cardiaque, non avant elle.' },
      ],
      correction: 'Réponses exactes : A et C. La neurulation s’achève tôt, avant la fin du premier mois de développement.',
      difficulte: 3,
    },
  ],
};
