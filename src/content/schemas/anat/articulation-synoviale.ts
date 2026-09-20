import type { Schema } from '../../types';

export const schemaArticulationSynoviale: Schema = {
  id: 'anat-articulation-synoviale',
  ue: 'anat',
  titre: 'Coupe d’une articulation synoviale',
  description:
    'Coupe schématique d’une articulation synoviale (diarthrose) : cartilage, capsule, membrane synoviale, ligaments, ménisque et bourse séreuse, puis classification selon les degrés de liberté.',
  categorie: 'Arthrologie',
  viewBox: '0 0 920 600',
  ficheLiee: 'anat-arthrologie',
  motsCles: [
    'articulation synoviale',
    'diarthrose',
    'cartilage hyalin',
    'capsule articulaire',
    'membrane synoviale',
    'ménisque',
    'bourse séreuse',
    'degrés de liberté',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="600" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">1 · Coupe d’une articulation synoviale type</text>
      <line x1="40" y1="54" x2="280" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(340,90)">
        <!-- os épiphysaires -->
        <path d="M -160 -10 Q -60 40 0 44 Q 60 40 160 -10 L 160 -110 L -160 -110 Z" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <path d="M -160 210 Q -60 160 0 156 Q 60 160 160 210 L 160 300 L -160 300 Z" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-176" cy="-60" r="13" fill="#c9922b" opacity="0.22"/>
        <text x="-181" y="-55" font-size="12" font-weight="700" fill="#c9922b">1</text>
        <text x="-160" y="-124" font-size="12.5" fill="#475467">épiphyse osseuse</text>

        <!-- cartilage hyalin -->
        <path d="M -160 -10 Q -60 40 0 44 Q 60 40 160 -10" fill="none" stroke="#a7c7ff" stroke-width="10" stroke-linecap="round"/>
        <path d="M -160 210 Q -60 160 0 156 Q 60 160 160 210" fill="none" stroke="#a7c7ff" stroke-width="10" stroke-linecap="round"/>
        <circle cx="60" cy="24" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="55" y="29" font-size="12" font-weight="700" fill="#175cd3">2</text>

        <!-- ménisque -->
        <path d="M -40 60 Q 0 76 40 60 L 30 88 Q 0 100 -30 88 Z" fill="#fbe8c6" stroke="#c9922b" stroke-width="1.6"/>
        <circle cx="0" cy="80" r="13" fill="#c9922b" opacity="0.24"/>
        <text x="-4" y="85" font-size="12" font-weight="700" fill="#c9922b">7</text>

        <!-- cavité et liquide synovial -->
        <ellipse cx="-70" cy="76" rx="34" ry="26" fill="#eaf6ff" opacity="0.9"/>
        <circle cx="-70" cy="76" r="13" fill="#12a065" opacity="0.2"/>
        <text x="-75" y="81" font-size="12" font-weight="700" fill="#12a065">5</text>

        <!-- membrane synoviale (interne) -->
        <path d="M -152 -6 Q -60 34 -2 40 Q 56 34 152 -6 L 152 120 Q 100 150 40 150 L -40 150 Q -100 150 -152 120 Z"
              fill="none" stroke="#12a065" stroke-width="2.4" stroke-dasharray="2 3"/>
        <circle cx="-152" cy="60" r="13" fill="#12a065" opacity="0.28"/>
        <text x="-157" y="65" font-size="12" font-weight="700" fill="#12a065">4</text>

        <!-- capsule articulaire (externe, fibreuse) -->
        <path d="M -164 -14 Q -60 42 0 48 Q 60 42 164 -14 L 176 136 Q 100 168 0 168 Q -100 168 -176 136 Z"
              fill="none" stroke="#101828" stroke-width="3"/>
        <circle cx="176" cy="80" r="13" fill="#101828" opacity="0.16"/>
        <text x="171" y="85" font-size="12" font-weight="700" fill="#101828">3</text>

        <!-- ligament -->
        <path d="M -190 -30 L -180 190" fill="none" stroke="#e6c94a" stroke-width="10" stroke-linecap="round"/>
        <circle cx="-186" cy="80" r="13" fill="#c9922b" opacity="0.3"/>
        <text x="-191" y="85" font-size="12" font-weight="700" fill="#c9922b">6</text>

        <!-- bourse séreuse -->
        <ellipse cx="200" cy="150" rx="26" ry="20" fill="#eaf6ff" stroke="#175cd3" stroke-dasharray="3 3"/>
        <circle cx="200" cy="150" r="13" fill="#175cd3" opacity="0.24"/>
        <text x="196" y="155" font-size="12" font-weight="700" fill="#175cd3">8</text>
        <text x="176" y="188" font-size="11.5" fill="#475467">bourse séreuse</text>
      </g>

      <text x="40" y="400" font-size="19" font-weight="600" fill="#101828">2 · Classification selon les degrés de liberté</text>
      <line x1="40" y1="412" x2="280" y2="412" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(90,450)">
        <rect x="0" y="0" width="220" height="110" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">Uniaxiale</text>
        <circle cx="196" cy="20" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="191" y="25" font-size="12" font-weight="700" fill="#e0632f">9</text>
        <path d="M 30 60 L 70 60" stroke="#101828" stroke-width="4"/>
        <path d="M 70 60 A 20 20 0 0 1 90 40" fill="none" stroke="#101828" stroke-width="4"/>
        <text x="16" y="92" font-size="11.5" fill="#475467">trochléenne (ginglyme) :</text>
        <text x="16" y="106" font-size="11.5" fill="#475467">flexion / extension (coude)</text>
      </g>

      <g transform="translate(350,450)">
        <rect x="0" y="0" width="220" height="110" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">Biaxiale</text>
        <circle cx="196" cy="20" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="190" y="25" font-size="12" font-weight="700" fill="#e0632f">10</text>
        <ellipse cx="70" cy="58" rx="26" ry="14" fill="none" stroke="#101828" stroke-width="3"/>
        <text x="16" y="92" font-size="11.5" fill="#475467">condylienne (ex. poignet) :</text>
        <text x="16" y="106" font-size="11.5" fill="#475467">flexion-extension + abd/add</text>
      </g>

      <g transform="translate(610,450)">
        <rect x="0" y="0" width="220" height="110" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">Triaxiale</text>
        <circle cx="196" cy="20" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="190" y="25" font-size="12" font-weight="700" fill="#e0632f">11</text>
        <circle cx="70" cy="58" r="20" fill="none" stroke="#101828" stroke-width="3"/>
        <text x="16" y="92" font-size="11.5" fill="#475467">énarthrose (ex. épaule) :</text>
        <text x="16" y="106" font-size="11.5" fill="#475467">tous les mouvements possibles</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Épiphyse osseuse : extrémité osseuse recouverte de cartilage articulaire.' },
    { ref: '2', texte: 'Cartilage hyalin articulaire : amortit les pressions et diminue les frottements.' },
    { ref: '3', texte: 'Capsule articulaire : manchon fibreux qui ferme l’articulation et assure la stabilité passive.' },
    { ref: '4', texte: 'Membrane synoviale : tapisse la face interne de la capsule, sécrète le liquide synovial.' },
    { ref: '5', texte: 'Cavité articulaire et liquide synovial : lubrifient et nourrissent le cartilage.' },
    { ref: '6', texte: 'Ligament : renforce la capsule et limite les mouvements excessifs.' },
    { ref: '7', texte: 'Ménisque : fibrocartilage intra-articulaire améliorant la congruence des surfaces.' },
    { ref: '8', texte: 'Bourse séreuse : poche facilitant le glissement des tendons voisins sur l’os.' },
    { ref: '9', texte: 'Articulation uniaxiale (trochléenne ou ginglyme) : un seul degré de liberté.' },
    { ref: '10', texte: 'Articulation biaxiale (condylienne ou en selle) : deux degrés de liberté.' },
    { ref: '11', texte: 'Articulation triaxiale (énarthrose) : trois degrés de liberté, la plus mobile.' },
  ],
};
