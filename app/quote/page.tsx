import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Free Shipping Quote',
  description:
    'Request a free logistics shipping quote from Jaatram Logistics. Serving Ontario, Nova Scotia, and New Brunswick. Response within 24 hours.',
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-hero-gradient py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get a <span className="text-gold">Free Quote</span>
          </h1>
          <p className="text-white/70 text-lg mb-2">
            Fill in the form below and we&rsquo;ll get back to you within 24 hours with the best rate for your shipment.
          </p>
          <p className="text-gold font-semibold text-sm">
            Or call us directly: <a href="tel:+14377270000" className="underline">+1 (437) 727 0000</a>
          </p>
        </div>
      </section>

      <section className="py-16 bg-light-blue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-mid-blue/30">
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-xl">📦</div>
              <div>
                <h2 className="font-bold text-navy">Shipping Quote Request</h2>
                <p className="text-xs text-gray-400">Free · No obligation · Reply within 24h</p>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
