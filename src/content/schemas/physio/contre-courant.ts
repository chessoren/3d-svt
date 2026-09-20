import type { Schema } from '../../types';

export const schemaContreCourant: Schema = {
  id: 'physio-contre-courant',
  ue: 'physio',
  titre: 'La multiplication à contre-courant',
  description:
    'Mécanisme de multiplication à contre-courant dans l’anse de Henle : gradient osmotique cortico-médullaire, perméabilités différentielles des deux branches, et rôle de l’ADH sur le tube collecteur.',
  categorie: 'Physiologie rénale',
  viewBox: '0 0 920 820',
  ficheLiee: 'physio-fonction-tubulaire',
  motsCles: ['contre-courant', 'anse de Henle', 'gradient cortico-médullaire', 'ADH', 'osmolarité', 'concentration des urines'],
  svg: `
    <rect x="0" y="0" width="920" height="820" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="physio-contre-courant-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#475467"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Gradient cortico-médullaire et échanges le long de l’anse</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(140,80)">
        <!-- bandes de gradient -->
        <rect x="0" y="0" width="560" height="100" fill="#175cd3" opacity="0.05"/>
        <rect x="0" y="100" width="560" height="100" fill="#175cd3" opacity="0.10"/>
        <rect x="0" y="200" width="560" height="100" fill="#175cd3" opacity="0.15"/>
        <rect x="0" y="300" width="560" height="100" fill="#175cd3" opacity="0.20"/>
        <rect x="0" y="400" width="560" height="100" fill="#175cd3" opacity="0.28"/>

        <text x="-8" y="-14" font-size="12.5" font-weight="600" fill="#101828">Cortex</text>
        <text x="-8" y="512" font-size="12.5" font-weight="600" fill="#101828">Papille</text>
        <text x="-128" y="250" font-size="13" fill="#101828" transform="rotate(-90 -128 250)">Osmolarité interstitielle (mOsm/L)</text>

        <!-- valeurs d'osmolarité interstitielle -->
        <text x="-52" y="4" font-size="12" fill="#101828">300</text>
        <text x="-52" y="104" font-size="12" fill="#101828">400</text>
        <text x="-52" y="204" font-size="12" fill="#101828">600</text>
        <text x="-52" y="304" font-size="12" fill="#101828">900</text>
        <text x="-56" y="404" font-size="12" fill="#101828">1200</text>
        <circle cx="-70" cy="200" r="13" fill="#101828" opacity="0.12"/>
        <text x="-75" y="205" font-size="12" font-weight="700" fill="#101828">1</text>

        <!-- branche descendante -->
        <line x1="120" y1="0" x2="120" y2="470" stroke="#12a065" stroke-width="4" stroke-linecap="round"/>
        <circle cx="120" cy="150" r="13" fill="#12a065" opacity="0.2"/>
        <text x="116" y="155" font-size="12" font-weight="700" fill="#12a065">2</text>
        <text x="30" y="130" font-size="11" fill="#12a065">branche descendante</text>
        <text x="40" y="146" font-size="11" fill="#12a065">(perméable à l’eau)</text>
        <text x="128" y="8" font-size="11" fill="#12a065">300</text>
        <text x="128" y="108" font-size="11" fill="#12a065">400</text>
        <text x="128" y="208" font-size="11" fill="#12a065">600</text>
        <text x="128" y="308" font-size="11" fill="#12a065">900</text>
        <text x="128" y="408" font-size="11" fill="#12a065">1200</text>

        <!-- virage de l'anse -->
        <path d="M120,470 C120,496 180,496 180,470" fill="none" stroke="#e0632f" stroke-width="4" stroke-linecap="round"/>

        <!-- branche ascendante -->
        <line x1="180" y1="470" x2="180" y2="0" stroke="#e0632f" stroke-width="4" stroke-linecap="round"/>
        <circle cx="180" cy="330" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="176" y="335" font-size="12" font-weight="700" fill="#e0632f">3</text>
        <text x="192" y="335" font-size="11" fill="#e0632f">branche ascendante</text>
        <text x="192" y="349" font-size="11" fill="#e0632f">(imperméable à l’eau)</text>
        <text x="186" y="408" font-size="11" fill="#e0632f">1200</text>
        <text x="186" y="308" font-size="11" fill="#e0632f">700</text>
        <text x="186" y="208" font-size="11" fill="#e0632f">500</text>
        <text x="186" y="108" font-size="11" fill="#e0632f">300</text>
        <text x="186" y="8" font-size="11" fill="#e0632f">100</text>
        <circle cx="200" cy="-6" r="13" fill="#e0632f" opacity="0.22"/>
        <text x="195" y="-1" font-size="12" font-weight="700" fill="#e0632f">4</text>

        <!-- flèches d'échange -->
        <line x1="128" y1="60" x2="172" y2="60" stroke="#475467" stroke-width="1.6" marker-end="url(#physio-contre-courant-fleche)"/>
        <text x="132" y="52" font-size="10.5" fill="#475467">H₂O</text>
        <line x1="172" y1="260" x2="128" y2="260" stroke="#101828" stroke-width="2.2" marker-end="url(#physio-contre-courant-fleche)"/>
        <text x="132" y="252" font-size="10.5" fill="#101828">NaCl</text>

        <!-- tube collecteur -->
        <line x1="440" y1="0" x2="440" y2="470" stroke="#7c4df5" stroke-width="4" stroke-linecap="round"/>
        <circle cx="440" cy="230" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="436" y="235" font-size="12" font-weight="700" fill="#7c4df5">7</text>
        <text x="452" y="235" font-size="11" fill="#7c4df5">tube collecteur</text>
        <text x="452" y="249" font-size="11" fill="#7c4df5">(perméabilité réglée par l’ADH)</text>
        <text x="448" y="8" font-size="11" fill="#7c4df5">100</text>
        <text x="448" y="108" font-size="11" fill="#7c4df5">400</text>
        <text x="448" y="208" font-size="11" fill="#7c4df5">600</text>
        <text x="448" y="308" font-size="11" fill="#7c4df5">900</text>
        <text x="448" y="408" font-size="11" fill="#7c4df5">1200</text>
        <line x1="448" y1="60" x2="418" y2="60" stroke="#7c4df5" stroke-width="1.4" marker-end="url(#physio-contre-courant-fleche)"/>
        <text x="420" y="52" font-size="10" fill="#7c4df5">H₂O (si ADH)</text>

        <line x1="440" y1="470" x2="470" y2="490" stroke="#101828" stroke-width="2.6" marker-end="url(#physio-contre-courant-fleche)"/>
        <text x="476" y="496" font-size="11" fill="#101828">urine finale</text>
      </g>

      <text x="40" y="618" font-size="19" font-weight="600" fill="#101828">2 · Rôle de l’ADH et principe du système</text>
      <line x1="40" y1="630" x2="180" y2="630" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,650)" font-size="12" fill="#101828">
        <rect x="0" y="0" width="400" height="120" rx="12" fill="#f6f0ff" stroke="#e0d4fb"/>
        <circle cx="20" cy="22" r="10" fill="#101828" opacity="0.14"/>
        <text x="17" y="26" font-size="10.5" font-weight="700" fill="#101828">5</text>
        <text x="36" y="26">Osmolarité corticale ≈ 300 mOsm/L, isotonique au plasma.</text>
        <circle cx="20" cy="46" r="10" fill="#101828" opacity="0.28"/>
        <text x="17" y="50" font-size="10.5" font-weight="700" fill="#101828">6</text>
        <text x="36" y="50">Osmolarité à la pointe de la papille ≈ 1 200 mOsm/L, maximum de concentration.</text>
        <circle cx="20" cy="70" r="10" fill="#7c4df5" opacity="0.22"/>
        <text x="17" y="74" font-size="10.5" font-weight="700" fill="#7c4df5">8</text>
        <text x="36" y="74">Avec ADH : eau réabsorbée, urine concentrée jusqu’à ≈ 1 200 mOsm/L.</text>
        <circle cx="20" cy="94" r="10" fill="#7c4df5" opacity="0.14"/>
        <text x="17" y="98" font-size="10.5" font-weight="700" fill="#7c4df5">9</text>
        <text x="36" y="98">Sans ADH : tube collecteur imperméable à l’eau, urine diluée ≈ 50 à 100 mOsm/L.</text>

        <rect x="420" y="0" width="400" height="120" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="440" cy="22" r="10" fill="#12a065" opacity="0.2"/>
        <text x="437" y="26" font-size="10.5" font-weight="700" fill="#12a065">10</text>
        <text x="456" y="26">Vasa recta : vaisseaux en épingle à cheveux qui préservent le gradient médullaire.</text>
        <circle cx="440" cy="46" r="10" fill="#101828" opacity="0.16"/>
        <text x="437" y="50" font-size="10.5" font-weight="700" fill="#101828">11</text>
        <text x="456" y="50">Simple effet : à chaque niveau, un écart d’environ 200 mOsm/L existe entre les deux</text>
        <text x="456" y="66">branches ; sa répétition le long de l’anse multiplie le gradient (contre-courant).</text>
        <text x="440" y="96" font-size="11.5" fill="#475467">La branche ascendante large réabsorbe le NaCl activement</text>
        <text x="440" y="112" font-size="11.5" fill="#475467">via le cotransporteur Na⁺/K⁺/2Cl⁻.</text>
      </g>

      <text x="40" y="800" font-size="12" fill="#8a94a8">Valeurs usuelles du rein humain à concentration maximale des urines.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Gradient osmotique cortico-médullaire : de 300 mOsm/L dans le cortex à environ 1 200 mOsm/L à la pointe de la papille.' },
    { ref: '2', texte: 'Branche descendante fine : perméable à l’eau et imperméable aux solutés ; le liquide tubulaire s’équilibre avec l’interstitium.' },
    { ref: '3', texte: 'Branche ascendante : imperméable à l’eau, réabsorption de NaCl, active dans la portion large (cotransporteur Na⁺/K⁺/2Cl⁻).' },
    { ref: '4', texte: 'Sortie vers le tube contourné distal : liquide hypotonique, environ 100 mOsm/L.' },
    { ref: '5', texte: 'Osmolarité corticale ≈ 300 mOsm/L, isotonique au plasma.' },
    { ref: '6', texte: 'Osmolarité à la pointe de la papille ≈ 1 200 mOsm/L, maximum de concentration des urines.' },
    { ref: '7', texte: 'Tube collecteur : perméabilité à l’eau régulée par l’hormone antidiurétique (ADH).' },
    { ref: '8', texte: 'En présence d’ADH : réabsorption d’eau vers l’interstitium médullaire, urine concentrée jusqu’à ≈ 1 200 mOsm/L.' },
    { ref: '9', texte: 'En l’absence d’ADH : tube collecteur peu perméable à l’eau, urine diluée à environ 50 à 100 mOsm/L.' },
    { ref: '10', texte: 'Vasa recta : capillaires en épingle à cheveux qui irriguent la médullaire sans dissiper le gradient.' },
    { ref: '11', texte: 'Simple effet et multiplication à contre-courant : un faible gradient répété à chaque niveau de l’anse s’additionne le long de son trajet.' },
  ],
};
