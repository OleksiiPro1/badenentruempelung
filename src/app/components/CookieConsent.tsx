"use client";

import { useEffect, useState, useCallback } from "react";

const COOKIE_NAME = "zv_cc";
const ONE_YEAR = 60 * 60 * 24 * 365;

// Raumfrei Wien Palette
const ACCENT   = "#D97500";       // rgb(217,117,0)
const WHITE    = "#FFFFFF";
const BLACK    = "#000000";
const GRAY_TXT = "#6B7280";
const GRAY_BR  = "#D1D5DB";

function hasConsentCookie() {
  if (typeof document === "undefined") return true;
  return document.cookie.split("; ").some((c) => c.startsWith(`${COOKIE_NAME}=`));
}

function setConsentCookie() {
  if (typeof document === "undefined") return;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "Secure; "
      : "";
  document.cookie = `${COOKIE_NAME}=1; Max-Age=${ONE_YEAR}; Path=/; SameSite=Lax; ${secure}`;
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hasConsentCookie()) setShow(true);
  }, []);

  const accept = useCallback(() => {
    setConsentCookie();
    setShow(false);
    try {
      window.dispatchEvent(new CustomEvent("cookie-consent-accepted"));
    } catch {}
  }, []);

  // Esc = согласие (т.к. используются только technisch notwendige Cookies)
  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") accept();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show, accept]);

  if (!show) return null;

  return (
    <div
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]"
      data-nosnippet
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div
          className="relative rounded-2xl shadow-xl backdrop-blur p-4 md:p-5 border"
          role="dialog"
          aria-label="Cookie-Hinweis"
          style={{
            background: "rgba(255,255,255,0.96)",
            borderColor: GRAY_BR,
            color: GRAY_TXT,
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          }}
        >
          

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Текст */}
            <div className="text-sm md:pr-6">
              <strong style={{ color: BLACK }}>Cookies:</strong>{" "}
              Wir setzen ausschließlich technisch notwendige Cookies ein,
              damit grundlegende Funktionen dieser Website zuverlässig arbeiten
              (z.&nbsp;B. Navigation, Formular-Handling). Details finden Sie in unserer{" "}
              <a
                href="/datenschutz"
                rel="nofollow"
                className="font-medium underline underline-offset-2 hover:opacity-90"
                style={{ color: ACCENT, textDecorationColor: GRAY_BR }}
              >
                Datenschutzerklärung
              </a>
              .
            </div>

            {/* Кнопки */}
            <div className="flex items-center gap-2">
              <a
                href="/datenschutz"
                rel="nofollow"
                className="inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-medium whitespace-nowrap shrink-0 leading-none transition hover:bg-gray-50"
                style={{
                  color: BLACK,
                  background: WHITE,
                  border: `1px solid ${GRAY_BR}`,
                }}
              >
                Mehr erfahren
              </a>

              <button
                type="button"
                onClick={accept}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-95"
                style={{
                  background: ACCENT,
                  color: WHITE,
                  boxShadow: "0 4px 10px rgba(217,117,0,0.25)",
                }}
              >
                Einverstanden
              </button>
            </div>
          </div>

          {/* Декоративная тонкая линия снизу */}
          <div
            className="mt-4 h-px w-full"
            style={{ background: GRAY_BR, opacity: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
}
