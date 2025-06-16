import { useEffect, useState } from 'preact/hooks';
import { Link, useLocation } from 'wouter';
import styles from './Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHome = location === '/';

  const navLink = (text, id) => {
    if (isHome) {
      return (
        <li onClick={() => {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
          setMenuOpen(false);
        }}>
          {text}
        </li>
      );
    } else {
      return (
        <li>
          <Link href={`/#${id}`}>
            <a className={styles.link} onClick={() => setMenuOpen(false)}>
              {text}
            </a>
          </Link>
        </li>
      );
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div
        className={styles.logo}
        onClick={() => {
          if (isHome) {
            const hero = document.getElementById('hero');
            if (hero) hero.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = '/#hero';
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        Zenyth ⚡
      </div>

      <ul className={styles.navLinks}>
        {navLink('Our Services', 'services')}
        {navLink('Portfolio', 'portfolio')}
        {navLink('About', 'about')}
        {navLink('Contact', 'contact')}
        <li>
          <Link href="/photographer">
            <a className={styles.link}>Photographer</a>
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
          {navLink('Our Services', 'services')}
          {navLink('Portfolio', 'portfolio')}
          {navLink('About', 'about')}
          {navLink('Contact', 'contact')}
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/photographer">
              <a className={styles.link}>Photographer</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;