// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import ShareButtons from "./ShareButtons"; // серверный компонент

const SITE_URL = "https://raumfrei-wien.at";

// Brand palette (Raumfrei Wien)
const ACCENT   = "rgb(217, 117, 0)"; // используется только для подчеркиваний/hover
const BLACK    = "#000";
const WHITE    = "rgb(255, 255, 255)";
const GRAY_TXT = "#6B7280";  // вторичный текст
const GRAY_BR  = "#D1D5DB";  // все бордеры/разделители

const EMAIL = "office@raumfrei-wien.at";
const PHONE = "+436765055437";

const CONTAINER = "mx-auto w-full max-w-[1200px] px-6 md:px-8";

export default function Footer() {
  return (
    <footer
      aria-label="Seitenfuß"
      className="mt-12"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(255,255,255,.96), ${WHITE}),
          radial-gradient(70rem 26rem at -10% 0%, ${GRAY_BR}33, transparent),
          radial-gradient(70rem 26rem at 110% 100%, ${GRAY_BR}22, transparent)
        `,
        borderTop: `1px solid ${GRAY_BR}`,
      }}
    >
      <div className={`${CONTAINER} py-10`}>
        {/* Декоративная тонкая полоса */}
        <div className="flex items-center justify-center">
          <div className="relative h-px w-full max-w-[720px]" style={{ background: GRAY_BR }}>
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs"
              style={{ background: WHITE, border: `1px solid ${GRAY_BR}`, color: BLACK }}
            >
              raumfrei-wien.at
            </span>
          </div>
        </div>

        {/* Основная сетка */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="relative mb-4 h-10 w-48">
              <Image
                src="/images/logo.webp"
                alt="Raumfrei Wien Logo"
                fill
                className="object-contain"
                sizes="80px"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: GRAY_TXT }}>
              Raumfrei Wien – schnelle und verlässliche Räumungen & Entrümpelungen in Wien und Umgebung.
              Klare Abläufe vom Erstkontakt bis zur Übergabe.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: BLACK }}>
              Sitemap
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Startseite" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/datenschutz", label: "Datenschutz" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:opacity-90 underline underline-offset-4"
                    style={{ color: BLACK, textDecorationColor: ACCENT }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: BLACK }}>
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm">
              <li style={{ color: GRAY_TXT }}>Wien, Österreich</li>
              <li>
                <a href="tel:+436765055437" className="hover:underline" style={{ color: BLACK }}>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:underline" style={{ color: BLACK }}>
                  {EMAIL}
                </a>
              </li>
            </ul>

            {/* Быстрые действия */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`mailto:${EMAIL}?subject=Anfrage%20Raumfrei%20Wien`}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition hover:opacity-95"
                style={{ background: BLACK, color: WHITE }}
              >
                Per E-Mail anfragen
              </Link>
              <Link
                href="tel:+436765055437"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border transition"
                style={{ borderColor: GRAY_BR, color: BLACK }}
              >
                Jetzt anrufen
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row"
          style={{ borderColor: GRAY_BR }}
        >
          <p className="text-xs" style={{ color: GRAY_TXT }}>
            © {new Date().getFullYear()} raumfrei-wien.at — Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <ShareButtons siteUrl={SITE_URL} small className="ml-2" />
          </div>
        </div>
      </div>

      {/* ===== FIXED QUICK CONTACTS (white background, square buttons) ===== */}
      <div
        className="fixed right-4 bottom-24 z-[9999] flex flex-col gap-3 md:right-8 md:bottom-28"
        aria-label="Schnellkontakte"
      >
        {/* Telefon */}
        <a
          href="tel:+436765055437"
          aria-label="Anrufen"
          className="flex h-14 w-14 items-center justify-center border transition will-change-transform hover:scale-110 active:scale-95"
          style={{
            background: WHITE,
            borderColor: GRAY_BR,
            borderRadius: "8px",
            boxShadow: "0 8px 20px -6px rgba(0,0,0,.15)",
          }}
        >
          <Image src="/images/phone.svg" alt="Call" width={26} height={26} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/436765055437"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Auf WhatsApp schreiben"
          className="flex h-14 w-14 items-center justify-center border transition will-change-transform hover:scale-110 active:scale-95"
          style={{
            background: WHITE,
            borderColor: GRAY_BR,
            borderRadius: "8px",
            boxShadow: "0 8px 20px -6px rgba(0,0,0,.15)",
          }}
        >
          <Image src="/images/whatsapp.png" alt="WhatsApp" width={26} height={26} />
        </a>

        {/* E-Mail */}
        <a
          href={`mailto:${EMAIL}`}
          aria-label="E-Mail schreiben"
          className="flex h-14 w-14 items-center justify-center border transition will-change-transform hover:scale-110 active:scale-95"
          style={{
            background: WHITE,
            borderColor: GRAY_BR,
            borderRadius: "8px",
            boxShadow: "0 8px 20px -6px rgba(0,0,0,.15)",
          }}
        >
          <Image src="/images/mailgun.svg" alt="Email" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
}
