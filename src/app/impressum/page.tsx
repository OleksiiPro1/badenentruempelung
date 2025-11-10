// app/impressum/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

/** Brand (Raumfrei Wien) */
const ACCENT   = "#D97500"; // rgb(217,117,0)
const BLACK    = "#000000";
const WHITE    = "#FFFFFF";
const GRAY_TXT = "#6B7280";
const GRAY_BR  = "#D1D5DB";

export const metadata: Metadata = {
  title: "Impressum – Raumfrei Wien",
  description:
    "Impressum und gesetzliche Informationen von Raumfrei Wien: Unternehmensangaben, Haftungsausschluss, Urheberrecht, Bildnachweise und Kontakt.",
  alternates: { canonical: "https://raumfrei-wien.at/impressum" },
};

export default function ImpressumPage() {
  return (
    <main id="main" style={{ background: WHITE, color: BLACK }}>
      {/* HERO */}
      <section aria-label="Impressum Raumfrei Wien">
        <div className="mx-auto w-full max-w-[1150px] px-4 py-14 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
              style={{
                background: WHITE,
                color: ACCENT,
                border: `1px solid ${GRAY_BR}`,
              }}
            >
              Rechtliche Informationen
            </span>

            <h1
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight"
              style={{ color: BLACK }}
            >
              Impressum – Raumfrei Wien
            </h1>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: GRAY_TXT }}
            >
              Nachfolgend finden Sie die gesetzlich vorgeschriebenen Angaben
              gemäß österreichischem Recht sowie unsere Kontaktdaten.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-[1150px] px-4 pb-20">
        <div
          className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm"
          style={{ borderColor: GRAY_BR }}
        >
          {/* Unternehmensangaben */}
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: BLACK }}>
            Unternehmensangaben
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed" style={{ color: GRAY_TXT }}>
                <strong style={{ color: BLACK }}>Raumfrei Wien</strong>
                <br />
                Inhaber: Martin Wagner
                <br />
                Rechtsform: GmbH
                <br />
                Unternehmensgegenstand: Entrümpelung, Räumung, Haushalts- &amp; Firmenauflösungen
                <br />
                Mitglied der Wirtschaftskammer Wien
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed" style={{ color: GRAY_TXT }}>
                Umsatzsteuer-Identifikationsnummer: <strong>ATU79015815</strong>
                <br />
                Firmenbuchnummer: <strong>FN 590214 m</strong>
                <br />
                Firmenbuchgericht: <strong>Handelsgericht Wien</strong>
                <br />
                Aufsichtsbehörde: <strong>Magistratisches Bezirksamt des 10. Bezirks</strong>
                <br />
                Zusätzlicher Unternehmensgegenstand: <strong>Wach- u Sicherheitsunternehmen</strong>
                <br />
                Geschäftsführer: <strong>Martin Wagner</strong>
              </p>
            </div>
          </div>

          {/* Kontakt */}
          <h2 className="mt-10 text-2xl md:text-3xl font-extrabold" style={{ color: BLACK }}>
            Kontakt
          </h2>
          <address
            className="not-italic mt-4 text-base leading-relaxed"
            style={{ color: GRAY_TXT }}
          >
            📍 Adresse: Heiligenstädter Str. 32/303, A-1190 Wien
            <br />
            📞 Telefon:{" "}
            <Link href="tel:+436765055437" className="underline">
              +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
            </Link>
            <br />
            📧 E-Mail:{" "}
            <Link href="mailto:office@raumfrei-wien.at" className="underline">
              office@raumfrei-wien.at
            </Link>
          </address>

          {/* Haftungsausschluss */}
          <h2 className="mt-10 text-2xl md:text-3xl font-extrabold" style={{ color: BLACK }}>
            Haftungsausschluss
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität übernehmen wir keine Gewähr.
            </p>
            <p>
              Als Diensteanbieter sind wir gemäß §&nbsp;18 ECG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung
              übermittelter oder gespeicherter fremder Informationen besteht nicht.
            </p>
          </div>

          {/* Haftung für Links */}
          <h2 className="mt-10 text-2xl md:text-3xl font-extrabold" style={{ color: BLACK }}>
            Haftung für Links
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte keine Gewähr. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>

          {/* Urheberrecht */}
          <h2 className="mt-10 text-2xl md:text-3xl font-extrabold" style={{ color: BLACK }}>
            Urheberrecht
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
            Die durch Raumfrei Wien erstellten Inhalte und Werke auf dieser Website unterliegen dem
            österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung und Verbreitung bedürfen
            der schriftlichen Zustimmung.
          </p>

          {/* Bildnachweise */}
          <h2 className="mt-10 text-2xl md:text-3xl font-extrabold" style={{ color: BLACK }}>
            Bildnachweise
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
            Verwendete Bilder sind Eigentum von Raumfrei Wien oder wurden ordnungsgemäß lizenziert.
            Eine Weiterverwendung ist nur mit Genehmigung zulässig.
          </p>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Raumfrei Wien",
            url: "https://raumfrei-wien.at",
            email: "office@raumfrei-wien.at",
            telephone: "+43 676 505 54 37",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Heiligenstädter Str. 32/303",
              addressLocality: "Wien",
              postalCode: "1190",
              addressCountry: "AT",
            },
            vatID: "ATU79015815",
            foundingDate: "2025", // optional, можно убрать
            legalName: "Raumfrei Wien GmbH",
          }),
        }}
      />
    </main>
  );
}
