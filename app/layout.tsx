import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abel Mulat | Applied AI Engineer',
  description:
    'Abel Mulat is an AI engineer building production-oriented LLM, speech-to-text, and document intelligence products.',
  keywords: ['AI Engineer', 'LLM Engineer', 'Full-stack Engineer', 'Abel Mulat'],
  authors: [{ name: 'Abel Mulat' }],
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0D0C',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0B0D0C] motion-reduce:scroll-auto">
      <body className="bg-[#0B0D0C] text-[#D8DDD8] antialiased selection:bg-[#B7F34A] selection:text-[#0B0D0C]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
