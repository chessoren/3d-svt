import type { Schema } from '../../types';

export const schemaOptiqueOeil: Schema = {
  id: 'ue3-optique-oeil',
  ue: 'ue3',
  titre: 'L’œil optique',
  description:
    'Trajet des rayons lumineux dans l’œil emmétrope, puis anomalies de réfraction — myopie, hypermétropie et astigmatisme — avec la position du foyer image et la lentille correctrice adaptée.',
  categorie: 'Biophysique de la vision',
  viewBox: '0 0 920 680',
  ficheLiee: 'ue3-optique-oeil',
  motsCles: ['œil emmétrope', 'myopie', 'hypermétropie', 'astigmatisme', 'amétropie', 'lentille correctrice', 'punctum remotum'],
  svg: `
    <rect x="0" y="0" width="920" height="680" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">L’œil optique</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <defs>
        <marker id="ue3-oeil-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#e0632f"/>
        </marker>
      </defs>

      <!-- Panneau A : œil emmétrope -->
      <g transform="translate(40,64)">
        <rect x="0" y="0" width="840" height="160" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Œil emmétrope (œil normal)</text>
        <circle cx="820" cy="20" r="13" fill="#101828" opacity="0.14"/>
        <text x="816" y="25" font-size="12" font-weight="700" fill="#101828">1</text>

        <line x1="60" y1="90" x2="780" y2="90" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 4"/>
        <ellipse cx="150" cy="90" rx="16" ry="34" fill="#dbe6ff" stroke="#175cd3" stroke-width="2.4"/>
        <text x="120" y="140" font-size="11.5" fill="#475467">cornée + cristallin</text>
        <circle cx="150" cy="52" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="145" y="57" font-size="12" font-weight="700" fill="#175cd3">2</text>

        <path d="M 620 40 L 150 74 M 620 40 L 150 90 M 620 40 L 150 106" stroke="#e0632f" stroke-width="1.6" fill="none" marker-end="url(#ue3-oeil-fl)"/>
        <path d="M 150 74 L 780 90 M 150 90 L 780 90 M 150 106 L 780 90" stroke="#e0632f" stroke-width="1.6" fill="none"/>
        <circle cx="400" cy="72" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="395" y="77" font-size="12" font-weight="700" fill="#e0632f">3</text>

        <path d="M 770 55 Q 790 90 770 125" fill="none" stroke="#475467" stroke-width="2.4"/>
        <text x="762" y="146" font-size="11.5" fill="#475467">rétine</text>
        <circle cx="782" cy="90" r="13" fill="#12a065" opacity="0.24"/>
        <text x="778" y="95" font-size="12" font-weight="700" fill="#12a065">4</text>
        <text x="656" y="128" font-size="11" fill="#0f8a58">foyer image sur la rétine</text>
      </g>

      <!-- Panneau B : myopie -->
      <g transform="translate(40,244)">
        <rect x="0" y="0" width="400" height="180" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">5 · Myopie</text>
        <circle cx="370" cy="20" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="365" y="25" font-size="12" font-weight="700" fill="#d4380d">5</text>

        <line x1="40" y1="100" x2="360" y2="100" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 4"/>
        <ellipse cx="90" cy="100" rx="14" ry="30" fill="#ffe0d6" stroke="#d4380d" stroke-width="2.2"/>
        <path d="M 40 68 L 90 88 M 40 100 L 90 100 M 40 132 L 90 112" stroke="#e0632f" stroke-width="1.5" fill="none"/>
        <path d="M 90 88 L 230 100 M 90 100 L 300 100 M 90 112 L 230 100" stroke="#e0632f" stroke-width="1.5" fill="none"/>
        <circle cx="230" cy="100" r="4.4" fill="#d4380d"/>
        <text x="208" y="122" font-size="10.5" fill="#d4380d">foyer avant la rétine</text>

        <path d="M 340 68 Q 356 100 340 132" fill="none" stroke="#475467" stroke-width="2.4"/>
        <text x="322" y="150" font-size="10.5" fill="#475467">rétine</text>
        <text x="40" y="158" font-size="11" fill="#475467">œil trop long (ou cornée trop convergente)</text>

        <rect x="16" y="164" width="368" height="0" fill="none"/>
        <text x="16" y="174" font-size="11" font-weight="600" fill="#101828">Correction : lentille divergente (verres à puissance négative)</text>
      </g>

      <!-- Panneau C : hypermétropie -->
      <g transform="translate(480,244)">
        <rect x="0" y="0" width="400" height="180" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">6 · Hypermétropie</text>
        <circle cx="370" cy="20" r="13" fill="#0f8a58" opacity="0.2"/>
        <text x="365" y="25" font-size="12" font-weight="700" fill="#0f8a58">6</text>

        <line x1="40" y1="100" x2="360" y2="100" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 4"/>
        <ellipse cx="90" cy="100" rx="14" ry="30" fill="#d6f5e4" stroke="#0f8a58" stroke-width="2.2"/>
        <path d="M 40 68 L 90 90 M 40 100 L 90 100 M 40 132 L 90 110" stroke="#12a065" stroke-width="1.5" fill="none"/>
        <path d="M 90 90 L 340 100 M 90 100 L 340 100 M 90 110 L 340 100" stroke="#12a065" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
        <circle cx="400" cy="100" r="4.4" fill="#0f8a58" opacity="0.7"/>
        <text x="330" y="122" font-size="10.5" fill="#0f8a58">foyer virtuel en arrière de la rétine</text>

        <path d="M 340 68 Q 356 100 340 132" fill="none" stroke="#475467" stroke-width="2.4"/>
        <text x="322" y="150" font-size="10.5" fill="#475467">rétine</text>
        <text x="40" y="158" font-size="11" fill="#475467">œil trop court (ou cornée pas assez convergente)</text>

        <text x="16" y="174" font-size="11" font-weight="600" fill="#101828">Correction : lentille convergente (verres à puissance positive)</text>
      </g>

      <!-- Panneau D : astigmatisme -->
      <g transform="translate(40,444)">
        <rect x="0" y="0" width="840" height="170" rx="14" fill="#f2f0ff" stroke="#dcd6fb"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">7 · Astigmatisme</text>
        <circle cx="130" cy="20" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="125" y="25" font-size="12" font-weight="700" fill="#7c4df5">7</text>

        <g transform="translate(120,100)">
          <ellipse cx="0" cy="0" rx="70" ry="46" fill="#ece7fd" stroke="#7c4df5" stroke-width="2.2"/>
          <line x1="-70" y1="0" x2="70" y2="0" stroke="#5f3dc4" stroke-width="2"/>
          <line x1="0" y1="-46" x2="0" y2="46" stroke="#e0632f" stroke-width="2"/>
          <text x="-92" y="4" font-size="10.5" fill="#5f3dc4">rayon min</text>
          <text x="4" y="-52" font-size="10.5" fill="#e0632f">rayon max</text>
          <text x="-48" y="70" font-size="11" fill="#475467">cornée de courbure non sphérique</text>
        </g>

        <path d="M 240 60 L 420 82 M 240 100 L 420 100 M 240 140 L 420 118" stroke="#7c4df5" stroke-width="1.6" fill="none"/>
        <line x1="420" y1="70" x2="420" y2="130" stroke="#5f3dc4" stroke-width="2.4"/>
        <text x="404" y="146" font-size="10.5" fill="#5f3dc4">ligne focale 1</text>
        <circle cx="420" cy="100" r="12" fill="#5f3dc4" opacity="0.24"/>
        <text x="416" y="104" font-size="11" font-weight="700" fill="#5f3dc4">8</text>

        <path d="M 420 82 L 560 60 M 420 100 L 560 100 M 420 118 L 560 140" stroke="#e0632f" stroke-width="1.6" fill="none"/>
        <line x1="560" y1="50" x2="560" y2="150" stroke="#e0632f" stroke-width="2.4"/>
        <text x="540" y="164" font-size="10.5" fill="#e0632f">ligne focale 2</text>
        <circle cx="560" cy="55" r="12" fill="#e0632f" opacity="0.22"/>
        <text x="556" y="59" font-size="11" font-weight="700" fill="#e0632f">9</text>

        <text x="600" y="70" font-size="11" fill="#475467">L’astigmatisme ne donne pas un foyer</text>
        <text x="600" y="88" font-size="11" fill="#475467">ponctuel mais deux lignes focales</text>
        <text x="600" y="106" font-size="11" fill="#475467">perpendiculaires, à des distances différentes.</text>
        <text x="600" y="134" font-size="11" font-weight="600" fill="#101828">Correction : verre (ou lentille) cylindrique</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Œil emmétrope : œil sans anomalie de réfraction, qui forme une image nette sans effort accommodatif.' },
    { ref: '2', texte: 'Système optique convergent de l’œil (dioptre cornéen puis cristallin), qui concentre les rayons lumineux.' },
    { ref: '3', texte: 'Rayons parallèles issus d’un objet éloigné (à l’infini) qui entrent dans l’œil.' },
    { ref: '4', texte: 'Chez l’emmétrope, le foyer image se forme exactement sur la rétine.' },
    { ref: '5', texte: 'Myopie : le système optique est trop convergent pour la longueur du globe ; le foyer se forme en avant de la rétine.' },
    { ref: '6', texte: 'Hypermétropie : le système optique est insuffisamment convergent ; le foyer virtuel se situe en arrière de la rétine.' },
    { ref: '7', texte: 'Astigmatisme : courbure cornéenne non sphérique (torique), avec deux rayons de courbure différents selon les méridiens.' },
    { ref: '8', texte: 'Première ligne focale, formée par le méridien le plus convergent.' },
    { ref: '9', texte: 'Seconde ligne focale, formée par le méridien le moins convergent, à une distance différente de la première.' },
  ],
};
