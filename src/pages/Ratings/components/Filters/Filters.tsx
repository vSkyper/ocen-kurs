import { Checkbox, Slider } from '@mui/material';
import { useCallback, useState } from 'react';
import { FiltersProps } from './interface';
import { UseFilterCourses } from './hooks';

export default function Filters(props: FiltersProps) {
  const { courses, categories, searchQuery, setFilteredCourses } = props;

  const [activeCategoriesFilter, setActiveCategoriesFilter] = useState<
    string[]
  >([]);
  const [priceFilter, setPriceFilter] = useState<number[]>([0, 1000]);

  UseFilterCourses({
    courses,
    searchQuery,
    setFilteredCourses,
    activeCategoriesFilter,
    priceFilter,
  });

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
    [setPriceFilter],
  );

  return (
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
  );
}
