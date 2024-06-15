import { courseSchema } from 'schemas/course.schema';
import { z } from 'zod';

export type CourseType = z.infer<typeof courseSchema>;
