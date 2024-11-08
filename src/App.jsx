import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, { loader as homeLoader } from './pages/Home/Home';
import Shop, { loader as shopLoader } from './pages/Shop/Shop';
import AppLayout from './ui/AppLayout';
import ShopItems from './components/ShopItems';
import Product, { loader as productLoader } from './pages/Product/Product';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/shop',
        element: <Shop />,
        loader: shopLoader,
        children: [
          {
            path: 'mens',
            element: <ShopItems type="for_him" />,
          },
          {
            path: 'womens',
            element: <ShopItems type="for_her" />,
          },
          {
            path: 'mens/products/:productId',
            element: <Product />,
            loader: productLoader,
          },
          {
            path: 'womens/products/:productId',
            element: <Product />,
            loader: productLoader,
          },
        ],
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login type="login" />,
      },
      {
        path: '/signup',
        element: <Login type="signup" />,
      },
      {
        path: '/cart',
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--second-brand-bg)',
            color: 'var(--secondary-font-color)',
            textTransform: 'capitalize',
          },
        }}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
