import { HiBellAlert } from 'react-icons/hi2';
import { BiSolidPurchaseTagAlt } from 'react-icons/bi';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import { IoStatsChart } from 'react-icons/io5';
import { GiClothes } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styles from './account.module.css';
import ProductItem from './productItem';
function Account() {
  // const products = Array.from({ length: 10 }, (_, index) => index + 1);
  const products = [];
  return (
    <div className={styles.account}>
      <div className={styles.container}>
        <div className={styles.main_containt}>
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
          <div className={styles.display}>
            <div className={styles.search_box}>
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Search for item"
              />
            </div>
            <div className={styles.display_content}>
              <div className={styles.scroll_div}>
                <div className={styles.items}>
                  {products?.map((product, i) => (
                    <ProductItem key={i} />
                  ))}
                </div>
              </div>
              {!products?.length && (
                <p className={styles.paragraph}>Search for product to edit</p>
              )}
              <button className={styles.button}>Add Product</button>
            </div>
          </div>
          <div className={styles.header_container}>
            <div className={styles.header}>
              <HiBellAlert className={styles.notification} />
              <span className={styles.name}>Eyoba Yihalem</span>
              <figure className={styles.imgContainer}>
                <img src="/img/default.jpg" className={styles.profile} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
