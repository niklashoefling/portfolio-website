import Link from 'next/link';
import BackLink from './BackLink';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-zinc-400 font-light pb-24">
      <BackLink />

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
              Präambel
            </h2>
            <p className="text-sm text-zinc-500 mb-3">
              Mit der folgenden Datenschutzerklärung möchte ich Sie darüber
              aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
              auch kurz als &ldquo;Daten&rdquo; bezeichnet) ich zu welchen
              Zwecken und in welchem Umfang verarbeite. Die
              Datenschutzerklärung gilt für alle von mir durchgeführten
              Verarbeitungen personenbezogener Daten, sowohl im Rahmen der
              Erbringung meiner Leistungen als auch insbesondere auf meinen
              Webseiten, in mobilen Applikationen sowie innerhalb externer
              Onlinepräsenzen, wie z.&nbsp;B. meiner Social-Media-Profile
              (nachfolgend zusammenfassend bezeichnet als
              &ldquo;Onlineangebot&rdquo;).
            </p>
            <p className="text-sm text-zinc-500 mb-3">
              Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
            </p>
            <p className="text-xs text-zinc-600 font-mono">
              Stand: 28. April 2026
            </p>
          </section>

          <section>
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">
              Verantwortlicher
            </h2>
            <div className="text-zinc-200 space-y-1 mb-3">
              <p className="text-xl font-medium">Niklas Höfling</p>
              <p>T6 19</p>
              <p>68161 Mannheim</p>
            </div>
            <p className="text-sm text-zinc-500">
              E-Mail-Adresse:{' '}
              <a
                href="mailto:&#104;&#111;&#101;&#102;&#108;&#105;&#110;&#103;&#46;&#110;&#105;&#107;&#108;&#97;&#115;&#64;&#103;&#109;&#120;&#46;&#100;&#101;"
                className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
              >
                hoefling.niklas&#64;gmx.de
              </a>
            </p>
            <p className="text-sm text-zinc-500 mt-1">
              Impressum:{' '}
              <Link
                href="/legal"
                className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
              >
                niklas-hoefling.de/legal
              </Link>
            </p>
          </section>

          <section className="space-y-8 border-t border-zinc-900 pt-12">
            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Sicherheitsmaßnahmen
              </h2>
              <p className="text-sm text-zinc-500 mb-3">
                Ich treffe nach Maßgabe der gesetzlichen Vorgaben unter
                Berücksichtigung des Stands der Technik, der
                Implementierungskosten und der Art, des Umfangs, der Umstände
                und der Zwecke der Verarbeitung sowie der unterschiedlichen
                Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
                Rechte und Freiheiten natürlicher Personen geeignete technische
                und organisatorische Maßnahmen, um ein dem Risiko angemessenes
                Schutzniveau zu gewährleisten.
              </p>
              <p className="text-sm text-zinc-500">
                Zu den Maßnahmen gehört insbesondere die Sicherung von
                Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie
                (HTTPS).
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Hosting &amp; Server-Logfiles
              </h2>
              <p className="text-sm text-zinc-500 mb-4">
                Diese Seite wird bei Vercel gehostet (Vercel Inc., 440 N
                Barranca Ave #4133, Covina, CA 91723, USA). Bei jedem Aufruf
                erfasst der Hoster automatisch Informationen (Server-Logfiles),
                die dein Browser übermittelt:
              </p>
              <ul className="text-sm text-zinc-500 space-y-1 pl-4 mb-4">
                <li>— Browsertyp und Browserversion</li>
                <li>— Verwendetes Betriebssystem</li>
                <li>— Referrer URL</li>
                <li>— Hostname des zugreifenden Rechners</li>
                <li>— Uhrzeit der Serveranfrage</li>
                <li>— IP-Adresse</li>
              </ul>
              <p className="text-sm text-zinc-500 mb-3">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes
                Interesse am sicheren und stabilen Betrieb der Website).
                Logfile-Informationen werden für die Dauer von maximal 30 Tagen
                gespeichert und danach gelöscht oder anonymisiert. Zur weiteren
                Datenverarbeitung durch Vercel siehe die{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
                >
                  Datenschutzerklärung von Vercel
                </a>
                . Da Vercel ein US-amerikanisches Unternehmen ist, erfolgt die
                Verarbeitung teilweise in den USA. Vercel stützt diesen Transfer
                auf Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Webanalyse durch Vercel Analytics
              </h2>
              <p className="text-sm text-zinc-500">
                Diese Website nutzt &quot;Vercel Analytics&quot;, ein
                Analysetool der Vercel Inc. Das Tool dient der statistischen
                Auswertung der Seitennutzung ohne den Einsatz von Cookies. Dabei
                werden keine personenbezogenen Daten dauerhaft gespeichert. Die
                IP-Adresse wird lediglich kurzzeitig zur Bestimmung des
                Standorts (auf Regionsebene) verarbeitet und dann umgehend
                verworfen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (Berechtigtes Interesse an der Optimierung der Website). Weitere
                Informationen findest du in der{' '}
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
                Präsenzen in sozialen Netzwerken (Social Media)
              </h2>
              <p className="text-sm text-zinc-500 mb-3">
                Ich unterhalte Onlinepräsenzen innerhalb sozialer Netzwerke und
                verarbeite in diesem Rahmen Nutzerdaten, um mit den dort
                aktiven Nutzern zu kommunizieren oder Informationen über mich
                anzubieten.
              </p>
              <p className="text-sm text-zinc-500 mb-3">
                Ich weise darauf hin, dass dabei Nutzerdaten außerhalb des
                Raumes der Europäischen Union verarbeitet werden können.
                Hierdurch können sich für die Nutzer Risiken ergeben, weil so
                zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden
                könnte.
              </p>
              <p className="text-sm text-zinc-500 mb-4">
                Für eine detaillierte Darstellung der jeweiligen
                Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-out)
                verweise ich auf die Datenschutzerklärungen der Betreiber der
                jeweiligen Netzwerke.
              </p>
              <div className="text-sm text-zinc-500 space-y-2">
                <p>
                  <strong className="text-zinc-300">LinkedIn</strong> — LinkedIn
                  Ireland Unlimited Company, Wilton Plaza, Dublin 2, Irland.{' '}
                  <a
                    href="https://www.linkedin.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
                  >
                    Datenschutzerklärung
                  </a>
                  {' | '}
                  <a
                    href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 underline decoration-zinc-800 underline-offset-4 transition-colors"
                  >
                    Opt-Out
                  </a>
                  . Grundlage Drittlandtransfers: Data Privacy Framework (DPF),
                  Standardvertragsklauseln.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Maßgebliche Rechtsgrundlagen
              </h2>
              <p className="text-sm text-zinc-500 mb-3">
                Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen
                der DSGVO, auf deren Basis ich personenbezogene Daten
                verarbeite:
              </p>
              <ul className="text-sm text-zinc-500 space-y-2 pl-4">
                <li>
                  <strong className="text-zinc-300">
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)
                  </strong>{' '}
                  — Die betroffene Person hat ihre Einwilligung in die
                  Verarbeitung für einen spezifischen Zweck gegeben.
                </li>
                <li>
                  <strong className="text-zinc-300">
                    Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)
                  </strong>{' '}
                  — Die Verarbeitung ist zur Erfüllung einer rechtlichen
                  Verpflichtung erforderlich.
                </li>
                <li>
                  <strong className="text-zinc-300">
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
                  </strong>{' '}
                  — Die Verarbeitung ist zur Wahrung der berechtigten Interessen
                  des Verantwortlichen notwendig, sofern die Interessen der
                  betroffenen Person nicht überwiegen.
                </li>
              </ul>
              <p className="text-sm text-zinc-500 mt-3">
                Zusätzlich gelten nationale Regelungen zum Datenschutz in
                Deutschland, insbesondere das Bundesdatenschutzgesetz (BDSG).
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Allgemeine Informationen zur Datenspeicherung und Löschung
              </h2>
              <p className="text-sm text-zinc-500 mb-3">
                Ich lösche personenbezogene Daten, die ich verarbeite, gemäß
                den gesetzlichen Bestimmungen, sobald die zugrundeliegenden
                Einwilligungen widerrufen werden oder keine weiteren rechtlichen
                Grundlagen für die Verarbeitung bestehen. Ausnahmen bestehen,
                wenn gesetzliche Pflichten eine längere Aufbewahrung erfordern.
              </p>
              <p className="text-sm text-zinc-500">
                Allgemeine Aufbewahrungsfristen nach deutschem Recht: 10 Jahre
                für Bücher und Jahresabschlüsse, 8 Jahre für Buchungsbelege, 6
                Jahre für sonstige Geschäftsunterlagen, 3 Jahre für Ansprüche
                aus der regulären Verjährungsfrist (§§ 195, 199 BGB).
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Rechte der betroffenen Personen
              </h2>
              <p className="text-sm text-zinc-500 mb-3">
                Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte
                zu (Art. 15–21 DSGVO):
              </p>
              <ul className="text-sm text-zinc-500 space-y-2 pl-4">
                <li>
                  <strong className="text-zinc-300">Widerspruchsrecht</strong> —
                  Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer
                  Daten auf Basis von Art. 6 Abs. 1 lit. e oder f DSGVO
                  Widerspruch einzulegen.
                </li>
                <li>
                  <strong className="text-zinc-300">Widerrufsrecht</strong> —
                  Sie haben das Recht, erteilte Einwilligungen jederzeit zu
                  widerrufen.
                </li>
                <li>
                  <strong className="text-zinc-300">Auskunftsrecht</strong> —
                  Sie haben das Recht auf Auskunft über Ihre verarbeiteten Daten
                  sowie auf Kopie dieser Daten.
                </li>
                <li>
                  <strong className="text-zinc-300">
                    Recht auf Berichtigung
                  </strong>{' '}
                  — Sie haben das Recht, die Berichtigung unrichtiger Daten zu
                  verlangen.
                </li>
                <li>
                  <strong className="text-zinc-300">
                    Recht auf Löschung und Einschränkung
                  </strong>{' '}
                  — Sie haben das Recht, Löschung oder Einschränkung der
                  Verarbeitung Ihrer Daten zu verlangen.
                </li>
                <li>
                  <strong className="text-zinc-300">
                    Recht auf Datenübertragbarkeit
                  </strong>{' '}
                  — Sie haben das Recht, Ihre Daten in einem maschinenlesbaren
                  Format zu erhalten.
                </li>
                <li>
                  <strong className="text-zinc-300">Beschwerderecht</strong> —
                  Sie haben das Recht auf Beschwerde bei einer
                  Datenschutz-Aufsichtsbehörde.
                </li>
              </ul>
              <p className="text-sm text-zinc-500 mt-3">
                Wenden Sie sich für die Ausübung Ihrer Rechte an die im
                Impressum angegebene E-Mail-Adresse.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium text-white mb-4">
                Änderung und Aktualisierung
              </h2>
              <p className="text-sm text-zinc-500">
                Ich bitte Sie, sich regelmäßig über den Inhalt meiner
                Datenschutzerklärung zu informieren. Ich passe die
                Datenschutzerklärung an, sobald Änderungen der von mir
                durchgeführten Datenverarbeitungen dies erforderlich machen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
