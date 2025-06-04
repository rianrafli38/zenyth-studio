import { useEffect } from 'preact/hooks';
import { useLocation } from 'wouter';

function ScrollTo() {
  const [location] = useLocation();

  useEffect(() => {
    if (location.includes('#')) {
      const [, hash] = location.split('#');
      const targetEl = document.getElementById(hash);

      if (targetEl) {
        // Delay sedikit agar scroll terjadi setelah komponen dirender
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

export default ScrollTo;