import type { Fiche } from '../../types';

export const ficheNeurophysiologie: Fiche = {
  id: 'physio-neurophysiologie',
  ue: 'physio',
  titre: 'Neurophysiologie',
  sousTitre: 'Synapse chimique, arc réflexe et système nerveux autonome',
  chapitre: 'Neuromusculaire',
  ordre: 13,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'synapse chimique',
    'neurotransmetteurs',
    'sommation synaptique',
    'arc réflexe',
    'voies sensitives',
    'voies motrices',
    'système sympathique',
    'système parasympathique',
  ],
  objectifs: [
    'Décrire les étapes de la transmission synaptique chimique.',
    'Distinguer sommation spatiale et sommation temporelle.',
    'Décrire les composants et le fonctionnement d’un arc réflexe simple.',
    'Décrire l’organisation générale des grandes voies sensitives et motrices.',
    'Comparer l’organisation et les effets du système nerveux sympathique et parasympathique.',
  ],
  sections: [
    {
      id: 'synapse-chimique',
      titre: 'La synapse chimique',
      blocs: [
        {
          type: 'definition',
          terme: 'Synapse chimique',
          definition:
            "Zone de contact fonctionnel entre un neurone présynaptique et un neurone (ou une cellule effectrice) postsynaptique, où l’information est transmise par la libération d’un messager chimique, le neurotransmetteur, dans la fente synaptique.",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la transmission synaptique chimique',
          etapes: [
            {
              titre: 'Dépolarisation présynaptique',
              detail:
                "Le potentiel d’action atteint la terminaison présynaptique et ouvre des canaux calciques voltage-dépendants.",
            },
            {
              titre: 'Exocytose du neurotransmetteur',
              detail:
                "L’entrée de calcium déclenche la fusion des vésicules synaptiques avec la membrane présynaptique et la libération du neurotransmetteur dans la fente synaptique par exocytose.",
            },
            {
              titre: 'Fixation sur les récepteurs postsynaptiques',
              detail:
                "Le neurotransmetteur diffuse à travers la fente synaptique et se fixe sur des récepteurs spécifiques de la membrane postsynaptique, ionotropes (canaux ioniques directement couplés) ou métabotropes (couplés à une protéine G).",
            },
            {
              titre: 'Réponse postsynaptique',
              detail:
                "L’ouverture de canaux ioniques génère un potentiel postsynaptique local, excitateur (dépolarisant) ou inhibiteur (hyperpolarisant), selon la nature du récepteur et de l’ion mobilisé.",
            },
            {
              titre: 'Inactivation du signal',
              detail:
                "Le neurotransmetteur est éliminé de la fente synaptique par dégradation enzymatique, recapture présynaptique ou diffusion, ce qui limite la durée du signal.",
            },
          ],
        },
        {
          type: 'tableau',
          titre: 'Grands neurotransmetteurs et leur effet dominant',
          colonnes: ['Neurotransmetteur', 'Effet dominant', 'Exemple de localisation'],
          lignes: [
            ['Glutamate', 'Excitateur (récepteurs AMPA, NMDA)', 'Principal neurotransmetteur excitateur du système nerveux central'],
            ['GABA', 'Inhibiteur (récepteurs GABA-A, GABA-B)', 'Principal neurotransmetteur inhibiteur du système nerveux central'],
            ['Glycine', 'Inhibiteur', 'Moelle épinière, tronc cérébral'],
            ['Acétylcholine', 'Excitateur ou modulateur selon le récepteur', 'Jonction neuromusculaire, système nerveux autonome'],
            ['Noradrénaline', 'Excitateur ou inhibiteur selon le récepteur', 'Système nerveux sympathique, locus cœruleus'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le sens du potentiel postsynaptique dépend du récepteur, pas seulement du neurotransmetteur',
          texte:
            "Un même neurotransmetteur peut être excitateur ou inhibiteur selon le type de récepteur postsynaptique qu’il active et l’ion qu’il mobilise. L’acétylcholine, par exemple, est excitatrice à la jonction neuromusculaire (récepteurs nicotiniques) mais peut avoir un effet inhibiteur cardiaque (récepteurs muscariniques M2, ouvrant des canaux K+).",
        },
      ],
    },
    {
      id: 'sommation',
      titre: 'Sommation synaptique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Un potentiel postsynaptique unique est en général de faible amplitude et insuffisant pour déclencher un potentiel d’action au niveau du segment initial de l’axone. Le neurone intègre en permanence de multiples signaux synaptiques, excitateurs et inhibiteurs, selon deux modalités de sommation.",
        },
        {
          type: 'comparaison',
          titre: 'Sommation temporelle et sommation spatiale',
          gauche: {
            titre: 'Sommation temporelle',
            points: [
              'Addition de potentiels postsynaptiques successifs issus d’une même synapse.',
              'Se produit lorsque les potentiels se chevauchent dans le temps, à fréquence de stimulation élevée.',
              'Dépend de la constante de temps de la membrane postsynaptique.',
            ],
          },
          droite: {
            titre: 'Sommation spatiale',
            points: [
              'Addition simultanée de potentiels postsynaptiques issus de synapses différentes.',
              'Se produit lorsque plusieurs entrées synaptiques sont actives en même temps sur le même neurone.',
              'Dépend de la distance et de la constante d’espace de la membrane.',
            ],
          },
        },
        {
          type: 'definition',
          terme: 'Intégration synaptique',
          definition:
            "Processus par lequel le neurone postsynaptique additionne algébriquement l’ensemble des potentiels postsynaptiques excitateurs (dépolarisants) et inhibiteurs (hyperpolarisants) qu’il reçoit à un instant donné, au niveau du segment initial de l’axone, pour déterminer si le seuil de déclenchement d’un potentiel d’action est atteint.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Inhibition et sécurité fonctionnelle',
          texte:
            "L’inhibition synaptique n’est pas un simple frein passif : elle module activement le gain et la précision temporelle de l’intégration neuronale, et protège le système nerveux central d’une excitation excessive, potentiellement délétère (comme dans certaines formes d’épilepsie liées à un déficit d’inhibition GABAergique).",
        },
      ],
    },
    {
      id: 'arc-reflexe',
      titre: 'L’arc réflexe',
      blocs: [
        {
          type: 'definition',
          terme: 'Réflexe',
          definition:
            "Réponse motrice stéréotypée, rapide et involontaire, déclenchée par un stimulus sensoriel spécifique, sans intervention nécessaire du contrôle cortical volontaire.",
        },
        {
          type: 'tableau',
          titre: 'Les cinq composants de l’arc réflexe',
          colonnes: ['Composant', 'Rôle'],
          lignes: [
            ['Récepteur sensoriel', 'Détecte le stimulus et le transforme en signal électrique'],
            ['Voie afférente', 'Neurone sensitif qui conduit l’information vers le système nerveux central'],
            ['Centre d’intégration', 'Moelle épinière ou tronc cérébral, où se fait la synapse (directe ou via des interneurones)'],
            ['Voie efférente', 'Motoneurone qui conduit la commande vers l’effecteur'],
            ['Effecteur', 'Muscle ou glande qui exécute la réponse'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "Le réflexe monosynaptique, comme le réflexe myotatique (réflexe achilléen ou rotulien), ne comprend qu’une seule synapse entre le neurone afférent sensitif et le motoneurone efférent, ce qui explique sa latence particulièrement courte. La plupart des réflexes sont toutefois polysynaptiques, impliquant un ou plusieurs interneurones entre l’afférence et l’efférence.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le réflexe myotatique en pratique clinique',
          texte:
            "L’étirement rapide d’un tendon (percussion au marteau réflexe) active les fuseaux neuromusculaires, dont l’afférence Ia fait synapse directement sur le motoneurone alpha du même muscle, provoquant sa contraction réflexe. L’examen de ce réflexe ostéotendineux renseigne sur l’intégrité de l’arc réflexe médullaire correspondant.",
        },
      ],
    },
    {
      id: 'voies-sensitives-motrices',
      titre: 'Organisation générale des voies sensitives et motrices',
      blocs: [
        {
          type: 'tableau',
          titre: 'Grandes voies sensitives ascendantes',
          colonnes: ['Voie', 'Modalité transportée', 'Particularité de décussation'],
          lignes: [
            ['Voie lemniscale (cordons postérieurs)', 'Tact fin, proprioception, vibration', 'Décussation tardive, au niveau du bulbe rachidien'],
            ['Voie spinothalamique (antérolatérale)', 'Douleur, température, tact grossier', 'Décussation précoce, au niveau médullaire, un à deux segments au-dessus de l’entrée'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Grandes voies motrices descendantes',
          colonnes: ['Voie', 'Fonction principale', 'Particularité de décussation'],
          lignes: [
            ['Voie corticospinale (pyramidale)', 'Commande motrice volontaire, fine, distale', 'Décussation principale au niveau bulbaire (décussation des pyramides)'],
            ['Voies extrapyramidales (rubrospinale, réticulospinale, vestibulospinale)', 'Contrôle postural, tonus musculaire, mouvements automatiques', 'Décussations variables selon la voie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Conséquence clinique de la décussation',
          texte:
            "Toutes les grandes voies sensitives et motrices majeures décussent, ce qui explique qu’une lésion cérébrale unilatérale entraîne des déficits sensitifs et moteurs controlatéraux (du côté opposé à la lésion), alors qu’une lésion médullaire entraîne des déficits ipsilatéraux ou controlatéraux selon la voie atteinte et son niveau de décussation.",
        },
      ],
    },
    {
      id: 'systeme-nerveux-autonome',
      titre: 'Système nerveux autonome : sympathique et parasympathique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le système nerveux autonome régule les fonctions viscérales involontaires. Il comprend deux branches classiquement antagonistes, le système sympathique et le système parasympathique, qui innervent conjointement la plupart des organes cibles.",
        },
        {
          type: 'tableau',
          titre: 'Organisation anatomique comparée',
          colonnes: ['Caractéristique', 'Système sympathique', 'Système parasympathique'],
          lignes: [
            ['Origine médullaire', 'Thoraco-lombaire (T1 à L2-L3)', 'Craniosacrée (nerfs crâniens III, VII, IX, X et sacré S2-S4)'],
            ['Longueur des fibres', 'Fibre préganglionnaire courte, fibre postganglionnaire longue', 'Fibre préganglionnaire longue, fibre postganglionnaire courte'],
            ['Localisation des ganglions', 'Proches de la moelle (chaîne latérovertébrale) ou prévertébraux', 'Proches ou au sein de l’organe cible'],
            ['Neurotransmetteur préganglionnaire', 'Acétylcholine (récepteur nicotinique)', 'Acétylcholine (récepteur nicotinique)'],
            ['Neurotransmetteur postganglionnaire', 'Noradrénaline (majoritaire) sur récepteurs adrénergiques', 'Acétylcholine sur récepteurs muscariniques'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Effets comparés sur quelques organes cibles',
          colonnes: ['Organe', 'Effet sympathique', 'Effet parasympathique'],
          lignes: [
            ['Cœur (fréquence et contractilité)', 'Augmentation', 'Diminution'],
            ['Bronches', 'Bronchodilatation', 'Bronchoconstriction'],
            ['Pupille', 'Mydriase (dilatation)', 'Myosis (constriction)'],
            ['Motricité et sécrétions digestives', 'Diminution', 'Augmentation'],
            ['Vessie (détrusor et sphincter)', 'Relâchement du détrusor, contraction du sphincter (continence)', 'Contraction du détrusor, relâchement du sphincter (miction)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: '« Combat ou fuite » versus « repos et digestion »',
          texte:
            "Le système sympathique prépare l’organisme à l’action face à une situation d’urgence perçue (fight or flight) : accélération cardiaque, bronchodilatation, mydriase, redistribution du débit sanguin vers les muscles squelettiques au détriment du tube digestif. Le système parasympathique favorise à l’inverse les fonctions de repos, de digestion et de restauration des réserves énergétiques (rest and digest).",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Exception médullosurrénalienne',
          texte:
            "La médullosurrénale constitue un cas particulier : elle est directement innervée par des fibres préganglionnaires sympathiques cholinergiques, sans relais ganglionnaire postganglionnaire classique, et sécrète directement de l’adrénaline et de la noradrénaline dans la circulation générale, agissant alors comme une hormone plutôt que comme un neurotransmetteur synaptique local.",
        },
      ],
    },
  ],
  pointsCles: [
    "La transmission synaptique chimique repose sur la libération calcium-dépendante d’un neurotransmetteur, qui active des récepteurs ionotropes ou métabotropes postsynaptiques.",
    "Le sens excitateur ou inhibiteur d’un potentiel postsynaptique dépend du récepteur activé, pas uniquement du neurotransmetteur lui-même.",
    "La sommation temporelle additionne des potentiels successifs d’une même synapse ; la sommation spatiale additionne des potentiels de synapses différentes actives simultanément.",
    "Un arc réflexe comprend cinq composants : récepteur, voie afférente, centre d’intégration, voie efférente et effecteur.",
    "Le réflexe myotatique est monosynaptique, ce qui explique sa latence très courte.",
    "Les grandes voies sensitives et motrices majeures décussent, expliquant les déficits controlatéraux des lésions cérébrales unilatérales.",
    "Le système sympathique (thoraco-lombaire, noradrénergique postganglionnaire) et le système parasympathique (craniosacré, cholinergique postganglionnaire) ont des effets généralement antagonistes.",
    "La médullosurrénale est une exception anatomique, directement innervée par des fibres sympathiques préganglionnaires et sécrétant catécholamines dans la circulation.",
  ],
  erreursFrequentes: [
    "Croire qu’un neurotransmetteur donné est toujours excitateur ou toujours inhibiteur : son effet dépend du récepteur postsynaptique activé.",
    "Confondre sommation temporelle (potentiels successifs d’une même synapse) et sommation spatiale (potentiels simultanés de synapses différentes).",
    "Penser que tous les réflexes sont monosynaptiques : la majorité des réflexes sont polysynaptiques, impliquant des interneurones.",
    "Oublier que la voie spinothalamique décusse précocement au niveau médullaire, à la différence de la voie lemniscale qui décusse tardivement au niveau bulbaire.",
    "Croire que le neurotransmetteur postganglionnaire est le même dans les deux branches du système nerveux autonome : c’est la noradrénaline pour le sympathique, l’acétylcholine pour le parasympathique.",
    "Oublier l’exception de la médullosurrénale, innervée directement par des fibres préganglionnaires sympathiques sans relais postganglionnaire classique.",
  ],
  mnemotechniques: [
    {
      moyen: '« Récepteur, pas transmetteur, décide du signe »',
      explication:
        'Le caractère excitateur ou inhibiteur d’une synapse dépend du récepteur postsynaptique activé, non de la nature intrinsèque du neurotransmetteur.',
    },
    {
      moyen: '« RAVIE » pour l’arc réflexe',
      explication:
        'Récepteur, Afférence, Voie d’intégration (centre), Voie efférente, Effecteur : les cinq composants de tout arc réflexe.',
    },
    {
      moyen: '« Fuite ou combat / repos et digestion »',
      explication:
        'Résumé des effets globaux opposés du système sympathique (fight or flight) et du système parasympathique (rest and digest).',
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
      id: 'physio-neurophysiologie-fc-01',
      recto: 'Quelle est la première étape de la transmission synaptique chimique après l’arrivée du potentiel d’action présynaptique ?',
      verso: 'L’ouverture de canaux calciques voltage-dépendants et l’entrée de calcium dans la terminaison présynaptique.',
      type: 'mecanisme',
      tags: ['synapse chimique'],
    },
    {
      id: 'physio-neurophysiologie-fc-02',
      recto: 'Quel est le principal neurotransmetteur excitateur du système nerveux central ?',
      verso: 'Le glutamate.',
      type: 'definition',
      tags: ['neurotransmetteurs'],
    },
    {
      id: 'physio-neurophysiologie-fc-03',
      recto: 'Quel est le principal neurotransmetteur inhibiteur du système nerveux central ?',
      verso: 'Le GABA (acide gamma-aminobutyrique).',
      type: 'definition',
      tags: ['neurotransmetteurs'],
    },
    {
      id: 'physio-neurophysiologie-fc-04',
      recto: 'Qu’est-ce que la sommation temporelle ?',
      verso: 'L’addition de potentiels postsynaptiques successifs issus d’une même synapse, lorsqu’ils se chevauchent dans le temps.',
      type: 'definition',
      tags: ['sommation'],
    },
    {
      id: 'physio-neurophysiologie-fc-05',
      recto: 'Qu’est-ce que la sommation spatiale ?',
      verso: 'L’addition simultanée de potentiels postsynaptiques issus de synapses différentes actives en même temps sur le même neurone.',
      type: 'definition',
      tags: ['sommation'],
    },
    {
      id: 'physio-neurophysiologie-fc-06',
      recto: 'Citer les cinq composants d’un arc réflexe.',
      verso: 'Récepteur sensoriel, voie afférente, centre d’intégration, voie efférente, effecteur.',
      type: 'classification',
      tags: ['arc réflexe'],
    },
    {
      id: 'physio-neurophysiologie-fc-07',
      recto: 'Pourquoi le réflexe myotatique a-t-il une latence particulièrement courte ?',
      verso: 'Parce qu’il est monosynaptique : l’afférence Ia du fuseau neuromusculaire fait synapse directement sur le motoneurone alpha.',
      type: 'mecanisme',
      tags: ['réflexe myotatique'],
    },
    {
      id: 'physio-neurophysiologie-fc-08',
      recto: 'Où décusse la voie spinothalamique ?',
      verso: 'Précocement, au niveau médullaire, un à deux segments au-dessus de son entrée.',
      type: 'definition',
      tags: ['voies sensitives'],
    },
    {
      id: 'physio-neurophysiologie-fc-09',
      recto: 'Quel est le neurotransmetteur postganglionnaire du système sympathique ?',
      verso: 'La noradrénaline (majoritairement), sur des récepteurs adrénergiques.',
      type: 'definition',
      tags: ['système sympathique'],
    },
    {
      id: 'physio-neurophysiologie-fc-10',
      recto: 'Quel est le neurotransmetteur postganglionnaire du système parasympathique ?',
      verso: 'L’acétylcholine, sur des récepteurs muscariniques.',
      type: 'definition',
      tags: ['système parasympathique'],
    },
    {
      id: 'physio-neurophysiologie-fc-11',
      recto: 'Quel est l’effet du système sympathique sur la fréquence cardiaque et les bronches ?',
      verso: 'Augmentation de la fréquence cardiaque et bronchodilatation.',
      type: 'mecanisme',
      tags: ['système sympathique'],
    },
    {
      id: 'physio-neurophysiologie-fc-12',
      recto: 'Qu’a de particulier l’innervation de la médullosurrénale ?',
      verso: 'Elle est innervée directement par des fibres préganglionnaires sympathiques cholinergiques, sans relais postganglionnaire classique, et sécrète adrénaline et noradrénaline comme des hormones.',
      type: 'definition',
      tags: ['médullosurrénale'],
    },
  ],
  qcm: [
    {
      id: 'physio-neurophysiologie-qcm-01',
      enonce: "Concernant la transmission synaptique chimique, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'L’entrée de calcium dans la terminaison présynaptique déclenche l’exocytose du neurotransmetteur.',
          vraie: true,
          justification: 'Exact : la dépolarisation de la terminaison ouvre des canaux calciques voltage-dépendants, et l’afflux de calcium provoque la fusion des vésicules synaptiques avec la membrane présynaptique.',
        },
        {
          lettre: 'B',
          texte: 'Les récepteurs ionotropes sont couplés à une protéine G.',
          vraie: false,
          justification: "Faux : ce sont les récepteurs métabotropes qui sont couplés à une protéine G ; les récepteurs ionotropes sont des canaux ioniques directement activés.",
        },
        {
          lettre: 'C',
          texte: 'Un neurotransmetteur donné produit toujours le même effet, excitateur ou inhibiteur, quel que soit le récepteur activé.',
          vraie: false,
          justification: "Faux : l’effet dépend du récepteur postsynaptique et de l’ion mobilisé, pas seulement du neurotransmetteur.",
        },
        {
          lettre: 'D',
          texte: 'Le glutamate est le principal neurotransmetteur excitateur du système nerveux central.',
          vraie: true,
          justification: 'Exact : il agit sur des récepteurs ionotropes (AMPA, NMDA) présents dans la quasi-totalité des circuits excitateurs du système nerveux central.',
        },
        {
          lettre: 'E',
          texte: 'Le neurotransmetteur reste indéfiniment actif dans la fente synaptique.',
          vraie: false,
          justification: "Faux : il est rapidement inactivé par dégradation enzymatique, recapture ou diffusion.",
        },
      ],
      correction: 'Réponses exactes : A et D. La transmission synaptique chimique est un processus rapide, calcium-dépendant et précisément régulé.',
      difficulte: 2,
    },
    {
      id: 'physio-neurophysiologie-qcm-02',
      enonce: "Concernant la sommation synaptique, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La sommation temporelle additionne des potentiels postsynaptiques issus de synapses différentes.',
          vraie: false,
          justification: "Faux : c’est la définition de la sommation spatiale ; la sommation temporelle concerne des potentiels successifs d’une même synapse.",
        },
        {
          lettre: 'B',
          texte: 'La sommation spatiale nécessite l’activation simultanée de plusieurs synapses.',
          vraie: true,
          justification: 'Exact : elle résulte de l’addition de potentiels postsynaptiques générés au même moment par des synapses différentes, convergeant sur le même neurone.',
        },
        {
          lettre: 'C',
          texte: 'Un potentiel postsynaptique unique est en général suffisant pour déclencher un potentiel d’action.',
          vraie: false,
          justification: "Faux : il est en général de faible amplitude et insuffisant seul ; l’intégration de plusieurs signaux est nécessaire.",
        },
        {
          lettre: 'D',
          texte: 'L’intégration synaptique additionne algébriquement potentiels excitateurs et inhibiteurs.',
          vraie: true,
          justification: 'Exact, au niveau du segment initial de l’axone.',
        },
        {
          lettre: 'E',
          texte: 'L’inhibition synaptique ne joue aucun rôle fonctionnel utile.',
          vraie: false,
          justification: "Faux : elle module activement l’intégration neuronale et protège contre une excitation excessive.",
        },
      ],
      correction: 'Réponses exactes : B et D. Le neurone intègre en permanence de multiples signaux excitateurs et inhibiteurs.',
      difficulte: 2,
    },
    {
      id: 'physio-neurophysiologie-qcm-03',
      enonce: "Concernant l’arc réflexe, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Un arc réflexe comprend un récepteur, une voie afférente, un centre d’intégration, une voie efférente et un effecteur.',
          vraie: true,
          justification: 'Exact, ce sont ses cinq composants classiques.',
        },
        {
          lettre: 'B',
          texte: 'Tous les réflexes sont monosynaptiques.',
          vraie: false,
          justification: "Faux : la plupart des réflexes sont polysynaptiques ; seul le réflexe myotatique est classiquement monosynaptique.",
        },
        {
          lettre: 'C',
          texte: 'Le réflexe myotatique implique une afférence Ia issue du fuseau neuromusculaire.',
          vraie: true,
          justification: 'Exact : l’étirement du muscle active les fibres Ia du fuseau neuromusculaire, qui font directement synapse avec le motoneurone alpha du même muscle.',
        },
        {
          lettre: 'D',
          texte: 'Un réflexe nécessite obligatoirement l’intervention du cortex cérébral.',
          vraie: false,
          justification: "Faux : un réflexe est par définition involontaire et ne nécessite pas d’intervention corticale.",
        },
        {
          lettre: 'E',
          texte: 'Le centre d’intégration d’un réflexe spinal se situe dans la moelle épinière.',
          vraie: true,
          justification: 'Exact : c’est ce qui distingue le réflexe spinal, dont l’intégration s’effectue au niveau médullaire sans relais encéphalique, d’une réponse volontaire.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Le réflexe est une réponse rapide, stéréotypée, ne nécessitant pas de traitement cortical volontaire.',
      difficulte: 1,
    },
    {
      id: 'physio-neurophysiologie-qcm-04',
      enonce: "Concernant les grandes voies sensitives et motrices, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'La voie lemniscale transporte le tact fin et la proprioception.',
          vraie: true,
          justification: 'Exact : les cordons postérieurs de la moelle véhiculent le tact fin discriminatif, la proprioception consciente et la sensibilité vibratoire.',
        },
        {
          lettre: 'B',
          texte: 'La voie spinothalamique transporte la douleur et la température.',
          vraie: true,
          justification: 'Exact : ses fibres croisent la ligne médiane au niveau médullaire peu après leur entrée, puis montent dans le cordon antérolatéral controlatéral jusqu’au thalamus.',
        },
        {
          lettre: 'C',
          texte: 'La voie lemniscale décusse précocement au niveau médullaire.',
          vraie: false,
          justification: "Faux : elle décusse tardivement, au niveau du bulbe rachidien, à la différence de la voie spinothalamique.",
        },
        {
          lettre: 'D',
          texte: 'La voie corticospinale décusse principalement au niveau bulbaire.',
          vraie: true,
          justification: 'Exact, au niveau de la décussation des pyramides.',
        },
        {
          lettre: 'E',
          texte: 'Une lésion cérébrale unilatérale entraîne classiquement des déficits sensitifs et moteurs ipsilatéraux.',
          vraie: false,
          justification: "Faux : elle entraîne classiquement des déficits controlatéraux, du fait de la décussation des grandes voies.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. Les deux grandes voies sensitives décussent à des niveaux différents.',
      difficulte: 2,
    },
    {
      id: 'physio-neurophysiologie-qcm-05',
      enonce: "Concernant l’organisation du système nerveux autonome, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le système sympathique a une origine médullaire thoraco-lombaire.',
          vraie: true,
          justification: 'Exact, de T1 à L2-L3 environ.',
        },
        {
          lettre: 'B',
          texte: 'Le système parasympathique a une origine craniosacrée.',
          vraie: true,
          justification: 'Exact, via les nerfs crâniens III, VII, IX, X et les racines sacrées S2-S4.',
        },
        {
          lettre: 'C',
          texte: 'Le neurotransmetteur préganglionnaire est différent entre système sympathique et parasympathique.',
          vraie: false,
          justification: "Faux : c’est l’acétylcholine dans les deux cas au niveau préganglionnaire ; c’est le neurotransmetteur postganglionnaire qui diffère.",
        },
        {
          lettre: 'D',
          texte: 'Les ganglions sympathiques sont généralement proches de la moelle épinière.',
          vraie: true,
          justification: 'Exact, au niveau de la chaîne latérovertébrale ou des ganglions prévertébraux.',
        },
        {
          lettre: 'E',
          texte: 'Les ganglions parasympathiques sont généralement proches de la moelle épinière.',
          vraie: false,
          justification: "Faux : ils sont généralement proches ou au sein de l’organe cible.",
        },
      ],
      correction: 'Réponses exactes : A, B et D. L’organisation anatomique distingue nettement les deux branches du système nerveux autonome.',
      difficulte: 2,
    },
    {
      id: 'physio-neurophysiologie-qcm-06',
      enonce: "Concernant les effets comparés du système sympathique et parasympathique, quelles propositions sont exactes ?",
      propositions: [
        {
          lettre: 'A',
          texte: 'Le système sympathique provoque une mydriase.',
          vraie: true,
          justification: 'Exact, dilatation pupillaire.',
        },
        {
          lettre: 'B',
          texte: 'Le système parasympathique augmente la fréquence cardiaque.',
          vraie: false,
          justification: 'Faux : le parasympathique diminue la fréquence cardiaque ; c’est le sympathique qui l’augmente.',
        },
        {
          lettre: 'C',
          texte: 'Le système parasympathique stimule la motricité et les sécrétions digestives.',
          vraie: true,
          justification: 'Exact, conformément à sa fonction de repos et digestion.',
        },
        {
          lettre: 'D',
          texte: 'La médullosurrénale est innervée par des fibres postganglionnaires sympathiques classiques.',
          vraie: false,
          justification: "Faux : elle est innervée directement par des fibres préganglionnaires sympathiques cholinergiques, sans relais postganglionnaire classique.",
        },
        {
          lettre: 'E',
          texte: 'Le système parasympathique favorise la contraction du détrusor vésical, permettant la miction.',
          vraie: true,
          justification: 'Exact, alors que le système sympathique favorise la continence.',
        },
      ],
      correction: 'Réponses exactes : A, C et E. Les effets sympathique et parasympathique sont généralement antagonistes sur un même organe.',
      difficulte: 2,
    },
  ],
};
