import { matchPath, Navigate, Outlet, useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Styles from './shop.module.css';

function Shop() {
  const location = useLocation();
  const isProductPage =
    matchPath('/shop/mens/products/:productId', location.pathname) ||
    matchPath('/shop/womens/products/:productId', location.pathname);
  if (location.pathname === '/shop') {
    return <Navigate to="mens" replace />;
  }

  return (
    <main className={Styles.shop}>
      {!isProductPage && (
        <Navigation
          type={'minor_list'}
          items={[
            { name: 'MENS', to: 'mens' },
            { name: 'WOMENS', to: 'womens' },
          ]}
        />
      )}
      <Outlet />
    </main>
  );
}

export default Shop;
