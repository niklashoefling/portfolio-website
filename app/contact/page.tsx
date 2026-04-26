import type { Metadata } from 'next';
import Contact from '@/app/components/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Niklas Höfling via email, LinkedIn, or GitHub.',
  openGraph: {
    title: 'Contact — Niklas Höfling',
    description: 'Get in touch with Niklas Höfling.',
    url: 'https://niklas-hoefling.de/contact',
  },
};

export default function Home() {
  return <Contact />;
}
