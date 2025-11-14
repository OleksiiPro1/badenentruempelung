// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entrümpelung Baden – Professionell vom Experten",
  description:
    "Entrümpelung Baden mit kostenloser Besichtigung & Fixpreis. Zuverlässige Räumung, Wertanrechnung & Ankauf in Baden & Umgebung – jetzt Termin sichern.",
};

export default function HomePage() {

   const ortsteileBaden = [
    {
      plz: "2500",
      name: "Baden",
      label: "Innenstadt, Kurviertel & Casino-Nähe",
      href: "/",
    },
    {
      plz: "2500",
      name: "Braiten",
      label: "Ruhige Wohnlage südlich von Baden",
      href: "/",
    },
    {
      plz: "2500",
      name: "Gamingerhof",
      label: "Grüner Stadtrand mit viel Natur",
      href: "/",
    },
    {
      plz: "2500",
      name: "Leesdorf",
      label: "Wohn- & Geschäftsbereich nahe Zentrum",
      href: "/",
    },
    {
      plz: "2500",
      name: "Mitterberg",
      label: "Hanglage mit Blick über Baden",
      href: "/",
    },
    {
      plz: "2500",
      name: "Rauhenstein",
      label: "Helenental, Burgruine & Villenviertel",
      href: "/",
    },
    {
      plz: "2500",
      name: "Weikersdorf",
      label: "Westlicher Stadtteil mit guter Anbindung",
      href: "/",
    },
  ];

  return (
    <>
      {/* ===== HERO: Entrümpelung Baden vom Profi ===== */}
      <section
        aria-label="Entrümpelung Baden vom Profi"
        className="relative overflow-hidden bg-[#FAFAFA]"
      >
        {/* Фон */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-baden.webp"
            alt="Entrümpelung Baden vom Profi"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B3A42]/80 via-[#2B3A42]/50 to-transparent" />
        </div>

        {/* Контент */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-10 md:px-10 md:py-36 text-white">
          <div className="max-w-[700px]">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#CBB47B]">
              Entrümpelung Baden <br /> vom Profi
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#F5F5F5] leading-relaxed">
              Entrümpelung Baden steht für Professionalität, Diskretion und Effizienz.
              Unser erfahrenes Team kümmert sich um jede Art von Entrümpelung in Baden
              und Umgebung – schnell, sauber und mit höchster Sorgfalt. Wir bieten faire
              Preise, transparente Abläufe und eine kostenlose Besichtigung vor Ort.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://wa.me/436767202623"
                className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-medium text-white shadow-md transition hover:shadow-lg hover:brightness-110"
              >
                WhatsApp Kontakt
              </Link>
              <Link
                href="/bewertungen"
                className="rounded-xl border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#2B3A42]"
              >
                Bewertungen
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#D7D7D7]">
              Kostenlose Besichtigung & unverbindliches Angebot in ganz Baden.
            </p>
          </div>
        </div>

        {/* Декоративный низ */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
      </section>

      {/* ===== SEKTION 2: Ankauf & Verwertung ===== */}
      <section
        id="ankauf-verwertung"
        className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
        aria-label="Entrümpelung Baden – Ankauf & Verwertung"
      >
        <div className="mx-auto w-full max-w-[1150px] px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#3A2E25] mb-6">
            Ankauf & Verwertung
          </h2>

          <p className="text-lg leading-relaxed text-[#4B3C30] max-w-[820px]">
            Bei <strong>Entrümpelung Baden</strong> erhalten Sie mehr als nur eine Räumung.
            Wir bieten zusätzlich die Möglichkeit zum Ankauf und zur Verwertung von
            wertvollen Gegenständen – sei es Antiquitäten, Möbel, Gemälde, Sammlungen
            oder Schmuck. So reduzieren sich die Gesamtkosten Ihrer Entrümpelung deutlich
            und gleichzeitig werden gut erhaltene Stücke sinnvoll weiterverwendet.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#4B3C30] max-w-[820px]">
            Unsere Experten bewerten Gegenstände direkt vor Ort transparent und fair.
            Die Wertanrechnung wird sofort in das Angebot integriert – klar, ehrlich
            und nachvollziehbar. Damit kombinieren wir professionelle Entrümpelung in
            Baden mit echter Wertschätzung für hochwertige Objekte.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Wertanrechnung",
                text: "Faire Bewertung Ihrer Möbel, Antiquitäten und Sammlerstücke direkt beim Besichtigungstermin.",
              },
              {
                title: "Ankauf vor Ort",
                text: "Sofortige Anrechnung wertvoller Gegenstände – transparent und unkompliziert.",
              },
              {
                title: "Kostenoptimierung",
                text: "Durch Ankauf & Verwertung sparen Sie bares Geld und reduzieren die Gesamtkosten der Räumung.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-xl font-semibold text-[#3A2E25] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4B3C30] leading-relaxed text-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Декоративная нижняя линия */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
      </section>


      {/* ===== SEKTION 11: Referenz – Wüstegasse 50, Baden (Vorher/Nachher) ===== */}
<section
  id="referenz-wuestegasse-50"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Referenz – Wüstegasse 50, Baden"
>
  {/* Dekor */}
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
      <div className="inline-flex items-center gap-3 rounded-full border border-[#E8E1D9] bg-white px-4 py-2 text-sm text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.05)]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
        <span className="font-medium">Wüstegasse 50, Baden</span>
      </div>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Vorher / Nachher – Fallbeispiel aus Baden
      </h2>
      <p className="mt-3 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Ein klar strukturiertes Projekt mit schneller Umsetzung und besenreiner Übergabe.
        Fixpreis nach Besichtigung, termintreue Durchführung und respektvolle Abwicklung vor Ort.
      </p>
    </header>

    

    {/* Bilder – zwei Karten, видимость управляется CSS по :checked */}
    <div className="relative">
      {/* Vorher */}
      <figure
        className="group pointer-events-auto rounded-3xl border border-[#E8E1D9] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden peer-checked/view-before:block hidden"
      >
        <div className="relative h-[260px] w-full md:h-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cases/wuestegasse-50-before.webp"
            alt="Wüstegasse 50 Baden – Vorher: derselbe Raum in Baden"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {/* Badge */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#2B3A42] px-3 py-1.5 text-xs font-semibold text-white">
            <span>Baden • Vorher</span>
          </div>
        </div>
        <figcaption className="p-6">
          <h3 className="text-lg font-semibold text-[#2B3A42]">Vorher: derselbe Raum in Baden</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#334049]">
            Aufnahme vor der Durchführung. Termin wurde kurzfristig fixiert, Besichtigung vorab inklusive.
          </p>
        </figcaption>
      </figure>

      {/* Nachher */}
      <figure
        className="group pointer-events-auto rounded-3xl border border-[#E8E1D9] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden peer-checked/view-after:block hidden"
      >
        <div className="relative h-[260px] w-full md:h-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cases/wuestegasse-50-after.webp"
            alt="Wüstegasse 50 Baden – Nachher: derselbe Raum in Baden"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {/* Badge */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#CBB47B] px-3 py-1.5 text-xs font-semibold text-[#2B3A42]">
            <span>Baden • Nachher</span>
          </div>
        </div>
        <figcaption className="p-6">
          <h3 className="text-lg font-semibold text-[#2B3A42]">Nachher: Wüstegasse 50 Baden</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#334049]">
            Übergabe besenrein, alles wie vereinbart. Fixpreis bestätigt, termingerecht abgeschlossen.
          </p>
        </figcaption>
      </figure>
    </div>

    {/* Bilder – responsive: Mobil 1 Spalte, Desktop 2 Spalten */}
<div className="grid gap-6 lg:grid-cols-2">
  {/* Vorher (links auf Desktop, oben auf Mobile) */}
  <figure className="rounded-3xl border border-[#E8E1D9] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden">
    <div className="relative h-[260px] w-full md:h-[420px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/baden-vorher.jpeg" /* oder /images/cases/wuestegasse-50-before.webp */
        alt="Wüstegasse 50 Baden – Vorher: derselbe Raum in Baden"
        className="h-full w-full object-cover !h-full !w-full"
        loading="lazy"
      />
      {/* Badge */}
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#2B3A42] px-3 py-1.5 text-xs font-semibold text-white">
        <span>Baden • Vorher</span>
      </div>
    </div>
    <figcaption className="p-6">
      <h3 className="text-lg font-semibold text-[#2B3A42]">Vorher: derselbe Raum in Baden</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#334049]">
        Aufnahme vor der Durchführung. Termin wurde kurzfristig fixiert, Besichtigung vorab inklusive.
      </p>
    </figcaption>
  </figure>

  {/* Nachher (rechts auf Desktop, unten auf Mobile) */}
  <figure className="rounded-3xl border border-[#E8E1D9] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden">
    <div className="relative h-[260px] w-full md:h-[420px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/baden-nachher.jpeg" /* oder /images/cases/wuestegasse-50-after.webp */
        alt="Wüstegasse 50 Baden – Nachher: derselbe Raum in Baden"
        className="h-full w-full object-cover !h-full !w-full"
        loading="lazy"
      />
      {/* Badge */}
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#CBB47B] px-3 py-1.5 text-xs font-semibold text-[#2B3A42]">
        <span>Baden • Nachher</span>
      </div>
    </div>
    <figcaption className="p-6">
      <h3 className="text-lg font-semibold text-[#2B3A42]">Nachher: Wüstegasse 50 Baden</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#334049]">
        Übergabe besenrein, alles wie vereinbart. Fixpreis bestätigt, termingerecht abgeschlossen.
      </p>
    </figcaption>
  </figure>
</div>


    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Ähnliches Projekt anfragen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>
</section>


      {/* ===== SEKTION 3: Leistungen – Entrümpelung Baden ===== */}
<section
  id="leistungen-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Leistungen – Entrümpelung Baden"
>
  <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
    <header className="mb-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Leistungen – Entrümpelung Baden
      </h2>
      <p className="mt-4 max-w-[820px] text-[17px] leading-relaxed text-[#334049]">
        Verlässlich, termintreu und mit über 20 Jahren Erfahrung in Baden & Umgebung:
        von Wohnung bis Haus, vom Keller bis zum Dachboden – inklusive klarer Abläufe
        und transparenter Fixpreise nach Besichtigung.
      </p>
    </header>

    {/* Сетка услуг */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Wohnungsentrümpelung",
          href: "/raeumung-baden",
          text:
            "Rasch und sauber – ideale Lösung für Teil- oder Komplett-Räumungen in Baden.",
        },
        {
          title: "Hausentrümpelung",
          href: "/raeumung-baden",
          text:
            "Strukturiert geplant, mit klarer Zeitschiene bis zur besenreinen Übergabe.",
        },
        {
          title: "Kellerentrümpelung",
          href: "/kellerentruempelung-baden",
          text:
            "Mehr Platz im Untergeschoss – effizient und ordentlich ausgeführt.",
        },
        {
          title: "Dachboden Räumung",
          href: "/dachboden-raeumung-baden",
          text:
            "Sicheres Arbeiten auch in engen Bereichen, inklusive sorgfältiger Übergabe.",
        },
        {
          title: "Firmenauflösung & Büro",
          href: "/firmenaufloesung-baden",
          text:
            "Betriebs- und Büroflächen professionell räumen – diskret und planbar.",
        },
        {
          title: "Verlassenschaften",
          href: "/verlassenschaften-baden",
          text:
            "Einfühlsam und zuverlässig – inklusive Wertanrechnung bei geeigneten Stücken.",
        },
        {
          title: "Messie Hilfe Baden",
          href: "/entruempelungsfirma-baden",
          text:
            "Respektvoll, strukturiert und mit klarer Vorgehensweise – vertraulich abgewickelt.",
        },
      ].map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group block rounded-2xl border border-[#A7A9AC55] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        >
          <h3 className="text-xl font-semibold text-[#2B3A42]">
            {item.title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#334049]">
            {item.text}
          </p>
          <span
            className="mt-4 inline-block h-[2px] w-0 bg-[#CBB47B] transition-all duration-300 group-hover:w-20"
            aria-hidden="true"
          />
        </a>
      ))}
    </div>

    {/* CTA в конце секции */}
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        WhatsApp – kostenlose Besichtigung
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-5 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Jetzt anrufen
      </a>
    </div>
  </div>

  {/* Декор внизу */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION 4: Entrümpelung Baden Kosten ===== */}
<section
  id="entruempelung-baden-kosten"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py10"
  aria-label="Entrümpelung Baden Kosten"
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Entrümpelung Kosten
      </h2>
      <p className="mt-4 max-w-[820px] text-[17px] leading-relaxed text-[#4B3C30]">
        Faire Preise mit transparenter Kalkulation: Bei Baden Entrümpelung erhalten Sie 
        vor Beginn einen Fixpreis, der alle Leistungen umfasst. Keine versteckten Zuschläge, 
        keine Überraschungen – nur ein klar strukturiertes Angebot nach kostenloser Besichtigung.
      </p>
    </header>

    {/* Preisfaktoren */}
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Kostenlose Besichtigung",
          text: "Nach einer Vor-Ort-Besichtigung erhalten Sie ein verbindliches Angebot mit Fixpreis-Garantie.",
        },
        {
          title: "Faire Bewertung",
          text: "Wertvolle Gegenstände werden angerechnet – das senkt den Gesamtpreis Ihrer Entrümpelung.",
        },
        {
          title: "Individuelle Planung",
          text: "Jedes Objekt ist anders – wir kalkulieren je nach Umfang, Zugänglichkeit und gewünschtem Zeitrahmen.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
        >
          <h3 className="text-xl font-semibold text-[#3A2E25] mb-3">
            {item.title}
          </h3>
          <p className="text-[#4B3C30] leading-relaxed text-[15px]">
            {item.text}
          </p>
        </div>
      ))}
    </div>

   

    {/* CTA */}
    <div className="mt-12 flex flex-wrap gap-4">
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

  {/* Декоративная линия */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>

 
{/* ===== SEKTION 5: Preisübersicht Baden ===== */}
<section
  id="preisuebersicht-baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-1 md:py10"
  aria-label="Preisübersicht Baden"
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Preisübersicht Baden
      </h2>
      <p className="mt-4 max-w-[820px] text-[17px] leading-relaxed text-[#4B3C30]">
        Nachfolgend finden Sie unsere aktuellen Richtpreise für Entrümpelungen in Baden. 
        Die Preise dienen als Orientierung und beinhalten bereits Besichtigung, 
        Arbeitszeit und Abtransport. Der endgültige Fixpreis wird nach einer kostenlosen 
        Vor-Ort-Bewertung erstellt – transparent und fair.
      </p>
    </header>

    {/* Tabelle */}
    <div className="overflow-hidden rounded-2xl border border-[#E8E1D9] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.05)]">
      <table className="w-full text-left text-sm md:text-base text-[#3A2E25]">
        <thead className="bg-[#F7F5F2] text-[#2B3A42]">
          <tr>
            <th className="px-5 py-4 font-semibold">Objekt / Umfang</th>
            <th className="px-5 py-4 font-semibold">wenig Hausrat</th>
            <th className="px-5 py-4 font-semibold">normaler Hausrat</th>
            <th className="px-5 py-4 font-semibold">viel Hausrat</th>
            <th className="px-5 py-4 font-semibold">Messie</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Keller", "ab €195", "ab €395", "ab €695", "ab €895"],
            ["kleine Wohnung", "ab €695", "ab €1.395", "ab €1.795", "ab €2.145"],
            ["große Wohnung", "ab €1.145", "ab €1.695", "ab €2.345", "ab €3.445"],
            ["Haus", "ab €895", "ab €2.145", "ab €3.445", "ab €3.945"],
            ["Dachboden", "ab €495", "ab €795", "ab €1.095", "ab €1.595"],
            ["Garage", "ab €245", "ab €445", "ab €695", "ab €895"],
            ["Lagerraum", "ab €295", "ab €495", "ab €795", "ab €1.095"],
            ["Büro / Geschäft", "ab €745", "ab €1.295", "ab €1.795", "ab €2.495"],
            ["Verlassenschaft", "nach Bewertung", "nach Bewertung", "nach Bewertung", "nach Bewertung"],
          ].map(([obj, low, mid, high, messie]) => (
            <tr
              key={obj}
              className="border-t border-[#E8E1D9] hover:bg-[#FAF9F7]/70 transition"
            >
              <td className="px-5 py-4 font-medium">{obj}</td>
              <td className="px-5 py-4">{low}</td>
              <td className="px-5 py-4">{mid}</td>
              <td className="px-5 py-4">{high}</td>
              <td className="px-5 py-4 text-[#CBB47B] font-semibold">{messie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Hinweis + CTA */}
    <p className="mt-5 text-sm text-[#7C7C7C]">
      *Alle genannten Preise sind unverbindliche Richtwerte inklusive kostenloser Besichtigung. 
      Der Fixpreis wird nach genauer Einschätzung des Arbeitsaufwands berechnet.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      
    </div>
  </div>

  {/* Dekor unten */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>

      {/* ===== SEKTION X: Entrümpelung 2500 Baden – Stadtteile & Ortsteile ===== */}
      <section
        id="stadtteile-baden"
        className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
        aria-label="Entrümpelung 2500 Baden – Stadtteile & Ortsteile"
      >
        {/* Декор фона */}
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
              Entrümpelung 2500 Baden – Stadtteile & Katastralgemeinden
            </h2>
            <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
              Wir sind in ganz <strong>Baden (PLZ 2500)</strong> für Sie unterwegs – von der
              Innenstadt bis zu den ruhigen Ortsteilen. Wählen Sie Ihren Bereich: In Kürze
              entstehen hier eigene Infoseiten mit Details zur Entrümpelung vor Ort.
            </p>
          </header>

          {/* Сетка районов */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ortsteileBaden.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border border-[#E8E1D9] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <div>
                  {/* PLZ + Name */}
                  <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280]">
                    <span className="inline-flex items-center rounded-full bg-[#F7F5F2] px-3 py-1">
                      PLZ {item.plz}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[#E8E1D9] bg-white px-3 py-1">
                      Ortsteil Baden
                    </span>
                  </div>

                  <p><b className="mt-3 text-xl font-semibold text-[#2B3A42]">
                    {item.plz} {item.name}
                  </b></p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
                    {item.label}
                  </p>
                </div>

                {/* „Link“-Stрока снизу */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#2B3A42]">
                    Entrümpelung {item.name}
                  </span>
                  <span
                    className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E1D9] text-xs text-[#2B3A42] transition group-hover:border-[#CBB47B] group-hover:text-[#CBB47B]"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Microcopy + CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="text-sm text-[#6B7280]">
              Ihr Ortsteil ist dabei – wir kommen direkt zu Ihnen nach Baden & Umgebung.
            </span>
            <a
              href="https://wa.me/436767202623"
              className="ml-auto rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
            >
              WhatsApp – kostenlose Besichtigung
            </a>
            <a
              href="tel:+436767202623"
              className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
            >
              Direkt anrufen
            </a>
          </div>
        </div>

        {/* мягкий низ */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
      </section>


{/* ===== SEKTION 6: Ablauf Entrümpelung Baden ===== */}
<section
  id="ablauf-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-22 md:py-10"
  aria-label="Ablauf Entrümpelung Baden"
>
  {/* Декор фона */}
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
        Ablauf Entrümpelung Baden
      </h2>
      <p className="mt-4 max-w-[820px] text-[17px] leading-relaxed text-[#334049]">
        Klar, strukturiert und verlässlich: Von der ersten Anfrage bis zur
        besenreinen Übergabe – jeder Schritt ist transparent und effizient geplant.
        Termine werden eingehalten, Kommunikation bleibt einfach und direkt.
      </p>
    </header>

    {/* Линия-таймлайн */}
    <div className="relative">
      <div className="absolute left-[24px] top-0 bottom-0 hidden md:block w-[2px] bg-[#E8E1D9]" aria-hidden="true" />

      <div className="space-y-6">
        {[
          {
            n: 1,
            title: "Kontakt & Terminvereinbarung",
            text:
              "Anruf, WhatsApp oder E-Mail – Sie erhalten rasch einen Termin für eine kostenlose Besichtigung in Baden & Umgebung.",
            cta: { label: "Jetzt Termin sichern", href: "https://wa.me/436767202623", primary: true },
          },
          {
            n: 2,
            title: "Kostenlose Besichtigung",
            text:
              "Wir sehen uns die Räumlichkeiten vor Ort an, klären Details und beantworten Ihre Fragen – präzise, freundlich und diskret.",
          },
          {
            n: 3,
            title: "Fixpreis-Angebot",
            text:
              "Sie erhalten ein transparentes Angebot mit Fixpreis. Alle Leistungen sind enthalten, klar formuliert und nachvollziehbar.",
          },
          {
            n: 4,
            title: "Termin & Durchführung",
            text:
              "Zum vereinbarten Zeitpunkt arbeitet unser Team zügig und ordentlich. Absprachen werden exakt eingehalten.",
          },
          {
            n: 5,
            title: "Besenreine Übergabe",
            text:
              "Abschluss mit gemeinsamer Abnahme – Sie erhalten die Räume besenrein übergeben, alles wie vereinbart.",
            cta: { label: "Unverbindliches Angebot erhalten", href: "tel:+436767202623" },
          },
        ].map((step) => (
          <div
            key={step.n}
            className="relative grid gap-4 rounded-2xl border border-[#E8E1D9] bg-white p-5 md:grid-cols-[64px_1fr_auto] md:gap-6 md:p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-shadow"
          >
            {/* Номер шага */}
            <div className="flex md:block">
              <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2B3A42] text-white text-lg font-semibold">
                {step.n}
              </div>
            </div>

            {/* Текст шага */}
            <div>
              <h3 className="text-xl font-semibold text-[#2B3A42]">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">{step.text}</p>
            </div>

            {/* CTA шага (опционально) */}
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

    {/* Блок доверия */}
    <div className="mt-12 grid gap-4 sm:grid-cols-3">
      {[
        { label: "Über 20 Jahre Erfahrung" },
        { label: "Kostenlose Besichtigung" },
        { label: "Fixpreis ohne Überraschungen" },
      ].map((b) => (
        <div
          key={b.label}
          className="rounded-2xl border border-[#E8E1D9] bg-white px-5 py-4 text-center text-[15px] font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
        >
          {b.label}
        </div>
      ))}
    </div>

    {/* Главный CTA */}
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
</section>
{/* ===== SEKTION 7: Wie funktioniert Entrümpelung in Baden? ===== */}
<section
  id="wie-funktioniert"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-28"
  aria-label="Wie funktioniert Entrümpelung in Baden?"
>
  {/* Декор фона */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        radial-gradient(60rem 30rem at 0% 0%, #E7EBEE55 0%, transparent 60%),
        radial-gradient(60rem 30rem at 100% 100%, #E7EBEE33 0%, transparent 60%)
      `,
    }}
  />

  <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Wie funktioniert Entrümpelung in Baden?
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Effizient, planbar und verlässlich: Wir kombinieren klare Kommunikation mit
        sorgfältiger Durchführung. Von der ersten Anfrage bis zur Übergabe bleibt
        alles transparent, termintreu und komfortabel für Sie.
      </p>
    </header>

    {/* 2-колоночный премиум-блок */}
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* Текстовая колонка */}
      <div>
        <div className="grid gap-5">
          {/* Карточки преимуществ */}
          {[
            {
              title: "Klare Planung & feste Zeitfenster",
              text:
                "Sie erhalten frühzeitig einen Terminrahmen und wissen genau, wann unser Team eintrifft und wann die Übergabe erfolgt.",
            },
            {
              title: "Kostenloser Vor-Ort-Termin mit Fixpreis",
              text:
                "Nach der Besichtigung erstellen wir ein verbindliches Angebot mit Fixpreis. Transparent, ohne Überraschungen.",
            },
            {
              title: "Erfahrenes Team & saubere Durchführung",
              text:
                "Unsere Teams arbeiten routiniert, sorgfältig und diskret – mit Blick fürs Detail und verlässlicher Abwicklung.",
            },
            {
              title: "Wertanrechnung möglich",
              text:
                "Geeignete Gegenstände werden fair bewertet und angerechnet – das reduziert Ihre Gesamtkosten.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#A7A9AC44] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-[20px] font-semibold text-[#2B3A42]">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Мини-бейджи доверия */}
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Über 20 Jahre Erfahrung",
            "Kostenlose Besichtigung",
            "Fixpreis-Garantie",
            "Termintreue",
          ].map((b) => (
            <span
              key={b}
              className="rounded-full border border-[#A7A9AC66] bg-white/90 px-4 py-2 text-sm text-[#2B3A42]"
            >
              {b}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
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

      {/* Визуальная колонка */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl border border-[#E8E1D9] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
          {/* Вставь своё тематическое фото Baden / Interieur */}
          <div className="relative h-[260px] w-full md:h-[360px]">
            {/* Можно использовать <Image> с реальным изображением: /images/process-baden.webp */}
            {/* Для server component ok: */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
  src="/images/baden-3th-pic.jpeg"
  alt="Ablauf der Entrümpelung in Baden"
  className="h-full w-full object-cover !h-full !w-full"
  loading="lazy"
/>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2B3A42]/30 via-transparent to-transparent" />
          </div>

          {/* Нижний блок с „Checkliste“ */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#2B3A42]">Ihr Vorteil in Baden</h3>
            <ul className="mt-3 grid gap-2 text-[15px] text-[#334049]">
              {[
                "Schnelle Termine & klare Kommunikation",
                "Fixpreis nach Besichtigung",
                "Diskret & zuverlässig",
                "Wertanrechnung bei geeigneten Stücken",
              ].map((li) => (
                <li key={li} className="flex items-start gap-2">
                  <span
                    className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "#CBB47B" }}
                    aria-hidden="true"
                  />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Золотистый отблеск снизу */}
        <div className="pointer-events-none absolute -bottom-6 left-1/2 h-24 w-[80%] -translate-x-1/2 rounded-[48px] opacity-70"
             style={{ background: "radial-gradient(60% 40% at 50% 50%, #CBB47B33, transparent)" }} />
      </div>
    </div>
  </div>
</section>
{/* ===== SEKTION 8: FAQ – Entrümpelung Baden ===== */}
<section
  id="faq-baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-28"
  aria-label="FAQ – Entrümpelung Baden"
>
  {/* Декор фона */}
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
        FAQ – Entrümpelung Baden
      </h2>
      <p className="mt-4 max-w-[820px] text-[17px] leading-relaxed text-[#334049]">
        Kurze, klare Antworten – damit Sie rasch entscheiden können. Bei weiteren Fragen
        sind wir jederzeit persönlich für Sie da.
      </p>
    </header>

    {/* Премиальный аккордеон на <details> без клиентского JS */}
    <div className="grid gap-4">
      {[
        {
          q: "Wie schnell ist ein Termin in Baden möglich?",
          a: "In der Regel binnen weniger Tage. Nennen Sie Ihren Wunschzeitraum – wir stimmen einen fixen Slot ab und halten ihn ein.",
        },
        {
          q: "Ist die Besichtigung wirklich kostenlos?",
          a: "Ja. Vor Ort klären wir alles und erstellen ein verbindliches Angebot mit Fixpreis – transparent und nachvollziehbar.",
        },
        {
          q: "Wie werden die Kosten berechnet?",
          a: "Nach Umfang, Zugänglichkeit und Zeitrahmen. Sie erhalten vorab einen Fixpreis, der alle vereinbarten Leistungen umfasst.",
        },
        {
          q: "Gibt es eine Wertanrechnung bei geeigneten Stücken?",
          a: "Ja. Geeignete Gegenstände werden fair bewertet und direkt im Angebot angerechnet – das senkt Ihre Gesamtkosten.",
        },
        {
          q: "Arbeiten Sie auch am Wochenende?",
          a: "Nach Vereinbarung möglich. Sagen Sie uns, was für Sie passt – wir planen verlässlich und termintreu.",
        },
        {
          q: "Wie läuft die Übergabe ab?",
          a: "Gemeinsame Abnahme zum Schluss. Sie erhalten die Räume besenrein übergeben – genau wie vereinbart.",
        },
        {
          q: "Bieten Sie Hilfe bei Messie-Wohnungen an?",
          a: "Ja. Diskret, strukturiert und respektvoll – mit klaren Abläufen und zuverlässiger Durchführung in Baden & Umgebung.",
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

  {/* JSON-LD для FAQPage (SEO) */}
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
              "text": "In der Regel binnen weniger Tage. Nennen Sie Ihren Wunschzeitraum – wir stimmen einen fixen Slot ab und halten ihn ein."
            }
          },
          {
            "@type": "Question",
            "name": "Ist die Besichtigung wirklich kostenlos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Vor Ort klären wir alles und erstellen ein verbindliches Angebot mit Fixpreis – transparent und nachvollziehbar."
            }
          },
          {
            "@type": "Question",
            "name": "Wie werden die Kosten berechnet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nach Umfang, Zugänglichkeit und Zeitrahmen. Sie erhalten vorab einen Fixpreis, der alle vereinbarten Leistungen umfasst."
            }
          },
          {
            "@type": "Question",
            "name": "Gibt es eine Wertanrechnung bei geeigneten Stücken?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Geeignete Gegenstände werden fair bewertet und direkt im Angebot angerechnet – das senkt Ihre Gesamtkosten."
            }
          },
          {
            "@type": "Question",
            "name": "Arbeiten Sie auch am Wochenende?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nach Vereinbarung möglich. Sagen Sie uns, was für Sie passt – wir planen verlässlich und termintreu."
            }
          },
          {
            "@type": "Question",
            "name": "Wie läuft die Übergabe ab?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gemeinsame Abnahme zum Schluss. Sie erhalten die Räume besenrein übergeben – genau wie vereinbart."
            }
          },
          {
            "@type": "Question",
            "name": "Bieten Sie Hilfe bei Messie-Wohnungen an?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Diskret, strukturiert und respektvoll – mit klaren Abläufen und zuverlässiger Durchführung in Baden & Umgebung."
            }
          }
        ]
      })
    }}
  />
</section>
{/* ===== SEKTION 9: Kontakt – Baden Entrümpelung ===== */}
<section
  id="kontakt"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
  aria-label="Kontakt – Baden Entrümpelung"
>
  {/* Декор фона */}
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
        Kontakt – Baden Entrümpelung
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Kostenlose Besichtigung & Fixpreis-Angebot. Rasche Termine in Baden & Umgebung – 
        verlässlich, diskret und mit über 20 Jahren Erfahrung.
      </p>
    </header>

    {/* Две премиум-карты: Kontakte + Direkt-CTA */}
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Karte: Kontaktdaten */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">Direkter Kontakt</h3>
        <ul className="mt-4 space-y-3 text-[#334049] text-[15px]">
          <li className="flex items-center gap-3">
            {/* phone icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#CBB47B]">
              <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1.3 1.3 0 011.3-.3l3.5 1.2c.7.3 1.1 1 .9 1.7-.7 2.1-2.8 3.6-5.1 3.6C9.7 22.4 1.6 14.3 1.6 4.9c0-2.3 1.5-4.4 3.6-5.1.7-.3 1.5.2 1.7.9l1.2 3.5c.2.5 0 1.1-.3 1.3L6.6 10.8z"/>
            </svg>
            <a href="tel:+436767202623" className="font-semibold text-[#2B3A42] hover:underline">
              +43 676 720 26 23
            </a>
          </li>
          <li className="flex items-center gap-3">
            {/* whatsapp icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#2B3A42]">
              <path d="M20 3.9A10.9 10.9 0 0012 1 11 11 0 001 12a11 11 0 001.8 6.1L1 23l5-1.7A11 11 0 1012 1c3 0 5.8 1.2 8 2.9zM12 21a9 9 0 01-4.6-1.3l-.3-.2-2.8.9.9-2.7-.2-.3A9 9 0 1112 21zm5.1-6.9c-.2-.1-1.5-.8-1.7-.9s-.4-.1-.6.2l-.8 1c-.1.1-.3.2-.6.1a6.6 6.6 0 01-1.8-1.2 7.2 7.2 0 01-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.5c0-.2-.6-1.3-.8-1.8-.2-.6-.5-.5-.7-.5h-.5c-.3 0-.6.1-.8.3a2.7 2.7 0 00-.8 2.1c0 1.2.5 2.3 1.2 3.2a11.2 11.2 0 004.3 4.1c.4.2.8.3 1.2.4.4 0 .8 0 1.1-.3.3-.4.4-.8.5-1 0-.1 0-.2-.1-.3z"/>
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
            {/* mail icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#2B3A42]">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"/>
            </svg>
            <a href="mailto:info@badenentruempelung.at" className="hover:underline">
              info@badenentruempelung.at
            </a>
          </li>
          <li className="flex items-center gap-3">
            {/* pin icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#CBB47B]">
              <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
            </svg>
            <span>Baden, Niederösterreich</span>
          </li>
        </ul>

        {/* Microcopy */}
        <p className="mt-5 text-sm text-[#6B7280]">
          Kostenlose Besichtigung, verbindlicher Fixpreis & termintreue Abwicklung.
        </p>

        {/* CTA-кнопки */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://wa.me/436767202623"
            className="inline-flex items-center justify-center rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
          >
            Jetzt per WhatsApp anfragen
          </a>
          <a
            href="tel:+436767202623"
            className="inline-flex items-center justify-center rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
          >
            Direkt anrufen
          </a>
          <a
            href="mailto:info@badenentruempelung.at?subject=Anfrage%20Baden%20Entr%C3%BCmpelung"
            className="inline-flex items-center justify-center rounded-xl border border-[#E8E1D9] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-white"
          >
            E-Mail senden
          </a>
        </div>
      </div>

      {/* Karte: Premium-Hinweise / Versprechen */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">Warum wir in Baden?</h3>
        <ul className="mt-4 grid gap-3 text-[15px] text-[#334049]">
          {[
            "Über 20 Jahre Erfahrung in Baden & Umgebung",
            "Kostenlose Besichtigung mit Fixpreis-Angebot",
            "Diskrete, saubere und termintreue Durchführung",
            "Wertanrechnung bei geeigneten Stücken möglich",
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

        {/* Большой CTA-баннер */}
        <div className="mt-8 rounded-2xl border border-[#E8E1D9] bg-[#F7F5F2] p-5">
          <p className="text-[15px] leading-relaxed text-[#2B3A42]">
            Sie möchten noch heute einen Termin sichern? Schreiben Sie uns kurz via WhatsApp 
            oder rufen Sie direkt an – wir melden uns umgehend.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://wa.me/436767202623"
              className="inline-flex items-center justify-center rounded-xl bg-[#CBB47B] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
            >
              WhatsApp starten
            </a>
            <a
              href="tel:+436767202623"
              className="inline-flex items-center justify-center rounded-xl border border-[#2B3A42] px-5 py-2.5 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
            >
              Anrufen
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Финальный крупный CTA */}
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
        Fixpreis-Angebot nach Vor-Ort-Termin – transparent & verbindlich.
      </span>
    </div>
  </div>
</section>
{/* ===== SEKTION 10: Experten-Tipps zur Entrümpelung in Baden ===== */}
<section
  id="experten-tipps"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
  aria-label="Experten-Tipps zur Entrümpelung in Baden"
>
  {/* Dekor */}
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
        Experten-Tipps zur Entrümpelung in Baden
      </h2>
      <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
        Mit guter Vorbereitung sparen Sie Zeit und Nerven. Unsere Empfehlungen basieren
        auf über 20 Jahren Erfahrung in Baden & Umgebung – klar, praxistauglich und
        direkt umsetzbar.
      </p>
    </header>

    {/* Raster der Tipps */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Frühzeitig Termine fixieren",
          text: "Sichern Sie sich Ihren Wunschslot. Je früher abgestimmt, desto reibungsloser verläuft die Durchführung.",
        },
        {
          title: "Zugänge & Parken klären",
          text: "Hauszugang, Stiegenhaus, Lift und Parkmöglichkeit kurz prüfen. Ein reservierter Platz spart viel Zeit.",
        },
        {
          title: "Wertsachen separat halten",
          text: "Dokumente, Schlüssel, Schmuck und Erinnerungsstücke vorab beiseitelegen – so bleibt alles im Blick.",
        },
        {
          title: "Fotos vorab senden",
          text: "Kurze Fotodoku per WhatsApp hilft bei der Einschätzung. Dadurch erhalten Sie rasch ein passgenaues Angebot.",
        },
        {
          title: "Fixpreis nach Besichtigung",
          text: "Vor Ort entsteht ein verbindliches Angebot. Transparent, klar formuliert und ohne Überraschungen.",
        },
        {
          title: "Wertanrechnung nutzen",
          text: "Geeignete Stücke werden fair bewertet und im Angebot angerechnet – das senkt die Gesamtkosten.",
        },
        {
          title: "Zeitfenster planen",
          text: "Blocken Sie am Durchführungstag ein realistisches Zeitfenster für Schlüsselübergabe und Abnahme.",
        },
        {
          title: "Nach der Übergabe",
          text: "Nach Abschluss kurz durchgehen: Zählerstände, Fotos der Räume und finales Häkchen bei der Abnahme.",
        },
        {
          title: "Wochenend-Option",
          text: "Bei Bedarf sind Einsätze am Wochenende nach Vereinbarung möglich – einfach bei der Anfrage erwähnen.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        >
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full"
               style={{ background: "#CBB47B22", color: "#CBB47B", border: "1px solid #E8E1D9" }}>
            {/* dezentes Icon (Check) */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z"/>
            </svg>
          </div>
          <p><b className="text-[18px] font-semibold text-[#2B3A42]">{item.title}</b></p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">{item.text}</p>
        </div>
      ))}
    </div>

    {/* Microcopy + CTA */}
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <span className="text-sm text-[#6B7280]">
        Tipp: Mit einer kurzen Fotodoku und klaren Eckdaten erhalten Sie besonders schnell ein Fixpreis-Angebot.
      </span>
      <a
        href="https://wa.me/436767202623"
        className="ml-auto rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        WhatsApp – kostenlose Besichtigung
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  {/* sanfter Abschluss */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>


      






    </>
  );
}
