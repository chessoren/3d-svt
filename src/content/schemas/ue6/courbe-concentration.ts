import type { Schema } from '../../types';

export const schemaCourbeConcentration: Schema = {
  id: 'ue6-courbe-concentration',
  ue: 'ue6',
  titre: 'Courbe de concentration plasmatique en fonction du temps',
  description:
    'Évolution de la concentration plasmatique après une prise orale unique : phases d’absorption et d’élimination, concentration maximale, temps du maximum, aire sous la courbe, demi-vie, marge thérapeutique et accumulation lors de doses répétées.',
  categorie: 'Pharmacocinétique',
  viewBox: '0 0 920 700',
  ficheLiee: 'ue6-elimination-parametres',
  motsCles: ['concentration plasmatique', 'Cmax', 'Tmax', 'aire sous la courbe', 'demi-vie', 'marge thérapeutique', 'accumulation', 'doses répétées'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue6-courbe-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#12a065"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">1 · Prise orale unique</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(100,66)">
        <!-- Marge thérapeutique -->
        <rect x="0" y="120" width="620" height="90" fill="#eafbf1"/>
        <text x="626" y="132" font-size="11.5" fill="#0a7a4d">seuil toxique</text>
        <text x="626" y="216" font-size="11.5" fill="#b54708">seuil efficace</text>
        <circle cx="650" cy="126" r="13" fill="#0a7a4d" opacity="0.2"/>
        <text x="645" y="131" font-size="12" font-weight="700" fill="#0a7a4d">7</text>

        <!-- Axes -->
        <line x1="0" y1="0" x2="0" y2="360" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="360" x2="620" y2="360" stroke="#475467" stroke-width="1.6"/>
        <text x="-40" y="4" font-size="11.5" fill="#475467">Cmax</text>
        <line x1="-6" y1="60" x2="620" y2="60" stroke="#e4e7ec" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="-92" y="200" font-size="13" fill="#101828" transform="rotate(-90 -92 200)">Concentration plasmatique (mg/L)</text>
        <text x="280" y="392" font-size="13" fill="#101828">Temps (heures)</text>

        <text x="-8" y="378" font-size="11.5" fill="#475467">0</text>
        <text x="94" y="378" font-size="11.5" fill="#475467">2</text>
        <line x1="100" y1="360" x2="100" y2="366" stroke="#475467"/>
        <text x="194" y="378" font-size="11.5" fill="#475467">4</text>
        <line x1="200" y1="360" x2="200" y2="366" stroke="#475467"/>
        <text x="294" y="378" font-size="11.5" fill="#475467">6</text>
        <line x1="300" y1="360" x2="300" y2="366" stroke="#475467"/>
        <text x="394" y="378" font-size="11.5" fill="#475467">8</text>
        <line x1="400" y1="360" x2="400" y2="366" stroke="#475467"/>
        <text x="494" y="378" font-size="11.5" fill="#475467">10</text>
        <line x1="500" y1="360" x2="500" y2="366" stroke="#475467"/>
        <text x="594" y="378" font-size="11.5" fill="#475467">12</text>
        <line x1="600" y1="360" x2="600" y2="366" stroke="#475467"/>

        <!-- Aire sous la courbe -->
        <path d="M0,360 C40,360 60,120 110,66 C150,24 190,60 230,110 C270,158 300,220 340,270 C380,312 430,336 500,348 C540,354 570,357 600,359 L600,360 Z"
          fill="#c9d6ff" opacity="0.45"/>

        <!-- Courbe -->
        <path d="M0,360 C40,360 60,120 110,66 C150,24 190,60 230,110 C270,158 300,220 340,270 C380,312 430,336 500,348 C540,354 570,357 600,359"
          fill="none" stroke="#175cd3" stroke-width="3.2" stroke-linecap="round"/>

        <!-- Phase d'absorption -->
        <line x1="10" y1="30" x2="90" y2="30" stroke="#12a065" stroke-width="1.2" marker-end="url(#ue6-courbe-fleche)"/>
        <text x="10" y="20" font-size="11.5" fill="#0a7a4d">phase d’absorption</text>
        <circle cx="40" cy="200" r="13" fill="#12a065" opacity="0.2"/>
        <text x="36" y="205" font-size="12" font-weight="700" fill="#0a7a4d">1</text>

        <!-- Phase d'élimination -->
        <text x="330" y="120" font-size="11.5" fill="#e0632f">phase d’élimination</text>
        <circle cx="380" cy="240" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="376" y="245" font-size="12" font-weight="700" fill="#e0632f">2</text>

        <!-- Cmax / Tmax -->
        <line x1="110" y1="66" x2="110" y2="360" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="0" y1="66" x2="110" y2="66" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="110" cy="66" r="6" fill="#101828"/>
        <circle cx="140" cy="66" r="13" fill="#101828" opacity="0.18"/>
        <text x="135" y="71" font-size="12" font-weight="700" fill="#101828">3</text>
        <circle cx="110" cy="330" r="13" fill="#101828" opacity="0.14"/>
        <text x="105" y="335" font-size="12" font-weight="700" fill="#101828">4</text>

        <!-- ASC pastille -->
        <circle cx="220" cy="270" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="216" y="275" font-size="12" font-weight="700" fill="#175cd3">5</text>
        <text x="200" y="300" font-size="11.5" fill="#175cd3">aire sous la courbe (ASC)</text>

        <!-- Demi-vie -->
        <line x1="230" y1="110" x2="340" y2="110" stroke="#7c4df5" stroke-width="1.2"/>
        <line x1="230" y1="104" x2="230" y2="116" stroke="#7c4df5" stroke-width="1.4"/>
        <line x1="340" y1="104" x2="340" y2="116" stroke="#7c4df5" stroke-width="1.4"/>
        <text x="248" y="98" font-size="11" fill="#5a2fc7">t½</text>
        <circle cx="286" cy="110" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="281" y="115" font-size="12" font-weight="700" fill="#5a2fc7">6</text>
      </g>

      <text x="40" y="482" font-size="19" font-weight="600" fill="#101828">2 · Accumulation lors de doses répétées</text>
      <line x1="40" y1="494" x2="180" y2="494" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(100,514)">
        <line x1="0" y1="0" x2="0" y2="140" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="140" x2="700" y2="140" stroke="#475467" stroke-width="1.6"/>
        <text x="300" y="164" font-size="13" fill="#101828">Temps (prises répétées toutes les t½)</text>
        <text x="-92" y="80" font-size="13" fill="#101828" transform="rotate(-90 -92 80)">Concentration</text>

        <line x1="0" y1="140" x2="700" y2="140" stroke="#e4e7ec" stroke-width="1"/>
        <line x1="0" y1="70" x2="700" y2="70" stroke="#e0632f" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="706" y="74" font-size="11" fill="#e0632f">plateau (état d’équilibre)</text>

        <path d="M0,140 Q20,60 40,90 Q60,110 80,30 Q100,-10 120,20 Q140,45 160,-20 Q180,-50 200,-20 Q220,10 240,-50 Q260,-80 280,-50 Q300,-20 320,-72 Q340,-100 360,-72 Q380,-45 400,-90 Q420,-115 440,-90 Q460,-65 480,-100 Q500,-125 520,-100 Q540,-78 560,-100 Q580,-120 600,-100 Q620,-82 640,-100 Q660,-115 680,-100 L700,-100"
          fill="none" stroke="#e0632f" stroke-width="3" stroke-linecap="round" transform="translate(0,120)"/>

        <circle cx="120" cy="50" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="116" y="55" font-size="12" font-weight="700" fill="#e0632f">8</text>
        <text x="140" y="55" font-size="11.5" fill="#e0632f">chaque nouvelle prise avant élimination complète</text>

        <circle cx="600" cy="16" r="13" fill="#101828" opacity="0.16"/>
        <text x="595" y="21" font-size="12" font-weight="700" fill="#101828">9</text>
        <text x="500" y="0" font-size="11.5" fill="#101828">plateau atteint après 4 à 5 demi-vies</text>
      </g>

      <text x="40" y="700" font-size="12" fill="#8a94a8">La concentration au plateau dépend de la dose, de l’intervalle entre les prises et de la demi-vie d’élimination.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Phase d’absorption : la vitesse d’entrée du médicament dans le sang dépasse sa vitesse d’élimination.' },
    { ref: '2', texte: 'Phase d’élimination : la concentration décroît une fois l’absorption terminée, en général selon une cinétique exponentielle.' },
    { ref: '3', texte: 'Cmax : concentration plasmatique maximale atteinte après la prise.' },
    { ref: '4', texte: 'Tmax : temps nécessaire pour atteindre la concentration maximale.' },
    { ref: '5', texte: 'Aire sous la courbe (ASC) : reflète la quantité totale de médicament ayant atteint la circulation générale.' },
    { ref: '6', texte: 'Demi-vie d’élimination (t½) : temps nécessaire pour que la concentration plasmatique diminue de moitié.' },
    { ref: '7', texte: 'Marge (ou fenêtre) thérapeutique : intervalle de concentrations entre le seuil efficace et le seuil toxique.' },
    { ref: '8', texte: 'Lors de prises répétées rapprochées, chaque nouvelle dose s’ajoute avant élimination complète de la précédente : la concentration s’accumule.' },
    { ref: '9', texte: 'L’état d’équilibre (plateau) est atteint après environ 4 à 5 demi-vies d’administration répétée à intervalle constant.' },
  ],
};
