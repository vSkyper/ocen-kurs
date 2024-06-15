import { collection, getDocs } from 'firebase/firestore';
import { courseSchema } from 'schemas/course.schema';
import { db } from 'store';
import { CourseType } from 'types/CourseType';
import { z } from 'zod';

export const getCourses = async (): Promise<CourseType[]> => {
  try {
    const coursesCollectionRefs = collection(db, 'courses');
    const snapshot = await getDocs(coursesCollectionRefs);
    const courses = snapshot.docs.map((course) => course.data());
    return z.array(courseSchema).parse(courses);
  } catch (e) {
    throw e;
  }
};
