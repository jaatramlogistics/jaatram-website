import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jaatram Logistics',
  description:
    'Read the Jaatram Logistics Privacy Policy to learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-hero-gradient py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-black text-white mb-3">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="text-white/60 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-legal">
          <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">1. Who We Are</h2>
              <p>
                Jaatram Logistics Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a Canadian logistics company headquartered at 332 Winona Road, Stoney Creek, Ontario, L8E6B5. We operate as a certified Amazon Independent Delivery Contractor serving Ontario, Nova Scotia, and New Brunswick.
              </p>
              <p className="mt-3">
                This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website at jaatramlogistics.com, contact us, or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">2. Information We Collect</h2>
              <p>We collect personal information you provide directly to us, which may include:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Your name, email address, and phone number</li>
                <li>Your company name and business address</li>
                <li>Pickup and delivery location details</li>
                <li>Package type, weight, and shipment information</li>
                <li>Any messages or inquiries you send through our contact or quote forms</li>
              </ul>
              <p className="mt-3">
                We also collect certain information automatically when you visit our website, including your IP address, browser type, referring URLs, and pages visited. This information is collected through standard web server logs and, if applicable, analytics tools.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your quote requests and inquiries</li>
                <li>Provide and improve our logistics and delivery services</li>
                <li>Send you operational communications related to your shipments</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Improve the performance and usability of our website</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">4. Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Amazon Canada, as required to fulfil delivery contracts and operations</li>
                <li>Our logistics partners, including Dragonfly, where relevant to your shipment</li>
                <li>Service providers who assist us in operating our website and business (such as email and analytics providers), under strict confidentiality agreements</li>
                <li>Law enforcement or regulatory authorities if required by applicable Canadian law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law. Quote requests and contact form submissions are typically retained for up to two years. You may request deletion of your personal information at any time by contacting us at the details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">6. Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our website uses HTTPS encryption for all data transmitted between your browser and our servers.
              </p>
              <p className="mt-3">
                No method of transmission or storage is completely secure. If you have reason to believe your information has been compromised, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">7. Your Rights</h2>
              <p>Under Canadian privacy law (PIPEDA and applicable provincial legislation), you have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal obligations)</li>
                <li>Withdraw consent to processing where consent is the legal basis</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:jaatramlogistics@gmail.com" className="text-gold hover:underline">
                  jaatramlogistics@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">8. Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of some parts of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to read the privacy policies of any website you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot; date at the top of this page. Continued use of our website after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">11. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy or our data practices, please reach out:</p>
              <div className="mt-3 bg-light-blue rounded-xl p-4 space-y-1">
                <p className="font-semibold text-navy">Jaatram Logistics Inc.</p>
                <p>332 Winona Road, Stoney Creek, ON L8E6B5</p>
                <p>
                  Email:{' '}
                  <a href="mailto:jaatramlogistics@gmail.com" className="text-gold hover:underline">
                    jaatramlogistics@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+14377270000" className="text-gold hover:underline">
                    +1 (437) 727 0000
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-mid-blue/20 flex gap-4 text-sm">
            <Link href="/terms" className="text-gold hover:underline font-medium">Terms and Conditions</Link>
            <Link href="/contact" className="text-gold hover:underline font-medium">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
