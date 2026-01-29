import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to top on every navigation (using location.key for reliability)
  useLayoutEffect(() => {
    const scrollingElement = document.scrollingElement ?? document.documentElement;
    
    // Temporarily disable smooth scrolling for instant jump
    const prevBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Scroll both the element and window
    scrollingElement.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Double-tap with requestAnimationFrame to catch layout shifts
    requestAnimationFrame(() => {
      scrollingElement.scrollTop = 0;
      window.scrollTo(0, 0);
      // Restore original scroll behavior
      document.documentElement.style.scrollBehavior = prevBehavior;
    });
  }, [location.key]);

  return null;
};

export default ScrollToTop;
