import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  courseDetailsSchema,
  courseReviewsSchema,
} from 'schemas/courseDetails.schema';
import { db } from 'store';
import { CourseDetailsType, CourseReviewsType } from 'types/CourseDetailsType';

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

/**
 *
 * @param courseId <string> course id to add the review to
 * @param newReview <CourseDetailsType> review to add
 * @returns <number> created room id
 */
export const addReview = async (
  courseId: string,
  newReview: CourseReviewsType,
) => {
  // Validate the new review using the schema
  const parsedReview = courseReviewsSchema.safeParse(newReview);
  if (!parsedReview.success) {
    return;
  }

  try {
    const courseDetailsRef = doc(db, 'course_reviews', courseId);
    const revId = doc(collection(db, 'course_reviews')).id;
    newReview.revId = revId;

    // Update the reviews array using arrayUnion
    await updateDoc(courseDetailsRef, {
      reviews: arrayUnion(newReview),
    });
  } catch (e) {
    throw e;
  }
};
