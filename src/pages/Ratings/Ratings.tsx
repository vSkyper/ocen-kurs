import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import { Checkbox, Chip, Slider } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { getCourses } from 'store';
import { CourseType } from 'types/CourseType';
import { Link } from 'react-router-dom';

export default function Ratings() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategoriesFilter, setActiveCategoriesFilter] = useState<
    string[]
  >([]);
  const [priceFilter, setPriceFilter] = useState<number[]>([0, 1000]);

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

  useEffect(() => {
    setFilteredCourses(
      courses.filter((course) => {
        if (searchQuery) {
          if (
            !course.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !course.organizer.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return false;
          }
        }
        if (activeCategoriesFilter.length > 0) {
          if (!activeCategoriesFilter.includes(course.category)) {
            return false;
          }
        }
        if (priceFilter[0] > course.price || priceFilter[1] < course.price) {
          return false;
        }
        return true;
      }),
    );
  }, [courses, activeCategoriesFilter, priceFilter, searchQuery]);

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    [],
  );

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

  const handlePriceFilterChange = useCallback(
    (_: Event, newValue: number | number[]) => {
      setPriceFilter(newValue as number[]);
    },
    [],
  );

  return (
    <div>
      <nav className='p-4 flex items-center'>
        <div className='font-extrabold tracking-tighter mr-auto p-2 text-2xl'>
          Oceń kurs
        </div>
        <div className='flex items-center bg-zinc-800 rounded-full px-3 py-1'>
          <input
            type='text'
            placeholder='Wyszukaj kursy'
            className='bg-transparent border-none outline-none text-gray-100 px-2 py-1 rounded-full w-64'
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <button className='ml-2'>
            <SearchIcon />
          </button>
        </div>
      </nav>
      <div className='flex gap-5'>
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
          <div className='mt-4 text-lg font-bold'>Cena</div>
          <Slider
            defaultValue={[0, 1000]}
            valueLabelDisplay='auto'
            max={1000}
            step={10}
            marks={[
              { value: 0, label: '0 PLN' },
              { value: 1000, label: '1000 PLN' },
            ]}
            value={priceFilter}
            onChange={handlePriceFilterChange}
          />
        </div>
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
