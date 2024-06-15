import { useEffect } from 'react';
import { IFilterCourses } from './interfaces';

const UseFilterCourses = (data: IFilterCourses) => {
  const {
    courses,
    searchQuery,
    setFilteredCourses,
    activeCategoriesFilter,
    priceFilter,
  } = data;

  return useEffect(() => {
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
  }, [
    activeCategoriesFilter,
    courses,
    priceFilter,
    searchQuery,
    setFilteredCourses,
  ]);
};

export default UseFilterCourses;
