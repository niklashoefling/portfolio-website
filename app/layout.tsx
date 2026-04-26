import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Niklas Höfling',
    template: '%s | Niklas Höfling',
  },
  description:
    'Portfolio of Niklas Höfling — dual student in Business Information Systems at SAP & DHBW Mannheim.',
  metadataBase: new URL('https://niklas-hoefling.de'),
  openGraph: {
    siteName: 'Niklas Höfling',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};
