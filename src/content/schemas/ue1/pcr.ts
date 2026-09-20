import type { Schema } from '../../types';

export const schemaPcr: Schema = {
  id: 'ue1-pcr',
  ue: 'ue1',
  titre: 'La réaction de polymérisation en chaîne (PCR)',
  description:
    'Principe de la PCR : les trois étapes d’un cycle (dénaturation, hybridation des amorces, élongation), le rôle de la polymérase thermostable et la croissance exponentielle du nombre de copies au fil des cycles.',
  categorie: 'Biologie moléculaire',
  viewBox: '0 0 920 820',
  ficheLiee: 'ue1-genetique-populations',
  motsCles: [
    'PCR',
    'polymérisation en chaîne',
    'ADN polymérase thermostable',
    'Taq polymérase',
    'amorces',
    'dénaturation',
    'hybridation',
    'élongation',
    'amplification exponentielle',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="820" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue1-pcr-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">La réaction de polymérisation en chaîne (PCR)</text>
      <line x1="40" y1="52" x2="230" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="72" font-size="13" fill="#475467">Un cycle comprend trois étapes, répétées pour amplifier exponentiellement une séquence d’ADN cible.</text>

      <!-- Panneau 1 : dénaturation -->
      <g transform="translate(40,96)">
        <rect x="0" y="0" width="260" height="284" rx="14" fill="#fbfbfd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="14" font-weight="600" fill="#101828">Dénaturation</text>
        <text x="16" y="44" font-size="12" font-weight="600" fill="#e0632f">94–95 °C</text>

        <line x1="30" y1="80" x2="230" y2="80" stroke="#175cd3" stroke-width="3"/>
        <line x1="30" y1="96" x2="230" y2="96" stroke="#e0632f" stroke-width="3"/>
        <line x1="40" y1="80" x2="40" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="60" y1="80" x2="60" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="80" y1="80" x2="80" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="100" y1="80" x2="100" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="120" y1="80" x2="120" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="140" y1="80" x2="140" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="160" y1="80" x2="160" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="180" y1="80" x2="180" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="200" y1="80" x2="200" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="220" y1="80" x2="220" y2="96" stroke="#98a2b3" stroke-width="1.4"/>
        <circle cx="245" cy="88" r="11" fill="#475467" opacity="0.9"/>
        <text x="241" y="93" font-size="12" font-weight="700" fill="#ffffff">1</text>

        <line x1="130" y1="104" x2="130" y2="142" stroke="#101828" stroke-width="2" marker-end="url(#ue1-pcr-fleche)"/>
        <circle cx="152" cy="124" r="11" fill="#e0632f" opacity="0.9"/>
        <text x="148" y="129" font-size="12" font-weight="700" fill="#ffffff">2</text>

        <line x1="40" y1="168" x2="220" y2="168" stroke="#175cd3" stroke-width="3"/>
        <line x1="40" y1="206" x2="220" y2="206" stroke="#e0632f" stroke-width="3"/>

        <text x="16" y="250" font-size="11" fill="#475467">Séparation complète des deux brins parentaux</text>
      </g>

      <!-- Panneau 2 : hybridation -->
      <g transform="translate(330,96)">
        <rect x="0" y="0" width="260" height="284" rx="14" fill="#fbfbfd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="14" font-weight="600" fill="#101828">Hybridation des amorces</text>
        <text x="16" y="44" font-size="12" font-weight="600" fill="#175cd3">50–65 °C</text>

        <line x1="20" y1="90" x2="240" y2="90" stroke="#98a2b3" stroke-width="3"/>
        <line x1="40" y1="90" x2="95" y2="90" stroke="#12a065" stroke-width="4" marker-end="url(#ue1-pcr-fleche)"/>
        <text x="38" y="82" font-size="9" fill="#12a065">amorce sens</text>
        <circle cx="65" cy="66" r="11" fill="#175cd3" opacity="0.9"/>
        <text x="61" y="71" font-size="12" font-weight="700" fill="#ffffff">3</text>
        <circle cx="112" cy="66" r="11" fill="#12a065" opacity="0.9"/>
        <text x="108" y="71" font-size="12" font-weight="700" fill="#ffffff">4</text>

        <line x1="20" y1="170" x2="240" y2="170" stroke="#98a2b3" stroke-width="3"/>
        <line x1="230" y1="170" x2="185" y2="170" stroke="#7c4df5" stroke-width="4" marker-end="url(#ue1-pcr-fleche)"/>
        <text x="168" y="190" font-size="9" fill="#7c4df5">amorce antisens</text>

        <text x="16" y="250" font-size="11" fill="#475467">Appariement spécifique des amorces sur chaque brin matrice</text>
      </g>

      <!-- Panneau 3 : élongation -->
      <g transform="translate(620,96)">
        <rect x="0" y="0" width="260" height="284" rx="14" fill="#fbfbfd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="14" font-weight="600" fill="#101828">Élongation</text>
        <text x="16" y="44" font-size="12" font-weight="600" fill="#12a065">72 °C</text>

        <line x1="20" y1="90" x2="240" y2="90" stroke="#98a2b3" stroke-width="3"/>
        <line x1="40" y1="90" x2="90" y2="90" stroke="#12a065" stroke-width="4"/>
        <line x1="90" y1="90" x2="205" y2="90" stroke="#175cd3" stroke-width="4" marker-end="url(#ue1-pcr-fleche)"/>
        <ellipse cx="150" cy="90" rx="20" ry="15" fill="#0e7490" opacity="0.85"/>
        <circle cx="150" cy="62" r="11" fill="#0e7490" opacity="0.9"/>
        <text x="146" y="67" font-size="12" font-weight="700" fill="#ffffff">6</text>
        <circle cx="65" cy="70" r="11" fill="#12a065" opacity="0.9"/>
        <text x="61" y="75" font-size="12" font-weight="700" fill="#ffffff">5</text>
        <circle cx="218" cy="108" r="11" fill="#175cd3" opacity="0.9"/>
        <text x="214" y="113" font-size="12" font-weight="700" fill="#ffffff">7</text>

        <circle cx="140" cy="112" r="3" fill="#e0632f"/>
        <circle cx="150" cy="116" r="3" fill="#7c4df5"/>
        <circle cx="160" cy="112" r="3" fill="#12a065"/>
        <circle cx="182" cy="118" r="11" fill="#e0632f" opacity="0.9"/>
        <text x="175" y="123" font-size="11" font-weight="700" fill="#ffffff">10</text>

        <text x="16" y="250" font-size="11" fill="#475467">Synthèse 5′→3′ du brin complémentaire par la polymérase</text>
      </g>

      <!-- Boucle de répétition du cycle -->
      <path d="M 860 388 C 860 440, 60 440, 60 388" stroke="#101828" stroke-width="2.2" fill="none" marker-end="url(#ue1-pcr-fleche)"/>
      <circle cx="430" cy="452" r="11" fill="#7c4df5" opacity="0.9"/>
      <text x="426" y="457" font-size="12" font-weight="700" fill="#ffffff">8</text>
      <text x="448" y="457" font-size="13" font-weight="600" fill="#101828">Répétition du cycle, environ 25 à 35 fois</text>

      <!-- Amplification exponentielle -->
      <text x="40" y="500" font-size="16" font-weight="600" fill="#101828">Amplification exponentielle du nombre de copies</text>

      <g transform="translate(80,540)">
        <line x1="0" y1="200" x2="700" y2="200" stroke="#101828" stroke-width="1.6"/>
        <line x1="0" y1="200" x2="0" y2="0" stroke="#101828" stroke-width="1.6"/>
        <text x="0" y="-16" font-size="12" fill="#475467">Nombre de copies (échelle qualitative)</text>

        <rect x="15" y="197" width="50" height="3" fill="#175cd3" opacity="0.25"/>
        <text x="40" y="191" font-size="11" font-weight="600" text-anchor="middle" fill="#101828">1</text>
        <text x="40" y="218" font-size="11" text-anchor="middle" fill="#475467">0</text>

        <rect x="115" y="194" width="50" height="6" fill="#175cd3" opacity="0.35"/>
        <text x="140" y="188" font-size="11" font-weight="600" text-anchor="middle" fill="#101828">2</text>
        <text x="140" y="218" font-size="11" text-anchor="middle" fill="#475467">1</text>

        <rect x="215" y="188" width="50" height="12" fill="#175cd3" opacity="0.45"/>
        <text x="240" y="182" font-size="11" font-weight="600" text-anchor="middle" fill="#101828">4</text>
        <text x="240" y="218" font-size="11" text-anchor="middle" fill="#475467">2</text>

        <rect x="315" y="176" width="50" height="24" fill="#175cd3" opacity="0.55"/>
        <text x="340" y="170" font-size="11" font-weight="600" text-anchor="middle" fill="#101828">8</text>
        <text x="340" y="218" font-size="11" text-anchor="middle" fill="#475467">3</text>

        <rect x="415" y="153" width="50" height="47" fill="#175cd3" opacity="0.68"/>
        <text x="440" y="147" font-size="11" font-weight="600" text-anchor="middle" fill="#101828">16</text>
        <text x="440" y="218" font-size="11" text-anchor="middle" fill="#475467">4</text>

        <rect x="515" y="105" width="50" height="95" fill="#175cd3" opacity="0.82"/>
        <text x="540" y="99" font-size="11" font-weight="600" text-anchor="middle" fill="#101828">32</text>
        <text x="540" y="218" font-size="11" text-anchor="middle" fill="#475467">5</text>

        <rect x="615" y="10" width="50" height="190" fill="#175cd3" opacity="1"/>
        <text x="640" y="4" font-size="11" font-weight="600" text-anchor="middle" fill="#101828">64</text>
        <text x="640" y="218" font-size="11" text-anchor="middle" fill="#475467">6</text>

        <text x="350" y="246" font-size="12" text-anchor="middle" fill="#475467">Nombre de cycles (n)</text>

        <path d="M 640 8 C 662 -22, 690 -34, 706 -48" stroke="#12a065" stroke-width="2" fill="none" marker-end="url(#ue1-pcr-fleche)"/>
        <circle cx="700" cy="-64" r="11" fill="#12a065" opacity="0.9"/>
        <text x="696" y="-59" font-size="12" font-weight="700" fill="#ffffff">9</text>
        <text x="620" y="-70" font-size="12" font-weight="600" fill="#12a065">≈ 2ⁿ copies</text>
      </g>

      <text x="40" y="790" font-size="12" fill="#8a94a8">Les trois étapes (dénaturation, hybridation, élongation) constituent un cycle, répété pour amplifier exponentiellement la séquence cible.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'ADN matrice double brin (bicaténaire) servant de modèle initial.' },
    { ref: '2', texte: 'Dénaturation thermique à 94–95 °C : rupture des liaisons hydrogène et séparation des deux brins.' },
    { ref: '3', texte: 'Hybridation (appariement) des amorces à 50–65 °C sur les brins matrices dénaturés.' },
    { ref: '4', texte: 'Amorces sens et antisens : courts oligonucléotides complémentaires qui délimitent la région à amplifier.' },
    { ref: '5', texte: 'Élongation à 72 °C : la polymérase synthétise le brin complémentaire à partir de l’extrémité 3′ de l’amorce.' },
    { ref: '6', texte: 'ADN polymérase thermostable (Taq polymérase), résistante à la dénaturation répétée à haute température.' },
    { ref: '7', texte: 'Brin néosynthétisé, complémentaire du brin matrice.' },
    { ref: '8', texte: 'Répétition du cycle dénaturation–hybridation–élongation, environ 25 à 35 fois.' },
    { ref: '9', texte: 'Amplification exponentielle : environ 2ⁿ copies de la séquence cible après n cycles.' },
    { ref: '10', texte: 'dNTP (désoxyribonucléotides triphosphates) : substrats incorporés par la polymérase pour allonger le nouveau brin.' },
  ],
};
