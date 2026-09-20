import type { Schema } from '../../types';

export const schemaOsmose: Schema = {
  id: 'ue3-osmose',
  ue: 'ue3',
  titre: 'Osmose et tonicité',
  description:
    'Diffusion de l’eau à travers une membrane semi-perméable, pression osmotique et loi de van ’t Hoff, puis comportement de l’hématie en milieu hypotonique, isotonique et hypertonique.',
  categorie: 'Biophysique des solutions',
  viewBox: '0 0 920 640',
  ficheLiee: 'ue3-solutions-osmolarite',
  motsCles: ['osmose', 'tonicité', 'pression osmotique', 'van ’t Hoff', 'osmolarité', 'hémolyse', 'crénelage'],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Osmose et tonicité</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau A : membrane semi-perméable -->
      <g transform="translate(40,64)">
        <rect x="0" y="0" width="420" height="240" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="18" y="28" font-size="14.5" font-weight="600" fill="#101828">Flux d’eau à travers la membrane</text>

        <rect x="24" y="52" width="170" height="160" rx="8" fill="#eaf3ff" stroke="#9db8e8"/>
        <rect x="226" y="52" width="170" height="160" rx="8" fill="#dceaff" stroke="#9db8e8"/>
        <line x1="210" y1="46" x2="210" y2="218" stroke="#175cd3" stroke-width="4" stroke-dasharray="2 5"/>
        <circle cx="210" cy="34" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="206" y="39" font-size="12" font-weight="700" fill="#175cd3">1</text>

        <!-- solutés côté gauche (dilué) -->
        <circle cx="50" cy="90" r="4" fill="#e0632f"/>
        <circle cx="95" cy="140" r="4" fill="#e0632f"/>
        <circle cx="60" cy="180" r="4" fill="#e0632f"/>
        <circle cx="130" cy="100" r="4" fill="#e0632f"/>

        <!-- solutés côté droit (concentré) -->
        <circle cx="250" cy="75" r="4" fill="#e0632f"/>
        <circle cx="270" cy="100" r="4" fill="#e0632f"/>
        <circle cx="300" cy="70" r="4" fill="#e0632f"/>
        <circle cx="320" cy="110" r="4" fill="#e0632f"/>
        <circle cx="255" cy="140" r="4" fill="#e0632f"/>
        <circle cx="290" cy="150" r="4" fill="#e0632f"/>
        <circle cx="340" cy="90" r="4" fill="#e0632f"/>
        <circle cx="360" cy="150" r="4" fill="#e0632f"/>
        <circle cx="310" cy="180" r="4" fill="#e0632f"/>
        <circle cx="270" cy="190" r="4" fill="#e0632f"/>

        <text x="40" y="228" font-size="11.5" fill="#475467">compartiment dilué</text>
        <text x="256" y="228" font-size="11.5" fill="#475467">compartiment concentré</text>

        <defs>
          <marker id="ue3-osmose-fl1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#12a065"/>
          </marker>
        </defs>
        <line x1="196" y1="96" x2="222" y2="96" stroke="#12a065" stroke-width="2.4" marker-end="url(#ue3-osmose-fl1)"/>
        <line x1="196" y1="130" x2="222" y2="130" stroke="#12a065" stroke-width="2.4" marker-end="url(#ue3-osmose-fl1)"/>
        <line x1="196" y1="164" x2="222" y2="164" stroke="#12a065" stroke-width="2.4" marker-end="url(#ue3-osmose-fl1)"/>
        <circle cx="204" cy="112" r="13" fill="#12a065" opacity="0.2"/>
        <text x="198" y="117" font-size="12" font-weight="700" fill="#12a065">2</text>
        <text x="30" y="112" font-size="11" fill="#0f8a58">H₂O</text>
        <text x="228" y="200" font-size="11" fill="#0f8a58">l’eau seule traverse</text>
      </g>

      <!-- Panneau B : formule de van 't Hoff -->
      <g transform="translate(480,64)">
        <rect x="0" y="0" width="400" height="240" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="18" y="28" font-size="14.5" font-weight="600" fill="#101828">Pression osmotique π</text>
        <circle cx="374" cy="22" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="369" y="27" font-size="12" font-weight="700" fill="#e0632f">3</text>

        <rect x="20" y="46" width="360" height="56" rx="10" fill="#ffffff" stroke="#f3d3c2"/>
        <text x="40" y="82" font-size="20" font-weight="700" fill="#101828">π = R · T · Cosm</text>
        <circle cx="356" cy="60" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="351" y="65" font-size="12" font-weight="700" fill="#7c4df5">4</text>

        <text x="20" y="122" font-size="12.5" fill="#475467">R : constante des gaz parfaits (8,314 J·mol⁻¹·K⁻¹)</text>
        <text x="20" y="142" font-size="12.5" fill="#475467">T : température absolue, en kelvin (K)</text>
        <text x="20" y="162" font-size="12.5" fill="#475467">Cosm : osmolarité totale, en osmol·L⁻¹</text>
        <text x="20" y="182" font-size="12.5" fill="#475467">π s’exprime en pascal (Pa) dans le système international</text>

        <rect x="20" y="196" width="360" height="34" rx="8" fill="#eefaf3" stroke="#bfe8cf"/>
        <text x="32" y="218" font-size="12.5" fill="#0f8a58">Osmolarité plasmatique normale ≈ 290 mOsm/L (275–295)</text>
        <circle cx="356" cy="213" r="13" fill="#0f8a58" opacity="0.2"/>
        <text x="351" y="218" font-size="12" font-weight="700" fill="#0f8a58">5</text>
      </g>

      <!-- Panneau C : hématie et tonicité -->
      <text x="40" y="336" font-size="17" font-weight="600" fill="#101828">Comportement de l’hématie selon la tonicité du milieu</text>
      <line x1="40" y1="348" x2="180" y2="348" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(70,470)">
        <circle cx="0" cy="0" r="46" fill="#ffe3df" stroke="#d4380d" stroke-width="2.4"/>
        <circle cx="0" cy="0" r="24" fill="#ffffff" opacity="0.55"/>
        <line x1="-46" y1="-58" x2="-46" y2="-84" stroke="#98a2b3" stroke-width="1.4"/>
        <line x1="-46" y1="-58" x2="0" y2="-58" stroke="#98a2b3" stroke-width="1.4" stroke-dasharray="2 3"/>
        <text x="-70" y="-94" font-size="13" font-weight="600" fill="#101828">Milieu hypotonique</text>
        <circle cx="46" cy="-30" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="41" y="-25" font-size="12" font-weight="700" fill="#d4380d">6</text>
        <text x="-70" y="70" font-size="11.5" fill="#475467">eau entrante : gonflement</text>
        <text x="-70" y="88" font-size="11.5" fill="#475467">puis hémolyse si excessif</text>
      </g>

      <g transform="translate(390,470)">
        <ellipse cx="0" cy="0" rx="40" ry="30" fill="#ffe3df" stroke="#d4380d" stroke-width="2.4"/>
        <ellipse cx="0" cy="0" rx="16" ry="12" fill="#ffffff" opacity="0.7"/>
        <text x="-60" y="-52" font-size="13" font-weight="600" fill="#101828">Milieu isotonique</text>
        <circle cx="40" cy="-16" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="35" y="-11" font-size="12" font-weight="700" fill="#d4380d">7</text>
        <text x="-64" y="54" font-size="11.5" fill="#475467">flux net d’eau nul :</text>
        <text x="-64" y="72" font-size="11.5" fill="#475467">forme normale discoïde</text>
      </g>

      <g transform="translate(700,470)">
        <polygon points="26.0,0.0 17.5,4.0 23.4,11.3 14.1,11.2 16.2,20.3 7.8,16.2 5.8,25.3 0.0,18.0 -5.8,25.3 -7.8,16.2 -16.2,20.3 -14.1,11.2 -23.4,11.3 -17.5,4.0 -26.0,0.0 -17.5,-4.0 -23.4,-11.3 -14.1,-11.2 -16.2,-20.3 -7.8,-16.2 -5.8,-25.3 -0.0,-18.0 5.8,-25.3 7.8,-16.2 16.2,-20.3 14.1,-11.2 23.4,-11.3 17.5,-4.0"
                 fill="#ffe3df" stroke="#d4380d" stroke-width="2.2"/>
        <text x="-62" y="-52" font-size="13" font-weight="600" fill="#101828">Milieu hypertonique</text>
        <circle cx="40" cy="-16" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="35" y="-11" font-size="12" font-weight="700" fill="#d4380d">8</text>
        <text x="-66" y="54" font-size="11.5" fill="#475467">eau sortante : crénelage</text>
        <text x="-66" y="72" font-size="11.5" fill="#475467">(échinocyte), plasmolyse</text>
      </g>

      <rect x="40" y="576" width="840" height="46" rx="10" fill="#f6f8fd" stroke="#e4e9f5"/>
      <circle cx="66" cy="599" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="61" y="604" font-size="12" font-weight="700" fill="#7c4df5">9</text>
      <text x="88" y="604" font-size="12.5" fill="#475467">La tonicité ne dépend que des osmoles efficaces (non diffusibles à travers la membrane), à la différence de l’osmolarité totale qui inclut aussi les osmoles diffusibles (ex. urée).</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Membrane semi-perméable : laisse passer l’eau librement mais retient les solutés.' },
    { ref: '2', texte: 'Sens du flux d’eau : du compartiment le moins concentré vers le plus concentré, jusqu’à l’équilibre.' },
    { ref: '3', texte: 'Pression osmotique π : pression hydrostatique qu’il faudrait appliquer pour annuler ce flux net d’eau.' },
    { ref: '4', texte: 'Loi de van ’t Hoff : π est proportionnelle à la température absolue et à l’osmolarité totale de la solution.' },
    { ref: '5', texte: 'L’osmolarité plasmatique normale est étroitement régulée autour de 290 mOsm/L.' },
    { ref: '6', texte: 'Milieu hypotonique (moins concentré que la cellule) : l’eau entre, l’hématie gonfle et peut éclater.' },
    { ref: '7', texte: 'Milieu isotonique (même osmolarité efficace) : pas de mouvement net d’eau, forme conservée.' },
    { ref: '8', texte: 'Milieu hypertonique (plus concentré que la cellule) : l’eau sort, l’hématie se rétracte et se crénèle.' },
    { ref: '9', texte: 'Distinction essentielle entre osmolarité totale et tonicité, qui ne prend en compte que les osmoles efficaces.' },
  ],
};
