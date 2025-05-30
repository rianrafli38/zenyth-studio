import { motion } from 'framer-motion';
import styles from './About.module.css';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();

  return (
    <section id="about" className={styles.about}>
      <motion.div
        key={location.pathname + '-about'} // triknya di sini
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <h2 className={styles.sectionTitle}>About Zenyth Studio</h2>
        <p className={styles.content}>
          <span className={styles.highlight}>Zenyth Studio</span> is a digital space where we build more than just code.
With the spirit of <span className={styles.highlight}>“More Than A Code”</span>, we create digital experiences that blend technology, aesthetics, and meaning.
          <br /><br />
          We deliver intelligent web solutions and systems that not only work, but speak—representing each clients character and vision.
          <br /><br />
          Zenyth Studio is not an ordinary agency. We are a digital transformation partner, ready to walk with you to build a more focused, powerful, and valuable future.
        </p>
      </motion.div>
    </section>
  );
}

export default About;