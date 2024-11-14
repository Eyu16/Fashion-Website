import Styles from './product.module.css';
import ProductImage from './ProductImage';
import { getProduct } from '../../services/apiFashion';
import { useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../ui/Loader';
function Product() {
  const { productId } = useParams();
  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
    enabled: !!productId,
  });
  if (isLoading) return <Loader />;
  return (
    <main className={Styles.product}>
      <h1 className={Styles.product_heading}>Product Details</h1>
      <div className={Styles.product_container}>
        <div className={Styles.main_details}>
          <ProductImage product={product} />
          <ProductInfo product={product} />
        </div>
        <ProductDetails product={product} />
      </div>
    </main>
  );
}

export default Product;
