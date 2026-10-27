import React from 'react';
import {
  Sparkles,
  Server,
  Layout,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  GraduationCap,
  Award,
} from 'lucide-react';
import { sweData } from '../../data/sweData';
import './About.css';

const About = () => {
  const iconMap = {
    genai: <Sparkles size={22} className="pillar-icon" />,
    backend: <Server size={22} className="pillar-icon" />,
    frontend: <Layout size={22} className="pillar-icon" />,
    security: <ShieldCheck size={22} className="pillar-icon" />,
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Engineering Foundation</span>
          <h2 className="section-title">
            Architectural Focus & <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="section-subtitle">
            How I design, scale, and deliver multi-agent GenAI systems, high-concurrency microservices, and enterprise web architectures.
          </p>
        </div>

        {/* Bio & Background Showcase */}
        <div className="about-bio-showcase glass-card">
          <div className="bio-main-content">
            <div className="bio-header-badge">
              <GraduationCap size={16} />
              <span>NIT Jamshedpur (MCA) • Junior Software Engineer at SourceFuse</span>
            </div>
            <h3 className="bio-headline">
              Engineering Resilient Software from Fundamentals to Enterprise Scale
            </h3>
            <div className="bio-paragraphs">
              {sweData.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="bio-quote-box">
              <Terminal size={18} className="quote-icon" />
              <span>
                "Committed to writing maintainable, clean code that translates complex distributed architectures and multi-agent AI requirements into elegant, dependable software."
              </span>
            </div>
          </div>
        </div>

        {/* Section Subheader for Pillars */}
        <div className="pillars-section-header">
          <h3 className="pillars-main-title">
            Key Architectural <span className="text-gradient">Pillars</span>
          </h3>
          <p className="pillars-main-subtitle">
            Core domains where I deliver direct engineering impact:
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="pillars-grid">
          {sweData.pillars.map((pillar) => (
            <div key={pillar.id} className={`pillar-card glass-card pillar-${pillar.id}`}>
              {/* Card Header */}
              <div className="pillar-card-header">
                <div className="pillar-icon-wrapper">
                  {iconMap[pillar.id] || <Sparkles size={22} />}
                </div>
                <span className="pillar-badge">{pillar.badge}</span>
              </div>

              {/* Title & Description */}
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-description">{pillar.description}</p>

              {/* Bullet Capabilities */}
              {pillar.capabilities && (
                <ul className="pillar-capabilities">
                  {pillar.capabilities.map((cap, cIdx) => (
                    <li key={cIdx}>
                      <CheckCircle2 size={15} className="capability-check-icon" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Tags */}
              {pillar.tech && (
                <div className="pillar-tech-row">
                  {pillar.tech.map((t, tIdx) => (
                    <span key={tIdx} className="pillar-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
