import type { Metadata } from 'next';
import Image from 'next/image';
import CTABanner from '@/components/CTABanner';
import StatsBar from '@/components/StatsBar';

export const metadata: Metadata = {
  title: 'About Jaatram Logistics | Certified Dragonfly Delivery Partner Since 2022',
  description:
    "Learn about Jaatram Logistics, a certified Dragonfly Delivery Service Provider founded in 2022. 140+ delivery professionals, 106-vehicle fleet with BrightDrop EVs, 4.9-star Google rating across Ontario, Nova Scotia, and New Brunswick.'s most trusted Dragonfly DSP operators. 140 professionals, 9 stations, 3 provinces.",
};

const milestones = [
  { year: '2019', title: 'Arrived in Canada', desc: 'Our CEO arrived in Canada as a student, ready to build a new life.' },
  { year: '2020', title: 'First Delivery Driver Job', desc: 'Started part-time as a delivery driver, quickly gaining hands-on logistics experience and earning a promotion to supervisor.' },
  { year: '2022', title: 'Founded Jaatram Logistics', desc: 'In July 2022, registered Jaatram Logistics and secured the first Dragonfly station contract in Brantford, Ontario.' },
  { year: '2023', title: 'IDC Status Achieved', desc: 'Became a certified Dragonfly Delivery Service Provider (DSP) and expanded to 9+ stations across Ontario.' },
  { year: '2024+', title: 'Atlantic Expansion', desc: 'Expanded service to Nova Scotia and New Brunswick. Now a 140-person team with 106 vehicles serving 3 provinces.' },
];

const values = [
  { icon: '🛡️', title: 'Safety First', desc: "Every driver is trained to Dragonfly's safety standards. Every package is handled with care." },
  { icon: '⏱️', title: 'Reliability', desc: 'A 4.9-star Google rating is not an accident. We show up on time, every time.' },
  { icon: '📡', title: 'Transparency', desc: 'Real-time tracking means you always know where your package is.' },
  { icon: '🌿', title: 'Eco-Friendly', desc: '6 electric vehicles in our fleet and a commitment to reducing our environmental footprint.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with background photo */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team-indoor.jpg"
            alt="Jaatram Logistics team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            Founded in Ontario, 2022
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About <span className="text-gold">Jaatram Logistics</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From a student with a vision to one of Ontario&apos;s most trusted Dragonfly DSP operators. This is our story.
          </p>
        </div>
      </section>

      {/* CEO Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gold/10 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Our Founding Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy mb-5">
                About Our <span className="text-gold">CEO and</span> Jaatram Logistics
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  In 2019, our CEO arrived in Canada as a student. By 2020, he began working part-time as a delivery driver, quickly gaining valuable knowledge and experience in the field. His dedication and hard work led to a promotion to supervisor, where he continued to expand his expertise.
                </p>
                <p>
                  In July 2022, he took a significant step forward by registering Jaatram Logistics. Soon after, he secured the first contract at the Brantford Dragonfly station. Today we are an Independent Delivery Contractor (IDC) serving nine additional stations across Ontario.
                </p>
                <p>
                  Under his leadership, our team has grown to 140 dedicated professionals, with 12 experienced supervisors managing operations at each station. We own 6 EVs, 30 large vans, and 70 smaller vans, committed to providing exceptional delivery services.
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                {[
                  'Efficient logistics for optimized routes',
                  'Secure and careful package handling',
                  'Real-time tracking for transparency',
                  'Eco-friendly delivery options available',
                  '24/7 dedicated customer support service',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-mid-blue/40" />
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className="pl-12 relative">
                    <div className="absolute left-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-navy font-black text-[10px]">{m.year.slice(-2)}</span>
                    </div>
                    <div className="bg-light-blue rounded-xl p-4">
                      <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">{m.year}</p>
                      <h3 className="font-bold text-navy mb-1">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Photo Banner */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl overflow-hidden h-72 sm:h-96 [box-shadow:0_8px_40px_0_rgba(26,43,94,0.18)]">
            <Image
              src="/images/team-ev-vans.jpg"
              alt="Jaatram Logistics founder with BrightDrop electric delivery vans"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-1">Our Green Fleet</p>
                <p className="text-white text-2xl font-black max-w-sm leading-tight">
                  BrightDrop Electric Vans powering zero-emission delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
              Our <span className="text-gold">Partners</span>
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              We are proud to operate as a certified delivery partner for two of North America&apos;s leading delivery networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dragonfly */}
            <div className="bg-light-blue rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-[#FF9900] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-2xl">a</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy">Dragonfly DSP</h3>
                  <span className="text-xs bg-gold/20 text-gold font-bold px-2.5 py-1 rounded-full">Certified Partner</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                As a certified Dragonfly Delivery Service Provider, we handle last-mile delivery across nine Dragonfly stations in Ontario, Nova Scotia, and New Brunswick. Every delivery follows Dragonfly's strict quality and safety standards, which is why we maintain a 4.9-star rating across thousands of deliveries.
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { val: '9+', label: 'Stations' },
                  { val: '140+', label: 'Team Members' },
                  { val: '4.9★', label: 'Rating' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-3">
                    <div className="text-xl font-black text-gold">{s.val}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dragonfly */}
            <div className="bg-navy rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-[#00C48C] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-2xl">D</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Dragonfly</h3>
                  <span className="text-xs bg-white/10 text-white/70 font-bold px-2.5 py-1 rounded-full">Delivery Partner</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Our Dragonfly fleet, branded on Toyota Sienna vans and BrightDrop electric vehicles, handles deliveries with the same professionalism and reliability our customers expect across every route we serve.
              </p>
              <div className="relative rounded-2xl overflow-hidden h-36">
                <Image
                  src="/images/dragonfly-fleet.jpg"
                  alt="Jaatram Logistics Dragonfly fleet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-sm font-bold">Our Dragonfly Fleet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-navy mb-3">
              Meet the <span className="text-gold">Team</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              140 professionals who show up every day to make deliveries happen across three provinces.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { src: '/images/team-warehouse.jpg', alt: 'Jaatram Logistics team at the Dragonfly station', label: 'Dragonfly Station Team' },
              { src: '/images/team-outdoor.jpg', alt: 'Jaatram Logistics team outdoors', label: 'Ready for the Route' },
              { src: '/images/team-indoor.jpg', alt: 'Jaatram Logistics team in company polos', label: 'Our Growing Family' },
            ].map((photo) => (
              <div key={photo.label} className="relative h-64 rounded-2xl overflow-hidden [box-shadow:0_4px_20px_0_rgba(26,43,94,0.12)]">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">Our <span className="text-gold">Fleet</span></h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">106 vehicles ensuring your packages are always moving.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { count: '6', label: 'Electric Vehicles (EVs)', icon: '⚡', desc: 'Zero-emission urban delivery. Our green fleet for city centres.' },
              { count: '30', label: 'Large Vans', icon: '🚐', desc: 'High-capacity vans for bulk Dragonfly station runs and large parcel routes.' },
              { count: '70', label: 'Smaller Vans', icon: '🚚', desc: 'Agile delivery vans for residential neighbourhoods and tight urban routes.' },
            ].map((item) => (
              <div key={item.label} className="bg-light-blue rounded-2xl [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)] p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-5xl font-black text-gold mb-2">{item.count}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team culture */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/team-gifts.jpg" alt="Jaatram team culture gifts" fill className="object-cover opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-4">
                We Take Care of <span className="text-gold">Our People</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-5">
                Every quarter, we recognise team members who go the extra mile. From gift sets to personal notes, we want every person on our team to know their work matters.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                We started with a small group of drivers in Brantford. Today we have 140 people across three provinces. That growth only happens when people feel valued, supported, and proud of where they work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h3 className="font-bold text-white text-base mb-1">{v.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal links section */}
      <section className="py-12 bg-light-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-navy text-center mb-8">Explore Jaatram Logistics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Our Services', sub: 'Last-mile, tracking, fleet', href: '/services' },
              { label: 'Delivery Areas', sub: 'Windsor, Halifax, Saint John & more', href: '/delivery' },
              { label: 'Careers', sub: 'Join our 140-person team', href: '/careers' },
              { label: 'Get a Quote', sub: 'Free quote in 24 hours', href: '/quote' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="bg-white rounded-2xl p-4 hover:shadow-md transition-shadow group">
                <p className="font-bold text-navy group-hover:text-gold transition-colors text-sm">{l.label}</p>
                <p className="text-xs text-gray-400 mt-1">{l.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
