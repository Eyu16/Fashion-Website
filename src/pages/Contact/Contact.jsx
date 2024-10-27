import React, { useState } from "react";
import Styles from "./contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={Styles.contact_container}>
      <form className={Styles.form}>
        <h2 className={Styles.Contact_heading}>Contact Me</h2>
        <div className={Styles.form_group}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={Styles.button_center}>
          <button className={Styles.button} type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
