import { ReviewTab } from './components';

export default function ReviewList() {
  const revs = [
    {
      revId: 1,
      author: 'Artur Kowalski',
      review: 'Nice course, I learned a lot!',
      rating: 4,
    },
    {
      revId: 2,
      author: 'Grzegorz Florczak',
      review: 'I did not like it.',
      rating: 2,
    },
    {
      revId: 3,
      author: 'Jimmy',
      review: 'Great course!',
      rating: 5,
    },
  ];
  return (
    <div>
      {revs.map((rev) => (
        <ReviewTab rev={rev} />
      ))}
    </div>
  );
}
