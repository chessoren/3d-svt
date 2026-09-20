import type { Fiche } from '../../types';

export const ficheSystemeSante: Fiche = {
  id: 'sante-publique-systeme-sante',
  ue: 'sante-publique',
  titre: 'Organisation du système de santé français',
  sousTitre: "Soins primaires, secondaires et tertiaires, hôpital, parcours de soins, agences sanitaires, démographie médicale",
  chapitre: 'Prévention et système de santé',
  ordre: 9,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'soins primaires',
    'médecine de ville',
    'hôpital public',
    'parcours de soins coordonné',
    'médecin traitant',
    'agences sanitaires',
    'démographie médicale',
  ],
  objectifs: [
    "Distinguer soins primaires, secondaires et tertiaires selon leur niveau de recours.",
    "Différencier l’offre hospitalière publique et privée en France.",
    "Décrire le principe du parcours de soins coordonné et le rôle du médecin traitant.",
    "Citer les principales agences sanitaires françaises et leurs missions.",
    "Connaître les enjeux de la démographie médicale, notamment les déserts médicaux.",
  ],
  sections: [
    {
      id: 'niveaux-recours',
      titre: 'Les niveaux de recours aux soins',
      blocs: [
        {
          type: 'definition',
          terme: 'Soins primaires (ou premier recours)',
          definition:
            "Premier niveau de contact du patient avec le système de santé, assuré principalement par les professionnels de santé de proximité (médecin généraliste, pharmacien, infirmier), pour la prise en charge des problèmes de santé courants et l’orientation dans le système de soins.",
        },
        {
          type: 'definition',
          terme: 'Soins secondaires',
          definition:
            "Soins spécialisés, souvent hospitaliers ou nécessitant un plateau technique, auxquels le patient accède généralement après orientation par les soins primaires, pour des pathologies nécessitant un avis ou une prise en charge spécialisée.",
        },
        {
          type: 'definition',
          terme: 'Soins tertiaires',
          definition:
            "Soins hautement spécialisés, requérant des compétences et des équipements rares, concentrés dans un nombre limité d’établissements de référence (centres hospitaliers universitaires, centres de référence de maladies rares).",
        },
        {
          type: 'tableau',
          titre: 'Les trois niveaux de recours',
          colonnes: ['Niveau', 'Exemples de structures', 'Type de prise en charge'],
          lignes: [
            ['Primaire', 'Médecin généraliste, pharmacie, cabinet infirmier', 'Problèmes de santé courants, prévention, orientation'],
            ['Secondaire', 'Spécialistes, centres hospitaliers', 'Prise en charge spécialisée nécessitant un plateau technique'],
            ['Tertiaire', 'Centres hospitaliers universitaires, centres de référence', 'Prise en charge hautement spécialisée, pathologies complexes ou rares'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: "L’importance des soins primaires",
          texte:
            "Les soins primaires jouent un rôle pivot dans l’organisation du système de santé : ils assurent la continuité, la coordination et la globalité de la prise en charge du patient, et constituent la porte d’entrée privilégiée du parcours de soins.",
        },
      ],
    },
    {
      id: 'offre-hospitaliere',
      titre: "L’offre hospitalière publique et privée",
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le système hospitalier français repose sur une coexistence entre établissements publics, établissements privés à but non lucratif participant au service public hospitalier, et établissements privés à but lucratif (cliniques).",
        },
        {
          type: 'tableau',
          titre: 'Principales catégories d’établissements hospitaliers',
          colonnes: ['Catégorie', 'Caractéristiques principales'],
          lignes: [
            ['Centres hospitaliers universitaires (CHU)', "Établissements publics assurant soins, enseignement et recherche, souvent sièges de soins tertiaires"],
            ['Centres hospitaliers (CH)', "Établissements publics de proximité ou de recours intermédiaire, hors mission universitaire"],
            ['Établissements privés à but non lucratif', "Participent souvent au service public hospitalier, notamment les centres de lutte contre le cancer"],
            ['Établissements privés à but lucratif (cliniques)', "Financés majoritairement par une activité de soins facturée, souvent orientés vers la chirurgie programmée"],
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Mission de service public hospitalier',
          texte:
            "La mission de service public hospitalier ne se limite pas aux établissements publics : certains établissements privés à but non lucratif, voire à but lucratif, peuvent y être associés, notamment pour assurer la permanence des soins et l’accueil de tous les patients, indépendamment de leur situation.",
        },
      ],
    },
    {
      id: 'parcours-coordonne',
      titre: 'Le parcours de soins coordonné',
      blocs: [
        {
          type: 'definition',
          terme: 'Médecin traitant',
          definition:
            "Médecin choisi par le patient, généralement un médecin généraliste, chargé de coordonner son parcours de soins, d’assurer le suivi médical global et d’orienter, si besoin, vers les médecins correspondants spécialistes.",
        },
        {
          type: 'definition',
          terme: 'Parcours de soins coordonné',
          definition:
            "Dispositif organisant le recours aux soins autour du médecin traitant, destiné à améliorer la coordination entre professionnels de santé, à limiter les actes redondants et à optimiser la prise en charge globale du patient.",
        },
        {
          type: 'liste',
          items: [
            "Consulter en dehors du parcours de soins coordonné (sans passer par le médecin traitant) peut entraîner une moindre prise en charge par l’assurance maladie obligatoire.",
            "Certaines spécialités (gynécologie, ophtalmologie, psychiatrie pour les jeunes patients, par exemple) sont classiquement accessibles en accès direct, sans passer nécessairement par le médecin traitant.",
            "Le dossier médical partagé vise à faciliter le partage d’informations entre les professionnels intervenant dans le parcours de soins d’un même patient.",
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Objectifs du parcours de soins coordonné',
          texte:
            "Ce dispositif poursuit un triple objectif : améliorer la qualité et la cohérence de la prise en charge, maîtriser les dépenses de santé en limitant les actes redondants, et renforcer le rôle du médecin traitant comme pivot du système de soins.",
        },
      ],
    },
    {
      id: 'agences-sanitaires',
      titre: 'Les principales agences sanitaires françaises',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le pilotage et la sécurité du système de santé français reposent sur un ensemble d’agences et d’institutions nationales, aux missions complémentaires.",
        },
        {
          type: 'tableau',
          titre: 'Principales agences et institutions sanitaires',
          colonnes: ['Institution', 'Mission principale'],
          lignes: [
            ['Haute Autorité de santé (HAS)', "Évaluation des produits, actes et pratiques de santé, élaboration de recommandations de bonnes pratiques"],
            ['Santé publique France', "Surveillance épidémiologique, veille sanitaire, prévention et promotion de la santé"],
            ["Agence nationale de sécurité du médicament et des produits de santé (ANSM)", "Évaluation, autorisation et surveillance de la sécurité des médicaments et produits de santé"],
            ["Agences régionales de santé (ARS)", "Pilotage régional du système de santé, organisation de l’offre de soins territoriale"],
            ["Institut national du cancer (INCa)", "Coordination de la lutte contre le cancer, y compris les programmes de dépistage organisé"],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Un pilotage à plusieurs échelles',
          texte:
            "Le système de santé français articule un pilotage national (ministère, agences nationales) et un pilotage régional, assuré notamment par les Agences régionales de santé, chargées de décliner les priorités nationales selon les besoins spécifiques de chaque territoire.",
        },
      ],
    },
    {
      id: 'demographie-medicale',
      titre: 'Démographie médicale',
      blocs: [
        {
          type: 'definition',
          terme: 'Désert médical',
          definition:
            "Territoire caractérisé par une offre de soins insuffisante au regard des besoins de la population, se traduisant par des difficultés d’accès à un médecin, en particulier un médecin généraliste, dans un délai et une distance raisonnables.",
        },
        {
          type: 'liste',
          items: [
            "La répartition des médecins sur le territoire est marquée par des disparités importantes entre zones urbaines et zones rurales, ou entre certaines régions.",
            "Le vieillissement de la population médicale et l’allongement de la durée des études contribuent aux tensions démographiques observées dans certaines spécialités et certains territoires.",
            "Diverses mesures d’incitation à l’installation dans les zones sous-dotées ont été mises en place, sans se substituer à une politique globale de répartition de l’offre de soins.",
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Retenir la méthode plutôt qu’un chiffre',
          texte:
            "Les effectifs et la répartition des professionnels de santé évoluent chaque année : il est préférable de retenir les mécanismes en jeu (vieillissement de la population médicale, disparités territoriales, durée des études) plutôt que des chiffres précis et datés, rapidement obsolètes.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Ne pas confondre pénurie globale et mauvaise répartition',
          texte:
            "Les difficultés d’accès aux soins dans certains territoires résultent autant d’une mauvaise répartition géographique de l’offre de soins que d’une pénurie globale de professionnels de santé à l’échelle nationale : les deux phénomènes appellent des réponses différentes.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les soins primaires constituent la porte d’entrée du système de santé, assurés en premier lieu par les professionnels de proximité.",
    "Les soins tertiaires sont hautement spécialisés et concentrés dans un nombre limité d’établissements de référence.",
    "Le système hospitalier français associe établissements publics, privés à but non lucratif et privés à but lucratif.",
    "Le médecin traitant coordonne le parcours de soins et oriente, si besoin, vers les médecins correspondants spécialistes.",
    "La Haute Autorité de santé élabore des recommandations de bonnes pratiques ; Santé publique France assure la surveillance épidémiologique.",
    "Les Agences régionales de santé pilotent l’organisation de l’offre de soins à l’échelle territoriale.",
    "Un désert médical se caractérise par une offre de soins insuffisante au regard des besoins de la population.",
    "Les difficultés d’accès aux soins résultent à la fois de disparités territoriales et de facteurs démographiques globaux.",
  ],
  erreursFrequentes: [
    "Confondre soins secondaires et soins tertiaires, qui correspondent à des niveaux de spécialisation différents.",
    "Croire que le service public hospitalier est assuré exclusivement par des établissements publics.",
    "Confondre les missions de la Haute Autorité de santé et celles de Santé publique France.",
    "Oublier que certaines spécialités sont accessibles en accès direct, sans passer par le médecin traitant.",
    "Réduire les difficultés d’accès aux soins à une seule cause, alors qu’elles résultent à la fois de la répartition géographique et de la démographie médicale globale.",
    "Citer des effectifs précis et datés de professionnels de santé comme s’ils étaient stables dans le temps.",
  ],
  mnemotechniques: [
    {
      moyen: 'Primaire, Secondaire, Tertiaire = Proximité, Spécialisé, Très spécialisé',
      explication: "Les trois niveaux de recours s’organisent selon un degré croissant de spécialisation et de rareté des compétences mobilisées.",
    },
    {
      moyen: 'HAS évalue, Santé publique France surveille',
      explication: "La Haute Autorité de santé évalue les pratiques et produits de santé ; Santé publique France assure la surveillance épidémiologique et la prévention.",
    },
    {
      moyen: 'Médecin traitant = chef d’orchestre du parcours',
      explication: "Le médecin traitant coordonne l’ensemble du parcours de soins du patient, en lien avec les médecins correspondants.",
    },
  ],
  sources: [
    "Code de la santé publique, dispositions relatives à l’organisation des soins",
    'Collège universitaire des enseignants de santé publique (CUESP), Référentiel de santé publique',
    "Direction de la recherche, des études, de l’évaluation et des statistiques (DREES), portraits du système de santé",
    'Haute Autorité de santé, présentation des missions institutionnelles',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'sante-publique-systeme-sante-fc-01',
      recto: 'Que désignent les soins primaires ?',
      verso: "Le premier niveau de contact du patient avec le système de santé, assuré par les professionnels de proximité.",
      type: 'definition',
      tags: ['soins primaires'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-02',
      recto: 'Que désignent les soins tertiaires ?',
      verso: "Des soins hautement spécialisés, concentrés dans un nombre limité d’établissements de référence.",
      type: 'definition',
      tags: ['soins tertiaires'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-03',
      recto: 'Quel type d’établissement combine soins, enseignement et recherche ?',
      verso: 'Le centre hospitalier universitaire (CHU).',
      type: 'definition',
      tags: ['hôpital'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-04',
      recto: 'Le service public hospitalier est-il assuré uniquement par des établissements publics ?',
      verso: "Non : certains établissements privés à but non lucratif y participent également.",
      type: 'mecanisme',
      tags: ['hôpital'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-05',
      recto: 'Quel est le rôle du médecin traitant ?',
      verso: "Coordonner le parcours de soins du patient, assurer le suivi médical global et orienter vers les spécialistes si besoin.",
      type: 'definition',
      tags: ['médecin traitant'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-06',
      recto: 'Que vise le parcours de soins coordonné ?',
      verso: "Améliorer la coordination des soins, limiter les actes redondants et optimiser la prise en charge globale du patient.",
      type: 'definition',
      tags: ['parcours de soins'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-07',
      recto: 'Quelle agence élabore les recommandations de bonnes pratiques en France ?',
      verso: 'La Haute Autorité de santé (HAS).',
      type: 'definition',
      tags: ['agences sanitaires'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-08',
      recto: 'Quelle agence assure la surveillance épidémiologique en France ?',
      verso: 'Santé publique France.',
      type: 'definition',
      tags: ['agences sanitaires'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-09',
      recto: 'Quelle agence pilote l’organisation régionale du système de santé ?',
      verso: "L’Agence régionale de santé (ARS).",
      type: 'definition',
      tags: ['agences sanitaires'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-10',
      recto: 'Quelle agence évalue et surveille la sécurité des médicaments ?',
      verso: "L’Agence nationale de sécurité du médicament et des produits de santé (ANSM).",
      type: 'definition',
      tags: ['agences sanitaires'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-11',
      recto: "Qu’est-ce qu’un désert médical ?",
      verso: "Un territoire où l’offre de soins est insuffisante au regard des besoins de la population, notamment pour l’accès à un médecin généraliste.",
      type: 'definition',
      tags: ['démographie médicale'],
    },
    {
      id: 'sante-publique-systeme-sante-fc-12',
      recto: 'Les difficultés d’accès aux soins résultent-elles uniquement d’une pénurie globale de médecins ?',
      verso: "Non : elles résultent aussi d’une répartition géographique inégale de l’offre de soins sur le territoire.",
      type: 'mecanisme',
      tags: ['démographie médicale'],
    },
  ],
  qcm: [
    {
      id: 'sante-publique-systeme-sante-qcm-01',
      enonce: 'Concernant les niveaux de recours aux soins, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Les soins primaires constituent la porte d’entrée privilégiée du système de santé.', vraie: true, justification: 'Exact, c’est leur rôle pivot.' },
        { lettre: 'B', texte: 'Les soins tertiaires sont assurés majoritairement par les médecins généralistes de ville.', vraie: false, justification: "Faux : ils sont concentrés dans un nombre limité d’établissements de référence hautement spécialisés." },
        { lettre: 'C', texte: 'Les soins secondaires nécessitent souvent un plateau technique spécialisé.', vraie: true, justification: 'Exact, c’est ce qui les distingue des soins primaires.' },
        { lettre: 'D', texte: 'Le patient accède toujours directement aux soins tertiaires sans passer par les autres niveaux.', vraie: false, justification: "Faux : il y accède le plus souvent après orientation par les soins primaires puis secondaires." },
        { lettre: 'E', texte: 'La pharmacie de proximité relève des soins primaires.', vraie: true, justification: "Exact, elle fait partie des professionnels de santé de premier recours." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'sante-publique-systeme-sante-qcm-02',
      enonce: "Concernant l’offre hospitalière française, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: 'Les centres hospitaliers universitaires assurent à la fois soins, enseignement et recherche.', vraie: true, justification: 'Exact, c’est leur triple mission caractéristique.' },
        { lettre: 'B', texte: "Seuls les établissements publics peuvent participer au service public hospitalier.", vraie: false, justification: "Faux : certains établissements privés à but non lucratif y participent également." },
        { lettre: 'C', texte: 'Les cliniques privées à but lucratif sont majoritairement financées par une activité de soins facturée.', vraie: true, justification: 'Exact, c’est une caractéristique de leur modèle économique.' },
        { lettre: 'D', texte: 'Les centres de lutte contre le cancer sont des établissements publics.', vraie: false, justification: "Faux : ce sont classiquement des établissements privés à but non lucratif participant au service public." },
        { lettre: 'E', texte: "Les centres hospitaliers non universitaires assurent uniquement une mission de recherche.", vraie: false, justification: "Faux : ils assurent des soins de proximité ou de recours intermédiaire, sans mission universitaire systématique." },
      ],
      correction: 'Réponses exactes : A et C.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-systeme-sante-qcm-03',
      enonce: 'Concernant le parcours de soins coordonné, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Il s’organise autour du médecin traitant.', vraie: true, justification: "Exact, c’est le principe même du dispositif." },
        { lettre: 'B', texte: 'Toutes les spécialités médicales exigent obligatoirement un passage par le médecin traitant.', vraie: false, justification: "Faux : certaines spécialités sont classiquement en accès direct, comme la gynécologie ou l’ophtalmologie." },
        { lettre: 'C', texte: 'Il vise notamment à limiter les actes redondants.', vraie: true, justification: "Exact, c’est l’un de ses objectifs, avec la maîtrise des dépenses de santé." },
        { lettre: 'D', texte: 'Consulter hors parcours de soins coordonné n’a jamais de conséquence sur le remboursement.', vraie: false, justification: "Faux : cela peut entraîner une moindre prise en charge par l’assurance maladie obligatoire." },
        { lettre: 'E', texte: 'Le dossier médical partagé vise à faciliter le partage d’informations entre professionnels de santé.', vraie: true, justification: "Exact, c’est sa vocation première." },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-systeme-sante-qcm-04',
      enonce: 'Concernant les agences sanitaires françaises, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La Haute Autorité de santé élabore des recommandations de bonnes pratiques.', vraie: true, justification: 'Exact, c’est l’une de ses missions centrales.' },
        { lettre: 'B', texte: 'Santé publique France est chargée de la surveillance épidémiologique et de la veille sanitaire.', vraie: true, justification: 'Exact, c’est sa mission principale.' },
        { lettre: 'C', texte: "L’ANSM évalue et autorise la mise sur le marché des médicaments.", vraie: true, justification: 'Exact, cela relève de ses missions de sécurité sanitaire des produits de santé.' },
        { lettre: 'D', texte: "Les Agences régionales de santé assurent un pilotage exclusivement national du système de santé.", vraie: false, justification: "Faux : elles assurent un pilotage régional, en déclinaison des priorités nationales." },
        { lettre: 'E', texte: "L’Institut national du cancer coordonne notamment les programmes de dépistage organisé du cancer.", vraie: true, justification: "Exact, c’est l’une de ses missions." },
      ],
      correction: 'Réponses exactes : A, B, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-systeme-sante-qcm-05',
      enonce: 'Concernant la démographie médicale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Un désert médical se définit uniquement par une pénurie nationale absolue de médecins.', vraie: false, justification: "Faux : il traduit une insuffisance de l’offre de soins sur un territoire donné, en lien avec sa répartition, pas seulement l’effectif national global." },
        { lettre: 'B', texte: 'Les disparités territoriales de l’offre de soins concernent notamment les zones rurales.', vraie: true, justification: "Exact, ces zones sont souvent davantage concernées par les difficultés d’accès aux soins." },
        { lettre: 'C', texte: "Des mesures incitatives ont été mises en place pour favoriser l’installation en zone sous-dotée.", vraie: true, justification: 'Exact, plusieurs dispositifs existent en ce sens.' },
        { lettre: 'D', texte: 'Le vieillissement de la population médicale est sans lien avec les tensions démographiques observées.', vraie: false, justification: "Faux : il contribue au contraire à ces tensions, notamment lors des départs à la retraite non compensés." },
        { lettre: 'E', texte: "La durée des études médicales peut contribuer aux tensions démographiques dans certaines spécialités.", vraie: true, justification: "Exact, un allongement de la formation retarde l’entrée en exercice des nouveaux praticiens." },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'sante-publique-systeme-sante-qcm-06',
      enonce: "Concernant l’organisation générale du système de santé français, quelles propositions sont exactes ?",
      propositions: [
        { lettre: 'A', texte: 'Le système hospitalier français repose sur une coexistence public/privé.', vraie: true, justification: 'Exact, avec des établissements publics, privés à but non lucratif et privés à but lucratif.' },
        { lettre: 'B', texte: "Les soins primaires n’ont qu’un rôle marginal dans l’organisation du système de santé.", vraie: false, justification: "Faux : ils jouent au contraire un rôle pivot, assurant la continuité et la coordination des soins." },
        { lettre: 'C', texte: "Le pilotage du système de santé français est exclusivement centralisé au niveau national.", vraie: false, justification: "Faux : il articule un niveau national et un niveau régional, notamment via les Agences régionales de santé." },
        { lettre: 'D', texte: "Le médecin traitant peut être un médecin généraliste.", vraie: true, justification: "Exact, c’est le cas le plus fréquent, même si ce n’est pas une obligation stricte." },
        { lettre: 'E', texte: "Les difficultés d’accès aux soins sont un enjeu exclusivement français, sans équivalent dans d’autres pays.", vraie: false, justification: "Faux : les tensions démographiques médicales et les disparités territoriales concernent de nombreux systèmes de santé." },
      ],
      correction: 'Réponses exactes : A et D.',
      difficulte: 2,
    },
  ],
};
