import React from 'react';
import { ArrowRight, Mail, BookOpen, GraduationCap, MapPin, Sparkles, Code2, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { tutorData } from '../../data/tutorData';
import PortalBanner from '../PortalBanner/PortalBanner';
import './TutorHero.css';

const TutorHero = () => {
  return (
    <section id="top" className="tutor-hero-section">
      <div className="container tutor-hero-container">
        
        {/* Availability Badge */}
        <div className="hero-badge-wrapper animate-fade-in">
          <div className="hero-status-badge tutor-badge">
            <span className="status-dot green"></span>
            <span>{tutorData.badge}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="hero-content">
          <h1 className="hero-title">
            Learn Computer Science from an{' '}
            <span className="text-gradient tutor-gradient">Industry Engineer</span>
          </h1>

          <p className="tutor-hero-subtitle">
            <strong>{tutorData.name}</strong> — {tutorData.title} & Alumnus of <strong>NIT Jamshedpur</strong>
          </p>

          <p className="hero-tagline">
            {tutorData.tagline}
          </p>

          <div className="hero-meta">
            <span className="meta-item">
              <Award size={18} className="meta-icon tutor-icon" />
              <span>{tutorData.education}</span>
            </span>
            <span className="meta-item">
              <MapPin size={18} className="meta-icon tutor-icon" />
              <span>{tutorData.location}</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#curriculum" className="btn btn-primary tutor-btn-primary">
              <span>View Courses & Syllabus</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={17} />
              <span>Book 1:1 Session</span>
            </a>

            <a
              href={tutorData.teachingRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <BookOpen size={17} />
              <span>Teaching GitHub</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href={tutorData.teachingRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Teaching Repository"
              title="GitHub Teaching Repository"
            >
              <BookOpen size={20} />
            </a>
            <a
              href={tutorData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={tutorData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${tutorData.email}`}
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
        <div className="hero-metrics-grid tutor-metrics-grid">
          {tutorData.metrics.map((metric, idx) => (
            <div key={idx} className="metric-card glass-card tutor-metric-card">
              <span className="metric-value text-gradient tutor-gradient">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TutorHero;
