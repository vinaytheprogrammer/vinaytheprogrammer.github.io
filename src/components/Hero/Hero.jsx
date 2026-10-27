import React from 'react';
import { ArrowRight, Mail, FileText, MapPin, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { sweData } from '../../data/sweData';
import PortalBanner from '../PortalBanner/PortalBanner';
import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-container">
        
        {/* Availability Badge */}
        <div className="hero-badge-wrapper animate-fade-in">
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span>{sweData.badge}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{sweData.name}</span>
            <br />
            <span className="text-gradient">{sweData.title}</span>
          </h1>

          <p className="hero-tagline">
            {sweData.tagline}
          </p>

          <div className="hero-meta">
            <span className="meta-item">
              <GraduationCap size={18} className="meta-icon" />
              <span>{sweData.education}</span>
            </span>
            <span className="meta-item">
              <MapPin size={18} className="meta-icon" />
              <span>{sweData.location}</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Production Systems</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={17} />
              <span>Contact Vinay</span>
            </a>

            <a
              href={sweData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary resume-cta"
            >
              <FileText size={17} />
              <span>SWE Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href={sweData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={sweData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${sweData.email}`}
              className="social-icon-btn"
              aria-label="Email Vinay"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Specialized Portals Switcher */}
        <PortalBanner />

        {/* Metrics Bar */}
        <div className="hero-metrics-grid">
          {sweData.metrics.map((metric, idx) => (
            <div key={idx} className="metric-card glass-card">
              <span className="metric-value text-gradient">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
