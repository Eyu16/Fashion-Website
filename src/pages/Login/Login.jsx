import React, { useState } from 'react';
import Styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { singupLogin } from '../../services/apiFashion';
import toast from 'react-hot-toast';
import { formatDuplicateFieldError } from '../../utils/helpers';
function Login({ type }) {
  const { register, handleSubmit, reset, getValues, formState, watch } =
    useForm();
  const { errors } = formState;
  const password = watch('password');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data) => {
    let user;
    try {
      if (type === 'signup') {
        console.log(type);
        user = await singupLogin(data, type);
        toast.success('Sign-up successful! Welcome aboard!');
      }
      if (type === 'login') {
        user = await singupLogin(data, type);
        toast.success('Login successful! Welcome back!');
      }
      reset();
      navigate('/shop', { replace: true });
    } catch (error) {
      console.log(error.message);
      toast.error(formatDuplicateFieldError(error.message));
    }
  };
  return (
    <div className={Styles.login_container}>
      <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
        <h2 className={Styles.login_heading}>
          {type === 'login' ? 'Log in' : 'Sign up'}
        </h2>
        <div className="form-group">
          <label className={Styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={Styles.input}
            {...register('email', {
              required: 'This field is required',
            })}
          />
        </div>
        <div className="form-group">
          <label className={Styles.label} htmlFor="password">
            Password
          </label>
          <div className={Styles.eye_center}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className={Styles.input}
              {...register('password', {
                required: 'This field is required',
              })}
            ></input>

            <img
              className={`${Styles.eye_icon} ${
                Styles[password ? 'visible' : '']
              }`}
              src={`/img/${showPassword ? 'off' : 'on'}.svg`}
              alt="eye"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            />
          </div>
          <p className={Styles.suggestion}>
            If you {type === 'login' ? 'do not' : 'already'} have an account,
            please
            <Link to={`/${type === 'login' ? 'signup' : 'login'}`}>
              {' '}
              {type === 'login' ? 'signup' : 'login'}
            </Link>{' '}
            here
          </p>
        </div>
        <div className={Styles.button_center}>
          <button className={Styles.button} type="submit">
            {type}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
