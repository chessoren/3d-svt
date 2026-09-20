import type { Fiche } from '../../types';

export const ficheReticulumGolgi: Fiche = {
  id: 'biocell-reticulum-golgi',
  ue: 'biocell',
  titre: 'Réticulum endoplasmique et appareil de Golgi',
  sousTitre: 'RE rugueux et lisse, translocation, peptide signal, glycosylation, contrôle qualité et maturation golgienne',
  chapitre: 'Compartiments et trafic',
  ordre: 7,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'réticulum endoplasmique',
    'peptide signal',
    'translocation',
    'glycosylation',
    'appareil de Golgi',
    'citerne golgienne',
    'contrôle qualité',
    'tri des protéines',
  ],
  objectifs: [
    'Différencier réticulum endoplasmique rugueux et réticulum endoplasmique lisse sur le plan structural et fonctionnel.',
    'Décrire le mécanisme de translocation cotraductionnelle d’une protéine dans le réticulum endoplasmique.',
    'Expliquer le principe de la N-glycosylation et son rôle dans le contrôle qualité des protéines.',
    'Décrire l’organisation en citernes de l’appareil de Golgi et le sens de progression des protéines.',
    'Expliquer les principaux mécanismes de tri des protéines à la sortie du Golgi.',
  ],
  sections: [
    {
      id: 're-rugueux-lisse',
      titre: 'Réticulum endoplasmique rugueux et lisse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le réticulum endoplasmique est un réseau membranaire continu, en continuité directe avec l’enveloppe nucléaire, qui forme le point d’entrée de la voie de sécrétion. On en distingue deux domaines, le réticulum endoplasmique rugueux et le réticulum endoplasmique lisse.",
        },
        {
          type: 'comparaison',
          titre: 'Réticulum endoplasmique rugueux et lisse',
          gauche: {
            titre: 'Réticulum endoplasmique rugueux',
            points: [
              'Membrane tapissée de ribosomes sur sa face cytosolique',
              'Site de synthèse des protéines sécrétées, membranaires et destinées aux organites de la voie endomembranaire',
              'Site initial de la N-glycosylation',
            ],
          },
          droite: {
            titre: 'Réticulum endoplasmique lisse',
            points: [
              'Dépourvu de ribosomes associés',
              'Site majeur de la synthèse des lipides et du métabolisme des stéroïdes',
              'Impliqué dans la détoxification (cytochromes P450) et le stockage du calcium (réticulum sarcoplasmique dans le muscle)',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un même compartiment, deux domaines',
          texte:
            "Réticulum rugueux et réticulum lisse forment un seul compartiment continu, en continuité de lumière ; la proportion de chaque domaine varie selon le type cellulaire et son activité, par exemple un réticulum lisse très développé dans les cellules stéroïdogènes de la corticosurrénale.",
        },
      ],
    },
    {
      id: 'translocation-peptide-signal',
      titre: 'Translocation et peptide signal',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’adressage cotraductionnel d’une protéine au réticulum endoplasmique repose sur la reconnaissance d’un peptide signal, en général situé à l’extrémité N-terminale de la protéine naissante, par la particule de reconnaissance du signal (SRP).",
        },
        {
          type: 'etapes',
          titre: 'Étapes de la translocation cotraductionnelle',
          etapes: [
            {
              titre: 'Reconnaissance du peptide signal',
              detail: "La particule de reconnaissance du signal (SRP) se fixe sur le peptide signal dès son émergence du ribosome, interrompant transitoirement la traduction.",
            },
            {
              titre: 'Adressage au réticulum',
              detail: "Le complexe ribosome-SRP est dirigé vers un récepteur de SRP à la surface du réticulum endoplasmique, où le ribosome s’arrime à un translocon (translocateur protéique).",
            },
            {
              titre: 'Reprise de la traduction et translocation',
              detail: "La SRP se dissocie, la traduction reprend, et la chaîne polypeptidique naissante traverse le translocon pour pénétrer dans la lumière du réticulum.",
            },
            {
              titre: 'Clivage du peptide signal',
              detail: "Le peptide signal est le plus souvent clivé par une peptidase signal, du côté luminal de la membrane du réticulum.",
            },
          ],
        },
        {
          type: 'definition',
          terme: 'Translocon',
          definition:
            "Complexe protéique transmembranaire formant un canal aqueux, qui permet le passage d’une chaîne polypeptidique naissante à travers la membrane du réticulum endoplasmique.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Protéines solubles et protéines membranaires',
          texte:
            "Une protéine destinée à être entièrement soluble dans la lumière du réticulum traverse totalement le translocon. Une protéine transmembranaire comporte, en revanche, une ou plusieurs séquences d’arrêt de transfert hydrophobes qui restent ancrées dans la bicouche lipidique, définissant ses domaines transmembranaires.",
        },
      ],
    },
    {
      id: 'glycosylation-controle-qualite',
      titre: 'Glycosylation et contrôle qualité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Dès leur entrée dans la lumière du réticulum endoplasmique, de nombreuses protéines subissent une N-glycosylation, addition covalente d’un oligosaccharide précurseur sur le groupement amide de résidus asparagine appartenant à une séquence consensus spécifique.",
        },
        {
          type: 'liste',
          items: [
            "L’oligosaccharide précurseur, préassemblé sur un lipide porteur (dolichol phosphate), est transféré en bloc sur la protéine naissante par l’oligosaccharyltransférase.",
            "Cette glycosylation initiale est ensuite modifiée par élimination progressive de résidus glucose et mannose, étape qui sert de signal au contrôle qualité du repliement des protéines.",
            "Les protéines correctement repliées sont exportées vers l’appareil de Golgi ; les protéines mal repliées sont retenues, puis, en cas d’échec persistant, dégradées par un mécanisme de dégradation associée au réticulum endoplasmique (ERAD), qui assure leur rétrotranslocation vers le cytosol en vue de leur dégradation par le protéasome.",
          ],
        },
        {
          type: 'definition',
          terme: 'Protéines chaperonnes du réticulum',
          definition:
            "Protéines telles que la BiP (une chaperonne de la famille Hsp70) ou la calnexine, qui assistent le repliement des protéines naissantes dans la lumière du réticulum endoplasmique et retiennent les protéines mal repliées.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La réponse au stress du réticulum',
          texte:
            "Une accumulation excessive de protéines mal repliées dans le réticulum endoplasmique déclenche la réponse aux protéines mal repliées (unfolded protein response), qui vise à réduire la charge en protéines, augmenter la capacité de repliement, et, en cas d’échec prolongé, orienter la cellule vers l’apoptose.",
        },
      ],
    },
    {
      id: 'organisation-golgi',
      titre: 'Organisation de l’appareil de Golgi',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’appareil de Golgi est un empilement polarisé de citernes membranaires aplaties, qui reçoit les protéines et les lipides issus du réticulum endoplasmique, les modifie séquentiellement, puis les trie vers leurs destinations finales.",
        },
        {
          type: 'tableau',
          titre: 'Organisation polarisée du Golgi',
          colonnes: ['Compartiment', 'Position', 'Fonction principale'],
          lignes: [
            ['Réseau cis-golgien (CGN)', 'Face d’entrée, proche du réticulum endoplasmique', 'Réception des vésicules issues du réticulum, tri de récupération vers le réticulum'],
            ['Citernes médianes', 'Partie centrale de l’empilement', 'Modifications successives des glycannes'],
            ['Réseau trans-golgien (TGN)', 'Face de sortie, éloignée du réticulum', 'Tri final et adressage vers la membrane plasmique, les lysosomes ou les vésicules de sécrétion'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Sens de la progression',
          texte:
            "Les protéines progressent globalement du réseau cis-golgien vers le réseau trans-golgien, chaque citerne apportant des enzymes de modification différentes, ce qui explique la maturation séquentielle des chaînes glucidiques au fil de leur passage dans l’empilement golgien.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le transport intra-golgien fait intervenir des vésicules de transport bourgeonnant d’une citerne pour fusionner avec la suivante, mécanisme complété par un modèle de maturation des citernes, selon lequel les citernes elles-mêmes progressent et changent progressivement de composition enzymatique.",
        },
      ],
    },
    {
      id: 'maturation-golgi',
      titre: 'Maturation des glycannes dans le Golgi',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au cours de leur passage dans l’appareil de Golgi, les oligosaccharides N-liés initialement transférés dans le réticulum endoplasmique sont largement remaniés : élimination de résidus mannose, addition de résidus N-acétylglucosamine, galactose et acide sialique.",
        },
        {
          type: 'liste',
          items: [
            "Ce remaniement transforme les glycannes de haut mannose, hérités du réticulum, en glycannes complexes ou hybrides, plus diversifiés.",
            "L’appareil de Golgi est également le site principal de l’O-glycosylation, addition de sucres sur le groupement hydroxyle de résidus sérine ou thréonine, indépendante de celle amorcée dans le réticulum.",
            "La sulfatation de certaines protéines et de certains lipides a également lieu dans les citernes golgiennes tardives.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Utilité diagnostique de la glycosylation',
          texte:
            "L’étude des glycannes matures d’une glycoprotéine sécrétée peut renseigner sur l’intégrité de la voie de sécrétion ; certaines maladies congénitales de la glycosylation résultent de déficits enzymatiques touchant les étapes de glycosylation du réticulum ou du Golgi.",
        },
      ],
    },
    {
      id: 'tri-proteines',
      titre: 'Le tri des protéines à la sortie du Golgi',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au niveau du réseau trans-golgien, les protéines sont triées et regroupées dans des vésicules de transport distinctes selon leur destination finale, ce qui constitue une étape décisive de l’organisation de la voie de sécrétion.",
        },
        {
          type: 'tableau',
          titre: 'Principales voies de sortie du réseau trans-golgien',
          colonnes: ['Destination', 'Caractéristique du tri'],
          lignes: [
            ['Lysosomes', 'Reconnaissance du marqueur mannose-6-phosphate par un récepteur spécifique'],
            ['Sécrétion constitutive', 'Voie par défaut, sans signal de rétention particulier, vers la membrane plasmique'],
            ['Sécrétion régulée', 'Stockage dans des vésicules de sécrétion, libérées après un signal extracellulaire spécifique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Maladie des cellules I',
          texte:
            "La maladie des cellules I (mucolipidose de type II) résulte d’un déficit de l’enzyme qui phosphoryle le mannose des enzymes lysosomales dans le Golgi. Faute de marqueur mannose-6-phosphate, ces enzymes ne sont pas adressées aux lysosomes et sont sécrétées par erreur hors de la cellule, ce qui provoque une accumulation intracellulaire de substrats non dégradés.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le réticulum endoplasmique rugueux, tapissé de ribosomes, synthétise les protéines sécrétées, membranaires et destinées à la voie endomembranaire.",
    "Le réticulum endoplasmique lisse synthétise les lipides, participe à la détoxification et stocke le calcium.",
    "La particule SRP reconnaît le peptide signal et adresse le ribosome au translocon du réticulum endoplasmique.",
    "La N-glycosylation, initiée dans le réticulum sur l’asparagine, sert de signal au contrôle qualité du repliement des protéines.",
    "L’appareil de Golgi est polarisé du réseau cis-golgien vers le réseau trans-golgien, où les glycannes sont progressivement remaniés.",
    "Le réseau trans-golgien assure le tri final des protéines vers les lysosomes, la sécrétion constitutive ou la sécrétion régulée.",
    "Le récepteur au mannose-6-phosphate adresse les enzymes lysosomales depuis le Golgi vers les lysosomes.",
  ],
  erreursFrequentes: [
    "Confondre réticulum rugueux et réticulum lisse : seul le rugueux porte des ribosomes et synthétise des protéines destinées à la sécrétion.",
    "Croire que le peptide signal reste toujours attaché à la protéine mature : il est le plus souvent clivé après la translocation.",
    "Penser que la N-glycosylation ne sert qu’à la reconnaissance extracellulaire : elle intervient d’abord dans le contrôle qualité intracellulaire du repliement.",
    "Inverser le sens de progression dans le Golgi : les protéines progressent du réseau cis-golgien vers le réseau trans-golgien.",
    "Oublier que la sécrétion constitutive est une voie par défaut, ne nécessitant pas de signal de tri particulier, à la différence de la sécrétion régulée.",
    "Confondre O-glycosylation et N-glycosylation : la première a lieu principalement dans le Golgi sur sérine ou thréonine, la seconde débute dans le réticulum sur l’asparagine.",
  ],
  mnemotechniques: [
    {
      moyen: '« Rugueux = Ribosomes »',
      explication: 'Le réticulum rugueux doit son aspect à la présence de ribosomes sur sa face cytosolique.',
    },
    {
      moyen: '« Cis entre, Trans sort »',
      explication: 'Le réseau cis-golgien reçoit les protéines issues du réticulum, le réseau trans-golgien les trie et les fait sortir vers leur destination finale.',
    },
    {
      moyen: '« M6P, la clé du lysosome »',
      explication: 'Le mannose-6-phosphate est le marqueur qui adresse spécifiquement les enzymes du Golgi vers les lysosomes.',
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
      id: 'biocell-reticulum-golgi-fc-01',
      recto: 'Quelle est la différence structurale majeure entre réticulum rugueux et réticulum lisse ?',
      verso: 'Le réticulum rugueux porte des ribosomes sur sa face cytosolique ; le réticulum lisse en est dépourvu.',
      type: 'classification',
      tags: ['réticulum endoplasmique'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-02',
      recto: 'Quelle particule reconnaît le peptide signal d’une protéine naissante ?',
      verso: 'La particule de reconnaissance du signal (SRP).',
      type: 'mecanisme',
      tags: ['peptide signal', 'SRP'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-03',
      recto: 'Par quel complexe une chaîne polypeptidique traverse-t-elle la membrane du réticulum ?',
      verso: 'Le translocon, canal protéique transmembranaire.',
      type: 'definition',
      tags: ['translocation', 'translocon'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-04',
      recto: 'Sur quel résidu et où débute la N-glycosylation d’une protéine ?',
      verso: 'Sur un résidu asparagine, dans la lumière du réticulum endoplasmique.',
      type: 'mecanisme',
      tags: ['glycosylation'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-05',
      recto: 'Citer deux protéines chaperonnes du réticulum endoplasmique.',
      verso: 'La BiP (chaperonne de type Hsp70) et la calnexine.',
      type: 'classification',
      tags: ['chaperonnes', 'contrôle qualité'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-06',
      recto: 'Que devient une protéine mal repliée retenue durablement dans le réticulum ?',
      verso: 'Elle est rétrotransloquée vers le cytosol et dégradée par le protéasome, via la voie ERAD.',
      type: 'mecanisme',
      tags: ['ERAD', 'contrôle qualité'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-07',
      recto: 'Comment se nomment les deux faces de l’appareil de Golgi ?',
      verso: 'Le réseau cis-golgien (face d’entrée) et le réseau trans-golgien (face de sortie).',
      type: 'definition',
      tags: ['appareil de Golgi'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-08',
      recto: 'Où a lieu principalement l’O-glycosylation ?',
      verso: 'Dans l’appareil de Golgi, sur les résidus sérine ou thréonine.',
      type: 'mecanisme',
      tags: ['O-glycosylation'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-09',
      recto: 'Quel marqueur adresse les enzymes lysosomales du Golgi vers les lysosomes ?',
      verso: 'Le mannose-6-phosphate, reconnu par un récepteur spécifique.',
      type: 'mecanisme',
      tags: ['mannose-6-phosphate', 'lysosome'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-10',
      recto: 'Quelle est la voie de sortie par défaut, sans signal de tri particulier, au niveau du réseau trans-golgien ?',
      verso: 'La sécrétion constitutive, vers la membrane plasmique.',
      type: 'definition',
      tags: ['sécrétion constitutive'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-11',
      recto: 'Quelle maladie résulte d’un déficit de la phosphorylation du mannose dans le Golgi ?',
      verso: 'La maladie des cellules I (mucolipidose de type II).',
      type: 'clinique',
      tags: ['maladie des cellules I'],
    },
    {
      id: 'biocell-reticulum-golgi-fc-12',
      recto: 'Que déclenche une accumulation excessive de protéines mal repliées dans le réticulum ?',
      verso: 'La réponse aux protéines mal repliées (unfolded protein response), pouvant aboutir à l’apoptose en cas d’échec prolongé.',
      type: 'mecanisme',
      tags: ['stress du réticulum'],
    },
  ],
  qcm: [
    {
      id: 'biocell-reticulum-golgi-qcm-01',
      enonce: 'Concernant le réticulum endoplasmique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le réticulum rugueux et le réticulum lisse forment un compartiment continu.', vraie: true, justification: 'Leurs lumières communiquent, même si leur composition et leur fonction diffèrent.' },
        { lettre: 'B', texte: 'Le réticulum lisse est le principal site de synthèse des lipides.', vraie: true, justification: 'C’est l’une de ses fonctions majeures, avec le métabolisme des stéroïdes et la détoxification.' },
        { lettre: 'C', texte: 'Le réticulum rugueux est dépourvu de ribosomes.', vraie: false, justification: 'C’est précisément la présence de ribosomes qui lui donne son aspect rugueux.' },
        { lettre: 'D', texte: 'Le réticulum sarcoplasmique du muscle est une forme spécialisée de réticulum lisse.', vraie: true, justification: 'Il stocke le calcium et intervient dans la contraction musculaire.' },
        { lettre: 'E', texte: 'Le réticulum endoplasmique n’a aucune continuité avec l’enveloppe nucléaire.', vraie: false, justification: 'Le réticulum endoplasmique est directement continu avec la membrane nucléaire externe.' },
      ],
      correction: 'Réponses exactes : A, B et D. Retenir la continuité entre réticulum et enveloppe nucléaire.',
      difficulte: 2,
    },
    {
      id: 'biocell-reticulum-golgi-qcm-02',
      enonce: 'Concernant la translocation cotraductionnelle, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La SRP reconnaît le peptide signal dès son émergence du ribosome.', vraie: true, justification: 'C’est le point de départ de l’adressage cotraductionnel au réticulum.' },
        { lettre: 'B', texte: 'La fixation de la SRP accélère la traduction.', vraie: false, justification: 'Elle interrompt transitoirement la traduction, le temps que le ribosome s’arrime au translocon.' },
        { lettre: 'C', texte: 'La chaîne polypeptidique naissante traverse la membrane par le translocon.', vraie: true, justification: 'C’est le canal protéique dédié à ce passage.' },
        { lettre: 'D', texte: 'Le peptide signal est systématiquement conservé dans la protéine mature.', vraie: false, justification: 'Il est le plus souvent clivé par une peptidase signal du côté luminal.' },
        { lettre: 'E', texte: 'Une protéine transmembranaire comporte des séquences d’arrêt de transfert hydrophobes.', vraie: true, justification: 'Ces séquences restent ancrées dans la bicouche et définissent les domaines transmembranaires.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien retenir le rôle transitoirement inhibiteur de la SRP sur la traduction.',
      difficulte: 2,
    },
    {
      id: 'biocell-reticulum-golgi-qcm-03',
      enonce: 'Concernant la glycosylation et le contrôle qualité dans le réticulum endoplasmique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La N-glycosylation a lieu sur un résidu asparagine.', vraie: true, justification: 'C’est l’acide aminé accepteur de l’oligosaccharide précurseur.' },
        { lettre: 'B', texte: 'L’oligosaccharide précurseur est transféré en bloc par l’oligosaccharyltransférase.', vraie: true, justification: 'C’est le mécanisme initial de la N-glycosylation dans le réticulum.' },
        { lettre: 'C', texte: 'La calnexine est une enzyme de dégradation protéasomale.', vraie: false, justification: 'La calnexine est une protéine chaperonne du réticulum, non une enzyme de dégradation.' },
        { lettre: 'D', texte: 'Une protéine mal repliée peut être rétrotransloquée vers le cytosol pour y être dégradée.', vraie: true, justification: 'C’est le principe de la dégradation associée au réticulum endoplasmique (ERAD), via le protéasome.' },
        { lettre: 'E', texte: 'Le contrôle qualité du repliement ne concerne jamais les glycoprotéines.', vraie: false, justification: 'Au contraire, la glycosylation initiale sert précisément de signal au contrôle qualité des glycoprotéines.' },
      ],
      correction: 'Réponses exactes : A, B et D. La calnexine assiste le repliement, elle ne dégrade pas les protéines.',
      difficulte: 2,
    },
    {
      id: 'biocell-reticulum-golgi-qcm-04',
      enonce: 'Concernant l’organisation de l’appareil de Golgi, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le réseau cis-golgien est la face de sortie du Golgi.', vraie: false, justification: 'Le réseau cis-golgien est la face d’entrée ; la face de sortie est le réseau trans-golgien.' },
        { lettre: 'B', texte: 'Les protéines progressent globalement du réseau cis-golgien vers le réseau trans-golgien.', vraie: true, justification: 'C’est le sens général de la progression dans l’appareil de Golgi.' },
        { lettre: 'C', texte: 'Chaque citerne golgienne possède des enzymes de modification différentes.', vraie: true, justification: 'Ceci explique la maturation séquentielle des glycannes au cours de la traversée du Golgi.' },
        { lettre: 'D', texte: 'Le réseau trans-golgien reçoit directement les vésicules issues du réticulum endoplasmique.', vraie: false, justification: 'C’est le réseau cis-golgien qui reçoit en premier les vésicules issues du réticulum.' },
        { lettre: 'E', texte: 'Un modèle de maturation des citernes complète le modèle du transport vésiculaire intra-golgien.', vraie: true, justification: 'Les deux modèles coexistent pour expliquer la progression des protéines dans le Golgi.' },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir le sens cis vers trans de la progression golgienne.',
      difficulte: 2,
    },
    {
      id: 'biocell-reticulum-golgi-qcm-05',
      enonce: 'Concernant le tri des protéines à la sortie du Golgi, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le mannose-6-phosphate adresse les protéines vers les lysosomes.', vraie: true, justification: 'C’est le marqueur reconnu par un récepteur spécifique pour cette voie de tri.' },
        { lettre: 'B', texte: 'La sécrétion constitutive nécessite un signal de rétention spécifique.', vraie: false, justification: 'C’est au contraire la voie par défaut, empruntée en l’absence de signal de tri particulier.' },
        { lettre: 'C', texte: 'La sécrétion régulée implique un stockage vésiculaire avant libération sur signal.', vraie: true, justification: 'Les protéines sont stockées dans des vésicules de sécrétion, libérées après un stimulus spécifique.' },
        { lettre: 'D', texte: 'La maladie des cellules I résulte d’un excès de mannose-6-phosphate.', vraie: false, justification: 'Elle résulte au contraire d’un déficit de phosphorylation du mannose, empêchant la formation de ce marqueur.' },
        { lettre: 'E', texte: 'Dans la maladie des cellules I, les enzymes lysosomales sont sécrétées par erreur hors de la cellule.', vraie: true, justification: 'Faute de marqueur mannose-6-phosphate, elles ne sont pas retenues et adressées aux lysosomes.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien retenir le mécanisme physiopathologique de la maladie des cellules I.',
      difficulte: 2,
    },
    {
      id: 'biocell-reticulum-golgi-qcm-06',
      enonce: 'Concernant la maturation des glycannes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La N-glycosylation débute dans le réticulum endoplasmique.', vraie: true, justification: 'L’oligosaccharide précurseur y est transféré en bloc sur la protéine naissante.' },
        { lettre: 'B', texte: 'Les glycannes de haut mannose sont progressivement transformés en glycannes complexes dans le Golgi.', vraie: true, justification: 'Ce remaniement se fait par élimination de mannoses et addition d’autres sucres.' },
        { lettre: 'C', texte: 'L’O-glycosylation est initiée sur un résidu asparagine.', vraie: false, justification: 'L’O-glycosylation a lieu sur les résidus sérine ou thréonine, à la différence de la N-glycosylation.' },
        { lettre: 'D', texte: 'L’acide sialique peut être ajouté aux glycannes dans les citernes golgiennes tardives.', vraie: true, justification: 'C’est l’une des modifications terminales caractéristiques de la maturation golgienne.' },
        { lettre: 'E', texte: 'Certaines maladies congénitales de la glycosylation résultent de déficits enzymatiques du réticulum ou du Golgi.', vraie: true, justification: 'Ces maladies touchent les étapes successives de la N- ou de l’O-glycosylation.' },
      ],
      correction: 'Réponses exactes : A, B, D et E. L’O-glycosylation concerne sérine et thréonine, non l’asparagine.',
      difficulte: 2,
    },
  ],
};
