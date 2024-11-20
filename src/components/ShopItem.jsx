import { Link } from 'react-router-dom';
import Styles from './shopItems.module.css';
import { formatedProductName } from '../utils/helpers';

function ShopItem({ product, parent, type }) {
  const image = product?.hasBackendImage
    ? `${product.resourceUrl}/${product.image}`
    : `/img/${product.image}`;
  return (
    <div className={`${Styles.shoping_card} ${!parent && 'shope_shope_card'}`}>
      <Link
        to={`/shop/${type === 'for_him' ? 'mens' : 'womens'}/products/${
          product.slug
        }`}
      >
        <figure>
          <img
            className={`${!parent && 'shope_shope_img'}`}
            src={image}
            alt={product.name}
          />
        </figure>
      </Link>
      <div className={Styles.description_cotainer}>
        <div>
          <h4 className={Styles.product_name}>
            {formatedProductName(product.name)}
          </h4>
          <span className={Styles.product_price}>{product.price}$</span>
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
