import { useEffect, useState } from 'react';
import Styles from './home.module.css';
import CollectionItem from './CollectionItems';
import { useQuery } from '@tanstack/react-query';
import { getCollection, getCollections } from '../../services/apiFashion';
import Loader from '../../ui/Loader';
import { getSelectedCollection } from '../../utils/helpers';
// import { getCollection } from '../../services/apiFashion';
function NewCollection() {
  const { isLoading, data: collections } = useQuery({
    queryKey: ['collection'],
    queryFn: getCollections,
  });
  const collection = getSelectedCollection(collections);
  const [overviewImg, setOverviewImg] = useState();

  useEffect(
    function () {
      const path = collection?.hasBackendImage
        ? `${collection.resourceUrl}/`
        : `/img/`;
      setOverviewImg(`${path}${collection?.images?.[0]}`);
    },
    [collection]
  );

  if (isLoading) return <Loader />;

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
              src={`${overviewImg}`}
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
