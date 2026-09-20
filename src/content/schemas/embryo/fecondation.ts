import type { Schema } from '../../types';

export const schemaFecondation: Schema = {
  id: 'embryo-fecondation',
  ue: 'embryo',
  titre: 'Les étapes de la fécondation',
  description:
    'De la capacitation du spermatozoïde à l’amphimixie : traversée de la corona radiata, réaction acrosomique, fusion des membranes, blocage de la polyspermie, achèvement de la méiose ovocytaire et formation des pronuclei.',
  categorie: 'Fécondation',
  viewBox: '0 0 920 600',
  ficheLiee: 'embryo-fecondation',
  motsCles: [
    'capacitation',
    'corona radiata',
    'réaction acrosomique',
    'zone pellucide',
    'blocage de la polyspermie',
    'pronucleus',
    'amphimixie',
    'zygote',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="600" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="36" font-size="19" font-weight="600" fill="#101828">Les étapes de la fécondation</text>
      <line x1="40" y1="48" x2="200" y2="48" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panel 1 : Capacitation -->
      <g transform="translate(40,80)">
        <rect x="0" y="0" width="205" height="220" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="187" cy="18" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="183" y="23" font-size="12" font-weight="700" fill="#175cd3">1</text>
        <text x="14" y="24" font-size="12.5" font-weight="600" fill="#101828">Capacitation</text>
        <ellipse cx="100" cy="110" rx="20" ry="13" fill="#eaf2ff" stroke="#175cd3" stroke-width="1.6"/>
        <line x1="118" y1="110" x2="170" y2="110" stroke="#101828" stroke-width="2"/>
        <path d="M170,110 q10,-6 16,0 q-10,6 -16,0" fill="none" stroke="#101828" stroke-width="1.6"/>
        <circle cx="86" cy="96" r="2.2" fill="#7c4df5"/>
        <circle cx="80" cy="108" r="2.2" fill="#7c4df5"/>
        <circle cx="84" cy="122" r="2.2" fill="#7c4df5"/>
        <line x1="86" y1="96" x2="72" y2="86" stroke="#7c4df5" stroke-width="1"/>
        <line x1="80" y1="108" x2="62" y2="106" stroke="#7c4df5" stroke-width="1"/>
        <line x1="84" y1="122" x2="70" y2="130" stroke="#7c4df5" stroke-width="1"/>
        <text x="14" y="168" font-size="10.5" fill="#475467">Voies génitales féminines :</text>
        <text x="14" y="184" font-size="10.5" fill="#475467">perte du glycocalyx et du</text>
        <text x="14" y="200" font-size="10.5" fill="#475467">cholestérol membranaire.</text>
      </g>

      <!-- Panel 2 : traversée de la corona radiata -->
      <g transform="translate(255,80)">
        <rect x="0" y="0" width="205" height="220" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="187" cy="18" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="183" y="23" font-size="12" font-weight="700" fill="#175cd3">2</text>
        <text x="14" y="24" font-size="12" font-weight="600" fill="#101828">Corona radiata</text>
        <circle cx="102" cy="120" r="46" fill="#fff6f1" stroke="#e0632f" stroke-width="2"/>
        <circle cx="72" cy="82" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="102" cy="70" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="132" cy="82" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="146" cy="110" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="146" cy="140" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="132" cy="164" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="102" cy="176" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="72" cy="164" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="58" cy="140" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="58" cy="110" r="7" fill="#f6d9c4" stroke="#c98a2f"/>
        <ellipse cx="30" cy="120" rx="10" ry="6" fill="#eaf2ff" stroke="#175cd3"/>
        <line x1="20" y1="120" x2="4" y2="120" stroke="#101828" stroke-width="1.8"/>
        <text x="14" y="192" font-size="10" fill="#475467">Franchissement grâce à la</text>
        <text x="14" y="206" font-size="10" fill="#475467">hyaluronidase de la membrane du spermatozoïde.</text>
      </g>

      <!-- Panel 3 : réaction acrosomique -->
      <g transform="translate(470,80)">
        <rect x="0" y="0" width="205" height="220" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="187" cy="18" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="183" y="23" font-size="12" font-weight="700" fill="#175cd3">3</text>
        <text x="14" y="24" font-size="12" font-weight="600" fill="#101828">Réaction acrosomique</text>
        <circle cx="130" cy="120" r="46" fill="none" stroke="#e0632f" stroke-width="10" opacity="0.35"/>
        <circle cx="130" cy="120" r="40" fill="#fff6f1" stroke="#e0632f" stroke-width="1.6"/>
        <ellipse cx="60" cy="112" rx="18" ry="12" fill="#eaf2ff" stroke="#175cd3" stroke-width="1.6"/>
        <path d="M46,104 q8,-10 22,-4" fill="none" stroke="#7c4df5" stroke-width="1.6"/>
        <circle cx="80" cy="98" r="2" fill="#7c4df5"/>
        <circle cx="86" cy="106" r="2" fill="#7c4df5"/>
        <circle cx="82" cy="116" r="2" fill="#7c4df5"/>
        <text x="14" y="172" font-size="10" fill="#475467">Fixation sur ZP3, exocytose</text>
        <text x="14" y="186" font-size="10" fill="#475467">de l’acrosome : libération</text>
        <text x="14" y="200" font-size="10" fill="#475467">d’enzymes (acrosine) traversant la zone pellucide.</text>
      </g>

      <!-- Panel 4 : fusion des membranes -->
      <g transform="translate(685,80)">
        <rect x="0" y="0" width="205" height="220" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="187" cy="18" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="183" y="23" font-size="12" font-weight="700" fill="#175cd3">4</text>
        <text x="14" y="24" font-size="12" font-weight="600" fill="#101828">Fusion des membranes</text>
        <circle cx="120" cy="120" r="46" fill="#fff6f1" stroke="#e0632f" stroke-width="1.6"/>
        <ellipse cx="82" cy="120" rx="16" ry="11" fill="#eaf2ff" stroke="#175cd3" stroke-width="1.8"/>
        <line x1="96" y1="120" x2="120" y2="120" stroke="#7c4df5" stroke-width="3"/>
        <text x="98" y="112" font-size="8" fill="#7c4df5">segment équatorial</text>
        <text x="14" y="172" font-size="10" fill="#475467">La membrane plasmique du</text>
        <text x="14" y="186" font-size="10" fill="#475467">spermatozoïde fusionne avec</text>
        <text x="14" y="200" font-size="10" fill="#475467">l’ovolemme ; le contenu pénètre.</text>
      </g>

      <!-- Panel 5 : blocage de la polyspermie -->
      <g transform="translate(40,320)">
        <rect x="0" y="0" width="205" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="187" cy="18" r="13" fill="#12a065" opacity="0.18"/>
        <text x="181" y="23" font-size="11" font-weight="700" fill="#12a065">5</text>
        <text x="14" y="24" font-size="12" font-weight="600" fill="#101828">Blocage de la polyspermie</text>
        <circle cx="105" cy="122" r="44" fill="none" stroke="#c4930b" stroke-width="8"/>
        <circle cx="105" cy="122" r="34" fill="#fdf7ea" stroke="#e0632f" stroke-width="1.4"/>
        <circle cx="90" cy="98" r="3" fill="#c4930b"/>
        <circle cx="72" cy="118" r="3" fill="#c4930b"/>
        <circle cx="128" cy="92" r="3" fill="#c4930b"/>
        <circle cx="118" cy="146" r="3" fill="#c4930b"/>
        <line x1="90" y1="98" x2="98" y2="86" stroke="#c4930b" stroke-width="1"/>
        <line x1="72" y1="118" x2="62" y2="122" stroke="#c4930b" stroke-width="1"/>
        <ellipse cx="30" cy="70" rx="9" ry="6" fill="#eaf2ff" stroke="#98a2b3"/>
        <line x1="21" y1="70" x2="6" y2="70" stroke="#98a2b3" stroke-width="1.6"/>
        <line x1="26" y1="65" x2="34" y2="75" stroke="#d4380d" stroke-width="2"/>
        <line x1="34" y1="65" x2="26" y2="75" stroke="#d4380d" stroke-width="2"/>
        <text x="14" y="186" font-size="10" fill="#475467">Réaction corticale : exocytose</text>
        <text x="14" y="200" font-size="10" fill="#475467">des granules corticaux, réaction</text>
        <text x="14" y="214" font-size="10" fill="#475467">de zone empêchant tout autre spermatozoïde de se fixer.</text>
      </g>

      <!-- Panel 6 : achèvement de la méiose II -->
      <g transform="translate(255,320)">
        <rect x="0" y="0" width="205" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="187" cy="18" r="13" fill="#12a065" opacity="0.18"/>
        <text x="181" y="23" font-size="11" font-weight="700" fill="#12a065">6</text>
        <text x="14" y="24" font-size="12" font-weight="600" fill="#101828">Fin de la méiose II</text>
        <circle cx="100" cy="130" r="40" fill="#e9f7f0" stroke="#12a065" stroke-width="1.8"/>
        <circle cx="150" cy="102" r="9" fill="#f6d9c4" stroke="#c98a2f"/>
        <text x="150" y="82" font-size="9" fill="#c98a2f">2ᵉ globule polaire</text>
        <circle cx="90" cy="130" r="10" fill="#12a065" opacity="0.7"/>
        <text x="14" y="190" font-size="10" fill="#475467">Entrée du spermatozoïde =</text>
        <text x="14" y="204" font-size="10" fill="#475467">signal (onde calcique) qui</text>
        <text x="14" y="218" font-size="10" fill="#475467">déclenche la fin de la méiose II de l’ovocyte II.</text>
      </g>

      <!-- Panel 7 : pronuclei -->
      <g transform="translate(470,320)">
        <rect x="0" y="0" width="205" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="187" cy="18" r="13" fill="#12a065" opacity="0.18"/>
        <text x="181" y="23" font-size="11" font-weight="700" fill="#12a065">7</text>
        <text x="14" y="24" font-size="12" font-weight="600" fill="#101828">Pronucléus mâle et femelle</text>
        <circle cx="105" cy="130" r="46" fill="#fdfbf4" stroke="#c9bfa1" stroke-width="1.6"/>
        <circle cx="80" cy="120" r="16" fill="#eaf2ff" stroke="#175cd3" stroke-width="1.8"/>
        <circle cx="130" cy="140" r="16" fill="#fff6f1" stroke="#e0632f" stroke-width="1.8"/>
        <line x1="94" y1="128" x2="116" y2="134" stroke="#98a2b3" stroke-width="1.2" stroke-dasharray="2 2"/>
        <text x="60" y="102" font-size="8.5" fill="#175cd3">♀ (n, 2c)</text>
        <text x="118" y="164" font-size="8.5" fill="#e0632f">♂ (n, 2c)</text>
        <text x="14" y="190" font-size="10" fill="#475467">Décondensation des deux</text>
        <text x="14" y="204" font-size="10" fill="#475467">génomes haploïdes, réplication</text>
        <text x="14" y="218" font-size="10" fill="#475467">de l’ADN, migration l’un vers l’autre.</text>
      </g>

      <!-- Panel 8 : amphimixie -->
      <g transform="translate(685,320)">
        <rect x="0" y="0" width="205" height="230" rx="12" fill="#f7f9fc" stroke="#d0d7e2"/>
        <circle cx="187" cy="18" r="13" fill="#12a065" opacity="0.18"/>
        <text x="181" y="23" font-size="11" font-weight="700" fill="#12a065">8</text>
        <text x="14" y="24" font-size="12" font-weight="600" fill="#101828">Amphimixie</text>
        <circle cx="100" cy="128" r="46" fill="#f6f8fd" stroke="#7c4df5" stroke-width="1.8"/>
        <line x1="70" y1="110" x2="130" y2="146" stroke="#101828" stroke-width="1.6"/>
        <line x1="70" y1="146" x2="130" y2="110" stroke="#101828" stroke-width="1.6"/>
        <line x1="100" y1="98" x2="100" y2="158" stroke="#101828" stroke-width="1.6"/>
        <circle cx="100" cy="128" r="3" fill="#e0632f"/>
        <text x="14" y="190" font-size="10" fill="#475467">Réunion des chromosomes</text>
        <text x="14" y="204" font-size="10" fill="#475467">parentaux sur le fuseau de la</text>
        <text x="14" y="218" font-size="10" fill="#475467">1ʳᵉ mitose : formation du zygote (2n), diploïde.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Capacitation : acquisition du pouvoir fécondant dans les voies génitales féminines, avec hyperactivation de la mobilité flagellaire.' },
    { ref: '2', texte: 'Traversée de la corona radiata : le spermatozoïde franchit les cellules folliculaires grâce à la hyaluronidase membranaire.' },
    { ref: '3', texte: 'Réaction acrosomique : fixation sur la zone pellucide (récepteur ZP3), exocytose de l’acrosome et libération d’enzymes protéolytiques.' },
    { ref: '4', texte: 'Fusion des membranes plasmiques : le segment équatorial du spermatozoïde fusionne avec l’ovolemme, permettant l’entrée du contenu spermatique.' },
    { ref: '5', texte: 'Blocage de la polyspermie : réaction corticale puis réaction de zone, empêchant la pénétration d’un second spermatozoïde.' },
    { ref: '6', texte: 'Achèvement de la méiose II de l’ovocyte : déclenché par l’entrée du spermatozoïde, avec expulsion du 2ᵉ globule polaire.' },
    { ref: '7', texte: 'Formation des pronuclei mâle et femelle : décondensation des chromatines, réplication de l’ADN, migration vers le centre de l’ovocyte.' },
    { ref: '8', texte: 'Amphimixie : réunion des chromosomes maternels et paternels sur le fuseau de la première division mitotique, formant le zygote diploïde.' },
  ],
};
