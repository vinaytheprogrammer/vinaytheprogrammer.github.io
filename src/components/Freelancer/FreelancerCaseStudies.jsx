import React from 'react';
import { Layers, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Smartphone, FileText } from 'lucide-react';
import { GithubIcon } from '../Icons';
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
            A track record spanning food delivery mobile apps (React Native Expo), bespoke legal tech platforms, healthcare management systems, and autonomous AI agents.
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

              {/* Action Links if POC or Quote URL exists */}
              {(study.pocUrl || study.quoteUrl) && (
                <div className="case-action-links">
                  {study.pocUrl && (
                    <a
                      href={study.pocUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-btn-link"
                    >
                      <GithubIcon size={16} />
                      <span>Interactive POC Repo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {study.quoteUrl && (
                    <a
                      href={study.quoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-btn-link highlight"
                    >
                      <FileText size={16} />
                      <span>Live Architecture Site</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              )}

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
