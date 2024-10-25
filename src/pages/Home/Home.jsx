import { useState } from "react";
import Button from "../../components/Button";
import Styles from "./home.module.css";
import ShopItems from "../../components/ShopItems";

// const getImagePath = (name) => `/img/${name}`;

function Home() {
  const [overview, setOverview] = useState("Square4(1).jpg");
  // console.log(getImagePath("Portrait10(1).jpg"));

  const handleClick = () => {
    setOverview((overview) =>
      overview === "Square5(2).jpg" ? "Square7(2).jpg" : "Square5(2).jpg"
    );
  };
  return (
    <main className={Styles.home_main}>
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
                      src="/img/Square4(2).jpg"
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
                      src="/img/Hero3(2).jpg"
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
          <ShopItems
            type="for_her"
            images={[
              "Shop1(1).jpg",
              "Shop2(1).jpg",
              "Shop4(2).jpg",
              "Shop3(1).jpg",
            ]}
            custome_class={"home_shope_grid"}
          />
          <div>
            <h3 className={Styles.Shoping_second_heading}>For him</h3>
          </div>
          <ShopItems
            type="for_him"
            images={[
              "Shop8(1).jpg",
              "Shop12(1).jpeg",
              "Shop10(1).jpeg",
              "Shop11(1).jpeg",
            ]}
            custome_class={"home_shope_grid"}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
