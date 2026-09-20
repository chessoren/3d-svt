import type { Schema } from '../../types';

export const schemaTestsDiagnostiques: Schema = {
  id: 'ue4-tests-diagnostiques',
  ue: 'ue4',
  titre: 'Les tests diagnostiques',
  description:
    'Tableau de contingence deux par deux malade / non malade et test positif / négatif, définitions de la sensibilité, de la spécificité et des valeurs prédictives, effet du seuil et influence de la prévalence.',
  categorie: 'Biostatistiques',
  viewBox: '0 0 920 700',
  ficheLiee: 'ue4-tests-diagnostiques',
  motsCles: ['sensibilité', 'spécificité', 'valeur prédictive positive', 'valeur prédictive négative', 'prévalence', 'seuil de positivité'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Les tests diagnostiques</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau A : tableau 2x2 -->
      <g transform="translate(40,64)">
        <rect x="0" y="0" width="420" height="300" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Tableau de contingence</text>

        <g transform="translate(70,60)">
          <text x="120" y="-16" font-size="12" font-weight="600" fill="#101828">Malade</text>
          <text x="120" y="-2" font-size="11" fill="#475467">(référence)</text>
          <text x="90" y="14" font-size="11" font-weight="600" fill="#475467">Oui</text>
          <text x="210" y="14" font-size="11" font-weight="600" fill="#475467">Non</text>

          <line x1="0" y1="20" x2="330" y2="20" stroke="#475467" stroke-width="1.4"/>
          <line x1="0" y1="90" x2="330" y2="90" stroke="#c9d6ff" stroke-width="1.2"/>
          <line x1="0" y1="160" x2="330" y2="160" stroke="#475467" stroke-width="1.4"/>
          <line x1="60" y1="0" x2="60" y2="160" stroke="#475467" stroke-width="1.4"/>
          <line x1="180" y1="0" x2="180" y2="160" stroke="#c9d6ff" stroke-width="1.2"/>
          <line x1="300" y1="0" x2="300" y2="160" stroke="#475467" stroke-width="1.4"/>

          <text x="-2" y="60" font-size="12" font-weight="600" fill="#101828">Test +</text>
          <text x="-2" y="130" font-size="12" font-weight="600" fill="#101828">Test −</text>

          <rect x="60" y="20" width="120" height="70" fill="#d6f5e4"/>
          <text x="105" y="58" font-size="15" font-weight="700" fill="#0f8a58">VP</text>
          <circle cx="150" cy="34" r="12" fill="#0f8a58" opacity="0.3"/>
          <text x="146" y="38" font-size="11" font-weight="700" fill="#0f8a58">1</text>

          <rect x="180" y="20" width="120" height="70" fill="#ffe3df"/>
          <text x="222" y="58" font-size="15" font-weight="700" fill="#d4380d">FP</text>
          <circle cx="270" cy="34" r="12" fill="#d4380d" opacity="0.24"/>
          <text x="266" y="38" font-size="11" font-weight="700" fill="#d4380d">2</text>

          <rect x="60" y="90" width="120" height="70" fill="#ffe3df"/>
          <text x="105" y="128" font-size="15" font-weight="700" fill="#d4380d">FN</text>
          <circle cx="150" cy="146" r="12" fill="#d4380d" opacity="0.24"/>
          <text x="146" y="150" font-size="11" font-weight="700" fill="#d4380d">3</text>

          <rect x="180" y="90" width="120" height="70" fill="#d6f5e4"/>
          <text x="222" y="128" font-size="15" font-weight="700" fill="#0f8a58">VN</text>
          <circle cx="270" cy="146" r="12" fill="#0f8a58" opacity="0.3"/>
          <text x="266" y="150" font-size="11" font-weight="700" fill="#0f8a58">4</text>
        </g>
        <text x="20" y="272" font-size="10.5" fill="#475467">VP : vrai positif  ·  FP : faux positif  ·  FN : faux négatif  ·  VN : vrai négatif</text>
      </g>

      <!-- Panneau B : définitions -->
      <g transform="translate(480,64)">
        <rect x="0" y="0" width="400" height="300" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Indicateurs du test</text>

        <text x="16" y="54" font-size="12.5" font-weight="600" fill="#101828">Sensibilité (Se) = VP / (VP + FN)</text>
        <text x="16" y="72" font-size="11" fill="#475467">Proportion de malades correctement dépistés</text>
        <circle cx="368" cy="48" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="363" y="53" font-size="12" font-weight="700" fill="#175cd3">5</text>

        <text x="16" y="102" font-size="12.5" font-weight="600" fill="#101828">Spécificité (Sp) = VN / (VN + FP)</text>
        <text x="16" y="120" font-size="11" fill="#475467">Proportion de non-malades correctement écartés</text>
        <circle cx="368" cy="96" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="363" y="101" font-size="12" font-weight="700" fill="#175cd3">6</text>

        <text x="16" y="150" font-size="12.5" font-weight="600" fill="#101828">VPP = VP / (VP + FP)</text>
        <text x="16" y="168" font-size="11" fill="#475467">Probabilité d’être malade si le test est positif</text>
        <circle cx="368" cy="144" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="363" y="149" font-size="12" font-weight="700" fill="#7c4df5">7</text>

        <text x="16" y="198" font-size="12.5" font-weight="600" fill="#101828">VPN = VN / (VN + FN)</text>
        <text x="16" y="216" font-size="11" fill="#475467">Probabilité de ne pas être malade si le test est négatif</text>
        <circle cx="368" cy="192" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="363" y="197" font-size="12" font-weight="700" fill="#7c4df5">8</text>

        <text x="16" y="242" font-size="11.5" fill="#8a94a8">Se et Sp sont des propriétés intrinsèques du test.</text>
        <text x="16" y="260" font-size="11.5" fill="#8a94a8">VPP et VPN dépendent en plus de la prévalence.</text>
      </g>

      <!-- Panneau C : effet du seuil -->
      <g transform="translate(40,384)">
        <rect x="0" y="0" width="400" height="150" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Effet du seuil de positivité</text>
        <circle cx="368" cy="20" r="13" fill="#12a065" opacity="0.2"/>
        <text x="363" y="25" font-size="12" font-weight="700" fill="#12a065">9</text>

        <line x1="30" y1="90" x2="30" y2="130" stroke="#101828" stroke-width="1.4"/>
        <line x1="30" y1="130" x2="370" y2="130" stroke="#101828" stroke-width="1.4"/>
        <path d="M 30 100 C 80 60 130 40 180 40 C 230 40 280 70 370 128" fill="none" stroke="#175cd3" stroke-width="2.4"/>
        <text x="34" y="60" font-size="10.5" fill="#175cd3">Se ↑ quand le seuil est abaissé</text>
        <path d="M 30 128 C 100 122 160 90 220 60 C 280 34 320 30 370 30" fill="none" stroke="#e0632f" stroke-width="2.4" stroke-dasharray="3 3"/>
        <text x="220" y="96" font-size="10.5" fill="#e0632f">Sp ↑ quand le seuil est relevé</text>

        <text x="16" y="146" font-size="10.5" fill="#475467">Sensibilité et spécificité varient en sens inverse quand on déplace le seuil.</text>
      </g>

      <!-- Panneau D : influence de la prévalence -->
      <g transform="translate(480,384)">
        <rect x="0" y="0" width="400" height="150" rx="14" fill="#f2f0ff" stroke="#dcd6fb"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Influence de la prévalence</text>
        <circle cx="368" cy="20" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="363" y="25" font-size="12" font-weight="700" fill="#7c4df5">10</text>

        <text x="16" y="54" font-size="11.5" fill="#475467">Pour un même test (Se et Sp fixes) :</text>
        <text x="30" y="76" font-size="11.5" fill="#475467">• prévalence faible → VPP basse, VPN élevée</text>
        <text x="30" y="96" font-size="11.5" fill="#475467">• prévalence élevée → VPP élevée, VPN basse</text>
        <text x="16" y="124" font-size="10.5" fill="#5f3dc4">C’est pourquoi la VPP d’un test de dépistage en</text>
        <text x="16" y="140" font-size="10.5" fill="#5f3dc4">population générale reste souvent modeste.</text>
      </g>

      <!-- Bandeau formule prévalence -->
      <g transform="translate(40,556)">
        <rect x="0" y="0" width="840" height="80" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="20" y="32" font-size="12.5" font-weight="600" fill="#101828">Prévalence = (VP + FN) / (VP + FP + FN + VN)</text>
        <text x="20" y="58" font-size="11.5" fill="#475467">Proportion de sujets réellement malades dans la population étudiée, avant tout dépistage.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Vrai positif (VP) : sujet malade correctement dépisté par un test positif.' },
    { ref: '2', texte: 'Faux positif (FP) : sujet non malade dont le test est pourtant positif.' },
    { ref: '3', texte: 'Faux négatif (FN) : sujet malade dont le test est pourtant négatif.' },
    { ref: '4', texte: 'Vrai négatif (VN) : sujet non malade correctement écarté par un test négatif.' },
    { ref: '5', texte: 'Sensibilité : capacité du test à détecter les sujets réellement malades.' },
    { ref: '6', texte: 'Spécificité : capacité du test à écarter correctement les sujets réellement non malades.' },
    { ref: '7', texte: 'Valeur prédictive positive (VPP) : probabilité d’être réellement malade sachant que le test est positif.' },
    { ref: '8', texte: 'Valeur prédictive négative (VPN) : probabilité de ne réellement pas être malade sachant que le test est négatif.' },
    { ref: '9', texte: 'Abaisser le seuil de positivité augmente la sensibilité mais diminue la spécificité, et réciproquement.' },
    { ref: '10', texte: 'Les valeurs prédictives, contrairement à Se et Sp, dépendent fortement de la prévalence de la maladie dans la population testée.' },
  ],
};
