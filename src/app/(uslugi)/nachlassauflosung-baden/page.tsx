// ===== PAGE: Nachlassauflösung Baden =====
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nachlassauflösung Baden – diskret & planbar mit Fixtermin",
  description:
    "Nachlassauflösung in Baden mit kostenloser Besichtigung, klaren Abläufen und fixer Terminvereinbarung. Zuverlässige Abwicklung für Erben & Angehörige in Baden & Umgebung.",
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO: Nachlassauflösung Baden ===== */}
      <section
        aria-label="Nachlassauflösung Baden – diskret & zuverlässig"
        className="relative overflow-hidden bg-[#FAFAFA]"
      >
        {/* Hintergrund */}
        <div className="absolute inset-0">
          <Image
            src="/images/WhatsApp Image 2025-11-15 at 17.02.02 (4).jpeg"
            alt="Nachlassauflösung Baden – diskret und planbar"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B3A42]/80 via-[#2B3A42]/55 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-10 md:px-10 md:py-36 text-white">
          <div className="max-w-[720px]">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#CBB47B]">
              Nachlassauflösung <br /> Baden
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#F5F5F5] leading-relaxed">
              Eine <strong>Nachlassauflösung in Baden</strong> bedeutet oft mehr als nur
              eine organisatorische Aufgabe. In einer sensiblen Phase sorgen wir für
              klare Abläufe, feste Termine und eine ruhige, respektvolle Umsetzung –
              verlässlich von der ersten Besichtigung bis zur Übergabe.
            </p>

            <p className="mt-5 text-base md:text-lg text-[#F5F5F5] leading-relaxed">
              Ob Wohnung oder Haus: Sie erhalten eine strukturierte Lösung mit
              persönlichem Ansprechpartner, transparenter Planung und einer
              besenreinen Übergabe zum vereinbarten Zeitpunkt – in Baden und Umgebung.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://wa.me/436767202623"
                className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-medium text-white shadow-md transition hover:shadow-lg hover:brightness-110"
              >
                WhatsApp Kontakt
              </Link>

              <Link
                href="tel:+436767202623"
                className="rounded-xl border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#2B3A42]"
              >
                Direkt anrufen
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#D7D7D7]">
              Kostenlose Besichtigung • fixer Ablauf • besenreine Übergabe
            </p>
          </div>
        </div>

        {/* Soft bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
      </section>
      {/* ===== SEKTION 2: Vorteile einer professionellen Nachlassauflösung ===== */}
<section
  id="vorteile-nachlassaufloesung-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Vorteile Nachlassauflösung Baden"
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-10">
    <header className="mb-8 md:mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Warum eine professionelle Nachlassauflösung in Baden sinnvoll ist
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Eine Nachlassauflösung ist organisatorisch und emotional anspruchsvoll.
        Mit einem erfahrenen Partner an Ihrer Seite sparen Sie Zeit, vermeiden
        unnötige Belastungen und erhalten einen klar geregelten Ablauf – von
        Beginn an transparent und planbar.
      </p>
    </header>

    {/* Vorteile Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Klare Abläufe & feste Termine",
          text:
            "Jeder Schritt wird vorab abgestimmt. Sie wissen genau, wann was passiert und wann die Übergabe erfolgt.",
        },
        {
          title: "Ein Ansprechpartner",
          text:
            "Keine wechselnden Kontakte: Sie haben durchgehend eine fixe Ansprechperson für alle Fragen.",
        },
        {
          title: "Diskrete Vorgehensweise",
          text:
            "Wir arbeiten ruhig, respektvoll und mit dem nötigen Feingefühl – besonders wichtig bei sensiblen Situationen.",
        },
        {
          title: "Zeitersparnis",
          text:
            "Statt viele Einzelaufgaben selbst zu koordinieren, erhalten Sie eine strukturierte Gesamtlösung.",
        },
        {
          title: "Planungssicherheit",
          text:
            "Durch klare Absprachen und fixe Zeitfenster lässt sich die weitere Nutzung oder Übergabe gut vorbereiten.",
        },
        {
          title: "Rasche Termine",
          text:
            "Besichtigungen und Durchführung erfolgen zeitnah – auch bei kurzfristigem Bedarf.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        >
          <h3 className="text-xl font-semibold text-[#2B3A42] mb-3">
            {item.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-[#4B3C30]">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Kostenlose Besichtigung anfragen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  {/* Sanfter Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION 3: Leistungen bei der Nachlassauflösung in Baden ===== */}
<section
  id="leistungen-nachlassaufloesung-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Leistungen Nachlassauflösung Baden"
>
  <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
    <header className="mb-8 md:mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Leistungen bei der Nachlassauflösung in Baden
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Jede Nachlassauflösung ist anders. Deshalb passen wir unsere Leistungen
        individuell an die Gegebenheiten vor Ort an – klar strukturiert, sauber
        umgesetzt und mit verbindlichen Absprachen.
      </p>
    </header>

    {/* Leistungen Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Wohnungsauflösung",
          text:
            "Vollständige Auflösung von Wohnungen jeder Größe – inklusive klar geregelter Übergabe.",
        },
        {
          title: "Hausauflösung",
          text:
            "Strukturiertes Vorgehen bei Ein- und Mehrfamilienhäusern mit fixer Terminplanung.",
        },
        {
          title: "Keller & Nebenräume",
          text:
            "Auch Kellerräume, Abstellflächen und Nebenbereiche werden zuverlässig mitbearbeitet.",
        },
        {
          title: "Dachboden & Garage",
          text:
            "Sicheres Arbeiten auch in engen oder schwer zugänglichen Bereichen.",
        },
        {
          title: "Abbau & Demontage",
          text:
            "Bei Bedarf übernehmen wir den fachgerechten Abbau von Möbeln und Einbauten.",
        },
        {
          title: "Wertanrechnung möglich",
          text:
            "Geeignete Gegenstände können angerechnet werden und senken dadurch die Gesamtkosten.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#A7A9AC55] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        >
          <h3 className="text-xl font-semibold text-[#2B3A42]">
            {item.title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* Hinweis + CTA */}
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <p className="text-sm text-[#6B7280]">
        Alle Leistungen werden vorab besprochen und transparent abgestimmt.
      </p>
      <a
        href="https://wa.me/436767202623"
        className="ml-auto rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Leistungen besprechen
      </a>
    </div>
  </div>

  {/* Weicher Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION 4: Ablauf der Nachlassauflösung in Baden ===== */}
<section
  id="ablauf-nachlassaufloesung-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Ablauf Nachlassauflösung Baden"
>
  {/* Hintergrund-Dekor */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        radial-gradient(60rem 30rem at 0% 10%, #E7EBEE66 0%, transparent 60%),
        radial-gradient(60rem 30rem at 100% 90%, #E7EBEE44 0%, transparent 60%)
      `,
    }}
  />

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        So läuft eine Nachlassauflösung in Baden ab
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Ein klarer Ablauf schafft Sicherheit. Von der ersten Kontaktaufnahme bis zur
        Übergabe ist jeder Schritt abgestimmt, nachvollziehbar und termingerecht
        umgesetzt.
      </p>
    </header>

    {/* Timeline */}
    <div className="relative">
      <div
        className="absolute left-[24px] top-0 bottom-0 hidden md:block w-[2px] bg-[#E8E1D9]"
        aria-hidden="true"
      />

      <div className="space-y-6">
        {[
          {
            n: 1,
            title: "Anfrage & Erstgespräch",
            text:
              "Per Telefon oder WhatsApp schildern Sie kurz die Situation. Gerne auch mit ersten Fotos.",
            cta: { label: "Jetzt anfragen", href: "https://wa.me/436767202623", primary: true },
          },
          {
            n: 2,
            title: "Kostenlose Besichtigung",
            text:
              "Wir kommen nach Baden, sehen uns alles in Ruhe an und klären offene Punkte direkt vor Ort.",
          },
          {
            n: 3,
            title: "Fixpreis-Angebot",
            text:
              "Sie erhalten ein transparentes Angebot mit fixer Preisbasis – klar formuliert und verständlich.",
          },
          {
            n: 4,
            title: "Termin & Durchführung",
            text:
              "Zum vereinbarten Zeitpunkt erfolgt die Nachlassauflösung strukturiert und zügig.",
          },
          {
            n: 5,
            title: "Abnahme & Übergabe",
            text:
              "Gemeinsame Kontrolle zum Abschluss. Die Räumlichkeiten werden besenrein übergeben.",
            cta: { label: "Termin vereinbaren", href: "tel:+436767202623" },
          },
        ].map((step) => (
          <div
            key={step.n}
            className="relative grid gap-4 rounded-2xl border border-[#E8E1D9] bg-white p-5 md:grid-cols-[64px_1fr_auto] md:gap-6 md:p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-shadow"
          >
            {/* Schritt Nummer */}
            <div className="flex md:block">
              <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2B3A42] text-white text-lg font-semibold">
                {step.n}
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-[#2B3A42]">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
                {step.text}
              </p>
            </div>

            {/* CTA optional */}
            <div className="md:self-center">
              {step.cta ? (
                step.cta.primary ? (
                  <a
                    href={step.cta.href}
                    className="inline-flex items-center rounded-xl bg-[#CBB47B] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
                  >
                    {step.cta.label}
                  </a>
                ) : (
                  <a
                    href={step.cta.href}
                    className="inline-flex items-center rounded-xl border border-[#2B3A42] px-5 py-2.5 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
                  >
                    {step.cta.label}
                  </a>
                )
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Vertrauensfaktoren */}
    <div className="mt-12 grid gap-4 sm:grid-cols-3">
      {[
        "Kostenlose Besichtigung in Baden",
        "Fixpreis mit klaren Absprachen",
        "Termintreue Durchführung",
      ].map((label) => (
        <div
          key={label}
          className="rounded-2xl border border-[#E8E1D9] bg-white px-5 py-4 text-center text-[15px] font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
        >
          {label}
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Kostenlose Besichtigung anfragen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  {/* Sanfter Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION 5: Kosten & Fixpreis – Nachlassauflösung Baden ===== */}
<section
  id="kosten-nachlassaufloesung-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Kosten Nachlassauflösung Baden"
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Kosten & Fixpreis bei der Nachlassauflösung in Baden
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Transparenz schafft Sicherheit: Nach einer kostenlosen Besichtigung erhalten
        Sie ein klares Angebot mit Fixpreis. Alle Leistungen werden vorab abgestimmt,
        verständlich erklärt und verbindlich festgehalten.
      </p>
    </header>

    {/* Kostenfaktoren */}
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Umfang & Zugänglichkeit",
          text:
            "Größe der Räumlichkeiten, Menge des Inhalts sowie Zugänge wie Stiegenhaus oder Lift fließen in die Kalkulation ein.",
        },
        {
          title: "Zeitfenster & Terminlage",
          text:
            "Ob kurzfristig oder langfristig geplant – der gewünschte Zeitraum wird berücksichtigt und fair eingepreist.",
        },
        {
          title: "Zusatzleistungen",
          text:
            "Abbauarbeiten oder besondere Anforderungen werden transparent ergänzt und vorab besprochen.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
        >
          <h3 className="text-xl font-semibold text-[#2B3A42] mb-3">
            {item.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-[#4B3C30]">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* Hinweis */}
    <div className="mt-8 max-w-[860px]">
      <p className="text-[15px] leading-relaxed text-[#4B3C30]">
        Die Besichtigung in Baden ist unverbindlich. Sie entscheiden anschließend in
        Ruhe, ob Sie das Angebot annehmen möchten – ohne Druck und ohne versteckte Punkte.
      </p>
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Fixpreis-Angebot anfragen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Persönlich beraten lassen
      </a>
    </div>
  </div>

  {/* Weicher Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION 6: Wertanrechnung & Ankauf bei der Nachlassauflösung ===== */}
<section
  id="wertanrechnung-ankauf-nachlass-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Wertanrechnung und Ankauf bei der Nachlassauflösung in Baden"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Wertanrechnung & Ankauf – Kosten sinnvoll reduzieren
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Bei vielen Nachlässen befinden sich gut erhaltene oder gefragte Gegenstände.
        Diese können im Rahmen der Nachlassauflösung berücksichtigt und direkt
        angerechnet werden. So reduzieren sich die Gesamtkosten, ohne zusätzlichen
        Aufwand für Sie.
      </p>
    </header>

    {/* Ankauf-Kategorien */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Möbel & Einrichtungen",
          text:
            "Einzelne Möbelstücke oder komplette Einrichtungen – je nach Zustand und Nachfrage.",
        },
        {
          title: "Antiquitäten & Design",
          text:
            "Ältere Möbel, Designklassiker und besondere Einzelstücke aus verschiedenen Epochen.",
        },
        {
          title: "Kunst & Bilder",
          text:
            "Gemälde, Grafiken, Skulpturen und dekorative Kunst aus privatem Besitz.",
        },
        {
          title: "Schmuck & Uhren",
          text:
            "Gold- und Silberschmuck, Armbanduhren sowie geerbte Einzelstücke.",
        },
        {
          title: "Porzellan & Sammlungen",
          text:
            "Services, Figuren, Sammlerobjekte oder thematische Konvolute.",
        },
        {
          title: "Besonderheiten",
          text:
            "Bücher, Schallplatten, Raritäten oder Stücke mit speziellem Sammlerinteresse.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        >
          <h3 className="text-xl font-semibold text-[#2B3A42] mb-2">
            {item.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-[#4B3C30]">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* Hinweis + CTA */}
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <p className="text-sm text-[#6B7280]">
        Bereits ein paar Fotos reichen für eine erste Einschätzung.
      </p>
      <a
        href="https://wa.me/436767202623"
        className="ml-auto rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Fotos senden & anfragen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  {/* Sanfter Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION 7: Nachlassauflösung Baden – Stadtteile & Umgebung ===== */}
<section
  id="stadtteile-nachlassaufloesung-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Nachlassauflösung Baden – Stadtteile & Umgebung"
>
  {/* Hintergrund-Dekor */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        radial-gradient(60rem 30rem at 0% 10%, #E7EBEE55 0%, transparent 60%),
        radial-gradient(60rem 30rem at 100% 90%, #E7EBEE33 0%, transparent 60%)
      `,
    }}
  />

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-8 md:mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Nachlassauflösung in Baden – alle Stadtteile
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Wir führen Nachlassauflösungen in ganz <strong>Baden (PLZ 2500)</strong> durch –
        zuverlässig, termintreu und direkt vor Ort. Auch angrenzende Bereiche werden
        flexibel nach Vereinbarung betreut.
      </p>
    </header>

    {/* Stadtteile Grid */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { name: "Baden Innenstadt", label: "Zentrum, Kurviertel & Casino-Nähe" },
        { name: "Braiten", label: "Ruhige Wohnlage im Süden von Baden" },
        { name: "Gamingerhof", label: "Grüner Stadtrand mit Wohnhäusern" },
        { name: "Leesdorf", label: "Wohn- und Geschäftsbereich nahe Zentrum" },
        { name: "Mitterberg", label: "Hanglage mit Blick über Baden" },
        { name: "Rauhenstein", label: "Helenental & Villenviertel" },
        { name: "Weikersdorf", label: "Westlicher Stadtteil mit guter Anbindung" },
      ].map((item) => (
        <div
          key={item.name}
          className="group flex flex-col justify-between rounded-2xl border border-[#E8E1D9] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        >
          <div>
            <p className="text-xs font-medium text-[#6B7280]">PLZ 2500</p>
            <h3 className="mt-2 text-xl font-semibold text-[#2B3A42]">
              {item.name}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
              {item.label}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-[#2B3A42]">
              Nachlassauflösung anfragen
            </span>
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E1D9] text-xs text-[#2B3A42] transition group-hover:border-[#CBB47B] group-hover:text-[#CBB47B]"
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Microcopy + CTA */}
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <span className="text-sm text-[#6B7280]">
        Ihr Stadtteil ist dabei – Termine auch kurzfristig möglich.
      </span>
      <a
        href="https://wa.me/436767202623"
        className="ml-auto rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        WhatsApp – Termin vereinbaren
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  {/* Weicher Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION 8: Tipps für Erben – Nachlassauflösung Baden ===== */}
<section
  id="tipps-erben-nachlassaufloesung-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Tipps für Erben – Nachlassauflösung Baden"
>
  {/* Hintergrund-Dekor */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        radial-gradient(56rem 28rem at 0% 10%, #E7EBEE55 0%, transparent 60%),
        radial-gradient(56rem 28rem at 100% 90%, #E7EBEE33 0%, transparent 60%)
      `,
    }}
  />

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Tipps für Erben – so läuft alles reibungslos
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Eine gute Vorbereitung spart Zeit und vermeidet unnötige Rückfragen. Mit diesen
        praxisnahen Empfehlungen behalten Sie den Überblick und schaffen klare
        Voraussetzungen für eine planbare Nachlassauflösung in Baden.
      </p>
    </header>

    {/* Tipps Grid */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Wichtige Unterlagen sichern",
          text:
            "Dokumente, Verträge, Ausweise und persönliche Unterlagen vorab separat bereitlegen.",
        },
        {
          title: "Schlüssel & Zugänge klären",
          text:
            "Haus-, Wohnungs- und Kellerschlüssel vollständig sammeln und bereitstellen.",
        },
        {
          title: "Park- & Zufahrtsmöglichkeiten prüfen",
          text:
            "Kurz klären, wo Fahrzeuge stehen können – das erleichtert einen zügigen Ablauf.",
        },
        {
          title: "Fotos vorab senden",
          text:
            "Ein paar Übersichtsaufnahmen per WhatsApp helfen bei der ersten Einschätzung.",
        },
        {
          title: "Zeitfenster einplanen",
          text:
            "Für Besichtigung und Übergabe ein realistisches Zeitfenster freihalten.",
        },
        {
          title: "Wertgegenstände separat halten",
          text:
            "Schmuck, Erinnerungsstücke und persönliche Objekte vorab beiseitelegen.",
        },
        {
          title: "Fragenliste vorbereiten",
          text:
            "Offene Punkte notieren – so lassen sich Details direkt bei der Besichtigung klären.",
        },
        {
          title: "Übergabetermin abstimmen",
          text:
            "Abnahme und Schlüsselübergabe am Ende gemeinsam einplanen.",
        },
        {
          title: "Ruhig entscheiden",
          text:
            "Nach dem Angebot in Ruhe prüfen – klare Entscheidungen schaffen Sicherheit.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        >
          <div
            className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "#CBB47B22", color: "#CBB47B", border: "1px solid #E8E1D9" }}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
            </svg>
          </div>
          <h3 className="text-[18px] font-semibold text-[#2B3A42]">
            {item.title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* Microcopy + CTA */}
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <span className="text-sm text-[#6B7280]">
        Tipp: Mit wenigen Vorabinfos erhalten Sie besonders schnell ein klares Angebot.
      </span>
      <a
        href="https://wa.me/436767202623"
        className="ml-auto rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Fotos senden & Termin klären
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  {/* Sanfter Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION 9: FAQ – Nachlassauflösung Baden ===== */}
<section
  id="faq-nachlassaufloesung-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="FAQ – Nachlassauflösung Baden"
>
  {/* Hintergrund-Dekor */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        radial-gradient(56rem 28rem at -10% 0%, #E7EBEE55 0%, transparent 60%),
        radial-gradient(56rem 28rem at 110% 100%, #E7EBEE33 0%, transparent 60%)
      `,
    }}
  />

  <div className="relative mx-auto w-full max-w-[1150px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        FAQ – häufige Fragen zur Nachlassauflösung in Baden
      </h2>
      <p className="mt-4 max-w-[820px] text-[17px] leading-relaxed text-[#334049]">
        Kurze, klare Antworten auf die wichtigsten Fragen. Für alles Weitere sind wir
        gerne persönlich für Sie erreichbar.
      </p>
    </header>

    {/* FAQ Accordion */}
    <div className="grid gap-4">
      {[
        {
          q: "Wie kurzfristig ist eine Nachlassauflösung in Baden möglich?",
          a: "In vielen Fällen innerhalb weniger Tage. Nennen Sie uns Ihren Wunschzeitraum – wir prüfen rasch die Verfügbarkeit.",
        },
        {
          q: "Ist die Besichtigung wirklich kostenlos?",
          a: "Ja. Die Besichtigung vor Ort ist unverbindlich und dient der genauen Einschätzung sowie der Angebotserstellung.",
        },
        {
          q: "Erhalte ich einen Fixpreis?",
          a: "Nach der Besichtigung erstellen wir ein klares Angebot mit Fixpreis. Alle Leistungen sind darin verständlich aufgeführt.",
        },
        {
          q: "Muss ich bei der Durchführung anwesend sein?",
          a: "Nein. Nach Absprache übernehmen wir alles selbstständig. Die Abnahme kann auch später erfolgen.",
        },
        {
          q: "Können einzelne Bereiche ausgelassen werden?",
          a: "Ja. Teilauflösungen sind problemlos möglich und werden vorab genau abgestimmt.",
        },
        {
          q: "Ist eine Wertanrechnung möglich?",
          a: "Geeignete Gegenstände können berücksichtigt und direkt im Angebot angerechnet werden.",
        },
        {
          q: "Gibt es auch Termine am Wochenende?",
          a: "Nach Vereinbarung sind auch Wochenendtermine möglich. Bitte sprechen Sie uns darauf an.",
        },
      ].map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-[#E8E1D9] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] open:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-shadow"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <h3 className="text-base md:text-lg font-semibold text-[#2B3A42]">
              {item.q}
            </h3>
            <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#A7A9AC66] text-[#2B3A42] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            {item.a}
          </p>
        </details>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Frage stellen & Termin klären
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  {/* Weicher Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>


    </>
  );
}
