import type { Schema } from '../../types';

export const schemaBassinOsseux: Schema = {
  id: 'anat-bassin-osseux',
  ue: 'anat',
  titre: 'Le bassin osseux, vue antérieure',
  description:
    'Bassin osseux vu de face : os coxaux, sacrum, coccyx, détroit supérieur et articulations pelviennes, avec comparaison des bassins masculin et féminin.',
  categorie: 'Anatomie du pelvis',
  viewBox: '0 0 920 640',
  ficheLiee: 'anat-pelvis-perinee',
  motsCles: [
    'bassin osseux',
    'os coxal',
    'ilium',
    'ischium',
    'pubis',
    'sacrum',
    'détroit supérieur',
    'symphyse pubienne',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">Bassin osseux, vue antérieure</text>
      <line x1="40" y1="54" x2="220" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(360,90)">
        <!-- Sacrum central -->
        <path d="M -46 0 Q 0 -10 46 0 L 40 120 Q 0 150 -40 120 Z" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="0" cy="50" r="13" fill="#12a065" opacity="0.2"/>
        <text x="-4" y="55" font-size="12" font-weight="700" fill="#12a065">6</text>

        <!-- Coccyx -->
        <path d="M -10 148 Q 0 168 12 182" fill="none" stroke="#c9b892" stroke-width="12" stroke-linecap="round"/>
        <circle cx="16" cy="184" r="13" fill="#12a065" opacity="0.2"/>
        <text x="11" y="189" font-size="12" font-weight="700" fill="#12a065">7</text>

        <!-- os coxal gauche : ilium, ischium, pubis -->
        <g>
          <path d="M -44 -6 Q -120 -60 -186 -30 Q -230 -6 -220 40 Q -206 70 -160 70 L -100 44 L -60 30 Z"
                fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
          <circle cx="-176" cy="-40" r="13" fill="#e0632f" opacity="0.2"/>
          <text x="-181" y="-35" font-size="12" font-weight="700" fill="#e0632f">1</text>

          <!-- acetabulum -->
          <circle cx="-142" cy="86" r="26" fill="#eef2ff" stroke="#7c4df5" stroke-width="2.4"/>
          <circle cx="-142" cy="86" r="13" fill="#7c4df5" opacity="0.2"/>
          <text x="-147" y="91" font-size="12" font-weight="700" fill="#7c4df5">4</text>

          <!-- ischium -->
          <path d="M -160 100 Q -186 150 -168 202 Q -150 222 -118 216 L -110 150 L -122 108 Z"
                fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
          <circle cx="-172" cy="176" r="13" fill="#175cd3" opacity="0.2"/>
          <text x="-177" y="181" font-size="12" font-weight="700" fill="#175cd3">2</text>

          <!-- foramen obturé -->
          <ellipse cx="-120" cy="160" rx="26" ry="34" fill="#fff6ec" stroke="#e0632f" stroke-dasharray="3 3"/>
          <circle cx="-120" cy="160" r="13" fill="#e0632f" opacity="0.24"/>
          <text x="-125" y="165" font-size="12" font-weight="700" fill="#e0632f">5</text>

          <!-- pubis -->
          <path d="M -122 108 Q -90 128 -60 132 L -50 160 Q -80 178 -108 168 Z"
                fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
          <circle cx="-88" cy="120" r="13" fill="#c9922b" opacity="0.22"/>
          <text x="-93" y="125" font-size="12" font-weight="700" fill="#c9922b">3</text>
        </g>

        <!-- os coxal droit, symétrique -->
        <g transform="scale(-1,1)">
          <path d="M -44 -6 Q -120 -60 -186 -30 Q -230 -6 -220 40 Q -206 70 -160 70 L -100 44 L -60 30 Z"
                fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
          <circle cx="-142" cy="86" r="26" fill="#eef2ff" stroke="#7c4df5" stroke-width="2.4"/>
          <path d="M -160 100 Q -186 150 -168 202 Q -150 222 -118 216 L -110 150 L -122 108 Z"
                fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
          <ellipse cx="-120" cy="160" rx="26" ry="34" fill="#fff6ec" stroke="#e0632f" stroke-dasharray="3 3"/>
          <path d="M -122 108 Q -90 128 -60 132 L -50 160 Q -80 178 -108 168 Z"
                fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        </g>

        <!-- symphyse pubienne -->
        <rect x="-8" y="118" width="16" height="26" rx="4" fill="#eaefff" stroke="#7c4df5"/>
        <circle cx="0" cy="166" r="13" fill="#7c4df5" opacity="0.24"/>
        <text x="-4" y="171" font-size="12" font-weight="700" fill="#7c4df5">9</text>

        <!-- articulation sacro-iliaque -->
        <circle cx="-40" cy="20" r="13" fill="#12a065" opacity="0.28"/>
        <text x="-45" y="25" font-size="12" font-weight="700" fill="#12a065">8</text>

        <!-- détroit supérieur -->
        <ellipse cx="0" cy="4" rx="150" ry="42" fill="none" stroke="#175cd3" stroke-width="2" stroke-dasharray="5 4"/>
        <circle cx="150" cy="4" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="145" y="9" font-size="12" font-weight="700" fill="#175cd3">10</text>
      </g>

      <text x="40" y="440" font-size="19" font-weight="600" fill="#101828">Bassin féminin et bassin masculin</text>
      <line x1="40" y1="452" x2="280" y2="452" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(200,500)">
        <text x="0" y="-14" font-size="13.5" font-weight="600" fill="#101828">Féminin</text>
        <ellipse cx="0" cy="30" rx="110" ry="70" fill="none" stroke="#c9b892" stroke-width="3"/>
        <path d="M -30 90 L -46 130 M 30 90 L 46 130" stroke="#c9b892" stroke-width="8" stroke-linecap="round"/>
        <circle cx="120" cy="30" r="13" fill="#12a065" opacity="0.2"/>
        <text x="115" y="35" font-size="12" font-weight="700" fill="#12a065">11</text>
        <text x="-100" y="150" font-size="11.5" fill="#475467">détroit large et ovale, arc pubien &gt; 90°</text>
      </g>

      <g transform="translate(600,500)">
        <text x="0" y="-14" font-size="13.5" font-weight="600" fill="#101828">Masculin</text>
        <path d="M -80 -40 Q -110 30 0 100 Q 110 30 80 -40 Q 0 10 -80 -40 Z" fill="none" stroke="#c9b892" stroke-width="3"/>
        <path d="M -22 100 L -34 140 M 22 100 L 34 140" stroke="#c9b892" stroke-width="8" stroke-linecap="round"/>
        <circle cx="90" cy="0" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="85" y="5" font-size="12" font-weight="700" fill="#e0632f">12</text>
        <text x="-100" y="150" font-size="11.5" fill="#475467">détroit rétréci, en cœur, arc pubien &lt; 90°</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Ilium (os iliaque) : aile large et évasée, partie supérieure de l’os coxal.' },
    { ref: '2', texte: 'Ischium : partie postéro-inférieure, sa tubérosité soutient le corps en position assise.' },
    { ref: '3', texte: 'Pubis : partie antéro-inférieure, s’unit à son homologue par la symphyse pubienne.' },
    { ref: '4', texte: 'Acétabulum : cavité articulaire recevant la tête fémorale, formée par les trois pièces de l’os coxal.' },
    { ref: '5', texte: 'Foramen obturé : large orifice fermé par la membrane obturatrice, entre ischium et pubis.' },
    { ref: '6', texte: 'Sacrum : pièce médiane et postérieure, formée de 5 vertèbres sacrées soudées.' },
    { ref: '7', texte: 'Coccyx : prolonge le sacrum, vestige de la queue.' },
    { ref: '8', texte: 'Articulation sacro-iliaque : unit le sacrum à chaque os coxal, peu mobile.' },
    { ref: '9', texte: 'Symphyse pubienne : articulation cartilagineuse médiane entre les deux pubis.' },
    { ref: '10', texte: 'Détroit supérieur : limite entre le grand bassin et le petit bassin, plan d’engagement obstétrical.' },
    { ref: '11', texte: 'Bassin féminin : détroit supérieur large et ovale, arc pubien ouvert, favorable à l’accouchement.' },
    { ref: '12', texte: 'Bassin masculin : détroit supérieur en cœur, plus étroit, arc pubien fermé.' },
  ],
};
