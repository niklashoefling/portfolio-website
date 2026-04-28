import type { Metadata } from 'next';
import ImpressumPage from '@/app/components/Impressum';

export const metadata: Metadata = {
  title: 'Legal',
  description:
    "Legal notice and imprint of Niklas Höfling's portfolio website.",
  openGraph: {
    title: 'Legal Notice — Niklas Höfling',
    description: 'Legal notice of niklas-hoefling.de',
    url: 'https://niklas-hoefling.de/legal',
    locale: 'de-DE',
    type: 'website',
  },
};

export default function Page() {
  return <ImpressumPage />;
}
