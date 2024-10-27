import { useState } from "react";
import Styles from "./home.module.css";
function NewCollection() {
  const [overview, setOverview] = useState("Square4(1).jpg");
  // console.log(getImagePath("Portrait10(1).jpg"));

  const handleClick = () => {
    setOverview((overview) =>
      overview === "Square5(2).jpg" ? "Square7(2).jpg" : "Square5(2).jpg"
    );
  };
  return (
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
  );
}

export default NewCollection;
