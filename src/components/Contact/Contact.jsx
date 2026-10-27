import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import confetti from 'canvas-confetti';
import { sweData } from '../../data/sweData';
import './Contact.css';

const Contact = ({
  badge = 'Get In Touch',
  title = "Let's build something",
  highlightText = 'remarkable',
  subtitle = 'Whether you have an open software engineering role, architecture challenge, or collaboration, feel free to reach out.',
  email = sweData.email,
  linkedin = sweData.linkedin,
  github = sweData.github,
  availabilityText = 'Available for Full-time Software Engineering roles (Full Stack / GenAI), enterprise engineering teams, and open-source collaborations.',
  formSubjectPrefix = 'SWE Portfolio Inquiry',
}) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (e) {
      // fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const subject = encodeURIComponent(`${formSubjectPrefix} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{badge}</span>
          <h2 className="section-title">
            {title} <span className="text-gradient">{highlightText}</span>
          </h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Direct Email & Social Info */}
          <div className="contact-info-card glass-card">
            <h3 className="contact-info-title">Contact Channels</h3>
            <p className="contact-availability">{availabilityText}</p>

            <div className="contact-email-box">
              <span className="email-label">Direct Email Address:</span>
              <div className="email-display-row">
                <span className="email-text">{email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="copy-btn"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={18} className="copied-icon" /> : <Copy size={18} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="contact-social-connect">
              <span className="connect-label">Connect Online:</span>
              <div className="social-links-row">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-btn"
                >
                  <LinkedinIcon size={20} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-btn"
                >
                  <GithubIcon size={20} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="contact-form-card glass-card">
            <h3 className="contact-form-title">
              <MessageSquare size={20} className="title-icon" />
              <span>Send a Direct Message</span>
            </h3>

            {sentNotice ? (
              <div className="form-success-alert">
                <Sparkles size={20} className="success-icon" />
                <p>Opening your email client... Thank you for reaching out!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Vinay Gupta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="vinaygupta.nitjsr@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    placeholder="Tell me about your team, role, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
