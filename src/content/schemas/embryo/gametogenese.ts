import type { Schema } from '../../types';

export const schemaGametogenese: Schema = {
  id: 'embryo-gametogenese',
  ue: 'embryo',
  titre: 'Spermatogenèse et ovogenèse',
  description:
    'Comparaison des étapes, des blocages méiotiques, de la chronologie et du rendement en gamètes de la spermatogenèse et de l’ovogenèse.',
  categorie: 'Gamétogenèse',
  viewBox: '0 0 920 700',
  ficheLiee: 'embryo-spermatogenese',
  motsCles: [
    'spermatogenèse',
    'ovogenèse',
    'méiose',
    'blocage méiotique',
    'ovocyte I',
    'ovocyte II',
    'globule polaire',
    'spermiogenèse',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="36" font-size="19" font-weight="600" fill="#101828">Spermatogenèse et ovogenèse : étude comparative</text>
      <line x1="40" y1="48" x2="200" y2="48" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <text x="230" y="76" font-size="15" font-weight="600" fill="#175cd3" text-anchor="middle">Spermatogenèse</text>
      <text x="690" y="76" font-size="15" font-weight="600" fill="#12a065" text-anchor="middle">Ovogenèse</text>
      <line x1="460" y1="66" x2="460" y2="640" stroke="#d0d7e2" stroke-width="1.4" stroke-dasharray="5 5"/>

      <!-- Etape 1 : cellules souches -->
      <circle cx="230" cy="110" r="20" fill="#cfe3ff" stroke="#175cd3" stroke-width="2"/>
      <text x="230" y="140" font-size="10.5" fill="#475467" text-anchor="middle">Spermatogonie (2n)</text>
      <circle cx="262" cy="94" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="258" y="99" font-size="12" font-weight="700" fill="#175cd3">1</text>

      <circle cx="690" cy="110" r="20" fill="#cfe3ff" stroke="#175cd3" stroke-width="2"/>
      <text x="690" y="140" font-size="10.5" fill="#475467" text-anchor="middle">Ovogonie (2n)</text>
      <circle cx="722" cy="94" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="718" y="99" font-size="11" font-weight="700" fill="#175cd3">5</text>
      <text x="738" y="99" font-size="9.5" fill="#8a94a8">(mitoses fœtales)</text>

      <line x1="230" y1="130" x2="230" y2="160" stroke="#98a2b3" stroke-width="1.6"/>
      <line x1="690" y1="130" x2="690" y2="165" stroke="#98a2b3" stroke-width="1.6"/>

      <!-- Etape 2 -->
      <circle cx="230" cy="190" r="20" fill="#cfe3ff" stroke="#175cd3" stroke-width="2"/>
      <text x="230" y="220" font-size="10" fill="#475467" text-anchor="middle">Spermatocyte I (2n, 4c)</text>

      <circle cx="690" cy="205" r="32" fill="#e8ecff" stroke="#7c4df5" stroke-width="2.2"/>
      <text x="690" y="200" font-size="9.5" fill="#475467" text-anchor="middle">Ovocyte I</text>
      <text x="690" y="212" font-size="9" fill="#475467" text-anchor="middle">bloqué prophase I</text>
      <circle cx="726" cy="184" r="13" fill="#7c4df5" opacity="0.18"/>
      <text x="722" y="189" font-size="12" font-weight="700" fill="#7c4df5">6</text>
      <text x="738" y="245" font-size="9.5" fill="#7c4df5">dictyé : vie fœtale → puberté</text>

      <line x1="230" y1="210" x2="230" y2="240" stroke="#98a2b3" stroke-width="1.6"/>
      <text x="248" y="230" font-size="9.5" fill="#475467">méiose I</text>
      <line x1="690" y1="237" x2="690" y2="260" stroke="#98a2b3" stroke-width="1.6"/>
      <text x="586" y="255" font-size="9.5" fill="#475467">ovulation : achèvement de la méiose I</text>

      <!-- Etape 3 -->
      <circle cx="190" cy="270" r="16" fill="#cfe3ff" stroke="#175cd3" stroke-width="2"/>
      <circle cx="270" cy="270" r="16" fill="#cfe3ff" stroke="#175cd3" stroke-width="2"/>
      <text x="230" y="300" font-size="10" fill="#475467" text-anchor="middle">2 Spermatocytes II (n, 2c)</text>
      <circle cx="296" cy="256" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="292" y="261" font-size="11" font-weight="700" fill="#175cd3">2</text>

      <circle cx="650" cy="300" r="26" fill="#e9f7f0" stroke="#12a065" stroke-width="2.2"/>
      <text x="650" y="304" font-size="9" fill="#475467" text-anchor="middle">Ovocyte II</text>
      <circle cx="716" cy="278" r="8" fill="#f6d9c4" stroke="#c98a2f"/>
      <circle cx="690" cy="262" r="13" fill="#c98a2f" opacity="0.2"/>
      <text x="686" y="267" font-size="11" font-weight="700" fill="#c98a2f">7</text>
      <text x="700" y="285" font-size="9" fill="#475467">1ᵉʳ globule polaire</text>
      <circle cx="612" cy="322" r="13" fill="#12a065" opacity="0.2"/>
      <text x="608" y="327" font-size="11" font-weight="700" fill="#12a065">8</text>
      <text x="610" y="345" font-size="9" fill="#12a065">bloqué en métaphase II</text>

      <line x1="190" y1="286" x2="190" y2="320" stroke="#98a2b3" stroke-width="1.6"/>
      <line x1="270" y1="286" x2="270" y2="320" stroke="#98a2b3" stroke-width="1.6"/>
      <text x="300" y="308" font-size="9.5" fill="#475467">méiose II</text>

      <!-- Etape 4 : spermatides et spermatozoïdes -->
      <circle cx="160" cy="340" r="11" fill="#cfe3ff" stroke="#175cd3" stroke-width="1.6"/>
      <circle cx="200" cy="340" r="11" fill="#cfe3ff" stroke="#175cd3" stroke-width="1.6"/>
      <circle cx="260" cy="340" r="11" fill="#cfe3ff" stroke="#175cd3" stroke-width="1.6"/>
      <circle cx="300" cy="340" r="11" fill="#cfe3ff" stroke="#175cd3" stroke-width="1.6"/>
      <text x="230" y="366" font-size="10" fill="#475467" text-anchor="middle">4 spermatides (n, 1c)</text>
      <line x1="160" y1="352" x2="150" y2="390" stroke="#98a2b3" stroke-width="1.2"/>
      <line x1="200" y1="352" x2="200" y2="390" stroke="#98a2b3" stroke-width="1.2"/>
      <line x1="260" y1="352" x2="260" y2="390" stroke="#98a2b3" stroke-width="1.2"/>
      <line x1="300" y1="352" x2="310" y2="390" stroke="#98a2b3" stroke-width="1.2"/>
      <text x="230" y="382" font-size="9.5" fill="#475467" text-anchor="middle">spermiogenèse</text>

      <ellipse cx="150" cy="404" rx="6" ry="9" fill="#101828"/>
      <line x1="150" y1="413" x2="150" y2="440" stroke="#101828" stroke-width="1.4"/>
      <ellipse cx="200" cy="404" rx="6" ry="9" fill="#101828"/>
      <line x1="200" y1="413" x2="200" y2="440" stroke="#101828" stroke-width="1.4"/>
      <ellipse cx="260" cy="404" rx="6" ry="9" fill="#101828"/>
      <line x1="260" y1="413" x2="260" y2="440" stroke="#101828" stroke-width="1.4"/>
      <ellipse cx="310" cy="404" rx="6" ry="9" fill="#101828"/>
      <line x1="310" y1="413" x2="310" y2="440" stroke="#101828" stroke-width="1.4"/>
      <text x="230" y="456" font-size="10" fill="#475467" text-anchor="middle">4 spermatozoïdes fonctionnels</text>
      <circle cx="340" cy="416" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="336" y="421" font-size="11" font-weight="700" fill="#175cd3">3</text>
      <text x="90" y="480" font-size="10" fill="#101828" text-anchor="middle">Processus continu dès la puberté (cycle ≈ 74 jours)</text>
      <circle cx="230" cy="490" r="13" fill="#101828" opacity="0.12"/>
      <text x="226" y="495" font-size="11" font-weight="700" fill="#101828">4</text>

      <!-- Ovule si fécondation -->
      <rect x="620" y="365" width="140" height="90" rx="10" fill="none" stroke="#c9d6ff" stroke-dasharray="4 3"/>
      <circle cx="670" cy="410" r="24" fill="#e9f7f0" stroke="#12a065" stroke-width="2"/>
      <text x="670" y="408" font-size="9" fill="#475467" text-anchor="middle">Ovule</text>
      <text x="670" y="418" font-size="8.5" fill="#475467" text-anchor="middle">(n, 1c)</text>
      <circle cx="716" cy="392" r="6" fill="#f6d9c4" stroke="#c98a2f"/>
      <text x="628" y="380" font-size="9" fill="#7c4df5">si fécondation :</text>
      <circle cx="734" cy="380" r="13" fill="#12a065" opacity="0.2"/>
      <text x="730" y="385" font-size="11" font-weight="700" fill="#12a065">9</text>
      <text x="628" y="450" font-size="9" fill="#475467">+ 2ᵉ globule polaire</text>

      <!-- Synthèse -->
      <g transform="translate(40,520)">
        <rect x="0" y="0" width="400" height="150" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">Rendement en gamètes</text>
        <circle cx="380" cy="20" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="375" y="25" font-size="11" font-weight="700" fill="#e0632f">10</text>
        <text x="16" y="52" font-size="11.5" fill="#475467">• Spermatogenèse : 4 spermatozoïdes fonctionnels</text>
        <text x="30" y="70" font-size="11.5" fill="#475467">et identiques par spermatogonie engagée.</text>
        <text x="16" y="92" font-size="11.5" fill="#475467">• Ovogenèse : 1 seul gamète fécondable par</text>
        <text x="30" y="110" font-size="11.5" fill="#475467">ovogonie ; les globules polaires dégénèrent.</text>
        <text x="16" y="132" font-size="11.5" fill="#475467">• Stock d’ovocytes fixé dès la vie fœtale, non renouvelé.</text>
      </g>

      <g transform="translate(480,520)">
        <rect x="0" y="0" width="400" height="150" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">Taille des cellules et divisions</text>
        <circle cx="380" cy="20" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="375" y="25" font-size="11" font-weight="700" fill="#e0632f">11</text>
        <text x="16" y="52" font-size="11.5" fill="#475467">• Spermatogenèse : divisions égales, cytoplasme</text>
        <text x="30" y="70" font-size="11.5" fill="#475467">partagé également ; petites cellules (≈ 5 µm).</text>
        <text x="16" y="92" font-size="11.5" fill="#475467">• Ovogenèse : divisions très inégales ; l’ovocyte</text>
        <text x="30" y="110" font-size="11.5" fill="#475467">garde presque tout le cytoplasme (≈ 120 µm),</text>
        <text x="30" y="128" font-size="11.5" fill="#475467">les globules polaires sont minuscules.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Spermatogonie (2n) : cellule souche germinale, se multiplie par mitoses dès la puberté.' },
    { ref: '2', texte: 'Spermatocytes II (n, 2c) : issus de la méiose I du spermatocyte I, sans aucun blocage méiotique.' },
    { ref: '3', texte: 'Spermatides puis spermatozoïdes : la méiose II donne 4 spermatides qui se différencient par spermiogenèse en 4 spermatozoïdes fonctionnels identiques.' },
    { ref: '4', texte: 'Chronologie : processus continu à partir de la puberté, un cycle spermatogénétique dure environ 74 jours.' },
    { ref: '5', texte: 'Ovogonie (2n) : cellule souche germinale, se multiplie par mitoses uniquement pendant la vie fœtale.' },
    { ref: '6', texte: 'Ovocyte I bloqué en prophase I (stade dictyé) : 1ᵉʳ blocage méiotique, de la vie fœtale jusqu’à la puberté.' },
    { ref: '7', texte: '1ᵉʳ globule polaire : issu de la division asymétrique achevant la méiose I au moment de l’ovulation.' },
    { ref: '8', texte: 'Ovocyte II bloqué en métaphase II : 2ᵉ blocage méiotique, maintenu jusqu’à la fécondation.' },
    { ref: '9', texte: 'Ovule (ovotide) et 2ᵉ globule polaire : la méiose II ne s’achève qu’en cas de fécondation.' },
    { ref: '10', texte: 'Rendement : 4 gamètes fonctionnels par spermatogonie contre 1 seul par ovogonie.' },
    { ref: '11', texte: 'Divisions égales et cellules petites en spermatogenèse, divisions très inégales et ovocyte volumineux en ovogenèse.' },
  ],
};
