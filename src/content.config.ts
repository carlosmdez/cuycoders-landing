import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['es', 'en']),
    translationKey: z.string(),
    published: z.coerce.date(),
    category: z.string(),
    readTime: z.number(),
  }),
});

export const collections = { blog };
