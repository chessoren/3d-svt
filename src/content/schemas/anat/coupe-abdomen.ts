import type { Schema } from '../../types';

export const schemaCoupeAbdomen: Schema = {
  id: 'anat-coupe-abdomen',
  ue: 'anat',
  titre: 'Coupe transversale de l’abdomen au niveau de L2',
  description:
    'Coupe axiale de l’abdomen à l’étage de la 2ᵉ vertèbre lombaire : organes intra- et rétropéritonéaux, gros vaisseaux et paroi abdominale.',
  categorie: 'Anatomie de l’abdomen',
  viewBox: '0 0 920 700',
  ficheLiee: 'anat-abdomen',
  motsCles: [
    'coupe transversale',
    'rétropéritoine',
    'aorte abdominale',
    'veine cave inférieure',
    'pancréas',
    'duodénum',
    'rein',
    'péritoine',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">Coupe transversale de l’abdomen, niveau L2</text>
      <line x1="40" y1="54" x2="360" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="76" font-size="12.5" fill="#8a94a8">Convention radiologique : la droite du patient est à gauche de l’image.</text>

      <g transform="translate(360,380)">
        <!-- paroi abdominale : peau et graisse -->
        <ellipse cx="0" cy="0" rx="270" ry="230" fill="#fbf7ef" stroke="#e6ddc6" stroke-width="2"/>

        <!-- muscles de la paroi latérale (obliques, transverse) -->
        <path d="M -270 -40 Q -300 40 -230 130 Q -190 160 -150 150 Q -190 90 -196 0 Q -190 -90 -150 -150 Q -190 -140 -230 -110 Q -262 -80 -270 -40 Z"
              fill="#8c3a42" stroke="#6e2530" opacity="0.9"/>
        <path d="M 270 -40 Q 300 40 230 130 Q 190 160 150 150 Q 190 90 196 0 Q 190 -90 150 -150 Q 190 -140 230 -110 Q 262 -80 270 -40 Z"
              fill="#8c3a42" stroke="#6e2530" opacity="0.9"/>
        <circle cx="-260" cy="0" r="13" fill="#8c3a42" opacity="0.9"/>
        <text x="-265" y="5" font-size="12" font-weight="700" fill="#ffffff">11</text>

        <!-- grand droit de l'abdomen, en avant -->
        <rect x="-70" y="150" width="52" height="46" rx="10" fill="#8c3a42" stroke="#6e2530"/>
        <rect x="18" y="150" width="52" height="46" rx="10" fill="#8c3a42" stroke="#6e2530"/>

        <!-- muscles paravertébraux, en arrière -->
        <rect x="-56" y="-192" width="40" height="60" rx="10" fill="#8c3a42" stroke="#6e2530"/>
        <rect x="16" y="-192" width="40" height="60" rx="10" fill="#8c3a42" stroke="#6e2530"/>
        <circle cx="-56" cy="-206" r="13" fill="#8c3a42" opacity="0.9"/>
        <text x="-61" y="-201" font-size="12" font-weight="700" fill="#ffffff">12</text>

        <!-- corps vertébral L2, en arrière et au centre -->
        <ellipse cx="0" cy="-150" rx="46" ry="34" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <path d="M -30 -168 Q 0 -196 30 -168" fill="none" stroke="#c9b892" stroke-width="14" stroke-linecap="round"/>
        <circle cx="0" cy="-150" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="-4" y="-145" font-size="12" font-weight="700" fill="#e0632f">1</text>

        <!-- psoas, de part et d'autre du corps vertébral -->
        <ellipse cx="-70" cy="-110" rx="30" ry="42" fill="#8c3a42" stroke="#6e2530"/>
        <ellipse cx="70" cy="-110" rx="30" ry="42" fill="#8c3a42" stroke="#6e2530"/>
        <circle cx="-70" cy="-110" r="13" fill="#8c3a42" opacity="0.9"/>
        <text x="-75" y="-105" font-size="12" font-weight="700" fill="#ffffff">10</text>

        <!-- reins, rétropéritonéaux, postéro-latéraux -->
        <path d="M -160 -100 Q -190 -110 -196 -70 Q -190 -30 -160 -40 Q -172 -70 -160 -100 Z" fill="#a33b3b" stroke="#7a2a2a"/>
        <path d="M 160 -100 Q 190 -110 196 -70 Q 190 -30 160 -40 Q 172 -70 160 -100 Z" fill="#a33b3b" stroke="#7a2a2a"/>
        <circle cx="-190" cy="-72" r="13" fill="#a33b3b" opacity="0.9"/>
        <text x="-195" y="-67" font-size="12" font-weight="700" fill="#ffffff">5</text>
        <circle cx="190" cy="-72" r="13" fill="#a33b3b" opacity="0.9"/>
        <text x="184" y="-67" font-size="12" font-weight="700" fill="#ffffff">4</text>

        <!-- aorte et veine cave, prévertébrales -->
        <circle cx="-18" cy="-96" r="15" fill="#d4380d" stroke="#a3270a" stroke-width="2"/>
        <circle cx="-18" cy="-96" r="13" fill="#d4380d" opacity="0"/>
        <circle cx="-40" cy="-114" r="13" fill="#d4380d" opacity="0.9"/>
        <text x="-45" y="-109" font-size="12" font-weight="700" fill="#ffffff">2</text>

        <ellipse cx="16" cy="-96" rx="17" ry="14" fill="#175cd3" stroke="#0f3f96" stroke-width="2"/>
        <circle cx="40" cy="-112" r="13" fill="#175cd3" opacity="0.9"/>
        <text x="35" y="-107" font-size="12" font-weight="700" fill="#ffffff">3</text>

        <!-- pancréas, transversal, en avant des gros vaisseaux -->
        <path d="M -140 -70 Q -60 -50 0 -56 Q 70 -60 120 -44 Q 70 -30 0 -34 Q -70 -34 -140 -50 Z"
              fill="#e7b872" stroke="#b8862f" stroke-width="1.8"/>
        <circle cx="0" cy="-46" r="13" fill="#c9922b" opacity="0.9"/>
        <text x="-4" y="-41" font-size="12" font-weight="700" fill="#ffffff">6</text>

        <!-- duodénum (2e portion), encadrant la tête du pancréas à droite -->
        <ellipse cx="110" cy="-30" rx="20" ry="26" fill="#d99a63" stroke="#a3702f" stroke-width="1.8"/>
        <circle cx="132" cy="-14" r="13" fill="#c9922b" opacity="0.9"/>
        <text x="127" y="-9" font-size="12" font-weight="700" fill="#ffffff">7</text>

        <!-- péritoine pariétal : ligne fine délimitant la cavité péritonéale -->
        <path d="M -150 -20 Q -220 40 -160 110 Q -80 170 0 172 Q 80 170 160 110 Q 220 40 150 -20 Q 60 -6 0 -8 Q -60 -6 -150 -20 Z"
              fill="none" stroke="#12a065" stroke-width="2" stroke-dasharray="4 3"/>
        <circle cx="-200" cy="60" r="13" fill="#12a065" opacity="0.9"/>
        <text x="-205" y="65" font-size="12" font-weight="700" fill="#ffffff">9</text>

        <!-- anses intestinales intrapéritonéales -->
        <circle cx="-60" cy="60" r="26" fill="#eec9d8" stroke="#c96f92" stroke-width="1.6"/>
        <circle cx="10" cy="80" r="30" fill="#eec9d8" stroke="#c96f92" stroke-width="1.6"/>
        <circle cx="80" cy="50" r="24" fill="#eec9d8" stroke="#c96f92" stroke-width="1.6"/>
        <circle cx="-10" cy="30" r="22" fill="#eec9d8" stroke="#c96f92" stroke-width="1.6"/>
        <circle cx="10" cy="80" r="13" fill="#c96f92" opacity="0.9"/>
        <text x="5" y="85" font-size="12" font-weight="700" fill="#ffffff">8</text>
      </g>

      <g transform="translate(40,610)" font-size="11.5" fill="#475467">
        <text x="0" y="0">Rétropéritonéal : rein, uretère, pancréas (sauf sa queue), duodénum (sauf 1re portion), aorte, veine cave inférieure, psoas.</text>
        <text x="0" y="20">Intrapéritonéal : estomac, jéjuno-iléon, côlon transverse et sigmoïde, foie, rate — enveloppés par le péritoine viscéral.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Corps vertébral de L2 : repère osseux postérieur et médian de la coupe.' },
    { ref: '2', texte: 'Aorte abdominale : en avant et légèrement à gauche du corps vertébral.' },
    { ref: '3', texte: 'Veine cave inférieure : à droite de l’aorte, à ce niveau.' },
    { ref: '4', texte: 'Rein droit : organe rétropéritonéal, un peu plus bas que le rein gauche.' },
    { ref: '5', texte: 'Rein gauche : organe rétropéritonéal, postéro-latéral.' },
    { ref: '6', texte: 'Pancréas : organe rétropéritonéal (sauf sa queue), croise transversalement l’aorte et la veine cave.' },
    { ref: '7', texte: 'Duodénum (2ᵉ portion) : rétropéritonéal, encadre la tête du pancréas à droite.' },
    { ref: '8', texte: 'Anses intestinales intrapéritonéales : mobiles, suspendues par le mésentère.' },
    { ref: '9', texte: 'Péritoine pariétal : limite la cavité péritonéale, sépare organes intra- et rétropéritonéaux.' },
    { ref: '10', texte: 'Muscle psoas majeur : de part et d’autre du corps vertébral, en arrière du péritoine.' },
    { ref: '11', texte: 'Muscles de la paroi abdominale (obliques et transverse) : forment la paroi latérale.' },
    { ref: '12', texte: 'Muscles paravertébraux (érecteurs du rachis) : en arrière du corps vertébral.' },
  ],
};
