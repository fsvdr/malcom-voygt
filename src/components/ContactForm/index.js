import React from 'react'
import './index.css'

const ContactForm = () => (
  <form name="contact" method="POST" className="form" data-netlify="true">
    <input type="text" name="name" placeholder="Name" />
    <input type="email" name="email" placeholder="Email" />
    <textarea name="message" placeholder="Message" />
    <button type="submit">Send</button>
  </form>
)

export default ContactForm
