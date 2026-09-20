import type { Schema } from '../../types';

export const schemaGenouLigaments: Schema = {
  id: 'anat-genou-ligaments',
  ue: 'anat',
  titre: 'Le genou : surfaces et ligaments',
  description:
    'Genou de face et en coupe sagittale : condyles fémoraux, plateaux tibiaux, ménisques, ligaments croisés et collatéraux, patella et tendon patellaire.',
  categorie: 'Anatomie du membre inférieur',
  viewBox: '0 0 920 620',
  ficheLiee: 'anat-jambe-pied',
  motsCles: [
    'genou',
    'condyle fémoral',
    'plateau tibial',
    'ménisque',
    'ligament croisé antérieur',
    'ligament croisé postérieur',
    'ligament collatéral',
    'patella',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="620" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">1 · Genou de face</text>
      <line x1="40" y1="54" x2="180" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(220,90)">
        <!-- fémur -->
        <rect x="-30" y="-60" width="60" height="90" rx="10" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <!-- condyles fémoraux -->
        <circle cx="-30" cy="40" r="32" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="30" cy="40" r="32" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-46" cy="30" r="13" fill="#12a065" opacity="0.2"/>
        <text x="-51" y="35" font-size="12" font-weight="700" fill="#12a065">1</text>
        <circle cx="46" cy="30" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="41" y="35" font-size="12" font-weight="700" fill="#175cd3">2</text>

        <!-- ménisques -->
        <ellipse cx="-30" cy="72" rx="26" ry="8" fill="#fbe8c6" stroke="#c9922b"/>
        <ellipse cx="30" cy="72" rx="26" ry="8" fill="#fbe8c6" stroke="#c9922b"/>
        <circle cx="-58" cy="72" r="13" fill="#c9922b" opacity="0.26"/>
        <text x="-63" y="77" font-size="12" font-weight="700" fill="#c9922b">5</text>
        <circle cx="58" cy="72" r="13" fill="#c9922b" opacity="0.26"/>
        <text x="53" y="77" font-size="12" font-weight="700" fill="#c9922b">6</text>

        <!-- plateaux tibiaux et tibia -->
        <rect x="-56" y="78" width="112" height="18" rx="6" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <rect x="-26" y="96" width="52" height="94" rx="10" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-64" cy="86" r="13" fill="#12a065" opacity="0.32"/>
        <text x="-69" y="91" font-size="12" font-weight="700" fill="#12a065">3</text>
        <circle cx="64" cy="86" r="13" fill="#175cd3" opacity="0.32"/>
        <text x="59" y="91" font-size="12" font-weight="700" fill="#175cd3">4</text>

        <!-- ligaments collatéraux -->
        <line x1="-58" y1="10" x2="-58" y2="110" stroke="#e6c94a" stroke-width="9" stroke-linecap="round"/>
        <circle cx="-70" cy="60" r="13" fill="#c9922b" opacity="0.3"/>
        <text x="-75" y="65" font-size="12" font-weight="700" fill="#c9922b">9</text>
        <line x1="58" y1="10" x2="58" y2="110" stroke="#e6c94a" stroke-width="9" stroke-linecap="round"/>
        <circle cx="70" cy="60" r="13" fill="#c9922b" opacity="0.3"/>
        <text x="65" y="65" font-size="12" font-weight="700" fill="#c9922b">10</text>

        <!-- patella et tendon -->
        <ellipse cx="0" cy="-30" rx="16" ry="20" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="0" cy="-52" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="-4" y="-47" font-size="12" font-weight="700" fill="#e0632f">11</text>
        <line x1="0" y1="-10" x2="0" y2="86" stroke="#eaefff" stroke-width="10" stroke-linecap="round"/>
        <line x1="0" y1="-10" x2="0" y2="86" stroke="#c9d6ff" stroke-width="1.4"/>
        <circle cx="18" cy="10" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="13" y="15" font-size="12" font-weight="700" fill="#7c4df5">12</text>
      </g>

      <text x="470" y="42" font-size="19" font-weight="600" fill="#101828">2 · Coupe sagittale</text>
      <line x1="470" y1="54" x2="630" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(660,90)">
        <path d="M -50 -60 Q -10 -40 0 20 Q -10 70 -60 76" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-64" cy="10" r="13" fill="#12a065" opacity="0.2"/>
        <text x="-69" y="15" font-size="12" font-weight="700" fill="#12a065">1</text>

        <rect x="-70" y="80" width="80" height="110" rx="10" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="-80" cy="100" r="13" fill="#175cd3" opacity="0.28"/>
        <text x="-85" y="105" font-size="12" font-weight="700" fill="#175cd3">4</text>

        <!-- ligament croisé antérieur : tibia antérieur vers fémur postérieur -->
        <line x1="-8" y1="88" x2="-40" y2="10" stroke="#d4380d" stroke-width="6" stroke-linecap="round"/>
        <circle cx="-22" cy="50" r="13" fill="#d4380d" opacity="0.24"/>
        <text x="-27" y="55" font-size="12" font-weight="700" fill="#d4380d">7</text>

        <!-- ligament croisé postérieur : tibia postérieur vers fémur antérieur -->
        <line x1="-56" y1="78" x2="-16" y2="0" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>
        <circle cx="-40" cy="30" r="13" fill="#175cd3" opacity="0.3"/>
        <text x="-45" y="35" font-size="12" font-weight="700" fill="#175cd3">8</text>

        <!-- ménisque en coupe -->
        <polygon points="-64,82 -46,72 -46,88" fill="#fbe8c6" stroke="#c9922b"/>
        <circle cx="-76" cy="80" r="13" fill="#c9922b" opacity="0.26"/>
        <text x="-81" y="85" font-size="12" font-weight="700" fill="#c9922b">5</text>

        <!-- patella et tendon patellaire -->
        <ellipse cx="16" cy="30" rx="14" ry="20" fill="#f5ead9" stroke="#c9b892" stroke-width="2"/>
        <circle cx="30" cy="16" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="26" y="21" font-size="12" font-weight="700" fill="#e0632f">11</text>
        <path d="M 16 48 Q 18 70 4 86" fill="none" stroke="#c9d6ff" stroke-width="9" stroke-linecap="round"/>
        <circle cx="24" cy="70" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="19" y="75" font-size="12" font-weight="700" fill="#7c4df5">12</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Condyle fémoral médial : plus volumineux, oriente la course du genou.' },
    { ref: '2', texte: 'Condyle fémoral latéral.' },
    { ref: '3', texte: 'Plateau tibial médial.' },
    { ref: '4', texte: 'Plateau tibial latéral.' },
    { ref: '5', texte: 'Ménisque médial : en « C », plus large et moins mobile, souvent lésé.' },
    { ref: '6', texte: 'Ménisque latéral : en « O », plus mobile.' },
    { ref: '7', texte: 'Ligament croisé antérieur (LCA) : empêche la translation antérieure du tibia sous le fémur.' },
    { ref: '8', texte: 'Ligament croisé postérieur (LCP) : empêche la translation postérieure du tibia, le plus résistant.' },
    { ref: '9', texte: 'Ligament collatéral médial (LCM) : s’oppose au valgus.' },
    { ref: '10', texte: 'Ligament collatéral latéral (LCL) : s’oppose au varus.' },
    { ref: '11', texte: 'Patella (rotule) : sésamoïde inclus dans le tendon quadricipital.' },
    { ref: '12', texte: 'Tendon (ligament) patellaire : relie la patella à la tubérosité tibiale antérieure.' },
  ],
};
