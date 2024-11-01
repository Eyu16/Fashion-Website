import { Link } from 'react-router-dom';
import Styles from './shopItems.module.css';

function ShopItem({ product, parent }) {
  return (
    <div className={`${Styles.shoping_card} ${!parent && 'shope_shope_card'}`}>
      <Link to="/shop/mens/products/:productId">
        <figure>
          <img
            className={`${!parent && 'shope_shope_img'}`}
            src={`/img/${product.image}`}
            alt="shop"
          />
        </figure>
      </Link>
      <div className={Styles.description_cotainer}>
        <div>
          <h4 className={Styles.product_name}>Netela Dress</h4>
          <span className={Styles.product_price}>250$</span>
        </div>
        <div className={Styles.cart_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="38"
            height="38"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={Styles.cart}
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2 13h13l2-9H6"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
