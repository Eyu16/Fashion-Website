import { matchPath, Navigate, Outlet, useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation";
// import ShopItems from "../../components/ShopItems";
import Styles from "./shop.module.css";

function Shop() {
  const location = useLocation();
  const isProductPage =
    matchPath("/shop/mens/products/:productId", location.pathname) ||
    matchPath("/shop/womens/products/:productId", location.pathname);
  if (location.pathname === "/shop") {
    return <Navigate to="mens" replace />; // Redirect to "/shop/mens"
  }

  return (
    <main className={Styles.shop}>
      {!isProductPage && (
        <Navigation
          items={[
            { name: "MENS", to: "mens" },
            { name: "WOMEN", to: "womens" },
          ]}
          customeStyle={{ fontSize: "3rem", paddingBottom: "5rem" }}
        />
      )}
      <Outlet />
    </main>
  );
}

export default Shop;
