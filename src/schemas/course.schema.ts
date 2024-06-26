import { z } from 'zod';

export const courseSchema = z.object({
  category: z.string(),
  description: z.string(),
  id: z.string(),
  level: z.number(),
  name: z.string(),
  organizer: z.string(),
  price: z.number(),
  rating: z.number(),
});
