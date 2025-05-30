import styles from './ThankYou.module.css';
import { motion } from 'framer-motion';

function ThankYou() {
  return (
    <motion.div
      className={styles.thankYou}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={styles.message}>Thank You!</h1>
      <p className={styles.detail}>
        Your message has been successfully received. Zenyth Studio Team will contact you soon.
      </p>
      <a href="/" className={styles.backButton}>Back to home</a>
    </motion.div>
  );
}

export default ThankYou;