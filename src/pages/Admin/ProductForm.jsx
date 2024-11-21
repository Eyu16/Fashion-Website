import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './productForm.module.css';
import toast from 'react-hot-toast';
import { formatProductDetails } from '../../utils/helpers';
import { creatProduct, editProduct } from '../../services/apiFashion';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import LoaderMini from '../../ui/LoaderMini';

function ProductForm({ type, toggleForm, product }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:
      type === 'edit'
        ? {
            ...product,
            productDetails: formatProductDetails(product.productDetails),
          }
        : {},
  });

  const { isLoading, mutate } = useMutation({
    mutationFn: type === 'edit' ? editProduct : creatProduct,
    onSuccess: (product) => {
      type === 'edit'
        ? toast.success('Product has been submitted successfully!')
        : toast.success('Product has been updated successfully!');
      reset();
      navigate(`/shop/${product.gender.toLowerCase()}s/products/${product.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = function (data) {
    // console.log(data);
    mutate(data);
  };

  return (
    <div className={Styles.productFormContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
        <h2 className={Styles.formHeading}>
          {type === 'add' ? 'Add New Product' : 'Edit Product'}
        </h2>

        {/* Name */}
        <div className={Styles.formGroup}>
          <label htmlFor="name" className={Styles.label}>
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={Styles.input}
            disabled={isLoading}
            {...register('name', { required: 'Product name is required' })}
          />
          {errors.name && <p className={Styles.error}>{errors.name.message}</p>}
        </div>

        {/* Description */}
        <div className={Styles.formGroup}>
          <label htmlFor="description" className={Styles.label}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className={Styles.textarea}
            disabled={isLoading}
            {...register('description', {
              required: 'Description is required',
            })}
          ></textarea>
          {errors.description && (
            <p className={Styles.error}>{errors.description.message}</p>
          )}
        </div>

        {/* Summary */}
        <div className={Styles.formGroup}>
          <label htmlFor="summary" className={Styles.label}>
            Summary
          </label>
          <input
            type="text"
            id="summary"
            name="summary"
            className={Styles.input}
            disabled={isLoading}
            {...register('summary', { required: 'Summary is required' })}
          />
          {errors.summary && (
            <p className={Styles.error}>{errors.summary.message}</p>
          )}
        </div>

        {/* Price */}
        <div className={Styles.formGroup}>
          <label htmlFor="price" className={Styles.label}>
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className={Styles.input}
            disabled={isLoading}
            {...register('price', { required: 'Price is required' })}
          />
          {errors.price && (
            <p className={Styles.error}>{errors.price.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className={Styles.formGroup}>
          <label className={Styles.label}>Gender</label>
          <div className={Styles.radioGroup}>
            <label className={Styles.radioLabel}>
              <input
                type="radio"
                value="Men"
                disabled={isLoading}
                {...register('gender', { required: 'Gender is required' })}
              />
              Men
            </label>
            <label className={Styles.radioLabel}>
              <input
                type="radio"
                value="Women"
                disabled={isLoading}
                {...register('gender')}
              />
              Women
            </label>
            <label className={Styles.radioLabel}>
              <input
                type="radio"
                value="Unisex"
                disabled={isLoading}
                {...register('gender')}
              />
              Unisex
            </label>
          </div>
          {errors.gender && (
            <p className={Styles.error}>{errors.gender.message}</p>
          )}
        </div>

        {/* Image */}
        <div className={Styles.formGroup}>
          <label htmlFor="image" className={Styles.label}>
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className={Styles.fileInput}
            disabled={isLoading}
            {...register('image', {
              required: type === 'edit' ? false : 'Product image is required',
            })}
          />
          {errors.image && (
            <p className={Styles.error}>{errors.image.message}</p>
          )}
        </div>

        {/* Detail Image */}
        <div className={Styles.formGroup}>
          <label htmlFor="detailImage" className={Styles.label}>
            Detail Image
          </label>
          <input
            type="file"
            id="detailImage"
            name="detailImage"
            className={Styles.fileInput}
            disabled={isLoading}
            {...register('detailImage', {
              required: type === 'edit' ? false : 'Detail image is required',
            })}
          />
          {errors.detailImage && (
            <p className={Styles.error}>{errors.detailImage.message}</p>
          )}
        </div>

        {/* Product Details */}
        <div className={Styles.formGroup}>
          <label htmlFor="productDetails" className={Styles.label}>
            Product Details
          </label>
          <textarea
            id="productDetails"
            name="productDetails"
            className={Styles.textarea}
            disabled={isLoading}
            {...register('productDetails', {
              required: 'Product details are required',
            })}
          ></textarea>
          {errors.productDetails && (
            <p className={Styles.error}>{errors.productDetails.message}</p>
          )}
        </div>

        <div className={Styles.buttonCenter}>
          <button type="submit" className={Styles.add} disabled={isLoading}>
            {isLoading ? (
              <span>
                update <LoaderMini />
              </span>
            ) : type === 'add' ? (
              'Add'
            ) : (
              'Update'
            )}
          </button>
          <button
            type="reset"
            className={Styles.cancel}
            onClick={toggleForm}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
