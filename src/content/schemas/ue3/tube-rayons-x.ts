import type { Schema } from '../../types';

export const schemaTubeRayonsX: Schema = {
  id: 'ue3-tube-rayons-x',
  ue: 'ue3',
  titre: 'Le tube à rayons X',
  description:
    'Structure du tube radiogène : cathode et filament, anode tournante, accélération des électrons sous haute tension, production du rayonnement de freinage et des raies caractéristiques, filtration, collimation et densités radiologiques.',
  categorie: 'Biophysique des rayonnements',
  viewBox: '0 0 920 660',
  ficheLiee: 'ue3-imagerie-rx-tdm',
  motsCles: ['tube à rayons X', 'cathode', 'anode tournante', 'rayonnement de freinage', 'raies caractéristiques', 'filtration', 'densités radiologiques'],
  svg: `
    <rect x="0" y="0" width="920" height="660" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Le tube à rayons X</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Ampoule sous vide -->
      <g transform="translate(60,70)">
        <rect x="0" y="0" width="600" height="230" rx="18" fill="#f2f6ff" stroke="#9db8e8" stroke-width="2"/>
        <text x="16" y="-8" font-size="12.5" fill="#475467">Ampoule de verre sous vide poussé</text>

        <!-- Cathode -->
        <g transform="translate(60,115)">
          <rect x="-24" y="-46" width="48" height="92" rx="8" fill="#dbe6ff" stroke="#175cd3" stroke-width="2"/>
          <path d="M -10 -20 C 0 -30 0 -10 -10 -20 M -10 0 C 0 -10 0 10 -10 0 M -10 20 C 0 10 0 30 -10 20" fill="none" stroke="#d4380d" stroke-width="2.2"/>
          <circle cx="0" cy="-64" r="13" fill="#175cd3" opacity="0.2"/>
          <text x="-5" y="-59" font-size="12" font-weight="700" fill="#175cd3">1</text>
          <text x="-30" y="66" font-size="12" fill="#475467">cathode</text>
          <circle cx="-2" cy="0" r="13" fill="#d4380d" opacity="0.2"/>
          <text x="-7" y="5" font-size="12" font-weight="700" fill="#d4380d">2</text>
        </g>

        <!-- Faisceau d'électrons -->
        <defs>
          <marker id="ue3-tube-fl-e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#7c4df5"/>
          </marker>
        </defs>
        <line x1="96" y1="115" x2="410" y2="105" stroke="#7c4df5" stroke-width="2.6" marker-end="url(#ue3-tube-fl-e)"/>
        <text x="180" y="96" font-size="12" fill="#7c4df5">électrons accélérés</text>
        <circle cx="250" cy="82" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="245" y="87" font-size="12" font-weight="700" fill="#7c4df5">3</text>
        <text x="180" y="132" font-size="11.5" fill="#475467">haute tension U (kV) entre cathode et anode</text>

        <!-- Anode tournante -->
        <g transform="translate(450,110)">
          <ellipse cx="0" cy="0" rx="20" ry="70" fill="#ffe3c9" stroke="#b76e00" stroke-width="2.2" transform="rotate(20)"/>
          <path d="M -14 -50 L 14 -60 M -14 -20 L 14 -30 M -14 10 L 14 0 M -14 40 L 14 30" stroke="#8a5400" stroke-width="1.6" transform="rotate(20)"/>
          <circle cx="0" cy="-84" r="13" fill="#b76e00" opacity="0.2"/>
          <text x="-5" y="-79" font-size="12" font-weight="700" fill="#b76e00">4</text>
          <text x="26" y="4" font-size="12" fill="#475467">anode tournante</text>
          <text x="26" y="20" font-size="11" fill="#8a94a8">(tungstène, rotation ~ 3000 tr/min)</text>
        </g>

        <!-- Photons X -->
        <defs>
          <marker id="ue3-tube-fl-x" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#12a065"/>
          </marker>
        </defs>
        <line x1="450" y1="150" x2="540" y2="205" stroke="#12a065" stroke-width="2.4" marker-end="url(#ue3-tube-fl-x)"/>
        <text x="470" y="200" font-size="12" fill="#0f8a58">photons X (1 % de l’énergie)</text>

        <text x="60" y="198" font-size="11" fill="#8a94a8">La quasi-totalité de l’énergie (~99 %) est dissipée en chaleur.</text>
      </g>

      <!-- Filtration + collimation -->
      <g transform="translate(560,320)">
        <line x1="30" y1="-2" x2="30" y2="60" stroke="#98a2b3" stroke-width="10"/>
        <text x="6" y="-10" font-size="12" fill="#475467">filtre (Al/Cu)</text>
        <circle cx="30" cy="30" r="13" fill="#98a2b3" opacity="0.3"/>
        <text x="25" y="35" font-size="12" font-weight="700" fill="#475467">5</text>

        <polygon points="60,-10 100,-10 90,64 70,64" fill="#dfe4ec" stroke="#667085" stroke-width="2"/>
        <text x="56" y="-18" font-size="12" fill="#475467">collimateur</text>
        <circle cx="80" cy="30" r="13" fill="#667085" opacity="0.3"/>
        <text x="75" y="35" font-size="12" font-weight="700" fill="#344054">6</text>
      </g>

      <!-- Spectre d'émission -->
      <g transform="translate(60,340)">
        <rect x="0" y="0" width="440" height="210" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Spectre d’émission du tube</text>

        <line x1="40" y1="170" x2="420" y2="170" stroke="#475467" stroke-width="1.6"/>
        <line x1="40" y1="170" x2="40" y2="30" stroke="#475467" stroke-width="1.6"/>
        <text x="424" y="174" font-size="11.5" fill="#475467">E (keV)</text>
        <text x="6" y="30" font-size="11.5" fill="#475467">intensité</text>

        <path d="M 50 170 C 90 60 130 40 175 46 C 230 54 280 100 330 150 L 330 170 Z"
              fill="#c9d6ff" opacity="0.6" stroke="#175cd3" stroke-width="2.2"/>
        <text x="130" y="70" font-size="11" fill="#175cd3">rayonnement de freinage</text>
        <circle cx="200" cy="66" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="195" y="71" font-size="12" font-weight="700" fill="#175cd3">7</text>

        <line x1="245" y1="170" x2="245" y2="70" stroke="#d4380d" stroke-width="3"/>
        <line x1="265" y1="170" x2="265" y2="95" stroke="#d4380d" stroke-width="3"/>
        <text x="250" y="60" font-size="11" fill="#d4380d">raies K</text>
        <circle cx="255" cy="82" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="250" y="87" font-size="12" font-weight="700" fill="#d4380d">8</text>

        <line x1="330" y1="170" x2="330" y2="30" stroke="#98a2b3" stroke-width="1.4" stroke-dasharray="3 3"/>
        <text x="312" y="24" font-size="10.5" fill="#8a94a8">Emax = eU</text>
      </g>

      <!-- Densités radiologiques -->
      <g transform="translate(520,340)">
        <rect x="0" y="0" width="360" height="210" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Les cinq densités radiologiques</text>
        <circle cx="334" cy="20" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="329" y="25" font-size="12" font-weight="700" fill="#7c4df5">9</text>

        <text x="16" y="52" font-size="12.5" fill="#101828">Air</text>
        <rect x="70" y="42" width="270" height="12" rx="4" fill="#eef2f6"/>
        <text x="16" y="76" font-size="12.5" fill="#101828">Graisse</text>
        <rect x="70" y="66" width="270" height="12" rx="4" fill="#d9dfe8"/>
        <text x="16" y="100" font-size="12.5" fill="#101828">Eau / tissus mous</text>
        <rect x="70" y="90" width="270" height="12" rx="4" fill="#b0bac8"/>
        <text x="16" y="124" font-size="12.5" fill="#101828">Os</text>
        <rect x="70" y="114" width="270" height="12" rx="4" fill="#6b7686"/>
        <text x="16" y="148" font-size="12.5" fill="#101828">Métal</text>
        <rect x="70" y="138" width="270" height="12" rx="4" fill="#232a35"/>
        <text x="16" y="172" font-size="11" fill="#475467">Du plus radiotransparent (noir) au plus</text>
        <text x="16" y="190" font-size="11" fill="#475467">radio-opaque (blanc) sur le cliché.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Filament de la cathode, chauffé par effet Joule : il émet des électrons par effet thermoïonique.' },
    { ref: '2', texte: 'Cathode, pôle négatif du tube, portée à haute tension négative par rapport à l’anode.' },
    { ref: '3', texte: 'Les électrons sont accélérés dans le vide par la différence de potentiel U appliquée entre cathode et anode.' },
    { ref: '4', texte: 'Anode tournante en tungstène : sa rotation répartit la chaleur et permet des intensités plus élevées.' },
    { ref: '5', texte: 'Filtration (aluminium ou cuivre) : arrête les photons de basse énergie, peu utiles et irradiants.' },
    { ref: '6', texte: 'Collimateur : limite le faisceau au champ utile pour réduire la dose délivrée au patient.' },
    { ref: '7', texte: 'Rayonnement de freinage (Bremsstrahlung) : spectre continu dû à la décélération des électrons dans le nuage électronique de l’anode.' },
    { ref: '8', texte: 'Raies caractéristiques : pics discrets liés aux transitions électroniques propres au matériau de l’anode.' },
    { ref: '9', texte: 'Échelle des densités radiologiques, de l’air (noir) au métal (blanc), qui détermine le contraste de l’image.' },
  ],
};
