import type { Schema } from '../../types';

export const schemaDoseEffet: Schema = {
  id: 'ue6-dose-effet',
  ue: 'ue6',
  titre: 'Relations dose-effet',
  description:
    'Courbes dose-effet en échelle semi-logarithmique : agoniste entier, agoniste partiel, effet d’un antagoniste compétitif et d’un antagoniste non compétitif, DE50, et index thérapeutique construit à partir des courbes d’effet et de toxicité.',
  categorie: 'Pharmacodynamie',
  viewBox: '0 0 920 760',
  ficheLiee: 'ue6-relations-dose-effet',
  motsCles: ['courbe dose-effet', 'agoniste', 'agoniste partiel', 'antagoniste compétitif', 'antagoniste non compétitif', 'DE50', 'index thérapeutique', 'efficacité', 'puissance'],
  svg: `
    <rect x="0" y="0" width="920" height="760" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="30" font-size="19" font-weight="600" fill="#101828">1 · Agonistes et antagonisme (échelle semi-logarithmique)</text>
      <line x1="40" y1="42" x2="220" y2="42" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(120,64)">
        <!-- Axes -->
        <line x1="0" y1="0" x2="0" y2="320" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="320" x2="640" y2="320" stroke="#475467" stroke-width="1.6"/>
        <text x="-96" y="164" font-size="13" fill="#101828" transform="rotate(-90 -96 164)">Effet (% de l’effet maximal)</text>
        <text x="270" y="352" font-size="13" fill="#101828">Dose (échelle logarithmique)</text>

        <!-- graduations Y -->
        <line x1="-6" y1="320" x2="640" y2="320" stroke="#eef1f6" stroke-width="1"/>
        <text x="-24" y="324" font-size="11.5" fill="#475467">0</text>
        <line x1="-6" y1="240" x2="640" y2="240" stroke="#eef1f6" stroke-width="1"/>
        <text x="-32" y="244" font-size="11.5" fill="#475467">25</text>
        <line x1="-6" y1="160" x2="640" y2="160" stroke="#98a2b3" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="-32" y="164" font-size="11.5" fill="#475467">50</text>
        <line x1="-6" y1="80" x2="640" y2="80" stroke="#eef1f6" stroke-width="1"/>
        <text x="-32" y="84" font-size="11.5" fill="#475467">75</text>
        <text x="-40" y="4" font-size="11.5" fill="#475467">100</text>

        <!-- graduations X (log dose) -->
        <text x="76" y="340" font-size="11" fill="#475467">10⁻⁹</text>
        <line x1="90" y1="320" x2="90" y2="326" stroke="#475467"/>
        <text x="176" y="340" font-size="11" fill="#475467">10⁻⁸</text>
        <line x1="190" y1="320" x2="190" y2="326" stroke="#475467"/>
        <text x="276" y="340" font-size="11" fill="#475467">10⁻⁷</text>
        <line x1="290" y1="320" x2="290" y2="326" stroke="#475467"/>
        <text x="376" y="340" font-size="11" fill="#475467">10⁻⁶</text>
        <line x1="390" y1="320" x2="390" y2="326" stroke="#475467"/>
        <text x="476" y="340" font-size="11" fill="#475467">10⁻⁵</text>
        <line x1="490" y1="320" x2="490" y2="326" stroke="#475467"/>
        <text x="576" y="340" font-size="11" fill="#475467">10⁻⁴</text>
        <line x1="590" y1="320" x2="590" y2="326" stroke="#475467"/>

        <!-- Agoniste entier (référence) -->
        <path d="M0,318 C60,316 110,300 150,260 C190,220 210,160 240,120 C270,80 300,40 340,20 C380,4 450,0 600,0"
          fill="none" stroke="#175cd3" stroke-width="3.2" stroke-linecap="round"/>
        <text x="360" y="14" font-size="11.5" fill="#175cd3">agoniste entier</text>

        <!-- Agoniste partiel : plafonne à 50% -->
        <path d="M0,318 C70,318 130,300 180,250 C220,210 250,180 290,168 C340,154 450,150 600,150"
          fill="none" stroke="#12a065" stroke-width="3.2" stroke-linecap="round"/>
        <text x="420" y="140" font-size="11.5" fill="#0a7a4d">agoniste partiel (Emax réduit)</text>

        <!-- Antagoniste compétitif : décale la courbe vers la droite -->
        <path d="M0,318 C90,317 150,306 200,280 C250,254 290,210 330,160 C370,110 420,50 460,26 C500,4 560,0 600,0"
          fill="none" stroke="#e0632f" stroke-width="3" stroke-dasharray="8 5" stroke-linecap="round"/>
        <text x="460" y="60" font-size="11.5" fill="#e0632f">+ antagoniste compétitif</text>

        <!-- Antagoniste non compétitif : réduit l'Emax -->
        <path d="M0,318 C60,317 110,304 150,270 C190,236 220,190 260,170 C310,146 450,142 600,142"
          fill="none" stroke="#7c4df5" stroke-width="3" stroke-dasharray="3 4" stroke-linecap="round"/>
        <text x="330" y="200" font-size="11.5" fill="#5a2fc7">+ antagoniste non compétitif</text>

        <!-- DE50 de l'agoniste entier -->
        <line x1="240" y1="160" x2="240" y2="320" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="240" cy="160" r="7" fill="#101828"/>
        <circle cx="262" cy="196" r="13" fill="#101828" opacity="0.18"/>
        <text x="257" y="201" font-size="12" font-weight="700" fill="#101828">5</text>

        <!-- Pastilles -->
        <circle cx="340" cy="20" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="336" y="25" font-size="12" font-weight="700" fill="#175cd3">1</text>

        <circle cx="290" cy="168" r="13" fill="#12a065" opacity="0.2"/>
        <text x="286" y="173" font-size="12" font-weight="700" fill="#0a7a4d">2</text>

        <circle cx="460" cy="26" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="455" y="31" font-size="12" font-weight="700" fill="#e0632f">3</text>

        <circle cx="220" cy="190" r="13" fill="#7c4df5" opacity="0.24"/>
        <text x="215" y="195" font-size="12" font-weight="700" fill="#5a2fc7">4</text>
      </g>

      <text x="40" y="452" font-size="19" font-weight="600" fill="#101828">2 · Index thérapeutique</text>
      <line x1="40" y1="464" x2="220" y2="464" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(120,486)">
        <line x1="0" y1="0" x2="0" y2="220" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="220" x2="640" y2="220" stroke="#475467" stroke-width="1.6"/>
        <text x="-96" y="112" font-size="13" fill="#101828" transform="rotate(-90 -96 112)">% de population répondant</text>
        <text x="270" y="252" font-size="13" fill="#101828">Dose (échelle logarithmique)</text>
        <line x1="-6" y1="110" x2="640" y2="110" stroke="#98a2b3" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="-32" y="114" font-size="11.5" fill="#475467">50</text>
        <text x="-24" y="224" font-size="11.5" fill="#475467">0</text>

        <!-- Courbe d'efficacité -->
        <path d="M0,218 C60,216 100,190 140,150 C180,110 210,60 250,30 C290,4 340,0 420,0"
          fill="none" stroke="#175cd3" stroke-width="3" stroke-linecap="round"/>
        <text x="120" y="176" font-size="11.5" fill="#175cd3">courbe d’efficacité (DE50)</text>

        <!-- Courbe de toxicité -->
        <path d="M260,218 C320,216 360,190 400,150 C440,110 470,60 510,30 C550,4 590,0 620,0"
          fill="none" stroke="#d4380d" stroke-width="3" stroke-linecap="round"/>
        <text x="440" y="176" font-size="11.5" fill="#d4380d">courbe de toxicité (DT50)</text>

        <line x1="216" y1="110" x2="216" y2="220" stroke="#175cd3" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="480" y1="110" x2="480" y2="220" stroke="#d4380d" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="196" y="236" font-size="11" fill="#175cd3">DE50</text>
        <text x="464" y="236" font-size="11" fill="#d4380d">DT50</text>

        <line x1="216" y1="90" x2="480" y2="90" stroke="#101828" stroke-width="1.6"/>
        <path d="M216,90 l10,-4 l0,8 z" fill="#101828"/>
        <path d="M480,90 l-10,-4 l0,8 z" fill="#101828"/>
        <circle cx="348" cy="70" r="13" fill="#101828" opacity="0.16"/>
        <text x="343" y="75" font-size="12" font-weight="700" fill="#101828">6</text>
        <text x="290" y="56" font-size="11.5" fill="#101828">marge de sécurité</text>
      </g>

      <rect x="40" y="712" width="840" height="40" rx="10" fill="#f6f8fd" stroke="#e4e9f5"/>
      <circle cx="62" cy="732" r="13" fill="#7c4df5" opacity="0.22"/>
      <text x="57" y="737" font-size="12" font-weight="700" fill="#5a2fc7">7</text>
      <text x="80" y="737" font-size="12.5" fill="#101828">Index thérapeutique = DT50 / DE50 (ou DL50 / DE50) : plus il est élevé, plus la marge de sécurité est grande.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Agoniste entier : atteint l’effet maximal (Emax = 100 %) aux fortes doses, courbe de référence.' },
    { ref: '2', texte: 'Agoniste partiel : n’atteint jamais l’effet maximal, même à dose saturante (efficacité réduite).' },
    { ref: '3', texte: 'Antagoniste compétitif : déplace la courbe de l’agoniste vers la droite, sans réduire l’Emax (surmontable par la dose).' },
    { ref: '4', texte: 'Antagoniste non compétitif : abaisse l’Emax de l’agoniste, sans forcément déplacer la courbe (non surmontable).' },
    { ref: '5', texte: 'DE50 : dose efficace 50, produisant 50 % de l’effet maximal, indicateur de la puissance du médicament.' },
    { ref: '6', texte: 'Marge de sécurité : écart entre la courbe d’efficacité et la courbe de toxicité sur l’axe des doses.' },
    { ref: '7', texte: 'Index thérapeutique : rapport entre dose toxique (ou létale) 50 et dose efficace 50, mesure la sécurité d’emploi.' },
  ],
};
