import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  formatedProductName,
  getSelectedCollection,
} from '../../utils/helpers';
import styles from './account.module.css';
import {
  selectCollection as selectCollectionApi,
  deleteCollection as deleteCollectionApi,
  getCollections,
} from '../../services/apiFashion';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../ui/ConfirmationModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoaderMini from '../../ui/LoaderMini';
function CollectionItem({ collection, onSetCollection }) {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isSelecting, mutate: selectCollection } = useMutation({
    mutationFn: selectCollectionApi,
    onSuccess: () => {
      toast.success('Collection has been selected successfully!');
      queryClient.invalidateQueries('collections');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const { isLoading: isDeleteing, mutate: deleteCollection } = useMutation({
    mutationFn: deleteCollectionApi,
    onSuccess: () => {
      toast.success('Collection has been selected successfully!');
      queryClient.invalidateQueries('collections');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const image = collection?.hasBackendImage
    ? `${collection.resourceUrl}/${collection.filmImages[0]}`
    : `/img/${collection.filmImages[0]}`;

  const handleSelect = function () {
    selectCollection(collection.id);
  };

  const handleDelete = async function () {
    const collections = await getCollections();
    const previousSelected = await getSelectedCollection(collections);
    if (previousSelected.id !== collection.id) setShowModal(true);
    else toast.error('Please select another collection before deleting!');
  };

  return (
    <div className={styles.item}>
      <figure className={styles.collection_img_container}>
        <img
          className={styles.collection_img}
          src={image}
          alt={`${collection.name}-photo`}
        />
      </figure>
      <div className={styles.item_description}>
        <span className={styles.item_name}>
          {formatedProductName(collection.name)}
        </span>
        {/* <span className={styles.item_price}>${product.price}</span> */}
      </div>
      <div className={styles.edit_buttons}>
        <button
          disabled={isSelecting || isDeleteing}
          onClick={handleSelect}
          className={styles.edit_button}
        >
          {isSelecting ? (
            <span>
              Select <LoaderMini />
            </span>
          ) : (
            'Select'
          )}
        </button>
        <button
          disabled={isSelecting || isDeleteing}
          onClick={handleDelete}
          className={styles.remove_button}
        >
          Remove
        </button>
      </div>
      {showModal && (
        <ConfirmationModal>
          <ConfirmationModal.ConfirmationRequest text="Are you sure you want to delete this collection?" />
          <ConfirmationModal.Buttons>
            <ConfirmationModal.Button
              type="cancel_button"
              text="Cancel"
              onClick={() => setShowModal(false)}
            />
            <ConfirmationModal.Button
              type="confirm_button"
              text="Confirm"
              onClick={() => deleteCollection(collection.id)}
            />
          </ConfirmationModal.Buttons>
        </ConfirmationModal>
      )}
    </div>
  );
}

export default CollectionItem;
