import type { Schema } from '../../types';

export const schemaLiaisonPeptidique: Schema = {
  id: 'bioch-liaison-peptidique',
  ue: 'bioch',
  titre: 'La liaison peptidique',
  description:
    'Formation de la liaison peptidique par condensation de deux acides aminés, puis géométrie du plan peptidique et angles de rotation.',
  categorie: 'Biochimie structurale',
  viewBox: '0 0 920 560',
  ficheLiee: 'bioch-acides-amines',
  motsCles: ['liaison peptidique', 'condensation', 'plan peptidique', 'angles phi et psi', 'mésomérie'],
  svg: `
    <rect x="0" y="0" width="920" height="560" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="44" font-size="19" font-weight="600" fill="#101828">1 · Réaction de condensation</text>
      <line x1="40" y1="56" x2="180" y2="56" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Premier acide aminé -->
      <g transform="translate(60,100)">
        <rect x="-14" y="-16" width="250" height="96" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="8" y="8" font-size="15" fill="#475467">H</text>
        <text x="30" y="8" font-size="15" fill="#475467">₂</text>
        <text x="42" y="8" font-size="15" fill="#475467">N</text>
        <line x1="58" y1="4" x2="84" y2="20" stroke="#475467" stroke-width="2"/>
        <text x="88" y="28" font-size="16" font-weight="600" fill="#101828">Cα</text>
        <line x1="98" y1="12" x2="98" y2="-8" stroke="#475467" stroke-width="2"/>
        <text x="90" y="-14" font-size="14" fill="#8a94a8">H</text>
        <line x1="98" y1="36" x2="98" y2="58" stroke="#475467" stroke-width="2"/>
        <text x="90" y="74" font-size="15" font-weight="600" fill="#e0632f">R₁</text>
        <line x1="116" y1="22" x2="146" y2="22" stroke="#475467" stroke-width="2"/>
        <text x="150" y="28" font-size="16" fill="#101828">C</text>
        <line x1="160" y1="14" x2="178" y2="0" stroke="#475467" stroke-width="2"/>
        <line x1="164" y1="20" x2="182" y2="6" stroke="#475467" stroke-width="2"/>
        <text x="184" y="2" font-size="15" fill="#d4380d">O</text>
        <line x1="160" y1="30" x2="180" y2="42" stroke="#475467" stroke-width="2"/>
        <text x="184" y="50" font-size="15" fill="#175cd3">OH</text>
        <circle cx="200" cy="46" r="13" fill="#175cd3" opacity="0.14"/>
        <text x="196" y="51" font-size="12" font-weight="700" fill="#175cd3">1</text>
      </g>

      <text x="332" y="150" font-size="30" fill="#98a2b3">+</text>

      <!-- Second acide aminé -->
      <g transform="translate(380,100)">
        <rect x="-14" y="-16" width="250" height="96" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="4" y="8" font-size="15" fill="#175cd3">H</text>
        <text x="18" y="8" font-size="15" fill="#175cd3">₂</text>
        <text x="30" y="8" font-size="15" fill="#175cd3">N</text>
        <circle cx="22" cy="-6" r="13" fill="#175cd3" opacity="0.14"/>
        <text x="18" y="-1" font-size="12" font-weight="700" fill="#175cd3">2</text>
        <line x1="46" y1="4" x2="72" y2="20" stroke="#475467" stroke-width="2"/>
        <text x="76" y="28" font-size="16" font-weight="600" fill="#101828">Cα</text>
        <line x1="86" y1="12" x2="86" y2="-8" stroke="#475467" stroke-width="2"/>
        <text x="78" y="-14" font-size="14" fill="#8a94a8">H</text>
        <line x1="86" y1="36" x2="86" y2="58" stroke="#475467" stroke-width="2"/>
        <text x="78" y="74" font-size="15" font-weight="600" fill="#e0632f">R₂</text>
        <line x1="104" y1="22" x2="134" y2="22" stroke="#475467" stroke-width="2"/>
        <text x="138" y="28" font-size="16" fill="#101828">C</text>
        <line x1="148" y1="14" x2="166" y2="0" stroke="#475467" stroke-width="2"/>
        <line x1="152" y1="20" x2="170" y2="6" stroke="#475467" stroke-width="2"/>
        <text x="172" y="2" font-size="15" fill="#d4380d">O</text>
        <line x1="148" y1="30" x2="168" y2="42" stroke="#475467" stroke-width="2"/>
        <text x="172" y="50" font-size="15" fill="#475467">OH</text>
      </g>

      <!-- Flèche de réaction -->
      <defs>
        <marker id="fl-pept" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
      </defs>
      <line x1="400" y1="246" x2="520" y2="246" stroke="#101828" stroke-width="2.2" marker-end="url(#fl-pept)"/>
      <text x="410" y="236" font-size="13" fill="#475467">condensation</text>
      <text x="530" y="252" font-size="15" font-weight="600" fill="#12a065">− H₂O</text>
      <circle cx="516" cy="270" r="13" fill="#12a065" opacity="0.16"/>
      <text x="512" y="275" font-size="12" font-weight="700" fill="#12a065">3</text>

      <text x="40" y="332" font-size="19" font-weight="600" fill="#101828">2 · Le dipeptide et son plan peptidique</text>
      <line x1="40" y1="344" x2="180" y2="344" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Dipeptide avec plan peptidique -->
      <g transform="translate(70,380)">
        <rect x="128" y="-24" width="196" height="108" rx="14" fill="#eaefff" stroke="#c9d6ff" stroke-dasharray="7 5"/>
        <text x="152" y="102" font-size="12.5" fill="#175cd3">Plan peptidique rigide (6 atomes coplanaires)</text>
        <circle cx="146" cy="-24" r="13" fill="#175cd3" opacity="0.14"/>
        <text x="142" y="-19" font-size="12" font-weight="700" fill="#175cd3">4</text>

        <text x="10" y="34" font-size="15" fill="#475467">H₂N</text>
        <line x1="48" y1="30" x2="76" y2="30" stroke="#475467" stroke-width="2"/>
        <text x="82" y="36" font-size="16" font-weight="600" fill="#101828">Cα</text>
        <line x1="96" y1="42" x2="96" y2="66" stroke="#475467" stroke-width="2"/>
        <text x="88" y="82" font-size="15" font-weight="600" fill="#e0632f">R₁</text>

        <line x1="112" y1="30" x2="152" y2="30" stroke="#101828" stroke-width="2.4"/>
        <text x="118" y="18" font-size="11.5" fill="#8a94a8">ψ</text>
        <text x="158" y="36" font-size="16" fill="#101828">C</text>
        <line x1="166" y1="22" x2="182" y2="4" stroke="#d4380d" stroke-width="2"/>
        <line x1="171" y1="27" x2="187" y2="9" stroke="#d4380d" stroke-width="2"/>
        <text x="188" y="4" font-size="15" fill="#d4380d">O</text>

        <line x1="172" y1="32" x2="214" y2="32" stroke="#7c4df5" stroke-width="3.4"/>
        <line x1="172" y1="38" x2="214" y2="38" stroke="#7c4df5" stroke-width="1.4" stroke-dasharray="5 4"/>
        <text x="176" y="60" font-size="12" font-weight="600" fill="#7c4df5">C — N</text>

        <text x="220" y="38" font-size="16" fill="#101828">N</text>
        <line x1="228" y1="26" x2="228" y2="8" stroke="#475467" stroke-width="2"/>
        <text x="222" y="2" font-size="14" fill="#8a94a8">H</text>
        <line x1="238" y1="34" x2="276" y2="34" stroke="#101828" stroke-width="2.4"/>
        <text x="248" y="22" font-size="11.5" fill="#8a94a8">φ</text>
        <text x="282" y="40" font-size="16" font-weight="600" fill="#101828">Cα</text>
        <line x1="296" y1="46" x2="296" y2="70" stroke="#475467" stroke-width="2"/>
        <text x="288" y="86" font-size="15" font-weight="600" fill="#e0632f">R₂</text>
        <line x1="312" y1="34" x2="348" y2="34" stroke="#475467" stroke-width="2"/>
        <text x="354" y="40" font-size="15" fill="#475467">COOH</text>
        <circle cx="398" cy="34" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="394" y="39" font-size="12" font-weight="700" fill="#e0632f">5</text>
      </g>

      <!-- Encadré mésomérie -->
      <g transform="translate(620,368)">
        <rect x="0" y="0" width="264" height="140" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="18" y="30" font-size="14" font-weight="600" fill="#101828">Conséquences de la mésomérie</text>
        <circle cx="240" cy="24" r="13" fill="#7c4df5" opacity="0.16"/>
        <text x="236" y="29" font-size="12" font-weight="700" fill="#7c4df5">6</text>
        <text x="18" y="56" font-size="12.5" fill="#475467">• Liaison C–N partiellement double</text>
        <text x="18" y="78" font-size="12.5" fill="#475467">• Aucune rotation autour de C–N</text>
        <text x="18" y="100" font-size="12.5" fill="#475467">• Configuration trans très majoritaire</text>
        <text x="18" y="122" font-size="12.5" fill="#475467">• Seuls φ et ψ restent mobiles</text>
      </g>

      <text x="40" y="532" font-size="12" fill="#8a94a8">Sens de lecture : extrémité N-terminale (gauche) vers extrémité C-terminale (droite).</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Groupement carboxyle du premier acide aminé : il perd son hydroxyle.' },
    { ref: '2', texte: 'Groupement aminé du second acide aminé : il perd un hydrogène.' },
    { ref: '3', texte: 'Une molécule d’eau est libérée : la réaction est une condensation.' },
    { ref: '4', texte: 'Plan peptidique : les six atomes Cα, C, O, N, H et Cα sont coplanaires.' },
    { ref: '5', texte: 'Extrémité C-terminale, qui porte le groupement carboxyle libre.' },
    { ref: '6', texte: 'La mésomérie rigidifie la liaison et limite les conformations accessibles.' },
  ],
};
