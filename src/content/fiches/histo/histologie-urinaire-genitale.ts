import type { Fiche } from '../../types';

export const ficheHistologieUrinaireGenitale: Fiche = {
  id: 'histo-histologie-urinaire-genitale',
  ue: 'histo',
  titre: 'Histologie des appareils urinaire et génital',
  sousTitre: 'Néphron, corpuscule rénal, voies urinaires, spermatogenèse, follicules ovariens et endomètre',
  chapitre: 'Histologie des appareils',
  ordre: 11,
  duree: 28,
  difficulte: 3,
  motsCles: [
    'néphron',
    'corpuscule rénal',
    'tube contourné proximal',
    'urothélium',
    'spermatogenèse',
    'follicule ovarien',
    'corps jaune',
    'endomètre',
  ],
  objectifs: [
    "Décrire l’organisation du néphron et du corpuscule rénal.",
    "Différencier les segments tubulaires du néphron sur le plan histologique et fonctionnel.",
    "Décrire l’organisation histologique du testicule et les grandes étapes de la spermatogenèse.",
    "Décrire l’organisation histologique de l’ovaire et la folliculogenèse.",
    "Décrire les modifications cycliques de l’endomètre au cours du cycle menstruel.",
  ],
  sections: [
    {
      id: 'nephron-corpuscule',
      titre: 'Le néphron et le corpuscule rénal',
      blocs: [
        {
          type: 'definition',
          terme: 'Néphron',
          definition:
            "Unité fonctionnelle du rein, comprenant un corpuscule rénal (filtration du plasma) et un système tubulaire (réabsorption et sécrétion), assurant conjointement la formation de l’urine.",
        },
        {
          type: 'definition',
          terme: 'Corpuscule rénal (corpuscule de Malpighi)',
          definition:
            "Structure sphérique constituée d’un peloton capillaire, le glomérule, entouré par la capsule de Bowman, dont le feuillet viscéral est formé de podocytes appliqués contre les capillaires glomérulaires.",
        },
        {
          type: 'tableau',
          titre: 'La barrière de filtration glomérulaire',
          colonnes: ['Élément', 'Description'],
          lignes: [
            ['Endothélium capillaire fenêtré', 'Premier filtre, retient les cellules sanguines'],
            ['Membrane basale glomérulaire', 'Filtre principal, riche en collagène de type IV, retient les grosses protéines'],
            ['Podocytes et fentes de filtration', 'Cellules épithéliales à pédicelles, dernier filtre avant la chambre urinaire'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'L’appareil juxtaglomérulaire',
          texte:
            "Au pôle vasculaire du corpuscule rénal, l’appareil juxtaglomérulaire associe les cellules myoépithélioïdes de l’artériole afférente, sécrétrices de rénine, et la macula densa, portion spécialisée du tube contourné distal qui détecte la concentration en sodium du liquide tubulaire.",
        },
      ],
    },
    {
      id: 'segments-tubulaires',
      titre: 'Les segments tubulaires du néphron',
      blocs: [
        {
          type: 'tableau',
          titre: 'Comparaison des principaux segments tubulaires',
          colonnes: ['Segment', 'Type d’épithélium', 'Particularité fonctionnelle'],
          lignes: [
            ['Tube contourné proximal', 'Cubique simple, bordure en brosse développée', 'Réabsorption majoritaire (eau, glucose, acides aminés, électrolytes)'],
            ['Anse de Henle (branche grêle)', 'Pavimenteux simple', 'Participation au mécanisme de concentration des urines (gradient corticopapillaire)'],
            ['Tube contourné distal', 'Cubique simple, sans bordure en brosse développée', 'Réabsorption fine régulée par l’aldostérone, sécrétion de potassium et d’ions hydrogène'],
            ['Tube collecteur', 'Cubique à prismatique, cellules principales et cellules intercalaires', 'Réabsorption d’eau régulée par l’hormone antidiurétique (ADH)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Bordure en brosse : un critère de reconnaissance',
          texte:
            "La présence d’une bordure en brosse développée est le critère histologique clé distinguant le tube contourné proximal du tube contourné distal, tous deux constitués d’un épithélium cubique simple d’aspect par ailleurs assez proche.",
        },
      ],
    },
    {
      id: 'voies-urinaires',
      titre: 'Les voies urinaires excrétrices',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Des calices rénaux jusqu’à l’urètre, les voies urinaires excrétrices sont tapissées par un épithélium de transition, ou urothélium, épithélium pluristratifié particulier dont l’aspect varie selon l’état de distension de la paroi.",
        },
        {
          type: 'liste',
          items: [
            "À l’état de vacuité (paroi détendue), l’urothélium est épais, avec des cellules superficielles volumineuses dites en ombrelle, à double noyau parfois observé.",
            "À l’état de réplétion (paroi distendue), l’urothélium s’amincit, les cellules s’aplatissent sans que leur nombre de couches ne diminue réellement.",
            "L’urothélium repose sur un chorion conjonctif richement vascularisé, puis sur une musculeuse épaisse de muscle lisse (le détrusor au niveau vésical).",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Tumeurs urothéliales',
          texte:
            "L’urothélium est le site de développement des tumeurs de vessie les plus fréquentes, dites tumeurs urothéliales, dont le risque est notamment associé au tabagisme.",
        },
      ],
    },
    {
      id: 'testicule-spermatogenese',
      titre: 'Le testicule et la spermatogenèse',
      blocs: [
        {
          type: 'definition',
          terme: 'Tube séminifère',
          definition:
            "Structure tubulaire pelotonnée du testicule, bordée par un épithélium séminal complexe associant les cellules de la lignée germinale, en cours de différenciation, et les cellules de Sertoli, cellules de soutien.",
        },
        {
          type: 'tableau',
          titre: 'Les deux populations cellulaires testiculaires',
          colonnes: ['Cellule', 'Localisation', 'Fonction'],
          lignes: [
            ['Cellule de Sertoli', 'Épithélium séminal du tube séminifère', 'Soutien et nutrition des cellules germinales, sécrétion de l’hormone antimüllérienne, constitution de la barrière hémato-testiculaire'],
            ['Cellule de Leydig', 'Tissu interstitiel, entre les tubes séminifères', 'Sécrétion de testostérone, sous contrôle de l’hormone lutéinisante (LH)'],
          ],
        },
        {
          type: 'etapes',
          titre: 'Les grandes étapes de la spermatogenèse',
          etapes: [
            {
              titre: 'Phase de multiplication',
              detail: "Divisions mitotiques des spermatogonies souches, à la périphérie du tube séminifère.",
            },
            {
              titre: 'Phase d’accroissement et de méiose',
              detail: "Le spermatocyte I subit la première division méiotique, donnant deux spermatocytes II, qui subissent la seconde division méiotique en spermatides.",
            },
            {
              titre: 'Spermiogenèse',
              detail: "Différenciation morphologique de la spermatide, sans nouvelle division, en spermatozoïde mature : condensation nucléaire, formation de l’acrosome et du flagelle.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Barrière hémato-testiculaire',
          texte:
            "Les jonctions serrées entre cellules de Sertoli voisines forment la barrière hémato-testiculaire, qui isole les cellules germinales en cours de méiose et post-méiotiques du système immunitaire, ces cellules exprimant des antigènes reconnus comme étrangers.",
        },
      ],
    },
    {
      id: 'ovaire-folliculogenese',
      titre: 'L’ovaire et la folliculogenèse',
      blocs: [
        {
          type: 'definition',
          terme: 'Follicule ovarien',
          definition:
            "Unité fonctionnelle de l’ovaire, associant un ovocyte et les cellules folliculaires qui l’entourent, dont la maturation progressive, appelée folliculogenèse, aboutit à l’ovulation d’un follicule mature.",
        },
        {
          type: 'tableau',
          titre: 'Étapes de maturation folliculaire',
          colonnes: ['Stade', 'Caractéristique'],
          lignes: [
            ['Follicule primordial', 'Ovocyte entouré d’une seule couche de cellules folliculaires aplaties'],
            ['Follicule primaire', 'Ovocyte entouré d’une couche de cellules folliculaires cubiques'],
            ['Follicule secondaire (pré-antral)', 'Plusieurs couches de cellules de la granulosa, apparition de la zone pellucide'],
            ['Follicule tertiaire (antral)', 'Apparition d’une cavité liquidienne, l’antrum folliculaire, et de la thèque interne sécrétrice'],
            ['Follicule mûr (de De Graaf)', 'Follicule volumineux préovulatoire, prêt à libérer l’ovocyte'],
          ],
        },
        {
          type: 'definition',
          terme: 'Corps jaune',
          definition:
            "Structure glandulaire endocrine temporaire formée à partir des reliquats du follicule après l’ovulation, sécrétant essentiellement de la progestérone, et régressant en l’absence de fécondation.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Un stock folliculaire non renouvelable',
          texte:
            "Contrairement à la lignée germinale masculine, la lignée germinale féminine ne se renouvelle pas après la naissance : le stock de follicules primordiaux est constitué avant la naissance et diminue progressivement jusqu’à son épuisement à la ménopause.",
        },
      ],
    },
    {
      id: 'endometre-cycle',
      titre: 'L’endomètre et le cycle menstruel',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’endomètre, muqueuse tapissant la cavité utérine, se modifie cycliquement sous l’influence des hormones ovariennes, préparant l’utérus à une éventuelle nidation.",
        },
        {
          type: 'comparaison',
          titre: 'Couche fonctionnelle versus couche basale de l’endomètre',
          gauche: {
            titre: 'Couche fonctionnelle',
            points: [
              'Couche superficielle, répondant aux variations hormonales cycliques',
              'Desquame lors des règles en l’absence de fécondation',
              'Se régénère à chaque cycle à partir de la couche basale',
            ],
          },
          droite: {
            titre: 'Couche basale',
            points: [
              'Couche profonde, adjacente au myomètre',
              'Ne desquame pas lors des règles',
              'Source des cellules régénérant la couche fonctionnelle',
            ],
          },
        },
        {
          type: 'tableau',
          titre: 'Phases du cycle endométrial',
          colonnes: ['Phase', 'Hormone dominante', 'Aspect endométrial'],
          lignes: [
            ['Phase proliférative', 'Œstrogènes', 'Régénération et épaississement de la couche fonctionnelle, glandes rectilignes'],
            ['Phase sécrétoire', 'Progestérone (corps jaune)', 'Glandes tortueuses à sécrétion visible, œdème du chorion, préparation à la nidation'],
            ['Phase menstruelle', 'Chute des hormones ovariennes', 'Desquamation de la couche fonctionnelle en l’absence de fécondation'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Cohérence entre ovaire et endomètre',
          texte:
            "La phase proliférative endométriale correspond à la phase folliculaire ovarienne (sécrétion d’œstrogènes par les follicules en croissance), tandis que la phase sécrétoire endométriale correspond à la phase lutéale ovarienne (sécrétion de progestérone par le corps jaune).",
        },
      ],
    },
  ],
  pointsCles: [
    "Le corpuscule rénal comporte un glomérule capillaire entouré par la capsule de Bowman, dont le feuillet viscéral est fait de podocytes.",
    "Le tube contourné proximal se distingue du distal par sa bordure en brosse développée.",
    "L’urothélium (épithélium de transition) des voies urinaires change d’épaisseur apparente selon la distension de la paroi, sans changer réellement de nombre de couches.",
    "La spermatogenèse associe multiplication, méiose et spermiogenèse ; la barrière hémato-testiculaire est formée par les jonctions serrées entre cellules de Sertoli.",
    "La cellule de Leydig sécrète la testostérone ; la cellule de Sertoli soutient les cellules germinales et sécrète l’hormone antimüllérienne.",
    "La folliculogenèse passe par les stades primordial, primaire, secondaire, tertiaire (antral) puis follicule mûr de De Graaf.",
    "L’endomètre alterne phase proliférative (œstrogènes), phase sécrétoire (progestérone du corps jaune) et phase menstruelle.",
  ],
  erreursFrequentes: [
    "Confondre tube contourné proximal (bordure en brosse développée) et tube contourné distal (sans bordure en brosse développée).",
    "Croire que l’urothélium change de nombre de couches selon la distension vésicale : c’est son épaisseur apparente qui varie, les couches s’aplatissant sans réellement disparaître.",
    "Confondre cellule de Sertoli (soutien, hormone antimüllérienne) et cellule de Leydig (sécrétion de testostérone).",
    "Penser que le stock de follicules ovariens se renouvelle après la naissance : il est constitué avant la naissance et s’épuise progressivement.",
    "Confondre phase proliférative (œstrogènes, phase folliculaire ovarienne) et phase sécrétoire (progestérone, phase lutéale ovarienne) de l’endomètre.",
    "Oublier que la macula densa appartient au tube contourné distal et non au tube contourné proximal.",
  ],
  mnemotechniques: [
    {
      moyen: 'Proximal = Poil en brosse',
      explication:
        'Le tube contourné proximal se reconnaît par sa bordure en brosse développée, contrairement au tube contourné distal.',
    },
    {
      moyen: 'Sertoli Soutient, Leydig Libère la testostérone',
      explication:
        'La cellule de Sertoli assure le soutien des cellules germinales, la cellule de Leydig libère la testostérone dans le tissu interstitiel.',
    },
    {
      moyen: 'Proliférative = Pousse (œstrogènes), Sécrétoire = Stocke (progestérone)',
      explication:
        'La phase proliférative fait pousser l’endomètre sous l’effet des œstrogènes, la phase sécrétoire le prépare à la nidation sous l’effet de la progestérone.',
    },
  ],
  sources: [
    'Wheater, Histologie fonctionnelle',
    'Junqueira, Histologie',
    'Poirier, Histologie moléculaire',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'histo-histologie-urinaire-genitale-fc-01',
      recto: 'Quels sont les deux composants du néphron ?',
      verso: 'Le corpuscule rénal (filtration) et le système tubulaire (réabsorption, sécrétion).',
      type: 'definition',
      tags: ['néphron'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-02',
      recto: 'Quels sont les trois éléments de la barrière de filtration glomérulaire ?',
      verso: 'L’endothélium fenêtré, la membrane basale glomérulaire et les podocytes avec leurs fentes de filtration.',
      type: 'classification',
      tags: ['corpuscule rénal'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-03',
      recto: 'Quel critère histologique distingue le tube contourné proximal du tube contourné distal ?',
      verso: 'La bordure en brosse, développée dans le tube contourné proximal, absente dans le tube contourné distal.',
      type: 'classification',
      tags: ['néphron'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-04',
      recto: 'Comment se nomme l’épithélium des voies urinaires excrétrices ?',
      verso: 'L’urothélium, ou épithélium de transition.',
      type: 'definition',
      tags: ['voies urinaires'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-05',
      recto: 'Quelle cellule testiculaire sécrète la testostérone ?',
      verso: 'La cellule de Leydig, dans le tissu interstitiel.',
      type: 'mecanisme',
      tags: ['testicule'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-06',
      recto: 'Quelle cellule testiculaire forme la barrière hémato-testiculaire ?',
      verso: 'La cellule de Sertoli, via des jonctions serrées entre cellules voisines.',
      type: 'mecanisme',
      tags: ['testicule'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-07',
      recto: 'Quelles sont les trois grandes étapes de la spermatogenèse ?',
      verso: 'Multiplication (mitoses des spermatogonies), méiose (spermatocytes), spermiogenèse (différenciation en spermatozoïde).',
      type: 'classification',
      tags: ['spermatogenèse'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-08',
      recto: 'Quels sont les cinq stades de la folliculogenèse ?',
      verso: 'Follicule primordial, primaire, secondaire (pré-antral), tertiaire (antral), puis follicule mûr de De Graaf.',
      type: 'classification',
      tags: ['ovaire'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-09',
      recto: 'Que sécrète le corps jaune ?',
      verso: 'Essentiellement de la progestérone.',
      type: 'mecanisme',
      tags: ['ovaire', 'corps jaune'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-10',
      recto: 'Quelle couche de l’endomètre desquame lors des règles ?',
      verso: 'La couche fonctionnelle ; la couche basale persiste et régénère la couche fonctionnelle.',
      type: 'definition',
      tags: ['endomètre'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-11',
      recto: 'Quelle hormone domine la phase proliférative de l’endomètre ?',
      verso: 'Les œstrogènes, sécrétés par les follicules ovariens en croissance.',
      type: 'mecanisme',
      tags: ['cycle endométrial'],
    },
    {
      id: 'histo-histologie-urinaire-genitale-fc-12',
      recto: 'Qu’est-ce que l’appareil juxtaglomérulaire et que sécrète-t-il ?',
      verso: 'Une structure associant l’artériole afférente et la macula densa du tube contourné distal, sécrétant la rénine.',
      type: 'mecanisme',
      tags: ['corpuscule rénal'],
    },
  ],
  qcm: [
    {
      id: 'histo-histologie-urinaire-genitale-qcm-01',
      enonce: 'Concernant le corpuscule rénal, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le glomérule est un peloton de capillaires.',
          vraie: true,
          justification: 'Exact, entouré par la capsule de Bowman.',
        },
        {
          lettre: 'B',
          texte: 'Le feuillet viscéral de la capsule de Bowman est formé de podocytes.',
          vraie: true,
          justification: 'Exact, ces cellules épithéliales à pédicelles constituent le dernier filtre de la barrière glomérulaire.',
        },
        {
          lettre: 'C',
          texte: 'La macula densa appartient au tube contourné proximal.',
          vraie: false,
          justification: 'Faux : la macula densa appartient au tube contourné distal, au niveau de l’appareil juxtaglomérulaire.',
        },
        {
          lettre: 'D',
          texte: 'La membrane basale glomérulaire est riche en collagène de type IV.',
          vraie: true,
          justification: 'Exact, comme toute lame basale, mais particulièrement développée ici en tant que filtre principal.',
        },
        {
          lettre: 'E',
          texte: 'L’appareil juxtaglomérulaire sécrète l’aldostérone.',
          vraie: false,
          justification: 'Faux : il sécrète la rénine ; l’aldostérone est sécrétée par la corticosurrénale.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir la localisation précise de la macula densa et le rôle de l’appareil juxtaglomérulaire.',
      difficulte: 3,
    },
    {
      id: 'histo-histologie-urinaire-genitale-qcm-02',
      enonce: 'Concernant les segments tubulaires du néphron, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le tube contourné proximal présente une bordure en brosse développée.',
          vraie: true,
          justification: 'Exact, en lien avec sa fonction de réabsorption majoritaire.',
        },
        {
          lettre: 'B',
          texte: 'Le tube collecteur est insensible à l’hormone antidiurétique.',
          vraie: false,
          justification: 'Faux : le tube collecteur est au contraire la cible principale de l’hormone antidiurétique pour la réabsorption d’eau.',
        },
        {
          lettre: 'C',
          texte: 'Le tube contourné distal participe à la réabsorption de sodium régulée par l’aldostérone.',
          vraie: true,
          justification: 'Exact, c’est un site majeur d’action de cette hormone.',
        },
        {
          lettre: 'D',
          texte: 'La branche grêle de l’anse de Henle est bordée par un épithélium pavimenteux simple.',
          vraie: true,
          justification: 'Exact : cet épithélium aplati et dépourvu de bordure en brosse contraste avec l’épithélium cubique de la branche large, porteur des transporteurs actifs.',
        },
        {
          lettre: 'E',
          texte: 'Le tube contourné proximal et le tube contourné distal ont un aspect histologique strictement identique.',
          vraie: false,
          justification: 'Faux : la bordure en brosse développée du tube proximal, absente dans le distal, permet de les distinguer.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Chaque segment tubulaire a une fonction et une régulation hormonale spécifiques.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-urinaire-genitale-qcm-03',
      enonce: 'Concernant les voies urinaires excrétrices, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’urothélium est un épithélium pluristratifié particulier.',
          vraie: true,
          justification: 'Exact, aussi appelé épithélium de transition.',
        },
        {
          lettre: 'B',
          texte: 'L’urothélium s’épaissit lorsque la vessie est en réplétion.',
          vraie: false,
          justification: 'Faux : il s’amincit et s’aplatit lorsque la paroi est distendue, sans réelle diminution du nombre de couches.',
        },
        {
          lettre: 'C',
          texte: 'Les cellules superficielles de l’urothélium sont dites en ombrelle.',
          vraie: true,
          justification: 'Exact, ce sont des cellules volumineuses, parfois binucléées.',
        },
        {
          lettre: 'D',
          texte: 'L’urothélium tapisse uniquement la vessie, jamais les uretères.',
          vraie: false,
          justification: 'Faux : il tapisse l’ensemble des voies urinaires excrétrices, des calices rénaux jusqu’à l’urètre.',
        },
        {
          lettre: 'E',
          texte: 'Les tumeurs de vessie les plus fréquentes sont d’origine urothéliale.',
          vraie: true,
          justification: 'Exact, avec un risque notamment associé au tabagisme.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. L’urothélium est une exception histologique à connaître précisément.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-urinaire-genitale-qcm-04',
      enonce: 'Concernant le testicule et la spermatogenèse, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La cellule de Sertoli sécrète la testostérone.',
          vraie: false,
          justification: 'Faux : c’est la cellule de Leydig qui sécrète la testostérone ; la cellule de Sertoli assure le soutien des cellules germinales.',
        },
        {
          lettre: 'B',
          texte: 'La spermiogenèse correspond à la différenciation morphologique de la spermatide en spermatozoïde.',
          vraie: true,
          justification: 'Exact, sans division cellulaire supplémentaire à cette étape.',
        },
        {
          lettre: 'C',
          texte: 'La barrière hémato-testiculaire est formée par des jonctions serrées entre cellules de Sertoli.',
          vraie: true,
          justification: 'Exact, elle isole immunologiquement les cellules germinales en cours de méiose.',
        },
        {
          lettre: 'D',
          texte: 'La cellule de Leydig se situe dans l’épithélium séminal du tube séminifère.',
          vraie: false,
          justification: 'Faux : la cellule de Leydig se situe dans le tissu interstitiel, entre les tubes séminifères.',
        },
        {
          lettre: 'E',
          texte: 'La cellule de Sertoli sécrète l’hormone antimüllérienne.',
          vraie: true,
          justification: 'Exact, cette sécrétion est importante notamment au cours du développement embryonnaire.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Bien distinguer les rôles complémentaires des cellules de Sertoli et de Leydig.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-urinaire-genitale-qcm-05',
      enonce: 'Concernant l’ovaire et la folliculogenèse, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le follicule primordial est entouré d’une seule couche de cellules folliculaires aplaties.',
          vraie: true,
          justification: 'Exact, c’est le stade le plus précoce de la folliculogenèse.',
        },
        {
          lettre: 'B',
          texte: 'L’antrum folliculaire apparaît dès le stade de follicule primaire.',
          vraie: false,
          justification: 'Faux : l’antrum apparaît au stade tertiaire (antral), non au stade primaire.',
        },
        {
          lettre: 'C',
          texte: 'Le corps jaune sécrète principalement de la progestérone.',
          vraie: true,
          justification: 'Exact, après l’ovulation, à partir des reliquats du follicule.',
        },
        {
          lettre: 'D',
          texte: 'Le stock de follicules ovariens se renouvelle tout au long de la vie adulte.',
          vraie: false,
          justification: 'Faux : le stock est constitué avant la naissance et s’épuise progressivement, sans renouvellement.',
        },
        {
          lettre: 'E',
          texte: 'Le follicule mûr de De Graaf est le stade préovulatoire.',
          vraie: true,
          justification: 'Exact, c’est le dernier stade avant la libération de l’ovocyte.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir l’ordre chronologique des stades folliculaires et l’absence de renouvellement du stock.',
      difficulte: 2,
    },
    {
      id: 'histo-histologie-urinaire-genitale-qcm-06',
      enonce: 'Concernant l’endomètre et le cycle menstruel, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La couche fonctionnelle de l’endomètre desquame lors des règles.',
          vraie: true,
          justification: 'Exact, en l’absence de fécondation.',
        },
        {
          lettre: 'B',
          texte: 'La phase proliférative est dominée par la progestérone.',
          vraie: false,
          justification: 'Faux : la phase proliférative est dominée par les œstrogènes ; la progestérone domine la phase sécrétoire.',
        },
        {
          lettre: 'C',
          texte: 'La phase sécrétoire endométriale correspond à la phase lutéale ovarienne.',
          vraie: true,
          justification: 'Exact, sous l’effet de la progestérone sécrétée par le corps jaune.',
        },
        {
          lettre: 'D',
          texte: 'La couche basale de l’endomètre desquame également lors des règles.',
          vraie: false,
          justification: 'Faux : la couche basale persiste et permet la régénération de la couche fonctionnelle au cycle suivant.',
        },
        {
          lettre: 'E',
          texte: 'Les glandes endométriales deviennent tortueuses et sécrétantes en phase sécrétoire.',
          vraie: true,
          justification: 'Exact, préparant la muqueuse à une éventuelle nidation.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Associer systématiquement chaque phase endométriale à la phase ovarienne correspondante.',
      difficulte: 2,
    },
  ],
};
