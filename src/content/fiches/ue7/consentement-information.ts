import type { Fiche } from '../../types';

export const ficheConsentementInformation: Fiche = {
  id: 'ue7-consentement-information',
  ue: 'ue7',
  titre: 'Information du patient et consentement',
  sousTitre:
    'Le contenu de l’information, le consentement libre et éclairé, le refus de soins et leurs cas particuliers',
  chapitre: 'Éthique et droit',
  ordre: 4,
  duree: 24,
  difficulte: 2,
  motsCles: [
    'information du patient',
    'consentement libre et éclairé',
    'refus de soins',
    'mineur',
    'majeur protégé',
    'personne de confiance',
    'loi Kouchner',
  ],
  objectifs: [
    'Décrire les caractéristiques que doit présenter l’information délivrée à un patient.',
    'Définir le consentement libre et éclairé et ses conditions de validité.',
    'Expliquer la portée et les limites du refus de soins.',
    'Distinguer les modalités de recueil du consentement chez le mineur et chez le majeur protégé.',
    'Définir le rôle de la personne de confiance dans le parcours de soins.',
  ],
  sections: [
    {
      id: 'principe-information',
      titre: 'Le principe de l’information du patient',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le droit du patient à être informé sur son état de santé est un principe fondamental du droit de la santé français, notamment affirmé par la loi du 4 mars 2002 relative aux droits des malades (dite loi Kouchner), qui a consacré et renforcé les droits des patients, dont le droit à l’information.",
        },
        {
          type: 'definition',
          terme: 'Information du patient',
          definition:
            "Ensemble des éléments que le professionnel de santé doit porter à la connaissance du patient concernant son état de santé, les investigations et les traitements proposés, leur utilité, leurs conséquences, les risques fréquents ou graves normalement prévisibles, ainsi que les alternatives possibles.",
        },
        {
          type: 'liste',
          items: [
            "L’information doit être délivrée au cours d’un entretien individuel, dans un langage adapté et compréhensible par le patient.",
            "Elle porte notamment sur les bénéfices attendus, les risques fréquents ou graves normalement prévisibles, et les alternatives thérapeutiques envisageables, y compris l’abstention.",
            "L’information est un processus continu et adapté à l’évolution de la situation clinique, non un acte isolé et figé.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le droit évolue',
          texte:
            "Les principes présentés ici sont stables, mais leurs modalités précises d’application relèvent de textes et d’une jurisprudence qui peuvent évoluer. Se référer au cours de la faculté et aux textes en vigueur pour toute application pratique précise.",
        },
      ],
    },
    {
      id: 'qualites-information',
      titre: 'Les qualités attendues de l’information',
      blocs: [
        {
          type: 'tableau',
          titre: 'Les caractéristiques d’une information de qualité',
          colonnes: ['Qualité', 'Signification'],
          lignes: [
            ['Claire', 'Formulée dans un langage compréhensible, sans jargon inutile'],
            ['Loyale', 'Sincère, sans dissimulation ni exagération'],
            ['Appropriée', "Adaptée à la personnalité, à la situation et à la capacité de compréhension du patient"],
            ['Actualisée', "Tenant compte de l’évolution des données médicales et de l’état du patient"],
          ],
        },
        {
          type: 'encadre',
          variante: 'examen',
          titre: 'Charge de la preuve',
          texte:
            "En cas de litige, c’est au professionnel de santé qu’il revient de prouver qu’il a bien délivré une information adaptée au patient, et non au patient de prouver qu’il n’a pas été informé. Cette preuve peut être apportée par tout moyen, y compris par la trace écrite dans le dossier médical.",
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Exception thérapeutique et urgence',
          texte:
            "L’information peut être limitée dans son étendue par la volonté du patient d’être tenu dans l’ignorance d’un diagnostic ou d’un pronostic, sauf lorsque des tiers sont exposés à un risque de transmission. En situation d’urgence vitale rendant impossible le recueil préalable du consentement, les soins nécessaires peuvent être dispensés, l’information étant alors délivrée dès que possible.",
        },
      ],
    },
    {
      id: 'consentement-libre-eclaire',
      titre: 'Le consentement libre et éclairé',
      blocs: [
        {
          type: 'definition',
          terme: 'Consentement libre et éclairé',
          definition:
            "Accord donné par le patient à un acte médical, à la suite d’une information adaptée, sans contrainte ni pression, et pouvant être retiré à tout moment.",
        },
        {
          type: 'liste',
          items: [
            "Le consentement doit être libre : donné sans contrainte, ni pression de l’entourage ou de l’équipe soignante.",
            "Il doit être éclairé : précédé d’une information claire, loyale et appropriée.",
            "Il peut être retiré à tout moment par le patient, y compris après avoir été initialement donné.",
            "Aucun acte médical ni aucun traitement ne peut, en principe, être pratiqué sans le consentement libre et éclairé de la personne, hormis les situations d’urgence vitale ou d’impossibilité de consentir.",
          ],
        },
        {
          type: 'tableau',
          titre: 'Les conditions de validité du consentement',
          colonnes: ['Condition', 'Signification'],
          lignes: [
            ['Information préalable', 'Le patient doit avoir reçu une information claire, loyale et appropriée avant de se prononcer'],
            ['Capacité de discernement', 'Le patient doit être en mesure de comprendre la situation et d’en mesurer les conséquences'],
            ['Absence de contrainte', 'Le consentement ne doit résulter d’aucune pression, ni de l’entourage ni de l’équipe soignante'],
            ['Révocabilité', 'Le patient peut retirer son consentement à tout moment, y compris après l’avoir donné'],
          ],
        },
        {
          type: 'encadre',
          variante: 'astuce',
          titre: 'Retenir la logique générale',
          texte:
            "Le consentement suppose trois conditions cumulatives : une information préalable adaptée, une capacité de discernement suffisante, et l’absence de contrainte. L’absence d’une seule de ces conditions fragilise la validité du consentement.",
        },
      ],
    },
    {
      id: 'refus-de-soins',
      titre: 'Le refus de soins',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le respect de l’autonomie implique que le patient majeur et capable de discernement puisse refuser un soin, y compris lorsque ce refus met sa vie en danger. Le médecin a alors l’obligation de tout mettre en œuvre pour convaincre le patient d’accepter les soins indispensables, en respectant sa décision une fois celle-ci réitérée après un délai raisonnable de réflexion.",
        },
        {
          type: 'liste',
          items: [
            "Le médecin doit informer le patient des conséquences de son refus, réitérer cette information et l’inscrire dans le dossier médical.",
            "Le refus de soins ne dispense pas le médecin de poursuivre l’accompagnement du patient, y compris dans le cadre de soins palliatifs si nécessaire.",
            "La situation est différente lorsque le patient n’est pas en mesure d’exprimer sa volonté : la décision doit alors reposer sur une démarche collégiale, prenant en compte les souhaits antérieurement exprimés par le patient.",
          ],
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Un principe et non une facilité',
          texte:
            "Le respect du refus de soins ne signifie pas un désengagement du soignant : il implique au contraire un effort renforcé d’information, de dialogue et d’accompagnement, avant et après la décision du patient.",
        },
      ],
    },
    {
      id: 'mineur-majeur-protege',
      titre: 'Le cas du mineur et du majeur protégé',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            "Le recueil du consentement obéit à des règles particulières lorsque le patient n’a pas la pleine capacité juridique, notamment chez le mineur et chez le majeur protégé (sous tutelle, curatelle ou autre mesure de protection).",
        },
        {
          type: 'comparaison',
          titre: 'Principes généraux à retenir',
          gauche: {
            titre: 'Le patient mineur',
            points: [
              "Le consentement est en principe recueilli auprès des titulaires de l’autorité parentale.",
              "L’avis du mineur doit néanmoins être systématiquement recherché et pris en compte, à proportion de sa maturité.",
              "Des dispositifs spécifiques existent pour certaines situations sensibles, afin de préserver l’accès aux soins du mineur.",
            ],
          },
          droite: {
            titre: 'Le majeur protégé',
            points: [
              "Le degré de participation de la personne protégée dépend de la nature de la mesure de protection et de ses capacités effectives de discernement.",
              "L’objectif reste, autant que possible, de rechercher et de respecter la volonté de la personne elle-même.",
              "Le représentant légal intervient en complément, non en substitution systématique, lorsque la personne conserve une capacité de discernement.",
            ],
          },
        },
        {
          type: 'encadre',
          variante: 'attention',
          titre: 'Le droit évolue et les modalités précises varient',
          texte:
            "Les règles précises de recueil du consentement chez le mineur et le majeur protégé sont détaillées et évolutives : elles relèvent de textes spécifiques qu’il convient d’étudier dans le cours de la faculté plutôt que de mémoriser ici des articles précis.",
        },
      ],
    },
    {
      id: 'personne-de-confiance',
      titre: 'La personne de confiance',
      blocs: [
        {
          type: 'definition',
          terme: 'Personne de confiance',
          definition:
            "Personne désignée par le patient majeur, qui peut être consultée si le patient est hors d’état d’exprimer sa volonté, et qui peut, à la demande du patient, l’accompagner dans ses démarches et assister aux entretiens médicaux pour l’aider dans ses décisions.",
        },
        {
          type: 'liste',
          items: [
            "La désignation de la personne de confiance est facultative et peut être révisée ou révoquée à tout moment par le patient.",
            "Son avis prévaut en principe sur celui des autres membres de la famille ou proches lorsque le patient est hors d’état d’exprimer sa volonté, sauf directives anticipées contraires.",
            "Elle n’est pas décisionnaire à la place du patient : elle témoigne de ce qu’aurait souhaité le patient, elle n’exprime pas sa propre volonté personnelle.",
          ],
        },
        {
          type: 'encadre',
          variante: 'clinique',
          titre: 'Ne pas confondre avec la personne à prévenir',
          texte:
            "La personne de confiance, qui a un rôle d’accompagnement et de témoignage sur la volonté du patient, ne doit pas être confondue avec la simple « personne à prévenir » en cas d’urgence, qui n’a pas ce rôle particulier dans la démarche de soin.",
        },
      ],
    },
  ],
  pointsCles: [
    "Le patient a un droit fondamental à être informé sur son état de santé, notamment affirmé par la loi du 4 mars 2002 relative aux droits des malades.",
    "L’information doit être claire, loyale et appropriée à la situation du patient.",
    "En cas de litige, c’est au professionnel de santé de prouver qu’il a délivré une information adaptée.",
    "Le consentement doit être libre, éclairé, et peut être retiré à tout moment par le patient.",
    "Un patient majeur et capable de discernement peut refuser un soin, y compris vital, après information réitérée.",
    "Chez le mineur, le consentement est recueilli auprès des titulaires de l’autorité parentale, mais l’avis du mineur doit être recherché.",
    "La personne de confiance peut être consultée si le patient est hors d’état d’exprimer sa volonté, mais elle ne décide pas à sa place.",
  ],
  erreursFrequentes: [
    "Croire que le patient doit prouver qu’il n’a pas été informé : c’est en réalité au professionnel de santé de prouver qu’il a informé.",
    "Penser qu’un refus de soins dispense le soignant de tout accompagnement ultérieur du patient.",
    "Confondre personne de confiance et personne à prévenir : leurs rôles sont différents.",
    "Croire que l’avis du mineur n’a aucune valeur juridique ou clinique : il doit être recherché et pris en compte selon sa maturité.",
    "Considérer le consentement comme définitivement acquis une fois donné, alors qu’il peut être retiré à tout moment.",
    "Assimiler systématiquement majeur protégé et incapacité totale de discernement : le degré de participation dépend de la mesure et des capacités réelles de la personne.",
  ],
  mnemotechniques: [
    {
      moyen: 'CLA-P',
      explication:
        'Les qualités de l’information : Claire, Loyale, Appropriée, actualisée (Précise et suivie dans le temps).',
    },
    {
      moyen: 'Libre, éclairé, révocable',
      explication:
        'Les trois caractéristiques du consentement : donné sans contrainte, précédé d’une information adaptée, et retirable à tout moment.',
    },
  ],
  sources: [
    'Loi n°2002-303 du 4 mars 2002 relative aux droits des malades et à la qualité du système de santé',
    'Code de la santé publique (principes généraux, à actualiser selon le cours de la faculté)',
    'Hirsch E., Traité de bioéthique',
  ],
  schemasLies: [],
  flashcards: [
    {
      id: 'ue7-consentement-information-fc-01',
      recto: 'Quelle loi française a renforcé les droits des patients, notamment le droit à l’information ?',
      verso: 'La loi du 4 mars 2002 relative aux droits des malades, dite loi Kouchner.',
      type: 'definition',
      tags: ['loi Kouchner'],
    },
    {
      id: 'ue7-consentement-information-fc-02',
      recto: 'Citer les quatre qualités attendues de l’information du patient.',
      verso: 'Claire, loyale, appropriée et actualisée.',
      type: 'classification',
      tags: ['information'],
    },
    {
      id: 'ue7-consentement-information-fc-03',
      recto: 'À qui incombe la preuve de l’information délivrée en cas de litige ?',
      verso: 'Au professionnel de santé, qui doit prouver avoir délivré une information adaptée au patient.',
      type: 'definition',
      tags: ['information', 'preuve'],
    },
    {
      id: 'ue7-consentement-information-fc-04',
      recto: 'Définir le consentement libre et éclairé.',
      verso: 'L’accord donné par le patient à un acte médical, après information adaptée, sans contrainte, et révocable à tout moment.',
      type: 'definition',
      tags: ['consentement'],
    },
    {
      id: 'ue7-consentement-information-fc-05',
      recto: 'Un patient peut-il retirer son consentement après l’avoir donné ?',
      verso: 'Oui, le consentement peut être retiré à tout moment.',
      type: 'definition',
      tags: ['consentement'],
    },
    {
      id: 'ue7-consentement-information-fc-06',
      recto: 'Un patient majeur et capable de discernement peut-il refuser un soin vital ?',
      verso: 'Oui, après une information réitérée sur les conséquences de son refus et un délai raisonnable de réflexion.',
      type: 'clinique',
      tags: ['refus de soins'],
    },
    {
      id: 'ue7-consentement-information-fc-07',
      recto: 'Le refus de soins dispense-t-il le soignant d’accompagner le patient ?',
      verso: 'Non, il implique au contraire un accompagnement renforcé, y compris en soins palliatifs si nécessaire.',
      type: 'clinique',
      tags: ['refus de soins'],
    },
    {
      id: 'ue7-consentement-information-fc-08',
      recto: 'Auprès de qui le consentement est-il en principe recueilli pour un patient mineur ?',
      verso: "Auprès des titulaires de l’autorité parentale, tout en recherchant l’avis du mineur selon sa maturité.",
      type: 'clinique',
      tags: ['mineur'],
    },
    {
      id: 'ue7-consentement-information-fc-09',
      recto: 'Qu’est-ce que la personne de confiance ?',
      verso: "Une personne désignée par le patient majeur, consultée s’il est hors d’état d’exprimer sa volonté, et pouvant l’accompagner dans ses démarches.",
      type: 'definition',
      tags: ['personne de confiance'],
    },
    {
      id: 'ue7-consentement-information-fc-10',
      recto: 'La personne de confiance décide-t-elle à la place du patient ?',
      verso: "Non, elle témoigne de ce qu’aurait souhaité le patient, elle ne décide pas à sa place.",
      type: 'definition',
      tags: ['personne de confiance'],
    },
    {
      id: 'ue7-consentement-information-fc-11',
      recto: 'Distinguer personne de confiance et personne à prévenir.',
      verso: "La personne de confiance a un rôle d’accompagnement et de témoignage sur la volonté du patient ; la personne à prévenir est seulement contactée en cas d’urgence.",
      type: 'classification',
      tags: ['personne de confiance'],
    },
    {
      id: 'ue7-consentement-information-fc-12',
      recto: 'Le consentement peut-il être dispensé en situation d’urgence vitale ?',
      verso: 'Oui : les soins nécessaires peuvent être dispensés sans consentement préalable si le recueil de celui-ci est impossible, l’information étant délivrée dès que possible.',
      type: 'clinique',
      tags: ['urgence', 'consentement'],
    },
  ],
  qcm: [
    {
      id: 'ue7-consentement-information-qcm-01',
      enonce: 'Concernant le droit à l’information du patient, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il a été notamment renforcé par la loi du 4 mars 2002 relative aux droits des malades.',
          vraie: true,
          justification: 'Exact : cette loi a consacré et renforcé les droits des patients, dont le droit à l’information sur leur état de santé.',
        },
        {
          lettre: 'B',
          texte: 'L’information doit être délivrée une seule fois, au début de la prise en charge.',
          vraie: false,
          justification: "Faux : c’est un processus continu, adapté à l’évolution de la situation clinique.",
        },
        {
          lettre: 'C',
          texte: 'Elle porte notamment sur les risques fréquents ou graves normalement prévisibles.',
          vraie: true,
          justification: 'Exact : ces risques font partie des éléments que le professionnel de santé doit obligatoirement porter à la connaissance du patient.',
        },
        {
          lettre: 'D',
          texte: 'Elle doit être formulée dans un langage compréhensible par le patient.',
          vraie: true,
          justification: 'Exact, c’est l’une des qualités attendues de l’information.',
        },
        {
          lettre: 'E',
          texte: 'Elle ne concerne jamais les alternatives thérapeutiques.',
          vraie: false,
          justification: "Faux : les alternatives possibles, y compris l’abstention, font partie du contenu de l’information.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 1,
    },
    {
      id: 'ue7-consentement-information-qcm-02',
      enonce: 'Concernant la charge de la preuve de l’information, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'C’est au patient de prouver qu’il n’a pas été informé.',
          vraie: false,
          justification: "Faux : c’est au professionnel de santé de prouver qu’il a délivré une information adaptée.",
        },
        {
          lettre: 'B',
          texte: 'La preuve peut être apportée par tout moyen.',
          vraie: true,
          justification: 'Exact, y compris par une trace écrite dans le dossier médical.',
        },
        {
          lettre: 'C',
          texte: 'Le dossier médical peut servir de trace de l’information délivrée.',
          vraie: true,
          justification: 'Exact : la preuve de l’information peut être apportée par tout moyen, et une trace écrite dans le dossier médical en est un exemple courant.',
        },
        {
          lettre: 'D',
          texte: 'L’absence de preuve écrite rend automatiquement l’information invalide.',
          vraie: false,
          justification: "Faux : la preuve peut être apportée par tout moyen, pas uniquement par un écrit.",
        },
        {
          lettre: 'E',
          texte: 'Cette règle protège particulièrement le patient dans la relation de soin.',
          vraie: true,
          justification: 'Exact, c’est l’un des objectifs de cette répartition de la charge de la preuve.',
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-consentement-information-qcm-03',
      enonce: 'Concernant le consentement libre et éclairé, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Il doit être donné sans contrainte ni pression.',
          vraie: true,
          justification: 'Exact : l’absence de contrainte, qu’elle vienne de l’entourage ou de l’équipe soignante, est une condition de validité du consentement libre.',
        },
        {
          lettre: 'B',
          texte: 'Il est définitif dès qu’il a été donné une première fois.',
          vraie: false,
          justification: "Faux : il peut être retiré à tout moment par le patient.",
        },
        {
          lettre: 'C',
          texte: 'Il suppose une information préalable adaptée.',
          vraie: true,
          justification: 'Exact : le consentement n’est éclairé que s’il est précédé d’une information claire, loyale et appropriée à la situation du patient.',
        },
        {
          lettre: 'D',
          texte: 'Il peut être dispensé en situation d’urgence vitale rendant son recueil impossible.',
          vraie: true,
          justification: 'Exact, l’information étant alors délivrée dès que possible.',
        },
        {
          lettre: 'E',
          texte: 'Il ne nécessite aucune capacité de discernement du patient.',
          vraie: false,
          justification: "Faux : une capacité de discernement suffisante est une condition de validité du consentement.",
        },
      ],
      correction: 'Réponses exactes : A, C et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-consentement-information-qcm-04',
      enonce: 'Concernant le refus de soins, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Un patient majeur et capable de discernement peut refuser un soin, y compris vital.',
          vraie: true,
          justification: 'Exact, au nom du respect de son autonomie.',
        },
        {
          lettre: 'B',
          texte: 'Le médecin doit informer le patient des conséquences de son refus.',
          vraie: true,
          justification: 'Exact : le médecin doit informer le patient des conséquences de son refus, réitérer cette information et l’inscrire dans le dossier médical.',
        },
        {
          lettre: 'C',
          texte: 'Le refus de soins met automatiquement fin à toute prise en charge du patient.',
          vraie: false,
          justification: "Faux : le soignant doit poursuivre l’accompagnement du patient, y compris en soins palliatifs si nécessaire.",
        },
        {
          lettre: 'D',
          texte: 'Lorsque le patient ne peut exprimer sa volonté, la décision doit reposer sur une démarche collégiale.',
          vraie: true,
          justification: 'Exact, en tenant compte des souhaits antérieurement exprimés.',
        },
        {
          lettre: 'E',
          texte: 'Le médecin doit accepter immédiatement le premier refus exprimé sans chercher à convaincre le patient.',
          vraie: false,
          justification: "Faux : il doit tout mettre en œuvre pour convaincre le patient avant de respecter un refus réitéré.",
        },
      ],
      correction: 'Réponses exactes : A, B et D.',
      difficulte: 2,
    },
    {
      id: 'ue7-consentement-information-qcm-05',
      enonce: 'Concernant le mineur et le majeur protégé, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Le consentement d’un mineur est en principe recueilli auprès des titulaires de l’autorité parentale.',
          vraie: true,
          justification: 'Exact : le mineur n’ayant pas la pleine capacité juridique, ce sont en principe les titulaires de l’autorité parentale qui consentent à l’acte médical.',
        },
        {
          lettre: 'B',
          texte: 'L’avis du mineur n’a aucune valeur juridique ou clinique.',
          vraie: false,
          justification: "Faux : il doit être recherché et pris en compte à proportion de sa maturité.",
        },
        {
          lettre: 'C',
          texte: 'Le degré de participation d’un majeur protégé dépend de la nature de la mesure de protection.',
          vraie: true,
          justification: 'Exact : ce degré varie selon la nature de la mesure de protection et selon les capacités effectives de discernement de la personne.',
        },
        {
          lettre: 'D',
          texte: 'Un majeur sous protection juridique perd systématiquement toute capacité de discernement.',
          vraie: false,
          justification: "Faux : sa capacité de discernement effective doit être évaluée, elle n’est pas nécessairement abolie.",
        },
        {
          lettre: 'E',
          texte: 'L’objectif reste, autant que possible, de rechercher la volonté propre de la personne protégée.',
          vraie: true,
          justification: 'Exact : le représentant légal intervient en complément, et non en substitution systématique, lorsque la personne conserve une capacité de discernement.',
        },
      ],
      correction: 'Réponses exactes : A, C et E.',
      difficulte: 2,
    },
    {
      id: 'ue7-consentement-information-qcm-06',
      enonce: 'Concernant la personne de confiance, quelles propositions sont exactes ?',
      propositions: [
        {
          lettre: 'A',
          texte: 'Sa désignation est obligatoire pour tout patient majeur.',
          vraie: false,
          justification: "Faux : sa désignation est facultative.",
        },
        {
          lettre: 'B',
          texte: 'Elle peut être consultée si le patient est hors d’état d’exprimer sa volonté.',
          vraie: true,
          justification: 'Exact : c’est précisément le rôle premier de la personne de confiance, dont l’avis prévaut sur celui des autres proches, sauf directives anticipées contraires.',
        },
        {
          lettre: 'C',
          texte: 'Elle peut accompagner le patient et assister aux entretiens médicaux à sa demande.',
          vraie: true,
          justification: 'Exact : à la demande du patient, la personne de confiance peut l’accompagner dans ses démarches et assister aux entretiens médicaux pour l’aider dans ses décisions.',
        },
        {
          lettre: 'D',
          texte: 'Elle décide à la place du patient lorsqu’il ne peut s’exprimer.',
          vraie: false,
          justification: "Faux : elle témoigne de la volonté du patient, elle ne décide pas en son nom propre.",
        },
        {
          lettre: 'E',
          texte: 'Sa désignation peut être révoquée à tout moment par le patient.',
          vraie: true,
          justification: 'Exact : comme sa désignation est facultative, le patient peut à tout moment la réviser ou la révoquer.',
        },
      ],
      correction: 'Réponses exactes : B, C et E.',
      difficulte: 2,
    },
  ],
};
