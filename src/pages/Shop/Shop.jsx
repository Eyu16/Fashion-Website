import {
  matchPath,
  Navigate,
  Outlet,
  useLoaderData,
  useLocation,
} from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Styles from './shop.module.css';
import { getProducts } from '../../services/apiFashion';

function Shop() {
  const location = useLocation();
  const shopProducts = useLoaderData();

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
      <Outlet context={{ shopProducts }} />
    </main>
  );
}
export async function loader() {
  const shopProducts = await getProducts();
  return shopProducts;
}
export default Shop;
