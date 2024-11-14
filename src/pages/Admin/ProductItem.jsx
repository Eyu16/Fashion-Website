import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formatedProductName } from '../../utils/helpers';
import styles from './account.module.css';
import { deleteProduct } from '../../services/apiFashion';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../ui/ConfirmationModal';
import { useState } from 'react';
function ProductItem({ product, toggleForm, onSetProduct }) {
  const [showModal, setShowModal] = useState(false);

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success('Product has been delete successfully!');
      queryClient.invalidateQueries('products');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const image = product?.hasBackendImage
    ? `${product.resourceUrl}/${product.image}`
    : `/img/${product.image}`;

  const handleEdit = function () {
    toggleForm('edit');
    onSetProduct(product);
  };

  const handleDelete = function () {
    setShowModal(true);
  };

  return (
    <div className={styles.item}>
      <figure className={styles.item_img_container}>
        <img
          className={styles.item_img}
          src={image}
          alt={`${product.name}-photo`}
        />
      </figure>
      <div className={styles.item_description}>
        <span className={styles.item_name}>
          {formatedProductName(product.name)}
        </span>
        <span className={styles.item_price}>${product.price}</span>
      </div>
      <div className={styles.edit_buttons}>
        <button
          disabled={isLoading}
          onClick={handleEdit}
          className={styles.edit_button}
        >
          Edit
        </button>
        <button
          disabled={isLoading}
          onClick={handleDelete}
          className={styles.remove_button}
        >
          Remove
        </button>
      </div>
      {showModal && (
        <ConfirmationModal>
          <ConfirmationModal.ConfirmationRequest text="Are you sure you want to delete this product?" />
          <ConfirmationModal.Buttons>
            <ConfirmationModal.Button
              type="cancel_button"
              text="Cancel"
              onClick={() => setShowModal(false)}
            />
            <ConfirmationModal.Button
              type="confirm_button"
              text="Confirm"
              onClick={() => mutate(product.id)}
            />
          </ConfirmationModal.Buttons>
        </ConfirmationModal>
      )}
    </div>
  );
}

export default ProductItem;
