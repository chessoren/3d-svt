import type { Schema } from '../../types';

export const schemaPremiereSemaine: Schema = {
  id: 'embryo-premiere-semaine',
  ue: 'embryo',
  titre: 'La première semaine du développement',
  description:
    'De la fécondation à l’implantation : segmentation, morula, compaction, formation du blastocyste (trophoblaste et embryoblaste), éclosion, migration tubo-utérine et nidation, avec les jours de développement.',
  categorie: 'Développement embryonnaire précoce',
  viewBox: '0 0 920 600',
  ficheLiee: 'embryo-premiere-semaine',
  motsCles: [
    'segmentation',
    'morula',
    'compaction',
    'blastocyste',
    'trophoblaste',
    'embryoblaste',
    'éclosion',
    'nidation',
    'implantation',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="600" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="36" font-size="19" font-weight="600" fill="#101828">De la fécondation à l’implantation (J0 à J7)</text>
      <line x1="40" y1="48" x2="200" y2="48" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Trompe utérine -->
      <path d="M850,110 Q760,95 660,150 Q540,220 420,295 Q300,368 200,420" fill="none" stroke="#ffe3d1" stroke-width="44" stroke-linecap="round"/>
      <path d="M850,110 Q760,95 660,150 Q540,220 420,295 Q300,368 200,420" fill="none" stroke="#f3a26f" stroke-width="1.6" stroke-dasharray="1 10" stroke-linecap="round"/>

      <!-- Fimbriae / pavillon -->
      <path d="M850,110 L890,90" stroke="#e0632f" stroke-width="4" stroke-linecap="round"/>
      <path d="M850,110 L895,110" stroke="#e0632f" stroke-width="4" stroke-linecap="round"/>
      <path d="M850,110 L888,130" stroke="#e0632f" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="885" cy="70" rx="20" ry="14" fill="#f6d9c4" stroke="#c98a2f" stroke-width="1.6"/>
      <text x="852" y="55" font-size="10" fill="#475467">ovaire</text>

      <!-- Utérus -->
      <ellipse cx="150" cy="490" rx="150" ry="100" fill="#fbeee5" stroke="#e0632f" stroke-width="2"/>
      <ellipse cx="150" cy="490" rx="118" ry="75" fill="#fffaf6" stroke="#f3a26f" stroke-width="1.4"/>
      <text x="40" y="590" font-size="10" fill="#475467">cavité utérine</text>

      <!-- 1. Fécondation -->
      <circle cx="822" cy="108" r="11" fill="#eaf2ff" stroke="#175cd3" stroke-width="1.8"/>
      <circle cx="850" cy="132" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="846" y="137" font-size="11" font-weight="700" fill="#e0632f">1</text>
      <text x="770" y="148" font-size="9.5" fill="#475467">J0 : fécondation (ampoule)</text>

      <!-- 2. Segmentation (2, 4, 8 cellules) -->
      <circle cx="762" cy="122" r="7" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="775" cy="122" r="7" fill="#cfe3ff" stroke="#175cd3"/>
      <text x="750" y="106" font-size="9" fill="#475467">J1 : 2 cellules</text>

      <circle cx="686" cy="152" r="5.5" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="697" cy="146" r="5.5" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="686" cy="163" r="5.5" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="697" cy="163" r="5.5" fill="#cfe3ff" stroke="#175cd3"/>
      <text x="655" y="130" font-size="9" fill="#475467">J2 : 4 cellules</text>
      <circle cx="720" cy="140" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="716" y="145" font-size="11" font-weight="700" fill="#175cd3">2</text>

      <circle cx="606" cy="185" r="4.5" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="615" cy="180" r="4.5" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="624" cy="186" r="4.5" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="608" cy="194" r="4.5" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="618" cy="197" r="4.5" fill="#cfe3ff" stroke="#175cd3"/>
      <circle cx="628" cy="195" r="4.5" fill="#cfe3ff" stroke="#175cd3"/>
      <text x="585" y="165" font-size="9" fill="#475467">J3 : 8 cellules</text>

      <!-- 7. Migration tubo-utérine -->
      <path d="M780,140 Q620,220 470,290" fill="none" stroke="#7c4df5" stroke-width="1.6" stroke-dasharray="6 5" marker-end="url(#embryo-premiere-semaine-fleche-migration)"/>
      <defs>
        <marker id="embryo-premiere-semaine-fleche-migration" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#7c4df5"/>
        </marker>
      </defs>
      <circle cx="600" cy="235" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="596" y="240" font-size="11" font-weight="700" fill="#7c4df5">7</text>
      <text x="618" y="240" font-size="9.5" fill="#7c4df5">battements ciliaires + péristaltisme</text>

      <!-- 3. Morula -->
      <g transform="translate(505,235)">
        <circle cx="0" cy="0" r="26" fill="none" stroke="#c9bfa1" stroke-width="1.4"/>
        <circle cx="-8" cy="-9" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="6" cy="-11" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="-13" cy="4" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="0" cy="2" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="13" cy="3" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="-4" cy="13" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="9" cy="14" r="6" fill="#ffe3d1" stroke="#e0632f"/>
      </g>
      <circle cx="538" cy="212" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="534" y="217" font-size="11" font-weight="700" fill="#e0632f">3</text>
      <text x="470" y="278" font-size="9.5" fill="#475467">J3-J4 : morula (compaction)</text>

      <!-- 4. Cavitation -->
      <g transform="translate(390,300)">
        <circle cx="0" cy="0" r="28" fill="none" stroke="#c9bfa1" stroke-width="1.4"/>
        <circle cx="-10" cy="-10" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="8" cy="-12" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="-15" cy="4" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="14" cy="4" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="-6" cy="15" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="10" cy="16" r="6" fill="#ffe3d1" stroke="#e0632f"/>
        <ellipse cx="0" cy="0" rx="9" ry="6" fill="#eaf2ff"/>
      </g>
      <circle cx="426" cy="278" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="422" y="283" font-size="11" font-weight="700" fill="#175cd3">4</text>
      <text x="355" y="345" font-size="9.5" fill="#475467">J4-J5 : cavitation (blastocèle)</text>

      <!-- 5. Blastocyste -->
      <g transform="translate(265,355)">
        <circle cx="0" cy="0" r="34" fill="none" stroke="#c9bfa1" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="29" fill="#eaf2ff" stroke="#175cd3" stroke-width="3"/>
        <circle cx="-14" cy="-6" r="11" fill="#ffe3d1" stroke="#e0632f" stroke-width="1.6"/>
        <circle cx="-6" cy="-14" r="8" fill="#ffe3d1" stroke="#e0632f" stroke-width="1.6"/>
      </g>
      <circle cx="300" cy="330" r="13" fill="#12a065" opacity="0.2"/>
      <text x="296" y="335" font-size="11" font-weight="700" fill="#12a065">5</text>
      <text x="220" y="325" font-size="9" fill="#175cd3">trophoblaste</text>
      <text x="205" y="395" font-size="9" fill="#e0632f">embryoblaste</text>
      <text x="230" y="410" font-size="9.5" fill="#475467">J5 : blastocyste</text>

      <!-- 6. Eclosion -->
      <g transform="translate(180,415)">
        <path d="M-28,-6 A28,28 0 1 1 -28,6" fill="none" stroke="#c9bfa1" stroke-width="1.4" stroke-dasharray="3 3"/>
        <circle cx="0" cy="0" r="24" fill="#eaf2ff" stroke="#175cd3" stroke-width="2.6"/>
        <circle cx="-12" cy="-5" r="9" fill="#ffe3d1" stroke="#e0632f" stroke-width="1.4"/>
      </g>
      <circle cx="212" cy="395" r="13" fill="#c4930b" opacity="0.2"/>
      <text x="208" y="400" font-size="11" font-weight="700" fill="#c4930b">6</text>
      <text x="130" y="450" font-size="9.5" fill="#475467">J5-J6 : éclosion</text>

      <!-- 8. Implantation -->
      <g transform="translate(150,470)">
        <circle cx="0" cy="0" r="20" fill="#eaf2ff" stroke="#175cd3" stroke-width="2.2"/>
        <circle cx="-9" cy="-4" r="7" fill="#ffe3d1" stroke="#e0632f" stroke-width="1.2"/>
        <path d="M10,10 q10,4 14,14" fill="none" stroke="#e0632f" stroke-width="2"/>
        <path d="M14,4 q12,0 18,8" fill="none" stroke="#e0632f" stroke-width="2"/>
      </g>
      <circle cx="185" cy="450" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="180" y="455" font-size="11" font-weight="700" fill="#e0632f">8</text>
      <text x="80" y="530" font-size="9.5" fill="#475467">J6-J7 : implantation (nidation)</text>

      <text x="40" y="576" font-size="11.5" fill="#8a94a8">La zone pellucide (visible jusqu’à l’éclosion) empêche l’implantation prématurée dans la trompe.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Fécondation (J0) : a lieu dans l’ampoule de la trompe utérine, point de départ du développement.' },
    { ref: '2', texte: 'Segmentation : divisions mitotiques successives sans croissance globale, donnant des blastomères de plus en plus petits (stades 2, 4, 8 cellules).' },
    { ref: '3', texte: 'Morula (J3-J4) : compaction en 16 à 32 blastomères jointifs, reliés par des jonctions serrées.' },
    { ref: '4', texte: 'Cavitation (J4-J5) : apparition du blastocèle, cavité liquidienne au sein de la morula devenant blastocyste.' },
    { ref: '5', texte: 'Blastocyste (J5) : trophoblaste périphérique (futurs tissus placentaires) et embryoblaste (bouton embryonnaire, futur embryon).' },
    { ref: '6', texte: 'Éclosion (hatching, J5-J6) : rupture puis disparition de la zone pellucide, indispensable à l’implantation.' },
    { ref: '7', texte: 'Migration tubo-utérine : transport de l’œuf par le battement ciliaire de l’épithélium tubaire et le péristaltisme de la trompe.' },
    { ref: '8', texte: 'Implantation (nidation, J6-J7) : apposition puis adhésion du blastocyste à l’endomètre, généralement sur la paroi postéro-supérieure de l’utérus.' },
  ],
};
