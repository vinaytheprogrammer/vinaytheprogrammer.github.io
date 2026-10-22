import React from 'react';
import { Server, Layout, Database, ShieldCheck, Terminal, Award } from 'lucide-react';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Server size={22} className="card-icon" />,
      title: 'Backend Systems',
      description: 'Architecting robust RESTful services, microservices, and API gateways using Node.js, Express, Go, and LoopBack.',
    },
    {
      icon: <Layout size={22} className="card-icon" />,
      title: 'Modern Frontend',
      description: 'Building dynamic, responsive, and accessible SPAs with React, Angular, modern CSS, and state management.',
    },
    {
      icon: <Database size={22} className="card-icon" />,
      title: 'Database Architecture',
      description: 'Designing normalized schemas, query caching with Redis, and data modeling across MongoDB, PostgreSQL, and MySQL.',
    },
    {
      icon: <ShieldCheck size={22} className="card-icon" />,
      title: 'Security & Auth',
      description: 'Implementing token-based JWT authentication, OAuth2 workflows, rate limiting, and defensive API validation.',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Engineering scalable solutions with <span className="text-gradient">precision</span>
          </h2>
          <p className="section-subtitle">
            A look into my engineering philosophy, educational background, and technical drive.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio Column */}
          <div className="about-bio-card glass-card">
            <h3 className="about-bio-title">
              Passionate Developer & NIT Jamshedpur Alumnus
            </h3>
            <div className="about-bio-text">
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="about-quote">
              <Terminal size={18} className="quote-icon" />
              <span>
                "Committed to writing maintainable, clean code that translates complex business requirements into elegant software."
              </span>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="about-strengths-grid">
            {highlights.map((item, index) => (
              <div key={index} className="strength-card glass-card">
                <div className="strength-icon-wrapper">{item.icon}</div>
                <h4 className="strength-title">{item.title}</h4>
                <p className="strength-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
