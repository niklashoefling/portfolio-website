import type { Metadata } from 'next';
import PrivacyPage from '@/app/components/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy of niklas-hoefling.de — information on data processing and your rights.',
  openGraph: {
    title: 'Privacy Policy — Niklas Höfling',
    description: 'Privacy policy of niklas-hoefling.de',
    url: 'https://niklas-hoefling.de/privacy',
  },
};

export default function Page() {
  return <PrivacyPage />;
}
