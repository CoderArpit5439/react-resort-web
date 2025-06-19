import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled>Send (static only)</button>
      </form>
    </div>
  );
}

export default Contact;
