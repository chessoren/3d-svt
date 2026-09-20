import type { Schema } from '../../types';

export const schemaNephron: Schema = {
  id: 'physio-nephron',
  ue: 'physio',
  titre: 'Le néphron',
  description:
    'Organisation complète du néphron : corpuscule rénal, tube contourné proximal, anse de Henle, tube contourné distal, tube collecteur, appareil juxtaglomérulaire et vascularisation, avec les sites de filtration, réabsorption et sécrétion.',
  categorie: 'Physiologie rénale',
  viewBox: '0 0 920 860',
  ficheLiee: 'physio-filtration-glomerulaire',
  motsCles: ['néphron', 'glomérule', 'tube contourné proximal', 'anse de Henle', 'tube contourné distal', 'tube collecteur', 'appareil juxtaglomérulaire'],
  svg: `
    <rect x="0" y="0" width="920" height="860" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="physio-nephron-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Organisation du néphron</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(70,80)">
        <!-- zones cortex / médullaire -->
        <rect x="0" y="0" width="760" height="230" fill="#fbfcfe"/>
        <rect x="0" y="230" width="760" height="330" fill="#f4f7fb"/>
        <line x1="0" y1="230" x2="760" y2="230" stroke="#c9d6ff" stroke-width="1.4" stroke-dasharray="6 4"/>
        <text x="10" y="20" font-size="13" font-weight="600" fill="#475467">Cortex rénal</text>
        <text x="10" y="250" font-size="13" font-weight="600" fill="#475467">Médullaire (pyramide rénale)</text>

        <!-- corpuscule rénal -->
        <circle cx="150" cy="110" r="46" fill="#fff6f1" stroke="#f3d3c2" stroke-width="2"/>
        <circle cx="150" cy="110" r="27" fill="#fdeee8" stroke="#e0632f" stroke-width="1.6"/>
        <circle cx="192" cy="120" r="12" fill="#e0632f" opacity="0.22"/>
        <text x="188" y="124" font-size="11" font-weight="700" fill="#e0632f">1</text>

        <!-- artériole afférente -->
        <line x1="40" y1="86" x2="112" y2="100" stroke="#d4380d" stroke-width="4.4" stroke-linecap="round" marker-end="url(#physio-nephron-fleche)"/>
        <text x="4" y="76" font-size="11" fill="#d4380d">art. afférente</text>
        <circle cx="60" cy="66" r="12" fill="#d4380d" opacity="0.2"/>
        <text x="56" y="70" font-size="11" font-weight="700" fill="#d4380d">8</text>

        <!-- artériole efférente -->
        <line x1="188" y1="128" x2="240" y2="150" stroke="#f79009" stroke-width="2.8" stroke-linecap="round" marker-end="url(#physio-nephron-fleche)"/>
        <text x="242" y="168" font-size="11" fill="#b54708">art. efférente</text>
        <circle cx="260" cy="182" r="12" fill="#f79009" opacity="0.24"/>
        <text x="256" y="186" font-size="11" font-weight="700" fill="#b54708">9</text>

        <!-- tube contourné proximal (TCP), coiled -->
        <path d="M180,88 q14,-22 28,0 q14,22 28,0 q14,-22 28,0 q14,22 28,0 q14,-18 24,-4"
          fill="none" stroke="#175cd3" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="296" cy="56" r="12" fill="#175cd3" opacity="0.2"/>
        <text x="292" y="60" font-size="11" font-weight="700" fill="#175cd3">2</text>
        <text x="230" y="46" font-size="11" fill="#175cd3">tube contourné proximal</text>

        <!-- capillaires péritubulaires -->
        <path d="M260,40 q10,-10 20,0 q10,10 20,0" fill="none" stroke="#d4380d" stroke-width="1.4" stroke-dasharray="2 3"/>
        <circle cx="360" cy="30" r="11" fill="#d4380d" opacity="0.18"/>
        <text x="356" y="34" font-size="11" font-weight="700" fill="#d4380d">10</text>
        <text x="376" y="34" font-size="11" fill="#d4380d">capillaires péritubulaires</text>

        <!-- branche descendante fine -->
        <line x1="316" y1="96" x2="316" y2="460" stroke="#12a065" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="316" cy="300" r="12" fill="#12a065" opacity="0.2"/>
        <text x="312" y="304" font-size="11" font-weight="700" fill="#12a065">3</text>
        <text x="222" y="304" font-size="11" fill="#12a065">branche descendante (perméable à l’eau)</text>

        <!-- vasa recta -->
        <line x1="286" y1="240" x2="286" y2="430" stroke="#7c4df5" stroke-width="1.4" stroke-dasharray="3 4"/>
        <line x1="356" y1="240" x2="356" y2="430" stroke="#7c4df5" stroke-width="1.4" stroke-dasharray="3 4"/>
        <circle cx="286" cy="450" r="11" fill="#7c4df5" opacity="0.2"/>
        <text x="282" y="454" font-size="11" font-weight="700" fill="#7c4df5">11</text>
        <text x="300" y="454" font-size="11" fill="#7c4df5">vasa recta</text>

        <!-- anse de Henle : virage -->
        <path d="M316,460 C316,486 356,486 356,460" fill="none" stroke="#12a065" stroke-width="3.2" stroke-linecap="round"/>

        <!-- branche ascendante -->
        <line x1="356" y1="460" x2="356" y2="140" stroke="#e0632f" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="356" cy="360" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="352" y="364" font-size="11" font-weight="700" fill="#e0632f">4</text>
        <text x="368" y="364" font-size="11" fill="#e0632f">branche ascendante (imperméable à l’eau)</text>

        <!-- appareil juxtaglomérulaire -->
        <line x1="356" y1="140" x2="230" y2="128" stroke="#7c4df5" stroke-width="3" stroke-linecap="round"/>
        <circle cx="240" cy="118" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="235" y="123" font-size="12" font-weight="700" fill="#7c4df5">7</text>

        <!-- tube contourné distal (TCD), coiled -->
        <path d="M356,140 q14,-20 28,0 q14,20 28,0 q14,-20 28,0 q14,18 24,4"
          fill="none" stroke="#f79009" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="440" cy="112" r="12" fill="#f79009" opacity="0.24"/>
        <text x="436" y="116" font-size="11" font-weight="700" fill="#b54708">5</text>
        <text x="400" y="98" font-size="11" fill="#b54708">tube contourné distal</text>

        <!-- tube collecteur -->
        <line x1="464" y1="148" x2="500" y2="540" stroke="#101828" stroke-width="4" stroke-linecap="round"/>
        <circle cx="500" cy="420" r="13" fill="#101828" opacity="0.16"/>
        <text x="495" y="425" font-size="12" font-weight="700" fill="#101828">6</text>
        <text x="516" y="425" font-size="11" fill="#101828">tube collecteur</text>

        <!-- sortie vers voies excrétrices -->
        <line x1="500" y1="540" x2="560" y2="560" stroke="#101828" stroke-width="3" marker-end="url(#physio-nephron-fleche)"/>
        <text x="566" y="566" font-size="11.5" fill="#475467">vers petit calice</text>
      </g>

      <text x="40" y="672" font-size="19" font-weight="600" fill="#101828">2 · Fonctions le long du néphron</text>
      <line x1="40" y1="684" x2="180" y2="684" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,704)" font-size="12" fill="#101828">
        <rect x="0" y="0" width="820" height="134" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="20" cy="22" r="10" fill="#e0632f" opacity="0.22"/>
        <text x="17" y="26" font-size="10.5" font-weight="700" fill="#e0632f">1</text>
        <text x="36" y="26">Corpuscule rénal : filtration du plasma (barrière de filtration glomérulaire).</text>
        <circle cx="20" cy="46" r="10" fill="#175cd3" opacity="0.2"/>
        <text x="17" y="50" font-size="10.5" font-weight="700" fill="#175cd3">2</text>
        <text x="36" y="50">TCP : réabsorption majoritaire (≈ 65 % de l’eau et du Na⁺, glucose et acides aminés en totalité) et sécrétion.</text>
        <circle cx="20" cy="70" r="10" fill="#12a065" opacity="0.2"/>
        <text x="17" y="74" font-size="10.5" font-weight="700" fill="#12a065">3</text>
        <text x="36" y="74">Branche descendante de l’anse de Henle : perméable à l’eau, imperméable aux solutés.</text>
        <circle cx="20" cy="94" r="10" fill="#e0632f" opacity="0.2"/>
        <text x="17" y="98" font-size="10.5" font-weight="700" fill="#e0632f">4</text>
        <text x="36" y="98">Branche ascendante de l’anse de Henle : imperméable à l’eau, réabsorption active de NaCl.</text>
        <circle cx="20" cy="118" r="10" fill="#f79009" opacity="0.24"/>
        <text x="17" y="122" font-size="10.5" font-weight="700" fill="#b54708">5</text>
        <text x="36" y="122">TCD : réabsorption fine régulée (Na⁺, Ca²⁺), sécrétion de K⁺ et de H⁺.</text>

        <circle cx="440" cy="22" r="10" fill="#101828" opacity="0.16"/>
        <text x="437" y="26" font-size="10.5" font-weight="700" fill="#101828">6</text>
        <text x="456" y="26">Tube collecteur : réabsorption d’eau régulée par l’ADH, de Na⁺ régulée par l’aldostérone.</text>
        <circle cx="440" cy="46" r="10" fill="#7c4df5" opacity="0.22"/>
        <text x="437" y="50" font-size="10.5" font-weight="700" fill="#7c4df5">7</text>
        <text x="456" y="50">Appareil juxtaglomérulaire (macula densa) : sécrète la rénine, rétrocontrôle tubuloglomérulaire.</text>
        <circle cx="440" cy="70" r="10" fill="#d4380d" opacity="0.2"/>
        <text x="437" y="74" font-size="10.5" font-weight="700" fill="#d4380d">8</text>
        <text x="456" y="74">Artériole afférente : de calibre plus large, apporte le sang au glomérule.</text>
        <circle cx="440" cy="94" r="10" fill="#f79009" opacity="0.24"/>
        <text x="437" y="98" font-size="10.5" font-weight="700" fill="#b54708">9</text>
        <text x="456" y="98">Artériole efférente : de calibre plus réduit, maintient la pression de filtration glomérulaire.</text>
        <circle cx="440" cy="118" r="10" fill="#7c4df5" opacity="0.2"/>
        <text x="437" y="122" font-size="10.5" font-weight="700" fill="#7c4df5">11</text>
        <text x="456" y="122">Vasa recta : vascularisation de la médullaire, participent à la concentration des urines.</text>
      </g>

      <text x="40" y="854" font-size="12" fill="#8a94a8">Le débit de filtration glomérulaire normal est d’environ 120 mL/min chez l’adulte.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Corpuscule rénal (glomérule et capsule de Bowman) : site de la filtration du plasma.' },
    { ref: '2', texte: 'Tube contourné proximal : réabsorption majoritaire de l’eau, du sodium, du glucose et des acides aminés.' },
    { ref: '3', texte: 'Branche descendante fine de l’anse de Henle : perméable à l’eau, imperméable aux solutés.' },
    { ref: '4', texte: 'Branche ascendante de l’anse de Henle : imperméable à l’eau, réabsorption active de NaCl, participe au gradient cortico-médullaire.' },
    { ref: '5', texte: 'Tube contourné distal : réabsorption fine régulée du sodium et du calcium, sécrétion de potassium et de protons.' },
    { ref: '6', texte: 'Tube collecteur : réabsorption d’eau sous contrôle de l’ADH et de sodium sous contrôle de l’aldostérone.' },
    { ref: '7', texte: 'Appareil juxtaglomérulaire (macula densa et cellules juxtaglomérulaires) : sécrète la rénine et assure le rétrocontrôle tubuloglomérulaire.' },
    { ref: '8', texte: 'Artériole afférente : amène le sang au glomérule, calibre plus large que l’artériole efférente.' },
    { ref: '9', texte: 'Artériole efférente : quitte le glomérule, calibre plus réduit, maintient la pression de filtration.' },
    { ref: '10', texte: 'Capillaires péritubulaires : entourent les tubules corticaux, réabsorbent vers le sang.' },
    { ref: '11', texte: 'Vasa recta : capillaires longeant l’anse de Henle, participent au maintien du gradient de concentration médullaire.' },
  ],
};
