import React from "react";
import Styles from "./about.module.css";

function About() {
  return (
    <div className={Styles.about_container}>
      <h1 className={Styles.about_heading}>About Maraki Fashion</h1>
      <div className={Styles.about_description_container}>
        <p className={Styles.about_description}>
          At Maraki Fashion, we believe that style is a reflection of who you
          are. Founded with the vision to bring unique and contemporary fashion
          to everyone, we curate collections that inspire confidence and
          self-expression. Our mission is to provide high-quality, trendy
          apparel that fits every occasion, from casual outings to elegant
          events.
        </p>
        <p className={Styles.about_description}>
          Our dedicated team of designers and fashion enthusiasts work
          tirelessly to source the finest materials and create pieces that not
          only look good but feel good too. We pride ourselves on our commitment
          to sustainability, ensuring that our production processes respect the
          environment and promote ethical practices.
        </p>
        <p className={Styles.about_description}>
          Join us on this stylish journey, where fashion meets passion. Whether
          you’re looking to revamp your wardrobe or find the perfect outfit for
          a special occasion, Maraki Fashion is here to help you express your
          unique style with flair.
        </p>
      </div>
    </div>
  );
}

export default About;
