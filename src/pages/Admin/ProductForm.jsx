import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './productForm.module.css';
import toast from 'react-hot-toast';
import { convertToFormData, formatToJSON } from '../../utils/helpers';
import { creatProduct } from '../../services/apiFashion';
import { useNavigate } from 'react-router-dom';

function ProductForm({ type, toggleForm, product }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: type === 'edit' ? {} : {},
  });

  const onSubmit = async (data) => {
    try {
      // console.log(data);
      // data.image = data.image[0];
      // data.detailImage = data.detailImage[0];
      data.productDetails = formatToJSON(data.productDetails);
      data = convertToFormData(data);
      const product = await creatProduct(data);
      console.log(product);
      toast.success('Product has been submitted successfully!');
      reset('');
      navigate(`/shop/${product.gender.toLowerCase()}s/products/${product.id}`);
    } catch (error) {
      toast.error(error.message);
    }
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
                {...register('gender', { required: 'Gender is required' })}
              />
              Men
            </label>
            <label className={Styles.radioLabel}>
              <input type="radio" value="Women" {...register('gender')} />
              Women
            </label>
            <label className={Styles.radioLabel}>
              <input type="radio" value="Unisex" {...register('gender')} />
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
            {...register('image', { required: 'Product image is required' })}
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
            {...register('detailImage', {
              required: 'Detail image is required',
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
            {...register('productDetails', {
              required: 'Product details are required',
            })}
          ></textarea>
          {errors.productDetails && (
            <p className={Styles.error}>{errors.productDetails.message}</p>
          )}
        </div>

        <div className={Styles.buttonCenter}>
          <button type="submit" className={Styles.add}>
            {type === 'add' ? 'Add' : 'Edit'}
          </button>
          <button type="reset" className={Styles.cancel} onClick={toggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
