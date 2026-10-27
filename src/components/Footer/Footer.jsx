import React from 'react';
import { Mail, Code2, GraduationCap, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { useNavigation } from '../../contexts/NavigationContext';
import { sweData } from '../../data/sweData';
import './Footer.css';

const Footer = () => {
  const { currentRoute, navigate } = useNavigation();

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        
        {/* Personas Switcher in Footer */}
        <div className="footer-personas">
          <span className="footer-persona-label">Explore Specialized Profiles:</span>
          <div className="footer-persona-links">
            <button
              onClick={() => navigate('/')}
              className={`footer-persona-btn ${currentRoute === '/' ? 'active' : ''}`}
            >
              <Code2 size={14} />
              <span>Software Engineer (SWE)</span>
            </button>
            <button
              onClick={() => navigate('/tutor')}
              className={`footer-persona-btn ${currentRoute === '/tutor' ? 'active' : ''}`}
            >
              <GraduationCap size={14} />
              <span>CS Educator (Codingbits)</span>
            </button>
            <button
              onClick={() => navigate('/freelancer')}
              className={`footer-persona-btn ${currentRoute === '/freelancer' ? 'active' : ''}`}
            >
              <Briefcase size={14} />
              <span>Freelance MVPs & Consulting</span>
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <div className="footer-brand">
            <span className="brand-badge-sm">VG</span>
            <span className="footer-brand-name">Vinay Gupta</span>
            <span className="footer-dot">•</span>
            <span className="footer-tag">NIT Jamshedpur MCA</span>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Vinay Gupta. Engineered with React 18, Vite & Precision.
          </p>

          <div className="footer-socials">
            <a
              href={sweData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={sweData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${sweData.email}`}
              aria-label="Email"
              title="Email Vinay"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
