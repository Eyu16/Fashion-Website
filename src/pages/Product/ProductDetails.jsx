import { useState } from 'react';
import Styles from './product.module.css';

function ProductDetails({ product }) {
  const [count, setCount] = useState(1);

  return (
    <div className={Styles.details_text}>
      <h2 className={Styles.product_name}>Netela Dress</h2>
      <p className={Styles.product_price}>250$</p>
      <div className={Styles.buttons}>
        <div className={Styles.count_buttons}>
          <button
            className={Styles.count_button}
            onClick={() => setCount((count) => (count > 1 ? count - 1 : count))}
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
  );
}

export default ProductDetails;
