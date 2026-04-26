import { Metadata } from 'next';
import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-zinc-400 font-light pb-24" lang="de">
      <nav className="py-12 px-6 md:px-16 lg:px-32">
        <Link
          href="/"
          className="text-xs font-mono text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{' '}
          Back to Home
        </Link>
      </nav>

      <div className="px-6 md:px-16 lg:px-32 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-light italic text-white mb-12 tracking-tight">
          Impressum{' '}
          <span className="text-zinc-600 text-lg not-italic font-mono ml-4">
            Legal Notice
          </span>
        </h1>

        <div className="space-y-12 leading-relaxed">
          <section>
            <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">
              Angaben gemäß § 5 DDG
            </h2>
            <div className="text-zinc-200 space-y-1">
              <p className="text-xl font-medium">Niklas Höfling</p>
              <p>T6 19</p>
              <p>68161 Mannheim</p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">
              Kontakt
            </h2>
            <p className="text-zinc-200">
              E-Mail:{' '}
              <a
                href="mailto:hoefling.niklas@gmx.de"
                className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
              >
                hoefling.niklas@gmx.de
              </a>
            </p>
          </section>

          <section className="space-y-8 border-t border-zinc-900 pt-12">
            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Haftung für Links
              </h2>
              <p className="text-sm text-zinc-500">
                Mein Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Urheberrecht
              </h2>
              <p className="text-sm text-zinc-500">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Davon
                ausgenommen ist der bereitgestellte Quellcode, der unter der
                beigefügten MIT-Lizenz steht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser
                Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                gestattet.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Legal',
  description:
    "Legal notice and imprint of Niklas Höfling's portfolio website.",
  openGraph: {
    title: 'Legal Notice — Niklas Höfling',
    description: 'Legal notice of niklas-hoefling.de',
    url: 'https://niklas-hoefling.de/impressum',
    locale: 'de-DE',
    type: 'website',
  },
};
