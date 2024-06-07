import { Roboto_Condensed, Exo } from 'next/font/google';

export const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-condensed',
});

export const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-exo',
});
