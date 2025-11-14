// app/ueber-uns/page.tsx — Baden Entrümpelung (neu, passend zum Header)
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/** Brand (Baden Entrümpelung — wie im Header) */
const PRIMARY = "#2B3A42"; // Text/Links
const SECONDARY = "#A7A9AC"; // Linien/Borders
const ACCENT = "#CBB47B"; // CTA/Highlights (gold)
const WHITE = "#FFFFFF";
const BG = "#FAFAFA";
const DARK = "#1E262B";

export const metadata: Metadata = {
  metadataBase: new URL("https://badenentruempelung.at"),
  title: "Über uns – Baden Entrümpelung",
  description:
    "Baden Entrümpelung: Persönliche Begleitung, klare Abläufe und pünktliche Durchführung in Baden & Umgebung. Unverbindliche Besichtigung, Fixtermine, saubere Übergabe.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    type: "website",
    url: "https://badenentruempelung.at/ueber-uns",
    title: "Über uns – Baden Entrümpelung",
    description:
      "Persönliche Begleitung, klare Abläufe und pünktliche Durchführung in Baden & Umgebung. Unverbindliche Besichtigung, Fixtermine, saubere Übergabe.",
    images: [
      { url: "/images/og-ueber-uns-baden.webp", width: 1200, height: 630, alt: "Über uns – Baden Entrümpelung" },
    ],
    locale: "de_AT",
    siteName: "Baden Entrümpelung",
  },
  robots: { index: true, follow: true },
};

function AccentButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4"
      style={{
        color: WHITE,
        background: `linear-gradient(${ACCENT},${ACCENT}) padding-box,linear-gradient(135deg,${ACCENT},#e6cf96) border-box`,
        border: `1px solid ${ACCENT}`,
        boxShadow: "0 8px 24px rgba(203,180,123,.35)",
      }}
    >
      {children}
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition hover:bg-white/70 focus:outline-none focus:ring-4"
      style={{ border: `1px solid ${SECONDARY}66`, color: PRIMARY, background: WHITE }}
    >
      {children}
    </a>
  );
}

export default function UeberUnsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-10 pb-12 mx-auto px-6 w-full"
        style={{ maxWidth: "1150px"}}
        aria-label="Über uns Baden Entrümpelung"
      >
        <div
          className="rounded-3xl border shadow-sm p-8 md:p-10 bg-white/90 backdrop-blur"
          style={{ borderColor: SECONDARY }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Textbereich */}
            <div>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
                style={{ background: WHITE, color: PRIMARY, border: `1px solid ${SECONDARY}` }}
              >
                Baden • unverbindliche Besichtigung
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3" style={{ color: DARK }}>
                Über uns
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: "#334049" }}>
                Wir stehen in Baden & Umgebung für ruhige, verlässliche Abläufe: klare Zusagen, eine feste
                Ansprechperson und eine saubere Übergabe zum vereinbarten Zeitpunkt. Vom ersten Telefonat bis zur
                Fertigstellung bleiben wir erreichbar und halten alle Schritte nachvollziehbar fest – damit Sie
                Planungssicherheit haben.
              </p>

              <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: "#334049" }}>
                Unsere Stärke liegt in strukturierten, respektvollen Räumungen – vom kleinen Keller bis zur umfangreichen
                Verlassenschaft. Wir achten auf Details, kommunizieren transparent und finden eine ruhige Lösung, auch wenn
                Termine eng liegen.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <AccentButton href="https://wa.me/436767202623">WhatsApp – Besichtigung anfragen</AccentButton>
                <GhostButton href="tel:+436767202623">Jetzt anrufen</GhostButton>
                <GhostButton href="mailto:info@badenentruempelung.at?subject=Anfrage%20Baden%20Entr%C3%BCmpelung">E‑Mail senden</GhostButton>
              </div>
            </div>

            {/* Bildbereich */}
            <figure className="overflow-hidden rounded-2xl border bg-white order-first md:order-last" style={{ borderColor: SECONDARY }}>
              <Image
                src="/images/ueber-uns-baden.webp"
                alt="Team bei einer Entrümpelung in Baden"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <figcaption className="px-4 py-3 text-sm text-center" style={{ color: "#6B7280" }}>
                Eindrücke aus Baden – ruhiges, strukturiertes Arbeiten mit klaren Abläufen und pünktlicher Übergabe.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* WER WIR SIND */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: DARK }}>
            Wer wir sind
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#334049" }}>
            Wir sind ein eingespieltes Team aus Baden mit Fokus auf klare Planung und verlässliche Durchführung. Uns ist
            wichtig, dass persönliche Dinge respektvoll behandelt, Wege sinnvoll organisiert und alle Schritte im Vorfeld
            verständlich abgestimmt werden.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#334049" }}>
            Ob Wohnung, Haus, Dachboden oder Keller: Wir arbeiten strukturiert, halten Absprachen ein und sorgen für eine
            saubere Übergabe. Auf Wunsch übernehmen wir die Koordination vollständig – inklusive Schlüsselübernahme und
            schriftlicher Bestätigung.
          </p>
        </div>
      </section>

      {/* WAS WIR TUN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: DARK }}>
            Was wir tun
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: SECONDARY }}>
              <h3 className="text-xl font-semibold" style={{ color: DARK }}>
                Verlassenschaften in Baden
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: "#334049" }}>
                Behutsame Vorbereitung und klare Zuständigkeiten: Wichtige Unterlagen und Erinnerungsstücke werden gesichert,
                erhaltenswerte Gegenstände besprochen und der Ablauf transparent festgehalten. Am Ende steht eine geordnete
                Übergabe ohne Überraschungen – inklusive fairer Wertanrechnung geeigneter Stücke.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: SECONDARY }}>
              <h3 className="text-xl font-semibold" style={{ color: DARK }}>
                Wohnungs- &amp; Hausräumungen
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: "#334049" }}>
                Realistische Zeitfenster, abgestimmte Zugänge und eine feste Ansprechperson. Wir planen die Wege sinnvoll und
                organisieren den Abtransport so, dass Ihr Tagesablauf planbar bleibt – bis zur sauberen Übergabe.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: SECONDARY }}>
              <h3 className="text-xl font-semibold" style={{ color: DARK }}>
                Dachboden &amp; Keller
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: "#334049" }}>
                Bereiche mit eingeschränkten Zugängen erfordern Ruhe und Übersicht. Wir strukturieren den Ablauf, stimmen
                Zufahrten ab und dokumentieren die Schritte nachvollziehbar – ideal als Vorbereitung für Übergaben oder
                Arbeiten am Objekt.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: SECONDARY }}>
              <h3 className="text-xl font-semibold" style={{ color: DARK }}>
                Büro &amp; Gewerbe
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: "#334049" }}>
                Flächen in Baden rasch wieder nutzbar machen: mit klaren Zeitfenstern, Rücksicht auf Betriebsabläufe und
                pünktlicher Fertigstellung. Kommunikation bleibt kurz und verbindlich.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WO WIR ARBEITEN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: DARK }}>
            Wo wir arbeiten
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#334049" }}>
            Schwerpunkt Baden & Umgebung – etwa in Pfaffstätten, Traiskirchen, Sooss, Guntramsdorf, Bad Vöslau und Kottingbrunn.
            Schreiben Sie uns Ihr Anliegen: Wir melden uns zeitnah mit freien Zeitfenstern und einem passenden Vorschlag.
          </p>
        </div>
      </section>

      {/* UNSER VERSPRECHEN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="rounded-3xl border bg-white p-6 md:p-8" style={{ borderColor: SECONDARY }}>
          <h2 className="text-3xl font-semibold leading-tight mb-3" style={{ color: DARK }}>
            Unser Versprechen
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-base leading-relaxed" style={{ color: "#334049" }}>
            <li>Unverbindliche Besichtigung und klare, schriftliche Zusagen.</li>
            <li>Fixtermine, kurze Wege und eine feste Ansprechperson.</li>
            <li>Respektvoller Umgang mit persönlichen Dingen und Unterlagen.</li>
            <li>Saubere, fristgerechte Übergabe – dokumentiert und nachvollziehbar.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <AccentButton href="https://wa.me/436767202623">WhatsApp – Besichtigung anfragen</AccentButton>
            <GhostButton href="tel:+436767202623">Jetzt anrufen</GhostButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 mx-auto px-6 w-full text-center" style={{ maxWidth: "1150px" }}>
        <h2 className="text-3xl font-semibold leading-tight" style={{ color: DARK }}>
          Sprechen wir über Ihr Anliegen
        </h2>
        <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: "#334049" }}>
          Eine kurze Nachricht genügt – wir reagieren zeitnah und schlagen Ihnen ein passendes Zeitfenster vor. Auf Wunsch mit
          Schlüsselübernahme und schriftlicher Bestätigung.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <AccentButton href="mailto:info@badenentruempelung.at?subject=Anfrage%20Baden%20Entr%C3%BCmpelung">
            Per E‑Mail anfragen
          </AccentButton>
          <GhostButton href="tel:+436767202623">+436767202623 anrufen</GhostButton>
        </div>
      </section>

      {/* Optional: Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Baden Entrümpelung",
            url: "https://badenentruempelung.at/",
            email: "info@badenentruempelung.at",
            telephone: "+43 676 720 26 23",
            areaServed: "Baden, Niederösterreich",
            sameAs: [],
          }),
        }}
      />
    </>
  );
}
