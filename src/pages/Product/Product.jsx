import Styles from "./product.module.css";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
function Product() {
  return (
    <main className={Styles.product}>
      <h1 className={Styles.product_heading}>Product Details</h1>
      <div className={Styles.product_container}>
        <div className={Styles.main_details}>
          <ProductImage />
          <ProductDetails />
        </div>
        <ProductDescription />
      </div>
    </main>
  );
}

export default Product;
