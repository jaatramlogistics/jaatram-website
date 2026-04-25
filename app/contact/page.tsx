import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Jaatram Logistics | Dragonfly Delivery Partner',
  description:
    'Contact Jaatram Logistics at +1 (437) 727 0000 or jaatramlogistics@gmail.com. Headquartered in Stoney Creek, Ontario. Available Monday to Sunday, 8AM to 8PM.',
};

const contactCards = [
  {
    icon: (
      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Our Location',
    value: '332 Winona Road, Stoney Creek, ON, L8E6B5',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Working Hours',
    value: 'Mon–Sun: 8AM–8PM',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    value: '+1 (437) 727 0000',
    href: 'tel:+14377270000',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Address',
    value: 'jaatramlogistics@gmail.com',
    href: 'mailto:jaatramlogistics@gmail.com',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-white/70 text-lg">
            We&rsquo;re here to assist you with any inquiries regarding our delivery services.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-light-blue py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)] p-5">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{card.title}</p>
                {card.href ? (
                  <a href={card.href} className="font-semibold text-navy hover:text-gold transition-colors text-sm">
                    {card.value}
                  </a>
                ) : (
                  <p className="font-semibold text-navy text-sm">{card.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + quote */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-navy mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">
                Whether you have questions, feedback, or need support Reach out via the form or call us directly.
              </p>
              <div className="bg-navy rounded-2xl p-5 mb-6">
                <p className="text-gold text-sm font-bold mb-1">Available 7 Days a Week</p>
                <p className="text-white/70 text-sm">
                  &ldquo;We&rsquo;re here to assist with any inquiries about our delivery services. We look forward to hearing from you!&rdquo;
                </p>
              </div>
              <div className="space-y-3">
                <a href="tel:+14377270000" className="flex items-center gap-3 p-3 bg-light-blue rounded-xl hover:bg-gold/10 transition-colors group">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Call Us Now</p>
                    <p className="font-bold text-navy group-hover:text-gold transition-colors">+1 (437) 727 0000</p>
                  </div>
                </a>
                <a href="mailto:jaatramlogistics@gmail.com" className="flex items-center gap-3 p-3 bg-light-blue rounded-xl hover:bg-gold/10 transition-colors group">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Email Us</p>
                    <p className="font-bold text-navy group-hover:text-gold transition-colors">jaatramlogistics@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-light-blue rounded-2xl p-6">
              <h3 className="font-bold text-navy text-lg mb-4">Request a Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
