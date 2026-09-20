import type { Schema } from '../../types';

export const schemaMaturationArn: Schema = {
  id: 'ue1-maturation-arn',
  ue: 'ue1',
  titre: 'Maturation du pré-ARN messager',
  description:
    'Coiffage en 5′, épissage des introns par le spliceosome avec formation du lasso, clivage et polyadénylation en 3′, puis épissage alternatif.',
  categorie: 'Biologie moléculaire',
  viewBox: '0 0 920 700',
  ficheLiee: 'ue1-maturation-arn',
  motsCles: ['pré-ARNm', 'coiffe', 'épissage', 'spliceosome', 'lasso', 'polyadénylation', 'queue poly-A', 'épissage alternatif'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue1-maturation-arn-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#98a2b3"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">Maturation du pré-ARN messager</text>
      <line x1="40" y1="46" x2="230" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Étape 1 -->
      <text x="40" y="76" font-size="14" font-weight="600" fill="#101828">1 · Pré-ARNm : transcrit primaire (exons et introns)</text>
      <rect x="60" y="95" width="100" height="30" rx="4" fill="#175cd3"/>
      <text x="83" y="114" font-size="11" fill="#ffffff">Exon 1</text>
      <line x1="160" y1="110" x2="260" y2="110" stroke="#98a2b3" stroke-width="4"/>
      <rect x="260" y="95" width="100" height="30" rx="4" fill="#175cd3"/>
      <text x="283" y="114" font-size="11" fill="#ffffff">Exon 2</text>
      <line x1="360" y1="110" x2="460" y2="110" stroke="#98a2b3" stroke-width="4"/>
      <rect x="460" y="95" width="100" height="30" rx="4" fill="#175cd3"/>
      <text x="483" y="114" font-size="11" fill="#ffffff">Exon 3</text>
      <line x1="560" y1="110" x2="660" y2="110" stroke="#98a2b3" stroke-width="4"/>
      <rect x="660" y="95" width="100" height="30" rx="4" fill="#175cd3"/>
      <text x="683" y="114" font-size="11" fill="#ffffff">Exon 4</text>
      <circle cx="110" cy="78" r="12" fill="#175cd3" opacity="0.9"/>
      <text x="105" y="83" font-size="12" font-weight="700" fill="#ffffff">1</text>
      <circle cx="210" cy="78" r="12" fill="#98a2b3" opacity="0.9"/>
      <text x="205" y="83" font-size="12" font-weight="700" fill="#ffffff">2</text>

      <!-- Étape 2 -->
      <text x="40" y="160" font-size="14" font-weight="600" fill="#101828">2 · Coiffage en 5′ (ajout de la coiffe m7G)</text>
      <polygon points="69,195 62,207 48,207 41,195 48,183 62,183" fill="#f79009"/>
      <text x="43" y="199" font-size="8.5" font-weight="700" fill="#ffffff">m7G</text>
      <line x1="69" y1="195" x2="90" y2="195" stroke="#f79009" stroke-width="2"/>
      <line x1="90" y1="195" x2="760" y2="195" stroke="#175cd3" stroke-width="3"/>
      <circle cx="55" cy="165" r="12" fill="#f79009" opacity="0.9"/>
      <text x="50" y="170" font-size="12" font-weight="700" fill="#ffffff">3</text>

      <!-- Étape 3 -->
      <text x="40" y="250" font-size="14" font-weight="600" fill="#101828">3 · Épissage par le spliceosome (exemple : intron 1)</text>
      <ellipse cx="210" cy="325" rx="100" ry="65" fill="#7c4df5" opacity="0.07" stroke="#7c4df5" stroke-width="1.4" stroke-dasharray="4 3"/>
      <rect x="60" y="350" width="100" height="30" rx="4" fill="#175cd3" opacity="0.9"/>
      <text x="83" y="369" font-size="11" fill="#ffffff">Exon 1</text>
      <rect x="260" y="350" width="100" height="30" rx="4" fill="#175cd3" opacity="0.9"/>
      <text x="283" y="369" font-size="11" fill="#ffffff">Exon 2</text>
      <line x1="160" y1="365" x2="235" y2="335" stroke="#e0632f" stroke-width="3"/>
      <circle cx="210" cy="310" r="32" fill="none" stroke="#e0632f" stroke-width="3"/>
      <circle cx="210" cy="342" r="5" fill="#b42318"/>
      <line x1="222" y1="338" x2="260" y2="365" stroke="#e0632f" stroke-width="3"/>
      <text x="216" y="356" font-size="11" font-weight="700" fill="#b42318">A</text>
      <circle cx="170" cy="352" r="9" fill="#7c4df5"/>
      <text x="165" y="356" font-size="8" font-weight="700" fill="#ffffff">U1</text>
      <circle cx="195" cy="298" r="9" fill="#7c4df5"/>
      <text x="189" y="302" font-size="8" font-weight="700" fill="#ffffff">U2</text>
      <circle cx="250" cy="352" r="9" fill="#7c4df5"/>
      <text x="245" y="356" font-size="8" font-weight="700" fill="#ffffff">U5</text>
      <text x="150" y="332" font-size="9.5" font-weight="700" fill="#e0632f">GU</text>
      <text x="256" y="332" font-size="9.5" font-weight="700" fill="#e0632f">AG</text>

      <circle cx="108" cy="272" r="12" fill="#7c4df5" opacity="0.9"/>
      <text x="103" y="277" font-size="12" font-weight="700" fill="#ffffff">4</text>
      <circle cx="140" cy="322" r="12" fill="#e0632f" opacity="0.9"/>
      <text x="135" y="327" font-size="12" font-weight="700" fill="#ffffff">5</text>
      <circle cx="292" cy="322" r="12" fill="#e0632f" opacity="0.9"/>
      <text x="287" y="327" font-size="12" font-weight="700" fill="#ffffff">6</text>
      <line x1="180" y1="380" x2="205" y2="345" stroke="#b42318" stroke-width="1.4" stroke-dasharray="2 2"/>
      <circle cx="178" cy="385" r="12" fill="#b42318" opacity="0.9"/>
      <text x="173" y="390" font-size="12" font-weight="700" fill="#ffffff">7</text>
      <circle cx="248" cy="272" r="12" fill="#e0632f" opacity="0.6"/>
      <text x="243" y="277" font-size="12" font-weight="700" fill="#ffffff">8</text>

      <line x1="210" y1="396" x2="210" y2="416" stroke="#98a2b3" stroke-width="2" marker-end="url(#ue1-maturation-arn-fleche)"/>
      <rect x="60" y="422" width="100" height="28" rx="4" fill="#175cd3"/>
      <text x="83" y="440" font-size="11" fill="#ffffff">Exon 1</text>
      <rect x="160" y="422" width="100" height="28" rx="4" fill="#175cd3"/>
      <text x="183" y="440" font-size="11" fill="#ffffff">Exon 2</text>
      <text x="165" y="412" font-size="9" fill="#475467">jonction exon-exon</text>
      <text x="380" y="442" font-size="16" fill="#98a2b3">···</text>
      <text x="410" y="440" font-size="10.5" fill="#475467">(introns 2 et 3 excisés de la même façon)</text>

      <!-- Étape 4 -->
      <text x="40" y="480" font-size="14" font-weight="600" fill="#101828">4 · Clivage et polyadénylation en 3′</text>
      <line x1="500" y1="520" x2="650" y2="520" stroke="#175cd3" stroke-width="3"/>
      <text x="530" y="510" font-size="11" font-weight="700" fill="#b93815">AAUAAA</text>
      <line x1="654" y1="512" x2="666" y2="528" stroke="#101828" stroke-width="2"/>
      <line x1="666" y1="512" x2="654" y2="528" stroke="#101828" stroke-width="2"/>
      <text x="618" y="545" font-size="9" fill="#475467">site de clivage</text>
      <line x1="670" y1="520" x2="800" y2="520" stroke="#12a065" stroke-width="4" stroke-dasharray="6 3"/>
      <text x="665" y="545" font-size="10" fill="#12a065">poly-A (150-250 résidus)</text>
      <circle cx="560" cy="495" r="12" fill="#b93815" opacity="0.9"/>
      <text x="555" y="500" font-size="12" font-weight="700" fill="#ffffff">9</text>
      <circle cx="800" cy="495" r="12" fill="#12a065" opacity="0.9"/>
      <text x="794" y="500" font-size="12" font-weight="700" fill="#ffffff">10</text>

      <!-- Étape 5 -->
      <text x="40" y="580" font-size="14" font-weight="600" fill="#101828">5 · Épissage alternatif : plusieurs ARNm matures possibles</text>
      <circle cx="430" cy="572" r="12" fill="#101828" opacity="0.85"/>
      <text x="424" y="577" font-size="12" font-weight="700" fill="#ffffff">11</text>

      <rect x="60" y="598" width="80" height="26" rx="4" fill="#175cd3"/>
      <text x="88" y="615" font-size="11" fill="#ffffff">E1</text>
      <rect x="140" y="598" width="80" height="26" rx="4" fill="#175cd3"/>
      <text x="168" y="615" font-size="11" fill="#ffffff">E2</text>
      <rect x="220" y="598" width="80" height="26" rx="4" fill="#175cd3"/>
      <text x="248" y="615" font-size="11" fill="#ffffff">E3</text>
      <rect x="300" y="598" width="80" height="26" rx="4" fill="#175cd3"/>
      <text x="328" y="615" font-size="11" fill="#ffffff">E4</text>
      <text x="398" y="615" font-size="11" fill="#475467">ARNm 1 : E1-E2-E3-E4</text>

      <rect x="60" y="640" width="80" height="26" rx="4" fill="#175cd3"/>
      <text x="88" y="657" font-size="11" fill="#ffffff">E1</text>
      <rect x="140" y="640" width="80" height="26" rx="4" fill="none" stroke="#98a2b3" stroke-width="1.6" stroke-dasharray="3 3"/>
      <text x="164" y="657" font-size="10" fill="#98a2b3">E2</text>
      <rect x="220" y="640" width="80" height="26" rx="4" fill="#175cd3"/>
      <text x="248" y="657" font-size="11" fill="#ffffff">E3</text>
      <rect x="300" y="640" width="80" height="26" rx="4" fill="#175cd3"/>
      <text x="328" y="657" font-size="11" fill="#ffffff">E4</text>
      <text x="398" y="657" font-size="11" fill="#475467">ARNm 2 : E1-E3-E4 (exon 2 absent)</text>

      <text x="40" y="686" font-size="12" fill="#8a94a8">Une même séquence pré-ARNm peut donner plusieurs protéines selon les exons conservés.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Exon : séquence codante conservée dans l’ARNm mature.' },
    { ref: '2', texte: 'Intron : séquence non codante, excisée lors de l’épissage.' },
    { ref: '3', texte: 'Coiffe en 5′ (m7G) : ajoutée sur le premier nucléotide transcrit, protège l’ARN et facilite la traduction.' },
    { ref: '4', texte: 'Spliceosome : complexe ribonucléoprotéique (snRNP U1, U2, U4, U5, U6) qui catalyse l’épissage.' },
    { ref: '5', texte: 'Site donneur d’épissage (5′, GU) : marque le début de l’intron.' },
    { ref: '6', texte: 'Site accepteur d’épissage (3′, AG) : marque la fin de l’intron.' },
    { ref: '7', texte: 'Point de branchement (adénosine) : forme la liaison 2′-5′ à l’origine du lasso.' },
    { ref: '8', texte: 'Structure en lasso (lariat) : intron excisé sous forme circulaire, ensuite dégradé.' },
    { ref: '9', texte: 'Signal de polyadénylation (AAUAAA) : dirige le clivage de l’extrémité 3′.' },
    { ref: '10', texte: 'Queue poly-A : succession d’adénosines ajoutées en 3′, stabilise l’ARNm.' },
    { ref: '11', texte: 'Épissage alternatif : combinaisons différentes d’exons à partir d’un même pré-ARNm.' },
  ],
};
