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
          <div> Rating: </div>
          <div className='flex items-center gap-1'>
            {Array.from({ length: rev.rating }).map(() => (
              <StarIcon key={rev.revId} fontSize='small' />
            ))}
            {Array.from({ length: 5 - rev.rating }).map(() => (
              <StarBorderIcon key={rev.revId} fontSize='small' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
