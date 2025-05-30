import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function Hero() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className={styles.title}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className={styles.inline}>Zenyth Studio ⚡️</span>
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        More Than A Code — We Build Digital Destiny.  
        From AI to Web Systems, we craft futures with meaning.
      </motion.p>

      <motion.button
        className={styles.ctaButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Start Your Project
      </motion.button>
    </motion.section>
  );
}

export default Hero;