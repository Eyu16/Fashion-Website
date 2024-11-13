import { useState } from 'react';
import Styles from './home.module.css';
import CollectionItem from './CollectionItems';
// import { getCollection } from '../../services/apiFashion';
function NewCollection({ collection }) {
  // console.log(collection, 'newCollection');
  const [overviewImg, setOverviewImg] = useState(() => {
    const path = collection?.hasBackendImage
      ? `${collection.resourceUrl}/`
      : `/img/`;
    console.log(`${path}${collection?.images?.[0]}`);
    return `${path}${collection?.images?.[0]}`;
  });
  const { filmImages } = collection;

  console.log(collection);

  const path = collection?.hasBackendImage
    ? `${collection.resourceUrl}/`
    : `/img/`;

  // const [overview, setOverview] = useState('Square4(1).jpg');
  const ChangeOverviewImage = (end) => {
    const img = collection.images.find((img) => img.endsWith(end));
    setOverviewImg(`${path}${img}`);
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
              <div className={Styles.figure_container}>
                {filmImages.map((img, i) => (
                  <CollectionItem
                    img={`${path}${img}`}
                    key={img}
                    name={collection.name}
                    photo_no={i}
                    ChangeOverviewImage={ChangeOverviewImage}
                  />
                ))}
              </div>
            </div>
          </div>
          <figure className={Styles.collection_view}>
            <img
              src={`${overviewImg}`}
              alt="Stylish person in checkered jacket 2"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
export default NewCollection;
