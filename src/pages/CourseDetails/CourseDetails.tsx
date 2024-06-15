import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReviewList, CourseDescription } from './components';

export default function CourseDetails() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='m-16 mx-auto w-[1048px]'>
      <CourseDescription />
      <ReviewList />
    </div>
  );
}
