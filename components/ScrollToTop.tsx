
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component listens for route changes and forces the 
 * window scroll position to the top of the page.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position to top-left (0,0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant jump to top without smooth scrolling transition for clean navigation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
