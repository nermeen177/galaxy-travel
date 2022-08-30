import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-container__back-ground">
        <div className="form-container__layer"></div>
        <form className="contact-form">
          <h1 className="contact-form__header">Welcome!</h1>
          <input
            type="text"
            placeholder="enter your name"
            className="contact-form__input"
            required
          />
          <input
            type="email"
            placeholder="enter your email"
            className="contact-form__input"
            required
          />
          <button type="submit" className="contact-form__btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
