import { useState } from 'react';
import SearchQueryProvider from '../../../context/SearchQueryProvider';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import AdminNav from './AdminNav';
import DisplayContent from './DisplayContent';
import styles from './account.module.css';

function Account() {
  const [showForm, setShowForm] = useState(false);
  const [session, setSession] = useState('add');
  const toggleForm = function (type = 'add') {
    setShowForm((showForm) => !showForm);
    setSession(type);
  };
  // const products = [];
  return (
    <SearchQueryProvider>
      <div className={styles.account}>
        <div className={styles.container}>
          <div className={styles.main_containt}>
            <AdminNav />
            <div className={styles.display}>
              <SearchBar />
              <DisplayContent
                showForm={showForm}
                toggleForm={toggleForm}
                session={session}
              />
            </div>
            <UserInfo />
          </div>
        </div>
      </div>
    </SearchQueryProvider>
  );
}

export default Account;
