import type { Schema } from '../../types';

export const schemaCycleCellulaire: Schema = {
  id: 'biocell-cycle-cellulaire',
  ue: 'biocell',
  titre: 'Le cycle cellulaire',
  description:
    'Représentation du cycle cellulaire en roue avec les phases G1, S, G2 et M, la sortie en G0, les points de contrôle, les couples cycline-CDK et la variation de la quantité d’ADN.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 620',
  ficheLiee: 'biocell-cycle-cellulaire',
  motsCles: ['cycle cellulaire', 'phase G1', 'phase S', 'phase G2', 'mitose', 'points de contrôle', 'cycline', 'CDK'],
  svg: `
    <rect x="0" y="0" width="920" height="620" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="biocell-cycle-cellulaire-fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="36" font-size="19" font-weight="600" fill="#101828">Le cycle cellulaire</text>
      <line x1="40" y1="48" x2="200" y2="48" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Roue du cycle -->
      <g transform="translate(255,290)">
        <!-- Secteurs -->
        <path d="M 0 0 L 0 -170 A 170 170 0 0 1 160 -55 Z" fill="#eaf2ff" stroke="#ffffff" stroke-width="3"/>
        <path d="M 0 0 L 160 -55 A 170 170 0 0 1 99 145 Z" fill="#fdece0" stroke="#ffffff" stroke-width="3"/>
        <path d="M 0 0 L 99 145 A 170 170 0 0 1 -99 145 Z" fill="#f6f0ff" stroke="#ffffff" stroke-width="3"/>
        <path d="M 0 0 L -99 145 A 170 170 0 0 1 0 -170 Z" fill="#eafaf1" stroke="#ffffff" stroke-width="3"/>

        <circle r="170" fill="none" stroke="#98a2b3" stroke-width="2"/>
        <circle r="46" fill="#ffffff" stroke="#d0d5dd" stroke-width="1.6"/>
        <text x="0" y="-4" font-size="12.5" font-weight="600" fill="#101828" text-anchor="middle">INTERPHASE</text>
        <text x="0" y="14" font-size="11" fill="#475467" text-anchor="middle">+ mitose</text>

        <!-- Labels des phases -->
        <text x="-58" y="-85" font-size="15" font-weight="700" fill="#175cd3">G1</text>
        <circle cx="-36" cy="-92" r="13" fill="#175cd3" opacity="0.22"/>
        <text x="-40" y="-87" font-size="11" font-weight="700" fill="#175cd3">1</text>

        <text x="120" y="-8" font-size="15" font-weight="700" fill="#e0632f">S</text>
        <circle cx="120" cy="20" r="13" fill="#e0632f" opacity="0.22"/>
        <text x="116" y="25" font-size="11" font-weight="700" fill="#e0632f">2</text>

        <text x="30" y="110" font-size="15" font-weight="700" fill="#7c4df5">G2</text>
        <circle cx="30" cy="130" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="26" y="135" font-size="11" font-weight="700" fill="#7c4df5">3</text>

        <text x="-70" y="100" font-size="15" font-weight="700" fill="#0a7a4d">M</text>
        <circle cx="-70" cy="122" r="13" fill="#0a7a4d" opacity="0.22"/>
        <text x="-74" y="127" font-size="11" font-weight="700" fill="#0a7a4d">4</text>

        <!-- Flèche de sens de rotation -->
        <path d="M 0 -180 A 180 180 0 0 1 172 -60" fill="none" stroke="#101828" stroke-width="1.6" marker-end="url(#biocell-cycle-cellulaire-fl)"/>

        <!-- Points de contrôle -->
        <circle cx="0" cy="-170" r="7" fill="#101828"/>
        <circle cx="12" cy="-198" r="13" fill="#101828" opacity="0.16"/>
        <text x="8" y="-193" font-size="11" font-weight="700" fill="#101828">5</text>

        <circle cx="140" cy="0" r="7" fill="#101828"/>
        <circle cx="172" cy="0" r="13" fill="#101828" opacity="0.16"/>
        <text x="168" y="5" font-size="11" font-weight="700" fill="#101828">6</text>

        <circle cx="-70" cy="145" r="7" fill="#101828"/>
        <circle cx="-96" cy="168" r="13" fill="#101828" opacity="0.16"/>
        <text x="-100" y="173" font-size="11" font-weight="700" fill="#101828">7</text>

        <!-- Sortie en G0 -->
        <path d="M -140 -100 q -50 -10 -70 30" fill="none" stroke="#98a2b3" stroke-width="1.8" stroke-dasharray="4 4" marker-end="url(#biocell-cycle-cellulaire-fl)"/>
        <text x="-260" y="-40" font-size="13" font-weight="600" fill="#475467">G0</text>
        <circle cx="-236" cy="-46" r="13" fill="#98a2b3" opacity="0.24"/>
        <text x="-240" y="-41" font-size="11" font-weight="700" fill="#475467">8</text>
      </g>

      <!-- Légende des points de contrôle -->
      <g transform="translate(500,120)">
        <rect x="0" y="0" width="380" height="130" rx="14" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="16" y="24" font-size="13" font-weight="600" fill="#101828">Points de contrôle (checkpoints)</text>
        <text x="16" y="48" font-size="11.5" fill="#475467">5 · Point G1/S : vérifie la taille cellulaire et l’intégrité de l’ADN</text>
        <text x="16" y="68" font-size="11.5" fill="#475467">6 · Point G2/M : vérifie que la réplication est complète</text>
        <text x="16" y="88" font-size="11.5" fill="#475467">7 · Point métaphase-anaphase (fuseau) : vérifie l’attachement</text>
        <text x="34" y="106" font-size="11.5" fill="#475467">correct des chromosomes au fuseau mitotique</text>
      </g>

      <!-- Bandeau cyclines-CDK -->
      <g transform="translate(500,270)">
        <rect x="0" y="0" width="380" height="100" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="24" font-size="13" font-weight="600" fill="#101828">Couples cycline-CDK</text>
        <circle cx="330" cy="18" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="326" y="23" font-size="11" font-weight="700" fill="#e0632f">9</text>
        <text x="16" y="46" font-size="11.5" fill="#475467">Cycline D-CDK4/6 (G1) → Cycline E-CDK2 (G1/S) →</text>
        <text x="16" y="64" font-size="11.5" fill="#475467">Cycline A-CDK2 (S) → Cycline B-CDK1 (G2/M)</text>
        <text x="16" y="86" font-size="11.5" fill="#475467">Chaque couple est spécifique d’une transition du cycle.</text>
      </g>

      <!-- Graphique quantité d'ADN -->
      <g transform="translate(500,400)">
        <text x="0" y="0" font-size="13" font-weight="600" fill="#101828">Quantité d’ADN au cours du cycle</text>
        <circle cx="300" cy="-6" r="13" fill="#0a7a4d" opacity="0.2"/>
        <text x="296" y="-1" font-size="11" font-weight="700" fill="#0a7a4d">10</text>
        <line x1="0" y1="150" x2="380" y2="150" stroke="#98a2b3" stroke-width="1.6"/>
        <line x1="0" y1="150" x2="0" y2="20" stroke="#98a2b3" stroke-width="1.6"/>
        <text x="-16" y="150" font-size="10.5" fill="#8a94a8">2n</text>
        <text x="-16" y="60" font-size="10.5" fill="#8a94a8">4n</text>
        <line x1="0" y1="60" x2="380" y2="60" stroke="#e4e9f5" stroke-width="1" stroke-dasharray="3 3"/>
        <path d="M 0 150 L 90 150 L 220 60 L 300 60 L 380 150" fill="none" stroke="#0a7a4d" stroke-width="2.6"/>
        <text x="20" y="168" font-size="10.5" fill="#175cd3">G1</text>
        <text x="130" y="168" font-size="10.5" fill="#e0632f">S</text>
        <text x="240" y="168" font-size="10.5" fill="#7c4df5">G2</text>
        <text x="330" y="168" font-size="10.5" fill="#0a7a4d">M</text>
      </g>

      <text x="40" y="590" font-size="12" fill="#8a94a8">G0 : sortie réversible du cycle, cellule quiescente ou différenciée de façon stable.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Phase G1 : croissance cellulaire, synthèse des protéines et des ARN nécessaires à la réplication.' },
    { ref: '2', texte: 'Phase S : réplication complète de l’ADN, la quantité d’ADN passe de 2n à 4n.' },
    { ref: '3', texte: 'Phase G2 : contrôle de la réplication et préparation des structures nécessaires à la mitose.' },
    { ref: '4', texte: 'Phase M (mitose) : séparation des chromatides puis division du cytoplasme.' },
    { ref: '5', texte: 'Point de contrôle G1/S : vérifie la taille de la cellule et l’absence de lésions de l’ADN.' },
    { ref: '6', texte: 'Point de contrôle G2/M : vérifie l’achèvement correct de la réplication.' },
    { ref: '7', texte: 'Point de contrôle du fuseau : vérifie l’attachement de tous les chromosomes avant l’anaphase.' },
    { ref: '8', texte: 'G0 : état de quiescence, la cellule sort du cycle sans se diviser.' },
    { ref: '9', texte: 'Chaque transition du cycle est pilotée par un couple cycline-CDK spécifique.' },
    { ref: '10', texte: 'La quantité d’ADN double pendant la phase S puis revient à 2n après la mitose.' },
  ],
};
