import StarIcon from '@mui/icons-material/Star';
import { Checkbox, Chip } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { getCourses } from 'store';
import { CourseType } from 'types/CourseType';

export default function Ratings() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategoriesFilter, setActiveCategoriesFilter] = useState<
    string[]
  >([]);

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

  const handleCategoryFilterChange = useCallback(
    (category: string) => {
      if (activeCategoriesFilter.includes(category)) {
        setActiveCategoriesFilter(
          activeCategoriesFilter.filter((item: string) => item !== category),
        );
        return;
      }
      setActiveCategoriesFilter([...activeCategoriesFilter, category]);
    },
    [activeCategoriesFilter],
  );

  const handleClearFilters = useCallback(() => {
    setActiveCategoriesFilter([]);
  }, []);

  const handleSelectAllFilters = useCallback(() => {
    setActiveCategoriesFilter(categories);
  }, [categories]);

  return (
    <div className='flex'>
      <div className='grow-0 p-5'>
        <div className='text-3xl font-bold'>Filtry</div>
        <div className='mt-2 text-lg font-bold'>Kategoria</div>
        {activeCategoriesFilter.length > 0 && (
          <div
            className='mt-1 text-sm text-zinc-300 cursor-pointer'
            onClick={handleClearFilters}
          >
            Wyczyść ({activeCategoriesFilter.length})
          </div>
        )}
        {activeCategoriesFilter.length === 0 && (
          <div
            className='mt-1 text-sm text-zinc-300 cursor-pointer'
            onClick={handleSelectAllFilters}
          >
            Zaznacz wszystkie
          </div>
        )}
        {categories.map((name: string) => (
          <div key={name}>
            <div className='flex items-center gap-1'>
              <Checkbox
                onChange={() => handleCategoryFilterChange(name)}
                checked={activeCategoriesFilter.includes(name)}
              />
              <span>{name}</span>
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
          {courses.map(
            (course) =>
              (activeCategoriesFilter.length === 0 ||
                activeCategoriesFilter.includes(course.category)) && (
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
                      label={course.category}
                    />
                  </div>
                  <div className='text-lg'>
                    <div className='flex items-center gap-1'>
                      {course.rating} <StarIcon fontSize='small' />
                    </div>
                    <div>{course.price}</div>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
