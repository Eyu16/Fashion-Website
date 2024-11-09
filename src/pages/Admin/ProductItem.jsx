import styles from './account.module.css';
function ProductItem() {
  return (
    <div className={styles.item}>
      <figure className={styles.item_img_container}>
        <img className={styles.item_img} src="/img/Shop8(1).jpg" alt="" />
      </figure>
      <div className={styles.item_description}>
        <span className={styles.item_name}>The Netela Dress</span>
        <span className={styles.item_price}>$250</span>
      </div>
      <div className={styles.edit_buttons}>
        <button className={styles.edit_button}>Edit</button>
        <button className={styles.remove_button}>Remove</button>
      </div>
    </div>
  );
}

export default ProductItem;
