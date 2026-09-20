import type { Schema } from '../../types';

export const schemaTestsHypotheses: Schema = {
  id: 'ue4-tests-hypotheses',
  ue: 'ue4',
  titre: 'Le raisonnement du test statistique',
  description:
    'Hypothèses nulle et alternative, distributions de la statistique de test sous chacune d’elles, zone de rejet, risques alpha et bêta, puissance, et tableau des quatre issues possibles d’un test.',
  categorie: 'Biostatistiques',
  viewBox: '0 0 920 660',
  ficheLiee: 'ue4-tests-hypotheses',
  motsCles: ['test statistique', 'hypothèse nulle', 'hypothèse alternative', 'risque alpha', 'risque bêta', 'puissance', 'zone de rejet'],
  svg: `
    <rect x="0" y="0" width="920" height="660" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Le raisonnement du test statistique</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau A : distributions sous H0 et H1 -->
      <g transform="translate(40,64)">
        <rect x="0" y="0" width="840" height="310" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Distributions de la statistique de test sous H0 et sous H1</text>

        <g transform="translate(220,40)">
          <path d="M 0.0 124.9 L 4.0 123.4 L 8.0 121.7 L 12.0 119.6 L 16.0 117.1 L 20.0 114.2 L 24.0 110.8 L 28.0 106.8 L 32.0 102.4 L 36.0 97.5 L 40.0 92.0 L 44.0 86.1 L 48.0 79.7 L 52.0 73.0 L 56.0 66.1 L 60.0 59.0 L 64.0 52.0 L 68.0 45.0 L 72.0 38.4 L 76.0 32.3 L 80.0 26.7 L 84.0 22.0 L 88.0 18.1 L 92.0 15.3 L 96.0 13.6 L 100.0 13.0 L 104.0 13.6 L 108.0 15.3 L 112.0 18.1 L 116.0 22.0 L 120.0 26.7 L 124.0 32.3 L 128.0 38.4 L 132.0 45.0 L 136.0 52.0 L 140.0 59.0 L 144.0 66.1 L 148.0 73.0 L 152.0 79.7 L 156.0 86.1 L 160.0 92.0 L 164.0 97.5 L 168.0 102.4 L 172.0 106.8 L 176.0 110.8 L 180.0 114.2 L 184.0 117.1 L 188.0 119.6 L 192.0 121.7 L 196.0 123.4 L 200.0 124.9 L 204.0 126.0 L 208.0 126.9 L 212.0 127.7 L 216.0 128.3 L 220.0 128.7 L 224.0 129.0 L 228.0 129.3 L 232.0 129.5 L 236.0 129.6 L 240.0 129.7 L 244.0 129.8 L 248.0 129.9 L 252.0 129.9 L 256.0 129.9 L 260.0 130.0 L 400.0 130.0"
                fill="none" stroke="#175cd3" stroke-width="2.4"/>
          <path d="M 0.0 130.0 L 100.0 130.0 L 104.0 129.9 L 108.0 129.9 L 112.0 129.9 L 116.0 129.8 L 120.0 129.7 L 124.0 129.6 L 128.0 129.5 L 132.0 129.3 L 136.0 129.0 L 140.0 128.7 L 144.0 128.3 L 148.0 127.7 L 152.0 126.9 L 156.0 126.0 L 160.0 124.9 L 164.0 123.4 L 168.0 121.7 L 172.0 119.6 L 176.0 117.1 L 180.0 114.2 L 184.0 110.8 L 188.0 106.8 L 192.0 102.4 L 196.0 97.5 L 200.0 92.0 L 204.0 86.1 L 208.0 79.7 L 212.0 73.0 L 216.0 66.1 L 220.0 59.0 L 224.0 52.0 L 228.0 45.0 L 232.0 38.4 L 236.0 32.3 L 240.0 26.7 L 244.0 22.0 L 248.0 18.1 L 252.0 15.3 L 256.0 13.6 L 260.0 13.0 L 264.0 13.6 L 268.0 15.3 L 272.0 18.1 L 276.0 22.0 L 280.0 26.7 L 284.0 32.3 L 288.0 38.4 L 292.0 45.0 L 296.0 52.0 L 300.0 59.0 L 304.0 66.1 L 308.0 73.0 L 312.0 79.7 L 316.0 86.1 L 320.0 92.0 L 324.0 97.5 L 328.0 102.4 L 332.0 106.8 L 336.0 110.8 L 340.0 114.2 L 344.0 117.1 L 348.0 119.6 L 352.0 121.7 L 356.0 123.4 L 360.0 124.9 L 364.0 126.0 L 368.0 126.9 L 372.0 127.7 L 376.0 128.3 L 380.0 128.7 L 384.0 129.0 L 388.0 129.3 L 392.0 129.5 L 396.0 129.6 L 400.0 129.7"
                fill="none" stroke="#e0632f" stroke-width="2.4"/>

          <!-- risque alpha : queue de H0 au-delà du seuil -->
          <path d="M 190.0 130.0 L 190.0 120.7 L 196.0 123.4 L 202.0 125.5 L 208.0 126.9 L 214.0 128.0 L 220.0 128.7 L 226.0 129.2 L 232.0 129.5 L 238.0 129.7 L 244.0 129.8 L 250.0 129.9 L 256.0 129.9 L 262.0 130.0 L 400.0 130.0 Z"
                fill="#175cd3" opacity="0.35"/>
          <!-- risque bêta : queue de H1 en-deçà du seuil -->
          <path d="M 0.0 130.0 L 102.0 130.0 L 108.0 129.9 L 114.0 129.9 L 120.0 129.7 L 126.0 129.6 L 132.0 129.3 L 138.0 128.9 L 144.0 128.3 L 150.0 127.3 L 156.0 126.0 L 162.0 124.2 L 168.0 121.7 L 174.0 118.4 L 180.0 114.2 L 186.0 108.9 L 190.0 104.7 L 190.0 130.0 Z"
                fill="#e0632f" opacity="0.32"/>

          <line x1="0" y1="130" x2="400" y2="130" stroke="#475467" stroke-width="1.6"/>
          <text x="404" y="134" font-size="11.5" fill="#475467">statistique de test</text>

          <line x1="190" y1="4" x2="190" y2="140" stroke="#101828" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="196" y="0" font-size="11.5" font-weight="600" fill="#101828">seuil critique</text>
          <circle cx="190" cy="16" r="13" fill="#101828" opacity="0.16"/>
          <text x="185" y="21" font-size="12" font-weight="700" fill="#101828">5</text>

          <text x="88" y="10" font-size="13" font-weight="600" fill="#175cd3">H0</text>
          <circle cx="100" cy="4" r="12" fill="#175cd3" opacity="0.2"/>
          <text x="96" y="9" font-size="11" font-weight="700" fill="#175cd3">1</text>
          <circle cx="100" cy="38" r="11" fill="#175cd3" opacity="0.28"/>
          <text x="96" y="42" font-size="10.5" font-weight="700" fill="#175cd3">3</text>

          <text x="248" y="10" font-size="13" font-weight="600" fill="#e0632f">H1</text>
          <circle cx="260" cy="4" r="12" fill="#e0632f" opacity="0.2"/>
          <text x="256" y="9" font-size="11" font-weight="700" fill="#e0632f">2</text>
          <circle cx="260" cy="38" r="11" fill="#e0632f" opacity="0.28"/>
          <text x="256" y="42" font-size="10.5" font-weight="700" fill="#e0632f">4</text>

          <text x="150" y="150" font-size="11" font-weight="600" fill="#175cd3">α</text>
          <circle cx="220" cy="150" r="12" fill="#175cd3" opacity="0.3"/>
          <text x="216" y="155" font-size="11" font-weight="700" fill="#175cd3">6</text>
          <text x="238" y="150" font-size="10.5" fill="#175cd3">risque de 1ʳᵉ espèce</text>

          <circle cx="120" cy="150" r="12" fill="#e0632f" opacity="0.28"/>
          <text x="116" y="155" font-size="11" font-weight="700" fill="#e0632f">7</text>
          <text x="0" y="150" font-size="10.5" fill="#e0632f">β : risque de 2ᵉ espèce</text>

          <text x="290" y="166" font-size="10.5" fill="#0f8a58">puissance = 1 − β (aire de H1 au-delà du seuil)</text>
          <circle cx="280" cy="160" r="12" fill="#12a065" opacity="0.24"/>
          <text x="276" y="165" font-size="11" font-weight="700" fill="#0f8a58">8</text>
        </g>

        <text x="20" y="258" font-size="11.5" fill="#475467">Zone de non-rejet de H0</text>
        <text x="600" y="258" font-size="11.5" font-weight="600" fill="#101828">Zone de rejet de H0</text>
        <circle cx="586" cy="253" r="12" fill="#101828" opacity="0.14"/>
        <text x="582" y="258" font-size="11" font-weight="700" fill="#101828">9</text>
        <defs>
          <marker id="ue4-testh-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
          </marker>
        </defs>
        <line x1="150" y1="272" x2="30" y2="272" stroke="#101828" stroke-width="1.4" marker-end="url(#ue4-testh-fl)"/>
        <line x1="590" y1="272" x2="780" y2="272" stroke="#101828" stroke-width="1.4" marker-end="url(#ue4-testh-fl)"/>
      </g>

      <!-- Panneau B : tableau des quatre issues -->
      <g transform="translate(40,394)">
        <rect x="0" y="0" width="840" height="230" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Les quatre issues possibles du test</text>
        <circle cx="700" cy="20" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="694" y="25" font-size="12" font-weight="700" fill="#e0632f">10</text>

        <line x1="240" y1="50" x2="240" y2="200" stroke="#f3d3c2" stroke-width="1.4"/>
        <line x1="540" y1="50" x2="540" y2="200" stroke="#f3d3c2" stroke-width="1.4"/>
        <line x1="20" y1="90" x2="820" y2="90" stroke="#f3d3c2" stroke-width="1.4"/>
        <line x1="20" y1="145" x2="820" y2="145" stroke="#f3d3c2" stroke-width="1.4"/>

        <text x="280" y="72" font-size="12.5" font-weight="600" fill="#101828">Réalité : H0 vraie</text>
        <text x="580" y="72" font-size="12.5" font-weight="600" fill="#101828">Réalité : H0 fausse</text>

        <text x="30" y="122" font-size="12.5" font-weight="600" fill="#101828">Test : ne rejette pas H0</text>
        <text x="270" y="118" font-size="12" fill="#0f8a58">Décision correcte</text>
        <text x="270" y="136" font-size="11.5" fill="#475467">probabilité 1 − α</text>
        <text x="570" y="118" font-size="12" fill="#d4380d">Erreur de 2ᵉ espèce</text>
        <text x="570" y="136" font-size="11.5" fill="#475467">probabilité β</text>

        <text x="30" y="177" font-size="12.5" font-weight="600" fill="#101828">Test : rejette H0</text>
        <text x="270" y="173" font-size="12" fill="#d4380d">Erreur de 1ʳᵉ espèce</text>
        <text x="270" y="191" font-size="11.5" fill="#475467">probabilité α</text>
        <text x="570" y="173" font-size="12" fill="#0f8a58">Décision correcte</text>
        <text x="570" y="191" font-size="11.5" fill="#475467">probabilité 1 − β (puissance)</text>

        <text x="20" y="216" font-size="10.5" fill="#8a94a8">α est fixé a priori par l’expérimentateur (souvent 5 %) ; β dépend de la taille d’effet, de l’échantillon et de α.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'H0, hypothèse nulle : hypothèse d’absence d’effet ou d’absence de différence, que l’on cherche à réfuter.' },
    { ref: '2', texte: 'H1, hypothèse alternative : hypothèse d’existence d’un effet ou d’une différence.' },
    { ref: '3', texte: 'Distribution de la statistique de test si H0 est vraie.' },
    { ref: '4', texte: 'Distribution de la statistique de test si H1 est vraie (déplacée par la taille d’effet réelle).' },
    { ref: '5', texte: 'Seuil critique (valeur-seuil) qui sépare la zone de non-rejet et la zone de rejet de H0.' },
    { ref: '6', texte: 'Risque alpha (erreur de 1ʳᵉ espèce) : probabilité de rejeter H0 à tort ; il est fixé a priori, classiquement à 5 %.' },
    { ref: '7', texte: 'Risque bêta (erreur de 2ᵉ espèce) : probabilité de ne pas rejeter H0 à tort, alors que H1 est vraie.' },
    { ref: '8', texte: 'Puissance du test = 1 − β : probabilité de détecter un effet réellement présent.' },
    { ref: '9', texte: 'Zone de rejet de H0 : ensemble des valeurs de la statistique de test au-delà du seuil, qui conduisent à rejeter H0.' },
    { ref: '10', texte: 'Tableau croisant la décision du test et la réalité inconnue, qui résume les quatre issues possibles.' },
  ],
};
