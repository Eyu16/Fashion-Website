import { useState } from 'react';
import Styles from './product.module.css';
import { useCart } from '../../context/CartContextProvider';

function ProductInfo({ product }) {
  const [count, setCount] = useState(1);
  const {
    cart,
    handleAddCartItem,
    handleDeleteCartItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const itemInCart = cart?.find((item) => item.id === product.id);
  const image = product?.hasBackendImage
    ? `${product.resourceUrl}/${product.detailImage}`
    : `/img/${product.detailImage}`;

  const onAdd = function () {
    const newItem = {
      id: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity: count,
      totalPrice: count * product.price,
      image,
    };
    console.log(newItem);
    handleAddCartItem(newItem);
  };
  const onRemove = function () {
    setCount(1);
    handleDeleteCartItem(product.id);
  };
  // console.log(cart);
  // const cartItem = { ...product, quatity: 1 };

  return (
    <div className={Styles.info_text}>
      <h2 className={Styles.product_name}>{product.name}</h2>
      <p className={Styles.product_price}>{product.price}$</p>
      <div className={Styles.buttons}>
        <div className={Styles.count_buttons}>
          <button
            className={Styles.count_button}
            onClick={() =>
              itemInCart
                ? decreaseQuantity(itemInCart.id)
                : setCount((count) => (count > 1 ? count - 1 : count))
            }
          >
            DEC
          </button>
          <span className={Styles.count}>
            {itemInCart ? itemInCart.quantity : count}
          </span>
          <button
            className={Styles.count_button}
            onClick={() =>
              itemInCart
                ? increaseQuantity(itemInCart.id)
                : setCount((count) => count + 1)
            }
          >
            INC
          </button>
        </div>
        <button
          className={Styles.add_cart}
          onClick={itemInCart ? onRemove : onAdd}
        >
          {itemInCart ? 'Remove Item' : 'Add To Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
