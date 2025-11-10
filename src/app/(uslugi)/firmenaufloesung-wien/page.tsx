

import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

// ====== BRAND / CONTACTS ======
const BRAND = {
  accent: "rgb(217, 117, 0)",
  black: "#000",
  white: "#fff",
  gray: "#6B7280",
  email: "office@raumfrei-wien.at",
  phone: "+43 676 505 54 37",
};

/** Farbwelt raumfrei-wien.at (laut Vorgabe) */
const ACCENT = "rgb(217, 117, 0)"; // Orange
const WHITE = "rgb(255, 255, 255)";
const BLACK = "#000";
const GRAY = "#E5E7EB";

 export const metadata: Metadata = {
  title: "Firmenauflösung Wien – Büro, Praxis & Gewerbe | raumfrei-wien.at",
  description:
    "Firmenauflösung in Wien mit klaren Abläufen, Fixtermin und ruhiger Durchführung. Kostenlose Besichtigung, feste Ansprechperson, saubere Übergabe.",
  alternates: {
    canonical: "https://raumfrei-wien.at/service/firmenaufloesung-wien",
  },
  openGraph: {
    title: "Firmenauflösung Wien – Büro, Praxis & Gewerbe | raumfrei-wien.at",
    description:
      "Firmenauflösung in Wien mit klaren Abläufen, Fixtermin und ruhiger Durchführung. Kostenlose Besichtigung, feste Ansprechperson, saubere Übergabe.",
    url: "https://raumfrei-wien.at/service/firmenaufloesung-wien",
    siteName: "raumfrei-wien.at",
    locale: "de_AT",
    type: "website",
  },
  robots: { index: true, follow: true },
};


export default function FirmenaufloesungHero() {
  return (
    <>
    <section
      className="relative"
      style={{
        background: `
          radial-gradient(60rem 40rem at 0% -10%, ${GRAY}33, transparent),
          radial-gradient(60rem 40rem at 100% 120%, ${GRAY}22, transparent),
          ${WHITE}
        `,
      }}
    >
      

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-20">
        {/* LINKSSPALTE – Text */}
        <div className="flex flex-col justify-center">
          {/* H2 */}
          <h1
            className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
            style={{ color: BLACK }}
          >
            Firmenauflösung Wien – termingerecht &amp; professionell
          </h1>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Klare Abläufe, ruhige Durchführung, fixe Ansprechperson
          </h3>

          {/* Langer Intro-Text (SEO-fokussiert, AT-Deutsch) */}
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
            <p>
              Wenn ein Betrieb in Wien schließt, braucht es einen Partner, der ruhig,
              strukturiert und verlässlich vorgeht. Wir planen jede Phase Ihrer
              Firmenauflösung so, dass sie in den Tagesablauf passt – mit realistischen
              Zeitslots, klaren Zuständigkeiten und einer fixen Ansprechperson. Von der
              ersten Besichtigung bis zur Schlüsselübergabe halten wir den Ablauf schlank
              und übersichtlich, damit Sie und Ihr Team den Kopf frei behalten.
            </p>
            <p>
              Egal ob klassisches Büro, Agentur, Praxis, Studio oder Lager – wir
              übernehmen das komplette Zerlegen von Arbeitsplätzen und Regalen, das
              sorgfältige Sichern von Unterlagen und die fachgerechte Vorbereitung der
              Räume für die vereinbarte Übergabe. Dabei arbeiten wir leise, rücksichtsvoll
              gegenüber Nachbarn und Hausverwaltung und stimmen uns eng mit Ihnen ab, damit
              der Betrieb bis zum letzten Tag geordnet bleibt.
            </p>
            <p>
              Unser Zugang ist praxisnah: Wir klären im Vorfeld die Zugänge, Lift- und
              Zufahrtszeiten, erstellen einen stabilen Ablaufplan und dokumentieren die
              Schritte transparent. So wissen Sie jederzeit, was passiert, und können
              Termine mit Vermieter, Handwerk, IT oder Spedition sauber koordinieren – ohne
              Überraschungen und ohne Leerlauf.
            </p>
          </div>

          {/* EINZIGER CTA-BLOCK (Telefon • WhatsApp-Anfrage • E-Mail) */}
          <div
            className="mt-8 rounded-xl p-4 md:p-5"
            style={{ border: `1px solid ${GRAY}`, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <p className="text-sm md:text-base mb-3" style={{ color: "#374151" }}>
              Kostenlose Besichtigung &amp; kurze Abstimmung – wir sichern Ihnen einen
              klaren Fixtermin und begleiten Sie bis zur sauberen Übergabe.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href="tel:+4367650555437"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center"
                style={{ background: ACCENT, color: WHITE }}
              >
                Anrufen: +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
              </a>
              <a
                href="https://wa.me/4367650555437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                style={{ borderColor: GRAY, color: BLACK, background: WHITE }}
              >
                WhatsApp-Anfrage
              </a>
              <a
                href="mailto:office@raumfrei-wien.at"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                style={{ borderColor: GRAY, color: BLACK, background: WHITE }}
              >
                E-Mail: office@raumfrei-wien.at
              </a>
            </div>
          </div>
        </div>

        {/* RECHTSSPALTE – Bildplatzhalter (später ersetzen) */}
        <div className="relative w-full self-center">
          {/* Platzhalter: ersetzen durch <Image .../> sobald Motiv vorhanden */}
          <div
            className="w-full rounded-2xl flex items-center justify-center overflow-hidden"
            style={{
              aspectRatio: "4 / 3",
              border: `2px dashed ${GRAY}`,
              background:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 8px, transparent 8px, transparent 16px)",
            }}
          >
            <div className="text-center px-4 py-8" style={{ color: "#6B7280" }}>
              <strong style={{ color: BLACK }}>Bildplatzhalter</strong>
              <div className="text-sm mt-1">empfohlen: 1200 × 900 px (JPG/WebP)</div>
              <div className="text-xs mt-1">Fügen Sie hier Ihr Motiv „Firmenauflösung Wien“ ein.</div>
            </div>
          </div>

          
          <Image
            src="/images/firmenaufloesung-wien.webp"
            alt="Professionelle Firmenauflösung in Wien – Büro & Gewerbe"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          
        </div>
      </div>
    </section>
     <section
      className="relative"
      style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
    >
      {/* feine Akzentlinie */}
      <div aria-hidden style={{ height: 2, width: "100%", background: ACCENT }} />

      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Leistungen bei der Firmenauflösung in Wien
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Vom Büro bis zum Geschäftslokal – was konkret enthalten ist
        </h3>

        {/* Intro & Nutzenargumentation */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Bei einer betrieblichen Auflösung zählt jeder Handgriff und vor allem ein
            strukturierter Ablauf. Wir arbeiten mit klaren Zuständigkeiten, verlässlichen
            Zeitfenstern und transparenter Abstimmung mit Ihrem Team, der Hausverwaltung
            und allfälligen Partnerbetrieben. So bleibt der Tagesablauf planbar und Sie
            behalten jederzeit den Überblick – vom ersten Rundgang bis zur sauberen,
            nachvollziehbaren Übergabe.
          </p>
          <p>
            Unser Ziel ist, Ihr Objekt rasch und ordentlich in einen übergabefähigen
            Zustand zu bringen. Damit das gelingt, kombinieren wir sorgfältige
            Vorbereitung, eine passende Mannschaftsstärke und präzise Koordination vor Ort.
            Alle Schritte werden angekündigt und nachvollziehbar umgesetzt, damit es für Sie
            so unkompliziert wie möglich bleibt.
          </p>
        </div>

        {/* Kernleistungen – zweispaltig, klar gegliedert */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
            <h4 className="text-base font-semibold mb-3" style={{ color: BLACK }}>
              Büros &amp; Agenturen
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Abbau von Schreibtischen, Meeting-Bereichen und Küchenzeilen, Demontage von
              Trennwänden, Verpacken von Materialien, Abläufen und Zubehör, sorgfältige
              Vorbereitung für eine reibungslose Übergabe an Vermieter oder Nachmieter.
            </p>
          </div>

          <div className="rounded-xl border p=6 p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
            <h4 className="text-base font-semibold mb-3" style={{ color: BLACK }}>
              Praxen &amp; Studios
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Sorgfältiges Zerlegen von Möblierung und Einrichtungen, gesicherte Behandlung
              sensibler Inhalte, abgestimmtes Vorgehen in laufenden Häusern – ruhig,
              ordentlich und terminfix.
            </p>
          </div>

          <div className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
            <h4 className="text-base font-semibold mb-3" style={{ color: BLACK }}>
              Werkstatt &amp; Lager
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Räumung von Arbeitsbereichen, Regalsystemen und Nebenräumen, inkl. sicherer
              Demontage von Maschinen per Absprache. Wegeführung, Lift-Nutzung und
              Zufahrten werden im Vorfeld fixiert, damit der Zeitplan hält.
            </p>
          </div>

          <div className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
            <h4 className="text-base font-semibold mb-3" style={{ color: BLACK }}>
              Regale &amp; Arbeitsplätze
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Fachgerechter Abbau von Regalen, Boards, Theken und Arbeitsplatz-Inseln
              samt Verpackung der Einzelteile. Wir achten auf schadenfreie Arbeit und
              ein sauberes Bild in allen Räumen.
            </p>
          </div>

          <div className="rounded-xl border p-6 md:col-span-2" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
            <h4 className="text-base font-semibold mb-3" style={{ color: BLACK }}>
              Unterlagen sichern &amp; dokumentieren
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Relevante Akten, Datenträger und vertrauliche Bestände werden getrennt
              erfasst und für die weitere Verwendung vorbereitet. Auf Wunsch erhalten Sie
              eine einfache, klare Dokumentation – etwa über Räume, Schlüsselstände oder
              besondere Hinweise für die Übergabe.
            </p>
          </div>

          <div className="rounded-xl border p-6 md:col-span-2" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
            <h4 className="text-base font-semibold mb-3" style={{ color: BLACK }}>
              Übergabefähiger Zustand
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Nach Abschluss übergeben wir die Flächen in einem ordentlichen,
              vereinbarungsgemäßen Zustand – inklusive kurzer Begehung und Protokoll.
              So können Sie ohne Zusatzaufwand den nächsten Schritt setzen, sei es
              Rückgabe an die Hausverwaltung oder nahtloser Neustart an einem anderen
              Standort.
            </p>
          </div>
        </div>

        {/* feine Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
        background: `
          radial-gradient(46rem 28rem at 100% -10%, ${GRAY}33, transparent),
          radial-gradient(60rem 40rem at 0% 120%, ${GRAY}22, transparent),
          ${WHITE}
        `,
      }}
    >
      {/* feine Akzentlinie oben */}
      <div aria-hidden style={{ height: 2, width: "100%", background: ACCENT }} />

      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Ablauf – von der Besichtigung bis zur Übergabe
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          So bleibt Ihr Termin planbar
        </h3>

        {/* Einleitender Fließtext */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Eine geordnete Firmenauflösung gelingt dann am besten, wenn die Schritte klar
            sind und alle Beteiligten wissen, was wann passiert. Wir legen gemeinsam ein
            realistisches Zeitfenster fest, stimmen Zugang und Abläufe mit Ihrer
            Hausverwaltung, dem Objektservice oder der Center-Leitung ab und halten Sie
            während des gesamten Prozesses laufend am Laufenden. So bleibt der Kopf frei
            für das Wesentliche – und der Übergabetermin hält.
          </p>
          <p>
            Unten sehen Sie, wie wir typischerweise vorgehen. Der Plan ist erprobt, bleibt
            aber flexibel genug, um auf Besonderheiten Ihres Standorts oder Ihrer Branche
            rasch zu reagieren. Wichtig ist uns: kurze Wege, klare Zuständigkeiten und
            ein verlässlicher Takt.
          </p>
        </div>

        {/* Timeline ohne Icons, mit Schrittzählung */}
        <ol className="mt-10 space-y-8 md:space-y-10 counter-reset-steps">
          {/* 1 */}
          <li className="relative pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold"
              style={{ background: ACCENT, color: WHITE }}
            >
              1
            </span>
            <div className="rounded-xl border p-5 md:p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                Vorab-Besprechung
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Wir klären kurz die Eckdaten: Flächengröße, Etagen, Lage der Zugänge,
                gewünschter Zeitraum und besondere Rahmenbedingungen im Haus. Dadurch
                können wir schon vorab die passende Teamstärke abschätzen und einen
                ersten, realistischen Fahrplan vorbereiten.
              </p>
            </div>
          </li>

          {/* 2 */}
          <li className="relative pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold"
              style={{ background: ACCENT, color: WHITE }}
            >
              2
            </span>
            <div className="rounded-xl border p-5 md:p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                Kostenlose Besichtigung
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Vor Ort nehmen wir alle Bereiche genau auf: Arbeitsplätze, Regale,
                Nebenräume, Zugangswege und eventuelle Besonderheiten des Gebäudes. Auf
                dieser Basis erstellen wir ein klares, schriftliches Angebot samt
                nachvollziehbarer Leistungsbeschreibung.
              </p>
            </div>
          </li>

          {/* 3 */}
          <li className="relative pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold"
              style={{ background: ACCENT, color: WHITE }}
            >
              3
            </span>
            <div className="rounded-xl border p-5 md:p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                Fixtermin &amp; Ablaufplan
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Nach Ihrer Freigabe fixieren wir den Termin und den exakten Ablauf:
                Start- und Endzeiten, Etappen, Verantwortlichkeiten und Zugänge (z. B.
                Lift-Nutzung, Schlüsselverwaltung, Parkfläche). Sie erhalten einen
                übersichtlichen Plan, der für alle Beteiligten leicht verständlich ist.
              </p>
            </div>
          </li>

          {/* 4 */}
          <li className="relative pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold"
              style={{ background: ACCENT, color: WHITE }}
            >
              4
            </span>
            <div className="rounded-xl border p-5 md:p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                Durchführung im vereinbarten Zeitfenster
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Unser Team arbeitet ruhig, speditiv und gut eingespielt. Wir achten auf
                kurze Wege, saubere Übergaben zwischen den Arbeitsschritten und halten den
                vereinbarten Zeitrahmen ein. Währenddessen haben Sie Ihren fixen
                Ansprechpartner, der laufend koordiniert und Rückfragen klärt.
              </p>
            </div>
          </li>

          {/* 5 */}
          <li className="relative pl-10">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold"
              style={{ background: ACCENT, color: WHITE }}
            >
              5
            </span>
            <div className="rounded-xl border p-5 md:p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
                Abschlussbegehung &amp; Übergabe
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Zum Schluss gehen wir die Flächen gemeinsam durch, halten den Zustand kurz
                fest und schließen den Auftrag ordentlich ab. Sie können die Schlüssel
                unmittelbar übergeben oder den nächsten Schritt – etwa die Rückgabe – gleich
                im Anschluss setzen.
              </p>
            </div>
          </li>
        </ol>

        {/* dezente Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>

    <section aria-label="Verlassenschaft Ankauf Wien" className="relative"
style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
{/* Table Card */}
    <div
      className="rounded-3xl shadow-sm overflow-hidden"
      style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
    >
      {/* Kopfzeile */}
      <div
        className="px-6 py-4 md:px-8 md:py-6 border-b text-center"
        style={{ borderColor: `${BRAND.gray}22`, background: `${BRAND.accent}0F` }}
      >
        <span className="font-bold text-lg md:text-xl" style={{ color: BRAND.black }}>
          Richtpreise nach Objekt und Umfang
        </span>
      </div>

      {/* Responsive Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr style={{ borderBottom: `1px solid ${BRAND.gray}22` }}>
              <th className="py-4 px-6 text-left align-bottom">Objekt / Umfang</th>
              <th className="py-4 px-6 text-right align-bottom">wenig Hausrat</th>
              <th className="py-4 px-6 text-right align-bottom">normaler Hausrat</th>
              <th className="py-4 px-6 text-right align-bottom">viel Hausrat</th>
              <th className="py-4 px-6 text-right align-bottom">Messie</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Keller", "ab € 199,–", "ab € 399,–", "ab € 699,–", "ab € 899,–"],
              ["kleine Wohnung", "ab € 699,–", "ab € 1.399,–", "ab € 1.799,–", "ab € 2.149,–"],
              ["große Wohnung", "ab € 1.149,–", "ab € 1.699,–", "ab € 2.349,–", "ab € 3.449,–"],
              ["Haus", "ab € 899,–", "ab € 2.149,–", "ab € 3.449,–", "ab € 3.949,–"],
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: `1px solid ${BRAND.gray}15` }}>
                <td className="py-4 px-6 font-medium">{row[0]}</td>
                <td className="py-4 px-6 text-right">{row[1]}</td>
                <td className="py-4 px-6 text-right">{row[2]}</td>
                <td className="py-4 px-6 text-right">{row[3]}</td>
                <td className="py-4 px-6 text-right">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fußzeile */}
      <div className="px-6 py-5 md:px-8 md:py-6 border-t" style={{ borderColor: `${BRAND.gray}22` }}>
        <p className="text-sm md:text-base" style={{ color: BRAND.gray }}>
          ★ Alle Preise verstehen sich als <em>Ab-Preise</em>. Verbindliche Angebote nach kostenloser
          Besichtigung vor Ort in Wien. Für eine Kurzabstimmung:{" "}
          <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a>{" "}
          oder telefonisch/WhatsApp:{" "}
          <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.
        </p>
      </div>
    </div>
    </div>
</section>

    <section
      className="relative"
      style={{
        background: `
          radial-gradient(54rem 34rem at 0% -10%, ${GRAY}33, transparent),
          radial-gradient(60rem 40rem at 100% 120%, ${GRAY}22, transparent),
          ${WHITE}
        `,
      }}
    >
      {/* dünne Akzentlinie */}
      <div aria-hidden style={{ height: 2, width: "100%", background: ACCENT }} />

      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Kostenübersicht für Firmenauflösungen in Wien
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Wovon die Kalkulation abhängt
        </h3>

        {/* Einleitender Copy-Block */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Jede Betriebsauflösung ist anders: Grundrisse unterscheiden sich, Etagenzahlen
            variieren, und nicht jedes Objekt hat die gleichen Zugänge oder Zeitfenster. Damit
            Sie auf eine verlässliche Basis planen können, kalkulieren wir transparent und
            nachvollziehbar. Nach einer kurzen Besichtigung wissen Sie genau, womit zu rechnen
            ist – sauber aufgelistet, mit klaren Positionen und realistischen Zeitangaben.
          </p>
          <p>
            Unser Anspruch ist, die Abläufe so schlank wie möglich zu halten und Ihnen
            Klarheit zu geben, bevor etwas startet. Damit vermeiden wir Überraschungen,
            reduzieren Doppelwege und sorgen dafür, dass Termin und Budget halten.
          </p>
        </div>

        {/* Faktorenraster ohne Icons */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Größe &amp; Etagen
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Fläche, Anzahl der Stockwerke und die Art der Räumlichkeiten beeinflussen den
              Personal- und Zeitaufwand. Mehr Etagen bedeuten meist zusätzliche Wege und
              Koordination – das berücksichtigen wir in der Planung.
            </p>
          </div>

          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Zugänge &amp; Wege
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Breite der Gänge, Liftverfügbarkeit, Zufahrt zum Gebäude und Tragewege haben
              unmittelbaren Einfluss auf die Dauer. Wir prüfen diese Punkte vorab und legen
              sie im Ablaufplan fest.
            </p>
          </div>

          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Prioritäten &amp; Reihenfolge
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Was muss zuerst raus, was kann bis zuletzt bleiben? Ob IT-Arbeitsplätze,
              Präsentationsflächen oder Lagerzonen – definierte Prioritäten helfen, die
              Abläufe effizient zu strukturieren und den Betrieb bis zum Schluss geordnet zu
              führen.
            </p>
          </div>

          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Zeitfenster &amp; Hausregeln
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              In vielen Objekten gelten fixe Zeitfenster oder besondere Vorgaben. Wir
              stimmen diese Punkte mit Hausverwaltung und Beteiligten ab und planen die
              Mannschaft so, dass alles in den vorgesehenen Intervallen passiert.
            </p>
          </div>

          <div
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.04)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Dokumentation &amp; Schlüsselübergabe
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Je nach Objekt und Vorgaben kann eine kurze Dokumentation, Foto-Nachweis oder eine
              abgestimmte Schlüsselübergabe erforderlich sein. Wir bereiten das in Ihrem Sinne
              vor und halten die wesentlichen Punkte kompakt fest.
            </p>
          </div>
        </div>

        {/* Hinweisbox (ohne zusätzliche Calls-to-Action) */}
        <div
          className="mt-10 rounded-xl p-5 md:p-6"
          style={{ border: `1px solid ${GRAY}`, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
            Hinweis zur Angebotsstellung
          </h4>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
            Wir arbeiten mit einem klaren, schriftlichen Angebot nach der Besichtigung – ohne
            pauschale Listen und ohne versteckte Posten. So wissen Sie vorab, welche Leistungen
            enthalten sind und in welchem Rahmen sich der Aufwand bewegt. Das schafft
            Transparenz, Planungssicherheit und eine faire Basis für die Umsetzung.
          </p>
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
        background: `
          radial-gradient(48rem 30rem at 100% -10%, ${GRAY}33, transparent),
          radial-gradient(56rem 36rem at 0% 120%, ${GRAY}22, transparent),
          ${WHITE}
        `,
      }}
    >
      {/* feine Akzentlinie */}
      <div aria-hidden style={{ height: 2, width: "100%", background: ACCENT }} />

      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Ihre Vorteile mit raumfrei-wien.at
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Warum Unternehmen in Wien uns wählen
        </h3>

        {/* Einleitender Copy-Block */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Wer eine Betriebsauflösung in Wien plant, braucht einen Partner, der Ruhe reinbringt
            und den Überblick behält. Unser Team kennt die Abläufe in Häusern, in Einkaufsstraßen
            und auf Büroetagen – wir sprechen mit Hausverwaltungen, stimmen Zugänge ab und halten
            den vereinbarten Takt. Sie bekommen genau das, was Sie brauchen: verlässliche Planung,
            saubere Durchführung und eine Ansprechperson, die erreichbar ist, wann immer es zählt.
          </p>
          <p>
            Unser Anspruch ist, Ihnen Arbeit abzunehmen, statt neue Baustellen zu erzeugen. Darum
            bereiten wir jeden Schritt nachvollziehbar vor, arbeiten zügig und mit Blick aufs Ganze.
            Das Ergebnis: eine Übergabe, die hält, und ein Prozess, der sich so ruhig anfühlt, wie
            es in einer intensiven Phase nur möglich ist.
          </p>
        </div>

        {/* Vorteilskarten – ohne Icons, klar gegliedert */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Kurze Wege
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Regionale Teams, schnelle Anfahrt, klare Koordination vor Ort. Wir planen
              die Abfolge so, dass alles zügig läuft – von der ersten Minute bis zur
              Übergabe. Das spart Zeit und schont Ressourcen.
            </p>
          </div>

          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Realistische Planung
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir versprechen nur, was sich zuverlässig halten lässt. Die Teamgröße und
              das Zeitfenster werden nach einer kurzen Besichtigung so festgelegt, dass
              Ihr Terminplan nicht ins Wanken gerät.
            </p>
          </div>

          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Diskrete Umsetzung
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir arbeiten ruhig, rücksichtsvoll und mit Feingefühl – besonders in
              Häusern mit Parteienverkehr oder in sensiblen Bereichen. Abläufe werden
              so organisiert, dass der Alltag rundum möglichst ungestört bleibt.
            </p>
          </div>

          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Feste Ansprechperson
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Eine Person koordiniert den gesamten Ablauf, kennt alle Details und ist
              für Sie erreichbar. So landen Absprachen nicht im Leeren – und Sie haben
              eine klare Linie bis zum Abschluss.
            </p>
          </div>

          <div
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Schriftliche Zusage
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Nach der Besichtigung erhalten Sie ein klares, schriftliches Angebot mit
              allen Punkten, die ausgemacht sind – inklusive Zeitfenster und Ablauf.
              Das schafft Sicherheit und eine saubere Grundlage für die nächsten Schritte.
            </p>
          </div>
        </div>

        {/* dezente Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
        background: `
          radial-gradient(48rem 30rem at 0% -10%, ${GRAY}33, transparent),
          radial-gradient(56rem 36rem at 100% 120%, ${GRAY}22, transparent),
          ${WHITE}
        `,
      }}
    >
      {/* feine Akzentlinie */}
      <div aria-hidden style={{ height: 2, width: "100%", background: ACCENT }} />

      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Für welche Betriebe ist die Firmenauflösung ideal?
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Praxisbeispiele aus Wien
        </h3>

        {/* Einleitender Text */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Unternehmensphasen ändern sich – manchmal schneller, als man denkt. Genau dann
            braucht es eine geordnete, verlässliche Abwicklung, die nicht zusätzlich belastet.
            Unsere Erfahrung zeigt: Eine professionelle Firmenauflösung zahlt sich aus, wenn
            Termine eng gesteckt sind, Flächen rasch frei werden müssen oder einfach
            sichergestellt werden soll, dass am Ende alles passt – vom ersten Rundgang bis zur
            finalen Übergabe.
          </p>
          <p>
            Nachfolgend ein paar typische Szenarien aus dem Wiener Alltag. Die Beispiele zeigen,
            wie sich unser Ablauf in unterschiedliche Branchen einfügt – schlank, ruhig und mit
            einem klaren Plan, der hält.
          </p>
        </div>

        {/* Praxisbeispiele als Karten (ohne Icons) */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Startup zieht um */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Startup zieht um
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wachsende Teams brauchen flexible Flächen. Wir planen die Auflösung des
              Bestandsbüros so, dass der laufende Betrieb nicht ins Stocken gerät: Arbeitsplätze
              werden in Etappen rückgebaut, Wege und Zeiten mit dem Haus abgestimmt, sensible
              Inhalte separat gesichert. Das alte Büro ist fristgerecht übergabefähig, während
              Ihr Team bereits am neuen Standort durchstartet.
            </p>
          </article>

          {/* Praxisauflösung */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Praxisauflösung
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Bei der Schließung oder Verlegung einer Praxis zählt ein besonders ruhiges,
              umsichtiges Vorgehen. Wir stimmen Zugänge und Zeiten exakt ab, trennen wichtige
              Unterlagen, räumen Behandlungsräume strukturiert und sorgen dafür, dass die
              Räumlichkeiten im vereinbarten Zustand übergeben werden können – ohne unnötige
              Unterbrechungen für Patientinnen und Patienten.
            </p>
          </article>

          {/* Store-Rückgabe */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Store-Rückgabe
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Innenstadtlagen bringen oft enge Zeitfenster und genaue Hausregeln mit sich.
              Wir richten den Ablauf so ein, dass Rückbau, Abtransport und die finale
              Flächenübergabe in einem klaren Takt funktionieren. Absprachen mit dem Center
              oder der Hausverwaltung sind fixer Bestandteil unserer Vorbereitung.
            </p>
          </article>

          {/* Zwischenlager leeren */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Zwischenlager leeren
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wenn temporäre Flächen frei werden, kommt es auf Tempo und Übersicht an. Wir
              prüfen Wege, Liftzeiten und Zugänge, teilen die Arbeit sinnvoll in Abschnitte und
              sorgen dafür, dass alles zügig abgewickelt wird – mit einer klaren Ansprechperson
              für Rückfragen und Abstimmungen.
            </p>
          </article>

          {/* Büroetage konsolidieren */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Büroetage konsolidieren
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Zusammenlegen statt vergrößern: Wir nehmen einzelne Bereiche gezielt heraus,
              bauen Arbeitsplätze und Regale strukturiert ab und halten die restlichen Zonen
              nutzbar. Durch klare Reihenfolgen und abgestimmte Zeitfenster bleibt der
              Tagesablauf stabil – ohne unnötige Unterbrechungen.
            </p>
          </article>
        </div>

        {/* dezente Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
        background: `
          radial-gradient(50rem 32rem at 100% -20%, ${GRAY}33, transparent),
          radial-gradient(60rem 40rem at 0% 120%, ${GRAY}22, transparent),
          ${WHITE}
        `,
      }}
    >
      {/* feine Akzentlinie */}
      <div aria-hidden style={{ height: 2, width: "100%", background: ACCENT }} />

      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Häufige Fragen zur Firmenauflösung in Wien
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Antworten aus der Praxis
        </h3>

        {/* FAQ-Liste */}
        <div className="mt-8 space-y-6">
          {/* Q1 */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Muss ich während der Firmenauflösung persönlich vor Ort sein?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Nicht zwingend. Nach der Besichtigung legen wir alles schriftlich fest – inkl.
              Zeitfenster, Schlüsselhandhabung und kurzen Abstimmwegen. Wenn Sie möchten, führen
              wir die Abwicklung eigenständig durch und informieren Sie laufend über den Stand.
              Zur finalen Begehung können Sie persönlich kommen oder eine Ansprechperson
              benennen.
            </p>
          </div>

          {/* Q2 */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wie schnell bekommen wir einen Termin?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              In vielen Fällen innerhalb weniger Tage. Es hängt vor allem von Größe, Lage und
              den vorgegebenen Zeitfenstern im Haus ab. Nach der Besichtigung erhalten Sie einen
              realistischen, fix vereinbarten Zeitraum – damit Sie intern und mit der
              Hausverwaltung gut planen können.
            </p>
          </div>

          {/* Q3 */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Wie läuft die Schlüsselübergabe ab?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Wir vereinbaren vorab, wer wann Zugang erhält und wie die Schlüssel verwahrt
              werden. Nach Abschluss gibt es eine kurze Begehung samt Protokoll, danach können
              Sie die Schlüssel direkt übergeben – wahlweise selbst oder über die Verwaltung.
              Alles klar, ohne Umwege.
            </p>
          </div>

          {/* Q4 */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Was passiert mit Unterlagen und Datenträgern?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Relevante Akten und Datenträger werden getrennt erfasst und Ihnen geordnet
              übergeben – auf Wunsch mit kurzer Dokumentation. Sensible Inhalte behandeln wir
              mit der nötigen Sorgfalt und nach den Vorgaben, die wir mit Ihnen im Vorfeld
              abstimmen.
            </p>
          </div>

          {/* Q5 */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              Bekommen wir einen Fixpreis?
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Ja. Nach der kostenlosen Besichtigung erhalten Sie ein schriftliches Angebot mit
              klaren Positionen und einem Fixbetrag, der den vereinbarten Leistungsumfang
              abdeckt. So haben Sie volle Transparenz und können budgetseitig sicher planen.
            </p>
          </div>
        </div>

        {/* dezente Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
    <section
      className="relative"
      style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
    >
      {/* dezente Akzentlinie */}
      <div aria-hidden style={{ height: 2, width: "100%", background: ACCENT }} />

      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Experten-Tipps für eine reibungslose Firmenauflösung
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          So sparen Sie Zeit &amp; halten den Überblick
        </h3>

        {/* Einleitender Text */}
        <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          <p>
            Eine gut vorbereitete Betriebsauflösung fühlt sich nicht nach Ausnahmezustand an,
            sondern nach einem geordneten Projekt mit klaren Schritten. Mit ein paar einfachen
            Vorkehrungen erhöhen Sie die Planbarkeit und reduzieren Nebenaufgaben, die sonst
            wertvolle Ressourcen binden. Die folgenden Empfehlungen stammen aus der täglichen
            Praxis in Wien und helfen Ihnen, den Prozess konzentriert und ruhig umzusetzen.
          </p>
          <p>
            Entscheidend ist, früh die richtigen Informationen zusammenzutragen, Prioritäten
            festzulegen und einen verlässlichen Ablauf zu definieren. So bleibt alles auf Schiene,
            Absprachen greifen sauber ineinander, und am Ende steht eine Übergabe, die ohne
            Nacharbeiten hält.
          </p>
        </div>

        {/* Tipps – eigenständige Karten ohne Icons */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Tipp 1 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              1) Inventarliste „light“
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Erstellen Sie eine schlanke Übersicht der Hauptposten – Arbeitsplätze, Regale,
              Geräte, Nebenräume. Es geht nicht um Details bis zur letzten Schraube, sondern um
              ein realistisches Bild: wo wie viel steht und was davon unbedingt mitzunehmen ist.
              Diese kurze Liste hilft uns, Teamstärke und Ablauf so zu planen, dass Termine
              verlässlich eingehalten werden.
            </p>
          </article>

          {/* Tipp 2 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              2) Zugänge &amp; Zeitslots früh klären
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Sprechen Sie zeitgerecht mit Hausverwaltung oder Center-Leitung: Aufzüge,
              Zufahrten, Ruhezeiten, Schlüsselregelungen – je früher diese Punkte fixiert
              sind, desto reibungsloser läuft die Abwicklung. Wir binden diese Informationen
              direkt in den Ablaufplan ein, damit alle Beteiligten dieselbe Taktung haben.
            </p>
          </article>

          {/* Tipp 3 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              3) Fotos der Flächen &amp; kurzen Rundgang festhalten
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Ein kurzer Rundgang mit aktuellen Fotos – Eingänge, Gangbreiten, Stiegen, allfällige
              Besonderheiten – spart Zeit bei der Planung. Wir sehen sofort, wie die Wege zu
              gestalten sind und welche Reihenfolge sinnvoll ist. Das macht die Terminierung
              einfacher und erhöht die Verlässlichkeit.
            </p>
          </article>

          {/* Tipp 4 */}
          <article
            className="rounded-xl border p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              4) Wertiges rechtzeitig markieren
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Markieren Sie vorab, was unbedingt erhalten bleiben oder mitgenommen werden soll –
              etwa spezielle Geräte, Muster, Dekorationen oder Unterlagen. Eine einfache
              Kennzeichnung vor Ort verhindert Rückfragen und sorgt dafür, dass Wichtiges
              zum richtigen Zeitpunkt an der richtigen Stelle landet.
            </p>
          </article>

          {/* Tipp 5 */}
          <article
            className="rounded-xl border p-6 md:col-span-2"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: BLACK }}>
              5) Eine klare Ansprechperson definieren
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Legen Sie intern fest, wer die Rückfragen bündelt und Entscheidungen freigibt.
              Eine zentrale Ansprechperson macht den Ablauf deutlich schneller und verhindert
              Misstöne. Wir stimmen uns eng ab, dokumentieren die Schritte und sorgen dafür,
              dass Informationen nicht verloren gehen.
            </p>
          </article>
        </div>

        {/* Abschlussabsatz */}
        <div className="mt-8 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
          Eine gelungene Firmenauflösung ist kein Zufall, sondern das Ergebnis guter Vorbereitung
          und eines belastbaren Plans. Mit den richtigen Unterlagen, klaren Zuständigkeiten und
          realistischen Zeitfenstern bleibt der Prozess überschaubar – und Sie können sich auf
          das Wesentliche konzentrieren: den nächsten Schritt für Ihr Unternehmen.
        </div>

        {/* feine Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>
     <section
      className="relative"
      style={{
        background: `
          radial-gradient(44rem 28rem at 50% -20%, ${GRAY}33, transparent),
          radial-gradient(56rem 36rem at 50% 120%, ${GRAY}22, transparent),
          ${WHITE}
        `,
      }}
    >
      {/* dezente Akzentlinie */}
      <div aria-hidden style={{ height: 2, width: "100%", background: ACCENT }} />

      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: BLACK }}>
          Kontakt für Firmenauflösung in Wien
        </h2>

        {/* H3 */}
        <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
          Kurz abstimmen &amp; Besichtigung sichern
        </h3>

        {/* Kurzer, präziser Text (ohne zusätzliche Kontaktangaben im Fließtext) */}
        <div className="mt-6 text-base md:text-lg leading-relaxed max-w-3xl" style={{ color: "#374151" }}>
          Wir halten den Ablauf bewusst schlank: eine kurze Abstimmung, eine
          unverbindliche Besichtigung vor Ort und ein klares, schriftliches Angebot
          mit fixiertem Zeitraum. So wissen Sie früh, womit zu rechnen ist – und können
          intern alles ruhig und planbar organisieren. Die Umsetzung erfolgt termintreu
          und mit einer festen Ansprechperson bis zur sauberen Übergabe.
        </div>

        {/* Einziger (zweiter & letzter) Kontakt-CTA dieser Seite */}
        <div
          className="mt-8 rounded-xl p-5 md:p-6"
          style={{ border: `1px solid ${GRAY}`, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm md:text-base" style={{ color: "#374151" }}>
              Jetzt Termin abstimmen – wir melden uns zeitnah und kommen zur kostenlosen Besichtigung.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="tel:+4367650555437"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center"
                style={{ background: ACCENT, color: WHITE }}
              >
                Anrufen: +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
              </a>
              <a
                href="https://wa.me/4367650555437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                style={{ borderColor: GRAY, background: WHITE, color: BLACK }}
              >
                WhatsApp-Anfrage
              </a>
              <a
                href="mailto:office@raumfrei-wien.at"
                className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                style={{ borderColor: GRAY, background: WHITE, color: BLACK }}
              >
                E-Mail: office@raumfrei-wien.at
              </a>
            </div>
          </div>
        </div>

        {/* Abschlusslinie */}
        <div className="mt-10" aria-hidden>
          <div style={{ height: 1, width: "100%", background: GRAY }} />
        </div>
      </div>
    </section>

    
    </>
  );
}
