import Styles from "./product.module.css";
function ProductImage() {
  return (
    <figure className={Styles.imgContainer}>
      <img
        className={Styles.product_img}
        src="/img/Shop10(2).jpg"
        alt="product-image"
      />
    </figure>
  );
}

export default ProductImage;
