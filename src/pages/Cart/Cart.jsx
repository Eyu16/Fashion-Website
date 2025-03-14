import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContextProvider';
import { useCheckout } from '../../hooks/useCheckout';
import { useUser } from '../../hooks/useUser';
import Styles from './cart.module.css';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import LoaderMini from '../../ui/LoaderMini';
function Cart() {
  const { cart } = useCart();
  const { isLoading, checkout } = useCheckout();
  const { user } = useUser();
  const navigate = useNavigate();
  const totalPrice = cart?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const handleCheckout = function () {
    console.log(!user);
    if (!user) return navigate('/login');
    checkout(cart);
  };
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
              <button
                className={Styles.button_checkout}
                disabled={isLoading}
                onClick={handleCheckout}
              >
                <span className="center_spinner">
                  Checkout {isLoading && <LoaderMini />}
                </span>
              </button>
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
