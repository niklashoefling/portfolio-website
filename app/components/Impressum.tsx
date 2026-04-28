import BackLink from './BackLink';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-zinc-400 font-light pb-24">
      <BackLink />

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
                href="mailto:&#104;&#111;&#101;&#102;&#108;&#105;&#110;&#103;&#46;&#110;&#105;&#107;&#108;&#97;&#115;&#64;&#103;&#109;&#120;&#46;&#100;&#101;"
                className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
              >
                hoefling.niklas&#64;gmx.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">
              Social Media und andere Onlinepräsenzen
            </h2>
            <p className="text-sm text-zinc-500 mb-3">
              Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile:
            </p>
            <div className="space-y-2">
              <p>
                <a
                  href="https://www.linkedin.com/in/niklas-ralf-h%C3%B6fling-6834b4382/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors text-sm break-all"
                >
                  https://www.linkedin.com/in/niklas-ralf-höfling-6834b4382/
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/niklashoefling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors text-sm"
                >
                  https://github.com/niklashoefling
                </a>
              </p>
            </div>
          </section>

          <section className="space-y-8 border-t border-zinc-900 pt-12">
            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Vorbehalt der Nutzung für Text und Data Mining
              </h2>
              <p className="text-sm text-zinc-500">
                Der Inhaber dieser Website gestattet die Nutzung oder das Herunterladen von Inhalten
                dieser Website durch Dritte für die Entwicklung, das Training oder den Betrieb von
                künstlicher Intelligenz oder anderen maschinellen Lernsystemen (&ldquo;Text und Data
                Mining&rdquo;) ausschließlich mit ausdrücklicher schriftlicher Zustimmung des
                Inhabers. Ohne eine solche Zustimmung ist es untersagt, die Inhalte für Text und
                Data Mining zu verwenden. Dies gilt auch, wenn auf der Website keine Meta-Angaben
                vorhanden sind, die entsprechende Verfahren aussperren, und selbst dann, wenn Bots,
                die den Zweck haben, die Website zu Zwecken des Text und Data Mining auszulesen,
                nicht ausgesperrt werden.
              </p>
            </div>

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
                Die durch mich erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Davon
                ausgenommen ist der bereitgestellte Quellcode, der unter der
                beigefügten MIT-Lizenz steht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
