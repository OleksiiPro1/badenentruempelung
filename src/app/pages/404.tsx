// pages/404.tsx
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 60rem at 80% -10%, rgba(255,224,130,.25), rgba(255,224,130,0)), radial-gradient(40rem 40rem at -20% 120%, rgba(161,136,127,.18), rgba(161,136,127,0))",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-md shadow-xl p-8 sm:p-10 text-center">
          {/* ЛОГОТИП */}
          <div className="mb-6 flex justify-center">
            <Link href="/" aria-label="Zur Startseite">
              <Image
                src="/images/logo.webp"           // положите файл в public/images/logo.webp
                alt="Antikexperte.at"
                width={200}
                height={52}
                priority
                className="h-12 w-auto drop-shadow-sm [image-rendering:auto]"
              />
            </Link>
          </div>

          {/* Кружок 404 */}
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white/70">
            <span className="text-2xl font-semibold text-gray-600">404</span>
          </div>

          <h1 className="text-5xl font-light tracking-wide mb-4">
            Diese Seite existiert nicht.
          </h1>
          <p className="text-lg text-gray-700/90 mb-8">
            Entschuldigung, die von Ihnen gesuchte Seite konnte nicht gefunden werden.
            Vielleicht war der Link veraltet oder es hat sich ein Tippfehler eingeschlichen.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm uppercase tracking-wide hover:border-amber-500 hover:text-amber-600 transition-colors"
            >
              Startseite
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3 text-sm uppercase tracking-wide text-white hover:bg-amber-700 transition-colors"
            >
              Kontakt
            </Link>
          </div>

          <div className="mt-10 mx-auto h-px w-24 bg-gray-200" />
          <p className="mt-4 text-sm text-gray-400">Fehlercode: 404</p>
        </div>
      </div>
    </section>
  );
}
