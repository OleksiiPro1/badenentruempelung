// app/verlassenschaften-baden/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verlassenschaft Baden – Diskrete Unterstützung & professionelle Hilfe",
  description:
    "Professionelle Verlassenschaft Baden mit kostenloser Besichtigung, fairer Wertanrechnung und diskreter Abwicklung. Jetzt Termin sichern.",
};

export default function VerlassenschaftBadenPage() {
  return (
    <>
    {/* ===== SEKTION 1: Verlassenschaft Baden – diskrete Unterstützung für Erben ===== */}
<section
  id="verlassenschaft-baden"
  aria-label="Verlassenschaft Baden – diskrete Unterstützung für Erben"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
>
  {/* Deko-Hintergrund */}
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

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    {/* Intro */}
    <header className="mb-10 md:mb-12 max-w-[840px]">
      <span className="inline-flex items-center rounded-full border border-[#E8E1D9] bg-white px-4 py-1.5 text-xs font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
        Verlassenschaft Baden • diskret & respektvoll
      </span>
      <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#2B3A42]">
        Verlassenschaft Baden – diskrete Unterstützung für Erben
      </h1>
      <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Eine Verlassenschaft in Baden bringt oft nicht nur wertvolle Erinnerungen, sondern auch
        viele Entscheidungen mit sich. Für Angehörige ist es eine sensible Phase, in der Klarheit,
        Ruhe und ein verlässlicher Partner an der Seite besonders wichtig sind. Genau hier setzt
        unsere Begleitung an: strukturiert, respektvoll und mit viel Erfahrung.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Wir unterstützen Erben in Baden und Umgebung dabei, Wohnräume, Häuser und Nebenflächen
        geordnet zu übergeben – sei es im Zuge eines Verkaufs, einer Vermietung oder der
        familieninternen Weitergabe. Jeder Schritt wird transparent erklärt, Entscheidungen
        werden gemeinsam getroffen.
      </p>
    </header>
    {/* Hero-Bild – stilvoll integrierter Bildblock */}
<div className="mb-14">
  <div className="overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.08)] border border-[#E8E1D9]">
    <img
      src="/images/verlassenschaften-baden.webp"
      alt="Verlassenschaft Baden"
      className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover object-center"
    />
  </div>
</div>


    {/* 2-Spalten-Layout: Text + Vorteile-Karte */}
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
      {/* Linke Spalte – Situationen & Herausforderungen */}
      <div className="space-y-7">
        {/* Situationen */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
            In welchen Situationen eine Verlassenschaft in Baden entsteht
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Häufig entstehen Verlassenschaften in Baden nach dem Ableben eines Familienmitglieds
            oder einer nahestehenden Person. Manchmal besteht ein klarer Plan, manchmal stehen
            die Erben vor einer Fülle an Gegenständen, Möbeln und Erinnerungen, ohne genau zu
            wissen, wo sie beginnen sollen.
          </p>
          <ul className="mt-3 grid gap-2 text-[15px] text-[#334049]">
            {[
              "Wohnung oder Haus in Baden soll für den Verkauf vorbereitet werden",
              "Übergabe der Immobilie an Kinder oder andere Angehörige",
              "Räumung einer Mietwohnung nach einem Todesfall",
              "Auflösung von Nebenflächen wie Keller, Dachboden oder Garage",
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
        </div>

        {/* Emotionale & organisatorische Herausforderungen */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
            Emotionale und organisatorische Herausforderungen für Angehörige
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Für viele Hinterbliebene ist es keine gewöhnliche Räumung, sondern ein sehr persönlicher
            Schritt. Der Nachlass erzählt Lebensgeschichten – und genau so behandeln wir ihn auch:
            mit Respekt, Rücksicht und ruhiger, professioneller Vorgehensweise.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Gleichzeitig gibt es Fristen, Termine mit Hausverwaltung, Notar oder Makler und
            klare Vorgaben, wann ein Objekt übergabefertig sein muss. Diese Mischung aus Emotion
            und Organisation kann belastend sein. Unser Ziel ist es, Ihnen hier spürbar Druck
            zu nehmen und Ihnen durch klare Abläufe Sicherheit zu geben.
          </p>
        </div>

        {/* Warum spezialisierter Service */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
            Warum ein spezialisierter Verlassenschaftsservice in Baden sinnvoll ist
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Ein erfahrener Verlassenschaftsprofi kennt die typischen Abläufe in Baden, weiß, worauf
            Erben achten müssen, und koordiniert auf Wunsch Termine mit weiteren Beteiligten. Sie
            profitieren von strukturierten Schritten, nachvollziehbarer Kommunikation und einem Team,
            das seit vielen Jahren mit sensiblen Situationen vertraut ist.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Gerade wenn mehrere Erben involviert sind oder Entscheidungen auf Distanz getroffen werden
            müssen, ist ein klar dokumentierter, professioneller Ablauf entscheidend. So bleibt der
            Überblick gewahrt, und alle Beteiligten können sich auf eine geordnete Übergabe verlassen.
          </p>
        </div>
      </div>

      {/* Rechte Spalte – Premium-Vorteilsbox */}
      <aside className="rounded-3xl border border-[#E8E1D9] bg-white p-6 md:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <h2 className="text-lg md:text-xl font-semibold text-[#2B3A42]">
          Ihre Vorteile bei Verlassenschaften in Baden
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Diskrete Abwicklung, klare Abläufe und ein Ansprechpartner, der Sie von der ersten
          Anfrage bis zur Übergabe begleitet.
        </p>

        <ul className="mt-4 grid gap-3 text-[15px] text-[#334049]">
          {[
            "Über 20 Jahre Erfahrung mit Verlassenschaften in Baden & Umgebung",
            "Diskrete, respektvolle Vorgehensweise gegenüber Angehörigen",
            "Fixpreis-Angebot nach kostenloser Besichtigung",
            "Koordination mit Notar, Hausverwaltung oder Makler möglich",
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

        {/* CTA-Block */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://wa.me/436767202623"
            className="inline-flex items-center justify-center rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
          >
            WhatsApp – Erstbesichtigung vereinbaren
          </a>
          <a
            href="tel:+436767202623"
            className="inline-flex items-center justify-center rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
          >
            Direkt anrufen
          </a>
        </div>

        <p className="mt-4 text-[13px] text-[#6B7280]">
          Kostenlose Besichtigung in Baden, klares Fixpreis-Angebot und eine geordnete
          Übergabe – ohne unnötigen Stress für die Familie.
        </p>
      </aside>
    </div>
  </div>

  {/* sanfter Abschluss unten */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION 2: Verlassenschaftsankauf Baden – faire Bewertung und Wertanrechnung ===== */}
<section
  id="verlassenschaftsankauf-baden"
  aria-label="Verlassenschaftsankauf Baden – faire Bewertung und Wertanrechnung"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
>
  {/* Dekorative Hintergründe */}
  <div
    className="pointer-events-none absolute inset-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        radial-gradient(70rem 40rem at 0% 20%, #E8E1D955 0%, transparent 70%),
        radial-gradient(60rem 30rem at 100% 90%, #E8E1D933 0%, transparent 70%)
      `,
    }}
  />

  <div className="relative mx-auto max-w-[1180px] px-6 md:px-10">
    {/* Header */}
    <header className="max-w-[860px] mb-12">
      <span className="inline-flex items-center rounded-full border border-[#E8E1D9] bg-white px-4 py-1.5 text-xs font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
        Baden • Wertanrechnung & Ankauf
      </span>

      <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-[#2B3A42]">
        Verlassenschaftsankauf Baden – faire Bewertung und Wertanrechnung
      </h2>

      <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#4B3C30]">
        Bei einer Verlassenschaft in Baden können sich wertvolle Gegenstände befinden – Möbel,
        Gemälde, Schmuck, Sammlungen oder Einzelstücke mit besonderem Charakter. Unsere
        Experten bewerten diese Objekte direkt vor Ort und geben Ihnen Klarheit darüber,
        welche Stücke angekauft werden können.
      </p>

      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#4B3C30]">
        Die Wertanrechnung reduziert unmittelbar die Gesamtkosten der Räumung und sorgt dafür,
        dass hochwertige Objekte in gute Hände kommen. Transparent, fair und nachvollziehbar.
      </p>
    </header>

    {/* 3 Premium-Karten */}
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Faire Bewertung",
          text: "Vor Ort begutachten wir Antiquitäten, Möbel, Bilder, Schmuck und Sammlerstücke – transparent und nachvollziehbar.",
        },
        {
          title: "Direkter Ankauf",
          text: "Wertvolle Gegenstände werden sofort angerechnet. Der Abzug wird klar im Angebot ausgewiesen.",
        },
        {
          title: "Kostensenkung",
          text: "Durch die Wertanrechnung reduzieren sich die Gesamtkosten erheblich – ein Vorteil speziell für Erben.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
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

    {/* CTA-Block */}
    <div className="mt-12 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        WhatsApp für Bewertung in Baden
      </a>

      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>

    <p className="mt-4 text-[13px] text-[#6B7280]">
      Kostenlose Besichtigung & sofortige Wertanrechnung – direkt in Baden und Umgebung.
    </p>
  </div>

  {/* Abschluss unten */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION 3: Verlassenschaftsräumung Baden – komplette Auflösung aus einer Hand ===== */}
<section
  id="verlassenschaftsraeumung-baden"
  aria-label="Verlassenschaftsräumung Baden – komplette Auflösung aus einer Hand"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
>
  {/* Deko-Hintergrund */}
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

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    {/* Header */}
    <header className="mb-10 max-w-[860px]">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B3A42]">
        Verlassenschaftsräumung Baden – komplette Auflösung aus einer Hand
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Eine Verlassenschaftsräumung in Baden bedeutet für viele Familien: Abschied nehmen,
        Entscheidungen treffen, Fristen einhalten. Unser Team übernimmt die komplette
        Abwicklung – von der ersten Besichtigung bis zur besenreinen Übergabe – klar
        strukturiert und mit viel Rücksicht auf die Situation.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Ob kleine Wohnung, großzügiges Haus oder Objekt mit Nebenräumen: Wir planen
        jeden Schritt präzise, koordinieren Abläufe und sorgen dafür, dass am Ende alles
        vorbereitet ist – für Verkauf, Vermietung oder die Übergabe innerhalb der Familie.
      </p>
    </header>

    {/* 2-Spalten-Layout */}
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
      {/* Linke Spalte – von der Wohnung bis zum Haus */}
      <div className="space-y-7">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
            Von der kleinen Wohnung bis zum Haus in Baden & Umgebung
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            In Baden und Umgebung betreuen wir Verlassenschaften in ganz unterschiedlichen
            Größen – von kompakten Stadtwohnungen über Altbauten bis hin zu Häusern mit
            Garten, Keller und Dachboden. Für jede Objektart gibt es erprobte Abläufe, damit
            der Zeitplan eingehalten wird und alle Beteiligten Klarheit haben.
          </p>
          <ul className="mt-3 grid gap-2 text-[15px] text-[#334049]">
            {[
              "Stadtwohnungen und Altbau-Objekte im Zentrum von Baden",
              "Häuser mit mehreren Etagen und Nebenräumen",
              "Reihenhäuser und Wohnungen in Wohnanlagen",
              "Objekte mit Keller, Dachboden, Garage oder Nebengebäuden",
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
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
            Sorgsamer Umgang mit persönlichen Erinnerungsstücken
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            In vielen Nachlässen finden sich Gegenstände mit hohem emotionalem Wert.
            Auf Wunsch gehen wir Raum für Raum mit Ihnen durch, markieren ausgewählte Stücke
            und trennen klar zwischen Dingen, die bleiben sollen, und jenen, die im Zuge der
            Räumung übernommen werden können.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            So behalten Sie jederzeit den Überblick – und wissen genau, welche Erinnerungen
            gesichert sind, bevor wir die restliche Räumung übernehmen.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
            Besenreine Übergabe für Verkauf, Vermietung oder Übergabe an die Familie
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Am Ende steht immer ein klares Ziel: ein geordnetes, leeres Objekt, das ohne
            zusätzlichen Aufwand übergeben werden kann. Nach der Verlassenschaftsräumung
            gehen wir die Räume nochmals mit Ihnen durch und stellen sicher, dass alles
            wie vereinbart vorbereitet ist.
          </p>
          <ul className="mt-3 grid gap-2 text-[15px] text-[#334049]">
            {[
              "Übergabefertig für Verkauf oder Vermietung",
              "Saubere Basis für Renovierung oder Umbau",
              "Klare Dokumentation für Erben, Makler oder Notar",
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
        </div>
      </div>

      {/* Rechte Spalte – Premium-Karte „Komplette Abwicklung“ */}
      <aside className="rounded-3xl border border-[#E8E1D9] bg-white p-6 md:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <h3 className="text-lg md:text-xl font-semibold text-[#2B3A42]">
          Komplette Auflösung aus einer Hand
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein Ansprechpartner, klare Schritte, verlässliche Durchführung – so wird die
          Verlassenschaftsräumung in Baden für Sie planbar und überschaubar.
        </p>

        <ul className="mt-4 grid gap-3 text-[15px] text-[#334049]">
          {[
            "Kostenlose Besichtigung in Baden & Umgebung",
            "Fixpreis-Angebot mit klarer Leistungsbeschreibung",
            "Erfahrenes Team für Wohnungen, Häuser und Nebenflächen",
            "Auf Wunsch enge Abstimmung mit Notar, Hausverwaltung oder Makler",
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

        {/* CTA */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://wa.me/436767202623"
            className="inline-flex items-center justify-center rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
          >
            Verlassenschaftsräumung anfragen
          </a>
          <a
            href="tel:+436767202623"
            className="inline-flex items-center justify-center rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
          >
            Direkt anrufen
          </a>
        </div>

        <p className="mt-4 text-[13px] text-[#6B7280]">
          Termine oft kurzfristig möglich – besonders in Baden und dem direkten Umland.
        </p>
      </aside>
    </div>
  </div>

  {/* sanfter Abschluss unten */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION: Besonderheiten bei Verlassenschaften in Baden und Umgebung ===== */}
<section
  id="besonderheiten-baden"
  aria-label="Besonderheiten bei Verlassenschaften in Baden und Umgebung"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:p10"
>
  {/* Hintergrund-Deko */}
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
    {/* Header */}
    <header className="mb-10 max-w-[860px]">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B3A42]">
        Besonderheiten bei Verlassenschaften in Baden und Umgebung
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Baden und das direkte Umland haben ihren ganz eigenen Charakter – von historischen
        Altbauten bis zu Häusern mit großzügigen Gärten. Verlassenschaften in dieser Region
        bringen daher oft spezielle Rahmenbedingungen mit sich, auf die wir unsere Abläufe
        abgestimmt haben.
      </p>
    </header>

    {/* 3-Spalten-Grid / stacked auf Mobil */}
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Karte 1 – Typische Objekte */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Typische Objekte in Baden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In Baden finden sich viele unterschiedliche Immobilienarten – jede mit ihren
          eigenen Anforderungen bei einer Verlassenschaft.
        </p>
        <ul className="mt-3 grid gap-2 text-[15px] text-[#334049]">
          {[
            "Altbauwohnungen im Zentrum von Baden",
            "Villen und Einfamilienhäuser in ruhigen Lagen",
            "Reihenhäuser und Wohnanlagen in den Ortsteilen",
            "Objekte mit Keller, Dachboden, Garage oder Nebengebäuden",
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
      </div>

      {/* Karte 2 – Zufahrten, Stiegenhäuser, Parken */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Zufahrten, Stiegenhäuser & Parkmöglichkeiten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Gerade im Stadtgebiet von Baden sind Zufahrten, Stiegenhäuser und Parkflächen
          oft enger oder stärker genutzt. Wir berücksichtigen das in der Planung.
        </p>
        <ul className="mt-3 grid gap-2 text-[15px] text-[#334049]">
          {[
            "Planung der Anfahrt und Haltemöglichkeiten vor Ort",
            "Rücksicht auf Nachbarn und Hausgemeinschaft",
            "Einschätzung, welche Tragewege realistisch sind",
            "Koordinierte Zeitfenster, um den Ablauf zu entlasten",
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
        <p className="mt-3 text-[14px] text-[#6B7280]">
          Ergebnis: Ein geordneter Ablauf, der Anwohner, Hausverwaltung und Erben gleichermaßen entlastet.
        </p>
      </div>

      {/* Karte 3 – Zusammenarbeit mit Hausverwaltungen, Maklern, Notaren */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Zusammenarbeit mit Hausverwaltungen, Maklern & Notaren
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Auf Wunsch stimmen wir uns eng mit den beteiligten Stellen ab, damit alle
          Fristen und Vorgaben eingehalten werden.
        </p>
        <ul className="mt-3 grid gap-2 text-[15px] text-[#334049]">
          {[
            "Abstimmung von Terminen mit Hausverwaltungen",
            "Vorbereitung für Besichtigungstermine von Maklern",
            "Klarer Zeitplan in Verbindung mit notariellen Abläufen",
            "Dokumentation der Übergabe für alle Beteiligten",
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
        <p className="mt-3 text-[14px] text-[#6B7280]">
          So behalten Sie auch bei komplexeren Verlassenschaften mit mehreren Beteiligten den Überblick.
        </p>
      </div>
    </div>

    {/* kleiner Vertrauen-Strip unten */}
    <div className="mt-10 flex flex-wrap gap-3 text-[14px] text-[#334049]">
      {[
        "Regionale Erfahrung in Baden & Umgebung",
        "Klar strukturierte Abläufe",
        "Diskrete und verlässliche Abwicklung",
      ].map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-[#E8E1D9] bg-white/80 px-4 py-1.5"
        >
          {badge}
        </span>
      ))}
    </div>
  </div>

  {/* sanfter Abschluss unten */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION: Ablauf einer Verlassenschaft in Baden – Schritt für Schritt ===== */}
<section
  id="ablauf-verlassenschaft-baden"
  aria-label="Ablauf einer Verlassenschaft in Baden – Schritt für Schritt"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
>
  {/* Deko-Hintergrund */}
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

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    {/* Header */}
    <header className="mb-12 md:mb-16 max-w-[860px]">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B3A42]">
        Ablauf einer Verlassenschaft in Baden – Schritt für Schritt
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Klar, strukturiert und nachvollziehbar: Von der ersten Anfrage bis zur
        Übergabe führen wir Sie Schritt für Schritt durch den gesamten Prozess.
        So behalten Sie in einer emotional herausfordernden Situation jederzeit den Überblick.
      </p>
    </header>

    {/* Timeline-Container */}
    <div className="relative">
      {/* Vertikale Linie auf Desktop */}
      <div
        className="pointer-events-none absolute left-[24px] top-0 bottom-0 hidden w-[2px] bg-[#E8E1D9] md:block"
        aria-hidden="true"
      />

      <div className="space-y-6">
        {[
          {
            n: 1,
            title: "Erste Kontaktaufnahme & Terminvereinbarung",
            text:
              "Sie erreichen uns telefonisch, per E-Mail oder WhatsApp. Gemeinsam finden wir einen raschen Termin für eine Besichtigung in Baden oder Umgebung.",
            cta: {
              label: "Jetzt Termin anfragen",
              href: "https://wa.me/436767202623",
              primary: true,
            },
          },
          {
            n: 2,
            title: "Kostenlose Besichtigung & Aufnahme des Nachlasses",
            text:
              "Vor Ort verschaffen wir uns ein genaues Bild der Wohn- oder Haussituation, gehen Räume und Nebenflächen durch und klären Ihre Wünsche und Prioritäten.",
          },
          {
            n: 3,
            title: "Bewertung & Wertanrechnung geeigneter Gegenstände",
            text:
              "Möbel, Bilder, Schmuck, Sammlungen und besondere Stücke werden transparent bewertet. Geeignete Objekte können angerechnet werden und senken den Gesamtbetrag.",
          },
          {
            n: 4,
            title: "Transparentes Angebot mit Fixpreis",
            text:
              "Auf Basis der Besichtigung erhalten Sie ein klares Angebot mit Fixpreis – inklusive aller vereinbarten Leistungen und der berücksichtigten Wertanrechnung.",
          },
          {
            n: 5,
            title: "Terminfixierung & Vorbereitung",
            text:
              "Nach Ihrer Zusage wird der Durchführungstermin fixiert. Wir planen Personal, Zeitfenster und Abläufe so, dass alles im vereinbarten Rahmen erledigt wird.",
          },
          {
            n: 6,
            title: "Durchführung der Verlassenschaft in Baden",
            text:
              "Unser Team arbeitet strukturiert und zügig. Absprachen werden eingehalten, sensible Bereiche werden mit besonderer Sorgfalt behandelt.",
          },
          {
            n: 7,
            title: "Gemeinsame Kontrolle & Übergabe",
            text:
              "Zum Abschluss gehen wir die Räumlichkeiten mit Ihnen durch. Nach der Kontrolle erfolgt die Übergabe – bereit für Verkauf, Vermietung oder Weitergabe in der Familie.",
            cta: {
              label: "Unverbindliches Angebot erhalten",
              href: "tel:+436767202623",
              primary: false,
            },
          },
        ].map((step) => (
          <article
            key={step.n}
            className="relative grid gap-4 rounded-2xl border border-[#E8E1D9] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] md:grid-cols-[64px_1fr_auto] md:gap-6 md:p-6"
          >
            {/* Nummer / Marker */}
            <div className="flex md:block">
              <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2B3A42] text-lg font-semibold text-white">
                {step.n}
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2B3A42]">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
                {step.text}
              </p>
            </div>

            {/* CTA pro Schritt (optional) */}
            <div className="md:self-center">
              {step.cta ? (
                step.cta.primary ? (
                  <a
                    href={step.cta.href}
                    className="inline-flex items-center justify-center rounded-xl bg-[#CBB47B] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
                  >
                    {step.cta.label}
                  </a>
                ) : (
                  <a
                    href={step.cta.href}
                    className="inline-flex items-center justify-center rounded-xl border border-[#2B3A42] px-5 py-2.5 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
                  >
                    {step.cta.label}
                  </a>
                )
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* Vertrauens-Streifen unten */}
    <div className="mt-12 grid gap-4 sm:grid-cols-3">
      {[
        "Über 20 Jahre Erfahrung mit Verlassenschaften",
        "Kostenlose Besichtigung & Fixpreis-Angebot",
        "Regionale Präsenz direkt in Baden",
      ].map((label) => (
        <div
          key={label}
          className="rounded-2xl border border-[#E8E1D9] bg-white px-5 py-4 text-center text-[15px] font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
        >
          {label}
        </div>
      ))}
    </div>

    {/* Haupt-CTA unten */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Kostenlose Besichtigung in Baden
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
      <span className="text-sm text-[#6B7280]">
        Fixpreis-Angebot nach Vor-Ort-Termin – transparent & nachvollziehbar.
      </span>
    </div>
  </div>

  {/* sanfter Abschluss unten */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION: Kosten einer Verlassenschaft in Baden ===== */}
<section
  id="kosten-verlassenschaft-baden"
  aria-label="Kosten einer Verlassenschaft in Baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:p10"
>
  {/* Hintergrund-Deko */}
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
    {/* Header */}
    <header className="mb-10 max-w-[860px]">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B3A42]">
        Kosten einer Verlassenschaft in Baden – transparent & nachvollziehbar
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Jede Verlassenschaft in Baden ist anders – Lage, Größe, Umfang und besondere
        Rahmenbedingungen unterscheiden sich von Fall zu Fall. Damit Sie dennoch ein
        klares Gefühl für den finanziellen Rahmen bekommen, arbeiten wir mit einer
        Kombination aus kostenloser Besichtigung, Fixpreis-Angebot und nachvollziehbarer
        Wertanrechnung.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Sie erhalten erst dann ein verbindliches Angebot, wenn wir das Objekt vor Ort
        gesehen haben. So bleiben die Kosten fair, realistisch und gut planbar – ohne
        pauschale Überraschungen im Nachhinein.
      </p>
    </header>

    {/* Faktoren + Richtwerte */}
    <div>
      {/* Linke Spalte – Faktoren & Erklärung */}
      <div className="space-y-7">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
            Welche Faktoren beeinflussen die Kosten?
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Für die Kalkulation einer Verlassenschaft in Baden spielen mehrere Punkte
            eine Rolle. Diese werden bei der kostenlosen Besichtigung Schritt für Schritt
            erfasst und mit Ihnen besprochen.
          </p>
          <ul className="mt-3 grid gap-2 text-[15px] text-[#334049]">
            {[
              "Größe des Objekts (Wohnung, Haus, Nebengebäude)",
              "Menge und Art des vorhandenen Hausrats",
              "Zugänglichkeit, Stiegenhaus, Lift und Zufahrt",
              "Zeitlicher Rahmen und gewünschte Terminlage",
              "Mögliche Wertanrechnung geeigneter Gegenstände",
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
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
            Wie hilft die Wertanrechnung bei den Gesamtkosten?
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Befinden sich im Nachlass hochwertige Stücke, können diese im Zuge der
            Verlassenschaftsabwicklung bewertet und angerechnet werden. Der entsprechende
            Betrag wird direkt im Angebot berücksichtigt und reduziert so die Gesamtkosten.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
            Dadurch entsteht ein transparenter Ausgleich: Sie erhalten eine professionelle
            Räumung, während zugleich vorhandene Werte fair berücksichtigt werden.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/436767202623"
            className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
          >
            Kostenlose Besichtigung in Baden
          </a>
          <a
            href="tel:+436767202623"
            className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
          >
            Fixpreis-Angebot anfragen
          </a>
        </div>
      </div>

      
    </div>
  </div>

  {/* sanfter Abschluss unten */}
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

    
  </div>

  {/* Dekor unten */}
  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>

{/* ===== SEKTION: Praxisbeispiele aus Baden ===== */}
<section
  id="praxisbeispiele-baden"
  aria-label="Praxisbeispiele aus Baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-10"
>
  {/* Deko-Hintergrund */}
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

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-10 max-w-[860px]">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B3A42]">
        Praxisbeispiele aus Baden
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Jede Verlassenschaft in Baden hat ihre eigene Geschichte. Die folgenden Beispiele
        zeigen, wie unterschiedlich die Ausgangssituationen sein können – und wie ein
        strukturierter, respektvoller Ablauf den Angehörigen spürbar Druck nimmt.
      </p>
    </header>

    <div className="grid gap-6 md:grid-cols-3">
      {/* Beispiel 1 */}
      <article className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Verlassenschaft in einer Wohnung im Zentrum von Baden
        </h3>
        <p className="mt-3 text-[14px] font-medium text-[#6B7280]">
          Altbauwohnung, Nähe Zentrum • Übergabe an Makler zur Weitervermietung
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Eine Altbauwohnung im Zentrum von Baden sollte nach einem Todesfall rasch und
          geordnet übergeben werden. Die Erben lebten teilweise nicht vor Ort, mussten
          aber Fristen mit Hausverwaltung und Makler einhalten.
        </p>
        <ul className="mt-3 grid gap-2 text-[14px] text-[#334049]">
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Kurzfristige Besichtigung und Klarstellung aller Termine.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Markierung von Erinnerungsstücken in Abstimmung mit den Erben.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Fixpreis-Angebot, Durchführung innerhalb eines Tages.</span>
          </li>
        </ul>
        <p className="mt-3 text-[14px] text-[#6B7280]">
          Ergebnis: Besenreine Wohnung, termingerechte Übergabe an den Makler, klare Dokumentation für alle Erben.
        </p>
      </article>

      {/* Beispiel 2 */}
      <article className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Auflösung eines Hauses mit Garten in Baden Umgebung
        </h3>
        <p className="mt-3 text-[14px] font-medium text-[#6B7280]">
          Einfamilienhaus mit Keller, Dachboden & Garage • Vorbereitung für Verkauf
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein Haus in der Umgebung von Baden sollte für den Verkauf vorbereitet werden.
          Neben Wohnräumen waren auch Keller, Dachboden und Garage stark genutzt.
        </p>
        <ul className="mt-3 grid gap-2 text-[14px] text-[#334049]">
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Zweiteilige Durchführung – zuerst Haus, dann Nebenbereiche.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Wertanrechnung bei ausgewählten Möbelstücken und Bildern.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Fix definierter Übergabetermin für den Kaufvertrag.</span>
          </li>
        </ul>
        <p className="mt-3 text-[14px] text-[#6B7280]">
          Ergebnis: Verkaufsklare Immobilie, klare Kostenstruktur, reibungslose Abstimmung mit Makler und Käuferseite.
        </p>
      </article>

      {/* Beispiel 3 */}
      <article className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Diskrete Unterstützung bei einer sensiblen Familiensituation
        </h3>
        <p className="mt-3 text-[14px] font-medium text-[#6B7280]">
          Mehrere Erben, teilweise im Ausland • emotionale Ausnahmesituation
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Bei dieser Verlassenschaft in Baden waren mehrere Familienmitglieder beteiligt,
          die teilweise weit entfernt lebten. Die Situation war emotional belastend,
          gleichzeitig mussten Fristen eingehalten werden.
        </p>
        <ul className="mt-3 grid gap-2 text-[14px] text-[#334049]">
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Klare Dokumentation aller Schritte für alle Erben.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Videotelefonie bei der Besichtigung für Angehörige im Ausland.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#CBB47B" }} />
            <span>Besonders behutsames Vorgehen bei persönlichen Stücken.</span>
          </li>
        </ul>
        <p className="mt-3 text-[14px] text-[#6B7280]">
          Ergebnis: Geordnete Übergabe, Einigung aller Beteiligten, spürbare Entlastung für die Familie.
        </p>
      </article>
    </div>

    {/* Kleine CTA-Leiste */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Ähnlichen Fall besprechen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
</section>
{/* ===== SEKTION: Ihre Vorteile mit einem spezialisierten Verlassenschaftsprofi in Baden ===== */}
<section
  id="vorteile-verlassenschaft-baden"
  aria-label="Ihre Vorteile mit einem spezialisierten Verlassenschaftsprofi in Baden"
  className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
>
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
    <header className="mb-10 max-w-[860px]">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B3A42]">
        Ihre Vorteile mit einem spezialisierten Verlassenschaftsprofi in Baden
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Verlassenschaften sind sensibel, organisatorisch anspruchsvoll und oft zeitkritisch.
        Mit einem erfahrenen Partner an Ihrer Seite gewinnen Sie Klarheit, Struktur und
        Verlässlichkeit – von der ersten Anfrage bis zur Übergabe.
      </p>
    </header>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Vorteil 1 */}
      <article className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Über 20 Jahre Erfahrung mit Nachlässen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Seit vielen Jahren begleiten wir Familien in Baden und Niederösterreich bei
          Verlassenschaften – vom kleinen Stadtobjekt bis zum großzügigen Haus. Sie
          profitieren von eingespielten Abläufen, klarer Kommunikation und Routine in
          anspruchsvollen Situationen.
        </p>
      </article>

      {/* Vorteil 2 */}
      <article className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Diskretion, Zuverlässigkeit und klare Abläufe
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wir arbeiten unauffällig, halten vereinbarte Zeiten ein und erklären jeden Schritt
          verständlich. So wissen Sie jederzeit, was als Nächstes passiert, und können sich
          auf eine geordnete Abwicklung verlassen.
        </p>
      </article>

      {/* Vorteil 3 */}
      <article className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Faire Wertanrechnung statt nur Räumung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Bei geeigneten Gegenständen erfolgt eine faire Bewertung und Wertanrechnung.
          Dadurch wird nicht nur geräumt, sondern vorhandene Werte werden berücksichtigt
          und in die Kalkulation einbezogen – ein Plus insbesondere für Erben.
        </p>
      </article>

      {/* Vorteil 4 */}
      <article className="rounded-3xl border border-[#E8E1D9] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Regionale Präsenz – Verlassenschaften direkt in Baden und Niederösterreich
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Durch die regionale Ausrichtung kennen wir die Gegebenheiten in Baden und
          Niederösterreich sehr gut – von typischen Objektarten bis hin zu Abläufen mit
          Verwaltungen, Maklern und anderen Beteiligten. Das macht die Planung deutlich einfacher.
        </p>
      </article>
    </div>

    {/* CTA-Leiste */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Kostenlose Besichtigung in Baden
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Direkt anrufen
      </a>
    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
</section>
{/* ===== SEKTION: FAQ – Verlassenschaft Baden ===== */}
<section
  id="faq-verlassenschaft-baden"
  aria-label="FAQ – Verlassenschaft Baden"
  className="relative overflow-hidden bg-[#FAFAFA] py-20 md:p-10"
>
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

  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <header className="mb-10 max-w-[820px]">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B3A42]">
        FAQ – Verlassenschaft Baden
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Die wichtigsten Fragen rund um Verlassenschaften in Baden – kurz und klar
        beantwortet. Für alles Weitere stehen wir Ihnen persönlich zur Verfügung.
      </p>
    </header>

    <div className="grid gap-4">
      {[
        {
          q: "Wie schnell kann ein Termin in Baden organisiert werden?",
          a: "In vielen Fällen ist ein Besichtigungstermin innerhalb weniger Tage möglich. Nennen Sie uns Ihren bevorzugten Zeitraum – wir stimmen einen fixen Termin ab und halten ihn ein.",
        },
        {
          q: "Ist die Besichtigung kostenlos und unverbindlich?",
          a: "Ja. Die Besichtigung in Baden und Umgebung ist für Sie kostenlos und unverbindlich. Auf dieser Basis erstellen wir ein klares Fixpreis-Angebot.",
        },
        {
          q: "Was passiert mit Gegenständen, die nicht übernommen werden?",
          a: "Bereits bei der Besichtigung wird besprochen, welche Gegenstände bleiben, welche angekauft werden können und welche vollständig entfernt werden sollen. So ist von Anfang an klar, was mit welchen Stücken geschieht.",
        },
        {
          q: "Wie läuft eine Verlassenschaft ab, wenn mehrere Erben beteiligt sind?",
          a: "Wir stimmen die Schritte so ab, dass alle relevanten Personen informiert sind – etwa durch gemeinsame Termine, Protokolle oder digitale Abstimmung. Auf Wunsch dokumentieren wir die einzelnen Schritte ausführlich.",
        },
        {
          q: "Können auch nur einzelne Räume oder Teilbereiche aufgelöst werden?",
          a: "Ja. Häufig werden zunächst einzelne Bereiche wie Keller, Dachboden oder ein Teil der Wohnräume bearbeitet. Wir richten uns nach Ihrem Bedarf und erstellen auch für Teilbereiche ein transparentes Angebot.",
        },
        {
          q: "Was ist, wenn der Nachlass sehr umfangreich oder lange unberührt ist?",
          a: "Gerade umfangreiche oder länger unberührte Nachlässe profitieren von einem strukturierten Vorgehen. Wir planen ausreichend Zeit und Personal ein und besprechen im Vorfeld genau, wie der Ablauf aussehen soll.",
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

    {/* CTA-Leiste */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
      >
        Frage direkt per WhatsApp stellen
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
      >
        Persönlich in Baden anrufen
      </a>
    </div>
  </div>

  {/* JSON-LD für FAQPage */}
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
            "name": "Wie schnell kann ein Termin in Baden organisiert werden?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In vielen Fällen ist ein Besichtigungstermin innerhalb weniger Tage möglich. Nennen Sie uns Ihren bevorzugten Zeitraum – wir stimmen einen fixen Termin ab und halten ihn ein."
            }
          },
          {
            "@type": "Question",
            "name": "Ist die Besichtigung kostenlos und unverbindlich?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Die Besichtigung in Baden und Umgebung ist für Sie kostenlos und unverbindlich. Auf dieser Basis erstellen wir ein klares Fixpreis-Angebot."
            }
          },
          {
            "@type": "Question",
            "name": "Was passiert mit Gegenständen, die nicht übernommen werden?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bereits bei der Besichtigung wird besprochen, welche Gegenstände bleiben, welche angekauft werden können und welche vollständig entfernt werden sollen. So ist von Anfang an klar, was mit welchen Stücken geschieht."
            }
          },
          {
            "@type": "Question",
            "name": "Wie läuft eine Verlassenschaft ab, wenn mehrere Erben beteiligt sind?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wir stimmen die Schritte so ab, dass alle relevanten Personen informiert sind – etwa durch gemeinsame Termine, Protokolle oder digitale Abstimmung. Auf Wunsch dokumentieren wir die einzelnen Schritte ausführlich."
            }
          },
          {
            "@type": "Question",
            "name": "Können auch nur einzelne Räume oder Teilbereiche aufgelöst werden?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. Häufig werden zunächst einzelne Bereiche wie Keller, Dachboden oder ein Teil der Wohnräume bearbeitet. Wir richten uns nach Ihrem Bedarf und erstellen auch für Teilbereiche ein transparentes Angebot."
            }
          },
          {
            "@type": "Question",
            "name": "Was ist, wenn der Nachlass sehr umfangreich oder lange unberührt ist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gerade umfangreiche oder länger unberührte Nachlässe profitieren von einem strukturierten Vorgehen. Wir planen ausreichend Zeit und Personal ein und besprechen im Vorfeld genau, wie der Ablauf aussehen soll."
            }
          }
        ]
      })
    }}
  />
</section>


      {/* ===== SEKTION: Experten-Tipps zur Verlassenschaft in Baden ===== */}
      <section
        id="experten-tipps"
        aria-label="Experten-Tipps zur Verlassenschaft in Baden"
        className="relative overflow-hidden bg-[#FDFBF9] py-20 md:py-10"
      >
        {/* Hintergrund-Deko */}
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
              Experten-Tipps zur Verlassenschaft in Baden
            </h2>
            <p className="mt-4 max-w-[860px] text-[17px] leading-relaxed text-[#334049]">
              Unsere Empfehlungen beruhen auf über 20 Jahren Erfahrung in Baden und
              Umgebung. Klar, praxistauglich und direkt umsetzbar – damit der gesamte
              Ablauf für Sie so angenehm wie möglich bleibt.
            </p>
          </header>

          {/* Raster der Tipps */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frühzeitig Besichtigung vereinbaren",
                text:
                  "Eine rechtzeitige Terminreservierung sorgt für eine reibungslose und planbare Abwicklung.",
              },
              {
                title: "Dokumente & Erinnerungsstücke sichern",
                text:
                  "Wichtige Unterlagen, Fotos oder persönliche Erinnerungen am besten vorab separat halten.",
              },
              {
                title: "Fotos oder kurze Beschreibung senden",
                text:
                  "Eine kompakte Übersicht hilft dabei, ein erstes Gefühl für den Umfang zu bekommen.",
              },
              {
                title: "Zugang und Parkmöglichkeit prüfen",
                text:
                  "Ein klar geregelter Zugang spart Zeit und sorgt für einen effizienten Ablauf.",
              },
              {
                title: "Wertvolle Stücke vorab gesammelt aufstellen",
                text:
                  "So können sie bei der Besichtigung direkt fair bewertet und angerechnet werden.",
              },
              {
                title: "Klare Übergabezeit definieren",
                text:
                  "Ein präziser Zeitrahmen sorgt für entspannte Organisation – besonders bei Termindruck.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-shadow"
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

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/436767202623"
              className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 hover:shadow-lg"
            >
              WhatsApp – kostenlose Besichtigung
            </a>
            <a
              href="tel:+436767202623"
              className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
            >
              Direkt anrufen
            </a>
            <span className="text-sm text-[#6B7280]">
              Fixpreis-Angebot nach Vor-Ort-Termin in Baden.
            </span>
          </div>
        </div>

        {/* sanfter Übergang unten */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDFBF9] to-transparent" />
      </section>
    </>
  );
}
