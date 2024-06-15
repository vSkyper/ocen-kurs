import { ReviewList, CourseDescription } from './components';

export default function CourseDetails() {
  return (
    <div className='m-16 mx-auto w-[1048px]'>
      <CourseDescription />
      <ReviewList />
    </div>
  );
}
