import { useState } from 'react';
import styles from './orderAdmin.module.css';
import OrderItem from './OrderItem';
import { useOrders } from '../../hooks/useOrders';
import Loader from '../../ui/Loader';
import { filterOrders } from '../../utils/helpers';
function OrderAdmin() {
  const { isLoading, orders } = useOrders();
  const [filterBy, setFilterBy] = useState('all');
  const filterdOrder =
    filterBy === 'all' ? orders : filterOrders(orders, filterBy);
  if (isLoading) return <Loader />;

  return (
    <div className={styles.orderContianer}>
      <div className={styles.orderFilter}>
        <ul className={styles.lists}>
          <li onClick={() => setFilterBy('all')} className={styles.list}>
            All
          </li>
          <li onClick={() => setFilterBy('pending')} className={styles.list}>
            Pending
          </li>
          <li onClick={() => setFilterBy('paid')} className={styles.list}>
            Paid
          </li>
        </ul>
      </div>
      <div className={styles.orders}>
        {filterdOrder?.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrderAdmin;
