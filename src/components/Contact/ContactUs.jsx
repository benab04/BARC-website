import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

import ContactInfo from "./ContactInfo";

function ContactUs() {
  return (
    <div id="contact" className="contact-page">
      <div className="form">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
export default ContactUs;
