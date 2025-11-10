// components/FooterPremium.tsx
import Link from "next/link";
import Image from "next/image";
import ShareButtonsPremium from "./ShareButtons";

/**
 * Footer – Baden Entrümpelung (Premium)
 * Уникальный фирменный стиль под логотип №2 (Siegel)
 * Палитра:
 *  PRIMARY   #2B3A42  – графитово-синий (доверие)
 *  SECONDARY #A7A9AC  – профессиональное серебро (бордеры/иконки)
 *  ACCENT    #CBB47B  – песочно-золотой (мягкий премиум)
 *  BG        #FAFAFA  – почти белый фон
 *  BG_SOFT   #E7EBEE  – мягкая подложка
 *  BROWN     #7A5C3A  – коричневый для контрастных CTA (белый текст)
 */

const PRIMARY = "#2B3A42";
const SECONDARY = "#A7A9AC";
const ACCENT = "#CBB47B";
const BG = "#FAFAFA";
const BG_SOFT = "#E7EBEE";
const BROWN = "#7A5C3A";

const EMAIL = "info@badenentruempelung.at";
const PHONE_DISPLAY = "+43 676 720 26 23";
const PHONE_TEL = "+436767202623";
const WHATSAPP = "https://wa.me/436767202623";

const CONTAINER = "mx-auto w-full max-w-[1280px] px-6 md:px-8";

export default function FooterPremium() {
  return (
    <footer aria-label="Seitenfuß"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(250,250,250,.98), ${BG}),\n          radial-gradient(80rem 30rem at -10% 0%, ${BG_SOFT}55, transparent),\n          radial-gradient(80rem 30rem at 110% 100%, ${BG_SOFT}33, transparent)`,
        borderTop: `1px solid ${SECONDARY}55`,
      }}
      className="pt-12"
    >
      <div className={`${CONTAINER}`}>
        {/* Верхняя зона с логотипом и коротким месседжем доверия */}
        <div className="grid gap-8 md:grid-cols-[auto,1fr,auto] items-center">
          

          {/* Trust message */}
          <div className="text-sm md:text-base leading-relaxed" style={{ color: PRIMARY }}>
            <p className="font-semibold">Baden Entrümpelung — Premium Service mit Handschlagqualität.</p>
            <p className="opacity-80">Seit über 20 Jahren verlässlich in Baden & Umgebung: klare Abläufe, faire Preise, diskret & pünktlich.</p>
          </div>

          {/* CTA right */}
          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold"
              style={{ background: BROWN, color: "#fff", border: `1px solid ${BROWN}`, boxShadow: "0 6px 18px rgba(122,92,58,.28)" }}
            >
              Jetzt anrufen
            </a>
            <a
              href={WHATSAPP}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold border"
              style={{ background: "#fff", color: PRIMARY, borderColor: `${SECONDARY}66` }}
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>

        {/* Разделитель */}
        <div className="mt-8 h-px w-full" style={{ background: `${SECONDARY}55` }} />

        {/* Основная сетка: 4 колонки в десктопе */}
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Intro */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: PRIMARY }}>Über uns</h3>
            <p className="text-sm leading-relaxed" style={{ color: `${PRIMARY}CC` }}>
              Wir sind Ihre verlässliche Entrümpelungsfirma in Baden, Niederösterreich. Diskret, sauber und pünktlich – vom Erstkontakt bis zur besenreinen Übergabe.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: PRIMARY }}>Leistungen</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/verlassenschaften-baden", label: "Verlassenschaften Baden" },
                { href: "/firmenaufloesung-baden", label: "Firmenauflösung Baden" },
                { href: "/raeumung-baden", label: "Räumung Baden" },
                { href: "/entruempelungsfirma-baden", label: "Entrümpelungsfirma Baden" },
                { href: "/kellerentruempelung-baden", label: "Kellerentrümpelung Baden" },
                { href: "/dachboden-raeumung-baden", label: "Dachboden Räumung Baden" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="underline underline-offset-4 transition hover:opacity-90"
                    style={{ color: PRIMARY, textDecorationColor: ACCENT }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: PRIMARY }}>Sitemap</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Startseite" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/datenschutz", label: "Datenschutz" },
                { href: "/impressum", label: "Impressum" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:opacity-90 underline underline-offset-4"
                    style={{ color: PRIMARY, textDecorationColor: ACCENT }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-3 text-base font-semibold" style={{ color: PRIMARY }}>Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li style={{ color: `${PRIMARY}B3` }}>Baden, Niederösterreich</li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:underline" style={{ color: PRIMARY }}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:underline" style={{ color: PRIMARY }}>
                  {EMAIL}
                </a>
              </li>
            </ul>

            {/* Быстрые действия */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}?subject=Anfrage%20Baden%20Entr%C3%BCmpelung`}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition hover:opacity-95"
                style={{ background: PRIMARY, color: "#fff" }}
              >
                Per E‑Mail anfragen
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border transition"
                style={{ borderColor: `${SECONDARY}66`, color: PRIMARY }}
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>

        <ShareButtonsPremium siteUrl="https://badenentruempelung.at" small className="ml-2 mt-8" />

        {/* Нижняя полоса */}
        <div className="mt-10 mb-10 flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row" style={{ borderColor: `${SECONDARY}55` }}>
          <p className="text-xs" style={{ color: `${PRIMARY}B3` }}>
            © {new Date().getFullYear()} badenentruempelung.at — Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: `${PRIMARY}B3` }}>
            <span>Seit über 20 Jahren</span>
            <span>•</span>
            <span>Hands chlagqualität</span>
            <span>•</span>
            <span>Faire Preise</span>
          </div>
        </div>
      </div>

      {/* Fixed Quick Contacts (нашим стилем) */}
      <div className="fixed right-4 bottom-24 z-[99] flex flex-col gap-3 md:right-8 md:bottom-28" aria-label="Schnellkontakte">
        {/* Telefon */}
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label="Anrufen"
          className="flex h-14 w-14 items-center justify-center transition will-change-transform hover:scale-110 active:scale-95 rounded-2xl"
          style={{ background: BROWN, color: "#fff", boxShadow: "0 10px 26px -8px rgba(0,0,0,.25)" }}
          title="Anrufen"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 12.36 12.36 0 003.88.62 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.44a1 1 0 011 1 12.36 12.36 0 00.62 3.88 1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
        </a>
        {/* WhatsApp */}
        <a
          href={WHATSAPP}
          target="_blank" rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-14 w-14 items-center justify-center transition will-change-transform hover:scale-110 active:scale-95 rounded-2xl border"
          style={{ background: "#fff", borderColor: `${SECONDARY}66`, color: PRIMARY, boxShadow: "0 10px 26px -8px rgba(0,0,0,.15)" }}
          title="WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0012 0 11.93 11.93 0 000 12a12 12 0 001.82 6.35L0 24l5.85-1.86A12 12 0 0012 24a12 12 0 0012-12 11.86 11.86 0 00-3.48-8.52zM12 21.82a9.82 9.82 0 01-5-1.37l-.36-.22-3.47 1.11 1.13-3.38-.23-.35A9.83 9.83 0 1121.83 12 9.84 9.84 0 0112 21.82zm5.6-7.52c-.31-.15-1.83-.9-2.11-1s-.49-.15-.7.15-.8 1-.98 1.2-.36.23-.67.08a7.92 7.92 0 01-2.33-1.44 8.76 8.76 0 01-1.62-2c-.17-.31 0-.48.13-.63s.31-.36.46-.54a2.09 2.09 0 00.31-.52.57.57 0 000-.54c0-.16-.69-1.67-.95-2.3s-.5-.53-.69-.54h-.59a1.14 1.14 0 00-.82.38 3.42 3.42 0 00-1.07 2.54 5.95 5.95 0 001.23 3.18 13.57 13.57 0 005.19 5 4.9 4.9 0 003 .95 2.62 2.62 0 001.69-.81 2.08 2.08 0 00.46-1.3c.06-.15 0-.23-.1-.31z"/></svg>
        </a>
        {/* E-Mail */}
        <a
          href={`mailto:${EMAIL}`}
          aria-label="E-Mail"
          className="flex h-14 w-14 items-center justify-center transition will-change-transform hover:scale-110 active:scale-95 rounded-2xl border"
          style={{ background: "#fff", borderColor: `${SECONDARY}66`, color: PRIMARY, boxShadow: "0 10px 26px -8px rgba(0,0,0,.15)" }}
          title="E-Mail"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
        </a>
      </div>

      

    </footer>
  );
}
