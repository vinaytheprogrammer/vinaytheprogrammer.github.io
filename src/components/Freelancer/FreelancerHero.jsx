import React from 'react';
import { ArrowRight, Mail, Calendar, ShieldCheck, Zap, Sparkles, Code2, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { freelancerData } from '../../data/freelancerData';
import PortalBanner from '../PortalBanner/PortalBanner';
import './FreelancerHero.css';

const FreelancerHero = () => {
  return (
    <section id="top" className="freelancer-hero-section">
      <div className="container freelancer-hero-container">
        
        {/* Availability Badge & Live Visitor Counter */}
        <div className="hero-badge-wrapper animate-fade-in">
          <div className="hero-status-badge freelance-badge">
            <span className="status-dot purple"></span>
            <span>{freelancerData.badge}</span>
          </div>
          <div className="hero-counter-badge" title="Freelance Page Visits">
            <img
              src="https://komarev.com/ghpvc/?username=vinaytheprogrammer-portfolio-freelancer&label=Freelance+Visits&color=8b5cf6&style=flat-square"
              alt="Freelance Page Visits"
              height="26"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="hero-content">
          <h1 className="hero-title">
            Full-Stack MVPs & GenAI Systems{' '}
            <span className="text-gradient freelance-gradient">Delivered in 2–4 Weeks</span>
          </h1>

          <p className="freelancer-hero-subtitle">
            <strong>{freelancerData.name}</strong> — {freelancerData.title} & Technical Consultant
          </p>

          <p className="hero-tagline">
            {freelancerData.tagline}
          </p>

          <div className="hero-meta">
            <span className="meta-item">
              <Zap size={18} className="meta-icon freelance-icon" />
              <span>{freelancerData.education}</span>
            </span>
            <span className="meta-item">
              <Globe size={18} className="meta-icon freelance-icon" />
              <span>{freelancerData.location}</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#case-studies" className="btn btn-primary freelance-btn-primary">
              <span>Explore Client Case Studies</span>
              <ArrowRight size={17} />
            </a>

            <a href="#services" className="btn btn-secondary">
              <Sparkles size={17} />
              <span>Services & Offerings</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={17} />
              <span>Request MVP Quote</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href={freelancerData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={freelancerData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${freelancerData.email}`}
              className="social-icon-btn"
              aria-label="Email Vinay"
              title="Email Vinay"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Portal Switcher Banner */}
        <PortalBanner />

        {/* Metrics Grid */}
        <div className="hero-metrics-grid freelance-metrics-grid">
          {freelancerData.metrics.map((metric, idx) => (
            <div key={idx} className="metric-card glass-card freelance-metric-card">
              <span className="metric-value text-gradient freelance-gradient">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FreelancerHero;
