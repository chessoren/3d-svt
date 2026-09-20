import type { Fiche } from '../../types';

export const ficheCmhPresentation: Fiche = {
  id: 'ue5-cmh-presentation',
  ue: 'ue5',
  titre: 'Complexe majeur d’histocompatibilité et présentation antigénique',
  sousTitre:
    'Molécules HLA de classe I et II, apprêtement cytosolique et endosomal, restriction, polymorphisme et transplantation',
  chapitre: 'Immunité adaptative',
  ordre: 5,
  duree: 27,
  difficulte: 3,
  motsCles: [
    'CMH',
    'HLA',
    'classe I',
    'classe II',
    'apprêtement antigénique',
    'protéasome',
    'peptide',
    'restriction',
    'polymorphisme',
    'transplantation',
  ],
  objectifs: [
    'Décrire la structure générale des molécules HLA de classe I et de classe II.',
    'Localiser les gènes du complexe majeur d’histocompatibilité sur le génome humain.',
    'Expliquer la voie d’apprêtement cytosolique associée à la présentation par le CMH de classe I.',
    'Expliquer la voie d’apprêtement endosomal associée à la présentation par le CMH de classe II.',
    'Définir la notion de restriction par le CMH.',
    'Expliquer l’importance du polymorphisme HLA en transplantation d’organe.',
  ],
  sections: [
    {
      id: 'structure-generale',
      titre: 'Organisation générale du CMH',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le complexe majeur d’histocompatibilité (CMH) est une région génomique située sur le bras court du chromosome 6 chez l’être humain, où il porte le nom de système HLA (Human Leukocyte Antigen). Il code des glycoprotéines membranaires dont la fonction est de présenter des peptides antigéniques aux lymphocytes T.",
        },
        {
          type: 'tableau',
          titre: 'Gènes HLA de classe I et de classe II',
          colonnes: ['Classe', 'Loci principaux', 'Expression cellulaire'],
          lignes: [
            ['Classe I', 'HLA-A, HLA-B, HLA-C', 'Toutes les cellules nucléées de l’organisme'],
            [
              'Classe II',
              'HLA-DP, HLA-DQ, HLA-DR',
              'Cellules présentatrices d’antigène professionnelles (cellules dendritiques, macrophages, lymphocytes B)',
            ],
          ],
        },
        {
          type: 'liste',
          items: [
            "Une molécule HLA de classe I est constituée d’une chaîne lourde polymorphe alpha à trois domaines, associée de façon non covalente à la bêta-2-microglobuline, chaîne légère invariante codée hors du CMH, sur le chromosome 15.",
            "Une molécule HLA de classe II est constituée de deux chaînes polymorphes, alpha et bêta, chacune ancrée dans la membrane.",
            "Le sillon de fixation du peptide est formé par les domaines alpha1 et alpha2 pour la classe I, et par les domaines alpha1 et bêta1 pour la classe II.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Sillon fermé versus sillon ouvert',
          texte:
            "Le sillon du CMH de classe I est fermé à ses deux extrémités, ce qui limite la taille des peptides présentés à environ huit à dix résidus. Le sillon du CMH de classe II est ouvert aux deux extrémités, permettant la fixation de peptides plus longs, d’environ treize à vingt-cinq résidus, voire davantage.",
        },
      ],
    },
    {
      id: 'voie-classe-i',
      titre: 'Voie d’apprêtement cytosolique et CMH de classe I',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La voie cytosolique (ou endogène) permet de présenter des peptides issus de protéines synthétisées dans le cytoplasme de la cellule elle-même, qu’il s’agisse de protéines du soi ou de protéines virales lors d’une infection.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de l’apprêtement cytosolique',
          etapes: [
            {
              titre: 'Dégradation protéasomale',
              detail:
                "Les protéines cytosoliques, marquées par l’ubiquitine, sont dégradées par le protéasome (ou l’immunoprotéasome lors de l’inflammation) en courts peptides.",
            },
            {
              titre: 'Transport vers le réticulum endoplasmique',
              detail:
                "Les peptides sont acheminés du cytosol vers la lumière du réticulum endoplasmique par le transporteur TAP (Transporter associated with Antigen Processing).",
            },
            {
              titre: 'Chargement sur la molécule HLA de classe I',
              detail:
                "Dans le réticulum endoplasmique, le peptide se fixe dans le sillon de la molécule HLA de classe I nouvellement assemblée avec la bêta-2-microglobuline, stabilisant le complexe.",
            },
            {
              titre: 'Expression membranaire',
              detail:
                "Le complexe HLA de classe I-peptide est transporté via l’appareil de Golgi jusqu’à la membrane plasmique, où il est présenté au lymphocyte T CD8.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Toutes les cellules nucléées présentent',
          texte:
            "L’expression du CMH de classe I étant quasi ubiquitaire sur les cellules nucléées, tout type cellulaire peut signaler une infection virale ou une transformation tumorale aux lymphocytes T CD8, ce qui rend cette voie essentielle à la surveillance immunitaire généralisée de l’organisme.",
        },
      ],
    },
    {
      id: 'voie-classe-ii',
      titre: 'Voie d’apprêtement endosomal et CMH de classe II',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La voie endosomale (ou exogène) permet de présenter des peptides issus de protéines extracellulaires internalisées par endocytose ou phagocytose, exclusivement par les cellules présentatrices d’antigène professionnelles.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de l’apprêtement endosomal',
          etapes: [
            {
              titre: 'Endocytose de l’antigène',
              detail:
                "L’antigène extracellulaire est internalisé par phagocytose, macropinocytose ou endocytose médiée par récepteur, et dégradé progressivement dans des compartiments endosomaux de plus en plus acides.",
            },
            {
              titre: 'Assemblage du CMH de classe II et chaîne invariante',
              detail:
                "La molécule HLA de classe II est assemblée dans le réticulum endoplasmique en association avec la chaîne invariante (Ii), qui occupe le sillon peptidique et empêche la fixation prématurée de peptides endogènes.",
            },
            {
              titre: 'Dégradation de la chaîne invariante',
              detail:
                "Dans le compartiment endosomal (MIIC), la chaîne invariante est dégradée, laissant un court fragment appelé CLIP dans le sillon.",
            },
            {
              titre: 'Échange peptidique et expression membranaire',
              detail:
                "La molécule HLA-DM catalyse l’échange du CLIP contre le peptide antigénique issu de la dégradation de l’antigène exogène ; le complexe est alors exprimé à la membrane, présenté au lymphocyte T CD4.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre chaîne invariante et CLIP',
          texte:
            "La chaîne invariante (Ii) protège initialement le sillon du CMH de classe II contre toute fixation peptidique prématurée dans le réticulum endoplasmique. Sa dégradation endosomale laisse un fragment résiduel, le CLIP, qui doit être activement remplacé par HLA-DM avant que la molécule ne soit fonctionnelle à la membrane.",
        },
      ],
    },
    {
      id: 'restriction-polymorphisme',
      titre: 'Restriction par le CMH et polymorphisme',
      blocs: [
        {
          type: 'definition',
          terme: 'Restriction par le CMH',
          definition:
            "Propriété du récepteur T de ne reconnaître un peptide antigénique que présenté par une molécule du CMH, et non sous forme libre en solution. Le lymphocyte T CD8 est restreint aux molécules de classe I, le lymphocyte T CD4 aux molécules de classe II.",
        },
        {
          type: 'comparaison',
          titre: 'CMH de classe I versus CMH de classe II',
          gauche: {
            titre: 'CMH de classe I',
            points: [
              'Expression sur toutes les cellules nucléées',
              'Voie d’apprêtement cytosolique (protéasome, TAP)',
              'Présente aux lymphocytes T CD8',
              'Sillon fermé, peptides courts (8 à 10 résidus)',
            ],
          },
          droite: {
            titre: 'CMH de classe II',
            points: [
              'Expression restreinte aux cellules présentatrices professionnelles',
              'Voie d’apprêtement endosomal (chaîne invariante, HLA-DM)',
              'Présente aux lymphocytes T CD4',
              'Sillon ouvert, peptides plus longs (13 à 25 résidus)',
            ],
          },
        },
        {
          type: 'paragraphe',
          texte:
            "Le système HLA est extrêmement polymorphe : chaque locus HLA possède un très grand nombre d’allèles différents dans la population humaine, ce qui confère à chaque individu une combinaison quasiment unique de molécules HLA, transmise selon un mode codominant, les deux allèles parentaux étant exprimés simultanément.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Intérêt évolutif du polymorphisme HLA',
          texte:
            "Le très fort polymorphisme HLA diversifie le répertoire de peptides présentables à l’échelle de la population, limitant la capacité d’un pathogène à échapper simultanément à la reconnaissance immunitaire de tous les individus d’une espèce.",
        },
      ],
    },
    {
      id: 'transplantation',
      titre: 'Applications cliniques : la transplantation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le polymorphisme HLA est la principale cause de rejet en transplantation d’organe solide et de greffe de moelle osseuse : les molécules HLA du donneur, différentes de celles du receveur, sont reconnues comme du non-soi par les lymphocytes T du receveur.",
        },
        {
          type: 'liste',
          items: [
            "La reconnaissance directe correspond à la reconnaissance par les lymphocytes T du receveur des molécules HLA du donneur elles-mêmes, présentées à la surface des cellules présentatrices d’antigène du greffon.",
            "La reconnaissance indirecte correspond à la présentation, par les cellules présentatrices d’antigène du receveur, de peptides dérivés des molécules HLA du donneur, apprêtés selon la voie classique du soi.",
            "La compatibilité HLA entre donneur et receveur (typage HLA) diminue le risque de rejet et, en allogreffe de moelle osseuse, le risque de réaction du greffon contre l’hôte.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Immunosuppression et transplantation',
          texte:
            "Malgré un typage HLA aussi compatible que possible, un traitement immunosuppresseur au long cours reste nécessaire après transplantation d’organe solide, pour prévenir le rejet lié aux disparités HLA mineures résiduelles et aux antigènes mineurs d’histocompatibilité.",
        },
      ],
    },
  ],
  pointsCles: [
    'Le CMH humain, ou système HLA, est situé sur le chromosome 6 et code les molécules de classe I (HLA-A, B, C) et de classe II (HLA-DP, DQ, DR).',
    'Le CMH de classe I est exprimé sur toutes les cellules nucléées ; le CMH de classe II est restreint aux cellules présentatrices d’antigène professionnelles.',
    'La voie cytosolique (protéasome, TAP) charge le CMH de classe I ; la voie endosomale (chaîne invariante, HLA-DM) charge le CMH de classe II.',
    'Le lymphocyte T CD8 est restreint au CMH de classe I, le lymphocyte T CD4 au CMH de classe II.',
    'Le sillon du CMH de classe I est fermé (peptides courts) ; celui du CMH de classe II est ouvert (peptides plus longs).',
    'Le très fort polymorphisme HLA explique la difficulté de trouver un donneur compatible en transplantation.',
    'La reconnaissance allogénique peut être directe (molécule HLA du donneur reconnue telle quelle) ou indirecte (peptide dérivé du HLA du donneur présenté par le soi).',
  ],
  erreursFrequentes: [
    'Inverser les restrictions : le CD8 est restreint à la classe I, le CD4 à la classe II, jamais l’inverse.',
    'Croire que le CMH de classe II est exprimé sur toutes les cellules nucléées comme la classe I.',
    'Confondre la voie cytosolique (protéines endogènes, TAP, protéasome) et la voie endosomale (protéines exogènes, chaîne invariante).',
    'Oublier le rôle de la bêta-2-microglobuline, chaîne invariante associée à la chaîne lourde du CMH de classe I.',
    'Penser que le récepteur T peut reconnaître un antigène libre en solution : il nécessite toujours une présentation par le CMH (restriction).',
    'Confondre chaîne invariante (bloque le sillon avant la maturation) et CLIP (fragment résiduel remplacé par HLA-DM).',
  ],
  mnemotechniques: [
    {
      moyen: '« 8 fois 1 = 8 » : CD8 reconnaît la classe I',
      explication:
        'Le produit du chiffre du CD (8) par le chiffre de la classe (I = 1) donne 8, rappelant que CD8 est restreint au CMH de classe I.',
    },
    {
      moyen: '« 2 fois 2 = 4 » : CD4 reconnaît la classe II',
      explication:
        'Le produit du chiffre du CD (4, ou 2 fois 2) rappelle que CD4 est restreint au CMH de classe II.',
    },
    {
      moyen: 'TAP transporte, protéasome découpe',
      explication:
        'Dans la voie cytosolique, le protéasome découpe la protéine en peptides, puis TAP les transporte vers le réticulum endoplasmique, dans cet ordre.',
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
      id: 'ue5-cmh-presentation-fc-01',
      recto: 'Sur quel chromosome humain est situé le complexe majeur d’histocompatibilité ?',
      verso: 'Le chromosome 6 (bras court).',
      type: 'chiffre',
      tags: ['CMH', 'génétique'],
    },
    {
      id: 'ue5-cmh-presentation-fc-02',
      recto: 'Citer les trois loci HLA de classe I.',
      verso: 'HLA-A, HLA-B et HLA-C.',
      type: 'classification',
      tags: ['HLA', 'classe I'],
    },
    {
      id: 'ue5-cmh-presentation-fc-03',
      recto: 'Quelle chaîne invariante s’associe à la chaîne lourde du CMH de classe I ?',
      verso: 'La bêta-2-microglobuline, codée hors du CMH sur le chromosome 15.',
      type: 'definition',
      tags: ['classe I'],
    },
    {
      id: 'ue5-cmh-presentation-fc-04',
      recto: 'Quelles cellules expriment le CMH de classe II ?',
      verso: 'Les cellules présentatrices d’antigène professionnelles : cellules dendritiques, macrophages, lymphocytes B.',
      type: 'classification',
      tags: ['classe II'],
    },
    {
      id: 'ue5-cmh-presentation-fc-05',
      recto: 'Quel complexe protéique dégrade les protéines cytosoliques dans la voie d’apprêtement de classe I ?',
      verso: 'Le protéasome (ou immunoprotéasome).',
      type: 'mecanisme',
      tags: ['voie cytosolique'],
    },
    {
      id: 'ue5-cmh-presentation-fc-06',
      recto: 'Quel transporteur achemine les peptides du cytosol vers le réticulum endoplasmique ?',
      verso: 'Le transporteur TAP.',
      type: 'mecanisme',
      tags: ['voie cytosolique'],
    },
    {
      id: 'ue5-cmh-presentation-fc-07',
      recto: 'Quel rôle joue la chaîne invariante avant la maturation endosomale du CMH de classe II ?',
      verso: 'Elle occupe le sillon peptidique et empêche la fixation prématurée de peptides endogènes dans le réticulum endoplasmique.',
      type: 'mecanisme',
      tags: ['voie endosomale'],
    },
    {
      id: 'ue5-cmh-presentation-fc-08',
      recto: 'Quelle molécule catalyse l’échange du CLIP contre le peptide antigénique ?',
      verso: 'HLA-DM.',
      type: 'mecanisme',
      tags: ['voie endosomale'],
    },
    {
      id: 'ue5-cmh-presentation-fc-09',
      recto: 'À quelle classe de CMH le lymphocyte T CD8 est-il restreint ?',
      verso: 'À la classe I.',
      type: 'definition',
      tags: ['restriction'],
    },
    {
      id: 'ue5-cmh-presentation-fc-10',
      recto: 'Le sillon du CMH de classe I est-il ouvert ou fermé aux extrémités ?',
      verso: 'Fermé, ce qui limite la taille des peptides présentés à environ huit à dix résidus.',
      type: 'definition',
      tags: ['classe I'],
    },
    {
      id: 'ue5-cmh-presentation-fc-11',
      recto: 'Qu’est-ce que la reconnaissance indirecte en transplantation ?',
      verso: 'La présentation, par les cellules présentatrices du receveur, de peptides dérivés des molécules HLA du donneur, selon la voie classique du soi.',
      type: 'clinique',
      tags: ['transplantation'],
    },
    {
      id: 'ue5-cmh-presentation-fc-12',
      recto: 'Sur quel mode les deux allèles HLA parentaux sont-ils exprimés chez un individu ?',
      verso: 'De façon codominante : les deux allèles sont exprimés simultanément.',
      type: 'definition',
      tags: ['polymorphisme'],
    },
  ],
  qcm: [
    {
      id: 'ue5-cmh-presentation-qcm-01',
      enonce: 'Concernant l’organisation générale du CMH, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le CMH humain est situé sur le chromosome 6.', vraie: true, justification: 'Exact : le système HLA est porté par le bras court du chromosome 6.' },
        { lettre: 'B', texte: 'HLA-DR appartient à la classe I.', vraie: false, justification: 'HLA-DR appartient à la classe II, comme HLA-DP et HLA-DQ.' },
        { lettre: 'C', texte: 'La bêta-2-microglobuline est codée par un gène du CMH.', vraie: false, justification: 'Elle est codée hors du CMH, sur le chromosome 15.' },
        { lettre: 'D', texte: 'Le CMH de classe I est présent sur toutes les cellules nucléées.', vraie: true, justification: 'Exact : c’est une caractéristique essentielle de la classe I.' },
        { lettre: 'E', texte: 'Le CMH de classe II est exprimé sur toutes les cellules de l’organisme.', vraie: false, justification: 'Il est restreint aux cellules présentatrices d’antigène professionnelles.' },
      ],
      correction: 'Réponses exactes : A et D. Retenir la localisation chromosomique et l’expression ubiquitaire de la classe I.',
      difficulte: 2,
    },
    {
      id: 'ue5-cmh-presentation-qcm-02',
      enonce: 'Concernant la voie d’apprêtement cytosolique (CMH de classe I), quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle fait intervenir le protéasome.', vraie: true, justification: 'Exact : il dégrade les protéines cytosoliques marquées par l’ubiquitine.' },
        { lettre: 'B', texte: 'Le transporteur TAP achemine les peptides vers l’endosome.', vraie: false, justification: 'TAP achemine les peptides vers le réticulum endoplasmique, pas vers l’endosome.' },
        { lettre: 'C', texte: 'Le chargement du peptide a lieu dans le réticulum endoplasmique.', vraie: true, justification: 'Exact : c’est là que le peptide se fixe dans le sillon de la molécule HLA de classe I.' },
        { lettre: 'D', texte: 'Cette voie permet de présenter des peptides viraux issus de protéines synthétisées dans la cellule infectée.', vraie: true, justification: 'Exact : c’est l’intérêt central de cette voie pour la surveillance antivirale.' },
        { lettre: 'E', texte: 'Le complexe HLA de classe I-peptide est présenté au lymphocyte T CD4.', vraie: false, justification: 'Il est présenté au lymphocyte T CD8, restreint à la classe I.' },
      ],
      correction: 'Réponses exactes : A, C et D. La voie cytosolique aboutit à la présentation aux CD8.',
      difficulte: 2,
    },
    {
      id: 'ue5-cmh-presentation-qcm-03',
      enonce: 'Concernant la voie d’apprêtement endosomal (CMH de classe II), quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle concerne des antigènes internalisés depuis le milieu extracellulaire.', vraie: true, justification: 'Exact : c’est la voie exogène, par endocytose ou phagocytose.' },
        { lettre: 'B', texte: 'La chaîne invariante occupe le sillon peptidique avant la maturation endosomale.', vraie: true, justification: 'Exact : elle empêche une fixation prématurée de peptides endogènes.' },
        { lettre: 'C', texte: 'Le CLIP est un fragment résiduel de la chaîne invariante.', vraie: true, justification: 'Exact : il reste dans le sillon après dégradation partielle de la chaîne invariante.' },
        { lettre: 'D', texte: 'HLA-DM dégrade directement l’antigène exogène.', vraie: false, justification: 'HLA-DM catalyse l’échange du CLIP contre le peptide antigénique, elle ne dégrade pas l’antigène.' },
        { lettre: 'E', texte: 'Cette voie aboutit à la présentation au lymphocyte T CD8.', vraie: false, justification: 'Elle aboutit à la présentation au lymphocyte T CD4, restreint à la classe II.' },
      ],
      correction: 'Réponses exactes : A, B et C. Bien distinguer le rôle de la chaîne invariante, du CLIP et de HLA-DM.',
      difficulte: 3,
    },
    {
      id: 'ue5-cmh-presentation-qcm-04',
      enonce: 'Concernant la restriction par le CMH, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le lymphocyte T CD8 est restreint au CMH de classe I.', vraie: true, justification: 'Exact : c’est la définition de la restriction du CD8.' },
        { lettre: 'B', texte: 'Le lymphocyte T CD4 est restreint au CMH de classe I.', vraie: false, justification: 'Le CD4 est restreint au CMH de classe II, pas de classe I.' },
        { lettre: 'C', texte: 'Le récepteur T peut reconnaître un antigène libre, sans présentation par le CMH.', vraie: false, justification: 'Le récepteur T ne reconnaît le peptide que présenté par une molécule du CMH : c’est le principe même de la restriction.' },
        { lettre: 'D', texte: 'Le sillon du CMH de classe II est ouvert aux deux extrémités.', vraie: true, justification: 'Exact, ce qui permet la fixation de peptides plus longs que pour la classe I.' },
        { lettre: 'E', texte: 'Le sillon du CMH de classe I accepte des peptides de plus de vingt résidus.', vraie: false, justification: 'Le sillon fermé de la classe I limite les peptides à environ huit à dix résidus.' },
      ],
      correction: 'Réponses exactes : A et D. La restriction associe strictement CD8-classe I et CD4-classe II.',
      difficulte: 2,
    },
    {
      id: 'ue5-cmh-presentation-qcm-05',
      enonce: 'Concernant le polymorphisme HLA, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le système HLA est parmi les régions les plus polymorphes du génome humain.', vraie: true, justification: 'Exact : de très nombreux allèles existent à chaque locus HLA.' },
        { lettre: 'B', texte: 'Les allèles HLA sont transmis selon un mode codominant.', vraie: true, justification: 'Exact : les deux allèles parentaux sont exprimés simultanément.' },
        { lettre: 'C', texte: 'Le polymorphisme HLA facilite systématiquement la transplantation.', vraie: false, justification: 'Au contraire, il complique la recherche d’un donneur compatible et favorise le rejet de greffe.' },
        { lettre: 'D', texte: 'Le polymorphisme HLA diversifie le répertoire de peptides présentables à l’échelle de la population.', vraie: true, justification: 'Exact : c’est un avantage évolutif face aux pathogènes.' },
        { lettre: 'E', texte: 'Tous les individus d’une population expriment les mêmes allèles HLA.', vraie: false, justification: 'C’est l’inverse : chaque individu possède une combinaison quasiment unique d’allèles HLA.' },
      ],
      correction: 'Réponses exactes : A, B et D. Le polymorphisme HLA a un intérêt évolutif mais complique la transplantation.',
      difficulte: 2,
    },
    {
      id: 'ue5-cmh-presentation-qcm-06',
      enonce: 'Concernant la transplantation et le CMH, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La reconnaissance directe correspond à la reconnaissance des molécules HLA du donneur telles quelles.', vraie: true, justification: 'Exact : les lymphocytes T du receveur reconnaissent directement les HLA du greffon.' },
        { lettre: 'B', texte: 'La reconnaissance indirecte implique la présentation de peptides dérivés du HLA du donneur par les cellules du receveur.', vraie: true, justification: 'Exact : selon la voie classique du soi du receveur.' },
        { lettre: 'C', texte: 'Un typage HLA compatible supprime totalement le besoin d’immunosuppression.', vraie: false, justification: 'Un traitement immunosuppresseur reste nécessaire malgré la compatibilité, en raison des disparités mineures résiduelles.' },
        { lettre: 'D', texte: 'La compatibilité HLA diminue le risque de réaction du greffon contre l’hôte en allogreffe de moelle.', vraie: true, justification: 'Exact : c’est un objectif majeur du typage HLA avant allogreffe.' },
        { lettre: 'E', texte: 'Le rejet de greffe est indépendant du polymorphisme HLA.', vraie: false, justification: 'Le polymorphisme HLA est au contraire la principale cause de rejet.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir les deux modes de reconnaissance allogénique.',
      difficulte: 2,
    },
  ],
};
