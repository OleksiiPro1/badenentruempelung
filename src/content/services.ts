// src/content/services.ts
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
    slug: "verlassenschaften-wien",
    image: "/images/verlassenschaften-wien.webp",
    width: 1200,
    height: 800,
    alt: "Verlassenschaften Wien – respektvolle Abwicklung mit klaren Abläufen",
    title: "Verlassenschaften Wien",
    date: "2025-10-01",
    excerpt:
      "Verlassenschaften in Wien werden bei uns mit Ruhe und Klarheit durchgeführt – von der ersten Besichtigung bis zur besenreinen Übergabe. Auf Wunsch mit Bewertung und Ankauf erhaltenswerter Stücke.",
  },
  {
    slug: "firmenaufloesung-wien",
    image: "/images/firmenaufloesung-wien.webp",
    width: 1200,
    height: 800,
    alt: "Firmenauflösung Wien – termingerecht, strukturiert und diskret",
    title: "Firmenauflösung Wien",
    date: "2025-10-02",
    excerpt:
      "Ob Büro, Werkstatt oder Geschäftslokal – wir übernehmen die komplette Firmenauflösung in Wien mit klaren Zeitfenstern, strukturierter Durchführung und diskreter Abstimmung.",
  },

  {
    slug: "raeumung-wien",
    image: "/images/raeumung-wien.webp",
    width: 1200,
    height: 800,
    alt: "Räumung Wien – schnell, diskret und professionell",
    title: "Räumung Wien",
    date: "2025-10-05",
    excerpt:
      "Räumungen in Wien mit klaren Zusagen: wir arbeiten termintreu, strukturiert und verlässlich. Ideal für Wohnungen, Häuser, Keller oder Gewerbeobjekte.",
  },
  {
    slug: "entruempelungsfirma-wien",
    image: "/images/entruempelungsfirma-wien.webp",
    width: 1200,
    height: 800,
    alt: "Entrümpelungsfirma Wien – erfahren, regional und flexibel",
    title: "Entrümpelungsfirma Wien",
    date: "2025-10-06",
    excerpt:
      "Als erfahrene Entrümpelungsfirma in Wien bieten wir schnelle Termine, klare Preise und eine ruhige Abwicklung – vom Dachboden bis zur kompletten Wohnungsräumung.",
  },
  {
    slug: "kellerentruempelung-wien",
    image: "/images/kellerentruempelung-wien.webp",
    width: 1200,
    height: 800,
    alt: "Kellerentrümpelung Wien – rasch und planbar",
    title: "Kellerentrümpelung Wien",
    date: "2025-10-07",
    excerpt:
      "Kellerentrümpelung in Wien: Zugänge klären, Bereiche sichern und zügig freimachen. Wir sorgen für klare Wege und saubere Ergebnisse – pünktlich und unkompliziert.",
  },
  {
    slug: "dachboden-raeumung-wien",
    image: "/images/dachboden-raeumung-wien.webp",
    width: 1200,
    height: 800,
    alt: "Dachboden Räumung Wien – zuverlässig und sorgfältig",
    title: "Dachboden Räumung Wien",
    date: "2025-10-08",
    excerpt:
      "Dachboden Räumung in Wien mit Fixtermin: wir planen Wege und Zugänge vorab, arbeiten behutsam und hinterlassen die Fläche geordnet und sauber.",
  },
];
