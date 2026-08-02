import { useState } from "react";
import { profile } from "../data";

function Contact() {
  // We keep the form values in state so React knows what the user typed.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading

    // There is no backend yet, so we just show a thank you message
    // and make the boxes empty again.
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="section gray">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-box">
          <div className="contact-info">
            <p>
              <b>Email:</b> {profile.email}
            </p>
            <p>
              <b>Location:</b> {profile.location}
            </p>
            <p>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit" className="btn">
              Send Message
            </button>

            {sent && <p className="success">Thank you! Your message is sent.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
