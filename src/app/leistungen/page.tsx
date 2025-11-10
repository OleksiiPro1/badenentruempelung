// app/leistungen/page.tsx
import Link from "next/link";
import Leistungen from "../components/Leistungen";

export const metadata = {
  title:
    "Leistungen in Wien – Entrümpelung & Räumungen | raumfrei-wien.at",
  description:
    "Raumfrei Wien: Leistungen in ganz Wien – Entrümpelung, Wohnungs- und Hausräumungen sowie Verlassenschaften. Klare Abläufe, Fixtermine, persönliche Begleitung.",
};

// Brand palette (Raumfrei Wien)
const BRAND     = "#D97500"; // акцент (rgb(217,117,0))
const BLACK     = "#000000";
const WHITE     = "#FFFFFF";
const GRAY_TXT  = "#6B7280";
const GRAY_BR   = "#D1D5DB";

export default function LeistungenPage() {
  return (
    <main id="main" style={{ background: WHITE, color: BLACK }}>
      {/* HERO */}
      <section
        className="relative"
        aria-label="Leistungen in Wien"
      >
        <div className="mx-auto w-full max-w-[1150px] px-4 py-14 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
              style={{
                background: "#fff",
                color: BRAND,
                border: `1px solid ${GRAY_BR}`,
              }}
            >
              Wien • unverbindliche Besichtigung
            </span>

            <h1
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight"
              style={{ color: BLACK }}
            >
              Leistungen in Wien – Entrümpelung, Räumungen &amp; Verlassenschaften
            </h1>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: GRAY_TXT }}
            >
              Präzise geplant, diskret umgesetzt und klar dokumentiert:
              Wir unterstützen Sie bei <strong>Entrümpelungen</strong>,{" "}
              <strong>Wohnungs- und Hausräumungen</strong> sowie{" "}
              <strong>Verlassenschaften</strong> in allen Bezirken Wiens.
              Vor dem Termin erhalten Sie eine transparente Bestätigung mit Fixzeitfenster
              und Umfang – ohne Überraschungen.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {/* Акцентная кнопка */}
              <Link
                href="mailto:info@raumfrei-wien.at?subject=Anfrage%20Raumfrei%20Wien"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-90"
                style={{
                  background: BRAND,
                  color: "#fff",
                  boxShadow: "0 4px 10px rgba(217,117,0,0.25)",
                }}
              >
                Besichtigung anfragen
              </Link>

              {/* Вторая кнопка — нейтральная */}
              <Link
                href="/ueber-uns"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border transition hover:bg-gray-50"
                style={{
                  borderColor: GRAY_BR,
                  color: BLACK,
                  background: "#fff",
                }}
              >
                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="mx-auto w-full max-w-[1150px] px-4 pb-16 md:pb-20">
        {/* разделительная линия (акцентная, тонкая) */}
        <div className="my-8 h-px w-full" style={{ background: `${BRAND}55` }} />

        {/* Дополнительный вводный SEO-блок с h2/h3 */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: BLACK }}>
            Entrümpelung &amp; Räumung in Wien – unsere Leistungen
          </h2>
          <h3 className="mt-3 text-lg font-semibold" style={{ color: BLACK }}>
            Wie wir vorgehen
          </h3>
          <p
            className="mt-2 text-base md:text-lg leading-relaxed"
            style={{ color: GRAY_TXT }}
          >
            Jede Adresse ist anders. Damit Ihr Tag planbar bleibt, arbeiten wir mit
            klaren Zeitfenstern, einer festen Ansprechperson und einem strukturierten Ablauf.
            Auf Wunsch übernehmen wir die Schlüsselübergabe und halten Sie während des Termins
            kurz am Laufenden. Die Übergabe erfolgt sauber und pünktlich – mit schriftlicher Bestätigung.
          </p>
        </div>

        {/* разделительная линия */}
        <div className="my-8 h-px w-full" style={{ background: `${GRAY_BR}` }} />

        {/* Сетка услуг (ваш компонент) */}
        <Leistungen />

        {/* дополнительный SEO-текст (уникальный) */}
        <div
          className="mt-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          style={{ color: GRAY_TXT }}
        >
          <p className="mb-6">
            Ob komplette Räumung, gezielte Teilbereiche oder die Vorbereitung einer
            <strong> Verlassenschaft</strong>: Wir stimmen die Schritte transparent ab, halten
            Zusagen ein und dokumentieren die Übergabe nachvollziehbar. So behalten Sie jederzeit
            den Überblick – vom ersten Anruf bis zum Abschluss.
          </p>
          <p>
            Sie möchten kurzfristig einen Termin in Wien? Schreiben Sie uns an{" "}
            <a className="underline" href="mailto:info@raumfrei-wien.at">info@raumfrei-wien.at</a>{" "}
            oder rufen Sie direkt an:{" "}
            <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.
          </p>
        </div>
      </section>

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
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
            ],
          }),
        }}
      />
    

{/* EXPERTEN TIPPS */}
<section
  className="mx-auto w-full max-w-[1150px] px-4 pb-20"
  aria-label="Experten Tipps Entrümpelung Wien"
>
  <div
    className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm"
    style={{ borderColor: GRAY_BR }}
  >
    <h2
      className="text-2xl md:text-3xl font-extrabold mb-4"
      style={{ color: BLACK }}
    >
      Experten Tipps zur Entrümpelung in Wien
    </h2>

    <h3 className="text-lg font-semibold mb-2" style={{ color: BLACK }}>
      Planung ist entscheidend
    </h3>
    <p className="text-base leading-relaxed mb-5" style={{ color: GRAY_TXT }}>
      Eine gute Vorbereitung spart Zeit und Kosten. Erstellen Sie vorab eine kurze Übersicht über Räume,
      Zugänge und Besonderheiten Ihrer Wohnung oder Ihres Hauses. So kann unser Team den Ablauf
      präzise planen und das richtige Fahrzeug sowie die passende Teamgröße einteilen.
    </p>

    <h3 className="text-lg font-semibold mb-2" style={{ color: BLACK }}>
      Wertvolles erkennen und ansprechen
    </h3>
    <p className="text-base leading-relaxed mb-5" style={{ color: GRAY_TXT }}>
      Häufig finden sich in Kellern oder Dachböden Gegenstände, die sich noch verwerten oder weitergeben lassen.
      Unsere Fachleute erkennen solche Stücke rasch und beraten Sie offen, welche Optionen es gibt –
      ob Weitergabe, Ankauf oder Schätzung.
    </p>

    <h3 className="text-lg font-semibold mb-2" style={{ color: BLACK }}>
      Diskrete Durchführung
    </h3>
    <p className="text-base leading-relaxed mb-5" style={{ color: GRAY_TXT }}>
      Besonders in Mehrparteienhäusern ist Rücksicht wichtig. Wir arbeiten ruhig, respektvoll und mit klaren
      Zeitfenstern, damit Nachbarn und Hausgemeinschaft so wenig wie möglich beeinträchtigt werden.
    </p>

    <h3 className="text-lg font-semibold mb-2" style={{ color: BLACK }}>
      Nachbesichtigung und Übergabe
    </h3>
    <p className="text-base leading-relaxed" style={{ color: GRAY_TXT }}>
      Nach Abschluss prüfen wir die Flächen gemeinsam mit Ihnen. Alle Bereiche werden klar übergeben,
      sodass Sie sich auf den nächsten Schritt konzentrieren können – ob Renovierung, Übergabe oder Verkauf.
    </p>
  </div>
</section>
</main>
  );
}