import type { Schema } from '../../types';

export const schemaPlacenta: Schema = {
  id: 'embryo-placenta',
  ue: 'embryo',
  titre: 'Le placenta et les annexes embryonnaires',
  description:
    'Organisation du placenta : villosités choriales, chambre intervilleuse, barrière placentaire, cordon ombilical et amnios, avec les trois shunts caractéristiques de la circulation fœtale.',
  categorie: 'Annexes embryonnaires',
  viewBox: '0 0 920 780',
  ficheLiee: 'embryo-annexes-placenta',
  motsCles: [
    'placenta',
    'villosité choriale',
    'chambre intervilleuse',
    'barrière placentaire',
    'cordon ombilical',
    'amnios',
    'canal veineux',
    'foramen ovale',
    'canal artériel',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="780" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="18.5" font-weight="600" fill="#101828">1 · Coupe schématique du placenta</text>
      <line x1="40" y1="44" x2="200" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Amnios -->
      <line x1="80" y1="70" x2="820" y2="70" stroke="#7c4df5" stroke-width="2" stroke-dasharray="6 4"/>
      <circle cx="112" cy="55" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="108" y="60" font-size="11" font-weight="700" fill="#7c4df5">9</text>
      <text x="126" y="59" font-size="10.5" fill="#7c4df5">amnios (cavité amniotique)</text>

      <!-- Cordon ombilical -->
      <rect x="430" y="30" width="40" height="45" rx="8" fill="#fdf3e7" stroke="#c9bfa1" stroke-width="1.6"/>
      <line x1="440" y1="35" x2="440" y2="70" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
      <line x1="460" y1="35" x2="460" y2="70" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
      <line x1="450" y1="35" x2="450" y2="70" stroke="#d4380d" stroke-width="4" stroke-linecap="round"/>
      <circle cx="486" cy="40" r="13" fill="#c9bfa1" opacity="0.5"/>
      <text x="480" y="45" font-size="11" font-weight="700" fill="#8a6f2f">8</text>
      <text x="500" y="40" font-size="10" fill="#475467">cordon : 2 artères (bleu) + 1 veine (rouge)</text>
      <text x="500" y="54" font-size="10" fill="#475467">dans la gelée de Wharton</text>

      <!-- Plaque choriale -->
      <line x1="80" y1="112" x2="820" y2="112" stroke="#175cd3" stroke-width="6"/>
      <circle cx="112" cy="97" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="108" y="102" font-size="11" font-weight="700" fill="#175cd3">1</text>
      <text x="126" y="101" font-size="10.5" fill="#175cd3">plaque choriale</text>

      <!-- Chambre intervilleuse -->
      <rect x="80" y="112" width="740" height="168" fill="#fdeeea"/>
      <circle cx="700" cy="150" r="13" fill="#e0632f" opacity="0.22"/>
      <text x="694" y="155" font-size="11" font-weight="700" fill="#e0632f">4</text>
      <text x="470" y="155" font-size="10.5" fill="#a83e13">chambre intervilleuse (sang maternel)</text>

      <!-- Villosités crampons (ancrage) -->
      <path d="M250,112 L250,270 L230,280 M250,270 L270,280" fill="none" stroke="#c98a2f" stroke-width="6" stroke-linecap="round"/>
      <path d="M250,150 L220,175" fill="none" stroke="#c98a2f" stroke-width="4" stroke-linecap="round"/>
      <path d="M250,190 L280,210" fill="none" stroke="#c98a2f" stroke-width="4" stroke-linecap="round"/>
      <line x1="250" y1="130" x2="250" y2="250" stroke="#d4380d" stroke-width="1.6"/>
      <circle cx="300" cy="200" r="13" fill="#c98a2f" opacity="0.24"/>
      <text x="296" y="205" font-size="11" font-weight="700" fill="#8a6f2f">2</text>

      <path d="M620,112 L620,270 L600,280 M620,270 L640,280" fill="none" stroke="#c98a2f" stroke-width="6" stroke-linecap="round"/>
      <path d="M620,160 L650,180" fill="none" stroke="#c98a2f" stroke-width="4" stroke-linecap="round"/>
      <line x1="620" y1="130" x2="620" y2="250" stroke="#d4380d" stroke-width="1.6"/>

      <!-- Villosités libres (flottantes) -->
      <path d="M370,112 L370,205 L352,215 M370,205 L386,217" fill="none" stroke="#e8b98a" stroke-width="5" stroke-linecap="round"/>
      <line x1="370" y1="130" x2="370" y2="195" stroke="#175cd3" stroke-width="1.4"/>
      <circle cx="410" cy="180" r="13" fill="#e8b98a" opacity="0.5"/>
      <text x="405" y="185" font-size="11" font-weight="700" fill="#a1723f">3</text>

      <path d="M490,112 L490,210 L472,220 M490,210 L506,222" fill="none" stroke="#e8b98a" stroke-width="5" stroke-linecap="round"/>
      <line x1="490" y1="130" x2="490" y2="200" stroke="#175cd3" stroke-width="1.4"/>

      <path d="M720,112 L720,200 L702,210 M720,200 L736,212" fill="none" stroke="#e8b98a" stroke-width="5" stroke-linecap="round"/>
      <line x1="720" y1="130" x2="720" y2="190" stroke="#175cd3" stroke-width="1.4"/>

      <!-- Plaque basale -->
      <line x1="80" y1="280" x2="820" y2="280" stroke="#c98a2f" stroke-width="8"/>
      <rect x="80" y="280" width="740" height="40" fill="#f6d9c4"/>
      <circle cx="112" cy="300" r="13" fill="#c98a2f" opacity="0.28"/>
      <text x="107" y="305" font-size="11" font-weight="700" fill="#8a6f2f">5</text>
      <text x="126" y="304" font-size="10.5" fill="#8a6f2f">plaque basale (décidue basale)</text>

      <!-- Artère spiralée -->
      <path d="M250,320 L250,282" fill="none" stroke="#d4380d" stroke-width="6" marker-end="url(#embryo-placenta-fleche-art)"/>
      <defs>
        <marker id="embryo-placenta-fleche-art" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#d4380d"/>
        </marker>
      </defs>
      <circle cx="278" cy="300" r="13" fill="#d4380d" opacity="0.2"/>
      <text x="272" y="305" font-size="11" font-weight="700" fill="#d4380d">6</text>
      <text x="292" y="305" font-size="10" fill="#d4380d">artère spiralée maternelle</text>

      <!-- veine de drainage -->
      <path d="M560,282 L560,320" fill="none" stroke="#175cd3" stroke-width="6" marker-end="url(#embryo-placenta-fleche-veine)"/>
      <defs>
        <marker id="embryo-placenta-fleche-veine" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#175cd3"/>
        </marker>
      </defs>
      <text x="576" y="315" font-size="10" fill="#175cd3">veine de drainage</text>

      <!-- Panneau barrière placentaire -->
      <g transform="translate(60,370)">
        <rect x="0" y="0" width="330" height="190" rx="12" fill="#fbfbfc" stroke="#e4e7ec"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">2 · Barrière placentaire</text>
        <circle cx="300" cy="20" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="295" y="25" font-size="11" font-weight="700" fill="#e0632f">7</text>

        <circle cx="165" cy="115" r="60" fill="#fdeeea" stroke="#e0632f" stroke-width="10"/>
        <circle cx="150" cy="100" r="7" fill="#f3a26f" stroke="#c98a2f"/>
        <circle cx="185" cy="90" r="7" fill="#f3a26f" stroke="#c98a2f"/>
        <circle cx="140" cy="130" r="7" fill="#f3a26f" stroke="#c98a2f"/>
        <circle cx="165" cy="115" r="42" fill="#fdf3e7" stroke="#c9bfa1" stroke-width="2"/>
        <circle cx="165" cy="115" r="18" fill="#d4380d" stroke="#a83e13" stroke-width="2"/>
        <text x="16" y="170" font-size="9.5" fill="#475467">Syncytiotrophoblaste (continu) → cytotrophoblaste</text>
        <text x="16" y="184" font-size="9.5" fill="#475467">(discontinu) → tissu conjonctif → endothélium capillaire fœtal.</text>
      </g>

      <!-- Encadré villosités et volumes -->
      <g transform="translate(420,370)">
        <rect x="0" y="0" width="460" height="190" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">À retenir</text>
        <text x="16" y="52" font-size="11" fill="#475467">• Villosités crampons (2) : fixent le placenta à la</text>
        <text x="30" y="68" font-size="11" fill="#475467">plaque basale, charpente de l’organe.</text>
        <text x="16" y="90" font-size="11" fill="#475467">• Villosités libres (3) : flottent dans le sang maternel,</text>
        <text x="30" y="106" font-size="11" fill="#475467">lieu principal des échanges materno-fœtaux.</text>
        <text x="16" y="128" font-size="11" fill="#475467">• Le sang maternel et le sang fœtal ne se mélangent</text>
        <text x="30" y="144" font-size="11" fill="#475467">jamais : barrière placentaire hémochoriale.</text>
        <text x="16" y="166" font-size="11" fill="#475467">• La chambre intervilleuse est renouvelée en permanence</text>
        <text x="30" y="182" font-size="11" fill="#475467">par les artères spiralées (6).</text>
      </g>

      <text x="40" y="604" font-size="18.5" font-weight="600" fill="#101828">3 · Les trois shunts de la circulation fœtale</text>
      <line x1="40" y1="616" x2="200" y2="616" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <circle cx="480" cy="608" r="13" fill="#12a065" opacity="0.2"/>
      <text x="474" y="613" font-size="11" font-weight="700" fill="#12a065">10</text>

      <g transform="translate(60,650)" font-size="10.5">
        <rect x="0" y="20" width="110" height="34" rx="8" fill="#e9f7f0" stroke="#12a065"/>
        <text x="55" y="41" text-anchor="middle" fill="#101828">Placenta</text>
        <line x1="110" y1="37" x2="160" y2="37" stroke="#d4380d" stroke-width="2.4" marker-end="url(#embryo-placenta-fleche-c1)"/>
        <defs>
          <marker id="embryo-placenta-fleche-c1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#d4380d"/>
          </marker>
        </defs>
        <text x="118" y="30" fill="#d4380d">veine ombilicale</text>

        <rect x="160" y="20" width="120" height="34" rx="8" fill="#eaf2ff" stroke="#175cd3"/>
        <text x="220" y="41" text-anchor="middle" fill="#101828">Canal veineux</text>
        <text x="220" y="10" text-anchor="middle" fill="#175cd3">(court-circuite le foie)</text>
        <line x1="280" y1="37" x2="330" y2="37" stroke="#101828" stroke-width="2" marker-end="url(#embryo-placenta-fleche-c2)"/>
        <defs>
          <marker id="embryo-placenta-fleche-c2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
          </marker>
        </defs>

        <rect x="330" y="20" width="110" height="34" rx="8" fill="#fbfbfc" stroke="#98a2b3"/>
        <text x="385" y="41" text-anchor="middle" fill="#101828">Oreillette D.</text>
        <line x1="440" y1="30" x2="500" y2="12" stroke="#7c4df5" stroke-width="2.2" marker-end="url(#embryo-placenta-fleche-c3)"/>
        <defs>
          <marker id="embryo-placenta-fleche-c3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#7c4df5"/>
          </marker>
        </defs>
        <text x="450" y="6" fill="#7c4df5">foramen ovale</text>

        <rect x="500" y="0" width="110" height="30" rx="8" fill="#e8ecff" stroke="#7c4df5"/>
        <text x="555" y="19" text-anchor="middle" fill="#101828">Oreillette G. → Aorte</text>

        <line x1="440" y1="44" x2="500" y2="60" stroke="#c4930b" stroke-width="2.2" marker-end="url(#embryo-placenta-fleche-c4)"/>
        <defs>
          <marker id="embryo-placenta-fleche-c4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#c4930b"/>
          </marker>
        </defs>
        <rect x="500" y="46" width="130" height="30" rx="8" fill="#fdf3e7" stroke="#c4930b"/>
        <text x="565" y="65" text-anchor="middle" fill="#101828">V. droit → A. pulmonaire</text>
        <text x="565" y="90" text-anchor="middle" fill="#c4930b">canal artériel</text>

        <line x1="630" y1="60" x2="690" y2="37" stroke="#101828" stroke-width="2" marker-end="url(#embryo-placenta-fleche-c5)"/>
        <defs>
          <marker id="embryo-placenta-fleche-c5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
          </marker>
        </defs>
        <rect x="690" y="20" width="140" height="34" rx="8" fill="#fdeeea" stroke="#e0632f"/>
        <text x="760" y="41" text-anchor="middle" fill="#101828">Aorte → artères ombilicales</text>
      </g>

      <text x="40" y="768" font-size="11.5" fill="#8a94a8">Les trois shunts (canal veineux, foramen ovale, canal artériel) se ferment à la naissance et deviennent des reliquats fibreux.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Plaque choriale : face fœtale du placenta d’où naissent les villosités choriales.' },
    { ref: '2', texte: 'Villosité crampon (villosité d’ancrage) : rejoint la plaque basale et amarre le placenta à l’utérus.' },
    { ref: '3', texte: 'Villosité libre (flottante) : baigne dans le sang maternel, site principal des échanges materno-fœtaux.' },
    { ref: '4', texte: 'Chambre intervilleuse : espace rempli de sang maternel, dans lequel baignent les villosités choriales.' },
    { ref: '5', texte: 'Plaque basale (décidue basale) : face maternelle du placenta, à l’interface avec l’endomètre.' },
    { ref: '6', texte: 'Artère spiralée maternelle : s’ouvre dans la chambre intervilleuse et apporte le sang maternel oxygéné.' },
    { ref: '7', texte: 'Barrière placentaire : syncytiotrophoblaste, cytotrophoblaste, tissu conjonctif villositaire et endothélium capillaire fœtal, séparant sans jamais mélanger les deux circulations.' },
    { ref: '8', texte: 'Cordon ombilical : contient deux artères ombilicales et une veine ombilicale, entourées de la gelée de Wharton.' },
    { ref: '9', texte: 'Amnios : membrane fine tapissant la cavité amniotique, accolée au chorion.' },
    { ref: '10', texte: 'Shunts de la circulation fœtale : canal veineux (court-circuite le foie), foramen ovale (court-circuite le ventricule droit) et canal artériel (court-circuite les poumons).' },
  ],
};
