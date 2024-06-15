import { Dispatch, SetStateAction } from 'react';
import { CourseType } from 'types/CourseType';

export interface FiltersProps {
  courses: CourseType[];
  categories: string[];
  searchQuery: string;
  setFilteredCourses: Dispatch<SetStateAction<CourseType[]>>;
}
