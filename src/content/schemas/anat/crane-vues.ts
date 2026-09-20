import type { Schema } from '../../types';

export const schemaCraneVues: Schema = {
  id: 'anat-crane-vues',
  ue: 'anat',
  titre: 'Le crâne : vues de profil et de face',
  description:
    'Crâne osseux vu de profil (norma lateralis) et de face (norma frontalis) : os de la voûte, sutures, orbite et massif facial.',
  categorie: 'Anatomie de la tête osseuse',
  viewBox: '0 0 920 640',
  ficheLiee: 'anat-tete-osseuse',
  motsCles: [
    'crâne',
    'os frontal',
    'os pariétal',
    'os temporal',
    'suture coronale',
    'orbite',
    'mandibule',
    'arcade zygomatique',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">1 · Crâne de profil (norma lateralis)</text>
      <line x1="40" y1="54" x2="280" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(230,110)">
        <!-- voûte crânienne -->
        <path d="M -110 60 Q -130 -40 -40 -80 Q 40 -110 100 -60 Q 130 -20 118 30"
              fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <!-- os frontal -->
        <circle cx="-60" cy="-52" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="-65" y="-47" font-size="12" font-weight="700" fill="#e0632f">1</text>
        <!-- os pariétal -->
        <circle cx="20" cy="-92" r="13" fill="#12a065" opacity="0.2"/>
        <text x="15" y="-87" font-size="12" font-weight="700" fill="#12a065">2</text>
        <!-- suture coronale -->
        <path d="M -20 -86 Q -8 -50 -2 6" fill="none" stroke="#101828" stroke-width="1.6" stroke-dasharray="2 3"/>
        <circle cx="-2" cy="-40" r="13" fill="#101828" opacity="0.14"/>
        <text x="-7" y="-35" font-size="12" font-weight="700" fill="#101828">5</text>
        <!-- suture lambdoïde -->
        <path d="M 78 -66 Q 60 -20 70 26" fill="none" stroke="#101828" stroke-width="1.6" stroke-dasharray="2 3"/>
        <circle cx="86" cy="-30" r="13" fill="#101828" opacity="0.14"/>
        <text x="81" y="-25" font-size="12" font-weight="700" fill="#101828">6</text>
        <!-- os occipital -->
        <path d="M 70 26 Q 100 40 118 30 Q 120 60 96 74 L 70 56 Z" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="108" cy="46" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="103" y="51" font-size="12" font-weight="700" fill="#175cd3">4</text>
        <!-- os temporal -->
        <path d="M -2 6 Q 40 -4 70 26 Q 60 60 10 66 Q -14 56 -14 30 Z" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="20" cy="30" r="13" fill="#c9922b" opacity="0.24"/>
        <text x="15" y="35" font-size="12" font-weight="700" fill="#c9922b">3</text>

        <!-- conduit auditif externe / processus mastoïde -->
        <circle cx="46" cy="42" r="7" fill="#ffffff" stroke="#101828" stroke-width="1.6"/>
        <path d="M 40 52 Q 34 74 50 84" fill="none" stroke="#c9b892" stroke-width="10" stroke-linecap="round"/>
        <circle cx="30" cy="76" r="13" fill="#e0632f" opacity="0.24"/>
        <text x="25" y="81" font-size="12" font-weight="700" fill="#e0632f">12</text>

        <!-- orbite -->
        <ellipse cx="-98" cy="10" rx="28" ry="24" fill="#eef2ff" stroke="#7c4df5" stroke-width="2"/>
        <circle cx="-98" cy="10" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="-103" y="15" font-size="12" font-weight="700" fill="#7c4df5">7</text>

        <!-- os propre du nez -->
        <rect x="-116" y="30" width="14" height="20" rx="3" fill="#f5ead9" stroke="#c9b892"/>
        <circle cx="-130" cy="36" r="13" fill="#12a065" opacity="0.28"/>
        <text x="-135" y="41" font-size="12" font-weight="700" fill="#12a065">8</text>

        <!-- maxillaire -->
        <path d="M -104 44 Q -86 60 -60 62 L -66 78 Q -100 76 -110 56 Z" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-100" cy="66" r="13" fill="#e0632f" opacity="0.24"/>
        <text x="-105" y="71" font-size="12" font-weight="700" fill="#e0632f">9</text>

        <!-- arcade zygomatique -->
        <path d="M -70 30 Q -20 26 10 40" fill="none" stroke="#c9b892" stroke-width="8" stroke-linecap="round"/>
        <circle cx="-30" cy="20" r="13" fill="#c9922b" opacity="0.28"/>
        <text x="-35" y="25" font-size="12" font-weight="700" fill="#c9922b">11</text>

        <!-- mandibule -->
        <path d="M -68 78 Q -40 100 10 92 Q 30 84 30 60 L 14 58 Q 10 74 -20 80 Q -50 82 -64 66 Z"
              fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-10" cy="96" r="13" fill="#175cd3" opacity="0.24"/>
        <text x="-15" y="101" font-size="12" font-weight="700" fill="#175cd3">10</text>
      </g>

      <text x="500" y="42" font-size="19" font-weight="600" fill="#101828">2 · Crâne de face (norma frontalis)</text>
      <line x1="500" y1="54" x2="740" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(690,110)">
        <path d="M -100 -20 Q -110 -80 0 -96 Q 110 -80 100 -20 Q 110 60 60 110 L -60 110 Q -110 60 -100 -20 Z"
              fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <line x1="-88" y1="-56" x2="88" y2="-56" stroke="#101828" stroke-width="1.4" stroke-dasharray="2 3"/>
        <circle cx="0" cy="-70" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="-4" y="-65" font-size="12" font-weight="700" fill="#e0632f">1</text>

        <ellipse cx="-40" cy="-14" rx="30" ry="26" fill="#eef2ff" stroke="#7c4df5" stroke-width="2"/>
        <ellipse cx="40" cy="-14" rx="30" ry="26" fill="#eef2ff" stroke="#7c4df5" stroke-width="2"/>
        <circle cx="-64" cy="-14" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="-69" y="-9" font-size="12" font-weight="700" fill="#7c4df5">7</text>

        <path d="M -6 14 L 6 14 L 3 34 L -3 34 Z" fill="#f5ead9" stroke="#c9b892"/>
        <circle cx="18" cy="24" r="13" fill="#12a065" opacity="0.28"/>
        <text x="13" y="29" font-size="12" font-weight="700" fill="#12a065">8</text>

        <path d="M -70 20 Q -60 46 -20 52 L -30 76 Q -76 66 -84 32 Z" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <path d="M 70 20 Q 60 46 20 52 L 30 76 Q 76 66 84 32 Z" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-72" cy="46" r="13" fill="#e0632f" opacity="0.24"/>
        <text x="-77" y="51" font-size="12" font-weight="700" fill="#e0632f">9</text>

        <path d="M -46 76 Q 0 96 46 76 Q 50 100 20 112 L -20 112 Q -50 100 -46 76 Z"
              fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="0" cy="108" r="13" fill="#175cd3" opacity="0.24"/>
        <text x="-4" y="113" font-size="12" font-weight="700" fill="#175cd3">10</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Os frontal : forme le front, la voûte de l’orbite et une partie de la fosse crânienne antérieure.' },
    { ref: '2', texte: 'Os pariétal : paire, forme la majeure partie de la voûte crânienne.' },
    { ref: '3', texte: 'Os temporal : contient l’oreille moyenne et interne, porte le conduit auditif externe.' },
    { ref: '4', texte: 'Os occipital : forme l’arrière et la base du crâne, contient le foramen magnum.' },
    { ref: '5', texte: 'Suture coronale : entre l’os frontal et les os pariétaux.' },
    { ref: '6', texte: 'Suture lambdoïde : entre les os pariétaux et l’os occipital.' },
    { ref: '7', texte: 'Orbite : cavité osseuse logeant le globe oculaire, formée par plusieurs os du crâne et de la face.' },
    { ref: '8', texte: 'Os propres du nez : forment le dos du nez, prolongés par les cartilages nasaux.' },
    { ref: '9', texte: 'Maxillaire : os pair, porte l’arcade dentaire supérieure et participe au plancher de l’orbite.' },
    { ref: '10', texte: 'Mandibule : seul os mobile du crâne, porte l’arcade dentaire inférieure.' },
    { ref: '11', texte: 'Arcade zygomatique : pont osseux entre l’os temporal et l’os zygomatique, en avant du conduit auditif.' },
    { ref: '12', texte: 'Conduit auditif externe et processus mastoïde de l’os temporal, en arrière de l’articulation temporo-mandibulaire.' },
  ],
};
