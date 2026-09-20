import type { Schema } from '../../types';

export const schemaIntervalleConfiance: Schema = {
  id: 'ue4-intervalle-confiance',
  ue: 'ue4',
  titre: 'Fluctuation d’échantillonnage et intervalle de confiance',
  description:
    'Distribution des moyennes d’échantillons répétés, formule de l’intervalle de confiance à 95 %, effet de la taille de l’échantillon sur sa précision, et distinction entre interprétation correcte et interprétation fautive.',
  categorie: 'Biostatistiques',
  viewBox: '0 0 920 700',
  ficheLiee: 'ue4-intervalles-confiance',
  motsCles: ['fluctuation d’échantillonnage', 'intervalle de confiance', 'erreur standard', 'précision', 'estimation'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Fluctuation d’échantillonnage et intervalle de confiance</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau A : distribution d'échantillonnage -->
      <g transform="translate(40,64)">
        <rect x="0" y="0" width="840" height="220" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">De la population aux échantillons</text>

        <circle cx="100" cy="110" r="52" fill="#dbe6ff" stroke="#175cd3" stroke-width="2"/>
        <text x="62" y="106" font-size="12" font-weight="600" fill="#101828">Population</text>
        <text x="66" y="124" font-size="12" fill="#475467">moyenne μ</text>
        <circle cx="140" cy="70" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="135" y="75" font-size="12" font-weight="700" fill="#175cd3">1</text>

        <defs>
          <marker id="ue4-ic-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#475467"/>
          </marker>
        </defs>
        <line x1="158" y1="90" x2="220" y2="60" stroke="#475467" stroke-width="1.6" marker-end="url(#ue4-ic-fl)"/>
        <line x1="158" y1="110" x2="220" y2="110" stroke="#475467" stroke-width="1.6" marker-end="url(#ue4-ic-fl)"/>
        <line x1="158" y1="130" x2="220" y2="160" stroke="#475467" stroke-width="1.6" marker-end="url(#ue4-ic-fl)"/>
        <text x="150" y="46" font-size="10.5" fill="#475467">échantillons aléatoires répétés</text>

        <g fill="#e0632f">
          <circle cx="250" cy="52" r="16"/><circle cx="250" cy="108" r="16"/><circle cx="250" cy="164" r="16"/>
        </g>
        <text x="242" y="56" font-size="10" fill="#ffffff">x̄₁</text>
        <text x="242" y="112" font-size="10" fill="#ffffff">x̄₂</text>
        <text x="242" y="168" font-size="10" fill="#ffffff">x̄₃</text>
        <circle cx="268" cy="34" r="13" fill="#e0632f" opacity="0.22"/>
        <text x="263" y="39" font-size="12" font-weight="700" fill="#e0632f">2</text>

        <line x1="286" y1="52" x2="330" y2="90" stroke="#475467" stroke-width="1.2" stroke-dasharray="2 3"/>
        <line x1="286" y1="108" x2="330" y2="105" stroke="#475467" stroke-width="1.2" stroke-dasharray="2 3"/>
        <line x1="286" y1="164" x2="330" y2="120" stroke="#475467" stroke-width="1.2" stroke-dasharray="2 3"/>

        <g transform="translate(340,40)">
          <path d="M 0.0 124.9 L 8.0 121.7 L 16.0 117.1 L 24.0 110.8 L 32.0 102.4 L 40.0 92.0 L 48.0 79.7 L 56.0 66.1 L 64.0 52.0 L 72.0 38.4 L 80.0 26.7 L 88.0 18.1 L 96.0 13.6 L 104.0 13.6 L 112.0 18.1 L 120.0 26.7 L 128.0 38.4 L 136.0 52.0 L 144.0 66.1 L 152.0 79.7 L 160.0 92.0 L 168.0 102.4 L 176.0 110.8 L 184.0 117.1 L 192.0 121.7 L 200.0 124.9"
                fill="none" stroke="#12a065" stroke-width="2.4" transform="translate(0,0) scale(2.3,1)"/>
          <line x1="0" y1="130" x2="460" y2="130" stroke="#475467" stroke-width="1.4"/>
          <line x1="230" y1="0" x2="230" y2="140" stroke="#101828" stroke-width="1.4" stroke-dasharray="3 3"/>
          <text x="216" y="-6" font-size="11" font-weight="600" fill="#101828">μ</text>
          <text x="180" y="150" font-size="11.5" font-weight="600" fill="#101828">Distribution des moyennes d’échantillon x̄</text>
          <circle cx="380" cy="60" r="13" fill="#12a065" opacity="0.22"/>
          <text x="375" y="65" font-size="12" font-weight="700" fill="#12a065">3</text>
          <text x="316" y="46" font-size="10.5" fill="#0f8a58">écart type = erreur standard σ/√n</text>
        </g>
      </g>

      <!-- Panneau B : formule -->
      <g transform="translate(40,300)">
        <rect x="0" y="0" width="400" height="200" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Intervalle de confiance à 95 %</text>
        <circle cx="374" cy="20" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="369" y="25" font-size="12" font-weight="700" fill="#e0632f">4</text>

        <rect x="20" y="42" width="360" height="50" rx="10" fill="#ffffff" stroke="#f3d3c2"/>
        <text x="32" y="74" font-size="16.5" font-weight="700" fill="#101828">IC95% = x̄ ± 1,96 · s/√n</text>

        <text x="20" y="116" font-size="12" fill="#475467">x̄ : moyenne observée dans l’échantillon</text>
        <text x="20" y="136" font-size="12" fill="#475467">s : écart type observé dans l’échantillon</text>
        <text x="20" y="156" font-size="12" fill="#475467">n : taille de l’échantillon</text>
        <text x="20" y="176" font-size="12" fill="#475467">1,96 : valeur de la loi normale centrée réduite</text>
        <text x="40" y="192" font-size="11" fill="#8a94a8">laissant 2,5 % dans chaque queue</text>
      </g>

      <!-- Panneau C : effet de n -->
      <g transform="translate(480,300)">
        <rect x="0" y="0" width="400" height="200" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Effet de la taille d’échantillon</text>
        <circle cx="374" cy="20" r="13" fill="#12a065" opacity="0.2"/>
        <text x="369" y="25" font-size="12" font-weight="700" fill="#12a065">5</text>

        <line x1="200" y1="50" x2="200" y2="170" stroke="#98a2b3" stroke-width="1.4" stroke-dasharray="3 3"/>
        <line x1="90" y1="70" x2="310" y2="70" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>
        <text x="150" y="60" font-size="11" fill="#175cd3">n petit → IC large</text>
        <line x1="140" y1="120" x2="260" y2="120" stroke="#12a065" stroke-width="6" stroke-linecap="round"/>
        <text x="150" y="110" font-size="11" fill="#0f8a58">n grand → IC étroit</text>
        <circle cx="120" cy="120" r="12" fill="#12a065" opacity="0.24"/>
        <text x="116" y="124" font-size="11" font-weight="700" fill="#0f8a58">6</text>
        <text x="60" y="160" font-size="11" fill="#475467">Plus n augmente, plus l’erreur standard s/√n</text>
        <text x="60" y="178" font-size="11" fill="#475467">diminue et plus l’estimation est précise.</text>
      </g>

      <!-- Panneau D : interprétation -->
      <g transform="translate(40,516)">
        <rect x="0" y="0" width="840" height="164" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Interpréter l’intervalle de confiance</text>

        <rect x="20" y="42" width="390" height="102" rx="10" fill="#eefaf3" stroke="#bfe8cf"/>
        <circle cx="44" cy="62" r="13" fill="#12a065" opacity="0.24"/>
        <text x="39" y="67" font-size="12" font-weight="700" fill="#0f8a58">7</text>
        <text x="60" y="60" font-size="12.5" font-weight="600" fill="#0f8a58">Interprétation correcte</text>
        <text x="32" y="82" font-size="11.5" fill="#475467">Si l’on répétait l’échantillonnage un grand nombre</text>
        <text x="32" y="100" font-size="11.5" fill="#475467">de fois, 95 % des intervalles ainsi calculés</text>
        <text x="32" y="118" font-size="11.5" fill="#475467">contiendraient la vraie valeur μ de la population.</text>
        <text x="32" y="136" font-size="11.5" fill="#475467">L’IC quantifie la précision de l’estimation.</text>

        <rect x="430" y="42" width="390" height="102" rx="10" fill="#fff1ef" stroke="#f3c8c2"/>
        <circle cx="454" cy="62" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="449" y="67" font-size="12" font-weight="700" fill="#d4380d">8</text>
        <text x="470" y="60" font-size="12.5" font-weight="600" fill="#d4380d">Interprétation fautive</text>
        <text x="442" y="82" font-size="11.5" fill="#475467">Dire qu’« il y a 95 % de chances que μ soit</text>
        <text x="442" y="100" font-size="11.5" fill="#475467">dans cet intervalle » : μ est une constante fixe,</text>
        <text x="442" y="118" font-size="11.5" fill="#475467">non une variable aléatoire ; c’est l’intervalle,</text>
        <text x="442" y="136" font-size="11.5" fill="#475467">d’un échantillon à l’autre, qui varie.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Population source, de moyenne μ inconnue, dont on cherche à estimer un paramètre.' },
    { ref: '2', texte: 'Échantillons aléatoires successifs, de même taille n, tirés dans la population : leurs moyennes x̄ varient d’un échantillon à l’autre (fluctuation d’échantillonnage).' },
    { ref: '3', texte: 'Distribution d’échantillonnage des moyennes : elle se centre autour de μ, avec un écart type appelé erreur standard, égal à σ/√n.' },
    { ref: '4', texte: 'Formule de l’intervalle de confiance à 95 % d’une moyenne, construit à partir de la moyenne observée et de l’erreur standard.' },
    { ref: '5', texte: 'La largeur de l’intervalle de confiance dépend directement de la taille de l’échantillon n.' },
    { ref: '6', texte: 'Un échantillon plus grand diminue l’erreur standard et resserre l’intervalle de confiance, donc améliore la précision de l’estimation.' },
    { ref: '7', texte: 'Interprétation fréquentiste correcte : c’est la procédure de construction, répétée sur de nombreux échantillons, qui capture μ dans 95 % des cas.' },
    { ref: '8', texte: 'Erreur fréquente à éviter : pour un intervalle déjà calculé, μ y est ou n’y est pas ; il n’y a pas de probabilité attachée à cet intervalle particulier.' },
  ],
};
