import { defineCollection, z } from 'astro:content';

const datedContentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  date: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().optional(),
  image: z.string().optional(),
  backgroundImage: z.string().optional(),
  foregroundImage: z.string().optional(),
  thumbnail: z.string().optional(),
  externalLink: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  templateKey: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  number: z.number().optional(),
  pagetype: z.array(z.string()).optional(),
});

const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  image: z.string().optional(),
  backgroundImage: z.string().optional(),
  foregroundImage: z.string().optional(),
  templateKey: z.string().optional(),
  draft: z.boolean().default(false),
});

const news = defineCollection({ type: 'content', schema: datedContentSchema });
const releases = defineCollection({ type: 'content', schema: datedContentSchema });
const pages = defineCollection({ type: 'content', schema: pageSchema });

export const collections = { news, releases, pages };
