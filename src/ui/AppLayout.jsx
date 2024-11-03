import { Outlet, useNavigation } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import Footer from './Footer';
import Header from './Header';
import Center from './Center';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log(isLoading);
  return (
    <div>
      {isLoading && <Center element={<PuffLoader size={300} />} />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
