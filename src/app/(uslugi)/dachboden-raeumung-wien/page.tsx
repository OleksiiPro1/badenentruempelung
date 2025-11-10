import type { Metadata } from "next";
import Image from "next/image";

// ====== BRAND / CONTACTS ======
const BRAND = {
  accent: "rgb(217, 117, 0)",
  black: "#000",
  white: "#fff",
  gray: "#6B7280",
  email: "office@raumfrei-wien.at",
  phone: "+43 676 505 54 37",
};

/** ===== SEO Metadata für /service/dachboden-raeumung-wien ===== */
export const metadata: Metadata = {
  title: "Dachboden Räumung Wien – sicher, ruhig & termintreu | raumfrei-wien.at",
  description:
    "Dachboden Räumung in Wien mit klaren Abläufen, fester Ansprechperson und fixem Zeitfenster. Verschläge, Kammern, Flächen unterm First – kostenlose Besichtigung, schriftliches Anbot.",
  alternates: {
    canonical: "https://raumfrei-wien.at/service/dachboden-raeumung-wien",
  },
  openGraph: {
    title: "Dachboden Räumung Wien – sicher, ruhig & termintreu | raumfrei-wien.at",
    description:
      "Professionelle Dachboden Räumung in Wien: klare Planung, ruhige Durchführung, ordentliche Übergabe. Gratis Besichtigung und Fixangebot.",
    url: "https://raumfrei-wien.at/service/dachboden-raeumung-wien",
    siteName: "raumfrei-wien.at",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "/images/dachboden-raeumung-wien.webp",
        width: 1200,
        height: 900,
        alt: "Dachboden Räumung in Wien – heller Dachboden mit sichtbaren Sparren und geordneten Kisten",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const ACCENT = "rgb(217, 117, 0)"; // Orange
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GRAY = "#E5E7EB";

export default function Page() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: "https://raumfrei-wien.at/" },
              { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://raumfrei-wien.at/leistungen" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Dachboden Räumung Wien",
                item: "https://raumfrei-wien.at/service/dachboden-raeumung-wien",
              },
            ],
          }),
        }}
      />

      {/* ===== HERO: Bild rechts + 1× CTA ===== */}
      <section className="relative">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-20">
          {/* LINKSSPALTE — Text */}
          <div className="flex flex-col justify-center">
            {/* H1 (Seiten-Claim) */}
            <h1
              className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
              style={{ color: BLACK }}
            >
              Dachboden Räumung Wien – sicher, ruhig &amp; termintreu
            </h1>

            {/* H3 */}
            <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
              Feste Ansprechperson, klare Schritte, ordentliche Übergabe
            </h3>

            {/* Intro-Copy */}
            <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
              <p>
                Unter dem Dach sammeln sich Dinge rasch „für später“. Wenn dann der Termin drängt,
                braucht es ruhige Routine und einen Plan, der zum Haus passt. Genau das übernehmen
                wir in Wien – vom ersten Rundgang bis zur Übergabe, mit verlässlichen Zeitfenstern
                und einer Person, die alles koordiniert.
              </p>
              <p>
                Ob Verschlag, Kammer oder weitläufige Fläche unterm First – wir klären Zugänge,
                Stiegen und Stellflächen vorab, richten die Abfolge sinnvoll ein und machen die
                Bereiche zügig frei. So bleibt Ihr Kalender stabil und das Hausumfeld entspannt.
              </p>
              <p>
                Nach der Besichtigung erhalten Sie ein übersichtliches, schriftliches Anbot mit
                fixiertem Zeitraum. Transparent und nachvollziehbar – damit die Umsetzung pünktlich
                über die Bühne geht.
              </p>
            </div>

            {/* CTA-Block (Telefon • WhatsApp • E-Mail) */}
            <div
              className="mt-8 rounded-xl p-4 md:p-5"
              style={{ border: `1px solid ${GRAY}`, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <p className="text-sm md:text-base mb-3" style={{ color: "#374151" }}>
                Kostenlose Besichtigung in Wien – kurzer Anruf oder Nachricht genügt, wir fixieren den Termin.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <a
                  href="tel:+4367650555437"
                  className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center"
                  style={{ background: ACCENT, color: WHITE }}
                >
                  Anrufen: +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
                </a>
                <a
                  href="https://wa.me/4367650555437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                  style={{ borderColor: GRAY, background: WHITE, color: "#111" }}
                >
                  WhatsApp-Anfrage
                </a>
                <a
                  href="mailto:office@raumfrei-wien.at"
                  className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                  style={{ borderColor: GRAY, background: WHITE, color: "#111" }}
                >
                  E-Mail: office@raumfrei-wien.at
                </a>
              </div>
            </div>
          </div>

          {/* RECHTSSPALTE — Bild ohne Overlay (Platzhalter austauschbar) */}
          <div className="relative w-full self-center">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
              <Image
                src="/images/dachboden-raeumung-wien.webp"
                alt="Dachboden Räumung in Wien – heller Dachboden mit geordneten Kisten, sichere Durchführung"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 768px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Leistungen ===== */}
      <section
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
            radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
            linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
            Leistungen rund um die Dachboden Räumung in Wien
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Was wir verlässlich übernehmen – von der Luke bis zum First
          </h3>

          {/* Einleitung */}
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
            <p>
              Ein Dachboden soll funktionieren: wieder nutzbar sein, gut erreichbar bleiben und am Ende
              ohne Aufwand übergeben werden können. Damit das gelingt, braucht es klare Schritte und eine
              Mannschaft, die ruhig und zielgerichtet arbeitet.
            </p>
            <p>
              Wir klären Wege, Stiegen und Stellflächen vorab, strukturieren die Arbeit in sinnvolle
              Abschnitte und setzen sie zügig um. Unten finden Sie die Bereiche, die wir in Wien täglich
              übernehmen.
            </p>
          </div>

          {/* Leistungsraster */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Verschläge & kleine Kammern */}
            <article
              className="rounded-xl border p-6"
              style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Verschläge &amp; kleine Kammern
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Einzelne Einheiten werden rasch und geordnet frei gemacht – mit kurzer Abstimmung,
                klarer Abfolge und einem Ergebnis, das hält.
              </p>
            </article>

            {/* Weitläufige Flächen unterm First */}
            <article
              className="rounded-xl border p-6"
              style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Weitläufige Flächen unterm First
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Niedrige Sparren, lange Wege und verwinkelte Ecken – wir takten die Schritte so, dass
                alles ruhig vorankommt.
              </p>
            </article>

            {/* Leichte Demontagen */}
            <article
              className="rounded-xl border p-6"
              style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Leichte Demontagen &amp; Regale
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Abbau von einfachen Regalen und Freimachen von Abstellzonen – sauber dokumentiert und
                knapp festgehalten.
              </p>
            </article>

            {/* Hausabstimmung & Zuwegung */}
            <article
              className="rounded-xl border p-6"
              style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Hausabstimmung &amp; Zuwegung
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Liftzeiten, Stiegenhaus, Zufahrten – wir stimmen die Eckpunkte früh ab, damit Ihr Termin
                verlässlich hält.
              </p>
            </article>

            {/* Übergabe – volle Breite */}
            <article
              className="rounded-xl border p-6 md:col-span-2"
              style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Vorbereitung für die Übergabe
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Am Ende sollen Flächen ordentlich und vereinbarungsgemäß übergeben werden. Wir halten die
                wesentlichen Punkte kurz fest und sorgen für einen sauberen Abschluss.
              </p>
            </article>
          </div>

          {/* Abschlusslinie */}
          <div className="mt-10" aria-hidden>
            <div style={{ height: 1, width: "100%", background: GRAY }} />
          </div>
        </div>
      </section>

      {/* ===== Ablauf ===== */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
            Ablauf – vom Erstgespräch bis zur Schlüsselübergabe
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Fünf klare Schritte für eine planbare Dachboden Räumung in Wien
          </h3>

          {/* Einleitung */}
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
            <p>
              Steile Stiegen, enge Luken und lange Wege: Damit alles ruhig vorangeht, arbeiten wir mit
              einem übersichtlichen Ablauf und einer fixen Ansprechperson, die den Prozess koordiniert.
            </p>
          </div>

          {/* Timeline */}
          <ol className="mt-10 space-y-8 md:space-y-10">
            {[1, 2, 3, 4, 5].map((n) => (
              <li key={n} className="relative pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                  style={{ background: ACCENT, color: "#fff" }}
                >
                  {n}
                </span>
                <div
                  className="rounded-xl border p-5 md:p-6"
                  style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
                >
                  {n === 1 && (
                    <>
                      <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                        Erstgespräch &amp; Terminfix
                      </h4>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                        Wir klären Adresse, Fläche, Zugänge und Ihr Zeitfenster. Daraus entsteht ein
                        realistischer Plan, der zu Ihrem Haus passt.
                      </p>
                    </>
                  )}
                  {n === 2 && (
                    <>
                      <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                        Kostenlose Besichtigung unterm Dach
                      </h4>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                        Beim Rundgang prüfen wir Luken, Stiegen und mögliche Stellflächen. So steht die
                        Teamstärke und die Taktung – ohne Ratespiel.
                      </p>
                    </>
                  )}
                  {n === 3 && (
                    <>
                      <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                        Schriftliches Anbot &amp; fixes Zeitfenster
                      </h4>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                        Sie erhalten ein übersichtliches Anbot mit klaren Positionen und einem fixierten
                        Zeitraum – planbar und nachvollziehbar.
                      </p>
                    </>
                  )}
                  {n === 4 && (
                    <>
                      <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                        Durchführung im Takt
                      </h4>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                        Unser Team arbeitet ruhig und zügig, Wege bleiben frei, Hausvorgaben sind
                        berücksichtigt. Ihre Ansprechperson hält Sie am Laufenden.
                      </p>
                    </>
                  )}
                  {n === 5 && (
                    <>
                      <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                        Abschluss &amp; Schlüsselübergabe
                      </h4>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                        Kurze Begehung, kompakte Notizen, ordentliche Übergabe. Fertig.
                      </p>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {/* Abschlusslinie */}
          <div className="mt-10" aria-hidden>
            <div style={{ height: 1, width: "100%", background: GRAY }} />
          </div>
        </div>
      </section>

      

       <section aria-label="Verlassenschaft Ankauf Wien" className="relative"
style={{
      backgroundImage: `
        radial-gradient(120rem 60rem at 10% -10%, rgba(217,117,0,.12), transparent),
        radial-gradient(90rem 50rem at 110% 30%, rgba(217,117,0,.10), transparent),
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.98))
      `,
    }}
>
  <div className="mx-auto w-full max-w-[1150px] px-6 md:px-8 py-10 md:py-10">
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
    </div>
</section>

      {/* ===== Kosten ===== */}
      <section
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(120rem 60rem at 12% -14%, rgba(217,117,0,.10), transparent),
            radial-gradient(96rem 54rem at 92% 120%, rgba(217,117,0,.08), transparent),
            linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
            Kosten der Dachboden Räumung in Wien
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Wovon der Aufwand tatsächlich abhängt
          </h3>

          {/* Einleitung */}
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
            <p>
              Jeder Dachboden ist anders – mal kompakt, mal weitläufig mit mehreren Einheiten. Damit
              Sie verlässlich planen können, legen wir die Schritte nach einer kurzen Besichtigung
              klar fest und halten den Zeitraum fix.
            </p>
          </div>

          {/* Faktoren */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Fläche &amp; Abschnitte</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Größe, Anzahl der Verschläge und wie fein die Bereiche aufgeteilt sind, wirken direkt auf
                Teamstärke und Zeit.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Stiegen &amp; Wege im Haus</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Steilheit, Breite, Länge der Wege und Anfahrtsmöglichkeiten bestimmen das Tempo – wir prüfen das vor Ort.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Zugänge &amp; Luke</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Größe und Lage der Bodenluke sowie die Zuwegung beeinflussen die Taktung spürbar.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Zeitfenster &amp; Hausordnung</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Fixe Zeiten im Haus? Wir planen entsprechend – damit Ihr Termin hält und das Umfeld ruhig bleibt.
              </p>
            </article>
            <article className="rounded-xl border p-6 md:col-span-2" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Dokumentation &amp; Übergabe</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Je nach Bedarf kurze Dokumentation und abgestimmte Schlüsselhandhabung – kompakt festgehalten.
              </p>
            </article>
          </div>

          {/* Hinweisbox */}
          <div
            className="mt-10 rounded-xl border p-5 md:p-6"
            style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
          >
            <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
              Klar kalkuliert: schriftliches Anbot nach Besichtigung
            </h4>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
              Nach der kostenlosen Besichtigung erhalten Sie ein übersichtliches Anbot mit allen Positionen
              und einem fixierten Zeitraum – ohne vage Sammelwerte.
            </p>
          </div>

          {/* Abschlusslinie */}
          <div className="mt-10" aria-hidden>
            <div style={{ height: 1, width: "100%", background: GRAY }} />
          </div>
        </div>
      </section>

      {/* ===== Vorteile ===== */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
            Ihre Vorteile mit raumfrei-wien.at
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Warum Wiener Haushalte &amp; Hausverwaltungen uns für Dachbodenprojekte wählen
          </h3>

          {/* Einleitung */}
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
            <p>
              Unter dem Dach zählt Routine. Wir bringen Ruhe ins Projekt, halten Wege frei und stimmen
              die Details rechtzeitig ab. Das schätzen unsere Kundinnen und Kunden besonders.
            </p>
          </div>

          {/* Vorteile-Raster */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Terminsicherheit im Haus</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Fixe Zeitfenster, abgestimmte Zuwegung und klare Rückmeldungen – so bleibt Ihr Kalender stabil.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Feste Ansprechperson</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Eine Person koordiniert alle Schritte – vom Erstgespräch bis zur Schlüsselübergabe.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Ruhiges Arbeiten unterm Dach</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Geordnete Schritte, freie Wege, Rücksicht im Stiegenhaus – das Hausumfeld bleibt entspannt.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Wiener Routine &amp; Hauskenntnis</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Luken, Sparren, Hofzufahrten – wir kennen die Details, die in der Praxis zählen.
              </p>
            </article>
            <article className="rounded-xl border p-6 md:col-span-2" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Schriftliches Anbot</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Übersichtlich, nachvollziehbar und mit fixiertem Zeitraum – solide Basis für Ihre interne Planung.
              </p>
            </article>
          </div>

          {/* Abschlusslinie */}
          <div className="mt-10" aria-hidden>
            <div style={{ height: 1, width: "100%", background: GRAY }} />
          </div>
        </div>
      </section>

      {/* ===== Wann es besonders hilft ===== */}
      <section
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(120rem 60rem at 10% -14%, rgba(217,117,0,.10), transparent),
            radial-gradient(96rem 54rem at 108% 36%, rgba(217,117,0,.08), transparent),
            linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
            Wann eine Dachboden Räumung in Wien besonders hilft
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Praxisnahe Szenarien – vom Stadtapartment bis zum Altbau unterm First
          </h3>

          {/* Einleitung */}
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
            <p>
              Unter dem Dach wird gelagert, zwischengestellt und vieles „für später“ abgelegt. Wenn ein
              Termin ansteht, braucht es einen Plan, der zu Stiegen, Zugängen und kurzen Zeitfenstern passt.
            </p>
          </div>

          {/* Beispiele */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Wohnungswechsel &amp; Übergabetermin</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Wir klären Liftzeiten, Zufahrten und Stiegen vorab, teilen die Schritte sinnvoll ein und
                sorgen für pünktliche, ordentliche Übergaben.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Platz schaffen nach Umbau</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Neue Nutzung, neues System: Wir machen Flächen unterm Dach rasch wieder nutzbar – mit
                realistischen Zeitfenstern und ruhiger Abwicklung.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Altbau unterm First strukturieren</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Niedrige Durchgänge, verwinkelte Wege: Wir kennen die Eigenheiten und richten die Abfolge entsprechend ein.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>Gemeinschaftsflächen im Haus</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Rücksicht im Mehrparteienhaus: Wir informieren früh und halten Wege frei. So bleibt das Miteinander ruhig.
              </p>
            </article>
          </div>

          {/* Abschlusslinie */}
          <div className="mt-10" aria-hidden>
            <div style={{ height: 1, width: "100%", background: GRAY }} />
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
            Häufige Fragen zur Dachboden Räumung in Wien
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Klar &amp; praxisnah beantwortet
          </h3>

          {/* FAQ-Liste */}
          <div className="mt-8 space-y-6">
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Muss ich persönlich anwesend sein?
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Nicht zwingend. Nach der Besichtigung vereinbaren wir Schritte, Zeitraum und Schlüsselhandhabung.
                Auf Wunsch wickeln wir alles selbstständig ab und informieren laufend.
              </p>
            </article>

            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Wie schnell bekommen wir einen Termin – und wie lange dauert es?
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Kurzfristig oft in wenigen Tagen möglich. Die Dauer hängt von Fläche, Zugängen und Hausvorgaben ab.
                Nach der Besichtigung erhalten Sie einen fixierten Zeitraum.
              </p>
            </article>

            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Wie gehen Sie mit Akten, Geräten oder Datenträgern um?
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Vereinbarte Stücke werden getrennt erfasst und geordnet übergeben – bei Bedarf mit kurzer Dokumentation.
              </p>
            </article>

            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Gibt es ein Fixangebot oder nur ungefähre Angaben?
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Sie erhalten ein schriftliches Anbot mit klaren Positionen und fixiertem Zeitraum – Grundlage ist die Besichtigung.
              </p>
            </article>

            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>
                Was sollten wir vorab vorbereiten?
              </h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Ein kurzer Foto-Rundgang (Luken, Stiegen, enge Stellen, mögliche Stellflächen) und eine Ansprechperson
                für Rückfragen reichen meist aus.
              </p>
            </article>
          </div>

          {/* Abschlusslinie */}
          <div className="mt-10" aria-hidden>
            <div style={{ height: 1, width: "100%", background: GRAY }} />
          </div>
        </div>
      </section>

      {/* ===== Tipps ===== */}
      <section
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(120rem 60rem at 12% -14%, rgba(217,117,0,.10), transparent),
            radial-gradient(96rem 54rem at 88% 120%, rgba(217,117,0,.08), transparent),
            linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
            Experten-Tipps für eine reibungslose Dachboden Räumung
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            So bleibt in Wien alles planbar – vom ersten Rundgang bis zur Übergabe
          </h3>

          {/* Tipps */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>1) Zugänge &amp; Luke prüfen</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Welche Luken, Stiegen und Türen sind nutzbar? Ein kurzer Abgleich mit der Hausverwaltung sorgt für Stabilität.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>2) Foto-Check „light“</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Handyfotos von Luken, langen Wegen und möglichen Stellflächen helfen, Teamstärke und Taktung passend zu planen.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>3) Was bleibt, klar markieren</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Geräte, Unterlagen oder Stücke, die fix bleiben oder mitkommen, gut sichtbar kennzeichnen – spart Rückfragen und Zeit.
              </p>
            </article>
            <article className="rounded-xl border p-6" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>4) Stellflächen im Hof einplanen</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Kurze Wege beschleunigen alles: Stellplätze für Fahrzeuge und Zwischenlager vorab klären.
              </p>
            </article>
            <article className="rounded-xl border p-6 md:col-span-2" style={{ borderColor: GRAY, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: "#000" }}>5) Eine Ansprechperson benennen</h4>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#374151" }}>
                Klare Entscheidungen, schnelle Rückmeldungen – ein kurzes Protokoll (Start, Schritte, Abschluss) hält alles zusammen.
              </p>
            </article>
          </div>

          {/* Abschlusslinie */}
          <div className="mt-10" aria-hidden>
            <div style={{ height: 1, width: "100%", background: GRAY }} />
          </div>
        </div>
      </section>

      {/* ===== Kontakt / CTA (mit Bildplatzhalter optional) ===== */}
      <section
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(120rem 60rem at 50% -20%, rgba(217,117,0,.10), transparent),
            radial-gradient(100rem 56rem at 50% 120%, rgba(217,117,0,.08), transparent),
            linear-gradient(180deg, rgba(255,255,255,.97), rgba(255,255,255,.99))
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 md:py-18">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: "#000" }}>
            Kontakt für Ihre Dachboden Räumung in Wien
          </h2>

          {/* H3 */}
          <h3 className="mt-3 text-lg md:text-xl font-medium" style={{ color: "#1F2937" }}>
            Unverbindlich anfragen &amp; Besichtigung rasch fixieren
          </h3>

          {/* Einleitender Text */}
          <div className="mt-6 max-w-3xl space-y-4 text-base md:text-lg leading-relaxed" style={{ color: "#374151" }}>
            <p>
              Schlanker Ablauf: kurzer Anruf oder Nachricht, kostenlose Besichtigung vor Ort und ein
              klares, schriftliches Anbot mit fixiertem Zeitraum. So wissen Sie früh, woran Sie sind.
            </p>
            <p>
              Während der Durchführung haben Sie eine feste Ansprechperson, die die Schritte koordiniert
              und bei Rückfragen sofort erreichbar ist.
            </p>
          </div>

          {/* CTA + optionales kleines Bild rechts */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr,360px]">
            <div
              className="rounded-xl p-5 md:p-6"
              style={{ border: `1px solid ${GRAY}`, background: WHITE, boxShadow: "0 6px 20px rgba(0,0,0,.05)" }}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-sm md:text-base" style={{ color: "#374151" }}>
                  Sichern Sie sich Ihren Wunschtermin – wir melden uns zeitnah zurück und stimmen alles kurz ab.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href="tel:+4367650555437"
                    className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center"
                    style={{ background: ACCENT, color: WHITE }}
                  >
                    Anrufen: +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37
                  </a>
                  <a
                    href="https://wa.me/4367650555437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                    style={{ borderColor: GRAY, background: WHITE, color: "#000" }}
                  >
                    WhatsApp-Anfrage
                  </a>
                  <a
                    href="mailto:office@raumfrei-wien.at"
                    className="inline-block rounded-lg px-4 py-2 text-sm font-semibold text-center border"
                    style={{ borderColor: GRAY, background: WHITE, color: "#000" }}
                  >
                    E-Mail: office@raumfrei-wien.at
                  </a>
                </div>
              </div>
            </div>

            {/* Bildplatzhalter rechts (optional, kann entfernt werden) */}
            <div className="relative hidden md:block">
             
            </div>
          </div>

          {/* Abschlusslinie */}
          
        </div>
      </section>
    </>
  );
}
