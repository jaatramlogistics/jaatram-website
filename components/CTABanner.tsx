import Link from 'next/link';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Get Your Free Shipping Quote Now",
  subtitle = "Our team is available Monday to Sunday, 8AM–8PM. Call, email, or fill out our form.",
}: CTABannerProps) {
  return (
    <section className="bg-hero-gradient py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          Available 7 Days a Week
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
        <p className="text-white/70 text-sm sm:text-base mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/quote"
            className="bg-gold hover:bg-gold-light text-navy font-bold px-7 py-3.5 rounded-xl transition-colors"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+14377270000"
            className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-7 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +1 (437) 727 0000
          </a>
        </div>
      </div>
    </section>
  );
}
