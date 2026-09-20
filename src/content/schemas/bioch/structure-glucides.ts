import type { Schema } from '../../types';

export const schemaStructureGlucides: Schema = {
  id: 'bioch-structure-glucides',
  ue: 'bioch',
  titre: 'Des oses aux polyosides',
  description:
    'Formes linéaire et cyclique du glucose, anomérie, liaison osidique illustrée par le maltose, puis organisation de l’amidon, du glycogène et de la cellulose.',
  categorie: 'Biochimie structurale',
  viewBox: '0 0 920 960',
  ficheLiee: 'bioch-glucides',
  motsCles: ['glucose', 'anomérie', 'liaison osidique', 'amidon', 'glycogène', 'cellulose'],
  svg: `
    <rect x="0" y="0" width="920" height="960" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Des oses aux polyosides</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <defs>
        <marker id="bioch-glucides-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
      </defs>

      <!-- Section 1 -->
      <text x="40" y="76" font-size="14.5" font-weight="600" fill="#101828">1 · Du glucose linéaire au glucose cyclique : l’anomérie</text>

      <rect x="40" y="100" width="180" height="140" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
      <text x="130" y="120" font-size="11.5" font-weight="600" fill="#101828" text-anchor="middle">Glucose, forme linéaire</text>
      <text x="120" y="142" font-size="12" fill="#475467">C1</text><text x="140" y="142" font-size="12" fill="#101828">— CHO</text>
      <text x="120" y="162" font-size="12" fill="#475467">C2</text><text x="140" y="162" font-size="12" fill="#101828">— CHOH</text>
      <text x="120" y="182" font-size="12" fill="#475467">C3</text><text x="140" y="182" font-size="12" fill="#101828">— CHOH</text>
      <text x="120" y="202" font-size="12" fill="#475467">C4</text><text x="140" y="202" font-size="12" fill="#101828">— CHOH</text>
      <text x="120" y="222" font-size="12" fill="#475467">C5</text><text x="140" y="222" font-size="12" fill="#101828">— CH₂OH</text>

      <line x1="220" y1="165" x2="270" y2="165" stroke="#101828" stroke-width="2" marker-end="url(#bioch-glucides-fleche)"/>
      <circle cx="245" cy="148" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="241" y="153" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="222" y="190" font-size="10.5" fill="#475467">cyclisation</text>
      <text x="222" y="202" font-size="10.5" fill="#475467">(C1 ↔ C5)</text>

      <!-- Ring alpha -->
      <polygon points="-65,0 -30,-32 40,-24 65,12 32,34 -38,26" transform="translate(380,170)" fill="#eefaf3" stroke="#12a065" stroke-width="2.4"/>
      <text x="358" y="132" font-size="11" fill="#12a065">O</text>
      <text x="418" y="188" font-size="11" fill="#101828">C1</text>
      <text x="296" y="176" font-size="11" fill="#101828">C4</text>
      <line x1="315" y1="170" x2="298" y2="138" stroke="#475467" stroke-width="1.6"/>
      <text x="252" y="134" font-size="10.5" fill="#475467">CH₂OH</text>
      <line x1="445" y1="182" x2="445" y2="216" stroke="#475467" stroke-width="1.6"/>
      <text x="436" y="232" font-size="11" fill="#101828">OH</text>
      <circle cx="463" cy="216" r="13" fill="#12a065" opacity="0.2"/>
      <text x="459" y="221" font-size="12" font-weight="700" fill="#12a065">2</text>
      <text x="380" y="256" font-size="12" font-weight="600" fill="#101828" text-anchor="middle">α-D-glucopyranose</text>
      <text x="380" y="272" font-size="10.5" fill="#475467" text-anchor="middle">OH anomérique sous le plan</text>

      <text x="550" y="180" font-size="26" fill="#8a94a8">⇌</text>
      <circle cx="550" cy="150" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="546" y="155" font-size="12" font-weight="700" fill="#7c4df5">3</text>
      <text x="500" y="126" font-size="10.5" fill="#475467">mutarotation</text>

      <!-- Ring beta -->
      <polygon points="-65,0 -30,-32 40,-24 65,12 32,34 -38,26" transform="translate(700,170)" fill="#f2f6ff" stroke="#175cd3" stroke-width="2.4"/>
      <text x="678" y="132" font-size="11" fill="#175cd3">O</text>
      <text x="738" y="188" font-size="11" fill="#101828">C1</text>
      <text x="616" y="176" font-size="11" fill="#101828">C4</text>
      <line x1="635" y1="170" x2="618" y2="138" stroke="#475467" stroke-width="1.6"/>
      <text x="572" y="134" font-size="10.5" fill="#475467">CH₂OH</text>
      <line x1="765" y1="182" x2="765" y2="146" stroke="#475467" stroke-width="1.6"/>
      <text x="756" y="136" font-size="11" fill="#101828">OH</text>
      <circle cx="783" cy="146" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="779" y="151" font-size="12" font-weight="700" fill="#175cd3">4</text>
      <text x="700" y="256" font-size="12" font-weight="600" fill="#101828" text-anchor="middle">β-D-glucopyranose</text>
      <text x="700" y="272" font-size="10.5" fill="#475467" text-anchor="middle">OH anomérique sur le plan</text>

      <!-- Section 2 -->
      <text x="40" y="326" font-size="14.5" font-weight="600" fill="#101828">2 · Liaison osidique : exemple du maltose, liaison α(1→4)</text>

      <polygon points="-65,0 -30,-32 40,-24 65,12 32,34 -38,26" transform="translate(280,410)" fill="#eefaf3" stroke="#12a065" stroke-width="2.4"/>
      <text x="258" y="372" font-size="11" fill="#12a065">O</text>
      <text x="280" y="470" font-size="11.5" fill="#475467" text-anchor="middle">extrémité non réductrice</text>

      <polygon points="-65,0 -30,-32 40,-24 65,12 32,34 -38,26" transform="translate(590,410)" fill="#eefaf3" stroke="#12a065" stroke-width="2.4"/>
      <text x="568" y="372" font-size="11" fill="#12a065">O</text>
      <text x="590" y="470" font-size="11.5" fill="#475467" text-anchor="middle">extrémité réductrice</text>

      <line x1="345" y1="422" x2="510" y2="416" stroke="#101828" stroke-width="2.2"/>
      <text x="418" y="410" font-size="12" fill="#101828" text-anchor="middle">O</text>
      <circle cx="420" cy="440" r="13" fill="#e0632f" opacity="0.18"/>
      <text x="416" y="445" font-size="12" font-weight="700" fill="#e0632f">5</text>
      <text x="380" y="462" font-size="10.5" fill="#475467" text-anchor="middle">liaison α(1→4)</text>
      <text x="380" y="336" font-size="10.5" fill="#d4380d" text-anchor="middle">− H₂O (condensation)</text>
      <circle cx="440" cy="340" r="13" fill="#d4380d" opacity="0.18"/>
      <text x="436" y="345" font-size="12" font-weight="700" fill="#d4380d">7</text>

      <line x1="655" y1="422" x2="655" y2="452" stroke="#475467" stroke-width="1.6"/>
      <text x="646" y="468" font-size="11" fill="#101828">OH</text>
      <circle cx="672" cy="452" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="668" y="457" font-size="12" font-weight="700" fill="#7c4df5">6</text>

      <!-- Section 3 -->
      <text x="40" y="530" font-size="14.5" font-weight="600" fill="#101828">3 · Les grands polyosides : réserve et structure</text>

      <!-- Amidon -->
      <rect x="40" y="552" width="260" height="290" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
      <circle cx="64" cy="576" r="13" fill="#e0632f" opacity="0.18"/>
      <text x="60" y="581" font-size="12" font-weight="700" fill="#e0632f">8</text>
      <text x="84" y="581" font-size="14" font-weight="600" fill="#101828">Amidon</text>
      <line x1="70" y1="630" x2="270" y2="630" stroke="#e0632f" stroke-width="2"/>
      <circle cx="70" cy="630" r="8" fill="#e0632f"/><circle cx="110" cy="630" r="8" fill="#e0632f"/>
      <circle cx="150" cy="630" r="8" fill="#e0632f"/><circle cx="190" cy="630" r="8" fill="#e0632f"/>
      <circle cx="230" cy="630" r="8" fill="#e0632f"/><circle cx="270" cy="630" r="8" fill="#e0632f"/>
      <line x1="190" y1="630" x2="210" y2="596" stroke="#e0632f" stroke-width="2"/>
      <circle cx="210" cy="596" r="8" fill="#e0632f"/>
      <circle cx="228" cy="590" r="12" fill="#e0632f" opacity="0.2"/>
      <text x="224" y="595" font-size="11" font-weight="700" fill="#e0632f">11</text>
      <text x="60" y="668" font-size="11" fill="#475467">Amylose : chaîne linéaire,</text>
      <text x="60" y="684" font-size="11" fill="#475467">liaisons α(1→4)</text>
      <text x="60" y="706" font-size="11" fill="#475467">Amylopectine : ramifiée,</text>
      <text x="60" y="722" font-size="11" fill="#475467">liaisons α(1→4) et α(1→6)</text>
      <text x="60" y="748" font-size="11" fill="#475467">Réserve glucidique végétale</text>
      <text x="60" y="764" font-size="11" fill="#475467">(amyloplastes)</text>

      <!-- Glycogène -->
      <rect x="330" y="552" width="260" height="290" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
      <circle cx="354" cy="576" r="13" fill="#12a065" opacity="0.2"/>
      <text x="350" y="581" font-size="12" font-weight="700" fill="#12a065">9</text>
      <text x="374" y="581" font-size="14" font-weight="600" fill="#101828">Glycogène</text>
      <line x1="360" y1="630" x2="560" y2="630" stroke="#12a065" stroke-width="2"/>
      <circle cx="360" cy="630" r="8" fill="#12a065"/><circle cx="400" cy="630" r="8" fill="#12a065"/>
      <circle cx="440" cy="630" r="8" fill="#12a065"/><circle cx="480" cy="630" r="8" fill="#12a065"/>
      <circle cx="520" cy="630" r="8" fill="#12a065"/><circle cx="560" cy="630" r="8" fill="#12a065"/>
      <line x1="400" y1="630" x2="420" y2="596" stroke="#12a065" stroke-width="2"/><circle cx="420" cy="596" r="8" fill="#12a065"/>
      <line x1="480" y1="630" x2="500" y2="596" stroke="#12a065" stroke-width="2"/><circle cx="500" cy="596" r="8" fill="#12a065"/>
      <text x="350" y="668" font-size="11" fill="#475467">Très ramifié : branchements</text>
      <text x="350" y="684" font-size="11" fill="#475467">tous les 8 à 12 résidus</text>
      <text x="350" y="706" font-size="11" fill="#475467">Liaisons α(1→4) et α(1→6)</text>
      <text x="350" y="738" font-size="11" fill="#475467">Réserve glucidique animale</text>
      <text x="350" y="754" font-size="11" fill="#475467">(foie et muscle)</text>

      <!-- Cellulose -->
      <rect x="620" y="552" width="260" height="290" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
      <circle cx="644" cy="576" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="638" y="581" font-size="11" font-weight="700" fill="#175cd3">10</text>
      <text x="664" y="581" font-size="14" font-weight="600" fill="#101828">Cellulose</text>
      <line x1="650" y1="630" x2="850" y2="630" stroke="#175cd3" stroke-width="2"/>
      <circle cx="650" cy="622" r="8" fill="#175cd3"/><circle cx="690" cy="638" r="8" fill="#175cd3"/>
      <circle cx="730" cy="622" r="8" fill="#175cd3"/><circle cx="770" cy="638" r="8" fill="#175cd3"/>
      <circle cx="810" cy="622" r="8" fill="#175cd3"/><circle cx="850" cy="638" r="8" fill="#175cd3"/>
      <text x="640" y="668" font-size="11" fill="#475467">Liaisons β(1→4) exclusivement</text>
      <text x="640" y="690" font-size="11" fill="#475467">Chaîne linéaire, non ramifiée</text>
      <text x="640" y="712" font-size="11" fill="#475467">(les unités alternent d’orientation)</text>
      <text x="640" y="744" font-size="11" fill="#475467">Fibres rigides, liaisons H</text>
      <text x="640" y="760" font-size="11" fill="#475467">inter-chaînes (paroi végétale)</text>

      <g transform="translate(40,864)">
        <rect x="0" y="0" width="840" height="70" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="24" cy="24" r="13" fill="#101828" opacity="0.12"/>
        <text x="20" y="29" font-size="11.5" font-weight="700" fill="#101828">12</text>
        <text x="44" y="29" font-size="12.5" font-weight="600" fill="#101828">La nature de la liaison (α ou β) détermine la fonction :</text>
        <text x="44" y="50" font-size="11.5" fill="#475467">réserve mobilisable (amidon, glycogène, liaisons α) contre rôle structural rigide (cellulose, liaisons β).</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Cyclisation intramoléculaire : le carbone C5 attaque le carbone C1, formant un hémiacétal cyclique (pyranose).' },
    { ref: '2', texte: 'Anomère α : l’hydroxyle porté par le carbone anomérique C1 est situé sous le plan du cycle.' },
    { ref: '3', texte: 'Mutarotation : interconversion spontanée en solution entre les formes α et β via la forme linéaire ouverte.' },
    { ref: '4', texte: 'Anomère β : l’hydroxyle porté par le carbone anomérique C1 est situé au-dessus du plan du cycle.' },
    { ref: '5', texte: 'Liaison osidique α(1→4) : unit le C1 anomérique d’un glucose au C4 du glucose suivant.' },
    { ref: '6', texte: 'Extrémité réductrice : l’hydroxyle anomérique du second résidu reste libre et peut se rouvrir en forme linéaire.' },
    { ref: '7', texte: 'La formation de la liaison osidique est une réaction de condensation, avec libération d’une molécule d’eau.' },
    { ref: '8', texte: 'Amidon : polyoside de réserve végétal, mélange d’amylose (linéaire) et d’amylopectine (ramifiée).' },
    { ref: '9', texte: 'Glycogène : polyoside de réserve animal, structure proche de l’amylopectine mais beaucoup plus ramifiée.' },
    { ref: '10', texte: 'Cellulose : polyoside structural végétal, chaînes linéaires de glucose liées en β(1→4), assemblées en fibres rigides.' },
    { ref: '11', texte: 'Point de branchement α(1→6) : relie une chaîne latérale au carbone C6 d’un résidu de la chaîne principale.' },
    { ref: '12', texte: 'Le type de liaison glycosidique conditionne la fonction biologique du polyoside.' },
  ],
};
