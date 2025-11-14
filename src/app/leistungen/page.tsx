// app/leistungen/page.tsx — Baden Entrümpelung mit Bildern
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://badenentruempelung.at"),
  title: "Leistungen in Baden – Entrümpelung & Räumungen | badenentruempelung.at",
  description:
    "Baden Entrümpelung: Leistungen in Baden & Umgebung – Entrümpelungen, Räumungen, Verlassenschaften, Firmenauflösung, Keller & Dachboden. Fixtermine, klare Abläufe, persönliche Begleitung.",
  alternates: { canonical: "/leistungen" },
  openGraph: {
    type: "website",
    url: "https://badenentruempelung.at/leistungen",
    title: "Leistungen in Baden – Entrümpelung & Räumungen | badenentruempelung.at",
    description:
      "Baden Entrümpelung: Leistungen in Baden & Umgebung – Entrümpelungen, Räumungen, Verlassenschaften, Firmenauflösung, Keller & Dachboden. Fixtermine, klare Abläufe, persönliche Begleitung.",
    images: [
      { url: "/images/leistungen-messie.webp", width: 1200, height: 630, alt: "Baden Entrümpelung – Leistungen" },
    ],
    locale: "de_AT",
    siteName: "Baden Entrümpelung",
  },
  robots: { index: true, follow: true },
};

const PRIMARY = "#2B3A42";
const SECONDARY = "#A7A9AC";
const ACCENT = "#CBB47B";
const BG = "#FAFAFA";
const BG_SOFT = "#E7EBEE";
const DARK = "#1E262B";

const LEISTUNGEN = [
  { href: "/verlassenschaften-baden", label: "Verlassenschaften Baden", image: "/images/verlassenschaften-baden.webp", excerpt: "Einfühlsam & strukturiert – inklusive fairer Wertanrechnung geeigneter Stücke." },
  { href: "/firmenaufloesung-baden", label: "Firmenauflösung Baden", image: "/images/firmenaufloesung-baden.webp", excerpt: "Planbare Räumung von Büro- und Betriebsflächen – diskret und termintreu." },
  { href: "/raeumung-baden", label: "Räumung Baden", image: "/images/raeumung-baden.webp", excerpt: "Wohnung, Haus oder Teilbereiche – klarer Ablauf bis zur besenreinen Übergabe." },
  { href: "/entruempelungsfirma-baden", label: "Entrümpelungsfirma Baden", image: "/images/entruempelungsfirma-baden.webp", excerpt: "Erfahrene Teams, fixe Zeitfenster, saubere Durchführung in Baden & Umgebung." },
  { href: "/kellerentruempelung-baden", label: "Kellerentrümpelung Baden", image: "/images/kellerentruempelung-baden.webp", excerpt: "Mehr Platz im Untergeschoss – übersichtlich geplant, zügig umgesetzt." },
  { href: "/dachboden-raeumung-baden", label: "Dachboden Räumung Baden", image: "/images/dachboden-raeumung-baden.webp", excerpt: "Sicheres Arbeiten – auch in engen Bereichen, mit klarer Abnahme." },
];

function AccentButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4"
      style={{
        color: "white",
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
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition hover:bg-white/70 focus:outline-none focus:ring-4"
      style={{ border: `1px solid ${SECONDARY}66`, color: PRIMARY, background: "white" }}
    >
      {children}
    </a>
  );
}

export default function LeistungenPage() {
  return (
    <main id="main" style={{ background: BG, color: PRIMARY }}>
      {/* HERO */}
      <section aria-label="Leistungen in Baden" className="relative overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1150px] px-4 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
              style={{ background: "#fff", color: PRIMARY, border: `1px solid ${SECONDARY}66` }}
            >
              Baden • unverbindliche Besichtigung
            </span>

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: DARK }}>
              Leistungen in Baden – Entrümpelung, Räumungen &amp; Verlassenschaften
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: "#334049" }}>
              Planbar, diskret und persönlich: Wir begleiten Sie in Baden & Umgebung bei <strong>Entrümpelungen</strong>,
              <strong> Räumungen</strong> von Wohnung und Haus sowie <strong>Verlassenschaften</strong>. Sie erhalten feste
              Zeitfenster, klare Bestätigungen und eine verlässliche Abwicklung – ohne Umwege.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <AccentButton href="https://wa.me/436767202623">WhatsApp – Besichtigung anfragen</AccentButton>
              <GhostButton href="tel:+436767202623">Jetzt anrufen</GhostButton>
              <GhostButton href="mailto:info@badenentruempelung.at?subject=Anfrage%20Leistungen%20Baden">E‑Mail senden</GhostButton>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="hidden md:block">
            <Image
              src="/images/leistungen-messie.webp"
              alt="Entrümpelung Baden – Leistungen Übersicht"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative mx-auto w-full max-w-[1150px] px-4 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LEISTUNGEN.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group block overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-lg bg-white"
              style={{ borderColor: `${SECONDARY}55` }}
            >
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: PRIMARY }}>
                  {item.label}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "#334049" }}>
                  {item.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* ===== SEO-TEXT SEKTION ===== */}
<section
  className="relative mx-auto w-full max-w-[1150px] px-4 pb-24"
  aria-label="Entrümpelung, Räumungen & Verlassenschaften Baden – SEO Text"
>
  <div className="max-w-6xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: "#334049" }}>
    <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "#2B3A42" }}>
      Entrümpelung in Baden – professionell, diskret & termintreu
    </h2>

    <p className="mb-5">
      Eine <strong>Entrümpelung in Baden</strong> sollte nicht nur schnell, sondern auch gut organisiert sein.
      Unser Team steht für präzise Planung, klare Kommunikation und eine Umsetzung ohne Stress.
      Ob Wohnung, Einfamilienhaus oder Geschäftsräume – wir kümmern uns darum, dass alles reibungslos abläuft.
    </p>

    <h3 className="text-lg font-semibold mb-2" style={{ color: "#2B3A42" }}>
      Ihre Vorteile mit Baden Entrümpelung
    </h3>
    <p className="mb-5">
      Von der kostenlosen Besichtigung bis zur sauberen Übergabe übernehmen wir sämtliche Schritte für Sie.
      Fixtermine, ein fester Ansprechpartner und transparente Preise sorgen dafür, dass Sie jederzeit den Überblick behalten.
      Besonders geschätzt wird unsere ruhige, respektvolle Arbeitsweise – auch in bewohnten Häusern oder sensiblen Situationen.
    </p>

    <h2 className="text-2xl md:text-3xl font-extrabold mb-4 mt-8" style={{ color: "#2B3A42" }}>
      Räumung in Baden – Wohnung, Haus oder Gewerbeobjekt
    </h2>
    <p className="mb-5">
      Ob private oder gewerbliche Räumung – wir passen uns dem Objekt und Ihren Wünschen an.
      Unser eingespieltes Team arbeitet effizient, achtet auf Ihre Immobilie und hinterlässt alle Räume in einem klaren, gepflegten Zustand.
      Nach Abschluss erhalten Sie eine schriftliche Übergabebestätigung.
    </p>

    <h3 className="text-lg font-semibold mb-2" style={{ color: "#2B3A42" }}>
      Individuelle Planung für jede Objektgröße
    </h3>
    <p className="mb-5">
      Jede Räumung wird individuell vorbereitet: Wir prüfen Zugänge, Parkmöglichkeiten und die ideale Teamgröße.
      So läuft der Einsatz vor Ort zügig und kontrolliert – ob kleine Wohnung oder großes Firmenareal.
    </p>

    <h2 className="text-2xl md:text-3xl font-extrabold mb-4 mt-8" style={{ color: "#2B3A42" }}>
      Verlassenschaften Baden – respektvoll & mit Wertanrechnung
    </h2>
    <p className="mb-5">
      Der Umgang mit einer <strong>Verlassenschaft</strong> erfordert Erfahrung und Einfühlungsvermögen.
      Wir unterstützen Sie bei der kompletten Abwicklung – von der ersten Sichtung bis zur Übergabe.
      Wertvolle Gegenstände werden transparent bewertet und können auf Wunsch in die Gesamtkosten angerechnet werden.
    </p>

    <h3 className="text-lg font-semibold mb-2" style={{ color: "#2B3A42" }}>
      Faire Bewertung & Ankauf vor Ort
    </h3>
    <p className="mb-5">
      Unsere Experten erkennen den tatsächlichen Wert von Antiquitäten, Schmuck, Sammlungen oder Möbeln.
      Durch die direkte Wertanrechnung sparen Sie Kosten und schaffen Platz für Neues – ohne zusätzliche Wege.
    </p>

    <h2 className="text-2xl md:text-3xl font-extrabold mb-4 mt-8" style={{ color: "#2B3A42" }}>
      Komplettservice für Baden & Umgebung
    </h2>
    <p className="mb-5">
      Ob Sie in Baden selbst, in Pfaffstätten, Traiskirchen, Sooss oder Guntramsdorf wohnen –
      unser Team ist im gesamten Bezirk aktiv und schnell vor Ort.
      Durch kurze Wege, lokale Erfahrung und eingespielte Abläufe profitieren Sie von einer professionellen Abwicklung ohne Verzögerungen.
    </p>

    <h3 className="text-lg font-semibold mb-2" style={{ color: "#2B3A42" }}>
      Kostenlose Besichtigung & persönlicher Ansprechpartner
    </h3>
    <p className="mb-5">
      Eine kostenlose Besichtigung schafft Klarheit: Wir begutachten das Objekt, besprechen Details und erstellen ein faires Angebot.
      Während des gesamten Ablaufs begleitet Sie ein fixer Ansprechpartner – von der Planung bis zur Endübergabe.
    </p>

    <h2 className="text-2xl md:text-3xl font-extrabold mb-4 mt-8" style={{ color: "#2B3A42" }}>
      Jetzt Termin sichern – schnell & unverbindlich
    </h2>
    <p>
      Vereinbaren Sie gleich einen Besichtigungstermin: telefonisch unter{" "}
      <a className="underline" href="tel:+436767202623">+43&nbsp;676&nbsp;720&nbsp;26&nbsp;23</a>,
      per WhatsApp unter{" "}
      <a className="underline" href="https://wa.me/436767202623">wa.me/436767202623</a>{" "}
      oder per E-Mail an{" "}
      <a className="underline" href="mailto:info@badenentruempelung.at">info@badenentruempelung.at</a>.
      Baden Entrümpelung steht für Planungssicherheit, saubere Arbeit und persönlichen Kontakt –
      damit Ihre Räumung oder Verlassenschaft stressfrei verläuft.
    </p>
  </div>
</section>
{/* ===== /SEO-TEXT SEKTION ENDE ===== */}

    </main>
  );
}
