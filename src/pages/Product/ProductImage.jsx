import Styles from './product.module.css';
function ProductImage({ product }) {
  return (
    <figure className={Styles.imgContainer}>
      <img
        className={Styles.product_img}
        src={`/img/${product.detailImage}`}
        alt={`${product.name}-photo`}
      />
    </figure>
  );
}

export default ProductImage;
