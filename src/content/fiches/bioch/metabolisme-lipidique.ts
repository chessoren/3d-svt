import type { Fiche } from '../../types';

export const ficheMetabolismeLipidique: Fiche = {
  id: 'bioch-metabolisme-lipidique',
  ue: 'bioch',
  titre: 'Métabolisme des lipides',
  sousTitre: 'Lipolyse, navette de la carnitine, bêta-oxydation, corps cétoniques et lipogenèse',
  chapitre: 'Métabolisme',
  ordre: 12,
  duree: 29,
  difficulte: 3,
  motsCles: [
    'lipolyse',
    'carnitine',
    'bêta-oxydation',
    'corps cétoniques',
    'cétogenèse',
    'lipogenèse',
    'régulation hormonale',
  ],
  objectifs: [
    'Décrire la lipolyse des triglycérides et sa régulation hormonale.',
    'Expliquer le rôle de la carnitine dans le transport des acides gras vers la mitochondrie.',
    'Décrire le déroulement et le bilan énergétique d’un cycle de bêta-oxydation.',
    'Décrire la cétogenèse et son contexte physiopathologique.',
    'Décrire les grandes lignes de la lipogenèse de novo.',
    'Résumer la régulation hormonale du métabolisme lipidique.',
  ],
  sections: [
    {
      id: 'lipolyse',
      titre: 'La lipolyse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La lipolyse est l’hydrolyse des triglycérides du tissu adipeux, libérant du glycérol et des acides gras libres dans la circulation sanguine, mobilisables comme substrats énergétiques par de nombreux tissus, notamment le muscle en activité.",
        },
        {
          type: 'definition',
          terme: 'Lipase hormonosensible',
          definition:
            "Enzyme du tissu adipeux, activée par phosphorylation sous l’effet des hormones lipolytiques, qui catalyse l’hydrolyse séquentielle des triglycérides en diglycérides puis en monoglycérides, libérant des acides gras à chaque étape.",
        },
        {
          type: 'tableau',
          titre: 'Régulation hormonale de la lipolyse',
          colonnes: ['Hormone', 'Effet sur la lipolyse', 'Mécanisme'],
          lignes: [
            ['Adrénaline, noradrénaline', 'Stimulation', 'Activation de l’adénylate cyclase via récepteurs bêta-adrénergiques, augmentation de l’AMPc, activation de la protéine kinase A'],
            ['Glucagon', 'Stimulation', 'Même voie AMPc-dépendante, dans un contexte de jeûne'],
            ['Insuline', 'Inhibition', 'Diminution de l’AMPc, activation d’une phosphatase qui déphosphoryle et inactive la lipase hormonosensible'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Le glycérol n’est pas oxydé par bêta-oxydation',
          texte:
            "Le glycérol libéré par la lipolyse n’est pas un substrat de la bêta-oxydation : il rejoint la glycolyse ou la néoglucogenèse après phosphorylation en glycérol-3-phosphate puis oxydation en dihydroxyacétone phosphate, exclusivement dans les tissus disposant de la glycérol kinase, principalement le foie.",
        },
      ],
    },
    {
      id: 'transport-carnitine',
      titre: 'Activation et transport des acides gras par la carnitine',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Avant d’être dégradé, un acide gras cytosolique doit être activé sous forme d’acyl-CoA, puis transporté à travers la membrane mitochondriale interne, imperméable aux acyl-CoA à longue chaîne, grâce à la navette de la carnitine.",
        },
        {
          type: 'etapes',
          titre: 'La navette de la carnitine',
          etapes: [
            { titre: 'Activation cytosolique', detail: 'L’acide gras est activé en acyl-CoA par l’acyl-CoA synthétase, avec consommation d’ATP transformé en AMP et pyrophosphate.' },
            { titre: 'Transfert sur la carnitine', detail: 'La carnitine palmitoyltransférase I (CPT-I), enzyme de la membrane mitochondriale externe, transfère le groupement acyle de l’acyl-CoA sur la carnitine, formant l’acylcarnitine.' },
            { titre: 'Translocation', detail: 'Une translocase spécifique fait entrer l’acylcarnitine dans la matrice mitochondriale, en échange d’une carnitine libre.' },
            { titre: 'Régénération de l’acyl-CoA', detail: 'La carnitine palmitoyltransférase II (CPT-II), sur la face matricielle de la membrane interne, régénère l’acyl-CoA à partir de l’acylcarnitine, libérant la carnitine qui retourne vers le cytosol.' },
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'La CPT-I, étape régulatrice majeure',
          texte:
            "La carnitine palmitoyltransférase I est inhibée par le malonyl-CoA, premier intermédiaire de la lipogenèse. Ce mécanisme empêche la dégradation simultanée des acides gras nouvellement synthétisés, couplant ainsi étroitement lipogenèse et bêta-oxydation de façon réciproque.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Déficit en CPT',
          texte:
            "Le déficit en carnitine palmitoyltransférase II est la cause la plus fréquente de myopathie métabolique liée aux lipides, se manifestant classiquement par des épisodes de rhabdomyolyse déclenchés par un effort prolongé ou un jeûne.",
        },
      ],
    },
    {
      id: 'beta-oxydation',
      titre: 'La bêta-oxydation',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La bêta-oxydation est la voie mitochondriale de dégradation séquentielle des acides gras, qui retranche à chaque cycle un fragment à deux carbones sous forme d’acétyl-CoA, en oxydant le carbone bêta de la chaîne acyle.",
        },
        {
          type: 'etapes',
          titre: 'Un cycle de bêta-oxydation',
          etapes: [
            { titre: '1. Oxydation (déshydrogénation)', detail: 'L’acyl-CoA déshydrogénase forme une double liaison entre les carbones alpha et bêta, produisant du FADH2.' },
            { titre: '2. Hydratation', detail: 'L’énoyl-CoA hydratase ajoute une molécule d’eau sur la double liaison, formant un bêta-hydroxyacyl-CoA.' },
            { titre: '3. Oxydation (déshydrogénation)', detail: 'La bêta-hydroxyacyl-CoA déshydrogénase oxyde la fonction alcool en cétone, produisant du NADH.' },
            { titre: '4. Clivage thiolytique', detail: 'La thiolase clive la liaison entre les carbones alpha et bêta, libérant une molécule d’acétyl-CoA et un acyl-CoA raccourci de deux carbones, prêt pour un nouveau cycle.' },
          ],
        },
        {
          type: 'formule',
          expression: 'Acyl-CoA (n carbones) + FAD + NAD+ + CoA-SH → Acyl-CoA (n-2 carbones) + FADH2 + NADH + Acétyl-CoA',
          legende: 'Bilan d’un cycle de bêta-oxydation, répété autant de fois que nécessaire pour dégrader entièrement la chaîne.',
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Exemple de l’acide palmitique (C16)',
          texte:
            "La dégradation complète de l’acide palmitique (16 carbones) nécessite 7 cycles de bêta-oxydation, produisant 8 acétyl-CoA, 7 FADH2 et 7 NADH. Chaque acétyl-CoA peut ensuite être oxydé dans le cycle de Krebs, ce qui confère aux acides gras une très haute densité énergétique.",
        },
      ],
    },
    {
      id: 'cetogenese',
      titre: 'La cétogenèse',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "En situation de jeûne prolongé ou de diabète non contrôlé, la production hépatique d’acétyl-CoA par la bêta-oxydation dépasse la capacité du cycle de Krebs à l’oxyder, faute d’oxaloacétate suffisant, largement dérivé vers la néoglucogenèse. L’excès d’acétyl-CoA est alors converti en corps cétoniques.",
        },
        {
          type: 'tableau',
          titre: 'Les trois corps cétoniques',
          colonnes: ['Corps cétonique', 'Origine', 'Particularité'],
          lignes: [
            ['Acétoacétate', 'Condensation de deux acétyl-CoA puis clivage du HMG-CoA', 'Précurseur direct des deux autres corps cétoniques'],
            ['Bêta-hydroxybutyrate', 'Réduction de l’acétoacétate', 'Corps cétonique majoritaire dans le sang'],
            ['Acétone', 'Décarboxylation spontanée non enzymatique de l’acétoacétate', 'Volatile, éliminée par voie respiratoire, responsable de l’haleine cétonique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Acidocétose diabétique',
          texte:
            "En cas de carence sévère en insuline, la lipolyse et la cétogenèse s’emballent, produisant une accumulation de corps cétoniques acides responsables d’une acidose métabolique à trou anionique augmenté : c’est l’acidocétose diabétique, une urgence thérapeutique.",
        },
        {
          type: 'paragraphe',
          texte:
            "Les corps cétoniques constituent, après quelques jours de jeûne, un substrat énergétique alternatif majeur pour le cerveau, normalement dépendant du glucose, ce qui limite le recours à la protéolyse musculaire pour la néoglucogenèse.",
        },
      ],
    },
    {
      id: 'lipogenese',
      titre: 'La lipogenèse de novo',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La lipogenèse de novo est la synthèse d’acides gras à partir de précurseurs non lipidiques, essentiellement le glucose en excès, se déroulant dans le cytosol, principalement dans le foie et le tissu adipeux.",
        },
        {
          type: 'liste',
          items: [
            'L’acétyl-CoA mitochondrial, formé en excès à partir du glucose, est exporté vers le cytosol sous forme de citrate, puis reconverti en acétyl-CoA cytosolique par l’ATP-citrate lyase.',
            'L’acétyl-CoA carboxylase, enzyme régulatrice majeure et irréversible de la voie, carboxyle l’acétyl-CoA en malonyl-CoA, avec consommation d’ATP.',
            'L’acide gras synthase, complexe multienzymatique, allonge ensuite la chaîne carbonée par additions successives d’unités à deux carbones issues du malonyl-CoA, en utilisant le NADPH comme pouvoir réducteur.',
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Acétyl-CoA carboxylase, miroir de la CPT-I',
          texte:
            "L’acétyl-CoA carboxylase est activée par le citrate et l’insuline, inhibée par les acides gras à longue chaîne et par phosphorylation sous l’effet du glucagon et de l’adrénaline. Son produit, le malonyl-CoA, inhibe en retour la CPT-I : lipogenèse et bêta-oxydation sont ainsi régulées de façon réciproque et cohérente.",
        },
      ],
    },
    {
      id: 'regulation-hormonale-globale',
      titre: 'Régulation hormonale globale du métabolisme lipidique',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "L’équilibre entre lipogenèse et lipolyse, entre stockage et mobilisation des lipides, est finement ajusté par le rapport insuline/glucagon et par les hormones de stress, reflet de l’état nutritionnel de l’organisme.",
        },
        {
          type: 'tableau',
          titre: 'Effets hormonaux de synthèse',
          colonnes: ['Situation', 'Hormone dominante', 'Effet sur le métabolisme lipidique'],
          lignes: [
            ['Période postprandiale', 'Insuline élevée', 'Stimulation de la lipogenèse, inhibition de la lipolyse et de la cétogenèse'],
            ['Jeûne, exercice prolongé', 'Glucagon, catécholamines élevés', 'Stimulation de la lipolyse et de la bêta-oxydation, cétogenèse possible'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir le rôle pivot du malonyl-CoA',
          texte:
            "Le malonyl-CoA est la clé de voûte de la bascule métabolique : sa présence, reflet d’un état postprandial riche en glucose et en insuline, inhibe la CPT-I et bloque la bêta-oxydation, orientant les acides gras nouvellement synthétisés vers le stockage plutôt que vers leur propre dégradation.",
        },
      ],
    },
  ],
  pointsCles: [
    'La lipolyse, catalysée par la lipase hormonosensible, est stimulée par le glucagon et les catécholamines, inhibée par l’insuline.',
    'La navette de la carnitine (CPT-I, translocase, CPT-II) permet l’entrée des acyl-CoA à longue chaîne dans la matrice mitochondriale.',
    'Un cycle de bêta-oxydation retranche deux carbones sous forme d’acétyl-CoA et produit un FADH2 et un NADH.',
    'La cétogenèse hépatique produit acétoacétate, bêta-hydroxybutyrate et acétone en cas d’excès d’acétyl-CoA non oxydable par le cycle de Krebs.',
    'L’acétyl-CoA carboxylase, activée par le citrate, catalyse l’étape régulatrice de la lipogenèse en formant le malonyl-CoA.',
    'Le malonyl-CoA inhibe la CPT-I, couplant réciproquement lipogenèse et bêta-oxydation.',
    'L’acidocétose diabétique résulte d’un emballement de la lipolyse et de la cétogenèse en cas de carence sévère en insuline.',
  ],
  erreursFrequentes: [
    'Croire que le glycérol issu de la lipolyse est dégradé par bêta-oxydation : il rejoint en réalité la glycolyse ou la néoglucogenèse après phosphorylation.',
    'Confondre CPT-I (membrane externe, étape régulatrice) et CPT-II (membrane interne, régénération de l’acyl-CoA).',
    'Oublier que la bêta-oxydation produit à la fois du FADH2 et du NADH à chaque cycle, et non l’un sans l’autre.',
    'Penser que la cétogenèse est toujours pathologique : elle est physiologique lors d’un jeûne prolongé, et ne devient dangereuse qu’en excès incontrôlé, comme dans l’acidocétose diabétique.',
    'Confondre le rôle du malonyl-CoA (inhibiteur de la CPT-I) avec celui de l’acétyl-CoA (substrat de l’acétyl-CoA carboxylase).',
  ],
  mnemotechniques: [
    {
      moyen: '« OHOC pour la bêta-oxydation »',
      explication:
        'Oxydation (FADH2), Hydratation, Oxydation (NADH), Clivage thiolytique : l’ordre des quatre réactions d’un cycle de bêta-oxydation.',
    },
    {
      moyen: '« Le malonyl-CoA ferme la porte mitochondriale »',
      explication:
        'En inhibant la CPT-I, le malonyl-CoA empêche l’entrée des acides gras dans la mitochondrie tant que la lipogenèse est active, évitant un cycle futile.',
    },
    {
      moyen: '« Trois corps cétoniques, une seule haleine »',
      explication:
        'Acétoacétate, bêta-hydroxybutyrate et acétone : seule l’acétone, volatile, est responsable de l’odeur caractéristique de l’haleine cétonique.',
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
      id: 'bioch-metabolisme-lipidique-fc-01',
      recto: 'Quelle enzyme catalyse la lipolyse des triglycérides du tissu adipeux ?',
      verso: 'La lipase hormonosensible.',
      type: 'mecanisme',
      tags: ['lipolyse'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-02',
      recto: 'Quelles hormones stimulent la lipolyse ?',
      verso: 'Le glucagon et les catécholamines (adrénaline, noradrénaline).',
      type: 'classification',
      tags: ['lipolyse', 'hormones'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-03',
      recto: 'Quel est le rôle de la carnitine palmitoyltransférase I (CPT-I) ?',
      verso: 'Transférer le groupement acyle de l’acyl-CoA cytosolique sur la carnitine, première étape de la navette de la carnitine.',
      type: 'mecanisme',
      tags: ['carnitine'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-04',
      recto: 'Par quoi la CPT-I est-elle inhibée ?',
      verso: 'Par le malonyl-CoA, intermédiaire de la lipogenèse.',
      type: 'mecanisme',
      tags: ['carnitine', 'régulation'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-05',
      recto: 'Quels sont les quatre types de réactions d’un cycle de bêta-oxydation ?',
      verso: 'Oxydation (FADH2), hydratation, oxydation (NADH), clivage thiolytique.',
      type: 'mecanisme',
      tags: ['bêta-oxydation'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-06',
      recto: 'Combien de cycles de bêta-oxydation sont nécessaires pour dégrader complètement l’acide palmitique (C16) ?',
      verso: 'Sept cycles, produisant huit acétyl-CoA.',
      type: 'chiffre',
      tags: ['bêta-oxydation'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-07',
      recto: 'Citer les trois corps cétoniques.',
      verso: 'L’acétoacétate, le bêta-hydroxybutyrate et l’acétone.',
      type: 'classification',
      tags: ['corps cétoniques'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-08',
      recto: 'Quel corps cétonique est responsable de l’haleine cétonique ?',
      verso: 'L’acétone, volatile et éliminée par voie respiratoire.',
      type: 'clinique',
      tags: ['corps cétoniques'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-09',
      recto: 'Dans quel contexte survient l’acidocétose diabétique ?',
      verso: 'En cas de carence sévère en insuline, avec emballement de la lipolyse et de la cétogenèse.',
      type: 'clinique',
      tags: ['acidocétose'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-10',
      recto: 'Quelle enzyme catalyse l’étape régulatrice de la lipogenèse ?',
      verso: 'L’acétyl-CoA carboxylase, qui forme le malonyl-CoA.',
      type: 'mecanisme',
      tags: ['lipogenèse'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-11',
      recto: 'Quel coenzyme réducteur est utilisé par l’acide gras synthase lors de la lipogenèse ?',
      verso: 'Le NADPH.',
      type: 'chiffre',
      tags: ['lipogenèse'],
    },
    {
      id: 'bioch-metabolisme-lipidique-fc-12',
      recto: 'Quel est le devenir métabolique du glycérol libéré par la lipolyse ?',
      verso: 'Il rejoint la glycolyse ou la néoglucogenèse hépatique, après phosphorylation en glycérol-3-phosphate.',
      type: 'mecanisme',
      tags: ['lipolyse'],
    },
  ],
  qcm: [
    {
      id: 'bioch-metabolisme-lipidique-qcm-01',
      enonce: 'Concernant la lipolyse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La lipase hormonosensible est activée par phosphorylation.', vraie: true, justification: 'La protéine kinase A, activée par l’AMPc, phosphoryle et active cette enzyme.' },
        { lettre: 'B', texte: 'L’insuline stimule la lipolyse.', vraie: false, justification: 'L’insuline inhibe au contraire la lipolyse, en abaissant l’AMPc.' },
        { lettre: 'C', texte: 'Le glucagon stimule la lipolyse.', vraie: true, justification: 'Il active la même voie AMPc-dépendante que les catécholamines.' },
        { lettre: 'D', texte: 'La lipolyse libère du glycérol et des acides gras.', vraie: true, justification: 'Ce sont les deux produits de l’hydrolyse complète des triglycérides.' },
        { lettre: 'E', texte: 'Le glycérol libéré est directement dégradé par bêta-oxydation.', vraie: false, justification: 'Il rejoint la glycolyse ou la néoglucogenèse, et non la bêta-oxydation, réservée aux acides gras.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-lipidique-qcm-02',
      enonce: 'Concernant la navette de la carnitine, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La CPT-I est localisée sur la membrane mitochondriale externe.', vraie: true, justification: 'C’est sa localisation caractéristique, en amont de la translocation.' },
        { lettre: 'B', texte: 'La CPT-II régénère l’acyl-CoA dans la matrice mitochondriale.', vraie: true, justification: 'C’est la dernière étape de la navette, du côté matriciel de la membrane interne.' },
        { lettre: 'C', texte: 'Le malonyl-CoA active la CPT-I.', vraie: false, justification: 'Le malonyl-CoA inhibe la CPT-I, ce qui couple lipogenèse et bêta-oxydation de façon réciproque.' },
        { lettre: 'D', texte: 'La navette de la carnitine est nécessaire au transport des acides gras à longue chaîne.', vraie: true, justification: 'La membrane mitochondriale interne leur est imperméable sous forme d’acyl-CoA.' },
        { lettre: 'E', texte: 'Un déficit en CPT-II peut provoquer une rhabdomyolyse à l’effort.', vraie: true, justification: 'C’est la présentation clinique classique de cette myopathie métabolique.' },
      ],
      correction: 'Réponses exactes : A, B, D et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-lipidique-qcm-03',
      enonce: 'Concernant la bêta-oxydation, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle se déroule dans le cytosol.', vraie: false, justification: 'Elle se déroule dans la matrice mitochondriale.' },
        { lettre: 'B', texte: 'Chaque cycle produit un FADH2 et un NADH.', vraie: true, justification: 'Ce sont les produits des deux étapes d’oxydoréduction du cycle.' },
        { lettre: 'C', texte: 'Chaque cycle libère une molécule d’acétyl-CoA.', vraie: true, justification: 'C’est le produit du clivage thiolytique final du cycle.' },
        { lettre: 'D', texte: 'La thiolase catalyse la première étape du cycle.', vraie: false, justification: 'La thiolase catalyse la dernière étape (le clivage) ; l’acyl-CoA déshydrogénase catalyse la première.' },
        { lettre: 'E', texte: 'La dégradation complète de l’acide palmitique produit huit molécules d’acétyl-CoA.', vraie: true, justification: 'Sept cycles de bêta-oxydation libèrent au total huit acétyl-CoA à partir des seize carbones initiaux.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-lipidique-qcm-04',
      enonce: 'Concernant la cétogenèse, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle se déroule principalement dans le foie.', vraie: true, justification: 'C’est l’organe producteur des corps cétoniques exportés vers les tissus périphériques.' },
        { lettre: 'B', texte: 'Elle est stimulée par un excès d’acétyl-CoA non oxydable dans le cycle de Krebs.', vraie: true, justification: 'C’est le mécanisme déclenchant en cas de jeûne prolongé ou de carence en insuline.' },
        { lettre: 'C', texte: 'Le bêta-hydroxybutyrate est le corps cétonique majoritaire dans le sang.', vraie: true, justification: 'Il résulte de la réduction de l’acétoacétate et prédomine sur le plan quantitatif.' },
        { lettre: 'D', texte: 'Les corps cétoniques ne peuvent jamais être utilisés comme substrat énergétique par le cerveau.', vraie: false, justification: 'Après quelques jours de jeûne, le cerveau utilise largement les corps cétoniques comme substrat alternatif.' },
        { lettre: 'E', texte: 'L’acidocétose diabétique est une complication possible d’une carence sévère en insuline.', vraie: true, justification: 'La levée de l’inhibition insulinique sur la lipolyse et la cétogenèse en est le mécanisme.' },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-lipidique-qcm-05',
      enonce: 'Concernant la lipogenèse de novo, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle se déroule dans la mitochondrie.', vraie: false, justification: 'Elle se déroule dans le cytosol, contrairement à la bêta-oxydation.' },
        { lettre: 'B', texte: 'L’acétyl-CoA carboxylase catalyse la formation du malonyl-CoA.', vraie: true, justification: 'C’est l’étape régulatrice majeure de la lipogenèse.' },
        { lettre: 'C', texte: 'Le NADPH fournit le pouvoir réducteur nécessaire à l’acide gras synthase.', vraie: true, justification: 'C’est le coenzyme réducteur utilisé lors de l’élongation de la chaîne carbonée.' },
        { lettre: 'D', texte: 'L’insuline inhibe l’acétyl-CoA carboxylase.', vraie: false, justification: 'L’insuline active au contraire cette enzyme, favorisant la lipogenèse en période postprandiale.' },
        { lettre: 'E', texte: 'Le citrate contribue à l’export de l’acétyl-CoA mitochondrial vers le cytosol.', vraie: true, justification: 'C’est la forme sous laquelle l’acétyl-CoA traverse la membrane mitochondriale interne pour la lipogenèse.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'bioch-metabolisme-lipidique-qcm-06',
      enonce: 'Concernant la régulation hormonale du métabolisme lipidique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'En période postprandiale, l’insuline stimule la lipogenèse.', vraie: true, justification: 'L’excès de glucose est alors orienté vers la synthèse d’acides gras.' },
        { lettre: 'B', texte: 'Le jeûne prolongé favorise la lipolyse et la bêta-oxydation.', vraie: true, justification: 'La baisse de l’insuline et la hausse du glucagon orientent le métabolisme vers la mobilisation des lipides.' },
        { lettre: 'C', texte: 'Le malonyl-CoA favorise simultanément la lipogenèse et la bêta-oxydation.', vraie: false, justification: 'Il favorise la lipogenèse tout en inhibant la bêta-oxydation, via l’inhibition de la CPT-I.' },
        { lettre: 'D', texte: 'Les catécholamines stimulent la lipolyse via les récepteurs bêta-adrénergiques.', vraie: true, justification: 'C’est le mécanisme classique d’activation de l’adénylate cyclase et de la voie AMPc.' },
        { lettre: 'E', texte: 'La cétogenèse est favorisée en période postprandiale riche en insuline.', vraie: false, justification: 'La cétogenèse est au contraire inhibée par l’insuline, qui limite la lipolyse et la bêta-oxydation hépatiques.' },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
  ],
};
