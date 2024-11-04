import { FC, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce.ts';
import { useSearch } from '../hooks/useSearch.ts';
import './YellowPagesSearch.css';
import PersonCard from './PersonCard.tsx';
import { Person } from '../services/searchApi.ts';

const YellowPagesSearch: FC = () => {
  const [text, setText] = useState('');
  const debouncedInput = useDebounce(text, 300);
  const { data, isLoading, isError } = useSearch(debouncedInput);

  const maxCards = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const pageData = data?.slice((currentPage - 1) * maxCards, currentPage * maxCards);

  const paginatorHandler = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data?.length / maxCards);

  return (
    <div className="yellow-pages-container">
      <h1>Yellow Pages</h1>
      <input
        type="text"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
        placeholder="Name, age, phone number"
        className="search-input"
      />
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Something went wrong</p>}
      {!isLoading && data && data.length === 0 && <p>No results found for {debouncedInput} </p>}

      {data && data.length > maxCards && (
        <div className={'pagination'}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => paginatorHandler(i + 1)}>
              {i > 0} {i + 1} {i < totalPages - 1}
            </button>
          ))}
        </div>
      )}

      <div className={'people-container'}>
        {pageData?.map((person: Person) => <PersonCard key={person.phoneNumber} props={person} />)}
      </div>
    </div>
  );
};

export default YellowPagesSearch;
