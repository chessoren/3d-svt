import type { Schema } from '../../types';

export const schemaCohorteCasTemoins: Schema = {
  id: 'sante-publique-cohorte-cas-temoins',
  ue: 'sante-publique',
  titre: 'Étude de cohorte contre étude cas-témoins',
  description:
    'Comparaison détaillée des études de cohorte et cas-témoins : sens temporel, point de départ, mesure d’association calculable, atouts, limites et biais spécifiques à chaque schéma.',
  categorie: 'Méthodologie épidémiologique',
  viewBox: '0 0 920 760',
  ficheLiee: 'sante-publique-etudes-analytiques',
  motsCles: ['étude de cohorte', 'étude cas-témoins', 'risque relatif', 'odds ratio', 'biais de mémorisation', 'biais de sélection', 'perdus de vue'],
  svg: `
    <rect x="0" y="0" width="920" height="760" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="sp-cohorte-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="30" font-size="19" font-weight="600" fill="#101828">1 · Sens temporel des deux schémas</text>
      <line x1="40" y1="42" x2="220" y2="42" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Cohorte : de l'exposition vers la maladie -->
      <text x="60" y="72" font-size="13.5" font-weight="600" fill="#175cd3">Cohorte (sens prospectif)</text>
      <g transform="translate(60,84)">
        <rect x="0" y="0" width="140" height="50" rx="10" fill="#eef4ff" stroke="#c9d6ff"/>
        <text x="14" y="22" font-size="11.5" font-weight="600" fill="#101828">Exposés</text>
        <text x="14" y="38" font-size="11.5" fill="#475467">non exposés</text>
        <circle cx="122" cy="14" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="118" y="19" font-size="12" font-weight="700" fill="#175cd3">1</text>

        <line x1="140" y1="25" x2="200" y2="25" stroke="#101828" stroke-width="2" marker-end="url(#sp-cohorte-fleche)"/>
        <text x="142" y="16" font-size="10.5" fill="#8a94a8">temps</text>

        <rect x="206" y="0" width="140" height="50" rx="10" fill="#eafbf1" stroke="#bdeccb"/>
        <text x="220" y="22" font-size="11.5" font-weight="600" fill="#101828">Malades</text>
        <text x="220" y="38" font-size="11.5" fill="#475467">non malades</text>
        <circle cx="328" cy="14" r="13" fill="#12a065" opacity="0.2"/>
        <text x="323" y="19" font-size="12" font-weight="700" fill="#0a7a4d">2</text>
      </g>

      <!-- Cas-témoins : de la maladie vers l'exposition passée -->
      <text x="500" y="72" font-size="13.5" font-weight="600" fill="#e0632f">Cas-témoins (sens rétrospectif)</text>
      <g transform="translate(500,84)">
        <rect x="0" y="0" width="140" height="50" rx="10" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="14" y="22" font-size="11.5" font-weight="600" fill="#101828">Cas (malades)</text>
        <text x="14" y="38" font-size="11.5" fill="#475467">témoins (non malades)</text>
        <circle cx="122" cy="14" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="118" y="19" font-size="12" font-weight="700" fill="#e0632f">3</text>

        <line x1="0" y1="70" x2="0" y2="70" stroke="none"/>
        <line x1="60" y1="52" x2="60" y2="78" stroke="#101828" stroke-width="2" marker-end="url(#sp-cohorte-fleche)" transform="rotate(180 60 65)"/>
        <text x="-46" y="66" font-size="10.5" fill="#8a94a8">on remonte le temps</text>

        <rect x="0" y="86" width="140" height="50" rx="10" fill="#f2f0ff" stroke="#dcd6fb"/>
        <text x="14" y="108" font-size="11.5" font-weight="600" fill="#101828">Exposition passée</text>
        <text x="14" y="124" font-size="11.5" fill="#475467">recherchée a posteriori</text>
        <circle cx="122" cy="100" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="117" y="105" font-size="12" font-weight="700" fill="#5a2fc7">4</text>
      </g>

      <text x="40" y="278" font-size="19" font-weight="600" fill="#101828">2 · Comparaison détaillée</text>
      <line x1="40" y1="290" x2="220" y2="290" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Tableau -->
      <g transform="translate(40,308)">
        <rect x="0" y="0" width="840" height="330" rx="10" fill="#ffffff" stroke="#d0d5dd"/>
        <rect x="0" y="0" width="840" height="34" fill="#f2f4f7"/>
        <line x1="0" y1="34" x2="840" y2="34" stroke="#d0d5dd"/>
        <line x1="220" y1="0" x2="220" y2="330" stroke="#d0d5dd"/>
        <line x1="530" y1="0" x2="530" y2="330" stroke="#e4e7ec"/>
        <line x1="0" y1="88" x2="840" y2="88" stroke="#e4e7ec"/>
        <line x1="0" y1="142" x2="840" y2="142" stroke="#e4e7ec"/>
        <line x1="0" y1="196" x2="840" y2="196" stroke="#e4e7ec"/>
        <line x1="0" y1="250" x2="840" y2="250" stroke="#e4e7ec"/>
        <line x1="0" y1="290" x2="840" y2="290" stroke="#e4e7ec"/>

        <text x="14" y="22" font-size="13" font-weight="600" fill="#101828">Critère</text>
        <text x="234" y="22" font-size="13" font-weight="700" fill="#175cd3">Étude de cohorte</text>
        <text x="544" y="22" font-size="13" font-weight="700" fill="#e0632f">Étude cas-témoins</text>

        <text x="14" y="46" font-size="12" fill="#475467">Point de départ</text>
        <text x="234" y="46" font-size="11.5" fill="#101828">Exposition (facteur de risque)</text>
        <text x="544" y="46" font-size="11.5" fill="#101828">Maladie (statut cas/témoin)</text>
        <circle cx="200" cy="42" r="13" fill="#101828" opacity="0.12"/>
        <text x="196" y="47" font-size="12" font-weight="700" fill="#101828">5</text>

        <text x="14" y="74" font-size="12" fill="#475467">Mesure d’association</text>
        <text x="234" y="70" font-size="11.5" fill="#101828">Risque relatif (RR),</text>
        <text x="234" y="84" font-size="11.5" fill="#101828">incidence directement calculable</text>
        <text x="544" y="70" font-size="11.5" fill="#101828">Odds ratio (OR), estimation</text>
        <text x="544" y="84" font-size="11.5" fill="#101828">du RR si maladie rare</text>
        <circle cx="200" cy="72" r="13" fill="#101828" opacity="0.12"/>
        <text x="196" y="77" font-size="12" font-weight="700" fill="#101828">6</text>

        <text x="14" y="110" font-size="12" fill="#475467">Durée / coût</text>
        <text x="234" y="106" font-size="11.5" fill="#101828">Longue et coûteuse,</text>
        <text x="234" y="120" font-size="11.5" fill="#101828">surtout si maladie rare</text>
        <text x="544" y="106" font-size="11.5" fill="#101828">Rapide et peu coûteuse,</text>
        <text x="544" y="120" font-size="11.5" fill="#101828">adaptée aux maladies rares</text>
        <circle cx="200" cy="108" r="13" fill="#101828" opacity="0.12"/>
        <text x="196" y="113" font-size="12" font-weight="700" fill="#101828">7</text>

        <text x="14" y="164" font-size="12" fill="#475467">Atout principal</text>
        <text x="234" y="160" font-size="11.5" fill="#12a065">Étudie plusieurs maladies</text>
        <text x="234" y="174" font-size="11.5" fill="#12a065">pour une même exposition</text>
        <text x="544" y="160" font-size="11.5" fill="#12a065">Étudie plusieurs expositions</text>
        <text x="544" y="174" font-size="11.5" fill="#12a065">pour une même maladie</text>
        <circle cx="200" cy="162" r="13" fill="#12a065" opacity="0.2"/>
        <text x="196" y="167" font-size="12" font-weight="700" fill="#0a7a4d">8</text>

        <text x="14" y="218" font-size="12" fill="#475467">Limite principale</text>
        <text x="234" y="214" font-size="11.5" fill="#101828">Perdus de vue au cours</text>
        <text x="234" y="228" font-size="11.5" fill="#101828">du suivi prolongé</text>
        <text x="544" y="214" font-size="11.5" fill="#101828">Difficulté à choisir des</text>
        <text x="544" y="228" font-size="11.5" fill="#101828">témoins réellement comparables</text>
        <circle cx="200" cy="216" r="13" fill="#101828" opacity="0.12"/>
        <text x="196" y="221" font-size="12" font-weight="700" fill="#101828">9</text>

        <text x="14" y="272" font-size="12" fill="#475467">Biais spécifique</text>
        <text x="234" y="268" font-size="11.5" fill="#d4380d">Biais de suivi différentiel</text>
        <text x="234" y="282" font-size="11.5" fill="#d4380d">entre groupes exposés</text>
        <text x="544" y="268" font-size="11.5" fill="#d4380d">Biais de mémorisation et</text>
        <text x="544" y="282" font-size="11.5" fill="#d4380d">biais de sélection des témoins</text>
        <circle cx="200" cy="270" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="195" y="275" font-size="12" font-weight="700" fill="#d4380d">10</text>

        <text x="14" y="312" font-size="12" fill="#475467">Fausse causalité</text>
        <text x="234" y="308" font-size="11.5" fill="#475467">Peu probable : l’exposition</text>
        <text x="234" y="322" font-size="11.5" fill="#475467">précède la maladie par construction</text>
        <text x="544" y="308" font-size="11.5" fill="#475467">Possible : incertitude sur la</text>
        <text x="544" y="322" font-size="11.5" fill="#475467">chronologie exposition/maladie</text>
      </g>

      <text x="40" y="674" font-size="12" fill="#8a94a8">Le choix du schéma dépend de la fréquence de la maladie, du délai d’apparition et du nombre de facteurs à étudier.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Cohorte : sélection de sujets sur leur statut d’exposition, exposés et non exposés.' },
    { ref: '2', texte: 'Cohorte : suivi dans le temps pour mesurer la survenue de la maladie dans chaque groupe.' },
    { ref: '3', texte: 'Cas-témoins : sélection de sujets sur leur statut de maladie, cas et témoins.' },
    { ref: '4', texte: 'Cas-témoins : recherche rétrospective de l’exposition passée dans chaque groupe.' },
    { ref: '5', texte: 'Point de départ : l’exposition en cohorte, la maladie en cas-témoins — ceci détermine le sens de l’étude.' },
    { ref: '6', texte: 'La cohorte calcule directement un risque relatif ; l’étude cas-témoins ne fournit qu’un odds ratio, approximation du RR si la maladie est rare.' },
    { ref: '7', texte: 'La cohorte est longue et coûteuse, en particulier pour une maladie rare ; l’étude cas-témoins est rapide et économique.' },
    { ref: '8', texte: 'La cohorte permet d’étudier plusieurs maladies pour une même exposition ; l’étude cas-témoins permet d’étudier plusieurs expositions pour une même maladie.' },
    { ref: '9', texte: 'La cohorte est exposée aux perdus de vue lors d’un suivi prolongé ; l’étude cas-témoins est exposée à la difficulté de constituer un groupe témoin comparable.' },
    { ref: '10', texte: 'Biais spécifiques : suivi différentiel en cohorte, biais de mémorisation (recall bias) et de sélection des témoins en cas-témoins.' },
  ],
};
