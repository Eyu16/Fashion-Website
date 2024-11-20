import { Link } from 'react-router-dom';
import Styles from './emptyCart.module.css';

function EmptyCart() {
  return (
    <div className={Styles.empty_cart}>
      <h2 className={Styles.cart_heading}>Your cart is empty!</h2>
      <p className={Styles.subtext}>
        Browse our collection and add items to your cart.
      </p>
      <Link to="/shop">
        <button className={Styles.shop_button}>Shop Now</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
