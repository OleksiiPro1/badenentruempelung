// app/kellerentruempelung-baden/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kellerentrümpelung Baden – schnell, gründlich & zuverlässig",
  description:
    "Professionelle Kellerentrümpelung in Baden mit klaren Fixpreisen, kostenloser Besichtigung und einem regionalen Team. Mehr Platz im Keller ohne Stress.",
};

export default function KellerentruempelungBadenPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#F5F3F0]">
      {/* =============================================== */}
      {/* SEKTION 1: Hero – Kellerentrümpelung Baden      */}
      {/* =============================================== */}
      <section
        id="kellerentruempelung-baden-hero"
        aria-label="Kellerentrümpelung Baden"
        className="relative py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
          {/* Textblock */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#E8E1D9] bg-white px-4 py-1.5 text-xs font-medium text-[#2B3A42] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              Kellerentrümpelung Baden • regional & zuverlässig
            </span>

            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#2B3A42]">
              Kellerentrümpelung Baden – wenn aus „irgendwann“ endlich „jetzt“ wird
            </h1>

            <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
              Viele Keller in Baden sind über Jahre gewachsen: Kartons, alte Möbel,
              vergessene Kisten und Dinge, von denen man sich nie so richtig trennen
              wollte. Spätestens beim Umzug, bei einer Neuvermietung oder wenn einfach
              wieder Platz gebraucht wird, kommt der Moment, an dem jemand das Thema
              konsequent anpacken muss.
            </p>

            <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
              Genau hier setzt unsere Kellerentrümpelung in Baden an: Wir kommen
              persönlich vorbei, verschaffen uns einen Überblick und erstellen ein
              klares Fixpreis-Angebot. Ohne lange Diskussionen, ohne komplizierte
              Abläufe – dafür mit einem erfahrenen Team, das weiß, wie man Keller
              strukturiert und zügig leer bekommt.
            </p>

            {/* CTA-Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="tel:+436767202623"
                className="inline-flex items-center justify-center rounded-xl bg-[#CBB47B] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
              >
                Jetzt Kellerentrümpelung in Baden anfragen
              </a>
              <a
                href="https://wa.me/436767202623"
                className="inline-flex items-center justify-center rounded-xl border border-[#2B3A42] bg-white px-7 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
              >
                WhatsApp – Fotos vom Keller senden
              </a>
            </div>

            <p className="mt-3 text-[13px] text-[#6B7280]">
              Kostenlose Besichtigung in Baden & Umgebung, Fixpreis nach Vor-Ort-Termin.
            </p>
          </div>

          {/* Bild – Kellerentrümpelung */}
          <div className="relative w-full h-[260px] md:h-[340px] lg:h-[380px] rounded-3xl overflow-hidden border border-[#E8E1D9] bg-[#EDE8E0] shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/kellerentruempelung-baden.webp"
              alt="Kellerentrümpelung in Baden durch ein erfahrenes Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>
      {/* =============================================================== */}
{/* SEKTION 2 – Warum Kellerentrümpelung in Baden sinnvoll ist      */}
{/* =============================================================== */}

<section
  id="warum-kellerentruempelung-baden"
  aria-label="Warum Kellerentrümpelung in Baden sinnvoll ist"
  className="relative py-20 md:py-24 bg-white"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Warum eine professionelle Kellerentrümpelung in Baden sinnvoll ist
    </h2>

    <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed text-[#334049] max-w-3xl">
      Ein Keller wirkt oft wie ein stiller Speicher: Dinge verschwinden darin zuerst
      „nur für eine Weile“ – und bleiben letztlich über viele Jahre. Mit der Zeit wird
      der Raum immer unübersichtlicher, Zugänge blockieren, Regale werden vollgestellt
      und irgendwann weiß niemand mehr genau, was überhaupt noch darin liegt.
    </p>

    <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#334049] max-w-3xl">
      In Baden kommt noch etwas Typisches dazu: Viele Gebäude sind älter, die Keller
      wurden früher anders genutzt, und die Zugänge sind oft enger als in modernen
      Häusern. Das macht eine Entrümpelung auf eigene Faust schnell mühsam. Wer den
      Keller leeren möchte, aber weder Zeit noch Nerven für einen kompletten Tag
      zwischen Kisten, Möbeln und Schmutz verbringen will, profitiert enorm von einem
      erfahrenen Team.
    </p>

    <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#334049] max-w-3xl">
      Ein professioneller Ablauf bedeutet vor allem eins: Klarheit. Ein kurzer Blick
      bei der Besichtigung reicht, um zu erkennen, wie groß der Aufwand ist und wie
      der Keller am effizientesten freigemacht wird. Dazu kommen eingespielte Handgriffe,
      die aus einem chaotischen Raum in erstaunlich kurzer Zeit wieder einen nutzbaren
      Platz machen.
    </p>

    <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#334049] max-w-3xl">
      Das Ergebnis ist nicht nur ein leerer Keller, sondern Raum, der wieder Sinn
      ergibt. Man kann Dinge ordentlich verstauen, den Platz neu planen oder ihn
      einfach mit einem guten Gefühl schließen, weil man weiß: Hier ist alles erledigt.
    </p>

  </div>
</section>
{/* =============================================================== */}
{/* SEKTION 3 – Ablauf Kellerentrümpelung Baden                     */}
{/* =============================================================== */}

<section
  id="ablauf-kellerentruempelung-baden"
  aria-label="Ablauf Kellerentrümpelung Baden"
  className="relative py-20 md:py-24 bg-[#F8F7F4]"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Unser Ablauf – Schritt für Schritt
    </h2>

    <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049] max-w-3xl">
      Eine Kellerentrümpelung wirkt oft chaotisch, sobald man beginnt, Dinge zu
      bewegen. Damit es bei Ihnen in Baden nicht zu einem Ansturm von Stress führt,
      haben wir einen Ablauf entwickelt, der von Anfang an Klarheit bringt.
    </p>

    {/* Vertical Steps */}
    <div className="mt-12 flex flex-col space-y-12">

      {/* Schritt 1 */}
      <div className="relative">
        <span className="absolute -left-4 top-0 text-4xl font-semibold text-[#CBB47B] select-none">
          1
        </span>
        <h3 className="text-xl font-semibold text-[#2B3A42] ml-6">
          Kurzbesichtigung vor Ort
        </h3>
        <p className="mt-3 ml-6 text-[15px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Ein kurzer Rundgang im Keller reicht vollkommen. Wir sehen sofort, wie
          groß die Fläche ist, welche Zugänge bestehen und welche Mengen bewegt
          werden müssen. Mehr braucht es an dieser Stelle nicht – keine Vorbereitung,
          keine langen Listen.
        </p>
      </div>

      {/* Schritt 2 */}
      <div className="relative">
        <span className="absolute -left-4 top-0 text-4xl font-semibold text-[#CBB47B] select-none">
          2
        </span>
        <h3 className="text-xl font-semibold text-[#2B3A42] ml-6">
          Fixpreis-Angebot ohne Kleingedrucktes
        </h3>
        <p className="mt-3 ml-6 text-[15px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Nach der Besichtigung erhalten Sie ein konkretes Angebot. Keine Schätzungen,
          keine vagen Formulierungen. Ein fixer Betrag, der alles umfasst und Ihnen
          volle Planungssicherheit gibt.
        </p>
      </div>

      {/* Schritt 3 */}
      <div className="relative">
        <span className="absolute -left-4 top-0 text-4xl font-semibold text-[#CBB47B] select-none">
          3
        </span>
        <h3 className="text-xl font-semibold text-[#2B3A42] ml-6">
          Terminvereinbarung nach Ihrem Zeitplan
        </h3>
        <p className="mt-3 ml-6 text-[15px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Sie wählen den Tag – wir bringen das Team. In Baden sind wir flexibel
          unterwegs, sodass selbst kurzfristige Termine möglich sind. Besonders, wenn
          Ihr Keller schnell frei werden muss.
        </p>
      </div>

      {/* Schritt 4 */}
      <div className="relative">
        <span className="absolute -left-4 top-0 text-4xl font-semibold text-[#CBB47B] select-none">
          4
        </span>
        <h3 className="text-xl font-semibold text-[#2B3A42] ml-6">
          Die Entrümpelung selbst
        </h3>
        <p className="mt-3 ml-6 text-[15px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Am vereinbarten Tag arbeiten wir konzentriert und abgestimmt. Keller sind
          oft eng und verwinkelt, deshalb setzen wir ein Team ein, das genau weiß,
          wie man solche Räume effizient durchgeht, ohne durcheinander zu kommen.
        </p>
      </div>

      {/* Schritt 5 */}
      <div className="relative">
        <span className="absolute -left-4 top-0 text-4xl font-semibold text-[#CBB47B] select-none">
          5
        </span>
        <h3 className="text-xl font-semibold text-[#2B3A42] ml-6">
          Übergabe & kurzer Abschlusscheck
        </h3>
        <p className="mt-3 ml-6 text-[15px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Wenn alles erledigt ist, gehen wir gemeinsam den Keller durch. Sie sehen
          sofort das Ergebnis, können Fragen klären oder Details ansprechen. Erst
          wenn alles passt, ist der Auftrag wirklich abgeschlossen.
        </p>
      </div>

    </div>
  </div>
</section>
{/* =============================================================== */}
{/* SEKTION 4 – Leistungen Kellerentrümpelung Baden                 */}
{/* =============================================================== */}

<section
  id="leistungen-kellerentruempelung-baden"
  aria-label="Was wir im Keller übernehmen"
  className="relative py-20 md:py-24 bg-white"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Was wir im Keller für Sie übernehmen
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Keller in Baden haben sehr unterschiedliche Gesichter: vom kleinen Abteil in
      einer Wohnanlage bis zum großzügigen Raum in einem Einfamilienhaus. Deshalb
      passen wir unsere Arbeit immer an die tatsächliche Situation vor Ort an. Hier
      ein Überblick über typische Aufgaben, die wir regelmäßig übernehmen.
    </p>

    {/* Leistungsblöcke */}
    <div className="mt-14 flex flex-col space-y-10">

      {/* Block 1 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Komplette Räumung von Kellerabteilen
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Viele Abteile sind über Jahre gewachsen und kaum mehr begehbar. Wir gehen
          den gesamten Raum strukturiert durch, räumen alles aus und schaffen wieder
          eine klare, nutzbare Fläche.
        </p>
      </div>

      {/* Block 2 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Entfernung alter Regale, Schränke und sperriger Elemente
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Viele Keller wurden früher als Lagerräume genutzt und sind mit schweren
          Regalen oder alten Konstruktionen verbaut. Wir demontieren diese Elemente
          sauber, sodass der Raum deutlich offener und leichter zugänglich wird.
        </p>
      </div>

      {/* Block 3 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Räumungen bei Umzug oder Neuvermietung
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Bei einem Wohnungswechsel bleibt der Keller oft als Letztes übrig. Wir
          übernehmen den gesamten Keller, sodass Sie sich auf die Wohnung konzentrieren
          können. Besonders praktisch bei engen Übergabeterminen.
        </p>
      </div>

      {/* Block 4 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Auflösung alter Lagerräume in Geschäften oder Betrieben
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Viele Geschäftslokale in Baden nutzen Keller als zusätzliche Lagerbereiche.
          Auch solche Räume machen wir systematisch frei – ideal, wenn ein Umbau,
          eine Übergabe oder ein kompletter Neustart bevorsteht.
        </p>
      </div>

      {/* Block 5 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Entfernen einzelner Gegenstände oder kleiner Bereiche
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Nicht immer muss der komplette Keller geleert werden. Auch kleine Aufträge
          – ein paar sperrige Stücke, ein einzelnes Regal oder ein zugestellter
          Bereich – erledigen wir rasch und effizient.
        </p>
      </div>

    </div>
  </div>
</section>
{/* =============================================================== */}
{/* SEKTION 5 – Kosten Kellerentrümpelung Baden                     */}
{/* =============================================================== */}

<section
  id="kosten-kellerentruempelung-baden"
  aria-label="Kosten Kellerentrümpelung Baden"
  className="relative py-20 md:py-24 bg-[#F8F7F4]"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Kosten einer Kellerentrümpelung in Baden
    </h2>

    <p className="mt-5 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Keller sind selten einheitlich – manche sind kleine Abteile, andere eher
      großzügige Räume mit verwinkelten Bereichen. Genau deshalb arbeiten wir in
      Baden nicht mit pauschalen Summen, sondern mit realistischen Preisspannen,
      die sich nach Fläche, Zugänglichkeit und tatsächlichem Aufwand richten.
    </p>

    <p className="mt-3 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Nach einer kurzen Besichtigung erhalten Sie immer ein Fixpreis-Angebot.
      Klar formuliert, direkt verständlich und ohne Überraschungen.
    </p>

    {/* Preisspannen – einzigartiger Stil: "Preisstreifen" */}
    

    {/* Zusatz-Erklärung */}
    <p className="mt-10 max-w-3xl text-[15px] md:text-[16px] text-[#4B3C30] leading-relaxed">
      Diese Werte dienen als Orientierung. Viele Keller in Baden haben Besonderheiten,
      etwa schmale Stiegenhäuser, ältere Holzverschläge oder mehrere kleine Teilbereiche.
      Genau deshalb ist die kostenlose Besichtigung der wichtigste Schritt für
      ein präzises Angebot.
    </p>

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

{/* =============================================================== */}
{/* SEKTION 6 – Typische Situationen aus Baden                      */}
{/* =============================================================== */}

<section
  id="situationen-kellerentruempelung-baden"
  aria-label="Typische Situationen Kellerentrümpelung Baden"
  className="relative py-20 md:py-24 bg-white"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Typische Situationen aus Baden
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Baden hat seine eigenen Besonderheiten: enge Kellerzugänge, alte Holzverschläge,
      teils jahrzehntealte Lagerräume oder kleine Abteile, die sich über viele Mieter
      hinweg gefüllt haben. Hier ein paar Beispiele aus unserem Alltag, die zeigen,
      wie unterschiedlich Kellerprojekte in Baden sein können.
    </p>

    {/* Mini-Stories */}
    <div className="mt-12 flex flex-col space-y-12">

      {/* Story 1 */}
      <div className="pl-6 border-l-4 border-[#CBB47B]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Fall 1: Kellerabteil in einem Altbau nahe dem Grünen Markt
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Ein kleiner, aber bis zur Decke gefüllter Keller, in dem kaum noch ein Fuß
          Platz hatte. Die Mieterin erzählte uns, dass sie seit Jahren „mal alles
          durchgehen wollte“, aber es nie geschafft hatte. Bei der Besichtigung wurde
          sofort klar: Der Raum ist komplett zugestellt, aber strukturiert machbar.
          Zwei Stunden später war der Keller leer, die Wege frei und die Erleichterung
          der Kundin unübersehbar.
        </p>
      </div>

      {/* Story 2 */}
      <div className="pl-6 border-l-4 border-[#CBB47B]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Fall 2: Mehrere kleine Kellerkammern in einer Wohnanlage in der Nähe des Doblhoffparks
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Hier ging es nicht um ein großes Abteil, sondern um vier kleine Kämmerchen,
          die über viele Jahre als Zwischenlager dienten. Jeder Raum war anders
          aufgebaut, teils mit alten Bretterregalen, teils mit schweren Kisten.
          Unser Team hat die Bereiche nacheinander freigemacht, sodass die
          Hausverwaltung die Räume endlich wieder sauber übergeben konnte.
        </p>
      </div>

      {/* Story 3 */}
      <div className="pl-6 border-l-4 border-[#CBB47B]">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Fall 3: Kleiner Lagerraum eines Geschäftslokals in der Innenstadt
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Ein Inhaber hatte über viele Jahre Produkte, Kartons und Displays im Keller
          gesammelt, „falls man es irgendwann noch braucht“. Als er umbauen wollte,
          brauchte er den Raum schnell frei. Wir kamen am nächsten Morgen, arbeiteten
          konzentriert und konnten den Raum rechtzeitig zum Start der Renovierung
          übergeben.
        </p>
      </div>

    </div>

  </div>
</section>
{/* =============================================================== */}
{/* SEKTION 7 – Vorteile regionales Team Baden                      */}
{/* =============================================================== */}

<section
  id="vorteile-kellerentruempelung-baden"
  aria-label="Ihre Vorteile mit einem regionalen Team"
  className="relative py-20 md:py-24 bg-[#F8F7F4]"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Ihre Vorteile mit einem regionalen Team
    </h2>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
      Wer in Baden eine Kellerentrümpelung plant, merkt schnell, wie hilfreich ein
      Team ist, das die Gegend kennt, kurze Wege hat und mit den örtlichen Gegebenheiten
      vertraut ist. Hier ein paar Vorteile, die unsere Kundinnen und Kunden besonders
      schätzen.
    </p>

    <div className="mt-14 flex flex-col space-y-10">

      {/* Vorteil 1 */}
      <div className="bg-white rounded-2xl p-8 border border-[#E8E1D9] shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Schnelle Verfügbarkeit durch kurze Wege
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Da wir regelmäßig in Baden unterwegs sind, können wir Besichtigungen oft
          noch am selben Tag ermöglichen. Gerade bei Kellern, die spontan für eine
          Übergabe oder einen Umbau frei werden müssen, ist das ein großer Vorteil.
        </p>
      </div>

      {/* Vorteil 2 */}
      <div className="bg-white rounded-2xl p-8 border border-[#E8E1D9] shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Erfahrung mit den typischen Kellern in Baden
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Viele Gebäude in Baden haben ältere Keller: enge Abteile, niedrige Decken,
          verwinkelte Gänge. Wir wissen, wie man solche Räume effizient angeht, ohne
          dass es zu langen Verzögerungen kommt.
        </p>
      </div>

      {/* Vorteil 3 */}
      <div className="bg-white rounded-2xl p-8 border border-[#E8E1D9] shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Fixpreis statt unklarer Schätzungen
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Sie erhalten nach der Besichtigung ein Angebot, das alle Schritte enthält
          und genau dem entspricht, was besprochen wurde. Kein Rätselraten, keine
          Unsicherheiten, sondern ein klarer Betrag, auf den Sie sich verlassen können.
        </p>
      </div>

      {/* Vorteil 4 */}
      <div className="bg-white rounded-2xl p-8 border border-[#E8E1D9] shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Ruhige, respektvolle Durchführung
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Besonders in Mehrparteienhäusern ist Rücksicht wichtig: leise Wege,
          abgestimmte Abläufe, freundliche Kommunikation. Viele Kundinnen und Kunden
          erwähnen später genau das als Grund, warum sie uns weiterempfehlen.
        </p>
      </div>

      {/* Vorteil 5 */}
      <div className="bg-white rounded-2xl p-8 border border-[#E8E1D9] shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Ein Ansprechpartner für alles
        </h3>
        <p className="mt-3 text-[15px] text-[#4B3C30] leading-relaxed max-w-3xl">
          Vom ersten Anruf bis zur Übergabe bleibt alles in einer Hand. Sie müssen
          nicht mehrere Personen kontaktieren oder Abläufe koordinieren – das übernehmen
          wir. Dadurch wird der gesamte Prozess deutlich entspannter.
        </p>
      </div>

    </div>

  </div>
</section>
{/* =============================================================== */}
{/* SEKTION 8 – Experten-Tipps Baden                                */}
{/* =============================================================== */}

<section
  id="experten-kellerentruempelung-baden"
  aria-label="Experten Tipps Kellerentrümpelung Baden"
  className="relative py-20 md:py-24 bg-white"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Experten-Tipps aus Erfahrung
    </h2>

    <p className="mt-4 text-[16px] md:text-[17px] max-w-3xl leading-relaxed text-[#334049]">
      Nach vielen Jahren in Kellern in Baden erkennt man Muster, die man erst sieht,
      wenn man wirklich oft in solchen Räumen arbeitet. Hier ein paar Gedanken, die
      unseren Kundinnen und Kunden schon oft geholfen haben.
    </p>

    {/* Tipps im Essay-Stil */}
    <div className="mt-12 flex flex-col space-y-10">

      {/* Tipp 1 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">Tipp 1 — Lassen Sie sich nicht vom ersten Eindruck täuschen</h3>
        <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Viele Keller wirken auf den ersten Blick vollgestopft, aber tatsächlich
          besteht ein Großteil oft aus leichten, schnell bewegbaren Dingen. Was
          mühsam aussieht, kann in der Praxis oft schneller gelöst werden, als man
          erwartet. Genau deshalb ist eine kurze Einschätzung vor Ort so wertvoll.
        </p>
      </div>

      {/* Tipp 2 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Tipp 2 — Ein klarer Zugang spart enorm viel Zeit
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Wenn Treppenhaus, Innenhof oder Kellergang frei sind, läuft der gesamte
          Ablauf deutlich ruhiger. Oft genügen ein paar Minuten Vorbereitung im
          Stiegenhaus, um später eine ganze Stunde zu gewinnen.
        </p>
      </div>

      {/* Tipp 3 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Tipp 3 — Ältere Keller haben oft versteckte Ecken
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#4B3C30] max-w-3xl">
          In vielen Häusern in Baden wurden Keller über Jahrzehnte umgebaut oder
          erweitert. Deshalb gibt es häufig kleine Nischen, niedrige Durchgänge oder
          alte Kammern, die man erst beim Betreten erkennt. Ein Profi weiß sofort,
          wie man sich darin bewegt, ohne Zeit zu verlieren.
        </p>
      </div>

      {/* Tipp 4 */}
      <div className="border-l-4 border-[#CBB47B] pl-6">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Tipp 4 — Je klarer das Ziel, desto einfacher der Ablauf
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#4B3C30] max-w-3xl">
          Ob der Keller komplett frei werden soll oder nur ein bestimmter Bereich –
          sobald das Ziel klar definiert ist, kann man viel präziser arbeiten. Das
          spart Zeit und sorgt dafür, dass das Ergebnis genau dem entspricht, was
          Sie sich vorstellen.
        </p>
      </div>

    </div>

  </div>
</section>
{/* =============================================================== */}
{/* SEKTION 9 – FAQ + Kontakt Kellerentrümpelung Baden             */}
{/* =============================================================== */}

<section
  id="faq-kellerentruempelung-baden"
  aria-label="FAQ Kellerentrümpelung Baden"
  className="relative py-20 md:py-24 bg-[#F8F7F4]"
>
  <div className="mx-auto max-w-[1180px] w-full px-6 md:px-10">

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2B3A42]">
      Häufige Fragen – kurz & verständlich erklärt
    </h2>

    <div className="mt-12 flex flex-col space-y-12">

      {/* FAQ 1 */}
      <div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Wie lange dauert eine Kellerentrümpelung in Baden?
        </h3>
        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-[#4B3C30]">
          Kleine Kellerabteile sind oft in ein bis zwei Stunden erledigt. Größere
          Keller mit mehreren Räumen benötigen entsprechend mehr Zeit. Die Dauer hängt
          immer davon ab, wie gut der Zugang ist und wie eng die Räume gebaut wurden –
          besonders bei älteren Häusern in Baden. Nach der Besichtigung erhalten Sie
          eine realistische Einschätzung.
        </p>
      </div>

      {/* FAQ 2 */}
      <div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Muss ich während der Räumung anwesend sein?
        </h3>
        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-[#4B3C30]">
          Die meisten Kundinnen und Kunden sind nur kurz zum Aufsperren da und gehen
          dann wieder ihrem Tag nach. Am Ende kommen Sie noch einmal vorbei, um den
          Keller zu übernehmen. Wenn Sie möchten, können Sie aber auch die ganze Zeit
          anwesend bleiben – ganz wie es Ihnen lieber ist.
        </p>
      </div>

      {/* FAQ 3 */}
      <div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Können kurzfristige Termine möglich sein?
        </h3>
        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-[#4B3C30]">
          In Baden sind wir regelmäßig unterwegs, daher können wir kurzfristige
          Anfragen meist gut abdecken. Wenn Sie den Keller schnell frei brauchen –
          etwa wegen eines Umzugs oder einer Übergabe – lässt sich das in den meisten
          Fällen flexibel einrichten.
        </p>
      </div>

      {/* FAQ 4 */}
      <div>
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Gibt es ein Fixpreis-Angebot?
        </h3>
        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-[#4B3C30]">
          Ja. Nach der Besichtigung bekommen Sie einen Betrag genannt, der alles
          beinhaltet, was wir vor Ort besprochen haben. Damit wissen Sie im Voraus,
          womit Sie rechnen können – ohne offene Punkte oder Unklarheiten.
        </p>
      </div>

    </div>

    {/* CTA – sehr weich und seriös */}
    <div className="mt-20 bg-white border border-[#E8E1D9] rounded-2xl p-10 shadow-sm">
      <h3 className="text-2xl md:text-3xl font-semibold text-[#2B3A42]">
        Bereit, Ihren Keller in Baden frei zu bekommen?
      </h3>

      <p className="mt-4 max-w-3xl text-[16px] text-[#4B3C30] leading-relaxed">
        Wenn Sie möchten, sehen wir uns Ihren Keller kostenlos vor Ort an. Ein kurzer
        Blick genügt, damit wir Ihnen ein faires Fixpreis-Angebot geben können. Ohne
        Druck, ohne Verpflichtung – einfach ein ehrlicher erster Schritt.
      </p>

      <div className="mt-7 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/436767202623"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-[#CBB47B] text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:opacity-90 transition"
        >
          WhatsApp schreiben
        </a>

        {/* Telefon */}
        <a
          href="tel:+436767202623"
          className="w-full sm:w-auto bg-[#2B3A42] text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:opacity-90 transition"
        >
          Jetzt anrufen
        </a>

      </div>
    </div>

  </div>
</section>

      
      
      










    </main>
  );
}
