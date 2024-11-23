import {
  formatDateToWords,
  formatOrderProductNames,
} from '../../utils/helpers';
import styles from './orderItem.module.css';
function OrderItem({ order }) {
  return (
    <div className={styles.order}>
      <div className={styles.productsName}>
        Products: {formatOrderProductNames(order.cart)}
      </div>
      <div className={styles.status}>Status: {order.status}</div>
      <div className={styles.price}>Total price: ${order.totalPrice}</div>
      <div className={styles.date}>
        Date: {formatDateToWords(order.createdAt)}
      </div>
      <div className={styles.phone}>Phone: {order.phone}</div>
      <div className={styles.email}>Email: {order.email}</div>
      <div className={styles.transactionId}>
        Transaction Id: {order.transactionId}
      </div>
      {order.status === 'pending' && (
        <div>
          <a
            className={styles.link}
            href={order.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Make payment here
          </a>
        </div>
      )}
    </div>
  );
}

export default OrderItem;

/*
products name,
paid status
totalPrice
date
transaction Id

*/
