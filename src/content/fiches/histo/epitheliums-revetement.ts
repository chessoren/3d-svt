import type { Fiche } from '../../types';

export const ficheEpitheliumsRevetement: Fiche = {
  id: 'histo-epitheliums-revetement',
  ue: 'histo',
  titre: 'Les épithéliums de revêtement',
  sousTitre: 'Classification, polarité, spécialisations apicales et renouvellement des épithéliums',
  chapitre: 'Les tissus fondamentaux',
  ordre: 2,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'épithélium',
    'pavimenteux',
    'cubique',
    'prismatique',
    'microvillosités',
    'cils vibratiles',
    'lame basale',
    'polarité cellulaire',
  ],
  objectifs: [
    "Définir un épithélium de revêtement et ses caractéristiques générales communes.",
    "Classer les épithéliums selon le nombre de couches cellulaires et la forme des cellules superficielles.",
    "Décrire les spécialisations de la membrane apicale et leur rôle fonctionnel.",
    "Expliquer la notion de polarité cellulaire et la structure de la lame basale.",
    "Citer des exemples topographiques représentatifs de chaque type épithélial.",
  ],
  sections: [
    {
      id: 'generalites',
      titre: 'Généralités sur les épithéliums de revêtement',
      blocs: [
        {
          type: 'definition',
          terme: 'Épithélium de revêtement',
          definition:
            "Tissu constitué de cellules jointives, disposées en une ou plusieurs couches, qui tapisse les surfaces externes du corps et les cavités internes communiquant avec l’extérieur. Il repose toujours sur une lame basale qui le sépare du tissu conjonctif sous-jacent.",
        },
        {
          type: 'liste',
          items: [
            "Les cellules épithéliales sont jointives, unies par des complexes de jonction qui limitent le passage paracellulaire.",
            "L’épithélium est avasculaire : sa nutrition dépend de la diffusion à partir des capillaires du tissu conjonctif sous-jacent.",
            "Il repose sur une lame basale, structure acellulaire qui l’ancre au tissu conjonctif et régule les échanges.",
            "Toute cellule épithéliale est polarisée, avec un pôle apical, un pôle basal et des faces latérales aux propriétés distinctes.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Origine embryologique variable',
          texte:
            "Les épithéliums de revêtement dérivent le plus souvent de l’ectoderme (épiderme) ou de l’endoderme (muqueuse digestive, respiratoire), mais certains dérivent du mésoderme, comme l’endothélium vasculaire et le mésothélium des séreuses.",
        },
      ],
    },
    {
      id: 'classification',
      titre: 'Classification morphologique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La classification usuelle des épithéliums de revêtement associe deux critères : le nombre de couches cellulaires et la forme des cellules de la couche la plus superficielle. Cette double lecture permet de nommer précisément tout épithélium observé sur une coupe.",
        },
        {
          type: 'tableau',
          titre: 'Classification selon le nombre de couches',
          colonnes: ['Type', 'Définition', 'Exemple'],
          lignes: [
            ['Simple (unistratifié)', 'Une seule couche de cellules, toutes reposant sur la lame basale', 'Endothélium vasculaire, épithélium intestinal'],
            ['Stratifié (pluristratifié)', 'Plusieurs couches superposées, seule la couche basale reposant sur la lame basale', 'Épiderme, épithélium œsophagien'],
            ['Pseudostratifié', 'Une seule couche, mais toutes les cellules n’atteignent pas la surface, donnant une fausse impression de stratification', 'Épithélium respiratoire des voies aériennes'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Classification selon la forme des cellules superficielles',
          colonnes: ['Forme', 'Description', 'Exemple simple', 'Exemple stratifié'],
          lignes: [
            ['Pavimenteux', 'Cellules aplaties, plus larges que hautes', 'Endothélium, mésothélium', 'Épiderme, épithélium œsophagien'],
            ['Cubique', 'Cellules aussi larges que hautes', 'Tubes rénaux, canaux excréteurs glandulaires', 'Canaux excréteurs des glandes sudoripares'],
            ['Prismatique (cylindrique)', 'Cellules plus hautes que larges', 'Épithélium intestinal, épithélium gastrique', 'Rare, conjonctive palpébrale par exemple'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Cas particulier de l’épithélium urinaire',
          texte:
            "L’épithélium des voies urinaires, appelé épithélium de transition ou urothélium, est un épithélium pluristratifié particulier : son aspect varie selon l’état de distension de l’organe, avec des cellules superficielles dites en ombrelle. C’est un cas à part qui ne rentre pas strictement dans le cadre pavimenteux, cubique ou prismatique.",
        },
      ],
    },
    {
      id: 'polarite-jonctions',
      titre: 'Polarité cellulaire et complexes de jonction',
      blocs: [
        {
          type: 'definition',
          terme: 'Polarité cellulaire',
          definition:
            "Organisation asymétrique de la cellule épithéliale en trois domaines fonctionnellement distincts : le pôle apical, tourné vers la lumière ou la surface libre, le pôle basal, en contact avec la lame basale, et les faces latérales, en contact avec les cellules voisines.",
        },
        {
          type: 'tableau',
          titre: 'Complexes de jonction intercellulaires',
          colonnes: ['Jonction', 'Localisation', 'Fonction principale'],
          lignes: [
            ['Jonction serrée (zonula occludens)', 'Pôle apical, la plus superficielle', 'Étanchéité, contrôle du passage paracellulaire'],
            ['Jonction adhérente (zonula adherens)', 'Sous la jonction serrée', 'Cohésion cellulaire, ancrage du cytosquelette d’actine'],
            ['Desmosome (macula adherens)', 'Réparti sur la face latérale', 'Résistance mécanique, ancrage des filaments intermédiaires'],
            ['Jonction communicante (gap junction)', 'Face latérale', 'Communication intercellulaire directe par échange d’ions et de petites molécules'],
            ['Hémidesmosome', 'Pôle basal', 'Ancrage de la cellule à la lame basale'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre desmosome et hémidesmosome',
          texte:
            "Le desmosome unit deux cellules épithéliales entre elles, sur leur face latérale. L’hémidesmosome, structurellement apparenté, unit une cellule épithéliale à la lame basale sous-jacente, au pôle basal. Leur ressemblance moléculaire ne doit pas faire confondre leur localisation.",
        },
      ],
    },
    {
      id: 'specialisations-apicales',
      titre: 'Spécialisations de la membrane apicale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le pôle apical de certaines cellules épithéliales présente des différenciations spécialisées, adaptées à leur fonction : absorption, protection ou déplacement de substances à la surface de l’épithélium.",
        },
        {
          type: 'tableau',
          titre: 'Principales spécialisations apicales',
          colonnes: ['Spécialisation', 'Structure', 'Fonction', 'Exemple'],
          lignes: [
            ['Microvillosités', 'Expansions cytoplasmiques fines à cœur d’actine, régulières', 'Augmentation de la surface d’échange', 'Entérocytes (bordure en brosse), cellules du tube contourné proximal'],
            ['Stéréocils', 'Longues microvillosités immobiles, ramifiées', 'Absorption, mécanoréception', 'Épididyme, cellules ciliées de l’oreille interne'],
            ['Cils vibratiles', 'Expansions mobiles à structure axonémale interne', 'Déplacement de mucus ou de liquide à la surface', 'Épithélium respiratoire, trompe utérine'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre cils et microvillosités',
          texte:
            "Les cils vibratiles sont mobiles, animés d’un battement coordonné, et possèdent une structure interne organisée en microtubules (axonème). Les microvillosités sont immobiles, à cœur d’actine, et servent essentiellement à l’absorption en augmentant la surface d’échange.",
        },
      ],
    },
    {
      id: 'lame-basale',
      titre: 'La lame basale',
      blocs: [
        {
          type: 'definition',
          terme: 'Lame basale',
          definition:
            "Structure extracellulaire fine, sécrétée par les cellules épithéliales et par le tissu conjonctif sous-jacent, qui sépare l’épithélium du chorion conjonctif. Elle assure l’ancrage de l’épithélium, filtre certains échanges et guide la migration cellulaire lors de la régénération.",
        },
        {
          type: 'liste',
          items: [
            "La lame basale est composée principalement de collagène de type IV, de laminine, d’entactine et de protéoglycanes.",
            "Elle se distingue en deux feuillets accolés en microscopie électronique : la lamina lucida, claire, et la lamina densa, plus dense aux électrons.",
            "Elle n’est visible en microscopie photonique standard qu’après une coloration spéciale, notamment la réaction PAS, qui révèle sa richesse en glycoprotéines.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Rupture de la jonction dermo-épidermique',
          texte:
            "Certaines maladies bulleuses auto-immunes, comme la pemphigoïde bulleuse, résultent d’une atteinte des protéines d’ancrage de la lame basale ou des hémidesmosomes, entraînant un décollement entre l’épiderme et le derme.",
        },
      ],
    },
    {
      id: 'renouvellement-exemples',
      titre: 'Renouvellement et exemples topographiques',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les épithéliums de revêtement ont un fort pouvoir de renouvellement, assuré par des cellules souches localisées dans un compartiment précis selon le type d’épithélium. Ce renouvellement permanent compense la desquamation ou l’usure de surface.",
        },
        {
          type: 'tableau',
          titre: 'Localisation des cellules souches selon l’épithélium',
          colonnes: ['Épithélium', 'Localisation des cellules souches'],
          lignes: [
            ['Épiderme', 'Couche basale, en contact avec la lame basale'],
            ['Épithélium intestinal', 'Fond des cryptes de Lieberkühn'],
            ['Épithélium gastrique', 'Collet des glandes gastriques'],
          ],
        },
        {
          type: 'tableau',
          titre: 'Exemples topographiques d’épithéliums de revêtement',
          colonnes: ['Localisation', 'Type d’épithélium'],
          lignes: [
            ['Épiderme', 'Pavimenteux stratifié kératinisé'],
            ['Œsophage', 'Pavimenteux stratifié non kératinisé'],
            ['Intestin grêle', 'Prismatique simple à bordure en brosse'],
            ['Voies aériennes (trachée, bronches)', 'Pseudostratifié cilié'],
            ['Vaisseaux sanguins', 'Pavimenteux simple (endothélium)'],
            ['Voies urinaires', 'Épithélium de transition (urothélium)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Renouvellement de l’épiderme',
          texte:
            "Le renouvellement complet de l’épiderme humain s’effectue en plusieurs semaines, la kératinocyte migrant progressivement de la couche basale vers la surface où elle desquame.",
        },
      ],
    },
  ],
  pointsCles: [
    "Un épithélium de revêtement est un tissu avasculaire, fait de cellules jointives reposant sur une lame basale.",
    "La classification associe le nombre de couches (simple, stratifié, pseudostratifié) et la forme des cellules superficielles (pavimenteux, cubique, prismatique).",
    "L’épithélium de transition (urothélium) des voies urinaires est un cas particulier hors de cette classification classique.",
    "La cellule épithéliale est polarisée : pôle apical, pôle basal et faces latérales aux propriétés jonctionnelles distinctes.",
    "Les cils vibratiles sont mobiles et déplacent le mucus ; les microvillosités sont immobiles et augmentent la surface d’absorption.",
    "La lame basale, riche en collagène IV et laminine, ancre l’épithélium et se colore par la réaction PAS.",
    "Le renouvellement épithélial dépend de cellules souches localisées dans un compartiment précis selon le tissu.",
  ],
  erreursFrequentes: [
    "Confondre desmosome, qui unit deux cellules épithéliales, et hémidesmosome, qui ancre la cellule à la lame basale.",
    "Confondre cils vibratiles, mobiles, et microvillosités, immobiles.",
    "Croire que tous les épithéliums pseudostratifiés sont en réalité stratifiés : toutes leurs cellules reposent en fait sur la lame basale, une seule couche existe.",
    "Oublier que l’épithélium de transition change d’aspect selon l’état de distension de la paroi urinaire.",
    "Penser que l’épithélium est vascularisé : sa nutrition dépend uniquement de la diffusion depuis le tissu conjonctif sous-jacent.",
    "Confondre la classification par nombre de couches et celle par forme cellulaire, qui doivent toujours être associées pour nommer un épithélium.",
  ],
  mnemotechniques: [
    {
      moyen: 'PCP pour nommer un épithélium : Pavimenteux, Cubique, Prismatique',
      explication:
        'Trois formes possibles pour les cellules superficielles, à toujours associer au nombre de couches (simple ou stratifié).',
    },
    {
      moyen: 'Cils bougent, villosités boivent',
      explication:
        'Les cils vibratiles assurent un mouvement (déplacement du mucus), les microvillosités augmentent la surface pour l’absorption.',
    },
    {
      moyen: 'Hémidesmosome = moitié de desmosome, vers la base',
      explication:
        'Le préfixe « hémi » rappelle qu’il unit la cellule à la lame basale et non à une autre cellule, contrairement au desmosome complet.',
    },
  ],
  sources: [
    'Wheater, Histologie fonctionnelle',
    'Junqueira, Histologie',
    'Poirier, Histologie moléculaire',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'histo-epitheliums-revetement-fc-01',
      recto: 'Sur quoi repose toujours un épithélium de revêtement ?',
      verso: 'Sur une lame basale, qui le sépare du tissu conjonctif sous-jacent.',
      type: 'definition',
      tags: ['épithélium', 'lame basale'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-02',
      recto: 'Quels sont les deux critères de classification morphologique d’un épithélium ?',
      verso: 'Le nombre de couches cellulaires (simple, stratifié, pseudostratifié) et la forme des cellules superficielles (pavimenteux, cubique, prismatique).',
      type: 'classification',
      tags: ['classification'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-03',
      recto: 'Qu’est-ce qu’un épithélium pseudostratifié ?',
      verso: 'Un épithélium à une seule couche de cellules, toutes reposant sur la lame basale, mais dont certaines n’atteignent pas la surface, donnant une fausse impression de plusieurs couches.',
      type: 'definition',
      tags: ['pseudostratifié'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-04',
      recto: 'Quel épithélium tapisse la trachée et les bronches ?',
      verso: 'Un épithélium pseudostratifié cilié.',
      type: 'classification',
      tags: ['appareil respiratoire'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-05',
      recto: 'Quelle jonction assure l’étanchéité au pôle apical des cellules épithéliales ?',
      verso: 'La jonction serrée, ou zonula occludens.',
      type: 'mecanisme',
      tags: ['jonctions'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-06',
      recto: 'Quelle est la différence entre desmosome et hémidesmosome ?',
      verso: 'Le desmosome unit deux cellules épithéliales entre elles ; l’hémidesmosome ancre une cellule épithéliale à la lame basale.',
      type: 'mecanisme',
      tags: ['jonctions', 'lame basale'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-07',
      recto: 'Quelle est la différence structurale et fonctionnelle entre cils vibratiles et microvillosités ?',
      verso: 'Les cils sont mobiles, à structure axonémale, et déplacent le mucus ; les microvillosités sont immobiles, à cœur d’actine, et augmentent la surface d’absorption.',
      type: 'mecanisme',
      tags: ['spécialisations apicales'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-08',
      recto: 'Quels sont les principaux constituants moléculaires de la lame basale ?',
      verso: 'Le collagène de type IV, la laminine, l’entactine et des protéoglycanes.',
      type: 'chiffre',
      tags: ['lame basale'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-09',
      recto: 'Quel épithélium tapisse les voies urinaires ?',
      verso: 'L’épithélium de transition, ou urothélium, un épithélium pluristratifié dont l’aspect varie selon la distension.',
      type: 'classification',
      tags: ['urothélium'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-10',
      recto: 'Où se situent les cellules souches de l’épiderme ?',
      verso: 'Dans la couche basale, au contact de la lame basale.',
      type: 'definition',
      tags: ['renouvellement'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-11',
      recto: 'Quelle coloration spéciale révèle la lame basale en microscopie photonique ?',
      verso: 'La réaction à l’acide périodique de Schiff (PAS), en raison de sa richesse en glycoprotéines.',
      type: 'mecanisme',
      tags: ['lame basale', 'coloration'],
    },
    {
      id: 'histo-epitheliums-revetement-fc-12',
      recto: 'Citer un exemple d’épithélium pavimenteux simple.',
      verso: 'L’endothélium vasculaire ou le mésothélium des séreuses.',
      type: 'classification',
      tags: ['exemples'],
    },
  ],
  qcm: [
    {
      id: 'histo-epitheliums-revetement-qcm-01',
      enonce: 'Concernant les caractéristiques générales des épithéliums de revêtement, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Ils sont vascularisés par des capillaires intra-épithéliaux.',
          vraie: false,
          justification: 'Faux : ils sont avasculaires ; leur nutrition dépend de la diffusion depuis le tissu conjonctif sous-jacent.',
        },
        {
          lettre: 'B',
          texte: 'Toutes les cellules épithéliales reposent directement sur la lame basale.',
          vraie: false,
          justification: 'Faux : dans un épithélium stratifié, seule la couche basale repose sur la lame basale.',
        },
        {
          lettre: 'C',
          texte: 'Les cellules épithéliales sont polarisées avec un pôle apical et un pôle basal distincts.',
          vraie: true,
          justification: 'Exact : c’est une caractéristique fondamentale de toute cellule épithéliale.',
        },
        {
          lettre: 'D',
          texte: 'Les cellules épithéliales sont unies par des complexes de jonction.',
          vraie: true,
          justification: 'Exact : jonctions serrées, adhérentes, desmosomes et jonctions communicantes assurent cohésion et fonction.',
        },
        {
          lettre: 'E',
          texte: 'Tous les épithéliums de revêtement dérivent exclusivement de l’ectoderme.',
          vraie: false,
          justification: 'Faux : ils peuvent dériver de l’ectoderme, de l’endoderme, ou du mésoderme (endothélium, mésothélium).',
        },
      ],
      correction: 'Réponses exactes : C et D. Retenir l’avascularité, l’appui sur la lame basale et la polarité comme traits communs.',
      difficulte: 1,
    },
    {
      id: 'histo-epitheliums-revetement-qcm-02',
      enonce: 'Concernant la classification morphologique des épithéliums, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un épithélium simple ne comporte qu’une seule couche de cellules.',
          vraie: true,
          justification: 'Exact, c’est la définition d’un épithélium simple ou unistratifié.',
        },
        {
          lettre: 'B',
          texte: 'L’épithélium pseudostratifié comporte réellement plusieurs couches de cellules.',
          vraie: false,
          justification: 'Faux : il ne comporte qu’une seule couche, toutes les cellules reposant sur la lame basale, malgré l’aspect stratifié.',
        },
        {
          lettre: 'C',
          texte: 'L’épithélium intestinal est un épithélium prismatique simple.',
          vraie: true,
          justification: 'Exact, avec une bordure en brosse à sa surface apicale.',
        },
        {
          lettre: 'D',
          texte: 'L’épiderme est un épithélium pavimenteux stratifié kératinisé.',
          vraie: true,
          justification: 'Exact, kératinisé en raison de la présence d’une couche cornée superficielle.',
        },
        {
          lettre: 'E',
          texte: 'L’épithélium de transition des voies urinaires est un épithélium simple prismatique.',
          vraie: false,
          justification: 'Faux : c’est un épithélium pluristratifié particulier, dit de transition, dont l’aspect varie avec la distension.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. L’urothélium constitue une exception à mémoriser à part.',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-revetement-qcm-03',
      enonce: 'Concernant les complexes de jonction, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'La jonction serrée est la plus apicale des jonctions intercellulaires.',
          vraie: true,
          justification: 'Exact : elle forme une ceinture étanche proche de la surface libre.',
        },
        {
          lettre: 'B',
          texte: 'Le desmosome ancre la cellule épithéliale à la lame basale.',
          vraie: false,
          justification: 'Faux : c’est l’hémidesmosome qui joue ce rôle ; le desmosome unit deux cellules entre elles.',
        },
        {
          lettre: 'C',
          texte: 'La jonction communicante permet le passage direct de petites molécules entre cellules voisines.',
          vraie: true,
          justification: 'Exact : c’est le rôle de la gap junction.',
        },
        {
          lettre: 'D',
          texte: 'Les jonctions adhérentes sont associées au cytosquelette d’actine.',
          vraie: true,
          justification: 'Exact, contrairement aux desmosomes associés aux filaments intermédiaires.',
        },
        {
          lettre: 'E',
          texte: 'L’hémidesmosome se situe au pôle apical de la cellule.',
          vraie: false,
          justification: 'Faux : il se situe au pôle basal, en contact avec la lame basale.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. Toujours localiser précisément chaque jonction avant de conclure.',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-revetement-qcm-04',
      enonce: 'Concernant les spécialisations de la membrane apicale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Les microvillosités sont mobiles et battent de façon coordonnée.',
          vraie: false,
          justification: 'Faux : les microvillosités sont immobiles ; ce sont les cils vibratiles qui sont mobiles.',
        },
        {
          lettre: 'B',
          texte: 'Les cils vibratiles possèdent une structure interne organisée en microtubules.',
          vraie: true,
          justification: 'Exact : l’axonème ciliaire est constitué de microtubules.',
        },
        {
          lettre: 'C',
          texte: 'Les stéréocils sont retrouvés notamment dans l’épididyme.',
          vraie: true,
          justification: 'Exact, où ils augmentent la surface d’absorption du liquide épididymaire.',
        },
        {
          lettre: 'D',
          texte: 'La bordure en brosse des entérocytes correspond à des cils vibratiles.',
          vraie: false,
          justification: 'Faux : elle correspond à des microvillosités, immobiles, dédiées à l’absorption.',
        },
        {
          lettre: 'E',
          texte: 'Les microvillosités augmentent la surface d’échange de la cellule.',
          vraie: true,
          justification: 'Exact, c’est leur fonction principale.',
        },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir : cils = mobilité, microvillosités et stéréocils = absorption.',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-revetement-qcm-05',
      enonce: 'Concernant la lame basale, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Elle est composée principalement de collagène de type IV et de laminine.',
          vraie: true,
          justification: 'Exact, ce sont ses deux constituants majeurs avec l’entactine.',
        },
        {
          lettre: 'B',
          texte: 'Elle est facilement visible sur une coloration HES standard.',
          vraie: false,
          justification: 'Faux : elle nécessite une coloration spéciale, comme la réaction PAS, pour être bien visualisée.',
        },
        {
          lettre: 'C',
          texte: 'Elle comporte deux feuillets distincts en microscopie électronique : lamina lucida et lamina densa.',
          vraie: true,
          justification: 'Exact, ces deux feuillets sont individualisables à l’échelle ultrastructurale.',
        },
        {
          lettre: 'D',
          texte: 'Elle sépare l’épithélium du chorion conjonctif sous-jacent.',
          vraie: true,
          justification: 'Exact, c’est sa fonction structurale principale.',
        },
        {
          lettre: 'E',
          texte: 'Elle est sécrétée exclusivement par les cellules du tissu conjonctif.',
          vraie: false,
          justification: 'Faux : elle résulte d’une sécrétion conjointe des cellules épithéliales et du tissu conjonctif sous-jacent.',
        },
      ],
      correction: 'Réponses exactes : A, C et D. La lame basale est une structure mixte, épithéliale et conjonctive.',
      difficulte: 2,
    },
    {
      id: 'histo-epitheliums-revetement-qcm-06',
      enonce: 'Concernant les exemples topographiques d’épithéliums, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'L’œsophage est tapissé par un épithélium pavimenteux stratifié non kératinisé.',
          vraie: true,
          justification: 'Exact, à la différence de l’épiderme qui est kératinisé.',
        },
        {
          lettre: 'B',
          texte: 'L’endothélium vasculaire est un épithélium pavimenteux simple.',
          vraie: true,
          justification: 'Exact, il tapisse la face interne des vaisseaux sanguins.',
        },
        {
          lettre: 'C',
          texte: 'Les cellules souches de l’épithélium gastrique se situent au fond des cryptes de Lieberkühn.',
          vraie: false,
          justification: 'Faux : les cryptes de Lieberkühn appartiennent à l’intestin ; dans l’estomac, les cellules souches se situent au collet des glandes gastriques.',
        },
        {
          lettre: 'D',
          texte: 'Les voies aériennes sont tapissées par un épithélium pseudostratifié cilié.',
          vraie: true,
          justification: 'Exact, adapté au transport du mucus par le battement ciliaire coordonné.',
        },
        {
          lettre: 'E',
          texte: 'Les canaux excréteurs des glandes sudoripares sont typiquement bordés par un épithélium cubique.',
          vraie: true,
          justification: 'Exact, c’est un exemple classique d’épithélium cubique stratifié ou simple selon le segment.',
        },
      ],
      correction: 'Réponses exactes : A, B, D et E. Associer systématiquement chaque organe à son épithélium de revêtement typique.',
      difficulte: 2,
    },
  ],
};
