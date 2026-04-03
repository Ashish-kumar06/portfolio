import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'ashishvkumar06@gmail.com', href: 'mailto:ashishvkumar06@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+91 7019946349', href: 'tel:+917019946349' },
  { icon: <FiMapPin />, label: 'Location', value: 'Mangaluru, Karnataka, IN', href: '#' },
];

const socials = [
  { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/ashishvkumar', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: '#', label: 'Twitter' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let&apos;s <span>Work Together</span></h2>
          <p className="section-subtitle">Have a project in mind? I&apos;d love to hear about it.</p>
        </div>

        <div className="contact__content">
          {/* Left panel */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__tagline">
              <h3>Ready to bring your vision to life</h3>
              <p>
                Whether you have a project in mind, a question to ask, or just want to say hello —
                my inbox is always open. I typically reply within 24 hours.
              </p>
            </div>

            <div className="contact__details">
              {contactInfo.map(c => (
                <a key={c.label} href={c.href} className="contact-detail glass-card">
                  <span className="contact-detail__icon">{c.icon}</span>
                  <div>
                    <span className="contact-detail__label">{c.label}</span>
                    <span className="contact-detail__value">{c.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__social">
              <p>Find me on</p>
              <div className="social-row">
                {socials.map(s => (
                  <a key={s.label} href={s.href} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact__form-wrap glass-card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {!sent ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                  {loading ? <span className="spinner" /> : <><FiSend /> Send Message</>}
                </button>
              </form>
            ) : (
              <div className="success-state">
                <span className="success-emoji">🎉</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Send Another
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
