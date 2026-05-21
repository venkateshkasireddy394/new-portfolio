import type { Metadata } from 'next';
import { Syne, DM_Mono } from 'next/font/google';
import './globals.css';
import { Cursor } from '@/components/cursor';
import { Starfield } from '@/components/starfield';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const dmMono = DM_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Venkateswarlu Kasireddy — Portfolio',
  description: 'Portfolio of Venkateswarlu Kasireddy, Full-stack Software Engineer & AI Aspirant.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="bg-background-primary text-text-main font-syne antialiased selection:bg-accent-two/30 overflow-x-hidden" suppressHydrationWarning>
        <Starfield />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
