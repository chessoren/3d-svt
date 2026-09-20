import type { Schema } from '../../types';

export const schemaStructureProteines: Schema = {
  id: 'bioch-structure-proteines',
  ue: 'bioch',
  titre: 'Les quatre niveaux de structure des protéines',
  description:
    'Organisation structurale des protéines : structure primaire, structure secondaire (hélice α et feuillet β), structure tertiaire et structure quaternaire.',
  categorie: 'Biochimie structurale',
  viewBox: '0 0 920 640',
  ficheLiee: 'bioch-structure-proteines',
  motsCles: ['structure primaire', 'hélice alpha', 'feuillet bêta', 'structure tertiaire', 'structure quaternaire'],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Les quatre niveaux d’organisation d’une protéine</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau 1 : structure primaire -->
      <g transform="translate(40,60)">
        <rect x="0" y="0" width="420" height="260" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <circle cx="22" cy="24" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="18" y="29" font-size="12" font-weight="700" fill="#175cd3">1</text>
        <text x="42" y="29" font-size="14.5" font-weight="600" fill="#101828">Structure primaire</text>

        <g transform="translate(30,110)">
          <line x1="0" y1="0" x2="300" y2="0" stroke="#475467" stroke-width="2"/>
          <circle cx="0" cy="0" r="16" fill="#ffffff" stroke="#175cd3" stroke-width="2"/>
          <text x="-5" y="5" font-size="13" font-weight="600" fill="#101828">M</text>
          <circle cx="60" cy="0" r="16" fill="#ffffff" stroke="#175cd3" stroke-width="2"/>
          <text x="55" y="5" font-size="13" font-weight="600" fill="#101828">A</text>
          <circle cx="120" cy="0" r="16" fill="#ffffff" stroke="#175cd3" stroke-width="2"/>
          <text x="115" y="5" font-size="13" font-weight="600" fill="#101828">V</text>
          <circle cx="180" cy="0" r="16" fill="#ffffff" stroke="#175cd3" stroke-width="2"/>
          <text x="174" y="5" font-size="13" font-weight="600" fill="#101828">L</text>
          <circle cx="240" cy="0" r="16" fill="#ffffff" stroke="#175cd3" stroke-width="2"/>
          <text x="235" y="5" font-size="13" font-weight="600" fill="#101828">G</text>
          <circle cx="300" cy="0" r="16" fill="#ffffff" stroke="#175cd3" stroke-width="2"/>
          <text x="294" y="5" font-size="13" font-weight="600" fill="#101828">S</text>
          <circle cx="30" cy="-18" r="12" fill="#e0632f" opacity="0.2"/>
          <text x="26" y="-13" font-size="11.5" font-weight="700" fill="#e0632f">2</text>
        </g>
        <text x="30" y="164" font-size="12.5" fill="#475467">Enchaînement linéaire d’acides aminés (ici Met-Ala-Val-Leu-Gly-Ser)</text>
        <text x="30" y="184" font-size="12.5" fill="#475467">reliés par des liaisons peptidiques, de l’extrémité N- à C-terminale.</text>
        <text x="30" y="212" font-size="12.5" fill="#475467">Cette séquence est codée par le gène et détermine tous les</text>
        <text x="30" y="230" font-size="12.5" fill="#475467">niveaux d’organisation supérieurs.</text>
      </g>

      <!-- Panneau 2 : structure secondaire -->
      <g transform="translate(480,60)">
        <rect x="0" y="0" width="420" height="260" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <circle cx="22" cy="24" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="16" y="29" font-size="12" font-weight="700" fill="#e0632f">3</text>
        <text x="42" y="29" font-size="14.5" font-weight="600" fill="#101828">Structure secondaire</text>

        <text x="24" y="58" font-size="12.5" font-weight="600" fill="#101828">Hélice α</text>
        <path d="M 30 70 C 55 70 55 90 30 90 C 5 90 5 110 30 110 C 55 110 55 130 30 130 C 5 130 5 150 30 150"
              fill="none" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
        <line x1="30" y1="76" x2="30" y2="112" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 3"/>
        <line x1="30" y1="102" x2="30" y2="138" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 3"/>
        <circle cx="60" cy="118" r="12" fill="#12a065" opacity="0.2"/>
        <text x="56" y="123" font-size="11.5" font-weight="700" fill="#12a065">5</text>
        <text x="78" y="105" font-size="11.5" fill="#475467">liaison H entre</text>
        <text x="78" y="121" font-size="11.5" fill="#475467">résidu n et n+4,</text>
        <text x="78" y="137" font-size="11.5" fill="#475467">3,6 résidus/tour</text>

        <text x="230" y="58" font-size="12.5" font-weight="600" fill="#101828">Feuillet β</text>
        <polygon points="220,80 300,80 300,72 320,90 300,108 300,100 220,100" fill="#7c4df5" opacity="0.75"/>
        <polygon points="220,120 300,120 300,112 320,130 300,148 300,140 220,140" fill="#7c4df5" opacity="0.4"/>
        <line x1="230" y1="102" x2="230" y2="118" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 3"/>
        <line x1="260" y1="102" x2="260" y2="118" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 3"/>
        <line x1="290" y1="102" x2="290" y2="118" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 3"/>
        <circle cx="330" cy="90" r="12" fill="#7c4df5" opacity="0.22"/>
        <text x="326" y="95" font-size="11.5" font-weight="700" fill="#7c4df5">4</text>
        <text x="220" y="168" font-size="11.5" fill="#475467">brins juxtaposés en pli, reliés</text>
        <text x="220" y="184" font-size="11.5" fill="#475467">par liaisons H inter-brins</text>

        <text x="24" y="212" font-size="12.5" fill="#475467">Ces motifs répétitifs sont stabilisés par des</text>
        <text x="24" y="230" font-size="12.5" fill="#475467">liaisons hydrogène entre groupements N–H et C=O du squelette.</text>
      </g>

      <!-- Panneau 3 : structure tertiaire -->
      <g transform="translate(40,340)">
        <rect x="0" y="0" width="420" height="260" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
        <circle cx="22" cy="24" r="13" fill="#12a065" opacity="0.18"/>
        <text x="18" y="29" font-size="12" font-weight="700" fill="#12a065">6</text>
        <text x="42" y="29" font-size="14.5" font-weight="600" fill="#101828">Structure tertiaire</text>

        <path d="M 60 90 C 20 110 20 160 60 180 C 100 200 150 210 190 190 C 230 170 220 120 190 100 C 220 90 230 60 200 50 C 170 40 120 55 100 70 C 85 78 75 82 60 90 Z"
              fill="#d7ecff" stroke="#175cd3" stroke-width="2"/>

        <circle cx="110" cy="130" r="18" fill="#f4b942" opacity="0.5" stroke="#b58a00"/>
        <text x="94" y="152" font-size="10.5" fill="#8a6a00">apolaire</text>
        <circle cx="118" cy="122" r="12" fill="#f4b942" opacity="0.3"/>
        <text x="145" y="118" font-size="11" font-weight="700" fill="#8a6a00">7</text>
        <circle cx="150" cy="115" r="12" fill="#f4b942" opacity="0.6"/>

        <text x="200" y="128" font-size="12" fill="#d4380d">+</text>
        <text x="222" y="146" font-size="12" fill="#175cd3">−</text>
        <line x1="204" y1="126" x2="220" y2="142" stroke="#98a2b3" stroke-width="1" stroke-dasharray="2 3"/>
        <circle cx="238" cy="134" r="12" fill="#d4380d" opacity="0.2"/>
        <text x="234" y="139" font-size="11" font-weight="700" fill="#d4380d">8</text>

        <path d="M 130 175 L 140 165 L 150 175 L 160 165" fill="none" stroke="#b58a00" stroke-width="2.4"/>
        <text x="112" y="200" font-size="10.5" fill="#8a6a00">S–S</text>
        <circle cx="168" cy="168" r="12" fill="#b58a00" opacity="0.22"/>
        <text x="164" y="173" font-size="11" font-weight="700" fill="#8a6a00">9</text>

        <text x="24" y="228" font-size="11.5" fill="#475467">Repliement tridimensionnel d’une chaîne unique, stabilisé par</text>
        <text x="24" y="246" font-size="11.5" fill="#475467">interactions hydrophobes, liaisons ioniques, liaisons H et ponts S–S.</text>
      </g>

      <!-- Panneau 4 : structure quaternaire -->
      <g transform="translate(480,340)">
        <rect x="0" y="0" width="420" height="260" rx="14" fill="#f2f0ff" stroke="#dcd6fb"/>
        <circle cx="22" cy="24" r="13" fill="#7c4df5" opacity="0.18"/>
        <text x="17" y="29" font-size="12" font-weight="700" fill="#7c4df5">10</text>
        <text x="42" y="29" font-size="14.5" font-weight="600" fill="#101828">Structure quaternaire</text>

        <g transform="translate(150,130)">
          <ellipse cx="-45" cy="-30" rx="44" ry="34" fill="#c9d6ff" stroke="#175cd3" stroke-width="2"/>
          <ellipse cx="45" cy="-30" rx="44" ry="34" fill="#c9d6ff" stroke="#175cd3" stroke-width="2"/>
          <ellipse cx="-45" cy="34" rx="44" ry="34" fill="#f3d3c2" stroke="#e0632f" stroke-width="2"/>
          <ellipse cx="45" cy="34" rx="44" ry="34" fill="#f3d3c2" stroke="#e0632f" stroke-width="2"/>
          <text x="-64" y="-26" font-size="12" fill="#175cd3">α1</text>
          <text x="36" y="-26" font-size="12" fill="#175cd3">α2</text>
          <text x="-64" y="38" font-size="12" fill="#e0632f">β1</text>
          <text x="36" y="38" font-size="12" fill="#e0632f">β2</text>
          <circle cx="-45" cy="-30" r="9" fill="#d4380d"/>
          <circle cx="45" cy="-30" r="9" fill="#d4380d"/>
          <circle cx="-45" cy="34" r="9" fill="#d4380d"/>
          <circle cx="45" cy="34" r="9" fill="#d4380d"/>
          <circle cx="66" cy="52" r="12" fill="#d4380d" opacity="0.22"/>
          <text x="62" y="57" font-size="11" font-weight="700" fill="#d4380d">11</text>
        </g>

        <text x="24" y="222" font-size="11.5" fill="#475467">Association non covalente de plusieurs chaînes (sous-unités)</text>
        <text x="24" y="240" font-size="11.5" fill="#475467">repliées : ici l’hémoglobine, tétramère α2β2 portant 4 hèmes.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Structure primaire : séquence linéaire des acides aminés, écrite de N- à C-terminal.' },
    { ref: '2', texte: 'Chaque résidu est relié au suivant par une liaison peptidique.' },
    { ref: '3', texte: 'Hélice α : repliement en spirale, 3,6 résidus par tour, stabilisée par liaisons H.' },
    { ref: '4', texte: 'Feuillet β : brins étendus juxtaposés, parallèles ou antiparallèles.' },
    { ref: '5', texte: 'Liaison hydrogène intracaténaire entre le C=O du résidu n et le N–H du résidu n+4.' },
    { ref: '6', texte: 'Structure tertiaire : repliement global d’une chaîne polypeptidique en une forme 3D stable.' },
    { ref: '7', texte: 'Interactions hydrophobes : les chaînes latérales apolaires se regroupent au cœur de la protéine.' },
    { ref: '8', texte: 'Liaison ionique (pont salin) entre une chaîne latérale acide et une chaîne latérale basique.' },
    { ref: '9', texte: 'Pont disulfure (S–S) covalent entre deux résidus cystéine.' },
    { ref: '10', texte: 'Structure quaternaire : assemblage non covalent de plusieurs sous-unités protéiques.' },
    { ref: '11', texte: 'Groupement hème : cofacteur qui fixe le dioxygène sur chaque sous-unité de l’hémoglobine.' },
  ],
};
