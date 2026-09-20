import type { Fiche } from '../../types';

export const ficheGlycolyse: Fiche = {
  id: 'bioch-glycolyse',
  ue: 'bioch',
  titre: 'La glycolyse et la fermentation',
  sousTitre: 'Les dix réactions, enzymes clés, bilan énergétique et devenir du pyruvate',
  chapitre: 'Métabolisme',
  ordre: 9,
  duree: 30,
  difficulte: 2,
  motsCles: [
    'glycolyse',
    'hexokinase',
    'phosphofructokinase-1',
    'pyruvate kinase',
    'navette',
    'fermentation lactique',
    'régulation métabolique',
  ],
  objectifs: [
    'Décrire les grandes étapes de la glycolyse et leur localisation cellulaire.',
    'Identifier les trois enzymes régulatrices irréversibles de la voie.',
    'Établir le bilan énergétique net de la glycolyse en ATP et en NADH.',
    'Expliquer le rôle des navettes du NADH cytosolique en conditions aérobies.',
    'Décrire la régulation de la glycolyse, notamment par la phosphofructokinase-1.',
    'Comparer le devenir aérobie et anaérobie du pyruvate.',
  ],
  sections: [
    {
      id: 'presentation-generale',
      titre: 'Présentation générale de la glycolyse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La glycolyse est la voie métabolique universelle de dégradation du glucose en deux molécules de pyruvate, se déroulant intégralement dans le cytosol, en dix réactions enzymatiques successives. Elle constitue la voie d’entrée principale du glucose dans le métabolisme énergétique cellulaire, qu’il y ait ou non disponibilité en oxygène.",
        },
        {
          type: 'definition',
          terme: 'Glycolyse',
          definition:
            "Ensemble des dix réactions cytosoliques transformant une molécule de glucose (six carbones) en deux molécules de pyruvate (trois carbones chacune), avec production nette d’ATP et de NADH.",
        },
        {
          type: 'liste',
          items: [
            'La glycolyse peut être décomposée en deux phases : une phase préparatoire (ou d’investissement énergétique), consommatrice d’ATP, et une phase de récupération (ou de rendement), productrice d’ATP et de NADH.',
            'Toutes les cellules de l’organisme possèdent l’équipement enzymatique de la glycolyse ; certains tissus, comme les hématies dépourvues de mitochondries, en dépendent exclusivement pour leur production d’énergie.',
          ],
        },
      ],
    },
    {
      id: 'etapes-reactionnelles',
      titre: 'Les dix étapes réactionnelles',
      blocs: [
        {
          type: 'etapes',
          titre: 'Phase préparatoire (consommatrice d’ATP)',
          etapes: [
            { titre: '1. Phosphorylation du glucose', detail: 'Glucose → glucose-6-phosphate, par l’hexokinase (ou la glucokinase dans le foie et le pancréas), avec consommation d’un ATP.' },
            { titre: '2. Isomérisation', detail: 'Glucose-6-phosphate → fructose-6-phosphate, par la phosphoglucose isomérase.' },
            { titre: '3. Seconde phosphorylation', detail: 'Fructose-6-phosphate → fructose-1,6-bisphosphate, par la phosphofructokinase-1 (PFK-1), avec consommation d’un ATP ; c’est l’étape régulatrice majeure et irréversible de la voie.' },
            { titre: '4. Clivage aldolique', detail: 'Fructose-1,6-bisphosphate → dihydroxyacétone phosphate + glycéraldéhyde-3-phosphate, par l’aldolase.' },
            { titre: '5. Isomérisation', detail: 'La dihydroxyacétone phosphate est convertie en glycéraldéhyde-3-phosphate par la triose phosphate isomérase, si bien que deux molécules de glycéraldéhyde-3-phosphate entrent dans la phase de récupération.' },
          ],
        },
        {
          type: 'etapes',
          titre: 'Phase de récupération (productrice d’ATP), pour chacun des deux trioses',
          etapes: [
            { titre: '6. Oxydation et phosphorylation', detail: 'Glycéraldéhyde-3-phosphate → 1,3-bisphosphoglycérate, par la glycéraldéhyde-3-phosphate déshydrogénase, avec réduction d’un NAD+ en NADH.' },
            { titre: '7. Première phosphorylation au niveau du substrat', detail: '1,3-bisphosphoglycérate → 3-phosphoglycérate, par la phosphoglycérate kinase, avec production d’un ATP.' },
            { titre: '8. Isomérisation', detail: '3-phosphoglycérate → 2-phosphoglycérate, par la phosphoglycérate mutase.' },
            { titre: '9. Déshydratation', detail: '2-phosphoglycérate → phosphoénolpyruvate, par l’énolase, formant une liaison phosphate riche en énergie.' },
            { titre: '10. Seconde phosphorylation au niveau du substrat', detail: 'Phosphoénolpyruvate → pyruvate, par la pyruvate kinase, avec production d’un ATP ; c’est la troisième étape irréversible de la voie.' },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les trois enzymes irréversibles à retenir',
          texte:
            "Hexokinase (étape 1), phosphofructokinase-1 (étape 3) et pyruvate kinase (étape 10) catalysent les trois réactions thermodynamiquement irréversibles de la glycolyse. Ce sont les trois points de régulation majeurs de la voie, et les enzymes contournées lors de la néoglucogenèse.",
        },
      ],
    },
    {
      id: 'bilan-energetique',
      titre: 'Bilan énergétique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le bilan de la glycolyse doit être établi par molécule de glucose, en tenant compte du fait que la phase de récupération se déroule deux fois (une fois pour chacun des deux trioses phosphates issus du clivage du fructose-1,6-bisphosphate).",
        },
        {
          type: 'tableau',
          titre: 'Bilan net de la glycolyse pour une molécule de glucose',
          colonnes: ['Étape', 'ATP consommés', 'ATP produits', 'NADH produits'],
          lignes: [
            ['Phase préparatoire (étapes 1 et 3)', '2', '0', '0'],
            ['Phase de récupération (étapes 6 à 10, ×2)', '0', '4', '2'],
            ['Bilan net', '2', '4', '2'],
          ],
        },
        {
          type: 'formule',
          expression: 'Glucose + 2 ADP + 2 Pi + 2 NAD+ → 2 pyruvate + 2 ATP + 2 NADH + 2 H+ + 2 H2O',
          legende: 'Bilan global net de la glycolyse : gain net de 2 ATP et 2 NADH par molécule de glucose.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Retenir le gain net',
          texte:
            "Malgré la consommation de deux ATP en phase préparatoire, la phase de récupération, dédoublée pour les deux trioses phosphates, en produit quatre : le bilan net s’élève donc à deux ATP et deux NADH par molécule de glucose dégradée.",
        },
      ],
    },
    {
      id: 'navettes-nadh',
      titre: 'Les navettes du NADH cytosolique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le NADH produit par la glycolyse est cytosolique, alors que la chaîne respiratoire mitochondriale, qui permet sa réoxydation productrice d’ATP, est intramitochondriale. La membrane mitochondriale interne étant imperméable au NADH lui-même, des systèmes de navette transfèrent son équivalent réducteur vers la matrice.",
        },
        {
          type: 'tableau',
          titre: 'Les deux navettes principales',
          colonnes: ['Navette', 'Tissus principaux', 'Accepteur mitochondrial', 'Rendement en ATP par NADH cytosolique'],
          lignes: [
            ['Navette du glycérol-3-phosphate', 'Muscle squelettique, cerveau', 'FAD (donnant du FADH2)', 'Équivalent à environ 1,5 ATP'],
            ['Navette malate-aspartate', 'Foie, cœur, rein', 'NAD+ mitochondrial (donnant du NADH)', 'Équivalent à environ 2,5 ATP'],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un rendement variable selon le tissu',
          texte:
            "Le bilan global en ATP de l’oxydation complète du glucose dépend donc du type de navette utilisé par le tissu considéré, la navette malate-aspartate étant énergétiquement plus rentable que la navette du glycérol-3-phosphate.",
        },
      ],
    },
    {
      id: 'regulation',
      titre: 'Régulation de la glycolyse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La régulation de la glycolyse s’exerce principalement au niveau de ses trois enzymes irréversibles, en réponse à la charge énergétique cellulaire et aux signaux hormonaux.",
        },
        {
          type: 'tableau',
          titre: 'Régulation des enzymes clés',
          colonnes: ['Enzyme', 'Activateurs', 'Inhibiteurs'],
          lignes: [
            ['Hexokinase', '—', 'Glucose-6-phosphate (produit de sa propre réaction, inhibition par rétrocontrôle)'],
            ['Phosphofructokinase-1', 'AMP, fructose-2,6-bisphosphate', 'ATP, citrate (charge énergétique et biosynthétique élevées)'],
            ['Pyruvate kinase', 'Fructose-1,6-bisphosphate (activation antérograde)', 'ATP, acétyl-CoA, alanine ; inactivation par phosphorylation sous l’effet du glucagon dans le foie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La phosphofructokinase-1, enzyme allostérique clé',
          texte:
            "La PFK-1 est l’enzyme la plus finement régulée de la glycolyse. Le fructose-2,6-bisphosphate, produit par une enzyme bifonctionnelle distincte dont l’activité est elle-même hormono-dépendante (insuline/glucagon), en est l’activateur allostérique le plus puissant, ce qui couple la glycolyse hépatique au statut hormonal glycémique.",
        },
      ],
    },
    {
      id: 'devenir-pyruvate',
      titre: 'Le devenir du pyruvate',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le devenir métabolique du pyruvate dépend de la disponibilité en oxygène et du type cellulaire considéré : il peut être orienté vers l’oxydation mitochondriale complète ou vers différentes voies de fermentation cytosolique.",
        },
        {
          type: 'comparaison',
          titre: 'Voie aérobie et fermentation lactique',
          gauche: {
            titre: 'Conditions aérobies',
            points: [
              'Le pyruvate entre dans la mitochondrie',
              'Il est décarboxylé en acétyl-CoA par la pyruvate déshydrogénase',
              'L’acétyl-CoA est oxydé dans le cycle de Krebs, couplé à la chaîne respiratoire',
              'Rendement énergétique élevé par molécule de glucose',
            ],
          },
          droite: {
            titre: 'Fermentation lactique (anaérobie)',
            points: [
              'Le pyruvate est réduit en lactate par la lactate déshydrogénase',
              'Cette réaction réoxyde le NADH cytosolique en NAD+, indispensable à la poursuite de la glycolyse',
              'Typique du muscle en effort intense, des hématies, de certains tissus hypoxiques',
              'Rendement énergétique limité aux deux ATP de la glycolyse elle-même',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Le cycle de Cori',
          texte:
            "Le lactate produit par le muscle en effort intense est transporté par voie sanguine jusqu’au foie, où il est reconverti en glucose par néoglucogenèse : c’est le cycle de Cori, qui relie métabolisme musculaire anaérobie et métabolisme hépatique.",
        },
      ],
    },
  ],
  pointsCles: [
    'La glycolyse transforme une molécule de glucose en deux molécules de pyruvate, dans le cytosol, en dix étapes enzymatiques.',
    'Hexokinase, phosphofructokinase-1 et pyruvate kinase catalysent les trois réactions irréversibles et régulatrices de la voie.',
    'Le bilan net de la glycolyse est de 2 ATP et 2 NADH par molécule de glucose.',
    'Le NADH cytosolique doit emprunter une navette (glycérol-3-phosphate ou malate-aspartate) pour être réoxydé par la chaîne respiratoire.',
    'La phosphofructokinase-1 est activée par l’AMP et le fructose-2,6-bisphosphate, inhibée par l’ATP et le citrate.',
    'En aérobiose, le pyruvate devient acétyl-CoA et entre dans le cycle de Krebs ; en anaérobiose, il est réduit en lactate.',
    'La réduction du pyruvate en lactate régénère le NAD+ nécessaire à la poursuite de la glycolyse en l’absence d’oxygène.',
  ],
  erreursFrequentes: [
    'Oublier de doubler le bilan de la phase de récupération, qui se déroule deux fois par molécule de glucose (une fois par triose phosphate).',
    'Confondre les enzymes irréversibles (hexokinase, PFK-1, pyruvate kinase) avec les enzymes simplement isomérases, réversibles.',
    'Croire que le NADH produit dans le cytosol traverse directement la membrane mitochondriale interne : il nécessite une navette spécifique.',
    'Penser que la fermentation lactique a pour seul but de produire de l’énergie : son rôle principal est de régénérer le NAD+ nécessaire à la glycolyse.',
    'Confondre glucokinase (foie, pancréas, Km élevé) et hexokinase (autres tissus, Km faible, inhibée par son produit).',
  ],
  mnemotechniques: [
    {
      moyen: '« HPP, les trois verrous de la glycolyse »',
      explication:
        'Hexokinase, Phosphofructokinase-1, Pyruvate kinase : les trois enzymes irréversibles et régulatrices de la glycolyse, à retenir dans l’ordre de la voie.',
    },
    {
      moyen: '« 2 investis, 4 récoltés, 2 de bénéfice »',
      explication:
        'Deux ATP sont consommés en phase préparatoire, quatre sont produits en phase de récupération (deux fois deux), pour un gain net de deux ATP par glucose.',
    },
    {
      moyen: '« Le lactate régénère le carburant du départ »',
      explication:
        'La réduction du pyruvate en lactate réoxyde le NADH en NAD+, sans lequel la glycéraldéhyde-3-phosphate déshydrogénase (étape 6) ne pourrait plus fonctionner.',
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
      id: 'bioch-glycolyse-fc-01',
      recto: 'Où se déroule la glycolyse dans la cellule ?',
      verso: 'Dans le cytosol.',
      type: 'definition',
      tags: ['glycolyse', 'localisation'],
    },
    {
      id: 'bioch-glycolyse-fc-02',
      recto: 'Quelles sont les trois enzymes irréversibles de la glycolyse ?',
      verso: 'L’hexokinase, la phosphofructokinase-1 et la pyruvate kinase.',
      type: 'classification',
      tags: ['glycolyse', 'régulation'],
    },
    {
      id: 'bioch-glycolyse-fc-03',
      recto: 'Quel est le bilan net en ATP de la glycolyse par molécule de glucose ?',
      verso: 'Un gain net de 2 ATP (4 produits, 2 consommés).',
      type: 'chiffre',
      tags: ['bilan énergétique'],
    },
    {
      id: 'bioch-glycolyse-fc-04',
      recto: 'Quel est le bilan net en NADH de la glycolyse par molécule de glucose ?',
      verso: 'Deux NADH.',
      type: 'chiffre',
      tags: ['bilan énergétique'],
    },
    {
      id: 'bioch-glycolyse-fc-05',
      recto: 'Quelle enzyme catalyse l’étape régulatrice majeure de la glycolyse ?',
      verso: 'La phosphofructokinase-1 (PFK-1), qui transforme le fructose-6-phosphate en fructose-1,6-bisphosphate.',
      type: 'mecanisme',
      tags: ['PFK-1'],
    },
    {
      id: 'bioch-glycolyse-fc-06',
      recto: 'Quel est l’activateur allostérique le plus puissant de la PFK-1 ?',
      verso: 'Le fructose-2,6-bisphosphate.',
      type: 'mecanisme',
      tags: ['PFK-1', 'régulation'],
    },
    {
      id: 'bioch-glycolyse-fc-07',
      recto: 'Pourquoi le NADH cytosolique nécessite-t-il une navette ?',
      verso: 'Parce que la membrane mitochondriale interne est imperméable au NADH ; seul son équivalent réducteur est transféré vers la matrice.',
      type: 'mecanisme',
      tags: ['navettes'],
    },
    {
      id: 'bioch-glycolyse-fc-08',
      recto: 'Quelle navette du NADH est utilisée préférentiellement dans le foie et le cœur ?',
      verso: 'La navette malate-aspartate, de rendement supérieur à celle du glycérol-3-phosphate.',
      type: 'classification',
      tags: ['navettes'],
    },
    {
      id: 'bioch-glycolyse-fc-09',
      recto: 'Quelle enzyme réduit le pyruvate en lactate ?',
      verso: 'La lactate déshydrogénase.',
      type: 'mecanisme',
      tags: ['fermentation lactique'],
    },
    {
      id: 'bioch-glycolyse-fc-10',
      recto: 'Quel est le rôle principal de la fermentation lactique ?',
      verso: 'Régénérer le NAD+ cytosolique, indispensable à la poursuite de la glycolyse en l’absence d’oxygène.',
      type: 'mecanisme',
      tags: ['fermentation lactique'],
    },
    {
      id: 'bioch-glycolyse-fc-11',
      recto: 'Qu’est-ce que le cycle de Cori ?',
      verso: 'Le circuit métabolique reliant le lactate produit par le muscle et sa reconversion en glucose par néoglucogenèse hépatique.',
      type: 'clinique',
      tags: ['cycle de Cori'],
    },
    {
      id: 'bioch-glycolyse-fc-12',
      recto: 'Quelle enzyme catalyse le clivage du fructose-1,6-bisphosphate en deux trioses phosphates ?',
      verso: 'L’aldolase.',
      type: 'mecanisme',
      tags: ['glycolyse', 'enzymes'],
    },
  ],
  qcm: [
    {
      id: 'bioch-glycolyse-qcm-01',
      enonce: 'Concernant la glycolyse en général, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle se déroule dans la mitochondrie.', vraie: false, justification: 'La glycolyse se déroule entièrement dans le cytosol.' },
        { lettre: 'B', texte: 'Elle transforme une molécule de glucose en deux molécules de pyruvate.', vraie: true, justification: 'C’est le bilan global de la voie, en dix réactions.' },
        { lettre: 'C', texte: 'Elle nécessite obligatoirement la présence d’oxygène.', vraie: false, justification: 'La glycolyse elle-même ne nécessite pas d’oxygène ; c’est le devenir ultérieur du pyruvate qui en dépend.' },
        { lettre: 'D', texte: 'Les hématies dépourvues de mitochondries dépendent exclusivement de la glycolyse pour leur ATP.', vraie: true, justification: 'Sans mitochondries, elles ne peuvent réaliser ni cycle de Krebs ni chaîne respiratoire.' },
        { lettre: 'E', texte: 'Elle comporte dix réactions enzymatiques.', vraie: true, justification: 'C’est le nombre classique d’étapes de la voie glycolytique.' },
      ],
      correction: 'Réponses exactes : B, D et E.',
      difficulte: 1,
    },
    {
      id: 'bioch-glycolyse-qcm-02',
      enonce: 'Concernant les enzymes de la glycolyse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’hexokinase catalyse une réaction réversible.', vraie: false, justification: 'C’est l’une des trois réactions irréversibles de la glycolyse.' },
        { lettre: 'B', texte: 'La phosphofructokinase-1 est l’enzyme la plus régulée de la voie.', vraie: true, justification: 'Elle intègre de nombreux signaux allostériques, dont le fructose-2,6-bisphosphate.' },
        { lettre: 'C', texte: 'L’aldolase clive le fructose-1,6-bisphosphate en deux trioses phosphates.', vraie: true, justification: 'C’est l’étape 4 de la voie glycolytique.' },
        { lettre: 'D', texte: 'La pyruvate kinase catalyse la dernière étape de la glycolyse.', vraie: true, justification: 'Elle transforme le phosphoénolpyruvate en pyruvate, avec production d’ATP.' },
        { lettre: 'E', texte: 'La glycéraldéhyde-3-phosphate déshydrogénase produit du FADH2.', vraie: false, justification: 'Elle produit du NADH, et non du FADH2.' },
      ],
      correction: 'Réponses exactes : B, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-glycolyse-qcm-03',
      enonce: 'Concernant le bilan énergétique de la glycolyse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le bilan net est de 2 ATP par molécule de glucose.', vraie: true, justification: 'Quatre ATP sont produits en phase de récupération contre deux consommés en phase préparatoire.' },
        { lettre: 'B', texte: 'Le bilan net est de 4 NADH par molécule de glucose.', vraie: false, justification: 'Le bilan net est de 2 NADH, un par triose phosphate transformé.' },
        { lettre: 'C', texte: 'La phase préparatoire consomme deux ATP.', vraie: true, justification: 'Un ATP est consommé à l’étape 1 (hexokinase) et un autre à l’étape 3 (PFK-1).' },
        { lettre: 'D', texte: 'La phase de récupération se déroule une seule fois par molécule de glucose.', vraie: false, justification: 'Elle se déroule deux fois, une fois pour chacun des deux trioses phosphates issus du clivage.' },
        { lettre: 'E', texte: 'La phosphorylation au niveau du substrat contribue à la production d’ATP de la glycolyse.', vraie: true, justification: 'C’est le mécanisme des étapes 7 et 10, productrices d’ATP sans intervention de la chaîne respiratoire.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-glycolyse-qcm-04',
      enonce: 'Concernant les navettes du NADH cytosolique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elles sont nécessaires car la membrane mitochondriale interne est imperméable au NADH.', vraie: true, justification: 'Le NADH lui-même ne peut pas traverser cette membrane ; seul son équivalent réducteur est transféré.' },
        { lettre: 'B', texte: 'La navette malate-aspartate a un rendement énergétique supérieur à la navette du glycérol-3-phosphate.', vraie: true, justification: 'Elle transfère les électrons directement au NAD+ mitochondrial, sans passer par le FAD.' },
        { lettre: 'C', texte: 'La navette du glycérol-3-phosphate transfère les électrons au NAD+ mitochondrial.', vraie: false, justification: 'Elle les transfère au FAD, formant du FADH2, de rendement énergétique inférieur.' },
        { lettre: 'D', texte: 'Le foie utilise préférentiellement la navette malate-aspartate.', vraie: true, justification: 'C’est le tissu de référence pour cette navette de rendement supérieur.' },
        { lettre: 'E', texte: 'Ces navettes concernent le NADH produit dans la mitochondrie.', vraie: false, justification: 'Elles concernent le NADH produit dans le cytosol, qui doit être transféré vers la matrice mitochondriale.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-glycolyse-qcm-05',
      enonce: 'Concernant la régulation de la glycolyse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’ATP inhibe la phosphofructokinase-1.', vraie: true, justification: 'Une charge énergétique élevée diminue le besoin de dégrader davantage de glucose.' },
        { lettre: 'B', texte: 'L’AMP active la phosphofructokinase-1.', vraie: true, justification: 'Une charge énergétique faible stimule la glycolyse pour régénérer de l’ATP.' },
        { lettre: 'C', texte: 'Le glucose-6-phosphate inhibe l’hexokinase.', vraie: true, justification: 'C’est un exemple de rétro-inhibition par le produit de la réaction.' },
        { lettre: 'D', texte: 'Le citrate active la phosphofructokinase-1.', vraie: false, justification: 'Le citrate est au contraire un inhibiteur, signalant une disponibilité suffisante en intermédiaires biosynthétiques.' },
        { lettre: 'E', texte: 'Le glucagon active la pyruvate kinase hépatique par phosphorylation.', vraie: false, justification: 'Le glucagon inactive la pyruvate kinase hépatique par phosphorylation, limitant la glycolyse au profit de la néoglucogenèse.' },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 3,
    },
    {
      id: 'bioch-glycolyse-qcm-06',
      enonce: 'Concernant le devenir du pyruvate, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'En aérobiose, le pyruvate est décarboxylé en acétyl-CoA par la pyruvate déshydrogénase.', vraie: true, justification: 'C’est l’étape de liaison entre glycolyse et cycle de Krebs.' },
        { lettre: 'B', texte: 'La fermentation lactique se déroule dans la mitochondrie.', vraie: false, justification: 'Elle se déroule dans le cytosol, comme la glycolyse elle-même.' },
        { lettre: 'C', texte: 'La lactate déshydrogénase régénère du NAD+ à partir de NADH.', vraie: true, justification: 'C’est le mécanisme qui permet la poursuite de la glycolyse en anaérobiose.' },
        { lettre: 'D', texte: 'Le cycle de Cori relie le métabolisme musculaire et le métabolisme hépatique.', vraie: true, justification: 'Le lactate musculaire est reconverti en glucose par le foie, via la néoglucogenèse.' },
        { lettre: 'E', texte: 'Le rendement énergétique de la fermentation lactique est supérieur à celui de la voie aérobie complète.', vraie: false, justification: 'Il est très inférieur, limité aux deux ATP nets de la seule glycolyse.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
  ],
};
