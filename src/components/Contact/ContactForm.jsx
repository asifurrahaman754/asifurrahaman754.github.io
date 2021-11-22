import React from "react";

export default function ContactForm() {
  return (
    <div className="contact_form_wrap">
      <h3 className="contact_head">Contact now</h3>
      <p className="Contact_sub">
        Have a project or question? Send me a message. I will reply within 12
        hour
      </p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="write your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
