import Styles from './product.module.css';
import ProductImage from './ProductImage';
import { getProduct } from '../../services/apiFashion';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import { useQuery } from '@tanstack/react-query';
import Center from '../../ui/Center';
import { PuffLoader } from 'react-spinners';
function Product() {
  const { productId } = useParams();
  console.log(productId);
  const { data: product, isLoading: isProductLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
    enabled: !!productId,
  });
  if (isProductLoading) return <Center element={<PuffLoader size={300} />} />;

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

// export async function loader({ params }) {
//   const product = await getProduct(params.productId);
//   console.log(product);
//   return product;
// }

export default Product;
