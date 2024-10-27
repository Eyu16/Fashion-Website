import Styles from "./home.module.css";
function Fashion() {
  return (
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
  );
}

export default Fashion;
