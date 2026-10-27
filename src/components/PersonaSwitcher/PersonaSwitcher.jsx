import React from 'react';
import { Code2, GraduationCap, Briefcase } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import './PersonaSwitcher.css';

const PersonaSwitcher = ({ isMobile = false, onSelect }) => {
  const { currentRoute, navigate } = useNavigation();

  const personas = [
    {
      id: '/',
      label: 'Software Engineer',
      shortLabel: 'SWE',
      icon: <Code2 size={15} />,
      tag: 'For HR & Tech Leads',
    },
    {
      id: '/tutor',
      label: 'CS Educator',
      shortLabel: 'Tutor',
      icon: <GraduationCap size={15} />,
      tag: 'For Students & EdTech',
    },
    {
      id: '/freelancer',
      label: 'Freelancer',
      shortLabel: 'Freelance',
      icon: <Briefcase size={15} />,
      tag: 'For Founders & Clients',
    },
  ];

  const handleSwitch = (path) => {
    navigate(path);
    if (onSelect) onSelect();
  };

  return (
    <div className={`persona-switcher ${isMobile ? 'mobile' : ''}`}>
      <div className="persona-track">
        {personas.map((p) => {
          const isActive = currentRoute === p.id;
          return (
            <button
              key={p.id}
              onClick={() => handleSwitch(p.id)}
              className={`persona-pill ${isActive ? 'active' : ''}`}
              title={p.tag}
              aria-label={`Switch to ${p.label} profile`}
            >
              <span className="persona-icon">{p.icon}</span>
              <span className="persona-text desktop-only">{p.label}</span>
              <span className="persona-text mobile-only">{p.shortLabel}</span>
              {isActive && <span className="persona-active-glow"></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PersonaSwitcher;
