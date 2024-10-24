import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation";
// import ShopItems from "../../components/ShopItems";
import Styles from "./shop.module.css";

function Shop() {
  const location = useLocation();
  if (location.pathname === "/shop") {
    return <Navigate to="mens" replace />; // Redirect to "/shop/mens"
  }
  return (
    <main className={Styles.shop}>
      <Navigation
        items={[
          { name: "MENS", to: "mens" },
          { name: "WOMEN", to: "womens" },
        ]}
        customeStyle={{ fontSize: "3rem", paddingBottom: "5rem" }}
      />
      {/* <ShopItems
        type="for_her"
        images={[
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
        ]}
      /> */}
      <Outlet />
    </main>
  );
}

export default Shop;
