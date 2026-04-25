import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Logistics Blog | Dragonfly Delivery Insights & Guides | Jaatram Logistics',
  description:
    "Read the Jaatram Logistics blog for expert insights on Dragonfly last-mile delivery, electric vehicle logistics, careers in delivery, and how our DSP operations work across three Canadian provinces.' blog for insights on Dragonfly last-mile delivery, logistics trends, and shipping guides for Ontario, Nova Scotia, and New Brunswick.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="bg-hero-gradient py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Jaatram <span className="text-gold">Blog</span>
          </h1>
          <p className="text-white/70 text-lg">
            Insights on Dragonfly delivery, logistics trends, and what it takes to move packages across three provinces.
          </p>
        </div>
      </section>

      <section className="py-14 bg-light-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)] hover:[box-shadow:0_8px_32px_0_rgba(26,43,94,0.14)] transition-shadow mb-10"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[240px] bg-navy">
                <Image
                  src={featured.featuredImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/30" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2">
                  {featured.category}
                </span>
                <h2 className="text-2xl font-black text-navy group-hover:text-gold transition-colors mb-3 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="mt-4 text-gold font-bold text-sm group-hover:underline">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)] hover:[box-shadow:0_8px_32px_0_rgba(26,43,94,0.14)] transition-shadow"
              >
                <div className="relative h-48 bg-navy">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/20" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-navy text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-navy group-hover:text-gold transition-colors text-base leading-tight mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
