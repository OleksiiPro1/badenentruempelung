// app/bewertungen/page.tsx — Baden Entrümpelung (neu, passend zum Header)
import type { Metadata } from "next";
import ReviewsClient from "../../components/ReviewsClient";
import Link from "next/link";

// Brand (aus dem globalen Header)
const PRIMARY = "#2B3A42";
const SECONDARY = "#A7A9AC";
const ACCENT = "#CBB47B"; // Gold
const ACCENT_SOFT = `${ACCENT}99`;
const BG = "#FAFAFA";

export const metadata: Metadata = {
  metadataBase: new URL("https://badenentruempelung.at"),
  title: "Bewertungen – Baden Entrümpelung",
  description:
    "Echte Kundenstimmen zu Baden Entrümpelung. Erfahrungen aus Baden & Umgebung lesen oder eigene Rückmeldung schicken – ohne Registrierung.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/bewertungen" },
  openGraph: {
    title: "Bewertungen – Baden Entrümpelung",
    description:
      "Kundenstimmen zu Entrümpelung, Räumung & Verlassenschaften in Baden. Eigene Bewertung ohne Anmeldung möglich.",
    siteName: "Baden Entrümpelung",
    locale: "de_AT",
    type: "website",
    url: "https://badenentruempelung.at/bewertungen",
  },
};

export default function BewertungenPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-28 pb-10 mx-auto px-6 w-full"
        style={{ maxWidth: "1150px", background: BG }}
        aria-label="Bewertungen – Baden Entrümpelung"
      >
        <div
          className="rounded-3xl border bg-white/85 backdrop-blur p-8 md:p-10 shadow-sm relative overflow-hidden"
          style={{ borderColor: `${SECONDARY}66` }}
        >
          {/* zarter Deko-Gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                `radial-gradient(60rem 30rem at 0% -20%, #E7EBEE55 0%, transparent 60%), radial-gradient(60rem 30rem at 100% 120%, #E7EBEE33 0%, transparent 60%)`,
            }}
          />

          <div className="relative">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
              style={{ background: "#fff", color: PRIMARY, border: `1px solid ${SECONDARY}66` }}
            >
              Baden Entrümpelung
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2" style={{ color: PRIMARY }}>
              Bewertungen
            </h1>

            <p className="mt-4 text-[15px] md:text-base leading-relaxed" style={{ color: "#334049" }}>
              Lesen Sie Rückmeldungen von Kundinnen und Kunden aus Baden & Umgebung – oder schicken Sie uns Ihre eigene
              Bewertung ganz unkompliziert. <strong>Hinweis:</strong> Eigene Einträge werden ausschließlich lokal in Ihrem
              Browser vorbereitet (mailto) und nicht serverseitig gespeichert.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:info@badenentruempelung.at?subject=Bewertung%20Baden%20Entr%C3%BCmpelung&body=Hallo%20Baden%20Entr%C3%BCmpelung%2C%5Cn%5Cnhier%20ist%20meine%20R%C3%BCckmeldung%20zur%20Leistung%3A%20...%5Cn%5Cnviele%20Gr%C3%BC%C3%9Fe%2C%5Cn%5Cn"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition"
                style={{
                  color: "white",
                  background: `linear-gradient(${ACCENT},${ACCENT}) padding-box,linear-gradient(135deg,${ACCENT},#e6cf96) border-box`,
                  border: `1px solid ${ACCENT}`,
                  boxShadow: "0 8px 24px rgba(203,180,123,.35)",
                }}
              >
                Eigene Bewertung per E‑Mail
              </a>
              <Link
                href="https://wa.me/436767202623"
                className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-medium text-white shadow-md transition hover:shadow-lg hover:brightness-110"
              >
                WhatsApp Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS (client) */}
      <section className="pb-16 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <ReviewsClient accent={ACCENT_SOFT} />
      </section>

      {/* Optional: AggregateRating JSON-LD (falls vorhanden) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Baden Entrümpelung",
            url: "https://badenentruempelung.at",
            telephone: "+43 676 720 26 23",
            areaServed: "Baden, Niederösterreich",
            // Passen Sie ratingValue/reviewCount real an oder entfernen Sie block, wenn nicht gewünscht
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "6",
            },
          }),
        }}
      />
    </>
  );
}
