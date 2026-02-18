import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const news = (await getCollection('news'))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Particle Bunni News',
    description: 'Latest news and updates from Particle Bunni',
    site: context.site,
    items: news.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate || post.data.date,
      description: post.data.description,
      link: `/news/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
