import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCityBySlug, getNearbyCities, getProvinceBySlug } from '@/data/cities';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';
import Breadcrumb from '@/components/Breadcrumb';

interface Props {
  params: { province: string; city: string };
}

// Cities we previously served — now show Coming Soon
const comingSoonCities: { province: string; city: string; name: string }[] = [
  { province: 'ontario', city: 'toronto', name: 'Toronto' },
  { province: 'ontario', city: 'brampton', name: 'Brampton' },
  { province: 'ontario', city: 'mississauga', name: 'Mississauga' },
  { province: 'ontario', city: 'hamilton', name: 'Hamilton' },
  { province: 'ontario', city: 'london', name: 'London' },
  { province: 'ontario', city: 'barrie', name: 'Barrie' },
  { province: 'ontario', city: 'ottawa', name: 'Ottawa' },
  { province: 'ontario', city: 'oshawa', name: 'Oshawa' },
  { province: 'nova-scotia', city: 'dartmouth', name: 'Dartmouth' },
  { province: 'nova-scotia', city: 'sydney', name: 'Sydney' },
  { province: 'nova-scotia', city: 'truro', name: 'Truro' },
  { province: 'nova-scotia', city: 'new-glasgow', name: 'New Glasgow' },
  { province: 'nova-scotia', city: 'kentville', name: 'Kentville' },
  { province: 'nova-scotia', city: 'bridgewater', name: 'Bridgewater' },
  { province: 'nova-scotia', city: 'amherst', name: 'Amherst' },
  { province: 'nova-scotia', city: 'antigonish', name: 'Antigonish' },
  { province: 'nova-scotia', city: 'yarmouth', name: 'Yarmouth' },
  { province: 'new-brunswick', city: 'moncton', name: 'Moncton' },
  { province: 'new-brunswick', city: 'fredericton', name: 'Fredericton' },
  { province: 'new-brunswick', city: 'bathurst', name: 'Bathurst' },
  { province: 'new-brunswick', city: 'miramichi', name: 'Miramichi' },
  { province: 'new-brunswick', city: 'edmundston', name: 'Edmundston' },
  { province: 'new-brunswick', city: 'campbellton', name: 'Campbellton' },
  { province: 'new-brunswick', city: 'dieppe', name: 'Dieppe' },
  { province: 'new-brunswick', city: 'riverview', name: 'Riverview' },
  { province: 'new-brunswick', city: 'sussex', name: 'Sussex' },
];

// ── Generate all city pages at build time ──────────────────────────────────
export async function generateStaticParams() {
  const activeCities = cities.map((city) => ({
    province: city.province,
    city: city.slug,
  }));
  const comingSoon = comingSoonCities.map((c) => ({
    province: c.province,
    city: c.city,
  }));
  return [...activeCities, ...comingSoon];
}

// ── SEO metadata per city ──────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (city) {
    return {
      title: city.metaTitle,
      description: city.metaDescription,
      openGraph: {
        title: city.metaTitle,
        description: city.metaDescription,
        type: 'website',
      },
      alternates: {
        canonical: `/delivery/${city.province}/${city.slug}`,
      },
    };
  }
  const cs = comingSoonCities.find((c) => c.city === params.city);
  if (cs) {
    return {
      title: `Dragonfly Delivery in ${cs.name} — Coming Soon | Jaatram Logistics`,
      description: `Jaatram Logistics is expanding Dragonfly delivery services to ${cs.name}. Join the waitlist and be the first to know when we launch in your area.`,
    };
  }
  return {};
}

// ── Coming Soon component ───────────────────────────────────────────────────
function ComingSoonPage({ cityName, province }: { cityName: string; province: string }) {
  const provinceLabel =
    province === 'ontario' ? 'Ontario' :
    province === 'nova-scotia' ? 'Nova Scotia' : 'New Brunswick';

  return (
    <>
      <section className="bg-hero-gradient py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Expanding Soon
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {cityName}, <span className="text-gold">{provinceLabel}</span>
          </h1>
          <p className="text-white/70 text-lg mb-8">
            We are expanding our Dragonfly delivery services to {cityName}. Our team is working hard to bring the same reliable, professional service to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Get Notified When We Launch
            </Link>
            <Link
              href={`/delivery/${province}`}
              className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-8 py-3 rounded-xl transition-colors"
            >
              View Active {provinceLabel} Cities
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black text-navy mb-3">We Are Currently Serving These Cities</h2>
          <p className="text-gray-500 mb-8">Our active delivery areas across three provinces. Click a city to learn more.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            {[
              { name: 'Windsor, ON', href: '/delivery/ontario/windsor' },
              { name: 'Sarnia, ON', href: '/delivery/ontario/sarnia' },
              { name: 'Kitchener, ON', href: '/delivery/ontario/kitchener' },
              { name: 'Brantford, ON', href: '/delivery/ontario/brantford' },
              { name: 'Vaughan, ON', href: '/delivery/ontario/vaughan' },
              { name: 'Scarborough, ON', href: '/delivery/ontario/scarborough' },
              { name: 'Pembroke, ON', href: '/delivery/ontario/pembroke' },
              { name: 'Halifax, NS', href: '/delivery/nova-scotia/halifax' },
              { name: 'Saint John, NB', href: '/delivery/new-brunswick/saint-john' },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-light-blue hover:bg-mid-blue/20 text-navy font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

// ── Page component ─────────────────────────────────────────────────────────
export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city);

  // Show coming soon for known-but-inactive cities
  if (!city) {
    const cs = comingSoonCities.find((c) => c.city === params.city);
    if (cs) return <ComingSoonPage cityName={cs.name} province={cs.province} />;
    notFound();
  }

  const province = getProvinceBySlug(city.province);
  const nearbyCities = getNearbyCities(city, 3);

  // JSON-LD schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jaatram Logistics',
    description: `Certified Dragonfly DSP delivering packages in ${city.name}, ${city.provinceAbbr}. Professional team, real-time tracking, 4.9-star rating.`,
    url: `https://jaatramlogistics.com/delivery/${city.province}/${city.slug}`,
    telephone: '+14377270000',
    email: 'jaatramlogistics@gmail.com',
    openingHours: 'Mo-Su 08:00-20:00',
    priceRange: '$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '332 Winona Road',
      addressLocality: 'Stoney Creek',
      addressRegion: 'ON',
      postalCode: 'L8E6B5',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: city.provinceLabel,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jaatramlogistics.com' },
      { '@type': 'ListItem', position: 2, name: 'Delivery Areas', item: 'https://jaatramlogistics.com/delivery' },
      { '@type': 'ListItem', position: 3, name: city.provinceLabel, item: `https://jaatramlogistics.com/delivery/${city.province}` },
      { '@type': 'ListItem', position: 4, name: city.name },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Delivery Areas', href: '/delivery' },
              { label: city.provinceLabel, href: `/delivery/${city.province}` },
              { label: city.name },
            ]}
          />
          <div className="mt-5 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Dragonfly DSP in {city.provinceAbbr}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                {city.heroHeadline}
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                {city.introParagraph}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
                <a href="tel:+14377270000" className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-6 py-3 rounded-xl transition-colors">
                  Call Now
                </a>
              </div>
            </div>

            {/* Inline quote form on city pages */}
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <h2 className="font-bold text-navy text-lg mb-1">
                Get a Quote for {city.name}
              </h2>
              <p className="text-xs text-gray-400 mb-4">Response within 24 hours</p>
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-navy py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { val: '140+', label: 'Professionals' },
              { val: '6k+', label: 'Deliveries' },
              { val: '4.9★', label: 'Google Rating' },
              { val: '7 days', label: 'We operate' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-gold">{s.val}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Jaatram */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-navy mb-2">
            Why Choose Jaatram Logistics in <span className="text-gold">{city.name}?</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Certified Dragonfly DSP delivering in {city.name}, {city.provinceAbbr} with a professional team and modern fleet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {city.serviceHighlights.map((highlight, i) => (
              <div key={i} className="bg-light-blue rounded-2xl p-5">
                <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center text-navy font-black text-sm mb-3">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>

          {/* Service features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              `Dragonfly-certified delivery in ${city.name}, ${city.provinceAbbr}`,
              'Real-time GPS tracking on every package',
              'Professional, uniformed delivery team',
              '4.9-star Google rating across all markets',
              '140+ team members and 106-vehicle fleet',
              '7-day delivery, 8AM to 8PM',
              'Eco-friendly EV options available',
              '24/7 customer support by phone and email',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 text-sm text-gray-700">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jaatram section */}
      <section className="py-14 bg-light-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-black text-navy mb-4">
                Shipping Solution in <span className="text-gold">{city.provinceLabel}</span> Since 2022
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Jaatram Logistics was founded in 2022 by our CEO who arrived in Canada as a student in 2019 and started as a delivery driver. Our first Dragonfly station contract was in Brantford, Ontario. Today we operate across nine stations serving Ontario, Nova Scotia, and New Brunswick.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                With 140 dedicated professionals, 12 experienced supervisors, and a modern fleet of 106 vehicles, we deliver thousands of packages every week with a 4.9-star rating.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-navy">
                <span className="text-gold text-lg">★★★★★</span>
                4.9 Google Rating · Dragonfly DSP Certified
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-6 text-white">
              <p className="text-xs font-bold text-gold uppercase tracking-wider mb-3">Nearest Dragonfly Station</p>
              <h3 className="text-xl font-bold mb-2">{city.nearbyStation}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Our certified team operates from this station to serve {city.name} and surrounding {city.region} communities.
              </p>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gold">📍</span>
                  <span className="text-white/70">{city.name}, {city.provinceAbbr}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gold">🕐</span>
                  <span className="text-white/70">Mon–Sun, 8AM–8PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gold">📞</span>
                  <a href="tel:+14377270000" className="text-gold hover:underline">+1 (437) 727 0000</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-navy mb-2">
            Frequently Asked Questions: <span className="text-gold">{city.name}</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Common questions about Dragonfly delivery and logistics services in {city.name}, {city.provinceAbbr}.
          </p>
          <FAQAccordion faqs={city.faqs} />
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="py-10 bg-light-blue">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-navy mb-4">
              We Also Deliver Nearby
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/delivery/${nearby.province}/${nearby.slug}`}
                  className="bg-white rounded-xl p-4 [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)] hover:[box-shadow:0_6px_28px_0_rgba(26,43,94,0.14)] transition-shadow group"
                >
                  <h3 className="font-bold text-navy group-hover:text-gold transition-colors">
                    {nearby.heroHeadline.replace('Dragonfly Delivery in ', '')}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">{nearby.serviceHighlights[0]}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Province link + internal links */}
      <section className="py-10 bg-white border-t border-mid-blue/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-gray-500 text-center mb-8">
            Looking for Dragonfly delivery across all of {city.provinceLabel}?{' '}
            <Link href={`/delivery/${city.province}`} className="text-gold font-bold hover:underline">
              View all {city.provinceLabel} delivery areas →
            </Link>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'All Delivery Areas', href: '/delivery' },
              { label: 'Our Services', href: '/services' },
              { label: 'Get a Quote', href: '/quote' },
              { label: 'Read Our Blog', href: '/blog' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-light-blue text-center rounded-xl py-3 px-4 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready for Reliable Delivery in ${city.name}?`}
        subtitle={`Our team serves ${city.name}, ${city.provinceAbbr} 7 days a week. Get a free quote or call us now.`}
      />
    </>
  );
}
