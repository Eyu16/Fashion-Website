import Styles from "./shopItems.module.css";
//
function ShopItems({ type, images }) {
  if (!images) {
    if (type === "for_her")
      images = [
        "Shop1(1).jpg",
        "Shop2(1).jpg",
        "Shop4(1).jpg",
        "Shop3(1).jpg",
        "Shop1(1).jpg",
        "Shop2(1).jpg",
        "Shop4(1).jpg",
        "Shop3(1).jpg",
        "Shop1(1).jpg",
        "Shop2(1).jpg",
        "Shop4(1).jpg",
        "Shop3(1).jpg",
      ];
    else
      images = [
        "Shop8(1).jpg",
        "Shop12(1).jpeg",
        "Shop10(1).jpeg",
        "Shop11(1).jpeg",
        "Shop8(1).jpg",
        "Shop12(1).jpeg",
        "Shop10(1).jpeg",
        "Shop11(1).jpeg",
        "Shop8(1).jpg",
        "Shop12(1).jpeg",
        "Shop10(1).jpeg",
        "Shop11(1).jpeg",
      ];
  }
  return (
    <div className={`${Styles.shop_for} ${Styles[type]}`}>
      {images?.map((img, i) => (
        <div className={Styles.shoping_card} key={i}>
          <figure>
            <img src={`/img/${img}`} alt="shop" />
          </figure>
          <h4>Netela Dress</h4>
          <span>250$</span>
        </div>
      ))}
      {/* <div className={Styles.shoping_card}>
        <figure>
          <img src="/img/Shop1(1).jpg" alt="shop" />
        </figure>
        <h4>Netela Dress</h4>
        <span>250$</span>
      </div>
      <div className={Styles.shoping_card}>
        <figure>
          <img src="/img/Shop2(1).jpg" alt="shop" />
        </figure>
        <h4>Netela Dress</h4>
        <span>250$</span>
      </div>
      <div className={Styles.shoping_card}>
        <figure>
          <img src="/img/Shop4(1).jpg" alt="shop" />
        </figure>
        <h4>Netela Dress</h4>
        <span>250$</span>
      </div>
      <div className={Styles.shoping_card}>
        <figure>
          <img src="/img/Shop3(1).jpg" alt="shop" />
        </figure>
        <h4>Netela Dress</h4>
        <span>250$</span>
      </div> */}
    </div>
  );
}

export default ShopItems;
