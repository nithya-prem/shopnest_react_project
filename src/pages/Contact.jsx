import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="page-shell page-content contact-page">
      <div className="page-title"><p className="eyebrow">We’re here to help</p><h1>Say hello.</h1><p>Questions, kind words, or just want to chat? We’d love to hear from you.</p></div>
      <form className="contact-form" onSubmit={handleSubmit}>
        {sent && <p className="success-message" role="status">Thanks for reaching out. We’ll be in touch soon.</p>}
        <label>Your name<input name="name" autoComplete="name" required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
        <label>How can we help?<textarea name="message" rows="5" required /></label>
        <button className="button button-dark" type="submit">Send message <span>→</span></button>
      </form>
    </section>
  );
}
