import type { Schema } from '../../types';

export const schemaMeiose: Schema = {
  id: 'biocell-meiose',
  ue: 'biocell',
  titre: 'La méiose : deux divisions successives',
  description:
    'Les deux divisions de la méiose avec appariement des homologues, crossing-over, brassage interchromosomique, et comparaison du nombre de chromosomes et de chromatides à chaque étape.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 640',
  ficheLiee: 'biocell-meiose',
  motsCles: ['méiose', 'crossing-over', 'brassage interchromosomique', 'chromosomes homologues', 'division réductionnelle', 'division équationnelle'],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="biocell-meiose-fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">La méiose : deux divisions successives</text>
      <line x1="40" y1="46" x2="200" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Cellule mère 2n -->
      <g transform="translate(50,90)">
        <text x="0" y="0" font-size="12.5" font-weight="600" fill="#101828">Cellule mère (2n, dupliquée)</text>
        <ellipse cx="70" cy="70" rx="65" ry="60" fill="#fafbff" stroke="#98a2b3" stroke-width="1.6"/>
        <rect x="45" y="35" width="8" height="26" fill="#e0632f"/>
        <rect x="55" y="35" width="8" height="26" fill="#e0632f"/>
        <rect x="45" y="85" width="8" height="26" fill="#175cd3"/>
        <rect x="55" y="85" width="8" height="26" fill="#175cd3"/>
        <circle cx="90" cy="30" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="86" y="35" font-size="10.5" font-weight="700" fill="#e0632f">1</text>
      </g>

      <line x1="220" y1="150" x2="270" y2="150" stroke="#101828" stroke-width="2" marker-end="url(#biocell-meiose-fl)"/>

      <!-- Appariement et crossing-over : prophase I -->
      <g transform="translate(280,90)">
        <text x="0" y="0" font-size="12.5" font-weight="600" fill="#101828">Prophase I : appariement</text>
        <ellipse cx="70" cy="70" rx="65" ry="60" fill="#fff6f1" stroke="#f3d3c2" stroke-width="1.6"/>
        <rect x="38" y="40" width="8" height="24" fill="#e0632f"/>
        <rect x="48" y="40" width="8" height="24" fill="#e0632f"/>
        <rect x="78" y="40" width="8" height="24" fill="#175cd3"/>
        <rect x="88" y="40" width="8" height="24" fill="#175cd3"/>
        <line x1="54" y1="52" x2="78" y2="52" stroke="#101828" stroke-width="1.6"/>
        <circle cx="63" cy="52" r="3.4" fill="#f4c22b" stroke="#8a6300" stroke-width="1"/>
        <text x="30" y="90" font-size="10" fill="#475467">chiasma (crossing-over)</text>
        <circle cx="90" cy="30" r="13" fill="#f4c22b" opacity="0.3"/>
        <text x="86" y="35" font-size="10.5" font-weight="700" fill="#8a6300">2</text>
      </g>

      <line x1="450" y1="150" x2="500" y2="150" stroke="#101828" stroke-width="2" marker-end="url(#biocell-meiose-fl)"/>

      <!-- Metaphase I -->
      <g transform="translate(510,90)">
        <text x="0" y="0" font-size="12.5" font-weight="600" fill="#101828">Métaphase I</text>
        <ellipse cx="70" cy="70" rx="65" ry="60" fill="#fafbff" stroke="#98a2b3" stroke-width="1.6"/>
        <line x1="10" y1="70" x2="130" y2="70" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <rect x="36" y="45" width="8" height="22" fill="#e0632f"/>
        <rect x="46" y="45" width="8" height="22" fill="#e0632f"/>
        <rect x="86" y="75" width="8" height="22" fill="#175cd3"/>
        <rect x="96" y="75" width="8" height="22" fill="#175cd3"/>
        <text x="10" y="150" font-size="10" fill="#475467">disposition aléatoire :</text>
        <text x="10" y="164" font-size="10" fill="#475467">brassage interchromosomique</text>
        <circle cx="70" cy="130" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="66" y="135" font-size="10.5" font-weight="700" fill="#5a2fc7">3</text>
      </g>

      <!-- Anaphase I : séparation des homologues -->
      <g transform="translate(700,90)">
        <text x="0" y="0" font-size="12.5" font-weight="600" fill="#101828">Anaphase I</text>
        <ellipse cx="70" cy="70" rx="75" ry="55" fill="#fafbff" stroke="#98a2b3" stroke-width="1.6"/>
        <rect x="10" y="40" width="8" height="22" fill="#e0632f"/>
        <rect x="20" y="40" width="8" height="22" fill="#e0632f"/>
        <rect x="112" y="78" width="8" height="22" fill="#175cd3"/>
        <rect x="122" y="78" width="8" height="22" fill="#175cd3"/>
        <text x="0" y="150" font-size="10" fill="#0a7a4d">séparation des</text>
        <text x="0" y="164" font-size="10" fill="#0a7a4d">homologues (réductionnelle)</text>
        <circle cx="70" cy="20" r="13" fill="#12a065" opacity="0.22"/>
        <text x="66" y="25" font-size="10.5" font-weight="700" fill="#0a7a4d">4</text>
      </g>

      <!-- Division I complète -->
      <g transform="translate(120,270)">
        <text x="0" y="0" font-size="13" font-weight="600" fill="#101828">Fin de division I : deux cellules à n chromosomes bichromatidiens</text>
        <circle cx="330" cy="-6" r="13" fill="#101828" opacity="0.14"/>
        <text x="326" y="-1" font-size="10.5" font-weight="700" fill="#101828">5</text>
        <ellipse cx="50" cy="60" rx="42" ry="40" fill="#eafaf1" stroke="#0a7a4d" stroke-width="1.6"/>
        <rect x="35" y="42" width="7" height="20" fill="#e0632f"/>
        <rect x="43" y="42" width="7" height="20" fill="#e0632f"/>
        <ellipse cx="150" cy="60" rx="42" ry="40" fill="#eaf2ff" stroke="#175cd3" stroke-width="1.6"/>
        <rect x="135" y="42" width="7" height="20" fill="#175cd3"/>
        <rect x="143" y="42" width="7" height="20" fill="#175cd3"/>
      </g>

      <line x1="290" y1="330" x2="340" y2="330" stroke="#101828" stroke-width="2" marker-end="url(#biocell-meiose-fl)"/>

      <!-- Division II, sans réplication -->
      <g transform="translate(360,270)">
        <text x="0" y="0" font-size="13" font-weight="600" fill="#101828">Division II (équationnelle, sans réplication préalable)</text>
        <circle cx="440" cy="-6" r="13" fill="#101828" opacity="0.14"/>
        <text x="436" y="-1" font-size="10.5" font-weight="700" fill="#101828">6</text>

        <ellipse cx="50" cy="70" rx="38" ry="42" fill="#eafaf1" stroke="#0a7a4d" stroke-width="1.4"/>
        <line x1="50" y1="42" x2="50" y2="98" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <rect x="42" y="50" width="7" height="18" fill="#e0632f"/>
        <rect x="52" y="50" width="7" height="18" fill="#e0632f"/>

        <line x1="100" y1="70" x2="130" y2="70" stroke="#101828" stroke-width="1.6" marker-end="url(#biocell-meiose-fl)"/>

        <ellipse cx="185" cy="45" rx="30" ry="30" fill="#fdece0" stroke="#e0632f" stroke-width="1.4"/>
        <rect x="180" y="36" width="7" height="18" fill="#e0632f"/>
        <ellipse cx="185" cy="105" rx="30" ry="30" fill="#fdece0" stroke="#e0632f" stroke-width="1.4"/>
        <rect x="180" y="96" width="7" height="18" fill="#e0632f"/>
        <text x="240" y="30" font-size="10" fill="#475467">séparation des</text>
        <text x="240" y="44" font-size="10" fill="#475467">chromatides sœurs</text>
      </g>

      <!-- Gamètes finaux -->
      <g transform="translate(120,410)">
        <text x="0" y="0" font-size="13" font-weight="600" fill="#101828">Quatre gamètes haploïdes (n chromosome, 1 chromatide) génétiquement uniques</text>
        <circle cx="600" cy="-6" r="13" fill="#d6336c" opacity="0.2"/>
        <text x="596" y="-1" font-size="10.5" font-weight="700" fill="#d6336c">7</text>
        <g>
          <circle cx="40" cy="60" r="26" fill="#fdece0" stroke="#e0632f" stroke-width="1.6"/>
          <rect x="36" y="50" width="7" height="18" fill="#e0632f"/>
          <circle cx="120" cy="60" r="26" fill="#eaf2ff" stroke="#175cd3" stroke-width="1.6"/>
          <rect x="116" y="50" width="7" height="18" fill="#175cd3"/>
          <circle cx="200" cy="60" r="26" fill="#fdece0" stroke="#e0632f" stroke-width="1.6"/>
          <rect x="196" y="50" width="7" height="18" fill="#e0632f"/>
          <circle cx="280" cy="60" r="26" fill="#eaf2ff" stroke="#175cd3" stroke-width="1.6"/>
          <rect x="276" y="50" width="7" height="18" fill="#175cd3"/>
        </g>
      </g>

      <!-- Tableau comparatif -->
      <g transform="translate(500,410)">
        <rect x="0" y="-10" width="380" height="150" rx="14" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="16" y="14" font-size="12.5" font-weight="600" fill="#101828">Nombre de chromosomes / chromatides</text>
        <circle cx="340" cy="8" r="13" fill="#101828" opacity="0.14"/>
        <text x="336" y="13" font-size="10.5" font-weight="700" fill="#101828">8</text>
        <text x="16" y="40" font-size="11" fill="#475467">Cellule mère : 2n chromosomes, 4n chromatides</text>
        <text x="16" y="60" font-size="11" fill="#475467">Après division I : n chromosomes, 2n chromatides</text>
        <text x="16" y="80" font-size="11" fill="#475467">Après division II : n chromosomes, n chromatides</text>
        <text x="16" y="106" font-size="10.5" fill="#8a94a8">La division I sépare les chromosomes homologues</text>
        <text x="16" y="122" font-size="10.5" fill="#8a94a8">(réduction) ; la division II sépare les chromatides.</text>
      </g>

      <text x="40" y="610" font-size="12" fill="#8a94a8">Le brassage génétique combine le crossing-over (prophase I) et le brassage interchromosomique (métaphase I).</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Cellule mère diploïde (2n) dont chaque chromosome est déjà dupliqué en deux chromatides.' },
    { ref: '2', texte: 'Appariement des chromosomes homologues et crossing-over au niveau des chiasmas : brassage intrachromosomique.' },
    { ref: '3', texte: 'Métaphase I : disposition aléatoire des paires de chromosomes homologues, à l’origine du brassage interchromosomique.' },
    { ref: '4', texte: 'Anaphase I : séparation des chromosomes homologues, division réductionnelle.' },
    { ref: '5', texte: 'Fin de la première division : deux cellules à n chromosomes, chacun encore formé de deux chromatides.' },
    { ref: '6', texte: 'Division II : séparation des chromatides sœurs, sans réplication préalable de l’ADN.' },
    { ref: '7', texte: 'Quatre gamètes haploïdes obtenus, tous génétiquement différents grâce au brassage.' },
    { ref: '8', texte: 'La division I est réductionnelle (2n → n), la division II est équationnelle (chromatides séparées).' },
  ],
};
