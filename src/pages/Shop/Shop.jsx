import { matchPath, Navigate, Outlet, useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Styles from './shop.module.css';
import { getProducts } from '../../services/apiFashion';
import { useQuery } from '@tanstack/react-query';
import Center from '../../ui/Center';
import { PuffLoader } from 'react-spinners';

function Shop() {
  const location = useLocation();
  const { data: shopProducts, isLoading: isShopProductsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  if (isShopProductsLoading)
    return <Center element={<PuffLoader size={300} />} />;

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

export default Shop;
