import { useEffect, useState } from 'preact/hooks';
import { Link } from 'wouter';
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
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div
        className={styles.logo}
        onClick={() => scrollToSection('hero')}
        style={{ cursor: 'pointer' }}
      >
        Zenyth ⚡
      </div>

      <ul className={styles.navLinks}>
        <li onClick={() => scrollToSection('services')}>Our Services</li>
        <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
        <li>
          <Link href="/photographer">
            <a className={styles.link}>📸 Photographer</a>
          </Link>
        </li>
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
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/photographer">
              <a className={styles.link}>📸 Photographer</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;