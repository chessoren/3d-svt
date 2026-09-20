import type { Schema } from '../../types';

export const schemaMitose: Schema = {
  id: 'biocell-mitose',
  ue: 'biocell',
  titre: 'Les étapes de la mitose',
  description:
    'Séquence des cinq phases de la mitose — prophase, prométaphase, métaphase, anaphase, télophase — suivie de la cytodièse, avec le devenir du fuseau et des chromosomes.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 460',
  ficheLiee: 'biocell-cycle-cellulaire',
  motsCles: ['mitose', 'prophase', 'prométaphase', 'métaphase', 'anaphase', 'télophase', 'cytodièse', 'fuseau mitotique'],
  svg: `
    <rect x="0" y="0" width="920" height="460" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">Les étapes de la mitose</text>
      <line x1="40" y1="46" x2="200" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Prophase -->
      <g transform="translate(30,80)">
        <rect x="0" y="0" width="150" height="200" rx="12" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="12" y="22" font-size="12.5" font-weight="600" fill="#101828">Prophase</text>
        <circle cx="130" cy="16" r="12" fill="#175cd3" opacity="0.2"/>
        <text x="126" y="21" font-size="10.5" font-weight="700" fill="#175cd3">1</text>
        <ellipse cx="75" cy="100" rx="55" ry="60" fill="none" stroke="#98a2b3" stroke-width="1.6"/>
        <ellipse cx="75" cy="100" rx="34" ry="34" fill="#e7ecff" stroke="#5a72e0" stroke-width="1.6" stroke-dasharray="2 3"/>
        <path d="M 60 90 q 8 -10 0 -20" stroke="#e0632f" stroke-width="3" fill="none"/>
        <path d="M 90 110 q -8 10 0 20" stroke="#e0632f" stroke-width="3" fill="none"/>
        <path d="M 65 115 q 10 6 0 16" stroke="#7c4df5" stroke-width="3" fill="none"/>
        <rect x="70" y="65" width="6" height="6" fill="#175cd3"/>
        <rect x="70" y="53" width="6" height="6" fill="#175cd3"/>
        <text x="12" y="180" font-size="10.5" fill="#475467">Condensation de la</text>
        <text x="12" y="196" font-size="10.5" fill="#475467">chromatine, duplication</text>
      </g>

      <!-- Prométaphase -->
      <g transform="translate(200,80)">
        <rect x="0" y="0" width="150" height="200" rx="12" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="12" y="22" font-size="12.5" font-weight="600" fill="#101828">Prométaphase</text>
        <circle cx="130" cy="16" r="12" fill="#7c4df5" opacity="0.2"/>
        <text x="126" y="21" font-size="10.5" font-weight="700" fill="#7c4df5">2</text>
        <ellipse cx="75" cy="100" rx="55" ry="60" fill="none" stroke="#98a2b3" stroke-width="1.6"/>
        <path d="M 20 65 q 10 -20 -6 -35" stroke="#5a72e0" stroke-width="1.2" fill="none" stroke-dasharray="2 2"/>
        <path d="M 130 65 q -10 -20 6 -35" stroke="#5a72e0" stroke-width="1.2" fill="none" stroke-dasharray="2 2"/>
        <g stroke="#175cd3" stroke-width="1" opacity="0.8">
          <line x1="30" y1="70" x2="75" y2="100"/>
          <line x1="30" y1="130" x2="75" y2="100"/>
          <line x1="120" y1="70" x2="75" y2="100"/>
          <line x1="120" y1="130" x2="75" y2="100"/>
        </g>
        <path d="M 58 85 q 8 -8 0 -16" stroke="#e0632f" stroke-width="3" fill="none"/>
        <path d="M 92 115 q -8 8 0 16" stroke="#e0632f" stroke-width="3" fill="none"/>
        <path d="M 60 110 q 10 6 0 14" stroke="#7c4df5" stroke-width="3" fill="none"/>
        <text x="12" y="180" font-size="10.5" fill="#475467">Fragmentation de</text>
        <text x="12" y="196" font-size="10.5" fill="#475467">l’enveloppe nucléaire</text>
      </g>

      <!-- Métaphase -->
      <g transform="translate(370,80)">
        <rect x="0" y="0" width="150" height="200" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="12" y="22" font-size="12.5" font-weight="600" fill="#101828">Métaphase</text>
        <circle cx="130" cy="16" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="126" y="21" font-size="10.5" font-weight="700" fill="#e0632f">3</text>
        <ellipse cx="75" cy="100" rx="55" ry="60" fill="none" stroke="#98a2b3" stroke-width="1.6"/>
        <circle cx="20" cy="100" r="3" fill="#101828"/>
        <circle cx="130" cy="100" r="3" fill="#101828"/>
        <line x1="75" y1="70" x2="75" y2="130" stroke="#e0632f" stroke-width="2.6"/>
        <g stroke="#175cd3" stroke-width="1">
          <line x1="20" y1="100" x2="70" y2="78"/>
          <line x1="20" y1="100" x2="70" y2="122"/>
          <line x1="130" y1="100" x2="80" y2="78"/>
          <line x1="130" y1="100" x2="80" y2="122"/>
        </g>
        <rect x="70" y="60" width="8" height="16" fill="#e0632f"/>
        <rect x="72" y="86" width="6" height="14" fill="#e0632f"/>
        <rect x="70" y="104" width="8" height="16" fill="#7c4df5"/>
        <rect x="72" y="122" width="6" height="12" fill="#7c4df5"/>
        <circle cx="75" cy="100" r="12" fill="#e0632f" opacity="0.18"/>
        <text x="71" y="105" font-size="10.5" font-weight="700" fill="#e0632f">4</text>
        <text x="12" y="180" font-size="10.5" fill="#475467">Alignement sur la</text>
        <text x="12" y="196" font-size="10.5" fill="#475467">plaque équatoriale</text>
      </g>

      <!-- Anaphase -->
      <g transform="translate(540,80)">
        <rect x="0" y="0" width="150" height="200" rx="12" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="12" y="22" font-size="12.5" font-weight="600" fill="#101828">Anaphase</text>
        <circle cx="130" cy="16" r="12" fill="#12a065" opacity="0.2"/>
        <text x="126" y="21" font-size="10.5" font-weight="700" fill="#0a7a4d">5</text>
        <ellipse cx="75" cy="100" rx="65" ry="55" fill="none" stroke="#98a2b3" stroke-width="1.6"/>
        <circle cx="14" cy="100" r="3" fill="#101828"/>
        <circle cx="136" cy="100" r="3" fill="#101828"/>
        <g stroke="#175cd3" stroke-width="1">
          <line x1="14" y1="100" x2="42" y2="82"/>
          <line x1="14" y1="100" x2="42" y2="118"/>
          <line x1="136" y1="100" x2="108" y2="82"/>
          <line x1="136" y1="100" x2="108" y2="118"/>
        </g>
        <rect x="38" y="76" width="7" height="14" fill="#e0632f"/>
        <rect x="38" y="94" width="7" height="14" fill="#e0632f"/>
        <rect x="38" y="112" width="7" height="14" fill="#7c4df5"/>
        <rect x="105" y="76" width="7" height="14" fill="#e0632f"/>
        <rect x="105" y="94" width="7" height="14" fill="#e0632f"/>
        <rect x="105" y="112" width="7" height="14" fill="#7c4df5"/>
        <circle cx="75" cy="140" r="12" fill="#12a065" opacity="0.2"/>
        <text x="71" y="145" font-size="10.5" font-weight="700" fill="#0a7a4d">6</text>
        <text x="12" y="180" font-size="10.5" fill="#475467">Migration des chromatides</text>
        <text x="12" y="196" font-size="10.5" fill="#475467">sœurs vers les pôles</text>
      </g>

      <!-- Télophase et cytodièse -->
      <g transform="translate(710,80)">
        <rect x="0" y="0" width="180" height="200" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="12" y="22" font-size="12.5" font-weight="600" fill="#101828">Télophase et cytodièse</text>
        <circle cx="160" cy="16" r="12" fill="#5a2fc7" opacity="0.2"/>
        <text x="156" y="21" font-size="10.5" font-weight="700" fill="#5a2fc7">7</text>
        <ellipse cx="55" cy="100" rx="42" ry="46" fill="none" stroke="#98a2b3" stroke-width="1.6"/>
        <ellipse cx="125" cy="100" rx="42" ry="46" fill="none" stroke="#98a2b3" stroke-width="1.6"/>
        <ellipse cx="55" cy="100" rx="22" ry="22" fill="#e7ecff" stroke="#5a72e0" stroke-width="1.4" stroke-dasharray="2 3"/>
        <ellipse cx="125" cy="100" rx="22" ry="22" fill="#e7ecff" stroke="#5a72e0" stroke-width="1.4" stroke-dasharray="2 3"/>
        <line x1="90" y1="60" x2="90" y2="140" stroke="#d6336c" stroke-width="3" stroke-dasharray="4 3"/>
        <circle cx="90" cy="100" r="12" fill="#d6336c" opacity="0.22"/>
        <text x="86" y="105" font-size="10.5" font-weight="700" fill="#d6336c">8</text>
        <text x="12" y="180" font-size="10.5" fill="#475467">Reformation des noyaux,</text>
        <text x="12" y="196" font-size="10.5" fill="#475467">sillon de division (anneau d’actine)</text>
      </g>

      <!-- Frise chronologique -->
      <g transform="translate(30,310)">
        <line x1="0" y1="0" x2="860" y2="0" stroke="#d0d5dd" stroke-width="2"/>
        <circle cx="0" cy="0" r="4" fill="#101828"/>
        <circle cx="860" cy="0" r="4" fill="#101828"/>
        <text x="0" y="-10" font-size="10.5" fill="#8a94a8">début de la mitose</text>
        <text x="740" y="-10" font-size="10.5" fill="#8a94a8">deux cellules filles</text>
      </g>

      <!-- Fuseau mitotique -->
      <g transform="translate(30,360)">
        <rect x="0" y="0" width="860" height="80" rx="14" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="18" y="24" font-size="12.5" font-weight="600" fill="#101828">Devenir du fuseau mitotique</text>
        <circle cx="270" cy="18" r="12" fill="#98a2b3" opacity="0.24"/>
        <text x="266" y="23" font-size="10.5" font-weight="700" fill="#475467">9</text>
        <text x="18" y="46" font-size="11.5" fill="#475467">Formé dès la prométaphase à partir des microtubules issus des deux centrosomes, il attire</text>
        <text x="18" y="64" font-size="11.5" fill="#475467">les chromatides vers les pôles opposés en anaphase, puis se dépolymérise en télophase.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Prophase : condensation des chromosomes bichromatidiens, début de formation du fuseau.' },
    { ref: '2', texte: 'Prométaphase : rupture de l’enveloppe nucléaire, attachement des chromosomes aux microtubules.' },
    { ref: '3', texte: 'Métaphase : alignement des chromosomes sur la plaque équatoriale.' },
    { ref: '4', texte: 'Chaque chromosome métaphasique est formé de deux chromatides sœurs reliées au centromère.' },
    { ref: '5', texte: 'Anaphase : clivage des centromères, séparation des chromatides sœurs.' },
    { ref: '6', texte: 'Migration des chromatides, devenues chromosomes indépendants, vers les pôles opposés.' },
    { ref: '7', texte: 'Télophase : décondensation des chromosomes, reformation de deux enveloppes nucléaires.' },
    { ref: '8', texte: 'Cytodièse : division du cytoplasme par un anneau contractile d’actine et de myosine.' },
    { ref: '9', texte: 'Le fuseau mitotique, issu des centrosomes, organise et déplace les chromosomes.' },
  ],
};
