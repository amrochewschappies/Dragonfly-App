import React, { useState } from 'react';

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="newsletter-container">
      <h4>Subscribe to Our Newsletter</h4>
      {submitted ? (
        <p 
          className="success-message" 
          role="alert" 
          aria-live="polite"
        >
          Thank you for subscribing!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <p>
            Signup for our weekly newsletter and be the first to hear about our latest updates! 
          </p>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}

export default Newsletter;
