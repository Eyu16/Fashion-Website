import Button from "../../components/Button";
import Styles from "./product.module.css";
function Product() {
  return (
    <main className={Styles.product}>
      <h1 className={Styles.product_heading}>Product Details</h1>
      <div className={Styles.product_container}>
        <div className={Styles.main_details}>
          <figure className={Styles.imgContainer}>
            <img src="/img/" />
          </figure>
          <div className={Styles.details_text}>
            <h2 className={Styles.product_name}>Netela Dress</h2>
            <p>250$</p>
            <div className={Styles.buttons}>
              <div className={Styles.count_buttons}></div>
              <button className={Styles.count_button}>Inc</button>
              <span className={Styles.count}>2</span>
              <button className={Styles.count_button}>Dec</button>
              <Button></Button>
            </div>
          </div>
        </div>
        <div className={Styles.minor_details}></div>
      </div>
    </main>
  );
}

export default Product;
