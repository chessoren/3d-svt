import type { Schema } from '../../types';

export const schemaDoubleHelice: Schema = {
  id: 'ue1-double-helice',
  ue: 'ue1',
  titre: 'Structure de l’ADN : double hélice antiparallèle',
  description:
    'Squelette sucre-phosphate, appariement des bases par liaisons hydrogène, grand et petit sillon, et polarité 5′–3′ des deux brins.',
  categorie: 'Biologie moléculaire',
  viewBox: '0 0 920 640',
  ficheLiee: 'ue1-acides-nucleiques',
  motsCles: ['ADN', 'double hélice', 'liaison phosphodiester', 'appariement des bases', 'grand sillon', 'petit sillon', 'antiparallèle'],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="44" font-size="19" font-weight="600" fill="#101828">Double hélice de l’ADN : deux brins antiparallèles</text>
      <line x1="40" y1="56" x2="230" y2="56" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="76" font-size="13" fill="#475467">Squelette sucre-phosphate, appariement des bases et sillons</text>

      <!-- Extrémités et sens de lecture -->
      <line x1="300" y1="90" x2="300" y2="140" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>
      <line x1="600" y1="90" x2="600" y2="140" stroke="#e0632f" stroke-width="6" stroke-linecap="round"/>
      <line x1="320" y1="500" x2="320" y2="550" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>
      <line x1="580" y1="500" x2="580" y2="550" stroke="#e0632f" stroke-width="6" stroke-linecap="round"/>

      <circle cx="255" cy="90" r="13" fill="#101828" opacity="0.85"/>
      <text x="250" y="95" font-size="12" font-weight="700" fill="#ffffff">8</text>
      <text x="270" y="95" font-size="14" font-weight="700" fill="#101828">5′</text>

      <circle cx="665" cy="90" r="13" fill="#101828" opacity="0.85"/>
      <text x="660" y="95" font-size="12" font-weight="700" fill="#ffffff">9</text>
      <text x="608" y="95" font-size="14" font-weight="700" fill="#101828">3′</text>

      <text x="270" y="572" font-size="14" font-weight="700" fill="#101828">3′</text>
      <text x="608" y="572" font-size="14" font-weight="700" fill="#101828">5′</text>

      <!-- Squelettes (brin bleu et brin orange) -->
      <path d="M300,140 C300,160 320,160 320,180 C320,200 300,200 300,220 C300,240 280,240 280,260 C280,280 300,280 300,300 C300,320 320,320 320,340 C320,360 300,360 300,380 C300,400 280,400 280,420 C280,440 300,440 300,460 C300,480 320,480 320,500"
        fill="none" stroke="#175cd3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M600,140 C600,160 580,160 580,180 C580,200 600,200 600,220 C600,240 620,240 620,260 C620,280 600,280 600,300 C600,320 580,320 580,340 C580,360 600,360 600,380 C600,400 620,400 620,420 C620,440 600,440 600,460 C600,480 580,480 580,500"
        fill="none" stroke="#e0632f" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Rung y=140 : A-T -->
      <line x1="300" y1="140" x2="340" y2="140" stroke="#475467" stroke-width="2"/>
      <line x1="600" y1="140" x2="560" y2="140" stroke="#475467" stroke-width="2"/>
      <circle cx="340" cy="140" r="9" fill="#175cd3"/>
      <circle cx="560" cy="140" r="9" fill="#e0632f"/>
      <text x="336" y="126" font-size="12" font-weight="700" fill="#175cd3">A</text>
      <text x="556" y="126" font-size="12" font-weight="700" fill="#e0632f">T</text>
      <line x1="349" y1="136" x2="551" y2="136" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="349" y1="144" x2="551" y2="144" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="450" cy="120" r="13" fill="#175cd3" opacity="0.85"/>
      <text x="445" y="125" font-size="12" font-weight="700" fill="#ffffff">4</text>
      <text x="465" y="125" font-size="12" fill="#475467">paire A–T (2 liaisons H)</text>
      <circle cx="336" cy="140" r="13" fill="#175cd3" opacity="0.16"/>
      <text x="332" y="145" font-size="12" font-weight="700" fill="#175cd3">3</text>

      <!-- Rung y=180 : G-C, petit sillon -->
      <line x1="320" y1="180" x2="360" y2="180" stroke="#475467" stroke-width="2"/>
      <line x1="580" y1="180" x2="540" y2="180" stroke="#475467" stroke-width="2"/>
      <circle cx="360" cy="180" r="9" fill="#12a065"/>
      <circle cx="540" cy="180" r="9" fill="#7c4df5"/>
      <text x="356" y="200" font-size="12" font-weight="700" fill="#12a065">G</text>
      <text x="536" y="200" font-size="12" font-weight="700" fill="#7c4df5">C</text>
      <line x1="369" y1="174" x2="531" y2="174" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="369" y1="180" x2="531" y2="180" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="369" y1="186" x2="531" y2="186" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="120" y="176" font-size="13" font-weight="600" fill="#b42318">Petit sillon</text>
      <line x1="200" y1="180" x2="318" y2="180" stroke="#b42318" stroke-width="1.6" stroke-dasharray="2 3"/>
      <circle cx="100" cy="169" r="13" fill="#b42318" opacity="0.85"/>
      <text x="95" y="174" font-size="12" font-weight="700" fill="#ffffff">7</text>

      <!-- Rung y=220 : A-T, phosphate -->
      <line x1="300" y1="220" x2="340" y2="220" stroke="#475467" stroke-width="2"/>
      <line x1="600" y1="220" x2="560" y2="220" stroke="#475467" stroke-width="2"/>
      <circle cx="340" cy="220" r="9" fill="#175cd3"/>
      <circle cx="560" cy="220" r="9" fill="#e0632f"/>
      <text x="336" y="206" font-size="12" font-weight="700" fill="#175cd3">A</text>
      <text x="556" y="206" font-size="12" font-weight="700" fill="#e0632f">T</text>
      <line x1="349" y1="216" x2="551" y2="216" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="349" y1="224" x2="551" y2="224" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="300" cy="220" r="7" fill="#e0632f"/>
      <text x="120" y="236" font-size="13" font-weight="600" fill="#e0632f">Squelette phosphodiester</text>
      <line x1="230" y1="228" x2="296" y2="222" stroke="#e0632f" stroke-width="1.6" stroke-dasharray="2 3"/>
      <circle cx="100" cy="222" r="13" fill="#e0632f" opacity="0.85"/>
      <text x="95" y="227" font-size="12" font-weight="700" fill="#ffffff">1</text>

      <!-- Rung y=260 : G-C, grand sillon -->
      <line x1="280" y1="260" x2="320" y2="260" stroke="#475467" stroke-width="2"/>
      <line x1="620" y1="260" x2="580" y2="260" stroke="#475467" stroke-width="2"/>
      <circle cx="320" cy="260" r="9" fill="#12a065"/>
      <circle cx="580" cy="260" r="9" fill="#7c4df5"/>
      <text x="316" y="280" font-size="12" font-weight="700" fill="#12a065">G</text>
      <text x="576" y="280" font-size="12" font-weight="700" fill="#7c4df5">C</text>
      <line x1="329" y1="254" x2="571" y2="254" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="329" y1="260" x2="571" y2="260" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="329" y1="266" x2="571" y2="266" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="450" cy="244" r="13" fill="#7c4df5" opacity="0.85"/>
      <text x="445" y="249" font-size="12" font-weight="700" fill="#ffffff">5</text>
      <text x="465" y="249" font-size="12" fill="#475467">paire G–C (3 liaisons H)</text>
      <text x="700" y="256" font-size="13" font-weight="600" fill="#0e7490">Grand sillon</text>
      <line x1="622" y1="260" x2="696" y2="258" stroke="#0e7490" stroke-width="1.6" stroke-dasharray="2 3"/>
      <circle cx="810" cy="248" r="13" fill="#0e7490" opacity="0.85"/>
      <text x="805" y="253" font-size="12" font-weight="700" fill="#ffffff">6</text>

      <!-- Rung y=300 : A-T -->
      <line x1="300" y1="300" x2="340" y2="300" stroke="#475467" stroke-width="2"/>
      <line x1="600" y1="300" x2="560" y2="300" stroke="#475467" stroke-width="2"/>
      <circle cx="340" cy="300" r="9" fill="#175cd3"/>
      <circle cx="560" cy="300" r="9" fill="#e0632f"/>
      <text x="336" y="286" font-size="12" font-weight="700" fill="#175cd3">A</text>
      <text x="556" y="286" font-size="12" font-weight="700" fill="#e0632f">T</text>
      <line x1="349" y1="296" x2="551" y2="296" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="349" y1="304" x2="551" y2="304" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>

      <!-- Flèches antiparallèles -->
      <polygon points="300,296 292,312 308,312" fill="#175cd3"/>
      <polygon points="600,304 592,288 608,288" fill="#e0632f"/>
      <circle cx="450" cy="300" r="13" fill="#e0632f" opacity="0.85"/>
      <text x="445" y="305" font-size="12" font-weight="700" fill="#ffffff">10</text>
      <text x="465" y="298" font-size="12" fill="#475467">Brins antiparallèles :</text>
      <text x="465" y="313" font-size="12" fill="#475467">orientations 5′→3′ opposées</text>

      <!-- Rung y=340 : G-C, sucre -->
      <line x1="320" y1="340" x2="360" y2="340" stroke="#475467" stroke-width="2"/>
      <line x1="580" y1="340" x2="540" y2="340" stroke="#475467" stroke-width="2"/>
      <circle cx="360" cy="340" r="9" fill="#12a065"/>
      <circle cx="540" cy="340" r="9" fill="#7c4df5"/>
      <text x="356" y="360" font-size="12" font-weight="700" fill="#12a065">G</text>
      <text x="536" y="360" font-size="12" font-weight="700" fill="#7c4df5">C</text>
      <line x1="369" y1="334" x2="531" y2="334" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="369" y1="340" x2="531" y2="340" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="369" y1="346" x2="531" y2="346" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <polygon points="316,340 324,332 324,348" fill="#12a065"/>
      <text x="120" y="356" font-size="13" font-weight="600" fill="#12a065">Désoxyribose (sucre)</text>
      <line x1="230" y1="348" x2="312" y2="341" stroke="#12a065" stroke-width="1.6" stroke-dasharray="2 3"/>
      <circle cx="100" cy="342" r="13" fill="#12a065" opacity="0.85"/>
      <text x="95" y="347" font-size="12" font-weight="700" fill="#ffffff">2</text>

      <!-- Rung y=380 : A-T -->
      <line x1="300" y1="380" x2="340" y2="380" stroke="#475467" stroke-width="2"/>
      <line x1="600" y1="380" x2="560" y2="380" stroke="#475467" stroke-width="2"/>
      <circle cx="340" cy="380" r="9" fill="#175cd3"/>
      <circle cx="560" cy="380" r="9" fill="#e0632f"/>
      <line x1="349" y1="376" x2="551" y2="376" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="349" y1="384" x2="551" y2="384" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>

      <!-- Rung y=420 : G-C -->
      <line x1="280" y1="420" x2="320" y2="420" stroke="#475467" stroke-width="2"/>
      <line x1="620" y1="420" x2="580" y2="420" stroke="#475467" stroke-width="2"/>
      <circle cx="320" cy="420" r="9" fill="#12a065"/>
      <circle cx="580" cy="420" r="9" fill="#7c4df5"/>
      <line x1="329" y1="414" x2="571" y2="414" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="329" y1="420" x2="571" y2="420" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="329" y1="426" x2="571" y2="426" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>

      <!-- Rung y=460 : A-T -->
      <line x1="300" y1="460" x2="340" y2="460" stroke="#475467" stroke-width="2"/>
      <line x1="600" y1="460" x2="560" y2="460" stroke="#475467" stroke-width="2"/>
      <circle cx="340" cy="460" r="9" fill="#175cd3"/>
      <circle cx="560" cy="460" r="9" fill="#e0632f"/>
      <line x1="349" y1="456" x2="551" y2="456" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="349" y1="464" x2="551" y2="464" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>

      <!-- Rung y=500 : G-C -->
      <line x1="320" y1="500" x2="360" y2="500" stroke="#475467" stroke-width="2"/>
      <line x1="580" y1="500" x2="540" y2="500" stroke="#475467" stroke-width="2"/>
      <circle cx="360" cy="500" r="9" fill="#12a065"/>
      <circle cx="540" cy="500" r="9" fill="#7c4df5"/>
      <line x1="369" y1="494" x2="531" y2="494" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="369" y1="500" x2="531" y2="500" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="369" y1="506" x2="531" y2="506" stroke="#98a2b3" stroke-width="1.5" stroke-dasharray="3 3"/>

      <text x="40" y="612" font-size="12" fill="#8a94a8">Un tour d’hélice complet compte environ 10,5 paires de bases pour un diamètre d’environ 2 nanomètres.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Groupement phosphate : relie deux désoxyriboses consécutifs par une liaison phosphodiester.' },
    { ref: '2', texte: 'Désoxyribose : sucre à cinq carbones qui porte la base azotée et le phosphate.' },
    { ref: '3', texte: 'Base azotée : purine (adénine, guanine) ou pyrimidine (thymine, cytosine) fixée au sucre.' },
    { ref: '4', texte: 'Paire adénine–thymine : appariement stabilisé par deux liaisons hydrogène.' },
    { ref: '5', texte: 'Paire guanine–cytosine : appariement stabilisé par trois liaisons hydrogène, plus stable.' },
    { ref: '6', texte: 'Grand sillon : sillon large, principal site de fixation des protéines régulatrices.' },
    { ref: '7', texte: 'Petit sillon : sillon étroit entre les deux brins de la double hélice.' },
    { ref: '8', texte: 'Extrémité 5′ : porte un groupement phosphate libre sur le carbone 5′ du sucre.' },
    { ref: '9', texte: 'Extrémité 3′ : porte un groupement hydroxyle libre sur le carbone 3′ du sucre.' },
    { ref: '10', texte: 'Les deux brins sont antiparallèles : leurs extrémités 5′ et 3′ sont opposées.' },
  ],
};
