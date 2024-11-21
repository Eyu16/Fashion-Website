import React, { useState } from 'react';
import Styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLogin } from '../../hooks/useLogin';
import { useSignup } from '../../hooks/useSignup';
import LoaderMini from '../../ui/LoaderMini';

function Login({ type }) {
  const { register, handleSubmit, reset, watch } = useForm();
  const password = watch('password');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading: isLoggingIn, login } = useLogin();
  const { isLoading: isSigningUp, signup } = useSignup();
  const isLoading = isLoggingIn || isSigningUp;

  const onSubmit = (data) => {
    if (type === 'signup')
      signup(
        { data, type },
        {
          onSuccess: (user) => {
            reset();
            navigate('/account', { replace: true });
          },
        }
      );
    if (type === 'login')
      login(
        { data, type },
        {
          onSuccess: (user) => {
            reset();
            navigate('/account', { replace: true });
          },
        }
      );
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
            disabled={isLoggingIn || isSigningUp}
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
              disabled={isLoggingIn || isSigningUp}
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
          <button
            className={Styles.button}
            type="submit"
            disabled={isLoggingIn || isSigningUp}
          >
            {isLoading ? <LoaderMini /> : type}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
