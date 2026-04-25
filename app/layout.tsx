import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jaatramlogistics.com'),
  title: {
    default: 'Jaatram Logistics | Amazon Delivery in Ontario, Nova Scotia & New Brunswick',
    template: '%s | Jaatram Logistics',
  },
  description:
    'Jaatram Logistics is a certified Amazon Independent Delivery Contractor serving Ontario, Nova Scotia, and New Brunswick since 2022. 140+ team members, 4.9-star rating, 6,000+ deliveries.',
  keywords: [
    'Amazon delivery Canada',
    'last mile delivery Ontario',
    'Amazon IDC Ontario',
    'logistics company Ontario',
    'package delivery Nova Scotia',
    'courier New Brunswick',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Jaatram Logistics',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Jaatram Logistics' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
