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

/** ===== SEO Metadata für /service/kellerentruempelung-wien ===== */
export const metadata: Metadata = {
  title: "Kellerentrümpelung Wien – schnell, sauber & terminsicher | raumfrei-wien.at",
  description:
    "Kellerentrümpelung in Wien mit klaren Abläufen, ruhiger Durchführung und Fixtermin. Kellerabteile, Altbaukeller, Regale & Nebenräume – kostenlose Besichtigung, schriftliches Anbot.",
  alternates: {
    canonical: "https://raumfrei-wien.at/service/kellerentruempelung-wien",
  },
  openGraph: {
    title: "Kellerentrümpelung Wien – schnell, sauber & terminsicher | raumfrei-wien.at",
    description:
      "Professionelle Kellerentrümpelung in Wien: klare Planung, feste Ansprechperson, ordentliche Übergabe. Gratis Besichtigung und Fixangebot.",
    url: "https://raumfrei-wien.at/service/kellerentruempelung-wien",
    siteName: "raumfrei-wien.at",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "/images/kellerentruempelung-wien.webp",
        width: 1200,
        height: 900,
        alt: "Kellerentrümpelung in Wien – aufgeräumter Keller mit Regalen und Kisten",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const ACCENT = "rgb(217, 117, 0)"; // Orange
const WHITE = "#FFFFFF";
const BLACK = "#000000";
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
              { "@type": "ListItem", position: 1, name: "Startseite", item: "https://raumfrei-wien.at/" },
              { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://raumfrei-wien.at/leistungen" },
              { "@type": "ListItem", position: 3, name: "Kellerentrümpelung Wien", item: "https://raumfrei-wien.at/service/kellerentruempelung-wien" }
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
              Kellerentrümpelung Wien – schnell, sauber &amp; terminsicher
            </h1>

            {/* H3 */}
            <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
              Feste Ansprechperson, klare Abläufe, ordentliche Übergabe
            </h3>

            {/* Intro-Copy (AT-Deutsch, без запрещённых слов) */}
            <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
              <p>
                Ein Keller wird rasch zum Abstellplatz für „später“. Wenn dann der Termin drängt,
                braucht es eine eingespielte Mannschaft, die ruhig arbeitet und einen fixen Plan
                hat. Genau das übernehmen wir in Wien – vom ersten Rundgang bis zur Übergabe. Mit
                klaren Schritten, verlässlichen Zeiten und einer Ansprechpartnerin bzw. einem
                Ansprechpartner, der alles koordiniert.
              </p>
              <p>
                Ob kompaktes Kellerabteil, Gewölbe im Altbau oder mehrere Nebenräume – wir klären
                Zugänge und Stiegen vorab, richten die Abfolge sinnvoll ein und machen die Flächen
                zügig frei. So bleibt Ihr Kalender stabil und das Hausumfeld entspannt.
              </p>
              <p>
                Nach der Besichtigung erhalten Sie ein übersichtliches, schriftliches Anbot mit
                fixiertem Zeitraum. Transparent, nachvollziehbar und so geplant, dass die
                Umsetzung pünktlich über die Bühne geht.
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
                src="/images/kellerentruempelung-wien.webp"
                alt="Kellerentrümpelung in Wien – heller Keller, Regale und Kisten, geordnete Durchführung"
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
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
      Leistungen rund um die Kellerentrümpelung in Wien
    </h2>

    {/* H3 */}
    <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
      Was wir verlässlich übernehmen – vom Kellerabteil bis zum Gewölbe
    </h3>

    {/* Einleitender Text */}
    <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
      <p>
        Ein Keller soll funktionieren: Platz bieten, gut zugänglich sein und am Ende
        ohne Aufwand übergeben werden können. Damit das gelingt, braucht es klare
        Schritte und eine Mannschaft, die ruhig und zielgerichtet arbeitet. Genau hier
        setzen wir an – mit einer <strong>festen Ansprechperson</strong>, realistischen
        Zeitfenstern und einem Ablauf, der sich nahtlos in den Alltag Ihres Hauses
        einfügt.
      </p>
      <p>
        Ob kleines Abteil, langgezogenes Gewölbe oder mehrere Nebenräume – wir klären
        Wege, Stiegen und Stellflächen vorab, strukturieren die Arbeit in sinnvolle
        Abschnitte und setzen sie zügig um. Unten finden Sie die Bereiche, die wir in
        Wien täglich übernehmen.
      </p>
    </div>

    {/* Leistungsblöcke – zweispaltiges Raster, keine Icons */}
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Kellerabteile */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Kellerabteile &amp; kleine Einheiten
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Wir machen einzelne Abteile rasch und geordnet frei – mit klarer Abfolge, kurzer
          Abstimmung und einem Ergebnis, das hält. Schlösser, Zugänge und Abläufe werden
          vorab besprochen, damit der Termin stabil bleibt.
        </p>
      </article>

      {/* Altbaukeller & Gewölbe */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Altbaukeller &amp; Gewölbe
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Lange Gänge, niedrige Durchgänge, ungerade Böden: Wir kennen die typischen
          Gegebenheiten in Wiener Häusern und richten die Schritte entsprechend ein –
          ruhig, umsichtig und mit Blick auf das gesamte Haus.
        </p>
      </article>

      {/* Regale & Arbeitsflächen */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Regale, Arbeitsflächen &amp; Nischen
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Demontage von Regalen, Freimachung von Abstellbereichen und geordnete
          Vorbereitung der Flächen. Wir arbeiten mit klaren Teilabschnitten, damit
          alles übersichtlich vorankommt.
        </p>
      </article>

      {/* Nebenräume & Lagerboxen */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Nebenräume &amp; Lagerboxen
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Von der kleinen Box bis zum größeren Sammelraum: Wir klären Zugänge, teilen
          den Ablauf sinnvoll ein und sorgen dafür, dass Wege frei bleiben und die
          Umsetzung zügig über die Bühne geht.
        </p>
      </article>

      {/* Vorbereitung für die Übergabe – volle Breite */}
      <article
        className="rounded-xl border p-6 md:col-span-2"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Vorbereitung für die Übergabe
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Am Ende sollen die Flächen ordentlich und vereinbarungsgemäß übergeben werden.
          Wir halten die wesentlichen Punkte kurz fest, stimmen uns mit der zuständigen
          Person ab und sorgen für einen Abschluss, der passt – ohne unnötige Schleifen.
        </p>
      </article>
    </div>

    {/* Abschlusslinie */}
    <div className="mt-10" aria-hidden>
      <div style={{ height: 1, width: "100%", background: "#E5E7EB" }} />
    </div>
  </div>
</section>
<section
  className="relative"
  
>
  <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
    {/* H2 */}
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
      Ablauf – vom Erstgespräch bis zur Schlüsselübergabe
    </h2>

    {/* H3 */}
    <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
      Fünf klare Schritte für eine planbare Kellerentrümpelung in Wien
    </h3>

    {/* Einleitender Text */}
    <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
      <p>
        Keller haben ihre Eigenheiten: enge Stiegen, lange Gänge, unterschiedliche
        Zugänge. Damit alles ruhig und zügig vorangeht, arbeiten wir mit einem
        übersichtlichen Ablauf und einer fixen Ansprechperson, die den Prozess
        koordiniert. So bleibt der Termin verlässlich – von der ersten Abstimmung bis zur
        ordentlichen Übergabe.
      </p>
      <p>
        Unser Vorgehen ist erprobt und gleichzeitig flexibel, damit es zu Ihrem Haus und
        Ihrem Kalender passt. Unten sehen Sie die fünf Schritte, nach denen wir in Wien
        täglich arbeiten.
      </p>
    </div>

    {/* Timeline – 5 Schritte ohne Icons */}
    <ol className="mt-10 space-y-8 md:space-y-10">
      {/* Schritt 1 */}
      <li className="relative pl-12">
        <span
          aria-hidden
          className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
          style={{ background: "rgb(217, 117, 0)", color: "#fff" }}
        >
          1
        </span>
        <div
          className="rounded-xl border p-5 md:p-6"
          style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
            Erstgespräch &amp; Terminfix
          </h4>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
            Wir klären die Eckdaten: Adresse, Größe der Bereiche, Stiegen, eventuelle
            Hausvorgaben und Ihr gewünschtes Zeitfenster. Auf dieser Basis schlagen wir
            einen realistischen Ablauf vor, der sich sauber in Ihren Tagesplan einfügt.
          </p>
        </div>
      </li>

      {/* Schritt 2 */}
      <li className="relative pl-12">
        <span
          aria-hidden
          className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
          style={{ background: "rgb(217, 117, 0)", color: "#fff" }}
        >
          2
        </span>
        <div
          className="rounded-xl border p-5 md:p-6"
          style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
            Kostenlose Besichtigung im Haus
          </h4>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
            Beim Rundgang sehen wir uns Abteile, Gewölbe und Nebenräume an, prüfen
            Zugänge, Stiegen und mögliche Stellflächen. So entsteht ein klares Bild für
            die Teamstärke und die Taktung – ohne Ratespiel.
          </p>
        </div>
      </li>

      {/* Schritt 3 */}
      <li className="relative pl-12">
        <span
          aria-hidden
          className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
          style={{ background: "rgb(217, 117, 0)", color: "#fff" }}
        >
          3
        </span>
        <div
          className="rounded-xl border p-5 md:p-6"
          style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
            Schriftliches Anbot &amp; fixes Zeitfenster
          </h4>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
            Sie erhalten ein übersichtliches Anbot mit klaren Positionen und einem
            fixierten Zeitraum. Das bringt Planungssicherheit – alles ist nachvollziehbar,
            ohne vage Sammelwerte.
          </p>
        </div>
      </li>

      {/* Schritt 4 */}
      <li className="relative pl-12">
        <span
          aria-hidden
          className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
          style={{ background: "rgb(217, 117, 0)", color: "#fff" }}
        >
          4
        </span>
        <div
          className="rounded-xl border p-5 md:p-6"
          style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
            Durchführung im Takt
          </h4>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
            Unser Team arbeitet ruhig und zügig, die Abfolge ist klar. Wege bleiben frei,
            Hausvorgaben sind berücksichtigt und Ihre Ansprechperson hält Sie auf dem
            Laufenden. So geht alles Schritt für Schritt voran.
          </p>
        </div>
      </li>

      {/* Schritt 5 */}
      <li className="relative pl-12">
        <span
          aria-hidden
          className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
          style={{ background: "rgb(217, 117, 0)", color: "#fff" }}
        >
          5
        </span>
        <div
          className="rounded-xl border p-5 md:p-6"
          style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
            Abschluss &amp; Schlüsselübergabe
          </h4>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
            Zum Schluss folgt eine kurze Begehung. Wir halten den Zustand kompakt fest
            und übergeben die Flächen vereinbarungsgemäß – ordentlich, pünktlich und
            ohne unnötige Schleifen.
          </p>
        </div>
      </li>
    </ol>

    {/* Abschlusslinie */}
    <div className="mt-10" aria-hidden>
      <div style={{ height: 1, width: "100%", background: "#E5E7EB" }} />
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
      radial-gradient(120rem 60rem at 12% -14%, rgba(217,117,0,.10), transparent),
      radial-gradient(96rem 54rem at 92% 120%, rgba(217,117,0,.08), transparent),
      linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
    {/* H2 */}
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
      Kosten der Kellerentrümpelung in Wien
    </h2>

    {/* H3 */}
    <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
      Wovon der Aufwand tatsächlich abhängt
    </h3>

    {/* Einleitender Text */}
    <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
      <p>
        Jeder Keller ist anders – mal kompakt und übersichtlich, mal verzweigt mit mehreren
        Abteilen und langen Gängen. Damit Sie verlässlich planen können, berechnen wir den Aufwand
        nicht „über den Daumen“, sondern legen die Schritte nach einer kurzen Besichtigung klar
        fest. So wissen Sie im Vorfeld, womit zu rechnen ist, und haben einen Zeitraum, der hält.
      </p>
      <p>
        Unser Ziel ist ein schlanker, planbarer Ablauf mit sauberer Übergabe. Unten sehen Sie die
        Faktoren, die den Preis in Wien typischerweise beeinflussen. Auf dieser Basis erstellen wir
        ein schriftliches Anbot – übersichtlich und gut nachvollziehbar.
      </p>
    </div>

    {/* Faktorenraster – ohne Icons */}
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Größe & Abschnitte */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Größe &amp; Abschnitte
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Fläche, Anzahl der Boxen und wie fein die Bereiche aufgeteilt sind, wirken direkt auf die
          Teamstärke und die benötigte Zeit. Mehr Abschnitte bedeuten meist zusätzliche Wege und
          Abstimmungen – das kalkulieren wir realistisch ein.
        </p>
      </article>

      {/* Stiegen & Wege */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Stiegen &amp; Wege im Haus
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Breite der Stiegen, Länge der Wege und die Möglichkeit, nahe anfahren zu können,
          bestimmen das Tempo. Wir prüfen diese Punkte vor Ort und legen die Abfolge so an, dass
          alles ruhig und zügig vorangeht.
        </p>
      </article>

      {/* Zugänge & Lift */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Zugänge &amp; Lift
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Gibt es einen Lift, ist er groß genug, und wie sind die Zufahrtsmöglichkeiten? Solche
          Rahmenbedingungen beeinflussen die Taktung und werden in der Kalkulation berücksichtigt.
        </p>
      </article>

      {/* Zeitfenster & Hausordnung */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Zeitfenster &amp; Hausordnung
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          In vielen Häusern gelten fixe Zeiten und klare Vorgaben. Wir stimmen diese Punkte früh
          ab und planen die Umsetzung so, dass Ihr Termin verlässlich hält und das Hausumfeld
          entspannt bleibt.
        </p>
      </article>

      {/* Dokumentation & Schlüssel – volle Breite */}
      <article
        className="rounded-xl border p-6 md:col-span-2"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Dokumentation &amp; Schlüsselübergabe
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Je nach Anforderung kann eine kurze Dokumentation oder eine abgestimmte Übergabe
          sinnvoll sein. Wir bereiten das in Ihrem Sinn vor und halten die wesentlichen Punkte
          kompakt fest – für eine ordentliche Abnahme ohne offene Fragen.
        </p>
      </article>
    </div>

    {/* Hinweisbox – transparent, ohne CTA */}
    <div
      className="mt-10 rounded-xl border p-5 md:p-6"
      style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
    >
      <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
        Klar kalkuliert: schriftliches Anbot nach Besichtigung
      </h4>
      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
        Nach der kostenlosen Besichtigung erhalten Sie ein übersichtliches Anbot mit allen
        Positionen und einem fixierten Zeitraum. Keine pauschalen Sammelansätze – stattdessen
        klare Angaben, damit Ihre Planung sicher steht.
      </p>
    </div>

    {/* Abschlusslinie */}
    <div className="mt-10" aria-hidden>
      <div style={{ height: 1, width: "100%", background: "#E5E7EB" }} />
    </div>
  </div>
</section>
<section
  className="relative"
  
>
  <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
    {/* H2 */}
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
      Ihre Vorteile mit raumfrei-wien.at
    </h2>

    {/* H3 */}
    <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
      Warum Wiener Haushalte &amp; Hausverwaltungen uns für Kellerentrümpelungen wählen
    </h3>

    {/* Einleitender Text */}
    <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
      <p>
        Keller sind eigene Welten: Stiegen, niedrige Durchgänge, unterschiedliche Zugänge und oft ein
        enger Zeitrahmen im Haus. Genau dafür haben wir einen klaren Zugang entwickelt – ruhig,
        planbar und auf Wiener Gegebenheiten abgestimmt. Unten sehen Sie die Punkte, die unsere
        Kundinnen und Kunden besonders schätzen.
      </p>
    </div>

    {/* Vorteilskarten – ohne Icons, typografisch klar */}
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Terminsicherheit */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Terminsicherheit im Haus
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Wir stimmen Liftzeiten, Zufahrten und Hausvorgaben früh ab und legen ein fixes Zeitfenster fest.
          So bleibt Ihr Kalender stabil – von der ersten Minute bis zur Übergabe.
        </p>
      </article>

      {/* Feste Ansprechperson */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Feste Ansprechperson
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Eine Person koordiniert alle Schritte – vom Erstgespräch bis zur Schlüsselübergabe. Kurze Wege,
          klare Entscheidungen, verlässliche Rückmeldungen.
        </p>
      </article>

      {/* Ruhiges Arbeiten */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Ruhiges Arbeiten im Stiegenhaus
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Wir arbeiten geordnet und rücksichtsvoll – Wege bleiben frei, Türen werden abgestimmt geöffnet,
          und alles läuft im vereinbarten Rahmen. Das Hausumfeld bleibt entspannt.
        </p>
      </article>

      {/* Wiener Ortskenntnis */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Wiener Routine &amp; Hauskenntnis
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Altbau-Gewölbe, Hofzufahrten, enge Gänge: Wir kennen die Details, die in der Praxis zählen, und
          planen die Abfolge so, dass kleine Hürden gar nicht erst groß werden.
        </p>
      </article>

      {/* Schriftliches Anbot – volle Breite */}
      <article
        className="rounded-xl border p-6 md:col-span-2"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Schriftliches Anbot mit klaren Punkten
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Nach der Besichtigung erhalten Sie ein übersichtliches Anbot mit allen vereinbarten Leistungen
          und einem fixierten Zeitraum. Transparent, nachvollziehbar und als solide Basis für Ihre
          interne Planung – ohne vage Sammelwerte.
        </p>
      </article>
    </div>

    {/* Abschlusslinie */}
    <div className="mt-10" aria-hidden>
      <div style={{ height: 1, width: "100%", background: "#E5E7EB" }} />
    </div>
  </div>
</section>
<section
  className="relative"
  style={{
    backgroundImage: `
      radial-gradient(120rem 60rem at 10% -14%, rgba(217,117,0,.10), transparent),
      radial-gradient(96rem 54rem at 108% 36%, rgba(217,117,0,.08), transparent),
      linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
    `,
  }}
>
  <div className="mx-auto w/full max-w-[1200px] px-4 py-14 md:py-18">
    {/* H2 */}
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
      Wann eine Kellerentrümpelung in Wien besonders hilft
    </h2>

    {/* H3 */}
    <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
      Praxisnahe Szenarien – vom Stadtapartment bis zum Altbau-Gewölbe
    </h3>

    {/* Einleitender Text */}
    <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
      <p>
        Keller sind oft die stillen Arbeitsräume eines Hauses – hier wird gelagert, zwischengestellt und
        vieles „für später“ abgelegt. Wenn dann ein Termin ansteht, braucht es einen klaren Plan, der zu
        den Gegebenheiten im Haus passt: Stiegen, Zugänge, Stellflächen, kurze Zeitfenster. Unten finden
        Sie typische Situationen aus Wien, in denen eine professionelle Freimachung spürbar entlastet.
      </p>
    </div>

    {/* Beispiele – zweispaltiges Raster, letzte Kachel volle Breite */}
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Wohnungswechsel */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Wohnungswechsel &amp; Übergabetermin
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Beim Auszug zählt jedes Detail: Wir klären Liftzeiten, Zufahrten und Stiegen vorab, teilen die
          Schritte sinnvoll ein und sorgen dafür, dass Kellerabteile rechtzeitig frei sind – für eine
          pünktliche, ordentliche Übergabe.
        </p>
      </article>

      {/* Platz für Neues schaffen */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Platz schaffen nach Umbau oder Zuzug
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Ob Nachwuchs, Homeoffice oder neue Hobbys – wir machen Nebenräume rasch nutzbar. Mit
          realistischen Zeitfenstern und ruhiger Abwicklung, damit der Alltag im Haus entspannt bleibt.
        </p>
      </article>

      {/* Altbaukeller strukturieren */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Altbaukeller neu ordnen
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Gewölbe, niedrige Durchgänge, lange Gänge – wir kennen die Eigenheiten der Wiener Häuser und
          richten die Abfolge entsprechend ein. Ergebnis: mehr Übersicht und wieder gut nutzbare Flächen.
        </p>
      </article>

      {/* Lagerboxen & Sammelräume */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Lagerboxen &amp; Sammelräume
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Von einzelnen Boxen bis zu größeren Sammelbereichen: Wir stimmen Zu- und Abfahrten ab, halten
          Wege frei und setzen die Arbeit so auf, dass alles verlässlich im vorgesehenen Rahmen bleibt.
        </p>
      </article>

      {/* Hausgemeinschaft – volle Breite */}
      <article
        className="rounded-xl border p-6 md:col-span-2"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Ordnung in der Hausgemeinschaft
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          In Mehrparteienhäusern zählt Rücksicht: Wir informieren rechtzeitig, koordinieren die Schritte
          und achten auf ein ruhiges Miteinander. So werden Flure, Gemeinschaftsflächen und Kellerzonen
          geordnet frei – ohne unnötige Unterbrechungen.
        </p>
      </article>
    </div>

    {/* Abschlusslinie */}
    <div className="mt-10" aria-hidden>
      <div style={{ height: 1, width: "100%", background: "#E5E7EB" }} />
    </div>
  </div>
</section>
<section
  className="relative"
  
>
  <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
    {/* H2 */}
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
      Häufige Fragen zur Kellerentrümpelung in Wien
    </h2>

    {/* H3 */}
    <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
      Klar &amp; praxisnah beantwortet
    </h3>

    {/* Einleitung */}
    <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
      <p>
        Viele Themen wiederholen sich bei Kellerprojekten in Wien: Zugänge, Zeitfenster, Umgang mit
        Unterlagen oder die Frage, ob jemand vor Ort sein muss. Unten finden Sie kompakte Antworten,
        wie wir typischerweise vorgehen – ruhig, planbar und mit einer festen Ansprechperson.
      </p>
    </div>

    {/* FAQ-Liste – 5 Q&A, keine Icons, keine CTAs */}
    <div className="mt-8 space-y-6">
      {/* Q1 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Muss ich bei der Kellerentrümpelung persönlich anwesend sein?
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Nicht zwingend. Nach der Besichtigung vereinbaren wir die Schritte, das Zeitfenster und die
          Schlüsselhandhabung. Auf Wunsch wickeln wir alles selbstständig ab und informieren Sie laufend;
          für die Abschlussbegehung können Sie persönlich kommen oder eine Vertrauensperson benennen.
        </p>
      </article>

      {/* Q2 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Wie schnell bekommen wir einen Termin – und wie lange dauert es?
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Kurzfristige Termine sind oft innerhalb weniger Tage möglich. Die Dauer hängt von Größe,
          Stiegen, Wegen und den vereinbarten Zeitfenstern im Haus ab. Nach der kostenlosen Besichtigung
          erhalten Sie einen realistischen, fixierten Zeitraum – damit Ihr Kalender stabil bleibt.
        </p>
      </article>

      {/* Q3 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Wie gehen Sie mit Akten, Geräten oder Datenträgern um?
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Vereinbarte Stücke werden getrennt erfasst und geordnet übergeben – auf Wunsch mit kurzer
          Dokumentation. Die genaue Vorgangsweise sprechen wir im Erstgespräch ab, damit alles eindeutig
          nachvollziehbar ist.
        </p>
      </article>

      {/* Q4 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Gibt es ein Fixangebot oder nur ungefähre Angaben?
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Sie erhalten ein schriftliches Anbot mit klaren Positionen und einem fixierten Zeitraum.
          Grundlage ist die Besichtigung – dadurch sind Aufwand und Ablauf sauber kalkuliert und
          für Sie transparent.
        </p>
      </article>

      {/* Q5 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          Was sollten wir vorab vorbereiten?
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Ein kurzer Foto-Rundgang (Eingänge, Stiegen, enge Stellen, mögliche Stellflächen) und eine
          Ansprechperson für Rückfragen reichen meist aus. Alles Weitere organisieren wir – mit einem
          übersichtlichen Plan bis zur Übergabe.
        </p>
      </article>
    </div>

    {/* Abschlusslinie */}
    <div className="mt-10" aria-hidden>
      <div style={{ height: 1, width: "100%", background: "#E5E7EB" }} />
    </div>
  </div>
</section>
<section
  className="relative"
  style={{
    backgroundImage: `
      radial-gradient(120rem 60rem at 12% -14%, rgba(217,117,0,.10), transparent),
      radial-gradient(96rem 54rem at 88% 120%, rgba(217,117,0,.08), transparent),
      linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
    `,
  }}
>
  <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
    {/* H2 */}
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
      Experten-Tipps für eine reibungslose Kellerentrümpelung
    </h2>

    {/* H3 */}
    <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
      So bleibt in Wien alles planbar – vom ersten Rundgang bis zur Übergabe
    </h3>

    {/* Einleitender Text */}
    <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
      <p>
        Kellerprojekte haben oft eigene Tücken: enge Stiegen, lange Wege, kurze Zeitfenster im Haus.
        Mit ein paar gezielten Vorbereitungen spart man spürbar Zeit und Nerven. Die folgenden fünf
        Tipps stammen aus der täglichen Praxis in Wiener Häusern und helfen, den Termin
        verlässlich über die Bühne zu bringen.
      </p>
    </div>

    {/* Tipps – rasterbasiert, ohne Icons */}
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Tipp 1 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          1) Zugänge &amp; Lift vorab klären
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Prüfen Sie, welche Stiegen, Türen und Zufahrten genutzt werden können und ob ein Lift zur
          Verfügung steht. Ein kurzer Abgleich mit der Hausverwaltung (Zeiten, Schlüsseldepots,
          Anfahrtsmöglichkeiten) sorgt für einen stabilen Ablauf.
        </p>
      </article>

      {/* Tipp 2 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          2) Foto-Check „light“ der Bereiche
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Ein kurzer Handy-Rundgang mit Fotos von Eingängen, Stiegen, langen Gängen und
          möglichen Stellflächen reicht oft aus, um die Teamstärke passend zu planen und die
          Abfolge sinnvoll zu takten.
        </p>
      </article>

      {/* Tipp 3 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          3) Was bleibt, klar markieren
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Alles, was fix bleiben oder mitkommen soll (z.&nbsp;B. Geräte, Werkzeuge, Unterlagen),
          gut sichtbar kennzeichnen. Das verhindert Rückfragen und hält den Zeitplan auf Schiene.
        </p>
      </article>

      {/* Tipp 4 */}
      <article
        className="rounded-xl border p-6"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          4) Stellflächen im Hof einplanen
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Kurze Wege beschleunigen alles: vorab Stellplätze für Fahrzeuge und Zwischenlager klären,
          damit Kisten und Regalteile nicht durchs ganze Haus getragen werden müssen.
        </p>
      </article>

      {/* Tipp 5 – volle Breite */}
      <article
        className="rounded-xl border p-6 md:col-span-2"
        style={{ borderColor: "#E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
      >
        <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
          5) Eine Ansprechperson benennen &amp; kurz protokollieren
        </h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
          Wenn intern jemand den Überblick behält, geht alles schneller: Entscheidungen sind klar,
          Fragen werden sofort geklärt. Ein knappes Protokoll (Start, Schritte, Abschluss) hilft,
          den Überblick zu behalten und die Übergabe sauber abzuschließen.
        </p>
      </article>
    </div>

    {/* Abschlusslinie */}
    <div className="mt-10" aria-hidden>
      <div style={{ height: 1, width: "100%", background: "#E5E7EB" }} />
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
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
      Kontakt für Ihre Kellerentrümpelung in Wien
    </h2>

    {/* H3 */}
    <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
      Unverbindlich anfragen &amp; Besichtigung rasch fixieren
    </h3>

    {/* Einleitender Text (ohne weitere Kontaktangaben im Fließtext) */}
    <div className="mt-6 max-w-3xl space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
      <p>
        Wir halten den Ablauf bewusst schlank: ein kurzer Anruf oder eine Nachricht, eine
        kostenlose Besichtigung vor Ort und ein klares, schriftliches Anbot mit fixiertem
        Zeitraum. So wissen Sie früh, woran Sie sind, und können alles im Haus ruhig einplanen.
      </p>
      <p>
        Während der Durchführung haben Sie eine feste Ansprechperson, die die Schritte koordiniert
        und bei Rückfragen sofort erreichbar ist. Die Freimachung erfolgt zügig und im vereinbarten
        Zeitfenster – mit ordentlicher Übergabe am Ende.
      </p>
    </div>

    {/* EINZIGER (zweiter & letzter) Kontakt-CTA: Telefon • WhatsApp • E-Mail */}
    <div
      className="mt-8 rounded-xl p-5 md:p-6"
      style={{ border: "1px solid #E5E7EB", background: "#FFFFFF", boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm md:text-base" style={{ color: "#374151" }}>
          Sichern Sie sich Ihren Wunschtermin – wir melden uns zeitnah zurück und stimmen alles kurz ab.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href="tel:+4367650555437"
            className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center"
            style={{ background: "rgb(217, 117, 0)", color: "#FFFFFF" }}
          >
            Anrufen: +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
          </a>
          <a
            href="https://wa.me/4367650555437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
            style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#000" }}
          >
            WhatsApp-Anfrage
          </a>
          <a
            href="mailto:office@raumfrei-wien.at"
            className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
            style={{ borderColor: "#E5E7EB", background: "#FFFFFF", color: "#000" }}
          >
            E-Mail: office@raumfrei-wien.at
          </a>
        </div>
      </div>
    </div>

    {/* Abschlusslinie */}
    <div className="mt-10" aria-hidden>
      <div style={{ height: 1, width: "100%", background: "#E5E7EB" }} />
    </div>
  </div>
</section>










    </>
  );
}
