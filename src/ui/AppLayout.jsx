import { Outlet, useNavigation } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import Footer from './Footer';
import Header from './Header';
import Center from './Center';
import ScrollToTop from './ScrollToTop';
import { createContext, useState } from 'react';
import { useLoaderContext } from '../context/LoaderProvider';

const LoaderContext = createContext();

function AppLayout() {
  // const { isLoading } = useLoaderContext();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  // const [isLoading, setIsLoading] = useState(false);
  // console.log(isLoading);
  return (
    <div className="appLayout">
      <ScrollToTop />
      {isLoading && <Center element={<PuffLoader size={300} />} />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
