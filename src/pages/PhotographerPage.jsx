import { motion } from 'framer-motion';
import styles from './PhotographerPage.module.css';

function PhotographerPage() {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        📸 Photographer & Videographer Web Service
      </motion.h1>

      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Elevate your portfolio's visibility and appeal with professional and elegant design.
      </motion.p>

      {/* Repeat for each section */}
      {[
        {
          title: '🖼️ Elegant Portfolio',
          desc: 'Full-width gallery, lightbox display, and customizable project categories tailored to your style.',
        },
        {
          title: '📅 Booking & Scheduling',
          desc: 'Automated booking form, Google Calendar integration, and reminders via email or WhatsApp.',
        },
        {
          title: '🌐 SEO & Performance',
          desc: 'Search engine optimization, fast loading speeds, and mobile-friendly responsive design.',
        },
      ].map((item, i) => (
        <motion.section
          key={i}
          className={styles.section}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.2 }}
        >
          <h2 className={styles.sectionTitle}>{item.title}</h2>
          <p className={styles.text}>{item.desc}</p>
        </motion.section>
      ))}

      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
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
      </motion.section>
    </motion.div>
  );
}

export default PhotographerPage;