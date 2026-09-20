import type { Schema } from '../../types';

export const schemaImmunoglobuline: Schema = {
  id: 'ue5-immunoglobuline',
  ue: 'ue5',
  titre: 'Structure d’une immunoglobuline',
  description:
    'Organisation moléculaire d’une immunoglobuline de type IgG : chaînes lourdes et légères, domaines variables et constants, ponts disulfure, région hypervariable, fragments Fab et Fc, et comparaison des cinq isotypes.',
  categorie: 'Immunologie générale',
  viewBox: '0 0 920 720',
  ficheLiee: 'ue5-immunoglobulines',
  motsCles: ['immunoglobuline', 'anticorps', 'chaîne lourde', 'chaîne légère', 'fragment Fab', 'fragment Fc', 'isotype', 'pont disulfure'],
  svg: `
    <rect x="0" y="0" width="920" height="720" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">1 · Structure générale d’une immunoglobuline (IgG)</text>
      <line x1="40" y1="46" x2="220" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Antigène venant se fixer sur le paratope -->
      <g transform="translate(600,58)">
        <polygon points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8" fill="#12a065" opacity="0.75"/>
        <text x="-16" y="-24" font-size="12.5" font-weight="600" fill="#0a7a4d">Antigène</text>
      </g>
      <line x1="592" y1="70" x2="514" y2="106" stroke="#12a065" stroke-width="1.6" stroke-dasharray="4 4"/>
      <circle cx="560" cy="60" r="13" fill="#12a065" opacity="0.22"/>
      <text x="555" y="65" font-size="12" font-weight="700" fill="#0a7a4d">10</text>

      <!-- Région hypervariable (CDR), pointe gauche -->
      <path d="M 244 96 L 252 104 L 244 112 L 252 120" fill="none" stroke="#d4380d" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="228" cy="106" r="13" fill="#d4380d" opacity="0.2"/>
      <text x="224" y="111" font-size="12" font-weight="700" fill="#d4380d">5</text>

      <!-- Bras gauche : chaîne lourde (VH-CH1) et chaîne légère (VL-CL) -->
      <line x1="252" y1="104" x2="372" y2="246" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>
      <line x1="268" y1="122" x2="372" y2="258" stroke="#7c4df5" stroke-width="5" stroke-linecap="round"/>

      <!-- Bras droit : symétrique -->
      <line x1="508" y1="104" x2="388" y2="246" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>
      <line x1="492" y1="122" x2="388" y2="258" stroke="#7c4df5" stroke-width="5" stroke-linecap="round"/>
      <text x="440" y="150" font-size="11.5" fill="#8a94a8">(bras symétrique)</text>

      <!-- Tige : deux chaînes lourdes en région Fc -->
      <line x1="374" y1="246" x2="374" y2="400" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>
      <line x1="386" y1="246" x2="386" y2="400" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>

      <!-- Pastille chaîne lourde / légère -->
      <circle cx="374" cy="352" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="370" y="357" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="392" y="357" font-size="12.5" fill="#175cd3">Chaîne lourde</text>

      <circle cx="320" cy="188" r="13" fill="#7c4df5" opacity="0.22"/>
      <text x="316" y="193" font-size="12" font-weight="700" fill="#5a2fc7">2</text>
      <text x="188" y="190" font-size="12.5" fill="#5a2fc7">Chaîne légère</text>

      <!-- Domaines sur le bras gauche -->
      <text x="286" y="140" font-size="12.5" font-weight="600" fill="#101828">VH</text>
      <circle cx="300" cy="150" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="296" y="155" font-size="12" font-weight="700" fill="#175cd3">3</text>
      <text x="184" y="150" font-size="12.5" fill="#101828">Domaine variable (VH/VL)</text>

      <text x="298" y="168" font-size="12.5" font-weight="600" fill="#101828">VL</text>
      <text x="330" y="204" font-size="12.5" font-weight="600" fill="#101828">CH1</text>
      <text x="342" y="222" font-size="12.5" font-weight="600" fill="#101828">CL</text>

      <!-- Domaines constants de la tige -->
      <text x="392" y="296" font-size="12.5" font-weight="600" fill="#101828">CH2</text>
      <circle cx="424" cy="292" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="420" y="297" font-size="12" font-weight="700" fill="#e0632f">4</text>
      <text x="440" y="297" font-size="12.5" fill="#e0632f">Domaine constant (CH2, CH3, CL)</text>
      <text x="392" y="356" font-size="12.5" font-weight="600" fill="#101828">CH3</text>

      <!-- Ponts disulfure interchaînes -->
      <line x1="368" y1="262" x2="392" y2="262" stroke="#b58a00" stroke-width="2.4"/>
      <line x1="368" y1="272" x2="392" y2="272" stroke="#b58a00" stroke-width="2.4"/>
      <text x="396" y="270" font-size="11.5" fill="#8a6300">S–S</text>
      <circle cx="424" cy="264" r="13" fill="#b58a00" opacity="0.22"/>
      <text x="420" y="269" font-size="12" font-weight="700" fill="#8a6300">6</text>
      <text x="440" y="269" font-size="12.5" fill="#8a6300">Pont disulfure interchaîne lourde-lourde</text>

      <!-- Région charnière -->
      <ellipse cx="380" cy="252" rx="34" ry="20" fill="none" stroke="#98a2b3" stroke-width="1.6" stroke-dasharray="5 4"/>
      <circle cx="352" cy="234" r="13" fill="#98a2b3" opacity="0.26"/>
      <text x="348" y="239" font-size="12" font-weight="700" fill="#475467">7</text>
      <text x="440" y="235" font-size="12.5" fill="#475467">Région charnière (hinge), flexible</text>

      <!-- Fragment Fab (bras gauche) -->
      <path d="M 232 92 L 216 92 L 216 262 L 232 262" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="196" cy="176" r="13" fill="#475467" opacity="0.18"/>
      <text x="192" y="181" font-size="12" font-weight="700" fill="#475467">8</text>
      <text x="150" y="230" font-size="13" font-weight="600" fill="#475467">Fab</text>

      <!-- Fragment Fc (tige) -->
      <path d="M 398 250 L 414 250 L 414 400 L 398 400" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="434" cy="330" r="13" fill="#475467" opacity="0.18"/>
      <text x="430" y="335" font-size="12" font-weight="700" fill="#475467">9</text>
      <text x="448" y="335" font-size="13" font-weight="600" fill="#475467">Fc</text>

      <text x="40" y="430" font-size="12" fill="#8a94a8">Structure en Y : deux chaînes lourdes (≈ 50 kDa) et deux chaînes légères (≈ 25 kDa), reliées par des ponts disulfure.</text>

      <text x="40" y="466" font-size="19" font-weight="600" fill="#101828">2 · Comparaison des cinq isotypes</text>
      <line x1="40" y1="478" x2="220" y2="478" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Tableau des isotypes -->
      <g>
        <rect x="40" y="492" width="840" height="176" rx="10" fill="#ffffff" stroke="#d0d5dd"/>
        <rect x="40" y="492" width="840" height="30" fill="#f2f4f7"/>
        <line x1="40" y1="522" x2="880" y2="522" stroke="#d0d5dd"/>
        <line x1="40" y1="560" x2="880" y2="560" stroke="#e4e7ec"/>
        <line x1="40" y1="598" x2="880" y2="598" stroke="#e4e7ec"/>
        <line x1="40" y1="636" x2="880" y2="636" stroke="#e4e7ec"/>
        <line x1="200" y1="492" x2="200" y2="668" stroke="#d0d5dd"/>
        <line x1="336" y1="492" x2="336" y2="668" stroke="#e4e7ec"/>
        <line x1="472" y1="492" x2="472" y2="668" stroke="#e4e7ec"/>
        <line x1="608" y1="492" x2="608" y2="668" stroke="#e4e7ec"/>
        <line x1="744" y1="492" x2="744" y2="668" stroke="#e4e7ec"/>

        <text x="52" y="512" font-size="13" font-weight="600" fill="#101828">Caractéristique</text>
        <text x="255" y="512" font-size="13" font-weight="700" fill="#175cd3">IgG</text>
        <text x="390" y="512" font-size="13" font-weight="700" fill="#12a065">IgA</text>
        <text x="527" y="512" font-size="13" font-weight="700" fill="#e0632f">IgM</text>
        <text x="663" y="512" font-size="13" font-weight="700" fill="#7c4df5">IgD</text>
        <text x="800" y="512" font-size="13" font-weight="700" fill="#d6336c">IgE</text>

        <text x="52" y="545" font-size="12" fill="#475467">Structure</text>
        <text x="212" y="540" font-size="11.5" fill="#101828">Monomère</text>
        <text x="348" y="540" font-size="11.5" fill="#101828">Monomère ou</text>
        <text x="348" y="554" font-size="11.5" fill="#101828">dimère sécrétoire</text>
        <text x="484" y="540" font-size="11.5" fill="#101828">Pentamère</text>
        <text x="620" y="540" font-size="11.5" fill="#101828">Monomère</text>
        <text x="756" y="540" font-size="11.5" fill="#101828">Monomère</text>

        <text x="52" y="582" font-size="12" fill="#475467">Concentration sérique</text>
        <text x="212" y="582" font-size="11.5" fill="#101828">Majoritaire (≈ 75 %)</text>
        <text x="348" y="582" font-size="11.5" fill="#101828">≈ 15 %</text>
        <text x="484" y="582" font-size="11.5" fill="#101828">≈ 10 %</text>
        <text x="620" y="582" font-size="11.5" fill="#101828">Traces</text>
        <text x="756" y="582" font-size="11.5" fill="#101828">Traces</text>

        <text x="52" y="620" font-size="12" fill="#475467">Passage placentaire</text>
        <text x="212" y="620" font-size="11.5" fill="#12a065">Oui, seul isotype</text>
        <text x="348" y="620" font-size="11.5" fill="#d4380d">Non</text>
        <text x="484" y="620" font-size="11.5" fill="#d4380d">Non</text>
        <text x="620" y="620" font-size="11.5" fill="#d4380d">Non</text>
        <text x="756" y="620" font-size="11.5" fill="#d4380d">Non</text>

        <text x="52" y="652" font-size="12" fill="#475467">Fonction</text>
        <text x="52" y="666" font-size="12" fill="#475467">principale</text>
        <text x="212" y="646" font-size="11.5" fill="#101828">Réponse secondaire,</text>
        <text x="212" y="660" font-size="11.5" fill="#101828">opsonisation</text>
        <text x="348" y="646" font-size="11.5" fill="#101828">Immunité des</text>
        <text x="348" y="660" font-size="11.5" fill="#101828">muqueuses</text>
        <text x="484" y="646" font-size="11.5" fill="#101828">Réponse primaire,</text>
        <text x="484" y="660" font-size="11.5" fill="#101828">active le complément</text>
        <text x="620" y="646" font-size="11.5" fill="#101828">Récepteur du</text>
        <text x="620" y="660" font-size="11.5" fill="#101828">lymphocyte B naïf</text>
        <text x="756" y="646" font-size="11.5" fill="#101828">Hypersensibilité</text>
        <text x="756" y="660" font-size="11.5" fill="#101828">immédiate</text>
      </g>

      <text x="40" y="700" font-size="12" fill="#8a94a8">Chaque bras Fab reconnaît spécifiquement un épitope antigénique : l’IgG monomérique est ainsi bivalente.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Chaîne lourde (H) : environ 50 kDa, deux exemplaires identiques par immunoglobuline.' },
    { ref: '2', texte: 'Chaîne légère (L) : environ 25 kDa, de type kappa ou lambda, deux exemplaires identiques.' },
    { ref: '3', texte: 'Domaine variable (VH et VL) : séquence différente selon le clone, forme le site de reconnaissance de l’antigène.' },
    { ref: '4', texte: 'Domaine constant (CH2, CH3 côté lourd, CL côté léger) : séquence identique au sein d’un isotype donné.' },
    { ref: '5', texte: 'Région hypervariable (CDR) : boucles très variables portées par les domaines variables, déterminent la spécificité.' },
    { ref: '6', texte: 'Ponts disulfure interchaînes lourde-lourde : stabilisent l’assemblage au niveau de la région charnière.' },
    { ref: '7', texte: 'Région charnière (hinge) : segment souple qui autorise le mouvement des deux fragments Fab.' },
    { ref: '8', texte: 'Fragment Fab : porte le site de liaison à l’antigène, comprend VH-CH1 et VL-CL.' },
    { ref: '9', texte: 'Fragment Fc : assure les fonctions effectrices (fixation aux récepteurs Fc, activation du complément).' },
    { ref: '10', texte: 'Site de fixation de l’antigène (paratope), formé par les CDR des domaines VH et VL.' },
  ],
};
