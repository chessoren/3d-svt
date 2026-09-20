import type { Fiche } from '../../types';

export const ficheConceptsSantePublique: Fiche = {
  id: 'sante-publique-concepts-sante-publique',
  ue: 'sante-publique',
  titre: 'Concepts de santé publique',
  sousTitre: "Définition de la santé, déterminants, besoins et offre de soins, notion de population",
  chapitre: 'Concepts et indicateurs',
  ordre: 1,
  duree: 22,
  difficulte: 1,
  motsCles: [
    'santé',
    'santé publique',
    'déterminants de la santé',
    'besoin de santé',
    'demande de soins',
    'offre de soins',
    'population',
    'inégalités sociales de santé',
  ],
  objectifs: [
    "Connaître la définition de la santé selon l’OMS et ses limites.",
    "Distinguer l’approche individuelle de l’approche collective en santé.",
    "Décrire les différentes catégories de déterminants de la santé.",
    "Distinguer besoin, demande et offre de soins et connaître la typologie des besoins de Bradshaw.",
    "Expliquer la notion de population en santé publique et en épidémiologie.",
  ],
  sections: [
    {
      id: 'definitions',
      titre: 'Définir la santé et la santé publique',
      blocs: [
        {
          type: 'definition',
          terme: 'Santé (OMS, 1946)',
          definition:
            "Selon la Constitution de l’Organisation mondiale de la santé, la santé est « un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d’infirmité ».",
        },
        {
          type: 'liste',
          items: [
            "Cette définition rompt avec une conception purement négative de la santé (absence de maladie) pour introduire trois dimensions : physique, mentale et sociale.",
            "Elle est souvent critiquée pour son caractère utopique : le « complet bien-être » n’est jamais pleinement atteint et n’est pas mesurable.",
            "Elle est également critiquée pour son caractère statique, alors que la santé est aujourd’hui conçue comme un processus dynamique d’adaptation.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: "La Charte d’Ottawa (1986) : une définition plus opérationnelle",
          texte:
            "La Charte d’Ottawa pour la promotion de la santé définit la santé comme « une ressource de la vie quotidienne, et non le but de la vie ». Cette conception, plus dynamique, fait de la santé un moyen permettant à l’individu de réaliser ses ambitions, de satisfaire ses besoins et d’évoluer avec son milieu, plutôt qu’un état final à atteindre.",
        },
        {
          type: 'definition',
          terme: 'Santé publique',
          definition:
            "Selon la définition classique de Winslow (1920), reprise par l’OMS, la santé publique est « la science et l’art de prévenir les maladies, de prolonger la vie et de promouvoir la santé physique et mentale, par les efforts organisés de la communauté ». Elle vise ainsi une population et non un individu isolé.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre médecine préventive et santé publique',
          texte:
            "La médecine préventive s’adresse à un individu (par exemple un vaccin proposé à un patient donné). La santé publique mobilise des efforts organisés et collectifs, à l’échelle d’une population, et relève d’une démarche pluridisciplinaire associant épidémiologie, sciences sociales, gestion et politiques de santé.",
        },
      ],
    },
    {
      id: 'individuel-collectif',
      titre: 'Santé publique et santé individuelle',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La médecine clinique et la santé publique sont deux approches complémentaires et non concurrentes. La première s’exerce dans le cadre du colloque singulier entre un soignant et un patient ; la seconde raisonne à l’échelle d’une population, à partir d’indicateurs agrégés, pour orienter des politiques et des programmes.",
        },
        {
          type: 'comparaison',
          titre: 'Deux logiques complémentaires',
          gauche: {
            titre: 'Approche clinique individuelle',
            points: [
              "Unité d’analyse : le patient",
              'Objectif : diagnostiquer et traiter un cas',
              'Outil : examen clinique, colloque singulier',
              'Résultat : une décision thérapeutique individuelle',
            ],
          },
          droite: {
            titre: 'Approche de santé publique',
            points: [
              'Unité d’analyse : la population',
              "Objectif : décrire, prévenir, améliorer l’état de santé collectif",
              'Outil : indicateurs, enquêtes épidémiologiques',
              'Résultat : une politique ou un programme de santé',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exemple illustratif',
          texte:
            "Face à un patient hypertendu, le clinicien adapte un traitement antihypertenseur à son cas. Face à la fréquence de l’hypertension artérielle dans la population, la santé publique évalue la prévalence de la maladie, ses déterminants (sel, sédentarité, surpoids) et l’impact d’une politique de dépistage ou d’une campagne de prévention nutritionnelle.",
        },
        {
          type: 'liste',
          items: [
            "La santé publique s’appuie sur les données produites au niveau individuel (dossiers médicaux, certificats de décès, déclarations obligatoires) pour construire des indicateurs collectifs.",
            "Réciproquement, les recommandations de santé publique (dépistages, vaccinations) orientent la pratique clinique individuelle.",
          ],
        },
      ],
    },
    {
      id: 'determinants',
      titre: 'Les déterminants de la santé',
      blocs: [
        {
          type: 'definition',
          terme: 'Déterminant de la santé',
          definition:
            "Facteur qui influence l’état de santé d’un individu ou d’une population, de manière favorable ou défavorable. Les déterminants ne se limitent pas à l’offre de soins : ils incluent des facteurs biologiques, comportementaux, environnementaux et socio-économiques.",
        },
        {
          type: 'paragraphe',
          texte:
            "Le modèle le plus classique est celui de Dahlgren et Whitehead (1991), représenté par des couches concentriques autour de l’individu : les caractéristiques individuelles non modifiables au centre, puis les comportements et modes de vie, les réseaux sociaux et communautaires, les conditions de vie et de travail, et enfin les conditions socio-économiques, culturelles et environnementales générales en périphérie.",
        },
        {
          type: 'tableau',
          titre: 'Catégories de déterminants de la santé',
          colonnes: ['Catégorie', 'Exemples'],
          lignes: [
            ['Facteurs individuels non modifiables', 'Âge, sexe, patrimoine génétique'],
            ['Facteurs comportementaux', 'Tabagisme, alimentation, activité physique, consommation d’alcool'],
            ['Réseaux sociaux et communautaires', 'Soutien familial, isolement social, lien social'],
            ['Conditions de vie et de travail', 'Logement, emploi, exposition professionnelle, éducation'],
            ['Facteurs socio-économiques, culturels et environnementaux', 'Niveau de revenu, politiques publiques, environnement physique, accès aux soins'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Les déterminants sociaux et le gradient social de santé',
          texte:
            "Les travaux de la Commission des déterminants sociaux de la santé de l’OMS ont mis en évidence un gradient social de santé : plus la position sociale est basse, plus l’état de santé tend à être dégradé, et ce de façon continue tout au long de l’échelle sociale, sans seuil de pauvreté isolé. Ce constat fonde les politiques de réduction des inégalités sociales de santé.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'L’offre de soins n’est qu’un déterminant parmi d’autres',
          texte:
            "Une erreur fréquente consiste à réduire la santé d’une population à la seule qualité de son système de soins. Les études internationales montrent que les déterminants comportementaux, sociaux et environnementaux pèsent au moins autant, sinon davantage, que l’offre de soins sur l’état de santé global d’une population.",
        },
      ],
    },
    {
      id: 'besoins-demande-offre',
      titre: 'Besoins, demande et offre de soins',
      blocs: [
        {
          type: 'definition',
          terme: 'Besoin de santé',
          definition:
            "Écart entre l’état de santé observé d’un individu ou d’une population et un état de santé jugé souhaitable ou optimal. Le besoin de santé ne se traduit pas nécessairement par une demande de soins.",
        },
        {
          type: 'tableau',
          titre: 'Typologie des besoins selon Bradshaw',
          colonnes: ['Type de besoin', 'Définition'],
          lignes: [
            ['Besoin normatif', 'Défini par un expert ou un professionnel selon une norme établie (par exemple un seuil biologique)'],
            ['Besoin ressenti', 'Perçu subjectivement par l’individu lui-même, sans être nécessairement exprimé'],
            ['Besoin exprimé (ou demande)', 'Besoin ressenti qui se traduit par une démarche concrète, comme une consultation'],
            ['Besoin comparatif', 'Déduit par comparaison entre groupes ou territoires ayant des caractéristiques similaires mais des niveaux de services différents'],
          ],
        },
        {
          type: 'paragraphe',
          texte:
            "La demande de soins ne recouvre donc qu’une partie des besoins de santé : c’est le phénomène de « l’iceberg sanitaire ». Une partie importante des besoins reste invisible car non exprimée, faute d’accès aux soins, de connaissance de la maladie ou de recours au système de santé.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Piège classique : besoin et demande ne se superposent pas',
          texte:
            "Un besoin de santé peut exister sans demande (dépistage non réalisé, non-recours aux droits) et, inversement, une demande de soins peut ne correspondre à aucun besoin médicalement objectivé (demande de réassurance, d’examen complémentaire non indiqué).",
        },
        {
          type: 'definition',
          terme: 'Offre de soins',
          definition:
            "Ensemble des ressources humaines, matérielles et organisationnelles mobilisables pour répondre aux besoins et à la demande de soins d’une population : professionnels de santé, établissements, équipements et dispositifs de prise en charge.",
        },
      ],
    },
    {
      id: 'population',
      titre: 'La notion de population',
      blocs: [
        {
          type: 'definition',
          terme: 'Population',
          definition:
            "Ensemble d’individus partageant une ou plusieurs caractéristiques communes (géographiques, démographiques, cliniques) et constituant l’unité d’observation de la santé publique et de l’épidémiologie.",
        },
        {
          type: 'liste',
          items: [
            "La population cible est celle à laquelle les résultats d’une étude ou d’une action de santé publique sont destinés à être appliqués.",
            "La population source est celle à partir de laquelle sont sélectionnés les sujets effectivement étudiés (par exemple les patients d’une région).",
            "L’échantillon est le sous-ensemble de la population source effectivement observé ; il doit être représentatif pour permettre l’extrapolation des résultats.",
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Pourquoi raisonner en population ?',
          texte:
            "Raisonner sur une population plutôt que sur des cas isolés permet de quantifier un phénomène de santé (fréquence, répartition), de comparer des groupes entre eux ou dans le temps, et d’évaluer l’impact d’une action de santé publique à l’échelle collective.",
        },
      ],
    },
  ],
  pointsCles: [
    "La définition OMS de 1946 fait de la santé un état de complet bien-être physique, mental et social, non réductible à l’absence de maladie.",
    "La Charte d’Ottawa (1986) présente la santé comme une ressource de la vie quotidienne, dans une logique dynamique.",
    "La santé publique, selon Winslow, mobilise des efforts organisés de la communauté pour prévenir les maladies et promouvoir la santé à l’échelle collective.",
    "Le modèle de Dahlgren et Whitehead organise les déterminants de la santé en couches concentriques, de l’individu aux facteurs socio-économiques généraux.",
    "L’offre de soins n’est qu’un déterminant parmi d’autres : les facteurs comportementaux, sociaux et environnementaux pèsent tout autant sur l’état de santé.",
    "La typologie de Bradshaw distingue besoin normatif, ressenti, exprimé et comparatif.",
    "Besoin de santé et demande de soins ne se recouvrent pas totalement : c’est le phénomène de l’iceberg sanitaire.",
    "La population cible, la population source et l’échantillon sont trois notions distinctes à ne pas confondre.",
  ],
  erreursFrequentes: [
    "Considérer la définition OMS de la santé comme opérationnelle et mesurable en pratique, alors qu’elle est surtout utopique et théorique.",
    "Confondre médecine préventive individuelle et santé publique, qui relève d’une action organisée à l’échelle collective.",
    "Réduire les déterminants de la santé au seul système de soins, en négligeant les facteurs comportementaux et socio-économiques.",
    "Assimiler besoin de santé et demande de soins, alors que ces deux notions ne se superposent que partiellement.",
    "Confondre population source et population cible dans la description d’une étude épidémiologique.",
    "Oublier que le besoin ressenti n’est pas toujours exprimé, ce qui explique la sous-estimation de certains besoins de santé.",
  ],
  mnemotechniques: [
    {
      moyen: 'Les 4 B de Bradshaw',
      explication: 'Besoin normatif, ressenti, exprimé, comparatif : quatre façons différentes de définir un besoin de santé.',
    },
    {
      moyen: 'L’iceberg sanitaire',
      explication: 'Seule la pointe émergée (la demande exprimée) est visible ; la majorité des besoins reste immergée et non exprimée.',
    },
    {
      moyen: 'Cercles concentriques de Dahlgren et Whitehead',
      explication: "De l’intérieur vers l’extérieur : individu, comportements, réseaux sociaux, conditions de vie et de travail, contexte socio-économique général.",
    },
  ],
  sources: [
    "Organisation mondiale de la santé, Constitution de l’OMS, 1946",
    "Charte d’Ottawa pour la promotion de la santé, OMS, 1986",
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    "Leclerc, Fassin, Grandjean, Kaminski, Lang (dir.), Les inégalités sociales de santé, La Découverte",
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-concepts-sante-publique-fc-01',
      recto: "Quelle est la définition de la santé selon l’OMS (1946) ?",
      verso: "Un état de complet bien-être physique, mental et social, qui ne consiste pas seulement en une absence de maladie ou d’infirmité.",
      type: 'definition',
      tags: ['définition', 'OMS'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-02',
      recto: 'Quelle critique majeure adresse-t-on à la définition OMS de la santé ?',
      verso: "Elle est utopique et statique : le « complet bien-être » n’est jamais pleinement atteignable ni mesurable.",
      type: 'definition',
      tags: ['définition', 'OMS'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-03',
      recto: 'Comment la Charte d’Ottawa définit-elle la santé ?',
      verso: "Comme une ressource de la vie quotidienne, et non le but de la vie : une conception dynamique et instrumentale.",
      type: 'definition',
      tags: ['Ottawa', 'promotion de la santé'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-04',
      recto: 'Donner la définition de la santé publique selon Winslow.',
      verso: "La science et l’art de prévenir les maladies, de prolonger la vie et de promouvoir la santé, par les efforts organisés de la communauté.",
      type: 'definition',
      tags: ['santé publique', 'Winslow'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-05',
      recto: 'Citer les cinq couches du modèle de Dahlgren et Whitehead.',
      verso: 'Facteurs individuels non modifiables, comportements et modes de vie, réseaux sociaux et communautaires, conditions de vie et de travail, contexte socio-économique et culturel général.',
      type: 'classification',
      tags: ['déterminants'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-06',
      recto: 'Qu’est-ce qu’un déterminant de la santé ?',
      verso: "Un facteur, favorable ou défavorable, qui influence l’état de santé d’un individu ou d’une population.",
      type: 'definition',
      tags: ['déterminants'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-07',
      recto: 'Qu’appelle-t-on le gradient social de santé ?',
      verso: "Une dégradation continue de l’état de santé à mesure que la position sociale diminue, sans seuil isolé de pauvreté.",
      type: 'definition',
      tags: ['inégalités sociales'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-08',
      recto: 'Définir le besoin de santé.',
      verso: "L’écart entre l’état de santé observé et un état de santé jugé souhaitable ou optimal.",
      type: 'definition',
      tags: ['besoin de santé'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-09',
      recto: 'Citer les quatre types de besoins selon Bradshaw.',
      verso: 'Besoin normatif, besoin ressenti, besoin exprimé, besoin comparatif.',
      type: 'classification',
      tags: ['Bradshaw', 'besoins'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-10',
      recto: 'Que désigne l’image de « l’iceberg sanitaire » ?',
      verso: "Le fait que seule une petite partie des besoins de santé se traduit en demande exprimée ; la majorité reste invisible.",
      type: 'definition',
      tags: ['besoin', 'demande'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-11',
      recto: 'Différencier population source et population cible.',
      verso: "La population source est celle dont sont issus les sujets étudiés ; la population cible est celle à laquelle les résultats sont destinés à s’appliquer.",
      type: 'definition',
      tags: ['population'],
    },
    {
      id: 'sante-publique-concepts-sante-publique-fc-12',
      recto: "Qu’est-ce que l’offre de soins ?",
      verso: "L’ensemble des ressources humaines, matérielles et organisationnelles mobilisables pour répondre aux besoins et à la demande de soins.",
      type: 'definition',
      tags: ['offre de soins'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-concepts-sante-publique-qcm-01',
      enonce: "Concernant la définition de la santé selon l’OMS, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: "Elle date de la Constitution de l’OMS de 1946.", vraie: true, justification: "Exact : c’est le texte fondateur de cette définition." },
        { lettre: 'B', texte: 'Elle réduit la santé à une absence de maladie.', vraie: false, justification: "Faux : elle précise explicitement que la santé ne consiste pas seulement en une absence de maladie ou d’infirmité." },
        { lettre: 'C', texte: 'Elle intègre une dimension sociale.', vraie: true, justification: "Exact : bien-être physique, mental et social sont les trois dimensions citées." },
        { lettre: 'D', texte: 'Elle est unanimement considérée comme opérationnelle et mesurable.', vraie: false, justification: "Faux : elle est fréquemment critiquée pour son caractère utopique et non mesurable." },
        { lettre: 'E', texte: "Elle a été remplacée et abrogée par la Charte d’Ottawa en 1986.", vraie: false, justification: "Faux : la Charte d’Ottawa complète et enrichit la définition de l’OMS, elle ne l’abroge pas." },
      ],
      correction: 'Réponses exactes : A et C. La définition OMS reste une référence historique malgré ses limites.',
      difficulte: 1,
    },
    {
      id: 'sante-publique-concepts-sante-publique-qcm-02',
      enonce: 'Concernant la santé publique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "Elle s’exerce à l’échelle d’une population.", vraie: true, justification: 'Exact, par opposition à la médecine clinique individuelle.' },
        { lettre: 'B', texte: 'Elle correspond au colloque singulier entre un soignant et un patient.', vraie: false, justification: 'Faux : le colloque singulier caractérise la médecine clinique individuelle, non la santé publique.' },
        { lettre: 'C', texte: 'Elle repose sur des efforts organisés de la communauté selon Winslow.', vraie: true, justification: 'Exact, cette expression est centrale dans la définition de Winslow.' },
        { lettre: 'D', texte: 'Elle est indépendante de la médecine clinique.', vraie: false, justification: 'Faux : les deux approches sont complémentaires, la santé publique s’appuyant notamment sur des données cliniques agrégées.' },
        { lettre: 'E', texte: 'Elle vise notamment à prolonger la vie et à promouvoir la santé.', vraie: true, justification: 'Exact, ce sont deux des trois objectifs cités dans la définition de Winslow.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'sante-publique-concepts-sante-publique-qcm-03',
      enonce: 'Concernant les déterminants de la santé, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "L’offre de soins est le seul déterminant qui explique l’état de santé d’une population.", vraie: false, justification: "Faux : les facteurs comportementaux, sociaux et environnementaux pèsent au moins autant." },
        { lettre: 'B', texte: "L’âge et le patrimoine génétique sont des déterminants individuels non modifiables.", vraie: true, justification: 'Exact, ils constituent le cœur du modèle de Dahlgren et Whitehead.' },
        { lettre: 'C', texte: 'Le tabagisme est un déterminant comportemental.', vraie: true, justification: 'Exact, il relève des comportements et modes de vie.' },
        { lettre: 'D', texte: 'Le gradient social de santé ne concerne que les populations les plus pauvres.', vraie: false, justification: "Faux : il s’agit d’un gradient continu tout au long de l’échelle sociale, pas d’un simple effet de seuil de pauvreté." },
        { lettre: 'E', texte: 'Le logement et l’emploi relèvent des conditions de vie et de travail.', vraie: true, justification: 'Exact, ce sont des exemples typiques de cette catégorie de déterminants.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-concepts-sante-publique-qcm-04',
      enonce: 'Concernant la typologie des besoins de Bradshaw, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le besoin normatif est défini par un expert selon une norme établie.', vraie: true, justification: 'Exact, il repose sur un jugement professionnel ou une norme objective.' },
        { lettre: 'B', texte: 'Le besoin ressenti est toujours exprimé sous forme de demande de soins.', vraie: false, justification: "Faux : un besoin ressenti peut rester silencieux, sans démarche concrète associée." },
        { lettre: 'C', texte: 'Le besoin comparatif se déduit en comparant des groupes similaires ayant des niveaux de service différents.', vraie: true, justification: 'Exact, il repose sur une logique de comparaison entre populations ou territoires.' },
        { lettre: 'D', texte: 'Le besoin exprimé correspond à la demande effective de soins.', vraie: true, justification: "Exact : c’est la traduction concrète, par une démarche, d’un besoin ressenti." },
        { lettre: 'E', texte: 'La typologie de Bradshaw ne comporte que deux catégories de besoins.', vraie: false, justification: 'Faux, elle en comporte quatre : normatif, ressenti, exprimé et comparatif.' },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-concepts-sante-publique-qcm-05',
      enonce: 'Concernant les notions de besoin, demande et offre de soins, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Le besoin de santé et la demande de soins se superposent toujours parfaitement.', vraie: false, justification: "Faux : c’est justement l’inverse, phénomène décrit par l’image de l’iceberg sanitaire." },
        { lettre: 'B', texte: 'Une demande de soins peut exister sans besoin médicalement objectivé.', vraie: true, justification: 'Exact, par exemple une demande de réassurance ou d’examen non indiqué.' },
        { lettre: 'C', texte: 'Un besoin de santé peut exister sans jamais donner lieu à une demande.', vraie: true, justification: "Exact, notamment en cas de non-recours aux soins ou de méconnaissance de la maladie." },
        { lettre: 'D', texte: "L’offre de soins désigne uniquement les professionnels de santé.", vraie: false, justification: "Faux : elle inclut aussi les établissements, équipements et dispositifs organisationnels." },
        { lettre: 'E', texte: "Le non-recours aux soins illustre l’écart entre besoin et demande.", vraie: true, justification: "Exact : un besoin non exprimé, faute de recours, ne se traduit pas en demande." },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-concepts-sante-publique-qcm-06',
      enonce: 'Concernant la notion de population en santé publique, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: "L’échantillon doit être représentatif de la population source pour permettre l’extrapolation des résultats.", vraie: true, justification: "Exact, c’est une condition de validité externe de toute étude." },
        { lettre: 'B', texte: 'La population cible et la population source désignent toujours exactement le même ensemble d’individus.', vraie: false, justification: "Faux : la population source est celle dont sont issus les sujets étudiés, la population cible celle à laquelle on souhaite appliquer les résultats." },
        { lettre: 'C', texte: 'Raisonner en population permet de comparer des groupes entre eux ou dans le temps.', vraie: true, justification: "Exact, c’est un des intérêts majeurs de l’approche populationnelle." },
        { lettre: 'D', texte: "La notion de population n’a d’intérêt qu’en épidémiologie et pas en santé publique.", vraie: false, justification: "Faux : elle est centrale dans les deux disciplines, étroitement liées." },
        { lettre: 'E', texte: "L’approche populationnelle permet d’évaluer l’impact collectif d’une action de santé publique.", vraie: true, justification: "Exact, c’est l’un des objectifs essentiels de cette approche." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
  ],
};
