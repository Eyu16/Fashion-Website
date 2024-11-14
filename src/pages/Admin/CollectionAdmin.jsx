import { useOutletContext } from 'react-router-dom';
import ProductForm from './ProductForm';
import styles from './account.module.css';
import { useQuery } from '@tanstack/react-query';
import { getCollections } from '../../services/apiFashion';
import Loader from '../../ui/Loader';
import { useState } from 'react';
import { useSearchQueryCustome } from '../../context/SearchQueryProvider';
import { filterProducts } from '../../utils/helpers';
import CollectionItem from './CollectionItem';
function CollectionAdmin() {
  const { showForm, toggleForm, session } = useOutletContext();
  const { isLoading, data: collections } = useQuery({
    queryKey: ['collections'],
    queryFn: getCollections,
  });
  const [selectedCollection, setSelectedCollection] = useState('');
  const { query } = useSearchQueryCustome();
  const searchedCollections =
    query.length < 4 ? [] : filterProducts(collections, query);
  if (isLoading) return <Loader />;
  return (
    <>
      <div className={styles.scroll_div}>
        <div className={styles.items}>
          {showForm ? (
            <ProductForm
              toggleForm={toggleForm}
              type={session}
              product={selectedCollection}
            />
          ) : (
            searchedCollections?.map((collection) => (
              <CollectionItem
                collection={collection}
                key={collection.id}
                toggleForm={toggleForm}
                onSetProduct={setSelectedCollection}
              />
            ))
          )}
        </div>
      </div>
      {!searchedCollections?.length && query.length < 4 && (
        <p className={styles.paragraph}>Search for collections!</p>
      )}
      {!searchedCollections?.length && query.length > 3 && (
        <p className={styles.paragraph}>No collections has been found!</p>
      )}
      {!searchedCollections?.length && (
        <button
          className={`${styles.button} ${styles.addProduct}`}
          onClick={() => toggleForm('add')}
        >
          Add Collection
        </button>
      )}
    </>
  );
}

export default CollectionAdmin;
