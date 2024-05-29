import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Goal reacher app',
  description: 'This application will help you reach all your goals. Be sure',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

