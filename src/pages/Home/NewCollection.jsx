import { useState } from 'react';
import Styles from './home.module.css';
import CollectionItem from './CollectionItems';
// import { getCollection } from '../../services/apiFashion';
function NewCollection({ collection }) {
  const [overviewImg, setOverviewImg] = useState(collection?.images?.[0]);
  const { filmImages } = collection;
  // const [overview, setOverview] = useState('Square4(1).jpg');
  const ChangeOverviewImage = (index) => {
    setOverviewImg(collection?.images[index]);
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
                    img={img}
                    key={img}
                    name={collection.name}
                    photo_no={i}
                    ChangeOverviewImage={ChangeOverviewImage}
                  />
                ))}
                {/* <figure className={Styles.filmstrip_image_container}>
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
                </figure> */}
              </div>
            </div>
          </div>
          <figure className={Styles.collection_view}>
            <img
              src={`/img/${overviewImg}`}
              alt="Stylish person in checkered jacket 2"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

// export async function loader() {
//   const collections = await getCollections();
//   return collections;
// }

export default NewCollection;
