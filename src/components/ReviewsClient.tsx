"use client";

import { useMemo, useState } from "react";

type Review = {
  id: string;
  name: string;
  rating: number; // 1..5
  text: string;
  createdAt: string; // ISO
};

/** Сидовые отзывы (Krems & Umgebung) */
const seedReviews: Review[] = [
  {
    id: "seed-1",
    name: "Familie H., Krems",
    rating: 5,
    text:
      "Angenehmer Kontakt, klare Zusagen und pünktliche Fertigstellung. Die Räume wurden wie vereinbart übergeben.",
    createdAt: "2025-02-10T10:00:00.000Z",
  },
  {
    id: "seed-2",
    name: "M. K., Mautern",
    rating: 5,
    text:
      "Kurze Reaktionszeit und ruhige Abwicklung. Die Schritte wurden verständlich erklärt – absolut empfehlenswert.",
    createdAt: "2025-03-18T14:20:00.000Z",
  },
  {
    id: "seed-3",
    name: "S. R., Langenlois",
    rating: 5,
    text:
      "Sehr verlässlich. Termin wurde eingehalten, die Übergabe war sauber dokumentiert.",
    createdAt: "2025-04-22T09:15:00.000Z",
  },
  {
    id: "seed-4",
    name: "G. P., Krems-Stein",
    rating: 5,
    text:
      "Diskret vorgegangen, gute Kommunikation und faire Einschätzung des Aufwands. Danke!",
    createdAt: "2025-05-09T16:45:00.000Z",
  },
  {
    id: "seed-5",
    name: "E. T., Furth",
    rating: 5,
    text:
      "Besichtigung ohne Hektik, klare Planung und termingerechte Durchführung. Alles bestens.",
    createdAt: "2025-06-01T12:05:00.000Z",
  },
  {
    id: "seed-6",
    name: "H. W., Gföhl",
    rating: 5,
    text:
      "Freundlich und strukturiert. Besonders gut fanden wir die fixe Ansprechperson.",
    createdAt: "2025-07-14T08:30:00.000Z",
  },
];

type Props = {
  /** Акцентный цвет (например, #FF7400). Используется для кнопок/акцентов. */
  accent: string;
  /** Куда отправлять письмо с отзывом (по умолчанию наш e-mail) */
  email?: string;
};

export default function ReviewsClient({ accent, email = "info@krems-entruempelung.at" }: Props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  // Нейтральные цвета сайта
  const BLACK = "#111111";
  const GRAY_TXT = "#6B7280";
  const GRAY_BR = "#D1D5DB";
  const WHITE = "#FFFFFF";

  // Сортируем отзывы по дате (новые выше)
  const allReviews = useMemo(
    () =>
      [...seedReviews].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    []
  );

  const average = useMemo(() => {
    const sum = allReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / allReviews.length).toFixed(1);
  }, [allReviews]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Neue Bewertung – Krems Entrümpelung");
    const safeName = (name || "Anonym").trim();
    const body = encodeURIComponent(
      `Name: ${safeName}\nBewertung: ${rating} Sterne\n\n${text.trim()}\n\n— gesendet von der Bewertungsseite`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [name, rating, text, email]);

  const STAR_ON = "★";
  const STAR_OFF = "★";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* SUMMARY / BADGE */}
      <div className="lg:col-span-1">
        <div
          className="rounded-2xl border bg-white p-6 shadow-sm"
          style={{ borderColor: GRAY_BR }}
        >
          <div className="flex items-center justify-between">
            <h2
              className="text-2xl font-semibold leading-tight"
              style={{ color: BLACK }}
            >
              Kundenstimmen
            </h2>
            <div className="text-yellow-500" aria-label={`${average} von 5 Sternen`}>
              {STAR_ON.repeat(5)}
            </div>
          </div>
          <p className="mt-2 text-sm" style={{ color: GRAY_TXT }}>
            Durchschnitt: <strong>{average}/5</strong> ({allReviews.length} Bewertungen)
          </p>
          <p className="mt-4" style={{ color: GRAY_TXT }}>
            Rückmeldungen aus Krems &amp; Umgebung zu Räumungen, Verlassenschaften und
            Entrümpelungen. Vielen Dank für Ihr Vertrauen.
          </p>
        </div>

        {/* FORM */}
        <div
          className="rounded-2xl border bg-white p-6 shadow-sm mt-8"
          style={{ borderColor: GRAY_BR }}
        >
          <h3
            className="text-xl font-semibold leading-tight"
            style={{ color: BLACK }}
          >
            Eigene Bewertung
          </h3>
          <p className="mt-2 text-sm" style={{ color: GRAY_TXT }}>
            Ihre Nachricht wird per E-Mail vorbereitet (mailto) – ohne Registrierung.
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block text-sm" style={{ color: GRAY_TXT }}>
                Name (optional)
              </label>
              <input
                className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                style={{ borderColor: GRAY_BR }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="z. B. M. H., Krems"
                maxLength={80}
              />
            </div>

            <div>
              <label className="block text-sm mb-1" style={{ color: GRAY_TXT }}>
                Bewertung
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    aria-label={`${n} Sterne`}
                    className={`h-8 w-8 rounded-md border flex items-center justify-center ${
                      n <= rating ? "bg-yellow-400/80" : "bg-white"
                    }`}
                    style={{ borderColor: GRAY_BR, color: BLACK }}
                  >
                    ★
                  </button>
                ))}
                <span className="ml-2 text-sm" style={{ color: GRAY_TXT }}>
                  {rating}/5
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm" style={{ color: GRAY_TXT }}>
                Ihre Nachricht <span className="text-red-500">*</span>
              </label>
              <textarea
                className="mt-1 w-full rounded-lg border px-3 py-2 min-h-[120px] outline-none focus:ring"
                style={{ borderColor: GRAY_BR, color: BLACK }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Kurze Rückmeldung zu Termin, Ablauf und Übergabe…"
                maxLength={1000}
              />
              <div className="mt-1 text-xs" style={{ color: GRAY_TXT }}>
                Max. 1000 Zeichen.
              </div>
            </div>

            <a
              href={text.trim() ? mailtoHref : undefined}
              onClick={(e) => {
                if (!text.trim()) {
                  e.preventDefault();
                  alert("Bitte geben Sie eine kurze Nachricht ein.");
                }
              }}
              className="inline-flex justify-center rounded-md px-5 py-2 text-sm font-semibold transition hover:opacity-90"
              style={{
                background: accent,
                color: WHITE,
                boxShadow: "0 4px 10px rgba(0,0,0,.06)",
                opacity: text.trim() ? 1 : 0.6,
                pointerEvents: text.trim() ? "auto" : "none",
              }}
              aria-disabled={!text.trim()}
            >
              Per E-Mail senden
            </a>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="lg:col-span-2">
        <div className="mt-0 grid gap-4">
          {allReviews.map((r) => (
            <article
              key={r.id}
              className="rounded-2xl border bg-white p-5 shadow-sm"
              style={{ borderColor: GRAY_BR }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium" style={{ color: BLACK }}>
                  {r.name}
                </h3>
                <div className="text-yellow-500" aria-label={`${r.rating} Sterne`}>
                  {STAR_ON.repeat(r.rating)}
                  <span style={{ color: "#E5E7EB" }}>
                    {STAR_OFF.repeat(5 - r.rating)}
                  </span>
                </div>
              </div>
              <p className="mt-2" style={{ color: BLACK }}>
                {r.text}
              </p>
              <p className="mt-3 text-xs" style={{ color: GRAY_TXT }}>
                {new Date(r.createdAt).toLocaleDateString("de-AT")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
