// components/ShareButtons.tsx
"use client";

import { useMemo, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

// Цвета в стиле сайта (без активного оранжевого акцента для шаринга)
const BLACK   = "#111111";
const WHITE   = "#FFFFFF";
const GRAY_TX = "#6B7280"; // вторичный текст
const GRAY_BR = "#D1D5DB"; // обводки
const GRAY_BG = "#F9FAFB"; // мягкий фон для группы

type Props = {
  siteUrl: string;         // ОБЯЗАТЕЛЬНО: базовый URL сайта, без хвостового слэша
  title?: string;          // заголовок для шеринга
  className?: string;      // внешний класс
  small?: boolean;         // компактный режим
};

export default function ShareButtons({ siteUrl, title, className, small = true }: Props) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const { pageUrl, encodedUrl, encodedText } = useMemo(() => {
    const base = (siteUrl || "").replace(/\/$/, "");
    const path = pathname || "/";
    const pageUrl = `${base}${path}`;
    return {
      pageUrl,
      encodedUrl: encodeURIComponent(pageUrl),
      encodedText: encodeURIComponent(
        title ||
          "Entrümpelung & Räumung in Wien vom Profi – jetzt unverbindlich anfragen."
      ),
    };
  }, [siteUrl, pathname, title]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      // Сбрасываем статус через 2.5s
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Фолбэк: если Clipboard API недоступен
      const textarea = document.createElement("textarea");
      textarea.value = pageUrl;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }, [pageUrl]);

  const links = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: "Auf Facebook teilen",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      label: "Per WhatsApp weiterleiten",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      label: "Auf LinkedIn teilen",
    },
  ] as const;

  return (
    <div className={className} aria-label="Seite teilen" style={{ color: BLACK }}>
      {/* Контейнер группы */}
      <div
        className={`flex flex-wrap items-center gap-2 ${small ? "text-xs" : "text-sm"} rounded-xl px-2 py-1`}
        style={{ background: GRAY_BG, border: `1px solid ${GRAY_BR}` }}
      >
        <span style={{ color: GRAY_TX }} className="px-1">
          Teilen:
        </span>

        {/* Кнопки соцсетей */}
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            title={l.label}
            aria-label={l.label}
            className="inline-flex items-center rounded-lg px-3 py-1.5 transition"
            style={{
              background: WHITE,
              color: BLACK,
              border: `1px solid ${GRAY_BR}`,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget.style.borderColor = "#cbd5e1"); // чуть темнее при ховере
              (e.currentTarget.style.background = "#ffffff");
            }}
            onMouseLeave={(e) => {
              (e.currentTarget.style.borderColor = GRAY_BR);
              (e.currentTarget.style.background = WHITE);
            }}
          >
            {l.name}
          </a>
        ))}

        {/* Кнопка "Link kopieren" */}
        <button
          type="button"
          onClick={handleCopy}
          aria-live="polite"
          className="inline-flex items-center rounded-lg px-3 py-1.5 transition"
          style={{
            background: WHITE,
            color: BLACK,
            border: `1px solid ${GRAY_BR}`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget.style.borderColor = "#cbd5e1");
            (e.currentTarget.style.background = "#ffffff");
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.style.borderColor = GRAY_BR);
            (e.currentTarget.style.background = WHITE);
          }}
        >
          {copied ? "Link kopiert" : "Link kopieren"}
        </button>
      </div>

      {/* Невидимая зона для анонса (A11y) */}
      <span
        aria-live="polite"
        className="sr-only"
      >
        {copied ? "Der Link wurde in die Zwischenablage kopiert." : ""}
      </span>
    </div>
  );
}
