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

/** ===== SEO Metadata для /service/entruempelungsfirma-wien ===== */
export const metadata: Metadata = {
  title: "Entrümpelungsfirma Wien – Wohnungen, Keller & Häuser | raumfrei-wien.at",
  description:
    "Entrümpelungsfirma in Wien: rasch, gepflegt & terminsicher. Wohnungen, Häuser, Keller oder Büros – klarer Ablauf, feste Ansprechperson, saubere Übergabe. Kostenlose Besichtigung.",
  alternates: {
    canonical: "https://raumfrei-wien.at/service/entruempelungsfirma-wien",
  },
  openGraph: {
    title: "Entrümpelungsfirma Wien – Wohnungen, Keller & Häuser | raumfrei-wien.at",
    description:
      "Räumungen in Wien mit klaren Abläufen, Fixtermin und ruhiger Durchführung. Kostenloses Anbot nach Besichtigung, feste Ansprechperson.",
    url: "https://raumfrei-wien.at/service/entruempelungsfirma-wien",
    siteName: "raumfrei-wien.at",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "/images/entruempelungsfirma-wien.webp",
        width: 1200,
        height: 900,
        alt: "Entrümpelungsfirma Wien – helle Wohnung, Kisten, geordnetes Team bei der Arbeit",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const ACCENT = "rgb(217, 117, 0)"; // Orange
const WHITE = "#FFFFFF";
const BLACK = "#000";
const GRAY = "#E5E7EB";

export default function Page() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://raumfrei-wien.at/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Leistungen",
                item: "https://raumfrei-wien.at/leistungen",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Entrümpelungsfirma Wien",
                item: "https://raumfrei-wien.at/service/entruempelungsfirma-wien",
              },
            ],
          }),
        }}
      />

      {/* ===== HERO: Bild rechts + 1× CTA ===== */}
      <section
        className="relative"
      >
        

        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-20">
          {/* LINKSSPALTE — Text */}
          <div className="flex flex-col justify-center">
            {/* H2 */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight" style={{ color: BLACK }}>
              Entrümpelungsfirma Wien – rasch, gepflegt &amp; terminsicher
            </h1>

            {/* H3 */}
            <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
              Feste Ansprechperson, klare Abläufe, saubere Übergabe
            </h3>

            {/* Intro-Copy (AT-Deutsch, без запрещённых слов) */}
            <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
              <p>
                Eine gute Entrümpelung ist mehr als das schnelle Ausräumen: Sie braucht einen
                verlässlichen Plan, ruhige Durchführung und einen Zeitraum, der hält. Genau das
                übernehmen wir in Wien – vom ersten Rundgang bis zur Übergabe. Mit einem
                eingespielten Team und einer fixen Ansprechperson, die alles koordiniert.
              </p>
              <p>
                Egal ob Stadtwohnung, Einfamilienhaus, Kellerabteil oder Bürofläche: Wir stimmen
                Wege und Zugänge vorab ab, arbeiten zügig und achten auf ein gepflegtes Bild im
                gesamten Haus. So bleibt Ihr Kalender stabil – und Sie haben den Kopf frei für die
                nächsten Schritte.
              </p>
              <p>
                Nach der Besichtigung erhalten Sie ein klares, schriftliches Anbot mit
                fixiertem Zeitraum. Ohne Überraschungen, mit nachvollziehbaren Punkten – damit
                Sie genau wissen, woran Sie sind.
              </p>
            </div>

            {/* EINZIGER CTA-Block (Telefon • WhatsApp • E-Mail) */}
            <div
              className="mt-8 rounded-xl p-4 md:p-5"
              style={{ border: `1px solid ${GRAY}`, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <p className="text-sm md:text-base mb-3" style={{ color: "#374151" }}>
                Kostenlose Besichtigung in Wien – kurzer Anruf oder Nachricht genügt, wir fixieren den Termin.
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
                  style={{ borderColor: GRAY, background: WHITE, color: "#111" }}
                >
                  WhatsApp-Anfrage
                </a>
                <a
                  href="mailto:office@raumfrei-wien.at"
                  className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                  style={{ borderColor: GRAY, background: WHITE, color: "#111" }}
                >
                  E-Mail: office@raumfrei-wien.at
                </a>
              </div>
            </div>
          </div>

          {/* RECHTSSPALTE — Bild ohne Text/Overlay */}
          <div className="relative w-full self-center">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
              <Image
                src="/images/entruempelungsfirma-wien.webp"
                alt="Entrümpelungsfirma in Wien – helle Räume, Kisten, geordnete Durchführung"
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
          Leistungen unserer Entrümpelungsfirma in Wien
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Was wir zuverlässig übernehmen
        </h3>

        {/* Einleitender Text */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Jede Räumung hat ihre Eigenheiten – Grundrisse, Zugänge, Zeitfenster und die
            individuellen Wünsche vor Ort. Damit alles planbar bleibt, arbeiten wir mit klaren
            Abläufen, ruhiger Koordination und einer festen Ansprechperson. Vom ersten Rundgang
            bis zur Übergabe führen wir die Schritte strukturiert und zügig durch.
          </p>
          <p>
            Ob kompakte Innenstadtwohnung, großzügiges Haus, Kellerabteil oder komplette
            Bürofläche: Wir richten die Abfolge so ein, dass sie sich nahtlos in Ihren Terminplan
            einfügt und im Haus gut funktioniert. Unten finden Sie die Bereiche, die wir täglich
            für Kundinnen und Kunden in Wien übernehmen.
          </p>
        </div>

        {/* Leistungsblöcke – zweispaltiges Raster, ohne Icons */}
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
              Vom einzelnen Zimmer bis zum gesamten Objekt: Demontage von Möbeln, geordnete
              Freimachung aller Bereiche und Übergabe in vereinbartem Zustand. Wir arbeiten
              zügig, umsichtig und mit einem Ablauf, der hält.
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
              Wir schaffen Platz in verwinkelten Bereichen: Stiegen, schmale Zugänge und
              Abstellflächen werden vorab geklärt, die Arbeitsschritte sinnvoll getaktet.
              Ideal, wenn rasch wieder Ordnung einziehen soll.
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
              Geordnete Freimachung von Arbeitsplätzen, Regalsystemen und Nebenräumen – mit
              Rücksicht auf laufende Abläufe im Haus. Zugänge und Zeitfenster stimmen wir
              frühzeitig ab, damit Ihr Termin stabil bleibt.
            </p>
          </article>

          {/* Teilräumungen & Nachlassräume */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Teilräumungen &amp; Nachlassräume
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Einfühlsam und strukturiert: Wir nehmen einzelne Bereiche ebenso in Angriff wie
              komplette Einheiten. Absprachen halten, Schritte transparent machen, Übergabe
              sauber abschließen – ruhig und planbar.
            </p>
          </article>

          {/* Vorbereitung zur Übergabe – volle Breite */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Vorbereitung zur Übergabe
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir übergeben die Flächen in einem ordentlichen, vereinbarungsgemäßen Zustand und
              halten die wesentlichen Punkte kurz fest. So können Sie den nächsten Schritt
              verlässlich setzen – ohne zusätzliche Schleifen.
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
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: BLACK }}
        >
          Ablauf – vom Erstgespräch bis zur Schlüsselübergabe
        </h2>

        {/* H3 */}
        <h3
          className="mt-3 text-lg md:text-xl font-medium"
          style={{ color: "#1F2937" }}
        >
          Fünf klare Schritte für einen planbaren Termin
        </h3>

        {/* Einleitender Text */}
        <div
          className="mt-6 space-y-4 text-base md:text-lg leading-relaxed"
          style={{ color: "#374151" }}
        >
          <p>
            Gute Entrümpelung heißt: ruhig, präzise und verlässlich arbeiten. Damit Ihr
            Termin hält, legen wir vorab einen übersichtlichen Fahrplan fest, stimmen
            die Rahmenbedingungen ab und begleiten Sie mit einer fixen Ansprechperson
            durch alle Phasen. So bleibt der Tag auf Schiene – vom ersten Anruf bis zur
            sauberen Übergabe.
          </p>
          <p>
            Unser Prozess ist erprobt, bleibt aber flexibel genug, um auf die Gegebenheiten
            in Wien – von Altbau bis Neubau, von Erdgeschoß bis Dach – rasch zu reagieren.
            Unten sehen Sie, wie wir üblicherweise vorgehen.
          </p>
        </div>

        {/* Timeline – 5 Schritte ohne Icons */}
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
                Wir klären kurz die Eckdaten: Lage, Größe, Etagen, Zugänge und Ihr
                gewünschtes Zeitfenster. Auf dieser Basis schlagen wir einen realistischen
                Rahmen vor, der zu Ihrem Kalender und zu den Gegebenheiten im Haus passt.
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
                Kostenlose Besichtigung
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Beim Rundgang erfassen wir alle Bereiche – von Wohnräumen über Keller bis
                zu Nebenflächen. Wir prüfen Wege, Stiegen, Lift- und Zufahrtsmöglichkeiten
                und halten Besonderheiten fest. So entsteht ein klares Bild für die Planung.
              </p>
            </div>
          </li>

          {/* Schritt 3 */}
          <li className="relative pl-12">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
              style={{ background: ACCENT, color: WHITE }}
            >
              3
            </span>
            <div
              className="rounded-xl border p-5 md:p-6"
              style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                Fixangebot &amp; Zeitfenster
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Sie erhalten ein schriftliches Anbot mit klaren Positionen und einem
                fixierten Zeitraum. Damit haben Sie volle Transparenz und können intern
                verlässlich disponieren – ohne Überraschungen.
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
                Durchführung im Takt
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Unser Team arbeitet ruhig und zügig, die Abfolge ist klar getaktet. Wege
                bleiben frei, Absprachen werden eingehalten, und Sie haben eine feste
                Ansprechperson, die den Überblick behält und Rückfragen sofort klärt.
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
                Abschluss &amp; Kurzprotokoll
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Zum Schluss machen wir eine kurze Begehung und halten den Zustand kompakt
                fest. Danach erfolgt die Schlüsselübergabe – ordentlich, nachvollziehbar und
                im vereinbarten Rahmen.
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
style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
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
          radial-gradient(120rem 60rem at 10% -12%, rgba(217,117,0,.10), transparent),
          radial-gradient(90rem 52rem at 108% 35%, rgba(217,117,0,.08), transparent),
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
          Kosten einer Entrümpelung in Wien
        </h2>

        {/* H3 */}
        <h3
          className="mt-3 text-lg md:text-xl font-medium"
          style={{ color: "#1F2937" }}
        >
          Wovon der Aufwand tatsächlich abhängt
        </h3>

        {/* Einleitender Text */}
        <div
          className="mt-6 space-y-4 text-base md:text-lg leading-relaxed"
          style={{ color: "#374151" }}
        >
          <p>
            Jede Räumung ist anders: Grundrisse, Etagen, Zugänge und der gewünschte
            Zeitrahmen wirken direkt auf den Aufwand. Damit Sie verlässlich planen können,
            kalkulieren wir transparent und halten die besprochenen Schritte schriftlich fest.
            Nach einer kurzen Besichtigung wissen Sie genau, womit zu rechnen ist – klar
            gegliedert, nachvollziehbar und ohne Überraschungen.
          </p>
          <p>
            Unser Ziel ist ein schlanker, planbarer Ablauf. Wir stellen die Mannschaft so
            zusammen, dass die Arbeit zügig vorangeht und der vereinbarte Termin hält. Unten
            sehen Sie die wichtigsten Faktoren, die bei der Preisbildung eine Rolle spielen.
          </p>
        </div>

        {/* Faktorenraster – ohne Icons */}
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
              Fläche, Anzahl der Räume und Stockwerke bestimmen die Crew-Größe und die
              benötigte Zeit. Mehr Ebenen bedeuten meist zusätzliche Wege – das wird in der
              Planung realistisch berücksichtigt.
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
              Breite der Stiegen, Liftverfügbarkeit und Zufahrten haben unmittelbaren Einfluss
              auf den Ablauf. Wir prüfen diese Punkte bei der Besichtigung und legen die
              Reihenfolge der Schritte entsprechend fest.
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
              In vielen Häusern gelten feste Zeiten oder besondere Vorgaben. Wir stimmen diese
              Punkte früh ab und planen die Umsetzung so, dass alles im vereinbarten Zeitraum
              funktioniert und Ihr Kalender stabil bleibt.
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
              Was muss zuerst weg, was kann bis zuletzt bleiben? Eine klare Reihenfolge spart
              Wege, hält den Ablauf ruhig und beschleunigt die Freimachung – besonders in
              bewohnten Häusern oder bei laufendem Bürobetrieb.
            </p>
          </article>

          {/* Dokumentation & Schlüssel – volle Breite */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Dokumentation &amp; Schlüsselübergabe
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Je nach Vorgaben kann eine kurze Dokumentation oder eine abgestimmte Übergabe
              sinnvoll sein. Wir bereiten das in Ihrem Sinn vor und halten die wesentlichen
              Punkte kompakt fest – für eine geordnete Abnahme ohne offene Fragen.
            </p>
          </article>
        </div>

        {/* Hinweisbox – transparent, ohne CTA */}
        <div
          className="mt-10 rounded-xl border p-5 md:p-6"
          style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
            Transparentes Fixangebot nach Besichtigung
          </h4>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
            Nach der kostenlosen Besichtigung erhalten Sie ein schriftliches Anbot mit klaren
            Positionen und einem fixierten Zeitraum. So haben Sie volle Klarheit über Umfang
            und Aufwand – eine verlässliche Basis für Ihre Planung, ohne pauschale Sammelwerte.
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
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: BLACK }}
        >
          Ihre Vorteile mit unserer Entrümpelungsfirma in Wien
        </h2>

        {/* H3 */}
        <h3
          className="mt-3 text-lg md:text-xl font-medium"
          style={{ color: "#1F2937" }}
        >
          Was Kundinnen &amp; Kunden an unserer Arbeitsweise schätzen
        </h3>

        {/* Einleitender Text */}
        <div
          className="mt-6 space-y-4 text-base md:text-lg leading-relaxed"
          style={{ color: "#374151" }}
        >
          <p>
            Wer in Wien eine Entrümpelung beauftragt, erwartet Zuverlässigkeit und ein
            Team, das ohne großes Aufsehen anpackt. Genau hier setzen wir an: mit
            klaren Abläufen, ruhigem Auftreten und einer Koordination, die vom ersten
            Anruf bis zur Übergabe stimmig bleibt. Unser Zugang ist praktisch,
            menschlich und auf den Punkt – damit Ihr Tag planbar ist und das Ergebnis
            überzeugt.
          </p>
          <p>
            Unten finden Sie die fünf Punkte, die unsere Kundinnen und Kunden besonders
            oft erwähnen. Sie zeigen, worauf wir in der Zusammenarbeit wirklich Wert
            legen und was unsere Arbeit in der Stadt ausmacht.
          </p>
        </div>

        {/* Vorteilskarten – ohne Icons, typografisch klar */}
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
              Wir planen realistisch und halten den vereinbarten Zeitraum ein. Liftzeiten,
              Zufahrten und Hausvorgaben klären wir im Vorfeld, damit die Abfolge passt
              und Ihr Kalender nicht ins Wanken gerät.
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
              Eine feste Ansprechperson begleitet Sie durch den gesamten Prozess, bündelt
              Rückfragen und sorgt für kurze Wege. Dadurch bleiben Entscheidungen klar und
              der Ablauf geradlinig.
            </p>
          </article>

          {/* Ruhiges Auftreten */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Ruhiges Auftreten im Haus
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir arbeiten geordnet und rücksichtsvoll – ob im Gründerzeithaus, im Neubau
              oder in gewerblichen Objekten. Die Wege bleiben frei, und wir stimmen uns
              sauber mit allen Beteiligten ab.
            </p>
          </article>

          {/* Wiener Ortskenntnis */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Regionale Routine &amp; Ortskenntnis
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir kennen die Gegebenheiten in Wien – von engen Gassen bis zu
              Hausordnungen. Diese Erfahrung hilft, Wege klug zu planen und
              unerwartete Hürden früh zu entschärfen.
            </p>
          </article>

          {/* Schriftliches Anbot – volle Breite */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Schriftliches Anbot mit klaren Punkten
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Nach der Besichtigung erhalten Sie ein übersichtliches, schriftliches Anbot
              mit allen vereinbarten Leistungen und einem fixierten Zeitraum. So haben Sie
              volle Klarheit und eine solide Basis für Ihre interne Planung – ohne
              Überraschungen.
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
          radial-gradient(120rem 60rem at 8% -12%, rgba(217,117,0,.10), transparent),
          radial-gradient(96rem 54rem at 112% 40%, rgba(217,117,0,.08), transparent),
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
          Wann eine Entrümpelung besonders hilft
        </h2>

        {/* H3 */}
        <h3
          className="mt-3 text-lg md:text-xl font-medium"
          style={{ color: "#1F2937" }}
        >
          Praxisbeispiele aus Wien – vom Stadtapartment bis zur Bürofläche
        </h3>

        {/* Einleitender Text */}
        <div
          className="mt-6 space-y-4 text-base md:text-lg leading-relaxed"
          style={{ color: "#374151" }}
        >
          <p>
            In einer Stadt wie Wien ändern sich Bedürfnisse schnell: Räume werden neu
            genutzt, Flächen zusammengelegt oder müssen kurzfristig freigemacht
            werden. Damit alles geordnet abläuft, braucht es einen klaren Plan, der
            zum Haus und zu Ihrem Kalender passt. Unten finden Sie typische Fälle, in
            denen unsere Entrümpelungsfirma täglich unterstützt – ruhig,
            verlässlich und mit sauberer Übergabe.
          </p>
        </div>

        {/* Beispiele – zweispaltiges Raster ohne Icons */}
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
              Beim Umzug zählt ein verlässlicher Zeitplan. Wir stimmen Liftzeiten und
              Zufahrten ab, teilen die Schritte sinnvoll ein und sorgen dafür, dass
              das Objekt rechtzeitig übergabefähig ist – ohne unnötige Schleifen.
            </p>
          </article>

          {/* Keller frei machen */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Keller &amp; Nebenräume freimachen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Verwinkelte Stiegen, schmale Gänge, wenig Platz – wir prüfen die Gegebenheiten
              vorab und setzen den Ablauf so auf, dass wieder Ordnung einkehrt und Wege
              frei werden.
            </p>
          </article>

          {/* Büroflächen neu aufteilen */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Büroflächen neu aufteilen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wenn Abteilungen zusammengelegt oder Bereiche angepasst werden, räumen wir
              Arbeitsplätze, Regale und Nebenräume geordnet und im vereinbarten Takt – mit
              Rücksicht auf den laufenden Betrieb im Haus.
            </p>
          </article>

          {/* Nachlassräume */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Nachlassräume ordnen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              In sensiblen Phasen braucht es Ruhe und Übersicht. Wir stimmen die Schritte
              behutsam ab, halten die wichtigsten Punkte nachvollziehbar fest und
              übergeben die Flächen in vereinbartem Zustand.
            </p>
          </article>

          {/* Zwischenlager leeren – volle Breite */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Zwischenlager &amp; temporäre Flächen zügig frei
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wenn Zwischenflächen schnell zurückgegeben werden müssen, zählen Takt und
              Koordination. Wir prüfen Zugänge und Zeitfenster, teilen die Arbeit sinnvoll
              ein und bringen das Projekt ruhig und termingerecht über die Ziellinie.
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
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: BLACK }}
        >
          Häufige Fragen zur Entrümpelungsfirma in Wien
        </h2>

        {/* H3 */}
        <h3
          className="mt-3 text-lg md:text-xl font-medium"
          style={{ color: "#1F2937" }}
        >
          Kurz &amp; verständlich beantwortet
        </h3>

        {/* FAQ-Liste */}
        <div className="mt-8 space-y-6">
          {/* Q1 */}
          <article
            className="rounded-xl border p-6"
            style={{
              borderColor: GRAY,
              background: WHITE,
              boxShadow: "0 6px 20px rgba(0,0,0,.05)",
            }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Muss ich bei der Entrümpelung persönlich anwesend sein?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Nicht zwingend. Nach der Besichtigung legen wir die Schritte, das Zeitfenster
              und die Schlüsselhandhabung gemeinsam fest. Auf Wunsch führen wir die Abwicklung
              selbstständig durch und informieren Sie laufend – für die Abschlussbegehung
              können Sie persönlich kommen oder eine Vertrauensperson benennen.
            </p>
          </article>

          {/* Q2 */}
          <article
            className="rounded-xl border p-6"
            style={{
              borderColor: GRAY,
              background: WHITE,
              boxShadow: "0 6px 20px rgba(0,0,0,.05)",
            }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wie schnell bekommen wir einen Termin und wie lange dauert es?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Kurzfristige Termine sind oft innerhalb weniger Tage möglich. Die Dauer hängt
              von Fläche, Etagen und Zugängen ab. Nach der kostenlosen Besichtigung erhalten
              Sie einen realistischen, fixierten Zeitraum – so bleibt Ihr Kalender stabil.
            </p>
          </article>

          {/* Q3 */}
          <article
            className="rounded-xl border p-6"
            style={{
              borderColor: GRAY,
              background: WHITE,
              boxShadow: "0 6px 20px rgba(0,0,0,.05)",
            }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wie läuft die Preisgestaltung ab – gibt es einen Fixpreis?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Ja. Nach dem Rundgang erhalten Sie ein schriftliches Anbot mit klaren Positionen
              und einem Fixbetrag für den vereinbarten Leistungsumfang. So wissen Sie im
              Voraus, womit zu rechnen ist – ohne Überraschungen.
            </p>
          </article>

          {/* Q4 */}
          <article
            className="rounded-xl border p-6"
            style={{
              borderColor: GRAY,
              background: WHITE,
              boxShadow: "0 6px 20px rgba(0,0,0,.05)",
            }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wie wird mit Unterlagen oder Datenträgern umgegangen?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Relevante Akten und Datenträger werden separat erfasst und geordnet an Sie
              übergeben – bei Bedarf mit kurzer Dokumentation. Die Vorgehensweise stimmen
              wir vorab mit Ihnen ab.
            </p>
          </article>

          {/* Q5 */}
          <article
            className="rounded-xl border p-6"
            style={{
              borderColor: GRAY,
              background: WHITE,
              boxShadow: "0 6px 20px rgba(0,0,0,.05)",
            }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Was sollten wir im Vorfeld vorbereiten?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Ein kurzes Erstgespräch, ein Besichtigungstermin, Infos zu Zugängen und
              Hausvorgaben sowie eine Ansprechperson für Rückfragen reichen aus. Alles
              Weitere organisieren wir – mit einem übersichtlichen Plan bis zur Übergabe.
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
          radial-gradient(120rem 60rem at 12% -12%, rgba(217,117,0,.10), transparent),
          radial-gradient(100rem 56rem at 88% 120%, rgba(217,117,0,.08), transparent),
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
          Experten-Tipps für eine reibungslose Entrümpelung
        </h2>

        {/* H3 */}
        <h3
          className="mt-3 text-lg md:text-xl font-medium"
          style={{ color: "#1F2937" }}
        >
          So bleibt alles planbar – vom ersten Anruf bis zur Übergabe
        </h3>

        {/* Einleitender Text */}
        <div
          className="mt-6 space-y-4 text-base md:text-lg leading-relaxed"
          style={{ color: "#374151" }}
        >
          <p>
            In Wien ist jede Entrümpelung ein kleines Projekt: Hausregeln, Liftzeiten,
            Zugänge, interne Abläufe – vieles greift ineinander. Mit wenigen, gut
            abgestimmten Vorbereitungen lässt sich der Termin spürbar verkürzen und
            die Durchführung ruhiger gestalten. Unten finden Sie fünf Hinweise aus
            der Praxis, die sich bei Stadtwohnungen, Häusern und Büroflächen bewährt
            haben.
          </p>
        </div>

        {/* Tipps – rasterbasiert, ohne Icons */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Tipp 1 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              1) Terminfenster früh fixieren
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Klären Sie mit der Hausverwaltung, wann Zu- und Abfahrten möglich sind und wie
              die Liftzeiten aussehen. Je früher das steht, desto stabiler bleibt Ihr
              Kalender – besonders in dicht bebauten Lagen oder bei gemischter Nutzung.
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
              Ein kurzer Rundgang mit Handyfotos (Eingänge, Stiegen, enge Stellen,
              Stellflächen) plus eine knappe Liste der Hauptbereiche reicht oft aus.
              So lässt sich die Teamstärke realistisch planen und die Abfolge optimal takten.
            </p>
          </article>

          {/* Tipp 3 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              3) Prioritäten klar kennzeichnen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Markieren Sie, was bleiben oder mitkommen soll – etwa Geräte, Muster oder
              Unterlagen. Eine eindeutige Kennzeichnung verhindert Rückfragen und hält
              den Ablauf ruhig.
            </p>
          </article>

          {/* Tipp 4 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              4) Wege &amp; Stellflächen freihalten
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Reservierte Parkmöglichkeiten, freie Stiegenhäuser und klare Wege sparen
              Zeit. Kurze Abstimmungen mit Nachbarinnen und Nachbarn zahlen sich aus –
              das Haus bleibt entspannt, der Ablauf effizient.
            </p>
          </article>

          {/* Tipp 5 – volle Breite */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              5) Eine Ansprechperson bestimmen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wenn intern eine Person die Fäden in der Hand hält, werden Fragen schneller
              geklärt und Entscheidungen zügig getroffen. Wir stimmen uns eng ab und halten
              die Schritte kurz fest – so bleibt alles nachvollziehbar bis zur Übergabe.
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
          Kontakt für Ihre Entrümpelung in Wien
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
            Wir halten den Weg bewusst schlank: ein kurzes Telefonat oder eine Nachricht,
            eine kostenlose Besichtigung vor Ort und ein klares, schriftliches Anbot mit
            fixiertem Zeitraum. So wissen Sie früh, woran Sie sind und können intern ohne
            Hektik planen.
          </p>
          <p>
            Während der Durchführung haben Sie eine feste Ansprechperson, die den Überblick
            behält und Rückfragen sofort klärt. Die Freimachung erfolgt ruhig und
            terminsicher – mit ordentlicher Übergabe am Schluss.
          </p>
        </div>

        {/* EINZIGER (zweiter & letzter) Kontakt-CTA */}
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
