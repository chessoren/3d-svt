import type { Schema } from '../../types';

export const schemaHematopoiese: Schema = {
  id: 'histo-hematopoiese',
  ue: 'histo',
  titre: 'L’arbre de l’hématopoïèse',
  description:
    'De la cellule souche hématopoïétique pluripotente aux cellules matures du sang : lignées myéloïde et lymphoïde, principaux progéniteurs, et formule leucocytaire normale.',
  categorie: 'Histologie du sang et hématopoïèse',
  viewBox: '0 0 920 680',
  ficheLiee: 'histo-sang-hematopoiese',
  motsCles: [
    'hématopoïèse',
    'cellule souche hématopoïétique',
    'lignée myéloïde',
    'lignée lymphoïde',
    'érythrocyte',
    'plaquette',
    'granulocyte',
    'monocyte',
    'lymphocyte',
    'formule leucocytaire',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="680" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">L’hématopoïèse : de la cellule souche aux cellules matures du sang</text>
      <line x1="40" y1="46" x2="200" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Racine : CSH -->
      <circle cx="460" cy="70" r="30" fill="#fff6f1" stroke="#e0632f" stroke-width="2.4"/>
      <text x="460" y="66" font-size="10.5" font-weight="600" fill="#101828" text-anchor="middle">CSH</text>
      <text x="460" y="78" font-size="8.5" fill="#475467" text-anchor="middle">moelle</text>
      <circle cx="490" cy="52" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="486" y="57" font-size="12" font-weight="700" fill="#e0632f">1</text>

      <!-- Branches principales -->
      <line x1="460" y1="100" x2="250" y2="150" stroke="#98a2b3" stroke-width="2"/>
      <line x1="460" y1="100" x2="670" y2="150" stroke="#98a2b3" stroke-width="2"/>

      <!-- Progéniteur myéloïde -->
      <circle cx="250" cy="150" r="26" fill="#eaf2ff" stroke="#175cd3" stroke-width="2.2"/>
      <text x="250" y="147" font-size="9" font-weight="600" fill="#101828" text-anchor="middle">CFU-</text>
      <text x="250" y="157" font-size="9" font-weight="600" fill="#101828" text-anchor="middle">GEMM</text>
      <circle cx="276" cy="132" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="272" y="137" font-size="12" font-weight="700" fill="#175cd3">2</text>

      <!-- Progéniteur lymphoïde -->
      <circle cx="670" cy="150" r="26" fill="#e9f7f0" stroke="#12a065" stroke-width="2.2"/>
      <text x="670" y="154" font-size="9.5" font-weight="600" fill="#101828" text-anchor="middle">CLP</text>
      <circle cx="696" cy="132" r="13" fill="#12a065" opacity="0.2"/>
      <text x="692" y="137" font-size="12" font-weight="700" fill="#12a065">3</text>

      <!-- Sous-branches myéloïdes -->
      <line x1="250" y1="176" x2="130" y2="255" stroke="#98a2b3" stroke-width="1.6"/>
      <line x1="250" y1="176" x2="250" y2="255" stroke="#98a2b3" stroke-width="1.6"/>
      <line x1="250" y1="176" x2="400" y2="230" stroke="#98a2b3" stroke-width="1.6"/>
      <line x1="400" y1="230" x2="340" y2="300" stroke="#98a2b3" stroke-width="1.4"/>
      <line x1="400" y1="230" x2="460" y2="300" stroke="#98a2b3" stroke-width="1.4"/>
      <text x="330" y="215" font-size="9.5" fill="#475467" text-anchor="middle">lignée granulo-monocytaire</text>

      <!-- Sous-branches lymphoïdes -->
      <line x1="670" y1="176" x2="580" y2="255" stroke="#98a2b3" stroke-width="1.6"/>
      <line x1="670" y1="176" x2="670" y2="255" stroke="#98a2b3" stroke-width="1.6"/>
      <line x1="670" y1="176" x2="760" y2="255" stroke="#98a2b3" stroke-width="1.6"/>

      <!-- Lignée érythroblastique -> hématies -->
      <text x="130" y="216" font-size="9.5" fill="#475467" text-anchor="middle">lignée érythroblastique</text>
      <circle cx="122" cy="292" r="15" fill="#e0632f"/>
      <circle cx="122" cy="292" r="6" fill="#ffffff" opacity="0.55"/>
      <circle cx="142" cy="302" r="15" fill="#e0632f"/>
      <circle cx="142" cy="302" r="6" fill="#ffffff" opacity="0.55"/>
      <circle cx="112" cy="308" r="15" fill="#e0632f"/>
      <circle cx="112" cy="308" r="6" fill="#ffffff" opacity="0.55"/>
      <circle cx="160" cy="285" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="156" y="290" font-size="12" font-weight="700" fill="#e0632f">4</text>
      <text x="90" y="335" font-size="10" fill="#475467">hématies</text>

      <!-- Lignée mégacaryocytaire -> plaquettes -->
      <text x="250" y="216" font-size="9.5" fill="#475467" text-anchor="middle">lignée mégacaryocytaire</text>
      <polygon points="230,285 250,278 268,286 270,302 254,312 236,306 228,296" fill="#ede3fb" stroke="#7c4df5" stroke-width="1.8"/>
      <circle cx="290" cy="290" r="4" fill="#7c4df5"/>
      <circle cx="298" cy="304" r="4" fill="#7c4df5"/>
      <circle cx="282" cy="312" r="4" fill="#7c4df5"/>
      <circle cx="284" cy="270" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="280" y="275" font-size="12" font-weight="700" fill="#7c4df5">5</text>
      <text x="210" y="335" font-size="10" fill="#475467">mégacaryocyte / plaquettes</text>

      <!-- Granulocytes -->
      <circle cx="340" cy="300" r="22" fill="#fdf1e0" stroke="#c4930b" stroke-width="2"/>
      <circle cx="333" cy="294" r="5.5" fill="#c4930b"/>
      <circle cx="345" cy="292" r="5.5" fill="#c4930b"/>
      <circle cx="345" cy="306" r="5.5" fill="#c4930b"/>
      <circle cx="366" cy="286" r="13" fill="#c4930b" opacity="0.2"/>
      <text x="362" y="291" font-size="12" font-weight="700" fill="#c4930b">6</text>
      <text x="300" y="335" font-size="10" fill="#475467">polynucléaires (N, E, B)</text>

      <!-- Monocyte -->
      <circle cx="460" cy="300" r="24" fill="#eef2fb" stroke="#475467" stroke-width="2"/>
      <path d="M450,290 Q470,286 470,300 Q470,314 450,310 Q458,300 450,290 Z" fill="#475467"/>
      <circle cx="486" cy="284" r="13" fill="#475467" opacity="0.18"/>
      <text x="482" y="289" font-size="12" font-weight="700" fill="#475467">7</text>
      <text x="432" y="335" font-size="10" fill="#475467">monocyte</text>

      <!-- Lymphocyte T -->
      <circle cx="580" cy="300" r="17" fill="#eaf2ff" stroke="#175cd3" stroke-width="2"/>
      <circle cx="580" cy="300" r="12" fill="#175cd3"/>
      <circle cx="600" cy="284" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="596" y="289" font-size="12" font-weight="700" fill="#175cd3">8</text>
      <text x="555" y="335" font-size="10" fill="#475467">lymphocyte T</text>

      <!-- Lymphocyte B / plasmocyte -->
      <circle cx="670" cy="300" r="19" fill="#e9f7f0" stroke="#12a065" stroke-width="2"/>
      <circle cx="665" cy="303" r="11" fill="#12a065"/>
      <line x1="665" y1="293" x2="665" y2="313" stroke="#e9f7f0" stroke-width="1"/>
      <line x1="655" y1="303" x2="675" y2="303" stroke="#e9f7f0" stroke-width="1"/>
      <circle cx="692" cy="284" r="13" fill="#12a065" opacity="0.2"/>
      <text x="688" y="289" font-size="12" font-weight="700" fill="#12a065">9</text>
      <text x="632" y="335" font-size="10" fill="#475467">lymphocyte B / plasmocyte</text>

      <!-- NK -->
      <circle cx="760" cy="300" r="18" fill="#fdeeea" stroke="#d4380d" stroke-width="2"/>
      <circle cx="756" cy="302" r="10" fill="#d4380d"/>
      <circle cx="770" cy="292" r="2" fill="#d4380d"/>
      <circle cx="772" cy="306" r="2" fill="#d4380d"/>
      <circle cx="786" cy="284" r="13" fill="#d4380d" opacity="0.2"/>
      <text x="780" y="289" font-size="11" font-weight="700" fill="#d4380d">10</text>
      <text x="742" y="335" font-size="10" fill="#475467">cellule NK</text>

      <!-- Formule leucocytaire -->
      <text x="40" y="392" font-size="16" font-weight="600" fill="#101828">Formule leucocytaire normale (proportions relatives)</text>
      <circle cx="430" cy="386" r="13" fill="#101828" opacity="0.12"/>
      <text x="424" y="391" font-size="11" font-weight="700" fill="#101828">11</text>

      <g transform="translate(90,600)">
        <line x1="0" y1="0" x2="760" y2="0" stroke="#d0d7e2" stroke-width="1.4"/>
        <rect x="20" y="-120" width="70" height="120" fill="#fdf1e0" stroke="#c4930b"/>
        <text x="55" y="-128" font-size="11" fill="#101828" text-anchor="middle">60 %</text>
        <text x="55" y="18" font-size="10" fill="#475467" text-anchor="middle">neutrophiles</text>

        <rect x="160" y="-60" width="70" height="60" fill="#eaf2ff" stroke="#175cd3"/>
        <text x="195" y="-68" font-size="11" fill="#101828" text-anchor="middle">30 %</text>
        <text x="195" y="18" font-size="10" fill="#475467" text-anchor="middle">lymphocytes</text>

        <rect x="300" y="-12" width="70" height="12" fill="#eef2fb" stroke="#475467"/>
        <text x="335" y="-20" font-size="11" fill="#101828" text-anchor="middle">6 %</text>
        <text x="335" y="18" font-size="10" fill="#475467" text-anchor="middle">monocytes</text>

        <rect x="440" y="-6" width="70" height="6" fill="#fdeeea" stroke="#d4380d"/>
        <text x="475" y="-14" font-size="11" fill="#101828" text-anchor="middle">3 %</text>
        <text x="475" y="18" font-size="10" fill="#475467" text-anchor="middle">éosinophiles</text>

        <rect x="580" y="-2" width="70" height="2" fill="#ede3fb" stroke="#7c4df5"/>
        <text x="615" y="-10" font-size="11" fill="#101828" text-anchor="middle">1 %</text>
        <text x="615" y="18" font-size="10" fill="#475467" text-anchor="middle">basophiles</text>
      </g>

      <text x="40" y="656" font-size="11.5" fill="#8a94a8">Les hématies (env. 4,5–6 × 10¹² /L) et les plaquettes (150–400 × 10⁹ /L) sont comptées séparément de la formule leucocytaire.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Cellule souche hématopoïétique (CSH) : pluripotente, capable d’auto-renouvellement, résidant dans la moelle osseuse.' },
    { ref: '2', texte: 'Progéniteur myéloïde commun (CFU-GEMM) : donne les lignées érythrocytaire, mégacaryocytaire et granulo-monocytaire.' },
    { ref: '3', texte: 'Progéniteur lymphoïde commun (CLP) : donne les lymphocytes T, les lymphocytes B et les cellules NK.' },
    { ref: '4', texte: 'Hématies (érythrocytes) : cellules anucléées en disque biconcave, transport de l’oxygène.' },
    { ref: '5', texte: 'Mégacaryocyte et plaquettes : les plaquettes sont des fragments cytoplasmiques anucléés impliqués dans l’hémostase primaire.' },
    { ref: '6', texte: 'Polynucléaires (granulocytes neutrophiles, éosinophiles, basophiles) : noyau plurilobé, rôle dans l’immunité innée.' },
    { ref: '7', texte: 'Monocyte : précurseur circulant des macrophages tissulaires, noyau réniforme, phagocytose.' },
    { ref: '8', texte: 'Lymphocyte T : maturation thymique, immunité à médiation cellulaire.' },
    { ref: '9', texte: 'Lymphocyte B / plasmocyte : immunité humorale, production d’anticorps après différenciation en plasmocyte.' },
    { ref: '10', texte: 'Cellule NK (natural killer) : lymphocyte de l’immunité innée, cytotoxicité sans restriction au CMH.' },
    { ref: '11', texte: 'Formule leucocytaire : proportion relative des différents leucocytes circulants, utile au diagnostic hématologique.' },
  ],
};
