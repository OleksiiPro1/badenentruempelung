"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ACCENT = "rgb(217,117,0)";
const BLACK = "#000";
const WHITE = "#fff";
const GRAY = "#E5E7EB";
const DARK_GRAY = "#4B5563";

const LEISTUNGEN = [
  { href: "/verlassenschaften-wien", label: "Verlassenschaften Wien" },
  { href: "/firmenaufloesung-wien", label: "Firmenauflösung Wien" },
  { href: "/raeumung-wien", label: "Räumung Wien" },
  { href: "/entruempelungsfirma-wien", label: "Entrümpelungsfirma Wien" },
  { href: "/kellerentruempelung-wien", label: "Kellerentrümpelung Wien" },
  { href: "/dachboden-raeumung-wien", label: "Dachboden Räumung Wien" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      className={`sticky top-0 z-[70] border-b backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,.06)]" : ""
      }`}
      style={{
        borderColor: GRAY,
        backgroundImage: `
          linear-gradient(180deg,rgba(255,255,255,.96),rgba(255,255,255,.9)),
          radial-gradient(60rem 40rem at 0% -10%,${GRAY}33,transparent),
          radial-gradient(60rem 40rem at 100% 120%,${GRAY}22,transparent)
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 z-[101]" aria-label="Raumfrei Wien">
            <Image
              src="/images/logo.webp"
              alt="Raumfrei Wien Logo"
              width={50}
              height={25}
              priority
              className="block"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="/" label="Startseite" />
            <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-gray-800 hover:text-black"
              >
                Leistungen
                <svg
                  className={`h-4 w-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
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
                className={`absolute left-1/2 top-[calc(100%+0.5rem)] z-[80] w-[560px] -translate-x-1/2 rounded-2xl border bg-white/95 backdrop-blur ring-1 ring-black/5 shadow-2xl transition-all ${
                  open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{ borderColor: GRAY }}
              >
                <div className="grid grid-cols-2 gap-0 p-2">
                  {splitColumns(LEISTUNGEN).map((col, i) => (
                    <ul key={i}>
                      {col.map((item) => (
                        <li key={item.href} className="border-b last:border-b-0" style={{ borderColor: GRAY }}>
                          <Link
  href={item.href}
  prefetch={false}
  onClick={() => setOpen(false)}
  className="relative block px-3 py-2 text-[15px] text-black hover:text-black after:absolute after:left-3 after:right-3 after:bottom-[2px] after:h-[2px] after:bg-[rgb(217,117,0)] after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100"
>

                            <span
                              className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
                              style={{ background: ACCENT }}
                            />
                            {item.label}
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

          {/* BUTTON + BURGER */}
          <div className="flex items-center gap-2 z-[101]">
  <a
    href="https://wa.me/436765055437"
    target="_blank"
    rel="noopener noreferrer"
    className={`hidden md:inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition ${
      mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
    style={{
      borderColor: ACCENT,
      color: WHITE,
      background: `linear-gradient(${ACCENT},${ACCENT}) padding-box,linear-gradient(135deg,${ACCENT},#ffb366) border-box`,
      transition: "opacity 0.3s ease",
    }}
  >
    Kostenlose&nbsp;Besichtigung
  </a>


  <button
    type="button"
    className="md:hidden rounded-xl border px-3 py-2 text-sm font-semibold"
    style={{ borderColor: GRAY, color: BLACK, background: WHITE }}
    onClick={() => setMobileOpen((v) => !v)}
  >
    {mobileOpen ? "Schließen" : "Menü"}
  </button>
</div>

        </div>
      </div>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[90]"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* MOBILE PANEL */}
      <div
  className={`md:hidden fixed inset-x-0 top-0 z-[120] max-h-[80vh] overflow-y-auto bg-white border-t transition-transform duration-300 ${
    mobileOpen ? "translate-y-0" : "-translate-y-full"
  }`}

        style={{ borderColor: GRAY, boxShadow: "0 18px 40px rgba(0,0,0,.1)" }}
      >

     <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: GRAY }}>
    <span className="font-semibold text-base">Menü</span>
    <button
      type="button"
      onClick={() => setMobileOpen(false)}
      className="rounded-lg border px-3 py-1 text-sm font-semibold"
      style={{ borderColor: GRAY, color: BLACK, background: WHITE }}
    >
      Schließen
    </button>
  </div>

        <div className="mx-auto w-full max-w-[1200px] px-4 py-4 text-sm font-medium" style={{ color: BLACK }}>
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
                  style={{ borderColor: GRAY, color: DARK_GRAY }}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                  mobileSubOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="mt-1 mb-2 ml-1 grid divide-y rounded-xl border" style={{ borderColor: GRAY }}>
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
                  color: BLACK,
                  background: `linear-gradient(${ACCENT},${ACCENT}) padding-box,linear-gradient(135deg,${ACCENT},#ffb366) border-box`,
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

/** Активная ссылка */
function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-gray-800 hover:text-black after:absolute after:left-3 after:right-3 after:bottom-[2px] after:h-[2px] after:bg-[rgb(217,117,0)] after:origin-left after:transition-transform ${
        active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
      }`}
    >
      {label}
    </Link>
  );
}

/** Разделение массива на 2 колонки */
function splitColumns<T>(arr: T[], cols = 2): T[][] {
  const mid = Math.ceil(arr.length / cols);
  return [arr.slice(0, mid), arr.slice(mid)];
}
