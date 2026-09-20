import type { Fiche } from '../../types';

export const ficheAnnexesPlacenta: Fiche = {
  id: 'embryo-annexes-placenta',
  ue: 'embryo',
  titre: 'Annexes embryonnaires et placenta',
  sousTitre: 'Amnios, vésicule vitelline, allantoïde, cordon et fonctions placentaires',
  chapitre: 'Annexes et anomalies',
  ordre: 10,
  duree: 27,
  difficulte: 2,
  motsCles: [
    'amnios',
    'vésicule vitelline',
    'allantoïde',
    'cordon ombilical',
    'villosité choriale',
    'barrière placentaire',
    'hCG',
    'circulation fœtale',
  ],
  objectifs: [
    "Décrire les principales annexes embryonnaires et leur rôle respectif.",
    "Décrire la structure du cordon ombilical.",
    "Expliquer la maturation des villosités choriales et la constitution de la barrière placentaire.",
    "Citer les grandes fonctions du placenta, d’échange et endocrine.",
    "Décrire les particularités de la circulation fœtale et ses shunts caractéristiques.",
  ],
  sections: [
    {
      id: 'annexes-principales',
      titre: 'Les annexes embryonnaires principales',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Au cours du développement, plusieurs structures extra-embryonnaires assurent la protection, la nutrition et les échanges de l’embryon puis du fœtus, sans participer directement à la constitution de son corps : ce sont les annexes embryonnaires.",
        },
        {
          type: 'tableau',
          titre: 'Les principales annexes et leur rôle',
          colonnes: ['Annexe', 'Origine', 'Rôle principal'],
          lignes: [
            ['Amnios', 'Amnioblastes issus de l’épiblaste', 'Délimite la cavité amniotique et le liquide amniotique, protection mécanique'],
            ['Vésicule vitelline', 'Hypoblaste puis mésoderme extra-embryonnaire', 'Rôle nutritif transitoire, hématopoïèse primitive, origine des cellules germinales primordiales'],
            ['Allantoïde', 'Diverticule endodermique de l’intestin postérieur primitif', 'Participe à la formation des vaisseaux ombilicaux ; régresse en ouraque'],
            ['Chorion', 'Trophoblaste et mésoderme extra-embryonnaire associé', 'Constitue la partie fœtale du placenta'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un rôle transitoire mais essentiel',
          texte:
            "Ces annexes, bien que ne participant pas directement à la formation du corps de l’embryon, sont indispensables à sa survie et à son développement normal : leur étude est donc inséparable de celle de l’organogenèse proprement dite.",
        },
      ],
    },
    {
      id: 'vesicule-vitelline-allantoide',
      titre: 'Vésicule vitelline et allantoïde',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La vésicule vitelline joue un rôle nutritif transitoire précoce, avant l’établissement d’une circulation utéroplacentaire efficace. Sa paroi est le siège d’une hématopoïèse primitive (îlots sanguins), et elle est également le site d’origine des cellules germinales primordiales, qui migreront ensuite vers les crêtes génitales pour donner les futures cellules germinales.",
        },
        {
          type: 'paragraphe',
          texte:
            "L’allantoïde est un petit diverticule qui naît de la paroi de l’intestin postérieur primitif et s’étend dans le pédicule de fixation. Chez l’être humain, son rôle est réduit par rapport à d’autres espèces, mais elle contribue à la formation des vaisseaux ombilicaux. Elle régresse ensuite pour former, chez l’adulte, un cordon fibreux, l’ouraque, tendu entre le dôme vésical et l’ombilic (ligament ombilical médian).",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre vésicule vitelline et sac amniotique',
          texte:
            "La vésicule vitelline et la cavité amniotique sont deux structures bien distinctes, situées de part et d’autre du disque embryonnaire : l’amnios du côté dorsal (côté épiblaste), la vésicule vitelline du côté ventral (côté hypoblaste).",
        },
      ],
    },
    {
      id: 'cordon-ombilical',
      titre: 'Le cordon ombilical',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le cordon ombilical se forme à partir du pédicule de fixation, qui relie initialement le disque embryonnaire au trophoblaste. Il relie le fœtus au placenta et assure l’ensemble des échanges materno-fœtaux tout au long de la grossesse.",
        },
        {
          type: 'tableau',
          titre: 'Constitution du cordon ombilical',
          colonnes: ['Composant', 'Nombre', 'Sens de circulation'],
          lignes: [
            ['Veine ombilicale', '1', 'Sang oxygéné et riche en nutriments, du placenta vers le fœtus'],
            ['Artères ombilicales', '2', 'Sang désoxygéné et chargé en déchets, du fœtus vers le placenta'],
          ],
        },
        {
          type: 'definition',
          terme: 'Gelée de Wharton',
          definition:
            "Tissu conjonctif mucoïde, riche en substance fondamentale, qui entoure et protège les vaisseaux ombilicaux au sein du cordon, leur évitant la compression et la torsion.",
        },
      ],
    },
    {
      id: 'villosites-barriere',
      titre: 'Villosités choriales et barrière placentaire',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le placenta se développe à partir de la maturation progressive des villosités choriales, prolongements du trophoblaste qui s’enfoncent dans l’endomètre maternel et assurent les échanges materno-fœtaux.",
        },
        {
          type: 'etapes',
          titre: 'Maturation des villosités choriales',
          etapes: [
            {
              titre: 'Villosité primaire',
              detail: 'Prolongement composé de cytotrophoblaste et de syncytiotrophoblaste, sans axe conjonctif.',
            },
            {
              titre: 'Villosité secondaire',
              detail: 'Pénétration d’un axe mésenchymateux dérivé du mésoderme extra-embryonnaire au centre de la villosité.',
            },
            {
              titre: 'Villosité tertiaire',
              detail:
                'Vascularisation de l’axe mésenchymateux par des vaisseaux fœtaux, vers le 21e jour de développement, rendant les échanges materno-fœtaux possibles.',
            },
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "La barrière placentaire précoce comporte quatre couches successives que doivent traverser les échanges entre sang maternel et sang fœtal : le syncytiotrophoblaste, le cytotrophoblaste, le mésenchyme conjonctif de l’axe villositaire, et l’endothélium des capillaires fœtaux. Cette barrière s’amincit au cours de la grossesse, notamment par disparition progressive de la couche cytotrophoblastique, ce qui facilite les échanges en fin de grossesse.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Sang maternel et sang fœtal ne se mélangent pas',
          texte:
            "Un point fondamental à retenir : le sang maternel et le sang fœtal circulent dans deux compartiments séparés par la barrière placentaire, et ne se mélangent normalement pas. Les échanges se font par diffusion, transport actif ou facilité, à travers cette interface.",
        },
      ],
    },
    {
      id: 'fonctions-placenta-circulation',
      titre: 'Fonctions du placenta et circulation fœtale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le placenta assure trois grandes fonctions : une fonction d’échange (gaz respiratoires, nutriments, déchets), une fonction endocrine (sécrétion hormonale) et une fonction de protection immunitaire partielle du fœtus.",
        },
        {
          type: 'tableau',
          titre: 'Principales hormones placentaires',
          colonnes: ['Hormone', 'Origine', 'Rôle principal'],
          lignes: [
            ['hCG', 'Syncytiotrophoblaste', 'Maintien du corps jaune, base du diagnostic de grossesse'],
            ['Hormone lactogène placentaire (hPL)', 'Syncytiotrophoblaste', 'Adaptation du métabolisme maternel (effet diabétogène, mobilisation des acides gras)'],
            ['Progestérone', 'Syncytiotrophoblaste (relais du corps jaune)', 'Maintien de la quiescence utérine'],
            ['Œstrogènes', 'Syncytiotrophoblaste', 'Croissance utérine et mammaire, préparation à l’accouchement'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "La circulation fœtale présente des particularités adaptées à l’oxygénation placentaire plutôt que pulmonaire, avec plusieurs shunts caractéristiques qui court-circuitent le foie et les poumons, non fonctionnels avant la naissance.",
        },
        {
          type: 'tableau',
          titre: 'Les trois shunts de la circulation fœtale',
          colonnes: ['Shunt', 'Trajet court-circuité'],
          lignes: [
            ['Canal veineux (d’Arantius)', 'Une partie du sang de la veine ombilicale évite le foie et rejoint directement la veine cave inférieure'],
            ['Foramen ovale', 'Le sang passe de l’oreillette droite vers l’oreillette gauche, évitant en partie la circulation pulmonaire'],
            ['Canal artériel', 'Le sang passe de l’artère pulmonaire vers l’aorte, évitant les poumons non fonctionnels'],
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Fermeture des shunts à la naissance',
          texte:
            "À la naissance, l’expansion pulmonaire et l’interruption de la circulation ombilicale entraînent la fermeture fonctionnelle puis anatomique progressive de ces trois shunts : le canal veineux devient le ligament veineux, le foramen ovale se ferme (fosse ovale), le canal artériel devient le ligament artériel. Leur persistance pathologique définit des cardiopathies congénitales classiques.",
        },
      ],
    },
  ],
  pointsCles: [
    "L’amnios, la vésicule vitelline, l’allantoïde et le chorion sont les principales annexes embryonnaires.",
    "La vésicule vitelline assure un rôle nutritif transitoire, une hématopoïèse primitive et l’origine des cellules germinales primordiales.",
    "Le cordon ombilical contient une veine ombilicale (sang oxygéné) et deux artères ombilicales (sang désoxygéné), entourées de la gelée de Wharton.",
    "Les villosités choriales maturent en trois stades : primaire, secondaire, tertiaire (vascularisée, vers J21).",
    "La barrière placentaire précoce comporte quatre couches, qui s’amincissent au cours de la grossesse.",
    "Le placenta a une fonction d’échange, une fonction endocrine (hCG, hPL, progestérone, œstrogènes) et une fonction immunitaire partielle.",
    "La circulation fœtale comporte trois shunts : canal veineux, foramen ovale et canal artériel, qui se ferment à la naissance.",
  ],
  erreursFrequentes: [
    "Confondre le nombre de vaisseaux du cordon ombilical : une veine (sang oxygéné) et deux artères (sang désoxygéné), et non l’inverse.",
    "Croire que le sang maternel et le sang fœtal se mélangent directement dans le placenta : ils restent séparés par la barrière placentaire.",
    "Inverser villosité secondaire et tertiaire : la vascularisation par des vaisseaux fœtaux ne survient qu’au stade tertiaire.",
    "Oublier que le foramen ovale fait passer le sang de l’oreillette droite vers l’oreillette gauche, et non l’inverse.",
    "Confondre l’allantoïde, à l’origine de l’ouraque, avec le canal vitellin, à l’origine du diverticule de Meckel.",
    "Penser que les shunts fœtaux persistent normalement après la naissance : leur fermeture est physiologique et attendue.",
  ],
  mnemotechniques: [
    {
      moyen: 'Une veine, deux artères : « V comme veine, unique »',
      explication:
        'Le cordon ombilical comporte une seule veine ombilicale et deux artères ombilicales : un repère simple pour ne pas se tromper.',
    },
    {
      moyen: '« Ovale, artériel, veineux » : trois shunts à fermer',
      explication:
        'Retenir les trois shunts fœtaux (foramen ovale, canal artériel, canal veineux) qui se ferment tous à la naissance.',
    },
  ],
  sources: [
    'Langman, Embryologie médicale, 13e édition',
    'Moore, L’être humain en développement, 10e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'embryo-annexes-placenta-fc-01',
      recto: 'Citer les quatre principales annexes embryonnaires.',
      verso: 'Amnios, vésicule vitelline, allantoïde et chorion.',
      type: 'classification',
      tags: ['annexes embryonnaires'],
    },
    {
      id: 'embryo-annexes-placenta-fc-02',
      recto: 'Quel rôle hématopoïétique joue la vésicule vitelline ?',
      verso: 'Elle est le siège d’une hématopoïèse primitive, par des îlots sanguins.',
      type: 'mecanisme',
      tags: ['vésicule vitelline'],
    },
    {
      id: 'embryo-annexes-placenta-fc-03',
      recto: 'Que devient l’allantoïde chez l’adulte ?',
      verso: 'Elle régresse en ouraque, ligament ombilical médian tendu entre le dôme vésical et l’ombilic.',
      type: 'mecanisme',
      tags: ['allantoïde', 'ouraque'],
    },
    {
      id: 'embryo-annexes-placenta-fc-04',
      recto: 'Combien de vaisseaux comporte le cordon ombilical et lesquels ?',
      verso: 'Trois vaisseaux : une veine ombilicale et deux artères ombilicales.',
      type: 'chiffre',
      tags: ['cordon ombilical'],
    },
    {
      id: 'embryo-annexes-placenta-fc-05',
      recto: 'Quel tissu protège les vaisseaux du cordon ombilical ?',
      verso: 'La gelée de Wharton, tissu conjonctif mucoïde.',
      type: 'definition',
      tags: ['gelée de Wharton'],
    },
    {
      id: 'embryo-annexes-placenta-fc-06',
      recto: 'Quels sont les trois stades de maturation des villosités choriales ?',
      verso: 'Villosité primaire, secondaire (axe mésenchymateux), tertiaire (vascularisée).',
      type: 'classification',
      tags: ['villosités choriales'],
    },
    {
      id: 'embryo-annexes-placenta-fc-07',
      recto: 'Quelles sont les quatre couches de la barrière placentaire précoce ?',
      verso: 'Syncytiotrophoblaste, cytotrophoblaste, mésenchyme villositaire, endothélium des capillaires fœtaux.',
      type: 'classification',
      tags: ['barrière placentaire'],
    },
    {
      id: 'embryo-annexes-placenta-fc-08',
      recto: 'Quelle hormone placentaire a un effet diabétogène pour la mère ?',
      verso: 'L’hormone lactogène placentaire (hPL).',
      type: 'mecanisme',
      tags: ['hPL'],
    },
    {
      id: 'embryo-annexes-placenta-fc-09',
      recto: 'Quel shunt fœtal court-circuite le foie ?',
      verso: 'Le canal veineux (d’Arantius).',
      type: 'mecanisme',
      tags: ['circulation fœtale'],
    },
    {
      id: 'embryo-annexes-placenta-fc-10',
      recto: 'Quel shunt fait passer le sang de l’oreillette droite vers l’oreillette gauche ?',
      verso: 'Le foramen ovale.',
      type: 'mecanisme',
      tags: ['foramen ovale'],
    },
    {
      id: 'embryo-annexes-placenta-fc-11',
      recto: 'Quel shunt fait passer le sang de l’artère pulmonaire vers l’aorte ?',
      verso: 'Le canal artériel.',
      type: 'mecanisme',
      tags: ['canal artériel'],
    },
    {
      id: 'embryo-annexes-placenta-fc-12',
      recto: 'Que deviennent le foramen ovale et le canal artériel après la naissance ?',
      verso: 'Le foramen ovale se ferme (fosse ovale) ; le canal artériel devient le ligament artériel.',
      type: 'clinique',
      tags: ['fermeture des shunts'],
    },
  ],
  qcm: [
    {
      id: 'embryo-annexes-placenta-qcm-01',
      enonce: 'Concernant les annexes embryonnaires, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’amnios délimite la cavité amniotique.', vraie: true, justification: 'Exact, bordée par les amnioblastes issus de l’épiblaste.' },
        { lettre: 'B', texte: 'La vésicule vitelline participe à l’hématopoïèse primitive.', vraie: true, justification: 'Exact, par ses îlots sanguins précoces.' },
        { lettre: 'C', texte: 'Les cellules germinales primordiales apparaissent dans le tube neural.', vraie: false, justification: 'Elles apparaissent dans la paroi de la vésicule vitelline, puis migrent vers les crêtes génitales.' },
        { lettre: 'D', texte: 'Le chorion constitue la partie fœtale du placenta.', vraie: true, justification: 'Exact, formé du trophoblaste et du mésoderme extra-embryonnaire associé.' },
        { lettre: 'E', texte: 'L’allantoïde n’a aucun lien avec les vaisseaux ombilicaux.', vraie: false, justification: 'L’allantoïde participe au contraire à la formation des vaisseaux ombilicaux.' },
      ],
      correction: 'Réponses exactes : A, B et D. Les cellules germinales primordiales proviennent de la vésicule vitelline, non du tube neural.',
      difficulte: 2,
    },
    {
      id: 'embryo-annexes-placenta-qcm-02',
      enonce: 'Concernant le cordon ombilical, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il contient deux veines ombilicales et une artère ombilicale.', vraie: false, justification: 'C’est l’inverse : une veine et deux artères ombilicales.' },
        { lettre: 'B', texte: 'La veine ombilicale transporte du sang oxygéné vers le fœtus.', vraie: true, justification: 'Exact, du placenta vers le fœtus.' },
        { lettre: 'C', texte: 'Les artères ombilicales transportent du sang désoxygéné vers le placenta.', vraie: true, justification: 'Exact, du fœtus vers le placenta.' },
        { lettre: 'D', texte: 'La gelée de Wharton est un tissu osseux protégeant les vaisseaux.', vraie: false, justification: 'La gelée de Wharton est un tissu conjonctif mucoïde, non osseux.' },
        { lettre: 'E', texte: 'Le cordon dérive du pédicule de fixation.', vraie: true, justification: 'Exact, structure apparue en fin de deuxième semaine.' },
      ],
      correction: 'Réponses exactes : B, C et E. Retenir précisément le nombre et le sens de circulation des vaisseaux ombilicaux.',
      difficulte: 1,
    },
    {
      id: 'embryo-annexes-placenta-qcm-03',
      enonce: 'Concernant les villosités choriales et la barrière placentaire, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La villosité primaire comporte déjà un axe mésenchymateux.', vraie: false, justification: 'C’est la villosité secondaire qui acquiert un axe mésenchymateux ; la villosité primaire n’en comporte pas.' },
        { lettre: 'B', texte: 'La villosité tertiaire est vascularisée par des vaisseaux fœtaux.', vraie: true, justification: 'Exact, vers le 21e jour de développement.' },
        { lettre: 'C', texte: 'La barrière placentaire précoce comporte quatre couches.', vraie: true, justification: 'Exact : syncytiotrophoblaste, cytotrophoblaste, mésenchyme, endothélium fœtal.' },
        { lettre: 'D', texte: 'Cette barrière s’épaissit progressivement au cours de la grossesse.', vraie: false, justification: 'Elle s’amincit au contraire, notamment par disparition progressive du cytotrophoblaste.' },
        { lettre: 'E', texte: 'Le sang maternel et le sang fœtal se mélangent directement au niveau villositaire.', vraie: false, justification: 'Ils restent séparés par la barrière placentaire ; les échanges se font sans mélange direct.' },
      ],
      correction: 'Réponses exactes : B et C. La barrière placentaire s’amincit avec la grossesse, sans jamais permettre de mélange sanguin direct.',
      difficulte: 2,
    },
    {
      id: 'embryo-annexes-placenta-qcm-04',
      enonce: 'Concernant les fonctions endocrines du placenta, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'L’hCG est sécrétée par le syncytiotrophoblaste.', vraie: true, justification: 'Exact, dès l’implantation.' },
        { lettre: 'B', texte: 'L’hPL favorise la mobilisation des acides gras maternels.', vraie: true, justification: 'Exact, contribuant à l’adaptation métabolique maternelle à la grossesse.' },
        { lettre: 'C', texte: 'La progestérone placentaire prend le relais de la progestérone du corps jaune.', vraie: true, justification: 'Exact, à partir d’un certain terme de la grossesse.' },
        { lettre: 'D', texte: 'Le placenta ne sécrète pas d’œstrogènes.', vraie: false, justification: 'Le placenta sécrète des œstrogènes, contribuant à la croissance utérine et mammaire.' },
        { lettre: 'E', texte: 'L’hCG est un marqueur biologique utilisé pour le diagnostic de grossesse.', vraie: true, justification: 'Exact, en raison de sa sécrétion précoce et spécifique.' },
      ],
      correction: 'Réponses exactes : A, B, C et E. Le placenta est une véritable glande endocrine complète.',
      difficulte: 2,
    },
    {
      id: 'embryo-annexes-placenta-qcm-05',
      enonce: 'Concernant la circulation fœtale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le canal veineux permet à une partie du sang ombilical d’éviter le foie.', vraie: true, justification: 'Exact, il rejoint directement la veine cave inférieure.' },
        { lettre: 'B', texte: 'Le foramen ovale fait passer le sang de l’oreillette gauche vers l’oreillette droite.', vraie: false, justification: 'C’est l’inverse : le sang passe de l’oreillette droite vers l’oreillette gauche.' },
        { lettre: 'C', texte: 'Le canal artériel relie l’artère pulmonaire à l’aorte.', vraie: true, justification: 'Exact, il permet d’éviter la circulation pulmonaire, non fonctionnelle avant la naissance.' },
        { lettre: 'D', texte: 'Ces trois shunts persistent normalement toute la vie.', vraie: false, justification: 'Ils se ferment physiologiquement à la naissance.' },
        { lettre: 'E', texte: 'Le canal artériel devient le ligament artériel après la naissance.', vraie: true, justification: 'Exact, c’est le vestige anatomique classiquement décrit.' },
      ],
      correction: 'Réponses exactes : A, C et E. Bien retenir le sens de circulation à travers le foramen ovale.',
      difficulte: 2,
    },
    {
      id: 'embryo-annexes-placenta-qcm-06',
      enonce: 'Concernant les fonctions générales du placenta, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le placenta assure les échanges gazeux entre mère et fœtus.', vraie: true, justification: 'Exact, c’est l’une de ses fonctions majeures, avant la respiration pulmonaire.' },
        { lettre: 'B', texte: 'Le placenta assure un transfert d’IgG maternelles vers le fœtus.', vraie: true, justification: 'Exact, contribuant à une immunité passive transitoire du nouveau-né.' },
        { lettre: 'C', texte: 'Le placenta n’a aucune fonction endocrine propre.', vraie: false, justification: 'Le placenta est au contraire une glande endocrine active, sécrétant hCG, hPL, progestérone et œstrogènes.' },
        { lettre: 'D', texte: 'Le placenta élimine les déchets métaboliques du fœtus vers la circulation maternelle.', vraie: true, justification: 'Exact, c’est l’un des volets de sa fonction d’échange.' },
        { lettre: 'E', texte: 'Le placenta constitue une barrière totalement imperméable à tout agent extérieur.', vraie: false, justification: 'La barrière placentaire est sélective, mais non totalement imperméable : de nombreux agents (médicaments, virus, toxiques) peuvent la traverser.' },
      ],
      correction: 'Réponses exactes : A, B et D. La barrière placentaire est sélective et non absolue.',
      difficulte: 2,
    },
  ],
};
