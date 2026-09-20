import type { Schema } from '../../types';

export const schemaTypesEtudes: Schema = {
  id: 'sante-publique-types-etudes',
  ue: 'sante-publique',
  titre: 'Arbre décisionnel des schémas d’étude épidémiologique',
  description:
    'Classification des principaux schémas d’étude : observationnel contre interventionnel, transversal, cas-témoins, cohorte, essai randomisé, avec le sens du raisonnement et le niveau de preuve associé.',
  categorie: 'Méthodologie épidémiologique',
  viewBox: '0 0 920 700',
  ficheLiee: 'sante-publique-etudes-analytiques',
  motsCles: ['étude observationnelle', 'étude interventionnelle', 'étude transversale', 'étude cas-témoins', 'étude de cohorte', 'essai randomisé', 'niveau de preuve'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="sp-types-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="30" font-size="19" font-weight="600" fill="#101828">De la question de recherche au schéma d’étude</text>
      <line x1="40" y1="42" x2="220" y2="42" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Racine -->
      <rect x="370" y="56" width="180" height="52" rx="10" fill="#f6f8fd" stroke="#d0d5dd"/>
      <text x="400" y="88" font-size="13" font-weight="600" fill="#101828">Question de recherche</text>

      <line x1="460" y1="108" x2="460" y2="132" stroke="#101828" stroke-width="2" marker-end="url(#sp-types-fleche)"/>

      <!-- L'investigateur intervient-il ? -->
      <rect x="330" y="138" width="260" height="52" rx="10" fill="#fffaeb" stroke="#f4c22b"/>
      <text x="352" y="170" font-size="12.5" font-weight="600" fill="#8a6300">L’investigateur attribue-t-il l’exposition ?</text>

      <line x1="360" y1="190" x2="220" y2="230" stroke="#101828" stroke-width="2" marker-end="url(#sp-types-fleche)"/>
      <text x="250" y="212" font-size="11.5" fill="#475467">non</text>
      <line x1="560" y1="190" x2="700" y2="230" stroke="#101828" stroke-width="2" marker-end="url(#sp-types-fleche)"/>
      <text x="640" y="212" font-size="11.5" fill="#475467">oui</text>

      <!-- Branche observationnelle -->
      <rect x="60" y="236" width="320" height="52" rx="10" fill="#eef4ff" stroke="#c9d6ff"/>
      <circle cx="82" cy="262" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="78" y="267" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="100" y="267" font-size="13" font-weight="600" fill="#101828">Étude observationnelle</text>

      <!-- Branche interventionnelle -->
      <rect x="580" y="236" width="280" height="52" rx="10" fill="#fff6f1" stroke="#f3d3c2"/>
      <circle cx="602" cy="262" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="597" y="267" font-size="12" font-weight="700" fill="#e0632f">2</text>
      <text x="620" y="267" font-size="13" font-weight="600" fill="#101828">Étude interventionnelle</text>

      <!-- Sous-branches observationnelles -->
      <line x1="140" y1="288" x2="140" y2="316" stroke="#101828" stroke-width="1.6" marker-end="url(#sp-types-fleche)"/>
      <line x1="220" y1="288" x2="240" y2="316" stroke="#101828" stroke-width="1.6" marker-end="url(#sp-types-fleche)"/>
      <line x1="300" y1="288" x2="360" y2="316" stroke="#101828" stroke-width="1.6" marker-end="url(#sp-types-fleche)"/>

      <rect x="60" y="322" width="170" height="80" rx="10" fill="#eafbf1" stroke="#bdeccb"/>
      <circle cx="82" cy="344" r="13" fill="#12a065" opacity="0.2"/>
      <text x="78" y="349" font-size="12" font-weight="700" fill="#0a7a4d">3</text>
      <text x="98" y="349" font-size="12.5" font-weight="600" fill="#101828">Transversale</text>
      <text x="76" y="368" font-size="11" fill="#475467">Exposition et maladie</text>
      <text x="76" y="382" font-size="11" fill="#475467">mesurées au même</text>
      <text x="76" y="396" font-size="11" fill="#475467">instant (prévalence)</text>

      <rect x="248" y="322" width="170" height="80" rx="10" fill="#fff6f1" stroke="#f3d3c2"/>
      <circle cx="270" cy="344" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="266" y="349" font-size="12" font-weight="700" fill="#e0632f">4</text>
      <text x="286" y="349" font-size="12.5" font-weight="600" fill="#101828">Cas-témoins</text>
      <text x="264" y="368" font-size="11" fill="#475467">Part de la maladie,</text>
      <text x="264" y="382" font-size="11" fill="#475467">remonte vers</text>
      <text x="264" y="396" font-size="11" fill="#475467">l’exposition (rétrospectif)</text>

      <rect x="436" y="322" width="170" height="80" rx="10" fill="#f2f0ff" stroke="#dcd6fb"/>
      <circle cx="458" cy="344" r="13" fill="#7c4df5" opacity="0.22"/>
      <text x="453" y="349" font-size="12" font-weight="700" fill="#5a2fc7">5</text>
      <text x="474" y="349" font-size="12.5" font-weight="600" fill="#101828">Cohorte</text>
      <text x="452" y="368" font-size="11" fill="#475467">Part de l’exposition,</text>
      <text x="452" y="382" font-size="11" fill="#475467">suit vers la maladie</text>
      <text x="452" y="396" font-size="11" fill="#475467">(prospectif ou non)</text>

      <!-- Sous-branche interventionnelle -->
      <line x1="700" y1="288" x2="700" y2="316" stroke="#101828" stroke-width="1.6" marker-end="url(#sp-types-fleche)"/>
      <rect x="600" y="322" width="230" height="80" rx="10" fill="#fdecea" stroke="#d4380d"/>
      <circle cx="622" cy="344" r="13" fill="#d4380d" opacity="0.2"/>
      <text x="617" y="349" font-size="12" font-weight="700" fill="#d4380d">6</text>
      <text x="638" y="349" font-size="12.5" font-weight="600" fill="#101828">Essai randomisé contrôlé</text>
      <text x="616" y="368" font-size="11" fill="#475467">Attribution aléatoire de</text>
      <text x="616" y="382" font-size="11" fill="#475467">l’intervention, comparaison</text>
      <text x="616" y="396" font-size="11" fill="#475467">à un groupe contrôle</text>

      <!-- Sens du raisonnement -->
      <g transform="translate(60,430)">
        <rect x="0" y="0" width="800" height="86" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="22" cy="22" r="13" fill="#101828" opacity="0.14"/>
        <text x="17" y="27" font-size="12" font-weight="700" fill="#101828">7</text>
        <text x="40" y="27" font-size="13" font-weight="600" fill="#101828">Sens du raisonnement</text>
        <text x="20" y="50" font-size="11.5" fill="#475467">Cas-témoins : de l’effet (maladie) vers la cause (exposition) — étude rétrospective.</text>
        <text x="20" y="68" font-size="11.5" fill="#475467">Cohorte et essai randomisé : de la cause (exposition ou intervention) vers l’effet (maladie) — étude prospective.</text>
      </g>

      <!-- Niveau de preuve -->
      <g transform="translate(60,536)">
        <rect x="0" y="0" width="800" height="140" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
        <circle cx="22" cy="22" r="13" fill="#12a065" opacity="0.22"/>
        <text x="17" y="27" font-size="12" font-weight="700" fill="#0a7a4d">8</text>
        <text x="40" y="27" font-size="13" font-weight="600" fill="#101828">Niveau de preuve croissant</text>
        <line x1="20" y1="50" x2="780" y2="50" stroke="#0a7a4d" stroke-width="2" marker-end="url(#sp-types-fleche)"/>
        <text x="20" y="72" font-size="11.5" fill="#0a7a4d">Transversale</text>
        <text x="190" y="72" font-size="11.5" fill="#0a7a4d">Cas-témoins</text>
        <text x="360" y="72" font-size="11.5" fill="#0a7a4d">Cohorte</text>
        <text x="520" y="72" font-size="11.5" fill="#0a7a4d">Essai randomisé</text>
        <text x="690" y="72" font-size="11.5" fill="#0a7a4d">Méta-analyse</text>
        <circle cx="740" cy="60" r="13" fill="#12a065" opacity="0.28"/>
        <text x="735" y="65" font-size="12" font-weight="700" fill="#0a7a4d">9</text>
        <text x="20" y="100" font-size="11.5" fill="#475467">Le niveau de preuve dépend du contrôle des biais : la randomisation limite les facteurs de confusion,</text>
        <text x="20" y="118" font-size="11.5" fill="#475467">tandis que les études rétrospectives sont les plus exposées aux biais de mémorisation et de sélection.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Étude observationnelle : le chercheur observe sans attribuer l’exposition ou l’intervention.' },
    { ref: '2', texte: 'Étude interventionnelle : le chercheur attribue lui-même l’exposition ou le traitement étudié.' },
    { ref: '3', texte: 'Étude transversale : exposition et maladie mesurées au même instant, estime une prévalence.' },
    { ref: '4', texte: 'Étude cas-témoins : compare des sujets malades (cas) à des sujets indemnes (témoins) pour rechercher l’exposition passée.' },
    { ref: '5', texte: 'Étude de cohorte : suit des sujets exposés et non exposés dans le temps pour observer la survenue de la maladie.' },
    { ref: '6', texte: 'Essai randomisé contrôlé : répartition aléatoire des sujets entre intervention et groupe contrôle, référence méthodologique.' },
    { ref: '7', texte: 'Le sens du raisonnement distingue les études rétrospectives (de l’effet vers la cause) des études prospectives (de la cause vers l’effet).' },
    { ref: '8', texte: 'Le niveau de preuve croît des études descriptives vers les essais randomisés puis les méta-analyses.' },
    { ref: '9', texte: 'La méta-analyse d’essais randomisés constitue le plus haut niveau de preuve scientifique.' },
  ],
};
