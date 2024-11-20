import { HiBellAlert } from 'react-icons/hi2';
import { RiLogoutCircleLine } from 'react-icons/ri';
import styles from './account.module.css';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

function UserInfo() {
  const { isLoading: isLoadingUser, user } = useUser();
  const { isLoading: isLoggingOut, logout } = useLogout();
  const navigate = useNavigate();
  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        <RiLogoutCircleLine
          className={styles.logout}
          onClick={() => {
            logout(null, { onSuccess: navigate('/') });
          }}
        />
        <HiBellAlert className={styles.notification} />
        <span className={styles.name}>{user?.email}</span>
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
