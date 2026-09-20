import type { Schema } from '../../types';

export const schemaCodeGenetique: Schema = {
  id: 'ue1-code-genetique',
  ue: 'ue1',
  titre: 'Le code génétique standard',
  description:
    'Tableau complet des 64 codons et des acides aminés correspondants, codon initiateur AUG, codons stop et propriétés du code génétique.',
  categorie: 'Biologie moléculaire',
  viewBox: '0 0 920 850',
  ficheLiee: 'ue1-code-genetique',
  motsCles: ['code génétique', 'codon', 'AUG', 'codon stop', 'dégénérescence', 'cadre de lecture', 'acides aminés'],
  svg: `
    <rect x="0" y="0" width="920" height="850" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">Le code génétique standard</text>
      <line x1="40" y1="46" x2="230" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="66" font-size="12.5" fill="#475467">64 codons, lus par triplets non chevauchants, dans le sens 5′→3′</text>

      <text x="470" y="68" font-size="13" font-weight="700" fill="#101828">Base médiane (2ᵉ position)</text>
      <circle cx="440" cy="62" r="12" fill="#101828" opacity="0.85"/>
      <text x="435" y="67" font-size="12" font-weight="700" fill="#ffffff">2</text>

      <text x="762" y="66" font-size="11.5" fill="#475467">3ᵉ position : à l’intérieur de chaque case</text>
      <circle cx="735" cy="60" r="12" fill="#101828" opacity="0.85"/>
      <text x="730" y="65" font-size="12" font-weight="700" fill="#ffffff">3</text>

      <text x="30" y="360" font-size="13" font-weight="700" fill="#101828" transform="rotate(-90 30 360)">Base en 5′ (1ʳᵉ position)</text>
      <circle cx="95" cy="120" r="12" fill="#101828" opacity="0.85"/>
      <text x="90" y="125" font-size="12" font-weight="700" fill="#ffffff">1</text>

      <!-- Grille -->
      <rect x="140" y="110" width="720" height="480" rx="8" fill="none" stroke="#d0d5dd" stroke-width="1.5"/>
      <line x1="320" y1="110" x2="320" y2="590" stroke="#e4e9f5" stroke-width="1"/>
      <line x1="500" y1="110" x2="500" y2="590" stroke="#e4e9f5" stroke-width="1"/>
      <line x1="680" y1="110" x2="680" y2="590" stroke="#e4e9f5" stroke-width="1"/>
      <line x1="140" y1="230" x2="860" y2="230" stroke="#e4e9f5" stroke-width="1"/>
      <line x1="140" y1="350" x2="860" y2="350" stroke="#e4e9f5" stroke-width="1"/>
      <line x1="140" y1="470" x2="860" y2="470" stroke="#e4e9f5" stroke-width="1"/>

      <text x="222" y="98" font-size="15" font-weight="700" fill="#101828">U</text>
      <text x="402" y="98" font-size="15" font-weight="700" fill="#101828">C</text>
      <text x="582" y="98" font-size="15" font-weight="700" fill="#101828">A</text>
      <text x="762" y="98" font-size="15" font-weight="700" fill="#101828">G</text>
      <text x="118" y="176" font-size="15" font-weight="700" fill="#101828">U</text>
      <text x="118" y="296" font-size="15" font-weight="700" fill="#101828">C</text>
      <text x="118" y="416" font-size="15" font-weight="700" fill="#101828">A</text>
      <text x="118" y="536" font-size="15" font-weight="700" fill="#101828">G</text>

      <!-- Mise en évidence du codon initiateur AUG -->
      <rect x="148" y="440" width="130" height="20" rx="4" fill="#fef3c7"/>

      <!-- Ligne 1re base = U -->
      <text x="158" y="136" font-size="11.5"><tspan font-weight="700" fill="#101828">UUU</tspan><tspan fill="#175cd3"> Phe</tspan></text>
      <text x="158" y="162" font-size="11.5"><tspan font-weight="700" fill="#101828">UUC</tspan><tspan fill="#175cd3"> Phe</tspan></text>
      <text x="158" y="188" font-size="11.5"><tspan font-weight="700" fill="#101828">UUA</tspan><tspan fill="#175cd3"> Leu</tspan></text>
      <text x="158" y="214" font-size="11.5"><tspan font-weight="700" fill="#101828">UUG</tspan><tspan fill="#175cd3"> Leu</tspan></text>
      <text x="338" y="136" font-size="11.5"><tspan font-weight="700" fill="#101828">UCU</tspan><tspan fill="#12a065"> Ser</tspan></text>
      <text x="338" y="162" font-size="11.5"><tspan font-weight="700" fill="#101828">UCC</tspan><tspan fill="#12a065"> Ser</tspan></text>
      <text x="338" y="188" font-size="11.5"><tspan font-weight="700" fill="#101828">UCA</tspan><tspan fill="#12a065"> Ser</tspan></text>
      <text x="338" y="214" font-size="11.5"><tspan font-weight="700" fill="#101828">UCG</tspan><tspan fill="#12a065"> Ser</tspan></text>
      <text x="518" y="136" font-size="11.5"><tspan font-weight="700" fill="#101828">UAU</tspan><tspan fill="#12a065"> Tyr</tspan></text>
      <text x="518" y="162" font-size="11.5"><tspan font-weight="700" fill="#101828">UAC</tspan><tspan fill="#12a065"> Tyr</tspan></text>
      <text x="518" y="188" font-size="11.5"><tspan font-weight="700" fill="#101828">UAA</tspan><tspan font-weight="700" fill="#b42318"> STOP</tspan></text>
      <text x="518" y="214" font-size="11.5"><tspan font-weight="700" fill="#101828">UAG</tspan><tspan font-weight="700" fill="#b42318"> STOP</tspan></text>
      <text x="698" y="136" font-size="11.5"><tspan font-weight="700" fill="#101828">UGU</tspan><tspan fill="#12a065"> Cys</tspan></text>
      <text x="698" y="162" font-size="11.5"><tspan font-weight="700" fill="#101828">UGC</tspan><tspan fill="#12a065"> Cys</tspan></text>
      <text x="698" y="188" font-size="11.5"><tspan font-weight="700" fill="#101828">UGA</tspan><tspan font-weight="700" fill="#b42318"> STOP</tspan></text>
      <text x="698" y="214" font-size="11.5"><tspan font-weight="700" fill="#101828">UGG</tspan><tspan fill="#175cd3"> Trp</tspan></text>
      <circle cx="655" cy="188" r="11" fill="#b42318" opacity="0.9"/>
      <text x="650" y="192" font-size="11" font-weight="700" fill="#ffffff">5</text>

      <!-- Ligne 1re base = C -->
      <text x="158" y="256" font-size="11.5"><tspan font-weight="700" fill="#101828">CUU</tspan><tspan fill="#175cd3"> Leu</tspan></text>
      <text x="158" y="282" font-size="11.5"><tspan font-weight="700" fill="#101828">CUC</tspan><tspan fill="#175cd3"> Leu</tspan></text>
      <text x="158" y="308" font-size="11.5"><tspan font-weight="700" fill="#101828">CUA</tspan><tspan fill="#175cd3"> Leu</tspan></text>
      <text x="158" y="334" font-size="11.5"><tspan font-weight="700" fill="#101828">CUG</tspan><tspan fill="#175cd3"> Leu</tspan></text>
      <text x="338" y="256" font-size="11.5"><tspan font-weight="700" fill="#101828">CCU</tspan><tspan fill="#175cd3"> Pro</tspan></text>
      <text x="338" y="282" font-size="11.5"><tspan font-weight="700" fill="#101828">CCC</tspan><tspan fill="#175cd3"> Pro</tspan></text>
      <text x="338" y="308" font-size="11.5"><tspan font-weight="700" fill="#101828">CCA</tspan><tspan fill="#175cd3"> Pro</tspan></text>
      <text x="338" y="334" font-size="11.5"><tspan font-weight="700" fill="#101828">CCG</tspan><tspan fill="#175cd3"> Pro</tspan></text>
      <text x="518" y="256" font-size="11.5"><tspan font-weight="700" fill="#101828">CAU</tspan><tspan fill="#7c4df5"> His</tspan></text>
      <text x="518" y="282" font-size="11.5"><tspan font-weight="700" fill="#101828">CAC</tspan><tspan fill="#7c4df5"> His</tspan></text>
      <text x="518" y="308" font-size="11.5"><tspan font-weight="700" fill="#101828">CAA</tspan><tspan fill="#12a065"> Gln</tspan></text>
      <text x="518" y="334" font-size="11.5"><tspan font-weight="700" fill="#101828">CAG</tspan><tspan fill="#12a065"> Gln</tspan></text>
      <text x="698" y="256" font-size="11.5"><tspan font-weight="700" fill="#101828">CGU</tspan><tspan fill="#7c4df5"> Arg</tspan></text>
      <text x="698" y="282" font-size="11.5"><tspan font-weight="700" fill="#101828">CGC</tspan><tspan fill="#7c4df5"> Arg</tspan></text>
      <text x="698" y="308" font-size="11.5"><tspan font-weight="700" fill="#101828">CGA</tspan><tspan fill="#7c4df5"> Arg</tspan></text>
      <text x="698" y="334" font-size="11.5"><tspan font-weight="700" fill="#101828">CGG</tspan><tspan fill="#7c4df5"> Arg</tspan></text>

      <!-- Ligne 1re base = A -->
      <text x="158" y="376" font-size="11.5"><tspan font-weight="700" fill="#101828">AUU</tspan><tspan fill="#175cd3"> Ile</tspan></text>
      <text x="158" y="402" font-size="11.5"><tspan font-weight="700" fill="#101828">AUC</tspan><tspan fill="#175cd3"> Ile</tspan></text>
      <text x="158" y="428" font-size="11.5"><tspan font-weight="700" fill="#101828">AUA</tspan><tspan fill="#175cd3"> Ile</tspan></text>
      <text x="158" y="454" font-size="11.5"><tspan font-weight="700" fill="#101828">AUG</tspan><tspan fill="#175cd3"> Met</tspan><tspan font-weight="700" fill="#b45309"> (start)</tspan></text>
      <circle cx="290" cy="454" r="11" fill="#b45309" opacity="0.9"/>
      <text x="285" y="458" font-size="11" font-weight="700" fill="#ffffff">4</text>
      <text x="338" y="376" font-size="11.5"><tspan font-weight="700" fill="#101828">ACU</tspan><tspan fill="#12a065"> Thr</tspan></text>
      <text x="338" y="402" font-size="11.5"><tspan font-weight="700" fill="#101828">ACC</tspan><tspan fill="#12a065"> Thr</tspan></text>
      <text x="338" y="428" font-size="11.5"><tspan font-weight="700" fill="#101828">ACA</tspan><tspan fill="#12a065"> Thr</tspan></text>
      <text x="338" y="454" font-size="11.5"><tspan font-weight="700" fill="#101828">ACG</tspan><tspan fill="#12a065"> Thr</tspan></text>
      <text x="518" y="376" font-size="11.5"><tspan font-weight="700" fill="#101828">AAU</tspan><tspan fill="#12a065"> Asn</tspan></text>
      <text x="518" y="402" font-size="11.5"><tspan font-weight="700" fill="#101828">AAC</tspan><tspan fill="#12a065"> Asn</tspan></text>
      <text x="518" y="428" font-size="11.5"><tspan font-weight="700" fill="#101828">AAA</tspan><tspan fill="#7c4df5"> Lys</tspan></text>
      <text x="518" y="454" font-size="11.5"><tspan font-weight="700" fill="#101828">AAG</tspan><tspan fill="#7c4df5"> Lys</tspan></text>
      <text x="698" y="376" font-size="11.5"><tspan font-weight="700" fill="#101828">AGU</tspan><tspan fill="#12a065"> Ser</tspan></text>
      <text x="698" y="402" font-size="11.5"><tspan font-weight="700" fill="#101828">AGC</tspan><tspan fill="#12a065"> Ser</tspan></text>
      <text x="698" y="428" font-size="11.5"><tspan font-weight="700" fill="#101828">AGA</tspan><tspan fill="#7c4df5"> Arg</tspan></text>
      <text x="698" y="454" font-size="11.5"><tspan font-weight="700" fill="#101828">AGG</tspan><tspan fill="#7c4df5"> Arg</tspan></text>

      <!-- Ligne 1re base = G -->
      <text x="158" y="496" font-size="11.5"><tspan font-weight="700" fill="#101828">GUU</tspan><tspan fill="#175cd3"> Val</tspan></text>
      <text x="158" y="522" font-size="11.5"><tspan font-weight="700" fill="#101828">GUC</tspan><tspan fill="#175cd3"> Val</tspan></text>
      <text x="158" y="548" font-size="11.5"><tspan font-weight="700" fill="#101828">GUA</tspan><tspan fill="#175cd3"> Val</tspan></text>
      <text x="158" y="574" font-size="11.5"><tspan font-weight="700" fill="#101828">GUG</tspan><tspan fill="#175cd3"> Val</tspan></text>
      <text x="338" y="496" font-size="11.5"><tspan font-weight="700" fill="#101828">GCU</tspan><tspan fill="#175cd3"> Ala</tspan></text>
      <text x="338" y="522" font-size="11.5"><tspan font-weight="700" fill="#101828">GCC</tspan><tspan fill="#175cd3"> Ala</tspan></text>
      <text x="338" y="548" font-size="11.5"><tspan font-weight="700" fill="#101828">GCA</tspan><tspan fill="#175cd3"> Ala</tspan></text>
      <text x="338" y="574" font-size="11.5"><tspan font-weight="700" fill="#101828">GCG</tspan><tspan fill="#175cd3"> Ala</tspan></text>
      <text x="518" y="496" font-size="11.5"><tspan font-weight="700" fill="#101828">GAU</tspan><tspan fill="#d4380d"> Asp</tspan></text>
      <text x="518" y="522" font-size="11.5"><tspan font-weight="700" fill="#101828">GAC</tspan><tspan fill="#d4380d"> Asp</tspan></text>
      <text x="518" y="548" font-size="11.5"><tspan font-weight="700" fill="#101828">GAA</tspan><tspan fill="#d4380d"> Glu</tspan></text>
      <text x="518" y="574" font-size="11.5"><tspan font-weight="700" fill="#101828">GAG</tspan><tspan fill="#d4380d"> Glu</tspan></text>
      <text x="698" y="496" font-size="11.5"><tspan font-weight="700" fill="#101828">GGU</tspan><tspan fill="#175cd3"> Gly</tspan></text>
      <text x="698" y="522" font-size="11.5"><tspan font-weight="700" fill="#101828">GGC</tspan><tspan fill="#175cd3"> Gly</tspan></text>
      <text x="698" y="548" font-size="11.5"><tspan font-weight="700" fill="#101828">GGA</tspan><tspan fill="#175cd3"> Gly</tspan></text>
      <text x="698" y="574" font-size="11.5"><tspan font-weight="700" fill="#101828">GGG</tspan><tspan fill="#175cd3"> Gly</tspan></text>

      <!-- Propriétés du code génétique -->
      <rect x="40" y="610" width="840" height="200" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
      <text x="60" y="636" font-size="14" font-weight="600" fill="#101828">Propriétés du code génétique</text>
      <text x="60" y="662" font-size="12" fill="#475467">• Universel : partagé par la quasi-totalité des espèces (rares exceptions mitochondriales).</text>
      <text x="60" y="686" font-size="12" fill="#475467">• Dégénéré (redondant) : plusieurs codons peuvent coder le même acide aminé.</text>
      <text x="60" y="710" font-size="12" fill="#475467">• Non chevauchant : les triplets sont lus consécutivement, sans chevauchement.</text>
      <text x="470" y="662" font-size="12" fill="#475467">• Sans virgule : lecture continue dans un seul cadre de lecture.</text>
      <text x="470" y="686" font-size="12" fill="#475467">• Non ambigu : un codon ne spécifie jamais deux acides aminés différents.</text>
      <text x="470" y="710" font-size="12" fill="#475467">• 1 codon initiateur (AUG = Met) et 3 codons stop (UAA, UAG, UGA).</text>

      <circle cx="70" cy="790" r="12" fill="#175cd3" opacity="0.9"/>
      <text x="65" y="795" font-size="12" font-weight="700" fill="#ffffff">6</text>
      <text x="88" y="795" font-size="11.5" fill="#475467">Acide aminé apolaire</text>
      <circle cx="290" cy="790" r="12" fill="#12a065" opacity="0.9"/>
      <text x="285" y="795" font-size="12" font-weight="700" fill="#ffffff">7</text>
      <text x="308" y="795" font-size="11.5" fill="#475467">Polaire non chargé</text>
      <circle cx="500" cy="790" r="12" fill="#d4380d" opacity="0.9"/>
      <text x="495" y="795" font-size="12" font-weight="700" fill="#ffffff">8</text>
      <text x="518" y="795" font-size="11.5" fill="#475467">Acide (chargé -)</text>
      <circle cx="680" cy="790" r="12" fill="#7c4df5" opacity="0.9"/>
      <text x="675" y="795" font-size="12" font-weight="700" fill="#ffffff">9</text>
      <text x="698" y="795" font-size="11.5" fill="#475467">Basique (chargé +)</text>

      <text x="40" y="834" font-size="12" fill="#8a94a8">Exemple de lecture : première base en ligne, deuxième base en colonne, troisième base dans la case.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Base en 5′ (première position du codon) : détermine la ligne du tableau.' },
    { ref: '2', texte: 'Base médiane (deuxième position du codon) : détermine la colonne du tableau.' },
    { ref: '3', texte: 'Base en 3′ (troisième position) : varie au sein d’une case, souvent sans changer l’acide aminé.' },
    { ref: '4', texte: 'Codon initiateur AUG : code la méthionine et démarre la traduction.' },
    { ref: '5', texte: 'Codons stop (UAA, UAG, UGA) : ne codent aucun acide aminé, terminent la traduction.' },
    { ref: '6', texte: 'Acide aminé apolaire (hydrophobe).' },
    { ref: '7', texte: 'Acide aminé polaire non chargé.' },
    { ref: '8', texte: 'Acide aminé acide, chargé négativement.' },
    { ref: '9', texte: 'Acide aminé basique, chargé positivement.' },
  ],
};
