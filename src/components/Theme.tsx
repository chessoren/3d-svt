'use client';

import { useEffect, useState } from 'react';
import { IconeLune, IconeSoleil } from './ui/Icones';

const CLE = 'medicapsule-theme';

/**
 * Script injecté avant l'hydratation : il applique le thème enregistré dès le
 * premier rendu, ce qui évite le flash de couleur au chargement.
 */
export const SCRIPT_THEME = `(function(){try{var t=localStorage.getItem('${CLE}');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'sombre':'clair';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export function BoutonTheme() {
  const [theme, setTheme] = useState<'clair' | 'sombre'>('clair');
  const [monte, setMonte] = useState(false);

  useEffect(() => {
    const actuel = (document.documentElement.getAttribute('data-theme') as 'clair' | 'sombre') ?? 'clair';
    setTheme(actuel);
    setMonte(true);
  }, []);

  function basculer() {
    const suivant = theme === 'clair' ? 'sombre' : 'clair';
    setTheme(suivant);
    document.documentElement.setAttribute('data-theme', suivant);
    try {
      localStorage.setItem(CLE, suivant);
    } catch {
      /* stockage indisponible : le thème reste valable pour la session */
    }
  }

  return (
    <button
      type="button"
      onClick={basculer}
      className="bouton bouton-fantome px-3 py-2"
      aria-label={theme === 'clair' ? 'Activer le thème sombre' : 'Activer le thème clair'}
      title={theme === 'clair' ? 'Thème sombre' : 'Thème clair'}
    >
      {monte && theme === 'sombre' ? <IconeSoleil width={18} height={18} /> : <IconeLune width={18} height={18} />}
    </button>
  );
}
