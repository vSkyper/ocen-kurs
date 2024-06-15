import { ReviewList, CourseDescription } from './components';

export default function CourseDetails() {
  return (
    <div className='m-16'>
      <CourseDescription />
      <ReviewList />
    </div>
  );
}
