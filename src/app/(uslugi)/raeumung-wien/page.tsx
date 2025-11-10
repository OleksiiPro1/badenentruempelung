import type { Metadata } from "next";
import Image from "next/image";

// ====== BRAND / CONTACTS ======
const BRAND = {
  accent: "rgb(217, 117, 0)",
  black: "#000",
  white: "#fff",
  gray: "#6B7280",
  email: "office@raumfrei-wien.at",
  phone: "+43 676 505 54 37",
};

/** ====== SEO Metadata für /service/raeumung-wien ====== */
export const metadata: Metadata = {
  title: "Räumung Wien – Wohnungen, Keller & Häuser | raumfrei-wien.at",
  description:
    "Räumung in Wien mit Erfahrung, klaren Abläufen und fixen Terminen. Wohnungen, Häuser, Keller oder Büros – sauber organisiert, verlässlich abgewickelt, mit kostenloser Besichtigung und fester Ansprechperson.",
  alternates: {
    canonical: "https://raumfrei-wien.at/service/raeumung-wien",
  },
  openGraph: {
    title: "Räumung Wien – Wohnungen, Keller & Häuser | raumfrei-wien.at",
    description:
      "Räumung in Wien mit Erfahrung, klaren Abläufen und fixen Terminen. Wohnungen, Häuser, Keller oder Büros – sauber organisiert, verlässlich abgewickelt.",
    url: "https://raumfrei-wien.at/service/raeumung-wien",
    siteName: "raumfrei-wien.at",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "/images/raeumung-wien.webp",
        width: 1200,
        height: 900,
        alt: "Räumung in Wien – aufgeräumtes Büro mit Kartons und leeren Regalen",
      },
    ],
  },
  robots: { index: true, follow: true },
};

/** Farbwelt wie im Projekt */
const ACCENT = "rgb(217, 117, 0)"; // Orange
const WHITE = "rgb(255, 255, 255)";
const BLACK = "#000";
const GRAY = "#E5E7EB";

/** ====== PAGE: HERO (mit Bild rechts, 1x CTA) ======
 * - h2 + h3 Pflicht
 * - Langer, natürlicher AT-Deutsch Copytext (ohne: Umwelt, Problemstoff, sortieren, Entsorgung)
 * - Genau EIN Kontakt-CTA (Telefon • WhatsApp-Anfrage • E-Mail)
 * - Bild rechts (fixer Platz, echtes <Image/> ohne Textoverlay)
 * - Keine Icons
 */
export default function Page() {
  return (
    <>
    <section
      className="relative"
      style={{
        background: `
          radial-gradient(60rem 40rem at 0% -10%, ${GRAY}33, transparent),
          radial-gradient(60rem 40rem at 100% 120%, ${GRAY}22, transparent),
          ${WHITE}
        `,
      }}
    >
        
      

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-20">
        {/* LINKSSPALTE — Text */}
        <div className="flex flex-col justify-center">
          {/* H2 */}
          <h2
            className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
            style={{ color: BLACK }}
          >
            Räumung Wien – verlässlich, gründlich &amp; termingerecht
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Erfahrung, Feingefühl &amp; feste Ansprechperson
          </h3>

          {/* Langer Intro-Text (SEO-fokussiert, AT-Deutsch) */}
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
            <p>
              Eine gut organisierte Räumung in Wien braucht mehr als nur kräftige Hände:
              Entscheidend sind klare Abläufe, verlässliche Zeiten und eine Kommunikation,
              die auf den Punkt kommt. Genau das übernehmen wir für Sie – vom ersten
              Rundgang bis zur sauberen Übergabe. Mit einem stabilen Plan, einem
              eingespielten Team und einer fixen Ansprechperson, die alles koordiniert.
            </p>
            <p>
              Ob kompaktes Stadtapartment, Einfamilienhaus, Kellerabteil oder ein
              komplettes Büro – wir richten den Ablauf so ein, dass er in Ihren Kalender
              passt und auch im Haus gut funktioniert. Wege und Zugänge klären wir vorab,
              arbeiten ruhig und strukturiert und halten den vereinbarten Zeitraum ein.
              So bleibt der Kopf frei für das, was als Nächstes ansteht.
            </p>
            <p>
              Viele unserer Kundinnen und Kunden entscheiden sich für raumfrei-wien.at,
              weil sie einen verlässlichen Partner wollen, der mitdenkt und transparent
              bleibt. Sie erhalten nach der Besichtigung ein klares, schriftliches Angebot
              mit fixiertem Zeitraum – ohne Überraschungen und mit allem, was es für eine
              geordnete Übergabe braucht.
            </p>
          </div>

          {/* EINZIGER CTA-BLOCK (Telefon • WhatsApp • E-Mail) */}
          <div
            className="mt-8 rounded-xl p-4 md:p-5"
            style={{ border: `1px solid ${GRAY}`, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <p className="text-sm md:text-base mb-3" style={{ color: "#374151" }}>
              Kostenlose Besichtigung in Wien – wir klären alles in wenigen Minuten und
              vereinbaren den Fixtermin.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href="tel:+4367650555437"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center"
                style={{ background: ACCENT, color: WHITE }}
              >
                Anrufen: +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
              </a>
              <a
                href="https://wa.me/4367650555437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                style={{ borderColor: GRAY, background: WHITE, color: BLACK }}
              >
                WhatsApp-Anfrage
              </a>
              <a
                href="mailto:office@raumfrei-wien.at"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                style={{ borderColor: GRAY, background: WHITE, color: BLACK }}
              >
                E-Mail: office@raumfrei-wien.at
              </a>
            </div>
          </div>
        </div>

        {/* RECHTSSPALTE — Bild (echtes Image, kein Textoverlay) */}
        <div className="relative w-full self-center">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
            <Image
              src="/images/raeumung-wien.webp"
              alt="Räumung in Wien – modernes Büro mit Kartons und leeren Regalen"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 600px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
        backgroundImage: `
          radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
          radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
          linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Leistungen rund um die Räumung in Wien
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Welche Objekte und Aufgaben wir übernehmen
        </h3>

        {/* Einleitender Text */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Jede Räumung hat ihre Besonderheiten – Grundrisse, Zugänge, Zeitfenster und die
            individuellen Vorstellungen der Auftraggeber. Damit am Ende alles passt, stellen wir
            einen klaren Ablauf auf, sprechen die Schritte ruhig ab und bringen eine Mannschaft,
            die verlässlich anpackt. So bleibt der Tag planbar und die Übergabe gelingt ohne
            Hektik.
          </p>
          <p>
            Wir sind in ganz Wien unterwegs und übernehmen kleine wie große Projekte – vom
            kompakten Stadtapartment bis zur Büroetage. Unten finden Sie einen Überblick darüber,
            was konkret in unseren Leistungen enthalten ist und wie wir Ihre Räume zügig und
            geordnet freimachen.
          </p>
        </div>

        {/* Leistungsblöcke (zweispaltiges Raster, ohne Icons) */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Wohnungen & Häuser */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wohnungen &amp; Häuser
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Vom einzelnen Zimmer bis zum kompletten Objekt: Demontage von Möbeln, sichere
              Verpackung, geordnete Räumung aller Bereiche und sauberes Hinterlassen der Flächen.
              Wir arbeiten mit einem klaren Ablauf, damit alles fristgerecht und übersichtlich
              vorankommt.
            </p>
          </article>

          {/* Keller & Dachboden */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Keller &amp; Dachboden
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Freimachung auch in verwinkelten Bereichen: Wir klären Wege, Stiegen und Zugänge vorab,
              arbeiten zügig und mit Blick auf Überblick. Regale, Kisten, Saisonales – alles wird
              strukturiert ausgetragen, damit Sie wieder Platz haben.
            </p>
          </article>

          {/* Büros & Lager */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Büros &amp; Lager
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Abbau von Arbeitsplätzen, Regalsystemen und Nebenräumen – ruhig, geordnet und mit
              Rücksicht auf laufende Abläufe im Haus. Zugänge und Zeitfenster stimmen wir eng mit
              Ihnen und der Verwaltung ab, damit der Termin hält.
            </p>
          </article>

          {/* Nachlässe & Teilräumungen */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Nachlässe &amp; Teilräumungen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Einfühlsames Vorgehen, klare Abstimmung und geordnete Umsetzung. Wir nehmen einzelne
              Bereiche ebenso in Angriff wie komplette Einheiten – alles mit ruhig geführten
              Schritten und sauberer Dokumentation.
            </p>
          </article>

          {/* Vorbereitung zur Übergabe */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Vorbereitung zur Übergabe
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir bringen die Flächen in einen ordentlichen, vereinbarungsgemäßen Zustand – mit
              klarer Begehung am Ende und kurzen Notizen zu den wesentlichen Punkten. So können
              Sie den nächsten Schritt gleich verlässlich setzen.
            </p>
          </article>
        </div>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Ablauf – von der Besichtigung bis zur Übergabe
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Klare Schritte und ein verlässlicher Zeitplan
        </h3>

        {/* Einleitender Fließtext */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Eine Räumung wirkt oft größer, als sie am Ende ist. Mit einer strukturierten
            Vorbereitung, einer festen Ansprechperson und einem realistischen Zeitfenster
            bleibt alles überschaubar. Wir stimmen die Rahmenbedingungen ruhig ab, planen
            die Schritte im Detail und setzen sie zügig um – damit Ihr Termin hält und
            die Flächen pünktlich übergabefähig sind.
          </p>
          <p>
            Unser Ablauf ist bewährt, bleibt aber flexibel genug, um auf Besonderheiten
            Ihrer Liegenschaft oder Ihres Hauses einzugehen. Unten sehen Sie die fünf
            Kernschritte, nach denen wir zuverlässig arbeiten.
          </p>
        </div>

        {/* Timeline – 5 Schritte, ohne Icons */}
        <ol className="mt-10 space-y-8 md:space-y-10">
            {/* Schritt 1 */}
            <li className="relative pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                style={{ background: ACCENT, color: WHITE }}
              >
                1
              </span>
              <div
                className="rounded-xl border p-5 md:p-6"
                style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
              >
                <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                  Erstgespräch &amp; Terminvereinbarung
                </h4>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                  Wir klären kurz die Eckpunkte: Lage, Größe, Etagen, Zugänge und gewünschter
                  Zeitraum. Auf dieser Basis richten wir die weitere Planung aus und schlagen
                  einen passenden Zeitrahmen vor, der sich gut in Ihren Alltag integrieren lässt.
                </p>
              </div>
            </li>

            {/* Schritt 2 */}
            <li className="relative pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                style={{ background: ACCENT, color: WHITE }}
              >
                2
              </span>
              <div
                className="rounded-xl border p-5 md:p-6"
                style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
              >
                <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                  Kostenlose Besichtigung vor Ort
                </h4>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                  Beim Rundgang nehmen wir alle Bereiche auf – von Wohnräumen über Keller bis
                  zu Nebenflächen. Wir prüfen Wege, Stiegen, Lift- und Zufahrtsmöglichkeiten
                  und halten Besonderheiten fest. So bekommen Sie rasch einen klaren Überblick.
                </p>
              </div>
            </li>

            {/* Schritt 3 */}
            <li className="relative pl-12">
              <span
                aria-hidden
                className="absolute left=0 left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                style={{ background: ACCENT, color: WHITE }}
              >
                3
              </span>
              <div
                className="rounded-xl border p-5 md:p-6"
                style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
              >
                <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                  Transparentes Angebot &amp; Fixtermin
                </h4>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                  Nach der Besichtigung erhalten Sie ein schriftliches Angebot mit klaren
                  Positionen und einem fixierten Zeitraum. Damit haben Sie volle Transparenz
                  und können intern verlässlich planen – ohne Überraschungen.
                </p>
              </div>
            </li>

            {/* Schritt 4 */}
            <li className="relative pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                style={{ background: ACCENT, color: WHITE }}
              >
                4
              </span>
              <div
                className="rounded-xl border p-5 md:p-6"
                style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
              >
                <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                  Durchführung im vereinbarten Zeitfenster
                </h4>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                  Unser Team arbeitet ruhig, zügig und gut koordiniert. Wir richten die Abfolge
                  nach dem Plan aus, halten Wege frei und stimmen uns laufend mit Ihnen ab. So
                  bleibt alles im Takt und die Flächen werden Schritt für Schritt frei.
                </p>
              </div>
            </li>

            {/* Schritt 5 */}
            <li className="relative pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                style={{ background: ACCENT, color: WHITE }}
              >
                5
              </span>
              <div
                className="rounded-xl border p-5 md:p-6"
                style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
              >
                <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                  Abschluss &amp; Übergabe
                </h4>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                  Zum Schluss folgt eine kurze Begehung. Wir halten den Zustand kompakt fest, Sie
                  bekommen die Flächen ordentlich übergeben und können den nächsten Schritt
                  direkt einleiten. Alles ruhig, klar und termingerecht.
                </p>
              </div>
            </li>
        </ol>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section aria-label="Verlassenschaft Ankauf Wien" className="relative"

>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
{/* Table Card */}
    <div
      className="rounded-3xl shadow-sm overflow-hidden"
      style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
    >
      {/* Kopfzeile */}
      <div
        className="px-6 py-4 md:px-8 md:py-6 border-b text-center"
        style={{ borderColor: `${BRAND.gray}22`, background: `${BRAND.accent}0F` }}
      >
        <span className="font-bold text-lg md:text-xl" style={{ color: BRAND.black }}>
          Richtpreise nach Objekt und Umfang
        </span>
      </div>

      {/* Responsive Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr style={{ borderBottom: `1px solid ${BRAND.gray}22` }}>
              <th className="py-4 px-6 text-left align-bottom">Objekt / Umfang</th>
              <th className="py-4 px-6 text-right align-bottom">wenig Hausrat</th>
              <th className="py-4 px-6 text-right align-bottom">normaler Hausrat</th>
              <th className="py-4 px-6 text-right align-bottom">viel Hausrat</th>
              <th className="py-4 px-6 text-right align-bottom">Messie</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Keller", "ab € 199,–", "ab € 399,–", "ab € 699,–", "ab € 899,–"],
              ["kleine Wohnung", "ab € 699,–", "ab € 1.399,–", "ab € 1.799,–", "ab € 2.149,–"],
              ["große Wohnung", "ab € 1.149,–", "ab € 1.699,–", "ab € 2.349,–", "ab € 3.449,–"],
              ["Haus", "ab € 899,–", "ab € 2.149,–", "ab € 3.449,–", "ab € 3.949,–"],
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: `1px solid ${BRAND.gray}15` }}>
                <td className="py-4 px-6 font-medium">{row[0]}</td>
                <td className="py-4 px-6 text-right">{row[1]}</td>
                <td className="py-4 px-6 text-right">{row[2]}</td>
                <td className="py-4 px-6 text-right">{row[3]}</td>
                <td className="py-4 px-6 text-right">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fußzeile */}
      <div className="px-6 py-5 md:px-8 md:py-6 border-t" style={{ borderColor: `${BRAND.gray}22` }}>
        <p className="text-sm md:text-base" style={{ color: BRAND.gray }}>
          ★ Alle Preise verstehen sich als <em>Ab-Preise</em>. Verbindliche Angebote nach kostenloser
          Besichtigung vor Ort in Wien. Für eine Kurzabstimmung:{" "}
          <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a>{" "}
          oder telefonisch/WhatsApp:{" "}
          <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.
        </p>
      </div>
    </div>
    </div>
</section>
       <section
      className="relative"
      style={{
        backgroundImage: `
          radial-gradient(120rem 60rem at 12% -10%, rgba(217,117,0,.10), transparent),
          radial-gradient(100rem 56rem at 88% 120%, rgba(217,117,0,.08), transparent),
          linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Kosten für eine Räumung in Wien
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Wie sich der Preis realistisch zusammensetzt
        </h3>

        {/* Einleitender Text */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Jede Räumung ist anders: Grundrisse, Etagen, Zugänge und gewünschte Zeitfenster
            beeinflussen den Aufwand spürbar. Damit Sie verlässlich planen können, kalkulieren
            wir transparent und legen die Schritte so an, dass der Termin hält. Nach einer
            kurzen Besichtigung wissen Sie genau, womit zu rechnen ist – klar gegliedert und
            nachvollziehbar beschrieben.
          </p>
          <p>
            Unser Ziel ist, den Ablauf schlank zu halten und Doppelwege zu vermeiden. Die
            Teamstärke orientiert sich an der Größe des Objekts und an den praktischen
            Rahmenbedingungen im Haus. So entstehen faire, belastbare Angebote, die Ihnen
            ein ruhiges und planbares Vorgehen ermöglichen.
          </p>
        </div>

        {/* Faktorenraster ohne Icons */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Größe & Etagen */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Größe &amp; Etagen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Fläche, Raumanzahl und Stockwerke bestimmen den Arbeitsumfang. Mehr Ebenen
              bedeuten zusätzliche Wege und Abstimmungen. Wir kalkulieren das vorab ein und
              planen die Mannschaft so, dass alles im vereinbarten Zeitrahmen vorankommt.
            </p>
          </article>

          {/* Zugänge & Wege */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Zugänge &amp; Wege
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Breite der Gänge, Liftverfügbarkeit, Stiegen und Zufahrten wirken direkt auf
              den Zeitbedarf. Wir nehmen diese Punkte bei der Besichtigung auf und stimmen
              die Abfolge so ab, dass die Wege frei bleiben und die Arbeit ruhig läuft.
            </p>
          </article>

          {/* Zeitfenster & Hausregeln */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Zeitfenster &amp; Hausregeln
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              In vielen Häusern gelten fixe Zeiten und klare Vorgaben. Wir klären diese
              Bedingungen rechtzeitig und richten den Plan danach – damit alles im
              vorgesehenen Rahmen bleibt und Sie intern zuverlässig disponieren können.
            </p>
          </article>

          {/* Prioritäten & Reihenfolge */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Prioritäten &amp; Reihenfolge
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Was muss zuerst weg, was kann bis zum Schluss stehen bleiben? Eine klare
              Reihenfolge spart Zeit und hält den Tagesablauf stabil – besonders in
              bewohnten Häusern oder bei laufendem Bürobetrieb.
            </p>
          </article>

          {/* Dokumentation & Schlüsselübergabe */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Dokumentation &amp; Schlüsselübergabe
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Je nach Vorgabe kann eine kurze Dokumentation oder eine abgestimmte
              Schlüsselübergabe sinnvoll sein. Wir bereiten das in Ihrem Sinn vor und
              halten die wesentlichen Punkte kompakt fest – für eine reibungslose
              Abnahme ohne offene Fragen.
            </p>
          </article>
        </div>

        {/* Hinweisbox – ohne CTA, nur Klarstellung */}
        <div
          className="mt-10 rounded-xl border p-5 md:p-6"
          style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
            Transparente Kalkulation statt Pauschalliste
          </h4>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
            Wir arbeiten mit einem klaren, schriftlichen Angebot nach der Besichtigung – ohne
            pauschale Sammelwerte und ohne versteckte Zusatzpunkte. So wissen Sie im Voraus,
            welche Leistungen enthalten sind und in welchem Rahmen sich der Aufwand bewegt.
            Das schafft Planungssicherheit und eine saubere Basis für die Umsetzung.
          </p>
        </div>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Ihre Vorteile mit raumfrei-wien.at
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Warum Wiener Kundinnen &amp; Kunden uns vertrauen
        </h3>

        {/* Einleitender Text */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Eine Räumung ist dann richtig gut, wenn sie leise, planbar und verlässlich abläuft.
            Genau darauf sind wir in Wien spezialisiert. Wir arbeiten mit klaren Abläufen, halten
            Absprachen ein und sorgen dafür, dass Sie zu jedem Zeitpunkt wissen, wo wir stehen.
            Unser Ziel: ein sauberer Abschluss ohne Umwege – damit Sie sich rasch den nächsten
            Schritten widmen können.
          </p>
          <p>
            Was uns auszeichnet, ist die Kombination aus Handschlagqualität und durchdachter
            Organisation. Unten finden Sie die Punkte, die unsere Kundinnen und Kunden an uns
            besonders schätzen – anschaulich zusammengefasst und auf den Alltag in Wien
            zugeschnitten.
          </p>
        </div>

        {/* Vorteilskarten – ohne Icons, typografisch reduziert */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Terminsicherheit */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Terminsicherheit
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir planen realistisch und halten den vereinbarten Zeitraum ein. Wege, Liftzeiten
              und besondere Hausvorgaben klären wir vorab – so bleibt Ihr Kalender stabil und die
              Übergabe findet, wie besprochen, statt.
            </p>
          </article>

          {/* Persönliche Betreuung */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Persönliche Betreuung
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Eine feste Ansprechperson begleitet Sie vom ersten Gespräch bis zur Übergabe. Kurze
              Wege, klare Antworten und zügige Rückmeldungen – damit Entscheidungen einfach
              fallen und der Ablauf rund bleibt.
            </p>
          </article>

          {/* Diskretes Arbeiten */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Diskretes Arbeiten
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir gehen sorgsam vor und achten auf ein ruhiges Umfeld – ob in Wohnhäusern,
              Gründerzeithäusern oder gewerblichen Objekten. Abläufe werden so koordiniert, dass
              der Betrieb rundum möglichst ungestört bleibt.
            </p>
          </article>

          {/* Regionale Erfahrung */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Regionale Erfahrung
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir kennen die Wiener Gegebenheiten – von Altbau-Treppen über Anlieferzonen bis
              hin zu Hausordnungen. Diese Routine hilft, Stolpersteine früh zu erkennen und
              den Ablauf verlässlich auf Schiene zu halten.
            </p>
          </article>

          {/* Schriftliches Angebot (volle Breite) */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Schriftliches Angebot
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Nach der Besichtigung erhalten Sie ein klares, schriftliches Angebot mit allen
              vereinbarten Punkten und dem fixierten Zeitraum. Das schafft Transparenz und eine
              solide Basis für die weitere Planung – ohne Überraschungen.
            </p>
          </article>
        </div>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
        backgroundImage: `
          radial-gradient(120rem 60rem at 8% -10%, rgba(217,117,0,.10), transparent),
          radial-gradient(90rem 50rem at 105% 35%, rgba(217,117,0,.08), transparent),
          linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Für welche Situationen eignet sich eine Räumung?
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Praxisnahe Beispiele aus Wien
        </h3>

        {/* Einleitender Text */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            In Wien gibt es viele Anlässe, bei denen rasch und geordnet Räume frei werden
            müssen. Entscheidend ist ein Ablauf, der zum Haus und zu Ihrem Kalender passt – mit
            klarer Abstimmung, ruhigem Arbeiten und einem Ergebnis, das pünktlich hält. Die
            folgenden Beispiele zeigen, wann eine professionelle Räumung besonders hilft und wie
            sie in der Praxis umgesetzt wird.
          </p>
        </div>

        {/* Beispiele – rasterbasiert, ohne Icons */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Wohnungswechsel */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wohnungswechsel in der Stadt
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Beim Umzug zählt Tempo: Wir planen die Freimachung so, dass die alte Wohnung
              rechtzeitig übergabefähig ist. Wege im Stiegenhaus, Liftzeiten und Zufahrten
              werden im Vorfeld mit der Hausverwaltung abgestimmt. Das sorgt dafür, dass die
              Räumung im vereinbarten Zeitraum abgeschlossen ist – ohne Hektik.
            </p>
          </article>

          {/* Haushaltsauflösung */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Haushaltsauflösung mit Ruhe &amp; Übersicht
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wenn eine Wohnung oder ein Haus vollständig geräumt werden soll, ist ein
              behutsames, gut strukturiertes Vorgehen gefragt. Wir legen einen klaren Plan
              fest, stimmen uns mit Ihnen ab und arbeiten Schritt für Schritt – vom ersten
              Rundgang bis zur sauberen Übergabe.
            </p>
          </article>

          {/* Kellerfreimachung */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Kellerfreimachung &amp; Nebenräume
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Verwinkelte Bereiche, enge Zugänge und unterschiedliche Stockwerke – wir
              prüfen die Gegebenheiten vor Ort, planen die Abfolge und schaffen Platz,
              ohne den Hausbetrieb zu stören. Ideal, wenn schnell wieder Ordnung her muss.
            </p>
          </article>

          {/* Gewerberäumung */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Gewerberäumung &amp; Flächenwechsel
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Büros, Studios oder Lagerflächen werden ruhig und planbar freigemacht. Wir
              berücksichtigen Hausvorgaben, reservieren Zeitslots und koordinieren die
              Schritte so, dass der Betrieb rundum möglichst unbeeinträchtigt bleibt.
            </p>
          </article>

          {/* Nachlassräume (volle Breite) */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Nachlassräume geordnet freimachen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wenn Räume im Zuge eines Nachlasses frei werden, ist ein ruhiges, verlässliches
              Zusammenspiel besonders wichtig. Wir gehen abgestimmt vor, halten die Schritte
              transparent fest und sorgen dafür, dass die Flächen pünktlich und ordentlich
              übergeben werden können – mit einer Ansprechperson, die den Überblick behält.
            </p>
          </article>
        </div>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Häufige Fragen zur Räumung in Wien
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Antworten aus der Praxis – kompakt & verständlich
        </h3>

        {/* FAQ-Liste (5 Fragen & Antworten) */}
        <div className="mt-8 space-y-6">
          {/* Q1 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Muss ich bei der Räumung persönlich anwesend sein?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Nicht unbedingt. Nach der Besichtigung legen wir die Schritte, das Zeitfenster und
              die Schlüsselübergabe gemeinsam fest. Auf Wunsch führen wir die Abwicklung
              selbstständig durch und informieren Sie laufend. Für die Abschlussbegehung können
              Sie persönlich kommen oder eine Vertrauensperson benennen.
            </p>
          </article>

          {/* Q2 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wie schnell ist ein Termin möglich und wie lange dauert die Räumung?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Je nach Größe und Lage sind kurzfristige Termine oft innerhalb weniger Tage
              realisierbar. Die Dauer hängt von Fläche, Etagen und Zugängen ab. Nach der
              Besichtigung erhalten Sie einen realistischen Zeitplan mit fixiertem Zeitraum,
              damit Sie intern verlässlich disponieren können.
            </p>
          </article>

          {/* Q3 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wie gehen Sie mit Unterlagen und Datenträgern um?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Relevante Akten und Datenträger werden getrennt erfasst und geordnet an Sie
              übergeben. Vereinbarte Punkte halten wir transparent fest, damit Sie jederzeit
              nachvollziehen können, wo sich was befindet.
            </p>
          </article>

          {/* Q4 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Bekommen wir einen Fixpreis?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Ja. Nach der kostenlosen Besichtigung erhalten Sie ein schriftliches Angebot mit
              klaren Positionen und einem Fixbetrag für den vereinbarten Leistungsumfang. So
              haben Sie volle Transparenz und Budget­sicherheit.
            </p>
          </article>

          {/* Q5 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Was braucht es vorab von unserer Seite?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Ein kurzer Termin für die Besichtigung, Infos zu Zugängen und eventuellen
              Hausregeln sowie eine Ansprechperson für Rückfragen. Alles Weitere bereiten wir
              für Sie vor – mit einem übersichtlichen Plan bis zur Übergabe.
            </p>
          </article>
        </div>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
        backgroundImage: `
          radial-gradient(120rem 60rem at 12% -10%, rgba(217,117,0,.10), transparent),
          radial-gradient(100rem 56rem at 88% 120%, rgba(217,117,0,.08), transparent),
          linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Experten-Tipps für eine stressfreie Räumung
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          So bleiben Termin, Überblick und Nerven in Balance
        </h3>

        {/* Einleitender Text */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Eine Räumung in Wien ist oft ein Projekt mit vielen Beteiligten: Hausverwaltung,
            Nachbarschaft, interne Abläufe, Lieferfenster. Was hilft, ist ein klarer Plan, der
            realistisch bleibt und kleine Stolpersteine früh abfängt. Mit den folgenden Hinweisen
            bringen Sie Ruhe in den Ablauf und gewinnen wertvolle Zeit.
          </p>
          <p>
            Unsere Erfahrung: Je früher die Eckpunkte stehen und je besser der Ist-Zustand
            dokumentiert ist, desto einfacher lassen sich Termine halten. Die fünf Tipps unten
            sind kompakt, haben sich aber in der Praxis vielfach bewährt – vom Stadtapartment bis
            zur größeren Fläche.
          </p>
        </div>

        {/* Tipps – typografisch, ohne Icons */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Tipp 1 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              1) Frühzeitige Terminfenster fixieren
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Klären Sie mit der Hausverwaltung, wann Auf- und Abbau möglich ist (Liftzeiten,
              Stiegenhaus, Zufahrt). Je eher die Zeitfenster feststehen, desto sicherer bleibt
              Ihr Kalender – besonders in dicht bebauten Lagen oder bei Mischobjekten.
            </p>
          </article>

          {/* Tipp 2 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              2) „Light“-Bestandsaufnahme mit Fotos
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Ein kurzer Rundgang mit Handyfotos (Eingänge, Stiegen, schmale Stellen,
              Stellflächen) und eine knappe Liste der Hauptbereiche reichen oft schon aus.
              So lässt sich die Mannschaftsgröße zielgenau planen und der Ablauf realistisch
              takten.
            </p>
          </article>

          {/* Tipp 3 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              3) Prioritäten sauber definieren
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Legen Sie fest, was zuerst dran ist und was bis zuletzt bleiben kann (z.&nbsp;B.
              Arbeitsplätze, Regale, Privatstücke). Eine klare Reihenfolge verhindert unnötige
              Wege und hält den Ablauf stabil.
            </p>
          </article>

          {/* Tipp 4 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              4) Wertiges deutlich markieren
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Alles, was unbedingt bleiben oder mitkommen soll (z.&nbsp;B. Geräte, Muster,
              Unterlagen), gut sichtbar kennzeichnen. Das spart Rückfragen und sorgt dafür, dass
              Wichtiges zur richtigen Zeit an der richtigen Stelle ist.
            </p>
          </article>

          {/* Tipp 5 – volle Breite */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              5) Eine klare Ansprechperson benennen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wenn intern eine Person die Fäden zusammenhält, geht alles schneller: Rückfragen
              werden rasch geklärt, Absprachen sind eindeutig, und der Plan bleibt auf Schiene.
              Wir stimmen uns eng ab und dokumentieren die Schritte, damit am Ende alles
              nachweislich passt.
            </p>
          </article>
        </div>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
        backgroundImage: `
          radial-gradient(120rem 60rem at 50% -20%, rgba(217,117,0,.10), transparent),
          radial-gradient(100rem 56rem at 50% 120%, rgba(217,117,0,.08), transparent),
          linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: BLACK }}
        >
          Kontakt für Ihre Räumung in Wien
        </h2>

        {/* H3 */}
        <h3
          className="mt-3 text-lg md:text-xl font-medium"
          style={{ color: "#1F2937" }}
        >
          Unverbindliche Anfrage &amp; rasche Besichtigung
        </h3>

        {/* Einleitender Text (ohne zusätzliche Kontaktangaben im Fließtext) */}
        <div
          className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed space-y-4"
          style={{ color: "#374151" }}
        >
          <p>
            Wir halten den Ablauf bewusst schlank: ein kurzes Telefonat oder eine
            Nachricht, eine kostenlose Besichtigung vor Ort und ein klares,
            schriftliches Angebot mit fixiertem Zeitraum. So wissen Sie früh, woran
            Sie sind, und können intern alles ruhig einplanen.
          </p>
          <p>
            Während der Umsetzung haben Sie eine feste Ansprechperson, die den
            Überblick behält und Rückfragen rasch klärt. Die Flächen werden
            termingerecht freigemacht und in vereinbarter Qualität übergeben – ohne
            unnötige Schleifen.
          </p>
        </div>

        {/* Einziger (zweiter & letzter) Kontakt-CTA */}
        <div
          className="mt-8 rounded-xl p-5 md:p-6"
          style={{ border: `1px solid ${GRAY}`, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm md:text-base" style={{ color: "#374151" }}>
              Jetzt kurz abstimmen – wir melden uns zeitnah und sichern den passenden Termin für die Besichtigung.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="tel:+4367650555437"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center"
                style={{ background: ACCENT, color: WHITE }}
              >
                Anrufen: +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
              </a>
              <a
                href="https://wa.me/4367650555437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                style={{ borderColor: GRAY, background: WHITE, color: BLACK }}
              >
                WhatsApp-Anfrage
              </a>
              <a
                href="mailto:office@raumfrei-wien.at"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                style={{ borderColor: GRAY, background: WHITE, color: BLACK }}
              >
                E-Mail: office@raumfrei-wien.at
              </a>
            </div>
          </div>
        </div>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>





    </>
  );
}
