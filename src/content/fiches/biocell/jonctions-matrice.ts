import type { Fiche } from '../../types';

export const ficheJonctionsMatrice: Fiche = {
  id: 'biocell-jonctions-matrice',
  ue: 'biocell',
  titre: 'Jonctions cellulaires et matrice extracellulaire',
  sousTitre: 'Jonctions serrées, adhérentes, desmosomes, jonctions communicantes, collagènes, lame basale et intégrines',
  chapitre: 'La cellule et ses membranes',
  ordre: 4,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'jonction serrée',
    'jonction adhérente',
    'desmosome',
    'hémidesmosome',
    'jonction communicante',
    'collagène',
    'lame basale',
    'intégrine',
    'cadhérine',
  ],
  objectifs: [
    'Classer les jonctions cellulaires selon leur fonction : étanchéité, adhérence, communication.',
    'Décrire la structure et le rôle des jonctions serrées, des jonctions adhérentes, des desmosomes et des hémidesmosomes.',
    'Expliquer le principe et l’intérêt physiologique des jonctions communicantes.',
    'Décrire la composition et l’organisation de la matrice extracellulaire et de la lame basale.',
    'Différencier cadhérines, intégrines et autres molécules d’adhérence selon leur ligand.',
  ],
  sections: [
    {
      id: 'classification-jonctions',
      titre: 'Classification des jonctions cellulaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les jonctions cellulaires sont des complexes protéiques spécialisés, situés au niveau de la membrane plasmique, qui assurent la cohésion des tissus et régulent les échanges entre cellules ou entre une cellule et la matrice extracellulaire. On les classe en trois grandes catégories fonctionnelles.",
        },
        {
          type: 'tableau',
          titre: 'Les trois grandes catégories de jonctions',
          colonnes: ['Catégorie', 'Fonction', 'Exemples'],
          lignes: [
            ['Jonctions étanches', 'Sceller l’espace intercellulaire, contrôler le passage paracellulaire', 'Jonctions serrées'],
            ['Jonctions d’ancrage', 'Assurer la cohésion mécanique entre cellules ou avec la matrice', 'Jonctions adhérentes, desmosomes, hémidesmosomes'],
            ['Jonctions communicantes', 'Permettre le passage direct de petites molécules entre cytoplasmes', 'Jonctions gap (communicantes)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Localisation typique dans un épithélium',
          texte:
            "Dans un épithélium cylindrique polarisé, les jonctions serrées sont situées le plus apicalement, suivies vers la base par la ceinture d’adhérence, puis les desmosomes ponctuels, formant ce que l’on appelle le complexe de jonction.",
        },
      ],
    },
    {
      id: 'jonctions-serrees-adherentes',
      titre: 'Jonctions serrées et jonctions adhérentes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les jonctions serrées (jonctions étanches, ou « tight junctions ») forment une ceinture continue proche du pôle apical des cellules épithéliales, où les membranes des cellules voisines sont accolées par des protéines transmembranaires spécifiques, notamment les claudines et les occludines.",
        },
        {
          type: 'liste',
          items: [
            "Les jonctions serrées empêchent le passage libre de molécules et de micro-organismes par la voie paracellulaire (entre les cellules), forçant les échanges à emprunter la voie transcellulaire, régulée.",
            "Elles séparent le domaine apical et le domaine basolatéral de la membrane plasmique, empêchant la diffusion libre des protéines et des lipides entre ces deux domaines : c’est la barrière de diffusion.",
            "Les jonctions adhérentes (ceinture d’adhérence) relient le cytosquelette d’actine de cellules voisines par l’intermédiaire de cadhérines transmembranaires calcium-dépendantes.",
          ],
        },
        {
          type: 'definition',
          terme: 'Cadhérine',
          definition:
            "Glycoprotéine transmembranaire assurant une adhérence intercellulaire homophile (une cadhérine se lie à une cadhérine identique de la cellule voisine), dépendante du calcium extracellulaire.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Deux fonctions distinctes à ne pas confondre',
          texte:
            "La jonction serrée assure l’étanchéité de l’épithélium (fonction de barrière), tandis que la jonction adhérente assure la cohésion mécanique entre cellules en s’ancrant au cytosquelette d’actine. Ce sont deux structures différentes, souvent associées dans le complexe de jonction mais fonctionnellement distinctes.",
        },
      ],
    },
    {
      id: 'desmosomes-hemidesmosomes',
      titre: 'Desmosomes et hémidesmosomes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les desmosomes sont des jonctions ponctuelles, en forme de bouton-pression, qui ancrent le réseau de filaments intermédiaires (kératine dans les épithéliums) de deux cellules voisines, via des cadhérines desmosomales.",
        },
        {
          type: 'comparaison',
          titre: 'Desmosome et hémidesmosome',
          gauche: {
            titre: 'Desmosome',
            points: [
              'Relie deux cellules voisines entre elles',
              'Fait intervenir des cadhérines desmosomales (desmogléines, desmocollines)',
              'Ancre les filaments intermédiaires de kératine',
            ],
          },
          droite: {
            titre: 'Hémidesmosome',
            points: [
              'Relie une cellule à la lame basale sous-jacente',
              'Fait intervenir des intégrines et non des cadhérines',
              'Ancre également les filaments intermédiaires de kératine',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Pemphigus et pemphigoïde',
          texte:
            "Le pemphigus est une maladie auto-immune due à des auto-anticorps dirigés contre les cadhérines desmosomales (desmogléines), provoquant une perte de cohésion des kératinocytes. La pemphigoïde bulleuse, distincte, résulte d’auto-anticorps dirigés contre des protéines de l’hémidesmosome, à la jonction dermo-épidermique.",
        },
        {
          type: 'paragraphe',
          texte:
            "Ces deux jonctions confèrent une résistance mécanique importante aux tissus soumis à des contraintes de traction, comme l’épiderme ou le myocarde, où les desmosomes participent à la cohésion des cardiomyocytes au niveau des disques intercalaires.",
        },
      ],
    },
    {
      id: 'jonctions-communicantes',
      titre: 'Les jonctions communicantes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les jonctions communicantes (jonctions gap, ou « gap junctions ») mettent en continuité directe le cytoplasme de deux cellules voisines par des canaux protéiques, permettant le passage de petites molécules et d’ions sans passage par le milieu extracellulaire.",
        },
        {
          type: 'definition',
          terme: 'Connexon',
          definition:
            "Structure formée par l’assemblage de six sous-unités protéiques de connexine, disposées en anneau autour d’un pore central. L’association bout à bout de deux connexons de cellules voisines forme un canal intercellulaire complet.",
        },
        {
          type: 'liste',
          items: [
            "Le pore central des jonctions communicantes laisse passer des ions et de petites molécules (jusqu’à environ 1000 daltons), comme l’AMP cyclique, l’inositol triphosphate ou de petits métabolites.",
            "Elles assurent un couplage électrique et métabolique rapide entre cellules, essentiel par exemple à la propagation coordonnée de la dépolarisation entre cardiomyocytes.",
            "Leur perméabilité peut être régulée, notamment par la concentration en calcium intracellulaire ou par le pH.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Point à retenir',
          texte:
            "Les jonctions communicantes sont les seules à permettre un passage direct de cytoplasme à cytoplasme, sans emprunter le milieu extracellulaire, contrairement aux jonctions serrées, adhérentes et aux desmosomes, qui n’assurent qu’une cohésion ou une étanchéité entre membranes.",
        },
      ],
    },
    {
      id: 'matrice-extracellulaire',
      titre: 'La matrice extracellulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La matrice extracellulaire est un réseau macromoléculaire sécrété par les cellules, notamment les fibroblastes dans le tissu conjonctif, qui occupe l’espace extracellulaire et soutient l’architecture des tissus.",
        },
        {
          type: 'tableau',
          titre: 'Principaux constituants de la matrice extracellulaire',
          colonnes: ['Constituant', 'Nature', 'Rôle principal'],
          lignes: [
            ['Collagènes', 'Famille de protéines fibreuses (le collagène de type I est le plus abondant)', 'Résistance mécanique à la traction'],
            ['Élastine', 'Protéine fibreuse formant des fibres élastiques', 'Élasticité et retour à la forme initiale des tissus'],
            ['Protéoglycanes', 'Protéines associées à de longues chaînes de glycosaminoglycanes', 'Hydratation du tissu, résistance à la compression'],
            ['Glycoprotéines de structure', 'Fibronectine, laminine', 'Adhérence cellulaire, organisation de la matrice'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Le collagène, protéine la plus abondante',
          texte:
            "Le collagène est la protéine la plus abondante du corps humain, représentant une part importante de la masse protéique totale. Sa structure en triple hélice, riche en glycine et en hydroxyproline, lui confère une grande résistance mécanique.",
        },
      ],
    },
    {
      id: 'lame-basale-integrines',
      titre: 'Lame basale et intégrines',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La lame basale est une forme spécialisée et fine de matrice extracellulaire, sécrétée à la fois par les cellules épithéliales et par les cellules du tissu conjonctif sous-jacent, qui sépare un épithélium du tissu conjonctif qu’il recouvre.",
        },
        {
          type: 'liste',
          items: [
            "Sur le plan biochimique, la lame basale est principalement composée de collagène de type IV, de laminine, de nidogène et de protéoglycanes à héparane sulfate (perlécane).",
            "Elle sert de support d’ancrage aux cellules épithéliales, de filtre sélectif (comme dans la membrane basale glomérulaire du rein) et de guide lors de la régénération tissulaire.",
            "Elle est distincte de la matrice extracellulaire du tissu conjonctif sous-jacent, plus riche en collagène de type I et en fibres élastiques.",
          ],
        },
        {
          type: 'definition',
          terme: 'Intégrine',
          definition:
            "Récepteur transmembranaire hétérodimérique, formé d’une sous-unité alpha et d’une sous-unité bêta, qui relie des composants de la matrice extracellulaire (collagène, laminine, fibronectine) au cytosquelette d’actine intracellulaire, sans nécessiter de calcium extracellulaire comme les cadhérines.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Adhérence focale',
          texte:
            "Les intégrines s’organisent en complexes d’adhérence focale, où elles s’associent à des protéines intracellulaires (comme la taline et la vinculine) reliant le récepteur au cytosquelette d’actine, ce qui permet à la cellule de percevoir et de répondre aux propriétés mécaniques de son environnement.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les jonctions cellulaires se répartissent en trois catégories fonctionnelles : étanches, d’ancrage et communicantes.",
    "Les jonctions serrées assurent l’étanchéité épithéliale grâce aux claudines et occludines ; les jonctions adhérentes assurent la cohésion via les cadhérines et le cytosquelette d’actine.",
    "Le desmosome relie deux cellules entre elles par des cadhérines desmosomales ; l’hémidesmosome relie une cellule à la lame basale par des intégrines.",
    "Les jonctions communicantes mettent en continuité directe le cytoplasme de cellules voisines via des connexons formés de connexines.",
    "La matrice extracellulaire associe collagènes, élastine, protéoglycanes et glycoprotéines de structure comme la fibronectine.",
    "La lame basale, riche en collagène de type IV et en laminine, sépare l’épithélium du tissu conjonctif sous-jacent.",
    "Les intégrines relient la matrice extracellulaire au cytosquelette d’actine, sans dépendre du calcium extracellulaire, contrairement aux cadhérines.",
  ],
  erreursFrequentes: [
    "Confondre desmosome et hémidesmosome : le premier relie deux cellules par des cadhérines, le second relie une cellule à la lame basale par des intégrines.",
    "Attribuer aux jonctions serrées un rôle de cohésion mécanique : leur fonction principale est l’étanchéité, la cohésion relevant surtout des jonctions adhérentes et des desmosomes.",
    "Croire que les jonctions communicantes permettent le passage de grosses protéines : leur pore ne laisse passer que de petites molécules, jusqu’à environ 1000 daltons.",
    "Confondre matrice extracellulaire du tissu conjonctif et lame basale : cette dernière est une structure fine et spécialisée, de composition distincte (collagène IV, laminine).",
    "Oublier la calcium-dépendance des cadhérines, à l’inverse des intégrines qui n’en dépendent pas.",
    "Penser que le collagène de type I est le principal constituant de la lame basale : c’est le collagène de type IV qui la caractérise.",
  ],
  mnemotechniques: [
    {
      moyen: '« DESmosome = DEux cellules »',
      explication: 'Le desmosome relie deux cellules entre elles ; l’hémidesmosome, avec son préfixe « hémi » (demi), relie une seule cellule à la lame basale.',
    },
    {
      moyen: '« CAdhérine = CAlcium »',
      explication: 'Les cadhérines nécessitent du calcium extracellulaire pour leur fonction d’adhérence homophile.',
    },
    {
      moyen: '« Gap junction = Grand Assemblage de Pores »',
      explication: 'Les jonctions gap (communicantes) forment des pores directs entre cytoplasmes, via l’assemblage de connexons.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Pollard, Earnshaw, Lippincott-Schwartz, Biologie cellulaire, 3e édition',
    'Junqueira, Précis d’histologie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'biocell-jonctions-matrice-fc-01',
      recto: 'Quelles sont les trois grandes catégories fonctionnelles de jonctions cellulaires ?',
      verso: 'Les jonctions étanches, les jonctions d’ancrage et les jonctions communicantes.',
      type: 'classification',
      tags: ['jonctions cellulaires'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-02',
      recto: 'Quelles protéines forment les jonctions serrées ?',
      verso: 'Les claudines et les occludines, protéines transmembranaires assurant l’étanchéité de l’épithélium.',
      type: 'definition',
      tags: ['jonction serrée'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-03',
      recto: 'À quoi les jonctions adhérentes ancrent-elles la cellule ?',
      verso: 'Au cytosquelette d’actine, par l’intermédiaire de cadhérines transmembranaires calcium-dépendantes.',
      type: 'mecanisme',
      tags: ['jonction adhérente', 'cadhérine'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-04',
      recto: 'Quelle est la différence essentielle entre desmosome et hémidesmosome ?',
      verso: 'Le desmosome relie deux cellules entre elles via des cadhérines ; l’hémidesmosome relie une cellule à la lame basale via des intégrines.',
      type: 'classification',
      tags: ['desmosome', 'hémidesmosome'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-05',
      recto: 'Quelle maladie auto-immune cible les cadhérines desmosomales ?',
      verso: 'Le pemphigus, dû à des auto-anticorps dirigés contre les desmogléines.',
      type: 'clinique',
      tags: ['pemphigus', 'desmosome'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-06',
      recto: 'Qu’est-ce qu’un connexon ?',
      verso: 'Un assemblage de six sous-unités de connexine formant un demi-canal, dont l’association avec celui d’une cellule voisine constitue une jonction communicante.',
      type: 'definition',
      tags: ['jonction communicante', 'connexon'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-07',
      recto: 'Quelle taille maximale de molécule peut traverser une jonction communicante ?',
      verso: 'Environ 1000 daltons.',
      type: 'chiffre',
      tags: ['jonction communicante'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-08',
      recto: 'Quelle est la protéine la plus abondante du corps humain ?',
      verso: 'Le collagène, protéine fibreuse majeure de la matrice extracellulaire.',
      type: 'chiffre',
      tags: ['collagène', 'matrice extracellulaire'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-09',
      recto: 'Quels sont les principaux constituants de la lame basale ?',
      verso: 'Le collagène de type IV, la laminine, le nidogène et des protéoglycanes à héparane sulfate.',
      type: 'classification',
      tags: ['lame basale'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-10',
      recto: 'Qu’est-ce qu’une intégrine ?',
      verso: 'Un récepteur transmembranaire hétérodimérique (sous-unités alpha et bêta) reliant la matrice extracellulaire au cytosquelette d’actine.',
      type: 'definition',
      tags: ['intégrine'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-11',
      recto: 'Les cadhérines nécessitent-elles du calcium extracellulaire ?',
      verso: 'Oui, contrairement aux intégrines dont la fonction n’en dépend pas.',
      type: 'mecanisme',
      tags: ['cadhérine', 'intégrine'],
    },
    {
      id: 'biocell-jonctions-matrice-fc-12',
      recto: 'Quel type de filaments du cytosquelette est ancré par les desmosomes et les hémidesmosomes ?',
      verso: 'Les filaments intermédiaires, en particulier la kératine dans les épithéliums.',
      type: 'mecanisme',
      tags: ['desmosome', 'filaments intermédiaires'],
    },
  ],
  qcm: [
    {
      id: 'biocell-jonctions-matrice-qcm-01',
      enonce: 'Concernant la classification des jonctions cellulaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les jonctions serrées appartiennent aux jonctions étanches.', vraie: true, justification: 'Elles assurent l’imperméabilité de l’épithélium à la diffusion paracellulaire.' },
        { lettre: 'B', texte: 'Les desmosomes appartiennent aux jonctions communicantes.', vraie: false, justification: 'Les desmosomes sont des jonctions d’ancrage, non des jonctions communicantes.' },
        { lettre: 'C', texte: 'Les jonctions gap permettent un passage direct de cytoplasme à cytoplasme.', vraie: true, justification: 'C’est leur caractéristique fonctionnelle propre, via les connexons.' },
        { lettre: 'D', texte: 'Les hémidesmosomes relient deux cellules épithéliales entre elles.', vraie: false, justification: 'Les hémidesmosomes relient une cellule épithéliale à la lame basale, non à une autre cellule.' },
        { lettre: 'E', texte: 'Le complexe de jonction associe typiquement jonction serrée, jonction adhérente et desmosomes.', vraie: true, justification: 'C’est l’organisation classique observée au pôle apical des cellules épithéliales polarisées.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien distinguer les trois fonctions : étanchéité, ancrage et communication.',
      difficulte: 1,
    },
    {
      id: 'biocell-jonctions-matrice-qcm-02',
      enonce: 'Concernant les jonctions serrées et les jonctions adhérentes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les jonctions serrées font intervenir des claudines et des occludines.', vraie: true, justification: 'Ce sont les protéines transmembranaires caractéristiques de ces jonctions.' },
        { lettre: 'B', texte: 'Les jonctions serrées permettent une diffusion libre entre les domaines apical et basolatéral de la membrane.', vraie: false, justification: 'Elles constituent au contraire une barrière de diffusion entre ces deux domaines.' },
        { lettre: 'C', texte: 'Les jonctions adhérentes s’ancrent au cytosquelette d’actine.', vraie: true, justification: 'C’est le filament du cytosquelette auquel elles sont associées, via les caténines.' },
        { lettre: 'D', texte: 'Les cadhérines des jonctions adhérentes établissent une liaison homophile.', vraie: true, justification: 'Une cadhérine se lie à une cadhérine identique portée par la cellule voisine.' },
        { lettre: 'E', texte: 'Les jonctions serrées sont situées plus basalement que les desmosomes dans un épithélium polarisé.', vraie: false, justification: 'C’est l’inverse : les jonctions serrées sont les plus apicales du complexe de jonction.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir l’organisation apico-basale du complexe de jonction.',
      difficulte: 2,
    },
    {
      id: 'biocell-jonctions-matrice-qcm-03',
      enonce: 'Concernant les desmosomes et les hémidesmosomes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le desmosome fait intervenir des cadhérines desmosomales.', vraie: true, justification: 'Les desmogléines et desmocollines sont des cadhérines spécifiques du desmosome.' },
        { lettre: 'B', texte: 'L’hémidesmosome fait intervenir des intégrines.', vraie: true, justification: 'Les intégrines ancrent la cellule épithéliale à la lame basale au niveau de l’hémidesmosome.' },
        { lettre: 'C', texte: 'Le pemphigus est dû à des anticorps anti-intégrines.', vraie: false, justification: 'Le pemphigus est dû à des anticorps dirigés contre les cadhérines desmosomales (desmogléines).' },
        { lettre: 'D', texte: 'Les desmosomes participent à la cohésion des cardiomyocytes au niveau des disques intercalaires.', vraie: true, justification: 'Ils contribuent, avec d’autres jonctions, à la résistance mécanique du myocarde.' },
        { lettre: 'E', texte: 'Les desmosomes ancrent des microtubules.', vraie: false, justification: 'Les desmosomes ancrent des filaments intermédiaires (kératine), non des microtubules.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir que le desmosome et l’hémidesmosome ancrent tous deux des filaments intermédiaires, non des microtubules.',
      difficulte: 2,
    },
    {
      id: 'biocell-jonctions-matrice-qcm-04',
      enonce: 'Concernant les jonctions communicantes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elles sont formées par l’association de deux connexons de cellules voisines.', vraie: true, justification: 'Chaque connexon, formé de six connexines, s’associe à celui de la cellule adjacente.' },
        { lettre: 'B', texte: 'Elles permettent le passage de protéines de grande taille.', vraie: false, justification: 'Leur pore ne laisse passer que de petites molécules, jusqu’à environ 1000 daltons.' },
        { lettre: 'C', texte: 'Elles permettent un couplage électrique rapide entre cellules.', vraie: true, justification: 'C’est notamment le cas entre cardiomyocytes, pour la propagation de la dépolarisation.' },
        { lettre: 'D', texte: 'Leur perméabilité peut être régulée par la concentration en calcium intracellulaire.', vraie: true, justification: 'Une élévation importante du calcium intracellulaire peut fermer les jonctions communicantes.' },
        { lettre: 'E', texte: 'Elles permettent le passage de molécules directement dans le milieu extracellulaire.', vraie: false, justification: 'Le passage se fait directement de cytoplasme à cytoplasme, sans transiter par le milieu extracellulaire.' },
      ],
      correction: 'Réponses exactes : A, C et D. Le point clé est le passage direct entre cytoplasmes, de petites molécules seulement.',
      difficulte: 2,
    },
    {
      id: 'biocell-jonctions-matrice-qcm-05',
      enonce: 'Concernant la matrice extracellulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le collagène est la protéine la plus abondante du corps humain.', vraie: true, justification: 'Il constitue une part majeure de la masse protéique totale de l’organisme.' },
        { lettre: 'B', texte: 'Les protéoglycanes favorisent l’hydratation du tissu conjonctif.', vraie: true, justification: 'Leurs chaînes de glycosaminoglycanes retiennent l’eau, ce qui confère une résistance à la compression.' },
        { lettre: 'C', texte: 'La fibronectine est un lipide membranaire.', vraie: false, justification: 'La fibronectine est une glycoprotéine de structure de la matrice extracellulaire, non un lipide membranaire.' },
        { lettre: 'D', texte: 'L’élastine confère aux tissus leur capacité à retrouver leur forme initiale après déformation.', vraie: true, justification: 'C’est le rôle caractéristique des fibres élastiques riches en élastine.' },
        { lettre: 'E', texte: 'La matrice extracellulaire est uniquement sécrétée par les cellules épithéliales.', vraie: false, justification: 'Elle est principalement sécrétée par les fibroblastes du tissu conjonctif, ainsi que par d’autres types cellulaires selon le tissu.' },
      ],
      correction: 'Réponses exactes : A, B et D. Bien connaître la fonction propre de chaque constituant matriciel.',
      difficulte: 2,
    },
    {
      id: 'biocell-jonctions-matrice-qcm-06',
      enonce: 'Concernant la lame basale et les intégrines, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La lame basale est riche en collagène de type IV.', vraie: true, justification: 'C’est le type de collagène caractéristique de la lame basale, différent du collagène de type I du tissu conjonctif.' },
        { lettre: 'B', texte: 'La laminine est un constituant caractéristique de la lame basale.', vraie: true, justification: 'C’est une glycoprotéine majeure de la lame basale, avec le collagène de type IV.' },
        { lettre: 'C', texte: 'Les intégrines sont des dimères formés de deux sous-unités identiques.', vraie: false, justification: 'Les intégrines sont des hétérodimères, formés d’une sous-unité alpha et d’une sous-unité bêta différentes.' },
        { lettre: 'D', texte: 'Les intégrines relient la matrice extracellulaire au cytosquelette d’actine.', vraie: true, justification: 'C’est leur rôle fonctionnel dans les complexes d’adhérence focale.' },
        { lettre: 'E', texte: 'La lame basale glomérulaire du rein joue un rôle de filtre sélectif.', vraie: true, justification: 'Sa composition en collagène de type IV et en protéoglycanes contribue à la sélectivité de la filtration glomérulaire.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir que les intégrines sont hétérodimériques, contrairement à une idée reçue fréquente.',
      difficulte: 2,
    },
  ],
};
