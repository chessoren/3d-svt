import type { Schema } from '../../types';

export const schemaComplement: Schema = {
  id: 'ue5-complement',
  ue: 'ue5',
  titre: 'Le système du complément',
  description:
    'Les trois voies d’activation du complément (classique, des lectines, alterne), leur convergence sur la C3 convertase puis la C5 convertase, le complexe d’attaque membranaire et les fonctions biologiques des fragments.',
  categorie: 'Immunologie innée',
  viewBox: '0 0 920 780',
  ficheLiee: 'ue5-complement',
  motsCles: ['complément', 'voie classique', 'voie des lectines', 'voie alterne', 'C3 convertase', 'C5 convertase', 'complexe d’attaque membranaire', 'opsonisation', 'anaphylatoxine'],
  svg: `
    <rect x="0" y="0" width="920" height="780" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue5-complement-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Les trois voies d’activation et la cascade commune</text>
      <line x1="40" y1="44" x2="220" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Voie classique -->
      <rect x="40" y="64" width="260" height="118" rx="12" fill="#eef4ff" stroke="#c9d6ff"/>
      <circle cx="62" cy="86" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="58" y="91" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="80" y="91" font-size="13.5" font-weight="600" fill="#101828">Voie classique</text>
      <text x="58" y="114" font-size="11.5" fill="#475467">Complexe antigène-anticorps</text>
      <text x="58" y="132" font-size="11.5" fill="#475467">(IgM ou IgG) fixant C1q</text>
      <text x="58" y="154" font-size="12" font-weight="600" fill="#175cd3">C1 → C4 → C2</text>
      <text x="58" y="172" font-size="11" fill="#8a94a8">immunité adaptative</text>

      <!-- Voie des lectines -->
      <rect x="330" y="64" width="260" height="118" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
      <circle cx="352" cy="86" r="13" fill="#12a065" opacity="0.2"/>
      <text x="348" y="91" font-size="12" font-weight="700" fill="#12a065">2</text>
      <text x="370" y="91" font-size="13.5" font-weight="600" fill="#101828">Voie des lectines</text>
      <text x="348" y="114" font-size="11.5" fill="#475467">MBL (lectine liant le mannose)</text>
      <text x="348" y="132" font-size="11.5" fill="#475467">reconnaît les sucres microbiens</text>
      <text x="348" y="154" font-size="12" font-weight="600" fill="#12a065">MBL/MASP → C4 → C2</text>
      <text x="348" y="172" font-size="11" fill="#8a94a8">immunité innée, sans anticorps</text>

      <!-- Voie alterne -->
      <rect x="620" y="64" width="260" height="118" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
      <circle cx="642" cy="86" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="638" y="91" font-size="12" font-weight="700" fill="#e0632f">3</text>
      <text x="660" y="91" font-size="13.5" font-weight="600" fill="#101828">Voie alterne</text>
      <text x="638" y="114" font-size="11.5" fill="#475467">Hydrolyse spontanée de C3</text>
      <text x="638" y="132" font-size="11.5" fill="#475467">sur une surface microbienne</text>
      <text x="638" y="154" font-size="12" font-weight="600" fill="#e0632f">C3(H₂O), facteurs B et D</text>
      <text x="638" y="172" font-size="11" fill="#8a94a8">activation directe, sans anticorps</text>

      <!-- Convergence vers C3 convertase -->
      <line x1="170" y1="182" x2="420" y2="240" stroke="#101828" stroke-width="2" marker-end="url(#ue5-complement-fleche)"/>
      <line x1="460" y1="182" x2="460" y2="240" stroke="#101828" stroke-width="2" marker-end="url(#ue5-complement-fleche)"/>
      <line x1="750" y1="182" x2="500" y2="240" stroke="#101828" stroke-width="2" marker-end="url(#ue5-complement-fleche)"/>

      <rect x="330" y="248" width="260" height="70" rx="12" fill="#f2f0ff" stroke="#dcd6fb"/>
      <circle cx="352" cy="270" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="347" y="275" font-size="12" font-weight="700" fill="#5a2fc7">4</text>
      <text x="370" y="270" font-size="13.5" font-weight="600" fill="#101828">C3 convertase</text>
      <text x="352" y="292" font-size="11.5" fill="#475467">C4b2a (classique/lectines) ou C3bBb (alterne)</text>
      <text x="352" y="308" font-size="11.5" fill="#5a2fc7">clive C3 → C3a + C3b</text>

      <!-- Branche C3a -->
      <line x1="590" y1="270" x2="700" y2="270" stroke="#101828" stroke-width="1.8" marker-end="url(#ue5-complement-fleche)"/>
      <circle cx="740" cy="270" r="26" fill="#f79009" opacity="0.22"/>
      <text x="722" y="266" font-size="11.5" font-weight="600" fill="#b54708">C3a</text>
      <circle cx="770" cy="256" r="13" fill="#f79009" opacity="0.3"/>
      <text x="766" y="261" font-size="12" font-weight="700" fill="#b54708">6</text>

      <!-- Branche C3b -->
      <line x1="330" y1="290" x2="220" y2="330" stroke="#101828" stroke-width="1.8" marker-end="url(#ue5-complement-fleche)"/>
      <circle cx="170" cy="352" r="26" fill="#12a065" opacity="0.2"/>
      <text x="153" y="348" font-size="11.5" font-weight="600" fill="#0a7a4d">C3b</text>
      <circle cx="140" cy="336" r="13" fill="#12a065" opacity="0.28"/>
      <text x="136" y="341" font-size="12" font-weight="700" fill="#0a7a4d">5</text>
      <text x="90" y="392" font-size="11.5" fill="#475467">Opsonisation :</text>
      <text x="90" y="408" font-size="11.5" fill="#475467">favorise la phagocytose</text>

      <!-- C5 convertase -->
      <line x1="460" y1="318" x2="460" y2="356" stroke="#101828" stroke-width="2" marker-end="url(#ue5-complement-fleche)"/>
      <rect x="330" y="364" width="260" height="70" rx="12" fill="#f2f0ff" stroke="#dcd6fb"/>
      <circle cx="352" cy="386" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="347" y="391" font-size="12" font-weight="700" fill="#5a2fc7">7</text>
      <text x="370" y="386" font-size="13.5" font-weight="600" fill="#101828">C5 convertase</text>
      <text x="352" y="408" font-size="11.5" fill="#475467">C4b2a3b ou C3bBb3b</text>
      <text x="352" y="424" font-size="11.5" fill="#5a2fc7">clive C5 → C5a + C5b</text>

      <!-- Branche C5a -->
      <line x1="590" y1="386" x2="700" y2="386" stroke="#101828" stroke-width="1.8" marker-end="url(#ue5-complement-fleche)"/>
      <circle cx="742" cy="386" r="28" fill="#d6336c" opacity="0.2"/>
      <text x="722" y="382" font-size="11.5" font-weight="600" fill="#a3184a">C5a</text>
      <circle cx="774" cy="370" r="13" fill="#d6336c" opacity="0.3"/>
      <text x="770" y="375" font-size="12" font-weight="700" fill="#a3184a">8</text>
      <text x="690" y="424" font-size="11.5" fill="#475467">Anaphylatoxine puissante :</text>
      <text x="690" y="440" font-size="11.5" fill="#475467">chimiotactisme des neutrophiles</text>

      <!-- Complexe d'attaque membranaire -->
      <line x1="460" y1="434" x2="460" y2="470" stroke="#101828" stroke-width="2" marker-end="url(#ue5-complement-fleche)"/>
      <rect x="300" y="478" width="320" height="140" rx="12" fill="#fff1f0" stroke="#f5c2c2"/>
      <circle cx="322" cy="500" r="13" fill="#d4380d" opacity="0.2"/>
      <text x="317" y="505" font-size="12" font-weight="700" fill="#d4380d">9</text>
      <text x="340" y="500" font-size="13.5" font-weight="600" fill="#101828">Complexe d’attaque membranaire (C5b-9)</text>

      <!-- Membrane percée -->
      <g transform="translate(380,530)">
        <line x1="0" y1="0" x2="200" y2="0" stroke="#98a2b3" stroke-width="10" stroke-dasharray="14 6"/>
        <circle cx="100" cy="0" r="20" fill="#ffffff" stroke="#d4380d" stroke-width="4"/>
        <line x1="88" y1="-12" x2="112" y2="12" stroke="#d4380d" stroke-width="2"/>
        <line x1="112" y1="-12" x2="88" y2="12" stroke="#d4380d" stroke-width="2"/>
        <text x="52" y="42" font-size="11.5" fill="#475467">Pore transmembranaire : lyse osmotique de la cellule cible</text>
      </g>

      <!-- Fonctions biologiques -->
      <rect x="40" y="650" width="840" height="104" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
      <circle cx="62" cy="672" r="13" fill="#101828" opacity="0.14"/>
      <text x="57" y="677" font-size="12" font-weight="700" fill="#101828">10</text>
      <text x="80" y="677" font-size="13.5" font-weight="600" fill="#101828">Fonctions biologiques du complément</text>
      <text x="60" y="700" font-size="12" fill="#475467">• Opsonisation (C3b) : facilite la phagocytose par les polynucléaires et macrophages.</text>
      <text x="60" y="718" font-size="12" fill="#475467">• Inflammation (C3a, C5a) : anaphylatoxines, recrutement et activation des leucocytes.</text>
      <text x="60" y="736" font-size="12" fill="#475467">• Cytolyse (C5b-9) : lyse directe des cellules cibles par formation d’un pore membranaire.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Voie classique : déclenchée par la fixation de C1q sur un complexe antigène-anticorps (IgM ou IgG).' },
    { ref: '2', texte: 'Voie des lectines : la MBL reconnaît des motifs glucidiques microbiens, indépendamment des anticorps.' },
    { ref: '3', texte: 'Voie alterne : activation spontanée et continue à bas bruit à la surface des agents pathogènes.' },
    { ref: '4', texte: 'C3 convertase (C4b2a ou C3bBb) : clive C3 en C3a et C3b, étape de convergence des trois voies.' },
    { ref: '5', texte: 'C3b : se fixe sur la cible et sert d’opsonine, reconnue par les récepteurs des phagocytes.' },
    { ref: '6', texte: 'C3a : anaphylatoxine qui participe au recrutement et à l’activation des cellules inflammatoires.' },
    { ref: '7', texte: 'C5 convertase : formée par adjonction de C3b à la C3 convertase, clive C5 en C5a et C5b.' },
    { ref: '8', texte: 'C5a : anaphylatoxine la plus puissante, puissant facteur chimiotactique des polynucléaires neutrophiles.' },
    { ref: '9', texte: 'Complexe d’attaque membranaire (C5b-9) : perfore la membrane de la cellule cible et provoque sa lyse.' },
    { ref: '10', texte: 'Fonctions biologiques communes : opsonisation, inflammation et cytolyse, complémentaires de l’immunité adaptative.' },
  ],
};
