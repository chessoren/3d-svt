import type { Schema } from '../../types';

export const schemaVertebreType: Schema = {
  id: 'anat-vertebre-type',
  ue: 'anat',
  titre: 'La vertèbre type et ses particularités régionales',
  description:
    'Vertèbre type vue de dessus et de profil, avec ses éléments constants, puis les particularités des vertèbres cervicale, thoracique et lombaire.',
  categorie: 'Anatomie du rachis',
  viewBox: '0 0 920 620',
  ficheLiee: 'anat-rachis',
  motsCles: [
    'vertèbre type',
    'corps vertébral',
    'pédicule',
    'lame',
    'foramen vertébral',
    'processus épineux',
    'processus transverse',
    'processus articulaire',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="620" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">1 · Vertèbre type, vue supérieure</text>
      <line x1="40" y1="54" x2="220" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(210,170)">
        <!-- corps vertébral -->
        <ellipse cx="0" cy="0" rx="80" ry="56" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="0" cy="-4" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="-4" y="1" font-size="12" font-weight="700" fill="#e0632f">1</text>

        <!-- pédicules -->
        <rect x="76" y="-26" width="30" height="18" rx="6" fill="#f5ead9" stroke="#c9b892" transform="rotate(-14 76 -26)"/>
        <rect x="76" y="8" width="30" height="18" rx="6" fill="#f5ead9" stroke="#c9b892" transform="rotate(14 76 8)"/>
        <circle cx="112" cy="-30" r="13" fill="#175cd3" opacity="0.16"/>
        <text x="107" y="-25" font-size="12" font-weight="700" fill="#175cd3">2</text>

        <!-- lames -->
        <path d="M 132 -34 Q 190 -70 216 -6" fill="none" stroke="#c9b892" stroke-width="16" stroke-linecap="round"/>
        <path d="M 132 40 Q 190 76 216 6" fill="none" stroke="#c9b892" stroke-width="16" stroke-linecap="round"/>
        <path d="M 132 -34 Q 190 -70 216 -6" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <path d="M 132 40 Q 190 76 216 6" fill="none" stroke="#f5ead9" stroke-width="10" stroke-linecap="round"/>
        <circle cx="192" cy="-52" r="13" fill="#12a065" opacity="0.16"/>
        <text x="187" y="-47" font-size="12" font-weight="700" fill="#12a065">3</text>

        <!-- foramen vertébral -->
        <ellipse cx="150" cy="0" rx="46" ry="40" fill="#eef2ff" stroke="#c9d6ff" stroke-dasharray="5 4"/>
        <circle cx="150" cy="0" r="13" fill="#7c4df5" opacity="0.18"/>
        <text x="145" y="5" font-size="12" font-weight="700" fill="#7c4df5">4</text>

        <!-- processus épineux -->
        <polygon points="216,-6 260,-14 260,14 216,6" fill="#f5ead9" stroke="#c9b892"/>
        <circle cx="252" cy="0" r="13" fill="#d4380d" opacity="0.16"/>
        <text x="247" y="5" font-size="12" font-weight="700" fill="#d4380d">5</text>

        <!-- processus transverses -->
        <polygon points="94,-40 44,-70 40,-56 84,-30" fill="#f5ead9" stroke="#c9b892"/>
        <polygon points="94,42 44,72 40,58 84,32" fill="#f5ead9" stroke="#c9b892"/>
        <circle cx="52" cy="-66" r="13" fill="#12a065" opacity="0.2"/>
        <text x="46" y="-61" font-size="12" font-weight="700" fill="#12a065">6</text>

        <!-- processus articulaires -->
        <circle cx="118" cy="-56" r="12" fill="#eaefff" stroke="#7c4df5"/>
        <circle cx="118" cy="56" r="12" fill="#eaefff" stroke="#7c4df5"/>
        <circle cx="118" cy="-56" r="13" fill="#7c4df5" opacity="0" />
        <circle cx="144" cy="-70" r="13" fill="#175cd3" opacity="0.14"/>
        <text x="139" y="-65" font-size="12" font-weight="700" fill="#175cd3">7</text>
      </g>

      <text x="40" y="330" font-size="19" font-weight="600" fill="#101828">2 · Vertèbre type, vue de profil</text>
      <line x1="40" y1="342" x2="220" y2="342" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(150,430)">
        <rect x="0" y="-30" width="86" height="60" rx="10" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <rect x="86" y="-14" width="26" height="12" fill="#f5ead9" stroke="#c9b892"/>
        <path d="M 112 -8 Q 150 -16 172 -42" fill="none" stroke="#c9b892" stroke-width="14" stroke-linecap="round"/>
        <circle cx="150" cy="-30" r="12" fill="#eaefff" stroke="#7c4df5" stroke-width="2"/>
        <circle cx="164" cy="-46" r="13" fill="#7c4df5" opacity="0.16"/>
        <text x="159" y="-41" font-size="12" font-weight="700" fill="#7c4df5">8</text>

        <path d="M 112 10 Q 150 24 168 56" fill="none" stroke="#c9b892" stroke-width="14" stroke-linecap="round"/>
        <circle cx="150" cy="30" r="12" fill="#eaefff" stroke="#7c4df5" stroke-width="2"/>
        <circle cx="164" cy="50" r="13" fill="#7c4df5" opacity="0.28"/>
        <text x="159" y="55" font-size="12" font-weight="700" fill="#7c4df5">9</text>

        <polygon points="172,-42 210,-70 222,-58 186,-26" fill="#f5ead9" stroke="#c9b892" opacity="0"/>
        <polygon points="176,4 224,16 224,32 182,20" fill="#f5ead9" stroke="#c9b892"/>
        <circle cx="212" cy="14" r="13" fill="#d4380d" opacity="0.16"/>
        <text x="207" y="19" font-size="12" font-weight="700" fill="#d4380d">5</text>

        <!-- échancrures vertébrales et foramen intervertébral -->
        <ellipse cx="140" cy="-4" rx="34" ry="44" fill="none" stroke="#c9d6ff" stroke-dasharray="4 4"/>
        <ellipse cx="230" cy="6" rx="22" ry="20" fill="#fff6ec" stroke="#e0632f" stroke-dasharray="4 3"/>
        <circle cx="230" cy="6" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="224" y="11" font-size="12" font-weight="700" fill="#e0632f">10</text>
        <text x="192" y="70" font-size="11.5" fill="#8a94a8">foramen intervertébral</text>
      </g>

      <text x="40" y="530" font-size="19" font-weight="600" fill="#101828">3 · Particularités régionales</text>
      <line x1="40" y1="542" x2="220" y2="542" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(70,590)">
        <text x="0" y="-18" font-size="13" font-weight="600" fill="#101828">Cervicale</text>
        <ellipse cx="30" cy="0" rx="26" ry="18" fill="#f5ead9" stroke="#c9b892"/>
        <circle cx="0" cy="0" r="9" fill="#eef2ff" stroke="#c9d6ff"/>
        <path d="M 56 -6 L 58 -22 M 56 6 L 58 22" stroke="#c9b892" stroke-width="7" stroke-linecap="round"/>
        <path d="M 6 -6 A 8 8 0 0 1 6 6" fill="none" stroke="#12a065" stroke-width="4"/>
        <circle cx="8" cy="0" r="13" fill="#12a065" opacity="0.2"/>
        <text x="4" y="5" font-size="12" font-weight="700" fill="#12a065">11</text>
        <text x="-40" y="46" font-size="11" fill="#475467">processus épineux bifide,</text>
        <text x="-40" y="60" font-size="11" fill="#475467">foramen transversaire (11)</text>
      </g>

      <g transform="translate(340,590)">
        <text x="0" y="-18" font-size="13" font-weight="600" fill="#101828">Thoracique</text>
        <path d="M 4 -18 Q -10 0 4 18 Q 40 26 56 0 Q 40 -26 4 -18 Z" fill="#f5ead9" stroke="#c9b892"/>
        <circle cx="4" cy="-16" r="4.5" fill="#eaefff" stroke="#7c4df5"/>
        <circle cx="4" cy="18" r="4.5" fill="#eaefff" stroke="#7c4df5"/>
        <circle cx="10" cy="-10" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="5" y="-5" font-size="12" font-weight="700" fill="#175cd3">12</text>
        <text x="-30" y="46" font-size="11" fill="#475467">corps « en cœur », facette</text>
        <text x="-30" y="60" font-size="11" fill="#475467">costale (12), épineux oblique</text>
      </g>

      <g transform="translate(620,590)">
        <text x="0" y="-18" font-size="13" font-weight="600" fill="#101828">Lombaire</text>
        <ellipse cx="30" cy="0" rx="40" ry="26" fill="#f5ead9" stroke="#c9b892"/>
        <ellipse cx="30" cy="0" rx="38" ry="24" fill="none" stroke="#c9b892" opacity="0.5"/>
        <rect x="70" y="-6" width="30" height="12" rx="4" fill="#f5ead9" stroke="#c9b892"/>
        <text x="-40" y="46" font-size="11" fill="#475467">corps volumineux, processus</text>
        <text x="-40" y="60" font-size="11" fill="#475467">épineux court et quadrangulaire</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Corps vertébral : partie antérieure, cylindrique, porteuse de la charge axiale.' },
    { ref: '2', texte: 'Pédicule : relie le corps vertébral à l’arc postérieur, échancré au-dessus et en dessous.' },
    { ref: '3', texte: 'Lame : unit le pédicule au processus épineux, ferme l’arc postérieur.' },
    { ref: '4', texte: 'Foramen vertébral : orifice central délimité par le corps et l’arc postérieur, empilement formant le canal vertébral.' },
    { ref: '5', texte: 'Processus épineux : saillie médiane et postérieure, palpable sous la peau.' },
    { ref: '6', texte: 'Processus transverse : saillie latérale, insertion musculaire et ligamentaire.' },
    { ref: '7', texte: 'Processus articulaire supérieur : s’articule avec le processus articulaire inférieur de la vertèbre sus-jacente.' },
    { ref: '8', texte: 'Processus articulaire supérieur, vu de profil.' },
    { ref: '9', texte: 'Processus articulaire inférieur, vu de profil.' },
    { ref: '10', texte: 'Foramen intervertébral : livre passage au nerf spinal, entre deux pédicules superposés.' },
    { ref: '11', texte: 'Vertèbre cervicale : corps petit, processus épineux souvent bifide, foramen transversaire pour l’artère vertébrale.' },
    { ref: '12', texte: 'Vertèbre thoracique : corps « en cœur », facettes costales pour l’articulation avec les côtes.' },
  ],
};
