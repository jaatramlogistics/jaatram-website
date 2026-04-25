import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import CTABanner from '@/components/CTABanner';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Jaatram Logistics Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Split content into paragraphs/sections for rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={i} className="text-2xl font-black text-navy mt-10 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={i} className="font-bold text-navy mt-5 mb-2">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      }
      if (line.trim() === '') return null;
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-white/60 hover:text-gold text-sm transition-colors">
              Blog
            </Link>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-gold text-sm font-medium">{post.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 mb-0">
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/30" />
        </div>
      </div>

      {/* Article body */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <article className="lg:col-span-2 prose-custom">
              <p className="text-lg text-gray-500 leading-relaxed mb-8 font-medium border-l-4 border-gold pl-4">
                {post.excerpt}
              </p>
              {renderContent(post.content)}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <div className="bg-navy rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Need a Delivery Quote?</h3>
                  <p className="text-white/60 text-sm mb-4">
                    We serve Ontario, Nova Scotia, and New Brunswick. Get a free quote today.
                  </p>
                  <Link
                    href="/quote"
                    className="block text-center bg-gold text-navy font-bold py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href="tel:+14377270000"
                    className="block text-center text-white/60 hover:text-gold text-sm mt-3 transition-colors"
                  >
                    +1 (437) 727 0000
                  </a>
                </div>

                {/* Other posts */}
                {otherPosts.length > 0 && (
                  <div>
                    <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">More Articles</h3>
                    <div className="space-y-4">
                      {otherPosts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="block group"
                        >
                          <div className="relative w-full h-28 rounded-xl overflow-hidden mb-2">
                            <Image
                              src={p.featuredImage}
                              alt={p.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-navy/20" />
                          </div>
                          <p className="text-sm font-semibold text-navy group-hover:text-gold transition-colors leading-snug">
                            {p.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{p.date}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
