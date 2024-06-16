import { doc, getDoc } from 'firebase/firestore';
import { courseDetailsSchema } from 'schemas/courseDetails.schema';
import { db } from 'store';
import { CourseDetailsType } from 'types/CourseDetailsType';

export const getCourseDetails = async (
  courseId: string,
): Promise<CourseDetailsType | null> => {
  try {
    const coursesReviewsRef = doc(db, 'course_reviews', courseId);
    const snapshot = await getDoc(coursesReviewsRef);
    if (!snapshot.exists()) return null;
    return courseDetailsSchema.parse(snapshot.data());
  } catch (e) {
    throw e;
  }
};
