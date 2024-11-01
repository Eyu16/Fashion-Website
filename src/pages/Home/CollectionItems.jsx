import Styles from './home.module.css';

function CollectionItem({ img, name, photo_no, ChangeOverviewImage }) {
  // cl
  return (
    <figure
      className={Styles.filmstrip_image_container}
      onClick={() => ChangeOverviewImage(photo_no)}
    >
      <img src={`/img/${img}`} alt={`${name}-${photo_no + 1}`} />
    </figure>
  );
}

export default CollectionItem;
