import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { provinces, getCitiesByProvince, getProvinceBySlug } from '@/data/cities';
import CTABanner from '@/components/CTABanner';
import Breadcrumb from '@/components/Breadcrumb';

interface Props {
  params: { province: string };
}

export async function generateStaticParams() {
  return provinces.map((p) => ({ province: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const province = getProvinceBySlug(params.province as any);
  if (!province) return {};
  return {
    title: province.metaTitle,
    description: province.metaDescription,
    openGraph: {
      title: province.metaTitle,
      description: province.metaDescription,
    },
  };
}

export default function ProvincePage({ params }: Props) {
  const province = getProvinceBySlug(params.province as any);
  if (!province) notFound();

  const cities = getCitiesByProvince(province.slug);

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Jaatram Logistics',
            description: province.description,
            url: `https://jaatramlogistics.com/delivery/${province.slug}`,
            telephone: '+14377270000',
            email: 'jaatramlogistics@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '332 Winona Road',
              addressLocality: 'Stoney Creek',
              addressRegion: 'ON',
              postalCode: 'L8E6B5',
              addressCountry: 'CA',
            },
            areaServed: { '@type': 'State', name: province.label },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Delivery Areas', href: '/delivery' },
              { label: province.label },
            ]}
          />
          <div className="mt-6">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              {province.heroHeadline}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">{province.description}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
              <a href="tel:+14377270000" className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-6 py-3 rounded-xl transition-colors">
                Call +1 (437) 727 0000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-navy mb-2">
            Cities We Serve in <span className="text-gold">{province.label}</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Select a city to see full coverage details, local information, and service FAQs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/delivery/${province.slug}/${city.slug}`}
                className="group bg-light-blue hover:bg-navy rounded-2xl p-5 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-navy group-hover:text-white text-base transition-colors">{city.name}</h3>
                    <p className="text-xs text-gray-400 group-hover:text-white/60 transition-colors">{city.region}</p>
                  </div>
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors leading-relaxed line-clamp-2">
                  {city.serviceHighlights[0]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
