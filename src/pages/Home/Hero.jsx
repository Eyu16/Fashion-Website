import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Styles from './home.module.css';
function Hero() {
  return (
    <section className={Styles.section_hero}>
      <div className={`${Styles.hero_slider} ${Styles.hero_slider_1}`}>
        <h2 className={Styles.seconday_heading}>
          Define Your Look, Define Your Life
        </h2>
        <h1 className={Styles.primary_heading}>
          Maraki Fashion – Discover the Finest Collection for Every Occasion
        </h1>
        <div className={Styles.buttons}>
          <Link to="/shop">
            <Button type="button_primary">Shop Now</Button>
          </Link>
          <Link to="/about">
            <Button type="button_secondary">About Us</Button>
          </Link>
        </div>
      </div>
      <div className={`${Styles.hero_slider} ${Styles.hero_slider_2}`}>
        <h2 className={Styles.seconday_heading}>Your Style, Your Story</h2>
        <h1 className={Styles.primary_heading}>
          Shop Our Latest Arrivals And Discover Unique Pieces That Elevate Your
          Style.
        </h1>
        <div className={Styles.buttons}>
          <Link to="/shop">
            <Button type="button_primary">Shop Now</Button>
          </Link>
          <Link to="/about">
            <Button type="button_secondary">About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
