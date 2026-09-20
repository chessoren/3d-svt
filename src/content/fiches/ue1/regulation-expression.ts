import type { Fiche } from '../../types';

export const ficheRegulationExpression: Fiche = {
  id: 'ue1-regulation-expression',
  ue: 'ue1',
  titre: 'Régulation de l’expression génique',
  sousTitre: 'Opéron lactose et tryptophane, enhancers, méthylation, acétylation des histones, ARN interférence, empreinte parentale',
  chapitre: 'Génétique',
  ordre: 9,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'opéron lactose',
    'opéron tryptophane',
    'enhancer',
    'méthylation',
    'acétylation des histones',
    'ARN interférence',
    'empreinte parentale',
  ],
  objectifs: [
    'Décrire le fonctionnement de l’opéron lactose et sa double régulation.',
    'Décrire le fonctionnement de l’opéron tryptophane, opéron répressible.',
    'Expliquer le mode d’action des séquences activatrices, ou enhancers.',
    'Expliquer les effets de la méthylation de l’ADN et de l’acétylation des histones sur la transcription.',
    'Décrire le principe de l’ARN interférence.',
    'Définir l’empreinte parentale et en donner un exemple.',
  ],
  sections: [
    {
      id: 'operon-lactose',
      titre: 'L’opéron lactose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’opéron lactose, décrit chez la bactérie Escherichia coli, est un modèle historique de régulation de l’expression génique procaryote. Il regroupe sous le contrôle d’un même promoteur les gènes nécessaires au métabolisme du lactose.',
        },
        {
          type: 'liste',
          items: [
            'En l’absence de lactose, une protéine répresseur se fixe sur une séquence appelée opérateur, bloquant physiquement la progression de l’ARN polymérase et empêchant la transcription des gènes de l’opéron.',
            'En présence de lactose, un métabolite dérivé du lactose se fixe sur le répresseur, modifie sa conformation et provoque son détachement de l’opérateur, ce qui permet la transcription : c’est une régulation négative de type inductible.',
            'L’opéron lactose est également soumis à une régulation positive : lorsque le glucose est peu disponible, un complexe activateur se fixe en amont du promoteur et favorise la fixation de l’ARN polymérase.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Répression catabolique',
          texte:
            'Lorsque le glucose est abondant, la concentration intracellulaire du second messager impliqué dans l’activation de l’opéron diminue, ce qui limite la fixation du complexe activateur et réduit la transcription des gènes du lactose, même en présence de lactose : la bactérie privilégie ainsi l’utilisation du glucose, source d’énergie préférentielle.',
        },
        {
          type: 'definition',
          terme: 'Opéron',
          definition:
            'Unité de transcription procaryote regroupant plusieurs gènes fonctionnellement apparentés sous le contrôle d’un promoteur et d’un opérateur communs, transcrits en un seul ARN messager polycistronique.',
        },
      ],
    },
    {
      id: 'operon-tryptophane',
      titre: 'L’opéron tryptophane',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’opéron tryptophane regroupe les gènes codant pour les enzymes de la voie de biosynthèse de cet acide aminé. Contrairement à l’opéron lactose, il s’agit d’un opéron répressible, régulé en fonction de la disponibilité du produit final de la voie métabolique.',
        },
        {
          type: 'liste',
          items: [
            'En l’absence de tryptophane, le répresseur de l’opéron est inactif et ne peut pas se fixer sur l’opérateur : les gènes de biosynthèse sont transcrits.',
            'Lorsque le tryptophane est abondant, il se fixe sur le répresseur, agissant comme corépresseur, et cette fixation active le répresseur qui peut alors se lier à l’opérateur et bloquer la transcription.',
            'Ce mécanisme illustre une boucle de rétrocontrôle négatif : le produit final de la voie métabolique inhibe sa propre synthèse.',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Inductible ou répressible : ne pas confondre',
          texte:
            'Dans l’opéron lactose, la molécule effectrice (dérivée du lactose) inactive le répresseur : l’opéron est dit inductible. Dans l’opéron tryptophane, la molécule effectrice (le tryptophane) active le répresseur : l’opéron est dit répressible. Ces deux logiques opposées sont un grand classique des questions de cours.',
        },
      ],
    },
    {
      id: 'enhancers',
      titre: 'Les enhancers',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Chez les eucaryotes, la transcription des gènes dépend souvent de séquences régulatrices distantes du promoteur, appelées enhancers, ou séquences activatrices.',
        },
        {
          type: 'liste',
          items: [
            'Les enhancers peuvent être situés à grande distance du promoteur qu’ils régulent, en amont, en aval, ou même à l’intérieur d’un intron du gène.',
            'Leur action est indépendante de leur orientation par rapport au sens de la transcription.',
            'Ils fixent des facteurs de transcription spécifiques qui, par une boucle d’ADN, entrent en contact avec le complexe de préinitiation assemblé au promoteur, stimulant ainsi la transcription.',
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Spécificité tissulaire',
          texte:
            'La combinaison des facteurs de transcription disponibles dans un type cellulaire donné détermine quels enhancers sont actifs, ce qui explique en grande partie la spécificité tissulaire de l’expression de nombreux gènes, à partir d’un même génome présent dans toutes les cellules de l’organisme.',
        },
      ],
    },
    {
      id: 'methylation-acetylation',
      titre: 'Méthylation de l’ADN et acétylation des histones',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Au-delà des facteurs de transcription qui se fixent directement sur l’ADN, la régulation de l’expression génique repose largement sur des modifications chimiques de l’ADN lui-même et des histones qui l’entourent : ce sont des mécanismes épigénétiques.',
        },
        {
          type: 'comparaison',
          titre: 'Deux grands mécanismes épigénétiques',
          gauche: {
            titre: 'Méthylation de l’ADN',
            points: [
              'Ajout d’un groupement méthyle sur une cytosine, le plus souvent au niveau de dinucléotides CG',
              'Associée en règle générale à une répression de la transcription',
              'Marque héritable au cours des divisions cellulaires',
            ],
          },
          droite: {
            titre: 'Acétylation des histones',
            points: [
              'Ajout d’un groupement acétyle sur les résidus lysine des extrémités N-terminales des histones',
              'Neutralise la charge positive des histones, relâchant leur interaction avec l’ADN chargé négativement',
              'Associée à une chromatine décondensée et à une transcription active',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un équilibre réversible',
          texte:
            'L’acétylation des histones, catalysée par des histones acétyltransférases, est contrebalancée par les histones désacétylases, qui retirent les groupements acétyle et favorisent une chromatine condensée. Cet équilibre dynamique module en permanence l’accessibilité des gènes.',
        },
      ],
    },
    {
      id: 'arn-interference',
      titre: 'L’ARN interférence',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’ARN interférence est un mécanisme de régulation post-transcriptionnelle par lequel de petits ARN non codants guident l’inhibition spécifique de l’expression d’un ARN messager cible.',
        },
        {
          type: 'etapes',
          titre: 'Principe général de l’ARN interférence',
          etapes: [
            {
              titre: 'Production d’un petit ARN régulateur',
              detail: 'Un précurseur d’ARN double brin, ou une structure en tige-boucle, est clivé par une ribonucléase spécialisée en petits fragments d’une vingtaine de nucléotides.',
            },
            {
              titre: 'Incorporation dans un complexe effecteur',
              detail: 'Un des deux brins de ce petit ARN est incorporé dans un complexe protéique effecteur, qui guide la reconnaissance de séquences complémentaires.',
            },
            {
              titre: 'Reconnaissance de l’ARN messager cible',
              detail: 'Le petit ARN guide le complexe vers un ARN messager de séquence complémentaire.',
            },
            {
              titre: 'Répression de l’expression',
              detail: 'Selon le degré de complémentarité, l’ARN messager ciblé est dégradé ou sa traduction est réprimée.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'MicroARN et petits ARN interférents',
          texte:
            'Les microARN, endogènes, dérivent de transcrits propres du génome et régulent souvent de nombreux ARN messagers avec une complémentarité imparfaite. Les petits ARN interférents, souvent d’origine exogène ou expérimentale, présentent en général une complémentarité parfaite avec une cible unique, favorisant sa dégradation directe.',
        },
      ],
    },
    {
      id: 'empreinte-parentale',
      titre: 'L’empreinte parentale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’empreinte parentale, ou empreinte génomique, est un phénomène épigénétique par lequel l’expression de certains gènes dépend de leur origine parentale : seul l’allèle hérité d’un des deux parents est exprimé, l’autre étant réduit au silence.',
        },
        {
          type: 'liste',
          items: [
            'Cette expression monoallélique repose sur des marques de méthylation différentielles, établies dans les lignées germinales maternelle et paternelle, puis maintenues au cours du développement.',
            'Un même gène soumis à empreinte peut être exprimé uniquement à partir de l’allèle paternel, ou uniquement à partir de l’allèle maternel, selon le gène considéré.',
            'Les gènes soumis à empreinte se concentrent souvent en régions groupées du génome, régulées par des éléments de contrôle communs.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Syndromes de Prader-Willi et d’Angelman',
          texte:
            'Une même région du chromosome 15 illustre les conséquences cliniques de l’empreinte parentale : une anomalie touchant la copie paternelle de cette région est associée au syndrome de Prader-Willi, tandis qu’une anomalie touchant la copie maternelle de la même région est associée au syndrome d’Angelman, deux tableaux cliniques très différents.',
        },
      ],
    },
  ],
  pointsCles: [
    'L’opéron lactose est inductible : la molécule effectrice inactive le répresseur et permet la transcription en présence de lactose.',
    'L’opéron tryptophane est répressible : le tryptophane, en excès, active le répresseur et bloque sa propre biosynthèse.',
    'Les enhancers agissent à distance du promoteur, indépendamment de leur orientation, en formant une boucle d’ADN avec le complexe de préinitiation.',
    'La méthylation de l’ADN réprime en règle générale la transcription ; l’acétylation des histones la favorise en décondensant la chromatine.',
    'L’ARN interférence utilise de petits ARN pour guider la dégradation ou la répression traductionnelle d’ARN messagers cibles.',
    'L’empreinte parentale conditionne l’expression monoallélique de certains gènes selon leur origine parentale, avec des conséquences cliniques illustrées par les syndromes de Prader-Willi et d’Angelman.',
  ],
  erreursFrequentes: [
    'Confondre opéron inductible et opéron répressible : dans le premier, l’effecteur inactive le répresseur ; dans le second, il l’active.',
    'Croire que les enhancers doivent obligatoirement être situés juste en amont du promoteur : ils peuvent agir à grande distance et dans les deux orientations.',
    'Inverser les effets de la méthylation de l’ADN et de l’acétylation des histones : la méthylation réprime en général, l’acétylation active en général.',
    'Confondre microARN endogènes et petits ARN interférents exogènes, dont la complémentarité avec la cible et le mode d’action diffèrent en degré.',
    'Penser que l’empreinte parentale s’applique à la majorité des gènes du génome : elle ne concerne en réalité qu’un nombre restreint de gènes.',
  ],
  mnemotechniques: [
    {
      moyen: 'Lactose induit, tryptophane réprime',
      explication: 'L’opéron lactose est activé par la présence de son substrat, le lactose ; l’opéron tryptophane est bloqué par l’excès de son produit final, le tryptophane.',
    },
    {
      moyen: 'Acétyle allège, méthyle alourdit',
      explication: 'L’acétylation des histones neutralise leur charge positive et allège leur emprise sur l’ADN, favorisant la transcription ; la méthylation de l’ADN alourdit au contraire le silence transcriptionnel.',
    },
    {
      moyen: 'P comme Papa, Prader-Willi',
      explication: 'Le syndrome de Prader-Willi est lié à une anomalie de la copie paternelle de la région chromosomique concernée, tandis que le syndrome d’Angelman est lié à la copie maternelle.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Nussbaum, Thompson et Thompson, Génétique médicale, édition française',
    'Lehninger, Principes de biochimie, 8e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-regulation-expression-fc-01',
      recto: 'Comment qualifie-t-on l’opéron lactose sur le plan de sa régulation par le répresseur ?',
      verso: 'Inductible : la molécule effectrice, dérivée du lactose, inactive le répresseur et permet la transcription.',
      type: 'classification',
      tags: ['opéron lactose'],
    },
    {
      id: 'ue1-regulation-expression-fc-02',
      recto: 'Que se passe-t-il lorsque le glucose est abondant, pour l’opéron lactose ?',
      verso: 'La transcription des gènes du lactose est limitée, même en présence de lactose, par répression catabolique : la bactérie privilégie le glucose.',
      type: 'mecanisme',
      tags: ['opéron lactose'],
    },
    {
      id: 'ue1-regulation-expression-fc-03',
      recto: 'Comment qualifie-t-on l’opéron tryptophane sur le plan de sa régulation ?',
      verso: 'Répressible : le tryptophane, en excès, active le répresseur qui bloque alors la transcription des gènes de sa propre biosynthèse.',
      type: 'classification',
      tags: ['opéron tryptophane'],
    },
    {
      id: 'ue1-regulation-expression-fc-04',
      recto: 'Quelle est la particularité de position des enhancers par rapport au promoteur ?',
      verso: 'Ils peuvent être situés à grande distance du promoteur, en amont, en aval, ou dans un intron, et agir indépendamment de leur orientation.',
      type: 'definition',
      tags: ['enhancer'],
    },
    {
      id: 'ue1-regulation-expression-fc-05',
      recto: 'Par quel mécanisme physique un enhancer entre-t-il en contact avec le promoteur ?',
      verso: 'Par la formation d’une boucle d’ADN qui rapproche les facteurs de transcription fixés sur l’enhancer du complexe de préinitiation.',
      type: 'mecanisme',
      tags: ['enhancer'],
    },
    {
      id: 'ue1-regulation-expression-fc-06',
      recto: 'Quel est l’effet général de la méthylation de l’ADN sur la transcription ?',
      verso: 'Elle réprime en général la transcription du gène concerné.',
      type: 'mecanisme',
      tags: ['méthylation'],
    },
    {
      id: 'ue1-regulation-expression-fc-07',
      recto: 'Quel est l’effet de l’acétylation des histones sur la chromatine ?',
      verso: 'Elle neutralise la charge positive des histones, relâche leur interaction avec l’ADN et favorise une chromatine décondensée, transcriptionnellement active.',
      type: 'mecanisme',
      tags: ['acétylation'],
    },
    {
      id: 'ue1-regulation-expression-fc-08',
      recto: 'Quelle enzyme retire les groupements acétyle des histones ?',
      verso: 'Une histone désacétylase.',
      type: 'mecanisme',
      tags: ['acétylation'],
    },
    {
      id: 'ue1-regulation-expression-fc-09',
      recto: 'Quel est le principe général de l’ARN interférence ?',
      verso: 'Un petit ARN guide un complexe protéique effecteur vers un ARN messager de séquence complémentaire, entraînant sa dégradation ou la répression de sa traduction.',
      type: 'mecanisme',
      tags: ['ARN interférence'],
    },
    {
      id: 'ue1-regulation-expression-fc-10',
      recto: 'Qu’est-ce que l’empreinte parentale ?',
      verso: 'Un phénomène épigénétique par lequel un gène n’est exprimé qu’à partir de l’allèle hérité d’un seul des deux parents, l’autre allèle étant réduit au silence.',
      type: 'definition',
      tags: ['empreinte parentale'],
    },
    {
      id: 'ue1-regulation-expression-fc-11',
      recto: 'Sur quel mécanisme moléculaire repose l’empreinte parentale ?',
      verso: 'Des marques de méthylation différentielles, établies dans les lignées germinales maternelle et paternelle et maintenues au cours du développement.',
      type: 'mecanisme',
      tags: ['empreinte parentale'],
    },
    {
      id: 'ue1-regulation-expression-fc-12',
      recto: 'À quelle origine parentale de l’anomalie chromosomique correspond respectivement le syndrome de Prader-Willi et le syndrome d’Angelman ?',
      verso: 'Le syndrome de Prader-Willi à une anomalie de la copie paternelle, le syndrome d’Angelman à une anomalie de la copie maternelle de la même région du chromosome 15.',
      type: 'clinique',
      tags: ['empreinte parentale'],
    },
  ],
  qcm: [
    {
      id: 'ue1-regulation-expression-qcm-01',
      enonce: 'Concernant l’opéron lactose, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'En l’absence de lactose, le répresseur est fixé sur l’opérateur.',
          vraie: true,
          justification: 'Exact, ce qui bloque la transcription.',
        },
        {
          lettre: 'B',
          texte: 'La présence de lactose inactive le répresseur.',
          vraie: true,
          justification: 'Exact, par fixation d’un dérivé du lactose sur le répresseur.',
        },
        {
          lettre: 'C',
          texte: 'L’opéron lactose n’est soumis qu’à une régulation négative.',
          vraie: false,
          justification: 'Faux : il est également soumis à une régulation positive, dépendante de la disponibilité en glucose.',
        },
        {
          lettre: 'D',
          texte: 'Une forte concentration de glucose favorise la transcription de l’opéron lactose.',
          vraie: false,
          justification: 'Faux : elle limite au contraire cette transcription, par répression catabolique.',
        },
        {
          lettre: 'E',
          texte: 'Les gènes de l’opéron lactose sont transcrits en un seul ARN messager polycistronique.',
          vraie: true,
          justification: 'Exact, comme la plupart des opérons procaryotes.',
        },
      ],
      correction: 'Réponses exactes : A, B et E. Ne pas oublier la double régulation, négative et positive, de l’opéron lactose.',
      difficulte: 2,
    },
    {
      id: 'ue1-regulation-expression-qcm-02',
      enonce: 'Concernant l’opéron tryptophane, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'C’est un opéron répressible.',
          vraie: true,
          justification: 'À l’inverse de l’opéron lactose, il est transcrit par défaut et n’est réprimé que lorsque le tryptophane, présent en excès, active son répresseur.',
        },
        {
          lettre: 'B',
          texte: 'Le tryptophane, en excès, inactive le répresseur.',
          vraie: false,
          justification: 'Faux : le tryptophane active au contraire le répresseur, qui peut alors se fixer sur l’opérateur.',
        },
        {
          lettre: 'C',
          texte: 'En l’absence de tryptophane, les gènes de biosynthèse sont transcrits.',
          vraie: true,
          justification: 'Sans tryptophane, le répresseur reste inactif et ne se fixe pas sur l’opérateur, ce qui permet la transcription des gènes nécessaires à sa propre synthèse.',
        },
        {
          lettre: 'D',
          texte: 'Ce mécanisme illustre une boucle de rétrocontrôle négatif.',
          vraie: true,
          justification: 'Exact : le produit final inhibe sa propre synthèse.',
        },
        {
          lettre: 'E',
          texte: 'L’opéron tryptophane fonctionne selon la même logique que l’opéron lactose.',
          vraie: false,
          justification: 'Faux : les deux opérons répondent à des logiques opposées, inductible pour le lactose, répressible pour le tryptophane.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir l’opposition inductible/répressible entre les deux opérons modèles.',
      difficulte: 2,
    },
    {
      id: 'ue1-regulation-expression-qcm-03',
      enonce: 'Concernant les enhancers, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Ils doivent être situés immédiatement en amont du promoteur.',
          vraie: false,
          justification: 'Faux : ils peuvent être situés à grande distance, en amont, en aval ou dans un intron.',
        },
        {
          lettre: 'B',
          texte: 'Leur action dépend de leur orientation par rapport au sens de la transcription.',
          vraie: false,
          justification: 'Faux : leur action est indépendante de leur orientation.',
        },
        {
          lettre: 'C',
          texte: 'Ils fixent des facteurs de transcription spécifiques.',
          vraie: true,
          justification: 'Ces séquences régulatrices contiennent des sites de liaison reconnus par des facteurs de transcription particuliers, ce qui module l’activité du promoteur associé.',
        },
        {
          lettre: 'D',
          texte: 'Ils contribuent à la spécificité tissulaire de l’expression de certains gènes.',
          vraie: true,
          justification: 'Exact, selon les facteurs de transcription disponibles dans chaque type cellulaire.',
        },
        {
          lettre: 'E',
          texte: 'Ils entrent en contact avec le complexe de préinitiation par une boucle d’ADN.',
          vraie: true,
          justification: 'Même distant du promoteur, l’enhancer se rapproche physiquement de lui grâce à un repliement de l’ADN en boucle, permettant aux facteurs qu’il fixe d’agir sur le complexe de préinitiation.',
        },
      ],
      correction: 'Réponses exactes : C, D et E. Les enhancers se caractérisent justement par leur indépendance de position et d’orientation.',
      difficulte: 2,
    },
    {
      id: 'ue1-regulation-expression-qcm-04',
      enonce: 'Concernant la méthylation de l’ADN et l’acétylation des histones, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La méthylation de l’ADN est en règle générale associée à une répression de la transcription.',
          vraie: true,
          justification: 'La méthylation des cytosines, notamment au niveau des îlots CpG des promoteurs, gêne la fixation des facteurs de transcription et recrute des protéines qui compactent la chromatine.',
        },
        {
          lettre: 'B',
          texte: 'L’acétylation des histones favorise une chromatine condensée.',
          vraie: false,
          justification: 'Faux : elle favorise au contraire une chromatine décondensée et transcriptionnellement active.',
        },
        {
          lettre: 'C',
          texte: 'Les histones désacétylases retirent les groupements acétyle des histones.',
          vraie: true,
          justification: 'En retirant les groupements acétyle, ces enzymes restaurent la charge positive des histones, ce qui resserre leur liaison à l’ADN et favorise la condensation de la chromatine.',
        },
        {
          lettre: 'D',
          texte: 'La méthylation de l’ADN peut être une marque héritable au cours des divisions cellulaires.',
          vraie: true,
          justification: 'Des ADN méthyltransférases de maintenance reproduisent le profil de méthylation sur le brin néosynthétisé après chaque réplication, transmettant ainsi la marque épigénétique aux cellules filles.',
        },
        {
          lettre: 'E',
          texte: 'L’acétylation neutralise la charge positive des histones.',
          vraie: true,
          justification: 'Exact, ce qui relâche leur interaction avec l’ADN.',
        },
      ],
      correction: 'Réponses exactes : A, C, D et E. Retenir l’opposition entre méthylation répressive et acétylation activatrice.',
      difficulte: 2,
    },
    {
      id: 'ue1-regulation-expression-qcm-05',
      enonce: 'Concernant l’ARN interférence, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'De petits ARN guident un complexe effecteur vers un ARN messager cible.',
          vraie: true,
          justification: 'Un petit ARN simple brin, chargé dans le complexe RISC, s’apparie par complémentarité de bases à sa cible et guide ainsi ce complexe vers l’ARN messager à réprimer.',
        },
        {
          lettre: 'B',
          texte: 'Ce mécanisme agit exclusivement au niveau transcriptionnel.',
          vraie: false,
          justification: 'Faux : il agit principalement au niveau post-transcriptionnel, sur l’ARN messager déjà produit.',
        },
        {
          lettre: 'C',
          texte: 'Une complémentarité parfaite entre le petit ARN et sa cible favorise la dégradation de l’ARN messager.',
          vraie: true,
          justification: 'Un appariement parfait permet au complexe RISC de cliver directement l’ARN messager cible, comme c’est typiquement le cas des petits ARN interférents.',
        },
        {
          lettre: 'D',
          texte: 'Les microARN sont d’origine exclusivement exogène.',
          vraie: false,
          justification: 'Faux : les microARN sont endogènes, dérivés de transcrits propres du génome.',
        },
        {
          lettre: 'E',
          texte: 'Une complémentarité imparfaite peut se traduire par une répression de la traduction sans dégradation immédiate.',
          vraie: true,
          justification: 'Exact, c’est le mode d’action fréquent des microARN.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer l’origine endogène des microARN de celle, souvent exogène, des petits ARN interférents expérimentaux.',
      difficulte: 2,
    },
    {
      id: 'ue1-regulation-expression-qcm-06',
      enonce: 'Concernant l’empreinte parentale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle concerne la majorité des gènes du génome humain.',
          vraie: false,
          justification: 'Faux : elle ne concerne qu’un nombre restreint de gènes.',
        },
        {
          lettre: 'B',
          texte: 'Elle repose sur des marques de méthylation différentielles selon l’origine parentale.',
          vraie: true,
          justification: 'Un allèle est méthylé et donc réprimé selon qu’il provient du père ou de la mère, ce qui aboutit à une expression monoallélique dépendant de l’origine parentale.',
        },
        {
          lettre: 'C',
          texte: 'Le syndrome de Prader-Willi est lié à une anomalie de la copie maternelle de la région concernée.',
          vraie: false,
          justification: 'Faux : il est lié à une anomalie de la copie paternelle ; l’anomalie de la copie maternelle donne le syndrome d’Angelman.',
        },
        {
          lettre: 'D',
          texte: 'Un gène soumis à empreinte n’est exprimé qu’à partir d’un seul des deux allèles parentaux.',
          vraie: true,
          justification: 'C’est le principe même de l’empreinte parentale : l’un des deux allèles est silencieux par méthylation, ne laissant s’exprimer que l’allèle hérité de l’autre parent.',
        },
        {
          lettre: 'E',
          texte: 'Les gènes soumis à empreinte sont répartis de façon aléatoire et isolée sur l’ensemble du génome.',
          vraie: false,
          justification: 'Faux : ils se concentrent souvent en régions groupées, régulées par des éléments de contrôle communs.',
        },
      ],
      correction: 'Réponses exactes : B et D. Bien mémoriser l’association Prader-Willi/copie paternelle et Angelman/copie maternelle.',
      difficulte: 2,
    },
  ],
};
