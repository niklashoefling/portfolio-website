import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-zinc-400 font-light pb-24">
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
          Datenschutz{' '}
          <span className="text-zinc-600 text-lg not-italic font-mono ml-4">
            Privacy Policy
          </span>
        </h1>

        <div className="space-y-12 leading-relaxed">
          <section>
            <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">
              Webanalyse durch Vercel Analytics
            </h2>
            <p className="text-sm text-zinc-500">
              Diese Website nutzt &quot;Vercel Analytics&quot;, ein Analysetool
              der Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA).
              Das Tool dient der statistischen Auswertung der Seitennutzung ohne
              den Einsatz von Cookies. Dabei werden keine personenbezogenen
              Daten gespeichert. Die IP-Adresse wird lediglich kurzzeitig zur
              Bestimmung des Standorts (auf Regionsebene) verarbeitet und dann
              umgehend verworfen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (Berechtigtes Interesse an der Optimierung der Website). Da Vercel
              ein US-amerikanisches Unternehmen ist, erfolgt die Verarbeitung
              teilweise in den USA. Vercel stützt diesen Transfer auf
              Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
              Weitere Informationen findest du in der{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
              >
                Datenschutzerklärung von Vercel
              </a>
              .
            </p>
          </section>

          <section className="space-y-8 border-t border-zinc-900 pt-12">
            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Hosting &amp; Server-Logfiles
              </h2>
              <p className="text-sm text-zinc-500 mb-4">
                Diese Seite wird bei Vercel gehostet. Bei jedem Aufruf erfasst
                der Hoster automatisch Informationen (Server-Logfiles), die dein
                Browser übermittelt:
              </p>
              <ul className="text-sm text-zinc-500 space-y-1 pl-4 mb-4">
                <li>— Browsertyp und Browserversion</li>
                <li>— Verwendetes Betriebssystem</li>
                <li>— Referrer URL</li>
                <li>— Hostname des zugreifenden Rechners</li>
                <li>— Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="text-sm text-zinc-500">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes
                Interesse am sicheren und stabilen Betrieb der Website). Zur
                Speicherdauer und Löschung der Logfiles durch Vercel siehe die{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
                >
                  Datenschutzerklärung von Vercel
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Deine Rechte
              </h2>
              <p className="text-sm text-zinc-500">
                Du hast jederzeit das Recht auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung sowie
                Datenübertragbarkeit (Art. 15–20 DSGVO). Darüber hinaus steht
                dir ein Widerspruchsrecht gegen die Verarbeitung auf Basis von
                Art. 6 Abs. 1 lit. f DSGVO zu (Art. 21 DSGVO). Wende dich dafür
                jederzeit an die im Impressum angegebene E-Mail-Adresse.
                Außerdem hast du das Recht, dich bei einer
                Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
            </div>
          </section>

          <section className="border-t border-zinc-900 pt-12">
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">
              Verantwortlicher
            </h2>
            <div className="text-zinc-200 space-y-1">
              <p className="text-xl font-medium">Niklas Höfling</p>
              <p>T6 19</p>
              <p>68161 Mannheim</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
