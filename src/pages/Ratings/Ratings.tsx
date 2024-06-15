import StarIcon from '@mui/icons-material/Star';
import { Chip } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { getCourses } from 'store';
import { CourseType } from 'types/CourseType';
import { Link } from 'react-router-dom';
import { Filters, Navbar } from './components';

export default function Ratings() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);

  const downloadCourses = useCallback(async () => {
    const downloadedCourses = await getCourses();
    setCourses(downloadedCourses || []);
  }, []);

  useEffect(() => {
    downloadCourses();
  }, [downloadCourses]);

  useEffect(() => {
    const categoriesSet = new Set<string>();
    courses.forEach((course) => categoriesSet.add(course.category));
    setCategories(Array.from(categoriesSet));
  }, [courses]);

  return (
    <div>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='flex gap-5'>
        <Filters
          courses={courses}
          categories={categories}
          searchQuery={searchQuery}
          setFilteredCourses={setFilteredCourses}
        />
        <div className='grow p-5'>
          <div>
            <div className='text-4xl font-bold'>Kursy</div>
            <div className='text-lg'>
              Znajdź kurs, który Cię interesuje i rozwijaj swoje umiejętności.
            </div>
          </div>
          <div className='flex-col'>
            {filteredCourses.map((course) => (
              <Link
                className='flex justify-between items-center p-5 my-3 rounded-3xl bg-zinc-800'
                key={course.name}
                to={`/${course.id}`}
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
                    label={course.category}
                  />
                </div>
                <div className='text-lg'>
                  <div className='flex items-center gap-1'>
                    {course.rating} <StarIcon fontSize='small' />
                  </div>
                  <div>{course.price} PLN</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
