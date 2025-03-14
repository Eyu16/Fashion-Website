import { createContext, useContext, useState } from 'react';

const SearchQueryContext = createContext();

function SearchQueryProvider({ children }) {
  const [query, setQuery] = useState('');
  return (
    <SearchQueryContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
}
export function useSearchQueryCustome() {
  const context = useContext(SearchQueryContext);
  return context;
}

export default SearchQueryProvider;
