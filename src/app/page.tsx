// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

// ===== SEO (Wien) =====
export const metadata: Metadata = {
  title: "Entrümpelung & Räumung in Wien vom Profi – schnell & diskret",
  description:
    "Ihr Profi für Entrümpelung & Räumung in Wien: schnelle Termine, klare Abläufe, diskrete Durchführung. Kostenlose Besichtigung & fixe Zusagen.",
  alternates: { canonical: "https://raumfrei-wien.at/" },
  openGraph: {
    title: "Entrümpelung & Räumung in Wien vom Profi",
    description:
      "Professionelle Entrümpelung & Räumung in Wien: schnelle Terminvergabe, saubere Übergabe, verlässliche Kommunikation.",
    url: "https://raumfrei-wien.at/",
    siteName: "raumfrei-wien.at",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ===== Palette & Contacts =====
const BRAND = {
  accent: "rgb(217, 117, 0)",
  black: "#000",
  white: "#fff",
  gray: "#6B7280",
  email: "office@raumfrei-wien.at",
  phone: "+436765055437",
};

// ===== ФУНКЦИЯ: быстрый контактный блок =====
function ContactStrip({
  email = BRAND.email,
  phone = BRAND.phone,
  accent = BRAND.accent,
  gray = BRAND.gray,
  black = BRAND.black,
  white = BRAND.white,
}: {
  email?: string;
  phone?: string;
  accent?: string;
  gray?: string;
  black?: string;
  white?: string;
}) {
  const tel = `tel:${phone.replace(/\s/g, "")}`;
  const wa = `https://wa.me/${phone.replace(/[^\d]/g, "")}`;
  const mail = `mailto:${email}?subject=Anfrage%20Raumfrei%20Wien`;
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
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border transition"
        style={{ borderColor: `${gray}55`, color: black }}
        target="_blank"
        rel="noopener noreferrer"
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

// ===== PAGE =====
export default function Home() {
  return (
    <main
      id="main"
      className="min-h-screen"
      style={{ background: BRAND.white, color: BRAND.black }}
    >


      {/* SECTION 1: HERO – Entrümpelung & Räumung in Wien vom Profi (Premium) */}
<section aria-label="Entrümpelung & Räumung in Wien vom Profi – Start" className="relative overflow-hidden">
  {/* Premium background */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
  />
  {/* Subtle glow ring */}
  <div
    aria-hidden
    className="pointer-events-none absolute -top-24 right-[-20%] h-[44rem] w-[44rem] rounded-full blur-3xl opacity-50"
    style={{ background: "radial-gradient(circle, rgba(217,117,0,.18) 0%, transparent 60%)" }}
  />

  <div className="relative mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
    <div className="grid items-center gap-10 md:grid-cols-2">
      {/* LEFT: Text */}
      <div>
        {/* Eyebrow / brand line */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-widest uppercase"
             style={{ border: "1px solid rgba(0,0,0,.07)", background: "rgba(255,255,255,.7)", backdropFilter: "blur(6px)" }}>
          <span style={{ color: "#6B7280" }}>raumfrei-wien.at</span>
          <span aria-hidden className="h-[6px] w-[6px] rounded-full" style={{ background: "rgb(217, 117, 0)" }} />
          <span style={{ color: "#6B7280" }}>Wien</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Entrümpelung Wien vom Profi
        </h1>

        <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
          Schnelle Termine, klare Abläufe und eine saubere Übergabe: Ihr regionales Team für
          <strong> Entrümpelung&nbsp;&amp;&nbsp;Räumung in Wien vom Profi</strong>. Wir arbeiten strukturiert,
          diskret und mit fixen Zusagen – von der kostenlosen Besichtigung bis zur Schlüsselrückgabe.
        </p>

        {/* Premium bullet list with accent underline on hover */}
        <ul className="mt-6 grid gap-3 text-sm md:grid-cols-2">
          {[
            "Kostenlose & unverbindliche Besichtigung",
            "Fixtermin & transparente Abstimmung",
            "Wien-weit täglich im Einsatz",
            "Optional: Bewertung erhaltenswerter Stücke",
          ].map((t) => (
            <li key={t} className="relative pl-4">
              <span aria-hidden className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full" style={{ background: "rgb(217, 117, 0)" }} />
              <span className="inline-block border-b border-transparent hover:border-[rgba(217,117,0,.45)] transition">{t}</span>
            </li>
          ))}
        </ul>

        {/* Single CTA cluster (без дублей контактов) */}
        <div className="mt-6">
          <ContactStrip />
        </div>
      </div>

      {/* RIGHT: Visual with glass overlay card */}
      <div className="relative">
        {/* frame */}
        <div
          className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(17,17,17,.06)",
            boxShadow: "0 24px 80px rgba(0,0,0,.10), 0 8px 24px rgba(0,0,0,.04)",
          }}
        >
          <Image
            src="/images/main-pic-2.webp"
            alt="Entrümpelung & Räumung in Wien – Team im Einsatz"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 540px, 100vw"
            priority
          />

          {/* Glass label stripe */}
          <div
            className="absolute left-4 bottom-4 rounded-xl px-4 py-2 text-xs md:text-sm"
            style={{
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(0,0,0,.08)",
              backdropFilter: "blur(8px)",
              color: "#111111",
              boxShadow: "0 8px 20px rgba(0,0,0,.10)",
            }}
          >
            Regional • Diskret • Verlässlich
          </div>
        </div>

        {/* floating premium annotation card */}
        <div
          className="absolute -top-4 -right-3 md:-right-6 rounded-2xl px-4 py-3 text-xs md:text-sm"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.86))",
            border: "1px solid rgba(0,0,0,.06)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 16px 40px rgba(0,0,0,.10)",
          }}
        >
          <div className="font-semibold">Wien • Heute verfügbar</div>
          <div style={{ color: "#6B7280" }}>Kurzfristige Besichtigung möglich</div>
        </div>
      </div>
    </div>

    {/* subtle bottom divider for premium feel */}
    <div className="mt-6 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,.06), transparent)" }} />
  </div>
</section>

      {/* SECTION 2: Entrümpelung Wien – Ankauf & Verwertung */}
<section
  aria-label="Entrümpelung Wien – Ankauf & Verwertung"
  className="relative"
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">
        Entrümpelung Wien – Ankauf &amp; Verwertung
      </h2>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Bei einer <strong>Entrümpelung in Wien</strong> tauchen oft Stücke auf, die zu schade
        für den Sperrmüll sind. Wir sichten vor Ort, geben eine klare Einschätzung und bieten
        auf Wunsch <strong>Ankauf &amp; Verwertung</strong> an – transparent, zügig und aus
        einer Hand. So kombinieren Sie Räumung mit einem fairen Mehrwert.
      </p>
    </header>

    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      {/* Linke Spalte: Was & Wie */}
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{
          background: BRAND.white,
          border: `1px solid ${BRAND.gray}22`,
          boxShadow: "0 18px 40px rgba(0,0,0,.05)",
        }}
      >
        <h3 className="text-xl font-bold">Was prüfen wir – und wie läuft’s ab?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Wir beurteilen Zustand, Nachfrage und Herkunft – z.&nbsp;B. ausgewählte Möbel,
          Bilder, Uhren, Silber, Porzellan oder Sammlungen. Die Sichtung erfolgt direkt
          im Zuge der <strong>Entrümpelung Wien</strong>; Sie erhalten eine klare, unverbindliche Einschätzung.
        </p>
        <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: BRAND.gray }}>
          <li>Transparente Bewertung ohne Zeitdruck</li>
          <li>Optionaler Ankauf mit schneller, sauberer Abwicklung</li>
          <li>Kombinierbar mit Fixtermin für Räumung & Übergabe</li>
        </ul>

        <h3 className="mt-8 text-xl font-bold">Ihr Vorteil</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Ein Termin genügt häufig, um sowohl die <strong>Räumung</strong> als auch
          eine mögliche Verwertung zu klären. Sie sparen Wege, erhalten Planungssicherheit
          und behalten eine Ansprechperson – vom Erstkontakt bis zur Übergabe.
        </p>
      </article>

      {/* Rechte Spalte: Mini-Ablauf + Kontakt */}
      <aside
        className="rounded-3xl p-6 md:p-8"
        style={{
          background: BRAND.white,
          border: `1px solid ${BRAND.gray}22`,
          boxShadow: "0 18px 40px rgba(0,0,0,.05)",
        }}
      >
        <h3 className="text-xl font-bold">Kurzablauf Ankauf &amp; Verwertung</h3>
        <ol className="mt-3 space-y-3 text-sm md:text-base" style={{ color: BRAND.gray }}>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>1) Kontakt:</span>{" "}
            Kurze Abstimmung per Telefon, WhatsApp oder E-Mail &amp; Termin in Wien.
          </li>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>2) Sichtung:</span>{" "}
            Prüfung vor Ort mit transparenter Einschätzung – ohne Verpflichtung.
          </li>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>3) Entscheidung:</span>{" "}
            Optionaler Ankauf und direkte Abwicklung, kombiniert mit der Räumung.
          </li>
        </ol>

        {/* Контакты (кнопки) — в едином стиле */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a
            href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
            style={{ background: BRAND.accent, color: BRAND.white }}
          >
            Anrufen
          </a>
          <a
            href={`https://wa.me/${BRAND.phone.replace(/[^\d]/g, "")}`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold border transition"
            style={{ borderColor: `${BRAND.gray}55`, color: BRAND.black }}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${BRAND.email}?subject=Anfrage%20Ankauf%20%26%20Verwertung%20Wien`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold border transition"
            style={{ borderColor: `${BRAND.gray}55`, color: BRAND.black }}
          >
            E-Mail
          </a>
        </div>

        <p className="mt-3 text-xs" style={{ color: BRAND.gray }}>
          E-Mail:{" "}
          <a className="underline" href={`mailto:${BRAND.email}`}>
            {BRAND.email}
          </a>{" "}
          • Telefon/WhatsApp:{" "}
          <a className="underline" href={`tel:${BRAND.phone.replace(/\s/g, "")}`}>
            {BRAND.phone}
          </a>
        </p>
      </aside>
    </div>
  </div>
</section>


{/* SECTION 3: Leistungen Entrümpelung Wien (по одной картинке на услугу) */}
<section aria-label="Leistungen Entrümpelung Wien" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">
        Leistungen Entrümpelung Wien
      </h2>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Jede Wohn- und Arbeitssituation in Wien ist anders. Wir planen unsere Einsätze so,
        dass sie zu Ihrem Tagesablauf, zur Lage im Haus und zu den Gegebenheiten vor Ort passen.
        Mit klaren Absprachen, fixen Terminen und einer Ansprechperson, die Sie vom ersten Kontakt
        bis zur Übergabe begleitet.
      </p>
    </header>

    {(() => {
      const items = [
        {
          title: "Wohnungsräumung Wien",
          text:
            "Ob Garçonnière, Altbau oder Familienwohnung – wir stimmen Zugang, Stiegenhaus und Zeitfenster genau mit Ihnen ab. Jede Räumung erfolgt ruhig, zügig und transparent – vom Erstgespräch bis zur Schlüsselübergabe.",
          image: { src: "/images/Leistungen-1.webp", alt: "Wohnungsräumung Wien" },
        },
        {
          title: "Hausräumung Wien",
          text:
            "Mehrstöckige Häuser, schmale Zufahrten oder Hoflagen: Wir planen Fahrzeuge, Teamgröße und Ablauf so, dass die Arbeit reibungslos funktioniert. Nach Abschluss übergeben wir das Objekt sauber und pünktlich.",
          image: { src: "/images/Leistungen-2.webp", alt: "Hausräumung Wien" },
        },
        {
          title: "Keller & Dachboden Wien",
          text:
            "Verwinkelte Zugänge oder schwer erreichbare Dachräume sind für uns Routine. Wir arbeiten strukturiert, mit kurzen Wegen und klarer Kommunikation, bis alles wieder frei und ordentlich begehbar ist.",
          image: { src: "/images/Leistungen-3.webp", alt: "Kellerentrümpelung Wien" },
        },
        {
          title: "Büro & Gewerbe Wien",
          text:
            "Ob Kanzlei, Praxis oder Ladenlokal – wir führen Räumungen abgestimmt auf Ihre Öffnungszeiten durch. Unser Ziel: minimale Unterbrechung Ihres Betriebs und eine saubere, termingerechte Übergabe.",
          image: { src: "/images/Leistungen-4.webp", alt: "Büroentrümpelung Wien" },
        },
        
      ];

      return (
        <div className="grid gap-10 md:grid-cols-2">
          {items.map((item, idx) => (
            <article
              key={idx}
              className={`rounded-3xl p-6 md:p-8 `}
              style={{
                background: BRAND.white,
                border: `1px solid ${BRAND.gray}22`,
                boxShadow: "0 18px 40px rgba(0,0,0,.05)",
              }}
            >
              <div className="relative mb-5 w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 9" }}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 90vw"
                  priority={idx === 0}
                />
              </div>

              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
                {item.text}
              </p>
            </article>
          ))}
        </div>
      );
    })()}

    {/* Kontaktstreifen ohne Icons */}
    <div
      className="mt-12 rounded-3xl p-6 md:p-8 text-center"
      style={{
        background: BRAND.white,
        border: `1px solid ${BRAND.gray}22`,
        boxShadow: "0 10px 28px rgba(0,0,0,.06)",
      }}
    >
      <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
        Termin in Wien anfragen oder kurz abstimmen?
        Schreiben Sie an{" "}
        <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>{" "}
        oder rufen Sie direkt an:{" "}
        <a className="underline" href={`tel:${BRAND.phone.replace(/\s/g, "")}`}>{BRAND.phone}</a>.{" "}
        Auch per WhatsApp möglich:{" "}
        <a
          className="underline"
          href={`https://wa.me/${BRAND.phone.replace(/[^\d]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {BRAND.phone}
        </a>.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <a
          href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
          className="rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
          style={{ background: BRAND.accent, color: BRAND.white }}
        >
          Anrufen
        </a>
        <a
          href={`https://wa.me/${BRAND.phone.replace(/[^\d]/g, "")}`}
          className="rounded-xl px-5 py-3 text-sm font-semibold border transition"
          style={{ borderColor: `${BRAND.gray}55`, color: BRAND.black }}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          href={`mailto:${BRAND.email}?subject=Anfrage%20Entr%C3%BCmpelung%20Wien`}
          className="rounded-xl px-5 py-3 text-sm font-semibold border transition"
          style={{ borderColor: `${BRAND.gray}55`, color: BRAND.black }}
        >
          E-Mail
        </a>
      </div>
    </div>
  </div>
</section>



{/* SECTION 4: Entrümpelung Wien Kosten */}
<section aria-label="Entrümpelung Wien Kosten" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">
        Entrümpelung Wien Kosten – fair & nachvollziehbar
      </h2>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Jede Wohn- oder Gewerbefläche hat ihre Eigenheiten. Statt Pauschalen geben wir Ihnen
        nach einer kurzen Besichtigung in Wien eine klare Einschätzung mit Fixtermin und
        verständlicher Beschreibung der Schritte. So bleibt alles planbar – vom ersten Gespräch
        bis zur Übergabe.
      </p>
    </header>

    <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{
          background: BRAND.white,
          border: `1px solid ${BRAND.gray}22`,
          boxShadow: "0 18px 40px rgba(0,0,0,.05)",
        }}
      >
        <h3 className="text-xl font-bold">Wie kalkulieren wir in Wien?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Grundlage sind Größe und Zugänglichkeit der Fläche, die Anzahl der Räume sowie das
          gewünschte Zeitfenster. Daraus leiten wir Teamstärke und Dauer ab. Sie erhalten
          eine kompakte, verständliche Zusage – ohne Kleingedrucktes und mit realistischen Zeiten.
        </p>
        <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: BRAND.gray }}>
          <li>Objektgröße & Anzahl der zu bearbeitenden Bereiche</li>
          <li>Zugänge, Stiegen, Wege & Abstellmöglichkeiten vor Ort</li>
          <li>Abfolge der Schritte und gewünschte Prioritäten</li>
          <li>Terminfenster und Hausregeln der Liegenschaft</li>
        </ul>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{
          background: BRAND.white,
          border: `1px solid ${BRAND.gray}22`,
          boxShadow: "0 18px 40px rgba(0,0,0,.05)",
        }}
      >
        <h3 className="text-xl font-bold">Was beeinflusst den Aufwand?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Enge Stiegenhäuser, lange Wege im Hof, beschränkte Zufahrten oder fixe Ruhezeiten
          können den Ablauf verlängern. Wir planen das vorab ein und stimmen Fahrzeuge, Team
          und Reihenfolge so ab, dass der Tag für Sie gut planbar bleibt.
        </p>
        <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Wichtig ist eine kurze Vor-Ort-Sichtung: Sie dauert meist nicht lang, schafft aber
          Sicherheit bei Termin und Umfang – und erspart Überraschungen am Durchführungstag.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8 md:col-span-2"
        style={{
          background: BRAND.white,
          border: `1px solid ${BRAND.gray}22`,
          boxShadow: "0 18px 40px rgba(0,0,0,.05)",
        }}
      >
        <h3 className="text-xl font-bold">So bekommen Sie eine verlässliche Zusage</h3>
        <ol className="mt-3 space-y-3 text-sm md:text-base" style={{ color: BRAND.gray }}>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>1) Kontaktaufnahme:</span>{" "}
            Kurze Abstimmung per Telefon, WhatsApp oder E-Mail und Terminvereinbarung in Wien.
          </li>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>2) Besichtigung:</span>{" "}
            Wir sehen uns die Fläche an, klären Zugänge und priorisieren die Schritte.
          </li>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>3) Schriftliche Bestätigung:</span>{" "}
            Sie erhalten eine klare Zusage mit Fixtermin, Umfang und verständlicher Beschreibung des Ablaufs.
          </li>
        </ol>

        {/* Kontaktabschluss ohne Icons */}
        <div
          className="mt-6 rounded-2xl p-5 md:p-6 text-center"
          style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22` }}
        >
          <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
            Unverbindliche Einschätzung in Wien gewünscht? Schreiben Sie an{" "}
            <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a>{" "}
            oder rufen Sie direkt an:{" "}
            <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.{" "}
            Auch per WhatsApp möglich:{" "}
            <a
              className="underline"
              href="https://wa.me/436765055437"
              target="_blank"
              rel="noopener noreferrer"
            >
              +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
            </a>.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>
{/* SECTION 5: Preisübersicht – Entrümpelungen • Verlassenschaften • Messie */}
<section
  aria-label="Preisübersicht Entrümpelung Wien"
  className="relative"
  style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
>

  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">Preisübersicht</h2>
      <h3 className="mt-2 text-base md:text-lg font-semibold">Entrümpelungen • Verlassenschaften • Messie</h3>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Damit Sie früh ein Gefühl für den Rahmen bekommen: Nachstehend finden Sie{" "}
        Richtwerte für Wien. Die tatsächlichen Kosten ergeben sich aus Lage, Zugängen
        und Zeitfenster. Verbindlich wird es nach einer kurzen, kostenlosen Besichtigung
        mit klarer Zusage und Fixtermin.
      </p>
    </header>

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

    {/* Kleiner Hinweis unter der Tabelle */}
    <p className="mt-6 text-sm md:text-base text-center" style={{ color: BRAND.gray }}>
      Hinweis: Änderungen der Richtwerte sind möglich. Maßgeblich ist die schriftliche Zusage nach Besichtigung.
    </p>
  </div>
</section>
{/* SECTION 6: Entrümpelung Wien Kontakt */}
<section aria-label="Entrümpelung Wien Kontakt" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">
        Entrümpelung Wien – Kontakt
      </h2>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Persönlich, verlässlich und ohne Umwege: Wir melden uns rasch zurück und stimmen den
        ersten Termin in Wien kurz mit Ihnen ab. Auf Wunsch erhalten Sie noch am selben Tag
        eine Bestätigung mit Fixtermin und den nächsten Schritten.
      </p>
    </header>

    <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
      {/* Linke Spalte: Wege der Kontaktaufnahme */}
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{
          background: BRAND.white,
          border: `1px solid ${BRAND.gray}22`,
          boxShadow: "0 18px 40px rgba(0,0,0,.05)",
        }}
      >
        <h3 className="text-xl font-bold">So erreichen Sie uns</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Am schnellsten klappt’s telefonisch oder per Nachricht. Teilen Sie uns kurz Adresse,
          gewünschtes Zeitfenster und Besonderheiten im Haus mit. Wir schlagen Ihnen den
          nächstmöglichen Termin für eine kostenlose Besichtigung in Wien vor.
        </p>
        <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: BRAND.gray }}>
          <li><strong>Telefon:</strong> <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a></li>
          <li><strong>E-Mail:</strong> <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a></li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              className="underline"
              href="https://wa.me/436765055437"
              target="_blank"
              rel="noopener noreferrer"
            >
              +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
            </a>
          </li>
        </ul>

        <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Tipp: Ein bis zwei Handyfotos der Räume helfen uns, Teamgröße und Ablauf noch genauer
          einzuschätzen. Das spart Zeit bei der Besichtigung.
        </p>
      </article>

      {/* Rechte Spalte: Reaktionszeit & Ablauf nach Kontakt */}
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{
          background: BRAND.white,
          border: `1px solid ${BRAND.gray}22`,
          boxShadow: "0 18px 40px rgba(0,0,0,.05)",
        }}
      >
        <h3 className="text-xl font-bold">Was passiert nach Ihrer Nachricht?</h3>
        <ol className="mt-3 space-y-3 text-sm md:text-base" style={{ color: BRAND.gray }}>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>1) Rückruf oder Antwort:</span>{" "}
            Wir melden uns zeitnah mit Terminvorschlägen für die Kurzbesichtigung.
          </li>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>2) Vor-Ort-Sichtung:</span>{" "}
            Wir klären Zugänge, Wege und Reihenfolge der Schritte – kompakt und ohne Formalitäten.
          </li>
          <li>
            <span className="font-semibold" style={{ color: BRAND.black }}>3) Schriftliche Zusage:</span>{" "}
            Sie erhalten eine klare Bestätigung mit Fixtermin und einer verständlichen Beschreibung des Ablaufs.
          </li>
        </ol>

        {/* Kontakt-CTA (ohne Icons) */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a
            href="tel:+436765055437"
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
            style={{ background: BRAND.accent, color: BRAND.white }}
          >
            Anrufen
          </a>
          <a
            href="https://wa.me/436765055437"
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold border transition"
            style={{ borderColor: `${BRAND.gray}55`, color: BRAND.black }}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="mailto:office@raumfrei-wien.at?subject=Anfrage%20Entr%C3%BCmpelung%20Wien"
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold border transition"
            style={{ borderColor: `${BRAND.gray}55`, color: BRAND.black }}
          >
            E-Mail
          </a>
        </div>
      </article>
    </div>

    {/* Abschlusszeile */}
    <div
      className="mt-12 rounded-3xl p-6 md:p-8 text-center"
      style={{
        background: BRAND.white,
        border: `1px solid ${BRAND.gray}22`,
        boxShadow: "0 10px 28px rgba(0,0,0,.06)",
      }}
    >
      <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
        Kurzberatung oder direkter Terminvorschlag? Schreiben Sie an{" "}
        <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a>{" "}
        oder rufen Sie an:{" "}
        <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.{" "}
        Auf Wunsch bestätigen wir Ihren Termin noch heute schriftlich.
      </p>
    </div>
  </div>
</section>
{/* SECTION 7: Ablauf Entrümpelung Wien */}
<section aria-label="Ablauf Entrümpelung Wien" className="relative"
style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">Ablauf Entrümpelung Wien</h2>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Ein klarer Ablauf nimmt den Druck raus. Wir stimmen alles kurz ab, kommen zur Besichtigung
        und halten die vereinbarten Schritte fix ein – damit der Tag für Sie planbar bleibt und die
        Übergabe auf Anhieb passt.
      </p>
    </header>

    <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
      {/* 1) Vorbereitung & Erstkontakt */}
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Vorbereitung & Erstkontakt</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Rufen Sie kurz an oder schreiben Sie uns eine Nachricht. Teilen Sie Adresse,
          ein gewünschtes Zeitfenster und – falls vorhanden – ein, zwei Handyfotos der Räume.
          Wir melden uns zeitnah mit Terminvorschlägen für eine kostenlose Kurzbesichtigung in Wien.
        </p>
        <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Praktisch: Wenn Hausverwaltung oder Nachbar:innen über Zeitfenster informieren müssen,
          sagen Sie uns kurz Bescheid – wir richten den Plan danach aus.
        </p>
      </article>

      {/* 2) Vor-Ort-Besichtigung */}
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Vor-Ort-Besichtigung</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Wir sehen uns Zugänge, Stiegen, Wege im Hof und die Reihenfolge der Bereiche an.
          Daraus ergeben sich Teamstärke und Dauer. Sie bekommen eine klare, schriftliche
          Bestätigung mit Fixtermin und einem verständlichen Ablaufplan.
        </p>
        <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: BRAND.gray }}>
          <li>Übersicht über Räume und Prioritäten</li>
          <li>Abstimmung von Startzeit und Reihenfolge</li>
          <li>Kontaktweg am Durchführungstag (Telefon/WhatsApp)</li>
        </ul>
      </article>

      {/* 3) Durchführung & Übergabe */}
      <article
        className="rounded-3xl p-6 md:p-8 md:col-span-2"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Durchführung & Übergabe</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Am Termin arbeiten wir ruhig und zügig nach Plan. Zwischenstände stimmen wir kurz ab,
          auf Wunsch auch telefonisch. Zum Schluss folgt eine gemeinsame Begehung – Sie prüfen,
          ob alles wie besprochen umgesetzt wurde, und erhalten auf Wunsch eine kurze Bestätigung.
        </p>
        <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Wenn während der Arbeiten Stücke auffallen, die Ihnen wichtig sind oder die man gut
          weitergeben kann, sprechen wir das offen an. So bleiben Entscheidungen transparent und
          der Tag verläuft ohne Umwege.
        </p>

        {/* Kontaktabschluss (ohne Icons) */}
        <div
          className="mt-6 rounded-2xl p-5 md:p-6 text-center"
          style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22` }}
        >
          <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
            Fragen zum Ablauf oder Termin sichern? Schreiben Sie an{" "}
            <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a>{" "}
            oder rufen Sie an:{" "}
            <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.{" "}
            WhatsApp:{" "}
            <a
              className="underline"
              href="https://wa.me/436765055437"
              target="_blank"
              rel="noopener noreferrer"
            >
              +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
            </a>.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>
{/* SECTION 8: Wie funktioniert Entrümpelung Wien */}
<section aria-label="Wie funktioniert Entrümpelung Wien" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">Wie funktioniert Entrümpelung in Wien?</h2>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Kurz, klar und alltagstauglich: So läuft eine Entrümpelung in Wien ab, wenn man’s pragmatisch
        angeht. Wenige gute Absprachen, ein fixer Fahrplan und eine Ansprechperson – mehr braucht es nicht,
        damit der Tag ruhig und planbar bleibt.
      </p>
    </header>

    <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
      {/* Vorbereitung & Rahmen */}
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Vorbereitung – wenig Aufwand, große Wirkung</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Ein kurzer Anruf oder eine Nachricht genügt. Teilen Sie Adresse, gewünschte Zeitfenster
          und – wenn vorhanden – ein, zwei Handyfotos der Räume. Daraus entsteht ein realistischer
          Rahmen: Startzeit, Reihenfolge der Bereiche und die passende Teamstärke.
        </p>
        <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Praktischer Tipp: Wenn es Hausregeln oder Ruhezeiten gibt, geben Sie uns das gleich durch.
          So können wir Wege, Parkmöglichkeiten und Startzeit exakt abstimmen.
        </p>
      </article>

      {/* Durchführung in Wien */}
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Durchführung – strukturiert & verlässlich</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Am Termin arbeiten wir ruhig und zügig nach dem vereinbarten Plan. Zwischenstände klären wir
          kurz – telefonisch, wenn Sie nicht vor Ort sind. Zum Schluss folgt eine gemeinsame Begehung,
          damit die Übergabe auf Anhieb passt.
        </p>
        <ul className="mt-4 space-y-2 text-sm md:text-base" style={{ color: BRAND.gray }}>
          <li>Fixer Start, klare Reihenfolge der Bereiche</li>
          <li>Kurze Abstimmungen statt endloser Mails</li>
          <li>Eine Ansprechperson für alle Fragen</li>
        </ul>
      </article>

      {/* Feinheiten & Entscheidungen */}
      <article
        className="rounded-3xl p-6 md:p-8 md:col-span-2"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Feinheiten – was unterwegs entschieden wird</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Wenn während der Arbeiten Gegenstände auffallen, die Ihnen wichtig sind oder die sich
          weitergeben lassen, sprechen wir das offen an. Entscheidungen bleiben transparent, der
          Ablauf ohne Umwege. Auf Wunsch dokumentieren wir Zwischenschritte kurz am Telefon.
        </p>

        {/* Abschluss-CTA ohne иконок */}
        <div
          className="mt-6 rounded-2xl p-5 md:p-6 text-center"
          style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22` }}
        >
          <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
            Möchten Sie klären, wie das bei Ihrer Adresse in Wien am besten funktioniert?
            Schreiben Sie an{" "}
            <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a>{" "}
            oder rufen Sie an:{" "}
            <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.{" "}
            Auch per WhatsApp erreichbar:{" "}
            <a
              className="underline"
              href="https://wa.me/436765055437"
              target="_blank"
              rel="noopener noreferrer"
            >
              +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
            </a>.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>
{/* SECTION 9: FAQ Entrümpelung Wien */}
<section aria-label="FAQ Entrümpelung Wien" className="relative">
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">FAQ – Entrümpelung Wien</h2>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Kurze, klare Antworten aus der Praxis in Wien. Wenn etwas Spezielles ansteht,
        melden Sie sich einfach – wir klären das in wenigen Minuten telefonisch.
      </p>
    </header>

    <div className="grid gap-8">
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Wie schnell bekomme ich einen Termin in Wien?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Meist kurzfristig. Nach Ihrer Nachricht schlagen wir zeitnah eine kostenlose Kurzbesichtigung vor
          und bestätigen im Anschluss einen Fixtermin mit klaren Schritten – ohne Wartezeiten.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Muss ich am Durchführungstag anwesend sein?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Nicht zwingend. Viele Kund:innen übergeben vorab einen Schlüssel und bekommen kurze Updates.
          Zum Abschluss gibt’s eine gemeinsame Begehung oder – wenn gewünscht – eine kurze Bestätigung.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Wie entsteht die Kosteneinschätzung?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Grundlage sind Größe und Zugänglichkeit der Fläche, die Anzahl der Bereiche sowie Ihr Zeitfenster.
          Nach einer kurzen Vor-Ort-Sichtung erhalten Sie eine klare, schriftliche Zusage mit Fixtermin.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Könnt ihr erhaltenswerte Stücke übernehmen?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Ja. Wir sprechen das offen an, geben eine ehrliche Einschätzung und zeigen Möglichkeiten der Weitergabe.
          Auf Wunsch kombinieren wir das mit dem vereinbarten Ablauf – alles aus einer Hand.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Was, wenn es Hausregeln oder fixe Zeitfenster gibt?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Sagen Sie uns das bitte gleich bei der Terminvereinbarung. Wir richten Startzeit, Reihenfolge
          und Wege danach aus – damit alles ruhig und planbar bleibt.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">Wie läuft die Kommunikation am Tag selbst?</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Eine Ansprechperson hält Sie auf Wunsch kurz am Laufenden – telefonisch oder via Nachricht.
          Zwischenstände stimmen wir kompakt ab, die Übergabe erfolgt nach gemeinsamer Begehung.
        </p>
      </article>
    </div>

    {/* Abschluss-CTA ohne Icons */}
    <div
      className="mt-12 rounded-3xl p-6 md:p-8 text-center"
      style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 10px 28px rgba(0,0,0,.06)" }}
    >
      <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
        Weitere Fragen? Schreiben Sie uns an{" "}
        <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a>{" "}
        oder rufen Sie direkt an:{" "}
        <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.{" "}
        Auf Wunsch erhalten Sie noch heute Terminvorschläge für eine Kurzbesichtigung in Wien.
      </p>
    </div>
  </div>
</section>
{/* SECTION 10: Experten-Tipps Entrümpelung Wien */}
<section
  aria-label="Preisübersicht Entrümpelung Wien"
  className="relative"
  style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-16 md:py-24">
    <header className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">Experten-Tipps zur Entrümpelung in Wien</h2>
      <p
        className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        style={{ color: BRAND.gray }}
      >
        Aus dem Wiener Alltag: einfache, praxistaugliche Hinweise, die den Ablauf spürbar erleichtern –
        von der Vorbereitung bis zur Übergabe.
      </p>
    </header>

    <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">1) Prioritätenliste vorab festlegen</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Notieren Sie kurz, welche Räume oder Zonen zuerst dran sind (z. B. Schlafzimmer, Abstellraum, Kellerabteil).
          Eine kleine Liste spart Rückfragen und hält den Tag im Takt – besonders in Häusern mit fixen Zeitfenstern.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">2) Hauszugang & Stellplätze klären</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Ein kurzer Hinweis zu Zufahrt, Innenhof oder Ladezone hilft enorm. Wenn ein Platz reserviert werden kann,
          läuft alles kompakter – weniger Wege, kürzere Zeiten, entspannter Ablauf.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">3) Wichtige Stücke sichtbar markieren</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Dinge, die auf jeden Fall bleiben sollen, am besten mit einem Zettel kennzeichnen oder separat ablegen.
          So bleibt alles eindeutig und der Ablauf ohne Verzögerungen.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">4) Zwei, drei Handyfotos reichen</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Ein schneller Eindruck vorab hilft bei Teamgröße und Reihenfolge. Fotos von Zugängen, Stiegen oder Hofwegen
          sind besonders wertvoll, wenn es enger zugeht.
        </p>
      </article>

      <article
        className="rounded-3xl p-6 md:p-8 md:col-span-2"
        style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22`, boxShadow: "0 18px 40px rgba(0,0,0,.05)" }}
      >
        <h3 className="text-xl font-bold">5) Entscheidungen unterwegs kurz halten</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
          Wenn während der Arbeiten Fragen auftauchen, klären wir das in einem kurzen Telefonat.
          So bleibt der Ablauf flüssig und Sie behalten jederzeit den Überblick.
        </p>

        {/* Abschluss-CTA ohne Icons */}
        <div
          className="mt-6 rounded-2xl p-5 md:p-6 text-center"
          style={{ background: BRAND.white, border: `1px solid ${BRAND.gray}22` }}
        >
          <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.gray }}>
            Sie möchten Ihre Situation in Wien kurz durchgehen? Schreiben Sie an{" "}
            <a className="underline" href="mailto:office@raumfrei-wien.at">office@raumfrei-wien.at</a>{" "}
            oder rufen Sie direkt an:{" "}
            <a className="underline" href="tel:+436765055437">+43&nbsp;676&nbsp;505&nbsp;54&nbsp;37</a>.{" "}
            Auch per WhatsApp möglich:{" "}
            <a
              className="underline"
              href="https://wa.me/436765055437"
              target="_blank"
              rel="noopener noreferrer"
            >
              +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
            </a>.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>


      




    </main>
  );
}
