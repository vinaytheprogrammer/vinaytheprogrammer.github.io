import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { tutorData } from '../../data/tutorData';
import './TutorMethodology.css';

export const TutorMethodology = () => {
  return (
    <section id="methodology" className="section tutor-methodology-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge tutor-badge">Pedagogical Approach</span>
          <h2 className="section-title">
            How I Teach: The <span className="text-gradient tutor-gradient">4-Step Framework</span>
          </h2>
          <p className="section-subtitle">
            A methodology designed to transform confused students into confident, independent problem solvers.
          </p>
        </div>

        <div className="methodology-grid">
          {tutorData.methodology.map((m, idx) => (
            <div key={idx} className="methodology-card glass-card">
              <span className="methodology-step">{m.step}</span>
              <h3 className="methodology-title">{m.title}</h3>
              <p className="methodology-desc">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TutorFaq = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section tutor-faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge tutor-badge">Common Questions</span>
          <h2 className="section-title">
            Student & Parent <span className="text-gradient tutor-gradient">FAQs</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about 1:1 sessions, batches, and course delivery.
          </p>
        </div>

        <div className="faq-container">
          {tutorData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item glass-card ${isOpen ? 'open' : ''}`}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon">
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
