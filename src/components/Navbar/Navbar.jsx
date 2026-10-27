import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Sparkles, Send, BookOpen } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigation } from '../../contexts/NavigationContext';
import { sweData } from '../../data/sweData';
import { tutorData } from '../../data/tutorData';
import { freelancerData } from '../../data/freelancerData';
import PersonaSwitcher from '../PersonaSwitcher/PersonaSwitcher';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentRoute, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active data based on current route
  const activeData =
    currentRoute === '/tutor'
      ? tutorData
      : currentRoute === '/freelancer'
      ? freelancerData
      : sweData;

  useEffect(() => {
    let isScrolledRef = false;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          if (scrolled !== isScrolledRef) {
            isScrolledRef = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleBrandClick = (e) => {
    e.preventDefault();
    navigate(currentRoute, 'top');
    closeMobileMenu();
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      navigate(currentRoute, targetId);
      closeMobileMenu();
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand */}
        <a href="#top" className="nav-brand" onClick={handleBrandClick}>
          <span className="brand-badge">{activeData.brandBadge || 'VG'}</span>
          <span className="brand-text">{activeData.brand || 'Vinay Gupta'}</span>
        </a>

        {/* Central Persona Switcher on Desktop */}
        <div className="nav-center-switcher">
          <PersonaSwitcher />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {activeData.navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle color theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            {currentRoute === '/tutor' ? (
              <a
                href={tutorData.teachingRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm resume-btn tutor-cta-btn"
              >
                <BookOpen size={15} />
                <span>Teaching Repo</span>
              </a>
            ) : currentRoute === '/freelancer' ? (
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn btn-primary btn-sm resume-btn freelance-cta-btn"
              >
                <Send size={15} />
                <span>Hire Me</span>
              </a>
            ) : (
              <a
                href={sweData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm resume-btn"
              >
                <FileText size={15} />
                <span>Resume</span>
              </a>
            )}
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="mobile-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn mobile-theme"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Switch Profile</span>
          <PersonaSwitcher isMobile onSelect={closeMobileMenu} />
        </div>

        <ul className="mobile-links">
          {activeData.navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-cta">
          {currentRoute === '/tutor' ? (
            <a
              href={tutorData.teachingRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
              onClick={closeMobileMenu}
            >
              <BookOpen size={16} />
              <span>Explore Teaching Repo</span>
            </a>
          ) : currentRoute === '/freelancer' ? (
            <a
              href="#contact"
              className="btn btn-primary btn-block"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <Send size={16} />
              <span>Request Discovery Call</span>
            </a>
          ) : (
            <a
              href={sweData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
              onClick={closeMobileMenu}
            >
              <FileText size={16} />
              <span>Download SWE Resume</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
