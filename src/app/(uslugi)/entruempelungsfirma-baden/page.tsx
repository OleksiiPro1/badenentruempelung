// ======================================
// METADATA
// ======================================
export function generateMetadata() {
  return {
    title: "Entrümpelungsfirma Baden – schnelle & zuverlässige Hilfe",
    description:
      "Ihre Entrümpelungsfirma in Baden: Wohnungen, Häuser, Keller, Dachböden und Geschäftsflächen. Kostenlose Besichtigung & Fixpreise.",
    openGraph: {
      title: "Entrümpelungsfirma Baden – professionelle Unterstützung",
      description:
        "Entrümpelungsfirma Baden für Wohnungen, Häuser und Betriebe. Kostenlose Besichtigung, klare Fixpreise und schnelle Termine.",
      url: "https://badenentruempelung.at/entruempelungsfirma-baden/",
      type: "website",
      images: [
        {
          url: "/images/entruempelungsfirma-baden.webp",
          width: 1200,
          height: 630,
          alt: "Entrümpelungsfirma Baden",
        },
      ],
    },
  };
}

// ======================================
// PAGE
// ======================================
export default function EntruempelungsfirmaBadenPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">

      {/* ===================================== */}
      {/* HERO / SECTION 1                      */}
      {/* ===================================== */}
      <section
        id="hero-entruempelungsfirma-baden"
        aria-label="Entrümpelungsfirma Baden"
        className="relative bg-[#F5F3F0] pt-24 pb-20 md:pt-28 md:pb-24"
      >
        <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

          {/* TEXTBLOCK */}
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#2B3A42]">
              Entrümpelungsfirma Baden – zuverlässig, respektvoll & rasch zur Stelle
            </h1>

            <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-[#334049]">
              Wenn eine Wohnung, ein Haus oder eine Geschäftsfläche frei werden soll,
              braucht man jemanden, der den Überblick behält und zuverlässig arbeitet.
              Unsere Entrümpelungsfirma ist täglich in Baden und Umgebung unterwegs,
              kennt die typischen Wohnanlagen, schmalen Gassen, Altbauten und
              Zeitvorgaben vieler Vermieter. Wir bieten klare Fixpreise, eine
              kostenlose Besichtigung und eine Abwicklung, die ohne Stress und lange
              Wartezeiten funktioniert.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+436767202623"
                className="bg-[#2B3A42] text-white rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition hover:bg-[#1f2b30]"
              >
                Anrufen: +43 676 720 26 23
              </a>
              <a
                href="https://wa.me/436767202623"
                target="_blank"
                className="bg-[#CBB47B] text-white rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition hover:opacity-90"
              >
                WhatsApp schreiben
              </a>
              <a
                href="mailto:info@badenentruempelung.at"
                className="bg-white border border-[#CBB47B] text-[#2B3A42] rounded-xl px-6 py-3 text-sm font-semibold shadow-md hover:bg-[#f4f0ea]"
              >
                E-Mail senden
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-lg border border-[#E8E1D9]">
            <img
              src="/images/entruempelungsfirma-baden.webp"
              alt="Entrümpelungsfirma Baden – professionelle Unterstützung"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
{/* ====================================================== */}
{/* SEKTION 2 – Ihre Entrümpelungsfirma in Baden           */}
{/* ====================================================== */}

<section
  id="warum-wir-entruempelung-baden"
  aria-label="Ihre Entrümpelungsfirma in Baden"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Ihre Entrümpelungsfirma in Baden – wann wir der richtige Partner sind
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Viele Anfragen in Baden entstehen aus Situationen, die man nicht jeden Tag erlebt:
      Ein Umzug steht bevor, ein Haus muss für den Verkauf vorbereitet werden oder eine
      Wohnung soll für neue Mieter frei werden. Genau hier kommen wir ins Spiel – mit
      Erfahrung, klarer Struktur und einer Arbeitsweise, die Ihnen spürbar Zeit spart.
    </p>

    {/* GRID */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Fall 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wenn eine Wohnung schnell frei werden soll
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Vermieter warten ungern lange. Wir übernehmen komplette Wohnungsentrümpelungen,
          auch wenn der Termin kurzfristig ansteht oder viele Jahre kaum etwas verändert
          wurde.
        </p>
      </div>

      {/* Fall 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Für Hausentrümpelungen in Baden & Umgebung
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Vom Keller bis zum Dachboden kümmern wir uns um ganze Häuser – inklusive Nebenräume,
          Schuppen oder Abstellflächen. Besonders hilfreich, wenn das Gebäude verkauft oder
          für neue Nutzung vorbereitet wird.
        </p>
      </div>

      {/* Fall 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wenn Keller & Dachboden lange ignoriert wurden
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          In vielen Badener Haushalten sammeln sich über die Jahre Kartons, Altbestände und
          vergessene Dinge an. Wir machen diese Räume wieder nutzbar – strukturiert und
          zügig.
        </p>
      </div>

      {/* Fall 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Für Geschäfts-, Büro- & Lagerräumungen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Ob kleines Büro, Verkaufsfläche oder Lagerraum – wir räumen betriebliche Räume
          sorgfältig und termingenau, passend zu Ihren Öffnungszeiten oder laufenden
          Verpflichtungen.
        </p>
      </div>

      {/* Fall 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Bei sensiblen Situationen & emotionalen Hintergründen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Wenn eine Räumung aufgrund von persönlichen Umständen notwendig ist, arbeiten wir
          ruhig, diskret und mit viel Rücksicht. Sie bestimmen das Tempo – wir erledigen den
          Rest.
        </p>
      </div>

      {/* Fall 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wenn Sie klare Abläufe & Fixpreise möchten
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Klare Kommunikation ist uns wichtig. Nach der Besichtigung erhalten Sie ein
          verbindliches Angebot – ohne versteckte Zusatzpunkte. So bleibt alles planbar.
        </p>
      </div>

    </div>

  </div>
</section>
{/* =========================================================== */}
{/* SEKTION 3 – Leistungen Ihrer Entrümpelungsfirma in Baden     */}
{/* =========================================================== */}

<section
  id="leistungen-entruempelungsfirma-baden"
  aria-label="Leistungen Entrümpelungsfirma Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Leistungen Ihrer Entrümpelungsfirma in Baden – alles aus einer Hand
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Ganz gleich, ob ein einzelner Raum leer werden soll oder ein komplettes Haus – 
      unsere Entrümpelungsfirma übernimmt sämtliche Schritte, damit Sie sich um nichts 
      kümmern müssen. Wir arbeiten strukturiert, zügig und mit einem klaren Blick für die 
      individuellen Gegebenheiten in Baden und Umgebung.
    </p>

    {/* GRID – Leistungen */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Leistung 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wohnungsentrümpelung – von klein bis groß
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Ob Garçonnière, Familienwohnung oder Altbau im Zentrum von Baden – wir übernehmen 
          komplette Wohnungsentrümpelungen, inklusive Nebenräume, Nischen und verborgener 
          Bereiche, die man im Alltag kaum beachtet.
        </p>
      </div>

      {/* Leistung 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Hausentrümpelung inklusive Keller & Dachboden
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Häuser in Baden haben oft mehrere Ebenen und zusätzliche Räume. Wir kümmern uns 
          um alle Bereiche, arbeiten uns systematisch durch jede Etage und sorgen dafür, 
          dass das gesamte Objekt am Ende leer übergeben werden kann.
        </p>
      </div>

      {/* Leistung 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Keller-, Dachboden- & Abstellraum-Entrümpelung
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Diese Räume füllen sich oft über viele Jahre. Wir schaffen Platz, bringen 
          Struktur hinein und sorgen dafür, dass wieder nutzbare Flächen entstehen, die 
          man ohne Mühe betreten und verwenden kann.
        </p>
      </div>

      {/* Leistung 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Geschäftsflächen, Büros & Praxisräume
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Für Betriebe in Baden übernehmen wir Räumungen mit Rücksicht auf Arbeitszeiten 
          und laufende Abläufe. Besonders praktisch für Umstrukturierungen, Geschäfts­aufgaben 
          oder Standortwechsel.
        </p>
      </div>

      {/* Leistung 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Demontagen & handwerkliche Zusatzarbeiten
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Küchen, Regale, Schränke, Lampen oder größere Konstruktionen werden bei Bedarf 
          von uns abgebaut. Alles sauber, ruhig und ohne Schäden an Wänden oder Böden.
        </p>
      </div>

      {/* Leistung 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Alles aus einer Hand – ein Ansprechpartner
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Von der Erstbesichtigung bis zur Übergabe bleibt alles bei einem Team. Kein 
          Weiterreichen, keine Unklarheiten – ein klarer, durchgängiger Ablauf, der 
          Ihnen Zeit und Nerven spart.
        </p>
      </div>

    </div>

  </div>
</section>
{/* ================================================================== */}
{/* SEKTION 4 – Besonderheiten für Entrümpelungen in Baden             */}
{/* ================================================================== */}

<section
  id="besonderheiten-entruempelung-baden"
  aria-label="Besonderheiten Räumungen Baden"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Besonderheiten für Entrümpelungen in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Baden hat seine eigenen Rahmenbedingungen: ein Mix aus charmanten Altbauten,
      engen Zufahrten, ruhigen Wohnanlagen und großen Häusern mit mehreren Ebenen.
      Unsere tägliche Erfahrung in der Region hilft uns dabei, die Abläufe so zu
      planen, dass alles flüssig funktioniert – ohne Verzögerungen und ohne Chaos.
    </p>

    {/* TIMELINE – Completely different layout */}
    <div className="mt-14 relative border-l-2 border-[#CBB47B] ml-4">

      {/* Punkt 1 */}
      <div className="relative pl-8 pb-12">
        <span className="absolute left-[-11px] top-1 w-5 h-5 bg-[#CBB47B] rounded-full border border-[#9F8A5A]" />
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Altbauten im Zentrum – enge Stiegen & wenig Platz
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Viele Badener Altbauwohnungen liegen in Gebäuden aus dem 19. Jahrhundert.
          Die Zugänge sind oft schmal, Stiegenhäuser verwinkelt und Aufzüge selten.
          Wir planen den Ablauf so, dass alles sicher und kontrolliert abläuft,
          ohne die Hausgemeinschaft zu stören.
        </p>
      </div>

      {/* Punkt 2 */}
      <div className="relative pl-8 pb-12">
        <span className="absolute left-[-11px] top-1 w-5 h-5 bg-[#CBB47B] rounded-full border border-[#9F8A5A]" />
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Wohnanlagen mit klaren Hausregeln
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Viele Wohnhäuser rund um Leesdorf, Mitterfeld oder Weikersdorf haben fixe
          Zeitfenster für Arbeiten und genaue Regeln für gemeinschaftliche Bereiche.
          Wir stimmen Termine rechtzeitig ab und halten uns an die Vorgaben, um
          unnötige Unruhe zu vermeiden.
        </p>
      </div>

      {/* Punkt 3 */}
      <div className="relative pl-8 pb-12">
        <span className="absolute left-[-11px] top-1 w-5 h-5 bg-[#CBB47B] rounded-full border border-[#9F8A5A]" />
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Parkplätze & Zufahrten – oft unterschätzt
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Gerade in der Nähe des Zentrums ist der Platz knapp.  
          Wir prüfen schon vorab, wo das Fahrzeug stehen kann und welches Zeitfenster 
          sich dafür anbietet. Das spart am Einsatztag viel Zeit und sorgt für einen 
          ruhigen Ablauf.
        </p>
      </div>

      {/* Punkt 4 */}
      <div className="relative pl-8">
        <span className="absolute left-[-11px] top-1 w-5 h-5 bg-[#CBB47B] rounded-full border border-[#9F8A5A]" />
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Häuser mit mehreren Ebenen & Nebenräumen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Viele Einfamilienhäuser in Baden Umgebung verfügen über Dachboden, Keller,
          Garage und zusätzlichen Stauraum. Wir arbeiten von oben nach unten oder 
          umgekehrt – je nachdem, was für das Gebäude und den Ablauf am sinnvollsten ist.
        </p>
      </div>

    </div>

    {/* Abschluss – другой тип блока */}
    <div className="mt-14 bg-[#FAFAFA] border border-[#E8E1D9] rounded-3xl p-8 shadow-sm">
      <p className="text-[16px] text-[#2B3A42] leading-relaxed font-medium text-center">
        Jede Immobilie in Baden bringt ihre eigenen Herausforderungen mit sich.  
        Entscheidend ist eine Planung, die genau auf diese Besonderheiten eingeht.
      </p>
    </div>

  </div>
</section>
{/* ====================================================================== */}
{/* SEKTION 5 – Kosten Ihrer Entrümpelungsfirma in Baden                   */}
{/* ====================================================================== */}

<section
  id="kosten-entruempelung-baden"
  aria-label="Kosten Entrümpelungsfirma Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Kosten Ihrer Entrümpelungsfirma in Baden – fair & nachvollziehbar
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Jede Immobilie in Baden ist anders aufgebaut – deshalb gibt es keine pauschalen 
      Preise, die für alle Situationen passen. Damit Sie frühzeitig wissen, womit Sie 
      rechnen können, erhalten Sie nach der Besichtigung immer ein klares Fixpreis-Angebot. 
      Ohne Überraschungen, ohne versteckte Zusatzpunkte.
    </p>

    {/* BLOCK 1 – Preisfaktoren */}
    <div className="mt-12 bg-white border border-[#E8E1D9] rounded-3xl shadow-sm p-10">
      <h3 className="text-xl font-semibold text-[#2B3A42]">
        Welche Faktoren bestimmen den Preis?
      </h3>

      <ul className="mt-5 space-y-3 text-[15px] text-[#4B3C30] leading-relaxed">
        <li>— Größe der Wohnung oder des Hauses</li>
        <li>— Wie viele Räume & Nebenräume dazugehören</li>
        <li>— Zugänglichkeit (Stiegenhaus, Lift, Hof, Zufahrt)</li>
        <li>— Ob ein fixer Termin eingehalten werden muss</li>
        <li>— Art und Umfang der gewünschten Zusatzarbeiten</li>
      </ul>

      <p className="mt-5 text-[15px] text-[#4B3C30]">
        Damit alles fair bleibt, kalkulieren wir ausschließlich nach Aufwand und 
        tatsächlichem Objekt – nicht nach Schätzungen oder ungefähren Angaben.
      </p>
    </div>

    {/* BLOCK 2 – Preisspannen, anderes оформление */}
    

  </div>
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

{/* ========================================================================= */}
{/* SEKTION 6 – Praxisbeispiele Ihrer Entrümpelungsfirma in Baden             */}
{/* ========================================================================= */}

<section
  id="praxisbeispiele-entruempelung-baden"
  aria-label="Praxisbeispiele Entrümpelung Baden"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Praxisbeispiele Ihrer Entrümpelungsfirma in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Unsere Einsätze in Baden sind vielfältig. Jede Immobilie bringt ihre eigene 
      Geschichte mit – und genau diese Erfahrungen machen unsere Arbeit so persönlich 
      und gut planbar. Drei Beispiele aus den letzten Monaten:
    </p>

    {/* FALLBEISPIELE – новый формат */}
    <div className="mt-14 space-y-12">

      {/* Fall 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-10 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Fall 1: 3-Zimmer-Wohnung im Zentrum von Baden
        </h3>

        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Die Wohnung befand sich in einem Altbau nahe der Badener Hauptstraße. Enges 
          Stiegenhaus, kein Lift, viele kleine Nischen – eine klassische Innenstadtlage.
        </p>

        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Die Eigentümerin wollte die Wohnung für den Verkauf vorbereiten. Wichtig war 
          ein fester Termin, da bereits ein Gutachter angekündigt war.
        </p>

        <blockquote className="mt-4 border-l-4 border-[#CBB47B] pl-4 italic text-[#4B3C30] text-[15px]">
          „Wir haben die gesamte Wohnung in sechs Stunden leer gemacht und alle Räume 
          getrennt abgearbeitet, damit es trotz enger Zugänge ruhig abläuft.“
        </blockquote>

        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Übergabe war noch am selben Nachmittag möglich – inklusive aller Nebenräume.
        </p>
      </div>

      {/* Fall 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-10 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Fall 2: Hausentrümpelung in Baden-Umgebung
        </h3>

        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein Einfamilienhaus mit drei Etagen, großem Keller und einem Dachboden, der 
          seit vielen Jahren nicht mehr betreten worden war. Die Familie brauchte 
          Unterstützung, weil die Immobilie kurzfristig übergeben werden sollte.
        </p>

        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Unser Team arbeitete zwei Tage vor Ort. Wir sind strukturiert von oben 
          gestartet, um später nicht alles durch die bereits sauberen Räume tragen 
          zu müssen.
        </p>

        <blockquote className="mt-4 border-l-4 border-[#CBB47B] pl-4 italic text-[#4B3C30] text-[15px]">
          „Für solche Häuser braucht man ein Team, das sich untereinander blind 
          versteht. Jeder weiß, wer welchen Bereich übernimmt.“
        </blockquote>

        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Am Ende war das komplette Haus leer – einschließlich Garage und Nebenräume.
        </p>
      </div>

      {/* Fall 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-10 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Fall 3: Räumung einer kleinen Geschäftsfläche
        </h3>

        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein kleines Verkaufslokal musste kurzfristig geräumt werden, da der Mietvertrag 
          auslief. Die Herausforderung: wenig Platz vor dem Gebäude und nur ein schmales 
          Zeitfenster am Vormittag.
        </p>

        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wir haben den Einsatz exakt geplant und die Räumung so organisiert, dass die 
          Nachbarbetriebe nicht beeinträchtigt wurden.
        </p>

        <blockquote className="mt-4 border-l-4 border-[#CBB47B] pl-4 italic text-[#4B3C30] text-[15px]">
          „Termindruck ist kein Problem, wenn der Ablauf davor stimmt. Hier war jede 
          Minute eingeplant.“
        </blockquote>

        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Die Fläche war nach knapp drei Stunden vollständig leer und bereit für die 
          Übergabe.
        </p>
      </div>

    </div>

  </div>
</section>
{/* ========================================================================= */}
{/* SEKTION 7 – Vorteile Ihrer Entrümpelungsfirma in Baden                     */}
{/* ========================================================================= */}

<section
  id="vorteile-entruempelungsfirma-baden"
  aria-label="Vorteile Entrümpelung Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Ihre Vorteile mit einer regionalen Entrümpelungsfirma in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Wer in Baden eine Räumung plant, profitiert von einem Team, das die Gegend kennt, 
      kurze Wege nutzt und genau weiß, welche Herausforderungen hier typischerweise 
      auftreten. Das erleichtert die Organisation enorm – sowohl für Sie als auch für uns.
    </p>

    {/* FEATURE-BÄNDER – новый формат */}
    <div className="mt-14 flex flex-col space-y-8">

      {/* Vorteil 1 */}
      <div className="bg-white border-l-4 border-[#CBB47B] shadow-sm rounded-xl p-8">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Kurze Wege & schnelle Termine
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Da wir regelmäßig in Baden unterwegs sind, lassen sich Besichtigungen 
          kurzfristig organisieren – oft schon am selben oder nächsten Tag. Das spart 
          Zeit und gibt Ihnen rasch eine klare Entscheidungsgrundlage.
        </p>
      </div>

      {/* Vorteil 2 */}
      <div className="bg-[#F0ECE6] border-l-4 border-[#CBB47B] shadow-sm rounded-xl p-8">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Fixpreise & klare Absprachen ohne Überraschungen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Nach der Besichtigung erhalten Sie ein verbindliches Angebot, das alle 
          Details umfasst. Keine undeutlichen Formulierungen, kein Hin und Her – Sie 
          wissen im Voraus, was gemacht wird und zu welchem Preis.
        </p>
      </div>

      {/* Vorteil 3 */}
      <div className="bg-white border-l-4 border-[#CBB47B] shadow-sm rounded-xl p-8">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Erfahrung mit sensiblen Situationen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Manche Räumungen entstehen aus persönlichen Gründen. In solchen Fällen 
          arbeiten wir ruhig, respektvoll und ohne Druck. Sie bestimmen den Rahmen – 
          wir passen uns an.
        </p>
      </div>

      {/* Vorteil 4 */}
      <div className="bg-[#F0ECE6] border-l-4 border-[#CBB47B] shadow-sm rounded-xl p-8">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Vertraut mit Hausverwaltungen & Wohnanlagen in Baden
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Viele Wohnhäuser in Baden haben klare Regeln zu Zeiten, Stiegenhäusern und 
          Zufahrten. Wir kennen diese Strukturen – das erleichtert Absprachen und 
          verhindert organisatorische Verzögerungen.
        </p>
      </div>

      {/* Vorteil 5 */}
      <div className="bg-white border-l-4 border-[#CBB47B] shadow-sm rounded-xl p-8">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Ein Ansprechpartner für den gesamten Ablauf
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Von der ersten Frage bis zur Übergabe bleibt alles bei einem Team und einer 
          Kontaktperson. Das macht den gesamten Prozess übersichtlich und angenehm.
        </p>
      </div>

    </div>

  </div>
</section>
{/* =================================================================================== */}
{/* SEKTION 8 – Experten-Tipps für eine entspannte Entrümpelung in Baden                */}
{/* =================================================================================== */}

<section
  id="experten-tipps-entruempelung-baden"
  aria-label="Experten Tipps Entrümpelung Baden"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Experten-Tipps für eine entspannte Entrümpelung in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Aus hunderten Einsätzen in Baden wissen wir, welche kleinen Schritte besonders 
      viel Ruhe in den Ablauf bringen. Hier sind fünf Tipps, die fast immer 
      den Unterschied machen.
    </p>

    {/* TIPPS – новый формат: nummerierte „Notizzettel“ */}
    <div className="mt-14 grid gap-10 md:grid-cols-2">

      {/* Tipp 1 */}
      <div className="relative bg-[#FAFAFA] border border-[#E8E1D9] rounded-2xl p-8 shadow-sm">
        <div className="absolute -top-4 left-6 bg-[#CBB47B] text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
          1
        </div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Früh genug klären, was wirklich wichtig ist
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Dokumente, persönliche Erinnerungen und Alltagsdinge, die Sie weiterhin 
          benötigen, sollten Sie möglichst vor dem Termin sichern. So bleibt am 
          Tag der Räumung alles übersichtlich.
        </p>
      </div>

      {/* Tipp 2 */}
      <div className="relative bg-[#FAFAFA] border border-[#E8E1D9] rounded-2xl p-8 shadow-sm">
        <div className="absolute -top-4 left-6 bg-[#CBB47B] text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
          2
        </div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Übergabetermine vorher fixieren
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Wenn ein Vermieter, Käufer oder Makler beteiligt ist, helfen klare 
          Zeitfenster enorm. Sobald feststeht, wann das Objekt leer sein muss, 
          lässt sich alles exakt planen.
        </p>
      </div>

      {/* Tipp 3 */}
      <div className="relative bg-[#FAFAFA] border border-[#E8E1D9] rounded-2xl p-8 shadow-sm">
        <div className="absolute -top-4 left-6 bg-[#CBB47B] text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
          3
        </div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Schlüssel & Zugänge bereit halten
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Besonders in Wohnanlagen in Baden ist es hilfreich, wenn alle nötigen 
          Schlüssel oder Codes vorab bereitliegen. Das verhindert Wartezeiten und 
          hält den Ablauf flüssig.
        </p>
      </div>

      {/* Tipp 4 */}
      <div className="relative bg-[#FAFAFA] border border-[#E8E1D9] rounded-2xl p-8 shadow-sm">
        <div className="absolute -top-4 left-6 bg-[#CBB47B] text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
          4
        </div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Eine Ansprechperson bestimmt den Ton
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Wenn mehrere Familienmitglieder oder Beteiligte involviert sind, hilft 
          es enorm, wenn eine Person die finalen Entscheidungen trifft. Das macht 
          alles deutlich entspannter.
        </p>
      </div>

      {/* Tipp 5 */}
      <div className="relative bg-[#FAFAFA] border border-[#E8E1D9] rounded-2xl p-8 shadow-sm md:col-span-2">
        <div className="absolute -top-4 left-6 bg-[#CBB47B] text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
          5
        </div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Frühzeitig Fotos schicken – spart Zeit bei der Planung
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Gerade wenn es schnell gehen muss, sind ein paar Bilder vorab Gold wert. 
          Wir sehen sofort, wie viele Räume betroffen sind und welche Besonderheiten 
          berücksichtigt werden müssen.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ========================================================================= */}
{/* SEKTION 9 – FAQ Entrümpelungsfirma Baden                                   */}
{/* ========================================================================= */}

<section
  id="faq-entruempelung-baden"
  aria-label="FAQ Entrümpelungsfirma Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      FAQ – Entrümpelungsfirma Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] text-[#334049] leading-relaxed">
      Viele Fragen tauchen immer wieder auf, besonders wenn man zum ersten Mal eine
      Entrümpelung organisiert. Hier finden Sie kompakte, klare Antworten auf die
      häufigsten Punkte unserer Kundinnen und Kunden aus Baden.
    </p>

    {/* FAQ-Blöcke */}
    <div className="mt-14 space-y-6">

      {/* Q1 */}
      <details className="bg-white border border-[#E8E1D9] rounded-2xl p-6 shadow-sm">
        <summary className="cursor-pointer text-lg font-semibold text-[#2B3A42]">
          Wie schnell können Sie in Baden einen Termin anbieten?
        </summary>
        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Sehr oft bereits am selben oder nächsten Tag. Da wir täglich in Baden und 
          Umgebung unterwegs sind, lassen sich Besichtigungen kurzfristig einschieben – 
          auch abends oder zu Randzeiten, wenn es sein muss.
        </p>
      </details>

      {/* Q2 */}
      <details className="bg-white border border-[#E8E1D9] rounded-2xl p-6 shadow-sm">
        <summary className="cursor-pointer text-lg font-semibold text-[#2B3A42]">
          Ist die Besichtigung wirklich kostenlos und unverbindlich?
        </summary>
        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Ja – die Vor-Ort-Besichtigung in Baden ist immer kostenfrei. Sie erhalten 
          danach ein Fixpreis-Angebot, das Sie in Ruhe prüfen können. Es entsteht 
          keinerlei Verpflichtung.
        </p>
      </details>

      {/* Q3 */}
      <details className="bg-white border border-[#E8E1D9] rounded-2xl p-6 shadow-sm">
        <summary className="cursor-pointer text-lg font-semibold text-[#2B3A42]">
          Muss ich während der Entrümpelung persönlich anwesend sein?
        </summary>
        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Nein, das ist nicht notwendig. Viele Kundinnen und Kunden übergeben uns 
          nur den Schlüssel oder hinterlegen ihn. Wir dokumentieren jeden Schritt 
          genau und melden uns, falls Rücksprachen gebraucht werden.
        </p>
      </details>

      {/* Q4 */}
      <details className="bg-white border border-[#E8E1D9] rounded-2xl p-6 shadow-sm">
        <summary className="cursor-pointer text-lg font-semibold text-[#2B3A42]">
          Arbeiten Sie auch am Wochenende?
        </summary>
        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Bei Bedarf ja. Besonders bei Übergabeterminen, Geschäftsschließungen oder 
          engen Zeitfenstern arbeiten wir auch samstags – nach vorheriger Absprache.
        </p>
      </details>

      {/* Q5 */}
      <details className="bg-white border border-[#E8E1D9] rounded-2xl p-6 shadow-sm">
        <summary className="cursor-pointer text-lg font-semibold text-[#2B3A42]">
          Übernehmen Sie auch nur einzelne Räume?
        </summary>
        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Natürlich. Häufig räumen wir nur Keller, Dachboden, Abstellkammern oder ein 
          einzelnes Zimmer. Auch kleine Aufträge werden bei uns professionell erledigt.
        </p>
      </details>

      {/* Q6 */}
      <details className="bg-white border border-[#E8E1D9] rounded-2xl p-6 shadow-sm">
        <summary className="cursor-pointer text-lg font-semibold text-[#2B3A42]">
          Können Sie bei engem Zeitplan helfen?
        </summary>
        <p className="mt-4 text-[15px] text-[#4B3C30] leading-relaxed">
          Ja. Wenn ein fester Übergabetermin bevorsteht, richten wir den gesamten Ablauf 
          danach aus. Schnelle Besichtigung, fixe Planung und ein Team, das eingespielt ist.
        </p>
      </details>

    </div>

    {/* JSON-LD FAQ Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Wie schnell können Sie in Baden einen Termin anbieten?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Sehr oft bereits am selben oder nächsten Tag. Da wir täglich in Baden und Umgebung unterwegs sind, lassen sich Besichtigungen kurzfristig einschieben."
              }
            },
            {
              "@type": "Question",
              "name": "Ist die Besichtigung kostenlos und unverbindlich?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Ja, die Vor-Ort-Besichtigung in Baden ist immer kostenfrei. Danach erhalten Sie ein Fixpreis-Angebot ohne Verpflichtung."
              }
            },
            {
              "@type": "Question",
              "name": "Muss ich während der Entrümpelung anwesend sein?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Nein, das ist nicht notwendig. Viele Kundinnen und Kunden übergeben uns nur den Schlüssel. Wir arbeiten selbstständig und informieren bei Bedarf."
              }
            },
            {
              "@type": "Question",
              "name": "Arbeiten Sie auch am Wochenende?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Ja, nach Absprache sind auch Wochenendtermine möglich – besonders bei engen Übergabefristen."
              }
            },
            {
              "@type": "Question",
              "name": "Übernehmen Sie auch einzelne Räume?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Ja, wir kümmern uns auch um einzelne Räume wie Keller, Dachboden oder Abstellflächen."
              }
            },
            {
              "@type": "Question",
              "name": "Können Sie bei engem Zeitplan helfen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Ja. Bei fixen Terminen gestalten wir den Ablauf so, dass alles rechtzeitig erledigt ist."
              }
            }
          ]
        })
      }}
    />
  </div>
</section>
{/* ========================================================================= */}
{/* SEKTION 10 – Kontakt Entrümpelungsfirma Baden                              */}
{/* ========================================================================= */}

<section
  id="kontakt-entruempelung-baden"
  aria-label="Kontakt Entrümpelungsfirma Baden"
  className="relative bg-[#2B3A42] py-24 md:py-28"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10 text-white">

    {/* Überschrift */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
      Kontakt zur Entrümpelungsfirma in Baden
    </h2>

    <p className="mt-5 max-w-3xl text-[16px] md:text-[18px] leading-relaxed opacity-90">
      Ganz gleich, ob es um eine Wohnung, ein Haus oder eine Geschäftsfläche geht – 
      wir unterstützen Sie in Baden mit klaren Abläufen, schnellen Terminen und 
      einer ruhigen, gut koordinierten Arbeitsweise. Eine kurze Nachricht reicht 
      völlig aus, und wir kümmern uns um den Rest.
    </p>

    {/* CTA-BLOCK */}
    <div className="mt-12 flex flex-col sm:flex-row gap-4">

      <a
        href="tel:+436767202623"
        className="bg-white text-[#2B3A42] rounded-xl px-8 py-4 text-sm font-semibold shadow-md transition hover:bg-[#F5F5F5]"
      >
        Anrufen: +43 676 720 26 23
      </a>

      <a
        href="https://wa.me/436767202623"
        target="_blank"
        className="bg-[#CBB47B] text-white rounded-xl px-8 py-4 text-sm font-semibold shadow-md transition hover:opacity-90"
      >
        WhatsApp Nachricht
      </a>

      <a
        href="mailto:info@badenentruempelung.at"
        className="bg-transparent border border-white text-white rounded-xl px-8 py-4 text-sm font-semibold shadow-md transition hover:bg-white hover:text-[#2B3A42]"
      >
        E-Mail senden
      </a>

    </div>

    {/* Abschluss */}
    <div className="mt-14 border-t border-white/20 pt-10">
      <p className="text-[15px] md:text-[16px] opacity-80 leading-relaxed max-w-3xl">
        Wenn Sie möchten, können Sie uns vorab auch Fotos schicken.  
        Das spart Zeit bei der Planung – besonders bei kurzfristigen Terminen  
        oder wenn mehrere Räume betroffen sind.
      </p>
    </div>

  </div>
</section>








    </main>
  );
}
