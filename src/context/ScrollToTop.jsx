// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // smooth scroll, চাইলে 'auto' করতে পারো
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
