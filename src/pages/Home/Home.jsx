import Styles from './home.module.css';
import Hero from './Hero';
import Fashion from './Fashion';
import OurFashion from './OurFashion';
import NewCollection from './NewCollection';
import ShopOverview from './ShopOverview';
import { getCollection, getProducts } from '../../services/apiFashion';
import { useQuery } from '@tanstack/react-query';
import Center from '../../ui/Center';
import { PuffLoader } from 'react-spinners';

function Home() {
  const {
    isLoading: isLoadingCollections,
    data: collection,
    // error: cError,
  } = useQuery({
    queryKey: ['collections'],
    queryFn: getCollection,
  });
  const {
    isLoading: isLoadingProducts,
    data: products,
    // error: pError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoadingCollections || isLoadingProducts)
    return <Center element={<PuffLoader size={300} />} />;

  return (
    <main className={Styles.home_main}>
      <Hero />
      <Fashion />
      <OurFashion />
      <NewCollection collection={collection} />
      <ShopOverview products={products} />
    </main>
  );
}

export default Home;
