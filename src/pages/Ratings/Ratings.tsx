import StarIcon from '@mui/icons-material/Star';
import { Checkbox, Chip } from '@mui/material';

interface Course {
  name: string;
  organizer: string;
  description: string;
  rating: string;
  price: string;
}

const courses: Course[] = [
  {
    name: 'Kurs Programowania w Pythonie',
    organizer: 'Szkoła Kodowania',
    description: 'Naucz się programować w Pythonie od podstaw.',
    rating: '4.8',
    price: '299.99 PLN',
  },
  {
    name: 'Podstawy Fotografii',
    organizer: 'Akademia Fotografii',
    description: 'Kurs dla początkujących fotografów.',
    rating: '4.5',
    price: '199.99 PLN',
  },
  {
    name: 'Kurs Języka Angielskiego',
    organizer: 'Szkoła Języków Obcych',
    description: 'Intensywny kurs języka angielskiego.',
    rating: '4.7',
    price: '399.99 PLN',
  },
  {
    name: 'Zaawansowane Techniki Marketingowe',
    organizer: 'Marketing Masters',
    description: 'Kurs dla profesjonalistów z dziedziny marketingu.',
    rating: '4.9',
    price: '499.99 PLN',
  },
  {
    name: 'Kurs Gotowania dla Początkujących',
    organizer: 'Kulinarna Akademia',
    description: 'Naucz się gotować smaczne i zdrowe potrawy.',
    rating: '4.6',
    price: '249.99 PLN',
  },
  {
    name: 'Kurs Grafiki Komputerowej',
    organizer: 'Digital Art School',
    description:
      'Kurs obejmuje podstawy oraz zaawansowane techniki grafiki komputerowej.',
    rating: '4.7',
    price: '349.99 PLN',
  },
  {
    name: 'Kurs Zarządzania Projektami',
    organizer: 'Project Management Academy',
    description: 'Naucz się zarządzać projektami skutecznie i efektywnie.',
    rating: '4.8',
    price: '449.99 PLN',
  },
  {
    name: 'Kurs Rysunku i Malarstwa',
    organizer: 'Szkoła Sztuk Pięknych',
    description: 'Podstawy rysunku i malarstwa dla początkujących artystów.',
    rating: '4.5',
    price: '299.99 PLN',
  },
  {
    name: 'Kurs Muzyczny: Nauka Gry na Gitarze',
    organizer: 'Akademia Muzyczna',
    description: 'Kurs gry na gitarze dla początkujących.',
    rating: '4.6',
    price: '199.99 PLN',
  },
  {
    name: 'Kurs Jogi dla Początkujących',
    organizer: 'Yoga Studio',
    description: 'Podstawy jogi dla każdego.',
    rating: '4.7',
    price: '159.99 PLN',
  },
];

interface Filter {
  name: string;
  checked: boolean;
}

const filters: Filter[] = [
  {
    name: 'Programowanie',
    checked: false,
  },
  {
    name: 'Fotografia',
    checked: false,
  },
  {
    name: 'Języki Obce',
    checked: false,
  },
  {
    name: 'Marketing',
    checked: false,
  },
  {
    name: 'Gotowanie',
    checked: false,
  },
  {
    name: 'Grafika Komputerowa',
    checked: false,
  },
  {
    name: 'Zarządzanie Projektami',
    checked: false,
  },
  {
    name: 'Rysunek i Malarstwo',
    checked: false,
  },
  {
    name: 'Muzyka',
    checked: false,
  },
  {
    name: 'Joga',
    checked: false,
  },
];

export default function Ratings() {
  return (
    <div className='flex'>
      <div className='grow-0 p-5'>
        <div className='text-3xl font-bold'>Filtry</div>
        <div className='mt-2 text-lg font-bold'>Kategoria</div>
        <div className='mt-1 text-sm text-zinc-300 cursor-pointer'>
          Zaznacz wszystkie
        </div>
        {filters.map((filter) => (
          <div key={filter.name}>
            <div className='flex items-center gap-1'>
              <Checkbox />
              <span>{filter.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='grow p-5'>
        <div>
          <div className='text-4xl font-bold'>Kursy</div>
          <div className='text-lg'>
            Znajdź kurs, który Cię interesuje i rozwijaj swoje umiejętności.
          </div>
        </div>
        <div className='flex-col'>
          {courses.map((course) => (
            <div
              className='flex justify-between items-center p-5 my-3 rounded-3xl bg-zinc-800'
              key={course.name}
            >
              <div className='flex-col'>
                <div>
                  <span className='font-bold'>{course.name}</span>
                  <span className='px-2'>-</span>
                  <span>{course.organizer}</span>
                </div>
                <div className='mt-1'>{course.description}</div>
                <Chip
                  className='mt-3'
                  variant='outlined'
                  label='Programowanie'
                />
              </div>
              <div className='text-lg'>
                <div className='flex items-center gap-1'>
                  {course.rating} <StarIcon fontSize='small' />
                </div>
                <div>{course.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
