import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0f1729] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.png"
                alt="Jaatram Logistics"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-lg">
                Jaatram <span className="text-gold">Logistics</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Certified Amazon Independent Delivery Contractor serving Ontario, Nova Scotia, and New Brunswick since 2022.
            </p>
            {/* CTA card */}
            <div className="bg-navy rounded-xl p-4 border border-white/10">
              <p className="text-sm font-bold mb-1">Get the best rate for your logistics shipping</p>
              <p className="text-xs text-white/60 mb-3">24/7 support · Up to 55% savings on major carriers</p>
              <Link
                href="/quote"
                className="block text-center bg-gold hover:bg-gold-light text-navy text-sm font-bold py-2 rounded-lg transition-colors"
              >
                Get Best Rates
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Delivery Areas', href: '/delivery' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Get a Quote', href: '/quote' },
                { label: 'Careers', href: '/careers' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-1.5">
                    <span className="text-gold text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Areas */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gold mb-4">Delivery Areas</h3>
            <ul className="space-y-2">
              {[
                { label: 'Ontario', href: '/delivery/ontario' },
                { label: 'Nova Scotia', href: '/delivery/nova-scotia' },
                { label: 'New Brunswick', href: '/delivery/new-brunswick' },
                { label: 'Toronto', href: '/delivery/ontario/toronto' },
                { label: 'Hamilton', href: '/delivery/ontario/hamilton' },
                { label: 'Brampton', href: '/delivery/ontario/brampton' },
                { label: 'Halifax', href: '/delivery/nova-scotia/halifax' },
                { label: 'Moncton', href: '/delivery/new-brunswick/moncton' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-1.5">
                    <span className="text-gold text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:jaatramlogistics@gmail.com" className="text-sm text-white/80 hover:text-gold transition-colors">
                    jaatramlogistics@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">24/7 Support</p>
                  <a href="tel:+14377270000" className="text-sm text-white/80 hover:text-gold transition-colors">
                    +1 (437) 727 0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Headquarters</p>
                  <p className="text-sm text-white/80">332 Winona Road<br />Stoney Creek, ON L8E6B5</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Jaatram Logistics Inc. All rights reserved.
            </p>
            <span className="hidden sm:block text-white/20 text-xs">·</span>
            <p className="text-white/30 text-xs">
              Developed &amp; Marketed by{' '}
              <a
                href="https://10xprofits.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors"
              >
                10xprofits.co
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/40 hover:text-gold text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-gold text-xs transition-colors">Terms &amp; Conditions</Link>
            <Link href="/sitemap.xml" className="text-white/40 hover:text-gold text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
