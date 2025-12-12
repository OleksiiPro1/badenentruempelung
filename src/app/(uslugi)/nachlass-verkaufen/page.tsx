// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nachlass verkaufen Baden – fairer Ankauf mit Vor-Ort-Termin",
  description:
    "Nachlass verkaufen in Baden: kostenlose Besichtigung, faire Bewertung und rasche Abholung. Diskrete Abwicklung für Erben & Angehörige in Baden und Umgebung – jetzt Termin sichern.",
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO: Nachlass verkaufen Baden ===== */}
      <section
        aria-label="Nachlass verkaufen Baden – fairer Ankauf mit Vor-Ort-Termin"
        className="relative overflow-hidden bg-[#FAFAFA]"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/WhatsApp Image 2025-11-15 at 17.02.05 (3).jpeg"
            alt="Nachlass verkaufen Baden – fairer Ankauf"
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
              Nachlass verkaufen <br /> Baden
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#F5F5F5] leading-relaxed">
              Sie möchten einen <strong>Nachlass in Baden</strong> verkaufen – ohne endlose
              Inserate, ohne Unsicherheit und ohne unnötigen Aufwand? Wir bieten eine
              diskrete, planbare Abwicklung mit <strong>kostenlosem Vor-Ort-Termin</strong>,
              fairer Bewertung und klarer Kommunikation. Ob einzelne Stücke oder der
              gesamte Bestand: Sie erhalten rasch eine verlässliche Einschätzung – und
              auf Wunsch eine schnelle Abholung zum fixierten Zeitpunkt.
            </p>

            <p className="mt-5 text-base md:text-lg text-[#F5F5F5] leading-relaxed">
              Besonders in sensiblen Situationen (Erbschaft, Wohnungsübergabe, Zeitdruck)
              zählt ein Partner, der strukturiert arbeitet und respektvoll mit Erinnerungsstücken
              umgeht. Genau dafür sind wir in Baden & Umgebung täglich unterwegs.
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
              Kostenlose Besichtigung in Baden • faire Bewertung • rasche Termine nach Vereinbarung
            </p>
          </div>
        </div>

        {/* Soft bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
      </section>
      {/* ===== SEKTION 2: Warum Nachlass ankaufen lassen? ===== */}
<section
  id="vorteile-nachlassankauf-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Warum Nachlass verkaufen in Baden"
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-10">
    <header className="mb-8 md:mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Warum den Nachlass in Baden direkt verkaufen?
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Ein direkter Nachlassverkauf spart Zeit, reduziert Unsicherheiten und sorgt
        für klare Abläufe. Statt viele einzelne Schritte selbst zu organisieren,
        erhalten Sie bei uns eine strukturierte Lösung mit persönlichem Ansprechpartner
        und fixer Terminvereinbarung in Baden & Umgebung.
      </p>
    </header>

    {/* Vorteile Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Rasche Entscheidung",
          text:
            "Nach einer kurzen Besichtigung erhalten Sie zeitnah eine klare Einschätzung. Keine langen Wartezeiten, keine offenen Fragen.",
        },
        {
          title: "Klare Abwicklung",
          text:
            "Von der ersten Anfrage bis zum Abschluss bleibt alles transparent und nachvollziehbar. Sie wissen jederzeit, was als Nächstes passiert.",
        },
        {
          title: "Diskret & respektvoll",
          text:
            "Gerade bei Nachlässen ist ein sensibler Umgang entscheidend. Wir arbeiten ruhig, respektvoll und ohne Zeitdruck.",
        },
        {
          title: "Abholung inklusive",
          text:
            "Geeignete Stücke werden direkt übernommen und zum vereinbarten Termin abgeholt – ohne zusätzliche Organisation für Sie.",
        },
        {
          title: "Auch Teilankauf möglich",
          text:
            "Nicht alles muss verkauft werden. Einzelne Gegenstände oder ausgewählte Bereiche können separat berücksichtigt werden.",
        },
        {
          title: "Ideal bei Zeitdruck",
          text:
            "Wenn Übergabetermine anstehen oder Entscheidungen rasch getroffen werden müssen, sorgt unser Ablauf für Planungssicherheit.",
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

  {/* Soft bottom fade */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION 3: Was wir aus dem Nachlass ankaufen ===== */}
<section
  id="nachlass-ankauf-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Was wir aus dem Nachlass in Baden ankaufen"
>
  <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
    <header className="mb-8 md:mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Was wir aus dem Nachlass in Baden ankaufen
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Jeder Nachlass ist individuell. In Baden treffen wir häufig auf gewachsene
        Haushalte mit sehr unterschiedlichen Gegenständen. Wir prüfen vor Ort, welche
        Stücke für einen Ankauf infrage kommen, und erklären unsere Einschätzung offen
        und nachvollziehbar.
      </p>
    </header>

    {/* Kategorien */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Antiquitäten & Design",
          text:
            "Möbel, Einzelstücke und Designklassiker aus verschiedenen Epochen – je nach Zustand und Nachfrage.",
        },
        {
          title: "Möbel & komplette Einrichtungen",
          text:
            "Von einzelnen Möbeln bis zu vollständig eingerichteten Wohnungen oder Häusern.",
        },
        {
          title: "Gemälde & Kunstobjekte",
          text:
            "Ölgemälde, Grafiken, Skulpturen und dekorative Kunst aus privaten Sammlungen.",
        },
        {
          title: "Porzellan & Silber",
          text:
            "Services, Einzelteile, Bestecke und dekorative Objekte – auch bei größeren Mengen.",
        },
        {
          title: "Schmuck & Uhren",
          text:
            "Gold- und Silberschmuck, Markenuhren sowie geerbte Einzelstücke mit Geschichte.",
        },
        {
          title: "Sammlungen & Besonderheiten",
          text:
            "Bücher, Vinyl, militärische Objekte, Kuriositäten oder seltene Einzelstücke.",
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

    {/* Hinweis + Mini-CTA */}
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <p className="text-sm text-[#6B7280]">
        Unsicher, ob etwas interessant ist? Ein Foto per WhatsApp reicht für eine erste Einschätzung.
      </p>
      <a
        href="https://wa.me/436767202623"
        className="ml-auto rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Foto senden & nachfragen
      </a>
    </div>
  </div>

  {/* Dekor unten */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION 4: Ablauf – Nachlass verkaufen in Baden ===== */}
<section
  id="ablauf-nachlassverkauf-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Ablauf Nachlass verkaufen Baden"
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
        So läuft der Nachlassverkauf in Baden ab
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Klar strukturiert, ruhig umgesetzt und gut planbar: Der Verkauf eines Nachlasses
        erfolgt bei uns in festen Schritten – mit persönlichem Kontakt, transparenter
        Einschätzung und verbindlicher Terminabstimmung.
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
            title: "Kontaktaufnahme",
            text:
              "Telefonisch oder per WhatsApp schildern Sie kurz Ihre Situation. Gerne auch mit ersten Fotos zur Vorab-Einschätzung.",
            cta: { label: "Jetzt anfragen", href: "https://wa.me/436767202623", primary: true },
          },
          {
            n: 2,
            title: "Kostenlose Besichtigung",
            text:
              "Wir kommen zu Ihnen nach Baden, sehen uns den Nachlass in Ruhe an und klären alle offenen Fragen direkt vor Ort.",
          },
          {
            n: 3,
            title: "Einschätzung & Angebot",
            text:
              "Sie erhalten eine faire, nachvollziehbare Einschätzung. Auf dieser Basis besprechen wir den möglichen Ankauf.",
          },
          {
            n: 4,
            title: "Termin & Übernahme",
            text:
              "Bei Einigung wird ein fixer Termin vereinbart. Die Übernahme der angekauften Stücke erfolgt zuverlässig und planbar.",
          },
          {
            n: 5,
            title: "Abschluss",
            text:
              "Nach der Übergabe ist der Vorgang für Sie erledigt – klar geregelt, ohne offene Punkte oder Nacharbeit.",
            cta: { label: "Termin vereinbaren", href: "tel:+436767202623" },
          },
        ].map((step) => (
          <div
            key={step.n}
            className="relative grid gap-4 rounded-2xl border border-[#E8E1D9] bg-white p-5 md:grid-cols-[64px_1fr_auto] md:gap-6 md:p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-shadow"
          >
            {/* Nummer */}
            <div className="flex md:block">
              <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2B3A42] text-white text-lg font-semibold">
                {step.n}
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-[#2B3A42]">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
                {step.text}
              </p>
            </div>

            {/* Optional CTA */}
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
        "Klare Absprachen & fixe Termine",
        "Ruhige, respektvolle Abwicklung",
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
{/* ===== SEKTION 5: Bewertung & Preis – fair und nachvollziehbar ===== */}
<section
  id="bewertung-preis-nachlass-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Bewertung und Preis beim Nachlassverkauf in Baden"
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Bewertung & Preis beim Nachlassverkauf
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Eine realistische Einschätzung ist die Basis für einen fairen Ankauf. In Baden
        bewerten wir Nachlässe transparent und erklären, wie der Preis zustande kommt –
        ruhig, verständlich und ohne Zeitdruck.
      </p>
    </header>

    {/* Faktoren */}
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Zustand & Vollständigkeit",
          text:
            "Erhaltungszustand, Pflege und vorhandene Teile spielen eine zentrale Rolle bei der Einschätzung.",
        },
        {
          title: "Seltenheit & Nachfrage",
          text:
            "Bestimmte Stücke sind stärker gefragt als andere. Diese Marktsituation fließt in die Bewertung ein.",
        },
        {
          title: "Umfang & Aufwand",
          text:
            "Menge, Zugänglichkeit und logistischer Aufwand werden berücksichtigt und offen kommuniziert.",
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
        Die Besichtigung in Baden ist kostenlos. Sie erhalten eine ehrliche Einschätzung
        und entscheiden anschließend in Ruhe, ob Sie den Nachlass verkaufen möchten.
        Es gibt keinen Verkaufsdruck und keine Verpflichtung.
      </p>
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Bewertung anfragen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Persönlich beraten lassen
      </a>
    </div>
  </div>

  {/* Soft bottom fade */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION 6: Komplettlösung – Ankauf & strukturierte Übergabe ===== */}
<section
  id="komplettloesung-nachlass-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Komplettlösung Nachlass verkaufen Baden"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Komplettlösung für Nachlässe in Baden
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Oft geht es nicht nur um den Verkauf einzelner Stücke, sondern um eine
        verlässliche Gesamtregelung. Wir kombinieren den Ankauf geeigneter Gegenstände
        mit einer klar abgestimmten Übergabe – planbar, ruhig und aus einer Hand.
      </p>
    </header>

    {/* Optionen */}
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Nur Ankauf",
          text:
            "Sie möchten ausschließlich ausgewählte Stücke verkaufen. Wir bewerten vor Ort und übernehmen die angekauften Objekte termingerecht.",
        },
        {
          title: "Teilweise Lösung",
          text:
            "Ein Teil des Nachlasses wird verkauft, anderes bleibt vor Ort. Der Ablauf wird individuell abgestimmt.",
        },
        {
          title: "Gesamtabwicklung",
          text:
            "Wenn eine vollständige Übergabe gewünscht ist, koordinieren wir alle Schritte klar und verbindlich.",
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

    {/* Vorteile */}
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {[
        "Ein fixer Ansprechpartner",
        "Klare Termine & Absprachen",
        "Ruhiger Ablauf ohne Mehraufwand",
      ].map((v) => (
        <div
          key={v}
          className="rounded-2xl border border-[#E8E1D9] bg-white px-5 py-4 text-center text-[15px] font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
        >
          {v}
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Situation schildern
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
{/* ===== SEKTION 7: Nachlass verkaufen in Baden – Stadtteile & Umgebung ===== */}
<section
  id="nachlass-baden-stadtteile"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Nachlass verkaufen in Baden – Stadtteile & Umgebung"
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
        Nachlass verkaufen in Baden – alle Stadtteile
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Wir sind in ganz <strong>Baden (2500)</strong> für Sie im Einsatz – von der
        Innenstadt bis zu den ruhigen Wohnlagen. Termine werden flexibel abgestimmt
        und direkt vor Ort durchgeführt.
      </p>
    </header>

    {/* Stadtteile Grid */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { name: "Baden Innenstadt", label: "Zentrum, Kurviertel & Casino-Nähe" },
        { name: "Braiten", label: "Ruhige Wohngegend im Süden von Baden" },
        { name: "Gamingerhof", label: "Grüner Stadtrand mit Einfamilienhäusern" },
        { name: "Leesdorf", label: "Wohn- und Geschäftsbereich nahe Zentrum" },
        { name: "Mitterberg", label: "Hanglage mit Blick über Baden" },
        { name: "Rauhenstein", label: "Helenental & Villenviertel" },
        { name: "Weikersdorf", label: "Westlicher Stadtteil mit guter Anbindung" },
      ].map((item) => (
        <div
          key={item.name}
          className="flex flex-col justify-between rounded-2xl border border-[#E8E1D9] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
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
              Nachlassverkauf anfragen
            </span>
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E1D9] text-xs text-[#2B3A42]"
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
        Auch Umgebung von Baden – Termine nach Vereinbarung möglich.
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
{/* ===== SEKTION 8: Tipps für Erben – Nachlassverkauf in Baden vorbereiten ===== */}
<section
  id="tipps-nachlassverkauf-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Tipps für Erben – Nachlassverkauf in Baden"
>
  {/* Hintergrund-Dekor */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        radial-gradient(60rem 28rem at 0% 10%, #E7EBEE55 0%, transparent 60%),
        radial-gradient(60rem 28rem at 100% 90%, #E7EBEE33 0%, transparent 60%)
      `,
    }}
  />

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Tipps für Erben – gut vorbereitet zum Nachlassverkauf
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Mit ein paar einfachen Vorbereitungen lässt sich der Nachlassverkauf deutlich
        vereinfachen. Diese Hinweise helfen dabei, Zeit zu sparen und eine klare
        Entscheidungsgrundlage zu schaffen.
      </p>
    </header>

    {/* Tipps Grid */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Persönliche Stücke vorab sichern",
          text:
            "Dokumente, Erinnerungsstücke, Fotos oder Schlüssel sollten vor dem Termin beiseitegelegt werden.",
        },
        {
          title: "Kurzüberblick geben",
          text:
            "Eine grobe Einschätzung per Telefon oder WhatsApp erleichtert die Vorbereitung des Vor-Ort-Termins.",
        },
        {
          title: "Fotos vorab senden",
          text:
            "Ein paar Handyfotos helfen, den Umfang besser einzuschätzen und schneller zu reagieren.",
        },
        {
          title: "Zugänge klären",
          text:
            "Schlüssel, Lift, Stiegenhaus oder Parkmöglichkeit kurz vorab prüfen – das spart Zeit am Termin.",
        },
        {
          title: "Zeitfenster einplanen",
          text:
            "Für Besichtigung und Fragen empfiehlt sich ein ruhiges Zeitfenster ohne Termindruck.",
        },
        {
          title: "Fragen notieren",
          text:
            "Notieren Sie offene Punkte vorab – so bleibt beim Termin alles übersichtlich.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        >
          <div
            className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background: "#CBB47B22",
              color: "#CBB47B",
              border: "1px solid #E8E1D9",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
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
        Tipp: Mit Fotos und kurzen Infos erhalten Sie besonders schnell eine erste Einschätzung.
      </span>
      <a
        href="https://wa.me/436767202623"
        className="ml-auto rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Fotos per WhatsApp senden
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Persönlich nachfragen
      </a>
    </div>
  </div>

  {/* Sanfter Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION 9: FAQ – Nachlass verkaufen Baden ===== */}
<section
  id="faq-nachlass-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-28"
  aria-label="FAQ – Nachlass verkaufen Baden"
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
        Häufige Fragen zum Nachlassverkauf in Baden
      </h2>
      <p className="mt-4 max-w-[820px] text-[17px] leading-relaxed text-[#334049]">
        Kurz und klar beantwortet. Sollte etwas offen bleiben, erreichen Sie uns jederzeit
        persönlich per Telefon oder WhatsApp.
      </p>
    </header>

    {/* Accordion */}
    <div className="grid gap-4">
      {[
        {
          q: "Wie schnell ist ein Termin in Baden möglich?",
          a: "In der Regel binnen weniger Tage. Nennen Sie Ihren Wunschzeitraum, wir stimmen einen fixen Termin ab.",
        },
        {
          q: "Ist die Besichtigung wirklich kostenlos?",
          a: "Ja. Der Vor-Ort-Termin ist unverbindlich und dient einer fairen Einschätzung.",
        },
        {
          q: "Kaufen Sie auch einzelne Stücke aus dem Nachlass?",
          a: "Ja. Ein Teilverkauf ist möglich – Sie entscheiden, welche Gegenstände berücksichtigt werden sollen.",
        },
        {
          q: "Muss alles vorbereitet sein?",
          a: "Nein. Eine grobe Übersicht reicht aus. Gerne erklären wir die nächsten Schritte direkt vor Ort.",
        },
        {
          q: "Wie läuft die Übernahme ab?",
          a: "Nach Einigung wird ein fixer Termin vereinbart. Die Übernahme erfolgt planbar und zuverlässig.",
        },
        {
          q: "Kann jemand anderes den Termin wahrnehmen?",
          a: "Ja. Eine bevollmächtigte Person kann den Termin übernehmen.",
        },
        {
          q: "Sind Termine am Wochenende möglich?",
          a: "Nach Vereinbarung ja. Bitte geben Sie Ihren Wunsch bei der Anfrage an.",
        },
      ].map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-[#E8E1D9] bg-white p-5 open:shadow-[0_10px_28px_rgba(0,0,0,0.08)] shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow"
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
        Frage stellen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  {/* JSON-LD FAQPage */}
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wie schnell ist ein Termin in Baden möglich?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In der Regel binnen weniger Tage. Nennen Sie Ihren Wunschzeitraum, wir stimmen einen fixen Termin ab."
            }
          },
          {
            "@type": "Question",
            "name": "Ist die Besichtigung wirklich kostenlos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Der Vor-Ort-Termin ist unverbindlich und dient einer fairen Einschätzung."
            }
          },
          {
            "@type": "Question",
            "name": "Kaufen Sie auch einzelne Stücke aus dem Nachlass?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Ein Teilverkauf ist möglich – Sie entscheiden, welche Gegenstände berücksichtigt werden sollen."
            }
          },
          {
            "@type": "Question",
            "name": "Muss alles vorbereitet sein?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nein. Eine grobe Übersicht reicht aus. Gerne erklären wir die nächsten Schritte direkt vor Ort."
            }
          },
          {
            "@type": "Question",
            "name": "Wie läuft die Übernahme ab?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nach Einigung wird ein fixer Termin vereinbart. Die Übernahme erfolgt planbar und zuverlässig."
            }
          },
          {
            "@type": "Question",
            "name": "Kann jemand anderes den Termin wahrnehmen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Eine bevollmächtigte Person kann den Termin übernehmen."
            }
          },
          {
            "@type": "Question",
            "name": "Sind Termine am Wochenende möglich?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nach Vereinbarung ja. Bitte geben Sie Ihren Wunsch bei der Anfrage an."
            }
          }
        ]
      })
    }}
  />
</section>
{/* ===== SEKTION 10: Kontakt – Nachlass verkaufen Baden ===== */}
<section
  id="kontakt-nachlass-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Kontakt – Nachlass verkaufen Baden"
>
  {/* Hintergrund-Dekor */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        radial-gradient(70rem 30rem at 0% 10%, #E7EBEE55 0%, transparent 60%),
        radial-gradient(70rem 30rem at 100% 90%, #E7EBEE33 0%, transparent 60%)
      `,
    }}
  />

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Kontakt – Nachlass verkaufen in Baden
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Kostenlose Besichtigung, klare Einschätzung und verlässliche Terminabstimmung.
        Nehmen Sie direkt Kontakt auf – wir melden uns rasch zurück und besprechen
        Ihr Anliegen persönlich.
      </p>
    </header>

    <div className="grid gap-6 lg:grid-cols-2">
      {/* Kontaktkarte */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Direkter Kontakt
        </h3>

        <ul className="mt-4 space-y-3 text-[15px] text-[#334049]">
          <li className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#CBB47B]">
              <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1.3 1.3 0 011.3-.3l3.5 1.2c.7.3 1.1 1 .9 1.7-.7 2.1-2.8 3.6-5.1 3.6C9.7 22.4 1.6 14.3 1.6 4.9c0-2.3 1.5-4.4 3.6-5.1.7-.3 1.5.2 1.7.9l1.2 3.5c.2.5 0 1.1-.3 1.3L6.6 10.8z"/>
            </svg>
            <a href="tel:+436767202623" className="font-semibold text-[#2B3A42] hover:underline">
              +43 676 720 26 23
            </a>
          </li>

          <li className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#2B3A42]">
              <path d="M20 3.9A10.9 10.9 0 0012 1 11 11 0 001 12a11 11 0 001.8 6.1L1 23l5-1.7A11 11 0 1012 1z"/>
            </svg>
            <a
              href="https://wa.me/436767202623"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 436767202623
            </a>
          </li>

          <li className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#2B3A42]">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"/>
            </svg>
            <a href="mailto:info@badenentruempelung.at" className="hover:underline">
              info@badenentruempelung.at
            </a>
          </li>

          <li className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#CBB47B]">
              <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z"/>
            </svg>
            <span>Baden, Niederösterreich</span>
          </li>
        </ul>

        <p className="mt-5 text-sm text-[#6B7280]">
          Kostenlose Besichtigung • persönliche Beratung • klare Absprachen
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://wa.me/436767202623"
            className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
          >
            WhatsApp starten
          </a>
          <a
            href="tel:+436767202623"
            className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
          >
            Jetzt anrufen
          </a>
        </div>
      </div>

      {/* Warum wir */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Warum wir in Baden?
        </h3>

        <ul className="mt-4 grid gap-3 text-[15px] text-[#334049]">
          {[
            "Langjährige Erfahrung mit Nachlässen",
            "Kostenlose Besichtigung vor Ort",
            "Ruhige, respektvolle Vorgehensweise",
            "Klare Einschätzung & fixe Termine",
          ].map((li) => (
            <li key={li} className="flex items-start gap-2">
              <span
                className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "#CBB47B" }}
                aria-hidden="true"
              />
              <span>{li}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-[#E8E1D9] bg-[#F7F5F2] p-5">
          <p className="text-[15px] leading-relaxed text-[#2B3A42]">
            Sie möchten rasch Klarheit? Kontaktieren Sie uns direkt – telefonisch oder
            per WhatsApp. Wir melden uns zeitnah zurück.
          </p>
        </div>
      </div>
    </div>

    {/* Finaler CTA */}
    <div className="mt-12 flex flex-wrap items-center gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-2xl bg-[#CBB47B] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Kostenlose Besichtigung anfragen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-2xl border border-[#2B3A42] px-7 py-3.5 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Jetzt anrufen
      </a>
      <span className="text-sm text-[#6B7280]">
        Unverbindlich • persönlich • klar geregelt
      </span>
    </div>
  </div>
</section>





    </>
  );
}
