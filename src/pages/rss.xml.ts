import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title:       'Jean Marcus — Ecrits',
    description: "Notes sur le financement et le deploiement de l'IA en Europe.",
    site:        context.site!,
    items: sorted.map(post => ({
      title:       post.data.title,
      pubDate:     post.data.pubDate,
      description: post.data.description,
      link:        `ecrits/${post.id}/`,
    })),
  });
}
