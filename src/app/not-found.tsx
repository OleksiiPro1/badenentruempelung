// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";

// Raumfrei Wien Farbpalette
const BLACK    = "#000000";
const WHITE    = "#FFFFFF";
const GRAY_TXT = "#6B7280";
const GRAY_BR  = "#D1D5DB";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hintergrund: hell, leicht strukturiert */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(80rem 50rem at 90% -20%, ${GRAY_BR}22, transparent),
            radial-gradient(60rem 40rem at -10% 120%, ${GRAY_BR}11, transparent),
            ${WHITE}
          `,
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 w-full">
        <div
          className="rounded-3xl shadow-lg p-8 sm:p-10 text-center border"
          style={{
            background: "rgba(255,255,255,0.9)",
            borderColor: GRAY_BR,
          }}
        >
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Link href="/" aria-label="Zur Startseite Raumfrei Wien">
              <Image
                src="/images/logo.webp"
                alt="Raumfrei Wien Logo"
                width={240}
                height={60}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Quadrat mit 404 */}
          <div
            className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center border bg-white"
            style={{
              borderColor: GRAY_BR,
              borderRadius: "8px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
            }}
          >
            <span className="text-2xl font-semibold" style={{ color: BLACK }}>
              404
            </span>
          </div>

          <h1
            className="mb-4 text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: BLACK }}
          >
            Seite nicht gefunden
          </h1>

          <p
            className="mb-8 text-base md:text-lg leading-relaxed"
            style={{ color: GRAY_TXT }}
          >
            Die aufgerufene Seite existiert nicht oder ist vorübergehend nicht erreichbar.  
            Suchen Sie Infos zu <strong>Entrümpelung &amp; Räumung in Wien</strong> – vom Profi, mit klaren Abläufen und fester Ansprechperson?  
            Besuchen Sie die Startseite oder kontaktieren Sie uns direkt.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition"
              style={{
                border: `1px solid ${GRAY_BR}`,
                color: BLACK,
                background: WHITE,
              }}
            >
              Zur Startseite
            </Link>

            <Link
              href="tel:+436765055437"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-90"
              style={{
                background: BLACK,
                color: WHITE,
              }}
            >
              +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37&nbsp;anrufen
            </Link>
          </div>

          {/* Optional: kurzer Kontakt-Hinweis */}
          <p
            className="mt-6 text-sm"
            style={{ color: GRAY_TXT }}
          >
            E-Mail:{" "}
            <a href="mailto:info@raumfrei-wien.at" className="underline">
              info@raumfrei-wien.at
            </a>
          </p>

          <div
            className="mt-10 mx-auto h-px w-24"
            style={{ background: GRAY_BR }}
          />
          <p
            className="mt-4 text-sm"
            style={{ color: GRAY_TXT, opacity: 0.75 }}
          >
            Fehlercode: 404 • raumfrei-wien.at
          </p>
        </div>
      </div>
    </section>
  );
}
