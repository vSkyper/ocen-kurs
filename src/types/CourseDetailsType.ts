import {
  courseReviewsSchema,
  courseDetailsSchema,
  courseDetailsFullSchema,
} from 'schemas/courseDetails.schema';
import { z } from 'zod';

export type CourseReviewsType = z.infer<typeof courseReviewsSchema>;
export type CourseDetailsType = z.infer<typeof courseDetailsSchema>;
export type CourseDetailsFullype = z.infer<typeof courseDetailsFullSchema>;
