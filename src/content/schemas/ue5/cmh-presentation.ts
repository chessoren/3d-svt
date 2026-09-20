import type { Schema } from '../../types';

export const schemaCmhPresentation: Schema = {
  id: 'ue5-cmh-presentation',
  ue: 'ue5',
  titre: 'Les deux voies de présentation antigénique',
  description:
    'Voie endogène : dégradation par le protéasome et présentation par le CMH de classe I aux lymphocytes T CD8+. Voie exogène : dégradation endosomale et présentation par le CMH de classe II aux lymphocytes T CD4+.',
  categorie: 'Immunologie cellulaire',
  viewBox: '0 0 920 760',
  ficheLiee: 'ue5-cmh-presentation',
  motsCles: ['CMH classe I', 'CMH classe II', 'protéasome', 'TAP', 'voie endogène', 'voie exogène', 'lymphocyte T CD8', 'lymphocyte T CD4', 'chaîne invariante'],
  svg: `
    <rect x="0" y="0" width="920" height="760" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue5-cmh-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="30" font-size="19" font-weight="600" fill="#101828">Deux voies d’apprêtement de l’antigène</text>
      <line x1="40" y1="42" x2="220" y2="42" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <text x="40" y="66" font-size="14.5" font-weight="600" fill="#175cd3">Voie endogène — CMH de classe I</text>
      <text x="500" y="66" font-size="14.5" font-weight="600" fill="#12a065">Voie exogène — CMH de classe II</text>
      <line x1="460" y1="60" x2="460" y2="540" stroke="#e4e7ec" stroke-width="1.4" stroke-dasharray="4 4"/>

      <!-- Colonne gauche : voie endogène -->
      <rect x="40" y="84" width="380" height="96" rx="12" fill="#eef4ff" stroke="#c9d6ff"/>
      <circle cx="62" cy="106" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="58" y="111" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="80" y="111" font-size="13" font-weight="600" fill="#101828">Protéine cytosolique endogène</text>
      <text x="60" y="132" font-size="11.5" fill="#475467">Ex. protéine virale synthétisée par la cellule</text>
      <text x="60" y="150" font-size="11.5" fill="#475467">infectée, marquée par l’ubiquitine.</text>
      <ellipse cx="360" cy="140" rx="26" ry="16" fill="#175cd3" opacity="0.25"/>
      <text x="342" y="145" font-size="10.5" fill="#175cd3">protéine</text>

      <line x1="230" y1="180" x2="230" y2="204" stroke="#101828" stroke-width="2" marker-end="url(#ue5-cmh-fleche)"/>

      <rect x="40" y="210" width="380" height="96" rx="12" fill="#eef4ff" stroke="#c9d6ff"/>
      <circle cx="62" cy="232" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="58" y="237" font-size="12" font-weight="700" fill="#175cd3">2</text>
      <text x="80" y="237" font-size="13" font-weight="600" fill="#101828">Protéasome et transport TAP</text>
      <text x="60" y="258" font-size="11.5" fill="#475467">Le protéasome clive la protéine en courts</text>
      <text x="60" y="276" font-size="11.5" fill="#475467">peptides (8-10 aa), transportés dans le</text>
      <text x="60" y="294" font-size="11.5" fill="#475467">réticulum endoplasmique par le transporteur TAP.</text>

      <line x1="230" y1="306" x2="230" y2="330" stroke="#101828" stroke-width="2" marker-end="url(#ue5-cmh-fleche)"/>

      <rect x="40" y="336" width="380" height="96" rx="12" fill="#eef4ff" stroke="#c9d6ff"/>
      <circle cx="62" cy="358" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="58" y="363" font-size="12" font-weight="700" fill="#175cd3">3</text>
      <text x="80" y="363" font-size="13" font-weight="600" fill="#101828">Chargement sur le CMH I</text>
      <text x="60" y="384" font-size="11.5" fill="#475467">Le peptide se loge dans le sillon du CMH I,</text>
      <text x="60" y="402" font-size="11.5" fill="#475467">qui transite par le Golgi jusqu’à la membrane.</text>
      <text x="60" y="420" font-size="11.5" fill="#475467">Exprimé par toutes les cellules nucléées.</text>

      <line x1="230" y1="432" x2="230" y2="456" stroke="#101828" stroke-width="2" marker-end="url(#ue5-cmh-fleche)"/>

      <rect x="40" y="462" width="380" height="70" rx="12" fill="#f2f0ff" stroke="#dcd6fb"/>
      <circle cx="62" cy="484" r="13" fill="#7c4df5" opacity="0.22"/>
      <text x="57" y="489" font-size="12" font-weight="700" fill="#5a2fc7">4</text>
      <text x="80" y="489" font-size="13" font-weight="600" fill="#101828">Reconnaissance par le LT CD8+</text>
      <text x="60" y="510" font-size="11.5" fill="#475467">Le corécepteur CD8 stabilise la liaison TCR-CMH I.</text>

      <!-- Colonne droite : voie exogène -->
      <rect x="500" y="84" width="380" height="76" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
      <circle cx="522" cy="106" r="13" fill="#12a065" opacity="0.2"/>
      <text x="517" y="111" font-size="12" font-weight="700" fill="#12a065">5</text>
      <text x="540" y="111" font-size="13" font-weight="600" fill="#101828">Capture de l’antigène exogène</text>
      <text x="520" y="132" font-size="11.5" fill="#475467">Endocytose ou phagocytose par une cellule</text>
      <text x="520" y="148" font-size="11.5" fill="#475467">présentatrice d’antigène professionnelle.</text>

      <line x1="690" y1="160" x2="690" y2="184" stroke="#101828" stroke-width="2" marker-end="url(#ue5-cmh-fleche)"/>

      <rect x="500" y="190" width="380" height="76" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
      <circle cx="522" cy="212" r="13" fill="#12a065" opacity="0.2"/>
      <text x="517" y="217" font-size="12" font-weight="700" fill="#12a065">6</text>
      <text x="540" y="217" font-size="13" font-weight="600" fill="#101828">Fusion phagosome-lysosome</text>
      <text x="520" y="238" font-size="11.5" fill="#475467">Dégradation protéolytique de l’antigène</text>
      <text x="520" y="254" font-size="11.5" fill="#475467">en peptides, dans le compartiment endosomal.</text>

      <line x1="690" y1="266" x2="690" y2="290" stroke="#101828" stroke-width="2" marker-end="url(#ue5-cmh-fleche)"/>

      <rect x="500" y="296" width="380" height="76" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
      <circle cx="522" cy="318" r="13" fill="#12a065" opacity="0.2"/>
      <text x="517" y="323" font-size="12" font-weight="700" fill="#12a065">7</text>
      <text x="540" y="323" font-size="13" font-weight="600" fill="#101828">CMH II et chaîne invariante</text>
      <text x="520" y="344" font-size="11.5" fill="#475467">Synthétisé dans le réticulum, le CMH II est</text>
      <text x="520" y="360" font-size="11.5" fill="#475467">protégé par la chaîne invariante (Ii) qui bloque le sillon.</text>

      <line x1="690" y1="372" x2="690" y2="396" stroke="#101828" stroke-width="2" marker-end="url(#ue5-cmh-fleche)"/>

      <rect x="500" y="402" width="380" height="76" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
      <circle cx="522" cy="424" r="13" fill="#12a065" opacity="0.2"/>
      <text x="517" y="429" font-size="12" font-weight="700" fill="#12a065">8</text>
      <text x="540" y="429" font-size="13" font-weight="600" fill="#101828">Échange dans le compartiment MIIC</text>
      <text x="520" y="450" font-size="11.5" fill="#475467">La chaîne Ii est dégradée en CLIP, puis échangée</text>
      <text x="520" y="466" font-size="11.5" fill="#475467">contre le peptide antigénique grâce à HLA-DM.</text>

      <line x1="690" y1="478" x2="690" y2="502" stroke="#101828" stroke-width="2" marker-end="url(#ue5-cmh-fleche)"/>

      <rect x="500" y="508" width="380" height="70" rx="12" fill="#f2f0ff" stroke="#dcd6fb"/>
      <circle cx="522" cy="530" r="13" fill="#7c4df5" opacity="0.22"/>
      <text x="517" y="535" font-size="12" font-weight="700" fill="#5a2fc7">9</text>
      <text x="540" y="535" font-size="13" font-weight="600" fill="#101828">Reconnaissance par le LT CD4+</text>
      <text x="520" y="556" font-size="11.5" fill="#475467">Le corécepteur CD4 stabilise la liaison TCR-CMH II.</text>

      <!-- Encadré de synthèse -->
      <rect x="40" y="604" width="840" height="120" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
      <circle cx="62" cy="626" r="13" fill="#101828" opacity="0.14"/>
      <text x="57" y="631" font-size="12" font-weight="700" fill="#101828">10</text>
      <text x="80" y="631" font-size="13.5" font-weight="600" fill="#101828">Règle de restriction CMH-corécepteur</text>
      <text x="60" y="656" font-size="12" fill="#475467">• CMH de classe I (toutes cellules nucléées) + peptide endogène → reconnu par le TCR et le corécepteur CD8.</text>
      <text x="60" y="676" font-size="12" fill="#475467">• CMH de classe II (cellules présentatrices professionnelles) + peptide exogène → reconnu par le TCR et le corécepteur CD4.</text>
      <text x="60" y="700" font-size="12" fill="#475467">• Cette double spécificité assure la coordination entre immunité cytotoxique (CD8) et immunité auxiliaire (CD4).</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Protéine cytosolique endogène (par exemple virale), marquée par l’ubiquitine avant dégradation.' },
    { ref: '2', texte: 'Le protéasome clive la protéine en peptides courts, transportés dans le réticulum endoplasmique par TAP.' },
    { ref: '3', texte: 'Le peptide se charge sur le CMH I dans le réticulum, puis transite par le Golgi jusqu’à la membrane plasmique.' },
    { ref: '4', texte: 'Le complexe CMH I-peptide est reconnu par le TCR du lymphocyte T CD8+ cytotoxique.' },
    { ref: '5', texte: 'Un antigène exogène est capturé par endocytose ou phagocytose par une cellule présentatrice professionnelle.' },
    { ref: '6', texte: 'La fusion du phagosome avec le lysosome dégrade l’antigène en peptides.' },
    { ref: '7', texte: 'Le CMH II, synthétisé dans le réticulum, est associé à la chaîne invariante qui protège son sillon vide.' },
    { ref: '8', texte: 'Dans le compartiment MIIC, la chaîne invariante dégradée en CLIP est échangée contre le peptide antigénique via HLA-DM.' },
    { ref: '9', texte: 'Le complexe CMH II-peptide est reconnu par le TCR du lymphocyte T CD4+ auxiliaire.' },
    { ref: '10', texte: 'Restriction CMH-corécepteur : CMH I avec CD8, CMH II avec CD4, garante de la spécificité de la réponse.' },
  ],
};
