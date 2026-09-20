import type { Schema } from '../../types';

export const schemaCycleKrebs: Schema = {
  id: 'bioch-cycle-krebs',
  ue: 'bioch',
  titre: 'Le cycle de Krebs',
  description:
    'Le cycle de Krebs (cycle des acides tricarboxyliques) dans la matrice mitochondriale : intermédiaires, enzymes, décarboxylations et bilan en coenzymes réduits.',
  categorie: 'Biochimie métabolique',
  viewBox: '0 0 920 760',
  ficheLiee: 'bioch-cycle-krebs',
  motsCles: ['cycle de Krebs', 'acide tricarboxylique', 'décarboxylation', 'NADH', 'FADH2', 'GTP'],
  svg: `
    <rect x="0" y="0" width="920" height="760" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Le cycle de Krebs (matrice mitochondriale)</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <defs>
        <marker id="bioch-krebs-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
      </defs>

      <!-- Entrée acétyl-CoA -->
      <line x1="155" y1="60" x2="155" y2="106" stroke="#e0632f" stroke-width="2.2" marker-end="url(#bioch-krebs-fleche)"/>
      <text x="164" y="76" font-size="12.5" font-weight="600" fill="#e0632f">Acétyl-CoA</text>
      <text x="164" y="92" font-size="11.5" fill="#475467">(+ H₂O, − CoA-SH)</text>
      <circle cx="155" cy="72" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="151" y="77" font-size="12" font-weight="700" fill="#e0632f">9</text>

      <!-- Ligne du haut -->
      <rect x="70" y="110" width="170" height="40" rx="10" fill="#f2f6ff" stroke="#c9d6ff"/>
      <text x="155" y="135" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">Oxaloacétate</text>

      <line x1="240" y1="130" x2="270" y2="130" stroke="#101828" stroke-width="2" marker-end="url(#bioch-krebs-fleche)"/>
      <rect x="270" y="110" width="170" height="40" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="355" y="135" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">Citrate</text>
      <circle cx="255" cy="98" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="251" y="103" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="255" y="166" font-size="11" fill="#475467" text-anchor="middle">Citrate synthase</text>

      <line x1="440" y1="130" x2="470" y2="130" stroke="#101828" stroke-width="2" marker-end="url(#bioch-krebs-fleche)"/>
      <rect x="470" y="110" width="170" height="40" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
      <text x="555" y="135" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">Isocitrate</text>
      <circle cx="455" cy="98" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="451" y="103" font-size="12" font-weight="700" fill="#175cd3">2</text>
      <text x="455" y="166" font-size="11" fill="#475467" text-anchor="middle">Aconitase</text>

      <line x1="640" y1="130" x2="670" y2="130" stroke="#101828" stroke-width="2" marker-end="url(#bioch-krebs-fleche)"/>
      <rect x="670" y="110" width="170" height="40" rx="10" fill="#fdf6e3" stroke="#f0e0a8"/>
      <text x="755" y="135" font-size="12.5" font-weight="600" fill="#101828" text-anchor="middle">α-cétoglutarate</text>
      <circle cx="655" cy="98" r="13" fill="#12a065" opacity="0.2"/>
      <text x="651" y="103" font-size="12" font-weight="700" fill="#12a065">3</text>
      <text x="655" y="166" font-size="10.5" fill="#475467" text-anchor="middle">Isocitrate DH</text>
      <text x="655" y="180" font-size="10.5" fill="#12a065" text-anchor="middle">− CO₂ · NADH</text>

      <!-- Connexion droite haut vers bas -->
      <line x1="800" y1="150" x2="800" y2="330" stroke="#101828" stroke-width="2" marker-end="url(#bioch-krebs-fleche)"/>
      <circle cx="800" cy="210" r="13" fill="#12a065" opacity="0.2"/>
      <text x="796" y="215" font-size="12" font-weight="700" fill="#12a065">4</text>
      <text x="814" y="206" font-size="10.5" fill="#475467">α-cétoglutarate DH</text>
      <text x="814" y="222" font-size="10.5" fill="#12a065">− CO₂ · NADH</text>

      <!-- Ligne du bas -->
      <rect x="670" y="330" width="170" height="40" rx="10" fill="#fdf6e3" stroke="#f0e0a8"/>
      <text x="755" y="355" font-size="12.5" font-weight="600" fill="#101828" text-anchor="middle">Succinyl-CoA</text>

      <line x1="670" y1="350" x2="640" y2="350" stroke="#101828" stroke-width="2" marker-end="url(#bioch-krebs-fleche)"/>
      <rect x="470" y="330" width="170" height="40" rx="10" fill="#f2f0ff" stroke="#dcd6fb"/>
      <text x="555" y="355" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">Succinate</text>
      <circle cx="655" cy="318" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="651" y="323" font-size="12" font-weight="700" fill="#7c4df5">5</text>
      <text x="655" y="386" font-size="10.5" fill="#475467" text-anchor="middle">Succinyl-CoA synthétase</text>
      <text x="655" y="400" font-size="10.5" fill="#7c4df5" text-anchor="middle">GDP → GTP (≈ATP)</text>

      <line x1="470" y1="350" x2="440" y2="350" stroke="#101828" stroke-width="2" marker-end="url(#bioch-krebs-fleche)"/>
      <rect x="270" y="330" width="170" height="40" rx="10" fill="#f2f0ff" stroke="#dcd6fb"/>
      <text x="355" y="355" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">Fumarate</text>
      <circle cx="455" cy="318" r="13" fill="#d4380d" opacity="0.18"/>
      <text x="451" y="323" font-size="12" font-weight="700" fill="#d4380d">6</text>
      <text x="455" y="386" font-size="10.5" fill="#475467" text-anchor="middle">Succinate déshydrogénase</text>
      <text x="455" y="400" font-size="10.5" fill="#d4380d" text-anchor="middle">FAD → FADH₂ (complexe II)</text>

      <line x1="270" y1="350" x2="240" y2="350" stroke="#101828" stroke-width="2" marker-end="url(#bioch-krebs-fleche)"/>
      <rect x="70" y="330" width="170" height="40" rx="10" fill="#f2f0ff" stroke="#dcd6fb"/>
      <text x="155" y="355" font-size="13" font-weight="600" fill="#101828" text-anchor="middle">Malate</text>
      <circle cx="255" cy="318" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="251" y="323" font-size="12" font-weight="700" fill="#175cd3">7</text>
      <text x="255" y="386" font-size="11" fill="#475467" text-anchor="middle">Fumarase (+ H₂O)</text>

      <!-- Connexion gauche bas vers haut : fermeture du cycle -->
      <line x1="110" y1="330" x2="110" y2="150" stroke="#101828" stroke-width="2" marker-end="url(#bioch-krebs-fleche)"/>
      <circle cx="110" cy="270" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="106" y="275" font-size="12" font-weight="700" fill="#175cd3">8</text>
      <text x="16" y="266" font-size="10.5" fill="#475467">Malate</text>
      <text x="16" y="282" font-size="10.5" fill="#475467">déshydrogénase</text>
      <text x="16" y="298" font-size="10.5" fill="#12a065">NADH</text>

      <!-- Bilan central -->
      <g transform="translate(280,190)">
        <rect x="0" y="0" width="360" height="120" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="24" cy="24" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="20" y="29" font-size="12" font-weight="700" fill="#e0632f">10</text>
        <text x="44" y="29" font-size="13" font-weight="600" fill="#101828">2 CO₂ libérés par tour</text>
        <text x="44" y="47" font-size="11.5" fill="#475467">(décarboxylations aux étapes 3 et 4)</text>
        <circle cx="24" cy="72" r="13" fill="#12a065" opacity="0.2"/>
        <text x="20" y="77" font-size="12" font-weight="700" fill="#12a065">11</text>
        <text x="44" y="72" font-size="13" font-weight="600" fill="#101828">Bilan par tour :</text>
        <text x="44" y="90" font-size="11.5" fill="#475467">3 NADH,H⁺ + 1 FADH₂ + 1 GTP</text>
        <text x="44" y="106" font-size="11" fill="#8a94a8">L’oxaloacétate est régénéré : le cycle recommence.</text>
      </g>

      <text x="40" y="700" font-size="12" fill="#8a94a8">Les coenzymes réduits (NADH, FADH₂) alimentent ensuite la chaîne respiratoire pour produire de l’ATP.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Citrate synthase : condensation de l’acétyl-CoA et de l’oxaloacétate en citrate.' },
    { ref: '2', texte: 'Aconitase : isomérisation du citrate en isocitrate.' },
    { ref: '3', texte: 'Isocitrate déshydrogénase : première décarboxylation oxydative, production de NADH.' },
    { ref: '4', texte: 'α-cétoglutarate déshydrogénase : seconde décarboxylation oxydative, production de NADH.' },
    { ref: '5', texte: 'Succinyl-CoA synthétase : phosphorylation au niveau du substrat, production de GTP (équivalent ATP).' },
    { ref: '6', texte: 'Succinate déshydrogénase : oxydation liée à la membrane interne, réduit le FAD en FADH₂ (complexe II).' },
    { ref: '7', texte: 'Fumarase : hydratation du fumarate en malate.' },
    { ref: '8', texte: 'Malate déshydrogénase : oxydation du malate en oxaloacétate, production de NADH.' },
    { ref: '9', texte: 'L’acétyl-CoA, issu de la glycolyse ou de la β-oxydation, entre dans le cycle à chaque tour.' },
    { ref: '10', texte: 'Deux molécules de CO₂ sont libérées par tour de cycle, au niveau des étapes 3 et 4.' },
    { ref: '11', texte: 'Bilan des coenzymes réduits et de l’ATP produits pour un tour complet du cycle.' },
  ],
};
