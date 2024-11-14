import { formatedProductName } from '../../utils/helpers';
import styles from './account.module.css';
function ProductItem({ product, toggleForm, onSetProduct }) {
  const image = product?.hasBackendImage
    ? `${product.resourceUrl}/${product.image}`
    : `/img/${product.image}`;

  const handleClick = function () {
    toggleForm('edit');
    onSetProduct(product);
  };
  return (
    <div className={styles.item}>
      <figure className={styles.item_img_container}>
        <img
          className={styles.item_img}
          src={image}
          alt={`${product.name}-photo`}
        />
      </figure>
      <div className={styles.item_description}>
        <span className={styles.item_name}>
          {formatedProductName(product.name)}
        </span>
        <span className={styles.item_price}>${product.price}</span>
      </div>
      <div className={styles.edit_buttons}>
        <button onClick={handleClick} className={styles.edit_button}>
          Edit
        </button>
        <button className={styles.remove_button}>Remove</button>
      </div>
    </div>
  );
}

export default ProductItem;
