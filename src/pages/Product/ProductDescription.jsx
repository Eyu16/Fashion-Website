import Styles from "./product.module.css";

function ProductDescription() {
  return (
    <div className={Styles.minor_details}>
      <h3 className={Styles.minor_heading}>Description</h3>
      <p className={Styles.product_description}>
        The Netela is a classic, lightweight Ethiopian shawl made from pure
        cotton, adorned with intricate, colorful patterns. Traditionally worn by
        women, it adds elegance to both casual and ceremonial attire. A symbol
        of grace and cultural heritage, it drapes beautifully over the
        shoulders.
      </p>
      <h4 className={Styles.minor_list_heading}>Product Details</h4>
      <ul className={Styles.lists}>
        <li className={Styles.list}>Material: 100% Handwoven Cotton</li>
        <li className={Styles.list}>
          Made From: Natural, breathable, and eco-friendly cotton fibers
        </li>
        <li className={Styles.list}>
          Crafted By: Skilled Ethiopian artisans, preserving traditional weaving
          techniques.
        </li>
        <li className={Styles.list}>
          Eco-Friendly: Made from natural cotton, supporting sustainable fashion
          practices.
        </li>
      </ul>
    </div>
  );
}

export default ProductDescription;
