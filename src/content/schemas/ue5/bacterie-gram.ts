import type { Schema } from '../../types';

export const schemaBacterieGram: Schema = {
  id: 'ue5-bacterie-gram',
  ue: 'ue5',
  titre: 'Paroi bactérienne et coloration de Gram',
  description:
    'Comparaison des parois bactériennes Gram positif et Gram négatif : peptidoglycane, membrane externe, lipopolysaccharide, espace périplasmique, et étapes de la coloration de Gram.',
  categorie: 'Bactériologie générale',
  viewBox: '0 0 920 720',
  ficheLiee: 'ue5-bacteriologie-generale',
  motsCles: ['Gram positif', 'Gram négatif', 'peptidoglycane', 'membrane externe', 'lipopolysaccharide', 'espace périplasmique', 'coloration de Gram', 'porine'],
  svg: `
    <rect x="0" y="0" width="920" height="720" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue5-gram-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="30" font-size="19" font-weight="600" fill="#101828">1 · Comparaison des parois Gram positif et Gram négatif</text>
      <line x1="40" y1="42" x2="220" y2="42" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <text x="60" y="70" font-size="14" font-weight="600" fill="#5a2fc7">Gram positif</text>
      <text x="480" y="70" font-size="14" font-weight="600" fill="#d4380d">Gram négatif</text>

      <!-- Panneau Gram positif -->
      <g transform="translate(60,90)">
        <rect x="-14" y="-10" width="368" height="230" rx="14" fill="#faf8ff" stroke="#e4dbfb"/>
        <text x="4" y="8" font-size="11.5" fill="#8a94a8">Extérieur</text>

        <!-- Acides teichoïques -->
        <line x1="40" y1="28" x2="40" y2="4" stroke="#b58a00" stroke-width="2"/>
        <line x1="120" y1="28" x2="120" y2="4" stroke="#b58a00" stroke-width="2"/>
        <line x1="200" y1="28" x2="200" y2="4" stroke="#b58a00" stroke-width="2"/>
        <line x1="280" y1="28" x2="280" y2="4" stroke="#b58a00" stroke-width="2"/>
        <circle cx="120" cy="0" r="13" fill="#b58a00" opacity="0.26"/>
        <text x="116" y="5" font-size="12" font-weight="700" fill="#8a6300">3</text>

        <!-- Peptidoglycane épais multicouche -->
        <rect x="0" y="28" width="340" height="110" rx="6" fill="#efe7fb" stroke="#d8c9f5"/>
        <path d="M0,50 L340,50 M0,72 L340,72 M0,94 L340,94 M0,116 L340,116" stroke="#c9b4f2" stroke-width="1.4"/>
        <path d="M0,40 L340,60 M0,80 L340,60 M0,100 L340,80 M0,60 L340,100" stroke="#d8c9f5" stroke-width="1"/>
        <circle cx="300" cy="82" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="295" y="87" font-size="12" font-weight="700" fill="#5a2fc7">2</text>
        <text x="20" y="88" font-size="12.5" font-weight="600" fill="#5a2fc7">Peptidoglycane (multicouche)</text>

        <!-- Membrane plasmique -->
        <rect x="0" y="146" width="340" height="32" rx="6" fill="#dbe9ff" stroke="#175cd3"/>
        <line x1="0" y1="162" x2="340" y2="162" stroke="#ffffff" stroke-width="2"/>
        <circle cx="300" cy="162" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="296" y="167" font-size="12" font-weight="700" fill="#175cd3">1</text>
        <text x="20" y="167" font-size="12.5" font-weight="600" fill="#175cd3">Membrane plasmique</text>

        <text x="20" y="208" font-size="12.5" fill="#475467">Cytoplasme</text>
      </g>

      <!-- Panneau Gram négatif -->
      <g transform="translate(480,90)">
        <rect x="-14" y="-10" width="368" height="230" rx="14" fill="#fff8f7" stroke="#f7ddd8"/>
        <text x="4" y="8" font-size="11.5" fill="#8a94a8">Extérieur</text>

        <!-- LPS -->
        <path d="M40,26 q-6,-18 4,-30 M40,26 q6,-18 -4,-30" stroke="#d4380d" stroke-width="1.8" fill="none"/>
        <circle cx="36" cy="-6" r="3.5" fill="#d4380d"/>
        <circle cx="44" cy="-8" r="3.5" fill="#d4380d"/>
        <path d="M120,26 q-6,-18 4,-30 M120,26 q6,-18 -4,-30" stroke="#d4380d" stroke-width="1.8" fill="none"/>
        <circle cx="116" cy="-6" r="3.5" fill="#d4380d"/>
        <circle cx="124" cy="-8" r="3.5" fill="#d4380d"/>
        <path d="M300,26 q-6,-18 4,-30 M300,26 q6,-18 -4,-30" stroke="#d4380d" stroke-width="1.8" fill="none"/>
        <circle cx="296" cy="-6" r="3.5" fill="#d4380d"/>
        <circle cx="304" cy="-8" r="3.5" fill="#d4380d"/>
        <circle cx="80" cy="-2" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="75" y="3" font-size="12" font-weight="700" fill="#d4380d">6</text>

        <!-- Membrane externe -->
        <rect x="0" y="26" width="340" height="26" rx="6" fill="#fdecea" stroke="#d4380d"/>
        <line x1="0" y1="39" x2="340" y2="39" stroke="#ffffff" stroke-width="2"/>
        <rect x="190" y="26" width="18" height="26" fill="#ffffff" stroke="#475467" stroke-width="1.4"/>
        <circle cx="199" cy="62" r="13" fill="#475467" opacity="0.2"/>
        <text x="194" y="67" font-size="12" font-weight="700" fill="#475467">7</text>
        <text x="20" y="20" font-size="12.5" font-weight="600" fill="#d4380d">Membrane externe</text>

        <!-- Espace périplasmique + peptidoglycane fin -->
        <rect x="0" y="52" width="340" height="46" fill="#fffbe6"/>
        <path d="M0,76 q40,-8 80,0 q40,8 80,0 q40,-8 80,0 q40,8 100,0" fill="none" stroke="#7c4df5" stroke-width="3"/>
        <circle cx="300" cy="76" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="295" y="81" font-size="12" font-weight="700" fill="#5a2fc7">4</text>
        <text x="20" y="68" font-size="12.5" font-weight="600" fill="#5a2fc7">Peptidoglycane (monocouche)</text>
        <circle cx="60" cy="94" r="13" fill="#f4c22b" opacity="0.3"/>
        <text x="56" y="99" font-size="12" font-weight="700" fill="#8a6300">5</text>
        <text x="80" y="99" font-size="11.5" fill="#8a6300">Espace périplasmique</text>

        <!-- Membrane plasmique (interne) -->
        <rect x="0" y="102" width="340" height="26" rx="6" fill="#dbe9ff" stroke="#175cd3"/>
        <line x1="0" y1="115" x2="340" y2="115" stroke="#ffffff" stroke-width="2"/>
        <circle cx="300" cy="115" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="296" y="120" font-size="12" font-weight="700" fill="#175cd3">1</text>
        <text x="20" y="120" font-size="12.5" font-weight="600" fill="#175cd3">Membrane plasmique</text>

        <text x="20" y="164" font-size="12.5" fill="#475467">Cytoplasme</text>
      </g>

      <text x="40" y="352" font-size="19" font-weight="600" fill="#101828">2 · Les quatre étapes de la coloration de Gram</text>
      <line x1="40" y1="364" x2="220" y2="364" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Étape 1 : cristal violet -->
      <g transform="translate(40,388)">
        <rect x="0" y="0" width="190" height="170" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="22" cy="22" r="13" fill="#5a2fc7" opacity="0.22"/>
        <text x="17" y="27" font-size="12" font-weight="700" fill="#5a2fc7">8</text>
        <text x="42" y="27" font-size="12.5" font-weight="600" fill="#101828">1. Cristal violet</text>
        <circle cx="60" cy="90" r="26" fill="#7c4df5"/>
        <text x="46" y="130" font-size="11" fill="#475467">Gram +</text>
        <circle cx="140" cy="90" r="26" fill="#7c4df5"/>
        <text x="126" y="130" font-size="11" fill="#475467">Gram −</text>
        <text x="14" y="154" font-size="11" fill="#475467">Les deux parois se colorent en violet.</text>
      </g>
      <line x1="238" y1="470" x2="256" y2="470" stroke="#101828" stroke-width="2" marker-end="url(#ue5-gram-fleche)"/>

      <!-- Étape 2 : lugol -->
      <g transform="translate(262,388)">
        <rect x="0" y="0" width="190" height="170" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="22" cy="22" r="13" fill="#5a2fc7" opacity="0.22"/>
        <text x="16" y="27" font-size="12" font-weight="700" fill="#5a2fc7">9</text>
        <text x="42" y="27" font-size="12.5" font-weight="600" fill="#101828">2. Lugol (mordant)</text>
        <circle cx="60" cy="90" r="26" fill="#5a2fc7"/>
        <text x="46" y="130" font-size="11" fill="#475467">Gram +</text>
        <circle cx="140" cy="90" r="26" fill="#5a2fc7"/>
        <text x="126" y="130" font-size="11" fill="#475467">Gram −</text>
        <text x="14" y="154" font-size="11" fill="#475467">Fixe le complexe violet-iode.</text>
      </g>
      <line x1="460" y1="470" x2="478" y2="470" stroke="#101828" stroke-width="2" marker-end="url(#ue5-gram-fleche)"/>

      <!-- Étape 3 : décoloration -->
      <g transform="translate(484,388)">
        <rect x="0" y="0" width="190" height="170" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="22" cy="22" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="16" y="27" font-size="12" font-weight="700" fill="#d4380d">10</text>
        <text x="42" y="27" font-size="12.5" font-weight="600" fill="#101828">3. Alcool-acétone</text>
        <circle cx="60" cy="90" r="26" fill="#5a2fc7"/>
        <text x="46" y="130" font-size="11" fill="#475467">Gram +</text>
        <circle cx="140" cy="90" r="26" fill="#ffffff" stroke="#98a2b3" stroke-width="1.6"/>
        <text x="126" y="130" font-size="11" fill="#475467">Gram −</text>
        <text x="14" y="154" font-size="11" fill="#475467">Décolore la paroi fine du Gram −.</text>
      </g>
      <line x1="682" y1="470" x2="700" y2="470" stroke="#101828" stroke-width="2" marker-end="url(#ue5-gram-fleche)"/>

      <!-- Étape 4 : safranine -->
      <g transform="translate(706,388)">
        <rect x="0" y="0" width="174" height="170" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="22" cy="22" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="16" y="27" font-size="12" font-weight="700" fill="#d4380d">11</text>
        <text x="42" y="27" font-size="12.5" font-weight="600" fill="#101828">4. Safranine</text>
        <circle cx="52" cy="90" r="26" fill="#5a2fc7"/>
        <text x="38" y="130" font-size="11" fill="#475467">Gram +</text>
        <circle cx="126" cy="90" r="26" fill="#e85d75"/>
        <text x="110" y="130" font-size="11" fill="#475467">Gram −</text>
        <text x="14" y="154" font-size="11" fill="#475467">Le Gram − vire au rose.</text>
      </g>

      <text x="40" y="596" font-size="12" fill="#8a94a8">Résultat final : Gram positif = violet (paroi épaisse, retient le complexe) ; Gram négatif = rose (paroi fine, décolorée puis contre-colorée).</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Membrane plasmique : bicouche phospholipidique commune aux deux types de bactéries.' },
    { ref: '2', texte: 'Peptidoglycane épais et multicouche (Gram positif) : retient fortement le complexe cristal violet-iode.' },
    { ref: '3', texte: 'Acides teichoïques : polymères ancrés dans le peptidoglycane, caractéristiques du Gram positif.' },
    { ref: '4', texte: 'Peptidoglycane fin, en une seule couche (Gram négatif), situé dans l’espace périplasmique.' },
    { ref: '5', texte: 'Espace périplasmique (Gram négatif) : entre la membrane externe et la membrane plasmique.' },
    { ref: '6', texte: 'Lipopolysaccharide (LPS) : feuillet externe de la membrane externe, constitue l’endotoxine bactérienne.' },
    { ref: '7', texte: 'Porine : canal protéique de la membrane externe, laisse diffuser les petites molécules hydrophiles.' },
    { ref: '8', texte: 'Étape 1 : le cristal violet colore en violet la paroi des deux types de bactéries.' },
    { ref: '9', texte: 'Étape 2 : le lugol (mordant iodé) fixe le complexe cristal violet-iode dans la paroi.' },
    { ref: '10', texte: 'Étape 3 : la décoloration à l’alcool-acétone élimine le complexe des parois fines (Gram négatif) mais pas des parois épaisses (Gram positif).' },
    { ref: '11', texte: 'Étape 4 : la safranine contre-colore en rose les bactéries Gram négatif décolorées.' },
  ],
};
