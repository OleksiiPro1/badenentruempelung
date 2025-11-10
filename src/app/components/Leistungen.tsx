import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";

type ServiceItem = {
  slug: string;
  title?: string;
  description?: string;
  image: string;
  width?: number;
  height?: number;
  alt?: string;
  date: string;
  excerpt: string;
};

// Krems palette (нейтральная)
const BLACK    = "#111111";
const WHITE    = "#FFFFFF";
const GRAY_TXT = "#6B7280";  // вторичный текст
const GRAY_BR  = "#D1D5DB";  // все обводки/разделители

export default function Leistungen({ items }: { items?: any[] }) {
  const list = items ?? services; // если items не переданы — показываем все

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {(services as ServiceItem[]).map((s) => {
        const displayTitle = (s.title ?? "").trim() || "Unsere Leistung";
        const altText =
          (s.alt ?? s.title ?? "").trim() ||
          " Entrümpelung – Leistungen in Wien";
        const headingId = `svc-${s.slug}-h2`;

        return (
          <article
            key={s.slug}
            className="group rounded-2xl border bg-white transition hover:shadow-md"
            style={{ borderColor: GRAY_BR }}
          >
            {/* Изображение */}
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src={s.image}
                alt={altText}
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                loading="lazy"
              />
            </div>

            {/* Контент */}
            <div className="p-5">
              {/* Заголовок — единственная ссылка */}
              <h2
                id={headingId}
                className="text-xl font-semibold tracking-tight"
                style={{ color: BLACK }}
              >
                <Link
                  href={`/${s.slug}`}
                  rel="bookmark"
                  className="transition-colors hover:opacity-90 underline underline-offset-[6px] decoration-2"
                  style={{ textDecorationColor: GRAY_BR, color: BLACK }}
                >
                  {displayTitle}
                  <span className="sr-only"> – mehr erfahren</span>
                </Link>
              </h2>

              {/* Метаданные */}
              {s.date && (
                <p className="mt-1 text-xs" style={{ color: GRAY_TXT }}>
                  <time dateTime={s.date}>{s.date}</time>
                </p>
              )}

              {/* Тексты */}
              {s.excerpt && (
                <p className="mt-3 text-sm leading-relaxed" style={{ color: GRAY_TXT }}>
                  {s.excerpt}
                </p>
              )}
              {s.description && (
                <p className="mt-2 text-sm leading-relaxed" style={{ color: GRAY_TXT }}>
                  {s.description}
                </p>
              )}

              {/* Нижний акцент (серый делитель + бейдж) */}
              
              <div className="mt-4 flex items-center justify-between">
                

               
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
