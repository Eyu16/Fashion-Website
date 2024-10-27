import Styles from "./home.module.css";
import Hero from "./Hero";
import Fashion from "./Fashion";
import OurFashion from "./OurFashion";
import NewCollection from "./NewCollection";
import ShopOverview from "./ShopOverview";

function Home() {
  return (
    <main className={Styles.home_main}>
      <Hero />
      <Fashion />
      <OurFashion />
      <NewCollection />
      <ShopOverview />
    </main>
  );
}

export default Home;
