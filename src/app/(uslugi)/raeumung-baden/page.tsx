// ==========================
// METADATA
// ==========================
export function generateMetadata() {
  return {
    title: "Räumung Baden – schnelle & professionelle Hilfe",
    description:
      "Räumung Baden für Wohnung, Haus oder Betrieb. Kostenlose Besichtigung, Fixpreise und zügige Abwicklung. Jetzt Termin sichern.",
    openGraph: {
      title: "Räumung Baden – professionelle Unterstützung",
      description:
        "Zuverlässige Räumung in Baden: Wohnungen, Häuser, Keller, Dachböden und Geschäftsflächen. Kostenlose Besichtigung & faire Fixpreise.",
      url: "https://badenentruempelung.at/raeumung-baden/",
      type: "website",
      images: [
        {
          url: "/images/raeumung-baden.webp",
          width: 1200,
          height: 630,
          alt: "Räumung Baden",
        },
      ],
    },
  };
}

// ==========================
// PAGE
// ==========================
export default function RaeumungBadenPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">

      {/* ====================== */}
      {/* HERO / SECTION 1      */}
      {/* ====================== */}
      <section
        id="hero-raeumung-baden"
        aria-label="Räumung Baden"
        className="relative bg-[#F5F3F0] pt-24 pb-20 md:pt-28 md:pb-24"
      >
        <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

          {/* HERO TEXT */}
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#2B3A42]">
              Räumung Baden – professionelle Hilfe für Wohnung, Haus & Betrieb
            </h1>

            <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-[#334049]">
              Ob kleine Wohnung, geräumiges Haus oder komplette Geschäftsfläche –
              eine Räumung in Baden braucht klare Planung und jemanden, der die
              Abläufe im Griff hat. Wir bieten schnelle Termine, eine kostenlose
              Besichtigung und transparente Fixpreise. Ohne Stress, ohne lange
              Wartezeiten und mit einem Ergebnis, das Sie sofort weiterbringt.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+436767202623"
                className="bg-[#2B3A42] text-white rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition hover:bg-[#1f2b30]"
              >
                Jetzt anrufen: +43 676 720 26 23
              </a>
              <a
                href="https://wa.me/436767202623"
                target="_blank"
                className="bg-[#CBB47B] text-white rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition hover:opacity-90"
              >
                WhatsApp schreiben
              </a>
            </div>
          </div>

          {/* IMAGE BLOCK */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-lg border border-[#E8E1D9]">
            <img
              src="/images/raeumung-baden.webp"
              alt="Räumung Baden – professionelle Unterstützung"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* ===== SEKTION 2: In welchen Situationen eine Räumung in Baden notwendig wird ===== */}
<section
  id="raeumung-situationen-baden"
  aria-label="Wann eine Räumung in Baden sinnvoll ist"
  className="relative bg-white py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      In welchen Situationen eine Räumung in Baden notwendig wird
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Eine Räumung entsteht selten aus einer spontanen Laune – meistens gibt es
      klare Gründe, die schnellen und gut strukturierten Einsatz erfordern.
      Gerade in Baden, wo Altbauwohnungen, moderne Anlagen und historische Häuser
      dicht nebeneinanderstehen, sind die Auslöser oft sehr unterschiedlich.
      Die folgenden Beispiele zeigen, wann eine professionelle Räumung besonders
      hilfreich ist und wie sie den gesamten Ablauf deutlich erleichtert.
    </p>

    {/* GRID – Situationen */}
    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Wohnungsräumung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wohnungsräumung nach Umzug oder Auszug
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Wenn ein Umzug bevorsteht oder eine Wohnung nach vielen Jahren
          übergeben werden muss, bleibt oft wenig Zeit. Möbel, Kartons,
          persönliche Dinge – alles muss raus, bevor Vermieter oder Käufer die
          Schlüssel übernehmen. Genau hier sorgt ein professionelles Team für
          klare Struktur und reibungslose Abläufe.
        </p>
      </div>

      {/* Todesfall */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Räumung nach einem Todesfall
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Diese Situation ist emotional besonders belastend. Angehörige stehen
          vor der Aufgabe, persönliche Räume aufzulösen und gleichzeitig viele
          organisatorische Entscheidungen zu treffen. Eine einfühlsame,
          respektvolle Räumung nimmt viel Druck aus der Situation und sorgt
          dafür, dass alles Schritt für Schritt abgewickelt wird.
        </p>
      </div>

      {/* Hausräumung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Hausräumung in Baden & Umgebung
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Ein Haus hat meist deutlich mehr Räume, Nebenzimmer und Außenbereiche
          als eine Wohnung. Vom Dachboden bis zum Gartenhaus kann alles
          dazugehören. Eine Hausräumung verlangt daher besonders gute Planung,
          damit jeder Bereich systematisch und ohne Zeitverlust freigemacht wird.
        </p>
      </div>

      {/* Keller & Dachboden */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Keller- & Dachbodenräumung
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Keller und Dachböden sind oft über viele Jahre hinweg Ablageflächen
          für Dinge, die „später vielleicht noch gebraucht werden“. Wenn dann
          doch eine Übergabe ansteht oder Platz geschaffen werden muss, zeigt
          sich schnell, wie umfangreich diese Bereiche sein können.
        </p>
      </div>

      {/* Geschäftsflächen */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Räumung von Büros & Geschäftsflächen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          In Baden gibt es viele kleine und mittelgroße Betriebe. Wenn ein
          Standort aufgegeben oder verlegt wird, müssen Möbel, Technik und
          Arbeitsbereiche zügig freigemacht werden. Eine professionelle Räumung
          sorgt dafür, dass der Betrieb nicht länger stillsteht als nötig.
        </p>
      </div>

      {/* Teilbereich-Räumung */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Räumung einzelner Räume oder Teilbereiche
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Nicht immer muss ein kompletter Standort geleert werden. Manchmal geht
          es nur um ein Kinderzimmer, einen Abstellraum, ein Archiv oder eine
          Garage. Auch solche Teilräumungen lassen sich schnell und flexibel
          organisieren.
        </p>
      </div>

    </div>

    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white shadow-sm px-6 py-5 text-center text-[15px] text-[#2B3A42] font-medium">
      Eine Räumung in Baden hat viele Gründe – entscheidend ist, dass sie
      gut geplant und ohne Stress abläuft.
    </div>

  </div>
</section>
{/* ====================== */}
{/* SEKTION 3 – Leistungen */}
{/* ====================== */}

<section
  id="leistungen-raeumung-baden"
  aria-label="Leistungen bei der Räumung in Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Leistungen bei der Räumung in Baden – alles aus einer Hand
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Jede Räumung in Baden ist anders. Manchmal geht es um eine kompakte Wohnung, 
      manchmal um ein weitläufiges Haus oder mehrere Räume eines Betriebs. 
      Damit Sie sich um nichts kümmern müssen, übernehmen wir alle Schritte – 
      von der ersten Einschätzung bis zur besenreinen Übergabe. Klar strukturiert, 
      transparent und mit einem Team, das weiß, wie man auch anspruchsvolle Flächen 
      effizient freimacht.
    </p>

    {/* GRID – Leistungen */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Leistung 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wohnungsräumung – vom Einzimmerapartment bis zur Familienwohnung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wohnungen in Baden unterscheiden sich stark – vom Altbau nahe des Zentrums 
          bis zu modernen Wohnanlagen am Stadtrand. Wir räumen jeden Bereich komplett, 
          inklusive Möbel, kleinen Gegenständen und abgelegenen Ecken, die oft übersehen werden.
        </p>
      </div>

      {/* Leistung 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Hausräumung – inklusive Keller, Garage und Dachboden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein Haus zu räumen bedeutet meist: viele Räume, viele Ebenen und zahlreiche 
          Nebenflächen. Wir übernehmen alles, vom Dachboden über den Wohnbereich 
          bis hin zur Garage oder Gartenhütte, damit Sie die gesamte Immobilie 
          ohne Mehraufwand übergeben können.
        </p>
      </div>

      {/* Leistung 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Keller- & Dachbodenräumung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Über die Jahre sammeln sich hier oft Dinge an, von denen niemand mehr 
          genau weiß, wie lange sie schon dort liegen. Wir schaffen Platz, 
          räumen gründlich und sorgen dafür, dass diese Bereiche wieder nutzbar werden 
          – oder bereit für Übergabe sind.
        </p>
      </div>

      {/* Leistung 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Räumung von Büros & Geschäftsflächen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In Baden gibt es viele Betriebe, Kanzleien, kleine Shops und Ateliers. 
          Wir räumen Arbeitsplätze, Regale, Verkaufsflächen und Nebenräume, 
          damit ein Standort zügig übergeben oder neu genutzt werden kann.
        </p>
      </div>

      {/* Leistung 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Demontagen nach Bedarf
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Manche Möbel oder Einbauten lassen sich nicht einfach tragen. 
          Wir übernehmen notwendige Demontagen – von großen Schränken bis 
          zu montierten Regalen. Alles wird sauber ausgeführt, damit die Räume 
          anschließend übergabefertig sind.
        </p>
      </div>

      {/* Leistung 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm transition hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Teilräumungen & gezielte Bereiche
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Manchmal geht es nicht um das ganze Objekt. Wir räumen auf Wunsch 
          einzelne Zimmer, Lagerräume, Archivflächen oder bestimmte Abschnitte 
          einer Immobilie – flexibel und zuverlässig.
        </p>
      </div>

    </div>

    {/* Abschluss */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-[#FFFFFF] shadow-sm px-6 py-5 text-center text-[15px] text-[#2B3A42] font-medium">
      Eine Räumung in Baden ist so individuell wie die Menschen dahinter – 
      deshalb bieten wir Lösungen, die wirklich zu Ihrer Situation passen.
    </div>

  </div>
</section>
{/* =============================== */}
{/* SEKTION 4 – Besonderheiten Baden */}
{/* =============================== */}

<section
  id="besonderheiten-raeumung-baden"
  aria-label="Besonderheiten bei Räumungen in Baden"
  className="relative bg-white py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Besonderheiten bei Räumungen in Baden und Umgebung
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Baden hat eine besondere Mischung aus historischen Gebäuden, 
      modernen Wohnanlagen und ruhigen Siedlungsbereichen. Jede dieser 
      Wohn- und Geschäftsformen bringt eigene Anforderungen mit sich. 
      Wer hier räumt, braucht einen strukturierten Ablauf und ein Team, 
      das sich an die jeweiligen Gegebenheiten flexibel anpassen kann.
    </p>

    {/* GRID – Besonderheiten */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Besonderheit 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Altbauwohnungen im Zentrum
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Die Kernzone von Baden ist geprägt von Altbauten mit hohen Räumen 
          und oft engen Stiegenhäusern. Räumungen erfordern hier besonders 
          sorgfältige Planung, da die Wege schmal sind und der Zugang nicht 
          immer direkt möglich ist.
        </p>
      </div>

      {/* Besonderheit 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wohnanlagen mit klaren Hausregeln
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Moderne Wohnanlagen in Baden haben oft feste Zeitfenster für Lieferung 
          und Abtransport. Wir stimmen die Abläufe mit den Gegebenheiten ab, 
          damit der Tagesrhythmus der Bewohner möglichst ungestört bleibt.
        </p>
      </div>

      {/* Besonderheit 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Zufahrten & Parkmöglichkeiten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In vielen Straßen rund um das Zentrum sind Parkplätze knapp. 
          Um den Ablauf nicht zu verzögern, planen wir die Zufahrt 
          im Vorfeld und nutzen Zeitfenster, in denen kurze Ladezonen 
          frei sind.
        </p>
      </div>

      {/* Besonderheit 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Reihenhäuser & Einfamilienhäuser
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In den Siedlungsgebieten von Baden bestehen Häuser oft aus 
          mehreren Ebenen. Von Keller bis Dachboden berücksichtigen wir 
          alle Bereiche und arbeiten in klaren Abschnitten, damit die 
          Räumung zügig vorankommt.
        </p>
      </div>

      {/* Besonderheit 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Gewerbeflächen & Büros
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Baden hat viele kleine Gewerbeeinheiten, Praxen und 
          Verkaufsflächen. Hier spielt Zeit eine große Rolle, 
          denn oft gibt es feste Übergabetermine. Wir passen 
          unsere Abläufe exakt an diese Vorgaben an.
        </p>
      </div>

      {/* Besonderheit 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Rücksicht auf Nachbarn & Hausgemeinschaft
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Baden ist bekannt für ruhige Wohngebiete. Deshalb arbeiten wir 
          so, dass der Ablauf möglichst sanft in die Umgebung integriert ist – 
          mit klaren Absprachen und einem Team, das respektvoll und rücksichtsvoll 
          vorgeht.
        </p>
      </div>

    </div>

    {/* Abschlussband */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white shadow-sm px-6 py-5 text-center text-[15px] text-[#2B3A42] font-medium">
      Jede Räumung in Baden hat eigene Rahmenbedingungen – mit Erfahrung und guter 
      Planung lässt sich jede davon mühelos meistern.
    </div>

  </div>
</section>
{/* ============================================ */}
{/* SEKTION 5 – Ablauf einer Räumung in Baden     */}
{/* ============================================ */}

<section
  id="ablauf-raeumung-baden"
  aria-label="Ablauf einer Räumung in Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Ablauf einer Räumung in Baden – Schritt für Schritt
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Eine Räumung wirkt auf den ersten Blick oft überwältigend, doch mit einer klaren
      Struktur wird daraus ein überschaubarer Prozess. Wir arbeiten nach einem Ablauf,
      der sich in Baden über viele Jahre bewährt hat – transparent, logisch und ohne
      unnötigen Zeitverlust.
    </p>

    {/* TIMELINE GRID */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Schritt 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <div className="text-[#CBB47B] text-xl font-bold">1</div>
        <h3 className="mt-2 text-lg font-semibold text-[#2B3A42]">
          Erste Kontaktaufnahme
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Sie rufen an oder schreiben uns kurz, worum es geht: Wohnung, Haus, Keller,
          einzelne Räume oder eine Geschäftsfläche. Ein paar Infos reichen aus, um einen
          ersten Überblick zu bekommen und den passenden Termin vorzuschlagen.
        </p>
      </div>

      {/* Schritt 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <div className="text-[#CBB47B] text-xl font-bold">2</div>
        <h3 className="mt-2 text-lg font-semibold text-[#2B3A42]">
          Kostenlose Besichtigung direkt in Baden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Vor Ort sehen wir uns alles in Ruhe an. Sie erklären, was genau gemacht werden
          soll, und wir klären offene Fragen. Die Besichtigung ist unverbindlich und
          dauert meist nur wenige Minuten.
        </p>
      </div>

      {/* Schritt 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <div className="text-[#CBB47B] text-xl font-bold">3</div>
        <h3 className="mt-2 text-lg font-semibold text-[#2B3A42]">
          Transparenter Fixpreis
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Nach der Besichtigung wissen wir genau, welchen Aufwand die Räumung hat.
          Sie erhalten einen Fixpreis, der alle Schritte abdeckt. Ohne Überraschungen,
          ohne versteckte Positionen.
        </p>
      </div>

      {/* Schritt 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <div className="text-[#CBB47B] text-xl font-bold">4</div>
        <h3 className="mt-2 text-lg font-semibold text-[#2B3A42]">
          Durchführung der Räumung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Am vereinbarten Tag arbeitet unser Team zügig und strukturiert. Jeder weiß,
          welche Aufgaben anstehen, und die Räume werden systematisch freigemacht.
          Sie müssen nicht vor Ort sein – wir halten Sie auf Wunsch per Telefon oder
          WhatsApp am Laufenden.
        </p>
      </div>

      {/* Schritt 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <div className="text-[#CBB47B] text-xl font-bold">5</div>
        <h3 className="mt-2 text-lg font-semibold text-[#2B3A42]">
          Kontrolle & besenreine Übergabe
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Sobald alles fertig ist, machen wir einen gemeinsamen Rundgang – oder senden
          Fotos, falls Sie nicht vor Ort sein können. Die Fläche ist anschließend
          bereit für Vermieter, Käufer oder neue Nutzung.
        </p>
      </div>

      {/* Schritt 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <div className="text-[#CBB47B] text-xl font-bold">6</div>
        <h3 className="mt-2 text-lg font-semibold text-[#2B3A42]">
          Abschluss & kurze Rückmeldung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Nach der Übergabe erhalten Sie auf Wunsch eine kurze Zusammenfassung. 
          Viele Auftraggeber in Baden buchen uns anschließend erneut für Keller, 
          Dachboden oder weitere Räume – weil der Ablauf klar, angenehm und 
          nachvollziehbar ist.
        </p>
      </div>

    </div>

    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white shadow-sm px-6 py-5 text-center text-[15px] text-[#2B3A42] font-medium">
      Ein klarer Ablauf sorgt dafür, dass Ihre Räumung in Baden schnell, 
      transparent und ohne Stress erledigt wird.
    </div>

  </div>
</section>
{/* ============================================= */}
{/* SEKTION 6 – Kosten einer Räumung in Baden       */}
{/* ============================================= */}

<section
  id="kosten-raeumung-baden"
  aria-label="Kosten einer Räumung in Baden"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Kosten einer Räumung in Baden – transparent & nachvollziehbar
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Jeder Auftrag in Baden ist unterschiedlich: Größe der Fläche, Menge der 
      Gegenstände, Zugänglichkeit oder die gewünschte Zeitspanne spielen eine 
      große Rolle. Damit Sie von Beginn an Klarheit haben, arbeiten wir mit 
      Fixpreisen, die nach der Besichtigung festgelegt werden. Ohne Zusatzkosten, 
      ohne Überraschungen.
    </p>

    {/* GRID – Kostenfaktoren */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Faktor 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Größe & Art der Räumung
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Eine kleine Stadtwohnung, ein großes Haus oder mehrere Räume eines 
          Betriebs: Je nach Fläche und Umfang verändert sich der Aufwand. 
          Dadurch ergibt sich der grundlegende Preisrahmen.
        </p>
      </div>

      {/* Faktor 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Zugänglichkeit der Räume
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Enge Stiegenhäuser im Zentrum, längere Wege in großen Wohnanlagen 
          oder Häuser mit mehreren Ebenen beeinflussen Zeit und Ablauf. 
          Wir berücksichtigen das bereits vorab bei der Preisgestaltung.
        </p>
      </div>

      {/* Faktor 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Menge & Beschaffenheit der Gegenstände
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Je nachdem, wie viele Möbel, Kisten oder sonstige Inhalte vorhanden sind, 
          verändert sich der Zeitaufwand. Wir prüfen das bei der Besichtigung 
          und erstellen darauf basierend ein realistisches Angebot.
        </p>
      </div>

      {/* Faktor 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Termin & gewünschte Geschwindigkeit
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Einige Räumungen müssen besonders schnell gehen, zum Beispiel 
          bei kurzfristigen Übergabeterminen. Wir bieten flexible Lösungen 
          und planen den Einsatz so, dass alles rechtzeitig fertig ist.
        </p>
      </div>

      {/* Faktor 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Besenreine Übergabe inklusive
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Im Fixpreis ist die Reinigung für eine ordentliche Übergabe bereits enthalten. 
          Damit sparen Sie zusätzliche Arbeit und können die Immobilie sofort 
          an Vermieter oder Käufer übergeben.
        </p>
      </div>

      {/* Faktor 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Keine versteckten Kosten
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Sie erhalten ein Angebot, das alle Schritte umfasst. Wenn der 
          Aufwand genauso ist wie bei der Besichtigung besprochen, bleibt 
          der Preis exakt gleich – garantiert.
        </p>
      </div>

    </div>
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

{/* ========================================= */}
{/* SEKTION 7 – Praxisbeispiele aus Baden      */}
{/* ========================================= */}

<section
  id="praxisbeispiele-raeumung-baden"
  aria-label="Praxisbeispiele Räumung Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Praxisbeispiele aus Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Jede Räumung erzählt ihre eigene Geschichte. Manche beginnen mit Zeitdruck,
      andere mit einem emotionalen Hintergrund oder schlicht dem Wunsch nach
      einem klaren, neuen Zustand. Hier finden Sie drei echte Beispiele, die zeigen,
      wie unterschiedlich Räumungen in Baden sein können – und wie strukturiert wir
      sie abwickeln.
    </p>

    {/* GRID – Beispiele */}
    <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

      {/* Beispiel 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          1. Wohnungsräumung im Zentrum von Baden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Eine ältere Wohnung nahe der Fußgängerzone sollte innerhalb einer Woche 
          übergeben werden. Die Wege im Haus waren eng und es gab keine 
          Aufzugsmöglichkeit. Wir haben die Räumung in zwei kompakten Einsätzen 
          durchgeführt – mit klarer Planung und zusätzlicher Rücksicht auf die 
          Hausgemeinschaft. Die Übergabe an den Vermieter klappte termingerecht.
        </p>
      </div>

      {/* Beispiel 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          2. Hausräumung mit Garten in Baden Umgebung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein Einfamilienhaus mit Keller, Dachboden und mehreren Nebenräumen sollte 
          für einen geplanten Verkauf freigemacht werden. Die Besitzer wohnten nicht 
          mehr vor Ort. Wir haben die gesamte Abwicklung übernommen, Fotos der 
          Fortschritte geschickt und am Ende ein vollständig leeres, sauberes Haus 
          übergeben – bereit für die nächste Besichtigung.
        </p>
      </div>

      {/* Beispiel 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          3. Keller- & Dachbodenräumung mit viel Altbestand
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In einem Haus aus den 1960ern hatten sich Keller und Dachboden über Jahrzehnte 
          gefüllt. Es ging weniger um große Möbel, sondern um viele kleine Gegenstände 
          und alte Sammelstücke. Wir haben alles strukturiert abgearbeitet und beide 
          Bereiche vollständig freigemacht. Die Eigentümer konnten anschließend 
          mit der Renovierung starten.
        </p>
      </div>

    </div>

    {/* Abschluss */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white shadow-sm px-6 py-5 text-center text-[15px] text-[#2B3A42] font-medium">
      Diese Beispiele zeigen, wie vielseitig Räumungen in Baden sein können – 
      und wie wichtig eine klare, flexible Arbeitsweise ist.
    </div>

  </div>
</section>
{/* ============================================== */}
{/* SEKTION 8 – Vorteile mit einem Räumungsprofi     */}
{/* ============================================== */}

<section
  id="vorteile-raeumung-baden"
  aria-label="Ihre Vorteile mit einem Räumungsprofi in Baden"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Ihre Vorteile mit einem Räumungsprofi in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Eine Räumung in Baden kann schnell komplex werden – unterschiedliche Räume,
      ungewohnte Mengen, knappe Fristen oder besondere bauliche Gegebenheiten.  
      Mit einem erfahrenen Team an Ihrer Seite wird aus einer großen Aufgabe ein
      klarer, gut strukturierter Ablauf. Die folgenden Vorteile zeigen, warum viele
      Auftraggeber in Baden bewusst auf professionelle Unterstützung setzen.
    </p>

    {/* GRID – Vorteile */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Vorteil 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Erfahrung mit Räumungen aller Größen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Vom kleinen Apartment bis zum weitläufigen Einfamilienhaus – unser Team
          kennt die typischen Herausforderungen in Baden und bringt Routine in jeden
          Auftrag. Jeder Schritt wird planbar und nachvollziehbar.
        </p>
      </div>

      {/* Vorteil 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Fixpreise & klare Abläufe
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Nach der Besichtigung erhalten Sie einen Fixpreis, der alles beinhaltet.
          So wissen Sie im Voraus genau, was Sie erwartet – ohne späteres Nachrechnen.
        </p>
      </div>

      {/* Vorteil 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Regionale Nähe – schnell in Baden und Umgebung
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Baden, Leesdorf, Weikersdorf, Mitterfeld, Rauhenstein – wir kennen alle
          Teile der Stadt und sämtlich angrenzende Bereiche. Das sorgt für kurze
          Wege, flexible Termine und eine unkomplizierte Abwicklung.
        </p>
      </div>

      {/* Vorteil 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Rücksicht auf Nachbarn & Hausgemeinschaft
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Viele Wohnanlagen in Baden sind ruhig und dicht bewohnt. Wir stimmen
          unsere Einsätze so ab, dass Lärm und Bewegungen möglichst gering bleiben.
          Rücksicht und klare Kommunikation sind Teil unseres Anspruchs.
        </p>
      </div>

      {/* Vorteil 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Diskrete & respektvolle Arbeitsweise
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Gerade bei sensiblen Räumungen – etwa nach einem Todesfall oder bei
          persönlichen Hinterlassenschaften – arbeiten wir ruhig, respektvoll und
          mit viel Feingefühl. Jede Situation wird ernst genommen.
        </p>
      </div>

      {/* Vorteil 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Alles aus einer Hand
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Von der ersten Besichtigung über Demontagen bis zur besenreinen Übergabe:
          Sie haben einen einzigen Ansprechpartner, der alle Schritte koordiniert.
          Das spart Zeit und sorgt für einen ruhigen Ablauf.
        </p>
      </div>

    </div>

    {/* Abschluss */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white shadow-sm px-6 py-5 text-center text-[15px] text-[#2B3A42] font-medium">
      Mit einem erfahrenen Räumungsprofi in Baden wird der gesamte Prozess planbar, 
      übersichtlich und spürbar leichter.
    </div>

  </div>
</section>
{/* ===================================== */}
{/* SEKTION 9 – FAQ Räumung Baden          */}
{/* ===================================== */}

<section
  id="faq-raeumung-baden"
  aria-label="FAQ Räumung Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      FAQ – Häufige Fragen zur Räumung in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Viele Abläufe lassen sich schnell erklären. Hier finden Sie Antworten auf die Fragen,
      die Auftraggeber aus Baden am häufigsten stellen. Wenn etwas offen bleibt – ein kurzer
      Anruf oder eine WhatsApp-Nachricht reicht völlig aus.
    </p>

    {/* FAQ List */}
    <div className="mt-12 space-y-8">

      {/* Frage 1 */}
      <div className="rounded-3xl bg-white border border-[#E8E1D9] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wie schnell kann eine Räumung in Baden durchgeführt werden?
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          In vielen Fällen können wir bereits innerhalb von 24 bis 48 Stunden einen Termin anbieten.
          Bei unkomplizierten Räumungen sind sogar kurzfristige Einsätze möglich. Einfach kurz
          anrufen – wir finden immer eine praktikable Lösung.
        </p>
      </div>

      {/* Frage 2 */}
      <div className="rounded-3xl bg-white border border-[#E8E1D9] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Ist die Besichtigung wirklich kostenlos?
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Ja. Die Besichtigung ist in Baden und der Umgebung immer kostenlos und unverbindlich.
          Erst danach erstellen wir ein Fixpreis-Angebot, das alle Arbeiten enthält.
        </p>
      </div>

      {/* Frage 3 */}
      <div className="rounded-3xl bg-white border border-[#E8E1D9] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Muss ich während der Räumung anwesend sein?
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Nein. Viele Kunden geben uns Schlüssel oder lassen uns über die Hausverwaltung hinein.
          Bei Bedarf halten wir Sie per WhatsApp oder Telefon auf dem Laufenden.
        </p>
      </div>

      {/* Frage 4 */}
      <div className="rounded-3xl bg-white border border-[#E8E1D9] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Können auch einzelne Räume in Baden geräumt werden?
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Natürlich. Ob Keller, Dachboden, Kinderzimmer, Büro oder Abstellraum – wir übernehmen
          auch Teilräumungen. Der Aufwand wird fair und nachvollziehbar eingeschätzt.
        </p>
      </div>

      {/* Frage 5 */}
      <div className="rounded-3xl bg-white border border-[#E8E1D9] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Wie läuft die Übergabe nach der Räumung ab?
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Nach Abschluss der Arbeiten machen wir einen Rundgang oder senden Fotos zur Kontrolle.
          Die Fläche ist anschließend bereit für Vermieter, Käufer oder die nächste Nutzung.
        </p>
      </div>

      {/* Frage 6 */}
      <div className="rounded-3xl bg-white border border-[#E8E1D9] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          Übernehmen Sie auch Räumungen nach einem Todesfall?
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Ja. In solchen Situationen arbeiten wir besonders diskret und respektvoll. Die Abläufe
          werden ruhig und strukturiert gestaltet, damit Sie sich auf das Wesentliche konzentrieren
          können.
        </p>
      </div>

    </div>
  </div>

  {/* JSON-LD FAQ SCHEMA */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wie schnell kann eine Räumung in Baden durchgeführt werden?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Viele Räumungen können bereits innerhalb von 24 bis 48 Stunden durchgeführt werden. Kurzfristige Termine sind ebenfalls möglich."
            }
          },
          {
            "@type": "Question",
            "name": "Ist die Besichtigung wirklich kostenlos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Ja. Die Besichtigung in Baden ist kostenlos und unverbindlich. Anschließend erhalten Sie ein Fixpreis-Angebot."
            }
          },
          {
            "@type": "Question",
            "name": "Muss ich während der Räumung anwesend sein?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Nein, eine Anwesenheit ist nicht erforderlich. Auf Wunsch informieren wir Sie telefonisch oder per WhatsApp über den Fortschritt."
            }
          },
          {
            "@type": "Question",
            "name": "Können auch einzelne Räume in Baden geräumt werden?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Ja. Wir übernehmen auch Teilräumungen wie Keller, Dachboden, Abstellräume oder einzelne Zimmer."
            }
          },
          {
            "@type": "Question",
            "name": "Wie läuft die Übergabe nach der Räumung ab?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Nach Abschluss der Arbeiten führen wir eine gemeinsame Kontrolle durch oder senden Fotos. Die Fläche ist sofort bereit zur Übergabe."
            }
          },
          {
            "@type": "Question",
            "name": "Übernehmen Sie auch Räumungen nach einem Todesfall?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Ja. In solchen Fällen arbeiten wir besonders respektvoll und ruhig, damit der Ablauf für die Angehörigen so angenehm wie möglich ist."
            }
          }
        ]
      })
    }}
  />
</section>
{/* ========================================= */}
{/* SEKTION – Experten-Tipps Räumung Baden     */}
{/* ========================================= */}

<section
  id="experten-tipps-raeumung-baden"
  aria-label="Experten-Tipps zur Räumung in Baden"
  className="relative bg-white py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Experten-Tipps für eine stressfreie Räumung in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Wenn man eine Räumung gut vorbereitet, läuft der gesamte Ablauf spürbar leichter ab. 
      Viele Auftraggeber in Baden unterschätzen, wie sehr schon ein paar kleine Schritte 
      dabei helfen können, Zeit zu sparen und Missverständnisse zu vermeiden.  
      Hier sind Empfehlungen aus der Praxis, die sich über viele Jahre bewährt haben.
    </p>

    {/* GRID – Tipps */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Tipp 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          1. Frühzeitig Schlüssel oder Zugang klären
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Ob Hauptschlüssel, Hintereingang oder Zugang über die Hausverwaltung – 
          je früher klar ist, wie das Team hinein kommt, desto flüssiger 
          läuft der Start am Einsatztag.
        </p>
      </div>

      {/* Tipp 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          2. Wichtige Unterlagen rechtzeitig sichern
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Dokumente, Fotos, Verträge oder persönliche Erinnerungsstücke sollte man, 
          wenn möglich, vorher beiseite legen. So sind sie garantiert griffbereit 
          und es entsteht keinerlei Verwechslung.
        </p>
      </div>

      {/* Tipp 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          3. Übergabetermin im Blick behalten
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Vermieter, Käufer oder Makler haben oft fixe Zeiträume.  
          Wenn Sie uns diese Termine mitteilen, stimmen wir die Schritte so ab, 
          dass alles rechtzeitig abgeschlossen ist – ohne Hektik am Ende.
        </p>
      </div>

      {/* Tipp 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          4. Fotos oder Videos für spätere Dokumentation
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Viele Kunden machen vorab eine kurze Fotodokumentation.  
          Das hilft bei Übergaben, Nachfragen oder wenn mehrere Familienmitglieder 
          involviert sind und nicht alle vor Ort sein können.
        </p>
      </div>

      {/* Tipp 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          5. Platz für unser Team einplanen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Gerade im Zentrum von Baden sind Parkplätze knapp.  
          Ein freier Stellplatz oder eine vereinbarte Ladezone spart viel Zeit 
          und macht den Ablauf spürbar ruhiger.
        </p>
      </div>

      {/* Tipp 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-[#FAFAFA] p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          6. Ein Ansprechpartner erleichtert alles
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Wenn mehrere Personen mitreden, entstehen oft Verzögerungen.  
          Ein einziger Ansprechpartner macht Rückfragen, Entscheidungen 
          und den gesamten Ablauf deutlich einfacher.
        </p>
      </div>

    </div>

    {/* Abschluss */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-white shadow-sm px-6 py-5 text-center text-[15px] text-[#2B3A42] font-medium">
      Mit ein wenig Vorbereitung lässt sich jede Räumung in Baden schneller, 
      entspannter und ohne unnötige Ablenkungen durchführen.
    </div>

  </div>
</section>
{/* ===================================================== */}
{/* SEKTION – Weitere Experten-Tipps Räumung Baden         */}
{/* ===================================================== */}

<section
  id="weitere-experten-tipps-raeumung-baden"
  aria-label="Weitere Experten-Tipps zur Räumung in Baden"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Weitere Experten-Tipps für eine reibungslose Räumung in Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Manche kleinen Hinweise wirken unscheinbar, sparen aber am Ende enorm viel 
      Zeit und Nerven. Diese zusätzlichen Tipps stammen direkt aus unserem Alltag 
      in Baden und helfen Ihnen, die Räumung noch strukturierter und entspannter 
      zu gestalten.
    </p>

    {/* GRID – Tipps */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Tipp 1 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          1. Vorab klären, welche Räume Priorität haben
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Gerade bei größeren Räumungen ist es hilfreich, zuerst die wichtigsten 
          Zimmer festzulegen. So kann das Team gezielt starten und Sie behalten 
          jederzeit die Übersicht über den Fortschritt.
        </p>
      </div>

      {/* Tipp 2 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          2. Kommunikation mit Nachbarn lohnt sich
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Ein kurzer Hinweis an direkte Nachbarn oder an die Hausverwaltung nimmt 
          oft viel Spannung aus der Situation. Menschen reagieren verständnisvoll, 
          wenn sie im Voraus wissen, dass ein Team kurzzeitig vor Ort arbeitet.
        </p>
      </div>

      {/* Tipp 3 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          3. Vor dem Start Fenster weit öffnen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Ein besser durchlüfteter Raum macht die Arbeit für alle Beteiligten 
          angenehmer. Vor allem in älteren Wohnungen in Baden ist das ein 
          kleiner, aber sehr hilfreicher Schritt.
        </p>
      </div>

      {/* Tipp 4 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          4. Wenn möglich, Haustiere kurzzeitig woanders unterbringen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Räumungen bringen Bewegung ins Haus. Für Tiere ist das oft ungewohnt.  
          Ein kurzer Aufenthalt bei Freunden oder Familie sorgt für mehr Ruhe 
          für Mensch und Tier.
        </p>
      </div>

      {/* Tipp 5 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          5. Empfindliche Böden vorher schützen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          In vielen Altbauwohnungen Baden sind die Böden wertvoll. Eine einfache 
          Folie oder eine provisorische Abdeckung im Eingangsbereich schützt 
          empfindliche Stellen und vermeidet unnötige Abnutzung.
        </p>
      </div>

      {/* Tipp 6 */}
      <div className="rounded-3xl border border-[#E8E1D9] bg-white p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-[#2B3A42]">
          6. Vorab klären, ob Möbel demontiert werden sollen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed">
          Manche Möbel lassen sich leichter tragen, wenn sie zerlegt werden.  
          Ein kurzer Hinweis vor dem Einsatz genügt, und unser Team plant die 
          passenden Schritte automatisch ein.
        </p>
      </div>

    </div>

    {/* Abschluss */}
    <div className="mt-12 rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] shadow-sm px-6 py-5 text-center text-[15px] text-[#2B3A42] font-medium">
      Diese zusätzlichen Tipps sind kleine, aber wirkungsvolle Stellschrauben – 
      besonders hilfreich, wenn die Räumung zügig und ohne Ablenkungen 
      abgeschlossen werden soll.
    </div>

  </div>
</section>

    </main>
  );
}
