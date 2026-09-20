import type { Fiche } from '../../types';

export const ficheLymphocytesBReponseHumorale: Fiche = {
  id: 'ue5-lymphocytes-b-reponse-humorale',
  ue: 'ue5',
  titre: 'Lymphocytes B et réponse humorale',
  sousTitre:
    'Maturation, activation thymodépendante et thymo-indépendante, centre germinatif, plasmocytes et mémoire immunitaire',
  chapitre: 'Immunité adaptative',
  ordre: 8,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'lymphocyte B',
    'BCR',
    'centre germinatif',
    'plasmocyte',
    'thymodépendant',
    'thymo-indépendant',
    'mémoire immunitaire',
    'réponse primaire',
    'réponse secondaire',
  ],
  objectifs: [
    'Décrire les grandes étapes de la maturation du lymphocyte B dans la moelle osseuse.',
    'Distinguer l’activation thymodépendante et l’activation thymo-indépendante du lymphocyte B.',
    'Décrire l’organisation et le rôle du centre germinatif.',
    'Caractériser le plasmocyte et son rôle dans la sécrétion d’anticorps.',
    'Expliquer les bases cellulaires de la mémoire immunitaire.',
    'Comparer les réponses immunitaires primaire et secondaire.',
  ],
  sections: [
    {
      id: 'maturation-b',
      titre: 'Maturation du lymphocyte B',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le lymphocyte B naît et achève sa maturation initiale dans la moelle osseuse, indépendamment de tout contact antigénique. Il exprime à sa surface un récepteur pour l’antigène, le BCR (B Cell Receptor), constitué d’une immunoglobuline membranaire associée à un hétérodimère de signalisation Ig-alpha/Ig-bêta (CD79a/CD79b).",
        },
        {
          type: 'liste',
          items: [
            "Le réarrangement des gènes des immunoglobulines suit un ordre précis : chaîne lourde en premier, puis chaîne légère, chacun testé par un point de contrôle avant de poursuivre la maturation.",
            "Le lymphocyte B immature qui exprime un BCR fortement autoréactif peut, avant de quitter la moelle osseuse, réviser son récepteur (édition du récepteur) en réarrangeant un nouveau gène de chaîne légère, ou entrer en apoptose si la révision échoue : c’est la tolérance centrale B.",
            "Le lymphocyte B naïf mature, exprimant à la fois une IgM et une IgD membranaires de même spécificité, quitte la moelle osseuse et rejoint la circulation puis les organes lymphoïdes secondaires.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'BCR et TCR : une logique commune',
          texte:
            "Comme le TCR, le BCR est généré par recombinaison V(D)J catalysée par RAG1 et RAG2, garantissant à chaque lymphocyte B une spécificité antigénique unique par exclusion allélique. Contrairement au TCR cependant, le BCR peut reconnaître un antigène natif, conformationnel, sans nécessiter de présentation par le CMH.",
        },
      ],
    },
    {
      id: 'activation-thymodependante',
      titre: 'Activation thymodépendante',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La majorité des antigènes protéiques déclenchent une réponse dite thymodépendante, nécessitant la coopération entre le lymphocyte B et un lymphocyte T CD4 auxiliaire spécifique du même antigène.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de l’activation B thymodépendante',
          etapes: [
            {
              titre: 'Reconnaissance de l’antigène par le BCR',
              detail:
                "Le lymphocyte B reconnaît l’antigène natif par son BCR, l’internalise par endocytose, le dégrade et présente les peptides résultants sur son CMH de classe II.",
            },
            {
              titre: 'Coopération avec le lymphocyte T CD4',
              detail:
                "Un lymphocyte T CD4 auxiliaire, préalablement activé et spécifique du même antigène, reconnaît le complexe CMH II-peptide présenté par le lymphocyte B et lui délivre un signal de costimulation, notamment via l’interaction CD40-CD40L.",
            },
            {
              titre: 'Prolifération et différenciation',
              detail:
                "Les cytokines sécrétées par le lymphocyte T CD4 (notamment l’IL-21) induisent la prolifération du lymphocyte B activé, qui migre vers un follicule primaire pour y initier une réaction de centre germinatif.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'CD40-CD40L, signal indispensable',
          texte:
            "L’interaction CD40 (lymphocyte B) et CD40L (lymphocyte T CD4 activé) est indispensable à l’hypermutation somatique et à la commutation de classe. Son absence, comme dans le syndrome hyper-IgM lié à l’X, bloque la maturation de la réponse humorale au stade IgM.",
        },
      ],
    },
    {
      id: 'centre-germinatif',
      titre: 'Le centre germinatif',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le centre germinatif est une structure transitoire qui se forme dans un follicule lymphoïde secondaire après activation thymodépendante, siège de l’hypermutation somatique, de la sélection d’affinité et de la commutation de classe.",
        },
        {
          type: 'tableau',
          titre: 'Zones fonctionnelles du centre germinatif',
          colonnes: ['Zone', 'Processus principal'],
          lignes: [
            ['Zone sombre', 'Prolifération intense des centroblastes et hypermutation somatique des gènes des immunoglobulines'],
            [
              'Zone claire',
              'Sélection des centrocytes de forte affinité par compétition pour l’antigène présenté par les cellules dendritiques folliculaires et pour l’aide des lymphocytes T folliculaires auxiliaires',
            ],
          ],
        },
        {
          type: 'liste',
          items: [
            "Les lymphocytes B dont le récepteur muté présente la plus forte affinité pour l’antigène reçoivent préférentiellement les signaux de survie du lymphocyte T folliculaire auxiliaire (Tfh) ; les autres meurent par apoptose : c’est la maturation d’affinité.",
            "Au terme de la réaction du centre germinatif, le lymphocyte B sélectionné se différencie soit en plasmocyte sécréteur d’anticorps, soit en lymphocyte B mémoire.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Cellule dendritique folliculaire, à ne pas confondre',
          texte:
            "La cellule dendritique folliculaire, résidente du centre germinatif, est une cellule stromale non hématopoïétique qui retient l’antigène natif sous forme de complexes immuns à sa surface pendant des mois. Elle n’a aucun lien fonctionnel ni développemental avec la cellule dendritique classique, présentatrice d’antigène issue de la moelle osseuse.",
        },
      ],
    },
    {
      id: 'activation-thymo-independante',
      titre: 'Activation thymo-indépendante',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Certains antigènes, dits thymo-indépendants, activent directement le lymphocyte B sans nécessiter la coopération d’un lymphocyte T CD4, en raison de leur structure répétitive.",
        },
        {
          type: 'tableau',
          titre: 'Antigènes thymo-indépendants',
          colonnes: ['Type', 'Exemple', 'Particularité'],
          lignes: [
            [
              'Type 1',
              'Lipopolysaccharide bactérien',
              'Activation polyclonale à forte concentration, via un signal mitogène indépendant du BCR',
            ],
            [
              'Type 2',
              'Polysaccharides capsulaires bactériens (antigènes pneumococciques)',
              'Réticulation répétée de nombreux BCR par les épitopes répétitifs, sans signal T',
            ],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Limite de la réponse thymo-indépendante',
          texte:
            "La réponse thymo-indépendante ne génère ni commutation de classe efficace, ni mémoire immunitaire durable, ni maturation d’affinité : elle reste dominée par la production d’IgM. Cela explique la faible immunogénicité des vaccins polysaccharidiques purs chez le jeune enfant, justifiant leur conjugaison à une protéine porteuse pour les rendre thymodépendants.",
        },
      ],
    },
    {
      id: 'plasmocytes-memoire',
      titre: 'Plasmocytes et mémoire immunitaire',
      blocs: [
        {
          type: 'definition',
          terme: 'Plasmocyte',
          definition:
            "Cellule effectrice terminale de la lignée B, spécialisée dans la sécrétion massive d’anticorps solubles de spécificité unique. Le plasmocyte a perdu l’expression membranaire du BCR et du CMH de classe II, et présente un réticulum endoplasmique granuleux très développé.",
        },
        {
          type: 'liste',
          items: [
            "Les plasmocytes à courte durée de vie se forment rapidement en dehors du centre germinatif (réponse extrafolliculaire), produisant des IgM de faible affinité dans les premiers jours de la réponse.",
            "Les plasmocytes à longue durée de vie, issus du centre germinatif, migrent préférentiellement vers la moelle osseuse, où ils peuvent persister des années, voire toute la vie, assurant une sécrétion continue d’anticorps de haute affinité.",
            "Le lymphocyte B mémoire, également issu du centre germinatif, ne sécrète pas d’anticorps mais persiste en recirculant, prêt à répondre rapidement lors d’une réexposition à l’antigène.",
          ],
        },
        {
          type: 'comparaison',
          titre: 'Réponse immunitaire primaire versus secondaire',
          gauche: {
            titre: 'Réponse primaire',
            points: [
              'Délai d’apparition des anticorps de plusieurs jours',
              'Isotype dominant : IgM initialement, puis IgG',
              'Affinité globale modérée',
              'Amplitude de réponse limitée',
            ],
          },
          droite: {
            titre: 'Réponse secondaire',
            points: [
              'Délai raccourci, réponse plus rapide',
              'Isotype dominant : IgG (ou IgA, IgE selon le contexte) d’emblée',
              'Affinité plus élevée (maturation d’affinité acquise)',
              'Amplitude de réponse plus intense et plus prolongée',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Principe du rappel vaccinal',
          texte:
            "Le principe des rappels vaccinaux repose directement sur la réponse secondaire : une réexposition à l’antigène, même des années plus tard, mobilise les lymphocytes B et T mémoires préexistants, produisant une réponse anticorps plus rapide, plus intense et de plus haute affinité qu’après la primo-vaccination.",
        },
      ],
    },
  ],
  pointsCles: [
    'Le lymphocyte B mature dans la moelle osseuse, où son BCR est généré par recombinaison VDJ, avec tolérance centrale par édition du récepteur ou apoptose.',
    'L’activation thymodépendante nécessite la coopération CD40-CD40L avec un lymphocyte T CD4 spécifique du même antigène.',
    'Le centre germinatif est le siège de l’hypermutation somatique (zone sombre) et de la sélection d’affinité (zone claire).',
    'Les antigènes thymo-indépendants activent le lymphocyte B sans aide T, mais sans commutation de classe efficace ni mémoire durable.',
    'Le plasmocyte est la cellule effectrice terminale sécrétrice d’anticorps, sans BCR membranaire.',
    'Les plasmocytes à longue durée de vie et les lymphocytes B mémoires sont issus du centre germinatif.',
    'La réponse secondaire est plus rapide, plus intense et de plus haute affinité que la réponse primaire, principe des rappels vaccinaux.',
  ],
  erreursFrequentes: [
    'Confondre cellule dendritique folliculaire (stromale, centre germinatif) et cellule dendritique classique (hématopoïétique, présentatrice d’antigène).',
    'Oublier que l’interaction CD40-CD40L est indispensable à l’hypermutation somatique et à la commutation de classe.',
    'Croire que la réponse thymo-indépendante génère une mémoire immunitaire durable comparable à la réponse thymodépendante.',
    'Inverser zone sombre (prolifération, hypermutation) et zone claire (sélection d’affinité) du centre germinatif.',
    'Penser que le plasmocyte exprime encore un BCR membranaire fonctionnel : il l’a perdu au profit de la sécrétion d’anticorps.',
    'Croire que la réponse primaire produit d’emblée des IgG en grande quantité : elle est dominée initialement par les IgM.',
  ],
  mnemotechniques: [
    {
      moyen: '« CD40 quarante » ouvre la porte de la commutation',
      explication:
        'L’interaction CD40-CD40L est la porte d’entrée indispensable vers l’hypermutation somatique et la commutation de classe.',
    },
    {
      moyen: 'Zone sombre mute, zone claire trie',
      explication:
        'Dans le centre germinatif, la zone sombre est le lieu de la prolifération et de l’hypermutation ; la zone claire est le lieu de la sélection des clones de forte affinité.',
    },
    {
      moyen: 'Primaire lente et IgM, secondaire rapide et IgG',
      explication:
        'Moyen simple pour opposer les deux types de réponse humorale selon le délai et l’isotype dominant.',
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
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-01',
      recto: 'De quoi est constitué le BCR ?',
      verso: 'D’une immunoglobuline membranaire associée à l’hétérodimère de signalisation Ig-alpha/Ig-bêta (CD79a/CD79b).',
      type: 'definition',
      tags: ['BCR'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-02',
      recto: 'Quels sont les deux devenirs possibles d’un lymphocyte B immature fortement autoréactif dans la moelle osseuse ?',
      verso: 'L’édition du récepteur (réarrangement d’une nouvelle chaîne légère) ou l’apoptose.',
      type: 'mecanisme',
      tags: ['tolérance centrale B'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-03',
      recto: 'Quelle interaction moléculaire est indispensable à l’activation B thymodépendante ?',
      verso: 'L’interaction CD40 (lymphocyte B) et CD40L (lymphocyte T CD4 activé).',
      type: 'mecanisme',
      tags: ['coopération T-B'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-04',
      recto: 'Quelle zone du centre germinatif est le siège de l’hypermutation somatique ?',
      verso: 'La zone sombre.',
      type: 'definition',
      tags: ['centre germinatif'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-05',
      recto: 'Quelle zone du centre germinatif assure la sélection des clones de forte affinité ?',
      verso: 'La zone claire.',
      type: 'definition',
      tags: ['centre germinatif'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-06',
      recto: 'Quelle cellule stromale retient l’antigène natif dans le centre germinatif ?',
      verso: 'La cellule dendritique folliculaire.',
      type: 'definition',
      tags: ['centre germinatif'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-07',
      recto: 'Citer un exemple d’antigène thymo-indépendant de type 1.',
      verso: 'Le lipopolysaccharide bactérien.',
      type: 'classification',
      tags: ['thymo-indépendant'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-08',
      recto: 'Pourquoi les vaccins polysaccharidiques purs sont-ils peu efficaces chez le jeune enfant ?',
      verso: 'Parce qu’ils induisent une réponse thymo-indépendante, sans mémoire durable ni maturation d’affinité, d’où leur conjugaison protéique.',
      type: 'clinique',
      tags: ['vaccination'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-09',
      recto: 'Où résident préférentiellement les plasmocytes à longue durée de vie ?',
      verso: 'Dans la moelle osseuse.',
      type: 'definition',
      tags: ['plasmocyte'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-10',
      recto: 'Le plasmocyte exprime-t-il encore le BCR membranaire ?',
      verso: 'Non, il a perdu son expression au profit de la sécrétion massive d’anticorps.',
      type: 'definition',
      tags: ['plasmocyte'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-11',
      recto: 'Quel isotype domine la réponse primaire précoce ?',
      verso: 'L’IgM.',
      type: 'chiffre',
      tags: ['réponse primaire'],
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-fc-12',
      recto: 'Sur quel principe repose l’efficacité des rappels vaccinaux ?',
      verso: 'La réponse secondaire, plus rapide, plus intense et de plus haute affinité, grâce aux lymphocytes B et T mémoires préexistants.',
      type: 'clinique',
      tags: ['mémoire immunitaire'],
    },
  ],
  qcm: [
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-qcm-01',
      enonce: 'Concernant la maturation du lymphocyte B, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle a lieu principalement dans le thymus.', vraie: false, justification: 'La maturation du lymphocyte B a lieu dans la moelle osseuse, pas dans le thymus.' },
        { lettre: 'B', texte: 'Le BCR est généré par recombinaison V(D)J.', vraie: true, justification: 'Exact, comme pour le TCR, catalysée par RAG1 et RAG2.' },
        { lettre: 'C', texte: 'Un lymphocyte B immature fortement autoréactif peut réviser son récepteur.', vraie: true, justification: 'Exact : c’est le mécanisme d’édition du récepteur, base de la tolérance centrale B.' },
        { lettre: 'D', texte: 'Le lymphocyte B naïf mature exprime uniquement l’IgG membranaire.', vraie: false, justification: 'Il exprime l’IgM et l’IgD membranaires de même spécificité.' },
        { lettre: 'E', texte: 'Le BCR peut reconnaître un antigène natif sans présentation par le CMH.', vraie: true, justification: 'Exact : contrairement au TCR, le BCR reconnaît directement l’antigène conformationnel.' },
      ],
      correction: 'Réponses exactes : B, C et E. La maturation B partage certains mécanismes avec la maturation T, mais dans la moelle osseuse.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-qcm-02',
      enonce: 'Concernant l’activation thymodépendante du lymphocyte B, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle nécessite la coopération d’un lymphocyte T CD4 spécifique du même antigène.', vraie: true, justification: 'Exact : c’est la définition même de l’activation thymodépendante.' },
        { lettre: 'B', texte: 'Le lymphocyte B présente l’antigène au lymphocyte T via son CMH de classe I.', vraie: false, justification: 'Le lymphocyte B présente via son CMH de classe II, reconnu par le CD4.' },
        { lettre: 'C', texte: 'L’interaction CD40-CD40L est indispensable à cette coopération.', vraie: true, justification: 'Exact : elle conditionne l’hypermutation et la commutation de classe.' },
        { lettre: 'D', texte: 'Cette voie aboutit systématiquement à une réponse limitée aux IgM.', vraie: false, justification: 'Elle permet au contraire la commutation de classe vers d’autres isotypes (IgG, IgA, IgE).' },
        { lettre: 'E', texte: 'L’IL-21 participe à la prolifération et à la différenciation du lymphocyte B activé.', vraie: true, justification: 'Exact : c’est une cytokine clé sécrétée par les lymphocytes T folliculaires auxiliaires.' },
      ],
      correction: 'Réponses exactes : A, C et E. La coopération T-B repose sur la présentation CMH II et le signal CD40-CD40L.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-qcm-03',
      enonce: 'Concernant le centre germinatif, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La zone sombre est le siège de l’hypermutation somatique.', vraie: true, justification: 'Exact, avec une prolifération intense des centroblastes.' },
        { lettre: 'B', texte: 'La zone claire assure la sélection des clones de forte affinité.', vraie: true, justification: 'Exact, par compétition pour l’antigène et l’aide des lymphocytes T folliculaires auxiliaires.' },
        { lettre: 'C', texte: 'La cellule dendritique folliculaire dérive de la moelle osseuse comme la cellule dendritique classique.', vraie: false, justification: 'La cellule dendritique folliculaire est une cellule stromale non hématopoïétique, distincte de la cellule dendritique classique.' },
        { lettre: 'D', texte: 'Le centre germinatif peut donner naissance à des plasmocytes à longue durée de vie.', vraie: true, justification: 'Exact, qui migrent préférentiellement vers la moelle osseuse.' },
        { lettre: 'E', texte: 'Le centre germinatif peut donner naissance à des lymphocytes B mémoires.', vraie: true, justification: 'Exact, en plus des plasmocytes.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. Retenir les deux devenirs cellulaires issus du centre germinatif.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-qcm-04',
      enonce: 'Concernant les antigènes thymo-indépendants, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Ils nécessitent la coopération d’un lymphocyte T CD4.', vraie: false, justification: 'C’est justement leur caractéristique de ne pas nécessiter cette coopération.' },
        { lettre: 'B', texte: 'Les polysaccharides capsulaires bactériens en sont un exemple classique.', vraie: true, justification: 'Exact : ce sont des antigènes thymo-indépendants de type 2.' },
        { lettre: 'C', texte: 'Ils induisent une commutation de classe efficace et une forte mémoire immunitaire.', vraie: false, justification: 'La réponse thymo-indépendante reste dominée par l’IgM, sans commutation efficace ni mémoire durable.' },
        { lettre: 'D', texte: 'La conjugaison protéique d’un polysaccharide vise à le rendre thymodépendant.', vraie: true, justification: 'Exact : c’est le principe des vaccins conjugués.' },
        { lettre: 'E', texte: 'Le lipopolysaccharide bactérien est un exemple d’antigène thymo-indépendant de type 1.', vraie: true, justification: 'Exact, capable d’activer polyclonalement les lymphocytes B à forte concentration.' },
      ],
      correction: 'Réponses exactes : B, D et E. Les vaccins conjugués exploitent la limite de la réponse thymo-indépendante.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-qcm-05',
      enonce: 'Concernant les plasmocytes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le plasmocyte exprime encore un BCR membranaire fonctionnel.', vraie: false, justification: 'Le plasmocyte a perdu l’expression du BCR membranaire au profit de la sécrétion d’anticorps.' },
        { lettre: 'B', texte: 'Les plasmocytes à courte durée de vie se forment en dehors du centre germinatif.', vraie: true, justification: 'Exact : c’est la réponse extrafolliculaire précoce, produisant des IgM de faible affinité.' },
        { lettre: 'C', texte: 'Les plasmocytes à longue durée de vie migrent préférentiellement vers la moelle osseuse.', vraie: true, justification: 'Exact, où ils peuvent persister des années.' },
        { lettre: 'D', texte: 'Le plasmocyte présente un réticulum endoplasmique granuleux peu développé.', vraie: false, justification: 'Au contraire, son réticulum endoplasmique granuleux est très développé, en lien avec la sécrétion massive d’anticorps.' },
        { lettre: 'E', texte: 'Le plasmocyte exprime encore fortement le CMH de classe II.', vraie: false, justification: 'Le plasmocyte a également perdu l’expression du CMH de classe II.' },
      ],
      correction: 'Réponses exactes : B et C. Le plasmocyte est une cellule terminale, différenciée pour la sécrétion d’anticorps.',
      difficulte: 2,
    },
    {
      id: 'ue5-lymphocytes-b-reponse-humorale-qcm-06',
      enonce: 'Concernant les réponses immunitaires primaire et secondaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La réponse primaire est initialement dominée par l’IgM.', vraie: true, justification: 'Exact : les IgG apparaissent secondairement après commutation de classe.' },
        { lettre: 'B', texte: 'La réponse secondaire est plus lente à s’installer que la réponse primaire.', vraie: false, justification: 'La réponse secondaire est au contraire plus rapide, grâce aux lymphocytes mémoires préexistants.' },
        { lettre: 'C', texte: 'L’affinité des anticorps est généralement plus élevée lors de la réponse secondaire.', vraie: true, justification: 'Exact, grâce à la maturation d’affinité acquise lors de la réponse primaire.' },
        { lettre: 'D', texte: 'Le principe des rappels vaccinaux repose sur la mobilisation de la mémoire immunitaire.', vraie: true, justification: 'Exact : c’est la base immunologique de la stratégie vaccinale de rappel.' },
        { lettre: 'E', texte: 'La réponse secondaire dépend uniquement de l’immunité innée.', vraie: false, justification: 'La réponse secondaire dépend de la mémoire de l’immunité adaptative (lymphocytes B et T mémoires).' },
      ],
      correction: 'Réponses exactes : A, C et D. La comparaison primaire/secondaire est la base immunologique de la vaccination.',
      difficulte: 2,
    },
  ],
};
