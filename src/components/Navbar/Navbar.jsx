import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { header, about } from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#top" className="nav-brand" onClick={closeMobileMenu}>
          <span className="brand-badge">VG</span>
          <span className="brand-text">Vinay Gupta</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {header.navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
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

            <a
              href={about.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm resume-btn"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
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
        <ul className="mobile-links">
          {header.navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={closeMobileMenu} className="mobile-link">
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-resume-item">
            <a
              href={about.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-mobile-resume"
              onClick={closeMobileMenu}
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
