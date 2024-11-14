import { useSearchQueryCustome } from '../../context/SearchQueryProvider';
import styles from './account.module.css';

function SearchBar() {
  const { query, setQuery } = useSearchQueryCustome();
  return (
    <div className={styles.search_box}>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search for item"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
