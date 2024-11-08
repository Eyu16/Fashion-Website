import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Styles from './home.module.css';

function OurFashion() {
  return (
    <section className={Styles.our_fashion}>
      <div className={Styles.our_fashion_container}>
        <div className={Styles.our_fashion_box}>
          <figure className={Styles.our_fashion_figure}>
            <img
              className={Styles.our_fashion_img}
              src="/img/Square1(1).jpg"
              alt="photo-2"
            />
          </figure>
          <div>
            <div className={Styles.our_fashion_heading}>
              <h3>Fashion, Event, Style</h3>
              <h2>Our new Collection</h2>
            </div>
            <p className={Styles.our_fashion_description}>
              Maraki,we believe that style knows no boundaries. Our brand
              embraces diversity, celebrating every shape, size, and identity
              with collections designed.
            </p>
          </div>
        </div>
        <div className={Styles.our_fashion_box}>
          <figure className={Styles.our_fashion_figure}>
            <img
              className={Styles.our_fashion_img}
              src="/img/Square1(1).jpg"
              alt="photo-2"
            />
          </figure>
          <div>
            <div className={Styles.our_fashion_heading}>
              <h3>Fashion, Event, Style</h3>
              <h2>Our new Collection</h2>
            </div>
            <p className={Styles.our_fashion_description}>
              Fashion should empower everyone to express their unique selves,
              and we strive to create a space where inclusivity is at the heart
              of everything we do.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.button_center}>
        <Link to="/contact">
          <Button type="button_secondary">Order Us</Button>
        </Link>
      </div>
    </section>
  );
}

export default OurFashion;
