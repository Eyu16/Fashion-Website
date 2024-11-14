import { PuffLoader } from 'react-spinners';
import Center from './Center';
import { createPortal } from 'react-dom';

function Loader() {
  return createPortal(
    <Center element={<PuffLoader size={300} />} />,
    document.body
  );
}

export default Loader;
