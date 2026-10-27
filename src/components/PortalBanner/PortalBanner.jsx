import React from 'react';
import { ArrowRight, Code2, GraduationCap, Briefcase } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import './PortalBanner.css';

const PortalBanner = () => {
  const { currentRoute, navigate } = useNavigation();

  if (currentRoute === '/tutor') {
    return (
      <div className="portal-banner glass-card">
        <div className="portal-info">
          <span className="portal-tag">Looking for someone else?</span>
          <p className="portal-desc">
            Hiring for full-time engineering roles or looking for contract MVP / GenAI consulting?
          </p>
        </div>
        <div className="portal-buttons">
          <button onClick={() => navigate('/')} className="portal-btn">
            <Code2 size={16} />
            <span>Software Engineer Profile</span>
            <ArrowRight size={14} />
          </button>
          <button onClick={() => navigate('/freelancer')} className="portal-btn">
            <Briefcase size={16} />
            <span>Freelance & Consulting</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  if (currentRoute === '/freelancer') {
    return (
      <div className="portal-banner glass-card">
        <div className="portal-info">
          <span className="portal-tag">Looking for someone else?</span>
          <p className="portal-desc">
            Recruiting for a full-time senior role or seeking 1-on-1 computer science mentorship?
          </p>
        </div>
        <div className="portal-buttons">
          <button onClick={() => navigate('/')} className="portal-btn">
            <Code2 size={16} />
            <span>Software Engineer Profile</span>
            <ArrowRight size={14} />
          </button>
          <button onClick={() => navigate('/tutor')} className="portal-btn">
            <GraduationCap size={16} />
            <span>CS Educator & Mentorship</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  // Default: Software Engineer ('/')
  return (
    <div className="portal-banner glass-card">
      <div className="portal-info">
        <span className="portal-tag">Specialized Portals</span>
        <p className="portal-desc">
          Are you a student looking for 1:1 CS tutoring, or a founder looking to build a full-stack MVP?
        </p>
      </div>
      <div className="portal-buttons">
        <button onClick={() => navigate('/tutor')} className="portal-btn highlight-tutor">
          <GraduationCap size={16} />
          <span>CS Tutor & Mentorship (Codingbits)</span>
          <ArrowRight size={14} />
        </button>
        <button onClick={() => navigate('/freelancer')} className="portal-btn highlight-freelancer">
          <Briefcase size={16} />
          <span>Freelance MVPs & Consulting</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default PortalBanner;
