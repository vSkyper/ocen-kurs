/* eslint-disable @typescript-eslint/no-unused-vars */
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addReview } from 'store';
import ReviewCreationType from './interface';

export default function ReviewCreationForm(params: ReviewCreationType) {
  const { courseId } = useParams<{ courseId: string }>();
  const { downloadCourseDetails } = params;
  const [author, setAuthor] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (author !== '' && review !== '' && rating !== 0) {
      try {
        const newReview = {
          author,
          revId: '',
          rating,
          review,
        };

        if (courseId) {
          addReview(courseId, newReview);
          setMessage('Zamieszczono recenzję!');
          setAuthor('');
          setReview('');
          setRating(0);
        } else {
          setMessage('Nie udało się zamieścić recenzji!');
        }
      } catch (error) {
        setMessage(
          `Błąd: ${(error as Error).message || 'Nie udało się zamieścić recenzji!'}`,
        );
      }
    } else {
      setMessage('Wypełnij wszystkie pola!');
    }

    try {
      downloadCourseDetails();
    } catch (error) {
      setMessage(
        `Błąd: ${(error as Error).message || 'Nie udało się pobrać recenzji!'}`,
      );
    }
  };

  return (
    <div className='py-4'>
      <div className='font-bold text-2xl'>Napisz recenzję kursu</div>
      <form className='py-4' onSubmit={handleSubmit}>
        <div className='flex justify-between items-center mb-4'>
          <label className='basis-1/6 font-bold'>Nazwa użytkownika:</label>
          <input
            className='px-4 py-2 bg-zinc-800 rounded-2xl basis-5/6 border-gray-100'
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className='flex justify-between items-start mb-5'>
          <label className='basis-1/6 font-bold'>Recenzja kursu:</label>
          <textarea
            className='px-4 py-2 bg-zinc-800 resize-none rounded-2xl basis-5/6'
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-1'>
            <label className='font-bold'>Ocena:</label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)}>
                  {star <= rating ? (
                    <StarIcon className='cursor-pointer' fontSize='medium' />
                  ) : (
                    <StarBorderIcon
                      className='cursor-pointer'
                      fontSize='medium'
                    />
                  )}
                </span>
              ))}
            </div>
          </div>

          <button
            className='px-4 py-2 rounded-lg bg-zinc-600 hover:bg-zinc-700 font-bold'
            type='submit'
          >
            Prześlij
          </button>
        </div>
      </form>
      {message && <p className='text-blue-500 font-bold'>{message}</p>}
    </div>
  );
}
