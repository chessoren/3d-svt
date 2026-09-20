import type { Fiche } from '../../types';

export const ficheLipides: Fiche = {
  id: 'bioch-lipides',
  ue: 'bioch',
  titre: 'Les lipides',
  sousTitre: 'Acides gras, triglycérides, phospholipides, stéroïdes et lipoprotéines',
  chapitre: 'Biochimie structurale',
  ordre: 4,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'acide gras',
    'triglycéride',
    'phospholipide',
    'sphingolipide',
    'cholestérol',
    'éicosanoïde',
    'lipoprotéine',
    'acide gras essentiel',
  ],
  objectifs: [
    'Distinguer acides gras saturés et insaturés et leur nomenclature.',
    'Décrire la structure et le rôle des triglycérides.',
    'Comparer phospholipides et sphingolipides comme constituants membranaires.',
    'Décrire la structure du cholestérol et des stéroïdes qui en dérivent.',
    'Expliquer l’origine et le rôle des éicosanoïdes.',
    'Classer les lipoprotéines plasmatiques selon leur densité et leur fonction.',
  ],
  sections: [
    {
      id: 'acides-gras',
      titre: 'Les acides gras',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un acide gras est une chaîne hydrocarbonée aliphatique, le plus souvent à nombre pair de carbones, portant une fonction acide carboxylique à une extrémité. Ils sont rarement libres dans l’organisme et se trouvent le plus souvent estérifiés, notamment dans les triglycérides et les phospholipides.",
        },
        {
          type: 'tableau',
          titre: 'Acides gras saturés et insaturés',
          colonnes: ['Type', 'Définition', 'Exemples', 'Conséquence physique'],
          lignes: [
            ['Saturé', 'Aucune double liaison dans la chaîne carbonée', 'Acide palmitique (C16:0), acide stéarique (C18:0)', 'Chaîne linéaire, favorise un point de fusion élevé (solide à température ambiante)'],
            ['Insaturé', 'Une (monoinsaturé) ou plusieurs (polyinsaturé) doubles liaisons', 'Acide oléique (C18:1), acide linoléique (C18:2)', 'Coude au niveau des doubles liaisons de configuration cis, point de fusion abaissé'],
          ],
        },
        {
          type: 'definition',
          terme: 'Acide gras essentiel',
          definition:
            "Acide gras polyinsaturé que l’organisme humain ne peut pas synthétiser, faute de désaturases capables d’introduire une double liaison au-delà du carbone 9 : il doit être apporté par l’alimentation. L’acide linoléique (oméga-6) et l’acide alpha-linolénique (oméga-3) en sont les deux représentants majeurs.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Nomenclature oméga',
          texte:
            "La nomenclature oméga (ou n moins x) numérote la position de la première double liaison en partant du carbone méthyl terminal, opposé à la fonction acide. L’acide linoléique, C18:2 oméga-6, présente sa première double liaison sur le sixième carbone à partir de cette extrémité.",
        },
        {
          type: 'liste',
          items: [
            'La configuration cis des doubles liaisons naturelles introduit un coude dans la chaîne, augmentant la fluidité membranaire.',
            'Les acides gras trans, présents dans certains produits industriels hydrogénés, adoptent une conformation proche de celle des acides gras saturés et sont associés à un risque cardiovasculaire accru.',
          ],
        },
      ],
    },
    {
      id: 'triglycerides',
      titre: 'Les triglycérides',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les triglycérides (ou triacylglycérols) résultent de l’estérification des trois fonctions alcool du glycérol par trois acides gras, le plus souvent différents. Ce sont les lipides de réserve énergétique majeurs de l’organisme, stockés dans le tissu adipeux.",
        },
        {
          type: 'formule',
          expression: 'Glycérol + 3 acides gras → triglycéride + 3 H2O',
          legende: 'Réaction de triestérification formant un triglycéride, catalysée in vivo par des enzymes spécifiques.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Un réservoir énergétique dense',
          texte:
            "L’oxydation complète des lipides libère environ 9 kcal par gramme, contre environ 4 kcal par gramme pour les glucides et les protéines. Cette densité énergétique élevée, associée à l’absence d’hydratation des gouttelettes lipidiques (contrairement au glycogène), explique le choix du tissu adipeux comme réserve énergétique de long terme.",
        },
        {
          type: 'liste',
          items: [
            'La lipolyse, catalysée notamment par la lipase hormonosensible, libère glycérol et acides gras à partir des triglycérides stockés.',
            'Les triglycérides alimentaires sont hydrolysés dans l’intestin par la lipase pancréatique, en présence des sels biliaires qui les émulsifient.',
          ],
        },
      ],
    },
    {
      id: 'phospholipides-sphingolipides',
      titre: 'Phospholipides et sphingolipides',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Phospholipides et sphingolipides sont les principaux lipides amphipathiques des membranes biologiques : ils comportent une tête polaire hydrophile et une ou deux queues hydrophobes, ce qui leur permet de s’organiser spontanément en bicouche dans un milieu aqueux.",
        },
        {
          type: 'comparaison',
          titre: 'Glycérophospholipides et sphingolipides',
          gauche: {
            titre: 'Glycérophospholipides',
            points: [
              'Squelette de glycérol estérifié par deux acides gras et un groupement phosphate',
              'Le phosphate porte une tête polaire variable : choline, éthanolamine, sérine, inositol',
              'Exemple : la phosphatidylcholine (lécithine), phospholipide majoritaire des membranes',
            ],
          },
          droite: {
            titre: 'Sphingolipides',
            points: [
              'Squelette de sphingosine, un amino-alcool à longue chaîne, et non de glycérol',
              'Un acide gras lié par une liaison amide forme le céramide, unité structurale commune',
              'La sphingomyéline porte une tête phosphocholine ; les glycosphingolipides portent un ou plusieurs oses',
            ],
          },
        },
        {
          type: 'definition',
          terme: 'Céramide',
          definition:
            "Molécule formée par la liaison amide entre la sphingosine et un acide gras ; unité structurale de base commune à tous les sphingolipides, dont la sphingomyéline et les glycosphingolipides.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Sphingolipidoses',
          texte:
            "Les sphingolipidoses sont des maladies héréditaires de surcharge lysosomale par déficit d’une enzyme de dégradation des sphingolipides. La maladie de Tay-Sachs (déficit en hexosaminidase A, accumulation de gangliosides GM2) et la maladie de Gaucher (déficit en glucocérébrosidase) en sont des exemples classiques.",
        },
      ],
    },
    {
      id: 'cholesterol-steroides',
      titre: 'Cholestérol et stéroïdes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cholestérol est un lipide de la famille des stérols, caractérisé par un noyau stérane rigide à quatre cycles fusionnés, une fonction hydroxyle en position 3 et une chaîne latérale hydrocarbonée. C’est le précurseur commun de l’ensemble des hormones stéroïdes et des acides biliaires.",
        },
        {
          type: 'liste',
          items: [
            'Le cholestérol est un constituant essentiel des membranes plasmiques, dont il module la fluidité selon la température.',
            'Il est synthétisé essentiellement par le foie, l’enzyme limitante de sa biosynthèse étant l’HMG-CoA réductase, cible des statines.',
            'Les acides biliaires, dérivés du cholestérol, facilitent l’émulsification et l’absorption intestinale des lipides alimentaires.',
          ],
        },
        {
          type: 'tableau',
          titre: 'Principales familles d’hormones stéroïdes dérivées du cholestérol',
          colonnes: ['Famille', 'Exemple', 'Glande d’origine principale'],
          lignes: [
            ['Glucocorticoïdes', 'Cortisol', 'Corticosurrénale (zone fasciculée)'],
            ['Minéralocorticoïdes', 'Aldostérone', 'Corticosurrénale (zone glomérulée)'],
            ['Androgènes', 'Testostérone', 'Testicule, corticosurrénale'],
            ['Œstrogènes et progestatifs', 'Œstradiol, progestérone', 'Ovaire, placenta'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le cholestérol n’est pas un triglycéride',
          texte:
            "Le cholestérol appartient à la famille des stéroïdes, structurellement très différente de celle des triglycérides ou des phospholipides : il ne comporte ni glycérol ni acide gras estérifié dans sa forme libre.",
        },
      ],
    },
    {
      id: 'eicosanoides',
      titre: 'Les éicosanoïdes',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les éicosanoïdes sont des médiateurs lipidiques dérivés d’acides gras polyinsaturés à vingt atomes de carbone, principalement l’acide arachidonique (C20:4, oméga-6), libéré des phospholipides membranaires sous l’action de la phospholipase A2.",
        },
        {
          type: 'tableau',
          titre: 'Voies de synthèse des éicosanoïdes',
          colonnes: ['Voie enzymatique', 'Produits', 'Effets principaux'],
          lignes: [
            ['Cyclo-oxygénase (COX)', 'Prostaglandines, thromboxanes', 'Inflammation, douleur, fièvre, agrégation plaquettaire (thromboxane A2)'],
            ['Lipo-oxygénase', 'Leucotriènes', 'Bronchoconstriction, chimiotactisme des polynucléaires'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Mécanisme d’action des anti-inflammatoires non stéroïdiens',
          texte:
            "L’aspirine et les autres anti-inflammatoires non stéroïdiens inhibent la cyclo-oxygénase, réduisant la synthèse des prostaglandines et des thromboxanes : c’est le fondement de leurs effets antalgique, antipyrétique, anti-inflammatoire et antiagrégant plaquettaire.",
        },
      ],
    },
    {
      id: 'lipoproteines',
      titre: 'Les lipoprotéines plasmatiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les lipides étant peu solubles dans le plasma aqueux, leur transport sanguin nécessite leur association à des protéines spécifiques, les apolipoprotéines, formant des particules sphériques appelées lipoprotéines. Celles-ci sont classées selon leur densité, elle-même liée à leur proportion relative de lipides et de protéines.",
        },
        {
          type: 'tableau',
          titre: 'Classes de lipoprotéines',
          colonnes: ['Lipoprotéine', 'Densité', 'Rôle principal'],
          lignes: [
            ['Chylomicrons', 'Très faible densité', 'Transport des triglycérides alimentaires depuis l’intestin vers les tissus périphériques'],
            ['VLDL (Very Low Density Lipoprotein)', 'Très basse densité', 'Transport des triglycérides synthétisés par le foie'],
            ['LDL (Low Density Lipoprotein)', 'Basse densité', 'Transport du cholestérol du foie vers les tissus périphériques'],
            ['HDL (High Density Lipoprotein)', 'Haute densité', 'Transport retour du cholestérol des tissus périphériques vers le foie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: '« Bon » et « mauvais » cholestérol',
          texte:
            "Le cholestérol porté par les LDL est couramment qualifié de « mauvais cholestérol », car son excès favorise le dépôt de plaques d’athérome dans la paroi artérielle. Le cholestérol porté par les HDL, qui participe au transport retour vers le foie, est au contraire qualifié de « bon cholestérol ». Ces qualificatifs désignent le transporteur, et non une différence chimique du cholestérol lui-même, identique dans les deux cas.",
        },
      ],
    },
  ],
  pointsCles: [
    'Un acide gras est saturé en l’absence de double liaison, insaturé en présence d’une ou plusieurs doubles liaisons de configuration cis.',
    'L’acide linoléique (oméga-6) et l’acide alpha-linolénique (oméga-3) sont les deux acides gras essentiels.',
    'Les triglycérides, réserve énergétique majeure, résultent de l’estérification du glycérol par trois acides gras.',
    'Les glycérophospholipides dérivent du glycérol, les sphingolipides de la sphingosine ; tous deux sont amphipathiques et membranaires.',
    'Le cholestérol est le précurseur de toutes les hormones stéroïdes et des acides biliaires.',
    'Les éicosanoïdes (prostaglandines, thromboxanes, leucotriènes) dérivent de l’acide arachidonique via les voies cyclo-oxygénase et lipo-oxygénase.',
    'Les lipoprotéines transportent les lipides dans le plasma ; les LDL transportent le cholestérol vers les tissus, les HDL le ramènent vers le foie.',
  ],
  erreursFrequentes: [
    'Confondre la nomenclature oméga (numérotée depuis l’extrémité méthyl) et la nomenclature delta (numérotée depuis la fonction acide).',
    'Considérer le cholestérol comme un triglycéride ou comme un phospholipide : il appartient à la famille distincte des stérols.',
    'Oublier que le saccharose (glucide) et non un lipide : rester attentif à ne pas mélanger les grandes familles biochimiques dans une révision groupée.',
    'Attribuer aux HDL et aux LDL une différence de nature chimique du cholestérol transporté, alors que seule la particule transporteuse diffère.',
    'Croire que tous les acides gras insaturés sont essentiels : seuls ceux dont la première double liaison est au-delà du carbone 9 (oméga-6 et oméga-3) le sont.',
  ],
  mnemotechniques: [
    {
      moyen: '« PALME et STEAR sont saturés »',
      explication:
        'Acide PALMitique (C16:0) et acide STEARique (C18:0) sont les deux acides gras saturés les plus courants chez l’Homme.',
    },
    {
      moyen: 'COX comme « Cause de l’Oxydation… et de l’aspirin’ »',
      explication:
        'La cyclo-oxygénase (COX) produit prostaglandines et thromboxanes ; c’est la cible pharmacologique de l’aspirine et des anti-inflammatoires non stéroïdiens.',
    },
    {
      moyen: '« LDL Livre, HDL Hâle vers le foie »',
      explication:
        'Les LDL Livrent le cholestérol aux tissus périphériques ; les HDL le ramènent (transport retour) vers le foie.',
    },
  ],
  sources: [
    'Lehninger, Principes de biochimie, 8e édition',
    'Harper, Biochimie médicale, 32e édition',
    'Berg, Tymoczko, Gatto, Stryer, Biochimie, 9e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'bioch-lipides-fc-01',
      recto: 'Quelle est la différence entre un acide gras saturé et un acide gras insaturé ?',
      verso: 'L’acide gras saturé ne possède aucune double liaison ; l’insaturé en possède une ou plusieurs.',
      type: 'definition',
      tags: ['acides gras'],
    },
    {
      id: 'bioch-lipides-fc-02',
      recto: 'Citer les deux acides gras essentiels.',
      verso: 'L’acide linoléique (oméga-6) et l’acide alpha-linolénique (oméga-3).',
      type: 'classification',
      tags: ['acides gras essentiels'],
    },
    {
      id: 'bioch-lipides-fc-03',
      recto: 'Comment se forme un triglycéride ?',
      verso: 'Par estérification des trois fonctions alcool du glycérol par trois acides gras.',
      type: 'mecanisme',
      tags: ['triglycérides'],
    },
    {
      id: 'bioch-lipides-fc-04',
      recto: 'Quel est le squelette structural des glycérophospholipides et celui des sphingolipides ?',
      verso: 'Le glycérol pour les glycérophospholipides, la sphingosine pour les sphingolipides.',
      type: 'classification',
      tags: ['phospholipides', 'sphingolipides'],
    },
    {
      id: 'bioch-lipides-fc-05',
      recto: 'Qu’est-ce qu’un céramide ?',
      verso: 'La molécule formée par liaison amide entre la sphingosine et un acide gras, unité de base de tous les sphingolipides.',
      type: 'definition',
      tags: ['sphingolipides'],
    },
    {
      id: 'bioch-lipides-fc-06',
      recto: 'Quelle enzyme limite la vitesse de synthèse du cholestérol, cible des statines ?',
      verso: 'L’HMG-CoA réductase.',
      type: 'mecanisme',
      tags: ['cholestérol', 'statines'],
    },
    {
      id: 'bioch-lipides-fc-07',
      recto: 'Quelles hormones dérivent toutes du cholestérol ?',
      verso: 'Les hormones stéroïdes : glucocorticoïdes, minéralocorticoïdes, androgènes, œstrogènes et progestatifs.',
      type: 'classification',
      tags: ['stéroïdes'],
    },
    {
      id: 'bioch-lipides-fc-08',
      recto: 'Quel acide gras polyinsaturé est le précurseur direct des éicosanoïdes ?',
      verso: 'L’acide arachidonique (C20:4, oméga-6).',
      type: 'definition',
      tags: ['éicosanoïdes'],
    },
    {
      id: 'bioch-lipides-fc-09',
      recto: 'Quelle enzyme est inhibée par l’aspirine dans la voie des éicosanoïdes ?',
      verso: 'La cyclo-oxygénase (COX), réduisant la synthèse des prostaglandines et des thromboxanes.',
      type: 'mecanisme',
      tags: ['éicosanoïdes', 'aspirine'],
    },
    {
      id: 'bioch-lipides-fc-10',
      recto: 'Quelle lipoprotéine transporte les triglycérides alimentaires depuis l’intestin ?',
      verso: 'Les chylomicrons.',
      type: 'classification',
      tags: ['lipoprotéines'],
    },
    {
      id: 'bioch-lipides-fc-11',
      recto: 'Quelle lipoprotéine assure le transport retour du cholestérol vers le foie ?',
      verso: 'Les HDL (High Density Lipoprotein).',
      type: 'classification',
      tags: ['lipoprotéines', 'HDL'],
    },
    {
      id: 'bioch-lipides-fc-12',
      recto: 'Quelle enzyme lysosomale est déficitaire dans la maladie de Gaucher ?',
      verso: 'La glucocérébrosidase.',
      type: 'clinique',
      tags: ['sphingolipidoses'],
    },
  ],
  qcm: [
    {
      id: 'bioch-lipides-qcm-01',
      enonce: 'Concernant les acides gras, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’acide palmitique est un acide gras saturé.', vraie: true, justification: 'Il ne comporte aucune double liaison (C16:0).' },
        { lettre: 'B', texte: 'La configuration naturelle des doubles liaisons est trans.', vraie: false, justification: 'La configuration naturelle des doubles liaisons des acides gras est cis.' },
        { lettre: 'C', texte: 'L’acide linoléique est un acide gras essentiel.', vraie: true, justification: 'L’organisme humain ne peut pas le synthétiser, faute de désaturase adéquate.' },
        { lettre: 'D', texte: 'La nomenclature oméga numérote depuis la fonction acide carboxylique.', vraie: false, justification: 'Elle numérote depuis l’extrémité méthyl, opposée à la fonction acide.' },
        { lettre: 'E', texte: 'Les doubles liaisons cis introduisent un coude dans la chaîne carbonée.', vraie: true, justification: 'Ce coude augmente la fluidité membranaire et abaisse le point de fusion.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-lipides-qcm-02',
      enonce: 'Concernant les triglycérides, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ils résultent de l’estérification du glycérol par trois acides gras.', vraie: true, justification: 'C’est la définition d’un triacylglycérol.' },
        { lettre: 'B', texte: 'Ils libèrent environ 4 kcal par gramme lors de leur oxydation complète.', vraie: false, justification: 'Ils libèrent environ 9 kcal par gramme, contre 4 kcal par gramme pour les glucides.' },
        { lettre: 'C', texte: 'La lipase hormonosensible participe à leur mobilisation.', vraie: true, justification: 'Elle catalyse la lipolyse des triglycérides stockés dans le tissu adipeux.' },
        { lettre: 'D', texte: 'Leur digestion intestinale nécessite les sels biliaires.', vraie: true, justification: 'Les sels biliaires émulsifient les lipides alimentaires, facilitant l’action de la lipase pancréatique.' },
        { lettre: 'E', texte: 'Ils constituent la principale réserve énergétique de long terme de l’organisme.', vraie: true, justification: 'Leur forte densité énergétique et leur stockage anhydre en font la réserve de choix.' },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-lipides-qcm-03',
      enonce: 'Concernant les phospholipides et sphingolipides, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La phosphatidylcholine est un glycérophospholipide.', vraie: true, justification: 'Elle est formée d’un glycérol, de deux acides gras, d’un phosphate et d’une choline.' },
        { lettre: 'B', texte: 'Le céramide est formé par liaison ester entre sphingosine et acide gras.', vraie: false, justification: 'La liaison entre la sphingosine et l’acide gras est une liaison amide, non ester.' },
        { lettre: 'C', texte: 'La sphingomyéline porte une tête phosphocholine.', vraie: true, justification: 'C’est la particularité de ce sphingolipide, abondant dans les gaines de myéline.' },
        { lettre: 'D', texte: 'Les glycosphingolipides ne comportent jamais d’ose.', vraie: false, justification: 'Au contraire, ils portent par définition un ou plusieurs résidus d’oses.' },
        { lettre: 'E', texte: 'Ces lipides sont amphipathiques.', vraie: true, justification: 'Ils comportent une tête polaire hydrophile et des queues hydrophobes.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-lipides-qcm-04',
      enonce: 'Concernant le cholestérol et les stéroïdes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le cholestérol comporte un noyau stérane à quatre cycles.', vraie: true, justification: 'C’est la structure de base commune à tous les stérols.' },
        { lettre: 'B', texte: 'Le cortisol dérive du cholestérol.', vraie: true, justification: 'Toutes les hormones stéroïdes dérivent du cholestérol.' },
        { lettre: 'C', texte: 'L’HMG-CoA réductase est la cible pharmacologique des statines.', vraie: true, justification: 'Les statines inhibent cette enzyme limitante de la biosynthèse du cholestérol.' },
        { lettre: 'D', texte: 'Les acides biliaires ne dérivent pas du cholestérol.', vraie: false, justification: 'Les acides biliaires sont au contraire des dérivés directs du cholestérol.' },
        { lettre: 'E', texte: 'Le cholestérol est dépourvu de toute fonction membranaire.', vraie: false, justification: 'Il est au contraire un constituant essentiel des membranes, dont il module la fluidité.' },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 2,
    },
    {
      id: 'bioch-lipides-qcm-05',
      enonce: 'Concernant les éicosanoïdes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ils dérivent principalement de l’acide arachidonique.', vraie: true, justification: 'C’est le principal précurseur des éicosanoïdes chez l’Homme.' },
        { lettre: 'B', texte: 'La phospholipase A2 libère l’acide arachidonique des phospholipides membranaires.', vraie: true, justification: 'C’est l’étape initiale de la cascade des éicosanoïdes.' },
        { lettre: 'C', texte: 'La voie de la cyclo-oxygénase produit les leucotriènes.', vraie: false, justification: 'Les leucotriènes proviennent de la voie de la lipo-oxygénase ; la cyclo-oxygénase produit prostaglandines et thromboxanes.' },
        { lettre: 'D', texte: 'Le thromboxane A2 favorise l’agrégation plaquettaire.', vraie: true, justification: 'C’est l’un de ses effets biologiques majeurs, à l’origine de son intérêt en hémostase.' },
        { lettre: 'E', texte: 'Les anti-inflammatoires non stéroïdiens inhibent la lipo-oxygénase.', vraie: false, justification: 'Ils inhibent la cyclo-oxygénase, et non la lipo-oxygénase.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-lipides-qcm-06',
      enonce: 'Concernant les lipoprotéines plasmatiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les chylomicrons transportent les triglycérides d’origine alimentaire.', vraie: true, justification: 'Ils assurent le transport intestinal des lipides absorbés après un repas.' },
        { lettre: 'B', texte: 'Les LDL transportent principalement le cholestérol vers les tissus périphériques.', vraie: true, justification: 'C’est leur fonction principale, à l’origine de leur rôle athérogène en excès.' },
        { lettre: 'C', texte: 'Les HDL sont qualifiées de « mauvais cholestérol ».', vraie: false, justification: 'Ce sont les LDL qui sont qualifiées ainsi ; les HDL sont le « bon cholestérol ».' },
        { lettre: 'D', texte: 'La densité d’une lipoprotéine augmente avec sa proportion de protéines.', vraie: true, justification: 'Les protéines étant plus denses que les lipides, une proportion protéique élevée augmente la densité globale.' },
        { lettre: 'E', texte: 'Le cholestérol transporté par les LDL est chimiquement différent de celui transporté par les HDL.', vraie: false, justification: 'Le cholestérol est chimiquement identique ; seule la particule transporteuse diffère.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
