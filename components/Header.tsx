"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



const PRIMARY = "#2B3A42";
const SECONDARY = "#A7A9AC";
const ACCENT = "#CBB47B";
const BG = "#FAFAFA";
const BG_SOFT = "#E7EBEE";
const DARK = "#1E262B";

// Baden-spezifische Leistungen (keine Wien-Slugs)
const LEISTUNGEN = [
  { href: "/verlassenschaften-baden", label: "Verlassenschaften Baden" },
  { href: "/firmenaufloesung-baden", label: "Firmenauflösung Baden" },
  { href: "/raeumung-baden", label: "Räumung Baden" },
  { href: "/entruempelungsfirma-baden", label: "Entrümpelungsfirma Baden" },
  { href: "/kellerentruempelung-baden", label: "Kellerentrümpelung Baden" },
  { href: "/dachboden-raeumung-baden", label: "Dachboden Räumung Baden" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileSubOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (!popoverRef.current) return;
      if (!popoverRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const openMenu = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(true), 80);
  };
  const closeMenu = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <header
      className={`sticky top-0 z-[90] border-b backdrop-blur-md transition-all ${
        scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,.08)]" : ""
      }`}
      style={{
        borderColor: `${SECONDARY}55`,
        backgroundImage: `linear-gradient(180deg,rgba(250,250,250,.94),rgba(250,250,250,.88)),\n          radial-gradient(64rem 40rem at 0% -10%,${BG_SOFT}66,transparent),\n          radial-gradient(64rem 40rem at 100% 120%,${BG_SOFT}44,transparent)`,
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* LOGO — größer & präsent */}
          <Link href="/" className="flex items-center gap-4 z-[101]" aria-label="Baden Entrümpelung">
            <Image
              src="/images/logo.webp" // Transparentes SVG/PNG des Variant #2
              alt="Baden Entrümpelung Logo"
              width={90}
              height={90}
              priority
              className={`block transition-transform will-change-transform ${scrolled ? "scale-[0.94]" : "scale-100"}`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium">
            <NavLink href="/" label="Startseite" />

            <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="relative inline-flex items-center gap-1 rounded-xl px-3 py-2 text-[15px] hover:opacity-90"
                style={{ color: PRIMARY }}
              >
                Leistungen
                <svg
                  className={`h-4 w-4 opacity-70 transition-transform ${open ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  />
                </svg>
              </button>

              <div
                ref={popoverRef}
                className={`absolute left-1/2 top-[calc(100%+0.6rem)] z-[95] w-[620px] -translate-x-1/2 rounded-2xl border bg-white/95 backdrop-blur ring-1 ring-black/5 shadow-2xl transition-all ${
                  open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{ borderColor: `${SECONDARY}66` }}
              >
                <div className="grid grid-cols-2 gap-0 p-2">
                  {splitColumns(LEISTUNGEN).map((col, i) => (
                    <ul key={i}>
                      {col.map((item) => (
                        <li key={item.href} className="border-b last:border-b-0" style={{ borderColor: `${SECONDARY}55` }}>
                          <Link
                            href={item.href}
                            prefetch={false}
                            onClick={() => setOpen(false)}
                            className="relative block px-3 py-2 text-[15px] hover:opacity-90 after:absolute after:left-3 after:right-3 after:bottom-[2px] after:h-[2px] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100"
                            style={{ color: PRIMARY }}
                          >
                            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                            {item.label}
                            <span className="after:bg-[var(--accent)]" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/ueber-uns" label="Über uns" />
            <NavLink href="/impressum" label="Impressum" />
          </nav>

          {/* CTA + BURGER */}
          <div className="flex items-center gap-3 z-[101]">
            <a
              href="https://wa.me/436765055437"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition`}
              style={{
                borderColor: ACCENT,
                color: "white",
                background: `linear-gradient(${ACCENT},${ACCENT}) padding-box,linear-gradient(135deg,${ACCENT},#e6cf96) border-box`,
                boxShadow: "0 6px 20px rgba(203,180,123,.35)",
              }}
            >
              Kostenlose&nbsp;Besichtigung
            </a>

            <button
              type="button"
              className="md:hidden rounded-xl border px-3 py-2 text-sm font-semibold"
              style={{ borderColor: `${SECONDARY}66`, color: PRIMARY, background: "white" }}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? "Schließen" : "Menü"}
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/30 z-[88]" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}

      {/* MOBILE PANEL */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-[120] max-h-[80vh] overflow-y-auto bg-white border-t transition-transform duration-300 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ borderColor: `${SECONDARY}66`, boxShadow: "0 18px 40px rgba(0,0,0,.1)" }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: `${SECONDARY}66` }}>
          <span className="font-semibold text-base" style={{ color: PRIMARY }}>Menü</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg border px-3 py-1 text-sm font-semibold"
            style={{ borderColor: `${SECONDARY}66`, color: PRIMARY, background: "white" }}
          >
            Schließen
          </button>
        </div>

        <div className="mx-auto w-full max-w-[1280px] px-4 py-4 text-sm font-medium" style={{ color: PRIMARY }}>
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-gray-50">
                Startseite
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setMobileSubOpen((v) => !v)}
                className="w-full flex items-center justify-between rounded-xl px-3 py-2 hover:bg-gray-50"
              >
                Leistungen
                <span
                  className={`transition-transform inline-grid place-items-center h-6 w-6 rounded-full border ${
                    mobileSubOpen ? "rotate-45" : ""
                  }`}
                  style={{ borderColor: `${SECONDARY}66`, color: DARK }}
                >
                  +
                </span>
              </button>

              <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${mobileSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="mt-1 mb-2 ml-1 grid divide-y rounded-xl border" style={{ borderColor: `${SECONDARY}66` }}>
                  {LEISTUNGEN.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileSubOpen(false);
                        }}
                        className="block px-3 py-3 hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link href="/ueber-uns" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-gray-50">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/impressum" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-gray-50">
                Impressum
              </Link>
            </li>

            <li className="pt-2">
              <a
                href="https://wa.me/436765055437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border px-3 py-3 font-semibold"
                style={{
                  borderColor: ACCENT,
                  color: DARK,
                  background: `linear-gradient(${ACCENT},${ACCENT}) padding-box,linear-gradient(135deg,${ACCENT},#e6cf96) border-box`,
                }}
              >
                Kostenlose&nbsp;Besichtigung
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

/** Aktiver Link */
function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 after:absolute after:left-3 after:right-3 after:bottom-[2px] after:h-[2px] after:origin-left after:transition-transform ${
        active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
      }`}
      style={{ color: PRIMARY, ['--accent' as any]: ACCENT } as any}
    >
      {label}
      <span className="after:bg-[var(--accent)]" />
    </Link>
  );
}

/** Array in 2 Spalten */
function splitColumns<T>(arr: T[], cols = 2): T[][] {
  const mid = Math.ceil(arr.length / cols);
  return [arr.slice(0, mid), arr.slice(mid)];
}
