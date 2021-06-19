import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1><span>Contact Us</span></h1>
      <p className="instructions">
        If you have any questions or inquiries about any of our services please
        feel free to send us an email with your name and phone number and we
        will get back to you as soon as possible. Thank you!
      </p>
      <div className="contact-wrapper">
        <form className="form-wrapper">
          <div className="question-wrapper">
            <label className="form-label">Name <strong className="required"> *</strong></label>
            <input
              type="text"
              name="name"
              size="50"
              className="contact-input"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">Email <strong className="required"> *</strong></label>
            <input
              type="email"
              name="email"
              size="50"
              className="contact-input"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">Phone Number <strong className="required"> *</strong></label>
            <input
              type="tel"
              name="phone"
              size="50"
              className="contact-input"
              placeholder="xxx-xxx-xxxx"
              required
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">Preferred Contact Method <strong className="required"> *</strong></label>
            <label htmlFor="email" className="radio-label">Email</label>
            <input type="radio" id="emailradio" name="contactmethod" value="email" className="contact-radio" required/>
            <label htmlFor="phone" className="radio-label">Phone Number</label>
            <input type="radio" id="phoneradio" name="contactmethod" value="phone" className="contact-radio"/>
          </div>
          <div className="question-wrapper">
            <label className="form-label">Question <strong className="required"> *</strong></label>
            <textarea rows="4" cols="25" className="contact-input" placeholder="Type question here" required></textarea>
          </div>
          <div className="button-wrapper">
            <input
              type="submit"
              value="Submit"
              className="btn submit"
            />
            <input type="reset" value="Clear" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};
