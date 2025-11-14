// src/content/services.ts — Baden Entrümpelung
export type Service = {
  slug: string;
  image?: string;
  width?: number;
  height?: number;
  alt?: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
};

export const services: Service[] = [
  {
    slug: "verlassenschaften-baden",
    image: "/images/verlassenschaften-baden.webp",
    width: 1200,
    height: 800,
    alt: "Verlassenschaften Baden – respektvolle Abwicklung und faire Wertanrechnung",
    title: "Verlassenschaften Baden",
    date: "2025-11-01",
    excerpt:
      "Verlassenschaften in Baden werden von uns behutsam und klar strukturiert abgewickelt – von der ersten Besichtigung bis zur sauberen Übergabe. Auf Wunsch mit Bewertung und fairer Wertanrechnung erhaltenswerter Stücke.",
  },
  {
    slug: "firmenaufloesung-baden",
    image: "/images/firmenaufloesung-baden.webp",
    width: 1200,
    height: 800,
    alt: "Firmenauflösung Baden – termintreu, strukturiert und diskret",
    title: "Firmenauflösung Baden",
    date: "2025-11-02",
    excerpt:
      "Ob Büro, Lager oder Geschäftslokal – wir übernehmen die komplette Firmenauflösung in Baden. Mit festen Zeitfenstern, klarer Koordination und einer diskreten, planbaren Durchführung.",
  },
  {
    slug: "raeumung-baden",
    image: "/images/raeumung-baden.webp",
    width: 1200,
    height: 800,
    alt: "Räumung Baden – zuverlässig und professionell",
    title: "Räumung Baden",
    date: "2025-11-03",
    excerpt:
      "Räumungen in Baden mit klarer Struktur und verlässlichen Zusagen. Unser Team arbeitet ruhig, sauber und termingerecht – ideal für Wohnungen, Häuser und gewerbliche Flächen.",
  },
  {
    slug: "entruempelungsfirma-baden",
    image: "/images/entruempelungsfirma-baden.webp",
    width: 1200,
    height: 800,
    alt: "Entrümpelungsfirma Baden – erfahren, lokal und flexibel",
    title: "Entrümpelungsfirma Baden",
    date: "2025-11-04",
    excerpt:
      "Als regionale Entrümpelungsfirma in Baden bieten wir klare Abläufe, transparente Preise und schnelle Termine. Vom Dachboden bis zum Keller – diskret, sauber und pünktlich.",
  },
  {
    slug: "kellerentruempelung-baden",
    image: "/images/kellerentruempelung-baden.webp",
    width: 1200,
    height: 800,
    alt: "Kellerentrümpelung Baden – schnell und übersichtlich",
    title: "Kellerentrümpelung Baden",
    date: "2025-11-05",
    excerpt:
      "Mehr Platz im Keller: Wir planen die Zugänge, stimmen den Ablauf ab und führen die Kellerentrümpelung in Baden effizient durch – inklusive fixer Übergabe.",
  },
  {
    slug: "dachboden-raeumung-baden",
    image: "/images/dachboden-raeumung-baden.webp",
    width: 1200,
    height: 800,
    alt: "Dachboden Räumung Baden – sorgfältig und planbar",
    title: "Dachboden Räumung Baden",
    date: "2025-11-06",
    excerpt:
      "Dachboden Räumung in Baden mit klarer Planung: wir prüfen Zugänge, organisieren sichere Abläufe und übergeben die Fläche geordnet und besenrein.",
  },
];
