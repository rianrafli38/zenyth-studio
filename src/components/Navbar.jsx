import { useEffect, useState } from 'preact/hooks';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Tutup menu setelah klik
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Zenyth ⚡</div>

      {/* Menu besar (desktop) */}
      <ul className={styles.navLinks}>
        <li onClick={() => scrollToSection('services')}>Our Services</li>
        <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>

      {/* Hamburger button */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <li onClick={() => scrollToSection('services')}>Our Services</li>
            <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;