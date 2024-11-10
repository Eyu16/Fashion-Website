import { NavLink } from 'react-router-dom';
import Styles from './navigation.module.css';
function Navigation({ items, customeStyle, type }) {
  return (
    <nav className={`${type === 'main_list' ? 'main' : 'minor'}`}>
      <ul
        className={`${Styles.nav_lists} ${Styles[type]}`}
        style={customeStyle}
      >
        {items.map((item, i) => (
          <NavLink to={item.to} key={i}>
            <li className={`${Styles.nav_list}`}>{item.name}</li>
          </NavLink>
        ))}
        {type === 'main_list' && (
          <NavLink to="/account">
            <li className={Styles.nav_list}>
              <figure className={Styles.account_container}>
                <img
                  src="/img/account.svg"
                  className={`${Styles.account}`}
                  alt="account"
                />
              </figure>
            </li>
          </NavLink>
        )}
        {type === 'main_list' && (
          <NavLink to="/cart">
            <li className={Styles.nav_list}>
              <figure className={Styles.cart_container}>
                <img
                  src="/img/cart.png"
                  className={`${Styles.cart}`}
                  alt="cart"
                />
              </figure>
            </li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
