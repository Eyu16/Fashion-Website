import { useState } from "react";
import Button from "../ui/Button";
import Styles from "./home.module.css";
function Home() {
  const [overview, setOverview] = useState("Square4(1).jpg");

  const handleClick = () => {
    setOverview((overview) =>
      overview === "Square4(1).jpg" ? "Hero3(1).jpeg" : "Square4(1).jpg"
    );
  };
  return (
    <>
      <section className={Styles.section_hero}>
        <div className={`${Styles.hero_slider} ${Styles.hero_slider_1}`}>
          <h2 className={Styles.seconday_heading}>
            Define Your Look, Define Your Life
          </h2>
          <h1 className={Styles.primary_heading}>
            Maraki Fashion – Discover the Finest Collection for Every Occasion
          </h1>
          <div className={Styles.buttons}>
            <Button type="button_primary">Shop Now</Button>
            <Button type="button_secondary">About Us</Button>
          </div>
        </div>
        <div className={`${Styles.hero_slider} ${Styles.hero_slider_2}`}>
          <h2 className={Styles.seconday_heading}>Your Style, Your Story</h2>
          <h1 className={Styles.primary_heading}>
            Shop our latest arrivals and discover unique pieces that elevate
            your style.
          </h1>
          <div className={Styles.buttons}>
            <Button type="button_primary">Shop Now</Button>
            <Button type="button_secondary">About Us</Button>
          </div>
        </div>
      </section>
      <section className={Styles.fashion}>
        <div className={Styles.fashion_container}>
          <h1>Fashion In Action</h1>
          <div className={Styles.gallary}>
            <figure className={`${Styles.gallary_figure}`}>
              <img
                className={Styles.gallary_img}
                src="/img/Portrait10(1).jpg"
                alt="show-off"
              />
            </figure>
            <figure className={`${Styles.gallary_figure}`}>
              <img
                className={Styles.gallary_img}
                src="/img/Portrait15(1).jpg"
                alt="show-off"
              />
            </figure>
            <figure className={`${Styles.gallary_figure} `}>
              <img
                className={Styles.gallary_img}
                src="/img/Portrait14(1).jpg"
                alt="show-off"
              />
            </figure>
            <figure className={`${Styles.gallary_figure} `}>
              <img
                className={Styles.gallary_img}
                src="/img/Portrait2(1).jpg"
                alt="show-off"
              />
            </figure>
          </div>
        </div>
      </section>
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
                and we strive to create a space where inclusivity is at the
                heart of everything we do.
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.button_center}>
          <Button type="button_secondary">Order Us</Button>
        </div>
      </section>
      <section className={Styles.newest_collection}>
        <div className={Styles.collection_container}>
          <h2 className={Styles.collection_heading}>
            Newest Collections
            <br />
            Best of Maraki
          </h2>
          <div className={Styles.collection_grid}>
            <div className={Styles.filmstrip_container}>
              <div className={Styles.filmstrip}>
                <div className={Styles.figure_container} onClick={handleClick}>
                  <figure className={Styles.filmstrip_image_container}>
                    <img
                      src="/img/Square9(1).jpeg"
                      alt="Stylish person in checkered jacket"
                    />
                  </figure>
                  <figure className={Styles.filmstrip_image_container}>
                    <img
                      src="/img/Square6(1).jpeg"
                      alt="Stylish person in checkered jacket"
                    />
                  </figure>
                  <figure className={Styles.filmstrip_image_container}>
                    <img
                      src="/img/Portrait11(1).jpeg"
                      alt="Stylish person in checkered jacket"
                    />
                  </figure>
                  <figure className={Styles.filmstrip_image_container}>
                    <img
                      src="/img/Square5(1).jpeg"
                      alt="Stylish person in checkered jacket"
                    />
                  </figure>
                  <figure className={Styles.filmstrip_image_container}>
                    <img
                      src="/img/Square7(1).jpeg"
                      alt="Stylish person in checkered jacket"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <figure className={Styles.collection_view}>
              <img
                src={`/img/${overview}`}
                alt="Stylish person in checkered jacket 2"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className={Styles.shop_overview}>
        <h2 className={Styles.shop_heading}>
          Time To get What you are looking for
        </h2>
        <div className={Styles.shoping_container}>
          <div>
            <h3 className={Styles.Shoping_second_heading}>For her</h3>
          </div>
          <div className={`${Styles.shop_for} ${Styles.for_her}`}>
            <div className={Styles.shoping_card}>
              <figure>
                <img src="/img/Shop1(1).jpg" alt="shop" />
              </figure>
              <h4>Netela Dress</h4>
              <span>250$</span>
            </div>
            <div className={Styles.shoping_card}>
              <figure>
                <img src="/img/Shop2(1).jpg" alt="shop" />
              </figure>
              <h4>Netela Dress</h4>
              <span>250$</span>
            </div>
            <div className={Styles.shoping_card}>
              <figure>
                <img src="/img/Shop4(1).jpg" alt="shop" />
              </figure>
              <h4>Netela Dress</h4>
              <span>250$</span>
            </div>
            <div className={Styles.shoping_card}>
              <figure>
                <img src="/img/Shop3(1).jpg" alt="shop" />
              </figure>
              <h4>Netela Dress</h4>
              <span>250$</span>
            </div>
          </div>
          <div>
            <h3 className={Styles.Shoping_second_heading}>For him</h3>
          </div>
          <div className={`${Styles.shop_for} ${Styles.for_him}`}>
            <div className={Styles.shoping_card}>
              <figure>
                <img src="/img/Shop8(1).jpg" alt="shop" />
              </figure>
              <h4>Netela Dress</h4>
              <span>250$</span>
            </div>
            <div className={Styles.shoping_card}>
              <figure>
                <img src="/img/Shop12(1).jpeg" alt="shop" />
              </figure>
              <h4>Netela Dress</h4>
              <span>250$</span>
            </div>
            <div className={Styles.shoping_card}>
              <figure>
                <img src="/img/Shop10(1).jpeg" alt="shop" />
              </figure>
              <h4>Netela Dress</h4>
              <span>250$</span>
            </div>
            <div className={Styles.shoping_card}>
              <figure>
                <img src="/img/Shop11(1).jpeg" alt="shop" />
              </figure>
              <h4>Netela Dress</h4>
              <span>250$</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
