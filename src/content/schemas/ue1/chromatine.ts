import type { Schema } from '../../types';

export const schemaChromatine: Schema = {
  id: 'ue1-chromatine',
  ue: 'ue1',
  titre: 'Niveaux de compaction de la chromatine',
  description:
    'De l’ADN nu au chromosome métaphasique : nucléosome, octamère d’histones, fibre de 30 nanomètres et boucles ancrées sur la matrice protéique.',
  categorie: 'Biologie moléculaire',
  viewBox: '0 0 920 620',
  ficheLiee: 'ue1-organisation-genome',
  motsCles: ['chromatine', 'nucléosome', 'histones', 'fibre de 30 nm', 'boucles', 'chromosome métaphasique', 'euchromatine'],
  svg: `
    <rect x="0" y="0" width="920" height="620" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue1-chromatine-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#98a2b3"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">Niveaux de compaction de la chromatine</text>
      <line x1="40" y1="52" x2="230" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="72" font-size="13" fill="#475467">De l’ADN nu (2 nm) au chromosome métaphasique (≈ 1400 nm), cinq degrés d’enroulement successifs</text>

      <!-- Panneau 1 : ADN nu -->
      <text x="55" y="128" font-size="13.5" font-weight="600" fill="#101828">ADN nu</text>
      <circle cx="60" cy="150" r="13" fill="#e0632f" opacity="0.85"/>
      <text x="55" y="155" font-size="12" font-weight="700" fill="#ffffff">1</text>
      <line x1="96" y1="150" x2="96" y2="300" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
      <line x1="136" y1="150" x2="136" y2="300" stroke="#e0632f" stroke-width="4" stroke-linecap="round"/>
      <line x1="96" y1="165" x2="136" y2="165" stroke="#98a2b3" stroke-width="2"/>
      <line x1="96" y1="195" x2="136" y2="195" stroke="#98a2b3" stroke-width="2"/>
      <line x1="96" y1="225" x2="136" y2="225" stroke="#98a2b3" stroke-width="2"/>
      <line x1="96" y1="255" x2="136" y2="255" stroke="#98a2b3" stroke-width="2"/>
      <line x1="96" y1="285" x2="136" y2="285" stroke="#98a2b3" stroke-width="2"/>
      <text x="75" y="322" font-size="12" fill="#475467">≈ 2 nm</text>

      <line x1="192" y1="225" x2="210" y2="225" stroke="#98a2b3" stroke-width="2" marker-end="url(#ue1-chromatine-fleche)"/>

      <!-- Panneau 2 : nucléosome / collier de perles -->
      <text x="212" y="128" font-size="13.5" font-weight="600" fill="#101828">Nucléosome</text>
      <circle cx="228" cy="178" r="13" fill="#e0632f" opacity="0.85"/>
      <text x="223" y="183" font-size="12" font-weight="700" fill="#ffffff">2</text>
      <ellipse cx="250" cy="190" rx="27" ry="21" fill="none" stroke="#175cd3" stroke-width="1.4" stroke-dasharray="3 3"/>
      <circle cx="250" cy="190" r="22" fill="#ffd8a8" stroke="#e0632f" stroke-width="2"/>
      <ellipse cx="288" cy="232" rx="27" ry="21" fill="none" stroke="#175cd3" stroke-width="1.4" stroke-dasharray="3 3"/>
      <circle cx="288" cy="232" r="22" fill="#ffd8a8" stroke="#e0632f" stroke-width="2"/>
      <ellipse cx="250" cy="274" rx="27" ry="21" fill="none" stroke="#175cd3" stroke-width="1.4" stroke-dasharray="3 3"/>
      <circle cx="250" cy="274" r="22" fill="#ffd8a8" stroke="#e0632f" stroke-width="2"/>
      <line x1="270" y1="204" x2="272" y2="218" stroke="#175cd3" stroke-width="2"/>
      <line x1="272" y1="246" x2="268" y2="258" stroke="#175cd3" stroke-width="2"/>
      <polygon points="250,212 244,224 256,224" fill="#7c4df5"/>
      <circle cx="222" cy="222" r="13" fill="#7c4df5" opacity="0.85"/>
      <text x="217" y="227" font-size="12" font-weight="700" fill="#ffffff">4</text>
      <circle cx="330" cy="300" r="13" fill="#475467" opacity="0.85"/>
      <text x="325" y="305" font-size="12" font-weight="700" fill="#ffffff">5</text>
      <text x="212" y="322" font-size="12" fill="#475467">≈ 11 nm — collier de perles</text>

      <line x1="364" y1="225" x2="382" y2="225" stroke="#98a2b3" stroke-width="2" marker-end="url(#ue1-chromatine-fleche)"/>

      <!-- Panneau 3 : fibre de 30 nm -->
      <text x="395" y="128" font-size="13.5" font-weight="600" fill="#101828">Fibre de 30 nm</text>
      <circle cx="400" cy="150" r="13" fill="#7c4df5" opacity="0.85"/>
      <text x="395" y="155" font-size="12" font-weight="700" fill="#ffffff">6</text>
      <ellipse cx="460" cy="175" rx="48" ry="20" fill="#eaefff" stroke="#7c4df5" stroke-width="2"/>
      <ellipse cx="460" cy="203" rx="48" ry="20" fill="#eaefff" stroke="#7c4df5" stroke-width="2"/>
      <ellipse cx="460" cy="231" rx="48" ry="20" fill="#eaefff" stroke="#7c4df5" stroke-width="2"/>
      <ellipse cx="460" cy="259" rx="48" ry="20" fill="#eaefff" stroke="#7c4df5" stroke-width="2"/>
      <ellipse cx="460" cy="287" rx="48" ry="20" fill="#eaefff" stroke="#7c4df5" stroke-width="2"/>
      <text x="418" y="322" font-size="12" fill="#475467">≈ 30 nm — solénoïde</text>

      <line x1="536" y1="225" x2="554" y2="225" stroke="#98a2b3" stroke-width="2" marker-end="url(#ue1-chromatine-fleche)"/>

      <!-- Panneau 4 : boucles chromatiniennes -->
      <text x="560" y="128" font-size="13.5" font-weight="600" fill="#101828">Boucles</text>
      <circle cx="572" cy="150" r="13" fill="#12a065" opacity="0.85"/>
      <text x="567" y="155" font-size="12" font-weight="700" fill="#ffffff">7</text>
      <line x1="632" y1="150" x2="632" y2="300" stroke="#101828" stroke-width="4" stroke-linecap="round"/>
      <path d="M632,170 C580,175 580,205 632,200" fill="none" stroke="#12a065" stroke-width="2.2"/>
      <path d="M632,210 C690,215 690,245 632,240" fill="none" stroke="#12a065" stroke-width="2.2"/>
      <path d="M632,250 C580,255 580,285 632,280" fill="none" stroke="#12a065" stroke-width="2.2"/>
      <text x="558" y="322" font-size="11.5" fill="#475467">Matrice protéique</text>

      <line x1="708" y1="225" x2="726" y2="225" stroke="#98a2b3" stroke-width="2" marker-end="url(#ue1-chromatine-fleche)"/>

      <!-- Panneau 5 : chromosome métaphasique -->
      <text x="732" y="128" font-size="13" font-weight="600" fill="#101828">Chromosome métaphasique</text>
      <circle cx="750" cy="150" r="13" fill="#175cd3" opacity="0.85"/>
      <text x="745" y="155" font-size="12" font-weight="700" fill="#ffffff">8</text>
      <line x1="770" y1="150" x2="804" y2="225" stroke="#175cd3" stroke-width="14" stroke-linecap="round"/>
      <line x1="804" y1="225" x2="838" y2="300" stroke="#175cd3" stroke-width="14" stroke-linecap="round"/>
      <line x1="838" y1="150" x2="804" y2="225" stroke="#e0632f" stroke-width="14" stroke-linecap="round"/>
      <line x1="804" y1="225" x2="770" y2="300" stroke="#e0632f" stroke-width="14" stroke-linecap="round"/>
      <circle cx="770" cy="150" r="8" fill="#175cd3" stroke="#ffffff" stroke-width="2"/>
      <circle cx="838" cy="300" r="8" fill="#175cd3" stroke="#ffffff" stroke-width="2"/>
      <circle cx="838" cy="150" r="8" fill="#e0632f" stroke="#ffffff" stroke-width="2"/>
      <circle cx="770" cy="300" r="8" fill="#e0632f" stroke="#ffffff" stroke-width="2"/>
      <circle cx="804" cy="225" r="10" fill="#101828"/>
      <circle cx="804" cy="255" r="13" fill="#101828" opacity="0.9"/>
      <text x="799" y="260" font-size="12" font-weight="700" fill="#ffffff">9</text>
      <text x="768" y="322" font-size="11.5" fill="#475467">≈ 1400 nm de diamètre</text>

      <!-- Zoom : octamère d'histones -->
      <text x="120" y="392" font-size="14" font-weight="600" fill="#101828">Zoom : octamère d’histones</text>
      <circle cx="110" cy="400" r="13" fill="#7c4df5" opacity="0.85"/>
      <text x="105" y="405" font-size="12" font-weight="700" fill="#ffffff">3</text>
      <ellipse cx="200" cy="460" rx="82" ry="82" fill="none" stroke="#175cd3" stroke-width="1.6" stroke-dasharray="4 3"/>
      <circle cx="255" cy="460" r="16" fill="#175cd3"/>
      <text x="247" y="464" font-size="9.5" font-weight="700" fill="#ffffff">2A</text>
      <circle cx="145" cy="460" r="16" fill="#175cd3"/>
      <text x="137" y="464" font-size="9.5" font-weight="700" fill="#ffffff">2A</text>
      <circle cx="239" cy="421" r="16" fill="#12a065"/>
      <text x="231" y="425" font-size="9.5" font-weight="700" fill="#ffffff">2B</text>
      <circle cx="161" cy="499" r="16" fill="#12a065"/>
      <text x="153" y="503" font-size="9.5" font-weight="700" fill="#ffffff">2B</text>
      <circle cx="200" cy="405" r="16" fill="#7c4df5"/>
      <text x="194" y="409" font-size="10.5" font-weight="700" fill="#ffffff">3</text>
      <circle cx="200" cy="515" r="16" fill="#7c4df5"/>
      <text x="194" y="519" font-size="10.5" font-weight="700" fill="#ffffff">3</text>
      <circle cx="161" cy="421" r="16" fill="#e0632f"/>
      <text x="155" y="425" font-size="10.5" font-weight="700" fill="#ffffff">4</text>
      <circle cx="239" cy="499" r="16" fill="#e0632f"/>
      <text x="233" y="503" font-size="10.5" font-weight="700" fill="#ffffff">4</text>
      <text x="118" y="558" font-size="11.5" fill="#475467">2× H2A · 2× H2B · 2× H3 · 2× H4</text>

      <!-- Encadré euchromatine / hétérochromatine -->
      <g transform="translate(400,380)">
        <rect x="0" y="0" width="480" height="178" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="18" y="28" font-size="14" font-weight="600" fill="#101828">Compaction et activité génique</text>
        <text x="18" y="56" font-size="12.5" fill="#475467">• Euchromatine : chromatine décondensée, accessible,</text>
        <text x="30" y="74" font-size="12.5" fill="#475467">transcriptionnellement active.</text>
        <text x="18" y="98" font-size="12.5" fill="#475467">• Hétérochromatine : chromatine condensée, peu</text>
        <text x="30" y="116" font-size="12.5" fill="#475467">accessible, transcriptionnellement silencieuse.</text>
        <text x="18" y="140" font-size="12.5" fill="#475467">• Le degré de compaction varie selon le cycle</text>
        <text x="30" y="158" font-size="12.5" fill="#475467">cellulaire et l’activité transcriptionnelle du gène.</text>
      </g>

      <text x="40" y="602" font-size="12" fill="#8a94a8">Compaction totale entre l’ADN nu et le chromosome métaphasique : environ 10 000 fois.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'ADN nu : double hélice de 2 nanomètres de diamètre, sans protéine associée.' },
    { ref: '2', texte: 'Nucléosome : ADN enroulé sur un octamère d’histones, unité de base de la chromatine (11 nm).' },
    { ref: '3', texte: 'Octamère d’histones : huit protéines — deux exemplaires chacune de H2A, H2B, H3 et H4.' },
    { ref: '4', texte: 'Histone H1 : histone de liaison qui stabilise l’ADN à l’entrée et à la sortie du nucléosome.' },
    { ref: '5', texte: 'Collier de perles : succession de nucléosomes reliés par de l’ADN de liaison (linker).' },
    { ref: '6', texte: 'Fibre de 30 nanomètres : enroulement du collier de perles en solénoïde, stabilisé par H1.' },
    { ref: '7', texte: 'Boucles chromatiniennes : la fibre de 30 nm forme des boucles ancrées sur une matrice protéique.' },
    { ref: '8', texte: 'Chromosome métaphasique : degré maximal de condensation, visible en métaphase de la mitose.' },
    { ref: '9', texte: 'Centromère : région de constriction unissant les deux chromatides sœurs, ancre le kinétochore.' },
  ],
};
