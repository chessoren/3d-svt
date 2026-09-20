import type { Fiche } from '../../types';

export const ficheJambePied: Fiche = {
  id: 'anat-jambe-pied',
  ue: 'anat',
  titre: 'Membre inférieur : jambe et pied',
  sousTitre: 'Tibia, fibula, genou, ménisques, ligaments croisés, loges de la jambe, voûte plantaire, nerfs tibial et fibulaire',
  chapitre: 'Membres',
  ordre: 12,
  duree: 26,
  difficulte: 3,
  motsCles: [
    'tibia',
    'fibula',
    'genou',
    'ménisque',
    'ligament croisé',
    'tarse',
    'voûte plantaire',
    'nerf tibial',
    'nerf fibulaire commun',
  ],
  objectifs: [
    "Décrire les os de la jambe et leurs principaux repères.",
    "Décrire l’articulation du genou, ses ménisques et ses ligaments croisés.",
    "Différencier les loges musculaires de la jambe selon leur action et leur innervation.",
    "Décrire l’organisation du tarse et le rôle des trois arches de la voûte plantaire.",
    "Décrire les territoires des nerfs tibial et fibulaire commun et leurs atteintes cliniques classiques.",
  ],
  sections: [
    {
      id: 'os-jambe',
      titre: 'Les os de la jambe',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La jambe comprend deux os longs, le tibia, médial et porteur de l’essentiel de la charge, et la fibula, latérale et fine, reliés par la membrane interosseuse crurale et par les articulations tibiofibulaires proximale et distale.",
        },
        {
          type: 'tableau',
          titre: 'Repères des deux os de la jambe',
          colonnes: ['Os', 'Extrémité proximale', 'Extrémité distale'],
          lignes: [
            ['Tibia', 'Condyles médial et latéral, tubérosité tibiale, plateau tibial', 'Malléole médiale, surface articulaire pour le talus'],
            ['Fibula', 'Tête fibulaire, articulée avec le tibia', 'Malléole latérale, surface articulaire pour le talus'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Une fonction essentiellement d’insertion pour la fibula',
          texte:
            "Contrairement au tibia, la fibula ne participe pas directement à la transmission du poids du corps au niveau du genou : elle sert surtout de surface d’insertion musculaire et stabilise la cheville par la malléole latérale, plus longue et plus distale que la malléole médiale.",
        },
      ],
    },
    {
      id: 'genou',
      titre: 'L’articulation du genou',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le genou est l’articulation synoviale la plus volumineuse du corps humain, associant fonctionnellement l’articulation fémorotibiale, bicondylienne, et l’articulation fémoropatellaire, entre la patella et la trochlée fémorale.",
        },
        {
          type: 'definition',
          terme: 'Ménisques',
          definition:
            "Fibrocartilages en forme de croissant, interposés entre les condyles fémoraux et le plateau tibial. Le ménisque médial, en forme de C plus ouvert, est moins mobile et plus souvent lésé que le ménisque latéral, plus fermé en O et davantage mobile.",
        },
        {
          type: 'tableau',
          titre: 'Les ligaments croisés du genou',
          colonnes: ['Ligament', 'Trajet', 'Fonction principale'],
          lignes: [
            ['Ligament croisé antérieur', 'De la surface préspinale du tibia à la face médiale du condyle fémoral latéral', 'Limite la translation antérieure du tibia par rapport au fémur'],
            ['Ligament croisé postérieur', 'De la surface rétrospinale du tibia à la face latérale du condyle fémoral médial', 'Limite la translation postérieure du tibia par rapport au fémur'],
          ],
        },
        {
          type: 'liste',
          items: [
            "Les ligaments collatéraux, tibial (médial) et fibulaire (latéral), stabilisent le genou dans le plan frontal, limitant respectivement le valgus et le varus excessifs.",
            "Les ligaments croisés sont intracapsulaires mais extrasynoviaux, situés dans l’échancrure intercondylienne.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'La triade malheureuse',
          texte:
            "Un traumatisme en valgus-flexion-rotation latérale du genou, classique au football, peut léser simultanément le ligament collatéral tibial, le ligament croisé antérieur et le ménisque médial, réalisant la « triade malheureuse » décrite par O’Donoghue, illustrant la proximité anatomique de ces trois structures.",
        },
      ],
    },
    {
      id: 'loges-jambe',
      titre: 'Les loges musculaires de la jambe',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La jambe est divisée par les septums intermusculaires et la membrane interosseuse en trois loges, disposées dans une gaine ostéofasciale relativement inextensible, ce qui explique la gravité potentielle du syndrome des loges en cas d’œdème ou d’hématome intramusculaire.",
        },
        {
          type: 'tableau',
          titre: 'Les trois loges de la jambe',
          colonnes: ['Loge', 'Muscles principaux', 'Innervation', 'Action principale'],
          lignes: [
            [
              'Antérieure',
              'Tibial antérieur, long extenseur des orteils, long extenseur de l’hallux',
              'Nerf fibulaire profond',
              'Flexion dorsale de cheville, extension des orteils',
            ],
            [
              'Latérale',
              'Long fibulaire, court fibulaire',
              'Nerf fibulaire superficiel',
              'Éversion du pied',
            ],
            [
              'Postérieure superficielle',
              'Triceps sural (gastrocnémiens et soléaire), plantaire',
              'Nerf tibial',
              'Flexion plantaire puissante de cheville',
            ],
            [
              'Postérieure profonde',
              'Tibial postérieur, long fléchisseur des orteils, long fléchisseur de l’hallux, poplité',
              'Nerf tibial',
              'Flexion plantaire, inversion du pied, flexion des orteils',
            ],
          ],
        },
        {
          type: 'definition',
          terme: 'Tendon calcanéen (tendon d’Achille)',
          definition:
            "Tendon terminal commun du triceps sural, le plus volumineux et le plus résistant tendon du corps humain, qui se termine sur la face postérieure du calcanéus. Sa rupture, souvent sportive, se traduit par une impossibilité brutale de la flexion plantaire active contre résistance.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Syndrome des loges',
          texte:
            "Une augmentation de pression au sein d’une loge musculaire inextensible, par exemple après une fracture ou un effort intense, peut comprimer les vaisseaux et les nerfs de cette loge, menaçant la viabilité musculaire et nerveuse en quelques heures : c’est une urgence chirurgicale, traitée par aponévrotomie de décharge.",
        },
      ],
    },
    {
      id: 'tarse-voute',
      titre: 'Le tarse et la voûte plantaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le squelette du pied comprend sept os du tarse, cinq métatarsiens et les phalanges des orteils, dont l’agencement tridimensionnel forme la voûte plantaire, essentielle à l’amortissement et à la propulsion lors de la marche.",
        },
        {
          type: 'tableau',
          titre: 'Les sept os du tarse',
          colonnes: ['Rangée', 'Os'],
          lignes: [
            ['Postérieure', 'Talus, calcanéus'],
            ['Intermédiaire', 'Os naviculaire'],
            ['Antérieure', 'Cuboïde, trois cunéiformes (médial, intermédiaire, latéral)'],
          ],
        },
        {
          type: 'liste',
          items: [
            "L’arche longitudinale médiale, la plus haute et la plus souple, s’étend du calcanéus à la tête du premier métatarsien via le talus, l’os naviculaire et les cunéiformes.",
            "L’arche longitudinale latérale, plus basse et plus rigide, s’étend du calcanéus à la tête du cinquième métatarsien via le cuboïde.",
            "L’arche transversale relie les têtes des différents métatarsiens entre elles au niveau de l’avant-pied.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Pes planus et pes cavus',
          texte:
            "L’affaissement de l’arche longitudinale médiale définit le pied plat (pes planus), tandis qu’une arche anormalement creusée définit le pied creux (pes cavus). Ces deux déformations modifient la répartition des appuis plantaires et peuvent retentir sur l’ensemble de la statique du membre inférieur.",
        },
      ],
    },
    {
      id: 'nerfs-jambe-pied',
      titre: 'Les nerfs tibial et fibulaire commun',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le nerf tibial et le nerf fibulaire commun, branches terminales du nerf sciatique, innervent respectivement les loges postérieure et antérolatérale de la jambe, puis se poursuivent au pied selon des territoires bien définis.",
        },
        {
          type: 'tableau',
          titre: 'Territoires et atteintes cliniques',
          colonnes: ['Nerf', 'Territoire moteur', 'Atteinte clinique classique'],
          lignes: [
            ['Nerf tibial', 'Loges postérieures de la jambe, muscles plantaires', 'Compression au canal tarsien (en arrière de la malléole médiale) ; sa lésion abolit la flexion plantaire active'],
            ['Nerf fibulaire commun', 'Loges antérieure et latérale de la jambe, via ses branches profonde et superficielle', 'Compression au col de la fibula (trajet superficiel à cet endroit) ; sa lésion donne un pied tombant par paralysie des releveurs du pied'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le pied tombant',
          texte:
            "Le nerf fibulaire commun contourne le col de la fibula sous un trajet très superficiel, ce qui l’expose à une compression lors d’un alitement prolongé, d’un plâtre trop serré ou d’un traumatisme direct. Sa lésion entraîne une paralysie des muscles releveurs du pied, responsable d’un pied tombant avec steppage à la marche.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le tibia porte l’essentiel de la charge à la jambe ; la fibula joue surtout un rôle d’insertion musculaire et de stabilisation latérale de la cheville.",
    "Le genou comprend deux ménisques fibrocartilagineux et deux ligaments croisés, antérieur et postérieur, qui limitent les translations antéropostérieures du tibia.",
    "La jambe comprend quatre loges (antérieure, latérale, postérieure superficielle, postérieure profonde), chacune avec une innervation propre.",
    "Le tendon calcanéen, terminal du triceps sural, est le tendon le plus volumineux du corps humain.",
    "Le tarse comprend sept os, dont le talus et le calcanéus forment la rangée postérieure.",
    "La voûte plantaire comprend deux arches longitudinales (médiale et latérale) et une arche transversale.",
    "Le nerf fibulaire commun, exposé au col de la fibula, donne un pied tombant en cas de lésion ; le nerf tibial assure la flexion plantaire.",
  ],
  erreursFrequentes: [
    "Croire que la fibula participe directement à la transmission du poids du corps au genou.",
    "Confondre ligament croisé antérieur, qui limite la translation antérieure du tibia, et ligament croisé postérieur, qui en limite la translation postérieure.",
    "Situer le talus et le calcanéus dans la rangée antérieure du tarse, alors qu’ils forment la rangée postérieure.",
    "Attribuer la flexion plantaire au nerf fibulaire commun, alors qu’elle relève du nerf tibial.",
    "Oublier que le ménisque médial, moins mobile, est plus souvent lésé que le ménisque latéral.",
  ],
  mnemotechniques: [
    {
      moyen: 'Fibulaire commun abîmé, pied tombant',
      explication:
        'Le nerf fibulaire commun est superficiel au col de la fibula ; sa lésion paralyse les releveurs du pied et donne le steppage caractéristique.',
    },
    {
      moyen: 'Antérieur devant, postérieur derrière',
      explication:
        'Le ligament croisé antérieur s’insère sur la surface préspinale (antérieure) du tibia, le ligament croisé postérieur sur la surface rétrospinale (postérieure).',
    },
  ],
  sources: [
    'Kamina, Anatomie clinique, tome 1, Anatomie générale, membres',
    'Drake, Vogl, Mitchell, Gray’s Anatomie pour les étudiants',
    'Netter, Atlas d’anatomie humaine',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'anat-jambe-pied-fc-01',
      recto: 'Quel os de la jambe porte l’essentiel de la charge corporelle ?',
      verso: 'Le tibia.',
      type: 'definition',
      tags: ['os de la jambe'],
    },
    {
      id: 'anat-jambe-pied-fc-02',
      recto: 'Quel ménisque du genou est le plus souvent lésé et pourquoi ?',
      verso: 'Le ménisque médial, car il est moins mobile que le ménisque latéral.',
      type: 'clinique',
      tags: ['ménisques'],
    },
    {
      id: 'anat-jambe-pied-fc-03',
      recto: 'Quel ligament croisé limite la translation antérieure du tibia ?',
      verso: 'Le ligament croisé antérieur.',
      type: 'mecanisme',
      tags: ['ligaments croisés'],
    },
    {
      id: 'anat-jambe-pied-fc-04',
      recto: 'Décrire la triade malheureuse d’O’Donoghue.',
      verso: 'Lésion associée du ligament collatéral tibial, du ligament croisé antérieur et du ménisque médial, lors d’un traumatisme en valgus-flexion-rotation latérale.',
      type: 'clinique',
      tags: ['genou', 'traumatologie'],
    },
    {
      id: 'anat-jambe-pied-fc-05',
      recto: 'Quel nerf innerve la loge postérieure de la jambe ?',
      verso: 'Le nerf tibial.',
      type: 'mecanisme',
      tags: ['nerfs jambe'],
    },
    {
      id: 'anat-jambe-pied-fc-06',
      recto: 'Quel nerf innerve les loges antérieure et latérale de la jambe ?',
      verso: 'Le nerf fibulaire commun, via ses branches profonde et superficielle.',
      type: 'mecanisme',
      tags: ['nerfs jambe'],
    },
    {
      id: 'anat-jambe-pied-fc-07',
      recto: 'Quel tendon est le plus volumineux du corps humain ?',
      verso: 'Le tendon calcanéen (tendon d’Achille), tendon terminal du triceps sural.',
      type: 'chiffre',
      tags: ['tendon calcanéen'],
    },
    {
      id: 'anat-jambe-pied-fc-08',
      recto: 'Citer les os de la rangée postérieure du tarse.',
      verso: 'Le talus et le calcanéus.',
      type: 'classification',
      tags: ['tarse'],
    },
    {
      id: 'anat-jambe-pied-fc-09',
      recto: 'Citer les trois arches de la voûte plantaire.',
      verso: 'L’arche longitudinale médiale, l’arche longitudinale latérale et l’arche transversale.',
      type: 'classification',
      tags: ['voûte plantaire'],
    },
    {
      id: 'anat-jambe-pied-fc-10',
      recto: 'Qu’est-ce qu’un pied tombant et à quelle atteinte nerveuse correspond-il ?',
      verso: 'Une paralysie des muscles releveurs du pied avec steppage à la marche, due à une lésion du nerf fibulaire commun, souvent au col de la fibula.',
      type: 'clinique',
      tags: ['nerf fibulaire commun'],
    },
    {
      id: 'anat-jambe-pied-fc-11',
      recto: 'Où se situe le site de compression classique du nerf tibial à la cheville ?',
      verso: 'Le canal tarsien, en arrière de la malléole médiale.',
      type: 'clinique',
      tags: ['nerf tibial'],
    },
    {
      id: 'anat-jambe-pied-fc-12',
      recto: 'Qu’est-ce que le syndrome des loges ?',
      verso: 'Une augmentation de pression dans une loge musculaire inextensible, comprimant vaisseaux et nerfs, urgence chirurgicale traitée par aponévrotomie de décharge.',
      type: 'clinique',
      tags: ['syndrome des loges'],
    },
  ],
  qcm: [
    {
      id: 'anat-jambe-pied-qcm-01',
      enonce: 'Concernant les os de la jambe, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le tibia est médial, la fibula est latérale.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'La fibula participe directement à la transmission du poids du corps au genou.', vraie: false, justification: 'Faux : cette fonction est assurée par le tibia ; la fibula sert surtout à l’insertion musculaire et à la stabilité de la cheville.' },
        { lettre: 'C', texte: 'La malléole latérale est plus longue et plus distale que la malléole médiale.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'La membrane interosseuse crurale relie le tibia et la fibula.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'La tubérosité tibiale reçoit l’insertion du tendon patellaire.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'anat-jambe-pied-qcm-02',
      enonce: 'Concernant le genou, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le ligament croisé antérieur limite la translation postérieure du tibia.', vraie: false, justification: 'Faux : c’est le ligament croisé postérieur qui limite la translation postérieure.' },
        { lettre: 'B', texte: 'Le ménisque latéral est plus mobile que le ménisque médial.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Les ligaments croisés sont intracapsulaires et extrasynoviaux.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le ligament collatéral tibial limite le varus excessif.', vraie: false, justification: 'Faux : le ligament collatéral tibial limite le valgus excessif ; le ligament collatéral fibulaire limite le varus.' },
        { lettre: 'E', texte: 'La triade malheureuse associe une lésion du ligament croisé antérieur, du ligament collatéral tibial et du ménisque médial.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-jambe-pied-qcm-03',
      enonce: 'Concernant les loges de la jambe, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le tibial antérieur appartient à la loge antérieure.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le triceps sural appartient à la loge postérieure superficielle.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'La loge latérale est innervée par le nerf tibial.', vraie: false, justification: 'Faux : la loge latérale est innervée par le nerf fibulaire superficiel.' },
        { lettre: 'D', texte: 'Le tendon calcanéen se termine sur le calcanéus.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'La loge antérieure est responsable de la flexion plantaire.', vraie: false, justification: 'Faux : la loge antérieure assure la flexion dorsale ; la flexion plantaire relève des loges postérieures.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'anat-jambe-pied-qcm-04',
      enonce: 'Concernant le tarse et la voûte plantaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le tarse comprend sept os.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le talus et le calcanéus forment la rangée antérieure du tarse.', vraie: false, justification: 'Faux : ils forment la rangée postérieure.' },
        { lettre: 'C', texte: 'L’arche longitudinale médiale s’étend du calcanéus à la tête du premier métatarsien.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le pes cavus correspond à un affaissement de l’arche plantaire.', vraie: false, justification: 'Faux : c’est le pes planus (pied plat) qui correspond à un affaissement ; le pes cavus est un creusement excessif.' },
        { lettre: 'E', texte: 'L’arche transversale relie les têtes des métatarsiens.', vraie: true, justification: 'Exact.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-jambe-pied-qcm-05',
      enonce: 'Concernant les nerfs de la jambe et du pied, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le nerf tibial assure la flexion plantaire.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le nerf fibulaire commun est exposé à une compression au col de la fibula.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'Une lésion du nerf fibulaire commun entraîne un pied tombant.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Le nerf tibial peut être comprimé au canal tarsien, en avant de la malléole médiale.', vraie: false, justification: 'Faux : le canal tarsien se situe en arrière de la malléole médiale, non en avant.' },
        { lettre: 'E', texte: 'Le nerf fibulaire commun et le nerf tibial sont tous deux issus du nerf sciatique.', vraie: true, justification: 'Exact, ce sont ses deux branches terminales.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'anat-jambe-pied-qcm-06',
      enonce: 'Concernant le syndrome des loges, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il résulte d’une augmentation de pression dans une loge musculaire inextensible.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Il ne menace jamais la viabilité musculaire.', vraie: false, justification: 'Faux : il peut compromettre la viabilité musculaire et nerveuse en quelques heures.' },
        { lettre: 'C', texte: 'Son traitement peut nécessiter une aponévrotomie de décharge.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'Il constitue une urgence chirurgicale.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Il ne peut survenir qu’au niveau de la cuisse.', vraie: false, justification: 'Faux : il peut survenir dans n’importe quelle loge ostéofasciale inextensible, notamment à la jambe.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
