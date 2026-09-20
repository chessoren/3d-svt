import type { Schema } from '../../types';

export const schemaTraduction: Schema = {
  id: 'ue1-traduction',
  ue: 'ue1',
  titre: 'Le ribosome en cours d’élongation',
  description:
    'Sous-unités ribosomiques, sites A, P et E, ARNt chargés, formation de la liaison peptidique et translocation le long de l’ARNm.',
  categorie: 'Biologie moléculaire',
  viewBox: '0 0 920 560',
  ficheLiee: 'ue1-traduction',
  motsCles: ['traduction', 'ribosome', 'site A', 'site P', 'site E', 'ARNt', 'anticodon', 'liaison peptidique', 'translocation'],
  svg: `
    <rect x="0" y="0" width="920" height="560" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue1-traduction-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#98a2b3"/>
      </marker>
      <marker id="ue1-traduction-fleche2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">Le ribosome en cours d’élongation</text>
      <line x1="40" y1="46" x2="230" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="66" font-size="13" fill="#475467">Formation de la liaison peptidique et translocation le long de l’ARNm</text>

      <!-- Sous-unités -->
      <ellipse cx="460" cy="290" rx="195" ry="115" fill="#eaefff" stroke="#7c4df5" stroke-width="2"/>
      <ellipse cx="460" cy="392" rx="175" ry="32" fill="#d0e2ff" stroke="#175cd3" stroke-width="2"/>

      <!-- ARNm -->
      <line x1="60" y1="380" x2="850" y2="380" stroke="#344054" stroke-width="3" marker-end="url(#ue1-traduction-fleche2)"/>
      <text x="45" y="386" font-size="12" font-weight="700" fill="#101828">5′</text>
      <text x="858" y="386" font-size="12" font-weight="700" fill="#101828">3′</text>
      <text x="70" y="404" font-size="12" fill="#475467">ARNm</text>
      <line x1="395" y1="374" x2="395" y2="386" stroke="#344054" stroke-width="1.5"/>
      <line x1="425" y1="374" x2="425" y2="386" stroke="#344054" stroke-width="1.5"/>
      <line x1="455" y1="374" x2="455" y2="386" stroke="#344054" stroke-width="1.5"/>
      <line x1="485" y1="374" x2="485" y2="386" stroke="#344054" stroke-width="1.5"/>
      <line x1="515" y1="374" x2="515" y2="386" stroke="#344054" stroke-width="1.5"/>
      <line x1="545" y1="374" x2="545" y2="386" stroke="#344054" stroke-width="1.5"/>

      <!-- ARNt du site E (quitte le ribosome) -->
      <circle cx="410" cy="378" r="6" fill="none" stroke="#98a2b3" stroke-width="2" stroke-dasharray="2 2"/>
      <line x1="410" y1="378" x2="410" y2="320" stroke="#98a2b3" stroke-width="3" stroke-dasharray="4 3"/>
      <circle cx="410" cy="315" r="8" fill="none" stroke="#98a2b3" stroke-width="2"/>
      <path d="M405,308 C370,270 350,255 340,235" fill="none" stroke="#98a2b3" stroke-width="2" marker-end="url(#ue1-traduction-fleche)"/>
      <text x="238" y="225" font-size="10" fill="#98a2b3">quitte le ribosome</text>

      <!-- ARNt du site P (peptidyl-ARNt) -->
      <circle cx="470" cy="378" r="6" fill="#12a065" stroke="#0d7a4f" stroke-width="1.5"/>
      <line x1="470" y1="378" x2="470" y2="270" stroke="#12a065" stroke-width="3"/>
      <circle cx="470" cy="262" r="7" fill="#12a065"/>
      <line x1="470" y1="255" x2="462" y2="238" stroke="#12a065" stroke-width="2.5"/>
      <circle cx="462" cy="236" r="7" fill="#12a065"/>
      <line x1="462" y1="229" x2="472" y2="212" stroke="#12a065" stroke-width="2.5"/>
      <circle cx="472" cy="210" r="7" fill="#12a065"/>
      <line x1="472" y1="203" x2="462" y2="188" stroke="#12a065" stroke-width="2.5"/>
      <circle cx="462" cy="186" r="7" fill="#12a065"/>

      <!-- ARNt du site A (aminoacyl-ARNt) -->
      <circle cx="530" cy="378" r="6" fill="#e0632f" stroke="#b1401c" stroke-width="1.5"/>
      <line x1="530" y1="378" x2="530" y2="265" stroke="#e0632f" stroke-width="3"/>
      <circle cx="530" cy="258" r="8" fill="#e0632f"/>

      <!-- Liaison peptidique en formation -->
      <path d="M470,262 C495,255 510,258 524,258" fill="none" stroke="#b42318" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#ue1-traduction-fleche)"/>

      <!-- Pastilles -->
      <circle cx="250" cy="400" r="12" fill="#175cd3" opacity="0.9"/>
      <text x="245" y="405" font-size="12" font-weight="700" fill="#ffffff">1</text>
      <text x="268" y="405" font-size="11.5" fill="#175cd3">Petite sous-unité (40S)</text>

      <circle cx="250" cy="205" r="12" fill="#7c4df5" opacity="0.9"/>
      <text x="245" y="210" font-size="12" font-weight="700" fill="#ffffff">2</text>
      <text x="268" y="210" font-size="11.5" fill="#7c4df5">Grande sous-unité (60S)</text>

      <circle cx="565" cy="340" r="12" fill="#e0632f" opacity="0.9"/>
      <text x="560" y="345" font-size="12" font-weight="700" fill="#ffffff">3</text>
      <text x="583" y="345" font-size="11.5" fill="#e0632f">Site A</text>

      <circle cx="430" cy="345" r="12" fill="#12a065" opacity="0.9"/>
      <text x="425" y="350" font-size="12" font-weight="700" fill="#ffffff">4</text>
      <text x="380" y="350" font-size="11.5" fill="#12a065">Site P</text>

      <circle cx="355" cy="340" r="12" fill="#98a2b3" opacity="0.9"/>
      <text x="350" y="345" font-size="12" font-weight="700" fill="#ffffff">5</text>
      <text x="270" y="345" font-size="11.5" fill="#667085">Site E</text>

      <circle cx="580" cy="255" r="12" fill="#e0632f" opacity="0.9"/>
      <text x="575" y="260" font-size="12" font-weight="700" fill="#ffffff">6</text>
      <text x="598" y="260" font-size="11.5" fill="#e0632f">ARNt chargé</text>

      <circle cx="505" cy="410" r="12" fill="#12a065" opacity="0.9"/>
      <text x="500" y="415" font-size="12" font-weight="700" fill="#ffffff">7</text>
      <text x="523" y="415" font-size="11.5" fill="#0d7a4f">Anticodon</text>

      <circle cx="500" cy="240" r="12" fill="#b42318" opacity="0.9"/>
      <text x="495" y="245" font-size="12" font-weight="700" fill="#ffffff">8</text>
      <text x="518" y="245" font-size="11" fill="#b42318">Liaison peptidique</text>

      <circle cx="410" cy="180" r="12" fill="#12a065" opacity="0.9"/>
      <text x="405" y="185" font-size="12" font-weight="700" fill="#ffffff">9</text>
      <text x="330" y="180" font-size="11" fill="#0d7a4f">Chaîne naissante</text>

      <!-- Translocation -->
      <rect x="40" y="460" width="840" height="72" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
      <circle cx="66" cy="466" r="12" fill="#101828" opacity="0.85"/>
      <text x="61" y="471" font-size="12" font-weight="700" fill="#ffffff">10</text>
      <text x="86" y="490" font-size="12" fill="#475467">Translocation : le ribosome avance d’un codon (3 nucléotides) vers l’extrémité 3′ de l’ARNm ;</text>
      <text x="86" y="510" font-size="12" fill="#475467">l’ARNt du site A passe en site P, celui du site P passe en site E puis quitte le ribosome.</text>
      <line x1="770" y1="495" x2="820" y2="495" stroke="#101828" stroke-width="2.2" marker-end="url(#ue1-traduction-fleche2)"/>

      <text x="40" y="550" font-size="12" fill="#8a94a8">Chaque cycle d’élongation ajoute un acide aminé à la chaîne, dans le sens N-terminal vers C-terminal.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Petite sous-unité (40S) : assure la lecture de l’ARNm et le contrôle de l’appariement codon-anticodon.' },
    { ref: '2', texte: 'Grande sous-unité (60S) : porte le centre peptidyl-transférase et le tunnel de sortie du peptide.' },
    { ref: '3', texte: 'Site A (aminoacyl) : accueille le nouvel ARNt chargé apporté par le facteur d’élongation.' },
    { ref: '4', texte: 'Site P (peptidyl) : contient l’ARNt portant la chaîne polypeptidique en cours de synthèse.' },
    { ref: '5', texte: 'Site E (sortie) : contient l’ARNt déchargé, sur le point de quitter le ribosome.' },
    { ref: '6', texte: 'ARNt chargé (aminoacyl-ARNt) : porte son acide aminé spécifique jusqu’au site A.' },
    { ref: '7', texte: 'Anticodon : triplet de l’ARNt qui s’apparie au codon complémentaire de l’ARNm.' },
    { ref: '8', texte: 'Formation de la liaison peptidique entre la chaîne du site P et l’acide aminé du site A.' },
    { ref: '9', texte: 'Chaîne polypeptidique naissante, reliée à l’ARNt du site P avant translocation.' },
    { ref: '10', texte: 'Translocation : déplacement du ribosome d’un codon, avec passage des ARNt de A vers P vers E.' },
  ],
};
