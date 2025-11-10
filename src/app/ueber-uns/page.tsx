// app/ueber-uns/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/** Brand (Raumfrei Wien) */
const ACCENT   = "#D97500"; // rgb(217,117,0) — акцент (кнопки/тонкие линии)
const BLACK    = "#000000"; // основной текст
const WHITE    = "#FFFFFF"; // фон/карточки
const GRAY_TXT = "#6B7280"; // вторичный текст
const GRAY_BR  = "#D1D5DB"; // обводки/разделители

export const metadata: Metadata = {
  title: "Über uns – Raumfrei Wien",
  description:
    "Raumfrei Wien: Persönliche Begleitung, klare Abläufe und pünktliche Durchführung in ganz Wien. Unverbindliche Besichtigung, Fixtermine, saubere Übergabe.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* HERO */}
<section
  className="pt-28 pb-12 mx-auto px-6 w-full"
  style={{ maxWidth: "1150px" }}
  aria-label="Über uns Raumfrei Wien"
>
  <div
    className="rounded-3xl border shadow-sm p-8 md:p-10 bg-white/90 backdrop-blur"
    style={{ borderColor: GRAY_BR }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Textbereich */}
      <div>
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
          style={{
            background: WHITE,
            color: ACCENT,
            border: `1px solid ${GRAY_BR}`,
          }}
        >
          Wien • unverbindliche Besichtigung
        </span>

        <h1
          className="text-4xl md:text-5xl font-extrabold leading-tight mt-3"
          style={{ color: BLACK }}
        >
          Über uns
        </h1>

        <p
          className="mt-4 text-base md:text-lg leading-relaxed"
          style={{ color: GRAY_TXT }}
        >
          Wir stehen in Wien für ruhige, verlässliche Abläufe: klare Zusagen,
          eine feste Ansprechperson und eine saubere Übergabe zum vereinbarten Zeitpunkt.
          Vom ersten Telefonat bis zur Fertigstellung bleiben wir erreichbar und halten alle Schritte
          nachvollziehbar fest – damit Sie Planbarkeit und Sicherheit haben.
        </p>

        <p
          className="mt-3 text-base md:text-lg leading-relaxed"
          style={{ color: GRAY_TXT }}
        >
          Unsere Stärke liegt in strukturierten, respektvollen Räumungen – vom kleinen Keller bis zur
          umfangreichen Verlassenschaft. Wir achten auf Details, kommunizieren transparent und finden
          immer eine ruhige Lösung, auch wenn Termine eng liegen.
        </p>
      </div>

      {/* Bildbereich */}
      <figure
        className="overflow-hidden rounded-2xl border bg-white order-first md:order-last"
        style={{ borderColor: GRAY_BR }}
      >
        <Image
          src="/images/uber-uns.webp"
          alt="Team bei einer Entrümpelung in Wien"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
        <figcaption
          className="px-4 py-3 text-sm text-center"
          style={{ color: GRAY_TXT }}
        >
          Eindrücke aus Wien – ruhiges, strukturiertes Arbeiten mit klaren Abläufen
          und pünktlicher Übergabe.
        </figcaption>
      </figure>
    </div>
  </div>
</section>


      {/* WER WIR SIND */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: BLACK }}>
            Wer wir sind
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: GRAY_TXT }}>
            Wir sind ein eingespieltes Team aus Wien mit Fokus auf klare Planung und verlässliche Durchführung.
            Uns ist wichtig, dass persönliche Dinge respektvoll behandelt, Wege sinnvoll organisiert und alle
            Schritte im Vorfeld verständlich abgestimmt werden.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: GRAY_TXT }}>
            Ob Wohnung, Haus, Dachboden oder Keller: Wir arbeiten strukturiert, halten Absprachen ein
            und sorgen für eine saubere Übergabe. Auf Wunsch übernehmen wir die Koordination vollständig –
            inklusive Schlüsselübernahme und schriftlicher Bestätigung.
          </p>
        </div>
      </section>

      {/* WAS WIR TUN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: BLACK }}>
            Was wir tun
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: GRAY_BR }}>
              <h3 className="text-xl font-semibold" style={{ color: BLACK }}>
                Verlassenschaften in Wien
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
                Behutsame Vorbereitung und klare Zuständigkeiten: Wichtige Unterlagen und Erinnerungsstücke
                werden gesichert, erhaltenswerte Gegenstände besprochen und der Ablauf transparent festgehalten.
                Am Ende steht eine geordnete Übergabe ohne Überraschungen.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: GRAY_BR }}>
              <h3 className="text-xl font-semibold" style={{ color: BLACK }}>
                Wohnungs- &amp; Hausräumungen
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
                Realistische Zeitfenster, abgestimmte Zugänge und eine feste Ansprechperson. Wir planen die Wege
                sinnvoll und organisieren den Abtransport so, dass Ihr Tagesablauf planbar bleibt – bis zur
                sauberen Übergabe.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: GRAY_BR }}>
              <h3 className="text-xl font-semibold" style={{ color: BLACK }}>
                Dachboden &amp; Keller
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
                Bereiche mit eingeschränkten Zugängen erfordern Ruhe und Übersicht.
                Wir strukturieren den Ablauf, stimmen Zufahrten ab und dokumentieren die Schritte
                nachvollziehbar – ideal als Vorbereitung für Übergaben oder Arbeiten am Objekt.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-6" style={{ borderColor: GRAY_BR }}>
              <h3 className="text-xl font-semibold" style={{ color: BLACK }}>
                Büro &amp; Gewerbe
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
                Flächen in Wien rasch wieder nutzbar machen: mit klaren Zeitfenstern, Rücksicht auf Betriebsabläufe
                und pünktlicher Fertigstellung. Kommunikation bleibt kurz und verbindlich.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WO WIR ARBEITEN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight" style={{ color: BLACK }}>
            Wo wir arbeiten
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: GRAY_TXT }}>
            Schwerpunkt ganz Wien – von der Inneren Stadt bis in die Außenbezirke. Termine in angrenzenden Orten
            sind nach Rücksprache möglich. Schreiben Sie uns Ihr Anliegen – wir melden uns zeitnah mit freien
            Zeitfenstern und einem passenden Vorschlag.
          </p>
        </div>
      </section>

      {/* UNSER VERSPRECHEN */}
      <section className="pb-10 mx-auto px-6 w-full" style={{ maxWidth: "1150px" }}>
        <div className="rounded-3xl border bg-white p-6 md:p-8" style={{ borderColor: GRAY_BR }}>
          <h2 className="text-3xl font-semibold leading-tight mb-3" style={{ color: BLACK }}>
            Unser Versprechen
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-base leading-relaxed" style={{ color: GRAY_TXT }}>
            <li>Unverbindliche Besichtigung und klare, schriftliche Zusagen.</li>
            <li>Fixtermine, kurze Wege und eine feste Ansprechperson.</li>
            <li>Respektvoller Umgang mit persönlichen Dingen und Unterlagen.</li>
            <li>Saubere, fristgerechte Übergabe – dokumentiert und nachvollziehbar.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 mx-auto px-6 w-full text-center" style={{ maxWidth: "1150px" }}>
        <h2 className="text-3xl font-semibold leading-tight" style={{ color: BLACK }}>
          Sprechen wir über Ihr Anliegen
        </h2>
        <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: GRAY_TXT }}>
          Eine kurze Nachricht genügt – wir reagieren zeitnah und schlagen Ihnen ein passendes Zeitfenster vor.
          Auf Wunsch mit Schlüsselübernahme und schriftlicher Bestätigung.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="mailto:office@raumfrei-wien.at?subject=Anfrage%20Raumfrei%20Wien"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition hover:opacity-90"
            style={{
              background: ACCENT,
              color: WHITE,
              boxShadow: "0 4px 12px rgba(217,117,0,.25)",
            }}
          >
            Per E-Mail anfragen
          </Link>
          <Link
            href="tel:+436765055437"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border transition hover:bg-gray-50"
            style={{ borderColor: GRAY_BR, color: BLACK, background: WHITE }}
          >
            +43&nbsp;676&nbsp;505&nbsp;54&nbsp;37 anrufen
          </Link>
        </div>
      </section>
    </>
  );
}
