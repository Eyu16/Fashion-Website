import { BiSolidPurchaseTagAlt } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import { IoStatsChart } from 'react-icons/io5';
import styles from './account.module.css';
import { useUser } from '../../hooks/useUser';
import Loader from '../../ui/Loader';

function AdminNav() {
  const { user, isLoading } = useUser();

  if (isLoading) return <Loader />;

  return (
    <nav className={styles.nav}>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <BiSolidPurchaseTagAlt />
          <NavLink to="order-admin">Orders</NavLink>
        </li>
        {user?.role === 'admin' && (
          <li className={styles.list}>
            <GiClothes />
            <NavLink to="product-admin">Products</NavLink>
          </li>
        )}
        {user?.role === 'admin' && (
          <li className={styles.list}>
            <MdOutlineCollectionsBookmark />
            <NavLink to="collection-admin">Collections</NavLink>
          </li>
        )}
        {/* <li className={styles.list}>
          <IoStatsChart />
          <NavLink>Statistics</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default AdminNav;
