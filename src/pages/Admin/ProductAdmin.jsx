import { useOutletContext } from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';
import styles from './account.module.css';
function ProductAdmin() {
  const { products, showForm, toggleForm, session } = useOutletContext();
  return (
    <>
      <div className={styles.scroll_div}>
        <div className={styles.items}>
          {showForm ? (
            <ProductForm toggleForm={toggleForm} type={session} />
          ) : (
            products?.map((product, i) => (
              <ProductItem key={i} toggleForm={toggleForm} />
            ))
          )}
        </div>
      </div>
      {!products?.length && (
        <p className={styles.paragraph}>Search for product to edit</p>
      )}
      {!showForm && (
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
