import type { Schema } from '../../types';

export const schemaGlycolyse: Schema = {
  id: 'bioch-glycolyse',
  ue: 'bioch',
  titre: 'La glycolyse',
  description:
    'Les dix réactions de la glycolyse, de la phase d’investissement à la phase de rendement, avec les enzymes clés et le bilan en ATP et en NADH.',
  categorie: 'Biochimie métabolique',
  viewBox: '0 0 920 900',
  ficheLiee: 'bioch-glycolyse',
  motsCles: ['glycolyse', 'phosphofructokinase', 'pyruvate kinase', 'ATP', 'NADH'],
  svg: `
    <rect x="0" y="0" width="920" height="900" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">La glycolyse : du glucose au pyruvate (cytosol)</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <defs>
        <marker id="bioch-glycolyse-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
      </defs>

      <!-- Bandeau de phase : investissement -->
      <rect x="700" y="82" width="10" height="270" rx="5" fill="#175cd3" opacity="0.5"/>
      <text x="722" y="96" font-size="13" font-weight="600" fill="#175cd3">Phase d’investissement</text>
      <text x="722" y="114" font-size="12" fill="#475467">consomme 2 ATP</text>

      <!-- Bandeau de phase : rendement -->
      <rect x="700" y="396" width="10" height="380" rx="5" fill="#12a065" opacity="0.5"/>
      <text x="722" y="410" font-size="13" font-weight="600" fill="#12a065">Phase de rendement</text>
      <text x="722" y="428" font-size="12" fill="#475467">produit 4 ATP</text>
      <text x="722" y="444" font-size="12" fill="#475467">et 2 NADH,H⁺</text>

      <!-- Glucose -->
      <rect x="310" y="90" width="300" height="34" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="460" y="112" font-size="14" font-weight="600" fill="#101828" text-anchor="middle">Glucose</text>

      <line x1="460" y1="124" x2="460" y2="156" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="140" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="496" y="145" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="520" y="136" font-size="12" fill="#101828">Hexokinase</text>
      <text x="520" y="152" font-size="11.5" fill="#d4380d">ATP → ADP</text>

      <!-- G6P -->
      <rect x="310" y="156" width="300" height="34" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="460" y="178" font-size="14" font-weight="600" fill="#101828" text-anchor="middle">Glucose-6-phosphate</text>

      <line x1="460" y1="190" x2="460" y2="222" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="206" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="496" y="211" font-size="12" font-weight="700" fill="#175cd3">2</text>
      <text x="520" y="210" font-size="12" fill="#101828">Phosphoglucose isomérase</text>

      <!-- F6P -->
      <rect x="310" y="222" width="300" height="34" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="460" y="244" font-size="14" font-weight="600" fill="#101828" text-anchor="middle">Fructose-6-phosphate</text>

      <line x1="460" y1="256" x2="460" y2="288" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="272" r="13" fill="#d4380d" opacity="0.18"/>
      <text x="496" y="277" font-size="12" font-weight="700" fill="#d4380d">3</text>
      <text x="520" y="268" font-size="12" fill="#101828">Phosphofructokinase-1</text>
      <text x="520" y="284" font-size="11.5" fill="#d4380d">ATP → ADP · enzyme clé</text>

      <!-- F1,6BP -->
      <rect x="310" y="288" width="300" height="34" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="460" y="310" font-size="13.5" font-weight="600" fill="#101828" text-anchor="middle">Fructose-1,6-bisphosphate</text>

      <line x1="460" y1="322" x2="460" y2="350" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="336" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="496" y="341" font-size="12" font-weight="700" fill="#175cd3">4</text>
      <text x="520" y="332" font-size="12" fill="#101828">Aldolase</text>
      <text x="520" y="348" font-size="11.5" fill="#475467">scission en 2 trioses</text>

      <!-- Scission en 2 trioses -->
      <rect x="200" y="352" width="220" height="34" rx="10" fill="#fdf6e3" stroke="#f0e0a8"/>
      <text x="310" y="374" font-size="12.5" font-weight="600" fill="#101828" text-anchor="middle">Dihydroxyacétone-P (DHAP)</text>
      <rect x="500" y="352" width="220" height="34" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="610" y="374" font-size="12.5" font-weight="600" fill="#101828" text-anchor="middle">Glycéraldéhyde-3-P (G3P)</text>

      <path d="M 310 386 C 310 414 460 414 460 386" fill="none" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="360" cy="412" r="13" fill="#12a065" opacity="0.18"/>
      <text x="356" y="417" font-size="12" font-weight="700" fill="#12a065">5</text>
      <text x="220" y="404" font-size="12" fill="#101828">Triose-phosphate isomérase</text>

      <line x1="610" y1="386" x2="500" y2="410" stroke="#101828" stroke-width="1.6" stroke-dasharray="4 3"/>

      <!-- 2 x G3P (point pivot) -->
      <rect x="300" y="418" width="320" height="34" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="460" y="440" font-size="13.5" font-weight="600" fill="#101828" text-anchor="middle">2 × Glycéraldéhyde-3-phosphate</text>

      <line x1="460" y1="452" x2="460" y2="484" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="468" r="13" fill="#12a065" opacity="0.18"/>
      <text x="496" y="473" font-size="12" font-weight="700" fill="#12a065">6</text>
      <text x="520" y="464" font-size="12" fill="#101828">G3P déshydrogénase</text>
      <text x="520" y="480" font-size="11.5" fill="#12a065">2 NAD⁺ → 2 NADH,H⁺</text>

      <!-- 2 x 1,3BPG -->
      <rect x="290" y="484" width="340" height="34" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="460" y="506" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">2 × 1,3-bisphosphoglycérate</text>

      <line x1="460" y1="518" x2="460" y2="550" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="534" r="13" fill="#12a065" opacity="0.18"/>
      <text x="496" y="539" font-size="12" font-weight="700" fill="#12a065">7</text>
      <text x="520" y="530" font-size="12" fill="#101828">Phosphoglycérate kinase</text>
      <text x="520" y="546" font-size="11.5" fill="#12a065">2 ADP → 2 ATP</text>

      <!-- 2 x 3PG -->
      <rect x="300" y="550" width="320" height="34" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="460" y="572" font-size="13.5" font-weight="600" fill="#101828" text-anchor="middle">2 × 3-phosphoglycérate</text>

      <line x1="460" y1="584" x2="460" y2="616" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="600" r="13" fill="#12a065" opacity="0.18"/>
      <text x="496" y="605" font-size="12" font-weight="700" fill="#12a065">8</text>
      <text x="520" y="602" font-size="12" fill="#101828">Phosphoglycérate mutase</text>

      <!-- 2 x 2PG -->
      <rect x="300" y="616" width="320" height="34" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="460" y="638" font-size="13.5" font-weight="600" fill="#101828" text-anchor="middle">2 × 2-phosphoglycérate</text>

      <line x1="460" y1="650" x2="460" y2="682" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="666" r="13" fill="#12a065" opacity="0.18"/>
      <text x="496" y="671" font-size="12" font-weight="700" fill="#12a065">9</text>
      <text x="520" y="662" font-size="12" fill="#101828">Énolase</text>
      <text x="520" y="678" font-size="11.5" fill="#475467">déshydratation</text>

      <!-- 2 x PEP -->
      <rect x="280" y="682" width="360" height="34" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="460" y="704" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">2 × Phosphoénolpyruvate (PEP)</text>

      <line x1="460" y1="716" x2="460" y2="748" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glycolyse-fleche)"/>
      <circle cx="500" cy="732" r="13" fill="#d4380d" opacity="0.18"/>
      <text x="495" y="737" font-size="11.5" font-weight="700" fill="#d4380d">10</text>
      <text x="520" y="728" font-size="12" fill="#101828">Pyruvate kinase</text>
      <text x="520" y="744" font-size="11.5" fill="#12a065">2 ADP → 2 ATP</text>

      <!-- 2 x pyruvate -->
      <rect x="330" y="748" width="260" height="34" rx="10" fill="#fdeeee" stroke="#f3c6c6"/>
      <text x="460" y="770" font-size="14" font-weight="600" fill="#101828" text-anchor="middle">2 × Pyruvate</text>

      <!-- Bilan -->
      <g transform="translate(40,800)">
        <rect x="0" y="0" width="840" height="72" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="24" cy="24" r="13" fill="#7c4df5" opacity="0.18"/>
        <text x="20" y="29" font-size="12" font-weight="700" fill="#7c4df5">11</text>
        <text x="44" y="29" font-size="13.5" font-weight="600" fill="#101828">Bilan net par molécule de glucose : 2 ATP, 2 NADH,H⁺ et 2 pyruvate</text>
        <circle cx="24" cy="52" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="20" y="57" font-size="12" font-weight="700" fill="#e0632f">12</text>
        <text x="44" y="57" font-size="12" fill="#475467">4 ATP produits (étapes 7 et 9) − 2 ATP consommés (étapes 1 et 3) = 2 ATP nets</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Hexokinase : phosphoryle le glucose en glucose-6-phosphate, consomme 1 ATP.' },
    { ref: '2', texte: 'Phosphoglucose isomérase : isomérise le glucose-6-phosphate en fructose-6-phosphate.' },
    { ref: '3', texte: 'Phosphofructokinase-1 : phosphoryle le fructose-6-phosphate, consomme 1 ATP ; enzyme régulatrice clé de la voie.' },
    { ref: '4', texte: 'Aldolase : clive le fructose-1,6-bisphosphate en DHAP et G3P.' },
    { ref: '5', texte: 'Triose-phosphate isomérase : convertit le DHAP en G3P, seul triose qui poursuit la voie.' },
    { ref: '6', texte: 'Glycéraldéhyde-3-phosphate déshydrogénase : oxyde le G3P et réduit 2 NAD⁺ en 2 NADH,H⁺.' },
    { ref: '7', texte: 'Phosphoglycérate kinase : première phosphorylation au niveau du substrat, produit 2 ATP.' },
    { ref: '8', texte: 'Phosphoglycérate mutase : déplace le phosphate de la position 3 à la position 2.' },
    { ref: '9', texte: 'Énolase : déshydrate le 2-phosphoglycérate en phosphoénolpyruvate.' },
    { ref: '10', texte: 'Pyruvate kinase : seconde phosphorylation au niveau du substrat, produit 2 ATP ; étape irréversible.' },
    { ref: '11', texte: 'Bilan global de la glycolyse pour une molécule de glucose transformée en 2 pyruvates.' },
    { ref: '12', texte: 'Le gain net de 2 ATP provient de la différence entre les 2 ATP investis et les 4 ATP produits en phase de rendement.' },
  ],
};
