import { useOutletContext } from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';
import styles from './account.module.css';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiFashion';
import Loader from '../../ui/Loader';
import { useState } from 'react';
import { useSearchQueryCustome } from '../../context/SearchQueryProvider';
import { filterProducts } from '../../utils/helpers';
function ProductAdmin() {
  const { showForm, toggleForm, session } = useOutletContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  const [selectedProduct, setSelectedProduct] = useState('');
  const { query } = useSearchQueryCustome();
  const searchedProducts =
    query.length < 4 ? [] : filterProducts(products, query);
  console.log(query);
  if (isLoading) return <Loader />;
  return (
    <>
      <div className={styles.scroll_div}>
        <div className={styles.items}>
          {showForm ? (
            <ProductForm
              toggleForm={toggleForm}
              type={session}
              product={selectedProduct}
            />
          ) : (
            searchedProducts?.map((product) => (
              <ProductItem
                product={product}
                key={product.id}
                toggleForm={toggleForm}
                onSetProduct={setSelectedProduct}
              />
            ))
          )}
        </div>
      </div>
      {!searchedProducts?.length && query.length < 4 && !showForm && (
        <p className={styles.paragraph}>Search for product to edit!</p>
      )}
      {!searchedProducts?.length && query.length > 3 && !showForm && (
        <p className={styles.paragraph}>No products has been found!</p>
      )}
      {!searchedProducts?.length && !showForm && (
        <button
          className={`${styles.button} ${styles.addProduct}`}
          onClick={() => toggleForm('add')}
        >
          Add Product
        </button>
      )}
    </>
  );
}

export default ProductAdmin;
