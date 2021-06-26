import React from "react";
import "./Booking.css";

export const Payment = ( props ) => {
  return (
    <div className="payment-container">
      <h2 className="payment-title">
        <span>Payment Details</span>
        <span className="material-icons payment-icon">credit_card</span>
      </h2>
      <p className="instructions">
        Due to the event of last-minute cancellations we require all patients to
        pay online to secure their appointment. Any cancellation done at least 2
        hours before the schedule appointment will be fully reimbursed.
      </p>
      <div className="confirm-appt">
        <div className="booking-outer">
          <div className="booking-inner">
            <label className="booking-form-label">
              Cardholder Name
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="cardholder"
              size="20"
              className="booking-input"
              required
              placeholder="John Doe"
              onChange={props.handleChange}
              noValidate
            />
            {props.state.errors.cardholder.length > 0 && (
                <span className="error">{props.state.errors.cardholder}</span>
            )}
          </div>
          <div className="booking-inner last">
            <label className="booking-form-label">
              Credit/Debit Card Number
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="cardnumber"
              size="20"
              className="booking-input"
              required
              placeholder="xxxx xxxx xxxx xxxx"
              onChange={props.handleChange}
              noValidate
              maxLength='19'
            />
            {props.state.errors.cardnumber.length > 0 && (
                <span className="error">{props.state.errors.cardnumber}</span>
            )}
          </div>
        </div>
        <div className="booking-outer">
          <div className="booking-inner">
            <label className="booking-form-label">
              Expiration Date
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="carddate"
              size="20"
              className="booking-input"
              required
              placeholder="MM/YY"
              onChange={props.handleChange}
              noValidate
              maxLength='5'
            />
             {props.state.errors.carddate.length > 0 && (
                <span className="error">{props.state.errors.carddate}</span>
            )}
          </div>
          <div className="booking-inner last">
            <label className="booking-form-label">
              CCV
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="cardccv"
              size="20"
              className="booking-input"
              required
              placeholder="xxx"
              onChange={props.handleChange}
              noValidate
              maxLength='3'
            />
            {props.state.errors.cardccv.length > 0 && (
                <span className="error">{props.state.errors.cardccv}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
