import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/nav/Nav';

export const metadata: Metadata = {
  title: 'Chadia Willems',
  description: 'Portfolio van Chadia Willems, een frontend developer met een passie voor het creëren van mooie en functionele websites. Bekijk mijn projecten, vaardigheden en meer!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="antialiased bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">{children}</body>
    </html>
  );
}
