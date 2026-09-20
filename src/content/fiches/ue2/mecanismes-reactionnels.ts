import type { Fiche } from '../../types';

export const ficheMecanismesReactionnels: Fiche = {
  id: 'ue2-mecanismes-reactionnels',
  ue: 'ue2',
  titre: 'Mécanismes réactionnels en chimie organique',
  sousTitre: 'Nucléophiles et électrophiles, substitution, addition, élimination, estérification et hydrolyse',
  chapitre: 'Chimie organique',
  ordre: 10,
  duree: 29,
  difficulte: 3,
  motsCles: [
    'nucléophile',
    'électrophile',
    'substitution nucléophile',
    'addition nucléophile',
    'élimination',
    'estérification',
    'hydrolyse',
    'mécanisme réactionnel',
  ],
  objectifs: [
    'Définir les notions de nucléophile et d’électrophile.',
    'Décrire les mécanismes de substitution nucléophile SN1 et SN2.',
    'Distinguer réactions d’addition et réactions d’élimination.',
    'Décrire le mécanisme de l’estérification de Fischer et sa réaction inverse, l’hydrolyse.',
    'Situer les grandes réactions d’oxydoréduction organique dans le métabolisme.',
  ],
  sections: [
    {
      id: 'nucleophiles-electrophiles',
      titre: 'Nucléophiles et électrophiles',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La grande majorité des réactions de chimie organique s’interprètent comme une interaction entre une espèce riche en électrons, le nucléophile, et une espèce pauvre en électrons, l’électrophile, qui accepte le doublet d’électrons apporté par le nucléophile.",
        },
        {
          type: 'definition',
          terme: 'Nucléophile',
          definition:
            "Espèce chimique, chargée négativement ou neutre mais porteuse d’un doublet non liant, capable de céder un doublet d’électrons pour former une nouvelle liaison covalente avec un centre électrophile. Exemples : ions hydroxyde OH−, amines, alcools, ions halogénure.",
        },
        {
          type: 'definition',
          terme: 'Électrophile',
          definition:
            "Espèce chimique, chargée positivement ou possédant un site déficitaire en électrons (souvent un carbone lié à un atome électronégatif ou porteur d’une charge positive), capable d’accepter un doublet d’électrons apporté par un nucléophile.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Repérer un site électrophile',
          texte:
            "Un carbone lié à un atome plus électronégatif que lui (halogène, oxygène) porte une charge partielle positive (δ+) et constitue un site électrophile privilégié. C’est le cas du carbone porteur d’un halogène dans un halogénoalcane, ou du carbone du groupement carbonyle.",
        },
      ],
    },
    {
      id: 'substitution-nucleophile',
      titre: 'Réactions de substitution nucléophile',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Une substitution nucléophile remplace un groupe partant lié à un carbone par un nucléophile entrant. Elle concerne typiquement les halogénoalcanes et suit deux mécanismes limites, SN1 et SN2, selon la nature du substrat et les conditions réactionnelles.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des mécanismes SN1 et SN2',
          colonnes: ['Caractéristique', 'SN1', 'SN2'],
          lignes: [
            ['Cinétique', 'Ordre 1, dépend uniquement du substrat', 'Ordre 2, dépend du substrat et du nucléophile'],
            ['Étapes', 'Deux étapes, via un carbocation intermédiaire', 'Une seule étape concertée'],
            ['Stéréochimie', 'Racémisation partielle ou totale (attaque des deux faces du carbocation)', 'Inversion de configuration (attaque en dos de la liaison partante)'],
            ['Substrat favorable', 'Carbone tertiaire (carbocation stabilisé)', 'Carbone primaire, peu encombré'],
          ],
        },
        {
          type: 'definition',
          terme: 'Carbocation',
          definition:
            "Intermédiaire réactionnel portant une charge positive sur un atome de carbone, formé lors de la première étape d’un mécanisme SN1 par départ du groupe partant. Sa stabilité croît avec le nombre de substituants alkyles portés par le carbone chargé (tertiaire plus stable que secondaire, plus stable que primaire).",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Inversion de Walden',
          texte:
            "Lors d’une substitution SN2, le nucléophile attaque le carbone électrophile du côté opposé au groupe partant, ce qui provoque une inversion complète de la configuration spatiale au niveau de ce carbone, appelée inversion de Walden.",
        },
      ],
    },
    {
      id: 'addition-elimination',
      titre: 'Réactions d’addition et d’élimination',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les réactions d’addition et d’élimination sont en quelque sorte le miroir l’une de l’autre : l’une transforme une liaison multiple en liaison simple par ajout de deux groupes, l’autre transforme une liaison simple en liaison multiple par départ de deux groupes.",
        },
        {
          type: 'definition',
          terme: 'Réaction d’addition',
          definition:
            "Réaction au cours de laquelle deux nouveaux groupes se fixent de part et d’autre d’une liaison multiple (double ou triple), qui devient une liaison simple. L’addition nucléophile sur le carbone électrophile du groupement carbonyle est un mécanisme fondamental de la chimie des aldéhydes et des cétones.",
        },
        {
          type: 'definition',
          terme: 'Réaction d’élimination',
          definition:
            "Réaction au cours de laquelle deux groupes portés par des carbones adjacents sont retirés, formant une nouvelle liaison multiple entre ces deux carbones. L’élimination d’une molécule d’eau (déshydratation) ou d’halogénure d’hydrogène est un exemple classique menant à la formation d’un alcène.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Compétition entre substitution et élimination',
          texte:
            "Pour un même substrat, substitution et élimination sont souvent en compétition. Un nucléophile encombré ou fortement basique favorise l’élimination, tandis qu’un nucléophile peu encombré et faiblement basique favorise la substitution.",
        },
      ],
    },
    {
      id: 'esterification-hydrolyse',
      titre: 'Estérification et hydrolyse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’estérification de Fischer est la réaction entre un acide carboxylique et un alcool, catalysée par un acide, qui conduit à la formation d’un ester et d’eau. C’est une réaction d’équilibre, lente et limitée, dont la réaction inverse est l’hydrolyse de l’ester.",
        },
        {
          type: 'formule',
          expression: 'R-COOH + R′-OH ⇌ R-COO-R′ + H2O',
          legende:
            "Équilibre d’estérification. Le sens direct (estérification) et le sens inverse (hydrolyse) sont tous deux catalysés par un acide ; l’hydrolyse peut aussi être catalysée par une base, on parle alors de saponification.",
        },
        {
          type: 'liste',
          items: [
            'L’estérification est une réaction lente, athermique ou faiblement exothermique, et limitée par son équilibre chimique.',
            'Un excès d’un des deux réactifs, ou l’élimination de l’eau formée, déplace l’équilibre dans le sens de la formation de l’ester (loi de Le Chatelier).',
            'La saponification, hydrolyse basique d’un ester, est totale et irréversible : elle forme un ion carboxylate et un alcool.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Importance biologique de l’hydrolyse des esters',
          texte:
            "L’hydrolyse enzymatique des triglycérides par les lipases digestives illustre l’importance physiologique de la réaction d’hydrolyse des esters, libérant acides gras et glycérol lors de la digestion des lipides alimentaires.",
        },
      ],
    },
    {
      id: 'oxydoreduction-organique',
      titre: 'Oxydoréduction en chimie organique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En chimie organique, l’oxydation d’un carbone se traduit le plus souvent par la formation d’une liaison supplémentaire avec un atome plus électronégatif (oxygène) ou par la perte d’une liaison avec l’hydrogène ; la réduction correspond au processus inverse.",
        },
        {
          type: 'tableau',
          titre: 'Échelle d’oxydation d’un carbone fonctionnel',
          colonnes: ['Degré d’oxydation croissant', 'Fonction correspondante'],
          lignes: [
            ['1 (le moins oxydé)', 'Alcane'],
            ['2', 'Alcool'],
            ['3', 'Aldéhyde ou cétone'],
            ['4 (le plus oxydé)', 'Acide carboxylique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Application métabolique',
          texte:
            "L’oxydation progressive d’un alcool en aldéhyde puis en acide carboxylique illustre le principe de nombreuses voies métaboliques, comme l’oxydation de l’éthanol en acétaldéhyde puis en acétate, catalysée successivement par l’alcool déshydrogénase et l’aldéhyde déshydrogénase, avec réduction concomitante du coenzyme NAD+ en NADH.",
        },
        {
          type: 'definition',
          terme: 'Coenzyme d’oxydoréduction',
          definition:
            "Molécule, comme le NAD+ ou le FAD, qui accepte les électrons (et souvent un ou des protons) libérés lors de l’oxydation d’un substrat organique, devenant ainsi elle-même réduite (NADH, FADH2) et disponible pour transférer ces électrons à une étape ultérieure du métabolisme.",
        },
      ],
    },
  ],
  pointsCles: [
    'Un nucléophile est riche en électrons et attaque un site électrophile, pauvre en électrons.',
    'Le mécanisme SN2 est concerté, en une étape, et provoque une inversion de configuration (inversion de Walden).',
    'Le mécanisme SN1 passe par un carbocation intermédiaire et peut conduire à une racémisation partielle.',
    'Une réaction d’addition transforme une liaison multiple en liaison simple ; une élimination fait l’inverse.',
    'L’estérification de Fischer est un équilibre limité entre acide carboxylique, alcool, ester et eau.',
    'La saponification est une hydrolyse basique des esters, totale et irréversible.',
    'L’oxydation d’un carbone organique correspond, par exemple, au passage successif d’alcool à aldéhyde puis à acide carboxylique.',
    'Les coenzymes NAD+ et FAD collectent les électrons issus des oxydations organiques du métabolisme.',
  ],
  erreursFrequentes: [
    'Confondre nucléophile et électrophile : le nucléophile donne un doublet d’électrons, l’électrophile le reçoit.',
    'Attribuer une racémisation systématique au mécanisme SN2, alors que celui-ci provoque une inversion complète de configuration.',
    'Croire qu’une réaction d’élimination et une réaction d’addition sont indépendantes, alors qu’elles sont formellement inverses l’une de l’autre.',
    'Considérer l’estérification comme une réaction totale, alors qu’elle est limitée par un équilibre chimique.',
    'Confondre hydrolyse acide (réversible) et saponification (hydrolyse basique, totale et irréversible) d’un ester.',
    'Oublier que l’oxydation d’un aldéhyde donne un acide carboxylique, et non un alcool.',
  ],
  mnemotechniques: [
    {
      moyen: '« Nucléophile aime les Noyaux positifs »',
      explication:
        'Le Nucléophile est attiré par les charges positives (sites électrophiles), qu’il attaque en leur donnant un doublet d’électrons.',
    },
    {
      moyen: '« SN2 comme un parapluie qui se retourne »',
      explication:
        'Lors d’une SN2, l’attaque du nucléophile à l’opposé du groupe partant retourne la configuration spatiale du carbone, comme un parapluie retourné par le vent (inversion de Walden).',
    },
    {
      moyen: '« Alcane, Alcool, Aldéhyde, Acide » : les quatre A de l’oxydation croissante',
      explication:
        'Rappelle l’ordre croissant d’oxydation d’un carbone fonctionnel, de l’alcane (le moins oxydé) à l’acide carboxylique (le plus oxydé).',
    },
  ],
  sources: [
    'Clayden, Chimie organique',
    'Chimie organique, collection PASS/LAS, ouvrage de référence UE2',
    'Lehninger, Principes de biochimie',
  ],
  schemasLies: [],
  flashcards: [
    { id: 'ue2-mecanismes-reactionnels-fc-01', recto: 'Qu’est-ce qu’un nucléophile ?', verso: 'Une espèce riche en électrons, capable de céder un doublet d’électrons pour former une nouvelle liaison covalente.', type: 'definition', tags: ['nucléophile'] },
    { id: 'ue2-mecanismes-reactionnels-fc-02', recto: 'Qu’est-ce qu’un électrophile ?', verso: 'Une espèce pauvre en électrons, capable d’accepter un doublet d’électrons apporté par un nucléophile.', type: 'definition', tags: ['électrophile'] },
    { id: 'ue2-mecanismes-reactionnels-fc-03', recto: 'Quelle est la cinétique d’une réaction SN2 ?', verso: 'D’ordre 2, dépendant à la fois de la concentration du substrat et de celle du nucléophile.', type: 'mecanisme', tags: ['SN2'] },
    { id: 'ue2-mecanismes-reactionnels-fc-04', recto: 'Que provoque un mécanisme SN2 sur la configuration du carbone attaqué ?', verso: 'Une inversion complète de configuration, dite inversion de Walden.', type: 'mecanisme', tags: ['SN2', 'stéréochimie'] },
    { id: 'ue2-mecanismes-reactionnels-fc-05', recto: 'Par quel intermédiaire passe un mécanisme SN1 ?', verso: 'Un carbocation, intermédiaire réactionnel chargé positivement sur un carbone.', type: 'mecanisme', tags: ['SN1'] },
    { id: 'ue2-mecanismes-reactionnels-fc-06', recto: 'Quel substrat favorise un mécanisme SN1 plutôt que SN2 ?', verso: 'Un substrat tertiaire, dont le carbocation intermédiaire est stabilisé par les groupes alkyles voisins.', type: 'mecanisme', tags: ['SN1'] },
    { id: 'ue2-mecanismes-reactionnels-fc-07', recto: 'Que transforme une réaction d’addition ?', verso: 'Une liaison multiple (double ou triple) en liaison simple, par fixation de deux nouveaux groupes.', type: 'definition', tags: ['addition'] },
    { id: 'ue2-mecanismes-reactionnels-fc-08', recto: 'Que transforme une réaction d’élimination ?', verso: 'Une liaison simple en liaison multiple, par départ de deux groupes portés par des carbones adjacents.', type: 'definition', tags: ['élimination'] },
    { id: 'ue2-mecanismes-reactionnels-fc-09', recto: 'Écrire l’équilibre d’estérification de Fischer.', verso: 'R-COOH + R′-OH ⇌ R-COO-R′ + H2O.', type: 'formule', tags: ['estérification'] },
    { id: 'ue2-mecanismes-reactionnels-fc-10', recto: 'Qu’est-ce que la saponification ?', verso: 'L’hydrolyse basique d’un ester, totale et irréversible, formant un ion carboxylate et un alcool.', type: 'definition', tags: ['saponification'] },
    { id: 'ue2-mecanismes-reactionnels-fc-11', recto: 'Quel est l’ordre d’oxydation croissante entre alcool, aldéhyde et acide carboxylique ?', verso: 'Alcool, puis aldéhyde (ou cétone), puis acide carboxylique, par oxydation croissante du carbone fonctionnel.', type: 'classification', tags: ['oxydoréduction organique'] },
    { id: 'ue2-mecanismes-reactionnels-fc-12', recto: 'Quel coenzyme est réduit lors de l’oxydation de l’éthanol en acétaldéhyde ?', verso: 'Le NAD+, réduit en NADH, sous l’action de l’alcool déshydrogénase.', type: 'mecanisme', tags: ['NAD+'] },
  ],
  qcm: [
    {
      id: 'ue2-mecanismes-reactionnels-qcm-01',
      enonce: 'Concernant les nucléophiles et les électrophiles, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un nucléophile est pauvre en électrons.', vraie: false, justification: 'Faux : un nucléophile est au contraire riche en électrons.' },
        { lettre: 'B', texte: 'L’ion hydroxyde OH− est un nucléophile.', vraie: true, justification: 'Exact, grâce à ses doublets non liants.' },
        { lettre: 'C', texte: 'Un carbone lié à un halogène constitue un site électrophile privilégié.', vraie: true, justification: 'Exact, en raison de sa charge partielle positive (effet inductif attracteur de l’halogène).' },
        { lettre: 'D', texte: 'Un électrophile cède un doublet d’électrons lors de la réaction.', vraie: false, justification: 'Faux : c’est le nucléophile qui cède le doublet, l’électrophile le reçoit.' },
        { lettre: 'E', texte: 'Le carbone du groupement carbonyle est électrophile.', vraie: true, justification: 'Exact, en raison de la polarisation de la liaison C=O.' },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir clairement le sens du transfert de doublet : du nucléophile vers l’électrophile.',
      difficulte: 1,
    },
    {
      id: 'ue2-mecanismes-reactionnels-qcm-02',
      enonce: 'Concernant les mécanismes SN1 et SN2, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le mécanisme SN2 se déroule en une seule étape concertée.', vraie: true, justification: 'Exact.' },
        { lettre: 'B', texte: 'Le mécanisme SN1 passe par un intermédiaire carbocationique.', vraie: true, justification: 'Exact, lors de la première étape.' },
        { lettre: 'C', texte: 'Le mécanisme SN2 est favorisé par un substrat tertiaire très encombré.', vraie: false, justification: 'Faux : un substrat tertiaire encombré défavorise l’attaque directe requise en SN2 et favorise plutôt le mécanisme SN1.' },
        { lettre: 'D', texte: 'Le mécanisme SN1 peut conduire à une racémisation partielle du produit.', vraie: true, justification: 'Exact, car le nucléophile peut attaquer le carbocation plan des deux côtés.' },
        { lettre: 'E', texte: 'La cinétique d’une réaction SN1 dépend de la concentration du nucléophile.', vraie: false, justification: 'Faux : la cinétique SN1 est d’ordre 1, dépendant uniquement de la concentration du substrat.' },
      ],
      correction: 'Réponses exactes : A, B et D. Bien retenir les substrats favorables à chaque mécanisme : primaire pour SN2, tertiaire pour SN1.',
      difficulte: 3,
    },
    {
      id: 'ue2-mecanismes-reactionnels-qcm-03',
      enonce: 'Concernant les réactions d’addition et d’élimination, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Une addition transforme une liaison simple en liaison multiple.', vraie: false, justification: 'Faux : c’est l’inverse, une addition transforme une liaison multiple en liaison simple.' },
        { lettre: 'B', texte: 'Une élimination peut conduire à la formation d’un alcène à partir d’un halogénoalcane.', vraie: true, justification: 'Exact, par départ combiné d’un hydrogène et de l’halogène.' },
        { lettre: 'C', texte: 'Un nucléophile fortement basique favorise plutôt l’élimination que la substitution.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'L’addition nucléophile sur un carbonyle est un mécanisme fondamental des aldéhydes et cétones.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Substitution et élimination ne sont jamais en compétition pour un même substrat.', vraie: false, justification: 'Faux : elles sont fréquemment en compétition, selon la nature du nucléophile/base employé.' },
      ],
      correction: 'Réponses exactes : B, C et D. Addition et élimination sont bien les réactions formellement inverses l’une de l’autre.',
      difficulte: 2,
    },
    {
      id: 'ue2-mecanismes-reactionnels-qcm-04',
      enonce: 'Concernant l’estérification et l’hydrolyse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’estérification de Fischer est une réaction totale.', vraie: false, justification: 'Faux : c’est une réaction d’équilibre, limitée.' },
        { lettre: 'B', texte: 'L’hydrolyse d’un ester est la réaction inverse de l’estérification.', vraie: true, justification: 'Exact.' },
        { lettre: 'C', texte: 'La saponification est une hydrolyse acide, réversible.', vraie: false, justification: 'Faux : la saponification est une hydrolyse basique, totale et irréversible.' },
        { lettre: 'D', texte: 'Retirer l’eau formée déplace l’équilibre d’estérification vers la formation de l’ester.', vraie: true, justification: 'Exact, conformément à la loi de Le Chatelier.' },
        { lettre: 'E', texte: 'Les lipases hydrolysent les triglycérides lors de la digestion.', vraie: true, justification: 'Exact, libérant acides gras et glycérol.' },
      ],
      correction: 'Réponses exactes : B, D et E. Bien distinguer hydrolyse acide (réversible) et saponification (irréversible).',
      difficulte: 2,
    },
    {
      id: 'ue2-mecanismes-reactionnels-qcm-05',
      enonce: 'Concernant l’oxydoréduction en chimie organique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’oxydation d’un alcool primaire peut conduire à un aldéhyde puis à un acide carboxylique.', vraie: true, justification: 'Exact, par oxydations successives.' },
        { lettre: 'B', texte: 'Un acide carboxylique représente un état plus réduit qu’un alcool.', vraie: false, justification: 'Faux : l’acide carboxylique est plus oxydé que l’alcool.' },
        { lettre: 'C', texte: 'Le NAD+ est réduit en NADH lors de certaines oxydations organiques.', vraie: true, justification: 'Exact, comme lors de l’oxydation de l’éthanol en acétaldéhyde.' },
        { lettre: 'D', texte: 'L’alcool déshydrogénase catalyse l’oxydation de l’éthanol en acétaldéhyde.', vraie: true, justification: 'Exact.' },
        { lettre: 'E', texte: 'Un alcane représente l’état le plus oxydé parmi alcane, alcool, aldéhyde et acide carboxylique.', vraie: false, justification: 'Faux : l’alcane est au contraire l’état le moins oxydé de cette série.' },
      ],
      correction: 'Réponses exactes : A, C et D. Retenir l’ordre croissant d’oxydation : alcane, alcool, aldéhyde/cétone, acide carboxylique.',
      difficulte: 2,
    },
    {
      id: 'ue2-mecanismes-reactionnels-qcm-06',
      enonce: 'Concernant les mécanismes réactionnels en général, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un carbocation tertiaire est plus stable qu’un carbocation primaire.', vraie: true, justification: 'Exact, en raison de l’effet donneur des groupes alkyles voisins.' },
        { lettre: 'B', texte: 'L’inversion de Walden est caractéristique du mécanisme SN1.', vraie: false, justification: 'Faux : elle caractérise le mécanisme SN2, réaction concertée en une seule étape.' },
        { lettre: 'C', texte: 'Une réaction d’élimination peut être en compétition avec une substitution nucléophile.', vraie: true, justification: 'Exact.' },
        { lettre: 'D', texte: 'L’estérification et l’hydrolyse d’un ester peuvent toutes deux être catalysées par un acide.', vraie: true, justification: 'Exact, il s’agit d’un même équilibre catalysé dans les deux sens.' },
        { lettre: 'E', texte: 'Le groupement carbonyle n’est jamais le siège d’une addition nucléophile.', vraie: false, justification: 'Faux : l’addition nucléophile sur le carbonyle est au contraire un mécanisme fondamental de sa réactivité.' },
      ],
      correction: 'Réponses exactes : A, C et D. L’inversion de Walden reste la signature caractéristique du mécanisme SN2, non du SN1.',
      difficulte: 3,
    },
  ],
};
