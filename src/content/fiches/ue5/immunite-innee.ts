import type { Fiche } from '../../types';

export const ficheImmuniteInnee: Fiche = {
  id: 'ue5-immunite-innee',
  ue: 'ue5',
  titre: 'L’immunité innée',
  sousTitre:
    'Barrières, récepteurs de reconnaissance de motifs, phagocytose, cellules NK, cellules dendritiques et cytokines',
  chapitre: 'Immunité innée',
  ordre: 2,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'immunité innée',
    'PRR',
    'PAMP',
    'Toll-like receptor',
    'phagocytose',
    'cellule NK',
    'cellule dendritique',
    'interféron',
    'cytokine',
  ],
  objectifs: [
    'Décrire les barrières physiques, chimiques et biologiques de l’immunité innée.',
    'Expliquer le principe de reconnaissance des motifs moléculaires par les récepteurs PRR, en particulier les Toll-like récepteurs.',
    'Détailler les étapes de la phagocytose et ses acteurs cellulaires.',
    'Caractériser le mode d’action des cellules NK et des interférons dans la défense antivirale.',
    'Citer les principales cytokines de l’immunité innée et leurs effets biologiques.',
  ],
  sections: [
    {
      id: 'barrieres',
      titre: 'Barrières de l’immunité innée',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’immunité innée constitue la première ligne de défense de l’organisme. Elle est présente dès la naissance, sans nécessiter d’apprentissage préalable, et agit en quelques minutes à quelques heures. Elle comprend des barrières physiques, chimiques et biologiques, complétées par des mécanismes cellulaires et moléculaires.",
        },
        {
          type: 'tableau',
          titre: 'Barrières de première ligne',
          colonnes: ['Type de barrière', 'Exemples', 'Mode d’action'],
          lignes: [
            [
              'Physique',
              'Épiderme kératinisé, mucus, battements ciliaires',
              'Obstacle mécanique à la pénétration des agents pathogènes',
            ],
            [
              'Chimique',
              'pH acide cutané et gastrique, lysozyme salivaire et lacrymal, peptides antimicrobiens (défensines)',
              'Inactivation ou destruction directe des micro-organismes',
            ],
            [
              'Biologique',
              'Flore commensale cutanée et digestive',
              'Compétition nutritionnelle et spatiale avec les pathogènes',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Caractéristiques générales de l’immunité innée',
          texte:
            "L’immunité innée est non spécifique d’un antigène précis, immédiate, dépourvue de mémoire immunologique classique, et repose sur un nombre limité et germinal de récepteurs, contrairement à l’immunité adaptative dont les récepteurs sont générés par recombinaison somatique.",
        },
      ],
    },
    {
      id: 'reconnaissance-motifs',
      titre: 'Récepteurs de reconnaissance de motifs (PRR)',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cellules de l’immunité innée détectent les agents pathogènes grâce à des récepteurs de reconnaissance de motifs (Pattern Recognition Receptors, PRR), qui reconnaissent des motifs moléculaires associés aux pathogènes (Pathogen-Associated Molecular Patterns, PAMP), structures conservées et communes à de larges familles de micro-organismes.",
        },
        {
          type: 'definition',
          terme: 'PAMP',
          definition:
            "Motif moléculaire conservé, essentiel à la survie ou à la virulence d’un pathogène, absent des cellules de l’hôte. Exemples : lipopolysaccharide (LPS) des bactéries à Gram négatif, peptidoglycane, acide lipotéichoïque des bactéries à Gram positif, ARN double brin viral.",
        },
        {
          type: 'tableau',
          titre: 'Principaux Toll-like récepteurs (TLR)',
          colonnes: ['Récepteur', 'Localisation', 'Ligand reconnu'],
          lignes: [
            ['TLR4', 'Membrane plasmique', 'Lipopolysaccharide (LPS) des bactéries à Gram négatif'],
            ['TLR2', 'Membrane plasmique', 'Peptidoglycane et lipoprotéines bactériennes'],
            ['TLR5', 'Membrane plasmique', 'Flagelline bactérienne'],
            ['TLR3', 'Endosome', 'ARN double brin viral'],
            ['TLR9', 'Endosome', 'ADN bactérien ou viral non méthylé (motifs CpG)'],
          ],
        },
        {
          type: 'liste',
          items: [
            "Les DAMP (Damage-Associated Molecular Patterns) sont des motifs endogènes libérés par des cellules lésées ou nécrotiques, également reconnus par certains PRR, expliquant l’inflammation stérile.",
            "L’activation des TLR déclenche une cascade de signalisation intracellulaire aboutissant à la translocation nucléaire du facteur de transcription NF-κB et à la production de cytokines pro-inflammatoires.",
            "D’autres familles de PRR existent : les récepteurs de type NOD (cytoplasmiques, activateurs de l’inflammasome), les récepteurs de type RIG-I (détection d’ARN viral cytoplasmique) et les récepteurs lectines de type C (reconnaissance de glucides fongiques).",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'PRR : récepteurs germinaux, non clonaux',
          texte:
            "Contrairement au récepteur T ou au récepteur B, les PRR ne sont pas générés par recombinaison somatique : ils sont codés directement dans le génome germinal, exprimés de façon identique sur toutes les cellules d’un même type, et reconnaissent un nombre limité de motifs partagés par de nombreux pathogènes.",
        },
      ],
    },
    {
      id: 'phagocytose',
      titre: 'La phagocytose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La phagocytose est le processus par lequel certaines cellules, dites phagocytaires (polynucléaires neutrophiles, monocytes, macrophages), internalisent et détruisent des particules de grande taille, notamment des micro-organismes.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la phagocytose',
          etapes: [
            {
              titre: 'Reconnaissance et adhérence',
              detail:
                "La cible est reconnue directement par des PRR ou indirectement via des opsonines (anticorps, fragments du complément C3b) fixées à sa surface et reconnues par des récepteurs spécifiques du phagocyte (récepteurs Fc, récepteurs du complément).",
            },
            {
              titre: 'Engloutissement',
              detail:
                "La membrane plasmique du phagocyte émet des pseudopodes qui entourent la particule, formant une vacuole close appelée phagosome.",
            },
            {
              titre: 'Fusion et digestion',
              detail:
                "Le phagosome fusionne avec les lysosomes pour former le phagolysosome, où la cible est détruite par des enzymes protéolytiques, des dérivés réactifs de l’oxygène (explosion oxydative) et des peptides antimicrobiens.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Opsonisation',
          definition:
            "Recouvrement d’un agent pathogène par des molécules (anticorps, fragments du complément) qui facilitent sa reconnaissance et sa capture par les cellules phagocytaires, augmentant considérablement l’efficacité de la phagocytose.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Granulomatose septique chronique',
          texte:
            "Déficit héréditaire de la NADPH oxydase phagocytaire, empêchant la production des dérivés réactifs de l’oxygène nécessaires à la destruction intracellulaire des micro-organismes. Elle se traduit par des infections bactériennes et fongiques récurrentes et sévères malgré une phagocytose initiale normale.",
        },
      ],
    },
    {
      id: 'nk-dendritiques',
      titre: 'Cellules NK et cellules dendritiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cellules NK (natural killer) assurent la surveillance immunitaire innée contre les cellules infectées par des virus et les cellules tumorales, en l’absence de sensibilisation préalable, sans restriction par le complexe majeur d’histocompatibilité (CMH).",
        },
        {
          type: 'liste',
          items: [
            "L’activité cytotoxique de la cellule NK résulte de l’équilibre entre des récepteurs activateurs et des récepteurs inhibiteurs, ces derniers reconnaissant les molécules du CMH de classe I normalement exprimées à la surface des cellules saines.",
            "La perte d’expression du CMH de classe I (fréquente lors d’une infection virale ou d’une transformation tumorale) lève l’inhibition et déclenche la lyse par la cellule NK : c’est l’hypothèse du « soi manquant » (missing self).",
            "La cellule NK cytotoxique tue sa cible par exocytose de granules contenant de la perforine et des granzymes, aboutissant à l’apoptose de la cellule cible, selon un mécanisme proche de celui du lymphocyte T CD8.",
          ],
        },
        {
          type: 'definition',
          terme: 'Cellule dendritique',
          definition:
            "Cellule présentatrice d’antigène professionnelle, résidant dans les tissus périphériques à l’état immature, capable de capter l’antigène puis de migrer vers les organes lymphoïdes secondaires où elle se différencie en cellule mature et active les lymphocytes T naïfs. Elle constitue le principal lien entre immunité innée et immunité adaptative.",
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Maturation de la cellule dendritique',
          texte:
            "La rencontre d’un PAMP par les PRR de la cellule dendritique immature déclenche sa maturation : augmentation de l’expression des molécules du CMH et des molécules de costimulation (CD80, CD86), perte de la capacité de capture d’antigène et migration vers le ganglion drainant via la lymphe afférente.",
        },
      ],
    },
    {
      id: 'cytokines-interferons',
      titre: 'Cytokines de l’inflammation et interférons',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les cytokines sont des protéines de signalisation sécrétées par les cellules immunitaires, agissant à faible concentration sur des récepteurs spécifiques pour coordonner la réponse immunitaire, notamment lors de la phase précoce de l’inflammation.",
        },
        {
          type: 'tableau',
          titre: 'Principales cytokines pro-inflammatoires de l’immunité innée',
          colonnes: ['Cytokine', 'Source principale', 'Effets principaux'],
          lignes: [
            [
              'Interleukine 1 (IL-1)',
              'Macrophages',
              'Fièvre, activation endothéliale, synthèse hépatique des protéines de la phase aiguë',
            ],
            [
              'Interleukine 6 (IL-6)',
              'Macrophages',
              'Fièvre, stimulation de la synthèse hépatique de la CRP, différenciation des lymphocytes B',
            ],
            [
              'TNF-alpha',
              'Macrophages',
              'Activation endothéliale, fièvre, choc septique à forte concentration',
            ],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Les interférons de type I (interféron alpha et interféron bêta) sont produits par la plupart des cellules infectées par un virus, en particulier les cellules dendritiques plasmacytoïdes. Ils induisent un état antiviral dans les cellules voisines non encore infectées, en inhibant la réplication virale et en augmentant l’expression du CMH de classe I, et activent également les cellules NK.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Interféron gamma',
          texte:
            "L’interféron gamma (interféron de type II) est produit principalement par les lymphocytes T et les cellules NK. Il active fortement les macrophages (augmentation du pouvoir bactéricide et de l’expression du CMH), jouant un rôle central dans la défense contre les pathogènes intracellulaires.",
        },
      ],
    },
  ],
  pointsCles: [
    'L’immunité innée agit immédiatement, sans mémoire classique, grâce à des récepteurs germinaux non clonaux.',
    'Les PRR reconnaissent des motifs conservés (PAMP) partagés par de larges familles de pathogènes, et parfois des DAMP endogènes.',
    'Les Toll-like récepteurs sont les PRR les mieux caractérisés : TLR4 pour le LPS, TLR3 et TLR9 pour les acides nucléiques microbiens.',
    'La phagocytose comprend reconnaissance, engloutissement puis digestion dans le phagolysosome ; l’opsonisation l’amplifie fortement.',
    'La cellule NK tue selon le principe du soi manquant, en l’absence d’expression du CMH de classe I.',
    'La cellule dendritique est le lien majeur entre immunité innée et adaptative, via sa maturation et sa migration ganglionnaire.',
    'Les interférons de type I induisent un état antiviral des cellules voisines et activent les cellules NK.',
  ],
  erreursFrequentes: [
    "Croire que les PRR sont générés par recombinaison somatique comme le TCR ou le BCR : ils sont en réalité codés par le génome germinal.",
    'Confondre PAMP (motif microbien) et DAMP (motif endogène de danger).',
    "Penser que la cellule NK nécessite une présentation par le CMH pour reconnaître sa cible : elle agit au contraire lorsque le CMH de classe I est absent.",
    'Oublier l’étape d’opsonisation, qui augmente considérablement l’efficacité de la phagocytose.',
    'Confondre interféron de type I (antiviral, produit par les cellules infectées) et interféron gamma (activateur des macrophages, produit par les lymphocytes T et les NK).',
    'Attribuer à l’immunité innée une spécificité fine comparable à celle de l’immunité adaptative.',
  ],
  mnemotechniques: [
    {
      moyen: '« Missing self » = manque de soi = attaque',
      explication:
        'La cellule NK tue quand le CMH de classe I (marqueur du soi) manque à la surface de la cellule cible.',
    },
    {
      moyen: 'TLR4 = 4 lettres dans LPS ? Non : retenir « 4 comme Gram-négatif, quatrième lettre de l’alphabet, LPS »',
      explication:
        'Association mnémotechnique simple : TLR4 reconnaît le LPS des bactéries à Gram négatif, le TLR le plus cité en QCM.',
    },
    {
      moyen: '3 étapes de la phagocytose : RED',
      explication:
        'Reconnaissance, Engloutissement, Digestion : les trois étapes clés de la phagocytose à retenir dans l’ordre.',
    },
  ],
  sources: [
    'Abbas, Lichtman, Pillai, Les bases de l’immunologie fondamentale et clinique',
    'Janeway, Immunobiologie',
    'Roitt, Immunologie',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue5-immunite-innee-fc-01',
      recto: 'Qu’est-ce qu’un PAMP ?',
      verso: 'Un motif moléculaire conservé, essentiel au pathogène, absent des cellules de l’hôte (exemple : le LPS).',
      type: 'definition',
      tags: ['PRR', 'PAMP'],
    },
    {
      id: 'ue5-immunite-innee-fc-02',
      recto: 'Quel TLR reconnaît le lipopolysaccharide (LPS) ?',
      verso: 'Le TLR4, exprimé à la membrane plasmique.',
      type: 'classification',
      tags: ['TLR'],
    },
    {
      id: 'ue5-immunite-innee-fc-03',
      recto: 'Quels TLR reconnaissent des acides nucléiques microbiens, et où sont-ils localisés ?',
      verso: 'TLR3 (ARN double brin) et TLR9 (ADN CpG), tous deux localisés dans l’endosome.',
      type: 'classification',
      tags: ['TLR'],
    },
    {
      id: 'ue5-immunite-innee-fc-04',
      recto: 'Citer les trois étapes de la phagocytose.',
      verso: 'Reconnaissance et adhérence, engloutissement (formation du phagosome), fusion et digestion (phagolysosome).',
      type: 'mecanisme',
      tags: ['phagocytose'],
    },
    {
      id: 'ue5-immunite-innee-fc-05',
      recto: 'Qu’est-ce que l’opsonisation ?',
      verso: 'Le recouvrement d’un pathogène par des anticorps ou des fragments du complément, facilitant sa phagocytose.',
      type: 'definition',
      tags: ['phagocytose', 'opsonisation'],
    },
    {
      id: 'ue5-immunite-innee-fc-06',
      recto: 'Quelle enzyme est déficitaire dans la granulomatose septique chronique ?',
      verso: 'La NADPH oxydase phagocytaire, responsable de l’explosion oxydative.',
      type: 'clinique',
      tags: ['phagocytose', 'déficit immunitaire'],
    },
    {
      id: 'ue5-immunite-innee-fc-07',
      recto: 'Selon quel principe la cellule NK détruit-elle une cellule infectée ?',
      verso: 'Le principe du soi manquant (missing self) : la perte du CMH de classe I lève l’inhibition et déclenche la lyse.',
      type: 'mecanisme',
      tags: ['cellule NK'],
    },
    {
      id: 'ue5-immunite-innee-fc-08',
      recto: 'Par quel mécanisme la cellule NK tue-t-elle sa cible ?',
      verso: 'Exocytose de granules contenant perforine et granzymes, induisant l’apoptose de la cellule cible.',
      type: 'mecanisme',
      tags: ['cellule NK'],
    },
    {
      id: 'ue5-immunite-innee-fc-09',
      recto: 'Quelle cellule constitue le principal lien entre immunité innée et immunité adaptative ?',
      verso: 'La cellule dendritique, présentatrice d’antigène professionnelle.',
      type: 'definition',
      tags: ['cellule dendritique'],
    },
    {
      id: 'ue5-immunite-innee-fc-10',
      recto: 'Quels sont les effets biologiques principaux de l’interféron de type I ?',
      verso: 'Induction d’un état antiviral dans les cellules voisines, augmentation du CMH de classe I, activation des cellules NK.',
      type: 'mecanisme',
      tags: ['interféron'],
    },
    {
      id: 'ue5-immunite-innee-fc-11',
      recto: 'Quelle cytokine produite par les lymphocytes T et les NK active fortement les macrophages ?',
      verso: 'L’interféron gamma.',
      type: 'mecanisme',
      tags: ['interféron', 'macrophage'],
    },
    {
      id: 'ue5-immunite-innee-fc-12',
      recto: 'Citer trois cytokines pro-inflammatoires majeures produites par les macrophages.',
      verso: 'IL-1, IL-6 et TNF-alpha.',
      type: 'classification',
      tags: ['cytokines'],
    },
  ],
  qcm: [
    {
      id: 'ue5-immunite-innee-qcm-01',
      enonce: 'Concernant les caractéristiques générales de l’immunité innée, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle nécessite une sensibilisation préalable à l’antigène.', vraie: false, justification: 'C’est l’immunité adaptative qui nécessite une sensibilisation préalable ; l’innée agit immédiatement.' },
        { lettre: 'B', texte: 'Ses récepteurs sont codés par le génome germinal, sans recombinaison somatique.', vraie: true, justification: 'Exact : contrairement au TCR et au BCR, les PRR ne sont pas issus d’un réarrangement génétique.' },
        { lettre: 'C', texte: 'Elle comprend des barrières physiques, chimiques et biologiques.', vraie: true, justification: 'Exact : peau, mucus, pH acide, lysozyme, flore commensale en sont des exemples.' },
        { lettre: 'D', texte: 'Elle est capable de reconnaître spécifiquement chaque antigène individuel.', vraie: false, justification: 'Elle reconnaît des motifs partagés par de larges familles de pathogènes, pas un antigène précis.' },
        { lettre: 'E', texte: 'Elle agit en quelques minutes à quelques heures.', vraie: true, justification: 'Exact, contrairement à l’immunité adaptative qui nécessite plusieurs jours pour se mettre en place.' },
      ],
      correction: 'Réponses exactes : B, C et E. L’immunité innée est rapide, non spécifique et non clonale.',
      difficulte: 1,
    },
    {
      id: 'ue5-immunite-innee-qcm-02',
      enonce: 'Concernant les Toll-like récepteurs, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le TLR4 reconnaît le lipopolysaccharide des bactéries à Gram négatif.', vraie: true, justification: 'Exact : c’est le récepteur le plus classiquement associé au LPS.' },
        { lettre: 'B', texte: 'Le TLR5 reconnaît la flagelline bactérienne.', vraie: true, justification: 'Exact : la flagelline est le ligand spécifique du TLR5.' },
        { lettre: 'C', texte: 'Le TLR3 est exprimé à la membrane plasmique.', vraie: false, justification: 'Le TLR3 est localisé dans les endosomes, comme le TLR9.' },
        { lettre: 'D', texte: 'L’activation des TLR aboutit à l’activation du facteur NF-κB.', vraie: true, justification: 'Exact : cette voie aboutit à la production de cytokines pro-inflammatoires.' },
        { lettre: 'E', texte: 'Les TLR sont spécifiques d’un seul individu pathogène.', vraie: false, justification: 'Les TLR reconnaissent des motifs conservés partagés par de nombreux pathogènes différents.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir la localisation membranaire ou endosomale selon le ligand reconnu.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunite-innee-qcm-03',
      enonce: 'Concernant la phagocytose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’opsonisation diminue l’efficacité de la phagocytose.', vraie: false, justification: 'Au contraire, l’opsonisation augmente considérablement l’efficacité de la phagocytose.' },
        { lettre: 'B', texte: 'Le phagosome fusionne avec les lysosomes pour former le phagolysosome.', vraie: true, justification: 'Exact : c’est l’étape de digestion de la cible.' },
        { lettre: 'C', texte: 'Les dérivés réactifs de l’oxygène participent à la destruction intracellulaire des pathogènes.', vraie: true, justification: 'Exact : c’est l’explosion oxydative, dépendante de la NADPH oxydase.' },
        { lettre: 'D', texte: 'Les fragments C3b du complément peuvent servir d’opsonines.', vraie: true, justification: 'Exact : ils sont reconnus par des récepteurs du complément à la surface des phagocytes.' },
        { lettre: 'E', texte: 'La granulomatose septique chronique résulte d’un déficit en lysozyme.', vraie: false, justification: 'Elle résulte d’un déficit de la NADPH oxydase, pas du lysozyme.' },
      ],
      correction: 'Réponses exactes : B, C et D. L’opsonisation et l’explosion oxydative sont deux notions centrales.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunite-innee-qcm-04',
      enonce: 'Concernant la cellule NK, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle nécessite une présentation antigénique par le CMH pour agir.', vraie: false, justification: 'Elle agit au contraire sans restriction par le CMH, selon le principe du soi manquant.' },
        { lettre: 'B', texte: 'Elle possède des récepteurs à la fois activateurs et inhibiteurs.', vraie: true, justification: 'Exact : l’équilibre entre ces signaux détermine le déclenchement de la cytotoxicité.' },
        { lettre: 'C', texte: 'Elle tue sa cible en libérant perforine et granzymes.', vraie: true, justification: 'Exact : mécanisme proche de celui du lymphocyte T CD8 cytotoxique.' },
        { lettre: 'D', texte: 'La perte du CMH de classe I inhibe l’activité de la cellule NK.', vraie: false, justification: 'La perte du CMH de classe I lève au contraire l’inhibition et favorise la lyse par la cellule NK.' },
        { lettre: 'E', texte: 'La cellule NK appartient à l’immunité innée.', vraie: true, justification: 'Exact, malgré son origine lymphoïde et sa morphologie proche des lymphocytes.' },
      ],
      correction: 'Réponses exactes : B, C et E. Le principe du soi manquant est la notion clé à maîtriser.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunite-innee-qcm-05',
      enonce: 'Concernant la cellule dendritique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est la principale cellule assurant le lien entre immunité innée et adaptative.', vraie: true, justification: 'Exact : elle capte l’antigène puis active les lymphocytes T naïfs dans le ganglion.' },
        { lettre: 'B', texte: 'Sa maturation augmente sa capacité de capture antigénique.', vraie: false, justification: 'La maturation diminue au contraire la capacité de capture, au profit de la présentation.' },
        { lettre: 'C', texte: 'La maturation s’accompagne d’une augmentation de l’expression du CMH et des molécules de costimulation.', vraie: true, justification: 'Exact : CD80 et CD86 sont surexprimés lors de la maturation.' },
        { lettre: 'D', texte: 'Elle migre vers le ganglion drainant via la lymphe afférente après maturation.', vraie: true, justification: 'Exact : cette migration lui permet de rencontrer les lymphocytes T naïfs.' },
        { lettre: 'E', texte: 'Elle est incapable de reconnaître les PAMP.', vraie: false, justification: 'Elle exprime de nombreux PRR, dont des TLR, qui déclenchent sa maturation.' },
      ],
      correction: 'Réponses exactes : A, C et D. La maturation dendritique est un tournant fonctionnel majeur.',
      difficulte: 2,
    },
    {
      id: 'ue5-immunite-innee-qcm-06',
      enonce: 'Concernant les cytokines de l’immunité innée, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’IL-1 et l’IL-6 participent à la genèse de la fièvre.', vraie: true, justification: 'Exact : elles agissent sur les centres hypothalamiques de la thermorégulation.' },
        { lettre: 'B', texte: 'L’interféron gamma est produit principalement par les cellules infectées elles-mêmes.', vraie: false, justification: 'L’interféron gamma est surtout produit par les lymphocytes T et les cellules NK, pas par la cellule infectée.' },
        { lettre: 'C', texte: 'Les interférons de type I induisent un état antiviral dans les cellules voisines non infectées.', vraie: true, justification: 'Exact : c’est leur fonction principale de défense antivirale précoce.' },
        { lettre: 'D', texte: 'Le TNF-alpha peut provoquer un choc septique à forte concentration.', vraie: true, justification: 'Exact : une production excessive et systémique de TNF-alpha est impliquée dans le choc septique.' },
        { lettre: 'E', texte: 'L’IL-6 stimule la synthèse hépatique de la protéine C réactive.', vraie: true, justification: 'Exact : l’IL-6 est le principal inducteur de la CRP lors de la phase aiguë.' },
      ],
      correction: 'Réponses exactes : A, C, D et E. Distinguer clairement interféron de type I (antiviral direct) et interféron gamma (activateur des macrophages).',
      difficulte: 2,
    },
  ],
};
