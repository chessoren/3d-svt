import type { Schema } from '../../types';

export const schemaChaineRespiratoire: Schema = {
  id: 'bioch-chaine-respiratoire',
  ue: 'bioch',
  titre: 'La chaîne respiratoire mitochondriale',
  description:
    'Coupe de la membrane mitochondriale interne montrant les complexes I à IV, les transporteurs mobiles d’électrons, le gradient de protons et l’ATP synthase.',
  categorie: 'Biochimie métabolique',
  viewBox: '0 0 920 680',
  ficheLiee: 'bioch-chaine-respiratoire',
  motsCles: ['chaîne respiratoire', 'complexe I', 'ubiquinone', 'cytochrome c', 'ATP synthase', 'gradient de protons'],
  svg: `
    <rect x="0" y="0" width="920" height="680" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">La chaîne respiratoire : membrane mitochondriale interne</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <defs>
        <marker id="bioch-chresp-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
        <marker id="bioch-chresp-fleche-e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#f4b942"/>
        </marker>
        <marker id="bioch-chresp-fleche-h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#175cd3"/>
        </marker>
      </defs>

      <text x="60" y="78" font-size="13" font-weight="600" fill="#175cd3">Espace intermembranaire</text>
      <text x="60" y="94" font-size="16" fill="#175cd3">⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕ ⊕</text>
      <circle cx="800" cy="70" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="796" y="75" font-size="12" font-weight="700" fill="#175cd3">8</text>
      <text x="700" y="75" font-size="12" fill="#475467">gradient de H⁺</text>

      <!-- Membrane -->
      <rect x="40" y="110" width="840" height="70" fill="#fdf6e3" stroke="#f0e0a8"/>
      <text x="880" y="150" font-size="11" fill="#b58a00" text-anchor="end">membrane interne</text>

      <text x="60" y="555" font-size="13" font-weight="600" fill="#475467">Matrice mitochondriale</text>
      <text x="60" y="530" font-size="16" fill="#475467">⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖ ⊖</text>

      <!-- Complexe I -->
      <rect x="90" y="90" width="110" height="110" rx="12" fill="#eefaf3" stroke="#12a065" stroke-width="2"/>
      <text x="145" y="150" font-size="15" font-weight="700" fill="#101828" text-anchor="middle">I</text>
      <text x="145" y="216" font-size="11" fill="#475467" text-anchor="middle">NADH</text>
      <text x="145" y="230" font-size="11" fill="#475467" text-anchor="middle">déshydrogénase</text>
      <circle cx="112" cy="94" r="13" fill="#12a065" opacity="0.2"/>
      <text x="108" y="99" font-size="12" font-weight="700" fill="#12a065">1</text>

      <line x1="145" y1="245" x2="145" y2="200" stroke="#f4b942" stroke-width="2.4" marker-end="url(#bioch-chresp-fleche-e)"/>
      <text x="118" y="260" font-size="11" fill="#8a6a00">NADH,H⁺ → NAD⁺</text>

      <line x1="180" y1="90" x2="180" y2="55" stroke="#175cd3" stroke-width="2.2" marker-end="url(#bioch-chresp-fleche-h)"/>
      <text x="186" y="70" font-size="11" fill="#175cd3">4 H⁺</text>

      <!-- Complexe II -->
      <rect x="240" y="105" width="100" height="80" rx="12" fill="#f2f0ff" stroke="#7c4df5" stroke-width="2"/>
      <text x="290" y="150" font-size="15" font-weight="700" fill="#101828" text-anchor="middle">II</text>
      <text x="290" y="200" font-size="11" fill="#475467" text-anchor="middle">Succinate</text>
      <text x="290" y="214" font-size="11" fill="#475467" text-anchor="middle">déshydrogénase</text>
      <circle cx="257" cy="109" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="253" y="114" font-size="12" font-weight="700" fill="#7c4df5">2</text>

      <line x1="290" y1="245" x2="290" y2="185" stroke="#f4b942" stroke-width="2.4" marker-end="url(#bioch-chresp-fleche-e)"/>
      <text x="236" y="260" font-size="11" fill="#8a6a00">FADH₂ → FAD</text>
      <text x="220" y="120" font-size="9.5" fill="#7c4df5">(pas de pompage de H⁺)</text>

      <!-- Ubiquinone Q -->
      <circle cx="395" cy="145" r="22" fill="#ffffff" stroke="#f4b942" stroke-width="2.4"/>
      <text x="386" y="150" font-size="13" font-weight="700" fill="#8a6a00">Q</text>
      <circle cx="410" cy="120" r="13" fill="#f4b942" opacity="0.24"/>
      <text x="406" y="125" font-size="12" font-weight="700" fill="#8a6a00">3</text>
      <line x1="200" y1="145" x2="373" y2="145" stroke="#f4b942" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#bioch-chresp-fleche-e)"/>
      <line x1="340" y1="160" x2="373" y2="150" stroke="#f4b942" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#bioch-chresp-fleche-e)"/>

      <!-- Complexe III -->
      <rect x="450" y="90" width="110" height="110" rx="12" fill="#fdeeee" stroke="#d4380d" stroke-width="2"/>
      <text x="505" y="150" font-size="15" font-weight="700" fill="#101828" text-anchor="middle">III</text>
      <text x="505" y="216" font-size="11" fill="#475467" text-anchor="middle">Complexe bc1</text>
      <circle cx="472" cy="94" r="13" fill="#d4380d" opacity="0.2"/>
      <text x="468" y="99" font-size="12" font-weight="700" fill="#d4380d">4</text>
      <line x1="417" y1="145" x2="450" y2="145" stroke="#f4b942" stroke-width="2" marker-end="url(#bioch-chresp-fleche-e)"/>

      <line x1="540" y1="90" x2="540" y2="55" stroke="#175cd3" stroke-width="2.2" marker-end="url(#bioch-chresp-fleche-h)"/>
      <text x="546" y="70" font-size="11" fill="#175cd3">4 H⁺</text>

      <!-- Cytochrome c -->
      <circle cx="605" cy="80" r="18" fill="#ffffff" stroke="#e0632f" stroke-width="2.4"/>
      <text x="592" y="85" font-size="10.5" font-weight="700" fill="#e0632f">cyt c</text>
      <circle cx="618" cy="60" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="614" y="65" font-size="12" font-weight="700" fill="#e0632f">5</text>
      <line x1="560" y1="100" x2="588" y2="86" stroke="#e0632f" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#bioch-chresp-fleche-e)"/>

      <!-- Complexe IV -->
      <rect x="650" y="90" width="110" height="110" rx="12" fill="#fff6f1" stroke="#e0632f" stroke-width="2"/>
      <text x="705" y="150" font-size="15" font-weight="700" fill="#101828" text-anchor="middle">IV</text>
      <text x="705" y="216" font-size="11" fill="#475467" text-anchor="middle">Cytochrome oxydase</text>
      <line x1="622" y1="80" x2="655" y2="92" stroke="#e0632f" stroke-width="2" marker-end="url(#bioch-chresp-fleche-e)"/>

      <line x1="705" y1="245" x2="705" y2="200" stroke="#101828" stroke-width="2.2" marker-end="url(#bioch-chresp-fleche)"/>
      <text x="640" y="260" font-size="11" fill="#475467">O₂ + 4 H⁺ → 2 H₂O</text>
      <circle cx="748" cy="255" r="13" fill="#101828" opacity="0.14"/>
      <text x="744" y="260" font-size="12" font-weight="700" fill="#101828">7</text>

      <line x1="740" y1="90" x2="740" y2="55" stroke="#175cd3" stroke-width="2.2" marker-end="url(#bioch-chresp-fleche-h)"/>
      <text x="746" y="70" font-size="11" fill="#175cd3">2 H⁺</text>

      <!-- ATP synthase -->
      <rect x="800" y="90" width="80" height="110" rx="12" fill="#f2f6ff" stroke="#175cd3" stroke-width="2"/>
      <text x="840" y="150" font-size="12.5" font-weight="700" fill="#101828" text-anchor="middle">ATP</text>
      <text x="840" y="166" font-size="12.5" font-weight="700" fill="#101828" text-anchor="middle">synthase</text>
      <text x="840" y="216" font-size="11" fill="#475467" text-anchor="middle">Complexe V</text>
      <circle cx="812" cy="94" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="808" y="99" font-size="12" font-weight="700" fill="#175cd3">9</text>

      <line x1="840" y1="55" x2="840" y2="90" stroke="#175cd3" stroke-width="2.4" marker-end="url(#bioch-chresp-fleche-h)"/>
      <text x="846" y="70" font-size="11" fill="#175cd3">retour de H⁺</text>

      <line x1="840" y1="200" x2="840" y2="245" stroke="#101828" stroke-width="2.2" marker-end="url(#bioch-chresp-fleche)"/>
      <text x="800" y="262" font-size="11" fill="#475467" text-anchor="middle">ADP + Pi → ATP</text>

      <!-- Bilan -->
      <g transform="translate(60,340)">
        <rect x="0" y="0" width="800" height="140" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="24" cy="26" r="13" fill="#12a065" opacity="0.2"/>
        <text x="20" y="31" font-size="12" font-weight="700" fill="#12a065">6</text>
        <text x="44" y="31" font-size="13.5" font-weight="600" fill="#101828">Le complexe IV réduit l’O₂, accepteur final des électrons, en H₂O.</text>
        <text x="44" y="55" font-size="12" fill="#475467">Les complexes I, III et IV pompent des protons H⁺ de la matrice vers l’espace</text>
        <text x="44" y="73" font-size="12" fill="#475467">intermembranaire, créant un gradient électrochimique transmembranaire.</text>
        <text x="44" y="97" font-size="12" fill="#475467">Ce gradient est utilisé par l’ATP synthase pour phosphoryler l’ADP en ATP</text>
        <text x="44" y="115" font-size="12" fill="#475467">(chimiosmose de Mitchell) : environ 2,5 ATP par NADH et 1,5 ATP par FADH₂.</text>
        <circle cx="700" cy="70" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="696" y="75" font-size="12" font-weight="700" fill="#e0632f">10</text>
        <text x="640" y="100" font-size="11" fill="#475467" text-anchor="middle">bilan</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Complexe I (NADH déshydrogénase) : oxyde le NADH,H⁺ et pompe 4 H⁺ vers l’espace intermembranaire.' },
    { ref: '2', texte: 'Complexe II (succinate déshydrogénase) : oxyde le FADH₂ mais ne pompe pas de protons.' },
    { ref: '3', texte: 'Ubiquinone (Q) : transporteur mobile liposoluble qui collecte les électrons des complexes I et II.' },
    { ref: '4', texte: 'Complexe III (complexe bc1) : transfère les électrons du Q au cytochrome c et pompe 4 H⁺.' },
    { ref: '5', texte: 'Cytochrome c : petite hémoprotéine mobile qui navette les électrons du complexe III au complexe IV.' },
    { ref: '6', texte: 'Le complexe IV réduit l’oxygène moléculaire, accepteur final des électrons, en eau.' },
    { ref: '7', texte: 'Réaction terminale : O₂ + 4 H⁺ + 4 e⁻ → 2 H₂O, catalysée par le complexe IV.' },
    { ref: '8', texte: 'Le pompage de protons crée un gradient électrochimique (force protomotrice) de part et d’autre de la membrane.' },
    { ref: '9', texte: 'ATP synthase (complexe V) : le reflux de H⁺ à travers son canal entraîne la synthèse d’ATP.' },
    { ref: '10', texte: 'Bilan énergétique : la phosphorylation oxydative produit environ 2,5 ATP par NADH et 1,5 ATP par FADH₂.' },
  ],
};
