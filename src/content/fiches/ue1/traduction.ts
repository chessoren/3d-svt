import type { Fiche } from '../../types';

export const ficheTraduction: Fiche = {
  id: 'ue1-traduction',
  ue: 'ue1',
  titre: 'La traduction',
  sousTitre: 'Ribosome, initiation, élongation, terminaison, sites A P E, modifications post-traductionnelles, adressage',
  chapitre: 'Structure et expression du génome',
  ordre: 8,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'ribosome',
    'initiation',
    'élongation',
    'terminaison',
    'site A',
    'site P',
    'site E',
    'peptide signal',
  ],
  objectifs: [
    'Décrire la structure générale du ribosome eucaryote et procaryote.',
    'Décrire les étapes de l’initiation de la traduction.',
    'Expliquer le rôle des sites A, P et E au cours de l’élongation.',
    'Décrire les mécanismes de terminaison de la traduction.',
    'Citer les principales modifications post-traductionnelles des protéines.',
    'Expliquer le principe de l’adressage co-traductionnel des protéines vers le réticulum endoplasmique.',
  ],
  sections: [
    {
      id: 'ribosome',
      titre: 'Le ribosome',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le ribosome est la machinerie ribonucléoprotéique qui assure la traduction de l’ARN messager en protéine. Il est constitué de deux sous-unités, une grande et une petite, chacune composée d’ARN ribosomiques associés à de nombreuses protéines.',
        },
        {
          type: 'comparaison',
          titre: 'Ribosomes eucaryote et procaryote',
          gauche: {
            titre: 'Ribosome eucaryote (80S)',
            points: [
              'Grande sous-unité 60S, contenant les ARN ribosomiques 28S, 5,8S et 5S',
              'Petite sous-unité 40S, contenant l’ARN ribosomique 18S',
              'Localisation cytoplasmique, libre ou associée au réticulum endoplasmique',
            ],
          },
          droite: {
            titre: 'Ribosome procaryote (70S)',
            points: [
              'Grande sous-unité 50S, contenant les ARN ribosomiques 23S et 5S',
              'Petite sous-unité 30S, contenant l’ARN ribosomique 16S',
              'Cible de nombreux antibiotiques, en raison de ses différences structurales avec le ribosome eucaryote',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Un ribozyme au cœur du ribosome',
          texte:
            'L’activité catalytique qui forme la liaison peptidique, appelée activité peptidyl-transférase, est portée par l’ARN ribosomique de la grande sous-unité, et non par une protéine : le ribosome se comporte à cet égard comme un ribozyme.',
        },
      ],
    },
    {
      id: 'initiation',
      titre: 'L’initiation de la traduction',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'L’initiation est l’étape qui positionne correctement le premier ARN de transfert, porteur de la méthionine initiatrice, en regard du codon AUG, avant l’assemblage complet du ribosome fonctionnel.',
        },
        {
          type: 'etapes',
          titre: 'Initiation chez les eucaryotes',
          etapes: [
            {
              titre: 'Formation du complexe de préinitiation',
              detail: 'La petite sous-unité ribosomique s’associe à l’ARN de transfert initiateur chargé en méthionine et à plusieurs facteurs d’initiation.',
            },
            {
              titre: 'Fixation à l’extrémité coiffée de l’ARN messager',
              detail: 'Ce complexe se fixe au niveau de la coiffe en 5′ de l’ARN messager, grâce aux facteurs d’initiation qui reconnaissent la coiffe.',
            },
            {
              titre: 'Balayage jusqu’au codon d’initiation',
              detail: 'Le complexe progresse le long de la région 5′ non traduite jusqu’à reconnaître le premier codon AUG dans un contexte favorable.',
            },
            {
              titre: 'Association de la grande sous-unité',
              detail: 'Après hydrolyse d’un GTP, la grande sous-unité ribosomique rejoint le complexe, formant le ribosome complet, prêt pour l’élongation.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Particularité procaryote',
          texte:
            'Chez les procaryotes, l’ARN messager ne possède pas de coiffe : le positionnement du ribosome sur le codon d’initiation repose sur une séquence spécifique de l’ARN messager, complémentaire de l’extrémité de l’ARN ribosomique de la petite sous-unité, ce qui dispense d’un balayage prolongé de la région 5′.',
        },
      ],
    },
    {
      id: 'elongation-sites',
      titre: 'L’élongation : sites A, P et E',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Le ribosome fonctionnel comporte trois sites successifs pour l’ARN de transfert, désignés A, P et E, qui se déplacent au fil de l’élongation du polypeptide naissant.',
        },
        {
          type: 'tableau',
          titre: 'Rôle des trois sites du ribosome',
          colonnes: ['Site', 'Nom', 'Rôle'],
          lignes: [
            ['A', 'Site aminoacyl', 'Accueille l’aminoacyl-ARNt entrant, dont l’anticodon est complémentaire du codon présenté'],
            ['P', 'Site peptidyl', 'Contient l’ARN de transfert portant la chaîne peptidique en cours de synthèse'],
            ['E', 'Site de sortie (exit)', 'Accueille transitoirement l’ARN de transfert déchargé avant sa libération du ribosome'],
          ],
        },
        {
          type: 'etapes',
          titre: 'Cycle d’élongation',
          etapes: [
            {
              titre: 'Entrée de l’aminoacyl-ARNt',
              detail: 'Un aminoacyl-ARNt, sous forme de complexe avec un facteur d’élongation lié au GTP, se positionne dans le site A si son anticodon est complémentaire du codon présenté.',
            },
            {
              titre: 'Formation de la liaison peptidique',
              detail: 'L’activité peptidyl-transférase de l’ARN ribosomique transfère la chaîne peptidique du site P vers l’acide aminé du site A.',
            },
            {
              titre: 'Translocation',
              detail: 'Un facteur d’élongation, associé à l’hydrolyse d’un GTP, déplace le ribosome d’un codon, faisant passer les ARN de transfert du site A au site P, et du site P au site E.',
            },
            {
              titre: 'Sortie de l’ARN de transfert déchargé',
              detail: 'L’ARN de transfert déchargé, présent dans le site E, se dissocie du ribosome, qui est alors prêt à accueillir un nouvel aminoacyl-ARNt.',
            },
          ],
        },
      ],
    },
    {
      id: 'terminaison',
      titre: 'La terminaison',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La traduction s’achève lorsqu’un codon stop se présente dans le site A du ribosome, codon pour lequel il n’existe aucun ARN de transfert correspondant.',
        },
        {
          type: 'liste',
          items: [
            'Un facteur de libération protéique reconnaît directement le codon stop présent dans le site A, en mimant la forme d’un ARN de transfert.',
            'La reconnaissance du codon stop déclenche l’hydrolyse de la liaison entre le polypeptide achevé et l’ARN de transfert présent dans le site P.',
            'Le polypeptide est libéré, puis les deux sous-unités ribosomiques se dissocient l’une de l’autre, ainsi que de l’ARN messager, sous l’action de facteurs de recyclage.',
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Aucun ARN de transfert pour les codons stop',
          texte:
            'Il n’existe, dans les conditions physiologiques, aucun ARN de transfert dont l’anticodon serait complémentaire d’un codon stop : c’est précisément cette absence qui permet aux facteurs de libération protéiques de reconnaître spécifiquement ces codons et de mettre fin à la traduction.',
        },
      ],
    },
    {
      id: 'modifications-post-traductionnelles',
      titre: 'Modifications post-traductionnelles',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La chaîne polypeptidique issue de la traduction subit souvent, avant d’atteindre sa forme fonctionnelle définitive, des modifications chimiques réversibles ou irréversibles.',
        },
        {
          type: 'tableau',
          titre: 'Principales modifications post-traductionnelles',
          colonnes: ['Modification', 'Exemple ou conséquence'],
          lignes: [
            ['Clivage protéolytique', 'Élimination du peptide signal, activation d’une pro-hormone comme l’insuline'],
            ['Glycosylation', 'Ajout de chaînes glucidiques, souvent sur une asparagine, important pour l’adressage et la reconnaissance'],
            ['Phosphorylation', 'Ajout réversible d’un groupement phosphate sur une sérine, une thréonine ou une tyrosine, régulant l’activité de la protéine'],
            ['Formation de ponts disulfure', 'Stabilisation de la structure tridimensionnelle des protéines sécrétées'],
            ['Ubiquitination', 'Marquage d’une protéine en vue de sa dégradation par le protéasome'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Modifications co-traductionnelles et post-traductionnelles',
          texte:
            'Certaines modifications débutent avant même la fin de la traduction, dites co-traductionnelles, comme le clivage du peptide signal ou le début de la glycosylation dans le réticulum endoplasmique, tandis que d’autres surviennent une fois le polypeptide entièrement synthétisé et libéré du ribosome.',
        },
      ],
    },
    {
      id: 'adressage-proteines',
      titre: 'Adressage des protéines',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'La destination finale d’une protéine dans la cellule dépend de signaux présents dans sa séquence, reconnus par des machineries spécialisées dès le début, ou après la fin, de sa traduction.',
        },
        {
          type: 'etapes',
          titre: 'Adressage co-traductionnel vers le réticulum endoplasmique',
          etapes: [
            {
              titre: 'Synthèse du peptide signal',
              detail: 'Un peptide signal hydrophobe, situé en général à l’extrémité N-terminale de la protéine naissante, émerge du ribosome.',
            },
            {
              titre: 'Reconnaissance par la particule de reconnaissance du signal',
              detail: 'La particule de reconnaissance du signal (SRP) se fixe sur ce peptide signal et interrompt transitoirement l’élongation.',
            },
            {
              titre: 'Arrimage au réticulum endoplasmique',
              detail: 'Le complexe ribosome-SRP est dirigé vers un récepteur de la membrane du réticulum endoplasmique granuleux, où la SRP se dissocie.',
            },
            {
              titre: 'Translocation co-traductionnelle',
              detail: 'La chaîne polypeptidique naissante est transloquée à travers un canal membranaire au fur et à mesure de sa synthèse, vers la lumière du réticulum ou insérée dans sa membrane.',
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Protéines sans peptide signal',
          texte:
            'Une protéine dépourvue de peptide signal reconnu par la SRP est synthétisée sur un ribosome libre dans le cytosol, jusqu’à son achèvement complet ; elle peut ensuite être importée après traduction, de façon post-traductionnelle, dans certains organites comme les mitochondries, le noyau ou les peroxysomes, grâce à d’autres signaux d’adressage.',
        },
      ],
    },
  ],
  pointsCles: [
    'Le ribosome eucaryote 80S associe une grande sous-unité 60S et une petite sous-unité 40S ; le ribosome procaryote 70S associe une sous-unité 50S et une sous-unité 30S.',
    'L’activité peptidyl-transférase, qui forme la liaison peptidique, est portée par l’ARN ribosomique, non par une protéine.',
    'L’initiation positionne l’ARN de transfert initiateur sur le codon AUG avant l’assemblage complet du ribosome.',
    'Les sites A, P et E accueillent successivement l’aminoacyl-ARNt entrant, l’ARN de transfert peptidyl, puis l’ARN de transfert déchargé.',
    'La terminaison est déclenchée par la reconnaissance d’un codon stop par un facteur de libération protéique, en l’absence d’ARN de transfert correspondant.',
    'De nombreuses protéines subissent des modifications post-traductionnelles, comme la glycosylation, la phosphorylation ou le clivage protéolytique.',
    'La particule de reconnaissance du signal dirige, de façon co-traductionnelle, les protéines porteuses d’un peptide signal vers le réticulum endoplasmique.',
  ],
  erreursFrequentes: [
    'Confondre les coefficients de sédimentation du ribosome eucaryote et procaryote : 80S et ses sous-unités 60S/40S chez les eucaryotes, 70S et ses sous-unités 50S/30S chez les procaryotes.',
    'Croire que l’activité peptidyl-transférase est portée par une protéine : elle est en réalité portée par l’ARN ribosomique de la grande sous-unité.',
    'Inverser les rôles des sites A et P : le site A accueille l’aminoacyl-ARNt entrant, le site P porte la chaîne peptidique en cours de synthèse.',
    'Penser qu’il existe un ARN de transfert spécifique des codons stop : c’est justement l’absence d’un tel ARN de transfert qui permet la reconnaissance par les facteurs de libération.',
    'Oublier que le peptide signal peut être clivé de façon co-traductionnelle, avant même l’achèvement complet de la synthèse protéique.',
  ],
  mnemotechniques: [
    {
      moyen: '80 pour eucaryote, 70 pour procaryote',
      explication: 'Le ribosome eucaryote sédimente à 80S, le ribosome procaryote à 70S ; un moyen simple d’associer le chiffre le plus élevé à la cellule la plus complexe.',
    },
    {
      moyen: 'A, P, E comme « Arrive, Porte, Exit »',
      explication: 'Le site A voit Arriver le nouvel ARN de transfert, le site P Porte le peptide en cours de synthèse, le site E est la sortie (Exit) de l’ARN de transfert déchargé.',
    },
    {
      moyen: 'SRP arrête le ribosome',
      explication: 'La particule de reconnaissance du signal (SRP) interrompt transitoirement la traduction dès qu’elle reconnaît un peptide signal, le temps d’arrimer le ribosome au réticulum endoplasmique.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Lehninger, Principes de biochimie, 8e édition',
    'Watson, Biologie moléculaire du gène, 7e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue1-traduction-fc-01',
      recto: 'Quel est le coefficient de sédimentation du ribosome eucaryote complet, et de ses deux sous-unités ?',
      verso: 'Le ribosome complet sédimente à 80S, formé d’une grande sous-unité 60S et d’une petite sous-unité 40S.',
      type: 'chiffre',
      tags: ['ribosome'],
    },
    {
      id: 'ue1-traduction-fc-02',
      recto: 'Quelle molécule porte l’activité peptidyl-transférase du ribosome ?',
      verso: 'L’ARN ribosomique de la grande sous-unité, ce qui fait du ribosome un ribozyme sur ce point.',
      type: 'mecanisme',
      tags: ['ribosome'],
    },
    {
      id: 'ue1-traduction-fc-03',
      recto: 'Quel acide aminé initie la traduction chez les eucaryotes ?',
      verso: 'La méthionine, portée par l’ARN de transfert initiateur.',
      type: 'definition',
      tags: ['initiation'],
    },
    {
      id: 'ue1-traduction-fc-04',
      recto: 'Que fait le complexe de préinitiation entre la fixation à la coiffe et la reconnaissance du codon AUG ?',
      verso: 'Il balaie la région 5′ non traduite de l’ARN messager jusqu’à reconnaître le premier codon AUG dans un contexte favorable.',
      type: 'mecanisme',
      tags: ['initiation'],
    },
    {
      id: 'ue1-traduction-fc-05',
      recto: 'Quel site du ribosome accueille l’aminoacyl-ARNt entrant ?',
      verso: 'Le site A, site aminoacyl.',
      type: 'definition',
      tags: ['site A'],
    },
    {
      id: 'ue1-traduction-fc-06',
      recto: 'Quel site du ribosome porte la chaîne peptidique en cours de synthèse ?',
      verso: 'Le site P, site peptidyl.',
      type: 'definition',
      tags: ['site P'],
    },
    {
      id: 'ue1-traduction-fc-07',
      recto: 'Que se passe-t-il lors de la translocation du ribosome ?',
      verso: 'Le ribosome se déplace d’un codon, faisant passer les ARN de transfert du site A au site P, et du site P au site E.',
      type: 'mecanisme',
      tags: ['élongation'],
    },
    {
      id: 'ue1-traduction-fc-08',
      recto: 'Qu’est-ce qui déclenche la terminaison de la traduction ?',
      verso: 'La présence d’un codon stop dans le site A, reconnu par un facteur de libération protéique.',
      type: 'mecanisme',
      tags: ['terminaison'],
    },
    {
      id: 'ue1-traduction-fc-09',
      recto: 'Citer trois modifications post-traductionnelles possibles d’une protéine.',
      verso: 'La glycosylation, la phosphorylation et le clivage protéolytique, parmi d’autres.',
      type: 'classification',
      tags: ['modification post-traductionnelle'],
    },
    {
      id: 'ue1-traduction-fc-10',
      recto: 'Quel élément de la protéine naissante est reconnu par la particule de reconnaissance du signal ?',
      verso: 'Le peptide signal, une séquence hydrophobe généralement située en position N-terminale.',
      type: 'mecanisme',
      tags: ['adressage'],
    },
    {
      id: 'ue1-traduction-fc-11',
      recto: 'Où sont synthétisées les protéines dépourvues de peptide signal ?',
      verso: 'Sur des ribosomes libres dans le cytosol, jusqu’à l’achèvement complet de leur synthèse.',
      type: 'mecanisme',
      tags: ['adressage'],
    },
    {
      id: 'ue1-traduction-fc-12',
      recto: 'Pourquoi aucun ARN de transfert ne reconnaît-il un codon stop ?',
      verso: 'Parce qu’aucun ARN de transfert n’a d’anticodon complémentaire d’un codon stop dans les conditions physiologiques, ce qui permet aux facteurs de libération protéiques de les reconnaître spécifiquement.',
      type: 'mecanisme',
      tags: ['terminaison'],
    },
  ],
  qcm: [
    {
      id: 'ue1-traduction-qcm-01',
      enonce: 'Concernant le ribosome, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le ribosome eucaryote complet sédimente à 80S.',
          vraie: true,
          justification: 'L’association de la petite sous-unité 40S et de la grande sous-unité 60S donne un coefficient de sédimentation global de 80S, différent de la simple somme des deux valeurs en raison de sa forme.',
        },
        {
          lettre: 'B',
          texte: 'La petite sous-unité du ribosome procaryote est la sous-unité 50S.',
          vraie: false,
          justification: 'Faux : la petite sous-unité procaryote est la 30S ; la 50S est la grande sous-unité.',
        },
        {
          lettre: 'C',
          texte: 'L’activité peptidyl-transférase est portée par une protéine ribosomique.',
          vraie: false,
          justification: 'Faux : elle est portée par l’ARN ribosomique de la grande sous-unité.',
        },
        {
          lettre: 'D',
          texte: 'Le ribosome procaryote est une cible fréquente des antibiotiques.',
          vraie: true,
          justification: 'Exact, en raison de ses différences structurales avec le ribosome eucaryote.',
        },
        {
          lettre: 'E',
          texte: 'Le ribosome eucaryote comprend une sous-unité 40S et une sous-unité 60S.',
          vraie: true,
          justification: 'La petite sous-unité 40S porte le décodage de l’ARN messager, tandis que la grande sous-unité 60S porte l’activité peptidyl-transférase qui forme la liaison peptidique.',
        },
      ],
      correction: 'Réponses exactes : A, D et E. Retenir précisément les coefficients de sédimentation de chaque sous-unité.',
      difficulte: 2,
    },
    {
      id: 'ue1-traduction-qcm-02',
      enonce: 'Concernant l’initiation de la traduction, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’ARN de transfert initiateur porte une méthionine chez les eucaryotes.',
          vraie: true,
          justification: 'Le codon d’initiation AUG code toujours pour la méthionine, si bien que l’ARN de transfert initiateur qui reconnaît ce codon est systématiquement chargé en méthionine chez les eucaryotes.',
        },
        {
          lettre: 'B',
          texte: 'La petite sous-unité ribosomique se fixe d’abord au niveau de la coiffe.',
          vraie: true,
          justification: 'Exact, avant de balayer la région 5′ non traduite.',
        },
        {
          lettre: 'C',
          texte: 'La grande sous-unité ribosomique rejoint le complexe avant la reconnaissance du codon AUG.',
          vraie: false,
          justification: 'Faux : elle rejoint le complexe après la reconnaissance du codon AUG.',
        },
        {
          lettre: 'D',
          texte: 'Chez les procaryotes, une séquence spécifique de l’ARN messager facilite le positionnement du ribosome, en l’absence de coiffe.',
          vraie: true,
          justification: 'La séquence de Shine-Dalgarno, complémentaire de l’ARN ribosomique 16S, s’apparie en amont du codon AUG et positionne directement le ribosome sur le codon d’initiation, sans balayage préalable.',
        },
        {
          lettre: 'E',
          texte: 'L’hydrolyse d’un GTP intervient au cours de l’initiation eucaryote.',
          vraie: true,
          justification: 'Exact, notamment lors de l’association de la grande sous-unité.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir l’ordre des événements : reconnaissance du codon AUG avant l’arrivée de la grande sous-unité.',
      difficulte: 2,
    },
    {
      id: 'ue1-traduction-qcm-03',
      enonce: 'Concernant les sites A, P et E du ribosome, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le site A accueille l’aminoacyl-ARNt entrant.',
          vraie: true,
          justification: 'Le site A (aminoacyl) est le point d’entrée de chaque nouvel ARN de transfert chargé, dont l’anticodon s’apparie au codon exposé du site avant la formation de la liaison peptidique.',
        },
        {
          lettre: 'B',
          texte: 'Le site P porte l’ARN de transfert déchargé avant sa sortie du ribosome.',
          vraie: false,
          justification: 'Faux : c’est le rôle du site E ; le site P porte la chaîne peptidique en cours de synthèse.',
        },
        {
          lettre: 'C',
          texte: 'La formation de la liaison peptidique a lieu entre les sites P et A.',
          vraie: true,
          justification: 'L’activité peptidyl-transférase de la grande sous-unité catalyse le transfert de la chaîne peptidique du site P vers l’acide aminé porté par l’ARN de transfert du site A.',
        },
        {
          lettre: 'D',
          texte: 'La translocation déplace les ARN de transfert du site E vers le site A.',
          vraie: false,
          justification: 'Faux : la translocation déplace les ARN de transfert du site A vers le site P, et du site P vers le site E.',
        },
        {
          lettre: 'E',
          texte: 'Un facteur d’élongation lié au GTP intervient lors de l’entrée de l’aminoacyl-ARNt dans le site A.',
          vraie: true,
          justification: 'Ce facteur d’élongation escorte l’aminoacyl-ARNt jusqu’au site A, et l’hydrolyse du GTP qu’il porte valide l’appariement correct entre codon et anticodon avant de le libérer.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir le sens de circulation des ARN de transfert : A vers P, puis P vers E.',
      difficulte: 2,
    },
    {
      id: 'ue1-traduction-qcm-04',
      enonce: 'Concernant la terminaison de la traduction, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est déclenchée par la présence d’un codon stop dans le site A.',
          vraie: true,
          justification: 'L’arrivée d’un codon stop (UAA, UAG ou UGA) dans le site A, non reconnu par un ARN de transfert, permet à un facteur de libération protéique de s’y fixer et d’enclencher la terminaison.',
        },
        {
          lettre: 'B',
          texte: 'Un ARN de transfert spécifique reconnaît le codon stop.',
          vraie: false,
          justification: 'Faux : aucun ARN de transfert ne reconnaît un codon stop ; c’est un facteur de libération protéique qui s’en charge.',
        },
        {
          lettre: 'C',
          texte: 'Le polypeptide achevé est libéré par hydrolyse de sa liaison avec l’ARN de transfert du site P.',
          vraie: true,
          justification: 'Le facteur de libération induit l’hydrolyse de la liaison ester entre le dernier acide aminé et l’ARN de transfert du site P, libérant ainsi le polypeptide achevé.',
        },
        {
          lettre: 'D',
          texte: 'Les deux sous-unités ribosomiques restent associées après la terminaison.',
          vraie: false,
          justification: 'Faux : elles se dissocient l’une de l’autre, ainsi que de l’ARN messager.',
        },
        {
          lettre: 'E',
          texte: 'Le facteur de libération protéique mime la forme d’un ARN de transfert.',
          vraie: true,
          justification: 'Sa structure tridimensionnelle proche de celle d’un ARN de transfert lui permet d’occuper le site A du ribosome, alors qu’aucun ARN de transfert n’a d’anticodon complémentaire des codons stop.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Bien retenir l’absence d’ARN de transfert pour les codons stop.',
      difficulte: 2,
    },
    {
      id: 'ue1-traduction-qcm-05',
      enonce: 'Concernant les modifications post-traductionnelles, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La glycosylation peut porter sur un résidu asparagine.',
          vraie: true,
          justification: 'La N-glycosylation attache une chaîne glucidique sur l’azote de la fonction amide de l’asparagine, typiquement au niveau du réticulum endoplasmique.',
        },
        {
          lettre: 'B',
          texte: 'L’ubiquitination marque une protéine en vue de sa dégradation par le protéasome.',
          vraie: true,
          justification: 'La fixation covalente répétée de molécules d’ubiquitine sur une protéine constitue une étiquette reconnue par le protéasome, qui la dégrade ensuite en peptides courts.',
        },
        {
          lettre: 'C',
          texte: 'Toutes les modifications post-traductionnelles surviennent après la libération complète du polypeptide du ribosome.',
          vraie: false,
          justification: 'Faux : certaines modifications débutent avant l’achèvement de la traduction, dites co-traductionnelles.',
        },
        {
          lettre: 'D',
          texte: 'La phosphorylation peut porter sur une sérine, une thréonine ou une tyrosine.',
          vraie: true,
          justification: 'Ces trois acides aminés possèdent une fonction alcool sur leur chaîne latérale, ce qui permet aux protéines kinases d’y greffer un groupement phosphate.',
        },
        {
          lettre: 'E',
          texte: 'Les ponts disulfure participent à la stabilisation de certaines protéines sécrétées.',
          vraie: true,
          justification: 'Ces liaisons covalentes entre deux résidus cystéine se forment dans le milieu oxydant du réticulum endoplasmique et rigidifient la structure tridimensionnelle des protéines destinées à la sécrétion.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Ne pas oublier l’existence de modifications co-traductionnelles.',
      difficulte: 2,
    },
    {
      id: 'ue1-traduction-qcm-06',
      enonce: 'Concernant l’adressage des protéines, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le peptide signal est en général situé en position N-terminale.',
          vraie: true,
          justification: 'Étant traduit en premier, un peptide signal placé en position N-terminale émerge tôt du ribosome et peut ainsi être reconnu dès le début de la synthèse par la particule de reconnaissance du signal.',
        },
        {
          lettre: 'B',
          texte: 'La particule de reconnaissance du signal (SRP) reconnaît le peptide signal.',
          vraie: true,
          justification: 'Dès qu’il émerge du ribosome, le peptide signal hydrophobe est reconnu et fixé par la SRP, qui dirige alors l’ensemble vers le récepteur de la SRP sur le réticulum endoplasmique.',
        },
        {
          lettre: 'C',
          texte: 'La translocation vers le réticulum endoplasmique est toujours post-traductionnelle chez l’être humain.',
          vraie: false,
          justification: 'Faux : elle est typiquement co-traductionnelle, se déroulant pendant la synthèse du polypeptide.',
        },
        {
          lettre: 'D',
          texte: 'Une protéine dépourvue de peptide signal est synthétisée sur un ribosome libre dans le cytosol.',
          vraie: true,
          justification: 'Sans peptide signal pour être reconnue par la SRP et adressée au réticulum endoplasmique, la traduction se poursuit jusqu’à son terme sur un ribosome libre du cytosol.',
        },
        {
          lettre: 'E',
          texte: 'La fixation de la SRP sur le peptide signal interrompt transitoirement l’élongation.',
          vraie: true,
          justification: 'Exact, le temps que le ribosome s’arrime au réticulum endoplasmique.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir le caractère co-traductionnel de l’adressage vers le réticulum endoplasmique.',
      difficulte: 2,
    },
  ],
};
