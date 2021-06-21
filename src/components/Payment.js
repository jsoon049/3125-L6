import React from "react";
import "./Booking.css";

export const Payment = () => {
  return (
    <div>
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
            />
          </div>
          <div className="booking-inner last">
            <label className="booking-form-label">
              Credit/Debit Card Number
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="card-number"
              size="20"
              className="booking-input"
              required
              placeholder="xxxx xxxx xxxx xxxx"
            />
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
              name="expirydate"
              size="20"
              className="booking-input"
              required
              placeholder="MM/YY"
            />
          </div>
          <div className="booking-inner last">
            <label className="booking-form-label">
              CCV
              <strong className="required"> *</strong>
            </label>
            <input
              type="text"
              name="card-number"
              size="20"
              className="booking-input"
              required
              placeholder="xxx"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
