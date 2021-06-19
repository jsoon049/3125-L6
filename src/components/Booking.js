import React from "react";
import "./Booking.css";

export const Booking = () => {
  return (
    <div className="booking" id="booking">
      <h1><span>Book an Appointment</span></h1>
      <div className="booking-wrapper">
        <form className="booking-form-wrapper">
          <div className="booking-outer">
            <div className="booking-inner">
              <label className="booking-form-label">
                First Name
                <strong className="required"> *</strong>
              </label>
              <input
                type="text"
                name="first name"
                size="20"
                className="booking-input"
                required
                placeholder="John"
              />
            </div>
            <div className="booking-inner">
              <label className="booking-form-label">
                Last Name
                <strong className="required"> *</strong>
              </label>
              <input
                type="text"
                name="last name"
                size="20"
                className="booking-input"
                required
                placeholder="Doe"
              />
            </div>
            <div className="booking-inner last">
              <label className="booking-form-label">
                Age
                <strong className="required"> *</strong>
              </label>
              <input
                type="text"
                name="age"
                size="20"
                className="booking-input"
                required
                placeholder="20"
              />
            </div>
          </div>
          <div className="booking-outer">
            <div className="booking-inner">
              <label className="booking-form-label">
                Email
                <strong className="required"> *</strong>
              </label>
              <input
                type="email"
                name="email"
                size="50"
                className="booking-input"
                required
                placeholder="email@example.com"
              />
            </div>
            <div className="booking-inner last">
              <label className="booking-form-label">
                Phone Number
                <strong className="required"> *</strong>
              </label>
              <input
                type="tel"
                name="phonenumber"
                size="50"
                className="booking-input"
                required
                placeholder="xxx-xxx-xxxx"
              />
            </div>
          </div>
          <div className="booking-outer">
            <div className="booking-inner">
              <label className="booking-form-label">
                Date
                <strong className="required"> *</strong>
              </label>
              <input
                type="date"
                name="date"
                size="50"
                className="booking-input date-time"
                placeholder="yyyy-mm-dd"
                required
              />
            </div>
            <div className="booking-inner last">
              <label className="booking-form-label">
               Time
                <strong className="required"> *</strong>
              </label>
              <input
                type="time"
                name="time"
                size="50"
                className="booking-input date-time"
                placeholder="hh-mm"
                required
              />
            </div>
          </div>
          <div className="services-drop">
            <label className="booking-form-label">
              Service
              <strong className="required"> *</strong>
            </label>
            <select
              name="booking-service"
              id="booking-service"
              className="booking-input"
            >
              <option defaultValue></option>
              <option value="Chiropractics">Chiropractics</option>
              <option value="MassageTherapy">Massage Therapy</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Acupuncture">Acupuncture</option>
              <option value="CustomKneeBracing">Custom Knee Bracing</option>
              <option value="CustomOrthotics">Custom Orthotics</option>
            </select>
          </div>
          <div className="services-drop">
            <label className="booking-form-label">Any Additional Info We Should Know</label>
            <textarea rows="4" cols="25" className="contact-input" placeholder="Type here"></textarea>
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
