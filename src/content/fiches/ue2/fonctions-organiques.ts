import type { Fiche } from '../../types';

export const ficheFonctionsOrganiques: Fiche = {
  id: 'ue2-fonctions-organiques',
  ue: 'ue2',
  titre: 'Les grandes fonctions organiques du vivant',
  sousTitre: 'Alcools, aldéhydes, cétones, acides carboxyliques, amines, amides, esters et thiols',
  chapitre: 'Chimie organique',
  ordre: 9,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'fonction organique',
    'alcool',
    'aldéhyde',
    'cétone',
    'acide carboxylique',
    'amine',
    'amide',
    'ester',
  ],
  objectifs: [
    'Reconnaître et nommer les principales fonctions organiques rencontrées en biochimie.',
    'Décrire les propriétés physico-chimiques associées à chaque groupement fonctionnel.',
    'Établir des correspondances entre fonctions organiques et molécules biologiques usuelles.',
    'Comparer la réactivité relative des différentes fonctions carbonylées.',
    'Appliquer les règles de nomenclature de base à des molécules simples.',
  ],
  sections: [
    {
      id: 'alcools-thiols',
      titre: 'Alcools et thiols',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un alcool est caractérisé par un groupement hydroxyle -OH porté par un carbone saturé (non aromatique et ne portant pas d’autre hétéroatome caractéristique d’une autre fonction). Le suffixe -ol indique la présence de cette fonction dans la nomenclature systématique.",
        },
        {
          type: 'tableau',
          titre: 'Classification des alcools',
          colonnes: ['Classe', 'Définition', 'Exemple'],
          lignes: [
            ['Primaire', 'Carbone porteur de -OH lié à un seul autre carbone', 'Éthanol'],
            ['Secondaire', 'Carbone porteur de -OH lié à deux autres carbones', 'Propan-2-ol'],
            ['Tertiaire', 'Carbone porteur de -OH lié à trois autres carbones', '2-méthylpropan-2-ol'],
          ],
        },
        {
          type: 'definition',
          terme: 'Thiol',
          definition:
            "Fonction organique caractérisée par un groupement thiol -SH, analogue soufré de l’alcool. Le suffixe -thiol indique sa présence. La cystéine, avec son groupement thiol, en est un exemple biologique majeur, à l’origine des ponts disulfure.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Liaison hydrogène et solubilité',
          texte:
            "Les alcools, grâce à leur groupement -OH, forment des liaisons hydrogène avec l’eau, ce qui explique la bonne solubilité aqueuse des petites molécules alcooliques. Les thiols, malgré une structure analogue, forment des liaisons hydrogène plus faibles et sont donc moins solubles dans l’eau et davantage odorants.",
        },
      ],
    },
    {
      id: 'aldehydes-cetones',
      titre: 'Aldéhydes et cétones',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les aldéhydes et les cétones partagent le groupement carbonyle C=O, mais se distinguent par la position de ce groupement sur la chaîne carbonée.",
        },
        {
          type: 'tableau',
          titre: 'Aldéhydes et cétones',
          colonnes: ['Fonction', 'Position du carbonyle', 'Suffixe', 'Exemple'],
          lignes: [
            ['Aldéhyde', 'En bout de chaîne, lié à au moins un hydrogène', '-al', 'Éthanal (acétaldéhyde)'],
            ['Cétone', 'À l’intérieur de la chaîne, entre deux carbones', '-one', 'Propanone (acétone)'],
          ],
        },
        {
          type: 'definition',
          terme: 'Groupement carbonyle',
          definition:
            "Groupement fonctionnel C=O, très polarisé en raison de la forte électronégativité de l’oxygène. Le carbone du carbonyle, déficitaire en électrons, est le siège d’attaques nucléophiles, ce qui explique la réactivité chimique commune aux aldéhydes et aux cétones.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Différencier aldéhyde et cétone en pratique',
          texte:
            "Un aldéhyde est facilement oxydable en acide carboxylique, car son carbone carbonylé porte encore un hydrogène. Une cétone, dont le carbone carbonylé est lié à deux carbones, ne peut pas être oxydée dans les mêmes conditions douces : cette différence de réactivité est classiquement exploitée pour les distinguer expérimentalement.",
        },
      ],
    },
    {
      id: 'acides-carboxyliques-esters',
      titre: 'Acides carboxyliques et esters',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’acide carboxylique associe un groupement carbonyle et un groupement hydroxyle sur le même carbone, formant le groupement carboxyle -COOH. C’est une fonction acide, capable de céder un proton en solution aqueuse.",
        },
        {
          type: 'definition',
          terme: 'Groupement carboxyle',
          definition:
            "Groupement -COOH, dont l’acidité s’explique par la stabilisation par résonance de la base conjuguée, l’ion carboxylate -COO−, dans lequel la charge négative est délocalisée entre les deux atomes d’oxygène.",
        },
        {
          type: 'definition',
          terme: 'Ester',
          definition:
            "Fonction résultant formellement de la condensation d’un acide carboxylique et d’un alcool, avec élimination d’une molécule d’eau, formant le groupement -COO-. Les esters sont largement présents dans le vivant, notamment sous forme de triglycérides (esters d’acides gras et de glycérol).",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des fonctions carboxyliques et dérivées',
          colonnes: ['Fonction', 'Groupement', 'Exemple biologique'],
          lignes: [
            ['Acide carboxylique', '-COOH', 'Acides gras, acide lactique, acide pyruvique'],
            ['Ester', '-COO-', 'Triglycérides, phospholipides (liaison ester avec le glycérol)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Acidité relative',
          texte:
            "Le pKa d’un acide carboxylique aliphatique simple est généralement compris entre 4 et 5, ce qui en fait un acide faible, bien plus acide qu’un alcool (dont le pKa dépasse largement 15), en raison de la stabilisation de sa base conjuguée par résonance.",
        },
      ],
    },
    {
      id: 'amines-amides',
      titre: 'Amines et amides',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’amine dérive formellement de l’ammoniac NH3 par remplacement d’un ou plusieurs hydrogènes par des groupements carbonés. L’amide résulte formellement de la condensation d’un acide carboxylique et d’une amine.",
        },
        {
          type: 'tableau',
          titre: 'Classification des amines',
          colonnes: ['Classe', 'Définition', 'Exemple'],
          lignes: [
            ['Primaire', 'Un seul groupement carboné lié à l’azote', 'Méthanamine'],
            ['Secondaire', 'Deux groupements carbonés liés à l’azote', 'Diméthylamine'],
            ['Tertiaire', 'Trois groupements carbonés liés à l’azote', 'Triméthylamine'],
          ],
        },
        {
          type: 'definition',
          terme: 'Groupement amide',
          definition:
            "Groupement -CO-NH-, dont l’exemple biologique le plus important est la liaison peptidique reliant les acides aminés dans une protéine. Contrairement à l’amine, l’amide n’est pas basique en solution aqueuse, le doublet non liant de l’azote étant délocalisé par mésomérie vers le carbonyle voisin.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Amine basique, amide non basique',
          texte:
            "Une erreur fréquente consiste à considérer l’amide comme basique par analogie avec l’amine. En réalité, la délocalisation du doublet non liant de l’azote de l’amide vers l’oxygène du carbonyle voisin, par mésomérie, rend ce doublet indisponible pour capter un proton : l’amide est donc une fonction pratiquement neutre.",
        },
      ],
    },
    {
      id: 'synthese-nomenclature',
      titre: 'Synthèse comparative et repères de nomenclature',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La nomenclature systématique des molécules organiques repose sur l’identification de la chaîne carbonée principale, la localisation des groupements fonctionnels et l’attribution de suffixes et préfixes selon des règles hiérarchisées de priorité entre fonctions.",
        },
        {
          type: 'tableau',
          titre: 'Récapitulatif des principales fonctions et suffixes',
          colonnes: ['Fonction', 'Groupement caractéristique', 'Suffixe (nomenclature systématique)'],
          lignes: [
            ['Acide carboxylique', '-COOH', 'acide -oïque'],
            ['Ester', '-COO-', '-oate de -yle'],
            ['Amide', '-CO-NH-', '-amide'],
            ['Aldéhyde', '-CHO', '-al'],
            ['Cétone', '-CO-', '-one'],
            ['Amine', '-NH2', '-amine'],
            ['Alcool', '-OH', '-ol'],
            ['Thiol', '-SH', '-thiol'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Ordre de priorité décroissante des fonctions',
          texte:
            "Lorsque plusieurs fonctions sont présentes sur une même molécule, une seule est nommée comme fonction principale (suffixe), les autres devenant des préfixes. L’ordre de priorité décroissante usuel est : acide carboxylique, ester, amide, nitrile, aldéhyde, cétone, alcool, amine.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple biologique intégrateur : l’acide pyruvique',
          texte:
            "L’acide pyruvique (acide 2-oxopropanoïque), carrefour central du métabolisme glucidique, porte à la fois une fonction cétone (en position 2) et une fonction acide carboxylique (en position 1), illustrant qu’une même molécule biologique peut réunir plusieurs fonctions organiques.",
        },
      ],
    },
  ],
  pointsCles: [
    'Un alcool porte un groupement -OH sur un carbone saturé ; un thiol porte l’analogue soufré -SH.',
    'Aldéhydes et cétones partagent le groupement carbonyle C=O, mais diffèrent par sa position (bout de chaîne ou intérieur de chaîne).',
    'Un aldéhyde est facilement oxydable en acide carboxylique, contrairement à une cétone.',
    'L’acidité du groupement carboxyle -COOH s’explique par la stabilisation par résonance de sa base conjuguée.',
    'Un ester résulte formellement de la condensation d’un acide carboxylique et d’un alcool ; un amide, de celle d’un acide carboxylique et d’une amine.',
    'Contrairement à l’amine, l’amide n’est pas basique, le doublet de l’azote étant délocalisé vers le carbonyle par mésomérie.',
    'Lorsque plusieurs fonctions coexistent sur une molécule, une seule est désignée par le suffixe, selon un ordre de priorité hiérarchisé.',
  ],
  erreursFrequentes: [
    'Confondre aldéhyde et cétone en négligeant la position du groupement carbonyle sur la chaîne.',
    'Croire qu’une cétone s’oxyde aussi facilement qu’un aldéhyde en acide carboxylique.',
    'Considérer l’amide comme une fonction basique, par analogie erronée avec l’amine.',
    'Oublier la stabilisation par résonance qui rend l’acide carboxylique nettement plus acide qu’un alcool.',
    'Négliger l’ordre de priorité des fonctions lors du choix du suffixe principal dans un nom systématique.',
  ],
  mnemotechniques: [
    {
      moyen: '« AL au bout, ONE au milieu »',
      explication:
        'Le suffixe -al (aldéhyde) désigne un carbonyle en bout de chaîne ; le suffixe -one (cétone) désigne un carbonyle à l’intérieur de la chaîne.',
    },
    {
      moyen: '« Acide, Ester, Amide, Aldéhyde, Cétone, Alcool, Amine » (ordre de priorité)',
      explication:
        'Phrase à mémoriser dans l’ordre pour retrouver rapidement quelle fonction devient le suffixe principal en cas de fonctions multiples sur une même molécule.',
    },
    {
      moyen: '« L’amide ne mord pas »',
      explication:
        'Rappelle que l’amide, contrairement à l’amine, n’est pas basique : son doublet d’azote est neutralisé par délocalisation vers le carbonyle.',
    },
  ],
  sources: [
    'Chimie organique, collection PASS/LAS, ouvrage de référence UE2',
    'Clayden, Chimie organique',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-fonctions-organiques-fc-01', recto: 'Quel est le groupement caractéristique d’un alcool ?', verso: 'Le groupement hydroxyle -OH, porté par un carbone saturé.', type: 'definition', tags: ['alcool'] },
    { id: 'ue2-fonctions-organiques-fc-02', recto: 'Quelle est la différence de position du carbonyle entre aldéhyde et cétone ?', verso: 'L’aldéhyde porte le carbonyle en bout de chaîne (lié à un hydrogène) ; la cétone le porte à l’intérieur de la chaîne, entre deux carbones.', type: 'definition', tags: ['aldéhyde', 'cétone'] },
    { id: 'ue2-fonctions-organiques-fc-03', recto: 'Un aldéhyde est-il plus facilement oxydable qu’une cétone ?', verso: 'Oui : l’aldéhyde s’oxyde facilement en acide carboxylique, la cétone ne s’oxyde pas dans les mêmes conditions douces.', type: 'mecanisme', tags: ['oxydation'] },
    { id: 'ue2-fonctions-organiques-fc-04', recto: 'Pourquoi l’acide carboxylique est-il un acide plus fort qu’un alcool ?', verso: 'Parce que sa base conjuguée, l’ion carboxylate, est stabilisée par résonance entre les deux atomes d’oxygène.', type: 'mecanisme', tags: ['acide carboxylique'] },
    { id: 'ue2-fonctions-organiques-fc-05', recto: 'Comment se forme formellement un ester ?', verso: 'Par condensation d’un acide carboxylique et d’un alcool, avec élimination d’eau.', type: 'mecanisme', tags: ['ester'] },
    { id: 'ue2-fonctions-organiques-fc-06', recto: 'Comment se forme formellement un amide ?', verso: 'Par condensation d’un acide carboxylique et d’une amine, avec élimination d’eau.', type: 'mecanisme', tags: ['amide'] },
    { id: 'ue2-fonctions-organiques-fc-07', recto: 'L’amide est-il une fonction basique comme l’amine ?', verso: 'Non : le doublet non liant de l’azote de l’amide est délocalisé par mésomérie vers le carbonyle, ce qui le rend pratiquement neutre.', type: 'mecanisme', tags: ['amide'] },
    { id: 'ue2-fonctions-organiques-fc-08', recto: 'Quel est l’exemple biologique majeur de fonction amide ?', verso: 'La liaison peptidique, qui relie les acides aminés dans une protéine.', type: 'clinique', tags: ['liaison peptidique'] },
    { id: 'ue2-fonctions-organiques-fc-09', recto: 'Quel groupement caractérise un thiol ?', verso: 'Le groupement -SH, analogue soufré de l’alcool.', type: 'definition', tags: ['thiol'] },
    { id: 'ue2-fonctions-organiques-fc-10', recto: 'Citer un exemple biologique d’ester.', verso: 'Les triglycérides, esters d’acides gras et de glycérol.', type: 'clinique', tags: ['ester'] },
    { id: 'ue2-fonctions-organiques-fc-11', recto: 'Quel est le pKa approximatif d’un acide carboxylique aliphatique simple ?', verso: 'Entre 4 et 5.', type: 'chiffre', tags: ['acide carboxylique', 'pKa'] },
    { id: 'ue2-fonctions-organiques-fc-12', recto: 'Quelles deux fonctions organiques coexistent dans l’acide pyruvique ?', verso: 'Une fonction cétone (en position 2) et une fonction acide carboxylique (en position 1).', type: 'clinique', tags: ['acide pyruvique'] },
  ],
  qcm: [
    {
      id: 'ue2-fonctions-organiques-qcm-01',
      enonce: 'Concernant les alcools et les thiols, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un alcool primaire porte le groupement -OH sur un carbone lié à un seul autre carbone.', vraie: true, justification: 'Exact : c’est la définition même d’un alcool primaire, par opposition aux alcools secondaire et tertiaire.' },
        { lettre: 'B', texte: 'Un thiol porte le groupement -OH.', vraie: false, justification: 'Faux : un thiol porte le groupement -SH, analogue soufré de l’alcool.' },
        { lettre: 'C', texte: 'Les alcools forment des liaisons hydrogène avec l’eau.', vraie: true, justification: 'Exact, grâce à leur groupement hydroxyle.' },
        { lettre: 'D', texte: 'La cystéine porte un groupement thiol dans sa chaîne latérale.', vraie: true, justification: 'Exact, à l’origine des ponts disulfure.' },
        { lettre: 'E', texte: 'Les thiols forment des liaisons hydrogène plus fortes que les alcools.', vraie: false, justification: 'Faux : les liaisons hydrogène des thiols sont plus faibles que celles des alcools.' },
      ],
      correction: 'Réponses exactes : A, C et D. Le thiol est l’analogue soufré, et non oxygéné, de l’alcool.',
      difficulte: 1,
    },
    {
      id: 'ue2-fonctions-organiques-qcm-02',
      enonce: 'Concernant les aldéhydes et les cétones, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le suffixe -al désigne une fonction cétone.', vraie: false, justification: 'Faux : le suffixe -al désigne une fonction aldéhyde ; -one désigne la cétone.' },
        { lettre: 'B', texte: 'Le carbone du groupement carbonyle est le siège d’attaques nucléophiles.', vraie: true, justification: 'Exact, en raison de sa polarisation positive.' },
        { lettre: 'C', texte: 'Un aldéhyde peut être oxydé en acide carboxylique.', vraie: true, justification: 'Exact, car son carbone carbonylé porte encore un hydrogène.' },
        { lettre: 'D', texte: 'Une cétone est plus facilement oxydable qu’un aldéhyde.', vraie: false, justification: 'Faux : c’est l’inverse, la cétone n’est pas oxydable dans les conditions douces qui oxydent l’aldéhyde.' },
        { lettre: 'E', texte: 'Le groupement carbonyle est noté C=O.', vraie: true, justification: 'Exact : le carbonyle est formé d’un atome de carbone lié par une double liaison à un atome d’oxygène.' },
      ],
      correction: 'Réponses exactes : B, C et E. Bien retenir la réactivité différentielle entre aldéhyde et cétone vis-à-vis de l’oxydation.',
      difficulte: 2,
    },
    {
      id: 'ue2-fonctions-organiques-qcm-03',
      enonce: 'Concernant les acides carboxyliques et les esters, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le groupement carboxyle se note -COOH.', vraie: true, justification: 'Exact : c’est la notation usuelle du groupement carboxyle, qui associe un carbonyle et un hydroxyle portés par le même carbone.' },
        { lettre: 'B', texte: 'Un acide carboxylique est plus acide qu’un alcool.', vraie: true, justification: 'Exact, en raison de la stabilisation par résonance de sa base conjuguée.' },
        { lettre: 'C', texte: 'Un ester résulte de la condensation de deux molécules d’alcool.', vraie: false, justification: 'Faux : un ester résulte de la condensation d’un acide carboxylique et d’un alcool.' },
        { lettre: 'D', texte: 'Les triglycérides sont des esters d’acides gras et de glycérol.', vraie: true, justification: 'Exact : chacune des trois fonctions alcool du glycérol forme une liaison ester avec un acide gras.' },
        { lettre: 'E', texte: 'Le pKa d’un acide carboxylique aliphatique simple est généralement supérieur à 10.', vraie: false, justification: 'Faux : il est généralement compris entre 4 et 5.' },
      ],
      correction: 'Réponses exactes : A, B et D. Bien retenir la formation d’un ester à partir d’un acide et d’un alcool, non de deux alcools.',
      difficulte: 2,
    },
    {
      id: 'ue2-fonctions-organiques-qcm-04',
      enonce: 'Concernant les amines et les amides, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une amine tertiaire porte trois groupements carbonés liés à l’azote.', vraie: true, justification: 'Exact : c’est la définition d’une amine tertiaire, par opposition aux amines primaire et secondaire.' },
        { lettre: 'B', texte: 'Un amide résulte de la condensation d’un acide carboxylique et d’une amine.', vraie: true, justification: 'Exact : cette condensation, avec élimination d’une molécule d’eau, forme la liaison amide.' },
        { lettre: 'C', texte: 'Un amide est une fonction basique, comme une amine.', vraie: false, justification: 'Faux : le doublet de l’azote de l’amide est délocalisé vers le carbonyle, ce qui le rend non basique.' },
        { lettre: 'D', texte: 'La liaison peptidique est une fonction amide.', vraie: true, justification: 'Exact : elle unit le carboxyle d’un acide aminé à l’amine du suivant, exactement comme un amide.' },
        { lettre: 'E', texte: 'Une amine primaire porte deux groupements carbonés liés à l’azote.', vraie: false, justification: 'Faux : une amine primaire ne porte qu’un seul groupement carboné lié à l’azote.' },
      ],
      correction: 'Réponses exactes : A, B et D. Le caractère non basique de l’amide, malgré la présence d’azote, est un point classiquement testé.',
      difficulte: 2,
    },
    {
      id: 'ue2-fonctions-organiques-qcm-05',
      enonce: 'Concernant la nomenclature et la priorité des fonctions organiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’acide carboxylique est prioritaire sur l’ester dans le choix du suffixe.', vraie: true, justification: 'Exact, selon l’ordre de priorité usuel.' },
        { lettre: 'B', texte: 'L’amine est généralement prioritaire sur l’alcool.', vraie: false, justification: 'Faux : l’alcool est prioritaire sur l’amine dans l’ordre usuel de priorité des fonctions.' },
        { lettre: 'C', texte: 'Le suffixe -one désigne une fonction cétone.', vraie: true, justification: 'Exact : le suffixe -one, comme dans propanone, signale la présence d’une fonction cétone.' },
        { lettre: 'D', texte: 'Lorsque plusieurs fonctions sont présentes, toutes sont nommées par un suffixe.', vraie: false, justification: 'Faux : une seule fonction, la plus prioritaire, est désignée par le suffixe ; les autres deviennent des préfixes.' },
        { lettre: 'E', texte: 'Le suffixe -amide désigne la fonction amide.', vraie: true, justification: 'Exact : le suffixe -amide, comme dans éthanamide, signale la présence d’une fonction amide.' },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir l’ordre décroissant de priorité : acide, ester, amide, aldéhyde, cétone, alcool, amine.',
      difficulte: 2,
    },
    {
      id: 'ue2-fonctions-organiques-qcm-06',
      enonce: 'Concernant l’acide pyruvique et les fonctions organiques biologiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’acide pyruvique porte une fonction acide carboxylique.', vraie: true, justification: 'Exact, en position 1.' },
        { lettre: 'B', texte: 'L’acide pyruvique porte également une fonction cétone.', vraie: true, justification: 'Exact, en position 2.' },
        { lettre: 'C', texte: 'Les acides gras sont des exemples biologiques d’acides carboxyliques.', vraie: true, justification: 'Exact : les acides gras portent une fonction acide carboxylique à l’extrémité de leur chaîne carbonée.' },
        { lettre: 'D', texte: 'Les phospholipides comportent des liaisons ester avec le glycérol.', vraie: true, justification: 'Exact, à l’image des triglycérides.' },
        { lettre: 'E', texte: 'Une molécule biologique ne peut porter qu’une seule fonction organique à la fois.', vraie: false, justification: 'Faux : de nombreuses molécules biologiques, comme l’acide pyruvique, portent plusieurs fonctions simultanément.' },
      ],
      correction: 'Réponses exactes : A, B, C et D. Les molécules biologiques combinent fréquemment plusieurs fonctions organiques.',
      difficulte: 2,
    },
  ],
};
