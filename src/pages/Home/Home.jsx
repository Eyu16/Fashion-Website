import Styles from './home.module.css';
import Hero from './Hero';
import Fashion from './Fashion';
import OurFashion from './OurFashion';
import NewCollection from './NewCollection';
import ShopOverview from './ShopOverview';
import { getCollection, getProducts } from '../../services/apiFashion';
import { useLoaderData } from 'react-router-dom';

function Home() {
  const { collection, products } = useLoaderData();
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
export async function loader() {
  const collection = await getCollection();
  const products = await getProducts();
  return { collection, products };
}

export default Home;
