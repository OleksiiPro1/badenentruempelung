// app/verlassenschaft-wien/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
// ====== SEO / METADATA ======
export const metadata: Metadata = {
  title: "Verlassenschaft Wien – Ankauf, Räumung & diskrete Unterstützung",
  description:
    "Verlassenschaft Wien: kostenlose Besichtigung, faire Bewertung, optionaler Ankauf und besenreine Räumung – diskret, ruhig und zuverlässig.",
  alternates: { canonical: "https://raumfrei-wien.at/verlassenschaft-wien" },
  openGraph: {
    title: "Verlassenschaft Wien – Ankauf & Räumung aus einer Hand",
    description:
      "Professionelle Unterstützung bei der Verlassenschaft in Wien: Bewertung, Ankauf, Räumung und besenreine Übergabe – mit fixen Zusagen.",
    url: "https://raumfrei-wien.at/verlassenschaft-wien",
    siteName: "raumfrei-wien.at",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ====== BRAND / CONTACTS ======
const BRAND = {
  accent: "rgb(217, 117, 0)",
  black: "#000",
  white: "#fff",
  gray: "#6B7280",
  email: "office@raumfrei-wien.at",
  phone: "+43 676 505 54 37",
};

// ====== CTA-КОМПОНЕНТ ======
function ContactStrip({
  email = BRAND.email,
  phone = BRAND.phone,
  accent = BRAND.accent,
  gray = BRAND.gray,
  black = BRAND.black,
  white = BRAND.white,
  subject = "Anfrage%20Verlassenschaft%20Wien",
}: {
  email?: string;
  phone?: string;
  accent?: string;
  gray?: string;
  black?: string;
  white?: string;
  subject?: string;
}) {
  const tel = `tel:${phone.replace(/\s/g, "")}`;
  const wa = `https://wa.me/${phone.replace(/[^\d]/g, "")}`;
  const mail = `mailto:${email}?subject=${subject}`;
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <a
        href={tel}
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
        style={{ background: accent, color: white }}
      >
        Anrufen
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border transition"
        style={{ borderColor: `${gray}55`, color: black }}
      >
        WhatsApp
      </a>
      <a
        href={mail}
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border transition"
        style={{ borderColor: `${gray}55`, color: black }}
      >
        E-Mail
      </a>
    </div>
  );
}

// ====== PAGE: Einleitung (Section 1) ======
export default function Page() {
  return (
    <main id="main" className="min-h-screen" style={{ background: "#fff", color: "#000" }}>
      
      <section aria-label="Einleitung – Verlassenschaft Wien" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Text links */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold">
          Verlassenschaft Wien – respektvoll, ruhig und verlässlich
        </h1>

        <p
          className="mt-4 text-base md:text-lg leading-relaxed"
          style={{ color: "#6B7280" }}
        >
          Eine Verlassenschaft in Wien verlangt Fingerspitzengefühl, Erfahrung und klare
          Abläufe. Wir begleiten Sie mit Ruhe, Respekt und strukturierter Planung – vom ersten
          Gespräch bis zur besenreinen Übergabe. Dabei bleibt alles nachvollziehbar, persönlich
          und termintreu.
        </p>

        <p
          className="mt-4 text-base md:text-lg leading-relaxed"
          style={{ color: "#6B7280" }}
        >
          Auf Wunsch kombinieren wir die Räumung mit einer fairen Bewertung und einem optionalen
          Ankauf erhaltenswerter Gegenstände. So bleibt der gesamte Prozess transparent und Sie
          haben nur einen Ansprechpartner – diskret, zuverlässig und menschlich.
        </p>

        <h3 className="mt-8 text-xl font-bold">Was uns in Wien auszeichnet</h3>
        <ul
          className="mt-3 space-y-2 text-sm md:text-base"
          style={{ color: "#6B7280" }}
        >
          <li>Kostenlose Erstbesichtigung in allen Bezirken Wiens</li>
          <li>Klare Einschätzung & transparente Abläufe ohne Druck</li>
          <li>Optionaler Ankauf von Antiquitäten und wertigen Stücken</li>
          <li>Ruhige, verlässliche Durchführung mit fixer Ansprechperson</li>
        </ul>

        <h3 className="mt-8 text-xl font-bold">Persönliche Begleitung & Fairness</h3>
        <p
          className="mt-3 text-sm md:text-base leading-relaxed"
          style={{ color: "#6B7280" }}
        >
          Wir wissen, dass jede Verlassenschaft ihre eigene Geschichte hat. Darum arbeiten wir
          mit Bedacht, achten auf Ihre Wünsche und bieten faire Lösungen an – ob im 1. Bezirk,
          in Hietzing oder am Stadtrand. Vertrauen, Diskretion und klare Kommunikation stehen
          dabei an erster Stelle.
        </p>

        {/* CTA */}
        <ContactStrip subject="Anfrage%20Verlassenschaft%20Wien" />
      </div>

      {/* Bild rechts */}
      <div className="relative">
        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(107,114,128,0.2)",
            boxShadow: "0 18px 40px rgba(0,0,0,.08)",
          }}
        >
          <Image
            src="/images/verlassenschaften-wien.webp"
            alt="Verlassenschaft in Wien – respektvolle Räumung und Ankauf"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 540px, 100vw"
            priority
          />
        </div>
        <div
          className="absolute -bottom-4 left-6 rounded-2xl px-4 py-2 text-sm shadow-md"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(255,116,0,0.3)",
            color: "#111111",
          }}
        >
          Diskret • Regional • Persönlich
        </div>
      </div>
    </div>
  </div>
</section>


      {/* SECTION 2: Verlassenschaft Wien – Leistungen & Ablauf */}
<section aria-label="Leistungen & Ablauf – Verlassenschaft Wien" className="relative"
style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
    <h2 className="text-2xl md:text-3xl font-extrabold">
      Verlassenschaft Wien – Leistungen & Ablauf
    </h2>

    <h3 className="mt-6 text-xl font-bold">Unsere Leistungen in Wien</h3>
    <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
      Jede Verlassenschaft ist anders. Wir arbeiten umsichtig, halten Absprachen ein und
      bieten Lösungen, die zu Ihrer Situation passen – vom einzelnen Zimmer bis zur kompletten
      Wohnfläche. Alles bleibt nachvollziehbar und aus einer Hand.
    </p>
    <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>Kostenlose Erstberatung & Besichtigung in allen Wiener Bezirken</li>
      <li>Übersichtliche Einschätzung mit klaren nächsten Schritten</li>
      <li>Optional: faire Bewertung und Ankauf erhaltenswerter Stücke (Antiquitäten, Bilder, Schmuck, Möbel)</li>
      <li>Geordnete Räumung mit besenreiner Übergabe und fixer Ansprechperson</li>
    </ul>

    <h3 className="mt-8 text-xl font-bold">So läuft es ab – Schritt für Schritt</h3>
    <ol className="mt-3 space-y-3 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>1) Kontakt & Termin:</span>{" "}
        Kurze Abstimmung per Telefon, E-Mail oder WhatsApp. Wir vereinbaren rasch eine Besichtigung vor Ort in Wien.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>2) Besichtigung & Einschätzung:</span>{" "}
        Wir nehmen uns Zeit, hören zu und halten Prioritäten fest. Wenn gewünscht, prüfen wir erhaltenswerte Gegenstände.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>3) Angebot & Fixtermin:</span>{" "}
        Sie erhalten ein klares, schriftliches Angebot mit nachvollziehbarem Ablauf und verlässlichem Termin.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>4) Durchführung & Übergabe:</span>{" "}
        Ruhige, strukturierte Umsetzung mit Abschlussbegehung und besenreiner Übergabe.
      </li>
    </ol>

    {/* optionaler CTA unten */}
    <div className="mt-6">
     
    </div>
  </div>
</section>
{/* SECTION 3: Verlassenschaft Ankauf Wien */}
<section aria-label="Verlassenschaft Ankauf Wien" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
    <h2 className="text-2xl md:text-3xl font-extrabold">
      Verlassenschaft Ankauf Wien – faire Bewertung & sofortige Auszahlung
    </h2>

    <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
      Wenn im Zuge einer Verlassenschaft in Wien erhaltenswerte Stücke vorhanden sind, prüfen wir
      diese direkt vor Ort – ruhig, transparent und ohne Druck. Bei Einigung ist eine sofortige
      Auszahlung möglich. Damit verbinden Sie die Räumung mit einem fairen Mehrwert und sparen
      zusätzliche Wege.
    </p>

    <h3 className="mt-8 text-xl font-bold">Was wir ankaufen</h3>
    <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Die Einschätzung richtet sich nach Zustand, Nachfrage und Herkunft. Typische Beispiele:
    </p>
    <ul className="mt-3 space-y-2 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>Antiquitäten & ausgewählte Möbel mit Substanz</li>
      <li>Bilder, Grafiken, Rahmen & kleinere Sammlungen</li>
      <li>Schmuck, Uhren, Silber & Porzellan</li>
      <li>Einzelstücke mit dokumentierter Provenienz</li>
    </ul>
    <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Wichtig: Sie entscheiden in Ruhe. Auf Wunsch behalten Sie einzelne Gegenstände selbstverständlich zurück.
    </p>

    <h3 className="mt-8 text-xl font-bold">So läuft der Ankauf ab</h3>
    <ol className="mt-3 space-y-3 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>1) Besichtigung & Sichtung:</span>{" "}
        Wir nehmen die Stücke vor Ort in Wien durch, erklären unsere Einschätzung und halten Besonderheiten fest.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>2) Faires Angebot:</span>{" "}
        Sie erhalten einen klaren Vorschlag ohne Kleingedrucktes – nachvollziehbar und schriftlich.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>3) Auszahlung & Kombination mit Räumung:</span>{" "}
        Bei Einigung ist eine sofortige Auszahlung möglich. Auf Wunsch verbinden wir den Ankauf mit der geordneten Räumung.
      </li>
    </ol>

    <div className="mt-6">
      
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
{/* SECTION 4: Entrümpelung nach Todesfall Wien */}
<section aria-label="Entrümpelung nach Todesfall Wien – diskret & respektvoll" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10">
    <h2 className="text-2xl md:text-3xl font-extrabold">
      Entrümpelung nach Todesfall in Wien – diskret & respektvoll
    </h2>

    <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
      In Zeiten der Trauer braucht es Ruhe, Überblick und eine Begleitung, auf die man sich
      verlassen kann. Wir organisieren die Entrümpelung nach Todesfall in Wien mit behutsamer
      Hand: klare Absprachen, verlässliche Termine und ein Ablauf, der für Angehörige gut
      zu bewältigen ist – ohne Druck und ohne Hektik.
    </p>

    <h3 className="mt-8 text-xl font-bold">Behutsame Organisation & feste Ansprechperson</h3>
    <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Zu Beginn klären wir in einem kurzen Gespräch, was Ihnen wichtig ist. Bei der Besichtigung
      nehmen wir uns Zeit, halten Prioritäten fest und dokumentieren Besonderheiten der Liegenschaft
      (Zugänge, Stiegenhaus, Fensterzeiten). Sie erhalten ein klares, schriftliches Angebot mit
      Fixtermin und einem übersichtlichen Ablauf – so bleibt alles planbar.
    </p>
    <ul className="mt-3 space-y-2 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>Kostenlose Erstbesichtigung in allen Wiener Bezirken</li>
      <li>Fixe Ansprechperson von der Planung bis zur Übergabe</li>
      <li>Ruhige, strukturierte Durchführung mit Abschlussbegehung</li>
      <li>Optional: Einschätzung erhaltenswerter Gegenstände</li>
    </ul>

    <h3 className="mt-8 text-xl font-bold">Wenn Angehörige nicht vor Ort sein können</h3>
    <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Viele Familien wohnen nicht in Wien oder haben wenig Zeitfenster. Auf Wunsch übernehmen wir
      eine geordnete Schlüsselübergabe, informieren Sie telefonisch über Zwischenstände und
      dokumentieren die Übergabe am Ende. So bleibt der Ablauf transparent – auch aus der Ferne.
    </p>
    <ol className="mt-3 space-y-3 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>1) Kontakt & Termin:</span>{" "}
        kurze Abstimmung per Telefon, E-Mail oder WhatsApp, rasche Besichtigung.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>2) Schriftliche Zusage:</span>{" "}
        klarer Ablauf mit Fixtermin und definierten Schritten.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>3) Durchführung & Übergabe:</span>{" "}
        ruhige Umsetzung, Abschlussbegehung bzw. Bestätigung nach Vereinbarung.
      </li>
    </ol>

    <div className="mt-6">
      
    </div>
  </div>
</section>

{/* SECTION 5: Vorteile mit raumfrei-wien.at */}
<section aria-label="Vorteile – Verlassenschaft Wien" className="relative"
style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
    <h2 className="text-2xl md:text-3xl font-extrabold">
      Ihre Vorteile mit raumfrei-wien.at
    </h2>

    <h3 className="mt-6 text-xl font-bold">Warum wir – kurz & auf den Punkt</h3>
    <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
      Bei einer Verlassenschaft zählt Verlässlichkeit mehr als große Worte. Wir arbeiten ruhig,
      halten Termine ein und bleiben in der Abstimmung klar. Von der ersten Besichtigung bis zur
      Übergabe haben Sie eine fixe Ansprechperson – ohne Umwege.
    </p>
    <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>Regionale Erfahrung in ganz Wien – kurze Wege, rasche Termine</li>
      <li>Kostenlose Erstbesichtigung & schriftliche, nachvollziehbare Zusage</li>
      <li>Optionaler Ankauf erhaltenswerter Stücke direkt im Zuge der Besichtigung</li>
      <li>Ruhige, strukturierte Durchführung mit Abschlussbegehung</li>
    </ul>

    <h3 className="mt-8 text-xl font-bold">Transparenz, die für Ruhe sorgt</h3>
    <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Wir erklären vorab, wie der Tag abläuft, welche Schritte geplant sind und wann die Übergabe
      erfolgt. Falls Sie nicht vor Ort sein können, organisieren wir eine geordnete
      Schlüsselübernahme und informieren über Zwischenstände. So behalten Sie jederzeit den Überblick.
    </p>
    <ol className="mt-3 space-y-3 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>1) Klare Absprachen:</span>{" "}
        kurze Wege in der Entscheidung, fixe Zeitfenster, saubere Dokumentation.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>2) Eine Ansprechperson:</span>{" "}
        vom Erstkontakt bis zur Übergabe – erreichbar und zuverlässig.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>3) Faire Optionen:</span>{" "}
        Einschätzung und auf Wunsch Ankauf, damit alles in einer Hand bleibt.
      </li>
    </ol>

    <div className="mt-6">
      
    </div>
  </div>
</section>
{/* SECTION 6: Kosten & Ablauf einer Verlassenschaftsräumung */}
<section aria-label="Kosten & Ablauf – Verlassenschaftsräumung Wien" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
    <h2 className="text-2xl md:text-3xl font-extrabold">
      Kosten & Ablauf einer Verlassenschaftsräumung in Wien
    </h2>

    <h3 className="mt-6 text-xl font-bold">Wovon hängen die Kosten ab?</h3>
    <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
      Pauschalen helfen selten weiter. Wir kalkulieren nach tatsächlichem Aufwand: Größe und Zugänglichkeit
      des Objekts, Etagen, Wege, Zeitfenster und ob erhaltenswerte Stücke vorhanden sind. Das Ziel:
      eine realistische Einschätzung ohne Überraschungen – nachvollziehbar und schriftlich festgehalten.
    </p>
    <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>Objektgröße, Anzahl der Räume und Etagen</li>
      <li>Zugänge, Wege, Abstellmöglichkeiten vor Ort</li>
      <li>Gewünschter Ablauf (Prioritäten, Teilabschnitte, Schlüsselübergabe)</li>
      <li>Optionale Bewertung erhaltenswerter Gegenstände</li>
    </ul>

    <h3 className="mt-8 text-xl font-bold">So kommen Sie zu einem klaren Angebot</h3>
    <ol className="mt-3 space-y-3 text-sm md:text-base" style={{ color: "#6B7280" }}>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>1) Kostenlose Besichtigung:</span>{" "}
        Wir sehen uns die Adresse in Wien an, klären Prioritäten und halten Besonderheiten fest.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>2) Schriftliche Zusage:</span>{" "}
        Sie erhalten ein transparentes Angebot mit Fixtermin und einem übersichtlichen Ablauf.
      </li>
      <li>
        <span className="font-semibold" style={{ color: "#000" }}>3) Durchführung & Übergabe:</span>{" "}
        Ruhige, strukturierte Umsetzung mit Abschlussbegehung – besenrein und planbar.
      </li>
    </ol>

    <div className="mt-6">
      <ContactStrip subject="Anfrage%20Kosten%20Verlassenschaftsraeumung%20Wien" />
    </div>
  </div>
</section>
{/* SECTION 7: FAQ – Verlassenschaft Wien */}
<section aria-label="FAQ – Verlassenschaft Wien" className="relative"
style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
    <h2 className="text-2xl md:text-3xl font-extrabold">
      Häufige Fragen zur Verlassenschaft in Wien
    </h2>

    <h3 className="mt-6 text-xl font-bold">Wie läuft die erste Besichtigung ab?</h3>
    <p className="mt-2 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
      Wir kommen zu einem kurzen Termin direkt zur Adresse in Wien. Vor Ort verschaffen wir uns ruhig
      einen Überblick, halten Prioritäten fest und sprechen eine realistische Vorgehensweise durch.
      Für Sie ist das unverbindlich und kostenlos – Ziel ist eine klare, gut planbare Einschätzung.
    </p>

    <h3 className="mt-8 text-xl font-bold">Können erhaltenswerte Stücke bewertet werden?</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Ja. Wenn gewünscht, prüfen wir ausgewählte Gegenstände gleich bei der Besichtigung – etwa Möbel
      mit Substanz, Bilder, Schmuck oder Silber. Sie bekommen eine verständliche Einschätzung; ob ein
      Ankauf in Frage kommt, entscheiden Sie in Ruhe.
    </p>

    <h3 className="mt-8 text-xl font-bold">Muss ich während der Durchführung anwesend sein?</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Nicht unbedingt. Viele Angehörige können am Tag der Durchführung nicht vor Ort sein. In solchen
      Fällen organisieren wir eine geordnete Schlüsselübergabe und informieren auf Wunsch über
      Zwischenstände. Am Ende gibt es eine gemeinsame Begehung oder eine Bestätigung nach Vereinbarung.
    </p>

    <h3 className="mt-8 text-xl font-bold">Wie schnell ist ein Termin in Wien möglich?</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      In der Regel kurzfristig. Nach dem ersten Gespräch finden wir rasch ein passendes Zeitfenster für
      die Besichtigung; der Durchführungstermin wird verbindlich fixiert und klar dokumentiert.
    </p>

    <h3 className="mt-8 text-xl font-bold">Gibt es ein fixes Preisblatt?</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Pauschalen sind selten fair, weil jede Verlassenschaft anders ist. Wir kalkulieren nach realem
      Aufwand (Größe, Zugänge, Zeitrahmen, Besonderheiten) und legen Ihnen ein nachvollziehbares,
      schriftliches Angebot vor – ohne Überraschungen.
    </p>
  </div>
</section>
{/* SECTION 8: Experten-Tipps – Verlassenschaft Wien */}
<section aria-label="Experten-Tipps – Verlassenschaft Wien" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-10">
    <h2 className="text-2xl md:text-3xl font-extrabold">
      Experten-Tipps zur Verlassenschaft in Wien
    </h2>

    <h3 className="mt-6 text-xl font-bold">1) Früh Überblick schaffen</h3>
    <p className="mt-2 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
      Notieren Sie kurz, welche Räume betroffen sind und welche Dinge auf jeden Fall bleiben sollen.
      Eine kleine Liste mit „zuerst erledigen“ und „kann warten“ hilft, den Termin in Wien kompakt
      und stressfrei zu planen.
    </p>

    <h3 className="mt-8 text-xl font-bold">2) Wichtige Unterlagen & Erinnerungen sichern</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Legen Sie Ausweise, Verträge, Fotos, Schmuck oder persönliche Briefe vorab beiseite. So sind
      die wirklich wichtigen Dinge geschützt und schnell griffbereit.
    </p>

    <h3 className="mt-8 text-xl font-bold">3) Fotos helfen bei der Vorbereitung</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Ein paar Handyfotos der Räume (inklusive Zugängen und Stiegenhaus) geben bereits vor dem
      Besichtigungstermin ein gutes Bild. Dadurch lässt sich Teamgröße und Zeitfenster realistischer einschätzen.
    </p>

    <h3 className="mt-8 text-xl font-bold">4) Vertrauensperson einbeziehen</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Wenn Sie nicht in Wien sind oder nur wenig Zeit haben, benennen Sie eine Ansprechperson.
      Eine geordnete Schlüsselübernahme und kurze Zwischeninfos sorgen für einen ruhigen Ablauf.
    </p>

    <h3 className="mt-8 text-xl font-bold">5) Einschätzung vor Verkauf nutzen</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Bevor Stücke vorschnell abgegeben werden, lohnt sich eine fachkundige Einschätzung – vor allem
      bei Bildern, Uhren, Silber, ausgewählten Möbeln oder Sammlungen. So bleiben Optionen gewahrt und
      Sie entscheiden in Ruhe.
    </p>

    <h3 className="mt-8 text-xl font-bold">6) Realistische Zeitfenster planen</h3>
    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280" }}>
      Klären Sie Hausregeln und Zufahrten: Fensterzeiten fürs Stiegenhaus, Parkmöglichkeiten, Lift.
      Mit klaren Rahmenbedingungen bleibt der Durchführungstag planbar – ohne unnötige Unterbrechungen.
    </p>
  </div>
</section>


    </main>
  );
}
