import React from "react";
import axios from "axios";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    axios
      .post("http://127.0.0.1:8000/contact/", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(this.renderSuccessMessage)
      .catch(this.renderErrorMessage);
  };

  renderSuccessMessage = (res) => {
    if (res.data) {
      const messageBox = document.querySelector(".message-box");
      const message = document.querySelector(".message");
      messageBox.classList.add("active-success");
      messageBox.classList.add("alert-success");
      message.innerHTML = "Message Sent";
      setTimeout(() => {
        messageBox.classList.remove("active-success");
        messageBox.classList.remove("alert-success");
        message.innerHTML = "";
      }, 3000);
    }
  };
  renderErrorMessage = (err) => {
    const messageBox = document.querySelector(".message-box");
    const message = document.querySelector(".message");
    if (err.response) {
      messageBox.classList.add("active-error");
      messageBox.classList.add("alert-danger");
      message.innerHTML = "Error Message";
      setTimeout(() => {
        messageBox.classList.remove("active-error");
        messageBox.classList.remove("alert-danger");
        message.innerHTML = "";
      }, 3000);
    } else if (err.request) {
      messageBox.classList.add("active-error, alert-danger");
      message.innerHTML = "Error Message";
      setTimeout(() => {
        messageBox.classList.remove("active-error, alert-danger");
        message.innerHTML = "";
      }, 3000);
    } else {
      messageBox.classList.add("active-error");
      message.innerHTML = "Error Message";
      setTimeout(() => {
        messageBox.classList.remove("active-error");
        message.innerHTML = "";
      }, 3000);
    }
  };

  render() {
    return (
      <div className="contact-section">
        <div className="message-container">
          <div className="message-box alert alert-simple">
            <span className="message"></span>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-form">
            <h1>Contact Us</h1>
            <form className="cf" onSubmit={(e) => this.handleSubmit(e)}>
              <div className="half left cf">
                <input
                  name="name"
                  type="text"
                  id="input-name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
                <input
                  name="email"
                  type="email"
                  id="input-email"
                  placeholder="Email address"
                  onChange={this.handleChange}
                />
                <input
                  name="subject"
                  type="text"
                  id="input-subject"
                  placeholder="Subject"
                  onChange={this.handleChange}
                />
              </div>
              <div className="half right cf">
                <textarea
                  name="message"
                  type="text"
                  id="input-message"
                  placeholder="Message"
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <input type="submit" value="Submit" id="input-submit" />
            </form>
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-form hotlines">
            <h3>OR Call These Hotlines</h3>
            <ul>
              <li>08021122020</li>
              <li>09023432422</li>
              <li>08127883888</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
