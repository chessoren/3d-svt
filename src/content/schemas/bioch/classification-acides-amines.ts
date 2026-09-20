import type { Schema } from '../../types';

export const schemaClassificationAcidesAmines: Schema = {
  id: 'bioch-classification-acides-amines',
  ue: 'bioch',
  titre: 'Classification des acides aminés protéinogènes',
  description:
    'Les vingt acides aminés protéinogènes regroupés selon la nature de leur chaîne latérale, avec leur code à trois lettres et leur code à une lettre.',
  categorie: 'Biochimie structurale',
  viewBox: '0 0 920 700',
  ficheLiee: 'bioch-acides-amines',
  motsCles: ['acides aminés', 'chaîne latérale', 'code à trois lettres', 'code à une lettre', 'classification'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">Les vingt acides aminés, classés par chaîne latérale (R)</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="72" font-size="12.5" fill="#475467">Nom complet — code à trois lettres — code à une lettre</text>

      <!-- Boîte 1 : aliphatiques apolaires -->
      <g transform="translate(40,90)">
        <rect x="0" y="0" width="270" height="266" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <circle cx="20" cy="20" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="16" y="25" font-size="12" font-weight="700" fill="#175cd3">1</text>
        <text x="40" y="25" font-size="14.5" font-weight="600" fill="#101828">Aliphatiques apolaires</text>
        <text x="16" y="52" font-size="13" fill="#101828">Glycine — Gly — G</text>
        <text x="16" y="78" font-size="13" fill="#101828">Alanine — Ala — A</text>
        <text x="16" y="104" font-size="13" fill="#101828">Valine — Val — V</text>
        <text x="16" y="130" font-size="13" fill="#101828">Leucine — Leu — L</text>
        <text x="16" y="156" font-size="13" fill="#101828">Isoleucine — Ile — I</text>
        <text x="16" y="182" font-size="13" fill="#101828">Proline — Pro — P</text>
        <circle cx="248" cy="177" r="12" fill="#7c4df5" opacity="0.18"/>
        <text x="244" y="182" font-size="11.5" font-weight="700" fill="#7c4df5">7</text>
        <text x="16" y="212" font-size="12" fill="#475467">Chaînes hydrocarbonées,</text>
        <text x="16" y="230" font-size="12" fill="#475467">hydrophobes, enfouies au</text>
        <text x="16" y="248" font-size="12" fill="#475467">cœur globulaire de la protéine.</text>
      </g>

      <!-- Boîte 2 : aromatiques -->
      <g transform="translate(340,90)">
        <rect x="0" y="0" width="270" height="266" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <circle cx="20" cy="20" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="16" y="25" font-size="12" font-weight="700" fill="#e0632f">2</text>
        <text x="40" y="25" font-size="14.5" font-weight="600" fill="#101828">Aromatiques</text>
        <text x="16" y="52" font-size="13" fill="#101828">Phénylalanine — Phe — F</text>
        <text x="16" y="78" font-size="13" fill="#101828">Tyrosine — Tyr — Y</text>
        <text x="16" y="104" font-size="13" fill="#101828">Tryptophane — Trp — W</text>
        <text x="16" y="140" font-size="12" fill="#475467">Cycles aromatiques absorbant</text>
        <text x="16" y="158" font-size="12" fill="#475467">l’UV à 280 nm (dosage des</text>
        <text x="16" y="176" font-size="12" fill="#475467">protéines). Tyrosine porte un</text>
        <text x="16" y="194" font-size="12" fill="#475467">hydroxyle phénolique ionisable.</text>
      </g>

      <!-- Boîte 3 : soufrés -->
      <g transform="translate(640,90)">
        <rect x="0" y="0" width="240" height="266" rx="14" fill="#fdf6e3" stroke="#f0e0a8"/>
        <circle cx="20" cy="20" r="13" fill="#b58a00" opacity="0.2"/>
        <text x="16" y="25" font-size="12" font-weight="700" fill="#8a6a00">3</text>
        <text x="40" y="25" font-size="14.5" font-weight="600" fill="#101828">Soufrés</text>
        <text x="16" y="52" font-size="13" fill="#101828">Méthionine — Met — M</text>
        <text x="16" y="78" font-size="13" fill="#101828">Cystéine — Cys — C</text>
        <circle cx="196" cy="73" r="12" fill="#12a065" opacity="0.18"/>
        <text x="192" y="78" font-size="11.5" font-weight="700" fill="#12a065">8</text>
        <text x="16" y="112" font-size="12" fill="#475467">Met initie la traduction</text>
        <text x="16" y="130" font-size="12" fill="#475467">(codon AUG). Deux cystéines</text>
        <text x="16" y="148" font-size="12" fill="#475467">forment un pont disulfure</text>
        <text x="16" y="166" font-size="12" fill="#475467">(S–S), qui stabilise la structure</text>
        <text x="16" y="184" font-size="12" fill="#475467">tertiaire des protéines.</text>
      </g>

      <!-- Boîte 4 : polaires neutres -->
      <g transform="translate(40,384)">
        <rect x="0" y="0" width="270" height="230" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
        <circle cx="20" cy="20" r="13" fill="#12a065" opacity="0.18"/>
        <text x="16" y="25" font-size="12" font-weight="700" fill="#12a065">4</text>
        <text x="40" y="25" font-size="14.5" font-weight="600" fill="#101828">Polaires neutres</text>
        <text x="16" y="52" font-size="13" fill="#101828">Sérine — Ser — S</text>
        <text x="16" y="78" font-size="13" fill="#101828">Thréonine — Thr — T</text>
        <text x="16" y="104" font-size="13" fill="#101828">Asparagine — Asn — N</text>
        <text x="16" y="130" font-size="13" fill="#101828">Glutamine — Gln — Q</text>
        <text x="16" y="160" font-size="12" fill="#475467">Groupements hydroxyle (Ser,</text>
        <text x="16" y="178" font-size="12" fill="#475467">Thr) ou amide (Asn, Gln) non</text>
        <text x="16" y="196" font-size="12" fill="#475467">chargés au pH physiologique,</text>
        <text x="16" y="214" font-size="12" fill="#475467">mais capables de liaisons H.</text>
      </g>

      <!-- Boîte 5 : acides -->
      <g transform="translate(340,384)">
        <rect x="0" y="0" width="270" height="230" rx="14" fill="#fdeeee" stroke="#f3c6c6"/>
        <circle cx="20" cy="20" r="13" fill="#d4380d" opacity="0.18"/>
        <text x="16" y="25" font-size="12" font-weight="700" fill="#d4380d">5</text>
        <text x="40" y="25" font-size="14.5" font-weight="600" fill="#101828">Acides (chargés −)</text>
        <text x="16" y="52" font-size="13" fill="#101828">Aspartate — Asp — D</text>
        <text x="16" y="78" font-size="13" fill="#101828">Glutamate — Glu — E</text>
        <text x="16" y="108" font-size="12" fill="#475467">Chaîne latérale carboxylique</text>
        <text x="16" y="126" font-size="12" fill="#475467">(COO⁻) ionisée à pH 7, donc</text>
        <text x="16" y="144" font-size="12" fill="#475467">chargée négativement : acides</text>
        <text x="16" y="162" font-size="12" fill="#475467">aminés dicarboxyliques.</text>
      </g>

      <!-- Boîte 6 : basiques -->
      <g transform="translate(640,384)">
        <rect x="0" y="0" width="240" height="230" rx="14" fill="#f2f0ff" stroke="#dcd6fb"/>
        <circle cx="20" cy="20" r="13" fill="#7c4df5" opacity="0.18"/>
        <text x="16" y="25" font-size="12" font-weight="700" fill="#7c4df5">6</text>
        <text x="40" y="25" font-size="14.5" font-weight="600" fill="#101828">Basiques (chargés +)</text>
        <text x="16" y="52" font-size="13" fill="#101828">Lysine — Lys — K</text>
        <text x="16" y="78" font-size="13" fill="#101828">Arginine — Arg — R</text>
        <text x="16" y="104" font-size="13" fill="#101828">Histidine — His — H</text>
        <text x="16" y="134" font-size="12" fill="#475467">Chaîne latérale aminée ou</text>
        <text x="16" y="152" font-size="12" fill="#475467">guanidinium, protonée à pH 7.</text>
        <text x="16" y="170" font-size="12" fill="#475467">His a un pKa proche de 6, utile</text>
        <text x="16" y="188" font-size="12" fill="#475467">comme tampon physiologique.</text>
      </g>

      <text x="40" y="656" font-size="12" fill="#8a94a8">Neuf acides aminés sont essentiels : ils ne peuvent pas être synthétisés par l’organisme et proviennent de l’alimentation.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Aliphatiques apolaires : Gly, Ala, Val, Leu, Ile, Pro — chaînes hydrophobes non chargées.' },
    { ref: '2', texte: 'Aromatiques : Phe, Tyr, Trp — cycles conjugués, absorption UV à 280 nm.' },
    { ref: '3', texte: 'Soufrés : Met, Cys — atome de soufre dans la chaîne latérale.' },
    { ref: '4', texte: 'Polaires neutres : Ser, Thr, Asn, Gln — non chargés mais capables de liaisons hydrogène.' },
    { ref: '5', texte: 'Acides : Asp, Glu — chaîne latérale carboxylique ionisée négativement à pH physiologique.' },
    { ref: '6', texte: 'Basiques : Lys, Arg, His — chaîne latérale protonée, chargée positivement à pH physiologique.' },
    { ref: '7', texte: 'La proline est un imino-acide : son azote est engagé dans un cycle, ce qui rigidifie le squelette peptidique.' },
    { ref: '8', texte: 'Deux cystéines peuvent former un pont disulfure (S–S) intra- ou inter-caténaire.' },
  ],
};
