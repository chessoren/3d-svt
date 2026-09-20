import type { Schema } from '../../types';

export const schemaRachisCourbures: Schema = {
  id: 'anat-rachis-courbures',
  ue: 'anat',
  titre: 'Le rachis entier : segments et courbures',
  description:
    'Vue de profil du rachis complet : les cinq segments, le nombre de vertèbres par étage, les courbures physiologiques et le disque intervertébral en coupe.',
  categorie: 'Anatomie du rachis',
  viewBox: '0 0 920 700',
  ficheLiee: 'anat-rachis',
  motsCles: [
    'rachis',
    'courbure physiologique',
    'lordose',
    'cyphose',
    'disque intervertébral',
    'nucleus pulposus',
    'anulus fibrosus',
    'sacrum',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">1 · Le rachis de profil : cinq segments, quatre courbures</text>
      <line x1="40" y1="54" x2="260" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(230,80)">
        <!-- Courbe du rachis : ligne guide -->
        <path d="M 40 0 C 10 40 10 70 40 100 C 80 140 80 160 40 190 C 0 220 -10 250 30 280 C 70 300 70 320 40 340 C 10 360 10 400 40 440"
              fill="none" stroke="#e6e0d2" stroke-width="46" stroke-linecap="round"/>

        <!-- Segment cervical : 7 vertèbres, lordose -->
        <g>
          <circle cx="38" cy="8" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="30" cy="26" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="26" cy="46" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="28" cy="66" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="34" cy="84" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="42" cy="100" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="50" cy="114" r="12" fill="#f5ead9" stroke="#c9b892"/>
        </g>
        <circle cx="90" cy="55" r="13" fill="#12a065" opacity="0.18"/>
        <text x="85" y="60" font-size="12" font-weight="700" fill="#12a065">1</text>
        <text x="106" y="52" font-size="12.5" fill="#101828" font-weight="600">C1–C7</text>
        <text x="106" y="68" font-size="11.5" fill="#475467">lordose cervicale</text>
        <circle cx="176" cy="52" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="171" y="57" font-size="12" font-weight="700" fill="#e0632f">6</text>

        <!-- Segment thoracique : 12 vertèbres, cyphose -->
        <g>
          <circle cx="56" cy="130" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="60" cy="150" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="62" cy="170" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="60" cy="190" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="54" cy="210" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="44" cy="228" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="32" cy="244" r="12" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="20" cy="258" r="12" fill="#f5ead9" stroke="#c9b892"/>
        </g>
        <circle cx="94" cy="180" r="13" fill="#12a065" opacity="0.18"/>
        <text x="88" y="185" font-size="12" font-weight="700" fill="#12a065">2</text>
        <text x="108" y="176" font-size="12.5" fill="#101828" font-weight="600">T1–T12</text>
        <text x="108" y="192" font-size="11.5" fill="#475467">cyphose thoracique</text>
        <circle cx="0" cy="230" r="13" fill="#7c4df5" opacity="0.18"/>
        <text x="-5" y="235" font-size="12" font-weight="700" fill="#7c4df5">7</text>

        <!-- Segment lombaire : 5 vertèbres, lordose -->
        <g>
          <circle cx="14" cy="280" r="13" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="24" cy="300" r="13" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="36" cy="318" r="13" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="46" cy="332" r="13" fill="#f5ead9" stroke="#c9b892"/>
          <circle cx="50" cy="346" r="13" fill="#f5ead9" stroke="#c9b892"/>
        </g>
        <circle cx="94" cy="316" r="13" fill="#12a065" opacity="0.18"/>
        <text x="89" y="321" font-size="12" font-weight="700" fill="#12a065">3</text>
        <text x="108" y="312" font-size="12.5" fill="#101828" font-weight="600">L1–L5</text>
        <text x="108" y="328" font-size="11.5" fill="#475467">lordose lombaire</text>
        <circle cx="4" cy="290" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="-1" y="295" font-size="12" font-weight="700" fill="#e0632f">8</text>

        <!-- Sacrum : 5 vertèbres soudées -->
        <path d="M 30 356 Q 55 380 34 424 Q 20 448 8 452" fill="#f5ead9" stroke="#c9b892" stroke-width="30" stroke-linecap="round"/>
        <circle cx="94" cy="392" r="13" fill="#12a065" opacity="0.18"/>
        <text x="89" y="397" font-size="12" font-weight="700" fill="#12a065">4</text>
        <text x="108" y="388" font-size="12.5" fill="#101828" font-weight="600">S1–S5 (soudées)</text>
        <text x="108" y="404" font-size="11.5" fill="#475467">cyphose sacrée</text>

        <!-- Coccyx : 3 à 4 pièces vestigiales -->
        <path d="M 8 452 Q 0 468 12 480" fill="none" stroke="#c9b892" stroke-width="12" stroke-linecap="round"/>
        <circle cx="60" cy="470" r="13" fill="#12a065" opacity="0.18"/>
        <text x="55" y="475" font-size="12" font-weight="700" fill="#12a065">5</text>
        <text x="74" y="474" font-size="12.5" fill="#101828" font-weight="600">Coccyx (3-4 pièces)</text>
      </g>

      <text x="40" y="580" font-size="19" font-weight="600" fill="#101828">2 · Le disque intervertébral en coupe</text>
      <line x1="40" y1="592" x2="260" y2="592" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(180,640)">
        <rect x="-70" y="-34" width="140" height="26" rx="6" fill="#f5ead9" stroke="#c9b892"/>
        <rect x="-70" y="16" width="140" height="26" rx="6" fill="#f5ead9" stroke="#c9b892"/>
        <ellipse cx="0" cy="-2" rx="70" ry="18" fill="#fdeee2" stroke="#e0632f" stroke-width="2"/>
        <circle cx="0" cy="-2" r="24" fill="#fff3e0" stroke="#e0632f" stroke-dasharray="3 3"/>
        <circle cx="0" cy="-2" r="13" fill="#e0632f" opacity="0.22"/>
        <text x="-4" y="3" font-size="12" font-weight="700" fill="#e0632f">10</text>
        <circle cx="-48" cy="-2" r="13" fill="#12a065" opacity="0.2"/>
        <text x="-53" y="3" font-size="12" font-weight="700" fill="#12a065">9</text>
        <text x="-100" y="60" font-size="11.5" fill="#475467">9 · anulus fibrosus (anneaux fibreux concentriques)</text>
        <text x="-100" y="78" font-size="11.5" fill="#475467">10 · nucleus pulposus (noyau gélatineux central)</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Rachis cervical : 7 vertèbres (C1-C7), présente une lordose (concavité postérieure).' },
    { ref: '2', texte: 'Rachis thoracique : 12 vertèbres (T1-T12), présente une cyphose (convexité postérieure).' },
    { ref: '3', texte: 'Rachis lombaire : 5 vertèbres (L1-L5), présente une lordose.' },
    { ref: '4', texte: 'Sacrum : 5 vertèbres sacrées soudées (S1-S5), courbure à concavité antérieure.' },
    { ref: '5', texte: 'Coccyx : 3 à 4 pièces vestigiales, prolonge le sacrum.' },
    { ref: '6', texte: 'Lordose cervicale : courbure physiologique à convexité antérieure, acquise dès le maintien de la tête.' },
    { ref: '7', texte: 'Cyphose thoracique : courbure primaire, présente dès la vie fœtale.' },
    { ref: '8', texte: 'Lordose lombaire : courbure secondaire, acquise avec la station debout et la marche.' },
    { ref: '9', texte: 'Anulus fibrosus : anneaux concentriques de fibrocartilage entourant le noyau, assure la cohésion du disque.' },
    { ref: '10', texte: 'Nucleus pulposus : noyau central gélatineux, amortit et répartit les pressions axiales.' },
  ],
};
