import React from 'react';

const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2><span className="underline-first-two">Get</span> in Touch</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p>Have a project idea or want to collaborate? Reach out to me!</p>
          <div className="contact-info-item">
            <span>Email: padwa.tingkasan@example.com</span>
          </div>
          <div className="contact-info-item">
            <span>Phone: +123-456-7890</span>
          </div>
          <div className="contact-info-item">
            <span>
              GitHub: 
              <a href="https://github.com/PadwaTingkasan" target="_blank" rel="noopener noreferrer">powiepow</a> 
            </span>
          </div>
          <div className="contact-info-item">
            <span>
              LinkedIn: 
              <a href="https://linkedin.com/in/padwatingkasan" target="_blank" rel="noopener noreferrer">Padw Tingkasan</a>
            </span>
          </div>
          <div className="contact-info-item">
            <span>
              Twitter: 
              <a href="https://twitter.com/PadwaDev" target="_blank" rel="noopener noreferrer">itspowpatrol</a> 
            </span>
          </div>
          <div className="contact-info-item">
            <span>
              Instagram: 
              <a href="https://instagram.com/PadwaTingkasan" target="_blank" rel="noopener noreferrer">its.powpatrol</a>
            </span>
          </div>
        </div>
        <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;