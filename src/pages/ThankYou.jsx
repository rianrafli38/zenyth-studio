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
      <h1 className={styles.message}>Terima Kasih 🙏</h1>
      <p className={styles.detail}>
        Pesanmu telah berhasil kami terima. Tim Zenyth Studio akan segera menghubungi Anda.
      </p>
      <a href="/" className={styles.backButton}>Kembali ke Beranda</a>
    </motion.div>
  );
}

export default ThankYou;