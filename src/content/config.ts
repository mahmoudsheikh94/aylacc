import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Commercial Buildings',
      'Residential Buildings',
      'Fit-outs',
      'Refurbishments',
      'Loft Conversions',
      'Extensions',
    ]),
    location: z.string(),
    completionDate: z.string(),
    featured: z.boolean().default(false),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    client: z.string().optional(),
    duration: z.string().optional(),
    value: z.string().optional(),
  }),
});

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
  faqs,
};
