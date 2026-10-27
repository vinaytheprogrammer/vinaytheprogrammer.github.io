import React from 'react';
import { Layers, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { freelancerData } from '../../data/freelancerData';
import './FreelancerCaseStudies.css';

const FreelancerCaseStudies = () => {
  return (
    <section id="case-studies" className="section freelancer-cases-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge freelance-badge">Portfolio & Proof of Work</span>
          <h2 className="section-title">
            Diverse Projects, <span className="text-gradient freelance-gradient">Proven Delivery</span>
          </h2>
          <p className="section-subtitle">
            A track record spanning legal tech, maritime enterprise micro-frontends, large-scale framework upgrades, and autonomous AI systems.
          </p>
        </div>

        <div className="case-studies-grid">
          {freelancerData.caseStudies.map((study, idx) => (
            <div key={idx} className="case-study-card glass-card">
              <div className="case-card-top">
                <span className="case-badge">{study.badge}</span>
                <span className="case-category">{study.category}</span>
              </div>

              <h3 className="case-title">{study.title}</h3>

              <div className="case-impact-box">
                <span className="impact-label">Client Impact:</span>
                <p className="impact-text">{study.impact}</p>
              </div>

              <p className="case-summary">{study.summary}</p>

              <ul className="case-highlights">
                {study.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="case-check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="case-tech-stack">
                {study.stack.map((tech, i) => (
                  <span key={i} className="case-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancerCaseStudies;
