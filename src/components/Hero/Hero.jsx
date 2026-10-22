import React from 'react';
import { ArrowRight, Mail, FileText, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { about } from '../../portfolio';
import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-container">
        
        {/* Availability Badge */}
        <div className="hero-badge-wrapper animate-fade-in">
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span>Available for Full-time Roles & Projects</span>
          </div>
        </div>

        {/* Headline */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{about.name}</span>
            <br />
            <span className="text-gradient">{about.role}</span>
          </h1>

          <p className="hero-tagline">
            {about.tagline}
          </p>

          <div className="hero-meta">
            <span className="meta-item">
              <GraduationCap size={18} className="meta-icon" />
              <span>{about.education}</span>
            </span>
            <span className="meta-item">
              <MapPin size={18} className="meta-icon" />
              <span>{about.location}</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Projects</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={17} />
              <span>Get In Touch</span>
            </a>

            <a
              href={about.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary resume-cta"
            >
              <FileText size={17} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href={about.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={about.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${about.social.email}`}
              className="social-icon-btn"
              aria-label="Email Vinay"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="hero-metrics-grid">
          {about.metrics.map((metric, idx) => (
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
