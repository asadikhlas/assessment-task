import searchIcon from '../assets/search.svg';
import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className='search-bar'>
      <img src={searchIcon} className='search-bar__icon' alt='' />
      <input
        aria-label='Search assessments'
        type='search'
        placeholder='Search'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
