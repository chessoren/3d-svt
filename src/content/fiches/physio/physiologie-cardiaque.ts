import type { Fiche } from '../../types';

export const fichePhysiologieCardiaque: Fiche = {
  id: 'physio-physiologie-cardiaque',
  ue: 'physio',
  titre: 'Physiologie cardiaque',
  sousTitre: 'Automatisme, électrocardiogramme et débit cardiaque',
  chapitre: 'Cardiovasculaire',
  ordre: 3,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'tissu nodal',
    'automatisme cardiaque',
    'électrocardiogramme',
    'couplage excitation-contraction',
    'révolution cardiaque',
    'débit cardiaque',
    'loi de Frank-Starling',
    'nœud sinusal',
  ],
  objectifs: [
    'Décrire l’organisation du tissu nodal et la hiérarchie de l’automatisme cardiaque.',
    'Relier les ondes de l’électrocardiogramme aux événements électriques du cœur.',
    'Expliquer le couplage excitation-contraction dans le cardiomyocyte.',
    'Décrire les phases de la révolution cardiaque (cycle cardiaque).',
    'Définir le débit cardiaque et énoncer la loi de Frank-Starling.',
  ],
  sections: [
    {
      id: 'tissu-nodal',
      titre: 'Le tissu nodal et l’automatisme cardiaque',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cœur possède la propriété unique d’automatisme : il génère spontanément et rythmiquement son propre influx électrique, indépendamment de toute innervation, grâce à un tissu spécialisé appelé tissu nodal, constitué de cellules myocardiques modifiées, capables de dépolarisation spontanée diastolique.",
        },
        {
          type: 'tableau',
          titre: 'Hiérarchie des centres d’automatisme',
          colonnes: ['Structure', 'Localisation', 'Fréquence intrinsèque', 'Statut'],
          lignes: [
            ['Nœud sinusal (nœud de Keith et Flack)', 'Paroi de l’oreillette droite, près de l’abouchement de la veine cave supérieure', 'environ 60 à 100 battements/min', 'Pacemaker physiologique dominant'],
            ['Nœud atrioventriculaire (nœud d’Aschoff-Tawara)', 'Partie basse du septum interatrial', 'environ 40 à 60 battements/min', 'Relais obligé, ralentit la conduction'],
            ['Faisceau de His et ses branches', 'Septum interventriculaire', 'environ 25 à 40 battements/min', 'Pacemaker de secours (rythme idioventriculaire)'],
            ['Réseau de Purkinje', 'Sous-endocarde ventriculaire', 'environ 20 à 40 battements/min', 'Diffusion rapide et synchrone de l’influx'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Pourquoi le nœud sinusal commande-t-il le rythme ?',
          texte:
            "Le nœud sinusal possède la fréquence de dépolarisation spontanée la plus élevée de tout le tissu nodal. Son influx dépolarise les structures situées en aval avant qu’elles n’atteignent elles-mêmes leur propre seuil, ce qui impose son rythme à l’ensemble du cœur : c’est le principe du pacemaker dominant.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le nœud atrioventriculaire ralentit physiologiquement la conduction de l’influx, ce qui introduit un délai indispensable entre la contraction des oreillettes et celle des ventricules, permettant le remplissage ventriculaire complet avant l’éjection.",
        },
      ],
    },
    {
      id: 'ecg',
      titre: 'L’électrocardiogramme',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’électrocardiogramme enregistre en surface la somme des potentiels électriques générés par la dépolarisation et la repolarisation du myocarde. Chaque onde correspond à un événement électrique précis, non à un événement mécanique.",
        },
        {
          type: 'tableau',
          titre: 'Correspondance ondes ECG et événements électriques',
          colonnes: ['Onde ou intervalle', 'Événement électrique', 'Durée usuelle'],
          lignes: [
            ['Onde P', 'Dépolarisation des oreillettes', 'environ 80 à 100 ms'],
            ['Intervalle PR', 'Conduction atrioventriculaire (retard nodal inclus)', 'environ 120 à 200 ms'],
            ['Complexe QRS', 'Dépolarisation des ventricules', 'moins de 120 ms'],
            ['Segment ST', 'Plateau de dépolarisation ventriculaire complète', 'isoélectrique à l’état normal'],
            ['Onde T', 'Repolarisation des ventricules', 'variable, asymétrique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'La repolarisation atriale est masquée',
          texte:
            "La repolarisation des oreillettes se produit électriquement mais son tracé, de faible amplitude, est masqué par le complexe QRS beaucoup plus ample de la dépolarisation ventriculaire : il n’existe donc pas d’onde visible dédiée à la repolarisation atriale sur l’ECG de surface.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Fréquence cardiaque de repos',
          texte:
            "La fréquence cardiaque de repos usuelle chez l’adulte est comprise entre 60 et 100 battements par minute. En dessous de 60/min, on parle de bradycardie ; au-dessus de 100/min, de tachycardie.",
        },
      ],
    },
    {
      id: 'couplage-excitation-contraction',
      titre: 'Couplage excitation-contraction cardiaque',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Contrairement au muscle squelettique, le cardiomyocyte a besoin d’un afflux de calcium extracellulaire pour déclencher la contraction, en plus du calcium libéré par le réticulum sarcoplasmique : c’est le mécanisme de libération de calcium induite par le calcium.",
        },
        {
          type: 'etapes',
          titre: 'Étapes du couplage excitation-contraction',
          etapes: [
            {
              titre: 'Dépolarisation du sarcolemme',
              detail:
                "Le potentiel d’action, propagé via les tubules transverses, dépolarise la membrane du cardiomyocyte et ouvre les canaux calciques voltage-dépendants de type L.",
            },
            {
              titre: 'Entrée de calcium extracellulaire',
              detail:
                "Une petite quantité de calcium pénètre dans la cellule par ces canaux, insuffisante à elle seule pour déclencher la contraction complète.",
            },
            {
              titre: 'Libération de calcium induite par le calcium',
              detail:
                "Ce calcium entrant active les récepteurs à la ryanodine du réticulum sarcoplasmique, provoquant une libération massive de calcium intracellulaire stocké.",
            },
            {
              titre: 'Contraction des myofilaments',
              detail:
                "Le calcium cytosolique se fixe sur la troponine C, levant l’inhibition exercée par la tropomyosine et permettant le glissement des filaments d’actine et de myosine.",
            },
            {
              titre: 'Relaxation',
              detail:
                "Le calcium est recapté vers le réticulum sarcoplasmique par la pompe SERCA et expulsé de la cellule par l’échangeur Na+/Ca2+ et la pompe calcique membranaire, ce qui permet la relaxation.",
            },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Particularité du potentiel d’action cardiaque ventriculaire',
          texte:
            "Le potentiel d’action du cardiomyocyte ventriculaire présente un plateau (phase 2) prolongé, soutenu par l’entrée de calcium via les canaux calciques de type L, qui équilibre transitoirement la sortie de potassium. Ce plateau explique la longue durée réfractaire du myocarde, qui empêche toute tétanisation cardiaque.",
        },
      ],
    },
    {
      id: 'revolution-cardiaque',
      titre: 'La révolution cardiaque',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La révolution cardiaque, ou cycle cardiaque, désigne l’ensemble des événements mécaniques et électriques se produisant entre deux battements successifs. Elle se divise classiquement en systole (contraction et éjection) et diastole (relaxation et remplissage).",
        },
        {
          type: 'etapes',
          titre: 'Phases principales du cycle cardiaque ventriculaire gauche',
          etapes: [
            {
              titre: 'Contraction isovolumétrique',
              detail:
                "Après fermeture de la valve mitrale, le ventricule se contracte à volume constant, les valves aortique et mitrale étant toutes deux fermées, jusqu’à ce que la pression ventriculaire dépasse la pression aortique.",
            },
            {
              titre: 'Éjection ventriculaire',
              detail:
                "La valve aortique s’ouvre et le sang est éjecté vers l’aorte, d’abord rapidement puis plus lentement, jusqu’à ce que la pression ventriculaire redevienne inférieure à la pression aortique.",
            },
            {
              titre: 'Relaxation isovolumétrique',
              detail:
                "La valve aortique se ferme ; le ventricule se relâche à volume constant, les deux valves étant fermées, jusqu’à ce que la pression ventriculaire passe sous la pression atriale.",
            },
            {
              titre: 'Remplissage ventriculaire',
              detail:
                "La valve mitrale s’ouvre : remplissage rapide passif, puis diastasis, puis contraction atriale (systole auriculaire) qui complète le remplissage juste avant la systole suivante.",
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Bruits du cœur et leur origine',
          colonnes: ['Bruit', 'Moment', 'Origine'],
          lignes: [
            ['B1', 'Début de systole ventriculaire', 'Fermeture des valves auriculoventriculaires (mitrale et tricuspide)'],
            ['B2', 'Début de diastole ventriculaire', 'Fermeture des valves sigmoïdes (aortique et pulmonaire)'],
          ],
        },
      ],
    },
    {
      id: 'debit-cardiaque',
      titre: 'Débit cardiaque et loi de Frank-Starling',
      blocs: [
        {
          type: 'definition',
          terme: 'Débit cardiaque',
          definition:
            "Volume de sang éjecté par le cœur par unité de temps, égal au produit du volume d’éjection systolique par la fréquence cardiaque. Chez l’adulte au repos, il vaut approximativement 5 L/min.",
        },
        {
          type: 'formule',
          expression: 'Débit cardiaque = volume d’éjection systolique × fréquence cardiaque',
          legende:
            'Relation fondamentale de l’hémodynamique cardiaque. Le volume d’éjection systolique de repos est d’environ 70 mL, pour une fréquence de repos autour de 70/min, soit un débit voisin de 5 L/min.',
          unites: 'L/min',
        },
        {
          type: 'paragraphe',
          texte:
            "Le volume d’éjection systolique dépend de trois déterminants principaux : la précharge (étirement des fibres myocardiques en fin de diastole), la postcharge (résistance à l’éjection, essentiellement la pression aortique) et la contractilité intrinsèque du myocarde (inotropisme).",
        },
        {
          type: 'definition',
          terme: 'Loi de Frank-Starling',
          definition:
            "Au sein de limites physiologiques, plus le volume télédiastolique ventriculaire (précharge) est important, plus l’étirement des fibres myocardiques est grand, et plus la force de contraction systolique et le volume d’éjection systolique augmentent. Ce mécanisme intrinsèque, indépendant de toute innervation, permet au cœur d’adapter automatiquement son débit au retour veineux et d’égaliser les débits des deux ventricules.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Ordres de grandeur hémodynamiques',
          texte:
            "Débit cardiaque de repos : environ 5 L/min. Volume d’éjection systolique : environ 70 mL. Fraction d’éjection ventriculaire gauche normale : supérieure ou égale à 50 à 55 %. Index cardiaque (débit cardiaque rapporté à la surface corporelle) : environ 2,5 à 4 L/min/m².",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Insuffisance cardiaque et loi de Frank-Starling',
          texte:
            "Dans l’insuffisance cardiaque, la courbe de Frank-Starling est déplacée vers le bas et vers la droite : pour un même volume télédiastolique, le volume d’éjection systolique obtenu est diminué, ce qui traduit une altération de la contractilité intrinsèque du myocarde.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le nœud sinusal est le pacemaker physiologique dominant grâce à sa fréquence de dépolarisation spontanée la plus élevée.",
    "Le nœud atrioventriculaire ralentit la conduction, ce qui synchronise la contraction atriale et ventriculaire.",
    "L’onde P correspond à la dépolarisation atriale, le complexe QRS à la dépolarisation ventriculaire, l’onde T à la repolarisation ventriculaire.",
    "Le couplage excitation-contraction cardiaque repose sur la libération de calcium induite par le calcium, à la différence du muscle squelettique.",
    "Le cycle cardiaque comprend contraction isovolumétrique, éjection, relaxation isovolumétrique et remplissage ventriculaire.",
    "Le débit cardiaque, environ 5 L/min au repos, est le produit du volume d’éjection systolique par la fréquence cardiaque.",
    "La loi de Frank-Starling relie l’étirement myocardique en fin de diastole (précharge) à la force de contraction systolique.",
    "Le plateau du potentiel d’action ventriculaire, soutenu par l’entrée de calcium, explique la longue période réfractaire cardiaque.",
  ],
  erreursFrequentes: [
    "Croire que le complexe QRS correspond à la contraction mécanique des ventricules : il correspond à leur dépolarisation électrique, la contraction suit avec un léger délai.",
    "Oublier que la repolarisation atriale existe mais reste masquée par le complexe QRS sur l’ECG de surface.",
    "Confondre B1 et B2 : B1 marque la fermeture des valves auriculoventriculaires en début de systole, B2 la fermeture des valves sigmoïdes en début de diastole.",
    "Penser que le couplage excitation-contraction cardiaque fonctionne comme dans le muscle squelettique, sans besoin de calcium extracellulaire.",
    "Confondre précharge et postcharge : la précharge est l’étirement diastolique du myocarde, la postcharge est la résistance à l’éjection.",
    "Croire que la loi de Frank-Starling dépend d’une innervation : il s’agit d’un mécanisme intrinsèque au myocarde, indépendant du système nerveux autonome.",
  ],
  mnemotechniques: [
    {
      moyen: '« P comme Petit, QRS comme gRoS »',
      explication:
        'L’onde P (petite, dépolarisation atriale) précède le complexe QRS (grande amplitude, dépolarisation ventriculaire).',
    },
    {
      moyen: '« B1 ferme les mitrales et tricuspides, B2 ferme les sigmoïdes »',
      explication:
        'B1 marque le début de la systole (fermeture des valves auriculoventriculaires), B2 marque le début de la diastole (fermeture des valves aortique et pulmonaire).',
    },
    {
      moyen: '« Plus ça s’étire, plus ça éjecte »',
      explication:
        'Résumé mnémotechnique de la loi de Frank-Starling : l’étirement diastolique du myocarde augmente la force de contraction systolique.',
    },
  ],
  sources: [
    'Guyton et Hall, Précis de physiologie médicale',
    'Silverthorn, Physiologie humaine, une approche intégrée',
    'Sherwood, Physiologie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'physio-physiologie-cardiaque-fc-01',
      recto: 'Quel est le pacemaker physiologique dominant du cœur ?',
      verso: 'Le nœud sinusal (nœud de Keith et Flack), situé dans la paroi de l’oreillette droite, avec une fréquence intrinsèque d’environ 60 à 100/min.',
      type: 'definition',
      tags: ['tissu nodal', 'nœud sinusal'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-02',
      recto: 'Pourquoi le nœud atrioventriculaire ralentit-il la conduction ?',
      verso: 'Pour introduire un délai entre contraction atriale et ventriculaire, permettant le remplissage ventriculaire complet avant l’éjection.',
      type: 'mecanisme',
      tags: ['nœud atrioventriculaire'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-03',
      recto: 'À quel événement électrique correspond l’onde P de l’ECG ?',
      verso: 'La dépolarisation des oreillettes.',
      type: 'definition',
      tags: ['ECG', 'onde P'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-04',
      recto: 'À quel événement électrique correspond l’onde T de l’ECG ?',
      verso: 'La repolarisation des ventricules.',
      type: 'definition',
      tags: ['ECG', 'onde T'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-05',
      recto: 'Pourquoi ne voit-on pas d’onde de repolarisation atriale sur l’ECG ?',
      verso: 'Parce qu’elle est de faible amplitude et se trouve masquée par le complexe QRS, de bien plus grande amplitude, survenant au même moment.',
      type: 'mecanisme',
      tags: ['ECG'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-06',
      recto: 'Qu’est-ce que la libération de calcium induite par le calcium dans le cardiomyocyte ?',
      verso: 'L’entrée de calcium extracellulaire par les canaux de type L déclenche la libération massive de calcium stocké dans le réticulum sarcoplasmique via les récepteurs à la ryanodine.',
      type: 'mecanisme',
      tags: ['couplage excitation-contraction'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-07',
      recto: 'Quelles sont les quatre phases du cycle cardiaque ventriculaire ?',
      verso: 'Contraction isovolumétrique, éjection, relaxation isovolumétrique, remplissage ventriculaire.',
      type: 'classification',
      tags: ['révolution cardiaque'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-08',
      recto: 'Que marque le bruit B1 du cœur ?',
      verso: 'La fermeture des valves auriculoventriculaires (mitrale et tricuspide), en début de systole ventriculaire.',
      type: 'definition',
      tags: ['bruits du cœur'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-09',
      recto: 'Donner la formule du débit cardiaque.',
      verso: 'Débit cardiaque = volume d’éjection systolique × fréquence cardiaque.',
      type: 'formule',
      tags: ['débit cardiaque'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-10',
      recto: 'Quelle est la valeur usuelle du débit cardiaque de repos ?',
      verso: 'Environ 5 L/min.',
      type: 'chiffre',
      tags: ['débit cardiaque'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-11',
      recto: 'Énoncer la loi de Frank-Starling.',
      verso: 'Plus le volume télédiastolique ventriculaire (précharge) est élevé, dans des limites physiologiques, plus la force de contraction systolique et le volume d’éjection systolique augmentent.',
      type: 'definition',
      tags: ['Frank-Starling'],
    },
    {
      id: 'physio-physiologie-cardiaque-fc-12',
      recto: 'Pourquoi le myocarde ne peut-il pas se tétaniser ?',
      verso: 'En raison du plateau prolongé du potentiel d’action ventriculaire, soutenu par l’entrée de calcium, qui impose une longue période réfractaire.',
      type: 'mecanisme',
      tags: ['potentiel d’action cardiaque'],
    },
  ],
  qcm: [
    {
      id: 'physio-physiologie-cardiaque-qcm-01',
      enonce: "Concernant le tissu nodal, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le nœud sinusal est situé dans le septum interventriculaire.',
          vraie: false,
          justification: "Faux : le nœud sinusal se situe dans la paroi de l’oreillette droite ; le septum interventriculaire contient le faisceau de His.",
        },
        {
          lettre: 'B',
          texte: 'Le nœud sinusal a la fréquence de dépolarisation spontanée la plus élevée du tissu nodal.',
          vraie: true,
          justification: 'Exact : c’est ce qui lui confère son rôle de pacemaker dominant.',
        },
        {
          lettre: 'C',
          texte: 'Le nœud atrioventriculaire accélère la conduction de l’influx.',
          vraie: false,
          justification: "Faux : il ralentit physiologiquement la conduction, introduisant un délai utile au remplissage ventriculaire.",
        },
        {
          lettre: 'D',
          texte: 'Le réseau de Purkinje diffuse rapidement l’influx dans les ventricules.',
          vraie: true,
          justification: 'Exact : il assure une dépolarisation ventriculaire rapide et synchrone.',
        },
        {
          lettre: 'E',
          texte: 'En cas de défaillance du nœud sinusal, aucun rythme cardiaque de secours n’est possible.',
          vraie: false,
          justification: "Faux : le faisceau de His ou le réseau de Purkinje peuvent prendre le relais avec une fréquence intrinsèque plus basse (rythme d’échappement).",
        },
      ],
      correction: 'Réponses exactes : B et D. La hiérarchie du tissu nodal assure la sécurité du rythme cardiaque.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-cardiaque-qcm-02',
      enonce: "Concernant l’électrocardiogramme, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'L’onde P correspond à la dépolarisation des oreillettes.',
          vraie: true,
          justification: 'Exact : elle traduit la propagation de l’onde de dépolarisation à travers le myocarde auriculaire, initiée par le nœud sinusal.',
        },
        {
          lettre: 'B',
          texte: 'Le complexe QRS correspond à la contraction mécanique des ventricules.',
          vraie: false,
          justification: 'Faux : il correspond à leur dépolarisation électrique, la contraction mécanique lui succède avec un bref délai.',
        },
        {
          lettre: 'C',
          texte: "L’intervalle PR inclut le délai de conduction au niveau du nœud atrioventriculaire.",
          vraie: true,
          justification: 'Exact : ce délai explique la durée relativement longue de cet intervalle.',
        },
        {
          lettre: 'D',
          texte: 'L’onde T correspond à la repolarisation atriale.',
          vraie: false,
          justification: 'Faux : l’onde T correspond à la repolarisation ventriculaire ; la repolarisation atriale est masquée par le QRS.',
        },
        {
          lettre: 'E',
          texte: 'La fréquence cardiaque de repos normale se situe entre 60 et 100 battements par minute.',
          vraie: true,
          justification: 'Exact : en dessous, on parle de bradycardie, au-dessus de tachycardie.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Retenir la correspondance stricte entre ondes ECG et événements électriques, non mécaniques.',
      difficulte: 1,
    },
    {
      id: 'physio-physiologie-cardiaque-qcm-03',
      enonce: "Concernant le couplage excitation-contraction cardiaque, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le calcium extracellulaire est indispensable au déclenchement normal de la contraction.',
          vraie: true,
          justification: "Exact, contrairement au muscle squelettique, via le mécanisme de libération de calcium induite par le calcium.",
        },
        {
          lettre: 'B',
          texte: 'Le calcium se fixe sur la troponine C pour permettre le glissement des filaments.',
          vraie: true,
          justification: 'Exact : cette fixation lève l’inhibition exercée par la tropomyosine sur les sites de fixation de la myosine.',
        },
        {
          lettre: 'C',
          texte: 'La pompe SERCA recapture le calcium cytosolique vers le réticulum sarcoplasmique lors de la relaxation.',
          vraie: true,
          justification: 'Exact : c’est un des mécanismes majeurs de la relaxation cardiaque.',
        },
        {
          lettre: 'D',
          texte: 'Le plateau du potentiel d’action ventriculaire est porté par une entrée de sodium prolongée.',
          vraie: false,
          justification: 'Faux : le plateau est principalement soutenu par l’entrée de calcium via les canaux calciques de type L.',
        },
        {
          lettre: 'E',
          texte: 'Le couplage excitation-contraction cardiaque est identique à celui du muscle squelettique.',
          vraie: false,
          justification: 'Faux : le muscle squelettique n’a pas besoin de calcium extracellulaire, à la différence du cardiomyocyte.',
        },
      ],
      correction: 'Réponses exactes : A, B et C. Le calcium extracellulaire est la spécificité majeure du couplage cardiaque.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-cardiaque-qcm-04',
      enonce: "Concernant la révolution cardiaque, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Pendant la contraction isovolumétrique, les deux valves ventriculaires gauches sont fermées.',
          vraie: true,
          justification: 'Exact : mitrale et aortique sont fermées, le volume ventriculaire reste donc constant.',
        },
        {
          lettre: 'B',
          texte: 'La valve aortique s’ouvre dès le début de la systole ventriculaire.',
          vraie: false,
          justification: "Faux : elle ne s’ouvre qu’une fois la pression ventriculaire supérieure à la pression aortique, après la phase de contraction isovolumétrique.",
        },
        {
          lettre: 'C',
          texte: 'B1 correspond à la fermeture des valves sigmoïdes.',
          vraie: false,
          justification: 'Faux : B1 correspond à la fermeture des valves auriculoventriculaires ; B2 correspond aux valves sigmoïdes.',
        },
        {
          lettre: 'D',
          texte: 'La systole auriculaire complète le remplissage ventriculaire juste avant la systole ventriculaire suivante.',
          vraie: true,
          justification: 'Exact : c’est la dernière phase du remplissage, parfois appelée « coup de piston auriculaire ».',
        },
        {
          lettre: 'E',
          texte: 'La relaxation isovolumétrique se produit à volume ventriculaire constant.',
          vraie: true,
          justification: 'Exact : les deux valves gauches sont fermées pendant cette phase.',
        },
      ],
      correction: 'Réponses exactes : A, D et E. Bien ordonner les quatre phases et l’état des valves à chaque étape.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-cardiaque-qcm-05',
      enonce: "Concernant le débit cardiaque, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Il est égal au produit du volume d’éjection systolique par la fréquence cardiaque.',
          vraie: true,
          justification: 'Exact : c’est la relation fondamentale de l’hémodynamique cardiaque.',
        },
        {
          lettre: 'B',
          texte: 'Sa valeur de repos usuelle est d’environ 5 L/min.',
          vraie: true,
          justification: 'Exact, pour un volume d’éjection systolique d’environ 70 mL et une fréquence d’environ 70/min.',
        },
        {
          lettre: 'C',
          texte: 'La postcharge correspond à l’étirement des fibres myocardiques en fin de diastole.',
          vraie: false,
          justification: "Faux : c’est la définition de la précharge ; la postcharge correspond à la résistance à l’éjection, essentiellement la pression aortique.",
        },
        {
          lettre: 'D',
          texte: 'L’index cardiaque rapporte le débit cardiaque à la surface corporelle.',
          vraie: true,
          justification: 'Exact, ce qui permet de comparer des individus de morphologie différente.',
        },
        {
          lettre: 'E',
          texte: 'La contractilité myocardique n’influence pas le volume d’éjection systolique.',
          vraie: false,
          justification: 'Faux : la contractilité (inotropisme) est l’un des trois déterminants majeurs du volume d’éjection systolique, avec la précharge et la postcharge.',
        },
      ],
      correction: 'Réponses exactes : A, B et D. Précharge, postcharge et contractilité déterminent conjointement le volume d’éjection systolique.',
      difficulte: 2,
    },
    {
      id: 'physio-physiologie-cardiaque-qcm-06',
      enonce: "Concernant la loi de Frank-Starling, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle décrit une relation entre volume télédiastolique et force de contraction systolique.',
          vraie: true,
          justification: 'Exact : c’est la définition même de la loi de Frank-Starling.',
        },
        {
          lettre: 'B',
          texte: 'Elle nécessite l’intervention du système nerveux autonome.',
          vraie: false,
          justification: "Faux : il s’agit d’un mécanisme intrinsèque au myocarde, indépendant de toute innervation.",
        },
        {
          lettre: 'C',
          texte: 'Elle permet d’égaliser les débits des ventricules droit et gauche.',
          vraie: true,
          justification: "Exact : c’est l’un de ses intérêts fonctionnels majeurs, essentiel puisque les deux ventricules sont en série.",
        },
        {
          lettre: 'D',
          texte: 'Dans l’insuffisance cardiaque, la courbe de Frank-Starling est déplacée vers le haut.',
          vraie: false,
          justification: 'Faux : elle est déplacée vers le bas et la droite, traduisant une contractilité diminuée pour un même volume télédiastolique.',
        },
        {
          lettre: 'E',
          texte: 'Elle repose sur l’étirement des sarcomères en fin de diastole.',
          vraie: true,
          justification: 'Exact : un étirement optimal des sarcomères améliore l’efficacité du couplage actine-myosine, dans les limites physiologiques.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. La loi de Frank-Starling est un mécanisme d’autorégulation intrinsèque, indépendant de l’innervation.',
      difficulte: 2,
    },
  ],
};
