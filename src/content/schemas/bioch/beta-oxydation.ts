import type { Schema } from '../../types';

export const schemaBetaOxydation: Schema = {
  id: 'bioch-beta-oxydation',
  ue: 'bioch',
  titre: 'La β-oxydation des acides gras',
  description:
    'Activation cytosolique de l’acide gras, navette de la carnitine à travers les membranes mitochondriales, puis hélice de Lynen en quatre réactions produisant de l’acétyl-CoA.',
  categorie: 'Biochimie métabolique',
  viewBox: '0 0 920 920',
  ficheLiee: 'bioch-metabolisme-lipidique',
  motsCles: ['β-oxydation', 'carnitine', 'hélice de Lynen', 'acétyl-CoA', 'acyl-CoA déshydrogénase'],
  svg: `
    <rect x="0" y="0" width="920" height="920" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">La β-oxydation des acides gras</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <defs>
        <marker id="bioch-betaox-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
      </defs>

      <!-- 1. Activation -->
      <text x="40" y="76" font-size="14.5" font-weight="600" fill="#101828">1 · Activation de l’acide gras (cytosol)</text>
      <rect x="40" y="88" width="180" height="40" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="130" y="113" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">Acide gras</text>
      <line x1="220" y1="108" x2="290" y2="108" stroke="#101828" stroke-width="2" marker-end="url(#bioch-betaox-fleche)"/>
      <circle cx="255" cy="90" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="251" y="95" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="228" y="134" font-size="10.5" fill="#475467">acyl-CoA synthétase</text>
      <text x="228" y="148" font-size="10.5" fill="#d4380d">ATP → AMP + PPi</text>
      <rect x="290" y="88" width="170" height="40" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="375" y="113" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">Acyl-CoA</text>

      <!-- 2. Navette de la carnitine -->
      <text x="40" y="188" font-size="14.5" font-weight="600" fill="#101828">2 · Navette de la carnitine</text>

      <rect x="40" y="204" width="840" height="30" fill="#ffffff"/>
      <text x="48" y="224" font-size="11.5" fill="#475467">Cytosol</text>
      <rect x="40" y="234" width="840" height="14" fill="#fdf6e3" stroke="#f0e0a8"/>
      <text x="890" y="245" font-size="10.5" fill="#b58a00" text-anchor="end">membrane externe</text>
      <rect x="40" y="248" width="840" height="30" fill="#ffffff"/>
      <text x="48" y="268" font-size="11.5" fill="#475467">Espace intermembranaire</text>
      <rect x="40" y="278" width="840" height="14" fill="#fdf6e3" stroke="#f0e0a8"/>
      <text x="890" y="289" font-size="10.5" fill="#b58a00" text-anchor="end">membrane interne</text>
      <rect x="40" y="292" width="840" height="30" fill="#ffffff"/>
      <text x="48" y="312" font-size="11.5" fill="#475467">Matrice mitochondriale</text>

      <rect x="330" y="204" width="240" height="30" rx="8" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="450" y="224" font-size="12" font-weight="600" fill="#101828" text-anchor="middle">Acyl-CoA + carnitine</text>

      <line x1="450" y1="234" x2="450" y2="248" stroke="#101828" stroke-width="2" marker-end="url(#bioch-betaox-fleche)"/>
      <circle cx="480" cy="241" r="13" fill="#e0632f" opacity="0.18"/>
      <text x="476" y="246" font-size="12" font-weight="700" fill="#e0632f">2</text>
      <text x="500" y="245" font-size="10.5" fill="#475467">CPT1</text>

      <text x="400" y="266" font-size="12" font-weight="600" fill="#101828" text-anchor="middle">Acylcarnitine</text>

      <line x1="450" y1="278" x2="450" y2="292" stroke="#101828" stroke-width="2" marker-end="url(#bioch-betaox-fleche)"/>
      <circle cx="480" cy="285" r="13" fill="#12a065" opacity="0.2"/>
      <text x="476" y="290" font-size="12" font-weight="700" fill="#12a065">3</text>
      <text x="500" y="288" font-size="10.5" fill="#475467">translocase</text>

      <line x1="520" y1="292" x2="520" y2="248" stroke="#98a2b3" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#bioch-betaox-fleche)"/>
      <text x="560" y="272" font-size="10" fill="#8a94a8">carnitine recyclée</text>

      <rect x="330" y="292" width="240" height="30" rx="8" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="450" y="312" font-size="12" font-weight="600" fill="#101828" text-anchor="middle">Acyl-CoA (+ carnitine libérée)</text>
      <circle cx="360" cy="296" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="356" y="301" font-size="12" font-weight="700" fill="#7c4df5">4</text>
      <text x="330" y="340" font-size="10.5" fill="#475467">CPT2 régénère l’acyl-CoA côté matriciel</text>

      <!-- 3. Hélice de Lynen -->
      <text x="40" y="400" font-size="14.5" font-weight="600" fill="#101828">3 · Hélice de Lynen (matrice) : quatre réactions par tour</text>

      <rect x="100" y="440" width="230" height="42" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="215" y="466" font-size="12.5" font-weight="600" fill="#101828" text-anchor="middle">Acyl-CoA (Cn)</text>

      <line x1="330" y1="461" x2="590" y2="461" stroke="#101828" stroke-width="2" marker-end="url(#bioch-betaox-fleche)"/>
      <circle cx="460" cy="443" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="456" y="448" font-size="12" font-weight="700" fill="#175cd3">5</text>
      <text x="400" y="437" font-size="10.5" fill="#475467">acyl-CoA déshydrogénase</text>
      <text x="400" y="480" font-size="10.5" fill="#12a065">FAD → FADH₂</text>

      <rect x="590" y="440" width="230" height="42" rx="10" fill="#fdf6e3" stroke="#f0e0a8"/>
      <text x="705" y="466" font-size="11.5" font-weight="600" fill="#101828" text-anchor="middle">trans-Δ²-énoyl-CoA</text>

      <line x1="810" y1="482" x2="810" y2="660" stroke="#101828" stroke-width="2" marker-end="url(#bioch-betaox-fleche)"/>
      <circle cx="810" cy="560" r="13" fill="#e0632f" opacity="0.18"/>
      <text x="806" y="565" font-size="12" font-weight="700" fill="#e0632f">6</text>
      <text x="824" y="556" font-size="10.5" fill="#475467">énoyl-CoA hydratase</text>
      <text x="824" y="572" font-size="10.5" fill="#475467">+ H₂O</text>

      <rect x="590" y="660" width="230" height="42" rx="10" fill="#f2f0ff" stroke="#dcd6fb"/>
      <text x="705" y="686" font-size="11" font-weight="600" fill="#101828" text-anchor="middle">L-3-hydroxyacyl-CoA</text>

      <line x1="590" y1="681" x2="330" y2="681" stroke="#101828" stroke-width="2" marker-end="url(#bioch-betaox-fleche)"/>
      <circle cx="460" cy="663" r="13" fill="#12a065" opacity="0.2"/>
      <text x="456" y="668" font-size="12" font-weight="700" fill="#12a065">7</text>
      <text x="400" y="705" font-size="10.5" fill="#475467">3-hydroxyacyl-CoA DH</text>
      <text x="400" y="720" font-size="10.5" fill="#12a065">NAD⁺ → NADH</text>

      <rect x="100" y="660" width="230" height="42" rx="10" fill="#fdeeee" stroke="#f3c6c6"/>
      <text x="215" y="686" font-size="11.5" font-weight="600" fill="#101828" text-anchor="middle">3-cétoacyl-CoA</text>

      <line x1="120" y1="660" x2="120" y2="482" stroke="#101828" stroke-width="2" marker-end="url(#bioch-betaox-fleche)"/>
      <circle cx="120" cy="560" r="13" fill="#d4380d" opacity="0.18"/>
      <text x="116" y="565" font-size="12" font-weight="700" fill="#d4380d">8</text>
      <text x="20" y="556" font-size="10.5" fill="#475467">thiolase</text>
      <text x="20" y="572" font-size="10.5" fill="#d4380d">+ CoA-SH</text>

      <circle cx="40" cy="620" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="36" y="625" font-size="12" font-weight="700" fill="#7c4df5">9</text>
      <text x="20" y="600" font-size="10.5" fill="#475467" text-anchor="end" transform="translate(90,0)">acétyl-CoA</text>
      <text x="20" y="640" font-size="10" fill="#475467" text-anchor="end" transform="translate(90,0)">libéré</text>

      <g transform="translate(360,540)">
        <rect x="0" y="0" width="200" height="100" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="20" cy="22" r="13" fill="#101828" opacity="0.12"/>
        <text x="16" y="27" font-size="11.5" font-weight="700" fill="#101828">10</text>
        <text x="40" y="27" font-size="11.5" font-weight="600" fill="#101828">À chaque tour :</text>
        <text x="16" y="48" font-size="10.5" fill="#475467">− 2 carbones (acyl-CoA raccourci)</text>
        <text x="16" y="65" font-size="10.5" fill="#475467">+ 1 FADH₂, + 1 NADH</text>
        <text x="16" y="82" font-size="10.5" fill="#475467">+ 1 acétyl-CoA (→ cycle de Krebs)</text>
      </g>

      <text x="40" y="872" font-size="12" fill="#8a94a8">L’acyl-CoA raccourci de 2 carbones réintègre l’hélice : le cycle se répète jusqu’à dégradation complète de la chaîne.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Acyl-CoA synthétase (thiokinase) : active l’acide gras en acyl-CoA, aux dépens d’un ATP transformé en AMP + PPi.' },
    { ref: '2', texte: 'CPT1 (carnitine palmitoyltransférase 1) : fixe l’acide gras activé sur la carnitine, au niveau de la membrane externe.' },
    { ref: '3', texte: 'Translocase : fait entrer l’acylcarnitine dans la matrice en échange d’une carnitine libre.' },
    { ref: '4', texte: 'CPT2 (carnitine palmitoyltransférase 2) : régénère l’acyl-CoA côté matriciel et libère la carnitine, recyclée.' },
    { ref: '5', texte: 'Réaction 1 : acyl-CoA déshydrogénase, oxydation avec formation d’une double liaison trans et réduction du FAD en FADH₂.' },
    { ref: '6', texte: 'Réaction 2 : énoyl-CoA hydratase, addition d’une molécule d’eau sur la double liaison.' },
    { ref: '7', texte: 'Réaction 3 : 3-hydroxyacyl-CoA déshydrogénase, oxydation de l’hydroxyle avec réduction du NAD⁺ en NADH,H⁺.' },
    { ref: '8', texte: 'Réaction 4 : thiolase, clivage thiolytique par le CoA-SH, libérant l’acétyl-CoA et un acyl-CoA raccourci de deux carbones.' },
    { ref: '9', texte: 'L’acétyl-CoA libéré à chaque tour entre dans le cycle de Krebs pour y être oxydé.' },
    { ref: '10', texte: 'Bilan d’un tour de l’hélice de Lynen : 1 FADH₂, 1 NADH et 1 acétyl-CoA, pour un acyl-CoA raccourci de deux carbones.' },
  ],
};
