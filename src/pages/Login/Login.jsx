import React, { useState } from "react";
import Styles from "./login.module.css";
// import { formatDate } from "tough-cookie";
import { Link } from "react-router-dom";
function Login({ type }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={Styles.login_container}>
      <form className={Styles.form}>
        <h2 className={Styles.login_heading}>
          {type === "login" ? "Log in" : "Sign up"}
        </h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className={Styles.eye_center}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            ></input>

            <img
              className={`${Styles.eye_icon} ${
                Styles[formData.password ? "visible" : ""]
              }`}
              src={`/img/${showPassword ? "off" : "on"}.svg`}
              alt="eye"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            />
          </div>
          <p className={Styles.suggestion}>
            If you {type === "login" ? "do not" : "already"} have an account,
            please
            <Link to={`/${type === "login" ? "signup" : "login"}`}>
              {" "}
              {type === "login" ? "signup" : "login"}
            </Link>{" "}
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
