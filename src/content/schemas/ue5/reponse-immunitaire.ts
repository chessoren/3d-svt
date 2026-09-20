import type { Schema } from '../../types';

export const schemaReponseImmunitaire: Schema = {
  id: 'ue5-reponse-immunitaire',
  ue: 'ue5',
  titre: 'Cinétique des réponses immunitaires primaire et secondaire',
  description:
    'Évolution de la concentration sérique d’anticorps après une première puis une seconde exposition au même antigène : délai d’induction, amplitude, isotype dominant, affinité et rôle des lymphocytes B mémoire.',
  categorie: 'Immunologie adaptative',
  viewBox: '0 0 920 660',
  ficheLiee: 'ue5-lymphocytes-b-reponse-humorale',
  motsCles: ['réponse primaire', 'réponse secondaire', 'lymphocytes B mémoire', 'commutation isotypique', 'maturation d’affinité', 'IgM', 'IgG', 'vaccination'],
  svg: `
    <rect x="0" y="0" width="920" height="660" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue5-reponse-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Réponses primaire et secondaire à un même antigène</text>
      <line x1="40" y1="44" x2="220" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(110,66)">
        <!-- Axes -->
        <line x1="0" y1="0" x2="0" y2="380" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="380" x2="700" y2="380" stroke="#475467" stroke-width="1.6"/>

        <!-- Graduations Y (échelle logarithmique, unités arbitraires) -->
        <line x1="-6" y1="380" x2="700" y2="380" stroke="#eef1f6" stroke-width="1"/>
        <text x="-34" y="384" font-size="11.5" fill="#475467">1</text>
        <line x1="-6" y1="300" x2="700" y2="300" stroke="#eef1f6" stroke-width="1"/>
        <text x="-40" y="304" font-size="11.5" fill="#475467">10</text>
        <line x1="-6" y1="220" x2="700" y2="220" stroke="#eef1f6" stroke-width="1"/>
        <text x="-48" y="224" font-size="11.5" fill="#475467">10²</text>
        <line x1="-6" y1="140" x2="700" y2="140" stroke="#eef1f6" stroke-width="1"/>
        <text x="-48" y="144" font-size="11.5" fill="#475467">10³</text>
        <line x1="-6" y1="60" x2="700" y2="60" stroke="#eef1f6" stroke-width="1"/>
        <text x="-48" y="64" font-size="11.5" fill="#475467">10⁴</text>
        <text x="-92" y="200" font-size="13" fill="#101828" transform="rotate(-90 -92 200)">Concentration d’anticorps (échelle log)</text>

        <!-- Graduations X (jours) -->
        <text x="345" y="418" font-size="13" fill="#101828">Temps (jours)</text>
        <text x="-4" y="398" font-size="11.5" fill="#475467">0</text>
        <line x1="0" y1="380" x2="0" y2="386" stroke="#475467"/>
        <text x="152" y="398" font-size="11.5" fill="#475467">14</text>
        <line x1="156" y1="380" x2="156" y2="386" stroke="#475467"/>
        <text x="308" y="398" font-size="11.5" fill="#475467">28</text>
        <line x1="312" y1="380" x2="312" y2="386" stroke="#475467"/>
        <text x="460" y="398" font-size="11.5" fill="#475467">42</text>
        <line x1="468" y1="380" x2="468" y2="386" stroke="#475467"/>
        <text x="616" y="398" font-size="11.5" fill="#475467">56</text>
        <line x1="624" y1="380" x2="624" y2="386" stroke="#475467"/>

        <!-- Injections -->
        <line x1="10" y1="0" x2="10" y2="380" stroke="#98a2b3" stroke-width="1.2" stroke-dasharray="4 3"/>
        <line x1="312" y1="0" x2="312" y2="380" stroke="#98a2b3" stroke-width="1.2" stroke-dasharray="4 3"/>
        <path d="M10,-10 L6,-22 L14,-22 Z" fill="#101828"/>
        <path d="M312,-10 L308,-22 L316,-22 Z" fill="#101828"/>
        <circle cx="10" cy="-30" r="13" fill="#101828" opacity="0.14"/>
        <text x="6" y="-25" font-size="12" font-weight="700" fill="#101828">1</text>
        <circle cx="312" cy="-30" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="307" y="-25" font-size="12" font-weight="700" fill="#5a2fc7">5</text>

        <!-- IgM de la réponse primaire (pointillé, précoce et faible) -->
        <path d="M40,378 C56,378 66,340 82,300 C98,262 112,250 130,254 C150,258 168,282 190,320 C206,346 220,364 240,376"
          fill="none" stroke="#98a2b3" stroke-width="2.2" stroke-dasharray="6 4"/>

        <!-- Réponse primaire (IgG modeste) -->
        <path d="M50,380 C66,380 78,352 96,300 C112,254 126,224 148,214 C166,206 188,212 210,232 C232,252 254,290 280,330 C296,354 306,368 312,378"
          fill="none" stroke="#175cd3" stroke-width="3.2" stroke-linecap="round"/>

        <!-- Réponse secondaire (IgG rapide et intense) -->
        <path d="M312,378 C324,378 332,320 344,240 C354,168 364,100 384,68 C400,44 424,36 452,40 C486,46 540,66 624,120 C660,144 690,166 700,178"
          fill="none" stroke="#e0632f" stroke-width="3.4" stroke-linecap="round"/>

        <!-- Pastilles d'annotation -->
        <circle cx="78" cy="330" r="13" fill="#98a2b3" opacity="0.28"/>
        <text x="73" y="335" font-size="12" font-weight="700" fill="#475467">2</text>

        <circle cx="152" cy="212" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="148" y="217" font-size="12" font-weight="700" fill="#175cd3">3</text>

        <circle cx="270" cy="316" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="266" y="321" font-size="12" font-weight="700" fill="#175cd3">4</text>

        <circle cx="344" cy="204" r="13" fill="#e0632f" opacity="0.22"/>
        <text x="339" y="209" font-size="12" font-weight="700" fill="#e0632f">6</text>

        <circle cx="416" cy="38" r="13" fill="#e0632f" opacity="0.22"/>
        <text x="411" y="43" font-size="12" font-weight="700" fill="#e0632f">7</text>

        <!-- Étiquettes -->
        <text x="30" y="264" font-size="11" fill="#8a94a8">IgM</text>
        <text x="120" y="196" font-size="11.5" fill="#175cd3">réponse primaire (IgG modeste)</text>
        <text x="420" y="26" font-size="11.5" fill="#e0632f">réponse secondaire (IgG, forte amplitude)</text>
      </g>

      <!-- Encadré maturation / mémoire -->
      <rect x="40" y="486" width="840" height="66" rx="12" fill="#f2f0ff" stroke="#dcd6fb"/>
      <circle cx="62" cy="508" r="13" fill="#7c4df5" opacity="0.22"/>
      <text x="58" y="513" font-size="12" font-weight="700" fill="#5a2fc7">8</text>
      <text x="80" y="513" font-size="13" font-weight="600" fill="#101828">Commutation isotypique et maturation d’affinité</text>
      <text x="60" y="536" font-size="11.5" fill="#475467">D’une exposition à l’autre, les anticorps produits passent des IgM aux IgG et gagnent en affinité pour l’antigène.</text>

      <rect x="40" y="562" width="840" height="66" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
      <circle cx="62" cy="584" r="13" fill="#12a065" opacity="0.22"/>
      <text x="58" y="589" font-size="12" font-weight="700" fill="#0a7a4d">9</text>
      <text x="80" y="589" font-size="13" font-weight="600" fill="#101828">Lymphocytes B mémoire</text>
      <text x="60" y="608" font-size="11.5" fill="#475467">Générés lors de la réponse primaire, ils expliquent la rapidité et l’intensité de la réponse secondaire.</text>
      <circle cx="742" cy="584" r="13" fill="#e0632f" opacity="0.22"/>
      <text x="738" y="589" font-size="12" font-weight="700" fill="#e0632f">10</text>
      <text x="762" y="589" font-size="12" font-weight="600" fill="#e0632f">principe vaccinal</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Première injection de l’antigène (jour 0), premier contact du système immunitaire avec l’épitope.' },
    { ref: '2', texte: 'Délai d’induction de la réponse primaire : environ 5 à 10 jours avant l’apparition d’anticorps détectables.' },
    { ref: '3', texte: 'Pic de la réponse primaire : amplitude modeste, composée d’abord d’IgM puis d’IgG de faible affinité.' },
    { ref: '4', texte: 'Déclin de la réponse primaire à mesure que l’antigène est éliminé et que des lymphocytes B mémoire se différencient.' },
    { ref: '5', texte: 'Seconde injection (rappel) du même antigène, plusieurs semaines après la première.' },
    { ref: '6', texte: 'Délai raccourci de la réponse secondaire : 1 à 3 jours seulement, grâce aux lymphocytes mémoire déjà présents.' },
    { ref: '7', texte: 'Pic de la réponse secondaire : amplitude nettement plus élevée, dominée par des IgG de forte affinité.' },
    { ref: '8', texte: 'Commutation isotypique (IgM vers IgG) et maturation d’affinité au fil des expositions successives.' },
    { ref: '9', texte: 'Lymphocytes B mémoire : à durée de vie longue, ils permettent la réponse secondaire rapide et intense.' },
    { ref: '10', texte: 'Ce mécanisme fonde le principe de la vaccination : induire une mémoire immunitaire par exposition contrôlée.' },
  ],
};
