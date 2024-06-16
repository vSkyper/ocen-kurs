import {
  courseDetailsSchema,
  courseDetailsFullSchema,
} from 'schemas/courseDetails.schema';
import { z } from 'zod';

export type CourseDetailsType = z.infer<typeof courseDetailsSchema>;
export type CourseDetailsFullype = z.infer<typeof courseDetailsFullSchema>;
