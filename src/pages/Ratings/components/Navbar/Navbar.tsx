import SearchIcon from '@mui/icons-material/Search';
import { useCallback } from 'react';
import { NavbarProps } from './interface';

export default function Navbar(props: NavbarProps) {
  const { searchQuery, setSearchQuery } = props;

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    [setSearchQuery],
  );

  return (
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
  );
}
