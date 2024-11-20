import { useState } from 'react';
import SearchQueryProvider from '../../context/SearchQueryProvider';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import AdminNav from './AdminNav';
import DisplayContent from './DisplayContent';
import styles from './account.module.css';
import { useUser } from '../../hooks/useUser';
import Loader from '../../ui/Loader';
import { useNavigate } from 'react-router-dom';
// import { getLoggedInUser } from '../../services/apiFashion';

function Account() {
  const [showForm, setShowForm] = useState(false);
  const [session, setSession] = useState('add');
  const { isLoadind, user } = useUser();
  const navigate = useNavigate();
  const toggleForm = function (type = 'add') {
    setShowForm((showForm) => !showForm);
    setSession(type);
  };
  // useEffect(() => {
  //   const getUser = async function () {
  //     const user = await getLoggedInUser();
  //     return user;
  //   };
  //   const user = getUser();

  //   if (!user) navigate('/login');
  // }, [navigate]);

  // useEffect(() => {
  //   console.log('acccount');
  //   const checkUser = async () => {
  //     const user = await getLoggedInUser();
  //     console.log(user);
  //     if (!user) navigate('/login');
  //   };

  //   checkUser();
  // }, [navigate]);

  if (isLoadind) return <Loader />;
  if (!user) navigate('/login');

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
