import React from 'react';
import './VisitorCounter.css';

const VisitorCounter = () => {
  return (
    <aside 
      className="visitor-counter-dock animate-fade-in"
      aria-label="Portfolio visitor analytics"
    >
      <div 
        className="visitor-dock-pill" 
        title="Live portfolio visits tracked via GitHub"
      >
        <span className="visitor-pulse-dot" aria-hidden="true"></span>
        <span className="visitor-dock-label">Portfolio Visits</span>
        
        <div className="visitor-dock-badge" aria-label="Live visit count">
          <img
            src="https://komarev.com/ghpvc/?username=vinaytheprogrammer-portfolio&label=&color=2563eb&style=flat-square"
            alt="Live visit count"
            height="20"
            loading="lazy"
          />
        </div>
      </div>
    </aside>
  );
};

export default VisitorCounter;
