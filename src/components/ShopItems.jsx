import { Link } from 'react-router-dom';
import Styles from './shopItems.module.css';
import ShopItem from './ShopItem';
function ShopItems({ type, products, custome_class, parent }) {
  // if (!images) {
  //   if (type === 'for_her')
  //     images = [
  //       'Shop1(1).jpg',
  //       'Shop2(1).jpg',
  //       'Shop4(2).jpg',
  //       'Shop3(1).jpg',
  //       'Shop1(1).jpg',
  //       'Shop2(1).jpg',
  //       'Shop4(2).jpg',
  //       'Shop3(1).jpg',
  //       'Shop1(1).jpg',
  //       'Shop2(1).jpg',
  //       'Shop4(2).jpg',
  //       'Shop3(1).jpg',
  //     ];
  //   else
  //     images = [
  //       'Shop8(1).jpg',
  //       'Shop12(1).jpeg',
  //       'Shop10(1).jpeg',
  //       'Shop11(1).jpeg',
  //       'Shop8(1).jpg',
  //       'Shop12(1).jpeg',
  //       'Shop10(1).jpeg',
  //       'Shop11(1).jpeg',
  //       'Shop8(1).jpg',
  //       'Shop12(1).jpeg',
  //       'Shop10(1).jpeg',
  //       'Shop11(1).jpeg',
  //     ];
  // }
  return (
    <div
      className={`${Styles.shop_for} ${Styles[type]} ${
        !parent ? 'shope_shope_grid' : custome_class
      }`}
    >
      {products?.map((product) => (
        <ShopItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ShopItems;
