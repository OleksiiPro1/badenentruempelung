// app/firmenaufloesung-baden/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Firmenauflösung Baden – professionelle Räumung von Büros & Geschäften",
  description:
    "Firmenauflösung in Baden mit kostenloser Besichtigung, Fixpreis-Angebot und zügiger Abwicklung für Büros, Geschäfte, Lagerflächen, Gastronomie und Betriebe.",
};

export default function FirmenaufloesungBadenPage() {
  return (
    <>
      {/* ===== SEKTION 1: Firmenauflösung Baden – professionelle Unterstützung für Betriebe ===== */}
      <section
        id="firmenaufloesung-baden"
        aria-label="Firmenauflösung Baden – professionelle Unterstützung für Betriebe"
        className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-16"
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
          {/* Intro-Badge */}
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center rounded-full border border-[#E8E1D9] bg-white px-4 py-1.5 text-xs font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              Firmenauflösung Baden • Büros, Geschäfte & Betriebe
            </span>
          </div>

          {/* 2-Spalten: Text + Bild */}
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Linke Spalte – Text & CTA */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#2B3A42]">
                Firmenauflösung Baden – professionelle Räumung für Büros,
                Geschäfte & Lagerflächen
              </h1>

              <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
                Wenn ein Standort geschlossen, ein Betrieb verlegt oder ein
                Geschäft aufgegeben wird, müssen Büro, Verkaufsfläche, Lager und
                Nebenräume in kurzer Zeit geordnet übergeben werden. Genau hier
                setzt unsere Unterstützung an: klar strukturiert, verlässlich
                und angepasst an die Abläufe Ihres Unternehmens in Baden und
                Umgebung.
              </p>

              <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
                Ob kleines Büro, Praxis, Ladenlokal, Gastronomiefläche oder
                größerer Betrieb – wir planen jeden Schritt gemeinsam mit Ihnen,
                stimmen Zeitfenster mit Vermietern oder Nachmietern ab und
                sorgen für eine saubere, übergabefertige Fläche zum vereinbarten
                Termin.
              </p>

              {/* Bullet-Vorteile */}
              <ul className="mt-5 grid gap-2 text-[15px] text-[#334049]">
                {[
                  "Kostenlose Besichtigung in Baden & Umgebung",
                  "Fixpreis-Angebot mit klar definierten Leistungen",
                  "Erfahrung mit Büros, Geschäften, Lager- und Gastroflächen",
                  "Terminabstimmung mit Vermietern, Hausverwaltung oder Nachmietern",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: "#CBB47B" }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA-Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/436767202623"
                  className="inline-flex items-center justify-center rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
                >
                  WhatsApp – Firmenauflösung anfragen
                </a>
                <a
                  href="tel:+436767202623"
                  className="inline-flex items-center justify-center rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
                >
                  Direkt anrufen
                </a>
                <a
                  href="mailto:info@badenentruempelung.at"
                  className="inline-flex items-center justify-center rounded-xl border border-[#E8E1D9] bg-white px-6 py-3 text-sm font-semibold text-[#4B3C30] transition hover:border-[#CBB47B]"
                >
                  Anfrage per E-Mail senden
                </a>
              </div>

              <p className="mt-4 text-[13px] text-[#6B7280]">
                Kurz den Standort in Baden beschreiben, Fläche nennen und
                Wunschtermin angeben – wir melden uns mit einem passenden
                Vorschlag für Besichtigung und Abwicklung.
              </p>
            </div>

            {/* Rechte Spalte – Bild */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-[#E8E1D9] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
                <Image
                  src="/images/firmenaufloesung-baden.jpg"
                  alt="Team bei der professionellen Firmenauflösung in einem Büro in Baden"
                  width={600}
                  height={420}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              {/* kleines Badge auf dem Bild */}
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-2 text-xs font-medium text-[#2B3A42] shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
                Büro, Geschäft oder Lager – Firmenauflösung direkt in Baden
              </div>
            </div>
          </div>
        </div>

        {/* sanfter Abschluss unten */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
      </section>
      {/* ===== SEKTION 2: In welchen Situationen eine Firmenauflösung in Baden entsteht ===== */}
<section
  id="situationen-firmenaufloesung-baden"
  aria-label="In welchen Situationen eine Firmenauflösung in Baden entsteht"
  className="relative bg-white py-20 md:py-16"
>
  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      In welchen Situationen eine Firmenauflösung in Baden entsteht
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Eine Firmenauflösung entsteht selten spontan. Meist steckt ein klarer
      Anlass dahinter: ein Standortwechsel, strukturelle Veränderungen im
      Unternehmen, die Aufgabe eines Geschäfts oder die Schließung eines Büros.
      In Baden gibt es viele Betriebe, die in kurzer Zeit zuverlässige
      Unterstützung brauchen – besonders wenn fixe Termine zur Übergabe oder zur
      Räumung bestehen.
    </p>

    {/* Cards – Situationen */}
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Büroauflösung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Büroauflösung in Baden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Wenn Arbeitsplätze verlegt oder Büroräume geschlossen werden, bleibt
          oft wenig Zeit. Wir helfen beim Abbau von Möbeln, bei der Räumung von
          Arbeitsbereichen und bei der Übergabe an Vermieter oder neue
          Nutzer.
        </p>
      </div>

      {/* Geschäftsauflösung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Geschäftsauflösung im Einzelhandel
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Von kleinen Ladenlokalen bis zu größeren Verkaufsflächen in Baden:
          Regale, Präsentationsmöbel, Theken und Lagerbereiche werden
          strukturiert geräumt, sodass der Standort termingerecht übergeben
          werden kann.
        </p>
      </div>

      {/* Gastronomie & Hotellerie */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Gastronomie & Hotellerie
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Schließungen in der Gastro oder Hotellerie erfordern oft eine schnelle
          Umsetzung. Küche, Gastraum, Nebenräume und Lagerflächen werden
          sorgfältig und zügig geräumt – abgestimmt auf die örtlichen Vorgaben.
        </p>
      </div>

      {/* Betriebsauflösung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Betriebsauflösung bei Veränderungen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Wenn ein Unternehmen verkleinert, fusioniert oder seine Struktur
          ändert, müssen Flächen freigemacht werden. Wir übernehmen die gesamte
          Räumung – vom Bürobereich bis zu Nebenräumen.
        </p>
      </div>

      {/* Standortwechsel */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Firmenumzug & Standortwechsel
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Beim Umzug bleibt oft ein kompletter Bereich zurück, der
          übergabefertig geräumt werden muss. Wir sorgen für klare Abläufe und
          eine saubere Fläche zum vereinbarten Termin.
        </p>
      </div>

      {/* Zeitdruck */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Kurze Fristen & fixer Übergabetermin
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Besonders wenn eine Fläche rasch an einen Vermieter, Käufer oder
          Nachmieter übergeben werden muss, zählt ein eingespielter Ablauf.
          Genau dafür bieten wir in Baden schnelle und koordinierte Lösungen.
        </p>
      </div>
    </div>
  </div>
</section>
{/* ===== SEKTION 3: Leistungen bei der Firmenauflösung in Baden ===== */}
<section
  id="leistungen-firmenaufloesung-baden"
  aria-label="Leistungen bei der Firmenauflösung in Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Leistungen bei der Firmenauflösung in Baden – alles aus einer Hand
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Bei einer Firmenauflösung müssen viele Bereiche gleichzeitig berücksichtigt
      werden: Büroeinrichtung, Technik, Lagerflächen, Präsentationsmöbel,
      Verkaufsbereiche oder komplette Gastro- und Hotelflächen. Damit der Standort
      termingerecht übergeben werden kann, übernehmen wir die gesamte Planung,
      Demontagearbeiten und die vollständige Räumung der betroffenen Zonen.
    </p>

    {/* Grid mit Leistungen */}
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      
      {/* Büroauflösung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Büroauflösung in Baden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Wir kümmern uns um Arbeitsplätze, Schreibtische, Rollcontainer,
          Regale, Technikbereiche und Besprechungsräume. Auch größere
          Bürokomplexe können in klaren Schritten vorbereitet und vollständig
          geräumt werden.
        </p>
      </div>

      {/* Geschäftsauflösung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Geschäftsauflösung im Einzelhandel
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Verkaufsregale, Präsentationsflächen, Theken, Kassenbereiche und
          Lagerzonen werden vollständig abgebaut und geräumt. Ideal für
          Geschäftsaufgaben, Standortwechsel oder neue Mietverhältnisse.
        </p>
      </div>

      {/* Lager & Archiv */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Räumung von Lager und Archiv
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Lagerräume, Gewerbeflächen, Nebenräume und Archivbereiche werden
          strukturiert demontiert und vollständig freigemacht – unabhängig von
          Größe oder Stockwerk.
        </p>
      </div>

      {/* Gastronomie */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Gastronomie & Hotelbereiche
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Ausstattungen aus Küche, Gastraum, Schank, Lager und Nebenräumen
          werden fachgerecht abgebaut und geräumt – passend für Restaurants,
          Bars, Cafés und Hotelbetriebe in Baden.
        </p>
      </div>

      {/* Betriebliche Nebenflächen */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Nebenflächen & technische Bereiche
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Auch Aufenthaltsräume, Teeküchen, Lagernischen, Werkbereiche oder
          technische Räume werden im Zuge der Firmenauflösung vollständig
          vorbereitet und geräumt.
        </p>
      </div>

      {/* Komplettservice */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Komplettservice für Betriebe
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Für viele Unternehmen zählt ein reibungsloser Ablauf: klare Zeiteinteilung,
          abgestimmte Termine, strukturierte Arbeitsschritte und eine fertige Fläche,
          die direkt übergeben werden kann.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION 4: Besonderheiten bei Firmenauflösungen in Baden ===== */}
<section
  id="besonderheiten-firmenaufloesung-baden"
  aria-label="Besonderheiten bei Firmenauflösungen in Baden"
  className="relative bg-white py-20 md:py-16"
>
  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
    
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Besonderheiten bei Firmenauflösungen in Baden und Umgebung
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Baden bietet eine Mischung aus Innenstadtbereichen, Fußgängerzonen,
      Gewerbeparks und ruhigeren Randlagen. Dadurch unterscheiden sich die
      Rahmenbedingungen von Standort zu Standort. Eine Firmenauflösung muss
      deshalb sorgfältig geplant werden – besonders wenn die Zugänge eng,
      Ladezonen begrenzt oder feste Übergabetermine einzuhalten sind.
    </p>

    {/* Grid der Besonderheiten */}
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Innenstadtlage */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Innenstadtlage & Fußgängerzonen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          In der Badener Innenstadt können Zufahrten eingeschränkt sein.
          Zeitlich abgestimmte Abläufe, effizientes Arbeiten und eine enge
          Abstimmung vor Ort sorgen dafür, dass die Räumung ohne Verzögerungen
          durchgeführt werden kann.
        </p>
      </div>

      {/* Gewerbe- und Industriegebiete */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Gewerbegebiete rund um Baden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          In Gewerbezonen und Businessparks sind Flächen oft größer, was eine
          besonders sorgfältige Planung erfordert. Wir arbeiten in klaren
          Abschnitten, damit der Betrieb reibungslos abgewickelt werden kann.
        </p>
      </div>

      {/* Abstimmung mit Vermieter / Verwaltung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Abstimmung mit Vermietern & Hausverwaltungen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Viele Firmenstandorte in Baden befinden sich in gemischt genutzten
          Gebäuden. Daher ist eine klare Koordination mit Eigentümern,
          Hausverwaltungen oder Nachmietern essenziell – besonders bei festen
          Übergabefristen.
        </p>
      </div>

      {/* Technische Zugänge */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Unterschiedliche Zugänge & Stockwerkslagen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Manche Betriebe verfügen über Innenhöfe, schmale Zugänge oder
          höhergelegene Etagen. Wir passen unsere Abläufe an die Gegebenheiten
          an und sorgen für eine sichere und zügige Räumung.
        </p>
      </div>

      {/* Kurze Fristen */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Feste Termine & kurze Zeitfenster
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Besonders bei Geschäftsaufgaben oder Übergaben an neue Betreiber
          sind Zeitrahmen oft knapp. Durch klare Organisation können wir
          Firmenauflösungen auch unter Druck zuverlässig durchführen.
        </p>
      </div>

      {/* Rücksicht auf laufenden Betrieb */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Rücksicht auf laufende Abläufe
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Wenn ein Teil des Unternehmens noch in Betrieb ist, arbeiten wir
          diskret, strukturiert und ohne Störungen. So bleibt der Arbeitsfluss
          erhalten, während die Räumung vorbereitet wird.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION: Ablauf einer Firmenauflösung in Baden – Schritt für Schritt ===== */}
<section
  id="ablauf-firmenaufloesung-baden"
  aria-label="Ablauf einer Firmenauflösung in Baden – Schritt für Schritt"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
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
    <header className="mb-12 md:mb-16 max-w-[860px]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#2B3A42]">
        Ablauf einer Firmenauflösung in Baden – Schritt für Schritt
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Eine Firmenauflösung ist immer ein Projekt mit vielen Beteiligten:
        Geschäftsführung, Mitarbeiter, Vermieter, eventuell Nachmieter oder
        Käufer. Damit nichts untergeht, arbeiten wir mit einem klaren Ablauf,
        der sich in Baden und Umgebung über viele Jahre bewährt hat. Jeder
        Schritt ist nachvollziehbar dokumentiert – vom ersten Anruf bis zur
        Schlüsselübergabe.
      </p>
    </header>

    {/* Timeline / Schritte */}
    <div className="relative">
      {/* Vertikale Linie (nur Desktop) */}
      <div
        className="pointer-events-none absolute left-[26px] top-0 bottom-0 hidden w-[2px] bg-[#E8E1D9] md:block"
        aria-hidden="true"
      />

      <div className="space-y-6">
        {[
          {
            nr: 1,
            title: "Erste Kontaktaufnahme & kurze Projektskizze",
            text:
              "Sie melden sich telefonisch, per E-Mail oder WhatsApp und schildern kurz Ihre Situation in Baden: Art des Betriebs, ungefährer Flächenumfang, gewünschter Zeitraum. So erhalten wir ein erstes Bild und können bereits einschätzen, wie viel Zeit wir für Besichtigung und Abwicklung einplanen sollten.",
            cta: {
              label: "Kurz Projekt in Baden schildern",
              href: "https://wa.me/436767202623",
              primary: true,
            },
          },
          {
            nr: 2,
            title: "Kostenlose Besichtigung direkt im Betrieb",
            text:
              "Bei der Besichtigung sehen wir uns Büro, Verkaufsflächen, Lagerbereiche und Nebenräume in Ruhe an. Wir gehen mit Ihnen durch alle Zonen, sprechen über Prioritäten, zeitliche Vorgaben und besondere Punkte wie etwa sensible Bereiche, die bis zum Schluss in Verwendung bleiben.",
          },
          {
            nr: 3,
            title: "Gemeinsame Klärung von Zeitplan & Rahmenbedingungen",
            text:
              "Vor Ort legen wir einen groben Zeitrahmen fest: Welche Bereiche können sofort vorbereitet werden, welche erst später? Müssen Ladezonen reserviert werden, gibt es Hausordnungen oder Vorgaben des Vermieters? Je genauer dieser Schritt ist, desto reibungsloser läuft die eigentliche Firmenauflösung.",
          },
          {
            nr: 4,
            title: "Transparentes Fixpreis-Angebot für Baden",
            text:
              "Auf Basis der Besichtigung erstellen wir ein klares Angebot mit festem Gesamtbetrag. Darin enthalten sind alle vereinbarten Leistungen sowie ein realistischer Zeitplan. Sie wissen im Vorfeld, womit Sie rechnen können – ohne versteckte Posten im Nachhinein.",
          },
          {
            nr: 5,
            title: "Terminfixierung & Vorbereitung im laufenden Betrieb",
            text:
              "Nach Ihrer Zusage werden die Durchführungstage fixiert. Wenn Teile des Unternehmens noch laufen, achten wir darauf, dass Arbeitsabläufe möglichst wenig beeinträchtigt werden – etwa durch Arbeiten außerhalb der Öffnungszeiten oder in klar abgegrenzten Bereichen.",
          },
          {
            nr: 6,
            title: "Durchführung der Firmenauflösung in Baden",
            text:
              "Unser Team arbeitet in gut abgestimmten Schritten. Büroeinrichtung, Verkaufsbereiche, Lager und Nebenräume werden systematisch geleert. Absprachen mit Vermietern, Hausverwaltungen oder Nachmietern werden eingehalten, damit alle Beteiligten Planungssicherheit haben.",
          },
          {
            nr: 7,
            title: "Feinschliff, Kontrolle & Übergabe",
            text:
              "Zum Abschluss gehen wir die Flächen gemeinsam durch. Eventuelle Kleinigkeiten werden direkt vor Ort erledigt, bis alles so aussieht, wie vereinbart. Danach kann die Übergabe an Vermieter, Käufer oder Nachmieter stattfinden – mit einem klaren, abgeschlossenen Projekt.",
            cta: {
              label: "Ablauf für Ihren Standort besprechen",
              href: "tel:+436767202623",
              primary: false,
            },
          },
        ].map((step) => (
          <article
            key={step.nr}
            className="relative grid gap-4 rounded-2xl border border-[#E8E1D9] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] md:grid-cols-[70px_1fr_auto] md:gap-6 md:p-6"
          >
            {/* Nummer-Kreis */}
            <div className="flex md:block">
              <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2B3A42] text-lg font-semibold text-white">
                {step.nr}
              </div>
            </div>

            {/* Inhalt */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2B3A42]">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
                {step.text}
              </p>
            </div>

            {/* Optionaler CTA pro Schritt */}
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
        "Klare Abläufe statt improvisierter Lösungen",
        "Ein Ansprechpartner für Ihre Firmenauflösung in Baden",
        "Verlässliche Termine und transparente Kommunikation",
      ].map((label) => (
        <div
          key={label}
          className="rounded-2xl border border-[#E8E1D9] bg-white px-5 py-4 text-center text-[15px] font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
        >
          {label}
        </div>
      ))}
    </div>
  </div>
</section>
{/* ===== SEKTION: Kosten einer Firmenauflösung in Baden – klar & kalkulierbar ===== */}
<section
  id="kosten-firmenaufloesung-baden"
  aria-label="Kosten einer Firmenauflösung in Baden"
  className="relative bg-white py-20 md:py-16"
>
  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Kosten einer Firmenauflösung in Baden – klar & kalkulierbar
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Viele Unternehmen möchten bereits im Vorfeld einschätzen können, welche Kosten
      bei einer Firmenauflösung in Baden entstehen. Verständlich – schließlich
      müssen Budgets eingehalten und Abläufe intern abgestimmt werden. Damit Sie
      nicht im Dunkeln tappen, erstellen wir nach der Besichtigung ein Angebot, das
      alle vereinbarten Leistungen transparent abbildet. Keine unklaren Positionen,
      keine Überraschungen, sondern ein klar nachvollziehbarer Gesamtbetrag.
    </p>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Weil jeder Betrieb anders aufgebaut ist – vom kleinen Büro bis zum
      mehrstöckigen Geschäftslokal – kann der Aufwand stark variieren. Entscheidend
      ist nicht allein die Größe, sondern auch die Struktur der Räume und die
      Art der Einrichtung. Genau deshalb ist die Besichtigung in Baden so wichtig:
      Sie ermöglicht eine faire und realistische Kostenschätzung.
    </p>

    {/* Faktoren Grid */}
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Fläche */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 transition shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Größe & Aufbau der Fläche
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Ein kompakter Standort lässt sich schneller abwickeln als ein weitläufiges
          Firmenareal. Auch verwinkelte Räume, viele Nebenflächen oder mehrere
          Stockwerke beeinflussen den zeitlichen Aufwand.
        </p>
      </div>

      {/* Zustand & Einrichtung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 transition shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Umfang der Einrichtung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Arbeitsplätze, Regale, Präsentationsmöbel, Technik oder Küchenelemente.
          Je komplexer der Aufbau, desto detaillierter müssen die einzelnen Schritte
          koordiniert werden.
        </p>
      </div>

      {/* Zugänglichkeit */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 transition shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Zugänglichkeit des Standorts
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Befindet sich das Büro im Erdgeschoss, in einer Einkaufsstraße oder
          in einem Gewerbepark? Je nach Lage ergibt sich ein unterschiedlicher
          organisatorischer Aufwand – besonders in der Badener Innenstadt.
        </p>
      </div>

      {/* Zeitrahmen */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 transition shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Vorgaben & Zeitfenster
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Manche Betriebe müssen schnell übergabefertig sein, andere haben flexible
          Zeiträume. Der Zeitplan fließt in die Gesamtplanung ein und hilft,
          Abstimmungen mit Vermietern oder Nachmietern einzuhalten.
        </p>
      </div>

      {/* Wertanrechnung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 transition shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wertanrechnung von Inventar
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Gut erhaltene Büro- oder Geschäftseinrichtung kann in vielen Fällen
          angerechnet werden. Dadurch reduziert sich der finale Gesamtbetrag für die
          Firmenauflösung spürbar.
        </p>
      </div>

      {/* Individuelle Anforderungen */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 transition shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Individuelle Besonderheiten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#334049]">
          Manche Betriebe haben eigene Richtlinien oder interne Abläufe, die
          eingehalten werden müssen. Darauf können wir flexibel reagieren – damit
          alles so läuft, wie Sie es benötigen.
        </p>
      </div>

    </div>

    {/* Richtwerte Bereich */}
    <div className="mt-14">
      <h3 className="text-xl md:text-2xl font-semibold text-[#2B3A42]">
        Richtwerte für Firmenauflösungen in Baden
      </h3>
      <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#334049]">
        Die folgenden Werte dienen nur zur Orientierung. Der tatsächliche Aufwand
        hängt immer von der Besichtigung ab, da jeder Standort anders aufgebaut ist.
        Nach dem Termin erhalten Sie ein verbindliches Fixpreis-Angebot.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Kleines Büro bis ca. 40 m²",
            price: "ab ca. 450–850 €",
          },
          {
            title: "Mittelgroßes Büro 40–120 m²",
            price: "ab ca. 900–1.900 €",
          },
          {
            title: "Großraumbüro ab 120 m²",
            price: "ab ca. 2.000 €",
          },
          {
            title: "Einzelhandelslokal in Baden",
            price: "ab ca. 1.400 €",
          },
          {
            title: "Lager- oder Archivflächen",
            price: "Preis nach Besichtigung",
          },
          {
            title: "Gastro- oder Hotelflächen",
            price: "Preis nach Besichtigung",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#E8E1D9] bg-white px-6 py-5 shadow-sm transition hover:shadow-md"
          >
            <p className="text-[15px] font-semibold text-[#2B3A42]">{item.title}</p>
            <p className="mt-1 text-[15px] text-[#8A7C73]">{item.price}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
{/* ===== SEKTION: Praxisbeispiele aus Baden ===== */}
<section
  id="praxisbeispiele-firmenaufloesung-baden"
  aria-label="Praxisbeispiele für Firmenauflösungen in Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Praxisbeispiele aus Baden – echte Projekte aus dem Arbeitsalltag
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Jede Firmenauflösung hat ihre eigene Geschichte. Manche Betriebe schließen
      aus wirtschaftlichen Gründen, andere ziehen an einen neuen Standort oder
      geben eine bestimmte Fläche auf, weil interne Abläufe angepasst werden.
      Damit Sie ein Gefühl bekommen, wie unterschiedlich solche Projekte sein
      können, zeigen wir drei Beispiele aus Baden, die wir in den letzten Jahren
      abgewickelt haben.
    </p>

    {/* GRID der Praxisfälle */}
    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

      {/* Fall 1 – Büro im Zentrum */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Büroauflösung eines Dienstleisters im Zentrum von Baden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein kleines Beratungsteam löste seinen Standort in der Innenstadt, nahe
          dem Hauptplatz, auf. Die Räume waren vollgestellt mit Schreibtischen,
          Aktenregalen und Technik. Die besondere Herausforderung: ein enger
          Stiegenaufgang und ein fixes Übergabedatum, das nicht verschoben
          werden konnte.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Durch eine sehr präzise Planung und abgestimmte Zeitfenster gelang es,
          das gesamte Büro innerhalb eines Tages zu räumen, inklusive Abbau aller
          Möbel. Der Standort konnte noch am selben Nachmittag übergeben werden.
        </p>
      </div>

      {/* Fall 2 – Einzelhandel */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Geschäftsauflösung eines Modegeschäfts mit Lagerfläche
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein Modegeschäft in Baden schloss nach vielen Jahren seine Türen.
          Präsentationsmöbel, Regale, Umkleidekabinen und ein vorgelagertes
          Lager mussten in kurzer Zeit freigemacht werden. Der Zugang zur
          Fußgängerzone machte die Planung besonders wichtig.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wir arbeiteten frühmorgens, bevor die ersten Lieferanten und Kunden in
          der Zone unterwegs waren. Dadurch konnte das gesamte Lokal übergabefertig
          geräumt werden, ohne den Verkehr oder Passanten zu beeinträchtigen.
        </p>
      </div>

      {/* Fall 3 – Gastronomie */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Räumung einer Gastrofläche mit straffem Zeitplan
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein kleines Restaurant in Baden musste kurzfristig schließen. Küche,
          Gastraum, Schankbereich und mehrere Nebenräume waren vollständig
          eingerichtet. Zusätzlich musste die Übergabe innerhalb von 48 Stunden
          erfolgen.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Das Team koordinierte alle Schritte eng miteinander, sodass die Fläche
          trotz des extrem engen Zeitrahmens vollständig freigemacht wurde. Der
          Vermieter bestätigte anschließend, dass die Übergabe ohne Beanstandungen
          erfolgen konnte.
        </p>
      </div>

    </div>

    {/* Abschluss-Streifen */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white px-6 py-5 text-center text-[15px] font-medium text-[#2B3A42] shadow-sm">
      Jedes Projekt hat seine eigenen Bedingungen – genau deshalb setzen wir auf
      individuelle Planung und klare Kommunikation von Beginn an.
    </div>

  </div>
</section>
{/* ===== SEKTION: Vorteile eines spezialisierten Partners in Baden ===== */}
<section
  id="vorteile-firmenaufloesung-baden"
  aria-label="Ihre Vorteile bei einer Firmenauflösung in Baden"
  className="relative bg-white py-20 md:py-16"
>
  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Ihre Vorteile mit einem spezialisierten Partner für Firmenauflösungen in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Eine Firmenauflösung betrifft nicht nur Möbel oder Geschäftsausstattung –
      sie ist immer auch ein organisatorisches Projekt. Eine gute Abstimmung
      spart Zeit, verhindert Missverständnisse und sorgt dafür, dass Sie sich
      weiterhin auf Ihr Kerngeschäft konzentrieren können, während wir uns um
      die Räumung kümmern. Genau dafür gibt es spezialisierte Teams, die wissen,
      wie man komplexe Abläufe strukturiert und zuverlässig umsetzt.
    </p>

    {/* Grid Vorteile */}
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Vorteil 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Erfahrung mit unterschiedlichsten Betrieben
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ob Büro, Ladenlokal, Kanzlei, Praxis, Lager oder Gastrofläche – jedes
          Projekt folgt seinem eigenen Rhythmus. Durch die Erfahrung aus zahlreichen
          Standorten in Baden können wir bereits im Vorfeld einschätzen, welche
          Schritte notwendig sind und wie die Durchführung am effizientesten
          verläuft.
        </p>
      </div>

      {/* Vorteil 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Planbare Abläufe & klare Zeitfenster
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Für Unternehmen ist Planbarkeit entscheidend. Deshalb arbeiten wir mit
          abgestimmten Zeitfenstern, halten Absprachen mit Vermietern ein und
          organisieren alle Schritte so, dass Ihr Tagesgeschäft nicht unnötig
          beeinträchtigt wird.
        </p>
      </div>

      {/* Vorteil 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Fixpreise statt unklarer Posten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Nach der Besichtigung erhalten Sie ein Angebot, das alle Leistungen
          beinhaltet. Keine schwammigen Formulierungen, keine versteckten Punkte,
          sondern ein klar definierter Gesamtbetrag, der Ihnen Planungssicherheit
          gibt.
        </p>
      </div>

      {/* Vorteil 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Regionale Nähe zu Baden & schnelle Einsatzbereitschaft
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Durch die Nähe zu Baden sind kurzfristige Besichtigungen oder
          zeitnahe Termine problemlos möglich. Unternehmen profitieren davon,
          dass wir flexibel agieren können – besonders bei Projekten, die unter
          Zeitdruck stehen.
        </p>
      </div>

      {/* Vorteil 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Rücksicht auf laufende Geschäftsprozesse
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wenn Teile des Unternehmens noch arbeiten, passen wir unsere Abläufe
          daran an. So bleibt Ihr Betrieb funktionsfähig, während einzelne
          Bereiche Schritt für Schritt vorbereitet und freigemacht werden.
        </p>
      </div>

      {/* Vorteil 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Verlässliche Kommunikation & transparente Schritte
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Kurze Wege, klare Absprachen und laufende Rückmeldungen gehören für
          uns dazu. Unternehmen wissen in jedem Moment, welche Schritte gerade
          laufen und wie weit die Abwicklung fortgeschritten ist.
        </p>
      </div>

    </div>

    {/* Abschluss-Statement */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white px-6 py-5 text-center text-[15px] font-medium text-[#2B3A42] shadow-sm">
      Eine Firmenauflösung ist kein Routinevorgang – aber mit einem erfahrenen
      Partner wird sie zu einem gut strukturierten Projekt, das sich verlässlich
      planen lässt.
    </div>

  </div>
</section>
{/* ===== SEKTION: FAQ – Firmenauflösung Baden ===== */}
<section
  id="faq-firmenaufloesung-baden"
  aria-label="FAQ zur Firmenauflösung in Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      FAQ – Firmenauflösung Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Viele Fragen tauchen erst dann auf, wenn die Auflösung eines Firmenstandortes
      konkret wird. Um Ihnen die Planung zu erleichtern, haben wir die häufigsten
      Anliegen aus Baden hier gesammelt und verständlich beantwortet.
    </p>

    {/* FAQ LISTE */}
    <div className="mt-10 space-y-6">

      {/* Frage 1 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wie schnell kann eine Firmenauflösung in Baden organisiert werden?
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
          In vielen Fällen ist eine kurzfristige Umsetzung möglich. Besonders in
          Baden können wir aufgrund der regionalen Nähe oft noch am selben oder
          nächsten Tag eine Besichtigung durchführen. Der endgültige Zeitplan
          hängt vom Umfang der Fläche ab, aber schnelle Termine sind absolut üblich.
        </p>
      </div>

      {/* Frage 2 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Ist die Besichtigung wirklich kostenlos und unverbindlich?
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
          Ja. Die Besichtigung dient dazu, ein realistisches Angebot zu erstellen.
          Dabei gehen wir alle Bereiche gemeinsam durch und besprechen, welche
          Schritte notwendig sind. Danach entscheiden Sie ganz in Ruhe, ob Sie den
          Auftrag erteilen möchten.
        </p>
      </div>

      {/* Frage 3 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Können Sie auch außerhalb der Öffnungszeiten arbeiten?
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
          Natürlich. Viele Unternehmen möchten den laufenden Betrieb nicht stören.
          Daher sind Termine am frühen Morgen, späten Abend oder am Wochenende
          problemlos möglich. Wir richten uns nach Ihren organisatorischen Abläufen.
        </p>
      </div>

      {/* Frage 4 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Was passiert mit gut erhaltener Büro- oder Geschäftseinrichtung?
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
          Wenn Einrichtungsgegenstände in einem guten Zustand sind, können sie
          angerechnet werden. Das führt oft zu einer spürbaren Reduktion des
          Gesamtpreises. Was angerechnet werden kann, besprechen wir direkt bei
          der Besichtigung.
        </p>
      </div>

      {/* Frage 5 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Übernehmen Sie auch einzelne Bereiche wie Lager oder Archiv?
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
          Ja, nicht jede Firma muss komplett aufgelöst werden. Wir kümmern uns auch
          um Teilbereiche wie Archivräume, Lagerzonen, einzelne Etagen oder nur
          bestimmte Abteilungen. Der Umfang ist flexibel anpassbar.
        </p>
      </div>

      {/* Frage 6 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Können Sie bei zeitkritischen Übergaben an Vermieter oder Nachmieter helfen?
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#4B3C30]">
          Absolut. Gerade in Baden gibt es viele Standorte mit festen Übergabeterminen.
          Wir stimmen Abläufe exakt ab, damit die Fläche rechtzeitig vorbereitet ist
          und alle Vereinbarungen eingehalten werden.
        </p>
      </div>

    </div>

    {/* JSON-LD SCHEMA */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Wie schnell kann eine Firmenauflösung in Baden organisiert werden?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Eine Firmenauflösung in Baden kann oft kurzfristig organisiert werden. Besichtigungen sind meist noch am selben oder nächsten Tag möglich. Der genaue Zeitplan richtet sich nach dem Umfang der Fläche."
              }
            },
            {
              "@type": "Question",
              "name": "Ist die Besichtigung kostenlos und unverbindlich?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Ja, die Besichtigung ist kostenlos und unverbindlich. Sie dient der realistischen Einschätzung des Projekts und der Erstellung eines Fixpreis-Angebots."
              }
            },
            {
              "@type": "Question",
              "name": "Arbeiten Sie auch außerhalb der Öffnungszeiten?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Ja, Termine am frühen Morgen, späten Abend oder am Wochenende sind möglich. So bleibt der laufende Betrieb ungestört."
              }
            },
            {
              "@type": "Question",
              "name": "Was passiert mit gut erhaltener Büro- oder Geschäftseinrichtung?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Gut erhaltene Einrichtungsgegenstände können angerechnet werden, wodurch sich der Gesamtpreis oft reduziert."
              }
            },
            {
              "@type": "Question",
              "name": "Übernehmen Sie auch Teilbereiche wie Lager oder Archiv?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Ja, wir übernehmen auch einzelne Bereiche wie Lager, Archivräume oder einzelne Etagen – je nach Bedarf."
              }
            },
            {
              "@type": "Question",
              "name": "Unterstützen Sie bei Übergabeterminen an Vermieter oder Nachmieter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Ja, wir stimmen Abläufe exakt ab, damit feste Übergabetermine eingehalten werden und die Fläche pünktlich vorbereitet ist."
              }
            }
          ]
        })
      }}
    />
  </div>
</section>
{/* ===== SEKTION: Experten-Tipps für Ihre Firmenauflösung in Baden ===== */}
<section
  id="experten-tipps-firmenaufloesung-baden"
  aria-label="Experten-Tipps zur Firmenauflösung in Baden"
  className="relative bg-white py-20 md:py-16"
>
  <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Experten-Tipps für eine reibungslose Firmenauflösung in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Eine Firmenauflösung wirkt auf den ersten Blick oft wie ein Mammutprojekt:
      zahlreiche Räume, unterschiedliche Abteilungen, technische Bereiche,
      Lagerzonen und ein knapper Zeitrahmen. Mit der richtigen Vorbereitung
      lässt sich der gesamte Ablauf jedoch erstaunlich entspannt gestalten.
      Hier sind einige praktische Tipps aus der Erfahrung zahlreicher Projekte
      in Baden.
    </p>

    {/* TIPPS GRID */}
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Tipp 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          1. Frühzeitig Kontakt aufnehmen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Auch wenn der Termin noch Wochen entfernt ist: eine kurze Vorabmeldung
          reicht, damit wir die richtige Zeitspanne einplanen können. Je früher
          die Kommunikation beginnt, desto entspannter läuft die gesamte
          Abwicklung – besonders bei Standorten in der Badener Innenstadt.
        </p>
      </div>

      {/* Tipp 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          2. Alle Schlüssel & Zugänge vorab klären
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Gebäude mit mehreren Einheiten, Hintereingängen oder Aufzügen sollten
          vor dem Start genau geklärt sein. Ein Zugriff ohne Unterbrechung spart
          wertvolle Zeit und verhindert unnötige Wartephasen.
        </p>
      </div>

      {/* Tipp 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          3. Übergabetermin fixieren, bevor alles startet
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ob Vermieter, Hausverwaltung oder Nachmieter – ein klarer
          Übergabetermin schafft Orientierung. Damit lässt sich jeder Schritt
          sauber rückwärts planen, sodass zum Schluss alles pünktlich und
          vollständig vorbereitet ist.
        </p>
      </div>

      {/* Tipp 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          4. Interne Bereiche markieren, die noch in Nutzung sind
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Besonders in laufenden Betrieben bleiben manche Abteilungen aktiv.
          Eine kurze Markierung oder Absprache hilft, diese Zonen bis zuletzt
          unberührt zu lassen, ohne den Gesamtprozess zu verzögern.
        </p>
      </div>

      {/* Tipp 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          5. Bei engen Zeitfenstern zusätzlich Rücksprache halten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wenn nur wenige Tage zur Verfügung stehen, ist eine direkte Abstimmung
          mit allen Beteiligten besonders wichtig. So lassen sich Engpässe
          vermeiden – gerade wenn mehrere Parteien gleichzeitig auf einen Termin
          hinarbeiten.
        </p>
      </div>

      {/* Tipp 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          6. Öffnungszeiten & Lieferverkehr berücksichtigen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In der Badener Innenstadt gibt es Bereiche mit starkem Lieferverkehr
          oder zeitlich eingeschränkten Zufahrten. Wer diese Zeiten kennt, spart
          sich unnötige Verzögerungen und sorgt für einen ruhigen, flüssigen Ablauf.
        </p>
      </div>

    </div>

    {/* Abschluss-Statement */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white px-6 py-5 text-center text-[15px] font-medium text-[#2B3A42] shadow-sm">
      Gute Vorbereitung macht jede Firmenauflösung spürbar leichter – und sorgt
      dafür, dass Baden Ihr Projekt ohne Stress in ein abgeschlossenes Kapitel
      verwandelt.
    </div>

  </div>
</section>
{/* ===== SEKTION: Kontakt & CTA – Firmenauflösung Baden ===== */}
<section
  id="kontakt-firmenaufloesung-baden"
  aria-label="Kontakt Firmenauflösung Baden"
  className="relative bg-[#F5F3F0] py-24 md:py-20"
>
  <div className="relative mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
        Firmenauflösung in Baden geplant?  
        <span className="block mt-2">Wir unterstützen Sie zuverlässig.</span>
      </h2>

      <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Ob kleines Büro, großer Standort oder nur ein einzelner Bereich – wir sehen uns
        Ihre Fläche unverbindlich an und erstellen ein übersichtliches Fixpreis-Angebot.
        Schnell, verlässlich und ohne komplizierte Abläufe.  
        <br /><br />
        Wenn Sie möchten, können wir oft schon innerhalb der nächsten 24 Stunden eine
        Besichtigung in Baden durchführen.
      </p>
    </div>

    {/* CTA Box */}
    <div className="mt-10 mx-auto max-w-xl rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm text-center">
      <p className="text-[15px] text-[#2B3A42] font-medium">
        Jetzt kostenlose Besichtigung buchen
      </p>
      <p className="mt-1 text-[15px] text-[#8A7C73]">
        Unverbindlich & flexibel – wir melden uns schnell zurück.
      </p>

      <div className="mt-6 flex flex-col gap-4 items-center">
        <a
          href="tel:+436767202623"
          className="w-full max-w-[260px] bg-[#2B3A42] text-white rounded-xl py-3 text-sm font-semibold shadow-md transition hover:bg-[#1f2b30]"
        >
          Jetzt anrufen: +43 676 720 26 23
        </a>

        <a
          href="mailto:info@badenentruempelung.at"
          className="w-full max-w-[260px] bg-white text-[#2B3A42] border border-[#D9D1C8] rounded-xl py-3 text-sm font-semibold shadow-md transition hover:bg-[#F8F6F4]"
        >
          E-Mail senden
        </a>

        <a
          href="https://wa.me/436767202623"
          target="_blank"
          className="w-full max-w-[260px] bg-[#25D366] text-white rounded-xl py-3 text-sm font-semibold shadow-md transition hover:opacity-90"
        >
          WhatsApp Nachricht
        </a>
      </div>
    </div>

    {/* Abschluss */}
    <p className="mt-10 text-center text-[14px] text-[#7A6E66]">
      Wir begleiten Firmenauflösungen in Baden mit klarer Planung, ruhigem Ablauf und
      persönlicher Betreuung – von der ersten Besichtigung bis zur Übergabe.
    </p>

  </div>
</section>


    </>
  );
}
