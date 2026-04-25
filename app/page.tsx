import Link from 'next/link';
import Image from 'next/image';
import StatsBar from '@/components/StatsBar';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

const services = [
  {
    icon: '📦',
    title: 'Last-Mile Delivery',
    desc: 'Certified Dragonfly DSP delivering packages to residential and commercial addresses across three provinces.',
  },
  {
    icon: '🚐',
    title: 'Vehicle Transport',
    desc: 'Professional vehicle transport with a fleet of 6 EVs, 30 large vans, and 70 smaller vans.',
  },
  {
    icon: '📍',
    title: 'Real-Time Tracking',
    desc: 'Live GPS tracking on every delivery. You always know exactly where your package is.',
  },
  {
    icon: '🔒',
    title: 'Secure Shipping',
    desc: 'Careful package handling with secure protocols to ensure every item arrives in perfect condition.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Fleet',
    desc: '6 electric vehicles in our fleet, reducing our carbon footprint on urban delivery routes.',
  },
  {
    icon: '🕐',
    title: '7-Day Support',
    desc: 'Our customer support team is available Monday to Sunday, 8AM to 8PM, for any delivery questions.',
  },
];

const provinces = [
  {
    name: 'Ontario',
    slug: 'ontario',
    flag: '🏙️',
    desc: '150+ cities covered across Ontario from our Stoney Creek headquarters.',
    cities: ['Toronto', 'Brampton', 'Hamilton', 'Mississauga', 'London'],
  },
  {
    name: 'Nova Scotia',
    slug: 'nova-scotia',
    flag: '🌊',
    desc: 'Full coverage across Nova Scotia from Halifax to the South Shore.',
    cities: ['Halifax', 'Dartmouth', 'Sydney', 'Truro', 'New Glasgow'],
  },
  {
    name: 'New Brunswick',
    slug: 'new-brunswick',
    flag: '🌲',
    desc: "Serving New Brunswick's major cities and rural communities with equal care.",
    cities: ['Moncton', 'Fredericton', 'Saint John', 'Dieppe', 'Riverview'],
  },
];

const steps = [
  {
    num: '1',
    title: 'Receive Package',
    desc: 'We collect packages from the Dragonfly fulfilment centre and sort them for efficient delivery.',
  },
  {
    num: '2',
    title: 'Shipped Package',
    desc: 'Packages are loaded onto our fleet with optimized routing for the fastest possible delivery.',
  },
  {
    num: '3',
    title: 'Deliver Package',
    desc: 'Secure doorstep delivery with photo confirmation and real-time tracking notification.',
  },
];

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Brampton, ON',
    text: "Always on time and super professional. The driver was friendly and left a photo confirmation. Best Dragonfly delivery experience I've had!",
    rating: 5,
  },
  {
    name: 'William K.',
    location: 'Halifax, NS',
    text: "I've been receiving Dragonfly deliveries from Jaatram for 6 months and they've never missed a delivery. Highly recommend.",
    rating: 5,
  },
  {
    name: 'Priya T.',
    location: 'Moncton, NB',
    text: "Excellent service. My package arrived before the estimated time and the driver called ahead. That's rare these days!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Certified Dragonfly DSP Since 2022
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                Best Solution For{' '}
                <span className="text-gold">Modern Logistics</span>{' '}
                Transport
              </h1>
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-lg">
                Reliable Dragonfly last-mile delivery across Ontario, Nova Scotia, and New Brunswick. 140+ professionals. 4.9-star rating. 6,000+ deliveries.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="btn-primary">
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/about" className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-6 py-3 rounded-xl transition-colors">
                  Learn More
                </Link>
              </div>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-4 mt-8">
                {['Dragonfly DSP Partner', '4.9★ Google Rating', '7-Day Delivery', '3 Provinces'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-white/60 text-xs">
                    <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quote form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-lg font-bold text-navy mb-1">Request a Shipping Quote</h2>
              <p className="text-sm text-gray-500 mb-5">Free quote. Response within 24 hours.</p>
              <QuoteForm compact />
            </div>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -right-10 top-10 w-48 h-48 rounded-full bg-gold/10 pointer-events-none" />
      </section>

      {/* PARTNERS */}
      <section className="bg-white border-b border-mid-blue/30 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Official Partner Of</p>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            <div className="flex items-center gap-3 bg-light-blue px-6 py-3 rounded-2xl">
              <div className="w-8 h-8 bg-[#FF9900] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-base">a</span>
              </div>
              <div className="text-left">
                <p className="text-navy font-black text-base leading-none">Dragonfly</p>
                <p className="text-xs text-gray-400 mt-0.5">IDC Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-light-blue px-6 py-3 rounded-2xl">
              <div className="w-8 h-8 bg-[#00C48C] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-base">D</span>
              </div>
              <div className="text-left">
                <p className="text-navy font-black text-base leading-none">Dragonfly</p>
                <p className="text-xs text-gray-400 mt-0.5">Delivery Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsBar />

      {/* TEAM PHOTO BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden h-80 sm:h-96 [box-shadow:0_8px_40px_0_rgba(26,43,94,0.16)]">
            <Image
              src="/images/team-outdoor.jpg"
              alt="The Jaatram Logistics delivery team"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-14">
              <div className="max-w-lg">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">140+ Professionals</p>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                  Real people. Real deliveries. Real results.
                </h2>
                <p className="text-white/70 text-sm sm:text-base mb-5">
                  From Stoney Creek to Halifax, our team shows up every morning ready to deliver for you.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity">
                  Meet the Team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
              Efficient <span className="text-gold">Cargo Solution</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Streamlined cargo flow ensuring swift, secure transport tailored to your needs. Experience efficiency with our dedicated logistics services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)] hover:[box-shadow:0_6px_28px_0_rgba(26,43,94,0.14)] transition-shadow group hover:-translate-y-1 duration-200">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY AREAS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
              Shipping Solution Across{' '}
              <span className="text-gold">3 Provinces</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Ontario, Nova Scotia, and New Brunswick. We serve over 200 cities and communities with the same professional standard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {provinces.map((p) => (
              <div key={p.slug} className="bg-white rounded-2xl [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)] overflow-hidden group hover:[box-shadow:0_6px_28px_0_rgba(26,43,94,0.14)] transition-shadow">
                <div className="bg-navy p-5">
                  <div className="text-3xl mb-2">{p.flag}</div>
                  <h3 className="text-white font-bold text-xl">{p.name}</h3>
                  <p className="text-white/60 text-sm mt-1">{p.desc}</p>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.cities.map((city) => (
                      <Link
                        key={city}
                        href={`/delivery/${p.slug}/${city.toLowerCase().replace(/ /g, '-')}`}
                        className="text-xs bg-light-blue hover:bg-gold/20 text-navy px-2.5 py-1 rounded-full transition-colors font-medium"
                      >
                        {city}
                      </Link>
                    ))}
                    <span className="text-xs text-gray-400 px-2 py-1">+ more</span>
                  </div>
                  <Link
                    href={`/delivery/${p.slug}`}
                    className="text-sm font-bold text-gold hover:text-navy flex items-center gap-1 transition-colors"
                  >
                    View all {p.name} cities
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
              We Always Follow the Best{' '}
              <span className="text-gold">Process</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Safe, efficient, and timely deliveries with real-time tracking, secure handling, and dedicated customer support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-mid-blue/40" />
                )}
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-navy font-black text-2xl mx-auto mb-4 relative z-10">
                  {step.num}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
              Happy <span className="text-gold">Customer Reviews</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Read what our verified customers across Ontario, Nova Scotia, and New Brunswick say about us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)]">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-3 border-t border-mid-blue/30">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-gold font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-navy">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
