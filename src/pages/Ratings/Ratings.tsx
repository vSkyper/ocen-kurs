import StarIcon from '@mui/icons-material/Star';
import { Chip } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { getCourses } from 'store';
import { CourseType } from 'types/CourseType';
import { Link } from 'react-router-dom';
import { Level } from 'enums/level';
import { Filters, Navbar } from './components';

export default function Ratings() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);

  const downloadCourses = useCallback(async () => {
    try {
      const downloadedCourses = await getCourses();
      setCourses(downloadedCourses || []);
    } catch (e) {
      throw e;
    }
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
        <div className='grow p-8'>
          <div>
            <div className='text-4xl font-bold'>Kursy</div>
            <div className='text-lg'>
              Znajdź kurs, który Cię interesuje i rozwijaj swoje umiejętności.
            </div>
          </div>
          <div className='flex-col'>
            {filteredCourses.map((course) => (
              <Link
                className='flex justify-between items-center p-5 my-4 rounded-3xl bg-zinc-800'
                key={course.name}
                to={`/${course.id}`}
              >
                <div className='flex-col'>
                  <div className='text-lg'>
                    <span className='font-bold'>{course.name}</span>
                    <span className='px-2'>-</span>
                    <span>{course.organizer}</span>
                  </div>
                  <div className='mt-2'>{course.description}</div>
                  <div className='flex gap-1 mt-4'>
                    <Chip variant='outlined' label={course.category} />
                    <Chip variant='outlined' label={Level[course.level]} />
                    {course.price === 0 && (
                      <Chip variant='outlined' label='Bezpłatny' />
                    )}
                  </div>
                </div>
                <div className='text-lg'>
                  <div className='flex items-center justify-end gap-1'>
                    {course.rating} <StarIcon fontSize='small' />
                  </div>
                  {course.price === 0 && <div>Bezpłatny</div>}
                  {course.price > 0 && <div>{course.price} PLN</div>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
