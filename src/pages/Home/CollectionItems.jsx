import Styles from './home.module.css';

function CollectionItem({ img, name, photo_no, ChangeOverviewImage }) {
  // cl
  return (
    <figure
      className={Styles.filmstrip_image_container}
      onClick={() => {
        const end = img.split('-').at(-1);
        console.log(end);
        ChangeOverviewImage(end);
      }}
    >
      <img src={img} alt={`${name}-${photo_no + 1}`} />
    </figure>
  );
}

export default CollectionItem;
