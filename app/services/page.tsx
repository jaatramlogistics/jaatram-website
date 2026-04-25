import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Jaatram Logistics offers last-mile delivery, vehicle transport, real-time tracking, secure package handling, and eco-friendly delivery across Ontario, Nova Scotia, and New Brunswick.',
};

const services = [
  {
    icon: '📦',
    title: 'Last-Mile Dragonfly Delivery',
    desc: 'As a certified Dragonfly DSP, we handle the final leg of delivery from the Dragonfly fulfilment centre straight to your door. Covering residential and commercial addresses across 3 provinces.',
    features: ['Same-day & next-day delivery', 'Photo confirmation on delivery', 'Delivery to apartments, condos, houses', 'Commercial address delivery'],
  },
  {
    icon: '🚐',
    title: 'Vehicle & Fleet Transport',
    desc: 'Our 106-vehicle fleet is available for dedicated transport needs. Whether you need large parcel movement, pallet delivery, or fleet logistics, we have the capacity.',
    features: ['6 EV, 30 large vans, 70 smaller vans', 'Pallet and bulk freight handling', 'Scheduled route coverage', 'Multi-city transport'],
  },
  {
    icon: '📍',
    title: 'Real-Time Package Tracking',
    desc: 'Every delivery is tracked in real-time using Dragonfly's logistics platform. Customers receive live notifications and can monitor driver location throughout delivery.',
    features: ['Live GPS tracking', 'SMS & email notifications', 'Driver ETA updates', 'Delivery confirmation photos'],
  },
  {
    icon: '🔒',
    title: 'Secure Package Handling',
    desc: 'Our team follows strict package handling protocols for fragile, high-value, and sensitive items. Every package is treated as if it were our own.',
    features: ['Trained handlers for fragile items', 'Secure vehicle loading procedures', 'Tamper-evident seals respected', 'Zero-damage protocols'],
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly EV Delivery',
    desc: 'Jaatram Logistics operates 6 electric vehicles prioritized for urban core delivery routes in Ontario. Reducing emissions without compromising delivery speed.',
    features: ['Zero-emission urban routes', 'Reduced carbon footprint', 'EV-first dispatch for city centres', 'Commitment to green logistics'],
  },
  {
    icon: '🕐',
    title: '24/7 Customer Support',
    desc: 'Our support team is available Monday to Sunday, 8AM–8PM. Call, email, or fill out our form and we will respond to all inquiries within the same business day.',
    features: ['Monday–Sunday availability', '8AM–8PM operating hours', 'Phone, email, and web contact', 'Same-day response commitment'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-white/70 text-lg">
            Professional logistics services for Ontario, Nova Scotia, and New Brunswick, backed by a Dragonfly-certified team.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card group hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">{s.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/quote" className="btn-primary">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
