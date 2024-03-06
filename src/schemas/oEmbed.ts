import { z } from 'zod';

export const oEmbedSchema = z.object({
  author_name: z.string(),
  html: z.string(),
  provider_name: z.string(),
  provider_url: z.string(),
  title: z.string(),
  type: z.string(),
  height: z.number(),
});
