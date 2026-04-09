import React, { useRef, useState } from "react";
import "./CSS/Contact.css";
import emailjs from "@emailjs/browser";

/* ── Inline SVG icons (no extra deps) ── */
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconSend = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

/* ── Contact links data ── */
const CONTACT_ITEMS = [
  {
    icon: <IconMail />,
    label: "Email",
    value: "keyursanglikar@gmail.com",
    href: "mailto:keyursanglikar@gmail.com",
  },
  {
    icon: <IconLinkedIn />,
    label: "LinkedIn",
    value: "linkedin.com/in/keyursanglikar",
    href: "https://linkedin.com/in/keyursanglikar",
  },
  {
    icon: <IconGitHub />,
    label: "GitHub",
    value: "github.com/keyursanglikar",
    href: "https://github.com/keyursanglikar",
  },
];

/* ── Component ── */
function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // 👈 replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",  // 👈 replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"    // 👈 replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      {/* ambient bg */}
      <div className="contact-orb contact-orb--1" />
      <div className="contact-orb contact-orb--2" />
      <div className="contact-scanline" />

      <div className="contact-inner">

        {/* ── Section Header ── */}
        <div className="contact-header">
          <p className="contact-header__eyebrow">
            <span className="contact-header__line" />
            Get In Touch
            <span className="contact-header__line" />
          </p>
          <h2 className="contact-header__title">
            Contact <span>Me</span>
          </h2>
          <p className="contact-header__sub">
            Have a project in mind or just want to say hi?
            My inbox is always open — I'll get back to you within 24 hours.
          </p>
        </div>

        {/* ── Two-column body ── */}
        <div className="contact-body">

          {/* ════ LEFT — Info ════ */}
          <div className="contact-info">

            {/* availability badge */}
            <div className="contact-avail">
              <span className="contact-avail__dot" />
              Available for Opportunities
            </div>

            <h3 className="contact-info__tagline">
              Let's Build<br />
              Something <span>Great</span>
            </h3>

            <p className="contact-info__desc">
              I'm open to internships, freelance work, and full-time roles.
              Whether it's a product idea, a collab, or just a hello —
              drop me a message.
            </p>

            {/* contact links */}
            <div className="contact-items">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-item__icon">{item.icon}</div>
                  <div className="contact-item__body">
                    <span className="contact-item__label">{item.label}</span>
                    <span className="contact-item__value">{item.value}</span>
                  </div>
                  <span className="contact-item__arrow"><IconArrow /></span>
                </a>
              ))}
            </div>

            {/* response time */}
            <div className="contact-response">
              <IconClock />
              Typical response time: within 24 hours
            </div>

          </div>

          {/* ════ RIGHT — Form ════ */}
          <div className="contact-form-wrap">
            <div className="contact-form-card">

              {status === "success" ? (
                /* ── Success State ── */
                <div className="contact-success">
                  <div className="contact-success__icon">✓</div>
                  <h4 className="contact-success__title">Message Sent!</h4>
                  <p className="contact-success__msg">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    className="contact-success__reset"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="contact-form"
                >
                  {/* Name + Email row */}
                  <div className="contact-form__row">
                    <div className="contact-field">
                      <label className="contact-field__label">Your Name</label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Keyur Sanglikar"
                        required
                      />
                    </div>
                    <div className="contact-field">
                      <label className="contact-field__label">Email Address</label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="contact-field">
                    <label className="contact-field__label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Let's work together"
                    />
                  </div>

                  {/* Message */}
                  <div className="contact-field">
                    <label className="contact-field__label">Message</label>
                    <textarea
                      name="message"
                      placeholder="Hi Keyur, I'd love to discuss..."
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`contact-submit${status === "sending" ? " contact-submit--sending" : ""}`}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>Sending…</>
                    ) : status === "error" ? (
                      <>Failed — Try Again</>
                    ) : (
                      <><IconSend /> Send Message</>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;