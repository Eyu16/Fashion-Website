import { Link } from "react-router-dom";
import Styles from "./navigation.module.css";
function Navigation({ items, customeStyle, type }) {
  // console.log(items);
  return (
    <nav>
      <ul
        className={`${Styles.nav_lists} ${Styles[type]}`}
        style={customeStyle}
      >
        {items.map((item, i) => (
          <Link to={item.to} key={i}>
            <li className={Styles.nav_list}>
              {item.name === "cart" ? "" : item.name}
            </li>
          </Link>
        ))}
        {type === "main_nav" && (
          <li className={Styles.nav_list}>
            <figure className={Styles.cart_container}>
              <img
                src="/img/cart.png"
                className={`${Styles.cart}`}
                alt="cart"
              />
            </figure>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
