import type { Schema } from '../../types';

export const schemaTransmissionsGenetiques: Schema = {
  id: 'ue1-transmissions-genetiques',
  ue: 'ue1',
  titre: 'Les quatre modes de transmission génétique',
  description:
    'Arbres généalogiques illustrant les quatre modes de transmission mendélienne et mitochondriale : autosomique dominant, autosomique récessif, récessif lié à l’X et mitochondrial, avec leurs caractéristiques distinctives.',
  categorie: 'Génétique formelle',
  viewBox: '0 0 920 920',
  ficheLiee: 'ue1-genetique-mendelienne',
  motsCles: [
    'arbre généalogique',
    'transmission autosomique dominante',
    'transmission autosomique récessive',
    'transmission récessive liée à l’X',
    'transmission mitochondriale',
    'hérédité mendélienne',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="920" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue1-transmissions-genetiques-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">Les quatre modes de transmission génétique</text>
      <line x1="40" y1="52" x2="230" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="72" font-size="13" fill="#475467">Symboles conventionnels d’arbre généalogique, puis caractéristique distinctive de chaque mode de transmission.</text>

      <!-- Clé des symboles -->
      <rect x="40" y="92" width="840" height="80" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>

      <rect x="100" y="112" width="20" height="20" fill="#ffffff" stroke="#101828" stroke-width="2"/>
      <circle cx="126" cy="104" r="9" fill="#475467" opacity="0.9"/>
      <text x="122" y="108" font-size="10" font-weight="700" fill="#ffffff">1</text>
      <text x="110" y="150" font-size="10.5" text-anchor="middle" fill="#475467">Homme sain</text>

      <circle cx="250" cy="122" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
      <circle cx="270" cy="104" r="9" fill="#475467" opacity="0.9"/>
      <text x="266" y="108" font-size="10" font-weight="700" fill="#ffffff">2</text>
      <text x="250" y="150" font-size="10.5" text-anchor="middle" fill="#475467">Femme saine</text>

      <rect x="380" y="112" width="20" height="20" fill="#d4380d" stroke="#101828" stroke-width="2"/>
      <circle cx="410" cy="104" r="9" fill="#475467" opacity="0.9"/>
      <text x="406" y="108" font-size="10" font-weight="700" fill="#ffffff">3</text>
      <text x="390" y="150" font-size="10.5" text-anchor="middle" fill="#475467">Sujet atteint</text>

      <circle cx="530" cy="122" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
      <circle cx="530" cy="122" r="4" fill="#175cd3"/>
      <circle cx="550" cy="104" r="9" fill="#475467" opacity="0.9"/>
      <text x="546" y="108" font-size="10" font-weight="700" fill="#ffffff">4</text>
      <text x="530" y="150" font-size="10.5" text-anchor="middle" fill="#475467">Porteur(se) sain(e)</text>

      <rect x="648" y="115" width="14" height="14" fill="#ffffff" stroke="#101828" stroke-width="1.6"/>
      <circle cx="685" cy="122" r="7" fill="#ffffff" stroke="#101828" stroke-width="1.6"/>
      <line x1="662" y1="122" x2="678" y2="122" stroke="#101828" stroke-width="2"/>
      <circle cx="702" cy="104" r="9" fill="#475467" opacity="0.9"/>
      <text x="698" y="108" font-size="10" font-weight="700" fill="#ffffff">5</text>
      <text x="670" y="150" font-size="10.5" text-anchor="middle" fill="#475467">Union (couple)</text>

      <line x1="795" y1="110" x2="825" y2="110" stroke="#101828" stroke-width="2"/>
      <line x1="795" y1="110" x2="795" y2="122" stroke="#101828" stroke-width="2"/>
      <line x1="825" y1="110" x2="825" y2="122" stroke="#101828" stroke-width="2"/>
      <circle cx="795" cy="129" r="6" fill="#ffffff" stroke="#101828" stroke-width="1.6"/>
      <circle cx="825" cy="129" r="6" fill="#ffffff" stroke="#101828" stroke-width="1.6"/>
      <circle cx="838" cy="104" r="9" fill="#475467" opacity="0.9"/>
      <text x="834" y="108" font-size="10" font-weight="700" fill="#ffffff">6</text>
      <text x="810" y="150" font-size="10.5" text-anchor="middle" fill="#475467">Fratrie</text>

      <!-- Panneau A : autosomique dominant -->
      <g transform="translate(40,192)">
        <rect x="0" y="0" width="400" height="330" rx="14" fill="#fbfbfd" stroke="#e4e9f5"/>
        <text x="20" y="26" font-size="14" font-weight="600" fill="#101828">Autosomique dominant</text>
        <circle cx="372" cy="20" r="11" fill="#e0632f" opacity="0.9"/>
        <text x="367" y="25" font-size="12" font-weight="700" fill="#ffffff">7</text>

        <text x="8" y="85" font-size="11" fill="#98a2b3">I</text>
        <text x="8" y="175" font-size="11" fill="#98a2b3">II</text>
        <text x="8" y="255" font-size="11" fill="#98a2b3">III</text>

        <rect x="130" y="70" width="20" height="20" fill="#d4380d" stroke="#101828" stroke-width="2"/>
        <circle cx="220" cy="80" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <line x1="150" y1="80" x2="210" y2="80" stroke="#101828" stroke-width="2"/>
        <line x1="180" y1="80" x2="180" y2="120" stroke="#101828" stroke-width="2"/>
        <line x1="150" y1="120" x2="240" y2="120" stroke="#101828" stroke-width="2"/>
        <line x1="150" y1="120" x2="150" y2="160" stroke="#101828" stroke-width="2"/>
        <line x1="240" y1="120" x2="240" y2="160" stroke="#101828" stroke-width="2"/>
        <circle cx="150" cy="170" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <rect x="230" y="160" width="20" height="20" fill="#d4380d" stroke="#101828" stroke-width="2"/>
        <circle cx="300" cy="170" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <line x1="250" y1="170" x2="290" y2="170" stroke="#101828" stroke-width="2"/>
        <line x1="270" y1="170" x2="270" y2="240" stroke="#101828" stroke-width="2"/>
        <circle cx="270" cy="250" r="10" fill="#d4380d" stroke="#101828" stroke-width="2"/>

        <text x="20" y="290" font-size="11" fill="#475467">Sujet atteint à chaque génération, quel que soit le sexe</text>
        <text x="20" y="306" font-size="11" fill="#475467">(transmission verticale) ; possible d’un père à son fils.</text>
      </g>

      <!-- Panneau B : autosomique récessif -->
      <g transform="translate(480,192)">
        <rect x="0" y="0" width="400" height="330" rx="14" fill="#fbfbfd" stroke="#e4e9f5"/>
        <text x="20" y="26" font-size="14" font-weight="600" fill="#101828">Autosomique récessif</text>
        <circle cx="372" cy="20" r="11" fill="#b93815" opacity="0.9"/>
        <text x="366" y="25" font-size="12" font-weight="700" fill="#ffffff">8</text>

        <text x="8" y="85" font-size="11" fill="#98a2b3">I</text>
        <text x="8" y="175" font-size="11" fill="#98a2b3">II</text>

        <rect x="150" y="70" width="20" height="20" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <path d="M150,70 L160,70 L160,90 L150,90 Z" fill="#175cd3"/>
        <circle cx="240" cy="80" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <path d="M240,70 A10,10 0 0 0 240,90 Z" fill="#175cd3"/>
        <line x1="170" y1="80" x2="230" y2="80" stroke="#101828" stroke-width="2"/>
        <line x1="200" y1="80" x2="200" y2="120" stroke="#101828" stroke-width="2"/>
        <line x1="130" y1="120" x2="270" y2="120" stroke="#101828" stroke-width="2"/>
        <line x1="130" y1="120" x2="130" y2="160" stroke="#101828" stroke-width="2"/>
        <line x1="200" y1="120" x2="200" y2="160" stroke="#101828" stroke-width="2"/>
        <line x1="270" y1="120" x2="270" y2="160" stroke="#101828" stroke-width="2"/>
        <circle cx="130" cy="170" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <circle cx="200" cy="170" r="10" fill="#d4380d" stroke="#101828" stroke-width="2"/>
        <rect x="260" y="160" width="20" height="20" fill="#ffffff" stroke="#101828" stroke-width="2"/>

        <text x="20" y="290" font-size="11" fill="#475467">Parents phénotypiquement sains, tous deux porteurs.</text>
        <text x="20" y="306" font-size="11" fill="#475467">Enfant atteint né de parents indemnes : saut de génération.</text>
      </g>

      <!-- Panneau C : récessif lié à l'X -->
      <g transform="translate(40,542)">
        <rect x="0" y="0" width="400" height="330" rx="14" fill="#fbfbfd" stroke="#e4e9f5"/>
        <text x="20" y="26" font-size="14" font-weight="600" fill="#101828">Récessif lié à l’X</text>
        <circle cx="372" cy="20" r="11" fill="#175cd3" opacity="0.9"/>
        <text x="367" y="25" font-size="12" font-weight="700" fill="#ffffff">9</text>

        <text x="8" y="85" font-size="11" fill="#98a2b3">I</text>
        <text x="8" y="175" font-size="11" fill="#98a2b3">II</text>
        <text x="8" y="255" font-size="11" fill="#98a2b3">III</text>

        <rect x="140" y="70" width="20" height="20" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <circle cx="230" cy="80" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <circle cx="230" cy="80" r="4" fill="#175cd3"/>
        <line x1="160" y1="80" x2="220" y2="80" stroke="#101828" stroke-width="2"/>
        <line x1="190" y1="80" x2="190" y2="120" stroke="#101828" stroke-width="2"/>
        <line x1="120" y1="120" x2="280" y2="120" stroke="#101828" stroke-width="2"/>
        <line x1="120" y1="120" x2="120" y2="160" stroke="#101828" stroke-width="2"/>
        <line x1="200" y1="120" x2="200" y2="160" stroke="#101828" stroke-width="2"/>
        <line x1="280" y1="120" x2="280" y2="160" stroke="#101828" stroke-width="2"/>
        <rect x="110" y="160" width="20" height="20" fill="#d4380d" stroke="#101828" stroke-width="2"/>
        <circle cx="200" cy="170" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <circle cx="200" cy="170" r="4" fill="#175cd3"/>
        <rect x="270" y="160" width="20" height="20" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <rect x="330" y="160" width="20" height="20" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <line x1="210" y1="170" x2="330" y2="170" stroke="#101828" stroke-width="2"/>
        <line x1="270" y1="170" x2="270" y2="240" stroke="#101828" stroke-width="2"/>
        <rect x="260" y="240" width="20" height="20" fill="#d4380d" stroke="#101828" stroke-width="2"/>

        <text x="20" y="290" font-size="11" fill="#475467">Mère porteuse : la moitié des fils atteints, la moitié des filles porteuses.</text>
        <text x="20" y="306" font-size="11" fill="#475467">Un homme atteint ne transmet jamais la maladie à ses fils.</text>
      </g>

      <!-- Panneau D : mitochondrial -->
      <g transform="translate(480,542)">
        <rect x="0" y="0" width="400" height="330" rx="14" fill="#fbfbfd" stroke="#e4e9f5"/>
        <text x="20" y="26" font-size="14" font-weight="600" fill="#101828">Transmission mitochondriale</text>
        <circle cx="372" cy="20" r="11" fill="#7c4df5" opacity="0.9"/>
        <text x="364" y="25" font-size="12" font-weight="700" fill="#ffffff">10</text>

        <text x="8" y="85" font-size="11" fill="#98a2b3">I</text>
        <text x="8" y="175" font-size="11" fill="#98a2b3">II</text>
        <text x="8" y="255" font-size="11" fill="#98a2b3">III</text>

        <rect x="140" y="70" width="20" height="20" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <circle cx="230" cy="80" r="10" fill="#d4380d" stroke="#101828" stroke-width="2"/>
        <line x1="160" y1="80" x2="220" y2="80" stroke="#101828" stroke-width="2"/>
        <line x1="190" y1="80" x2="190" y2="120" stroke="#101828" stroke-width="2"/>
        <line x1="120" y1="120" x2="280" y2="120" stroke="#101828" stroke-width="2"/>
        <line x1="120" y1="120" x2="120" y2="160" stroke="#101828" stroke-width="2"/>
        <line x1="200" y1="120" x2="200" y2="160" stroke="#101828" stroke-width="2"/>
        <line x1="280" y1="120" x2="280" y2="160" stroke="#101828" stroke-width="2"/>
        <circle cx="120" cy="170" r="10" fill="#d4380d" stroke="#101828" stroke-width="2"/>
        <rect x="190" y="160" width="20" height="20" fill="#d4380d" stroke="#101828" stroke-width="2"/>
        <circle cx="280" cy="170" r="10" fill="#d4380d" stroke="#101828" stroke-width="2"/>
        <circle cx="340" cy="170" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>
        <line x1="210" y1="170" x2="330" y2="170" stroke="#101828" stroke-width="2"/>
        <line x1="270" y1="170" x2="270" y2="240" stroke="#101828" stroke-width="2"/>
        <circle cx="270" cy="250" r="10" fill="#ffffff" stroke="#101828" stroke-width="2"/>

        <text x="20" y="290" font-size="11" fill="#475467">Mère atteinte : transmission à tous ses enfants, garçons et filles.</text>
        <text x="20" y="306" font-size="11" fill="#475467">Père atteint : aucun enfant atteint (hérédité exclusivement maternelle).</text>
      </g>

      <text x="40" y="898" font-size="12" fill="#8a94a8">Convention : carré = sexe masculin, cercle = sexe féminin ; symbole plein = sujet atteint, point ou demi-remplissage = porteur sain.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Homme sain (carré vide) : sujet de sexe masculin non atteint.' },
    { ref: '2', texte: 'Femme saine (cercle vide) : sujet de sexe féminin non atteint.' },
    { ref: '3', texte: 'Sujet atteint (symbole plein) : présente le phénotype de la maladie.' },
    { ref: '4', texte: 'Porteur ou porteuse sain(e) (point central ou demi-remplissage) : hétérozygote sans phénotype visible.' },
    { ref: '5', texte: 'Trait horizontal reliant deux partenaires : union (couple).' },
    { ref: '6', texte: 'Trait vertical puis horizontal sous l’union : fratrie, individus d’une même génération.' },
    { ref: '7', texte: 'Transmission autosomique dominante : sujet atteint à chaque génération, hommes et femmes également touchés, transmission possible d’un père à son fils.' },
    { ref: '8', texte: 'Transmission autosomique récessive : parents phénotypiquement sains mais porteurs, enfant atteint né d’un couple indemne (saut de génération apparent).' },
    { ref: '9', texte: 'Transmission récessive liée à l’X : mère porteuse transmettant la maladie à la moitié de ses fils, absence totale de transmission d’un père à ses fils.' },
    { ref: '10', texte: 'Transmission mitochondriale : une mère atteinte transmet la maladie à tous ses enfants quel que soit leur sexe ; un père atteint n’en transmet aucune.' },
  ],
};
