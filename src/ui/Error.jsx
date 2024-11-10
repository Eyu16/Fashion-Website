import { Link, useRouteError } from 'react-router-dom';
import { HiMiniExclamationTriangle } from 'react-icons/hi2';

import styles from './error.module.css';

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorHeading}>Oops! Something went wrong</h1>
      <HiMiniExclamationTriangle className={styles.errorIcon} />
      <a href="/" className={styles.homeLink}>
        Go back to Home
      </a>
    </div>
  );
}

export default Error;
