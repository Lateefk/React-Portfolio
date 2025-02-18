import React, { useRef } from "react";
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_615j66v", "template_obqmy6p", form.current, "Oa709qfbLvzanT7t4")
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Something went wrong, please try again later.");
        }
      );

    e.target.reset(); // Clear the form after submission
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact__options">
          <article className="contact__option">
            <IoMdMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lateefconcept@gmail.com</h5>
            <a
              href="mailto:lateefconcept@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348143234778</h5>
            <a
              href="https://wa.me/+2348143234778"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;