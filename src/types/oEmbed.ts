import { z } from 'zod';
import { oEmbedSchema } from '../schemas/oEmbed';

export type OEmbedObject = z.infer<typeof oEmbedSchema>;
