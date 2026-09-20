import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconeAccueil = (p: Props) => (
  <Base {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.8V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.8" />
  </Base>
);

export const IconeFiche = (p: Props) => (
  <Base {...p}>
    <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M14 3v4h4" />
    <path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h3" />
  </Base>
);

export const IconeCartes = (p: Props) => (
  <Base {...p}>
    <rect x="3" y="6" width="13" height="13" rx="2.5" />
    <path d="M8 3h9a2 2 0 0 1 2 2v9" />
  </Base>
);

export const IconeSchema = (p: Props) => (
  <Base {...p}>
    <circle cx="6" cy="6" r="2.6" />
    <circle cx="18" cy="8" r="2.6" />
    <circle cx="11" cy="18" r="2.6" />
    <path d="M8.2 7.2 15.6 7.6M7.3 8.3l2.7 7.3M16.6 10.3 12.6 15.9" />
  </Base>
);

export const IconeQCM = (p: Props) => (
  <Base {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M8 12.2l2.6 2.6L16.4 9" />
  </Base>
);

export const IconeCorps = (p: Props) => (
  <Base {...p}>
    <circle cx="12" cy="4.4" r="2.2" />
    <path d="M12 6.6v7.2M12 13.8 9.4 21M12 13.8 14.6 21M5.6 9.2 12 8l6.4 1.2" />
  </Base>
);

export const IconeRecherche = (p: Props) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </Base>
);

export const IconeTelechargement = (p: Props) => (
  <Base {...p}>
    <path d="M12 3.5v11" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4.5 18.5v1a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-1" />
  </Base>
);

export const IconeImprimer = (p: Props) => (
  <Base {...p}>
    <path d="M7 9V3.5h10V9" />
    <rect x="3.5" y="9" width="17" height="7" rx="2" />
    <path d="M7 14h10v6.5H7z" />
  </Base>
);

export const IconeSoleil = (p: Props) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.1 5.1l1.4 1.4M17.5 17.5l1.4 1.4M18.9 5.1l-1.4 1.4M6.5 17.5l-1.4 1.4" />
  </Base>
);

export const IconeLune = (p: Props) => (
  <Base {...p}>
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2Z" />
  </Base>
);

export const IconeFleche = (p: Props) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const IconeFlecheGauche = (p: Props) => (
  <Base {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Base>
);

export const IconeChevron = (p: Props) => (
  <Base {...p}>
    <path d="m9 6 6 6-6 6" />
  </Base>
);

export const IconeCroix = (p: Props) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const IconeCheck = (p: Props) => (
  <Base {...p}>
    <path d="m5 12.5 5 5L19 7" />
  </Base>
);

export const IconeAlerte = (p: Props) => (
  <Base {...p}>
    <path d="M12 4.2 2.8 20h18.4L12 4.2Z" />
    <path d="M12 10v4.2M12 17.2h.01" />
  </Base>
);

export const IconeAmpoule = (p: Props) => (
  <Base {...p}>
    <path d="M9 17.5h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.1.9 1.6h5.2c0-.5.3-1.1.9-1.6A6 6 0 0 0 12 3Z" />
  </Base>
);

export const IconeStethoscope = (p: Props) => (
  <Base {...p}>
    <path d="M5 3v5a4 4 0 0 0 8 0V3" />
    <path d="M5 3H3.5M13 3h1.5" />
    <path d="M9 12v2.5a5 5 0 0 0 10 0V13" />
    <circle cx="19" cy="11" r="2" />
  </Base>
);

export const IconeLivre = (p: Props) => (
  <Base {...p}>
    <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H11v17H5.5A1.5 1.5 0 0 1 4 18.5Z" />
    <path d="M20 4.5A1.5 1.5 0 0 0 18.5 3H13v17h5.5a1.5 1.5 0 0 0 1.5-1.5Z" />
  </Base>
);

export const IconeHorloge = (p: Props) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.2V12l3.2 2" />
  </Base>
);

export const IconeCible = (p: Props) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </Base>
);

export const IconeFeu = (p: Props) => (
  <Base {...p}>
    <path d="M12 3c.6 3.2-1.8 4.3-2.9 6.2-1.6 2.8.2 5.4 2.9 5.4s4.5-2.6 2.9-5.4" />
    <path d="M12 21a6 6 0 0 0 6-6c0-2-1-3.8-2.2-5.2" />
    <path d="M12 21a6 6 0 0 1-6-6c0-2 1-3.8 2.2-5.2" />
  </Base>
);

export const IconeRotation = (p: Props) => (
  <Base {...p}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20 4v4h-4" />
  </Base>
);

export const IconeCouches = (p: Props) => (
  <Base {...p}>
    <path d="m12 3 9 4.8-9 4.8-9-4.8L12 3Z" />
    <path d="m3 12.3 9 4.8 9-4.8M3 16.8l9 4.8 9-4.8" />
  </Base>
);

export const IconeLoupePlus = (p: Props) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5M11 8.5v5M8.5 11h5" />
  </Base>
);

export const IconeMenu = (p: Props) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconeEtoile = (p: Props) => (
  <Base {...p}>
    <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8L12 3.6Z" />
  </Base>
);

export const IconeGraphique = (p: Props) => (
  <Base {...p}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </Base>
);
