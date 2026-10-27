import React, { useState } from 'react';
import { Clock, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { freelancerData } from '../../data/freelancerData';
import './FreelancerProcessAndPricing.css';

export const FreelancerProcess = () => {
  return (
    <section id="process" className="section freelancer-process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge freelance-badge">Delivery Process</span>
          <h2 className="section-title">
            How We Work: From <span className="text-gradient freelance-gradient">Concept to Launch</span>
          </h2>
          <p className="section-subtitle">
            A transparent, sprint-based approach ensuring zero surprises, weekly live demos, and timely release.
          </p>
        </div>

        <div className="process-timeline">
          {freelancerData.process.map((step, idx) => (
            <div key={idx} className="process-step-card glass-card">
              <div className="process-step-header">
                <span className="step-number">{step.step}</span>
                <span className="step-duration">
                  <Clock size={13} />
                  <span>{step.duration}</span>
                </span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FreelancerPricing = () => {
  return (
    <section id="pricing" className="section freelancer-pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge freelance-badge">Flexible Engagements</span>
          <h2 className="section-title">
            Tailored <span className="text-gradient freelance-gradient">Engagement Models</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a full turnkey MVP, ongoing sprint bandwidth, or dedicated senior engineering muscle.
          </p>
        </div>

        <div className="pricing-cards-grid">
          {freelancerData.pricingModels.map((model, idx) => (
            <div key={idx} className="pricing-card glass-card">
              <span className="pricing-badge">{model.badge}</span>
              <h3 className="pricing-title">{model.name}</h3>
              <p className="pricing-desc">{model.description}</p>

              <ul className="pricing-features">
                {model.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <CheckCircle2 size={16} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn btn-primary freelance-btn-primary pricing-cta">
                <span>Select Model</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FreelancerFaq = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section freelancer-faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge freelance-badge">Client FAQs</span>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient freelance-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Clear answers on IP ownership, communication channels, code audits, and turnaround time.
          </p>
        </div>

        <div className="faq-container">
          {freelancerData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item glass-card ${isOpen ? 'open-freelance' : ''}`}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon freelance-faq-icon">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
