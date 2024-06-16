import { useCallback, useEffect, useState } from 'react';
import { getCourseDetails } from 'store';
import { useParams, useLocation } from 'react-router-dom';
import { CourseDetailsType } from 'types/CourseDetailsType';
import { ReviewsList, CourseDescription } from './components';
import ReviewCreation from './components/ReviewCreation';

export default function CourseDetails() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [courseDetails, setCourseDetails] =
    useState<CourseDetailsType | null>();
  const { courseId } = useParams<{ courseId: string }>();
  const downloadCourseDetails = useCallback(async () => {
    if (!courseId) {
      setCourseDetails(null);
      return;
    }
    const downloadedCourseDetails = await getCourseDetails(courseId);
    setCourseDetails(downloadedCourseDetails || null);
  }, [courseId]);

  useEffect(() => {
    downloadCourseDetails();
  }, [downloadCourseDetails]);

  return (
    <div className='m-16 mx-auto w-[1048px]'>
      <CourseDescription />
      <ReviewCreation />
      <ReviewsList courseDetails={courseDetails} />
    </div>
  );
}
