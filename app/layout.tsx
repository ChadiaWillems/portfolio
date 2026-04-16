import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chadia Willems',
  description: 'Portfolio van Chadia Willems, een frontend developer met een passie voor het creëren van mooie en functionele websites. Bekijk mijn projecten, vaardigheden en meer!',
};

import { ThemeProvider } from './components/general/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="antialiased bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
