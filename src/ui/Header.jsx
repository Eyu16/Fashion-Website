import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Styles from './header.module.css';
function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.header_container}>
        <figure className={Styles.log_container}>
          <Link to="/">
            <span className={Styles.logo}>Maraki</span>
          </Link>
        </figure>
        <Navigation
          type={'main_list'}
          items={[
            { name: 'Home', to: '/' },
            { name: 'Shop', to: '/shop' },
            { name: 'About', to: '/about' },
            { name: 'Contact', to: '/contact' },
            // { name: "Login", to: "/login" },
          ]}
        />
      </div>
    </header>
  );
}

export default Header;
