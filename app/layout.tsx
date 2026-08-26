import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abel Mulat — AI Engineer',
  description:
    'Abel Mulat is an AI engineer building production-oriented LLM, speech-to-text, and document intelligence products.',
  generator: 'v0.app',
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2f1ed',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
