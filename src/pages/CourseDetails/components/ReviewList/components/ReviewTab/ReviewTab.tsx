import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ReviewTabProps } from './interface';

export default function ReviewTab(props: ReviewTabProps) {
  const { rev } = props;

  return (
    <div className='flex-col'>
      <div
        className='flex justify-between items-center p-5 my-3 rounded-3xl bg-zinc-800'
        key={rev.revId}
      >
        <div className='flex-col w-full'>
          <span className='font-bold'>{rev.author}</span>
          <div className='mt-1'>{rev.review}</div>
        </div>
        <div className='w-3'> </div>
        <div className='flex'>
          <div className='flex items-center gap-1'>
            {Array.from(Array(rev.rating).keys()).map((item) => (
              <StarIcon key={item} fontSize='medium' />
            ))}
          </div>
          <div className='flex items-center gap-1'>
            {Array.from(Array(5 - rev.rating).keys()).map((item) => (
              <StarBorderIcon key={item} fontSize='medium' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
