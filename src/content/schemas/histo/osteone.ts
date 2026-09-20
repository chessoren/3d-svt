import type { Schema } from '../../types';

export const schemaOsteone: Schema = {
  id: 'histo-osteone',
  ue: 'histo',
  titre: 'L’ostéone et l’organisation de l’os compact',
  description:
    'Coupe transversale d’os compact centrée sur un ostéone (système de Havers) : lamelles concentriques, canal de Havers, canaux de Volkmann, ostéocytes et périoste, comparés à l’organisation de l’os spongieux.',
  categorie: 'Histologie du tissu osseux',
  viewBox: '0 0 920 640',
  ficheLiee: 'histo-tissu-osseux',
  motsCles: [
    'ostéone',
    'système de Havers',
    'canal de Havers',
    'canaux de Volkmann',
    'ostéocyte',
    'ostéoplaste',
    'canalicule',
    'périoste',
    'os spongieux',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">1 · Coupe transversale d’un ostéone</text>
      <line x1="40" y1="54" x2="200" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(230,240)">
        <!-- Lamelles concentriques -->
        <circle cx="0" cy="0" r="185" fill="#f3f0e8" stroke="#c9bfa1" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="160" fill="#f7f4ec" stroke="#c9bfa1" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="135" fill="#f3f0e8" stroke="#c9bfa1" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="110" fill="#f7f4ec" stroke="#c9bfa1" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="85" fill="#f3f0e8" stroke="#c9bfa1" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="60" fill="#f7f4ec" stroke="#c9bfa1" stroke-width="1.4"/>

        <circle cx="228" cy="-118" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="224" y="-113" font-size="12" font-weight="700" fill="#e0632f">1</text>
        <line x1="120" y1="-90" x2="215" y2="-118" stroke="#98a2b3" stroke-width="1.2"/>
        <text x="128" y="-96" font-size="11.5" fill="#475467">lamelles osseuses concentriques</text>

        <!-- Ostéocytes dans leurs ostéoplastes, entre les lamelles, avec canalicules -->
        <g>
          <ellipse cx="0" cy="-72" rx="6.5" ry="4" fill="#7c4df5"/>
          <ellipse cx="62" cy="-40" rx="6.5" ry="4" fill="#7c4df5" transform="rotate(35 62 -40)"/>
          <ellipse cx="-62" cy="-40" rx="6.5" ry="4" fill="#7c4df5" transform="rotate(-35 -62 -40)"/>
          <ellipse cx="0" cy="-97" rx="5.5" ry="3.3" fill="#7c4df5"/>
          <ellipse cx="84" cy="-55" rx="5.5" ry="3.3" fill="#7c4df5" transform="rotate(32 84 -55)"/>
          <ellipse cx="0" cy="-122" rx="5.5" ry="3.3" fill="#7c4df5"/>
          <ellipse cx="105" cy="-68" rx="5" ry="3" fill="#7c4df5" transform="rotate(32 105 -68)"/>
          <ellipse cx="0" cy="-147" rx="5" ry="3" fill="#7c4df5"/>
          <ellipse cx="-105" cy="-68" rx="5" ry="3" fill="#7c4df5" transform="rotate(-32 -105 -68)"/>
          <ellipse cx="0" cy="-172" rx="4.6" ry="2.8" fill="#7c4df5"/>
          <ellipse cx="-84" cy="-55" rx="5.5" ry="3.3" fill="#7c4df5" transform="rotate(-32 -84 -55)"/>
          <line x1="0" y1="-72" x2="0" y2="-97" stroke="#7c4df5" stroke-width="0.9"/>
          <line x1="0" y1="-97" x2="0" y2="-122" stroke="#7c4df5" stroke-width="0.9"/>
          <line x1="0" y1="-122" x2="0" y2="-147" stroke="#7c4df5" stroke-width="0.9"/>
          <line x1="0" y1="-147" x2="0" y2="-172" stroke="#7c4df5" stroke-width="0.9"/>
          <line x1="62" y1="-40" x2="84" y2="-55" stroke="#7c4df5" stroke-width="0.9"/>
          <line x1="84" y1="-55" x2="105" y2="-68" stroke="#7c4df5" stroke-width="0.9"/>
          <line x1="-62" y1="-40" x2="-84" y2="-55" stroke="#7c4df5" stroke-width="0.9"/>
          <line x1="-84" y1="-55" x2="-105" y2="-68" stroke="#7c4df5" stroke-width="0.9"/>
        </g>
        <circle cx="-165" cy="-100" r="13" fill="#7c4df5" opacity="0.16"/>
        <text x="-169" y="-95" font-size="12" font-weight="700" fill="#7c4df5">2</text>
        <line x1="-105" y1="-68" x2="-158" y2="-98" stroke="#98a2b3" stroke-width="1.2"/>
        <circle cx="-165" cy="-58" r="13" fill="#12a065" opacity="0.16"/>
        <text x="-169" y="-53" font-size="12" font-weight="700" fill="#12a065">3</text>
        <line x1="-84" y1="-55" x2="-158" y2="-58" stroke="#98a2b3" stroke-width="1.2"/>

        <!-- Canal de Havers central -->
        <circle cx="0" cy="0" r="34" fill="#ffe3d1" stroke="#e0632f" stroke-width="2"/>
        <circle cx="0" cy="0" r="14" fill="#ffcbb0"/>
        <line x1="-3" y1="-6" x2="3" y2="6" stroke="#d4380d" stroke-width="2"/>
        <line x1="3" y1="-6" x2="-3" y2="6" stroke="#d4380d" stroke-width="2"/>
        <circle cx="60" cy="34" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="56" y="39" font-size="12" font-weight="700" fill="#e0632f">4</text>
        <line x1="30" y1="18" x2="55" y2="32" stroke="#98a2b3" stroke-width="1.2"/>

        <!-- Canal de Volkmann traversant les lamelles perpendiculairement -->
        <rect x="-210" y="60" width="420" height="26" rx="6" fill="#e8ecff" stroke="#7c4df5" transform="rotate(-14)"/>
        <circle cx="-190" cy="150" r="13" fill="#175cd3" opacity="0.16"/>
        <text x="-194" y="155" font-size="12" font-weight="700" fill="#175cd3">5</text>
        <line x1="-140" y1="120" x2="-183" y2="148" stroke="#98a2b3" stroke-width="1.2"/>
      </g>

      <!-- Périoste et os compact/spongieux en coupe d'ensemble -->
      <g transform="translate(560,90)">
        <text x="0" y="0" font-size="15" font-weight="600" fill="#101828">2 · Coupe de la diaphyse (schéma d’ensemble)</text>
        <rect x="0" y="18" width="330" height="230" rx="10" fill="#fbfbfc" stroke="#e4e7ec"/>

        <!-- couches, de dehors en dedans -->
        <rect x="12" y="30" width="18" height="206" fill="#f6d9c4" stroke="#e0632f"/>
        <rect x="30" y="30" width="26" height="206" fill="#f3f0e8" stroke="#c9bfa1"/>
        <rect x="56" y="30" width="10" height="206" fill="#ffe3d1" stroke="#e0632f"/>
        <rect x="66" y="30" width="26" height="206" fill="#f3f0e8" stroke="#c9bfa1"/>

        <!-- os spongieux au centre -->
        <g transform="translate(150,133)">
          <path d="M-58,-70 Q-20,-90 20,-70 Q60,-50 40,-10 Q70,10 40,50 Q60,80 10,90 Q-30,100 -50,60 Q-80,40 -60,0 Q-90,-30 -58,-70 Z" fill="#f7f4ec" stroke="#c9bfa1" stroke-width="2"/>
          <path d="M-30,-40 Q0,-55 25,-30" fill="none" stroke="#c9bfa1" stroke-width="6" stroke-linecap="round"/>
          <path d="M-40,0 Q-5,10 20,-5" fill="none" stroke="#c9bfa1" stroke-width="6" stroke-linecap="round"/>
          <path d="M-25,35 Q5,45 30,25" fill="none" stroke="#c9bfa1" stroke-width="6" stroke-linecap="round"/>
          <path d="M0,-45 Q10,0 -5,45" fill="none" stroke="#c9bfa1" stroke-width="6" stroke-linecap="round"/>
        </g>
        <circle cx="150" cy="133" r="13" fill="#12a065" opacity="0.16"/>
        <text x="146" y="138" font-size="12" font-weight="700" fill="#12a065">6</text>

        <circle cx="8" cy="245" r="11" fill="#e0632f" opacity="0.18"/>
        <text x="4.5" y="249.5" font-size="10.5" font-weight="700" fill="#e0632f">7</text>
        <text x="22" y="249" font-size="10.5" fill="#475467">périoste</text>
        <circle cx="118" cy="245" r="11" fill="#c9bfa1" opacity="0.4"/>
        <text x="114.5" y="249.5" font-size="10.5" font-weight="700" fill="#8a6f2f">8</text>
        <text x="132" y="249" font-size="10.5" fill="#475467">os compact</text>
        <circle cx="250" cy="245" r="11" fill="#c9bfa1" opacity="0.4"/>
        <text x="246" y="249.5" font-size="10.5" font-weight="700" fill="#8a6f2f">9</text>
        <text x="264" y="249" font-size="10.5" fill="#475467">os spongieux</text>
      </g>

      <!-- Encadré comparatif -->
      <g transform="translate(560,360)">
        <rect x="0" y="0" width="330" height="150" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">Os compact vs os spongieux</text>
        <text x="16" y="50" font-size="11.5" fill="#475467">• Compact : ostéones jointifs, très dense,</text>
        <text x="30" y="66" font-size="11.5" fill="#475467">forme la corticale (diaphyse).</text>
        <text x="16" y="86" font-size="11.5" fill="#475467">• Spongieux : travées anastomosées</text>
        <text x="30" y="102" font-size="11.5" fill="#475467">délimitant des logettes médullaires,</text>
        <text x="30" y="118" font-size="11.5" fill="#475467">pas de véritables ostéones.</text>
        <text x="16" y="138" font-size="11.5" fill="#475467">• Vascularisation commune : Havers + Volkmann.</text>
      </g>

      <text x="40" y="600" font-size="12" fill="#8a94a8">Les canaux de Volkmann relient entre eux les canaux de Havers de deux ostéones voisins et communiquent avec le périoste.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Lamelles osseuses concentriques : couches successives de matrice minéralisée organisées autour du canal central.' },
    { ref: '2', texte: 'Ostéocyte logé dans son ostéoplaste, entre deux lamelles.' },
    { ref: '3', texte: 'Canalicules : fins prolongements reliant les ostéoplastes entre eux, permettant les échanges métaboliques.' },
    { ref: '4', texte: 'Canal de Havers : axe central de l’ostéone, contenant vaisseaux sanguins et fibres nerveuses.' },
    { ref: '5', texte: 'Canal de Volkmann : canal transversal ou oblique reliant deux canaux de Havers et communiquant avec le périoste.' },
    { ref: '6', texte: 'Os spongieux : travées osseuses anastomosées délimitant des logettes occupées par la moelle.' },
    { ref: '7', texte: 'Périoste : membrane conjonctivo-vasculaire recouvrant la surface externe de l’os, sauf aux surfaces articulaires.' },
    { ref: '8', texte: 'Os compact (cortical) : constitué d’ostéones jointifs, forme la diaphyse des os longs.' },
    { ref: '9', texte: 'Os spongieux (trabéculaire) : situé aux extrémités des os longs et au centre des os courts et plats.' },
  ],
};
