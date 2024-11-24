import React, { useState } from 'react';
import Styles from './contact.module.css';
import { useForm } from 'react-hook-form';
import { sendContactEmail } from '../../services/apiFashion';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMail } from '../../hooks/useMail';
import LoaderMini from '../../ui/LoaderMini';

function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, sendMail } = useMail();
  const onSubmit = (data) => {
    sendMail(data, {
      onSuccess: () => {
        reset();
        navigate('/shop', { replace: true });
      },
    });
  };
  return (
    <div className={Styles.contact_container}>
      <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
        <h2 className={Styles.Contact_heading}>Contact Me</h2>
        <div className={Styles.form_group}>
          <label className={Styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={Styles.input}
            disabled={isLoading}
            {...register('name', {
              required: 'This field is required',
            })}
          />
        </div>
        <div className="form-group">
          <label className={Styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={Styles.input}
            disabled={isLoading}
            {...register('email', {
              required: 'This field is required',
            })}
          />
        </div>
        <div className="form-group">
          <label className={Styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={Styles.textarea}
            disabled={isLoading}
            {...register('message', {
              required: 'This field is required',
            })}
          ></textarea>
        </div>
        <div className={Styles.button_center}>
          <button className={Styles.button} type="submit" disabled={isLoading}>
            <span className="center_spinner">
              Send Message {isLoading && <LoaderMini />}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
