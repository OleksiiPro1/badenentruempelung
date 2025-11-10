import Link from 'next/link';
import Image from 'next/image';

// Здесь твои данные об услугах
const services = [
  {
    slug: 'branding',
    title: 'Branding',
    image: '/images/service1.jpg',
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    image: '/images/service2.jpg',
  },
  // добавляй дальше
];

export default function UslugiGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {services.map((s) => (
        <article key={s.slug} className="group">
          <Link href={`/uslugi/${s.slug}`} className="block mb-4 overflow-hidden rounded">
            <div className="relative aspect-[3/2]">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <h2 className="text-xl font-medium mb-2 group-hover:text-gold transition-colors">
            <Link href={`/uslugi/${s.slug}`}>{s.title}</Link>
          </h2>
        </article>
      ))}
    </div>
  );
}
