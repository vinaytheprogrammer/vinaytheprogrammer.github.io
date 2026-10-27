import React from 'react';
import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { sweData } from '../../data/sweData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Career & Education</span>
          <h2 className="section-title">
            Engineering & <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Enterprise software engineering at SourceFuse, Rakuten Group, Fleet Management, and NIT Jamshedpur credentials.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {sweData.experiences.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker">
                  {item.type === 'education' ? (
                    <GraduationCap size={18} />
                  ) : (
                    <Briefcase size={18} />
                  )}
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-title">{item.title}</h3>
                      <h4 className="timeline-subtitle">{item.role}</h4>
                    </div>
                    <span className="timeline-period">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <p className="timeline-description">{item.summary}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="timeline-highlights">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>
                          <CheckCircle2 size={16} className="highlight-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
