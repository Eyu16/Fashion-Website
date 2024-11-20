import Styles from './product.module.css';
function ProductImage({ product }) {
  const image = product?.hasBackendImage
    ? `${product.resourceUrl}/${product.detailImage}`
    : `/img/${product.detailImage}`;
  // console.log(image, product);
  return (
    <figure className={Styles.imgContainer}>
      <img
        className={Styles.product_img}
        src={image}
        alt={`${product.name}-photo`}
      />
    </figure>
  );
}

export default ProductImage;
