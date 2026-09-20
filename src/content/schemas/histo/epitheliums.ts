import type { Schema } from '../../types';

export const schemaEpitheliums: Schema = {
  id: 'histo-epitheliums',
  ue: 'histo',
  titre: 'Les épithéliums de revêtement',
  description:
    'Classification des épithéliums de revêtement selon le nombre d’assises cellulaires et la forme des cellules superficielles, avec un exemple de localisation pour chaque type.',
  categorie: 'Histologie générale',
  viewBox: '0 0 920 760',
  ficheLiee: 'histo-epitheliums-revetement',
  motsCles: [
    'épithélium simple',
    'épithélium stratifié',
    'pavimenteux',
    'cubique',
    'prismatique',
    'pseudostratifié',
    'urothélium',
    'lame basale',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="760" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">Classification des épithéliums de revêtement</text>
      <line x1="40" y1="54" x2="200" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="74" font-size="12.5" fill="#475467">Critère 1 : nombre d’assises (simple / stratifié) — Critère 2 : forme des cellules superficielles (pavimenteuse, cubique, prismatique)</text>

      <!-- ===== RANGÉE 1 : épithéliums simples ===== -->

      <!-- 1. Simple pavimenteux -->
      <g transform="translate(40,90)">
        <rect x="0" y="0" width="200" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="182" cy="20" r="13" fill="#175cd3" opacity="0.16"/>
        <text x="178" y="25" font-size="12" font-weight="700" fill="#175cd3">1</text>
        <text x="14" y="26" font-size="13" font-weight="600" fill="#101828">Simple pavimenteux</text>
        <line x1="14" y1="170" x2="186" y2="170" stroke="#12a065" stroke-width="3"/>
        <circle cx="28" cy="186" r="11" fill="#12a065" opacity="0.18"/>
        <text x="24.5" y="190.5" font-size="11" font-weight="700" fill="#12a065">8</text>
        <text x="42" y="191" font-size="10.5" fill="#475467">lame basale</text>
        <ellipse cx="30" cy="161" rx="17" ry="7" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="30" cy="161" rx="8" ry="2.4" fill="#175cd3"/>
        <ellipse cx="66" cy="161" rx="17" ry="7" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="66" cy="161" rx="8" ry="2.4" fill="#175cd3"/>
        <ellipse cx="102" cy="161" rx="17" ry="7" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="102" cy="161" rx="8" ry="2.4" fill="#175cd3"/>
        <ellipse cx="138" cy="161" rx="17" ry="7" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="138" cy="161" rx="8" ry="2.4" fill="#175cd3"/>
        <ellipse cx="174" cy="161" rx="17" ry="7" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="174" cy="161" rx="8" ry="2.4" fill="#175cd3"/>
        <line x1="18" y1="178" x2="26" y2="186" stroke="#c8cdd6" stroke-width="1.6"/>
        <line x1="50" y1="178" x2="58" y2="186" stroke="#c8cdd6" stroke-width="1.6"/>
        <line x1="150" y1="178" x2="158" y2="186" stroke="#c8cdd6" stroke-width="1.6"/>
        <text x="14" y="214" font-size="11" fill="#475467">Ex. : endothélium,</text>
        <text x="14" y="228" font-size="11" fill="#475467">alvéoles pulmonaires</text>
      </g>

      <!-- 2. Simple cubique -->
      <g transform="translate(260,90)">
        <rect x="0" y="0" width="200" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="182" cy="20" r="13" fill="#175cd3" opacity="0.16"/>
        <text x="178" y="25" font-size="12" font-weight="700" fill="#175cd3">2</text>
        <text x="14" y="26" font-size="13" font-weight="600" fill="#101828">Simple cubique</text>
        <line x1="14" y1="170" x2="186" y2="170" stroke="#12a065" stroke-width="3"/>
        <rect x="16" y="134" width="36" height="36" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="34" cy="152" r="8" fill="#175cd3"/>
        <rect x="58" y="134" width="36" height="36" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="76" cy="152" r="8" fill="#175cd3"/>
        <rect x="100" y="134" width="36" height="36" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="118" cy="152" r="8" fill="#175cd3"/>
        <rect x="142" y="134" width="36" height="36" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="160" cy="152" r="8" fill="#175cd3"/>
        <text x="14" y="214" font-size="11" fill="#475467">Ex. : tubes rénaux,</text>
        <text x="14" y="228" font-size="11" fill="#475467">follicules thyroïdiens</text>
      </g>

      <!-- 3. Simple prismatique -->
      <g transform="translate(480,90)">
        <rect x="0" y="0" width="200" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="182" cy="20" r="13" fill="#175cd3" opacity="0.16"/>
        <text x="178" y="25" font-size="12" font-weight="700" fill="#175cd3">3</text>
        <text x="14" y="26" font-size="13" font-weight="600" fill="#101828">Simple prismatique</text>
        <line x1="14" y1="170" x2="186" y2="170" stroke="#12a065" stroke-width="3"/>
        <rect x="16" y="98" width="34" height="72" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="33" cy="152" rx="8" ry="10" fill="#175cd3"/>
        <rect x="60" y="98" width="34" height="72" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="77" cy="152" rx="8" ry="10" fill="#175cd3"/>
        <rect x="104" y="98" width="34" height="72" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="121" cy="152" rx="8" ry="10" fill="#175cd3"/>
        <rect x="148" y="98" width="34" height="72" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="165" cy="152" rx="8" ry="10" fill="#175cd3"/>
        <line x1="18" y1="98" x2="18" y2="90" stroke="#7c4df5" stroke-width="1.6"/>
        <line x1="24" y1="98" x2="24" y2="90" stroke="#7c4df5" stroke-width="1.6"/>
        <line x1="30" y1="98" x2="30" y2="90" stroke="#7c4df5" stroke-width="1.6"/>
        <text x="54" y="88" font-size="9.5" fill="#7c4df5">plateau strié</text>
        <text x="14" y="214" font-size="11" fill="#475467">Ex. : muqueuse de</text>
        <text x="14" y="228" font-size="11" fill="#475467">l’intestin grêle</text>
      </g>

      <!-- 4. Pseudostratifié cilié -->
      <g transform="translate(700,90)">
        <rect x="0" y="0" width="200" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="182" cy="20" r="13" fill="#175cd3" opacity="0.16"/>
        <text x="178" y="25" font-size="12" font-weight="700" fill="#175cd3">4</text>
        <text x="14" y="26" font-size="13" font-weight="600" fill="#101828">Pseudostratifié cilié</text>
        <line x1="14" y1="170" x2="186" y2="170" stroke="#12a065" stroke-width="3"/>
        <rect x="16" y="90" width="30" height="80" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="31" cy="150" r="7" fill="#175cd3"/>
        <rect x="50" y="100" width="28" height="70" fill="#e5f4ee" stroke="#12a065"/>
        <circle cx="64" cy="145" r="6" fill="#12a065"/>
        <rect x="82" y="90" width="30" height="80" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="97" cy="130" r="7" fill="#175cd3"/>
        <rect x="116" y="90" width="30" height="80" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="131" cy="155" r="7" fill="#175cd3"/>
        <rect x="150" y="98" width="30" height="72" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="165" cy="140" r="7" fill="#175cd3"/>
        <line x1="18" y1="90" x2="16" y2="80" stroke="#101828" stroke-width="1.4"/>
        <line x1="24" y1="90" x2="24" y2="79" stroke="#101828" stroke-width="1.4"/>
        <line x1="30" y1="90" x2="32" y2="79" stroke="#101828" stroke-width="1.4"/>
        <line x1="86" y1="90" x2="84" y2="80" stroke="#101828" stroke-width="1.4"/>
        <line x1="92" y1="90" x2="92" y2="79" stroke="#101828" stroke-width="1.4"/>
        <line x1="98" y1="90" x2="100" y2="79" stroke="#101828" stroke-width="1.4"/>
        <line x1="120" y1="90" x2="118" y2="80" stroke="#101828" stroke-width="1.4"/>
        <line x1="126" y1="90" x2="126" y2="79" stroke="#101828" stroke-width="1.4"/>
        <line x1="132" y1="90" x2="134" y2="79" stroke="#101828" stroke-width="1.4"/>
        <text x="14" y="214" font-size="11" fill="#475467">Ex. : muqueuse</text>
        <text x="14" y="228" font-size="11" fill="#475467">respiratoire (trachée)</text>
      </g>

      <!-- ===== RANGÉE 2 : épithéliums stratifiés ===== -->

      <!-- 5. Stratifié pavimenteux non kératinisé -->
      <g transform="translate(30,380)">
        <rect x="0" y="0" width="260" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="240" cy="20" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="236" y="25" font-size="12" font-weight="700" fill="#e0632f">5</text>
        <text x="14" y="26" font-size="13" font-weight="600" fill="#101828">Stratifié pavimenteux non kératinisé</text>
        <line x1="14" y1="188" x2="246" y2="188" stroke="#12a065" stroke-width="3"/>
        <rect x="18" y="165" width="30" height="23" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="33" cy="176" r="6" fill="#e0632f"/>
        <rect x="52" y="165" width="30" height="23" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="67" cy="176" r="6" fill="#e0632f"/>
        <rect x="86" y="165" width="30" height="23" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="101" cy="176" r="6" fill="#e0632f"/>
        <text x="122" y="180" font-size="9.5" fill="#e0632f">assise basale</text>
        <polygon points="20,120 40,116 58,124 56,144 38,150 18,142" fill="#e8ecff" stroke="#7c4df5"/>
        <circle cx="38" cy="132" r="6" fill="#7c4df5"/>
        <polygon points="54,118 74,114 92,122 90,142 72,148 52,140" fill="#e8ecff" stroke="#7c4df5"/>
        <circle cx="72" cy="130" r="6" fill="#7c4df5"/>
        <polygon points="88,120 108,116 126,124 124,144 106,150 86,142" fill="#e8ecff" stroke="#7c4df5"/>
        <circle cx="106" cy="132" r="6" fill="#7c4df5"/>
        <text x="132" y="132" font-size="9.5" fill="#7c4df5">corps muqueux</text>
        <ellipse cx="38" cy="100" rx="20" ry="8" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="38" cy="100" rx="9" ry="3.5" fill="#175cd3"/>
        <ellipse cx="80" cy="100" rx="20" ry="8" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="80" cy="100" rx="9" ry="3.5" fill="#175cd3"/>
        <ellipse cx="122" cy="100" rx="20" ry="8" fill="#cfe3ff" stroke="#175cd3"/>
        <ellipse cx="122" cy="100" rx="9" ry="3.5" fill="#175cd3"/>
        <text x="150" y="104" font-size="9.5" fill="#175cd3">superficie aplatie</text>
        <text x="150" y="116" font-size="9.5" fill="#175cd3">mais nucléée</text>
        <text x="14" y="212" font-size="11" fill="#475467">Ex. : œsophage, vagin, cornée</text>
      </g>

      <!-- 6. Stratifié pavimenteux kératinisé -->
      <g transform="translate(330,380)">
        <rect x="0" y="0" width="260" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="240" cy="20" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="236" y="25" font-size="12" font-weight="700" fill="#e0632f">6</text>
        <text x="14" y="26" font-size="13" font-weight="600" fill="#101828">Stratifié pavimenteux kératinisé</text>
        <line x1="14" y1="196" x2="246" y2="196" stroke="#12a065" stroke-width="3"/>
        <rect x="18" y="176" width="28" height="20" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="32" cy="186" r="5.5" fill="#e0632f"/>
        <rect x="50" y="176" width="28" height="20" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="64" cy="186" r="5.5" fill="#e0632f"/>
        <text x="84" y="190" font-size="9" fill="#e0632f">basale</text>
        <polygon points="20,140 38,136 54,144 52,162 36,168 18,160" fill="#e8ecff" stroke="#7c4df5"/>
        <circle cx="36" cy="150" r="5.5" fill="#7c4df5"/>
        <polygon points="52,138 70,134 86,142 84,160 68,166 50,158" fill="#e8ecff" stroke="#7c4df5"/>
        <circle cx="68" cy="148" r="5.5" fill="#7c4df5"/>
        <text x="92" y="150" font-size="9" fill="#7c4df5">spineuse</text>
        <rect x="18" y="112" width="60" height="18" fill="#fef3c7" stroke="#c4930b"/>
        <circle cx="34" cy="121" r="2.4" fill="#c4930b"/>
        <circle cx="48" cy="121" r="2.4" fill="#c4930b"/>
        <circle cx="62" cy="121" r="2.4" fill="#c4930b"/>
        <text x="84" y="126" font-size="9" fill="#c4930b">granuleuse</text>
        <rect x="18" y="86" width="60" height="20" fill="#fbe4d5" stroke="#e0632f" stroke-dasharray="3 2"/>
        <rect x="18" y="72" width="60" height="10" fill="#fbe4d5" stroke="#e0632f" stroke-dasharray="3 2"/>
        <text x="84" y="92" font-size="9" fill="#e0632f">couche cornée</text>
        <text x="84" y="104" font-size="9" fill="#e0632f">(anucléée)</text>
        <text x="14" y="216" font-size="11" fill="#475467">Ex. : épiderme cutané</text>
      </g>

      <!-- 7. Urothélium -->
      <g transform="translate(630,380)">
        <rect x="0" y="0" width="260" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="240" cy="20" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="236" y="25" font-size="12" font-weight="700" fill="#e0632f">7</text>
        <text x="14" y="26" font-size="13" font-weight="600" fill="#101828">Urothélium (transitionnel)</text>
        <line x1="14" y1="188" x2="246" y2="188" stroke="#12a065" stroke-width="3"/>
        <rect x="18" y="164" width="30" height="24" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="33" cy="176" r="6" fill="#e0632f"/>
        <rect x="52" y="164" width="30" height="24" fill="#ffe3d1" stroke="#e0632f"/>
        <circle cx="67" cy="176" r="6" fill="#e0632f"/>
        <text x="88" y="180" font-size="9.5" fill="#e0632f">basale</text>
        <polygon points="20,120 44,114 62,124 58,150 36,158 18,146" fill="#e8ecff" stroke="#7c4df5"/>
        <circle cx="38" cy="134" r="6" fill="#7c4df5"/>
        <polygon points="58,118 82,112 100,122 96,148 74,156 56,144" fill="#e8ecff" stroke="#7c4df5"/>
        <circle cx="76" cy="132" r="6" fill="#7c4df5"/>
        <text x="106" y="132" font-size="9.5" fill="#7c4df5">intermédiaire (en poire)</text>
        <ellipse cx="60" cy="96" rx="46" ry="20" fill="#cfe3ff" stroke="#175cd3"/>
        <circle cx="48" cy="94" r="5.5" fill="#175cd3"/>
        <circle cx="72" cy="98" r="5.5" fill="#175cd3"/>
        <text x="114" y="92" font-size="9.5" fill="#175cd3">cellule-parapluie,</text>
        <text x="114" y="104" font-size="9.5" fill="#175cd3">binucléée, en dôme</text>
        <text x="14" y="212" font-size="11" fill="#475467">Ex. : vessie, uretère, bassinet</text>
      </g>

      <text x="40" y="654" font-size="12.5" fill="#475467">Toute cellule épithéliale repose, directement ou indirectement, sur la lame basale (8) ; le tissu conjonctif sous-jacent</text>
      <text x="40" y="672" font-size="12.5" fill="#475467">n’est jamais vascularisé à l’intérieur de l’épithélium : sa nutrition se fait par diffusion depuis le chorion.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Épithélium simple pavimenteux : une seule assise de cellules très aplaties.' },
    { ref: '2', texte: 'Épithélium simple cubique : une seule assise de cellules aussi hautes que larges, noyau rond central.' },
    { ref: '3', texte: 'Épithélium simple prismatique : cellules hautes à noyau basal, souvent munies d’un plateau strié.' },
    { ref: '4', texte: 'Épithélium pseudostratifié cilié : toutes les cellules reposent sur la lame basale mais leurs noyaux sont à des hauteurs différentes, donnant une fausse impression de plusieurs assises.' },
    { ref: '5', texte: 'Épithélium stratifié pavimenteux non kératinisé : plusieurs assises, cellules superficielles aplaties mais encore nucléées ; protège des frottements en milieu humide.' },
    { ref: '6', texte: 'Épithélium stratifié pavimenteux kératinisé : couche cornée superficielle faite de cellules mortes anucléées riches en kératine.' },
    { ref: '7', texte: 'Urothélium (épithélium transitionnel) : cellules superficielles en dôme qui s’aplatissent lors de la distension de l’organe.' },
    { ref: '8', texte: 'Lame basale : structure acellulaire commune à tous les épithéliums, séparant l’épithélium du tissu conjonctif.' },
  ],
};
