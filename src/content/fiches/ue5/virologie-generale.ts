import type { Fiche } from '../../types';

export const ficheVirologieGenerale: Fiche = {
  id: 'ue5-virologie-generale',
  ue: 'ue5',
  titre: 'Virologie générale',
  sousTitre:
    'Structure virale, classification de Baltimore, cycle de multiplication, rétrovirus, antiviraux et virus médicalement importants',
  chapitre: 'Agents infectieux',
  ordre: 11,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'virus',
    'capside',
    'enveloppe',
    'classification de Baltimore',
    'cycle viral',
    'rétrovirus',
    'transcriptase inverse',
    'antiviraux',
    'tropisme',
  ],
  objectifs: [
    'Décrire la structure générale d’un virus et ses principaux composants.',
    'Expliquer le principe de la classification de Baltimore selon la nature du génome viral.',
    'Décrire les grandes étapes du cycle de multiplication virale.',
    'Caractériser la particularité du cycle des rétrovirus.',
    'Citer les principales classes d’antiviraux et leur mécanisme d’action.',
    'Citer des exemples de virus médicalement importants selon leur famille.',
  ],
  sections: [
    {
      id: 'structure-virale',
      titre: 'Structure générale d’un virus',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un virus est un agent infectieux acellulaire, de taille très inférieure à celle d’une bactérie, dépourvu de tout métabolisme propre : c’est un parasite intracellulaire obligatoire, incapable de se répliquer en dehors d’une cellule hôte dont il détourne la machinerie.",
        },
        {
          type: 'tableau',
          titre: 'Composants structuraux d’un virus',
          colonnes: ['Structure', 'Caractéristique'],
          lignes: [
            ['Génome', 'ADN ou ARN, simple ou double brin, jamais les deux simultanément dans une même particule'],
            ['Capside', 'Enveloppe protéique constituée de capsomères, protégeant le génome viral'],
            ['Nucléocapside', 'Ensemble formé par le génome et la capside'],
            ['Enveloppe (facultative)', 'Bicouche lipidique d’origine cellulaire, porteuse de glycoprotéines virales de surface'],
          ],
        },
        {
          type: 'liste',
          items: [
            "La symétrie de la capside peut être icosaédrique (quasi sphérique), hélicoïdale (allongée), ou complexe (comme chez les poxvirus).",
            "Les virus enveloppés acquièrent leur enveloppe par bourgeonnement à travers une membrane cellulaire (plasmique, nucléaire ou de l’appareil de Golgi selon les familles).",
            "Les virus non enveloppés (dits nus) sont généralement plus résistants dans le milieu extérieur et aux agents physico-chimiques que les virus enveloppés.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Enveloppe et résistance dans l’environnement',
          texte:
            "Les virus enveloppés sont sensibles aux solvants lipidiques, aux détergents et à la dessiccation, en raison de la fragilité de leur enveloppe lipidique, ce qui explique leur transmission préférentielle par contact direct ou gouttelettes. Les virus nus, plus résistants, se transmettent volontiers par voie féco-orale ou par des surfaces contaminées.",
        },
      ],
    },
    {
      id: 'classification-baltimore',
      titre: 'Classification de Baltimore',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La classification de Baltimore répartit les virus en sept groupes selon la nature de leur génome et la stratégie qu’ils emploient pour produire leur ARN messager, étape obligatoire de l’expression de leurs gènes.",
        },
        {
          type: 'tableau',
          titre: 'Les sept groupes de la classification de Baltimore',
          colonnes: ['Groupe', 'Type de génome', 'Exemple'],
          lignes: [
            ['I', 'ADN double brin', 'Herpèsvirus, adénovirus'],
            ['II', 'ADN simple brin', 'Parvovirus'],
            ['III', 'ARN double brin', 'Rotavirus'],
            ['IV', 'ARN simple brin de polarité positive', 'Poliovirus, virus de l’hépatite C, coronavirus'],
            ['V', 'ARN simple brin de polarité négative', 'Virus de la rougeole, virus grippal, virus rabique'],
            ['VI', 'ARN simple brin rétrotranscrit (rétrovirus)', 'VIH'],
            ['VII', 'ADN double brin à réplication par intermédiaire ARN', 'Virus de l’hépatite B'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Polarité positive ou négative',
          texte:
            "Un génome ARN de polarité positive peut être directement traduit par les ribosomes de la cellule hôte, comme un ARN messager. Un génome ARN de polarité négative doit d’abord être transcrit en ARN messager par une ARN polymérase ARN-dépendante virale, apportée dans la particule virale elle-même.",
        },
      ],
    },
    {
      id: 'cycle-viral',
      titre: 'Cycle de multiplication virale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Malgré la diversité des familles virales, le cycle de multiplication suit une séquence commune, comportant classiquement six étapes.",
        },
        {
          type: 'etapes',
          titre: 'Étapes du cycle viral',
          etapes: [
            {
              titre: 'Attachement (adsorption)',
              detail:
                "Fixation spécifique d’une protéine de surface virale sur un récepteur cellulaire, déterminant en grande partie le tropisme d’espèce et de tissu du virus.",
            },
            {
              titre: 'Pénétration',
              detail: "Entrée du virus dans la cellule, par endocytose ou par fusion directe de l’enveloppe virale avec la membrane plasmique.",
            },
            {
              titre: 'Décapsidation',
              detail: "Libération du génome viral dans le cytoplasme ou le noyau, après dissociation de la capside.",
            },
            {
              titre: 'Réplication et expression du génome',
              detail: "Synthèse des acides nucléiques et des protéines virales, selon la stratégie propre à chaque groupe de la classification de Baltimore.",
            },
            {
              titre: 'Assemblage',
              detail: "Formation de nouvelles particules virales par association du génome répliqué et des protéines de capside néosynthétisées.",
            },
            {
              titre: 'Libération',
              detail: "Sortie des virions matures par lyse cellulaire (virus nus) ou par bourgeonnement à travers une membrane cellulaire (virus enveloppés).",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Tropisme viral',
          texte:
            "Le tropisme d’un virus, c’est-à-dire sa capacité à infecter préférentiellement certains types cellulaires, est déterminé au premier chef par la présence, à la surface de la cellule cible, du récepteur spécifique reconnu par la protéine d’attachement virale.",
        },
      ],
    },
    {
      id: 'retrovirus',
      titre: 'Particularité du cycle des rétrovirus',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les rétrovirus, dont le VIH est le représentant médicalement le plus important, possèdent un génome ARN simple brin de polarité positive, mais suivent un cycle réplicatif unique impliquant une étape de rétrotranscription.",
        },
        {
          type: 'etapes',
          titre: 'Particularités du cycle rétroviral',
          etapes: [
            {
              titre: 'Rétrotranscription',
              detail: "La transcriptase inverse (rétrotranscriptase) virale copie le génome ARN en ADN complémentaire double brin dans le cytoplasme de la cellule infectée.",
            },
            {
              titre: 'Intégration',
              detail: "L’ADN proviral, une fois transporté dans le noyau, est intégré de façon stable dans le génome de la cellule hôte par l’intégrase virale.",
            },
            {
              titre: 'Transcription et traduction',
              detail: "L’ADN proviral intégré est transcrit par l’ARN polymérase de la cellule hôte, produisant les ARN messagers et les génomes des nouveaux virions.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Latence et réservoir viral du VIH',
          texte:
            "L’intégration du provirus dans le génome de certaines cellules à longue durée de vie, notamment les lymphocytes T CD4 mémoires quiescents, constitue un réservoir viral latent, indétectable par le système immunitaire et inaccessible aux traitements antirétroviraux actuels, expliquant l’impossibilité d’une éradication complète du VIH par les traitements disponibles.",
        },
      ],
    },
    {
      id: 'antiviraux',
      titre: 'Principales classes d’antiviraux',
      blocs: [
        {
          type: 'tableau',
          titre: 'Cibles des principales classes d’antiviraux',
          colonnes: ['Classe', 'Mécanisme d’action', 'Exemple d’indication'],
          lignes: [
            ['Inhibiteurs de la transcriptase inverse', 'Blocage de la rétrotranscription de l’ARN viral en ADN', 'Infection par le VIH'],
            ['Inhibiteurs de protéase', 'Blocage du clivage des polyprotéines virales précurseurs', 'Infection par le VIH, hépatite C'],
            ['Inhibiteurs de la polymérase virale', 'Blocage de la réplication du génome viral', 'Herpèsvirus (aciclovir), hépatite C'],
            ['Inhibiteurs de fusion ou d’entrée', 'Blocage de l’attachement ou de la pénétration virale', 'Infection par le VIH'],
            ['Inhibiteurs de neuraminidase', 'Blocage de la libération des virions néoformés', 'Grippe'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Analogues nucléosidiques',
          texte:
            "De nombreux antiviraux, comme l’aciclovir contre les herpèsvirus, sont des analogues nucléosidiques qui nécessitent une activation par phosphorylation, souvent initiée par une enzyme virale spécifique (thymidine kinase virale), ce qui leur confère une bonne sélectivité pour les cellules infectées.",
        },
      ],
    },
    {
      id: 'virus-importants',
      titre: 'Exemples de virus médicalement importants',
      blocs: [
        {
          type: 'tableau',
          titre: 'Familles virales et exemples médicalement importants',
          colonnes: ['Famille', 'Génome', 'Exemple et pathologie associée'],
          lignes: [
            ['Herpesviridae', 'ADN double brin', 'Virus herpès simplex (herpès cutanéomuqueux), virus varicelle-zona'],
            ['Orthomyxoviridae', 'ARN simple brin négatif segmenté', 'Virus grippal (grippe saisonnière et pandémique)'],
            ['Retroviridae', 'ARN simple brin rétrotranscrit', 'VIH (syndrome d’immunodéficience acquise)'],
            ['Flaviviridae', 'ARN simple brin positif', 'Virus de l’hépatite C, virus de la dengue'],
            ['Picornaviridae', 'ARN simple brin positif', 'Poliovirus (poliomyélite), rhinovirus'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Variabilité génétique virale',
          texte:
            "Les virus à ARN, dépourvus de mécanisme efficace de relecture (proofreading) lors de leur réplication, accumulent des mutations à un taux nettement supérieur à celui des virus à ADN, ce qui explique la variabilité antigénique rapide de virus comme le VIH ou le virus grippal, et la nécessité d’une mise à jour vaccinale régulière contre ce dernier.",
        },
      ],
    },
  ],
  pointsCles: [
    'Le virus est un parasite intracellulaire obligatoire, dépourvu de métabolisme propre.',
    'La classification de Baltimore répartit les virus en sept groupes selon la nature du génome et la stratégie de production de l’ARN messager.',
    'Le cycle viral comporte six étapes : attachement, pénétration, décapsidation, réplication, assemblage, libération.',
    'Le tropisme viral dépend en premier lieu de la présence du récepteur cellulaire spécifique reconnu par la protéine d’attachement.',
    'Les rétrovirus rétrotranscrivent leur ARN en ADN proviral, intégré durablement dans le génome de la cellule hôte.',
    'Les virus à ARN accumulent des mutations plus rapidement que les virus à ADN, faute de relecture efficace.',
    'Les virus enveloppés sont fragiles dans l’environnement, les virus nus sont plus résistants.',
  ],
  erreursFrequentes: [
    'Croire qu’un virus possède simultanément un génome ADN et ARN : chaque virus n’a qu’un seul type d’acide nucléique.',
    'Confondre polarité positive (traduction directe possible) et polarité négative (transcription préalable obligatoire par une polymérase virale).',
    'Oublier que les rétrovirus ont un génome ARN, malgré leur réplication passant par un intermédiaire ADN intégré.',
    'Penser que les virus enveloppés sont plus résistants dans l’environnement que les virus nus : c’est l’inverse.',
    'Attribuer le tropisme viral uniquement à la voie de transmission, en oubliant le rôle central du récepteur cellulaire.',
    'Croire que le traitement antirétroviral actuel permet l’éradication complète du VIH : il ne fait que contrôler la réplication, sans éliminer le réservoir latent.',
  ],
  mnemotechniques: [
    {
      moyen: '« Baltimore » en sept groupes, du plus simple (ADN double brin) au plus complexe (rétrovirus, hépatite B)',
      explication:
        'Retenir la logique croissante de complexité de traduction : plus le génome s’éloigne de l’ARN messager directement traduisible, plus le groupe est numéroté haut.',
    },
    {
      moyen: '« APDRAL » pour les six étapes du cycle viral',
      explication:
        'Attachement, Pénétration, Décapsidation, Réplication, Assemblage, Libération : l’ordre chronologique du cycle de multiplication virale.',
    },
    {
      moyen: 'Rétro = en arrière, ARN vers ADN',
      explication:
        'Le préfixe « rétro » rappelle le sens inhabituel de la transcription chez les rétrovirus : de l’ARN vers l’ADN, à l’inverse du dogme central habituel.',
    },
  ],
  sources: [
    'Fields, Virology',
    'Huraux, Nicolas, Agut, Peigue-Lafeuille, Traité de virologie médicale',
    'Prescott, Microbiologie',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue5-virologie-generale-fc-01',
      recto: 'Un virus possède-t-il un métabolisme propre ?',
      verso: 'Non : c’est un parasite intracellulaire obligatoire, dépourvu de tout métabolisme autonome.',
      type: 'definition',
      tags: ['structure virale'],
    },
    {
      id: 'ue5-virologie-generale-fc-02',
      recto: 'Qu’est-ce que la nucléocapside ?',
      verso: 'L’ensemble formé par le génome viral et la capside qui l’entoure.',
      type: 'definition',
      tags: ['structure virale'],
    },
    {
      id: 'ue5-virologie-generale-fc-03',
      recto: 'À quel groupe de Baltimore appartiennent les rétrovirus comme le VIH ?',
      verso: 'Au groupe VI (ARN simple brin rétrotranscrit).',
      type: 'classification',
      tags: ['classification de Baltimore'],
    },
    {
      id: 'ue5-virologie-generale-fc-04',
      recto: 'Un ARN de polarité positive peut-il être directement traduit par les ribosomes ?',
      verso: 'Oui, il se comporte directement comme un ARN messager.',
      type: 'definition',
      tags: ['polarité'],
    },
    {
      id: 'ue5-virologie-generale-fc-05',
      recto: 'Citer les six étapes du cycle de multiplication virale.',
      verso: 'Attachement, pénétration, décapsidation, réplication et expression du génome, assemblage, libération.',
      type: 'classification',
      tags: ['cycle viral'],
    },
    {
      id: 'ue5-virologie-generale-fc-06',
      recto: 'Quel facteur détermine principalement le tropisme cellulaire d’un virus ?',
      verso: 'La présence, à la surface de la cellule cible, du récepteur spécifique reconnu par la protéine d’attachement virale.',
      type: 'mecanisme',
      tags: ['tropisme'],
    },
    {
      id: 'ue5-virologie-generale-fc-07',
      recto: 'Quelle enzyme virale rétrotranscrit l’ARN en ADN chez les rétrovirus ?',
      verso: 'La transcriptase inverse (rétrotranscriptase).',
      type: 'mecanisme',
      tags: ['rétrovirus'],
    },
    {
      id: 'ue5-virologie-generale-fc-08',
      recto: 'Quelle enzyme intègre l’ADN proviral dans le génome de la cellule hôte ?',
      verso: 'L’intégrase virale.',
      type: 'mecanisme',
      tags: ['rétrovirus'],
    },
    {
      id: 'ue5-virologie-generale-fc-09',
      recto: 'Pourquoi le VIH ne peut-il pas être éradiqué par les traitements antirétroviraux actuels ?',
      verso: 'En raison du réservoir viral latent constitué par le provirus intégré dans des cellules à longue durée de vie, comme les lymphocytes T CD4 mémoires quiescents.',
      type: 'clinique',
      tags: ['VIH'],
    },
    {
      id: 'ue5-virologie-generale-fc-10',
      recto: 'Quelle classe d’antiviraux bloque la libération des virions grippaux néoformés ?',
      verso: 'Les inhibiteurs de neuraminidase.',
      type: 'mecanisme',
      tags: ['antiviraux'],
    },
    {
      id: 'ue5-virologie-generale-fc-11',
      recto: 'Pourquoi les virus à ARN mutent-ils plus vite que les virus à ADN ?',
      verso: 'Parce qu’ils sont dépourvus de mécanisme efficace de relecture (proofreading) lors de la réplication de leur génome.',
      type: 'mecanisme',
      tags: ['variabilité génétique'],
    },
    {
      id: 'ue5-virologie-generale-fc-12',
      recto: 'Les virus enveloppés sont-ils plus ou moins résistants dans l’environnement que les virus nus ?',
      verso: 'Moins résistants, en raison de la fragilité de leur enveloppe lipidique face aux solvants et à la dessiccation.',
      type: 'definition',
      tags: ['enveloppe virale'],
    },
  ],
  qcm: [
    {
      id: 'ue5-virologie-generale-qcm-01',
      enonce: 'Concernant la structure des virus, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un virus possède un métabolisme énergétique propre.', vraie: false, justification: 'Le virus est dépourvu de métabolisme propre : c’est un parasite intracellulaire obligatoire.' },
        { lettre: 'B', texte: 'La capside est constituée de capsomères protéiques.', vraie: true, justification: 'Exact : elle protège le génome viral.' },
        { lettre: 'C', texte: 'Un virus peut posséder simultanément un génome ADN et un génome ARN.', vraie: false, justification: 'Chaque virus possède un seul type d’acide nucléique, jamais les deux simultanément.' },
        { lettre: 'D', texte: 'L’enveloppe virale, quand elle existe, dérive d’une membrane cellulaire.', vraie: true, justification: 'Exact, acquise par bourgeonnement à travers une membrane de la cellule hôte.' },
        { lettre: 'E', texte: 'Les virus nus sont généralement plus résistants dans l’environnement que les virus enveloppés.', vraie: true, justification: 'Exact, en raison de l’absence d’enveloppe lipidique fragile.' },
      ],
      correction: 'Réponses exactes : B, D et E. Le virus est dépourvu de métabolisme propre et ne possède qu’un seul type de génome.',
      difficulte: 1,
    },
    {
      id: 'ue5-virologie-generale-qcm-02',
      enonce: 'Concernant la classification de Baltimore, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle classe les virus selon la nature de leur génome.', vraie: true, justification: 'Exact : c’est le critère central de cette classification.' },
        { lettre: 'B', texte: 'Le VIH appartient au groupe des virus à ADN double brin.', vraie: false, justification: 'Le VIH est un rétrovirus, appartenant au groupe VI (ARN rétrotranscrit).' },
        { lettre: 'C', texte: 'Le virus de l’hépatite B est classé au groupe VII.', vraie: true, justification: 'Exact, en raison de sa réplication par un intermédiaire ARN à partir d’un génome ADN.' },
        { lettre: 'D', texte: 'Un ARN de polarité négative peut être traduit directement par les ribosomes cellulaires.', vraie: false, justification: 'Un ARN de polarité négative doit d’abord être transcrit en ARN messager par une polymérase virale.' },
        { lettre: 'E', texte: 'Le poliovirus possède un génome ARN simple brin de polarité positive.', vraie: true, justification: 'Exact, ce qui le classe au groupe IV.' },
      ],
      correction: 'Réponses exactes : A, C et E. La classification de Baltimore reflète la stratégie de production de l’ARN messager viral.',
      difficulte: 2,
    },
    {
      id: 'ue5-virologie-generale-qcm-03',
      enonce: 'Concernant le cycle de multiplication virale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’attachement précède la pénétration.', vraie: true, justification: 'Exact : c’est l’ordre chronologique du cycle viral.' },
        { lettre: 'B', texte: 'La décapsidation libère le génome viral.', vraie: true, justification: 'Exact, après dissociation de la capside.' },
        { lettre: 'C', texte: 'Le tropisme viral est indépendant du récepteur cellulaire.', vraie: false, justification: 'Le tropisme dépend au contraire fortement de la présence du récepteur spécifique reconnu par le virus.' },
        { lettre: 'D', texte: 'Les virus nus sont libérés uniquement par lyse cellulaire.', vraie: true, justification: 'Exact, contrairement aux virus enveloppés qui bourgeonnent souvent sans lyser immédiatement la cellule.' },
        { lettre: 'E', texte: 'L’assemblage précède la réplication du génome.', vraie: false, justification: 'La réplication et l’expression du génome précèdent l’assemblage des nouvelles particules virales.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir l’ordre logique des six étapes du cycle viral.',
      difficulte: 2,
    },
    {
      id: 'ue5-virologie-generale-qcm-04',
      enonce: 'Concernant le cycle des rétrovirus, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La transcriptase inverse copie l’ARN viral en ADN.', vraie: true, justification: 'Exact : c’est l’étape définitoire du cycle rétroviral.' },
        { lettre: 'B', texte: 'L’intégrase virale insère l’ADN proviral dans le génome de la cellule hôte.', vraie: true, justification: 'Exact, permettant une persistance durable du provirus.' },
        { lettre: 'C', texte: 'Le provirus intégré peut rester latent dans certaines cellules à longue durée de vie.', vraie: true, justification: 'Exact, notamment dans les lymphocytes T CD4 mémoires quiescents.' },
        { lettre: 'D', texte: 'Les traitements antirétroviraux actuels permettent d’éliminer totalement le réservoir viral latent.', vraie: false, justification: 'Ils contrôlent la réplication active mais n’éliminent pas le réservoir latent intégré.' },
        { lettre: 'E', texte: 'Le VIH possède un génome ADN dans la particule virale extracellulaire.', vraie: false, justification: 'Le VIH possède un génome ARN simple brin dans la particule virale ; l’ADN n’apparaît qu’après rétrotranscription intracellulaire.' },
      ],
      correction: 'Réponses exactes : A, B et C. Le réservoir latent explique l’impossibilité actuelle d’éradiquer le VIH.',
      difficulte: 2,
    },
    {
      id: 'ue5-virologie-generale-qcm-05',
      enonce: 'Concernant les antiviraux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’aciclovir est un inhibiteur de neuraminidase.', vraie: false, justification: 'L’aciclovir est un inhibiteur de la polymérase virale, analogue nucléosidique actif contre les herpèsvirus.' },
        { lettre: 'B', texte: 'Les inhibiteurs de protéase bloquent le clivage des polyprotéines virales précurseurs.', vraie: true, justification: 'Exact, utilisés notamment dans le traitement du VIH.' },
        { lettre: 'C', texte: 'Les inhibiteurs de neuraminidase sont utilisés dans le traitement de la grippe.', vraie: true, justification: 'Exact, en bloquant la libération des virions néoformés.' },
        { lettre: 'D', texte: 'Les inhibiteurs de la transcriptase inverse sont utilisés dans le traitement du VIH.', vraie: true, justification: 'Exact : ils bloquent l’étape de rétrotranscription indispensable au cycle rétroviral.' },
        { lettre: 'E', texte: 'Tous les antiviraux agissent en bloquant l’attachement viral.', vraie: false, justification: 'Les antiviraux ciblent des étapes très diverses du cycle viral, pas uniquement l’attachement.' },
      ],
      correction: 'Réponses exactes : B, C et D. Chaque classe d’antiviraux cible une étape précise du cycle viral.',
      difficulte: 2,
    },
    {
      id: 'ue5-virologie-generale-qcm-06',
      enonce: 'Concernant les virus médicalement importants, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le virus de l’hépatite C appartient à la famille des Flaviviridae.', vraie: true, justification: 'Exact, avec un génome ARN simple brin de polarité positive.' },
        { lettre: 'B', texte: 'Le virus varicelle-zona appartient à la famille des Herpesviridae.', vraie: true, justification: 'Exact, avec un génome ADN double brin.' },
        { lettre: 'C', texte: 'Le virus grippal possède un génome ARN simple brin de polarité positive.', vraie: false, justification: 'Le virus grippal possède un génome ARN simple brin de polarité négative.' },
        { lettre: 'D', texte: 'Les virus à ARN accumulent des mutations plus rapidement que les virus à ADN.', vraie: true, justification: 'Exact, en raison de l’absence de relecture efficace lors de la réplication.' },
        { lettre: 'E', texte: 'Cette variabilité explique la nécessité d’une mise à jour vaccinale régulière contre la grippe.', vraie: true, justification: 'Exact : la dérive antigénique du virus grippal impose une actualisation annuelle du vaccin.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. La variabilité génétique des virus à ARN a des conséquences cliniques et vaccinales majeures.',
      difficulte: 2,
    },
  ],
};
