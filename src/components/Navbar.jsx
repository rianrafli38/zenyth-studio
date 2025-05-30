import { useEffect, useState } from 'preact/hooks';
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
      setMenuOpen(false); // Tutup menu saat navigasi
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Zenyth ⚡</div>

      <ul className={styles.navLinks}>
        <li onClick={() => scrollToSection('services')}>Our Services</li>
        <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {menuOpen && (
        <ul className={styles.mobileMenu}>
          <li onClick={() => scrollToSection('services')}>Our Services</li>
          <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;