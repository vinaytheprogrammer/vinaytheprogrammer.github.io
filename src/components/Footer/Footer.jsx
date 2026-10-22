import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { about } from '../../portfolio';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="brand-badge-sm">VG</span>
          <span className="footer-brand-name">Vinay Gupta</span>
          <span className="footer-dot">•</span>
          <span className="footer-tag">NIT Jamshedpur</span>
        </div>

        <p className="footer-copy">
          Designed & Built with passion using React, Vite & Modern CSS.
        </p>

        <div className="footer-socials">
          <a
            href={about.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={about.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${about.social.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
