import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import AppLayout from "./ui/AppLayout";
import ShopItems from "./components/ShopItems";
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
        ],
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

