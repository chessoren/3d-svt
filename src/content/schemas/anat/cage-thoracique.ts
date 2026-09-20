import type { Schema } from '../../types';

export const schemaCageThoracique: Schema = {
  id: 'anat-cage-thoracique',
  ue: 'anat',
  titre: 'La cage thoracique, vue antérieure',
  description:
    'Cage thoracique vue de face : le sternum et ses trois parties, les trois catégories de côtes, l’angle sternal et les orifices thoraciques supérieur et inférieur.',
  categorie: 'Anatomie du thorax',
  viewBox: '0 0 920 640',
  ficheLiee: 'anat-thorax',
  motsCles: [
    'cage thoracique',
    'sternum',
    'manubrium',
    'vraies côtes',
    'fausses côtes',
    'côtes flottantes',
    'angle sternal',
    'cartilage costal',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">Cage thoracique, vue antérieure</text>
      <line x1="40" y1="54" x2="220" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(360,70)">
        <!-- Sternum -->
        <rect x="-24" y="0" width="48" height="60" rx="10" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-38" cy="26" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="-43" y="31" font-size="12" font-weight="700" fill="#e0632f">1</text>

        <line x1="-24" y1="62" x2="24" y2="62" stroke="#101828" stroke-width="1.6" stroke-dasharray="4 3"/>
        <circle cx="40" cy="62" r="13" fill="#d4380d" opacity="0.16"/>
        <text x="35" y="67" font-size="12" font-weight="700" fill="#d4380d">4</text>

        <rect x="-20" y="64" width="40" height="210" rx="8" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-36" cy="170" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="-41" y="175" font-size="12" font-weight="700" fill="#e0632f">2</text>

        <path d="M -10 274 L 10 274 L 4 320 L 0 320 Z" fill="#eef2ff" stroke="#c9d6ff" stroke-width="1.6"/>
        <circle cx="24" cy="298" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="19" y="303" font-size="12" font-weight="700" fill="#175cd3">3</text>

        <!-- Orifice thoracique supérieur -->
        <ellipse cx="0" cy="-6" rx="46" ry="14" fill="none" stroke="#12a065" stroke-width="2" stroke-dasharray="4 3"/>
        <circle cx="-52" cy="-6" r="13" fill="#12a065" opacity="0.18"/>
        <text x="-57" y="-1" font-size="12" font-weight="700" fill="#12a065">8</text>

        <!-- 12 côtes de chaque côté, en arcs -->
        <!-- vraies côtes 1-7 : atteignent le sternum directement -->
        <path d="M -20 10 C -140 10 -180 40 -178 62" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -178 62 L -20 42" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M -20 46 C -150 50 -190 78 -186 100" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -186 100 L -20 78" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M -20 82 C -156 88 -196 114 -190 136" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -190 136 L -20 112" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M -20 118 C -158 124 -198 148 -190 170" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -190 170 L -20 148" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M -20 154 C -156 160 -194 182 -186 202" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -186 202 L -20 184" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M -20 190 C -150 196 -186 216 -178 234" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -178 234 L -20 220" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M -20 226 C -140 232 -172 250 -164 266" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -164 266 L -18 256" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <circle cx="-206" cy="120" r="13" fill="#12a065" opacity="0.2"/>
        <text x="-211" y="125" font-size="12" font-weight="700" fill="#12a065">5</text>

        <!-- fausses côtes 8-10 : rejoignent le cartilage de la 7e côte -->
        <path d="M -18 262 C -128 270 -156 288 -148 302" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -148 302 C -100 318 -50 300 -16 262" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M -16 296 C -112 306 -136 320 -128 332" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -128 332 C -84 344 -50 330 -16 296" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <path d="M -14 328 C -96 336 -116 348 -108 358" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M -108 358 C -70 368 -46 356 -14 328" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
        <circle cx="-142" cy="320" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="-147" y="325" font-size="12" font-weight="700" fill="#e0632f">6</text>

        <!-- côtes flottantes 11-12 : pas d'attache antérieure -->
        <path d="M -12 358 C -76 364 -92 374 -88 384" fill="none" stroke="#f5ead9" stroke-width="9" stroke-linecap="round"/>
        <path d="M -10 384 C -58 390 -70 398 -64 406" fill="none" stroke="#f5ead9" stroke-width="9" stroke-linecap="round"/>
        <circle cx="-86" cy="396" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="-91" y="401" font-size="12" font-weight="700" fill="#7c4df5">7</text>

        <!-- côté droit, symétrique -->
        <g transform="scale(-1,1)">
          <path d="M -20 10 C -140 10 -180 40 -178 62" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -178 62 L -20 42" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -20 46 C -150 50 -190 78 -186 100" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -186 100 L -20 78" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -20 82 C -156 88 -196 114 -190 136" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -190 136 L -20 112" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -20 118 C -158 124 -198 148 -190 170" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -190 170 L -20 148" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -20 154 C -156 160 -194 182 -186 202" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -186 202 L -20 184" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -20 190 C -150 196 -186 216 -178 234" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -178 234 L -20 220" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -20 226 C -140 232 -172 250 -164 266" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -164 266 L -18 256" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -18 262 C -128 270 -156 288 -148 302" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -148 302 C -100 318 -50 300 -16 262" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -16 296 C -112 306 -136 320 -128 332" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -128 332 C -84 344 -50 330 -16 296" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -14 328 C -96 336 -116 348 -108 358" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
          <path d="M -108 358 C -70 368 -46 356 -14 328" fill="none" stroke="#eef2ff" stroke-width="6" stroke-linecap="round"/>
          <path d="M -12 358 C -76 364 -92 374 -88 384" fill="none" stroke="#f5ead9" stroke-width="9" stroke-linecap="round"/>
          <path d="M -10 384 C -58 390 -70 398 -64 406" fill="none" stroke="#f5ead9" stroke-width="9" stroke-linecap="round"/>
        </g>

        <!-- orifice thoracique inférieur -->
        <path d="M -164 384 Q -60 440 0 320 Q 60 440 164 384" fill="none" stroke="#175cd3" stroke-width="2" stroke-dasharray="4 3"/>
        <circle cx="0" cy="430" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="-4" y="435" font-size="12" font-weight="700" fill="#175cd3">9</text>
      </g>

      <g transform="translate(660,110)" font-size="12.5" fill="#475467">
        <text x="0" y="0" font-size="14" font-weight="600" fill="#101828">Repères</text>
        <text x="0" y="26">• 7 paires de vraies côtes : cartilage propre</text>
        <text x="0" y="46">  rejoignant directement le sternum.</text>
        <text x="0" y="70">• 3 paires de fausses côtes : cartilage</text>
        <text x="0" y="90">  rejoignant celui de la côte sus-jacente.</text>
        <text x="0" y="114">• 2 paires de côtes flottantes : extrémité</text>
        <text x="0" y="134">  antérieure libre, dans la paroi musculaire.</text>
        <text x="0" y="164" font-weight="600" fill="#101828">Angle sternal (de Louis)</text>
        <text x="0" y="184">Repère de la 2ᵉ côte, du bord</text>
        <text x="0" y="200">supérieur de l’oreillette gauche</text>
        <text x="0" y="216">et de la bifurcation trachéale.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Manubrium sternal : partie supérieure du sternum, s’articule avec les clavicules et les premières côtes.' },
    { ref: '2', texte: 'Corps du sternum : partie moyenne, reçoit les cartilages des 2ᵉ à 7ᵉ côtes.' },
    { ref: '3', texte: 'Processus xiphoïde : extrémité inférieure cartilagineuse puis osseuse du sternum.' },
    { ref: '4', texte: 'Angle sternal (angle de Louis) : jonction manubrio-sternale, repère de la 2ᵉ côte.' },
    { ref: '5', texte: 'Vraies côtes (1re à 7ᵉ) : reliées directement au sternum par leur propre cartilage costal.' },
    { ref: '6', texte: 'Fausses côtes (8ᵉ à 10ᵉ) : leur cartilage rejoint celui de la côte sus-jacente, formant le rebord costal.' },
    { ref: '7', texte: 'Côtes flottantes (11ᵉ et 12ᵉ) : extrémité antérieure libre, sans attache cartilagineuse.' },
    { ref: '8', texte: 'Orifice (ouverture) thoracique supérieur : délimité par T1, les 1res côtes et le manubrium.' },
    { ref: '9', texte: 'Orifice (ouverture) thoracique inférieur : délimité par T12, les 12ᵉs côtes et le rebord costal, fermé par le diaphragme.' },
  ],
};
