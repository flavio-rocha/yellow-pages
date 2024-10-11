import { FC, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce.ts';
import { useSearch } from '../hooks/useSearch.ts';
import './YellowPagesSearch.css';

const YellowPagesSearch: FC = () => {
  const [text, setText] = useState('');
  const debouncedInput = useDebounce(text, 300);
  const { data, isLoading, isError } = useSearch(debouncedInput);

  return (
    <div className="yellow-pages-container">
      <input
        type="text"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
        placeholder="Name, age, phone number"
        className="search-input"
      />
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Something went wrong</p>}
      <div className={'search-results-container'}>{data?.map((person) => <div>{person.name}</div>)}</div>
    </div>
  );
};

export default YellowPagesSearch;
