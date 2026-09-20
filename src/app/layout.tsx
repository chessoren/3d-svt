import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { SCRIPT_THEME } from '@/components/Theme';

export const metadata: Metadata = {
  title: {
    default: 'MediCapsule — Révisions de première année de médecine',
    template: '%s · MediCapsule',
  },
  description:
    'Fiches, flashcards, schémas détaillés, QCM corrigés et modèle 3D du corps humain pour réviser la première année de médecine (PASS et LAS). Contenu vérifié, exportable en PDF, sans intelligence artificielle.',
  keywords: ['PASS', 'LAS', 'médecine', 'première année', 'fiches', 'flashcards', 'QCM', 'anatomie 3D'],
  authors: [{ name: 'MediCapsule' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e9edfb',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_THEME }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        <main className="lg:pl-[264px]">
          <div className="mx-auto w-full max-w-[1320px] px-4 pb-16 sm:px-6 lg:px-8 lg:pt-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
