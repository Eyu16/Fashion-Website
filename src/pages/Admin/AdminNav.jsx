import { BiSolidPurchaseTagAlt } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import { IoStatsChart } from 'react-icons/io5';
import styles from './account.module.css';

function AdminNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <BiSolidPurchaseTagAlt />
          <NavLink>Orders</NavLink>
        </li>
        <li className={styles.list}>
          <GiClothes />
          <NavLink>Products</NavLink>
        </li>
        <li className={styles.list}>
          <MdOutlineCollectionsBookmark />
          <NavLink>Collections</NavLink>
        </li>
        <li className={styles.list}>
          <IoStatsChart />
          <NavLink>Statistics</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNav;
