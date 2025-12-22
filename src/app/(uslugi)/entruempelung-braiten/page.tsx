// app/entruempelung-braiten/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Entrümpelung Braiten 2500 Baden – schnelle Hilfe & klare Abläufe",
  description:
    "Professionelle Entrümpelung in Braiten mit kostenloser Besichtigung, transparenten Fixpreisen und diskreter Durchführung. Jetzt Termin sichern.",

};

export default function EntsorgungBraitenPage() {
  return (
    <>
      {/* ===== SEKTION 1: Entrümpelung Braiten – schnelle Hilfe & klare Abläufe ===== */}
      <section
        id="intro-braiten"
        aria-label="Entrümpelung Braiten – schnelle Hilfe & klare Abläufe"
        className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-16"
      >
        <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-2 items-center">

            {/* Text links */}
            <div>
              <span className="inline-flex items-center rounded-full border border-[#E8E1D9] bg-white px-4 py-1.5 text-xs font-medium text-[#2B3A42] shadow-sm">
                Entrümpelung Braiten • zuverlässig & respektvoll
              </span>

              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#2B3A42]">
                Entrümpelung Braiten 2500 Baden – schnelle Unterstützung ohne Stress
              </h1>

              <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
                In Braiten treffen wir häufig auf großzügige Häuser, weitläufige Grundstücke und
                Räume, die im Laufe vieler Jahre gewachsen sind. Wenn eine Räumung ansteht,
                entstehen oft Fragen: Wo beginnt man? Was bleibt? Welche Schritte sind sinnvoll?
              </p>

              <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
                Genau hier unterstützen wir: ruhig, strukturiert und mit viel Erfahrung. Unser Team
                sorgt dafür, dass Sie nicht den Überblick verlieren und jeder Schritt klar
                nachvollziehbar bleibt – von der ersten Besichtigung bis zur Übergabe.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/436767202623"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
                >
                  WhatsApp – Besichtigung anfragen
                </a>

                <a
                  href="tel:+436767202623"
                  className="inline-flex items-center justify-center rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] transition hover:bg-[#2B3A42] hover:text-white"
                >
                  Direkt anrufen
                </a>
              </div>
            </div>

            {/* Bild rechts */}
            <div className="relative w-full h-[360px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/WhatsApp Image 2025-11-20 at 09.25.36.webp"
                alt="Entrümpelung Braiten – professionelle Unterstützung"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

{/* ===== SEKTION 2: Typische Situationen in Braiten ===== */}
<section
  id="situationen-braiten"
  aria-label="Typische Situationen bei einer Entrümpelung in Braiten"
  className="relative bg-white py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[840px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Welche Situationen in Braiten besonders oft auftreten
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Braiten gehört zu den Bereichen, in denen wir seit Jahren regelmäßig im Einsatz sind.
        Viele Häuser stehen seit Jahrzehnten im Familienbesitz, wurden erweitert, umgebaut oder
        mit zusätzlichen Räumen ergänzt. Dadurch entsteht häufig ein Mix aus alten Möbelstücken,
        Erinnerungsstücken und lange genutzten Nebenbereichen, die eine klare Struktur brauchen.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Durch unsere Erfahrung in Straßenzügen wie der{" "}
        <strong>Helenenstraße</strong>, dem Umfeld der <strong>Braitner Straße</strong> oder der
        traditionellen <strong>Vöslauer Straße</strong> wissen wir genau, welche Herausforderungen
        in diesem Ortsteil auftreten können – sei es bei Anfahrtswegen, großzügigen Grundstücken
        oder verwinkelten Innenbereichen älterer Gebäude.
      </p>
    </header>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Karte 1 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Räumung von Einfamilienhäusern
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In Braiten stehen viele Häuser mit großzügigen Räumen und mehreren Ebenen. Wenn eine
          Entrümpelung ansteht, geht es oft darum, Struktur in Jahrzehnte gesammelte Gegenstände
          zu bringen und klare Entscheidungen gemeinsam mit den Eigentümern zu treffen.
        </p>
      </div>

      {/* Karte 2 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Nebenräume & Zubauten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Häuser in Braiten besitzen zusätzliche Räume wie Dachboden, Keller, Schuppen oder
          frühere Lagerräume. Die Übergabe solcher Bereiche verlangt Fingerspitzengefühl und eine
          klare Dokumentation, damit nichts übersehen wird.
        </p>
      </div>

      {/* Karte 3 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Unterstützung nach Umzug oder Hausaufgabe
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Häufig begleiten wir Familien, die Braiten verlassen oder ein Haus an die nächste
          Generation übergeben. Dabei übernehmen wir die vollständige Räumung – strukturiert,
          mit transparenter Absprache und verlässlichem Zeitplan.
        </p>
      </div>

      {/* Karte 4 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Sensible Situationen im Familienkreis
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ob Veränderungen im Lebensumfeld oder Übergaben innerhalb der Familie – wir arbeiten
          diskret, ruhig und mit viel Verständnis für persönliche Situationen.
        </p>
      </div>

      {/* Karte 5 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Unterstützung bei umfangreichen Nachlässen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wenn ein Nachlass viele Räume umfasst, ist ein strukturierter Ablauf entscheidend.
          Wir haben in Braiten zahlreiche Häuser betreut, bei denen jede Etage eigene Aufgaben
          mit sich brachte – von historischen Möbeln bis hin zu lange ungenutzten Bereichen.
        </p>
      </div>

      {/* Karte 6 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Lokale Expertise durch jahrelange Arbeit im Ortsteil
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Durch unsere zahlreichen Einsätze in Braiten kennen wir die Besonderheiten des
          Ortsteils: enge Zufahrten, Hanglagen, alte Bestände und individuelle Wünsche der
          Eigentümer. Diese Erfahrung fließt in jeden Auftrag ein – für Ergebnisse, die wirklich
          passen.
        </p>
      </div>
    </div>
  </div>
</section>
{/* ===== SEKTION 3: Vorteile eines regionalen Teams in Braiten ===== */}
<section
  id="vorteile-braiten"
  aria-label="Vorteile eines regionalen Entrümpelungs-Teams in Braiten"
  className="relative bg-[#FDFBF9] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
    
    <header className="max-w-[820px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Ihre Vorteile mit einem Team direkt aus der Region Braiten
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Wer in Braiten arbeitet, muss den Ortsteil kennen – nicht nur die Adressen, sondern auch
        die Wege, die Gegebenheiten und die typischen Hausstrukturen. Da wir seit vielen Jahren
        regelmäßig für Familien entlang der <strong>Braitner Straße</strong>, rund um die{" "}
        <strong>Marchetstraße</strong> und im Bereich des <strong>Helenentals</strong> tätig sind,
        profitieren Sie von Routinen, die sich in der Praxis bewährt haben.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Diese regionale Erfahrung sorgt dafür, dass Termine zuverlässig eingehalten werden, 
        Abläufe gut geplant sind und die Arbeit ruhig und strukturiert erfolgt – genau das, 
        was Auftraggeber in sensiblen Phasen besonders schätzen.
      </p>
    </header>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Vorteil 1 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Schnelle Anfahrt & flexible Termine
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Da wir regelmäßig in Braiten unterwegs sind, können Termine oft sehr kurzfristig
          vergeben werden. Das erleichtert insbesondere Situationen, in denen eine schnelle
          Übergabe oder klare Fristen eingehalten werden müssen.
        </p>
      </div>

      {/* Vorteil 2 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Erfahrung mit lokalen Objektarten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Häuser in Braiten besitzen großzügige Räume, Zubauten oder ältere
          Nebenbereiche. Durch unsere langjährige Arbeit in der Region wissen wir genau,
          wie man solche Strukturen effizient und sorgfältig angeht.
        </p>
      </div>

      {/* Vorteil 3 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Klare Kommunikation & persönliche Betreuung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wir erklären jeden Schritt verständlich und halten Sie jederzeit am Laufenden. 
          Viele Auftraggeber schätzen dabei die ruhige, verlässliche Art unserer Begleitung.
        </p>
      </div>

      {/* Vorteil 4 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Wertanrechnung bei geeigneten Stücken
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Bei hochwertigen Möbeln, Bildern oder Einzelstücken informieren wir offen über
          mögliche Wertanrechnungen. Das schafft Transparenz und kann die Gesamtkosten
          spürbar reduzieren.
        </p>
      </div>

      {/* Vorteil 5 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Ortskenntnis macht den Ablauf einfacher
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ob enge Zufahrten, steilere Wege oder verwinkelte Grundstücksbereiche – viele
          Besonderheiten Braiten kennen wir aus der täglichen Praxis. Diese Erfahrung
          fließt in die gesamte Planung ein.
        </p>
      </div>

      {/* Vorteil 6 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Verlässlichkeit durch jahrelange regionale Präsenz
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Bewohner aus Braiten kennen uns bereits – sei es durch frühere Projekte
          oder Empfehlungen. Diese langjährige Vertrauensbasis ist ein wichtiger Teil
          unserer Arbeit und zeigt, dass wir tun, was wir versprechen.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION 4: Ablauf der Entrümpelung in Braiten – Schritt für Schritt ===== */}
<section
  id="ablauf-braiten"
  aria-label="Ablauf der Entrümpelung in Braiten – Schritt für Schritt"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[820px] mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Ablauf der Entrümpelung in Braiten – Schritt für Schritt
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Jede Räumung verlangt Struktur – besonders in einem Ortsteil wie Braiten, wo Häuser
        oft über mehrere Ebenen, Zubauten oder weitläufige Grundstücksbereiche verfügen.
        Durch unsere langjährige Arbeit entlang der <strong>Braitner Straße</strong>,
        im Bereich des <strong>Helenentals</strong> und rund um die
        <strong>Marchetstraße</strong> haben wir Abläufe entwickelt, die zuverlässig
        funktionieren und Auftraggebern Klarheit geben.
      </p>
    </header>

    <div className="space-y-8">

      {/* Schritt 1 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          1. Erstkontakt & Terminvereinbarung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Anfragen erreichen uns telefonisch oder per Nachricht, oft mit einer kurzen
          Beschreibung der Situation. Da wir regelmäßig in Braiten unterwegs sind, können wir
          Termine meist rasch anbieten – besonders hilfreich, wenn zeitnahe Entscheidungen
          erforderlich sind.
        </p>
      </div>

      {/* Schritt 2 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          2. Besichtigung vor Ort
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Die Besichtigung ist kostenlos und unverbindlich. Wir sehen uns Räume, Zugänge und
          den generellen Umfang an. Gerade in Braiten – mit seinen Hanglagen, breiten
          Gartenflächen und älteren Zubauten – ist dieser Schritt wichtig, um eine realistische
          Einschätzung zu geben.
        </p>
      </div>

      {/* Schritt 3 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          3. Klare Einschätzung & mögliche Wertanrechnung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wenn sich in den Räumen hochwertige Stücke befinden – etwa Möbel, Bilder oder einzelne
          Sammlerstücke – informieren wir offen über mögliche Wertanrechnungen. Dieser Schritt
          schafft Transparenz und hilft dabei, den finanziellen Rahmen realistisch einzuschätzen.
        </p>
      </div>

      {/* Schritt 4 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          4. Fixpreis-Angebot
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Nach der Besichtigung erhalten Sie ein Angebot, das alle vereinbarten Leistungen
          beinhaltet. Keine versteckten Positionen, keine unklaren Formulierungen – ein
          verständliches, schriftliches Angebot, auf das Sie sich verlassen können.
        </p>
      </div>

      {/* Schritt 5 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          5. Durchführung am vereinbarten Termin
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Am Einsatztag arbeiten wir strukturiert, ruhig und mit Rücksicht auf persönliche
          Umstände. Viele Häuser in Braiten verfügen über mehrere Ebenen, schmale Zugänge
          oder ältere Nebentrakte – durch unsere regionale Erfahrung kennen wir diese
          Besonderheiten und planen entsprechend.
        </p>
      </div>

      {/* Schritt 6 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          6. Gemeinsame Kontrolle & Übergabe
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Abschließend gehen wir alles mit Ihnen durch: Raum für Raum, Etage für Etage.
          Dieser gemeinsame Rundgang stellt sicher, dass die vereinbarten Schritte erfüllt
          wurden und die Übergabe problemlos erfolgen kann.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION 5: Objektarten in Braiten ===== */}
<section
  id="objektarten-braiten"
  aria-label="Objektarten in Braiten – wofür wir täglich im Einsatz sind"
  className="relative bg-white py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[840px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Objektarten in Braiten – wofür wir täglich im Einsatz sind
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Braiten hat eine besondere Mischung aus traditionellen Familienhäusern, älteren
        Gebäuden mit Geschichte und großzügigen Grundstücken, die über Jahre hinweg erweitert
        wurden. Da wir regelmäßig in Bereichen wie der <strong>Braitner Straße</strong>,
        der <strong>Römerstraße</strong> oder entlang des <strong>Helenentals</strong>
        arbeiten, wissen wir genau, wie unterschiedlich die Anforderungen je nach Objektart
        sein können.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Dieser lokale Erfahrungsschatz hilft uns, jede Räumung realistisch einzuschätzen
        und Abläufe so zu planen, dass Sie als Auftraggeber möglichst wenig Belastung
        verspüren – egal ob es um ein kleines Apartment oder ein weitläufiges Haus geht.
      </p>
    </header>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Objektart 1 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Einfamilienhäuser mit mehreren Ebenen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Häuser in Braiten besitzen zwei oder mehr Ebenen, teilweise mit älteren
          Anbauten. Diese Kombination erfordert eine genaue Planung, damit Zugänge,
          Tragewege und besondere Bereiche berücksichtigt werden.
        </p>
      </div>

      {/* Objektart 2 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Dachböden & alte Speicherbereiche
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Dachböden in Braiten erzählen Jahrzehnte an Familiengeschichte. Hier
          arbeiten wir besonders sorgfältig, da oft Erinnerungsstücke oder ältere Möbel
          gelagert wurden, die behutsam behandelt werden sollten.
        </p>
      </div>

      {/* Objektart 3 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Keller & Nebenräume mit langer Nutzung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In vielen Familienhäusern wurden Keller über Jahrzehnte genutzt – oft mit
          Gegenständen, die sich im Laufe der Zeit angesammelt haben. Unsere Erfahrung
          hilft dabei, diese Bereiche strukturiert und übersichtlich zu bearbeiten.
        </p>
      </div>

      {/* Objektart 4 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Garagen, Schuppen & frühere Lagerräume
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Gerade in ländlicheren Teilen von Braiten finden sich viele ältere Nebengebäude.
          Durch regelmäßige Einsätze in diesem Bereich wissen wir, wie man solche Räume
          effizient und strukturiert angeht.
        </p>
      </div>

      {/* Objektart 5 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Wohnungen & kleinere Einheiten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Auch wenn Braiten überwiegend aus Wohnhäusern besteht, gibt es einige
          kleinere Wohneinheiten. Hier profitieren Auftraggeber besonders von unserem
          schnellen, klaren Ablauf und der unkomplizierten Organisation.
        </p>
      </div>

      {/* Objektart 6 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Große Grundstücke & Außenbereiche
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Einige Häuser in Braiten verfügen über weitläufige Gärten oder Außenbereiche.
          Durch unsere praktische Erfahrung wissen wir, wie man solche Flächen
          geordnet und effizient vorbereitet.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION 6: Besonderheiten bei Zufahrten & Geländeformen in Braiten ===== */}
<section
  id="besonderheiten-braiten"
  aria-label="Besonderheiten bei Zufahrten und Geländeformen in Braiten"
  className="relative bg-[#FDFBF9] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[860px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Besonderheiten bei Zufahrten, Wegen und Geländeformen in Braiten
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Wer in Braiten regelmäßig arbeitet, weiß: Der Ortsteil ist geprägt von Hanglagen,
        verwinkelten Wegen und Grundstücken, die über viele Jahre erweitert wurden.
        Besonders entlang der <strong>Braitner Straße</strong>, der
        <strong>Helenentalstraße</strong> und im Bereich der <strong>Marchetstraße</strong>
        sind Zufahrten oft individueller gestaltet als in klassisch städtischen Straßen.
        Diese Erfahrung hilft uns, jede Räumung realistisch zu planen.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Durch unsere zahlreichen Einsätze wissen wir genau, welche Faktoren den Ablauf
        beeinflussen können – von steilen Grundstückszugängen bis hin zu engen, alten
        Einfahrten. Dieses Wissen sorgt dafür, dass Termine zuverlässig eingehalten und
        alle Schritte sicher umgesetzt werden.
      </p>
    </header>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Besonderheit 1 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Enge Einfahrten & private Zufahrtswege
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In Teilen von Braiten, besonders nahe der Römerstraße, sind Einfahrten oft schmal
          oder mit älteren Mauern eingefasst. Wir berücksichtigen diese Details frühzeitig,
          damit Fahrzeuge passend eingeplant und Zugänge sicher gestaltet werden können.
        </p>
      </div>

      {/* Besonderheit 2 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Hanglagen & unterschiedliche Niveauhöhen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Häuser liegen auf leicht erhöhten oder abfallenden Grundstücken. Diese
          Besonderheit ist typisch für Braiten, vor allem im Bereich Richtung Helenental.
          Dank unserer Erfahrung wissen wir, wie man Wege sicher plant und zeitliche
          Abläufe realistisch berechnet.
        </p>
      </div>

      {/* Besonderheit 3 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Große Grundstücksflächen mit mehreren Zugängen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Einzelne Grundstücke verfügen über Hintereingänge, seitliche Tore oder ältere
          Nebenzugänge. Wir prüfen diese Wege vorab und wählen jene, die den Ablauf
          am effizientesten machen. Diese Vorbereitung spart Zeit und sorgt für klare
          Arbeitswege.
        </p>
      </div>

      {/* Besonderheit 4 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Schmale Innenwege & ältere Gartenanlagen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In älteren Gärten oder Innenhöfen sind Wege oft verwinkelt oder historisch
          angelegt. Wir gehen diese Bereiche gemeinsam mit Ihnen durch, um festzulegen,
          welche Zugänge am besten geeignet sind.
        </p>
      </div>

      {/* Besonderheit 5 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Unterschiedliche Gebäudezüge & Anbauten
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Häuser in Braiten wurden über Generationen erweitert. Dadurch entstehen
          Übergänge zwischen alten und neuen Anbauten, die besondere Aufmerksamkeit
          bei Planung und Durchführung erfordern.
        </p>
      </div>

      {/* Besonderheit 6 */}
      <div className="rounded-2xl border border-[#E8E1D9] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Realistische Zeitplanung durch lokale Erfahrung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Weil wir die Wege, Straßen und Geländeformen Braiten seit Jahren praktisch
          kennen, können wir jede Aufgabe verlässlich einschätzen und realistische
          Zeitfenster nennen – ein entscheidender Vorteil für Auftraggeber mit
          festen Übergabeterminen.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION 7: Kosten der Entrümpelung in Braiten ===== */}
<section
  id="kosten-braiten"
  aria-label="Kosten der Entrümpelung in Braiten – transparent erklärt"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[860px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Kosten der Entrümpelung in Braiten – transparent erklärt
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Eine realistische Kosteneinschätzung gelingt nur dann, wenn man die örtlichen
        Gegebenheiten kennt. In Braiten unterscheiden sich Häuser oft deutlich
        voneinander: ältere Wohnstrukturen entlang der <strong>Braitner Straße</strong>,
        großzügige Einfamilienhäuser Richtung <strong>Helenental</strong> oder
        weitläufige Grundstücke im Bereich der <strong>Römerstraße</strong>. Diese
        Unterschiede beeinflussen, wie viel Zeit und Planung eine Räumung benötigt.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Genau deshalb erfolgt die Einschätzung immer individuell – klar, verständlich und
        ohne unübersichtliche Zusatzpunkte. Unsere Erfahrung in der Region ermöglicht es,
        sehr präzise Angebote abzugeben, damit Sie frühzeitig wissen, womit Sie rechnen
        können.
      </p>
    </header>

    <div className="space-y-8">

      {/* Faktor 1 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Größe & Anzahl der Räume
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein Haus mit Keller, Dachboden, Garage und weiteren Nebenräumen erfordert einen
          anderen Aufwand als eine kompakte Wohneinheit. Besonders ältere Häuser, die über
          Generationen gewachsen sind, haben oft mehrere Ebenen, die bei der Planung
          berücksichtigt werden.
        </p>
      </div>

      {/* Faktor 2 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Zugänge, Wege & Grundstücksstruktur
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Steile Gartenwege am Hang, alte Tore oder schmale Zufahrten – solche Details sind
          typisch für Braiten und beeinflussen, wie lange ein Team vor Ort benötigt.
          Dank unserer regionalen Erfahrung können wir diese Faktoren sehr genau einschätzen.
        </p>
      </div>

      {/* Faktor 3 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Arbeitsaufwand & Besonderheiten im Objekt
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Manche Räume erfordern zusätzliche Schritte, etwa wenn ältere Möbel demontiert
          oder schwer zugängliche Bereiche vorbereitet werden müssen. Durch unsere häufigen
          Einsätze in Braiten wissen wir, wie man solche Aufgaben effizient plant.
        </p>
      </div>

      {/* Faktor 4 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Wertanrechnung bei hochwertigen Stücken
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wenn sich im Objekt wertige Einzelstücke befinden, kann eine faire Wertanrechnung
          vorgenommen werden. Das reduziert die Gesamtkosten und schafft eine transparente
          Grundlage, die Auftraggeber besonders schätzen.
        </p>
      </div>

      {/* Faktor 5 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Beispielhafte Richtwerte aus der Praxis
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Aus unserer täglichen Arbeit ergeben sich typische Spannen:  
          – kleine Einheiten: meist kompakter Aufwand  
          – Einfamilienhäuser: abhängig von Ebenen & Nebenräumen  
          – große Grundstücke: variieren je nach Zugang & Fläche  
          Da jedes Objekt einzigartig ist, erfolgt die finale Einschätzung immer
          nach der persönlichen Besichtigung.
        </p>
      </div>

      {/* Faktor 6 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Warum die Besichtigung kostenlos ist
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Eine Besichtigung schafft Klarheit für beide Seiten. Sie ermöglicht uns,
          Zugänge, Wege, Mengen und Besonderheiten realistisch einzuschätzen – und
          Ihnen die Sicherheit, ein Angebot zu erhalten, das keine Überraschungen
          mit sich bringt.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION 8: Praxisbeispiele aus Braiten ===== */}
<section
  id="praxisbeispiele-braiten"
  aria-label="Praxisbeispiele aus Braiten"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[820px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Praxisbeispiele aus Braiten
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Unsere Einsätze in Braiten zeigen, wie unterschiedlich die Anforderungen sein können.
        Durch die regelmäßige Arbeit in Bereichen wie der <strong>Braitner Straße</strong>,
        der <strong>Römerstraße</strong> und nahe dem <strong>Helenental</strong> kennen wir
        sowohl die typischen Hausstrukturen als auch die Herausforderungen, die mit älteren
        Gebäuden oder weitläufigen Grundstücken verbunden sind.
      </p>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Die folgenden Beispiele stammen aus realen Aufträgen, die wir in den letzten Jahren
        durchgeführt haben – anonymisiert, aber mit authentischen Abläufen, wie sie in Braiten
        tatsächlich vorkommen.
      </p>
    </header>

    <div className="space-y-10">

      {/* Beispiel 1 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Einfamilienhaus mit lang genutztem Dachboden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In einem Haus nahe der Braitner Straße sollten mehrere Ebenen vorbereitet werden.
          Der Dachboden war über Jahrzehnte als Abstellraum genutzt worden, teilweise mit
          älteren Möbeln und Erinnerungsstücken. Nach einem ausführlichen Rundgang legten
          wir gemeinsam mit den Eigentümern fest, welche Bereiche priorisiert werden. Dank
          klarer Planung konnten wir das gesamte Haus innerhalb eines Tages vollständig
          übergeben.
        </p>
      </div>

      {/* Beispiel 2 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Räumung eines Hauses mit Gartennebenräumen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Bei einem Auftrag nahe der Römerstraße bestand das Objekt aus einem Haupthaus,
          zwei Nebenräumen und einem älteren Schuppen. Die Wege waren teilweise verwinkelt,
          wodurch eine genaue Planung der Zugänge entscheidend war. Durch unsere Erfahrung
          mit diesen Grundstücksformen gelang ein reibungsloser Ablauf – trotz enger Zufahrten.
        </p>
      </div>

      {/* Beispiel 3 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Unterstützung einer Familie bei einer Hausübergabe
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In einem Einfamilienhaus in Richtung Helenental stand eine Übergabe an die nächste
          Generation an. Die Familie wünschte sich einen ruhigen, klaren Ablauf ohne
          zusätzlichen Stress. Wir begleiteten sie Schritt für Schritt, legten Prioritäten
          fest und nutzten vorhandene Zugänge optimal aus. Die Übergabe verlief planmäßig
          und wurde von der Familie dankbar angenommen.
        </p>
      </div>

      {/* Beispiel 4 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Vorbereitung eines Objekts vor Renovierung
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ein Haus nahe der Marchetstraße sollte vor einer umfassenden Renovierung
          vollständig leer sein. Die Herausforderung bestand in engen Innenwegen und
          mehreren verwinkelten Räumen. Durch eine kombinierte Planung der Zugänge konnte
          das gesamte Objekt termingerecht vorbereitet werden.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION 9: Warum sich Auftraggeber aus Braiten für uns entscheiden ===== */}
<section
  id="warum-braiten"
  aria-label="Warum sich Auftraggeber aus Braiten für uns entscheiden"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[820px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Warum sich Auftraggeber aus Braiten für uns entscheiden
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Wer in Braiten lebt, kennt die Besonderheiten des Ortsteils: verwinkelte Wege,
        Häuser mit Geschichte und Grundstücke, die über viele Jahre gewachsen sind.
        Viele Auftraggeber entscheiden sich für uns, weil wir diese Strukturen nicht nur
        kennen, sondern seit Jahren damit arbeiten – von der <strong>Braitner Straße</strong>
        bis hin zu Bereichen Richtung <strong>Helenental</strong>.
      </p>
    </header>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Grund 1 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Regionale Erfahrung, die man merkt
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wir kennen die Wege, Zufahrten und Hausstrukturen Braiten nicht aus Karten,
          sondern aus jahrelanger Arbeit vor Ort. Diese Erfahrung sorgt für einen Ablauf,
          der realistisch geplant und zuverlässig umgesetzt wird.
        </p>
      </div>

      {/* Grund 2 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Klarheit von Anfang an
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Auftraggeber sagen uns später, dass sie die transparente Kommunikation 
          besonders geschätzt haben. Jeder Schritt wird erklärt, jede Entscheidung 
          nachvollziehbar gemacht – ohne Fachbegriffe, die unnötig verwirren.
        </p>
      </div>

      {/* Grund 3 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Ruhe & Diskretion in sensiblen Situationen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Gerade wenn es um Übergaben, Veränderungen oder Entscheidungen im Familienkreis geht,
          ist eine ruhige Arbeitsweise entscheidend. Wir arbeiten respektvoll, verlässlich
          und ohne Hektik – das schafft Vertrauen.
        </p>
      </div>

      {/* Grund 4 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Faire Wertanrechnung bei passenden Stücken
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Wenn wir hochwertige Einzelstücke entdecken, sprechen wir offen über mögliche
          Anrechnung. Diese Offenheit wird in Braiten oft hervorgehoben, weil sie einen
          spürbaren Unterschied bei den Gesamtkosten machen kann.
        </p>
      </div>

      {/* Grund 5 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Verlässliche Termine & planbare Abläufe
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Da wir regelmäßig im Raum Baden & Braiten unterwegs sind, können Termine flexibel
          vergeben werden. Diese regionale Nähe verhindert Verzögerungen und sorgt für einen
          Ablauf, der pünktlich startet und pünktlich endet.
        </p>
      </div>

      {/* Grund 6 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          Eine Arbeitsweise, die Vertrauen schafft
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele unserer Aufträge entstehen durch Empfehlungen – ein Zeichen dafür, dass 
          unsere Art zu arbeiten überzeugt. Verlässlichkeit, Offenheit und Erfahrung bilden
          die Basis, auf die sich Auftraggeber in Braiten verlassen.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ===== SEKTION 10: FAQ – Entrümpelung Braiten ===== */}
<section
  id="faq-braiten"
  aria-label="FAQ – Entrümpelung Braiten"
  className="relative bg-[#FAFAFA] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[800px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        FAQ – Entrümpelung Braiten
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Damit Sie schon vor dem ersten Gespräch ein klares Bild haben, haben wir die häufigsten
        Fragen aus Braiten gesammelt. Die Antworten beruhen auf unserer praktischen Erfahrung 
        im Ortsteil – von kleinen Einheiten bis zu komplexen Situationen in Häusern rund um 
        die Braitner Straße und das angrenzende Umland.
      </p>
    </header>

    <div className="grid gap-4">
      {/* Frage 1 */}
      <details className="group rounded-2xl border border-[#E4DCD3] bg-white p-5 shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#2B3A42]">
            Wie schnell können Termine in Braiten vergeben werden?
          </h3>
          <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#A7A9AC66] text-[#2B3A42] transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Da wir regelmäßig im Raum Baden und Braiten im Einsatz sind, lassen sich Termine meist 
          kurzfristig umsetzen. In vielen Fällen können wir bereits innerhalb weniger Tage eine 
          Besichtigung anbieten, manchmal sogar am selben Tag.
        </p>
      </details>

      {/* Frage 2 */}
      <details className="group rounded-2xl border border-[#E4DCD3] bg-white p-5 shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#2B3A42]">
            Ist die Besichtigung kostenlos?
          </h3>
          <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#A7A9AC66] text-[#2B3A42] transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ja, die Besichtigung ist immer kostenlos und unverbindlich. Vor Ort verschaffen wir uns 
          einen realistischen Eindruck, besprechen den Umfang und klären alle offenen Fragen, 
          damit das spätere Angebot eindeutig nachvollziehbar ist.
        </p>
      </details>

      {/* Frage 3 */}
      <details className="group rounded-2xl border border-[#E4DCD3] bg-white p-5 shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#2B3A42]">
            Können einzelne Räume – z. B. Keller oder Dachboden – separat durchgeführt werden?
          </h3>
          <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#A7A9AC66] text-[#2B3A42] transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Natürlich. Gerade in Braiten kommt es häufig vor, dass zunächst nur Teilbereiche wie 
          Nebenräume, Abstellflächen oder einzelne Stockwerke aufbereitet werden sollen. Wir 
          stimmen den Umfang flexibel ab – so, wie es für Sie am sinnvollsten ist.
        </p>
      </details>

      {/* Frage 4 */}
      <details className="group rounded-2xl border border-[#E4DCD3] bg-white p-5 shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#2B3A42]">
            Wie läuft die Preisgestaltung in Braiten ab?
          </h3>
          <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#A7A9AC66] text-[#2B3A42] transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Der Preis richtet sich nach dem tatsächlichen Umfang vor Ort. Dazu zählen die Größe 
          des Objekts, die Menge der Gegenstände und die Zugänglichkeit. Bei passenden Stücken 
          prüfen wir zusätzlich eine faire Wertanrechnung, was viele Kunden als großen Vorteil 
          empfinden.
        </p>
      </details>

      {/* Frage 5 */}
      <details className="group rounded-2xl border border-[#E4DCD3] bg-white p-5 shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#2B3A42]">
            Was, wenn der Zustand der Räume schwierig oder seit Jahren unverändert ist?
          </h3>
          <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#A7A9AC66] text-[#2B3A42] transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Das ist in Braiten keineswegs ungewöhnlich. Viele ältere Häuser besitzen Lagerräume, 
          die lange nicht mehr betreten wurden. Wir arbeiten Schritt für Schritt, dokumentieren 
          den Beginn auf Wunsch und sorgen dafür, dass der Ablauf für Sie gut nachvollziehbar bleibt.
        </p>
      </details>

      {/* Frage 6 */}
      <details className="group rounded-2xl border border-[#E4DCD3] bg-white p-5 shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#2B3A42]">
            Kann ich auch aus dem Ausland oder mit wenig Zeit alles regeln?
          </h3>
          <span className="inline-grid h-7 w-7 place-items-center rounded-full border border-[#A7A9AC66] text-[#2B3A42] transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ja. Wir übernehmen auf Wunsch die vollständige Koordination. Viele Auftraggeber aus 
          Deutschland oder der Schweiz geben uns Schlüsselübergaben, Videoschaltungen oder 
          klare Prioritäten – so kann alles erledigt werden, ohne dass Sie vor Ort sein müssen.
        </p>
      </details>
    </div>
  </div>
</section>
{/* ===== SEKTION 11: Experten-Tipps für Entrümpelung in Braiten ===== */}
<section
  id="experten-tipps-braiten"
  aria-label="Experten-Tipps für Entrümpelung in Braiten"
  className="relative bg-[#FFFFFF] py-20 md:py-16"
>
  <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">

    <header className="max-w-[820px] mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3A42]">
        Experten-Tipps für eine reibungslose Entrümpelung in Braiten
      </h2>
      <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[#334049]">
        Viele Situationen in Braiten ähneln einander – und doch ist jeder Auftrag ein kleines
        Einzelprojekt. Die folgenden Empfehlungen stammen aus unserer praktischen Erfahrung im
        Ortsteil, besonders entlang der Braitner Straße und den angrenzenden Hanglagen Richtung
        Helenental. Sie helfen dabei, den Ablauf klar, ruhig und gut planbar zu gestalten.
      </p>
    </header>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Tipp 1 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          1. Frühzeitig einen fixen Besichtigungstermin sichern
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In Braiten sind manche Wege enger oder nur zu bestimmten Zeiten gut befahrbar. 
          Ein frühzeitig vereinbarter Termin erspart Hektik und ermöglicht eine realistische 
          Planung – besonders, wenn es um größere Häuser oder Grundstücke geht.
        </p>
      </div>

      {/* Tipp 2 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          2. Persönliche Erinnerungsstücke vorab zur Seite legen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Viele Haushalte in Braiten besitzen Dinge, die über Generationen hinweg weitergegeben
          wurden. Wenn gewisse Stücke einen besonderen Wert für die Familie haben, hilft es enorm, 
          diese schon vor dem Termin gesondert bereitzulegen.
        </p>
      </div>

      {/* Tipp 3 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          3. Zugang & Schlüssel vorab klären
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Manche Häuser in Braiten besitzen mehrere Eingänge oder ältere Schließsysteme.
          Ein kurzer Test im Vorfeld erspart Verzögerungen und sorgt dafür, dass der Termin 
          ohne unnötige Unterbrechungen ablaufen kann.
        </p>
      </div>

      {/* Tipp 4 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          4. Fotos oder kurze Beschreibung senden
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Eine kurze Bildübersicht erleichtert es uns, den Umfang realistisch einzuschätzen.
          Viele Kundinnen und Kunden aus Braiten schicken uns vorab ein paar Aufnahmen und 
          erhalten dadurch schneller ein gut abgestimmtes Angebot.
        </p>
      </div>

      {/* Tipp 5 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          5. Bei hochwertigen Stücken mögliche Wertanrechnung ansprechen
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          In manchen Häusern finden sich gut erhaltene Möbel, Bilder oder Einzelstücke, die 
          für eine faire Anrechnung geeignet sind. Wer uns früh darauf hinweist, erhält 
          meist ein präziseres Preisbild – und oft eine spürbare Kostenreduzierung.
        </p>
      </div>

      {/* Tipp 6 */}
      <div className="rounded-2xl border border-[#E4DCD3] bg-[#FAFAFA] p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#2B3A42]">
          6. Einen klaren Zeithorizont definieren
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#4B3C30]">
          Ob Verkauf, Übergabe oder Neuorganisation: Ein klarer Zeitraum hilft bei der 
          Planung enorm. Je genauer wir wissen, wann das Objekt bereit sein soll, desto 
          strukturierter fällt der gesamte Ablauf aus.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-wrap gap-4 items-center">
      <a
        href="https://wa.me/436767202623"
        className="rounded-xl bg-[#CBB47B] px-6 py-3 text-sm font-semibold text-white shadow-md hover:brightness-110 transition"
      >
        Fragen stellen oder Fotos senden
      </a>
      <a
        href="tel:+436767202623"
        className="rounded-xl border border-[#2B3A42] px-6 py-3 text-sm font-semibold text-[#2B3A42] hover:bg-[#2B3A42] hover:text-white transition"
      >
        Direkt anrufen
      </a>
      <span className="text-sm text-[#6B7280]">
        Erfahrung aus über 20 Jahren im Raum Baden & Braiten.
      </span>
    </div>

  </div>
</section>



    </>
  );
}