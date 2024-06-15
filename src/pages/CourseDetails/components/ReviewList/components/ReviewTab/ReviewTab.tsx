import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ReviewTab() {
  const revs = [
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 4,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 2,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 5,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 4,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 4,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 4,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 4,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 4,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 4,
    },
    {
      id: 1,
      author: 'Kurs Programowania w Pythonie',
      review: 'Codecademy',
      rating: 4,
    },
  ];
  return (
    <div className='flex-col'>
      {revs.map((rev) => (
        <div
          className='flex justify-between items-center p-5 my-3 rounded-3xl bg-zinc-800'
          key={rev.id}
        >
          <div className='flex-col'>
            <span className='font-bold'>{rev.author}</span>
            <div className='mt-1'>{rev.review}</div>
          </div>
          <div className='flex'>
            <div> Rating: </div>
            <div className='flex items-center gap-1'>
              {Array.from({ length: rev.rating }).map(() => (
                <StarIcon key={rev.id} fontSize='small' />
              ))}
              {Array.from({ length: 5 - rev.rating }).map(() => (
                <StarBorderIcon key={rev.id} fontSize='small' />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
