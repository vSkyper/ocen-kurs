import { ReviewTab } from './components';
import ReviewsListType from './interface';

export default function ReviewsList(props: ReviewsListType) {
  const { courseDetails } = props;

  return (
    <div>
      <div className='text-xl font-bold'>
        Opinie ({courseDetails?.reviews.length}){' '}
      </div>
      {courseDetails?.reviews
        .slice(0)
        .reverse()
        .map((rev) => <ReviewTab key={rev.revId} rev={rev} />)}
    </div>
  );
}
