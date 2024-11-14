import { HiBellAlert } from 'react-icons/hi2';
import styles from './account.module.css';

function UserInfo() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        <HiBellAlert className={styles.notification} />
        <span className={styles.name}>Eyoba Yihalem</span>
        <figure className={styles.imgContainer}>
          <img
            src="/img/default.jpg"
            className={styles.profile}
            alt="profile"
          />
        </figure>
      </div>
    </div>
  );
}

export default UserInfo;
