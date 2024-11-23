import { useState } from 'react';
import styles from './orderAdmin.module.css';
import OrderItem from './OrderItem';
import { useOrders } from '../../hooks/useOrders';
import Loader from '../../ui/Loader';
import { filterOrders } from '../../utils/helpers';
import { useSearchQueryCustome } from '../../context/SearchQueryProvider';
function OrderAdmin() {
  const { isLoading, orders } = useOrders();
  const [filterBy, setFilterBy] = useState('all');
  const { query } = useSearchQueryCustome();

  let filterdOrders =
    filterBy === 'all' ? orders : filterOrders(orders, filterBy, 'status');
  filterdOrders =
    query.length < 4
      ? filterdOrders
      : filterOrders(filterdOrders, query, 'transactionId');
  // const searchedOrder =

  if (isLoading) return <Loader />;

  return (
    <div className={styles.orderContianer}>
      <div className={styles.orderFilter}>
        <ul className={styles.lists}>
          <li
            onClick={() => setFilterBy('all')}
            className={`${styles.list} ${filterBy === 'all' ? 'active' : ''}`}
          >
            All
          </li>
          <li
            onClick={() => setFilterBy('pending')}
            className={`${styles.list} ${
              filterBy === 'pending' ? 'active' : ''
            }`}
          >
            Pending
          </li>
          <li
            onClick={() => setFilterBy('paid')}
            className={`${styles.list} ${filterBy === 'paid' ? 'active' : ''}`}
          >
            Paid
          </li>
        </ul>
      </div>
      <div className={styles.orders}>
        {filterdOrders?.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

export default OrderAdmin;
