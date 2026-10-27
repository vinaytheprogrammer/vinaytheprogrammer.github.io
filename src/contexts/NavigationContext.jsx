import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

const normalizePath = (pathname) => {
  if (!pathname) return '/';
  // Remove trailing slashes and index.html if present
  let clean = pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
  if (clean === '' || clean === '/') return '/';
  if (clean.endsWith('/tutor') || clean === 'tutor') return '/tutor';
  if (clean.endsWith('/freelancer') || clean === 'freelancer') return '/freelancer';
  return clean.startsWith('/') ? clean : `/${clean}`;
};

export const NavigationProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  // Keep track of route changes and popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = normalizePath(window.location.pathname);
      setCurrentRoute(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and meta description when currentRoute changes
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (currentRoute === '/tutor') {
      document.title = 'Vinay Gupta | Computer Science Educator & Technical Mentor';
    } else if (currentRoute === '/freelancer') {
      document.title = 'Vinay Gupta | Full Stack & GenAI Freelance Consultant';
    } else {
      document.title = 'Vinay Gupta | Full Stack & Generative AI Software Engineer';
    }
  }, [currentRoute]);

  const navigate = (path, hash = '') => {
    const normalized = normalizePath(path);
    const targetUrl = normalized === '/' ? (hash ? `#${hash}` : '/') : (hash ? `${normalized}#${hash}` : normalized);

    if (window.location.pathname !== normalized) {
      window.history.pushState({ path: normalized }, '', targetUrl);
      setCurrentRoute(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
