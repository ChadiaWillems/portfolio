import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chadia Willems',
  description:
    'Portfolio van Chadia Willems, een frontend developer met een passie voor het creëren van mooie en functionele websites. Bekijk mijn projecten, vaardigheden en meer!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="eng" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#d4ff00] text-black p-4 z-50 font-bold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
