import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar/Navbar';
import SweView from './views/SweView';
import TutorView from './views/TutorView';
import FreelancerView from './views/FreelancerView';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useNavigation } from './contexts/NavigationContext';

const App = () => {
  const { currentRoute } = useNavigation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Smooth anchor navigation handler with navbar offset
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -80, duration: 1.0 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // When currentRoute changes, scroll smoothly to top
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentRoute]);

  const renderActiveView = () => {
    switch (currentRoute) {
      case '/tutor':
        return <TutorView />;
      case '/freelancer':
        return <FreelancerView />;
      case '/':
      default:
        return <SweView />;
    }
  };

  return (
    <div className={`portfolio-app route-${currentRoute.replace('/', '') || 'swe'}`}>
      <Navbar />
      <main key={currentRoute} className="view-transition-wrapper animate-fade-in">
        {renderActiveView()}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
