import type { Schema } from '../../types';

export const schemaSarcomere: Schema = {
  id: 'histo-sarcomere',
  ue: 'histo',
  titre: 'Organisation du muscle strié squelettique',
  description:
    'Hiérarchie du muscle strié squelettique du muscle entier jusqu’à la myofibrille, structure du sarcomère (bandes A et I, strie Z, zone H) et raccourcissement du sarcomère lors de la contraction.',
  categorie: 'Histologie du tissu musculaire',
  viewBox: '0 0 920 700',
  ficheLiee: 'histo-tissus-musculaires',
  motsCles: [
    'muscle strié squelettique',
    'faisceau',
    'fibre musculaire',
    'myofibrille',
    'sarcomère',
    'bande A',
    'bande I',
    'strie Z',
    'zone H',
    'actine',
    'myosine',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · De l’organe à la myofibrille</text>
      <line x1="40" y1="52" x2="200" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Hiérarchie -->
      <g transform="translate(40,80)">
        <rect x="0" y="0" width="190" height="170" rx="12" fill="#fbfbfc" stroke="#e4e7ec"/>
        <circle cx="172" cy="18" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="168" y="23" font-size="12" font-weight="700" fill="#e0632f">1</text>
        <text x="14" y="24" font-size="12.5" font-weight="600" fill="#101828">Muscle entier</text>
        <ellipse cx="95" cy="95" rx="70" ry="50" fill="#fff6f1" stroke="#e0632f" stroke-width="2"/>
        <circle cx="72" cy="82" r="16" fill="#ffe3d1" stroke="#f3a26f"/>
        <circle cx="120" cy="78" r="16" fill="#ffe3d1" stroke="#f3a26f"/>
        <circle cx="95" cy="112" r="16" fill="#ffe3d1" stroke="#f3a26f"/>
        <circle cx="60" cy="115" r="14" fill="#ffe3d1" stroke="#f3a26f"/>
        <circle cx="130" cy="112" r="14" fill="#ffe3d1" stroke="#f3a26f"/>
        <text x="14" y="153" font-size="10.5" fill="#475467">épimysium</text>
      </g>
      <text x="238" y="170" font-size="18" fill="#98a2b3">›</text>

      <g transform="translate(255,80)">
        <rect x="0" y="0" width="190" height="170" rx="12" fill="#fbfbfc" stroke="#e4e7ec"/>
        <circle cx="172" cy="18" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="168" y="23" font-size="12" font-weight="700" fill="#e0632f">2</text>
        <text x="14" y="24" font-size="12.5" font-weight="600" fill="#101828">Faisceau</text>
        <ellipse cx="95" cy="95" rx="65" ry="48" fill="#fff9f0" stroke="#c98a2f" stroke-width="2"/>
        <circle cx="72" cy="82" r="15" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="120" cy="78" r="15" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="95" cy="112" r="15" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="60" cy="112" r="13" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="128" cy="110" r="13" fill="#cfe3ff" stroke="#175cd3"/>
        <text x="14" y="153" font-size="10.5" fill="#475467">périmysium</text>
      </g>
      <text x="453" y="170" font-size="18" fill="#98a2b3">›</text>

      <g transform="translate(470,80)">
        <rect x="0" y="0" width="190" height="170" rx="12" fill="#fbfbfc" stroke="#e4e7ec"/>
        <circle cx="172" cy="18" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="168" y="23" font-size="12" font-weight="700" fill="#e0632f">3</text>
        <text x="14" y="24" font-size="12.5" font-weight="600" fill="#101828">Fibre musculaire</text>
        <rect x="20" y="60" width="150" height="66" rx="33" fill="#eaf2ff" stroke="#175cd3" stroke-width="2"/>
        <ellipse cx="42" cy="63" rx="8" ry="4.5" fill="#7c4df5" transform="rotate(10 42 63)"/>
        <ellipse cx="75" cy="122" rx="8" ry="4.5" fill="#7c4df5" transform="rotate(-10 75 122)"/>
        <ellipse cx="108" cy="63" rx="8" ry="4.5" fill="#7c4df5" transform="rotate(10 108 63)"/>
        <ellipse cx="140" cy="122" rx="8" ry="4.5" fill="#7c4df5" transform="rotate(-10 140 122)"/>
        <line x1="38" y1="70" x2="38" y2="116" stroke="#b7cdf0" stroke-width="1.4"/>
        <line x1="55" y1="70" x2="55" y2="116" stroke="#b7cdf0" stroke-width="1.4"/>
        <line x1="72" y1="70" x2="72" y2="116" stroke="#b7cdf0" stroke-width="1.4"/>
        <line x1="89" y1="70" x2="89" y2="116" stroke="#b7cdf0" stroke-width="1.4"/>
        <line x1="106" y1="70" x2="106" y2="116" stroke="#b7cdf0" stroke-width="1.4"/>
        <line x1="123" y1="70" x2="123" y2="116" stroke="#b7cdf0" stroke-width="1.4"/>
        <line x1="140" y1="70" x2="140" y2="116" stroke="#b7cdf0" stroke-width="1.4"/>
        <text x="14" y="150" font-size="10" fill="#475467">cellule plurinucléée,</text>
        <text x="14" y="163" font-size="10" fill="#475467">noyaux en périphérie</text>
      </g>
      <text x="668" y="170" font-size="18" fill="#98a2b3">›</text>

      <g transform="translate(685,80)">
        <rect x="0" y="0" width="190" height="170" rx="12" fill="#fbfbfc" stroke="#e4e7ec"/>
        <circle cx="172" cy="18" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="168" y="23" font-size="12" font-weight="700" fill="#e0632f">4</text>
        <text x="14" y="24" font-size="12.5" font-weight="600" fill="#101828">Myofibrille</text>
        <rect x="20" y="80" width="150" height="30" fill="#dbe4f5"/>
        <rect x="20" y="80" width="20" height="30" fill="#3b3f57"/>
        <rect x="60" y="80" width="20" height="30" fill="#3b3f57"/>
        <rect x="100" y="80" width="20" height="30" fill="#3b3f57"/>
        <rect x="140" y="80" width="20" height="30" fill="#3b3f57"/>
        <text x="14" y="140" font-size="10" fill="#475467">striation transversale</text>
        <text x="14" y="153" font-size="10" fill="#475467">(alternance de bandes)</text>
      </g>

      <text x="40" y="288" font-size="19" font-weight="600" fill="#101828">2 · Le sarcomère, unité contractile</text>
      <line x1="40" y1="300" x2="200" y2="300" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,330)">
        <text x="20" y="8" font-size="12" font-weight="600" fill="#175cd3">Bande I</text>
        <circle cx="66" cy="3" r="10" fill="#175cd3" opacity="0.18"/>
        <text x="62.5" y="7" font-size="10" font-weight="700" fill="#175cd3">6</text>
        <text x="320" y="8" font-size="12" font-weight="600" fill="#d4380d">Bande A</text>
        <circle cx="398" cy="3" r="10" fill="#d4380d" opacity="0.18"/>
        <text x="394.5" y="7" font-size="10" font-weight="700" fill="#d4380d">5</text>

        <rect x="60" y="20" width="120" height="100" fill="#eaf2ff"/>
        <rect x="180" y="20" width="360" height="100" fill="#fdeeea"/>
        <rect x="540" y="20" width="120" height="100" fill="#eaf2ff"/>
        <rect x="310" y="20" width="100" height="100" fill="#fff3df"/>

        <line x1="60" y1="10" x2="60" y2="130" stroke="#101828" stroke-width="5"/>
        <line x1="660" y1="10" x2="660" y2="130" stroke="#101828" stroke-width="5"/>
        <text x="20" y="145" font-size="12" font-weight="600" fill="#101828">Strie Z</text>
        <circle cx="60" cy="150" r="10" fill="#101828" opacity="0.16"/>
        <text x="56.5" y="154" font-size="10" font-weight="700" fill="#101828">7</text>

        <text x="330" y="150" font-size="12" font-weight="600" fill="#c4930b">Zone H</text>
        <circle cx="400" cy="150" r="10" fill="#c4930b" opacity="0.2"/>
        <text x="396.5" y="154" font-size="10" font-weight="700" fill="#c4930b">8</text>
        <line x1="360" y1="120" x2="380" y2="145" stroke="#c4930b" stroke-width="1.2"/>

        <line x1="60" y1="35" x2="300" y2="35" stroke="#175cd3" stroke-width="2.2"/>
        <line x1="60" y1="55" x2="300" y2="55" stroke="#175cd3" stroke-width="2.2"/>
        <line x1="60" y1="95" x2="300" y2="95" stroke="#175cd3" stroke-width="2.2"/>
        <line x1="60" y1="115" x2="300" y2="115" stroke="#175cd3" stroke-width="2.2"/>
        <line x1="660" y1="35" x2="420" y2="35" stroke="#175cd3" stroke-width="2.2"/>
        <line x1="660" y1="55" x2="420" y2="55" stroke="#175cd3" stroke-width="2.2"/>
        <line x1="660" y1="95" x2="420" y2="95" stroke="#175cd3" stroke-width="2.2"/>
        <line x1="660" y1="115" x2="420" y2="115" stroke="#175cd3" stroke-width="2.2"/>

        <line x1="180" y1="45" x2="540" y2="45" stroke="#e0632f" stroke-width="5"/>
        <line x1="180" y1="70" x2="540" y2="70" stroke="#e0632f" stroke-width="5"/>
        <line x1="180" y1="95" x2="540" y2="95" stroke="#e0632f" stroke-width="5"/>

        <rect x="600" y="155" width="230" height="66" rx="10" fill="#f6f8fd" stroke="#e4e9f5"/>
        <line x1="614" y1="172" x2="644" y2="172" stroke="#175cd3" stroke-width="2.2"/>
        <circle cx="654" cy="172" r="10" fill="#175cd3" opacity="0.18"/>
        <text x="650.5" y="176" font-size="10" font-weight="700" fill="#175cd3">9</text>
        <text x="668" y="176" font-size="10.5" fill="#475467">filament fin d’actine</text>
        <line x1="614" y1="200" x2="644" y2="200" stroke="#e0632f" stroke-width="5"/>
        <circle cx="654" cy="200" r="10" fill="#e0632f" opacity="0.18"/>
        <text x="649.5" y="204" font-size="10" font-weight="700" fill="#e0632f">10</text>
        <text x="668" y="204" font-size="10.5" fill="#475467">filament épais de myosine</text>
      </g>

      <text x="40" y="530" font-size="19" font-weight="600" fill="#101828">3 · Raccourcissement du sarcomère à la contraction</text>
      <line x1="40" y1="542" x2="200" y2="542" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(80,566)">
        <text x="-30" y="4" font-size="11.5" font-weight="600" fill="#101828">Repos</text>
        <circle cx="14" cy="0" r="10" fill="#475467" opacity="0.16"/>
        <text x="10.5" y="4" font-size="10" font-weight="700" fill="#475467">11</text>
        <rect x="70" y="-8" width="70" height="34" fill="#eaf2ff"/>
        <rect x="140" y="-8" width="320" height="34" fill="#fdeeea"/>
        <rect x="460" y="-8" width="70" height="34" fill="#eaf2ff"/>
        <rect x="260" y="-8" width="80" height="34" fill="#fff3df"/>
        <line x1="70" y1="-14" x2="70" y2="32" stroke="#101828" stroke-width="4"/>
        <line x1="530" y1="-14" x2="530" y2="32" stroke="#101828" stroke-width="4"/>
        <line x1="70" y1="0" x2="260" y2="0" stroke="#175cd3" stroke-width="2"/>
        <line x1="70" y1="18" x2="260" y2="18" stroke="#175cd3" stroke-width="2"/>
        <line x1="530" y1="0" x2="340" y2="0" stroke="#175cd3" stroke-width="2"/>
        <line x1="530" y1="18" x2="340" y2="18" stroke="#175cd3" stroke-width="2"/>
        <line x1="140" y1="5" x2="460" y2="5" stroke="#e0632f" stroke-width="4.5"/>
        <line x1="140" y1="13" x2="460" y2="13" stroke="#e0632f" stroke-width="4.5"/>
      </g>

      <text x="270" y="628" font-size="13" fill="#7c4df5">glissement des filaments d’actine sur la myosine ↓</text>

      <g transform="translate(80,648)">
        <text x="-38" y="4" font-size="11.5" font-weight="600" fill="#101828">Contracté</text>
        <circle cx="26" cy="0" r="10" fill="#475467" opacity="0.16"/>
        <text x="21" y="4" font-size="10" font-weight="700" fill="#475467">12</text>
        <rect x="90" y="-8" width="10" height="34" fill="#eaf2ff"/>
        <rect x="100" y="-8" width="320" height="34" fill="#fdeeea"/>
        <rect x="420" y="-8" width="10" height="34" fill="#eaf2ff"/>
        <rect x="250" y="-8" width="20" height="34" fill="#fff3df"/>
        <line x1="90" y1="-14" x2="90" y2="32" stroke="#101828" stroke-width="4"/>
        <line x1="430" y1="-14" x2="430" y2="32" stroke="#101828" stroke-width="4"/>
        <line x1="90" y1="0" x2="250" y2="0" stroke="#175cd3" stroke-width="2"/>
        <line x1="90" y1="18" x2="250" y2="18" stroke="#175cd3" stroke-width="2"/>
        <line x1="430" y1="0" x2="270" y2="0" stroke="#175cd3" stroke-width="2"/>
        <line x1="430" y1="18" x2="270" y2="18" stroke="#175cd3" stroke-width="2"/>
        <line x1="100" y1="5" x2="420" y2="5" stroke="#e0632f" stroke-width="4.5"/>
        <line x1="100" y1="13" x2="420" y2="13" stroke="#e0632f" stroke-width="4.5"/>
        <text x="460" y="4" font-size="10.5" fill="#475467">bande A inchangée, bandes I et zone H raccourcies</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Muscle entier : organe entouré par l’épimysium, formé de plusieurs faisceaux.' },
    { ref: '2', texte: 'Faisceau : groupe de fibres musculaires entouré par le périmysium.' },
    { ref: '3', texte: 'Fibre musculaire : cellule plurinucléée à noyaux périphériques, entourée par l’endomysium.' },
    { ref: '4', texte: 'Myofibrille : élément contractile intracytoplasmique responsable de la striation transversale de la fibre.' },
    { ref: '5', texte: 'Bande A : zone sombre (anisotrope) correspondant à la longueur des filaments épais de myosine.' },
    { ref: '6', texte: 'Bande I : zone claire (isotrope) ne contenant que des filaments fins d’actine.' },
    { ref: '7', texte: 'Strie Z : ligne dense où s’ancrent les filaments d’actine ; elle délimite les sarcomères entre eux.' },
    { ref: '8', texte: 'Zone H : région centrale de la bande A où les filaments d’actine ne pénètrent pas.' },
    { ref: '9', texte: 'Filament fin d’actine : ancré à la strie Z, glisse le long de la myosine pendant la contraction.' },
    { ref: '10', texte: 'Filament épais de myosine : centré sur la bande A, de longueur constante.' },
    { ref: '11', texte: 'Sarcomère au repos : distance normale entre deux stries Z successives.' },
    { ref: '12', texte: 'Sarcomère contracté : glissement des filaments d’actine sur la myosine, raccourcissant les bandes I et la zone H sans modifier la bande A.' },
  ],
};
