import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Jaatram Logistics',
  description:
    'Read the Jaatram Logistics Terms and Conditions governing use of our website and logistics services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-hero-gradient py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-black text-white mb-3">
            Terms and <span className="text-gold">Conditions</span>
          </h1>
          <p className="text-white/60 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Jaatram Logistics website at jaatramlogistics.com, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
              <p className="mt-3">
                These terms apply to all visitors, users, and customers of Jaatram Logistics Inc., a company registered in Ontario, Canada, with its principal office at 332 Winona Road, Stoney Creek, ON L8E6B5.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">2. Our Services</h2>
              <p>
                Jaatram Logistics provides last-mile delivery services as a certified Amazon Independent Delivery Contractor (IDC) operating across Ontario, Nova Scotia, and New Brunswick. We also provide delivery services in partnership with Dragonfly and other logistics clients.
              </p>
              <p className="mt-3">
                Our website allows users to request delivery quotes, contact our team, and learn about our services. Submission of a quote request does not constitute a binding contract. A contract is only formed upon written agreement between Jaatram Logistics and the client.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">3. Use of the Website</h2>
              <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. Specifically, you agree not to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Submit false, misleading, or fraudulent information</li>
                <li>Attempt to gain unauthorized access to any part of our website or systems</li>
                <li>Use automated tools to scrape, crawl, or otherwise extract data from the website</li>
                <li>Engage in any conduct that disrupts or interferes with the operation of the website</li>
                <li>Reproduce or distribute website content without our written permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">4. Quote Requests</h2>
              <p>
                When you submit a quote request through our website, you are providing information for us to assess whether we can provide the requested service and at what price. Quote requests are non-binding. Jaatram Logistics reserves the right to decline any request at its discretion.
              </p>
              <p className="mt-3">
                We will respond to quote requests within 24 business hours. All quotes are valid for 14 days from the date of issue unless otherwise specified in writing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">5. Liability Limitations</h2>
              <p>
                To the maximum extent permitted by applicable Canadian law, Jaatram Logistics is not liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.
              </p>
              <p className="mt-3">
                Our liability for any claim arising from the delivery of goods is limited to the lesser of the declared value of the shipment or the applicable liability limit under our service agreement. We recommend that clients obtain appropriate cargo insurance for high-value shipments.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Jaatram Logistics Inc. or its content providers and is protected by Canadian copyright law.
              </p>
              <p className="mt-3">
                You may view and print content from this website for your personal, non-commercial use only. Any other use, including reproduction, modification, distribution, or republication, requires our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">7. Third-Party Services</h2>
              <p>
                Our services operate in partnership with Amazon Canada, Dragonfly, and other logistics networks. The terms and conditions of those partnerships may also apply to deliveries handled through those networks. Jaatram Logistics is not responsible for the terms, policies, or actions of third-party partners.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">8. Privacy</h2>
              <p>
                Your use of our website is also governed by our{' '}
                <Link href="/privacy-policy" className="text-gold hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms and Conditions by reference.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">9. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Ontario.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">10. Changes to These Terms</h2>
              <p>
                We reserve the right to update or modify these Terms and Conditions at any time. Changes will take effect immediately upon posting to the website. Continued use of the website after changes are posted constitutes your acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">11. Contact</h2>
              <p>If you have questions about these Terms and Conditions, please contact us:</p>
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
            <Link href="/privacy-policy" className="text-gold hover:underline font-medium">Privacy Policy</Link>
            <Link href="/contact" className="text-gold hover:underline font-medium">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
