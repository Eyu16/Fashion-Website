import ShopItems from '../../components/ShopItems';
import Styles from './home.module.css';
import { getProductsByGender } from '../../utils/helpers';

function ShopOverview({ products }) {
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
          products={womens}
          custome_class={'home_shope_grid'}
          parent="home"
        />
        <div>
          <h3 className={Styles.Shoping_second_heading}>For him</h3>
        </div>
        <ShopItems
          type="for_him"
          products={mens}
          custome_class={'home_shope_grid'}
          parent="home"
        />
      </div>
    </section>
  );
}

export default ShopOverview;
