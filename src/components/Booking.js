import React from "react";
import "./Booking.css";
import { Payment } from "./Payment.js";
import "react-datepicker/dist/react-datepicker.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      time: "",
      expert: "",
      daysOfWeek: [0, 6],
      selectedDay: "",
      cardholder: "",
      cardnumber: "",
      carddate: "",
      cardccv: "",
      errors: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        time: "",
        expert: "",
        selectedDay: "",
        cardholder: "",
        cardnumber: "",
        carddate: "",
        cardccv: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      // ** Booking Info ** //
      case "firstname":
        let validfirstNameRegex = RegExp(/^[a-z][a-z]*$/);
        if (value === "") errors.firstname = "Field cannot be empty";
        else
          errors.firstname = validfirstNameRegex.test(value.toLowerCase())
            ? ""
            : "First Name can only contain letters";
        break;
      case "lastname":
        let validlastNameRegex = RegExp(/^[a-z][a-z]*$/);
        if (value === "") errors.lastname = "Field cannot be empty";
        else
          errors.lastname = validlastNameRegex.test(value.toLowerCase())
            ? ""
            : "Last Name can only contain letters";
        break;
      case "email":
        let validEmailRegex = RegExp(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ // eslint-disable-line
        );
        if (value === "") errors.email = "Field cannot be empty";
        else
          errors.email = validEmailRegex.test(value)
            ? ""
            : "Invalid email address!";
        break;
      case "phone":
        let validPhoneRegex = RegExp(
          /^(\+0?1\s)?\(?\d{3}\)?[\s-]\d{3}[\s-]\d{4}$/
        );
        if (value === "") errors.phone = "Field cannot be empty";
        else
          errors.phone = validPhoneRegex.test(value)
            ? ""
            : "Invalid format! Please use (xxx) xxx-xxxx format";
        break;
      case "service":
        if (value === "" ? (errors.service = "Field cannot be empty") : (errors.service = ""));
        break;
      case "time":
        let hr = value.substring(0,2);
        let min = value.substring(3,5);
        if(Number(hr.substring(0,1)) === 0) hr = hr.substring(1,2);
        hr = Number(hr);
        if( hr < 8 || hr > 19 ) (errors.time = "Time can only be between 8am and 7pm") 
        else if ( hr >= 19 && min > 0 ) (errors.time = "Time can only be between 8am and 7pm") 
        else (errors.time = "");
        break;
      // ** Payment Info ** //
      case "cardholder":
        let validNameRegex = RegExp(/^[a-z][a-z\s]*$/);
        if (value === "") errors.cardholder = "Field cannot be empty";
        else
          errors.cardholder = validNameRegex.test(value.toLowerCase())
            ? ""
            : "Name can only contain letters and spaces";
        break;
      case "cardnumber":
        let validCardNumRegex = RegExp(/^(?:\d{4} ){3}\d{4}$/);
        if (value === "") errors.cardnumber = "Field cannot be empty";
        else
          errors.cardnumber = validCardNumRegex.test(value)
            ? ""
            : "Invalid format! Please use xxxx xxxx xxxx xxxx format";
        break;
      case "carddate":
        let validDateRegex = RegExp(/^[\d]{2}\/[\d]{2}/);
        let month = value.substring(0,2);
        if (value === "") errors.carddate = "Field cannot be empty";
        else if( !isNaN(month) && month > 12) errors.carddate = "Month cannot be greater than 12"
        else
          errors.carddate = validDateRegex.test(value)
            ? ""
            : "Invalid format! Please use MM/YY format";
        break;
      case "cardccv":
        let validCCVRegex = RegExp(/^[0-9]{3}$/);
        if (value === "") errors.cardccv = "Field cannot be empty";
        else
          errors.cardccv = validCCVRegex.test(value)
            ? ""
            : "CCV must be 3 numbers only";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleExpert = (event) => {
    const value = event.target.value;
    let errors = this.state.errors;
    errors.selectedDay = "";
    this.setState({ errors, expert: value, selectedDay: "" });
    this.validateExpert(value);
    if (value === "kanye") {
      this.setState({ daysOfWeek: [0, 6, 2, 4] });
    }
    if (value === "homer") {
      this.setState({ daysOfWeek: [0, 6, 1, 5] });
    }
    if (value === "chris") {
      this.setState({ daysOfWeek: [0, 6, 1, 3] });
    }
  };

  handleDayChange = () => {
    let errors = this.state.errors;
    if (
      this.state.expert === ""
        ? (errors.selectedDay =
            "You must select an expert before choosing a date")
        : (errors.selectedDay = "")
    );
    const input = new Date(this.dayPickerInput.getInput().value);
    this.setState({ selectedDay: input.toDateString() });
  };

  validateExpert = (value) => {
    let errors = this.state.errors;
    if (
      value === ""
        ? (errors.expert = "You must choose an expert")
        : (errors.expert = "")
    );
    this.setState({ errors });
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  notEmpty() {
    let disable =
      this.state.firstname !== "" &&
      this.state.lastname !== "" &&
      this.state.email !== "" &&
      this.state.phone !== "" && 
      this.state.service !== "" &&
      this.state.time !== "" &&
      this.state.expert !== "" &&
      this.state.selectedDay !== ""  &&
      this.state.cardholder !== "" &&
      this.state.cardnumber !== "" &&
      this.state.carddate !== "" &&
      this.state.cardccv !== "";
    return disable;
  }
  
  handleSubmit = (event) => {
    let test = this.notEmpty();
    console.log(test);
    if (this.validateForm(this.state.errors) && this.notEmpty() === true) {
      alert(
        ' Success. Your appointment is scheduled on ' + this.state.selectedDay + ' at ' + this.state.time
      );
    }
    else {
      event.preventDefault();
      if( this.notEmpty() === false) {
        alert ("Error: Make sure all fields are filled in!")
      }
      else {
        alert("Error: Please correct the errors in the form!");
      }
    }
  };

  render() {
    return (
      <div className="booking" id="booking">
        <div className="booking-wrapper">
          <h1>
            <span>Book an Appointment</span>
            <span className="material-icons title-icon">book_online</span>
          </h1>
          <p className="instructions">
            To book an appointment, fill out both sections of the form below and click on the submit button.
          </p>
          <form
            className="booking-form-wrapper"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="booking-outer">
              <div className="booking-inner">
                <label className="booking-form-label">
                  First Name
                  <strong className="required"> *</strong>
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="booking-input"
                  required
                  placeholder="John"
                  onChange={this.handleChange}
                  noValidate
                />
                {this.state.errors.firstname.length > 0 && (
                  <span className="error">{this.state.errors.firstname}</span>
                )}
              </div>
              <div className="booking-inner last">
                <label className="booking-form-label">
                  Last Name
                  <strong className="required"> *</strong>
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="booking-input"
                  required
                  placeholder="Doe"
                  onChange={this.handleChange}
                  noValidate
                />
                {this.state.errors.lastname.length > 0 && (
                  <span className="error">{this.state.errors.lastname}</span>
                )}
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
                  className="booking-input"
                  required
                  placeholder="email@example.com"
                  onChange={this.handleChange}
                  noValidate
                />
                {this.state.errors.email.length > 0 && (
                  <span className="error">{this.state.errors.email}</span>
                )}
              </div>
              <div className="booking-inner last">
                <label className="booking-form-label">
                  Phone Number
                  <strong className="required"> *</strong>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="booking-input"
                  required
                  placeholder="(xxx) xxx-xxxx"
                  onChange={this.handleChange}
                  noValidate
                />
                {this.state.errors.phone.length > 0 && (
                  <span className="error">{this.state.errors.phone}</span>
                )}
              </div>
            </div>
            <div className="booking-outer">
              <div className="booking-inner">
                <label className="booking-form-label">
                  Service
                  <strong className="required"> *</strong>
                </label>
                <select
                  name="service"
                  id="bookingservice"
                  className="booking-input"
                  onChange={this.handleChange}
                >
                  <option defaultValue></option>
                  <option value="Chiropractics">Chiropractics</option>
                  <option value="MassageTherapy">Massage Therapy</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Acupuncture">Acupuncture</option>
                  <option value="CustomKneeBracing">Custom Knee Bracing</option>
                  <option value="CustomOrthotics">Custom Orthotics</option>
                </select>
                {this.state.errors.service.length > 0 && (
                  <span className="error">{this.state.errors.service}</span>
                )}
              </div>
              <div className="booking-inner last">
                <label className="booking-form-label">
                  Expert
                  <strong className="required"> *</strong>
                </label>
                <select
                  name="expert"
                  id="booking-service"
                  className="booking-input"
                  onChange={this.handleExpert}
                >
                  <option defaultValue></option>
                  <option value="kanye">Kanye West</option>
                  <option value="homer">Homer Simpson</option>
                  <option value="chris">Chris Griffin</option>
                </select>
                {this.state.errors.expert.length > 0 && (
                  <span className="error">{this.state.errors.expert}</span>
                )}
              </div>
            </div>
            <div className="booking-outer">
              <div className="booking-inner">
                <label className="booking-form-label">
                  Date
                  <strong className="required"> *</strong>
                </label>
                <div>
                  <DayPickerInput
                    name="day"
                    className="calendar date-time"
                    inputProps={{ className: "calendar" }}
                    onDayChange={this.handleDayChange}
                    ref={(el) => (this.dayPickerInput = el)}
                    value={this.state.selectedDay}
                    dayPickerProps={{
                      modifiers: {
                        disabled: [
                          { daysOfWeek: this.state.daysOfWeek },
                          { before: new Date() },
                        ],
                      },
                    }}
                  />
                  {this.state.errors.selectedDay.length > 0 && (
                    <span className="error">
                      {this.state.errors.selectedDay}
                    </span>
                  )}
                </div>
              </div>
              <div className="booking-inner last">
                <label className="booking-form-label">
                  Time
                  <strong className="required"> *</strong>
                </label>
                <input
                  type="time"
                  name="time"
                  className="booking-input date-time"
                  placeholder="hh-mm"
                  required
                  onChange={this.handleChange}
                />
                 {this.state.errors.time.length > 0 && (
                  <span className="error">
                    {this.state.errors.time}
                  </span>
                )}
              </div>
            </div>
            <div className="services-drop">
              <label className="booking-form-label">
                Any Additional Info We Should Know
              </label>
              <textarea
                rows="3"
                className="contact-input"
                placeholder="Type here"
              ></textarea>
            </div>
            <Payment
              handleChange={this.handleChange.bind(this)}
              state={this.state}
            />
            <div className="button-wrapper">
              <input type="submit" value="Submit" className="btn submit" />
              <input type="reset" value="Clear" className="btn" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Booking;
