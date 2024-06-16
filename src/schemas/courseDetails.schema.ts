import { z } from 'zod';
import { firestoreReferenceSchema } from './constants';
import { courseSchema } from './course.schema';

export const courseReviewsSchema = z.object({
  author: z.string(),
  revId: z.string(),
  rating: z.number(),
  review: z.string(),
});

export const courseDetailsSchema = z.object({
  course: firestoreReferenceSchema,
  reviews: z.array(courseReviewsSchema),
});

export const courseDetailsFullSchema = courseDetailsSchema.extend({
  course: z.array(courseSchema),
});
