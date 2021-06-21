import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      phone: null,
      question: null,
      errors: {
        fullName: "",
        email: "",
        phone: "",
        question:"",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "fullName":
        let validNameRegex = RegExp(/^[a-z][a-z\s]*$/);
        if(value === '') errors.fullName = "Field cannot be empty";
        else errors.fullName = validNameRegex.test(value.toLowerCase()) ? "" : "Name can only contain letters and spaces";
        break;
      case "email":
        let validEmailRegex = RegExp(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ // eslint-disable-line
        ); 
        if(value === '') errors.email = "Field cannot be empty";
        else errors.email = validEmailRegex.test(value) ? "" : "Invalid email address!";
        break;
      case "phone":
        let validPhoneRegex = RegExp(
          /^(\+0?1\s)?\(?\d{3}\)?[\s-]\d{3}[\s-]\d{4}$/
        );
        if(value === '') errors.phone = "Field cannot be empty";
        else errors.phone = validPhoneRegex.test(value) ? "" : "Invalid format! Please use (xxx) xxx-xxxx format";
        break;
      case "question":
        if(value === '') errors.question = "Field cannot be empty";
        else errors.question = "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    if (this.validateForm(this.state.errors))
      alert("Success. Thanks for reaching out we will get back to you as soon as possible!")
    else {
      event.preventDefault();
      alert('Unable to submit form. Please correct the errors in the form!');
    }
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  isDisabled() {
    let disable = (this.state.fullName != null) && (this.state.email != null) && (this.state.phone != null) && (this.state.question != null)
    return (disable)
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="contact" id="contact">
        <div className="contact-wrapper">
          <h1>
            <span>Contact Us</span>
            <span className="material-icons title-icon">contact_support</span>
          </h1>
          <p className="instructions">
            If you have any questions or inquiries about any of our services
            please feel free to send us an email with your name and phone number
            and we will get back to you as soon as possible. Thank you!
          </p>
          <form
            className="form-wrapper"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="question-wrapper">
              <label className="form-label">
                Name <strong className="required"> *</strong>
              </label>
              <input
                type="text"
                name="fullName"
                className="contact-input"
                placeholder="John Doe"
                required
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className="question-wrapper">
              <label className="form-label">
                Email <strong className="required"> *</strong>
              </label>
              <input
                type="email"
                name="email"
                className="contact-input"
                placeholder="email@example.com"
                required
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="question-wrapper">
              <label className="form-label">
                Phone Number <strong className="required"> *</strong>
              </label>
              <input
                type="tel"
                name="phone"
                className="contact-input"
                placeholder="(xxx) xxx-xxxx"
                required
                onChange={this.handleChange}
                noValidate
              />
               {errors.phone.length > 0 && (
                  <span className="error">{errors.phone}</span>
                )}
            </div>
            <div className="question-wrapper">
              <label className="form-label">
                Question <strong className="required"> *</strong>
              </label>
              <textarea
                rows="4"
                cols="25"
                name="question"
                className="contact-input"
                placeholder="Type question here"
                required
                onChange={this.handleChange}
                noValidate
              ></textarea>
              {errors.question.length > 0 && (
                  <span className="error">{errors.question}</span>
                )}
            </div>
            <div className="button-wrapper">
              <input type="submit" value="Submit" className="btn submit" disabled={!this.isDisabled()}/>
              <input type="reset" value="Clear" className="btn" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
