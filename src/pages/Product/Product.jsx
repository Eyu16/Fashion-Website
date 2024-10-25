import { useState } from "react";
// import Button from "../../components/Button";
import Styles from "./product.module.css";
import { Link } from "react-router-dom";
function Product() {
  const [count, setCount] = useState(100);
  return (
    <main className={Styles.product}>
      <h1 className={Styles.product_heading}>Product Details</h1>
      <div className={Styles.product_container}>
        <div className={Styles.main_details}>
          <figure className={Styles.imgContainer}>
            <img
              className={Styles.product_img}
              src="/img/Shop10(2).jpg"
              alt="product-image"
            />
          </figure>
          <div className={Styles.details_text}>
            <h2 className={Styles.product_name}>Netela Dress</h2>
            <p className={Styles.product_price}>250$</p>
            <div className={Styles.buttons}>
              <div className={Styles.count_buttons}>
                <button
                  className={Styles.count_button}
                  onClick={() =>
                    setCount((count) => (count > 1 ? count - 1 : count))
                  }
                >
                  Dec
                </button>
                <span className={Styles.count}>{count}</span>
                <button
                  className={Styles.count_button}
                  onClick={() => setCount((count) => count + 1)}
                >
                  Inc
                </button>
              </div>
              <button className={Styles.add_cart}>Add To Cart</button>
            </div>
          </div>
        </div>
        <div className={Styles.minor_details}>
          <h3 className={Styles.minor_heading}>Description</h3>
          <p className={Styles.product_description}>
            The Netela is a classic, lightweight Ethiopian shawl made from pure
            cotton, adorned with intricate, colorful patterns. Traditionally
            worn by women, it adds elegance to both casual and ceremonial
            attire. A symbol of grace and cultural heritage, it drapes
            beautifully over the shoulders.
          </p>
          <h4 className={Styles.minor_list_heading}>Product Details</h4>
          <ul className={Styles.lists}>
            <li className={Styles.list}>Material: 100% Handwoven Cotton</li>
            <li className={Styles.list}>
              Made From: Natural, breathable, and eco-friendly cotton fibers
            </li>
            <li className={Styles.list}>
              Crafted By: Skilled Ethiopian artisans, preserving traditional
              weaving techniques.
            </li>
            <li className={Styles.list}>
              Eco-Friendly: Made from natural cotton, supporting sustainable
              fashion practices.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Product;
