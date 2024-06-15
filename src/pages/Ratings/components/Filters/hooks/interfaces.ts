import { Dispatch, SetStateAction } from 'react';
import { CourseType } from 'types/CourseType';

export interface IFilterCourses {
  courses: CourseType[];
  searchQuery: string;
  setFilteredCourses: Dispatch<SetStateAction<CourseType[]>>;
  activeCategoriesFilter: string[];
  activeLevelFilter: number[];
  priceFilter: number[];
}
