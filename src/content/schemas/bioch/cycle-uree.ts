import type { Schema } from '../../types';

export const schemaCycleUree: Schema = {
  id: 'bioch-cycle-uree',
  ue: 'bioch',
  titre: 'Le cycle de l’urée',
  description:
    'Le cycle de l’urée, à cheval sur la matrice mitochondriale et le cytosol de l’hépatocyte, avec ses cinq enzymes et les navettes d’ornithine et de citrulline.',
  categorie: 'Biochimie métabolique',
  viewBox: '0 0 920 740',
  ficheLiee: 'bioch-metabolisme-azote',
  motsCles: ['cycle de l’urée', 'ornithine', 'citrulline', 'carbamoyl-phosphate', 'uréogenèse'],
  svg: `
    <rect x="0" y="0" width="920" height="740" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Le cycle de l’urée (hépatocyte)</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <defs>
        <marker id="bioch-uree-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
      </defs>

      <text x="40" y="68" font-size="13" font-weight="600" fill="#12a065">Matrice mitochondriale</text>
      <text x="320" y="68" font-size="13" font-weight="600" fill="#175cd3">Cytosol</text>
      <line x1="280" y1="80" x2="280" y2="530" stroke="#f0e0a8" stroke-width="10" opacity="0.6"/>
      <text x="280" y="545" font-size="10.5" fill="#b58a00" text-anchor="middle">membrane mitochondriale interne</text>

      <!-- CPS1 -->
      <rect x="40" y="130" width="200" height="46" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="140" y="150" font-size="11" font-weight="600" fill="#101828" text-anchor="middle">NH₃ + CO₂ + 2 ATP</text>
      <text x="140" y="166" font-size="10.5" fill="#475467" text-anchor="middle">→ Carbamoyl-phosphate</text>
      <circle cx="52" cy="134" r="13" fill="#12a065" opacity="0.2"/>
      <text x="48" y="139" font-size="12" font-weight="700" fill="#12a065">1</text>
      <text x="52" y="200" font-size="10" fill="#475467">CPS1</text>

      <path d="M 140 176 L 230 260" fill="none" stroke="#101828" stroke-width="1.8" marker-end="url(#bioch-uree-fleche)"/>

      <!-- Ornithine -->
      <rect x="40" y="280" width="200" height="46" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="140" y="308" font-size="14" font-weight="600" fill="#101828" text-anchor="middle">Ornithine</text>

      <!-- Ornithine -> Citrulline (OTC), traverse la membrane -->
      <line x1="240" y1="303" x2="360" y2="303" stroke="#101828" stroke-width="2" marker-end="url(#bioch-uree-fleche)"/>
      <circle cx="290" cy="286" r="13" fill="#e0632f" opacity="0.18"/>
      <text x="286" y="291" font-size="12" font-weight="700" fill="#e0632f">2</text>
      <text x="270" y="272" font-size="10.5" fill="#475467">OTC</text>
      <circle cx="280" cy="322" r="12" fill="#b58a00" opacity="0.22"/>
      <text x="276" y="327" font-size="11" font-weight="700" fill="#8a6a00">3</text>

      <!-- Citrulline -->
      <rect x="360" y="280" width="200" height="46" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="460" y="308" font-size="14" font-weight="600" fill="#101828" text-anchor="middle">Citrulline</text>

      <!-- Citrulline -> Argininosuccinate -->
      <line x1="560" y1="303" x2="640" y2="303" stroke="#101828" stroke-width="2" marker-end="url(#bioch-uree-fleche)"/>
      <circle cx="600" cy="286" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="596" y="291" font-size="12" font-weight="700" fill="#175cd3">4</text>
      <text x="565" y="272" font-size="10" fill="#475467">argininosuccinate synthétase</text>
      <text x="565" y="326" font-size="10" fill="#475467">+ Aspartate + ATP → AMP + PPi</text>

      <!-- Argininosuccinate -->
      <rect x="640" y="280" width="200" height="46" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="740" y="300" font-size="12" font-weight="600" fill="#101828" text-anchor="middle">Argininosuccinate</text>

      <!-- Argininosuccinate -> Arginine -->
      <line x1="740" y1="326" x2="740" y2="410" stroke="#101828" stroke-width="2" marker-end="url(#bioch-uree-fleche)"/>
      <circle cx="758" cy="368" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="754" y="373" font-size="12" font-weight="700" fill="#7c4df5">5</text>
      <text x="600" y="364" font-size="10" fill="#475467" text-anchor="middle">argininosuccinate lyase</text>

      <line x1="840" y1="368" x2="890" y2="368" stroke="#d4380d" stroke-width="1.8" marker-end="url(#bioch-uree-fleche)"/>
      <circle cx="870" cy="352" r="13" fill="#d4380d" opacity="0.18"/>
      <text x="866" y="357" font-size="12" font-weight="700" fill="#d4380d">8</text>
      <text x="800" y="392" font-size="10" fill="#d4380d" text-anchor="middle">Fumarate</text>
      <text x="800" y="405" font-size="9.5" fill="#8a94a8" text-anchor="middle">→ cycle de Krebs</text>

      <!-- Arginine -->
      <rect x="640" y="410" width="200" height="46" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="740" y="438" font-size="14" font-weight="600" fill="#101828" text-anchor="middle">Arginine</text>

      <!-- Arginine -> Ornithine (arginase), traverse la membrane -->
      <path d="M 640 433 L 140 433 L 140 326" fill="none" stroke="#101828" stroke-width="2" marker-end="url(#bioch-uree-fleche)"/>
      <circle cx="500" cy="416" r="13" fill="#101828" opacity="0.14"/>
      <text x="496" y="421" font-size="12" font-weight="700" fill="#101828">6</text>
      <text x="440" y="452" font-size="10.5" fill="#475467">arginase (+ H₂O)</text>
      <circle cx="280" cy="416" r="12" fill="#b58a00" opacity="0.22"/>
      <text x="276" y="421" font-size="11" font-weight="700" fill="#8a6a00">7</text>

      <line x1="340" y1="433" x2="340" y2="480" stroke="#d4380d" stroke-width="1.8" marker-end="url(#bioch-uree-fleche)"/>
      <circle cx="360" cy="465" r="13" fill="#d4380d" opacity="0.18"/>
      <text x="356" y="470" font-size="12" font-weight="700" fill="#d4380d">9</text>
      <text x="340" y="500" font-size="11.5" fill="#d4380d" text-anchor="middle">Urée</text>
      <text x="340" y="516" font-size="10" fill="#8a94a8" text-anchor="middle">→ excrétion rénale</text>

      <!-- Bilan -->
      <g transform="translate(40,570)">
        <rect x="0" y="0" width="840" height="110" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="24" cy="24" r="13" fill="#7c4df5" opacity="0.18"/>
        <text x="20" y="29" font-size="12" font-weight="700" fill="#7c4df5">10</text>
        <text x="44" y="29" font-size="13.5" font-weight="600" fill="#101828">Bilan énergétique de l’uréogenèse</text>
        <text x="44" y="52" font-size="11.5" fill="#475467">4 liaisons phosphate riches en énergie consommées par urée synthétisée :</text>
        <text x="44" y="70" font-size="11.5" fill="#475467">2 ATP → 2 ADP + 2 Pi (CPS1), et 1 ATP → AMP + PPi (argininosuccinate</text>
        <text x="44" y="88" font-size="11.5" fill="#475467">synthétase, équivalent à 2 liaisons car l’AMP doit être reconverti en ATP).</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Carbamoyl-phosphate synthétase I (CPS1) : condense NH₃, CO₂ et 2 ATP en carbamoyl-phosphate, dans la matrice mitochondriale.' },
    { ref: '2', texte: 'Ornithine transcarbamylase (OTC) : combine le carbamoyl-phosphate à l’ornithine pour former la citrulline.' },
    { ref: '3', texte: 'La citrulline est exportée de la matrice mitochondriale vers le cytosol par un transporteur membranaire.' },
    { ref: '4', texte: 'Argininosuccinate synthétase : condense la citrulline et l’aspartate en argininosuccinate, aux dépens d’un ATP.' },
    { ref: '5', texte: 'Argininosuccinate lyase : clive l’argininosuccinate en arginine et en fumarate.' },
    { ref: '6', texte: 'Arginase : hydrolyse l’arginine en urée et régénère l’ornithine.' },
    { ref: '7', texte: 'L’ornithine régénérée est réimportée dans la matrice mitochondriale pour amorcer un nouveau tour du cycle.' },
    { ref: '8', texte: 'Le fumarate libéré peut rejoindre le cycle de Krebs après conversion en malate puis en oxaloacétate.' },
    { ref: '9', texte: 'L’urée, produit final, diffuse dans le sang et est excrétée par le rein.' },
    { ref: '10', texte: 'Le cycle consomme l’équivalent de 4 liaisons phosphate riches en énergie par molécule d’urée formée.' },
  ],
};
