import { Link, useOutletContext } from 'react-router-dom';
import Styles from './shopItems.module.css';
import ShopItem from './ShopItem';
import { getProductsByGender } from '../utils/helpers';
function ShopItems({ type, overviewProducts, custome_class, parent }) {
  const { shopProducts = [] } = useOutletContext() || {};
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
