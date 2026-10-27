import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import './VisitorCounter.css';

const VisitorCounter = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside 
      className={`visitor-counter-dock ${isMinimized ? 'minimized' : ''}`}
      aria-label="Portfolio visitor analytics"
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="visitor-dock-minimized-btn"
          title="Show Portfolio Visits"
          aria-label="Expand visitor counter"
        >
          <span className="visitor-pulse-dot" aria-hidden="true"></span>
          <Eye size={14} className="visitor-dock-icon" />
        </button>
      ) : (
        <div className="visitor-dock-pill">
          <span className="visitor-pulse-dot" aria-hidden="true"></span>
          <span className="visitor-dock-label">Portfolio Visits</span>
          
          <div className="visitor-dock-count-mask" title="Live Portfolio Visits">
            <img
              src="https://komarev.com/ghpvc/?username=vinaytheprogrammer-portfolio&label=&color=2563eb&style=flat-square"
              alt="Live visit count"
              height="20"
              loading="lazy"
            />
          </div>

          <button
            onClick={() => setIsMinimized(true)}
            className="visitor-dock-close-btn"
            title="Minimize counter"
            aria-label="Minimize visitor counter"
          >
            <X size={12} />
          </button>
        </div>
      )}
    </aside>
  );
};

export default VisitorCounter;
