import type { Metadata } from 'next';
import Link from 'next/link';
import { provinces, getCitiesByProvince } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Delivery Areas: Ontario, Nova Scotia & New Brunswick',
  description:
    'Jaatram Logistics delivers across Ontario (Windsor, Kitchener, Vaughan, Scarborough, Brantford, Sarnia, Pembroke), Nova Scotia (Halifax), and New Brunswick (Saint John). Certified Dragonfly DSP since 2022.',
};

export default function DeliveryPage() {
  return (
    <>
      <section className="bg-hero-gradient py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="text-gold">Delivery Areas</span>
          </h1>
          <p className="text-white/70 text-lg">
            Dragonfly last-mile delivery across 3 Canadian provinces. Find your city below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {provinces.map((province) => {
              const cities = getCitiesByProvince(province.slug);
              return (
                <div key={province.slug}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-black text-navy">{province.label}</h2>
                      <p className="text-gray-500 text-sm mt-1">{province.description}</p>
                    </div>
                    <Link
                      href={`/delivery/${province.slug}`}
                      className="text-sm font-bold text-gold hover:text-gold-dark flex items-center gap-1 transition-colors shrink-0"
                    >
                      View all
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/delivery/${province.slug}/${city.slug}`}
                        className="bg-light-blue hover:bg-navy group rounded-xl p-3 transition-colors"
                      >
                        <p className="font-semibold text-navy group-hover:text-white text-sm transition-colors">{city.name}</p>
                        <p className="text-gray-400 group-hover:text-white/60 text-xs mt-0.5 transition-colors">{city.provinceAbbr}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Internal links for SEO */}
          <div className="mt-16 pt-10 border-t border-mid-blue/20">
            <h2 className="text-xl font-black text-navy mb-6 text-center">Explore More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/services" className="bg-light-blue rounded-2xl p-5 hover:bg-navy group transition-colors">
                <p className="font-bold text-navy group-hover:text-white transition-colors mb-1">Our Services</p>
                <p className="text-xs text-gray-500 group-hover:text-white/60 transition-colors">Last-mile delivery, tracking, fleet transport and more.</p>
              </Link>
              <Link href="/quote" className="bg-gold/10 rounded-2xl p-5 hover:bg-gold group transition-colors">
                <p className="font-bold text-navy group-hover:text-navy transition-colors mb-1">Get a Free Quote</p>
                <p className="text-xs text-gray-500 group-hover:text-navy/70 transition-colors">Request a shipping quote. Response within 24 hours.</p>
              </Link>
              <Link href="/about" className="bg-light-blue rounded-2xl p-5 hover:bg-navy group transition-colors">
                <p className="font-bold text-navy group-hover:text-white transition-colors mb-1">About Jaatram</p>
                <p className="text-xs text-gray-500 group-hover:text-white/60 transition-colors">Learn about our team, fleet, and Dragonfly partnership.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
