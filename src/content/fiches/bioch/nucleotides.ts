import type { Fiche } from '../../types';

export const ficheNucleotides: Fiche = {
  id: 'bioch-nucleotides',
  ue: 'bioch',
  titre: 'Nucléotides et coenzymes nucléotidiques',
  sousTitre: 'Bases azotées, ATP, NAD+, FAD, coenzyme A et catabolisme des bases',
  chapitre: 'Biochimie structurale',
  ordre: 5,
  duree: 26,
  difficulte: 2,
  motsCles: [
    'base purique',
    'base pyrimidique',
    'nucléoside',
    'nucléotide',
    'ATP',
    'NAD+',
    'FAD',
    'coenzyme A',
    'hyperuricémie',
  ],
  objectifs: [
    'Distinguer bases puriques et bases pyrimidiques.',
    'Différencier nucléoside et nucléotide.',
    'Décrire la structure et le rôle énergétique de l’ATP.',
    'Décrire les coenzymes nucléotidiques NAD+, FAD et coenzyme A.',
    'Résumer les grandes lignes du catabolisme des bases puriques et pyrimidiques.',
    'Expliquer le mécanisme de l’hyperuricémie et son lien avec la goutte.',
  ],
  sections: [
    {
      id: 'bases-azotees',
      titre: 'Les bases azotées',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les bases azotées sont des composés hétérocycliques aromatiques comportant des atomes d’azote, classées en deux familles selon leur structure : les bases puriques, à double cycle, et les bases pyrimidiques, à cycle unique.",
        },
        {
          type: 'tableau',
          titre: 'Bases puriques et pyrimidiques',
          colonnes: ['Famille', 'Structure', 'Bases', 'Présence'],
          lignes: [
            ['Puriques', 'Cycle à six atomes fusionné à un cycle à cinq atomes', 'Adénine (A), guanine (G)', 'ADN et ARN'],
            ['Pyrimidiques', 'Cycle simple à six atomes', 'Cytosine (C) : ADN et ARN ; thymine (T) : ADN seulement ; uracile (U) : ARN seulement', 'ADN et/ou ARN selon la base'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La différence ADN / ARN au niveau des bases',
          texte:
            "La thymine, présente dans l’ADN, porte un groupement méthyle en position 5 que l’uracile, son équivalent dans l’ARN, ne porte pas. La thymine peut être vue comme une uracile méthylée, ce qui rend l’ADN chimiquement plus stable et moins sujet aux erreurs de réparation liées à la désamination spontanée de la cytosine.",
        },
        {
          type: 'liste',
          items: [
            'Dans la double hélice d’ADN, l’adénine s’apparie avec la thymine par deux liaisons hydrogène, et la guanine avec la cytosine par trois liaisons hydrogène.',
            'Une paire guanine-cytosine est donc plus stable thermiquement qu’une paire adénine-thymine.',
          ],
        },
      ],
    },
    {
      id: 'nucleosides-nucleotides',
      titre: 'Nucléosides et nucléotides',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’association d’une base azotée et d’un pentose (ribose ou désoxyribose) par une liaison osidique N-glycosidique forme un nucléoside. L’estérification d’un ou plusieurs groupements phosphate sur l’hydroxyle du carbone 5′ du pentose transforme ce nucléoside en nucléotide.",
        },
        {
          type: 'definition',
          terme: 'Nucléotide',
          definition:
            "Molécule formée d’une base azotée, d’un pentose (ribose dans les ribonucléotides, désoxyribose dans les désoxyribonucléotides) et d’un à trois groupements phosphate liés en 5'. C’est l’unité de base des acides nucléiques et de nombreux coenzymes.",
        },
        {
          type: 'tableau',
          titre: 'Nomenclature des nucléosides et nucléotides de l’adénine',
          colonnes: ['Composant', 'Nom', 'Exemple'],
          lignes: [
            ['Base seule', 'Adénine', '—'],
            ['Base + ribose', 'Nucléoside : adénosine', '—'],
            ['Nucléoside + 1 phosphate', 'Nucléotide monophosphate', 'Adénosine monophosphate (AMP)'],
            ['Nucléoside + 3 phosphates', 'Nucléotide triphosphate', 'Adénosine triphosphate (ATP)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Liaison N-glycosidique',
          texte:
            "La liaison entre la base et le pentose unit l’azote N9 des bases puriques (ou N1 des bases pyrimidiques) au carbone anomérique (C1') du pentose. Elle est chimiquement apparentée à une liaison osidique, bien que le partenaire soit un azote et non un oxygène.",
        },
      ],
    },
    {
      id: 'atp',
      titre: 'L’ATP, monnaie énergétique cellulaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’adénosine triphosphate (ATP) est le nucléotide énergétique universel de la cellule : elle couple les réactions productrices d’énergie (catabolisme) aux réactions consommatrices d’énergie (anabolisme, transport actif, contraction musculaire).",
        },
        {
          type: 'formule',
          expression: 'ATP + H2O → ADP + Pi',
          legende:
            "Hydrolyse de la liaison phosphoanhydride terminale de l’ATP, fortement exergonique, catalysée par de nombreuses ATPases.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Pourquoi l’hydrolyse de l’ATP est-elle si exergonique ?',
          texte:
            "Les liaisons phosphoanhydride de l’ATP rapprochent des charges négatives qui se repoussent, ce qui déstabilise la molécule. L’hydrolyse lève cette répulsion électrostatique et le phosphate inorganique libéré est stabilisé par résonance, deux facteurs qui rendent la réaction fortement favorable sur le plan thermodynamique.",
        },
        {
          type: 'liste',
          items: [
            'L’ATP peut être hydrolysée en ADP (perte d’un phosphate) ou en AMP (perte de deux phosphates, sous forme de pyrophosphate).',
            'D’autres nucléotides triphosphates jouent un rôle énergétique spécialisé : le GTP dans la traduction et la signalisation, l’UTP dans la synthèse des glycogènes et des glycanes, le CTP dans la synthèse des phospholipides.',
          ],
        },
      ],
    },
    {
      id: 'coenzymes-nucleotidiques',
      titre: 'Les coenzymes nucléotidiques d’oxydoréduction et de transfert',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Plusieurs coenzymes essentiels du métabolisme énergétique sont des dérivés nucléotidiques, capables de transporter des équivalents réducteurs ou des groupements chimiques d’une réaction à l’autre.",
        },
        {
          type: 'tableau',
          titre: 'Principaux coenzymes nucléotidiques',
          colonnes: ['Coenzyme', 'Vitamine précurseur', 'Rôle'],
          lignes: [
            ['NAD+ / NADH', 'Vitamine B3 (nicotinamide)', 'Transporteur d’hydrogène dans les réactions cataboliques (glycolyse, cycle de Krebs, bêta-oxydation)'],
            ['NADP+ / NADPH', 'Vitamine B3 (nicotinamide)', 'Transporteur d’hydrogène dans les réactions anaboliques (synthèse des acides gras, des stéroïdes)'],
            ['FAD / FADH2', 'Vitamine B2 (riboflavine)', 'Transporteur d’hydrogène lié de façon covalente à l’enzyme (succinate déshydrogénase, bêta-oxydation)'],
            ['Coenzyme A', 'Vitamine B5 (acide pantothénique)', 'Transporteur de groupements acyle par une liaison thioester riche en énergie'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'NAD+ contre NADP+ : une différence chimique minime, un usage opposé',
          texte:
            "NAD+ et NADP+ ne diffèrent que par un groupement phosphate supplémentaire porté par le NADP+, sans conséquence sur leur potentiel redox. Leur destin métabolique est pourtant opposé par convention cellulaire : le NADH est réoxydé pour produire de l’ATP dans le catabolisme, tandis que le NADPH fournit le pouvoir réducteur nécessaire aux voies de biosynthèse.",
        },
        {
          type: 'definition',
          terme: 'Coenzyme A (CoA-SH)',
          definition:
            "Coenzyme dérivé de l’acide pantothénique, de l’adénosine et de la bêta-mercaptoéthylamine, dont le groupement thiol terminal forme avec un acide gras une liaison thioester riche en énergie (acétyl-CoA, par exemple), essentielle au transfert des groupements acyle en métabolisme.",
        },
      ],
    },
    {
      id: 'synthese-degradation-bases',
      titre: 'Synthèse et dégradation des bases',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La synthèse des nucléotides emprunte deux grandes voies : la voie de novo, à partir de précurseurs simples (ribose-5-phosphate, acides aminés, dioxyde de carbone), et la voie de récupération (salvage), qui réutilise les bases libres issues de la dégradation des acides nucléiques.",
        },
        {
          type: 'liste',
          items: [
            'La synthèse de novo des bases puriques construit le cycle purique directement sur le ribose-5-phosphate activé (PRPP), contrairement aux bases pyrimidiques dont le cycle est formé avant sa fixation sur le PRPP.',
            'L’hypoxanthine-guanine phosphoribosyltransférase (HGPRT) est l’enzyme clé de la voie de récupération des bases puriques.',
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Syndrome de Lesch-Nyhan',
          texte:
            "Le déficit complet en HGPRT est responsable du syndrome de Lesch-Nyhan, maladie héréditaire liée au chromosome X associant hyperuricémie sévère, retard psychomoteur et comportements d’automutilation, par accumulation d’acide urique faute de recyclage des bases puriques.",
        },
        {
          type: 'paragraphe',
          texte:
            "La dégradation des bases puriques (adénine, guanine) aboutit, chez l’Homme, à la formation d’acide urique, produit terminal éliminé par voie rénale. La dégradation des bases pyrimidiques, en revanche, produit des composés solubles (bêta-alanine, bêta-aminoisobutyrate), entièrement dégradables.",
        },
      ],
    },
    {
      id: 'hyperuricemie',
      titre: "L’hyperuricémie et la goutte",
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’acide urique, faiblement soluble, précipite sous forme de cristaux d’urate de sodium lorsque sa concentration plasmatique dépasse le seuil de solubilité. C’est le mécanisme de la goutte, arthropathie microcristalline caractérisée par des crises inflammatoires articulaires aiguës.",
        },
        {
          type: 'tableau',
          titre: 'Principales causes d’hyperuricémie',
          colonnes: ['Mécanisme', 'Exemples de cause'],
          lignes: [
            ['Production excessive d’acide urique', 'Excès d’apport en purines, syndrome de lyse tumorale, déficit en HGPRT'],
            ['Élimination rénale insuffisante', 'Insuffisance rénale chronique, certains diurétiques'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Traitement pharmacologique de référence',
          texte:
            "L’allopurinol, inhibiteur de la xanthine oxydase, bloque la dernière étape de la formation d’acide urique à partir de l’hypoxanthine et de la xanthine, réduisant efficacement l’hyperuricémie chronique.",
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le produit terminal selon la famille de base',
          texte:
            "Bases puriques (adénine, guanine) → dégradation en acide urique, peu soluble, potentiellement pathogène. Bases pyrimidiques (cytosine, thymine, uracile) → dégradation en composés solubles et totalement métabolisables, sans pathologie de surcharge associée.",
        },
      ],
    },
  ],
  pointsCles: [
    'Les bases puriques (adénine, guanine) ont un double cycle ; les bases pyrimidiques (cytosine, thymine, uracile) un cycle unique.',
    'Un nucléoside associe une base et un pentose ; un nucléotide y ajoute un à trois groupements phosphate.',
    'L’hydrolyse de l’ATP en ADP et phosphate inorganique est fortement exergonique et couple catabolisme et anabolisme.',
    'Le NADH sert le catabolisme, le NADPH sert l’anabolisme, bien que les deux coenzymes ne diffèrent que par un phosphate.',
    'Le coenzyme A transporte les groupements acyle grâce à une liaison thioester riche en énergie.',
    'La dégradation des bases puriques produit l’acide urique, peu soluble ; celle des bases pyrimidiques produit des composés solubles.',
    'L’allopurinol, inhibiteur de la xanthine oxydase, traite l’hyperuricémie chronique et la goutte.',
  ],
  erreursFrequentes: [
    'Confondre nucléoside (base + pentose) et nucléotide (base + pentose + phosphate).',
    'Oublier que la thymine est spécifique de l’ADN et l’uracile spécifique de l’ARN.',
    'Penser que NAD+ et NADP+ ont un potentiel redox différent : seule leur destinée métabolique diffère par convention cellulaire, pas leur chimie redox.',
    'Croire que la dégradation de toutes les bases azotées produit de l’acide urique : seules les bases puriques suivent cette voie.',
    'Confondre l’HGPRT, enzyme de récupération, avec la xanthine oxydase, enzyme de dégradation terminale des purines.',
  ],
  mnemotechniques: [
    {
      moyen: '« PUR comme Pyrimidine à Un cycle, PURine à deux »',
      explication:
        'Piège volontaire à corriger mentalement : retenir au contraire que les PURines ont deux cycles (Adénine, Guanine) et les PYRimidines un seul cycle (Cytosine, Thymine, Uracile).',
    },
    {
      moyen: '« Après B3 vient le NAD, comme B2 le FAD »',
      explication:
        'Le NAD+/NADP+ dérive de la vitamine B3 (nicotinamide) ; le FAD dérive de la vitamine B2 (riboflavine).',
    },
    {
      moyen: '« Catabolisme donne NADH, anabolisme prend NADPH »',
      explication:
        'Le NADH produit par le catabolisme est réoxydé pour fabriquer de l’ATP ; le NADPH est consommé par les voies de biosynthèse.',
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
      id: 'bioch-nucleotides-fc-01',
      recto: 'Citer les deux bases puriques.',
      verso: 'L’adénine et la guanine.',
      type: 'classification',
      tags: ['bases azotées'],
    },
    {
      id: 'bioch-nucleotides-fc-02',
      recto: 'Quelle base est spécifique de l’ADN et absente de l’ARN ?',
      verso: 'La thymine, remplacée par l’uracile dans l’ARN.',
      type: 'definition',
      tags: ['bases azotées'],
    },
    {
      id: 'bioch-nucleotides-fc-03',
      recto: 'Quelle est la différence entre un nucléoside et un nucléotide ?',
      verso: 'Le nucléoside associe une base et un pentose ; le nucléotide y ajoute un ou plusieurs groupements phosphate.',
      type: 'definition',
      tags: ['nucléosides', 'nucléotides'],
    },
    {
      id: 'bioch-nucleotides-fc-04',
      recto: 'Pourquoi l’hydrolyse de l’ATP est-elle fortement exergonique ?',
      verso: 'Elle lève la répulsion électrostatique entre charges négatives voisines et le phosphate libéré est stabilisé par résonance.',
      type: 'mecanisme',
      tags: ['ATP'],
    },
    {
      id: 'bioch-nucleotides-fc-05',
      recto: 'De quelle vitamine dérive le NAD+ ?',
      verso: 'De la vitamine B3 (nicotinamide).',
      type: 'chiffre',
      tags: ['NAD+', 'vitamines'],
    },
    {
      id: 'bioch-nucleotides-fc-06',
      recto: 'De quelle vitamine dérive le FAD ?',
      verso: 'De la vitamine B2 (riboflavine).',
      type: 'chiffre',
      tags: ['FAD', 'vitamines'],
    },
    {
      id: 'bioch-nucleotides-fc-07',
      recto: 'Quel type de liaison le coenzyme A forme-t-il avec un acide gras ?',
      verso: 'Une liaison thioester, riche en énergie.',
      type: 'formule',
      tags: ['coenzyme A'],
    },
    {
      id: 'bioch-nucleotides-fc-08',
      recto: 'Quelle enzyme catalyse la voie de récupération des bases puriques ?',
      verso: 'L’hypoxanthine-guanine phosphoribosyltransférase (HGPRT).',
      type: 'mecanisme',
      tags: ['catabolisme des bases'],
    },
    {
      id: 'bioch-nucleotides-fc-09',
      recto: 'Quel syndrome résulte d’un déficit complet en HGPRT ?',
      verso: 'Le syndrome de Lesch-Nyhan, associant hyperuricémie, retard psychomoteur et automutilation.',
      type: 'clinique',
      tags: ['Lesch-Nyhan'],
    },
    {
      id: 'bioch-nucleotides-fc-10',
      recto: 'Quel est le produit terminal de la dégradation des bases puriques chez l’Homme ?',
      verso: 'L’acide urique.',
      type: 'chiffre',
      tags: ['catabolisme des bases'],
    },
    {
      id: 'bioch-nucleotides-fc-11',
      recto: 'Quel médicament inhibe la xanthine oxydase dans le traitement de la goutte ?',
      verso: 'L’allopurinol.',
      type: 'clinique',
      tags: ['goutte', 'allopurinol'],
    },
    {
      id: 'bioch-nucleotides-fc-12',
      recto: 'Combien de liaisons hydrogène unissent une paire guanine-cytosine, contre une paire adénine-thymine ?',
      verso: 'Trois liaisons hydrogène pour guanine-cytosine, contre deux pour adénine-thymine.',
      type: 'chiffre',
      tags: ['appariement des bases'],
    },
  ],
  qcm: [
    {
      id: 'bioch-nucleotides-qcm-01',
      enonce: 'Concernant les bases azotées, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’adénine et la guanine sont des bases puriques.', vraie: true, justification: 'Elles possèdent toutes deux un double cycle caractéristique des purines.' },
        { lettre: 'B', texte: 'La thymine est présente dans l’ARN.', vraie: false, justification: 'La thymine est spécifique de l’ADN ; l’ARN contient de l’uracile à sa place.' },
        { lettre: 'C', texte: 'La cytosine est commune à l’ADN et à l’ARN.', vraie: true, justification: 'C’est une base pyrimidique présente dans les deux types d’acides nucléiques.' },
        { lettre: 'D', texte: 'Une paire adénine-thymine est plus stable qu’une paire guanine-cytosine.', vraie: false, justification: 'C’est l’inverse : la paire guanine-cytosine, avec trois liaisons hydrogène, est plus stable.' },
        { lettre: 'E', texte: 'La thymine peut être décrite comme une uracile méthylée.', vraie: true, justification: 'Elle porte un groupement méthyle supplémentaire en position 5, absent de l’uracile.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-nucleotides-qcm-02',
      enonce: 'Concernant les nucléosides et nucléotides, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un nucléoside comporte une base et un pentose, sans phosphate.', vraie: true, justification: 'C’est la définition du nucléoside, par opposition au nucléotide.' },
        { lettre: 'B', texte: 'L’adénosine est un nucléotide.', vraie: false, justification: 'L’adénosine (adénine + ribose) est un nucléoside ; il lui manque un phosphate pour être un nucléotide.' },
        { lettre: 'C', texte: 'La liaison entre la base et le pentose est de type N-glycosidique.', vraie: true, justification: 'Elle unit un azote de la base au carbone anomérique du pentose.' },
        { lettre: 'D', texte: 'L’ATP est un ribonucléotide.', vraie: true, justification: 'Son pentose est le ribose, ce qui en fait un ribonucléotide.' },
        { lettre: 'E', texte: 'Le phosphate d’un nucléotide se fixe toujours en position 3 du pentose.', vraie: false, justification: 'Il se fixe classiquement en position 5′ du pentose.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-nucleotides-qcm-03',
      enonce: 'Concernant l’ATP, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Son hydrolyse en ADP et phosphate inorganique est exergonique.', vraie: true, justification: 'C’est le fondement de son rôle de monnaie énergétique cellulaire.' },
        { lettre: 'B', texte: 'L’ATP ne peut être hydrolysée qu’en libérant un seul phosphate à la fois.', vraie: false, justification: 'Elle peut aussi être hydrolysée en AMP, avec libération d’un pyrophosphate (deux groupements phosphate).' },
        { lettre: 'C', texte: 'Le GTP joue un rôle énergétique dans la traduction.', vraie: true, justification: 'Le GTP est notamment utilisé par les facteurs d’élongation lors de la synthèse protéique.' },
        { lettre: 'D', texte: 'La répulsion électrostatique entre les phosphates de l’ATP contribue à son caractère riche en énergie.', vraie: true, justification: 'Cette répulsion déstabilise la molécule, ce qui rend l’hydrolyse favorable.' },
        { lettre: 'E', texte: 'L’UTP intervient dans la synthèse du glycogène.', vraie: true, justification: 'L’UDP-glucose, formé à partir d’UTP, est le donneur de glucose de la glycogène synthase.' },
      ],
      correction: 'Réponses exactes : A, C, D et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-nucleotides-qcm-04',
      enonce: 'Concernant les coenzymes nucléotidiques, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le NAD+ dérive de la vitamine B3.', vraie: true, justification: 'Le nicotinamide, forme active de la vitamine B3, est un précurseur du NAD+.' },
        { lettre: 'B', texte: 'Le NADPH est principalement utilisé dans les voies cataboliques productrices d’ATP.', vraie: false, justification: 'C’est le NADH, et non le NADPH, qui alimente la production d’ATP par la chaîne respiratoire.' },
        { lettre: 'C', texte: 'Le FAD dérive de la vitamine B2.', vraie: true, justification: 'La riboflavine (vitamine B2) est le précurseur du FAD.' },
        { lettre: 'D', texte: 'Le coenzyme A dérive de l’acide pantothénique.', vraie: true, justification: 'L’acide pantothénique (vitamine B5) entre dans sa structure.' },
        { lettre: 'E', texte: 'Le NAD+ et le NADP+ ont un potentiel redox très différent.', vraie: false, justification: 'Leur potentiel redox est similaire ; seul leur usage métabolique diffère par convention cellulaire.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-nucleotides-qcm-05',
      enonce: 'Concernant le catabolisme des bases azotées, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La dégradation des bases puriques produit de l’acide urique.', vraie: true, justification: 'C’est le produit terminal du catabolisme de l’adénine et de la guanine chez l’Homme.' },
        { lettre: 'B', texte: 'La dégradation des bases pyrimidiques produit également de l’acide urique.', vraie: false, justification: 'Elle produit des composés solubles comme la bêta-alanine, entièrement dégradables.' },
        { lettre: 'C', texte: 'La xanthine oxydase intervient dans la formation d’acide urique.', vraie: true, justification: 'Elle catalyse les dernières étapes de la dégradation des purines en acide urique.' },
        { lettre: 'D', texte: 'L’HGPRT participe au catabolisme terminal des purines.', vraie: false, justification: 'L’HGPRT est une enzyme de la voie de récupération (salvage), qui limite la production d’acide urique en recyclant les bases.' },
        { lettre: 'E', texte: 'Un déficit complet en HGPRT provoque une hyperuricémie.', vraie: true, justification: 'Faute de recyclage, les bases puriques sont davantage dégradées en acide urique, comme dans le syndrome de Lesch-Nyhan.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 3,
    },
    {
      id: 'bioch-nucleotides-qcm-06',
      enonce: 'Concernant l’hyperuricémie et la goutte, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La goutte résulte de la précipitation de cristaux d’urate de sodium.', vraie: true, justification: 'C’est le mécanisme physiopathologique de l’arthropathie goutteuse.' },
        { lettre: 'B', texte: 'Une insuffisance rénale peut favoriser l’hyperuricémie.', vraie: true, justification: 'La diminution de l’élimination rénale de l’acide urique augmente sa concentration plasmatique.' },
        { lettre: 'C', texte: 'Le syndrome de lyse tumorale peut provoquer une hyperuricémie aiguë.', vraie: true, justification: 'La destruction cellulaire massive libère de grandes quantités d’acides nucléiques, dégradés en acide urique.' },
        { lettre: 'D', texte: 'L’allopurinol augmente l’activité de la xanthine oxydase.', vraie: false, justification: 'L’allopurinol inhibe au contraire la xanthine oxydase, réduisant la production d’acide urique.' },
        { lettre: 'E', texte: 'L’acide urique est un composé très soluble en toutes circonstances.', vraie: false, justification: 'Il est au contraire peu soluble, ce qui explique sa précipitation en cas d’hyperuricémie.' },
      ],
      correction: 'Réponses exactes : A, B et C.',
      difficulte: 2,
    },
  ],
};
