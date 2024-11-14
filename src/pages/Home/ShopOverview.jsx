import ShopItems from '../../components/ShopItems';
import Styles from './home.module.css';
import { getProductsByGender } from '../../utils/helpers';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiFashion';
import Loader from '../../ui/Loader';

function ShopOverview() {
  const { isLoading, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  if (isLoading) return <Loader />;
  const mens = getProductsByGender(products, 'men').filter(
    (product) => product.overview
  );
  const womens = getProductsByGender(products, 'women').filter(
    (product) => product.overview
  );
  return (
    <section className={Styles.shop_overview}>
      <h2 className={Styles.shop_heading}>
        Time To get What you are looking for
      </h2>
      <div className={Styles.shoping_container}>
        <div>
          <h3 className={Styles.Shoping_second_heading}>For her</h3>
        </div>
        <ShopItems
          type="for_her"
          overviewProducts={womens}
          custome_class={'home_shope_grid'}
          parent="home"
        />
        <div>
          <h3 className={Styles.Shoping_second_heading}>For him</h3>
        </div>
        <ShopItems
          type="for_him"
          overviewProducts={mens}
          custome_class={'home_shope_grid'}
          parent="home"
        />
      </div>
    </section>
  );
}

export default ShopOverview;
