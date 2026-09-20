import type { Fiche } from '../../types';

export const ficheEnzymologieGenerale: Fiche = {
  id: 'bioch-enzymologie-generale',
  ue: 'bioch',
  titre: 'Enzymologie : généralités et cinétique',
  sousTitre: 'Catalyse enzymatique, spécificité, Michaelis-Menten et représentation de Lineweaver-Burk',
  chapitre: 'Enzymologie',
  ordre: 7,
  duree: 28,
  difficulte: 2,
  motsCles: [
    'enzyme',
    'site actif',
    'spécificité',
    'catalyse',
    'Michaelis-Menten',
    'Km',
    'Vmax',
    'Lineweaver-Burk',
    'unité enzymatique',
  ],
  objectifs: [
    'Définir une enzyme et décrire les grandes classes selon la nomenclature internationale.',
    'Décrire le site actif et les notions de spécificité de substrat et de réaction.',
    'Établir et interpréter l’équation de Michaelis-Menten.',
    'Définir le Km et le Vmax et leur signification cinétique.',
    'Construire et interpréter la représentation en double inverse de Lineweaver-Burk.',
    'Connaître les unités usuelles d’activité enzymatique.',
  ],
  sections: [
    {
      id: 'generalites-catalyse',
      titre: 'Généralités sur la catalyse enzymatique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une enzyme est une protéine (à de rares exceptions près, comme certains ARN catalytiques appelés ribozymes) qui catalyse une réaction biochimique en abaissant son énergie d’activation, sans modifier la constante d’équilibre thermodynamique de la réaction, ni être consommée au cours de celle-ci.",
        },
        {
          type: 'definition',
          terme: 'Énergie d’activation',
          definition:
            "Barrière énergétique que doit franchir un système réactionnel pour passer des substrats aux produits, en passant par un état de transition instable. L’enzyme stabilise cet état de transition, ce qui abaisse l’énergie d’activation et accélère la réaction sans en changer le sens thermodynamique.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ce qu’une enzyme ne change pas',
          texte:
            "Une enzyme accélère la vitesse à laquelle l’équilibre est atteint, mais ne déplace jamais la position de cet équilibre : les concentrations finales de substrat et de produit à l’équilibre sont identiques, avec ou sans enzyme. Seule la variation d’énergie libre (ΔG) de la réaction détermine le sens et l’amplitude de l’équilibre.",
        },
        {
          type: 'tableau',
          titre: 'Les six classes d’enzymes (nomenclature EC)',
          colonnes: ['Classe', 'Réaction catalysée', 'Exemple'],
          lignes: [
            ['Oxydoréductases', 'Transfert d’électrons ou d’hydrogène', 'Déshydrogénases, oxydases'],
            ['Transférases', 'Transfert d’un groupement fonctionnel', 'Kinases, transaminases'],
            ['Hydrolases', 'Hydrolyse d’une liaison', 'Protéases, lipases, amylases'],
            ['Lyases', 'Rupture d’une liaison sans hydrolyse ni oxydoréduction', 'Décarboxylases, aldolases'],
            ['Isomérases', 'Réarrangement intramoléculaire', 'Épimérases, racémases'],
            ['Ligases', 'Formation d’une liaison couplée à l’hydrolyse d’ATP', 'Synthétases, carboxylases'],
          ],
        },
      ],
    },
    {
      id: 'site-actif-specificite',
      titre: 'Site actif et spécificité',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le site actif est la région restreinte de l’enzyme, souvent une cavité ou une crevasse, où se fixe le substrat et où se déroule la réaction catalytique. Il n’occupe généralement qu’une faible proportion du volume total de la protéine.",
        },
        {
          type: 'tableau',
          titre: 'Deux modèles historiques de reconnaissance enzyme-substrat',
          colonnes: ['Modèle', 'Principe'],
          lignes: [
            ['Clé-serrure (Fischer)', 'Le site actif présente une forme rigide, complémentaire de celle du substrat'],
            ['Ajustement induit (Koshland)', 'La fixation du substrat induit un changement de conformation du site actif, optimisant la complémentarité et souvent la catalyse'],
          ],
        },
        {
          type: 'definition',
          terme: 'Spécificité enzymatique',
          definition:
            "Capacité d’une enzyme à reconnaître sélectivement un substrat donné (spécificité de substrat) et à catalyser un type de réaction donné sur ce substrat (spécificité de réaction), parmi de nombreuses transformations chimiques possibles.",
        },
        {
          type: 'liste',
          items: [
            'Certaines enzymes possèdent une spécificité de substrat absolue, ne reconnaissant qu’une seule molécule (par exemple l’uréase, spécifique de l’urée).',
            'D’autres présentent une spécificité de groupe, agissant sur une famille de substrats apparentés (par exemple les protéases à sérine, actives sur de nombreuses liaisons peptidiques).',
          ],
        },
      ],
    },
    {
      id: 'michaelis-menten',
      titre: 'Le modèle de Michaelis-Menten',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le modèle de Michaelis-Menten décrit la cinétique des réactions catalysées par une enzyme fixant un seul substrat, en postulant la formation réversible d’un complexe enzyme-substrat (ES) intermédiaire avant la formation du produit.",
        },
        {
          type: 'etapes',
          titre: 'Schéma réactionnel de Michaelis-Menten',
          etapes: [
            {
              titre: 'Formation du complexe ES',
              detail: 'L’enzyme (E) se lie de façon réversible au substrat (S) pour former le complexe ES, avec une constante de vitesse k1 pour l’association et k-1 pour la dissociation.',
            },
            {
              titre: 'Transformation catalytique',
              detail: 'Le complexe ES se transforme en enzyme libre (E) et en produit (P), avec une constante de vitesse k2, souvent notée kcat.',
            },
            {
              titre: 'Hypothèse de l’état quasi stationnaire',
              detail: 'La concentration du complexe ES est supposée constante au cours de la phase initiale de la réaction, ce qui permet de dériver l’équation de vitesse.',
            },
          ],
        },
        {
          type: 'formule',
          expression: 'v0 = (Vmax × [S]) / (Km + [S])',
          legende: 'Équation de Michaelis-Menten, reliant la vitesse initiale v0 à la concentration en substrat [S].',
        },
        {
          type: 'definition',
          terme: 'Vmax',
          definition:
            "Vitesse maximale de la réaction, atteinte lorsque toutes les molécules d’enzyme sont saturées par le substrat, c’est-à-dire lorsque [S] tend vers l’infini.",
        },
        {
          type: 'definition',
          terme: 'Km (constante de Michaelis)',
          definition:
            "Concentration en substrat pour laquelle la vitesse initiale de réaction est égale à la moitié de la vitesse maximale (v0 = Vmax / 2). Le Km reflète, de façon inverse, l’affinité apparente de l’enzyme pour son substrat : un Km faible traduit une forte affinité.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Lire correctement le Km',
          texte:
            "Un Km faible signifie que l’enzyme atteint la moitié de sa vitesse maximale à faible concentration de substrat : elle est donc efficace même quand le substrat est rare, ce qui traduit une forte affinité. Un Km élevé traduit, à l’inverse, une faible affinité apparente.",
        },
      ],
    },
    {
      id: 'lineweaver-burk',
      titre: 'La représentation de Lineweaver-Burk',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La courbe de Michaelis-Menten, hyperbolique, ne permet pas de déterminer précisément le Km et le Vmax par simple lecture graphique, car l’asymptote horizontale n’est atteinte qu’à concentration infinie de substrat. La représentation en double inverse de Lineweaver-Burk linéarise cette relation.",
        },
        {
          type: 'formule',
          expression: '1 / v0 = (Km / Vmax) × (1 / [S]) + 1 / Vmax',
          legende: 'Transformation en double inverse de l’équation de Michaelis-Menten, de la forme y = ax + b.',
        },
        {
          type: 'tableau',
          titre: 'Lecture graphique de la droite de Lineweaver-Burk',
          colonnes: ['Élément graphique', 'Valeur lue'],
          lignes: [
            ['Ordonnée à l’origine (1/[S] = 0)', '1 / Vmax'],
            ['Abscisse à l’origine (1/v0 = 0)', '-1 / Km'],
            ['Pente de la droite', 'Km / Vmax'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le signe de l’intersection avec l’axe des abscisses',
          texte:
            "La droite de Lineweaver-Burk coupe l’axe des abscisses en une valeur négative, égale à -1/Km. Ce point n’est pas physiquement atteignable (une concentration de substrat ne peut être négative) mais s’obtient par extrapolation graphique de la portion linéaire mesurée expérimentalement.",
        },
      ],
    },
    {
      id: 'unites-activite',
      titre: 'Unités d’activité enzymatique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’activité d’une enzyme se mesure par la quantité de substrat transformé (ou de produit formé) par unité de temps, dans des conditions définies de température, de pH et de saturation en substrat.",
        },
        {
          type: 'tableau',
          titre: 'Unités usuelles d’activité enzymatique',
          colonnes: ['Unité', 'Définition'],
          lignes: [
            ['Unité internationale (UI)', 'Quantité d’enzyme catalysant la transformation d’une micromole de substrat par minute, dans des conditions standardisées'],
            ['Katal (kat)', 'Unité du Système international : quantité d’enzyme catalysant la transformation d’une mole de substrat par seconde'],
            ['Activité spécifique', 'Nombre d’unités d’activité enzymatique par milligramme de protéine, indicateur de pureté d’une préparation enzymatique'],
          ],
        },
        {
          type: 'definition',
          terme: 'Nombre de renouvellement (kcat)',
          definition:
            "Nombre de molécules de substrat transformées par une molécule d’enzyme (ou par un site actif) par unité de temps, lorsque l’enzyme est saturée en substrat. Il caractérise l’efficacité catalytique intrinsèque de l’enzyme, indépendamment de sa concentration.",
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Efficacité catalytique',
          texte:
            "Le rapport kcat/Km est un indicateur global de l’efficacité catalytique d’une enzyme, combinant sa vitesse de renouvellement et son affinité pour le substrat ; il est particulièrement utile pour comparer deux enzymes ou deux substrats entre eux.",
        },
      ],
    },
  ],
  pointsCles: [
    'Une enzyme abaisse l’énergie d’activation d’une réaction sans modifier sa constante d’équilibre thermodynamique.',
    'La nomenclature EC classe les enzymes en six grandes classes selon le type de réaction catalysée.',
    'Le modèle de l’ajustement induit (Koshland) complète le modèle historique de la clé-serrure (Fischer).',
    'L’équation de Michaelis-Menten relie la vitesse initiale v0 au Km et au Vmax : v0 = (Vmax × [S]) / (Km + [S]).',
    'Le Km est la concentration en substrat pour laquelle v0 = Vmax/2 ; un Km faible traduit une forte affinité apparente.',
    'La représentation de Lineweaver-Burk linéarise l’équation de Michaelis-Menten en 1/v0 en fonction de 1/[S].',
    'L’unité internationale (UI) correspond à la transformation d’une micromole de substrat par minute.',
  ],
  erreursFrequentes: [
    'Croire qu’une enzyme déplace l’équilibre thermodynamique d’une réaction : elle en accélère seulement l’atteinte.',
    'Confondre Km et Vmax : le Km est une concentration, le Vmax une vitesse.',
    'Penser qu’un Km élevé traduit une forte affinité : c’est l’inverse, un Km faible traduit une forte affinité.',
    'Oublier que le Vmax dépend de la concentration en enzyme, contrairement au Km, qui n’en dépend pas dans le modèle simple de Michaelis-Menten.',
    'Confondre l’ordonnée à l’origine (1/Vmax) et l’abscisse à l’origine (-1/Km) sur la droite de Lineweaver-Burk.',
  ],
  mnemotechniques: [
    {
      moyen: '« Km faible, affinité forte »',
      explication:
        'Un Km faible signifie que peu de substrat suffit à atteindre la moitié de la vitesse maximale : l’enzyme est donc très affine pour son substrat.',
    },
    {
      moyen: '« OTHLIL » pour les six classes EC',
      explication:
        'Oxydoréductases, Transférases, Hydrolases, Lyases, Isomérases, Ligases : l’ordre officiel des classes de la nomenclature enzymatique.',
    },
    {
      moyen: '« 1/Vmax en haut à gauche »',
      explication:
        'Sur le graphique de Lineweaver-Burk, l’ordonnée à l’origine (axe vertical, quand 1/[S] = 0) donne directement 1/Vmax.',
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
      id: 'bioch-enzymologie-generale-fc-01',
      recto: 'Une enzyme modifie-t-elle la constante d’équilibre d’une réaction ?',
      verso: 'Non, elle accélère seulement la vitesse à laquelle l’équilibre est atteint, sans en changer la position.',
      type: 'definition',
      tags: ['catalyse'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-02',
      recto: 'Citer les six classes d’enzymes selon la nomenclature EC.',
      verso: 'Oxydoréductases, transférases, hydrolases, lyases, isomérases, ligases.',
      type: 'classification',
      tags: ['nomenclature'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-03',
      recto: 'Quelle est la différence entre le modèle clé-serrure et le modèle de l’ajustement induit ?',
      verso: 'Le modèle clé-serrure suppose un site actif rigide et complémentaire ; l’ajustement induit suppose un changement de conformation du site actif lors de la fixation du substrat.',
      type: 'mecanisme',
      tags: ['site actif'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-04',
      recto: 'Donner l’équation de Michaelis-Menten.',
      verso: 'v0 = (Vmax × [S]) / (Km + [S]).',
      type: 'formule',
      tags: ['Michaelis-Menten'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-05',
      recto: 'Définir le Km.',
      verso: 'La concentration en substrat pour laquelle la vitesse initiale vaut la moitié de la vitesse maximale (v0 = Vmax/2).',
      type: 'definition',
      tags: ['Km'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-06',
      recto: 'Qu’indique un Km faible sur l’affinité de l’enzyme pour son substrat ?',
      verso: 'Une forte affinité : peu de substrat suffit pour atteindre la moitié de la vitesse maximale.',
      type: 'mecanisme',
      tags: ['Km'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-07',
      recto: 'Que donne l’ordonnée à l’origine de la droite de Lineweaver-Burk ?',
      verso: '1 / Vmax.',
      type: 'formule',
      tags: ['Lineweaver-Burk'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-08',
      recto: 'Que donne l’abscisse à l’origine de la droite de Lineweaver-Burk ?',
      verso: '-1 / Km.',
      type: 'formule',
      tags: ['Lineweaver-Burk'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-09',
      recto: 'Pourquoi utilise-t-on la représentation en double inverse plutôt que la courbe hyperbolique directe ?',
      verso: 'Parce qu’elle linéarise l’équation de Michaelis-Menten, ce qui permet de déterminer précisément Km et Vmax par simple lecture graphique.',
      type: 'mecanisme',
      tags: ['Lineweaver-Burk'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-10',
      recto: 'Que mesure une unité internationale (UI) d’activité enzymatique ?',
      verso: 'La quantité d’enzyme catalysant la transformation d’une micromole de substrat par minute.',
      type: 'chiffre',
      tags: ['unités'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-11',
      recto: 'Qu’est-ce que le nombre de renouvellement (kcat) ?',
      verso: 'Le nombre de molécules de substrat transformées par molécule d’enzyme saturée en substrat, par unité de temps.',
      type: 'definition',
      tags: ['kcat'],
    },
    {
      id: 'bioch-enzymologie-generale-fc-12',
      recto: 'Que représente le rapport kcat/Km ?',
      verso: 'L’efficacité catalytique globale d’une enzyme, combinant vitesse de renouvellement et affinité pour le substrat.',
      type: 'formule',
      tags: ['efficacité catalytique'],
    },
  ],
  qcm: [
    {
      id: 'bioch-enzymologie-generale-qcm-01',
      enonce: 'Concernant les enzymes en général, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une enzyme abaisse l’énergie d’activation d’une réaction.', vraie: true, justification: 'C’est le mécanisme fondamental de la catalyse enzymatique.' },
        { lettre: 'B', texte: 'Une enzyme déplace la position de l’équilibre thermodynamique.', vraie: false, justification: 'Elle accélère seulement la cinétique, sans modifier la constante d’équilibre.' },
        { lettre: 'C', texte: 'Une enzyme est consommée au cours de la réaction qu’elle catalyse.', vraie: false, justification: 'L’enzyme est régénérée à l’issue du cycle catalytique et n’est pas consommée.' },
        { lettre: 'D', texte: 'Toutes les enzymes sont des protéines.', vraie: false, justification: 'Certains ARN, appelés ribozymes, possèdent une activité catalytique.' },
        { lettre: 'E', texte: 'Les hydrolases catalysent l’hydrolyse de liaisons chimiques.', vraie: true, justification: 'C’est la définition de cette classe d’enzymes, comme les protéases ou les lipases.' },
      ],
      correction: 'Réponses exactes : A et E.',
      difficulte: 1,
    },
    {
      id: 'bioch-enzymologie-generale-qcm-02',
      enonce: 'Concernant le site actif et la spécificité enzymatique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le modèle clé-serrure suppose un site actif rigide.', vraie: true, justification: 'C’est le postulat du modèle historique de Fischer.' },
        { lettre: 'B', texte: 'Le modèle de l’ajustement induit a été proposé par Koshland.', vraie: true, justification: 'Il postule un changement de conformation du site actif lors de la liaison au substrat.' },
        { lettre: 'C', texte: 'Toutes les enzymes ont une spécificité de substrat absolue.', vraie: false, justification: 'Certaines enzymes ont une spécificité de groupe, agissant sur plusieurs substrats apparentés.' },
        { lettre: 'D', texte: 'Le site actif occupe généralement la totalité du volume de la protéine.', vraie: false, justification: 'Il n’occupe qu’une faible proportion du volume total de l’enzyme.' },
        { lettre: 'E', texte: 'La spécificité de réaction désigne le type de transformation catalysée sur le substrat.', vraie: true, justification: 'C’est la définition de la spécificité de réaction, distincte de la spécificité de substrat.' },
      ],
      correction: 'Réponses exactes : A, B et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-enzymologie-generale-qcm-03',
      enonce: 'Concernant le modèle de Michaelis-Menten, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il postule la formation d’un complexe enzyme-substrat intermédiaire.', vraie: true, justification: 'C’est l’hypothèse centrale du modèle.' },
        { lettre: 'B', texte: 'Le Vmax est atteint pour une concentration nulle de substrat.', vraie: false, justification: 'Le Vmax est atteint pour une concentration en substrat tendant vers l’infini, à saturation de l’enzyme.' },
        { lettre: 'C', texte: 'Le Km est une concentration en substrat.', vraie: true, justification: 'Le Km s’exprime en unité de concentration, comme mol/L.' },
        { lettre: 'D', texte: 'La courbe de Michaelis-Menten est une droite.', vraie: false, justification: 'C’est une courbe hyperbolique, non linéaire.' },
        { lettre: 'E', texte: 'Au Km, la vitesse initiale vaut la moitié de la vitesse maximale.', vraie: true, justification: 'C’est la définition même du Km.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-enzymologie-generale-qcm-04',
      enonce: 'Concernant la représentation de Lineweaver-Burk, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle représente 1/v0 en fonction de 1/[S].', vraie: true, justification: 'C’est la définition de cette représentation en double inverse.' },
        { lettre: 'B', texte: 'L’ordonnée à l’origine vaut 1/Vmax.', vraie: true, justification: 'C’est la valeur lue lorsque 1/[S] tend vers zéro.' },
        { lettre: 'C', texte: 'L’abscisse à l’origine vaut Km.', vraie: false, justification: 'L’abscisse à l’origine vaut -1/Km, une valeur négative obtenue par extrapolation.' },
        { lettre: 'D', texte: 'La pente de la droite vaut Km/Vmax.', vraie: true, justification: 'C’est le coefficient directeur de la droite de Lineweaver-Burk.' },
        { lettre: 'E', texte: 'Cette représentation permet une détermination plus précise de Km et Vmax que la courbe hyperbolique directe.', vraie: true, justification: 'La linéarisation facilite l’extrapolation, notamment de l’asymptote Vmax.' },
      ],
      correction: 'Réponses exactes : A, B, D et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-enzymologie-generale-qcm-05',
      enonce: 'Concernant les unités d’activité enzymatique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’unité internationale correspond à une micromole de substrat transformée par minute.', vraie: true, justification: 'C’est la définition officielle de l’unité internationale (UI).' },
        { lettre: 'B', texte: 'Le katal correspond à une mole de substrat transformée par seconde.', vraie: true, justification: 'C’est l’unité d’activité enzymatique du Système international.' },
        { lettre: 'C', texte: 'L’activité spécifique s’exprime en unités par milligramme de protéine.', vraie: true, justification: 'Elle rapporte l’activité enzymatique à la quantité totale de protéine, reflet de la pureté.' },
        { lettre: 'D', texte: 'Le kcat dépend de la concentration en enzyme utilisée pour la mesure.', vraie: false, justification: 'Le kcat est une constante intrinsèque par molécule d’enzyme, indépendante de sa concentration.' },
        { lettre: 'E', texte: 'Le rapport kcat/Km reflète l’efficacité catalytique globale.', vraie: true, justification: 'Il combine vitesse de renouvellement et affinité pour le substrat.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-enzymologie-generale-qcm-06',
      enonce: 'Concernant la nomenclature EC des enzymes, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les transaminases sont des transférases.', vraie: true, justification: 'Elles transfèrent un groupement amine, ce qui les classe parmi les transférases.' },
        { lettre: 'B', texte: 'Les décarboxylases sont des lyases.', vraie: true, justification: 'Elles rompent une liaison sans hydrolyse ni oxydoréduction, en libérant du CO2.' },
        { lettre: 'C', texte: 'Les kinases sont des hydrolases.', vraie: false, justification: 'Les kinases transfèrent un groupement phosphate : ce sont des transférases.' },
        { lettre: 'D', texte: 'Les ligases couplent la formation d’une liaison à l’hydrolyse d’ATP.', vraie: true, justification: 'C’est la caractéristique définissant cette classe d’enzymes.' },
        { lettre: 'E', texte: 'Les isomérases catalysent des réactions d’oxydoréduction.', vraie: false, justification: 'Les isomérases catalysent des réarrangements intramoléculaires, sans oxydoréduction.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
