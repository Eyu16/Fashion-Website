import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import AppLayout from './ui/AppLayout';
import ShopItems from './components/ShopItems';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import { Toaster } from 'react-hot-toast';
import Error from './ui/Error';
import Account from './pages/Admin/Account';
import ProductAdmin from './pages/Admin/ProductAdmin';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import DeleteConfirmationModal from './ui/ConfirmationModal';
import CollectionAdmin from './pages/Admin/CollectionAdmin';
import CartContextProvider from './context/CartContextProvider';
import OrderAdmin from './pages/Admin/OrderAdmin';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
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
          },
          {
            path: 'womens/products/:productId',
            element: <Product />,
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
        path: '/account',
        element: <Account />,
        children: [
          {
            path: '', // This matches the base /account path
            element: <Navigate to="product-admin" replace />, // Redirects to /account/product-admin
          },
          {
            path: 'product-admin',
            element: <ProductAdmin />,
          },
          {
            path: 'collection-admin',
            element: <CollectionAdmin />,
          },
          {
            path: 'order-admin',
            element: <OrderAdmin />,
          },
        ],
      },
      {
        path: '/signup',
        element: <Login type="signup" />,
      },
      {
        path: '/login',
        element: <Login type="login" />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px', zIndex: 100000000 }}
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
    </QueryClientProvider>
  );
}

export default App;
