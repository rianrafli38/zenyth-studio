import { Link } from 'wouter';
import styles from './PhotographerPage.module.css';

function PhotographerPage() {
  return (
    <div className={styles.container}>
      {/* Back to Home */}
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/">
          <a style={{ color: '#4b6cb7', textDecoration: 'underline', fontWeight: '500' }}>
            ← Back to Home
          </a>
        </Link>
      </div>

      <h1 className={styles.title}>📸 Photographer & Videographer Web Service</h1>
      <p className={styles.subtitle}>
        Elevate your portfolio's visibility and appeal with professional and elegant design.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🖼️ Elegant Portfolio</h2>
        <p className={styles.text}>
          Full-width gallery, lightbox display, and customizable project categories tailored to your style.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📅 Booking & Scheduling</h2>
        <p className={styles.text}>
          Automated booking form, Google Calendar integration, and reminders via email or WhatsApp.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🌐 SEO & Performance</h2>
        <p className={styles.text}>
          Search engine optimization, fast loading speeds, and mobile-friendly responsive design.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Showcase your talent on the digital stage</h2>
        <p className={styles.text}>
          Get a free consultation with the Zenyth Studio team to craft your digital presence.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Book Free Consultation
        </a>
      </section>

      {/* Navigate to Home Sections */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem' }}>Explore other sections:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/#services"><a className={styles.button}>Services</a></Link>
          <Link href="/#portfolio"><a className={styles.button}>Portfolio</a></Link>
          <Link href="/#about"><a className={styles.button}>About</a></Link>
          <Link href="/#contact"><a className={styles.button}>Contact</a></Link>
        </div>
      </div>
    </div>
  );
}

export default PhotographerPage;