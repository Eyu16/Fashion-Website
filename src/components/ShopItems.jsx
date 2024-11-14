import Styles from './shopItems.module.css';
import ShopItem from './ShopItem';
import { getProductsByGender } from '../utils/helpers';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/apiFashion';
import Loader from '../ui/Loader';
function ShopItems({ type, overviewProducts, custome_class, parent }) {
  // const { shopProducts = [] } = useOutletContext() || {};
  const { isLoading, data: shopProducts } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) return <Loader />;
  const products = getProductsByGender(
    overviewProducts || shopProducts,
    type === 'for_her' ? 'women' : 'men'
  );
  return (
    <div
      className={`${Styles.shop_for} ${Styles[type]} ${
        !parent ? 'shope_shope_grid' : custome_class
      }`}
    >
      {products?.map((product) => (
        <ShopItem product={product} key={product._id} type={type} />
      ))}
    </div>
  );
}

export default ShopItems;
