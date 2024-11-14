import { useEffect } from 'react';
import Styles from './center.module.css';
function Center({ element }) {
  useEffect(function () {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);
  return <div className={Styles.center}>{element}</div>;
}

export default Center;
