import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

const VisitorCounter = () => {
  const [views, setViews] = useState(() => {
    return localStorage.getItem('portfolio_cached_views') || null;
  });

  useEffect(() => {
    let isMounted = true;
    const hasVisitedSession = sessionStorage.getItem('visited_session_token');
    
    // If user already visited in this session, read count; otherwise increment
    const endpoint = hasVisitedSession
      ? 'https://countapi.mileshilliard.com/api/v1/get/vinaytheprogrammer_portfolio_visits'
      : 'https://countapi.mileshilliard.com/api/v1/hit/vinaytheprogrammer_portfolio_visits';

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isMounted && data && typeof data.value === 'number') {
          const formatted = data.value.toLocaleString();
          setViews(formatted);
          localStorage.setItem('portfolio_cached_views', formatted);
          sessionStorage.setItem('visited_session_token', 'true');
        }
      })
      .catch((err) => {
        // Fallback: use cached value or default
        if (isMounted && !views) {
          setViews(localStorage.getItem('portfolio_cached_views') || '1');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <aside 
      className="visitor-counter-dock animate-fade-in"
      aria-label="Portfolio visitor analytics"
    >
      <div 
        className="visitor-dock-pill" 
        title="Live portfolio visits tracked in real time"
      >
        <span className="visitor-pulse-dot" aria-hidden="true"></span>
        <span className="visitor-dock-label">Portfolio Visits</span>
        <span className="visitor-dock-sep" aria-hidden="true">•</span>
        <span className="visitor-dock-value" aria-label={`Total visits: ${views || '...'}`}>
          {views || '...'}
        </span>

        {/* Invisible 1x1 sync pixel for GitHub profile tracker */}
        <img
          src="https://komarev.com/ghpvc/?username=vinaytheprogrammer-portfolio&style=pixel"
          alt=""
          width="1"
          height="1"
          className="visitor-sync-pixel"
          aria-hidden="true"
        />
      </div>
    </aside>
  );
};

export default VisitorCounter;
