import React from 'react'
import './ContactForm.scss'

const ContactForm: React.FC = () => {
  return (
    <div className="ContactForm">
      <form name="contact" id="formFy" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <h1>Contact Me</h1>
        <p>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />
        </p>
        <p>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email address"
          />
        </p>
        <p>
          <label htmlFor="message">Message</label> <br />
          <textarea
            id="message"
            className="form-control"
            name="message"
            required
            placeholder="Enter your message"
          ></textarea>
        </p>
        <p>
          <input id="submitButton" type="submit" value="Submit" />
        </p>
      </form>
    </div>
  )
}
export default ContactForm
