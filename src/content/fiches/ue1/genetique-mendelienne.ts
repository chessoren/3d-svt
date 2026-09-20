import type { Fiche } from '../../types';

export const ficheGenetiqueMendelienne: Fiche = {
  id: 'ue1-genetique-mendelienne',
  ue: 'ue1',
  titre: 'Génétique mendélienne et hérédité humaine',
  sousTitre: 'Lois de Mendel, arbres généalogiques, transmissions autosomique, liée à l’X, mitochondriale, pénétrance',
  chapitre: 'Génétique',
  ordre: 11,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'lois de Mendel',
    'arbre généalogique',
    'autosomique dominant',
    'autosomique récessif',
    'lié à l’X',
    'hérédité mitochondriale',
    'pénétrance',
    'expressivité',
  ],
  objectifs: [
    'Énoncer les lois de Mendel et les illustrer par un croisement monohybride et dihybride.',
    'Lire un arbre généalogique et en connaître les conventions de représentation.',
    'Reconnaître les caractéristiques d’une transmission autosomique dominante et récessive.',
    'Reconnaître les caractéristiques d’une transmission liée à l’X, dominante et récessive.',
    'Décrire les particularités de la transmission mitochondriale.',
    'Distinguer pénétrance et expressivité.',
  ],
  sections: [
    {
      id: 'lois-mendel',
      titre: 'Les lois de Mendel',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Gregor Mendel a établi, à partir de croisements chez le petit pois, les principes fondamentaux de la transmission héréditaire des caractères, avant même la découverte de l’ADN et des chromosomes.',
        },
        {
          type: 'liste',
          items: [
            'La loi de l’uniformité des hybrides de première génération : le croisement de deux lignées pures pour un caractère donné produit une descendance uniforme.',
            'La loi de la disjonction des allèles, ou loi de ségrégation : lors de la formation des gamètes, les deux allèles d’un même gène se séparent, chaque gamète n’en recevant qu’un seul ; le croisement de deux hétérozygotes de première génération fait réapparaître le caractère récessif dans un quart de la descendance.',
            'La loi de l’assortiment indépendant : les allèles de deux gènes portés par des chromosomes différents se transmettent indépendamment l’un de l’autre.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Ratios classiques à retenir',
          texte:
            'Un croisement monohybride entre deux hétérozygotes donne, en théorie, une descendance dans un rapport de trois individus de phénotype dominant pour un individu de phénotype récessif. Un croisement dihybride entre deux doubles hétérozygotes, pour des gènes indépendants, donne un rapport phénotypique de neuf, trois, trois, un.',
        },
      ],
    },
    {
      id: 'arbre-genealogique',
      titre: 'L’arbre généalogique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’arbre généalogique, ou pedigree, est la représentation graphique conventionnelle d’une famille, utilisée pour analyser le mode de transmission d’une maladie héréditaire.',
        },
        {
          type: 'tableau',
          titre: 'Conventions de représentation',
          colonnes: ['Symbole', 'Signification'],
          lignes: [
            ['Carré', 'Individu de sexe masculin'],
            ['Cercle', 'Individu de sexe féminin'],
            ['Symbole rempli', 'Individu atteint par la maladie étudiée'],
            ['Symbole à moitié rempli', 'Individu porteur sain, hétérozygote, dans certaines représentations'],
            ['Trait horizontal reliant deux symboles', 'Union entre deux individus'],
            ['Trait vertical descendant', 'Filiation, lien parent-enfant'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Numérotation des générations',
          texte:
            'Chaque génération successive est numérotée par un chiffre romain, de haut en bas de l’arbre, et chaque individu d’une même génération reçoit un numéro arabe, permettant de désigner précisément chaque membre de la famille, par exemple II-3.',
        },
      ],
    },
    {
      id: 'autosomique-dominante',
      titre: 'Transmission autosomique dominante',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une maladie autosomique dominante est liée à un gène porté par un autosome, dont un seul allèle muté suffit à provoquer le phénotype pathologique.',
        },
        {
          type: 'liste',
          items: [
            'La maladie apparaît en général à chaque génération, sans saut de génération, si la pénétrance est complète.',
            'Un sujet atteint transmet la maladie, en moyenne, à la moitié de sa descendance.',
            'Les deux sexes sont atteints avec une fréquence égale.',
            'Un sujet non atteint ne transmet en principe pas la maladie à sa descendance.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple',
          texte:
            'La maladie de Huntington et l’achondroplasie sont des exemples classiques de maladies à transmission autosomique dominante.',
        },
      ],
    },
    {
      id: 'autosomique-recessive',
      titre: 'Transmission autosomique récessive',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une maladie autosomique récessive nécessite la présence de deux allèles mutés, un sur chaque chromosome de la paire, pour que le phénotype pathologique s’exprime.',
        },
        {
          type: 'liste',
          items: [
            'La maladie saute fréquemment des générations : les parents d’un sujet atteint sont le plus souvent hétérozygotes, donc non atteints eux-mêmes.',
            'Deux parents hétérozygotes ont, à chaque grossesse, un risque de un quart que l’enfant soit atteint.',
            'Les deux sexes sont atteints avec une fréquence égale.',
            'La consanguinité entre les parents augmente le risque de transmission d’une maladie autosomique récessive rare, en augmentant la probabilité que les deux parents soient porteurs du même allèle muté.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple',
          texte:
            'La mucoviscidose et la drépanocytose sont des exemples classiques de maladies à transmission autosomique récessive.',
        },
      ],
    },
    {
      id: 'liee-x',
      titre: 'Transmission liée à l’X',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Une maladie liée à l’X est causée par un gène porté par le chromosome X. Sa transmission dépend du caractère dominant ou récessif de l’allèle muté, et du sexe des individus concernés.',
        },
        {
          type: 'comparaison',
          titre: 'Récessive et dominante liées à l’X',
          gauche: {
            titre: 'Récessive liée à l’X',
            points: [
              'Atteint très majoritairement les hommes, hémizygotes pour le chromosome X',
              'Une mère porteuse hétérozygote transmet la maladie à la moitié de ses fils et le statut de porteuse à la moitié de ses filles',
              'Un père atteint transmet le statut de porteuse à toutes ses filles, mais jamais la maladie à ses fils',
            ],
          },
          droite: {
            titre: 'Dominante liée à l’X',
            points: [
              'Peut atteindre les hommes et les femmes, avec parfois une expression plus sévère chez les hommes hémizygotes',
              'Un père atteint transmet la maladie à toutes ses filles et à aucun de ses fils',
              'Une mère atteinte transmet la maladie, en moyenne, à la moitié de ses enfants, quel que soit leur sexe',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'L’absence de transmission père-fils',
          texte:
            'Pour toute maladie liée à l’X, qu’elle soit dominante ou récessive, un père ne peut jamais transmettre le gène en cause à son fils, puisqu’il lui transmet son chromosome Y et non son chromosome X. Cette absence de transmission père-fils est un argument clé pour orienter vers une hérédité liée à l’X sur un arbre généalogique.',
        },
      ],
    },
    {
      id: 'mitochondriale-penetrance-expressivite',
      titre: 'Transmission mitochondriale, pénétrance et expressivité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Certaines maladies héréditaires sont liées à des mutations du génome mitochondrial, dont la transmission suit des règles particulières, distinctes de l’hérédité mendélienne classique.',
        },
        {
          type: 'liste',
          items: [
            'Les mitochondries, et donc leur ADN, sont transmises exclusivement par la mère à l’ensemble de ses enfants, filles et garçons.',
            'Seules les filles atteintes transmettent à leur tour la maladie à leur propre descendance ; un père atteint ne transmet jamais la maladie mitochondriale à ses enfants.',
            'La coexistence, au sein d’une même cellule, de mitochondries porteuses et non porteuses de la mutation, appelée hétéroplasmie, explique en partie la variabilité clinique observée entre les individus atteints.',
          ],
        },
        {
          type: 'definition',
          terme: 'Pénétrance',
          definition:
            'Proportion des individus porteurs d’un génotype donné qui expriment effectivement le phénotype correspondant. Une pénétrance incomplète signifie qu’un individu porteur de la mutation peut rester cliniquement indemne.',
        },
        {
          type: 'definition',
          terme: 'Expressivité',
          definition:
            'Variabilité de la sévérité ou des manifestations cliniques observées entre différents individus porteurs du même génotype pathogène et exprimant effectivement le phénotype.',
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre pénétrance et expressivité',
          texte:
            'La pénétrance répond à la question binaire : le phénotype est-il présent ou absent chez ce porteur ? L’expressivité répond à une question de degré, chez les seuls porteurs qui expriment le phénotype : à quel point ce phénotype est-il sévère ou étendu ?',
        },
      ],
    },
  ],
  pointsCles: [
    'Les lois de Mendel décrivent l’uniformité de la première génération, la ségrégation des allèles et l’assortiment indépendant des gènes non liés.',
    'L’arbre généalogique utilise des conventions précises, carré pour le sexe masculin, cercle pour le sexe féminin, symbole rempli pour un sujet atteint.',
    'Une transmission autosomique dominante touche les deux sexes également, à chaque génération, avec transmission par un sujet atteint à la moitié de sa descendance.',
    'Une transmission autosomique récessive saute souvent des générations, avec un risque de un quart pour deux parents hétérozygotes.',
    'Une transmission liée à l’X exclut toute transmission directe d’un père à son fils.',
    'Une transmission mitochondriale est exclusivement maternelle et touche l’ensemble des enfants, mais seules les filles la retransmettent.',
    'La pénétrance mesure la proportion de porteurs exprimant le phénotype, l’expressivité mesure la sévérité de son expression chez ceux qui l’expriment.',
  ],
  erreursFrequentes: [
    'Confondre pénétrance et expressivité : la première est une question de présence ou d’absence du phénotype, la seconde une question de degré de sévérité.',
    'Oublier que, dans une transmission liée à l’X, un père ne transmet jamais le gène en cause à ses fils.',
    'Croire qu’une maladie autosomique récessive ne peut apparaître que chez des parents consanguins : la consanguinité augmente seulement le risque, elle n’est pas une condition nécessaire.',
    'Penser qu’une transmission mitochondriale peut se faire par un père atteint : elle est exclusivement maternelle.',
    'Confondre le rapport phénotypique du croisement monohybride, trois pour un, avec celui du croisement dihybride, neuf, trois, trois, un.',
  ],
  mnemotechniques: [
    {
      moyen: '3 pour 1, comme la majorité l’emporte',
      explication: 'Le croisement de deux hétérozygotes pour un caractère mendélien classique donne trois quarts de phénotype dominant pour un quart de phénotype récessif.',
    },
    {
      moyen: 'Pas de fils pour le père atteint lié à l’X',
      explication: 'Un père transmet toujours son chromosome Y à ses fils, jamais son chromosome X : aucune transmission directe père-fils n’est donc possible pour une maladie liée à l’X.',
    },
    {
      moyen: 'Mitochondries, cadeau exclusif de la mère',
      explication: 'L’ADN mitochondrial est transmis uniquement par la mère, à tous ses enfants, mais seules les filles pourront le retransmettre à leur tour.',
    },
  ],
  sources: [
    'Nussbaum, Thompson et Thompson, Génétique médicale, édition française',
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-genetique-mendelienne-fc-01',
      recto: 'Quel est le rapport phénotypique attendu d’un croisement monohybride entre deux hétérozygotes ?',
      verso: 'Trois individus de phénotype dominant pour un individu de phénotype récessif.',
      type: 'chiffre',
      tags: ['lois de Mendel'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-02',
      recto: 'Quel est le rapport phénotypique attendu d’un croisement dihybride entre deux doubles hétérozygotes pour des gènes indépendants ?',
      verso: 'Neuf, trois, trois, un.',
      type: 'chiffre',
      tags: ['lois de Mendel'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-03',
      recto: 'Que représentent respectivement le carré et le cercle sur un arbre généalogique ?',
      verso: 'Le carré représente un individu de sexe masculin, le cercle un individu de sexe féminin.',
      type: 'definition',
      tags: ['arbre généalogique'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-04',
      recto: 'Citer trois caractéristiques d’une transmission autosomique dominante sur un arbre généalogique.',
      verso: 'La maladie apparaît à chaque génération, un sujet atteint la transmet à la moitié de sa descendance, les deux sexes sont atteints également.',
      type: 'classification',
      tags: ['autosomique dominant'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-05',
      recto: 'Pourquoi une transmission autosomique récessive saute-t-elle souvent des générations ?',
      verso: 'Parce que les parents d’un sujet atteint sont le plus souvent des hétérozygotes non atteints eux-mêmes.',
      type: 'mecanisme',
      tags: ['autosomique récessif'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-06',
      recto: 'Quel effet la consanguinité a-t-elle sur le risque de maladie autosomique récessive ?',
      verso: 'Elle augmente ce risque, en augmentant la probabilité que les deux parents soient porteurs du même allèle muté.',
      type: 'mecanisme',
      tags: ['consanguinité'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-07',
      recto: 'Pourquoi une maladie récessive liée à l’X atteint-elle très majoritairement les hommes ?',
      verso: 'Parce que les hommes sont hémizygotes pour le chromosome X : un seul allèle muté suffit chez eux à provoquer la maladie.',
      type: 'mecanisme',
      tags: ['lié à l’X'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-08',
      recto: 'Un père atteint d’une maladie liée à l’X peut-il la transmettre à son fils ?',
      verso: 'Non, jamais : il transmet son chromosome Y à ses fils, et non son chromosome X.',
      type: 'mecanisme',
      tags: ['lié à l’X'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-09',
      recto: 'Qui transmet l’ADN mitochondrial à la descendance ?',
      verso: 'Exclusivement la mère, à l’ensemble de ses enfants, filles et garçons.',
      type: 'mecanisme',
      tags: ['hérédité mitochondriale'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-10',
      recto: 'Qu’est-ce que l’hétéroplasmie ?',
      verso: 'La coexistence, au sein d’une même cellule, de mitochondries porteuses et non porteuses d’une mutation de l’ADN mitochondrial.',
      type: 'definition',
      tags: ['hétéroplasmie'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-11',
      recto: 'Définir la pénétrance.',
      verso: 'La proportion des individus porteurs d’un génotype donné qui expriment effectivement le phénotype correspondant.',
      type: 'definition',
      tags: ['pénétrance'],
    },
    {
      id: 'ue1-genetique-mendelienne-fc-12',
      recto: 'Définir l’expressivité.',
      verso: 'La variabilité de la sévérité ou des manifestations cliniques observées entre différents individus porteurs du même génotype pathogène.',
      type: 'definition',
      tags: ['expressivité'],
    },
  ],
  qcm: [
    {
      id: 'ue1-genetique-mendelienne-qcm-01',
      enonce: 'Concernant les lois de Mendel, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le croisement de deux lignées pures pour un caractère donné produit une descendance uniforme.',
          vraie: true,
          justification: 'Exact, c’est la loi d’uniformité des hybrides de première génération.',
        },
        {
          lettre: 'B',
          texte: 'Un croisement monohybride entre deux hétérozygotes donne un rapport phénotypique de un pour un.',
          vraie: false,
          justification: 'Faux : le rapport attendu est de trois pour un, dominant pour récessif.',
        },
        {
          lettre: 'C',
          texte: 'La loi de l’assortiment indépendant s’applique aux gènes portés par des chromosomes différents.',
          vraie: true,
          justification: 'Des gènes situés sur des chromosomes distincts ségrégent indépendamment lors de la méiose, chaque paire d’allèles se répartissant sans influence de l’autre.',
        },
        {
          lettre: 'D',
          texte: 'Un croisement dihybride entre deux doubles hétérozygotes indépendants donne un rapport de neuf, trois, trois, un.',
          vraie: true,
          justification: 'La combinaison des deux ségrégations indépendantes, chacune donnant trois pour un, produit par multiplication les quatre classes phénotypiques dans le rapport neuf, trois, trois, un.',
        },
        {
          lettre: 'E',
          texte: 'Les lois de Mendel ont été établies à partir d’observations sur l’espèce humaine.',
          vraie: false,
          justification: 'Faux : elles ont été établies à partir de croisements chez le petit pois.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Bien retenir les deux rapports classiques, trois pour un et neuf, trois, trois, un.',
      difficulte: 1,
    },
    {
      id: 'ue1-genetique-mendelienne-qcm-02',
      enonce: 'Concernant l’arbre généalogique, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le cercle représente un individu de sexe masculin.',
          vraie: false,
          justification: 'Faux : le cercle représente un individu de sexe féminin ; le carré représente le sexe masculin.',
        },
        {
          lettre: 'B',
          texte: 'Un trait horizontal relie deux individus formant une union.',
          vraie: true,
          justification: 'Par convention, le trait horizontal figure le lien conjugal entre deux individus, alors que la filiation vers leurs enfants est représentée par une ligne verticale descendante.',
        },
        {
          lettre: 'C',
          texte: 'Un symbole rempli désigne un individu atteint de la maladie étudiée.',
          vraie: true,
          justification: 'Le remplissage du cercle ou du carré est la convention universelle des arbres généalogiques pour signaler un sujet cliniquement atteint.',
        },
        {
          lettre: 'D',
          texte: 'Les générations sont numérotées par des chiffres romains.',
          vraie: true,
          justification: 'Chaque génération successive reçoit un chiffre romain, tandis que les individus d’une même génération sont numérotés en chiffres arabes, ce qui permet de désigner précisément chaque sujet.',
        },
        {
          lettre: 'E',
          texte: 'Un trait vertical relie deux conjoints.',
          vraie: false,
          justification: 'Faux : le trait vertical représente une filiation, pas une union.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. Bien mémoriser les conventions symboliques de base.',
      difficulte: 1,
    },
    {
      id: 'ue1-genetique-mendelienne-qcm-03',
      enonce: 'Concernant les transmissions autosomiques dominante et récessive, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Une transmission autosomique dominante saute fréquemment des générations.',
          vraie: false,
          justification: 'Faux : c’est au contraire la transmission autosomique récessive qui saute fréquemment des générations.',
        },
        {
          lettre: 'B',
          texte: 'Deux parents hétérozygotes pour une maladie autosomique récessive ont, à chaque grossesse, un risque de un quart d’avoir un enfant atteint.',
          vraie: true,
          justification: 'Le croisement de deux hétérozygotes reproduit le schéma mendélien classique, avec un quart d’enfants homozygotes récessifs donc atteints, la moitié hétérozygotes et un quart homozygotes normaux.',
        },
        {
          lettre: 'C',
          texte: 'Un sujet atteint d’une maladie autosomique dominante transmet en moyenne la maladie à la moitié de sa descendance.',
          vraie: true,
          justification: 'Un sujet atteint est le plus souvent hétérozygote et transmet son allèle muté, ou son allèle sain, avec une probabilité de un demi à chaque enfant.',
        },
        {
          lettre: 'D',
          texte: 'Les deux sexes sont atteints avec une fréquence égale dans les transmissions autosomiques, dominante comme récessive.',
          vraie: true,
          justification: 'Exact, contrairement aux transmissions liées à l’X.',
        },
        {
          lettre: 'E',
          texte: 'La consanguinité augmente le risque de maladie autosomique dominante.',
          vraie: false,
          justification: 'Faux : la consanguinité augmente surtout le risque de maladies autosomiques récessives rares.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. Retenir l’opposition entre transmission dominante, sans saut de génération, et récessive, avec sauts fréquents.',
      difficulte: 2,
    },
    {
      id: 'ue1-genetique-mendelienne-qcm-04',
      enonce: 'Concernant la transmission liée à l’X, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un père atteint d’une maladie liée à l’X peut transmettre la maladie à son fils.',
          vraie: false,
          justification: 'Faux : c’est impossible, un père transmet son chromosome Y à son fils, jamais son chromosome X.',
        },
        {
          lettre: 'B',
          texte: 'Une maladie récessive liée à l’X atteint plus fréquemment les hommes que les femmes.',
          vraie: true,
          justification: 'Exact, en raison de leur hémizygotie pour le chromosome X.',
        },
        {
          lettre: 'C',
          texte: 'Une mère hétérozygote pour une maladie récessive liée à l’X transmet la maladie à la moitié de ses fils.',
          vraie: true,
          justification: 'Chaque fils reçoit un seul chromosome X maternel avec une probabilité de un demi de recevoir l’allèle muté ; étant hémizygote, il exprime alors la maladie.',
        },
        {
          lettre: 'D',
          texte: 'Un père atteint d’une maladie dominante liée à l’X transmet la maladie à toutes ses filles.',
          vraie: true,
          justification: 'Exact, puisqu’il transmet son unique chromosome X à toutes ses filles.',
        },
        {
          lettre: 'E',
          texte: 'La transmission liée à l’X ne présente aucune particularité par rapport à la transmission autosomique.',
          vraie: false,
          justification: 'Faux : l’absence de transmission père-fils est une particularité majeure de la transmission liée à l’X.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. L’absence de transmission père-fils est le critère le plus discriminant sur un arbre généalogique.',
      difficulte: 2,
    },
    {
      id: 'ue1-genetique-mendelienne-qcm-05',
      enonce: 'Concernant la transmission mitochondriale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ADN mitochondrial est transmis à la fois par le père et par la mère.',
          vraie: false,
          justification: 'Faux : la transmission est exclusivement maternelle.',
        },
        {
          lettre: 'B',
          texte: 'Une mère atteinte transmet la maladie mitochondriale à l’ensemble de ses enfants, filles et garçons.',
          vraie: true,
          justification: 'L’ovocyte apporte la quasi-totalité des mitochondries de l’embryon, si bien qu’une mère atteinte transmet son ADN mitochondrial muté à tous ses enfants, quel que soit leur sexe.',
        },
        {
          lettre: 'C',
          texte: 'Seules les filles atteintes retransmettent la maladie mitochondriale à leur propre descendance.',
          vraie: true,
          justification: 'Seul l’ovocyte transmet ses mitochondries à l’embryon ; les mitochondries des spermatozoïdes sont éliminées après la fécondation, ce qui exclut toute transmission par les fils atteints.',
        },
        {
          lettre: 'D',
          texte: 'L’hétéroplasmie désigne la coexistence de mitochondries porteuses et non porteuses de la mutation.',
          vraie: true,
          justification: 'Chaque cellule contient de nombreuses mitochondries : lorsque seule une partie de leur ADN porte la mutation, on parle d’hétéroplasmie, par opposition à l’homoplasmie où toutes les copies sont identiques.',
        },
        {
          lettre: 'E',
          texte: 'Un père atteint peut transmettre la maladie mitochondriale à ses enfants.',
          vraie: false,
          justification: 'Faux : un père atteint ne transmet jamais de maladie mitochondriale à sa descendance.',
        },
      ],
      correction: 'Réponses exactes : B, C et D. La transmission mitochondriale est exclusivement maternelle, mais concerne tous les enfants.',
      difficulte: 2,
    },
    {
      id: 'ue1-genetique-mendelienne-qcm-06',
      enonce: 'Concernant la pénétrance et l’expressivité, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La pénétrance mesure la proportion de porteurs d’un génotype qui expriment le phénotype correspondant.',
          vraie: true,
          justification: 'C’est une notion binaire, exprimée en pourcentage, qui rend compte du nombre de porteurs de la mutation développant réellement le phénotype attendu.',
        },
        {
          lettre: 'B',
          texte: 'L’expressivité mesure la sévérité du phénotype chez les individus qui l’expriment.',
          vraie: true,
          justification: 'Contrairement à la pénétrance qui est binaire, l’expressivité rend compte du degré, souvent variable, de sévérité clinique chez les sujets qui expriment le phénotype.',
        },
        {
          lettre: 'C',
          texte: 'Une pénétrance incomplète signifie qu’un porteur de la mutation peut rester cliniquement indemne.',
          vraie: true,
          justification: 'Une pénétrance inférieure à cent pour cent signifie que certains porteurs du génotype pathogène n’expriment jamais le phénotype correspondant, ce qui peut expliquer un saut de génération apparent.',
        },
        {
          lettre: 'D',
          texte: 'La pénétrance et l’expressivité désignent le même phénomène biologique.',
          vraie: false,
          justification: 'Faux : ce sont deux notions distinctes, la présence ou l’absence du phénotype d’une part, son degré de sévérité d’autre part.',
        },
        {
          lettre: 'E',
          texte: 'Une expressivité variable peut expliquer des différences cliniques entre plusieurs membres atteints d’une même famille.',
          vraie: true,
          justification: 'Un même génotype pathogène peut se traduire par des tableaux cliniques de sévérité différente d’un individu à l’autre, y compris au sein d’une même famille : c’est le principe même de l’expressivité variable.',
        },
      ],
      correction: 'Réponses exactes : A, B, C et E. Bien distinguer les deux notions, l’une binaire, l’autre graduelle.',
      difficulte: 2,
    },
  ],
};
