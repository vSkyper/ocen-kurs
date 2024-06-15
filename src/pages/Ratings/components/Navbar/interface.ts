import { Dispatch, SetStateAction } from 'react';

export interface NavbarProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}
