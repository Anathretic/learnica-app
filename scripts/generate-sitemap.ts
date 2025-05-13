import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://learnica.pl/' });
const writeStream = createWriteStream('public/sitemap.xml');

const urls = [
	{ url: '/', changefreq: 'weekly', priority: 1.0, lastmod: '2025-05-01' },
	{ url: '/jezyk-polski', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-01' },
	{ url: '/jezyk-angielski', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-01' },
	{ url: '/matematyka', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-01' },
	{ url: '/tlumaczenia', changefreq: 'monthly', priority: 0.7, lastmod: '2025-05-01' },
	{ url: '/o-nas', changefreq: 'yearly', priority: 0.6, lastmod: '2025-05-01' },
	{ url: '/kariera', changefreq: 'monthly', priority: 0.7, lastmod: '2025-05-01' },
	{ url: '/polityka-prywatnosci', changefreq: 'yearly', priority: 0.3, lastmod: '2025-05-01' },
	{ url: '/logowanie', changefreq: 'never', priority: 0.2 },
	{ url: '/rejestracja', changefreq: 'never', priority: 0.2 },
	{ url: '/odzyskiwanie-hasla', changefreq: 'never', priority: 0.1 },
];

sitemap.pipe(writeStream);
urls.forEach(urlEntry => sitemap.write(urlEntry));
sitemap.end();

streamToPromise(sitemap)
	.then(() => {
		console.log('Sitemap generated!');
	})
	.catch(err => {
		console.error('An error occurred:', err);
	});
