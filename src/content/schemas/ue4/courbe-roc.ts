import type { Schema } from '../../types';

export const schemaCourbeRoc: Schema = {
  id: 'ue4-courbe-roc',
  ue: 'ue4',
  titre: 'La courbe ROC',
  description:
    'Courbe ROC (Receiver Operating Characteristic) : axes sensibilité et un moins la spécificité, diagonale du hasard, effet du déplacement du seuil, aire sous la courbe et comparaison de deux tests.',
  categorie: 'Biostatistiques',
  viewBox: '0 0 920 640',
  ficheLiee: 'ue4-tests-diagnostiques',
  motsCles: ['courbe ROC', 'aire sous la courbe', 'AUC', 'sensibilité', 'spécificité', 'seuil de positivité'],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">La courbe ROC</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau A : la courbe -->
      <g transform="translate(40,64)">
        <rect x="0" y="0" width="500" height="500" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Espace ROC</text>

        <g transform="translate(90,50)">
          <!-- aire sous la courbe A -->
          <path d="M 0.0 300.0 L 5.0 285.2 L 10.0 271.0 L 15.0 257.2 L 20.0 243.9 L 25.0 231.1 L 30.0 218.7 L 35.0 206.8 L 40.0 195.3 L 45.0 184.2 L 50.0 173.6 L 55.0 163.4 L 60.0 153.6 L 65.0 144.2 L 70.0 135.2 L 75.0 126.6 L 80.0 118.3 L 85.0 110.4 L 90.0 102.9 L 95.0 95.7 L 100.0 88.9 L 105.0 82.4 L 110.0 76.2 L 115.0 70.4 L 120.0 64.8 L 125.0 59.5 L 130.0 54.6 L 135.0 49.9 L 140.0 45.5 L 145.0 41.4 L 150.0 37.5 L 155.0 33.9 L 160.0 30.5 L 165.0 27.3 L 170.0 24.4 L 175.0 21.7 L 180.0 19.2 L 185.0 16.9 L 190.0 14.8 L 195.0 12.9 L 200.0 11.1 L 205.0 9.5 L 210.0 8.1 L 215.0 6.8 L 220.0 5.7 L 225.0 4.7 L 230.0 3.8 L 235.0 3.1 L 240.0 2.4 L 245.0 1.8 L 250.0 1.4 L 255.0 1.0 L 260.0 0.7 L 265.0 0.5 L 270.0 0.3 L 275.0 0.2 L 280.0 0.1 L 285.0 0.0 L 290.0 0.0 L 295.0 0.0 L 300.0 0.0 L 300.0 300.0 Z"
                fill="#175cd3" opacity="0.14"/>

          <!-- axes -->
          <line x1="0" y1="0" x2="0" y2="300" stroke="#475467" stroke-width="1.6"/>
          <line x1="0" y1="300" x2="300" y2="300" stroke="#475467" stroke-width="1.6"/>
          <line x1="0" y1="225" x2="-6" y2="225" stroke="#475467" stroke-width="1.2"/>
          <line x1="0" y1="150" x2="-6" y2="150" stroke="#475467" stroke-width="1.2"/>
          <line x1="0" y1="75" x2="-6" y2="75" stroke="#475467" stroke-width="1.2"/>
          <text x="-26" y="304" font-size="10.5" fill="#475467">0</text>
          <text x="-32" y="229" font-size="10.5" fill="#475467">0,25</text>
          <text x="-30" y="154" font-size="10.5" fill="#475467">0,5</text>
          <text x="-32" y="79" font-size="10.5" fill="#475467">0,75</text>
          <text x="-16" y="4" font-size="10.5" fill="#475467">1</text>
          <text x="-46" y="150" font-size="12" fill="#475467" transform="rotate(-90 -46 150)">Sensibilité (Se)</text>
          <circle cx="-54" cy="150" r="13" fill="#175cd3" opacity="0.2"/>
          <text x="-59" y="155" font-size="12" font-weight="700" fill="#175cd3">1</text>

          <line x1="75" y1="300" x2="75" y2="306" stroke="#475467" stroke-width="1.2"/>
          <line x1="150" y1="300" x2="150" y2="306" stroke="#475467" stroke-width="1.2"/>
          <line x1="225" y1="300" x2="225" y2="306" stroke="#475467" stroke-width="1.2"/>
          <text x="0" y="322" font-size="10.5" fill="#475467">0</text>
          <text x="66" y="322" font-size="10.5" fill="#475467">0,25</text>
          <text x="142" y="322" font-size="10.5" fill="#475467">0,5</text>
          <text x="216" y="322" font-size="10.5" fill="#475467">0,75</text>
          <text x="292" y="322" font-size="10.5" fill="#475467">1</text>
          <text x="90" y="342" font-size="12" fill="#475467">1 − Spécificité (1 − Sp)</text>
          <circle cx="90" cy="352" r="13" fill="#e0632f" opacity="0.2"/>
          <text x="85" y="357" font-size="12" font-weight="700" fill="#e0632f">2</text>

          <!-- diagonale du hasard -->
          <line x1="0" y1="300" x2="300" y2="0" stroke="#98a2b3" stroke-width="2" stroke-dasharray="5 4"/>
          <text x="150" y="180" font-size="11" fill="#8a94a8" transform="rotate(-45 150 180)">diagonale du hasard (AUC = 0,5)</text>
          <circle cx="230" cy="72" r="13" fill="#98a2b3" opacity="0.3"/>
          <text x="225" y="77" font-size="12" font-weight="700" fill="#475467">3</text>

          <!-- courbe test B (moins performant) -->
          <path d="M 0.0 300.0 L 5.0 292.0 L 10.0 284.2 L 15.0 276.4 L 20.0 268.6 L 25.0 261.0 L 30.0 253.5 L 35.0 246.0 L 40.0 238.6 L 45.0 231.3 L 50.0 224.1 L 55.0 217.0 L 60.0 209.9 L 65.0 203.0 L 70.0 196.1 L 75.0 189.3 L 80.0 182.6 L 85.0 176.0 L 90.0 169.5 L 95.0 163.1 L 100.0 156.8 L 105.0 150.6 L 110.0 144.5 L 115.0 138.4 L 120.0 132.5 L 125.0 126.6 L 130.0 120.9 L 135.0 115.3 L 140.0 109.7 L 145.0 104.3 L 150.0 99.0 L 155.0 93.7 L 160.0 88.6 L 165.0 83.6 L 170.0 78.7 L 175.0 73.9 L 180.0 69.2 L 185.0 64.7 L 190.0 60.2 L 195.0 55.9 L 200.0 51.7 L 205.0 47.7 L 210.0 43.7 L 215.0 39.9 L 220.0 36.2 L 225.0 32.6 L 230.0 29.2 L 235.0 26.0 L 240.0 22.8 L 245.0 19.9 L 250.0 17.1 L 255.0 14.4 L 260.0 11.9 L 265.0 9.6 L 270.0 7.5 L 275.0 5.6 L 280.0 3.9 L 285.0 2.5 L 290.0 1.3 L 295.0 0.4 L 300.0 0.0"
                fill="none" stroke="#7c4df5" stroke-width="2.6"/>
          <circle cx="130" cy="121" r="12" fill="#7c4df5" opacity="0.24"/>
          <text x="126" y="125" font-size="11" font-weight="700" fill="#7c4df5">7</text>

          <!-- courbe test A (performant) -->
          <path d="M 0.0 300.0 L 5.0 285.2 L 10.0 271.0 L 15.0 257.2 L 20.0 243.9 L 25.0 231.1 L 30.0 218.7 L 35.0 206.8 L 40.0 195.3 L 45.0 184.2 L 50.0 173.6 L 55.0 163.4 L 60.0 153.6 L 65.0 144.2 L 70.0 135.2 L 75.0 126.6 L 80.0 118.3 L 85.0 110.4 L 90.0 102.9 L 95.0 95.7 L 100.0 88.9 L 105.0 82.4 L 110.0 76.2 L 115.0 70.4 L 120.0 64.8 L 125.0 59.5 L 130.0 54.6 L 135.0 49.9 L 140.0 45.5 L 145.0 41.4 L 150.0 37.5 L 155.0 33.9 L 160.0 30.5 L 165.0 27.3 L 170.0 24.4 L 175.0 21.7 L 180.0 19.2 L 185.0 16.9 L 190.0 14.8 L 195.0 12.9 L 200.0 11.1 L 205.0 9.5 L 210.0 8.1 L 215.0 6.8 L 220.0 5.7 L 225.0 4.7 L 230.0 3.8 L 235.0 3.1 L 240.0 2.4 L 245.0 1.8 L 250.0 1.4 L 255.0 1.0 L 260.0 0.7 L 265.0 0.5 L 270.0 0.3 L 275.0 0.2 L 280.0 0.1 L 285.0 0.0 L 290.0 0.0 L 295.0 0.0 L 300.0 0.0"
                fill="none" stroke="#175cd3" stroke-width="3"/>
          <circle cx="34" cy="207" r="12" fill="#175cd3" opacity="0.28"/>
          <text x="29" y="211" font-size="11" font-weight="700" fill="#175cd3">4</text>

          <!-- point de fonctionnement / seuil -->
          <circle cx="55" cy="163" r="5.5" fill="#d4380d"/>
          <line x1="55" y1="163" x2="110" y2="120" stroke="#d4380d" stroke-width="1.2" stroke-dasharray="2 3"/>
          <circle cx="120" cy="112" r="13" fill="#d4380d" opacity="0.2"/>
          <text x="115" y="117" font-size="12" font-weight="700" fill="#d4380d">5</text>
          <text x="120" y="100" font-size="10.5" fill="#d4380d">un seuil = un point de la courbe</text>

          <text x="130" y="220" font-size="11" font-weight="600" fill="#175cd3">AUC</text>
          <circle cx="160" cy="216" r="12" fill="#12a065" opacity="0.24"/>
          <text x="156" y="220" font-size="11" font-weight="700" fill="#0f8a58">6</text>
        </g>
      </g>

      <!-- Panneau B : interprétation -->
      <g transform="translate(560,64)">
        <rect x="0" y="0" width="320" height="500" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Interprétation de l’AUC</text>
        <circle cx="290" cy="20" r="13" fill="#12a065" opacity="0.2"/>
        <text x="284" y="25" font-size="12" font-weight="700" fill="#12a065">6</text>

        <text x="16" y="52" font-size="11.5" fill="#475467">AUC : probabilité qu’un malade tiré au</text>
        <text x="16" y="70" font-size="11.5" fill="#475467">hasard ait un résultat de test supérieur</text>
        <text x="16" y="88" font-size="11.5" fill="#475467">à celui d’un non-malade tiré au hasard.</text>

        <rect x="16" y="102" width="288" height="130" rx="8" fill="#ffffff" stroke="#f3d3c2"/>
        <text x="30" y="122" font-size="11.5" fill="#101828">AUC = 0,5</text>
        <text x="140" y="122" font-size="11" fill="#8a94a8">test non informatif</text>
        <text x="30" y="146" font-size="11.5" fill="#101828">0,7 ≤ AUC &lt; 0,8</text>
        <text x="170" y="146" font-size="11" fill="#8a94a8">acceptable</text>
        <text x="30" y="170" font-size="11.5" fill="#101828">0,8 ≤ AUC &lt; 0,9</text>
        <text x="170" y="170" font-size="11" fill="#8a94a8">excellent</text>
        <text x="30" y="194" font-size="11.5" fill="#101828">AUC ≥ 0,9</text>
        <text x="140" y="194" font-size="11" fill="#8a94a8">exceptionnel</text>
        <text x="30" y="218" font-size="11.5" fill="#101828">AUC = 1</text>
        <text x="140" y="218" font-size="11" fill="#8a94a8">test parfait</text>

        <text x="16" y="254" font-size="12" font-weight="600" fill="#101828">Comparer deux tests</text>
        <text x="16" y="274" font-size="11.5" fill="#475467">Le test dont la courbe est la plus proche</text>
        <text x="16" y="292" font-size="11.5" fill="#475467">du coin supérieur gauche, et dont l’AUC</text>
        <text x="16" y="310" font-size="11.5" fill="#475467">est la plus grande, est le plus performant.</text>

        <circle cx="30" cy="336" r="8" fill="#175cd3"/>
        <text x="46" y="341" font-size="11" fill="#475467">test A — plus performant</text>
        <circle cx="30" cy="360" r="8" fill="#7c4df5"/>
        <text x="46" y="365" font-size="11" fill="#475467">test B — moins performant</text>

        <text x="16" y="398" font-size="12" font-weight="600" fill="#101828">Choix du seuil optimal</text>
        <text x="16" y="418" font-size="11.5" fill="#475467">Le point de la courbe le plus proche de</text>
        <text x="16" y="436" font-size="11.5" fill="#475467">l’angle (0 ; 1) offre le meilleur compromis</text>
        <text x="16" y="454" font-size="11.5" fill="#475467">entre sensibilité et spécificité (indice de Youden</text>
        <text x="16" y="472" font-size="11.5" fill="#475467">= Se + Sp − 1, maximal en ce point).</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Axe des ordonnées : sensibilité du test, de 0 à 1.' },
    { ref: '2', texte: 'Axe des abscisses : complément à 1 de la spécificité (1 − Sp), de 0 à 1.' },
    { ref: '3', texte: 'Diagonale du hasard : courbe d’un test totalement non informatif, d’aire sous la courbe égale à 0,5.' },
    { ref: '4', texte: 'Courbe ROC obtenue en faisant varier le seuil de positivité du test de la valeur la plus stricte à la plus large.' },
    { ref: '5', texte: 'Chaque seuil de positivité correspond à un point précis de la courbe, avec un couple (Se, 1 − Sp) donné.' },
    { ref: '6', texte: 'Aire sous la courbe (AUC) : mesure globale de la performance discriminante du test, indépendante du seuil choisi.' },
    { ref: '7', texte: 'Courbe d’un second test, moins performant : plus proche de la diagonale, donc d’AUC plus faible.' },
  ],
};
