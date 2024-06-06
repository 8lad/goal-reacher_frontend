import type { Metadata } from 'next';
import { roboto_condensed } from '@/components/shared/fonts';
import '../styles/globals.scss';
import classNames from 'classnames';

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
      <body className={classNames(roboto_condensed.className)}>{children}</body>
    </html>
  );
}
