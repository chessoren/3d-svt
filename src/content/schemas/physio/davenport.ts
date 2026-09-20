import type { Schema } from '../../types';

export const schemaDavenport: Schema = {
  id: 'physio-davenport',
  ue: 'physio',
  titre: 'Le diagramme de Davenport',
  description:
    'Bicarbonates plasmatiques en fonction du pH, isobares de pression partielle en dioxyde de carbone, zone normale, et les quatre types de désordres acido-basiques avec leur compensation.',
  categorie: 'Physiologie de l’équilibre acido-basique',
  viewBox: '0 0 920 720',
  ficheLiee: 'physio-equilibre-acido-basique',
  motsCles: ['diagramme de Davenport', 'équilibre acido-basique', 'bicarbonates', 'isobare de PCO2', 'acidose', 'alcalose', 'compensation'],
  svg: `
    <rect x="0" y="0" width="920" height="720" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Diagramme pH / bicarbonates et isobares de PCO₂</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(140,74)">
        <!-- axes -->
        <line x1="0" y1="0" x2="0" y2="350" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="350" x2="700" y2="350" stroke="#475467" stroke-width="1.6"/>
        <text x="-118" y="170" font-size="13" fill="#101828" transform="rotate(-90 -118 170)">Bicarbonates HCO₃⁻ (mEq/L)</text>
        <text x="300" y="392" font-size="13" fill="#101828">pH sanguin</text>

        <!-- graduations Y -->
        <text x="-24" y="354" font-size="11" fill="#475467">0</text>
        <line x1="0" y1="280" x2="700" y2="280" stroke="#eef1f6" stroke-width="1"/>
        <text x="-28" y="284" font-size="11" fill="#475467">10</text>
        <line x1="0" y1="210" x2="700" y2="210" stroke="#eef1f6" stroke-width="1"/>
        <text x="-28" y="214" font-size="11" fill="#475467">20</text>
        <line x1="0" y1="182" x2="700" y2="182" stroke="#f3d3c2" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="-28" y="186" font-size="11" fill="#e0632f">24</text>
        <line x1="0" y1="140" x2="700" y2="140" stroke="#eef1f6" stroke-width="1"/>
        <text x="-28" y="144" font-size="11" fill="#475467">30</text>
        <line x1="0" y1="70" x2="700" y2="70" stroke="#eef1f6" stroke-width="1"/>
        <text x="-28" y="74" font-size="11" fill="#475467">40</text>
        <text x="-28" y="4" font-size="11" fill="#475467">50</text>

        <!-- graduations X -->
        <text x="-8" y="366" font-size="11" fill="#475467">7,0</text>
        <line x1="350" y1="350" x2="350" y2="356" stroke="#e0632f"/>
        <text x="334" y="382" font-size="11" fill="#e0632f">7,40</text>
        <text x="675" y="366" font-size="11" fill="#475467">7,8</text>
        <line x1="350" y1="0" x2="350" y2="350" stroke="#f3d3c2" stroke-width="1" stroke-dasharray="3 3"/>

        <!-- isobares de PCO2 -->
        <path d="M0,316.5 L87.5,308 L175,297 L262.5,283 L350,266 L437.5,244 L525,217 L612.5,182 L700,139"
          fill="none" stroke="#98a2b3" stroke-width="2"/>
        <circle cx="700" cy="139" r="12" fill="#98a2b3" opacity="0.26"/>
        <text x="696" y="143" font-size="11" font-weight="700" fill="#475467">2</text>

        <path d="M0,283 L87.5,266 L175,244 L262.5,216 L350,182 L437.5,138 L525,83 L612.5,15"
          fill="none" stroke="#e0632f" stroke-width="2.6"/>
        <circle cx="612" cy="15" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="608" y="19" font-size="11" font-weight="700" fill="#e0632f">3</text>

        <path d="M0,250 L87.5,224 L175,191 L262.5,150 L350,98 L437.5,32"
          fill="none" stroke="#98a2b3" stroke-width="2"/>
        <circle cx="437" cy="32" r="12" fill="#98a2b3" opacity="0.26"/>
        <text x="433" y="36" font-size="11" font-weight="700" fill="#475467">4</text>

        <path d="M0,216 L87.5,181 L175,138 L262.5,83 L350,14"
          fill="none" stroke="#98a2b3" stroke-width="2"/>
        <circle cx="350" cy="14" r="12" fill="#98a2b3" opacity="0.26"/>
        <text x="346" y="18" font-size="11" font-weight="700" fill="#475467">5</text>

        <!-- zone et point normaux -->
        <ellipse cx="350" cy="182" rx="16" ry="13" fill="#12a065" opacity="0.24" stroke="#12a065"/>
        <circle cx="350" cy="182" r="5" fill="#12a065"/>
        <circle cx="380" cy="160" r="13" fill="#12a065" opacity="0.24"/>
        <text x="375" y="165" font-size="12" font-weight="700" fill="#12a065">1</text>
        <circle cx="386" cy="195" r="12" fill="#7c4df5" opacity="0.22"/>
        <text x="381" y="199" font-size="11" font-weight="700" fill="#7c4df5">6</text>

        <!-- quatre désordres -->
        <line x1="350" y1="182" x2="219" y2="245" stroke="#d4380d" stroke-width="2" stroke-dasharray="5 3"/>
        <circle cx="219" cy="245" r="6" fill="#d4380d"/>
        <circle cx="196" cy="262" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="191" y="267" font-size="12" font-weight="700" fill="#d4380d">7</text>
        <text x="140" y="290" font-size="11" fill="#d4380d">acidose métabolique</text>

        <line x1="350" y1="182" x2="481" y2="112" stroke="#175cd3" stroke-width="2" stroke-dasharray="5 3"/>
        <circle cx="481" cy="112" r="6" fill="#175cd3"/>
        <circle cx="504" cy="96" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="499" y="101" font-size="12" font-weight="700" fill="#175cd3">8</text>
        <text x="460" y="80" font-size="11" fill="#175cd3">alcalose métabolique</text>

        <line x1="350" y1="182" x2="262" y2="140" stroke="#f79009" stroke-width="2" stroke-dasharray="5 3"/>
        <circle cx="262" cy="140" r="6" fill="#f79009"/>
        <circle cx="238" cy="126" r="13" fill="#f79009" opacity="0.26"/>
        <text x="233" y="131" font-size="12" font-weight="700" fill="#b54708">9</text>
        <text x="130" y="122" font-size="11" fill="#b54708">acidose respiratoire</text>

        <line x1="350" y1="182" x2="437" y2="245" stroke="#7c4df5" stroke-width="2" stroke-dasharray="5 3"/>
        <circle cx="437" cy="245" r="6" fill="#7c4df5"/>
        <circle cx="462" cy="258" r="13" fill="#7c4df5" opacity="0.24"/>
        <text x="457" y="263" font-size="12" font-weight="700" fill="#7c4df5">10</text>
        <text x="480" y="274" font-size="11" fill="#7c4df5">alcalose respiratoire</text>

        <text x="612" y="132" font-size="11" fill="#475467">20</text>
        <text x="614" y="8" font-size="11" fill="#e0632f">40</text>
        <text x="440" y="26" font-size="11" fill="#475467">60</text>
        <text x="352" y="8" font-size="11" fill="#475467">80 mmHg</text>
      </g>

      <text x="40" y="500" font-size="19" font-weight="600" fill="#101828">2 · Les quatre désordres acido-basiques</text>
      <line x1="40" y1="512" x2="180" y2="512" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,532)" font-size="12" fill="#101828">
        <rect x="0" y="0" width="400" height="130" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
        <circle cx="20" cy="22" r="10" fill="#d4380d" opacity="0.2"/>
        <text x="17" y="26" font-size="10.5" font-weight="700" fill="#d4380d">7</text>
        <text x="36" y="26" font-weight="600">Acidose métabolique</text>
        <text x="18" y="46" font-size="11">HCO₃⁻ ↓ primaire, pH ↓.</text>
        <text x="18" y="66">Compensation respiratoire : hyperventilation, PCO₂ ↓.</text>

        <circle cx="20" cy="88" r="10" fill="#f79009" opacity="0.26"/>
        <text x="17" y="92" font-size="10.5" font-weight="700" fill="#b54708">9</text>
        <text x="36" y="92" font-weight="600">Acidose respiratoire</text>
        <text x="18" y="112" font-size="11">PCO₂ ↑ primaire, pH ↓.</text>

        <rect x="420" y="0" width="400" height="130" rx="12" fill="#eef4ff" stroke="#c9d6ff"/>
        <circle cx="440" cy="22" r="10" fill="#175cd3" opacity="0.2"/>
        <text x="437" y="26" font-size="10.5" font-weight="700" fill="#175cd3">8</text>
        <text x="456" y="26" font-weight="600">Alcalose métabolique</text>
        <text x="438" y="46" font-size="11">HCO₃⁻ ↑ primaire, pH ↑.</text>
        <text x="438" y="66">Compensation respiratoire : hypoventilation, PCO₂ ↑.</text>

        <circle cx="440" cy="88" r="10" fill="#7c4df5" opacity="0.24"/>
        <text x="437" y="92" font-size="10.5" font-weight="700" fill="#7c4df5">10</text>
        <text x="456" y="92" font-weight="600">Alcalose respiratoire</text>
        <text x="438" y="112" font-size="11">PCO₂ ↓ primaire, pH ↑.</text>
      </g>

      <text x="40" y="690" font-size="11.5" fill="#475467">Les acidoses et alcaloses respiratoires sont compensées par le rein : réabsorption ou excrétion rénale de HCO₃⁻.</text>
      <text x="40" y="708" font-size="12" fill="#8a94a8">Point normal : pH 7,40, HCO₃⁻ 24 mEq/L, PCO₂ 40 mmHg (calculé par l’équation de Henderson-Hasselbalch).</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Point normal : pH 7,40, HCO₃⁻ 24 mEq/L, PCO₂ 40 mmHg.' },
    { ref: '2', texte: 'Isobare PCO₂ = 20 mmHg.' },
    { ref: '3', texte: 'Isobare PCO₂ = 40 mmHg : isobare normale, passe par le point normal.' },
    { ref: '4', texte: 'Isobare PCO₂ = 60 mmHg.' },
    { ref: '5', texte: 'Isobare PCO₂ = 80 mmHg.' },
    { ref: '6', texte: 'Zone normale : pH compris entre 7,38 et 7,42.' },
    { ref: '7', texte: 'Acidose métabolique : baisse primaire des bicarbonates, pH abaissé, compensée par une hyperventilation (baisse de la PCO₂).' },
    { ref: '8', texte: 'Alcalose métabolique : hausse primaire des bicarbonates, pH élevé, compensée par une hypoventilation (hausse de la PCO₂).' },
    { ref: '9', texte: 'Acidose respiratoire : hausse primaire de la PCO₂, pH abaissé, compensée par une réabsorption rénale accrue de bicarbonates.' },
    { ref: '10', texte: 'Alcalose respiratoire : baisse primaire de la PCO₂, pH élevé, compensée par une excrétion rénale accrue de bicarbonates.' },
  ],
};
