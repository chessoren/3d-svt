import type { Schema } from '../../types';

export const schemaCirculationGenerale: Schema = {
  id: 'physio-circulation-generale',
  ue: 'physio',
  titre: 'La double circulation sanguine',
  description:
    'Petite circulation pulmonaire et grande circulation systémique : cavités cardiaques, valves, sang oxygéné et désoxygéné, et pressions moyennes des différents secteurs vasculaires.',
  categorie: 'Physiologie cardiovasculaire',
  viewBox: '0 0 920 900',
  ficheLiee: 'physio-circulation',
  motsCles: ['double circulation', 'petite circulation', 'grande circulation', 'oreillettes', 'ventricules', 'valves cardiaques', 'pression artérielle'],
  svg: `
    <rect x="0" y="0" width="920" height="900" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="physio-circulation-generale-fl-bleu" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#175cd3"/>
      </marker>
      <marker id="physio-circulation-generale-fl-rouge" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#d4380d"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Les deux circuits en série</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Poumons -->
      <rect x="310" y="90" width="300" height="80" rx="14" fill="#eef4ff" stroke="#c9d6ff"/>
      <text x="460" y="122" font-size="15" font-weight="600" fill="#101828" text-anchor="middle">POUMONS</text>
      <text x="460" y="144" font-size="12" fill="#475467" text-anchor="middle">échanges gazeux — petite circulation</text>
      <circle cx="590" cy="104" r="11" fill="#175cd3" opacity="0.2"/>
      <text x="586" y="108" font-size="11" font-weight="700" fill="#175cd3">9</text>

      <!-- Cavités cardiaques -->
      <rect x="330" y="260" width="110" height="70" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
      <text x="385" y="302" font-size="17" font-weight="700" fill="#101828" text-anchor="middle">OD</text>
      <circle cx="425" cy="272" r="11" fill="#e0632f" opacity="0.2"/>
      <text x="421" y="276" font-size="11" font-weight="700" fill="#e0632f">1</text>

      <rect x="480" y="260" width="110" height="70" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
      <text x="535" y="302" font-size="17" font-weight="700" fill="#101828" text-anchor="middle">OG</text>
      <circle cx="565" cy="272" r="11" fill="#e0632f" opacity="0.2"/>
      <text x="561" y="276" font-size="11" font-weight="700" fill="#e0632f">3</text>

      <rect x="330" y="330" width="110" height="100" rx="12" fill="#fdeee8" stroke="#f3d3c2"/>
      <text x="385" y="388" font-size="17" font-weight="700" fill="#101828" text-anchor="middle">VD</text>
      <circle cx="425" cy="345" r="11" fill="#e0632f" opacity="0.24"/>
      <text x="421" y="349" font-size="11" font-weight="700" fill="#e0632f">2</text>

      <rect x="480" y="330" width="110" height="100" rx="12" fill="#fdeee8" stroke="#f3d3c2"/>
      <text x="535" y="388" font-size="17" font-weight="700" fill="#101828" text-anchor="middle">VG</text>
      <circle cx="565" cy="345" r="11" fill="#e0632f" opacity="0.24"/>
      <text x="561" y="349" font-size="11" font-weight="700" fill="#e0632f">4</text>

      <!-- valves -->
      <line x1="330" y1="330" x2="440" y2="330" stroke="#7c4df5" stroke-width="2.4"/>
      <circle cx="443" cy="330" r="11" fill="#7c4df5" opacity="0.22"/>
      <text x="437" y="334" font-size="11" font-weight="700" fill="#7c4df5">11</text>

      <line x1="480" y1="330" x2="590" y2="330" stroke="#7c4df5" stroke-width="2.4"/>
      <circle cx="593" cy="330" r="11" fill="#7c4df5" opacity="0.22"/>
      <text x="587" y="334" font-size="11" font-weight="700" fill="#7c4df5">12</text>

      <!-- Organes et tissus -->
      <rect x="310" y="580" width="300" height="80" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
      <text x="460" y="612" font-size="15" font-weight="600" fill="#101828" text-anchor="middle">ORGANES ET TISSUS</text>
      <text x="460" y="634" font-size="12" fill="#475467" text-anchor="middle">échanges gazeux — grande circulation</text>
      <circle cx="590" cy="594" r="11" fill="#d4380d" opacity="0.2"/>
      <text x="586" y="598" font-size="11" font-weight="700" fill="#d4380d">10</text>

      <!-- Artère pulmonaire : VD -> poumons (sang veineux) -->
      <path d="M330,365 L250,365 L250,130 L310,130" fill="none" stroke="#175cd3" stroke-width="3.4"
        marker-end="url(#physio-circulation-generale-fl-bleu)"/>
      <circle cx="150" cy="230" r="11" fill="#175cd3" opacity="0.2"/>
      <text x="146" y="234" font-size="11" font-weight="700" fill="#175cd3">5</text>
      <text x="168" y="228" font-size="12.5" font-weight="600" fill="#175cd3">Artère pulmonaire</text>
      <text x="168" y="246" font-size="11.5" fill="#475467">≈ 25/8 mmHg</text>

      <!-- Veines pulmonaires : poumons -> OG (sang artériel) -->
      <path d="M610,130 L660,130 L660,295 L590,295" fill="none" stroke="#d4380d" stroke-width="3.4"
        marker-end="url(#physio-circulation-generale-fl-rouge)"/>
      <circle cx="672" cy="190" r="11" fill="#d4380d" opacity="0.2"/>
      <text x="668" y="194" font-size="11" font-weight="700" fill="#d4380d">6</text>
      <text x="688" y="188" font-size="12.5" font-weight="600" fill="#d4380d">Veines pulmonaires</text>
      <text x="688" y="206" font-size="11.5" fill="#475467">≈ 8 mmHg</text>

      <!-- Aorte : VG -> organes (sang artériel) -->
      <path d="M535,430 L535,580" fill="none" stroke="#d4380d" stroke-width="3.4"
        marker-end="url(#physio-circulation-generale-fl-rouge)"/>
      <circle cx="628" cy="490" r="11" fill="#d4380d" opacity="0.2"/>
      <text x="624" y="494" font-size="11" font-weight="700" fill="#d4380d">7</text>
      <text x="644" y="488" font-size="12.5" font-weight="600" fill="#d4380d">Aorte</text>
      <text x="644" y="506" font-size="11.5" fill="#475467">≈ 120/80 mmHg</text>

      <!-- Veines caves : organes -> OD (sang veineux) -->
      <path d="M310,620 L200,620 L200,295 L330,295" fill="none" stroke="#175cd3" stroke-width="3.4"
        marker-end="url(#physio-circulation-generale-fl-bleu)"/>
      <circle cx="70" cy="450" r="11" fill="#175cd3" opacity="0.2"/>
      <text x="66" y="454" font-size="11" font-weight="700" fill="#175cd3">8</text>
      <text x="86" y="448" font-size="12.5" font-weight="600" fill="#175cd3">Veines caves</text>
      <text x="86" y="466" font-size="11.5" fill="#475467">≈ 2 à 5 mmHg</text>

      <!-- clé de couleur -->
      <line x1="40" y1="710" x2="80" y2="710" stroke="#d4380d" stroke-width="4"/>
      <text x="88" y="715" font-size="12.5" fill="#101828">Sang oxygéné (artériel)</text>
      <line x1="300" y1="710" x2="340" y2="710" stroke="#175cd3" stroke-width="4"/>
      <text x="348" y="715" font-size="12.5" fill="#101828">Sang désoxygéné (veineux)</text>

      <text x="40" y="756" font-size="19" font-weight="600" fill="#101828">2 · Cavités, valves et sites d’échange</text>
      <line x1="40" y1="768" x2="180" y2="768" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,788)" font-size="12.5" fill="#101828">
        <rect x="0" y="0" width="820" height="94" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="20" cy="22" r="10" fill="#e0632f" opacity="0.2"/>
        <text x="17" y="26" font-size="10.5" font-weight="700" fill="#e0632f">1</text>
        <text x="36" y="26">OD : reçoit le sang veineux des veines caves.</text>
        <circle cx="20" cy="46" r="10" fill="#e0632f" opacity="0.24"/>
        <text x="17" y="50" font-size="10.5" font-weight="700" fill="#e0632f">2</text>
        <text x="36" y="50">VD : éjecte le sang vers l’artère pulmonaire.</text>
        <circle cx="20" cy="70" r="10" fill="#e0632f" opacity="0.2"/>
        <text x="17" y="74" font-size="10.5" font-weight="700" fill="#e0632f">3</text>
        <text x="36" y="74">OG : reçoit le sang oxygéné des veines pulmonaires.</text>

        <circle cx="420" cy="22" r="10" fill="#e0632f" opacity="0.24"/>
        <text x="417" y="26" font-size="10.5" font-weight="700" fill="#e0632f">4</text>
        <text x="436" y="26">VG : éjecte le sang vers l’aorte, paroi la plus épaisse.</text>
        <circle cx="420" cy="46" r="10" fill="#7c4df5" opacity="0.22"/>
        <text x="417" y="50" font-size="10.5" font-weight="700" fill="#7c4df5">11</text>
        <text x="436" y="50">Valves droites (tricuspide, pulmonaire) : anti-reflux du cœur droit.</text>
        <circle cx="420" cy="70" r="10" fill="#7c4df5" opacity="0.22"/>
        <text x="417" y="74" font-size="10.5" font-weight="700" fill="#7c4df5">12</text>
        <text x="436" y="74">Valves gauches (mitrale, aortique) : anti-reflux du cœur gauche.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Oreillette droite (OD) : reçoit le sang veineux des veines caves.' },
    { ref: '2', texte: 'Ventricule droit (VD) : éjecte le sang vers l’artère pulmonaire.' },
    { ref: '3', texte: 'Oreillette gauche (OG) : reçoit le sang oxygéné des veines pulmonaires.' },
    { ref: '4', texte: 'Ventricule gauche (VG) : éjecte le sang vers l’aorte ; paroi musculaire la plus épaisse.' },
    { ref: '5', texte: 'Artère pulmonaire : sang veineux, pression d’environ 25/8 mmHg (moyenne proche de 15 mmHg).' },
    { ref: '6', texte: 'Veines pulmonaires : sang artériel oxygéné, pression moyenne d’environ 8 mmHg.' },
    { ref: '7', texte: 'Aorte : sang artériel, pression d’environ 120/80 mmHg (moyenne proche de 93 mmHg).' },
    { ref: '8', texte: 'Veines caves : sang veineux, pression moyenne d’environ 2 à 5 mmHg.' },
    { ref: '9', texte: 'Poumons : site des échanges gazeux de la petite circulation (circulation pulmonaire).' },
    { ref: '10', texte: 'Organes et tissus : site des échanges gazeux de la grande circulation (circulation systémique).' },
    { ref: '11', texte: 'Valves droites (tricuspide et pulmonaire) : empêchent tout reflux sanguin dans le cœur droit.' },
    { ref: '12', texte: 'Valves gauches (mitrale et aortique) : empêchent tout reflux sanguin dans le cœur gauche.' },
  ],
};
