import { Outlet, useNavigation } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import Footer from './Footer';
import Header from './Header';
import Center from './Center';
import ScrollToTop from './ScrollToTop';
// import { useUser } from '../hooks/useUser';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  // useUser();
  console.log(isLoading);
  return (
    <div>
      <ScrollToTop />
      {isLoading && <Center element={<PuffLoader size={300} />} />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
