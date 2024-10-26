import { Link } from "react-router-dom";
import Styles from "./navigation.module.css";
function Navigation({ items, customeStyle, type }) {
  // console.log(items);
  return (
    <nav className={`${type === "main_list" ? "main" : "minor"}`}>
      <ul
        className={`${Styles.nav_lists} ${Styles[type]}`}
        style={customeStyle}
      >
        {items.map((item, i) => (
          <Link to={item.to} key={i}>
            <li className={Styles.nav_list}>{item.name}</li>
          </Link>
        ))}
        {type === "main_list" && (
          <Link to="/login">
            <li className={Styles.nav_list}>
              <figure className={Styles.account_container}>
                <img
                  src="/img/account.svg"
                  className={`${Styles.account}`}
                  alt="account"
                />
              </figure>
            </li>
          </Link>
        )}
        {type === "main_list" && (
          <Link to="/cart">
            <li className={Styles.nav_list}>
              <figure className={Styles.cart_container}>
                <img
                  src="/img/cart.png"
                  className={`${Styles.cart}`}
                  alt="cart"
                />
              </figure>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
