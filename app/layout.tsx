import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
// import '@carbon/react/index.scss';

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
