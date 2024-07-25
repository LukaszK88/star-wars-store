import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@carbon/react/index.scss';
import { SWRConfig } from 'swr';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Wars Store',
  description: 'Find your favourite ship',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
