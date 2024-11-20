import { useCart } from '../../context/CartContextProvider';
import Styles from './cart.module.css';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
function Cart() {
  const { cart } = useCart();
  console.log(cart);
  const totalPrice = cart?.reduce((acc, cur) => acc + cur.totalPrice, 0);
  return (
    <main className={Styles.main}>
      <div className={Styles.cart_container}>
        {cart?.length ? (
          <>
            <h1 className={Styles.cart_heading}>Your Cart</h1>
            <div className={Styles.cart_item_lists}>
              {cart?.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            <div className={Styles.checkout_container}>
              <p className={Styles.total_price}>Total price ${totalPrice}</p>
              <button className={Styles.button_checkout}>Checkout</button>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </main>
  );
}

export default Cart;
