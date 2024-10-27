import ShopItems from "../../components/ShopItems";
import Styles from "./home.module.css";

function ShopOverview() {
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
          images={[
            "Shop1(1).jpg",
            "Shop2(1).jpg",
            "Shop4(2).jpg",
            "Shop3(1).jpg",
          ]}
          custome_class={"home_shope_grid"}
          parent="home"
        />
        <div>
          <h3 className={Styles.Shoping_second_heading}>For him</h3>
        </div>
        <ShopItems
          type="for_him"
          images={[
            "Shop8(1).jpg",
            "Shop12(1).jpeg",
            "Shop10(1).jpeg",
            "Shop11(1).jpeg",
          ]}
          custome_class={"home_shope_grid"}
          parent="home"
        />
      </div>
    </section>
  );
}

export default ShopOverview;
