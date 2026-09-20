import type { Schema } from '../../types';

export const schemaLoiNormale: Schema = {
  id: 'ue4-loi-normale',
  ue: 'ue4',
  titre: 'La loi normale',
  description:
    'Courbe en cloche de Gauss-Laplace : moyenne et écart type, symétrie, pourcentages contenus dans les intervalles à un, deux et trois écarts types, loi normale centrée réduite et lecture de la table.',
  categorie: 'Biostatistiques',
  viewBox: '0 0 920 640',
  ficheLiee: 'ue4-loi-normale',
  motsCles: ['loi normale', 'loi de Gauss', 'écart type', 'variable centrée réduite', 'table de la loi normale'],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">La loi normale</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau A : courbe en cloche -->
      <g transform="translate(40,64)">
        <rect x="0" y="0" width="840" height="300" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Densité de probabilité f(x)</text>

        <g transform="translate(140,30)">
          <path d="M 70.0 140.0 L 70.0 138.5 L 73.5 138.3 L 77.0 138.0 L 80.5 137.7 L 84.0 137.4 L 87.5 137.0 L 91.0 136.5 L 94.5 136.0 L 98.0 135.5 L 101.5 134.8 L 105.0 134.2 L 108.5 133.4 L 112.0 132.5 L 115.5 131.6 L 119.0 130.6 L 122.5 129.4 L 126.0 128.2 L 129.5 126.8 L 133.0 125.3 L 136.5 123.7 L 140.0 122.0 L 143.5 120.1 L 147.0 118.1 L 150.5 116.0 L 154.0 113.7 L 157.5 111.2 L 161.0 108.6 L 164.5 105.9 L 168.0 103.0 L 171.5 100.0 L 175.0 96.8 L 178.5 93.5 L 182.0 90.1 L 185.5 86.5 L 189.0 82.9 L 192.5 79.1 L 196.0 75.3 L 199.5 71.3 L 203.0 67.4 L 206.5 63.4 L 210.0 59.3 L 213.5 55.3 L 217.0 51.3 L 220.5 47.3 L 224.0 43.4 L 227.5 39.6 L 231.0 35.9 L 234.5 32.3 L 238.0 28.9 L 241.5 25.7 L 245.0 22.6 L 248.5 19.8 L 252.0 17.2 L 255.5 14.9 L 259.0 12.9 L 262.5 11.1 L 266.0 9.6 L 269.5 8.5 L 273.0 7.7 L 276.5 7.2 L 280.0 7.0 L 283.5 7.2 L 287.0 7.7 L 290.5 8.5 L 294.0 9.6 L 297.5 11.1 L 301.0 12.9 L 304.5 14.9 L 308.0 17.2 L 311.5 19.8 L 315.0 22.6 L 318.5 25.7 L 322.0 28.9 L 325.5 32.3 L 329.0 35.9 L 332.5 39.6 L 336.0 43.4 L 339.5 47.3 L 343.0 51.3 L 346.5 55.3 L 350.0 59.3 L 353.5 63.4 L 357.0 67.4 L 360.5 71.3 L 364.0 75.3 L 367.5 79.1 L 371.0 82.9 L 374.5 86.5 L 378.0 90.1 L 381.5 93.5 L 385.0 96.8 L 388.5 100.0 L 392.0 103.0 L 395.5 105.9 L 399.0 108.6 L 402.5 111.2 L 406.0 113.7 L 409.5 116.0 L 413.0 118.1 L 416.5 120.1 L 420.0 122.0 L 423.5 123.7 L 427.0 125.3 L 430.5 126.8 L 434.0 128.2 L 437.5 129.4 L 441.0 130.6 L 444.5 131.6 L 448.0 132.5 L 451.5 133.4 L 455.0 134.2 L 458.5 134.8 L 462.0 135.5 L 465.5 136.0 L 469.0 136.5 L 472.5 137.0 L 476.0 137.4 L 479.5 137.7 L 483.0 138.0 L 486.5 138.3 L 490.0 138.5 L 490.0 140.0 Z"
                fill="#e8ecfc"/>
          <path d="M 140.0 140.0 L 140.0 122.0 L 143.5 120.1 L 147.0 118.1 L 150.5 116.0 L 154.0 113.7 L 157.5 111.2 L 161.0 108.6 L 164.5 105.9 L 168.0 103.0 L 171.5 100.0 L 175.0 96.8 L 178.5 93.5 L 182.0 90.1 L 185.5 86.5 L 189.0 82.9 L 192.5 79.1 L 196.0 75.3 L 199.5 71.3 L 203.0 67.4 L 206.5 63.4 L 210.0 59.3 L 213.5 55.3 L 217.0 51.3 L 220.5 47.3 L 224.0 43.4 L 227.5 39.6 L 231.0 35.9 L 234.5 32.3 L 238.0 28.9 L 241.5 25.7 L 245.0 22.6 L 248.5 19.8 L 252.0 17.2 L 255.5 14.9 L 259.0 12.9 L 262.5 11.1 L 266.0 9.6 L 269.5 8.5 L 273.0 7.7 L 276.5 7.2 L 280.0 7.0 L 283.5 7.2 L 287.0 7.7 L 290.5 8.5 L 294.0 9.6 L 297.5 11.1 L 301.0 12.9 L 304.5 14.9 L 308.0 17.2 L 311.5 19.8 L 315.0 22.6 L 318.5 25.7 L 322.0 28.9 L 325.5 32.3 L 329.0 35.9 L 332.5 39.6 L 336.0 43.4 L 339.5 47.3 L 343.0 51.3 L 346.5 55.3 L 350.0 59.3 L 353.5 63.4 L 357.0 67.4 L 360.5 71.3 L 364.0 75.3 L 367.5 79.1 L 371.0 82.9 L 374.5 86.5 L 378.0 90.1 L 381.5 93.5 L 385.0 96.8 L 388.5 100.0 L 392.0 103.0 L 395.5 105.9 L 399.0 108.6 L 402.5 111.2 L 406.0 113.7 L 409.5 116.0 L 413.0 118.1 L 416.5 120.1 L 420.0 122.0 L 420.0 140.0 Z"
                fill="#c9d6ff"/>
          <path d="M 210.0 140.0 L 210.0 59.3 L 213.5 55.3 L 217.0 51.3 L 220.5 47.3 L 224.0 43.4 L 227.5 39.6 L 231.0 35.9 L 234.5 32.3 L 238.0 28.9 L 241.5 25.7 L 245.0 22.6 L 248.5 19.8 L 252.0 17.2 L 255.5 14.9 L 259.0 12.9 L 262.5 11.1 L 266.0 9.6 L 269.5 8.5 L 273.0 7.7 L 276.5 7.2 L 280.0 7.0 L 283.5 7.2 L 287.0 7.7 L 290.5 8.5 L 294.0 9.6 L 297.5 11.1 L 301.0 12.9 L 304.5 14.9 L 308.0 17.2 L 311.5 19.8 L 315.0 22.6 L 318.5 25.7 L 322.0 28.9 L 325.5 32.3 L 329.0 35.9 L 332.5 39.6 L 336.0 43.4 L 339.5 47.3 L 343.0 51.3 L 346.5 55.3 L 350.0 59.3 L 350.0 140.0 Z"
                fill="#96b3f5"/>
          <path d="M 0.0 140.0 L 7.0 139.9 L 14.0 139.9 L 21.0 139.9 L 28.0 139.8 L 35.0 139.7 L 42.0 139.6 L 49.0 139.4 L 56.0 139.2 L 63.0 138.9 L 70.0 138.5 L 77.0 138.0 L 84.0 137.4 L 91.0 136.5 L 98.0 135.5 L 105.0 134.2 L 112.0 132.5 L 119.0 130.6 L 126.0 128.2 L 133.0 125.3 L 140.0 122.0 L 147.0 118.1 L 154.0 113.7 L 161.0 108.6 L 168.0 103.0 L 175.0 96.8 L 182.0 90.1 L 189.0 82.9 L 196.0 75.3 L 203.0 67.4 L 210.0 59.3 L 217.0 51.3 L 224.0 43.4 L 231.0 35.9 L 238.0 28.9 L 245.0 22.6 L 252.0 17.2 L 259.0 12.9 L 266.0 9.6 L 273.0 7.7 L 280.0 7.0 L 287.0 7.7 L 294.0 9.6 L 301.0 12.9 L 308.0 17.2 L 315.0 22.6 L 322.0 28.9 L 329.0 35.9 L 336.0 43.4 L 343.0 51.3 L 350.0 59.3 L 357.0 67.4 L 364.0 75.3 L 371.0 82.9 L 378.0 90.1 L 385.0 96.8 L 392.0 103.0 L 399.0 108.6 L 406.0 113.7 L 413.0 118.1 L 420.0 122.0 L 427.0 125.3 L 434.0 128.2 L 441.0 130.6 L 448.0 132.5 L 455.0 134.2 L 462.0 135.5 L 469.0 136.5 L 476.0 137.4 L 483.0 138.0 L 490.0 138.5 L 497.0 138.9 L 504.0 139.2 L 511.0 139.4 L 518.0 139.6 L 525.0 139.7 L 532.0 139.8 L 539.0 139.9 L 546.0 139.9 L 553.0 139.9 L 560.0 140.0"
                fill="none" stroke="#175cd3" stroke-width="2.6"/>

          <circle cx="280" cy="30" r="13" fill="#175cd3" opacity="0.2"/>
          <text x="276" y="35" font-size="12" font-weight="700" fill="#175cd3">1</text>

          <line x1="280" y1="7" x2="280" y2="140" stroke="#101828" stroke-width="1.6" stroke-dasharray="3 3"/>
          <text x="266" y="-4" font-size="12" font-weight="600" fill="#101828">μ</text>
          <circle cx="280" cy="-2" r="12" fill="#101828" opacity="0.14"/>
          <text x="276" y="2" font-size="11" font-weight="700" fill="#101828">2</text>

          <line x1="280" y1="-14" x2="350" y2="-14" stroke="#e0632f" stroke-width="1.6"/>
          <text x="300" y="-20" font-size="11" fill="#e0632f">σ</text>
          <circle cx="315" cy="-14" r="11" fill="#e0632f" opacity="0.2"/>
          <text x="311" y="-10" font-size="10.5" font-weight="700" fill="#e0632f">3</text>
        </g>

        <line x1="120" y1="170" x2="800" y2="170" stroke="#475467" stroke-width="1.6"/>
        <text x="806" y="174" font-size="11.5" fill="#475467">x</text>

        <line x1="210" y1="164" x2="210" y2="176" stroke="#475467" stroke-width="1.4"/>
        <text x="182" y="192" font-size="10.5" fill="#475467">μ−3σ</text>
        <line x1="280" y1="164" x2="280" y2="176" stroke="#475467" stroke-width="1.4"/>
        <text x="252" y="192" font-size="10.5" fill="#475467">μ−2σ</text>
        <line x1="350" y1="164" x2="350" y2="176" stroke="#475467" stroke-width="1.4"/>
        <text x="325" y="192" font-size="10.5" fill="#475467">μ−σ</text>
        <line x1="420" y1="164" x2="420" y2="176" stroke="#475467" stroke-width="1.4"/>
        <text x="412" y="192" font-size="10.5" fill="#475467">μ</text>
        <line x1="490" y1="164" x2="490" y2="176" stroke="#475467" stroke-width="1.4"/>
        <text x="470" y="192" font-size="10.5" fill="#475467">μ+σ</text>
        <line x1="560" y1="164" x2="560" y2="176" stroke="#475467" stroke-width="1.4"/>
        <text x="540" y="192" font-size="10.5" fill="#475467">μ+2σ</text>
        <line x1="630" y1="164" x2="630" y2="176" stroke="#475467" stroke-width="1.4"/>
        <text x="610" y="192" font-size="10.5" fill="#475467">μ+3σ</text>

        <line x1="350" y1="206" x2="490" y2="206" stroke="#175cd3" stroke-width="1.6"/>
        <line x1="350" y1="200" x2="350" y2="212" stroke="#175cd3" stroke-width="1.6"/>
        <line x1="490" y1="200" x2="490" y2="212" stroke="#175cd3" stroke-width="1.6"/>
        <text x="392" y="224" font-size="12" font-weight="600" fill="#175cd3">68,3 %</text>
        <circle cx="500" cy="206" r="12" fill="#175cd3" opacity="0.2"/>
        <text x="496" y="211" font-size="11" font-weight="700" fill="#175cd3">4</text>

        <line x1="280" y1="238" x2="560" y2="238" stroke="#5a78c9" stroke-width="1.6"/>
        <line x1="280" y1="232" x2="280" y2="244" stroke="#5a78c9" stroke-width="1.6"/>
        <line x1="560" y1="232" x2="560" y2="244" stroke="#5a78c9" stroke-width="1.6"/>
        <text x="382" y="256" font-size="12" font-weight="600" fill="#5a78c9">95,4 %</text>
        <circle cx="570" cy="238" r="12" fill="#5a78c9" opacity="0.22"/>
        <text x="566" y="243" font-size="11" font-weight="700" fill="#3d5aa8">5</text>

        <line x1="210" y1="270" x2="630" y2="270" stroke="#8a9bd6" stroke-width="1.6"/>
        <line x1="210" y1="264" x2="210" y2="276" stroke="#8a9bd6" stroke-width="1.6"/>
        <line x1="630" y1="264" x2="630" y2="276" stroke="#8a9bd6" stroke-width="1.6"/>
        <text x="372" y="288" font-size="12" font-weight="600" fill="#5a78c9">99,7 %</text>
        <circle cx="640" cy="270" r="12" fill="#8a9bd6" opacity="0.3"/>
        <text x="636" y="275" font-size="11" font-weight="700" fill="#3d5aa8">6</text>
      </g>

      <!-- Panneau B : loi centrée réduite -->
      <g transform="translate(40,384)">
        <rect x="0" y="0" width="400" height="220" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Variable centrée réduite</text>
        <circle cx="372" cy="20" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="367" y="25" font-size="12" font-weight="700" fill="#e0632f">7</text>

        <rect x="20" y="42" width="360" height="44" rx="10" fill="#ffffff" stroke="#f3d3c2"/>
        <text x="36" y="70" font-size="18" font-weight="700" fill="#101828">Z = (X − μ) / σ</text>

        <text x="20" y="110" font-size="12" fill="#475467">Toute variable X qui suit une loi normale N(μ, σ)</text>
        <text x="20" y="128" font-size="12" fill="#475467">se ramène, par cette transformation, à la loi normale</text>
        <text x="20" y="146" font-size="12" fill="#475467">centrée réduite N(0, 1), de moyenne 0 et d’écart type 1.</text>
        <text x="20" y="172" font-size="12" fill="#475467">C’est cette loi unique, tabulée une fois pour toutes,</text>
        <text x="20" y="190" font-size="12" fill="#475467">qui permet de calculer n’importe quelle probabilité.</text>
      </g>

      <!-- Panneau C : lecture de la table -->
      <g transform="translate(480,384)">
        <rect x="0" y="0" width="400" height="220" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Lecture de la table de Z</text>
        <circle cx="372" cy="20" r="13" fill="#12a065" opacity="0.2"/>
        <text x="367" y="25" font-size="12" font-weight="700" fill="#12a065">8</text>

        <text x="16" y="50" font-size="11.5" fill="#475467">La table donne Φ(z) = P(Z ≤ z) : on croise la ligne</text>
        <text x="16" y="68" font-size="11.5" fill="#475467">(dixième de z) et la colonne (centième de z).</text>

        <rect x="20" y="80" width="360" height="108" rx="8" fill="#ffffff" stroke="#bfe8cf"/>
        <rect x="20" y="80" width="60" height="27" fill="#eefaf3"/>
        <rect x="20" y="80" width="360" height="27" fill="none" stroke="#bfe8cf"/>
        <text x="34" y="98" font-size="11" font-weight="600" fill="#101828">z</text>
        <text x="96" y="98" font-size="11" font-weight="600" fill="#101828">0,00</text>
        <text x="166" y="98" font-size="11" font-weight="600" fill="#101828">0,06</text>
        <text x="236" y="98" font-size="11" font-weight="600" fill="#101828">0,07</text>
        <text x="306" y="98" font-size="11" font-weight="600" fill="#101828">0,08</text>
        <line x1="20" y1="107" x2="380" y2="107" stroke="#bfe8cf"/>

        <text x="34" y="125" font-size="11" fill="#475467">1,5</text>
        <text x="86" y="125" font-size="11" fill="#475467">0,9332</text>
        <text x="156" y="125" font-size="11" fill="#475467">0,9370</text>
        <rect x="220" y="112" width="70" height="20" fill="#d6f5e4"/>
        <text x="226" y="125" font-size="11" font-weight="700" fill="#0f8a58">0,9382</text>
        <text x="296" y="125" font-size="11" fill="#475467">0,9394</text>
        <line x1="20" y1="134" x2="380" y2="134" stroke="#e6efe9"/>

        <text x="34" y="152" font-size="11" fill="#475467">1,6</text>
        <text x="86" y="152" font-size="11" fill="#475467">0,9452</text>
        <text x="156" y="152" font-size="11" fill="#475467">0,9484</text>
        <text x="226" y="152" font-size="11" fill="#475467">0,9495</text>
        <text x="296" y="152" font-size="11" fill="#475467">0,9505</text>

        <text x="20" y="204" font-size="10.5" fill="#0f8a58">Exemple : pour z = 1,57 → Φ(z) ≈ 0,9382</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Courbe en cloche de Gauss-Laplace : distribution symétrique, unimodale, d’extension infinie.' },
    { ref: '2', texte: 'Moyenne μ : centre de symétrie de la distribution, où la densité est maximale ; μ = médiane = mode.' },
    { ref: '3', texte: 'Écart type σ : mesure la dispersion des valeurs autour de μ ; il correspond à la distance de μ aux points d’inflexion de la courbe.' },
    { ref: '4', texte: 'Environ 68,3 % des valeurs sont comprises dans l’intervalle [μ − σ ; μ + σ].' },
    { ref: '5', texte: 'Environ 95,4 % des valeurs sont comprises dans l’intervalle [μ − 2σ ; μ + 2σ].' },
    { ref: '6', texte: 'Environ 99,7 % des valeurs sont comprises dans l’intervalle [μ − 3σ ; μ + 3σ].' },
    { ref: '7', texte: 'La transformation Z = (X − μ) / σ ramène toute loi normale à la loi normale centrée réduite N(0, 1).' },
    { ref: '8', texte: 'La table de la loi normale centrée réduite donne, pour chaque valeur de z, la probabilité cumulée Φ(z) = P(Z ≤ z).' },
  ],
};
