/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://jaatramlogistics.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
    additionalSitemaps: [],
  },
  // City pages are high priority
  transform: async (config, path) => {
    if (path.includes('/delivery/') && path.split('/').length >= 4) {
      return { loc: path, changefreq: 'monthly', priority: 0.9 };
    }
    if (path === '/') {
      return { loc: path, changefreq: 'weekly', priority: 1.0 };
    }
    if (path.includes('/blog/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.8 };
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority };
  },
};
