import type { Fiche } from '../../types';

export const ficheTeteOsseuse: Fiche = {
  id: 'anat-tete-osseuse',
  ue: 'anat',
  titre: 'La tête osseuse',
  sousTitre: 'Crâne, sutures, fosses crâniennes, orbite, fosses nasales, sinus, mandibule et foramens de la base',
  chapitre: 'Tête et cou',
  ordre: 13,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'voûte crânienne',
    'base du crâne',
    'suture crânienne',
    'fosse crânienne',
    'orbite',
    'sinus paranasal',
    'mandibule',
    'articulation temporomandibulaire',
    'foramen',
  ],
  objectifs: [
    "Nommer les os de la voûte et de la base du crâne et les sutures qui les unissent.",
    "Décrire les trois fosses crâniennes et leurs limites.",
    "Décrire les parois de l’orbite et les principaux orifices qui la traversent.",
    "Décrire les sinus paranasaux et leur drainage vers les fosses nasales.",
    "Décrire la mandibule, l’articulation temporomandibulaire et les principaux foramens de la base du crâne avec leur contenu.",
  ],
  sections: [
    {
      id: 'os-cranes-sutures',
      titre: 'Les os du crâne et les sutures',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le crâne se divise classiquement en neurocrâne, qui protège l’encéphale, et viscérocrâne (ou squelette facial), qui soutient les structures de la face. Les os du neurocrâne s’articulent entre eux par des sutures, synarthroses fibreuses immobiles chez l’adulte.",
        },
        {
          type: 'tableau',
          titre: 'Principaux os du neurocrâne',
          colonnes: ['Os', 'Nombre', 'Position'],
          lignes: [
            ['Frontal', 'Impair', 'Antérieure, forme le front et le toit des orbites'],
            ['Pariétal', 'Pair', 'Latérale et supérieure, forme la majeure partie de la voûte'],
            ['Temporal', 'Pair', 'Latérale et inférieure, contient l’oreille moyenne et interne'],
            ['Occipital', 'Impair', 'Postérieure et inférieure, présente le foramen magnum'],
            ['Sphénoïde', 'Impair', 'Central, à la base du crâne, en forme de papillon'],
            ['Ethmoïde', 'Impair', 'Antérieur et médian, participe aux fosses nasales et aux orbites'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Principales sutures crâniennes',
          colonnes: ['Suture', 'Os réunis'],
          lignes: [
            ['Suture coronale', 'Frontal et pariétaux'],
            ['Suture sagittale', 'Les deux pariétaux entre eux, sur la ligne médiane'],
            ['Suture lambdoïde', 'Pariétaux et occipital'],
            ['Suture squameuse', 'Pariétal et temporal'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Fontanelles du nourrisson',
          texte:
            "Chez le nourrisson, les sutures ne sont pas encore complètement ossifiées et laissent persister des espaces membraneux, les fontanelles, dont la plus large et la plus tardive à se fermer est la fontanelle antérieure (bregmatique), au croisement des sutures coronale et sagittale, palpable jusque vers dix-huit mois.",
        },
      ],
    },
    {
      id: 'fosses-craniennes',
      titre: 'Les fosses crâniennes de la base',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La base interne du crâne présente trois dépressions étagées d’avant en arrière, qui logent respectivement les lobes frontaux, les lobes temporaux et le tronc cérébral avec le cervelet.",
        },
        {
          type: 'tableau',
          titre: 'Les trois fosses crâniennes',
          colonnes: ['Fosse', 'Os participants', 'Contenu encéphalique'],
          lignes: [
            ['Antérieure', 'Frontal, ethmoïde (lame criblée), petites ailes du sphénoïde', 'Lobes frontaux'],
            ['Moyenne', 'Corps et grandes ailes du sphénoïde, temporal', 'Lobes temporaux, hypophyse (dans la selle turcique)'],
            ['Postérieure', 'Occipital, face postérieure du temporal', 'Tronc cérébral, cervelet'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'La lame criblée de l’ethmoïde, un point de faiblesse',
          texte:
            "La lame criblée de l’ethmoïde, perforée de multiples petits orifices livrant passage aux filets du nerf olfactif, est une zone anatomiquement fragile de la fosse crânienne antérieure, exposée à une fracture lors d’un traumatisme facial sévère, avec un risque de brèche méningée et de rhinorrhée de liquide cérébrospinal.",
        },
      ],
    },
    {
      id: 'orbite',
      titre: 'L’orbite',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’orbite est une cavité osseuse pyramidale à base antérieure, formée par la participation de plusieurs os crâniofaciaux, qui loge le globe oculaire et ses annexes et livre passage à d’importantes structures vasculonerveuses vers la cavité crânienne.",
        },
        {
          type: 'tableau',
          titre: 'Parois de l’orbite',
          colonnes: ['Paroi', 'Os participants'],
          lignes: [
            ['Toit (supérieure)', 'Frontal, petite aile du sphénoïde'],
            ['Plancher (inférieure)', 'Maxillaire, zygomatique, palatin'],
            ['Paroi médiale', 'Ethmoïde, lacrymal, maxillaire, sphénoïde'],
            ['Paroi latérale', 'Zygomatique, grande aile du sphénoïde'],
          ],
        },
        {
          type: 'liste',
          items: [
            "Le canal optique, dans la petite aile du sphénoïde, livre passage au nerf optique et à l’artère ophtalmique.",
            "La fissure orbitaire supérieure, entre petite et grande ailes du sphénoïde, livre passage aux nerfs oculomoteurs (III, IV, VI) et à la branche ophtalmique du nerf trijumeau (V1).",
            "La fissure orbitaire inférieure livre passage au nerf maxillaire (V2) et à des vaisseaux infra-orbitaires.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Fracture du plancher de l’orbite',
          texte:
            "Le plancher de l’orbite, formé en grande partie par une fine lame osseuse du maxillaire, est un point de faiblesse classique lors d’un traumatisme orbitaire direct (fracture par éclatement ou « blow-out »), pouvant entraîner l’incarcération du muscle droit inférieur et une limitation du regard vers le haut.",
        },
      ],
    },
    {
      id: 'fosses-nasales-sinus',
      titre: 'Les fosses nasales et les sinus paranasaux',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les fosses nasales sont deux cavités séparées par le septum nasal, tapissées d’une muqueuse respiratoire et olfactive, en relation directe avec les sinus paranasaux, cavités aériennes creusées dans certains os de la face et du crâne.",
        },
        {
          type: 'tableau',
          titre: 'Les sinus paranasaux et leur drainage',
          colonnes: ['Sinus', 'Os', 'Site de drainage dans les fosses nasales'],
          lignes: [
            ['Sinus frontal', 'Frontal', 'Méat nasal moyen'],
            ['Sinus maxillaire', 'Maxillaire', 'Méat nasal moyen'],
            ['Sinus ethmoïdaux (cellules)', 'Ethmoïde', 'Méat nasal moyen (cellules antérieures) et méat nasal supérieur (cellules postérieures)'],
            ['Sinus sphénoïdal', 'Sphénoïde', 'Récessus sphéno-ethmoïdal'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le méat nasal moyen, carrefour du drainage sinusien',
          texte:
            "La majorité des sinus paranasaux (frontal, maxillaire, cellules ethmoïdales antérieures) se drainent dans le méat nasal moyen, ce qui en fait une zone clé de la physiopathologie des sinusites : l’obstruction de ce carrefour favorise la stase des sécrétions et la surinfection de plusieurs sinus simultanément.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Développement postnatal des sinus',
          texte:
            "Les sinus paranasaux ne sont pas présents à la naissance dans les mêmes proportions que chez l’adulte : le sinus maxillaire et les cellules ethmoïdales sont les premiers à se développer, tandis que les sinus frontal et sphénoïdal ne deviennent significatifs qu’après plusieurs années, ce qui explique la rareté des sinusites frontales chez le jeune enfant.",
        },
      ],
    },
    {
      id: 'mandibule-atm',
      titre: 'La mandibule et l’articulation temporomandibulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La mandibule est le seul os mobile du crâne, unique et impair, formée d’un corps horizontal portant l’arcade dentaire inférieure et de deux branches montantes verticales, chacune terminée par un processus condylaire et un processus coronoïde.",
        },
        {
          type: 'definition',
          terme: 'Articulation temporomandibulaire',
          definition:
            "Articulation synoviale bicondylienne entre le processus condylaire de la mandibule et la fosse mandibulaire de l’os temporal, séparée par un disque articulaire fibrocartilagineux qui divise la cavité articulaire en deux compartiments, permettant à la fois un mouvement de rotation (compartiment inférieur) et un mouvement de translation (compartiment supérieur).",
        },
        {
          type: 'liste',
          items: [
            "Les mouvements mandibulaires combinent abaissement, élévation, propulsion, rétropulsion et diduction (mouvements latéraux).",
            "Le foramen mandibulaire, sur la face interne de la branche montante, livre passage au nerf alvéolaire inférieur, qui chemine dans le canal mandibulaire avant d’émerger au foramen mentonnier.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Dysfonction de l’articulation temporomandibulaire',
          texte:
            "Le disque articulaire de l’articulation temporomandibulaire peut se déplacer par rapport au condyle mandibulaire, réalisant un tableau de dysfonction temporomandibulaire avec claquements, douleurs et parfois blocages à l’ouverture buccale.",
        },
      ],
    },
    {
      id: 'foramens-base',
      titre: 'Les principaux foramens de la base du crâne',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La base du crâne est perforée de nombreux orifices qui livrent passage aux nerfs crâniens et aux vaisseaux reliant la cavité crânienne aux structures cervicofaciales. Leur connaissance est un grand classique des épreuves d’anatomie céphalique.",
        },
        {
          type: 'tableau',
          titre: 'Principaux foramens et leur contenu',
          colonnes: ['Foramen', 'Os', 'Contenu principal'],
          lignes: [
            ['Foramen magnum', 'Occipital', 'Moelle allongée (bulbe rachidien), artères vertébrales, nerf accessoire (racine spinale)'],
            ['Canal optique', 'Sphénoïde (petite aile)', 'Nerf optique (II), artère ophtalmique'],
            ['Foramen rond', 'Sphénoïde', 'Nerf maxillaire (V2)'],
            ['Foramen ovale', 'Sphénoïde', 'Nerf mandibulaire (V3)'],
            ['Foramen épineux', 'Sphénoïde', 'Artère méningée moyenne'],
            ['Foramen jugulaire', 'Entre occipital et temporal', 'Veine jugulaire interne, nerfs glossopharyngien (IX), vague (X), accessoire (XI)'],
            ['Canal carotidien', 'Temporal', 'Artère carotide interne'],
            ['Méat acoustique interne', 'Temporal', 'Nerfs facial (VII) et vestibulocochléaire (VIII)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir les trois foramens du sphénoïde',
          texte:
            "Rond, Ovale, épineux (les trois « O » de leur forme évocatrice) livrent passage, dans l’ordre, au nerf maxillaire (V2), au nerf mandibulaire (V3) et à l’artère méningée moyenne : leur alignement d’avant en arrière et de dedans en dehors sur la grande aile du sphénoïde facilite leur repérage en imagerie.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le crâne se divise en neurocrâne, uni par des sutures, et viscérocrâne (squelette facial).",
    "Les trois fosses crâniennes (antérieure, moyenne, postérieure) logent respectivement lobes frontaux, lobes temporaux, et tronc cérébral avec cervelet.",
    "Le canal optique livre passage au nerf optique ; la fissure orbitaire supérieure aux nerfs oculomoteurs et à V1.",
    "Les sinus frontal, maxillaire et les cellules ethmoïdales antérieures se drainent tous dans le méat nasal moyen.",
    "La mandibule est le seul os mobile du crâne ; l’articulation temporomandibulaire possède un disque articulaire qui la divise en deux compartiments.",
    "Le foramen rond livre passage à V2, le foramen ovale à V3, le foramen jugulaire aux nerfs IX, X et XI.",
    "Le foramen magnum livre passage à la moelle allongée et aux artères vertébrales.",
  ],
  erreursFrequentes: [
    "Confondre foramen rond (V2) et foramen ovale (V3) : le rond est plus antérieur et médial, l’ovale plus postérieur et latéral.",
    "Oublier que le nerf mandibulaire (V3) est la seule des trois branches du trijumeau à comporter un contingent moteur.",
    "Situer l’hypophyse dans la fosse crânienne antérieure, alors qu’elle occupe la selle turcique de la fosse crânienne moyenne.",
    "Croire que tous les sinus paranasaux se drainent au même endroit : le sinus sphénoïdal se draine dans le récessus sphéno-ethmoïdal, pas dans le méat moyen.",
    "Confondre le contenu du foramen jugulaire (nerfs IX, X, XI et veine jugulaire interne) avec celui du méat acoustique interne (nerfs VII et VIII).",
  ],
  mnemotechniques: [
    {
      moyen: 'Rond-Ovale-Épineux : V2, V3, artère méningée',
      explication:
        'Les trois foramens de la grande aile du sphénoïde, d’avant en arrière : foramen rond (V2), foramen ovale (V3), foramen épineux (artère méningée moyenne).',
    },
    {
      moyen: '9, 10, 11 pour le foramen jugulaire',
      explication:
        'Les trois nerfs crâniens qui traversent le foramen jugulaire portent les numéros consécutifs IX (glossopharyngien), X (vague) et XI (accessoire) : leur atteinte conjointe réalise le syndrome du foramen jugulaire.',
    },
  ],
  sources: [
    'Kamina, Anatomie clinique, tome 3, Tête, cou, dos',
    'Drake, Vogl, Mitchell, Gray’s Anatomie pour les étudiants',
    'Netter, Atlas d’anatomie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'anat-tete-osseuse-fc-01',
      recto: 'Quels os unit la suture sagittale ?',
      verso: 'Les deux os pariétaux, sur la ligne médiane.',
      type: 'definition',
      tags: ['sutures'],
    },
    {
      id: 'anat-tete-osseuse-fc-02',
      recto: 'Quelle est la fontanelle la plus large et la plus tardive à se fermer ?',
      verso: 'La fontanelle antérieure (bregmatique), au croisement des sutures coronale et sagittale.',
      type: 'clinique',
      tags: ['fontanelles'],
    },
    {
      id: 'anat-tete-osseuse-fc-03',
      recto: 'Quelle structure encéphalique se situe dans la fosse crânienne moyenne ?',
      verso: 'Les lobes temporaux, ainsi que l’hypophyse dans la selle turcique.',
      type: 'definition',
      tags: ['fosses crâniennes'],
    },
    {
      id: 'anat-tete-osseuse-fc-04',
      recto: 'Que traverse le canal optique ?',
      verso: 'Le nerf optique (II) et l’artère ophtalmique.',
      type: 'definition',
      tags: ['orbite'],
    },
    {
      id: 'anat-tete-osseuse-fc-05',
      recto: 'Quels nerfs traversent la fissure orbitaire supérieure ?',
      verso: 'Les nerfs oculomoteur (III), trochléaire (IV), abducens (VI) et la branche ophtalmique du trijumeau (V1).',
      type: 'definition',
      tags: ['orbite'],
    },
    {
      id: 'anat-tete-osseuse-fc-06',
      recto: 'Dans quel méat se drainent le sinus frontal et le sinus maxillaire ?',
      verso: 'Le méat nasal moyen.',
      type: 'definition',
      tags: ['sinus paranasaux'],
    },
    {
      id: 'anat-tete-osseuse-fc-07',
      recto: 'Où se draine le sinus sphénoïdal ?',
      verso: 'Dans le récessus sphéno-ethmoïdal.',
      type: 'definition',
      tags: ['sinus paranasaux'],
    },
    {
      id: 'anat-tete-osseuse-fc-08',
      recto: 'Quel est le seul os mobile du crâne ?',
      verso: 'La mandibule.',
      type: 'definition',
      tags: ['mandibule'],
    },
    {
      id: 'anat-tete-osseuse-fc-09',
      recto: 'Quel nerf passe par le foramen rond ?',
      verso: 'Le nerf maxillaire (V2).',
      type: 'definition',
      tags: ['foramens'],
    },
    {
      id: 'anat-tete-osseuse-fc-10',
      recto: 'Quel nerf passe par le foramen ovale ?',
      verso: 'Le nerf mandibulaire (V3).',
      type: 'definition',
      tags: ['foramens'],
    },
    {
      id: 'anat-tete-osseuse-fc-11',
      recto: 'Quels nerfs traversent le foramen jugulaire ?',
      verso: 'Les nerfs glossopharyngien (IX), vague (X) et accessoire (XI), ainsi que la veine jugulaire interne.',
      type: 'definition',
      tags: ['foramens'],
    },
    {
      id: 'anat-tete-osseuse-fc-12',
      recto: 'Quelle structure divise la cavité de l’articulation temporomandibulaire en deux compartiments ?',
      verso: 'Le disque articulaire fibrocartilagineux.',
      type: 'definition',
      tags: ['articulation temporomandibulaire'],
    },
  ],
  qcm: [
    {
      id: 'anat-tete-osseuse-qcm-01',
      enonce: 'Concernant les os du crâne et les sutures, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La suture coronale unit le frontal aux pariétaux.', vraie: true, justification: 'Cette suture transversale, en avant du vertex, sépare l’os frontal des deux os pariétaux sur la voûte crânienne.' },
        { lettre: 'B', texte: 'La suture lambdoïde unit les pariétaux à l’occipital.', vraie: true, justification: 'Cette suture postérieure, en forme de lambda, délimite la jonction entre les pariétaux et l’os occipital.' },
        { lettre: 'C', texte: 'L’ethmoïde est un os pair.', vraie: false, justification: 'Faux : l’ethmoïde est un os impair et médian.' },
        { lettre: 'D', texte: 'Le temporal contient l’oreille moyenne et interne.', vraie: true, justification: 'Sa portion pétreuse loge la caisse du tympan et le labyrinthe osseux, ce qui explique le trajet des nerfs VII et VIII à travers cet os.' },
        { lettre: 'E', texte: 'Les sutures sont des diarthroses mobiles chez l’adulte.', vraie: false, justification: 'Faux : ce sont des synarthroses fibreuses, immobiles chez l’adulte.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 1,
    },
    {
      id: 'anat-tete-osseuse-qcm-02',
      enonce: 'Concernant les fosses crâniennes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La fosse crânienne antérieure loge les lobes frontaux.', vraie: true, justification: 'C’est la plus antérieure des trois fosses étagées, formée par le frontal, l’ethmoïde et les petites ailes du sphénoïde.' },
        { lettre: 'B', texte: 'La lame criblée de l’ethmoïde appartient à la fosse crânienne antérieure.', vraie: true, justification: 'Cette lame perforée, qui livre passage aux filets du nerf olfactif, constitue le plancher médian de la fosse antérieure et un point de fragilité en cas de traumatisme facial.' },
        { lettre: 'C', texte: 'L’hypophyse se situe dans la fosse crânienne postérieure.', vraie: false, justification: 'Faux : elle se situe dans la selle turcique, en fosse crânienne moyenne.' },
        { lettre: 'D', texte: 'Le cervelet se situe dans la fosse crânienne postérieure.', vraie: true, justification: 'Formée par l’occipital et la face postérieure du temporal, cette fosse la plus profonde loge le cervelet et le tronc cérébral.' },
        { lettre: 'E', texte: 'La fosse crânienne moyenne est formée notamment par le corps et les grandes ailes du sphénoïde.', vraie: true, justification: 'Ces structures sphénoïdales, avec le temporal, délimitent la fosse moyenne, qui loge les lobes temporaux et l’hypophyse dans la selle turcique.' },
      ],
      correction: 'Réponses exactes : A, B, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-tete-osseuse-qcm-03',
      enonce: 'Concernant l’orbite, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le plancher de l’orbite est formé notamment par le maxillaire.', vraie: true, justification: 'Cette fine lame osseuse du maxillaire, avec les os zygomatique et palatin, constitue le plancher, point de faiblesse classique dans les fractures « blow-out ».' },
        { lettre: 'B', texte: 'Le nerf optique traverse la fissure orbitaire supérieure.', vraie: false, justification: 'Faux : le nerf optique traverse le canal optique.' },
        { lettre: 'C', texte: 'La fissure orbitaire supérieure livre passage aux nerfs oculomoteurs.', vraie: true, justification: 'Elle livre passage aux nerfs III, IV et VI ainsi qu’à la branche ophtalmique du trijumeau (V1), tous destinés à l’innervation motrice ou sensitive de l’orbite.' },
        { lettre: 'D', texte: 'Une fracture du plancher orbitaire peut incarcérer le muscle droit inférieur.', vraie: true, justification: 'Lors d’une fracture par éclatement, ce muscle peut se coincer dans le foyer de fracture, limitant le regard vers le haut.' },
        { lettre: 'E', texte: 'La paroi latérale de l’orbite est formée notamment par le zygomatique.', vraie: true, justification: 'L’os zygomatique et la grande aile du sphénoïde constituent ensemble cette paroi, la plus résistante de l’orbite.' },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-tete-osseuse-qcm-04',
      enonce: 'Concernant les sinus paranasaux, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le sinus frontal se draine dans le méat nasal moyen.', vraie: true, justification: 'Ce méat constitue le carrefour de drainage de la plupart des sinus antérieurs, ce qui explique son rôle central dans la physiopathologie des sinusites.' },
        { lettre: 'B', texte: 'Le sinus sphénoïdal se draine dans le méat nasal moyen.', vraie: false, justification: 'Faux : il se draine dans le récessus sphéno-ethmoïdal.' },
        { lettre: 'C', texte: 'Les cellules ethmoïdales antérieures se drainent dans le méat nasal moyen.', vraie: true, justification: 'Contrairement aux cellules postérieures, qui se drainent dans le méat supérieur, les cellules antérieures rejoignent le même carrefour que les sinus frontal et maxillaire.' },
        { lettre: 'D', texte: 'Les sinus frontal et sphénoïdal atteignent leur développement significatif dès la naissance.', vraie: false, justification: 'Faux : ils ne se développent significativement qu’après plusieurs années.' },
        { lettre: 'E', texte: 'Le sinus maxillaire est creusé dans l’os maxillaire.', vraie: true, justification: 'C’est le plus volumineux des sinus paranasaux, l’un des premiers à se développer, et il se draine lui aussi dans le méat nasal moyen.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-tete-osseuse-qcm-05',
      enonce: 'Concernant la mandibule et l’articulation temporomandibulaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La mandibule est le seul os mobile du crâne.', vraie: true, justification: 'Tous les autres os du crâne adulte sont fixés par des sutures immobiles, tandis que la mandibule s’articule avec le temporal par une véritable diarthrose.' },
        { lettre: 'B', texte: 'L’articulation temporomandibulaire est dépourvue de disque articulaire.', vraie: false, justification: 'Faux : elle comporte un disque articulaire fibrocartilagineux qui la divise en deux compartiments.' },
        { lettre: 'C', texte: 'Le nerf alvéolaire inférieur chemine dans le canal mandibulaire.', vraie: true, justification: 'Il pénètre par le foramen mandibulaire, traverse le canal mandibulaire en innervant les dents inférieures, puis émerge au foramen mentonnier.' },
        { lettre: 'D', texte: 'Les mouvements mandibulaires incluent la diduction.', vraie: true, justification: 'Ce mouvement latéral, propre à la mastication, s’ajoute à l’abaissement, l’élévation, la propulsion et la rétropulsion de la mandibule.' },
        { lettre: 'E', texte: 'Le foramen mentonnier livre passage au nerf alvéolaire inférieur avant son entrée dans le canal mandibulaire.', vraie: false, justification: 'Faux : le foramen mentonnier est le point de sortie du nerf, après son trajet dans le canal mandibulaire, non son point d’entrée.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'anat-tete-osseuse-qcm-06',
      enonce: 'Concernant les foramens de la base du crâne, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le foramen ovale livre passage au nerf mandibulaire (V3).', vraie: true, justification: 'C’est le foramen le plus postérieur et latéral des trois orifices de la grande aile du sphénoïde, après le rond (V2) et avant l’épineux (artère méningée moyenne).' },
        { lettre: 'B', texte: 'Le foramen rond livre passage au nerf ophtalmique (V1).', vraie: false, justification: 'Faux : le foramen rond livre passage au nerf maxillaire (V2) ; le nerf ophtalmique passe par la fissure orbitaire supérieure.' },
        { lettre: 'C', texte: 'L’artère carotide interne traverse le canal carotidien du temporal.', vraie: true, justification: 'Ce canal, creusé dans la portion pétreuse du temporal, permet à l’artère de pénétrer dans la cavité crânienne pour vasculariser l’encéphale.' },
        { lettre: 'D', texte: 'Le foramen magnum livre passage à la moelle allongée.', vraie: true, justification: 'Ce large orifice occipital livre aussi passage aux artères vertébrales et à la racine spinale du nerf accessoire, en continuité avec le canal vertébral.' },
        { lettre: 'E', texte: 'Le méat acoustique interne livre passage aux nerfs glossopharyngien et vague.', vraie: false, justification: 'Faux : le méat acoustique interne livre passage aux nerfs facial (VII) et vestibulocochléaire (VIII) ; les nerfs IX et X passent par le foramen jugulaire.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
