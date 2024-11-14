import { Outlet } from 'react-router-dom';
import styles from './account.module.css';

function DisplayContent({ showForm, toggleForm, session }) {
  return (
    <div className={styles.display_content}>
      <Outlet context={{ showForm, toggleForm, session }} />
    </div>
  );
}

export default DisplayContent;
