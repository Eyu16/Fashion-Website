import { formatedDetails } from '../../utils/helpers';
import Styles from './product.module.css';

function ProductDetails({ product }) {
  return (
    <div className={Styles.minor_details}>
      <h3 className={Styles.minor_heading}>Description</h3>
      <p className={Styles.product_description}>{product.description}</p>
      <h4 className={Styles.minor_list_heading}>Product Details</h4>
      <ul className={Styles.lists}>
        {formatedDetails(product.productDetails).map((detail, index) => (
          <li key={index} className={Styles.list}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDetails;
