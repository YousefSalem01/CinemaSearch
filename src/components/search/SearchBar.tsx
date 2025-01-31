import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => (
  <div className="relative bg-gray-100 rounded-lg">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <SearchIcon className="text-gray-400" />
    </div>
    <InputBase
      fullWidth
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="pl-14 pr-4 py-3"
      inputProps={{ 'aria-label': 'search movies' }}
    />
  </div>
);

export default SearchBar;