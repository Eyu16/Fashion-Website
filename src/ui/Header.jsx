import Navigation from "../components/Navigation";
import Styles from "./header.module.css";
function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.header_container}>
        <figure className={Styles.log_container}>
          <span className={Styles.logo}>Maraki</span>
        </figure>
        <Navigation
          type={"main_nav"}
          items={[
            { name: "Home", to: "/" },
            { name: "Shop", to: "/shop" },
            { name: "About", to: "/about" },
            { name: "Contact", to: "/contact" },
            // { name: "Login", to: "/login" },
          ]}
        />
        {/* <nav>
          <ul className={Styles.nav_lists}>
            <li className={Styles.nav_list}>Home</li>
            <li className={Styles.nav_list}>Shop</li>
            <li className={Styles.nav_list}>About</li>
            <li className={Styles.nav_list}>Contact</li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
