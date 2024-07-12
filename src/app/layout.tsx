import type { Metadata } from 'next';
import { roboto_condensed } from '@/helpers/fonts';
import '../styles/globals.scss';
import classNames from 'classnames';
import { MainHeader } from '@/components/MainHeader/MainHeader';
import { Footer } from '@/components/Footer/Footer';
import { dictionary } from '@/constants/dictionary';

export const metadata: Metadata = {
  title: dictionary.EN.PAGES.HOME.METADATA.TITLE,
  description: dictionary.EN.PAGES.HOME.METADATA.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          roboto_condensed.className,
          'general-gradient flex flex-col min-h-screen',
        )}
      >
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
