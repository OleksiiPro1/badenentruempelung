"use client";

import { useMemo, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

/**
 * ShareButtonsPremium – Baden Entrümpelung
 * Премиальная версия блока шаринга в едином фирменном стиле.
 * Палитра согласована с Header/Footer:
 *  PRIMARY   #2B3A42
 *  SECONDARY #A7A9AC
 *  ACCENT    #CBB47B
 *  BG        #FAFAFA
 *  BROWN     #7A5C3A (CTA/Copy)
 */

const PRIMARY = "#2B3A42";
const SECONDARY = "#A7A9AC";
const ACCENT = "#CBB47B";
const BG = "#FAFAFA";
const BROWN = "#CBB47B";

export type ShareButtonsPremiumProps = {
  siteUrl: string; // базовый URL сайта без хвостового слэша
  title?: string;  // заголовок по умолчанию для шеринга
  className?: string;
  small?: boolean; // компактный режим
};

export default function ShareButtonsPremium({ siteUrl, title, className, small = true }: ShareButtonsPremiumProps) {
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
        title || "Entrümpelung & Räumung in Baden – jetzt unverbindlich anfragen."
      ),
    };
  }, [siteUrl, pathname, title]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
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
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0022 12z"/></svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      label: "Per WhatsApp weiterleiten",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0012 0 12 12 0 000 12a12 12 0 001.9 6.4L0 24l5.9-1.9A12 12 0 1012 0a11.9 11.9 0 008.5 3.5zM12 21.8a9.8 9.8 0 01-5-1.4l-.4-.2-3.5 1.1 1.1-3.4-.2-.3A9.8 9.8 0 1121.8 12 9.8 9.8 0 0112 21.8zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8 8 0 01-2.3-1.5 8.7 8.7 0 01-1.6-2c-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5s0-.4 0-.5c0-.2-.7-1.7-1-2.3s-.5-.6-.7-.6h-.6c-.4 0-.8.1-1 .4a3.4 3.4 0 00-1 2.5 6 6 0 001.2 3.2 13.6 13.6 0 005.2 5 4.9 4.9 0 003 1c.8 0 1.4-.3 1.8-.8.4-.5.5-1 .5-1.3 0-.1 0-.2-.1-.3z"/></svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      label: "Auf LinkedIn teilen",
      icon: (
       <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M22.225 0H1.771C.792 0 0 .77 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .77 23.2 0 22.222 0h.003zM6.556 20.452H4.118V9h2.438v11.452zM5.337 7.433a1.804 1.804 0 110-3.608 1.804 1.804 0 010 3.608zM20.447 20.452h-3.247V14.8c0-1.345-.024-3.078-1.877-3.078-1.88 0-2.168 1.464-2.168 2.976v5.754H9.006V9h3.103v1.561h.044c.432-.818 1.49-1.68 3.065-1.68 3.279 0 3.883 2.158 3.883 4.968v6.603z"/></svg>
),
    },
  ] as const;

  return (
    <div className={className} aria-label="Seite teilen" style={{ color: PRIMARY }}>
      {/* Контейнер группы */}
      <div
        className={`flex flex-wrap items-center gap-2 ${small ? "text-xs" : "text-sm"} rounded-2xl px-2 py-1`}
        
      >
        <span style={{ color: `${PRIMARY}B3` }} className="px-1">
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
            className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 transition"
            style={{
              background: "#fff",
              color: PRIMARY,
              border: `1px solid ${SECONDARY}66`,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = ACCENT;
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(203,180,123,.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${SECONDARY}66`;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {l.icon}
            {l.name}
          </a>
        ))}

        {/* Кнопка "Link kopieren" */}
        <button
          type="button"
          onClick={handleCopy}
          aria-live="polite"
          className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 transition"
          style={{
            background: BROWN,
            color: "#fff",
            border: `1px solid ${BROWN}`,
            boxShadow: "0 6px 18px rgba(122,92,58,.28)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 22px rgba(122,92,58,.36)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(122,92,58,.28)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 1H4a2 2 0 00-2 2v12h2V3h12V1zm3 4H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"/></svg>
          {copied ? "Link kopiert" : "Link kopieren"}
        </button>
      </div>

      {/* A11y объявление */}
      <span aria-live="polite" className="sr-only">
        {copied ? "Der Link wurde in die Zwischenablage kopiert." : ""}
      </span>
    </div>
  );
}
