import { useState } from "react";
import Styles from "./cart.module.css";
import CartItem from "./CartItem";
function Cart() {
  return (
    <main className={Styles.main}>
      <div className={Styles.cart_container}>
        <h1 className={Styles.cart_heading}>Your Cart</h1>
        <div className={Styles.cart_item_lists}>
          <CartItem />
          <CartItem />
        </div>
        <div className={Styles.checkout_container}>
          <p className={Styles.total_price}>Total price 1000$</p>
          <button className={Styles.button_checkout}>Checkout</button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
