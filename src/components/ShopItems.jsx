import { Link } from "react-router-dom";
import Styles from "./shopItems.module.css";
//
function ShopItems({ type, images, custome_class }) {
  if (!images) {
    if (type === "for_her")
      images = [
        "Shop1(1).jpg",
        "Shop2(1).jpg",
        "Shop4(2).jpg",
        "Shop3(1).jpg",
        "Shop1(1).jpg",
        "Shop2(1).jpg",
        "Shop4(2).jpg",
        "Shop3(1).jpg",
        "Shop1(1).jpg",
        "Shop2(1).jpg",
        "Shop4(2).jpg",
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
    <div className={`${Styles.shop_for} ${Styles[type]} ${custome_class}`}>
      {images?.map((img, i) => (
        <div className={Styles.shoping_card} key={i}>
          <Link to="/shop/mens/products/:productId">
            <figure>
              <img src={`/img/${img}`} alt="shop" />
            </figure>
          </Link>
          <div className={Styles.description_cotainer}>
            <div>
              <h4 className={Styles.product_name}>Netela Dress</h4>
              <span className={Styles.product_price}>250$</span>
            </div>
            <div className={Styles.cart_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="38"
                height="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={Styles.cart}
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2 13h13l2-9H6"></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
      {/*  */}
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
