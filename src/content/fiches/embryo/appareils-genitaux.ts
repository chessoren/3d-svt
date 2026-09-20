import type { Fiche } from '../../types';

export const ficheAppareilsGenitaux: Fiche = {
  id: 'embryo-appareils-genitaux',
  ue: 'embryo',
  titre: 'Appareils génitaux et régulation hormonale',
  sousTitre: 'Anatomie fonctionnelle, axe hypothalamo-hypophyso-gonadique et rétrocontrôles',
  chapitre: 'Reproduction et fécondation',
  ordre: 1,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'axe hypothalamo-hypophyso-gonadique',
    'GnRH',
    'FSH',
    'LH',
    'cellules de Leydig',
    'cellules de Sertoli',
    'rétrocontrôle',
    'testostérone',
  ],
  objectifs: [
    "Décrire l’organisation générale des appareils génitaux masculin et féminin.",
    "Situer les trois étages de l’axe hypothalamo-hypophyso-gonadique et leurs sécrétions.",
    "Expliquer les mécanismes de rétrocontrôle négatif et positif exercés par les stéroïdes gonadiques.",
    "Distinguer le rôle endocrine des cellules de Leydig, de Sertoli, de la thèque et de la granulosa.",
    "Relier ces mécanismes hormonaux à la différenciation sexuelle de l’appareil génital.",
  ],
  sections: [
    {
      id: 'anatomie-fonctionnelle',
      titre: 'Anatomie fonctionnelle des appareils génitaux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’appareil génital masculin comprend deux fonctions associées dans les testicules : une fonction exocrine, la production des spermatozoïdes dans les tubes séminifères, et une fonction endocrine, la sécrétion de testostérone par les cellules de Leydig. Les voies génitales (épididyme, canal déférent, vésicules séminales, prostate, glandes bulbo-urétrales) assurent le transport, la maturation et le conditionnement du sperme jusqu’à l’urètre.",
        },
        {
          type: 'paragraphe',
          texte:
            "L’appareil génital féminin associe de la même façon une fonction exocrine, la production cyclique d’un ovocyte par les ovaires, et une fonction endocrine, la sécrétion d’œstrogènes et de progestérone. Les trompes utérines captent l’ovocyte et sont le lieu habituel de la fécondation, l’utérus accueille la nidation, le col et le vagin complètent la filière génitale.",
        },
        {
          type: 'tableau',
          titre: 'Organes et fonctions principales',
          colonnes: ['Sexe', 'Organe', 'Fonction principale'],
          lignes: [
            ['Masculin', 'Testicule (tube séminifère)', 'Spermatogenèse'],
            ['Masculin', 'Testicule (interstitium)', 'Sécrétion de testostérone par les cellules de Leydig'],
            ['Masculin', 'Épididyme', 'Maturation et stockage des spermatozoïdes'],
            ['Féminin', 'Ovaire (follicules)', 'Ovogenèse et sécrétion d’œstrogènes'],
            ['Féminin', 'Ovaire (corps jaune)', 'Sécrétion de progestérone en phase lutéale'],
            ['Féminin', 'Trompe utérine', 'Captation ovocytaire et site habituel de la fécondation'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Gonade indifférenciée',
          texte:
            "Avant la 7e semaine de développement, la gonade est indifférenciée et comporte deux composantes potentielles : une corticale, capable de devenir un ovaire, et une médullaire, capable de devenir un testicule. La présence du gène SRY, porté par le chromosome Y, oriente la différenciation vers le testicule.",
        },
      ],
    },
    {
      id: 'axe-hhg',
      titre: 'L’axe hypothalamo-hypophyso-gonadique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La fonction de reproduction est commandée par un axe à trois étages. L’hypothalamus sécrète la GnRH (gonadotropin-releasing hormone), un décapeptide libéré de façon pulsatile dans le système porte hypothalamo-hypophysaire. Cette pulsatilité, avec une fréquence d’environ une pulsation toutes les 60 à 90 minutes, est indispensable : une administration continue de GnRH désensibilise les récepteurs hypophysaires et freine la sécrétion de gonadotrophines.",
        },
        {
          type: 'definition',
          terme: 'Gonadotrophines hypophysaires',
          definition:
            "FSH (hormone folliculo-stimulante) et LH (hormone lutéinisante), glycoprotéines sécrétées par les cellules gonadotropes de l’antéhypophyse sous l’effet de la GnRH. Elles partagent une sous-unité alpha commune avec la TSH et l’hCG, et se distinguent par une sous-unité bêta spécifique qui porte l’activité biologique.",
        },
        {
          type: 'tableau',
          titre: 'Cibles et effets des gonadotrophines',
          colonnes: ['Hormone', 'Cellule cible chez l’homme', 'Cellule cible chez la femme', 'Effet principal'],
          lignes: [
            [
              'FSH',
              'Cellule de Sertoli',
              'Cellule de la granulosa',
              'Stimule la spermatogenèse et la croissance folliculaire',
            ],
            [
              'LH',
              'Cellule de Leydig',
              'Cellule de la thèque interne, puis granulosa lutéinisée',
              'Stimule la stéroïdogenèse (testostérone, puis œstrogènes et progestérone)',
            ],
          ],
        },
        {
          type: 'etapes',
          titre: 'Trajet de l’information hormonale',
          etapes: [
            {
              titre: 'Hypothalamus',
              detail: 'Sécrétion pulsatile de GnRH dans le système porte hypophysaire.',
            },
            {
              titre: 'Antéhypophyse',
              detail: 'Les cellules gonadotropes répondent en libérant FSH et LH dans la circulation générale.',
            },
            {
              titre: 'Gonade',
              detail:
                'Les gonadotrophines stimulent la gamétogenèse et la stéroïdogenèse, produisant testostérone chez l’homme, œstradiol puis progestérone chez la femme.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Sous-unité alpha commune',
          texte:
            "FSH, LH, TSH et hCG partagent la même sous-unité alpha ; seule la sous-unité bêta diffère et confère la spécificité d’action. C’est un piège classique de QCM que d’attribuer une spécificité à la sous-unité alpha.",
        },
      ],
    },
    {
      id: 'retrocontroles',
      titre: 'Les rétrocontrôles gonadiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les stéroïdes gonadiques exercent en retour une action sur l’hypothalamus et l’hypophyse, qui module la sécrétion de GnRH, de FSH et de LH. Ce rétrocontrôle peut être négatif ou, dans un cas précis chez la femme, positif.",
        },
        {
          type: 'comparaison',
          titre: 'Rétrocontrôle négatif et positif',
          gauche: {
            titre: 'Rétrocontrôle négatif',
            points: [
              'Exercé en permanence par la testostérone chez l’homme',
              'Exercé par l’œstradiol à concentration faible à modérée, et par la progestérone en phase lutéale chez la femme',
              'Freine la sécrétion de GnRH, de FSH et de LH',
              'L’inhibine B, sécrétée par les cellules de Sertoli ou par la granulosa, freine spécifiquement la FSH',
            ],
          },
          droite: {
            titre: 'Rétrocontrôle positif',
            points: [
              'Propre à la femme, en phase préovulatoire',
              'Nécessite un œstradiol élevé et soutenu pendant environ 48 heures',
              'Déclenche le pic ovulant de LH, avec un pic moindre de FSH',
              'Ce pic de LH provoque l’ovulation',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un même stéroïde, deux effets opposés',
          texte:
            "L’œstradiol illustre à lui seul les deux types de rétrocontrôle : à concentration faible et stable, il freine l’axe (rétrocontrôle négatif) ; lorsqu’il atteint un seuil élevé et se maintient à ce niveau pendant environ deux jours, en fin de phase folliculaire, il bascule et stimule fortement la sécrétion de LH (rétrocontrôle positif). C’est la durée et l’intensité du signal, plus que sa nature, qui déterminent le sens de l’effet.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir les rôles de la FSH et de la LH',
          texte:
            "FSH pour Folliculaire et Sertoli (croissance folliculaire, spermatogenèse) ; LH pour Leydig et Lutéinisation (stéroïdogenèse, déclenchement de l’ovulation et formation du corps jaune).",
        },
      ],
    },
    {
      id: 'differenciation-sexuelle',
      titre: 'Bases hormonales de la différenciation sexuelle',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La différenciation de l’appareil génital découle directement des sécrétions endocrines testiculaires précoces. Chez l’embryon masculin, les cellules de Sertoli fœtales sécrètent l’hormone antimüllérienne (AMH), qui provoque la régression des canaux paramésonéphrotiques (canaux de Müller). Les cellules de Leydig fœtales sécrètent la testostérone, qui stabilise et différencie les canaux mésonéphrotiques (canaux de Wolff) en épididyme, canal déférent et vésicule séminale.",
        },
        {
          type: 'liste',
          items: [
            'La testostérone, convertie en dihydrotestostérone (DHT) par la 5-alpha-réductase dans les tissus cibles, virilise les organes génitaux externes et la prostate.',
            "En l’absence de testicule fonctionnel, la voie de différenciation est féminine par défaut : les canaux de Müller persistent et donnent trompes utérines, utérus et partie supérieure du vagin, tandis que les canaux de Wolff régressent faute de testostérone.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Acteurs hormonaux de la différenciation sexuelle',
          colonnes: ['Sécrétion', 'Origine cellulaire', 'Effet'],
          lignes: [
            ['AMH', 'Cellules de Sertoli fœtales', 'Régression des canaux de Müller'],
            ['Testostérone', 'Cellules de Leydig fœtales', 'Différenciation des canaux de Wolff'],
            ['Dihydrotestostérone (DHT)', 'Conversion périphérique de la testostérone', 'Virilisation des organes génitaux externes'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Déficit en 5-alpha-réductase',
          texte:
            "Un déficit en 5-alpha-réductase empêche la conversion de la testostérone en DHT : les canaux de Wolff se différencient normalement grâce à la testostérone, mais les organes génitaux externes restent insuffisamment virilisés à la naissance, illustrant la distinction entre l’action de la testostérone et celle de la DHT.",
        },
      ],
    },
    {
      id: 'notions-cles-puberte',
      titre: 'Mise en route pubertaire de l’axe',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’axe hypothalamo-hypophyso-gonadique est fonctionnel dès la vie fœtale puis s’assoupit durant l’enfance, période où la sensibilité hypothalamique au rétrocontrôle négatif des faibles concentrations de stéroïdes est très élevée. La puberté correspond à la levée progressive de ce frein, avec réapparition d’une pulsatilité de GnRH d’abord nocturne, puis diurne, entraînant l’activation des gonades et l’apparition des caractères sexuels secondaires.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordres de grandeur à retenir',
          texte:
            "Pulsatilité physiologique de la GnRH : environ une décharge toutes les 60 à 90 minutes. Durée nécessaire d’élévation soutenue de l’œstradiol pour déclencher le pic de LH : environ 48 heures. La sous-unité alpha des glycoprotéines hypophysaires est commune à FSH, LH, TSH et hCG.",
        },
        {
          type: 'paragraphe',
          texte:
            "Cette maturation de l’axe est un préalable indispensable à la mise en route de la spermatogenèse chez le garçon et de la folliculogenèse cyclique chez la fille, développées dans les fiches suivantes.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les gonades ont une double fonction, exocrine (gamétogenèse) et endocrine (stéroïdogenèse).",
    "L’axe hypothalamo-hypophyso-gonadique comporte trois étages : hypothalamus (GnRH pulsatile), antéhypophyse (FSH, LH), gonade.",
    "FSH agit sur les cellules de Sertoli et sur la granulosa ; LH agit sur les cellules de Leydig et sur la thèque puis la granulosa lutéinisée.",
    "FSH, LH, TSH et hCG partagent une sous-unité alpha commune et se distinguent par leur sous-unité bêta.",
    "La testostérone et l’œstradiol exercent normalement un rétrocontrôle négatif sur l’axe ; l’inhibine B freine spécifiquement la FSH.",
    "Un œstradiol élevé et soutenu pendant environ 48 heures inverse le rétrocontrôle en un rétrocontrôle positif, à l’origine du pic de LH.",
    "L’AMH (cellules de Sertoli) fait régresser les canaux de Müller, la testostérone (cellules de Leydig) stabilise les canaux de Wolff.",
  ],
  erreursFrequentes: [
    "Croire qu’une administration continue de GnRH stimule l’axe : elle le freine par désensibilisation des récepteurs hypophysaires.",
    "Attribuer une spécificité biologique à la sous-unité alpha des gonadotrophines, alors qu’elle est commune à FSH, LH, TSH et hCG.",
    "Penser que le rétrocontrôle positif de l’œstradiol est immédiat : il exige une concentration élevée maintenue pendant environ deux jours.",
    "Confondre l’action de l’AMH, qui fait régresser les canaux de Müller, avec celle de la testostérone, qui stabilise les canaux de Wolff.",
    "Oublier que la virilisation des organes génitaux externes dépend de la DHT, et non directement de la testostérone.",
  ],
  mnemotechniques: [
    {
      moyen: 'FSH = Folliculaire et Sertoli, LH = Leydig et Lutéinisation',
      explication:
        'Permet de retenir rapidement les cibles cellulaires respectives de la FSH et de la LH chez les deux sexes.',
    },
    {
      moyen: 'Müller au féminin, Wolff au masculin',
      explication:
        'En l’absence de testicule, ce sont les canaux de Müller qui persistent (voie féminine par défaut) ; la présence de testostérone est nécessaire au maintien des canaux de Wolff.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
    'Harper, Biochimie médicale, 32e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-appareils-genitaux-fc-01',
      recto: 'Quelles sont les deux fonctions associées de la gonade ?',
      verso: 'Une fonction exocrine (production de gamètes) et une fonction endocrine (sécrétion de stéroïdes sexuels).',
      type: 'definition',
      tags: ['gonade', 'physiologie'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-02',
      recto: 'Quelle hormone hypothalamique commande l’axe gonadotrope et selon quel mode de sécrétion ?',
      verso: 'La GnRH, sécrétée de façon pulsatile, environ toutes les 60 à 90 minutes.',
      type: 'mecanisme',
      tags: ['GnRH', 'axe hypothalamo-hypophyso-gonadique'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-03',
      recto: 'Quelle sous-unité est commune à la FSH, la LH, la TSH et l’hCG ?',
      verso: 'La sous-unité alpha ; la sous-unité bêta porte la spécificité d’action de chaque hormone.',
      type: 'chiffre',
      tags: ['gonadotrophines'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-04',
      recto: 'Sur quelle cellule agit la FSH chez l’homme et chez la femme ?',
      verso: 'La cellule de Sertoli chez l’homme, la cellule de la granulosa chez la femme.',
      type: 'mecanisme',
      tags: ['FSH'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-05',
      recto: 'Sur quelle cellule agit la LH chez l’homme et chez la femme ?',
      verso: 'La cellule de Leydig chez l’homme, la cellule de la thèque interne puis la granulosa lutéinisée chez la femme.',
      type: 'mecanisme',
      tags: ['LH'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-06',
      recto: 'Quelle condition transforme le rétrocontrôle de l’œstradiol de négatif en positif ?',
      verso: 'Une concentration élevée d’œstradiol maintenue pendant environ 48 heures, en fin de phase folliculaire.',
      type: 'mecanisme',
      tags: ['rétrocontrôle', 'œstradiol'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-07',
      recto: 'Quelle hormone freine spécifiquement la sécrétion de FSH ?',
      verso: 'L’inhibine B, sécrétée par les cellules de Sertoli chez l’homme et par la granulosa chez la femme.',
      type: 'mecanisme',
      tags: ['inhibine B'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-08',
      recto: 'Quel gène oriente la gonade indifférenciée vers la voie testiculaire ?',
      verso: 'Le gène SRY, porté par le chromosome Y.',
      type: 'definition',
      tags: ['différenciation sexuelle', 'SRY'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-09',
      recto: 'Quel est le rôle de l’AMH et quelle cellule la sécrète ?',
      verso: 'Sécrétée par les cellules de Sertoli fœtales, elle provoque la régression des canaux de Müller.',
      type: 'mecanisme',
      tags: ['AMH', 'canaux de Müller'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-10',
      recto: 'Quelle hormone stabilise les canaux de Wolff et quelle cellule la sécrète ?',
      verso: 'La testostérone, sécrétée par les cellules de Leydig fœtales.',
      type: 'mecanisme',
      tags: ['testostérone', 'canaux de Wolff'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-11',
      recto: 'Quelle enzyme convertit la testostérone en dihydrotestostérone (DHT) ?',
      verso: 'La 5-alpha-réductase, dans les tissus cibles périphériques.',
      type: 'mecanisme',
      tags: ['DHT', '5-alpha-réductase'],
    },
    {
      id: 'embryo-appareils-genitaux-fc-12',
      recto: 'Quelle est la voie de différenciation par défaut de l’appareil génital en l’absence de testicule fonctionnel ?',
      verso: 'La voie féminine : persistance des canaux de Müller et régression des canaux de Wolff.',
      type: 'classification',
      tags: ['différenciation sexuelle'],
    },
  ],
  qcm: [
    {
      id: 'embryo-appareils-genitaux-qcm-01',
      enonce: 'Concernant l’axe hypothalamo-hypophyso-gonadique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La GnRH est un décapeptide sécrété de façon pulsatile.',
          vraie: true,
          justification: 'Exact : la pulsatilité, environ toutes les 60 à 90 minutes, est indispensable à son efficacité.',
        },
        {
          lettre: 'B',
          texte: 'Une perfusion continue de GnRH stimule durablement la sécrétion de FSH et de LH.',
          vraie: false,
          justification: 'Faux : une exposition continue désensibilise les récepteurs hypophysaires et freine la sécrétion de gonadotrophines.',
        },
        {
          lettre: 'C',
          texte: 'FSH et LH sont des hormones stéroïdiennes.',
          vraie: false,
          justification: 'Ce sont des glycoprotéines, sécrétées par les cellules gonadotropes de l’antéhypophyse.',
        },
        {
          lettre: 'D',
          texte: 'La sous-unité bêta confère la spécificité d’action de chaque gonadotrophine.',
          vraie: true,
          justification: 'Exact, la sous-unité alpha étant commune à FSH, LH, TSH et hCG.',
        },
        {
          lettre: 'E',
          texte: 'L’hypothalamus est le troisième étage de l’axe, après l’hypophyse et la gonade.',
          vraie: false,
          justification: 'L’hypothalamus est le premier étage de l’axe, en amont de l’hypophyse puis de la gonade.',
        },
      ],
      correction: 'Réponses exactes : A et D. Retenir l’organisation en trois étages et la nature peptidique des gonadotrophines.',
      difficulte: 1,
    },
    {
      id: 'embryo-appareils-genitaux-qcm-02',
      enonce: 'Concernant les cibles cellulaires de la FSH et de la LH, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La FSH agit sur les cellules de Sertoli chez l’homme.',
          vraie: true,
          justification: 'Exact, la cellule de Sertoli porte les récepteurs à la FSH.',
        },
        {
          lettre: 'B',
          texte: 'La LH agit sur les cellules de Leydig chez l’homme.',
          vraie: true,
          justification: 'Exact, la LH stimule la stéroïdogenèse leydigienne.',
        },
        {
          lettre: 'C',
          texte: 'Chez la femme, la FSH agit principalement sur la cellule de la thèque interne.',
          vraie: false,
          justification: 'La FSH agit sur la cellule de la granulosa ; la thèque interne répond principalement à la LH.',
        },
        {
          lettre: 'D',
          texte: 'L’inhibine B freine spécifiquement la sécrétion de LH.',
          vraie: false,
          justification: 'L’inhibine B freine spécifiquement la sécrétion de FSH.',
        },
        {
          lettre: 'E',
          texte: 'La cellule de Leydig est une cellule interstitielle, distincte du tube séminifère.',
          vraie: true,
          justification: 'Exact, elle est située dans le tissu interstitiel entre les tubes séminifères.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. Bien distinguer les cibles thécale et granulosique de LH et FSH chez la femme.',
      difficulte: 2,
    },
    {
      id: 'embryo-appareils-genitaux-qcm-03',
      enonce: 'Concernant les rétrocontrôles exercés par les stéroïdes gonadiques, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La testostérone exerce normalement un rétrocontrôle négatif sur l’axe gonadotrope.',
          vraie: true,
          justification: 'Exact, c’est le mode habituel de régulation chez l’homme.',
        },
        {
          lettre: 'B',
          texte: 'Le rétrocontrôle positif de l’œstradiol nécessite une concentration élevée et transitoire, de quelques minutes.',
          vraie: false,
          justification: 'Il nécessite une élévation soutenue pendant environ 48 heures, non un pic bref.',
        },
        {
          lettre: 'C',
          texte: 'Le rétrocontrôle positif de l’œstradiol déclenche le pic ovulant de LH.',
          vraie: true,
          justification: 'Exact, c’est le mécanisme princeps de déclenchement de l’ovulation.',
        },
        {
          lettre: 'D',
          texte: 'La progestérone, en phase lutéale, exerce un rétrocontrôle négatif sur l’axe.',
          vraie: true,
          justification: 'Exact, associée à l’œstradiol lutéal, elle freine la sécrétion de GnRH et de gonadotrophines.',
        },
        {
          lettre: 'E',
          texte: 'Le rétrocontrôle positif est un mécanisme retrouvé aussi bien chez l’homme que chez la femme.',
          vraie: false,
          justification: 'Le rétrocontrôle positif est propre à la physiologie féminine, en phase préovulatoire.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Le rétrocontrôle positif est spécifiquement féminin et nécessite une durée d’exposition suffisante.',
      difficulte: 2,
    },
    {
      id: 'embryo-appareils-genitaux-qcm-04',
      enonce: 'Concernant la différenciation sexuelle sous contrôle hormonal, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’AMH est sécrétée par les cellules de Leydig fœtales.',
          vraie: false,
          justification: 'L’AMH est sécrétée par les cellules de Sertoli fœtales, non par les cellules de Leydig.',
        },
        {
          lettre: 'B',
          texte: 'La testostérone stabilise les canaux de Wolff.',
          vraie: true,
          justification: 'Exact, elle permet leur différenciation en épididyme, canal déférent et vésicule séminale.',
        },
        {
          lettre: 'C',
          texte: 'La DHT est responsable de la virilisation des organes génitaux externes.',
          vraie: true,
          justification: 'Exact, via la conversion périphérique de la testostérone par la 5-alpha-réductase.',
        },
        {
          lettre: 'D',
          texte: 'En l’absence d’AMH, les canaux de Müller régressent.',
          vraie: false,
          justification: 'En l’absence d’AMH, les canaux de Müller persistent et se différencient.',
        },
        {
          lettre: 'E',
          texte: 'La voie féminine de différenciation nécessite la sécrétion active d’œstrogènes fœtaux.',
          vraie: false,
          justification: 'La voie féminine se met en place par défaut, en l’absence de testicule fonctionnel, sans nécessiter d’œstrogènes fœtaux spécifiques.',
        },
      ],
      correction: 'Réponses exactes : B et C. L’AMH vient de Sertoli, la testostérone de Leydig ; la voie féminine est une voie par défaut.',
      difficulte: 2,
    },
    {
      id: 'embryo-appareils-genitaux-qcm-05',
      enonce: 'Concernant l’anatomie fonctionnelle des appareils génitaux, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La fécondation a habituellement lieu dans l’utérus.',
          vraie: false,
          justification: 'La fécondation a habituellement lieu dans la trompe utérine, au niveau de l’ampoule tubaire.',
        },
        {
          lettre: 'B',
          texte: 'Le corps jaune est une structure ovarienne sécrétant de la progestérone.',
          vraie: true,
          justification: 'Exact, il se forme après l’ovulation à partir du follicule rompu.',
        },
        {
          lettre: 'C',
          texte: 'L’épididyme assure la maturation et le stockage des spermatozoïdes.',
          vraie: true,
          justification: 'Exact, c’est l’un de ses rôles principaux au sein des voies génitales masculines.',
        },
        {
          lettre: 'D',
          texte: 'Le testicule n’a qu’une fonction exocrine.',
          vraie: false,
          justification: 'Le testicule a une double fonction, exocrine (spermatogenèse) et endocrine (sécrétion de testostérone).',
        },
        {
          lettre: 'E',
          texte: 'L’ovaire assure à la fois l’ovogenèse et la sécrétion de stéroïdes sexuels.',
          vraie: true,
          justification: 'Exact, double fonction exocrine et endocrine, comme le testicule chez l’homme.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir le parallélisme fonctionnel entre testicule et ovaire.',
      difficulte: 1,
    },
    {
      id: 'embryo-appareils-genitaux-qcm-06',
      enonce: 'Concernant les sécrétions hormonales des gonades, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'FSH, LH, TSH et hCG partagent la même sous-unité bêta.',
          vraie: false,
          justification: 'Elles partagent la sous-unité alpha ; la sous-unité bêta est spécifique à chacune.',
        },
        {
          lettre: 'B',
          texte: 'La cellule de la granulosa lutéinisée participe à la sécrétion de progestérone après l’ovulation.',
          vraie: true,
          justification: 'Exact, elle constitue avec la thèque interne le corps jaune sécrétant progestérone et œstrogènes.',
        },
        {
          lettre: 'C',
          texte: 'L’inhibine B est un stéroïde sexuel.',
          vraie: false,
          justification: 'L’inhibine B est une glycoprotéine, non un stéroïde ; elle freine spécifiquement la FSH.',
        },
        {
          lettre: 'D',
          texte: 'La DHT dérive directement de la testostérone par action d’une réductase.',
          vraie: true,
          justification: 'Exact, la 5-alpha-réductase convertit la testostérone en DHT dans les tissus cibles.',
        },
        {
          lettre: 'E',
          texte: 'Le gène SRY code directement pour l’AMH.',
          vraie: false,
          justification: 'Le gène SRY déclenche la différenciation testiculaire ; l’AMH est un produit distinct, sécrété ensuite par les cellules de Sertoli.',
        },
      ],
      correction: 'Réponses exactes : B et D. Bien distinguer la nature glycoprotéique des gonadotrophines et de l’inhibine, de la nature stéroïdienne de la testostérone et de la DHT.',
      difficulte: 2,
    },
  ],
};
