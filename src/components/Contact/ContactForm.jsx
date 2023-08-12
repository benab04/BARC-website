import React from "react";
function ContactForm() {
  return (
    <div className="contact-form">
      <form>
        <h3 className="title-form">Contact us</h3>
        <div className="input-container">
          <i className="fa-solid fa-user"></i>

          <input
            type="text"
            name="name"
            className="input"
            placeholder="Full Name"
          />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-message"></i>
          <input
            type="tel"
            name="phone"
            className="input"
            placeholder="Subject"
          />
        </div>
        <div className="input-container textarea">
          <i className="fa-solid fa-pen"></i>

          <textarea
            name="message"
            className="input"
            placeholder="Message"
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
}

export default ContactForm;
