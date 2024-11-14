import Styles from './center.module.css';
import useNoUnderneathScroll from '../hooks/useNoUnderneathScroll';
function Center({ element }) {
  useNoUnderneathScroll();
  return <div className={Styles.center}>{element}</div>;
}

export default Center;
