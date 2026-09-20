import type { Fiche } from '../../types';

export const ficheVoiesAdministration: Fiche = {
  id: 'ue6-voies-administration',
  ue: 'ue6',
  titre: 'Les voies d’administration',
  sousTitre: 'Voie orale, sublinguale, rectale, parentérales, transdermique et inhalée : avantages, limites et biodisponibilité',
  chapitre: 'Le médicament',
  ordre: 2,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'voie orale',
    'voie sublinguale',
    'voie rectale',
    'voie parentérale',
    'voie transdermique',
    'voie inhalée',
    'biodisponibilité',
    'effet de premier passage',
  ],
  objectifs: [
    'Classer les principales voies d’administration selon leur mode de passage vers la circulation générale.',
    'Décrire les avantages et les limites de la voie orale.',
    'Expliquer l’intérêt pharmacocinétique des voies sublinguale et rectale.',
    'Distinguer les voies parentérales entre elles selon leur vitesse et leur biodisponibilité.',
    'Caractériser la voie transdermique et la voie inhalée.',
    'Comparer la biodisponibilité attendue selon la voie choisie.',
  ],
  sections: [
    {
      id: 'classification-generale',
      titre: 'Classification générale des voies d’administration',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les voies d’administration se répartissent classiquement en voie entérale, qui emprunte le tube digestif, et voies parentérales, qui contournent le tube digestif. D’autres voies, dites locorégionales ou systémiques non digestives, comme la voie transdermique, inhalée ou muqueuse, complètent cette classification.",
        },
        {
          type: 'liste',
          items: [
            'La voie entérale regroupe la voie orale et la voie rectale, toutes deux en contact avec la muqueuse digestive.',
            'Les voies parentérales regroupent les voies intraveineuse, intramusculaire, sous-cutanée et intradermique, qui traversent la peau ou une muqueuse par effraction.',
            'La voie sublinguale, bien que buccale, est fonctionnellement proche d’une voie parentérale car elle évite le tube digestif et le foie.',
          ],
        },
        {
          type: 'tableau',
          titre: 'Vue d’ensemble des voies d’administration',
          colonnes: ['Voie', 'Type', 'Effet de premier passage hépatique'],
          lignes: [
            ['Orale', 'Entérale', 'Présent'],
            ['Sublinguale', 'Muqueuse, non digestive', 'Absent'],
            ['Rectale', 'Entérale', 'Partiellement évité'],
            ['Intraveineuse', 'Parentérale', 'Absent'],
            ['Intramusculaire', 'Parentérale', 'Absent'],
            ['Transdermique', 'Systémique non digestive', 'Absent'],
            ['Inhalée', 'Systémique non digestive', 'Absent (action locale ou systémique)'],
          ],
        },
        {
          type: 'encadre',
          variante: 'info',
          titre: 'Voie systémique et voie locale',
          texte:
            "Une même voie peut être utilisée à visée locale, pour une action limitée au site d’administration, ou à visée systémique, lorsque le principe actif doit atteindre la circulation générale pour agir à distance. La voie inhalée illustre bien cette double possibilité, avec les bronchodilatateurs à action locale et les anesthésiques gazeux à action systémique.",
        },
      ],
    },
    {
      id: 'voie-orale',
      titre: 'Voie orale',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La voie orale est la voie d’administration la plus utilisée en pratique courante, en raison de sa simplicité, de son faible coût et de la bonne acceptabilité par le patient. Le principe actif est absorbé au niveau de la muqueuse digestive, principalement au niveau de l’intestin grêle, avant de rejoindre la circulation porte puis le foie.",
        },
        {
          type: 'comparaison',
          titre: 'Avantages et limites de la voie orale',
          gauche: {
            titre: 'Avantages',
            points: [
              'Facilité d’administration, autonomie du patient',
              'Absence d’effraction cutanée, risque infectieux minimal',
              'Coût de production généralement faible',
              'Grand choix de formes galéniques disponibles',
            ],
          },
          droite: {
            titre: 'Limites',
            points: [
              'Soumise à l’effet de premier passage hépatique',
              'Absorption variable selon l’état digestif et l’alimentation',
              'Délai d’action plus long qu’une voie parentérale',
              'Inutilisable en cas de vomissements, de troubles de la déglutition ou d’inconscience',
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Facteurs digestifs modifiant l’absorption orale',
          texte:
            "La prise concomitante d’aliments, le pH gastrique, la vitesse de vidange gastrique et le transit intestinal peuvent chacun modifier la vitesse et l’intensité de l’absorption d’un médicament administré par voie orale. Ces facteurs expliquent les recommandations de prise à jeun ou au cours des repas pour certains médicaments.",
        },
        {
          type: 'paragraphe',
          texte:
            "La biodisponibilité orale d’un principe actif dépend à la fois de sa résistance à la dégradation digestive, de sa capacité à traverser la muqueuse intestinale et de l’ampleur de l’effet de premier passage hépatique, qui peut réduire fortement la fraction de dose atteignant la circulation générale.",
        },
      ],
    },
    {
      id: 'sublinguale-rectale',
      titre: 'Voies sublinguale et rectale',
      blocs: [
        {
          type: 'definition',
          terme: 'Voie sublinguale',
          definition:
            "Voie d’administration où le médicament, généralement sous forme de comprimé ou de spray, est déposé sous la langue et se dissout au contact de la muqueuse buccale richement vascularisée, permettant un passage direct dans la circulation générale sans passer par le tube digestif ni par le foie.",
        },
        {
          type: 'liste',
          items: [
            'La voie sublinguale permet un délai d’action très court, comparable à une injection, en raison de la richesse vasculaire de la muqueuse buccale.',
            'Elle évite totalement l’effet de premier passage hépatique, ce qui en fait une voie de choix pour les principes actifs fortement métabolisés par le foie.',
            'Elle est utilisée notamment pour le traitement de la crise d’angor, en raison de sa rapidité d’action.',
          ],
        },
        {
          type: 'definition',
          terme: 'Voie rectale',
          definition:
            "Voie d’administration où le médicament, sous forme de suppositoire ou de lavement, est introduit dans le rectum. Le réseau veineux hémorroïdal permet un passage partiel vers la circulation systémique sans transiter intégralement par le foie.",
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Effet de premier passage partiellement évité par voie rectale',
          texte:
            "Le réseau veineux hémorroïdal supérieur rejoint la veine porte, tandis que les réseaux hémorroïdaux moyen et inférieur rejoignent directement la veine cave inférieure. L’effet de premier passage hépatique n’est donc que partiellement évité par la voie rectale, contrairement à une idée reçue fréquente qui l’assimile à tort à une voie totalement épargnée.",
        },
        {
          type: 'tableau',
          titre: 'Indications typiques',
          colonnes: ['Voie', 'Situation clinique typique', 'Intérêt principal'],
          lignes: [
            ['Sublinguale', 'Crise d’angor, urgence hypertensive', 'Délai d’action très court'],
            ['Rectale', 'Enfant, patient ne pouvant avaler, fièvre', 'Alternative à la voie orale sans injection'],
          ],
        },
      ],
    },
    {
      id: 'parenterales',
      titre: 'Voies parentérales',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Les voies parentérales impliquent une effraction cutanée ou muqueuse par une aiguille ou un dispositif équivalent. Elles évitent systématiquement l’effet de premier passage hépatique et offrent une biodisponibilité généralement élevée, mais exposent à un risque infectieux et nécessitent souvent l’intervention d’un professionnel de santé.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison des principales voies parentérales',
          colonnes: ['Voie', 'Délai d’action', 'Biodisponibilité', 'Particularité'],
          lignes: [
            ['Intraveineuse', 'Immédiat', '100 % par définition', 'Permet un contrôle précis de la dose et de la vitesse d’administration'],
            ['Intramusculaire', 'Rapide (quelques minutes)', 'Généralement élevée', 'Permet des formes retard à libération prolongée'],
            ['Sous-cutanée', 'Modéré', 'Élevée mais variable', 'Adaptée à l’auto-administration, comme l’insuline'],
            ['Intradermique', 'Lent, action locale privilégiée', 'Faible en systémique', 'Utilisée pour les tests cutanés et certaines vaccinations'],
          ],
        },
        {
          type: 'encadre',
          variante: 'chiffres',
          titre: 'Biodisponibilité de référence',
          texte:
            "Par convention, la biodisponibilité de la voie intraveineuse est fixée à 100 %, car la totalité de la dose administrée atteint directement la circulation générale. Elle sert de référence pour le calcul de la biodisponibilité absolue des autres voies d’administration.",
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Risques propres aux voies parentérales',
          texte:
            "L’administration parentérale expose à des risques spécifiques : infection au point d’injection, risque septicémique en cas d’asepsie insuffisante, douleur, hématome, et pour la voie intraveineuse, risque de choc en cas d’injection trop rapide d’un produit mal toléré.",
        },
      ],
    },
    {
      id: 'transdermique-inhalee',
      titre: 'Voies transdermique et inhalée',
      blocs: [
        {
          type: 'definition',
          terme: 'Voie transdermique',
          definition:
            "Voie d’administration où le médicament traverse la peau intacte, généralement grâce à un dispositif adhésif appelé patch, pour rejoindre la circulation générale de façon progressive et prolongée, sans effet de premier passage hépatique.",
        },
        {
          type: 'liste',
          items: [
            'La voie transdermique convient aux principes actifs suffisamment liposolubles et de faible poids moléculaire pour traverser la barrière cutanée.',
            'Elle assure une libération prolongée et régulière du principe actif, limitant les fluctuations de concentration plasmatique.',
            'Le délai d’installation de l’effet est en général plus long que pour une voie parentérale, en raison du temps nécessaire à la diffusion cutanée.',
          ],
        },
        {
          type: 'definition',
          terme: 'Voie inhalée',
          definition:
            "Voie d’administration où le médicament, sous forme d’aérosol, de poudre sèche ou de gaz, est déposé sur la muqueuse respiratoire. Elle permet une action locale rapide sur les voies aériennes ou, pour certaines molécules, un passage systémique rapide grâce à la très grande surface d’échange alvéolaire.",
        },
        {
          type: 'tableau',
          titre: 'Comparaison transdermique et inhalée',
          colonnes: ['Critère', 'Voie transdermique', 'Voie inhalée'],
          lignes: [
            ['Délai d’action', 'Long (heures)', 'Très court à rapide (secondes à minutes)'],
            ['Visée principale', 'Systémique prolongée', 'Locale ou systémique rapide'],
            ['Exemple d’usage', 'Substitution nicotinique, traitement de la douleur chronique', 'Bronchodilatateurs, anesthésie générale par inhalation'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la surface d’échange',
          texte:
            "La surface alvéolaire pulmonaire est considérable, de l’ordre de la centaine de mètres carrés chez l’adulte, ce qui explique la rapidité d’absorption systémique par voie inhalée pour les molécules gazeuses ou aérosolisées suffisamment fines.",
        },
      ],
    },
    {
      id: 'biodisponibilite-comparee',
      titre: 'Biodisponibilité comparée selon la voie',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "La biodisponibilité, définie comme la fraction de la dose administrée qui atteint la circulation générale sous forme inchangée et la vitesse à laquelle elle l’atteint, varie considérablement selon la voie d’administration choisie pour un même principe actif.",
        },
        {
          type: 'tableau',
          titre: 'Ordre de grandeur de la biodisponibilité selon la voie',
          colonnes: ['Voie', 'Biodisponibilité typique'],
          lignes: [
            ['Intraveineuse', '100 % (référence)'],
            ['Intramusculaire, sous-cutanée', 'Souvent proche de 100 %, parfois réduite par précipitation locale'],
            ['Sublinguale', 'Élevée, effet de premier passage évité'],
            ['Rectale', 'Variable, effet de premier passage partiellement évité'],
            ['Orale', 'Variable, souvent réduite par l’effet de premier passage hépatique'],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Choix de la voie en fonction de l’objectif clinique',
          texte:
            "Le choix de la voie d’administration résulte d’un compromis entre l’urgence de l’effet recherché, la nécessité d’une biodisponibilité prévisible, l’état clinique du patient et l’acceptabilité pratique du traitement. En situation d’urgence vitale, la voie intraveineuse est privilégiée pour son délai d’action immédiat et sa biodisponibilité totale.",
        },
      ],
    },
  ],
  pointsCles: [
    "Les voies d’administration se classent en entérales, parentérales et systémiques non digestives.",
    "La voie orale est pratique mais soumise à l’effet de premier passage hépatique et à une absorption variable.",
    "La voie sublinguale évite totalement l’effet de premier passage hépatique et agit très rapidement.",
    "La voie rectale n’évite l’effet de premier passage hépatique que partiellement.",
    "La voie intraveineuse sert de référence avec une biodisponibilité de 100 %.",
    "La voie transdermique assure une libération prolongée sans effet de premier passage.",
    "La voie inhalée profite de la grande surface alvéolaire pour une absorption systémique rapide.",
  ],
  erreursFrequentes: [
    "Croire que la voie rectale évite totalement l’effet de premier passage hépatique.",
    "Confondre voie sublinguale et voie orale, alors que la première évite le tube digestif et le foie.",
    "Penser que toutes les voies parentérales ont un délai d’action identique.",
    "Oublier que la biodisponibilité de la voie intraveineuse est fixée conventionnellement à 100 % et sert de référence.",
    "Croire que la voie inhalée n’a qu’une visée locale, en oubliant son usage à visée systémique rapide.",
  ],
  mnemotechniques: [
    {
      moyen: 'SL = Sans Long trajet',
      explication:
        'La voie sublinguale évite le long trajet digestif et hépatique, d’où un effet rapide et l’absence d’effet de premier passage.',
    },
    {
      moyen: 'IV = Référence à 100 %',
      explication:
        'La voie intraveineuse délivre par définition la totalité de la dose dans la circulation générale, ce qui en fait la référence de biodisponibilité absolue.',
    },
    {
      moyen: 'Rectale = Moitié-moitié',
      explication:
        'Le réseau hémorroïdal supérieur rejoint la veine porte, les réseaux moyen et inférieur rejoignent la veine cave : l’effet de premier passage n’est donc que partiellement évité.',
    },
  ],
  sources: [
    'Rang et Dale, Pharmacologie, 9e édition',
    'Katzung, Pharmacologie fondamentale et clinique, 14e édition',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue6-voies-administration-fc-01',
      recto: 'Quelles voies constituent la voie entérale ?',
      verso: 'La voie orale et la voie rectale, toutes deux en contact avec la muqueuse digestive.',
      type: 'classification',
      tags: ['voies d’administration'],
    },
    {
      id: 'ue6-voies-administration-fc-02',
      recto: 'Pourquoi la voie sublinguale évite-t-elle l’effet de premier passage hépatique ?',
      verso: 'Parce que la muqueuse buccale draine directement vers la circulation générale, sans transiter par la veine porte ni par le foie.',
      type: 'mecanisme',
      tags: ['sublinguale', 'premier passage'],
    },
    {
      id: 'ue6-voies-administration-fc-03',
      recto: 'L’effet de premier passage hépatique est-il totalement évité par voie rectale ?',
      verso: 'Non, seulement partiellement, car une partie du réseau veineux hémorroïdal rejoint la veine porte.',
      type: 'mecanisme',
      tags: ['rectale', 'premier passage'],
    },
    {
      id: 'ue6-voies-administration-fc-04',
      recto: 'Quelle est la biodisponibilité conventionnelle de la voie intraveineuse ?',
      verso: '100 %, elle sert de référence pour le calcul de la biodisponibilité absolue des autres voies.',
      type: 'chiffre',
      tags: ['biodisponibilité', 'intraveineuse'],
    },
    {
      id: 'ue6-voies-administration-fc-05',
      recto: 'Citer un avantage de la voie sous-cutanée.',
      verso: 'Elle permet l’auto-administration par le patient, par exemple pour l’insuline.',
      type: 'clinique',
      tags: ['sous-cutanée'],
    },
    {
      id: 'ue6-voies-administration-fc-06',
      recto: 'Quelle voie est utilisée pour les tests cutanés d’allergie ?',
      verso: 'La voie intradermique.',
      type: 'clinique',
      tags: ['intradermique'],
    },
    {
      id: 'ue6-voies-administration-fc-07',
      recto: 'Quel type de dispositif caractérise la voie transdermique ?',
      verso: 'Le patch, un dispositif adhésif qui libère le principe actif à travers la peau intacte.',
      type: 'definition',
      tags: ['transdermique'],
    },
    {
      id: 'ue6-voies-administration-fc-08',
      recto: 'Pourquoi l’absorption par voie inhalée peut-elle être très rapide ?',
      verso: 'En raison de la très grande surface d’échange alvéolaire, de l’ordre de la centaine de mètres carrés.',
      type: 'mecanisme',
      tags: ['inhalée'],
    },
    {
      id: 'ue6-voies-administration-fc-09',
      recto: 'Quelle voie choisit-on en priorité en situation d’urgence vitale nécessitant un effet immédiat ?',
      verso: 'La voie intraveineuse, pour son délai d’action immédiat et sa biodisponibilité totale.',
      type: 'clinique',
      tags: ['urgence', 'intraveineuse'],
    },
    {
      id: 'ue6-voies-administration-fc-10',
      recto: 'Quel facteur limite l’utilisation de la voie orale chez un patient inconscient ?',
      verso: 'Le risque de fausse route et l’impossibilité d’assurer une déglutition correcte.',
      type: 'clinique',
      tags: ['orale'],
    },
    {
      id: 'ue6-voies-administration-fc-11',
      recto: 'Quel est l’intérêt principal d’une forme intramusculaire retard ?',
      verso: 'Assurer une libération prolongée du principe actif, réduisant la fréquence des injections.',
      type: 'mecanisme',
      tags: ['intramusculaire'],
    },
    {
      id: 'ue6-voies-administration-fc-12',
      recto: 'Citer un facteur digestif modifiant l’absorption d’un médicament par voie orale.',
      verso: 'La prise alimentaire concomitante, le pH gastrique ou la vitesse de vidange gastrique.',
      type: 'mecanisme',
      tags: ['orale', 'absorption'],
    },
  ],
  qcm: [
    {
      id: 'ue6-voies-administration-qcm-01',
      enonce: 'Concernant la classification des voies d’administration, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La voie orale appartient à la voie entérale.', vraie: true, justification: 'Elle met en jeu la muqueuse digestive, comme la voie rectale.' },
        { lettre: 'B', texte: 'La voie sublinguale est une voie entérale.', vraie: false, justification: 'Bien que buccale, elle évite le tube digestif et se rapproche fonctionnellement d’une voie parentérale.' },
        { lettre: 'C', texte: 'La voie intraveineuse est une voie parentérale.', vraie: true, justification: 'Elle implique une effraction directe dans la circulation sanguine.' },
        { lettre: 'D', texte: 'La voie transdermique implique une effraction cutanée par aiguille.', vraie: false, justification: 'Elle traverse la peau intacte sans effraction, contrairement aux voies parentérales classiques.' },
        { lettre: 'E', texte: 'La voie inhalée peut avoir une visée locale ou systémique.', vraie: true, justification: 'Selon la molécule utilisée, l’effet recherché peut être local sur les bronches ou systémique.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue6-voies-administration-qcm-02',
      enonce: 'Concernant la voie orale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'Elle est soumise à l’effet de premier passage hépatique.', vraie: true, justification: 'Le sang veineux digestif rejoint la veine porte puis le foie avant la circulation générale.' },
        { lettre: 'B', texte: 'Son absorption n’est jamais influencée par l’alimentation.', vraie: false, justification: 'La prise alimentaire concomitante peut accélérer, ralentir ou réduire l’absorption selon les médicaments.' },
        { lettre: 'C', texte: 'Elle est inutilisable chez un patient présentant des vomissements incoercibles.', vraie: true, justification: 'Le médicament ne peut alors pas être retenu suffisamment longtemps pour être absorbé.' },
        { lettre: 'D', texte: 'Son délai d’action est en général plus court que celui de la voie intraveineuse.', vraie: false, justification: 'Le délai d’action est au contraire plus long, en raison des étapes de dissolution et d’absorption digestive.' },
        { lettre: 'E', texte: 'Elle est la voie la plus utilisée en pratique courante.', vraie: true, justification: 'Sa simplicité et son faible coût en font la voie la plus fréquemment employée.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 1,
    },
    {
      id: 'ue6-voies-administration-qcm-03',
      enonce: 'Concernant les voies sublinguale et rectale, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La voie sublinguale évite totalement l’effet de premier passage hépatique.', vraie: true, justification: 'La muqueuse buccale draine directement vers la circulation générale.' },
        { lettre: 'B', texte: 'La voie rectale évite totalement l’effet de premier passage hépatique.', vraie: false, justification: 'Seule une partie du réseau veineux hémorroïdal contourne la veine porte, l’évitement n’est que partiel.' },
        { lettre: 'C', texte: 'La voie sublinguale est utilisée dans le traitement de la crise d’angor pour sa rapidité d’action.', vraie: true, justification: 'Le délai d’action très court en fait une voie de choix dans cette indication d’urgence.' },
        { lettre: 'D', texte: 'La voie rectale utilise un réseau veineux exclusivement relié à la veine porte.', vraie: false, justification: 'Le réseau hémorroïdal supérieur rejoint la veine porte, mais les réseaux moyen et inférieur rejoignent la veine cave inférieure.' },
        { lettre: 'E', texte: 'La voie rectale peut être une alternative à la voie orale chez l’enfant.', vraie: true, justification: 'Elle est notamment utilisée chez l’enfant ne pouvant avaler certaines formes orales.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-voies-administration-qcm-04',
      enonce: 'Concernant les voies parentérales, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La biodisponibilité de la voie intraveineuse est fixée à 100 % par convention.', vraie: true, justification: 'La totalité de la dose atteint directement la circulation générale.' },
        { lettre: 'B', texte: 'La voie intramusculaire ne permet pas de formes à libération prolongée.', vraie: false, justification: 'Elle permet au contraire des formes retard, utiles pour espacer les injections.' },
        { lettre: 'C', texte: 'La voie intradermique est principalement utilisée pour une action systémique rapide.', vraie: false, justification: 'Elle privilégie une action locale, comme dans les tests cutanés, avec une diffusion systémique faible.' },
        { lettre: 'D', texte: 'Les voies parentérales exposent à un risque infectieux au point d’injection.', vraie: true, justification: 'L’effraction cutanée ou muqueuse expose à ce risque en cas d’asepsie insuffisante.' },
        { lettre: 'E', texte: 'La voie sous-cutanée permet l’auto-administration par le patient.', vraie: true, justification: 'C’est notamment le cas de l’insuline, auto-administrée par les patients diabétiques.' },
      ],
      correction: 'Réponses exactes : A, D et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-voies-administration-qcm-05',
      enonce: 'Concernant les voies transdermique et inhalée, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La voie transdermique évite l’effet de premier passage hépatique.', vraie: true, justification: 'Le passage se fait directement à travers la peau vers la circulation générale, sans transit hépatique préalable.' },
        { lettre: 'B', texte: 'La voie transdermique convient à toutes les molécules, quelle que soit leur liposolubilité.', vraie: false, justification: 'Seules les molécules suffisamment liposolubles et de faible poids moléculaire traversent efficacement la peau.' },
        { lettre: 'C', texte: 'La voie inhalée profite d’une grande surface d’échange alvéolaire.', vraie: true, justification: 'Cette surface, de l’ordre de la centaine de mètres carrés, favorise une absorption rapide.' },
        { lettre: 'D', texte: 'La voie transdermique a un délai d’action généralement plus court que la voie intraveineuse.', vraie: false, justification: 'Son délai d’action est au contraire plus long, en raison du temps de diffusion cutanée.' },
        { lettre: 'E', texte: 'La voie inhalée peut être utilisée pour l’anesthésie générale par gaz.', vraie: true, justification: 'Certains agents anesthésiques gazeux sont administrés par cette voie pour une action systémique rapide.' },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue6-voies-administration-qcm-06',
      enonce: 'Concernant la biodisponibilité selon la voie d’administration, quelles propositions sont exactes ?',
      propositions: [
        { lettre: 'A', texte: 'La biodisponibilité orale est toujours proche de 100 %.', vraie: false, justification: 'Elle est souvent réduite et variable, notamment en raison de l’effet de premier passage hépatique.' },
        { lettre: 'B', texte: 'La biodisponibilité intraveineuse sert de référence pour le calcul de la biodisponibilité absolue.', vraie: true, justification: 'Elle est fixée conventionnellement à 100 % et permet de comparer les autres voies.' },
        { lettre: 'C', texte: 'La biodisponibilité sublinguale est généralement élevée.', vraie: true, justification: 'L’effet de premier passage hépatique étant évité, la fraction absorbée atteint efficacement la circulation générale.' },
        { lettre: 'D', texte: 'Le choix de la voie d’administration ne dépend que du coût du traitement.', vraie: false, justification: 'Il dépend surtout de l’urgence clinique, de l’état du patient et de la biodisponibilité recherchée.' },
        { lettre: 'E', texte: 'En urgence vitale, la voie intraveineuse est généralement privilégiée.', vraie: true, justification: 'Son délai d’action immédiat et sa biodisponibilité totale en font la voie de choix dans ce contexte.' },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
  ],
};
