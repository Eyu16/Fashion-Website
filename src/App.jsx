import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import AppLayout from "./ui/AppLayout";
import ShopItems from "./components/ShopItems";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "mens",
            element: <ShopItems type="for_him" />,
          },
          {
            path: "womens",
            element: <ShopItems type="for_her" />,
          },
          {
            path: "mens/products/:productId",
            element: <Product />,
          },
          {
            path: "womens/products/:productId",
            element: <Product />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login type="login" />,
      },
      {
        path: "/signup",
        element: <Login type="signup" />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      {/* <Header /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

