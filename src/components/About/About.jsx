import React from 'react';
import { Sparkles, Server, Layout, ShieldCheck, Terminal } from 'lucide-react';
import { sweData } from '../../data/sweData';
import './About.css';

const About = () => {
  const icons = [
    <Sparkles size={22} className="card-icon" key="0" />,
    <Server size={22} className="card-icon" key="1" />,
    <Layout size={22} className="card-icon" key="2" />,
    <ShieldCheck size={22} className="card-icon" key="3" />,
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Engineering Profile</span>
          <h2 className="section-title">
            Engineering scalable solutions with <span className="text-gradient">precision</span>
          </h2>
          <p className="section-subtitle">
            A look into my enterprise background, multi-agent AI architectures, and core software engineering drive.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio Column */}
          <div className="about-bio-card glass-card">
            <h3 className="about-bio-title">
              Full Stack & GenAI Engineer | NIT Jamshedpur Alumnus
            </h3>
            <div className="about-bio-text">
              {sweData.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="about-quote">
              <Terminal size={18} className="quote-icon" />
              <span>
                "Committed to writing maintainable, resilient code that translates complex distributed systems and multi-agent AI requirements into elegant software."
              </span>
            </div>
          </div>

          {/* Highlights Column */}
          <div className="about-highlights-grid">
            {sweData.pillars.map((pillar, idx) => (
              <div key={idx} className="highlight-card glass-card">
                <div className="highlight-icon-wrapper">
                  {icons[idx % icons.length]}
                </div>
                <h4 className="highlight-title">{pillar.title}</h4>
                <p className="highlight-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
