import type { Fiche } from '../../types';

export const ficheSignalisationApoptose: Fiche = {
  id: 'biocell-signalisation-apoptose',
  ue: 'biocell',
  titre: 'Signalisation cellulaire et apoptose',
  sousTitre: 'Récepteurs membranaires et nucléaires, protéines G, seconds messagers, voies apoptotiques intrinsèque et extrinsèque',
  chapitre: 'Dynamique cellulaire',
  ordre: 12,
  duree: 29,
  difficulte: 3,
  motsCles: [
    'récepteur membranaire',
    'protéine G',
    'second messager',
    'récepteur tyrosine kinase',
    'apoptose',
    'caspase',
    'voie intrinsèque',
    'voie extrinsèque',
  ],
  objectifs: [
    'Différencier récepteurs membranaires et récepteurs nucléaires selon la nature du ligand.',
    'Décrire le fonctionnement général des récepteurs couplés aux protéines G et des principaux seconds messagers.',
    'Expliquer le principe de signalisation des récepteurs à activité tyrosine kinase.',
    'Décrire les voies intrinsèque et extrinsèque de l’apoptose et le rôle des caspases.',
    'Différencier apoptose et nécrose sur le plan morphologique et fonctionnel.',
  ],
  sections: [
    {
      id: 'recepteurs-membranaires-nucleaires',
      titre: 'Récepteurs membranaires et récepteurs nucléaires',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La communication cellulaire repose sur la fixation d’un signal, ou ligand, sur un récepteur spécifique, qui déclenche une cascade d’évènements intracellulaires. La localisation du récepteur dépend directement de la nature physico-chimique du ligand.",
        },
        {
          type: 'comparaison',
          titre: 'Récepteurs membranaires et récepteurs nucléaires',
          gauche: {
            titre: 'Récepteurs membranaires',
            points: [
              'Situés à la surface cellulaire',
              'Fixent des ligands hydrophiles, incapables de traverser la bicouche lipidique',
              'Exemples : récepteurs couplés aux protéines G, récepteurs à activité tyrosine kinase',
            ],
          },
          droite: {
            titre: 'Récepteurs nucléaires (ou cytoplasmiques)',
            points: [
              'Situés dans le cytoplasme ou le noyau',
              'Fixent des ligands lipophiles, capables de traverser la membrane plasmique',
              'Exemples : récepteurs des hormones stéroïdes, récepteurs des hormones thyroïdiennes',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Les récepteurs nucléaires, des facteurs de transcription',
          texte:
            "Après fixation de leur ligand, les récepteurs nucléaires agissent directement comme des facteurs de transcription, en se liant à des séquences régulatrices spécifiques de l’ADN pour moduler l’expression de gènes cibles, sans nécessiter de cascade de signalisation intermédiaire.",
        },
      ],
    },
    {
      id: 'proteines-g-seconds-messagers',
      titre: 'Récepteurs couplés aux protéines G et seconds messagers',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les récepteurs couplés aux protéines G (RCPG) constituent la plus grande famille de récepteurs membranaires. Ils comportent sept segments transmembranaires et transmettent leur signal via une protéine G hétérotrimérique associée à leur face cytoplasmique.",
        },
        {
          type: 'etapes',
          titre: 'Principe de la signalisation par un RCPG',
          etapes: [
            {
              titre: 'Fixation du ligand',
              detail: "Le ligand se fixe sur le récepteur, ce qui modifie sa conformation.",
            },
            {
              titre: 'Activation de la protéine G',
              detail: "Le récepteur active la protéine G hétérotrimérique associée, en catalysant l’échange du GDP par du GTP sur sa sous-unité alpha.",
            },
            {
              titre: 'Dissociation et action sur un effecteur',
              detail: "La sous-unité alpha activée se dissocie du dimère bêta-gamma, et module l’activité d’une enzyme effectrice, par exemple l’adénylate cyclase ou la phospholipase C.",
            },
            {
              titre: 'Retour à l’état inactif',
              detail: "L’activité GTPase intrinsèque de la sous-unité alpha hydrolyse le GTP en GDP, ce qui met fin au signal et permet la réassociation du trimère.",
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Principaux seconds messagers et voies associées',
          colonnes: ['Second messager', 'Enzyme productrice', 'Effet principal'],
          lignes: [
            ['AMP cyclique (AMPc)', 'Adénylate cyclase', 'Active la protéine kinase A (PKA)'],
            ['Inositol triphosphate (IP3)', 'Phospholipase C', 'Libère le calcium du réticulum endoplasmique'],
            ['Diacylglycérol (DAG)', 'Phospholipase C', 'Active la protéine kinase C (PKC)'],
            ['Calcium (Ca2+)', 'Canaux calciques (réticulum ou membrane plasmique)', 'Active de nombreuses protéines dont la calmoduline'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Deux grandes familles de protéines Galpha',
          texte:
            "Une protéine Gs (stimulatrice) active l’adénylate cyclase et augmente l’AMPc, tandis qu’une protéine Gi (inhibitrice) l’inhibe et diminue l’AMPc. Un même second messager, comme l’AMPc, peut donc voir sa production augmentée ou diminuée selon le type de récepteur et de protéine G impliqués.",
        },
      ],
    },
    {
      id: 'recepteurs-tyrosine-kinase',
      titre: 'Les récepteurs à activité tyrosine kinase',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les récepteurs à activité tyrosine kinase possèdent, sur leur domaine intracellulaire, une activité enzymatique capable de phosphoryler des résidus tyrosine, activité déclenchée par la fixation du ligand.",
        },
        {
          type: 'liste',
          items: [
            "La fixation du ligand provoque une dimérisation du récepteur, qui permet l’autophosphorylation croisée de résidus tyrosine sur le domaine intracellulaire de chaque monomère.",
            "Les résidus tyrosine phosphorylés servent de sites d’ancrage à des protéines intracellulaires porteuses de domaines SH2, qui reconnaissent spécifiquement la phosphotyrosine.",
            "Ce recrutement de protéines adaptatrices déclenche des voies de signalisation intracellulaires majeures, notamment la voie des protéines kinases activées par des mitogènes (MAPK), impliquée dans la prolifération cellulaire.",
          ],
        },
        {
          type: 'definition',
          terme: 'Domaine SH2',
          definition:
            "Domaine protéique qui reconnaît spécifiquement un résidu tyrosine phosphorylé dans un contexte de séquence donné, permettant le recrutement sélectif de protéines de signalisation au niveau d’un récepteur activé.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Récepteurs tyrosine kinase et cancérogenèse',
          texte:
            "Certains récepteurs à activité tyrosine kinase, comme le récepteur du facteur de croissance épidermique (EGFR) ou HER2, peuvent être anormalement activés ou surexprimés dans certains cancers, ce qui en fait des cibles thérapeutiques importantes de médicaments inhibiteurs de tyrosine kinase ou d’anticorps monoclonaux.",
        },
      ],
    },
    {
      id: 'apoptose-generalites',
      titre: 'L’apoptose : généralités',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’apoptose est une mort cellulaire programmée, physiologique, qui permet l’élimination contrôlée de cellules devenues inutiles, endommagées ou potentiellement dangereuses, sans provoquer de réaction inflammatoire.",
        },
        {
          type: 'liste',
          items: [
            "Sur le plan morphologique, l’apoptose se caractérise par une condensation de la chromatine, une fragmentation nucléaire, une rétraction cellulaire et la formation de corps apoptotiques, vésicules entourées de membrane contenant des fragments cellulaires.",
            "Ces corps apoptotiques sont rapidement phagocytés par des cellules voisines ou des macrophages, sans libération du contenu cellulaire dans le milieu extracellulaire.",
            "L’apoptose intervient dans de nombreux processus physiologiques : renouvellement tissulaire, modelage des tissus au cours du développement embryonnaire, élimination des lymphocytes autoréactifs.",
          ],
        },
        {
          type: 'definition',
          terme: 'Caspase',
          definition:
            "Protéase à cystéine clivant ses substrats après un résidu acide aspartique, activée en cascade lors de l’apoptose. On distingue les caspases initiatrices, qui déclenchent le processus, des caspases exécutrices, qui clivent les substrats cellulaires responsables des modifications morphologiques de l’apoptose.",
        },
      ],
    },
    {
      id: 'voies-apoptose',
      titre: 'Les voies intrinsèque et extrinsèque de l’apoptose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’apoptose peut être déclenchée par deux grandes voies de signalisation, la voie intrinsèque (ou mitochondriale) et la voie extrinsèque (ou des récepteurs de mort), qui convergent toutes deux vers l’activation des caspases exécutrices.",
        },
        {
          type: 'comparaison',
          titre: 'Voie intrinsèque et voie extrinsèque',
          gauche: {
            titre: 'Voie intrinsèque (mitochondriale)',
            points: [
              'Déclenchée par un stress intracellulaire (dommage de l’ADN, stress oxydatif)',
              'Régulée par les protéines de la famille Bcl-2',
              'Perméabilisation de la membrane externe mitochondriale, libération du cytochrome c',
              'Formation de l’apoptosome, activation de la caspase 9',
            ],
          },
          droite: {
            titre: 'Voie extrinsèque (récepteurs de mort)',
            points: [
              'Déclenchée par la fixation d’un ligand extracellulaire sur un récepteur de mort',
              'Exemple : liaison de Fas-ligand sur le récepteur Fas (CD95)',
              'Formation du complexe de signalisation DISC',
              'Activation de la caspase 8',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La convergence vers les caspases exécutrices',
          texte:
            "Les caspases initiatrices activées par chaque voie (caspase 9 pour la voie intrinsèque, caspase 8 pour la voie extrinsèque) activent ensuite les mêmes caspases exécutrices, en particulier la caspase 3, responsable des modifications morphologiques caractéristiques de l’apoptose.",
        },
        {
          type: 'paragraphe',
          texte:
            "La famille Bcl-2 comprend des protéines pro-apoptotiques (comme Bax et Bak) et des protéines anti-apoptotiques (comme Bcl-2 elle-même et Bcl-xL), dont l’équilibre détermine la perméabilisation ou non de la membrane externe mitochondriale et donc l’engagement de la voie intrinsèque.",
        },
      ],
    },
    {
      id: 'apoptose-necrose',
      titre: 'Apoptose et nécrose',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’apoptose et la nécrose sont deux modes de mort cellulaire aux caractéristiques morphologiques et fonctionnelles très différentes, dont la distinction est importante sur le plan physiopathologique.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison apoptose et nécrose',
          colonnes: ['Caractéristique', 'Apoptose', 'Nécrose'],
          lignes: [
            ['Nature du processus', 'Programmée, active, consommatrice d’énergie', 'Passive, accidentelle, souvent liée à un manque d’énergie'],
            ['Membrane plasmique', 'Reste intacte jusqu’à la phagocytose', 'Se rompt précocement'],
            ['Contenu cellulaire', 'Contenu dans des corps apoptotiques, non libéré dans le milieu', 'Libéré dans le milieu extracellulaire'],
            ['Réaction inflammatoire', 'Absente', 'Présente, du fait de la libération du contenu cellulaire'],
            ['Cellules voisines', 'Non affectées', 'Peuvent être lésées par les enzymes et médiateurs libérés'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Intérêt clinique de la distinction',
          texte:
            "Un infarctus du myocarde provoque une nécrose du tissu privé d’oxygène, avec réaction inflammatoire et libération de marqueurs cellulaires dans la circulation (comme la troponine), à la différence de l’apoptose, silencieuse sur le plan inflammatoire, qui accompagne notamment le renouvellement physiologique normal des tissus.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les récepteurs membranaires fixent des ligands hydrophiles ; les récepteurs nucléaires fixent des ligands lipophiles capables de traverser la membrane plasmique.",
    "Un récepteur couplé aux protéines G active une protéine G hétérotrimérique, qui module une enzyme effectrice comme l’adénylate cyclase ou la phospholipase C.",
    "Les principaux seconds messagers sont l’AMPc, l’IP3, le DAG et le calcium.",
    "Les récepteurs à activité tyrosine kinase se dimérisent, s’autophosphorylent et recrutent des protéines à domaine SH2.",
    "L’apoptose est une mort cellulaire programmée, sans réaction inflammatoire, exécutée par les caspases.",
    "La voie intrinsèque de l’apoptose est mitochondriale et régulée par la famille Bcl-2 ; la voie extrinsèque dépend des récepteurs de mort comme Fas.",
    "Contrairement à l’apoptose, la nécrose provoque une rupture précoce de la membrane plasmique et une réaction inflammatoire.",
  ],
  erreursFrequentes: [
    "Croire que les récepteurs nucléaires fixent des ligands hydrophiles : ce sont au contraire des ligands lipophiles, capables de traverser la membrane plasmique.",
    "Confondre les rôles des protéines Gs et Gi : la première stimule l’adénylate cyclase, la seconde l’inhibe.",
    "Attribuer l’activité kinase des récepteurs à activité tyrosine kinase à une protéine intermédiaire : l’activité catalytique est portée par le récepteur lui-même.",
    "Confondre caspases initiatrices et exécutrices : les initiatrices (comme la caspase 8 ou 9) déclenchent la cascade, les exécutrices (comme la caspase 3) réalisent les clivages effecteurs.",
    "Penser que l’apoptose provoque une réaction inflammatoire : c’est au contraire une caractéristique de la nécrose, non de l’apoptose.",
    "Inverser les protéines pro- et anti-apoptotiques de la famille Bcl-2 : Bax et Bak sont pro-apoptotiques, Bcl-2 et Bcl-xL sont anti-apoptotiques.",
  ],
  mnemotechniques: [
    {
      moyen: '« Gs Stimule, Gi Inhibe »',
      explication: 'La protéine Gs stimule l’adénylate cyclase (augmentation de l’AMPc), la protéine Gi l’inhibe (diminution de l’AMPc).',
    },
    {
      moyen: '« 8 Extrinsèque, 9 Intrinsèque » pour les caspases initiatrices',
      explication: 'La caspase 8 est activée par la voie extrinsèque (récepteurs de mort), la caspase 9 par la voie intrinsèque (mitochondriale).',
    },
    {
      moyen: '« Apoptose propre, Nécrose sale »',
      explication: 'L’apoptose élimine la cellule sans libérer son contenu ni provoquer d’inflammation, à l’inverse de la nécrose.',
    },
  ],
  sources: [
    'Alberts, Biologie moléculaire de la cellule, 6e édition',
    'Pollard, Earnshaw, Lippincott-Schwartz, Biologie cellulaire, 3e édition',
    'Lodish, Biologie moléculaire de la cellule',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'biocell-signalisation-apoptose-fc-01',
      recto: 'Quelle est la différence de localisation entre récepteurs membranaires et récepteurs nucléaires ?',
      verso: 'Les récepteurs membranaires sont à la surface cellulaire (ligands hydrophiles) ; les récepteurs nucléaires sont intracellulaires (ligands lipophiles).',
      type: 'classification',
      tags: ['récepteurs'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-02',
      recto: 'Combien de segments transmembranaires comporte un récepteur couplé aux protéines G ?',
      verso: 'Sept segments transmembranaires.',
      type: 'chiffre',
      tags: ['RCPG'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-03',
      recto: 'Quelle enzyme produit l’AMP cyclique ?',
      verso: 'L’adénylate cyclase.',
      type: 'mecanisme',
      tags: ['AMPc', 'adénylate cyclase'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-04',
      recto: 'Quels sont les deux seconds messagers produits par la phospholipase C ?',
      verso: 'L’inositol triphosphate (IP3) et le diacylglycérol (DAG).',
      type: 'formule',
      tags: ['phospholipase C'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-05',
      recto: 'Que provoque la fixation du ligand sur un récepteur à activité tyrosine kinase ?',
      verso: 'Sa dimérisation, puis son autophosphorylation croisée sur des résidus tyrosine.',
      type: 'mecanisme',
      tags: ['récepteur tyrosine kinase'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-06',
      recto: 'Que reconnaît un domaine SH2 ?',
      verso: 'Un résidu tyrosine phosphorylé, dans un contexte de séquence spécifique.',
      type: 'definition',
      tags: ['domaine SH2'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-07',
      recto: 'Quelle caspase initiatrice est activée par la voie intrinsèque de l’apoptose ?',
      verso: 'La caspase 9, après formation de l’apoptosome.',
      type: 'mecanisme',
      tags: ['caspase 9', 'voie intrinsèque'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-08',
      recto: 'Quelle caspase initiatrice est activée par la voie extrinsèque de l’apoptose ?',
      verso: 'La caspase 8, après formation du complexe DISC.',
      type: 'mecanisme',
      tags: ['caspase 8', 'voie extrinsèque'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-09',
      recto: 'Citer deux protéines pro-apoptotiques et deux protéines anti-apoptotiques de la famille Bcl-2.',
      verso: 'Pro-apoptotiques : Bax et Bak. Anti-apoptotiques : Bcl-2 et Bcl-xL.',
      type: 'classification',
      tags: ['famille Bcl-2'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-10',
      recto: 'Quelle caspase exécutrice est activée par les deux voies apoptotiques ?',
      verso: 'La caspase 3, principalement.',
      type: 'mecanisme',
      tags: ['caspase 3'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-11',
      recto: 'Quelle est la principale différence entre apoptose et nécrose concernant la membrane plasmique ?',
      verso: 'La membrane reste intacte jusqu’à la phagocytose en apoptose ; elle se rompt précocement en nécrose.',
      type: 'classification',
      tags: ['apoptose', 'nécrose'],
    },
    {
      id: 'biocell-signalisation-apoptose-fc-12',
      recto: 'La nécrose provoque-t-elle une réaction inflammatoire ?',
      verso: 'Oui, du fait de la libération du contenu cellulaire dans le milieu extracellulaire, contrairement à l’apoptose.',
      type: 'clinique',
      tags: ['nécrose', 'inflammation'],
    },
  ],
  qcm: [
    {
      id: 'biocell-signalisation-apoptose-qcm-01',
      enonce: 'Concernant les récepteurs membranaires et nucléaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les récepteurs nucléaires fixent des ligands lipophiles.', vraie: true, justification: 'C’est cette lipophilie qui leur permet de traverser la membrane plasmique pour atteindre leur récepteur intracellulaire.' },
        { lettre: 'B', texte: 'Les récepteurs membranaires fixent en général des ligands hydrophiles.', vraie: true, justification: 'Ces ligands ne pouvant traverser la bicouche lipidique, leur récepteur doit être exposé à la surface cellulaire.' },
        { lettre: 'C', texte: 'Un récepteur nucléaire activé agit directement comme un facteur de transcription.', vraie: true, justification: 'Il se lie directement à l’ADN pour moduler l’expression de gènes cibles, sans cascade de signalisation intermédiaire.' },
        { lettre: 'D', texte: 'Les hormones stéroïdes se fixent sur des récepteurs membranaires.', vraie: false, justification: 'Étant lipophiles, elles traversent la membrane et se fixent sur des récepteurs intracellulaires (cytoplasmiques ou nucléaires).' },
        { lettre: 'E', texte: 'Tous les récepteurs membranaires possèdent sept segments transmembranaires.', vraie: false, justification: 'C’est caractéristique des récepteurs couplés aux protéines G, non de tous les récepteurs membranaires (les récepteurs tyrosine kinase, par exemple, n’ont qu’un seul segment transmembranaire).' },
      ],
      correction: 'Réponses exactes : A, B et C. Bien distinguer localisation et nature du ligand selon le type de récepteur.',
      difficulte: 2,
    },
    {
      id: 'biocell-signalisation-apoptose-qcm-02',
      enonce: 'Concernant les récepteurs couplés aux protéines G, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La protéine G hétérotrimérique s’active par échange du GDP en GTP sur sa sous-unité alpha.', vraie: true, justification: 'C’est le mécanisme moléculaire d’activation de la protéine G.' },
        { lettre: 'B', texte: 'Une protéine Gi stimule l’adénylate cyclase.', vraie: false, justification: 'C’est la protéine Gs qui stimule l’adénylate cyclase ; Gi l’inhibe.' },
        { lettre: 'C', texte: 'La phospholipase C produit l’IP3 et le DAG.', vraie: true, justification: 'Ce sont les deux seconds messagers issus du clivage du phosphatidylinositol-4,5-bisphosphate par cette enzyme.' },
        { lettre: 'D', texte: 'L’IP3 libère le calcium stocké dans le réticulum endoplasmique.', vraie: true, justification: 'C’est son mode d’action caractéristique, via un récepteur-canal sur la membrane du réticulum.' },
        { lettre: 'E', texte: 'L’activité GTPase de la sous-unité alpha maintient indéfiniment la protéine G à l’état actif.', vraie: false, justification: 'Elle hydrolyse au contraire le GTP en GDP, ce qui met fin au signal.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir que Gs stimule et Gi inhibe l’adénylate cyclase.',
      difficulte: 2,
    },
    {
      id: 'biocell-signalisation-apoptose-qcm-03',
      enonce: 'Concernant les récepteurs à activité tyrosine kinase, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La fixation du ligand provoque leur dimérisation.', vraie: true, justification: 'C’est l’étape initiale de leur activation.' },
        { lettre: 'B', texte: 'Ils s’autophosphorylent sur des résidus sérine.', vraie: false, justification: 'Ils s’autophosphorylent sur des résidus tyrosine, d’où leur nom.' },
        { lettre: 'C', texte: 'Les domaines SH2 reconnaissent la phosphotyrosine.', vraie: true, justification: 'C’est la spécificité de reconnaissance de ces domaines protéiques.' },
        { lettre: 'D', texte: 'Ils peuvent activer la voie des MAPK, impliquée dans la prolifération cellulaire.', vraie: true, justification: 'C’est l’une des voies de signalisation majeures activées en aval de ces récepteurs.' },
        { lettre: 'E', texte: 'HER2 et EGFR sont des exemples de récepteurs à activité tyrosine kinase impliqués en cancérologie.', vraie: true, justification: 'Leur activation anormale est retrouvée dans certains cancers, ce qui en fait des cibles thérapeutiques.' },
      ],
      correction: 'Réponses exactes : A, C, D et E. L’autophosphorylation se fait sur tyrosine, non sur sérine.',
      difficulte: 2,
    },
    {
      id: 'biocell-signalisation-apoptose-qcm-04',
      enonce: 'Concernant l’apoptose en général, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’apoptose est une mort cellulaire accidentelle.', vraie: false, justification: 'C’est au contraire une mort cellulaire programmée, active, physiologique.' },
        { lettre: 'B', texte: 'Elle s’accompagne d’une condensation de la chromatine.', vraie: true, justification: 'C’est l’une des caractéristiques morphologiques classiques de l’apoptose.' },
        { lettre: 'C', texte: 'Les corps apoptotiques sont phagocytés sans libération du contenu cellulaire.', vraie: true, justification: 'C’est ce qui explique l’absence de réaction inflammatoire lors de l’apoptose.' },
        { lettre: 'D', texte: 'Les caspases sont des protéases à sérine.', vraie: false, justification: 'Les caspases sont des protéases à cystéine, clivant après un résidu acide aspartique.' },
        { lettre: 'E', texte: 'L’apoptose intervient dans le modelage des tissus au cours du développement embryonnaire.', vraie: true, justification: 'C’est l’un des rôles physiologiques majeurs de l’apoptose.' },
      ],
      correction: 'Réponses exactes : B, C et E. Bien retenir que les caspases sont des protéases à cystéine, non à sérine.',
      difficulte: 2,
    },
    {
      id: 'biocell-signalisation-apoptose-qcm-05',
      enonce: 'Concernant les voies intrinsèque et extrinsèque de l’apoptose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La voie intrinsèque est déclenchée par la fixation d’un ligand sur un récepteur de mort.', vraie: false, justification: 'C’est la voie extrinsèque qui est déclenchée ainsi ; la voie intrinsèque répond à un stress intracellulaire.' },
        { lettre: 'B', texte: 'La voie intrinsèque implique une libération du cytochrome c par la mitochondrie.', vraie: true, justification: 'Cette libération permet la formation de l’apoptosome et l’activation de la caspase 9.' },
        { lettre: 'C', texte: 'La voie extrinsèque fait intervenir la liaison de Fas-ligand sur son récepteur.', vraie: true, justification: 'C’est un exemple classique de récepteur de mort de la voie extrinsèque.' },
        { lettre: 'D', texte: 'Les deux voies convergent vers l’activation de caspases exécutrices comme la caspase 3.', vraie: true, justification: 'C’est la finalité commune des deux voies, aboutissant aux modifications morphologiques de l’apoptose.' },
        { lettre: 'E', texte: 'Bax et Bak sont des protéines anti-apoptotiques de la famille Bcl-2.', vraie: false, justification: 'Bax et Bak sont au contraire des protéines pro-apoptotiques de cette famille.' },
      ],
      correction: 'Réponses exactes : B, C et D. Bien retenir l’opposition entre protéines pro- et anti-apoptotiques de la famille Bcl-2.',
      difficulte: 3,
    },
    {
      id: 'biocell-signalisation-apoptose-qcm-06',
      enonce: 'Concernant la comparaison entre apoptose et nécrose, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La nécrose provoque une réaction inflammatoire.', vraie: true, justification: 'Elle résulte de la libération du contenu cellulaire dans le milieu extracellulaire.' },
        { lettre: 'B', texte: 'L’apoptose consomme de l’énergie sous forme d’ATP.', vraie: true, justification: 'C’est un processus actif, programmé, à la différence de la nécrose souvent liée à un manque d’énergie.' },
        { lettre: 'C', texte: 'La membrane plasmique se rompt précocement lors de l’apoptose.', vraie: false, justification: 'Elle reste intacte jusqu’à la phagocytose des corps apoptotiques ; c’est en nécrose qu’elle se rompt précocement.' },
        { lettre: 'D', texte: 'Un infarctus du myocarde entraîne une nécrose du tissu privé d’oxygène.', vraie: true, justification: 'C’est le mécanisme classique à l’origine de la libération de marqueurs comme la troponine.' },
        { lettre: 'E', texte: 'Les cellules voisines peuvent être lésées lors d’une nécrose.', vraie: true, justification: 'Les enzymes et médiateurs libérés par la cellule nécrotique peuvent endommager les cellules voisines.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. La membrane plasmique reste intacte en apoptose jusqu’à la phagocytose.',
      difficulte: 2,
    },
  ],
};
